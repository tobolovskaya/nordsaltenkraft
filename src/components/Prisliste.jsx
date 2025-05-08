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
            <th style={{ padding: "12px", borderBottom: "2px solid #ccc" }}>Papirfakturagebyr</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>Spotpris</td>
            <td style={{ padding: "12px" }}>Spotpris time for time</td>
            <td style={{ padding: "12px" }}>0 kr</td>
            <td style={{ padding: "12px" }}>3,99 øre/kWh ekslk mva<br />4,99 øre/kWh inkl mva</td>
            <td style={{ padding: "12px" }}>9,75 kr</td>
          </tr>

          <tr>
            <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>Lokalkraft</td>
            <td style={{ padding: "12px" }}>Standard variabel</td>
            <td style={{ padding: "12px" }}>0 kr</td>
            <td style={{ padding: "12px" }}>7,90 øre/kWh ekskl mva<br />9,88 øre/kWh inkl mva</td>
            <td style={{ padding: "12px" }}>9,75 kr</td>
          </tr>

          <tr>
            <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>Fastpris 1 år</td>
            <td style={{ padding: "12px" }}>Fastpris</td>
            <td style={{ padding: "12px" }}>0 kr</td>
            <td style={{ padding: "12px" }}>31,90 øre/kWh ekskl mva<br />39,88 øre/kWh inkl mva</td>
            <td style={{ padding: "12px" }}>9,75 kr</td>
          </tr>

          <tr>
            <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>Fastpris 3 år</td>
            <td style={{ padding: "12px" }}>Fastpris</td>
            <td style={{ padding: "12px" }}>0 kr</td>
            <td style={{ padding: "12px" }}>37,90 øre/kWh ekskl mva<br />47,38 øre/kWh inkl mva</td>
            <td style={{ padding: "12px" }}>9,75 kr</td>
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default Prisliste;
