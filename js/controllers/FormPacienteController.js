import Paciente from '../models/Paciente.js'
import tabelaPacientesController from './TabelaPacienteController.js';
class FormPacienteController{
    constructor(){
        let $ = document.querySelector.bind(document); 
        this.nome = $('#nome');
        this.peso = $('#peso');
        this.altura = $('#altura');
        this.gordura = $('#gordura');
    }

    adiciona(event){
        event.preventDefault();
        let paciente = new Paciente(
            this.nome.value,
            this.peso.value,
            this.altura.value,
            this.gordura.value
        )
     let erros = this._validaForm(paciente);
     let erroLista = document.querySelector('#mensagem-erro');
        erroLista.innerHTML = '';

     if(erros.length > 0){
        let elementos = erros.forEach( erro => {
            erroLista.appendChild(this._montaMensagemErros(erro))
        })
     }else{
        tabelaPacientesController.adiciona(paciente);
     }
         
       
    }
    _validaCampo(valor){
        return valor.length > 0 ? true : false;
    }
    
     _validaForm(paciente){
        let erros = [];
        if(!this._validaCampo(paciente.nome)) erros.push('Campo nome é obrigatório');
        if(!this._validaCampo(paciente.peso)) erros.push('Campo peso é obrigatório');
        else if(!paciente.validaPeso(paciente.peso))  erros.push('Campo peso está Invalido');
        if(!this._validaCampo(paciente.altura)) erros.push('Campo altura é obrigatório');
        else if(!paciente.validaAltura(paciente.altura)) erros.push('Campo  altura está invalido');
        if(!this._validaCampo(paciente.gordura)) erros.push('Campo gordura é obrigatório');
        return erros
    } 
    _montaMensagemErros(msg){
        let li = document.createElement('li');
        li.classList.add('mensagem-erro');
        li.textContent = msg;
        return li;
        
    }
}
const formPacienteController = new FormPacienteController();
export default formPacienteController;