document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.querySelector('.overlay');
  const applyBtn = document.getElementById('applyBtn');
  const dontAskCheckbox = document.getElementById('dontShowAgain'); // match your HTML id
  const langBtn = document.getElementById('langBtn');

  // Show popup on page load only if "dontAsk" is NOT set in localStorage
  if (!localStorage.getItem('dontAsk')) {
    setTimeout(() => {
      overlay.classList.add('visible');
    }, 10);
  }

  // Apply button click
  applyBtn.addEventListener('click', () => {
    const selected = document.querySelector('input[name="language"]:checked').value;

    // Store the "Don't ask again" choice
    if (dontAskCheckbox.checked) {
      localStorage.setItem('dontAsk', 'true');
    } else {
      localStorage.removeItem('dontAsk');
    }

    // Redirect or close popup
    if (selected === 'fr') {
      window.location.href = './fr/';  // or a local path/file you have
    } else if (selected === 'ar') {
      window.location.href = './ar/';
    } else {
      overlay.classList.remove('visible');
    }
  });

  // Bottom-right language selector button click (reopen popup)
  langBtn.addEventListener('click', () => {
    overlay.classList.add('visible');
  });
});
