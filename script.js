/* ACT — small interactions */

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Animated counters (when hero is in view)
const counters = document.querySelectorAll('[data-count]');
const animateCount = (el) => {
  const target = parseInt(el.dataset.count, 10);
  const duration = 1400;
  const start = performance.now();
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);
  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const value = Math.floor(easeOut(progress) * target);
    el.textContent = value;
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = target;
  };
  requestAnimationFrame(tick);
};

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);
counters.forEach((c) => counterObserver.observe(c));

// Subtle scroll reveal for cards & sections
const revealEls = document.querySelectorAll(
  '.what__card, .service, .timeline__item, .stack__col'
);
revealEls.forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 60);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => revealObserver.observe(el));

// Respect reduced motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  revealEls.forEach((el) => {
    el.style.opacity = '1';
    el.style.transform = 'none';
    el.style.transition = 'none';
  });
}
