
// Lấy dữ liệu sản phẩm từ localStorage
const products = JSON.parse(localStorage.getItem('products')) || [];

// Tìm phần tử để chèn sản phẩm vào
const productsGrid = document.getElementById("productsGrid");

// Duyệt qua các sản phẩm và thêm chúng vào trang
products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Giá: ${product.price}đ</p>
        <p>${product.description}</p>
        <button class="buy-btn">Thêm vào giỏ</button>
    `;

    productsGrid.appendChild(productCard);
});



// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(product) {
    // Lấy danh sách sản phẩm từ localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Kiểm tra nếu sản phẩm đã tồn tại trong giỏ, tăng số lượng
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    // Lưu lại vào localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert("Sản phẩm đã được thêm vào giỏ!");
}

// Ví dụ gọi hàm khi bấm nút "Thêm vào giỏ"
document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', () => {
        const product = {
            id: button.dataset.id,
            name: button.dataset.name,
            price: parseFloat(button.dataset.price),
        };
        addToCart(product);
    });
});
