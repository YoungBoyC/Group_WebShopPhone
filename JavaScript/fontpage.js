const backToTopBtn = document.getElementById('backtotopbtn');
if (backToTopBtn) {
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'flex'; 
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault(); 
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    });
}