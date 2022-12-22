$(document).ready(function ($) {

  // Modal 

  $('.register-submit').click(function () {
    $('#register-modal').modal('hide');
  })

  $('.nav-link span').click(function () {
    $('.hidden-wrapper .tab-pane').removeClass('active');
  });

  $('.first-link').click(function () {
    $('.nav-first').addClass('active');
  });

  $('.location-link').click(function () {
    $('.nav-location').addClass('active');
  })

  $(document).click(function (event) {
    if (!$(event.target).closest(".search-main").length) {
      $('.search-input').val('');
      $('.main-search__thumb').css('display', 'none');
      $('.for-search').removeClass('search-long')
    }
  });

  $('.city-thumbs').click(function (e) {
    if ($(e.target).is('span')) {
      $('.location-link span').text($(e.target).text())
      $('.location-link').addClass('choosen');
      $('.nav-location').removeClass('active');
      $('.city-thumbs').css('display', 'none');
      $('.city-input').val('');
      if ($('.location-link').hasClass('choosen') && $('.category-link').hasClass('choosen')) {
        $('.search-after').addClass('search-after-colored');
      } else {
        $('.search-after').removeClass('search-after-colored')
      }
    }
  })

  $('.location-link .cancel-choose').click(function () {
    $('.location-link').removeClass('choosen');
    $('.location-link span').text('Местоположение');
    $('.nav-location').addClass('active');
  });

  $('.app-wrapper button').click(function () {
    $('.app-wrapper button').removeClass('active');
    $(this).addClass('active');
    $('.first-link span').text($(this).text())
    $('.first-link').addClass('choosen');
    $('.nav-first').removeClass('active');
    $('.first-link img').attr('src', $(this).data('src'));
  });

  $('.first-link .cancel-choose').click(function () {
    $('.first-link').removeClass('choosen');
    $('.nav-first').addClass('active');
  })

  //dropdown

  $('.category-link').click(function () {
    $('.nav-category').addClass('active');
  })

  $('.cat-changer p, .category-link .cancel-choose').click(function (event) {
    $('.category-link span').text('Категория');
    $('.category-link').removeClass('choosen');
    $('.nav-category').addClass('active');

    $('.cat-changer p').removeClass('active');
    $('.element-1 p').removeClass('active');
    $('.element-2 p').removeClass('active');
    $('.element-3 p').removeClass('active');
    $('.element-4 p').removeClass('active');
    $(this).addClass('active');
    var listOne = $(this).data('block');
    $('.list-element div').animate({width: 0}, 200)
    setTimeout(function () {
      $('.list-element div').css('display', 'none');
      $('.list-element div p').removeClass('active');
      $('.element-1 .' + listOne).css('display', 'block');
      $('.element-1 .' + listOne).animate({width: 193}, 200);
    }, 150);
  });
  $('.element-1 p').click(function (event) {
    $('.element-1 p').removeClass('active');
    $('.element-2 p').removeClass('active');
    $('.element-3 p').removeClass('active');
    $(this).addClass('active');
    var listOne = $(this).data('block');
    $('.element-2 div').animate({width: 0}, 200);
    $('.element-3 div').animate({width: 0}, 200);
    setTimeout(function () {
      $('.element-2 div').css('display', 'none');
      $('.element-3 div').css('display', 'none');
      $('.element-2 .' + listOne).css('display', 'block');
      $('.element-2 .' + listOne).animate({width: 200}, 200);
    }, 150);
  });
  $('.element-2 p').click(function (event) {
    $('.element-2 p').removeClass('active');
    $('.element-3 p').removeClass('active');
    $(this).addClass('active');
    var listOne = $(this).data('block');
    $('.element-3 div').animate({width: 0}, 200);
    setTimeout(function () {
      $('.element-3 div').css('display', 'none');
      $('.element-3 .' + listOne).css('display', 'block');
      $('.element-3 .' + listOne).animate({width: 350}, 200);
    }, 150);
  });
  $('.element-3 p').click(function (event) {
    $('.element-3 p').removeClass('active');
    $(this).addClass('active');
    $('.category-link span').text($(this).text());
    $('.category-link').addClass('choosen');
    $('.nav-category').removeClass('active');
    if ($('.location-link').hasClass('choosen') && $('.category-link').hasClass('choosen')) {
      $('.search-after').addClass('search-after-colored');
    } else {
      $('.search-after').removeClass('search-after-colored')
    }
  });

  $('.app-cat-wrapper .element-3 p').click(function () {
    $('.element-3 p').removeClass('active');
    $(this).addClass('active');
    $('.app-changer .part .naming').text($(this).text());
    $('.part').addClass('choosen');
    $('.app-cat-wrapper').addClass('d-none');
    $('.first-row, .second-row').removeClass('d-none');
  })

  $('.app-wrapper p').click(function (event) {
    $('.app-wrapper p').removeClass('active');
    $(this).addClass('active');
  });


  $('.cancel-choose').click(function () {
    console.log('sdf')
  })

  // open hiddden menu

  $('.search-after').click(function () {
    $('.for-search').toggleClass('search-hidden');
    $('.search-post').toggleClass('d-none');
    //$('.hidden-wrapper').toggleClass('d-none');
    $('.search-after').toggleClass('search-after-rot');
  })

  $(document).click(function (event) {
    if (!$(event.target).closest(".search-hidden").length) {
      $('.for-search').removeClass('search-hidden');
      $('.search-post').removeClass('d-none');
      //$('.hidden-wrapper').addClass('d-none');
      $('.search-after').removeClass('search-after-rot');
    }
  });

})