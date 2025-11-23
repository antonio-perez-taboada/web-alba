// ========================================
// PERSONAJES PÁGINA - ANIMACIONES ESPECÍFICAS
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Detectar qué página de personaje estamos viendo
    const body = document.body;

    // ========================================
    // BOB ESPONJA - Burbujas interactivas
    // ========================================
    if (body.classList.contains('bob-page')) {
        // Agregar burbujas al hacer click
        document.addEventListener('click', (e) => {
            createClickBubble(e.clientX, e.clientY);
        });

        function createClickBubble(x, y) {
            const bubble = document.createElement('div');
            bubble.style.cssText = `
                position: fixed;
                width: 30px;
                height: 30px;
                background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3));
                border-radius: 50%;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
                z-index: 10000;
                animation: popBubble 1s ease-out forwards;
            `;

            document.body.appendChild(bubble);

            setTimeout(() => bubble.remove(), 1000);
        }

        // Agregar CSS para animación de burbuja
        const bubbleStyle = document.createElement('style');
        bubbleStyle.textContent = `
            @keyframes popBubble {
                0% {
                    transform: translate(-50%, -50%) scale(0);
                    opacity: 1;
                }
                100% {
                    transform: translate(-50%, -300px) scale(1);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(bubbleStyle);
    }

    // ========================================
    // DOCTORA JUGUETES - Curación animada
    // ========================================
    if (body.classList.contains('doc-page')) {
        // Agregar efecto de curación en info cards
        const infoCards = document.querySelectorAll('.info-card');
        infoCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                createHealingEffect(this);
            });
        });

        function createHealingEffect(element) {
            const sparkles = 6;
            const rect = element.getBoundingClientRect();

            for (let i = 0; i < sparkles; i++) {
                const sparkle = document.createElement('div');
                sparkle.style.cssText = `
                    position: fixed;
                    width: 8px;
                    height: 8px;
                    background: #FF69B4;
                    left: ${rect.left + rect.width / 2}px;
                    top: ${rect.top + rect.height / 2}px;
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 10000;
                    animation: sparkleOut ${0.8 + Math.random() * 0.4}s ease-out forwards;
                `;

                const angle = (360 / sparkles) * i;
                sparkle.style.setProperty('--angle', `${angle}deg`);

                document.body.appendChild(sparkle);

                setTimeout(() => sparkle.remove(), 1200);
            }
        }

        const sparkleStyle = document.createElement('style');
        sparkleStyle.textContent = `
            @keyframes sparkleOut {
                0% {
                    transform: translate(-50%, -50%) rotate(var(--angle)) translateX(0);
                    opacity: 1;
                }
                100% {
                    transform: translate(-50%, -50%) rotate(var(--angle)) translateX(60px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(sparkleStyle);

        // Sonido de chequeo al hacer click en lesson cards
        const lessonCards = document.querySelectorAll('.lesson-card');
        lessonCards.forEach(card => {
            card.addEventListener('click', function() {
                this.style.animation = 'none';
                setTimeout(() => {
                    this.style.animation = 'pulse 0.5s ease-out';
                }, 10);
            });
        });
    }

    // ========================================
    // SUPERMAN - Efecto de vuelo
    // ========================================
    if (body.classList.contains('superman-page')) {
        // Efecto de estela al mover el mouse
        let trail = [];
        const maxTrail = 20;

        document.addEventListener('mousemove', (e) => {
            createTrail(e.clientX, e.clientY);
        });

        function createTrail(x, y) {
            const trailDot = document.createElement('div');
            trailDot.style.cssText = `
                position: fixed;
                width: 6px;
                height: 6px;
                background: linear-gradient(135deg, #DC143C, #FFD700);
                border-radius: 50%;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
                z-index: 9998;
                animation: fadeTrail 0.5s ease-out forwards;
            `;

            document.body.appendChild(trailDot);
            trail.push(trailDot);

            if (trail.length > maxTrail) {
                const oldDot = trail.shift();
                oldDot.remove();
            }

            setTimeout(() => trailDot.remove(), 500);
        }

        const trailStyle = document.createElement('style');
        trailStyle.textContent = `
            @keyframes fadeTrail {
                0% {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1);
                }
                100% {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(0);
                }
            }
        `;
        document.head.appendChild(trailStyle);

        // Animación de poder en power cards
        const powerCards = document.querySelectorAll('.power-card');
        powerCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';

            setTimeout(() => {
                card.style.transition = 'all 0.6s ease-out';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    // ========================================
    // MARIO - Efecto de aventura
    // ========================================
    if (body.classList.contains('mario-page')) {
        // Confetti al hacer click en habilidad cards
        const habilidadCards = document.querySelectorAll('.habilidad-card');
        habilidadCards.forEach(card => {
            card.addEventListener('click', function() {
                createMiniConfetti(this);
            });
        });

        function createMiniConfetti(element) {
            const rect = element.getBoundingClientRect();
            const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#F38181'];
            const confettiCount = 15;

            for (let i = 0; i < confettiCount; i++) {
                const confetti = document.createElement('div');
                confetti.style.cssText = `
                    position: fixed;
                    width: 8px;
                    height: 8px;
                    background: ${colors[Math.floor(Math.random() * colors.length)]};
                    left: ${rect.left + rect.width / 2}px;
                    top: ${rect.top + rect.height / 2}px;
                    border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
                    pointer-events: none;
                    z-index: 10000;
                `;

                const angle = Math.random() * 360;
                const velocity = Math.random() * 100 + 50;
                const duration = Math.random() * 0.5 + 0.5;

                confetti.animate([
                    {
                        transform: `translate(-50%, -50%) rotate(0deg)`,
                        opacity: 1
                    },
                    {
                        transform: `translate(calc(-50% + ${Math.cos(angle) * velocity}px), calc(-50% + ${Math.sin(angle) * velocity}px)) rotate(${Math.random() * 720}deg)`,
                        opacity: 0
                    }
                ], {
                    duration: duration * 1000,
                    easing: 'cubic-bezier(0, 0.5, 0.5, 1)'
                });

                document.body.appendChild(confetti);

                setTimeout(() => confetti.remove(), duration * 1000);
            }
        }

        // Animación de timeline items al scroll
        const timelineItems = document.querySelectorAll('.timeline-item');
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'slideInRight 0.6s ease-out forwards';
                }
            });
        }, { threshold: 0.2 });

        timelineItems.forEach(item => {
            item.style.opacity = '0';
            timelineObserver.observe(item);
        });
    }

    // ========================================
    // GALERÍA COMÚN PARA TODAS LAS PÁGINAS
    // ========================================
    const galleryBoxes = document.querySelectorAll('.gallery-box');
    galleryBoxes.forEach((box, index) => {
        box.style.opacity = '0';
        box.style.transform = 'scale(0.8)';

        setTimeout(() => {
            box.style.transition = 'all 0.5s ease-out';
            box.style.opacity = '1';
            box.style.transform = 'scale(1)';
        }, index * 150);
    });

    // ========================================
    // INFO CARDS ANIMACIÓN
    // ========================================
    const infoCards = document.querySelectorAll('.info-card');
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    infoCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        cardObserver.observe(card);
    });

    // ========================================
    // CURIOSIDADES ANIMACIÓN
    // ========================================
    const factItems = document.querySelectorAll('.fact-item');
    const factObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0) rotate(0deg)';
                }, index * 80);
            }
        });
    }, { threshold: 0.1 });

    factItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px) rotate(-5deg)';
        item.style.transition = 'all 0.5s ease-out';
        factObserver.observe(item);
    });

    // ========================================
    // SCROLL TO TOP BUTTON
    // ========================================
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.2rem;
        cursor: pointer;
        opacity: 0;
        transform: scale(0);
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    `;

    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.transform = 'scale(1)';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.transform = 'scale(0)';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    scrollToTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });

    scrollToTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

console.log('🎮 Página de personaje cargada con efectos especiales!');
