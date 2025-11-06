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

// Update active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

function updateActiveLink() {
  let current = '';
  let minDistance = window.innerHeight; // start with max distance

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const distance = Math.abs(rect.top - 80); // 80 = header height
    if (distance < minDistance) {
      minDistance = distance;
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href').includes(current)) a.classList.add('active');
  });
}

window.addEventListener('scroll', updateActiveLink);
updateActiveLink();



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



// Accordion for Experience Section
const accordions = document.querySelectorAll('.accordion');
accordions.forEach(acc => {
  acc.addEventListener('click', () => {
    // Toggle this panel
    acc.classList.toggle('active');
    const panel = acc.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});







