import React, { useState, useEffect } from "react";
import data from "../utils/yenibilgiler";

const Yenibilgiler = () => {
  // Load saved index from localStorage or default to 0
  const [currentIndex, setCurrentIndex] = useState(() => {
    const savedIndex = localStorage.getItem("flashcardIndex");
    return savedIndex ? parseInt(savedIndex) : 0;
  });

  const [showAnswer, setShowAnswer] = useState(false);

  // Save current index to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("flashcardIndex", currentIndex.toString());
  }, [currentIndex]);

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  const handlePrevious = () => {
    setShowAnswer(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setShowAnswer(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const formatText = (text) => {
    return text.split("\n").map((line, i) => {
      if (line.startsWith("- [x]")) {
        return (
          <div key={i} className="flex items-center text-green-500">
            <span className="mr-2">✓</span>
            {line.substring(5)}
          </div>
        );
      } else if (line.startsWith("- [ ]")) {
        return (
          <div key={i} className="flex items-center text-gray-400">
            <span className="mr-2">○</span>
            {line.substring(5)}
          </div>
        );
      } else if (line.startsWith("✅")) {
        return (
          <div key={i} className="flex items-center text-green-500">
            <span className="mr-2">✅</span>
            {line.substring(2)}
          </div>
        );
      } else if (line.startsWith("➔")) {
        return (
          <div key={i} className="font-bold text-blue-600">
            {line}
          </div>
        );
      } else if (line.startsWith("⸻") || line.startsWith("―")) {
        return <hr key={i} className="my-2 border-gray-300" />;
      } else if (line.trim() === "") {
        return <br key={i} />;
      } else {
        return <div key={i}>{line}</div>;
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Card Header */}
          <div className="bg-blue-600 text-white p-4">
            <h2 className="text-xl font-bold">
              Kart {currentIndex + 1}/{data.length}
            </h2>
          </div>

          {/* Card Content */}
          <div className="p-6 h-96 overflow-y-auto">
            <div className="whitespace-pre-line">
              {formatText(data[currentIndex].veri)}
            </div>
          </div>

          {/* Card Footer */}
          <div className="bg-gray-50 p-4 flex justify-between items-center">
            <button
              onClick={handlePrevious}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Önceki
            </button>

            <div className="text-gray-500">
              {currentIndex + 1} / {data.length}
            </div>

            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Sonraki
            </button>
          </div>
        </div>

        {/* Keyboard Shortcuts Info */}
        <div className="mt-4 text-center text-gray-500 text-sm">
          Klavye kısayolları: ← → tuşlarıyla da gezinebilirsiniz
        </div>
      </div>
    </div>
  );
};

export default Yenibilgiler;
