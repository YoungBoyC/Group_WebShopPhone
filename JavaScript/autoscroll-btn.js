document.addEventListener('DOMContentLoaded', function() {
        // Lấy tất cả các wrapper chứa carousel (cả iPhone và Mac)
        const carouselWrappers = document.querySelectorAll('.product-carousel-wrapper');

        carouselWrappers.forEach(wrapper => {
            const productList = wrapper.querySelector('.product-list');
            const prevBtn = wrapper.querySelector('.prev-btn');
            const nextBtn = wrapper.querySelector('.next-btn');

            if (!productList || !prevBtn || !nextBtn) return; // Kiểm tra các phần tử tồn tại

            // --- Hàm cuộn ---
            function scrollProducts(direction) {
                // Lấy chiều rộng của một thẻ sản phẩm
                const cardWidth = productList.querySelector('.product-card-category').parentElement.offsetWidth;
                
                // Tính toán khoảng cách cuộn: cuộn một khối (ví dụ: 3 thẻ)
                let scrollAmount;

                if (window.innerWidth >= 1200) {
                    scrollAmount = cardWidth * 4; // Cuộn 4 thẻ
                } else if (window.innerWidth >= 992) {
                    scrollAmount = cardWidth * 3; // Cuộn 3 thẻ
                } else {
                    scrollAmount = cardWidth * 2; // Cuộn 2 thẻ (hoặc 1 trên mobile)
                }


                if (direction === 'next') {
                    productList.scrollLeft += scrollAmount;
                } else if (direction === 'prev') {
                    productList.scrollLeft -= scrollAmount;
                }
            }

            // --- Gán sự kiện cho nút ---
            nextBtn.addEventListener('click', function() {
                scrollProducts('next');
            });

            prevBtn.addEventListener('click', function() {
                scrollProducts('prev');
            });
            
            // Tùy chọn: Ẩn/hiện nút nếu đã cuộn hết
            // Để đơn giản, tôi giữ nút luôn hiện (hoặc bạn có thể sử dụng CSS media query để ẩn chúng trên mobile)

        });
    });