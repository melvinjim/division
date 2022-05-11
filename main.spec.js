const { it, expect} = require("@jest/globals");
const Division = require("./division");

describe('resultados de divisiones', () => {
    const division = new Division();
    it('division entre los numeros 6 y 2 donde el resultado debe ser 3', () =>{
        const total = division.firstResult(6,2);
        expect(total).toBe(3);
    });
});