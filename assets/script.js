document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top < window.innerHeight && top > 0) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  });
});
