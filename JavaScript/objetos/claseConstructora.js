class Persona{
    constructor(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad
    }
    hablar(){ console.log('Hola ' + this.nombre)}
}

const luis = new Persona('Luis', 'Zelarrayan', 23)

console.log(luis)

luis.hablar()

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumarIva(){
        this.precio = this.precio * 1.21;
    }
    vender(){
        this.vendido = true;
    }
    descuento(porcentaje){
        this.precio = this.precio - ((this.precio * porcentaje)/100)
    }
}

const producto1 = new Producto("arroz", "125");

const producto2 = new Producto("fideo", "50")

producto1.sumarIva();
producto2.sumarIva();
producto1.vender();
producto1.descuento(10);

console.log(producto1.precio)