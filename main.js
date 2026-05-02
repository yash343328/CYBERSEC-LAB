// Typing animation on home page
const text = "initializing cybersec-lab --mode=interactive";
const output = "> 5 practicals loaded\n> sandbox environment active\n> select a lab to begin...";
let i = 0;
const typedEl = document.getElementById('typed-text');
const outputEl = document.getElementById('t-output');

if (typedEl) {
  function type() {
    if (i < text.length) {
      typedEl.textContent += text[i++];
      setTimeout(type, 45);
    } else {
      setTimeout(() => {
        outputEl.style.opacity = '1';
        outputEl.textContent = output;
      }, 400);
    }
  }
  setTimeout(type, 600);
}

// Card hover sound effect (subtle)
document.querySelectorAll('.lab-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'all 0.2s ease';
  });
});
