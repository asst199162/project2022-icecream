(() => {
    const refs = {
      openMenuBtn: document.querySelector('[data-menu-open]'),
      closeMenuBtn: document.querySelector('[data-menu-close]'),
      Menu: document.querySelector('[data-menu]'),
      button: document.querySelector('[data-button]')
    };
  
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
  
    function toggleMenu() {
      refs.Menu.classList.toggle('is-hidden');
      refs.button.classList.toggle('is-hidden');
    }
  })();