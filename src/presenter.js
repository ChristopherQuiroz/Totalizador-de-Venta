import Totalizador from './totalizador.js';
import PrecioTotal from './calcular.js';

const totalizador = new Totalizador(document);
const formulario = document.querySelector('.form');
const toast = document.querySelector('#toast');
const confirmacionDialog = document.querySelector('#confirmacion-dialog');
const cancelarCompra = document.querySelector('#cancelar-compra');
const confirmarCompra = document.querySelector('#confirmar-compra');
let temporizador;
const codigosValidos = ['UT', 'NV', 'TX', 'AL', 'CA'];

cancelarCompra.addEventListener('click', () => {
	totalizador.limpiarFormulario();
	confirmacionDialog.close();
});

confirmarCompra.addEventListener('click', () => {
	const cantidad = document.querySelector('#itemAmount').value;
	const precio = document.querySelector('#itemPrice').value;
	const estado = document.querySelector('#statusCode').value;
	const categoria = document.querySelector('#category').value;
	const precioTotal = new PrecioTotal();
	precioTotal.cantidad = cantidad;
	precioTotal.precio = precio;
	precioTotal.estado = estado;
	precioTotal.categoria = categoria;

	const precioNeto = precioTotal.calcularPrecioNeto();
	const impuestoEstado = PrecioTotal.calcularImpuesto(precioNeto, estado);
	const impuestoCategoria = PrecioTotal.calcularImpuestoPorCategoria(precioNeto, categoria);
	const impuesto = impuestoEstado + impuestoCategoria;
	const total = precioTotal.calcularTotal();

	document.querySelector('#netPrice').textContent = precioNeto;
	document.querySelector('#taxes').textContent = impuesto;
	document.querySelector('#total').textContent = total;
	confirmacionDialog.close();
});

function mostrarMensaje(tipoError) {
  window.clearTimeout(temporizador);
  toast.textContent = totalizador.Message(tipoError);
  toast.classList.add('visible');

  temporizador = window.setTimeout(() => {
    toast.classList.remove('visible');
  }, 3000);
}

formulario.querySelector('button').addEventListener('click', (evento) => {
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

	const codigo = document.querySelector('#statusCode').value.trim().toUpperCase();
    if (!codigosValidos.includes(codigo)) {
		mostrarMensaje('Codigo_invalido');
		return;
	}

	confirmacionDialog.showModal();
});
