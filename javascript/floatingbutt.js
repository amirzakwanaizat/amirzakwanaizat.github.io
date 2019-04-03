var butt = $('#buttt');

$(window).scroll(function() {
  if (($(window).scrollTop() > 210) && ($(window).scrollTop() < 600)) {
    butt.addClass('show');
  } else {
    butt.removeClass('show');
    butt.addClass('hide');
  }
});