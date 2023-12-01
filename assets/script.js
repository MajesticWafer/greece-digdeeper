$(document).ready(function() {
  // Function to check if an element is in the viewport
  function isElementInViewport(elem) {
    var rect = elem.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to add a class when an element is in the viewport
  function addClassOnScroll() {
    $('.section').each(function() {
      if (isElementInViewport(this)) {
        $(this).addClass('visible');
      }
    });
  }

  // Add the 'visible' class to elements in the viewport on page load
  addClassOnScroll();

  // Add the 'visible' class to elements in the viewport on scroll
  $(window).on('scroll', function() {
    addClassOnScroll();
  });
});
