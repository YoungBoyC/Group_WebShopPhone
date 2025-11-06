const backToTopBtn = document.getElementById('backtotopbtn');
if (backToTopBtn) {
    
    // 1. Logic hiển thị/ẩn nút khi cuộn
    window.addEventListener('scroll', () => {
        // Hiển thị nút khi người dùng cuộn xuống hơn 300px (tùy chọn)
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'flex'; // Dùng 'flex' để căn giữa nội dung
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    // 2. Logic cuộn lên đầu khi nhấn nút
    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Ngăn chặn nhảy lên đầu trang mặc định
        
        // Cuộn mượt mà lên đầu trang
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    });
}