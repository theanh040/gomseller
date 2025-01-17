// Hiển thị nội dung tương ứng khi click vào menu chính
function showContent(sectionId) {
    // Ẩn tất cả các phần nội dung
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.style.display = 'none';
        content.classList.remove('active');
    });

    // Hiển thị phần nội dung được chọn
    const activeContent = document.getElementById(sectionId);
    if (activeContent) {
        activeContent.style.display = 'block';
        activeContent.classList.add('active');
    }

    // Xử lý active class cho sidebar menu
    const sidebarItems = document.querySelectorAll('.sidebar > ul > li');
    sidebarItems.forEach(item => item.classList.remove('active'));
    const activeItem = [...sidebarItems].find(item => item.textContent.includes(activeContent.querySelector('h2').textContent));
    if (activeItem) activeItem.classList.add('active');
}

// Hiển thị/Ẩn menu con
function toggleSubMenu(event, submenuId) {
    event.stopPropagation(); // Ngăn chặn sự kiện click lan ra ngoài
    const submenu = document.getElementById(submenuId);
    if (submenu) {
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    }
}

// Điều hướng đến trang cụ thể
// function navigateToPage(page) {
//     window.location.href = page;
// }
