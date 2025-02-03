document.addEventListener('DOMContentLoaded', function() {
  // Text Animation
  animateText('heading', 'Hi, I\'m <span class="highlight">Corey Nicholas</span>');
  animateText('paragraph', 'I\'m a <span class="highlight">Freelance Programmer</span>');

  // Navigation Section Switching
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section');

  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetSection = this.getAttribute('data-section');

          // Hide all sections
          sections.forEach(section => {
              section.classList.remove('active-section');
              section.classList.add('hidden-section');
          });

          // Show target section
          const activeSection = document.getElementById(targetSection);
          activeSection.classList.remove('hidden-section');
          activeSection.classList.add('active-section');

          // Update active nav link
          navLinks.forEach(navLink => navLink.classList.remove('active'));
          this.classList.add('active');
      });
  });

  // Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          alert('Thank you for your message! I will get back to you soon.');
          contactForm.reset();
      });
  }
});

function animateText(elementId, text) {
  const element = document.getElementById(elementId);
  const typingElement = elementId === 'heading' ? element.querySelector('.highlight') : null;
  let index = 0;
  const typingSpeed = elementId === 'heading' ? 60 : 80;

  function typeCharacter() {
      element.innerHTML = text.substr(0, index);
      index++;

      if (index <= text.length) {
          setTimeout(typeCharacter, typingSpeed);
      } else if (elementId === 'heading') {
          element.innerHTML += '<span class="typing-cursor"></span>';
      }
  }

  typeCharacter();
}