$(document).ready(function () {

  // $('.nav-bar__hamburger').click(function () {
  //     $('.menus').toggleClass('d-block')
  // });

  // $('.menus__item a').click(function () {
  //     $('.menus').removeClass('d-block')
  // });

  //плавное перемещение страницы к нужному блоку
  $(".circle-wrapper").click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({scrollTop: destination}, 800);
  });



  $('.video').parent().click(function () {

    if ($(this).children(".video").get(0).paused) {
      $(this).children(".video").get(0).play();
      $(this).children(".playpause").fadeOut();

    } else {
      $(this).children(".video").get(0).pause();

      $(this).children(".playpause").fadeIn();

    }

  });


});