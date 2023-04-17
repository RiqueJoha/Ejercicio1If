const USUARIO_NOMBRE_REGISTRADO = "Carlos";
const USUARIO_CONTRASENIA_REGISTRADA = "Carlos1.";
const USUARIO_NOMBRE_REGISTRADO2= "Juan";
const USUARIO_CONTRASENIA_REGISTRADA2 = "Juanito";

let usuarioNombreIngresado = prompt ("Ingrese Usuario")
let usuarioContraseniaIngresada = prompt ("Ingresar Contraseña")

/* if ((usuarioContraseniaIngresada == USUARIO_CONTRASENIA_REGISTRADA) && (usuarioNombreIngresado == USUARIO_NOMBRE_REGISTRADO)) {
    document.write ("Usuario y Contraseña Correctos")
} else {
    document.write ("Usuario y Contraseña Incorrectos")
} */

if (((usuarioContraseniaIngresada == USUARIO_CONTRASENIA_REGISTRADA) && (usuarioNombreIngresado == USUARIO_NOMBRE_REGISTRADO) || (usuarioContraseniaIngresada == USUARIO_CONTRASENIA_REGISTRADA2) && (usuarioNombreIngresado == USUARIO_NOMBRE_REGISTRADO2))) {
    document.write ("Usuario y Contraseña Correctos")
} else {
    document.write ("Usuario y Contraseña Incorrectos")
}