import React, { useState } from "react";

const conjunctions = [
  {
    conjunction: "und",
    meaning: "ve",
    example: "Ich trinke Tee und esse Kuchen.",
  },
  {
    conjunction: "oder",
    meaning: "veya",
    example: "Möchtest du Kaffee oder Tee?",
  },
  {
    conjunction: "aber",
    meaning: "ama",
    example: "Es ist kalt, aber die Sonne scheint.",
  },
  {
    conjunction: "denn",
    meaning: "çünkü",
    example: "Ich gehe nach Hause, denn ich bin müde.",
  },
  {
    conjunction: "sondern",
    meaning: "aksine",
    example: "Nicht das Buch, sondern der Film war interessant.",
  },
  {
    conjunction: "dass",
    meaning: "-diğini",
    example: "Ich weiß, dass du müde bist.",
  },
  {
    conjunction: "weil",
    meaning: "çünkü",
    example: "Ich bleibe zu Hause, weil ich krank bin.",
  },
  {
    conjunction: "ob",
    meaning: "-ip -mediği",
    example: "Ich weiß nicht, ob er kommt.",
  },
  {
    conjunction: "wenn",
    meaning: "eğer / -dığında",
    example: "Wenn es regnet, bleibe ich zu Hause.",
  },
  {
    conjunction: "als",
    meaning: "-diğinde (geçmiş)",
    example: "Als ich ein Kind war, spielte ich viel.",
  },
  {
    conjunction: "nachdem",
    meaning: "-dikten sonra",
    example: "Nachdem ich gegessen hatte, ging ich spazieren.",
  },
  {
    conjunction: "bevor / ehe",
    meaning: "-meden önce",
    example: "Ich rufe dich an, bevor ich gehe.",
  },
  {
    conjunction: "bis",
    meaning: "-e kadar",
    example: "Warte, bis ich zurück bin.",
  },
  {
    conjunction: "während",
    meaning: "-iken",
    example: "Während ich koche, hört er Musik.",
  },
  {
    conjunction: "obwohl",
    meaning: "-e rağmen",
    example: "Obwohl es regnet, gehen wir spazieren.",
  },
  {
    conjunction: "falls",
    meaning: "eğer",
    example: "Falls du Zeit hast, komm vorbei.",
  },
  {
    conjunction: "indem",
    meaning: "-erek / -arak",
    example: "Er spart Geld, indem er nicht raucht.",
  },
  {
    conjunction: "damit",
    meaning: "-sın diye",
    example: "Ich lerne viel, damit ich bestehe.",
  },
  {
    conjunction: "sodass / so dass",
    meaning: "bu yüzden / böylece",
    example: "Er ist krank, sodass er nicht kommt.",
  },
  {
    conjunction: "solange",
    meaning: "-dığı sürece",
    example: "Du bleibst hier, solange ich weg bin.",
  },
  {
    conjunction: "sobald",
    meaning: "-er -mez",
    example: "Sobald ich ankomme, rufe ich dich an.",
  },
  {
    conjunction: "seit / seitdem",
    meaning: "-den beri",
    example: "Seitdem ich hier wohne, bin ich glücklich.",
  },
  {
    conjunction: "zumal",
    meaning: "özellikle çünkü",
    example: "Ich bleibe zu Hause, zumal ich krank bin.",
  },
  {
    conjunction: "trotzdem",
    meaning: "yine de",
    example: "Es regnet, trotzdem gehen wir raus.",
  },
  {
    conjunction: "deshalb / deswegen / darum / daher",
    meaning: "bu yüzden",
    example: "Ich bin müde, deshalb gehe ich ins Bett.",
  },
  {
    conjunction: "dann",
    meaning: "sonra",
    example: "Ich esse, dann mache ich Hausaufgaben.",
  },
  {
    conjunction: "außerdem",
    meaning: "ayrıca",
    example: "Er ist nett, außerdem hilfsbereit.",
  },
  {
    conjunction: "jedoch",
    meaning: "ancak",
    example: "Ich wollte kommen, jedoch war ich krank.",
  },
  {
    conjunction: "dennoch",
    meaning: "buna rağmen",
    example: "Sie ist klein, dennoch stark.",
  },
  {
    conjunction: "sonst",
    meaning: "yoksa",
    example: "Beeil dich, sonst kommst du zu spät.",
  },
  {
    conjunction: "danach",
    meaning: "ondan sonra",
    example: "Ich dusche, danach frühstücke ich.",
  },
  {
    conjunction: "zuerst / zunächst / zuletzt",
    meaning: "önce / başlangıçta / en son",
    example: "Zuerst frühstücken wir.",
  },
  {
    conjunction: "nicht nur ... sondern auch ...",
    meaning: "sadece ... değil, aynı zamanda ...",
    example: "Nicht nur du, sondern auch ich bin müde.",
  },
  {
    conjunction: "sowohl ... als auch ...",
    meaning: "hem ... hem de",
    example: "Sowohl er als auch sie kommen.",
  },
  {
    conjunction: "entweder ... oder ...",
    meaning: "ya ... ya da",
    example: "Entweder du gehst oder ich gehe.",
  },
  {
    conjunction: "weder ... noch ...",
    meaning: "ne ... ne de",
    example: "Weder er noch ich habe Zeit.",
  },
  {
    conjunction: "zwar ... aber ...",
    meaning: "gerçi ... ama",
    example: "Zwar ist es teuer, aber gut.",
  },
  {
    conjunction: "so ... dass ...",
    meaning: "öyle ... ki ...",
    example: "Er spricht so laut, dass ich ihn höre.",
  },
  {
    conjunction: "solch ... dass ...",
    meaning: "öylesine ... ki ...",
    example: "Es war solch ein Tag, dass wir nie vergessen.",
  },
  {
    conjunction: "anstatt dass / anstatt zu",
    meaning: "-mek yerine",
    example: "Anstatt zu lernen, spielt er.",
  },
  {
    conjunction: "ohne dass / ohne zu",
    meaning: "-meksizin",
    example: "Er geht, ohne sich zu verabschieden.",
  },
  {
    conjunction: "als ob / als wenn / wie wenn",
    meaning: "sanki ... gibi",
    example: "Er tut, als ob er krank wäre.",
  },
  {
    conjunction: "je ... desto / umso",
    meaning: "ne kadar ... o kadar",
    example: "Je mehr du lernst, desto besser wirst du.",
  },
  {
    conjunction: "wiewohl",
    meaning: "-e rağmen (resmi)",
    example: "Wiewohl er müde war, arbeitete er weiter.",
  },
  {
    conjunction: "obschon / obgleich",
    meaning: "-e rağmen",
    example: "Obschon es spät war, gingen sie raus.",
  },
  {
    conjunction: "sofern",
    meaning: "eğer ki",
    example: "Sofern du willst, helfe ich dir.",
  },
  {
    conjunction: "wenngleich",
    meaning: "her ne kadar ... olsa da",
    example: "Wenngleich es schwer ist, probiere ich es.",
  },
  {
    conjunction: "unter der Voraussetzung, dass",
    meaning: "... koşuluyla",
    example: "Ich komme, unter der Voraussetzung, dass du auch kommst.",
  },
  {
    conjunction: "vorausgesetzt, dass",
    meaning: "... şartıyla",
    example: "Ich helfe dir, vorausgesetzt, dass du ehrlich bist.",
  },
  {
    conjunction: "angenommen, dass",
    meaning: "diyelim ki",
    example: "Angenommen, dass er krank ist – was dann?",
  },
  {
    conjunction: "in Anbetracht dessen, dass",
    meaning: "... dikkate alındığında",
    example: "In Anbetracht dessen, dass es regnet, bleiben wir drinnen.",
  },
  {
    conjunction: "ungeachtet",
    meaning: "-e rağmen, bakılmaksızın",
    example: "Ungeachtet des Wetters gingen wir spazieren.",
  },
  {
    conjunction: "in Folge",
    meaning: "sonucunda, neticesinde",
    example: "In Folge des Unfalls kam es zu Stau.",
  },
  {
    conjunction: "wohin",
    meaning: "nereye",
    example: "Wohin gehst du?",
  },
  {
    conjunction: "gegen",
    meaning: "-e karşı",
    example: "Das Medikament hilft gegen Kopfschmerzen.",
  },
  {
    conjunction: "dagegen",
    meaning: "buna karşı, öte yandan",
    example: "Ich bin müde, dagegen bist du sehr aktiv.",
  },
  {
    conjunction: "denn",
    meaning: "çünkü",
    example: "Ich bleibe zu Hause, denn ich bin krank.",
  },
  {
    conjunction: "gegenüber",
    meaning: "-e karşı, karşısında",
    example: "Dem Haus gegenüber ist ein Park.",
  },
  {
    conjunction: "also",
    meaning: "yani, öyleyse",
    example: "Es regnet, also bleiben wir drinnen.",
  },
  {
    conjunction: "folglich",
    meaning: "sonuç olarak",
    example: "Er war krank, folglich konnte er nicht kommen.",
  },
  {
    conjunction: "infolgedessen",
    meaning: "bu sebeple, bunun sonucunda",
    example:
      "Es gab einen Stromausfall, infolgedessen fiel der Unterricht aus.",
  },
  {
    conjunction: "aus diesem Grund",
    meaning: "bu sebeple",
    example: "Ich habe viel gearbeitet, aus diesem Grund bin ich müde.",
  },
  {
    conjunction: "somit",
    meaning: "böylece, sonuç olarak",
    example: "Er hat bestanden, somit kann er studieren.",
  },
  {
    conjunction: "demnach",
    meaning: "dolayısıyla, buna göre",
    example: "Die Prüfung war schwer, demnach sind viele durchgefallen.",
  },
  {
    conjunction: "allerdings",
    meaning: "fakat, gerçi, doğrusu",
    example: "Er ist nett, allerdings etwas schüchtern.",
  },
  {
    conjunction: "nämlich",
    meaning: "çünkü, yani, şöyle ki",
    example: "Ich gehe nicht mit, ich bin nämlich müde.",
  },
  {
    conjunction: "andernfalls",
    meaning: "aksi takdirde",
    example: "Beeil dich, andernfalls verpassen wir den Bus!",
  },
  {
    conjunction: "vorausgesetzt (dass)",
    meaning: "şartıyla, eğer … ise",
    example: "Du kannst mitkommen, vorausgesetzt, dass du leise bist.",
  },
  {
    conjunction: "es sei denn",
    meaning: "olmadıkça, ancak … olmazsa",
    example: "Ich gehe spazieren, es sei denn, es regnet.",
  },
  {
    conjunction: "zwecks",
    meaning: "-mek amacıyla, için",
    example: "Zwecks Anmeldung wenden Sie sich bitte an das Büro.",
  },
  {
    conjunction: "um … zu",
    meaning: "-mek için",
    example: "Ich lerne Deutsch, um in Deutschland zu arbeiten.",
  },
  {
    conjunction: "dazu",
    meaning: "buna, bu konuda",
    example: "Ich habe keine Meinung dazu.",
  },
  {
    conjunction: "mittels",
    meaning: "aracılığıyla, vasıtasıyla",
    example: "Die Daten wurden mittels Software analysiert.",
  },
  {
    conjunction: "mithilfe (von)",
    meaning: "yardımıyla",
    example: "Mithilfe seiner Freunde bestand er die Prüfung.",
  },
  {
    conjunction: "dadurch",
    meaning: "bu sayede, bu şekilde",
    example: "Er trainierte täglich, dadurch wurde er stärker.",
  },
  {
    conjunction: "wodurch",
    meaning: "neyle, hangi yolla",
    example: "Wodurch ist das passiert?",
  },
  {
    conjunction: "ohne dass",
    meaning: "-meden/-madan",
    example: "Er ging, ohne dass er sich verabschiedete.",
  },
  {
    conjunction: "ohne zu",
    meaning: "-meden/-madan (fiil mastar)",
    example: "Er ging, ohne zu sprechen.",
  },
  {
    conjunction: "auf diese Weise",
    meaning: "bu şekilde",
    example: "Auf diese Weise sparen wir Zeit.",
  },
  {
    conjunction: "stattdessen",
    meaning: "onun yerine",
    example: "Ich trinke keinen Kaffee, stattdessen Tee.",
  },
  {
    conjunction: "gemäß",
    meaning: "-e göre",
    example: "Gemäß dem Gesetz ist das verboten.",
  },
  {
    conjunction: "entsprechend",
    meaning: "-e uygun olarak, uyarınca",
    example: "Die Schüler wurden entsprechend ihrer Leistungen bewertet.",
  },
  {
    conjunction: "indes",
    meaning: "bu sırada, halbuki, oysa ki",
    example: "Er arbeitete fleißig, indes seine Freunde feierten.",
  },
  {
    conjunction: "inwiefern",
    meaning: "ne ölçüde, hangi bakımdan",
    example: "Inwiefern das Projekt erfolgreich war, bleibt unklar.",
  },
  {
    conjunction: "sofern",
    meaning: "şartıyla, eğer … ise",
    example: "Sofern das Wetter gut bleibt, grillen wir im Garten.",
  },
  {
    conjunction: "inwieweit",
    meaning: "ne dereceye kadar, ne ölçüde",
    example: "Inwieweit er die Wahrheit sagte, weiß niemand.",
  },
  {
    conjunction: "wenngleich",
    meaning: "olmasına rağmen",
    example: "Wenngleich er krank war, kam er zur Arbeit.",
  },
];

