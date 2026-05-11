/* let nombre = "Claudio"

console.log(nombre)

nombre = "Jose"

console.log(nombre)

const apellido = "Perez"

console.log(apellido)

let edad = 16;

if (edad < 12) {
    console.log("Eres un nino")
}else if (edad < 18) {
    console.log("Eres un adolescente")
}else {
    console.log("Eres mayor de edad")
}

let number = 1;
console.log(number)

number = number + 1;
console.log(number)

number += 1;
console.log(number)

number++;
console.log(number)


for (let i = 0; i <= 20; i++) {
    console.log(i + 2)
    
}

const frutas = [
    {nombre: "Claudio", edad: 16},
    {nombre: "Jose", edad: 17},
    {nombre: "Maria", edad: 15}
]



frutas.forEach(element => {
    console.log(element.nombre + " tiene " + element.edad + " años")
});

const arrayfrutas = frutas.map(element => {
   const frutasMap = element.nombre + " tiene " + element.edad + " años"
   
});
 */

let nombre = prompt("Ingrese su nombre:").toUpperCase();
let sexo = prompt(  "Ingrese su sexo (M para mujer, H para hombre):",).toUpperCase();

let grupo;



if ((sexo === "M" && nombre < "M") || (sexo === "H" && nombre > "N")) {
  grupo = "A";
} else {
  grupo = "B";
}

console.log(`Te corresponde el grupo ${grupo}`);
alert(`Te corresponde el grupo ${grupo}`);