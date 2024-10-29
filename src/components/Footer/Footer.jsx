import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.footerContainer}`} id="footer">
        <div className={styles.footerBlocks}>
          <div className={styles.footerLogoAdrBl}>
            <div className={styles.footerLogo}>
              <a href="#strøm_app">
                <img
                  src="../img/header/logo-nordsaltenkraft-footer.png"
                  className={styles.logo}
                  alt="Logo"
                />
              </a>
            </div>
            <div className={styles.footerMinside}>
              <a
                href="https://nordsaltenkraft.no/minside"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.button} ${styles.footerButton} ${styles.animated}`}
              >
                Min side
              </a>
            </div>
            <div className={styles.footerAdr} id="contact-us">
              <address className={styles.footerAdress}>
                <ul className={styles.footerAdrList}>
                  <li className={styles.footerAdrLi}>
                    <p className={styles.footerAdrParagraphs}>Telefon:</p>
                    <a className={styles.footerAdr} href="tel:+4775771000">
                      75 77 10 00
                    </a>
                  </li>
                  <li className={styles.footerAdrLi}>
                    <p className={styles.footerAdrParagraphs}>Adresse:</p>
                    <a
                      className={styles.footerAdr}
                      href="https://maps.app.goo.gl/rooJTdkXjDKZgist8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Strandveien 2, 8276 Ulvsvåg
                    </a>
                  </li>
                  <li className={styles.footerAdrLi}>
                    <p className={styles.footerAdrParagraphs}>Organisasjonsnummer:</p>
                    <p className={styles.footerAdr}>Nord-Salten Kraft AS: 995 114 666</p>
                  </li>
                </ul>
              </address>
            </div>
            <div className={styles.footerNavigation}>
              <nav className={styles.footerLinks}>
                <ul className={styles.footerNav}>
                  <li className={styles.footerNavLi}>
                    <a href="#strømavtalen" className={styles.footerNavLink} aria-label="link to section strømavtalen">
                      Bestill strøm
                    </a>
                  </li>
                  <li className={styles.footerNavLi}>
                    <a href="#bredbånd" className={styles.footerNavLink} aria-label="link to section bredbånd">
                      Bredbånd
                    </a>
                  </li>
                  <li className={styles.footerNavLi}>
                    <a href="#kraftproduksjon" className={styles.footerNavLink} aria-label="link to section kraftproduksjon">
                      Kraftproduksjon
                    </a>
                  </li>
                  <li className={styles.footerNavLi}>
                    <a href="https://nordsaltenkraft.no/nyheter" target="_blank" rel="noopener noreferrer" className={styles.footerNavLink} aria-label="link to section nyheter">
                      Nyheter
                    </a>
                  </li>
                  <li className={styles.footerNavLi}>
                    <a href="https://nordsaltenkraft.no/ledigstilling" target="_blank" rel="noopener noreferrer" className={styles.footerNavLink} aria-label="link to section ledig stilling">
                      Ledig Stilling
                    </a>
                  </li>
                  <li className={styles.footerNavLi}>
                    <a href="#application-form" className={styles.footerNavLink} aria-label="link to section contact us">
                      Kontakt oss
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className={styles.footerSocial}>
            <ul className={styles.socialMain}>
              <li className={styles.socialWrapper}>
                <a href="#">
                  <svg height="16" width="16">
                    <use href="./img/icons.svg#icon-instagram"></use>
                  </svg>
                </a>
              </li>
              <li className={styles.socialWrapper}>
                <a href="#">
                  <svg height="16" width="16">
                    <use href="./img/icons.svg#icon-facebook"></use>
                  </svg>
                </a>
              </li>
              <li className={styles.socialWrapper}>
                <a href="#">
                  <svg height="16" width="16">
                    <use href="./img/icons.svg#icon-linkedin"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerSvgLine}>
          <svg className={styles.footerLine} width="1024" height="0">
            <use href="./img/icons.svg#icon-line"></use>
          </svg>
        </div>
        <div className={styles.footerAgreements}>
          <p className={styles.footerCopyParagraphs}>
            ©2024 Nord-Salten Kraft Holding AS. Alle rettigheter forbeholdt
          </p>
          <ul className={styles.footerAgreementsList}>
            <li className={styles.footerPolicy}>
              <a
                className={styles.footerPolicyLink}
                href="https://nordsaltenkraft.no/personvern"
                target="_blank"
                rel="noopener noreferrer"
              >
                Om personvern
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
