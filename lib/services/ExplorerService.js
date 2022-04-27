class ExplorerService{

    static filterByMission(explorers, mission){
        return explorers.filter((explorer) => explorer.mission === mission)
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const filteredExp = ExplorerService.filterByMission(explorers, mission)
        return filteredExp.length
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const filteredExp = ExplorerService.filterByMission(explorers, mission)
        return filteredExp.map((explorer) => explorer.githubUsername )
    }

}

module.exports = ExplorerService
