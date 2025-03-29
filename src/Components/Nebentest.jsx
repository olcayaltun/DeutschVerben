import { useState, useEffect } from "react";

import React from "react";
function Nebentest() {
  const conjunctions = [
    {
      conjunction: "während",
      meaning: "esnasında, sırasında",
      example: "Während ich kochte, hörte ich Musik.",
      translation: "Yemek yaparken müzik dinledim.",
    },
    {
      conjunction: "nachdem",
      meaning: "sonra, -dikten sonra",
      example: "Nachdem wir gegessen hatten, gingen wir spazieren.",
      translation: "Yemek yedikten sonra yürüyüşe çıktık.",
    },
    {
      conjunction: "bevor",
      meaning: "önce",
      example: "Bevor ich ins Kino gehe, muss ich meine Hausaufgaben machen.",
      translation: "Sinemaya gitmeden önce ödevimi yapmam lazım.",
    },
    {
      conjunction: "seit",
      meaning: "o zamandan beri",
      example: "Seit einem Jahr lerne ich Deutsch.",
      translation: "Bir yıldır Almanca öğreniyorum.",
    },
    {
      conjunction: "wenn",
      meaning: "eğer, -diği zaman",
      example: "Wenn es regnet, bleibe ich zu Hause.",
      translation: "Eğer yağmur yağarsa, evde kalırım.",
    },
    {
      conjunction: "als",
      meaning: "o zaman, -dığı zaman, bir kez",
      example: "Als ich ein Kind war, spielte ich oft draußen.",
      translation: "Çocukken sık sık dışarıda oynardım.",
    },
    {
      conjunction: "solange",
      meaning: "sürece, olduğu sürece",
      example: "Solange du ehrlich bist, werde ich dir vertrauen.",
      translation: "Dürüst olduğun sürece sana güveneceğim.",
    },
    {
      conjunction: "sobald",
      meaning: "hemen, -ar… -maz",
      example: "Sobald er ankommt, werden wir essen.",
      translation: "O gelince hemen yiyeceğiz.",
    },
    {
      conjunction: "sowie",
      meaning: "hemen, olur olmaz",
      example: "Sowie er ankam, begann die Party",
      translation: "O gelir gelmez parti başladı",
    },
    {
      conjunction: "sooft",
      meaning: "ne kadar sık",
      example: "Sooft ich es versuche, schaffe ich es nicht.",
      translation: "Ne kadar denersem deneyeyim, başaramıyorum.",
    },
    {
      conjunction: "ehe",
      meaning: "önce, -meden önce",
      example: "Ehe du gehst, nimm deine Jacke.",
      translation: "Gitmeden önce ceketinizi al.",
    },
    {
      conjunction: "weil",
      meaning: "çünkü",
      example: "Ich gehe ins Bett, weil ich müde bin.",
      translation: "Yorgun olduğum için yatağa gidiyorum.",
    },
    {
      conjunction: "da",
      meaning: "çünkü",
      example: "Da es regnet, nehme ich einen Regenschirm.",
      translation: "Yağmur yağdığı için şemsiye alıyorum.",
    },
    {
      conjunction: "obwohl",
      meaning: "gerçi, buna rağmen",
      example: "Obwohl es regnet, gehe ich spazieren.",
      translation: "Yağmur yağmasına rağmen yürüyüşe çıkıyorum.",
    },
    {
      conjunction: "wobei",
      meaning: "ancak,bununla birlikte",
      example: "Er ist sehr nett, wobei er manchmal etwas schüchtern ist.",
      translation: "O çok kibar, ki bazen biraz utangaçtır.",
    },
    {
      conjunction: "auch wenn",
      meaning: "gerçi, -diği halde",
      example: "Auch wenn ich müde bin, muss ich arbeiten.",
      translation: "Yorgun olsam da çalışmak zorundayım.",
    },
    {
      conjunction: "zumal",
      meaning: "özellikle, çünkü",
      example: "Er kommt nicht, zumal er keine Zeit hat.",
      translation: "Gelmiyor, çünkü vakti yok.",
    },
    {
      conjunction: "sodass",
      meaning: "böylece, öyle ki",
      example: "Es regnete stark, sodass wir das Konzert absagten.",
      translation: "Hızlı yağmur yağdı, böylece konseri iptal ettik.",
    },
    {
      conjunction: "weshalb",
      meaning: "neden, dolayı",
      example: "Ich weiß nicht, weshalb er so spät kommt.",
      translation: "Neden bu kadar geç geldiğini bilmiyorum.",
    },
    {
      conjunction: "weswegen",
      meaning: "bu yüzden, bu nedenle",
      example: "Ich habe den Zug verpasst, weswegen ich zu spät bin.",
      translation: "Treni kaçırdım, bu yüzden geç kaldım.",
    },
    {
      conjunction: "zu als dass",
      meaning: "o kadar ki",
      example: "Es ist zu kalt, als dass wir draußen bleiben könnten.",
      translation: "Dışarıda kalamayacak kadar soğuk.",
    },
    {
      conjunction: "falls",
      meaning: "eğer, -diği takdirde",
      example: "Falls es morgen schneit, gehen wir Ski fahren.",
      translation: "Yarın kar yağarsa, kayak yapmaya gideceğiz.",
    },
    {
      conjunction: "sofern",
      meaning: "şartıyla, koşuluyla",
      example: "Sofern du Zeit hast, können wir uns treffen.",
      translation: "Zamanın varsa, buluşabiliriz.",
    },
    {
      conjunction: "wohingegen",
      meaning: "oysa, oysa ki",
      example: "Er arbeitet viel, wohingegen seine Schwester faul ist.",
      translation: "O çok çalışıyor, oysa kız kardeşi tembel.",
    },
    {
      conjunction: "indem",
      meaning: "yaparak",
      example: "Er lernte viel, indem er täglich übt.",
      translation: "Çok çalışarak her gün pratik yaptı.",
    },
    {
      conjunction: "dadurch, dass",
      meaning: "… nedeniyle, -dığı için",
      example: "Dadurch, dass er früh aufsteht, hat er viel Energie.",
      translation: "Erken kalkması nedeniyle çok enerjisi var.",
    },
    {
      conjunction: "wodurch",
      meaning: "bu sayede, sayesinde",
      example: "Er hat viel geübt, wodurch er besser wurde.",
      translation: "Çok çalışarak daha iyi oldu.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    generateOptions();
  }, [currentIndex]);

  const generateOptions = () => {
    const correct = conjunctions[currentIndex].meaning;
    const otherMeanings = conjunctions
      .filter((_, i) => i !== currentIndex)
      .map((item) => item.meaning);
    const randomWrong =
      otherMeanings[Math.floor(Math.random() * otherMeanings.length)];
    const newOptions = [correct, randomWrong].sort(() => Math.random() - 0.5);
    setOptions(newOptions);
  };

  const handleAnswer = (selectedMeaning) => {
    if (selectedMeaning === conjunctions[currentIndex].meaning) {
      setShowNext(true);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % conjunctions.length);
    setShowNext(false);
  };

  if (currentIndex >= conjunctions.length) {
    return (
      <div className="container">
        Tebrikler! Tüm bağlaçları tamamladınız! 🎉
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Almanca Bağlaç Testi</h1>
      <div className="card">
        <h2>{conjunctions[currentIndex].conjunction}</h2>
        <div className="options">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              disabled={showNext}
            >
              {option}
            </button>
          ))}
        </div>
        {showNext && (
          <div className="feedback">
            <p>Doğru! 🎉</p>
            <button onClick={handleNext}>Sonraki Soru ➡️</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nebentest;
