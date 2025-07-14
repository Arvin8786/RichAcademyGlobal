// js/script.js

// Load components on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  loadSection("sections/header.html", "header-container");
  loadSection("sections/cds.html", "cds-container");
  loadSection("sections/footer.html", "footer-container");
  loadProducts();
});

function loadSection(file, containerId) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(containerId).innerHTML = data;
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

function toggleCart() {
  const panel = document.getElementById("cart-panel");
  panel.style.display = panel.style.display === "block" ? "none" : "block";
}

function closeModal() {
  document.getElementById("product-modal").style.display = "none";
}

function showTab(tabId) {
  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.classList.remove("active");
  });
  document.getElementById(tabId).classList.add("active");
}

function checkout() {
  const cartItems = document.getElementById("cart-items");
  if (!cartItems || cartItems.innerHTML.trim() === "") {
    alert("Your cart is empty!");
    return;
  }
  const message = encodeURIComponent("Hi, I’d like to place an order from Rich Academy Global website.");
  window.open(`https://wa.me/601111033154?text=${message}`, "_blank");
}
