let nombre = prompt("¿Cuál es tu nombre?");

console.log(typeof(nombre));

let edad = prompt("¿Cuál es tu edad?");

console.log(typeof(edad)); // el prompt siempre devuelve un string, aunque el usuario ingrese un numero, por eso es importante convertirlo a numero si queremos hacer operaciones matematicas con el.

alert("Hola " + nombre + ", tu edad es " + edad);