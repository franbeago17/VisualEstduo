var contador = 0;
var x = "X";
var i = 0;
var j = 0;
var randomNum = 0;
document.write("<table border='1px solid'>");

for (i = 1; i < 8; i++) {
    document.write("<tr>");
    for (j = 1; j < 8; j++) {
        contador++;
        if (randomNum != contador) {
            document.write("<td>" + contador + "</td>");
        }else{
            document.write("<td>" + x + "</td>");
        }
        
    }
    document.write("</tr>");
}
document.write("</table>");
