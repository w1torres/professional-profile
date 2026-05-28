// Navbar: active link highlight + mobile toggle
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
const backToTop = document.getElementById('back-to-top');

navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Scroll effects
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Back to top visibility
  if (scrollY > 400) {
    backToTop?.classList.add('visible');
  } else {
    backToTop?.classList.remove('visible');
  }

  // Active nav link
  const sections = document.querySelectorAll('section[id]');
  sections.forEach(section => {
    const top = section.offsetTop - 80;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');
    const link = navLinks?.querySelector(`a[href="#${id}"]`);
    if (scrollY >= top && scrollY < bottom) {
      navLinks?.querySelectorAll('a').forEach(a => a.classList.remove('active'));
      link?.classList.add('active');
    }
  });
});

// Intersection Observer: fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-group, .timeline-card, .edu-card, .cert-card, .portfolio-card, .contact-card, .info-card')
  .forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
