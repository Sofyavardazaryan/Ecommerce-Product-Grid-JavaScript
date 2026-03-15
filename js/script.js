fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("products");
    container.innerHTML = "";

    for (let i = 0; i < data.products.length; i++) {
      const product = data.products[i];

      let imgSrc;
      if (product.images && product.images.length > 0) {
        imgSrc = product.images[0];
      } else {
        imgSrc = "https://dummyimage.com/250x200/cccccc/ffffff&text=No+Photo";
      }

      container.innerHTML += `
        <div class="card">
          <img src="${imgSrc}" alt="${product.title}">
          <div class="card-content">
            <h2 class="card-title">${product.title}</h2>
            <p class="card-price">$${product.price}</p>
            <p class="card-category">Category: ${product.category}</p>
          </div>
        </div>
      `;
    }
  });
