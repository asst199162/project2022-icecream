
  (() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
    const button = document.querySelector('.button1');

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
    window.matchMedia('(min-width: 1200px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
      bodyScrollLock.enableBodyScroll(document.body);
    });
  })();