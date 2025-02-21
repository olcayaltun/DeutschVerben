import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import almancaFiiller from "../utils/ almancakelimeler";
import WordNode from "../Components/WordNode";
import QuickTest from "../Components/QuickTest";

function Explorer() {
  const [currentSet, setCurrentSet] = useState([]);
  const [discoveredWords, setDiscoveredWords] = useState([]);
  const [setIndex, setSetIndex] = useState(0);
  const [showTest, setShowTest] = useState(false);

  const getNextSet = () => {
    const startIndex = setIndex * 4;
    const endIndex = Math.min(startIndex + 4, almancaFiiller.length);
    const newSet = almancaFiiller.slice(startIndex, endIndex);
    if (newSet.length < 4 && endIndex === almancaFiiller.length) {
      setSetIndex(0);
      return almancaFiiller.slice(0, 4);
    }
    return newSet;
  };

  useEffect(() => {
    setCurrentSet(getNextSet());
  }, []);

  const handleDiscover = (word) => {
    setDiscoveredWords((prev) => {
      if (!prev.includes(word.fiil)) {
        return [...prev, word.fiil];
      }
      return prev;
    });
    if (discoveredWords.length + 1 === currentSet.length) {
      setShowTest(true);
    }
  };

  const handleTestComplete = (results) => {
    const incorrectWords = results.filter((r) => !r.correct).map((r) => r.word);
    setCurrentSet(incorrectWords.length > 0 ? incorrectWords : getNextSet());
    setDiscoveredWords([]);
    setShowTest(false);
    if (incorrectWords.length === 0) {
      setSetIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="explorer-container">
      <Link to="/" className="back-link">
        Zurück
      </Link>
      <h1>Almanca Kelime Kaşifi</h1>
      <div className="map">
        {currentSet.map((word, index) => (
          <div
            key={word.fiil}
            style={{
              position: "absolute",
              left: `${20 + index * 20}%`,
              top: "50%",
            }}
          >
            <WordNode word={word} onDiscover={handleDiscover} />
          </div>
        ))}
      </div>
      {showTest && (
        <QuickTest words={currentSet} onComplete={handleTestComplete} />
      )}
      <div className="progress">
        <p>
          Keşfedilen Kelimeler: {discoveredWords.length}/{almancaFiiller.length}
        </p>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${
                (discoveredWords.length / almancaFiiller.length) * 100
              }%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Explorer;
