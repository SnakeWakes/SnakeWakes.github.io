document.addEventListener('DOMContentLoaded', function() {
    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value,
                to_email: 'coreyn1999@gmail.com'
            };

            // Show loading state
            const submitButton = this.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            submitButton.innerHTML = 'Sending...';
            submitButton.disabled = true;

            // Send email using EmailJS
            emailjs.send('service_6xmijuk', 'template_f0u4e5i', formData)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    formSuccess.classList.remove('hidden');
                    formSuccess.classList.add('block');
                    contactForm.reset();
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        formSuccess.classList.remove('block');
                        formSuccess.classList.add('hidden');
                    }, 5000);
                })
                .catch(function(error) {
                    console.error('FAILED...', error);
                    alert('Failed to send message. Error: ' + error.text);
                })
                .finally(function() {
                    submitButton.innerHTML = originalButtonText;
                    submitButton.disabled = false;
                });
        });
    }

    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});