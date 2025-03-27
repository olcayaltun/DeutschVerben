import React, { useState } from "react";
import TestOne from "../Components/TestOne";
import kelimeler from "../utils/yeni";
import Frank from "../utils/Frankfurter";
import FrankTest from "../Components/FrankTest";
import SoruKartlari from "../Components/AlmancaSoru";

const MainTest = () => {
  const [showTest, setShowTest] = useState(false);
  const [testType, setTestType] = useState(null); // Yeni test türü durumu ekliyoruz

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

  return (
    <div>
      <div style={{ textAlign: "center", padding: "20px" }}>
        {!showTest ? (
          <div>
            <h1 style={{ marginBottom: "30px", color: "#2c3e50" }}>
              Almanca Öğrenme Testleri
            </h1>
            <button
              onClick={handleTest1Click}
              style={{
                padding: "15px 40px",
                fontSize: "18px",
                backgroundColor: "#3498db",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "transform 0.2s",
                margin: "10px",
              }}
            >
              Test1'i Başlat
            </button>
            <p style={{ marginTop: "20px", color: "#666" }}>
              Test1'de toplam {kelimeler.length} soru bulunuyor
            </p>
            <button
              onClick={handleFrankTestClick}
              style={{
                padding: "15px 40px",
                fontSize: "18px",
                backgroundColor: "#3498db",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "transform 0.2s",
                margin: "10px",
              }}
            >
              Frankfurter Testini Başlat
            </button>
            <p style={{ marginTop: "20px", color: "#666" }}>
              Frankfurter Testi'nde toplam {Frank.length} soru bulunuyor
            </p>
            <button
              onClick={handleSoruKartlariClick}
              style={{
                padding: "15px 40px",
                fontSize: "18px",
                backgroundColor: "#3498db",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "transform 0.2s",
                margin: "10px",
              }}
            >
              Soru Kartlarını Aç
            </button>
          </div>
        ) : testType === "test1" ? (
          <TestOne onReturn={() => setShowTest(false)} />
        ) : testType === "frankTest" ? (
          <FrankTest onReturn={() => setShowTest(false)} />
        ) : (
          <SoruKartlari onReturn={() => setShowTest(false)} />
        )}
      </div>
    </div>
  );
};

export default MainTest;
