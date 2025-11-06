document.addEventListener('DOMContentLoaded', (event) => {
    
    // 1. Lấy phần tử video và liên kết (Định nghĩa ở đầu scope)
    const videoElement = document.getElementById('myVideo');
    const discoverLink = document.getElementById('discoverVideoLink');

    // Nếu không tìm thấy video, dừng script
    if (!videoElement) return;

    // 2. Định nghĩa các tùy chọn cho Intersection Observer (ĐÃ BỔ SUNG)
    const options = {
        root: null, // Theo dõi viewport
        rootMargin: '0px',
        threshold: 0.7 // Tự động phát khi 70% video hiển thị
    };

    // 3. Xử lý sự kiện Jump Link (Nếu liên kết tồn tại)
    if (discoverLink) {
        discoverLink.addEventListener('click', function(e) {
            // e.preventDefault(); // Bạn có thể bỏ qua dòng này nếu muốn Jump Link hoạt động bình thường
            
            // Đặt một độ trễ nhỏ để đảm bảo trình duyệt đã cuộn xong
            setTimeout(() => {
                // Sau khi cuộn, BẮT BUỘC video phát
                videoElement.play().catch(error => {
                    console.error("Lỗi khi phát video sau khi nhấn link:", error);
                });
            }, 100); 
        });
    }


    // 4. Tạo Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Video đang nằm trong viewport -> PLAY (chỉ hoạt động khi có thuộc tính muted)
                videoElement.play().catch(error => {
                    console.error("Lỗi khi cố gắng phát video:", error);
                });
            } else {
                // Video ra khỏi viewport -> PAUSE
                // QUAN TRỌNG: Không tạm dừng nếu video đã bị buộc phát bằng Jump Link và người dùng đang xem
                // Nếu video có thuộc tính controls, người dùng có thể điều khiển thủ công.
                if (videoElement.hasAttribute('controls') || videoElement.autoplay) {
                    videoElement.pause(); 
                }
            }
        });
    }, options); // options đã được định nghĩa

    // 5. Bắt đầu theo dõi
    observer.observe(videoElement);
});