function initMap() {
    const defaultLocation = { lat: 21.0285, lng: 105.8542 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: defaultLocation,  // Trung tâm bản đồ
        disableDefaultUI: true,  // Tắt các phần tử mặc định như điều khiển
        gestureHandling: 'cooperative',  // Cho phép người dùng tương tác dễ dàng
    });

    // Thêm marker vào bản đồ
    const marker = new google.maps.Marker({
        position: defaultLocation,
        map: map,
        title: "Hà Nội, Việt Nam",
    });
}
