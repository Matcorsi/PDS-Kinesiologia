// Inicializar AOS para animaciones al scroll
AOS.init({
    duration: 1000,
    once: true,
});

// Menú hamburguesa
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Slider del Hero
const heroSlides = document.querySelectorAll('.hero-slide');
const heroIndicators = document.querySelectorAll('.hero-indicators .indicator');
let heroIndex = 0;

function showHeroSlide(index) {
    heroSlides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    heroIndicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

heroIndicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        heroIndex = i;
        showHeroSlide(heroIndex);
    });
});

// Auto-slide para hero (cada 5 segundos)
setInterval(() => {
    heroIndex = (heroIndex + 1) % heroSlides.length;
    showHeroSlide(heroIndex);
}, 8000);

// Slider de testimonios con indicadores
const testimonials = document.querySelectorAll('.testimonial');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle('active', i === index);
    });
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        currentIndex = i;
        showTestimonial(currentIndex);
    });
});

// Auto-slide para testimonios (opcional, cada 5 segundos)
setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}, 5000);

// Slider de galería con indicadores
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryIndicators = document.querySelectorAll('.gallery-indicators .indicator');
let galleryIndex = 0;

function showGalleryItem(index) {
    galleryItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
    galleryIndicators.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Inicializar mostrando la primera imagen
showGalleryItem(galleryIndex);

// Click en indicadores
galleryIndicators.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        galleryIndex = i;
        showGalleryItem(galleryIndex);
    });
});

// Auto-slide cada 5 segundos
setInterval(() => {
    galleryIndex = (galleryIndex + 1) % galleryItems.length;
    showGalleryItem(galleryIndex);
}, 5000);




// FAQ Acordeón
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        question.querySelector('i').classList.toggle('fa-chevron-down');
        question.querySelector('i').classList.toggle('fa-chevron-up');
    });
});

// Formulario de contacto con validación
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && phone && message) {
        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Por favor, ingresa un email válido.');
            return;
        }
        alert('Mensaje enviado exitosamente. ¡Gracias por contactarnos!');
        form.reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

// Smooth scroll para enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});