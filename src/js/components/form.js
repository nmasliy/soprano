import Inputmask from 'inputmask';

const form = document.querySelector('.form');
const formBtn = document.querySelector('.form__btn');
const nameInput = document.querySelector('.form__input--name');
const phoneInput = document.querySelector('.form__input--tel');

const im = Inputmask({ mask: '+9 9(999)-999-99-99' }).mask(phoneInput);

let phoneValid = false;
let nameValid = false;

if (phoneValid && nameValid) {
  formBtn.classList.remove('is-disabled');
} else {
  formBtn.classList.add('is-disabled');
}

nameInput.addEventListener('input', (e) => {
  const regex = /[^A-Za-zА-Яа-яЁёЇїІіЄєҐґ ']/gi;

  nameInput.value = e.target.value.replace(regex, '');

  if (e.target.value.trim().length >= 2 && e.target.value.trim().length <= 20) {
    nameValid = true;
  } else {
    nameValid = false;
  }
  if (phoneValid && nameValid) {
    formBtn.classList.remove('is-disabled');
  } else {
    formBtn.classList.add('is-disabled');
  }
});

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
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (phoneValid && nameValid) {
    sendForm(e);
  }
});

const hiddenInput = document.querySelector('#application-from');

document.body.addEventListener('click', (e) => {
  const openTrigger = e.target.closest('[data-modal-open]');
  if (openTrigger) {
    hiddenInput.value = openTrigger.dataset.form;
  }
})


function sendForm(ev) {
  modals.closeAll();
  
  let formData = new FormData(ev.target);
  
  let xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        window.location.href = ev.target.dataset.thanks;
      }
    }
  };

  xhr.open('POST', 'mail.php', true);
  xhr.send(formData);

  ev.target.reset();
}

