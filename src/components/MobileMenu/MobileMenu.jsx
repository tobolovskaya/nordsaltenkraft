import React from 'react';
import styles from './MobileMenu.module.css';
import "../../js/mobile-menu.js";


const MobileMenu = () => (
  <>
    <div className={`${styles.mobileMenuOverlay} js-menu-overlay`} id="mobile-menu"></div>
    <div className={`${styles.mobileMenu} js-menu-container`}>
      <div className={styles.mobileMenuClose}>
        <button className="js-close-menu" type="button">
          <svg className="icon icon-close_bold">
            <use xlinkHref="./img/icons.svg#icon-close_bold"></use>
          </svg>
        </button>
      </div>

      <ul className={styles.mobileMenuList}>
        <li>
          <a href="#about">About us</a>
        </li>
        <li>
          <a href="#lessons">Our lessons</a>
        </li>
        <li>
          <a href="#teachers">Teachers</a>
        </li>
        <li>
          <a href="#reviews">Reviews</a>
        </li>
        <li>
          <a href="#application-form">Contact us</a>
        </li>
      </ul>

      <ul className={styles.mobileMenuSocials}>
        <li>
          <a href="https://www.facebook.com/goITclub/" target="_blank" rel="noopener noreferrer">
            <svg className="icon icon-facebook" width="26" height="26">
              <use xlinkHref="./img/icons.svg#icon-facebook"></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/goitclub/" target="_blank" rel="noopener noreferrer">
            <svg className="icon icon-insta" width="26" height="26">
              <use xlinkHref="./img/icons.svg#icon-insta"></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/c/GoIT" target="_blank" rel="noopener noreferrer">
            <svg className="icon icon-youtube" width="26" height="26">
              <use xlinkHref="./img/icons.svg#icon-youtube"></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </>
);

export default MobileMenu;
