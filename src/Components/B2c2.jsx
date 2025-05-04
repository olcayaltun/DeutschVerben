import React, { useState, useEffect } from "react";
import data from "../utils/Data/data"; // Bu dosya bir dizi veya bir nesne olabilir

const B2c1 = () => {
  // Eğer data bir dizi ise:
  const questions = data;
  console.log(questions.length);

  // Eğer data bir nesne ve içinde questions varsa:
  // const questions = data.questions;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(() => {
    return parseInt(localStorage.getItem("currentQuestionIndex")) || 0;
  });
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [wrongAnswers, setWrongAnswers] = useState(() => {
    return JSON.parse(localStorage.getItem("wrongAnswers")) || [];
  });
  const [showWrongAnswers, setShowWrongAnswers] = useState(false);

  useEffect(() => {
    localStorage.setItem("currentQuestionIndex", currentQuestionIndex);
  }, [currentQuestionIndex]);

  useEffect(() => {
    localStorage.setItem("wrongAnswers", JSON.stringify(wrongAnswers));
  }, [wrongAnswers]);

  if (!questions || questions.length === 0) {
    return <p className="text-red-600">Veri yüklenemedi.</p>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (answer === currentQuestion.correct) {
      setFeedback("Doğru!");
    } else {
      setFeedback(`Yanlış! Doğru cevap: ${currentQuestion.correct}`);
      if (!wrongAnswers.includes(currentQuestionIndex)) {
        setWrongAnswers([...wrongAnswers, currentQuestionIndex]);
      }
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      resetState();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      resetState();
    }
  };

  const resetState = () => {
    setSelectedAnswer(null);
    setFeedback("");
  };

  const toggleWrongAnswers = () => {
    setShowWrongAnswers(!showWrongAnswers);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-neutral-900 bg-gray-100 p-2 rounded-lg">
        {currentQuestion.question}
      </h2>
      <div className="space-y-2">
        {Object.entries(currentQuestion.options).map(([key, value]) => (
          <button
            key={key}
            onClick={() => handleAnswer(key)}
            disabled={selectedAnswer !== null}
            className={`w-full p-3 text-left rounded-lg border text-neutral-900 font-medium
              ${
                selectedAnswer === key
                  ? key === currentQuestion.correct
                    ? "bg-green-200 border-green-600"
                    : "bg-red-200 border-red-600"
                  : "bg-gray-200 border-gray-400 hover:bg-gray-300"
              }
              ${
                selectedAnswer !== null
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              }
            `}
          >
            {key}: {value}
          </button>
        ))}
      </div>
      {feedback && (
        <p
          className={`mt-4 text-lg ${
            feedback.includes("Doğru") ? "text-green-600" : "text-red-600"
          }`}
        >
          {feedback}
        </p>
      )}
      <div className="mt-6 flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
        >
          Geri
        </button>
        <button
          onClick={handleNext}
          disabled={currentQuestionIndex === questions.length - 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
        >
          İleri
        </button>
      </div>
      <div className="mt-4">
        <button
          onClick={toggleWrongAnswers}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          {showWrongAnswers ? "Yanlışları Gizle" : "Yanlışları Göster"}
        </button>
        {showWrongAnswers && (
          <div className="mt-2">
            <h3 className="font-semibold text-neutral-900">
              Yanlış Yanıtlanan Sorular:
            </h3>
            {wrongAnswers.length > 0 ? (
              wrongAnswers.map((index) => {
                const wrongQuestion = questions[index];
                if (!wrongQuestion) return null;

                return (
                  <div key={index} className="mt-4 border-t pt-2">
                    <p className="font-medium text-neutral-900">
                      {wrongQuestion.question}
                    </p>
                    <div className="space-y-2 mt-2">
                      {Object.entries(wrongQuestion.options).map(
                        ([key, value]) => (
                          <p
                            key={key}
                            className={`p-2 rounded-lg text-neutral-900 ${
                              key === wrongQuestion.correct
                                ? "bg-green-200 border border-green-600"
                                : "bg-gray-200 border border-gray-400"
                            }`}
                          >
                            {key}: {value}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="mt-2 text-neutral-900">
                Henüz yanlış yanıtlanmış soru yok.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default B2c1;
