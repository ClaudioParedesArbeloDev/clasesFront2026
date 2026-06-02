/* const productos = [
    { id: 1, nombre: 'Camisa', precio: 20 },
    { id: 2, nombre: 'Pantalón', precio: 30 },
    { id: 3, nombre: 'Zapatos', precio: 50 }
] */

/* const guardarLocal = (clave, valor) => {
    localStorage.setItem(clave, valor)
}

for (const producto of productos){
    guardarLocal(producto.id, JSON.stringify(producto))

}

guardarLocal('listaDeProductos', JSON.stringify(productos))
 */
class Producto {
    constructor(obj){
        this.nombre = obj.nombre;
        this.precio = parseFloat(obj.precio);
    }
    sumarIva(){
        this.precio = this.precio * 1.21;
    } 
}

const almacenados = JSON.parse(localStorage.getItem('listaDeProductos'))

console.log(almacenados)

const productos = []
const productoConIva = []

console.log(productos)
for (const obj of almacenados){
    productos.push(new Producto(obj))
}
console.log(productos)

for (const product of productos){
    product.sumarIva()


}



