  document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.overlay');
    const applyBtn = document.getElementById('applyBtn');

    // Fade in popup
    if (overlay) {
      setTimeout(() => {
        overlay.classList.add('visible');
      }, 10);
    }

    applyBtn.addEventListener('click', () => {
      const selected = document.querySelector('input[name="language"]:checked').value;

      if (selected === 'fr') {
        window.location.href = 'https://ro3society.com/fr/';
      } else if (selected === 'ar') {
        window.location.href = 'https://ro3society.com/ar/';
      } else {
        // English selected — fade out popup
        if (overlay) {
          overlay.classList.remove('visible');
        }
      }
    });
  });