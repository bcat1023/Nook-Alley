// Carousel Configuration based on custom HTML
const slideSelector = document.querySelector('.slideSelector');
const slides = document.querySelectorAll('.slideSelector .slide');
const navItems = document.querySelectorAll('.slideSelector ol li');
let currentSlide = 0;
let intervalId;
const intervalTime = 5000; // 5 seconds
let slideshowPaused = false;

function goToSlide(index) {
  if (slideshowPaused) return; // Prevent switching if paused by Slide 2

  slides.forEach((slide, i) => {
    slide.classList.toggle('default', i === index);
    navItems[i].classList.toggle('active', i === index);
  });
  currentSlide = index;
}

function nextSlide() {
  if (slideshowPaused) return;
  let next = (currentSlide + 1) % slides.length;
  goToSlide(next);
}

function startAutoSlide() {
  intervalId = setInterval(nextSlide, intervalTime);
}

function stopAutoSlide() {
  clearInterval(intervalId);
}

// Allow for pauseing/resumeing slideshow externally
window.pauseMainSlideshow = function () {
  slideshowPaused = true;
  stopAutoSlide();
};

window.resumeMainSlideshow = function () {
  slideshowPaused = false;
  startAutoSlide();
};

// Add click event to navigation icons
navItems.forEach((item, i) => {
  item.addEventListener('click', () => {
    goToSlide(i);
    stopAutoSlide();
    startAutoSlide();
  });
});

// Initialize carousel
goToSlide(0);
startAutoSlide();
