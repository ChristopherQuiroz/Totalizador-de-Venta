import PrecioTotal from "./calcular";

describe('Calcular el descuento en $ segun el peso volumetrico', ()=>{
    it('No se da un descuento extra si esta el peso volumetrico entre 0-10', ()=>{
        const precioTotal = new PrecioTotal();
        precioTotal.cantidad = 12;
        precioTotal.precio = 365;
        precioTotal.estado = "UT";
        precioTotal.categoria = "Muebles";
        precioTotal.peso = 0;
        
        expect(precioTotal.calcularTotal()).toBe(4562.54);
    })

    it('Se cobra un extra de 3.5 si el peso volumetrico esta entre 11-20', ()=>{
        const precioTotal = new PrecioTotal();
        precioTotal.cantidad = 12;
        precioTotal.precio = 365;
        precioTotal.estado = "UT";
        precioTotal.categoria = "Muebles";
        precioTotal.peso = 15;

        expect(precioTotal.calcularTotal()).toBe(4565.86);
    })
})