
  (() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
    const button = document.querySelector('[data-button]');
    
  
    const toggleMenu = () => {
      const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      button.getAttribute('aria-expanded') === 'true' || false;
      button.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-open');
      button.classList.toggle('is-hidden');
      
  
      const scrollLockMethod = !isMenuOpen
        ? 'disableBodyScroll'
        : 'enableBodyScroll';
      bodyScrollLock[scrollLockMethod](document.body);
    };
  
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
    button.addEventListener('click', toggleMenu);
  
    // Закрываем мобильное меню на более широких экранах
    // в случае изменения ориентации устройства.
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
      bodyScrollLock.enableBodyScroll(document.body);
      button.setAttribute('aria-expanded', false);
    });
  })();

  // (() => {
  //       const refs = {
  //         openMenuBtn: document.querySelector('[data-menu-open]'),
  //         closeMenuBtn: document.querySelector('[data-menu-close]'),
  //         Menu: document.querySelector('[data-menu]'),
  //         button: document.querySelector('[data-button]')
  //       };
      
  //       refs.openMenuBtn.addEventListener('click', toggleMenu);
  //       refs.closeMenuBtn.addEventListener('click', toggleMenu);
      
  //       function toggleMenu() {
  //         refs.Menu.classList.toggle('is-hidden');
  //         refs.button.classList.toggle('is-hidden');
  //       }
  //     })();
    