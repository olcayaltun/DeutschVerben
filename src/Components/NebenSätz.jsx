import React, { useState } from "react";
import Nebentest from "./Nebentest";

export const conjunctions = [
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
function NebenSatz({ onReturn }) {
  const [index, setIndex] = useState(0);

  const nextConjunction = () => {
    setIndex((prevIndex) => (prevIndex + 1) % conjunctions.length);
  };

  const previousConjunction = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + conjunctions.length) % conjunctions.length
    );
  };

  const currentConjunction = conjunctions[index];

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ color: "#2c3e50", marginBottom: "30px" }}>
        Almanca Bağlaçlar
      </h1>
      <div
        style={{
          backgroundColor: "#f8f9fa",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ color: "#2980b9" }}>{currentConjunction.conjunction}</h2>
        <p>
          <strong style={{ color: "#27ae60" }}>Anlamı:</strong>{" "}
          {currentConjunction.meaning}
        </p>
        <p>
          <strong style={{ color: "#27ae60" }}>Örnek:</strong>{" "}
          {currentConjunction.example}
        </p>
        <p>
          <strong style={{ color: "#27ae60" }}>Türkçe Çeviri:</strong>{" "}
          {currentConjunction.translation}
        </p>
      </div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <button
          onClick={previousConjunction}
          style={{
            padding: "10px 30px",
            backgroundColor: "#f39c12",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Önceki Bağlaç
        </button>
        <button
          onClick={nextConjunction}
          style={{
            padding: "10px 30px",
            backgroundColor: "#3498db",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Sonraki Bağlaç
        </button>
        <button
          onClick={onReturn}
          style={{
            padding: "10px 30px",
            backgroundColor: "#e74c3c",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Geri Dön
        </button>
      </div>
      <Nebentest />
    </div>
  );
}

export default NebenSatz;
