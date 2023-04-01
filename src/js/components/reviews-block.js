const MOBILE_BREAKPOINT = 1024;

function initReviewsAnimations() {
	if (window.innerWidth <= MOBILE_BREAKPOINT) return;

	const decorBox = document.querySelector('.reviews__decor');
	const stars = document.querySelector('.reviews__decor-stars');

	decorBox.addEventListener('mouseover', initStarsAnimation);
	
	function initStarsAnimation() {
		stars.classList.add('is-animated');
		decorBox.removeEventListener('mouseover', initStarsAnimation);
	}
	
}

initReviewsAnimations();