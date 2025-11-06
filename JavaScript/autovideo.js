// Khai báo biến player ở phạm vi toàn cục hoặc ngoài hàm DOMContentLoaded
let youtubePlayer;
const VIDEO_ID = 'myVideo'; // ID của iframe

// Hàm này được YouTube API gọi tự động khi thư viện đã sẵn sàng
function onYouTubeIframeAPIReady() {
    const iframeElement = document.getElementById(VIDEO_ID);
    if (!iframeElement) return;

    // Tạo đối tượng Player và liên kết nó với iframe có ID "myVideo"
    youtubePlayer = new YT.Player(VIDEO_ID, {
        events: {
            // Khi player đã tải xong (Ready), ta bắt đầu theo dõi Intersection Observer
            'onReady': onPlayerReady
        }
    });
}

// Gán hàm khởi tạo toàn cục (BẮT BUỘC)
window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;


function onPlayerReady(event) {
    const player = event.target; // Chính là youtubePlayer
    const iframeElement = document.getElementById(VIDEO_ID);
    
    // Tùy chọn cho Intersection Observer: Phát khi 70% iframe hiển thị
    const options = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.7 
    };

    // Tạo Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // ĐANG XUẤT HIỆN TRONG VIEWPORT -> PHÁT VIDEO
                player.playVideo();
                // Bổ sung: Đảm bảo video đang tắt tiếng (vì YouTube API đôi khi yêu cầu gọi lại lệnh này)
                if (player.isMuted() !== true) {
                    player.mute();
                }

            } else {
                // ĐÃ CUỘN RA KHỎI VIEWPORT -> TẠM DỪNG VIDEO
                player.pauseVideo();
            }
        });
    }, options);

    // Bắt đầu theo dõi iframe
    observer.observe(iframeElement);
    
    
    // Xử lý sự kiện Jump Link (Nếu có)
    const discoverLink = document.querySelector('.btn-discover-video');
    if (discoverLink) {
        discoverLink.addEventListener('click', function(e) {
            // ... (Xử lý cuộn nếu cần) ...
            
            // Buộc phát video khi người dùng nhấn nút "Khám phá"
            setTimeout(() => {
                player.playVideo();
                player.unMute(); // Có thể mở tiếng khi người dùng chủ động tương tác
            }, 100); 
        });
    }
}