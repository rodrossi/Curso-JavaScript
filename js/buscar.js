var btn = document.querySelector('#buscar-pacientes');

btn.addEventListener('click', function() {
    var xhr = new XMLHttpRequest();

    xhr.open('get', 'http://127.0.0.1:5500/templates/pacientes.json');

    xhr.addEventListener('load', function () {
        var pacientes = JSON.parse(xhr.responseText);
        pacientes.forEach(function (paciente) {
            adicionaPaciente(paciente);
        });
    });

    xhr.send();
})