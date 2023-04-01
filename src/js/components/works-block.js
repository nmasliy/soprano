import { initShowMore } from '../functions/show-more';
import '@interactjs/auto-start'
import '@interactjs/actions/drag'
import '@interactjs/modifiers'
import interact from '@interactjs/interact'

initShowMore('.works__btn-more', '.works__content');


const workItems = document.querySelectorAll('.works__item');

workItems.forEach(el => {
	const image = el.querySelector('.works__img--after');
	const dragItem = interact(el.querySelector('.works__drag'));
	const dragIcon = el.querySelector('.works__drag-icon');
	const dragLine = el.querySelector('.works__drag-line');
	const captionBefore = el.querySelector('.works__captions-item--before');
	const captionAfter = el.querySelector('.works__captions-item--after');

	dragItem
  .draggable({ 
    origin: 'self',                   
    modifiers: [
      interact.modifiers.restrict({
        restriction: 'self'           
      }),
    ],
		
    listeners: {
      move (event) {                 
        const sliderWidth = interact.getElementRect(image).width
        const value = (event.pageX / sliderWidth);
				let percent = value * 100;

				if ((value * 100) > 98) {
					percent = 97.5;
					return;
				} else if ((value * 100) <= 2) {
					percent = 2.5;
					return;
				}
				dragIcon.style.left = percent + '%';
				dragLine.style.left = percent + '%';
				image.style.clipPath = `polygon(0 0, ${percent}% 0, ${percent}% 100%, 0% 100%)`;

				if (percent < 50) {
					captionBefore.classList.add('is-active');
					captionBefore.classList.add('is-current');
					captionAfter.classList.remove('is-active');
					captionAfter.classList.remove('is-current');
				} else {
					captionBefore.classList.remove('is-active');
					captionBefore.classList.remove('is-current');
					captionAfter.classList.add('is-active');
					captionAfter.classList.add('is-current');
				}
      }
    }
  })
})


