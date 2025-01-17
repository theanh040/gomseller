// Lấy sản phẩm từ localStorage và render ra bảng
function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartTable = document.querySelector('#cart-table tbody');
    const totalPriceElement = document.getElementById('total-price');

    cartTable.innerHTML = ''; // Xóa nội dung cũ
    let totalPrice = 0;

    cart.forEach((product, index) => {
        const row = `
            <tr>
                <td>${product.name}</td>
                <td>${product.price.toLocaleString()} VNĐ</td>
                <td>
                    <button onclick="updateQuantity(${index}, -1)">-</button>
                    ${product.quantity}
                    <button onclick="updateQuantity(${index}, 1)">+</button>
                </td>
                <td>${(product.price * product.quantity).toLocaleString()} VNĐ</td>
                <td><button onclick="removeProduct(${index})">Xóa</button></td>
            </tr>
        `;
        cartTable.innerHTML += row;
        totalPrice += product.price * product.quantity;
    });

    totalPriceElement.textContent = totalPrice.toLocaleString();
}

// Cập nhật số lượng sản phẩm
function updateQuantity(index, change) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1); // Xóa sản phẩm nếu số lượng <= 0
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Xóa sản phẩm khỏi giỏ
function removeProduct(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);

    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Hiển thị giỏ hàng khi trang được tải
document.addEventListener('DOMContentLoaded', renderCart);
