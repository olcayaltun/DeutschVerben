import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import almancaFiiller from "../utils/ almancakelimeler";

function Second() {
  const [fiiller, setFiiller] = useState([]);
  const [anlamlar, setAnlamlar] = useState([]);
  const [selectedFiil, setSelectedFiil] = useState(null);
  const [selectedAnlam, setSelectedAnlam] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [crystals, setCrystals] = useState(0);
  const [timer, setTimer] = useState(30);
  const [gameStarted, setGameStarted] = useState(false);
  const [showDetails, setShowDetails] = useState(null);
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [showFavorites, setShowFavorites] = useState(false);

  // LocalStorage'dan favorileri yükle
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  // Favoriler değiştiğinde LocalStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (fiil) => {
    setFavorites((prev) =>
      prev.includes(fiil) ? prev.filter((f) => f !== fiil) : [...prev, fiil]
    );
  };

  const getNextSet = () => {
    const startIndex = currentSetIndex * 4;
    const endIndex = Math.min(startIndex + 4, almancaFiiller.length);
    const currentSet = almancaFiiller.slice(startIndex, endIndex);

    if (currentSet.length < 4 && endIndex === almancaFiiller.length) {
      setCurrentSetIndex(0);
      return almancaFiiller.slice(0, 4);
    }
    return currentSet;
  };

  const shuffleSet = () => {
    const currentSet = getNextSet();
    const shuffledFiiller = [...currentSet].sort(() => Math.random() - 0.5);
    const shuffledAnlamlar = [...currentSet]
      .sort(() => Math.random() - 0.5)
      .map((item) => item.anlam);
    setFiiller(shuffledFiiller);
    setAnlamlar(shuffledAnlamlar);
  };

  useEffect(() => {
    shuffleSet();
  }, []);

  useEffect(() => {
    if (gameStarted && timer > 0) {
      const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(countdown);
    } else if (timer === 0) {
      setGameStarted(false);
      setTimer(30);
    }
  }, [gameStarted, timer]);

  useEffect(() => {
    if (matchedPairs.length === fiiller.length && fiiller.length > 0) {
      setCurrentSetIndex((prev) => prev + 1);
      setMatchedPairs([]);
      setCrystals((prev) => prev + fiiller.length);
      setShowDetails(null);
      shuffleSet();
      setGameStarted(false);
      setTimer(30);
    }
  }, [matchedPairs]);

  const handleFiilSelect = (fiil) => {
    if (!matchedPairs.includes(fiil.fiil)) {
      setSelectedFiil(fiil);
      setShowDetails(null);
    }
  };

  const handleAnlamSelect = (anlam) => {
    if (selectedFiil && !matchedPairs.some((pair) => pair.anlam === anlam)) {
      setSelectedAnlam(anlam);
      checkMatch(selectedFiil, anlam);
    }
  };

  const checkMatch = (fiil, anlam) => {
    if (fiil.anlam === anlam) {
      setMatchedPairs((prev) => [...prev, { fiil: fiil.fiil, anlam }]);
      setCrystals((prev) => prev + 1);
      setShowDetails(fiil);
      document.querySelector(".factory").classList.add("success-flash");
      setTimeout(
        () =>
          document.querySelector(".factory").classList.remove("success-flash"),
        500
      );
    } else {
      document.querySelector(".factory").classList.add("error-cloud");
      setTimeout(
        () =>
          document.querySelector(".factory").classList.remove("error-cloud"),
        500
      );
    }
    setSelectedFiil(null);
    setSelectedAnlam(null);
  };

  const startGame = () => {
    setGameStarted(true);
    setMatchedPairs([]);
    setTimer(30);
    setShowDetails(null);
    shuffleSet();
  };

  const progress =
    fiiller.length > 0 ? (matchedPairs.length / fiiller.length) * 100 : 0;

  return (
    <div className="cosmic-match-factory">
      <Link
        to="/"
        className="bg-amber-300 absolute px-3 py-2 rounded-md top-2 left-[20px] text-black"
      >
        Zurück
      </Link>

      <h1>Kozmik Maç Fabrikası</h1>

      <div className="factory">
        <div className="control-panel">
          <button
            className="favorites-toggle"
            onClick={() => setShowFavorites(!showFavorites)}
          >
            ⭐ Favorilerim ({favorites.length})
          </button>
          <p>Enerji Kristalleri: {crystals}</p>
          <p>Kalan Süre: {timer}s</p>
          <button
            onClick={startGame}
            onTouchEnd={startGame}
            disabled={gameStarted}
          >
            Üretimi Başlat
          </button>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <div className="match-board">
          <div className="fiil-column">
            <h2>Fiiller</h2>
            {fiiller.map((fiil) => (
              <div
                key={fiil.fiil}
                className={`fiil-card ${
                  selectedFiil?.fiil === fiil.fiil ? "selected" : ""
                } ${
                  matchedPairs.some((pair) => pair.fiil === fiil.fiil)
                    ? "matched"
                    : ""
                }`}
                onClick={() => handleFiilSelect(fiil)}
                onTouchEnd={() => handleFiilSelect(fiil)}
              >
                <button
                  className={`star-btn ${
                    favorites.includes(fiil.fiil) ? "favorited" : ""
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(fiil.fiil);
                  }}
                  onTouchEnd={(e) => {
                    e.stopPropagation();
                    toggleFavorite(fiil.fiil);
                  }}
                >
                  ★
                </button>
                {fiil.fiil}
              </div>
            ))}
          </div>

          <div className="anlam-column">
            <h2>Anlamlar</h2>
            {anlamlar.map((anlam, index) => (
              <div
                key={index}
                className={`anlam-card ${
                  selectedAnlam === anlam ? "selected" : ""
                } ${
                  matchedPairs.some((pair) => pair.anlam === anlam)
                    ? "matched"
                    : ""
                }`}
                onClick={() => handleAnlamSelect(anlam)}
                onTouchEnd={() => handleAnlamSelect(anlam)}
              >
                {anlam}
              </div>
            ))}
          </div>
        </div>

        {showDetails && (
          <div className="detail-pod">
            {showDetails.img && (
              <img
                src={showDetails.img}
                alt={showDetails.fiil}
                className="detail-image"
              />
            )}
            <p>
              <strong>Fiil:</strong> {showDetails.fiil}
            </p>
            <p>
              <strong>Anlam:</strong> {showDetails.anlam}
            </p>
            <p>
              <strong>Örnek:</strong> {showDetails.cumle}
            </p>
            <button
              onClick={() => setShowDetails(null)}
              onTouchEnd={() => setShowDetails(null)}
            >
              Kapat
            </button>
          </div>
        )}

        {showFavorites && (
          <div className="favorites-modal">
            <div className="favorites-content">
              <h2>⭐ Favori Kelimeleriniz</h2>
              <button
                className="close-btn"
                onClick={() => setShowFavorites(false)}
              >
                ✖
              </button>
              {favorites.length === 0 ? (
                <p>Henüz favori kelimeniz yok.</p>
              ) : (
                <div className="favorites-list">
                  {almancaFiiller
                    .filter((item) => favorites.includes(item.fiil))
                    .map((fiil, index) => (
                      <div key={index} className="favorite-item">
                        <div className="favorite-info">
                          <h3>{fiil.fiil}</h3>
                          <p>Anlam: {fiil.anlam}</p>
                          {fiil.cumle && <p>Örnek: {fiil.cumle}</p>}
                        </div>
                        <button
                          className="remove-btn"
                          onClick={() => toggleFavorite(fiil.fiil)}
                        >
                          Kaldır
                        </button>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {matchedPairs.length === fiiller.length && fiiller.length > 0 && (
        <p className="factory-complete">
          Set Tamamlandı! Bir Sonraki Sete Hazır!
        </p>
      )}
      {currentSetIndex * 4 >= almancaFiiller.length &&
        matchedPairs.length === fiiller.length && (
          <p className="game-complete">
            Tüm Kelimeler Eşleşti! Fabrika Üretimi Bitti!
          </p>
        )}
    </div>
  );
}

export default Second;
