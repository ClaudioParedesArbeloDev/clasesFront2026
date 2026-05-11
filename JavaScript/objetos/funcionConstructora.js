function Persona(name, apellido, edad, peso, altura){
    this.nombre = name;
    this.apellido = apellido;
    this.edad = edad;
    this.peso = peso;
    this.altura = altura
}

const persona1 = new Persona("Claudio", "Paredes", 46, '100 kg.', 1.78)

const persona2 = new Persona("Aldana", "D'Ottavio", 22, '54 kg', 1.60)
console.log(persona1)
console.log(persona2)

function Animal(literal){
    this.nombre = literal.nombre;
    this.raza = literal.raza;
    this.color = literal.color;
    this.ladra = function (){ console.log('guau')}
}

const perro = new Animal({nombre:"bobby", raza:"caniche",color: "blanco"})

perro.ladra()

let nombre = "Hola Code & Lens"

console.log(nombre.length)

console.log(nombre.toLowerCase())
console.log(nombre.toUpperCase())

let password = 'firulais1'

if(password.length <= 8) {
    console.log("La contrasena debe ser mayor a 8 caracteres")
}else{
    console.log("ok")
}

let input = 'VerduRa'

if (input.toLowerCase() === 'verdura'){
    console.log('ud quiere verdura')
}