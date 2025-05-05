const AppFeatures = () => {
    const features = [
      {
        icon: "📄",
        title: "Fakturaer",
        text: "Se dine fakturaer – både betalte og ubetalte.",
      },
      {
        icon: "📊",
        title: "Forbruk",
        text: "Se ditt forbruk og få oversikt over strømbruken din.",
      },
      {
        icon: "🕒",
        title: "Dagens pris",
        text: "Se dagens strømpris i sanntid og planlegg forbruket smartere.",
      },
      {
        icon: "📃",
        title: "Strømavtale",
        text: "Se din strømavtale eller abonnement og detaljer om det.",
      },
      {
        icon: "💳",
        title: "Betalingsmåte",
        text: "Sjekk og endre betalingsmåte for strømregningene dine.",
      },
      {
        icon: "📈",
        title: "Økonomioversikt",
        text: "Få full kostnads- og økonomioversikt over strømforbruket ditt.",
      },
      {
        icon: "🔐",
        title: "Passord",
        text: "Endre passordet ditt trygt og enkelt.",
      },
    ];
  
    return (
      <section style={{ padding: "40px 20px", backgroundColor: "#77accc", maxWidth: "900px", margin: "auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
          }}
        >
          {features.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
                backgroundColor: "#fff",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
              }}
            >
              <div style={{ fontSize: "28px" }}>{item.icon}</div>
              <div>
                <strong style={{ fontSize: "18px", display: "block", marginBottom: "6px" }}>{item.title}</strong>
                <p style={{ margin: 0 }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default AppFeatures;
  