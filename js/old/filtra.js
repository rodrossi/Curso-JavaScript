var filtra = document.querySelector('#filtrar-tabela');

filtra.addEventListener('input', function(){
    var pacientes = document.querySelectorAll('.paciente');
    if (filtra.value != 0 ){
        pacientes.forEach(function(paciente){
            var nome = paciente.querySelector('.info-nome').textContent;
            var regex = new RegExp(filtra.value, 'i');//filtrar por maiusculo minusculo
        
             if (regex.test(nome)){
            paciente.classList.remove('invisivel')
            } else {
            paciente.classList.add('invisivel')
            }
        });
    } else {
        pacientes.forEach(function(paciente){
            paciente.classList.remove('invisivel')
        });
     }

    })
