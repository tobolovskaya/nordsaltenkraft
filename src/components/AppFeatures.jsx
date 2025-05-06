const AppFeatures = () => {
  const features = [
    {
      icon: (
        <svg width="28" height="28" fill="#0070b8" viewBox="0 0 24 24">
          <path d="M4 4h16v2H4zm0 4h10v2H4zm0 4h16v2H4zm0 4h10v2H4z" />
        </svg>
      ),
      title: "Fakturaer",
      text: "Se dine fakturaer – både betalte og ubetalte.",
    },
    {
      icon: (
        <svg width="28" height="28" fill="#0070b8" viewBox="0 0 24 24">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: "Forbruk",
      text: "Se ditt forbruk og få oversikt over strømbruken din.",
    },
    {
      icon: (
        <svg width="28" height="28" fill="#0070b8" viewBox="0 0 24 24">
          <path d="M12 1v11l9 5-1 1-8-4.5L4 18l-1-1 9-5V1z" />
        </svg>
      ),
      title: "Dagens pris",
      text: "Se dagens strømpris i sanntid og planlegg forbruket smartere.",
    },
    {
      icon: (
        <svg width="28" height="28" fill="#0070b8" viewBox="0 0 24 24">
          <path d="M6 2h12a2 2 0 012 2v16l-6-3-6 3V4a2 2 0 012-2z" />
        </svg>
      ),
      title: "Strømavtale",
      text: "Se din strømavtale eller abonnement og detaljer om det.",
    },
    {
      icon: (
        <svg width="28" height="28" fill="#0070b8" viewBox="0 0 24 24">
          <path d="M3 4h18v16H3z" fill="none" stroke="#0070b8" strokeWidth="2" />
          <path d="M8 4v16M16 4v16" stroke="#0070b8" strokeWidth="2" />
        </svg>
      ),
      title: "Betalingsmåte",
      text: "Sjekk og endre betalingsmåte for strømregningene dine.",
    },
    {
      icon: (
        <svg width="28" height="28" fill="#0070b8" viewBox="0 0 24 24">
          <path d="M12 4a8 8 0 100 16 8 8 0 000-16zm1 11h-2v-2h2v2zm0-4h-2V7h2v4z" />
        </svg>
      ),
      title: "Økonomioversikt",
      text: "Få full kostnads- og økonomioversikt over strømforbruket ditt.",
    },
    {
      icon: (
        <svg width="28" height="28" fill="#0070b8" viewBox="0 0 24 24">
          <path d="M12 17a2 2 0 002-2h-4a2 2 0 002 2zm6-5V9a6 6 0 00-12 0v3H4v9h16v-9h-2zM8 9a4 4 0 118 0v3H8V9z" />
        </svg>
      ),
      title: "Endre passord",
      text: "Endre passordet ditt trygt og enkelt.",
    },
  ];

  return (
    <section style={{ padding: "40px 20px", backgroundColor: "#f5f5f5", maxWidth: "1000px", margin: "auto" }}>
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
            <div>{item.icon}</div>
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
