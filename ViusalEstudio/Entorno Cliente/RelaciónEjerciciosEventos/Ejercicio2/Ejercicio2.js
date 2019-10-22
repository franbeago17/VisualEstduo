
function ocultar(parrafo, enlace, enlace2){
    document.getElementById(parrafo).style.display = "none";
    document.getElementById(enlace2).style.visibility = "visible";
    document.getElementById(enlace).style.visibility = "hidden";
}
function muestraOculta(parrafo, enlace, enlace2){
    document.getElementById(parrafo).style.display = "block";
    document.getElementById(enlace).style.visibility = "visible";
    document.getElementById(enlace2).style.visibility = "hidden";
}
function aumentar(parrafo){
    var tamaño = parseInt(document.getElementById(parrafo).style.fontSize);
    document.getElementById(parrafo).style.fontSize = tamaño+2;
}
function disminuir(parrafo){
    var tamaño = parseInt(document.getElementById(parrafo).style.fontSize);
    document.getElementById(parrafo).style.fontSize = tamaño-2;
}
function defecto(parrafo){
    document.getElementById(parrafo).style.fontSize = 16;
}
