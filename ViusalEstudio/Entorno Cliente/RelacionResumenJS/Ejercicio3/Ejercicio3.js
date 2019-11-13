function send(e){
    var salario = parseInt(document.getElementById("salario").value);
    var edad = parseInt(document.getElementById("edad").value);
    document.getElementById("form").innerHTML+="<br/><br/>";
    if (salario > 2000){
        document.getElementById("form").innerHTML+=
        "Salario final: <input type='text' id='salarioFinal' value='"+ salario +"'/><br/>";
    }
    if ((salario >= 1000 && salario <=2000) && edad > 50){
        document.getElementById("form").innerHTML+=
        "Salario final: <input type='text' id='salarioFinal' value='"+ salario*1.1 +"'/><br/>";
    }else{
        document.getElementById("form").innerHTML+=
        "Salario final: <input type='text' id='salarioFinal' value='"+ salario*1.05 +"'/><br/>";
    }
    if (salario < 1000 && (edad >= 50 && edad <= 60)){
        document.getElementById("form").innerHTML+=
        "Salario final: <input type='text' id='salarioFinal' value='"+ salario*1.15 +"'/><br/>";
    }else{
        if (edad > 50){
            document.getElementById("form").innerHTML+=
        "Salario final: <input type='text' id='salarioFinal' value='"+ salario*1.075 +"'/><br/>";
        }else{
            if (edad > 60){
                document.getElementById("form").innerHTML+=
        "Salario final: <input type='text' id='salarioFinal' value='"+ salario*1.2 +"'/><br/>";
            }
        }
    }
    e.preventDefault();

    var num = parseInt(prompt("Introduzca un número."));
    var total = 1; 
	for (i=1; i<=num; i++) {
		total = total * i; 
    }
    alert("El factorial es: " + total);
    
}