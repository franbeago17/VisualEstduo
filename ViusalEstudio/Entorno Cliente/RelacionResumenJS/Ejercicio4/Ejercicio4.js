var cadena = prompt("Introduce el texto para cifrarlo.");
document.write("Cadena sin cifrar: " + cadena);
var cadenaCifrada = "";
var aleatorio = parseInt(Math.random() * 10);
var diferencia = 0;

for (i = 0; i < cadena.length; i++) {
    var num = cadena.charCodeAt(i) + aleatorio;
    if (num > 122) {
        diferencia = (num-1) - 122;
        num = 97 + diferencia;
    }
    if (cadena.charCodeAt(i) == 32){
        num = 32;
    }
    cadenaCifrada += String.fromCharCode(num);
}
document.write("<br/>Cadena cifrada: " + cadenaCifrada);