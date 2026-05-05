//la funcion se declara con la palabra reservada function 
//seguida del nombre, parentesis donde van a estar los parametros
//y las llaves donde va el bloque de codigo a ejecutar


//funciones sin parametros
function nombrar(){
    console.log("Hola soy una funcion");
}

nombrar(); //llamamos a la funcion para que se ejecute

function pedirNombre(){
    let nombre = prompt("¿Cual es tu nombre?");
    let apellido = prompt("¿Cual es tu apellido?");
    console.log("Hola " + nombre + " " + apellido);
}

pedirNombre();

//funciones con parametros

function llamarAmigo(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}, ¿como estas?`);

}

llamarAmigo('Luis', 'Zelarrayan');

//variables fuera de la funcion son globales
let resultado = 10;

function sumar(num1, num2){
    //variables dentro de la funcion son locales
    resultado = num1 + num2;
    return resultado

}

resultado = sumar(5, 7);
console.log(resultado);

function hola (){
    return "Hola como estas?";
    
}

console.log(hola());