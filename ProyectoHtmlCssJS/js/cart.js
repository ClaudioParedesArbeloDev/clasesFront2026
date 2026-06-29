const ids = JSON.parse(localStorage.getItem('cart')) || [];

loadCart();

async function loadCart() {
    
    const response = await fetch("https://fakestoreapi.com/products");

    const products = await response.json();

    const cartProducts = products.filter(p => ids.includes(p.id));
    
    renderCart(cartProducts);
}

const container = document.getElementById("cartProducts");

function renderCart(products){
    let total = 0;

    container.innerHTML = "";

    products.forEach(p => {

        total += p.price

        container.innerHTML += `
            <div class= 'grid '>
                <img src= '${p.image}' class="w-10">
                <p>${p.title}</p>
                <p>${p.price}</p>

            </div>
        `
    })
}