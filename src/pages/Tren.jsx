import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import Tr from "../utils/trB";

const Tren = () => {
  const [currentIndex, setCurrentIndex] = useState(
    parseInt(localStorage.getItem("currentIndex")) || 0
  );
  const keys = Object.keys(Tr[0]);
  const currentVerb = keys[currentIndex];
  const words = Tr[0][currentVerb];
  const wordKeys = Object.keys(words);
  const meanings = Object.values(words);

  const [matches, setMatches] = useState(() => {
    const savedMatches = localStorage.getItem("matches");
    return savedMatches
      ? JSON.parse(savedMatches)
      : wordKeys.map((word) => ({ word, match: "" }));
  });

  const [completed, setCompleted] = useState(
    JSON.parse(localStorage.getItem("completed")) || false
  );
  const [shuffledMeanings, setShuffledMeanings] = useState([]);

  useEffect(() => {
    setShuffledMeanings([...meanings].sort(() => Math.random() - 0.5));
  }, [currentIndex]);

  useEffect(() => {
    localStorage.setItem("currentIndex", currentIndex);
    localStorage.setItem("matches", JSON.stringify(matches));
    localStorage.setItem("completed", JSON.stringify(completed));
  }, [currentIndex, matches, completed]);

  const handleTouchStart = (event, word) => {
    event.preventDefault();
    const wordElement = document.getElementById(word);
    wordElement.dataset.dragging = "true";

    const handleTouchMove = (moveEvent) => {
      moveEvent.preventDefault();
      const touch = moveEvent.touches[0];
      wordElement.style.position = "fixed";
      wordElement.style.left = `${touch.clientX - 50}px`;
      wordElement.style.top = `${touch.clientY - 20}px`;
      wordElement.style.zIndex = "1000";
    };

    const handleTouchEnd = (endEvent) => {
      wordElement.removeEventListener("touchmove", handleTouchMove);
      wordElement.removeEventListener("touchend", handleTouchEnd);

      const touch = endEvent.changedTouches[0];
      const elements = document.elementsFromPoint(touch.clientX, touch.clientY);
      const meaningElement = elements.find((el) => el.dataset.meaning);

      if (meaningElement) {
        const meaning = meaningElement.dataset.meaning;
        setMatches((prev) =>
          prev.map((m) => (m.word === word ? { ...m, match: meaning } : m))
        );
      }

      wordElement.style.position = "";
      wordElement.style.left = "";
      wordElement.style.top = "";
      wordElement.style.zIndex = "";
      wordElement.dataset.dragging = "false";
    };

    wordElement.addEventListener("touchmove", handleTouchMove);
    wordElement.addEventListener("touchend", handleTouchEnd);
  };

  return (
    <div className="p-4 min-h-screen bg-gray-800">
      <div className="fixed top-4 left-4 z-50">
        <Link className="text-white text-4xl hover:text-blue-500" to="/">
          <FaArrowCircleLeft />
        </Link>
      </div>

      {completed ? (
        <div className="text-center pt-20">
          <h2 className="text-green-500 text-2xl mb-4">
            Tebrikler! Tüm fiilleri eşleştirdiniz.
          </h2>
          <button
            onClick={() => {
              setCurrentIndex(0);
              setMatches(wordKeys.map((word) => ({ word, match: "" })));
              setCompleted(false);
              localStorage.clear();
            }}
            className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Baştan Başla
          </button>
        </div>
      ) : (
        <div className="w-full max-w-6xl mx-auto py-8 px-2">
          <h2 className="text-xl mb-6 text-center text-white">
            <span className="text-2xl sm:text-3xl text-red-400 font-bold">
              {currentVerb}
            </span>
            <br />
            fiili için eşleştirme yapın
          </h2>

          <div className="flex flex-row overflow-x-auto pb-3 gap-3 sm:gap-4">
            <div className="w-auto flex-shrink-0 bg-gray-700 rounded-lg shadow-xl p-3 sm:p-4">
              <h3 className="text-white text-sm sm:text-base font-bold mb-3">
                Almanca Fiiller
              </h3>
              <div className="space-y-2">
                {wordKeys.map((word) => {
                  const isCorrect =
                    matches.find((m) => m.word === word)?.match === words[word];
                  return (
                    <div
                      key={word}
                      id={word}
                      className={`px-3 py-2 sm:px-4 sm:py-3 rounded-md cursor-grab touch-none transition-all text-white text-sm sm:text-base font-medium shadow-md ${
                        isCorrect ? "bg-green-400" : "bg-blue-400"
                      }`}
                      onTouchStart={(e) => handleTouchStart(e, word)}
                    >
                      {word}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="w-auto flex-shrink-0 bg-gray-700 rounded-lg shadow-xl p-3 sm:p-4 min-w-[280px] sm:min-w-[360px]">
              <h3 className="text-white text-sm sm:text-base font-bold mb-3">
                Türkçe Anlamlar
              </h3>
              <div className="space-y-2">
                {shuffledMeanings.map((meaning) => {
                  const matchedWord = matches.find(
                    (m) => m.match === meaning
                  )?.word;
                  const isCorrect = matchedWord
                    ? words[matchedWord] === meaning
                    : false;

                  return (
                    <div
                      key={meaning}
                      data-meaning={meaning}
                      className={`px-3 py-2 sm:px-4 sm:py-3 rounded-md text-gray-800 text-sm sm:text-base font-medium shadow-md truncate ${
                        isCorrect
                          ? "bg-green-400 border-green-600"
                          : "bg-gray-200 border-gray-400"
                      }`}
                    >
                      {meaning}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tren;
