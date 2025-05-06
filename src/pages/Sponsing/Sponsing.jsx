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
      <p>Spiller med NSK-drakt og under NSK-navn på bedriftsturnering i Bodø. Vi dekker påmeldingsavgiften.</p>
      <span className={styles.tag}>#Idrett</span>
    </div>
    <div className={styles.card}>
      <h3>Drag IL</h3>
      <p>Sponsorprogram for anleggsutvikling og drift av aktiviteter i regi av idrettslaget.</p>
      <span className={styles.tag}>#Idrett</span>
    </div>
    <div className={styles.card}>
      <h3>Hamarøy Vokalensemble</h3>
      <p>Innkjøp av nettbrett for håndtering av noter til pianist.</p>
      <span className={styles.tag}>#Kultur</span>
    </div>
    <div className={styles.card}>
      <h3>HIL Turn</h3>
      <p>Oppstart av nytt tilbud for barn 9–13 år. Utstyret vil være tilgjengelig for alle brukere av Hamarøyhallen.</p>
      <span className={styles.tag}>#Idrett</span>
    </div>
    <div className={styles.card}>
      <h3>Storjord Samfunnshus AS</h3>
      <p>Støtte til drift, f.eks. utskifting av brannslukkingsapparater til 12.600 kr.</p>
      <span className={styles.tag}>#Drift</span>
    </div>
    <div className={styles.card}>
      <h3>Sementblues2024</h3>
      <p>Kulturarrangement støttet i 2024.</p>
      <span className={styles.tag}>#Kultur</span>
    </div>
    <div className={styles.card}>
      <h3>Engeløya Elvelangs komite</h3>
      <p>Kunst- og kulturvandring på Engeløya 20. september med lyssatt sti og installasjoner. Innkjøp av lyskilder/brensel.</p>
      <span className={styles.tag}>#Kultur</span>
    </div>
    <div className={styles.card}>
      <h3>Hamarøy IL fotballgruppa</h3>
      <p>Kraftcup 2025 i januar/februar i Hamarøyhallen for barn og unge.</p>
      <span className={styles.tag}>#Idrett</span>
    </div>
    <div className={styles.card}>
      <h3>9. klasse Oppeid skole</h3>
      <p>Barnas jul på Bygdetunet: julemarked 1. desember og juletrefest 5. juledag.</p>
      <span className={styles.tag}>#Frivillighet</span>
    </div>
    <div className={styles.card}>
      <h3>Blankbygda shoppingsenter</h3>
      <p>Gjennomføring av arrangement med underholdning for barn og unge.</p>
      <span className={styles.tag}>#Kultur</span>
    </div>
    <div className={styles.card}>
      <h3>8. trinn Steigenskolen</h3>
      <p>Deltakelse i teknologiturneringen First Lego League i Bodø 9. november.</p>
      <span className={styles.tag}>#Utdanning</span>
    </div>
    <div className={styles.card}>
      <h3>Drag aktivitet</h3>
      <p>eSport-turnering 17-19 januar 2025 på Drag. Lang historikk på arrangementet.</p>
      <span className={styles.tag}>#Teknologi</span>
    </div>
  </div>
</section>

    </div>
  );
};

export default Sponsing;
