function canSend(){
    var apellidos = document.getElementById("apellidos").value;
    var nombre = document.getElementById("nombre").value;
    var sexo = document.getElementById("sexo").value;
    
    if ((nombre.length == 0 || /^\s+$/.test(nombre))
     || sexo.length == 0
     || (apellidos.length == 0 || /^\s+$/.test(apellidos)))
     {
        alert("Debe introducir los datos obligatorios");
        return false;
    }
    alert("Enviado correctamente.");
    return true;
}