import { useEffect, useRef } from "react";

export default function CameraFeed() {
  const videoRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        videoRef.current.srcObject = stream;
      } catch (err) {
        console.error("Camera access denied:", err);
      }
    };

    startCamera();
  }, []);

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        flex: 1,
        borderRadius: "10px",
      }}
    >
      <h2>🎥 Live Camera</h2>

      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
    </div>
  );
}
