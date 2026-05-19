const productos = [
  { id: 1, producto: "arroz", precio: 1500 },
  { id: 2, producto: "fideos", precio: 2000 },
  { id: 3, producto: "leche", precio: 2500 },
  { id: 4, producto: "azucar", precio: 3000 },
  { id: 5, producto: "sal", precio: 3500 },
  { id: 6, producto: "harina", precio: 4000 },
];
//ingresamos al DOM informacion
const contenedor = document.getElementById("wrapper");

contenedor.className = "wrapper bg-primary";

contenedor.innerHTML = `<div>
<h1>Productos</h1>
<p>Precio</p>
</div>
`;

console.log(contenedor.innerHTML);

const parrafo = document.getElementsByTagName("p");
//extraemos informacion del DOM
console.log(parrafo[1].innerHTML);

const paises = document.getElementsByClassName("paises");

console.log(paises[3].innerHTML);

for (const pais of paises) {
  console.log(pais.innerHTML);
}

const hola = document.getElementById("hola");

hola.innerText = "Hola Curso, como va?";

const nuevoParrafo = document.createElement("p");

nuevoParrafo.innerHTML = "<h2>Nuevo Parrafo</h2>";

document.body.append(nuevoParrafo);

nuevoParrafo.remove();

paises[1].remove();

document.getElementById("nombre").value = "Andrea";

const personas = ["claudio", "andrea", "marcos", "lucas", "sofia"];

const contenedorPersonas = document.getElementById("personas");

for (const persona of personas) {
  const li = document.createElement("li");
  li.innerText = persona;
  contenedorPersonas.appendChild(li);
}

const product = document.getElementById("product");

for (const producto of productos) {
  const div = document.createElement("div");
  div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.producto}</h5>
                <p class="card-text">$ ${producto.precio}</p>
                <a href="#" class="btn btn-warning">Go somewhere</a>
            </div>
        </div>
    `;
  div.className = "producto-card";
  product.appendChild(div);
}
