import styles from "./Sponsing.module.css";

const Sponsing = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1>Sponsing av lokale aktiviteter</h1>
        <p>
          NSK ønsker å føre en del av selskapets inntekter tilbake til samfunnet gjennom sponsing
          av lokale aktiviteter. Vi fokuserer på tiltak som gir trygge oppvekstvilkår for barn og unge,
          og tiltak som inspirerer unge til å bosette seg og bidra til vekst i regionen.
        </p>
      </section>

      <section className={styles.applySection}>
        <h2>Søk om sponsorstøtte</h2>
        <p>
          Vi prioriterer tiltak innen idrett, kultur, utdanning og ideelle organisasjoner. Sponsorat skal
          gi verdi tilbake til samfunnet og være i tråd med NSKs verdier.
        </p>
        <a className={styles.button} href="/soknad">Send inn søknad</a>
      </section>

      <section className={styles.supportedSection}>
        <h2>Dette har vi støttet i 2025</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Musken Fotball</h3>
            <p>Spiller med NSK-drakt i bedriftsturnering i Bodø. Vi dekker påmeldingsavgiften.</p>
            <span className={styles.tag}>#Idrett</span>
          </div>
          <div className={styles.card}>
            <h3>Hamarøy Vokalensemble</h3>
            <p>Kjøp av nettbrett for pianistens notearbeid.</p>
            <span className={styles.tag}>#Kultur</span>
          </div>
          <div className={styles.card}>
            <h3>9. klasse Oppeid skole</h3>
            <p>Barnas Jul på Bygdetunet, julemarked og juletrefest.</p>
            <span className={styles.tag}>#Frivillighet</span>
          </div>
          <div className={styles.card}>
            <h3>Steigenskolen 8. trinn</h3>
            <p>Deltakelse i First Lego League i Bodø, teknologisk innsats.</p>
            <span className={styles.tag}>#Utdanning</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsing;
