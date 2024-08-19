// Tu desafío de hoy es crear los destinos posibles de un juego, en el que el usuario pueda elegir:
// Si quiere seguir hacia el área de Front-End o seguir hacia el área de Back-End.
alert();
const eleccionUsuario = prompt(
  "Deberá elegir un camino de especialización. Elija entre FrontEnd o BackEnd: "
);
const eleccion = eleccionUsuario.toLowerCase();
let frontend, backend;

if (eleccion == "frontend") {
  // Si está en el área de Front-End, si quiere aprender React o aprender Vue.
  alert("Bienvenido a FrontEnd");
  frontend = prompt("¿Prefiere aprender React o Vue?: ")?.toUpperCase();
  alert(`Elegiste ${frontend}`);
} else if (eleccion == "backend") {
  // Si está en el área de Back-End, podrá aprender C# o aprender Java.
  alert("Bienvenido a BackEnd");
  backend = prompt("¿Prefiere aprender C# o Java?: ")?.toUpperCase();
  alert(`Elegiste ${backend}`);
} else {
  alert("Por favor, elija entre FrontEnd o BackEnd");
}

// Después, independientemente de las elecciones anteriores, el usuario podrá elegir entre seguir especializándose
// en el área elegida o desarrollarse para convertirse en Fullstack.

let especializacion = prompt(
  "¿Desea seguir especializándose en el área elegida (continuar) o convertirse en FullStack?"
);
// Debes mostrar en pantalla un mensaje específico para cada elección.
if (especializacion == "continuar") {
  alert(`¡Continuemos el camino de ${eleccionUsuario.toUpperCase()}!`);
} else if (especializacion == "fullstack") {
  alert("¡Bienvenido a FullStack!");
} else {
  alert("Por favor, elija entre continuar o fullstack");
}
// Finalmente, pregunta en qué tecnologías le gustaría a la persona especializarse o conocer.
// Aquí, la persona puede responder N tecnologías, una a la vez. Entonces, mientras continúe respondiendo **ok** a la pregunta:
const tecnologias = [];

// "¿Hay alguna otra tecnología que te gustaría aprender?", sigue presentando el Prompt,
// para que complete el nombre de la tecnología en cuestión. Y, justo después,
// presenta un mensaje comentando algo sobre la tecnología ingresada.
while (confirm("¿Hay alguna otra tecnología que te gustaría aprender?")) {
  let tecnologia = prompt("¿Cuál?");
  alert(`Has elegido ${tecnologia.toUpperCase()}`);
  tecnologias.push(tecnologia.toUpperCase());
}

alert(`¡Genial! Has elegido aprender ${tecnologias.length} tecnologías`);

let mensaje1 = document.getElementById("mensaje1");
let mensaje2 = document.getElementById("mensaje2");
let mensaje3 = document.getElementById("mensaje3");
let mensaje4 = document.getElementById("mensaje4");

mensaje1.innerHTML = `Tu camino de especialización es: ${eleccionUsuario.toUpperCase()}`;
mensaje2.innerHTML = `Prefiere aprender ${
  frontend ?? backend ?? "No seleccionaste ninguna opción"
}`;

if (especializacion == "continuar") {
  mensaje3.innerHTML = `Desea continuar con su especialización actual`;
} else {
  mensaje3.innerHTML = `Desea convertirse en FullStack`;
}

mensaje4.innerHTML = `¡Genial! Has elegido aprender ${tecnologias.length} tecnologías`;

let listLenguajes = document.getElementById("list-lenguajes");
let tecnologia;
for (tecnologia in tecnologias) {
  let li = document.createElement("li");
  let textElement = document.createTextNode(tecnologias[tecnologia]);
  li.appendChild(textElement);
  listLenguajes.appendChild(li);
}

// Lo importante es que la persona que esté jugando siempre pueda elegir qué decisión tomar para aprender
//  y desarrollarse en el área de programación.
// Además, también es esencial que, al final del juego, pueda ingresar tantas tecnologías como desee en la lista de aprendizaje.
