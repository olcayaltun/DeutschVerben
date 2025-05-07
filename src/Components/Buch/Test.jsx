import React, { useState } from "react";

const sätze = [
  {
    verben: "achten",
    präposition: "auf",
    reflexiv: null,
    satz: "Bitte achte auf den neuen Mantel.",
  },
  {
    verben: "abhängen",
    präposition: "von",
    reflexiv: null,
    satz: "Ob wir fahren, hängt vom Wetter ab.",
  },
  {
    verben: "anfangen",
    präposition: "mit",
    reflexiv: null,
    satz: "Ich fange mit der Übung an.",
  },
  {
    verben: "ankommen",
    präposition: "auf",
    reflexiv: null,
    satz: "Es kommt auf den richtigen Preis an.",
  },
  {
    verben: "antworten",
    präposition: "auf",
    reflexiv: null,
    satz: "Bitte antworten Sie heute auf den Brief.",
  },
  {
    verben: "sich ärgern",
    präposition: "über",
    reflexiv: "sich",
    satz: "Wir ärgern uns über den Regen.",
  },
  {
    verben: "aufhören",
    präposition: "mit",
    reflexiv: null,
    satz: "Er hört um 17.00 Uhr mit der Arbeit auf.",
  },
  {
    verben: "aufpassen",
    präposition: "auf",
    reflexiv: null,
    satz: "Ein Babysitter passt auf kleine Kinder auf.",
  },
  {
    verben: "sich aufregen",
    präposition: "über",
    reflexiv: "sich",
    satz: "Deutsche regen sich über Unpünktlichkeit auf.",
  },
  {
    verben: "ausgeben",
    präposition: "für",
    reflexiv: null,
    satz: "Manche geben viel Geld für Schuhe aus.",
  },
  {
    verben: "sich bedanken",
    präposition: "bei",
    reflexiv: "sich",
    satz: "Ich bedanke mich herzlich bei dir.",
  },
  {
    verben: "sich bedanken",
    präposition: "für",
    reflexiv: "sich",
    satz: "Martin bedankt sich für das Geschenk.",
  },
  {
    verben: "beginnen",
    präposition: "mit",
    reflexiv: null,
    satz: "Wir beginnen pünktlich mit dem Deutschkurs.",
  },
  {
    verben: "sich bemühen",
    präposition: "um",
    reflexiv: "sich",
    satz: "Karla bemüht sich um eine Arbeit.",
  },
  {
    verben: "berichten",
    präposition: "über",
    reflexiv: null,
    satz: "Der Reporter berichtet über die Wahlen.",
  },
  {
    verben: "sich beschäftigen",
    präposition: "mit",
    reflexiv: "sich",
    satz: "Ich beschäftige mich gern mit Pflanzen.",
  },
  {
    verben: "sich beschweren",
    präposition: "bei",
    reflexiv: "sich",
    satz: "Der Gast beschwert sich beim Kellner.",
  },
  {
    verben: "bestehen",
    präposition: "aus",
    reflexiv: null,
    satz: "Eheringe bestehen aus Gold.",
  },
  {
    verben: "bestehen",
    präposition: "auf",
    reflexiv: null,
    satz: "Ich bestehe auf sofortiger Bezahlung des Autos.",
  },
  {
    verben: "sich beteiligen",
    präposition: "an",
    reflexiv: "sich",
    satz: "Viele Studenten beteiligen sich an den Streiks.",
  },
  {
    verben: "sich bewerben",
    präposition: "bei",
    reflexiv: "sich",
    satz: "Er bewirbt sich bei einer Bäckerei.",
  },
  {
    verben: "sich bewerben",
    präposition: "um",
    reflexiv: "sich",
    satz: "Sie bewirbt sich um eine Stelle als Sekretärin.",
  },
  {
    verben: "sich beziehen",
    präposition: "auf",
    reflexiv: "sich",
    satz: "Meine Frage bezieht sich auf Ihr Angebot.",
  },
  {
    verben: "bitten",
    präposition: "um",
    reflexiv: null,
    satz: "Der Redner bittet um Aufmerksamkeit.",
  },
  {
    verben: "danken",
    präposition: "für",
    reflexiv: null,
    satz: "Sam dankt für Ritas Hilfe.",
  },
  {
    verben: "denken",
    präposition: "an",
    reflexiv: null,
    satz: "Maria denkt oft an den Urlaub.",
  },
  {
    verben: "diskutieren",
    präposition: "über",
    reflexiv: null,
    satz: "Das Kabinett diskutiert über eine neue Steuer.",
  },
  {
    verben: "einladen",
    präposition: "zu",
    reflexiv: null,
    satz: "Ich lade dich zu meinem Geburtstag ein.",
  },
  {
    verben: "sich entscheiden",
    präposition: "für",
    reflexiv: "sich",
    satz: "Kinder entscheiden sich gern für Schokolade.",
  },
  {
    verben: "sich entschließen",
    präposition: "zu",
    reflexiv: "sich",
    satz: "Karl entschließt sich zu einem Studium.",
  },
  {
    verben: "sich entschuldigen",
    präposition: "bei",
    reflexiv: "sich",
    satz: "Tom entschuldigt sich bei ihrem Mann.",
  },
  {
    verben: "sich entschuldigen",
    präposition: "für",
    reflexiv: "sich",
    satz: "Ich entschuldige mich für das Verhalten meiner Katze.",
  },
  {
    verben: "sich erholen",
    präposition: "von",
    reflexiv: "sich",
    satz: "Von dem Schock muss ich mich erst erholen.",
  },
  {
    verben: "sich erinnern",
    präposition: "an",
    reflexiv: "sich",
    satz: "Wir erinnern uns gern an unser erstes Ehejahr.",
  },
  {
    verben: "erkennen",
    präposition: "an",
    reflexiv: null,
    satz: "Man erkennt Pinocchio an seiner langen Nase.",
  },
  {
    verben: "sich erkundigen",
    präposition: "nach",
    reflexiv: "sich",
    satz: "Oma erkundigt sich oft nach meinen Plänen.",
  },
  {
    verben: "erschrecken",
    präposition: "über",
    reflexiv: null,
    satz: "Der Koch erschrickt über eine Maus.",
  },
  {
    verben: "erzählen",
    präposition: "über",
    reflexiv: null,
    satz: "Ein Ostberliner erzählt über sein Leben in der ehemaligen DDR.",
  },
  {
    verben: "erzählen",
    präposition: "von",
    reflexiv: null,
    satz: "Der Bischoff erzählt von der Reise nach Rom.",
  },
  {
    verben: "fragen",
    präposition: "nach",
    reflexiv: null,
    satz: "Die Journalistin fragt nach den Konsequenzen der Gesetzesänderung.",
  },
  {
    verben: "sich freuen",
    präposition: "auf",
    reflexiv: "sich",
    satz: "Kinder freuen sich auf die Ferien.",
  },
  {
    verben: "sich freuen",
    präposition: "über",
    reflexiv: "sich",
    satz: "Jeder freut sich über eine Gehaltserhöhung.",
  },
  {
    verben: "gehen",
    präposition: "um",
    reflexiv: null,
    satz: "Immer geht es um Geld.",
  },
  {
    verben: "gehören",
    präposition: "zu",
    reflexiv: null,
    satz: "Das Elsass gehört zu Frankreich.",
  },
  {
    verben: "sich gewöhnen",
    präposition: "an",
    reflexiv: "sich",
    satz: "Ich kann mich nicht an die Zeitumstellung gewöhnen.",
  },
  {
    verben: "glauben",
    präposition: "an",
    reflexiv: null,
    satz: "Teenager glauben an die große Liebe.",
  },
  {
    verben: "gratulieren",
    präposition: "zu",
    reflexiv: null,
    satz: "Wir gratulieren dir zum 18. Geburtstag.",
  },
  {
    verben: "halten",
    präposition: "für",
    reflexiv: null,
    satz: "Ich halte das für keine gute Idee.",
  },
  {
    verben: "etwas halten",
    präposition: "von",
    reflexiv: null,
    satz: "Kinder halten nicht viel von Ordnung.",
  },
  {
    verben: "handeln",
    präposition: "von",
    reflexiv: null,
    satz: "Märchen handeln von Gut und Böse.",
  },
  {
    verben: "helfen",
    präposition: "bei",
    reflexiv: null,
    satz: "Kann ich dir beim Tischdecken helfen?",
  },
  {
    verben: "hindern",
    präposition: "an",
    reflexiv: null,
    satz: "Ein langsamer Fahrer hindert Greta am Überholen.",
  },
  {
    verben: "hoffen",
    präposition: "auf",
    reflexiv: null,
    satz: "Im März hoffen alle auf warme Frühlingstage.",
  },
  {
    verben: "hören",
    präposition: "von",
    reflexiv: null,
    satz: "Ich habe seit Sonntag nichts von Piet gehört.",
  },
  {
    verben: "sich informieren",
    präposition: "über",
    reflexiv: "sich",
    satz: "Auf der Messe kann man sich über die neue Technologie informieren.",
  },
  {
    verben: "sich interessieren",
    präposition: "für",
    reflexiv: "sich",
    satz: "Monika interessiert sich für ein Smartphone.",
  },
  {
    verben: "klagen",
    präposition: "über",
    reflexiv: null,
    satz: "Frauen klagen häufig über Kopfschmerzen.",
  },
  {
    verben: "kämpfen",
    präposition: "für",
    reflexiv: null,
    satz: "Die Gewerkschaft kämpft für höhere Löhne.",
  },
  {
    verben: "kommen",
    präposition: "auf",
    reflexiv: null,
    satz: "Ich komme nicht auf die Lösung.",
  },
  {
    verben: "sich konzentrieren",
    präposition: "auf",
    reflexiv: "sich",
    satz: "Karl konzentriert sich auf seine Hausaufgaben.",
  },
  {
    verben: "sich kümmern",
    präposition: "um",
    reflexiv: "sich",
    satz: "Im Pflegeheim kümmert man sich um alte Leute, die krank sind.",
  },
  {
    verben: "lachen",
    präposition: "über",
    reflexiv: null,
    satz: "Über einen guten Witz muss man laut lachen.",
  },
  {
    verben: "leiden",
    präposition: "an",
    reflexiv: null,
    satz: "Jeder fünfte Manager leidet an Burn-out.",
  },
  {
    verben: "leiden",
    präposition: "unter",
    reflexiv: null,
    satz: "Kaffeetrinker leiden unter Schlafproblemen.",
  },
  {
    verben: "nachdenken",
    präposition: "über",
    reflexiv: null,
    satz: "Beamte müssen nicht über ihre Rente nachdenken.",
  },
  {
    verben: "protestieren",
    präposition: "gegen",
    reflexiv: null,
    satz: "Viele Menschen protestieren gegen Atomkraft.",
  },
  {
    verben: "rechnen",
    präposition: "mit",
    reflexiv: null,
    satz: "Im Januar muss man mit Schnee rechnen.",
  },
  {
    verben: "reden",
    präposition: "über",
    reflexiv: null,
    satz: "Deine Mutter redet gern über Krankheiten.",
  },
  {
    verben: "reden",
    präposition: "von",
    reflexiv: null,
    satz: "Großvater redet von den guten alten Zeiten.",
  },
  {
    verben: "riechen",
    präposition: "nach",
    reflexiv: null,
    satz: "Hier riecht es nach Kuchen.",
  },
  {
    verben: "schmecken",
    präposition: "nach",
    reflexiv: null,
    satz: "Muscheln schmecken nach Meerwasser.",
  },
  {
    verben: "schreiben",
    präposition: "an",
    reflexiv: null,
    satz: "Bitte schreibe noch heute an deine Mutter.",
  },
  {
    verben: "sich schützen",
    präposition: "vor",
    reflexiv: "sich",
    satz: "Den Computer des Ministers muss man vor Hackern schützen.",
  },
  {
    verben: "sein",
    präposition: "für",
    reflexiv: null,
    satz: "Ich bin für die Abschaffung der Kinderarbeit.",
  },
  {
    verben: "sein",
    präposition: "gegen",
    reflexiv: null,
    satz: "Viele sind gegen Steuererhöhungen.",
  },
  {
    verben: "sorgen",
    präposition: "für",
    reflexiv: null,
    satz: "Kinder müssen im Alter für ihre Eltern sorgen.",
  },
  {
    verben: "sprechen",
    präposition: "mit",
    reflexiv: null,
    satz: "Ich spreche noch einmal mit deinem Vater.",
  },
  {
    verben: "sprechen",
    präposition: "über",
    reflexiv: null,
    satz: "Lass uns über deine Zukunft sprechen.",
  },
  {
    verben: "sterben",
    präposition: "an",
    reflexiv: null,
    satz: "Zwei Deutsche sind an der Grippe gestorben.",
  },
  {
    verben: "streiten",
    präposition: "mit",
    reflexiv: null,
    satz: "Ich möchte nicht mit dir streiten.",
  },
  {
    verben: "streiten",
    präposition: "über",
    reflexiv: null,
    satz: "Die USA und Deutschland streiten über eine neue Strategie.",
  },
  {
    verben: "teilnehmen",
    präposition: "an",
    reflexiv: null,
    satz: "Nordkorea nimmt an der Fußball-WM teil.",
  },
  {
    verben: "telefonieren",
    präposition: "mit",
    reflexiv: null,
    satz: "Hast du schon mit dem Arzt telefoniert?",
  },
  {
    verben: "sich treffen",
    präposition: "mit",
    reflexiv: "sich",
    satz: "Die Kanzlerin trifft sich täglich mit ihrem Pressesprecher.",
  },
  {
    verben: "sich trennen",
    präposition: "von",
    reflexiv: "sich",
    satz: "Ralf hat sich von seiner Freundin getrennt.",
  },
  {
    verben: "überreden",
    präposition: "zu",
    reflexiv: null,
    satz: "Kann ich dich zu einem Glas Wein überreden?",
  },
  {
    verben: "sich unterhalten",
    präposition: "mit",
    reflexiv: "sich",
    satz: "Der Sänger unterhält sich mit dem Bassisten.",
  },
  {
    verben: "sich unterhalten",
    präposition: "über",
    reflexiv: "sich",
    satz: "Wir unterhalten uns über den Film.",
  },
  {
    verben: "sich verabreden",
    präposition: "mit",
    reflexiv: "sich",
    satz: "Heute verabrede ich mich mit einer Freundin.",
  },
  {
    verben: "sich verabschieden",
    präposition: "von",
    reflexiv: "sich",
    satz: "Wir verabschieden uns von Ihnen.",
  },
  {
    verben: "vergessen",
    präposition: "auf",
    reflexiv: null,
    satz: "Vergiss das Vorzeichen nicht.",
  },
  {
    verben: "sich verlassen",
    präposition: "auf",
    reflexiv: "sich",
    satz: "Auf mich kann man sich immer verlassen.",
  },
  {
    verben: "sich verlieben",
    präposition: "in",
    reflexiv: "sich",
    satz: "Britta hat sich in das alte Bauernhaus verliebt.",
  },
  {
    verben: "sich verstehen",
    präposition: "mit",
    reflexiv: "sich",
    satz: "Daniel versteht sich gut mit seinem Chef.",
  },
  {
    verben: "verstehen",
    präposition: "von",
    reflexiv: null,
    satz: "Verstehst du etwas von Elektrik?",
  },
  {
    verben: "sich vorbereiten",
    präposition: "auf",
    reflexiv: "sich",
    satz: "Karl bereitet sich auf eine Präsentation vor.",
  },
  {
    verben: "warnen",
    präposition: "vor",
    reflexiv: null,
    satz: "Man hatte ihn vor den hohen Kosten für das alte Auto gewarnt.",
  },
  {
    verben: "warten",
    präposition: "auf",
    reflexiv: null,
    satz: "In Namibia wartet man lange auf einen Bus.",
  },
  {
    verben: "werden",
    präposition: "zu",
    reflexiv: null,
    satz: "Unter null Grad wird Eis zu Wasser.",
  },
  {
    verben: "wissen",
    präposition: "von",
    reflexiv: null,
    satz: "Ich weiß nichts von neuen Computern für unser Team.",
  },
  {
    verben: "sich wundern",
    präposition: "über",
    reflexiv: "sich",
    satz: "Viele Deutsche wundern sich über die plötzlich so hohen Stromkosten.",
  },
  {
    verben: "zweifeln",
    präposition: "an",
    reflexiv: null,
    satz: "John zweifelt daran, dass sein Sohn die Wahrheit gesagt hat.",
  },

  // ... (Include the full sätze array here for brevity, assuming it's already provided)
];

