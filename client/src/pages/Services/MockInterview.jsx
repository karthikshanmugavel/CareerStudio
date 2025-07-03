import React, { useState, useRef, useEffect } from "react";
import Lottie from "lottie-react";
import talkingAnimation from "../../routes/ai-talking.json"; // ✅ ensure correct path

function MockInterview() {
  const [recording, setRecording] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [threads, setThreads] = useState([]);
  const audioRef = useRef(null);
  const recognitionRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [threads]);

  const startRecording = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Your browser does not support Speech Recognition. Use Chrome.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognitionRef.current = recognition;
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => setRecording(true);
    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      addUserThread(text);
      sendToBackend(text);
    };
    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setRecording(false);
    };
    recognition.onend = () => setRecording(false);

    recognition.start();
  };

  const addUserThread = (text) => {
    setThreads((prev) => [...prev, { user: text, ai: "" }]);
  };

  const updateLastThreadWithAI = (text) => {
    setThreads((prev) =>
      prev.map((item, index) =>
        index === prev.length - 1 ? { ...item, ai: text } : item
      )
    );
  };

  const sendToBackend = async (text) => {
    try {
      const response = await fetch(
        "https://hicore.pythonanywhere.com/interview",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text }),
        }
      );

      const contentType = response.headers.get("Content-Type");

      if (contentType && contentType.includes("application/json")) {
        const result = await response.json();
        const { reply, audio_base64 } = result;

        if (audio_base64) {
          const audioBlob = await (
            await fetch(`data:audio/mp3;base64,${audio_base64}`)
          ).blob();
          playAudio(audioBlob, reply);
        } else {
          if (reply) updateLastThreadWithAI(reply);
        }
      } else {
        const audioBlob = await response.blob();
        playAudio(audioBlob, "");
      }
    } catch (error) {
      console.error("Error sending text to backend:", error);
    }
  };

  const playAudio = (blob, reply = "") => {
    const audioUrl = URL.createObjectURL(blob);
    const audio = new Audio(audioUrl);
    audioRef.current = audio;
    setIsSpeaking(true);
    audio.play();
    audio.onended = () => {
      setIsSpeaking(false);
      if (reply) {
        updateLastThreadWithAI(reply);
      } else {
        updateLastThreadWithAI("🗣️ AI responded with audio");
      }
    };
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsSpeaking(false);
    }
  };

  return (
    <div
      style={{
        padding: "40px 20px",
        maxWidth: "700px",
        margin: "auto",
        fontFamily: "Segoe UI, sans-serif",
        color: "#222",
      }}
    >
      <h1
        style={{
          fontSize: "26px",
          fontWeight: "600",
          marginBottom: "10px",
          textAlign: "center",
        }}
      >
        Live AI Mock Interview
      </h1>

      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <button
          onClick={startRecording}
          disabled={recording || isSpeaking}
          style={{
            padding: "12px 24px",
            backgroundColor: "#4f46e5",
            color: "#fff",
            fontSize: "16px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {recording ? "Listening..." : "Start Speaking"}
        </button>
      </div>

      {isSpeaking && (
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <button
            onClick={stopAudio}
            style={{
              backgroundColor: "#dc2626",
              color: "#fff",
              padding: "8px 16px",
              borderRadius: "6px",
              fontSize: "14px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Stop AI Response
          </button>
        </div>
      )}

      {/* Threaded chat history */}
      <div style={{ marginTop: "30px" }}>
        {threads.map((thread, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <div
              style={{
                backgroundColor: "#f3f4f6",
                padding: "12px 16px",
                borderRadius: "10px",
                marginBottom: "5px",
              }}
            >
              <strong style={{ color: "#4b5563" }}>You:</strong> {thread.user}
            </div>

            {thread.ai ? (
              <div
                style={{
                  backgroundColor: "#eefbf4",
                  padding: "12px 16px",
                  borderRadius: "10px",
                }}
              >
                <strong style={{ color: "#4b5563" }}>AI:</strong> {thread.ai}
              </div>
            ) : isSpeaking && index === threads.length - 1 ? (
              <div
                style={{
                  backgroundColor: "#e6fff4",
                  padding: "30px",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
              >
                <Lottie
                  animationData={talkingAnimation}
                  style={{ width: 250, height: 250, margin: "auto" }}
                />
              </div>
            ) : null}
          </div>
        ))}
        <div ref={bottomRef}></div>
      </div>
    </div>
  );
}

export default MockInterview;
