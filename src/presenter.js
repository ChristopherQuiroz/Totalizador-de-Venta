import Totalizador from './totalizador.js';
import PrecioTotal from './calcular.js';

const totalizador = new Totalizador(document);
const formulario = document.querySelector('.form');
const toast = document.querySelector('#toast');
const confirmacionDialog = document.querySelector('#confirmacion-dialog');
const cancelarCompra = document.querySelector('#cancelar-compra');
const confirmarCompra = document.querySelector('#confirmar-compra');
const botonTotalizar = formulario.querySelector('button');
let temporizador;
const codigosValidos = ['UT', 'NV', 'TX', 'AL', 'CA'];

function cerrarConfirmacion() {
	confirmacionDialog.close();
}

function obtenerPrecioTotal() {
	const precioTotal = new PrecioTotal();
	precioTotal.cantidad = document.querySelector('#itemAmount').value;
	precioTotal.precio = document.querySelector('#itemPrice').value;
	precioTotal.estado = document.querySelector('#statusCode').value;
	precioTotal.categoria = document.querySelector('#category').value;
	precioTotal.peso = document.querySelector('#volumetricWeight').value;
	return precioTotal;
}

function mostrarConcepto(id, valor) {
	const fila = document.querySelector(`#${id}-row`);
	const visible = valor !== 0;
	fila.hidden = !visible;
	document.querySelector(`#${id}`).textContent = visible ? valor : '';
}

function limpiarResultados() {
	document.querySelector('#netPrice').textContent = '';
	document.querySelector('#volumetricExtra').textContent = '';
	document.querySelector('#total').textContent = '';
	['stateTaxes', 'categoryTaxes', 'amountDiscount', 'categoryDiscount'].forEach((id) => {
		mostrarConcepto(id, 0);
	});
}

function mostrarResultados() {
	const precioTotal = obtenerPrecioTotal();
	const precioNeto = precioTotal.calcularPrecioNeto();
	const impuestoEstado = PrecioTotal.calcularImpuesto(precioNeto, precioTotal.estado);
	const impuestoCategoria = PrecioTotal.calcularImpuestoPorCategoria(precioNeto, precioTotal.categoria);
	const costoExtraPeso = PrecioTotal.calcularCostoExtraPorPeso(precioTotal.peso);
	const subtotal = precioNeto + impuestoEstado + impuestoCategoria + costoExtraPeso;
	const totalConDescuentoMonto = PrecioTotal.calcularDescuentoEnBaseTotal(subtotal);
	const descuentoMonto = PrecioTotal.redondear(subtotal - totalConDescuentoMonto);
	const total = precioTotal.calcularTotal();
	const descuentoCategoria = PrecioTotal.redondear(totalConDescuentoMonto - total);

	document.querySelector('#netPrice').textContent = precioNeto;
	mostrarConcepto('stateTaxes', impuestoEstado);
	mostrarConcepto('categoryTaxes', impuestoCategoria);
	document.querySelector('#volumetricExtra').textContent = costoExtraPeso;
	mostrarConcepto('amountDiscount', descuentoMonto);
	mostrarConcepto('categoryDiscount', descuentoCategoria);
	document.querySelector('#total').textContent = total;
}

cancelarCompra.addEventListener('click', () => {
	totalizador.limpiarFormulario();
	limpiarResultados();
	cerrarConfirmacion();
});

confirmarCompra.addEventListener('click', () => {
	mostrarResultados();
	cerrarConfirmacion();
});

function mostrarMensaje(tipoError) {
  window.clearTimeout(temporizador);
  toast.textContent = totalizador.Message(tipoError);
  toast.classList.add('visible');

  temporizador = window.setTimeout(() => {
    toast.classList.remove('visible');
  }, 3000);
}

botonTotalizar.addEventListener('click', (evento) => {
	evento.preventDefault();

	if (totalizador.getCamposVacios() > 0) {
		mostrarMensaje('Incompleto');
		return;
	}

	if (!Totalizador.validarItems()) {
		mostrarMensaje('Items_invalidos');
		return;
	}

	if (!Totalizador.validarPrecio()) {
		mostrarMensaje('Precio_invalido');
		return;
	}

	if (!Totalizador.validarPesoVolumetrico()) {
		mostrarMensaje('Peso_volumetrico_invalido');
		return;
	}

	const codigo = document.querySelector('#statusCode').value.trim().toUpperCase();
    if (!codigosValidos.includes(codigo)) {
		mostrarMensaje('Codigo_invalido');
		return;
	}

	confirmacionDialog.showModal();
});
