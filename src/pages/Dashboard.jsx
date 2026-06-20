import { useState } from "react";
import axios from "axios";

import CameraFeed from "../components/CameraFeed";
import ControlPanel from "../components/ControlPanel";
import AIChatbot from "../components/AIChatbot";

export default function Dashboard() {
  const [status, setStatus] = useState("Idle");
  const [detection, setDetection] = useState("None");
  const [health, setHealth] = useState("Unknown");
  const [symptoms, setSymptoms] = useState("");

  const API = axios.create({
    baseURL: "http://127.0.0.1:5000",
  });

  const detectFlower = async () => {
    try {
      const res = await API.get("/detect");

      setDetection(res.data.flower);
    } catch (err) {
      console.error(err);
      setDetection("Backend Error");
    }
  };

  const checkInfection = async () => {
    try {
      const res = await API.post("/infection", {
        symptoms,
      });

      if (res.data.found) {
        setHealth(res.data.disease);
      } else {
        setHealth("No disease found");
      }
    } catch (err) {
      console.error(err);
      setHealth("Plant Health Error");
    }
  };

  const pollinate = async () => {
    try {
      const res = await API.get("/pollinate");

      if (res.data.error) {
        setStatus(res.data.error);
        return;
      }

      const steps = res.data.steps;

      for (let i = 0; i < steps.length; i++) {
        setStatus(steps[i]);

        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    } catch (err) {
      console.error(err);
      setStatus("Mission Error");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#d3edd3",
        color: "#68f074",
        padding: "20px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            color: "#2E4A3F",
          }}
        >
          🌸Hivemind AI🌸
        </h1>

        <p
          style={{
            color: "#5A7D6B",
            fontSize: "1.2rem",
          }}
        >
          AI Powered Flower Detection, Disease Diagnosis & Smart Pollination
          Assistance
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <CameraFeed />

        <ControlPanel
          detectFlower={detectFlower}
          checkInfection={checkInfection}
          pollinate={pollinate}
          setSymptoms={setSymptoms}
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div style={card}>
          <h3>🚁 Drone Status</h3>
          {status}
        </div>

        <div style={card}>
          <h3>🌸 Detection</h3>
          {detection}
        </div>

        <div style={card}>
          <h3>🌿 Plant Health</h3>
          {health}
        </div>
      </div>

      <AIChatbot />
    </div>
  );
}

const card = {
  background: "#FFFFFF",
  color: "#2E4A3F",
  padding: "20px",
  borderRadius: "20px",
  flex: 1,
  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
};
