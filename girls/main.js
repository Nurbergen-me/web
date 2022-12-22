let item = document.querySelectorAll('.item');
let wrapper = document.querySelector('.wrapper');
a = 1;

console.log(item);

wrapper.addEventListener('click', (e) => {

  let block = e.target.parentNode

  if (block.classList.contains('item')) {

    block.childNodes[3].innerHTML = a;
    block.childNodes[3].classList.add('visible');
    a++;
    if (a == 4) {
      a = 1;
      block.parentNode.classList.add('d-none');
    }


    console.log(block.childNodes[1].src.replace(/^.*[\\\/]/, ''));
  }
})