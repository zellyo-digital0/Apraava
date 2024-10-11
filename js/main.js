$(window).on('load', function () {
  $('#preloader').fadeOut('slow');
});
$(document).ready(function () {
  AOS.init({
    // once: true,
    duration: 700,
    // offset: 50,
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('#backToTopBtn').fadeIn();
    } else {
      $('#backToTopBtn').fadeOut();
    }
  });

  $('#backToTopBtn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });
});
$(document).ready(function () {
  // Bind click event to each toggle button
  $('.toggleButton').click(function () {
    // Find the corresponding content for the clicked button
    var content = $(this).siblings('.content');

    // Toggle the visibility of the content
    content.toggle();
  });
});
