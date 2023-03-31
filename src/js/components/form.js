const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  modals.close('modal-form');

  setTimeout(() => {
    modals.open('modal-thanks');
  }, 700);
});
