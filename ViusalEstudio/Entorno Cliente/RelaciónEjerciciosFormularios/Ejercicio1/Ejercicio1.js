function canSend(){
    var nombre = document.getElementById("nombre").value;
    var sexo = document.getElementById("sexo").value;
    if (nombre.length == 0 || /^\s+$/.test(nombre) || sexo.length == 0){
        alert("Debe introducir los datos obligatorios");
        return false;
    }
    alert("Enviado correctamente.");
    return true;
}