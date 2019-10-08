class Empresa {
    constructor(nombre, direccion, telefono, nif) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.nif = nif;
    }
};

class Cliente {
    constructor(numCliente, dni, nombre, domicilio, cp, ciudad, provincia) {
        this.numCliente = numCliente;
        this.dni = dni;
        this.nombre = nombre;
        this.domicilio = domicilio;
        this.cp = cp;
        this.ciudad = ciudad;
        this.provincia = provincia;
    }
};

class Producto {
    constructor(descripcion, precio, cantidad) {
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;
    }
};

class Factura {
    constructor(Empresa, Cliente, impTotal, formaPago) {
        this.Empresa = empresa;
        this.Cliente = cliente;
        this.impTotal = impTotal;
        this.formaPago = formaPago;
    }
}

var empresa = new Empresa("FBG.SL", "C/ Navas", "123456789", "19283746J");
var cliente = new Cliente("124578", "13579320K", "Huanito", "C/ Mezquita", "12678", "El Charco", "Pantano");
var arrayProd = [new Producto("Silla", "35", "4"), new Producto("Mesa", "63", "1"), new Producto("Cristal", "20", "2")];
var factura = new Factura(empresa, cliente, "2", "Tarjeta");

function imprimir() {
    document.write("<h1>Factura</h1>" +
        "<h2>Empresa</h2>" +
        "<u>Nombre de la empresa</u>: " + empresa.nombre + "<br/>" +
        "<u>Dirección</u>: " + empresa.direccion + "<br/>" +
        "<u>Telefono</u>: " + empresa.telefono + "<br/>" +
        "<u>Nif</u>: " + empresa.nif + "<br/>");

    document.write("<h2>Cliente</h2>" +
        "<u>Nombre del cliente</u>: " + cliente.nombre + "<br/>" +
        "<u>Número</u>: " + cliente.numCliente + "<br/>" +
        "<u>DNI</u>: " + cliente.dni + "<br/>" +
        "<u>Domicilio</u>: " + cliente.domicilio + "<br/>" +
        "<u>Código Postal</u>: " + cliente.cp + "<br/>" +
        "<u>Ciudad</u>: " + cliente.ciudad + "<br/>" +
        "<u>Provincia</u>: " + cliente.provincia);

    function impTotal() {
        arrayProd.forEach(elemento => {
            total = total + elemento.precio * elemento.cantidad
        });
    }
}
