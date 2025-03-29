import React, { useState } from "react";
import Nebentest from "./Nebentest";

export const conjunctions = [
  {
    conjunction: "während",
    meaning: "esnasında, sırasında",
    example: "Während ich kochte, hörte ich Musik.",
    translation: "Yemek yaparken müzik dinledim.",
  },
  {
    conjunction: "nachdem",
    meaning: "sonra, -dikten sonra",
    example: "Nachdem wir gegessen hatten, gingen wir spazieren.",
    translation: "Yemek yedikten sonra yürüyşe çıktık.",
  },
  {
    conjunction: "bevor",
    meaning: "önce",
    example: "Bevor ich ins Kino gehe, muss ich meine Hausaufgaben machen.",
    translation: "Sinemaya gitmeden önce ödevimi yapmam lazım.",
  },
];

function NebenSatz({ onReturn }) {
  const [index, setIndex] = useState(0);

  const nextConjunction = () => {
    setIndex((prevIndex) => (prevIndex + 1) % conjunctions.length);
  };

  const previousConjunction = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + conjunctions.length) % conjunctions.length
    );
  };

  const currentConjunction = conjunctions[index];

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ color: "#2c3e50", marginBottom: "30px" }}>
        Almanca Bağlaçlar
      </h1>
      <div
        style={{
          backgroundColor: "#f8f9fa",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ color: "#2980b9" }}>{currentConjunction.conjunction}</h2>
        <p>
          <strong style={{ color: "#27ae60" }}>Anlamı:</strong>{" "}
          {currentConjunction.meaning}
        </p>
        <p>
          <strong style={{ color: "#27ae60" }}>Örnek:</strong>{" "}
          {currentConjunction.example}
        </p>
        <p>
          <strong style={{ color: "#27ae60" }}>Türkçe Çeviri:</strong>{" "}
          {currentConjunction.translation}
        </p>
      </div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <button
          onClick={previousConjunction}
          style={{
            padding: "10px 30px",
            backgroundColor: "#f39c12",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Önceki Bağlaç
        </button>
        <button
          onClick={nextConjunction}
          style={{
            padding: "10px 30px",
            backgroundColor: "#3498db",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Sonraki Bağlaç
        </button>
        <button
          onClick={onReturn}
          style={{
            padding: "10px 30px",
            backgroundColor: "#e74c3c",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Geri Dön
        </button>
      </div>
      <Nebentest />
    </div>
  );
}

export default NebenSatz;
