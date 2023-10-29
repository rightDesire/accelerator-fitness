const jurySlider = () => {
  const swiperWrapper = document.querySelector('[data-swiper]');
  const buttonPrev = document.querySelector('[data-swiper-btn-prev]');
  const buttonNext = document.querySelector('[data-swiper-btn-next]');
  const slides = document.querySelectorAll('[data-slide]');
  const slidesArray = [...slides];

  const swiper = new Swiper(swiperWrapper, {
    loop: true,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    breakpoints: {
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
        allowTouchMove: false,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 32,
        allowTouchMove: true,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
        allowTouchMove: true,
      },
    },
  });

  slidesArray.forEach((slide) => {
    slide.setAttribute('tabindex', '0');
  });
};

export {jurySlider};
