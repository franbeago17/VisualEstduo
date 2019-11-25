
var a = prompt("Introduce el primer número");
var b = prompt("Introduce el segundo número");

function mcd(a,b){
    if (a % b == 0){
        return b;
    }else{
        return Math.mcd(b,a%b);
    }
}

Math.mcd = function(a,b){
    return mcd(a,b);
};

function mcm(a,b){
    return a * b / Math.mcd(a,b);
}

Math.mcm = function(a,b){
    return mcm(a,b);
};

document.write("El máximo común divisor de " + a + " y " + b + " es: " + Math.mcd(a,b) + "<br>");
document.write("El mínimo común múltiplo de " + a + " y " + b + " es: " + Math.mcm(a,b) + "<br>");