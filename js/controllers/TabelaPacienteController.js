
import buscaPacientesService from '../services/BuscaPacientesService.js';

class TabelaPacientesController {
    constructor(){
        let pacientes = buscaPacientesService.busca();
        pacientes.forEach(paciente => this.adiciona(paciente))  
    }
    adiciona(paciente) {
        let tr = this._montaTr(paciente);
        let tbody = document.querySelector('#tabela-pacientes');
        tbody.appendChild(tr);

    }
    _montaTr(paciente) {
        let tr = document.createElement('tr');
        tr.classList.add('paciente');
        

        tr.appendChild(this._montaTd(paciente.nome, 'info-nome'))
        tr.appendChild(this._montaTd(paciente.peso, 'info-peso'))
        tr.appendChild(this._montaTd(paciente.altura, 'info-altura'))
        tr.appendChild(this._montaTd(paciente.gordura, 'info-gordura'))
        tr.appendChild(this._montaTd(paciente.imc, 'info-imc'))

        return tr;
    }
    _montaTd(valor, classe) {
        var td = document.createElement('td');
        td.classList.add(classe);
        td.textContent = valor;
        return td;
    }
}


const tabelaPacientesController = new TabelaPacientesController();

export default tabelaPacientesController;