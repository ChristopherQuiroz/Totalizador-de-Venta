import Totalizador from "./totalizador";

describe('Validar el Formulario', ()=>{
    it('Si algun campo del formulario esta vacio', ()=>{
        const campos = Totalizador.getCamposVacios();
        if(campos != 0){
            expect(Totalizador.Message("Incompleto")).toBe("Todos los campos deben de estar llenados.");
        }
    })

    it('Mostrar error si el valor es invalido para items', ()=>{
        if(!Totalizador.validarItems()){
            expect(Totalizador.Message("Items_invalidos")).toBe("La cantidad de items debe ser mayor a cero.");
        }
    })

    it('Mostrar error si el valor es invalido para el precio', ()=>{
        if(!Totalizador.validarPrecio()){
            expect(Totalizador.Message("Precio_invalido")).toBe("El precio por item debe de ser mayor a cero.");
        }
    })

    it('Mostrar error si el peso volumetrico no es mayor a cero', ()=>{
        const documento = {
            getElementById: () => ({ value: '0' })
        };

        expect(Totalizador.validarPesoVolumetrico(documento)).toBe(false);
        expect(Totalizador.Message("Peso_volumetrico_invalido")).toBe("El peso volumétrico debe ser mayor a cero.");
    })

    it('Mostrar error si el codigo de estado es invalido', ()=>{
        if(!Totalizador.validarCodigo()){
            expect(Totalizador.Message("Codigo_invalido")).toBe("El código de estado es inválido.")
        }
    })
})