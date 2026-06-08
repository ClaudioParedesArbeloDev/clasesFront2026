const productsContainer = document.getElementById("products");


let products = [];

loadProducts();

async function loadProducts() {
    //const que guarda el resultado de la peticion
    const response = await fetch("https://fakestoreapi.com/products");

    products = await response.json();

    renderProducts(products);
    
}

function renderProducts(data){

    productsContainer.innerHTML = "";

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


