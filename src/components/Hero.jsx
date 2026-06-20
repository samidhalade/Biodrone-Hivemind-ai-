import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#EAFBF0,#DDF4FF,#FFF8D6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "50px",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "4rem",
            color: "#2E4A3F",
            marginBottom: "20px",
          }}
        >
          🌸 Biodrone Hivemind AI
        </h1>

        <p
          style={{
            maxWidth: "800px",
            margin: "auto",
            fontSize: "1.3rem",
            color: "#5A7D6B",
            lineHeight: "1.8",
          }}
        >
          Revolutionizing Agriculture with AI-powered Flower Detection, Disease
          Diagnosis, Smart Pollination and Multilingual Farmer Assistance.
        </p>

        <Link to="/dashboard">
          <button
            style={{
              marginTop: "30px",
              padding: "15px 35px",
              border: "none",
              borderRadius: "15px",
              background: "#67C587",
              color: "white",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            Launch Demo
          </button>
        </Link>
      </div>
    </section>
  );
}
