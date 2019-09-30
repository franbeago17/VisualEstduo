function ordenar(a, b, c){
    if (a < b && a < c){
        alert("El menor es el A: " + a );
    }
    else{
        if (b < c){
            alert("El menor es B: " + b);
        }
        else{
            alert("El menor es C: " + c);
        }
    }
}