const words = [
  "rule of thirds.", "culture.", "story.", "mood.", "perspective.", "vibe.", "art.", "frame.", "silence.",
  "light.", "space.", "balance.", "shadow.", "emotion.", "focus.", "motion.", "scene.", "texture.", "moment.",
  "expression.", "contrast.", "vision.", "stillness.", "time.", "energy.", "depth.", "shape.", "color.",
  "form.", "grain.", "clarity.", "glow.", "simplicity.", "lines.", "intent.", "layer.", "symmetry.",
  "voice.", "atmosphere.", "wonder."
];

const typingSpeed = 100;
const erasingSpeed = 40;
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
