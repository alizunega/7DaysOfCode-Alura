// Debes crear un pequeño programa que comience con un valor específico predefinido
// entre 0 y 10 para el número que vas a adivinar (por ejemplo, el 7).
//const inicial = 3;

const inicial = Math.floor(Math.random() * 11);
console.log(inicial);
let intentos = 0;
let msj = "";
// A continuación, el programa te preguntará cuál es el valor que deseas adivinar y, si aciertas, te felicitará.
// Si te equivocas, te dará 2 intentos más.
alert("¡Vamos a jugar a adivinar el número!");

while (intentos != 3) {
  let usuario = parseInt(prompt("Elija un valor entre 0 y 10"), 10);
  if (usuario != null) {
    if (usuario == inicial) {
      msj = "¡Felicitaciones! ¡Lo has adivinado!";
      alert("¡Felicitaciones! ¡Lo has adivinado!");
      break;
    } else {
      intentos++;
      if (intentos < 3) {
        alert("Equivocado, prueba otra vez");
      } else {
        msj = `Lo siento, ya no tienes mas intentos`;
        alert(
          `Lo siento, ya no tienes mas intentos. El número era: ${inicial}`
        );
      }
    }
  } else {
    alert("Por favor, elija un número");
  }
}

// Al final, si no aciertas en ninguno de los intentos, imprimirá cuál era el número inicial.
//
// Después de que el programa esté funcionando, intenta usar un número aleatorio en lugar de uno predefinido.

// Para hacer que la propia máquina elija el número a adivinar, puedes utilizar algo llamado Math.random().
//
// Para ello, utiliza el siguiente código:
//
// Math.floor(Math.random() * (máximo - mínimo + 1) + mínimo)
const container = document.querySelector(".container-mensaje");

const mensaje = document.createElement("h3");
const valorInicial = document.createElement("h4");
const intentosUsados = document.createElement("h5");
valorInicial.textContent = `El valor inicial era: ${inicial}`;
if (intentos == 3) {
  intentosUsados.textContent = `Intentos usados: 3`;
} else {
  intentosUsados.textContent = `Intentos usados: ${intentos + 1}`;
}
mensaje.textContent = msj;

container.appendChild(mensaje);
container.appendChild(valorInicial);
container.appendChild(intentosUsados);
