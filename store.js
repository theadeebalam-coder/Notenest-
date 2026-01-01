const Store = {
  cart: [],
  orders: JSON.parse(localStorage.getItem("orders") || "[]"),

  products: [
    { id: 1, name: "Notebook", price: 75 },
    { id: 2, name: "Pen", price: 20 }
  ],

  addToCart(product) {
    this.cart.push(product);
  },

  cartTotal() {
    return this.cart.reduce((s, p) => s + p.price, 0);
  },

  placeOrder() {
    const order = {
      id: Date.now(),
      items: this.cart,
      status: "Pending",
      createdAt: new Date().toISOString()
    };
    this.orders.push(order);
    localStorage.setItem("orders", JSON.stringify(this.orders));
    this.cart = [];
  },

  getOrders() {
    return this.orders;
  }
};
