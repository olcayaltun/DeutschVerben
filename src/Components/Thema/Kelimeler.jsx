import React, { useState, useEffect } from "react";
import wordsData from "../../utils/Thema/kelimler.json";

const Kelimeler = () => {
  // State'ler
  const [currentIndex, setCurrentIndex] = useState(() => {
    return parseInt(localStorage.getItem("currentWordIndex")) || 0;
  });
  const [showDetails, setShowDetails] = useState(false);

  // Mevcut kelimeyi al
  const word = wordsData[currentIndex];

  // İleri/geri gezinme
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % wordsData.length);
    setShowDetails(false); // Yeni kelimeye geçerken detayları sıfırla
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + wordsData.length) % wordsData.length);
    setShowDetails(false); // Yeni kelimeye geçerken detayları sıfırla
  };

  // localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("currentWordIndex", currentIndex);
  }, [currentIndex]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        Almanca Kelimeler
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {word.kelime}
        </h2>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition mb-4"
        >
          {showDetails ? "Anlamı Gizle" : "Açıklama"}
        </button>

        {showDetails && (
          <div className="mt-4">
            <p className="text-gray-600">
              <span className="font-bold">Anlam:</span>{" "}
              {Array.isArray(word.anlam) ? word.anlam.join(", ") : word.anlam}
            </p>
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
    </div>
  );
};

export default Kelimeler;
