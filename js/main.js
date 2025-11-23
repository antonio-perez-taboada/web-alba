// ========================================
// NAVEGACIÓN MÓVIL
// ========================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger?.classList.remove('active');
    });
});

// ========================================
// EFECTO PARALLAX
// ========================================

let ticking = false;

function parallaxEffect() {
    const scrolled = window.pageYOffset;

    // Parallax en hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        const layer1 = document.querySelector('.layer-1');
        const layer2 = document.querySelector('.layer-2');

        if (layer1) layer1.style.transform = `translateY(${scrolled * 0.5}px)`;
        if (layer2) layer2.style.transform = `translateY(${scrolled * 0.3}px)`;
    }

    // Parallax divider
    const parallaxDivider = document.querySelector('.parallax-divider');
    if (parallaxDivider) {
        const speed = parallaxDivider.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        parallaxDivider.style.backgroundPositionY = `${yPos}px`;
    }

    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(parallaxEffect);
        ticking = true;
    }
});

// ========================================
// ANIMACIÓN DE ENTRADA AL SCROLL
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos con animación
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.character-card, .gallery-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});

// ========================================
// PARTÍCULAS FLOTANTES
// ========================================

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 30;
    const colors = ['#6366f1', '#ec4899', '#f59e0b', '#8b5cf6', '#06b6d4'];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 8 + 3;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const startX = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;

        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            left: ${startX}%;
            top: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.5 + 0.2};
            animation: floatParticle ${duration}s ${delay}s infinite ease-in-out;
            pointer-events: none;
        `;

        particlesContainer.appendChild(particle);
    }
}

// Agregar CSS de animación de partículas dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes floatParticle {
        0%, 100% {
            transform: translate(0, 0) rotate(0deg);
        }
        25% {
            transform: translate(20px, -30px) rotate(90deg);
        }
        50% {
            transform: translate(-10px, -60px) rotate(180deg);
        }
        75% {
            transform: translate(-30px, -30px) rotate(270deg);
        }
    }
`;
document.head.appendChild(style);

createParticles();

// ========================================
// FORMULARIO DE CONTACTO
// ========================================

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Animación de envío
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;

        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;

        // Simular envío
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> ¡Mensaje Enviado!';
            submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
                contactForm.reset();
            }, 2000);
        }, 1500);
    });
}

// ========================================
// EFECTOS DE HOVER EN TARJETAS
// ========================================

document.querySelectorAll('.character-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ========================================
// SMOOTH SCROLL CON OFFSET PARA NAVBAR
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// CAMBIO DE NAVBAR AL SCROLL
// ========================================

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 1)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    }
});

// ========================================
// EFECTO DE CURSOR PERSONALIZADO
// ========================================

let cursor = null;
let cursorFollower = null;

function initCustomCursor() {
    cursor = document.createElement('div');
    cursorFollower = document.createElement('div');

    cursor.className = 'custom-cursor';
    cursorFollower.className = 'cursor-follower';

    cursor.style.cssText = `
        width: 10px;
        height: 10px;
        background: #6366f1;
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 10000;
        transform: translate(-50%, -50%);
        transition: transform 0.1s ease;
    `;

    cursorFollower.style.cssText = `
        width: 30px;
        height: 30px;
        border: 2px solid #ec4899;
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: all 0.15s ease;
        opacity: 0.5;
    `;

    document.body.appendChild(cursor);
    document.body.appendChild(cursorFollower);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 50);
    });

    // Efecto en hover de enlaces y botones
    const interactiveElements = document.querySelectorAll('a, button, .character-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });

        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

// Inicializar cursor personalizado solo en desktop
if (window.innerWidth > 768) {
    initCustomCursor();
}

// ========================================
// CONTADOR ANIMADO
// ========================================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ========================================
// LOADING SCREEN
// ========================================

window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        transition: opacity 0.5s ease;
    `;

    const spinner = document.createElement('div');
    spinner.innerHTML = '<i class="fas fa-star fa-spin" style="font-size: 4rem; color: white;"></i>';
    loader.appendChild(spinner);

    if (!document.querySelector('.page-loader')) {
        document.body.insertBefore(loader, document.body.firstChild);
    }

    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 1000);
});

// ========================================
// EASTER EGG: KONAMI CODE
// ========================================

let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-konamiPattern.length);

    if (konamiCode.join(',') === konamiPattern.join(',')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 2rem 3rem;
        border-radius: 20px;
        font-size: 2rem;
        font-family: 'Fredoka One', cursive;
        z-index: 10001;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        animation: bounceIn 0.5s ease-out;
    `;
    message.textContent = '🎉 ¡Código Secreto Activado! 🎉';

    document.body.appendChild(message);

    // Crear confetti
    for (let i = 0; i < 50; i++) {
        createConfetti();
    }

    setTimeout(() => {
        message.style.animation = 'bounceOut 0.5s ease-out';
        setTimeout(() => message.remove(), 500);
    }, 3000);
}

function createConfetti() {
    const confetti = document.createElement('div');
    const colors = ['#6366f1', '#ec4899', '#f59e0b', '#10b981', '#8b5cf6'];

    confetti.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        left: ${Math.random() * 100}vw;
        top: -10px;
        z-index: 10000;
        animation: fallConfetti ${Math.random() * 3 + 2}s linear;
    `;

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
}

// Agregar animaciones de confetti
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes fallConfetti {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }

    @keyframes bounceIn {
        0% {
            transform: translate(-50%, -50%) scale(0);
        }
        50% {
            transform: translate(-50%, -50%) scale(1.1);
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
        }
    }

    @keyframes bounceOut {
        0% {
            transform: translate(-50%, -50%) scale(1);
        }
        100% {
            transform: translate(-50%, -50%) scale(0);
        }
    }
`;
document.head.appendChild(confettiStyle);

console.log('🌟 Web de Alba cargada con éxito! 🌟');
console.log('💡 Tip: Intenta el código Konami para una sorpresa...');
