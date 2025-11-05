// Initialize AOS animations
AOS.init({ duration: 1000, once: true });

// Animate skill bars when visible
const skills = document.querySelectorAll('.skill');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      el.style.width = el.dataset.width;
    }
  });
}, { threshold: 0.5 });
skills.forEach(el => observer.observe(el));

// Active nav highlight on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 200) current = section.getAttribute('id');
  });
  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href').includes(current)) a.classList.add('active');
  });
});

// Scroll-to-top button
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) scrollTopBtn.classList.add('show');
  else scrollTopBtn.classList.remove('show');
});
scrollTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// 3D tilt for project cards
VanillaTilt.init(document.querySelectorAll(".content"), {
  max: 10,
  speed: 400,
  glare: true,
  "max-glare": 0.2
});
