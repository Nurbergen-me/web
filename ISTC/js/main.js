const menu = {
    "about": [
      {
        "title": "About",
        "url": "about",
        "children": [
          {
            "title": "Project 65",
            "url": "/project55"
          },
          {
            "title": "Project Scientists",
            "url": "/project_scientists"
          },
          {
            "title": "Institutions",
            "url": "/institutions"
          },
          {
            "title": "Project 65",
            "url": "/project55"
          },
          {
            "title": "Project Scientists",
            "url": "/project_scientists"
          },
          {
            "title": "Institutions",
            "url": "/institutions"
          }
        ]
      }
    ],
    "activities": [
      {
        "title": "Activities",
        "url": "activities",
        "children": [
          {
            "title": "Project 65",
            "url": "/project55"
          },
          {
            "title": "Project Scientists",
            "url": "/project_scientists"
          },
          {
            "title": "Institutions",
            "url": "/institutions"
          },
          {
            "title": "Project 65",
            "url": "/project55"
          },
          {
            "title": "Project Scientists",
            "url": "/project_scientists"
          }
        ]
      }
    ],
    "partners": [
      {
        "title": "Partners",
        "url": "partners",
        "children": [
          {
            "title": "Project 65",
            "url": "/project55"
          },
          {
            "title": "Project Scientists",
            "url": "/project_scientists"
          },
          {
            "title": "Institutions",
            "url": "/institutions"
          },
          {
            "title": "Institutions",
            "url": "/institutions"
          },
        ]
      }
    ],
    "connect": [
      {
        "title": "Connect",
        "url": "connect",
        "children": [
        ]
      }
    ]
  }
  $(document).ready(function(){

    var cookie = getCookie("cookiename");

    if (!cookie) {
        // no cookie
        $('.cookie').addClass('active');

       } else {
        // have cookie
       }

    $('.cookie__btn').click(function() {
        $('.cookie').removeClass('active');
    })


    $('.nav__link, .hidden').hover(function() {
        $('.hidden').toggleClass('open')

        if($(this).hasClass('nav__link')) {
            $('.hidden__menu').text("");

            let currentMenuItem = $(this).data('name');
            let currentItems = menu[currentMenuItem].children;
            console.log(currentItems);

            if (currentItems.length > 0) {
                $(this).children(".nav__arrow").toggleClass("active")

                currentItems.forEach(function (item) {
                    $('.hidden__menu').append(`<a href="${item.url}" class="hidden__item">${item.title}</a>`);
                })
            } else {
                $('.hidden').removeClass('open')
            }
        }
    })

    $('.search__open-advanced').click(function() {
        $('.advanced').toggleClass("open")
        $(this).children(".nav__arrow").toggleClass("active")
    })

    $('.admin__link_exit').click(function() {
        $(this).children("span").text("Log In")
    })

    $('.nav__login').click(function() {

        if($('.admin').hasClass("open")) {
            // $(this).children("span").text("Log In")
        } else {
            // $(this).children("span").text("Инжу Белескызы")
        }
        $('.admin').toggleClass("open")
    })


    $('.projects__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.svg" class="projects__left"><img src="img/arrow-left-blue.svg" class="projects__left_active"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.svg" class="projects__right"><img src="img/arrow-right-blue.svg" class="projects__right_active"></button>',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    });

    $('.partners__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.svg" class="projects__left"><img src="img/arrow-left-blue.svg" class="projects__left_active"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.svg" class="projects__right"><img src="img/arrow-right-blue.svg" class="projects__right_active"></button>',
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    });


    function getCookie(name) {
        var dc = document.cookie;
        var prefix = name + "=";
        var begin = dc.indexOf("; " + prefix);
        if (begin == -1) {
            begin = dc.indexOf(prefix);
            if (begin != 0) return null;
        }
        else
        {
            begin += 2;
            var end = document.cookie.indexOf(";", begin);
            if (end == -1) {
            end = dc.length;
            }
        }
        // because unescape has been deprecated, replaced with decodeURI
        //return unescape(dc.substring(begin + prefix.length, end));
        return decodeURI(dc.substring(begin + prefix.length, end));
    }
})
