// Top 10 best-selling products with grand opening special flag
const products = [
  { id: 1, name: "Aloe Vera Gel", price: 116.79, image: "aloe-vera-gel.jpg", 
    benefits: "Supports digestion, boosts immunity, promotes skin health, enhances nutrient absorption, helps detoxify the body", 
    consumption: "Take 30-60ml daily, preferably on empty stomach",
    bestSeller: true, grandOpeningSpecial: true },
  { id: 2, name: "Aloe Berry Nectar", price: 116.79, image: "aloe-berry-nectar.jpg", 
    benefits: "Antioxidant support, immune system booster, natural energy, supports urinary health, rich in vitamin C", 
    consumption: "30-60ml daily, can be mixed with water or juice",
    bestSeller: true, grandOpeningSpecial: true },
  { id: 3, name: "Bee Honey", price: 132.57, image: "bee-honey.jpg", 
    benefits: "Natural energy, soothes throat, antioxidant properties, supports digestion, promotes wound healing", 
    consumption: "1-2 teaspoons daily, can be added to drinks",
    bestSeller: true, grandOpeningSpecial: true },
  { id: 4, name: "Royal Jelly", price: 139.21, image: "royal-jelly.jpg", 
    benefits: "Energy booster, supports immune system, anti-aging, hormone balance, supports skin renewal", 
    consumption: "1 tablet daily, preferably in the morning",
    bestSeller: true, grandOpeningSpecial: true },
  { id: 5, name: "Bee Propolis", price: 139.21, image: "bee-propolis.jpg", 
    benefits: "Immune support, natural antibiotic, throat health, anti-inflammatory, promotes oral health", 
    consumption: "1 tablet daily or as needed",
    bestSeller: true, grandOpeningSpecial: true },
  { id: 6, name: "Arctic Sea", price: 130.10, image: "arctic-sea.jpg", 
    benefits: "Heart health, joint support, brain function, supports vision, reduces inflammation", 
    consumption: "2 softgels twice daily with meals",
    bestSeller: true, grandOpeningSpecial: true },
  { id: 7, name: "Fields of Greens", price: 86.10, image: "fields-of-greens.jpg", 
    benefits: "Detoxification, digestion, alkalizing, supports weight management, rich in chlorophyll", 
    consumption: "1 tablet 3 times daily with water",
    bestSeller: true, grandOpeningSpecial: true },
  { id: 8, name: "Aloe First", price: 93.40, image: "aloe-first.jpg", 
    benefits: "Skin hydration, cooling relief, wound soothing, relieves sunburn, pre-hair treatment spray", 
    consumption: "Spray directly on skin as needed",
    bestSeller: true, grandOpeningSpecial: true },
  { id: 9, name: "Aloe Propolis Creme", price: 92.08, image: "aloe-propolis-creme.jpg", 
    benefits: "Skin repair, moisturizing, protective barrier, soothes irritated skin, supports healing of minor cuts", 
    consumption: "Apply generously on dry or irritated areas",
    bestSeller: true, grandOpeningSpecial: true },
  { id: 10, name: "Forever Bright Toothgel", price: 31.62, image: "bright-toothgel.jpg", 
    benefits: "Fluoride-free, fresh breath, aloe-based care, gentle on gums, whitens teeth naturally", 
    consumption: "Brush teeth twice daily",
    bestSeller: true, grandOpeningSpecial: true },
  { id: 11, name: "Aloe Peaches", price: 116.79, image: "aloe-peaches.jpg", 
    benefits: "Digestive health, vitamin C source, natural detoxification, maintains healthy skin, supports kidney function", 
    consumption: "30-60ml daily, refrigerate after opening" },
  { id: 12, name: "Bee Pollen", price: 75.50, image: "bee-pollen.jpg", 
    benefits: "Natural multivitamin, energy enhancement, allergy relief, improves stamina, supports cardiovascular health", 
    consumption: "1 tablet 3 times daily with meals" },
  { id: 13, name: "Absorbent-C", price: 75.50, image: "absorbent-c.jpg", 
    benefits: "Immune support, collagen production, antioxidant, helps iron absorption, supports healthy skin", 
    consumption: "1-2 tablets daily with meals" },
  { id: 14, name: "Calcium Plus", price: 132.15, image: "calcium-plus.jpg", 
    benefits: "Bone support, muscle health, calcium + vitamin D, supports nerve function, helps prevent osteoporosis", 
    consumption: "2 tablets daily with meals" },
  { id: 15, name: "Aloe Liquid Soap", price: 54.72, image: "aloe-liquid-soap.jpg", 
    benefits: "Gentle cleansing, moisturizes skin, aloe-based formula, suitable for sensitive skin, pH-balanced", 
    consumption: "Use daily for face and body cleansing" },
  { id: 16, name: "Aloe Jojoba Shampoo", price: 91.66, image: "aloe-jojoba-shampoo.jpg", 
    benefits: "Hair nourishment, scalp care, sulfate-free, promotes hair strength, natural shine", 
    consumption: "Massage into wet hair, rinse thoroughly" },
  { id: 17, name: "Aloe Jojoba Conditioner", price: 91.66, image: "aloe-jojoba-conditioner.jpg", 
    benefits: "Moisturizing, smooth finish, aloe + jojoba, strengthens hair strands, prevents breakage", 
    consumption: "Apply after shampoo, leave 1-2 minutes, rinse" },
  { id: 18, name: "Aloe Sunscreen", price: 84.91, image: "aloe-sunscreen.jpg", 
    benefits: "UV protection, aloe-based, water-resistant, suitable for sensitive skin, prevents sunburn", 
    consumption: "Apply 15 minutes before sun exposure" },
  { id: 19, name: "Aloe MPD 2X Ultra", price: 114.47, image: "aloe-mp-lotion.jpg", 
    benefits: "Multi-purpose cleaner, concentrated, eco-friendly, gentle on skin, biodegradable formula", 
    consumption: "Dilute as needed for laundry, dishes or surfaces" },
  { id: 20, name: "Avocado Face & Body Soap", price: 23.40, image: "avocado-soap.jpg", 
    benefits: "Softens skin, gentle cleansing, avocado oil-rich, suitable for all skin types, non-drying", 
    consumption: "Use daily for face and body" },
  { id: 21, name: "Aloe Lips", price: 17.92, image: "aloe-lips.jpg", 
    benefits: "Lip protection, moisturizes, healing balm, soothes cracked lips, non-greasy finish", 
    consumption: "Apply on lips as needed throughout the day" },
  { id: 22, name: "Forever Deodorant Stick", price: 34.91, image: "forever-deodorant.jpg", 
    benefits: "Natural fragrance, aloe soothing, easy glide, long-lasting protection, non-staining", 
    consumption: "Use after shower daily" },
  { id: 23, name: "Teh Tarik Halia", price: 25.90, image: "teh-tarik.jpg", 
    benefits: "Warming effect, digestion aid, ginger-infused, improves circulation, relieves bloating", 
    consumption: "Mix sachet with hot water and stir well" },
  { id: 24, name: "Choco Malt Drink", price: 27.90, image: "choco-malt.jpg", 
    benefits: "Rich in B vitamins, iron for red blood cell production, supports metabolism, promotes growth, aids recovery after fatigue", 
    consumption: "Mix 2-3 tablespoons in 150–200ml hot water or milk" }
];

