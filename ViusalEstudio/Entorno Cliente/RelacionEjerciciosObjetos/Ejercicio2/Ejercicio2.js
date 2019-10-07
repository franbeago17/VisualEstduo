var factura = {
    nombreEmpresa : "Hola",
    direccion : "hehe",
    telefono : "12312342",
    nif : "12312313G",
    formaPago : "asfdascdx"
};

var cliente = {
    numCliente : "13212332",
    dni : "123123123H",
    nombre : "sdgsv",
    domicilio : "fdgfdsssss",
    cp : "12345",
    ciudad : "gtyefsdf",
    provincia : "fsgnt"
};

var producto = {
    descProducto : "asdadvfvssvd asdcasd asecasca ",
    precio : 5,
    cantidad : 5,
    impTotal : ()=>{
        var total=producto.precio*producto.cantidad;
        return total;
    }
};
alert("La cantidad a pagar es: " + producto.impTotal());
