// PRODUCTS
const menProducts = [
  { id: 1, name: "Oversized Hoodie", price: 549, category: "tops" },
  { id: 2, name: "Cyberpunk Graphic Tee", price: 299, category: "tops" },
  { id: 3, name: "Cargo Pants", price: 599, category: "bottoms" }
];

const womenProducts = [
  { id: 101, name: "Cropped Hoodie", price: 479, category: "tops" },
  { id: 102, name: "Y2K Graphic Tee", price: 289, category: "tops" }
];

// LOAD CART FROM STORAGE
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartCount() {
  const count = cart.reduce((sum, i) => sum + i.quantity, 0);
  const badge = document.getElementById("cartCountBadge");
  if (badge) badge.innerText = count;
}

function addToCart(product) {
  const existing = cart.find(i => i.id === product.id);
  if (existing) existing.quantity++;
  else cart.push({ ...product, quantity: 1 });

  saveCart();
  updateCartCount();
  alert(product.name + " added");
}

// SHOP PAGE
function renderShop() {
  const container = document.getElementById("shopProductsContainer");
  if (!container) return;

  const products = [...menProducts, ...womenProducts];

  container.innerHTML = products.map(p => `
    <div class="product-card">
      <div class="product-info">
        <h4>${p.name}</h4>
        <p>P${p.price}</p>
        <button onclick='addToCart(${JSON.stringify(p)})'>
          Add to Cart
        </button>
      </div>
    </div>
  `).join("");
}

// HOME PAGE
function renderHome() {
  const grid = document.getElementById("homeFeaturedGrid");
  if (!grid) return;

  const featured = menProducts.slice(0, 2);

  grid.innerHTML = featured.map(p => `
    <div class="product-card">
      <div class="product-info">
        <h4>${p.name}</h4>
        <p>P${p.price}</p>
        <button onclick='addToCart(${JSON.stringify(p)})'>
          Add to Cart
        </button>
      </div>
    </div>
  `).join("");
}

// INIT
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  renderShop();
  renderHome();
});
