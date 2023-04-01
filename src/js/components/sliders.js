import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);

// const swiper = new Swiper('.certificates__line', {
// 	direction: 'vertical',
// 	spaceBetween: 20,
//   speed: 5000,
//   loop: true,
// 	simulateTouch: false,
//   //allowTouchMove: false, // можно ещё отключить свайп
//   autoplay: {
//     delay: 0,
//     disableOnInteraction: false // или сделать так, чтобы восстанавливался autoplay после взаимодействия
//   },
// 	slidesPerView: 'auto',
// 	freeMode: true,
// });