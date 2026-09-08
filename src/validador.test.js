import Totalizador from "./totalizador";

describe('Validar el Formulario', ()=>{
    it('Si algun campo del formulario esta vacio', ()=>{
        const campos = Totalizador.getCamposVacios();
        if(campos != 0){
            expect(Totalizador.Message()).toBe("Todos los campos deben de estar llenados");
        }
    })
})