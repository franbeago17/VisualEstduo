var miFechaActual = new Date();
var dia = miFechaActual.getDate();
var mes = parseInt(miFechaActual.getMonth());
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"];

if (mes < 5){
    alert(dias[dia] + "-" + meses[mes] + "- 1er Cuatrimestre.");
}
else if (mes > 4 && mes < 9){
    alert(dias[dia] + "-" + meses[mes] + "- 2º Cuatrimestre.");
}
else if (mes > 8 && mes <= 12){
    alert(dias[dia] + "-" + meses[mes] + "- 3er Cuatrimestre.");
}