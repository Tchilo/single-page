const btnLeft = document.getElementById('left')
const btnRight = document.getElementById('right')
const slides = document.querySelectorAll('.slide')

//max length of slides 

let maxSlide = slides.length - 1;

let curSlide = 0;

btnRight.addEventListener('click', ()=> {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;

})

})




console.log(slides);