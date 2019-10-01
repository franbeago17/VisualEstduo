var factura = {
    nombreEmpresa = "Hola",
    direccion = "hehe",
    telefono = "12312342",
    nif = "12312313G",
    numCliente = "13212332",
    dni = "123123123H",
    nombre = "sdgsv",
    domicilio = "fdgfdsssss",
    cp = "12345",
    ciudad = "gtyefsdf",
    provincia = "fsgnt",
    descProducto = "asdadvfvssvd asdcasd asecasca ",
    precio = "5",
    cantidad = "5",
    impTotal = "",
    formaPago = "asfdascdx"
};

function calcularImporte(){
    factura.impTotal = parseInt(factura.precio) * parseInt(factura.cantidad);
}
calcularImporte();
alert("La cantidad a pagar es: " + factura.impTotal);