// Enhanced product suggestions mapping
const productSuggestions = {
  "digestion": { id: 1, name: "Aloe Vera Gel", recommendation: "30-60ml daily on empty stomach for digestive support" },
  "bloating": { id: 1, name: "Aloe Vera Gel", recommendation: "30-60ml daily to reduce bloating" },
  "constipation": { id: 1, name: "Aloe Vera Gel", recommendation: "30-60ml daily to support regular bowel movements" },
  "diarrhea": { id: 5, name: "Bee Propolis", recommendation: "1 tablet daily to support gut health during diarrhea" },
  "acid reflux": { id: 1, name: "Aloe Vera Gel", recommendation: "30ml before meals to soothe digestive tract" },
  "heartburn": { id: 1, name: "Aloe Vera Gel", recommendation: "30ml before meals to calm heartburn" },
  "indigestion": { id: 7, name: "Fields of Greens", recommendation: "1 tablet before meals for better digestion" },
  "nausea": { id: 4, name: "Royal Jelly", recommendation: "1 tablet to help settle stomach" },
  "ibs": { id: 1, name: "Aloe Vera Gel", recommendation: "30ml twice daily to soothe IBS symptoms" },
  "gas": { id: 7, name: "Fields of Greens", recommendation: "1 tablet three times daily to reduce gas" },
  "stomachache": { id: 1, name: "Aloe Vera Gel", recommendation: "30ml to soothe stomach discomfort" },
  "upset stomach": { id: 1, name: "Aloe Vera Gel", recommendation: "30ml as needed for stomach relief" },
  "gastritis": { id: 1, name: "Aloe Vera Gel", recommendation: "30ml before meals to help with gastritis" },
  "ulcer": { id: 1, name: "Aloe Vera Gel", recommendation: "30ml before meals to support ulcer healing" },
  "crohn's": { id: 1, name: "Aloe Vera Gel", recommendation: "30ml twice daily for digestive support" },
  "cold": { id: 5, name: "Bee Propolis", recommendation: "1 tablet daily at first sign of cold" },
  "flu": { id: 5, name: "Bee Propolis", recommendation: "2 tablets daily during flu" },
  "fever": { id: 5, name: "Bee Propolis", recommendation: "1 tablet every 4 hours during fever" },
  "cough": { id: 3, name: "Bee Honey", recommendation: "1 teaspoon as needed to soothe throat" },
  "sore throat": { id: 3, name: "Bee Honey", recommendation: "1 teaspoon every 2 hours to relieve throat" },
  "allergies": { id: 6, name: "Bee Pollen", recommendation: "1 tablet daily to help with seasonal allergies" },
  "sinus": { id: 5, name: "Bee Propolis", recommendation: "1 tablet twice daily for sinus relief" },
  "infection": { id: 5, name: "Bee Propolis", recommendation: "1 tablet three times daily to fight infection" },
  "runny nose": { id: 5, name: "Bee Propolis", recommendation: "1 tablet twice daily for respiratory support" },
  "congestion": { id: 5, name: "Bee Propolis", recommendation: "1 tablet twice daily to clear congestion" },
  "sneezing": { id: 6, name: "Bee Pollen", recommendation: "1 tablet daily for allergy-related sneezing" },
  "itchy eyes": { id: 6, name: "Bee Pollen", recommendation: "1 tablet daily for allergy symptoms" },
  "weak immunity": { id: 5, name: "Bee Propolis", recommendation: "1 tablet daily for immune support" },
  "frequent illness": { id: 5, name: "Bee Propolis", recommendation: "1 tablet daily to strengthen immunity" },
  "fatigue": { id: 4, name: "Royal Jelly", recommendation: "1 tablet each morning for energy" },
  "low energy": { id: 4, name: "Royal Jelly", recommendation: "1 tablet morning and afternoon" },
  "tiredness": { id: 4, name: "Royal Jelly", recommendation: "1 tablet upon waking" },
  "weakness": { id: 4, name: "Royal Jelly", recommendation: "1 tablet twice daily for vitality" },
  "lethargy": { id: 4, name: "Royal Jelly", recommendation: "1 tablet with breakfast" },
  "exhaustion": { id: 4, name: "Royal Jelly", recommendation: "1 tablet morning and evening" },
  "burnout": { id: 4, name: "Royal Jelly", recommendation: "1 tablet twice daily for energy support" },
  "sluggish": { id: 4, name: "Royal Jelly", recommendation: "1 tablet with breakfast" },
  "drowsy": { id: 4, name: "Royal Jelly", recommendation: "1 tablet in the morning" },
  "joint pain": { id: 6, name: "Arctic Sea", recommendation: "2 softgels twice daily for joint support" },
  "arthritis": { id: 6, name: "Arctic Sea", recommendation: "2 softgels twice daily for inflammation" },
  "back pain": { id: 6, name: "Arctic Sea", recommendation: "2 softgels twice daily for pain relief" },
  "muscle pain": { id: 6, name: "Arctic Sea", recommendation: "2 softgels twice daily for muscle recovery" },
  "headache": { id: 6, name: "Arctic Sea", recommendation: "2 softgels at onset of headache" },
  "migraine": { id: 6, name: "Arctic Sea", recommendation: "2 softgels at first sign of migraine" },
  "neck pain": { id: 6, name: "Arctic Sea", recommendation: "2 softgels twice daily" },
  "knee pain": { id: 6, name: "Arctic Sea", recommendation: "2 softgels twice daily" },
  "shoulder pain": { id: 6, name: "Arctic Sea", recommendation: "2 softgels twice daily" },
  "inflammation": { id: 6, name: "Arctic Sea", recommendation: "2 softgels twice daily" },
  "acne": { id: 1, name: "Aloe Vera Gel", recommendation: "30ml daily and apply topically" },
  "eczema": { id: 8, name: "Aloe First", recommendation: "Spray directly on affected areas" },
  "psoriasis": { id: 8, name: "Aloe First", recommendation: "Apply liberally to affected areas" },
  "dry skin": { id: 9, name: "Aloe Propolis Creme", recommendation: "Apply twice daily" },
  "rash": { id: 8, name: "Aloe First", recommendation: "Spray on rash for cooling relief" },
  "itchy skin": { id: 8, name: "Aloe First", recommendation: "Spray on affected areas" },
  "sunburn": { id: 8, name: "Aloe First", recommendation: "Spray generously on sunburned skin" },
  "wrinkles": { id: 9, name: "Aloe Propolis Creme", recommendation: "Apply daily to face and neck" },
  "age spots": { id: 9, name: "Aloe Propolis Creme", recommendation: "Apply twice daily" }
};

