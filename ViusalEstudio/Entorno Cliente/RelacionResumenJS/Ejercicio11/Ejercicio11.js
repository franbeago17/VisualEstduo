


class Fraccion {
    constructor(numerador, denominador) {
        this.numerador = numerador;
        this.denominador = denominador;
    }

    mcd(a,b){
        if (a % b == 0){
            return b;
        }else{
            return fraccion.mcd(b,a%b);
        }
    }

    get getNumerador(){
        return this.numerador;
    }
    
    get getDenominador() {
        return this.denominador;
    }

    set setNumerador(numerador){
        return this.numerador = numerador;
    }

    set setdenominador(denominador){
        return this.denominador = denominador;
    }
    
    imprimirFraccion(){
        document.write("Fracción: " + fraccion.getNumerador + " / " + fraccion.getDenominador + "<br>");
    }

    imprimirFraccionParametros(numerador, denominador){
        document.write(numerador + " / " + denominador + "<br>");
    }

    simplificar(){
        var num = fraccion.mcd(this.numerador,this.denominador);
        var newNumerador = this.numerador / num;
        var newDenominador = this.denominador / num;
        this.imprimirFraccionParametros(newNumerador, newDenominador);
    }

    multiplicar(numerador, denominador){
        var newNumerador = this.numerador * numerador;
        var newDenominador = this.denominador * denominador;
        this.imprimirFraccionParametros(newNumerador, newDenominador);
    }

    dividir(numerador, denominador){
        var newNumerador = this.numerador * denominador;
        var newDenominador = this.denominador * numerador;
        this.imprimirFraccionParametros(newNumerador, newDenominador);
    }
};



var fraccion = new Fraccion(32, 64);
document.write("Numerador: " + fraccion.getNumerador + "<br>");
document.write("Denominador: " + fraccion.getDenominador + "<br>");
fraccion.imprimirFraccion();
document.write("Fracción simplificada: "); fraccion.simplificar();
document.write("Fracción multiplicada: "); fraccion.multiplicar(2, 4);
document.write("Fracción dividida: "); fraccion.dividir(2, 4);



