const pantalla = document.getElementById("pantalla");

const botonesNumero = document.querySelectorAll(".numero");
const botonesOperador = document.querySelectorAll(".operador");

const botonDecimal = document.querySelector(".decimal");
const botonPorcentaje = document.querySelector(".porcentaje");
const botonBorrar = document.getElementById("borrar");
const botonIgual = document.getElementById("igual");

let numero1 = "";
let operador = "";
let esperandoNumero = false;


// ==========================
// NÚMEROS
// ==========================

botonesNumero.forEach(boton => {

    boton.addEventListener("click", () => {

        if (esperandoNumero) {
            pantalla.value = numero1 + operador;
            esperandoNumero = false;
        }

        pantalla.value += boton.textContent;

    });

});


// ==========================
// PUNTO DECIMAL
// ==========================

botonDecimal.addEventListener("click", () => {

    // Si estamos comenzando un nuevo número
    if (esperandoNumero) {
        pantalla.value = numero1 + operador + "0.";
        esperandoNumero = false;
        return;
    }

    // Obtiene el número que se está escribiendo
    let partes = pantalla.value.split(/[\+\−\×\÷]/);
    let numeroActual = partes[partes.length - 1];

    // No permite dos puntos
    if (!numeroActual.includes(".")) {
        pantalla.value += ".";
    }

});


// ==========================
// OPERADORES
// ==========================

botonesOperador.forEach(boton => {

    boton.addEventListener("click", () => {

        if (pantalla.value === "") {
            return;
        }

        // No permite dos operadores seguidos
        if (esperandoNumero) {
            return;
        }

        numero1 = pantalla.value;
        operador = boton.textContent;

        pantalla.value += operador;

        esperandoNumero = true;

    });

});


// ==========================
// PORCENTAJE
// ==========================

botonPorcentaje.addEventListener("click", () => {

    if (pantalla.value === "") {
        return;
    }

    let partes = pantalla.value.split(/[\+\−\×\÷]/);
    let ultimoNumero = partes[partes.length - 1];

    if (ultimoNumero === "") {
        return;
    }

    let porcentaje = parseFloat(ultimoNumero) / 100;

    pantalla.value =
        pantalla.value.substring(
            0,
            pantalla.value.length - ultimoNumero.length
        ) + porcentaje;

});


// ==========================
// FUNCIÓN CALCULAR
// SIN eval()
// ==========================

function calcular(num1, operador, num2) {

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operador) {

        case "+":
            return num1 + num2;

        case "−":
            return num1 - num2;

        case "×":
            return num1 * num2;

        case "÷":

            if (num2 === 0) {
                return "Error";
            }

            return num1 / num2;

        default:
            return "Error";
    }
}


// ==========================
// BOTÓN IGUAL
// ==========================

botonIgual.addEventListener("click", () => {

    if (!numero1 || !operador || esperandoNumero) {
        return;
    }

    let expresion = pantalla.value;

    let posicionOperador = expresion.indexOf(operador);

    let numero2 = expresion.substring(posicionOperador + 1);

    let resultado = calcular(numero1, operador, numero2);

    pantalla.value = resultado;

    numero1 = resultado.toString();
    operador = "";
    esperandoNumero = true;

});


// ==========================
// BOTÓN C
// ==========================

botonBorrar.addEventListener("click", () => {

    pantalla.value = "";

    numero1 = "";
    operador = "";
    esperandoNumero = false;

});


// ==========================
// TECLADO FÍSICO
// ==========================

document.addEventListener("keydown", (evento) => {

    const tecla = evento.key;


    // NÚMEROS
    if (tecla >= "0" && tecla <= "9") {

        botonesNumero.forEach(boton => {

            if (boton.textContent === tecla) {
                boton.click();
            }

        });

    }


    // PUNTO
    else if (tecla === ".") {

        botonDecimal.click();

    }


    // OPERADORES
    else if (
        tecla === "+" ||
        tecla === "-" ||
        tecla === "*" ||
        tecla === "/"
    ) {

        let simbolo;

        if (tecla === "+") {
            simbolo = "+";
        }

        if (tecla === "-") {
            simbolo = "−";
        }

        if (tecla === "*") {
            simbolo = "×";
        }

        if (tecla === "/") {
            simbolo = "÷";
        }

        botonesOperador.forEach(boton => {

            if (boton.textContent === simbolo) {
                boton.click();
            }

        });

    }


    // ENTER
    else if (tecla === "Enter" || tecla === "=") {

        botonIgual.click();

    }


    // PORCENTAJE
    else if (tecla === "%") {

        botonPorcentaje.click();

    }


    // BORRAR
    else if (tecla === "Escape" || tecla === "Delete") {

        botonBorrar.click();

    }

});       