const cartItems = document.getElementById("cartItems");
const totalAmount = document.getElementById("totalAmount");

function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  let total = 0;

  cartItems.innerHTML = cart.map(item => {
    total += item.price * item.quantity;

    return `
      <div class="product-card">
        <h3>${item.name}</h3>
        <p>Price: $${item.price}</p>
        <p>Quantity: ${item.quantity}</p>
      </div>
    `;
  }).join("");

  totalAmount.innerText = `Total: $${total.toFixed(2)}`;
}

loadCart();
