const { it, expect } = require("@jest/globals");
const division = require("./division");

describe('first test result of divisions', () => {
    it('division between the numbers 6 and 2 where the result must be 3', () =>{
        var div = division(6, 2);
        expect(div).toBe(3);
    });
});

describe('second test result of divisions', () => {
    it('division between two integers that yields a periodic number', () =>{
        var div = division(1, 6);
        expect(div).toBe(0.16666666666666666);
    });
});

describe('third test result of divisions', () => {
    it('division that cannot be performed and will result in an error message', () =>{
        const total = division(5, 0);
        expect(total).toBe(Infinity);
    });
});

describe('fourh test result of divisions', () => {
    it('You cannot divide between 0 and 0', () =>{
        const total = division(0, 0);
        expect(total).toBe(NaN);
    });
});

describe('five test result of divisions', () => {
    it('division where the argument is of type text and must not allow division', () =>{
        const total = division("Melvin", 6);
        expect(total).toBe("I can not perform this division, I only receive numbers");
    });
});

describe('sixth test result of divisions', () => {
    it('division where the arguments are not integers', () =>{
        const total = division(5.3, 2.8);
        expect(total).toBe(1.892857142857143);
    });
});