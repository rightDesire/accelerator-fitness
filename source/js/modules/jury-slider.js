export const initJurySlider = (isLoop, breakpointSettings) => {
  const swiperWrapper = document.querySelector('[data-jury-swiper]');
  const buttonPrev = document.querySelector('[data-jury-swiper-btn-prev]');
  const buttonNext = document.querySelector('[data-jury-swiper-btn-next]');

  const vpTabletAndMobile = 1365;

  const slideActive = () => {
    const slides = swiperWrapper.querySelectorAll('[data-jury-slide]');
    const slidesArray = [...slides];

    const slideOnClick = (event) => {
      const slideActiveContainer = event.target.closest('[data-jury-slide-container]');
      // Убедиться, что событие click обрабатывается только при клике на сам элемент
      if (slideActiveContainer) {
        const slideActiveWrapper = slideActiveContainer.querySelector('[data-jury-slide-content]');
        // Меняем стили в зависимости от нажатия на активный/неактивный слайд
        if (!slideActiveContainer.classList.contains('is-active')) {
          slideActiveContainer.style.justifyContent = 'center';
          slideActiveContainer.style.backgroundColor = 'rgba(16, 38, 84, 0.89)';
          slideActiveWrapper.style.order = 3;
          slideActiveWrapper.style.opacity = 1;
          slideActiveContainer.classList.add('is-active');
        } else {
          slideActiveContainer.style.justifyContent = 'end';
          slideActiveContainer.style.backgroundColor = 'transparent';
          slideActiveWrapper.style.order = 1;
          slideActiveWrapper.style.opacity = 0;
          slideActiveContainer.classList.remove('is-active');
        }
      }
    };

    slidesArray.forEach((slide) => {
      slide.addEventListener('click', slideOnClick);
    });
  };

  // При планшетном и мобильном разрешениях
  if (window.innerWidth <= vpTabletAndMobile) {
    slideActive();
  }

  return new window.Swiper(swiperWrapper, {
    loop: isLoop,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    breakpoints: breakpointSettings,
  });
};
