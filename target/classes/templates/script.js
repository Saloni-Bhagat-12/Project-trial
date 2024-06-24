document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:8080/api/products')
        .then(response => response.json())
        .then(data => {
            const productsDiv = document.getElementById('products');
            data.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');
                productDiv.innerHTML = `
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p>Price: $${product.price}</p>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                    <button onclick="buyNow(${product.id})">Buy Now</button>
                `;
                productsDiv.appendChild(productDiv);
            });
        });
});

function addToCart(productId) {
    alert('Product ' + productId + ' added to cart!');
}

function buyNow(productId) {
    alert('Product ' + productId + ' bought!');
}
