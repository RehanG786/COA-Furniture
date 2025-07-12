// smoothScroll helper
function smoothScroll(selector){
  document.querySelector(selector).scrollIntoView({behavior:'smooth'});
}

// ── GSAP Animations ──
window.addEventListener('load', () => {

  gsap.from('.navbar', { y: -80, duration: 1, ease: 'power2.out' });

  // hero
  gsap.from('.glow', {
    textShadow: '0px 0px 30px rgba(255,157,0,0)',
    duration: 2,
    ease: 'power3.inOut'
  });

  // sections fade‑in
  gsap.utils.toArray('section').forEach(sec => {
    gsap.from(sec.querySelectorAll('.section‑title, .product-card, .about‑wrap, .tech‑grid, .contact‑grid'), {
      scrollTrigger: {
        trigger: sec,
        start: 'top 75%',
      },
      opacity: 0,
      y: 40,
      stagger: 0.1,
      duration: 1,
      ease: 'power2.out'
    });
  });

  // stars parallax
  gsap.to('.stars', { backgroundPosition: '-2000px 0', ease: 'none', duration: 120, repeat: -1 });
});
