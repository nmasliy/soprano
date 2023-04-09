import Inputmask from "inputmask";

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  if (phoneValid && nameValid) {
    e.preventDefault();
    afterSendForm();
  } else {
    e.preventDefault();
  }
});

const formBtn = document.querySelector('.form__btn');
const nameInput = document.querySelector('.form__input--name');
const phoneInput = document.querySelector('.form__input--tel');

const im = Inputmask({"mask": "+(38) 999-99-99-999"}).mask(phoneInput);

let phoneValid = false;
let nameValid = false;

if (phoneValid && nameValid) {
  formBtn.classList.remove('is-disabled');
} else {
  formBtn.classList.add('is-disabled');
}

nameInput.addEventListener('input', (e) => {
  const regex = /[^A-Za-zА-Яа-яЁёЇїІіЄєҐґ']/gi;

  nameInput.value = e.target.value.replace(regex, '')

  if (e.target.value.trim().length >= 2) {
    nameValid = true;
  } else {
    nameValid = false;
  }
  if (phoneValid && nameValid) {
    formBtn.classList.remove('is-disabled');
  } else {
    formBtn.classList.add('is-disabled');
  }
})

phoneInput.addEventListener('input', (e) => {
  if (im.isComplete()) {
    phoneValid = true;
  } else {
    phoneValid = false;
  }
  if (phoneValid && nameValid) {
    formBtn.classList.remove('is-disabled');
  } else {
    formBtn.classList.add('is-disabled');
  }
})


function afterSendForm() {
  modals.close('modal-form');
  setTimeout(() => {
    modals.open('modal-thanks');
  }, 700);
}
