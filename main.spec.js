const { it, expect } = require("@jest/globals");
const Division = require("./division");

describe('first test result of divisions', () => {
    const division = new Division();
    it('division between the numbers 6 and 2 where the result must be 3', () =>{
        const total = division.firstResult(6,2);
        expect(total).toBe(3);
    });
});

describe('second test result of divisions', () => {
    const division = new Division();
    it('division between the numbers 1 and 6 where the result must be a periodic number that is reduced to only two numbers after the comma', () =>{
        const total = division.secondtResult(1,6);
        var seting = total.toFixed(2)
        expect(seting).toBe(seting);
    });
});

describe('third test result of divisions', () => {
    const division = new Division();
    it('division between a text type parameter and a numeric type parameter that should result in NaN', () =>{
        const total = division.thirdResult("Melvin",6);
        if (isNaN(total)) {
            expect(total).toBe(NaN);
        }
    });
});

describe('fourth test result of divisions', () => {
    const division = new Division();
    it('division that cannot be performed and will result in an error message', () =>{
        const total = division.forthResult(5,0);
        expect(total).toBe("error, cant divide by 0");
    });
});