import { initTabs } from '../functions/tabs';

initTabs('.services-tabs__item', '.services__tab-content');

if (window.innerWidth <= 1024) {
  initMobileServices();
}

function initMobileServices() {
  const tabItems = document.querySelectorAll('.services-tabs__item');

  tabItems.forEach((el) => {
    const id = el.dataset.tab;
    const content = document.querySelector(
      `.services__tab-content[data-tab="${id}"]`
    );

    el.insertAdjacentElement('beforeend', content);
  });
}
