var btn = document.querySelector('#adicionar-paciente');

btn.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('fui clicado');

    var form = document.querySelector('form');
   // var erro = document.querySelector('#mensahem-erro');

    var tr = document.createElement('tr');
    var nome = document.createElement('td');
    var peso = document.createElement('td');
    var altura = document.createElement('td');
    var gordura = document.createElement('td');

    if(validaCampo(form.nome.value, "Nome Vazio")){
        nome.textContent = form.nome.value;
    }else{
        return;
    }
    
    if(validaCampo(form.peso.value, "Peso Vazio")){
        peso.textContent = form.peso.value;
    }else{
        return;
    }

    if(validaCampo(form.altura.value, "Altura Vazio")){
        altura.textContent = form.altura.value;
    }else{
        return;
    }

    if(validaCampo(form.gordura.value, "%Gordura Vazia")){
        gordura.textContent = form.gordura.value;;
    }else{
        return;
    }

    tr.appendChild(nome);
    tr.appendChild(peso);
    tr.appendChild(altura);
    tr.appendChild(gordura);

    var tbody = document.querySelector('#tabela-pacientes');
    tbody.appendChild(tr);

    form.reset();

});

function validaCampo(valor, msg){
    var erro = document.querySelector('#mensagem-erro');
    if(valor <= 0){
        erro.textContent = msg;
        return false;
    }else {
        return valor
    }
}





