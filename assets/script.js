$(document).ready(function() {
  $(window).on('scroll', function() {
    $('.section').each(function() {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).animate({'opacity':'1', 'margin-top':'0px'}, 1000);
      }
    });
  });
});
