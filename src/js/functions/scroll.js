(function () {
	const header = document.querySelector('.header');
	const scrollTopBtn = document.querySelector('.scroll-top');

	window.addEventListener('scroll', (e) => {
		if (window.scrollY >= 50) {
			header.classList.add('is-fixed');
		}
		else {
			header.classList.remove('is-fixed');
		}
		
		if (window.scrollY >= 500) {
			scrollTopBtn.classList.add('is-active');
		}
		else {
			scrollTopBtn.classList.remove('is-active');
		}
	})
})();
