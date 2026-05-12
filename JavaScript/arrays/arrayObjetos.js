/* const productos = [
    {id: 1, producto: 'arroz', precio: 1500},
    {id: 2, producto: 'fideos', precio: 2000},
    {id: 3, producto: 'leche', precio: 2500}
]

for (const producto of productos) {
    console.log(producto.precio)
    
} */

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumarIva() {
        this.precio = this.precio * 1.21;
    }
}

const productos = [];

productos.push(new Producto('arroz', 1500))
productos.push(new Producto('fideos', 2500))
productos.push(new Producto('leche', 2500))

console.log(productos)

for (const producto of productos) {

    producto.sumarIva()
    console.log(producto)    
}



fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => console.log(data));