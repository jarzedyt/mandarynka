

const width = 1192;
const animationSpeed = 2000;
const pause = 3000;
let currentSlide = 1;

const promoSlider = document.querySelector("#promo__slider");
const sliderList = document.querySelectorAll(".slider_list");
const sliderItem = document.querySelectorAll(".slider__item");

let interval;

const sliderStart = () => {
  interval = setInterval(() => {
    sliderList.animate(
      { "margin-left": "-=" + width },
      animationSpeed,
      () => {
        currentSlide++;
        if (currentSlide === (sliderList.length - 2)) {
          currentSlide = 1;
          sliderList.css("margin-left", 0);
        }
      }
    );
  }, pause);
};

const sliderStop = () => {
  clearInterval(interval);
};

sliderStart();