console.log(conjunctions);

const NebenSätz = () => {
  const [selectedConjunction, setSelectedConjunction] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredConjunctions = conjunctions.filter(
    (conj) =>
      conj.conjunction.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conj.meaning.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNext = () => {
    if (currentIndex < filteredConjunctions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
            Deutsch Connect
          </h1>
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="🔍 Bağlaç veya anlam ara..."
              className="w-full p-4 rounded-2xl border-0 ring-2 ring-purple-200 focus:ring-4 focus:ring-purple-500 shadow-lg placeholder-gray-400 transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </header>

        {filteredConjunctions.length > 0 ? (
          <div className="space-y-4">
            <div className="group relative overflow-hidden">
              <button
                onClick={() =>
                  setSelectedConjunction(
                    selectedConjunction === filteredConjunctions[currentIndex]
                      ? null
                      : filteredConjunctions[currentIndex]
                  )
                }
                className={`w-full flex items-center justify-between p-6 rounded-xl backdrop-blur-lg transition-all duration-300 ${
                  selectedConjunction === filteredConjunctions[currentIndex]
                    ? "bg-white ring-4 ring-purple-500 shadow-xl"
                    : "bg-white/70 hover:bg-white ring-2 ring-purple-100 hover:ring-purple-300 shadow-md hover:shadow-lg"
                }`}
              >
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">
                    {filteredConjunctions[currentIndex].conjunction}
                  </h3>
                  <p className="text-sm text-purple-600 font-medium">
                    {selectedConjunction === filteredConjunctions[currentIndex]
                      ? filteredConjunctions[currentIndex].meaning
                      : "Türkçe anlamı gizli..."}
                  </p>
                </div>
                <span
                  className={`transform transition-transform duration-300 ${
                    selectedConjunction === filteredConjunctions[currentIndex]
                      ? "rotate-180"
                      : ""
                  }`}
                >
                  <svg
                    className="w-6 h-6 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>

              {selectedConjunction === filteredConjunctions[currentIndex] && (
                <div className="px-6 pt-4 pb-6 bg-purple-50/50 rounded-b-xl animate-fadeIn">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="shrink-0 mt-1 text-purple-500">✏️</span>
                      <p className="text-gray-700 leading-relaxed">
                        <span className="font-medium text-purple-600">
                          Örnek:
                        </span>
                        <br />"{filteredConjunctions[currentIndex].example}"
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-purple-400">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Bağlaç Tipi: Alt Bağlayıcı</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="bg-purple-500 text-white py-2 px-4 rounded-xl disabled:opacity-50"
              >
                &#8592; Önceki
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === filteredConjunctions.length - 1}
                className="bg-purple-500 text-white py-2 px-4 rounded-xl disabled:opacity-50"
              >
                Sonraki &#8594;
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="mb-4 text-6xl">😕</div>
            <p className="text-xl text-gray-500">
              Aradığınız bağlaç bulunamadı
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NebenSätz;
