var pacientes = document.querySelector('#tabela-pacientes');

pacientes.addEventListener('dblclick', function(event){ 
    var elemento = event.target.parentNode;
    elemento.classList.add('desaparece');
    
    setTimeout(function(){
        elemento.remove();
    }, 500);
})
