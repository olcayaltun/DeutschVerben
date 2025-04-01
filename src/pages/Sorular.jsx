import React, { useState, useEffect } from "react";
import questions from "../utils/questions";

function Sorular() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [correct, setCorrect] = useState(null);

  // Sayfa yüklendiğinde Local Storage'dan verileri çek
  useEffect(() => {
    const savedQuestion = localStorage.getItem("currentQuestion");
    const savedScore = localStorage.getItem("score");
    const savedShowResult = localStorage.getItem("showResult");

    if (savedQuestion !== null) setCurrentQuestion(Number(savedQuestion));
    if (savedScore !== null) setScore(Number(savedScore));
    if (savedShowResult === "true") setShowResult(true);
  }, []);

  // Her soru değiştiğinde verileri kaydet
  useEffect(() => {
    localStorage.setItem("currentQuestion", currentQuestion);
    localStorage.setItem("score", score);
    localStorage.setItem("showResult", showResult);
  }, [currentQuestion, score, showResult]);

  const handleOptionSelect = (optionValue) => {
    setSelectedOption(optionValue);
    const correctAnswer = questions[currentQuestion].correctAnswer;

    if (optionValue === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
      setFeedback("✅ Doğru! 🎉");
      setCorrect(true);
    } else {
      setFeedback(
        `❌ Yanlış. Doğru cevap: ${
          questions[currentQuestion].options.find(
            (opt) => opt.value === correctAnswer
          ).text
        }`
      );
      setCorrect(false);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setFeedback("");
    setCorrect(null);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
    setFeedback("");
    setCorrect(null);
    localStorage.removeItem("currentQuestion");
    localStorage.removeItem("score");
    localStorage.removeItem("showResult");
  };

  if (showResult) {
    return (
      <div className="result-container text-white text-center p-5">
        <h2 className="text-2xl font-bold">Test Bitti!</h2>
        <p className="text-lg">
          Skorun: <span className="font-bold">{score}</span> /{" "}
          {questions.length}
        </p>
        <button
          onClick={handleRestart}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg mt-4"
        >
          Yeniden Başla
        </button>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="quiz-container text-amber-50 text-center p-6">
      <h2 className="text-xl font-semibold mb-3">
        Soru {currentQuestion + 1}/{questions.length}
      </h2>
      <p className="text-lg mb-4">{currentQ.question}</p>
      <div className="options flex flex-col gap-3">
        {currentQ.options.map((option) => (
          <button
            key={option.value}
            className={`px-4 py-2 text-lg rounded-lg text-white transition-all duration-200 ${
              selectedOption === option.value
                ? option.value === currentQ.correctAnswer
                  ? "bg-green-500"
                  : "bg-red-500"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
            onClick={() => handleOptionSelect(option.value)}
            disabled={selectedOption !== null}
          >
            {option.text}
          </button>
        ))}
      </div>

      {feedback && (
        <div className="mt-4">
          <p
            className={`text-lg font-semibold ${
              correct ? "text-green-400" : "text-red-400"
            }`}
          >
            {feedback}
          </p>
          <button
            onClick={handleNextQuestion}
            className={`mt-3 px-6 py-2 rounded-lg text-lg text-white transition-all duration-200 ${
              correct
                ? "bg-green-500 hover:bg-green-600"
                : "bg-red-500 hover:bg-red-600"
            }`}
          >
            {currentQuestion + 1 < questions.length
              ? "Sonraki Soru"
              : "Testi Bitir"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Sorular;
