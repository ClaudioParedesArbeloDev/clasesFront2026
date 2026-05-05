function comun (nombre){
    console.log(`Hola, soy una función y mi nombre es ${nombre}`);
}

comun("Alice");

const anonima = function(nombre){
    console.log(`Hola, soy una función anónima y mi nombre es ${nombre}`);
}

anonima("Bob");

const flecha = (nombre) => {
    console.log(`Hola, soy una función flecha y mi nombre es ${nombre}`);
}

flecha("Charlie");

const FechaConcisa = (num1, num2) => num1 + num2;

console.log(FechaConcisa(5, 10));