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

  static validarItems(documento = globalThis.document) {
    const campoCantidad = documento?.getElementById('itemAmount');

    if (campoCantidad?.value < 0) {
        return false;
    }
  }

  static validarPrecio(documento = globalThis.document){
    const campoPrecio = documento?.getElementById('itemPrice');

    if(campoPrecio?.value < 0){
        return false;
    }
  }

  static Message(error) {
    switch(error){
        case 'Incompleto':
            return 'Todos los campos deben de estar llenados';
        case 'Items_invalidos':
            return 'La cantidad de items debe ser mayor a cero';
        case 'Precio_invalido':
            return 'El precio por item debe de ser mayor a cero';
    }
  }
}

export { campos_formulario };