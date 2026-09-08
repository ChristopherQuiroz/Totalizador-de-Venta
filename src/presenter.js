import Totalizador from './totalizador.js';

const totalizador = new Totalizador(document);
const formulario = document.querySelector('.form');
const toast = document.querySelector('#toast');
let temporizador;
const codigosValidos = ['UT', 'NV', 'TX', 'AL', 'CA'];

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
	}
});
