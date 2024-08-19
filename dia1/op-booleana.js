let numeroUn = 1;
let stringUn = "1";
let numeroTreinta = 30;
let stringTreinta = "30";
let numeroDiez = 10;
let stringDiez = "10";
let mensajes = [];

if (numeroUn == stringUn) {
  msj =
    "Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes";
} else {
  msj = "Las variables numeroUn y stringUn no tienen el mismo valor";
}
mensajes.push(msj);
console.log(msj);

if (numeroTreinta === stringTreinta) {
  msj =
    "Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo";
} else {
  msj = "Las variables numeroTreinta y stringTreinta no tienen el mismo tipo";
}
mensajes.push(msj);
console.log(msj);

if (numeroDiez == stringDiez) {
  msj =
    "Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes";
} else {
  msj = "Las variables numeroDiez y stringDiez no tienen el mismo valor";
}
mensajes.push(msj);
console.log(msj);

const mensaje = document.querySelector(".container-mensaje");
const titulo = document.createElement("h2");
titulo.textContent = "Resultados Desafío Día 1";
mensaje.appendChild(titulo);

for (let i = 0; i < 3; i++) {
  const item = document.createElement("h4");
  item.classList.add(`item${i}`);
  item.textContent = mensajes[i];

  mensaje.appendChild(item);
}
