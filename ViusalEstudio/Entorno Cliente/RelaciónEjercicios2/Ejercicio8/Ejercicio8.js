var palabra=prompt("Escribe una palabra");
var x=palabra.toLowerCase();
var y=x.split("");
var z="";
for (var i=0;i<y.length;i++){
    if (y[i]!=""){
        z=y[i];
    }
}
var n=z.split("");
var m=z.split("").reverse();
for (var i=0;i<n.length;i++){
    if(n[i]==m[i]){
        alert("Esto es un palíndromo");
    }
else{
    alert("Esto no es un palíndromo");
    }
}