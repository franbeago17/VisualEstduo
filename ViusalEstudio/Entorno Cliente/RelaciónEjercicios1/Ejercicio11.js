var ramdomNum = Math.round(Math.random()*100);
var contadorIntentos = 0;
do {
    var numUsu = parseInt(prompt("Introduce un número"));
    if (numUsu > ramdomNum){
        alert("El numero es menor");
    }
    else{
        if (numUsu < ramdomNum){
            alert("El numero es mayor");
        }
    }
    contadorIntentos++;
} while(numUsu != ramdomNum && contadorIntentos<11);
if (contadorIntentos == 10){
    alert ("Has perdido!!");
}
else{
    alert ("Has ganado!!");
    document.write("<h1>Solo has necesitado " + contadorIntentos + " intentos.");
}


