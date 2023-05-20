const carouselSlides = document.querySelectorAll('.carousel-slide');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');
let currentSlide = 0;

function showSlide(index) {
  carouselSlides.forEach((slide, slideIndex) => {
    if (slideIndex === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function goToPrevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = carouselSlides.length - 1;
  }
  showSlide(currentSlide);
}

function goToNextSlide() {
  currentSlide++;
  if (currentSlide >= carouselSlides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

carouselPrev.addEventListener('click', goToPrevSlide);
carouselNext.addEventListener('click', goToNextSlide);
showSlide(currentSlide);
