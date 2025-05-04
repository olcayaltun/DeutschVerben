import React, { useState, useEffect } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import err from "../utils/data";
import imgData from "../utils/img";
import verben from "../utils/verb";
import { Link } from "react-router-dom";

const Main = () => {
  const [kelime, setKelime] = useState("");
  const [anlami, setAnlami] = useState("");
  const [col, setCol] = useState(false);
  const [num, setNum] = useState(0);

  useEffect(() => {
    const savedNum = JSON.parse(localStorage.getItem("currentNum")) || 0;
    const firstKey = Object.keys(err[savedNum])[0];
    const firstValue = Object.values(err[savedNum])[0];
    setNum(savedNum);
    setKelime(firstKey);
    setAnlami(firstValue);
  }, []);

  const saveToLocalStorage = (newNum) => {
    localStorage.setItem("currentNum", JSON.stringify(newNum));
  };

  const handleNext = () => {
    const nextNum = (num + 1) % err.length;
    const nextKey = Object.keys(err[nextNum])[0];
    const nextValue = Object.values(err[nextNum])[0];
    setKelime(nextKey);
    setAnlami(nextValue);
    setNum(nextNum);
    saveToLocalStorage(nextNum);
    setCol(false);
  };

  const handlePrev = () => {
    const prevNum = (num - 1 + err.length) % err.length;
    const prevKey = Object.keys(err[prevNum])[0];
    const prevValue = Object.values(err[prevNum])[0];
    setKelime(prevKey);
    setAnlami(prevValue);
    setNum(prevNum);
    saveToLocalStorage(prevNum);
    setCol(false);
  };

  const handleColor = () => {
    setCol(!col);
  };

  return (
    <div className="mt-[320px] overflow-y-hidden ml-5 mr-5">
      {/* Navigation Links Container */}
      <div className="absolute top-2 left-2 flex gap-2 flex-wrap z-10">
        <Link
          to="/soru"
          className="bg-amber-300 px-3 py-2 rounded-md hover:bg-amber-400 transition-colors"
        >
          Sorular
        </Link>
        <Link
          to="/prä"
          className="bg-amber-300 px-3 py-2 rounded-md hover:bg-amber-400 transition-colors"
        >
          VerbenMitPo..
        </Link>
        <Link
          to="/buch"
          className="bg-amber-300 px-3 py-2 rounded-md hover:bg-amber-400 transition-colors"
        >
          Kitap
        </Link>
        <Link
          to="/sifat"
          className="bg-amber-300 px-3 py-2 rounded-md hover:bg-amber-400 transition-colors"
        >
          Sifatlar
        </Link>
        <Link
          to="/metin"
          className="bg-amber-300 px-3 py-2 rounded-md hover:bg-amber-400 transition-colors"
        >
          Metinler
        </Link>
        <Link
          to="/frank"
          className="bg-amber-300 px-3 py-2 rounded-md hover:bg-amber-400 transition-colors"
        >
          Frankfurt
        </Link>
        <Link
          to="/yeni"
          className="bg-amber-300 px-3 py-2 rounded-md hover:bg-amber-400 transition-colors"
        >
          Yeni
        </Link>
        <Link
          to="/maintest"
          className="bg-amber-300 px-3 py-2 rounded-md hover:bg-amber-400 transition-colors"
        >
          Go Test
        </Link>
        <Link
          to="/test"
          className="bg-amber-300 px-3 py-2 rounded-md hover:bg-amber-400 transition-colors"
        >
          Test
        </Link>
        <Link
          to="/tren"
          className="bg-amber-300 px-3 py-2 rounded-md hover:bg-amber-400 transition-colors whitespace-nowrap"
        >
          TrenbarenVerben
        </Link>
        <Link
          to="/yenibilgiler"
          className="bg-amber-300 px-3 py-2 rounded-md hover:bg-amber-400 transition-colors"
        >
          Yeni Bilgiler
        </Link>
        <Link
          to="/mektup"
          className="bg-amber-300 px-3 py-2 rounded-md hover:bg-amber-400 transition-colors"
        >
          MEKTUPLAR
        </Link>
        <Link
          to="/test1"
          className="bg-amber-300 px-3 py-2 rounded-md hover:bg-amber-400 transition-colors"
        >
          Test1
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex justify-center gap-[70px] max-sm:flex max-sm:flex-col">
        <div className="flex justify-center gap-10">
          <button
            className="max-sm:absolute max-sm:left-[120px]"
            onClick={handlePrev}
          >
            <FaArrowCircleLeft className="text-white text-4xl hover:text-blue-500" />
          </button>

          <button
            className="max-sm:absolute max-sm:left-[250px]"
            onClick={handleNext}
          >
            <FaArrowCircleRight className="text-white text-4xl hover:text-blue-500" />
          </button>
        </div>

        <div className="flex gap-10 items-center">
          <p className="bg-red-600 text-white font-bold p-2 capitalize max-w-[200px] rounded-md hover:bg-red-400 w-[300px] text-center border-[.7px]">
            {kelime}
          </p>
          <button onClick={handleColor}>
            <FaArrowCircleRight className="text-white text-4xl hover:text-blue-500" />
          </button>
          <p
            className={`font-bold p-2 capitalize max-w-[200px] rounded-md w-[300px] text-center border-[.7px] ${
              col ? "bg-green-600 text-white" : "bg-green-600 text-transparent"
            }`}
          >
            {anlami}
          </p>
        </div>

        <div className="absolute right-[50px] top-[350px] max-md:top-[600px] max-md:right-[100px] max-sm:top-[70px] max-sm:left-[130px]">
          <img
            className="sch rounded-md shadow-2xl shadow-white h-[230px] w-[230px]"
            src={`${imgData[num]}`}
            alt=""
          />
        </div>

        <button
          className="bg-blue-700 p-2 rounded-md text-white hover:bg-blue-500 border-[.7px]"
          onClick={handleNext}
        >
          Verben mit Satze
        </button>

        <div className="bg-blue-700 p-2 rounded-md text-white hover:bg-blue-500 border-[.7px] items-center flex justify-center">
          <p>{verben[num]}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
