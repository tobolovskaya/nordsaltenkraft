
const steps = [
  {
    number: 1,
    title: "Logg inn",
    text: "Førstesiden ved innlogging. Hvis du er aktiv kunde fra før, legger du inn brukernavn og passord og velger Logg inn. Er du ny kunde, velger du «Registrer bruker».",
    img: "https://nordsaltenkraft.no/sites/n/nordsaltenkraft.no/files/2025/05/step1.jpg",
  },
  {
    number: 2,
    title: "Registrer deg",
    text: "Skriv inn mobilnr og fødselsdato (ddmmåååå). Mobilnr må være registrert hos Nord-Salten Kraft. Hvis ikke, kontakt kundeservice.",
    img: "https://nordsaltenkraft.no/sites/n/nordsaltenkraft.no/files/2025/05/step2.jpg",
  },
  {
    number: 3,
    title: "Bekreft med kode",
    text: "Du vil motta en verifiseringskode på sms etter steg 2. Skriv inn koden og sett eget passord.",
    img: "https://nordsaltenkraft.no/sites/n/nordsaltenkraft.no/files/2025/05/step3.jpg",
  },
  {
    number: 4,
    title: "Hovedside",
    text: "Du kommer til hovedsiden med oversikt over dine tjenester.",
    img: "https://nordsaltenkraft.no/sites/n/nordsaltenkraft.no/files/2025/05/step4.jpg",
  },
];

const LoginSteps = () => {
  return (
    <section style={{ maxWidth: "1000px", margin: "auto", padding: "40px 20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "32px" }}>
        Slik logger du inn i MinKraft-appen
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "center" }}>
        {steps.map((step) => (
          <div
            key={step.number}
            style={{
              flex: "1 1 200px",
              maxWidth: "250px",
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "16px",
              background: "#fff",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "8px" }}>
              <img
                src={step.img}
                alt={`Step ${step.number}`}
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
            </div>
            <h4 style={{ fontSize: "18px", margin: "12px 0" }}>
              {step.number}. {step.title}
            </h4>
            <p style={{ fontSize: "14px", lineHeight: 1.5 }}>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LoginSteps;
