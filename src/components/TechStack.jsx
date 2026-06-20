export default function TechStack() {
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
        💻 Technology Stack
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        <Tech name="React JS" desc="Frontend UI" />
        <Tech name="Flask" desc="Backend API" />
        <Tech name="OpenCV" desc="Computer Vision" />
        <Tech name="YOLO" desc="Object Detection" />
        <Tech name="Ollama" desc="Local AI Engine" />
        <Tech name="Llama 3.2" desc="AI Assistant" />
      </div>
    </section>
  );
}

function Tech({ name, desc }) {
  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "20px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
      }}
    >
      <h3>{name}</h3>
      <p>{desc}</p>
    </div>
  );
}
