// Hoy debes crear un programa en Javascript que pregunte si deseas agregar un alimento a tu lista de compras,
// y debes poder responder con "sí" o "no".
const categoria = {
  frutas: [],
  lacteos: [],
  congelados: [],
  dulces: [],
  verduras: [],
  bebidas: [],
  limpieza: [],
  especias: [],
  aseo: [],
};
let mensaje = "";
alert("Hoy iremos de compras...");
let eleccion = prompt(
  "¿Desea agregar un elemento a la lista? Responde con 'si' o 'no'"
)?.toLowerCase();

if (eleccion === "no") {
  mensaje = "No se agregó ningún alimento a la lista";
  console.log("No se agregó ningún alimento a la lista");
} else if (eleccion === "si") {
  while (eleccion === "si") {
    // A continuación, preguntará qué alimento deseas agregar, y escribirás su nombre, como por ejemplo "zanahoria".
    let alimento = prompt(
      "¿Qué alimento deseas agregar? Escribe su nombre: "
    )?.toLowerCase();
    // Después, deberá preguntar en qué categoría se encaja ese alimento, con algunas opciones ya predefinidas,
    //como frutas, lácteos, congelados, dulces y lo que más creas interesante. Así podrás separar todo en su respectivo grupo.
    let categoriaUsuario = prompt(
      "¿A qué categoría pertenece?: frutas, lacteos, congelados, dulces, verduras, bebidas, limpieza, especias, aseo"
    );
    if (categoria[categoriaUsuario]) {
      categoria[categoriaUsuario].push(alimento);
    } else {
      alert("La categoría ingresada no existe");
    }

    eleccion = prompt(
      "¿Desea agregar un elemento a la lista? Responde con 'si' o 'no'"
    )?.toLowerCase();
  }
} else {
  alert("Debes responder con 'si' o 'no'");
}

// Por último, en caso de que ya no quieras agregar nada más a la lista de compras y respondas "no" a la primera pregunta,
// se mostrará una lista con todos los ítems agrupados, de la siguiente manera:
// Si añades a tu lista:
// banana, leche en polvo, tomate, leche vegetal, chicle, gominola, manzana, uva, aguacate y leche de vaca.
// El programa debería imprimir, por ejemplo:
// Lista de compras:
// Frutas: banana, tomate, manzana, uva, aguacate
// Lácteos: leche vegetal, leche de vaca, leche en polvo
// Congelados:
// Dulces: chicle y gominola
console.log("Lista de compras:");
for (let categ in categoria) {
  console.log(`${categ}: ${categoria[categ].join(", ")}`);
}

const container = document.querySelector(".container");
const titulo = document.createElement("h2");
if (mensaje) {
  titulo.textContent = mensaje;
  container.appendChild(titulo);
} else {
  titulo.textContent = "Lista de compras: ";
  container.appendChild(titulo);
  const lista = document.createElement("ul");
  for (let categ in categoria) {
    const item = document.createElement("li");
    item.textContent = `${categ}: ${categoria[categ].join(", ")}`;
    lista.appendChild(item);
  }
  container.appendChild(lista);
}
