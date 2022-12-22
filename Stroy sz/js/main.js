$(document).ready(function(){

	$('a.menu__item').click(function () {
    elementClick = $(this).attr('href');
    destination = $(elementClick).offset().top;
    $('body, html').animate({scrollTop: destination}, 800);
  })

// Slider

  $('.works-slider').slick({
  	dots: true,
  	prevArrow: '<button type="button" class="slick-prev"></button>',
  	nextArrow: '<button type="button" class="slick-next"></button>'
  	  	});

  if($('.menu__item').click(function () {
    $('.ham-menu').removeClass('hidden');
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

  $('.hamburger').click(function (e) {
    e.preventDefault();
    $('.ham-menu').toggleClass('hidden');
  });

});