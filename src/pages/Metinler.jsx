import React, { useState } from "react";

import Metin2 from "../Components/Thema/Metin2";
import Metin5 from "../Components/Thema/Metin5";
import Metin6 from "../Components/Thema/Metin6";
import Metin9 from "../Components/Thema/Metin9";
import Metin10 from "../Components/Thema/Metin10";
import Metin3 from "../Components/Thema/Metin3";
import Metin1 from "../Components/Thema/Metin1";
import Metin4 from "../Components/Thema/Metin4";
import Metin7 from "../Components/Thema/Metin7";
import Metin8 from "../Components/Thema/Metin8";
import Metin11 from "../Components/Thema/Metin11";
import Metin12 from "../Components/Thema/Metin12";
import Kelimeler from "../Components/Thema/Kelimeler";

const Metinler = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const components = [
    { name: "Metin1", component: Metin1 },
    { name: "Metin2", component: Metin2 },
    { name: "Metin3", component: Metin3 },
    { name: "Metin4", component: Metin4 },
    { name: "Metin5", component: Metin5 },
    { name: "Metin6", component: Metin6 },
    { name: "Metin7", component: Metin7 },
    { name: "Metin8", component: Metin8 },
    { name: "Metin9", component: Metin9 },
    { name: "Metin10", component: Metin10 },
    { name: "Metin11", component: Metin11 },
    { name: "Metin12", component: Metin12 },
    { name: "Kelimeler", component: Kelimeler },
  ];

  const handleComponentClick = (name) => {
    setSelectedComponent(name);
  };

  const handleBackClick = () => {
    setSelectedComponent(null);
  };

  const selected = components.find((c) => c.name === selectedComponent);
  const SelectedComponent = selected?.component;

  return (
    <div className="min-h-screen p-5 flex justify-center">
      {selectedComponent ? (
        <div className="w-full max-w-2xl">
          <button
            onClick={handleBackClick}
            className="mb-5 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
          >
            Geri
          </button>
          <div className="border border-gray-200 p-5 rounded-md">
            <SelectedComponent />
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3 max-w-xs w-full">
          {components.map(({ name }) => (
            <button
              key={name}
              onClick={() => handleComponentClick(name)}
              className="px-4 py-2 text-gray-800 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 transition-colors"
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Metinler;
