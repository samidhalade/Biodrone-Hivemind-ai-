import { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [language, setLanguage] = useState("English");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const { transcript, resetTranscript } = useSpeechRecognition();

  async function askAI() {
    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `Answer in ${language}: ${message}`,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: data.response,
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Unable to connect to AI Assistant.",
        },
      ]);
    }

    setLoading(false);
    setMessage("");
    resetTranscript();
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          border: "none",
          fontSize: "30px",
          cursor: "pointer",
          background: "#7ED957",
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          zIndex: 9999,
        }}
      >
        🤖
      </button>

      {/* Chat Window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "110px",
            right: "20px",
            width: "380px",
            background: "white",
            borderRadius: "25px",
            padding: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            zIndex: 9999,
          }}
        >
          <h2
            style={{
              color: "#2E4A3F",
              marginBottom: "10px",
            }}
          >
            🤖 Biodrone AI Assistant
          </h2>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "10px",
              marginBottom: "10px",
              border: "1px solid #ddd",
            }}
          >
            <option>English</option>
            <option>Hindi</option>
            <option>Marathi</option>
            <option>Tamil</option>
            <option>Kannada</option>
          </select>

          {/* Messages */}
          <div
            style={{
              height: "260px",
              overflowY: "auto",
              background: "#FAFAFA",
              padding: "12px",
              borderRadius: "15px",
              border: "1px solid #E5E7EB",
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  textAlign: msg.sender === "user" ? "right" : "left",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    padding: "10px 14px",
                    borderRadius: "12px",
                    background: msg.sender === "user" ? "#DFF4FF" : "#F3F4F6",
                    color: "#111827",
                    border: "1px solid #E5E7EB",
                    maxWidth: "80%",
                    wordWrap: "break-word",
                  }}
                >
                  <div>{msg.text}</div>

                  {msg.sender === "ai" && (
                    <button
                      onClick={() => {
                        const speech = new SpeechSynthesisUtterance(msg.text);

                        speech.lang =
                          language === "Hindi"
                            ? "hi-IN"
                            : language === "Marathi"
                              ? "mr-IN"
                              : language === "Tamil"
                                ? "ta-IN"
                                : language === "Kannada"
                                  ? "kn-IN"
                                  : "en-US";

                        window.speechSynthesis.speak(speech);
                      }}
                      style={{
                        marginTop: "8px",
                        padding: "4px 8px",
                        borderRadius: "8px",
                        border: "1px solid #D1D5DB",
                        background: "white",
                        cursor: "pointer",
                        fontSize: "12px",
                      }}
                    >
                      🔊 Read Aloud
                    </button>
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div
                style={{
                  color: "#666",
                  marginTop: "10px",
                }}
              >
                🤖 Thinking...
              </div>
            )}
          </div>

          {/* Input */}
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask about crops, diseases, pollination..."
            style={{
              width: "100%",
              marginTop: "10px",
              padding: "12px",
              borderRadius: "12px",
              border: "1px solid #ddd",
              boxSizing: "border-box",
            }}
          />

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <button
              onClick={() => SpeechRecognition.startListening()}
              style={button}
            >
              🎤
            </button>

            <button onClick={() => setMessage(transcript)} style={button}>
              Voice
            </button>

            <button
              onClick={askAI}
              style={{
                ...button,
                background: "#7ED957",
                color: "white",
                flex: 1,
              }}
            >
              Ask AI
            </button>
          </div>
        </div>
      )}
    </>
  );
}

const button = {
  padding: "10px",
  borderRadius: "10px",
  border: "none",
  cursor: "pointer",
};
