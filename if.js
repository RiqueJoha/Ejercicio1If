const inputUsuario= document.querySelector("#usuario-nombre");
const inputContrasenia= document.querySelector("#usuario-contrasenia");
const pResultado= document.querySelector("#resultado");




const USUARIO_NOMBRE_REGISTRADO = "Carlos";
const USUARIO_CONTRASENIA_REGISTRADA = "Carlos1.";
const USUARIO_NOMBRE_REGISTRADO2= "Juan";
const USUARIO_CONTRASENIA_REGISTRADA2 = "Juanito";

/* let usuarioNombreIngresado = prompt ("Ingrese Usuario")
let usuarioContraseniaIngresada = prompt ("Ingresar Contraseña") */

/* if ((usuarioContraseniaIngresada == USUARIO_CONTRASENIA_REGISTRADA) && (usuarioNombreIngresado == USUARIO_NOMBRE_REGISTRADO)) {
    document.write ("Usuario y Contraseña Correctos")
} else {
    document.write ("Usuario y Contraseña Incorrectos")
} */


let usuarioNombreIngresado= "def nombre";
let usuarioContraseniaIngresada= "def contrasenia";

function verificar(){

    let usuarioNombreIngresado=inputUsuario.value;
    let usuarioContraseniaIngresada=inputContrasenia.value;
    if (((usuarioContraseniaIngresada == USUARIO_CONTRASENIA_REGISTRADA) && (usuarioNombreIngresado == USUARIO_NOMBRE_REGISTRADO) || (usuarioContraseniaIngresada == USUARIO_CONTRASENIA_REGISTRADA2) && (usuarioNombreIngresado == USUARIO_NOMBRE_REGISTRADO2))) {
        /* document.write ("Usuario y Contraseña Correctos") */
        pResultado.innerHTML= "Usuario y Contraseña Correctos " + usuarioNombreIngresado;
    } else {
       /*  document.write ("Usuario y Contraseña Incorrectos") */
       pResultado.innerHTML= "Usuario y Contraseña Incorrectos";
       pResultado.style.color= "red";
    }
}
