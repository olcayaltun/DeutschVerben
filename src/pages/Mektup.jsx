import React from "react";
import { useState } from "react";
import B1 from "../Components/B/B1.jsx";
import B2 from "../Components/B/B2.jsx";
import B3 from "../Components/B/B3.jsx";
import B4 from "../Components/B/B4.jsx";
import B5 from "../Components/B/B5.jsx";
import B6 from "../Components/B/B6.jsx";
import B7 from "../Components/B/B7.jsx";
import B8 from "../Components/B/B8.jsx";
import B9 from "../Components/B/B9.jsx";
import B10 from "../Components/B/B10.jsx";
import B11 from "../Components/B/B11.jsx";
import B12 from "../Components/B/B12.jsx";
import B13 from "../Components/B/B13.jsx";

// Komponent haritası
const components = {
  B1,
  B2,
  B3,
  B4,
  B5,
  B6,
  B7,
  B8,
  B9,
  B10,
  B11,
  B12,
  B13,
};

export default function App() {
  const [history, setHistory] = useState([]);
  const [currentLevel, setCurrentLevel] = useState("main");
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleMainButtonClick = (buttonName) => {
    setHistory([...history, { level: "main", button: null }]);
    setCurrentLevel("sub");
    setSelectedButton(buttonName);
  };

  const handleSubButtonClick = (componentName) => {
    setHistory([...history, { level: "sub", button: selectedButton }]);
    setCurrentLevel("result");
    setSelectedComponent(componentName);
  };

  const handleBack = () => {
    if (history.length === 0) return;

    const newHistory = [...history];
    const previous = newHistory.pop();
    setHistory(newHistory);
    setCurrentLevel(previous.level);

    if (previous.level === "main") {
      setSelectedButton(null);
      setSelectedComponent(null);
    } else if (previous.level === "sub") {
      setSelectedButton(previous.button);
      setSelectedComponent(null);
    }
  };

  const renderMainButtons = () => (
    <div className="flex gap-4">
      <button
        onClick={() => handleMainButtonClick("B")}
        className="px-8 py-4 bg-blue-500 text-white text-xl rounded-lg hover:bg-blue-600 transition-colors"
      >
        B2
      </button>
    </div>
  );

  const renderSubButtons = () => {
    const buttons = [];
    // B1'den B13'e kadar butonlar
    for (let i = 1; i <= 13; i++) {
      const name = `B${i}`;
      buttons.push(
        <button
          key={i}
          onClick={() => handleSubButtonClick(name)}
          className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
        >
          {name}
        </button>
      );
    }
    return buttons;
  };

  const renderComponent = () => {
    const Component = components[selectedComponent];
    return Component ? <Component /> : <div>Komponent bulunamadı</div>;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Dinamik Buton Sistemi
        </h1>

        {/* Geri Butonu */}
        {history.length > 0 && (
          <button
            onClick={handleBack}
            className="mb-6 px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center gap-2"
          >
            ← Geri
          </button>
        )}

        {/* Ana Butonlar */}
        {currentLevel === "main" && renderMainButtons()}

        {/* Alt Butonlar */}
        {currentLevel === "sub" && (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              B2 seçildi
            </h2>
            <div className="grid grid-cols-3 gap-4">{renderSubButtons()}</div>
          </div>
        )}

        {/* Komponent Gösterimi */}
        {currentLevel === "result" && (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {renderComponent()}
          </div>
        )}
      </div>
    </div>
  );
}
