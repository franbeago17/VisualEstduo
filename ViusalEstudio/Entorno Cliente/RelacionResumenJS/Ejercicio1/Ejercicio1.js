function canSend(){
    var usu = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;
    
    if ((usu.length == 0 || /^\s+$/.test(usu))
     || (clave.length == 0 || /^\s+$/.test(clave)))
     {
        alert("No puede dejar ningún campo vacío");
        return false;
    }else{
        if(usu != "admin" && clave != "1234"){
            alert("Usuario y/o contraseña incorrecto/a");
            return false;
        }
    }
    alert("Bienvenido al sistema.");
    return true;
}

function limpiar(){
    document.getElementById("usuario").value = "";
    document.getElementById("clave").value = "";
}