let cart = [];

// Apply Grand Opening discount to selected products
function applyGrandOpeningDiscount(products) {
  const discountRate = 0.05; // 5% discount
  return products.map(product => {
    if (product.grandOpeningSpecial) {
      return {
        ...product,
        originalPrice: product.price,
        price: product.price * (1 - discountRate),
        festivalTag: "Grand Opening Special"
      };
    }
    return product;
  });
}

// Render products with Grand Opening decorations
function renderProducts() {
  const productList = document.getElementById('product-list');
  if (!productList) return;
  
  const discountedProducts = applyGrandOpeningDiscount(products);
  
  // Sort products to show discounted ones first
  discountedProducts.sort((a, b) => {
    if (a.grandOpeningSpecial && !b.grandOpeningSpecial) return -1;
    if (!a.grandOpeningSpecial && b.grandOpeningSpecial) return 1;
    return 0;
  });
  
  productList.innerHTML = discountedProducts.map(product => {
    const isFeatured = product.grandOpeningSpecial;
    const hasDiscount = product.originalPrice !== undefined;
    
    return `
      <div class="product ${isFeatured ? 'featured-product' : ''}" id="product-${product.id}">
        <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='https://via.placeholder.com/200x200?text=Product+Image'">
        <h3>${product.name}</h3>
        ${hasDiscount ? `
          <div class="discount-price">
            <span class="original-price">RM ${product.originalPrice.toFixed(2)}</span>
            <span class="new-price">RM ${product.price.toFixed(2)} <span class="fire-icon">🔥</span></span>
            <div style="color: var(--accent-color); font-weight: bold; margin-top: 5px;">${product.festivalTag}</div>
          </div>
        ` : `<div class="price">RM ${product.price.toFixed(2)}</div>`}
        <div class="benefits"><strong>Benefits:</strong> ${product.benefits}</div>
        <div class="consumption"><strong>How to use:</strong> ${product.consumption}</div>
        <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        <a href="https://wa.me/601111033154?text=I%20want%20to%20buy%20${encodeURIComponent(product.name)}" class="whatsapp-btn">Order via WhatsApp</a>
      </div>
    `;
  }).join('');
  
  highlightFeaturedProducts();
}

