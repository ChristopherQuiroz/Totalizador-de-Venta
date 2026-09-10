import PrecioTotal from "./calcular";

describe('calculo de los descuentos por categoria', ()=>{
    it('Si la categoria son Varios no se aplica descuento ni impuesto', ()=>{
        const precioTotal = new PrecioTotal();
        precioTotal.cantidad = 12;
        precioTotal.precio = 365;
        precioTotal.estado = "UT";
        precioTotal.categoria = "Varios";

        expect(precioTotal.calcularTotal()).toBe(4437.71);
    })
})