function comprobarTriangulo(ladoA,ladoB,ladoC,anguloAB,anguloBC,anguloAC)
{
    if (anguloAB!=0 && anguloAC!=0 && anguloBC!=0 && (anguloBC+anguloAC+anguloAB==180)){
        if(ladoA==ladoB && ladoA==ladoC && ladoA!=0 && ladoB!=0 && ladoC!=0){
            document.write('triangulo equilatero');
            alert('triangulo equilatero');
        }
        else{
            if((ladoA==ladoB || ladoB==ladoC || ladoA==ladoC) && ladoA!=0 && ladoB!=0 &&ladoC!=0){
                document.write('Es un triangulo isosceles');
                alert('Es un triangulo isosceles');
                if(anguloAB==90 || anguloAC==90|| anguloBC==90){
                    alert('rectangulo');
                }
            }

            else{
                if((anguloAB==90||anguloAC==90||anguloBC==90) && ladoA!=0 && ladoB!=0 &&ladoC!=0){
                    document.write('Es rectangulo');
                    alert('rectangulo');
                }
            }
        }
    }
    else{
        alert('No es un triangulo');   
    }
}