function highlightFeaturedProducts() {
  const featuredProducts = document.querySelectorAll('.featured-product');
  featuredProducts.forEach(product => {
    const badge = document.createElement('div');
    badge.className = 'featured-badge';
    badge.textContent = 'Special Offer';
    product.appendChild(badge);
  });
}

function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  
  if (tabId === 'rewards') {
    createConfetti();
  }
}

function toggleCart() {
  const modal = document.getElementById('cart-modal');
  modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
  updateCartDisplay();
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const discountedPrice = getDiscountedPrice(product);
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: discountedPrice,
      originalPrice: product.price,
      quantity: 1
    });
  }
  
  updateCartCount();
  showAddedToCartMessage(product.name);
}

function getDiscountedPrice(product) {
  if (product.grandOpeningSpecial) {
    return product.price * 0.95; // 5% discount
  }
  return product.price;
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartDisplay();
  updateCartCount();
}

function updateQuantity(productId, newQuantity) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    if (newQuantity < 1) {
      removeFromCart(productId);
    } else {
      item.quantity = newQuantity;
      updateCartDisplay();
      updateCartCount();
    }
  }
}

function updateCartCount() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  document.getElementById('cart-count').textContent = count;
}

function updateCartDisplay() {
  const cartItemsElement = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');
  
  if (cart.length === 0) {
    cartItemsElement.innerHTML = '<p>Your cart is empty</p>';
    cartTotalElement.textContent = '0.00';
    return;
  }
  
  let itemsHTML = '';
  let subtotal = 0;
  
  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    
    itemsHTML += `
      <div class="cart-item">
        <div class="cart-item-details">
          <div class="cart-item-info">${item.name}</div>
          <div class="cart-item-actions">
            <div class="quantity-controls">
              <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
              <input type="number" class="quantity-input" value="${item.quantity}" min="1" 
                onchange="updateQuantity(${item.id}, parseInt(this.value))">
              <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
            </div>
            <span class="remove-item" onclick="removeFromCart(${item.id})">✕</span>
          </div>
        </div>
        <div class="cart-item-price">RM ${itemTotal.toFixed(2)}</div>
      </div>
    `;
  });
  
  // Calculate postage with new logic
  let postage = 0;
  let postageMessage = '';
  
  if (subtotal >= 250) {
    // Free delivery for orders RM250 and above
    postage = 0;
    postageMessage = `<div class="cart-postage free-delivery">FREE DELIVERY! (Orders RM250 and above)</div>`;
  } else if (cart.length === 1) {
    // Single item - RM 14 postage
    postage = 14;
    postageMessage = `<div class="cart-postage">Postage: RM ${postage.toFixed(2)}</div>`;
  } else if (cart.length > 1) {
    // Multiple items - 20% reduction per additional item
    const discountRate = 0.20;
    const basePostage = 14;
    const discountedPostage = basePostage * (1 - (discountRate * (cart.length - 1)));
    postage = Math.max(discountedPostage, 0); // Ensure postage doesn't go negative
    
    if (postage > 0) {
      postageMessage = `<div class="cart-postage">Discounted Postage: RM ${postage.toFixed(2)} (20% off per additional item)</div>`;
    } else {
      postageMessage = `<div class="cart-postage free-delivery">Bundle purchases qualify for FREE delivery!</div>`;
    }
  }
  
  const total = subtotal + postage;
  
  cartItemsElement.innerHTML = itemsHTML + postageMessage;
  cartTotalElement.textContent = total.toFixed(2);
}

