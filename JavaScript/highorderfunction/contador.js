let numeros = [2, 4, 6, 7];

numeros.forEach((numero) => {console.log(numero * numero)});

function porCadaUno(array, funcion) {
  for (const elemento of array) {
    funcion(elemento);
  }
}

let total = 0;

function acumular(n) {
  total += n;
}

porCadaUno(numeros, acumular);

console.log(total)

let duplicado = []

porCadaUno(numeros, (el)=>{duplicado.push(el * 2) })

console.log(duplicado)


