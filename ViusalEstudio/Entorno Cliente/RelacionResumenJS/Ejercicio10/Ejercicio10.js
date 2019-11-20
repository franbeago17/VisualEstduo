
var a = prompt("Introduce el primer número");
var b = prompt("Introduce el segundo número");

Math.mcd = function(a,b){
    if (a % b == 0){
        return b;
    }else{
        return (b/a%b);
    }
};

Math.mcm = function(a,b){
    if (a % b == 0){
        return a * b / b;
    }else{
        return a * b / (b/a%b);
    }
};

Math.mcm(a,b);
Math.mcd(a,b);