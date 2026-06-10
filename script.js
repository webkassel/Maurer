// ---- Sticky header ----
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

// ---- Mobile hamburger ----
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
  hamburger.classList.toggle('active');
});
nav.querySelectorAll('.nav-link, .btn').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    hamburger.classList.remove('active');
  });
});

// ---- Scroll reveal ----
const revealEls = document.querySelectorAll(
  '.service-card, .contact-card, .wellness-card, .about-badge, .highlight, .about-years, .wellness-text, .wellness-visual, .about-text, .about-visual, .section-header'
);
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay ?? 0;
      setTimeout(() => entry.target.classList.add('visible'), Number(delay));
      observer.unobserve(entry.target);
    }
  }),
  { threshold: 0.1 }
);
revealEls.forEach(el => observer.observe(el));

// ---- Active nav link on scroll ----
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) current = section.id;
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}`
      ? '#f97316'
      : '';
  });
}, { passive: true });
