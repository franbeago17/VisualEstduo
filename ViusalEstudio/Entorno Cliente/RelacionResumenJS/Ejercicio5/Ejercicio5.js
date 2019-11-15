var contador = 0;
var x = "X";
var i = 0;
var j = 0;
var numPremiados = new Array();
var randomNum = 0;

for (i = 0; i < 6; i++){
    randomNum = parseInt(Math.random()*(49-1)+1);
    if (numPremiados.includes(randomNum)){
        i--;
    }else{
        numPremiados[i] = randomNum;
    }
}

document.write("<table border='1px solid'>");
for (i = 1; i < 8; i++) {
    document.write("<tr>");
    for (j = 1; j < 8; j++) {
        if (numPremiados.includes(contador)){
        document.write("<td>" + x + "</td>");
        }else{
            document.write("<td>" + contador + "</td>");
        }
        contador++;
    }
    document.write("</tr>");
}
document.write("</table>");
