const carousel = document.querySelector('.carousel');
const carouselInner = document.querySelector('.carousel-inner');
const slides = document.querySelectorAll('.slide');

const slideWidth = slides[0].clientWidth;
let currentIndex = 0;

function slideNext() {
  currentIndex++;
  carouselInner.style.transition = 'transform 0.5s ease-in-out';
  carouselInner.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

carouselInner.addEventListener('transitionend', () => {
  if (currentIndex >= slides.length - 1) {
    currentIndex = 0;
    carouselInner.style.transition = 'none';
    carouselInner.style.transform = `translateX(0)`;
  }
});

setInterval(slideNext, 3000);
