const campos_formulario = [
  { id: 'itemAmount', nombre: 'Cantidad de Item' },
  { id: 'itemPrice', nombre: 'Precio por Item' },
  { id: 'statusCode', nombre: 'Código de Estado' },
];

const codigosValidos = {"UT": 0.0665, "NV": 0.08, "TX":0.0625, "AL": 0.04, "CA": 0.0825};

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

        let total = precioNeto + impuesto;

        if(total > 1000){
            total = PrecioTotal.calcularDescuentoEnBaseTotal(total);
        }

        return PrecioTotal.redondear(total);
    }

    static calcularImpuesto(precioNeto, estado){
        let porcentage = 0;
        if (codigosValidos[estado] !== undefined) {
            porcentage = codigosValidos[estado];
        }

        const cobroImpuesto = precioNeto * porcentage;

        return PrecioTotal.redondear(cobroImpuesto);
    }

    static calcularDescuentoEnBaseTotal(total){
        let descuento = 0;
        if(total > 3000){
            descuento = total*0.05;
        } else if(total > 1000){
            descuento = total*0.03;
        }
        return total - descuento;
    }

    static redondear(valor){
        return Number(valor.toFixed(2));
    }
}