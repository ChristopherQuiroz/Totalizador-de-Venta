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
        precioTotal.categoria = "Alimentos";

        expect(precioTotal.calcularTotal()).toBe(4348.96);
    })

    it('Si la categoria es Bebidas alcohólicas, no aplica descuento y suma 7% de impuesto', ()=>{
        const precioTotal = new PrecioTotal();
        precioTotal.cantidad = 12;
        precioTotal.precio = 365;
        precioTotal.estado = "UT";
        precioTotal.categoria = "Bebidas Alcohólicas";

        expect(precioTotal.calcularTotal()).toBe(4728.98);
    })

    it('Si la categoria es Material de Escritorio, aplica un descuento adicional del 1.5%', ()=>{
        const precioTotal = new PrecioTotal();
        precioTotal.cantidad = 12;
        precioTotal.precio = 365;
        precioTotal.estado = "UT";
        precioTotal.categoria = "Material de Escritorio";

        expect(precioTotal.calcularTotal()).toBe(4371.14);
    })

    it('Si la categoria es Muebles, no aplica descuento y suma 3% de impuesto', ()=>{
        const precioTotal = new PrecioTotal();
        precioTotal.cantidad = 12;
        precioTotal.precio = 365;
        precioTotal.estado = "UT";
        precioTotal.categoria = "Muebles";

        expect(precioTotal.calcularTotal()).toBe(4562.54);
    })
})