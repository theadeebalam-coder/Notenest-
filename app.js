document.addEventListener("DOMContentLoaded", () => {
  UI.renderProducts();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
  }
});
