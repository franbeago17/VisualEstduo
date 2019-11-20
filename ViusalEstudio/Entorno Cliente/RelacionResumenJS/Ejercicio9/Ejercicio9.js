function analiza(){
    var miCadena = document.getElementById("texto").value;
    var array = miCadena.split(" ");
    document.write("<h2>Información sobre el texto introducido:</h2>"+
    "<br/><p>Número de palabras: " + array.length + "</p>" +
    "<br/><p>Primera palabra: " + array[0] + "</p>" +
    "<br/><p>Última palabra: " + array[array.length-1] + "</p>" +
    "<br/><p>Colocadas al revés:<br/>" + array.reverse() + "</p>" +
    "<br/><p>Ordenadas de la A a la Z:<br/>" + array.sort() + "</p>" +
    "<br/><p>Ordenadas de la Z a la A:<br/>" + array.sort().reverse());
}