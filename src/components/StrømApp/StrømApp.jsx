import React from 'react';
import styles from './StrømApp.module.css';

const StrømApp = () => {
  return (
    <section id="strøm_app" className={styles.heroSection}>
      <div className={`${styles.container} ${styles.heroContent}`}>
        <h1 className={`${styles.heroText} ${styles.animated}`}>
          Strøm App - <span className={styles.heroKraft}>MinKraft</span>
        </h1>
        <br />
        <h2>
          Last ned og få full kontroll over ditt forbruk.<br />
          Med vår brukervennlige app kan du enkelt:
        </h2>
        <ul>
          <li>Følge ditt daglige, månedlige og årlige strømforbruk</li>
          <li>Se estimert kostnad for inneværende måned</li>
          <li>Sjekke strømprisene i sanntid, time for time</li>
        </ul>
        <br />
        <h3>Hold deg oppdatert og optimaliser ditt strømforbruk med vår app!</h3>
        <a href="https://nordsaltenkraft.no/minside" target="_blank" className={`${styles.button} ${styles.heroButton} ${styles.animated}`}>
          Les mer om appen
        </a>
        <div className={styles.heroCheckmark}>
          <a href="#footer" className={`${styles.heroCheckmarkContainer} ${styles.animated}`}>
            <svg className={styles.heroSvg}>
              <use xlinkHref="./img/icons.svg#icon-checkmark"></use>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default StrømApp;
