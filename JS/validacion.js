var userFail = 0;
const getData = () => {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    userFail += 1;
    if (userFail <= 2) {
        if (usuario == "MONICA69" && contrasena == "696972") {
            alert("Bienvenida " + usuario)
            window.location.href = "Factura.html";
        } else {
            alert("Usuario o contraseña incorrectos!");

        }
    } else {
        alert("Superaste el número de intentos,tu usuario esta bloqueado")
    }
}