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

    it('Si tengo 12 items y el precio es de 365 -> precio neto: 4380', ()=>{
        const precioTotal = new PrecioTotal();
        precioTotal.cantidad = 12;
        precioTotal.precio = 365;

        expect(precioTotal.calcularPrecioNeto()).toBe(4380);
    })

    it('UT: 12 items a 365, impuesto 6.65%, descuento 5% por superar 3000', ()=>{
        const precioTotal = new PrecioTotal();
        precioTotal.cantidad = 12;
        precioTotal.precio = 365;
        precioTotal.estado = "UT";
        
        expect(precioTotal.calcularTotal()).toBe(4437.71);
    })

    it('NV: 12 items a 365, impuesto 8%, descuento 5% por superar 3000', ()=>{
        const precioTotal = new PrecioTotal();
        precioTotal.cantidad = 12;
        precioTotal.precio = 365;
        precioTotal.estado = "NV";
        
        expect(precioTotal.calcularTotal()).toBe(4493.88);
    })

    it('TX: 12 items a 365, impuesto 6.25%, descuento 5% por superar 3000', ()=>{
        const precioTotal = new PrecioTotal();
        precioTotal.cantidad = 12;
        precioTotal.precio = 365;
        precioTotal.estado = "TX";
        
        expect(precioTotal.calcularTotal()).toBe(4421.06);
    })

    it('AL: 12 items a 365, impuesto 4%, descuento 5% por superar 3000', ()=>{
        const precioTotal = new PrecioTotal();
        precioTotal.cantidad = 12;
        precioTotal.precio = 365;
        precioTotal.estado = "AL";
        
        expect(precioTotal.calcularTotal()).toBe(4327.44);
    })

    it('CA: 12 items a 365, impuesto 8.25%, descuento 5% por superar 3000', ()=>{
        const precioTotal = new PrecioTotal();
        precioTotal.cantidad = 12;
        precioTotal.precio = 365;
        precioTotal.estado = "CA";
        
        expect(precioTotal.calcularTotal()).toBe(4504.28);
    })

    it('Calcular descuento si el precio neto es mayor a 1000', ()=>{
        const precioTotal = new PrecioTotal();
        precioTotal.cantidad = 500;
        precioTotal.precio = 2;
        precioTotal.estado = "UT";

        expect(precioTotal.calcularTotal()).toBe(1034.51);
    })

    it('Calcular descuento del 5% si el precio neto es mayor a 3000', ()=>{
        const precioTotal = new PrecioTotal();
        precioTotal.cantidad = 1000;
        precioTotal.precio = 3;
        precioTotal.estado = "UT";

        expect(precioTotal.calcularTotal()).toBe(3039.53);
    })

    it('Calcular descuento del 7% si el precio neto es mayor a 7000', ()=>{
        const precioTotal = new PrecioTotal();
        precioTotal.cantidad = 1000;
        precioTotal.precio = 7;
        precioTotal.estado = "UT";

        expect(precioTotal.calcularTotal()).toBe(6942.91);
    })
})