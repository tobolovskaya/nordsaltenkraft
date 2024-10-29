import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.headersection}>
      <div className={styles.headercontainer}>
        <nav className={styles.pagenavigation}>
          <a href="#strøm_app">
            <img
              src="/img/header/logo-nordsaltenkraft.jpg"
              className={styles.logo}
              alt="Logo"
            />
          </a>
          <ul className={`${styles.pagenavlist} ${styles.list}`}>
            <li className={styles.pagenavlistitem}>
              <a
                href="#strømavtalen"
                className={`${styles.pagenavlistlink} ${styles.linkunderlined}`}
                aria-label="link to section strømavtalen"
              >
                Bestill strøm
              </a>
            </li>
            <li className={styles.pagenavlistitem}>
              <a
                href="#bredbånd"
                className={`${styles.pagenavlistlink} ${styles.linkunderlined}`}
                aria-label="link to section bredbånd"
              >
                Bredbånd
              </a>
            </li>
            <li className={styles.pagenavlistitem}>
              <a
                href="#kraftproduksjon"
                className={`${styles.pagenavlistlink} ${styles.linkunderlined}`}
                aria-label="link to section kraftproduksjon"
              >
                Kraftproduksjon
              </a>
            </li>
            <li className={styles.pagenavlistitem}>
              <a
                href="#application-form"
                className={`${styles.pagenavlistlink} ${styles.linkunderlined}`}
                aria-label="link to section contact us"
              >
                Kontakt oss
              </a>
            </li>
          </ul>
        </nav>
        <ul className={styles.socialmain}>
          <li className={styles.socialwrapper}>
            <a href="#">
              <svg height="16" width="16">
                <use href="/img/icons.svg#icon-instagram"></use>
              </svg>
            </a>
          </li>
          <li className={styles.socialwrapper}>
            <a href="#">
              <svg height="16" width="16">
                <use href="/img/icons.svg#icon-facebook"></use>
              </svg>
            </a>
          </li>
          <li className={styles.socialwrapper}>
            <a href="#">
              <svg height="16" width="16">
                <use href="/img/icons.svg#icon-linkedin"></use>
              </svg>
            </a>
          </li>
        </ul>
        <button
          className={styles.burgerbtn}
          type="button"
          aria-expanded="false"
          aria-controls="mobile-menu"
          aria-label="open menu"
        >
          <svg
            className={`${styles.mobilemenubtnicon} ${styles.mobile}`}
            width="32"
            height="23"
          >
            <use href="/img/icons.svg#icon-nav"></use>
          </svg>
          <svg
            className={`${styles.mobilemenubtnicon} ${styles.tablet}`}
            width="40"
            height="28"
          >
            <use href="/img/icons.svg#icon-nav_bold"></use>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
