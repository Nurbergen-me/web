// Слайдер
let numElems = 0

$(window).ready(function () {
  jQuery.each($('.request-slider-wrapper'), function () {
    numElems++;
    imgLen = $(this).find('img').length;
    stageLen = $(this).siblings().find('.request-stage').length;

    let txt = $(this).siblings().find('.request-days span')[0];

    if (txt) {
      var numb = txt.textContent.match(/\d/g);
      numb = numb.join("");
      let percent = (1 - numb / 30) * 100;
      $(this).siblings().find('.days-before').css('width', percent + '%');
      if (numb <= 2) {
        $(this).siblings().find('.request-days-line').addClass('days-red');
      }
    }

    let catName = $(this).siblings().find('.status-category');
    console.log(catName.attr('data-title', catName.text()))

    if (imgLen == 0) {
      $(this).siblings().find('.request-data-name').css('top', '30px');
      $(this).siblings().find('.request-data-name p').css('width', '220px');
      $(this).siblings().find('.request-for-price').css('position', 'absolute');
      $(this).siblings().find('.request-for-price').css('bottom', '8px');
      $(this).siblings().find('.request-for-price').css('height', '0px');
      $(this).css('margin-right', '0px');
      $(this).addClass('d-none');
    }

    if (stageLen > 1) {
      $(this).siblings().find('.request-data-name p').css('width', '220px');
      $(this).siblings().find('.request-stage').addClass('request-opacity');
      $(this).siblings().find('.request-for-price').css('position', 'absolute');
      $(this).siblings().find('.data-hidden-city').css('display', 'block');
      $(this).siblings().find('.data-city').css('display', 'none');
      $(this).addClass('d-none');


      jQuery.each($(this).siblings().find('.image-wrapper'), function () {
        let innerImgLen = $(this).find('img').length;
        if (innerImgLen > 0) {
          let ex = 0;
          for (let i = 0; i < innerImgLen - 1; i++) {
            ex++;
            $(this).siblings().append('<span><a data-fancybox="gallery' + numElems + '" href="image/cars/' + ex + '.jpg"></a></span>')
          }

          $(this).closest('.request-stage').find('.request-hidden-images').css('display', 'block');

          let firstSrc = $(this).children().children().last().attr('src');

          $(this).closest('.request-stage').find('.request-data-name a').attr('data-fancybox', 'gallery' + numElems);
          $(this).closest('.request-stage').find('.request-data-name a').attr('href', '/' + firstSrc);

        }
        numElems++;
      })
    }

    ex = 0;
    for (let i = 0; i < imgLen; i++) {
      ex++;
      $(this).find('.slider-control').append('<span><a data-fancybox="gallery' + numElems + '" href="image/cars/' + ex + '.jpg"></a></span>')
    }

    sliderLen = $(this).children().length;
    $(this).find('span').css('width', 100 / imgLen + '%')
  })


  var slideNow = 1;
  $('.slider-control span').hover(function () {
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
        '-ms-transform': 'translateX(-' + translate + 'px)',
      });
    }
    slideNow = circleIndex + 1;
  }, function () {
    //sdf
  });
})