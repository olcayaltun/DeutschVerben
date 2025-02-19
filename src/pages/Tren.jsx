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
    localStorage.setItem("currentIndex", currentIndex);
    localStorage.setItem("matches", JSON.stringify(matches));
    localStorage.setItem("completed", JSON.stringify(completed));
  }, [currentIndex, matches, completed]);

  const handleTouchStart = (event, word) => {
    event.preventDefault();
    const wordElement = document.getElementById(word);

    const rect = wordElement.getBoundingClientRect();
    wordElement.dataset.originalX = rect.left;
    wordElement.dataset.originalY = rect.top;

    wordElement.style.position = "fixed";
    wordElement.style.zIndex = "1000";
    wordElement.style.left = `${rect.left}px`;
    wordElement.style.top = `${rect.top}px`;
    wordElement.style.transition = "none";

    const handleTouchMove = (moveEvent) => {
      moveEvent.preventDefault();
      const touch = moveEvent.touches[0];
      wordElement.style.left = `${touch.clientX - 50}px`;
      wordElement.style.top = `${touch.clientY - 20}px`;
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
      wordElement.style.transition = "";
    };

    wordElement.addEventListener("touchmove", handleTouchMove);
    wordElement.addEventListener("touchend", handleTouchEnd);
  };

  const checkMatches = () => {
    const allCorrect = matches.every((m) => words[m.word] === m.match);
    if (allCorrect) {
      if (currentIndex < keys.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setMatches(
          Object.keys(Tr[0][keys[currentIndex + 1]]).map((word) => ({
            word,
            match: "",
          }))
        );
      } else {
        setCompleted(true);
      }
    }
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
        <div className="w-full max-w-4xl mx-auto py-8">
          <h2 className="text-xl mb-6 text-center text-white">
            <span className="text-3xl text-red-400 font-bold">
              {currentVerb}
            </span>
            <br />
            fiili için eşleştirme yapın
          </h2>

          <div className="flex flex-col md:flex-row gap-8 justify-center min-h-[500px]">
            {/* Kelimeler Sütunu - Scroll Eklendi */}
            <div className="space-y-4 flex-1 overflow-y-auto max-h-[70vh] p-2">
              {wordKeys.map((word) => {
                const isCorrect =
                  matches.find((m) => m.word === word)?.match === words[word];
                return (
                  <div
                    key={word}
                    id={word}
                    className={`px-6 py-3 rounded-lg text-lg cursor-grab touch-none ${
                      isCorrect ? "bg-green-400" : "bg-blue-400"
                    } text-white font-semibold shadow-md transition-colors`}
                    onTouchStart={(e) => handleTouchStart(e, word)}
                  >
                    {word}
                  </div>
                );
              })}
            </div>

            {/* Anlamlar Sütunu - Scroll Eklendi */}
            <div className="space-y-4 flex-1 overflow-y-auto max-h-[70vh] p-2">
              {shuffledMeanings.map((meaning) => (
                <div
                  key={meaning}
                  data-meaning={meaning}
                  className={`px-6 py-3 rounded-lg text-lg border-2 ${
                    matches.some(
                      (m) => m.match === meaning && words[m.word] === meaning
                    )
                      ? "bg-green-400 border-green-600"
                      : matches.some(
                          (m) =>
                            m.match === meaning && words[m.word] !== meaning
                        )
                      ? "bg-red-400 border-red-600"
                      : "bg-gray-200 border-gray-400"
                  } text-gray-800 font-semibold shadow-md`}
                >
                  {meaning}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={checkMatches}
              className="px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-lg font-semibold"
            >
              Kontrol Et
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tren;
