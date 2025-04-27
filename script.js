// Mobile Menu Toggle
const mobileMenuToggle = document.createElement('button');
mobileMenuToggle.className = 'mobile-menu-toggle';
mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('.nav-container').appendChild(mobileMenuToggle);

const navLinks = document.querySelector('.nav-links');
mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuToggle.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Scroll Animations
const scrollReveal = () => {
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

// Add scroll-reveal class to elements
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('scroll-reveal');
    });
    
    // Initial check
    scrollReveal();
});

// Scroll event listener
window.addEventListener('scroll', scrollReveal);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
            mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

// Form validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form validation and submission logic here
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Newsletter form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        if (email) {
            // Add your newsletter subscription logic here
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        }
    });
} 