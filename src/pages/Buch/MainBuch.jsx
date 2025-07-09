import React, { useState } from "react";

// Import all components dynamically or manually
import Buch2 from "../../Components/Buch/Buch2";
import Buch1 from "../../Components/Buch/Buch1";
import Buch3 from "../../Components/Buch/Buch3";
import Buch4 from "../../Components/Buch/Buch4";
import Buch5 from "../../Components/Buch/Buch5";
import Buch6 from "../../Components/Buch/Buch6";
import Buch7 from "../../Components/Buch/Buch7";
import Buch8 from "../../Components/Buch/Buch8";
import Buch9 from "../../Components/Buch/Buch9";
import Buch10 from "../../Components/Buch/Buch10";
import Sifat1 from "../../Components/Buch/Sifat1";
import Deyim from "../../Components/Buch/Deyim";
import Kitap2 from "../../Components/Buch/Kitap2";
import Kitap3 from "../../Components/Buch/KItap3";
import Kitap4 from "../../Components/Buch/Kitap4";
import Kitap5 from "../../Components/Buch/Kitap5";
import Edat from "../../Components/Buch/Edat";
import Sifat2 from "../../Components/Buch/Sifat2";
import Test from "../../Components/Buch/Test2";
import KonusmakA from "../../Components/Konusmak/KonusmakA";
import Edat2 from "../../Components/Buch/Edat2";
import Gramatik from "../../Components/Buch/Granmatik";
import Sifat3 from "../../Components/Buch/Sifat3";
import Makale from "../../Components/Buch/makale/Makale";
import Video from "../../Components/Buch/Video";
import B2c1 from "../../Components/Buch/B2c1";
import Anatest from "../../Components/Buch/Anatest";
import Buch11 from "../../Components/Buch/Buch11";
// ... import others up to Buch30
// Alternatively, use dynamic imports or a loop (explained below)

// Store components in an object for easier access
const components = {
  Buch1,
  Buch2,
  Buch3,
  Buch4,
  Buch5,
  Buch6,
  Buch7,
  Buch8,
  Buch9,
  Buch10,
  Sifat1,
  Deyim,
  Kitap2,
  Kitap3,
  Kitap4,
  Kitap5,
  Edat,
  Sifat2,
  Test,
  KonusmakA,
  Edat2,
  Gramatik,
  Sifat3,
  Makale,
  Video,
  B2c1,
  Anatest,
  Buch11,
  // ... add Buch3 to Buch30
};

const MainBuch = () => {
  // State to track the active component
  const [activeComponent, setActiveComponent] = useState(null);

  // Function to render the selected component
  const renderComponent = () => {
    if (!activeComponent) return <div>Please select a component</div>;
    const SelectedComponent = components[activeComponent];
    return <SelectedComponent />;
  };

  return (
    <div>
      <h1>Component Selector</h1>
      <div style={{ marginBottom: "20px" }}>
        {/* Generate buttons for each component */}
        {Object.keys(components).map((compName) => (
          <button
            key={compName}
            onClick={() => setActiveComponent(compName)}
            style={{
              margin: "5px",
              padding: "10px",
              background: activeComponent === compName ? "#007bff" : "#ccc",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            {compName}
          </button>
        ))}
      </div>
      {/* Render the active component */}
      <div>{renderComponent()}</div>
    </div>
  );
};

export default MainBuch;
