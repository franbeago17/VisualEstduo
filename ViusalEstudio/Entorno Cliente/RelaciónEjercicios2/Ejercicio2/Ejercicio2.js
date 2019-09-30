var array = [10];
var sumatorio = 0;
for (i = 0; i < 10; i++){
    var numeros = parseInt(prompt("Introduce un número."));
    array[i] = numeros;
    sumatorio += numeros;
    document.write(array[i] + "<br>");
}
document.write(sumatorio);
alert("La suma de los números es: " + sumatorio);
