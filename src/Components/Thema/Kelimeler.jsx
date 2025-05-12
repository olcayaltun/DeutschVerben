import React, { useState, useEffect } from "react";
import wordsData from "../../utils/Thema/kelimler.json";

const Kelimeler = () => {
  // State'ler
  const [currentIndex, setCurrentIndex] = useState(() => {
    return parseInt(localStorage.getItem("currentWordIndex")) || 0;
  });
  const [showDetails, setShowDetails] = useState(false);
  const [showStory, setShowStory] = useState(false); // New state for toggling story

  // Mevcut kelimeyi al
  const word = wordsData[currentIndex];

  // İleri/geri gezinme
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % wordsData.length);
    setShowDetails(false);
    setShowStory(false); // Reset story when navigating
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + wordsData.length) % wordsData.length);
    setShowDetails(false);
    setShowStory(false); // Reset story when navigating
  };

  // localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("currentWordIndex", currentIndex);
  }, [currentIndex]);

  // Dictionary of German words and their Turkish translations (hardcoded as per your input)
  const translations = {
    unberührt: "etkilenmemiş",
    überfordern: "bunaltmak",
    einführen: "tanıtmak",
    Ausbildung: "mesleki eğitim",
    einsetzen: "kullanmak",
    ausgeglichen: "dengeli",
    vertraut: "aşina olmak",
    vermitteln: "öğretmek",
    ausgewogen: "dengeli",
    Gespür: "sezgi",
    Engagement: "bağlılık",
    Ansatz: "yaklaşım",
    fördern: "teşvik",
    bewältigen: "üstesinden gelmek",
    Missbrauch: "istismar",
    verbreitet: "yaygın",
    langfristig: "uzun vadeli",
    Ebene: "düzey",
    Meinungsäußerung: "fikir beyanı",
    legitim: "meşru",
    Rückhalt: "destek",
    schüren: "körüklemek",
    gestalten: "şekillendirmek",
    gelingen: "başarmak",
    verringern: "azaltmak",
    verhindern: "engellemek",
    Machtmissbrauch: "iktidar istismarı",
    mitbestimmen: "söz sahibi olmak",
    begegnen: "karşılaşmak",
    erwerben: "kazanmak",
    verschärfen: "sıkılaştırmak",
    Verhalten: "davranış",
    Versorgung: "bakım",
    unersetzlich: "yeri doldurulamaz",
    Auftreten: "ortaya çıkma/davranış tarzı",
    Fehlerhäufung: "hata birikimi",
    entfernen: "ortadan kaldırmak",
    Behandlung: "muamele, tedavi",
    wirken: "etki yapmak",
    vermehren: "çoğaltmak",
    setzen: "koymak",
    hindern: "engellemek",
    Heiligung: "kutsallaştırma",
    erfordern: "gerektirmek",
    fordern: "talep etmek",
    erfüllen: "yerine getirmek",
  };

  // Function to render text with tooltips
  const renderTextWithTooltips = (text) => {
    return text.split(/(?<=\s)/).map((segment, segIndex) => {
      const cleanSegment = segment.replace(/[.,!?]/g, "").trim();
      if (translations[cleanSegment]) {
        return (
          <span key={segIndex} className="relative inline-block group">
            <span className="cursor-pointer underline text-blue-600">
              {segment}
            </span>
            <span className="absolute z-10 invisible opacity-0 bg-gray-800 text-white text-sm rounded-md py-1 px-2 transition-opacity duration-300 group-hover:visible group-hover:opacity-100 bottom-full left-1/2 transform -translate-x-1/2 mb-2">
              {cleanSegment}: {translations[cleanSegment]}
            </span>
          </span>
        );
      }
      return segment;
    });
  };

  // Full story paragraphs (complete as provided)
  const paragraphs = [
    "Eine neue Zukunft – Zwischen Verantwortung und Hoffnung",
    `In einer kleinen Stadt, die zunächst unberührt von der Globalisierung schien, begannen sich die Dinge langsam zu verändern. Die Menschen fühlten sich zunächst überfordert, als neue Technologien eingeführt und digitale Lernmethoden in der Ausbildung eingesetzt wurden.`,
    `Besonders die ältere Generation hatte Schwierigkeiten, sich ausgeglichen und vertraut mit der neuen Welt zu fühlen. Doch die Lehrer bemühten sich, das nötige Wissen zu vermitteln und ein ausgewogenes Lernklima zu schaffen.`,
    `Ein junger Lehrer namens Elias hatte ein gutes Gespür für die Sorgen seiner Schüler. Mit viel Engagement schuf er neue Ansätze zur Förderung von Talenten. Die Förderung junger Menschen war ihm ein persönliches Anliegen.`,
    `Trotz aller Bemühungen gab es viele Hürden zu bewältigen. Einige Schüler kamen aus schwierigen Familienverhältnissen, wo Missbrauch und emotionale Vernachlässigung verbreitet waren. Elias wusste, dass Bildung der Schlüssel war, um diesen Kreislauf zu durchbrechen.`,
    `Um die Schüler langfristig zu unterstützen, setzte er sich auf politischer Ebene für mehr Fördergelder ein. Seine Meinungsäußerung bei Gemeinderatssitzungen wurde als legitim angesehen und fand großen Rückhalt in der Gemeinde.`,
    `Eines Tages kam es zu einer hitzigen Diskussion über digitale Bildung. Elias warnte davor, Gefühle wie Neid und Misstrauen zu schüren, und forderte alle auf, gemeinsam Lösungen zu gestalten. „Nur wenn wir gemeinsam handeln, wird es uns gelingen, soziale Ungleichheiten zu verringern“, sagte er.`,
    `Trotzdem versuchten einige Politiker, Reformen zu verhindern, da sie Macht verlieren könnten. Dieses Verhalten grenzte an Machtmissbrauch, was Elias öffentlich anprangerte. Er glaubte fest daran, dass Bürger auch das Recht haben, bei Entscheidungen mitzubestimmen.`,
    `Ein besonderer Moment war die Begegnung mit einem ehemaligen Schüler, der nun selbst Lehrer war. „Sie haben mir geholfen, Selbstvertrauen zu erwerben“, sagte er. Elias war gerührt.`,
    `Am Ende wurde Elias’ Projekt nicht nur politisch gefördert, sondern auch als Vorbild für andere Städte genommen. Inzwischen hatte sich das Bild der Schule verändert: Die Regeln wurden verschärft, aber fair angewendet. Das soziale Verhalten der Schüler hatte sich deutlich verbessert.`,
    `Die Schule wurde zu einem Ort der Versorgung, der Chancen und der Hoffnung. „Bildung ist unersetzlich“, sagte Elias in seiner Abschlussrede. Er hatte es geschafft, das Auftreten einer ganzen Generation zu prägen.`,
    `Die Stadt hatte viele Fehler gemacht. Doch durch Elias’ Engagement konnten Fehlerhäufungen entfernt und die Qualität der Behandlung in Schulen verbessert werden.`,
    `Heute wirkt Elias nicht mehr als Lehrer, sondern als Berater. Seine Ideen vermehren sich wie gute Samen. Er setzt sich weiterhin dafür ein, dass kein Kind durch Armut gehindert wird, seine Träume zu verwirklichen. Seine Arbeit ist für viele eine stille Heiligung des Lehrerberufs geworden.`,
    `Trotz aller Schwierigkeiten gelingt es Jana schließlich, ein Gleichgewicht zwischen ihren Pflichten und ihrer inneren Ruhe zu finden. Sie fühlt sich in ihrer neuen Umgebung vertraut, da sie durch Gespräche mit Einheimischen tiefere Einblicke erhält.`,
    `In einem der Workshops wird sie eingesetzt als Moderatorin, what zunächst eine große Herausforderung darstellt. Die Aufgabe erfordert Geduld, sprachliche Präzision und interkulturelles Verständnis.`,
    `Ein besonderer Moment entsteht, als sie erkennt, wie sehr ihre Ausbildung in Pädagogik ihr hilft, auch in schwierigen Gesprächen ruhig und strukturiert zu bleiben.`,
    `Ihre Bemühungen bleiben nicht unbemerkt: Die Gemeinde fordert sie auf, regelmäßige Bildungsangebote zu leiten – eine Anerkennung, die sie zutiefst bewegt.`,
    `Am Ende eines intensiven Tages wandert Jana durch den nahegelegenden Wald, der noch völlig unberührt erscheint. In dieser Stille fühlt sie sich ganz mit der Natur verbunden, während sie über das Erfüllen ihrer Aufgaben und die Bedeutung innerer Ausgeglichenheit nachdenkt.`,
  ];

  // Process paragraphs for story display
  const processedParagraphs = paragraphs.map((paragraph, index) => {
    return paragraph.split(/(?<=\s)/).map((segment, segIndex) => {
      const cleanSegment = segment.replace(/[.,!?]/g, "").trim();
      if (translations[cleanSegment]) {
        return (
          <span
            key={`${index}-${segIndex}`}
            className="relative inline-block group"
          >
            <span className="cursor-pointer underline text-blue-600">
              {segment}
            </span>
            <span className="absolute z-10 invisible opacity-0 bg-gray-800 text-white text-sm rounded-md py-1 px-2 transition-opacity duration-300 group-hover:visible group-hover:opacity-100 bottom-full left-1/2 transform -translate-x-1/2 mb-2">
              {cleanSegment}: {translations[cleanSegment]}
            </span>
          </span>
        );
      }
      return segment;
    });
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        Almanca Kelimeler
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {word.kelime}
        </h2>
        <div className="flex space-x-4 mb-4">
          <button
            onClick={() => {
              setShowDetails(!showDetails);
              setShowStory(false); // Hide story when showing details
            }}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            {showDetails ? "Anlamı Gizle" : "Açıklama"}
          </button>
          <button
            onClick={() => {
              setShowStory(!showStory);
              setShowDetails(false); // Hide details when showing story
            }}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
          >
            {showStory ? "Metni Gizle" : "Metin"}
          </button>
        </div>

        {showDetails && !showStory && (
          <div className="mt-4">
            <p className="text-gray-600">
              <span className="font-bold">Anlam:</span>{" "}
              {Array.isArray(word.anlam) ? word.anlam.join(", ") : word.anlam}
            </p>
          </div>
        )}

        {showStory && !showDetails && (
          <div className="mt-4 max-h-96 overflow-y-auto p-4 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Hikaye</h3>
            {processedParagraphs.map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-800 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
      <div className="flex space-x-4 mt-6">
        <button
          onClick={handlePrevious}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          ← Geri
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          İleri →
        </button>
      </div>
    </div>
  );
};

export default Kelimeler;
