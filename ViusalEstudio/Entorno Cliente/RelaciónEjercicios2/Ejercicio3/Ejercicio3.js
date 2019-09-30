var array = [];
limite = 0;
sumatorio = 0;
for (i = 1; limite <= 3000; i++){
    array[i] = 11 * i;
    limite = 11 * i;
    if (limite < 3000){
        document.write(array[i] + "||");
        sumatorio+=11*i;
    }
}
document.write("<br>La suma es " + sumatorio);
