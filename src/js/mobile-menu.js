import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

document.addEventListener('DOMContentLoaded', () => {
    const menuOverlay = document.querySelector('.js-menu-overlay');
    const menuContainer = document.querySelector('.js-menu-container');
    const closeMenuButton = document.querySelector('.js-close-menu');
    const openMenuButton = document.querySelector('.js-open-menu'); // Ensure you add this to the toggle button in the main component

    // Open Menu
    const openMenu = () => {
        menuOverlay.classList.add('is-active');
        menuContainer.classList.add('is-active');
        disableBodyScroll(menuContainer);
    };

    // Close Menu
    const closeMenu = () => {
        menuOverlay.classList.remove('is-active');
        menuContainer.classList.remove('is-active');
        enableBodyScroll(menuContainer);
    };

    // Event listeners for open/close
    openMenuButton?.addEventListener('click', openMenu);
    closeMenuButton?.addEventListener('click', closeMenu);
    menuOverlay?.addEventListener('click', closeMenu);
});
