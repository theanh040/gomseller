// Hiển thị các sản phẩm từ localStorage
function displayProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const productGrid = document.getElementById("productGrid");

    productGrid.innerHTML = ''; // Xóa các sản phẩm cũ

    if (products.length === 0) {
        productGrid.innerHTML = "<p>Không có sản phẩm nào để hiển thị</p>";
    }

    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // Tạo thẻ HTML cho từng sản phẩm
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Giá: ${product.price}đ</p>
            <p>${product.description}</p>
            <button class="delete-btn" data-index="${index}">Xóa</button>
        `;

        productGrid.appendChild(productCard); // Thêm sản phẩm vào grid
    });

    // Lắng nghe sự kiện xóa sản phẩm
    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach(button => {
        button.addEventListener("click", function() {
            const productIndex = button.getAttribute("data-index");
            deleteProduct(productIndex);
        });
    });
}

// Hàm xóa sản phẩm khỏi localStorage
function deleteProduct(index) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    
    // Xóa sản phẩm tại chỉ mục tương ứng
    products.splice(index, 1);

    // Cập nhật lại localStorage
    localStorage.setItem('products', JSON.stringify(products));

    // Hiển thị lại danh sách sản phẩm sau khi xóa
    displayProducts();
}

// Khi trang được tải lại, gọi hàm displayProducts để hiển thị các sản phẩm
window.onload = function() {
    displayProducts();
};
