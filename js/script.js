// js/script.js

// Load components on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  loadCDS();
  loadProducts();
});

function loadHeader() {
  fetch("sections/header.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("site-header").innerHTML = data;
    });
}

function loadCDS() {
  fetch("sections/cds.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("cds-section").innerHTML = data;
    });
}

function loadProducts() {
  fetch("data/products.json")
    .then((res) => res.json())
    .then((products) => {
      const container = document.getElementById("product-list");
      container.innerHTML = "";

      products.forEach((product) => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
          <img src="images/${product.image}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p class="price">RM ${product.price.toFixed(2)}</p>
          <a href="https://wa.me/601111033154?text=${encodeURIComponent(`Hi, I want to order ${product.name}`)}" target="_blank" class="whatsapp-btn">Order Now</a>
        `;
        container.appendChild(div);
      });
    });
}
