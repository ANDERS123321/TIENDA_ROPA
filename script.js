// Carrito
const cartSidebar = document.getElementById('cartSidebar');
const cartBtn = document.getElementById('cartBtn');
const closeCart = document.getElementById('closeCart');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');

let cart = [];

cartBtn.addEventListener('click', () => cartSidebar.classList.add('active'));
closeCart.addEventListener('click', () => cartSidebar.classList.remove('active'));

document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
        const name = btn.dataset.name;
        const price = parseFloat(btn.dataset.price);
        cart.push({ name, price });
        renderCart();
    });
});

function renderCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const div = document.createElement('div');
        div.classList = "flex justify-between items-center bg-gray-800 p-3 rounded";
        div.innerHTML = `
          <span>${item.name}</span>
          <span>$${item.price.toFixed(2)}</span>
          <button onclick="removeItem(${index})" class="text-red-400 hover:text-red-600">✖</button>
        `;
        cartItemsContainer.appendChild(div);
    });
    cartTotal.textContent = total.toFixed(2);
}

window.removeItem = function (index) {
    cart.splice(index, 1);
    renderCart();
};