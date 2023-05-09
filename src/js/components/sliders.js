import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);

function initMobileSlider(parent, wrapper, items, breakpoint = 1024, options) {
  if (!options) {
    options = {
      slidesPerView: 'auto',
      spaceBetween: 10,
    }
  }

  if (window.innerWidth <= breakpoint) {
    const $parent = document.querySelector(parent);
    const $wrapper = $parent.querySelector(wrapper);
    const $items = $wrapper.querySelectorAll(items);

    $parent.classList.add('swiper');
    $wrapper.classList.add('swiper-wrapper');
    $wrapper.classList.remove(wrapper.replace('.', ''));
    $items.forEach((slide) => slide.classList.add('swiper-slide'));

    const swiper = new Swiper(parent, options);
  }
}

// initMobileSlider('.hero__benefits-wrapper', '.hero-benefits', '.hero-benefits__item', 570, {
//   slidesPerView: 'auto',
//   spaceBetween: 10,
//   speed: 1000,
//   autoplay: {
//     delay: 2000
//   }
// });
initMobileSlider('.equip__list-wrapper', '.equip__list', '.equip__item', 1240, {
  slidesPerView: 'auto',
  spaceBetween: 12,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
initMobileSlider('.reviews__right', '.reviews__items', '.reviews__item', 1024, {
  slidesPerView: 'auto',
  spaceBetween: 12,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});