$(document).ready(function () {
  $('.header-mobile__burger').click(function (event) {
    console.log('h');
    $('.header-mobile__burger, .header-mobile__menu').toggleClass('active');
  });
  $("#scene-1").parallax();

});