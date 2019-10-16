var parrafo1 = document.getElementById("p1");
document.getElementById("p1").addEventListener('click', colorearRojo(parrafo1), true);
document.getElementById("p2").addEventListener('click', colorearAzul(), true);
document.getElementById("p3").addEventListener('click', colorearVerde(), true);
function colorearRojo(parrafo1) {
    document.getElementById("p1").style.color = "red";
}
function colorearAzul() {
    document.getElementById("p2").style.color = "blue";
}
function colorearVerde() {
    document.getElementById("p3").style.color = "green";
}