const boton = document.getElementById("btn");

/* boton.addEventListener('click', apretarBoton )

function apretarBoton(){
    console.log("Botón apretado");
} */
//podemos declarar la función antes o después de asignarla al evento, no importa
/* boton.onclick = () => {
    console.log('apretadito')
} */


//podemos declarar la función antes o después de asignarla al evento, no importa
/* boton.onclick = apretado;


function apretado(){
    console.log('apretadito')
}; */

boton.addEventListener('mousemove', mouseEvento);

function mouseEvento(){
    console.log('Mouse presionado');
}

const div = document.getElementById("div");

div.addEventListener('mouseout', () => {
    console.log('Mouse fuera del div');
})

const input = document.getElementById("input");

input.addEventListener('input', () => {
    console.log(input.value);
})

let miFormulario = document.getElementById("formulario");

miFormulario.addEventListener('submit', validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    let formulario = e.target;
    console.log(formulario.children[0].value);
    console.log(formulario.children[1].value);
}
