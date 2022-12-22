$(document).ready(function () {

  $('.questions__question').click(function () {
    $(this).children('.questions__close').toggleClass('active');
    $(this).parent().toggleClass('active');
  });

  $(".menu__item").click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({scrollTop: destination}, 800);
  });

  $('.product__text').html(data[0].text)


  $('.reviews__wrapper').slick({
    slidesToShow: 2,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      }]
  });

})