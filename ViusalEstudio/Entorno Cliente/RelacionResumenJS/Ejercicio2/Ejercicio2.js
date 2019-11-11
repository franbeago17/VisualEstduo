
function colorAleatorio(){
    var num1 = Math.floor(Math.random() * (255 - 0)) + 0;
    var num2 = Math.floor(Math.random() * (255 - 0)) + 0;
    var num3 = Math.floor(Math.random() * (255 - 0)) + 0;
    document.getElementById("body").style.backgroundColor = "rgb(" + num1 + "," + num2 + "," + num3 + ")";
}