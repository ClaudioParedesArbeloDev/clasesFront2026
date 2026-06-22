/* Captamos el nodo con el id products en el html */
const productsContainer = document.getElementById("products");

//Array vacio que vamos a utilizar para nuestros productos
let products = [];


//LLamamos a la funcion loadProducts
loadProducts();

//declaramos la funcion loadProducts
async function loadProducts() {
    //const que guarda el resultado de la peticion a un api
    const response = await fetch("https://fakestoreapi.com/products");
    //llamamos al array vacio y lo llenamos con el resultado de la respuesta de la variable response
    products = await response.json();
    //estamos llamando a la funcion renderProducts y le pasamos como parametro products
    renderProducts(products);
    renderCategories(products);
    
}

//declaramos la funcion renderProducts y le decimos que le vamos a pasar un parametro
function renderProducts(data){
    //este es la variable donde guardamos el nodo que captamos desde el html y le insertamos codigo html, por ahora vacio.
    productsContainer.innerHTML = "";

    //le decimos que al parametro que normalmente seria un array vamos a iterar a traves de forEach
    //le decimos que el producto y luego la funcion flecha en donde le decime que vamos a insertar html por cada producto que itero
    //+= lo que hace es sumar al html en cambio si solo colocamos = lo vamos reemplazando
    data.forEach( product => {
            productsContainer.innerHTML += `
                <div class = "card">
                    <a href='detail.html?id=${product.id}' class="flex flex-col items-center border-2 m-4 p-4 w-50 h-100 rounded-xl">
                        <img src='${product.image}' alt='${product.name}' class="w-40 h-50 object-contain"/>
                        <div class="pt-4">
                            <p>${product.category}</p>
                            <h3 class="font-bold h-20 overflow-hidden">${product.title}</h3>
                            <h4 class="pt-2">$${product.price}</h4>
                        </div>
                    </a>
                </div>

            ` 

    })

}

//tomamos el nodo del buscador para obtener el resultado de lo buscado en el input
const search = document.getElementById('buscador');

//estamos escuchando un evento (input)
const input = search.addEventListener('input', ()=>{
    const normalizar = search.value.toLowerCase();

    const filtrado = products.filter(product =>
        product.title.toLowerCase().includes(normalizar) ||
        product.category.toLowerCase().includes(normalizar)
    )

    renderProducts(filtrado) 
})


//captamos el nodo de las categorias
const categorias = document.getElementById('categories')

function renderCategories(data) {
    //new Set lo que hace es traer una cada una de las categorias sin repetirlas
    //el .map me hacer un array nuevo con las categorias
    const categoriasUnicas = [...new Set(data.map(product => product.category))]

    //haga la opcion principal que es todos los productos
    categorias.innerHTML = `<option value="all"> Todos </option>`

    //muestre las categorias, del nuevo array que creamos a traves del map en categoriasUnicas
    //y que lo itere o recorra a traves de forEach
    categoriasUnicas.forEach(cat => {
        categorias.innerHTML += `<option value="${cat}">${cat}</option>`
    })

    //aca escucha el cambio que hay en el select
    categorias.addEventListener('change', () =>{
        const categoriaSelecionada = categorias.value; //le digo que vea el valor del select

        const filtrado = categoriaSelecionada === 'all' //al principio muestre todo
            ? products 
            :products.filter(product => product.category === categoriaSelecionada) //que filtre por categoria

        renderProducts(filtrado)
        
    })
    
}






