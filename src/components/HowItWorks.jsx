export default function HowItWorks() {
  const steps = [
    "📷 Scan Crops",
    "🌸 Detect Flowers",
    "🦠 Check Diseases",
    "🤖 AI Analysis",
    "🚁 Navigate Drone",
    "🌾 Pollinate Plants",
    "📈 Improve Yield",
  ];

  return (
    <section
      style={{
        padding: "80px 10%",
        background: "#F8FFFB",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        ⚙️ How It Works
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
        Biodrone Hivemind AI follows a complete intelligent workflow to assist
        farmers. The drone continuously scans crops using computer vision,
        identifies flowers, analyzes visible symptoms of plant diseases and uses
        AI-powered decision making to determine the next course of action. Once
        the analysis is complete, the drone can perform targeted pollination
        while providing real-time assistance and insights to farmers through a
        multilingual AI interface.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              background: "#EAFBF0",
              padding: "20px",
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            {step}
          </div>
        ))}
      </div>
    </section>
  );
}
