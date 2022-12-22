$(document).ready(function(){

  $('a.menu__item').click(function () {
    elementClick = $(this).attr('href');
    destination = $(elementClick).offset().top;
    $('body, html').animate({scrollTop: destination-160}, 800);
  })

    // Slider

  $('.slider').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>'
  });

  $('.comment').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>'
  });

  // animation
  $(window).scroll(function() {
    $('.we').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+600) {
            $(this).addClass("fadeInLeft");
        }
    });
    $('.we').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+600) {
            $(this).addClass("fadeInLeft");
        }
    });
    $('.office').each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+600) {
          $(this).addClass("fadeInRight");
      }
    });
    $('.question__item').each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+850) {
          $(this).addClass("fadeInUp");
      }
    });
  });
    
    $('.first__item .question__title a').click(function (e) {
      e.preventDefault();
      $('.first__item .question__text, .first__item .question__arrow').toggleClass('d-none');
    });
    $('.second__item .question__title a').click(function (e) {
      e.preventDefault();
      $('.second__item .question__text, .second__item .question__arrow').toggleClass('d-none');
    });
    $('.third__item .question__title a').click(function (e) {
      e.preventDefault();
      $('.third__item .question__text, .third__item .question__arrow').toggleClass('d-none');
    });
    $('.fourth__item .question__title a').click(function (e) {
      e.preventDefault();
      $('.fourth__item .question__text, .fourth__item .question__arrow').toggleClass('d-none');
    });
    $('.fifth__item .question__title a').click(function (e) {
      e.preventDefault();
      $('.fifth__item .question__text, .fifth__item .question__arrow').toggleClass('d-none');
    });
    $('.six__item .question__title a').click(function (e) {
      e.preventDefault();
      $('.six__item .question__text, .six__item .question__arrow').toggleClass('d-none');
    });
    $('.seven__item .question__title a').click(function (e) {
      e.preventDefault();
      $('.seven__item .question__text, .seven__item .question__arrow').toggleClass('d-none');
    });

  $('.hamburger').click(function (e) {
    e.preventDefault();
    $('.ham-menu').toggleClass('hidden');
  });


  if($('.menu__item').click(function () {

    $('.menu__item').removeClass('active');
    $(this).addClass('active');
  }));


    // $(window).scroll(function() {
    //   $($('body').attr('id')).each(function(){
    //     var myPosition = $(this);

    //     var myIdclass = $('.menu__item').find('a').attr('href');
         
    //     if (myPosition == myIdclass)
    //     {
    //       $('.menu__item').removeClass('active');
    //       $(myIdclass).addClass('active');
    //     }

    //   });
    // });

  $(function () {
    var location = window.location.href;
    var cur_url = '/' + location.split('/').pop();
 
    $('.menu a').each(function () {
        var link = $(this).find('a').attr('href');
 
        if (cur_url == link)
        {
            $(this).addClass('active');
        }
    });
  });


});