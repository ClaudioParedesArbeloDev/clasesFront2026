/* 
let number = 11;

do {
    console.log("hola gente")
    number++;
} while (number < 10);

while (number < 10) {
    console.log("hola gente esto es un while")
    number++;
} */

//el usuario y contrasena para comparar en nuestra base de datos
let userDB = "admin";
let passwordDB = "1234";

//pedimos al usuario que ingrese su usuario y contraseña
let user = prompt("Ingrese su usuario");
let password = prompt("Ingrese su contraseña");

//estos van a ser los intentos que el usuario puede hacer
let intentos = 3;

do {
    if (user === userDB && password === passwordDB) {
        alert("Bienvenido al sistema");
        break;
    }else {
        alert("Usuario o contraseña incorrectos");
        intentos--;
        user = prompt("Ingrese su usuario");
        password = prompt("Ingrese su contraseña");
        console.log("Intentos restantes: " + intentos);
    }
    
    } while (intentos > 0);