function showAddedToCartMessage(productName) {
  const notification = document.createElement('div');
  notification.style.position = 'fixed';
  notification.style.bottom = '20px';
  notification.style.right = '20px';
  notification.style.backgroundColor = 'var(--primary-color)';
  notification.style.color = 'white';
  notification.style.padding = '15px';
  notification.style.borderRadius = '5px';
  notification.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
  notification.style.zIndex = '1000';
  notification.style.animation = 'fadeIn 0.3s';
  notification.textContent = `✓ ${productName} added to cart!`;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'fadeOut 0.3s';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

function checkout() {
  const name = document.getElementById('customer-name').value.trim();
  const phone = document.getElementById('customer-phone').value.trim();
  
  if (!name || !phone) {
    alert('Please enter your name and phone number');
    return;
  }
  
  if (cart.length === 0) {
    alert('Your cart is empty');
    return;
  }
  
  // Calculate postage same as in updateCartDisplay
  let postage = 0;
  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  if (subtotal >= 250) {
    postage = 0;
  } else if (cart.length === 1) {
    postage = 14;
  } else if (cart.length > 1) {
    const discountRate = 0.20;
    const basePostage = 14;
    const discountedPostage = basePostage * (1 - (discountRate * (cart.length - 1)));
    postage = Math.max(discountedPostage, 0);
  }
  
  let message = `Hi, I would like to place an order:\n\n`;
  message += `Name: ${name}\n`;
  message += `Phone: ${phone}\n\n`;
  message += `Order Details:\n`;
  
  cart.forEach(item => {
    const discountApplied = item.price < item.originalPrice;
    message += `- ${item.name} (Qty: ${item.quantity}) - RM ${(item.price * item.quantity).toFixed(2)}`;
    if (discountApplied) {
      message += ` (Grand Opening Discount Applied)`;
    }
    message += `\n`;
  });
  
  message += `\nSubtotal: RM ${subtotal.toFixed(2)}\n`;
  message += `Postage: RM ${postage.toFixed(2)}\n`;
  message += `Total: RM ${(subtotal + postage).toFixed(2)}\n\n`;
  message += `Please confirm my order. Thank you!`;
  
  const encodedMessage = encodeURIComponent(message);
  window.location.href = `https://wa.me/601111033154?text=${encodedMessage}`;
}

function suggestProduct() {
  const input = document.getElementById("symptom-input").value.toLowerCase();
  const result = document.getElementById("suggestion-result");
  let matchedProducts = [];

  for (const [symptom, productInfo] of Object.entries(productSuggestions)) {
    if (input.includes(symptom)) {
      const existing = matchedProducts.find(p => p.id === productInfo.id);
      if (!existing) {
        matchedProducts.push(productInfo);
      }
    }
  }

  if (matchedProducts.length === 0) {
    result.innerHTML = `<p>We recommend consulting with our health advisor for personalized recommendations. 
    <a href="https://wa.me/601111033154" style="color:var(--primary-color);font-weight:bold;">Chat with us on WhatsApp</a></p>`;
  } else {
    result.innerHTML = `<h3 style="color:var(--primary-color);">Recommended Products:</h3>` + 
      matchedProducts.map(p => `
        <div class="suggestion-product">
          <div>
            <strong>${p.name}</strong><br>
            <small>${p.recommendation}</small>
          </div>
          <button onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
      `).join("");
  }
}

function createConfetti() {
  const container = document.getElementById('rewards-animation');
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    confetti.style.animationDelay = Math.random() + 's';
    container.appendChild(confetti);
  }
}

