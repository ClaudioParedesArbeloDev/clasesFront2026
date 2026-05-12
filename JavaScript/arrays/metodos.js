const arrayPrueba = ['Mariano', 'Luis'];

//el metodo push agrega el elemento al final del array
arrayPrueba.push('Aldana')

console.log(arrayPrueba)

arrayPrueba.push('Alejandro')

console.log(arrayPrueba)

//el metodo unshift lo agrega al principio del array
arrayPrueba.unshift('Claudia')

console.log(arrayPrueba)

//el metodo join te convierte el array en string y te separa los elementos por el caracter elegido
console.log(arrayPrueba.join(' * '))


//el metodo splice te elimna elementos, el primer parametro es la ubicacion y la segunda la cantidad de elementos
arrayPrueba.splice(1, 2)

console.log(`el metodo splice es asi ${arrayPrueba}`)

//el metodo pop quita al ultimo del array
arrayPrueba.pop()

console.log(arrayPrueba)

//el metodo shift saca el primer elemento del array
arrayPrueba.shift()

console.log(arrayPrueba)


const perros = ['caniche', 'doberman', 'golden']

const gatos = ['persa', 'egipcio', 'angora']

const mascotas = gatos.concat(perros)

console.log(mascotas)

const apellidos = ['dotavio', 'souza', 'mingo', 'faria', 'villanueva']

//el metodo slice construye un nuevo array con el primer parametro que es donde comienza y el segundo es la cantidad de elementos
const mujeres = apellidos.slice(0, 2)

console.log(mujeres)

//indexOf busca el parametro que le demos y nos dice la posicion que ocupa en el array
console.log(apellidos.indexOf('paredes'))
let busqueda = apellidos.indexOf('faria')

if(busqueda < 0){
    console.log('ese elemento no existe')
}else{
    console.log(`el indice de la busqueda es ${busqueda}`)
}

console.log(apellidos.includes('faria'))

console.log(apellidos.reverse())

const arrayA = ['arroz']

const producto = {
    title: "mani",
    marca: 'mani king',
    precio: 2300
}

arrayA.push(producto)

console.log(arrayA)

console.log(arrayA.includes('mani'))