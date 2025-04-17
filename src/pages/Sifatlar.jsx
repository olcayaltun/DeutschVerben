import React, { useState, useEffect } from "react";
import adjectivesData from "../utils/adjectives.json";

function Sifatlar() {
  const [adjectives, setAdjectives] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  useEffect(() => {
    setAdjectives(adjectivesData);
  }, []);

  // İleri butonu
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % adjectives.length);
    setShowTranslation(false); // Yeni sıfatta çeviri kapalı başlasın
  };

  // Geri butonu
  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + adjectives.length) % adjectives.length
    );
    setShowTranslation(false); // Yeni sıfatta çeviri kapalı başlasın
  };

  // Türkçe çeviriyi aç/kapat
  const toggleTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  // Veri yüklenmeden önce boş ekran kontrolü
  if (adjectives.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        Yükleniyor...
      </div>
    );
  }

  const currentAdjective = adjectives[currentIndex];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Almanca Sıfat Öğren
        </h1>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 bg-gray-100 m-auto grid place-items-center">
            <span className=" text-red-500 ">
              {currentAdjective.german} ({currentAdjective.turkish})
            </span>
          </h2>
          <p className="text-gray-700 mb-4 font-semibold">
            <span className="font-medium"></span>{" "}
            {currentAdjective.germanSentence}
          </p>
          <button
            onClick={toggleTranslation}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            {showTranslation ? "Kapat" : "Aç"}
          </button>
          {showTranslation && (
            <p className="text-gray-700 mt-4  bg-emerald-100 p-1 rounded-md">
              <span className="font-medium text-emerald-600"></span>{" "}
              {currentAdjective.turkishTranslation}
            </p>
          )}
        </div>
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors disabled:opacity-50"
            disabled={currentIndex === 0}
          >
            Geri
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors disabled:opacity-50"
            disabled={currentIndex === adjectives.length - 1}
          >
            İleri
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sifatlar;
