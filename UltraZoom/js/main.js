$(document).ready(function(){

	$('a.go-to').click(function (e) {
	e.preventDefault();
    elementClick = $(this).attr('href');
    destination = $(elementClick).offset().top;
    $('body, html').animate({scrollTop: destination}, 800);
  });


});