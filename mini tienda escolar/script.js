
console.log("Hola mundo");
console.log("Bienvenido a la Mini Tienda Escolar");

const nombreTienda = "Mini Tienda Escolar";

let dinero = 20000;

let nombreUsuario = "";


let productos = [
    {
        nombre: "Galletas",
        precio: 3000
    },
    {
        nombre: "Gaseosa",
        precio: 4000
    },
    {
        nombre: "Chocolate",
        precio: 5000
    },
    {
        nombre: "Papas",
        precio: 3500
    }
];


let nombre = "Fabián";       // Texto
let edad = 16;               // Número
let tiendaAbierta = true;    // Booleano


console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("¿Tienda abierta?:", tiendaAbierta);



function iniciarAplicacion() {

    nombreUsuario = prompt("¿Cuál es tu nombre?");

    if (
        nombreUsuario === null ||
        nombreUsuario.trim() === ""
    ) {
        nombreUsuario = "Usuario";
    }

    alert(
        "Hola " + nombreUsuario +
        " 👋\nBienvenido a " + nombreTienda
    );

    console.log(
        "La aplicación fue iniciada por:",
        nombreUsuario
    );

    mostrarMenu();
}


function mostrarMenu() {

    let continuar = true;

    while (continuar) {

        let opcion = prompt(
            "🛒 MINI TIENDA ESCOLAR\n\n" +
            "1. Ver productos\n" +
            "2. Buscar producto\n" +
            "3. Comprar producto\n" +
            "4. Agregar producto\n" +
            "5. Eliminar producto\n" +
            "6. Ver dinero disponible\n" +
            "7. Calculadora\n" +
            "8. Verificar edad\n" +
            "9. Operadores lógicos\n" +
            "10. Clasificar compra\n" +
            "11. Contar del 1 al 10\n" +
            "12. Minijuego\n" +
            "13. Salir\n\n" +
            "Escribe el número de la opción:"
        );

        switch (opcion) {

            case "1":
                mostrarProductos();
                break;

            case "2":
                buscarproducto();
                break;

            case "3":
                comprarProducto();
                break;

            case "4":
                agregarProducto();
                break;

            case "5":
                eliminarProducto();
                break;

            case "6":
                alert("Tienes $" + dinero + " disponibles.");
                break;

            case "7":
                calculadora();
                break;

            case "8":
                verificarEdad();
                break;

            case "9":
                operadoresLogicos();
                break;

            case "10":
                clasificacionCompra();
                break;

            case "11":
                contarDelUnoAlDiez();
                break;

            case "12":
                adivinaElNumero();
                break;

            case "13":
                continuar = false;
                alert("👋 Gracias por usar la Mini Tienda.");
                break;

            default:
                alert("❌ Opción no válida.");
        }
    }
}

function mostrarProductos() {

    let lista = "🛒 PRODUCTOS DISPONIBLES\n\n";

    for (let i = 0; i < productos.length; i++) {

 lista +=
 (i + 1) + ". " +
productos[i].nombre +
 " - $" +
 productos[i].precio +
  "\n";
    }

    alert(lista);

    console.log("Productos:", productos);
}

function comprarProducto() {

    mostrarProductos();

    let opcion = Number(
        prompt("Escribe el número del producto que quieres comprar:")
    );

    if (opcion >= 1 && opcion <= productos.length) {

        let producto = productos[opcion - 1];

        if (dinero >= producto.precio) {

            dinero = dinero - producto.precio;

            alert(
                "✅ Compra realizada\n\n" +
                "Producto: " + producto.nombre +
                "\nPrecio: $" + producto.precio +
                "\nDinero restante: $" + dinero
            );

        } else {

            alert("❌ No tienes suficiente dinero.");
        }

    } else {

        alert("❌ Producto no válido.");
    }
}



function buscarProducto() {

    let buscado = prompt(
        "Escribe el nombre del producto que quieres buscar:"
    );

    if (buscado === null || buscado.trim() === "") {

        alert("No escribiste ningún producto.");
        return;
    }

    let encontrado = false;

    for (let i = 0; i < productos.length; i++) {

        if (
            productos[i].nombre.toLowerCase() ===
            buscado.toLowerCase()
        ) {

            alert(
                "✅ Producto encontrado\n\n" +
                "Nombre: " + productos[i].nombre +
                "\nPrecio: $" + productos[i].precio
            );

            encontrado = true;
            break;
        }
    }

    if (!encontrado) {

        alert(
            "❌ Ese producto no se encuentra en la tienda."
        );
    }
}


