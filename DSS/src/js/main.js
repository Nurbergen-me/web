$(document).ready(function(){

	// $('.nav__item a').click(function () {
	//     elementClick = $(this).attr('href');
	//     destination = $(elementClick).offset().top;
	//     $('body, html').animate({scrollTop: destination}, 800);
 //  });

	$('.nav__item a').click(function(){

	    $('.nav, .nav__content, .nav__trigger').removeClass('is-active');
	    // $('body').removeClass('fp-viewing-1, fp-viewing-2, fp-viewing-0')
	});


	$('.price__btn').click(function(){
		$(this).siblings( ".price__text" ).toggleClass('d-none');
		$(this).siblings( ".price__text" ).toggleClass('d-block');

		if($('.price__text').hasClass('d-block')) {
			
			$('.price__name').addClass('d-none');
			} else {
				$('.price__name').removeClass('d-none');
		}
		
	})

	  var $isAnimatedSecond = $('.second .is-animated'),
      $isAnimatedSecondSingle = $('.second .is-animated__single'),
      $isAnimatedThird = $('.third .is-animated'),
      $isAnimatedThirdSingle = $('.third .is-animated__single'),
      $isAnimatedFourth = $('.fourth .is-animated'),
      $isAnimatedFourthSingle = $('.fourth .is-animated__single'),
      $isAnimatedFifth = $('.fifth .is-animated'),
      $isAnimatedFifthSingle = $('.fifth .is-animated__single'),
      $isAnimatedSixth = $('.sixth .is-animated'),
      $isAnimatedSixthSingle = $('.sixth .is-animated__single'),
      $isAnimatedSeventh = $('.seventh .is-animated'),
      $isAnimatedSeventhSingle = $('.seventh .is-animated__single'),
      $isAnimatedEights = $('.eights .is-animated'),
      $isAnimatedEightsSingle = $('.eights .is-animated__single');


	$('#fullpage').fullpage({
		//options here
		menu: '#myMenu',
		autoScrolling:true,
		responsiveWidth: 900,
		scrollHorizontally: true,
		sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
		navigation: true,
    onLeave: function(index, nextIndex, direction) {
    
      /**
      * use the following condition: 
      *
      *   if( index == 1 && direction == 'down' ) {
      *
      * if you haven't enabled the dot navigation
      * or you aren't interested in the animations that occur 
      * when you jump (using the dot navigation) 
      * from the first section to another sections 
      */
      
      // first animation
      if( index == 1 && nextIndex == 2 ) { 
        $isAnimatedSecond.addClass('animated fadeInUpBig'); 
        $isAnimatedSecond.eq(0).css('animation-delay', '.3s');
        $isAnimatedSecond.eq(1).css('animation-delay', '.6s');
        $isAnimatedSecond.eq(2).css('animation-delay', '.9s');
        $isAnimatedSecond.eq(3).css('animation-delay', '1.2s');
        $isAnimatedSecond.eq(4).css('animation-delay', '1.5s');
        $isAnimatedSecondSingle.addClass('animated fadeInLeft').css('animation-delay', '.2s');
      }

    /**
      * use the following condition: 
      *
      *   else if( index == 2 && direction == 'down' ) {
      *
      * if you haven't enabled the dot navigation
      * or you aren't interested in the animations that occur 
      * when you jump (using the dot navigation) from the first section to the third one 
      */
      
      // second animation
      else if( ( index == 1 || index == 2 ) && nextIndex == 3 ) {
        $isAnimatedThird.eq(0).addClass('animated fadeInRight').css('animation-delay', '.3s'); 
        $isAnimatedThird.eq(1).addClass('animated fadeInRight').css('animation-delay', '.6s');
        $isAnimatedThird.eq(2).addClass('animated fadeInRight').css('animation-delay', '.9s');
        $isAnimatedThird.eq(3).addClass('animated fadeInRight').css('animation-delay', '1.2s');
        $isAnimatedThird.eq(4).addClass('animated fadeInRight').css('animation-delay', '1.5s');
        $isAnimatedThird.eq(5).addClass('animated fadeInRight').css('animation-delay', '1.8s');
        $isAnimatedThirdSingle.addClass('animated fadeInLeft').css('animation-delay', '.2s');
      }

      
     /**
      * use the following condition:
      *
      *   else if( index == 3 && direction == 'down' ) {
      *
      * if you haven't enabled the dot navigation
      * or you aren't interested in the animations that occur 
      * when you jump (using the dot navigation) 
      * from the first or second section to the fourth one 
      */
      
      // third animation
      else if( ( index == 1 || index == 2 || index == 3 ) && nextIndex == 4 ) {
        $isAnimatedFourth.addClass('animated zoomIn').css('animation-delay', '.6s');
        $isAnimatedFourthSingle.addClass('animated fadeInLeft').css('animation-delay', '.2s');
      }

       else if( ( index == 1 || index == 2 || index == 4 ) && nextIndex == 5 ) {
        $isAnimatedFifth.eq(0).addClass('animated fadeInRight').css('animation-delay', '.3s'); 
        $isAnimatedFifth.eq(1).addClass('animated fadeInLeft').css('animation-delay', '.6s');
        $isAnimatedFifth.eq(2).addClass('animated fadeInUp').css('animation-delay', '.9s');
        $isAnimatedFifthSingle.addClass('animated fadeInLeft').css('animation-delay', '.2s');
      }

       else if( ( index == 1 || index == 2 || index == 4  || index == 5) && nextIndex == 6 ) {
        $isAnimatedSixth.eq(0).addClass('animated fadeInRight').css('animation-delay', '.3s'); 
        $isAnimatedSixth.eq(1).addClass('animated fadeInRight').css('animation-delay', '.6s');
        $isAnimatedSixth.eq(2).addClass('animated fadeInRight').css('animation-delay', '.9s');
        $isAnimatedSixth.eq(3).addClass('animated fadeInRight').css('animation-delay', '1.2s');
        $isAnimatedSixthSingle.addClass('animated fadeInLeft').css('animation-delay', '.2s');
      }

       else if( ( index == 1 || index == 2 || index == 4  || index == 5 || index == 6) && nextIndex == 7 ) {
        $isAnimatedSeventh.eq(0).addClass('animated bounceInRight').css('animation-delay', '.3s'); 
        $isAnimatedSeventh.eq(1).addClass('animated bounceInRight').css('animation-delay', '.6s');
        $isAnimatedSeventh.eq(2).addClass('animated bounceInRight').css('animation-delay', '.9s');
        $isAnimatedSeventh.eq(3).addClass('animated bounceInRight').css('animation-delay', '1.2s');
        $isAnimatedSeventh.eq(4).addClass('animated bounceInRight').css('animation-delay', '1.5s');
        $isAnimatedSeventhSingle.addClass('animated fadeInLeft').css('animation-delay', '.2s');
      }

      else if( ( index == 1 || index == 2 || index == 4  || index == 5 || index == 6 || index == 7) && nextIndex == 8 ) {
        $isAnimatedEights.eq(0).addClass('animated bounceInRight').css('animation-delay', '.3s'); 
        $isAnimatedEights.eq(1).addClass('animated bounceInRight').css('animation-delay', '.6s');
        $isAnimatedEights.eq(2).addClass('animated bounceInRight').css('animation-delay', '.9s');
        $isAnimatedEights.eq(3).addClass('animated bounceInRight').css('animation-delay', '1.2s');
        $isAnimatedEights.eq(4).addClass('animated bounceInRight').css('animation-delay', '1.5s');
        $isAnimatedEightsSingle.addClass('animated fadeInLeft').css('animation-delay', '.2s');
      }


    }
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);


	var navigation = {
	    // Variables
	    $nav: document.querySelector('.nav'),
	    $navTrigger: document.querySelector('.nav__trigger'),
	    $navContent: document.querySelector('.nav__content'),
	    $navList: document.querySelector('.nav__list'),
	    transitionEnd: 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',

	    init: function init() {
	        var self = this;

	        // Handle the transitions
	        self.$navTrigger.addEventListener('click', function () {
	            if (!self.$navTrigger.classList.contains('is-active')) {
	                // .nav--trigger active
	                self.$navTrigger.classList.add('is-active');

	                // .nav active
	                if (!self.$nav.classList.contains('is-active')) {
	                    self.$nav.classList.add('is-active');
	                    self.$nav.addEventListener('transitionend', function (e) {
	                        if (e.propertyName == 'width' && self.$navTrigger.classList.contains('is-active')) {
	                            // .nav__content active
	                            self.$navContent.classList.add('is-active');
	                        }
	                    });
	                } else {
	                    self.$navContent.classList.add('is-active');
	                }

	                // no-csstransitions fallback
	                if (document.documentElement.classList.contains('no-csstransitions')) {
	                    self.$navContent.classList.add('is-active');
	                }
	            } else {
	                // .nav--trigger inactive
	                self.$navTrigger.classList.remove('is-active');

	                // .nav__content inactive
	                if (self.$navContent.classList.contains('is-active')) {
	                    self.$navContent.classList.remove('is-active');
	                    self.$navContent.addEventListener('transitionend', function (e) {
	                        if (e.propertyName == 'opacity' && !self.$navTrigger.classList.contains('is-active')) {
	                            // .nav inactive
	                            self.$nav.classList.remove('is-active');
	                        }
	                    });
	                } else {
	                    self.$nav.classList.remove('is-active');
	                }

	                // no-csstransitions fallback
	                if (document.documentElement.classList.contains('no-csstransitions')) {
	                    self.$nav.classList.remove('is-active');
	                }
	            }
	        });
	    }
	};

	navigation.init();


	//preloader

	var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');



    //animation

     $(window).scroll(function() {
    	$('.results__item, .audit__box').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+600) {
	            $(this).addClass("fadeInRight");
	        }
    	});
    	$('.method__item').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+600) {
	            $(this).addClass("fadeInRight");
	        }
    	});

    });




});