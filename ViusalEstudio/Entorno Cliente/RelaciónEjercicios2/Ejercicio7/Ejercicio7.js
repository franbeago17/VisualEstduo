const regxs = {
    "lower": /^[a-z0-9 ]+$/,
    "upper": /^[A-Z0-9 ]+$/,
    "upperLower": /^[A-Za-z0-9 ]+$/
  }

function comprobar(cadena){
    if (regxs.lower.test(cadena)){
        alert("La cadena de texto está en minúscula");
    }
    if (regxs.upper.test(cadena)){
        alert("La cadena de texto está en mayúscula");
    }
    if (regxs.upperLower.test(cadena)){
        alert("La cadena de texto está en minúscula y mayúscula");
    }
}