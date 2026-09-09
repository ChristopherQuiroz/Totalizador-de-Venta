const campos_formulario = [
  { id: 'itemAmount', nombre: 'Cantidad de Item' },
  { id: 'itemPrice', nombre: 'Precio por Item' },
  { id: 'statusCode', nombre: 'Código de Estado' },
];

const codigosValidos = ["UT", "NV", "TX", "AL", "CA"];

export default class PrecioTotal{
    constructor(documento = null) {
        this.documento = documento;
    }
    
    static calcularPrecioNeto(){
        return 6;
    }
}