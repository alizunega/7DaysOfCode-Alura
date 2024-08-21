// En este último desafío, mi propuesta para ti es: crea tu propia calculadora,
// pero con un detalle muy importante: cada operación debe ser una función diferente en tu código.

// Primero, la persona debe elegir una opción de operación impresa por el programa en la pantalla.

// Luego, debe ingresar los dos valores que desea utilizar, y el programa imprimirá el resultado de la operación en cuestión.

// Las opciones disponibles deben ser: suma, resta, multiplicación, división, y salir.
// En esta última, el programa debe detenerse y mostrar un mensaje "Hasta la próxima".

//DEFINICION DE FUNCIONES//
function suma(a, b) {
  return a + b;
}
function resta(a, b) {
  return a - b;
}
function multiplicacion(a, b) {
  return a * b;
}
function division(a, b) {
  if (b == 0) {
    return "No se puede dividir por cero";
  } else {
    return a / b;
  }
}

//FUNCION PARA IMPRIMIR RESULTADOS//

function imprimir(resultado) {
  const container = document.querySelector(".container");
  const resultadoContainer = document.createElement("div");
  const tituloOp = document.createElement("h4");
  if (operacion != "salir") {
    tituloOp.textContent = `Operación seleccionada: ${operacion}`;
  } else {
    tituloOp.textContent = "Hasta la próxima";
  }
  const result = document.createElement("h6");
  result.textContent = `El resultado para la operacion seleccionada es: ${resultado}`;
}

let operacion = prompt(
  "Seleccione la operación que desea realizar: suma - resta - multiplicacion - division"
);
let valor1,
  valor2 = 0;

while (operacion != "salir") {
  let resultado = 0;
  valor1 = parseInt(prompt("Elija un valor para el primer operador"));
  valor2 = parseInt(prompt("Elija un valor para el segundo operador"));
  switch (operacion) {
    case "suma":
      resultado = suma(valor1, valor2);
      break;
    case "resta":
      resultado = resta(valor1, valor2);
      break;
    case "multiplicacion":
      resultado = multiplicacion(valor1, valor2);
      break;
    case "division":
      resultado = division(valor1, valor2);
      break;
  }
  imprimir(resultado);
}
