var ramdomNum = Math.round(Math.random()*10);
var contadorIntentos = 0;
do {
    contadorIntentos++;
    var numUsu = parseInt(prompt("Introduce un número"));
} while(numUsu != ramdomNum);
alert ("Has acertado!!");
document.write("<h1>Solo has necesitado " + contadorIntentos + " intentos.");

