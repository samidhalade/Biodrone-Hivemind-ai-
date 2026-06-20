export default function Benefits() {
  return (
    <section
      style={{
        padding: "80px 10%",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        📈 Benefits
      </h2>
      <p
        style={{
          maxWidth: "900px",
          margin: "0 auto 40px auto",
          textAlign: "center",
          color: "#5A7D6B",
          lineHeight: "1.8",
          fontSize: "1.1rem",
        }}
      >
        Modern agriculture faces challenges such as declining pollinator
        populations, crop diseases, labor shortages and increasing demand for
        food production. Biodrone helps bridge this gap by combining AI,
        automation and precision agriculture techniques. By reducing manual
        effort and improving decision-making, the system enables farmers to
        manage crops more efficiently and sustainably.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        <Benefit text="Higher Crop Yield" />
        <Benefit text="Early Disease Detection" />
        <Benefit text="Reduced Labor Costs" />
        <Benefit text="Smart Pollination" />
        <Benefit text="Farmer-Friendly AI Support" />
        <Benefit text="Sustainable Agriculture" />
      </div>
    </section>
  );
}

function Benefit({ text }) {
  return (
    <div
      style={{
        background: "#FFF8D6",
        padding: "25px",
        borderRadius: "20px",
        textAlign: "center",
      }}
    >
      ✅ {text}
    </div>
  );
}
