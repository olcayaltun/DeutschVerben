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

  const handleDragStart = (event, word) => {
    event.dataTransfer.setData("word", word);
  };

  const handleDrop = (event, meaning) => {
    event.preventDefault();
    const draggedWord = event.dataTransfer.getData("word");
    setMatches((prev) =>
      prev.map((m) => (m.word === draggedWord ? { ...m, match: meaning } : m))
    );
  };

  const handleTouchStart = (event, word) => {
    event.preventDefault();
    const touch = event.touches[0];
    event.target.dataset.dragging = "true";
    event.target.style.position = "fixed";
    event.target.style.left = `${touch.clientX}px`;
    event.target.style.top = `${touch.clientY}px`;

    const handleTouchMove = (moveEvent) => {
      const touchMove = moveEvent.touches[0];
      event.target.style.left = `${touchMove.clientX - 50}px`;
      event.target.style.top = `${touchMove.clientY - 20}px`;
    };

    const handleTouchEnd = (endEvent) => {
      event.target.style.position = "";
      event.target.style.left = "";
      event.target.style.top = "";
      event.target.removeAttribute("data-dragging");
      const touchEnd = endEvent.changedTouches[0];
      const elements = document.elementsFromPoint(
        touchEnd.clientX,
        touchEnd.clientY
      );
      const meaningElement = elements.find((el) => el.dataset.meaning);

      if (meaningElement) {
        const meaning = meaningElement.dataset.meaning;
        setMatches((prev) =>
          prev.map((m) => (m.word === word ? { ...m, match: meaning } : m))
        );
      }
    };

    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd, { passive: false });
  };

  return (
    <div className="p-4 min-h-screen bg-gray-800">
      <div className="fixed top-4 left-4 z-50">
        <Link className="text-white text-4xl hover:text-blue-500" to="/">
          <FaArrowCircleLeft />
        </Link>
      </div>

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
              {wordKeys.map((word) => (
                <div
                  key={word}
                  className="px-3 py-2 rounded-md cursor-pointer bg-blue-400 text-white"
                  draggable
                  onDragStart={(e) => handleDragStart(e, word)}
                  onTouchStart={(e) => handleTouchStart(e, word)}
                >
                  {word}
                </div>
              ))}
            </div>
          </div>

          <div className="w-auto flex-shrink-0 bg-gray-700 rounded-lg shadow-xl p-3 sm:p-4">
            <h3 className="text-white text-sm sm:text-base font-bold mb-3">
              Türkçe Anlamlar
            </h3>
            <div className="space-y-2">
              {shuffledMeanings.map((meaning) => (
                <div
                  key={meaning}
                  data-meaning={meaning}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => handleDrop(e, meaning)}
                  className="px-3 py-2 rounded-md bg-gray-200 text-gray-800"
                >
                  {meaning}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tren;
