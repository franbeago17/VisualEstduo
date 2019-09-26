 var numUsuario = parseInt(prompt("Introduce un número"));

    document.write("<table border=1>");
    for (i=0;i<=10;i++){
        numMultiplicado = numUsuario * i;
        document.write("<tr>");
        document.write("<td>" + numUsuario + " X " + i + "</td>");
        document.write("<td>" + numMultiplicado + "</td>");
        document.write("</tr>");
    }