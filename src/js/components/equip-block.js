if (window.innerWidth <= 1240) {
  initEquipMobile();
}

function initEquipMobile() {
  const equip = document.querySelector('.equip__list-wrapper');

  equip.addEventListener('click', (e) => {
    const item = e.target.closest('.equip__item');
    if (item) item.classList.toggle('is-active');
  });
}
