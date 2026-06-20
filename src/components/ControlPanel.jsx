export default function ControlPanel({
  detectFlower,
  checkInfection,
  pollinate,
  setSymptoms,
}) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        flex: 1,
        borderRadius: "10px",
      }}
    >
      <h2>⚙️ Controls</h2>

      <button style={btn} onClick={detectFlower}>
        Detect Flower
      </button>

      <input
        placeholder="Enter symptoms"
        style={input}
        onChange={(e) => setSymptoms(e.target.value)}
      />

      <button style={btn} onClick={checkInfection}>
        Check Infection
      </button>

      <button
        style={{ ...btn, background: "#ffcc00", color: "black" }}
        onClick={pollinate}
      >
        Start Pollination
      </button>
    </div>
  );
}

const btn = {
  display: "block",
  marginTop: "10px",
  padding: "10px",
  width: "100%",
  border: "none",
  background: "#4CAF50",
  color: "white",
  borderRadius: "5px",
  cursor: "pointer",
};

const input = {
  marginTop: "10px",
  padding: "10px",
  width: "100%",
  borderRadius: "5px",
  border: "1px solid #ccc",
};
