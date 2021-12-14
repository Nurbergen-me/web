

$(document).ready(function(){ 

  const myCarousel = new Carousel(document.querySelector(".carousel"), {
    // Options
  });

  // #4 Grouped Images
  Fancybox.bind("#fancybox-1 .obhod__slider-img", {
    groupAll: true,
  });

  // $('.obhod__slider').slick({
  //   prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.svg" class="projects__left"></button>',
  //   nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.svg" class="projects__right"></button>',
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   // autoplay: true,
  //   // autoplaySpeed: 5000,
  //   dots: true,
  //   responsive: [
  //     {
  //       breakpoint: 991,
  //       settings: {
  //         slidesToShow: 1,
  //       }
  //     },
  //     {
  //       breakpoint: 578,
  //       settings: {
  //         slidesToShow: 1,
  //       }
  //     }
  //   ]
  // });

})
  