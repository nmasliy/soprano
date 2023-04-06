import '../functions/menu';
import '../functions/scroll';
import '../functions/languages-select';
import { getHeaderHeight } from '../functions/header-height';

getHeaderHeight();

if (window.innerWidth <= 1024) {
  initScrollToServices();
}

function initScrollToServices() {
  const menuItems = document.querySelectorAll('.menu__item--services a');

  menuItems.forEach(el => {
    el.addEventListener('click', function() {
      const id = el.getAttribute('href').replace('#', '');
      const tab = document.querySelector(`.services-tabs__item[id="${id}"]`);
      
      tab.click();
    })
  })
}