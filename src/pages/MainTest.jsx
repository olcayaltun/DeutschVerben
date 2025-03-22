import React, { useState } from "react";
import TestOne from "../Components/TestOne";
import kelimeler from "../utils/yeni";
const MainTest = () => {
  const [showTest, setShowTest] = useState(false);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {!showTest ? (
        <div>
          <h1 style={{ marginBottom: "30px", color: "#2c3e50" }}>
            Almanca Öğrenme Testleri
          </h1>
          <button
            onClick={() => setShowTest(true)}
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
        </div>
      ) : (
        <TestOne onReturn={() => setShowTest(false)} />
      )}
    </div>
  );
};

export default MainTest;
