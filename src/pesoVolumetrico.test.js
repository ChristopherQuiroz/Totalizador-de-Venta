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
})