var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X',
 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']; 
 DNI = parseInt(prompt("Introduce tu número de DNI"));
 resto = DNI % 23;
 alert("La letra de tu DNI es: " + letras[resto]);

var DNILetra = prompt("Introduce tu DNI");
letra = DNILetra.substring(8, 9);
 if (letra == letras[resto]){
     alert("Tu DNI es correcto.");
 }else{
     alert("Tu DNI no está registrado.");
 }

