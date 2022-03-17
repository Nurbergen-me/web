
$(document).ready(function(){
//
//   // $('.cookie').addClass('active');
//
//   // $('.cookie__btn').click(function() {
//   //   $('.cookie').removeClass('active');
//   // })
//
//
//   $('.nav__link, .hidden').hover(function() {
//     $('.hidden').toggleClass('open')
//
//     if($(this).hasClass('nav__link')) {
//         $('.hidden__menu').text("");
//         let currentItems = [];
//
//         if(currentMenuItem = $(this).data('name')) {
//           currentItems = menu[currentMenuItem][0].children;
//         }
//
//         if (currentItems.length > 0) {
//             $(this).children(".nav__arrow").toggleClass("active")
//
//             currentItems.forEach(function (item) {
//
//               let itemLink = `<a href="${item.url}" class="hidden__link">${item.title}</a>`;
//               let itemSubmenu = '';
//
//               if(item.inner_children && item.inner_children.length > 0) {
//                 item.inner_children.forEach(function (child) {
//                   itemSubmenu += `<a href="${child.url}" class="hidden__link">${child.title}</a>`;
//                 })
//               }
//
//               $(".hidden__menu").append(`<div class="hidden__item">${itemLink}`+ (itemSubmenu ? `<ul class="hidden__list">${itemSubmenu}</ul>` : ''));
//
//             })
//
//             // $('.hidden__item').hover(function() {
//             //   console.log($(this))
//             //   console.log(currentItems[0].inner_children);
//             // })
//
//
//         } else {
//             $('.hidden').removeClass('open')
//         }
//     }
// })
//
//   $(".gallery__img").click(function() {
//     var overlay = $("<div id='overlay'></div>");
//     overlay.appendTo("body");
//     var imgLocation = $(this).attr("src");
//     var enlargedImg = $("<img src=" + imgLocation + ">")
//     enlargedImg.appendTo(overlay);
//     var button = $("<button class='close'>&times;</button>");
//     button.appendTo(overlay);
//     button.click(function(){
//       overlay.remove();
//     });
//   });
//
//   $('.team__btn').click(function() {
//     let aboutText = $(this).siblings(".team__about")
//
//     if(aboutText.hasClass('active')) {
//       aboutText.removeClass('active')
//       $(this).text("Read more")
//
//     } else {
//       aboutText.addClass('active')
//       $(this).text("Close")
//     }
//   })
//
//
  $('.main__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left-icon.svg" class="projects__left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right-icon.svg" class="projects__right"></button>',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          arrows: true,
        }
      },
      {
        breakpoint: 578,
        settings: {
          slidesToShow: 1,
          arrows: true,
        }
      }
    ]
  });

  $('.news__slider').slick({
    // prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.svg" class="projects__left"></button>',
    // nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.svg" class="projects__right"></button>',
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 578,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.resent__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left-icon.svg" class="projects__left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right-icon.svg" class="projects__right"></button>',
    infinite: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrow: true,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrow: true,
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.post__posts-wrap').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });


  $('.ham').click(function() {
    $('.side-bar').toggleClass("show")
    $('.ham').toggleClass("open")
    $('body').toggleClass("overflow-hidden")
  })

  $('.ham__close').click(function() {
    $('.side-bar').removeClass('show')
  })

  $('.side-bar li').click(function (e) {

    if(!$(this).hasClass('active') && !$(this).hasClass('single')  ) {
      e.preventDefault();
      $('.side-bar li, .side-bar__item').removeClass('active')

    } else {
      $('.side-bar').removeClass("show")
      $('.ham').removeClass("open")
      $('body').removeClass("overflow-hidden")
    }

    $(this).toggleClass('active')
    $(this).children('.side-bar__item').toggleClass('active')
  })

  $('.header__form').click(function () {
    $(this).addClass('active');
  })

  $(document).click(function (event) {
    var $target = $(event.target);
    if (!$target.closest('.header__form').length || $target.hasClass('close')) {
      $('.header__form').removeClass('active');
    }
  });

  $('.header__form .close').click(function() {
    $('.header__search').val('');
    $('.header__form').removeClass('active');
  });

})

// FIle input

var inputs = document.querySelectorAll( '.form__file_input' );
Array.prototype.forEach.call( inputs, function( input )
{
  var label	 = input.nextElementSibling,
      labelVal = label.innerHTML;

  input.addEventListener( 'change', function( e )
  {
    var fileName = '';
    if( this.files && this.files.length > 1 ) {
      fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
    }  else {
      fileName = e.target.value.split( "C:\\fakepath\\" ).pop();
    }
    if( fileName ) {
      label.innerHTML = fileName;
    } else {
      label.innerHTML = labelVal;
    }
  });
});

