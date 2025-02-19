import React, { useState, useEffect } from "react";
import Tr from "../utils/trB";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";

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

  const handleDrop = (event, meaning) => {
    event.preventDefault();
    const word = event.dataTransfer.getData("text");
    setMatches((prev) =>
      prev.map((m) => (m.word === word ? { ...m, match: meaning } : m))
    );
  };

  const handleDragStart = (event, word) => {
    event.dataTransfer.setData("text", word);
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
    <div className="p-4 grid place-items-center h-screen">
      <div className=" ">
        <Link className=" text-white text-4xl hover:text-blue-500" to="/">
          <FaArrowCircleLeft />
        </Link>
      </div>

      {completed ? (
        <div>
          <h2 className="text-green-500 text-xl">
            Tebrikler! Tüm fiilleri eşleştirdiniz.
          </h2>
          <button
            onClick={() => {
              setCurrentIndex(0);
              setMatches(wordKeys.map((word) => ({ word, match: "" })));
              setCompleted(false);
              localStorage.clear();
            }}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Baştan Başla
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-xl mb-4 text-white">
            <span className=" text-2xl text-red-700">{currentVerb}</span> fiili
            için eşleştirme yapın
          </h2>
          <div className="flex space-x-8">
            <div className="space-y-2">
              {wordKeys.map((word) => (
                <div
                  key={word}
                  draggable
                  onDragStart={(e) => handleDragStart(e, word)}
                  className="px-4 py-2 bg-blue-300 cursor-grab rounded"
                >
                  {word}
                </div>
              ))}
            </div>
            <div className="space-y-2">
              {shuffledMeanings.map((meaning) => (
                <div
                  key={meaning}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => handleDrop(e, meaning)}
                  className={`px-4 py-2 border rounded ${
                    matches.some(
                      (m) => m.match === meaning && words[m.word] === meaning
                    )
                      ? "bg-green-300"
                      : matches.some(
                          (m) =>
                            m.match === meaning && words[m.word] !== meaning
                        )
                      ? "bg-red-300"
                      : "bg-gray-200"
                  }`}
                >
                  {meaning}
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={checkMatches}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
          >
            Kontrol Et
          </button>
        </div>
      )}
    </div>
  );
};

export default Tren;
