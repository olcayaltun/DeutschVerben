import React, { useState, useEffect } from "react";
import verbsData from "../utils/Präpositionen/verben.json";

const Präpos = () => {
  const [activeCategory, setActiveCategory] = useState("VerbenMitAkkusativ");
  const [selectedVerbIndex, setSelectedVerbIndex] = useState(0);
  const [favorites, setFavorites] = useState(() => {
    // Load favorites from localStorage on initial render
    const saved = localStorage.getItem("favoriteVerbs");
    return saved ? JSON.parse(saved) : [];
  });

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("favoriteVerbs", JSON.stringify(favorites));
  }, [favorites]);

  const categories = [
    { key: "Favorites", label: "Favoriler" },
    { key: "VerbenMitAkkusativ", label: "Verben mit Akkusativ" },
    { key: "VerbenMitDativ", label: "Verben mit Dativ" },
    { key: "VerbenMitGenitiv", label: "Verben mit Genitiv" },
    { key: "KomplexeVerbkonstruktionen", label: "Komplexe Verbkonstruktionen" },
    {
      key: "PrapositionalobjekteMitMehrerenMoglichenPrapositionen",
      label: "Präpositionalobjekte mit mehreren möglichen Präpositionen",
    },
    {
      key: "FunktionsverbgefugeMitPrapositionen",
      label: "Funktionsverbgefüge mit Präpositionen",
    },
  ];

  // Filter verbs based on active category
  const verbs =
    activeCategory === "Favorites"
      ? favorites
      : verbsData[activeCategory] || [];

  // Toggle favorite status
  const toggleFavorite = (verb) => {
    setFavorites((prev) => {
      const isFavorited = prev.some(
        (fav) => fav.verb === verb.verb && fav.meaning === verb.meaning
      );
      if (isFavorited) {
        return prev.filter(
          (fav) => !(fav.verb === verb.verb && fav.meaning === verb.meaning)
        );
      } else {
        return [...prev, verb];
      }
    });
  };

  // Navigation functions
  const handleNext = () => {
    setSelectedVerbIndex((prev) => (prev + 1) % verbs.length);
  };

  const handlePrev = () => {
    setSelectedVerbIndex((prev) => (prev - 1 + verbs.length) % verbs.length);
  };

  // Verb card component
  const VerbCard = ({ verb }) => {
    const [showPreposition, setShowPreposition] = useState(false);
    const [showSentence, setShowSentence] = useState(false);
    const [showTranslation, setShowTranslation] = useState(false);

    const verbParts = verb.verb.split(" (");
    const baseVerb = verbParts[0].replace("sich ", "").split(" ")[0].trim();
    const preposition = verbParts[0].includes(" ")
      ? verbParts[0].split(" ").slice(-1)[0]
      : verbParts[1]?.replace(")", "") || "";
    const hasSich = verb.verb.includes("sich");

    const isFavorited = favorites.some(
      (fav) => fav.verb === verb.verb && fav.meaning === verb.meaning
    );

    return (
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow max-w-md mx-auto">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <h2 className="text-xl font-semibold">
              {hasSich && <span className="text-blue-600">sich </span>}
              <span className="text-black">{baseVerb}</span>
            </h2>
            {showPreposition ? (
              <span className="ml-2 text-red-700 text-2xl font-bold mt-[-20px]">
                {preposition}
              </span>
            ) : (
              <button
                onClick={() => setShowPreposition(true)}
                className="ml-2 text-blue-600 hover:text-blue-800 focus:outline-none"
              >
                ▶
              </button>
            )}
          </div>
          <button
            onClick={() => toggleFavorite(verb)}
            className={`text-2xl transition-colors duration-200 ${
              isFavorited
                ? "text-yellow-500 bg-yellow-100 rounded-full p-1"
                : "text-gray-400 hover:text-yellow-600"
            }`}
            title={isFavorited ? "Favorilerden kaldır" : "Favorilere ekle"}
          >
            {isFavorited ? "★" : "☆"}
          </button>
        </div>

        <p className="text-gray-700 mb-2 bg-emerald-100 p-1 rounded-md italic">
          <strong>{verb.meaning}</strong>
        </p>

        <div
          onClick={() => setShowSentence(!showSentence)}
          className="text-gray-700 mb-2 cursor-pointer hover:text-blue-600 font-semibold bg-blue-100 p-1 rounded-md"
        >
          {showSentence ? verb.exampleSentence : "Cümleyi görmek için tıklayın"}
        </div>

        {showSentence && (
          <button
            onClick={() => setShowTranslation(!showTranslation)}
            className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {showTranslation ? "Çeviriyi Gizle" : "Çeviriyi Göster"}
          </button>
        )}

        {showTranslation && (
          <p className="text-gray-700 mt-2 bg-emerald-100 p-1 rounded-md">
            <strong>Çeviri:</strong> {verb.exampleTranslation}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Deutsche Verben mit Präpositionen (C1)
      </h1>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => {
              setActiveCategory(category.key);
              setSelectedVerbIndex(0);
            }}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              activeCategory === category.key
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600 hover:bg-blue-100"
            }`}
            disabled={category.key === "Favorites" && favorites.length === 0}
          >
            {category.label}
            {category.key === "Favorites" && ` (${favorites.length})`}
          </button>
        ))}
      </div>

      {/* Verb Card and Navigation Arrows */}
      {verbs.length > 0 ? (
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrev}
            className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            ←
          </button>
          <VerbCard verb={verbs[selectedVerbIndex]} />
          <button
            onClick={handleNext}
            className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            →
          </button>
        </div>
      ) : (
        activeCategory === "Favorites" && (
          <p className="text-gray-600">Henüz favori eklenmemiş.</p>
        )
      )}
    </div>
  );
};

export default Präpos;
