import React, { useState, useEffect } from "react";
import almancaFiiller from "../utils/ almancakelimeler";
import { Link } from "react-router-dom";
function Game() {
  const [currentIndex, setCurrentIndex] = useState(() => {
    // localStorage'dan mevcut indexi al, yoksa 0'a başla
    const savedIndex = localStorage.getItem("currentIndex");
    return savedIndex ? JSON.parse(savedIndex) : 0;
  });
  const [isListening, setIsListening] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(() => {
    // localStorage'dan mevcut skoru al, yoksa 0'a başla
    const savedScore = localStorage.getItem("score");
    return savedScore ? JSON.parse(savedScore) : 0;
  });
  const [userSpeech, setUserSpeech] = useState("");

  const currentItem = almancaFiiller[currentIndex];

  // Hem fiil hem kelime için ortak çözüm
  const targetGerman = currentItem.fiil || currentItem.kelime;
  const displayedTurkish = currentItem.anlam;
  const exampleSentence = currentItem.cumle;

  const playSuccessSound = () => {
    new Audio("/sounds/success.mp3").play().catch(console.error);
  };

  const playPronunciation = () => {
    const utterance = new SpeechSynthesisUtterance(targetGerman);
    utterance.lang = "de-DE";
    speechSynthesis.speak(utterance);
  };

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setFeedback({ correct: false, message: "⚠️ Tarayıcı desteği yok!" });
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "de-DE";
    recognition.onresult = (e) => {
      const said = e.results[0][0].transcript.trim();
      setUserSpeech(said);

      const normalize = (str) => str.toLowerCase().normalize("NFD");
      const isCorrect = normalize(said) === normalize(targetGerman);

      setFeedback({
        correct: isCorrect,
        message: isCorrect
          ? `✅ Doğru! Örnek Cümle: "${exampleSentence}"`
          : `❌ Doğrusu: ${targetGerman} (Örnek: ${exampleSentence})`,
      });

      setScore((prev) => {
        const newScore = isCorrect ? prev + 10 : Math.max(0, prev - 5);
        // Skoru localStorage'a kaydet
        localStorage.setItem("score", JSON.stringify(newScore));
        return newScore;
      });

      if (isCorrect) playSuccessSound();
      setIsListening(false);
    };

    recognition.start();
    setIsListening(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const newIndex = (prev + 1) % almancaFiiller.length;
      // currentIndex'i localStorage'a kaydet
      localStorage.setItem("currentIndex", JSON.stringify(newIndex));
      return newIndex;
    });
    setFeedback(null);
    setUserSpeech("");
  };

  useEffect(() => {
    // İlk renderda skor ve indexi kaydet
    localStorage.setItem("score", JSON.stringify(score));
    localStorage.setItem("currentIndex", JSON.stringify(currentIndex));
  }, [score, currentIndex]);

  return (
    <div className="container">
      <div>
        <Link
          to="/"
          className="bg-amber-300 absolute  px-3  rounded-md top-2 left-[40px]"
        >
          Geri
        </Link>
      </div>
      <h1>🌍 Çevre Temalı Almanca Pratik</h1>
      <h2>Skor: {score} ⚡</h2>

      <div className="card">
        <h3>Türkçe: {displayedTurkish}</h3>
        <p className="hint">
          {targetGerman.startsWith("Umwelt") ? "İsim ➔" : "Fiil ➔"}
        </p>
      </div>

      <div className="controls">
        <button onClick={playPronunciation} disabled={isListening}>
          {targetGerman.length > 12
            ? "🔊 Uzun Kelime Dinle"
            : "🔊 Telaffuz Dinle"}
        </button>
        <button onClick={startListening} disabled={isListening}>
          {isListening ? "🎤 Dinleniyor..." : "🎙️ Almanca Söyle"}
        </button>
      </div>

      {userSpeech && (
        <div className={`result ${feedback?.correct ? "success" : "error"}`}>
          <p>
            Söylediğin: <strong>{userSpeech}</strong>
          </p>
          <p>{feedback?.message}</p>
        </div>
      )}

      <button className="next" onClick={handleNext}>
        {currentIndex === almancaFiiller.length - 1
          ? "🔄 Başa Dön"
          : "⏭️ Sonraki Kelime"}
      </button>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 2rem auto;
          padding: 1.5rem;
          background: #f5f7fa;
          border-radius: 15px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .card {
          background: white;
          padding: 2rem;
          margin: 2rem 0;
          border-radius: 12px;
          border-left: 5px solid #4caf50;
          transition: transform 0.3s ease;
        }

        .card:hover {
          transform: translateY(-3px);
        }

        .hint {
          color: #666;
          font-size: 0.9em;
          margin-top: 0.5rem;
        }

        .controls {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin: 2rem 0;
        }

        button {
          background: #2196f3;
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        button:hover:not(:disabled) {
          background: #1976d2;
          transform: scale(1.05);
        }

        .result {
          padding: 1.5rem;
          margin: 1.5rem 0;
          border-radius: 8px;
          animation: fadeIn 0.5s;
        }

        .success {
          background: #e8f5e9;
          border: 2px solid #4caf50;
          color: #2e7d32;
        }

        .error {
          background: #ffebee;
          border: 2px solid #ef5350;
          color: #c62828;
        }

        .next {
          background: #9c27b0;
          width: 100%;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Game;
