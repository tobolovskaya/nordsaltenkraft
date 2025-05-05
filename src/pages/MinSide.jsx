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
          <p style={{ fontSize: "18px" }}>
          <strong><a href="https://nsk-kraft.sks.no/" target="_blank" rel="noopener noreferrer">Klikk her</a></strong> 
          for å komme til vår kundeportal "Min side" hvor du får god oversikt over strømavtaler og forbruk.
            <br />
            <br />
            Ved første gangs pålogging på Min side må du registrere deg som bruker. Legg inn
          </p>
          <ul style={{ marginTop: "16px", paddingLeft: "20px", fontSize: "16px" }}>
            <li>Kundenummer (dette finner du på strømfakturaen)</li>
            <li>Målernummer (dette finner du på strømfakturaen)</li>
            <li>Din e-post adresse</li>
          </ul>
        </div>
      </section>

      {/* СКАЧАТЬ APP */}
      <section
        style={{
          textAlign: "center",
          padding: "40px 20px",
          backgroundColor: "#f5f7fa",
        }}
      >
        <h3 style={{ fontSize: "24px", marginBottom: "16px" }}>Last ned MinKraft</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
              alt="App Store"
              style={{ height: "60px" }}
            />
          </a>
          <a href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              style={{ height: "60px" }}
            />
          </a>
        </div>
        <p style={{ marginTop: "16px", fontSize: "16px" }}>
          Mobilappen fungerer like godt på iPhone som på Android.
        </p>
      </section>

      {/* ФУНКЦИИ ДЛЯ КЛИЕНТА */}
      <section
        style={{
          padding: "40px 20px",
          maxWidth: "800px",
          margin: "auto",
        }}
      >
        <h3 style={{ fontSize: "22px" }}>Som kunde kan du:</h3>
        <ul style={{ paddingLeft: "20px", fontSize: "16px" }}>
          <li>Se fakturaer og forbruk</li>
          <li>Se strømavtale og betalingsmåte</li>
          <li>Endre passord</li>
          <li>Se økonomioversikt og kostnader</li>
          <li>Flere målepunkter: bolig, hytte, bedrift</li>
          <li>Dele tilgang med familie eller medhjelper</li>
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
        <p style={{ fontSize: "16px" }}>Slik gir du flere tilgang:</p>
        <ol style={{ paddingLeft: "20px", fontSize: "16px" }}>
          <li>Gå til Min side → Brukerkontoer</li>
          <li>Klikk “Ny innlogging”</li>
          <li>Skriv inn e-post, mottaker får verifiseringslink</li>
        </ol>
      </section>

      {/* КОНТАКТЫ */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h3 style={{ fontSize: "22px" }}>Kontakt oss</h3>
        <p style={{ fontSize: "16px" }}>
          📧{" "}
          <a href="mailto:kundeservice@nordsaltenkraft.no">
            kundeservice@nordsaltenkraft.no
          </a>
          <br />
          📞 75 77 10 00
        </p>
      </section>
    </div>
  );
};

export default MinSide;
