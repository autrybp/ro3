// Carousel
const slides = document.querySelectorAll('.hero-slide');
const dotsContainer = document.getElementById('carousel-dots');
let currentSlide = 0;

// Create dots
slides.forEach((_, index) => {
  const dot = document.createElement('button');
  dot.addEventListener('click', () => showSlide(index));
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll('button');

function showSlide(index) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = index;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function nextSlide() {
  const next = (currentSlide + 1) % slides.length;
  showSlide(next);
}

setInterval(nextSlide, 5000); // Every 5 seconds
showSlide(0);

// Typewriter
const words = [
  "Inspired by the Rule of Thirds", "Culture", "Story", "Mood", "Perspective", "Vibe", "Silence",
  "Light", "Space", "Balance", "Shadow", "Emotion", "Focus", "Motion", "Scene", "Moment",
  "Expression", "Contrast", "Vision", "Stillness", "Time", "Energy", "Depth", "Shape", "Color",
  "Form", "Grain", "Clarity", "Glow", "Simplicity", "Lines", "Intent", "Symmetry",
  "Voice", "Atmosphere", "Wonder"
];

  const typingSpeed = 80;
  const erasingSpeed = 50;
  const delayBetweenWords = 1600;

  const textSpan = document.querySelector(".typewriter-text");
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      textSpan.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, delayBetweenWords);
        return;
      }
    } else {
      textSpan.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    setTimeout(type, isDeleting ? erasingSpeed : typingSpeed);
  }

  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 500);
  });

  function toggleMobileMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');
}
