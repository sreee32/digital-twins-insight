// Mobile Menu Toggle (if you want to add hamburger menu later)
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle) {
 menuToggle.addEventListener('click', function() {
 navLinks.classList.toggle('active');
 });
}
// Form Validation (for contact form)
function validateForm() {
 const name = document.getElementById('name');
 const email = document.getElementById('email');
 const message = document.getElementById('message');
 if (name.value.trim() === '') {
 alert('Please enter your name');
 return false;
 }
 if (email.value.trim() === '' || !email.value.includes('@')) {
 alert('Please enter a valid email');
 return false;
 }
 if (message.value.trim() === '') {
 alert('Please enter a message');
 return false;
 }
 alert('Message sent successfully!');
 return false; // Prevent actual submission
}
// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
 anchor.addEventListener('click', function (e) {
 e.preventDefault();
 const target = document.querySelector(this.getAttribute('href'));
 if (target) {
 target.scrollIntoView({ behavior: 'smooth' });
 }
 });
});