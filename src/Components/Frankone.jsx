import React, { useState, useEffect } from "react";
import kelimeler from "../utils/Frankone";
import { Link } from "react-router-dom";

const Frankone = ({ onReturn }) => {
  // localStorage'dan kayıtlı ilerlemeyi yükle
  const savedProgress = JSON.parse(localStorage.getItem("testOneProgress"));
  const initialIndex = savedProgress?.currentIndex || 0;
  const initialAnswers = savedProgress?.answers || {};

  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [choices, setChoices] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [userAnswers, setUserAnswers] = useState(initialAnswers);

  useEffect(() => {
    const loadQuestion = () => {
      if (currentIndex < kelimeler.length) {
        const question = kelimeler[currentIndex];
        setCurrentQuestion(question);

        const splitResult = question.kelime.split(/:\s*/);
        const correctAnswer =
          splitResult.length > 1 ? splitResult[1].trim() : "";

        const wrongAnswers = kelimeler
          .filter((k) => k.kelime !== question.kelime)
          .map((k) => {
            const parts = k.kelime.split(/:\s*/);
            return parts.length > 1 ? parts[1].trim() : "";
          })
          .filter(Boolean);

        const randomWrongIndex = Math.floor(
          Math.random() * wrongAnswers.length
        );
        const mixedChoices = [
          correctAnswer,
          wrongAnswers[randomWrongIndex || 0],
        ].sort(() => Math.random() - 0.5);

        setChoices(mixedChoices);
        setShowAnswer(false);
        setSelectedAnswer(null);
      }
    };

    loadQuestion();
  }, [currentIndex]);

  // Her değişiklikte localStorage'a kaydet
  useEffect(() => {
    const progress = {
      currentIndex,
      answers: userAnswers,
      timestamp: new Date().getTime(),
    };

    localStorage.setItem("testOneProgress", JSON.stringify(progress));
  }, [currentIndex, userAnswers]);

  const handleAnswer = (choice) => {
    if (!currentQuestion) return;

    const correctAnswer = currentQuestion.kelime.split(/:\s*/)[1]?.trim();
    const isCorrect = choice === correctAnswer;

    setUserAnswers((prev) => ({
      ...prev,
      [currentIndex]: {
        question: currentQuestion.kelime,
        userChoice: choice,
        isCorrect,
        timestamp: new Date().toISOString(),
      },
    }));

    setSelectedAnswer(choice);
    setShowAnswer(true);
  };

  const getButtonStyle = (choice) => {
    const baseStyle = {
      padding: "10px 20px",
      margin: "5px",
      cursor: "pointer",
      border: "1px solid #ddd",
      borderRadius: "5px",
      fontSize: "16px",
      minWidth: "200px",
      textAlign: "center",
    };

    if (!showAnswer) return baseStyle;

    const correctAnswer = currentQuestion.kelime.split(/:\s*/)[1]?.trim();
    const isCorrect = choice === correctAnswer;

    if (isCorrect) return { ...baseStyle, backgroundColor: "#90EE90" };
    if (choice === selectedAnswer)
      return { ...baseStyle, backgroundColor: "#FFCCCB" };
    return baseStyle;
  };

  const resetProgress = () => {
    localStorage.removeItem("testOneProgress");
    setCurrentIndex(0);
    setUserAnswers({});
    setShowAnswer(false);
    onReturn();
  };

  if (currentIndex >= kelimeler.length) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h2 style={{ color: "#27ae60" }}>
          🎉 Tebrikler! Tüm testi tamamladınız!
        </h2>
        <div style={{ marginTop: "30px" }}>
          <button
            onClick={resetProgress}
            style={{
              padding: "12px 30px",
              backgroundColor: "#3498db",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              margin: "0 10px",
            }}
          >
            Yeniden Başlat
          </button>
          <button
            onClick={onReturn}
            style={{
              padding: "12px 30px",
              backgroundColor: "#e74c3c",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              margin: "0 10px",
            }}
          >
            Ana Menüye Dön
          </button>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return <div style={{ padding: "50px" }}>Yükleniyor...</div>;
  }

  const germanWord = currentQuestion.kelime.split(/:\s*/)[0];

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          to={-1}
          className="bg-amber-300 px-3 py-2 rounded-md hover:bg-amber-400 transition-colors"
        >
          Geri
        </Link>
        <span style={{ color: "#7f8c8d" }}>
          İlerleme: {Math.round((currentIndex / kelimeler.length) * 100)}%
        </span>
      </div>

      <div style={{ margin: "30px 0" }}>
        <h2 style={{ color: "#7f8c8d", fontSize: "24px" }}>{germanWord}</h2>
        <p style={{ color: "#7f8c8d", marginTop: "10px" }}>
          Soru {currentIndex + 1}/{kelimeler.length}
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#f8f9fa",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "30px",
        }}
      >
        <p style={{ fontSize: "16px", color: "#666" }}>
          <strong>📝 Örnek Cümle:</strong> {currentQuestion.cümle}
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gap: "15px",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => handleAnswer(choice)}
            style={getButtonStyle(choice)}
            disabled={showAnswer}
          >
            {choice}
          </button>
        ))}
      </div>

      {showAnswer && (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button
            onClick={() => setCurrentIndex((prev) => prev + 1)}
            style={{
              padding: "12px 30px",
              backgroundColor: "#2ecc71",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              transition: "transform 0.2s",
            }}
            className="hover:scale-105"
          >
            Sonraki Soru →
          </button>
        </div>
      )}
    </div>
  );
};

export default Frankone;
