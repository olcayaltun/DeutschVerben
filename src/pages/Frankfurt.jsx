import React, { useState, useEffect } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import yeni from "../utils/Frankfurter";
import Frankone from "../Components/Frankone";
import Frankzwei from "../Components/Frankzwei";
import Frankdrei from "../Components/Frankdrei";
import Frankvier from "../Components/Frankvier";

const Frankfurt = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentItem, setCurrentItem] = useState(null);
  const [error, setError] = useState("");
  const [showComponents, setShowComponents] = useState({
    frankone: false,
    frankzwei: false,
    frankdrei: false,
    frankvier: false,
  });

  useEffect(() => {
    try {
      if (!Array.isArray(yeni) || yeni.length === 0) {
        throw new Error("Veri bulunamadı veya hatalı format!");
      }

      const savedIndex = parseInt(localStorage.getItem("verbIndex") || 0);
      const validIndex = Math.max(0, Math.min(savedIndex, yeni.length - 1));

      setCurrentIndex(validIndex);
      setCurrentItem(yeni[validIndex]);
    } catch (err) {
      setError(err.message);
      console.error("Hata:", err);
    }
  }, []);

  const handleNavigation = (direction) => {
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % yeni.length
        : (currentIndex - 1 + yeni.length) % yeni.length;

    localStorage.setItem("verbIndex", newIndex);
    setCurrentIndex(newIndex);
    setCurrentItem(yeni[newIndex]);
  };

  const toggleComponent = (component) => {
    setShowComponents((prev) => ({
      ...prev,
      [component]: !prev[component],
    }));
  };

  if (error) {
    return (
      <div className="min-h-screen bg-red-50 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-bold text-red-600 mb-4">⛔ Hata!</h2>
          <p className="text-red-500">{error}</p>
          <div className="mt-4 text-sm text-gray-600">
            <p>src/utils/yeni.js dosyasını kontrol edin:</p>
            <pre className="mt-2 bg-gray-100 p-2 rounded text-left">
              {`{
  kelime: "AlmancaKelime",
  anlam: "TürkçeAnlam", 
  cumle: "Örnek cümle..."
}`}
            </pre>
          </div>
        </div>
      </div>
    );
  }

  if (!currentItem) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-pulse space-y-4">
          <div className="h-12 bg-gray-200 rounded w-48"></div>
          <div className="h-6 bg-gray-200 rounded w-64"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-4 sm:p-6">
        <div className="flex items-center justify-between gap-4 mb-8">
          <button
            onClick={() => handleNavigation("prev")}
            className="text-blue-500 hover:text-blue-600 transition-transform hover:scale-110 hidden sm:block"
          >
            <FaArrowCircleLeft size={40} />
          </button>

          <div className="flex-1 space-y-8">
            <h1 className="text-4xl font-extrabold text-center text-gray-800 break-words">
              {currentItem.kelime}
            </h1>

            <div className="bg-indigo-50 p-6 rounded-xl border-2 border-indigo-100">
              <p className="text-xl text-center">
                <span className="font-semibold text-indigo-600">Anlamı:</span>{" "}
                <span className="text-black-700">{currentItem.anlam}</span>
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border-2 border-green-100">
              <p className="text-lg italic text-center text-gray-700 leading-relaxed">
                "{currentItem.cümle}"
              </p>
            </div>
          </div>

          <button
            onClick={() => handleNavigation("next")}
            className="text-blue-500 hover:text-blue-600 transition-transform hover:scale-110 hidden sm:block"
          >
            <FaArrowCircleRight size={40} />
          </button>
        </div>

        <div className="text-center mt-6">
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            {currentIndex + 1} / {yeni.length}
          </span>
        </div>
      </div>

      <div className="mt-8 w-full max-w-md grid gap-4 grid-cols-2 sm:hidden">
        <button
          onClick={() => handleNavigation("prev")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
        >
          ← Önceki
        </button>
        <button
          onClick={() => handleNavigation("next")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
        >
          Sonraki →
        </button>
      </div>

      {/* Component Kontrol ve Görüntüleme Alanı */}
      <div className="mt-6 w-full max-w-6xl">
        <div className="flex flex-wrap gap-3 justify-center mb-4">
          {Object.entries(showComponents).map(([key, value]) => (
            <button
              key={key}
              onClick={() => toggleComponent(key)}
              className={`px-4 py-2 rounded-lg flex items-center transition-colors ${
                value
                  ? "bg-amber-400 hover:bg-amber-500"
                  : "bg-amber-200 hover:bg-amber-300"
              }`}
            >
              <span className="font-medium capitalize">{key}</span>
              <span className="ml-2 text-sm">{value ? "▲" : "▼"}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
          {showComponents.frankone && (
            <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200">
              <Frankone />
            </div>
          )}
          {showComponents.frankzwei && (
            <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200">
              <Frankzwei />
            </div>
          )}
          {showComponents.frankdrei && (
            <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200">
              <Frankdrei />
            </div>
          )}
          {showComponents.frankvier && (
            <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200">
              <Frankvier />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Frankfurt;
