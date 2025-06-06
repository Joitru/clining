document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slider-slide');
    const dotsContainer = document.querySelector('.slider-dots');
    
    let currentSlide = 0;
    let slideInterval;

    // Инициализация слайдера
    function initSlider() {
        // Показываем первый слайд
        slides[currentSlide].classList.add('active');
        
        // Создаем точки навигации
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                goToSlide(index);
                resetTimer();
            });
            dotsContainer.appendChild(dot);
        });
    }

    // Переход к указанному слайду
    function goToSlide(index) {
        // Выходим, если слайд уже активен
        if (index === currentSlide) return;
        
        // Скрываем текущий слайд
        slides[currentSlide].classList.remove('active');
        
        // Обновляем индекс текущего слайда
        currentSlide = index;
        
        // Показываем новый слайд
        slides[currentSlide].classList.add('active');
        
        // Обновляем точки навигации
        updateDots();
    }

    // Обновление активной точки
    function updateDots() {
        const dots = document.querySelectorAll('.slider-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    // Автоматическое переключение слайдов
    function startAutoSlide() {
        slideInterval = setInterval(() => {
            const nextSlide = (currentSlide + 1) % slides.length;
            goToSlide(nextSlide);
        }, 5000);
    }

    // Сброс таймера автопереключения
    function resetTimer() {
        clearInterval(slideInterval);
        startAutoSlide();
    }

    // Инициализация слайдера
    initSlider();
    startAutoSlide();

    // Пауза при наведении мыши
    const slider = document.querySelector('.slider-container');
    slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slider.addEventListener('mouseleave', startAutoSlide);
});