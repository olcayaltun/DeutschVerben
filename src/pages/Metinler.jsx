import React, { useState } from "react";
import Metin1 from "../Components/Metin1";
import Metin2 from "../Components/Metin2";
import Metin3 from "../Components/Metin3";
import Metin4 from "../Components/Metin4";
import Metin5 from "../Components/Metin5";
import Metin6 from "../Components/Metin6";
import Metin7 from "../Components/Metin7";
import Metin8 from "../Components/Metin8";
import Metin9 from "../Components/Metin9";
import Metin10 from "../Components/Metin10";

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
  ];

  const handleComponentClick = (name) => {
    setSelectedComponent(name === selectedComponent ? null : name);
  };

  const selected = components.find((c) => c.name === selectedComponent);
  const SelectedComponent = selected?.component;

  return (
    <div className="metinler-container flex justify-center gap-1 ">
      <div className="buttons-list">
        {components.map(({ name }) => (
          <button
            key={name}
            onClick={() => handleComponentClick(name)}
            className={`component-button ${
              selectedComponent === name ? "active" : ""
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="component-display">
        {SelectedComponent ? (
          <div className="component-preview">
            <SelectedComponent />
          </div>
        ) : (
          <p className="prompt-message">👆 Bir metin bileşeni seçiniz</p>
        )}
      </div>
    </div>
  );
};

export default Metinler;
