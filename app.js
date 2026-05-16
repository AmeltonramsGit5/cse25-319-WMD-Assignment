const products = {
    men: {
        hoodies: [
            {
                name: "Black Hoodie",
                price: "P550",
                badge: "Bestseller",
                image: "images/hoodie1.jpg"
            },
            {
                name: "Grey Hoodie",
                price: "P600",
                badge: "",
                image: "images/hoodie2.jpg"
            },
            {
                name: "Oversized Hoodie",
                price: "P650",
                badge: "New",
                image: "images/hoodie3.jpg"
            }
        ],

        cargo: [
            {
                name: "Black Cargo",
                price: "P700",
                badge: "New",
                image: "images/cargo1.jpg"
            },
            {
                name: "Khaki Cargo",
                price: "P750",
                badge: "",
                image: "images/cargo2.jpg"
            },
            {
                name: "Baggy Cargo",
                price: "P800",
                badge: "",
                image: "images/cargo3.jpg"
            }
        ],

        tees: [
            {
                name: "Graphic Tee",
                price: "P300",
                badge: "Hot",
                image: "images/tee1.jpg"
            },
            {
                name: "Vintage Tee",
                price: "P350",
                badge: "",
                image: "images/tee2.jpg"
            },
            {
                name: "Street Tee",
                price: "P400",
                badge: "",
                image: "images/tee3.jpg"
            }
        ]
    }
};

function createProductCard(product) {
    return `
        <div class="product-card">

            <div style="position:relative;">
                ${product.badge ? `<span class="badge-custom">${product.badge}</span>` : ""}
                <img src="${product.image}" class="product-img" alt="${product.name}">
            </div>

            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">${product.price}</div>
                <button class="add-btn">+</button>
            </div>

        </div>
    `;
}

function renderLatestDrops() {
    const homeGrid = document.getElementById("homeFeaturedGrid");

    if(homeGrid){
        const latest = [
            products.men.hoodies[0],
            products.men.cargo[0],
            products.men.tees[0]
        ];

        homeGrid.classList.add("products-grid");
        homeGrid.innerHTML = latest.map(createProductCard).join("");
    }
}

function renderShop(category="hoodies") {
    const shopGrid = document.getElementById("shopGrid");

    if(shopGrid){
        shopGrid.classList.add("products-grid");
        shopGrid.innerHTML =
            products.men[category].map(createProductCard).join("");
    }
}

renderLatestDrops();
renderShop();
