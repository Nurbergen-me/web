$(document).ready(function ($) {


  //toggle Post
  $(document).click(function (event) {
    if (!$(event.target).closest(".search-main, btn-wrap button, .after, .enter-btn, .register, .btn-option, .modal-body").length) {
      $('.search-post').removeClass('wid-auto');
      $('.post-btn p').removeClass('d-none');
    }
  });

  $(document).click(function (event) {
    if (!$(event.target).closest(".search-main, .search-post, .after, .enter-btn, .register, .btn-option, .modal-body").length) {
      $('.enter-btn').removeClass('wid-auto');
      $('.for-search').removeClass('wid-long');
    }
  });

  function postClose() {
    $('.search-post').addClass('wid-auto');
    $('.search-wrapper .post-btn p').addClass('d-none');
  }

  $('.search-main').click(function () {
    postClose();
    $('.enter-btn').addClass('wid-auto');
    $('.for-search').addClass('wid-long');
  });

  $('.search-after').click(function () {
    $('.enter-btn').addClass('wid-auto');
  })



  //toggle Search

  $(document).click(function (event) {
    if (!$(event.target).closest(".search-post, .after, .enter-btn, .register, .btn-option").length) {
      $('.for-search').removeClass('wid-auto');
      $('.search-input').removeClass('d-none')
      $('.search-after').removeClass('d-none');
      $('.post-wrap').addClass('d-none');
      $('.search-post').removeClass('for-search-post');
      $('.post-btn').removeClass('d-none');
      //$('.enter-btn').removeClass('wid-auto');
    }
  });
  function searchClose() {
    $('.for-search').addClass('wid-auto');
    $('.search-input').addClass('d-none')
    $('.search-after').addClass('d-none');
  }

  $('.search-post').click(function () {
    $('.post-wrap').removeClass('d-none');
    $('.search-post').addClass('for-search-post');
    //$('.post-btn').addClass('d-none');
    $('.for-search').removeClass('wid-long');
    searchClose();
  });

  $('.search-post, .post-btn, .btn-wrap button').click(function () {
    $('.enter-btn').addClass('wid-auto');
  })


  // toggle form


  $('.enter-btn').click(function (e) {
    $('.enter-btn').removeClass('wid-auto');
    $('.post-wrap').addClass('d-none');
    $('.search-post').removeClass('for-search-post');
    postClose();
    searchClose();
    $('.enter-btn').addClass('for-enter-btn');
    $('.form-wrapper').removeClass('d-none');
    if (!$(e.target).hasClass('modal_registration')) {
      setTimeout(function () {
        $('.enter-btn').addClass('for-enter');
      }, 300);
    }
  })


  $(document).click(function (event) {
    if (!$(event.target).closest(".enter-btn, .register, .btn-option, .search-hidden").length) {
      $('.enter-btn').removeClass('for-enter-btn for-enter');
      $('.form-wrapper').addClass('d-none');

    } else if ($(event.target).closest('.modal_registration').length) {
      $('.enter-btn').removeClass('for-enter-btn for-enter');
      $('.form-wrapper').addClass('d-none');
      $('.enter-btn').addClass('wid-auto');
    }
  });


  $('.ui-autocomplete-input').keydown(function () {
    if ($('.ui-autocomplete-input').val().length > 0) {
      $('.ui-autocomplete-input').addClass('focus-input');
    } else {
      $('.ui-autocomplete-input').removeClass('focus-input');
    }
  });


  // Меню 
  $('.nav-burg-icon').click(function () {
    if ($('.nav-account').hasClass('show-account')) {
      $('.nav-account').removeClass('show-account');
      $('.nav-menu').toggleClass('nav-menu-change');
    } else {
      $('.nav-hidden-wrapper').toggleClass('open-hidden-wrapper');
      $('.nav-menu').toggleClass('nav-menu-change');
    }
  });

  $(document).click(function (event) {
    if (!$(event.target).closest(".menu-wrapper").length) {
      changeAccClose()
      $('.nav-hidden-wrapper').removeClass('open-hidden-wrapper');
      $('.nav-menu').removeClass('nav-menu-change');
      $('.submenu-wrapper').removeClass('submenu-show');
      $('.nav-arrow').removeClass('nav-active');
    }
  });

  $('.nav-arrow').click(function () {
    $('.submenu-wrapper').toggleClass('submenu-show');
    $('.nav-arrow').toggleClass('nav-active');
    changeAccClose()
  })

  function changeAccClose() {
    $('.nav-account').removeClass('show-account');
    $('.nav-menu').addClass('nav-menu-change');
  }

  $('.nav-account-item').click(function (e) {
    $('.nav-account-item').removeClass('account-choosen');
    $(e.target).closest('div').addClass('account-choosen');
  });

  $(".request-hidden input[placeholder]").each(function () {
    $(this).css('width', ($(this).attr('placeholder').length - 1) * 6 + 26 + 'px');
  });

  $('.for-hidden-request').click(function () {

    let currentItem = $(this).closest('.request-item-wrapper').find('.request-hidden');

    if (currentItem.hasClass('hidden-show')) {
      currentItem.removeClass('hidden-show')
    } else {
      $('.request-hidden').removeClass('hidden-show');
      currentItem.addClass('hidden-show');
    }
  });

  // Ховер на превью картинку
  $('.product-img-prev img').hover(function () {
    $('.img-prev img').parent().removeClass('active');
    $(this).parent().addClass('active');
    var src = $(this).attr('src');
    $('.product-big-img img').attr('src', src);
  }, function () {

  });

  $('.request-head-btn').click(function () {
    $(this).css('opacity', '0');
    $('.request-heading').css('margin-right', '0px');
    $('.request-menu').css('margin-left', '-100%');
    $('.request-checking').css('margin-left', '18px');
  });

  jQuery.each($('.request-menu-item'), function() {
    if($(this).find('span').text()=='0') {
      $(this).addClass('d-none');
    }
  })

  $(document).click(function (event) {
    if (!$(event.target).closest(".choose-client, .request-head-btn, .request-stage input[type=checkbox], .request-checking input, .share-buy-sell, .ui-menu-item").length) {
      $('.request-head-btn').css('opacity', '1');
      $('.request-heading').css('margin-right', '-390px');
      $('.request-menu').css('margin-left', '0%');
      $('.request-checking').css('margin-left', '-15px');
      $('.request-stage').css('margin-left', '0px');
      $('.checkbox_share').css('display','none');
    }
  });

  $('.product-phone').click(function () {
    $(this).addClass('phone-show');
    $('.product-form').addClass('product-show');
  });

  $('.product-submit').click(function () {
    $('.product-quant').css('max-height', '70px')
  });

  $('.subs-btn').click(function () {
    if ($(this).hasClass('change-btn')) {
      $(this).removeClass('change-btn');
      $(this).text('Подписаться');

    } else {
      $(this).addClass('change-btn');
      $(this).text('Отписаться');
    }
  });


  // $(document).click(function (event) {
  //   if (!$(event.target).closest(".product-phone").length) {
  //     $('.product-phone').removeClass('phone-show');
  //   }
  // });
})