function notifyMe() {
  alert("We'll notify you when our rewards program launches! Thank you for your interest.");
}

function closeFestivalModal() {
  localStorage.setItem('festivalPopupClosed', 'true');
  document.getElementById('festival-modal').style.display = 'none';
}

// Product search functionality
function setupProductSearch() {
  const searchInput = document.getElementById('product-search');
  if (!searchInput) return;
  
  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const productElements = document.querySelectorAll('.product');
    
    productElements.forEach(product => {
      const productName = product.querySelector('h3').textContent.toLowerCase();
      if (productName.includes(searchTerm)) {
        product.style.display = 'flex';
      } else {
        product.style.display = 'none';
      }
    });
  });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  // Set current date in footer
  const now = new Date();
  document.getElementById('current-date').textContent = now.toLocaleDateString('en-US', { 
    year: 'numeric', month: 'long', day: 'numeric' 
  });
  
  // Apply Grand Opening theme
  document.documentElement.className = 'grand-opening-theme';
  renderProducts();
  showTab('products');
  setupProductSearch();
  
  // Only show popup if not already closed
  if (localStorage.getItem('festivalPopupClosed') !== 'true') {
    document.getElementById('festival-modal').style.display = 'flex';
  }
  
  // Close modals when clicking outside
  window.onclick = function(event) {
    const modal = document.getElementById('cart-modal');
    if (event.target === modal) {
      modal.style.display = "none";
    }
    
    const festivalModal = document.getElementById('festival-modal');
    if (event.target === festivalModal) {
      closeFestivalModal();
    }
  }
});
