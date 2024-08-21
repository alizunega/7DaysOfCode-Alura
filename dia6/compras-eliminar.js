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
const listaEliminados = [];

//FUNCION ELIMINAR
function eliminarAlimento() {
  const tieneElementos = Object.values(categoria).some((arr) => arr.length > 0);

  if (!tieneElementos) {
    alert("No hay elementos en la lista para eliminar.");
    return;
  }

  let eliminar = prompt(
    "¿Desea eliminar algún alimento? Responda 'si' o 'no'"
  )?.toLowerCase();

  while (eliminar !== "si") {
    if (eliminar === "no") {
      alert("¡No se eliminaron elementos!");
      mostrarLista();
      return;
    } else {
      alert("Seleccione una opcion válida (si o no).");
      eliminar = prompt(
        "¿Desea eliminar algún alimento? Responda 'si' o 'no'"
      )?.toLowerCase();
    }
  }

  while (eliminar === "si") {
    const elemento = prompt("¿Qué alimento deseas eliminar?")?.toLowerCase();
    const categoriaDelElemento = Object.keys(categoria).find((key) =>
      categoria[key].some((item) => item.toLowerCase() === elemento)
    );

    if (categoriaDelElemento) {
      const index = categoria[categoriaDelElemento].findIndex(
        (item) => item.toLowerCase() === elemento
      );
      if (index > -1) {
        categoria[categoriaDelElemento].splice(index, 1);
        listaEliminados.push(elemento);
        alert(
          `${elemento} ha sido eliminado de la categoría ${categoriaDelElemento}`
        );
      }
    } else {
      //el elemento no pertenece a la lista
      alert("¡No fue posible encontrar el elemento en la lista!");
      mostrarLista();
      return;
    }
    eliminar = prompt("¿Desea eliminar algún alimento? Responda 'si' o 'no'");

    if (eliminar === "no") {
      alert("¡No se eliminarán más elementos!");
      console.log("Lista de eliminados", listaEliminados);
      mostrarLista();
      return;
    }
  }
}

//FUNCION AGREGAR
function agregarAlimento() {
  let eleccion = prompt(
    "¿Desea agregar un elemento a la lista? Responde con 'si' o 'no'"
  )?.toLowerCase();

  while (eleccion === "si") {
    const alimento = prompt(
      "¿Qué alimento deseas agregar? Escribe su nombre: "
    )?.toLowerCase();
    const categoriaUsuario = prompt(
      "¿A qué categoría pertenece?: frutas, lacteos, congelados, dulces, verduras, bebidas, limpieza, especias, aseo"
    )?.toLowerCase();

    if (categoria[categoriaUsuario]) {
      categoria[categoriaUsuario].push(alimento);
    } else {
      alert("La categoría ingresada no existe");
    }

    eleccion = prompt(
      "¿Desea agregar otro elemento a la lista? Responde con 'si' o 'no'"
    )?.toLowerCase();
  }
  if (eleccion === "no") {
    eliminarAlimento();
  } else {
    alert("Seleccione una opcion válida (si o no).");
    agregarAlimento();
  }
}

//FUNCION MOSTRAR
function mostrarLista() {
  console.log("Lista de compras:");
  for (let categ in categoria) {
    if (categoria[categ].length > 0) {
      console.log(`${categ}: ${categoria[categ].join(", ")}`);
    }
  }

  const container = document.querySelector(".container");
  container.innerHTML = ""; // Limpia el contenido previo
  const titulo = document.createElement("h2");
  titulo.textContent = "Lista de compras:";
  container.appendChild(titulo);

  const lista = document.createElement("ul");
  for (let categ in categoria) {
    if (categoria[categ].length > 0) {
      const item = document.createElement("li");
      item.textContent = `${categ}: ${categoria[categ].join(", ")}`;
      lista.appendChild(item);
    }
  }
  container.appendChild(lista);
  const eliminados = document.createElement("div");
  const tituloElim = document.createElement("h4");
  tituloElim.textContent = `Elementos eliminados`;
  eliminados.appendChild(tituloElim);
  const p = document.createElement("p");
  console.log(listaEliminados);
  p.textContent = `Fueron eliminados: ${listaEliminados}`;
  eliminados.appendChild(p);
  container.appendChild(eliminados);
}

alert("Hoy iremos de compras...");
agregarAlimento();
