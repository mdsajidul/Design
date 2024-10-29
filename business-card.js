// JavaScript code for handling the contact form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
    this.reset(); // Reset the form after submission
});