function agregarProducto() {

    let nuevoNombre = prompt(
        "Escribe el nombre del nuevo producto:"
    );

    if (nuevoNombre === null || nuevoNombre.trim() === "") {

        alert("❌ El nombre no es válido.");
        return;
    }

    let nuevoPrecio = Number(
        prompt("Escribe el precio del producto:")
    );

    if (nuevoPrecio > 0) {

        productos.push({
            nombre: nuevoNombre,
            precio: nuevoPrecio
        });

        alert(
            "✅ Producto agregado correctamente."
        );

    } else {

        alert(
            "❌ El precio debe ser mayor que cero."
        );
    }
}

function eliminarProducto() {

    if (productos.length === 0) {

        alert("❌ No hay productos para eliminar.");
        return;
    }

    mostrarProductos();

    let posicion = Number(
        prompt("Escribe el número del producto que quieres eliminar:")
    );

    if (posicion >= 1 && posicion <= productos.length) {

        let eliminado = productos[posicion - 1].nombre;

        productos.splice(posicion - 1, 1);

        alert(
            "✅ Producto eliminado:\n" +
            eliminado
        );

    } else {

        alert("❌ Número de producto no válido.");
    }
}


function calculadora() {

    let numero1 = Number(
        prompt("Escribe el primer número:")
    );

    let numero2 = Number(
        prompt("Escribe el segundo número:")
    );

    let opcion = prompt(
        "Elige una operación:\n\n" +
        "1. Suma\n" +
        "2. Resta\n" +
        "3. Multiplicación\n" +
        "4. División"
    );

    let resultado;

    switch (opcion) {

        case "1":
            resultado = numero1 + numero2;
            break;

        case "2":
            resultado = numero1 - numero2;
            break;

        case "3":
            resultado = numero1 * numero2;
            break;

        case "4":

            if (numero2 !== 0) {
                resultado = numero1 / numero2;
            } else {
                alert("❌ No se puede dividir entre cero.");
                return;
            }

            break;

        default:
            alert("❌ Operación no válida.");
            return;
    }

    alert("Resultado: " + resultado);
}

// ==========================================
// VERIFICAR EDAD
// ==========================================

function verificarEdad() {

    let edadUsuario = Number(
        prompt("¿Cuántos años tienes?")
    );

    if (edadUsuario >= 18) {

        alert("Eres mayor de edad.");

    } else {

        alert("Eres menor de edad.");
    }
}

// ==========================================
// OPERADORES LÓGICOS
// ==========================================

function operadoresLogicos() {

    let edadUsuario = Number(
        prompt("¿Cuántos años tienes?")
    );

    let dineroUsuario = Number(
        prompt("¿Cuánto dinero tienes?")
    );

    let puedeComprar =
        edadUsuario >= 10 &&
        dineroUsuario >= 3000;

    let puedeEntrar =
        edadUsuario >= 18 ||
        dineroUsuario >= 10000;

    let tiendaCerrada = !tiendaAbierta;

    alert(
        "¿Puede comprar?: " + puedeComprar +
        "\n¿Puede entrar?: " + puedeEntrar +
        "\n¿La tienda está cerrada?: " + tiendaCerrada
    );
}

// ==========================================
// CLASIFICAR COMPRA
// ==========================================

function clasificarCompra() {

    let total = Number(
        prompt("Escribe el valor de la compra:")
    );

    if (total >= 15000) {

        alert("La compra es grande.");

    } else if (total >= 5000) {

        alert("La compra es mediana.");

    } else if (total >= 0) {

        alert("La compra es pequeña.");

    } else {

        alert("Valor no válido.");
    }
}

// ==========================================
// CONTAR DEL 1 AL 10
// ==========================================

function contarDelUnoAlDiez() {

    let resultado = "Conteo:\n\n";

    for (let i = 1; i <= 10; i++) {

        resultado += i + "\n";
    }

    alert(resultado);
}

// ==========================================
// MINIJUEGO - ADIVINA EL NÚMERO
// ==========================================

function adivinaElNumero() {

    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let acertado = false;
    let intentos = 0;

    alert("🎮 Adivina el número\n\nEstoy pensando en un número del 1 al 10.");

 while (!acertado) {

let intento = Number(
 prompt("Escribe tu número:")
 );

 intentos++;

 if (intento === numeroSecreto) {

  acertado = true;

 alert(
 "🎉 ¡Correcto!\n\n" +
 "Lo adivinaste en " +
 intentos +" intento(s)."
 );

} else if (intento < numeroSecreto) {

 alert("⬆️ El número secreto es mayor.");

 } else {

 alert("⬇️ El número secreto es menor.");
 }
    }
}