const prepositions = [
  "auf",
  "von",
  "mit",
  "über",
  "für",
  "bei",
  "um",
  "an",
  "zu",
  "nach",
  "vor",
  "gegen",
  "in",
  "unter",
];

const Test = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  // Get random incorrect prepositions
  const getRandomPrepositions = (correctPreposition) => {
    const filteredPrepositions = prepositions.filter(
      (p) => p !== correctPreposition
    );
    const shuffled = filteredPrepositions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
  };

  // Current question data
  const currentQuestion = sätze[currentIndex];
  const correctPreposition = currentQuestion.präposition;
  const incorrectPrepositions = getRandomPrepositions(correctPreposition);
  const options = [correctPreposition, ...incorrectPrepositions].sort(
    () => 0.5 - Math.random()
  );

  // Handle answer selection
  const handleAnswer = (option) => {
    setSelectedAnswer(option);
    setIsCorrect(option === correctPreposition);
  };

  // Navigate to the next question
  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, sätze.length - 1));
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  // Navigate to the previous question
  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">
          Preposition Quiz
        </h1>
        <div className="mb-4">
          <p className="text-lg font-semibold">
            Verb: {currentQuestion.verben}{" "}
            {currentQuestion.reflexiv ? `(${currentQuestion.reflexiv})` : ""}
          </p>
          <p className="text-gray-600">{currentQuestion.satz}</p>
        </div>
        <div className="space-y-2 mb-4">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              disabled={selectedAnswer !== null}
              className={`w-full py-2 px-4 rounded text-left transition-colors ${
                selectedAnswer === option
                  ? isCorrect
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                  : selectedAnswer && option === correctPreposition
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`py-2 px-4 rounded ${
              currentIndex === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            ← Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === sätze.length - 1}
            className={`py-2 px-4 rounded ${
              currentIndex === sätze.length - 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Test;
