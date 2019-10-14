var enlaces = document.getElementsByTagName("a");
document.write("Número de enlaces a la página: " + enlaces.length + "<br/>");
document.write("Dirección del penúltimo enlace: " + enlaces[enlaces.length-2] + "<br/>");
var enlacesMarca = 0;
for (var i=0; i<enlaces.length-1; i++){
    if (enlaces[i] == "http://www.marca.es/"){
        enlacesMarca++;
    }
}
document.write("Número de enlaces que enlazan a http://www.marca.es: " + enlacesMarca + "<br/>");
var parrafos = document.getElementsByTagName("p");
var enlaces3Parrafo = parrafos[2].getElementsByTagName("a");
document.write("Número de enlaces que hay en el tercer párrafo:" + enlaces3Parrafo.length + "<br/>");