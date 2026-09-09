import PrecioTotal from "./calcular";

describe('calculo de precio total', ()=>{
    it('Si tengo 2 items y precio por item 3 -> costo total: 6', ()=>{
        expect(PrecioTotal.calcularPrecioNeto()).toBe(6);
    })
})