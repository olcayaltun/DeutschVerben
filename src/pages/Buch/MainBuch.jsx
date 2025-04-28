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
