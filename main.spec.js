const { it, expect} = require("@jest/globals");
const Division = require("./division");

describe('resultados de divisiones', () => {
    const division = new Division();
    it('division entre los numeros 6 y 2 donde el resultado debe ser 3', () =>{
        const total = division.firstResult(6,2);
        expect(total).toBe(3);
    });

    it('division entre los numeros 1 y 6 donde el resultado debe ser un numero periodico que es dismiinuido a solo dos numeros despues de la coma', () =>{
        const total = division.secondtResult(1,6);
        var seting = total.toFixed(2)
        expect(seting).toBe(seting);
    });
});