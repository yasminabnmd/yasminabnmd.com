window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 480) {
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

<script>
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.image-container .inner h3');

  function showTextOnScroll() {
    images.forEach(image => {
      const rect = image.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        image.style.opacity = '1';
      } else {
        image.style.opacity = '0';
      }
    });
  }

  function showTextOnTouch() {
    images.forEach(image => {
      image.style.opacity = '1';
    });
  }

  window.addEventListener('scroll', showTextOnScroll);
  window.addEventListener('touchmove', showTextOnTouch);

  showTextOnScroll(); // Initial check when the page loads
});
</script>










