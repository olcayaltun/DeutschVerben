import React, { useState, useEffect } from "react";
import germanVerbs from "../utils/germanVerbs";

const GermanVerbTest = ({ onReturn }) => {
  const [currentVerb, setCurrentVerb] = useState(null);
  const [options, setOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(() => {
    // Load score from localStorage or default to 0
    return parseInt(localStorage.getItem("germanVerbTestScore")) || 0;
  });
  const [totalQuestions, setTotalQuestions] = useState(() => {
    // Load totalQuestions from localStorage or default to 0
    return parseInt(localStorage.getItem("germanVerbTestTotalQuestions")) || 0;
  });
  const [prefix, setPrefix] = useState("");
  const [rootVerb, setRootVerb] = useState("");
  const [repeatQuestion, setRepeatQuestion] = useState(false);

  useEffect(() => {
    generateQuestion();
  }, []);

  // Save score and totalQuestions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("germanVerbTestScore", score);
    localStorage.setItem("germanVerbTestTotalQuestions", totalQuestions);
  }, [score, totalQuestions]);

  const generateQuestion = () => {
    const verbs = Object.entries(germanVerbs);
    if (verbs.length === 0) return;

    // Randomly select a verb
    const [verb, data] = verbs[Math.floor(Math.random() * verbs.length)];

    // Get prefixes
    const prefixes = Object.keys(data.prefixes);
    if (prefixes.length === 0) {
      generateQuestion();
      return;
    }

    // Randomly select a prefixed verb
    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const meaning = data.prefixes[randomPrefix];

    // Split prefix and root verb
    const [prefixPart, rootPart] = splitSeparableVerb(randomPrefix);
    setPrefix(prefixPart);
    setRootVerb(rootPart);

    // Get incorrect meaning from another verb
    const incorrectVerbs = verbs.filter(([v]) => v !== verb);
    let incorrectMeaning = "bilmiyorum";
    if (incorrectVerbs.length > 0) {
      const randomIncorrectVerb =
        incorrectVerbs[Math.floor(Math.random() * incorrectVerbs.length)][1];
      const incorrectPrefixes = Object.values(randomIncorrectVerb.prefixes);
      if (incorrectPrefixes.length > 0) {
        incorrectMeaning =
          incorrectPrefixes[
            Math.floor(Math.random() * incorrectPrefixes.length)
          ];
      }
    }

    // Create and shuffle options
    const newOptions = [
      { text: meaning, isCorrect: true },
      { text: incorrectMeaning, isCorrect: false },
    ].sort(() => Math.random() - 0.5);

    setCurrentVerb(randomPrefix);
    setOptions(newOptions);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setRepeatQuestion(false);
  };

  const splitSeparableVerb = (verb) => {
    const commonPrefixes = [
      "ab",
      "an",
      "auf",
      "aus",
      "ein",
      "mit",
      "nach",
      "vor",
      "zu",
      "weg",
      "zurück",
    ];
    for (const p of commonPrefixes) {
      if (verb.startsWith(p) && verb.length > p.length) {
        return [p, verb.slice(p.length)];
      }
    }
    return ["", verb];
  };

  const handleAnswerSelect = (option) => {
    if (isCorrect !== null) return;

    setSelectedAnswer(option);
    const correct = option.isCorrect;
    setIsCorrect(correct);

    if (correct) {
      setScore((prev) => prev + 1);
      setTotalQuestions((prev) => prev + 1);
    } else {
      // If incorrect, mark to repeat the same question
      setRepeatQuestion(true);
    }
  };

  const handleNextQuestion = () => {
    if (repeatQuestion) {
      // Reset for repeating the same question
      setSelectedAnswer(null);
      setIsCorrect(null);
      setRepeatQuestion(false);
    } else {
      // Generate a new question
      generateQuestion();
    }
  };

  // Optional: Reset score and totalQuestions
  const handleResetProgress = () => {
    setScore(0);
    setTotalQuestions(0);
    localStorage.setItem("germanVerbTestScore", 0);
    localStorage.setItem("germanVerbTestTotalQuestions", 0);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="flex justify-between mb-4">
        <button
          onClick={onReturn}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
        >
          ← Ana Menüye Dön
        </button>
        <button
          onClick={handleResetProgress}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          İlerlemeyi Sıfırla
        </button>
      </div>

      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Almanca Ayrılabilen Fiil Testi
      </h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        {currentVerb ? (
          <>
            <div className="mb-6 text-center">
              <h3 className="text-xl font-semibold mb-2">
                Aşağıdaki fiilin anlamı nedir?
              </h3>
              <div className="text-2xl font-bold text-blue-600">
                {prefix && <span className="text-gray-500">{prefix}</span>}
                {prefix && <span className="text-gray-500"></span>}
                <span>{rootVerb}</span>
              </div>
              <div className="mt-2 text-sm text-gray-500">({currentVerb})</div>
            </div>

            <div className="space-y-3 mb-6">
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  className={`w-full p-3 border rounded-lg text-left transition-colors duration-200 ${
                    selectedAnswer === option
                      ? option.isCorrect
                        ? "bg-green-100 border-green-500"
                        : "bg-red-100 border-red-500"
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                  disabled={isCorrect !== null}
                >
                  {option.text}
                </button>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={handleNextQuestion}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
                disabled={isCorrect === null}
              >
                {repeatQuestion ? "Tekrar Dene" : "Sonraki Soru →"}
              </button>

              <div className="text-gray-700">
                Skor: <span className="font-bold">{score}</span> /{" "}
                {totalQuestions}
              </div>
            </div>
          </>
        ) : (
          <p>Yükleniyor...</p>
        )}
      </div>
    </div>
  );
};

export default GermanVerbTest;
