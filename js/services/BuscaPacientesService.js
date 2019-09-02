import tabelaPacientesController from '../controllers/TabelaPacienteController.js'
import Paciente from '../models/Paciente.js'

class BuscaPacientesService{
    constructor(){

    }
    busca(){
        let pacientes = []
         fetch('http://127.0.0.1:5500/templates/pacientes.json')
        .then(response => response.json())
        .then(result => result)
        .then(lista => lista.forEach(paciente => {
           let p = new Paciente(paciente.nome, paciente.peso, paciente.altura, paciente.gordura);
            tabelaPacientesController.adiciona(p);
          }))
          return pacientes;
    }
}
const buscaPacientesService = new BuscaPacientesService();
export default buscaPacientesService