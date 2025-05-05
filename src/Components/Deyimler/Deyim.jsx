import React, { useState, useEffect } from "react";
import idiomsData from "../../utils/deyim.json";

const Quiz = ({ allIdioms, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  // Get random incorrect options
  const getRandomIncorrectOptions = (correctIdiom) => {
    const otherIdioms = allIdioms.filter(
      (idiom) => idiom.deyim !== correctIdiom.deyim
    );
    const shuffled = otherIdioms.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2).map((idiom) => idiom.anlam);
  };

  // Current idiom and answer options
  const currentIdiom = allIdioms[currentQuestion];
  const correctAnswer = currentIdiom.anlam;
  const incorrectOptions = getRandomIncorrectOptions(currentIdiom);
  const answerOptions = [correctAnswer, ...incorrectOptions].sort(
    () => 0.5 - Math.random()
  );

  // Handle answer selection
  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === correctAnswer);
  };

  // Navigate to the next question
  const handleNext = () => {
    setCurrentQuestion((prev) => (prev + 1) % allIdioms.length);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  // Navigate to the previous question
  const handlePrevious = () => {
    setCurrentQuestion(
      (prev) => (prev - 1 + allIdioms.length) % allIdioms.length
    );
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          ✕
        </button>
        <h1 className="text-2xl font-bold text-center mb-4">
          Almanca Deyimler Testi
        </h1>
        <div className="mb-4">
          <p className="text-lg font-semibold">
            Soru {currentQuestion + 1}/{allIdioms.length}: "{currentIdiom.deyim}
            " ne anlama gelir?
          </p>
        </div>
        <div className="space-y-2">
          {answerOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(option)}
              disabled={selectedAnswer !== null}
              className={`w-full p-3 rounded text-left transition-colors ${
                selectedAnswer === option
                  ? isCorrect
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              } ${
                selectedAnswer !== null
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        {selectedAnswer && (
          <p className="mt-4 text-center">
            {isCorrect ? "Doğru!" : `Yanlış! Doğru cevap: ${correctAnswer}`}
          </p>
        )}
        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrevious}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            ← Geri
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            İleri →
          </button>
        </div>
      </div>
    </div>
  );
};

const Deyim = () => {
  // Tüm deyimleri tek bir düz diziye çevir
  const allIdioms = Object.values(idiomsData).flat();

  // State'ler
  const [currentIndex, setCurrentIndex] = useState(() => {
    return parseInt(localStorage.getItem("currentIdiomIndex")) || 0;
  });
  const [showDetails, setShowDetails] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  // Mevcut deyimi al
  const idiom = allIdioms[currentIndex];

  // İleri/geri gezinme
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % allIdioms.length);
    setShowDetails(false);
    setShowTranslation(false);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + allIdioms.length) % allIdioms.length);
    setShowDetails(false);
    setShowTranslation(false);
  };

  // localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("currentIdiomIndex", currentIndex);
  }, [currentIndex]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {showQuiz ? (
        <Quiz allIdioms={allIdioms} onClose={() => setShowQuiz(false)} />
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-6 text-blue-600">
            Almanca Deyimler
          </h1>
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {idiom.deyim}
            </h2>

            <div className="flex space-x-2 mb-4">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
              >
                {showDetails ? "Açıklamayı Gizle" : "Açıklama"}
              </button>
              <button
                onClick={() => setShowQuiz(true)}
                className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
              >
                Test
              </button>
            </div>

            {showDetails && (
              <div className="mt-4">
                <p className="text-gray-600">
                  <span className="font-bold">Anlam:</span> {idiom.anlam}
                </p>
                <p className="text-gray-600 mt-2">
                  <span className="font-bold">Örnek Cümle:</span>{" "}
                  {idiom.ornek_cumle_almanca}
                </p>
                <button
                  onClick={() => setShowTranslation(!showTranslation)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition mt-2"
                >
                  {showTranslation
                    ? "Cümlenin Anlamını Gizle"
                    : "Cümlenin Anlamını Aç"}
                </button>
                {showTranslation && (
                  <p className="text-gray-600 mt-2">
                    <span className="font-bold">Cümlenin Türkçe Anlamı:</span>{" "}
                    {idiom.ornek_cumle_turkce}
                  </p>
                )}
              </div>
            )}
          </div>
          <div className="flex space-x-4 mt-6">
            <button
              onClick={handlePrevious}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              ← Geri
            </button>
            <button
              onClick={handleNext}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              İleri →
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Deyim;
