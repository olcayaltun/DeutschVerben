import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Tr from "../utils/trB";

const ITEM_TYPE = "WORD";

// DraggableWord Bileşenini Tanımla
const DraggableWord = ({ word }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ITEM_TYPE,
    item: { word },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`px-3 py-2 rounded-md cursor-pointer text-white text-sm sm:text-base font-medium shadow-md transition-all ${
        isDragging ? "opacity-50 bg-yellow-500" : "bg-blue-500"
      }`}
    >
      {word}
    </div>
  );
};

// DropZone Bileşenini Tanımla
const DropZone = ({ meaning, onDrop, matchedWord, isIncorrect }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ITEM_TYPE,
    drop: (item) => onDrop(item.word, meaning),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`p-4 rounded-md text-center text-sm sm:text-base cursor-pointer font-medium shadow-md truncate transition-all ${
        isOver
          ? "bg-green-400 text-white"
          : isIncorrect
          ? "bg-red-500 text-white"
          : matchedWord
          ? "bg-green-500 text-white"
          : "bg-gray-200 text-gray-800"
      }`}
    >
      {matchedWord || meaning}
    </div>
  );
};

// Tren Bileşeni
const Tren = () => {
  const [currentIndex, setCurrentIndex] = useState(
    parseInt(localStorage.getItem("currentIndex")) || 0
  );
  const [matches, setMatches] = useState([]);
  const [hasError, setHasError] = useState(false);

  const keys = Object.keys(Tr[0]);
  const currentVerb = keys[currentIndex];
  const words = Tr[0][currentVerb];
  const wordKeys = Object.keys(words);
  const meanings = Object.values(words);
  const [shuffledMeanings, setShuffledMeanings] = useState([]);

  useEffect(() => {
    setShuffledMeanings([...meanings].sort(() => Math.random() - 0.5));
  }, [currentIndex]);

  useEffect(() => {
    localStorage.setItem("currentIndex", currentIndex);
  }, [currentIndex]);

  const handleDrop = (word, meaning) => {
    setMatches((prevMatches) => {
      const updatedMatches = prevMatches.filter((m) => m.word !== word);
      return [...updatedMatches, { word, match: meaning }];
    });
  };

  const handleNextVerb = () => {
    const allCorrect = matches.every((m) => words[m.word] === m.match);

    if (allCorrect) {
      setMatches([]);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % keys.length);
      setHasError(false);
    } else {
      setHasError(true);
      setMatches([]); // Yanlış eşleşme olduğu için eşleşmeleri sıfırla
    }
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

        <div className="flex flex-wrap justify-center items-start gap-6">
          <div className="flex-1 min-w-[45%] bg-gray-700 rounded-lg shadow-xl p-3 sm:p-4">
            <h3 className="text-white text-sm sm:text-base font-bold mb-3">
              Almanca Fiiller
            </h3>
            <div className="space-y-2">
              {wordKeys.map((word) => (
                <DraggableWord key={word} word={word} />
              ))}
            </div>
          </div>

          <div className="flex-1 min-w-[45%] bg-gray-700 rounded-lg shadow-xl p-3 sm:p-4">
            <h3 className="text-white text-sm sm:text-base font-bold mb-3">
              Türkçe Anlamlar
            </h3>
            <div className="space-y-2">
              {shuffledMeanings.map((meaning) => (
                <DropZone
                  key={meaning}
                  meaning={meaning}
                  onDrop={handleDrop}
                  matchedWord={
                    matches.find((m) => m.match === meaning)?.word || ""
                  }
                  isIncorrect={hasError}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={handleNextVerb}
            className={`px-6 py-2 text-white rounded-md font-bold transition-all ${
              hasError ? "bg-red-500" : "bg-green-500"
            }`}
          >
            {hasError ? "Yanlış eşleşme, tekrar dene!" : "Sonraki Fiil"}
          </button>
        </div>
      </div>
    </div>
  );
};

const withTouchSupport = (Component) => (props) =>
  (
    <DndProvider backend={HTML5Backend}>
      <Component {...props} />
    </DndProvider>
  );

export default withTouchSupport(Tren);
