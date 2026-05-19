const cursos = [
    {nombre: 'front', precio: 500},
    {nombre: 'back', precio: 400},
    {nombre: 'back', precio: 700},
    {nombre: 'flutter', precio: 1000}
]

// console.log(cursos)

 const filtro = cursos.find((el)=> el.nombre === 'back')

 console.log(filtro)

const filtrado = cursos.filter((el)=> el.nombre.includes('java'))
const filtrado2 = cursos.filter((el)=>el.precio < 700)

console.log(filtrado2)


const somero = cursos.some((el)=> el.nombre === 'front')

console.log(somero)

const mapa = cursos.map((el)=> `el curso mas interesante es ${el.nombre} con el precio de ${el.precio + 100}`)

console.log(mapa)

let numeros = [21, 56, 11, 5, 99];

console.log(Math.min(4, 23, 45, 1, 99, 1234))

console.log(Math.round(123.52))

// *
// /
// -
// +
// 2**3

console.log(Math.sqrt(9))

console.log(Math.random() * 50)

numeros.sort((a, b)=> b - a)


console.log(numeros)


const total = numeros.reduce((acc, n)=> acc + n, 0)

console.log(total)