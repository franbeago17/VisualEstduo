function canSend() {
    var apellidos = document.getElementById("apellidos").value;
    var nombre = document.getElementById("nombre").value;
    var sexo = document.getElementById("sexo").value;
    var texto = document.getElementById("texto").value;

    if ((nombre.length == 0 || /^\s+$/.test(nombre))
        || sexo.length == 0
        || (apellidos.length == 0 || /^\s+$/.test(apellidos))
        || (texto.length == 0 || /^\s+$/.test(texto))) {
        alert("Debe introducir los datos obligatorios");
        return false;
    }
    alert("Enviado correctamente.");
    return true;
}

function cuenta() {
    document.getElementById("caracteres").innerHTML = 50-document.getElementById("texto").value.length + " caracteres restantes.";
}