let edad = 17;

if(edad >= 18){
    console.log("Eres mayor de edad");
} 

// comparativos

console.log(3 == 3) // == es igual a
console.log(3 == "3") // == compara el valor, no el tipo de dato
console.log(3 === "3") // === es estrictamente igual a, compara el valor y el tipo de dato
console.log(3 < 5) // < es menor que
console.log;(5 > 3) // > es mayor que
console.log(3 <= 3) // <= es menor o igual que
console.log(5 >= 3) // >= es mayor o igual que
console.log(3 != 4) // != es diferente a
console.log(3 !== "3") // !== es estrictamente diferente a, compara el valor y el tipo de dato

let nombre = "Mario";

if(nombre == "Juan"){
    console.log("Hola Juan");
}else{
    console.log("No eres Juan");
}

let fruta = "pera";

if(fruta == "manzana"){
    console.log("Es una manzana");
}else if(fruta == "naranja"){
    console.log("Es una naranja");
}else{
    console.log("No es ni una manzana ni una naranja");
}

let number = 11;

let mayorQue10 = number > 10

console.log(mayorQue10)

let user = "admin";

let password = "123";

/* if( user == 'admin' && password == '1234'){
    console.log("Bienvenido admin");
}else{
    console.log("Usuario o contraseña incorrectos");
} */

if( user == 'admin' || password == '1234'){
    console.log("Bienvenido admin");
}else{
    console.log("Usuario o contraseña incorrectos");
}



switch(fruta){
    case "manzana":
        console.log("Es una manzana");
        break;
    case "naranja":
        console.log("Es una naranja");
        break;
    case "pera":
        console.log("Es una pera");
        break;
    case "platano":
        console.log("Es un platano");
        break;
    default:
        console.log("No es ni una manzana, ni una naranja, ni una pera, ni un platano");
}