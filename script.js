// Accordion toggle + navbar active
const navLinks = document.querySelectorAll('.nav-link');
const accordions = document.querySelectorAll('.accordion-content');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('data-target');

    // Active link highlight
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    // Accordion toggle
    accordions.forEach(acc => {
      if (acc.parentElement.id === targetId) {
        acc.classList.toggle('open');
      } else {
        acc.classList.remove('open');
      }
    });

    // Smooth scroll
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});
                                                              