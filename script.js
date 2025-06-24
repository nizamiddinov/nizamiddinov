document.addEventListener('DOMContentLoaded', function() {
    // Telegram ikonkasi uchun animatsiya
    const telegramIcon = document.querySelector('.telegram-icon');
    const groupIcon = document.querySelector('.group-icon');
    
    // Telegram havolasiga bosganda
    document.querySelector('.telegram-link').addEventListener('click', function(e) {
        // Animatsiya
        telegramIcon.style.animation = 'bounce 0.5s ease';
        setTimeout(() => {
            telegramIcon.style.animation = '';
        }, 500);
        
        // Agar brauzer yangi oynada ochishga ruxsat bermasa
        e.preventDefault();
        setTimeout(() => {
            window.open(this.href, '_blank');
        }, 300);
    });
    
    // Guruh havolasiga bosganda
    document.querySelector('.group-link').addEventListener('click', function(e) {
        // Animatsiya
        groupIcon.style.animation = 'bounce 0.5s ease';
        setTimeout(() => {
            groupIcon.style.animation = '';
        }, 500);
        
        // Agar brauzer yangi oynada ochishga ruxsat bermasa
        e.preventDefault();
        setTimeout(() => {
            window.open(this.href, '_blank');
        }, 300);
    });
});
