function coordenadas(event) {
    x = window.event.clientX;
    y = window.event.clientY;
    document.getElementById("x").value = x;
    document.getElementById("y").value = y;
}
function cambiarColor(){
    document.getElementById("div").style.backgroundColor = "blue";
}
function getLetra(event) {
    letra = event.key;
    ascii = event.keyCode;
    document.getElementById("letra").value = letra;
    document.getElementById("ascii").value = ascii;
    document.getElementById("div").style.backgroundColor = "red";
}