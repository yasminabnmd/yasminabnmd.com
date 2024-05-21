window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 84) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});



let lastScrollTop = 0;

// При загрузке страницы
window.addEventListener("load", function() {
    // Показываем header
    document.getElementById("header").style.top = "0";
});

// При скролле
window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Скролл вниз
        document.getElementById("header").style.top = "-100px"; // Скрыть header
    } else {
        // Скролл вверх
        document.getElementById("header").style.top = "0"; // Показать header
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Для Mobile Safari
}, false);





<script>
    document.addEventListener('DOMContentLoaded', (event) => {
        const videoElement = document.getElementById('myVideo');

        videoElement.addEventListener('click', () => {
            if (videoElement.requestFullscreen) {
                videoElement.requestFullscreen();
            } else if (videoElement.mozRequestFullScreen) { // Firefox
                videoElement.mozRequestFullScreen();
            } else if (videoElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
                videoElement.webkitRequestFullscreen();
            } else if (videoElement.msRequestFullscreen) { // IE/Edge
                videoElement.msRequestFullscreen();
            }

            videoElement.play(); // Начинаем воспроизведение видео
        });
    });
</script>

