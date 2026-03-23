const content = {
    ru: {
        shopText: 'Магазин плёнок',
        shopLink: 'https://arsnails.ru',
        instructionText: 'Инструкция по нанесению плёнок',
        instructionLink: 'https://arsnails.ru/instruction',
        courseText: 'Онлайн-курс "Плёнки"',
        courseLink: 'https://academy.arsnails.ru'
    },
    en: {
        shopText: 'Nail wraps shop',
        shopLink: 'https://arsnails.com',
        instructionText: 'How to apply nail wraps instruction',
        instructionLink: 'https://arsnails.ru/howtouse',
        courseText: '"Nail wraps" online course',
        courseLink: 'https://academy.arsnails.ru'
    }
};

// Add subtle interactive effects
document.addEventListener('DOMContentLoaded', function() {
    const langBtns = document.querySelectorAll('.lang-btn');
    const linkShop = document.getElementById('link-shop');
    const textShop = document.getElementById('text-shop');
    const linkInstruction = document.getElementById('link-instruction');
    const textInstruction = document.getElementById('text-instruction');
    const linkCourse = document.getElementById('link-course');
    const textCourse = document.getElementById('text-course');

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const lang = btn.getAttribute('data-lang');
            
            textShop.textContent = content[lang].shopText;
            linkShop.href = content[lang].shopLink;
            
            textInstruction.textContent = content[lang].instructionText;
            linkInstruction.href = content[lang].instructionLink;
            
            textCourse.textContent = content[lang].courseText;
            linkCourse.href = content[lang].courseLink;
        });
    });

    const buttons = document.querySelectorAll('.link-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        // Add ripple effect on click
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .link-button {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add stars background
function createStars() {
    const container = document.getElementById('stars-container');
    if (!container) return;
    
    const starCount = window.innerWidth < 768 ? 70 : 150;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Randomize twinkling
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(star);
    }
}
document.addEventListener('DOMContentLoaded', createStars);

