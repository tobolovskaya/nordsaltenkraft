const LoginStepsMS = () => {
    const steps = [
      {
        title: "1. Gå til nordsaltenkraft.no",
        text: (
          <>
            Klikk på <strong>Min side</strong> i menyen og deretter på{" "}
            <strong>Registrer bruker</strong> hvis du er ny.
          </>
        ),
        img: "https://nordsaltenkraft.no/sites/n/nordsaltenkraft.no/files/2025/05/step11.png",
        alt: "Skjermbilde steg 1",
      },
      {
        title: "2. Fyll inn informasjon",
        text: (
          <>
            <ul>
              <li>Kundenummer (fra strømfakturaen)</li>
              <li>Målernummer (fra strømfakturaen)</li>
              <li>E-postadresse</li>
            </ul>
          </>
        ),
        img: "https://nordsaltenkraft.no/sites/n/nordsaltenkraft.no/files/2025/05/step12.png",
        alt: "Skjermbilde steg 2",
      },
      {
        title: "3. Logg inn og få oversikt",
        text: (
          <>
            Etter registrering får du verifiseringslenke. Deretter kan du logge inn og:
            <ul>
              <li>Se fakturaer</li>
              <li>Se forbruk</li>
              <li>Administrere strømavtaler</li>
              <li>Endre passord</li>
            </ul>
          </>
        ),
        img: "https://nordsaltenkraft.no/sites/n/nordsaltenkraft.no/files/2025/05/step13.jpg",
        alt: "Skjermbilde steg 3",
      },
    ];
  
    return (
      <section style={{ padding: "40px 20px",  }}>
        <h2 style={{ textAlign: "center", fontSize: "28px", marginBottom: "32px" }}>
          Slik logger du inn i MinKraft
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                flex: "1 1 280px",
                maxWidth: "300px",
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "12px",
                border: "1px solid #0070b8",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <h3 style={{ fontSize: "18px", marginBottom: "12px" }}>{step.title}</h3>
              <p style={{ fontSize: "15px", lineHeight: "1.6" }}>{step.text}</p>
              <img
                src={step.img}
                alt={step.alt}
                style={{ marginTop: "12px", width: "100%", borderRadius: "8px" }}
              />
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default LoginStepsMS;
  