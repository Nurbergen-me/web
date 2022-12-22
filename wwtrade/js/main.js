 $(document).ready(function() {

    //плавное перемещение страницы к нужному блоку
    $(".menu__item").click(function () {
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
	    		nav:false
	        },
	        576:{
	            items:1,
	    		nav:false
	        },
	        1000:{
	            items:1,
	    		nav:true
	        }
	    }
  	});

   });