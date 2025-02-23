import React, { useState, useEffect } from "react";
import Tr from "../utils/trB";

const VerbTest = () => {
  const [state, setState] = useState({
    currentQuestion: null,
    userAnswer: "",
    score: { correct: 0, wrong: 0 },
    isTestCompleted: false,
    showFeedback: false,
    answeredQuestions: new Set(),
    questionType: "de-tr",
    usedMainVerbs: new Set(),
  });

  const allVerbs = Tr[0];
  const MAX_QUESTIONS = 20;

  // Fisher-Yates shuffle algoritması
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const normalize = (str) =>
    str
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9ğüşıöç ]/gi, "")
      .replace(/\s+/g, " ");

  const getRandomQuestion = () => {
    const mainVerbs = shuffle(Object.keys(allVerbs));
    let selected = null;

    for (const mainVerb of mainVerbs) {
      const prefixVerbs = Object.entries(allVerbs[mainVerb]);
      if (prefixVerbs.length > 0) {
        const [german, turkish] = shuffle(prefixVerbs)[0];
        selected = {
          id: `${mainVerb}_${german}`,
          german,
          turkish,
          mainVerb,
        };
        break;
      }
    }
    return selected;
  };

  const handleAnswer = () => {
    const { currentQuestion, questionType, userAnswer } = state;
    const correctAnswer =
      questionType === "de-tr"
        ? currentQuestion.turkish
        : currentQuestion.german;

    const isCorrect = normalize(userAnswer) === normalize(correctAnswer);

    setState((prev) => ({
      ...prev,
      score: {
        correct: prev.score.correct + (isCorrect ? 1 : 0),
        wrong: prev.score.wrong + (isCorrect ? 0 : 1),
      },
      showFeedback: true,
      answeredQuestions: new Set([
        ...prev.answeredQuestions,
        currentQuestion.id,
      ]),
      usedMainVerbs: new Set([...prev.usedMainVerbs, currentQuestion.mainVerb]),
    }));

    setTimeout(() => {
      if (state.answeredQuestions.size >= MAX_QUESTIONS - 1) {
        setState((prev) => ({ ...prev, isTestCompleted: true }));
      } else {
        generateNewQuestion();
      }
    }, 1500);
  };

  const generateNewQuestion = () => {
    let newQuestion;
    do {
      newQuestion = getRandomQuestion();
    } while (state.answeredQuestions.has(newQuestion.id));

    setState((prev) => ({
      ...prev,
      currentQuestion: newQuestion,
      userAnswer: "",
      showFeedback: false,
    }));
  };

  const resetTest = () => {
    setState({
      currentQuestion: null,
      userAnswer: "",
      score: { correct: 0, wrong: 0 },
      isTestCompleted: false,
      showFeedback: false,
      answeredQuestions: new Set(),
      questionType: "de-tr",
      usedMainVerbs: new Set(),
    });
    generateNewQuestion();
  };

  useEffect(() => {
    generateNewQuestion();
  }, [state.questionType]);

  if (state.isTestCompleted) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Test Tamamlandı! 🎉
        </h2>
        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded">
            <span className="text-lg">Doğru Cevaplar:</span>
            <span className="text-2xl font-bold text-green-600">
              {state.score.correct}
            </span>
          </div>
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded">
            <span className="text-lg">Yanlış Cevaplar:</span>
            <span className="text-2xl font-bold text-red-600">
              {state.score.wrong}
            </span>
          </div>
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded">
            <span className="text-lg">Kullanılan Ana Fiiller:</span>
            <span className="text-xl font-semibold text-purple-600">
              {state.usedMainVerbs.size}
            </span>
          </div>
        </div>
        <button
          onClick={resetTest}
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          Yeni Test Başlat
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-8 flex gap-4 justify-center">
        <button
          onClick={() =>
            setState((prev) => ({ ...prev, questionType: "de-tr" }))
          }
          className={`px-6 py-2 rounded-full transition-all ${
            state.questionType === "de-tr"
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          🇩🇪 → 🇹🇷
        </button>
        <button
          onClick={() =>
            setState((prev) => ({ ...prev, questionType: "tr-de" }))
          }
          className={`px-6 py-2 rounded-full transition-all ${
            state.questionType === "tr-de"
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          🇹🇷 → 🇩🇪
        </button>
      </div>

      {state.currentQuestion && (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-600">
              Ana Fiil:{" "}
              <span className="text-blue-600">
                {state.currentQuestion.mainVerb}
              </span>
            </h3>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-center mb-6">
              {state.questionType === "de-tr"
                ? `"${state.currentQuestion.german}"`
                : `"${state.currentQuestion.turkish}"`}
            </p>

            <input
              type="text"
              value={state.userAnswer}
              onChange={(e) =>
                setState((prev) => ({ ...prev, userAnswer: e.target.value }))
              }
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-xl"
              placeholder="Cevabınızı yazın..."
              onKeyPress={(e) => e.key === "Enter" && handleAnswer()}
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={handleAnswer}
              className="px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold"
            >
              Cevapla →
            </button>
            <span className="text-gray-600">
              {state.answeredQuestions.size + 1}/{MAX_QUESTIONS}
            </span>
          </div>

          {state.showFeedback && (
            <div
              className={`p-4 rounded-lg ${
                normalize(state.userAnswer) ===
                normalize(
                  state.questionType === "de-tr"
                    ? state.currentQuestion.turkish
                    : state.currentQuestion.german
                )
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              <p className="font-semibold">
                {normalize(state.userAnswer) ===
                normalize(
                  state.questionType === "de-tr"
                    ? state.currentQuestion.turkish
                    : state.currentQuestion.german
                )
                  ? "✓ Doğru Cevap!"
                  : `✗ Doğru Cevap: ${
                      state.questionType === "de-tr"
                        ? state.currentQuestion.turkish
                        : state.currentQuestion.german
                    }`}
              </p>
            </div>
          )}

          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-500"
              style={{
                width: `${
                  ((state.answeredQuestions.size + 1) / MAX_QUESTIONS) * 100
                }%`,
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerbTest;
