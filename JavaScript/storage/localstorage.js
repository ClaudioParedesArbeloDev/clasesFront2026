localStorage.setItem('nombre', 'Claudio')

localStorage.setItem('edad', 30)

localStorage.setItem('apellido', 'Gonzalez')

let nombre = localStorage.getItem('nombre')
let edad = localStorage.getItem('edad')

console.log(nombre)
console.log(edad)

sessionStorage.setItem('productos', [1, 2, 3])

let productos = sessionStorage.getItem('productos').split(' ,')

console.log(productos)

localStorage.removeItem("edad");

localStorage.clear();

for(let i = 0; i < localStorage.length; i++){
    let clave = localStorage.key(i)
    console.log('Clave: ' + clave)
    console.log('Valor: ' + localStorage.getItem(clave))
}

let producto = {
    id: 1,
    nombre: 'Camisa',
    precio: 20
}

const aJson = JSON.stringify(producto)
console.log(typeof(producto))
console.log(typeof(aJson))

localStorage.setItem('producto', aJson)

let productoRecuperado = JSON.parse(localStorage.getItem('producto'))

console.log(productoRecuperado)

console.log(productoRecuperado.precio)
