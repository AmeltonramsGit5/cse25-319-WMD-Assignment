const products = [
    {
        name: "Black Hoodie",
        price: "P550",
        image: "images/hoodie1.jpg"
    },
    {
        name: "Graphic Tee",
        price: "P300",
        image: "images/tee1.jpg"
    },
    {
        name: "Cargo Pants",
        price: "P700",
        image: "images/cargo1.jpg"
    }
];

function renderProducts(containerId) {
    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = products.map(product => `
        <div class="col-md-4">
            <div class="card shadow-sm">
                <img src="${product.image}" class="card-img-top">
                <div class="card-body text-center">
                    <h5>${product.name}</h5>
                    <p>${product.price}</p>
                </div>
            </div>
        </div>
    `).join("");
}

renderProducts("homeFeaturedGrid");
renderProducts("shopGrid");
