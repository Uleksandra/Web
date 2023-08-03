// const exampleObject = {
//     ex1: false,
//     ex2: 10
// }
// function func(param){
//     param.ex1 = true
//     console.log(param)
// }

// testOperator = {
//     ...exampleObject,
//     color: 'red'
// }
// testOperator.ex1 = true
// console.log(exampleObject)
// // func(exampleObject)
// // console.log(exampleObject)
// // let c = (typeof 10 === "number")
const slider = document.querySelector(".slider");
const slides = document.querySelector(".slides");
const slideWidth = slider.clientWidth;

let currentSlide = 0;

function goToSlide(slideIndex) {
  if (slideIndex < 0 || slideIndex >= slides.children.length) return;
  currentSlide = slideIndex;
  slides.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function prevSlide() {
  goToSlide(currentSlide - 1);
}

// Добавляем обработчики для кнопок "Next" и "Prev"
document.querySelector("#nextBtn").addEventListener("click", nextSlide);
document.querySelector("#prevBtn").addEventListener("click", prevSlide);

// Можно добавить автоматическую прокрутку слайдов
// setInterval(nextSlide, 3000); // Прокрутка каждые 3 секунды
