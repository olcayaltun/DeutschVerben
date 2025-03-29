import React, { useState } from "react";
import TestOne from "../Components/TestOne";
import kelimeler from "../utils/yeni";
import Frank from "../utils/Frankfurter";
import FrankTest from "../Components/FrankTest";
import SoruKartlari from "../Components/AlmancaSoru";
import NebenSatz from "../Components/NebenSätz";
import conjunctions from "../Components/NebenSätz";
const MainTest = () => {
  const [showTest, setShowTest] = useState(false);
  const [testType, setTestType] = useState(null);

  const handleTest1Click = () => {
    setTestType("test1");
    setShowTest(true);
  };

  const handleFrankTestClick = () => {
    setTestType("frankTest");
    setShowTest(true);
  };

  const handleSoruKartlariClick = () => {
    setTestType("soruKartlari");
    setShowTest(true);
  };

  const handleNebenSatzClick = () => {
    setTestType("nebenSatz");
    setShowTest(true);
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

  return (
    <div>
      <div style={{ textAlign: "center", padding: "20px" }}>
        {!showTest ? (
          <div>
            <h1 style={{ marginBottom: "30px", color: "#2c3e50" }}>
              Almanca Öğrenme Testleri
            </h1>

            <button onClick={handleTest1Click} style={buttonStyle}>
              Test1'i Başlat
            </button>

            <button onClick={handleFrankTestClick} style={buttonStyle}>
              Frankfurter Testini Başlat
            </button>

            <button onClick={handleSoruKartlariClick} style={buttonStyle}>
              Soru Kartlarını Aç
            </button>

            <button onClick={handleNebenSatzClick} style={buttonStyle}>
              Bağlaçları Göster
            </button>

            <div style={{ marginTop: "30px" }}>
              <p style={{ color: "#666" }}>
                Test1: {kelimeler.length} soru | Frankfurter: {Frank.length}{" "}
                soru | Bağlaçlar: {conjunctions.length} adet
              </p>
            </div>
          </div>
        ) : (
          <>
            {testType === "test1" && (
              <TestOne onReturn={() => setShowTest(false)} />
            )}
            {testType === "frankTest" && (
              <FrankTest onReturn={() => setShowTest(false)} />
            )}
            {testType === "soruKartlari" && (
              <SoruKartlari onReturn={() => setShowTest(false)} />
            )}
            {testType === "nebenSatz" && (
              <NebenSatz onReturn={() => setShowTest(false)} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MainTest;
