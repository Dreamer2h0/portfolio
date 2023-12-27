/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const successMessage = () => {
  // Show sent message
  contactMessage.textContent = 'Message sent successfully ✅';

  // Remove sent message after five seconds
  setTimeout(() => {
    contactMessage.textContent = '';
  }, 5000);

  // clear input fields
  contactForm.reset()
};

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs.sendForm('service_pgkwz7t', 'template_18fd2gy', '#contact-form', 'ml5SGuCO-NtjTBiKK')
    .then(() => {
      successMessage();
    }, () => {
      // show error message
      contactMessage.textContent = 'Message not sent {service error} ❌';
    });
};

contactForm.addEventListener('submit', sendEmail);