import React, { useState } from "react";
import TestOne from "../Components/TestOne";
import kelimeler from "../utils/yeni";
import Frank from "../utils/Frankfurter";
import FrankTest from "../Components/FrankTest";
import SoruKartlari from "../Components/AlmancaSoru";
import NebenSatz from "../Components/NebenSätz";
import Baglactest from "../Components/Baglactest";
import Prätest from "../Components/Präpo../Prätest";
import GermanVerbTest from "../Components/GermanVerbTest"; // Added missing import
import germanVerbs from "../utils/germanVerbs"; // Added missing import
import Relativp from "../Components/Relativp";
import B2c1 from "../Components/B2c2";
import Deyim from "../Components/Deyimler/Deyim";
const MainTest = () => {
  const [showTest, setShowTest] = useState(false);
  const [testType, setTestType] = useState(null);

  const testButtons = [
    {
      id: "test1",
      label: "Temel Kelime Testi",
      handler: () => handleTestClick("test1"),
    },
    {
      id: "frankTest",
      label: "Frankfurter Testi",
      handler: () => handleTestClick("frankTest"),
    },
    {
      id: "soruKartlari",
      label: "Soru Kartları",
      handler: () => handleTestClick("soruKartlari"),
    },
    {
      id: "nebenSatz",
      label: "Nebensatz Testi",
      handler: () => handleTestClick("nebenSatz"),
    },
    {
      id: "baglacTest",
      label: "Bağlaç Testi",
      handler: () => handleTestClick("baglacTest"),
    },
    {
      id: "verbTest",
      label: "Fiil Testi",
      handler: () => handleTestClick("verbTest"),
    },
    {
      id: "prätest",
      label: "Präpositionen",
      handler: () => handleTestClick("prätest"),
    },
    {
      id: "relativ",
      label: "Relativpronomen",
      handler: () => handleTestClick("relativ"),
    },
    {
      id: "b2c1",
      label: "B2-C1 sorular",
      handler: () => handleTestClick("b2c1"),
    },
    {
      id: "deyim",
      label: "Deyimler",
      handler: () => handleTestClick("deyim"),
    },
  ];

  const handleTestClick = (type) => {
    setTestType(type);
    setShowTest(true);
  };

  const handleReturn = () => {
    setShowTest(false);
    setTestType(null);
  };

  const buttonStyle = {
    padding: "15px 40px",
    fontSize: "18px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "transform 0.2s",
    margin: "10px",
    width: "250px",
  };

  const hoverStyle = {
    transform: "scale(1.05)",
  };

  const renderTestComponent = () => {
    switch (testType) {
      case "test1":
        return <TestOne onReturn={handleReturn} />;
      case "frankTest":
        return <FrankTest onReturn={handleReturn} />;
      case "soruKartlari":
        return <SoruKartlari onReturn={handleReturn} />;
      case "nebenSatz":
        return <NebenSatz onReturn={handleReturn} />;
      case "baglacTest":
        return <Baglactest onReturn={handleReturn} />;
      case "verbTest":
        return <GermanVerbTest onReturn={handleReturn} />;
      case "prätest":
        return <Prätest onReturn={handleReturn} />;
      case "relativ":
        return <Relativp onReturn={handleReturn} />;
      case "b2c1":
        return <B2c1 onReturn={handleReturn} />;
      case "deyim":
        return <Deyim onReturn={handleReturn} />;
      default:
        return null;
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {!showTest ? (
          <div>
            <h1
              style={{
                marginBottom: "30px",
                color: "#2c3e50",
                fontSize: "2.5rem",
              }}
            >
              Almanca Öğrenme Testleri
            </h1>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {testButtons.map((button) => (
                <button
                  key={button.id}
                  onClick={button.handler}
                  style={buttonStyle}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = hoverStyle.transform)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  {button.label}
                </button>
              ))}
            </div>

            <div
              style={{
                marginTop: "30px",
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <h3 style={{ color: "#2c3e50", marginBottom: "15px" }}>
                Test İstatistikleri
              </h3>
              <p style={{ color: "#666" }}>
                Temel Kelimeler: {kelimeler.length} | Frankfurter:{" "}
                {Frank.length} | Bağlaçlar: {Baglactest.length} | Fiiller:{" "}
                {Object.keys(germanVerbs).length}
              </p>
            </div>
          </div>
        ) : (
          renderTestComponent()
        )}
      </div>
    </div>
  );
};

export default MainTest;
