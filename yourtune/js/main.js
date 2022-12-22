 $(document).ready(function() {

    $('.nav-bar__hamburger').click(function () {
        $('.menus').toggleClass('d-block')
    });

    $('.menus__item a').click(function () {
        $('.menus').removeClass('d-block')
    });

    //плавное перемещение страницы к нужному блоку
    $(".offer__mouse-link").click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });

   });