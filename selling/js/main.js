 $(document).ready(function() {

    //плавное перемещение страницы к нужному блоку
    $(".menu__item").click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });

     $(".desk__slider").owlCarousel({
	  	loop:true,
	    margin:20,
	    nav:false,
	    autoplay:false,
	    autoplayTimeout:2000,
	    autoplayHoverPause:true,
	    URLhashListener:true,
        startPosition: 'URLHash',
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
	    		nav:false
	        }
	    }
  	});

   });