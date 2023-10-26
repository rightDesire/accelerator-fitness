const cardPrice = () => {
  const tabsList = document.querySelector('[data-tabs]');
  const tabs = tabsList.querySelectorAll('[data-tab]');
  const tabsArray = [...tabs];
  const cards = document.querySelector('[data-cards]');
  const priceCoach = cards.querySelector('[data-price="with-coach"]');
  const priceDaytime = cards.querySelector('[data-price="daytime"]');
  const priceAllDay = cards.querySelector('[data-price="all-day"]');

  // Меняет цену абонементов в зависимости от нажатого таба
  const priceChange = (tab) => {
    const tabName = tab.dataset.tab;

    switch (tabName) {
      case '6-month':
        priceCoach.textContent = '30 000';
        priceDaytime.textContent = '10 200';
        priceAllDay.textContent = '16 200';
        break;

      case '12-month':
        priceCoach.textContent = '60 000';
        priceDaytime.textContent = '20 400';
        priceAllDay.textContent = '32 400';
        break;

      default:
        priceCoach.textContent = '5000';
        priceDaytime.textContent = '1700';
        priceAllDay.textContent = '2700';
        break;
    }
  };

  const onTabClick = (event) => {
    // Удаляет у всех табов класс active
    tabsArray.forEach((tab) => {
      tab.classList.remove('subscription__btn--active');
    });

    // Добавляет табу, на который был совершен клик, класс
    event.target.classList.add('subscription__btn--active');

    priceChange(event.target);
  };

  tabsArray.forEach((tab) => {
    tab.addEventListener('click', onTabClick);
  });
};

export {cardPrice};
