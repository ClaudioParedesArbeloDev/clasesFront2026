const suma = (a, b) => a + b;

const resta = (a, b) => a - b;

const iva = x => x * 0.21;

let precioProducto = parseInt(prompt('Ingrese el precio del producto: '));

let descuento = precioProducto * 0.1;

let resultadoSuma = suma(precioProducto, iva(precioProducto));

let nuevoPrecio = resta(resultadoSuma, descuento);

console.log(nuevoPrecio)