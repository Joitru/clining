document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slider-slide');
    const dotsContainer = document.querySelector('.slider-dots');
    
    let currentSlide = 0;
    let slideInterval;


    function initSlider() {

        slides[currentSlide].classList.add('active');
        

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

    function goToSlide(index) {

        if (index === currentSlide) return;
        

        slides[currentSlide].classList.remove('active');
        

        currentSlide = index;
        

        slides[currentSlide].classList.add('active');
        

        updateDots();
    }


    function updateDots() {
        const dots = document.querySelectorAll('.slider-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }


    function startAutoSlide() {
        slideInterval = setInterval(() => {
            const nextSlide = (currentSlide + 1) % slides.length;
            goToSlide(nextSlide);
        }, 5000);
    }


    function resetTimer() {
        clearInterval(slideInterval);
        startAutoSlide();
    }


    initSlider();
    startAutoSlide();


    const slider = document.querySelector('.slider-container');
    slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slider.addEventListener('mouseleave', startAutoSlide);
});


document.addEventListener('DOMContentLoaded', function() {
    const customerCards = document.querySelectorAll('.card-cust');
    

    const middleIndex = Math.floor(customerCards.length / 2);
    customerCards[middleIndex].classList.add('active');
    

    customerCards.forEach(card => {
        card.addEventListener('click', function() {

            customerCards.forEach(c => c.classList.remove('active'));
            

            this.classList.add('active');
        });
    });
});