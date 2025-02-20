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

  const [shuffledMeanings, setShuffledMeanings] = useState([]);

  useEffect(() => {
    setShuffledMeanings([...meanings].sort(() => Math.random() - 0.5));
  }, [currentIndex]);

  useEffect(() => {
    localStorage.setItem("currentIndex", currentIndex);
    localStorage.setItem("matches", JSON.stringify(matches));
  }, [currentIndex, matches]);

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
                <div
                  key={word}
                  className={`px-3 py-2 sm:px-4 sm:py-3 rounded-md cursor-pointer text-white text-sm sm:text-base font-medium shadow-md transition-all ${
                    matches.find((m) => m.word === word)?.match === words[word]
                      ? "bg-green-500"
                      : "bg-blue-500"
                  }`}
                >
                  {word}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 min-w-[45%] bg-gray-700 rounded-lg shadow-xl p-3 sm:p-4">
            <h3 className="text-white text-sm sm:text-base font-bold mb-3">
              Türkçe Anlamlar
            </h3>
            <div className="space-y-2">
              {shuffledMeanings.map((meaning) => (
                <div
                  key={meaning}
                  className={`px-3 py-2 sm:px-4 sm:py-3 rounded-md border-2 text-gray-800 text-sm sm:text-base font-medium shadow-md truncate ${
                    matches.some(
                      (m) => m.match === meaning && words[m.word] === meaning
                    )
                      ? "bg-green-500 border-green-600"
                      : "bg-gray-200 border-gray-400"
                  }`}
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
