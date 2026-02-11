const productsContainer = document.getElementById("productsContainer");

const sampleProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    image: "https://via.placeholder.com/300"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 89.99,
    image: "https://via.placeholder.com/300"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 39.99,
    image: "https://via.placeholder.com/300"
  }
];

function displayProducts(products) {
  productsContainer.innerHTML = products.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button>View Details</button>
    </div>
  `).join("");
}

displayProducts(sampleProducts);
