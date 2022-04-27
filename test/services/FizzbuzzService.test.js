const FizzbuzzService = require("./../../lib/services/FizzbuzzService");
describe("Unit test for FizzbuzzService class", () => {
    test("Test static method applyValidationInExplorer trick = score ", () => {
        const explorer = {name: "Explorer1", score: 1};
        const validatedExplorer = FizzbuzzService.applyValidationInExplorer(explorer);

        expect(validatedExplorer).toStrictEqual(JSON.parse("{\"name\": \"Explorer1\", \"score\": 1, \"trick\": 1}"));
    });

    test("Test static method applyValidationInExplorer trick = FIZZ", () => {
        const explorer = {name: "Explorer1", score: 3};
        const validatedExplorer = FizzbuzzService.applyValidationInExplorer(explorer);

        expect(validatedExplorer).toStrictEqual(JSON.parse("{\"name\": \"Explorer1\", \"score\": 3, \"trick\": \"FIZZ\"}"));
    });

    test("Test static method applyValidationInExplorer trick = BUZZ", () => {
        const explorer = {name: "Explorer1", score: 5};
        const validatedExplorer = FizzbuzzService.applyValidationInExplorer(explorer);

        expect(validatedExplorer).toStrictEqual(JSON.parse("{\"name\": \"Explorer1\", \"score\": 5, \"trick\": \"BUZZ\"}"));
    });

    test("Test static method applyValidationInExplorer trick = FIZZBUZZ", () => {
        const explorer = {name: "Explorer1", score: 15};
        const validatedExplorer = FizzbuzzService.applyValidationInExplorer(explorer);

        expect(validatedExplorer).toStrictEqual(JSON.parse("{\"name\": \"Explorer1\", \"score\": 15, \"trick\": \"FIZZBUZZ\"}"));
    });


});
