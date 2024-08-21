# #7DaysOfCode

<kbd>
  <image
    src="./assets/logosevendays.png"
    alt="Logo 7 Days Of Code"
    caption="#7DaysOfCode"
    width="400">
</kbd>

## Descripción

Esta iniciativa de Alura Latam ha sido especialmente creada para ayudarte a mejorar tus habilidades en lógica de programación a través de desafíos diarios y prácticos.
Durante siete días, tendrás la oportunidad de resolver ejercicios que exploran temas como estructuras de control de flujo, estructuras de datos y funciones.
Cada día traerá un nuevo desafío, permitiéndote practicar y prepararte para enfrentar problemas más complejos en el universo de la programación.

## Ejercicios :hammer_and_wrench:

### Día 1: Lógica JS 1/7: Operaciones Booleanas :memo:

```
Tu tarea de hoy es reescribir el código a continuación para que imprima la información de manera correcta, que tenga sentido y sin errores:

let numeroUn = 1
let stringUn = '1'
let numeroTreinta = 30
let stringTreinta = '30'
let numeroDiez = 10
let stringDiez = '10'

if (COMPARAR numeroUn y stringUn) {
  console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes')
} else {
  console.log('Las variables numeroUn y stringUn no tienen el mismo valor')
}

if (COMPARAR numeroTreinta y stringTreinta) {
  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo')
} else {
  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo')
}

if (COMPARAR numeroDiez y stringDiez) {
  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes')
} else {
  console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor')
}
```

### Día 2: Lógica JS 2/7: Variables :memo:

```
Debe pedir al usuario responder 3 preguntas:
- ¿Cuál es tu nombre?
- ¿Cuántos años tienes?
- ¿Qué lenguaje de programación estás estudiando?

A medida que se hagan las preguntas, la persona que esté usando el programa debe responder cada una de ellas.
Al final, el sistema mostrará el mensaje:

"Hola [nombre], tienes [edad] años y ya estás aprendiendo [lenguaje]!"

Observa que cada información entre [ ] es una de las respuestas dadas por la persona.

OPCIONAL
Vas a complementar el código para que, después de mostrar el mensaje anterior, el programa pregunte:

¿Te gusta estudiar [lenguaje]? Responde con el número 1 para SÍ o 2 para NO.

Y luego, dependiendo de la respuesta, debería mostrar uno de los siguientes mensajes:

1 > ¡Muy bien! Sigue estudiando y tendrás mucho éxito.
2 > Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?

```

### Día 3: Lógica JS 3/7: Estructuras de control de flujo :memo:

```
Tu desafío de hoy es crear los destinos posibles de un juego, en el que el usuario pueda elegir:
Si quiere seguir hacia el área de Front-End o seguir hacia el área de Back-End.

1- Si está en el área de Front-End, si quiere aprender React o aprender Vue.
2- Si está en el área de Back-End, podrá aprender C# o aprender Java.

3- Después, independientemente de las elecciones anteriores, el usuario podrá elegir entre seguir especializándose
en el área elegida o desarrollarse para convertirse en Fullstack.
Debes mostrar en pantalla un mensaje específico para cada elección.

4- Finalmente, pregunta en qué tecnologías le gustaría a la persona especializarse o conocer.
Aquí, la persona puede responder N tecnologías, una a la vez. Entonces, mientras continúe respondiendo **ok** a la pregunta:
"¿Hay alguna otra tecnología que te gustaría aprender?", sigue presentando el Prompt,
para que complete el nombre de la tecnología en cuestión. Y, justo después,
presenta un mensaje comentando algo sobre la tecnología ingresada.

Lo importante es que la persona que esté jugando siempre pueda elegir qué decisión tomar para aprender
 y desarrollarse en el área de programación.

Además, también es esencial que, al final del juego, pueda ingresar tantas tecnologías como desee en la lista de aprendizaje.
```

### Día 4: Lógica JS 4/7: Mas loops y randomización :memo:

```
Debes crear un pequeño programa que comience con un valor específico predefinido
entre 0 y 10 para el número que vas a adivinar (por ejemplo, el 7).
 
A continuación, el programa te preguntará cuál es el valor que deseas adivinar y, si aciertas, te felicitará.
Si te equivocas, te dará 2 intentos más.
 
Al final, si no aciertas en ninguno de los intentos, imprimirá cuál era el número inicial.
 
Después de que el programa esté funcionando, intenta usar un número aleatorio en lugar de uno predefinido.

Para hacer que la propia máquina elija el número a adivinar, puedes utilizar algo llamado Math.random().
 
Para ello, utiliza el siguiente código:
 
Math.floor(Math.random() * (máximo - mínimo + 1) + mínimo)
```

### Día 5: Lógica JS 5/7: Arrays y colecciones :memo:

```
Hoy debes crear un programa en Javascript que pregunte si deseas agregar un alimento a tu lista de compras,
y debes poder responder con "sí" o "no".

A continuación, preguntará qué alimento deseas agregar, y escribirás su nombre, como por ejemplo "zanahoria".

Después, deberá preguntar en qué categoría se encaja ese alimento, con algunas opciones ya predefinidas, como frutas, lácteos, congelados, dulces y lo que más creas interesante. Así podrás separar todo en su respectivo grupo.

Por último, en caso de que ya no quieras agregar nada más a la lista de compras y respondas "no" a la primera pregunta, se mostrará una lista con todos los ítems agrupados, de la siguiente manera:

Si añades a tu lista:

banana, leche en polvo, tomate, leche vegetal, chicle, gominola, manzana, uva, aguacate y leche de vaca.

El programa debería imprimir, por ejemplo:

Lista de compras:

Frutas: banana, tomate, manzana, uva, aguacate

Lácteos: leche vegetal, leche de vaca, leche en polvo

Congelados:

Dulces: chicle y gominola

```

### Día 6: Lógica JS 6/7: Remoción de arrays :memo:

```
Deberás crear la opción de eliminar algún elemento de la lista, que se mostrará junto con la pregunta: “¿deseas añadir un alimento a la lista de compras?”.

A partir de ahí, si la persona elige esa opción, el programa imprimirá los elementos presentes en la lista actual, y la persona deberá escribir cuál de ellos desea eliminar.

Después de eso, el programa eliminará el elemento de la lista e imprimirá la confirmación de que el elemento realmente ya no está allí.

Finalmente, el programa volverá al ciclo inicial de preguntas.

Si, al intentar eliminar el elemento, este no se encuentra en la lista, deberás mostrar un mensaje advirtiendo de ello.
Por ejemplo: “¡No fue posible encontrar el elemento en la lista!”.
Recuerda que la opción de eliminar un elemento solo deberá estar disponible a partir del momento en que exista al menos un elemento en la lista de compras.
```

### Día 7: Lógica JS 7/7: Funciones en javascript :memo:

```
En este último desafío, mi propuesta para ti es: crea tu propia calculadora,
pero con un detalle muy importante: cada operación debe ser una función diferente en tu código.

Primero, la persona debe elegir una opción de operación impresa por el programa en la pantalla.

Luego, debe ingresar los dos valores que desea utilizar, y el programa imprimirá el resultado de la operación en cuestión.

Las opciones disponibles deben ser: suma, resta, multiplicación, división, y salir.
En esta última, el programa debe detenerse y mostrar un mensaje "Hasta la próxima".
```
