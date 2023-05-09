import { initTabs } from '../functions/tabs';


if (window.innerWidth <= 1024) {
  initMobileServices();
} else {
  initTabs('.services-tabs__item', '.services__tab-content');
}

function initMobileServices() {
  const tabItems = document.querySelectorAll('.services-tabs__item');

  removeActiveClasses();
  
  tabItems.forEach((el) => {
    const id = el.dataset.tab;
    const content = document.querySelector(
      `.services__tab-content[data-tab="${id}"]`
    );

    el.insertAdjacentElement('beforeend', content);

    el.addEventListener('click', function(e) {
      if (e.target.closest('.services-tabs__name')) {
        if (e.target.closest('.services-tabs__item.is-active')) {
          el.classList.remove('is-active');
          content.classList.remove('is-active');
        } else {
          const activeEl =  document.querySelector('.services-tabs__item.is-active');
          const activeContent =  document.querySelector('.services__tab-content.is-active');
  
          activeEl?.classList.remove('is-active');
          activeContent?.classList.remove('is-active');
          
          el.classList.add('is-active');
          content.classList.add('is-active');
        }
        
      }
    })

  });

  function removeActiveClasses() {
    const activeEl =  document.querySelector('.services-tabs__item.is-active');
    const activeContent =  document.querySelector('.services__tab-content.is-active');
    activeEl.classList.remove('is-active');
    activeContent.classList.remove('is-active');
  }
}
