import React, { useState, useEffect } from "react";
import data from "../../utils/Anasorular";

const Anatest = () => {
  const questions = data;
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
  const totalQuestions = questions.length;
  const answeredQuestions = currentQuestionIndex + 1;
  const remainingQuestions = totalQuestions - answeredQuestions;

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (answer === currentQuestion.correctAnswer) {
      setFeedback("Doğru!");
    } else {
      setFeedback(`Yanlış! Doğru cevap: ${currentQuestion.correctAnswer}`);
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
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md m-auto">
      {/* İlerleme Bilgisi ve Çubuğu */}
      <div className="mb-6 bg-gray-100 p-3 rounded-lg">
        <div className="flex justify-between text-sm font-medium text-neutral-700">
          <span>Toplam: {totalQuestions}</span>
          <span>Cevaplanan: {answeredQuestions}</span>
          <span>Kalan: {remainingQuestions}</span>
        </div>
        <div className="mt-2 w-full bg-gray-300 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${(answeredQuestions / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-neutral-900 bg-gray-100 p-2 rounded-lg">
        {currentQuestion.question}
      </h2>
      <div className="space-y-2">
        {currentQuestion.options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleAnswer(option.value)}
            disabled={selectedAnswer !== null}
            className={`w-full p-3 text-left rounded-lg border text-neutral-900 font-medium
              ${
                selectedAnswer === option.value
                  ? option.value === currentQuestion.correctAnswer
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
            {option.value}: {option.text}
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
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300 hover:bg-blue-600 transition-colors"
        >
          Geri
        </button>
        <button
          onClick={handleNext}
          disabled={currentQuestionIndex === questions.length - 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300 hover:bg-blue-600 transition-colors"
        >
          İleri
        </button>
      </div>
      <div className="mt-4">
        <button
          onClick={toggleWrongAnswers}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          {showWrongAnswers ? "Yanlışları Gizle" : "Yanlışları Göster"}
        </button>
        {showWrongAnswers && (
          <div className="mt-2">
            <h3 className="font-semibold text-neutral-900 mt-4 mb-2">
              Yanlış Yanıtlanan Sorular:
            </h3>
            {wrongAnswers.length > 0 ? (
              wrongAnswers.map((index) => {
                const wrongQuestion = questions[index];
                if (!wrongQuestion) return null;

                return (
                  <div key={index} className="mt-4 border-t pt-4">
                    <p className="font-medium text-neutral-900">
                      {wrongQuestion.question}
                    </p>
                    <div className="space-y-2 mt-2">
                      {wrongQuestion.options.map((option) => (
                        <p
                          key={option.value}
                          className={`p-2 rounded-lg text-neutral-900 ${
                            option.value === wrongQuestion.correctAnswer
                              ? "bg-green-200 border border-green-600"
                              : "bg-gray-200 border border-gray-400"
                          }`}
                        >
                          {option.value}: {option.text}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="mt-2 text-neutral-900 p-2 bg-gray-100 rounded-lg">
                Henüz yanlış yanıtlanmış soru yok.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Anatest;
