// Toggle navigation menu on small screens
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Simple form validation and submission simulation
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Simple validation (fields required by HTML5)
  formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
  formMessage.style.color = 'green';

  // Clear form
  form.reset();
});
