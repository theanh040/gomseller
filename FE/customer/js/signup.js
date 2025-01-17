 // Lấy các input cần kiểm tra
 const nameInput = document.getElementById('text');
 const dateInput = document.getElementById('date');
 const numberInput = document.getElementById('number');
 const emailInput = document.getElementById('email');
 const userInput = document.getElementById('user');
 const passwordInput = document.getElementById('password');

 // Lấy nút Đăng ký
 const btn = document.querySelector('.btn');

 // Hàm kiểm tra lỗi
 function validateInput() {
     // Kiểm tra từng input
     if (nameInput.value === '') {
         showError('nameError', 'Vui lòng nhập họ tên');
         return false;
     }

     if (dateInput.value === '') {
         showError('dateError', 'Vui lòng nhập ngày tháng năm sinh');
         return false;
     }

     if (numberInput.value === '') {
         showError('numberError', 'Vui lòng nhập số điện thoại');
         return false;
     }

     if (emailInput.value === '') {
         showError('emailError', 'Vui lòng nhập email');
         return false;
     }

     if (userInput.value === '') {
         showError('userError', 'Vui lòng nhập tên đăng nhập');
         return false;
     }

     if (passwordInput.value === '') {
         showError('passwordError', 'Vui lòng nhập mật khẩu');
         return false;
     }

     return true;
 }

 // Hàm hiển thị lỗi
 function showError(errorId, mess) {
     document.getElementById(errorId).innerText = mess;
 }

 // Hàm xử lý sự kiện click Đăng ký
 function submitForm() {
     // Gọi hàm kiểm tra
     if (!validateInput()) {
         return;
     }
     // Submit form nếu hợp lệ
     document.getElementById('signup-form').submit();
 }