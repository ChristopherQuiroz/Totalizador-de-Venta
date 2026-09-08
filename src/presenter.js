import Totalizador from './totalizador.js';

const totalizador = new Totalizador(document);
const formulario = document.querySelector('.form');
const mensaje = document.createElement('p');
mensaje.setAttribute('role', 'alert');
formulario.appendChild(mensaje);

formulario.querySelector('button').addEventListener('click', (evento) => {
	evento.preventDefault();
	mensaje.textContent = totalizador.getCamposVacios() > 0
		? totalizador.Message()
		: '';
});
