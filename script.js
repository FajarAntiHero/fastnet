// Animate bars on scroll
const observer = new IntersectionObserver((entries) => {
entries.forEach(e => {
    if (e.isIntersecting) {
    e.target.querySelectorAll('.bar-fill').forEach(b => {
        b.style.width = b.getAttribute('data-w') || b.style.width;
    });
    }
});
}, { threshold: 0.2 });
document.querySelectorAll('.price-card').forEach(c => observer.observe(c));

// Form submit
function handleSubmit(e) {
e.preventDefault();
const btn = e.target.querySelector('button[type="submit"]');
btn.textContent = '✓ Pesan Terkirim!';
btn.style.background = 'linear-gradient(135deg, #00c26e, #00FFB2)';
btn.style.boxShadow = '0 0 30px rgba(0,255,178,0.4)';
setTimeout(() => {
    btn.textContent = 'Kirim Pesan';
    btn.style.background = '';
    btn.style.boxShadow = '';
    e.target.reset();
}, 3000);
}

// Smooth nav on mobile (just scroll)
document.getElementById('hamburger').addEventListener('click', () => {
document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// Reveal on scroll
const revealObs = new IntersectionObserver((entries) => {
entries.forEach(e => {
    if (e.isIntersecting) {
    e.target.style.opacity = '1';
    e.target.style.transform = 'translateY(0)';
    }
});
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .step, .price-card').forEach(el => {
el.style.opacity = '0';
el.style.transform = 'translateY(30px)';
el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
revealObs.observe(el);
});