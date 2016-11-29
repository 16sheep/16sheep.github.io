$(document).ready(function() {
  
  $(window).scroll(function () {
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 430) {
      $('nav').addClass('nav-fixed');
    }
    if ($(window).scrollTop() < 431) {
      $('nav').removeClass('nav-fixed');
    }
  });
})