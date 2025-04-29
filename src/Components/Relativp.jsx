import React, { useState, useEffect } from "react";
import sentencesData from "../utils/sentencesData"; // JSON verisi ayrı dosyada

const Relativp = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  // Tüm relatifpronomenler ve edat kombinasyonları
  const allPronouns = [
    "der",
    "die",
    "das",
    "den",
    "dem",
    "dessen",
    "deren",
    "denen",
    "mit dem",
    "in dem",
    "auf den",
    "an dem",
    "vor dem",
    "zu dem",
    "ohne den",
    "für den",
    "in der",
    "aus der",
    "auf der",
    "neben der",
    "bei der",
    "von der",
    "für der",
    "in das",
    "durch das",
    "vor das",
    "über das",
    "nach dem",
    "während dessen",
    "wegen dessen",
    "zwischen denen",
  ];

  // Yardımcı fonksiyon: Diziyi karıştır
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Relatifpronomeni yan cümleye göre belirle
  const determinePronoun = (sentence) => {
    // Cümleyi virgüle göre ayır
    const parts = sentence.split(/,\s*/);
    if (parts.length < 2) return "der";

    const mainClause = parts[0];
    const relativeClause = parts[1].split(/\s+/);

    // Ana cümlenin öznesini belirle
    const mainSubjectMatch = mainClause.match(/\b(Der|Die|Das)\b/i);
    const mainSubject = mainSubjectMatch
      ? mainSubjectMatch[1].toLowerCase()
      : "";

    // Yan cümlenin dilbilgisi durumunu analiz et
    const verb =
      relativeClause.find((word) =>
        word.match(/^(haben|sein|werden|[a-z]+en)$/i)
      ) || "";
    const firstWord = relativeClause[0].toLowerCase();

    // Edatlı ifadeleri kontrol et
    const originalPronoun = parts[1].match(
      /\b(mit dem|in dem|auf den|an dem|vor dem|zu dem|ohne den|für den|in der|aus der|auf der|neben der|bei der|von der|für der|in das|durch das|vor das|über das|nach dem|während dessen|wegen dessen|zwischen denen)\b/i
    )?.[1];
    if (originalPronoun) {
      return originalPronoun;
    }

    // Genitiv kontrolü (örn. "Motor kaputt ist" gibi sahiplik durumları)
    if (
      relativeClause.some((word) =>
        word.match(
          /^(Auto|Kind|Hausaufgaben|Buch|Unterricht|Praxis|Hund|Firma|Rat|Rede|Forschung|Eltern|Motor|Dach|Küche|Leistung|Service)$/i
        )
      )
    ) {
      if (mainSubject === "der") return "dessen";
      if (mainSubject === "die") return "deren";
      if (mainSubject === "das") return "dessen";
      if (
        sentence.includes("Kinder") ||
        sentence.includes("Bücher") ||
        sentence.includes("Häuser")
      )
        return "deren";
    }

    // Nominativ kontrolü (örn. "dort steht")
    if (
      relativeClause.some((word) =>
        word.match(/^(er|sie|es|wir|ihr|sie|Sie)$/i)
      ) &&
      verb
    ) {
      if (mainSubject === "der") return "der";
      if (mainSubject === "die") return "die";
      if (mainSubject === "das") return "das";
    }

    // Akkusativ kontrolü (örn. "ich gesehen habe")
    if (
      verb.match(
        /^(gesehen|gekauft|geliebt|bestellt|geschrieben|gegessen|benutzt|empfohlen|gebucht|gemalt)$/i
      )
    ) {
      if (mainSubject === "der") return "den";
      if (mainSubject === "die") return "die";
      if (mainSubject === "das") return "das";
    }

    // Dativ kontrolü (örn. "ich geholfen habe")
    if (
      verb.match(
        /^(geholfen|vertraut|gratulieren|geschickt|gegeben|erklärt|begegnet)$/i
      )
    ) {
      if (mainSubject === "der") return "dem";
      if (mainSubject === "die") return "der";
      if (mainSubject === "das") return "dem";
    }

    return "der"; // Varsayılan olarak 'der'
  };

  // Soruları karıştır ve yükle
  useEffect(() => {
    const allSentences = sentencesData.flatMap((category) =>
      category.subcategories.flatMap((subcategory) =>
        subcategory.sentences.map((sentence) => ({
          de: sentence.de,
          tr: sentence.tr,
          correctAnswer: determinePronoun(sentence.de),
        }))
      )
    );
    setQuestions(shuffleArray(allSentences));
  }, []);

  // Yanlış cevapları localStorage'dan yükle
  useEffect(() => {
    const savedWrongAnswers =
      JSON.parse(localStorage.getItem("wrongAnswers")) || [];
    setWrongAnswers(savedWrongAnswers);
  }, []);

  // Yanlış cevapları localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("wrongAnswers", JSON.stringify(wrongAnswers));
  }, [wrongAnswers]);

  // Yanlış şıkları rastgele seç
  const getOptions = (correctAnswer) => {
    const wrongOptions = allPronouns.filter((p) => p !== correctAnswer);
    const selectedWrong = shuffleArray(wrongOptions).slice(0, 3);
    return shuffleArray([correctAnswer, ...selectedWrong]);
  };

  // İleri ve geri navigasyon
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    }
  };

  // Yanlış cevabı kaydet
  const handleWrongAnswer = (question) => {
    if (!wrongAnswers.some((wrong) => wrong.de === question.de)) {
      setWrongAnswers([...wrongAnswers, question]);
    }
  };

  // Cevabı kontrol et
  const handleAnswer = (answer, correctAnswer) => {
    setSelectedAnswer(answer);
    const correct = answer === correctAnswer;
    setIsCorrect(correct);
    if (!correct) {
      handleWrongAnswer(questions[currentIndex]);
    }
  };

  // Mevcut soruyu render et
  const renderQuiz = () => {
    if (questions.length === 0) {
      return <p>Yükleniyor...</p>;
    }

    const question = questions[currentIndex];
    const options = getOptions(question.correctAnswer);

    // Cümleyi virgülden bölelim ve sadece yan cümledeki (ikinci kısımdaki) relatifpronomeni değiştirelim
    const parts = question.de.split(/,(.+)/);
    let displayQuestion = question.de;

    if (parts.length >= 2) {
      const mainClause = parts[0];
      let relativeClause = parts[1].trim();

      // Yan cümledeki ilk relatifpronomeni bul
      const pronounMatch = relativeClause.match(
        new RegExp(`^(${allPronouns.join("|")})\\b`, "i")
      );

      if (pronounMatch) {
        // Sadece yan cümledeki relatifpronomeni "........" ile değiştir
        relativeClause =
          "........" + relativeClause.substring(pronounMatch[0].length);
      }

      displayQuestion = mainClause + ", " + relativeClause;
    }

    return (
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <p className="text-lg font-medium mb-4">{displayQuestion}</p>
        <p className="text-gray-600 mb-4">({question.tr})</p>
        <div className="grid gap-2">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option, question.correctAnswer)}
              disabled={selectedAnswer !== null}
              className={`p-2 rounded border text-left ${
                selectedAnswer === option
                  ? isCorrect
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Relativpronomen Test</h1>
      {renderQuiz()}
      <div className="flex gap-4 mt-4">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Geri
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === questions.length - 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          İleri
        </button>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Yanlış Cevaplanan Sorular</h2>
        <ul className="list-disc pl-5">
          {wrongAnswers.map((wrong, index) => (
            <li key={index} className="mt-2">
              {wrong.de} <br />{" "}
              <span className="text-gray-600">({wrong.tr})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Relativp;
