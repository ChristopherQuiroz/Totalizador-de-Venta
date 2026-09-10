import PrecioTotal from "./calcular";

describe('calculo de descuentos por tipo de cliente', ()=>{
	it('Si el cliente es Normal, aplica un descuento adicional del 0%', ()=>{
		const precioTotal = new PrecioTotal();
		precioTotal.cantidad = 12;
		precioTotal.precio = 365;
		precioTotal.estado = "UT";
		precioTotal.categoria = "Varios";
		precioTotal.peso = 0;
		precioTotal.tipoCliente = "Normal";

		expect(precioTotal.calcularTotal()).toBe(4437.71);
	})
})
