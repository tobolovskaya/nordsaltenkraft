const Prisliste = () => {
  return (
    <div style={{ padding: "40px 20px", maxWidth: "1200px", margin: "auto", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "36px", marginBottom: "20px", color: "#4a4a4a" }}>
        Prisliste strømavtaler
      </h1>

      <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "20px" }}>
        Her finner du oversikt over alle våre strømavtaler for privatkunder, og alle oppgitte priser er inkludert mva. Privatkunder i Nord-Norge er fritatt for mva. på strøm.
        <br />
        Bedriftsavtaler er ikke inkludert i denne prislisten.
      </p>

      <a href="https://www.strompris.no" target="_blank" rel="noreferrer" style={{ color: "#0070b8", textDecoration: "underline", display: "inline-block", marginBottom: "30px" }}>
        Du kan sammenligne strømavtaler på Forbrukerrådets strømprisportal
      </a>

      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "15px" }}>
        <thead>
          <tr style={{ backgroundColor: "#f0f0f0", textAlign: "left" }}>
            <th style={{ padding: "12px", borderBottom: "2px solid #ccc" }}>Strømavtale</th>
            <th style={{ padding: "12px", borderBottom: "2px solid #ccc" }}>Avtaletype</th>
            <th style={{ padding: "12px", borderBottom: "2px solid #ccc" }}>Fastbeløp</th>
            <th style={{ padding: "12px", borderBottom: "2px solid #ccc" }}>Pris</th>
            <th style={{ padding: "12px", borderBottom: "2px solid #ccc" }}>Vilkår</th>
            <th style={{ padding: "12px", borderBottom: "2px solid #ccc" }}>Papirfakturagebyr</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>NSK Spot</td>
            <td style={{ padding: "12px" }}>Timespot</td>
            <td style={{ padding: "12px" }}>55 kr/mnd ekskl. mva<br />68,75 kr/mnd inkl. mva</td>
            <td style={{ padding: "12px" }}>timespot + 6,90 øre/kWh ekskl. mva<br />8,63 øre/kWh inkl. mva</td>
            <td style={{ padding: "12px" }}>
              <a href="https://nordsaltenkraft.no/?id=357476535&Article=96" style={{ color: "#0070b8" }}>Gå til vilkår</a>
            </td>
            <td style={{ padding: "12px" }}>6 kr ekskl. mva<br />7,5 kr inkl. mva</td>
          </tr>

          {/* Добавь остальные строки аналогично */}
        </tbody>
      </table>
    </div>
  );
};

export default Prisliste;
