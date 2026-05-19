let number = 0;

number++;
number++;

number += 8;

console.log(number);

function mayorQue(n) {
  return (m) => {
    console.log("Hola");
    return m > n;
  };
}

let mayorQueDiez = mayorQue(10);

console.log(mayorQueDiez(9));

function asignarOperacion(signo) {
  if (signo == "suma") {
    return (a, b) => a + b;
  } else if (signo == "resta") {
    return (a, b) => a - b;
  } else {
    return "no es una operacion disponible";
  }
}

let suma = asignarOperacion("suma");

console.log(suma(3, 5));

function asignarOperaciones(signo) {
    switch (signo) {
        case 'suma':
            return (a,b) => a + b
            break;
        case 'resta':
            return (a, b) => a - b
        default:
            return 'Le erraste'
            break;
    }
}

let resta = asignarOperaciones('resta')

console.log(resta(5, 2))

let numeros = [ 2, 4 ,6 ,7]

let nombres = ['aldana', 'alejandro', 'luis', 'nahuel', 'claudia']

let ordenado = nombres.sort((a , b)=> a.localeCompare(b))

console.log(ordenado)

function porCadaUno(array, funcion){
    for (const elemento of array) {
        funcion(elemento * 2)
    }
}

porCadaUno(numeros, console.log)

porCadaUno(nombres, console.log)