const store = document.getElementById("store");

const showProducts = (products) => {
  products.forEach(({ title, description, price, thumbnail }) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${thumbnail}" alt="${title || 'Product'}">
      <h3>${title}</h3>
      <p>${description}</p>
      <p><strong>₹${price}</strong></p>
    `;
    store.appendChild(card);
  });
};

const fetchProducts = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const { products } = await res.json();
    showProducts(products);
  } catch (err) {
    store.innerHTML = "<p>Failed to load products.</p>";
    console.error("Fetch error:", err);
  }
};

fetchProducts();
