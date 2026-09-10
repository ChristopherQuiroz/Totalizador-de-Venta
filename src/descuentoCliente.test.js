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

	it('Si el cliente es Recurrente, aplica un descuento adicional del 0.5%', ()=>{
		const precioTotal = new PrecioTotal();
		precioTotal.cantidad = 12;
		precioTotal.precio = 365;
		precioTotal.estado = "UT";
		precioTotal.categoria = "Varios";
		precioTotal.peso = 0;
		precioTotal.tipoCliente = "Recurrente";

		expect(precioTotal.calcularTotal()).toBe(4415.52);
	})

	it('Si el cliente es Antiguo Recurrente, aplica un descuento adicional del 1%', ()=>{
		const precioTotal = new PrecioTotal();
		precioTotal.cantidad = 12;
		precioTotal.precio = 365;
		precioTotal.estado = "UT";
		precioTotal.categoria = "Varios";
		precioTotal.peso = 0;
		precioTotal.tipoCliente = "Antiguo Recurrente";

		expect(precioTotal.calcularTotal()).toBe(4393.33);
	})

	it('Si el cliente es Especial, aplica un descuento adicional del 1.5%', ()=>{
		const precioTotal = new PrecioTotal();
		precioTotal.cantidad = 12;
		precioTotal.precio = 365;
		precioTotal.estado = "UT";
		precioTotal.categoria = "Varios";
		precioTotal.peso = 0;
		precioTotal.tipoCliente = "Especial";

		expect(precioTotal.calcularTotal()).toBe(4371.14);
	})

	it('Si Recurrente compra Alimentos por mas de 3000, aplica 100 de descuento', ()=>{
		const precioTotal = new PrecioTotal();
		precioTotal.cantidad = 12;
		precioTotal.precio = 365;
		precioTotal.estado = "UT";
		precioTotal.categoria = "Alimentos";
		precioTotal.peso = 0;
		precioTotal.tipoCliente = "Recurrente";

		expect(precioTotal.calcularTotal()).toBe(4227.22);
	})
    
})
