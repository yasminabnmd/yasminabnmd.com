window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 80) {
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


// Находим все элементы с классом "image"
const images = document.querySelectorAll('.image');

// Добавляем обработчик события для каждого изображения
images.forEach(image => {
  // Добавляем обработчик события "touchstart" для каждого изображения
  image.addEventListener('touchstart', function() {
    // Находим внутренний элемент с классом "inner" внутри текущего изображения
    const innerText = this.querySelector('.inner');
    // Добавляем класс "active", который отображает анимацию текста
    innerText.classList.add('active');
  });
});