function displayProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const productGrid = document.getElementById("productGrid");

    productGrid.innerHTML = ''; // Xóa các sản phẩm cũ

    products.forEach(product => {
        if (product.tag === "Bình gốm") { // Chỉ hiển thị sản phẩm có tag là "Bình gốm"
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Giá: ${product.price}đ</p>
                <p>${product.description}</p>
                <button class = "buy-btn"onclick="addToCart(${product.id})">Thêm vào giỏ hàng</button>
            `;

            productGrid.appendChild(productCard);
        }
    });
}

// Khi trang được tải lại, gọi hàm displayProducts để hiển thị các sản phẩm
window.onload = displayProducts;
