const UI = {
  renderProducts() {
    const root = document.getElementById("productList");
    root.innerHTML = Store.products.map(p => `
      <div class="card">
        <h3>${p.name}</h3>
        <div class="price">₹${p.price}</div>
        <button onclick='UI.add(${JSON.stringify(p)})'>Add</button>
      </div>
    `).join("");
  },

  add(product) {
    Store.addToCart(product);
    this.updateCart();
  },

  updateCart() {
    document.getElementById("cartCount").innerText = Store.cart.length;
    document.getElementById("cartTotal").innerText = "₹" + Store.cartTotal();
    document.getElementById("cartBar").classList.toggle(
      "hidden",
      Store.cart.length === 0
    );
  },

  openCheckout() {
    Store.placeOrder();
    this.updateCart();
    alert("Order Placed");
  }
};
