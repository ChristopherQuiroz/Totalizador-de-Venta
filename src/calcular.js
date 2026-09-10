const campos_formulario = [
  { id: 'itemAmount', nombre: 'Cantidad de Item' },
  { id: 'itemPrice', nombre: 'Precio por Item' },
  { id: 'statusCode', nombre: 'Código de Estado' },
];

const codigosValidos = {"UT": 0.0665, "NV": 0.08, "TX":0.0625, "AL": 0.04, "CA": 0.0825};

const impuestosPorCategoria = {
    "Bebidas Alcohólicas": 0.07,
    "Muebles": 0.03,
    "Electrónicos": 0.04,
    "Vestimenta": 0.02,
};

const descuentosPorCategoria = {
    "Alimentos": 0.02,
    "Material de Escritorio": 0.015,
    "Electrónicos": 0.01
}

export default class PrecioTotal{
    constructor(documento = null) {
        this.documento = documento;
        this.cantidad = 0;
        this.precio = 0;
        this.estado = " ";
        this.categoria = " ";
        this.peso = 0;
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
        const impuestoEstado = PrecioTotal.calcularImpuesto(precioNeto, this.estado);
        const impuestoCategoria = PrecioTotal.calcularImpuestoPorCategoria(precioNeto, this.categoria);
        const impuesto = impuestoEstado + impuestoCategoria;
        const costoExtraPeso = PrecioTotal.calcularCostoExtraPorPeso(this.peso);

        let total = precioNeto + impuesto + costoExtraPeso;

        total = PrecioTotal.calcularDescuentoEnBaseTotal(total);
        total = PrecioTotal.redondear(total);
        total = PrecioTotal.calcularDescuentoPorCategoria(total, this.categoria);

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

    static calcularImpuestoPorCategoria(precioNeto, categoria){
        const porcentaje = impuestosPorCategoria[categoria] ?? 0;
        return PrecioTotal.redondear(precioNeto * porcentaje);
    }

    static calcularCostoExtraPorPeso(peso){
        const pesoVolumetrico = Number(peso);

        if (pesoVolumetrico >= 0 && pesoVolumetrico <= 10) {
            return 0;
        }

        return 0;
    }

    static calcularDescuentoEnBaseTotal(total){
        const descuentos= [
            { minimo: 30000, tasa: 0.15 },
            { minimo: 10000, tasa: 0.10 },
            { minimo:  7000, tasa: 0.07 },
            { minimo:  3000, tasa: 0.05 },
            { minimo:  1000, tasa: 0.03 },
        ];

        const descuento = descuentos.find(t => total > t.minimo);
        return descuento ? total * (1 - descuento.tasa) : total;
    }

    static calcularDescuentoPorCategoria(total, categoria){
        const porcentaje = descuentosPorCategoria[categoria] ?? 0;
        const descuento = total * porcentaje;
        return PrecioTotal.redondear(total - descuento);
    }

    static redondear(valor){
        return Number(valor.toFixed(2));
    }
}