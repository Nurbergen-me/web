 $(document).ready(function() {

 	// Hamburger menu

	// $('.hamburger').click(function (e) {
	// 	e.preventDefault();
	// 	$('.hidden-menu').toggleClass('show-menu')
	// 	$('.move').toggleClass('open-menu')
	// });

	$('.hamburger').click(function (e) {
		e.preventDefault();
		$('.show').toggleClass('d-none')
		$('.show ul').toggleClass('upper-menu')
	});

	// $('.menu__item').click(function (e) {
	// 	e.preventDefault();
	// 	$('.hidden-menu').toggleClass('show-menu')
	// 	$('.move').toggleClass('open-menu')
	// });

	// плавное перемещение страницы к нужному блоку
	$(".menu__item a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});

   });