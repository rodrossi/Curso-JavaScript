var paciente = document.querySelectorAll('.paciente');

for (var i = 0; i < paciente.length; i++) {

    var tdpeso = paciente[i].querySelector(".info-peso")
    var tdaltura = paciente[i].querySelector(".info-altura")
    var tdimc = paciente[i].querySelector(".info-imc");

    var peso = tdpeso.textContent;
    var altura = tdaltura.textContent;

    var pesoEhValido = validaPeso(peso);
    var alturaEhValido = validaAltura(altura);


    if (!pesoEhValido) {
        tdimc.textContent = "Peso invalido";
        paciente[i].classList.add('linha-erro')
        

    } if (!alturaEhValido) {
        tdimc.textContent = "Altura Invalida";
        paciente[i].classList.add('linha-erro');

    } if (pesoEhValido && alturaEhValido) {
        var calculo = calculaImc(peso, altura);
        tdimc.textContent = calculo.toFixed(2);
    }
}

function validaPeso(valor){
    if(valor >= 1000 || valor < 0){
        return false;
    }else{
        return true;
    }
}
function validaAltura(valor){
    if(valor >= 3 || valor < 0){
        return false;
    }else{
        return true;
    }
}
function calculaImc(peso, altura){
    return peso / (altura * altura);
}