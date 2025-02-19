import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import Tr from "../utils/trB";

const Tren = () => {
  // ... (önceki state ve fonksiyonlar aynı kalacak)

  return (
    <div className="p-4 min-h-screen bg-gray-800">
      <div className="absolute top-4 left-4">
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
            <div className="space-y-4 flex-1 overflow-y-auto max-h-[600px]">
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

            <div className="space-y-4 flex-1 overflow-y-auto max-h-[600px]">
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
