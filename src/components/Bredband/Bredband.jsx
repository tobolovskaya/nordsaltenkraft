
import styles from './Bredband.module.css';

const Bredband = () => {
  return (
    <section id="bredband" className={styles.bredbåndSection}>
      <div className={`${styles.container} ${styles.bredbåndContent}`}>
        <h2 className={styles.sectionTitle}>Bredbånd</h2>
        <p className={styles.sectionSubtitle}>
          Nord-Salten Kraft AS tilbyr nå, i samarbeid med Trollfjord Bredbånd AS
          lynraskt internett hjem til deg med symmetriske hastigheter for alle
          behov: 70, 100, 250, 500, 1000 Mbps!
        </p>
        <ul className={styles.bredbåndList}>
          <li className={styles.bredbåndItem}>
            <img
              srcSet="./img/bredbånd/img-1@1x.jpg 1x, ./img/bredbånd/img-1@2x.jpg 2x"
              src="./img/bredbånd/img-1@1x.jpg"
              alt="Internett"
              className={styles.bredbåndImg}
              width="150"
              height="150"
              loading="lazy"
            />
            <div className={styles.bredbåndTextBox}>
              <h3 className={styles.bredbåndItemTitle}>Internett</h3>
              <p className={styles.bredbåndItemText}>
                Med bredbånd fra Trollfjord Bredbånd får du fullt utbytte av internett. Stabil linje og valgfrie hastigheter. Vi har hastigheter for alle behov.
              </p>
            </div>
          </li>
          <li className={styles.bredbåndItem}>
            <img
              srcSet="./img/bredbånd/img-2@1x.jpg 1x, ./img/bredbånd/img-2@2x.jpg 2x"
              src="./img/bredbånd/img-2@1x.jpg"
              alt="Digitaltv"
              className={styles.bredbåndImg}
              width="150"
              height="150"
              loading="lazy"
            />
            <div className={styles.bredbåndTextBox}>
              <h3 className={styles.bredbåndItemTitle}>Digital-TV</h3>
              <p className={styles.bredbåndItemText}>
                Med digital-tv får du den ultimate seeropplevelsen. Krystallklare og stabile TV-bilder uansett vær og årstid. Stort kanalutvalg, valgfrihet.
              </p>
            </div>
          </li>
          <li className={styles.bredbåndItem}>
            <img
              srcSet="./img/bredbånd/img-3@1x.jpg 1x, ./img/bredbånd/img-3@2x.jpg 2x"
              src="./img/bredbånd/img-3@1x.jpg"
              alt="Telefoni"
              className={styles.bredbåndImg}
              width="150"
              height="150"
              loading="lazy"
            />
            <div className={styles.bredbåndTextBox}>
              <h3 className={styles.bredbåndItemTitle}>Telefoni</h3>
              <p className={styles.bredbåndItemText}>
                Med IP-telefoni fra oss får du en lav, fast månedspris og rimelige samtalepriser. Enkel oppkobling og du trenger ikke bytte ut ditt telefonapparat.
              </p>
            </div>
          </li>
          <li className={styles.bredbåndItem}>
            <img
              srcSet="./img/bredbånd/img-4@1x.jpg 1x, ./img/bredbånd/img-4@2x.jpg 2x"
              src="./img/bredbånd/img-4@1x.jpg"
              alt="Kundeservice"
              className={styles.bredbåndImg}
              width="150"
              height="150"
              loading="lazy"
            />
            <div className={styles.bredbåndTextBox}>
              <h3 className={styles.bredbåndItemTitle}>Kundeservice</h3>
              <p className={styles.bredbåndItemText}>
                Lurer du på noe?<br />
                Vi hjelper deg 76 11 80 00<br />
                Man-fre, 08.00 - 15.00
              </p>
            </div>
          </li>
        </ul>
        <a
          href="https://trollfjord.no/bredband/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.button} ${styles.bredbåndButton}`}
        >
          Bestill nå
        </a>
      </div>
    </section>
  );
};

export default Bredband;
