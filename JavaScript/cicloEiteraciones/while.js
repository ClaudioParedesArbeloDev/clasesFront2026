let number = 0;
let palabra = prompt("Ingrese una palabra");

// pedimos una palabra por el prompt
// el bucle while se va a ejecutar mientras se cumpla la condicion
// la condicion es que la palabra ingresada sea diferente a "salir"
// y el proceso que va a cumplir mostrar la palabra ingresada y pedir nuevamente una palabra
while (palabra !== "salir") {
    alert("La palabra ingresada es: " + palabra);
    palabra = prompt("Ingrese una palabra");
}