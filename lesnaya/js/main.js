 $(document).ready(function() {

    //плавное перемещение страницы к нужному блоку
    $(".side__item a, .offer__btn").click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });



    $(".slider__wrapper").owlCarousel({
	  	loop:true,
	    margin:10,
	    nav:true,
	    autoplay:true,
	    autoplayTimeout:2000,
	    autoplayHoverPause:true,
	    responsive:{
	        320:{
	            items:1,
	    		nav:true
	        },
	        576:{
	            items:1,
	    		nav:true
	        },
	        1000:{
	            items:1,
	    		nav:true
	        }
	    }
  	});

  	$(".plan__wrap").owlCarousel({
	  	loop:true,
	    margin:20,
	    nav:true,
	    dots:false,
	    // autoplay:true,
	    // autoplayTimeout:2000,
	    // autoplayHoverPause:true,
	    responsive:{
	        576:{
	            items:1,
	    		nav:true
	        },
	        991:{
	            items:2,
	    		nav:false
	        },
	        1400:{
	            items:3,
	    		nav:false
	        }
	    }
  	});

  	$('.plan__room_first').click(function () {
  		$('.plan__wrap_first').removeClass('d-none');
  		$('.plan__wrap_second').addClass('d-none');
  	});

  	$('.plan__room_second').click(function () {
  		$('.plan__wrap_first').addClass('d-none');
  		$('.plan__wrap_second').removeClass('d-none');
  	});

  	$('.contacts__ham').click(function () {
  		$('.side').toggleClass('side_slide');
  		$('body').toggleClass('scroll');
  	});

  	$('.side__item a').click(function () {
  		$('.side').removeClass('side_slide');
  		$('body').toggleClass('scroll');
  	});

  	$(window).scroll(function() {
  		$('.pros__item, .sub .col').each(function() {
  			var imagePos = $(this).offset().top;

  			var topOfWindow = $(window).scrollTop();
  			if (imagePos < topOfWindow+650) {
  				$(this).addClass("zoomIn");
  			}
  		})
  	});

  	$(window).scroll(function() {
  		$('.test .animated, .book .animated').each(function() {
  			var imagePos = $(this).offset().top;

  			var topOfWindow = $(window).scrollTop();
  			if (imagePos < topOfWindow+650) {
  				$(this).addClass("fadeInRight");
  			}
  		})
  	});

  	$(window).scroll(function() {
  		$('.why__wrap').each(function() {
  			var imagePos = $(this).offset().top;

  			var topOfWindow = $(window).scrollTop();
  			if (imagePos < topOfWindow+650) {
  				$(this).addClass("fadeInLeft");
  			}
  		})
  	});

  	$(window).scroll(function() {
  		$('.flips').each(function() {
  			var imagePos = $(this).offset().top;

  			var topOfWindow = $(window).scrollTop();
  			if (imagePos < topOfWindow+650) {
  				$(this).addClass("flipInX");
  			}
  		})
  	});

   });