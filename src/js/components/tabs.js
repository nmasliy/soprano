import { initTabs } from "../functions/tabs";


initTabs('.services-tabs__item', '.services__tab-content');
if (window.innerWidth > 1024) {
} else {
	initMobileServices();
}

function initMobileServices() {
	const tabItems = document.querySelectorAll('.services-tabs__item');
	const contentItems = document.querySelectorAll('.services__tab-content');

	tabItems.forEach(el => {
		const id = el.dataset.tab;
		const content = document.querySelector(`.services__tab-content[data-tab="${id}"]`);

		const div = document.createElement('div');

		el.insertAdjacentElement('beforeend', content);

	})
}