import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container} id="footer">
        <div className={styles.footerBlocks}>
          <div className={styles.footerLogoAdrBl}>
            <div>
              <a href="/">
                <img
                  src="../img/header/logo-nordsaltenkraft-footer.png"
                  className={styles.logo}
                  alt="Logo"
                />
              </a>
            </div>
            <div>
              <a
                href="minside"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.button} ${styles.footerButton} ${styles.animated}`}
              >
                Min side
              </a>
            </div>
            <div id="contact-us">
              <address>
                <ul className={styles.footerAdrList}>
                  <li>
                    <p className={styles.footerAdrParagraphs}>Telefon:</p>
                    <a className={styles.footerAdr} href="tel:+4775771000">
                      75 77 10 00
                    </a>
                  </li>
                  <li>
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
                  <li>
                    <p className={styles.footerAdrParagraphs}>Organisasjonsnummer:</p>
                    <p className={styles.footerAdr}>Nord-Salten Kraft AS: 995 114 666</p>
                  </li>
                </ul>
              </address>
            </div>
            <div>
              <nav>
                <ul className={styles.footerNav}>
                  <li className={styles.footerNavLi}>
                    <a href="#stromavtalen" className={styles.footerNavLink} aria-label="link to section stromavtalen">
                      Bestill strøm
                    </a>
                  </li>
                  <li className={styles.footerNavLi}>
                    <a href="#bredband" className={styles.footerNavLink} aria-label="link to section bredband">
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
            <ul className={styles.socialmain}>
              <li className={styles.socialwrapper}>
                <a href="#">
                  <svg height="16" width="16">
                    <use href="./img/icons.svg#icon-instagram"></use>
                  </svg>
                </a>
              </li>
              <li className={styles.socialwrapper}>
                <a href="#">
                  <svg height="16" width="16">
                    <use href="./img/icons.svg#icon-facebook"></use>
                  </svg>
                </a>
              </li>
              <li className={styles.socialwrapper}>
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
          <ul>
            <li className={styles.footerPolicy}>
              <a
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
