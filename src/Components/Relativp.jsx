import React, { useState, useEffect } from "react";
import sentencesData from "../utils/sentencesData";

const Relativp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [allSentences, setAllSentences] = useState([]);

  // Flatten sentencesData to get all sentences in order
  useEffect(() => {
    const flattenedSentences = [];
    sentencesData.forEach((category) => {
      category.subcategories.forEach((subcategory) => {
        subcategory.sentences.forEach((sentence) => {
          flattenedSentences.push({
            ...sentence,
            category: category.category,
            subcategory: subcategory.subcategory,
          });
        });
      });
    });
    setAllSentences(flattenedSentences);

    // Load progress from localStorage
    const savedIndex = localStorage.getItem("quizProgress");
    const savedWrongAnswers = localStorage.getItem("wrongAnswers");
    if (savedIndex) setCurrentIndex(parseInt(savedIndex));
    if (savedWrongAnswers) setWrongAnswers(JSON.parse(savedWrongAnswers));
  }, []);

  // Generate options for the current question
  useEffect(() => {
    if (allSentences.length === 0) return;

    const currentSentence = allSentences[currentIndex];
    const correctAnswer = currentSentence.antwort;

    // Find other possible answers from the same category
    const sameCategorySentences = allSentences.filter(
      (s) =>
        s.category === currentSentence.category && s.antwort !== correctAnswer
    );
    const otherAnswers = [
      ...new Set(sameCategorySentences.map((s) => s.antwort)),
    ];

    // Randomly select 3 incorrect answers
    const shuffledOthers = otherAnswers
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    const allOptions = [correctAnswer, ...shuffledOthers].sort(
      () => Math.random() - 0.5
    );

    setOptions(allOptions);
    setSelectedOption(null);
    setFeedback("");

    // Save progress
    localStorage.setItem("quizProgress", currentIndex);
  }, [currentIndex, allSentences]);

  // Handle option selection
  const handleOptionClick = (option) => {
    const currentSentence = allSentences[currentIndex];
    setSelectedOption(option);

    if (option === currentSentence.antwort) {
      setFeedback("Doğru! 🎉");
    } else {
      setFeedback(`Yanlış! Doğru cevap: ${currentSentence.antwort}`);
      const newWrongAnswer = {
        sentence: currentSentence.de,
        translation: currentSentence.tr,
        selected: option,
        correct: currentSentence.antwort,
      };
      const updatedWrongAnswers = [...wrongAnswers, newWrongAnswer];
      setWrongAnswers(updatedWrongAnswers);
      localStorage.setItem("wrongAnswers", JSON.stringify(updatedWrongAnswers));
    }
  };

  // Navigation handlers
  const handleNext = () => {
    if (currentIndex < allSentences.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (allSentences.length === 0)
    return <div className="text-center">Yükleniyor...</div>;

  const currentSentence = allSentences[currentIndex];
  const questionText = currentSentence.de.replace(
    currentSentence.antwort,
    "...."
  );

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Almanca Relativpronomen Testi
      </h1>

      {/* Question Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <p className="text-lg mb-2">{questionText}</p>
        <p className="text-gray-600 italic">{currentSentence.tr}</p>
      </div>

      {/* Options Section */}
      <div className="grid gap-4 mb-6">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            disabled={selectedOption !== null}
            className={`p-4 border rounded-lg text-left ${
              selectedOption === option
                ? option === currentSentence.antwort
                  ? "bg-green-100 border-green-500"
                  : "bg-red-100 border-red-500"
                : "bg-gray-100 hover:bg-gray-200"
            } ${
              selectedOption !== null ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Feedback Section */}
      {feedback && (
        <div
          className={`p-4 rounded-lg mb-6 ${
            feedback.includes("Doğru")
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {feedback}
        </div>
      )}

      {/* Navigation Section */}
      <div className="flex justify-between mb-6">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Önceki
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === allSentences.length - 1}
          className="px-4 py-2 bg-blue-500  text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Sonraki
        </button>
      </div>

      {/* Wrong Answers Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Yanlış Cevaplar</h2>
        {wrongAnswers.length === 0 ? (
          <p>Henüz yanlış cevap yok.</p>
        ) : (
          <ul className="space-y-4">
            {wrongAnswers?.map((wrong, index) => (
              <li key={index} className="border-b pb-2">
                <p>
                  <strong>Soru:</strong> {wrong.sentence}
                </p>
                <p>
                  <strong>Çeviri:</strong> {wrong.translation}
                </p>
                <p>
                  <strong>Seçilen:</strong> {wrong.selected}
                </p>
                <p>
                  <strong>Doğru:</strong> {wrong.correct}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Relativp;
