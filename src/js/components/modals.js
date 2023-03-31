import SimpleModal from '../functions/SimpleModal';

const options = {
  onOpen: (modal) => {},
  onClose: (modal) => {},
  disableScroll: true,
  transition: 250,
  nested: false,
  overlayCloseAll: true,
};

window.modals = new SimpleModal(options);

modals.init();
