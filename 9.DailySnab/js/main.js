jQuery(document).ready(function($) {

	$(document).click(function (event) {
    if (!$(event.target).closest(".search-btn-wrapper").length) {
      $('.search-btn-wrapper').removeClass('active-search');
    }
  });


	// Кнопка поиска
	$('.search-btn input').click(function(event) {
		if( $('.search-btn').hasClass('rolled-btn') ){
			$('.search-btn').removeClass('rolled-btn');
			$('.search-btn-wrapper').removeClass('col-1');
			$('.search-btn-wrapper').removeClass('offset-3');
			$('.search-btn-wrapper').addClass('col-5');
			$('.search-btn-wrapper').addClass('offset-1');
			$('.cyan-btn').removeClass('active-app');
			$('.enter-btn').addClass('rolled-btn');
			$('.login-form-wrapper').css('display', 'none');
			$('.enter-btn-wrapper').removeClass('offset-1');
			$('.enter-btn-wrapper').removeClass('col-2');
			$('.enter-btn-wrapper').removeClass('col-3');
			$('.enter-btn-wrapper').addClass('col-1');
			$('.enter-btn-wrapper').addClass('offset-2');
			$('.enter-btn').removeClass('login-active');
			$('.active-login-form').removeClass('active-login-form');
		}
		if( !$('.search-btn').hasClass('rolled-btn') ){
			if( !$('.cyan-btn').hasClass('active-rolled') ){
				$('.cyan-btn').addClass('rolled-btn');	
			}
			if( !$('.enter-btn').hasClass('active-rolled') ){
				$('.enter-btn').addClass('rolled-btn');	
			}
			$('.cyan-btn-wrapper').removeClass('col-5');
			$('.cyan-btn-wrapper').addClass('col-1');
			if( !$('.search-btn-wrapper').hasClass('searchActive') && !$('.search-btn-wrapper').hasClass('col-7') && !$('.main-search-wrapper').hasClass('settings-active') ){
				$('.search-btn-wrapper').addClass('offset-3');
				$('.search-btn-wrapper').addClass('active-search');
			}	
		}
	});
	$('.search-btn span.after').click(function(event) {
		if( !$('.search-btn-wrapper').hasClass('active-search') ){
			$(this).addClass('active');
			$('.search-btn-wrapper').addClass('active-search-setings');
			$('.cyan-btn-wrapper').animate({opacity: 0}, 150);
			setTimeout(function(){
				$('.cyan-btn-wrapper').css('display', 'none');
				$('.search-btn-wrapper').removeClass('col-5');
				$('.search-btn-wrapper').addClass('col-10');
				$('.search-btn').addClass('active');
				$('.main-search-wrapper').addClass('settings-active');
			},150);	
		}
	});
	$('.setting-nav p').click(function(event) {
		$('.setting-nav p').removeClass('active');
		$(this).addClass('active');
		if( !$(this).hasClass('ad') ){
			$('.app-wrapper').slideUp();
		}
		if( $(this).hasClass('ad') ){
			setTimeout(function(){
				$('.app-wrapper').slideDown();
			}, 500);
		}
		if( !$(this).hasClass('cat') ){
			$('.cat-wrapper').slideUp();
		}
		if( $(this).hasClass('cat') ){
			setTimeout(function(){
				$('.cat-wrapper').slideDown();
			}, 500);
		}
		if( !$(this).hasClass('location') ){
			$('.setting-changer').removeClass('loc-active');
			$('.location-wrapper').slideUp();
		}
		if( $(this).hasClass('location') ){
			setTimeout(function(){
				$('.setting-changer').addClass('loc-active');
				$('.location-wrapper').slideDown();
			}, 500);
		}
	});
	$('.cat-changer p').click(function(event) {
		$('.cat-changer p').removeClass('active');
		$(this).addClass('active');
		var listOne = $(this).data('block');
		$('.list-element div').animate({width: 0}, 200)
		setTimeout(function(){
			$('.list-element div').css('display', 'none');	
			$('.list-element div p').removeClass('active');	
			$('.element-1 .' + listOne).css('display', 'block');
			$('.element-1 .' + listOne).animate({width: 193}, 200);
		}, 150);
	});
	$('.element-1 p').click(function(event) {
		$('.element-1 p').removeClass('active');
		$(this).addClass('active');
		var listOne = $(this).data('block');
		$('.element-2 div').animate({width: 0}, 200);
		setTimeout(function(){
			$('.element-2 div').css('display', 'none');	
			$('.element-2 .' + listOne).css('display', 'block');
			$('.element-2 .' + listOne).animate({width: 215}, 200);
		}, 150);
	});
	$('.element-2 p').click(function(event) {
		$('.element-2 p').removeClass('active');
		$(this).addClass('active');
		var listOne = $(this).data('block');
		$('.element-3 div').animate({width: 0}, 200);
		setTimeout(function(){
			$('.element-3 div').css('display', 'none');	
			$('.element-3 .' + listOne).css('display', 'block');
			$('.element-3 .' + listOne).animate({width: 193}, 200);
		}, 150);
	});
	$('.element-3 p').click(function(event) {
		$('.element-3 p').removeClass('active');
		$(this).addClass('active');
		var listOne = $(this).data('block');
		$('.element-4 div').animate({width: 0}, 200);
		setTimeout(function(){
			$('.element-4 div').css('display', 'none');	
			$('.element-4 .' + listOne).css('display', 'block');
			$('.element-4 .' + listOne).animate({width: 210}, 200);
		}, 150);
	});
	$('.app-wrapper p').click(function(event) {
		$('.app-wrapper p').removeClass('active');
		$(this).addClass('active');
	});
	// Кнопка размещения объявлений
		$('.cyan-btn').click(function(event) {
			if( $(this).hasClass('rolled-btn') ){
				$('.active-login-form').removeClass('active-login-form');
				$('.cyan-btn').removeClass('rolled-btn');
				$('.cyan-btn-wrapper').removeClass('col-1');
				$('.cyan-btn-wrapper').addClass('col-5');
				$('.cyan-btn').addClass('active-app');
				$('.login-form-wrapper').css('display', 'none');
				$('.enter-btn').removeClass('login-active');
				$('.enter-btn').addClass('rolled-btn');
				$('.enter-btn-wrapper').removeClass('col-3');
				$('.enter-btn-wrapper').removeClass('offset-1');
				$('.enter-btn-wrapper').removeClass('col-2');
				$('.enter-btn-wrapper').addClass('col-1');
				$('.enter-btn-wrapper').addClass('offset-2');
				$('.search-btn').addClass('rolled-btn');
				$('.search-btn-wrapper').removeClass('offset-1');
				$('.search-btn-wrapper').removeClass('col-5');
				$('.search-btn-wrapper').addClass('col-1');
				$('.search-btn-wrapper').addClass('offset-3');
			}
			if( !$(this).hasClass('rolled-btn') ){
				$(this).addClass('active-app');
				$('.enter-btn').addClass('rolled-btn');
				$('.enter-btn-wrapper').removeClass('offset-1');
				$('.enter-btn-wrapper').removeClass('col-2');
				$('.enter-btn-wrapper').addClass('col-1');
				$('.enter-btn-wrapper').addClass('offset-2');
				$('.search-btn').addClass('rolled-btn');
				$('.search-btn-wrapper').removeClass('offset-1');
				$('.search-btn-wrapper').removeClass('col-5');
				$('.search-btn-wrapper').addClass('col-1');
				$('.search-btn-wrapper').addClass('offset-3');
			}
		});
	// Кнопка входа
		$('.enter-btn').click(function(event) {
			if( $(this).hasClass('rolled-btn') && !$(this).hasClass('register') ){
				$('.app-form-wrapper').animate({opacity: 0}, 300);
				setTimeout(function(){
					$('.app-form-wrapper').removeClass('active-app');
					$('.main-search-wrapper').css('display', 'flex');
					$('.main-search-wrapper').animate({opacity: 1}, 300);
					setTimeout(function(){
						$('.enter-btn').addClass('login-active');
						$('.login-wrapper').removeClass('align-items-center');
						$('.search-btn').addClass('rolled-btn');
						$('.cyan-btn').addClass('rolled-btn');
						$('section.search').addClass('active-login-form');
						$('.search-btn-wrapper').removeClass('col-1');
						$('.search-btn-wrapper').removeClass('offset-3');
						$('.search-btn-wrapper').addClass('col-5');
						$('.search-btn-wrapper').addClass('offset-1');
						setTimeout(function(){
							$('.login-form-wrapper').slideDown();
							$('.cyan-btn').removeClass('active-app');
							$('.enter-btn').removeClass('rolled-btn');
							$('.enter-btn').parent().removeClass('offset-2');
							$('.enter-btn').parent().removeClass('col-1');
							$('.enter-btn').parent().addClass('col-3');	
						}, 150)
					}, 150)
				}, 150)
			}
			if( $('.enter-btn').hasClass('login-active') ){
				$('.login-form-wrapper').slideUp();
				setTimeout(function(){
					$('.enter-btn').removeClass('login-active');
					$('.enter-btn').parent().addClass('offset-1');
					$('.enter-btn').parent().addClass('col-2');
					$('.enter-btn').parent().removeClass('col-3');
					$('.search-btn').removeClass('rolled-btn');
					$('.cyan-btn').removeClass('rolled-btn');
					$('section.search').removeClass('active-login-form');
					$('.login-wrapper').addClass('align-items-center');	
				}, 300)
			}
			if( !$(this).hasClass('rolled-btn') && !$(this).hasClass('login-active') && !$('.main-search-wrapper').hasClass('settings-active') ){
				$('.enter-btn').addClass('login-active');
				$('.login-wrapper').removeClass('align-items-center');
				$('.cyan-btn').addClass('rolled-btn');
				$('.search-btn').addClass('rolled-btn');
				setTimeout(function(){
					$('section.search').addClass('active-login-form');
					$('.login-form-wrapper').slideDown();
					$('.enter-btn').parent().removeClass('offset-1');
					$('.enter-btn').parent().removeClass('col-2');
					$('.enter-btn').parent().addClass('col-3');	
				}, 250)
			}
		});
	// Регистрация
		$('.login-form-button').click(function(event) {
			$('section.search').css('opacity', '0');
			$('.register-wrapper').css('display', 'block');
			$('.register-wrapper').animate({opacity: 1}, 300);
			$('.enter-btn').addClass('rolled-btn');
			$('.enter-btn').removeClass('login-active');
			$('.enter-btn-wrapper').removeClass('offset-1');
			$('.enter-btn-wrapper').removeClass('col-3');
			$('.enter-btn-wrapper').addClass('col-1');
			$('.enter-btn-wrapper').addClass('offset-2');
			$('.login-form-wrapper').css('display', 'none');
			$('.enter-btn').addClass('register');
		});
		$('.register-wrapper .close').click(function(event) {
			$('.register-wrapper').animate({opacity: 0}, 300);
			$('.register-wrapper').css('display', 'none');
			$('section.search').animate({opacity: 1}, 150);
			$('section.search').removeClass('active-login-form');
			$('.enter-btn').removeClass('rolled-btn');
			$('.cyan-btn').removeClass('rolled-btn');
			$('.search-btn').removeClass('rolled-btn');
			$('.enter-btn-wrapper').removeClass('offset-2');
			$('.enter-btn-wrapper').removeClass('col-1');
			$('.enter-btn-wrapper').addClass('col-2');
			$('.enter-btn-wrapper').addClass('offset-1');
			$('.enter-btn').removeClass('register');
		});
		$('.reg-changer span').click(function(event) {
			$('.reg-changer span').removeClass('active');
			$(this).addClass('active');
			if ( $(this).hasClass('pro') ) {
				$('.wrapper-text span').removeClass('active');
				$('.wrapper-text .pro').addClass('active');
			}else{
				$('.wrapper-text span').removeClass('active');
				$('.wrapper-text .eff').addClass('active');
			}
		});
	// Добавить компанию
		$('.add-company').click(function(event) {
			$(this).animate({opacity: 0}, 250);
			$('.add-company-wrapper').removeClass('offset-1');
			$('.wel-content').removeClass('align-items-center');
			$(this).css('display', 'none');
			setTimeout(function(){
				$(this).css('display', 'none');
				$('form.add-company').css('display', 'block');
				$('form.add-company').animate({opacity: 1}, 250);
				$('.wel-end').addClass('wel-active');
			})
		});
	// Меню 
		// Смена аккаунта
			$('.changeacc a').click(function(event) {
				event.preventDefault();
				$('.menu-wrapper').removeClass('active-menu');
				$('.nav-profile-info').removeClass('d-inline-flex');
				$('.menu-wrapper').animate({width: 107}, 250);
				$('.menu-wrapper').addClass('active-changer');
				setTimeout(function(){
					$('.accountChanger-wrapper').css('display', 'block');
					$('.accountChanger-wrapper').animate({width: 257}, 250)
				}, 200);
			});
			$('.profile-list a').click(function(event) {
				event.preventDefault();
				$('.profile-list a').removeClass('active-acc');
				$(this).addClass('active-acc');
			});
		$('.menu-wrapper').click(function(event) {
			if ( !$(this).hasClass('active-changer') ) {
				$('.menu-wrapper').animate({width: 360}, 250);
				setTimeout(function(){
					$('.menu-wrapper').addClass('active-menu');
					$('.nav-profile-info').addClass('d-inline-flex');
				}, 150);	
			}
		}); 
		$(document).mouseup(function (e){
			var div = $(".menu-wrapper");
			if (!div.is(e.target)
			    && div.has(e.target).length === 0) {
				div.removeClass('active-menu');
				$('.nav-profile-info').removeClass('d-inline-flex');
				div.animate({width: 107}, 250);
			}
			var accchanger = $(".accountChanger-wrapper");
			if (!accchanger.is(e.target)
			    && accchanger.has(e.target).length === 0) {
				div.removeClass('active-changer');
				accchanger.animate({width: 0}, 250);
				setTimeout(function(accchanger){
					$(".accountChanger-wrapper").css('display', 'none');
				}, 200);
			}
		});
		$('.list img').click(function(event) {
			$(this).toggleClass('active');
			$('.name-wrapper').toggleClass('active');
			$('.user-company-logotype').slideToggle(1);
			$('.menu-wrapper nav').toggleClass('active-navigation');
		});
	// Кнопки внутри размещения
		$('.app-changer span').click(function(event) {
			$('.app-changer span').removeClass('active');
			$(this).addClass('active');
			if( $(this).hasClass('part') ){
				$('.first-row, .second-row').addClass('active');
				$('.first-row, .second-row').animate({opacity: 1}, 300);
				$('.none-req').addClass('req');
				$('.req').removeClass('none-req');
			}
		});
		$('.app').click(function(event) {
			$('.main-search-wrapper').animate({opacity: 0}, 300);
			setTimeout(function(){
				$('.main-search-wrapper').css('display', 'none');
				$('.app-form-wrapper').addClass('active-app');
				$('.app-form-wrapper').animate({opacity: 1}, 300);
			}, 350)
		});
	// Поиск
		$('#search').keypress(function(event) {
			if( $(this).val().length == '2' ){
				if( !$('.search-btn-wrapper').hasClass('col-7') ){
					$('.search-btn-wrapper').removeClass('col-5');
					$('.search-btn-wrapper').addClass('col-9');
					$('.search-btn-wrapper').removeClass('offset-3');
					$('.search-btn-wrapper').addClass('offset-1');
				}
				$('.search-btn-wrapper').addClass('searchActive');
		        var value = $(this).val().toLowerCase();
			    $(".search-result_wrapper p").filter(function() {
			    	$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
	  			});			
	  			setTimeout(function(){
					$('.error').hide();
					$('.search-result_wrapper p').each(function(index, el) {
						var ths = $(this);
						if( ths.css('display') == 'block' ){
							$('.error').hide();
							$('.search-result_wrapper').slideDown();
							return false;
						}else{
							$('.search-result_wrapper').hide();
						}
					});
				}, 500)
			}
		});
		// Города
			$('#sity').keypress(function(event) {
				if( $(this).val().length == '2' ){
			        var value = $(this).val().toLowerCase();
				    $(".sity-result p").filter(function() {
				    	$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
		  			});			
		  			setTimeout(function(){
						$('.error').hide();
						$('.sity-result p').each(function(index, el) {
							var ths = $(this);
							if( ths.css('display') == 'block' ){
								$('.error').hide();
								$('.sity-result').slideDown();
								return false;
							}else{
								$('.sity-result').hide();
							}
						});
					}, 500)
				}
			});
			$('.sity-result p').click(function(event) {
				var text = $(this).text();
				$('#sity').val(text);
				$('.sity-result').slideUp();
			});
	// Ховер на превью картинку
	$('.img-prev img').hover(function() {
		$('.img-prev img').parent().removeClass('active');
		$(this).parent().addClass('active');
		var src = $(this).attr('src');
		$('.img img').attr('src', src);
	}, function() {
		
	});
	// Ховер на карту поиска
	$('.search-card').hover(function() {
		$(this).addClass('active-card');
		$(this).children('.hover-element').animate({opacity: 1}, 200);
		$(this).children('.card-posted').animate({opacity: 1}, 200);
		$(this).children().children().children('.slider-control').animate({opacity: 1}, 200);
	}, function() {
		$(this).children('.hover-element').animate({opacity: 0}, 250);
		$(this).children('.card-posted').animate({opacity: 0}, 250);
		$(this).children().children().children('.slider-control').animate({opacity: 0}, 250);
		setTimeout(function(){
			$(this).removeClass('active-card');
		}, 300)
	});
	var slideNow = 1;
	// Слайдер
	$('.slider-control span').hover(function() {
		translate = $('img.activeSlide').width();
		var circleIndex = $(this).index();
		$('.slider-control span').removeClass('active');
		$(this).addClass('active');
		// Перемещение слайдера
		if (circleIndex + 1 != slideNow) {
			translate = translate * circleIndex;
	      	$(this).parent().prev().children().css({
            'transform': 'translateX(-' + translate + 'px)',
            '-webkit-transform': 'translateX(-' + translate + 'px)',
            '-ms-transform': 'translateX(-' + translate + 'px)',});
	    }
	    slideNow = circleIndex + 1;
	}, function() {
		/* Stuff to do when the mouse leaves the element */
	});
	var resultHeight = $('.active-result').height();
	var resultHiddenHeight = $('.result-list').height();
	$('.show-next').click(function(event) {
		if( !$('.search-cards').hasClass('thisOffer') ){
			$(this).toggleClass('active');
			height = resultHeight + resultHiddenHeight;
			if ( $(this).hasClass('active') ) {
				$('.search-result').animate({height: height+'px'}, 750);
				$(this).children('p').html('Скрыть предложения');
			}else{
				$('.search-result').animate({height: resultHeight}, 750);
				if( $('.search-cards').hasClass('thisOffer') ){
					$(this).children('p').html('Дать предложение');
				}else{
					$(this).children('p').html('6 предложений');	
				}
				
			}	
		}
	});
	if( !$('.search-cards').hasClass('thisOffer') ){
		$('.search-result').height(resultHeight);
	}
	// Временно
	$('#register-form').submit(function(event) {
		event.preventDefault();
		$('.register-wrapper').slideUp();
		$('.welcome-wrapper').slideDown();
		$('.welcome-wrapper').animate({opacity: 1}, 200);
	});
	$('.btn-begin').click(function(event) {
		$('.welcome-wrapper').slideUp();
		$('section.search').animate({opacity: 1}, 200);
		$('section.search').removeClass('active-login-form');
	});
});