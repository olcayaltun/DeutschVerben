import React, { useState, useEffect } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import err from "../utils/data";

const TestComponent = () => {
  const storedIndex = localStorage.getItem("questionIndex") || 0; // Kayıtlı indeks varsa al
  const [questionIndex, setQuestionIndex] = useState(parseInt(storedIndex, 10));
  const [question, setQuestion] = useState({});
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState("");

  useEffect(() => {
    generateQuestion();
  }, [questionIndex]);

  useEffect(() => {
    localStorage.setItem("questionIndex", questionIndex); // Her değişimde kaydet
  }, [questionIndex]);

  const generateQuestion = () => {
    if (questionIndex >= err.length) return;

    const randomWord = Object.keys(err[questionIndex])[0];
    const correct = err[questionIndex][randomWord];

    let wrongAnswers = err
      .filter((_, index) => index !== questionIndex)
      .map((item) => Object.values(item)[0]);

    wrongAnswers = wrongAnswers.sort(() => 0.5 - Math.random()).slice(0, 2);

    const shuffledOptions = [correct, ...wrongAnswers].sort(
      () => 0.5 - Math.random()
    );

    setQuestion({ word: randomWord, meaning: correct });
    setOptions(shuffledOptions);
    setCorrectAnswer(correct);
    setSelected(null);
  };

  const handleAnswerClick = (option) => {
    setSelected(option);
  };

  const handleNextQuestion = () => {
    if (questionIndex < err.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      alert("Tüm soruları tamamladınız! 🎉");
    }
  };

  return (
    <div className="p-5 max-w-md mx-auto bg-white shadow-lg rounded-lg absolute top-[200px] left-[40px]">
      <div>
        <Link
          className="absolute text-white top-[-150px] text-4xl hover:text-blue-500"
          to={-1}
        >
          <FaArrowCircleLeft />
        </Link>
      </div>

      <h2 className="text-xl font-bold mb-4 text-red-700">
        {question.word?.includes("_")
          ? question.word.replace("_", " (") + ")"
          : question.word}{" "}
        <span className="text-[15px] text-black">ne anlama gelir?</span>
      </h2>
      <div className="flex flex-col space-y-2">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(option)}
            className={`p-3 rounded text-white font-semibold transition-all ${
              selected
                ? option === correctAnswer
                  ? "bg-green-500"
                  : option === selected
                  ? "bg-red-500"
                  : "bg-blue-500"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            disabled={selected !== null}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        onClick={handleNextQuestion}
        className="mt-4 p-3 bg-gray-700 text-white rounded w-full hover:bg-gray-800 transition"
      >
        {questionIndex < err.length - 1 ? "İlerle" : "Bitir"}
      </button>
    </div>
  );
};

export default TestComponent;
