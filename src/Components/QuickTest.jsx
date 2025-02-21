import React, { useState, useEffect } from "react";

function QuickTest({ words, onComplete }) {
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else {
      handleSubmit();
    }
  }, [timeLeft]);

  const handleAnswerChange = (fiil, value) => {
    setAnswers((prev) => ({ ...prev, [fiil]: value }));
  };

  const handleSubmit = () => {
    const results = words.map((word) => ({
      word,
      correct:
        answers[word.fiil]?.toLowerCase().trim() ===
        word.anlam.toLowerCase().trim(),
    }));
    onComplete(results);
  };

  return (
    <div className="quiz-modal">
      <h2>Hızlı Test (Kalan Süre: {timeLeft}s)</h2>
      {words.map((word) => (
        <div key={word.fiil} className="quiz-item">
          <p>{word.fiil}</p>
          <input
            type="text"
            value={answers[word.fiil] || ""}
            onChange={(e) => handleAnswerChange(word.fiil, e.target.value)}
            placeholder="Anlamı yaz..."
          />
        </div>
      ))}
      <button onClick={handleSubmit} disabled={timeLeft === 0}>
        Testi Bitir
      </button>
    </div>
  );
}

export default QuickTest;
