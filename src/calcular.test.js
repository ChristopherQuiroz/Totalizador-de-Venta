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
        
        expect(precioTotal.calcularTotal()).toBe(4531.13);
    })

    it('Si el codigo de estado es NV aumentar un 8% al precio total', ()=>{
        const precioTotal = new PrecioTotal();
        precioTotal.cantidad = 12;
        precioTotal.precio = 365;
        precioTotal.estado = "NV";
        
        expect(precioTotal.calcularTotal()).toBe(4588.49);
    })

    it('Si el codigo de estado es TX aumentar un 6.25% al precio total', ()=>{
        const precioTotal = new PrecioTotal();
        precioTotal.cantidad = 12;
        precioTotal.precio = 365;
        precioTotal.estado = "TX";
        
        expect(precioTotal.calcularTotal()).toBe(4514.14);
    })

    it('Si el codigo de estado es AL aumentar un 4.00% al precio total', ()=>{
        const precioTotal = new PrecioTotal();
        precioTotal.cantidad = 12;
        precioTotal.precio = 365;
        precioTotal.estado = "AL";
        
        expect(precioTotal.calcularTotal()).toBe(4418.54);
    })

    it('Si el codigo de estado es CA aumentar un 8.25% al precio total', ()=>{
        const precioTotal = new PrecioTotal();
        precioTotal.cantidad = 12;
        precioTotal.precio = 365;
        precioTotal.estado = "CA";
        
        expect(precioTotal.calcularTotal()).toBe(4599.11);
    })

    it('Calcular descuento si el precio neto es mayor a 1000', ()=>{
        const precioTotal = new PrecioTotal();
        precioTotal.cantidad = 500;
        precioTotal.precio = 2;
        precioTotal.estado = "UT";

        expect(precioTotal.calcularTotal()).toBe(1034.51);
    })
})