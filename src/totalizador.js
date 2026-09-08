const campos_formulario = [
  { id: 'itemAmount', nombre: 'Cantidad de Item' },
  { id: 'itemPrice', nombre: 'Precio por Item' },
  { id: 'statusCode', nombre: 'Código de Estado' },
];

export default class Totalizador {
  constructor(documento = null) {
    this.documento = documento;
  }

  static getCamposVacios(documento = globalThis.document) {
    return campos_formulario.filter(({ id }) => {
      const campo = documento?.getElementById(id);
      return !campo || String(campo.value).trim() === '';
    }).length;
  }

  static Message() {
    return 'Todos los campos deben de estar llenados';
  }
}

export { campos_formulario };