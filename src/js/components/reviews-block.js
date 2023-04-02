const MOBILE_BREAKPOINT = 1024;

function initReviewsAnimations() {
	const decorBox = document.querySelector('.reviews__decor');
	const stars = document.querySelector('.reviews__decor-stars');

	if (window.innerWidth <= MOBILE_BREAKPOINT) {
		stars.classList.add('is-animated');
		return;
	}

	decorBox.addEventListener('mouseover', initStarsAnimation);
	
	function initStarsAnimation() {
		stars.classList.add('is-animated');
		decorBox.removeEventListener('mouseover', initStarsAnimation);
	}
	
}

initReviewsAnimations();