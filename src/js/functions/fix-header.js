(function () {
	const header = document.querySelector('.header');

	window.addEventListener('scroll', (e) => {
		if (window.scrollY >= 50) {
			header.classList.add('is-fixed');
		}
		else {
			header.classList.remove('is-fixed');
		}
	})
})();
