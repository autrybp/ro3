
document.addEventListener('DOMContentLoaded', () => {
  const fadeElems = document.querySelectorAll('h1, h2');

  function checkFade() {
    const triggerBottom = window.innerHeight * 0.9;

    fadeElems.forEach(elem => {
      const top = elem.getBoundingClientRect().top;

      if (top < triggerBottom && top > 0) {
        elem.classList.add('visible');
      } else {
        elem.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', checkFade);
  checkFade(); // Run once on load
});

document.querySelectorAll('.founder-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // cursor X relative to card
    const y = e.clientY - rect.top;  // cursor Y relative to card
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateX = ((y - midY) / midY) * 10;  // max 10deg rotateX
    const rotateY = ((midX - x) / midX) * 10;  // max 10deg rotateY

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  });
});

