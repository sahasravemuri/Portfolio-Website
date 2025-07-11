
// Smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scrolling behavior to scroll indicator
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function() {
      document.querySelector('.about').scrollIntoView({
        behavior: 'smooth'
      });
    });
  }

  // Add parallax effect to hero image
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroImage = document.querySelector('.hero-image');

    if (hero && heroImage) {
      const rate = scrolled * -0.5;
      heroImage.style.transform = `translateY(${rate}px)`;
    }
  });

  // Add fade-in animation for sections
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all sections except hero
  const sections = document.querySelectorAll('section:not(.hero)');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
});
