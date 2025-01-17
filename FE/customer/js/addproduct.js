document.getElementById("addProductForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Ngăn chặn reload trang

    // Lấy thông tin từ form
    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;
    const productDescription = document.getElementById("productDescription").value;
    const productImage = document.getElementById("productImage").files[0]; // Lấy file hình ảnh đã chọn
    const productTag = document.getElementById("productTag").value; // Lấy giá trị tag

    // Nếu người dùng chưa chọn hình ảnh thì không thêm sản phẩm
    if (!productImage) {
        alert("Vui lòng chọn hình ảnh");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        // Tạo đối tượng sản phẩm
        const newProduct = {
            name: productName,
            price: productPrice,
            description: productDescription,
            image: e.target.result, // Lưu ảnh dưới dạng base64
            tag: productTag // Lưu tag
        };

        // Lấy danh sách sản phẩm từ localStorage
        let products = JSON.parse(localStorage.getItem('products')) || [];
        
        // Phân loại sản phẩm theo tag
        if (productTag === "Ấm chén") {
            newProduct.page = "product"; // Lưu tag để phân loại
        } else if (productTag === "Bình gốm") {
            newProduct.page = "product-binhgom"; // Lưu tag để phân loại
        }

        // Lưu sản phẩm vào LocalStorage
        products.push(newProduct);
        localStorage.setItem('products', JSON.stringify(products));

        alert("Sản phẩm đã được thêm thành công!");
    };
    
    reader.readAsDataURL(productImage); // Đọc ảnh dưới dạng base64
});
