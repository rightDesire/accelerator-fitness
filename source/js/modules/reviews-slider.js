export const initReviewSlider = (isLoop, breakpointSettings) => {
  const swiperWrapper = document.querySelector('[data-reviews-swiper]');
  const buttonPrev = document.querySelector('[data-reviews-swiper-btn-prev]');
  const buttonNext = document.querySelector('[data-reviews-swiper-btn-next]');
  const slides = document.querySelectorAll('[data-reviews-slide]');
  const slidesArray = [...slides];

  slidesArray.forEach((slide) => {
    slide.setAttribute('tabindex', '0');
  });

  return new window.Swiper(swiperWrapper, {
    loop: isLoop,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    breakpoints: breakpointSettings,
  });
};
