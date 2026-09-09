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
        this.estado = " ";
    }
    
    calcularPrecioNeto(){
        return PrecioTotal.calcularPrecioNeto(this.cantidad, this.precio);
    }
    
    static calcularPrecioNeto(cantidad, precio){
        return Number(cantidad) * Number(precio);
    }

    static calcularTotal(){
        return PrecioTotal.calcularTotal();
    }

    calcularTotal(){
        const precioNeto = PrecioTotal.calcularPrecioNeto(this.cantidad, this.precio);
        const impuesto = PrecioTotal.calcularImpuesto(precioNeto, this.estado);

        var total = precioNeto + impuesto;
        
        return total;
    }

    static calcularImpuesto(precioNeto, estado){
        let porcentage = 0;
        if(estado == "UT"){
            porcentage = 0.0665;
        } else {
            porcentage = 0.08;
        }
        const cobroImpuesto = precioNeto * porcentage;

        return cobroImpuesto;
    }
}