import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Benefits from "../components/Benefits";
import TechStack from "../components/TechStack";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div
      style={{
        background: "#F8FFFB",
      }}
    >
      <Hero />

      <Features />

      <HowItWorks />

      <Benefits />

      <TechStack />

      <section
        style={{
          padding: "80px 10%",
          textAlign: "center",
          background: "#EAFBF0",
        }}
      >
        <h2
          style={{
            color: "#2E4A3F",
            fontSize: "2.5rem",
          }}
        >
          🌍 Our Mission
        </h2>

        <p
          style={{
            maxWidth: "900px",
            margin: "20px auto",
            fontSize: "1.2rem",
            color: "#5A7D6B",
            lineHeight: "1.8",
          }}
        >
          Biodrone Hivemind AI aims to revolutionize agriculture by combining
          Artificial Intelligence, Computer Vision and Autonomous Drones. Our
          goal is to help farmers improve crop productivity, detect diseases
          early, reduce pollination challenges and make sustainable farming
          accessible to everyone.
        </p>
      </section>

      <section
        style={{
          padding: "80px 10%",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#2E4A3F",
            fontSize: "2.5rem",
          }}
        >
          🚀 Future Scope
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          <div style={card}>🌾 Large Scale Farm Monitoring</div>

          <div style={card}>📡 IoT Sensor Integration</div>

          <div style={card}>☁️ Cloud-Based Analytics</div>

          <div style={card}>🤖 Advanced AI Crop Recommendations</div>

          <div style={card}>🚁 Fully Autonomous Drone Fleets</div>

          <div style={card}>🌍 Smart Farming Ecosystem</div>
        </div>
      </section>

      <section
        style={{
          padding: "80px 10%",
          background: "#FFF8D6",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#2E4A3F",
            fontSize: "2.5rem",
          }}
        >
          📊 Impact
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          <div style={impactCard}>
            <h1>95%</h1>
            <p>Detection Accuracy</p>
          </div>

          <div style={impactCard}>
            <h1>30%</h1>
            <p>Reduced Crop Loss</p>
          </div>

          <div style={impactCard}>
            <h1>24/7</h1>
            <p>AI Assistance</p>
          </div>

          <div style={impactCard}>
            <h1>5+</h1>
            <p>Languages Supported</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const card = {
  background: "white",
  padding: "25px",
  borderRadius: "20px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
};

const impactCard = {
  background: "white",
  padding: "30px",
  borderRadius: "20px",
  minWidth: "180px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
};
