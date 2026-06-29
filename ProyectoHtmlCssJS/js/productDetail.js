//estamos captando los parametros de toda la ventana
const params = new URLSearchParams(window.location.search)
//traer especificamente el id
const id = params.get('id')

//captamos el nodo de la pagina
const detail = document.getElementById('productWrapper');

//llamamos a la funcion
loadProducts();

//creamos la funcion que va a llamar al producto
async function loadProducts() {
    
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await response.json();
    console.log(product)
    renderProduct(product)
}

//creamos la funcion que va a mostrar el producto en pantalla
function renderProduct(product){
    
    detail.innerHTML = `
            <div class='flex flex-col items-center w-4/6'>
                <p class= 'p-4 self-start'>${product.category}</p>
                <div class='flex items-center justify-evenly w-full p-8'>
                    <img src='${product.image}' class= 'w-90'>
                    <p class='text-3xl font-bold'>${product.title}</p>
                </div>
                <p class='w-4/6'>${product.description}</p>
                
                <p class='font-bold self-end'>Precio $${product.price}</p>

                <button 
                    onclick= "addCart(${product.id})"
                    class= "bg-cyan-700 text-amber-100 px-6 py-2 rounded mt-5">
                Agregar al Carrito
                </button>
                
            </div>
    `;
}

function addCart(id){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(id);
    localStorage.setItem('cart', JSON.stringify(cart))

    alert('Producto agregado');
}