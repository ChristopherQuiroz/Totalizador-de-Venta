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

    it('Si la categoria es Alimentos, calcular un 2% de descuento adicional', ()=>{
        const precioTotal = new PrecioTotal();
        precioTotal.cantidad = 12;
        precioTotal.precio = 365;
        precioTotal.estado = "UT";
        precioTotal.categoria = "Alimento";

        expect(precioTotal.calcularTotal()).toBe(4348.96);
    })
})