export default function Features() {
  const features = [
    {
      icon: "🌸",
      title: "Flower Detection",
      text: "Detect flowers in real-time using Computer Vision.",
    },
    {
      icon: "🦠",
      title: "Disease Diagnosis",
      text: "Identify crop diseases and recommend treatments.",
    },
    {
      icon: "🤖",
      title: "AI Assistant",
      text: "Farmer support in multiple Indian languages.",
    },
    {
      icon: "🚁",
      title: "Drone Navigation",
      text: "Autonomous movement and crop monitoring.",
    },
  ];

  return (
    <section style={section}>
      <h2 style={title}>✨ Features</h2>
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
        Biodrone combines multiple intelligent systems into a single platform.
        From flower detection and disease diagnosis to smart pollination and
        multilingual farmer support, each feature is designed to improve crop
        productivity while making advanced agricultural technology accessible
        and easy to use.
      </p>

      <div style={grid}>
        {features.map((feature, index) => (
          <div key={index} style={card}>
            <h1>{feature.icon}</h1>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const section = {
  padding: "80px 10%",
};

const title = {
  textAlign: "center",
  marginBottom: "40px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
  gap: "25px",
};

const card = {
  background: "white",
  padding: "25px",
  borderRadius: "20px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
};
