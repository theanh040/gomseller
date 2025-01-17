let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 4500);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

document.addEventListener("DOMContentLoaded", () => {
    const productGrid = document.getElementById("productGrid");

    // Lấy danh sách sản phẩm từ localStorage
    const products = JSON.parse(localStorage.getItem("products")) || [];


    const randomProducts = products.sort(() => 0.5 - Math.random()).slice(0, 6);

    // Tạo HTML cho từng sản phẩm và thêm vào productGrid
    randomProducts.forEach((product) => {
        const productHTML = `
            <div class="product-item">
                <p class="sale">Sale</p>
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${product.price.toLocaleString()} VND</p>
                <button class="buy-btn">Thêm vào giỏ</button>
            </div>
        `;
        productGrid.innerHTML += productHTML;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const productGrid = document.getElementById("productGrids");

    // Lấy danh sách sản phẩm từ localStorage
    const products = JSON.parse(localStorage.getItem("products")) || [];


    const randomProducts = products.sort(() => 0.5 - Math.random()).slice(0, 10);

    // Tạo HTML cho từng sản phẩm và thêm vào productGrids
    randomProducts.forEach((product) => {
        const productHTML = `
            <div class="product-item">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${product.price.toLocaleString()} VND</p>
                <button class="buy-btn">Thêm vào giỏ</button>
            </div>
        `;
        productGrid.innerHTML += productHTML;
    });
});