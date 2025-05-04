import React, { useState, useEffect } from "react";
import idiomsData from "../../utils/deyim.json";

const Deyim = () => {
  // Tüm deyimleri tek bir düz diziye çevir
  const allIdioms = Object.values(idiomsData).flat();

  // State'ler
  const [currentIndex, setCurrentIndex] = useState(() => {
    return parseInt(localStorage.getItem("currentIdiomIndex")) || 0;
  });
  const [showDetails, setShowDetails] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);

  // Mevcut deyimi al
  const idiom = allIdioms[currentIndex];

  // İleri/geri gezinme
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % allIdioms.length);
    setShowDetails(false); // Yeni deyime geçerken detayları sıfırla
    setShowTranslation(false);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + allIdioms.length) % allIdioms.length);
    setShowDetails(false); // Yeni deyime geçerken detayları sıfırla
    setShowTranslation(false);
  };

  // localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("currentIdiomIndex", currentIndex);
  }, [currentIndex]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        Almanca Deyimler
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {idiom.deyim}
        </h2>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition mb-4"
        >
          {showDetails ? "Açıklamayı Gizle" : "Açıklama"}
        </button>

        {showDetails && (
          <div className="mt-4">
            <p className="text-gray-600">
              <span className="font-bold">Anlam:</span> {idiom.anlam}
            </p>
            <p className="text-gray-600 mt-2">
              <span className="font-bold">Örnek Cümle:</span>{" "}
              {idiom.ornek_cumle_almanca}
            </p>
            <button
              onClick={() => setShowTranslation(!showTranslation)}
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition mt-2"
            >
              {showTranslation
                ? "Cümlenin Anlamını Gizle"
                : "Cümlenin Anlamını Aç"}
            </button>
            {showTranslation && (
              <p className="text-gray-600 mt-2">
                <span className="font-bold">Cümlenin Türkçe Anlamı:</span>{" "}
                {idiom.ornek_cumle_turkce}
              </p>
            )}
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

export default Deyim;
