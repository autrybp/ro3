const words = [
  "Inspired by the Rule of Thirds", "Culture", "Story", "Mood", "Perspective", "Vibe", "Silence",
  "Light", "Space", "Balance", "Shadow", "Emotion", "Focus", "Motion", "Scene", "Depth", "Moment",
  "Expression", "Contrast", "Vision", "Stillness", "Time", "Energy", "Shape", "Color",
  "Form", "Grain", "Clarity", "Glow", "Simplicity", "Lines", "Intent", "Symmetry",
  "Voice", "Atmosphere", "Wonder"
];

const typingSpeed = 90;
const erasingSpeed = 50;
const delayBetweenWords = 2000;

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
