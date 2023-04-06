import SmoothScroll from 'smooth-scroll';

const scroll = new SmoothScroll('a[href*="#"]', {
  speedAsDuration: true,
  duration: 500,
  offset: function (anchor, toggle) {
		if (toggle.closest('.menu__item')) {
			return 170;
		} else {
			return 0;
		}
	},
});
