var paciente = document.querySelectorAll('.paciente');

for (var i = 0; i < paciente.length; i++) {

    var tdpeso = paciente[i].querySelector(".info-peso")
    var tdaltura = paciente[i].querySelector(".info-altura")
    var tdimc = paciente[i].querySelector(".info-imc");

    var peso = tdpeso.textContent;
    var altura = tdaltura.textContent;

    var pesoEhValido = validaValor(peso, 1000, 0);
    var alturaEhValido = validaValor(altura, 3, 0);


    if (!pesoEhValido) {
        tdimc.textContent = "Peso invalido";
        paciente[i].classList.add('linha-erro')
        

    } if (!alturaEhValido) {
        tdimc.textContent = "Altura Invalida";
        paciente[i].classList.add('linha-erro');

    } if (pesoEhValido && alturaEhValido) {
        var calculo = peso / (altura * altura);
        tdimc.textContent = calculo.toFixed(2);
    }
}

function validaValor(valor, max, min){
    if(valor >= max || valor < min){
        return false;
    }else{
        return true;
    }
}