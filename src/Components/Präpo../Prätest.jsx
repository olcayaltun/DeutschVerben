import React, { useState, useEffect } from "react";
import verbData from "../../utils/Präpositionen/verben.json";

// Yanlış seçenekler için rastgele edatlar
const prepositions = [
  "auf",
  "an",
  "bei",
  "mit",
  "für",
  "über",
  "um",
  "zu",
  "gegen",
  "von",
  "in",
];

const Prätest = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  // Favorileri yükle (localStorage'dan)
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favoriteQuestions");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Favorileri localStorage'a kaydet
  const saveFavorites = (newFavorites) => {
    setFavorites(newFavorites);
    localStorage.setItem("favoriteQuestions", JSON.stringify(newFavorites));
  };

  // Rastgele yanlış seçenekler oluştur
  const getRandomPrepositions = (correctPreposition) => {
    const filteredPrepositions = prepositions.filter(
      (p) => p !== correctPreposition
    );
    const shuffled = filteredPrepositions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
  };

  // Soruları hazırla
  useEffect(() => {
    const allVerbs = [
      ...verbData.VerbenMitAkkusativ,
      ...verbData.VerbenMitDativ,
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);

    const generatedQuestions = allVerbs.map((verb) => {
      const prepositionMatch = verb.verb.match(
        /(auf|an|bei|mit|für|über|um|zu|gegen|von|in)/
      );
      const preposition = prepositionMatch ? prepositionMatch[0] : "";

      let verbRoot = verb.verb
        .replace(/\([^)]*\)/g, "")
        .split(preposition)[0]
        ?.trim();

      if (!verbRoot || verbRoot.length < 2) {
        const words = verb.verb
          .replace(/\([^)]*\)/g, "")
          .trim()
          .split(" ");
        verbRoot = words[0];
        if (words[0] === "sich" && words.length > 1) {
          verbRoot = `${words[0]} ${words[1]}`;
        }
      }

      if (!preposition || !verbRoot) {
        console.warn(
          `Hata: Fiil: ${verb.verb}, Edat: ${preposition}, Kök: ${verbRoot}`
        );
      }

      const wrongOptions = getRandomPrepositions(preposition);
      const options = [
        { text: preposition, isCorrect: true },
        { text: wrongOptions[0], isCorrect: false },
        { text: wrongOptions[1], isCorrect: false },
      ].sort(() => 0.5 - Math.random());

      return {
        question: `"${verbRoot} ..." fiili hangi edat ile kullanılır?`,
        options,
        correctAnswer: preposition,
        exampleSentence: verb.exampleSentence,
        exampleTranslation: verb.exampleTranslation,
        verb: verb.verb, // Favorilere eklemek için tam fiili sakla
      };
    });

    setQuestions(generatedQuestions);
  }, []);

  // Cevap kontrolü
  const handleAnswer = (option) => {
    setSelectedAnswer(option);
    if (option.isCorrect) {
      setFeedback("Doğru!");
      setScore(score + 1);
    } else {
      setFeedback(
        `Yanlış! Doğru cevap: ${questions[currentQuestion].correctAnswer}`
      );
      // Yanlış cevaplanan soruyu favorilere ekle
      const currentQ = questions[currentQuestion];
      if (!favorites.some((fav) => fav.verb === currentQ.verb)) {
        const newFavorites = [...favorites, currentQ];
        saveFavorites(newFavorites);
      }
    }
  };

  // Sonraki soruya geç
  const handleNext = () => {
    setSelectedAnswer(null);
    setFeedback(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(-1); // Test bitti
    }
  };

  // Testi sıfırla
  const resetQuiz = () => {
    setQuestions([]);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setFeedback(null);
    setScore(0);
    const allVerbs = [
      ...verbData.VerbenMitAkkusativ,
      ...verbData.VerbenMitDativ,
    ]
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);

    const generatedQuestions = allVerbs.map((verb) => {
      const prepositionMatch = verb.verb.match(
        /(auf|an|bei|mit|für|über|um|zu|gegen|von|in)/
      );
      const preposition = prepositionMatch ? prepositionMatch[0] : "";
      let verbRoot = verb.verb
        .replace(/\([^)]*\)/g, "")
        .split(preposition)[0]
        ?.trim();

      if (!verbRoot || verbRoot.length < 2) {
        const words = verb.verb
          .replace(/\([^)]*\)/g, "")
          .trim()
          .split(" ");
        verbRoot = words[0];
        if (words[0] === "sich" && words.length > 1) {
          verbRoot = `${words[0]} ${words[1]}`;
        }
      }

      const wrongOptions = getRandomPrepositions(preposition);
      const options = [
        { text: preposition, isCorrect: true },
        { text: wrongOptions[0], isCorrect: false },
        { text: wrongOptions[1], isCorrect: false },
      ].sort(() => 0.5 - Math.random());

      return {
        question: `"${verbRoot} ..." fiili hangi edat ile kullanılır?`,
        options,
        correctAnswer: preposition,
        exampleSentence: verb.exampleSentence,
        exampleTranslation: verb.exampleTranslation,
        verb: verb.verb,
      };
    });

    setQuestions(generatedQuestions);
  };

  // Favorileri temizle
  const clearFavorites = () => {
    saveFavorites([]);
  };

  if (questions.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        Yükleniyor...
      </div>
    );
  }

  if (currentQuestion === -1) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
        <h1 className="text-3xl font-bold mb-4">Test Bitti!</h1>
        <p className="text-xl mb-4">
          Puanınız: {score} / {questions.length}
        </p>
        <div className="flex space-x-4 mb-4">
          <button
            onClick={resetQuiz}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Tekrar Başla
          </button>
          <button
            onClick={() => setShowFavorites(!showFavorites)}
            className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition"
          >
            {showFavorites ? "Favorileri Gizle" : "Favorileri Göster"}
          </button>
        </div>
        {showFavorites && (
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Favoriler</h2>
            {favorites.length === 0 ? (
              <p className="text-gray-600">
                Henüz favorilere eklenmiş soru yok.
              </p>
            ) : (
              <div className="space-y-4">
                {favorites.map((fav, index) => (
                  <div key={index} className="border-b pb-2">
                    <p className="font-semibold">{fav.question}</p>
                    <p className="text-sm text-gray-600">
                      Doğru cevap: {fav.correctAnswer}
                    </p>
                    <p className="text-sm text-gray-600">
                      {fav.exampleSentence}
                    </p>
                    <p className="text-sm text-gray-500">
                      {fav.exampleTranslation}
                    </p>
                  </div>
                ))}
                <button
                  onClick={clearFavorites}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Favorileri Temizle
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  const current = questions[currentQuestion];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Almanca Edatlı Fiiller Testi
        </h1>
        <p className="text-lg mb-2">
          Soru {currentQuestion + 1} / {questions.length}
        </p>
        <p className="text-xl font-semibold mb-4">{current.question}</p>
        <div className="space-y-2">
          {current.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              disabled={selectedAnswer !== null}
              className={`w-full text-left p-3 rounded-lg border ${
                selectedAnswer === option
                  ? option.isCorrect
                    ? "bg-green-100 border-green-500"
                    : "bg-red-100 border-red-500"
                  : "bg-gray-50 border-gray-300 hover:bg-gray-100"
              } ${
                selectedAnswer !== null
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              } transition`}
            >
              {option.text}
            </button>
          ))}
        </div>
        {feedback && (
          <div className="mt-4 p-3 rounded-lg text-center font-semibold">
            <p
              className={
                feedback.includes("Doğru") ? "text-green-600" : "text-red-600"
              }
            >
              {feedback}
            </p>
            <p className="mt-2 text-sm text-gray-600">
              {current.exampleSentence}
            </p>
            <p className="text-sm text-gray-500">
              {current.exampleTranslation}
            </p>
          </div>
        )}
        {selectedAnswer && (
          <button
            onClick={handleNext}
            className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            {currentQuestion < questions.length - 1
              ? "Sonraki Soru"
              : "Testi Bitir"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Prätest;
