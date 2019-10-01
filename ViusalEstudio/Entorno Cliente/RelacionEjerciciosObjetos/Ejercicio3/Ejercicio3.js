var circulo = {
    radio : 6,
    longitud : () => {
        longTotal = 2 * Math.PI * circulo.radio;
        return longTotal;
    },
    area : () => {
        areaTotal = Math.PI * circulo.radio * circulo.radio;
        return areaTotal;
    },
};

alert("La longitud de la circunferencia es: " + circulo.longitud());
alert("El área de la circunferencia es: " + circulo.area());