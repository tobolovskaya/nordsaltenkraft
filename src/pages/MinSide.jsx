import AppFeatures from "../components/AppFeatures";
import LoginStepsMS from "../components/LoginStepsMS";
import LoginSteps from "../components/LoginSteps";


const MinSide = () => {
  return (
    <div style={{ fontFamily: "sans-serif", lineHeight: "1.6", color: "#111" }}>
      {/* ВСТУП */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "auto",
          padding: "40px 20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/img/strøm_app/app.jpg"
          alt="MinKraft App"
          style={{ maxWidth: "400px", flex: "1 1 300px" }}
        />
        <div style={{ flex: "1 1 300px", maxWidth: "600px" }}>
          <h2 style={{ fontSize: "28px", color: "#0070b8" }}>Velkommen til Min Side</h2>
          <br />
          <p style={{ fontSize: "18px" }}>
          <strong><a href="https://nsk-kraft.sks.no/" target="_blank" rel="noopener noreferrer">Klikk her</a></strong> for å komme til vår kundeportal Minside hvor du får god oversikt over strømavtaler og forbruk.
            <br />
            <br />
            Velg et passord som du bekrefter. Du vil da få tilsendt en verifikasjonslink, klikk på linken og du er inne på Min side.
          </p>
          <ul style={{ marginTop: "16px", paddingLeft: "20px", fontSize: "16px" }}>
            <li>Du har samme brukernavn og passord både på Min side og appen MinKraft fra Nord-Salten Kraft. Dersom ditt brukernavn er din e-postadresse legger du inn den og skriver inn ditt passord. Dersom ditt brukernavn er ditt mobilnummer legger du inn det og skriver inn ditt passord.</li>
            <br />
            <li>Har du ikke laget deg bruker på Min side kan du opprette bruker på app.</li>
          </ul>
        </div>
      </section>
      <LoginStepsMS />

      {/* СКАЧАТЬ APP */}
      <section
        style={{
          textAlign: "center",
          padding: "40px 20px",
          backgroundColor: "#f5f7fa",
        }}
      >
        <h3 style={{ fontSize: "24px", marginBottom: "16px" }}>Last ned appen MinKraft</h3>
<div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  }}
>
  <a href="#" target="_blank" rel="noopener noreferrer">
    <img
      src="https://nordsaltenkraft.no/sites/n/nordsaltenkraft.no/files/2025/05/Last%20ned%20fra%20AppStore_1.png"
      alt="App Store"
      style={{ maxWidth: "160px", height: "45px" }}
    />
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer">
    <img
      src="https://nordsaltenkraft.no/sites/n/nordsaltenkraft.no/files/2025/05/last_ned_fra_googleplay.png"
      alt="Google Play"
      style={{ height: "45px" }}
    />
  </a>
</div>

        <p style={{ marginTop: "16px", fontSize: "16px" }}>
          Mobilappen fungerer like godt på iPhone som på Android.
        </p>
      </section>
      <LoginSteps />
      


      {/* ФУНКЦИИ ДЛЯ КЛИЕНТА */}
      <section
        style={{
          padding: "40px 20px",
          maxWidth: "800px",
          margin: "auto",
        }}
      >
        <h3 style={{ fontSize: "22px" }}>Som Nord-Salten Kraft kunde kan du bruke Min side til å:</h3>
        <AppFeatures />
        <br />
        <p style={{ paddingLeft: "20px", fontSize: "16px" }}>
        I tillegg kan du:
          </p>
          <ul style={{ marginTop: "16px", paddingLeft: "20px", fontSize: "16px" }}>
            <li>ha flere målepunkter på samme Min side</li>
            <ol>boligen, hytta, sommerhuset</ol>
            <ol>bedriftsavtaler</ol>
            <br />
            <li>legge til en venn eller familiemedlem som du vil hjelpe med å holde oversikt eller administrere strømavtalen for andre</li>
          </ul>
      </section>

      

      {/* FLERE BRUKERE */}
      <section
        style={{
          padding: "40px 20px",
          backgroundColor: "#f5f5f5",
          maxWidth: "800px",
          margin: "auto",
        }}
      >
        <h3 style={{ fontSize: "22px" }}>Flere brukere</h3>
        <p style={{ fontSize: "16px" }}>Dersom du allerede har laget en bruker på Min side og ønsker at flere skal ha tilgang, så kan du enkelt legge til dette.</p>
        <ol style={{ paddingLeft: "20px", fontSize: "16px" }}>
          <li>Gå inn på Min side - Min profil - Brukerkontoer og kunderelasjoner.</li>
          <li>Klikk for å legge til Ny innlogging.</li>
          <li>Skriv inn e-postadresse til den nye innloggingen. En e-post med en verifikasjonslink vil bli sendt til den oppgitte e-posten.</li>
        </ol>
        <p style={{ fontSize: "16px" }}>Vedkommende som har mottatt linken kan da opprette sin egen bruker med eget passord og logge seg inn på vanlig måte.</p>
      </section>

      {/* КОНТАКТЫ */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h3 style={{ fontSize: "22px" }}>Kontakt oss gjerne!</h3>
        <p style={{ fontSize: "16px" }}>
        Har du spørsmål, ta kontakt med oss på e-post <a href="mailto:kundeservice@nordsaltenkraft.no">kundeservice@nordsaltenkraft.no
          </a>
          <br />
          eller telefon 75 77 10 00
        </p>
      </section>
    </div>
  );
};

export default MinSide;


