const campos_formulario = [
  { id: 'itemAmount', nombre: 'Cantidad de Item' },
  { id: 'itemPrice', nombre: 'Precio por Item' },
  { id: 'statusCode', nombre: 'Código de Estado' },
];

const codigosValidos = ["UT", "NV", "TX", "AL", "CA"];

export default class PrecioTotal{
    constructor(documento = null) {
        this.documento = documento;
        this.cantidad = 0;
        this.precio = 0;
    }
    
    calcularPrecioNeto(){
        return PrecioTotal.calcularPrecioNeto(this.cantidad, this.precio);
    }
    
    static calcularPrecioNeto(cantidad, precio){
        return Number(cantidad) * Number(precio);
    }
}