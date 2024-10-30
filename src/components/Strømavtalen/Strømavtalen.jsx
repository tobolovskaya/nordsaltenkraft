import React from 'react';
import styles from './Strømavtalen.module.css';

const Strømavtalen = () => {
  return (
    <section id="strømavtalen" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectiontitle}>
          Bestill <span>strømavtalen</span>
        </h2>
        <p className={styles.sectionSubtitle}>
          Nord-Salten Kraft AS er kjent for å være en seriøs, solid, stabil og
          konkurransedyktig leverandør av fornybar energi.
        </p>
        <ul className={styles.sectionList}>
          <li className={styles.sectionItem}>
            <h3 className={styles.sectionItemTitle}>Lokalkraft</h3>
            <h4 className={styles.sectionItemPrice}>
              Prisen beregnes etterskuddsvis hver måned basert på gjennomsnittlig
              spotpris
            </h4>
            <p className={styles.sectionItemText}>
              Velger du Lokalkraft slipper du å ta stilling til om du bør binde
              strømprisen framover eller om du skal ta risikoen med å ligge på
              flytende markedspris (spot).
            </p>
            <p className={styles.sectionItemText}>eFaktura 0 kr / papirfaktura 9,75 kr</p>
            <a href="#application-form" className={`${styles.button} ${styles.sectionButton}`}>Bestill nå</a>
          </li>
          <li className={`${styles.sectionItem} ${styles.activeItem}`}>
            <h3 className={styles.sectionItemTitle}>Spotpris</h3>
            <h4 className={styles.sectionItemPrice}>Spotpris Nordpool +3,99 øre/kWh</h4>
            <p className={styles.sectionItemText}>
              Spot er avtalen for deg som ønsker å følge strømprisen i
              kraftmarkedet. Velger du Spot har du alltid en markedsriktig pris.<br />
              → Ingen binding.<br />
              → Ingen månedsgebyr.
            </p>
            <p className={styles.sectionItemText}>eFaktura 0 kr / papirfaktura 9,75 kr</p>
            <p className={styles.sectionItemText}>
              Avtalen har ingen bindingstid og faktureres etterskuddsvis månedlig
              etter faktisk forbruk.
            </p>
            <a href="#application-form" className={`${styles.button} ${styles.sectionButton} ${styles.active}`}>Bestill nå</a>
          </li>
          <li className={styles.sectionItem}>
            <h3 className={styles.sectionItemTitle}>Fastpris</h3>
            <p className={styles.sectionItemText}>
              Med fastpris er du garantert den samme prisen per kWh i den avtalte
              perioden. Vi tilbyr fastprisavtaler for 1 år og 3 år. Uansett
              markedsutvikling, vil du med en fastprisavtale alltid vite hvilken
              kraftpris du betaler.
            </p>
            <p className={styles.sectionItemText}>eFaktura 0 kr / papirfaktura 9,75 kr</p>
            <p className={styles.sectionItemText}>
              Fastprisavtaler kan ikke sies opp eller endres i avtaleperioden uten
              at det vil påløpe et bruddgebyr.
            </p>
            <a href="#application-form" className={`${styles.button} ${styles.sectionButton}`}>Bestill nå</a>
          </li>
        </ul>
        <p className={styles.sectionSubtitle}>
          Strømavtalen selges kun til strømkunder i Kystnett sitt nettområde, dvs
          Hamarøy, Steigen, Kjøpsvik og nordre Sørfold.
        </p>
      </div>
    </section>
  );
};

export default Strømavtalen;
