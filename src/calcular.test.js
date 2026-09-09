import PrecioTotal from "./calcular";

describe('calculo de precio total', ()=>{
    it('Si tengo 2 items y precio por item 3 -> precio neto: 6', ()=>{
        const precioTotal = new PrecioTotal();
        precioTotal.cantidad = 2;
        precioTotal.precio = 3;

        expect(precioTotal.calcularPrecioNeto()).toBe(6);
    })

    it('Si tengo 12 items y el precio es de 365 -> precio neto: 4380', ()=>{
        const precioTotal = new PrecioTotal();
        precioTotal.cantidad = 12;
        precioTotal.precio = 365;

        expect(precioTotal.calcularPrecioNeto()).toBe(4380);
    })

    it('Si el codigo de estado es UT aumentar un 6.65% al precio total', ()=>{
        const precioTotal = new PrecioTotal();
        precioTotal.cantidad = 12;
        precioTotal.precio = 365;
        precioTotal.estado = "UT";
        
        expect(precioTotal.calcularTotal()).toBe(4671.27);
    })
})