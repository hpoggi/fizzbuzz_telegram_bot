const ExplorerService = require('./../services/ExplorerService')
const FizzbuzzService = require('./../services/FizzbuzzService')
const Reader = require('./../utils/Reader')
const TelegramBot = require("node-telegram-bot-api");
require('dotenv').config()

class ExplorerController {

    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile('explorers.json')
        return ExplorerService.filterByMission(explorers, mission)
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile('explorers.json')
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission)
    }

    static getExplorersAmountByMission(mission){
        const explorers = Reader.readJsonFile('explorers.json')
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission)
    }

    static applyFizzbuzz(number){
        return FizzbuzzService.applyValidationInNumber(number)
    }

    static botListener(){
        const token = process.env['API_TOKEN'];

        // Create a bot that uses 'polling' to fetch new updates
        const bot = new TelegramBot(token, {polling: true});

        // Matches "/echo [whatever]"
        bot.onText(/\/echo (.+)/, (msg, match) => {

            const chatId = msg.chat.id;
            const resp = match[1];

            bot.sendMessage(chatId, resp);
        });

        bot.on("message", (msg) => {
            const chatId = msg.chat.id;
            const numberToApplyFb = parseInt(msg.text);

            if(!isNaN(numberToApplyFb)){
                const fizzbuzzTrick = this.applyFizzbuzz(numberToApplyFb);
                const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
                bot.sendMessage(chatId, responseBot);
            } else if(msg.text === "java" || msg.text === "node"){
                const explorers = this.getExplorersUsernamesByMission(msg.text);
                const responseBot = `Explorers de ${msg.text}: ${explorers.join(", ")}`;
                bot.sendMessage(chatId, responseBot);
            } else {
                bot.sendMessage(chatId, "Envía un número válido");
            }

        });

    }

}

module.exports = ExplorerController
