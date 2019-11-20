function convertirPeso(){
    if (document.getElementById("kgs").value.length == 0 && document.getElementById("gs").value.length == 0){
        alert("Debe introducir al menos un dato para convertir.");
    }else{
        if (document.getElementById("kgs").value.length != 0){
            var operacion = parseInt(document.getElementById("kgs").value) * 1000;
            document.getElementById("gs").value = operacion;
        }else{
            var operacion = parseInt(document.getElementById("gs").value) / 1000;
            document.getElementById("kgs").value = operacion;
        }
    }
}

function convertirDistancia(){
    if (document.getElementById("kms").value.length == 0 && document.getElementById("ms").value.length == 0){
        alert("Debe introducir al menos un dato para convertir.");
    }else{
        if (document.getElementById("kms").value.length != 0){
            var operacion = parseInt(document.getElementById("kms").value) * 1000;
            document.getElementById("ms").value = operacion;
        }else{
            var operacion = parseInt(document.getElementById("ms").value) / 1000;
            document.getElementById("kms").value = operacion;
        }
    }
}

function desapareceKgs(){
    if (document.getElementById("kgs").value.length != 0){
        document.getElementById("kgs").value = "";
    }
}
function desapareceKms(){
    if (document.getElementById("kms").value.length != 0){
        document.getElementById("kms").value = "";
    }
}
function desapareceGs(){
    if (document.getElementById("gs").value.length != 0){
        document.getElementById("gs").value = "";
    }
}
function desapareceMs(){
    if (document.getElementById("ms").value.length != 0){
        document.getElementById("ms").value = "";
    }
}