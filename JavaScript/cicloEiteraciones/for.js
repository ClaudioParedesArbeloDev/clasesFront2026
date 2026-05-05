/* //bucle for
let palabra = "Aldana"

for (let i = 0; i < 10; i++){
    console.log(palabra + " " + (i+1));
}

for (let turno = 1; turno <= 20; turno++){
    let ingresarNombre = prompt("Ingrese su nombre");
    alert('Bienvenido ' + ingresarNombre + " a la clase de JavaScript, este es tu turno numero " + turno);
}
 */
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}

let nombre = "jorge";

switch (nombre) {
  case "mandarina":
    console.log("Es una mandarina");
    break;

  case "manzana":
    console.log("Es una manzana");
    break;

  case "naranja":
    console.log("el precio de la naranja es de 100 pesos");
    break;

  case "jorge":
    console.log("Vos sos Jorgito el gordito");
    break;

  default:
    console.log("No es ni una mandarina ni una manzana");
    break;
}

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}