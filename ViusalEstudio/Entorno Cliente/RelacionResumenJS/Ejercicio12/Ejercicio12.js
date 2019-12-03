$(document).ready(function() {
    $("#enviar").on("click", function(){
        $("#form1").validate({
            debug: false,
            rules: {
                apellidos: "required",
                nombre: "required",
                domicilio: "required",
                edad: {required: true,maxlength: 2,number: true}
            },
            messages: {
                apellidos: "Debe intriducir sus apellidos",
                nombre: "Debe intriducir su nombre",
                domicilio: "Debe indicarnos su domicilio",
                edad: {required: "Debe introducir su edad",maxlength: "No puede sobrepasar los 99 años",
                    number: "No puede introducir texto"}
            }
        });
    });
});