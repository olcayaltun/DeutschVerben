import React, { useState, useEffect } from "react";

const almancaFiiller = [
  {
    fiil: "abbauen",
    anlam: "Parçalanmak, ayrışmak",
    cumle: "...weil er sich in der Natur nicht von selbst abbaut.",
    img: "https://images.unsplash.com/photo-1503595854510-3d5854c3c999?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  },
  {
    fiil: "atmen",
    anlam: "Nefes almak",
    cumle: "...die Luft, die wir atmen...",
    img: "https://images.unsplash.com/photo-1517248135467-2c0b8dacf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  },
  {
    fiil: "ausstoßen",
    anlam: "Salmak, dışarı atmak",
    cumle: "Fabriken... stoßen viel CO₂ aus.",
    img: "https://images.unsplash.com/photo-1544198369-0f18d7e87b38?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  },
  {
    fiil: "zerstören",
    anlam: "Yok etmek",
    cumle: "...anstatt sie zu zerstören oder auszubeuten.",
    img: "https://images.unsplash.com/photo-1593643946890-b5b85ade24b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  },
];

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

  // Fiilleri ve anlamları karıştırarak başlat
  useEffect(() => {
    const shuffledFiiller = [...almancaFiiller].sort(() => Math.random() - 0.5);
    const shuffledAnlamlar = [...almancaFiiller]
      .sort(() => Math.random() - 0.5)
      .map((item) => item.anlam);
    setFiiller(shuffledFiiller);
    setAnlamlar(shuffledAnlamlar);
  }, []);

  // Zamanlayıcı
  useEffect(() => {
    if (gameStarted && timer > 0) {
      const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(countdown);
    } else if (timer === 0) {
      setGameStarted(false);
      setTimer(30);
    }
  }, [gameStarted, timer]);

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
    setCrystals(0);
    setTimer(30);
    setShowDetails(null);
    const shuffledFiiller = [...almancaFiiller].sort(() => Math.random() - 0.5);
    const shuffledAnlamlar = [...almancaFiiller]
      .sort(() => Math.random() - 0.5)
      .map((item) => item.anlam);
    setFiiller(shuffledFiiller);
    setAnlamlar(shuffledAnlamlar);
  };

  const progress = (crystals / almancaFiiller.length) * 100;

  return (
    <div className="cosmic-match-factory">
      <h1>Kozmik Maç Fabrikası</h1>
      <div className="factory">
        <div className="control-panel">
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
                onTouchEnd={() => handleFiilSelect(fiil)} // Dokunmatik ekran desteği
              >
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
                onTouchEnd={() => handleAnlamSelect(anlam)} // Dokunmatik ekran desteği
              >
                {anlam}
              </div>
            ))}
          </div>
        </div>
        {showDetails && (
          <div className="detail-pod">
            <img
              src={showDetails.img}
              alt={showDetails.fiil}
              className="detail-image"
            />
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
      </div>
      {matchedPairs.length === almancaFiiller.length && (
        <p className="factory-complete">
          Fabrika Tam Kapasite! Kozmik Üretim Başarılı!
        </p>
      )}
    </div>
  );
}

export default Second;
