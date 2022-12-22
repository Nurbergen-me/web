
new WOW().init();

//Scroll top

document.querySelector('.menu').addEventListener('click', (e) => {
  e.preventDefault();
  elementClick = e.target.getAttribute("href");
  destination = document.querySelector(elementClick).offsetTop;
  window.scroll({
    top: destination,
    behavior: 'smooth'
  });
});

document.querySelector('.side-menu').addEventListener('click', (e) => {
  e.preventDefault();
  elementClick = e.target.getAttribute("href");
  destination = document.querySelector(elementClick).offsetTop;
  window.scroll({
    top: destination,
    behavior: 'smooth'
  });
});

// sticky menu

document.querySelector('.header__ham').addEventListener('click', () => {
  document.querySelector('.header__ham').classList.toggle('open');
  document.querySelector('.side-menu').classList.toggle('opened');
})

document.querySelector('.side-menu').addEventListener('click', () => {
  document.querySelector('.header__ham').classList.remove('open');
  document.querySelector('.side-menu').classList.remove('opened');
})

// Show works

let worksWrap = document.querySelector('.works__wrap');
let worksItem = document.querySelector('.works__item');
let worksBtn = document.querySelector('.works__btn');


let show = 3;
let start = 0;

worksBtn.addEventListener('click', function () {
  show += 3;
  start += 3;
  console.log(show);
  showImages();
})

function showImages() {
  for (let i = start; i < show; i++) {
    worksWrap.innerHTML += '<div class=works__item><a href=' + data[i].full + ' class=works__second-link ><img src=' + data[i].source + ' class=works__img><div class=works__overlay>  <div class=works__name>' + data[i].title + '</div><div class=works__type>' + data[i].type + '</div><a href=' + data[i].full + ' class=works__link>Смотреть <img src=img/arrow-right.png></a> </div></a></div>'
  }
}

showImages();





//Timer with session

var countDownDate = 0;
if (!sessionStorage.getItem("timer")) {
  countDownDate = new Date().getTime() + (1000 * 60 * 4);
  document.querySelector('.offer__timer').classList.remove('hidden');

} else {
  countDownDate = sessionStorage.getItem('timer');
}

// Update the count down every 1 second
var x = setInterval(function () {

  var now = new Date().getTime();
  var distance = countDownDate - now;
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector('.timer__m').innerHTML = minutes;
  document.querySelector('.timer__s').innerHTML = seconds;
  sessionStorage.setItem("timer", countDownDate);

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    minutes = 0;
    seconds = 00;
    document.querySelector('.timer__m').innerHTML = 0;
    document.querySelector('.timer__s').innerHTML = 0;
    document.querySelector('.offer__timer').classList.add('d-none');
  }

  //document.querySelector('.hidden-time').value = minutes + ':' + seconds;
  console.log(document.querySelector('.hidden-time').value = minutes + ':' + seconds);
}, 1000);




