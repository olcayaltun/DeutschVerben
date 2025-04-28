import React, { useState } from "react";
import bateri from "../../utils/bateri";
const Metin11 = () => {
  const [index, setIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  const next = () => {
    setShowTranslation(false);
    setIndex((prev) => (prev + 1) % bateri.length);
  };

  const prev = () => {
    setShowTranslation(false);
    setIndex((prev) => (prev - 1 + bateri.length) % bateri.length);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-200">
        <p className="text-xl font-semibold mb-4 text-gray-800">
          {bateri[index].sentence}
        </p>

        {showTranslation && (
          <p className="text-green-600 text-lg mb-4">
            {bateri[index].translation}
          </p>
        )}

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded-lg transition"
          >
            ◀ Geri
          </button>

          <button
            onClick={() => setShowTranslation((prev) => !prev)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition"
          >
            {showTranslation ? "Açıklamayı Gizle" : "Açıklamayı Göster"}
          </button>

          <button
            onClick={next}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded-lg transition"
          >
            İleri ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default Metin11;
