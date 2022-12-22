
// Search thumbnails

let div = document.querySelector('.main-search__thumb');
let input = document.querySelector('.search-input');
let locInput = document.querySelector('.city-input');
let locThumb = document.querySelector('.city-thumbs');


let xhr = new XMLHttpRequest();

let p = new Promise((resolve, reject) => {
  xhr.open('GET', 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json');

  xhr.responseType = 'json';
  xhr.onload = () => {
    resolve(xhr.response);
  }
  xhr.send();
});
let arr = [];
let val = '';

p.then((resp) => {
  for (city of resp) {
    arr[arr.length] = city.name;
  };
  arr.sort();

});


input.addEventListener('keydown', function (e) {
  button = e.key;
  if (e.keyCode == 8) {
    button = '';
  }
  val = input.value + button;
  letter = val.toLowerCase().split('');
  n = letter.length;
  if (!button) {
    n = n - 1;
  }
  if (n == 0) {
    div.innerHTML = '';
  }
  if (n != 0) {
    document.querySelector('.main-search__thumb').style.display = 'block';
    document.querySelector('.for-search').classList.add('search-long')
  } else {
    document.querySelector('.main-search__thumb').style.display = 'none';
    document.querySelector('.for-search').classList.remove('search-long')
  }
  //console.log(n);
  emp = '';
  let newAr = [];
  let k = 0;

  function call(array, kl) {
    newAr = [];
    for (let i = 0; i < array.length; i++) {
      letterEl = array[i].toLowerCase().split('');

      if (n > letterEl.length) {
        div.innerHTML = '';
      } else if (n == kl + 1 && letter[kl] == letterEl[kl]) {
        emp += '<span>' + array[i] + '</span>';
        div.innerHTML = emp;

      } else if (letter[kl] == letterEl[kl]) {
        newAr[newAr.length] = array[i];
      }
    }
    if (n > k + 1) {
      k++;
      call(newAr, k);
    }
  }
  call(arr, k);
})

locInput.addEventListener('keydown', function (e) {
  div = locThumb;
  input = locInput;

  button = e.key;
  if (e.keyCode == 8) {
    button = '';
  }
  val = input.value + button;
  letter = val.toLowerCase().split('');
  n = letter.length;
  if (!button) {
    n = n - 1;
  }
  if (n == 0) {
    div.innerHTML = '';
  }
  if (n != 0) {
    document.querySelector('.city-thumbs').style.display = 'block';
  } else {
    document.querySelector('.city-thumbs').style.display = 'none';
  }
  //console.log(n);
  emp = '';
  let newAr = [];
  let k = 0;

  function call(array, kl) {
    newAr = [];
    for (let i = 0; i < array.length; i++) {
      letterEl = array[i].toLowerCase().split('');

      if (n > letterEl.length) {
        div.innerHTML = '';
      } else if (n == kl + 1 && letter[kl] == letterEl[kl]) {
        emp += '<span>' + array[i] + '</span>';
        div.innerHTML = emp;

      } else if (letter[kl] == letterEl[kl]) {
        newAr[newAr.length] = array[i];
      }
    }
    if (n > k + 1) {
      k++;
      call(newAr, k);
    }
  }
  call(arr, k);
})



$(document).ready(function ($) {


  //toggle Post
  $(document).click(function (event) {
    if (!$(event.target).closest(".search-main, .after, .enter-btn, .register").length) {
      $('.search-post').removeClass('wid-auto');
      $('.post-btn p').removeClass('d-none')
    }
  });

  function postClose() {
    $('.search-post').addClass('wid-auto');
    $('.post-btn p').addClass('d-none');
  }

  $('.search-main').click(function () {
    postClose();
  });




  //toggle Search

  $(document).click(function (event) {
    if (!$(event.target).closest(".search-post, .after, .enter-btn, .register").length) {
      $('.for-search').removeClass('wid-auto');
      $('.search-input').removeClass('d-none')
      $('.search-after').removeClass('d-none');
      $('.post-wrap').addClass('d-none');
      $('.search-post').removeClass('for-search-post');
      $('.post-btn').removeClass('d-none');
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
    $('.post-btn').addClass('d-none');
    searchClose();
  });






  // toggle form

  $(document).click(function (event) {
    if (!$(event.target).closest(".enter-btn").length) {
      $('.enter-btn').removeClass('for-enter-btn for-enter');
      $('.form-wrapper').addClass('d-none');
    }
  });

  $('.enter-btn').click(function () {
    postClose();
    searchClose();
    $('.enter-btn').addClass('for-enter-btn');
    $('.form-wrapper').removeClass('d-none');
    setTimeout(function () {
      $('.enter-btn').addClass('for-enter');
    }, 300);
  })



  // open post request

  $('.post-wrap button').click(function () {
    if ($(this).hasClass('post-request')) {
      $('.app-form-wrapper').addClass('request-form');
      $('.button-wrapper button').text('Разместить заявку');
      $('.none-req').addClass('req');

    } else if ($(this).hasClass('post-post')) {
      $('.app-form-wrapper').addClass('post-form');
      $('.button-wrapper button').text('Разместить объявление');
      $('.none-req').removeClass('req');
    }
    $('.search-wrapper').addClass('d-none');
    $('.btn-option').removeClass('hidden');
    $('.btn-option').removeClass('d-none');
  });

  $('.app-q-wrapper-before').click(function () {
    if ($('.app-form-wrapper').hasClass('request-form')) {
      $('.app-form-wrapper').removeClass('request-form');
      $('.app-form-wrapper').addClass('post-form');
      $('.button-wrapper button').text('Разместить объявление');
      $('.none-req').removeClass('req');

    }
    else if ($('.app-form-wrapper').hasClass('post-form')) {
      $('.app-form-wrapper').removeClass('post-form');
      $('.app-form-wrapper').addClass('request-form');
      $('.button-wrapper button').text('Разместить заявку');
      $('.none-req').addClass('req');
    }
  })

  $(document).click(function (event) {
    if (!$(event.target).closest(".btn-option, button").length) {
      $('.search-wrapper').removeClass('d-none');
      $('.app-form-wrapper').removeClass('request-form');
      $('.app-form-wrapper').removeClass('post-form');
      //console.log(event.target);
    }
  });


  $('.app-changer span').click(function () {
    $('.app-cat-wrapper, .app-location-input').addClass('d-none');
    $('.app-changer span').removeClass('active');
    $(this).addClass('active');

    if ($(this).hasClass('part')) {
      $('.app-cat-wrapper').removeClass('d-none');
      $('.none-req').addClass('req');
    } else if ($(this).hasClass('location')) {
      $('.app-location-input').removeClass('d-none');
    }
  });

  // Меню 
  // Смена аккаунта
  $('.changeacc a').click(function (event) {
    event.preventDefault();
    $('.menu-wrapper').removeClass('active-menu');
    $('.nav-profile-info').removeClass('d-inline-flex');
    $('.menu-wrapper').animate({width: 107}, 250);
    $('.menu-wrapper').addClass('active-changer');
    setTimeout(function () {
      $('.accountChanger-wrapper').css('display', 'block');
      $('.accountChanger-wrapper').animate({width: 257}, 250)
    }, 200);
  });
  $('.profile-list a').click(function (event) {
    event.preventDefault();
    $('.profile-list a').removeClass('active-acc');
    $(this).addClass('active-acc');
  });
  $('.menu-wrapper').click(function (event) {
    if (!$(this).hasClass('active-changer')) {
      $('.menu-wrapper').animate({width: 360}, 250);
      setTimeout(function () {
        $('.menu-wrapper').addClass('active-menu');
        $('.nav-profile-info').addClass('d-inline-flex');
      }, 150);
    }
  });
  $(document).mouseup(function (e) {
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
      setTimeout(function (accchanger) {
        $(".accountChanger-wrapper").css('display', 'none');
      }, 200);
    }
  });
  $('.list img').click(function (event) {
    $(this).toggleClass('active');
    $('.name-wrapper').toggleClass('active');
    $('.user-company-logotype').slideToggle(1);
    $('.menu-wrapper nav').toggleClass('active-navigation');
  });

  // $('#register-modal').on('click', '.register-submit', function () {
  //   var name = $('.new-user-name').val();
  //   var mail = $('.new-user-mail').val();
  //   var phone = $('.new-user-phone').val();

  //   console.log(name, mail, phone);
  // });
})