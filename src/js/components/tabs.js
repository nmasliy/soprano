import { initTabs } from '../functions/tabs';


if (window.innerWidth <= 1024) {
  initMobileServices();
} else {
  initTabs('.services-tabs__item', '.services__tab-content');
}

function initMobileServices() {
  const tabItems = document.querySelectorAll('.services-tabs__item');

  tabItems.forEach((el) => {
    const id = el.dataset.tab;
    const content = document.querySelector(
      `.services__tab-content[data-tab="${id}"]`
    );

    el.insertAdjacentElement('beforeend', content);

    el.addEventListener('click', function() {
      el.classList.toggle('is-active');
      content.classList.toggle('is-active');
    })
  });
}
