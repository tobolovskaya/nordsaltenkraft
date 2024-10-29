import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles['header-section']}>
      <div className={styles['header-container']}>
        <nav className={styles['page-navigation']}>
          <a href="#strøm_app">
            <img
              src="../../img/header/logo-nordsaltenkraft.jpg"
              className={styles.logo}
              alt="Logo"
            />
          </a>
          <ul className={`${styles['page-nav-list']} ${styles.list}`}>
            <li className={styles['page-nav-list-item']}>
              <a
                href="#strømavtalen"
                className={`${styles['page-nav-list-link']} ${styles['link-underlined']}`}
                aria-label="link to section strømavtalen"
              >
                Bestill strøm
              </a>
            </li>
            <li className={styles['page-nav-list-item']}>
              <a
                href="#bredbånd"
                className={`${styles['page-nav-list-link']} ${styles['link-underlined']}`}
                aria-label="link to section bredbånd"
              >
                Bredbånd
              </a>
            </li>
            <li className={styles['page-nav-list-item']}>
              <a
                href="#kraftproduksjon"
                className={`${styles['page-nav-list-link']} ${styles['link-underlined']}`}
                aria-label="link to section kraftproduksjon"
              >
                Kraftproduksjon
              </a>
            </li>
            <li className={styles['page-nav-list-item']}>
              <a
                href="#application-form"
                className={`${styles['page-nav-list-link']} ${styles['link-underlined']}`}
                aria-label="link to section contact us"
              >
                Kontakt oss
              </a>
            </li>
          </ul>
        </nav>
        <ul className={styles['social-main']}>
          <li className={styles['social-wrapper']}>
            <a href="#">
              <svg height="16" width="16">
                <use href="../../img/icons.svg#icon-instagram"></use>
              </svg>
            </a>
          </li>
          <li className={styles['social-wrapper']}>
            <a href="#">
              <svg height="16" width="16">
                <use href="../../img/icons.svg#icon-facebook"></use>
              </svg>
            </a>
          </li>
          <li className={styles['social-wrapper']}>
            <a href="#">
              <svg height="16" width="16">
                <use href="../../img/icons.svg#icon-linkedin"></use>
              </svg>
            </a>
          </li>
        </ul>
        <button
          className={styles['burger-btn']}
          type="button"
          aria-expanded="false"
          aria-controls="mobile-menu"
          aria-label="open menu"
        >
          <svg
            className={`${styles['mobile-menu-btn-icon']} ${styles.mobile}`}
            width="32"
            height="23"
          >
            <use href="../../img/icons.svg#icon-nav"></use>
          </svg>
          <svg
            className={`${styles['mobile-menu-btn-icon']} ${styles.tablet}`}
            width="40"
            height="28"
          >
            <use href="../../img/icons.svg#icon-nav_bold"></use>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
