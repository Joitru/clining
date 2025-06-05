document.addEventListener('DOMContentLoaded', function() {
            const track = document.querySelector('.slider-track');
            const slides = document.querySelectorAll('.slider-slide');
            const dotsContainer = document.querySelector('.slider-dots');
            
            let currentSlide = 0;
            const slideCount = slides.length;
            const slideWidth = slides[0].offsetWidth;

            function initDots() {
                slides.forEach((_, index) => {
                    const dot = document.createElement('div');
                    dot.classList.add('slider-dot');
                    if (index === 0) dot.classList.add('active');
                    dot.addEventListener('click', () => goToSlide(index));
                    dotsContainer.appendChild(dot);
                });
            }

            function goToSlide(index) {
                currentSlide = index;
                track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
                

                document.querySelectorAll('.slider-dot').forEach((dot, i) => {
                    dot.classList.toggle('active', i === currentSlide);
                });
            }

            function startAutoSlide() {
                setInterval(() => {
                    currentSlide = (currentSlide + 1) % slideCount;
                    goToSlide(currentSlide);
                }, 5000);
            }

            initDots();
            startAutoSlide();
            
            // Адаптация к изменению размера окна
            window.addEventListener('resize', () => {
                const newWidth = slides[0].offsetWidth;
                track.style.transform = `translateX(-${currentSlide * newWidth}px)`;
            });
        });