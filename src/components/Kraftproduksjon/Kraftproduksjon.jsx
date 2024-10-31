import React from 'react';
import styles from './Kraftproduksjon.module.css';

const Kraftproduksjon = () => {
  return (
    <section id="kraftproduksjon" className={styles.Section}>
      <div className={styles.container}>
              <h2 className={styles.sectiontitle}>Kraftproduksjon</h2>
              <p className={styles.sectionsubtitle}>
          Nord-Salten Kraft har en sterk lokal forankring i Nord-Salten, med lokal produksjon og kompetanse, og lokalt hovedkontor. Vi er stolte av å produsere fornybar energi, og å spille en viktig samfunnsrolle i regionen.
        </p>
        <div className={styles.aboutHolder}>
          <ul className={styles.aboutList}>
            <li className={styles.aboutItem}>
              <h3 className={styles.aboutText}>Slunkajavrre kraftverk</h3>
              Ligger i Hamarøy kommune.<br />
              Anlegget ble satt i drift i 1983.
            </li>
            <li className={styles.aboutItem}>
              <h3 className={styles.aboutText}>Rekvatn kraftverk</h3>
              Ligger i Hamarøy kommune.<br />
              Anlegget ble satt i drift i 1953.
            </li>
            <li className={styles.aboutItem}>
              <h3 className={styles.aboutText}>Sagfossen kraftverk</h3>
              Ligger i Hamarøy kommune.<br />
              Anlegget ble satt i drift i 1979.
            </li>
            <li className={styles.aboutItem}>
              <h3 className={styles.aboutText}>Forsanvatn kraftverk</h3>
              Ligger i Steigen kommune.<br />
              Anlegget ble satt i drift i 2013.
            </li>
            <li className={styles.aboutItem}>
              <h3 className={styles.aboutText}>Forsanvatn minikraftverk</h3>
              Ligger i Steigen kommune.<br />
              Anlegget ble satt i drift i 2013.
            </li>
            <li className={styles.aboutItem}>
              <h3 className={styles.aboutText}>Raukforsen kraftverk</h3>
              Ligger i Sørfold kommune.<br />
              Anlegget ble satt i drift i 2021.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Kraftproduksjon;
