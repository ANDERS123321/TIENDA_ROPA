    // Lista de productos simulada
    const products = [
      { name: "Camiseta Neon", price: 39.99, category: "camiseta", img: "../assets/img/polo.avif" },
      { name: "Pantalón Futurista", price: 59.99, category: "pantalon", img: "../assets/img/pantalon.webp" },
      { name: "Chaqueta Cyberpunk", price: 89.99, category: "chaqueta", img: "../assets/img/chaqueta.webp" },
      { name: "Camiseta Holográfica", price: 45.50, category: "camiseta", img: "../assets/img/polo2.jpg" },
      { name: "Pantalón Minimal", price: 72.00, category: "pantalon", img: "../assets/img/pantalon2.jpg" },
      { name: "Chaqueta Techwear", price: 110.00, category: "chaqueta", img: "../assets/img/chaqueta2.jpg" },
    ];

    const productList = document.getElementById("productList");
    const searchInput = document.getElementById("searchInput");
    const filterCategory = document.getElementById("filterCategory");
    const filterPrice = document.getElementById("filterPrice");

    function displayProducts() {
      const searchText = searchInput.value.toLowerCase();
      const category = filterCategory.value;
      const priceFilter = filterPrice.value;

      productList.innerHTML = "";

      const filtered = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchText);
        const matchesCategory = category === "todos" || p.category === category;
        let matchesPrice = true;

        if (priceFilter === "bajo") matchesPrice = p.price < 50;
        else if (priceFilter === "medio") matchesPrice = p.price >= 50 && p.price <= 80;
        else if (priceFilter === "alto") matchesPrice = p.price > 80;

        return matchesSearch && matchesCategory && matchesPrice;
      });

      if (filtered.length === 0) {
        productList.innerHTML = `<p class='text-gray-400 text-center col-span-3'>No se encontraron productos.</p>`;
        return;
      }

      filtered.forEach(p => {
        const card = document.createElement("div");
        card.className = "bg-gray-800/70 backdrop-blur-md rounded-xl p-4 shadow-lg product-card";
        card.innerHTML = `
          <img src="${p.img}" alt="${p.name}" class="rounded-lg mb-4">
          <h3 class="text-xl font-semibold">${p.name}</h3>
          <p class="text-cyan-400 text-lg font-bold mt-2">$${p.price.toFixed(2)}</p>
          <button class="mt-3 w-full bg-gradient-to-r from-cyan-600 to-purple-600 py-2 rounded-lg hover:scale-105 transition">Agregar al carrito</button>
        `;
        productList.appendChild(card);
      });
    }

    searchInput.addEventListener("input", displayProducts);
    filterCategory.addEventListener("change", displayProducts);
    filterPrice.addEventListener("change", displayProducts);

    displayProducts();