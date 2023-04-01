(function () {
  const select = document.querySelector('.header__languages');
  const dropdown = select.querySelector('.header__languages-list');
  const current = select.querySelector('.header__languages-current');

  select.addEventListener('click', () => {
    select.classList.toggle('is-active');
  });
})();
