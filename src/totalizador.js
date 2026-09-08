const campos_formulario = [
  { id: 'itemAmount', nombre: 'Cantidad de Item' },
  { id: 'itemPrice', nombre: 'Precio por Item' },
  { id: 'statusCode', nombre: 'Código de Estado' },
];

const codigosValidos = ["UT", "NV", "TX", "AL", "CA"];

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
  
  getCamposVacios() {
    return Totalizador.getCamposVacios(this.documento);
  }

  static validarItems(documento = globalThis.document) {
    const campoCantidad = documento?.getElementById('itemAmount');

    if (!campoCantidad || Number(campoCantidad.value) <= 0) {
        return false;
    }
    return true;
  }

  static validarPrecio(documento = globalThis.document) {
    const campoPrecio = documento?.getElementById('itemPrice');

    if (!campoPrecio || Number(campoPrecio.value) <= 0) {
        return false;
    }
    return true;
  }

  static validarCodigo(documento = globalThis.document){
    const campoCodigo = documento?.getElementById('statusCode');

    if(!campoCodigo || !codigosValidos.find(campoCodigo)){
        return false;
    }
    return true;
  }

  static Message(error) {
    switch(error){
        case 'Incompleto':
            return 'Todos los campos deben de estar llenados.';
        case 'Items_invalidos':
            return 'La cantidad de items debe ser mayor a cero.';
        case 'Precio_invalido':
            return 'El precio por item debe de ser mayor a cero.';
        case 'Codigo_invalido':
            return 'El código de estado es inválido.';
    }
  }

  Message(error) {
    return Totalizador.Message(error);
  }
}

export { campos_formulario };