// cart.js
document.addEventListener("DOMContentLoaded", () => {
  fetch("../carrito.html")
    .then(res => res.text())
    .then(html => {
      document.body.insertAdjacentHTML("beforeend", html);

      const cartSidebar = document.getElementById('cartSidebar');
      const cartBtn = document.getElementById('cartBtn');
      const cartItemsContainer = document.getElementById('cartItems');
      const cartTotal = document.getElementById('cartTotal');

      let cart = [];

      // Abrir y cerrar carrito
      document.addEventListener('click', (e) => {
        if (e.target.id === 'cartBtn') {
          cartSidebar.classList.add('active');
        }
        if (e.target.id === 'closeCart') {
          cartSidebar.classList.remove('active');
        }
      });

      // Delegación de eventos para agregar productos al carrito
      document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
          const name = e.target.dataset.name;
          const price = parseFloat(e.target.dataset.price);
          cart.push({ name, price });
          renderCart();
        }
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
            <button data-remove="${index}" class="text-red-400 hover:text-red-600">✖</button>
          `;
          cartItemsContainer.appendChild(div);
        });
        cartTotal.textContent = total.toFixed(2);
      }

      // Eliminar productos del carrito
      cartItemsContainer.addEventListener('click', (e) => {
        if (e.target.dataset.remove !== undefined) {
          const index = parseInt(e.target.dataset.remove);
          cart.splice(index, 1);
          renderCart();
        }
      });
    })
    .catch(err => console.error("Error al cargar el carrito:", err));
});
