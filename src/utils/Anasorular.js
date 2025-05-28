const Anasorular = [
  // "Konjunktiv II" nerede, nasıl kullanılır?
  {
    question: "Wenn ich Zeit _____, würde ich dir helfen.",
    options: [
      { text: "habe", value: "a" },
      { text: "hätte", value: "b" },
      { text: "hatte", value: "c" },
      { text: "haben würde", value: "d" },
    ],
    correctAnswer: "b", // hätte (Konjunktiv II von haben)
  },
  {
    question: "Wir _____ gerne ins Kino gegangen, aber es war zu spät.",
    options: [
      { text: "sind", value: "a" },
      { text: "waren", value: "b" },
      { text: "wären", value: "c" },
      { text: "würden", value: "d" },
    ],
    correctAnswer: "c", // wären (Konjunktiv II von sein)
  },
  {
    question: "An deiner Stelle _____ ich das nicht machen.",
    options: [
      { text: "werde", value: "a" },
      { text: "würde", value: "b" },
      { text: "wurde", value: "c" },
      { text: "wird", value: "d" },
    ],
    correctAnswer: "b", // würde (Ratschlag mit Konjunktiv II)
  },
  {
    question: "_____ Sie mir bitte helfen?",
    options: [
      { text: "Können", value: "a" },
      { text: "Könnten", value: "b" },
      { text: "Konnten", value: "c" },
      { text: "Kann", value: "d" },
    ],
    correctAnswer: "b", // Könnten (höfliche Bitte)
  },
  {
    question: "Wenn das Wetter besser _____, könnten wir spazieren gehen.",
    options: [
      { text: "ist", value: "a" },
      { text: "war", value: "b" },
      { text: "wäre", value: "c" },
      { text: "wird", value: "d" },
    ],
    correctAnswer: "c", // wäre (irreale Bedingung)
  },

  // "Konjunktiv II" hakkında genel bilgi
  {
    question: "Ich _____ dir gern dabei, aber ich habe keine Zeit.",
    options: [
      { text: "helfe", value: "a" },
      { text: "half", value: "b" },
      { text: "hülfe", value: "c" },
      { text: "würde helfen", value: "d" },
    ],
    correctAnswer: "c", // hülfe (seltene Form) oder d (gebräuchlicher)
  },
  {
    question: "Wenn ich Millionär _____, würde ich um die Welt reisen.",
    options: [
      { text: "bin", value: "a" },
      { text: "war", value: "b" },
      { text: "wäre", value: "c" },
      { text: "gewesen wäre", value: "d" },
    ],
    correctAnswer: "c", // wäre (irrealer Zustand)
  },
  {
    question: "Es _____ schön, wenn du kommen könntest.",
    options: [
      { text: "ist", value: "a" },
      { text: "war", value: "b" },
      { text: "wäre", value: "c" },
      { text: "wird", value: "d" },
    ],
    correctAnswer: "c", // wäre (Wunsch ausdrücken)
  },
  {
    question: "_____ du Lust auf einen Kaffee?",
    options: [
      { text: "Hast", value: "a" },
      { text: "Hattest", value: "b" },
      { text: "Hättest", value: "c" },
      { text: "Wirst haben", value: "d" },
    ],
    correctAnswer: "c", // Hättest (höfliche Frage)
  },
  {
    question: "Wenn ich du _____, würde ich den Job annehmen.",
    options: [
      { text: "bin", value: "a" },
      { text: "war", value: "b" },
      { text: "wäre", value: "c" },
      { text: "gewesen bin", value: "d" },
    ],
    correctAnswer: "c", // wäre (hypothetische Situation)
  },

  // Modal Fiillerle Konjunktiv II Şimdiki Zaman
  {
    question: "Ich _____ gerne heute früher nach Hause gehen.",
    options: [
      { text: "möchte", value: "a" },
      { text: "wollte", value: "b" },
      { text: "würde mögen", value: "c" },
      { text: "mochte", value: "d" },
    ],
    correctAnswer: "a", // möchte (Konjunktiv II von mögen)
  },
  {
    question: "_____ Sie mir bitte das Salz reichen?",
    options: [
      { text: "Können", value: "a" },
      { text: "Könnten", value: "b" },
      { text: "Konnten", value: "c" },
      { text: "Gekonnt", value: "d" },
    ],
    correctAnswer: "b", // Könnten (höfliche Bitte)
  },
  {
    question: "Du _____ eigentlich mehr lernen.",
    options: [
      { text: "sollst", value: "a" },
      { text: "solltest", value: "b" },
      { text: "sollst würde", value: "c" },
      { text: "gesollt", value: "d" },
    ],
    correctAnswer: "b", // solltest (Rat/Empfehlung)
  },
  {
    question: "Wir _____ heute Abend ins Theater gehen.",
    options: [
      { text: "dürfen", value: "a" },
      { text: "durften", value: "b" },
      { text: "dürften", value: "c" },
      { text: "würden dürfen", value: "d" },
    ],
    correctAnswer: "c", // dürften (höflicher Vorschlag)
  },
  {
    question: "_____ ich Sie um einen Gefallen bitten?",
    options: [
      { text: "Darf", value: "a" },
      { text: "Durfte", value: "b" },
      { text: "Dürfte", value: "c" },
      { text: "Würde dürfen", value: "d" },
    ],
    correctAnswer: "c", // Dürfte (sehr höfliche Bitte)
  },

  // Modal Fiillerle Konjunktiv II Geçmiş Zaman
  {
    question: "Ich _____ gestern kommen sollen, aber ich war krank.",
    options: [
      { text: "hätte", value: "a" },
      { text: "wäre", value: "b" },
      { text: "würde", value: "c" },
      { text: "sollte", value: "d" },
    ],
    correctAnswer: "a", // hätte ... sollen (nicht erfüllte Verpflichtung)
  },
  {
    question: "Du _____ früher anfangen müssen.",
    options: [
      { text: "hättest", value: "a" },
      { text: "wärst", value: "b" },
      { text: "würdest", value: "c" },
      { text: "müsstest", value: "d" },
    ],
    correctAnswer: "a", // hättest ... müssen (Vorwurf/Bedauern)
  },
  {
    question: "Wir _____ das Problem schon längst lösen können.",
    options: [
      { text: "hätten", value: "a" },
      { text: "wären", value: "b" },
      { text: "würden", value: "c" },
      { text: "könnten", value: "d" },
    ],
    correctAnswer: "a", // hätten ... können (verpasste Möglichkeit)
  },
  {
    question: "Sie _____ vorsichtiger sein sollen.",
    options: [
      { text: "hätte", value: "a" },
      { text: "wäre", value: "b" },
      { text: "würde", value: "c" },
      { text: "sollte", value: "d" },
    ],
    correctAnswer: "a", // hätte ... sollen (Vorwurf)
  },
  {
    question: "Ihr _____ pünktlich da sein müssen.",
    options: [
      { text: "hättet", value: "a" },
      { text: "wärt", value: "b" },
      { text: "würdet", value: "c" },
      { text: "müsstet", value: "d" },
    ],
    correctAnswer: "a", // hättet ... müssen (nicht erfüllte Pflicht)
  },

  // Konjunktiv II Passiv Gegenwart
  {
    question: "Das Haus _____ renoviert werden.",
    options: [
      { text: "sollte", value: "a" },
      { text: "würde", value: "b" },
      { text: "könnte", value: "c" },
      { text: "müsste", value: "d" },
    ],
    correctAnswer: "c", // könnte (Möglichkeit im Passiv)
  },
  {
    question: "Die Arbeit _____ bis morgen gemacht werden.",
    options: [
      { text: "müsste", value: "a" },
      { text: "wäre", value: "b" },
      { text: "hätte", value: "c" },
      { text: "würde werden", value: "d" },
    ],
    correctAnswer: "a", // müsste (Notwendigkeit im Passiv)
  },
  {
    question: "Der Brief _____ sofort geschrieben werden.",
    options: [
      { text: "sollte", value: "a" },
      { text: "wäre", value: "b" },
      { text: "hätte", value: "c" },
      { text: "dürfte", value: "d" },
    ],
    correctAnswer: "a", // sollte (Empfehlung im Passiv)
  },
  {
    question: "Das Problem _____ leicht gelöst werden können.",
    options: [
      { text: "würde", value: "a" },
      { text: "könnte", value: "b" },
      { text: "sollte", value: "c" },
      { text: "müsste", value: "d" },
    ],
    correctAnswer: "b", // könnte (Möglichkeit)
  },
  {
    question: "Die Tür _____ repariert werden.",
    options: [
      { text: "dürfte", value: "a" },
      { text: "müsste", value: "b" },
      { text: "wäre", value: "c" },
      { text: "hätte", value: "d" },
    ],
    correctAnswer: "b", // müsste (Notwendigkeit)
  },

  // Konjunktiv II Passiv Vergangenheit
  {
    question: "Das Projekt _____ rechtzeitig abgeschlossen worden sein.",
    options: [
      { text: "hätte", value: "a" },
      { text: "wäre", value: "b" },
      { text: "würde", value: "c" },
      { text: "könnte", value: "d" },
    ],
    correctAnswer: "a", // hätte ... worden sein (Vergangenheit Passiv)
  },
  {
    question: "Der Fehler _____ vermieden worden sein können.",
    options: [
      { text: "hätte", value: "a" },
      { text: "wäre", value: "b" },
      { text: "würde", value: "c" },
      { text: "sollte", value: "d" },
    ],
    correctAnswer: "a", // hätte ... können (verpasste Möglichkeit Passiv)
  },
  {
    question: "Die Entscheidung _____ früher getroffen worden sein.",
    options: [
      { text: "hätte", value: "a" },
      { text: "wäre", value: "b" },
      { text: "würde", value: "c" },
      { text: "könnte", value: "d" },
    ],
    correctAnswer: "a", // hätte ... worden sein (Bedauern)
  },
  {
    question: "Das Buch _____ schon längst übersetzt worden sein.",
    options: [
      { text: "müsste", value: "a" },
      { text: "wäre", value: "b" },
      { text: "hätte", value: "c" },
      { text: "würde", value: "d" },
    ],
    correctAnswer: "a", // müsste ... worden sein (Erwartung)
  },
  {
    question: "Der Vertrag _____ unterschrieben worden sein sollen.",
    options: [
      { text: "hätte", value: "a" },
      { text: "wäre", value: "b" },
      { text: "würde", value: "c" },
      { text: "könnte", value: "d" },
    ],
    correctAnswer: "a", // hätte ... sollen (nicht erfüllte Pflicht)
  },

  // Passiv + Vergangenheit + Modalverb
  {
    question: "Die Aufgabe _____ schon gestern erledigt werden müssen.",
    options: [
      { text: "hätte", value: "a" },
      { text: "wäre", value: "b" },
      { text: "würde", value: "c" },
      { text: "sollte", value: "d" },
    ],
    correctAnswer: "a", // hätte ... werden müssen
  },
  {
    question: "Das Auto _____ repariert werden können.",
    options: [
      { text: "hätte", value: "a" },
      { text: "wäre", value: "b" },
      { text: "würde", value: "c" },
      { text: "sollte", value: "d" },
    ],
    correctAnswer: "a", // hätte ... werden können
  },
  {
    question: "Der Plan _____ geändert werden sollen.",
    options: [
      { text: "hätte", value: "a" },
      { text: "wäre", value: "b" },
      { text: "würde", value: "c" },
      { text: "könnte", value: "d" },
    ],
    correctAnswer: "a", // hätte ... werden sollen
  },
  {
    question: "Die Nachricht _____ früher übermittelt werden dürfen.",
    options: [
      { text: "hätte", value: "a" },
      { text: "wäre", value: "b" },
      { text: "würde", value: "c" },
      { text: "sollte", value: "d" },
    ],
    correctAnswer: "a", // hätte ... werden dürfen
  },
  {
    question: "Das Fenster _____ geöffnet werden können.",
    options: [
      { text: "hätte", value: "a" },
      { text: "wäre", value: "b" },
      { text: "würde", value: "c" },
      { text: "müsste", value: "d" },
    ],
    correctAnswer: "a", // hätte ... werden können
  },

  // Gerçek dışı koşul cümleleri - Gegenwart
  {
    question: "Wenn ich reich _____, würde ich ein großes Haus kaufen.",
    options: [
      { text: "bin", value: "a" },
      { text: "war", value: "b" },
      { text: "wäre", value: "c" },
      { text: "gewesen wäre", value: "d" },
    ],
    correctAnswer: "c", // wäre (irreale Bedingung Gegenwart)
  },
  {
    question: "Falls er mehr Zeit _____, könnte er das Projekt beenden.",
    options: [
      { text: "hat", value: "a" },
      { text: "hatte", value: "b" },
      { text: "hätte", value: "c" },
      { text: "gehabt hätte", value: "d" },
    ],
    correctAnswer: "c", // hätte (irreale Bedingung)
  },
  {
    question: "Wenn es nicht so kalt _____, würden wir spazieren gehen.",
    options: [
      { text: "ist", value: "a" },
      { text: "war", value: "b" },
      { text: "wäre", value: "c" },
      { text: "gewesen ist", value: "d" },
    ],
    correctAnswer: "c", // wäre (irreale Bedingung)
  },
  {
    question: "Wenn ich du _____, würde ich anders handeln.",
    options: [
      { text: "bin", value: "a" },
      { text: "war", value: "b" },
      { text: "wäre", value: "c" },
      { text: "gewesen bin", value: "d" },
    ],
    correctAnswer: "c", // wäre (hypothetische Situation)
  },
  {
    question: "Falls sie hier _____, würde sie uns helfen.",
    options: [
      { text: "ist", value: "a" },
      { text: "war", value: "b" },
      { text: "wäre", value: "c" },
      { text: "sein würde", value: "d" },
    ],
    correctAnswer: "c", // wäre (irreale Bedingung)
  },

  // Gerçek dışı koşul cümleleri – Vergangenheit
  {
    question: "Wenn ich früher gekommen _____, hätte ich euch getroffen.",
    options: [
      { text: "bin", value: "a" },
      { text: "war", value: "b" },
      { text: "wäre", value: "c" },
      { text: "gewesen wäre", value: "d" },
    ],
    correctAnswer: "c", // wäre (irreale Bedingung Vergangenheit)
  },
  {
    question: "Falls er das Buch gelesen _____, hätte er die Antwort gewusst.",
    options: [
      { text: "hat", value: "a" },
      { text: "hatte", value: "b" },
      { text: "hätte", value: "c" },
      { text: "haben würde", value: "d" },
    ],
    correctAnswer: "c", // hätte (irreale Bedingung Vergangenheit)
  },
  {
    question:
      "Wenn das Wetter besser gewesen _____, wären wir wandern gegangen.",
    options: [
      { text: "ist", value: "a" },
      { text: "war", value: "b" },
      { text: "wäre", value: "c" },
      { text: "hat", value: "d" },
    ],
    correctAnswer: "c", // wäre (irreale Bedingung Vergangenheit)
  },
  {
    question: "Hätte ich das gewusst, _____ ich nicht gekommen.",
    options: [
      { text: "bin", value: "a" },
      { text: "war", value: "b" },
      { text: "wäre", value: "c" },
      { text: "hatte", value: "d" },
    ],
    correctAnswer: "c", // wäre (Folge einer irrealen Bedingung)
  },
  {
    question: "Wenn sie pünktlich gewesen _____, hätten wir den Zug erreicht.",
    options: [
      { text: "ist", value: "a" },
      { text: "war", value: "b" },
      { text: "wäre", value: "c" },
      { text: "sein würde", value: "d" },
    ],
    correctAnswer: "c", // wäre (irreale Bedingung Vergangenheit)
  },

  // Konditionalsatz [ohne "wenn"]
  {
    question: "_____ ich reich, würde ich um die Welt reisen.",
    options: [
      { text: "Bin", value: "a" },
      { text: "War", value: "b" },
      { text: "Wäre", value: "c" },
      { text: "Sein würde", value: "d" },
    ],
    correctAnswer: "c", // Wäre (Konditionalsatz ohne 'wenn')
  },
  {
    question: "_____ sie mehr Zeit, könnte sie das schaffen.",
    options: [
      { text: "Hat", value: "a" },
      { text: "Hatte", value: "b" },
      { text: "Hätte", value: "c" },
      { text: "Haben würde", value: "d" },
    ],
    correctAnswer: "c", // Hätte (Konditionalsatz ohne 'wenn')
  },
  {
    question: "_____ das Wetter schön, gingen wir spazieren.",
    options: [
      { text: "Ist", value: "a" },
      { text: "War", value: "b" },
      { text: "Wäre", value: "c" },
      { text: "Wird", value: "d" },
    ],
    correctAnswer: "c", // Wäre (Konditionalsatz ohne 'wenn')
  },
  {
    question: "_____ er hier, würde er uns helfen.",
    options: [
      { text: "Ist", value: "a" },
      { text: "War", value: "b" },
      { text: "Wäre", value: "c" },
      { text: "Wird", value: "d" },
    ],
    correctAnswer: "c", // Wäre (Konditionalsatz ohne 'wenn')
  },
  {
    question: "_____ ich du, würde ich das nicht machen.",
    options: [
      { text: "Bin", value: "a" },
      { text: "War", value: "b" },
      { text: "Wäre", value: "c" },
      { text: "Gewesen bin", value: "d" },
    ],
    correctAnswer: "c", // Wäre (Konditionalsatz ohne 'wenn')
  },

  // Gerçek dışı koşul cümleleri - [ohne "wenn"]
  {
    question: "_____ ich früher angefangen, hätte ich es geschafft.",
    options: [
      { text: "Bin", value: "a" },
      { text: "War", value: "b" },
      { text: "Wäre", value: "c" },
      { text: "Hatte", value: "d" },
    ],
    correctAnswer: "c", // Wäre (irrealer Konditionalsatz Vergangenheit)
  },
  {
    question: "_____ er vorsichtiger gewesen, wäre der Unfall nicht passiert.",
    options: [
      { text: "Ist", value: "a" },
      { text: "War", value: "b" },
      { text: "Wäre", value: "c" },
      { text: "Hatte", value: "d" },
    ],
    correctAnswer: "c", // Wäre (irrealer Konditionalsatz)
  },
  {
    question: "_____ sie das Buch gelesen, hätte sie die Prüfung bestanden.",
    options: [
      { text: "Hat", value: "a" },
      { text: "Hatte", value: "b" },
      { text: "Hätte", value: "c" },
      { text: "Haben würde", value: "d" },
    ],
    correctAnswer: "c", // Hätte (irrealer Konditionalsatz)
  },
  {
    question: "_____ das Wetter besser gewesen, wären wir ausgegangen.",
    options: [
      { text: "Ist", value: "a" },
      { text: "War", value: "b" },
      { text: "Wäre", value: "c" },
      { text: "Wird", value: "d" },
    ],
    correctAnswer: "c", // Wäre (irrealer Konditionalsatz)
  },
  {
    question: "_____ ich das gewusst, wäre ich nicht gekommen.",
    options: [
      { text: "Habe", value: "a" },
      { text: "Hatte", value: "b" },
      { text: "Hätte", value: "c" },
      { text: "Haben würde", value: "d" },
    ],
    correctAnswer: "c", // Hätte (irrealer Konditionalsatz)
  },

  // Gerçek dışı koşul cümleleri - Modalverb
  {
    question: "Wenn ich könnte, _____ ich dir gerne helfen.",
    options: [
      { text: "werde", value: "a" },
      { text: "würde", value: "b" },
      { text: "wurde", value: "c" },
      { text: "will", value: "d" },
    ],
    correctAnswer: "b", // würde (irreale Bedingung mit Modalverb)
  },
  {
    question: "Falls sie mehr Geld hätte, _____ sie das Auto kaufen können.",
    options: [
      { text: "wird", value: "a" },
      { text: "würde", value: "b" },
      { text: "wurde", value: "c" },
      { text: "wollte", value: "d" },
    ],
    correctAnswer: "b", // würde (irreale Bedingung)
  },
  {
    question: "Wenn er Zeit hätte, _____ er uns besuchen wollen.",
    options: [
      { text: "wird", value: "a" },
      { text: "würde", value: "b" },
      { text: "wurde", value: "c" },
      { text: "wollte", value: "d" },
    ],
    correctAnswer: "b", // würde (irreale Bedingung)
  },
  {
    question: "Falls das möglich wäre, _____ wir es gerne machen.",
    options: [
      { text: "werden", value: "a" },
      { text: "würden", value: "b" },
      { text: "wurden", value: "c" },
      { text: "wollen", value: "d" },
    ],
    correctAnswer: "b", // würden (irreale Bedingung)
  },
  {
    question: "Wenn ich du wäre, _____ ich das nicht tun.",
    options: [
      { text: "werde", value: "a" },
      { text: "würde", value: "b" },
      { text: "wurde", value: "c" },
      { text: "will", value: "d" },
    ],
    correctAnswer: "b", // würde (hypothetische Situation)
  },

  // Gerçek dışı dilek cümleleri
  {
    question: "Wenn ich doch mehr Zeit _____!",
    options: [
      { text: "habe", value: "a" },
      { text: "hatte", value: "b" },
      { text: "hätte", value: "c" },
      { text: "haben würde", value: "d" },
    ],
    correctAnswer: "c", // hätte (irrealer Wunsch)
  },
  {
    question: "Wäre er doch hier _____!",
    options: [
      { text: "ist", value: "a" },
      { text: "war", value: "b" },
      { text: "wäre", value: "c" },
      { text: "gewesen", value: "d" },
    ],
    correctAnswer: "d", // gewesen (irrealer Wunsch Vergangenheit)
  },
  {
    question: "Wenn das Wetter nur besser _____!",
    options: [
      { text: "ist", value: "a" },
      { text: "war", value: "b" },
      { text: "wäre", value: "c" },
      { text: "wird", value: "d" },
    ],
    correctAnswer: "c", // wäre (irrealer Wunsch)
  },
  {
    question: "Hätte ich doch früher _____!",
    options: [
      { text: "anfange", value: "a" },
      { text: "anfing", value: "b" },
      { text: "angefangen", value: "c" },
      { text: "anfangen würde", value: "d" },
    ],
    correctAnswer: "c", // angefangen (irrealer Wunsch Vergangenheit)
  },
  {
    question: "Wenn sie nur da _____!",
    options: [
      { text: "ist", value: "a" },
      { text: "war", value: "b" },
      { text: "wäre", value: "c" },
      { text: "sein wird", value: "d" },
    ],
    correctAnswer: "c", // wäre (irrealer Wunsch)
  },

  // Irreale Wunschsätze
  {
    question: "_____ ich doch reicher!",
    options: [
      { text: "Bin", value: "a" },
      { text: "War", value: "b" },
      { text: "Wäre", value: "c" },
      { text: "Werde", value: "d" },
    ],
    correctAnswer: "c", // Wäre (irrealer Wunschsatz)
  },
  {
    question: "_____ das Wetter nur schöner!",
    options: [
      { text: "Ist", value: "a" },
      { text: "War", value: "b" },
      { text: "Wäre", value: "c" },
      { text: "Wird", value: "d" },
    ],
    correctAnswer: "c", // Wäre (irrealer Wunschsatz)
  },
  {
    question: "_____ er doch pünktlich gewesen!",
    options: [
      { text: "Ist", value: "a" },
      { text: "War", value: "b" },
      { text: "Wäre", value: "c" },
      { text: "Hatte", value: "d" },
    ],
    correctAnswer: "c", // Wäre (irrealer Wunschsatz Vergangenheit)
  },
  {
    question: "_____ sie nur mehr Zeit!",
    options: [
      { text: "Hat", value: "a" },
      { text: "Hatte", value: "b" },
      { text: "Hätte", value: "c" },
      { text: "Haben wird", value: "d" },
    ],
    correctAnswer: "c", // Hätte (irrealer Wunschsatz)
  },
  {
    question: "_____ ich das nur früher gewusst!",
    options: [
      { text: "Habe", value: "a" },
      { text: "Hatte", value: "b" },
      { text: "Hätte", value: "c" },
      { text: "Haben werde", value: "d" },
    ],
    correctAnswer: "c", // Hätte (irrealer Wunschsatz Vergangenheit)
  },

  // 1. Gerçek dışı sonuç cümleleri - Giriş
  {
    question: "Das Auto ist zu teuer, als dass ich es _____ könnte.",
    options: [
      { text: "kaufe", value: "a" },
      { text: "kaufen", value: "b" },
      { text: "gekauft", value: "c" },
      { text: "kaufte", value: "d" },
    ],
    correctAnswer: "b", // kaufen könnte
  },
  {
    question: "Sie ist zu jung, als dass sie allein _____ dürfte.",
    options: [
      { text: "verreist", value: "a" },
      { text: "verreisen", value: "b" },
      { text: "verreiste", value: "c" },
      { text: "gereist", value: "d" },
    ],
    correctAnswer: "b", // verreisen dürfte
  },
  {
    question:
      "Der Text ist zu kompliziert, als dass ein Anfänger ihn _____ könnte.",
    options: [
      { text: "versteht", value: "a" },
      { text: "verstehen", value: "b" },
      { text: "verstanden", value: "c" },
      { text: "verstand", value: "d" },
    ],
    correctAnswer: "b", // verstehen könnte
  },
  {
    question:
      "Das Problem ist zu schwierig, als dass wir es schnell _____ könnten.",
    options: [
      { text: "lösen", value: "a" },
      { text: "löst", value: "b" },
      { text: "gelöst", value: "c" },
      { text: "löste", value: "d" },
    ],
    correctAnswer: "a", // lösen könnten
  },
  {
    question: "Die Aufgabe ist zu einfach, als dass sie Hilfe _____ müsste.",
    options: [
      { text: "braucht", value: "a" },
      { text: "brauchen", value: "b" },
      { text: "gebraucht", value: "c" },
      { text: "brauchte", value: "d" },
    ],
    correctAnswer: "b", // brauchen müsste
  },

  // 2. [zu + Adjektiv] + [als dass + Konjunktiv II] yapısı
  {
    question: "Er ist zu stolz, als dass er um Hilfe _____ würde.",
    options: [
      { text: "bittet", value: "a" },
      { text: "bitten", value: "b" },
      { text: "gebeten", value: "c" },
      { text: "bat", value: "d" },
    ],
    correctAnswer: "b", // bitten würde
  },
  {
    question:
      "Das Wetter ist zu schlecht, als dass wir spazieren _____ könnten.",
    options: [
      { text: "gehen", value: "a" },
      { text: "gegangen", value: "b" },
      { text: "ging", value: "c" },
      { text: "gingen", value: "d" },
    ],
    correctAnswer: "a", // spazieren gehen könnten
  },
  {
    question: "Sie ist zu müde, als dass sie noch arbeiten _____.",
    options: [
      { text: "kann", value: "a" },
      { text: "könnte", value: "b" },
      { text: "konnte", value: "c" },
      { text: "gekonnt", value: "d" },
    ],
    correctAnswer: "b", // arbeiten könnte
  },
  {
    question:
      "Der Film ist zu langweilig, als dass ich ihn zu Ende _____ würde.",
    options: [
      { text: "ansehe", value: "a" },
      { text: "ansehen", value: "b" },
      { text: "angesehen", value: "c" },
      { text: "ansah", value: "d" },
    ],
    correctAnswer: "b", // ansehen würde
  },
  {
    question:
      "Das Buch ist zu schwer, als dass Kinder es leicht _____ könnten.",
    options: [
      { text: "verstehen", value: "a" },
      { text: "versteht", value: "b" },
      { text: "verstanden", value: "c" },
      { text: "verstand", value: "d" },
    ],
    correctAnswer: "a", // verstehen könnten
  },

  // 3. "zu" yerine "nicht genug / nicht so" kullanımı
  {
    question:
      "Er ist nicht reich genug, als dass er sich ein Haus _____ könnte.",
    options: [
      { text: "kauft", value: "a" },
      { text: "kaufen", value: "b" },
      { text: "gekauft", value: "c" },
      { text: "kaufte", value: "d" },
    ],
    correctAnswer: "b", // kaufen könnte
  },
  {
    question:
      "Sie ist nicht so erfahren, als dass sie die Abteilung _____ könnte.",
    options: [
      { text: "leitet", value: "a" },
      { text: "leiten", value: "b" },
      { text: "geleitet", value: "c" },
      { text: "leitete", value: "d" },
    ],
    correctAnswer: "b", // leiten könnte
  },
  {
    question:
      "Das Auto ist nicht so schnell, als dass es an dem Rennen _____ könnte.",
    options: [
      { text: "teilnimmt", value: "a" },
      { text: "teilnehmen", value: "b" },
      { text: "teilgenommen", value: "c" },
      { text: "teilnahm", value: "d" },
    ],
    correctAnswer: "b", // teilnehmen könnte
  },
  {
    question:
      "Wir haben nicht genug Zeit, als dass wir alle Aufgaben _____ könnten.",
    options: [
      { text: "erledigen", value: "a" },
      { text: "erledigt", value: "b" },
      { text: "erledigten", value: "c" },
      { text: "erledige", value: "d" },
    ],
    correctAnswer: "a", // erledigen könnten
  },
  {
    question: "Er ist nicht so mutig, als dass er allein _____ würde.",
    options: [
      { text: "reist", value: "a" },
      { text: "reisen", value: "b" },
      { text: "gereist", value: "c" },
      { text: "reiste", value: "d" },
    ],
    correctAnswer: "b", // reisen würde
  },

  // 4. Gerçek dışı sonuç cümleleri – Gegenwart (Şimdiki zaman)
  {
    question: "Wenn ich mehr Geld _____, würde ich eine Weltreise machen.",
    options: [
      { text: "habe", value: "a" },
      { text: "hätte", value: "b" },
      { text: "hatte", value: "c" },
      { text: "haben", value: "d" },
    ],
    correctAnswer: "b", // hätte (Konjunktiv II Gegenwart)
  },
  {
    question: "Falls er pünktlich _____, könnten wir rechtzeitig anfangen.",
    options: [
      { text: "kommt", value: "a" },
      { text: "käme", value: "b" },
      { text: "kam", value: "c" },
      { text: "gekommen", value: "d" },
    ],
    correctAnswer: "b", // käme (Konjunktiv II Gegenwart)
  },
  {
    question: "Wäre das Wetter besser, _____ wir ins Freibad gehen.",
    options: [
      { text: "werden", value: "a" },
      { text: "würden", value: "b" },
      { text: "wurden", value: "c" },
      { text: "sind", value: "d" },
    ],
    correctAnswer: "b", // würden (Konjunktiv II Gegenwart)
  },
  {
    question: "Wenn sie mehr Zeit _____, würde sie öfter Sport treiben.",
    options: [
      { text: "hat", value: "a" },
      { text: "hätte", value: "b" },
      { text: "hatte", value: "c" },
      { text: "haben", value: "d" },
    ],
    correctAnswer: "b", // hätte (Konjunktiv II Gegenwart)
  },
  {
    question: "_____ du mir helfen, wäre ich sehr dankbar.",
    options: [
      { text: "Würdest", value: "a" },
      { text: "Wirst", value: "b" },
      { text: "Wurdest", value: "c" },
      { text: "Bist", value: "d" },
    ],
    correctAnswer: "a", // Würdest (Konjunktiv II Gegenwart)
  },

  // 5. Gerçek dışı sonuç cümleleri – Gegenwart (İkinci örnek)
  {
    question: "An deiner Stelle _____ ich das nicht machen.",
    options: [
      { text: "werde", value: "a" },
      { text: "würde", value: "b" },
      { text: "wurde", value: "c" },
      { text: "wird", value: "d" },
    ],
    correctAnswer: "b", // würde (Ratschlag mit Konjunktiv II)
  },
  {
    question: "Könntest du mir sagen, wo der Bahnhof _____?",
    options: [
      { text: "ist", value: "a" },
      { text: "wäre", value: "b" },
      { text: "war", value: "c" },
      { text: "sein", value: "d" },
    ],
    correctAnswer: "a", // ist (höfliche Frage, aber Realität)
  },
  {
    question: "Wenn ich du _____, würde ich sofort zum Arzt gehen.",
    options: [
      { text: "bin", value: "a" },
      { text: "wäre", value: "b" },
      { text: "war", value: "c" },
      { text: "sein", value: "d" },
    ],
    correctAnswer: "b", // wäre (irrealer Vergleich)
  },
  {
    question: "_____ es möglich, das Meeting zu verschieben?",
    options: [
      { text: "Ist", value: "a" },
      { text: "Wäre", value: "b" },
      { text: "War", value: "c" },
      { text: "Wird", value: "d" },
    ],
    correctAnswer: "b", // Wäre (höfliche Nachfrage)
  },
  {
    question: "Wenn sie fleißiger _____, hätte sie bessere Noten.",
    options: [
      { text: "lernt", value: "a" },
      { text: "lernte", value: "b" },
      { text: "gelernt", value: "c" },
      { text: "lernen", value: "d" },
    ],
    correctAnswer: "b", // lernte (Konjunktiv II)
  },

  // 6. Gerçek dışı sonuç cümleleri – Gegenwart (Üçüncü örnek)
  {
    question:
      "Ich _____ gerne mit dir ins Kino gehen, aber ich habe keine Zeit.",
    options: [
      { text: "gehe", value: "a" },
      { text: "würde", value: "b" },
      { text: "ging", value: "c" },
      { text: "bin gegangen", value: "d" },
    ],
    correctAnswer: "b", // würde (höflicher Ausdruck eines Wunsches)
  },
  {
    question: "Falls du Lust _____, können wir zusammen kochen.",
    options: [
      { text: "hast", value: "a" },
      { text: "hättest", value: "b" },
      { text: "hattest", value: "c" },
      { text: "haben", value: "d" },
    ],
    correctAnswer: "a", // hast (reale Möglichkeit)
  },
  {
    question: "Wenn ich mehr Mut _____, würde ich sie ansprechen.",
    options: [
      { text: "habe", value: "a" },
      { text: "hätte", value: "b" },
      { text: "hatte", value: "c" },
      { text: "haben", value: "d" },
    ],
    correctAnswer: "b", // hätte (irreale Bedingung)
  },
  {
    question: "_____ Sie so freundlich sein und mir helfen?",
    options: [
      { text: "Sind", value: "a" },
      { text: "Wären", value: "b" },
      { text: "Waren", value: "c" },
      { text: "Werden", value: "d" },
    ],
    correctAnswer: "b", // Wären (sehr höfliche Bitte)
  },
  {
    question: "Wenn das Auto nicht so teuer _____, würde ich es kaufen.",
    options: [
      { text: "ist", value: "a" },
      { text: "wäre", value: "b" },
      { text: "war", value: "c" },
      { text: "sein", value: "d" },
    ],
    correctAnswer: "b", // wäre (irreale Bedingung)
  },

  // 7. Geçmiş zaman – Vergangenheit (Birinci örnek)
  {
    question: "Wenn ich früher _____ wäre, hätte ich den Zug nicht verpasst.",
    options: [
      { text: "aufstehe", value: "a" },
      { text: "aufgestanden", value: "b" },
      { text: "aufstand", value: "c" },
      { text: "aufstehen", value: "d" },
    ],
    correctAnswer: "b", // aufgestanden wäre (Konjunktiv II Vergangenheit)
  },
  {
    question: "Hätte er mehr gelernt, _____ er die Prüfung bestanden.",
    options: [
      { text: "hat", value: "a" },
      { text: "hätte", value: "b" },
      { text: "hatte", value: "c" },
      { text: "haben", value: "d" },
    ],
    correctAnswer: "b", // hätte bestanden (Konjunktiv II Vergangenheit)
  },
  {
    question:
      "Wenn sie vorsichtiger _____ wäre, wäre der Unfall nicht passiert.",
    options: [
      { text: "fährt", value: "a" },
      { text: "gefahren", value: "b" },
      { text: "fuhr", value: "c" },
      { text: "fahren", value: "d" },
    ],
    correctAnswer: "b", // gefahren wäre (Konjunktiv II Vergangenheit)
  },
  {
    question: "Hättest du mich angerufen, _____ ich dir geholfen.",
    options: [
      { text: "habe", value: "a" },
      { text: "hätte", value: "b" },
      { text: "hatte", value: "c" },
      { text: "haben", value: "d" },
    ],
    correctAnswer: "b", // hätte geholfen (Konjunktiv II Vergangenheit)
  },
  {
    question: "Wenn wir früher _____ hätten, wären wir pünktlich gewesen.",
    options: [
      { text: "anfangen", value: "a" },
      { text: "angefangen", value: "b" },
      { text: "fingen an", value: "c" },
      { text: "fangen an", value: "d" },
    ],
    correctAnswer: "b", // angefangen hätten (Konjunktiv II Vergangenheit)
  },

  // 8. Geçmiş zaman – Vergangenheit (İkinci örnek)
  {
    question: "Wäre ich damals mutiger _____, hätte ich die Chance ergriffen.",
    options: [
      { text: "bin", value: "a" },
      { text: "gewesen", value: "b" },
      { text: "war", value: "c" },
      { text: "sein", value: "d" },
    ],
    correctAnswer: "b", // gewesen (Konjunktiv II Vergangenheit)
  },
  {
    question: "Hätten sie besser aufgepasst, _____ sie den Fehler bemerkt.",
    options: [
      { text: "haben", value: "a" },
      { text: "hätten", value: "b" },
      { text: "hatten", value: "c" },
      { text: "sind", value: "d" },
    ],
    correctAnswer: "b", // hätten bemerkt (Konjunktiv II Vergangenheit)
  },
  {
    question: "Wenn er ehrlich _____ wäre, hätte er die Wahrheit gesagt.",
    options: [
      { text: "ist", value: "a" },
      { text: "gewesen", value: "b" },
      { text: "war", value: "c" },
      { text: "sein", value: "d" },
    ],
    correctAnswer: "b", // gewesen wäre (Konjunktiv II Vergangenheit)
  },
  {
    question: "Hättet ihr rechtzeitig _____, wärt ihr nicht zu spät gekommen.",
    options: [
      { text: "aufbrecht", value: "a" },
      { text: "aufgebrochen", value: "b" },
      { text: "brach auf", value: "c" },
      { text: "aufbrechen", value: "d" },
    ],
    correctAnswer: "b", // aufgebrochen (Konjunktiv II Vergangenheit)
  },
  {
    question:
      "Wenn das Wetter besser _____ wäre, hätten wir das Picknick gemacht.",
    options: [
      { text: "ist", value: "a" },
      { text: "gewesen", value: "b" },
      { text: "war", value: "c" },
      { text: "sein", value: "d" },
    ],
    correctAnswer: "b", // gewesen wäre (Konjunktiv II Vergangenheit)
  },

  // Konjunktiv I - Indirekte Rede (Dolaylı Anlatım)
  {
    question: "Er sagte, er _____ morgen nicht kommen können.",
    options: [
      { text: "kann", value: "a" },
      { text: "könne", value: "b" },
      { text: "konnte", value: "c" },
      { text: "könnte", value: "d" },
    ],
    correctAnswer: "b", // könne (Konjunktiv I indirekte Rede)
  },
  {
    question: "Sie behauptete, sie _____ nichts davon gewusst.",
    options: [
      { text: "hat", value: "a" },
      { text: "habe", value: "b" },
      { text: "hatte", value: "c" },
      { text: "hätte", value: "d" },
    ],
    correctAnswer: "b", // habe (Konjunktiv I indirekte Rede)
  },
  {
    question: "Der Minister erklärte, die Steuern _____ nicht erhöht werden.",
    options: [
      { text: "werden", value: "a" },
      { text: "würden", value: "b" },
      { text: "wurden", value: "c" },
      { text: "sind", value: "d" },
    ],
    correctAnswer: "b", // würden (Konjunktiv II als Ersatz für Konjunktiv I)
  },
  {
    question: "Er teilte mit, er _____ sich über das Angebot freuen.",
    options: [
      { text: "wird", value: "a" },
      { text: "werde", value: "b" },
      { text: "wurde", value: "c" },
      { text: "würde", value: "d" },
    ],
    correctAnswer: "b", // werde (Konjunktiv I indirekte Rede)
  },
  {
    question: "Die Zeitung berichtete, der Unfall _____ sich gestern ereignet.",
    options: [
      { text: "hat", value: "a" },
      { text: "habe", value: "b" },
      { text: "hatte", value: "c" },
      { text: "hätte", value: "d" },
    ],
    correctAnswer: "b", // habe (Konjunktiv I indirekte Rede)
  },

  // 1. zu + Adjektiv + als dass + Konjunktiv II yapısı
  {
    question: "Das Auto ist zu teuer, als dass ich es mir _____ könnte.",
    options: [
      { text: "leiste", value: "a" },
      { text: "leisten", value: "b" },
      { text: "geleistet", value: "c" },
      { text: "leistete", value: "d" },
    ],
    correctAnswer: "b", // leisten könnte
  },
  {
    question: "Sie ist zu stolz, als dass sie um Entschuldigung _____ würde.",
    options: [
      { text: "bittet", value: "a" },
      { text: "bitten", value: "b" },
      { text: "gebeten", value: "c" },
      { text: "bat", value: "d" },
    ],
    correctAnswer: "b", // bitten würde
  },
  {
    question:
      "Der Berg ist zu hoch, als dass wir ihn ohne Ausrüstung _____ könnten.",
    options: [
      { text: "besteigen", value: "a" },
      { text: "besteigt", value: "b" },
      { text: "bestiegen", value: "c" },
      { text: "bestieg", value: "d" },
    ],
    correctAnswer: "a", // besteigen könnten
  },
  {
    question:
      "Das Problem ist zu komplex, als dass man es schnell _____ könnte.",
    options: [
      { text: "löst", value: "a" },
      { text: "lösen", value: "b" },
      { text: "gelöst", value: "c" },
      { text: "löste", value: "d" },
    ],
    correctAnswer: "b", // lösen könnte
  },
  {
    question: "Er ist zu müde, als dass er sich noch _____ könnte.",
    options: [
      { text: "konzentriert", value: "a" },
      { text: "konzentrieren", value: "b" },
      { text: "konzentrierte", value: "c" },
      { text: "konzentriert haben", value: "d" },
    ],
    correctAnswer: "b", // konzentrieren könnte
  },

  // 2. nicht genug/nicht so + als dass + Konjunktiv II alternatifi
  {
    question: "Er ist nicht mutig genug, als dass er allein _____ würde.",
    options: [
      { text: "reist", value: "a" },
      { text: "reisen", value: "b" },
      { text: "gereist", value: "c" },
      { text: "reiste", value: "d" },
    ],
    correctAnswer: "b", // reisen würde
  },
  {
    question:
      "Sie ist nicht so erfahren, als dass sie das Projekt _____ könnte.",
    options: [
      { text: "leitet", value: "a" },
      { text: "leiten", value: "b" },
      { text: "geleitet", value: "c" },
      { text: "leitete", value: "d" },
    ],
    correctAnswer: "b", // leiten könnte
  },
  {
    question:
      "Das Auto ist nicht schnell genug, als dass es das Rennen _____ könnte.",
    options: [
      { text: "gewinnt", value: "a" },
      { text: "gewinnen", value: "b" },
      { text: "gewonnen", value: "c" },
      { text: "gewann", value: "d" },
    ],
    correctAnswer: "b", // gewinnen könnte
  },
  {
    question: "Wir haben nicht so viel Zeit, als dass wir alles _____ könnten.",
    options: [
      { text: "schaffen", value: "a" },
      { text: "schafft", value: "b" },
      { text: "geschafft", value: "c" },
      { text: "schaffte", value: "d" },
    ],
    correctAnswer: "a", // schaffen könnten
  },
  {
    question: "Er ist nicht so reich, als dass er sich Luxus _____ könnte.",
    options: [
      { text: "leistet", value: "a" },
      { text: "leisten", value: "b" },
      { text: "geleistet", value: "c" },
      { text: "leistete", value: "d" },
    ],
    correctAnswer: "b", // leisten könnte
  },

  // 3. Konjunktiv II Gegenwart ile sonuç cümleleri
  {
    question: "Wenn ich mehr Zeit _____, würde ich öfter Sport treiben.",
    options: [
      { text: "habe", value: "a" },
      { text: "hätte", value: "b" },
      { text: "hatte", value: "c" },
      { text: "haben", value: "d" },
    ],
    correctAnswer: "b", // hätte
  },
  {
    question: "Falls er pünktlich _____, könnten wir rechtzeitig beginnen.",
    options: [
      { text: "kommt", value: "a" },
      { text: "käme", value: "b" },
      { text: "kam", value: "c" },
      { text: "gekommen", value: "d" },
    ],
    correctAnswer: "b", // käme
  },
  {
    question: "Wäre das Wetter schön, _____ wir einen Spaziergang machen.",
    options: [
      { text: "werden", value: "a" },
      { text: "würden", value: "b" },
      { text: "wurden", value: "c" },
      { text: "sind", value: "d" },
    ],
    correctAnswer: "b", // würden
  },
  {
    question: "Wenn sie fleißiger _____, bekäme sie bessere Noten.",
    options: [
      { text: "lernt", value: "a" },
      { text: "lernte", value: "b" },
      { text: "gelernt", value: "c" },
      { text: "lernen", value: "d" },
    ],
    correctAnswer: "b", // lernte
  },
  {
    question: "_____ du mir dabei helfen, wäre ich sehr dankbar.",
    options: [
      { text: "Würdest", value: "a" },
      { text: "Wirst", value: "b" },
      { text: "Wurdest", value: "c" },
      { text: "Bist", value: "d" },
    ],
    correctAnswer: "a", // Würdest
  },

  // 4. Konjunktiv II Vergangenheit ile sonuç cümleleri
  {
    question: "Wenn ich früher _____ wäre, hätte ich den Zug erreicht.",
    options: [
      { text: "aufstehe", value: "a" },
      { text: "aufgestanden", value: "b" },
      { text: "aufstand", value: "c" },
      { text: "aufstehen", value: "d" },
    ],
    correctAnswer: "b", // aufgestanden wäre
  },
  {
    question: "Hätte er mehr gelernt, _____ er die Prüfung bestanden.",
    options: [
      { text: "hat", value: "a" },
      { text: "hätte", value: "b" },
      { text: "hatte", value: "c" },
      { text: "haben", value: "d" },
    ],
    correctAnswer: "b", // hätte bestanden
  },
  {
    question: "Wenn sie vorsichtiger _____ wäre, wäre nichts passiert.",
    options: [
      { text: "fährt", value: "a" },
      { text: "gefahren", value: "b" },
      { text: "fuhr", value: "c" },
      { text: "fahren", value: "d" },
    ],
    correctAnswer: "b", // gefahren wäre
  },
  {
    question: "Hättest du angerufen, _____ ich dir geholfen.",
    options: [
      { text: "habe", value: "a" },
      { text: "hätte", value: "b" },
      { text: "hatte", value: "c" },
      { text: "haben", value: "d" },
    ],
    correctAnswer: "b", // hätte geholfen
  },
  {
    question: "Wären wir früher _____, hätten wir bessere Plätze bekommen.",
    options: [
      { text: "kommen", value: "a" },
      { text: "gekommen", value: "b" },
      { text: "kamen", value: "c" },
      { text: "kommt", value: "d" },
    ],
    correctAnswer: "b", // gekommen wären
  },

  // 5. Indikativ ile Konjunktiv II karşılaştırmaları
  {
    question: "Wenn es regnet, _____ wir zu Hause. (Realität)",
    options: [
      { text: "bleiben", value: "a" },
      { text: "blieben", value: "b" },
      { text: "würden bleiben", value: "c" },
      { text: "geblieben", value: "d" },
    ],
    correctAnswer: "a", // bleiben (Indikativ - reale Bedingung)
  },
  {
    question: "Wenn es _____ würde, blieben wir zu Hause. (Irrealität)",
    options: [
      { text: "regnet", value: "a" },
      { text: "regnete", value: "b" },
      { text: "geregnet", value: "c" },
      { text: "regnen", value: "d" },
    ],
    correctAnswer: "b", // regnete (Konjunktiv II - irreale Bedingung)
  },
  {
    question: "Falls er Zeit _____, kommt er mit. (Realität)",
    options: [
      { text: "hat", value: "a" },
      { text: "hätte", value: "b" },
      { text: "hatte", value: "c" },
      { text: "haben", value: "d" },
    ],
    correctAnswer: "a", // hat (Indikativ - reale Möglichkeit)
  },
  {
    question: "Wenn er Zeit _____, käme er mit. (Irrealität)",
    options: [
      { text: "hat", value: "a" },
      { text: "hätte", value: "b" },
      { text: "hatte", value: "c" },
      { text: "haben", value: "d" },
    ],
    correctAnswer: "b", // hätte (Konjunktiv II - irreale Bedingung)
  },
  {
    question: "Sobald sie anruft, _____ ich Bescheid. (Realität)",
    options: [
      { text: "sage", value: "a" },
      { text: "sagte", value: "b" },
      { text: "würde sagen", value: "c" },
      { text: "gesagt", value: "d" },
    ],
    correctAnswer: "a", // sage (Indikativ - reale Situation)
  },

  // 6. Konjunktiv I'in tanımı ve temel kavramlar
  {
    question: "Er sagte, er _____ morgen nicht kommen können.",
    options: [
      { text: "kann", value: "a" },
      { text: "könne", value: "b" },
      { text: "konnte", value: "c" },
      { text: "könnte", value: "d" },
    ],
    correctAnswer: "b", // könne (Konjunktiv I)
  },
  {
    question: "Sie behauptete, sie _____ nichts davon gewusst.",
    options: [
      { text: "hat", value: "a" },
      { text: "habe", value: "b" },
      { text: "hatte", value: "c" },
      { text: "hätte", value: "d" },
    ],
    correctAnswer: "b", // habe (Konjunktiv I)
  },
  {
    question: "Der Experte erklärte, das _____ möglich sein.",
    options: [
      { text: "wird", value: "a" },
      { text: "werde", value: "b" },
      { text: "wurde", value: "c" },
      { text: "würde", value: "d" },
    ],
    correctAnswer: "b", // werde (Konjunktiv I)
  },
  {
    question: "Die Zeitung meldete, der Präsident _____ sich dazu äußern.",
    options: [
      { text: "will", value: "a" },
      { text: "wolle", value: "b" },
      { text: "wollte", value: "c" },
      { text: "würde wollen", value: "d" },
    ],
    correctAnswer: "b", // wolle (Konjunktiv I)
  },
  {
    question: "Er teilte mit, er _____ bald zurückkehren.",
    options: [
      { text: "wird", value: "a" },
      { text: "werde", value: "b" },
      { text: "wurde", value: "c" },
      { text: "würde", value: "d" },
    ],
    correctAnswer: "b", // werde (Konjunktiv I)
  },

  // 7. Direkte Rede ve İndirekte Rede örnekleri
  {
    question: "Paul: 'Ich bin müde.' → Paul sagte, er _____ müde.",
    options: [
      { text: "ist", value: "a" },
      { text: "sei", value: "b" },
      { text: "war", value: "c" },
      { text: "wäre", value: "d" },
    ],
    correctAnswer: "b", // sei (Konjunktiv I)
  },
  {
    question:
      "Maria: 'Ich habe das gemacht.' → Maria behauptete, sie _____ das gemacht.",
    options: [
      { text: "hat", value: "a" },
      { text: "habe", value: "b" },
      { text: "hatte", value: "c" },
      { text: "hätte", value: "d" },
    ],
    correctAnswer: "b", // habe (Konjunktiv I)
  },
  {
    question: "Tom: 'Wir werden gewinnen.' → Tom meinte, sie _____ gewinnen.",
    options: [
      { text: "werden", value: "a" },
      { text: "würden", value: "b" },
      { text: "wurden", value: "c" },
      { text: "sind", value: "d" },
    ],
    correctAnswer: "b", // würden (Konjunktiv II als Ersatz)
  },
  {
    question: "Sie: 'Ich kenne ihn nicht.' → Sie sagte, sie _____ ihn nicht.",
    options: [
      { text: "kennt", value: "a" },
      { text: "kenne", value: "b" },
      { text: "kannte", value: "c" },
      { text: "gekannt", value: "d" },
    ],
    correctAnswer: "b", // kenne (Konjunktiv I)
  },
  {
    question: "Er: 'Ich war dort.' → Er berichtete, er _____ dort gewesen.",
    options: [
      { text: "ist", value: "a" },
      { text: "sei", value: "b" },
      { text: "war", value: "c" },
      { text: "wäre", value: "d" },
    ],
    correctAnswer: "b", // sei gewesen (Konjunktiv I Perfekt)
  },

  // 8. Konjunktiv I ile Farklı Zamanlar - Präsens
  {
    question: "Der Minister erklärte, die Regierung _____ neue Maßnahmen vor.",
    options: [
      { text: "schlägt", value: "a" },
      { text: "schlage", value: "b" },
      { text: "schlug", value: "c" },
      { text: "würde schlagen", value: "d" },
    ],
    correctAnswer: "b", // schlage (Konjunktiv I Präsens)
  },
  {
    question: "Sie sagte, ihr Bruder _____ Arzt werden.",
    options: [
      { text: "will", value: "a" },
      { text: "wolle", value: "b" },
      { text: "wollte", value: "c" },
      { text: "würde wollen", value: "d" },
    ],
    correctAnswer: "b", // wolle (Konjunktiv I Präsens)
  },
  {
    question: "Er berichtete, seine Kollegen _____ sehr fleißig.",
    options: [
      { text: "sind", value: "a" },
      { text: "seien", value: "b" },
      { text: "waren", value: "c" },
      { text: "wären", value: "d" },
    ],
    correctAnswer: "b", // seien (Konjunktiv I Präsens)
  },
  {
    question: "Die Firma teilte mit, sie _____ neue Mitarbeiter ein.",
    options: [
      { text: "stellt", value: "a" },
      { text: "stelle", value: "b" },
      { text: "stellte", value: "c" },
      { text: "würde stellen", value: "d" },
    ],
    correctAnswer: "b", // stelle (Konjunktiv I Präsens)
  },
  {
    question: "Der Zeuge sagte aus, er _____ nichts Verdächtiges bemerkt.",
    options: [
      { text: "hat", value: "a" },
      { text: "habe", value: "b" },
      { text: "hatte", value: "c" },
      { text: "hätte", value: "d" },
    ],
    correctAnswer: "b", // habe (Konjunktiv I Präsens)
  },

  // 9. Konjunktiv I ile Farklı Zamanlar - Perfekt
  {
    question: "Er erzählte, er _____ das Buch schon gelesen.",
    options: [
      { text: "hat", value: "a" },
      { text: "habe", value: "b" },
      { text: "hatte", value: "c" },
      { text: "hätte", value: "d" },
    ],
    correctAnswer: "b", // habe gelesen (Konjunktiv I Perfekt)
  },
  {
    question: "Sie berichtete, ihre Tochter _____ erfolgreich studiert.",
    options: [
      { text: "hat", value: "a" },
      { text: "habe", value: "b" },
      { text: "hatte", value: "c" },
      { text: "hätte", value: "d" },
    ],
    correctAnswer: "b", // habe studiert (Konjunktiv I Perfekt)
  },
  {
    question: "Der Patient sagte, er _____ sich schon besser gefühlt.",
    options: [
      { text: "hat", value: "a" },
      { text: "habe", value: "b" },
      { text: "hatte", value: "c" },
      { text: "hätte", value: "d" },
    ],
    correctAnswer: "b", // habe gefühlt (Konjunktiv I Perfekt)
  },
  {
    question: "Die Polizei meldete, der Dieb _____ gefasst worden.",
    options: [
      { text: "ist", value: "a" },
      { text: "sei", value: "b" },
      { text: "war", value: "c" },
      { text: "wäre", value: "d" },
    ],
    correctAnswer: "b", // sei gefasst worden (Konjunktiv I Perfekt Passiv)
  },
  {
    question: "Er versicherte, er _____ pünktlich angekommen.",
    options: [
      { text: "ist", value: "a" },
      { text: "sei", value: "b" },
      { text: "war", value: "c" },
      { text: "wäre", value: "d" },
    ],
    correctAnswer: "b", // sei angekommen (Konjunktiv I Perfekt)
  },

  // 10. Konjunktiv I ile Farklı Zamanlar - Futur I
  {
    question:
      "Der Politiker versprach, er _____ sich für die Bürger einsetzen.",
    options: [
      { text: "wird", value: "a" },
      { text: "werde", value: "b" },
      { text: "wurde", value: "c" },
      { text: "würde", value: "d" },
    ],
    correctAnswer: "b", // werde einsetzen (Konjunktiv I Futur I)
  },
  {
    question: "Sie kündigte an, sie _____ nächste Woche verreisen.",
    options: [
      { text: "wird", value: "a" },
      { text: "werde", value: "b" },
      { text: "wurde", value: "c" },
      { text: "würde", value: "d" },
    ],
    correctAnswer: "b", // werde verreisen (Konjunktiv I Futur I)
  },
  {
    question: "Der Chef sagte, die Firma _____ neue Produkte entwickeln.",
    options: [
      { text: "wird", value: "a" },
      { text: "werde", value: "b" },
      { text: "wurde", value: "c" },
      { text: "würde", value: "d" },
    ],
    correctAnswer: "b", // werde entwickeln (Konjunktiv I Futur I)
  },
  {
    question: "Er prophezeite, es _____ bald regnen.",
    options: [
      { text: "wird", value: "a" },
      { text: "werde", value: "b" },
      { text: "wurde", value: "c" },
      { text: "würde", value: "d" },
    ],
    correctAnswer: "b", // werde regnen (Konjunktiv I Futur I)
  },
  {
    question: "Die Ärztin erklärte, der Patient _____ sich erholen.",
    options: [
      { text: "wird", value: "a" },
      { text: "werde", value: "b" },
      { text: "wurde", value: "c" },
      { text: "würde", value: "d" },
    ],
    correctAnswer: "b", // werde erholen (Konjunktiv I Futur I)
  },

  // 11. Dolaylı soru cümlesi (İndirekte Frage)
  {
    question: "Er fragte mich, ob ich Zeit _____.",
    options: [
      { text: "habe", value: "a" },
      { text: "hätte", value: "b" },
      { text: "hatte", value: "c" },
      { text: "haben", value: "d" },
    ],
    correctAnswer: "a", // habe (indirekte Frage)
  },
  {
    question: "Sie wollte wissen, wann der Zug _____.",
    options: [
      { text: "abfährt", value: "a" },
      { text: "abfahre", value: "b" },
      { text: "abfuhr", value: "c" },
      { text: "abgefahren", value: "d" },
    ],
    correctAnswer: "a", // abfährt (indirekte Frage)
  },
  {
    question: "Ich fragte ihn, wo er _____.",
    options: [
      { text: "wohnt", value: "a" },
      { text: "wohne", value: "b" },
      { text: "wohnte", value: "c" },
      { text: "gewohnt", value: "d" },
    ],
    correctAnswer: "a", // wohnt (indirekte Frage)
  },
  {
    question: "Sie erkundigte sich, wie viel das _____.",
    options: [
      { text: "kostet", value: "a" },
      { text: "koste", value: "b" },
      { text: "kostete", value: "c" },
      { text: "gekostet", value: "d" },
    ],
    correctAnswer: "a", // kostet (indirekte Frage)
  },
  {
    question: "Er wollte wissen, warum sie nicht _____ sei.",
    options: [
      { text: "kommt", value: "a" },
      { text: "gekommen", value: "b" },
      { text: "kam", value: "c" },
      { text: "kommen", value: "d" },
    ],
    correctAnswer: "b", // gekommen sei (Konjunktiv I in indirekter Frage)
  },

  // 12. Ersetzungsregel (Değiştirme Kuralı)
  {
    question:
      "Sie sagten, sie _____ heute nicht arbeiten. (würden statt Konjunktiv I)",
    options: [
      { text: "können", value: "a" },
      { text: "könnten", value: "b" },
      { text: "konnten", value: "c" },
      { text: "können werden", value: "d" },
    ],
    correctAnswer: "b", // könnten (Konjunktiv II als Ersatz)
  },
  {
    question:
      "Er berichtete, seine Eltern _____ morgen kommen. (würden statt Konjunktiv I)",
    options: [
      { text: "werden", value: "a" },
      { text: "würden", value: "b" },
      { text: "wurden", value: "c" },
      { text: "sind", value: "d" },
    ],
    correctAnswer: "b", // würden (Konjunktiv II als Ersatz)
  },
  {
    question:
      "Sie teilte mit, die Kinder _____ im Garten spielen. (würde + Infinitiv)",
    options: [
      { text: "werden", value: "a" },
      { text: "würden", value: "b" },
      { text: "wurden", value: "c" },
      { text: "spielten", value: "d" },
    ],
    correctAnswer: "b", // würden spielen (würde + Infinitiv)
  },
  {
    question:
      "Der Arzt sagte, er _____ den Patienten untersuchen. (würde + Infinitiv)",
    options: [
      { text: "wird", value: "a" },
      { text: "würde", value: "b" },
      { text: "wurde", value: "c" },
      { text: "untersucht", value: "d" },
    ],
    correctAnswer: "b", // würde untersuchen (würde + Infinitiv)
  },
  {
    question:
      "Die Studenten meinten, sie _____ hart für die Prüfung arbeiten. (müssten statt müssen)",
    options: [
      { text: "müssen", value: "a" },
      { text: "müssten", value: "b" },
      { text: "mussten", value: "c" },
      { text: "gemusst", value: "d" },
    ],
    correctAnswer: "b", // müssten (Konjunktiv II als Ersatz)
  },
  {
    question:
      "_____ er nach Hause kam, hatte seine Frau bereits das Abendessen zubereitet.",
    options: [
      { text: "Als", value: "a" },
      { text: "Wenn", value: "b" },
      { text: "Während", value: "c" },
      { text: "Nachdem", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Als - tek seferlik geçmiş olayları bağlamak için kullanılır",
  },
  {
    question: "Sie arbeitet immer konzentriert, _____ sie Musik hört.",
    options: [
      { text: "bevor", value: "a" },
      { text: "solange", value: "b" },
      { text: "bis", value: "c" },
      { text: "seit", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Solange - eş zamanlı süren eylemleri ifade eder",
  },
  {
    question:
      "_____ du den Bericht fertig geschrieben hast, können wir ihn nicht abschicken.",
    options: [
      { text: "Bevor", value: "a" },
      { text: "Nachdem", value: "b" },
      { text: "Solange", value: "c" },
      { text: "Bis", value: "d" },
    ],
    correctAnswer: "c",
    explanation: "Solange - bir durum devam ettiği sürece anlamında",
  },
  {
    question: "Er wartet schon eine Stunde, _____ der Zug endlich ankommt.",
    options: [
      { text: "bis", value: "a" },
      { text: "bevor", value: "b" },
      { text: "während", value: "c" },
      { text: "sobald", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Bis - bir olay gerçekleşene kadar bekleme ifade eder",
  },
  {
    question:
      "_____ sie das Stipendium erhalten hatte, konnte sie endlich studieren.",
    options: [
      { text: "Bevor", value: "a" },
      { text: "Nachdem", value: "b" },
      { text: "Während", value: "c" },
      { text: "Bis", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Nachdem - bir olayın diğerinden sonra gerçekleştiğini belirtir",
  },

  // 2. Kausalsätze - Sebep cümleleri
  {
    question: "Er konnte nicht kommen, _____ er krank war.",
    options: [
      { text: "weil", value: "a" },
      { text: "da", value: "b" },
      { text: "denn", value: "c" },
      { text: "deshalb", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Weil - sebep yan cümlesi kurar, fiil sonda",
  },
  {
    question: "_____ es stark regnete, blieben wir zu Hause.",
    options: [
      { text: "Weil", value: "a" },
      { text: "Da", value: "b" },
      { text: "Denn", value: "c" },
      { text: "Darum", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Da - cümle başında sebep belirtmek için kullanılır",
  },
  {
    question: "Sie hat die Prüfung bestanden, _____ sie fleißig gelernt hat.",
    options: [
      { text: "denn", value: "a" },
      { text: "weil", value: "b" },
      { text: "da", value: "c" },
      { text: "deshalb", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Weil - sebep yan cümlesi, fiil sonda gelir",
  },
  {
    question: "Er ist müde, _____ er hat die ganze Nacht gearbeitet.",
    options: [
      { text: "weil", value: "a" },
      { text: "da", value: "b" },
      { text: "denn", value: "c" },
      { text: "deshalb", value: "d" },
    ],
    correctAnswer: "c",
    explanation: "Denn - ana cümleyi bağlar, fiil ikinci sırada",
  },
  {
    question: "_____ das Wetter schlecht ist, fahren wir nicht zum Strand.",
    options: [
      { text: "Weil", value: "a" },
      { text: "Denn", value: "b" },
      { text: "Da", value: "c" },
      { text: "Darum", value: "d" },
    ],
    correctAnswer: "c",
    explanation: "Da - cümle başında bilinen sebep belirtir",
  },

  // 3. Konditionalsätze - Şart cümleleri
  {
    question: "_____ du mir hilfst, schaffe ich es rechtzeitig.",
    options: [
      { text: "Wenn", value: "a" },
      { text: "Falls", value: "b" },
      { text: "Sofern", value: "c" },
      { text: "Sollte", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Wenn - genel şart cümlelerinde kullanılır",
  },
  {
    question: "_____ es regnet, nehmen wir den Regenschirm mit.",
    options: [
      { text: "Wenn", value: "a" },
      { text: "Falls", value: "b" },
      { text: "Sofern", value: "c" },
      { text: "Vorausgesetzt", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Falls - olası durumlar için kullanılır",
  },
  {
    question: "Du kannst mitkommen, _____ du pünktlich bist.",
    options: [
      { text: "wenn", value: "a" },
      { text: "falls", value: "b" },
      { text: "sofern", value: "c" },
      { text: "vorausgesetzt", value: "d" },
    ],
    correctAnswer: "c",
    explanation: "Sofern - şart koşarak izin verme",
  },
  {
    question: "_____ er Zeit hätte, würde er uns besuchen.",
    options: [
      { text: "Wenn", value: "a" },
      { text: "Falls", value: "b" },
      { text: "Sofern", value: "c" },
      { text: "Sollte", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Wenn - irreale şart cümleleri için",
  },
  {
    question: "_____ du früher gekommen wärst, hättest du ihn getroffen.",
    options: [
      { text: "Falls", value: "a" },
      { text: "Wenn", value: "b" },
      { text: "Sofern", value: "c" },
      { text: "Vorausgesetzt", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Wenn - geçmişte gerçekleşmemiş şart",
  },

  // 4. Modalsätze - Tarz cümleleri
  {
    question: "Er spricht, _____ er alles wüsste.",
    options: [
      { text: "als ob", value: "a" },
      { text: "wie wenn", value: "b" },
      { text: "als", value: "c" },
      { text: "so dass", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Als ob - sanki, -miş gibi anlamında",
  },
  {
    question: "Sie tut, _____ sie nichts gehört hätte.",
    options: [
      { text: "als", value: "a" },
      { text: "als ob", value: "b" },
      { text: "wie", value: "c" },
      { text: "so wie", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Als ob - gerçek olmayan durumu ifade eder",
  },
  {
    question: "Er verhält sich, _____ wäre er der Chef.",
    options: [
      { text: "als ob", value: "a" },
      { text: "als", value: "b" },
      { text: "wie wenn", value: "c" },
      { text: "so dass", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Als + Konjunktiv - sanki anlamında kısa form",
  },
  {
    question: "_____ vereinbart, treffen wir uns um 15 Uhr.",
    options: [
      { text: "Als", value: "a" },
      { text: "Wie", value: "b" },
      { text: "So wie", value: "c" },
      { text: "Als ob", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Wie - anlaşıldığı/kararlaştırıldığı gibi",
  },
  {
    question: "Er arbeitet, _____ sein Leben davon abhinge.",
    options: [
      { text: "als", value: "a" },
      { text: "als ob", value: "b" },
      { text: "wie", value: "c" },
      { text: "so wie", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Als ob - abartılı durumu ifade eder",
  },

  // 5. Konsekutivsätze - Sonuç cümleleri
  {
    question: "Er ist so müde, _____ er sofort einschläft.",
    options: [
      { text: "so dass", value: "a" },
      { text: "dass", value: "b" },
      { text: "sodass", value: "c" },
      { text: "als dass", value: "d" },
    ],
    correctAnswer: "c",
    explanation: "Sodass - sonuç cümlesi, so...dass yapısında",
  },
  {
    question:
      "Das Problem ist zu kompliziert, _____ wir es schnell lösen könnten.",
    options: [
      { text: "so dass", value: "a" },
      { text: "dass", value: "b" },
      { text: "als dass", value: "c" },
      { text: "sodass", value: "d" },
    ],
    correctAnswer: "c",
    explanation: "Als dass - zu...als dass yapısında olumsuz sonuç",
  },
  {
    question: "Sie sprach so leise, _____ niemand sie verstehen konnte.",
    options: [
      { text: "dass", value: "a" },
      { text: "so dass", value: "b" },
      { text: "als dass", value: "c" },
      { text: "sodass", value: "d" },
    ],
    correctAnswer: "d",
    explanation: "Sodass - so...dass yapısında sonuç",
  },
  {
    question: "Er hat so viel gelernt, _____ er die Prüfung bestanden hat.",
    options: [
      { text: "dass", value: "a" },
      { text: "sodass", value: "b" },
      { text: "so dass", value: "c" },
      { text: "als dass", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Sodass - pozitif sonuç ifade eder",
  },
  {
    question: "Das Buch ist zu schwer, _____ ein Kind es verstehen könnte.",
    options: [
      { text: "sodass", value: "a" },
      { text: "so dass", value: "b" },
      { text: "als dass", value: "c" },
      { text: "dass", value: "d" },
    ],
    correctAnswer: "c",
    explanation: "Als dass - zu...als dass ile imkansızlık",
  },

  // 6. Finalsätze - Amaç cümleleri
  {
    question: "Sie lernt fleißig, _____ sie die Prüfung besteht.",
    options: [
      { text: "damit", value: "a" },
      { text: "um zu", value: "b" },
      { text: "dass", value: "c" },
      { text: "so dass", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Damit - farklı özneli amaç cümlesi",
  },
  {
    question: "Er geht früh ins Bett, _____ ausgeschlafen zu sein.",
    options: [
      { text: "damit", value: "a" },
      { text: "um", value: "b" },
      { text: "dass", value: "c" },
      { text: "so dass", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Um...zu - aynı özneli amaç cümlesi",
  },
  {
    question: "Ich rufe dich an, _____ du Bescheid weißt.",
    options: [
      { text: "um", value: "a" },
      { text: "damit", value: "b" },
      { text: "dass", value: "c" },
      { text: "so dass", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Damit - karşı tarafa yönelik amaç",
  },
  {
    question: "Sie spricht langsam, _____ jeder sie versteht.",
    options: [
      { text: "um zu", value: "a" },
      { text: "damit", value: "b" },
      { text: "dass", value: "c" },
      { text: "sodass", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Damit - başkalarına yönelik amaç",
  },
  {
    question: "Er arbeitet hart, _____ erfolgreich zu werden.",
    options: [
      { text: "damit", value: "a" },
      { text: "um", value: "b" },
      { text: "dass", value: "c" },
      { text: "so dass", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Um...zu - kişisel amaç ifadesi",
  },

  // 7. Konzessivsätze - Karşıtlık cümleleri
  {
    question: "_____ es regnet, gehen wir spazieren.",
    options: [
      { text: "Obwohl", value: "a" },
      { text: "Trotzdem", value: "b" },
      { text: "Dennoch", value: "c" },
      { text: "Aber", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Obwohl - rağmen anlamında yan cümle",
  },
  {
    question: "_____ er krank ist, arbeitet er weiter.",
    options: [
      { text: "Obwohl", value: "a" },
      { text: "Obgleich", value: "b" },
      { text: "Wenngleich", value: "c" },
      { text: "Alle drei", value: "d" },
    ],
    correctAnswer: "d",
    explanation: "Obwohl, obgleich, wenngleich - hepsi 'rağmen' anlamında",
  },
  {
    question: "Er ist müde. _____ arbeitet er weiter.",
    options: [
      { text: "Obwohl", value: "a" },
      { text: "Trotzdem", value: "b" },
      { text: "Obgleich", value: "c" },
      { text: "Wenngleich", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Trotzdem - ana cümleyi bağlayan karşıtlık",
  },
  {
    question: "_____ alle dagegen waren, hat er es gemacht.",
    options: [
      { text: "Obwohl", value: "a" },
      { text: "Trotzdem", value: "b" },
      { text: "Dennoch", value: "c" },
      { text: "Aber", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Obwohl - güçlü karşıtlık ifadesi",
  },
  {
    question: "_____ sie reich ist, ist sie nicht glücklich.",
    options: [
      { text: "Obwohl", value: "a" },
      { text: "Trotzdem", value: "b" },
      { text: "Dennoch", value: "c" },
      { text: "Jedoch", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Obwohl - beklentinin aksine durum",
  },

  {
    question: "_____ sie am Computer arbeitet, hört sie klassische Musik.",
    options: [
      { text: "Während", value: "a" },
      { text: "Als", value: "b" },
      { text: "Wenn", value: "c" },
      { text: "Solange", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Während - şimdiki zamanda eşzamanlı devam eden iki eylem",
  },
  {
    question: "Die Kinder spielen draußen, _____ die Eltern das Haus putzen.",
    options: [
      { text: "als", value: "a" },
      { text: "während", value: "b" },
      { text: "wenn", value: "c" },
      { text: "bevor", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Während - iki eşzamanlı devam eden eylem (çocuklar oynarken, ebeveynler temizliyor)",
  },
  {
    question: "Er liest ein Buch, _____ seine Frau fernsieht.",
    options: [
      { text: "während", value: "a" },
      { text: "als", value: "b" },
      { text: "nachdem", value: "c" },
      { text: "sobald", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Während - eşzamanlı iki farklı eylem (o okurken, karısı TV izliyor)",
  },
  {
    question: "_____ wir auf den Bus warten, können wir uns unterhalten.",
    options: [
      { text: "Als", value: "a" },
      { text: "Während", value: "b" },
      { text: "Wenn", value: "c" },
      { text: "Bis", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Während - otobüs beklerken konuşmak (eşzamanlı eylemler)",
  },
  {
    question: "Sie kocht das Abendessen, _____ ihr Mann den Tisch deckt.",
    options: [
      { text: "bevor", value: "a" },
      { text: "während", value: "b" },
      { text: "nachdem", value: "c" },
      { text: "als", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Während - eş zamanlı iki eylem (o yemek yaparken, kocası masa kuruyor)",
  },
  {
    question: "_____ du hier bist, können wir zusammen arbeiten.",
    options: [
      { text: "Während", value: "a" },
      { text: "Solange", value: "b" },
      { text: "Als", value: "c" },
      { text: "Wenn", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Solange - burada olduğun sürece (şimdi ve gelecekte süreklilik)",
  },
  {
    question: "_____ das Wetter schön ist, werden wir draußen bleiben.",
    options: [
      { text: "Während", value: "a" },
      { text: "Solange", value: "b" },
      { text: "Als", value: "c" },
      { text: "Bis", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Solange - hava güzel olduğu sürece (gelecekte süreklilik)",
  },
  {
    question: "Du kannst hier wohnen, _____ du studierst.",
    options: [
      { text: "während", value: "a" },
      { text: "solange", value: "b" },
      { text: "als", value: "c" },
      { text: "wenn", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Solange - okul okuduğun sürece (sürekli durum)",
  },
  {
    question: "_____ er Geld hat, wird er verschwenderisch leben.",
    options: [
      { text: "Während", value: "a" },
      { text: "Solange", value: "b" },
      { text: "Als", value: "c" },
      { text: "Nachdem", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Solange - parası olduğu sürece (gelecekteki süreklilik)",
  },
  {
    question: "_____ ich lebe, werde ich dich nicht vergessen.",
    options: [
      { text: "Wenn", value: "a" },
      { text: "Solange", value: "b" },
      { text: "Als", value: "c" },
      { text: "Während", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Solange - yaşadığım sürece (yaşam boyu süreklilik)",
  },
  {
    question: "_____ er ein Kind war, spielte er jeden Tag Fußball.",
    options: [
      { text: "Wenn", value: "a" },
      { text: "Als", value: "b" },
      { text: "Während", value: "c" },
      { text: "Solange", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Als - geçmişte belirli bir dönemde eşzamanlı durum (çocukken)",
  },
  {
    question: "_____ sie in Paris wohnte, lernte sie Französisch.",
    options: [
      { text: "Wenn", value: "a" },
      { text: "Als", value: "b" },
      { text: "Während", value: "c" },
      { text: "Solange", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Als - Paris'te yaşadığı dönemde (geçmişte belirli zaman dilimi)",
  },
  {
    question: "_____ das Telefon klingelte, war er gerade beim Duschen.",
    options: [
      { text: "Wenn", value: "a" },
      { text: "Als", value: "b" },
      { text: "Während", value: "c" },
      { text: "Sobald", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Als - telefon çaldığı anda (geçmişte tek seferlik olay)",
  },
  {
    question: "_____ wir jung waren, hatten wir viele Träume.",
    options: [
      { text: "Wenn", value: "a" },
      { text: "Als", value: "b" },
      { text: "Während", value: "c" },
      { text: "Solange", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Als - gençken (geçmişte belirli yaş dönemi)",
  },
  {
    question: "_____ ich zur Schule ging, war ich sehr schüchtern.",
    options: [
      { text: "Als", value: "a" },
      { text: "Wenn", value: "b" },
      { text: "Während", value: "c" },
      { text: "Solange", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Als - okula gittiğim dönemde (geçmişte belirli zaman dilimi)",
  },
  {
    question: "_____ er müde war, ging er früh ins Bett. (her seferinde)",
    options: [
      { text: "Als", value: "a" },
      { text: "Wenn", value: "b" },
      { text: "Während", value: "c" },
      { text: "Solange", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Wenn - yorgun olduğunda (geçmişte tekrarlanan eylem)",
  },
  {
    question:
      "_____ sie Besuch hatten, kochte die Mutter immer etwas Besonderes.",
    options: [
      { text: "Als", value: "a" },
      { text: "Wenn", value: "b" },
      { text: "Während", value: "c" },
      { text: "Bevor", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Wenn - misafir geldiğinde (geçmişte tekrarlanan durum)",
  },
  {
    question: "_____ das Wetter schlecht war, blieben wir zu Hause.",
    options: [
      { text: "Als", value: "a" },
      { text: "Wenn", value: "b" },
      { text: "Während", value: "c" },
      { text: "Solange", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Wenn - hava kötü olduğu zamanlar (tekrarlanan durum)",
  },
  {
    question: "_____ ich Urlaub hatte, bin ich immer ans Meer gefahren.",
    options: [
      { text: "Als", value: "a" },
      { text: "Wenn", value: "b" },
      { text: "Während", value: "c" },
      { text: "Nachdem", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Wenn - tatile çıktığımda (geçmişte tekrarlanan eylem)",
  },
  {
    question: "_____ er zu spät kam, ärgerte sich sein Chef.",
    options: [
      { text: "Als", value: "a" },
      { text: "Wenn", value: "b" },
      { text: "Während", value: "c" },
      { text: "Bevor", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Wenn - geç kaldığında (tekrarlanan durum)",
  },
  {
    question: "_____ es regnet, gehe ich nicht spazieren.",
    options: [
      { text: "Als", value: "a" },
      { text: "Wenn", value: "b" },
      { text: "Während", value: "c" },
      { text: "Solange", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Wenn - yağmur yağdığında (şimdiki zamanda tekrarlanan durum)",
  },
  {
    question: "_____ sie Stress hat, isst sie zu viel.",
    options: [
      { text: "Als", value: "a" },
      { text: "Wenn", value: "b" },
      { text: "Während", value: "c" },
      { text: "Solange", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Wenn - stresli olduğunda (şimdiki zamanda tekrarlanan davranış)",
  },
  {
    question: "_____ er müde ist, trinkt er einen Kaffee.",
    options: [
      { text: "Als", value: "a" },
      { text: "Wenn", value: "b" },
      { text: "Während", value: "c" },
      { text: "Nachdem", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Wenn - yorgun olduğunda (şimdiki zamanda alışkanlık)",
  },
  {
    question: "_____ die Sonne scheint, gehen die Kinder in den Park.",
    options: [
      { text: "Als", value: "a" },
      { text: "Wenn", value: "b" },
      { text: "Während", value: "c" },
      { text: "Solange", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Wenn - güneş açtığında (şimdiki zamanda tekrarlanan eylem)",
  },
  {
    question: "_____ ich Zeit habe, besuche ich meine Großeltern.",
    options: [
      { text: "Als", value: "a" },
      { text: "Wenn", value: "b" },
      { text: "Während", value: "c" },
      { text: "Bis", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Wenn - zamanım olduğunda (şimdiki zamanda tekrarlanan ziyaret)",
  },
  {
    question: "_____ du gehst, solltest du deine Hausaufgaben machen.",
    options: [
      { text: "Nachdem", value: "a" },
      { text: "Bevor", value: "b" },
      { text: "Während", value: "c" },
      { text: "Als", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Bevor - gitmeden önce (gelecek eylemden önce yapılması gereken)",
  },
  {
    question:
      "_____ wir das Haus verlassen, müssen wir alle Fenster schließen.",
    options: [
      { text: "Nachdem", value: "a" },
      { text: "Bevor", value: "b" },
      { text: "Während", value: "c" },
      { text: "Sobald", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Bevor - evden çıkmadan önce (öncelik-sonralık ilişkisi)",
  },
  {
    question: "_____ du eine Entscheidung triffst, solltest du gut überlegen.",
    options: [
      { text: "Nachdem", value: "a" },
      { text: "Bevor", value: "b" },
      { text: "Während", value: "c" },
      { text: "Als", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Bevor - karar vermeden önce (önce düşün, sonra karar ver)",
  },
  {
    question: "_____ der Film beginnt, kaufen wir Popcorn.",
    options: [
      { text: "Nachdem", value: "a" },
      { text: "Bevor", value: "b" },
      { text: "Während", value: "c" },
      { text: "Sobald", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Bevor - film başlamadan önce (zamansal öncelik)",
  },
  {
    question: "_____ sie heiratet, möchte sie die Welt bereisen.",
    options: [
      { text: "Nachdem", value: "a" },
      { text: "Bevor", value: "b" },
      { text: "Während", value: "c" },
      { text: "Als", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Bevor - evlenmeden önce (gelecekteki planlar için öncelik)",
  },
  {
    question: "_____ er das Buch gelesen hatte, schrieb er eine Rezension.",
    options: [
      { text: "Bevor", value: "a" },
      { text: "Nachdem", value: "b" },
      { text: "Während", value: "c" },
      { text: "Als", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Nachdem - kitabı okuduktan sonra (tamamlanmış eylem ardından)",
  },
  {
    question:
      "_____ sie die Prüfung bestanden hatte, feierte sie mit Freunden.",
    options: [
      { text: "Bevor", value: "a" },
      { text: "Nachdem", value: "b" },
      { text: "Während", value: "c" },
      { text: "Als", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Nachdem - sınavı geçtikten sonra (başarı ardından kutlama)",
  },
  {
    question: "_____ wir gegessen hatten, gingen wir spazieren.",
    options: [
      { text: "Bevor", value: "a" },
      { text: "Nachdem", value: "b" },
      { text: "Während", value: "c" },
      { text: "Sobald", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Nachdem - yemek yedikten sonra (tamamlanmış eylem sonrası)",
  },
  {
    question: "_____ er aufgestanden war, duschte er sich.",
    options: [
      { text: "Bevor", value: "a" },
      { text: "Nachdem", value: "b" },
      { text: "Während", value: "c" },
      { text: "Als", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Nachdem - kalktıktan sonra (sabah rutini sırası)",
  },
  {
    question: "_____ sie den Brief erhalten hatte, rief sie sofort an.",
    options: [
      { text: "Bevor", value: "a" },
      { text: "Nachdem", value: "b" },
      { text: "Während", value: "c" },
      { text: "Sobald", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Nachdem - mektubu aldıktan sonra (geçmiş eylem ardından tepki)",
  },
  {
    question: "Ich warte hier, _____ du zurückkommst.",
    options: [
      { text: "bevor", value: "a" },
      { text: "nachdem", value: "b" },
      { text: "bis", value: "c" },
      { text: "während", value: "d" },
    ],
    correctAnswer: "c",
    explanation: "Bis - sen dönene kadar (bir olay gerçekleşene kadar bekleme)",
  },
  {
    question: "Sie arbeitet, _____ es dunkel wird.",
    options: [
      { text: "bevor", value: "a" },
      { text: "bis", value: "b" },
      { text: "nachdem", value: "c" },
      { text: "während", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Bis - hava kararana kadar (zaman sınırı belirtme)",
  },
  {
    question: "Wir bleiben hier, _____ der Regen aufhört.",
    options: [
      { text: "bevor", value: "a" },
      { text: "bis", value: "b" },
      { text: "während", value: "c" },
      { text: "sobald", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Bis - yağmur durана kadar (beklenecek durumun sonu)",
  },
  {
    question: "Du musst lernen, _____ du alles verstehst.",
    options: [
      { text: "bevor", value: "a" },
      { text: "bis", value: "b" },
      { text: "nachdem", value: "c" },
      { text: "während", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Bis - her şeyi anlayана kadar (hedef sınırı)",
  },
  {
    question: "Er spart Geld, _____ er sich ein Auto kaufen kann.",
    options: [
      { text: "bevor", value: "a" },
      { text: "bis", value: "b" },
      { text: "nachdem", value: "c" },
      { text: "sobald", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Bis - araba alabilene kadar (hedefe ulaşana kadar)",
  },
  {
    question: "_____ der Film beginnt, gehen wir ins Kino.",
    options: [
      { text: "Nachdem", value: "a" },
      { text: "Bevor", value: "b" },
      { text: "Sobald", value: "c" },
      { text: "Bis", value: "d" },
    ],
    correctAnswer: "c",
    explanation: "Sobald - film başlar başlamaz (hemen ardından)",
  },
  {
    question: "_____ ich Zeit habe, besuche ich dich.",
    options: [
      { text: "Bevor", value: "a" },
      { text: "Sobald", value: "b" },
      { text: "Bis", value: "c" },
      { text: "Während", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Sobald - zamanım olur olmaz (fırsat bulur bulmaz)",
  },
  {
    question: "_____ das Wetter besser wird, fahren wir an den Strand.",
    options: [
      { text: "Bevor", value: "a" },
      { text: "Sobald", value: "b" },
      { text: "Bis", value: "c" },
      { text: "Nachdem", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Sobald - hava düzelir düzelmez (hemen ardından eylem)",
  },
  {
    question: "_____ er nach Hause kommt, ruft er seine Mutter an.",
    options: [
      { text: "Bevor", value: "a" },
      { text: "Sobald", value: "b" },
      { text: "Während", value: "c" },
      { text: "Bis", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Sobald - eve gelir gelmez (hemen ardından yapılan eylem)",
  },
  {
    question: "_____ die Ergebnisse da sind, informiere ich Sie.",
    options: [
      { text: "Bevor", value: "a" },
      { text: "Sobald", value: "b" },
      { text: "Bis", value: "c" },
      { text: "Nachdem", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Sobald - sonuçlar gelir gelmez (anında bilgilendirme)",
  },
  {
    question: "_____ er in Berlin wohnt, ist er viel glücklicher.",
    options: [
      { text: "Als", value: "a" },
      { text: "Wenn", value: "b" },
      { text: "Seitdem", value: "c" },
      { text: "Während", value: "d" },
    ],
    correctAnswer: "c",
    explanation: "Seitdem - Berlin'de yaşamaya başladığından beri (süreklilik)",
  },
  {
    question: "_____ wir uns kennen, sind wir beste Freunde.",
    options: [
      { text: "Als", value: "a" },
      { text: "Seitdem", value: "b" },
      { text: "Wenn", value: "c" },
      { text: "Während", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Seitdem - tanıştığımızdan beri (geçmişten şimdiye süreklilik)",
  },

  // 1. Ana cümle ve yancümle kullanımları
  {
    question:
      "Er hat den Job angenommen, _____ er sich eine neue Herausforderung wünschte.",
    options: [
      { text: "denn", value: "a" },
      { text: "weil", value: "b" },
      { text: "nämlich", value: "c" },
      { text: "auf Grund", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Weil, yancümlede (Nebensatz) sebep-sonuç ilişkisi kurar ve fiil sonda yer alır.",
  },
  {
    question: "Sie blieb zu Hause, _____ sie sich nicht wohl fühlte.",
    options: [
      { text: "denn", value: "a" },
      { text: "weil", value: "b" },
      { text: "zumal", value: "c" },
      { text: "wegen", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Weil, yancümlede sebep belirtir ve fiil sonda bulunur.",
  },
  {
    question:
      "Er hat das Projekt nicht abgeschlossen, _____ er keine Zeit hatte.",
    options: [
      { text: "nämlich", value: "a" },
      { text: "weil", value: "b" },
      { text: "auf Grund", value: "c" },
      { text: "denn", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Weil, yancümlede sebep-sonuç ilişkisi için kullanılır.",
  },
  {
    question: "Wir haben die Reise abgesagt, _____ die Kosten zu hoch waren.",
    options: [
      { text: "denn", value: "a" },
      { text: "weil", value: "b" },
      { text: "zumal", value: "c" },
      { text: "wegen", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Weil, yancümlede sebep belirtmek için uygun bir bağlaçtır.",
  },
  {
    question:
      "Sie lernte die ganze Nacht, _____ sie die Prüfung bestehen wollte.",
    options: [
      { text: "auf Grund", value: "a" },
      { text: "denn", value: "b" },
      { text: "weil", value: "c" },
      { text: "nämlich", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "Weil, yancümlede sebep-sonuç ilişkisi kurar ve fiil sonda yer alır.",
  },

  // 2. Kausalsätze - Kausale Konnektoren (Sebep Cümleleri - Nedensel Bağlaçlar)
  {
    question: "Er konnte nicht kommen, _____ er krank war.",
    options: [
      { text: "zumal", value: "a" },
      { text: "denn", value: "b" },
      { text: "auf Grund", value: "c" },
      { text: "mangels", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Denn, ana cümlede sebep belirtir ve fiil pozisyonunu değiştirmez.",
  },
  {
    question:
      "Sie hat das Angebot abgelehnt, _____ sie bereits einen besseren Job hatte.",
    options: [
      { text: "weil", value: "a" },
      { text: "denn", value: "b" },
      { text: "wegen", value: "c" },
      { text: "aus", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Denn, ana cümlede sebep-sonuç ilişkisi için kullanılır.",
  },
  {
    question:
      "Die Veranstaltung wurde abgesagt, _____ es zu wenig Anmeldungen gab.",
    options: [
      { text: "zumal", value: "a" },
      { text: "weil", value: "b" },
      { text: "nämlich", value: "c" },
      { text: "auf Grund", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Weil, yancümlede sebep belirtir ve fiil sonda yer alır.",
  },
  {
    question: "Er ist sehr erfolgreich, _____ er hart arbeitet.",
    options: [
      { text: "denn", value: "a" },
      { text: "zumal", value: "b" },
      { text: "wegen", value: "c" },
      { text: "mangels", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Denn, ana cümlede sebep-sonuç ilişkisi kurar.",
  },
  {
    question:
      "Sie hat die Aufgabe übernommen, _____ sie die nötige Erfahrung hat.",
    options: [
      { text: "weil", value: "a" },
      { text: "auf Grund", value: "b" },
      { text: "nämlich", value: "c" },
      { text: "dank", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Weil, yancümlede sebep-sonuç ilişkisi için uygundur.",
  },

  // 3. weil, da, zumal [Nebensatz] Kullanımları
  {
    question: "Er blieb zu Hause, _____ er sich nicht wohl fühlte.",
    options: [
      { text: "zumal", value: "a" },
      { text: "da", value: "b" },
      { text: "denn", value: "c" },
      { text: "wegen", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Da, yancümlede sebep belirtir ve fiil sonda yer alır.",
  },
  {
    question:
      "Sie hat das Projekt abgebrochen, _____ sie keine Unterstützung bekam.",
    options: [
      { text: "weil", value: "a" },
      { text: "denn", value: "b" },
      { text: "zumal", value: "c" },
      { text: "auf Grund", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Weil, yancümlede sebep-sonuç ilişkisi kurar.",
  },
  {
    question: "Er hat sich entschuldigt, _____ er einen Fehler gemacht hatte.",
    options: [
      { text: "da", value: "a" },
      { text: "zumal", value: "b" },
      { text: "denn", value: "c" },
      { text: "wegen", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Da, yancümlede sebep belirtir ve fiil sonda yer alır.",
  },
  {
    question: "Wir konnten nicht teilnehmen, _____ wir keine Zeit hatten.",
    options: [
      { text: "zumal", value: "a" },
      { text: "weil", value: "b" },
      { text: "nämlich", value: "c" },
      { text: "dank", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Weil, yancümlede sebep-sonuç ilişkisi için kullanılır.",
  },
  {
    question:
      "Sie hat das Angebot angenommen, _____ sie eine bessere Chance sah.",
    options: [
      { text: "da", value: "a" },
      { text: "denn", value: "b" },
      { text: "zumal", value: "c" },
      { text: "auf Grund", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Da, yancümlede sebep belirtir ve fiil sonda yer alır.",
  },

  // 4. da kullanımı örnekleri
  {
    question:
      "Er hat die Prüfung nicht bestanden, _____ er nicht genug gelernt hatte.",
    options: [
      { text: "weil", value: "a" },
      { text: "da", value: "b" },
      { text: "denn", value: "c" },
      { text: "zumal", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Da, yancümlede sebep-sonuç ilişkisi kurar ve fiil sonda yer alır.",
  },
  {
    question: "Sie blieb im Büro, _____ sie noch Arbeit zu erledigen hatte.",
    options: [
      { text: "denn", value: "a" },
      { text: "da", value: "b" },
      { text: "wegen", value: "c" },
      { text: "zumal", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Da, yancümlede sebep belirtir ve fiil sonda bulunur.",
  },
  {
    question: "Wir haben die Reise verschoben, _____ das Wetter schlecht war.",
    options: [
      { text: "da", value: "a" },
      { text: "weil", value: "b" },
      { text: "nämlich", value: "c" },
      { text: "auf Grund", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Da, yancümlede sebep-sonuç ilişkisi için uygundur.",
  },
  {
    question:
      "Er hat sich entschieden, zu bleiben, _____ er keine andere Wahl hatte.",
    options: [
      { text: "zumal", value: "a" },
      { text: "da", value: "b" },
      { text: "denn", value: "c" },
      { text: "wegen", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Da, yancümlede sebep belirtir ve fiil sonda yer alır.",
  },
  {
    question:
      "Sie hat die Veranstaltung abgesagt, _____ sie krank geworden war.",
    options: [
      { text: "da", value: "a" },
      { text: "weil", value: "b" },
      { text: "dank", value: "c" },
      { text: "nämlich", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Da, yancümlede sebep-sonuç ilişkisi için kullanılır.",
  },

  // 5. zumal kullanımı ve "weil"den farkı
  {
    question:
      "Er hat das Angebot abgelehnt, _____ er bereits einen besseren Job hatte und keine Zeit für neue Projekte hatte.",
    options: [
      { text: "weil", value: "a" },
      { text: "zumal", value: "b" },
      { text: "denn", value: "c" },
      { text: "da", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Zumal, mevcut bir sebep-sonuç ilişkisine ek bir sebep ekler ve yancümlede kullanılır.",
  },
  {
    question:
      "Sie blieb zu Hause, _____ sie krank war und das Wetter schlecht war.",
    options: [
      { text: "zumal", value: "a" },
      { text: "weil", value: "b" },
      { text: "denn", value: "c" },
      { text: "auf Grund", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Zumal, birden fazla sebebi vurgulamak için kullanılır.",
  },
  {
    question:
      "Wir haben die Reise abgesagt, _____ die Kosten zu hoch waren und wir keine Zeit hatten.",
    options: [
      { text: "da", value: "a" },
      { text: "zumal", value: "b" },
      { text: "weil", value: "c" },
      { text: "nämlich", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Zumal, birden fazla sebep sunarak yancümlede kullanılır.",
  },
  {
    question:
      "Er hat das Projekt nicht übernommen, _____ er keine Erfahrung hatte und die Frist zu kurz war.",
    options: [
      { text: "zumal", value: "a" },
      { text: "da", value: "b" },
      { text: "denn", value: "c" },
      { text: "wegen", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Zumal, ek sebepler sunarak yancümlede kullanılır.",
  },
  {
    question:
      "Sie hat die Einladung abgelehnt, _____ sie bereits Pläne hatte und keine Lust hatte.",
    options: [
      { text: "weil", value: "a" },
      { text: "zumal", value: "b" },
      { text: "dank", value: "c" },
      { text: "auf Grund", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Zumal, mevcut sebebe ek bir sebep ekler ve yancümlede kullanılır.",
  },

  // 6. Ana cümle ve sebep-sonuç ilişkisi
  {
    question: "Er hat den Job gewechselt, _____ er unzufrieden war.",
    options: [
      { text: "weil", value: "a" },
      { text: "denn", value: "b" },
      { text: "zumal", value: "c" },
      { text: "da", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Denn, ana cümlede sebep-sonuç ilişkisi kurar ve fiil pozisyonunu değiştirmez.",
  },
  {
    question: "Sie hat die Prüfung bestanden, _____ sie hart gelernt hat.",
    options: [
      { text: "denn", value: "a" },
      { text: "weil", value: "b" },
      { text: "auf Grund", value: "c" },
      { text: "zumal", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Denn, ana cümlede sebep belirtir.",
  },
  {
    question: "Wir sind nicht gekommen, _____ wir krank waren.",
    options: [
      { text: "da", value: "a" },
      { text: "denn", value: "b" },
      { text: "zumal", value: "c" },
      { text: "wegen", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Denn, ana cümlede sebep-sonuç ilişkisi için kullanılır.",
  },
  {
    question:
      "Er hat das Angebot angenommen, _____ er eine Gehaltserhöhung bekam.",
    options: [
      { text: "denn", value: "a" },
      { text: "weil", value: "b" },
      { text: "zumal", value: "c" },
      { text: "da", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Denn, ana cümlede sebep belirtir.",
  },
  {
    question: "Sie blieb im Büro, _____ sie die Arbeit beenden musste.",
    options: [
      { text: "weil", value: "a" },
      { text: "denn", value: "b" },
      { text: "auf Grund", value: "c" },
      { text: "zumal", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Denn, ana cümlede sebep-sonuç ilişkisi için uygundur.",
  },

  // 7. denn kullanımı
  {
    question: "Er hat das Meeting abgesagt, _____ er keine Zeit hatte.",
    options: [
      { text: "weil", value: "a" },
      { text: "denn", value: "b" },
      { text: "da", value: "c" },
      { text: "zumal", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Denn, ana cümlede sebep belirtir ve fiil pozisyonunu değiştirmez.",
  },
  {
    question:
      "Sie hat die Aufgabe übernommen, _____ sie die nötige Erfahrung hat.",
    options: [
      { text: "denn", value: "a" },
      { text: "weil", value: "b" },
      { text: "zumal", value: "c" },
      { text: "auf Grund", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Denn, ana cümlede sebep-sonuç ilişkisi kurar.",
  },
  {
    question: "Wir sind nicht gekommen, _____ wir krank waren.",
    options: [
      { text: "da", value: "a" },
      { text: "denn", value: "b" },
      { text: "zumal", value: "c" },
      { text: "wegen", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Denn, ana cümlede sebep belirtir.",
  },
  {
    question: "Er hat die Reise abgesagt, _____ die Kosten zu hoch waren.",
    options: [
      { text: "denn", value: "a" },
      { text: "weil", value: "b" },
      { text: "zumal", value: "c" },
      { text: "da", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Denn, ana cümlede sebep-sonuç ilişkisi için kullanılır.",
  },
  {
    question: "Sie hat das Buch gekauft, _____ es sehr interessant war.",
    options: [
      { text: "weil", value: "a" },
      { text: "denn", value: "b" },
      { text: "auf Grund", value: "c" },
      { text: "zumal", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Denn, ana cümlede sebep belirtir.",
  },

  // 8. nämlich kullanımı
  {
    question: "Er ist sehr erfolgreich, er hat _____ hart gearbeitet.",
    options: [
      { text: "nämlich", value: "a" },
      { text: "denn", value: "b" },
      { text: "weil", value: "c" },
      { text: "da", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Nämlich, ana cümlede fiilden hemen sonra yer alarak sebep belirtir.",
  },
  {
    question: "Sie hat die Prüfung bestanden, sie hat _____ viel gelernt.",
    options: [
      { text: "nämlich", value: "a" },
      { text: "weil", value: "b" },
      { text: "denn", value: "c" },
      { text: "zumal", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Nämlich, fiilden hemen sonra yer alarak sebep-sonuç ilişkisi kurar.",
  },
  {
    question: "Er ist nicht gekommen, er war _____ krank.",
    options: [
      { text: "nämlich", value: "a" },
      { text: "da", value: "b" },
      { text: "weil", value: "c" },
      { text: "zumal", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Nämlich, ana cümlede fiilden sonra sebep belirtir.",
  },
  {
    question: "Sie hat den Job gewechselt, sie war _____ unzufrieden.",
    options: [
      { text: "nämlich", value: "a" },
      { text: "denn", value: "b" },
      { text: "weil", value: "c" },
      { text: "auf Grund", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Nämlich, fiilden hemen sonra yer alarak sebep belirtir.",
  },
  {
    question: "Wir haben die Reise abgesagt, wir hatten _____ keine Zeit.",
    options: [
      { text: "nämlich", value: "a" },
      { text: "weil", value: "b" },
      { text: "denn", value: "c" },
      { text: "da", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Nämlich, ana cümlede fiilden sonra sebep-sonuç ilişkisi kurar.",
  },

  // 9. wegen kullanımı (Genitiv ile)
  {
    question: "Er blieb zu Hause _____ des schlechten Wetters.",
    options: [
      { text: "wegen", value: "a" },
      { text: "auf Grund", value: "b" },
      { text: "dank", value: "c" },
      { text: "anlässlich", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Wegen, Genitiv ile kullanılarak sebep belirtir.",
  },
  {
    question: "Sie konnte nicht kommen _____ ihrer Krankheit.",
    options: [
      { text: "wegen", value: "a" },
      { text: "auf Grund", value: "b" },
      { text: "dank", value: "c" },
      { text: "zumal", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Wegen, Genitiv ile sebep-sonuç ilişkisi kurar.",
  },
  {
    question:
      "Die Veranstaltung wurde abgesagt _____ des Mangels an Teilnehmern.",
    options: [
      { text: "wegen", value: "a" },
      { text: "auf Grund", value: "b" },
      { text: "dank", value: "c" },
      { text: "anlässlich", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Wegen, Genitiv ile sebep belirtir.",
  },
  {
    question:
      "Er hat den Job gewechselt _____ der schlechten Arbeitsbedingungen.",
    options: [
      { text: "wegen", value: "a" },
      { text: "auf Grund", value: "b" },
      { text: "dank", value: "c" },
      { text: "zumal", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Wegen, Genitiv ile sebep-sonuç ilişkisi için kullanılır.",
  },
  {
    question: "Sie hat die Reise verschoben _____ des hohen Preises.",
    options: [
      { text: "wegen", value: "a" },
      { text: "auf Grund", value: "b" },
      { text: "dank", value: "c" },
      { text: "anlässlich", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Wegen, Genitiv ile sebep belirtir.",
  },

  // 10. auf Grund kullanımı (Genitiv ile)
  {
    question: "Die Entscheidung wurde getroffen _____ der neuen Informationen.",
    options: [
      { text: "wegen", value: "a" },
      { text: "auf Grund", value: "b" },
      { text: "dank", value: "c" },
      { text: "anlässlich", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Auf Grund, Genitiv ile sebep belirtir ve resmi bir bağlamda kullanılır.",
  },
  {
    question:
      "Er hat das Projekt abgebrochen _____ der fehlenden Finanzierung.",
    options: [
      { text: "auf Grund", value: "a" },
      { text: "wegen", value: "b" },
      { text: "dank", value: "c" },
      { text: "zumal", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Auf Grund, Genitiv ile sebep-sonuç ilişkisi kurar.",
  },
  {
    question:
      "Die Veranstaltung wurde verschoben _____ der schlechten Wetterbedingungen.",
    options: [
      { text: "auf Grund", value: "a" },
      { text: "wegen", value: "b" },
      { text: "dank", value: "c" },
      { text: "anlässlich", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Auf Grund, Genitiv ile sebep belirtir.",
  },
  {
    question:
      "Sie hat den Vertrag unterschrieben _____ der positiven Verhandlungen.",
    options: [
      { text: "wegen", value: "a" },
      { text: "auf Grund", value: "b" },
      { text: "dank", value: "c" },
      { text: "zumal", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Auf Grund, Genitiv ile resmi bir şekilde sebep belirtir.",
  },
  {
    question: "Er blieb im Büro _____ der dringenden Aufgaben.",
    options: [
      { text: "auf Grund", value: "a" },
      { text: "wegen", value: "b" },
      { text: "dank", value: "c" },
      { text: "anlässlich", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Auf Grund, Genitiv ile sebep-sonuç ilişkisi için kullanılır.",
  },

  // 11. Kausale Zusammenhänge (Nedensel İlişkiler)
  {
    question:
      "Er hat den Job gewechselt, _____ er unzufrieden war und eine bessere Gelegenheit fand.",
    options: [
      { text: "zumal", value: "a" },
      { text: "denn", value: "b" },
      { text: "weil", value: "c" },
      { text: "da", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Zumal, birden fazla nedensel ilişkiyi vurgulamak için yancümlede kullanılır.",
  },
  {
    question:
      "Sie hat die Prüfung bestanden, _____ sie intensiv gelernt hatte.",
    options: [
      { text: "weil", value: "a" },
      { text: "denn", value: "b" },
      { text: "zumal", value: "c" },
      { text: "auf Grund", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Weil, yancümlede nedensel ilişki kurar.",
  },
  {
    question:
      "Die Veranstaltung wurde abgesagt, _____ es nicht genug Teilnehmer gab.",
    options: [
      { text: "da", value: "a" },
      { text: "denn", value: "b" },
      { text: "zumal", value: "c" },
      { text: "wegen", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Da, yancümlede nedensel ilişki için kullanılır.",
  },
  {
    question: "Er hat das Angebot angenommen, _____ es sehr attraktiv war.",
    options: [
      { text: "denn", value: "a" },
      { text: "weil", value: "b" },
      { text: "zumal", value: "c" },
      { text: "da", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Denn, ana cümlede nedensel ilişki kurar.",
  },
  {
    question: "Sie blieb zu Hause, _____ sie krank war und Ruhe brauchte.",
    options: [
      { text: "zumal", value: "a" },
      { text: "weil", value: "b" },
      { text: "denn", value: "c" },
      { text: "auf Grund", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Zumal, birden fazla nedensel ilişkiyi vurgulamak için kullanılır.",
  },

  // 12. "als dass" + Konjunktiv II yapısı
  {
    question: "Sie ist zu stolz, als dass sie um Entschuldigung _____ würde.",
    options: [
      { text: "bittet", value: "a" },
      { text: "bitten", value: "b" },
      { text: "gebeten", value: "c" },
      { text: "bat", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Als dass + Konjunktiv II (bitten würde) ile imkânsızlık veya olasılıksızlık ifade edilir.",
  },
  {
    question:
      "Er ist zu schüchtern, als dass er in der Öffentlichkeit _____ würde.",
    options: [
      { text: "spricht", value: "a" },
      { text: "sprechen", value: "b" },
      { text: "gesprochen", value: "c" },
      { text: "sprach", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Als dass + Konjunktiv II (sprechen würde) imkânsızlık belirtir.",
  },
  {
    question:
      "Das Problem ist zu kompliziert, als dass wir es schnell _____ könnten.",
    options: [
      { text: "lösen", value: "a" },
      { text: "gelöst", value: "b" },
      { text: "löst", value: "c" },
      { text: "lösesten", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Als dass + Konjunktiv II (lösen könnten) imkânsızlık ifade eder.",
  },
  {
    question: "Er ist zu beschäftigt, als dass er Zeit für Hobbys _____ hätte.",
    options: [
      { text: "hat", value: "a" },
      { text: "haben", value: "b" },
      { text: "gehabt", value: "c" },
      { text: "hatte", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Als dass + Konjunktiv II (haben hätte) imkânsızlık belirtir.",
  },
  {
    question:
      "Die Aufgabe ist zu schwierig, als dass sie ein Anfänger _____ könnte.",
    options: [
      { text: "löst", value: "a" },
      { text: "lösen", value: "b" },
      { text: "gelöst", value: "c" },
      { text: "löste", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Als dass + Konjunktiv II (lösen könnte) imkânsızlık ifade eder.",
  },

  // 13. deswegen ve eş anlamlıları
  {
    question: "Er hat nicht gelernt, _____ hat er die Prüfung nicht bestanden.",
    options: [
      { text: "deswegen", value: "a" },
      { text: "weil", value: "b" },
      { text: "da", value: "c" },
      { text: "zumal", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Deswegen, sebep-sonuç ilişkisinde sonuç cümlesini başlatır.",
  },
  {
    question: "Das Wetter war schlecht, _____ sind wir zu Hause geblieben.",
    options: [
      { text: "deshalb", value: "a" },
      { text: "weil", value: "b" },
      { text: "denn", value: "c" },
      { text: "da", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Deshalb, sebep-sonuç ilişkisinde sonuç cümlesini başlatır.",
  },
  {
    question: "Er hatte keine Zeit, _____ hat er die Einladung abgelehnt.",
    options: [
      { text: "darum", value: "a" },
      { text: "weil", value: "b" },
      { text: "zumal", value: "c" },
      { text: "denn", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Darum, sebep-sonuç ilişkisinde sonuç cümlesini başlatır.",
  },
  {
    question: "Die Kosten waren zu hoch, _____ wurde die Reise abgesagt.",
    options: [
      { text: "aus diesem Grund", value: "a" },
      { text: "weil", value: "b" },
      { text: "da", value: "c" },
      { text: "zumal", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Aus diesem Grund, sebep-sonuç ilişkisinde sonuç cümlesini başlatır.",
  },
  {
    question: "Er war krank, _____ konnte er nicht kommen.",
    options: [
      { text: "infolgedessen", value: "a" },
      { text: "weil", value: "b" },
      { text: "denn", value: "c" },
      { text: "da", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Infolgedessen, sebep-sonuç ilişkisinde sonuç cümlesini başlatır.",
  },

  // 14. Dank kullanımı
  {
    question: "_____ seiner Hilfe konnten wir das Projekt abschließen.",
    options: [
      { text: "Dank", value: "a" },
      { text: "Wegen", value: "b" },
      { text: "Auf Grund", value: "c" },
      { text: "Anlässlich", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Dank, olumlu bir sebep belirtir ve Genitiv ile kullanılır.",
  },
  {
    question: "_____ ihrer Unterstützung haben wir die Prüfung bestanden.",
    options: [
      { text: "Dank", value: "a" },
      { text: "Wegen", value: "b" },
      { text: "Auf Grund", value: "c" },
      { text: "Zumal", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Dank, olumlu bir sebep-sonuç ilişkisi için Genitiv ile kullanılır.",
  },
  {
    question: "_____ seines Engagements wurde das Team erfolgreich.",
    options: [
      { text: "Dank", value: "a" },
      { text: "Wegen", value: "b" },
      { text: "Auf Grund", value: "c" },
      { text: "Anlässlich", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Dank, olumlu bir sebep belirtir ve Genitiv ile kullanılır.",
  },
  {
    question: "_____ ihrer harten Arbeit haben wir das Ziel erreicht.",
    options: [
      { text: "Dank", value: "a" },
      { text: "Wegen", value: "b" },
      { text: "Auf Grund", value: "c" },
      { text: "Zumal", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Dank, olumlu bir sebep-sonuç ilişkisi için kullanılır.",
  },
  {
    question: "_____ seines Einsatzes konnte das Problem gelöst werden.",
    options: [
      { text: "Dank", value: "a" },
      { text: "Wegen", value: "b" },
      { text: "Auf Grund", value: "c" },
      { text: "Anlässlich", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Dank, olumlu bir sebep belirtir ve Genitiv ile kullanılır.",
  },

  // 15. Sebep-sonuç ilişkisi anlatan Präposition'lar
  {
    question: "Die Veranstaltung wurde abgesagt _____ des schlechten Wetters.",
    options: [
      { text: "wegen", value: "a" },
      { text: "dank", value: "b" },
      { text: "anlässlich", value: "c" },
      { text: "mangels", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Wegen, Genitiv ile sebep-sonuç ilişkisi kurar.",
  },
  {
    question:
      "_____ mangelnder Vorbereitung hat er die Prüfung nicht bestanden.",
    options: [
      { text: "Wegen", value: "a" },
      { text: "Auf Grund", value: "b" },
      { text: "Mangels", value: "c" },
      { text: "Dank", value: "d" },
    ],
    correctAnswer: "c",
    explanation: "Mangels, bir şeyin eksikliği nedeniyle sebep belirtir.",
  },
  {
    question: "_____ seines Geburtstages wurde eine Party organisiert.",
    options: [
      { text: "Anlässlich", value: "a" },
      { text: "Wegen", value: "b" },
      { text: "Auf Grund", value: "c" },
      { text: "Mangels", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Anlässlich, Genitiv ile vesilesiyle/sebeple anlamında kullanılır.",
  },
  {
    question: "Er hat das Projekt übernommen _____ seiner Erfahrung.",
    options: [
      { text: "wegen", value: "a" },
      { text: "auf Grund", value: "b" },
      { text: "dank", value: "c" },
      { text: "mangels", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Auf Grund, Genitiv ile sebep-sonuç ilişkisi kurar.",
  },
  {
    question: "_____ fehlender Ressourcen wurde das Projekt abgebrochen.",
    options: [
      { text: "Wegen", value: "a" },
      { text: "Mangels", value: "b" },
      { text: "Dank", value: "c" },
      { text: "Anlässlich", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Mangels, bir şeyin eksikliği nedeniyle sebep belirtir.",
  },

  // 16. anlässlich + Genitiv
  {
    question: "_____ seines Jubiläums wurde eine Feier organisiert.",
    options: [
      { text: "Anlässlich", value: "a" },
      { text: "Wegen", value: "b" },
      { text: "Auf Grund", value: "c" },
      { text: "Dank", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Anlässlich, Genitiv ile vesilesiyle anlamında kullanılır.",
  },
  {
    question: "_____ der Feierlichkeiten wurde die Straße gesperrt.",
    options: [
      { text: "Anlässlich", value: "a" },
      { text: "Wegen", value: "b" },
      { text: "Auf Grund", value: "c" },
      { text: "Mangels", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Anlässlich, Genitiv ile özel bir olay vesilesiyle kullanılır.",
  },
  {
    question: "_____ des neuen Jahres gab es ein großes Fest.",
    options: [
      { text: "Anlässlich", value: "a" },
      { text: "Wegen", value: "b" },
      { text: "Dank", value: "c" },
      { text: "Auf Grund", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Anlässlich, Genitiv ile vesilesiyle anlamında kullanılır.",
  },
  {
    question: "_____ der Hochzeit wurde ein Empfang organisiert.",
    options: [
      { text: "Anlässlich", value: "a" },
      { text: "Wegen", value: "b" },
      { text: "Auf Grund", value: "c" },
      { text: "Mangels", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Anlässlich, Genitiv ile bir olay vesilesiyle kullanılır.",
  },
  {
    question: "_____ seines Geburtstages gab es eine Überraschungsparty.",
    options: [
      { text: "Anlässlich", value: "a" },
      { text: "Wegen", value: "b" },
      { text: "Dank", value: "c" },
      { text: "Auf Grund", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Anlässlich, Genitiv ile vesilesiyle anlamında kullanılır.",
  },

  // 17. bezüglich + Genitiv
  {
    question: "_____ des neuen Projekts gibt es noch einige Fragen.",
    options: [
      { text: "Bezüglich", value: "a" },
      { text: "Wegen", value: "b" },
      { text: "Auf Grund", value: "c" },
      { text: "Anlässlich", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Bezüglich, Genitiv ile bir konuyla ilgili sebep belirtir.",
  },
  {
    question: "_____ der neuen Regelung wurden Änderungen vorgenommen.",
    options: [
      { text: "Bezüglich", value: "a" },
      { text: "Wegen", value: "b" },
      { text: "Dank", value: "c" },
      { text: "Mangels", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Bezüglich, Genitiv ile bir konuyla ilgili sebep belirtir.",
  },
  {
    question: "_____ des Vertrags gab es mehrere Diskussionen.",
    options: [
      { text: "Bezüglich", value: "a" },
      { text: "Wegen", value: "b" },
      { text: "Auf Grund", value: "c" },
      { text: "Anlässlich", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Bezüglich, Genitiv ile bir konuyla ilgili sebep belirtir.",
  },
  {
    question: "_____ der neuen Strategie wurden Maßnahmen ergriffen.",
    options: [
      { text: "Bezüglich", value: "a" },
      { text: "Wegen", value: "b" },
      { text: "Dank", value: "c" },
      { text: "Auf Grund", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Bezüglich, Genitiv ile bir konuyla ilgili sebep belirtir.",
  },
  {
    question: "_____ des Projekts wurden zusätzliche Mittel bereitgestellt.",
    options: [
      { text: "Bezüglich", value: "a" },
      { text: "Wegen", value: "b" },
      { text: "Auf Grund", value: "c" },
      { text: "Mangels", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Bezüglich, Genitiv ile bir konuyla ilgili sebep belirtir.",
  },

  // 18. mangels + Genitiv / Nullartikel
  {
    question: "Das Projekt wurde abgebrochen _____ mangelnder Finanzierung.",
    options: [
      { text: "wegen", value: "a" },
      { text: "mangels", value: "b" },
      { text: "auf Grund", value: "c" },
      { text: "dank", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Mangels, Genitiv ile bir şeyin eksikliği nedeniyle sebep belirtir.",
  },
  {
    question: "Er konnte nicht teilnehmen _____ mangelnden Interesses.",
    options: [
      { text: "mangels", value: "a" },
      { text: "wegen", value: "b" },
      { text: "auf Grund", value: "c" },
      { text: "anlässlich", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Mangels, Genitiv ile eksiklik sebebiyle kullanılır.",
  },
  {
    question: "Die Veranstaltung wurde abgesagt _____ mangelnder Teilnehmer.",
    options: [
      { text: "mangels", value: "a" },
      { text: "wegen", value: "b" },
      { text: "dank", value: "c" },
      { text: "auf Grund", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Mangels, Genitiv ile eksiklik sebebiyle kullanılır.",
  },
  {
    question: "Er hat das Angebot abgelehnt _____ mangelnder Qualifikation.",
    options: [
      { text: "mangels", value: "a" },
      { text: "wegen", value: "b" },
      { text: "auf Grund", value: "c" },
      { text: "dank", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Mangels, Genitiv ile eksiklik nedeniyle sebep belirtir.",
  },
  {
    question: "Das Vorhaben scheiterte _____ mangelnden Supports.",
    options: [
      { text: "mangels", value: "a" },
      { text: "wegen", value: "b" },
      { text: "auf Grund", value: "c" },
      { text: "anlässlich", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Mangels, Genitiv ile eksiklik sebebiyle kullanılır.",
  },

  // 19. zwecks (Genitiv / Dativ)
  {
    question: "Er hat das Seminar besucht _____ der Weiterbildung.",
    options: [
      { text: "zwecks", value: "a" },
      { text: "wegen", value: "b" },
      { text: "auf Grund", value: "c" },
      { text: "dank", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Zwecks, Genitiv veya Dativ ile amaç/sebep belirtir.",
  },
  {
    question: "Sie hat das Buch gekauft _____ des Studiums.",
    options: [
      { text: "zwecks", value: "a" },
      { text: "wegen", value: "b" },
      { text: "auf Grund", value: "c" },
      { text: "mangels", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Zwecks, Genitiv ile amaç/sebep belirtir.",
  },
  {
    question: "Er ist nach Berlin gereist _____ der Konferenz.",
    options: [
      { text: "zwecks", value: "a" },
      { text: "wegen", value: "b" },
      { text: "auf Grund", value: "c" },
      { text: "anlässlich", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Zwecks, Dativ ile amaç/sebep belirtir.",
  },
  {
    question: "Sie hat einen Kurs belegt _____ ihrer beruflichen Entwicklung.",
    options: [
      { text: "zwecks", value: "a" },
      { text: "wegen", value: "b" },
      { text: "dank", value: "c" },
      { text: "auf Grund", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Zwecks, Genitiv veya Dativ ile amaç/sebep belirtir.",
  },
  {
    question: "Er hat das Meeting organisiert _____ der Zusammenarbeit.",
    options: [
      { text: "zwecks", value: "a" },
      { text: "wegen", value: "b" },
      { text: "auf Grund", value: "c" },
      { text: "mangels", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Zwecks, Dativ ile amaç/sebep belirtir.",
  },

  // 20. um jemandes / einer Sache willen + Genitiv
  {
    question: "Er hat hart gearbeitet _____ seiner Familie willen.",
    options: [
      { text: "um", value: "a" },
      { text: "wegen", value: "b" },
      { text: "auf Grund", value: "c" },
      { text: "dank", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Um ... willen, Genitiv ile bir şey uğruna anlamında kullanılır.",
  },
  {
    question: "Sie hat alles getan _____ ihres Kindes willen.",
    options: [
      { text: "um", value: "a" },
      { text: "wegen", value: "b" },
      { text: "auf Grund", value: "c" },
      { text: "mangels", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Um ... willen, Genitiv ile bir kişi uğruna anlamında kullanılır.",
  },
  {
    question: "Er hat sich geopfert _____ der Freiheit willen.",
    options: [
      { text: "um", value: "a" },
      { text: "wegen", value: "b" },
      { text: "auf Grund", value: "c" },
      { text: "dank", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Um ... willen, Genitiv ile bir ideal uğruna kullanılır.",
  },
  {
    question: "Sie hat das Risiko eingegangen _____ ihres Traums willen.",
    options: [
      { text: "um", value: "a" },
      { text: "wegen", value: "b" },
      { text: "auf Grund", value: "c" },
      { text: "mangels", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Um ... willen, Genitiv ile bir amaç uğruna kullanılır.",
  },
  {
    question: "Er hat gekämpft _____ der Gerechtigkeit willen.",
    options: [
      { text: "um", value: "a" },
      { text: "wegen", value: "b" },
      { text: "auf Grund", value: "c" },
      { text: "dank", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Um ... willen, Genitiv ile bir ideal uğruna kullanılır.",
  },

  // 21. jemandem / etwas zuliebe + Dativ [Postposition]
  {
    question: "Er hat den Job angenommen seiner Familie _____ .",
    options: [
      { text: "zuliebe", value: "a" },
      { text: "wegen", value: "b" },
      { text: "auf Grund", value: "c" },
      { text: "dank", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Zuliebe, Dativ ile postposition olarak bir kişi hatırına kullanılır.",
  },
  {
    question: "Sie hat das Geschenk gekauft ihrem Freund _____ .",
    options: [
      { text: "zuliebe", value: "a" },
      { text: "wegen", value: "b" },
      { text: "auf Grund", value: "c" },
      { text: "mangels", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Zuliebe, Dativ ile bir kişi hatırına kullanılır.",
  },
  {
    question: "Er ist geblieben seinem Chef _____ .",
    options: [
      { text: "zuliebe", value: "a" },
      { text: "wegen", value: "b" },
      { text: "auf Grund", value: "c" },
      { text: "dank", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Zuliebe, Dativ ile postposition olarak kullanılır.",
  },
  {
    question: "Sie hat geholfen ihren Eltern _____ .",
    options: [
      { text: "zuliebe", value: "a" },
      { text: "wegen", value: "b" },
      { text: "auf Grund", value: "c" },
      { text: "mangels", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Zuliebe, Dativ ile bir kişi hatırına kullanılır.",
  },
  {
    question: "Er hat das Opfer gebracht seiner Liebe _____ .",
    options: [
      { text: "zuliebe", value: "a" },
      { text: "wegen", value: "b" },
      { text: "auf Grund", value: "c" },
      { text: "dank", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Zuliebe, Dativ ile postposition olarak kullanılır.",
  },

  // 22. zufolge (Postposition + Dativ)
  {
    question:
      "_____ den aktuellen Berichten zufolge wird das Projekt fortgesetzt.",
    options: [
      { text: "Wegen", value: "a" },
      { text: "Auf Grund", value: "b" },
      { text: "Dank", value: "c" },
      { text: "Den", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "Zufolge, Dativ ile postposition olarak bir kaynağa göre kullanılır.",
  },
  {
    question: "_____ den Experten zufolge ist die Lage stabil.",
    options: [
      { text: "Den", value: "a" },
      { text: "Wegen", value: "b" },
      { text: "Auf Grund", value: "c" },
      { text: "Dank", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Zufolge, Dativ ile bir kaynağa göre anlamında kullanılır.",
  },
  {
    question: "_____ den Statistiken zufolge steigt die Arbeitslosigkeit.",
    options: [
      { text: "Den", value: "a" },
      { text: "Wegen", value: "b" },
      { text: "Auf Grund", value: "c" },
      { text: "Mangels", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Zufolge, Dativ ile postposition olarak kullanılır.",
  },
  {
    question: "_____ den Prognosen zufolge wird es morgen regnen.",
    options: [
      { text: "Den", value: "a" },
      { text: "Wegen", value: "b" },
      { text: "Auf Grund", value: "c" },
      { text: "Dank", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Zufolge, Dativ ile bir kaynağa göre anlamında kullanılır.",
  },
  {
    question:
      "_____ den Informationen zufolge wurde das Projekt abgeschlossen.",
    options: [
      { text: "Den", value: "a" },
      { text: "Wegen", value: "b" },
      { text: "Auf Grund", value: "c" },
      { text: "Mangels", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Zufolge, Dativ ile postposition olarak bir kaynağa göre kullanılır.",
  },

  // 23. "aus" ve "vor" ile sebep-sonuç ilişkisi
  {
    question: "Er blieb zu Hause _____ Angst vor dem Sturm.",
    options: [
      { text: "aus", value: "a" },
      { text: "vor", value: "b" },
      { text: "wegen", value: "c" },
      { text: "auf Grund", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Vor, Nullartikel ile korku gibi duygusal sebepler için kullanılır.",
  },
  {
    question: "Sie hat geweint _____ Trauer.",
    options: [
      { text: "aus", value: "a" },
      { text: "vor", value: "b" },
      { text: "wegen", value: "c" },
      { text: "dank", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Aus, Nullartikel ile duygusal sebepler için kullanılır.",
  },
  {
    question: "Er hat das Angebot abgelehnt _____ Mangel an Vertrauen.",
    options: [
      { text: "aus", value: "a" },
      { text: "vor", value: "b" },
      { text: "wegen", value: "c" },
      { text: "auf Grund", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Aus, Nullartikel ile eksiklik veya sebep belirtir.",
  },
  {
    question: "Sie konnte nicht schlafen _____ Sorge um ihre Familie.",
    options: [
      { text: "aus", value: "a" },
      { text: "vor", value: "b" },
      { text: "wegen", value: "c" },
      { text: "dank", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Aus, Nullartikel ile duygusal sebepler için kullanılır.",
  },
  {
    question: "Er hat gezögert _____ Furcht vor dem Versagen.",
    options: [
      { text: "aus", value: "a" },
      { text: "vor", value: "b" },
      { text: "wegen", value: "c" },
      { text: "auf Grund", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Vor, Nullartikel ile korku gibi duygusal sebepler için kullanılır.",
  },

  // 1. Ana cümle ve yan cümle kullanımları (1 konu, 5 soru)
  {
    question:
      "Er hat das Ziel erreicht, _____ er systematisch und diszipliniert arbeitete.",
    options: [
      { text: "indem", value: "a" },
      { text: "dadurch, dass", value: "b" },
      { text: "weil", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Indem, yancümlede eylem veya durumun nasıl (methode) gerçekleştiğini belirtir ve fiil sonda yer alır.",
  },
  {
    question:
      "Sie hat die Prüfung bestanden, _____ sie intensiv und gezielt lernte.",
    options: [
      { text: "dadurch, dass", value: "a" },
      { text: "indem", value: "b" },
      { text: "weil", value: "c" },
      { text: "durch", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Indem, yancümlede yöntemi (methode) belirtir ve fiil sonda yer alır.",
  },
  {
    question:
      "Die Firma hat Kosten gespart, _____ sie neue Technologien einsetzte.",
    options: [
      { text: "dadurch, dass", value: "a" },
      { text: "indem", value: "b" },
      { text: "weil", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Indem, yancümlede yöntemi (methode) ifade eder ve fiil sonda bulunur.",
  },
  {
    question:
      "Er hat die Aufgabe erledigt, _____ er die Anweisungen genau befolgte.",
    options: [
      { text: "indem", value: "a" },
      { text: "dadurch, dass", value: "b" },
      { text: "weil", value: "c" },
      { text: "durch", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Indem, yancümlede eylem veya durumun nasıl gerçekleştiğini (methode) belirtir.",
  },
  {
    question:
      "Sie hat ihre Sprachkenntnisse verbessert, _____ sie täglich übte.",
    options: [
      { text: "dadurch, dass", value: "a" },
      { text: "indem", value: "b" },
      { text: "weil", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Indem, yancümlede yöntemi (methode) belirtir ve fiil sonda yer alır.",
  },

  // 2. Modalsätze – Modale Konnektoren: Modalsatz tanımı (5 soru)
  {
    question:
      "Er hat das Publikum überzeugt, _____ er klare Argumente vorbrachte.",
    options: [
      { text: "indem", value: "a" },
      { text: "dadurch, dass", value: "b" },
      { text: "weil", value: "c" },
      { text: "durch", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Indem, modalsatz olarak eylem veya durumun nasıl gerçekleştiğini (methode) ifade eder.",
  },
  {
    question:
      "Sie hat den Vertrag gewonnen, _____ sie professionell verhandelte.",
    options: [
      { text: "dadurch, dass", value: "a" },
      { text: "indem", value: "b" },
      { text: "weil", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Indem, modalsatz olarak yöntemi (methode) belirtir ve fiil sonda yer alır.",
  },
  {
    question: "Er hat die Krise gemeistert, _____ er schnell reagierte.",
    options: [
      { text: "indem", value: "a" },
      { text: "dadurch, dass", value: "b" },
      { text: "weil", value: "c" },
      { text: "durch", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Indem, modalsatz olarak eylem veya durumun nasıl gerçekleştiğini ifade eder.",
  },
  {
    question:
      "Die Firma hat ihren Ruf verbessert, _____ sie transparente Kommunikation betrieb.",
    options: [
      { text: "dadurch, dass", value: "a" },
      { text: "indem", value: "b" },
      { text: "weil", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Indem, modalsatz olarak yöntemi (methode) belirtir.",
  },
  {
    question: "Er hat das Team motiviert, _____ er klare Ziele setzte.",
    options: [
      { text: "indem", value: "a" },
      { text: "dadurch, dass", value: "b" },
      { text: "weil", value: "c" },
      { text: "durch", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Indem, modalsatz olarak eylem veya durumun nasıl gerçekleştiğini ifade eder.",
  },

  // 3. Modalsätze – Modale Konnektoren: Temel bağlaçlar (5 soru)
  {
    question:
      "Sie hat die Aufgabe schnell erledigt, _____ sie effizient arbeitete.",
    options: [
      { text: "dadurch, dass", value: "a" },
      { text: "indem", value: "b" },
      { text: "weil", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Indem, modalsatz bağlacı olarak yöntemi (methode) belirtir ve fiil sonda yer alır.",
  },
  {
    question:
      "Er hat die Kunden überzeugt, _____ er ihre Bedürfnisse genau analysierte.",
    options: [
      { text: "indem", value: "a" },
      { text: "dadurch, dass", value: "b" },
      { text: "weil", value: "c" },
      { text: "durch", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Indem, modalsatz bağlacı olarak yöntemi ifade eder.",
  },
  {
    question:
      "Die Firma hat Gewinne gesteigert, _____ sie neue Märkte erschloss.",
    options: [
      { text: "dadurch, dass", value: "a" },
      { text: "indem", value: "b" },
      { text: "weil", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Indem, modalsatz bağlacı olarak yöntemi belirtir.",
  },
  {
    question: "Er hat den Konflikt gelöst, _____ er beide Seiten anhörte.",
    options: [
      { text: "indem", value: "a" },
      { text: "dadurch, dass", value: "b" },
      { text: "weil", value: "c" },
      { text: "durch", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Indem, modalsatz bağlacı olarak yöntemi ifade eder.",
  },
  {
    question:
      "Sie hat ihre Gesundheit verbessert, _____ sie regelmäßig Sport trieb.",
    options: [
      { text: "dadurch, dass", value: "a" },
      { text: "indem", value: "b" },
      { text: "weil", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Indem, modalsatz bağlacı olarak yöntemi belirtir ve fiil sonda yer alır.",
  },

  // 4. "dadurch … dass" ve "indem" yancümleleri: Kullanım örnekleri (5 soru)
  {
    question:
      "Er hat das Vertrauen gewonnen, _____ er ehrlich und offen sprach.",
    options: [
      { text: "indem", value: "a" },
      { text: "dadurch, dass", value: "b" },
      { text: "weil", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Indem, modalsatz olarak yöntemi (methode) ifade eder ve fiil sonda yer alır.",
  },
  {
    question: "Sie hat die Aufgabe erledigt, _____ sie die Zeit gut einteilte.",
    options: [
      { text: "dadurch, dass", value: "a" },
      { text: "indem", value: "b" },
      { text: "weil", value: "c" },
      { text: "durch", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Indem, modalsatz bağlacı olarak yöntemi belirtir.",
  },
  {
    question:
      "Die Firma hat Kosten gesenkt, _____ sie auf digitale Prozesse umstieg.",
    options: [
      { text: "indem", value: "a" },
      { text: "dadurch, dass", value: "b" },
      { text: "weil", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Indem, modalsatz olarak yöntemi ifade eder.",
  },
  {
    question: "Er hat die Prüfung bestanden, _____ er gezielt lernte.",
    options: [
      { text: "dadurch, dass", value: "a" },
      { text: "indem", value: "b" },
      { text: "weil", value: "c" },
      { text: "durch", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Indem, modalsatz bağlacı olarak yöntemi belirtir.",
  },
  {
    question:
      "Sie hat das Team motiviert, _____ sie inspirierende Reden hielt.",
    options: [
      { text: "indem", value: "a" },
      { text: "dadurch, dass", value: "b" },
      { text: "weil", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Indem, modalsatz olarak yöntemi ifade eder ve fiil sonda yer alır.",
  },

  // 5. "dadurch … dass" ve "indem" yancümleleri: Aynı anlamı ifade eden farklı yapılar (5 soru)
  {
    question:
      "Er hat die Aufgabe gelöst, _____ er die Anweisungen genau befolgte.",
    options: [
      { text: "dadurch, dass", value: "a" },
      { text: "indem", value: "b" },
      { text: "weil", value: "c" },
      { text: "durch", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Dadurch, dass, modalsatz olarak yöntemi ifade eder ve indem ile aynı anlamı verebilir.",
  },
  {
    question:
      "Sie hat ihre Sprachkenntnisse verbessert, _____ sie täglich übte.",
    options: [
      { text: "indem", value: "a" },
      { text: "dadurch, dass", value: "b" },
      { text: "weil", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Dadurch, dass, modalsatz olarak yöntemi belirtir ve indem ile aynı anlamı ifade edebilir.",
  },
  {
    question:
      "Die Firma hat Gewinne erzielt, _____ sie innovative Strategien verfolgte.",
    options: [
      { text: "dadurch, dass", value: "a" },
      { text: "indem", value: "b" },
      { text: "weil", value: "c" },
      { text: "durch", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Dadurch, dass, modalsatz olarak yöntemi ifade eder ve indem ile değiştirilebilir.",
  },
  {
    question:
      "Er hat das Vertrauen gewonnen, _____ er transparent kommunizierte.",
    options: [
      { text: "indem", value: "a" },
      { text: "dadurch, dass", value: "b" },
      { text: "weil", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Dadurch, dass, modalsatz olarak yöntemi belirtir ve indem ile aynı anlamı verebilir.",
  },
  {
    question: "Sie hat die Krise überwunden, _____ sie schnell handelte.",
    options: [
      { text: "dadurch, dass", value: "a" },
      { text: "indem", value: "b" },
      { text: "weil", value: "c" },
      { text: "durch", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Dadurch, dass, modalsatz olarak yöntemi ifade eder ve indem ile değiştirilebilir.",
  },

  // 6. Zarf / Adverb olarak "dadurch": İki ana cümleyle ifade (5 soru)
  {
    question: "Er hat hart gearbeitet. _____ hat er das Ziel erreicht.",
    options: [
      { text: "Dadurch", value: "a" },
      { text: "Indem", value: "b" },
      { text: "Weil", value: "c" },
      { text: "Damit", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Dadurch, zarf olarak iki ana cümle arasında yöntemi (methode) ifade eder.",
  },
  {
    question: "Sie hat intensiv gelernt. _____ hat sie die Prüfung bestanden.",
    options: [
      { text: "Dadurch", value: "a" },
      { text: "Indem", value: "b" },
      { text: "Weil", value: "c" },
      { text: "Durch", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Dadurch, zarf olarak yöntemi ifade eder ve iki ana cümleyi bağlar.",
  },
  {
    question:
      "Die Firma hat neue Technologien eingesetzt. _____ hat sie Kosten gespart.",
    options: [
      { text: "Dadurch", value: "a" },
      { text: "Indem", value: "b" },
      { text: "Weil", value: "c" },
      { text: "Damit", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Dadurch, zarf olarak yöntemi belirtir ve iki ana cümleyi bağlar.",
  },
  {
    question:
      "Er hat die Anweisungen befolgt. _____ hat er die Aufgabe erledigt.",
    options: [
      { text: "Dadurch", value: "a" },
      { text: "Indem", value: "b" },
      { text: "Weil", value: "c" },
      { text: "Durch", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Dadurch, zarf olarak yöntemi ifade eder ve iki ana cümleyi bağlar.",
  },
  {
    question:
      "Sie hat täglich geübt. _____ hat sie ihre Sprachkenntnisse verbessert.",
    options: [
      { text: "Dadurch", value: "a" },
      { text: "Indem", value: "b" },
      { text: "Weil", value: "c" },
      { text: "Damit", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Dadurch, zarf olarak yöntemi belirtir ve iki ana cümleyi bağlar.",
  },

  // 7. Zarf / Adverb olarak "dadurch": Dadurch zarfının kullanımı (5 soru)
  {
    question:
      "Er hat effizient gearbeitet und _____ das Projekt rechtzeitig abgeschlossen.",
    options: [
      { text: "dadurch", value: "a" },
      { text: "indem", value: "b" },
      { text: "weil", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Dadurch, zarf olarak yöntemi ifade eder ve ana cümlede kullanılır.",
  },
  {
    question:
      "Sie hat klare Argumente vorgebracht und _____ das Publikum überzeugt.",
    options: [
      { text: "dadurch", value: "a" },
      { text: "indem", value: "b" },
      { text: "weil", value: "c" },
      { text: "durch", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Dadurch, zarf olarak yöntemi belirtir ve ana cümlede kullanılır.",
  },
  {
    question:
      "Die Firma hat digitale Prozesse eingeführt und _____ Kosten gesenkt.",
    options: [
      { text: "dadurch", value: "a" },
      { text: "indem", value: "b" },
      { text: "weil", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Dadurch, zarf olarak yöntemi ifade eder ve ana cümlede kullanılır.",
  },
  {
    question: "Er hat schnell reagiert und _____ die Krise gemeistert.",
    options: [
      { text: "dadurch", value: "a" },
      { text: "indem", value: "b" },
      { text: "weil", value: "c" },
      { text: "durch", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Dadurch, zarf olarak yöntemi belirtir ve ana cümlede kullanılır.",
  },
  {
    question:
      "Sie hat regelmäßig trainiert und _____ ihre Gesundheit verbessert.",
    options: [
      { text: "dadurch", value: "a" },
      { text: "indem", value: "b" },
      { text: "weil", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Dadurch, zarf olarak yöntemi ifade eder ve ana cümlede kullanılır.",
  },

  // 8. Zarf / Adverb olarak "dadurch": Alternatif zarflar (damit, so) (5 soru)
  {
    question: "Er hat klare Ziele gesetzt und _____ das Team motiviert.",
    options: [
      { text: "dadurch", value: "a" },
      { text: "so", value: "b" },
      { text: "indem", value: "c" },
      { text: "weil", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "So, zarf olarak yöntemi ifade eder ve dadurch yerine kullanılabilir.",
  },
  {
    question:
      "Sie hat professionell verhandelt und _____ den Vertrag gewonnen.",
    options: [
      { text: "damit", value: "a" },
      { text: "dadurch", value: "b" },
      { text: "indem", value: "c" },
      { text: "weil", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Dadurch, zarf olarak yöntemi ifade eder, ancak damit de benzer bir bağlamda kullanılabilir.",
  },
  {
    question:
      "Die Firma hat neue Märkte erschlossen und _____ Gewinne erzielt.",
    options: [
      { text: "so", value: "a" },
      { text: "dadurch", value: "b" },
      { text: "indem", value: "c" },
      { text: "weil", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "So, zarf olarak yöntemi ifade eder ve dadurch yerine kullanılabilir.",
  },
  {
    question: "Er hat beide Seiten angehört und _____ den Konflikt gelöst.",
    options: [
      { text: "dadurch", value: "a" },
      { text: "so", value: "b" },
      { text: "indem", value: "c" },
      { text: "weil", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "So, zarf olarak yöntemi ifade eder ve dadurch ile değiştirilebilir.",
  },
  {
    question:
      "Sie hat täglich geübt und _____ ihre Sprachkenntnisse verbessert.",
    options: [
      { text: "damit", value: "a" },
      { text: "dadurch", value: "b" },
      { text: "indem", value: "c" },
      { text: "weil", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Dadurch, zarf olarak yöntemi ifade eder, ancak so da kullanılabilir.",
  },

  // 9. Modalsatz mit Nominalstil: Tek cümleyle ifade (5 soru)
  {
    question: "Er hat das Ziel _____ systematischer Arbeit erreicht.",
    options: [
      { text: "durch", value: "a" },
      { text: "indem", value: "b" },
      { text: "dadurch, dass", value: "c" },
      { text: "weil", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Durch + Akkusativ, nominalstil ile yöntemi tek cümlede ifade eder.",
  },
  {
    question: "Sie hat die Prüfung _____ intensiven Lernens bestanden.",
    options: [
      { text: "durch", value: "a" },
      { text: "indem", value: "b" },
      { text: "dadurch, dass", value: "c" },
      { text: "weil", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Durch + Akkusativ, nominalstil ile yöntemi tek cümlede belirtir.",
  },
  {
    question:
      "Die Firma hat Kosten _____ den Einsatz neuer Technologien gespart.",
    options: [
      { text: "durch", value: "a" },
      { text: "indem", value: "b" },
      { text: "dadurch, dass", value: "c" },
      { text: "weil", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Durch + Akkusativ, nominalstil ile yöntemi ifade eder.",
  },
  {
    question:
      "Er hat die Aufgabe _____ genaues Befolgen der Anweisungen erledigt.",
    options: [
      { text: "durch", value: "a" },
      { text: "indem", value: "b" },
      { text: "dadurch, dass", value: "c" },
      { text: "weil", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Durch + Akkusativ, nominalstil ile yöntemi tek cümlede belirtir.",
  },
  {
    question: "Sie hat ihre Sprachkenntnisse _____ tägliches Üben verbessert.",
    options: [
      { text: "durch", value: "a" },
      { text: "indem", value: "b" },
      { text: "dadurch, dass", value: "c" },
      { text: "weil", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Durch + Akkusativ, nominalstil ile yöntemi ifade eder.",
  },

  // 10. Modalsatz mit Nominalstil: Präposition + isim yapısı (5 soru)
  {
    question:
      "Die Firma hat Gewinne _____ Einführung neuer Strategien erzielt.",
    options: [
      { text: "durch", value: "a" },
      { text: "indem", value: "b" },
      { text: "dadurch, dass", value: "c" },
      { text: "weil", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Durch + Akkusativ, nominalstil ile yöntemi ifade eder.",
  },
  {
    question: "Er hat das Vertrauen _____ transparente Kommunikation gewonnen.",
    options: [
      { text: "durch", value: "a" },
      { text: "indem", value: "b" },
      { text: "dadurch, dass", value: "c" },
      { text: "weil", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Durch + Akkusativ, nominalstil ile yöntemi belirtir.",
  },
  {
    question: "Sie hat die Krise _____ schnelles Handeln überwunden.",
    options: [
      { text: "durch", value: "a" },
      { text: "indem", value: "b" },
      { text: "dadurch, dass", value: "c" },
      { text: "weil", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Durch + Akkusativ, nominalstil ile yöntemi ifade eder.",
  },
  {
    question: "Er hat das Team motiviert _____ klare Zielsetzung.",
    options: [
      { text: "durch", value: "a" },
      { text: "indem", value: "b" },
      { text: "dadurch, dass", value: "c" },
      { text: "weil", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Durch + Akkusativ, nominalstil ile yöntemi belirtir.",
  },
  {
    question: "Sie hat die Prüfung _____ gezieltes Lernen bestanden.",
    options: [
      { text: "durch", value: "a" },
      { text: "indem", value: "b" },
      { text: "dadurch, dass", value: "c" },
      { text: "weil", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Durch + Akkusativ, nominalstil ile yöntemi ifade eder.",
  },

  // 11. Modalsatz mit Nominalstil: Kullanılabilecek edatlar (5 soru)
  {
    question: "Er hat das Ziel _____ systematischer Planung erreicht.",
    options: [
      { text: "durch", value: "a" },
      { text: "mit", value: "b" },
      { text: "unter", value: "c" },
      { text: "mittels", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Durch + Akkusativ, nominalstil ile yöntemi ifade eder.",
  },
  {
    question:
      "Sie hat die Aufgabe _____ Einsatz moderner Technologien erledigt.",
    options: [
      { text: "durch", value: "a" },
      { text: "mit", value: "b" },
      { text: "unter", value: "c" },
      { text: "mittels", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Mit + Dativ, nominalstil ile yöntemi belirtir.",
  },
  {
    question: "Die Firma hat Kosten _____ Nutzung digitaler Prozesse gesenkt.",
    options: [
      { text: "durch", value: "a" },
      { text: "mit", value: "b" },
      { text: "unter", value: "c" },
      { text: "mittels", value: "d" },
    ],
    correctAnswer: "c",
    explanation: "Unter + Akkusativ, nominalstil ile yöntemi ifade eder.",
  },
  {
    question: "Er hat das Vertrauen _____ Anwendung neuer Methoden gewonnen.",
    options: [
      { text: "durch", value: "a" },
      { text: "mit", value: "b" },
      { text: "unter", value: "c" },
      { text: "mittels", value: "d" },
    ],
    correctAnswer: "d",
    explanation: "Mittels + Genitiv, nominalstil ile yöntemi belirtir.",
  },
  {
    question: "Sie hat die Prüfung _____ gezielter Vorbereitung bestanden.",
    options: [
      { text: "durch", value: "a" },
      { text: "mit", value: "b" },
      { text: "unter", value: "c" },
      { text: "mittels", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Durch + Akkusativ, nominalstil ile yöntemi ifade eder.",
  },

  // 12. "dadurch … dass" ve "indem" arasındaki fark: Mittel/Methode (5 soru)
  {
    question: "Er hat das Ziel erreicht, _____ er systematisch arbeitete.",
    options: [
      { text: "dadurch, dass", value: "a" },
      { text: "indem", value: "b" },
      { text: "weil", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Indem, modalsatz olarak yöntemi (methode) ifade eder ve dadurch, dass ile değiştirilebilir.",
  },
  {
    question: "Sie hat die Prüfung bestanden, _____ sie intensiv lernte.",
    options: [
      { text: "indem", value: "a" },
      { text: "dadurch, dass", value: "b" },
      { text: "weil", value: "c" },
      { text: "durch", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Indem, modalsatz olarak yöntemi belirtir ve dadurch, dass ile aynı anlamı verebilir.",
  },
  {
    question:
      "Die Firma hat Kosten gesenkt, _____ sie digitale Prozesse einsetzte.",
    options: [
      { text: "dadurch, dass", value: "a" },
      { text: "indem", value: "b" },
      { text: "weil", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Indem, modalsatz olarak yöntemi ifade eder ve dadurch, dass ile değiştirilebilir.",
  },
  {
    question:
      "Er hat das Vertrauen gewonnen, _____ er transparent kommunizierte.",
    options: [
      { text: "indem", value: "a" },
      { text: "dadurch, dass", value: "b" },
      { text: "weil", value: "c" },
      { text: "durch", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Indem, modalsatz olarak yöntemi belirtir ve dadurch, dass ile aynı anlamı verebilir.",
  },
  {
    question: "Sie hat die Krise überwunden, _____ sie schnell handelte.",
    options: [
      { text: "dadurch, dass", value: "a" },
      { text: "indem", value: "b" },
      { text: "weil", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Indem, modalsatz olarak yöntemi ifade eder ve dadurch, dass ile değiştirilebilir.",
  },

  // 13. "dadurch … dass" ve "indem" arasındaki fark: Ursache/Sebep (5 soru)
  {
    question:
      "Er hat das Projekt nicht abgeschlossen, _____ er keine Zeit hatte.",
    options: [
      { text: "dadurch, dass", value: "a" },
      { text: "indem", value: "b" },
      { text: "weil", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Dadurch, dass, sebep (ursache) ifade edebilir, ancak indem bu bağlamda kullanılamaz.",
  },
  {
    question:
      "Sie hat die Prüfung nicht bestanden, _____ sie nicht genug gelernt hatte.",
    options: [
      { text: "weil", value: "a" },
      { text: "indem", value: "b" },
      { text: "dadurch, dass", value: "c" },
      { text: "durch", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "Dadurch, dass, sebep (ursache) belirtir ve weil ile aynı anlamı verebilir.",
  },
  {
    question:
      "Die Veranstaltung wurde abgesagt, _____ es zu wenig Anmeldungen gab.",
    options: [
      { text: "dadurch, dass", value: "a" },
      { text: "indem", value: "b" },
      { text: "weil", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "Weil, sebep (ursache) ifade eder ve dadurch, dass ile değiştirilebilir.",
  },
  {
    question: "Er konnte nicht kommen, _____ er krank war.",
    options: [
      { text: "indem", value: "a" },
      { text: "dadurch, dass", value: "b" },
      { text: "weil", value: "c" },
      { text: "durch", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Dadurch, dass, sebep (ursache) ifade edebilir, ancak indem bu bağlamda kullanılamaz.",
  },
  {
    question:
      "Sie hat das Angebot abgelehnt, _____ sie bereits einen anderen Job hatte.",
    options: [
      { text: "weil", value: "a" },
      { text: "indem", value: "b" },
      { text: "dadurch, dass", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Weil, sebep (ursache) belirtir ve dadurch, dass ile değiştirilebilir.",
  },

  // 14. Özet Kuralı: Mittel/Methode kuralı (5 soru)
  {
    question:
      "Er hat das Ziel erreicht, _____ er hart und diszipliniert arbeitete.",
    options: [
      { text: "indem", value: "a" },
      { text: "dadurch, dass", value: "b" },
      { text: "weil", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Mittel/Methode için indem kullanılır ve dadurch, dass ile değiştirilebilir.",
  },
  {
    question: "Sie hat die Prüfung bestanden, _____ sie gezielt lernte.",
    options: [
      { text: "dadurch, dass", value: "a" },
      { text: "indem", value: "b" },
      { text: "weil", value: "c" },
      { text: "durch", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Mittel/Methode için indem kullanılır ve dadurch, dass ile aynı anlamı verebilir.",
  },
  {
    question:
      "Die Firma hat Kosten gesenkt, _____ sie neue Technologien einsetzte.",
    options: [
      { text: "indem", value: "a" },
      { text: "dadurch, dass", value: "b" },
      { text: "weil", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Mittel/Methode için indem kullanılır ve dadurch, dass ile değiştirilebilir.",
  },
  {
    question: "Er hat das Vertrauen gewonnen, _____ er offen kommunizierte.",
    options: [
      { text: "dadurch, dass", value: "a" },
      { text: "indem", value: "b" },
      { text: "weil", value: "c" },
      { text: "durch", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Mittel/Methode için indem kullanılır ve dadurch, dass ile aynı anlamı verebilir.",
  },
  {
    question:
      "Sie hat die Krise überwunden, _____ sie schnell und entschlossen handelte.",
    options: [
      { text: "indem", value: "a" },
      { text: "dadurch, dass", value: "b" },
      { text: "weil", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Mittel/Methode için indem kullanılır ve dadurch, dass ile değiştirilebilir.",
  },

  // 15. Özet Kuralı: Ursache/Sebep kuralı (5 soru)
  {
    question:
      "Er hat das Projekt abgebrochen, _____ er keine Unterstützung bekam.",
    options: [
      { text: "dadurch, dass", value: "a" },
      { text: "indem", value: "b" },
      { text: "weil", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "Ursache/Sebep için weil kullanılır ve dadurch, dass ile değiştirilebilir, ancak indem kullanılamaz.",
  },
  {
    question:
      "Sie hat die Prüfung nicht bestanden, _____ sie nicht genug gelernt hatte.",
    options: [
      { text: "weil", value: "a" },
      { text: "indem", value: "b" },
      { text: "dadurch, dass", value: "c" },
      { text: "durch", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Ursache/Sebep için weil kullanılır ve dadurch, dass ile aynı anlamı verebilir.",
  },
  {
    question:
      "Die Veranstaltung wurde abgesagt, _____ es zu wenig Teilnehmer gab.",
    options: [
      { text: "dadurch, dass", value: "a" },
      { text: "indem", value: "b" },
      { text: "weil", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "Ursache/Sebep için weil kullanılır ve dadurch, dass ile değiştirilebilir.",
  },
  {
    question: "Er konnte nicht kommen, _____ er krank war.",
    options: [
      { text: "indem", value: "a" },
      { text: "dadurch, dass", value: "b" },
      { text: "weil", value: "c" },
      { text: "durch", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Ursache/Sebep için dadurch, dass kullanılabilir, ancak indem bu bağlamda uygun değildir.",
  },
  {
    question:
      "Sie hat das Angebot abgelehnt, _____ sie bereits einen anderen Job hatte.",
    options: [
      { text: "weil", value: "a" },
      { text: "indem", value: "b" },
      { text: "dadurch, dass", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Ursache/Sebep için weil kullanılır ve dadurch, dass ile değiştirilebilir.",
  },

  // 1. Konzessive Konnektoren: "Wenn … auch … , (so) …" (5 soru)
  {
    question: "_____ er auch müde war, hat er die Aufgabe abgeschlossen.",
    options: [
      { text: "Wenn", value: "a" },
      { text: "Obwohl", value: "b" },
      { text: "Selbst wenn", value: "c" },
      { text: "So", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Wenn … auch …' yapısı, bir durumun varlığına rağmen başka bir eylemin gerçekleştiğini ifade eder.",
  },
  {
    question: "_____ sie auch wenig Zeit hatte, hat sie das Buch gelesen.",
    options: [
      { text: "Wenn", value: "a" },
      { text: "Sogar wenn", value: "b" },
      { text: "Obwohl", value: "c" },
      { text: "Weil", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Wenn … auch …' yapısı, bir engel olmasına rağmen eylemin gerçekleştiğini belirtir.",
  },
  {
    question: "_____ es auch regnet, gehen wir spazieren.",
    options: [
      { text: "Wenn", value: "a" },
      { text: "Ob", value: "b" },
      { text: "Selbst wenn", value: "c" },
      { text: "Falls", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Wenn … auch …' yapısı, olumsuz bir duruma rağmen eylemin yapılacağını ifade eder.",
  },
  {
    question: "_____ er auch viel zu tun hat, hilft er immer seinen Freunden.",
    options: [
      { text: "Wenn", value: "a" },
      { text: "Obwohl", value: "b" },
      { text: "Sogar wenn", value: "c" },
      { text: "Damit", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Wenn … auch …' yapısı, bir zorluğa rağmen başka bir eylemin gerçekleştiğini gösterir.",
  },
  {
    question:
      "_____ sie auch Angst hatte, hat sie die Herausforderung angenommen.",
    options: [
      { text: "Wenn", value: "a" },
      { text: "Selbst wenn", value: "b" },
      { text: "Obwohl", value: "c" },
      { text: "Weil", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Wenn … auch …' yapısı, bir engel olmasına rağmen eylemin gerçekleştiğini ifade eder.",
  },

  // 2. Konzessive Konnektoren: "Wie … auch …" (5 soru)
  {
    question: "_____ schwer die Aufgabe auch war, hat er sie gelöst.",
    options: [
      { text: "Wie", value: "a" },
      { text: "Obwohl", value: "b" },
      { text: "Wenn", value: "c" },
      { text: "So", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Wie … auch …' yapısı, bir durumun ne kadar zor olursa olsun eylemin gerçekleştiğini belirtir.",
  },
  {
    question: "_____ schnell er auch lief, konnte er den Zug nicht erreichen.",
    options: [
      { text: "Wie", value: "a" },
      { text: "Ob", value: "b" },
      { text: "Selbst wenn", value: "c" },
      { text: "Falls", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Wie … auch …' yapısı, bir durumun yoğunluğuna rağmen sonucu ifade eder.",
  },
  {
    question: "_____ teuer das Auto auch ist, will sie es kaufen.",
    options: [
      { text: "Wie", value: "a" },
      { text: "Obwohl", value: "b" },
      { text: "Wenn", value: "c" },
      { text: "Damit", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Wie … auch …' yapısı, bir durumun ne kadar aşırı olursa olsun kararı etkilediğini gösterir.",
  },
  {
    question: "_____ laut die Musik auch war, konnte er sich konzentrieren.",
    options: [
      { text: "Wie", value: "a" },
      { text: "Selbst wenn", value: "b" },
      { text: "Obwohl", value: "c" },
      { text: "Weil", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Wie … auch …' yapısı, bir durumun yoğunluğuna rağmen eylemin gerçekleştiğini ifade eder.",
  },
  {
    question: "_____ kalt es auch wird, gehe ich joggen.",
    options: [
      { text: "Wie", value: "a" },
      { text: "Ob", value: "b" },
      { text: "Wenn", value: "c" },
      { text: "Falls", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Wie … auch …' yapısı, bir durumun ne kadar zorlayıcı olursa olsun eylemi etkilediğini belirtir.",
  },

  // 3. Konzessive Konnektoren: "zwar … aber …" (5 soru)
  {
    question: "Er ist _____ sehr intelligent, _____ macht er oft Fehler.",
    options: [
      { text: "zwar … aber", value: "a" },
      { text: "wenn … auch", value: "b" },
      { text: "selbst wenn … trotzdem", value: "c" },
      { text: "so … auch", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'zwar … aber …' yapısı, bir olumlu durumu kabul edip ardından bir zıtlık ifade eder.",
  },
  {
    question: "Sie hat _____ viel gelernt, _____ die Prüfung nicht bestanden.",
    options: [
      { text: "zwar … aber", value: "a" },
      { text: "wie … auch", value: "b" },
      { text: "ob … oder", value: "c" },
      { text: "selbst wenn … trotzdem", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'zwar … aber …' yapısı, bir durumu belirtip zıt bir sonucu ifade eder.",
  },
  {
    question: "Das Essen war _____ lecker, _____ war es zu teuer.",
    options: [
      { text: "zwar … aber", value: "a" },
      { text: "wenn … auch", value: "b" },
      { text: "so … auch", value: "c" },
      { text: "einerseits … andererseits", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'zwar … aber …' yapısı, olumlu bir özelliği kabul edip bir olumsuzluk ekler.",
  },
  {
    question: "Er ist _____ sehr nett, _____ hat er wenig Zeit für uns.",
    options: [
      { text: "zwar … aber", value: "a" },
      { text: "selbst wenn … trotzdem", value: "b" },
      { text: "wie … auch", value: "c" },
      { text: "ob … oder", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'zwar … aber …' yapısı, bir olumlu özelliği zıt bir durumla bağlar.",
  },
  {
    question: "Das Buch ist _____ interessant, _____ ist es sehr lang.",
    options: [
      { text: "zwar … aber", value: "a" },
      { text: "wenn … auch", value: "b" },
      { text: "so … auch", value: "c" },
      { text: "selbst wenn … trotzdem", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'zwar … aber …' yapısı, bir olumlu durumu zıt bir durumla birleştirir.",
  },

  // 4. Konzessive Konnektoren: "zwar … trotzdem…" (5 soru)
  {
    question: "Er ist _____ sehr beschäftigt, hilft _____ seinen Kollegen.",
    options: [
      { text: "zwar … trotzdem", value: "a" },
      { text: "wenn … auch", value: "b" },
      { text: "selbst wenn … aber", value: "c" },
      { text: "so … auch", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'zwar … trotzdem …' yapısı, bir engeli kabul edip buna rağmen eylemi ifade eder.",
  },
  {
    question: "Sie ist _____ sehr müde, arbeitet _____ weiter.",
    options: [
      { text: "zwar … trotzdem", value: "a" },
      { text: "wie … auch", value: "b" },
      { text: "ob … oder", value: "c" },
      { text: "selbst wenn … aber", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'zwar … trotzdem …' yapısı, bir zorluğu belirtip eylemin devam ettiğini gösterir.",
  },
  {
    question: "Das Wetter ist _____ schlecht, gehen sie _____ spazieren.",
    options: [
      { text: "zwar … trotzdem", value: "a" },
      { text: "wenn … auch", value: "b" },
      { text: "so … auch", value: "c" },
      { text: "einerseits … andererseits", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'zwar … trotzdem …' yapısı, olumsuz bir durumu kabul edip eylemi ifade eder.",
  },
  {
    question:
      "Er hat _____ wenig Zeit, nimmt er sich _____ Zeit für seine Familie.",
    options: [
      { text: "zwar … trotzdem", value: "a" },
      { text: "selbst wenn … aber", value: "b" },
      { text: "wie … auch", value: "c" },
      { text: "ob … oder", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'zwar … trotzdem …' yapısı, bir engel olmasına rağmen eylemi belirtir.",
  },
  {
    question:
      "Das Projekt ist _____ kompliziert, arbeitet das Team _____ weiter.",
    options: [
      { text: "zwar … trotzdem", value: "a" },
      { text: "wenn … auch", value: "b" },
      { text: "so … auch", value: "c" },
      { text: "selbst wenn … aber", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'zwar … trotzdem …' yapısı, bir zorluğu belirtip eylemin devam ettiğini gösterir.",
  },

  // 5. Konzessive Konnektoren: "so … auch" (5 soru)
  {
    question: "_____ müde er auch war, hat er die Arbeit beendet.",
    options: [
      { text: "So", value: "a" },
      { text: "Obwohl", value: "b" },
      { text: "Wenn", value: "c" },
      { text: "Wie", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'So … auch' yapısı, bir durumun varlığına rağmen eylemin gerçekleştiğini ifade eder.",
  },
  {
    question: "_____ schwierig die Aufgabe auch war, hat sie nicht aufgegeben.",
    options: [
      { text: "So", value: "a" },
      { text: "Ob", value: "b" },
      { text: "Selbst wenn", value: "c" },
      { text: "Falls", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'So … auch' yapısı, bir zorluğa rağmen eylemin devam ettiğini belirtir.",
  },
  {
    question: "_____ kalt es auch ist, geht er jeden Tag joggen.",
    options: [
      { text: "So", value: "a" },
      { text: "Obwohl", value: "b" },
      { text: "Wenn", value: "c" },
      { text: "Damit", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'So … auch' yapısı, olumsuz bir duruma rağmen eylemin yapıldığını gösterir.",
  },
  {
    question: "_____ wenig Zeit sie auch hatte, hat sie das Buch gelesen.",
    options: [
      { text: "So", value: "a" },
      { text: "Selbst wenn", value: "b" },
      { text: "Obwohl", value: "c" },
      { text: "Weil", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'So … auch' yapısı, bir engel olmasına rağmen eylemin gerçekleştiğini ifade eder.",
  },
  {
    question: "_____ teuer das Kleid auch war, hat sie es gekauft.",
    options: [
      { text: "So", value: "a" },
      { text: "Ob", value: "b" },
      { text: "Wenn", value: "c" },
      { text: "Falls", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'So … auch' yapısı, bir durumun varlığına rağmen eylemin gerçekleştiğini belirtir.",
  },

  // 6. Konzessive Konnektoren: "selbst wenn" (5 soru)
  {
    question: "_____ es regnet, gehe ich spazieren.",
    options: [
      { text: "Selbst wenn", value: "a" },
      { text: "Obwohl", value: "b" },
      { text: "Wenn", value: "c" },
      { text: "Falls", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Selbst wenn' yapısı, bir durumun varlığına rağmen eylemin gerçekleşeceğini vurgular.",
  },
  {
    question: "_____ er keine Zeit hat, hilft er immer seinen Freunden.",
    options: [
      { text: "Selbst wenn", value: "a" },
      { text: "Ob", value: "b" },
      { text: "So", value: "c" },
      { text: "Wie", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Selbst wenn' yapısı, bir engel olsa bile eylemin yapılacağını ifade eder.",
  },
  {
    question: "_____ sie müde ist, arbeitet sie weiter.",
    options: [
      { text: "Selbst wenn", value: "a" },
      { text: "Obwohl", value: "b" },
      { text: "Wenn", value: "c" },
      { text: "Damit", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Selbst wenn' yapısı, bir zorluğa rağmen eylemin devam ettiğini vurgular.",
  },
  {
    question: "_____ das Wetter schlecht ist, machen wir einen Ausflug.",
    options: [
      { text: "Selbst wenn", value: "a" },
      { text: "Ob", value: "b" },
      { text: "So", value: "c" },
      { text: "Falls", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Selbst wenn' yapısı, olumsuz bir duruma rağmen eylemin gerçekleşeceğini belirtir.",
  },
  {
    question: "_____ er krank ist, kommt er zur Arbeit.",
    options: [
      { text: "Selbst wenn", value: "a" },
      { text: "Obwohl", value: "b" },
      { text: "Wenn", value: "c" },
      { text: "Weil", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Selbst wenn' yapısı, bir engel olmasına rağmen eylemin gerçekleşeceğini vurgular.",
  },

  // 7. Konzessive Konnektoren: "sogar wenn" (5 soru)
  {
    question: "_____ es stürmt, geht er joggen.",
    options: [
      { text: "Sogar wenn", value: "a" },
      { text: "Obwohl", value: "b" },
      { text: "Wenn", value: "c" },
      { text: "Falls", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Sogar wenn' yapısı, aşırı bir durum olsa bile eylemin gerçekleşeceğini vurgular.",
  },
  {
    question: "_____ sie keine Erfahrung hat, übernimmt sie die Aufgabe.",
    options: [
      { text: "Sogar wenn", value: "a" },
      { text: "Ob", value: "b" },
      { text: "So", value: "c" },
      { text: "Wie", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Sogar wenn' yapısı, bir zorluk olsa bile eylemin yapılacağını ifade eder.",
  },
  {
    question: "_____ er krank ist, kommt er zur Besprechung.",
    options: [
      { text: "Sogar wenn", value: "a" },
      { text: "Obwohl", value: "b" },
      { text: "Wenn", value: "c" },
      { text: "Damit", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Sogar wenn' yapısı, aşırı bir duruma rağmen eylemin gerçekleşeceğini vurgular.",
  },
  {
    question: "_____ das Projekt schwierig ist, gibt das Team nicht auf.",
    options: [
      { text: "Sogar wenn", value: "a" },
      { text: "Ob", value: "b" },
      { text: "So", value: "c" },
      { text: "Falls", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Sogar wenn' yapısı, bir engel olmasına rağmen eylemin devam edeceğini belirtir.",
  },
  {
    question: "_____ es spät ist, schaut sie den Film zu Ende.",
    options: [
      { text: "Sogar wenn", value: "a" },
      { text: "Obwohl", value: "b" },
      { text: "Wenn", value: "c" },
      { text: "Weil", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Sogar wenn' yapısı, bir durumun varlığına rağmen eylemin gerçekleşeceğini vurgular.",
  },

  // 8. Konzessive Konnektoren: "einerseits … , andererseits …" (5 soru)
  {
    question: "_____ ist er sehr nett, _____ kann er manchmal streng sein.",
    options: [
      { text: "Einerseits … andererseits", value: "a" },
      { text: "Zwar … aber", value: "b" },
      { text: "Wenn … auch", value: "c" },
      { text: "So … auch", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Einerseits … andererseits …' yapısı, iki zıt özelliği karşılaştırır.",
  },
  {
    question: "_____ ist das Auto schnell, _____ verbraucht es viel Benzin.",
    options: [
      { text: "Einerseits … andererseits", value: "a" },
      { text: "Zwar … trotzdem", value: "b" },
      { text: "Ob … oder", value: "c" },
      { text: "Selbst wenn … aber", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Einerseits … andererseits …' yapısı, iki farklı yönü ifade eder.",
  },
  {
    question: "_____ ist sie sehr fleißig, _____ macht sie oft Fehler.",
    options: [
      { text: "Einerseits … andererseits", value: "a" },
      { text: "Wenn … auch", value: "b" },
      { text: "So … auch", value: "c" },
      { text: "Zwar … aber", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Einerseits … andererseits …' yapısı, iki zıt özelliği karşılaştırır.",
  },
  {
    question: "_____ ist das Haus schön, _____ ist es sehr teuer.",
    options: [
      { text: "Einerseits … andererseits", value: "a" },
      { text: "Selbst wenn … trotzdem", value: "b" },
      { text: "Wie … auch", value: "c" },
      { text: "Ob … oder", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Einerseits … andererseits …' yapısı, iki farklı yönü belirtir.",
  },
  {
    question: "_____ ist das Essen lecker, _____ ist es nicht gesund.",
    options: [
      { text: "Einerseits … andererseits", value: "a" },
      { text: "Zwar … aber", value: "b" },
      { text: "So … auch", value: "c" },
      { text: "Selbst wenn … aber", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Einerseits … andererseits …' yapısı, iki zıt özelliği ifade eder.",
  },

  // 9. Konzessive Konnektoren: "ob - oder" (5 soru)
  {
    question: "_____ er kommt oder nicht, wir fangen pünktlich an.",
    options: [
      { text: "Ob", value: "a" },
      { text: "Wenn", value: "b" },
      { text: "Selbst wenn", value: "c" },
      { text: "Obwohl", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Ob - oder' yapısı, bir durumun gerçekleşip gerçekleşmemesinin sonucu değiştirmediğini ifade eder.",
  },
  {
    question: "_____ sie Zeit hat oder nicht, sie hilft immer.",
    options: [
      { text: "Ob", value: "a" },
      { text: "Obwohl", value: "b" },
      { text: "So", value: "c" },
      { text: "Wie", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Ob - oder' yapısı, iki olasılığın da sonucu etkilemediğini belirtir.",
  },
  {
    question: "_____ es regnet oder schneit, wir machen den Ausflug.",
    options: [
      { text: "Ob", value: "a" },
      { text: "Wenn", value: "b" },
      { text: "Sogar wenn", value: "c" },
      { text: "Falls", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Ob - oder' yapısı, farklı koşulların eylemi etkilemediğini gösterir.",
  },
  {
    question: "_____ du zustimmst oder nicht, wir machen es so.",
    options: [
      { text: "Ob", value: "a" },
      { text: "Obwohl", value: "b" },
      { text: "Wenn", value: "c" },
      { text: "Damit", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Ob - oder' yapısı, bir durumun karar üzerinde etkisi olmadığını ifade eder.",
  },
  {
    question: "_____ er krank ist oder nicht, er kommt zur Arbeit.",
    options: [
      { text: "Ob", value: "a" },
      { text: "Selbst wenn", value: "b" },
      { text: "Obwohl", value: "c" },
      { text: "Weil", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Ob - oder' yapısı, iki olasılığın da sonucu değiştirmediğini belirtir.",
  },

  // 10. Restriktive Konnektoren: "Es sei denn, (dass) …" (5 soru)
  {
    question: "Wir gehen spazieren, _____ es regnet.",
    options: [
      { text: "es sei denn, dass", value: "a" },
      { text: "außer wenn", value: "b" },
      { text: "selbst wenn", value: "c" },
      { text: "obwohl", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Es sei denn, (dass) …' yapısı, bir eylemin sadece belirli bir koşul altında gerçekleşmeyeceğini belirtir.",
  },
  {
    question: "Er kommt zur Party, _____ er krank ist.",
    options: [
      { text: "es sei denn, dass", value: "a" },
      { text: "außer dass", value: "b" },
      { text: "wenn", value: "c" },
      { text: "sogar wenn", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Es sei denn, (dass) …' yapısı, bir istisna koşulunu ifade eder.",
  },
  {
    question: "Ich helfe dir, _____ du es allein schaffen kannst.",
    options: [
      { text: "es sei denn, dass", value: "a" },
      { text: "außer wenn", value: "b" },
      { text: "selbst wenn", value: "c" },
      { text: "ob", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Es sei denn, (dass) …' yapısı, bir eylemin belirli bir durumda gerçekleşmeyeceğini belirtir.",
  },
  {
    question: "Wir fahren in den Urlaub, _____ wir kein Geld haben.",
    options: [
      { text: "es sei denn, dass", value: "a" },
      { text: "außer dass", value: "b" },
      { text: "wenn", value: "c" },
      { text: "obwohl", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Es sei denn, (dass) …' yapısı, bir istisna koşulunu ifade eder.",
  },
  {
    question: "Sie nimmt den Job an, _____ das Gehalt zu niedrig ist.",
    options: [
      { text: "es sei denn, dass", value: "a" },
      { text: "außer wenn", value: "b" },
      { text: "selbst wenn", value: "c" },
      { text: "sogar wenn", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Es sei denn, (dass) …' yapısı, bir eylemin sadece belirli bir koşul altında olmayacağını belirtir.",
  },

  // 11. Restriktive Konnektoren: "außer wenn …" (5 soru)
  {
    question: "Ich komme immer pünktlich, _____ ich im Staußen.",
    options: [
      { text: "außer wenn", value: "a" },
      { text: "es sei denn, dass", value: "b" },
      { text: "selbst wenn", value: "c" },
      { text: "obwohl", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Außer wenn …' yapısı, bir istisna durumunu ifade eder ve fiil sonda yer alır.",
  },
  {
    question: "Er hilft immer, _____ er keine Zeit hat.",
    options: [
      { text: "außer wenn", value: "a" },
      { text: "es sei denn, dass", value: "b" },
      { text: "wenn", value: "c" },
      { text: "sogar wenn", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'Außer wenn …' yapısı, bir istisna koşulunu belirtir.",
  },
  {
    question: "Wir gehen ins Kino, _____ wir zu müde sind.",
    options: [
      { text: "außer wenn", value: "a" },
      { text: "außer dass", value: "b" },
      { text: "selbst wenn", value: "c" },
      { text: "ob", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Außer wenn …' yapısı, bir eylemin belirli bir durumda gerçekleşmeyeceğini ifade eder.",
  },
  {
    question: "Sie arbeitet am Wochenende, _____ sie krank ist.",
    options: [
      { text: "außer wenn", value: "a" },
      { text: "es sei denn, dass", value: "b" },
      { text: "wenn", value: "c" },
      { text: "obwohl", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'Außer wenn …' yapısı, bir istisna durumunu belirtir.",
  },
  {
    question: "Ich kaufe das Buch, _____ es zu teuer ist.",
    options: [
      { text: "außer wenn", value: "a" },
      { text: "außer dass", value: "b" },
      { text: "selbst wenn", value: "c" },
      { text: "sogar wenn", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Außer wenn …' yapısı, bir eylemin belirli bir koşul altında olmayacağını ifade eder.",
  },

  // 12. Restriktive Konnektoren: "außer dass …" (5 soru)
  {
    question: "Alles war perfekt, _____ das Essen kalt war.",
    options: [
      { text: "außer dass", value: "a" },
      { text: "es sei denn, dass", value: "b" },
      { text: "außer wenn", value: "c" },
      { text: "obwohl", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Außer dass …' yapısı, bir istisna durumunu ifade eder ve yancümle ile kullanılır.",
  },
  {
    question:
      "Er hat alles richtig gemacht, _____ er einen kleinen Fehler gemacht hat.",
    options: [
      { text: "außer dass", value: "a" },
      { text: "nur dass", value: "b" },
      { text: "wenn", value: "c" },
      { text: "sogar wenn", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Außer dass …' yapısı, bir istisna belirtir ve fiil sonda yer alır.",
  },
  {
    question: "Das Konzert war toll, _____ die Musik zu laut war.",
    options: [
      { text: "außer dass", value: "a" },
      { text: "außer wenn", value: "b" },
      { text: "selbst wenn", value: "c" },
      { text: "ob", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Außer dass …' yapısı, olumlu bir durumda bir istisna ifade eder.",
  },
  {
    question: "Sie hat den Job gut gemacht, _____ sie wenig Erfahrung hatte.",
    options: [
      { text: "außer dass", value: "a" },
      { text: "es sei denn, dass", value: "b" },
      { text: "wenn", value: "c" },
      { text: "obwohl", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Außer dass …' yapısı, bir istisna durumunu yancümle ile bağlar.",
  },
  {
    question: "Alles lief gut, _____ das Wetter schlecht war.",
    options: [
      { text: "außer dass", value: "a" },
      { text: "nur dass", value: "b" },
      { text: "selbst wenn", value: "c" },
      { text: "sogar wenn", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Außer dass …' yapısı, bir genel durumu bir istisna ile belirtir.",
  },

  // 13. Restriktive Konnektoren: "nur dass …" (5 soru)
  {
    question: "Er hat die Aufgabe gelöst, _____ er länger gebraucht hat.",
    options: [
      { text: "nur dass", value: "a" },
      { text: "außer dass", value: "b" },
      { text: "außer wenn", value: "c" },
      { text: "obwohl", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Nur dass …' yapısı, bir istisna durumunu ifade eder ve außer dass ile benzerdir.",
  },
  {
    question: "Das Essen war lecker, _____ es etwas kalt war.",
    options: [
      { text: "nur dass", value: "a" },
      { text: "es sei denn, dass", value: "b" },
      { text: "wenn", value: "c" },
      { text: "sogar wenn", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Nur dass …' yapısı, bir olumlu durumu bir küçük istisna ile belirtir.",
  },
  {
    question:
      "Sie hat alles vorbereitet, _____ sie die Einladungen vergessen hat.",
    options: [
      { text: "nur dass", value: "a" },
      { text: "außer wenn", value: "b" },
      { text: "selbst wenn", value: "c" },
      { text: "ob", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'Nur dass …' yapısı, bir istisna yancümle ile ifade eder.",
  },
  {
    question: "Das Treffen war erfolgreich, _____ einige nicht kamen.",
    options: [
      { text: "nur dass", value: "a" },
      { text: "es sei denn, dass", value: "b" },
      { text: "wenn", value: "c" },
      { text: "obwohl", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'Nur dass …' yapısı, bir istisna durumunu belirtir.",
  },
  {
    question: "Alles war gut organisiert, _____ das Essen verspätet war.",
    options: [
      { text: "nur dass", value: "a" },
      { text: "außer dass", value: "b" },
      { text: "selbst wenn", value: "c" },
      { text: "sogar wenn", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Nur dass …' yapısı, bir genel olumlu durumu bir istisna ile ifade eder.",
  },

  // 14. Spezielle Verben: "haben / sein + zu + Infinitiv" (5 soru)
  {
    question: "Er _____ die Aufgabe morgen zu erledigen.",
    options: [
      { text: "hat", value: "a" },
      { text: "ist", value: "b" },
      { text: "muss", value: "c" },
      { text: "soll", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Haben + zu + Infinitiv' yapısı, bir görevin zorunlu olduğunu ifade eder.",
  },
  {
    question: "Sie _____ den Bericht noch zu schreiben.",
    options: [
      { text: "hat", value: "a" },
      { text: "ist", value: "b" },
      { text: "muss", value: "c" },
      { text: "kann", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'Haben + zu + Infinitiv' yapısı, bir zorunluluğu ifade eder.",
  },
  {
    question: "Das Auto ______ noch zu reparieren.",
    options: [
      { text: "ist", value: "a" },
      { text: "hat", value: "b" },
      { text: "muss", value: "c" },
      { text: "soll", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Sein + zu + Infinitiv' yapısı, bir şeyin yapılması gerektiğini belirtir.",
  },
  {
    question: "Wir ______ die Regeln zu befolgen.",
    options: [
      { text: "haben", value: "a" },
      { text: "sind", value: "b" },
      { text: "müssen", value: "c" },
      { text: "können", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'Haben + zu + Infinitiv' yapısı, bir zorunluluğu ifade eder.",
  },
  {
    question: "Das Problem ______ noch zu klären.",
    options: [
      { text: "ist", value: "a" },
      { text: "hat", value: "b" },
      { text: "muss", value: "c" },
      { text: "soll", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Sein + zu + Infinitiv' yapısı, bir şeyin yapılması gerektiğini belirtir.",
  },

  // 15. Spezielle Verben: "Gereklilik" anlamı (5 soru)
  {
    question: "Du ______ pünktlich zur Arbeit kommen.",
    options: [
      { text: "musst", value: "a" },
      { text: "kannst", value: "b" },
      { text: "darfst", value: "c" },
      { text: "willst", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'Müssen', gereklilik anlamını ifade eder.",
  },
  {
    question: "Wir ______ die Aufgabe bis morgen erledigen.",
    options: [
      { text: "müssen", value: "a" },
      { text: "können", value: "b" },
      { text: "sollen", value: "c" },
      { text: "wollen", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'Müssen', bir zorunluluğu ifade eder.",
  },
  {
    question: "Er ______ den Bericht schreiben.",
    options: [
      { text: "muss", value: "a" },
      { text: "kann", value: "b" },
      { text: "darf", value: "c" },
      { text: "will", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'Müssen', gereklilik anlamını belirtir.",
  },
  {
    question: "Sie ______ die Regeln befolgen.",
    options: [
      { text: "müssen", value: "a" },
      { text: "können", value: "b" },
      { text: "sollen", value: "c" },
      { text: "wollen", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'Müssen', bir zorunluluğu ifade eder.",
  },
  {
    question: "Ihr ______ die Prüfung vorbereiten.",
    options: [
      { text: "müsst", value: "a" },
      { text: "könnt", value: "b" },
      { text: "dürft", value: "c" },
      { text: "wollt", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'Müssen', gereklilik anlamını ifade eder.",
  },

  // 16. Spezielle Verben: "Olumsuz Gereklilik / Yasak" anlamı = "nicht dürfen" (5 soru)
  {
    question: "Du ______ hier nicht rauchen.",
    options: [
      { text: "darfst", value: "a" },
      { text: "musst", value: "b" },
      { text: "kannst", value: "c" },
      { text: "sollst", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'Nicht dürfen', bir yasağı ifade eder.",
  },
  {
    question: "Ihr ______ die Regeln nicht brechen.",
    options: [
      { text: "dürft", value: "a" },
      { text: "müsst", value: "b" },
      { text: "könnt", value: "c" },
      { text: "sollt", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'Nicht dürfen', bir yasağı belirtir.",
  },
  {
    question: "Er ______ das Auto nicht benutzen.",
    options: [
      { text: "darf", value: "a" },
      { text: "muss", value: "b" },
      { text: "kann", value: "c" },
      { text: "soll", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'Nicht dürfen', bir yasağı ifade eder.",
  },
  {
    question: "Sie ______ hier nicht parken.",
    options: [
      { text: "darf", value: "a" },
      { text: "muss", value: "b" },
      { text: "kann", value: "c" },
      { text: "soll", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'Nicht dürfen', bir yasağı belirtir.",
  },
  {
    question: "Wir ______ das Gebäude nicht betreten.",
    options: [
      { text: "dürfen", value: "a" },
      { text: "müssen", value: "b" },
      { text: "können", value: "c" },
      { text: "sollen", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'Nicht dürfen', bir yasağı ifade eder.",
  },

  // 17. Spezielle Verben: "Olasılık / Yapılabilirlik" anlamı (5 soru)
  {
    question: "Du ______ das Problem lösen, wenn du willst.",
    options: [
      { text: "kannst", value: "a" },
      { text: "musst", value: "b" },
      { text: "darfst", value: "c" },
      { text: "sollst", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'Können', olasılık veya yapılabilirlik anlamını ifade eder.",
  },
  {
    question: "Sie ______ morgen kommen, wenn sie Zeit hat.",
    options: [
      { text: "kann", value: "a" },
      { text: "muss", value: "b" },
      { text: "darf", value: "c" },
      { text: "soll", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'Können', bir eylemin mümkün olduğunu belirtir.",
  },
  {
    question: "Wir ______ das Projekt abschließen, wenn wir hart arbeiten.",
    options: [
      { text: "können", value: "a" },
      { text: "müssen", value: "b" },
      { text: "dürfen", value: "c" },
      { text: "sollen", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'Können', yapılabilirlik anlamını ifade eder.",
  },
  {
    question: "Er ______ das Auto reparieren, weil er Mechaniker ist.",
    options: [
      { text: "kann", value: "a" },
      { text: "muss", value: "b" },
      { text: "darf", value: "c" },
      { text: "soll", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'Können', bir yeteneği veya olasılığı belirtir.",
  },
  {
    question: "Ihr ______ die Aufgabe übernehmen, wenn ihr wollt.",
    options: [
      { text: "könnt", value: "a" },
      { text: "müsst", value: "b" },
      { text: "dürft", value: "c" },
      { text: "sollt", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'Können', olasılık veya yapılabilirlik anlamını ifade eder.",
  },

  // 18. Spezielle Verben: "zu + Partizip I" (Gerundiv) (5 soru)
  {
    question: "Die Aufgabe ist _______.",
    options: [
      { text: "zu lösen", value: "a" },
      { text: "gelöst", value: "b" },
      { text: "lösen", value: "c" },
      { text: "lösbar", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'zu + Partizip I' (Gerundiv), bir eylemin yapılması gerektiğini ifade eder.",
  },
  {
    question: "Das Problem ist _______ schnell.",
    options: [
      { text: "zu klären", value: "a" },
      { text: "geklärt", value: "b" },
      { text: "klar", value: "c" },
      { text: "klärbar", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'zu + Partizip I' (Gerundiv), bir eylemin yapılması gerektiğini belirtir.",
  },
  {
    question: "Die Regeln sind _______.",
    options: [
      { text: "zu befolgen", value: "a" },
      { text: "befolgt", value: "b" },
      { text: "befolgen", value: "c" },
      { text: "befolgbar", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'zu + Partizip I' (Gerundiv), bir zorunluluğu ifade eder.",
  },
  {
    question: "Das Auto ist _______ noch.",
    options: [
      { text: "zu reparieren", value: "a" },
      { text: "repariert", value: "b" },
      { text: "reparieren", value: "c" },
      { text: "reparierbar", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'zu + Partizip I' (Gerundiv), bir eylemin yapılması gerektiğini belirtir.",
  },
  {
    question: "Die Fragen sind _______ klar.",
    options: [
      { text: "zu beantworten", value: "a" },
      { text: "beantwortet", value: "b" },
      { text: "antworten", value: "c" },
      { text: "antwortbar", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'zu + Partizip I' (Gerundiv), bir eylemin yapılması gerektiğini ifade eder.",
  },

  // 1. Gerundiv (Modales Partizip) (3 soru)
  {
    question: "Die Aufgabe ist noch _______.",
    options: [
      { text: "zu lösen", value: "a" },
      { text: "gelöst", value: "b" },
      { text: "lösen", value: "c" },
      { text: "lösbar", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'zu + Partizip I' (Gerundiv), bir eylemin yapılması gerektiğini ifade eder.",
  },
  {
    question: "Die Regeln sind unbedingt _______.",
    options: [
      { text: "zu befolgen", value: "a" },
      { text: "befolgt", value: "b" },
      { text: "befolgen", value: "c" },
      { text: "befolgbar", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Gerundiv, 'zu + Partizip I' ile bir zorunluluğu belirtir.",
  },
  {
    question: "Das Problem ist schnell _______.",
    options: [
      { text: "zu klären", value: "a" },
      { text: "geklärt", value: "b" },
      { text: "klar", value: "c" },
      { text: "klärbar", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Gerundiv, 'zu + Partizip I' ile yapılması gereken bir eylemi ifade eder.",
  },

  // 2. Gerundiv – Örnekler (3 soru)
  {
    question: "Die Fragen sind leicht _______.",
    options: [
      { text: "zu beantworten", value: "a" },
      { text: "beantwortet", value: "b" },
      { text: "antworten", value: "c" },
      { text: "antwortbar", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Gerundiv, 'zu + Partizip I' ile bir eylemin yapılması gerektiğini belirtir.",
  },
  {
    question: "Das Auto ist noch _______.",
    options: [
      { text: "zu reparieren", value: "a" },
      { text: "repariert", value: "b" },
      { text: "reparieren", value: "c" },
      { text: "reparierbar", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Gerundiv, 'zu + Partizip I' ile bir eylemin yapılması gerektiğini ifade eder.",
  },
  {
    question: "Die Anweisungen sind genau _______.",
    options: [
      { text: "zu befolgen", value: "a" },
      { text: "befolgt", value: "b" },
      { text: "befolgen", value: "c" },
      { text: "befolgbar", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Gerundiv, 'zu + Partizip I' ile bir zorunluluğu belirtir.",
  },

  // 3. "Gerundiv" ve "takviyeli özne" (3 soru)
  {
    question: "Die Aufgabe ist für ihn schwer _______.",
    options: [
      { text: "zu lösen", value: "a" },
      { text: "gelöst", value: "b" },
      { text: "lösen", value: "c" },
      { text: "lösbar", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Gerundiv, takviyeli özne (für ihn) ile birlikte bir eylemin zorluğunu ifade eder.",
  },
  {
    question: "Das Buch ist für Anfänger leicht _______.",
    options: [
      { text: "zu lesen", value: "a" },
      { text: "gelesen", value: "b" },
      { text: "lesen", value: "c" },
      { text: "lesbar", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Gerundiv, takviyeli özne ile bir eylemin kolaylığını belirtir.",
  },
  {
    question: "Die Regeln sind für uns wichtig _______.",
    options: [
      { text: "zu befolgen", value: "a" },
      { text: "befolgt", value: "b" },
      { text: "befolgen", value: "c" },
      { text: "befolgbar", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Gerundiv, takviyeli özne ile bir eylemin önemini ifade eder.",
  },

  // 4. "scheinen + zu + Infinitiv" (3 soru)
  {
    question: "Er _______ sehr müde zu sein.",
    options: [
      { text: "scheint", value: "a" },
      { text: "scheinen", value: "b" },
      { text: "scheinte", value: "c" },
      { text: "geschienen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'scheinen + zu + Infinitiv', bir durumun görünüşünü ifade eder.",
  },
  {
    question: "Sie _______ das Problem zu verstehen.",
    options: [
      { text: "scheint", value: "a" },
      { text: "scheinen", value: "b" },
      { text: "scheinte", value: "c" },
      { text: "geschienen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'scheinen + zu + Infinitiv', bir eylemin görünüşünü belirtir.",
  },
  {
    question: "Das Projekt _______ gut zu laufen.",
    options: [
      { text: "scheint", value: "a" },
      { text: "scheinen", value: "b" },
      { text: "scheinte", value: "c" },
      { text: "geschienen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'scheinen + zu + Infinitiv', bir durumun görünüşünü ifade eder.",
  },

  // 5. "scheinen + zu + Infinitiv" – Geçmiş zaman (3 soru)
  {
    question: "Er _______ sehr müde gewesen zu sein.",
    options: [
      { text: "schien", value: "a" },
      { text: "scheint", value: "b" },
      { text: "scheinen", value: "c" },
      { text: "geschienen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Geçmiş zamanda 'scheinen + zu + Infinitiv', 'schien' ile kullanılır.",
  },
  {
    question: "Sie _______ das Problem verstanden zu haben.",
    options: [
      { text: "schien", value: "a" },
      { text: "scheint", value: "b" },
      { text: "scheinen", value: "c" },
      { text: "geschienen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Geçmiş zamanda 'scheinen + zu + Infinitiv', 'schien' ile ifade edilir.",
  },
  {
    question: "Das Team _______ motiviert gewesen zu sein.",
    options: [
      { text: "schien", value: "a" },
      { text: "scheint", value: "b" },
      { text: "scheinen", value: "c" },
      { text: "geschienen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Geçmiş zamanda 'scheinen + zu + Infinitiv', 'schien' kullanılır.",
  },

  // 6. "scheinen + zu + Infinitiv" – Örnek cümleler (3 soru)
  {
    question: "Die Kinder _______ Spaß zu haben.",
    options: [
      { text: "scheinen", value: "a" },
      { text: "scheint", value: "b" },
      { text: "schien", value: "c" },
      { text: "geschienen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'scheinen + zu + Infinitiv', çoğul öznelerle 'scheinen' alır.",
  },
  {
    question: "Er _______ die Wahrheit zu sagen.",
    options: [
      { text: "scheint", value: "a" },
      { text: "scheinen", value: "b" },
      { text: "schien", value: "c" },
      { text: "geschienen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'scheinen + zu + Infinitiv', tekil öznelerle 'scheint' kullanılır.",
  },
  {
    question: "Sie _______ zufrieden zu sein.",
    options: [
      { text: "scheint", value: "a" },
      { text: "scheinen", value: "b" },
      { text: "schien", value: "c" },
      { text: "geschienen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'scheinen + zu + Infinitiv', bir durumun görünüşünü ifade eder.",
  },

  // 7. "scheinen + zu + Infinitiv" yerine Konjunktiv (3 soru)
  {
    question: "Er _______ die Wahrheit zu sagen.",
    options: [
      { text: "schien", value: "a" },
      { text: "scheine", value: "b" },
      { text: "scheint", value: "c" },
      { text: "geschienen", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Konjunktiv II ile 'scheinen + zu + Infinitiv', 'scheine' ile ifade edilir.",
  },
  {
    question: "Sie _______ das Problem zu verstehen.",
    options: [
      { text: "schien", value: "a" },
      { text: "scheine", value: "b" },
      { text: "scheint", value: "c" },
      { text: "geschienen", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Konjunktiv II, 'scheinen' fiilinde 'scheine' ile kullanılır.",
  },
  {
    question: "Das Team _______ motiviert zu sein.",
    options: [
      { text: "schien", value: "a" },
      { text: "scheine", value: "b" },
      { text: "scheinen", value: "c" },
      { text: "geschienen", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Konjunktiv II ile 'scheinen, 'scheine' kullanılır.",
  },

  // 8. Örnek cümle analizi (3 soru)
  {
    question: "Er _______ gestern sehr müde _______ zu sein.",
    options: [
      { text: "schien … zu sein", value: "a" },
      { text: "scheint … sein", value: "b" },
      { text: "scheinen … zu sein", value: "c" },
      { text: "geschienen … sein", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Geçmiş zamanda 'scheinen + zu + Infinitiv', 'schien' ile doğru ifade edilir.",
  },
  {
    question: "Sie _______ das Problem _______ zu _______",
    options: [
      { text: "scheint … zu verstehen", value: "a" },
      { text: "schien … verstanden", value: "b" },
      { text: "scheinen … verstehen", value: "c" },
      { text: "geschienen … verstanden", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'scheinen + zu + Infinitiv', mevcut durumu 'scheint' ile ifade eder.",
  },
  {
    question: "Das Projekt _______ gut _______ zu _______",
    options: [
      { text: "scheint … zu laufen", value: "a" },
      { text: "schien … gelaufen", value: "b" },
      { text: "scheinen … laufen", value: "c" },
      { text: "geschienen … gelaufen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'scheinen + zu + Infinitiv', mevcut durumu 'scheint' ile doğru ifade eder.",
  },

  // 9. Verben mit Infinitiv ohne "zu" (3 soru)
  {
    question: "Ich habe ihn _______ singen.",
    options: [
      { text: "hören", value: "a" },
      { text: "zu hören", value: "b" },
      { text: "gehört", value: "c" },
      { text: "hörend", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'hören', 'zu' olmadan infintiv ile kullanılır.",
  },
  {
    question: "Sie sah ihn _______ kommen.",
    options: [
      { text: "kommen", value: "a" },
      { text: "zu kommen", value: "b" },
      { text: "gekommen", value: "c" },
      { text: "kommend", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'sehen', 'zu' olmadan infintiv ile kullanılır.",
  },
  {
    question: "Er half ihr _______ tragen.",
    options: [
      { text: "tragen", value: "a" },
      { text: "zu tragen", value: "b" },
      { text: "getragen", value: "c" },
      { text: "tragend", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'helfen', 'zu' olmadan infintiv ile kullanılır.",
  },

  // 10. Perfekt zamanındaki davranışları (3 soru)
  {
    question: "Ich habe ihn singen _______.",
    options: [
      { text: "gehört", value: "a" },
      { text: "hören", value: "b" },
      { text: "zu hören", value: "c" },
      { text: "hörend", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Perfekt zamanda, 'hören' fiili 'gehört' ile infintiv alır.",
  },
  {
    question: "Sie hat ihn kommen _______.",
    options: [
      { text: "gesehen", value: "a" },
      { text: "sehen", value: "b" },
      { text: "zu kommen", value: "c" },
      { text: "kommend", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Perfektte, 'sehen' fiili 'gesehen' ile infintiv alır.",
  },
  {
    question: "Er hat ihr tragen _______.",
    options: [
      { text: "geholfen", value: "a" },
      { text: "helfen", value: "b" },
      { text: "zu tragen", value: "c" },
      { text: "tragend", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Perfektte, 'helfen' fiili 'geholfen' ile infintiv alır.",
  },

  // 11. Perfekt mit zweimal Infinitiv (3 soru)
  {
    question: "Ich habe ihn nicht ______ können.",
    options: [
      { text: "kommen lassen", value: "a" },
      { text: "kommen gelassen", value: "b" },
      { text: "zu kommen lassen", value: "c" },
      { text: "kommend lassen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Perfektte, 'lassen' ile modal fiillerde iki infintiv kullanılır.",
  },
  {
    question: "Sie hat ihn nicht ______ wollen.",
    options: [
      { text: "sehen wollen", value: "a" },
      { text: "sehen gewollt", value: "b" },
      { text: "zu sehen wollen", value: "c" },
      { text: "sehend wollen", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Perfektte, modal fiillerle iki infintiv kullanılır.",
  },
  {
    question: "Er hat es nicht ______ müssen.",
    options: [
      { text: "machen müssen", value: "a" },
      { text: "machen gemacht", value: "b" },
      { text: "zu machen müssen", value: "c" },
      { text: "machend müssen", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Perfektte, 'müssen' ile iki infintiv kullanılır.",
  },

  // 12. Perfekt mit zweimal Infinitiv oder Partizip (3 soru)
  {
    question: "Ich habe ihn nicht ______ lassen.",
    options: [
      { text: "kommen lassen", value: "a" },
      { text: "gekommen lassen", value: "b" },
      { text: "zu kommen lassen", value: "c" },
      { text: "kommend lassen", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'lassen' ile perfektte genellikle iki infintiv kullanılır.",
  },
  {
    question: "Sie hat ihn ______ gesehen.",
    options: [
      { text: "kommen", value: "a" },
      { text: "gekommen", value: "b" },
      { text: "zu kommen", value: "c" },
      { text: "kommend", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'sehen' ile perfektte infintiv tercih edilir.",
  },
  {
    question: "Er hat es ______ gehört.",
    options: [
      { text: "singen", value: "a" },
      { text: "gesungen", value: "b" },
      { text: "zu singen", value: "c" },
      { text: "singend", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'hören' ile perfektte infintiv kullanılır.",
  },

  // 13. Perfekt mit Partizip II (3 soru)
  {
    question: "Ich habe ihn ______ gesehen.",
    options: [
      { text: "gekommen", value: "a" },
      { text: "kommen", value: "b" },
      { text: "zu kommen", value: "c" },
      { text: "kommend", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Bazı durumlarda, 'sehen' ile perfektte Partizip II kullanılabilir.",
  },
  {
    question: "Sie hat ihn ______ gehört.",
    options: [
      { text: "gesungen", value: "a" },
      { text: "singen", value: "b" },
      { text: "zu singen", value: "c" },
      { text: "singend", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Bazı bağlamlarda, 'hören' ile perfektte Partizip II kullanılır.",
  },
  {
    question: "Er hat sie ______ geholfen.",
    options: [
      { text: "getragen", value: "a" },
      { text: "tragen", value: "b" },
      { text: "zu tragen", value: "c" },
      { text: "tragend", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Bazı durumlarda, 'helfen' ile perfektte Partizip II tercih edilebilir.",
  },

  // 14. Modalverb gibi davranan fiiller (3 soru)
  {
    question: "Er _______ die Aufgabe zu erledigen.",
    options: [
      { text: "versprach", value: "a" },
      { text: "versprechen", value: "b" },
      { text: "versprochen", value: "c" },
      { text: "versprechend", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'versprechen', modalverb gibi 'zu + Infinitiv' alır.",
  },
  {
    question: "Sie _______ das Problem zu lösen.",
    options: [
      { text: "versuchte", value: "a" },
      { text: "versuchen", value: "b" },
      { text: "versucht", value: "c" },
      { text: "versuchend", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'versuchen', modalverb gibi 'zu + Infinitiv' ile kullanılır.",
  },
  {
    question: "Wir _______ den Plan umzusetzen.",
    options: [
      { text: "beabsichtigten", value: "a" },
      { text: "beabsichtigen", value: "b" },
      { text: "beabsichtigt", value: "c" },
      { text: "beabsichtigend", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'beabsichtigen', modalverb gibi 'zu + Infinitiv' alır.",
  },

  // 15. Modalitätsverben (3 soru)
  {
    question: "Er _______ das Ziel zu erreichen.",
    options: [
      { text: "drohte", value: "a" },
      { text: "drohen", value: "b" },
      { text: "drohte", value: "c" },
      { text: "drohend", value: "d" },
    ],
  },
  {
    question: "Sie _______ die Arbeit zu beenden.",
    options: [
      { text: "versprach", value: "a" },
      { text: "versprechen", value: "b" },
      { text: "versprochen", value: "c" },
      { text: "versprechend", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'versprechen', modalitätsverb olarak 'zu + Infinitiv' alır.",
  },
  {
    question: "Das Team _______ motiviert zu sein.",
    options: [
      { text: "schien", value: "a" },
      { text: "scheinen", value: "b" },
      { text: "scheint", value: "c" },
      { text: "geschienen", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "'scheinen', modalitätsverb olarak 'zu + Infinitiv' ile kullanılır.",
  },

  // 16. Dikkat: Şu hataları yapmayın! (3 soru)
  {
    question: "Falsch: Er versprach, das zu machen. Doğru: Er _______",
    options: [
      { text: "versprach, es zu machen.", value: "a" },
      { text: "versprach zu machen.", value: "b" },
      { text: "versprach, machen.", value: "c" },
      { text: "versprach gemacht.", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'versprechen' ile 'zu + Infinitiv' kullanılır ve nesne doğru yerde olmalıdır.",
  },
  {
    question: "Falsch: Sie drohte, zu gehen. Doğru: Sie _______",
    options: [
      { text: "drohte zu gehen.", value: "a" },
      { text: "drohte, gehen.", value: "b" },
      { text: "droht zu gehen.", value: "c" },
      { text: "drohte gegangen.", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'drohen', 'zu + Infinitiv' ile doğru şekilde kullanılır.",
  },
  {
    question: "Falsch: Er scheint, krank. Doğru: Er _______",
    options: [
      { text: "scheint krank zu sein.", value: "a" },
      { text: "scheint, krank sein.", value: "b" },
      { text: "scheinen krank.", value: "c" },
      { text: "schien krank.", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'scheinen', 'zu + Infinitiv' ile doğru bir yapı oluşturur.",
  },

  // 17. "zu + Infinitiv" alan diğer fiiller (3 soru)
  {
    question: "Er _______ das Problem zu lösen.",
    options: [
      { text: "versuchte", value: "a" },
      { text: "versuchen", value: "b" },
      { text: "versucht", value: "c" },
      { text: "versuchend", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'versuchen', 'zu + Infinitiv' alan bir fiildir.",
  },
  {
    question: "Sie _______ einen neuen Job zu finden.",
    options: [
      { text: "beabsichtigte", value: "a" },
      { text: "beabsichtigen", value: "b" },
      { text: "beabsichtigt", value: "c" },
      { text: "beabsichtigend", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'beabsichtigen', 'zu + Infinitiv' ile kullanılır.",
  },
  {
    question: "Wir _______ die Regeln zu befolgen.",
    options: [
      { text: "beschlossen", value: "a" },
      { text: "beschließen", value: "b" },
      { text: "beschloss", value: "c" },
      { text: "beschließend", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'beschließen', 'zu + Infinitiv' alan bir fiildir.",
  },

  // 18. Bir çaba / plan anlatan fiiller (3 soru)
  {
    question: "Er _______ hart _______ die Prüfung zu bestehen.",
    options: [
      { text: "arbeitete … zu arbeiten", value: "a" },
      { text: "versuchte … zu bestehen", value: "b" },
      { text: "arbeiten … bestehen", value: "c" },
      { text: "versucht … bestehen", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "'versuchen', çaba anlatan fiil olarak 'zu + Infinitiv' alır.",
  },
  {
    question: "Sie _______ einen Plan _______ umzusetzen.",
    options: [
      { text: "versuchte … zu entwickeln", value: "a" },
      { text: "versuchte … umzusetzen", value: "b" },
      { text: "versuchen … umzusetzen", value: "c" },
      { text: "versucht … umsetzen", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "'versuchen', çaba anlatımı için 'zu + Infinitiv' ile kullanılır.",
  },
  {
    question: "Wir _______ das Ziel _______ zu erreichen.",
    options: [
      { text: "versuchten … zu erreichen", value: "a" },
      { text: "versuchen erreichen", value: "b" },
      { text: "versucht … erreicht", value: "c" },
      { text: "versuchen … erreicht", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'versuchen', çaba fiili olarak 'zu + Infinitiv' alır.",
  },

  // 19. Bir başlangıç anlatan fiiller (3 soru)
  {
    question: "Sie _______ an _______ zu _______.",
    options: [
      { text: "fing … zu arbeiten", value: "a" },
      { text: "fing an … arbeiten", value: "b" },
      { text: "begann … arbeiten", value: "c" },
      { text: "beginnt … arbeiten", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'anfangen', başlangıç anlatan fiil olarak 'zu + Infinitiv' alır.",
  },
  {
    question: "Er _______ an _______ zu _______ lernen.",
    options: [
      { text: "begann … zu lernen", value: "a" },
      { text: "fing an … lernen", value: "b" },
      { text: "beginnt … lernen", value: "c" },
      { text: "fängt … lernen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'beginnen', başlangıç fiili olarak 'zu + Infinitiv' ile kullanılır.",
  },
  {
    question: "Das Team _______ an _______ zu _______ arbeiten.",
    options: [
      { text: "fing … zu an … arbeiten", value: "a" },
      { text: "fing an … zu arbeiten", value: "b" },
      { text: "begann … arbeiten", value: "c" },
      { text: "beginnt … arbeiten", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "'anfangen', başlangıç anlatımı için 'zu + Infinitiv' alır.",
  },

  // 20. Bir düşünce ifade eden fiiller (3 soru)
  {
    question: "Er _______ daran, _______ zu _______",
    options: [
      { text: "dachte … zu reisen", value: "a" },
      { text: "denkt … reisen", value: "b" },
      { text: "dachte … reisen", value: "c" },
      { text: "denkend … reisen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'denken', düşünce ifade eden fiil olarak 'zu + Infinitiv' alır.",
  },
  {
    question: "Sie _______ sich _______ zu _______",
    options: [
      { text: "vorstellte … zu leben", value: "a" },
      { text: "stellt … leben", value: "b" },
      { text: "vorstellte … leben", value: "c" },
      { text: "vorstellend … leben", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich vorstellen', düşünce fiili olarak 'zu + Infinitiv' ile kullanılır.",
  },
  {
    question: "Wir _______ über _______ zu _______ nachzudenken.",
    options: [
      { text: "dachten … zu investieren", value: "a" },
      { text: "denken … investieren", value: "b" },
      { text: "dachte … investiert", value: "c" },
      { text: "denkend … investieren", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'denken', düşünce anlatımı için 'zu + Infinitiv' alır.",
  },

  // 21. Bir anlaşmayı / varılan sonucu anlatan fiiller (3 soru)
  {
    question: "Sie _______ sich _______ zu _______",
    options: [
      { text: "einigten … zu kooperieren", value: "a" },
      { text: "einigen … kooperieren", value: "b" },
      { text: "einigte … kooperiert", value: "c" },
      { text: "einigend … kooperieren", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'sich einigen', anlaşma fiili olarak 'zu + Infinitiv' alır.",
  },
  {
    question: "Die Parteien _______ _______ zu _______",
    options: [
      { text: "vereinbarten … zu handeln", value: "a" },
      { text: "vereinbaren … handeln", value: "b" },
      { text: "vereinbarte … gehandelt", value: "c" },
      { text: "vereinbarend … handeln", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'vereinbaren', anlaşma anlatımı için 'zu + Infinitiv' ile kullanılır.",
  },
  {
    question: "Wir _______ _______ zu _______ unterstützen.",
    options: [
      { text: "einigen … uns … zu unterstützen", value: "a" },
      { text: "einigen … unterstützen", value: "b" },
      { text: "einigte … unterstützt", value: "c" },
      { text: "einigend … unterstützen", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'sich einigen', 'zu + Infinitiv' ile anlaşmayı ifade eder.",
  },

  // 22. Bir karar ya da niyet anlatan fiiller (3 soru)
  {
    question: "Er _______ _______ zu _______ bleiben.",
    options: [
      { text: "beschloss … zu bleiben", value: "a" },
      { text: "beschließen … bleiben", value: "b" },
      { text: "beschloss … bleiben", value: "c" },
      { text: "beschließend … bleiben", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'beschließen', karar fiili olarak 'zu + Infinitiv' alır.",
  },
  {
    question: "Sie _______ _______ zu _______ reisen.",
    options: [
      { text: "entschied … zu reisen", value: "a" },
      { text: "entscheiden … reisen", value: "b" },
      { text: "entschied … gereist", value: "c" },
      { text: "entscheidend … reisen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'entscheiden', niyet fiili olarak 'zu + Infinitiv' ile kullanılır.",
  },
  {
    question: "Wir _______ _______ zu _______ helfen.",
    options: [
      { text: "beschlossen … zu helfen", value: "a" },
      { text: "beschließen … helfen", value: "b" },
      { text: "beschloss … geholfen", value: "c" },
      { text: "beschließend … helfen", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'beschließen', niyet anlatımı için 'zu + Infinitiv' alır.",
  },

  // 23. Modalverb gibi davranan fiiller (3 soru)
  {
    question: "Er _______ die Aufgabe _______ zu erledigen.",
    options: [
      { text: "versprach … zu", value: "a" },
      { text: "versprechen … zu", value: "b" },
      { text: "versprach …", value: "c" },
      { text: "versprechend … zu", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'versprechen', modalverb gibi 'zu + Infinitiv' ile kullanılır.",
  },
  {
    question: "Sie _______ das Problem _______ zu lösen.",
    options: [
      { text: "drohte … zu", value: "a" },
      { text: "drohen … zu", value: "b" },
      { text: "drohte …", value: "c" },
      { text: "drohend … zu", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'drohen', modalverb gibi 'zu + Infinitiv' alır.",
  },
  {
    question: "Wir _______ den Plan _______ zu _______ umzusetzen.",
    options: [
      { text: "beabsichtigten … zu", value: "a" },
      { text: "beabsichtigen … zu", value: "b" },
      { text: "beabsichtigt …", value: "c" },
      { text: "beabsichtige … zu", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'beabsichtigen', modalverb gibi 'zu + Infinitiv' ile kullanılır.",
  },

  // 24. Modalitätsverben (3 soru)
  {
    question: "Das _______ so _______ zu _______ sein.",
    options: [
      { text: "scheint … zu sein", value: "a" },
      { text: "scheinen … sein", value: "b" },
      { text: "schien … gewesen", value: "c" },
      { text: "geschienen … zu sein", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'scheinen', modalitätsverb olarak 'zu + Infinitiv' ile kullanılır.",
  },
  {
    question: "Er _______ die Wahrheit _______ zu _______ sagen.",
    options: [
      { text: "versprach … zu", value: "a" },
      { text: "versprechen … zu", value: "b" },
      { text: "versprach …", value: "c" },
      { text: "versprechend … zu", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'versprechen', modalitätsverb olarak 'zu + Infinitiv' ile ifade edilir.",
  },
  {
    question: "Sie _______ motiviert _______ zu _______ sein.",
    options: [
      { text: "scheint … zu", value: "a" },
      { text: "scheinen … zu", value: "b" },
      { text: "schien … gewesen", value: "c" },
      { text: "geschienen … zu", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'scheinen', modalitätsverb olarak 'zu + Infinitiv' alır.",
  },

  // 25. "zu + Infinitiv" alan diğer fiiller (3 soru)
  {
    question: "Er _______ das Projekt _______ zu _______ abschließen.",
    options: [
      { text: "versuchte … zu", value: "a" },
      { text: "versuchen … zu", value: "b" },
      { text: "versucht …", value: "c" },
      { text: "versuchend … zu", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'versuchen', 'zu + Infinitiv' alan bir fiildir.",
  },
  {
    question: "Sie _______ einen neuen Job _______ zu _______ finden.",
    options: [
      { text: "beabsichtigte … zu", value: "a" },
      { text: "beabsichtigen … zu", value: "b" },
      { text: "beabsichtigt …", value: "c" },
      { text: "beabsichtige … zu", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'beabsichtigen', 'zu + Infinitiv' ile kullanılır.",
  },
  {
    question: "Wir _______ die Regeln _______ zu _______ befolgen.",
    options: [
      { text: "beschlossen … zu", value: "a" },
      { text: "beschließen … zu", value: "b" },
      { text: "beschloss …", value: "c" },
      { text: "beschließend … zu", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'beschließen', 'zu + Infinitiv' alan bir fiildir.",
  },
  //  // 26. Bir karar ya da niyet anlatan fiiller (3 soru)
  {
    question: "Er _______ _______ zu _______ aussehen.",
    options: [
      { text: "entschloss … zu", value: "a" },
      { text: "entscheiden … zu", value: "b" },
      { text: "entschied …", value: "c" },
      { text: "entscheidend … zu", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'entschließen', karar fiili olarak 'zu + Infinitiv' alır.",
  },

  {
    question: "Sie _______ _______ zu _______ reisen.",
    options: [
      { text: "entschied … zu", value: "a" },
      { text: "entscheiden … zu", value: "b" },
      { text: "entschied … gereist", value: "c" },
      { text: "entscheidend … reisen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'entscheiden', niyet fiili olarak 'zu + Infinitiv' ile kullanılır.",
  },

  {
    question: "Wir _______ _______ zu _______ helfen.",
    options: [
      { text: "beschlossen … zu", value: "a" },
      { text: "beschließen … zu helfen", value: "en" },
      { text: "beschloss … geholfen", value: "gen" },
      { text: "beschließend … helfen", value: "den" },
    ],
    correctAnswer: "ex",
    explanation: "'beschließen', niyet anlatımı için 'zu + Infinitiv' alır.",
  },

  // Ana Başlık: "lassen" fiilinin farklı kullanımları (5 soru)
  {
    question: "Er _______ sein Auto in der Werkstatt reparieren.",
    options: [
      { text: "ließ", value: "a" },
      { text: "lässt", value: "b" },
      { text: "lassen", value: "c" },
      { text: "gelassen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'lassen', bir eylemin başkası tarafından yapılmasını ifade eder ve geçmiş zamanda 'ließ' kullanılır.",
  },
  {
    question: "Sie _______ sich nicht so leicht überzeugen.",
    options: [
      { text: "lässt", value: "a" },
      { text: "ließ", value: "b" },
      { text: "lassen", value: "c" },
      { text: "gelassen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich lassen' ile bir eylemin mümkün olup olmadığını ifade eder, burada 'lässt' doğru çekimdir.",
  },
  {
    question: "Das Problem _______ sich nicht einfach lösen.",
    options: [
      { text: "lässt", value: "a" },
      { text: "ließ", value: "b" },
      { text: "lassen", value: "c" },
      { text: "gelassen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich lassen', bir eylemin zorluğunu veya imkânını ifade eder.",
  },
  {
    question: "Er _______ die Kinder im Garten spielen.",
    options: [
      { text: "ließ", value: "a" },
      { text: "lässt", value: "b" },
      { text: "lassen", value: "c" },
      { text: "gelassen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'lassen', bir eyleme izin vermek veya bir şeyin gerçekleşmesine sebep olmak için kullanılır.",
  },
  {
    question: "Wir _______ das Projekt von Experten prüfen.",
    options: [
      { text: "lassen", value: "a" },
      { text: "ließen", value: "b" },
      { text: "lässt", value: "c" },
      { text: "gelassen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'lassen', bir eylemin başkası tarafından yapılmasını ifade eder, burada 'lassen' doğru çekimdir.",
  },

  // 1. Das Verb "lassen" (5 soru)
  {
    question: "Sie _______ ihre Haare schneiden.",
    options: [
      { text: "ließ", value: "a" },
      { text: "lässt", value: "b" },
      { text: "lassen", value: "c" },
      { text: "gelassen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'lassen', bir eylemin başkası tarafından yapılmasını ifade eder ve geçmiş zamanda 'ließ' kullanılır.",
  },
  {
    question: "Er _______ den Raum dekorieren.",
    options: [
      { text: "lässt", value: "a" },
      { text: "ließ", value: "b" },
      { text: "lassen", value: "c" },
      { text: "gelassen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'lassen', bir eylemin başkası tarafından yapılmasını ifade eder, burada 'lässt' doğru çekimdir.",
  },
  {
    question: "Wir _______ die Dokumente übersetzen.",
    options: [
      { text: "ließen", value: "a" },
      { text: "lässt", value: "b" },
      { text: "lassen", value: "c" },
      { text: "gelassen", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Geçmiş zamanda 'lassen', 'ließen' ile çekimlenir.",
  },
  {
    question: "Das Buch _______ sich gut lesen.",
    options: [
      { text: "lässt", value: "a" },
      { text: "ließ", value: "b" },
      { text: "lassen", value: "c" },
      { text: "gelassen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich lassen', bir eylemin kolaylığını veya niteliğini ifade eder.",
  },
  {
    question: "Er _______ sein Fahrrad reparieren.",
    options: [
      { text: "ließ", value: "a" },
      { text: "lässt", value: "b" },
      { text: "lassen", value: "c" },
      { text: "gelassen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'lassen', bir eylemin başkası tarafından yapılmasını ifade eder, geçmiş zamanda 'ließ' kullanılır.",
  },

  // 2. Yardımcı fiil olarak "lassen" (5 soru)
  {
    question: "Er _______ sich die Haare schneiden.",
    options: [
      { text: "lässt", value: "a" },
      { text: "ließ", value: "b" },
      { text: "lassen", value: "c" },
      { text: "gelassen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Yardımcı fiil olarak 'lassen', bir eylemin başkası tarafından yapılmasını sağlar.",
  },
  {
    question: "Sie _______ das Haus von einem Architekten entwerfen.",
    options: [
      { text: "ließ", value: "a" },
      { text: "lässt", value: "b" },
      { text: "lassen", value: "c" },
      { text: "gelassen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Geçmiş zamanda yardımcı fiil olarak 'lassen', 'ließ' ile kullanılır.",
  },
  {
    question: "Wir _______ die Fenster reinigen.",
    options: [
      { text: "lassen", value: "a" },
      { text: "ließen", value: "b" },
      { text: "lässt", value: "c" },
      { text: "gelassen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Yardımcı fiil olarak 'lassen', bir eylemin başkasına yaptırılmasını ifade eder.",
  },
  {
    question: "Das Auto _______ sich leicht fahren.",
    options: [
      { text: "lässt", value: "a" },
      { text: "ließ", value: "b" },
      { text: "lassen", value: "c" },
      { text: "gelassen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich lassen', bir eylemin kolaylığını veya niteliğini ifade eder.",
  },
  {
    question: "Er _______ die Möbel von einem Profi montieren.",
    options: [
      { text: "lässt", value: "a" },
      { text: "ließ", value: "b" },
      { text: "lassen", value: "c" },
      { text: "gelassen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Yardımcı fiil olarak 'lassen', bir eylemin başkası tarafından yapılmasını sağlar.",
  },

  // 3. "sich lassen" ve "Passiversatzform" (5 soru)
  {
    question: "Das Problem _______ sich nicht leicht lösen.",
    options: [
      { text: "lässt", value: "a" },
      { text: "ließ", value: "b" },
      { text: "lassen", value: "c" },
      { text: "gelassen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich lassen', Passiversatzform olarak bir eylemin zorluğunu ifade eder.",
  },
  {
    question: "Die Tür _______ sich nicht öffnen.",
    options: [
      { text: "ließ", value: "a" },
      { text: "lässt", value: "b" },
      { text: "lassen", value: "c" },
      { text: "gelassen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Geçmiş zamanda 'sich lassen', 'ließ' ile Passiversatzform oluşturur.",
  },
  {
    question: "Das Buch _______ sich schnell lesen.",
    options: [
      { text: "lässt", value: "a" },
      { text: "ließ", value: "b" },
      { text: "lassen", value: "c" },
      { text: "gelassen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich lassen', bir eylemin kolaylığını Passiversatzform ile ifade eder.",
  },
  {
    question: "Die Aufgabe _______ sich nicht erklären.",
    options: [
      { text: "ließ", value: "a" },
      { text: "lässt", value: "b" },
      { text: "lassen", value: "c" },
      { text: "gelassen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Geçmiş zamanda 'sich lassen', bir eylemin imkânsızlığını ifade eder.",
  },
  {
    question: "Das Gerät _______ sich einfach bedienen.",
    options: [
      { text: "lässt", value: "a" },
      { text: "ließ", value: "b" },
      { text: "lassen", value: "c" },
      { text: "gelassen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich lassen', Passiversatzform olarak bir eylemin kolaylığını belirtir.",
  },

  // 4. "Dönüşlü / reflexiv" fiil olarak "sich lassen" (5 soru)
  {
    question: "Sie _______ sich nicht überzeugen.",
    options: [
      { text: "lässt", value: "a" },
      { text: "ließ", value: "b" },
      { text: "lassen", value: "c" },
      { text: "gelassen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Dönüşlü olarak 'sich lassen', bir eyleme direnç göstermeyi ifade eder.",
  },
  {
    question: "Er _______ sich von den Argumenten nicht beeinflussen.",
    options: [
      { text: "ließ", value: "a" },
      { text: "lässt", value: "b" },
      { text: "lassen", value: "c" },
      { text: "gelassen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Geçmiş zamanda dönüşlü 'sich lassen', bir eyleme direnci ifade eder.",
  },
  {
    question: "Das Kind _______ sich nicht beruhigen.",
    options: [
      { text: "ließ", value: "a" },
      { text: "lässt", value: "b" },
      { text: "lassen", value: "c" },
      { text: "gelassen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Dönüşlü 'sich lassen', bir eylemin zorluğunu geçmiş zamanda ifade eder.",
  },
  {
    question: "Wir _______ uns nicht entmutigen.",
    options: [
      { text: "lassen", value: "a" },
      { text: "ließen", value: "b" },
      { text: "lässt", value: "c" },
      { text: "gelassen", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Dönüşlü 'sich lassen', bir duruma karşı direnci ifade eder.",
  },
  {
    question: "Sie _______ sich von der Kritik nicht beeindrucken.",
    options: [
      { text: "lässt", value: "a" },
      { text: "ließ", value: "b" },
      { text: "lassen", value: "c" },
      { text: "gelassen", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Dönüşlü 'sich lassen', bir etkiye karşı direnci ifade eder.",
  },

  // 5. Feste Verbindungen im Deutschen: Verben mit Präpositionen (5 soru)
  {
    question: "Er wartet _______ seine Freunde.",
    options: [
      { text: "auf", value: "a" },
      { text: "an", value: "b" },
      { text: "in", value: "c" },
      { text: "bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'warten' fiili, sabit olarak 'auf' preposition ile kullanılır.",
  },
  {
    question: "Sie freut sich _______ das Wochenende.",
    options: [
      { text: "auf", value: "a" },
      { text: "über", value: "b" },
      { text: "an", value: "c" },
      { text: "mit", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich freuen', sabit olarak 'auf' preposition ile kullanılır.",
  },
  {
    question: "Wir denken _______ die Zukunft.",
    options: [
      { text: "an", value: "a" },
      { text: "auf", value: "b" },
      { text: "in", value: "c" },
      { text: "über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'denken', sabit olarak 'an' preposition ile kullanılır.",
  },
  {
    question: "Er spricht _______ das Thema.",
    options: [
      { text: "über", value: "a" },
      { text: "auf", value: "b" },
      { text: "an", value: "c" },
      { text: "mit", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sprechen', konu bağlamında 'über' preposition ile kullanılır.",
  },
  {
    question: "Sie interessiert sich _______ Kunst.",
    options: [
      { text: "für", value: "a" },
      { text: "an", value: "b" },
      { text: "auf", value: "c" },
      { text: "über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich interessieren', sabit olarak 'für' preposition ile kullanılır.",
  },

  // 6. Feste Verbindungen im Deutschen: Adjektive mit Präpositionen (5 soru)
  {
    question: "Sie ist _______ ihre Arbeit stolz.",
    options: [
      { text: "auf", value: "a" },
      { text: "an", value: "b" },
      { text: "über", value: "c" },
      { text: "mit", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'stolz', sabit olarak 'auf' preposition ile kullanılır.",
  },
  {
    question: "Er ist _______ die Regeln treu.",
    options: [
      { text: "an", value: "a" },
      { text: "auf", value: "b" },
      { text: "in", value: "c" },
      { text: "zu", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'treu', sabit olarak 'an' preposition ile kullanılır.",
  },
  {
    question: "Wir sind _______ die Ergebnisse zufrieden.",
    options: [
      { text: "mit", value: "a" },
      { text: "auf", value: "b" },
      { text: "an", value: "c" },
      { text: "über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'zufrieden', sabit olarak 'mit' preposition ile kullanılır.",
  },
  {
    question: "Das ist _______ mich wichtig.",
    options: [
      { text: "für", value: "a" },
      { text: "an", value: "b" },
      { text: "auf", value: "c" },
      { text: "mit", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'wichtig', sabit olarak 'für' preposition ile kullanılır.",
  },
  {
    question: "Er ist _______ die Kritik empfindlich.",
    options: [
      { text: "gegen", value: "a" },
      { text: "auf", value: "b" },
      { text: "an", value: "c" },
      { text: "über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'empfindlich', sabit olarak 'gegen' preposition ile kullanılır.",
  },

  // 7. Feste Verbindungen im Deutschen: Nomen mit Präpositionen (5 soru)
  {
    question: "Er hat Angst _______ die Prüfung.",
    options: [
      { text: "vor", value: "a" },
      { text: "auf", value: "b" },
      { text: "an", value: "c" },
      { text: "über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'Angst', sabit olarak 'vor' preposition ile kullanılır.",
  },
  {
    question: "Sie hat Lust _______ einen Ausflug.",
    options: [
      { text: "auf", value: "a" },
      { text: "an", value: "b" },
      { text: "für", value: "c" },
      { text: "mit", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'Lust', sabit olarak 'auf' preposition ile kullanılır.",
  },
  {
    question: "Das ist ein Vorteil _______ die Konkurrenz.",
    options: [
      { text: "gegenüber", value: "a" },
      { text: "auf", value: "b" },
      { text: "an", value: "c" },
      { text: "für", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Vorteil', sabit olarak 'gegenüber' preposition ile kullanılır.",
  },
  {
    question: "Wir haben Respekt _______ älteren Menschen.",
    options: [
      { text: "vor", value: "a" },
      { text: "auf", value: "b" },
      { text: "an", value: "c" },
      { text: "über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'Respekt', sabit olarak 'vor' preposition ile kullanılır.",
  },
  {
    question: "Die Entscheidung hängt _______ den Umständen.",
    options: [
      { text: "von", value: "a" },
      { text: "auf", value: "b" },
      { text: "an", value: "c" },
      { text: "über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'hängen', sabit olarak 'von' preposition ile kullanılır.",
  },

  // 8. Feste Verbindungen im Deutschen: Nomen-Verb Verbindungen (Funktionsverbgefüge) (5 soru)
  {
    question: "Er _______ zur Diskussion.",
    options: [
      { text: "Anlass geben", value: "a" },
      { text: "Anlass nehmen", value: "b" },
      { text: "Anlass machen", value: "c" },
      { text: "Anlass finden", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Anlass geben', sabit bir Funktionsverbgefüge olarak kullanılır.",
  },
  {
    question: "Sie _______ über das Ergebnis.",
    options: [
      { text: "in Kenntnis setzen", value: "a" },
      { text: "in Kenntnis nehmen", value: "b" },
      { text: "in Kenntnis geben", value: "c" },
      { text: "in Kenntnis finden", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'in Kenntnis setzen', sabit bir Funktionsverbgefüge olarak kullanılır.",
  },
  {
    question: "Das Team _______ an dem Projekt.",
    options: [
      { text: "Teil nehmen", value: "a" },
      { text: "Teil geben", value: "b" },
      { text: "Teil machen", value: "c" },
      { text: "Teil finden", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Teil nehmen', sabit bir Funktionsverbgefüge olarak kullanılır.",
  },
  {
    question: "Wir _______ die Gelegenheit.",
    options: [
      { text: "zur Verfügung stellen", value: "a" },
      { text: "zur Verfügung nehmen", value: "b" },
      { text: "zur Verfügung machen", value: "c" },
      { text: "zur Verfügung finden", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'zur Verfügung stellen', sabit bir Funktionsverbgefüge olarak kullanılır.",
  },
  {
    question: "Er _______ auf die Regeln.",
    options: [
      { text: "Acht geben", value: "a" },
      { text: "Acht nehmen", value: "b" },
      { text: "Acht machen", value: "c" },
      { text: "Acht finden", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Acht geben', sabit bir Funktionsverbgefüge olarak kullanılır.",
  },

  // 9. Präposition'lar başrolde: Fiil + Präposition örnekleri (5 soru)
  {
    question: "Er kümmert sich _______ seine Familie.",
    options: [
      { text: "um", value: "a" },
      { text: "auf", value: "b" },
      { text: "an", value: "c" },
      { text: "über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich kümmern', sabit olarak 'um' preposition ile kullanılır.",
  },
  {
    question: "Sie wartet _______ den Bus.",
    options: [
      { text: "auf", value: "a" },
      { text: "an", value: "b" },
      { text: "in", value: "c" },
      { text: "bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'warten', sabit olarak 'auf' preposition ile kullanılır.",
  },
  {
    question: "Wir sprechen _______ das Problem.",
    options: [
      { text: "über", value: "a" },
      { text: "auf", value: "b" },
      { text: "an", value: "c" },
      { text: "mit", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'sprechen', konu bağlamında 'über' ile kullanılır.",
  },
  {
    question: "Er glaubt _______ seine Fähigkeiten.",
    options: [
      { text: "an", value: "a" },
      { text: "auf", value: "b" },
      { text: "in", value: "c" },
      { text: "über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'glauben', sabit olarak 'an' preposition ile kullanılır.",
  },
  {
    question: "Sie hofft _______ eine Besserung.",
    options: [
      { text: "auf", value: "a" },
      { text: "an", value: "b" },
      { text: "in", value: "c" },
      { text: "über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'hoffen', sabit olarak 'auf' preposition ile kullanılır.",
  },

  // 10. Präposition'lar başrolde: Sıfat + Präposition örnekleri (5 soru)
  {
    question: "Er ist _______ seine Leistung stolz.",
    options: [
      { text: "auf", value: "a" },
      { text: "an", value: "b" },
      { text: "über", value: "c" },
      { text: "mit", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'stolz', sabit olarak 'auf' preposition ile kullanılır.",
  },
  {
    question: "Sie ist _______ die Regeln treu.",
    options: [
      { text: "an", value: "a" },
      { text: "auf", value: "b" },
      { text: "in", value: "c" },
      { text: "zu", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'treu', sabit olarak 'an' preposition ile kullanılır.",
  },
  {
    question: "Das Team ist _______ die Zusammenarbeit zufrieden.",
    options: [
      { text: "mit", value: "a" },
      { text: "auf", value: "b" },
      { text: "an", value: "c" },
      { text: "über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'zufrieden', sabit olarak 'mit' preposition ile kullanılır.",
  },
  {
    question: "Das ist _______ uns wichtig.",
    options: [
      { text: "für", value: "a" },
      { text: "an", value: "b" },
      { text: "auf", value: "c" },
      { text: "mit", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'wichtig', sabit olarak 'für' preposition ile kullanılır.",
  },
  {
    question: "Er ist _______ Veränderungen offen.",
    options: [
      { text: "für", value: "a" },
      { text: "auf", value: "b" },
      { text: "an", value: "c" },
      { text: "über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'offen', sabit olarak 'für' preposition ile kullanılır.",
  },

  // 11. Präposition'lar başrolde: İsim + Präposition örnekleri (5 soru)
  {
    question: "Sie hat Vertrauen _______ ihre Kollegen.",
    options: [
      { text: "in", value: "a" },
      { text: "auf", value: "b" },
      { text: "an", value: "c" },
      { text: "über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'Vertrauen', sabit olarak 'in' preposition ile kullanılır.",
  },
  {
    question: "Er hat Angst _______ die Dunkelheit.",
    options: [
      { text: "vor", value: "a" },
      { text: "auf", value: "b" },
      { text: "an", value: "c" },
      { text: "über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'Angst', sabit olarak 'vor' preposition ile kullanılır.",
  },
  {
    question: "Die Entscheidung hängt _______ den Umständen.",
    options: [
      { text: "von", value: "a" },
      { text: "auf", value: "b" },
      { text: "an", value: "c" },
      { text: "über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'hängen', sabit olarak 'von' preposition ile kullanılır.",
  },
  {
    question: "Sie hat Lust _______ einen Spaziergang.",
    options: [
      { text: "auf", value: "a" },
      { text: "an", value: "b" },
      { text: "für", value: "c" },
      { text: "mit", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'Lust', sabit olarak 'auf' preposition ile kullanılır.",
  },
  {
    question: "Wir haben Respekt _______ den Regeln.",
    options: [
      { text: "vor", value: "a" },
      { text: "auf", value: "b" },
      { text: "an", value: "c" },
      { text: "über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'Respekt', sabit olarak 'vor' preposition ile kullanılır.",
  },

  // 12. Detaylı Açıklamalar: Verben mit Präpositionen - Akkusativ ve Dativ kullanım kuralları (5 soru)
  {
    question: "Er wartet _______ (Akkusativ) den Zug.",
    options: [
      { text: "auf", value: "a" },
      { text: "an", value: "b" },
      { text: "in", value: "c" },
      { text: "bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'warten' fiili, Akkusativ nesneyle 'auf' preposition alır.",
  },
  {
    question: "Sie freut sich _______ (Akkus) _______ das Konzert.",
    options: [
      { text: "auf", value: "a" },
      { text: "an", value: "en" },
      { text: "über", value: "gen" },
      { text: "mit", value: "den" },
    ],
    correctAnswer: "a",
    explanation: "sich freuen', Akkusativ ile 'auf' preposition kullanır.",
  },
  {
    question: "Wir denken _______ (Dativ) _______ unsere Zukunft.",
    options: [
      { text: "an", value: "a" },
      { text: "auf", value: "b" },
      { text: "in", value: "c" },
      { text: "über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'denken', Dativ nesneyle 'an' preposition alır.",
  },
  {
    question: "Er spricht _______ (Akkusativ) _______ die Probleme.",
    options: [
      { text: "über", value: "a" },
      { text: "auf", value: "b" },
      { text: "an", value: "c" },
      { text: "mit", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'sprechen', Akkusativ nesneyle 'über' preposition kullanır.",
  },
  {
    question: "Sie interessiert sich _______ (Akkusativ) _______ Kunst.",
    options: [
      { text: "für", value: "a" },
      { text: "an", value: "b" },
      { text: "auf", value: "c" },
      { text: "über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'sich interessieren', Akkusativ ile 'für' preposition alır.",
  },

  // 13. Detaylı Açıklamalar: Verben mit Präpositionen - Fiillerin belirleyici rolü (5 soru)
  {
    question: "Die Wahl des Präposition hängt _______ dem Verb ab.",
    options: [
      { text: "von", value: "a" },
      { text: "auf", value: "b" },
      { text: "an", value: "c" },
      { text: "über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "abhängen, sabit olarak 'von' preposition ile kullanılır ve fiilin belirleyici rolünü vurgular.",
  },
  {
    question: "Er klagt _______ seine Probleme.",
    options: [
      { text: "über", value: "a" },
      { text: "auf", value: "b" },
      { text: "an", value: "c" },
      { text: "mit", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'klagen', fiilin belirleyici rolüyle 'über' preposition kullanır.",
  },
  {
    question: "Sie besteht _______ ihre Meinung.",
    options: [
      { text: "auf", value: "a" },
      { text: "an", value: "b" },
      { text: "in", value: "c" },
      { text: "über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'bestehen', fiilin belirleyici rolüyle 'auf' preposition alır.",
  },
  {
    question: "Wir verzichten _______ den Luxus.",
    options: [
      { text: "auf", value: "a" },
      { text: "an", value: "b" },
      { text: "in", value: "c" },
      { text: "über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'verzichten', fiilin belirleyici rolüyle 'auf' preposition kullanır.",
  },
  {
    question: "Er freut sich _______ den Erfolg.",
    options: [
      { text: "über", value: "a" },
      { text: "auf", value: "b" },
      { text: "an", value: "c" },
      { text: "mit", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich freuen', fiilin belirleyici rolüyle 'über' preposition alır.",
  },

  // 14. Detaylı Açıklamalar: Adjektive mit Präpositionen - Sıfat + edat bağlantı örnekleri (5 soru)
  {
    question: "Er ist _______ seine Freunde treu.",
    options: [
      { text: "an", value: "a" },
      { text: "auf", value: "b" },
      { text: "in", value: "c" },
      { text: "zu", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'treu', sabit olarak 'an' preposition ile sıfat bağlantısı oluşturur.",
  },
  {
    question: "Sie ist _______ die Ergebnisse zufügen.",
    options: [
      { text: "mit", value: "a" },
      { text: "auf", value: "b" },
      { text: "an", value: "c" },
      { text: "textüber", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "zufügen', sabit olarak 'mit' preposition ile sıfat bağlantısı kurar.",
  },
  {
    question: "Das ist _______ mich entscheidend.",
    options: [
      { text: "für", value: "a" },
      { text: "an", value: "b" },
      { text: "auf", value: "c" },
      { text: "mit", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'entscheidend', sabit olarak 'für' preposition ile sıfat bağlantısı kullanır.",
  },
  {
    question: "Er ist _______ Kritik empfindlich.",
    options: [
      { text: "gegen", value: "a" },
      { text: "auf", value: "b" },
      { text: "an", value: "c" },
      { text: "über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'empfindlich', sabit olarak 'gegen' preposition ile sıfat bağlantısı oluşturur.",
  },
  {
    question: "Wir sind _______ die Möglichkeiten offen.",
    options: [
      { text: "für", value: "a" },
      { text: "auf", value: "b" },
      { text: "an", value: "c" },
      { text: "über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'offen', sabit olarak 'für' preposition ile sıfat bağlantısı kullanır.",
  },

  // 15. Detaylı Açıklamalar: Nomen mit Präpositionen - İsimsel + edat bağlantı örnekleri (5 soru)
  {
    question: "Er hat Vertrauen _______ seine Fähigkeiten.",
    options: [
      { text: "in", value: "a" },
      { text: "auf", value: "b" },
      { text: "an", value: "c" },
      { text: "über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Vertrauen', sabit olarak 'in' preposition ile isim bağlantısı oluşturur.",
  },
  {
    question: "Sie hat Lust _______ Abenteuer.",
    options: [
      { text: "auf", value: "a" },
      { text: "an", value: "b" },
      { text: "für", value: "c" },
      { text: "mit", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Lustent', sabit olarak 'auf' preposition ile isim bağlantısı kullanır.",
  },
  {
    question: "Das ist ein Vorteil _______ anderen.",
    options: [
      { text: "gegenüber", value: "a" },
      { text: "auf", value: "b" },
      { text: "an", value: "c" },
      { text: "für", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Vorteil', sabit olarak 'gegenüber' preposition ile isim bağlantısı oluşturur.",
  },
  {
    question: "Wir haben Achtung _______ den Regeln.",
    options: [
      { text: "vor", value: "a" },
      { text: "auf", value: "b" },
      { text: "an", value: "c" },
      { text: "textüber", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Achtung', sabit olarak 'vor' preposition ile isim bağlantısı kullanır.",
  },
  {
    question: "Die Lösung hängt _______ den Bedingungen.",
    options: [
      { text: "von", value: "a" },
      { text: "auf", value: "b" },
      { text: "an", value: "c" },
      { text: "über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'hängen', sabit olarak 'von' preposition ile isim bağlantısı oluşturur.",
  },

  // 16. Detaylı Açıklamalar: Nomen-Verb Verbindungen (Funktionsverbgefüge) - C1-C2 seviye örnekleri (5 soru)
  {
    question: "Er _______ _______ die Situation.",
    options: [
      { text: "in Augenschein nehmen", value: "a" },
      { text: "in Augenschein geben", value: "b" },
      { text: "in Augenschein machen", value: "c" },
      { text: "in Augenschein finden", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'in Augenschein nehmen', C1-C2 seviyesinde sabit bir Funktionsverbgefüge olarak kullanılır.",
  },
  {
    question: "Sie _______ eine Entscheidung _______",
    options: [
      { text: "zur Sprache bringen", value: "a" },
      { text: "zur Sprache nehmen", value: "b" },
      { text: "zur Sprache machen", value: "c" },
      { text: "zur Sprache finden", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'zur Sprache bringen', C1-C2 seviyesinde sabit bir Funktionsverbgefüge olarak kullanılır.",
  },
  {
    question: "Das Team _______ an _______ teil.",
    options: [
      { text: "am Wettbewerb nehmen", value: "a" },
      { text: "am Wettbewerb geben", value: "b" },
      { text: "am Wettbewerb machen", value: "c" },
      { text: "am Wettbewerb finden", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Teil nehmen', C1-C2 seviyesinde kullanılan bir Funktionsverbgefüge.",
  },
  {
    question: "Wir _______ die Gelegenheit _______",
    options: [
      { text: "zur Verfügung stellen", value: "a" },
      { text: "zur Verfügung nehmen", value: "b" },
      { text: "zur Verfügung machen", value: "c" },
      { text: "zur Verfügung finden", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "zur Verfügung stellen, C1-C2 seviyesinde sabit bir Funktionsverbgefüge.",
  },
  {
    question: "Er _______ auf _______ _______",
    options: [
      { text: "in Betracht ziehen", value: "a" },
      { text: "in Betracht geben", value: "b" },
      { text: "in Betracht machen", value: "c" },
      { text: "in Betracht finden", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'in Betracht ziehen', C1-C2 seviyesinde kullanılan bir Funktionsverbgefüge.",
  },

  // 17. Detaylı Açıklamalar: Nomen-Verb Verbindungen - Yarı-deyimsel kullanımlar (5 soru)
  {
    question: "Sie _______ eine Entscheidung _______",
    options: [
      { text: "zur Eile antreiben", value: "a" },
      { text: "zur Eile nehmen", value: "b" },
      { text: "zur Eile machen", value: "c" },
      { text: "zur Eile finden", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'zur Eile antreiben', yarı-deyimsel bir Funktionsverbgefüge olarak kullanılır.",
  },
  {
    question: "Er _______ die Kontrolle _______",
    options: [
      { text: "in die Hand nehmen", value: "a" },
      { text: "in die Hand geben", value: "b" },
      { text: "in die Hand machen", value: "c" },
      { text: "in die Hand finden", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'in die Hand nehmen', yarı-deyimsel bir Funktionsverbgefüge.",
  },
  {
    question: "Wir _______ die Verantwortung _______",
    options: [
      { text: "in Kauf nehmen", value: "a" },
      { textchorus: "in Kauf geben", value: "b" },
      { text: "in Kauf machen", value: "c" },
      { text: "in Kauf finden", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'in Kauf nehmen', yarı-deyimsel bir Funktionsverbgefüge olarak kullanılır.",
  },
  {
    question: "Das Team _______ einen Vorschlag _______",
    options: [
      { text: "zur Kenntnis nehmen", value: "a" },
      { text: "zur Kenntnis geben", value: "b" },
      { text: "zur Kenntnis machen", value: "c" },
      { text: "zur Kenntnis finden", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'zur Kenntnis nehmen', yarı-deyimsel bir Funktionsverbgefüge.",
  },
  {
    question: "Er _______ die Initiative _______",
    options: [
      { text: "in Angriff nehmen", value: "a" },
      { text: "in Angriff geben", value: "b" },
      { text: "in Angriff machen", value: "c" },
      { text: "in Angriff finden", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'in Angriff nehmen', yarı-deyimsel bir Funktionsverbgefüge olarak kullanılır.",
  },

  // Ana Başlık 1: Örnekler - Verben mit Präpositionen (2 soru)
  {
    question: "Er _______ _______ die Ergebnisse der Untersuchung.",
    options: [
      { text: "bezieht sich auf", value: "a" },
      { text: "bezieht sich an", value: "b" },
      { text: "bezieht sich über", value: "c" },
      { text: "bezieht sich bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich beziehen auf', bir konuya atıfta bulunurken sabit olarak 'auf' preposition ile kullanılır.",
  },
  {
    question: "Sie _______ _______ die neuen Regeln.",
    options: [
      { text: "ärgerte sich über", value: "a" },
      { text: "ärgerte sich auf", value: "b" },
      { text: "ärgerte sich an", value: "c" },
      { text: "ärgerte sich bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich ärgern über', bir şeye kızarken sabit olarak 'über' preposition ile kullanılır.",
  },

  // Ana Başlık 2: Verben mit Präpositionen - Daima belirli bir edatla kullanılan fiiller (2 soru)
  {
    question: "Wir _______ _______ die Zukunft des Projekts.",
    options: [
      { text: "nachdenken über", value: "a" },
      { text: "nachdenken an", value: "b" },
      { text: "nachdenken auf", value: "c" },
      { text: "nachdenken bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'nachdenken über', bir konu üzerinde düşünürken sabit olarak 'über' preposition ile kullanılır.",
  },
  {
    question: "Sie _______ _______ ihre Familie.",
    options: [
      { text: "kümmert sich um", value: "a" },
      { text: "kümmert sich auf", value: "b" },
      { text: "kümmert sich an", value: "c" },
      { text: "kümmert sich über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich kümmern um', bir şeyle ilgilenirken sabit olarak 'um' preposition ile kullanılır.",
  },

  // Örnekler - Verben mit Präpositionen (26 fiil, her biri için 2 soru)
  // 1. abhängen von + D
  {
    question: "Der Erfolg _______ _______ den Bemühungen des Teams.",
    options: [
      { text: "hängt von", value: "a" },
      { text: "hängt auf", value: "b" },
      { text: "hängt an", value: "c" },
      { text: "hängt über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'abhängen von', bir şeyin başka bir şeye bağlı olduğunu ifade eder ve Dativ ile 'von' alır.",
  },
  {
    question: "Ob wir kommen, _______ _______ dem Wetter.",
    options: [
      { text: "hängt von", value: "a" },
      { text: "hängt auf", value: "b" },
      { text: "hängt an", value: "c" },
      { text: "hängt über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'abhängen von', bir durumun başka bir şeye bağlı olduğunu belirtir ve Dativ ile 'von' kullanılır.",
  },

  // 2. achten auf + A
  {
    question: "Du solltest _______ _______ die Verkehrsregeln.",
    options: [
      { text: "achten auf", value: "a" },
      { text: "achten an", value: "b" },
      { text: "achten über", value: "c" },
      { text: "achten bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'achten auf', dikkat etmek anlamında Akkusativ ile 'auf' preposition alır.",
  },
  {
    question: "Er _______ _______ die Details des Vertrags.",
    options: [
      { text: "achtete auf", value: "a" },
      { text: "achtete an", value: "b" },
      { text: "achtete über", value: "c" },
      { text: "achtete bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'achten auf', bir şeye dikkat ederken Akkusativ ile 'auf' kullanılır.",
  },

  // 3. ankommen auf + A
  {
    question: "Es _______ _______ die richtige Strategie.",
    options: [
      { text: "kommt auf", value: "a" },
      { text: "kommt an", value: "b" },
      { text: "kommt über", value: "c" },
      { text: "kommt bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'ankommen auf', bir şeyin önemli olduğunu belirtir ve Akkusativ ile 'auf' alır.",
  },
  {
    question: "Der Erfolg _______ _______ deine Bemühungen.",
    options: [
      { text: "kommt auf", value: "a" },
      { text: "kommt an", value: "b" },
      { text: "kommt über", value: "c" },
      { text: "kommt bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'ankommen auf', bir şeyin bağlı olduğunu ifade eder ve Akkusativ ile 'auf' kullanılır.",
  },

  // 4. sich ärgern über + A
  {
    question: "Sie _______ _______ _______ die Verspätung des Zuges.",
    options: [
      { text: "ärgerte sich über", value: "a" },
      { text: "ärgerte sich auf", value: "b" },
      { text: "ärgerte sich an", value: "c" },
      { text: "ärgerte sich bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich ärgern über', bir şeye kızarken Akkusativ ile 'über' alır.",
  },
  {
    question: "Er _______ _______ _______ das Verhalten seines Kollegen.",
    options: [
      { text: "ärgert sich über", value: "a" },
      { text: "ärgert sich auf", value: "b" },
      { text: "ärgert sich an", value: "c" },
      { text: "ärgert sich bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich ärgern über', sinirlenmek için Akkusativ ile 'über' kullanılır.",
  },

  // 5. sich aufregen über + A
  {
    question: "Warum _______ du _______ _______ die Kleinigkeit?",
    options: [
      { text: "regst dich über", value: "a" },
      { text: "regst dich auf", value: "b" },
      { text: "regst dich an", value: "c" },
      { text: "regst dich bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich aufregen über', bir şeye tepki gösterirken Akkusativ ile 'über' alır.",
  },
  {
    question: "Sie _______ _______ _______ die ungerechte Behandlung.",
    options: [
      { text: "regte sich über", value: "a" },
      { text: "regte sich auf", value: "b" },
      { text: "regte sich an", value: "c" },
      { text: "regte sich bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich aufregen über', öfkelenmek için Akkusativ ile 'über' kullanılır.",
  },

  // 6. sich bedanken bei + D / für + A
  {
    question: "Er _______ _______ seinem Chef _______ die Unterstützung.",
    options: [
      { text: "bedankte sich bei … für", value: "a" },
      { text: "bedankte sich auf … für", value: "b" },
      { text: "bedankte sich an … über", value: "c" },
      { text: "bedankte sich bei … über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich bedanken', kişi için Dativ ile 'bei', sebep için Akkusativ ile 'für' alır.",
  },
  {
    question: "Sie _______ _______ ihrer Freundin _______ das Geschenk.",
    options: [
      { text: "bedankte sich bei … für", value: "a" },
      { text: "bedankte sich auf … für", value: "b" },
      { text: "bedankte sich an … über", value: "c" },
      { text: "bedankte sich bei … über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich bedanken', Dativ ile 'bei' ve Akkusativ ile 'für' ile kullanılır.",
  },

  // 7. sich beschäftigen mit + D
  {
    question: "Er _______ _______ _______ der neuen Technologie.",
    options: [
      { text: "beschäftigt sich mit", value: "a" },
      { text: "beschäftigt sich auf", value: "b" },
      { text: "beschäftigt sich an", value: "c" },
      { text: "beschäftigt sich über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich beschäftigen mit', bir konuyla uğraşırken Dativ ile 'mit' alır.",
  },
  {
    question: "Sie _______ _______ _______ sozialen Projekten.",
    options: [
      { text: "beschäftigte sich mit", value: "a" },
      { text: "beschäftigte sich auf", value: "b" },
      { text: "beschäftigte sich an", value: "c" },
      { text: "beschäftigte sich über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich beschäftigen mit', Dativ ile 'mit' preposition ile kullanılır.",
  },

  // 8. sich beschweren bei + D
  {
    question: "Sie _______ _______ _______ dem Manager.",
    options: [
      { text: "beschwerte sich bei", value: "a" },
      { text: "beschwerte sich auf", value: "b" },
      { text: "beschwerte sich an", value: "c" },
      { text: "beschwerte sich über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich beschweren bei', bir kişiye şikayet ederken Dativ ile 'bei' alır.",
  },
  {
    question: "Er _______ _______ _______ der Behörde.",
    options: [
      { text: "beschwerte sich bei", value: "a" },
      { text: "beschwerte sich auf", value: "b" },
      { text: "beschwerte sich an", value: "c" },
      { text: "beschwerte sich über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich beschweren bei', Dativ ile 'bei' preposition ile kullanılır.",
  },

  // 9. bestehen aus + D
  {
    question: "Das Team _______ _______ mehreren Experten.",
    options: [
      { text: "besteht aus", value: "a" },
      { text: "besteht auf", value: "b" },
      { text: "besteht an", value: "c" },
      { text: "besteht über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'bestehen aus', bir şeyin bileşenlerini belirtirken Dativ ile 'aus' alır.",
  },
  {
    question: "Das Gericht _______ _______ frischen Zutaten.",
    options: [
      { text: "besteht aus", value: "a" },
      { text: "besteht auf", value: "b" },
      { text: "besteht an", value: "c" },
      { text: "besteht über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'bestehen aus', Dativ ile 'aus' preposition ile kullanılır.",
  },

  // 10. bestehen auf + A
  {
    question: "Er _______ _______ _______ seine Rechte.",
    options: [
      { text: "besteht auf", value: "a" },
      { text: "besteht aus", value: "b" },
      { text: "besteht an", value: "c" },
      { text: "besteht über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'bestehen auf', ısrar etmek anlamında Akkusativ ile 'auf' alır.",
  },
  {
    question: "Sie _______ _______ _______ eine genaue Antwort.",
    options: [
      { text: "besteht auf", value: "a" },
      { text: "besteht aus", value: "b" },
      { text: "besteht an", value: "c" },
      { text: "besteht über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'bestehen auf', Akkusativ ile 'auf' preposition ile kullanılır.",
  },

  // 11. sich bewerben bei + D / um + A
  {
    question: "Er _______ _______ _______ der Firma _______ die Stelle.",
    options: [
      { text: "bewarb sich bei … um", value: "a" },
      { text: "bewarb sich auf … um", value: "b" },
      { text: "bewarb sich an … für", value: "c" },
      { text: "bewarb sich bei … über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich bewerben', kurum için Dativ ile 'bei', pozisyon için Akkusativ ile 'um' alır.",
  },
  {
    question: "Sie _______ _______ _______ dem Unternehmen _______ den Job.",
    options: [
      { text: "bewirbt sich bei … um", value: "a" },
      { text: "bewirbt sich auf … um", value: "b" },
      { text: "bewirbt sich an … für", value: "c" },
      { text: "bewirbt sich bei … über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich bewerben', Dativ ile 'bei' ve Akkusativ ile 'um' ile kullanılır.",
  },

  // 12. sich beziehen auf + A
  {
    question: "Seine Aussage _______ _______ _______ das neue Gesetz.",
    options: [
      { text: "bezieht sich auf", value: "a" },
      { text: "bezieht sich an", value: "b" },
      { text: "bezieht sich über", value: "c" },
      { text: "bezieht sich bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich beziehen auf', bir konuya atıfta bulunurken Akkusativ ile 'auf' alır.",
  },
  {
    question: "Das Buch _______ _______ _______ historische Ereignisse.",
    options: [
      { text: "bezieht sich auf", value: "a" },
      { text: "bezieht sich an", value: "b" },
      { text: "bezieht sich über", value: "c" },
      { text: "bezieht sich bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich beziehen auf', Akkusativ ile 'auf' preposition ile kullanılır.",
  },

  // 13. sich entschuldigen bei + D / für + A
  {
    question:
      "Er _______ _______ _______ seinem Freund _______ die Verspätung.",
    options: [
      { text: "entschuldigte sich bei … für", value: "a" },
      { text: "entschuldigte sich auf … für", value: "b" },
      { text: "entschuldigte sich an … über", value: "c" },
      { text: "entschuldigte sich bei … über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich entschuldigen', kişi için Dativ ile 'bei', sebep için Akkusativ ile 'für' alır.",
  },
  {
    question: "Sie _______ _______ _______ dem Lehrer _______ den Fehler.",
    options: [
      { text: "entschuldigte sich bei … für", value: "a" },
      { text: "entschuldigte sich auf … für", value: "b" },
      { text: "entschuldigte sich an … über", value: "c" },
      { text: "entschuldigte sich bei … über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich entschuldigen', Dativ ile 'bei' ve Akkusativ ile 'für' ile kullanılır.",
  },

  // 14. sich erholen von + D
  {
    question: "Er _______ _______ _______ seiner Krankheit.",
    options: [
      { text: "erholte sich von", value: "a" },
      { text: "erholte sich auf", value: "b" },
      { text: "erholte sich an", value: "c" },
      { text: "erholte sich über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich erholen von', iyileşmek anlamında Dativ ile 'von' alır.",
  },
  {
    question: "Sie _______ _______ _______ dem Stress.",
    options: [
      { text: "erholt sich von", value: "a" },
      { text: "erholt sich auf", value: "b" },
      { text: "erholt sich an", value: "c" },
      { text: "erholt sich über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich erholen von', Dativ ile 'von' preposition ile kullanılır.",
  },

  // 15. sich erkundigen nach + D
  {
    question: "Er _______ _______ _______ den Preisen.",
    options: [
      { text: "erkundigte sich nach", value: "a" },
      { text: "erkundigte sich auf", value: "b" },
      { text: "erkundigte sich an", value: "c" },
      { text: "erkundigte sich über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich erkundigen nach', bilgi almak için Dativ ile 'nach' alır.",
  },
  {
    question: "Sie _______ _______ _______ den Öffnungszeiten.",
    options: [
      { text: "erkundigte sich nach", value: "a" },
      { text: "erkundigte sich auf", value: "b" },
      { text: "erkundigte sich an", value: "c" },
      { text: "erkundigte sich über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich erkundigen nach', Dativ ile 'nach' preposition ile kullanılır.",
  },

  // 16. erschrecken über + A
  {
    question: "Sie _______ _______ _______ die Nachricht.",
    options: [
      { text: "erschrak über", value: "a" },
      { text: "erschrak auf", value: "b" },
      { text: "erschrak an", value: "c" },
      { text: "erschrak bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'erschrecken über', korkmak anlamında Akkusativ ile 'über' alır.",
  },
  {
    question: "Er _______ _______ _______ die plötzliche Veränderung.",
    options: [
      { text: "erschrak über", value: "a" },
      { text: "erschrak auf", value: "b" },
      { text: "erschrak an", value: "c" },
      { text: "erschrak bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'erschrecken über', Akkusativ ile 'über' preposition ile kullanılır.",
  },

  // 17. erzählen über + A / von + D
  {
    question: "Er _______ _______ _______ seine Abenteuer.",
    options: [
      { text: "erzählte von", value: "a" },
      { text: "erzählte auf", value: "b" },
      { text: "erzählte an", value: "c" },
      { text: "erzählte bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'erzählen von', bir şeyden bahsederken Dativ ile 'von' alır.",
  },
  {
    question: "Sie _______ _______ _______ das neue Projekt.",
    options: [
      { text: "erzählte über", value: "a" },
      { text: "erzählte auf", value: "b" },
      { text: "erzählte an", value: "c" },
      { text: "erzählte bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'erzählen über', bir konudan bahsederken Akkusativ ile 'über' alır.",
  },

  // 18. fragen nach + D
  {
    question: "Er _______ _______ _______ dem Weg.",
    options: [
      { text: "fragte nach", value: "a" },
      { text: "fragte auf", value: "b" },
      { text: "fragte an", value: "c" },
      { text: "fragte über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'fragen nach', bir şey sormak için Dativ ile 'nach' alır.",
  },
  {
    question: "Sie _______ _______ _______ den Details.",
    options: [
      { text: "fragte nach", value: "a" },
      { text: "fragte auf", value: "b" },
      { text: "fragte an", value: "c" },
      { text: "fragte über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'fragen nach', Dativ ile 'nach' preposition ile kullanılır.",
  },

  // 19. gehen um + A
  {
    question: "Es _______ _______ _______ die Zukunft der Stadt.",
    options: [
      { text: "geht um", value: "a" },
      { text: "geht auf", value: "b" },
      { text: "geht an", value: "c" },
      { text: "geht über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'gehen um', söz konusu olmak anlamında Akkusativ ile 'um' alır.",
  },
  {
    question: "In der Diskussion _______ _______ _______ die neuen Regeln.",
    options: [
      { text: "ging um", value: "a" },
      { text: "ging auf", value: "b" },
      { text: "ging an", value: "c" },
      { text: "ging über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'gehen um', Akkusativ ile 'um' preposition ile kullanılır.",
  },

  // 20. halten für + A / von + D
  {
    question: "Er _______ ihn _______ einen Experten.",
    options: [
      { text: "hält für", value: "a" },
      { text: "hält auf", value: "b" },
      { text: "hält an", value: "c" },
      { text: "hält über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'halten für', birini bir şey sanmak için Akkusativ ile 'für' alır.",
  },
  {
    question: "Was _______ du _______ _______ diesem Plan?",
    options: [
      { text: "hältst von", value: "a" },
      { text: "hältst auf", value: "b" },
      { text: "hältst an", value: "c" },
      { text: "hältst über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'halten von', bir şey hakkında düşünmek için Dativ ile 'von' alır.",
  },

  // 21. sich handeln um + A
  {
    question: "Es _______ _______ _______ eine wichtige Entscheidung.",
    options: [
      { text: "handelt sich um", value: "a" },
      { text: "handelt sich auf", value: "b" },
      { text: "handelt sich an", value: "c" },
      { text: "handelt sich über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich handeln um', söz konusu olmak anlamında Akkusativ ile 'um' alır.",
  },
  {
    question: "Bei dem Treffen _______ _______ _______ neue Projekte.",
    options: [
      { text: "handelte sich um", value: "a" },
      { text: "handelte sich auf", value: "b" },
      { text: "handelte sich an", value: "c" },
      { text: "handelte sich über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich handeln um', Akkusativ ile 'um' preposition ile kullanılır.",
  },

  // 22. handeln von + D
  {
    question: "Das Buch _______ _______ _______ einer wahren Geschichte.",
    options: [
      { text: "handelt von", value: "a" },
      { text: "handelt auf", value: "b" },
      { text: "handelt an", value: "c" },
      { text: "handelt über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'handeln von', bir şeyin konusunu belirtirken Dativ ile 'von' alır.",
  },
  {
    question: "Der Film _______ _______ _______ einem Abenteuer.",
    options: [
      { text: "handelt von", value: "a" },
      { text: "handelt auf", value: "b" },
      { text: "handelt an", value: "c" },
      { text: "handelt über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'handeln von', Dativ ile 'von' preposition ile kullanılır.",
  },

  // 23. hindern an + D
  {
    question: "Nichts _______ ihn _______ _______ seinem Ziel.",
    options: [
      { text: "hindert … an", value: "a" },
      { text: "hindert … auf", value: "b" },
      { text: "hindert … bei", value: "c" },
      { text: "hindert … über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'hindern an', engellemek anlamında Dativ ile 'an' alır.",
  },
  {
    question: "Das Wetter _______ uns _______ _______ am Fortfahren.",
    options: [
      { text: "hinderte … an", value: "a" },
      { text: "hinderte … auf", value: "b" },
      { text: "hinderte … bei", value: "c" },
      { text: "hinderte … über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'hindern an', Dativ ile 'an' preposition ile kullanılır.",
  },

  // 24. hoffen auf + A
  {
    question: "Wir _______ _______ _______ eine schnelle Lösung.",
    options: [
      { text: "hoffen auf", value: "a" },
      { text: "hoffen an", value: "an" },
      { text: "hoffen bei", value: "c" },
      { text: "hoffen über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'hoffen auf', umut etmek için Akkusativ ile 'auf' alır.",
  },
  {
    question: "Sie _______ _______ _______ bessere Zeiten.",
    options: [
      { text: "hofft auf", value: "a" },
      { text: "hofft an", value: "an" },
      { text: "hofft bei", value: "c" },
      { text: "hofft über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'hoffen auf', Akkusativ ile 'auf' preposition ile kullanılır.",
  },

  // 25. klagen über + A
  {
    question: "Er _______ _______ _______ die hohen Preisen.",
    options: [
      { text: "textklagte über", value: "a" },
      { text: "textklagte auf", value: "an" },
      { text: "textklagte an", value: "c" },
      { text: "textklagte bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'klagen über', şikayet etmek için Akkusativ ile 'über' alır.",
  },
  {
    question: "Sie _______ _______ _______ die Arbeitsbedingungen.",
    options: [
      { text: "textklagt über", value: "a" },
      { text: "textklagt auf", value: "an" },
      { text: "textklagt an", value: "c" },
      { text: "textklagt bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'klagen über', Akkusativ ile 'über' preposition ile kullanılır.",
  },

  // 26. kämpfen für + A
  {
    question: "Sie _______ _______ _______ Gerechtigkeit.",
    options: [
      { text: "kämpfen für", value: "a" },
      { text: "kämpfen auf", value: "b" },
      { text: "kämpfen an", value: "c" },
      { text: "kämpfen über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'kämpfen für', mücadele etmek için Akkusativ ile 'für' alır.",
  },
  {
    question: "Er _______ _______ _______ seine Rechte.",
    options: [
      { text: "kämpfte für", value: "a" },
      { text: "kämpfte auf", value: "b" },
      { text: "kämpfte an", value: "c" },
      { text: "kämpfte über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'kämpfen für', Akkusativ ile 'für' preposition ile kullanılır.",
  },

  // Verben mit Präpositionen - Daima belirli bir edatla kullanılan fiiler (21 fiil, her biri için 2 soru)
  // 1. sich kümmern um + A
  {
    question: "Sie _______ _______ _______ ihre Kinder.",
    options: [
      { text: "kümmert sich um", value: "a" },
      { text: "kümmert sich auf", value: "b" },
      { text: "kümmert sich an", value: "c" },
      { text: "kümmert sich über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'sich kümmern um', ilgilenmek için Akkusativ ile 'um' alır.",
  },
  {
    question: "Er _______ _______ _______ die Organisation des Events.",
    options: [
      { text: "kümmerte sich um", value: "a" },
      { text: "kümmerte sich auf", value: "b" },
      { text: "kümmerte sich an", value: "c" },
      { text: "kümmerte sich über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich kümmern um', Akkusativ ile 'um' preposition ile kullanılır.",
  },

  // 2. leiden an + D / unter + D / unter + A
  {
    question: "Er _______ _______ _______ einer Krankheit.",
    options: [
      { text: "leidet an", value: "a" },
      { text: "leidet auf", value: "b" },
      { text: "leidet über", value: "c" },
      { text: "leidet bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'leiden an', bir şeyden muzdarip olmak için Dativ ile 'an' alır.",
  },
  {
    question: "Sie _______ _______ _______ dem Druck.",
    options: [
      { text: "leidet unter", value: "a" },
      { text: "leidet auf", value: "b" },
      { text: "leidet an", value: "c" },
      { text: "leidet über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'leiden unter', bir şeyden acı çekmek için Dativ ile 'unter' alır.",
  },

  // 3. nachdenken über + A
  {
    question: "Wir _______ _______ _______ die Zukunft.",
    options: [
      { text: "nachdenken über", value: "a" },
      { text: "nachdenken auf", value: "an" },
      { text: "nachdenken an", value: "c" },
      { text: "nachdenken bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'nachdenken über', düşünmek için Akkusativ ile 'über' alır.",
  },
  {
    question: "Er _______ _______ _______ das Angebot.",
    options: [
      { text: "dachte nach über", value: "a" },
      { text: "dachte nach auf", value: "b" },
      { text: "dachte nach an", value: "c" },
      { text: "dachte nach bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'nachdenken über', Akkusativ ile 'über' preposition ile kullanılır.",
  },

  // 4. rechnen über + D
  {
    question: "Wir müssen _______ _______ _______ unerwarteten Kosten.",
    options: [
      { text: "rechnen mit", value: "a" },
      { text: "rechnen auf", value: "b" },
      { text: "rechnen an", value: "c" },
      { text: "rechnen über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'rechnen mit', beklemek veya hesaplamak için Dativ ile 'mit' alır.",
  },
  {
    question: "Er _______ _______ _______ einem Problem.",
    options: [
      { text: "rechnete mit", value: "a" },
      { text: "rechnete auf", value: "b" },
      { text: "rechnete an", value: "c" },
      { text: "rechnete über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'rechnen mit', Dativ ile 'mit' preposition ile kullanılır.",
  },
  // 5. reden über + A / von + D
  {
    question: "Sie _______ _______ _______ ihre Pläne.",
    options: [
      { text: "redeten über", value: "a" },
      { text: "redeten auf", value: "b" },
      { text: "redeten an", value: "c" },
      { text: "redeten bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'reden über', bir konudan konuşurken Akkusativ ile 'über' alır.",
  },
  {
    question: "Er _______ _______ _______ seiner Kindheit.",
    options: [
      { text: "redete von", value: "den" },
      { text: "redete auf", value: "en" },
      { text: "redete an", value: "gen" },
      { text: "redete bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'reden von', bir şeyden bahsederken Dativ ile 'von' kullanılır.",
  },

  // 6. riechen nach + D
  {
    question: "Das Essen _______ _______ _______ frischen Kräutern.",
    options: [
      { text: "riecht nach", value: "a" },
      { text: "riecht auf", value: "b" },
      { text: "riecht an", value: "c" },
      { text: "riecht über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'riechen nach', bir koku ifade etmek için Dativ ile 'nach' alır.",
  },
  {
    question: "Die Blumen _______ _______ _______ Rosen.",
    options: [
      { text: "rochen nach", value: "a" },
      { text: "rochen auf", value: "b" },
      { text: "rochen an", value: "c" },
      { text: "rochen über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'riechen nach', Dativ ile 'nach' preposition ile kullanılır.",
  },

  // 7. schmecken nach + D
  {
    question: "Das Getränk _______ _______ _______ Zitrone.",
    options: [
      { text: "schmeckt nach", value: "a" },
      { text: "schmeckt auf", value: "b" },
      { text: "schmeckt an", value: "c" },
      { text: "schmeckt über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'schmecken nach', bir tat ifade etmek için Dativ ile 'nach' alır.",
  },
  {
    question: "Die Suppe _______ _______ _______ Knoblauch.",
    options: [
      { text: "schmeckte nach", value: "a" },
      { text: "schmeckte auf", value: "b" },
      { text: "schmeckte an", value: "c" },
      { text: "schmeckte über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'schmecken nach', Dativ ile 'nach' preposition ile kullanılır.",
  },

  // 8. sich schützen vor + D
  {
    question: "Wir _______ _______ _______ der Kälte.",
    options: [
      { text: "schützen uns vor", value: "a" },
      { text: "schützen uns auf", value: "b" },
      { text: "schützen uns an", value: "c" },
      { text: "schützen uns über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'sich schützen vor', korunmak için Dativ ile 'vor' alır.",
  },
  {
    question: "Er _______ _______ _______ Gefahren.",
    options: [
      { text: "schützte sich vor", value: "a" },
      { text: "schützte sich auf", value: "b" },
      { text: "schützte sich an", value: "c" },
      { text: "schützte sich über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich schützen vor', Dativ ile 'vor' preposition ile kullanılır.",
  },

  // 9. sein für + A / gegen + A
  {
    question: "Er _______ _______ _______ die neue Regelung.",
    options: [
      { text: "ist für", value: "a" },
      { text: "ist auf", value: "b" },
      { text: "ist an", value: "c" },
      { text: "ist über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'sein für', lehte olmak için Akkusativ ile 'für' alır.",
  },
  {
    question: "Sie _______ _______ _______ die Änderungen.",
    options: [
      { text: "ist gegen", value: "a" },
      { text: "ist auf", value: "b" },
      { text: "ist an", value: "c" },
      { text: "ist über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'sein gegen', aleyhte olmak için Akkusativ ile 'gegen' alır.",
  },

  // 10. sorgen für + A
  {
    question:
      "Die Eltern _______ _______ _______ das Wohlergehen ihrer Kinder.",
    options: [
      { text: "sorgen für", value: "a" },
      { text: "sorgen auf", value: "b" },
      { text: "sorgen an", value: "c" },
      { text: "sorgen über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'sorgen für', özen göstermek için Akkusativ ile 'für' alır.",
  },
  {
    question: "Er _______ _______ _______ die Sicherheit.",
    options: [
      { text: "sorgte für", value: "a" },
      { text: "sorgte auf", value: "b" },
      { text: "sorgte an", value: "c" },
      { text: "sorgte über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sorgen für', Akkusativ ile 'für' preposition ile kullanılır.",
  },

  // 11. sterben an + D
  {
    question: "Er _______ _______ _______ einer schweren Krankheit.",
    options: [
      { text: "starb an", value: "a" },
      { text: "starb auf", value: "b" },
      { text: "starb über", value: "c" },
      { text: "starb bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'sterben an', bir nedenden ölmek için Dativ ile 'an' alır.",
  },
  {
    question: "Sie _______ _______ _______ den Folgen des Unfalls.",
    options: [
      { text: "starb an", value: "an" },
      { text: "starb auf", value: "an" },
      { text: "starb über", value: "c" },
      { text: "starb bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'sterben an', Dativ ile 'an' preposition ile kullanılır.",
  },

  // 12. sich unterhalten mit + D / über + A
  {
    question: "Er _______ _______ _______ seinem Freund über das Projekt.",
    options: [
      { text: "unterhielt sich mit … über", value: "a" },
      { text: "unterhielt sich auf … für", value: "b" },
      { text: "unterhielt sich an … über", value: "c" },
      { text: "unterhielt sich bei … für", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich unterhalten', kişi için Dativ ile 'mit', konu için Akkusativ ile 'über' alır.",
  },
  {
    question: "Sie _______ _______ _______ ihren Kollegen über die Pläne.",
    options: [
      { text: "unterhielt sich mit … über", value: "a" },
      { text: "unterhielt sich auf … für", value: "b" },
      { text: "unterhielt sich an … über", value: "c" },
      { text: "unterhielt sich bei … für", value: "d" },
    ],
    correctAnswer:
      "'sich unterhalten', Dativ ile 'mit' ve Akkusativ ile 'über' ile kullanılır.",
  },

  // 13. sich verabreden mit + D
  {
    question: "Er _______ _______ _______ seiner Freundin.",
    options: [
      { text: "verabredete mit", value: "a" },
      { text: "verabredete auf", value: "b" },
      { text: "verabredete an", value: "c" },
      { text: "verabredete über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich verabreden mit', randevu yapmak için Dativ ile 'mit' alır.",
  },
  {
    question: "Sie _______ _______ _______ ihrem Team.",
    options: [
      { text: "verabredet sich mit", value: "a" },
      { text: "verabredet sich auf", value: "b" },
      { text: "verabredet sich an", value: "c" },
      { text: "verabredet sich über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich verabreden mit', Dativ ile 'mit' preposition ile kullanılır.",
  },

  // 14. sich verabschieden von + D
  {
    question: "Er _______ _______ _______ seinen Kollegen.",
    options: [
      { text: "verabschiedete sich von", value: "a" },
      { text: "verabschiedete sich auf", value: "b" },
      { text: "verabschiedete sich an", value: "c" },
      { text: "verabschiedete sich über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich verabschieden von', vedalaşmak için Dativ ile 'von' alır.",
  },
  {
    question: "Sie _______ _______ _______ ihrer Familie.",
    options: [
      { text: "verabschiedete sich von", value: "a" },
      { text: "verabschiedete sich auf", value: "b" },
      { text: "verabschiedete sich an", value: "c" },
      { text: "verabschiedete sich über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich verabschieden von', Dativ ile 'von' preposition ile kullanılır.",
  },

  // 15. sich verlieben in + A
  {
    question: "Er _______ _______ _______ sie.",
    options: [
      { text: "verliebte sich in", value: "a" },
      { text: "verliebte sich auf", value: "b" },
      { text: "verliebte sich an", value: "c" },
      { text: "verliebte sich über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich verlieben in', aşık olmak için Akkusativ ile 'in' alır.",
  },
  {
    question: "Sie _______ _______ _______ ihren Nachbarn.",
    options: [
      { text: "verliebte sich in", value: "a" },
      { text: "verliebte sich auf", value: "b" },
      { text: "verliebte sich an", value: "c" },
      { text: "verliebte sich über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich verlieben in', Akkusativ ile 'in' preposition ile kullanılır.",
  },

  // 16. sich verstehen mit + D
  {
    question: "Er _______ _______ _______ seinen Kollegen gut.",
    options: [
      { text: "versteht sich mit", value: "a" },
      { text: "versteht sich auf", value: "b" },
      { text: "versteht sich an", value: "c" },
      { text: "versteht sich über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'sich verstehen mit', anlaşmak için Dativ ile 'mit' alır.",
  },
  {
    question: "Sie _______ _______ _______ ihren Nachbarn.",
    options: [
      { text: "verstand sich mit", value: "a" },
      { text: "verstand sich auf", value: "b" },
      { text: "verstand sich an", value: "c" },
      { text: "verstand sich über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich verstehen mit', Dativ ile 'mit' preposition ile kullanılır.",
  },

  // 17. sich vorbereiten auf + A
  {
    question: "Wir _______ _______ _______ die Prüfung.",
    options: [
      { text: "bereiten uns auf", value: "a" },
      { text: "bereiten uns an", value: "b" },
      { text: "bereiten uns über", value: "c" },
      { text: "bereiten uns bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich vorbereiten auf', hazırlanmak için Akkusativ ile 'auf' alır.",
  },
  {
    question: "Er _______ _______ _______ das Vorstellungsgespräch.",
    options: [
      { text: "bereitete sich auf", value: "a" },
      { text: "bereitete sich an", value: "b" },
      { text: "bereitete sich über", value: "c" },
      { text: "bereitete sich bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich vorbereiten auf', Akkusativ ile 'auf' preposition ile kullanılır.",
  },

  // 18. sich wenden an + A
  {
    question: "Er _______ _______ _______ den Support.",
    options: [
      { text: "wandte sich an", value: "a" },
      { text: "wandte sich auf", value: "b" },
      { text: "wandte sich über", value: "c" },
      { text: "wandte sich bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'sich wenden an', başvurmak için Akkusativ ile 'an' alır.",
  },
  {
    question: "Sie _______ _______ _______ die Behörde.",
    options: [
      { text: "wendet sich an", value: "a" },
      { text: "wendet sich auf", value: "b" },
      { text: "wendet sich über", value: "c" },
      { text: "wendet sich bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich wenden an', Akkusativ ile 'an' preposition ile kullanılır.",
  },

  // 19. sich wundern über + A
  {
    question: "Er _______ _______ _______ die Entscheidung.",
    options: [
      { text: "wunderte sich über", value: "a" },
      { text: "wunderte sich auf", value: "b" },
      { text: "wunderte sich an", value: "c" },
      { text: "wunderte sich bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich wundern über', şaşırmak için Akkusativ ile 'über' alır.",
  },
  {
    question: "Sie _______ _______ _______ sein Verhalten.",
    options: [
      { text: "wundert sich über", value: "a" },
      { text: "wundert sich auf", value: "b" },
      { text: "wundert sich an", value: "c" },
      { text: "wundert sich bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich wundern über', Akkusativ ile 'über' preposition ile kullanılır.",
  },

  // 20. zuschauen bei + D
  {
    question: "Er _______ _______ _______ dem Spiel.",
    options: [
      { text: "schaute zu bei", value: "a" },
      { text: "schaute zu auf", value: "b" },
      { text: "schaute zu an", value: "c" },
      { text: "schaute zu über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'zuschauen bei', izlemek için Dativ ile 'bei' alır.",
  },
  {
    question: "Sie _______ _______ _______ der Veranstaltung.",
    options: [
      { text: "schaute zu bei", value: "a" },
      { text: "schaute zu auf", value: "b" },
      { text: "schaute zu an", value: "c" },
      { text: "schaute zu über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'zuschauen bei', Dativ ile 'bei' preposition ile kullanılır.",
  },

  // 21. zweifeln an + D
  {
    question: "Er _______ _______ _______ der Richtigkeit der Aussage.",
    options: [
      { text: "zweifelt an", value: "a" },
      { text: "zweifelt auf", value: "b" },
      { text: "zweifelt über", value: "c" },
      { text: "zweifelt bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'zweifeln an', şüphelenmek için Dativ ile 'an' alır.",
  },
  {
    question: "Sie _______ _______ _______ seiner Ehrlichkeit.",
    options: [
      { text: "zweifelte an", value: "a" },
      { text: "zweifelte auf", value: "b" },
      { text: "zweifelte über", value: "c" },
      { text: "zweifelte bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'zweifeln an', Dativ ile 'an' preposition ile kullanılır.",
  },

  // Ana Başlık: Adjektive mit Präpositionen (2 soru)
  {
    question: "Er _______ _______ seine Leistungen sehr zufrieden.",
    options: [
      { text: "ist stolz auf", value: "a" },
      { text: "ist stolz an", value: "b" },
      { text: "ist stolz über", value: "c" },
      { text: "ist stolz bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'stolz auf sein' gurur duymak için sabit olarak Akkusativ ile 'auf' preposition alır.",
  },
  {
    question: "Sie war _______ _______ die freundliche Geste sehr.",
    options: [
      { text: "erfreut über", value: "a" },
      { text: "erfreut auf", value: "b" },
      { text: "erfreut an", value: "c" },
      { text: "erfreut bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'erfreut über sein' memnun olmak için sabit olarak Akkusativ ile 'über' preposition alır.",
  },

  // Kategori Başlığı: Akkusativ ile Kullanılan Sıfatlar (2 soru)
  {
    question: "Wir sind _______ _______ deine Unterstützung.",
    options: [
      { text: "dankbar für", value: "a" },
      { text: "dankbar auf", value: "b" },
      { text: "dankbar an", value: "c" },
      { text: "dankbar über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'dankbar für sein' minnettar olmak için Akkusativ ile 'für' preposition alır.",
  },
  {
    question: "Er ist _______ seinen Erfolg.",
    options: [
      { text: "stolz auf", value: "a" },
      { text: "stolz an", value: "b" },
      { text: "stolz über", value: "c" },
      { text: "stolz bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'stolz auf sein' gurur duymak için Akkusativ ile 'auf' preposition alır.",
  },

  // Kategori Başlığı: Edatlı İsimler ve Anlamları (2 soru)
  {
    question: "Es wurde ein _______ _______ den Umweltschutz unterzeichnet.",
    options: [
      { text: "Abkommen über", value: "a" },
      { text: "Abkommen auf", value: "b" },
      { text: "Abkommen an", value: "c" },
      { text: "Abkommen bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'das Abkommen über' bir anlaşmayı ifade eder ve Akkusativ ile 'über' preposition alır.",
  },
  {
    question: "Der _______ _______ die Macht war intensiv.",
    options: [
      { text: "Kampf um", value: "a" },
      { text: "Kampf auf", value: "b" },
      { text: "Kampf an", value: "c" },
      { text: "Kampf über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'der Kampf um' mücadele anlamında Akkusativ ile 'um' preposition alır.",
  },

  // Alt Konular: Akkusativ ile Kullanılan Sıfatlar (20 x 2 = 40 soru)
  // 1. um etw. bemüht sein
  {
    question: "Sie ist _______ _______ eine schnelle Lösung des Problems.",
    options: [
      { text: "bemüht um", value: "a" },
      { text: "bemüht auf", value: "b" },
      { text: "bemüht an", value: "c" },
      { text: "bemüht über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'bemüht um sein' bir şeyle uğraşmak için Akkusativ ile 'um' preposition alır.",
  },
  {
    question: "Er war _______ _______ die Verbesserung der Arbeitsbedingungen.",
    options: [
      { text: "bemüht um", value: "a" },
      { text: "bemüht auf", value: "b" },
      { text: "bemüht an", value: "c" },
      { text: "bemüht über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'bemüht um sein' bir konuda çaba göstermek için Akkusativ ile 'um' kullanılır.",
  },

  // 2. für etw. dankbar sein
  {
    question: "Wir sind _______ _______ deine großzügige Hilfe.",
    options: [
      { text: "dankbar für", value: "a" },
      { text: "dankbar auf", value: "b" },
      { text: "dankbar an", value: "c" },
      { text: "dankbar über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'dankbar für sein' minnettar olmak için Akkusativ ile 'für' preposition alır.",
  },
  {
    question: "Sie war _______ _______ die Unterstützung ihrer Familie.",
    options: [
      { text: "dankbar für", value: "a" },
      { text: "dankbar auf", value: "b" },
      { text: "dankbar an", value: "c" },
      { text: "dankbar über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'dankbar für sein' Akkusativ ile 'für' preposition ile kullanılır.",
  },

  // 3. für etw. bekannt sein
  {
    question: "Die Region ist _______ _______ ihre Weine.",
    options: [
      { text: "bekannt für", value: "a" },
      { text: "bekannt auf", value: "b" },
      { text: "bekannt an", value: "c" },
      { text: "bekannt über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'bekannt für sein' tanınmak için Akkusativ ile 'für' preposition alır.",
  },
  {
    question: "Er ist _______ _______ seine innovativen Ideen.",
    options: [
      { text: "bekannt für", value: "a" },
      { text: "bekannt auf", value: "b" },
      { text: "bekannt an", value: "c" },
      { text: "bekannt über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'bekannt für sein' Akkusativ ile 'für' preposition ile kullanılır.",
  },

  // 4. für etw. entscheidend sein
  {
    question: "Seine Expertise ist _______ _______ den Erfolg des Projekts.",
    options: [
      { text: "entscheidend für", value: "a" },
      { text: "entscheidend auf", value: "b" },
      { text: "entscheidend an", value: "c" },
      { text: "entscheidend über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'entscheidend für sein' belirleyici olmak için Akkusativ ile 'für' preposition alır.",
  },
  {
    question:
      "Diese Entscheidung ist _______ _______ die Zukunft des Unternehmens.",
    options: [
      { text: "entscheidend für", value: "a" },
      { text: "entscheidend auf", value: "b" },
      { text: "entscheidend an", value: "c" },
      { text: "entscheidend über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'entscheidend für sein' Akkusativ ile 'für' preposition ile kullanılır.",
  },

  // 5. für etw. geeignet sein
  {
    question: "Dieses Material ist _______ _______ den Bau.",
    options: [
      { text: "geeignet für", value: "a" },
      { text: "geeignet auf", value: "b" },
      { text: "geeignet an", value: "c" },
      { text: "geeignet über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'geeignet für sein' uygun olmak için Akkusativ ile 'für' preposition alır.",
  },
  {
    question: "Er ist _______ _______ diese anspruchsvolle Aufgabe.",
    options: [
      { text: "geeignet für", value: "a" },
      { text: "geeignet auf", value: "b" },
      { text: "geeignet an", value: "c" },
      { text: "geeignet über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'geeignet für sein' Akkusativ ile 'für' preposition ile kullanılır.",
  },

  // 6. für jmdn./etw. angenehm sein
  {
    question: "Die Atmosphäre war _______ _______ die Gäste.",
    options: [
      { text: "angenehm für", value: "a" },
      { text: "angenehm auf", value: "b" },
      { text: "angenehm an", value: "c" },
      { text: "angenehm über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'angenehm für sein' hoşnut edici olmak için Akkusativ ile 'für' preposition alır.",
  },
  {
    question: "Das Treffen war _______ _______ alle Beteiligten.",
    options: [
      { text: "angenehm für", value: "a" },
      { text: "angenehm auf", value: "b" },
      { text: "angenehm an", value: "c" },
      { text: "angenehm über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'angenehm für sein' Akkusativ ile 'für' preposition ile kullanılır.",
  },

  // 7. für etw. verantwortlich sein
  {
    question: "Er ist _______ _______ die Organisation des Events.",
    options: [
      { text: "verantwortlich für", value: "a" },
      { text: "verantwortlich auf", value: "b" },
      { text: "verantwortlich an", value: "c" },
      { text: "verantwortlich über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'verantwortlich für sein' sorumlu olmak için Akkusativ ile 'für' preposition alır.",
  },
  {
    question: "Sie sind _______ _______ die Sicherheit der Mitarbeiter.",
    options: [
      { text: "verantwortlich für", value: "a" },
      { text: "verantwortlich auf", value: "b" },
      { text: "verantwortlich an", value: "c" },
      { text: "verantwortlich über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'verantwortlich für sein' Akkusativ ile 'für' preposition ile kullanılır.",
  },

  // 8. für etw. zuständig sein
  {
    question: "Wer ist _______ _______ die Finanzen?",
    options: [
      { text: "zuständig für", value: "a" },
      { text: "zuständig auf", value: "b" },
      { text: "zuständig an", value: "c" },
      { text: "zuständig über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'zuständig für sein' yetkili olmak için Akkusativ ile 'für' preposition alır.",
  },
  {
    question: "Sie ist _______ _______ die Kundenbetreuung.",
    options: [
      { text: "zuständig für", value: "a" },
      { text: "zuständig auf", value: "b" },
      { text: "zuständig an", value: "c" },
      { text: "zuständig über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'zuständig für sein' Akkusativ ile 'für' preposition ile kullanılır.",
  },

  // 9. auf etw. stolz sein
  {
    question: "Er ist _______ _______ seine akademischen Leistungen.",
    options: [
      { text: "stolz auf", value: "a" },
      { text: "stolz an", value: "b" },
      { text: "stolz über", value: "c" },
      { text: "stolz bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'stolz auf sein' gurur duymak için Akkusativ ile 'auf' preposition alır.",
  },
  {
    question: "Sie sind _______ _______ ihren kulturellen Beitrag.",
    options: [
      { text: "stolz auf", value: "a" },
      { text: "stolz an", value: "b" },
      { text: "stolz über", value: "c" },
      { text: "stolz bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'stolz auf sein' Akkusativ ile 'auf' preposition ile kullanılır.",
  },

  // 10. auf etw. gespannt sein
  {
    question: "Wir sind _______ _______ die neuen Ergebnisse.",
    options: [
      { text: "gespannt auf", value: "a" },
      { text: "gespannt an", value: "b" },
      { text: "gespannt über", value: "c" },
      { text: "gespannt bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'gespannt auf sein' merak etmek için Akkusativ ile 'auf' preposition alır.",
  },
  {
    question: "Er ist _______ _______ die bevorstehende Veranstaltung.",
    options: [
      { text: "gespannt auf", value: "a" },
      { text: "gespannt an", value: "b" },
      { text: "gespannt über", value: "c" },
      { text: "gespannt bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'gespannt auf sein' Akkusativ ile 'auf' preposition ile kullanılır.",
  },

  // 11. auf jmdn./etw. sauer sein
  {
    question: "Sie ist _______ _______ ihren Kollegen wegen der Verspätung.",
    options: [
      { text: "sauer auf", value: "a" },
      { text: "sauer an", value: "b" },
      { text: "sauer über", value: "c" },
      { text: "sauer bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sauer auf sein' birine kızmak için Akkusativ ile 'auf' preposition alır.",
  },
  {
    question: "Er war _______ _______ die unfaire Behandlung.",
    options: [
      { text: "sauer auf", value: "a" },
      { text: "sauer an", value: "b" },
      { text: "sauer über", value: "c" },
      { text: "sauer bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sauer auf sein' Akkusativ ile 'auf' preposition ile kullanılır.",
  },

  // 12. auf etw. scharf sein
  {
    question: "Er ist _______ _______ die neueste Technologie.",
    options: [
      { text: "scharf auf", value: "a" },
      { text: "scharf an", value: "b" },
      { text: "scharf über", value: "c" },
      { text: "scharf bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'scharf auf sein' hevesli olmak için Akkusativ ile 'auf' preposition alır.",
  },
  {
    question: "Sie sind _______ _______ das neue Abenteuer.",
    options: [
      { text: "scharf auf", value: "a" },
      { text: "scharf an", value: "b" },
      { text: "scharf über", value: "c" },
      { text: "scharf bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'scharf auf sein' Akkusativ ile 'auf' preposition ile kullanılır.",
  },

  // 13. auf jmdn./etw. wütend sein
  {
    question: "Er ist _______ _______ seinen Nachbarn wegen des Lärms.",
    options: [
      { text: "wütend auf", value: "a" },
      { text: "wütend an", value: "b" },
      { text: "wütend über", value: "c" },
      { text: "wütend bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'wütend auf sein' öfkelenmek için Akkusativ ile 'auf' preposition alır.",
  },
  {
    question: "Sie war _______ _______ die ungerechte Entscheidung.",
    options: [
      { text: "wütend auf", value: "a" },
      { text: "wütend an", value: "b" },
      { text: "wütend über", value: "c" },
      { text: "wütend bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'wütend auf sein' Akkusativ ile 'auf' preposition ile kullanılır.",
  },

  // 14. über etw. erfreut sein
  {
    question: "Sie ist _______ _______ die positive Nachricht.",
    options: [
      { text: "erfreut über", value: "a" },
      { text: "erfreut auf", value: "b" },
      { text: "erfreut an", value: "c" },
      { text: "erfreut bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'erfreut über sein' memnun olmak için Akkusativ ile 'über' preposition alır.",
  },
  {
    question: "Er war _______ _______ den Erfolg seines Teams.",
    options: [
      { text: "erfreut über", value: "a" },
      { text: "erfreut auf", value: "b" },
      { text: "erfreut an", value: "c" },
      { text: "erfreut bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'erfreut über sein' Akkusativ ile 'über' preposition ile kullanılır.",
  },

  // 15. über etw. glücklich sein
  {
    question: "Sie sind _______ _______ ihren neuen Arbeitsplatz.",
    options: [
      { text: "glücklich über", value: "a" },
      { text: "glücklich auf", value: "b" },
      { text: "glücklich an", value: "c" },
      { text: "glücklich bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'glücklich über sein' mutlu olmak için Akkusativ ile 'über' preposition alır.",
  },
  {
    question: "Er ist _______ _______ die Einladung zur Feier.",
    options: [
      { text: "glücklich über", value: "a" },
      { text: "glücklich auf", value: "b" },
      { text: "glücklich an", value: "c" },
      { text: "glücklich bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'glücklich über sein' Akkusativ ile 'über' preposition ile kullanılır.",
  },

  // 16. über etw. verwundert sein
  {
    question: "Er ist _______ _______ die unerwartete Entscheidung.",
    options: [
      { text: "verwundert über", value: "a" },
      { text: "verwundert auf", value: "b" },
      { text: "verwundert an", value: "c" },
      { text: "verwundert bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'verwundert über sein' şaşırmak için Akkusativ ile 'über' preposition alır.",
  },
  {
    question: "Sie war _______ _______ sein plötzliches Verhalten.",
    options: [
      { text: "verwundert über", value: "a" },
      { text: "verwundert auf", value: "b" },
      { text: "verwundert an", value: "c" },
      { text: "verwundert bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'verwundert über sein' Akkusativ ile 'über' preposition ile kullanılır.",
  },

  // 17. über etw. entsetzt sein
  {
    question: "Sie war _______ _______ die schrecklichen Nachrichten.",
    options: [
      { text: "entsetzt über", value: "a" },
      { text: "entsetzt auf", value: "b" },
      { text: "entsetzt an", value: "c" },
      { text: "entsetzt bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'entsetzt über sein' dehşete kapılmak için Akkusativ ile 'über' preposition alır.",
  },
  {
    question: "Er ist _______ _______ die jüngsten Ereignisse.",
    options: [
      { text: "entsetzt über", value: "a" },
      { text: "entsetzt auf", value: "b" },
      { text: "entsetzt an", value: "c" },
      { text: "entsetzt bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'entsetzt über sein' Akkusativ ile 'über' preposition ile kullanılır.",
  },

  // 18. über etw. beunruhigt sein
  {
    question: "Er ist _______ _______ die aktuelle politische Lage.",
    options: [
      { text: "beunruhigt über", value: "a" },
      { text: "beunruhigt auf", value: "b" },
      { text: "beunruhigt an", value: "c" },
      { text: "beunruhigt bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'beunruhigt über sein' endişelenmek için Akkusativ ile 'über' preposition alır.",
  },
  {
    question: "Sie waren _______ _______ die Gerüchte im Büro.",
    options: [
      { text: "beunruhigt über", value: "a" },
      { text: "beunruhigt auf", value: "b" },
      { text: "beunruhigt an", value: "c" },
      { text: "beunruhigt bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'beunruhigt über sein' Akkusativ ile 'über' preposition ile kullanılır.",
  },

  // 19. über etw. erstaunt sein
  {
    question: "Er war _______ _______ die schnellen Fortschritte.",
    options: [
      { text: "erstaunt über", value: "a" },
      { text: "erstaunt auf", value: "b" },
      { text: "erstaunt an", value: "c" },
      { text: "erstaunt bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'erstaunt über sein' şaşırmak için Akkusativ ile 'über' preposition alır.",
  },
  {
    question: "Sie ist _______ _______ die unerwarteten Ergebnisse.",
    options: [
      { text: "erstaunt über", value: "a" },
      { text: "erstaunt auf", value: "b" },
      { text: "erstaunt an", value: "c" },
      { text: "erstaunt bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'erstaunt über sein' Akkusativ ile 'über' preposition ile kullanılır.",
  },

  // 20. über etw. froh sein
  {
    question: "Sie ist _______ _______ die neue Möglichkeit.",
    options: [
      { text: "froh über", value: "a" },
      { text: "froh auf", value: "b" },
      { text: "froh an", value: "c" },
      { text: "froh bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'froh über sein' sevinçli olmak için Akkusativ ile 'über' preposition alır.",
  },
  {
    question: "Er war _______ _______ die Unterstützung seiner Familie.",
    options: [
      { text: "froh über", value: "a" },
      { text: "froh auf", value: "b" },
      { text: "froh an", value: "c" },
      { text: "froh bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'froh über sein' Akkusativ ile 'über' preposition ile kullanılır.",
  },

  // Alt Konular: Edatlı İsimler ve Anlamları (26 x 2 = 52 soru)
  // 1. das Abkommen über + (A)
  {
    question: "Das _______ _______ den Klimaschutz wurde unterzeichnet.",
    options: [
      { text: "Abkommen über", value: "a" },
      { text: "Abkommen auf", value: "b" },
      { text: "Abkommen an", value: "c" },
      { text: "Abkommen bei", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'das Abkommen über' bir anlaşmayı ifade etmek için Akkusativ ile 'über' preposition alır.",
  },
  {
    question: "Ein neues _______ _______ Handelspolitik wurde beschlossen.",
    options: [
      { text: "Abkommen über", value: "a" },
      { text: "Abkommen auf", value: "b" },
      { text: "Abkommen an", value: "c" },
      { text: "Abkommen für", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'das Abkommen über' Akkusativ ile 'über' preposition ile kullanılır.",
  },

  // 2. der Ausbau zu + (D)
  {
    question: "Der _______ _______ einem modernen Zentrum wurde gefördert.",
    options: [
      { text: "Ausbau zu", value: "a" },
      { text: "Ausbau auf", value: "b" },
      { text: "Ausbau an", value: "c" },
      { text: "Ausbau über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'der Ausbau zu' genişleme için Dativ ile 'zu' preposition alır.",
  },
  {
    question: "Es gab Pläne für den _______ _______ einer neuen Abteilung.",
    options: [
      { text: "Ausbau zu", value: "a" },
      { text: "Ausbau zum", value: "b" },
      { text: "Ausbau an", value: "c" },
      { text: "Ausbau für", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'der Ausbau zu' Dativ ile 'zu' preposition ile kullanılır.",
  },

  // 3. der Anlass zu + (D)
  {
    question: "Das war ein _______ _______ einer intensiven Diskussion.",
    options: [
      { text: "Anlass zu", value: "a" },
      { text: "Anlass für", value: "b" },
      { text: "Anlass auf", value: "c" },
      { text: "Anlass über", value: "d" },
    ],
    correctAnswer: "'a",
    explanation:
      "'der Anlass zu' sebep olmak için Dativ ile 'zu' preposition alır.'",
  },
  {
    question: "Es gab keinen _______ _______ einer großen Feier.",
    options: [
      { text: "Anlass zu", value: "a" },
      { text: "Anlass für", value: "an" },
      { text: "Anlass auf", value: "c" },
      { text: "Anlass über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'der Anlass zu' Dativ ile 'zu' preposition ile kullanılır.'",
  },

  // 4. das Bekenntnis zu + D)
  {
    question: "Sein _______ _______ den Grundwerten war beeindruckend.",
    options: [
      { text: "Bekenntnis zu", value: "a" },
      { text: "Bekenntnis auf", value: "b" },
      { text: "Bekenntnis an", value: "c" },
      { text: "Bekenntnis über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'das Bekenntnis zu', inanç veya kabullenme için Dativ ile 'zu' preposition alır.",
  },
  {
    question: "Das _______ _______ einer nachhaltigen Zukunft wurde geschätzt.",
    options: [
      { text: "Bekenntnis an", value: "a" },
      { text: "Bekenntnis zu", value: "b" },
      { text: "Bekenntnis auf", value: "c" },
      { text: "Bekenntnis über", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "'das Bekenntnis zu', Dativ ile 'zu' preposition alır.",
  },

  // 5. der Anlass für + (A)
  {
    question: "Das war ein _______ _______ eine große Feier.",
    options: [
      { text: "Anlass zu", value: "a" },
      { text: "Anlass auf", value: "b" },
      { text: "Anlass über", value: "c" },
      { text: "Anlass für", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "'der Anlass für', sebep olmak için Akkusativ ile 'für' preposition alır.",
  },
  {
    question: "Ein _______ _______ ein Treffen wurde gesucht.",
    options: [
      { text: "Anlass für", value: "a" },
      { text: "Anlass zu", value: "b" },
      { text: "Anlass auf", value: "c" },
      { text: "Anlass an", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'der Anlass für', Akkusativ ile 'für' preposition alır.",
  },

  // 6. das Beispiel für + (A)
  {
    question: "Das ist ein _______ _______ eine erfolgreiche Zusammenarbeit.",
    options: [
      { text: "Beispiel zu", value: "a" },
      { text: "Beispiel für", value: "b" },
      { text: "Beispiel auf", value: "c" },
      { text: "Beispiel über", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "'das Beispiel für', örnek için Akkusativ ile 'für' preposition alır.",
  },
  {
    question: "Sie gab ein _______ _______ nachhaltigen Erfolg.",
    options: [
      { text: "Beispiel auf", value: "a" },
      { text: "Beispiel zu", value: "b" },
      { text: "Beispiel für", value: "c" },
      { text: "Beispiel an", value: "d" },
    ],
    correctAnswer: "c",
    explanation: "'das Beispiel für', Akkusativ ile 'für' preposition alır.",
  },

  // 7. der Anspruch an + (A)
  {
    question: "Der _______ _______ die Qualität ist hoch.",
    options: [
      { text: "Anspruch auf", value: "a" },
      { text: "Anspruch an", value: "b" },
      { text: "Anspruch zu", value: "c" },
      { text: "Anspruch über", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "'der Anspruch an', beklenti veya kriter için Akkusativ ile 'an' preposition alır.",
  },
  {
    question: "Sein _______ _______ Professionalität war klar.",
    options: [
      { text: "Anspruch zu", value: "a" },
      { text: "Anspruch auf", value: "b" },
      { text: "Anspruch an", value: "c" },
      { text: "Anspruch für", value: "d" },
    ],
    correctAnswer: "c",
    explanation: "'der Anspruch an', Akkusativ ile 'an' preposition alır.",
  },

  // 8. der Anspruch auf + (A)
  {
    question: "Er hat einen _______ _______ eine Entschädigung.",
    options: [
      { text: "Anspruch an", value: "a" },
      { text: "Anspruch zu", value: "b" },
      { text: "Anspruch über", value: "c" },
      { text: "Anspruch auf", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "'der Anspruch auf', hak talep etmek için Akkusativ ile 'auf' preposition alır.",
  },
  {
    question: "Der _______ _______ Bildung ist ein Grundrecht.",
    options: [
      { text: "Anspruch auf", value: "a" },
      { text: "Anspruch an", value: "b" },
      { text: "Anspruch zu", value: "c" },
      { text: "Anspruch für", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'der Anspruch auf', Akkusativ ile 'auf' preposition alır.",
  },

  // 9. der Bezug auf + (A)
  {
    question: "Der _______ _______ historische Ereignisse war wichtig.",
    options: [
      { text: "Bezug an", value: "a" },
      { text: "Bezug zu", value: "b" },
      { text: "Bezug auf", value: "c" },
      { text: "Bezug über", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "'der Bezug auf', referans için Akkusativ ile 'auf' preposition alır.",
  },
  {
    question: "Es gab einen klaren _______ _______ aktuelle Themen.",
    options: [
      { text: "Bezug zu", value: "a" },
      { text: "Bezug auf", value: "b" },
      { text: "Bezug an", value: "c" },
      { text: "Bezug für", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "'der Bezug auf', Akkusativ ile 'auf' preposition alır.",
  },

  // 10. der Einfluss auf + (A)
  {
    question: "Sein _______ _______ die Entscheidungen war groß.",
    options: [
      { text: "Einfluss an", value: "a" },
      { text: "Einfluss auf", value: "b" },
      { text: "Einfluss zu", value: "c" },
      { text: "Einfluss über", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "'der Einfluss auf', etki için Akkusativ ile 'auf' preposition alır.",
  },
  {
    question: "Der _______ _______ die Gesellschaft war nachhaltig.",
    options: [
      { text: "Einfluss zu", value: "a" },
      { text: "Einfluss an", value: "b" },
      { text: "Einfluss auf", value: "c" },
      { text: "Einfluss für", value: "d" },
    ],
    correctAnswer: "c",
    explanation: "'der Einfluss auf', Akkusativ ile 'auf' preposition alır.",
  },

  // 11. der Hinweis auf + (A)
  {
    question: "Der _______ _______ ein Problem wurde ignoriert.",
    options: [
      { text: "Hinweis an", value: "a" },
      { text: "Hinweis zu", value: "b" },
      { text: "Hinweis über", value: "c" },
      { text: "Hinweis auf", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "'der Hinweis auf', bilgilendirme için Akkusativ ile 'auf' preposition alır.",
  },
  {
    question: "Es gab einen _______ _______ neue Regelungen.",
    options: [
      { text: "Hinweis auf", value: "a" },
      { text: "Hinweis an", value: "b" },
      { text: "Hinweis zu", value: "c" },
      { text: "Hinweis für", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'der Hinweis auf', Akkusativ ile 'auf' preposition alır.",
  },

  // 12. die Debatte um + (A)
  {
    question: "Die _______ _______ die Reformen war kontrovers.",
    options: [
      { text: "Debatte auf", value: "a" },
      { text: "Debatte an", value: "b" },
      { text: "Debatte um", value: "c" },
      { text: "Debatte über", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "'die Debatte um', tartışma için Akkusativ ile 'um' preposition alır.",
  },
  {
    question: "Es gab eine _______ _______ neue Gesetzgebung.",
    options: [
      { text: "Debatte an", value: "a" },
      { text: "Debatte um", value: "b" },
      { text: "Debatte auf", value: "c" },
      { text: "Debatte für", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "'die Debatte um', Akkusativ ile 'um' preposition alır.",
  },

  // 13. der Kampf um + (A)
  {
    question: "Der _______ _______ die Macht war langwierig.",
    options: [
      { text: "Kampf auf", value: "a" },
      { text: "Kampf an", value: "b" },
      { text: "Kampf über", value: "c" },
      { text: "Kampf um", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "'der Kampf um', mücadele için Akkusativ ile 'um' preposition alır.",
  },
  {
    question: "Der _______ _______ Ressourcen wurde intensiver.",
    options: [
      { text: "Kampf um", value: "a" },
      { text: "Kampf auf", value: "b" },
      { text: "Kampf an", value: "c" },
      { text: "Kampf für", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'der Kampf um', Akkusativ ile 'um' preposition alır.",
  },

  // 14. das Verdienst um + (A)
  {
    question: "Sein _______ _______ die Wissenschaft ist unbestreitbar.",
    options: [
      { text: "Verdienst auf", value: "a" },
      { text: "Verdienst an", value: "b" },
      { text: "Verdienst um", value: "c" },
      { text: "Verdienst über", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "'das Verdienst um', liyakat için Akkusativ ile 'um' preposition alır.",
  },
  {
    question: "Das _______ _______ kulturelle Projekte wurde gewürdigt.",
    options: [
      { text: "Verdienst an", value: "a" },
      { text: "Verdienst um", value: "b" },
      { text: "Verdienst auf", value: "c" },
      { text: "Verdienst für", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "'das Verdienst um', Akkusativ ile 'um' preposition alır.",
  },

  // 15. das Wissen um + (A)
  {
    question: "Das _______ _______ die Risiken war entscheidend.",
    options: [
      { text: "Wissen auf", value: "a" },
      { text: "Wissen an", value: "b" },
      { text: "Wissen um", value: "c" },
      { text: "Wissen über", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "'das Wissen um', farkındalık için Akkusativ ile 'um' preposition alır.",
  },
  {
    question: "Ihr _______ _______ die Zusammenhänge war hilfreich.",
    options: [
      { text: "Wissen um", value: "a" },
      { text: "Wissen auf", value: "b" },
      { text: "Wissen an", value: "c" },
      { text: "Wissen für", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'das Wissen um', Akkusativ ile 'um' preposition alır.",
  },

  // 16. der Mangel an + (D)
  {
    question: "Der _______ _______ Ressourcen war ein Problem.",
    options: [
      { text: "Mangel auf", value: "a" },
      { text: "Mangel zu", value: "b" },
      { text: "Mangel über", value: "c" },
      { text: "Mangel an", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "'der Mangel an', eksiklik için Dativ ile 'an' preposition alır.",
  },
  {
    question: "Es gab einen _______ _______ Fachkräften.",
    options: [
      { text: "Mangel an", value: "a" },
      { text: "Mangel auf", value: "b" },
      { text: "Mangel zu", value: "c" },
      { text: "Mangel für", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'der Mangel an', Dativ ile 'an' preposition alır.",
  },

  // 17. das Misstrauen gegen + (A)
  {
    question: "Das _______ _______ die Regierung wuchs.",
    options: [
      { text: "Misstrauen auf", value: "a" },
      { text: "Misstrauen an", value: "b" },
      { text: "Misstrauen über", value: "c" },
      { text: "Misstrauen gegen", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "'das Misstrauen gegen', güvensizlik için Akkusativ ile 'gegen' preposition alır.",
  },
  {
    question: "Es gab ein _______ _______ neue Vorschläge.",
    options: [
      { text: "Misstrauen gegen", value: "a" },
      { text: "Misstrauen auf", value: "b" },
      { text: "Misstrauen an", value: "c" },
      { text: "Misstrauen für", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'das Misstrauen gegen', Akkusativ ile 'gegen' preposition alır.",
  },

  // 18. das Mittel gegen + (A)
  {
    question: "Ein wirksames _______ _______ Krankheiten wurde entwickelt.",
    options: [
      { text: "Mittel auf", value: "a" },
      { text: "Mittel an", value: "b" },
      { text: "Mittel über", value: "c" },
      { text: "Mittel gegen", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "'das Mittel gegen', yöntem veya araç için Akkusativ ile 'gegen' preposition alır.",
  },
  {
    question: "Sie suchten ein _______ _______ die Probleme.",
    options: [
      { text: "Mittel gegen", value: "a" },
      { text: "Mittel auf", value: "b" },
      { text: "Mittel an", value: "c" },
      { text: "Mittel für", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'das Mittel gegen', Akkusativ ile 'gegen' preposition alır.",
  },

  // 19. das Monopol auf + (A)
  {
    question: "Das Unternehmen hatte ein _______ _______ den Markt.",
    options: [
      { text: "Monopol an", value: "a" },
      { text: "Monopol zu", value: "b" },
      { text: "Monopol über", value: "c" },
      { text: "Monopol auf", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "'das Monopol auf', tekel için Akkusativ ile 'auf' preposition alır.",
  },
  {
    question: "Sie hatten ein _______ _______ bestimmte Technologien.",
    options: [
      { text: "Monopol auf", value: "a" },
      { text: "Monopol an", value: "b" },
      { text: "Monopol zu", value: "c" },
      { text: "Monopol für", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'das Monopol auf', Akkusativ ile 'auf' preposition alır.",
  },

  // 20. das Recht auf + (A)
  {
    question: "Jeder hat ein _______ _______ Bildung.",
    options: [
      { text: "Recht an", value: "a" },
      { text: "Recht zu", value: "b" },
      { text: "Recht über", value: "c" },
      { text: "Recht auf", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "'das Recht auf', hak için Akkusativ ile 'auf' preposition alır.",
  },
  {
    question: "Das _______ _______ Freiheit ist geschützt.",
    options: [
      { text: "Recht auf", value: "a" },
      { text: "Recht an", value: "b" },
      { text: "Recht zu", value: "c" },
      { text: "Recht für", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'das Recht auf', Akkusativ ile 'auf' preposition alır.",
  },

  // 21. das Streben nach + (D)
  {
    question: "Sein _______ _______ Erfolg war unermüdlich.",
    options: [
      { text: "Streben auf", value: "a" },
      { text: "Streben an", value: "b" },
      { text: "Streben nach", value: "c" },
      { text: "Streben über", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "'das Streben nach', çaba için Dativ ile 'nach' preposition alır.",
  },
  {
    question: "Das _______ _______ Wissen prägte ihn.",
    options: [
      { text: "Streben an", value: "a" },
      { text: "Streben nach", value: "b" },
      { text: "Streben auf", value: "c" },
      { text: "Streben für", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "'das Streben nach', Dativ ile 'nach' preposition alır.",
  },

  // 22. das Verlangen nach + (D)
  {
    question: "Ihr _______ _______ Abenteuer war groß.",
    options: [
      { text: "Verlangen auf", value: "a" },
      { text: "Verlangen an", value: "b" },
      { text: "Verlangen nach", value: "c" },
      { text: "Verlangen über", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "'das Verlangen nach', arzu için Dativ ile 'nach' preposition alır.",
  },
  {
    question: "Das _______ _______ Freiheit war stark.",
    options: [
      { text: "Verlangen nach", value: "a" },
      { text: "Verlangen auf", value: "b" },
      { text: "Verlangen an", value: "c" },
      { text: "Verlangen für", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'das Verlangen nach', Dativ ile 'nach' preposition alır.",
  },
  // 23. das Talent zu + (D)
  {
    question: "Sein _______ _______ Musik war offensichtlich.",
    options: [
      { text: "Talent zu", value: "a" },
      { text: "Talent auf", value: "an" },
      { text: "Talent an", value: "an" },
      { text: "Talent über", value: "an" },
    ],
    correctAnswer: "a",
    explanation:
      "'das Talent zu' yetenek için Dativ ile 'zu' preposition alır.'",
  },
  {
    question: "Das _______ _______ Kunst beeindruckte alle.",
    options: [
      { text: "Talent zu", value: "a" },
      { text: "Talent auf", value: "an" },
      { text: "Talent an", value: "an" },
      { text: "Talent für", value: "an" },
    ],
    correctAnswer: "a",
    explanation: "'das Talent zu' Dativ ile 'zu' preposition ile kullanılır.'",
  },

  // 24. das Verhalten gegenüber + (D)
  {
    question: "Sein _______ _______ Kollegen war respektvoll.",
    options: [
      { text: "Verhalten gegenüber", value: "a" },
      { text: "Verhalten auf", value: "an" },
      { text: "Verhalten an", value: "an" },
      { text: "Verhalten über", value: "an" },
    ],
    correctAnswer: "a",
    explanation:
      "'das Verhalten gegenüber' davranış için Dativ ile 'gegenüber' preposition alır.'",
  },
  {
    question: "Das _______ _______ den Kunden war professionell.",
    options: [
      { text: "Verhalten gegenüber", value: "a" },
      { text: "Verhalten auf", value: "an" },
      { text: "Verhalten an", value: "an" },
      { text: "Verhalten für", value: "an" },
    ],
    correctAnswer: "a",
    explanation:
      "'das Verhalten gegenüber' Dativ ile 'gegenüber' preposition ile kullanılır.'",
  },

  // 25. das Verständnis für + (A)
  {
    question: "Ihr _______ _______ andere Kulturen war bemerkenswert.",
    options: [
      { text: "Verständnis für", value: "a" },
      { text: "Verständnis auf", value: "an" },
      { text: "Verständnis an", value: "an" },
      { text: "Verständnis über", value: "an" },
    ],
    correctAnswer: "a",
    explanation:
      "'das Verständnis für' anlayış için Akkusativ ile 'für' preposition alır.'",
  },
  {
    question: "Das _______ _______ die Probleme war wichtig.",
    options: [
      { text: "Verständnis für", value: "a" },
      { text: "Verständnis auf", value: "an" },
      { text: "Verständnis an", value: "an" },
      { text: "Verständnis zu", value: "an" },
    ],
    correctAnswer: "a",
    explanation:
      "'das Verständnis für' Akkusativ ile 'für' preposition ile kullanılır.'",
  },

  // 26. der Umgang mit + (D)
  {
    question: "Sein _______ _______ Kritik war konstruktiv.",
    options: [
      { text: "Umgang mit", value: "a" },
      { text: "Umgang auf", value: "an" },
      { text: "Umgang an", value: "an" },
      { text: "Umgang über", value: "an" },
    ],
    correctAnswer: "a",
    explanation:
      "'der Umgang mit' yaklaşım tarzı için Dativ ile 'mit' preposition alır.'",
  },
  {
    question: "Der _______ _______ Kollegen war freundlich.",
    options: [
      { text: "Umgang mit", value: "a" },
      { text: "Umgang auf", value: "an" },
      { text: "Umgang an", value: "an" },
      { text: "Umgang für", value: "an" },
    ],
    correctAnswer: "a",
    explanation:
      "'der Umgang mit' Dativ ile 'mit' preposition ile kullanılır.'",
  },

  // 1. zur Ruhe kommen
  {
    question: "Nach dem stressigen Tag wollte er endlich _______ _______.",
    options: [
      { text: "zur Ruhe kommen", value: "a" },
      { text: "zur Ruhe gehen", value: "b" },
      { text: "in Ruhe bleiben", value: "c" },
      { text: "auf Ruhe setzen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'zur Ruhe kommen', sakinleşmek veya dinlenmek için Dativ ile 'zur' preposition alır.",
  },
  {
    question: "Die Diskussionen _______ _______ erst nach Mitternacht.",
    options: [
      { text: "in Ruhe gehen", value: "a" },
      { text: "zur Ruhe kommen", value: "b" },
      { text: "auf Ruhe bleiben", value: "c" },
      { text: "zur Ruhe setzen", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "'zur Ruhe kommen', bir durumun sakinleşmesi için Dativ ile 'zur' kullanılır.",
  },

  // 2. zur Ruhe setzen
  {
    question:
      "Er _______ _______ seine Mitarbeiter, um die Spannungen zu lösen.",
    options: [
      { text: "zur Ruhe bringen", value: "a" },
      { text: "in Ruhe lassen", value: "b" },
      { text: "zur Ruhe setzen", value: "c" },
      { text: "auf Ruhe schicken", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "'zur Ruhe setzen', birilerini sakinleştirmek için Dativ ile 'zur' kullanılır.",
  },
  {
    question: "Die Lehrerin _______ _______ die Schüler nach dem Streit.",
    options: [
      { text: "in Ruhe lassen", value: "a" },
      { text: "auf Ruhe bringen", value: "b" },
      { text: "zur Ruhe gehen", value: "c" },
      { text: "zur Ruhe setzen", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "'zur Ruhe setzen', bir grubu sakinleştirmek için Dativ ile 'zur' kullanılır.",
  },

  // 3. in Kraft setzen
  {
    question: "Die neuen Regelungen wurden letzte Woche _______ _______.",
    options: [
      { text: "in Kraft setzen", value: "a" },
      { text: "in Kraft bringen", value: "b" },
      { text: "auf Kraft stellen", value: "c" },
      { text: "zu Kraft machen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'in Kraft setzen', bir yasayı veya kuralı yürürlüğe koymak için Akkusativ ile 'in' kullanılır.",
  },
  {
    question: "Das Gesetz soll im nächsten Monat _______ _______ werden.",
    options: [
      { text: "auf Kraft bringen", value: "a" },
      { text: "in Kraft setzen", value: "b" },
      { text: "in Kraft gehen", value: "c" },
      { text: "zu Kraft setzen", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "'in Kraft setzen', resmi bir kuralı uygulamaya geçirmek için Akkusativ ile 'in' kullanılır.",
  },
  // 4. in Kraft bleiben
  {
    question: "Diese Verordnung _______ _______ bis zum nächsten Jahr.",
    options: [
      { text: "in Kraft gehen", value: "a" },
      { text: "in Kraft bleiben", value: "b" },
      { text: "auf Kraft stehen", value: "c" },
      { text: "in Kraft setzen", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "'in Kraft bleiben', bir kuralın yürürlükte kalması için Akkusativ ile 'in' kullanılır.",
  },
  {
    question: "Die alten Bestimmungen _______ _______ trotz der Reformen.",
    options: [
      { text: "in Kraft setzen", value: "a" },
      { text: "auf Kraft halten", value: "b" },
      { text: "in Kraft", value: "c" },
      { text: "in Kraft bleiben", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "'in Kraft bleiben', bir şeyin geçerli olmaya devam etmesi için Akkusativ ile 'in' kullanılır.",
  },
  // 5. in Kraft treten
  {
    question: "Die neuen Vorschriften _______ nächste Woche _______ in.",
    options: [
      { text: "in Kraft gehen", value: "a" },
      { text: "in Kraft treten", value: "b" },
      { text: "auf Kraft kommen", value: "c" },
      { text: "zu Kraft bringen", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "'in Kraft treten', bir kuralın yürürlüğe girmesi için Akkusativ ile 'in' kullanılır.",
  },
  {
    question: "Das Abkommen wird im Juli _______ in.",
    options: [
      { text: "in Kraft treten", value: "a" },
      { text: "in Kraft setzen", value: "b" },
      { text: "auf Kraft gehen", value: "c" },
      { text: "in Kraft bleiben", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'in Kraft treten, bir yasanın resmi olarak başlaması için Akkusativ ile 'in' kullanılır.",
  },
  // 6. außer außer Kraft setzen
  {
    question:
      "Die alten Regeln wurden _______ _______ gesetzt, um Platz für neue zu machen.",
    options: [
      { text: "außer Kraft setzen", value: "a" },
      { text: "außer Kraft bringen", value: "b" },
      { text: "in Kraft lassen", value: "c" },
      { text: "auf Kraft nehmen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'außer Kraft setzen', bir kuralı iptal etmek için Akkusativ ile 'außer' kullanılır.",
  },
  {
    question: "Das Gesetz wurde _______ _______ aufgrund neuer Entwicklungen.",
    options: [
      { text: "in Kraft bleiben", value: "a" },
      { text: "außer Kraft setzen", value: "b" },
      { text: "auf Kraft nehmen", value: "c" },
      { text: "in Kraft gehen", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "'außer Kraft setzen', bir yasayı geçersiz kılmak için Akkusativ ile 'außer' kullanılır.",
  },
  // 7. in Gang setzen
  {
    question: "Die Firma _______ _______ ein neues Projekt letzte Woche.",
    options: [
      { text: "in Gang bringen", value: "a" },
      { text: "in Gang setzen", value: "b" },
      { text: "auf Gang machen", value: "c" },
      { text: "zu Gang starten", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "'in Gang setzen', bir süreci başlatmak için Akkusativ ile 'in' kullanılır.",
  },
  {
    question:
      "Wir müssen die Produktion _______ _______ , um die Nachfrage zu decken.",
    options: [
      { text: "in Gang setzen", value: "a" },
      { text: "in Gang gehen", value: "b" },
      { text: "auf Gang bringen", value: "c" },
      { text: "zu Gang machen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'in Gang setzen', bir şeyi harekete geçirmek için Akkusativ ile 'in' kullanılır.",
  },
  // 8. in Gang bekommen
  {
    question: "Es war schwierig, die Maschine _______ _______ zu bekommen.",
    options: [
      { text: "in Gang setzen", value: "a" },
      { text: "auf Gang machen", value: "b" },
      { text: "in Gang bekommen", value: "c" },
      { text: "zu Gang bringen", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "'in Gang bekommen', bir şeyi çalışır hale getirmek için Akkusativ ile 'in' kullanılır.",
  },
  {
    question: "Sie _______ _______ die Verhandlungen nach langen Diskussionen.",
    options: [
      { text: "in Gang bringen", value: "a" },
      { text: "in Gang bekommen", value: "b" },
      { text: "auf Gang setzen", value: "c" },
      { text: "zu Gang machen", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "'in Gang bekommen', bir süreci başlatmak için Akkusativ ile 'in' kullanılır.",
  },
  // 9. in Gang sein
  {
    question: "Die Arbeiten _______ _______ seit letztem Monat.",
    options: [
      { text: "in Gang gehen", value: "a" },
      { text: "in Gang setzen", value: "b" },
      { text: "in Gang sein", value: "c" },
      { text: "auf Gang bleiben", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "'in Gang sein', bir şeyin devam etmekte olduğunu ifade etmek için Akkusativ ile 'in' kullanılır.",
  },
  {
    question: "Das Projekt _______ _______ und macht gute Fortschritte.",
    options: [
      { text: "in Gang sein", value: "a" },
      { text: "in Gang kommen", value: "b" },
      { text: "auf Gang bleiben", value: "c" },
      { text: "in Gang setzen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'in Gang sein', bir sürecin aktif olduğunu belirtmek için Akkusativ ile 'in' kullanılır.",
  },
  // 10. zur Verfügung stehen
  {
    question: "Diese Ressourcen _______ _______ für das Projektteam.",
    options: [
      { text: "zur Verfügung stehen", value: "a" },
      { text: "zur Verfügung machen", value: "b" },
      { text: "in Verfügung bleiben", value: "c" },
      { text: "auf Verfügung setzen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'zur Verfügung stehen', bir şeyin kullanıma hazır olduğunu ifade etmek için Dativ ile 'zur' kullanılır.",
  },
  {
    question: "Unsere Experten _______ _______ für Ihre Fragen.",
    options: [
      { text: "in Verfügung bleiben", value: "a" },
      { text: "zur Verfügung stehen", value: "b" },
      { text: "auf Verfügung gehen", value: "c" },
      { text: "zur Verfügung setzen", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "'zur Verfügung stehen', bir şeyin erişilebilir olduğunu belirtmek için Dativ ile 'zur' kullanılır.",
  },
  // 11. zur Verfügung stellen
  {
    question: "Die Firma _______ _______ ihre Räume für die Veranstaltung.",
    options: [
      { text: "in Verfügung geben", value: "a" },
      { text: "auf Verfügung setzen", value: "b" },
      { text: "zur Verfügung stellen", value: "c" },
      { text: "zur Verfügung machen", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "'zur Verfügung stellen', bir şeyi kullanıma sunmak için Dativ ile 'zur' kullanılır.",
  },
  {
    question: "Er _______ _______ seine Zeit für das Team.",
    options: [
      { text: "zur Verfügung machen", value: "a" },
      { text: "in Verfügung geben", value: "b" },
      { text: "auf Verfügung setzen", value: "c" },
      { text: "zur Verfügung stellen", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "'zur Verfügung stellen', bir şeyi başkalarına sunmak için Dativ ile 'zur' kullanılır.",
  },
  // 12. unter Druck setzen
  {
    question:
      "Die Chefin _______ _______ ihre Mitarbeiter, um Fristen einzuhalten.",
    options: [
      { text: "unter Druck stellen", value: "a" },
      { text: "unter Druck setzen", value: "b" },
      { text: "auf Druck machen", value: "c" },
      { text: "in Druck bringen", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "'unter Druck setzen', birini baskı altına almak için Akkusativ ile 'unter' kullanılır.",
  },
  {
    question: "Die Verhandlungen _______ _______ die Partner stark.",
    options: [
      { text: "unter Druck setzen", value: "a" },
      { text: "in Druck bringen", value: "b" },
      { text: "auf Druck stellen", value: "c" },
      { text: "unter Druck machen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'unter Druck setzen', birini zorlamak için Akkusativ ile 'unter' kullanılır.",
  },
  // 13. unter Druck stehen
  {
    question: "Das Team _______ _______ aufgrund der knappen Fristen.",
    options: [
      { text: "in Druck bleiben", value: "a" },
      { text: "auf Druck sein", value: "b" },
      { text: "unter Druck stehen", value: "c" },
      { text: "unter Druck gehen", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "'unter Druck stehen', baskı altında olmak için Dativ ile 'unter' kullanılır.",
  },
  {
    question: "Er _______ _______ wegen der hohen Erwartungen.",
    options: [
      { text: "unter Druck gehen", value: "a" },
      { text: "in Druck sein", value: "b" },
      { text: "auf Druck bleiben", value: "c" },
      { text: "unter Druck stehen", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "'unter Druck stehen', stres altında olmak için Dativ ile 'unter' kullanılır.",
  },
  // 14. zu Ende gehen
  {
    question: "Die Verhandlungen _______ _______ ohne Ergebnis.",
    options: [
      { text: "zu Ende gehen", value: "a" },
      { text: "zu Ende machen", value: "b" },
      { text: "auf Ende kommen", value: "c" },
      { text: "in Ende bleiben", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'zu Ende gehen', bir şeyin bitmesi için Dativ ile 'zu' kullanılır.",
  },
  {
    question: "Das Konzert _______ _______ später als erwartet.",
    options: [
      { text: "in Ende kommen", value: "a" },
      { text: "zu Ende gehen", value: "b" },
      { text: "auf Ende sein", value: "c" },
      { text: "zu Ende bringen", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "'zu Ende gehen', bir etkinliğin sona ermesi için Dativ ile 'zu' kullanılır.",
  },
  // 15. zu Ende führen
  {
    question: "Sie _______ _______ das Projekt erfolgreich.",
    options: [
      { text: "auf Ende machen", value: "a" },
      { text: "in Ende bringen", value: "b" },
      { text: "zu Ende führen", value: "c" },
      { text: "zu Ende gehen", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "'zu Ende führen', bir şeyi tamamlamak için Dativ ile 'zu' kullanılır.",
  },
  {
    question: "Das Team _______ _______ die Aufgabe trotz Schwierigkeiten.",
    options: [
      { text: "zu Ende machen", value: "a" },
      { text: "in Ende bringen", value: "b" },
      { text: "auf Ende gehen", value: "c" },
      { text: "zu Ende führen", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "'zu Ende führen', bir projeyi bitirmek için Dativ ile 'zu' kullanılır.",
  },
  // 16. zum Vorschein kommen
  {
    question: "Die Wahrheit _______ _______ nach langen Untersuchungen.",
    options: [
      { text: "zum Vorschein kommen", value: "a" },
      { text: "zum Vorschein gehen", value: "b" },
      { text: "auf Vorschein bleiben", value: "c" },
      { text: "in Vorschein bringen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'zum Vorschein kommen', bir şeyin ortaya çıkması için Dativ ile 'zum' kullanılır.",
  },
  {
    question: "Neue Beweise _______ _______ während des Prozesses.",
    options: [
      { text: "in Vorschein gehen", value: "a" },
      { text: "zum Vorschein kommen", value: "b" },
      { text: "auf Vorschein machen", value: "c" },
      { text: "zum Vorschein bringen", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "'zum Vorschein kommen', bir şeyin görünür hale gelmesi için Dativ ile 'zum' kullanılır.",
  },
  // 17. zum Vorschein bringen
  {
    question: "Er _______ _______ neue Fakten während der Debatte.",
    options: [
      { text: "in Vorschein setzen", value: "a" },
      { text: "auf Vorschein machen", value: "b" },
      { text: "zum Vorschein bringen", value: "c" },
      { text: "zum Vorschein gehen", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "'zum Vorschein bringen', bir şeyi ortaya çıkarmak için Dativ ile 'zum' kullanılır.",
  },
  {
    question: "Die Untersuchung _______ _______ überraschende Ergebnisse.",
    options: [
      { text: "zum Vorschein machen", value: "a" },
      { text: "in Vorschein bringen", value: "b" },
      { text: "auf Vorschein gehen", value: "c" },
      { text: "zum Vorschein bringen", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "'zum Vorschein bringen', bir şeyi açığa çıkarmak için Dativ ile 'zum' kullanılır.",
  },
  // 18. zum Ausdruck bringen
  {
    question: "Sie _______ _______ ihre Meinung klar und deutlich.",
    options: [
      { text: "zum Ausdruck setzen", value: "a" },
      { text: "zum Ausdruck bringen", value: "b" },
      { text: "auf Ausdruck machen", value: "c" },
      { text: "in Ausdruck gehen", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "'zum Ausdruck bringen', bir fikri ifade etmek için Dativ ile 'zum' kullanılır.",
  },
  {
    question: "Der Redner _______ _______ seine Dankbarkeit in seiner Rede.",
    options: [
      { text: "zum Ausdruck bringen", value: "a" },
      { text: "in Ausdruck setzen", value: "b" },
      { text: "auf Ausdruck gehen", value: "c" },
      { text: "zum Ausdruck machen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'zum Ausdruck bringen', bir duyguyu veya düşünceyi dile getirmek için Dativ ile 'zum' kullanılır.",
  },
  // 19. zur Anwendung bringen
  {
    question: "Die neuen Technologien wurden erfolgreich _______ _______ .",
    options: [
      { text: "in Anwendung setzen", value: "a" },
      { text: "auf Anwendung machen", value: "b" },
      { text: "zur Anwendung bringen", value: "c" },
      { text: "zur Anwendung gehen", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "'zur Anwendung bringen', bir şeyi uygulamak için Dativ ile 'zur' kullanılır.",
  },
  {
    question: "Er _______ _______ seine Kenntnisse in der Praxis.",
    options: [
      { text: "zur Anwendung machen", value: "a" },
      { text: "in Anwendung bringen", value: "b" },
      { text: "auf Anwendung setzen", value: "c" },
      { text: "zur Anwendung bringen", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "'zur Anwendung bringen', bilgi veya beceriyi kullanmak için Dativ ile 'zur' kullanılır.",
  },
  // 20. zu Ende bringen
  {
    question: "Das Team _______ _______ die Arbeit vor der Frist.",
    options: [
      { text: "zu Ende bringen", value: "a" },
      { text: "zu Ende machen", value: "b" },
      { text: "auf Ende setzen", value: "c" },
      { text: "in Ende gehen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'zu Ende bringen', bir şeyi tamamlamak için Dativ ile 'zu' kullanılır.",
  },
  {
    question: "Sie _______ _______ das Buch trotz der Herausforderungen.",
    options: [
      { text: "in Ende machen", value: "a" },
      { text: "zu Ende bringen", value: "b" },
      { text: "auf Ende gehen", value: "c" },
      { text: "zu Ende setzen", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "'zu Ende bringen', bir projeyi bitirmek için Dativ ile 'zu' kullanılır.",
  },
  // 21. zur Sprache bringen
  {
    question: "Er _______ _______ das Thema während des Meetings.",
    options: [
      { text: "in Sprache setzen", value: "a" },
      { text: "auf Sprache machen", value: "b" },
      { text: "zur Sprache bringen", value: "c" },
      { text: "zur Sprache gehen", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "'zur Sprache bringen', bir konuyu gündeme getirmek için Dativ ile 'zur' kullanılır.",
  },
  {
    question: "Die Probleme wurden _______ _______ in der Diskussion.",
    options: [
      { text: "zur Sprache machen", value: "a" },
      { text: "in Sprache bringen", value: "b" },
      { text: "auf Sprache setzen", value: "c" },
      { text: "zur Sprache bringen", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "'zur Sprache bringen', bir meseleyi konuşmaya açmak için Dativ ile 'zur' kullanılır.",
  },
  // 22. zur Entfaltung kommen
  {
    question: "Seine Talente _______ _______ in diesem Umfeld.",
    options: [
      { text: "zur Entfaltung kommen", value: "a" },
      { text: "zur Entfaltung gehen", value: "b" },
      { text: "in Entfaltung bleiben", value: "c" },
      { text: "auf Entfaltung machen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'zur Entfaltung kommen', yeteneklerin gelişmesi için Dativ ile 'zur' kullanılır.",
  },
  {
    question: "Die Kinder _______ _______ durch kreative Projekte.",
    options: [
      { text: "in Entfaltung gehen", value: "a" },
      { text: "zur Entfaltung kommen", value: "b" },
      { text: "auf Entfaltung setzen", value: "c" },
      { text: "zur Entfaltung bringen", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "'zur Entfaltung kommen', potansiyelin ortaya çıkması için Dativ ile 'zur' kullanılır.",
  },
  // 23. zur Sache kommen
  {
    question: "Lasst uns _______ _______ und die Details besprechen.",
    options: [
      { text: "in Sache gehen", value: "a" },
      { text: "auf Sache machen", value: "b" },
      { text: "zur Sache kommen", value: "c" },
      { text: "zur Sache setzen", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "'zur Sache kommen', asıl konuya geçmek için Dativ ile 'zur' kullanılır.",
  },
  {
    question: "Er _______ _______ , ohne unnötige Einleitungen.",
    options: [
      { text: "zur Sache machen", value: "a" },
      { text: "in Sache kommen", value: "b" },
      { text: "auf Sache gehen", value: "c" },
      { text: "zur Sache kommen", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "'zur Sache kommen', doğrudan konuya girmek için Dativ ile 'zur' kullanılır.",
  },
  // 24. zu Schaden kommen
  {
    question: "Bei dem Unfall _______ niemand _______ .",
    options: [
      { text: "zu Schaden kommen", value: "a" },
      { text: "zu Schaden gehen", value: "b" },
      { text: "in Schaden bleiben", value: "c" },
      { text: "auf Schaden machen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'zu Schaden kommen', zarar görmek için Dativ ile 'zu' kullanılır.'",
  },
  {
    question: "Die Waren _______ _______ während des Transports.",
    options: [
      { text: "in Schaden gehen", value: "a" },
      { text: "zu Schaden kommen", value: "b" },
      { text: "auf Schaden setzen", value: "c" },
      { text: "zu Schaden bringen", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "'zu Schaden kommen', bir şeyin bozulması için Dativ ile 'zu' kullanılır.",
  },
  // 25. zur Wahl stehen
  {
    question: "Mehrere Optionen _______ _______ in dieser Angelegenheit.",
    options: [
      { text: "in Wahl bleiben", value: "a" },
      { text: "auf Wahl setzen", value: "b" },
      { text: "zur Wahl stehen", value: "c" },
      { text: "zur Wahl gehen", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "'zur Wahl stehen', seçenek olarak sunulmak için Dativ ile 'zur' kullanılır.",
  },
  {
    question: "Zwei Kandidaten _______ _______ für die Position.",
    options: [
      { text: "zur Wahl stehen", value: "a" },
      { text: "in Wahl kommen", value: "b" },
      { text: "auf Wahl machen", value: "c" },
      { text: "zur Wahl gehen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'zur Wahl stehen', bir şeyin seçilebilir olduğunu ifade etmek için Dativ kullanır.",
  },
  // 26. in Konkurrenz stehen
  {
    question: "Die beiden Firmen _______ _______ miteinander.",
    options: [
      { text: "in Konkurrenz stehen", value: "a" },
      { text: "in Konkurrenz gehen", value: "b" },
      { text: "auf Konkurrenz machen", value: "c" },
      { text: "zu Konkurrenz sein", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'in Konkurrenz stehen', rekabet içinde olmak için Akkusativ ile 'in' kullanılır.",
  },
  {
    question: "Unsere Produkte _______ _______ mit internationalen Marken.",
    options: [
      { text: "auf Konkurrenz sein", value: "a" },
      { text: "in Konkurrenz stehen", value: "b" },
      { text: "in Konkurrenz gehen", value: "c" },
      { text: "zu Konkurrenz machen", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "'in Konkurrenz stehen', yarışma durumunda olmak için Akkusativ ile 'in' kullanılır.",
  },
  // 27. im Kampf stehen
  {
    question: "Die Aktivisten _______ _______ für ihre Rechte.",
    options: [
      { text: "auf Kampf gehen", value: "a" },
      { text: "im Kampf stehen", value: "b" },
      { text: "in Kampf sein", value: "c" },
      { text: "zu Kampf machen", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "'im Kampf stehen', bir mücadele içinde olmak için Dativ ile 'in' kullanılır.'",
  },
  {
    question: "Die Soldaten _______ _______ gegen die Bedrohung.",
    options: [
      { text: "in Kampf stehen", value: "a" },
      { text: "auf Kampf sein", value: "b" },
      { text: "im Kampf stehen", value: "c" },
      { text: "zu Kampf gehen", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "'im Kampf stehen', bir çatışmada yer almak için Dativ ile 'in' kullanılır.",
  },
  // 28. in Verbindung stehen
  {
    question: "Diese Ereignisse _______ _______ miteinander.",
    options: [
      { text: "in Verbindung stehen", value: "a" },
      { text: "in Verbindung gehen", value: "b" },
      { text: "auf Verbindung machen", value: "c" },
      { text: "zu Verbindung sein", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'in Verbindung mit', bir şeyle ilişkili olmak için Dativ ile 'in' kullanılır.'",
  },
  {
    question: "Unsere Erfolge _______ _______ mit harter Arbeit.",
    options: [
      { text: "auf Verbindung sein", value: "a" },
      { text: "in Verbindung stehen", value: "b" },
      { text: "in Verbindung gehen", value: "c" },
      { text: "zu Verbindung machen", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "'in Verbindung stehen', bir şeyle bağlantılı olmak için Dativ ile 'in' kullanılır.",
  },
  // 29. unter Beobachtung stehen
  {
    question: "Der Verdächtige _______ _______ seit Tagen.",
    options: [
      { text: "in Beobachtung gehen", value: "a" },
      { text: "auf Beobachtung sein", value: "b" },
      { text: "unter Beobachtung stehen", value: "c" },
      { text: "zu Beobachtung machen", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "'unter Beobachtung stehen', izlenmek için Dativ ile 'unter' kullanılır.",
  },
  {
    question: "Das Projekt _______ _______ wegen möglicher Risiken.",
    options: [
      { text: "unter Beobachtung machen", value: "a" },
      { text: "in Beobachtung gehen", value: "b" },
      { text: "auf Beobachtung sein", value: "c" },
      { text: "unter Beobachtung stehen", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "'unter Beobachtung stehen', kontrol altında tutulmak için Dativ ile 'unter' kullanılır.",
  },
  // 30. in Bedrängnis geraten
  {
    question: "Das Team _______ _______ durch die starke Konkurrenz.",
    options: [
      { text: "in Bedrängnis geraten", value: "a" },
      { text: "in Bedrängnis gehen", value: "b" },
      { text: "auf Bedrängnis sein", value: "c" },
      { text: "zu Bedrängnis machen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'in Bedrängnis geraten', zor duruma düşmek için Akkusativ ile 'in' kullanılır.'",
  },
  {
    question: "Er _______ _______ wegen finanzieller Probleme.",
    options: [
      { text: "zu Bedrängnis gehen", value: "a" },
      { text: "in Bedrängnis geraten", value: "b" },
      { text: "auf Bedrängnis sein", value: "c" },
      { text: "in Bedrängnis machen", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "'in Bedrängnis geraten', baskı altına girmek için Akkusativ ile 'in' kullanılır.",
  },
  // 31. in Bewegung geraten
  {
    question: "Die Verhandlungen _______ _______ nach monatelanger Stillstand.",
    options: [
      { text: "in Bewegung gehen", value: "a" },
      { text: "auf Bewegung sein", value: "b" },
      { text: "in Bewegung geraten", value: "c" },
      { text: "zu Bewegung machen", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "'in Bewegung geraten', harekete geçmek için Akkusativ ile 'in' kullanılır.",
  },
  {
    question: "Die Menge _______ _______ nach der Ankündigung.",
    options: [
      { text: "in Bewegung machen", value: "a" },
      { text: "in Bewegung geraten", value: "d" },
      { text: "auf Bewegung gehen", value: "c" },
      { text: "zu Bewegung sein", value: "b" },
    ],
    correctAnswer: "b",
    explanation:
      "'in Bewegung geraten', bir şeyin kendiliğinden hareket etmesi için Akkusativ ile 'in' kullanılır.",
  },
  // 32. in Gefahr geraten
  {
    question: "Das Schiff _______ _______ durch den Sturm.",
    options: [
      { text: "in Gefahr geraten", value: "a" },
      { text: "in Gefahr gehen", value: "b" },
      { text: "auf Gefahr sein", value: "c" },
      { text: "zu Gefahr machen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'in Gefahr geraten', tehlikeye düşmek için Akkusativ ile 'in' kullanılır.'",
  },
  {
    question: "Die Wanderer _______ _______ im dichten Wald.",
    options: [
      { text: "zu Gefahr gehen", value: "a" },
      { text: "in Gefahr geraten", value: "b" },
      { text: "auf Gefahr sein", value: "c" },
      { text: "in Gefahr machen", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "'in Gefahr geraten', risk altına girmek için Akkusativ ile 'in' kullanılır.",
  },
  // 33. in Panik geraten
  {
    question: "Die Menge _______ _______ nach dem lauten Knall.",
    options: [
      { text: "in Panik gehen", value: "a" },
      { text: "auf Panik sein", value: "b" },
      { text: "in Panik geraten", value: "c" },
      { text: "zu Panik machen", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "'in Panik geraten', paniğe kapılmak için Akkusativ ile 'in' kullanılır.",
  },
  {
    question: "Die Schüler _______ _______ während des Alarms.",
    options: [
      { text: "in Panik machen", value: "a" },
      { text: "in Panik geraten", value: "d" },
      { text: "auf Panik gehen", value: "c" },
      { text: "zu Panik sein", value: "b" },
    ],
    correctAnswer: "b",
    explanation:
      "'in Panik geraten', korkuya kapılmak için Akkusativ ile 'in' kullanılır.",
  },
  // 34. in Vergessenheit geraten
  {
    question: "Seine Verdienste _______ _______ über die Jahre.",
    options: [
      { text: "in Vergessenheit geraten", value: "a" },
      { text: "in Vergessenheit gehen", value: "b" },
      { text: "auf Vergessenheit sein", value: "c" },
      { text: "zu Vergessenheit machen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'in Vergessenheit geraten', unutulmak için Akkusativ ile 'in' kullanılır.'",
  },
  {
    question: "Die alte Tradition _______ _______ in der modernen Welt.",
    options: [
      { text: "zu Vergessenheit gehen", value: "a" },
      { text: "in Vergessenheit geraten", value: "b" },
      { text: "auf Vergessenheit sein", value: "c" },
      { text: "in Vergessenheit machen", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "'in Vergessenheit geraten', unutulup gitmek için Akkusativ ile 'in' kullanılır.",
  },
  // 35. in Erwägung ziehen
  {
    question: "Wir sollten alle Möglichkeiten _______ _______ .",
    options: [
      { text: "in Erwägung nehmen", value: "a" },
      { text: "in Erwägung ziehen", value: "b" },
      { text: "auf Erwägung setzen", value: "c" },
      { text: "zu Erwägung machen", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "'in Erwägung ziehen', bir şeyi düşünmek için Akkusativ ile 'in' kullanılır.'",
  },
  {
    question: "Die Firma _______ _______ neue Strategien für das Jahr.",
    options: [
      { text: "in Erwägung ziehen", value: "a" },
      { text: "in Erwägung setzen", value: "b" },
      { text: "auf Erwägung gehen", value: "c" },
      { text: "zu Erwägung nehmen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'in Erwägung ziehen', seçenekleri değerlendirmek için Akkusativ ile 'in' kullanılır.",
  },
  // 36. Einspruch erheben
  {
    question: "Er _______ _______ gegen die Entscheidung des Gerichts.",
    options: [
      { text: "Einspruch machen", value: "a" },
      { text: "Einspruch erheben", value: "b" },
      { text: "Einspruch setzen", value: "c" },
      { text: "Einspruch nehmen", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "'Einspruch erheben', itiraz etmek için Akkusativ kullanılır.",
  },
  {
    question: "Die Anwälte _______ _______ gegen die neuen Vorschriften.",
    options: [
      { text: "Einspruch erheben", value: "a" },
      { text: "Einspruch machen", value: "b" },
      { text: "in Einspruch gehen", value: "c" },
      { text: "Einspruch setzen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Einspruch erheben', resmi bir karara karşı çıkmak için Akkusativ kullanılır.",
  },
  // 37. in Frage kommen
  {
    question: "Diese Option _______ _______ für unser Vorhaben.",
    options: [
      { text: "in Frage gehen", value: "a" },
      { text: "auf Frage sein", value: "b" },
      { text: "in Frage kommen", value: "c" },
      { text: "zu Frage machen", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "'in Frage kommen', uygun olmak için Akkusativ ile 'in' kullanılır.",
  },
  {
    question: "Nur wenige Kandidaten _______ _______ für diese Stelle.",
    options: [
      { text: "in Frage machen", value: "a" },
      { text: "in Frage kommen", value: "d" },
      { text: "auf Frage gehen", value: "c" },
      { text: "zu Frage sein", value: "b" },
    ],
    correctAnswer: "b",
    explanation:
      "'in Frage kommen', bir şeyin dikkate alınması için Akkusativ ile 'in' kullanılır.",
  },
  // 38. Stellung nehmen
  {
    question: "Die Regierung _______ _______ zu den Vorwürfen.",
    options: [
      { text: "Stellung machen", value: "a" },
      { text: "Stellung nehmen", value: "b" },
      { text: "Stellung setzen", value: "c" },
      { text: "in Stellung gehen", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "'Stellung nehmen', bir konuda görüş bildirmek için Akkusativ kullanılır.'",
  },
  {
    question: "Er _______ _______ zu den aktuellen Entwicklungen.",
    options: [
      { text: "Stellung nehmen", value: "a" },
      { text: "Stellung machen", value: "b" },
      { text: "in Stellung setzen", value: "c" },
      { text: "auf Stellung gehen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'Stellung nehmen', bir meseleye dair pozisyon almak için Akkusativ kullanılır.",
  },
  // 39. Beachtung finden
  {
    question: "Sein Vorschlag _______ _______ bei den Kollegen.",
    options: [
      { text: "Beachtung machen", value: "a" },
      { text: "Beachtung finden", value: "b" },
      { text: "Beachtung setzen", value: "c" },
      { text: "in Beachtung gehen", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "'Beachtung finden', ilgi görmek için Akkusativ kullanılır.'",
  },
  {
    question: "Ihre Arbeit _______ _______ in der Fachwelt.",
    options: [
      { text: "Beachtung finden", value: "a" },
      { text: "Beachtung machen", value: "b" },
      { text: "in Beachtung setzen", value: "c" },
      { text: "auf Beachtung gehen", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "'Beachtung finden', dikkat çekmek için Akkusativ kullanılır.",
  },
  // 40. Beachtung schenken
  {
    question: "Wir sollten den Details mehr _______ _______ .",
    options: [
      { text: "Beachtung geben", value: "a" },
      { text: "Beachtung machen", value: "b" },
      { text: "Beachtung schenken", value: "c" },
      { text: "in Beachtung setzen", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "'Beachtung schenken', bir şeye dikkat etmek için Akkusativ kullanılır.",
  },
  {
    question: "Er _______ _______ den Problemen seiner Mitarbeiter.",
    options: [
      { text: "Beachtung machen", value: "a" },
      { text: "Beachtung schenken", value: "d" },
      { text: "in Beachtung gehen", value: "c" },
      { text: "auf Beachtung setzen", value: "b" },
    ],
    correctAnswer: "b",
    explanation:
      "'Beachtung schenken', bir konuya ilgi göstermek için Akkusativ kullanılır.",
  },
  // 41. in Angriff nehmen
  {
    question: "Das Team _______ _______ das neue Projekt sofort.",
    options: [
      { text: "in Angriff nehmen", value: "a" },
      { text: "in Angriff gehen", value: "b" },
      { text: "auf Angriff setzen", value: "c" },
      { text: "zu Angriff machen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'in Angriff nehmen', bir işe başlamak için Akkusativ ile 'in' kullanılır.'",
  },
  {
    question: "Wir _______ _______ die Herausforderungen entschlossen.",
    options: [
      { text: "in Angriff machen", value: "a" },
      { text: "in Angriff nehmen", value: "b" },
      { text: "auf Angriff gehen", value: "c" },
      { text: "zu Angriff setzen", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "'in Angriff nehmen', bir göreve başlamak için Akkusativ ile 'in' kullanılır.",
  },
  // 42. zum Wahnsinn treiben
  {
    question: "Sein Verhalten _______ _______ alle in der Abteilung.",
    options: [
      { text: "zum Wahnsinn treiben", value: "a" },
      { text: "zum Wahnsinn machen", value: "b" },
      { text: "in Wahnsinn setzen", value: "c" },
      { text: "auf Wahnsinn gehen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'zum Wahnsinn treiben', birini çıldırmak için Dativ ile 'zum' kullanılır.'",
  },
  {
    question: "Die ständigen Verzögerungen _______ _______ das Team.",
    options: [
      { text: "in Wahnsinn machen", value: "a" },
      { text: "zum Wahnsinn treiben", value: "b" },
      { text: "auf Wahnsinn setzen", value: "c" },
      { text: "zu Wahnsinn gehen", value: "value" },
    ],
    correctAnswer: "b",
    explanation:
      "'zum Wahnsinn treiben', birini sinirlendirmek için Dativ ile 'zum' kullanılır.",
  },
  // 43. Jemandem Gesellschaft leisten
  {
    question:
      "Sie _______ _______ _______ während seines Krankenhausaufenthalts.",
    options: [
      { text: "jemandem Gesellschaft geben", value: "a" },
      { text: "jemandem Gesellschaft leisten", value: "b" },
      { text: "jemandem Gesellschaft machen", value: "c" },
      { text: "jemandem Gesellschaft setzen", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "'jemandem Gesellschaft leisten', birine eşlik etmek için Dativ kullanılır.'",
  },
  {
    question: "Er _______ _______ _______ am Abend.",
    options: [
      { text: "jemandem Gesellschaft leisten", value: "a" },
      { text: "jemandem Gesellschaft geben", value: "b" },
      { text: "in Gesellschaft machen", value: "c" },
      { text: "auf Gesellschaft setzen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'jemandem Gesellschaft leisten', birine arkadaşlık etmek için Dativ kullanılır.",
  },
  // 44. die Konsequenzen tragen
  {
    question: "Er musste _______ _______ für seine Entscheidungen.",
    options: [
      { text: "die Konsequenzen ziehen", value: "a" },
      { text: "die Konsequenzen tragen", value: "b" },
      { text: "die Konsequenzen setzen", value: "c" },
      { text: "die Konsequenzen machen", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "'die Konsequenzen tragen', sonuçlarına katlanmak için Akkusativ kullanılır.'",
  },
  {
    question: "Die Firma _______ _______ für die Fehlentscheidung.",
    options: [
      { text: "die Konsequenzen tragen", value: "a" },
      { text: "die Konsequenzen machen", value: "b" },
      { text: "in Konsequenzen gehen", value: "c" },
      { text: "die Konsequenzen setzen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'die Konsequenzen tragen', bir eylemin sonuçlarını üstlenmek için Akkusativ kullanılır.",
  },
  // 45. sich zur Wehr setzen
  {
    question: "Er _______ _______ _______ gegen die Anschuldigungen.",
    options: [
      { text: "sich zur Wehr machen", value: "a" },
      { text: "sich zur Wehr setzen", value: "b" },
      { text: "sich in Wehr gehen", value: "c" },
      { text: "sich auf Wehr stellen", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "'sich zur Wehr setzen', kendini savunmak için Dativ ile 'zur' kullanılır.'",
  },
  {
    question: "Die Arbeiter _______ _______ _______ gegen Ungerechtigkeiten.",
    options: [
      { text: "sich zur Wehr setzen", value: "a" },
      { text: "sich zur Wehr machen", value: "b" },
      { text: "sich in Wehr gehen", value: "c" },
      { text: "sich auf Wehr stellen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'sich zur Wehr setzen', bir haksızlığa karşı direnmek için Dativ ile 'zur' kullanılır.",
  },
  // 46. eine Meinung vertreten
  {
    question: "Er _______ _______ in der Debatte überzeugend.",
    options: [
      { text: "eine Meinung machen", value: "a" },
      { text: "eine Meinung vertreten", value: "b" },
      { text: "eine Meinung setzen", value: "c" },
      { text: "eine Meinung nehmen", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "'eine Meinung vertreten', bir görüşü savunmak için Akkusativ kullanılır.'",
  },
  {
    question: "Die Politikerin _______ _______ klar in ihrer Rede.",
    options: [
      { text: "eine Meinung vertreten", value: "a" },
      { text: "eine Meinung machen", value: "b" },
      { text: "in Meinung gehen", value: "c" },
      { text: "eine Meinung setzen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'eine Meinung vertreten', bir fikri desteklemek için Akkusativ kullanılır.",
  },
  // 47. zur Verzweiflung bringen
  {
    question: "Sein Verhalten _______ _______ alle im Team.",
    options: [
      { text: "zur Verzweiflung machen", value: "a" },
      { text: "zur Verzweiflung bringen", value: "b" },
      { text: "in Verzweiflung setzen", value: "c" },
      { text: "auf Verzweiflung gehen", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "'zur Verzweiflung bringen', birini çaresizliğe sürüklemek için Dativ ile 'zur' kullanılır.'",
  },
  {
    question: "Die ständigen Probleme _______ _______ die Mitarbeiter.",
    options: [
      { text: "zur Verzweiflung bringen", value: "a" },
      { text: "in Verzweiflung machen", value: "b" },
      { text: "auf Verzweiflung setzen", value: "c" },
      { text: "zu Verzweiflung gehen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'zur Verzweiflung bringen', birini bunalıma sokmak için Dativ ile 'zur' kullanılır.",
  },
  // 48. das Urteil fällen
  {
    question: "Der Richter _______ _______ nach langer Beratung.",
    options: [
      { text: "das Urteil machen", value: "a" },
      { text: "das Urteil fällen", value: "b" },
      { text: "das Urteil setzen", value: "c" },
      { text: "das Urteil nehmen", value: "value" },
    ],
    correctAnswer: "b",
    explanation:
      "'das Urteil fällen', bir karar vermek için Akkusativ kullanılır.'",
  },
  {
    question: "Das Gericht _______ _______ über den Fall.",
    options: [
      { text: "das Urteil fällen", value: "a" },
      { text: "das Urteil machen", value: "value" },
      { text: "das Urteil setzen", value: "value" },
      { text: "das Urteil nehmen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "'das Urteil fällen', resmi bir karar açıklamak için Akkusativ kullanılır.",
  },

  // 1. Passiv hakkında genel bilgi
  {
    question:
      "Die Ergebnisse _______ _______ von einem unabhängigen Team überprüft.",
    options: [
      { text: "wurden", value: "a" },
      { text: "werden", value: "b" },
      { text: "sind", value: "c" },
      { text: "waren", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Vorgangspassiv’de geçmiş zaman için *wurde* kullanılır: *Die Ergebnisse wurden überprüft.* Eylem tamamlanmıştır.",
  },
  {
    question: "Die Straßen _______ _______ mit Schnee bedeckt.",
    options: [
      { text: "sind", value: "a" },
      { text: "wurden", value: "b" },
      { text: "werden", value: "c" },
      { text: "waren", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Zustandspassiv’de durum ifade edilir, *sein* kullanılır: *Die Straßen sind bedeckt.*",
  },
  {
    question:
      "Die Veranstaltung _______ _______ durch technische Probleme gestört.",
    options: [
      { text: "wird", value: "a" },
      { text: "ist", value: "b" },
      { text: "wurde", value: "c" },
      { text: "war", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "Vorgangspassiv’de bir eylem için *werden* kullanılır: *Die Veranstaltung wurde gestört.* *Durch* aracı belirtir.",
  },
  {
    question: "Verben wie *gehören* _______ _______ im Passiv verwendet.",
    options: [
      { text: "können nicht", value: "a" },
      { text: "werden immer", value: "b" },
      { text: "sind oft", value: "c" },
      { text: "können", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "*Gehören* geçişsiz ve statik bir fiildir, Passiv’e çevrilemez: *können nicht*.",
  },

  // 2. Aktiv ve Passiv arasındaki temel fark
  {
    question: "Aktiv: *Der Chef lobt die Mitarbeiter.* Passiv: _______",
    options: [
      { text: "Die Mitarbeiter werden gelobt.", value: "a" },
      { text: "Die Mitarbeiter sind gelobt.", value: "b" },
      { text: "Die Mitarbeiter wurden gelobt.", value: "c" },
      { text: "Die Mitarbeiter loben sich.", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Aktiv’de özne eylemi yapar (*Der Chef lobt*). Passiv’de nesne öne çıkar: *Die Mitarbeiter werden gelobt.*",
  },
  {
    question: "Welcher Satz ist in der Aktivform?",
    options: [
      { text: "Das Essen wird gekocht.", value: "a" },
      { text: "Sie kochen das Essen.", value: "b" },
      { text: "Das Essen ist gekocht.", value: "c" },
      { text: "Das Essen wurde gekocht.", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Aktiv’de özne eylemi yapar: *Sie kochen das Essen.* Diğerleri Passiv’dir.",
  },
  {
    question: "Was unterscheidet Aktiv von Passiv?",
    options: [
      {
        text: "Aktiv betont den Handelnden, Passiv das Geschehen.",
        value: "a",
      },
      { text: "Passiv verwendet *sein*, Aktiv *werden*.", value: "b" },
      { text: "Aktiv ist immer Vergangenheit.", value: "c" },
      { text: "Passiv betont den Subjekt.", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "Aktiv’de özne öne çıkar (*Er malt*), Passiv’de nesne (*Das Bild wird gemalt*).",
  },
  {
    question: "Passiv von *Die Schüler lösen die Aufgabe.* lautet:",
    options: [
      { text: "Die Aufgabe wird gelöst.", value: "a" },
      { text: "Die Aufgabe ist gelöst.", value: "b" },
      { text: "Die Aufgabe wurde gelöst.", value: "c" },
      { text: "Die Aufgabe löst sich.", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "Aktiv’den Passiv’e çevrilirken nesne özne olur: *Die Aufgabe wird gelöst.*",
  },

  // 3. Passiv türleri
  {
    question: "Die Tische _______ _______ gedeckt, weil die Gäste bald kommen.",
    options: [
      { text: "sind", value: "a" },
      { text: "werden", value: "b" },
      { text: "wurden", value: "c" },
      { text: "waren", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Zustandspassiv, bir durumu ifade eder: *Die Tische sind gedeckt.*",
  },
  {
    question: "Die Brücke _______ _______ gerade von Ingenieuren repariert.",
    options: [
      { text: "wurde", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "war", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Vorgangspassiv, devam eden bir eylemi ifade eder: *Die Brücke wird repariert.*",
  },
  {
    question: "Welcher Satz zeigt Zustandspassiv?",
    options: [
      { text: "Die Wände werden gestrichen.", value: "a" },
      { text: "Die Wände sind gestrichen.", value: "b" },
      { text: "Die Wände wurden gestrichen.", value: "c" },
      { text: "Die Wände streichen sich.", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "Zustandspassiv, tamamlanmış durumu gösterir: *Die Wände sind gestrichen.*",
  },
  {
    question:
      "Das Konzert _______ _______ durch einen Stromausfall unterbrochen.",
    options: [
      { text: "wurde", value: "a" },
      { text: "ist", value: "b" },
      { text: "wird", value: "c" },
      { text: "war", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "Vorgangspassiv, bir eylemi ifade eder: *Das Konzert wurde unterbrochen.*",
  },

  // 4. Passiv: Tüm zamanlar ve tüm Modus'larda
  {
    question:
      "Die Dokumente _______ _______ werden, sobald die Genehmigung vorliegt.",
    options: [
      { text: "werden unterzeichnet", value: "a" },
      { text: "wurden unterzeichnet", value: "b" },
      { text: "sind unterzeichnet", value: "c" },
      { text: "wären unterzeichnet", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Gelecek zaman Passiv: *werden* + Partizip II: *Die Dokumente werden unterzeichnet werden.*",
  },
  {
    question: "Hätte man schneller gehandelt, _______ das Problem _______ .",
    options: [
      { text: "wäre ... gelöst", value: "a" },
      { text: "wurde ... gelöst", value: "b" },
      { text: "wird ... gelöst", value: "c" },
      { text: "ist ... gelöst", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Konjunktiv II geçmiş Passiv: *wäre* + Partizip II: *Das Problem wäre gelöst.*",
  },
  {
    question: "Die Pläne _______ _______ worden, bevor das Meeting begann.",
    options: [
      { text: "waren genehmigt", value: "a" },
      { text: "wurden genehmigt", value: "b" },
      { text: "sind genehmigt", value: "c" },
      { text: "werden genehmigt", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "Plusquamperfekt Passiv: *waren* + Partizip II: *Die Pläne waren genehmigt worden.*",
  },
  {
    question:
      "Die Projekte _______ _______ werden, wenn wir mehr Ressourcen hätten.",
    options: [
      { text: "würden abgeschlossen", value: "a" },
      { text: "wären abgeschlossen", value: "b" },
      { text: "wurden abgeschlossen", value: "c" },
      { text: "sind abgeschlossen", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "Konjunktiv II gelecek Passiv: *würden* + Partizip II: *Die Projekte würden abgeschlossen werden.*",
  },

  // 5. Aktiv → Passiv dönüşümü ve fiilin özellikleri
  {
    question: "Aktiv: *Die Firma liefert die Waren.* Passiv: _______",
    options: [
      { text: "Die Waren werden geliefert.", value: "a" },
      { text: "Die Waren sind geliefert.", value: "b" },
      { text: "Die Waren wurden geliefert.", value: "c" },
      { text: "Die Waren liefern sich.", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Aktiv’den Passiv’e çevrilirken nesne özne olur: *Die Waren werden geliefert.*",
  },
  {
    question: "Welches Verb kann nicht ins Passiv umgewandelt werden?",
    options: [
      { text: "kennen", value: "a" },
      { text: "bauen", value: "b" },
      { text: "schreiben", value: "c" },
      { text: "schließen", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "*Kennen* statik bir fiildir ve Passiv’e çevrilemez.",
  },
  {
    question: "Aktiv: *Der Arzt untersucht den Patienten.* Passiv: _______",
    options: [
      { text: "Der Patient wird untersucht.", value: "a" },
      { text: "Der Patient ist untersucht.", value: "b" },
      { text: "Der Patient wurde untersucht.", value: "c" },
      { text: "Der Patient untersucht sich.", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "Geçişli fiil *untersuchen* Passiv’de: *Der Patient wird untersucht.*",
  },
  {
    question: "Warum kann *schwimmen* Passiv’e çevrilemez?",
    options: [
      { text: "Es ist ein transitives Verb.", value: "a" },
      { text: "Es hat kein Akkusativobjekt.", value: "b" },
      { text: "Es ist ein statisches Verb.", value: "c" },
      { text: "Es benötigt *sein*.", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "*Schwimmen* geçişsizdir ve nesne almaz, Passiv’e uygun değil.",
  },

  // 6. "Transitiv" (geçişli) fiillerin özellikleri
  {
    question: "Welches Verb ist transitiv?",
    options: [
      { text: "laufen", value: "a" },
      { text: "malen", value: "b" },
      { text: "sein", value: "c" },
      { text: "kommen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "*Malen* geçişlidir, Akkusativ nesne alır: *Er malt ein Bild.*",
  },
  {
    question: "Die Fenster _______ _______ von den Arbeitern gereinigt.",
    options: [
      { text: "wurden", value: "a" },
      { text: "sind", value: "b" },
      { text: "werden", value: "c" },
      { text: "waren", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "*Reinigen* geçişlidir, Passiv’de: *Die Fenster wurden gereinigt.*",
  },
  {
    question: "Was kennzeichnet transitive Verben?",
    options: [
      { text: "Sie haben kein Objekt.", value: "a" },
      { text: "Sie benötigen ein Akkusativobjekt.", value: "b" },
      { text: "Sie sind immer Passiv.", value: "c" },
      { text: "Sie verwenden *sein*.", value: "d" },
    ],
    correctAnswer: "c",
    explanation: "Geçişli fiiller Akkusativ nesne alır: *Er liest ein Buch.*",
  },
  {
    question: "Die Möbel _______ _______ von der Firma geliefert.",
    options: [
      { text: "werden", value: "a" },
      { text: "sind", value: "b" },
      { text: "wurden", value: "c" },
      { text: "waren", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "Geçişli fiil *liefern* Passiv’de: *Die Möbel wurden geliefert.*",
  },

  // 7. Geçişsiz fiiller ve Passiv
  {
    question: "In diesem Raum _______ _______ viel gelernt.",
    options: [
      { text: "wird", value: "a" },
      { text: "wurde", value: "b" },
      { text: "ist", value: "c" },
      { text: "war", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Öznesiz Passiv, geçişsiz fiil *lernen* için: *In diesem Raum wird viel gelernt.*",
  },
  {
    question: "Auf der Party _______ _______ ausgiebig getanzt.",
    options: [
      { text: "wurde", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "war", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Geçişsiz fiil *tanzen* öznesiz Passiv’de: *Auf der Party wird getanzt.*",
  },
  {
    question: "Warum kann *reisen* nicht im Passiv stehen?",
    options: [
      { text: "Es ist ein transitives Verb.", value: "a" },
      { text: "Es hat kein Akkusativobjekt.", value: "b" },
      { text: "Es ist ein statisches Verb.", value: "c" },
      { text: "Es benötigt *sein*.", value: "d" },
    ],
    correctAnswer: "c",
    explanation: "*Reisen* geçişsizdir ve nesne almaz, Passiv’e çevrilemez.",
  },
  {
    question: "Im Park _______ _______ fröhlich gespielt.",
    options: [
      { text: "wird", value: "a" },
      { text: "wurde", value: "b" },
      { text: "ist", value: "c" },
      { text: "war", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "Geçişsiz fiil *spielen* öznesiz Passiv’de: *Im Park wird gespielt.*",
  },

  // 8. Geçişsiz fiiller ve Passiv (devamı)
  {
    question: "Den Schülern _______ _______ geduldig zugehört.",
    options: [
      { text: "wurde", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "war", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Geçişsiz fiil *zuhören* Dativ nesneyle Passiv’de: *Den Schülern wurde zugehört.*",
  },
  {
    question: "Mit großer Mühe _______ _______ geholfen.",
    options: [
      { text: "wurde", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "war", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Adverbiale Ergänzung ile öznesiz Passiv: *Mit großer Mühe wird geholfen.*",
  },
  {
    question: "Dem Team _______ _______ mit Vertrauen begegnet.",
    options: [
      { text: "wird", value: "a" },
      { text: "wurde", value: "b" },
      { text: "ist", value: "c" },
      {
        text: "war",
        value: "d",
      },
    ],
    correctAnswer: "c",
    explanation:
      "Geçişsiz fiil *begegnen* Dativ nesneyle Passiv'de: *Dem Team wird begegnet.*",
  },
  {
    question: "An die Regeln _______ _______ gehalten.",
    options: [
      { text: "wurde", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "war", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "Präpositionalobjekt ile Passiv: *An die Regeln wird gehalten.*",
  },

  // 9. "Man (belirsiz özne)" ve Passiv
  {
    question: "*Man isst hier Pizza.* Passiv formu: _______",
    options: [
      { text: "Hier wird Pizza gegessen.", value: "a" },
      { text: "Pizza ist gegessen.", value: "b" },
      { text: "Pizza wurde gegessen.", value: "c" },
      { text: "Pizza isst sich.", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "*Man*’lı cümleler öznesiz Passiv’e çevrilir: *Hier wird Pizza gegessen.*",
  },
  {
    question: "*Man spricht hier Spanisch.* Passiv: _______",
    options: [
      { text: "Spanisch ist gesprochen.", value: "a" },
      { text: "Spanisch wird gesprochen.", value: "b" },
      { text: "Spanisch wurde gesprochen.", value: "c" },
      { text: "Spanisch spricht sich.", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "*Man*’lı cümlede nesne öne çıkar: *Spanisch wird gesprochen.*",
  },
  {
    question: "Man hat _______ _______ viel gelacht.",
    options: [
      { text: "wurde", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "war", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "Öznesiz Passiv, *man*’lı cümle için: *Es wurde viel gelacht.*",
  },
  {
    question: "*Man unterstützt die Bedürftigen.* Passiv: _______",
    options: [
      { text: "Die Bedürftigen werden unterstützt.", value: "a" },
      { text: "Den Bedürftigen wird unterstützt.", value: "b" },
      { text: "Die Bedürftigen wurden unterstützt.", value: "c" },
      { text: "Die Bedürftigen unterstützen sich.", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "*Man*’lı cümlede Dativ nesneyle Passiv: *Den Bedürftigen wird unterstützt.*",
  },

  // 10. Özel Durum: Emir kipi yerine Passiv
  {
    question: "Hier wird _______ jetzt _______!",
    options: [
      { text: "gearbeitet", value: "a" },
      { text: "wurde", value: "b" },
      { text: "ist", value: "c" },
      { text: "war", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Emir yerine öznesiz Passiv: *Hier wird jetzt gearbeitet!* (*Arbeite!* anlamında.)",
  },
  {
    question: "Jetzt _______ sofort _______ gelernt!",
    options: [
      { text: "wird", value: "a" },
      { text: "wurde", value: "b" },
      { text: "ist", value: "c" },
      { text: "war", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Vurguyla emir yerine Passiv: *Jetzt wird gelernt!*.",
  },
  {
    question: "Sofort _______ _______ aufgeräumt!",
    options: [
      { text: "ist", value: "a" },
      { text: "wurde", value: "b" },
      { text: "wird", value: "c" },
      { text: "war", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "Geçişsiz fiil *aufräumen* emir anlamında: *Sofort wird aufgeräumt!*",
  },
  {
    question: "Nun _______ _______ geschwiegen!",
    options: [
      { text: "wurde", value: "a" },
      { text: "ist", value: "b" },
      { text: "wird", value: "c" },
      { text: "war", value: "d" },
    ],
    correctAnswer: "d",
    explanation: "Vurguyla öznesiz Passiv: *Nun wird geschwiegen!*",
  },

  // 11. Passiv cümlede "von" veya "durch"
  {
    question: "Das Buch wurde _______ von einem Autor _______ geschrieben.",
    options: [
      { text: "durch", value: "a" },
      { text: "von", value: "b" },
      { text: "mit", value: "c" },
      { text: "über", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "*Von* aktörü belirtir: *Von einem Autor geschrieben.*",
  },
  {
    question:
      "Die Nachricht wurde _______ durch einen Kurier _______ übermittelt.",
    options: [
      { text: "von", value: "a" },
      { text: "durch", value: "b" },
      { text: "mit", value: "c" },
      { text: "über", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "*Durch* aracı ifade eder: *Durch einen Kurier übermittelt.*",
  },
  {
    question:
      "Das Projekt wurde von Experten und durch moderne Technologien _______ .",
    options: [
      { text: "unterstützt", value: "a" },
      { text: "unterstützt worden", value: "b" },
      { text: "unterstützen", value: "c" },
      { text: "wurde unterstützt", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "*Von* ve *durch* birlikte kullanılabilir: *Von Experten und durch Technologien unterstützt.*",
  },
  {
    question: "Die Tür wurde _______ von einem Techniker _______ .",
    options: [
      { text: "durch", value: "a" },
      { text: "mit", value: "b" },
      { text: "von", value: "c" },
      { text: "über", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "*Von* eylemi yapanı belirtir: *Von einem Techniker geöffnet.*",
  },

  // 12. Passiv cümlede "von" veya "durch" (devamı)
  {
    question: "Die Tische sind _______ mit einem Laken _______ bedeckt.",
    options: [
      { text: "mit", value: "a" },
      { text: "durch", value: "b" },
      { text: "von", value: "c" },
      { text: "über", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Zustandspassiv’de araç için *mit* kullanılır: *Mit einem Laken bedeckt.*",
  },
  {
    question: "Die Wände sind _______ mit Tapeten _______ verziert.",
    options: [
      { text: "durch", value: "a" },
      { text: "mit", value: "b" },
      { text: "von", value: "c" },
      { text: "über", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Zustandspassiv’de *mit* araç belirtir: *Mit Tapeten verziert.*",
  },
  {
    question: "Die Straße ist _______ über _______ überfüllt.",
    options: [
      { text: "mit", value: "a" },
      { text: "durch", value: "b" },
      { text: "über", value: "c" },
      { text: "von", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "Zustandspassiv’de *über* bazen kullanılır: *Über ... überfüllt.*",
  },
  {
    question: "Die Arbeit _______ _______ mit großer Sorgfalt ausgeführt.",
    options: [
      { text: "wurde", value: "a" },
      { text: "ist", value: "b" },
      { text: "wird", value: "c" },
      { text: "war", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "Vorgangspassiv: *wurde ausgeführt.* Zustand olsaydı *ist* olurdu.",
  },

  // 1. Passiv yapılamayan fiiller
  {
    question: "Welches Verb kann nicht ins Passiv umgewandelt werden?",
    options: [
      { text: "ähneln", value: "a" },
      { text: "bauen", value: "b" },
      { text: "schreiben", value: "c" },
      { text: "öffnen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "*Ähneln* benzerlik bildiren geçişsiz bir fiildir ve Passiv’e çevrilemez, çünkü özne eylemin başlatıcısı değildir.",
  },
  {
    question: "Das Verb *altern* _______ _______ im Passiv verwendet.",
    options: [
      { text: "kann nicht", value: "a" },
      { text: "wird oft", value: "b" },
      { text: "sind immer", value: "c" },
      { text: "kann", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "*Altern* yaşlanma/değişim bildirir ve geçişsizdir, bu yüzden Passiv’e uygun değildir: *kann nicht*.",
  },
  {
    question: "Sein Verhalten _______ mir ganz und gar.",
    options: [
      { text: "missfällt", value: "a" },
      { text: "wird missfallen", value: "b" },
      { text: "ist missfallen", value: "c" },
      { text: "wurde missfallen", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "*Missfallen* hoşlanmama bildirir ve Passiv’e çevrilemez: *Sein Verhalten missfällt mir.*",
  },
  {
    question: "Die Diskussion _______ gestern Abend.",
    options: [
      { text: "endete", value: "a" },
      { text: "wurde geendet", value: "b" },
      { text: "wird geendet", value: "c" },
      { text: "ist geendet", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "*Enden* bitme/sonlanma bildirir ve geçişsizdir, Passiv’e çevrilemez: *Die Diskussion endete.*",
  },

  // 2. Passiv yapılamayan fiiller (devamı) – Dönüşlü fiiller
  {
    question: "Warum kann *sich beeilen* nicht ins Passiv umgewandelt werden?",
    options: [
      { text: "Es ist ein reflexives Verb.", value: "a" },
      { text: "Es ist ein transitives Verb.", value: "b" },
      { text: "Es benötigt ein Akkusativobjekt.", value: "c" },
      { text: "Es ist ein statisches Verb.", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "*Sich beeilen* her zaman dönüşlü bir fiildir ve Passiv’e çevrilemez, çünkü reflexive fiiller özneye bağlıdır.",
  },
  {
    question: "Welches Verb ist immer reflexiv und daher nicht Passiv-fähig?",
    options: [
      { text: "sich interessieren", value: "a" },
      { text: "sich waschen", value: "b" },
      { text: "bauen", value: "c" },
      { text: "schreiben", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "*Sich interessieren* her zaman dönüşlüdür ve Passiv’e çevrilemez. *Sich waschen* bazen dönüşsüz olabilir.",
  },
  {
    question: "Das Verb *sich freuen* _______ _______ im Passiv stehen.",
    options: [
      { text: "kann nicht", value: "a" },
      { text: "wird oft", value: "b" },
      { text: "ist immer", value: "c" },
      { text: "kann", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "*Sich freuen* dönüşlü bir fiildir ve Passiv’e çevrilemez: *kann nicht*.",
  },
  {
    question: "Welches Verb kann nicht ins Passiv umgewandelt werden?",
    options: [
      { text: "sich entscheiden", value: "a" },
      { text: "bauen", value: "b" },
      { text: "schreiben", value: "c" },
      { text: "öffnen", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "*Sich entscheiden* dönüşlüdür ve Passiv’e çevrilemez. Diğer fiiller geçişlidir.",
  },

  // 3. Passiv yapılamayan fiiller (örnekler) – Her zaman dönüşlü fiiller
  {
    question: "Ich _______ _______ für die Einladung.",
    options: [
      { text: "bedanke mich", value: "a" },
      { text: "wurde bedankt", value: "b" },
      { text: "bin bedankt", value: "c" },
      { text: "werde bedankt", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "*Sich bedanken* her zaman dönüşlüdür ve Passiv’e çevrilemez: *Ich bedanke mich.*",
  },
  {
    question: "Er _______ _______ für den neuen Job.",
    options: [
      { text: "interessiert sich", value: "a" },
      { text: "wird interessiert", value: "b" },
      { text: "ist interessiert", value: "c" },
      { text: "wurde interessiert", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "*Sich interessieren* dönüşlüdür ve Passiv’e çevrilemez: *Er interessiert sich.*",
  },
  {
    question: "Sie _______ _______ vor der Prüfung.",
    options: [
      { text: "fürchtet sich", value: "a" },
      { text: "wird gefürchtet", value: "b" },
      { text: "ist gefürchtet", value: "c" },
      { text: "wurde gefürchtet", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "*Sich fürchten* dönüşlüdür ve Passiv’e çevrilemez: *Sie fürchtet sich.*",
  },
  {
    question: "Wir _______ _______ nach einem Urlaub.",
    options: [
      { text: "sehnen uns", value: "a" },
      { text: "werden gesehnt", value: "b" },
      { text: "sind gesehnt", value: "c" },
      { text: "wurden gesehnt", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "*Sich sehnen* dönüşlüdür ve Passiv’e çevrilemez: *Wir sehnen uns.*",
  },

  // 4. Passiv yapılamayan fiiller (örnekler devamı) – Bazen dönüşlü fiiller
  {
    question: "Er _______ _______ jeden Morgen.",
    options: [
      { text: "wäscht sich", value: "a" },
      { text: "wird gewaschen", value: "b" },
      {
        text: "ist gewaschen",
        value: "c",
      },
      {
        text: "wurde gewaschen",
        value: "d",
      },
    ],
    correctAnswer: "a",
    explanation:
      "*Sich waschen* bazen dönüşlüdür (*Er wäscht sich*), ama Passiv’e çevrilmez. *Werden* geçişli kullanım içindir (*Die Wände werden gewaschen.*).",
  },
  {
    question: "Sie _______ _______ vor dem Spiegel.",
    options: [
      { text: "kämmt sich", value: "a" },
      {
        text: "wird gekämmt",
        value: "b",
      },
      {
        text: "ist gekämmt",
        value: "c",
      },
      {
        text: "wurde gekämmt",
        value: "d",
      },
    ],
    correctAnswer: "b",
    explanation:
      "*Sich kämmt* dönüşlüdür ve Passiv’e çevrilemez: *Sie kämmt sich.*",
  },
  {
    question: "Die Kinder _______ _______ schnell an.",
    options: [
      { text: "ziehen sich", value: "a" },
      {
        text: "werden angezogen",
        value: "b",
      },
      {
        text: "sind angezogen",
        value: "c",
      },
      {
        text: "wurden angezogen",
        value: "d",
      },
    ],
    correctAnswer: "c",
    explanation:
      "*Sich anziehen* dönüşlüdür ve Passiv’e çevrilemez: *Die Kinder ziehen sich an.*",
  },
  {
    question: "Er _______ _______ jeden Tag.",
    options: [
      { text: "rasiert sich", value: "a" },
      {
        text: "wird rasiert",
        value: "b",
      },
      {
        text: "ist rasiert",
        value: "c",
      },
      {
        text: "wurde rasiert",
        value: "d",
      },
    ],
    correctAnswer: "d",
    explanation:
      "*Sich rasieren* dönüşlüdür ve Passiv’e çevrilemez: *Er rasiert sich.*",
  },

  // 5. Özel Örnek: Emir kipi yerine Passiv (dönüşlü fiillerle)
  {
    question: "Jetzt _______ _______ beeilt!",
    options: [
      { text: "wird ... sich", value: "a" },
      { text: "wurde ... sich", value: "b" },
      { text: "ist ... sich", value: "c" },
      { text: "war ... sich", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Dönüşlü fiiller emir anlamında öznesiz Passiv ile kullanılabilir: *Jetzt wird sich beeilt!* (*Beeil dich!* anlamında.)",
  },
  {
    question: "Sofort _______ _______ bedankt!",
    options: [
      { text: "wird ... sich", value: "a" },
      { text: "wurde ... sich", value: "b" },
      { text: "ist ... sich", value: "c" },
      { text: "war ... sich", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Emir anlamında dönüşlü fiil: *Sofort wird sich bedankt!* (*Bedank dich!* anlamında.)",
  },
  {
    question: "Nun _______ _______ entschieden!",
    options: [
      { text: "wird ... sich", value: "a" },
      { text: "wurde ... sich", value: "b" },
      { text: "ist ... sich", value: "c" },
      { text: "war ... sich", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "Dönüşlü fiil emir anlamında: *Nun wird sich entschieden!* (*Entscheide dich!* anlamında.)",
  },
  {
    question: "Hier _______ _______ gefreut!",
    options: [
      { text: "wird ... sich", value: "a" },
      { text: "wurde ... sich", value: "b" },
      { text: "ist ... sich", value: "c" },
      { text: "war ... sich", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "Emir anlamında: *Hier wird sich gefreut!* (*Freu dich!* anlamında.)",
  },

  // 6. Passiversatzformen
  {
    question: "Welche Struktur gehört zu den Passiversatzformen?",
    options: [
      { text: "bekommen + Partizip II", value: "a" },
      { text: "werden + Infinitiv", value: "b" },
      { text: "sein + Partizip I", value: "c" },
      { text: "haben + Partizip II", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "*Bekommen + Partizip II* Passiv yerine kullanılır: *Er bekommt die Aufgabe erklärt.*",
  },
  {
    question: "Welche Struktur ist eine Passivumschreibung mit Modalfaktor?",
    options: [
      { text: "sich lassen + Infinitiv", value: "a" },
      { text: "bekommen + Partizip II", value: "b" },
      { text: "werden + Partizip II", value: "c" },
      { text: "sein + Partizip II", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "*Sich lassen + Infinitiv* modal anlam taşır: *Das lässt sich machen.*",
  },
  {
    question:
      "Die Aufgabe _______ _______ mit *sein + zu + Infinitiv* ausgedrückt.",
    options: [
      { text: "ist zu lösen", value: "a" },
      { text: "wird gelöst", value: "b" },
      { text: "ist gelöst", value: "c" },
      { text: "wurde gelöst", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "*Sein + zu + Infinitiv* Passiv yerine kullanılır: *Die Aufgabe ist zu lösen.*",
  },
  {
    question: "Welche Struktur ist keine Passivumschreibung?",
    options: [
      { text: "werden + Partizip II", value: "a" },
      { text: "sein + Adjektiv auf -bar", value: "b" },
      { text: "gehören + Partizip II", value: "c" },
      { text: "sich lassen + Infinitiv", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "*Werden + Partizip II* Passiv’in kendisidir, yerine geçen bir yapı değil.",
  },

  // 7. Passiversatzformen ohne Modalfaktor
  {
    question: "Er _______ die Rechnung _______ .",
    options: [
      { text: "bekommt ... bezahlt", value: "a" },
      { text: "wird ... bezahlt", value: "b" },
      { text: "ist ... bezahlt", value: "c" },
      { text: "wurde ... bezahlt", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "*Bekommen + Partizip II* Passiv yerine kullanılır: *Er bekommt die Rechnung bezahlt.*",
  },
  {
    question: "Das Problem _______ _______ sich leicht lösen.",
    options: [
      { text: "lässt", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "wurde", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "*Sich lassen + Infinitiv* modal anlamlı Passiv yerine: *Das Problem lässt sich lösen.*",
  },
  {
    question: "Die Lösung _______ _______ allgemein akzeptiert.",
    options: [
      { text: "findet ... Anerkennung", value: "a" },
      { text: "wird ... anerkannt", value: "b" },
      { text: "ist ... anerkannt", value: "c" },
      { text: "wurde ... anerkannt", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "*Anerkennung finden* Funktionsverbgefüge olarak Passiv yerine: *Die Lösung findet Anerkennung.*",
  },
  {
    question: "Das Angebot _______ _______ Verwendung.",
    options: [
      { text: "findet", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "wurde", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "*Verwendung finden* Passiv yerine kullanılır: *Das Angebot findet Verwendung.*",
  },

  // 8. Passiversatzformen mit Modalfaktor
  {
    question: "Die Aufgabe _______ _______ gelöst werden.",
    options: [
      { text: "ist zu", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "wurde", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "*Sein + zu + Infinitiv* modal anlamlı Passiv yerine: *Die Aufgabe ist zu lösen.*",
  },
  {
    question: "Das Problem _______ _______ leicht beheben.",
    options: [
      { text: "lässt sich", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "wurde", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "*Sich lassen + Infinitiv* modal anlam taşır: *Das Problem lässt sich beheben.*",
  },
  {
    question: "Die Regeln _______ _______ beachtet werden.",
    options: [
      { text: "gehören", value: "a" },
      { text: "werden", value: "b" },
      { text: "sind", value: "c" },
      { text: "wurden", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "*Gehören + Partizip II* Passiv yerine: *Die Regeln gehören beachtet.*",
  },
  {
    question: "Das Dokument ist _______ .",
    options: [
      { text: "lesbar", value: "a" },
      { text: "wird gelesen", value: "b" },
      { text: "ist gelesen", value: "c" },
      { text: "wurde gelesen", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "*Sein + Adjektiv auf -bar* Passiv yerine: *Das Dokument ist lesbar.*",
  },

  // 9. bekommen, erhalten, kriegen + Partizip II
  {
    question: "Sie _______ die Aufgabe _______ erklärt.",
    options: [
      { text: "bekommt ...", value: "a" },
      { text: "wird ...", value: "b" },
      { text: "ist ...", value: "c" },
      { text: "wurde ...", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "*Bekommen + Partizip II* Passiv yerine: *Sie bekommt die Aufgabe erklärt.*",
  },
  {
    question: "Er _______ die Nachricht _______ übermittelt.",
    options: [
      { text: "erhält", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "wurde", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "*Erhalten + Partizip II* nadir de olsa Passiv yerine: *Er erhält die Nachricht übermittelt.*",
  },
  {
    question: "Wir _______ das Problem _______ gelöst.",
    options: [
      { text: "kriegen", value: "a" },
      { text: "werden", value: "b" },
      { text: "sind", value: "c" },
      { text: "wurden", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "*Kriegen + Partizip II* argo olarak Passiv yerine: *Wir kriegen das Problem gelöst.*",
  },
  {
    question: "Die Rechnung _______ _______ bezahlt.",
    options: [
      { text: "bekommt", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "wurde", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "*Bekommen + Partizip II* doğru kullanım: *Die Rechnung bekommt bezahlt.*",
  },

  // 10. Reflexives Verb mit unpersönlichem Subjekt
  {
    question: "Das _______ _______ sich hier gut verkaufen.",
    options: [
      { text: "lässt", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "wurde", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "*Sich lassen + Infinitiv* unpersönliches özneyle Passiv yerine: *Das lässt sich gut verkaufen.*",
  },
  {
    question: "Das Produkt _______ _______ sich leicht bedienen.",
    options: [
      { text: "lässt", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "wurde", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Dönüşlü fiil unpersönliches özneyle: *Das Produkt lässt sich leicht bedienen.*",
  },
  {
    question: "Die Lösung _______ _______ sich schnell finden.",
    options: [
      { text: "lässt", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "wurde", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "Unpersönliches özneyle: *Die Lösung lässt sich schnell finden.*",
  },
  {
    question: "Das Buch _______ _______ sich gut lesen.",
    options: [
      { text: "lässt", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "wurde", value: "d" },
    ],
    correctAnswer: "d",
    explanation: "*Sich lassen + Infinitiv*: *Das Buch lässt sich gut lesen.*",
  },

  // 11. Passiversatzformen – Funktionsverbgefüge
  {
    question: "Sein Vorschlag _______ _______ Anerkennung.",
    options: [
      { text: "findet", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "wurde", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "*Anerkennung finden* Funktionsverbgefüge olarak Passiv yerine: *Sein Vorschlag findet Anerkennung.*",
  },
  {
    question: "Der Wunsch _______ _______ in Erfüllung.",
    options: [
      { text: "kommt", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "wurde", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "*In Erfüllung kommen* Passiv yerine: *Der Wunsch kommt in Erfüllung.*",
  },
  {
    question: "Die Tradition _______ _______ in Vergessenheit.",
    options: [
      { text: "gerät", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "wurde", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "*In Vergessenheit geraten* Passiv yerine: *Die Tradition gerät in Vergessenheit.*",
  },
  {
    question: "Das Projekt _______ _______ in Bewegung.",
    options: [
      { text: "gerät", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "wurde", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "*In Bewegung geraten* Passiv yerine: *Das Projekt gerät in Bewegung.*",
  },

  // 1. Passiversatzformen mit Modalfaktor
  {
    question:
      "Welche Struktur gehört zu den Passiversatzformen mit Modalfaktor?",
    options: [
      { text: "sich lassen + Infinitiv", value: "a" },
      { text: "werden + Partizip II", value: "b" },
      { text: "haben + Partizip II", value: "c" },
      { text: "bekommen + Partizip II", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "*Sich lassen + Infinitiv* modal anlamlı Passiv yerine kullanılır: *Das lässt sich machen.* *Werden* Passiv’in kendisi, *bekommen* ise modalsız bir alternatiftir.",
  },
  {
    question:
      "Die Aufgabe _______ _______ mit einer Passivumschreibung mit Modalfaktor ausgedrückt.",
    options: [
      { text: "ist zu lösen", value: "a" },
      { text: "wird gelöst", value: "b" },
      { text: "ist gelöst", value: "c" },
      { text: "wurde gelöst", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "*Sein + zu + Infinitiv* modal anlam taşır (*können/müssen*): *Die Aufgabe ist zu lösen.* *Wird* standart Passiv’dir.",
  },
  {
    question: "Welche Struktur hat einen *müssen* ähnlichen modalen Charakter?",
    options: [
      { text: "es gilt + zu + Infinitiv", value: "a" },
      { text: "bekommen + Partizip II", value: "b" },
      { text: "werden + Infinitiv", value: "c" },
      { text: "sein + Partizip II", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "*Es gilt + zu + Infinitiv* *müssen* anlamı katar: *Das gilt zu beachten.* Diğerleri modal anlam taşımaz veya Passiv’in kendisidir.",
  },
  {
    question: "Die Regeln _______ _______ beachtet werden.",
    options: [
      { text: "gehören", value: "a" },
      { text: "werden", value: "b" },
      { text: "sind", value: "c" },
      { text: "wurden", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "*Gehören + Partizip II* modal anlamlı Passiv yerine: *Die Regeln gehören beachtet.*",
  },
  {
    question: "Das Dokument ist _______ für alle.",
    options: [
      { text: "lesbar", value: "a" },
      { text: "wird gelesen", value: "b" },
      { text: "ist gelesen", value: "c" },
      { text: "wurde gelesen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "*Sein + Adjektiv auf -bar* modal anlamlı (*können*): *Das Dokument ist lesbar.*",
  },

  // 2. sich lassen + Infinitiv
  {
    question: "Das Problem _______ _______ leicht lösen.",
    options: [
      { text: "lässt sich", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "wurde", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "*Sich lassen + Infinitiv* *können + Passiv* anlamı verir: *Das Problem lässt sich leicht lösen.*",
  },
  {
    question: "Die Tür _______ _______ nicht öffnen.",
    options: [
      { text: "lässt sich", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "wurde", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "*Sich lassen + Infinitiv*: *Die Tür lässt sich nicht öffnen.* (*Açılabilir değil* anlamında.)",
  },
  {
    question: "Das Buch _______ _______ gut lesen.",
    options: [
      { text: "lässt sich", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "wurde", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "*Sich lassen + Infinitiv*: *Das Buch lässt sich gut lesen.* (*Okunabilir* anlamında.)",
  },
  {
    question: "Die Software _______ _______ problemlos installieren.",
    options: [
      { text: "lässt sich", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "wurde", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "*Sich lassen + Infinitiv*: *Die Software lässt sich problemlos installieren.*",
  },
  {
    question: "Das Auto _______ _______ problemlos _______ repariert.",
    options: [
      { text: "hat sich ... lassen", value: "a" },
      { text: "wurde ...", value: "b" },
      { text: "ist ...", value: "c" },
      { text: "war ...", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Perfekt zamanında *sich lassen + Infinitiv*: *Das Auto hat sich problemlos reparieren lassen.*",
  },

  // 3. "sich lassen" ve "Passiversatzform"
  {
    question: "Der Satz *Das lässt sich machen.* hat welche Bedeutung?",
    options: [
      { text: "Das kann gemacht werden.", value: "a" },
      { text: "Das wird gemacht.", value: "b" },
      { text: "Das ist gemacht.", value: "c" },
      { text: "Das muss gemacht werden.", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "*Sich lassen + Infinitiv* burada Passiv yerine *können* anlamı taşır: *Das lässt sich machen.* = *Das kann gemacht werden.*",
  },
  {
    question: "Er ließ sich _______ überzeugen.",
    options: [
      { text: "nicht", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "wurde", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "Burada *sich lassen* ‘izin vermek’ anlamında: *Er ließ sich nicht überzeugen.* (*İkna edilmesine izin vermedi.*)",
  },
  {
    question: "Sie ließ sich _______ neue Schuhe kaufen.",
    options: [
      { text: "von ihrer Freundin", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "wurde", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "*Sich lassen* ‘yaptırtmak’ anlamında: *Sie ließ sich von ihrer Freundin neue Schuhe kaufen.* (*Arkadaşına ayakkabı aldırttı.*)",
  },
  {
    question: "Das _______ _______ sich nicht ändern.",
    options: [
      { text: "lässt", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "wurde", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Passiv yerine: *Das lässt sich nicht ändern.* (*Bu değiştirilemez.*)",
  },
  {
    question: "Er ließ sich _______ einen Anzug schneidern.",
    options: [
      { text: "vom Schneider", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "wurde", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "*Sich lassen* ‘yaptırtmak’ anlamında: *Er ließ sich vom Schneider einen Anzug schneidern.*",
  },

  // 4. sein + zu + Infinitiv
  {
    question: "Die Aufgabe _______ _______ gelöst werden.",
    options: [
      { text: "ist zu", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "wurde", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "*Sein + zu + Infinitiv* *können/müssen* anlamı verir: *Die Aufgabe ist zu lösen.*",
  },
  {
    question: "Das Problem _______ _______ schnell behoben werden.",
    options: [
      { text: "ist zu", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "wurde", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "*Sein + zu + Infinitiv*: *Das Problem ist zu beheben.* (*Behebilebilir/zorunlu.*)",
  },
  {
    question: "Die Anweisungen _______ _______ befolgt werden.",
    options: [
      { text: "sind zu", value: "a" },
      { text: "werden", value: "b" },
      { text: "sind", value: "c" },
      { text: "wurden", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "*Sein + zu + Infinitiv*: *Die Anweisungen sind zu befolgen.* (*Uyunmalı.*)",
  },
  {
    question: "Das Dokument _______ _______ unterschrieben werden.",
    options: [
      { text: "ist zu", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "wurde", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "*Sein + zu + Infinitiv*: *Das Dokument ist zu unterschreiben.*",
  },
  {
    question: "Die Regeln _______ _______ eingehalten werden.",
    options: [
      { text: "sind zu", value: "a" },
      { text: "werden", value: "b" },
      { text: "sind", value: "c" },
      { text: "wurden", value: "d" },
    ],
    correctAnswer: "d",
    explanation: "*Sein + zu + Infinitiv*: *Die Regeln sind zu einhalten.*",
  },

  // 5. "es gilt / heißt + zu + Infinitiv"
  {
    question: "Das _______ _______ beachtet werden.",
    options: [
      { text: "gilt zu", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "wurde", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "*Es gilt + zu + Infinitiv* *müssen* anlamı verir: *Das gilt zu beachten.* (*Bu dikkate alınmalı.*)",
  },
  {
    question: "Es _______ _______ respektiert werden.",
    options: [
      { text: "heißt zu", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "wurde", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "*Es heißt + zu + Infinitiv*: *Es heißt zu respektieren.* (*Saygı gösterilmeli.*)",
  },
  {
    question: "Die Vorschrift _______ _______ eingehalten werden.",
    options: [
      { text: "gilt zu", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "wurde", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "*Es gilt + zu + Infinitiv*: *Die Vorschrift gilt zu einhalten.*",
  },
  {
    question: "Das _______ _______ berücksichtigt werden.",
    options: [
      { text: "heißt zu", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "wurde", value: "d" },
    ],
    correctAnswer: "d",
    explanation: "*Es heißt + zu + Infinitiv*: *Das heißt zu berücksichtigen.*",
  },
  {
    question: "Die Anforderungen _______ _______ erfüllt werden.",
    options: [
      { text: "gelten zu", value: "a" },
      { text: "werden", value: "b" },
      { text: "sind", value: "c" },
      { text: "wurden", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "*Es gilt + zu + Infinitiv*: *Die Anforderungen gelten zu erfüllen.*",
  },

  // 6. Das Gerundiv = zu + Partizip I
  {
    question: "Die Aufgabe ist _______ .",
    options: [
      { text: "zu lösende", value: "a" },
      { text: "wird gelöst", value: "b" },
      { text: "ist gelöst", value: "c" },
      { text: "wurde gelöst", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Gerundiv (*zu + Partizip I*): *Die Aufgabe ist zu lösende.* (*Çözülmesi gereken.*)",
  },
  {
    question: "Das ist ein _______ Problem.",
    options: [
      { text: "zu behebendes", value: "a" },
      { text: "wird behoben", value: "b" },
      { text: "ist behoben", value: "c" },
      { text: "wurde behoben", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "Gerundiv: *Ein zu behebendes Problem.* (*Düzeltilmesi gereken.*)",
  },
  {
    question: "Die _______ Regel muss beachtet werden.",
    options: [
      { text: "zu beachtende", value: "a" },
      { text: "wird beachtet", value: "b" },
      { text: "ist beachtet", value: "c" },
      { text: "wurde beachtet", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "Gerundiv: *Die zu beachtende Regel.* (*Dikkate alınması gereken.*)",
  },
  {
    question: "Ein _______ Dokument liegt vor.",
    options: [
      { text: "zu prüfendes", value: "a" },
      { text: "wird geprüft", value: "b" },
      { text: "ist geprüft", value: "c" },
      { text: "wurde geprüft", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Gerundiv: *Ein zu prüfendes Dokument.* (*İncelenmesi gereken.*)",
  },
  {
    question: "Das ist eine _______ Maßnahme.",
    options: [
      { text: "zu ergreifende", value: "a" },
      { text: "wird ergriffen", value: "b" },
      { text: "ist ergriffen", value: "c" },
      { text: "wurde ergriffen", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Gerundiv: *Eine zu ergreifende Maßnahme.* (*Alınması gereken.*)",
  },

  // 7. gehören + Partizip II
  {
    question: "Die Vorschriften _______ _______ beachtet.",
    options: [
      { text: "gehören", value: "a" },
      { text: "werden", value: "b" },
      { text: "sind", value: "c" },
      { text: "wurden", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "*Gehören + Partizip II* *müssen/should* anlamı verir: *Die Vorschriften gehören beachtet.*",
  },
  {
    question: "Das Gesetz _______ _______ eingehalten.",
    options: [
      { text: "gehört", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "wurde", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "*Gehören + Partizip II*: *Das Gesetz gehört eingehalten.* (*Uyunmalı.*)",
  },
  {
    question: "Die Fristen _______ _______ respektiert.",
    options: [
      { text: "gehören", value: "a" },
      { text: "werden", value: "b" },
      { text: "sind", value: "c" },
      { text: "wurden", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "*Gehören + Partizip II*: *Die Fristen gehören respektiert.*",
  },
  {
    question: "Die Anweisungen _______ _______ ausgeführt.",
    options: [
      { text: "gehören", value: "a" },
      { text: "werden", value: "b" },
      { text: "sind", value: "c" },
      { text: "wurden", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "*Gehören + Partizip II*: *Die Anweisungen gehören ausgeführt.*",
  },
  {
    question: "Die Pflichten _______ _______ erfüllt.",
    options: [
      { text: "gehören", value: "a" },
      { text: "werden", value: "b" },
      { text: "sind", value: "c" },
      { text: "wurden", value: "d" },
    ],
    correctAnswer: "c",
    explanation: "*Gehören + Partizip II*: *Die Pflichten gehören erfüllt.*",
  },

  // 8. sein + Adjektiv auf -bar, -lich, -fähig
  {
    question: "Das Problem ist _______ .",
    options: [
      { text: "lösbar", value: "a" },
      { text: "wird gelöst", value: "b" },
      { text: "ist gelöst", value: "c" },
      { text: "wurde gelöst", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "*Sein + Adjektiv auf -bar* *können* anlamı verir: *Das Problem ist lösbar.* (*Çözülebilir.*)",
  },
  {
    question: "Die Schrift ist _______ .",
    options: [
      { text: "leserlich", value: "a" },
      { text: "wird gelesen", value: "b" },
      { text: "ist gelesen", value: "c" },
      { text: "wurde gelesen", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "*Sein + Adjektiv auf -lich*: *Die Schrift ist leserlich.* (*Okunabilir.*)",
  },
  {
    question: "Die Krankheit ist _______ .",
    options: [
      { text: "heilbar", value: "a" },
      { text: "wird geheilt", value: "b" },
      { text: "ist geheilt", value: "c" },
      { text: "wurde geheilt", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "*Sein + Adjektiv auf -bar*: *Die Krankheit ist heilbar.* (*İyileştirilebilir.*)",
  },
  {
    question: "Das Gerät ist _______ .",
    options: [
      { text: "bedienbar", value: "a" },
      { text: "wird bedient", value: "b" },
      { text: "ist bedient", value: "c" },
      { text: "wurde bedient", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "*Sein + Adjektiv auf -bar*: *Das Gerät ist bedienbar.* (*Kullanılabilir.*)",
  },
  {
    question: "Die Maschine ist _______ .",
    options: [
      { text: "reparaturfähig", value: "a" },
      { text: "wird repariert", value: "b" },
      { text: "ist repariert", value: "c" },
      { text: "wurde repariert", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "*Sein + Adjektiv auf -fähig*: *Die Maschine ist reparaturfähig.* (*Tamir edilebilir.*)",
  },

  // 1. Infinitivsatz hakkında genel bilgi
  // Alt Başlık 1: "zu + fiilin mastar hali" yapısı
  {
    question: "Sie versucht, das Problem _______ zu lösen.",
    options: [
      { text: "schnell", value: "a" },
      { text: "zu schnell", value: "b" },
      { text: "schnellen", value: "c" },
      { text: "schnell zu", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Infinitivsatz’da *zu + fiilin mastar hali* kullanılır: *das Problem schnell zu lösen*. Zarf (*schnell*) *zu*’dan önce gelir.",
  },
  {
    question: "Er hat keine Lust, _______ zu trainieren.",
    options: [
      { text: "heute", value: "a" },
      { text: "zu heute", value: "b" },
      { text: "heuten", value: "c" },
      { text: "heute zu", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "*zu + mastar* yapısında zarf *zu*’dan önce: *heute zu trainieren*.",
  },
  {
    question: "Welche Struktur ist für einen Infinitivsatz korrekt?",
    options: [
      { text: "zu + Infinitiv", value: "a" },
      { text: "zu + Partizip II", value: "b" },
      { text: "dass + Konjunktiv", value: "c" },
      { text: "zu + Präsens", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "Infinitivsatz *zu + Infinitiv* ile oluşur: *Er plant, morgen zu kommen.*",
  },
  {
    question: "Ich hoffe, die Arbeit _______ zu beenden.",
    options: [
      { text: "bald", value: "a" },
      { text: "zu bald", value: "b" },
      { text: "balden", value: "c" },
      { text: "bald zu", value: "d" },
    ],
    correctAnswer: "d",
    explanation: "Zarf (*bald*) *zu*’dan önce: *die Arbeit bald zu beenden*.",
  },
  {
    question: "Die Entscheidung, _______ zu handeln, war klug.",
    options: [
      { text: "sofort", value: "a" },
      { text: "zu sofort", value: "b" },
      { text: "soforten", value: "c" },
      { text: "sofort zu", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "*zu + Infinitiv* yapısında zarf *zu*’dan önce: *sofort zu handeln*.",
  },

  // Alt Başlık 2: Yancümlelerle benzerlik ve farklar
  {
    question:
      "Welcher Satz verwendet einen Infinitivsatz statt einer Nebensatzkonstruktion?",
    options: [
      { text: "Sie freut sich, morgen zu reisen.", value: "a" },
      { text: "Sie freut sich, dass sie morgen reist.", value: "b" },
      { text: "Sie freut sich, weil sie morgen reist.", value: "c" },
      { text: "Sie freut sich, wenn sie morgen reist.", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Infinitivsatz *zu + Infinitiv* ile: *Sie freut sich, morgen zu reisen.* Diğerleri yancümle (*dass*, *weil*, *wenn*) içerir.",
  },
  {
    question: "Welcher Satz ist ein Infinitivsatz?",
    options: [
      { text: "Er plant, früh aufzustehen.", value: "a" },
      { text: "Er plant, dass er früh aufsteht.", value: "b" },
      { text: "Er plant, weil er früh aufsteht.", value: "c" },
      { text: "Er plant, wenn er früh aufsteht.", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "Infinitivsatz: *Er plant, früh aufzustehen.* Diğerleri *dass*, *weil*, *wenn* ile yancümledir.",
  },
  {
    question:
      "Was ist der Hauptunterschied zwischen Infinitivsatz und Nebensatz?",
    options: [
      { text: "Infinitivsatz verwendet *zu + Infinitiv*.", value: "a" },
      { text: "Nebensatz verwendet *zu + Infinitiv*.", value: "b" },
      { text: "Infinitivsatz hat immer ein eigenes Subjekt.", value: "c" },
      { text: "Nebensatz hat keinen Konjunktiv.", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "Infinitivsatz *zu + Infinitiv* ile oluşur, Nebensatz ise çekimli fiil içerir: *Er will lernen.* vs. *Er sagt, dass er lernt.*",
  },
  {
    question: "Welcher Satz enthält einen Infinitivsatz?",
    options: [
      { text: "Ich hoffe, bald zu kommen.", value: "a" },
      { text: "Ich hoffe, dass ich bald komme.", value: "b" },
      { text: "Ich komme, weil ich hoffe.", value: "c" },
      { text: "Ich komme, wenn ich hoffe.", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Infinitivsatz: *Ich hoffe, bald zu kommen.* Diğerleri yancümle içerir.",
  },
  {
    question: "Was unterscheidet einen Infinitivsatz von einem Nebensatz?",
    options: [
      { text: "Infinitivsatz hat oft kein explizites Subjekt.", value: "a" },
      { text: "Nebensatz verwendet immer *zu*.", value: "b" },
      { text: "Infinitivsatz hat einen Konjunktiv.", value: "c" },
      { text: "Nebensatz hat immer *zu + Infinitiv*.", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Infinitivsatz’da özne genellikle ana cümleninkine bağlıdır: *Er will lernen.* vs. *Er sagt, dass er lernt.*",
  },

  // Alt Başlık 3: Infinitivsatz’ların özne durumu
  {
    question: "Das Subjekt eines Infinitivsatzes ist meist _______ .",
    options: [
      { text: "das Subjekt des Hauptsatzes", value: "a" },
      { text: "ein unabhängiges Subjekt", value: "b" },
      { text: "immer *es*", value: "c" },
      { text: "der Nebensatz", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "Infinitivsatz’ın öznesi genellikle ana cümlenin öznesi veya nesnesidir: *Er will lernen.* (aynı özne).",
  },
  {
    question:
      "Welcher Satz zeigt, dass das Subjekt des Infinitivsatzes dem Hauptsatzsubjekt entspricht?",
    options: [
      { text: "Sie hofft, pünktlich zu sein.", value: "a" },
      { text: "Sie bittet ihn, pünktlich zu sein.", value: "b" },
      { text: "Sie weiß, dass er pünktlich ist.", value: "c" },
      { text: "Es freut sie, dass er pünktlich ist.", value: "d" },
    ],
    correctAnswer: "d",
    explanation: "Özne (*Sie*) aynı: *Sie hofft, pünktlich zu sein.*",
  },
  {
    question: "Das Subjekt eines Infinitivsatzes kann _______ sein.",
    options: [
      { text: "das Objekt des Hauptsatzes", value: "a" },
      { text: "immer *es*", value: "b" },
      { text: "ein unabhängiges Subjekt", value: "c" },
      { text: "nur im Nebensatz angegeben", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Infinitivsatz’ın öznesi ana cümlenin nesnesi olabilir: *Er bittet sie, zu kommen.* (*Sie* özne).",
  },
  {
    question: "Sie freut sich, _______ zu sein.",
    options: [
      { text: "erfolgreich", value: "a" },
      { text: "dass sie erfolgreich ist", value: "b" },
      { text: "erfolgreichen", value: "c" },
      { text: "zu erfolgreich", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Özne (*Sie*) aynı: *Sie freut sich, erfolgreich zu sein.*",
  },
  {
    question: "Welcher Satz zeigt ein Infinitivsatz ohne explizites Subjekt?",
    options: [
      { text: "Zu lernen ist nützlich.", value: "a" },
      { text: "Er will lernen.", value: "b" },
      { text: "Sie bittet ihn, zu lernen.", value: "c" },
      { text: "Er freut sich, zu lernen.", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "Özne belirsiz: *Zu lernen ist nützlich.* Diğerlerinde özne ana cümleden gelir.",
  },

  // Alt Başlık 4: Ana cümlenin öznesi/nesnesini kullanma prensibi
  {
    question: "Das Subjekt eines Infinitivsatzes ist meist _______ abhängig.",
    options: [
      { text: "vom Hauptsatz", value: "a" },
      { text: "von einem unabhängigen Element", value: "b" },
      { text: "vom Nebensatz", value: "c" },
      { text: "immer von *es*", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "Infinitivsatz’ın öznesi ana cümlenin öznesi veya nesnesine bağlıdır: *Er will lernen.* veya *Er bittet sie, zu kommen.*",
  },
  {
    question: "Er bittet sie, _______ zu bleiben.",
    options: [
      { text: "hier", value: "a" },
      { text: "dass sie hier bleibt", value: "b" },
      { text: "hier zu", value: "c" },
      { text: "hieren", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Özne ana cümlenin nesnesi (*sie*): *Er bittet sie, hier zu bleiben.*",
  },
  {
    question:
      "Welcher Satz zeigt, dass das Subjekt des Infinitivsatzes das Objekt des Hauptsatzes ist?",
    options: [
      { text: "Sie rät ihm, vorsichtig zu sein.", value: "a" },
      { text: "Sie freut sich, vorsichtig zu sein.", value: "b" },
      { text: "Sie weiß, dass er vorsichtig ist.", value: "c" },
      { text: "Es gefällt ihr, dass er vorsichtig ist.", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Nesne (*ihm*): *Sie rät ihm, vorsichtig zu sein.*",
  },
  {
    question: "Er hofft, _______ zu gewinnen.",
    options: [
      { text: "das Spiel", value: "a" },
      { text: "dass er das Spiel gewinnt", value: "b" },
      { text: "dem Spiel", value: "c" },
      { text: "zu das Spiel", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "Özne ana cümleninkine bağlı: *Er hofft, das Spiel zu gewinnen.* (*Er* özne).",
  },
  {
    question:
      "Welcher Satz zeigt, dass das Subjekt des Infinitivsatzes vom Hauptsatz kommt?",
    options: [
      { text: "Sie plant, morgen zu reisen.", value: "a" },
      { text: "Sie sagt, dass sie morgen reist.", value: "b" },
      { text: "Sie bittet ihn, morgen zu reisen.", value: "c" },
      { text: "Es freut sie, dass er reist.", value: "d" },
    ],
    correctAnswer: "d",
    explanation: "Özne (*Sie*) aynı: *Sie plant, morgen zu reisen.*",
  },

  // 2. Ana cümlenin öznesi, Infinitivsatz’ın da öznesi
  // Alt Başlık 5: Aynı özne paylaşımı durumu
  {
    question: "Sie ist sicher, _______ zu bestehen.",
    options: [
      { text: "die Prüfung", value: "a" },
      { text: "dass sie die Prüfung besteht", value: "b" },
      { text: "der Prüfung", value: "c" },
      { text: "zu die Prüfung", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Özne (*Sie*) aynı: *Sie ist sicher, die Prüfung zu bestehen.*",
  },
  {
    question: "Er behauptet, _______ zu wissen.",
    options: [
      { text: "alles", value: "a" },
      { text: "dass er alles weiß", value: "b" },
      { text: "allen", value: "c" },
      { text: "zu alles", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Özne (*Er*) aynı: *Er behauptet, alles zu wissen.*",
  },
  {
    question: "Ich befürchte, _______ zu versagen.",
    options: [
      { text: "im Projekt", value: "a" },
      { text: "dass ich im Projekt versage", value: "b" },
      { text: "im Projekten", value: "c" },
      { text: "zu im Projekt", value: "d" },
    ],
    correctAnswer: "c",
    explanation: "Özne (*Ich*) aynı: *Ich befürchte, im Projekt zu versagen.*",
  },
  {
    question: "Er hat den Eindruck, _______ zu sein.",
    options: [
      { text: "richtig", value: "a" },
      { text: "dass er richtig ist", value: "b" },
      { text: "richtigen", value: "c" },
      { text: "zu richtig", value: "d" },
    ],
    correctAnswer: "d",
    explanation: "Özne (*Er*) aynı: *Er hat den Eindruck, richtig zu sein.*",
  },
  {
    question: "Es gefällt mir, _______ zu reisen.",
    options: [
      { text: "allein", value: "a" },
      { text: "dass ich allein reise", value: "b" },
      { text: "alleinen", value: "c" },
      { text: "zu allein", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Özne (*mir*): *Es gefällt mir, allein zu reisen.*",
  },

  // Alt Başlık 6: Örnekler (sicher sein, behaupten, befürchten, den Eindruck haben, es gefällt mir, es freut mich)
  {
    question: "Es freut mich, _______ zu helfen.",
    options: [
      { text: "dir", value: "a" },
      { text: "dass ich dir helfe", value: "b" },
      { text: "dich", value: "c" },
      { text: "zu dir", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Özne (*mich*): *Es freut mich, dir zu helfen.*",
  },
  {
    question: "Sie ist sicher, _______ zu gewinnen.",
    options: [
      { text: "das Rennen", value: "a" },
      { text: "dass sie das Rennen gewinnt", value: "b" },
      { text: "dem Rennen", value: "c" },
      { text: "zu das Rennen", value: "d" },
    ],
    correctAnswer: "c",
    explanation: "Özne (*Sie*): *Sie ist sicher, das Rennen zu gewinnen.*",
  },
  {
    question: "Er behauptet, _______ zu sein.",
    options: [
      { text: "unschuldig", value: "a" },
      { text: "dass er unschuldig ist", value: "b" },
      { text: "unschuldigen", value: "c" },
      { text: "zu unschuldig", value: "d" },
    ],
    correctAnswer: "d",
    explanation: "Özne (*Er*): *Er behauptet, unschuldig zu sein.*",
  },
  {
    question: "Ich befürchte, _______ zu verlieren.",
    options: [
      { text: "die Kontrolle", value: "a" },
      { text: "dass ich die Kontrolle verliere", value: "b" },
      { text: "der Kontrolle", value: "c" },
      { text: "zu die Kontrolle", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Özne (*Ich*): *Ich befürchte, die Kontrolle zu verlieren.*",
  },
  {
    question: "Es gefällt ihr, _______ zu tanzen.",
    options: [
      { text: "nachts", value: "a" },
      { text: "dass sie nachts tanzt", value: "b" },
      { text: "nächten", value: "c" },
      { text: "zu nachts", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Özne (*ihr*): *Es gefällt ihr, nachts zu tanzen.*",
  },

  // 3. Ana cümlenin nesnesi, Infinitivsatz’ın öznesi
  // Alt Başlık 7: Nesne-özne geçişimi durumu
  {
    question: "Er bittet sie, _______ zu bleiben.",
    options: [
      { text: "ruhig", value: "a" },
      { text: "dass sie ruhig bleibt", value: "b" },
      { text: "ruhig zu", value: "c" },
      { text: "ruhigen", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "Nesne (*sie*) Infinitivsatz’ın öznesi: *Er bittet sie, ruhig zu bleiben.*",
  },
  {
    question: "Sie rät ihm, _______ zu lernen.",
    options: [
      { text: "fleißig", value: "a" },
      { text: "dass er fleißig lernt", value: "b" },
      { text: "fleißig zu", value: "c" },
      { text: "fleißigen", value: "d" },
    ],
    correctAnswer: "d",
    explanation: "Nesne (*ihm*): *Sie rät ihm, fleißig zu lernen.*",
  },
  {
    question: "Er verlangt von uns, _______ zu arbeiten.",
    options: [
      { text: "schnell", value: "a" },
      { text: "dass wir schnell arbeiten", value: "b" },
      { text: "schnell zu", value: "c" },
      { text: "schnellen", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Nesne (*uns*): *Er verlangt von uns, schnell zu arbeiten.*",
  },
  {
    question:
      "Welcher Satz zeigt, dass das Subjekt des Infinitivsatzes das Objekt des Hauptsatzes ist?",
    options: [
      { text: "Sie bittet ihn, leise zu sein.", value: "a" },
      { text: "Sie hofft, leise zu sein.", value: "b" },
      { text: "Sie weiß, dass er leise ist.", value: "c" },
      { text: "Es freut sie, dass er leise ist.", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Nesne (*ihn*): *Sie bittet ihn, leise zu sein.*",
  },
  {
    question: "Sie bittet mich, _______ zu helfen.",
    options: [
      { text: "ihr", value: "a" },
      { text: "dass ich ihr helfe", value: "b" },
      { text: "sie", value: "c" },
      { text: "zu ihr", value: "d" },
    ],
    correctAnswer: "c",
    explanation: "Nesne (*mich*): *Sie bittet mich, ihr zu helfen.*",
  },

  // Alt Başlık 8: Örnekler (bitten, raten, verlangen)
  {
    question: "Er rät uns, _______ zu sein.",
    options: [
      { text: "geduldig", value: "a" },
      { text: "dass wir geduldig sind", value: "b" },
      { text: "geduldigen", value: "c" },
      { text: "zu geduldig", value: "d" },
    ],
    correctAnswer: "d",
    explanation: "Nesne (*uns*): *Er rät uns, geduldig zu sein.*",
  },
  {
    question: "Sie verlangt von ihm, _______ zu bleiben.",
    options: [
      { text: "höflich", value: "a" },
      { text: "dass er höflich bleibt", value: "b" },
      { text: "höflichen", value: "c" },
      { text: "zu höflich", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Nesne (*ihm*): *Sie verlangt von ihm, höflich zu bleiben.*",
  },
  {
    question: "Ich bitte dich, _______ zu kommen.",
    options: [
      { text: "früh", value: "a" },
      { text: "dass du früh kommst", value: "b" },
      { text: "früh zu", value: "c" },
      { text: "frühen", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Nesne (*dich*): *Ich bitte dich, früh zu kommen.*",
  },
  {
    question: "Er rät ihr, _______ zu studieren.",
    options: [
      { text: "konzentriert", value: "a" },
      { text: "dass sie konzentriert studiert", value: "b" },
      { text: "konzentrierten", value: "c" },
      { text: "zu konzentriert", value: "d" },
    ],
    correctAnswer: "c",
    explanation: "Nesne (*ihr*): *Er rät ihr, konzentriert zu studieren.*",
  },
  {
    question: "Wir verlangen von ihnen, _______ zu sein.",
    options: [
      { text: "pünktlich", value: "a" },
      { text: "dass sie pünktlich sind", value: "b" },
      { text: "pünktlichen", value: "c" },
      { text: "zu pünktlich", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "Nesne (*ihnen*): *Wir verlangen von ihnen, pünktlich zu sein.*",
  },

  // Alt Başlık 9: Eylemi yapan kişinin belirlenmesi
  {
    question: "Sie bittet ihn, _______ zu singen. Wer singt?",
    options: [
      { text: "Er", value: "a" },
      { text: "Sie", value: "b" },
      { text: "Beide", value: "c" },
      { text: "Niemand", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Nesne (*ihn*): *Er* singt.",
  },
  {
    question: "Er rät ihr, _______ zu lernen. Wer lernt?",
    options: [
      { text: "Sie", value: "a" },
      { text: "Er", value: "b" },
      { text: "Beide", value: "c" },
      { text: "Niemand", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Nesne (*ihr*): *Sie* öğrenir.",
  },
  {
    question: "Wir verlangen von euch, _______ zu arbeiten. Wer çalışır?",
    options: [
      { text: "Ihr", value: "a" },
      { text: "Wir", value: "b" },
      { text: "Beide", value: "c" },
      { text: "Niemand", value: "d" },
    ],
    correctAnswer: "c",
    explanation: "Nesne (*euch*): *Ihr* çalışır.",
  },
  {
    question: "Er bittet mich, _______ zu bleiben. Wer kalır?",
    options: [
      { text: "Ich", value: "a" },
      { text: "Er", value: "b" },
      { text: "Beide", value: "c" },
      { text: "Niemand", value: "d" },
    ],
    correctAnswer: "d",
    explanation: "Nesne (*mich*): *Ich* kalır.",
  },
  {
    question: "Sie rät uns, _______ zu sein. Kim dikkatli olur?",
    options: [
      { text: "Wir", value: "a" },
      { text: "Sie", value: "b" },
      { text: "Beide", value: "c" },
      { text: "Niemand", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Nesne (*uns*): *Wir* dikkatli olur.",
  },

  // 4. Infinitivsatz ve yancümle karşılaştırması
  // Alt Başlık 10: Infinitivsatz vs. dass-Satz örnekleri
  {
    question: "Welcher Satz enthält einen Infinitivsatz?",
    options: [
      { text: "Er hofft, bald zu kommen.", value: "a" },
      { text: "Er hofft, dass er bald kommt.", value: "b" },
      { text: "Er kommt, weil er hofft.", value: "c" },
      { text: "Er kommt, wenn er hofft.", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Infinitivsatz: *Er hofft, bald zu kommen.* Diğerleri *dass* veya başka bağlaçlarla yancümle.",
  },
  {
    question: "Welcher Satz enthält einen *dass*-Satz?",
    options: [
      { text: "Sie freut sich, dich zu sehen.", value: "a" },
      { text: "Sie freut sich, dass du da bist.", value: "b" },
      { text: "Sie freut sich, weil du da bist.", value: "c" },
      { text: "Sie freut sich, wenn du da bist.", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "*dass*-Satz: *Sie freut sich, dass du da bist.* Eşdeğeri: *Sie freut sich, dich zu sehen.*",
  },
  {
    question:
      "Welcher Infinitivsatz kann als *dass*-Satz umgeschrieben werden?",
    options: [
      { text: "Er plant, morgen zu reisen.", value: "a" },
      { text: "Er weiß, dass er morgen reist.", value: "b" },
      { text: "Er reist, weil er plant.", value: "c" },
      { text: "Er reist, wenn er plant.", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "Infinitivsatz: *Er plant, morgen zu reisen.* = *Er plant, dass er morgen reist.*",
  },
  {
    question: "Welcher Satz ist ein *dass*-Satz?",
    options: [
      { text: "Sie behauptet, alles zu wissen.", value: "a" },
      { text: "Sie behauptet, dass sie alles weiß.", value: "b" },
      { text: "Sie weiß, weil sie behauptet.", value: "c" },
      { text: "Sie weiß, wenn sie behauptet.", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "*dass*-Satz: *Sie behauptet, dass sie alles weiß.* Eşdeğeri: *Sie behauptet, alles zu wissen.*",
  },
  {
    question: "Welcher Satz enthält einen Infinitivsatz?",
    options: [
      { text: "Er freut sich, dich zu treffen.", value: "a" },
      { text: "Er freut sich, dass du da bist.", value: "b" },
      { text: "Er trifft dich, weil er sich freut.", value: "c" },
      { text: "Er trifft dich, wenn er sich freut.", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "Infinitivsatz: *Er freut sich, dich zu treffen.* Diğerleri *dass* veya başka bağlaç içerir.",
  },

  // Alt Başlık 11: Aynı anlamı farklı yapılarla ifade etme
  {
    question:
      "Welcher Satz hat die gleiche Bedeutung wie *Er hofft, morgen zu kommen.*?",
    options: [
      { text: "Er hofft, dass er morgen kommt.", value: "a" },
      { text: "Er kommt, weil er hofft.", value: "b" },
      { text: "Er kommt, wenn er hofft.", value: "c" },
      { text: "Er hofft, morgen zu sein.", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "*Er hofft, morgen zu kommen.* = *Er hofft, dass er morgen kommt.*",
  },
  {
    question:
      "Welcher Satz ist äquivalent zu *Sie freut sich, dich zu sehen.*?",
    options: [
      { text: "Sie freut sich, dass du da bist.", value: "a" },
      { text: "Sie sieht dich, weil sie sich freut.", value: "b" },
      { text: "Sie sieht dich, wenn sie sich freut.", value: "c" },
      { text: "Sie freut sich, dich zu sein.", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "*Sie freut sich, dich zu sehen.* ≈ *Sie freut sich, dass du da bist.*",
  },
  {
    question:
      "Welcher Satz hat die gleiche Bedeutung wie *Er plant, früh aufzustehen.*?",
    options: [
      { text: "Er plant, dass er früh aufsteht.", value: "a" },
      { text: "Er steht früh auf, weil er plant.", value: "b" },
      { text: "Er steht früh auf, wenn er plant.", value: "c" },
      { text: "Er plant, früh zu sein.", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "*Er plant, früh aufzustehen.* = *Er plant, dass er früh aufsteht.*",
  },
  {
    question:
      "Welcher Satz ist äquivalent zu *Sie behauptet, recht zu haben.*?",
    options: [
      { text: "Sie behauptet, dass sie recht hat.", value: "a" },
      { text: "Sie hat recht, weil sie behauptet.", value: "b" },
      { text: "Sie hat recht, wenn sie behauptet.", value: "c" },
      { text: "Sie behauptet, recht zu sein.", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "*Sie behauptet, recht zu haben.* = *Sie behauptet, dass sie recht hat.*",
  },
  {
    question:
      "Welcher Satz hat die gleiche Bedeutung wie *Ich hoffe, erfolgreich zu sein.*?",
    options: [
      { text: "Ich hoffe, dass ich erfolgreich bin.", value: "a" },
      { text: "Ich bin erfolgreich, weil ich hoffe.", value: "b" },
      { text: "Ich bin erfolgreich, wenn ich hoffe.", value: "c" },
      { text: "Ich hoffe, erfolgreich zu werden.", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "*Ich hoffe, erfolgreich zu sein.* = *Ich hoffe, dass ich erfolgreich bin.*",
  },

  // Alt Başlık 12: Ohne + Infinitivsatz vs. ohne dass + yancümle
  {
    question: "Welcher Satz enthält *ohne + Infinitivsatz*?",
    options: [
      { text: "Er ging, ohne zu sprechen.", value: "a" },
      { text: "Er ging, ohne dass er sprach.", value: "b" },
      { text: "Er sprach, weil er ging.", value: "c" },
      { text: "Er sprach, wenn er ging.", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "*ohne + Infinitivsatz*: *Er ging, ohne zu sprechen.* Eşdeğeri: *ohne dass er sprach.*",
  },
  {
    question: "Welcher Satz enthält *ohne dass + Nebensatz*?",
    options: [
      { text: "Sie kam, ohne dass sie bemerkte.", value: "a" },
      { text: "Sie kam, ohne zu bemerken.", value: "b" },
      { text: "Sie bemerkte, weil sie kam.", value: "c" },
      { text: "Sie bemerkte, wenn sie kam.", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "*ohne dass + yancümle*: *Sie kam, ohne dass sie bemerkte.* Eşdeğeri: *ohne zu bemerken.*",
  },
  {
    question: "Welcher Satz ist ein Beispiel für *ohne + Infinitivsatz*?",
    options: [
      { text: "Er arbeitet, ohne zu klagen.", value: "a" },
      { text: "Er arbeitet, ohne dass er klagt.", value: "b" },
      { text: "Er klagt, weil er arbeitet.", value: "c" },
      { text: "Er klagt, wenn er arbeitet.", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "*ohne + Infinitivsatz*: *Er arbeitet, ohne zu klagen.*",
  },
  {
    question: "Welcher Satz ist ein Beispiel für *ohne dass + Nebensatz*?",
    options: [
      { text: "Sie lief, ohne dass sie müde wurde.", value: "a" },
      { text: "Sie lief, ohne müde zu werden.", value: "b" },
      { text: "Sie wurde müde, weil sie lief.", value: "c" },
      { text: "Sie wurde müde, wenn sie lief.", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "*ohne dass + yancümle*: *Sie lief, ohne dass sie müde wurde.*",
  },
  {
    question: "Welcher Satz enthält *ohne + Infinitivsatz*?",
    options: [
      { text: "Er aß, ohne zu sprechen.", value: "a" },
      { text: "Er aß, ohne dass er sprach.", value: "b" },
      { text: "Er sprach, weil er aß.", value: "c" },
      { text: "Er sprach, wenn er aß.", value: "d" },
    ],
    correctAnswer: "d",
    explanation: "*ohne + Infinitivsatz*: *Er aß, ohne zu sprechen.*",
  },

  // 5. Infinitivsatz’ların işlevi ve biçimi
  // Alt Başlık 13: Infinitivsatz’ın üç temel rolü (Subjektsatz, Objektsatz, Adverbialbestimmung)
  {
    question: "Welcher Satz enthält einen Infinitivsatz als Subjektsatz?",
    options: [
      { text: "Zu lernen ist wichtig.", value: "a" },
      { text: "Er will lernen.", value: "b" },
      { text: "Er lernt, um erfolgreich zu sein.", value: "c" },
      { text: "Er freut sich, zu lernen.", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Subjektsatz: *Zu lernen ist wichtig.* (Özne rolü).",
  },
  {
    question: "Welcher Satz enthält einen Infinitivsatz als Objektsatz?",
    options: [
      { text: "Er freut sich, dich zu sehen.", value: "a" },
      { text: "Dich zu sehen ist schön.", value: "b" },
      { text: "Er kommt, um dich zu sehen.", value: "c" },
      { text: "Es ist schön, dich zu sehen.", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Objektsatz: *Er freut sich, dich zu sehen.* (Nesne rolü).",
  },
  {
    question:
      "Welcher Satz enthält einen Infinitivsatz als Adverbialbestimmung?",
    options: [
      { text: "Er lernt, um erfolgreich zu sein.", value: "a" },
      { text: "Er will erfolgreich sein.", value: "b" },
      { text: "Erfolgreich zu sein ist sein Ziel.", value: "c" },
      { text: "Er freut sich, erfolgreich zu sein.", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "Adverbialbestimmung: *Er lernt, um erfolgreich zu sein.* (Zarf tamlaması, amaç belirtir).",
  },
  {
    question: "Welcher Satz zeigt einen Infinitivsatz als Subjektsatz?",
    options: [
      { text: "Zu reisen macht Spaß.", value: "a" },
      { text: "Er will reisen.", value: "b" },
      { text: "Er reist, um zu lernen.", value: "c" },
      { text: "Er freut sich, zu reisen.", value: "d" },
    ],
    correctAnswer: "d",
    explanation: "Subjektsatz: *Zu reisen macht Spaß.*",
  },
  {
    question: "Welcher Satz enthält einen Infinitivsatz als Objektsatz?",
    options: [
      { text: "Er hofft, pünktlich zu sein.", value: "a" },
      { text: "Pünktlich zu sein ist wichtig.", value: "b" },
      { text: "Er kommt, um pünktlich zu sein.", value: "c" },
      { text: "Es ist wichtig, pünktlich zu sein.", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Objektsatz: *Er hofft, pünktlich zu sein.*",
  },

  // Alt Başlık 14: Zarf tamlaması durumunda bağlaç yapıları (anstatt ... zu, ohne ... zu, um ... zu)
  {
    question: "Er blieb zu Hause, _______ zu feiern.",
    options: [
      { text: "um", value: "a" },
      { text: "anstatt", value: "b" },
      { text: "ohne", value: "c" },
      { text: "dass", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "*anstatt + Infinitivsatz*: *Er blieb zu Hause, anstatt zu feiern.* (*Partiye gitmek yerine.*)",
  },
  {
    question: "Sie lernte, _______ erfolgreich zu sein.",
    options: [
      { text: "um", value: "a" },
      { text: "anstatt", value: "b" },
      { text: "ohne", value: "c" },
      { text: "dass", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "*um + Infinitivsatz*: *Sie lernte, um erfolgreich zu sein.* (*Başarılı olmak için.*)",
  },
  {
    question: "Er ging, _______ zu grüßen.",
    options: [
      { text: "ohne", value: "a" },
      { text: "um", value: "b" },
      { text: "anstatt", value: "c" },
      { text: "dass", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "*ohne + Infinitivsatz*: *Er ging, ohne zu grüßen.* (*Selam vermeden.*)",
  },
  {
    question: "Sie arbeitete, _______ zu pausieren.",
    options: [
      { text: "anstatt", value: "a" },
      { text: "um", value: "b" },
      { text: "ohne", value: "c" },
      { text: "dass", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "*anstatt + Infinitivsatz*: *Sie arbeitete, anstatt zu pausieren.* (*Ara vermek yerine.*)",
  },
  {
    question: "Er trainierte, _______ fit zu bleiben.",
    options: [
      { text: "um", value: "a" },
      { text: "anstatt", value: "b" },
      { text: "ohne", value: "c" },
      { text: "dass", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "*um + Infinitivsatz*: *Er trainierte, um fit zu bleiben.* (*Fit kalmak için.*)",
  },

  // 6. Infinitivsatz’ın rolü: Subjektsatz
  // Alt Başlık 15: Özne rolü örnekleri
  {
    question: "_______ macht mich müde.",
    options: [
      { text: "Den ganzen Tag zu arbeiten", value: "a" },
      { text: "Dass ich den ganzen Tag arbeite", value: "b" },
      { text: "Den ganzen Tag arbeiten", value: "c" },
      { text: "Zu den ganzen Tag arbeiten", value: "d" },
    ],
    correctAnswer: "c",
    explanation: "Subjektsatz: *Den ganzen Tag zu arbeiten macht mich müde.*",
  },
  {
    question: "_______ ist nicht einfach.",
    options: [
      { text: "Dich zu verstehen", value: "a" },
      { text: "Dass ich dich verstehe", value: "b" },
      { text: "Dich verstehen", value: "c" },
      { text: "Zu dich verstehen", value: "d" },
    ],
    correctAnswer: "d",
    explanation: "Subjektsatz: *Dich zu verstehen ist nicht einfach.*",
  },
  {
    question: "_______ freut uns.",
    options: [
      { text: "Euch hier zu treffen", value: "a" },
      { text: "Dass wir euch hier treffen", value: "b" },
      { text: "Euch hier treffen", value: "c" },
      { text: "Zu euch hier treffen", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "Subjektsatz: *Euch hier zu treffen freut uns.*",
  },
  {
    question: "_______ ist sein Traum.",
    options: [
      { text: "Die Welt zu sehen", value: "a" },
      { text: "Dass er die Welt sieht", value: "b" },
      { text: "Die Welt sehen", value: "c" },
      { text: "Zu die Welt sehen", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Subjektsatz: *Die Welt zu sehen ist sein Traum.*",
  },
  {
    question: "_______ macht Spaß.",
    options: [
      { text: "Neue Sprachen zu lernen", value: "a" },
      { text: "Dass wir neue Sprachen lernen", value: "b" },
      { text: "Neue Sprachen lernen", value: "c" },
      { text: "Zu neue Sprachen lernen", value: "d" },
    ],
    correctAnswer: "c",
    explanation: "Subjektsatz: *Neue Sprachen zu lernen macht Spaß.*",
  },

  // Alt Başlık 16: "es" ile başlayan eşdeğer yapılar
  {
    question: "Welcher Satz enthält einen Subjektsatz mit *es*?",
    options: [
      { text: "Es ist schön, dich zu sehen.", value: "a" },
      { text: "Dich zu sehen ist schön.", value: "b" },
      { text: "Er freut sich, dich zu sehen.", value: "c" },
      { text: "Er will dich zu sehen.", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "*es* ile Subjektsatz: *Es ist schön, dich zu sehen.* Eşdeğeri: *Dich zu sehen ist schön.*",
  },
  {
    question: "Welcher Satz enthält einen Infinitivsatz mit *es*?",
    options: [
      { text: "Es macht Spaß, zu reisen.", value: "a" },
      { text: "Zu reisen macht Spaß.", value: "b" },
      { text: "Er will reisen.", value: "c" },
      { text: "Er freut sich, zu reisen.", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "*es* ile: *Es macht Spaß, zu reisen.*",
  },
  {
    question: "Welcher Satz ist ein Beispiel für einen Subjektsatz mit *es*?",
    options: [
      { text: "Es ist schwer, ihn zu verstehen.", value: "a" },
      { text: "Ihn zu verstehen ist schwer.", value: "b" },
      { text: "Er will ihn verstehen.", value: "c" },
      { text: "Er freut sich, ihn zu verstehen.", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "*es* ile: *Es ist schwer, ihn zu verstehen.*",
  },
  {
    question: "Welcher Satz enthält einen Infinitivsatz mit *es*?",
    options: [
      { text: "Es freut mich, dich zu treffen.", value: "a" },
      { text: "Dich zu treffen freut mich.", value: "b" },
      { text: "Ich will dich treffen.", value: "c" },
      { text: "Ich freue mich, dich zu treffen.", value: "d" },
    ],
    correctAnswer: "c",
    explanation: "*es* ile: *Es freut mich, dich zu treffen.*",
  },
  {
    question: "Welcher Satz enthält einen Subjektsatz mit *es*?",
    options: [
      { text: "Es ist sein Ziel, zu gewinnen.", value: "a" },
      { text: "Zu gewinnen ist sein Ziel.", value: "b" },
      { text: "Er will gewinnen.", value: "c" },
      { text: "Er freut sich, zu gewinnen.", value: "d" },
    ],
    correctAnswer: "d",
    explanation: "*es* ile: *Es ist sein Ziel, zu gewinnen.*",
  },

  // Alt Başlık 17: "dass" cümlesi ile karşılaştırma
  {
    question: "Welcher Satz ist äquivalent zu *Zu lernen ist wichtig.*?",
    options: [
      { text: "Dass man lernt, ist wichtig.", value: "a" },
      { text: "Man will lernen.", value: "b" },
      { text: "Man lernt, um erfolgreich zu sein.", value: "c" },
      { text: "Man freut sich, zu lernen.", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Subjektsatz: *Zu lernen ist wichtig.* = *Dass man lernt, ist wichtig.*",
  },
  {
    question: "Welcher Satz ist äquivalent zu *Dich zu verstehen ist schwer.*?",
    options: [
      { text: "Dass ich dich verstehe, ist schwer.", value: "a" },
      { text: "Ich will dich verstehen.", value: "b" },
      { text: "Ich verstehe dich, um erfolgreich zu sein.", value: "c" },
      { text: "Ich freue mich, dich zu verstehen.", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "*Dich zu verstehen ist schwer.* = *Dass ich dich verstehe, ist schwer.*",
  },
  {
    question:
      "Welcher Satz ist äquivalent zu *Euch hier zu treffen freut uns.*?",
    options: [
      { text: "Dass wir euch hier treffen, freut uns.", value: "a" },
      { text: "Wir wollen euch hier treffen.", value: "b" },
      { text: "Wir treffen euch, um zu freuen.", value: "c" },
      { text: "Wir freuen uns, euch zu treffen.", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "*Euch hier zu treffen freut uns.* = *Dass wir euch hier treffen, freut uns.*",
  },
  {
    question: "Welcher Satz ist äquivalent zu *Die Welt zu sehen ist schön.*?",
    options: [
      { text: "Dass man die Welt sieht, ist schön.", value: "a" },
      { text: "Man will die Welt sehen.", value: "b" },
      { text: "Man sieht die Welt, um glücklich zu sein.", value: "c" },
      { text: "Man freut sich, die Welt zu sehen.", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "*Die Welt zu sehen ist schön.* = *Dass man die Welt sieht, ist schön.*",
  },
  {
    question: "Welcher Satz ist äquivalent zu *Zu reisen macht Spaß.*?",
    options: [
      { text: "Dass man reist, macht Spaß.", value: "a" },
      { text: "Man will reisen.", value: "b" },
      { text: "Man reist, um Spaß zu haben.", value: "c" },
      { text: "Man freut sich, zu reisen.", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "*Zu reisen macht Spaß.* = *Dass man reist, macht Spaß.*",
  },

  // 7. Infinitivsatz’ın rolü: Objektsatz
  // Alt Başlık 18: Nesne rolü örnekleri
  {
    question: "Er behauptet, _______ zu haben.",
    options: [
      { text: "keine Zeit", value: "a" },
      { text: "dass er keine Zeit hat", value: "b" },
      { text: "keiner Zeit", value: "c" },
      { text: "zu keine Zeit", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Objektsatz: *Er behauptet, keine Zeit zu haben.*",
  },
  {
    question: "Wir bedauern, _______ zu müssen.",
    options: [
      { text: "Sie enttäuschen", value: "a" },
      { text: "dass wir Sie enttäuschen müssen", value: "b" },
      { text: "Sie enttäuschen zu", value: "c" },
      { text: "Sie zu enttäuschen", value: "d" },
    ],
    correctAnswer: "c",
    explanation: "Objektsatz: *Wir bedauern, Sie enttäuschen zu müssen.*",
  },
  {
    question: "Wir freuen uns darauf, _______ wegzufahren.",
    options: [
      { text: "morgen mit euch", value: "a" },
      { text: "dass wir morgen mit euch wegfahren", value: "b" },
      { text: "morgen mit euch zu", value: "c" },
      { text: "zu morgen mit euch", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "Objektsatz: *Wir freuen uns darauf, morgen mit euch wegzufahren.*",
  },
  {
    question: "Sie sind froh, _______ beigelegt zu haben.",
    options: [
      { text: "den Streit endlich", value: "a" },
      { text: "dass sie den Streit endlich beigelegt haben", value: "b" },
      { text: "den Streit endlich zu", value: "c" },
      { text: "zu den Streit endlich", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "Objektsatz: *Sie sind froh, den Streit endlich beigelegt zu haben.*",
  },
  {
    question: "Er plant, _______ zu besuchen.",
    options: [
      { text: "seine Familie", value: "a" },
      { text: "dass er seine Familie besucht", value: "b" },
      { text: "seiner Familie", value: "c" },
      { text: "zu seine Familie", value: "d" },
    ],
    correctAnswer: "b",
    explanation: "Objektsatz: *Er plant, seine Familie zu besuchen.*",
  },

  // Alt Başlık 19: "darauf/darüber" ile yapılan bağlantılar
  {
    question: "Wir freuen uns _______ , morgen zu reisen.",
    options: [
      { text: "darauf", value: "a" },
      { text: "dass", value: "b" },
      { text: "darüber", value: "c" },
      { text: "zu", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "*darauf* ile Objektsatz: *Wir freuen uns darauf, morgen zu reisen.*",
  },
  {
    question: "Sie sind froh _______ , das Ziel erreicht zu haben.",
    options: [
      { text: "darüber", value: "a" },
      { text: "dass", value: "b" },
      { text: "darauf", value: "c" },
      { text: "zu", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "*darüber* ile: *Sie sind froh darüber, das Ziel erreicht zu haben.*",
  },
  {
    question: "Er freut sich _______ , dich zu treffen.",
    options: [
      { text: "darauf", value: "a" },
      { text: "dass", value: "b" },
      { text: "darüber", value: "c" },
      { text: "zu", value: "d" },
    ],
    correctAnswer: "a",
    explanation: "*darauf* ile: *Er freut sich darauf, dich zu treffen.*",
  },
  {
    question: "Wir sind stolz _______ , das geschafft zu haben.",
    options: [
      { text: "darüber", value: "a" },
      { text: "dass", value: "b" },
      { text: "darauf", value: "c" },
      { text: "zu", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "*darüber* ile: *Wir sind stolz darüber, das geschafft zu haben.*",
  },
  {
    question: "Sie freuen sich _______ , morgen zu kommen.",
    options: [
      { text: "darauf", value: "a" },
      { text: "dass", value: "b" },
      { text: "darüber", value: "c" },
      { text: "zu", value: "d" },
    ],
    correctAnswer: "c",
    explanation: "*darauf* ile: *Sie freuen sich darauf, morgen zu kommen.*",
  },

  // Alt Başlık 20: "dass" cümlesi ile eşdeğerlik
  {
    question:
      "Welcher Satz ist äquivalent zu *Er behauptet, keine Zeit zu haben.*?",
    options: [
      { text: "Er behauptet, dass er keine Zeit hat.", value: "a" },
      { text: "Er hat keine Zeit, weil er behauptet.", value: "b" },
      { text: "Er hat keine Zeit, wenn er behauptet.", value: "c" },
      { text: "Er behauptet, keine Zeit zu sein.", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "*Er behauptet, keine Zeit zu haben.* = *Er behauptet, dass er keine Zeit hat.*",
  },
  {
    question:
      "Welcher Satz ist äquivalent zu *Wir bedauern, Sie enttäuschen zu müssen.*?",
    options: [
      { text: "Wir bedauern, dass wir Sie enttäuschen müssen.", value: "a" },
      { text: "Wir enttäuschen Sie, weil wir bedauern.", value: "b" },
      { text: "Wir enttäuschen Sie, wenn wir bedauern.", value: "c" },
      { text: "Wir bedauern, Sie zu enttäuschen.", value: "d" },
    ],
    correctAnswer: "a",
    explanation:
      "*Wir bedauern, Sie enttäuschen zu müssen.* = *Wir bedauern, dass wir Sie enttäuschen müssen.*",
  },
  {
    question:
      "Welcher Satz ist äquivalent zu *Wir freuen uns darauf, morgen wegzufahren.*?",
    options: [
      { text: "Wir freuen uns, dass wir morgen wegfahren.", value: "a" },
      { text: "Wir fahren weg, weil wir uns freuen.", value: "b" },
      { text: "Wir fahren weg, wenn wir uns freuen.", value: "c" },
      { text: "Wir freuen uns, morgen wegzufahren.", value: "d" },
    ],
    correctAnswer: "b",
    explanation:
      "*Wir freuen uns darauf, morgen wegzufahren.* ≈ *Wir freuen uns, dass wir morgen wegfahren.*",
  },
  {
    question:
      "Welcher Satz ist äquivalent zu *Sie sind froh, den Streit beigelegt zu haben.*?",
    options: [
      {
        text: "Sie sind froh, dass sie den Streit beigelegt haben.",
        value: "a",
      },
      {
        text: "Sie haben den Streit beigelegt, weil sie froh sind.",
        value: "b",
      },
      {
        text: "Sie haben den Streit beigelegt, wenn sie froh sind.",
        value: "c",
      },
      { text: "Sie sind froh, den Streit zu beigelegen.", value: "d" },
    ],
    correctAnswer: "c",
    explanation:
      "*Sie sind froh, den Streit beigelegt zu haben.* = *Sie sind froh, dass sie den Streit beigelegt haben.*",
  },
  {
    question:
      "Welcher Satz ist äquivalent zu *Er plant, seine Familie zu besuchen.*?",
    options: [
      { text: "Er plant, dass er seine Familie besucht.", value: "a" },
      { text: "Er besucht seine Familie, weil er plant.", value: "b" },
      { text: "Er besucht seine Familie, wenn er plant.", value: "c" },
      { text: "Er plant, seine Familie zu sein.", value: "d" },
    ],
    correctAnswer: "d",
    explanation:
      "*Er plant, seine Familie zu besuchen.* = *Er plant, dass er seine Familie besucht.*",
  },

  // 1. Infinitivsatz'ın rolü: Adverbialbestimmung (4 soru)
  {
    question:
      "Der Manager verließ das Büro, _ seine Aufgaben erledigt zu haben.",
    options: [
      { text: "ohne", value: "a" },
      { text: "um", value: "b" },
      { text: "statt", value: "c" },
      { text: "anstatt", value: "d" },
    ],
    correctAnswer: "a",
  },
  {
    question:
      "Die Studenten gingen in die Bibliothek, _ für die Prüfung zu lernen.",
    options: [
      { text: "ohne", value: "a" },
      { text: "um", value: "b" },
      { text: "außer", value: "c" },
      { text: "bis", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "Er kaufte ein teures Auto, _ es sich leisten zu können.",
    options: [
      { text: "um", value: "a" },
      { text: "ohne", value: "b" },
      { text: "statt", value: "c" },
      { text: "trotz", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "Sie blieb zu Hause, _ ins Kino zu gehen.",
    options: [
      { text: "um", value: "a" },
      { text: "ohne", value: "b" },
      { text: "anstatt", value: "c" },
      { text: "außer", value: "d" },
    ],
    correctAnswer: "c",
  },

  // 2. "ohne ... zu" yapısı (4 soru)
  {
    question: "Der Dieb entkam, _ erwischt zu werden.",
    options: [
      { text: "ohne", value: "a" },
      { text: "um", value: "b" },
      { text: "statt", value: "c" },
      { text: "durch", value: "d" },
    ],
    correctAnswer: "a",
  },
  {
    question: "Sie verließ das Haus, _ die Tür _ zu haben.",
    options: [
      { text: "ohne/abgeschlossen", value: "a" },
      { text: "um/abzuschließen", value: "b" },
      { text: "statt/abgeschlossen", value: "c" },
      { text: "ohne/abzuschließen", value: "d" },
    ],
    correctAnswer: "d",
  },
  {
    question: "Er arbeitete den ganzen Tag, _ eine Pause zu machen.",
    options: [
      { text: "um", value: "a" },
      { text: "ohne", value: "b" },
      { text: "statt", value: "c" },
      { text: "trotz", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "Die Kinder spielten im Garten, _ auf ihre Eltern zu hören.",
    options: [
      { text: "um", value: "a" },
      { text: "statt", value: "b" },
      { text: "ohne", value: "c" },
      { text: "außer", value: "d" },
    ],
    correctAnswer: "c",
  },

  // 3. "um ... zu" yapısı (4 soru)
  {
    question: "Wir fahren nach Berlin, _ das Museum zu besuchen.",
    options: [
      { text: "um", value: "a" },
      { text: "ohne", value: "b" },
      { text: "statt", value: "c" },
      { text: "außer", value: "d" },
    ],
    correctAnswer: "a",
  },
  {
    question: "Sie lernt Deutsch, _ in Deutschland studieren zu können.",
    options: [
      { text: "ohne", value: "a" },
      { text: "um", value: "b" },
      { text: "statt", value: "c" },
      { text: "trotz", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "Er spart Geld, _ sich ein neues Auto kaufen zu können.",
    options: [
      { text: "damit", value: "a" },
      { text: "um", value: "b" },
      { text: "ohne", value: "c" },
      { text: "statt", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "Die Firma investiert viel Geld, _ ihre Produkte zu verbessern.",
    options: [
      { text: "ohne", value: "a" },
      { text: "statt", value: "b" },
      { text: "um", value: "c" },
      { text: "außer", value: "d" },
    ],
    correctAnswer: "c",
  },

  // 4. Yancümle eşdeğerleri (4 soru)
  {
    question: "Der Infinitivsatz 'um zu kommen' entspricht dem Nebensatz:",
    options: [
      { text: "dass er kommt", value: "a" },
      { text: "damit er kommt", value: "b" },
      { text: "wenn er kommt", value: "c" },
      { text: "weil er kommt", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "Welcher Nebensatz entspricht 'ohne zu fragen'?",
    options: [
      { text: "ohne dass er fragt", value: "a" },
      { text: "damit er nicht fragt", value: "b" },
      { text: "wenn er nicht fragt", value: "c" },
      { text: "weil er nicht fragt", value: "d" },
    ],
    correctAnswer: "a",
  },
  {
    question:
      "Der Infinitivsatz 'anstatt zu arbeiten' kann ersetzt werden durch:",
    options: [
      { text: "anstatt dass er arbeitet", value: "a" },
      { text: "damit er arbeitet", value: "b" },
      { text: "wenn er arbeitet", value: "c" },
      { text: "weil er arbeitet", value: "d" },
    ],
    correctAnswer: "a",
  },
  {
    question: "'Um pünktlich zu sein' entspricht welchem Nebensatz?",
    options: [
      { text: "dass er pünktlich ist", value: "a" },
      { text: "damit er pünktlich ist", value: "b" },
      { text: "wenn er pünktlich ist", value: "c" },
      { text: "weil er pünktlich ist", value: "d" },
    ],
    correctAnswer: "b",
  },

  // 5. "um... zu" ve "damit" kullanımı (4 soru)
  {
    question: "Ich rufe dich an, _ du Bescheid weißt.",
    options: [
      { text: "um zu", value: "a" },
      { text: "damit", value: "b" },
      { text: "ohne zu", value: "c" },
      { text: "statt zu", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "Er arbeitet hart, _ erfolgreich zu werden.",
    options: [
      { text: "damit", value: "a" },
      { text: "um", value: "b" },
      { text: "ohne", value: "c" },
      { text: "statt", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "Die Lehrerin spricht langsam, _ die Schüler alles verstehen.",
    options: [
      { text: "um zu", value: "a" },
      { text: "damit", value: "b" },
      { text: "ohne zu", value: "c" },
      { text: "anstatt zu", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "Ich lerne jeden Tag, _ mein Deutsch zu verbessern.",
    options: [
      { text: "damit", value: "a" },
      { text: "um", value: "b" },
      { text: "ohne", value: "c" },
      { text: "statt", value: "d" },
    ],
    correctAnswer: "b",
  },

  // 6. Infinitivsatz yerine "dass Satz" (genel) (4 soru)
  {
    question: "Er hofft, _ die Prüfung bestehen zu können.",
    options: [
      { text: "dass er", value: "a" },
      { text: "ohne dass", value: "b" },
      { text: "-", value: "c" },
      { text: "damit er", value: "d" },
    ],
    correctAnswer: "c",
  },
  {
    question: "Sie behauptet, _ die Wahrheit zu sagen.",
    options: [
      { text: "dass sie", value: "a" },
      { text: "-", value: "b" },
      { text: "damit sie", value: "c" },
      { text: "ohne dass sie", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "Welche Umformung ist korrekt? 'Er verspricht zu kommen.'",
    options: [
      { text: "Er verspricht, dass er kommt.", value: "a" },
      { text: "Er verspricht, damit er kommt.", value: "b" },
      { text: "Er verspricht, ohne dass er kommt.", value: "c" },
      { text: "Er verspricht, wenn er kommt.", value: "d" },
    ],
    correctAnswer: "a",
  },
  {
    question: "Die Transformation 'Ich bin froh, hier zu sein' lautet:",
    options: [
      { text: "Ich bin froh, dass ich hier bin.", value: "a" },
      { text: "Ich bin froh, damit ich hier bin.", value: "b" },
      { text: "Ich bin froh, ohne dass ich hier bin.", value: "c" },
      { text: "Ich bin froh, wenn ich hier bin.", value: "d" },
    ],
    correctAnswer: "a",
  },

  // 7. Infinitivsatz yerine "dass Satz" (Durum a) (4 soru)
  {
    question: "Er befürchtet, _ einen Fehler gemacht zu haben.",
    options: [
      { text: "dass er", value: "a" },
      { text: "-", value: "b" },
      { text: "damit er", value: "c" },
      { text: "ohne dass er", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "Sie verlässt das Haus, ohne _ sich verabschiedet zu haben.",
    options: [
      { text: "dass sie", value: "a" },
      { text: "-", value: "b" },
      { text: "damit sie", value: "c" },
      { text: "wenn sie", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "Welche Umformung ist möglich? 'Ich hoffe, zu gewinnen.'",
    options: [
      { text: "Ich hoffe, dass ich gewinne.", value: "a" },
      { text: "Ich hoffe, damit ich gewinne.", value: "b" },
      { text: "Ich hoffe, ohne dass ich gewinne.", value: "c" },
      { text: "Beide a und der Infinitivsatz sind möglich.", value: "d" },
    ],
    correctAnswer: "d",
  },
  {
    question: "Er beabsichtigt, _ morgen zu verreisen.",
    options: [
      { text: "dass er", value: "a" },
      { text: "-", value: "b" },
      { text: "damit er", value: "c" },
      { text: "ohne dass er", value: "d" },
    ],
    correctAnswer: "b",
  },

  // 8. Infinitivsatz yerine "dass Satz" (Durum b) (4 soru)
  {
    question: "Der Kellner bittet die Frau, _ zu warten.",
    options: [
      { text: "dass sie", value: "a" },
      { text: "-", value: "b" },
      { text: "damit sie", value: "c" },
      { text: "ohne dass sie", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "Die Mutter erlaubt den Kindern, _ zu spielen.",
    options: [
      { text: "dass sie", value: "a" },
      { text: "-", value: "b" },
      { text: "damit sie", value: "c" },
      { text: "ohne dass sie", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "Der Lehrer ermutigt die Schüler, _ Fragen zu stellen.",
    options: [
      { text: "-", value: "a" },
      { text: "dass sie", value: "b" },
      { text: "damit sie", value: "c" },
      { text: "ohne dass sie", value: "d" },
    ],
    correctAnswer: "a",
  },
  {
    question: "Erlauben Sie mir, _ Ihnen zu helfen.",
    options: [
      { text: "dass ich", value: "a" },
      { text: "-", value: "b" },
      { text: "damit ich", value: "c" },
      { text: "ohne dass ich", value: "d" },
    ],
    correctAnswer: "b",
  },

  // 9. Infinitivsatz yerine "dass Satz" (Durum c) (4 soru)
  {
    question: "Es ist möglich, _ das Problem zu lösen.",
    options: [
      { text: "dass man", value: "a" },
      { text: "-", value: "b" },
      { text: "damit man", value: "c" },
      { text: "ohne dass man", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "Es ist wichtig, _ pünktlich zu sein.",
    options: [
      { text: "-", value: "a" },
      { text: "dass man", value: "b" },
      { text: "damit man", value: "c" },
      { text: "ohne dass man", value: "d" },
    ],
    correctAnswer: "a",
  },
  {
    question: "Es ist schwierig, _ die richtige Entscheidung zu treffen.",
    options: [
      { text: "dass man", value: "a" },
      { text: "-", value: "b" },
      { text: "damit man", value: "c" },
      { text: "wenn man", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "Es ist notwendig, _ sich vorzubereiten.",
    options: [
      { text: "-", value: "a" },
      { text: "dass man", value: "b" },
      { text: "damit man", value: "c" },
      { text: "ohne dass man", value: "d" },
    ],
    correctAnswer: "a",
  },

  // 10. "dass" yerine "wenn" kullanımı (4 soru)
  {
    question: "Ich wünschte, ich _ mehr Zeit hätte.",
    options: [
      { text: "dass", value: "a" },
      { text: "wenn", value: "b" },
      { text: "weil", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "Er wünscht sich, _ er reicher wäre.",
    options: [
      { text: "dass", value: "a" },
      { text: "wenn", value: "b" },
      { text: "weil", value: "c" },
      { text: "obwohl", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "Sie träumt davon, _ sie berühmt werden könnte.",
    options: [
      { text: "dass", value: "a" },
      { text: "wenn", value: "b" },
      { text: "weil", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "a",
  },
  {
    question: "Wenn es doch nur anders _!",
    options: [
      { text: "ist", value: "a" },
      { text: "war", value: "b" },
      { text: "wäre", value: "c" },
      { text: "sein", value: "d" },
    ],
    correctAnswer: "c",
  },

  // 11. "Indirekte Rede" yerine Infinitivsatz (4 soru)
  {
    question: "Der Angeklagte behauptet, _ unschuldig zu sein.",
    options: [
      { text: "dass er", value: "a" },
      { text: "-", value: "b" },
      { text: "damit er", value: "c" },
      { text: "ohne dass er", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "Sie gibt vor, _ krank zu sein.",
    options: [
      { text: "-", value: "a" },
      { text: "dass sie", value: "b" },
      { text: "damit sie", value: "c" },
      { text: "ohne dass sie", value: "d" },
    ],
    correctAnswer: "a",
  },
  {
    question: "Er versichert, _ die Wahrheit zu sagen.",
    options: [
      { text: "dass er", value: "a" },
      { text: "-", value: "b" },
      { text: "damit er", value: "c" },
      { text: "ohne dass er", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "Die Zeugin schwört, _ nichts gesehen zu haben.",
    options: [
      { text: "-", value: "a" },
      { text: "dass sie", value: "b" },
      { text: "damit sie", value: "c" },
      { text: "ohne dass sie", value: "d" },
    ],
    correctAnswer: "a",
  },

  // 12. Infinitivsatz'larda zaman uyumu (Aktiv) (4 soru)
  {
    question: "Er behauptet, das Buch _ zu haben.",
    options: [
      { text: "lesen", value: "a" },
      { text: "gelesen", value: "b" },
      { text: "zu lesen", value: "c" },
      { text: "lesend", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "Sie gibt vor, die Aufgabe _ zu haben.",
    options: [
      { text: "verstehen", value: "a" },
      { text: "verstanden", value: "b" },
      { text: "zu verstehen", value: "c" },
      { text: "verstehend", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "Der Student freut sich, die Prüfung _ zu haben.",
    options: [
      { text: "bestehen", value: "a" },
      { text: "bestanden", value: "b" },
      { text: "zu bestehen", value: "c" },
      { text: "bestehend", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "Er bedauert, den Fehler _ zu haben.",
    options: [
      { text: "machen", value: "a" },
      { text: "gemacht", value: "b" },
      { text: "zu machen", value: "c" },
      { text: "machend", value: "d" },
    ],
    correctAnswer: "b",
  },

  // 13. Vorzeitige Infinitivsätze im Aktiv (4 soru)
  {
    question: "Er erinnert sich daran, sie _ zu haben.",
    options: [
      { text: "treffen", value: "a" },
      { text: "getroffen", value: "b" },
      { text: "zu treffen", value: "c" },
      { text: "treffend", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "Sie bedauert, nicht früher _ zu haben.",
    options: [
      { text: "kommen", value: "a" },
      { text: "gekommen", value: "b" },
      { text: "zu kommen", value: "c" },
      { text: "kommend", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "Der Mann gibt zu, gelogen _ zu haben.",
    options: [
      { text: "haben", value: "a" },
      { text: "-", value: "b" },
      { text: "zu haben", value: "c" },
      { text: "habend", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "Sie ist stolz darauf, das Ziel _ zu haben.",
    options: [
      { text: "erreichen", value: "a" },
      { text: "erreicht", value: "b" },
      { text: "zu erreichen", value: "c" },
      { text: "erreichend", value: "d" },
    ],
    correctAnswer: "b",
  },

  // 14. Infinitivsatz'larda zaman uyumu (Passiv) (4 soru)
  {
    question: "Er behauptet, _ worden zu sein.",
    options: [
      { text: "betrogen", value: "a" },
      { text: "betrügen", value: "b" },
      { text: "zu betrügen", value: "c" },
      { text: "betrügend", value: "d" },
    ],
    correctAnswer: "a",
  },
  {
    question: "Sie gibt vor, nicht _ worden zu sein.",
    options: [
      { text: "informieren", value: "a" },
      { text: "informiert", value: "b" },
      { text: "zu informieren", value: "c" },
      { text: "informierend", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "Der Mitarbeiter behauptet, _ zu werden.",
    options: [
      { text: "befördert", value: "a" },
      { text: "befördern", value: "b" },
      { text: "zu befördern", value: "c" },
      { text: "befördernd", value: "d" },
    ],
    correctAnswer: "a",
  },
  {
    question: "Sie hofft, bald _ zu werden.",
    options: [
      { text: "heilen", value: "a" },
      { text: "geheilt", value: "b" },
      { text: "zu heilen", value: "c" },
      { text: "heilend", value: "d" },
    ],
    correctAnswer: "b",
  },

  // 15. Vorzeitige Infinitivsätze im Passiv (4 soru)
  {
    question: "Er bedauert, nicht _ worden zu sein.",
    options: [
      { text: "einladen", value: "a" },
      { text: "eingeladen", value: "b" },
      { text: "zu einladen", value: "c" },
      { text: "einladend", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "Sie ist froh, _ worden zu sein.",
    options: [
      { text: "auswählen", value: "a" },
      { text: "ausgewählt", value: "b" },
      { text: "zu auswählen", value: "c" },
      { text: "auswählend", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "Der Patient behauptet, falsch _ worden zu sein.",
    options: [
      { text: "behandeln", value: "a" },
      { text: "behandelt", value: "b" },
      { text: "zu behandeln", value: "c" },
      { text: "behandelnd", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "Er gibt zu, _ worden zu sein.",
    options: [
      { text: "überraschen", value: "a" },
      { text: "überrascht", value: "b" },
      { text: "zu überraschen", value: "c" },
      { text: "überraschend", value: "d" },
    ],
    correctAnswer: "b",
  },

  // 16. "dass Satz" ve Infinitivsatz birlikte kullanımı (4 soru)
  {
    question: "Ich weiß, dass er kommt, und freue mich, ihn _ zu sehen.",
    options: [
      { text: "wieder", value: "a" },
      { text: "noch", value: "b" },
      { text: "schon", value: "c" },
      { text: "endlich", value: "d" },
    ],
    correctAnswer: "a",
  },
  {
    question:
      "Er behauptet, dass er unschuldig ist, und bittet darum, _ zu werden.",
    options: [
      { text: "freigesprochen", value: "a" },
      { text: "freisprechen", value: "b" },
      { text: "zu freisprechen", value: "c" },
      { text: "freisprechend", value: "d" },
    ],
    correctAnswer: "a",
  },
  {
    question:
      "Sie weiß, dass die Aufgabe schwer ist, aber hofft, sie _ zu können.",
    options: [
      { text: "lösen", value: "a" },
      { text: "gelöst", value: "b" },
      { text: "zu lösen", value: "c" },
      { text: "lösend", value: "d" },
    ],
    correctAnswer: "a",
  },
  {
    question:
      "Obwohl er weiß, dass es gefährlich ist, beschließt er _ zu gehen.",
    options: [
      { text: "trotzdem", value: "a" },
      { text: "dennoch", value: "b" },
      { text: "doch", value: "c" },
      { text: "alle sind richtig", value: "d" },
    ],
    correctAnswer: "d",
  },

  // 17. Yancümle işaretçisi olarak "es" (4 soru)
  {
    question: "_ ist wichtig, dass du pünktlich kommst.",
    options: [
      { text: "Es", value: "a" },
      { text: "Das", value: "b" },
      { text: "Dies", value: "c" },
      { text: "Er", value: "d" },
    ],
    correctAnswer: "a",
  },
  {
    question: "_ freut mich, dass Sie gekommen sind.",
    options: [
      { text: "Das", value: "a" },
      { text: "Es", value: "b" },
      { text: "Dies", value: "c" },
      { text: "Sie", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "_ ärgert mich, zu spät zu kommen.",
    options: [
      { text: "Das", value: "a" },
      { text: "Dies", value: "b" },
      { text: "Es", value: "c" },
      { text: "Er", value: "d" },
    ],
    correctAnswer: "c",
  },
  {
    question: "_ tut mir leid, dass ich Sie gestört habe.",
    options: [
      { text: "Es", value: "a" },
      { text: "Das", value: "b" },
      { text: "Dies", value: "c" },
      { text: "Sie", value: "d" },
    ],
    correctAnswer: "a",
  },

  // 18. Tek bir özne, nesne veya sıfat yerine geçen "es" (4 soru)
  {
    question: "Wo ist mein Buch? - Ich habe _ auf den Tisch gelegt.",
    options: [
      { text: "es", value: "a" },
      { text: "das", value: "b" },
      { text: "dies", value: "c" },
      { text: "er", value: "d" },
    ],
    correctAnswer: "a",
  },
  {
    question:
      "Das Problem ist kompliziert. - Ja, _ ist wirklich schwer zu lösen.",
    options: [
      { text: "das", value: "a" },
      { text: "es", value: "b" },
      { text: "dies", value: "c" },
      { text: "er", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "Ist das Auto teuer? - Nein, _ ist sehr günstig.",
    options: [
      { text: "das", value: "a" },
      { text: "dies", value: "b" },
      { text: "es", value: "c" },
      { text: "er", value: "d" },
    ],
    correctAnswer: "c",
  },
  {
    question: "Kennst du diesen Mann? - Ja, ich kenne _ gut.",
    options: [
      { text: "es", value: "a" },
      { text: "ihn", value: "b" },
      { text: "das", value: "c" },
      { text: "dies", value: "d" },
    ],
    correctAnswer: "b",
  },

  // 19. Özne veya nesnenin yerini tutan zamir olarak "Es" (4 soru)
  {
    question: "Das Wetter ist heute schön. _ gefällt mir sehr.",
    options: [
      { text: "Es", value: "a" },
      { text: "Das", value: "b" },
      { text: "Dies", value: "c" },
      { text: "Er", value: "d" },
    ],
    correctAnswer: "a",
  },
  {
    question:
      "Hast du das Geschenk bekommen? - Ja, ich habe _ gestern erhalten.",
    options: [
      { text: "es", value: "a" },
      { text: "das", value: "b" },
      { text: "dies", value: "c" },
      { text: "sie", value: "d" },
    ],
    correctAnswer: "a",
  },
  {
    question: "Das Kind spielt im Garten. _ ist sehr glücklich.",
    options: [
      { text: "Es", value: "a" },
      { text: "Das", value: "b" },
      { text: "Er", value: "c" },
      { text: "Sie", value: "d" },
    ],
    correctAnswer: "a",
  },
  {
    question: "Wo ist mein Handy? - _ liegt auf dem Sofa.",
    options: [
      { text: "Es", value: "a" },
      { text: "Das", value: "b" },
      { text: "Dies", value: "c" },
      { text: "Er", value: "d" },
    ],
    correctAnswer: "a",
  },

  // 20. "sein/werden" fiilleriyle birlikte kullanılan "es" (4 soru)
  {
    question: "Wer ist das? - _ ist mein Bruder.",
    options: [
      { text: "Es", value: "a" },
      { text: "Das", value: "b" },
      { text: "Er", value: "c" },
      { text: "Dies", value: "d" },
    ],
    correctAnswer: "a",
  },
  {
    question: "Sind Sie müde? - Ja, ich bin _ sehr.",
    options: [
      { text: "es", value: "a" },
      { text: "das", value: "b" },
      { text: "dies", value: "c" },
      { text: "sie", value: "d" },
    ],
    correctAnswer: "a",
  },
  {
    question: "Das Zimmer wird sauber. _ wird jeden Tag gereinigt.",
    options: [
      { text: "Es", value: "a" },
      { text: "Das", value: "b" },
      { text: "Dies", value: "c" },
      { text: "Sie", value: "d" },
    ],
    correctAnswer: "a",
  },
  {
    question: "Bist du glücklich? - Ja, ich bin _ wirklich.",
    options: [
      { text: "es", value: "a" },
      { text: "das", value: "b" },
      { text: "dies", value: "c" },
      { text: "so", value: "d" },
    ],
    correctAnswer: "a",
  },

  // 21. Yancümlenin tamamının yerini tutan "es" (4 soru)
  {
    question: "Ich finde _ schade, dass du nicht kommst.",
    options: [
      { text: "es", value: "a" },
      { text: "das", value: "b" },
      { text: "dies", value: "c" },
      { text: "sie", value: "d" },
    ],
    correctAnswer: "a",
  },
  {
    question: "_ macht mich traurig, allein zu sein.",
    options: [
      { text: "Es", value: "a" },
      { text: "Das", value: "b" },
      { text: "Dies", value: "c" },
      { text: "Sie", value: "d" },
    ],
    correctAnswer: "a",
  },
  {
    question: "Ich halte _ für richtig, ehrlich zu sein.",
    options: [
      { text: "es", value: "a" },
      { text: "das", value: "b" },
      { text: "dies", value: "c" },
      { text: "sie", value: "d" },
    ],
    correctAnswer: "a",
  },
  {
    question: "_ freut mich zu hören, dass Sie gesund sind.",
    options: [
      { text: "Es", value: "a" },
      { text: "Das", value: "b" },
      { text: "Dies", value: "c" },
      { text: "Sie", value: "d" },
    ],
    correctAnswer: "a",
  },

  // 22. "Subjektloses Passiv" cümlelerde "dolgu öznesi" "es" (4 soru)
  {
    question: "_ wird hier nicht geraucht.",
    options: [
      { text: "Es", value: "a" },
      { text: "Das", value: "b" },
      { text: "Man", value: "c" },
      { text: "Sie", value: "d" },
    ],
    correctAnswer: "a",
  },
  {
    question: "_ wurde gestern lange getanzt.",
    options: [
      { text: "Es", value: "a" },
      { text: "Das", value: "b" },
      { text: "Man", value: "c" },
      { text: "Sie", value: "d" },
    ],
    correctAnswer: "a",
  },
  {
    question: "Hier _ nicht gespielt.",
    options: [
      { text: "es wird", value: "a" },
      { text: "wird", value: "b" },
      { text: "man spielt", value: "c" },
      { text: "wird es", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "_ wird über Politik diskutiert.",
    options: [
      { text: "Es", value: "a" },
      { text: "Das", value: "b" },
      { text: "Man", value: "c" },
      { text: "Hier", value: "d" },
    ],
    correctAnswer: "a",
  },

  // 23. Aktiv cümlelerde "sözde özne" olarak "es" (4 soru)
  {
    question: "_ kommen viele Touristen nach Berlin.",
    options: [
      { text: "Es", value: "a" },
      { text: "Das", value: "b" },
      { text: "Sie", value: "c" },
      { text: "Dort", value: "d" },
    ],
    correctAnswer: "a",
  },
  {
    question: "_ leben drei Millionen Menschen in dieser Stadt.",
    options: [
      { text: "Es", value: "a" },
      { text: "Das", value: "b" },
      { text: "Dort", value: "c" },
      { text: "Hier", value: "d" },
    ],
    correctAnswer: "a",
  },
  {
    question: "Heute _ viele Leute im Park spazieren.",
    options: [
      { text: "es gehen", value: "a" },
      { text: "gehen", value: "b" },
      { text: "sie gehen", value: "c" },
      { text: "man geht", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "_ arbeiten über 1000 Mitarbeiter in dieser Firma.",
    options: [
      { text: "Es", value: "a" },
      { text: "Das", value: "b" },
      { text: "Dort", value: "c" },
      { text: "Sie", value: "d" },
    ],
    correctAnswer: "a",
  },

  // 24. Pseudo-subjekt (sözde özne) kavramı (4 soru)
  {
    question: "_ gibt viele Probleme in der Welt.",
    options: [
      { text: "Es", value: "a" },
      { text: "Das", value: "b" },
      { text: "Man", value: "c" },
      { text: "Sie", value: "d" },
    ],
    correctAnswer: "a",
  },
  {
    question: "_ existieren verschiedene Meinungen zu diesem Thema.",
    options: [
      { text: "Es", value: "a" },
      { text: "Das", value: "b" },
      { text: "Dort", value: "c" },
      { text: "Sie", value: "d" },
    ],
    correctAnswer: "a",
  },
  {
    question: "In diesem Restaurant _ jeden Abend Live-Musik gespielt.",
    options: [
      { text: "es wird", value: "a" },
      { text: "wird", value: "b" },
      { text: "man spielt", value: "c" },
      { text: "sie spielen", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "_ entstehen täglich neue Technologien.",
    options: [
      { text: "Es", value: "a" },
      { text: "Das", value: "b" },
      { text: "Dort", value: "c" },
      { text: "Sie", value: "d" },
    ],
    correctAnswer: "a",
  },

  // 25. "Es"in düşme kuralları (4 soru)
  {
    question: "Morgen _ geregnet.",
    options: [
      { text: "es wird", value: "a" },
      { text: "wird es", value: "b" },
      { text: "wird", value: "c" },
      { text: "es regnet", value: "d" },
    ],
    correctAnswer: "c",
  },
  {
    question: "Gestern _ viel getanzt.",
    options: [
      { text: "es wurde", value: "a" },
      { text: "wurde", value: "b" },
      { text: "wurde es", value: "c" },
      { text: "man tanzte", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "In diesem Park _ oft spazieren gegangen.",
    options: [
      { text: "es wird", value: "a" },
      { text: "wird", value: "b" },
      { text: "man geht", value: "c" },
      { text: "wird es", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "Abends _ hier immer sehr laut gefeiert.",
    options: [
      { text: "es wird", value: "a" },
      { text: "wird", value: "b" },
      { text: "man feiert", value: "c" },
      { text: "wird es", value: "d" },
    ],
    correctAnswer: "b",
  },

  // Sıfatların anlamını kuvvetlendirme/zayıflatma amacı (10 questions)
  {
    question: "Er hat sich in dieser schwierigen Situation ___ klug verhalten.",
    options: [
      { text: "ausreichend", value: "a" },
      { text: "unglaublich", value: "b" },
      { text: "maßvoll", value: "c" },
      { text: "bemerkenswert", value: "d" },
    ],
    correctAnswer: "b", // unglaublich
  },
  {
    question: "Die Aussicht von diesem Berg ist ___ beeindruckend.",
    options: [
      { text: "kaum", value: "a" },
      { text: "einigermaßen", value: "b" },
      { text: "ziemlich", value: "c" },
      { text: "schwer", value: "d" },
    ],
    correctAnswer: "c", // ziemlich
  },
  {
    question: "Sein Verhalten war ___ unhöflich, dass alle schockiert waren.",
    options: [
      { text: "zu", value: "a" },
      { text: "wenig", value: "b" },
      { text: "fast", value: "c" },
      { text: "so", value: "d" },
    ],
    correctAnswer: "d", // so
  },
  {
    question: "Die Präsentation war ___ gelungen, aber es fehlte an Details.",
    options: [
      { text: "völlig", value: "a" },
      { text: "äußerst", value: "b" },
      { text: "durchaus", value: "c" },
      { text: "höchst", value: "d" },
    ],
    correctAnswer: "c", // durchaus
  },
  {
    question:
      "Das Buch ist ___ spannend, dass man es nicht aus der Hand legen kann.",
    options: [
      { text: "weniger", value: "a" },
      { text: "derart", value: "b" },
      { text: "kaum", value: "c" },
      { text: "eher", value: "d" },
    ],
    correctAnswer: "b", // derart
  },
  {
    question: "Ihre Antwort war ___ präzise, dass keine Fragen offenblieben.",
    options: [
      { text: "zu", value: "a" },
      { text: "so", value: "b" },
      { text: "fast", value: "c" },
      { text: "wenig", value: "d" },
    ],
    correctAnswer: "b", // so
  },
  {
    question: "Der Film war ___ langweilig, dass viele Zuschauer gingen.",
    options: [
      { text: "ausreichend", value: "a" },
      { text: "maßvoll", value: "b" },
      { text: "besonders", value: "c" },
      { text: "derart", value: "d" },
    ],
    correctAnswer: "d", // derart
  },
  {
    question: "Er ist ___ talentiert, dass er mehrere Instrumente spielt.",
    options: [
      { text: "kaum", value: "a" },
      { text: "weniger", value: "b" },
      { text: "äußerst", value: "c" },
      { text: "selten", value: "d" },
    ],
    correctAnswer: "c", // äußerst
  },
  {
    question: "Die Aufgabe war ___ schwierig, aber sie hat sie gelöst.",
    options: [
      { text: "völlig", value: "a" },
      { text: "maßlos", value: "b" },
      { text: "einigermaßen", value: "c" },
      { text: "schnell", value: "d" },
    ],
    correctAnswer: "c", // einigermaßen
  },
  {
    question: "Sein Vortrag war ___ überzeugend, dass alle applaudierten.",
    options: [
      { text: "kaum", value: "a" },
      { text: "wenig", value: "b" },
      { text: "eher", value: "c" },
      { text: "höchst", value: "d" },
    ],
    correctAnswer: "d", // höchst
  },

  // Modale Adverbien grubuna dahil zarflar (10 questions)
  {
    question: "Er hat die Aufgabe ___ gelöst, ohne die Anweisungen zu lesen.",
    options: [
      { text: "absichtlich", value: "a" },
      { text: "vorsätzlich", value: "b" },
      { text: "schnell", value: "c" },
      { text: "zufällig", value: "d" },
    ],
    correctAnswer: "d", // zufällig
  },
  {
    question: "Sie hat sich ___ gegen die neuen Regeln ausgesprochen.",
    options: [
      { text: "offenbar", value: "a" },
      { text: "versehentlich", value: "b" },
      { text: "bewusst", value: "c" },
      { text: "ständig", value: "d" },
    ],
    correctAnswer: "c", // bewusst
  },
  {
    question:
      "Die Entscheidung wurde ___ getroffen, ohne die Konsequenzen zu bedenken.",
    options: [
      { text: "vorsätzlich", value: "a" },
      { text: "wahrscheinlich", value: "b" },
      { text: "selten", value: "c" },
      { text: "unabsichtlich", value: "d" },
    ],
    correctAnswer: "d", // unabsichtlich
  },
  {
    question: "Er hat ___ die falsche Tür geöffnet und den Alarm ausgelöst.",
    options: [
      { text: "absichtlich", value: "a" },
      { text: "offenbar", value: "b" },
      { text: "gelegentlich", value: "c" },
      { text: "versehentlich", value: "d" },
    ],
    correctAnswer: "d", // versehentlich
  },
  {
    question: "Sie hat ___ zugestimmt, obwohl sie anderer Meinung war.",
    options: [
      { text: "zweifellos", value: "a" },
      { text: "gern", value: "b" },
      { text: "wissentlich", value: "c" },
      { text: "kaum", value: "d" },
    ],
    correctAnswer: "c", // wissentlich
  },
  {
    question: "Die Nachricht wurde ___ falsch verstanden.",
    options: [
      { text: "absichtlich", value: "a" },
      { text: "offenbar", value: "b" },
      { text: "unabsichtlich", value: "c" },
      { text: "ständig", value: "d" },
    ],
    correctAnswer: "c", // unabsichtlich
  },
  {
    question: "Er hat ___ die Wahrheit gesagt, obwohl es schwer napravi.",
    options: [
      { text: "zufällig", value: "a" },
      { text: "bewusst", value: "b" },
      { text: "versehentlich", value: "c" },
      { text: "selten", value: "d" },
    ],
    correctAnswer: "b", // bewusst
  },
  {
    question: "Sie hat ___ die falsche Antwort gegeben.",
    options: [
      { text: "vorsätzlich", value: "a" },
      { text: "wahrscheinlich", value: "b" },
      { text: "unabsichtlich", value: "c" },
      { text: "absichtlich", value: "d" },
    ],
    correctAnswer: "c", // unabsichtlich
  },
  {
    question: "Er hat sich ___ für die beste Lösung entschieden.",
    options: [
      { text: "offenbar", value: "a" },
      { text: "bewusst", value: "b" },
      { text: "zufällig", value: "c" },
      { text: "selten", value: "d" },
    ],
    correctAnswer: "b", // bewusst
  },
  {
    question: "Die Änderung wurde ___ vorgenommen.",
    options: [
      { text: "versehentlich", value: "a" },
      { text: "vorsätzlich", value: "b" },
      { text: "gelegentlich", value: "c" },
      { text: "kaum", value: "d" },
    ],
    correctAnswer: "b", // vorsätzlich
  },

  // Sıfat derecelendirmesinden (schön/schöner/am schönsten) farkı (10 questions)
  {
    question:
      "Im Gegensatz zur Steigerung von Adjektiven wie 'schnell, schneller, am schnellsten' wird ein Adverb wie 'schnell' ___.",
    options: [
      { text: "mit einem Deklinationselement versehen", value: "a" },
      { text: "immer gesteigert", value: "b" },
      { text: "nicht gesteigert", value: "c" },
      { text: "mit einem anderen Adverb kombiniert", value: "d" },
    ],
    correctAnswer: "c", // nicht gesteigert
  },
  {
    question:
      "Welche Aussage beschreibt den Unterschied zwischen der Adjektivsteigerung und der Verwendung von Adverbien zur Modifikation?",
    options: [
      { text: "Adverbien werden wie Adjektive gesteigert.", value: "a" },
      { text: "Adjektive können keine Adverbien modifizieren.", value: "b" },
      { text: "Adverbien haben immer eine Steigerungsform.", value: "c" },
      {
        text: "Adverbien verändern die Intensität eines Adjektivs, ohne selbst gesteigert zu werden.",
        value: "d",
      },
    ],
    correctAnswer: "d", // Adverbien verändern die Intensität eines Adjektivs, ohne selbst gesteigert zu werden.
  },
  {
    question: "Wie unterscheidet sich 'Er ist sehr klug' von 'Er ist klüger'?",
    options: [
      {
        text: "'Sehr klug' ist eine Komparativform, 'klüger' ist ein Adverb.",
        value: "a",
      },
      { text: "Beide Ausdrücke sind gleichwertig.", value: "b" },
      {
        text: "'Sehr klug' verwendet ein Adverb zur Intensivierung, 'klüger' ist eine Komparativform.",
        value: "c",
      },
      {
        text: "'Sehr klug' ist eine Steigerung, 'klüger' ist ein Adverb.",
        value: "d",
      },
    ],
    correctAnswer: "c", // 'Sehr klug' verwendet ein Adverb zur Intensivierung, 'klüger' ist eine Komparativform.
  },
  {
    question:
      "Warum wird das Adverb 'schnell' nicht zu 'schneller' gesteigert?",
    options: [
      { text: "Weil Adverbien immer deklinierbar sind.", value: "a" },
      { text: "Weil Adverbien keine Steigerungsformen haben.", value: "b" },
      {
        text: "Weil Adverbien nur mit anderen Adverbien kombiniert werden.",
        value: "c",
      },
      { text: "Weil Adverbien immer im Superlativ stehen.", value: "d" },
    ],
    correctAnswer: "b", // Weil Adverbien keine Steigerungsformen haben.
  },
  {
    question:
      "Welcher Satz zeigt eine Adverbmodifikation statt einer Adjektivsteigerung?",
    options: [
      { text: "Dieses Auto ist schneller als das andere.", value: "a" },
      { text: "Dieses Auto ist am schnellsten.", value: "b" },
      { text: "Dieses Auto ist schnellstes.", value: "c" },
      { text: "Dieses Auto ist äußerst schnell.", value: "d" },
    ],
    correctAnswer: "d", // Dieses Auto ist äußerst schnell.
  },
  {
    question: "Was ist der Unterschied zwischen 'schön' und 'sehr schön'?",
    options: [
      { text: "'Sehr schön' ist eine Komparativform.", value: "a" },
      {
        text: "'Sehr schön' verwendet ein Adverb zur Intensivierung.",
        value: "b",
      },
      { text: "'Schön' ist ein Adverb.", value: "c" },
      { text: "Beide sind Steigerungsformen.", value: "d" },
    ],
    correctAnswer: "b", // 'Sehr schön' verwendet ein Adverb zur Intensivierung.
  },
  {
    question: "Warum wird 'viel' in 'Er weiß viel' nicht gesteigert?",
    options: [
      { text: "Weil es ein Adverb ist.", value: "a" },
      { text: "Weil es ein Adjektiv ist.", value: "b" },
      { text: "Weil es deklinierbar ist.", value: "c" },
      { text: "Weil es eine Steigerungsform ist.", value: "d" },
    ],
    correctAnswer: "a", // Weil es ein Adverb ist.
  },
  {
    question: "Welcher Satz enthält keine Adjektivsteigerung?",
    options: [
      { text: "Sie ist schöner als ihre Schwester.", value: "a" },
      { text: "Sie ist sehr schön.", value: "b" },
      { text: "Sie ist am schönsten.", value: "c" },
      { text: "Sie ist die schönste.", value: "d" },
    ],
    correctAnswer: "b", // Sie ist sehr schön.
  },
  {
    question:
      "Was ist korrekt über Adverbien wie 'schnell' im Vergleich zu Adjektiven?",
    options: [
      { text: "Adverbien werden wie Adjektive gesteigert.", value: "a" },
      { text: "Adverbien nehmen Deklinationen an.", value: "b" },
      {
        text: "Adverbien haben keine Komparativ- oder Superlativformen.",
        value: "c",
      },
      {
        text: "Adverbien können nicht mit Adjektiven kombiniert werden.",
        value: "d",
      },
    ],
    correctAnswer: "c", // Adverbien haben keine Komparativ- oder Superlativformen.
  },
  {
    question: "Welcher Satz zeigt eine Adverbmodifikation?",
    options: [
      { text: "Er ist größer als sein Bruder.", value: "a" },
      { text: "Er ist sehr groß.", value: "b" },
      { text: "Er ist am größten.", value: "c" },
      { text: "Er ist der größte.", value: "d" },
    ],
    correctAnswer: "b", // Er ist sehr groß.
  },

  // Her sıfatın önüne her zarf gelmez - anlama göre uygun zarf seçimi (10 questions)
  {
    question:
      "Welches Adverb passt semantisch am besten zu 'verantwortungsbewusst' in diesem Satz: 'Sie handelt ___ verantwortungsbewusst.'?",
    options: [
      { text: "selten", value: "a" },
      { text: "leicht", value: "b" },
      { text: "äußerst", value: "c" },
      { text: "langsam", value: "d" },
    ],
    correctAnswer: "c", // äußerst
  },
  {
    question: "Welches Adverb passt nicht zu dem Adjektiv 'traurig'?",
    options: [
      { text: "tief", value: "a" },
      { text: "maßlos", value: "b" },
      { text: "äußerst", value: "c" },
      { text: "überaus", value: "d" },
    ],
    correctAnswer: "d", // überaus
  },
  {
    question:
      "Welches Adverb ist für das Adjektiv 'kompliziert' am passendsten?",
    options: [
      { text: "selbstverständlich", value: "a" },
      { text: "ständig", value: "b" },
      { text: "besonders", value: "c" },
      { text: "ziemlich", value: "d" },
    ],
    correctAnswer: "d", // ziemlich
  },
  {
    question: "Welches Adverb passt semantisch nicht zu 'freundlich'?",
    options: [
      { text: "sehr", value: "a" },
      { text: "außerordentlich", value: "b" },
      { text: "kaum", value: "c" },
      { text: "äußerst", value: "d" },
    ],
    correctAnswer: "c", // kaum
  },
  {
    question: "Welches Adverb ist für 'intelligent' am besten geeignet?",
    options: [
      { text: "langsam", value: "a" },
      { text: "oft", value: "b" },
      { text: "bemerkenswert", value: "c" },
      { text: "schwer", value: "d" },
    ],
    correctAnswer: "c", // bemerkenswert
  },
  {
    question:
      "Welches Adverb passt zu 'gefährlich' in diesem Satz: 'Die Situation ist ___ gefährlich.'?",
    options: [
      { text: "äußerst", value: "a" },
      { text: "selten", value: "b" },
      { text: "langsam", value: "c" },
      { text: "ständig", value: "d" },
    ],
    correctAnswer: "a", // äußerst
  },
  {
    question: "Welches Adverb passt nicht zu 'interessant'?",
    options: [
      { text: "sehr", value: "a" },
      { text: "äußerst", value: "b" },
      { text: "wenig", value: "c" },
      { text: "außerordentlich", value: "d" },
    ],
    correctAnswer: "c", // wenig
  },
  {
    question: "Welches Adverb ist für 'einfach' am passendsten?",
    options: [
      { text: "maßlos", value: "a" },
      { text: "einigermaßen", value: "b" },
      { text: "ständig", value: "c" },
      { text: "selten", value: "d" },
    ],
    correctAnswer: "b", // einigermaßen
  },
  {
    question: "Welches Adverb passt semantisch zu 'überraschend'?",
    options: [
      { text: "kaum", value: "a" },
      { text: "äußerst", value: "b" },
      { text: "langsam", value: "c" },
      { text: "oft", value: "d" },
    ],
    correctAnswer: "b", // äußerst
  },
  {
    question: "Welches Adverb passt nicht zu 'klar'?",
    options: [
      { text: "völlig", value: "a" },
      { text: "eher", value: "b" },
      { text: "durchaus", value: "c" },
      { text: "höchst", value: "d" },
    ],
    correctAnswer: "b", // eher
  },

  // Zarfa Deklination yapılmaz - çekim eki almaz (10 questions)
  {
    question:
      "Warum ist dieser Satz falsch: 'Sie hat sehr schnellen gelaufen.'?",
    options: [
      { text: "Weil Adverbien immer gesteigert werden müssen.", value: "a" },
      { text: "Weil Adverbien keine Deklination haben.", value: "b" },
      {
        text: "Weil Adverbien nur mit Adjektiven verwendet werden.",
        value: "c",
      },
      { text: "Weil das Verb falsch konjugiert ist.", value: "d" },
    ],
    correctAnswer: "b", // Weil Adverbien keine Deklination haben.
  },
  {
    question: "Welcher Satz ist grammatikalisch korrekt?",
    options: [
      { text: "Er spricht sehr klaren.", value: "a" },
      { text: "Er spricht sehr klares.", value: "b" },
      { text: "Er spricht sehr klarer.", value: "c" },
      { text: "Er spricht sehr klar.", value: "d" },
    ],
    correctAnswer: "d", // Er spricht sehr klar.
  },
  {
    question: "Warum ist 'schnelle' in 'Sie läuft schnelle.' falsch?",
    options: [
      { text: "Weil Adverbien immer im Singular stehen.", value: "a" },
      {
        text: "Weil Adverbien nicht mit Verben kombiniert werden.",
        value: "b",
      },
      { text: "Weil Adverbien keine Deklination haben.", value: "c" },
      { text: "Weil das Adverb gesteigert werden muss.", value: "d" },
    ],
    correctAnswer: "c", // Weil Adverbien keine Deklination haben.
  },
  {
    question:
      "Welches Adverb ist korrekt in diesem Satz: 'Er hat ___ geantwortet.'?",
    options: [
      { text: "schnellen", value: "a" },
      { text: "schneller", value: "b" },
      { text: "schnelles", value: "c" },
      { text: "schnell", value: "d" },
    ],
    correctAnswer: "d", // schnell
  },
  {
    question:
      "Warum ist dieser Satz falsch: 'Sie hat sehr höfliches gesprochen.'?",
    options: [
      {
        text: "Weil Adverbien nur mit Adjektiven verwendet werden.",
        value: "a",
      },
      { text: "Weil das Verb falsch konjugiert ist.", value: "b" },
      { text: "Weil Adverbien keine Deklination haben.", value: "c" },
      { text: "Weil das Adverb gesteigert werden muss.", value: "d" },
    ],
    correctAnswer: "c", // Weil Adverbien keine Deklination haben.
  },
  {
    question: "Welcher Satz ist korrekt?",
    options: [
      { text: "Sie singt sehr schönes.", value: "a" },
      { text: "Sie singt sehr schön.", value: "b" },
      { text: "Sie singt sehr schöner.", value: "c" },
      { text: "Sie singt sehr schönen.", value: "d" },
    ],
    correctAnswer: "b", // Sie singt sehr schön.
  },
  {
    question: "Warum ist 'langsame' in 'Er arbeitet langsame.' falsch?",
    options: [
      { text: "Weil Adverbien keine Deklination haben.", value: "a" },
      { text: "Weil Adverbien gesteigert werden müssen.", value: "b" },
      {
        text: "Weil Adverbien nicht mit Verben kombiniert werden.",
        value: "c",
      },
      { text: "Weil das Verb falsch ist.", value: "d" },
    ],
    correctAnswer: "a", // Weil Adverbien keine Deklination haben.
  },
  {
    question:
      "Welches Adverb ist korrekt in diesem Satz: 'Sie hat ___ geschrieben.'?",
    options: [
      { text: "sorgfältig", value: "a" },
      { text: "sorgfältigen", value: "b" },
      { text: "sorgfältiger", value: "c" },
      { text: "sorgfältiges", value: "d" },
    ],
    correctAnswer: "a", // sorgfältig
  },
  {
    question: "Warum ist dieser Satz falsch: 'Er hat sehr genaues erklärt.'?",
    options: [
      { text: "Weil das Verb falsch konjugiert ist.", value: "a" },
      { text: "Weil Adverbien keine Deklination haben.", value: "b" },
      { text: "Weil Adverbien gesteigert werden müssen.", value: "c" },
      {
        text: "Weil Adverbien nur mit Adjektiven verwendet werden.",
        value: "d",
      },
    ],
    correctAnswer: "b", // Weil Adverbien keine Deklination haben.
  },
  {
    question: "Welcher Satz ist grammatikalisch korrekt?",
    options: [
      { text: "Er läuft sehr schnelles.", value: "a" },
      { text: "Er läuft sehr schneller.", value: "b" },
      { text: "Er läuft sehr schnell.", value: "c" },
      { text: "Er läuft sehr schnellen.", value: "d" },
    ],
    correctAnswer: "c", // Er läuft sehr schnell.
  },

  // Art und Weise: genauso
  {
    question: "Er hat die Aufgabe ___ gelöst wie sein Kollege.",
    options: [
      { text: "irgendwie", value: "a" },
      { text: "gern", value: "b" },
      { text: "genauso", value: "c" },
      { text: "vergebens", value: "d" },
    ],
    correctAnswer: "c", // genauso
  },
  {
    question: "Ihr Kleid sieht ___ aus wie das der Schauspielerin.",
    options: [
      { text: "vergebens", value: "a" },
      { text: "genauso", value: "b" },
      { text: "irgendwie", value: "c" },
      { text: "gern", value: "d" },
    ],
    correctAnswer: "b", // genauso
  },
  {
    question: "Er spricht ___ fließend Deutsch wie ein Muttersprachler.",
    options: [
      { text: "gern", value: "a" },
      { text: "irgendwie", value: "b" },
      { text: "vergebens", value: "c" },
      { text: "genauso", value: "d" },
    ],
    correctAnswer: "d", // genauso
  },
  {
    question: "Die beiden Autos sind ___ schnell.",
    options: [
      { text: "genauso", value: "a" },
      { text: "irgendwie", value: "b" },
      { text: "gern", value: "c" },
      { text: "vergebens", value: "d" },
    ],
    correctAnswer: "a", // genauso
  },
  {
    question: "Sie hat die Frage ___ beantwortet wie erwartet.",
    options: [
      { text: "vergebens", value: "a" },
      { text: "irgendwie", value: "b" },
      { text: "genauso", value: "c" },
      { text: "gern", value: "d" },
    ],
    correctAnswer: "c", // genauso
  },

  // Art und Weise: irgendwie
  {
    question: "Wir müssen ___ eine Lösung finden.",
    options: [
      { text: "genauso", value: "a" },
      { text: "irgendwie", value: "b" },
      { text: "gern", value: "c" },
      { text: "vergebens", value: "d" },
    ],
    correctAnswer: "b", // irgendwie
  },
  {
    question:
      "Er hat ___ das Problem erklärt, aber ich verstehe es immer noch nicht.",
    options: [
      { text: "gern", value: "a" },
      { text: "vergebens", value: "b" },
      { text: "irgendwie", value: "c" },
      { text: "genauso", value: "d" },
    ],
    correctAnswer: "c", // irgendwie
  },
  {
    question: "Die Situation ist ___ kompliziert geworden.",
    options: [
      { text: "vergebens", value: "a" },
      { text: "irgendwie", value: "b" },
      { text: "gern", value: "c" },
      { text: "genauso", value: "d" },
    ],
    correctAnswer: "b", // irgendwie
  },
  {
    question: "Sie hat ___ geschafft, die Prüfung zu bestehen.",
    options: [
      { text: "irgendwie", value: "a" },
      { text: "genauso", value: "b" },
      { text: "vergebens", value: "c" },
      { text: "gern", value: "d" },
    ],
    correctAnswer: "a", // irgendwie
  },
  {
    question: "Er hat ___ einen Weg gefunden, die Tür zu öffnen.",
    options: [
      { text: "gern", value: "a" },
      { text: "irgendwie", value: "b" },
      { text: "genauso", value: "c" },
      { text: "vergebens", value: "d" },
    ],
    correctAnswer: "b", // irgendwie
  },

  // Art und Weise: gern
  {
    question: "Ich gehe ___ ins Kino, wenn ich Zeit habe.",
    options: [
      { text: "irgendwie", value: "a" },
      { text: "genauso", value: "b" },
      { text: "gern", value: "c" },
      { text: "vergebens", value: "d" },
    ],
    correctAnswer: "c", // gern
  },
  {
    question: "Er hilft anderen ___ mit seinen Fähigkeiten.",
    options: [
      { text: "vergebens", value: "a" },
      { text: "gern", value: "b" },
      { text: "irgendwie", value: "c" },
      { text: "genauso", value: "d" },
    ],
    correctAnswer: "b", // gern
  },
  {
    question: "Sie reist ___ in ferne Länder.",
    options: [
      { text: "gern", value: "a" },
      { text: "irgendwie", value: "b" },
      { text: "genauso", value: "c" },
      { text: "vergebens", value: "d" },
    ],
    correctAnswer: "a", // gern
  },
  {
    question: "Er lernt ___ neue Sprachen, weil es ihm Spaß macht.",
    options: [
      { text: "genauso", value: "a" },
      { text: "vergebens", value: "b" },
      { text: "gern", value: "c" },
      { text: "irgendwie", value: "d" },
    ],
    correctAnswer: "c", // gern
  },
  {
    question: "Wir essen ___ zusammen mit der Familie.",
    options: [
      { text: "irgendwie", value: "a" },
      { text: "gern", value: "b" },
      { text: "vergebens", value: "c" },
      { text: "genauso", value: "d" },
    ],
    correctAnswer: "b", // gern
  },

  // Art und Weise: vergebens
  {
    question: "Er hat ___ versucht, den Chef zu überzeugen.",
    options: [
      { text: "genauso", value: "a" },
      { text: "irgendwie", value: "b" },
      { text: "vergebens", value: "c" },
      { text: "gern", value: "d" },
    ],
    correctAnswer: "c", // vergebens
  },
  {
    question: "Sie hat ___ nach ihrem Schlüssel gesucht.",
    options: [
      { text: "vergebens", value: "a" },
      { text: "gern", value: "b" },
      { text: "irgendwie", value: "c" },
      { text: "genauso", value: "d" },
    ],
    correctAnswer: "a", // vergebens
  },
  {
    question: "Alle Bemühungen waren ___; das Projekt scheiterte.",
    options: [
      { text: "gern", value: "a" },
      { text: "genauso", value: "b" },
      { text: "vergebens", value: "c" },
      { text: "irgendwie", value: "d" },
    ],
    correctAnswer: "c", // vergebens
  },
  {
    question: "Er hat ___ auf eine Antwort gewartet.",
    options: [
      { text: "irgendwie", value: "a" },
      { text: "vergebens", value: "b" },
      { text: "gern", value: "c" },
      { text: "genauso", value: "d" },
    ],
    correctAnswer: "b", // vergebens
  },
  {
    question: "Sie hat ___ versucht, die Wahrheit herauszufinden.",
    options: [
      { text: "genauso", value: "a" },
      { text: "irgendwie", value: "b" },
      { text: "vergebens", value: "c" },
      { text: "gern", value: "d" },
    ],
    correctAnswer: "c", // vergebens
  },

  // Grad und Maß: äußerst
  {
    question: "Die Lage ist ___ gefährlich geworden.",
    options: [
      { text: "einigermaßen", value: "a" },
      { text: "äußerst", value: "b" },
      { text: "größtenteils", value: "c" },
      { text: "kaum", value: "d" },
    ],
    correctAnswer: "b", // äußerst
  },
  {
    question: "Sein Vortrag war ___ überzeugend.",
    options: [
      { text: "kaum", value: "a" },
      { text: "äußerst", value: "b" },
      { text: "einigermaßen", value: "c" },
      { text: "größtenteils", value: "d" },
    ],
    correctAnswer: "b", // äußerst
  },
  {
    question: "Sie ist ___ talentiert in ihrem Beruf.",
    options: [
      { text: "größtenteils", value: "a" },
      { text: "kaum", value: "b" },
      { text: "äußerst", value: "c" },
      { text: "einigermaßen", value: "d" },
    ],
    correctAnswer: "c", // äußerst
  },
  {
    question: "Das Konzert war ___ beeindruckend.",
    options: [
      { text: "äußerst", value: "a" },
      { text: "kaum", value: "b" },
      { text: "größtenteils", value: "c" },
      { text: "einigermaßen", value: "d" },
    ],
    correctAnswer: "a", // äußerst
  },
  {
    question: "Er war ___ freundlich zu allen Gästen.",
    options: [
      { text: "einigermaßen", value: "a" },
      { text: "äußerst", value: "b" },
      { text: "kaum", value: "c" },
      { text: "größtenteils", value: "d" },
    ],
    correctAnswer: "b", // äußerst
  },

  // Grad und Maß: einigermaßen
  {
    question: "Die Aufgabe war ___ schwierig, aber lösbar.",
    options: [
      { text: "äußerst", value: "a" },
      { text: "größtenteils", value: "b" },
      { text: "einigermaßen", value: "c" },
      { text: "kaum", value: "d" },
    ],
    correctAnswer: "c", // einigermaßen
  },
  {
    question: "Er hat sich ___ gut auf die Prüfung vorbereitet.",
    options: [
      { text: "kaum", value: "a" },
      { text: "einigermaßen", value: "b" },
      { text: "äußerst", value: "c" },
      { text: "größtenteils", value: "d" },
    ],
    correctAnswer: "b", // einigermaßen
  },
  {
    question: "Die Ergebnisse waren ___ zufriedenstellend.",
    options: [
      { text: "größtenteils", value: "a" },
      { text: "kaum", value: "b" },
      { text: "einigermaßen", value: "c" },
      { text: "äußerst", value: "d" },
    ],
    correctAnswer: "c", // einigermaßen
  },
  {
    question: "Das Wetter war ___ angenehm für einen Spaziergang.",
    options: [
      { text: "einigermaßen", value: "a" },
      { text: "äußerst", value: "b" },
      { text: "kaum", value: "c" },
      { text: "größtenteils", value: "d" },
    ],
    correctAnswer: "a", // einigermaßen
  },
  {
    question: "Seine Erklärung war ___ verständlich.",
    options: [
      { text: "kaum", value: "a" },
      { text: "einigermaßen", value: "b" },
      { text: "äußerst", value: "c" },
      { text: "größtenteils", value: "d" },
    ],
    correctAnswer: "b", // einigermaßen
  },

  // Grad und Maß: größtenteils
  {
    question: "Das Projekt war ___ erfolgreich.",
    options: [
      { text: "äußerst", value: "a" },
      { text: "kaum", value: "b" },
      { text: "größtenteils", value: "c" },
      { text: "einigermaßen", value: "d" },
    ],
    correctAnswer: "c", // größtenteils
  },
  {
    question: "Die Teilnehmer waren ___ zufrieden mit dem Ergebnis.",
    options: [
      { text: "kaum", value: "a" },
      { text: "größtenteils", value: "b" },
      { text: "äußerst", value: "c" },
      { text: "einigermaßen", value: "d" },
    ],
    correctAnswer: "b", // größtenteils
  },
  {
    question: "Das Buch ist ___ gut recherchiert.",
    options: [
      { text: "größtenteils", value: "a" },
      { text: "kaum", value: "b" },
      { text: "einigermaßen", value: "c" },
      { text: "äußerst", value: "d" },
    ],
    correctAnswer: "a", // größtenteils
  },
  {
    question: "Die Probleme sind ___ gelöst worden.",
    options: [
      { text: "einigermaßen", value: "a" },
      { text: "äußerst", value: "b" },
      { text: "größtenteils", value: "c" },
      { text: "kaum", value: "d" },
    ],
    correctAnswer: "c", // größtenteils
  },
  {
    question: "Seine Argumente waren ___ überzeugend.",
    options: [
      { text: "kaum", value: "a" },
      { text: "größtenteils", value: "b" },
      { text: "äußerst", value: "c" },
      { text: "einigermaßen", value: "d" },
    ],
    correctAnswer: "b", // größtenteils
  },

  // Grad und Maß: kaum
  {
    question: "Er ist ___ geeignet für diese Aufgabe.",
    options: [
      { text: "äußerst", value: "a" },
      { text: "einigermaßen", value: "b" },
      { text: "kaum", value: "c" },
      { text: "größtenteils", value: "d" },
    ],
    correctAnswer: "c", // kaum
  },
  {
    question: "Die Erklärung war ___ verständlich.",
    options: [
      { text: "kaum", value: "a" },
      { text: "äußerst", value: "b" },
      { text: "einigermaßen", value: "c" },
      { text: "größtenteils", value: "d" },
    ],
    correctAnswer: "a", // kaum
  },
  {
    question: "Sie hat ___ Zeit für ihre Hobbys.",
    options: [
      { text: "größtenteils", value: "a" },
      { text: "kaum", value: "b" },
      { text: "äußerst", value: "c" },
      { text: "einigermaßen", value: "d" },
    ],
    correctAnswer: "b", // kaum
  },
  {
    question: "Das Ergebnis war ___ zufriedenstellend.",
    options: [
      { text: "einigermaßen", value: "a" },
      { text: "äußerst", value: "b" },
      { text: "kaum", value: "c" },
      { text: "größtenteils", value: "d" },
    ],
    correctAnswer: "c", // kaum
  },
  {
    question: "Er hat ___ Interesse an der Diskussion gezeigt.",
    options: [
      { text: "kaum", value: "a" },
      { text: "größtenteils", value: "b" },
      { text: "äußerst", value: "c" },
      { text: "einigermaßen", value: "d" },
    ],
    correctAnswer: "a", // kaum
  },

  // Erweiterung: auch
  {
    question: "Er hat nicht nur Deutsch, sondern ___ Englisch gelernt.",
    options: [
      { text: "außerdem", value: "a" },
      { text: "ebenfalls", value: "b" },
      { text: "auch", value: "c" },
      { text: "sonst", value: "d" },
    ],
    correctAnswer: "c", // auch
  },
  {
    question: "Ich war gestern dort und werde heute ___ hingehen.",
    options: [
      { text: "sonst", value: "a" },
      { text: "auch", value: "b" },
      { text: "ebenfalls", value: "c" },
      { text: "außerdem", value: "d" },
    ],
    correctAnswer: "b", // auch
  },
  {
    question: "Sie ist Lehrerin und ___ Schriftstellerin.",
    options: [
      { text: "ebenfalls", value: "a" },
      { text: "sonst", value: "b" },
      { text: "auch", value: "c" },
      { text: "außerdem", value: "d" },
    ],
    correctAnswer: "c", // auch
  },
  {
    question: "Er hat die Aufgabe gelöst und ___ gute Noten bekommen.",
    options: [
      { text: "auch", value: "a" },
      { text: "ebenfalls", value: "b" },
      { text: "sonst", value: "c" },
      { text: "außerdem", value: "d" },
    ],
    correctAnswer: "a", // auch
  },
  {
    question: "Die Kinder waren laut und ___ ungeduldig.",
    options: [
      { text: "außerdem", value: "a" },
      { text: "auch", value: "b" },
      { text: "ebenfalls", value: "c" },
      { text: "sonst", value: "d" },
    ],
    correctAnswer: "b", // auch
  },

  // Erweiterung: außerdem
  {
    question: "Er hat viel gelernt und ___ einen Kurs besucht.",
    options: [
      { text: "auch", value: "a" },
      { text: "außerdem", value: "b" },
      { text: "ebenfalls", value: "c" },
      { text: "sonst", value: "d" },
    ],
    correctAnswer: "b", // außerdem
  },
  {
    question: "Sie ist sehr nett und ___ sehr hilfsbereit.",
    options: [
      { text: "sonst", value: "a" },
      { text: "ebenfalls", value: "b" },
      { text: "außerdem", value: "c" },
      { text: "auch", value: "d" },
    ],
    correctAnswer: "c", // außerdem
  },
  {
    question:
      "Wir haben das Projekt abgeschlossen und ___ eine Präsentation vorbereitet.",
    options: [
      { text: "ebenfalls", value: "a" },
      { text: "außerdem", value: "b" },
      { text: "auch", value: "c" },
      { text: "sonst", value: "d" },
    ],
    correctAnswer: "b", // außerdem
  },
  {
    question: "Er hat die Prüfung bestanden und ___ ein Zertifikat erhalten.",
    options: [
      { text: "außerdem", value: "a" },
      { text: "auch", value: "b" },
      { text: "ebenfalls", value: "c" },
      { text: "sonst", value: "d" },
    ],
    correctAnswer: "a", // außerdem
  },
  {
    question: "Sie hat das Buch gelesen und ___ eine Rezension geschrieben.",
    options: [
      { text: "sonst", value: "a" },
      { text: "außerdem", value: "b" },
      { text: "auch", value: "c" },
      { text: "ebenfalls", value: "d" },
    ],
    correctAnswer: "b", // außerdem
  },

  // Erweiterung: ebenfalls
  {
    question: "Er hat die Aufgabe erledigt und sie hat sie ___ erledigt.",
    options: [
      { text: "auch", value: "a" },
      { text: "außerdem", value: "b" },
      { text: "ebenfalls", value: "c" },
      { text: "sonst", value: "d" },
    ],
    correctAnswer: "c", // ebenfalls
  },
  {
    question: "Ich bin müde und er ist ___ müde.",
    options: [
      { text: "sonst", value: "a" },
      { text: "ebenfalls", value: "b" },
      { text: "auch", value: "c" },
      { text: "außerdem", value: "d" },
    ],
    correctAnswer: "b", // ebenfalls
  },
  {
    question: "Sie hat zugestimmt und er hat ___ zugestimmt.",
    options: [
      { text: "ebenfalls", value: "a" },
      { text: "auch", value: "b" },
      { text: "außerdem", value: "c" },
      { text: "sonst", value: "d" },
    ],
    correctAnswer: "a", // ebenfalls
  },
  {
    question:
      "Die erste Gruppe war erfolgreich und die zweite war ___ erfolgreich.",
    options: [
      { text: "außerdem", value: "a" },
      { text: "ebenfalls", value: "b" },
      { text: "auch", value: "c" },
      { text: "sonst", value: "d" },
    ],
    correctAnswer: "b", // ebenfalls
  },
  {
    question: "Er hat die Regeln befolgt und sie hat sie ___ befolgt.",
    options: [
      { text: "sonst", value: "a" },
      { text: "auch", value: "b" },
      { text: "ebenfalls", value: "c" },
      { text: "außerdem", value: "d" },
    ],
    correctAnswer: "c", // ebenfalls
  },

  // Erweiterung: sonst
  {
    question: "Beeil dich, ___ verpassen wir den Zug!",
    options: [
      { text: "auch", value: "a" },
      { text: "außerdem", value: "b" },
      { text: "ebenfalls", value: "c" },
      { text: "sonst", value: "d" },
    ],
    correctAnswer: "d", // sonst
  },
  {
    question: "Nimm einen Regenschirm, ___ wirst du nass!",
    options: [
      { text: "sonst", value: "a" },
      { text: "ebenfalls", value: "b" },
      { text: "auch", value: "c" },
      { text: "außerdem", value: "d" },
    ],
    correctAnswer: "a", // sonst
  },
  {
    question: "Lern jetzt, ___ wirst du die Prüfung nicht bestehen!",
    options: [
      { text: "außerdem", value: "a" },
      { text: "sonst", value: "b" },
      { text: "ebenfalls", value: "c" },
      { text: "auch", value: "d" },
    ],
    correctAnswer: "b", // sonst
  },
  {
    question: "Schließe die Tür, ___ kommt es kalt rein!",
    options: [
      { text: "ebenfalls", value: "a" },
      { text: "auch", value: "b" },
      { text: "sonst", value: "c" },
      { text: "außerdem", value: "d" },
    ],
    correctAnswer: "c", // sonst
  },
  {
    question: "Kauf die Tickets früh, ___ sind sie ausverkauft!",
    options: [
      { text: "sonst", value: "a" },
      { text: "außerdem", value: "b" },
      { text: "auch", value: "c" },
      { text: "ebenfalls", value: "d" },
    ],
    correctAnswer: "a", // sonst
  },

  // Einschränkung: doch
  {
    question: "Es ist schwierig, aber ich versuche es ___!",
    options: [
      { text: "allerdings", value: "a" },
      { text: "doch", value: "b" },
      { text: "jedoch", value: "c" },
      { text: "nur", value: "d" },
    ],
    correctAnswer: "b", // doch
  },
  {
    question: "Er war müde, hat aber ___ gearbeitet.",
    options: [
      { text: "nur", value: "a" },
      { text: "jedoch", value: "b" },
      { text: "doch", value: "c" },
      { text: "wenigstens", value: "d" },
    ],
    correctAnswer: "c", // doch
  },
  {
    question: "Das klingt kompliziert, aber es ist ___ machbar.",
    options: [
      { text: "wenigstens", value: "a" },
      { text: "doch", value: "b" },
      { text: "allerdings", value: "c" },
      { text: "nur", value: "d" },
    ],
    correctAnswer: "b", // doch
  },
  {
    question: "Er hat keinen Plan, versucht es aber ___.",
    options: [
      { text: "doch", value: "a" },
      { text: "jedoch", value: "b" },
      { text: "nur", value: "c" },
      { text: "allerdings", value: "d" },
    ],
    correctAnswer: "a", // doch
  },
  {
    question: "Die Aufgabe war schwer, aber sie hat sie ___ gelöst.",
    options: [
      { text: "allerdings", value: "a" },
      { text: "nur", value: "b" },
      { text: "doch", value: "c" },
      { text: "wenigstens", value: "d" },
    ],
    correctAnswer: "c", // doch
  },

  // Einschränkung: allerdings
  {
    question: "Er hat gewonnen, ___ nach großem Aufwand.",
    options: [
      { text: "doch", value: "a" },
      { text: "allerdings", value: "b" },
      { text: "nur", value: "c" },
      { text: "wenigstens", value: "d" },
    ],
    correctAnswer: "b", // allerdings
  },
  {
    question: "Das ist eine gute Idee, ___ sehr teuer.",
    options: [
      { text: "nur", value: "a" },
      { text: "jedoch", value: "b" },
      { text: "allerdings", value: "c" },
      { text: "doch", value: "d" },
    ],
    correctAnswer: "c", // allerdings
  },
  {
    question: "Sie ist nett, ___ manchmal etwas streng.",
    options: [
      { text: "wenigstens", value: "a" },
      { text: "allerdings", value: "b" },
      { text: "doch", value: "c" },
      { text: "nur", value: "d" },
    ],
    correctAnswer: "b", // allerdings
  },
  {
    question: "Das Projekt war erfolgreich, ___ mit Verzögerungen.",
    options: [
      { text: "allerdings", value: "a" },
      { text: "nur", value: "b" },
      { text: "jedoch", value: "c" },
      { text: "doch", value: "d" },
    ],
    correctAnswer: "a", // allerdings
  },
  {
    question: "Er hat es geschafft, ___ mit viel Mühe.",
    options: [
      { text: "doch", value: "a" },
      { text: "allerdings", value: "b" },
      { text: "nur", value: "c" },
      { text: "wenigstens", value: "d" },
    ],
    correctAnswer: "b", // allerdings
  },

  // Einschränkung: jedoch
  {
    question: "Er wollte helfen, es war ___ zu spät.",
    options: [
      { text: "doch", value: "a" },
      { text: "nur", value: "b" },
      { text: "jedoch", value: "c" },
      { text: "wenigstens", value: "d" },
    ],
    correctAnswer: "c", // jedoch
  },
  {
    question: "Die Idee war gut, ___ nicht praktikabel.",
    options: [
      { text: "wenigstens", value: "a" },
      { text: "jedoch", value: "b" },
      { text: "doch", value: "c" },
      { text: "allerdings", value: "d" },
    ],
    correctAnswer: "b", // jedoch
  },
  {
    question: "Sie hat hart gearbeitet, ___ ohne Erfolg.",
    options: [
      { text: "nur", value: "a" },
      { text: "jedoch", value: "b" },
      { text: "allerdings", value: "c" },
      { text: "doch", value: "d" },
    ],
    correctAnswer: "b", // jedoch
  },
  {
    question: "Er ist talentiert, ___ fehlt ihm die Erfahrung.",
    options: [
      { text: "jedoch", value: "a" },
      { text: "nur", value: "b" },
      { text: "doch", value: "c" },
      { text: "wenigstens", value: "d" },
    ],
    correctAnswer: "a", // jedoch
  },
  {
    question: "Das Konzert war toll, ___ war es zu laut.",
    options: [
      { text: "allerdings", value: "a" },
      { text: "doch", value: "b" },
      { text: "jedoch", value: "c" },
      { text: "nur", value: "d" },
    ],
    correctAnswer: "c", // jedoch
  },

  // Einschränkung: nur
  {
    question: "Er hat ___ ein Buch gelesen.",
    options: [
      { text: "doch", value: "a" },
      { text: "allerdings", value: "b" },
      { text: "nur", value: "c" },
      { text: "wenigstens", value: "d" },
    ],
    correctAnswer: "c", // nur
  },
  {
    question: "Sie kommt ___ am Wochenende.",
    options: [
      { text: "wenigstens", value: "a" },
      { text: "nur", value: "b" },
      { text: "doch", value: "c" },
      { text: "jedoch", value: "d" },
    ],
    correctAnswer: "b", // nur
  },
  {
    question: "Das kostet ___ zehn Euro.",
    options: [
      { text: "allerdings", value: "a" },
      { text: "nur", value: "b" },
      { text: "jedoch", value: "c" },
      { text: "doch", value: "d" },
    ],
    correctAnswer: "b", // nur
  },
  {
    question: "Er hat ___ eine Stunde gewartet.",
    options: [
      { text: "nur", value: "a" },
      { text: "doch", value: "b" },
      { text: "wenigstens", value: "c" },
      { text: "allerdings", value: "d" },
    ],
    correctAnswer: "a", // nur
  },
  {
    question: "Ich habe ___ wenig Zeit dafür.",
    options: [
      { text: "jedoch", value: "a" },
      { text: "nur", value: "b" },
      { text: "doch", value: "c" },
      { text: "allerdings", value: "d" },
    ],
    correctAnswer: "b", // nur
  },

  // Einschränkung: wenigstens
  {
    question: "Er hat ___ die Hälfte der Aufgaben gelöst.",
    options: [
      { text: "doch", value: "a" },
      { text: "allerdings", value: "b" },
      { text: "wenigstens", value: "c" },
      { text: "nur", value: "d" },
    ],
    correctAnswer: "c", // wenigstens
  },
  {
    question: "Komm ___ pünktlich, wenn schon nicht früh!",
    options: [
      { text: "nur", value: "a" },
      { text: "wenigstens", value: "b" },
      { text: "doch", value: "c" },
      { text: "jedoch", value: "d" },
    ],
    correctAnswer: "b", // wenigstens
  },
  {
    question: "Sie hat ___ einen Punkt bekommen.",
    options: [
      { text: "allerdings", value: "a" },
      { text: "wenigstens", value: "b" },
      { text: "jedoch", value: "c" },
      { text: "doch", value: "d" },
    ],
    correctAnswer: "b", // wenigstens
  },
  {
    question: "Er hat ___ versucht, uns zu helfen.",
    options: [
      { text: "wenigstens", value: "a" },
      { text: "nur", value: "b" },
      { text: "doch", value: "c" },
      { text: "allerdings", value: "d" },
    ],
    correctAnswer: "a", // wenigstens
  },
  {
    question: "Gib mir ___ eine Chance!",
    options: [
      { text: "jedoch", value: "a" },
      { text: "doch", value: "b" },
      { text: "wenigstens", value: "c" },
      { text: "nur", value: "d" },
    ],
    correctAnswer: "c", // wenigstens
  },

  // "gar" ve "überhaupt" ile olumsuz anlamı kuvvetlendirme
  {
    question: "Ich habe ___ keine Zeit für solche Sachen!",
    options: [
      { text: "überhaupt", value: "a" },
      { text: "irgendwie", value: "b" },
      { text: "genauso", value: "c" },
      { text: "gern", value: "d" },
    ],
    correctAnswer: "a", // überhaupt
  },
  {
    question: "Er hat ___ kein Interesse an dem Thema gezeigt.",
    options: [
      { text: "vergebens", value: "a" },
      { text: "gar", value: "b" },
      { text: "irgendwie", value: "c" },
      { text: "genauso", value: "d" },
    ],
    correctAnswer: "b", // gar
  },
  {
    question: "Das ist ___ nicht wahr!",
    options: [
      { text: "genauso", value: "a" },
      { text: "gern", value: "b" },
      { text: "überhaupt", value: "c" },
      { text: "vergebens", value: "d" },
    ],
    correctAnswer: "c", // überhaupt
  },
  {
    question: "Sie hat ___ keinen Grund, sich zu beschweren.",
    options: [
      { text: "gar", value: "a" },
      { text: "irgendwie", value: "b" },
      { text: "gern", value: "c" },
      { text: "genauso", value: "d" },
    ],
    correctAnswer: "a", // gar
  },
  {
    question: "Ich verstehe das ___ nicht!",
    options: [
      { text: "vergebens", value: "a" },
      { text: "genauso", value: "b" },
      { text: "überhaupt", value: "c" },
      { text: "gern", value: "d" },
    ],
    correctAnswer: "c", // überhaupt
  },

  // 1) Pronomen: "das", "dies", ve "es" zamirleri
  {
    question:
      "Er hat die Prüfung nicht bestanden. ___ war für ihn eine große Enttäuschung.",
    options: [
      { text: "Es", value: "a" },
      { text: "Dies", value: "b" },
      { text: "Das", value: "c" },
      { text: "So", value: "d" },
    ],
    correctAnswer: "c", // Das
  },
  {
    question:
      "Sie hat das Projekt erfolgreich abgeschlossen. ___ hat alle überrascht.",
    options: [
      { text: "Dies", value: "a" },
      { text: "Es", value: "b" },
      { text: "Das", value: "c" },
      { text: "Dann", value: "d" },
    ],
    correctAnswer: "c", // Das
  },
  {
    question: "___ ist wichtig: Wir müssen pünktlich ankommen.",
    options: [
      { text: "Das", value: "a" },
      { text: "Dies", value: "b" },
      { text: "Es", value: "c" },
      { text: "Da", value: "d" },
    ],
    correctAnswer: "c", // Es
  },
  {
    question: "Er hat viel gelernt. ___ hat ihm den Erfolg gebracht.",
    options: [
      { text: "Es", value: "a" },
      { text: "Dies", value: "b" },
      { text: "Da", value: "c" },
      { text: "Das", value: "d" },
    ],
    correctAnswer: "b", // Dies
  },
  {
    question: "___ ist meine Meinung: Wir sollten das Angebot annehmen.",
    options: [
      { text: "Dies", value: "a" },
      { text: "Das", value: "b" },
      { text: "Es", value: "c" },
      { text: "So", value: "d" },
    ],
    correctAnswer: "a", // Dies
  },

  // Virgülle ayrılmış yapılar
  {
    question: "Er war krank, ___ er nicht zur Arbeit gehen konnte.",
    options: [
      { text: "das", value: "a" },
      { text: "dann", value: "b" },
      { text: "deshalb", value: "c" },
      { text: "es", value: "d" },
    ],
    correctAnswer: "c", // deshalb
  },
  {
    question: "Sie hat keine Zeit, ___ sie die Einladung abgelehnt hat.",
    options: [
      { text: "dies", value: "a" },
      { text: "weshalb", value: "b" },
      { text: "das", value: "c" },
      { text: "so", value: "d" },
    ],
    correctAnswer: "b", // weshalb
  },
  {
    question: "Das Wetter war schlecht, ___ wir zu Hause blieben.",
    options: [
      { text: "es", value: "a" },
      { text: "deshalb", value: "b" },
      { text: "dies", value: "c" },
      { text: "da", value: "d" },
    ],
    correctAnswer: "b", // deshalb
  },
  {
    question: "Er hat hart gearbeitet, ___ er die Prüfung bestand.",
    options: [
      { text: "weshalb", value: "a" },
      { text: "das", value: "b" },
      { text: "so", value: "c" },
      { text: "es", value: "d" },
    ],
    correctAnswer: "a", // weshalb
  },
  {
    question: "Sie war müde, ___ sie früh ins Bett ging.",
    options: [
      { text: "dies", value: "a" },
      { text: "deshalb", value: "b" },
      { text: "das", value: "c" },
      { text: "dann", value: "d" },
    ],
    correctAnswer: "b", // deshalb
  },

  // Noktayla ayrılmış yapılar
  {
    question: "Er hat das Ziel erreicht. ___ freute ihn sehr.",
    options: [
      { text: "Es", value: "a" },
      { text: "Dies", value: "b" },
      { text: "Da", value: "c" },
      { text: "So", value: "d" },
    ],
    correctAnswer: "b", // Dies
  },
  {
    question:
      "Sie hat den Vertrag unterschrieben. ___ war ein wichtiger Schritt.",
    options: [
      { text: "Das", value: "a" },
      { text: "Es", value: "b" },
      { text: "Dies", value: "c" },
      { text: "Da", value: "d" },
    ],
    correctAnswer: "c", // Dies
  },
  {
    question: "Wir müssen uns beeilen. ___ ist entscheidend.",
    options: [
      { text: "Das", value: "a" },
      { text: "Dies", value: "b" },
      { text: "Es", value: "c" },
      { text: "So", value: "d" },
    ],
    correctAnswer: "c", // Es
  },
  {
    question: "Er hat das Buch gelesen. ___ hat ihm viel gebracht.",
    options: [
      { text: "Es", value: "a" },
      { text: "Das", value: "b" },
      { text: "Da", value: "c" },
      { text: "Dies", value: "d" },
    ],
    correctAnswer: "d", // Dies
  },
  {
    question:
      "Die Entscheidung war schwierig. ___ mussten wir trotzdem treffen.",
    options: [
      { text: "Das", value: "a" },
      { text: "Es", value: "b" },
      { text: "Dies", value: "c" },
      { text: "So", value: "d" },
    ],
    correctAnswer: "a", // Das
  },

  // 2) Adverbien: Yer ve zaman zarfları (hier, da, dort, solch ein, dann, so, damals)
  {
    question: "Er hat früher hier gewohnt, aber ___ lebt er in Berlin.",
    options: [
      { text: "dort", value: "a" },
      { text: "da", value: "b" },
      { text: "dann", value: "c" },
      { text: "so", value: "d" },
    ],
    correctAnswer: "c", // dann
  },
  {
    question: "___ war alles viel einfacher, als wir Kinder waren.",
    options: [
      { text: "Hier", value: "a" },
      { text: "Damals", value: "b" },
      { text: "Dort", value: "c" },
      { text: "So", value: "d" },
    ],
    correctAnswer: "b", // damals
  },
  {
    question: "Ich habe ___ ein Problem, das ich nicht lösen kann.",
    options: [
      { text: "dann", value: "a" },
      { text: "solch ein", value: "b" },
      { text: "da", value: "c" },
      { text: "dort", value: "d" },
    ],
    correctAnswer: "b", // solch ein
  },
  {
    question: "Er hat das Buch ___ gelesen und es danach weggelegt.",
    options: [
      { text: "hier", value: "a" },
      { text: "so", value: "b" },
      { text: "damals", value: "c" },
      { text: "da", value: "d" },
    ],
    correctAnswer: "b", // so
  },
  {
    question: "Das Geschäft ist ___ drüben, hinter dem Park.",
    options: [
      { text: "hier", value: "a" },
      { text: "da", value: "b" },
      { text: "dort", value: "c" },
      { text: "dann", value: "d" },
    ],
    correctAnswer: "c", // dort
  },

  // Sonuç bildiren zarflar (dementsprechend, demzufolge, infolgedessen, stattdessen)
  {
    question: "Er hat die Regeln nicht befolgt. ___ wurde er bestraft.",
    options: [
      { text: "Stattdessen", value: "a" },
      { text: "Dementsprechend", value: "b" },
      { text: "Infolgedessen", value: "c" },
      { text: "So", value: "d" },
    ],
    correctAnswer: "c", // infolgedessen
  },
  {
    question: "Die Nachfrage war hoch. ___ wurden die Preise erhöht.",
    options: [
      { text: "Demzufolge", value: "a" },
      { text: "Stattdessen", value: "b" },
      { text: "Dementsprechend", value: "c" },
      { text: "Da", value: "d" },
    ],
    correctAnswer: "a", // demzufolge
  },
  {
    question:
      "Er war nicht vorbereitet. ___ hat er die Prüfung nicht bestanden.",
    options: [
      { text: "Infolgedessen", value: "a" },
      { text: "Dementsprechend", value: "b" },
      { text: "Stattdessen", value: "c" },
      { text: "Dann", value: "d" },
    ],
    correctAnswer: "a", // infolgedessen
  },
  {
    question: "Das Auto war kaputt. ___ nahm er den Zug.",
    options: [
      { text: "Dementsprechend", value: "a" },
      { text: "Demzufolge", value: "b" },
      { text: "Stattdessen", value: "c" },
      { text: "So", value: "d" },
    ],
    correctAnswer: "c", // stattdessen
  },
  {
    question: "Die Regeln waren klar. ___ hat er sie genau befolgt.",
    options: [
      { text: "Stattdessen", value: "a" },
      { text: "Infolgedessen", value: "b" },
      { text: "Dementsprechend", value: "c" },
      { text: "Da", value: "d" },
    ],
    correctAnswer: "c", // dementsprechend
  },

  // 3) Pronominaladverbien: da(r)+Präposition
  {
    question: "Er hat lange gearbeitet. ___ ist er sehr müde.",
    options: [
      { text: "Darauf", value: "a" },
      { text: "Daran", value: "b" },
      { text: "Dafür", value: "c" },
      { text: "Damit", value: "d" },
    ],
    correctAnswer: "c", // Dafür
  },
  {
    question: "Das Problem ist komplex. ___ müssen wir uns Zeit nehmen.",
    options: [
      { text: "Daran", value: "a" },
      { text: "Darauf", value: "b" },
      { text: "Damit", value: "c" },
      { text: "Dafür", value: "d" },
    ],
    correctAnswer: "b", // Darauf
  },
  {
    question: "Er hat sich beschwert. ___ bin ich nicht verantwortlich.",
    options: [
      { text: "Dafür", value: "a" },
      { text: "Damit", value: "b" },
      { text: "Daran", value: "c" },
      { text: "Darauf", value: "d" },
    ],
    correctAnswer: "a", // Dafür
  },
  {
    question: "Die Lösung ist einfach. ___ sollten wir uns konzentrieren.",
    options: [
      { text: "Damit", value: "a" },
      { text: "Darauf", value: "b" },
      { text: "Dafür", value: "c" },
      { text: "Daran", value: "d" },
    ],
    correctAnswer: "b", // Darauf
  },
  {
    question: "Er hat das Ziel erreicht. ___ freuen wir uns sehr.",
    options: [
      { text: "Daran", value: "a" },
      { text: "Dafür", value: "b" },
      { text: "Darauf", value: "c" },
      { text: "Damit", value: "d" },
    ],
    correctAnswer: "c", // Darauf
  },

  // Pronominaladverbien: wo(r)+Präposition
  {
    question: "___ denkst du gerade?",
    options: [
      { text: "Woran", value: "a" },
      { text: "Wofür", value: "b" },
      { text: "Worauf", value: "c" },
      { text: "Womit", value: "d" },
    ],
    correctAnswer: "a", // Woran
  },
  {
    question: "___ wartest du so lange?",
    options: [
      { text: "Womit", value: "a" },
      { text: "Worauf", value: "b" },
      { text: "Woran", value: "c" },
      { text: "Wofür", value: "d" },
    ],
    correctAnswer: "b", // Worauf
  },
  {
    question: "___ bist du so stolz?",
    options: [
      { text: "Wofür", value: "a" },
      { text: "Woran", value: "b" },
      { text: "Worauf", value: "c" },
      { text: "Womit", value: "d" },
    ],
    correctAnswer: "c", // Worauf
  },
  {
    question: "___ arbeitest du gerade?",
    options: [
      { text: "Worauf", value: "a" },
      { text: "Womit", value: "b" },
      { text: "Woran", value: "c" },
      { text: "Wofür", value: "d" },
    ],
    correctAnswer: "c", // Woran
  },
  {
    question: "___ brauchst du das Geld?",
    options: [
      { text: "Woran", value: "a" },
      { text: "Wofür", value: "b" },
      { text: "Worauf", value: "c" },
      { text: "Womit", value: "d" },
    ],
    correctAnswer: "b", // Wofür
  },

  // Sabit prepozisyonlu fiillerle kullanım
  {
    question: "Er wartet ___ eine Antwort.",
    options: [
      { text: "darauf", value: "a" },
      { text: "daran", value: "b" },
      { text: "dafür", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "a", // darauf
  },
  {
    question: "Sie denkt oft ___ ihre Kindheit.",
    options: [
      { text: "dafür", value: "a" },
      { text: "daran", value: "b" },
      { text: "darauf", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "b", // daran
  },
  {
    question: "Worum geht es? Ich interessiere mich ___!",
    options: [
      { text: "darauf", value: "a" },
      { text: "dafür", value: "b" },
      { text: "daran", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "b", // dafür
  },
  {
    question: "Er freut sich ___ die neue Aufgabe.",
    options: [
      { text: "daran", value: "a" },
      { text: "damit", value: "b" },
      { text: "darauf", value: "c" },
      { text: "dafür", value: "d" },
    ],
    correctAnswer: "c", // darauf
  },
  {
    question: "Sie hat sich ___ entschieden, den Job anzunehmen.",
    options: [
      { text: "dafür", value: "a" },
      { text: "darauf", value: "b" },
      { text: "daran", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "a", // dafür
  },

  // Önceki/sonraki cümleye işaret etme
  {
    question: "Er hat das Buch nicht gelesen. ___ ist er nicht informiert.",
    options: [
      { text: "Daran", value: "a" },
      { text: "Dafür", value: "b" },
      { text: "Darauf", value: "c" },
      { text: "Das", value: "d" },
    ],
    correctAnswer: "b", // Dafür
  },
  {
    question: "___ ist mein Vorschlag: Wir sollten morgen anfangen.",
    options: [
      { text: "Das", value: "a" },
      { text: "Dies", value: "b" },
      { text: "Es", value: "c" },
      { text: "Dafür", value: "d" },
    ],
    correctAnswer: "c", // Es
  },
  {
    question: "Sie hat das Angebot abgelehnt. ___ war für uns überraschend.",
    options: [
      { text: "Daran", value: "a" },
      { text: "Das", value: "b" },
      { text: "Darauf", value: "c" },
      { text: "Dafür", value: "d" },
    ],
    correctAnswer: "b", // Das
  },
  {
    question: "Er hat hart gearbeitet. ___ hat er den Erfolg verdient.",
    options: [
      { text: "Dies", value: "a" },
      { text: "Dafür", value: "b" },
      { text: "Daran", value: "c" },
      { text: "Darauf", value: "d" },
    ],
    correctAnswer: "b", // Dafür
  },
  {
    question: "___ ist wichtig: Wir müssen die Regeln befolgen.",
    options: [
      { text: "Darauf", value: "a" },
      { text: "Das", value: "b" },
      { text: "Es", value: "c" },
      { text: "Dafür", value: "d" },
    ],
    correctAnswer: "c", // Es
  },

  // 4) Relativadverbien: was, wo, womit, wofür
  {
    question: "Das ist das Haus, ___ ich geboren wurde.",
    options: [
      { text: "was", value: "a" },
      { text: "wo", value: "b" },
      { text: "womit", value: "c" },
      { text: "wofür", value: "d" },
    ],
    correctAnswer: "b", // wo
  },
  {
    question: "Er hat ein Werkzeug, ___ er die Tür öffnet.",
    options: [
      { text: "wo", value: "a" },
      { text: "womit", value: "b" },
      { text: "was", value: "c" },
      { text: "wofür", value: "d" },
    ],
    correctAnswer: "b", // womit
  },
  {
    question: "Das ist der Grund, ___ er so hart arbeitet.",
    options: [
      { text: "womit", value: "a" },
      { text: "wo", value: "b" },
      { text: "wofür", value: "c" },
      { text: "was", value: "d" },
    ],
    correctAnswer: "c", // wofür
  },
  {
    question: "Das Buch, ___ ich gelesen habe, war spannend.",
    options: [
      { text: "was", value: "a" },
      { text: "wo", value: "b" },
      { text: "womit", value: "c" },
      { text: "wofür", value: "d" },
    ],
    correctAnswer: "a", // was
  },
  {
    question: "Das ist der Ort, ___ wir uns getroffen haben.",
    options: [
      { text: "wofür", value: "a" },
      { text: "womit", value: "b" },
      { text: "wo", value: "c" },
      { text: "was", value: "d" },
    ],
    correctAnswer: "c", // wo
  },

  // Relativadverbien: Önceki cümlenin tamamına işaret eden kullanım
  {
    question: "Er hat die Prüfung nicht bestanden, ___ ihn sehr enttäuschte.",
    options: [
      { text: "wo", value: "a" },
      { text: "was", value: "b" },
      { text: "womit", value: "c" },
      { text: "wofür", value: "d" },
    ],
    correctAnswer: "b", // was
  },
  {
    question: "Sie hat das Projekt abgeschlossen, ___ alle überraschte.",
    options: [
      { text: "womit", value: "a" },
      { text: "was", value: "b" },
      { text: "wo", value: "c" },
      { text: "wofür", value: "d" },
    ],
    correctAnswer: "b", // was
  },
  {
    question: "Er hat hart gearbeitet, ___ ihm den Erfolg brachte.",
    options: [
      { text: "was", value: "a" },
      { text: "wo", value: "b" },
      { text: "womit", value: "c" },
      { text: "wofür", value: "d" },
    ],
    correctAnswer: "a", // was
  },
  {
    question: "Das Team hat verloren, ___ niemand erwartet hatte.",
    options: [
      { text: "wofür", value: "a" },
      { text: "womit", value: "b" },
      { text: "wo", value: "c" },
      { text: "was", value: "d" },
    ],
    correctAnswer: "d", // was
  },
  {
    question: "Sie hat das Ziel erreicht, ___ sie sehr stolz machte.",
    options: [
      { text: "wo", value: "a" },
      { text: "was", value: "b" },
      { text: "womit", value: "c" },
      { text: "wofür", value: "d" },
    ],
    correctAnswer: "b", // was
  },

  // Graduierung der Adjektive: Art und Weise: genauso
  {
    question: "Er hat die Aufgabe ___ gelöst wie sein Kollege.",
    options: [
      { text: "irgendwie", value: "a" },
      { text: "gern", value: "b" },
      { text: "genauso", value: "c" },
      { text: "vergebens", value: "d" },
    ],
    correctAnswer: "c", // genauso
  },

  // Art und Weise: irgendwie
  {
    question: "Wir müssen ___ eine Lösung finden.",
    options: [
      { text: "genauso", value: "a" },
      { text: "irgendwie", value: "b" },
      { text: "gern", value: "c" },
      { text: "vergebens", value: "d" },
    ],
    correctAnswer: "b", // irgendwie
  },

  // Art und Weise: gern
  {
    question: "Ich gehe ___ ins Kino, wenn ich Zeit habe.",
    options: [
      { text: "irgendwie", value: "a" },
      { text: "genauso", value: "b" },
      { text: "gern", value: "c" },
      { text: "vergebens", value: "d" },
    ],
    correctAnswer: "c", // gern
  },

  // Art und Weise: vergebens
  {
    question: "Er hat ___ versucht, den Chef zu überzeugen.",
    options: [
      { text: "genauso", value: "a" },
      { text: "irgendwie", value: "b" },
      { text: "vergebens", value: "c" },
      { text: "gern", value: "d" },
    ],
    correctAnswer: "c", // vergebens
  },

  // Grad und Maß: äußerst
  {
    question: "Die Lage ist ___ gefährlich geworden.",
    options: [
      { text: "einigermaßen", value: "a" },
      { text: "äußerst", value: "b" },
      { text: "größtenteils", value: "c" },
      { text: "kaum", value: "d" },
    ],
    correctAnswer: "b", // äußerst
  },

  // Grad und Maß: einigermaßen
  {
    question: "Die Aufgabe war ___ schwierig, aber lösbar.",
    options: [
      { text: "äußerst", value: "a" },
      { text: "größtenteils", value: "b" },
      { text: "einigermaßen", value: "c" },
      { text: "kaum", value: "d" },
    ],
    correctAnswer: "c", // einigermaßen
  },

  // Grad und Maß: größtenteils
  {
    question: "Das Projekt war ___ erfolgreich.",
    options: [
      { text: "äußerst", value: "a" },
      { text: "kaum", value: "b" },
      { text: "größtenteils", value: "c" },
      { text: "einigermaßen", value: "d" },
    ],
    correctAnswer: "c", // größtenteils
  },

  // Grad und Maß: kaum
  {
    question: "Er ist ___ geeignet für diese Aufgabe.",
    options: [
      { text: "äußerst", value: "a" },
      { text: "einigermaßen", value: "b" },
      { text: "kaum", value: "c" },
      { text: "größtenteils", value: "d" },
    ],
    correctAnswer: "c", // kaum
  },

  // Erweiterung: auch
  {
    question: "Er hat nicht nur Deutsch, sondern ___ Englisch gelernt.",
    options: [
      { text: "außerdem", value: "a" },
      { text: "ebenfalls", value: "b" },
      { text: "auch", value: "c" },
      { text: "sonst", value: "d" },
    ],
    correctAnswer: "c", // auch
  },

  // Erweiterung: außerdem
  {
    question: "Er hat viel gelernt und ___ einen Kurs besucht.",
    options: [
      { text: "auch", value: "a" },
      { text: "außerdem", value: "b" },
      { text: "ebenfalls", value: "c" },
      { text: "sonst", value: "d" },
    ],
    correctAnswer: "b", // außerdem
  },

  // Erweiterung: ebenfalls
  {
    question: "Er hat die Aufgabe erledigt und sie hat sie ___ erledigt.",
    options: [
      { text: "auch", value: "a" },
      { text: "außerdem", value: "b" },
      { text: "ebenfalls", value: "c" },
      { text: "sonst", value: "d" },
    ],
    correctAnswer: "c", // ebenfalls
  },

  // Erweiterung: sonst
  {
    question: "Beeil dich, ___ verpassen wir den Zug!",
    options: [
      { text: "auch", value: "a" },
      { text: "außerdem", value: "b" },
      { text: "ebenfalls", value: "c" },
      { text: "sonst", value: "d" },
    ],
    correctAnswer: "d", // sonst
  },

  // Einschränkung: doch
  {
    question: "Es ist schwierig, aber ich versuche es ___!",
    options: [
      { text: "allerdings", value: "a" },
      { text: "doch", value: "b" },
      { text: "jedoch", value: "c" },
      { text: "nur", value: "d" },
    ],
    correctAnswer: "b", // doch
  },

  // Einschränkung: allerdings
  {
    question: "Er hat gewonnen, ___ nach großem Aufwand.",
    options: [
      { text: "doch", value: "a" },
      { text: "allerdings", value: "b" },
      { text: "nur", value: "c" },
      { text: "wenigstens", value: "d" },
    ],
    correctAnswer: "b", // allerdings
  },

  // Einschränkung: jedoch
  {
    question: "Er wollte helfen, es war ___ zu spät.",
    options: [
      { text: "doch", value: "a" },
      { text: "nur", value: "b" },
      { text: "jedoch", value: "c" },
      { text: "wenigstens", value: "d" },
    ],
    correctAnswer: "c", // jedoch
  },

  // Einschränkung: nur
  {
    question: "Er hat ___ ein Buch gelesen.",
    options: [
      { text: "doch", value: "a" },
      { text: "allerdings", value: "b" },
      { text: "nur", value: "c" },
      { text: "wenigstens", value: "d" },
    ],
    correctAnswer: "c", // nur
  },

  // Einschränkung: wenigstens
  {
    question: "Er hat ___ die Hälfte der Aufgaben gelöst.",
    options: [
      { text: "doch", value: "a" },
      { text: "allerdings", value: "b" },
      { text: "wenigstens", value: "c" },
      { text: "nur", value: "d" },
    ],
    correctAnswer: "c", // wenigstens
  },

  // "gar" ve "überhaupt" ile olumsuz anlamı kuvvetlendirme
  {
    question: "Ich habe ___ keine Zeit für solche Sachen!",
    options: [
      { text: "überhaupt", value: "a" },
      { text: "irgendwie", value: "b" },
      { text: "genauso", value: "c" },
      { text: "gern", value: "d" },
    ],
    correctAnswer: "a", // überhaupt
  },
  {
    question: "Er hat ___ kein Interesse an dem Thema gezeigt.",
    options: [
      { text: "vergebens", value: "a" },
      { text: "gar", value: "b" },
      { text: "irgendwie", value: "c" },
      { text: "genauso", value: "d" },
    ],
    correctAnswer: "b", // gar
  },

  // Zarfların Genel İşlevleri: Zaman, konum, yön, işin yapılma biçimi ve derecesini betimlemek
  {
    question:
      "Welches Adverb beschreibt die Zeit in diesem Satz: 'Wir treffen uns ___ um 18 Uhr.'?",
    options: [
      { text: "hier", value: "a" },
      { text: "schnell", value: "b" },
      { text: "morgen", value: "c" },
      { text: "irgendwie", value: "d" },
    ],
    correctAnswer: "c", // morgen
  },
  {
    question:
      "Welches Adverb beschreibt die Art und Weise in diesem Satz: 'Er arbeitet ___ und effizient.'?",
    options: [
      { text: "sorgfältig", value: "a" },
      { text: "dort", value: "b" },
      { text: "gestern", value: "c" },
      { text: "deshalb", value: "d" },
    ],
    correctAnswer: "a", // sorgfältig
  },
  {
    question:
      "Welches Adverb beschreibt den Ort in diesem Satz: 'Das Buch liegt ___ auf dem Tisch.'?",
    options: [
      { text: "heute", value: "a" },
      { text: "dort", value: "b" },
      { text: "schnell", value: "c" },
      { text: "irgendwie", value: "d" },
    ],
    correctAnswer: "b", // dort
  },
  {
    question:
      "Welches Adverb beschreibt die Richtung in diesem Satz: 'Er geht ___ ins Büro.'?",
    options: [
      { text: "gestern", value: "a" },
      { text: "leider", value: "b" },
      { text: "äußerst", value: "c" },
      { text: "hinein", value: "d" },
    ],
    correctAnswer: "d", // hinein
  },
  {
    question:
      "Welches Adverb beschreibt den Grad in diesem Satz: 'Die Aufgabe ist ___ schwierig.'?",
    options: [
      { text: "äußerst", value: "a" },
      { text: "hier", value: "b" },
      { text: "gestern", value: "c" },
      { text: "deshalb", value: "d" },
    ],
    correctAnswer: "a", // äußerst
  },

  // Gramer Açısından Cümle İçindeki Rolleri: 1. İsmin niteliğini anlatma
  {
    question:
      "Welches Adverb beschreibt das Nomen in diesem Satz: 'Das Haus ___ ist sehr alt.'?",
    options: [
      { text: "schnell", value: "a" },
      { text: "irgendwie", value: "b" },
      { text: "dort", value: "c" },
      { text: "deshalb", value: "d" },
    ],
    correctAnswer: "c", // dort
  },
  {
    question:
      "Welches Adverb passt in diesen Satz: 'Die Besprechung ___ war langwierig.'?",
    options: [
      { text: "sorgfältig", value: "a" },
      { text: "gestern", value: "b" },
      { text: "hier", value: "c" },
      { text: "äußerst", value: "d" },
    ],
    correctAnswer: "b", // gestern
  },
  {
    question: "Das Buch ___ ist sehr interessant.",
    options: [
      { text: "heute", value: "a" },
      { text: "schnell", value: "b" },
      { text: "deshalb", value: "c" },
      { text: "dort", value: "d" },
    ],
    correctAnswer: "d", // dort
  },
  {
    question: "Die Veranstaltung ___ war ein großer Erfolg.",
    options: [
      { text: "irgendwie", value: "a" },
      { text: "dort", value: "b" },
      { text: "gestern", value: "c" },
      { text: "leider", value: "d" },
    ],
    correctAnswer: "c", // gestern
  },
  {
    question: "Der Park ___ ist sehr schön.",
    options: [
      { text: "hier", value: "a" },
      { text: "schnell", value: "b" },
      { text: "deshalb", value: "c" },
      { text: "oft", value: "d" },
    ],
    correctAnswer: "a", // hier
  },

  // Gramer Açısından Cümle İçindeki Rolleri: 2. Sıfat/zarf niteliğini/derecesini anlatma
  {
    question:
      "Welches Adverb beschreibt die Intensität in diesem Satz: 'Er ist ___ klug.'?",
    options: [
      { text: "dort", value: "a" },
      { text: "gestern", value: "b" },
      { text: "äußerst", value: "c" },
      { text: "deshalb", value: "d" },
    ],
    correctAnswer: "c", // äußerst
  },
  {
    question: "Sie arbeitet ___ sorgfältig.",
    options: [
      { text: "gestern", value: "a" },
      { text: "hier", value: "b" },
      { text: "sehr", value: "c" },
      { text: "leider", value: "d" },
    ],
    correctAnswer: "c", // sehr
  },
  {
    question: "Das Konzert war ___ beeindruckend.",
    options: [
      { text: "dort", value: "a" },
      { text: "oft", value: "b" },
      { text: "einigermaßen", value: "c" },
      { text: "deshalb", value: "d" },
    ],
    correctAnswer: "c", // einigermaßen
  },
  {
    question: "Er spricht ___ fließend Deutsch.",
    options: [
      { text: "ziemlich", value: "a" },
      { text: "gestern", value: "b" },
      { text: "hier", value: "c" },
      { text: "deshalb", value: "d" },
    ],
    correctAnswer: "a", // ziemlich
  },
  {
    question: "Die Aufgabe war ___ schwierig.",
    options: [
      { text: "oft", value: "a" },
      { text: "kaum", value: "b" },
      { text: "dort", value: "c" },
      { text: "leider", value: "d" },
    ],
    correctAnswer: "b", // kaum
  },

  // Gramer Açısından Cümle İçindeki Rolleri: 3. "Edat + zamir" yerini tutma (Pronominaladverbien)
  {
    question: "Er hat sich ___ gefreut.",
    options: [
      { text: "schnell", value: "a" },
      { text: "darauf", value: "b" },
      { text: "gestern", value: "c" },
      { text: "äußerst", value: "d" },
    ],
    correctAnswer: "b", // darauf
  },
  {
    question: "Ich denke oft ___.",
    options: [
      { text: "hier", value: "a" },
      { text: "oft", value: "b" },
      { text: "daran", value: "c" },
      { text: "deshalb", value: "d" },
    ],
    correctAnswer: "c", // daran
  },
  {
    question: "Worum geht es? Ich interessiere mich ___!",
    options: [
      { text: "schnell", value: "a" },
      { text: "gestern", value: "b" },
      { text: "dafür", value: "c" },
      { text: "leider", value: "d" },
    ],
    correctAnswer: "c", // dafür
  },
  {
    question: "Er hat die Lösung gefunden. ___ bin ich froh.",
    options: [
      { text: "dort", value: "a" },
      { text: "oft", value: "b" },
      { text: "äußerst", value: "c" },
      { text: "darüber", value: "d" },
    ],
    correctAnswer: "d", // darüber
  },
  {
    question: "Wir arbeiten ___ an einem neuen Projekt.",
    options: [
      { text: "hier", value: "a" },
      { text: "daran", value: "b" },
      { text: "schnell", value: "c" },
      { text: "deshalb", value: "d" },
    ],
    correctAnswer: "b", // daran
  },

  // Pronominaladverbien Örnekleri: da/hier/wo + Präposition şekli
  {
    question: "Er wartet ___ eine Antwort.",
    options: [
      { text: "hier", value: "a" },
      { text: "schnell", value: "b" },
      { text: "darauf", value: "c" },
      { text: "gestern", value: "d" },
    ],
    correctAnswer: "c", // darauf
  },
  {
    question: "___ denkst du gerade?",
    options: [
      { text: "Dafür", value: "a" },
      { text: "Woran", value: "b" },
      { text: "Hier", value: "c" },
      { text: "Schnell", value: "d" },
    ],
    correctAnswer: "b", // woran
  },
  {
    question: "Das ist das Projekt, ___ wir arbeiten.",
    options: [
      { text: "worum", value: "a" },
      { text: "oft", value: "b" },
      { text: "daran", value: "c" },
      { text: "deshalb", value: "d" },
    ],
    correctAnswer: "c", // daran
  },
  {
    question: "___ bist du so stolz?",
    options: [
      { text: "Worum", value: "a" },
      { text: "Dort", value: "b" },
      { text: "Schnell", value: "c" },
      { text: "Worauf", value: "d" },
    ],
    correctAnswer: "d", // worauf
  },
  {
    question: "Er hat sich ___ entschieden, das Angebot anzunehmen.",
    options: [
      { text: "dafür", value: "a" },
      { text: "hier", value: "b" },
      { text: "gestern", value: "c" },
      { text: "schnell", value: "d" },
    ],
    correctAnswer: "a", // dafür
  },

  // 1) Lokaladverbien - Konum, yön bildirenler
  {
    question: "Das Buch liegt ___ auf dem Tisch.",
    options: [
      { text: "schnell", value: "a" },
      { text: "dort", value: "b" },
      { text: "gestern", value: "c" },
      { text: "deshalb", value: "d" },
    ],
    correctAnswer: "b", // dort
  },
  {
    question: "Er geht ___ ins Haus.",
    options: [
      { text: "oft", value: "a" },
      { text: "hinein", value: "b" },
      { text: "gestern", value: "c" },
      { text: "äußerst", value: "d" },
    ],
    correctAnswer: "b", // hinein
  },
  {
    question: "Wir treffen uns ___ im Park.",
    options: [
      { text: "deshalb", value: "a" },
      { text: "schnell", value: "b" },
      { text: "hier", value: "c" },
      { text: "heute", value: "d" },
    ],
    correctAnswer: "c", // hier
  },
  {
    question: "Das Geschäft ist ___ drüben.",
    options: [
      { text: "leider", value: "a" },
      { text: "gestern", value: "b" },
      { text: "schnell", value: "c" },
      { text: "dort", value: "d" },
    ],
    correctAnswer: "d", // dort
  },
  {
    question: "Komm bitte ___ herein!",
    options: [
      { text: "herauf", value: "a" },
      { text: "oft", value: "b" },
      { text: "gestern", value: "c" },
      { text: "deshalb", value: "d" },
    ],
    correctAnswer: "a", // herauf
  },

  // 2) Temporaladverbien - Zaman, süre, tekrarlanma sıklığı bildirenler
  {
    question: "Wir treffen uns ___ um 18 Uhr.",
    options: [
      { text: "schnell", value: "a" },
      { text: "heute", value: "b" },
      { text: "dort", value: "c" },
      { text: "deshalb", value: "d" },
    ],
    correctAnswer: "b", // heute
  },
  {
    question: "Er kommt ___ zurück.",
    options: [
      { text: "schnell", value: "a" },
      { text: "hier", value: "b" },
      { text: "morgen", value: "c" },
      { text: "leider", value: "d" },
    ],
    correctAnswer: "c", // morgen
  },
  {
    question: "Sie besucht uns ___ am Wochenende.",
    options: [
      { text: "dort", value: "a" },
      { text: "oft", value: "b" },
      { text: "deshalb", value: "c" },
      { text: "äußerst", value: "d" },
    ],
    correctAnswer: "b", // oft
  },
  {
    question: "___ war alles einfacher.",
    options: [
      { text: "hier", value: "a" },
      { text: "gestern", value: "b" },
      { text: "schnell", value: "c" },
      { text: "deshalb", value: "d" },
    ],
    correctAnswer: "b", // gestern
  },
  {
    question: "Er arbeitet ___ lange.",
    options: [
      { text: "immer", value: "a" },
      { text: "dort", value: "b" },
      { text: "leider", value: "c" },
      { text: "äußerst", value: "d" },
    ],
    correctAnswer: "a", // immer
  },

  // 3) Modaladverbien - İşin yapılma/oluş biçimi, derecesi bildirenler
  {
    question: "Er arbeitet ___ und effizient.",
    options: [
      { text: "dort", value: "a" },
      { text: "gestern", value: "b" },
      { text: "sorgfältig", value: "c" },
      { text: "deshalb", value: "d" },
    ],
    correctAnswer: "c", // sorgfältig
  },
  {
    question: "Sie spricht ___ fließend Deutsch.",
    options: [
      { text: "leider", value: "a" },
      { text: "sehr", value: "b" },
      { text: "gestern", value: "c" },
      { text: "hier", value: "d" },
    ],
    correctAnswer: "b", // sehr
  },
  {
    question: "Die Aufgabe war ___ schwierig.",
    options: [
      { text: "deshalb", value: "a" },
      { text: "oft", value: "b" },
      { text: "kaum", value: "c" },
      { text: "dort", value: "d" },
    ],
    correctAnswer: "c", // kaum
  },
  {
    question: "Er hat ___ eine Lösung gefunden.",
    options: [
      { text: "gestern", value: "a" },
      { text: "irgendwie", value: "b" },
      { text: "dort", value: "c" },
      { text: "leider", value: "d" },
    ],
    correctAnswer: "b", // irgendwie
  },
  {
    question: "Sie hat ___ versucht, das Ziel zu erreichen.",
    options: [
      { text: "hier", value: "a" },
      { text: "gestern", value: "b" },
      { text: "deshalb", value: "c" },
      { text: "vergebens", value: "d" },
    ],
    correctAnswer: "d", // vergebens
  },

  // 4) Kausaladverbien: also
  {
    question: "Er war müde, ___ ging er früh ins Bett.",
    options: [
      { text: "darum", value: "a" },
      { text: "nämlich", value: "b" },
      { text: "infolgedessen", value: "c" },
      { text: "also", value: "d" },
    ],
    correctAnswer: "d", // also
  },
  {
    question: "Die Prüfung war schwer, ___ hat er viel gelernt.",
    options: [
      { text: "also", value: "a" },
      { text: "deswegen", value: "b" },
      { text: "somit", value: "c" },
      { text: "darum", value: "d" },
    ],
    correctAnswer: "a", // also
  },
  {
    question: "Wir haben keine Zeit, ___ müssen wir uns beeilen.",
    options: [
      { text: "infolgedessen", value: "a" },
      { text: "darum", value: "b" },
      { text: "also", value: "c" },
      { text: "nämlich", value: "d" },
    ],
    correctAnswer: "c", // also
  },
  {
    question: "Er hat das Ziel verfehlt, ___ war er enttäuscht.",
    options: [
      { text: "deswegen", value: "a" },
      { text: "also", value: "b" },
      { text: "somit", value: "c" },
      { text: "darum", value: "d" },
    ],
    correctAnswer: "b", // also
  },
  {
    question: "Die Regeln waren klar, ___ hat er sie befolgt.",
    options: [
      { text: "infolgedessen", value: "a" },
      { text: "deswegen", value: "b" },
      { text: "nämlich", value: "c" },
      { text: "also", value: "d" },
    ],
    correctAnswer: "d", // also
  },

  // Kausaladverbien: daher
  {
    question:
      "Er war nicht vorbereitet, ___ hat er die Prüfung nicht bestanden.",
    options: [
      { text: "nämlich", value: "a" },
      { text: "daher", value: "b" },
      { text: "also", value: "c" },
      { text: "infolgedessen", value: "d" },
    ],
    correctAnswer: "b", // daher
  },
  {
    question: "Die Nachfrage war hoch, ___ wurden die Preise erhöht.",
    options: [
      { text: "somit", value: "a" },
      { text: "darum", value: "b" },
      { text: "daher", value: "c" },
      { text: "deswegen", value: "d" },
    ],
    correctAnswer: "c", // daher
  },
  {
    question: "Er hatte keine Zeit, ___ blieb er zu Hause.",
    options: [
      { text: "infolgedessen", value: "a" },
      { text: "also", value: "b" },
      { text: "nämlich", value: "c" },
      { text: "daher", value: "d" },
    ],
    correctAnswer: "d", // daher
  },
  {
    question: "Das Wetter war schlecht, ___ wurde die Veranstaltung abgesagt.",
    options: [
      { text: "daher", value: "a" },
      { text: "somit", value: "b" },
      { text: "darum", value: "c" },
      { text: "deswegen", value: "d" },
    ],
    correctAnswer: "a", // daher
  },
  {
    question: "Sie war krank, ___ konnte sie nicht kommen.",
    options: [
      { text: "also", value: "a" },
      { text: "infolgedessen", value: "b" },
      { text: "daher", value: "c" },
      { text: "nämlich", value: "d" },
    ],
    correctAnswer: "c", // daher
  },

  // Kausaladverbien: darum
  {
    question: "Er war müde, ___ ging er früh schlafen.",
    options: [
      { text: "nämlich", value: "a" },
      { text: "darum", value: "b" },
      { text: "also", value: "c" },
      { text: "infolgedessen", value: "d" },
    ],
    correctAnswer: "b", // darum
  },
  {
    question: "Die Aufgabe war schwer, ___ hat er länger gebraucht.",
    options: [
      { text: "darum", value: "a" },
      { text: "somit", value: "b" },
      { text: "daher", value: "c" },
      { text: "deswegen", value: "d" },
    ],
    correctAnswer: "a", // darum
  },
  {
    question: "Wir hatten keine Zeit, ___ mussten wir uns beeilen.",
    options: [
      { text: "infolgedessen", value: "a" },
      { text: "also", value: "b" },
      { text: "darum", value: "c" },
      { text: "nämlich", value: "d" },
    ],
    correctAnswer: "c", // darum
  },
  {
    question: "Er hat die Regeln nicht befolgt, ___ wurde er bestraft.",
    options: [
      { text: "somit", value: "a" },
      { text: "darum", value: "b" },
      { text: "daher", value: "c" },
      { text: "deswegen", value: "d" },
    ],
    correctAnswer: "b", // darum
  },
  {
    question: "Die Tür war verschlossen, ___ konnte er nicht eintreten.",
    options: [
      { text: "also", value: "a" },
      { text: "nämlich", value: "b" },
      { text: "infolgedessen", value: "c" },
      { text: "darum", value: "d" },
    ],
    correctAnswer: "d", // darum
  },

  // Kausaladverbien: demnach
  {
    question: "Die Daten sind klar, ___ ist eine Änderung notwendig.",
    options: [
      { text: "nämlich", value: "a" },
      { text: "demnach", value: "b" },
      { text: "also", value: "c" },
      { text: "infolgedessen", value: "d" },
    ],
    correctAnswer: "b", // demnach
  },
  {
    question: "Er hat die Analyse gelesen, ___ hat er seine Meinung geändert.",
    options: [
      { text: "somit", value: "a" },
      { text: "demnach", value: "b" },
      { text: "darum", value: "c" },
      { text: "deswegen", value: "d" },
    ],
    correctAnswer: "b", // demnach
  },
  {
    question:
      "Die Ergebnisse waren eindeutig, ___ wurde die Entscheidung getroffen.",
    options: [
      { text: "infolgedessen", value: "a" },
      { text: "nämlich", value: "b" },
      { text: "demnach", value: "c" },
      { text: "also", value: "d" },
    ],
    correctAnswer: "c", // demnach
  },
  {
    question: "Die Regeln sind streng, ___ müssen wir sie einhalten.",
    options: [
      { text: "demnach", value: "a" },
      { text: "somit", value: "b" },
      { text: "daher", value: "c" },
      { text: "deswegen", value: "d" },
    ],
    correctAnswer: "a", // demnach
  },
  {
    question: "Die Fakten sprechen für sich, ___ ist er schuldig.",
    options: [
      { text: "also", value: "a" },
      { text: "infolgedessen", value: "b" },
      { text: "nämlich", value: "c" },
      { text: "demnach", value: "d" },
    ],
    correctAnswer: "d", // demnach
  },

  // Kausaladverbien: deshalb
  {
    question: "Er war krank, ___ blieb er zu Hause.",
    options: [
      { text: "nämlich", value: "a" },
      { text: "deshalb", value: "b" },
      { text: "also", value: "c" },
      { text: "infolgedessen", value: "d" },
    ],
    correctAnswer: "b", // deshalb
  },
  {
    question: "Die Prüfung war schwer, ___ hat er viel gelernt.",
    options: [
      { text: "somit", value: "a" },
      { text: "darum", value: "b" },
      { text: "deshalb", value: "c" },
      { text: "daher", value: "d" },
    ],
    correctAnswer: "c", // deshalb
  },
  {
    question: "Wir hatten keine Zeit, ___ mussten wir uns beeilen.",
    options: [
      { text: "infolgedessen", value: "a" },
      { text: "nämlich", value: "b" },
      { text: "also", value: "c" },
      { text: "deshalb", value: "d" },
    ],
    correctAnswer: "d", // deshalb
  },
  {
    question: "Er hat die Regeln nicht befolgt, ___ wurde er bestraft.",
    options: [
      { text: "deshalb", value: "a" },
      { text: "somit", value: "b" },
      { text: "daher", value: "c" },
      { text: "darum", value: "d" },
    ],
    correctAnswer: "a", // deshalb
  },
  {
    question: "Das Wetter war schlecht, ___ wurde die Veranstaltung abgesagt.",
    options: [
      { text: "also", value: "a" },
      { text: "infolgedessen", value: "b" },
      { text: "deshalb", value: "c" },
      { text: "nämlich", value: "d" },
    ],
    correctAnswer: "c", // deshalb
  },

  // Kausaladverbien: deswegen
  {
    question:
      "Er war nicht vorbereitet, ___ hat er die Prüfung nicht bestanden.",
    options: [
      { text: "nämlich", value: "a" },
      { text: "deswegen", value: "b" },
      { text: "also", value: "c" },
      { text: "infolgedessen", value: "d" },
    ],
    correctAnswer: "b", // deswegen
  },
  {
    question: "Die Nachfrage war hoch, ___ wurden die Preise erhöht.",
    options: [
      { text: "somit", value: "a" },
      { text: "darum", value: "b" },
      { text: "deswegen", value: "c" },
      { text: "daher", value: "d" },
    ],
    correctAnswer: "c", // deswegen
  },
  {
    question: "Er hatte keine Zeit, ___ blieb er zu Hause.",
    options: [
      { text: "infolgedessen", value: "a" },
      { text: "also", value: "b" },
      { text: "nämlich", value: "c" },
      { text: "deswegen", value: "d" },
    ],
    correctAnswer: "d", // deswegen
  },
  {
    question: "Das Wetter war schlecht, ___ wurde die Veranstaltung abgesagt.",
    options: [
      { text: "deswegen", value: "a" },
      { text: "somit", value: "b" },
      { text: "darum", value: "c" },
      { text: "daher", value: "d" },
    ],
    correctAnswer: "a", // deswegen
  },
  {
    question: "Sie war krank, ___ konnte sie nicht kommen.",
    options: [
      { text: "also", value: "a" },
      { text: "infolgedessen", value: "b" },
      { text: "deswegen", value: "c" },
      { text: "nämlich", value: "d" },
    ],
    correctAnswer: "c", // deswegen
  },

  // Kausaladverbien: infolgedessen
  {
    question: "Er hat die Regeln nicht befolgt, ___ wurde er bestraft.",
    options: [
      { text: "nämlich", value: "a" },
      { text: "infolgedessen", value: "b" },
      { text: "also", value: "c" },
      { text: "darum", value: "d" },
    ],
    correctAnswer: "b", // infolgedessen
  },
  {
    question: "Die Nachfrage war hoch, ___ wurden die Preise erhöht.",
    options: [
      { text: "somit", value: "a" },
      { text: "darum", value: "b" },
      { text: "infolgedessen", value: "c" },
      { text: "daher", value: "d" },
    ],
    correctAnswer: "c", // infolgedessen
  },
  {
    question:
      "Er war nicht vorbereitet, ___ hat er die Prüfung nicht bestanden.",
    options: [
      { text: "infolgedessen", value: "a" },
      { text: "nämlich", value: "b" },
      { text: "also", value: "c" },
      { text: "deswegen", value: "d" },
    ],
    correctAnswer: "a", // infolgedessen
  },
  {
    question: "Das Wetter war schlecht, ___ wurde die Veranstaltung abgesagt.",
    options: [
      { text: "somit", value: "a" },
      { text: "infolgedessen", value: "b" },
      { text: "darum", value: "c" },
      { text: "daher", value: "d" },
    ],
    correctAnswer: "b", // infolgedessen
  },
  {
    question: "Sie war krank, ___ konnte sie nicht kommen.",
    options: [
      { text: "also", value: "a" },
      { text: "nämlich", value: "b" },
      { text: "infolgedessen", value: "c" },
      { text: "deswegen", value: "d" },
    ],
    correctAnswer: "c", // infolgedessen
  },

  // Kausaladverbien: nämlich
  {
    question: "Er war nicht da, ___ er war krank.",
    options: [
      { text: "also", value: "a" },
      { text: "infolgedessen", value: "b" },
      { text: "darum", value: "c" },
      { text: "nämlich", value: "d" },
    ],
    correctAnswer: "d", // nämlich
  },
  {
    question: "Wir müssen uns beeilen, ___ der Zug fährt gleich ab.",
    options: [
      { text: "somit", value: "a" },
      { text: "nämlich", value: "b" },
      { text: "darum", value: "c" },
      { text: "daher", value: "d" },
    ],
    correctAnswer: "b", // nämlich
  },
  {
    question: "Er hat die Prüfung bestanden, ___ er hat viel gelernt.",
    options: [
      { text: "infolgedessen", value: "a" },
      { text: "also", value: "b" },
      { text: "nämlich", value: "c" },
      { text: "deswegen", value: "d" },
    ],
    correctAnswer: "c", // nämlich
  },
  {
    question: "Sie war nicht zufrieden, ___ das Produkt war defekt.",
    options: [
      { text: "somit", value: "a" },
      { text: "daher", value: "b" },
      { text: "darum", value: "c" },
      { text: "nämlich", value: "d" },
    ],
    correctAnswer: "d", // nämlich
  },
  {
    question: "Er hat abgelehnt, ___ er hatte keine Zeit.",
    options: [
      { text: "nämlich", value: "a" },
      { text: "infolgedessen", value: "b" },
      { text: "also", value: "c" },
      { text: "deswegen", value: "d" },
    ],
    correctAnswer: "a", // nämlich
  },

  // Kausaladverbien: somit
  {
    question: "Er hat hart gearbeitet, ___ hat er die Prüfung bestanden.",
    options: [
      { text: "nämlich", value: "a" },
      { text: "somit", value: "b" },
      { text: "also", value: "c" },
      { text: "infolgedessen", value: "d" },
    ],
    correctAnswer: "b", // somit
  },
  {
    question: "Die Regeln waren klar, ___ hat er sie befolgt.",
    options: [
      { text: "somit", value: "a" },
      { text: "darum", value: "b" },
      { text: "daher", value: "c" },
      { text: "deswegen", value: "d" },
    ],
    correctAnswer: "a", // somit
  },
  {
    question: "Die Nachfrage war hoch, ___ wurden die Preise erhöht.",
    options: [
      { text: "infolgedessen", value: "a" },
      { text: "nämlich", value: "b" },
      { text: "somit", value: "c" },
      { text: "also", value: "d" },
    ],
    correctAnswer: "c", // somit
  },
  {
    question: "Er war gut vorbereitet, ___ hat er gewonnen.",
    options: [
      { text: "daher", value: "a" },
      { text: "somit", value: "b" },
      { text: "darum", value: "c" },
      { text: "deswegen", value: "d" },
    ],
    correctAnswer: "b", // somit
  },
  {
    question: "Das Problem war gelöst, ___ konnten wir weiterarbeiten.",
    options: [
      { text: "also", value: "a" },
      { text: "infolgedessen", value: "b" },
      { text: "nämlich", value: "c" },
      { text: "somit", value: "d" },
    ],
    correctAnswer: "d", // somit
  },

  // Kausaladverb vs Pronominaladverb ayrımı
  {
    question:
      "Welches Wort ist ein Kausaladverb in diesem Satz: 'Er war krank, ___ blieb er zu Hause.'?",
    options: [
      { text: "darauf", value: "a" },
      { text: "daran", value: "b" },
      { text: "deshalb", value: "c" },
      { text: "dafür", value: "d" },
    ],
    correctAnswer: "c", // deshalb
  },
  {
    question:
      "Welches Wort ist ein Pronominaladverb in diesem Satz: 'Er hat das Buch gelesen, ___ freut er sich.'?",
    options: [
      { text: "also", value: "a" },
      { text: "darüber", value: "b" },
      { text: "deshalb", value: "c" },
      { text: "somit", value: "d" },
    ],
    correctAnswer: "b", // darüber
  },
  {
    question:
      "Welches Wort ist ein Kausaladverb in diesem Satz: 'Die Nachfrage war hoch, ___ wurden die Preise erhöht.'?",
    options: [
      { text: "daran", value: "a" },
      { text: "darauf", value: "b" },
      { text: "infolgedessen", value: "c" },
      { text: "dafür", value: "d" },
    ],
    correctAnswer: "c", // infolgedessen
  },
  {
    question:
      "Welches Wort ist ein Pronominaladverb in diesem Satz: 'Er hat sich ___ entschieden, das Angebot anzunehmen.'?",
    options: [
      { text: "somit", value: "a" },
      { text: "also", value: "b" },
      { text: "dafür", value: "c" },
      { text: "deshalb", value: "d" },
    ],
    correctAnswer: "c", // dafür
  },
  {
    question:
      "Welches Wort ist ein Kausaladverb in diesem Satz: 'Er hat die Regeln nicht befolgt, ___ wurde er bestraft.'?",
    options: [
      { text: "daran", value: "a" },
      { text: "dafür", value: "b" },
      { text: "darauf", value: "c" },
      { text: "darum", value: "d" },
    ],
    correctAnswer: "d", // darum
  },

  // 5) Satzadverbien: leider
  {
    question: "___ hat er die Prüfung nicht bestanden.",
    options: [
      { text: "möglicherweise", value: "a" },
      { text: "leider", value: "b" },
      { text: "allerdings", value: "c" },
      { text: "zweifellos", value: "d" },
    ],
    correctAnswer: "b", // leider
  },
  {
    question: "Er wollte kommen, ___ war er krank.",
    options: [
      { text: "anscheinend", value: "a" },
      { text: "sicherlich", value: "b" },
      { text: "leider", value: "c" },
      { text: "zweifellos", value: "d" },
    ],
    correctAnswer: "c", // leider
  },
  {
    question: "___ hat das Wetter unseren Ausflug ruiniert.",
    options: [
      { text: "leider", value: "a" },
      { text: "allerdings", value: "b" },
      { text: "hoffentlich", value: "c" },
      { text: "wahrlich", value: "d" },
    ],
    correctAnswer: "a", // leider
  },
  {
    question: "Er hat viel gelernt, ___ war es nicht genug.",
    options: [
      { text: "zweifellos", value: "a" },
      { text: "sicherlich", value: "b" },
      { text: "möglicherweise", value: "c" },
      { text: "leider", value: "d" },
    ],
    correctAnswer: "d", // leider
  },
  {
    question: "___ ist das Projekt gescheitert.",
    options: [
      { text: "leider", value: "a" },
      { text: "anscheinend", value: "b" },
      { text: "allerdings", value: "c" },
      { text: "hoffentlich", value: "d" },
    ],
    correctAnswer: "a", // leider
  },

  // Satzadverbien: möglicherweise
  {
    question: "___ kommt er später.",
    options: [
      { text: "allerdings", value: "a" },
      { text: "möglicherweise", value: "b" },
      { text: "leider", value: "c" },
      { text: "zweifellos", value: "d" },
    ],
    correctAnswer: "b", // möglicherweise
  },
  {
    question: "Er hat die Aufgabe gelöst, ___ nicht korrekt.",
    options: [
      { text: "anscheinend", value: "a" },
      { text: "möglicherweise", value: "b" },
      { text: "sicherlich", value: "c" },
      { text: "zweifellos", value: "d" },
    ],
    correctAnswer: "b", // möglicherweise
  },
  {
    question: "___ ist die Lösung nicht so einfach.",
    options: [
      { text: "wahrlich", value: "a" },
      { text: "hoffentlich", value: "b" },
      { text: "möglicherweise", value: "c" },
      { text: "allerdings", value: "d" },
    ],
    correctAnswer: "c", // möglicherweise
  },
  {
    question: "Er ist krank, ___ kann er nicht kommen.",
    options: [
      { text: "zweifellos", value: "a" },
      { text: "leider", value: "b" },
      { text: "sicherlich", value: "c" },
      { text: "möglicherweise", value: "d" },
    ],
    correctAnswer: "d", // möglicherweise
  },
  {
    question: "___ wird das Wetter morgen besser.",
    options: [
      { text: "möglicherweise", value: "a" },
      { text: "anscheinend", value: "b" },
      { text: "allerdings", value: "c" },
      { text: "hoffentlich", value: "d" },
    ],
    correctAnswer: "a", // möglicherweise
  },

  // Satzadverbien: allerdings
  {
    question: "Er hat gewonnen, ___ nach großem Aufwand.",
    options: [
      { text: "zweifellos", value: "a" },
      { text: "allerdings", value: "b" },
      { text: "leider", value: "c" },
      { text: "möglicherweise", value: "d" },
    ],
    correctAnswer: "b", // allerdings
  },
  {
    question: "Das ist eine gute Idee, ___ sehr teuer.",
    options: [
      { text: "anscheinend", value: "a" },
      { text: "sicherlich", value: "b" },
      { text: "allerdings", value: "c" },
      { text: "zweifellos", value: "d" },
    ],
    correctAnswer: "c", // allerdings
  },
  {
    question: "Sie ist nett, ___ manchmal etwas streng.",
    options: [
      { text: "allerdings", value: "a" },
      { text: "wahrlich", value: "b" },
      { text: "hoffentlich", value: "c" },
      { text: "leider", value: "d" },
    ],
    correctAnswer: "a", // allerdings
  },
  {
    question: "Das Projekt war erfolgreich, ___ mit Verzögerungen.",
    options: [
      { text: "zweifellos", value: "a" },
      { text: "sicherlich", value: "b" },
      { text: "möglicherweise", value: "c" },
      { text: "allerdings", value: "d" },
    ],
    correctAnswer: "d", // allerdings
  },
  {
    question: "Er hat es geschafft, ___ mit viel Mühe.",
    options: [
      { text: "allerdings", value: "a" },
      { text: "anscheinend", value: "b" },
      { text: "leider", value: "c" },
      { text: "hoffentlich", value: "d" },
    ],
    correctAnswer: "a", // allerdings
  },

  // Satzadverbien: anscheinend
  {
    question: "___ hat er die Aufgabe nicht verstanden.",
    options: [
      { text: "zweifellos", value: "a" },
      { text: "anscheinend", value: "b" },
      { text: "leider", value: "c" },
      { text: "allerdings", value: "d" },
    ],
    correctAnswer: "b", // anscheinend
  },
  {
    question: "Er ist ___ nicht hier.",
    options: [
      { text: "leider", value: "a" },
      { text: "sicherlich", value: "b" },
      { text: "anscheinend", value: "c" },
      { text: "zweifellos", value: "d" },
    ],
    correctAnswer: "c", // anscheinend
  },
  {
    question: "___ ist das Wetter heute schlecht.",
    options: [
      { text: "wahrlich", value: "a" },
      { text: "hoffentlich", value: "b" },
      { text: "allerdings", value: "c" },
      { text: "anscheinend", value: "d" },
    ],
    correctAnswer: "d", // anscheinend
  },
  {
    question: "Er hat die Prüfung bestanden, ___ ohne viel Aufwand.",
    options: [
      { text: "anscheinend", value: "a" },
      { text: "zweifellos", value: "b" },
      { text: "sicherlich", value: "c" },
      { text: "möglicherweise", value: "d" },
    ],
    correctAnswer: "a", // anscheinend
  },
  {
    question: "___ ist er sehr beschäftigt.",
    options: [
      { text: "hoffentlich", value: "a" },
      { text: "anscheinend", value: "b" },
      { text: "leider", value: "c" },
      { text: "allerdings", value: "d" },
    ],
    correctAnswer: "b", // anscheinend
  },

  // Satzadverbien: hoffentlich
  {
    question: "___ kommt er bald zurück.",
    options: [
      { text: "zweifellos", value: "a" },
      { text: "leider", value: "b" },
      { text: "hoffentlich", value: "c" },
      { text: "allerdings", value: "d" },
    ],
    correctAnswer: "c", // hoffentlich
  },
  {
    question: "___ wird das Wetter morgen besser.",
    options: [
      { text: "anscheinend", value: "a" },
      { text: "sicherlich", value: "b" },
      { text: "zweifellos", value: "c" },
      { text: "hoffentlich", value: "d" },
    ],
    correctAnswer: "d", // hoffentlich
  },
  {
    question: "___ ist die Aufgabe nicht zu schwer.",
    options: [
      { text: "hoffentlich", value: "a" },
      { text: "leider", value: "b" },
      { text: "wahrlich", value: "c" },
      { text: "allerdings", value: "d" },
    ],
    correctAnswer: "a", // hoffentlich
  },
  {
    question: "Er arbeitet hart, ___ wird er Erfolg haben.",
    options: [
      { text: "zweifellos", value: "a" },
      { text: "möglicherweise", value: "b" },
      { text: "hoffentlich", value: "c" },
      { text: "sicherlich", value: "d" },
    ],
    correctAnswer: "c", // hoffentlich
  },
  {
    question: "___ finden wir bald eine Lösung.",
    options: [
      { text: "leider", value: "a" },
      { text: "hoffentlich", value: "b" },
      { text: "anscheinend", value: "c" },
      { text: "allerdings", value: "d" },
    ],
    correctAnswer: "b", // hoffentlich
  },

  // Satzadverbien: sicherlich
  {
    question: "___ hat er die beste Lösung gefunden.",
    options: [
      { text: "allerdings", value: "a" },
      { text: "sicherlich", value: "b" },
      { text: "leider", value: "c" },
      { text: "zweifellos", value: "d" },
    ],
    correctAnswer: "b", // sicherlich
  },
  {
    question: "Er ist ___ der Beste in seinem Team.",
    options: [
      { text: "anscheinend", value: "a" },
      { text: "leider", value: "b" },
      { text: "sicherlich", value: "c" },
      { text: "zweifellos", value: "d" },
    ],
    correctAnswer: "c", // sicherlich
  },
  {
    question: "___ wird er die Aufgabe lösen.",
    options: [
      { text: "wahrlich", value: "a" },
      { text: "hoffentlich", value: "b" },
      { text: "allerdings", value: "c" },
      { text: "sicherlich", value: "d" },
    ],
    correctAnswer: "d", // sicherlich
  },
  {
    question: "Er hat viel Erfahrung, ___ wird er erfolgreich sein.",
    options: [
      { text: "sicherlich", value: "a" },
      { text: "zweifellos", value: "b" },
      { text: "leider", value: "c" },
      { text: "möglicherweise", value: "d" },
    ],
    correctAnswer: "a", // sicherlich
  },
  {
    question: "___ ist er der richtige Kandidat.",
    options: [
      { text: "sicherlich", value: "a" },
      { text: "anscheinend", value: "b" },
      { text: "allerdings", value: "c" },
      { text: "hoffentlich", value: "d" },
    ],
    correctAnswer: "a", // sicherlich
  },

  // Satzadverbien: wahrlich
  {
    question: "Das war ___ ein großartiger Auftritt.",
    options: [
      { text: "zweifellos", value: "a" },
      { text: "leider", value: "b" },
      { text: "wahrlich", value: "c" },
      { text: "allerdings", value: "d" },
    ],
    correctAnswer: "c", // wahrlich
  },
  {
    question: "Er ist ___ ein talentierter Musiker.",
    options: [
      { text: "anscheinend", value: "a" },
      { text: "wahrlich", value: "b" },
      { text: "sicherlich", value: "c" },
      { text: "zweifellos", value: "d" },
    ],
    correctAnswer: "b", // wahrlich
  },
  {
    question: "___ ist das eine schwierige Aufgabe.",
    options: [
      { text: "leider", value: "a" },
      { text: "hoffentlich", value: "b" },
      { text: "allerdings", value: "c" },
      { text: "wahrlich", value: "d" },
    ],
    correctAnswer: "d", // wahrlich
  },
  {
    question: "Er hat ___ einen großen Beitrag geleistet.",
    options: [
      { text: "wahrlich", value: "a" },
      { text: "zweifellos", value: "b" },
      { text: "sicherlich", value: "c" },
      { text: "möglicherweise", value: "d" },
    ],
    correctAnswer: "a", // wahrlich
  },
  {
    question: "___ ist das ein bemerkenswerter Erfolg.",
    options: [
      { text: "allerdings", value: "a" },
      { text: "wahrlich", value: "b" },
      { text: "anscheinend", value: "c" },
      { text: "hoffentlich", value: "d" },
    ],
    correctAnswer: "b", // wahrlich
  },

  // Satzadverbien: zweifellos
  {
    question: "___ ist er der beste Kandidat.",
    options: [
      { text: "allerdings", value: "a" },
      { text: "anscheinend", value: "b" },
      { text: "zweifellos", value: "c" },
      { text: "leider", value: "d" },
    ],
    correctAnswer: "c", // zweifellos
  },
  {
    question: "Er hat ___ die richtige Entscheidung getroffen.",
    options: [
      { text: "zweifellos", value: "a" },
      { text: "leider", value: "b" },
      { text: "sicherlich", value: "c" },
      { text: "möglicherweise", value: "d" },
    ],
    correctAnswer: "a", // zweifellos
  },
  {
    question: "___ ist die Lösung korrekt.",
    options: [
      { text: "wahrlich", value: "a" },
      { text: "hoffentlich", value: "b" },
      { text: "zweifellos", value: "c" },
      { text: "allerdings", value: "d" },
    ],
    correctAnswer: "c", // zweifellos
  },
  {
    question: "Er hat viel Erfahrung, ___ wird er erfolgreich sein.",
    options: [
      { text: "leider", value: "a" },
      { text: "möglicherweise", value: "b" },
      { text: "zweifellos", value: "c" },
      { text: "sicherlich", value: "d" },
    ],
    correctAnswer: "c", // zweifellos
  },
  {
    question: "___ hat er die Aufgabe perfekt gelöst.",
    options: [
      { text: "zweifellos", value: "a" },
      { text: "anscheinend", value: "b" },
      { text: "allerdings", value: "c" },
      { text: "hoffentlich", value: "d" },
    ],
    correctAnswer: "a", // zweifellos
  },

  // 6) Konjunktionaladverbien: deshalb
  {
    question: "Er war krank, ___ blieb er zu Hause.",
    options: [
      { text: "sonst", value: "a" },
      { text: "deshalb", value: "b" },
      { text: "daher", value: "c" },
      { text: "deswegen", value: "d" },
    ],
    correctAnswer: "b", // deshalb
  },
  {
    question: "Die Prüfung war schwer, ___ hat er viel gelernt.",
    options: [
      { text: "daher", value: "a" },
      { text: "sonst", value: "b" },
      { text: "deshalb", value: "c" },
      { text: "deswegen", value: "d" },
    ],
    correctAnswer: "c", // deshalb
  },
  {
    question: "Wir hatten keine Zeit, ___ mussten wir uns beeilen.",
    options: [
      { text: "deswegen", value: "a" },
      { text: "daher", value: "b" },
      { text: "sonst", value: "c" },
      { text: "deshalb", value: "d" },
    ],
    correctAnswer: "d", // deshalb
  },
  {
    question: "Er hat die Regeln nicht befolgt, ___ wurde er bestraft.",
    options: [
      { text: "deshalb", value: "a" },
      { text: "sonst", value: "b" },
      { text: "daher", value: "c" },
      { text: "deswegen", value: "d" },
    ],
    correctAnswer: "a", // deshalb
  },
  {
    question: "Das Wetter war schlecht, ___ wurde die Veranstaltung abgesagt.",
    options: [
      { text: "daher", value: "a" },
      { text: "deshalb", value: "b" },
      { text: "deswegen", value: "c" },
      { text: "sonst", value: "d" },
    ],
    correctAnswer: "b", // deshalb
  },

  // Konjunktionaladverbien: daher
  {
    question:
      "Er war nicht vorbereitet, ___ hat er die Prüfung nicht bestanden.",
    options: [
      { text: "sonst", value: "a" },
      { text: "daher", value: "b" },
      { text: "deshalb", value: "c" },
      { text: "deswegen", value: "d" },
    ],
    correctAnswer: "b", // daher
  },
  {
    question: "Die Nachfrage war hoch, ___ wurden die Preise erhöht.",
    options: [
      { text: "deshalb", value: "a" },
      { text: "sonst", value: "b" },
      { text: "daher", value: "c" },
      { text: "deswegen", value: "d" },
    ],
    correctAnswer: "c", // daher
  },
  {
    question: "Er hatte keine Zeit, ___ blieb er zu Hause.",
    options: [
      { text: "deswegen", value: "a" },
      { text: "sonst", value: "b" },
      { text: "deshalb", value: "c" },
      { text: "daher", value: "d" },
    ],
    correctAnswer: "d", // daher
  },
  {
    question: "Das Wetter war schlecht, ___ wurde die Veranstaltung abgesagt.",
    options: [
      { text: "daher", value: "a" },
      { text: "sonst", value: "b" },
      { text: "deshalb", value: "c" },
      { text: "deswegen", value: "d" },
    ],
    correctAnswer: "a", // daher
  },
  {
    question: "Sie war krank, ___ konnte sie nicht kommen.",
    options: [
      { text: "deshalb", value: "a" },
      { text: "deswegen", value: "b" },
      { text: "daher", value: "c" },
      { text: "sonst", value: "d" },
    ],
    correctAnswer: "c", // daher
  },

  // Konjunktionaladverbien: deswegen
  {
    question:
      "Er war nicht vorbereitet, ___ hat er die Prüfung nicht bestanden.",
    options: [
      { text: "sonst", value: "a" },
      { text: "deswegen", value: "b" },
      { text: "deshalb", value: "c" },
      { text: "daher", value: "d" },
    ],
    correctAnswer: "b", // deswegen
  },
  {
    question: "Die Nachfrage war hoch, ___ wurden die Preise erhöht.",
    options: [
      { text: "deshalb", value: "a" },
      { text: "sonst", value: "b" },
      { text: "deswegen", value: "c" },
      { text: "daher", value: "d" },
    ],
    correctAnswer: "c", // deswegen
  },
  {
    question: "Er hatte keine Zeit, ___ blieb er zu Hause.",
    options: [
      { text: "deswegen", value: "a" },
      { text: "sonst", value: "b" },
      { text: "deshalb", value: "c" },
      { text: "daher", value: "d" },
    ],
    correctAnswer: "a", // deswegen
  },
  {
    question: "Das Wetter war schlecht, ___ wurde die Veranstaltung abgesagt.",
    options: [
      { text: "daher", value: "a" },
      { text: "deshalb", value: "b" },
      { text: "sonst", value: "c" },
      { text: "deswegen", value: "d" },
    ],
    correctAnswer: "d", // deswegen
  },
  {
    question: "Sie war krank, ___ konnte sie nicht kommen.",
    options: [
      { text: "sonst", value: "a" },
      { text: "deswegen", value: "b" },
      { text: "daher", value: "c" },
      { text: "deshalb", value: "d" },
    ],
    correctAnswer: "b", // deswegen
  },

  // Konjunktionaladverbien: sonst
  {
    question: "Beeil dich, ___ verpassen wir den Zug!",
    options: [
      { text: "deshalb", value: "a" },
      { text: "daher", value: "b" },
      { text: "deswegen", value: "c" },
      { text: "sonst", value: "d" },
    ],
    correctAnswer: "d", // sonst
  },
  {
    question: "Nimm einen Regenschirm, ___ wirst du nass!",
    options: [
      { text: "sonst", value: "a" },
      { text: "deshalb", value: "b" },
      { text: "daher", value: "c" },
      { text: "deswegen", value: "d" },
    ],
    correctAnswer: "a", // sonst
  },
  {
    question: "Lern jetzt, ___ wirst du die Prüfung nicht bestehen!",
    options: [
      { text: "deshalb", value: "a" },
      { text: "sonst", value: "b" },
      { text: "daher", value: "c" },
      { text: "deswegen", value: "d" },
    ],
    correctAnswer: "b", // sonst
  },
  {
    question: "Mach das Fenster zu, ___ wird es kalt!",
    options: [
      { text: "sonst", value: "a" },
      { text: "deshalb", value: "b" },
      { text: "daher", value: "c" },
      { text: "deswegen", value: "d" },
    ],
    correctAnswer: "a", // sonst
  },
  {
    question: "Kauf die Tickets früh, ___ sind sie ausverkauft!",
    options: [
      { text: "deswegen", value: "a" },
      { text: "deshalb", value: "b" },
      { text: "sonst", value: "c" },
      { text: "daher", value: "d" },
    ],
    correctAnswer: "c", // sonst
  },

  // 3. Bölüm - 1. Ders: Konjunktiv II - Irreale Sätze
  {
    question:
      "Welches Verb steht im Konjunktiv II in diesem Satz: 'Wenn ich Zeit hätte, ___ ich nach Italien reisen.'?",
    options: [
      { text: "reise", value: "a" },
      { text: "würde", value: "b" },
      { text: "reiste", value: "c" },
      { text: "würde reisen", value: "d" },
    ],
    correctAnswer: "d", // würde reisen
  },
  {
    question:
      "Wie lautet die Modalverb-Konstruktion im Konjunktiv II Gegenwart: 'Er ___ das machen können.'?",
    options: [
      { text: "kann", value: "a" },
      { text: "könnte", value: "b" },
      { text: "konnte", value: "c" },
      { text: "würde können", value: "d" },
    ],
    correctAnswer: "b", // könnte
  },
  {
    question:
      "Welcher Satz ist im Konjunktiv II Passiv Gegenwart? 'Die Aufgabe ___ gelöst werden.'",
    options: [
      { text: "wird", value: "a" },
      { text: "würde", value: "b" },
      { text: "wurde", value: "c" },
      { text: "wäre", value: "d" },
    ],
    correctAnswer: "b", // würde
  },
  {
    question:
      "Wie lautet die Konjunktiv II Passiv Vergangenheit-Form: 'Das Haus ___ gebaut ___.'?",
    options: [
      { text: "wurde ... worden", value: "a" },
      { text: "würde ... worden sein", value: "b" },
      { text: "wäre ... worden", value: "c" },
      { text: "wird ... worden sein", value: "d" },
    ],
    correctAnswer: "c", // wäre ... worden
  },
  {
    question:
      "Welcher Satz verwendet Konjunktiv II Passiv + Vergangenheit + Modalverb? 'Das Projekt ___ früher ___ werden ___.'",
    options: [
      { text: "wäre ... abgeschlossen ... können", value: "a" },
      { text: "wurde ... abgeschlossen ... können", value: "b" },
      { text: "würde ... abgeschlossen ... gekonnt", value: "c" },
      { text: "wird ... abgeschlossen ... können", value: "d" },
    ],
    correctAnswer: "a", // wäre ... abgeschlossen ... können
  },

  // 3. Bölüm - 2. Ders: Konjunktiv II - Gerçek dışı koşul ve dilek cümleleri
  {
    question:
      "Welcher Satz ist ein irreales Bedingungssatz im Gegenwart? 'Wenn ich reich ___, ___ ich ein Haus kaufen.'",
    options: [
      { text: "bin ... würde", value: "a" },
      { text: "wäre ... würde", value: "b" },
      { text: "war ... werde", value: "c" },
      { text: "wäre ... werde", value: "d" },
    ],
    correctAnswer: "b", // wäre ... würde
  },
  {
    question:
      "Wie lautet ein irreales Bedingungssatz im Vergangenheit? 'Wenn er schneller ___ gewesen, ___ er gewonnen.'",
    options: [
      { text: "war ... hätte", value: "a" },
      { text: "wäre ... hätte", value: "b" },
      { text: "war ... würde", value: "c" },
      { text: "wäre ... würde", value: "d" },
    ],
    correctAnswer: "b", // wäre ... hätte
  },
  {
    question:
      "Welcher Konditionalsatz ohne 'wenn' ist korrekt? '___ ich Zeit, würde ich kommen.'",
    options: [
      { text: "Habe", value: "a" },
      { text: "Hätte", value: "b" },
      { text: "Haben", value: "c" },
      { text: "Hattest", value: "d" },
    ],
    correctAnswer: "b", // Hätte
  },
  {
    question:
      "Welches Modalverb steht im irreales Bedingungssatz? 'Wenn er es ___ wollte, könnte er es schaffen.'",
    options: [
      { text: "will", value: "a" },
      { text: "wollte", value: "b" },
      { text: "wolle", value: "c" },
      { text: "würde wollen", value: "d" },
    ],
    correctAnswer: "b", // wollte
  },
  {
    question: "Welcher irreale Wunschsat ist korrekt? 'Wenn ich doch nur ___!'",
    options: [
      { text: "reicher wäre", value: "a" },
      { text: "reicher bin", value: "b" },
      { text: "reich wäre", value: "c" },
      { text: "reich bin", value: "d" },
    ],
    correctAnswer: "a", // reicher wäre
  },

  // 3. Bölüm - 4. Ders: Konjunktiv II - Gerçek dışı sonuç cümleleri
  {
    question:
      "Welcher Satz verwendet die Struktur 'zu + Adjektiv + als dass + Konjunktiv II'? 'Er ist ___ faul, ___ er Erfolg hätte.'",
    options: [
      { text: "zu ... als dass", value: "a" },
      { text: "nicht genug ... dass", value: "b" },
      { text: "so ... dass", value: "c" },
      { text: "nicht so ... als dass", value: "d" },
    ],
    correctAnswer: "a", // zu ... als dass
  },
  {
    question:
      "Welcher Satz verwendet 'nicht genug' statt 'zu'? 'Er ist ___ fleißig, als dass er scheitern würde.'",
    options: [
      { text: "zu", value: "a" },
      { text: "nicht genug", value: "b" },
      { text: "so", value: "c" },
      { text: "genug", value: "d" },
    ],
    correctAnswer: "b", // nicht genug
  },
  {
    question:
      "Welcher irreale Folgesatz im Gegenwart ist korrekt? 'Es ist zu kalt, als dass wir ___ könnten.'",
    options: [
      { text: "schwimmen gingen", value: "a" },
      { text: "schwimmen gehen", value: "b" },
      { text: "schwimmen würden", value: "c" },
      { text: "schwimmen könnten", value: "d" },
    ],
    correctAnswer: "d", // schwimmen könnten
  },
  {
    question:
      "Welcher irreale Folgesatz im Vergangenheit ist korrekt? 'Es war zu spät, als dass er ___ hätte.'",
    options: [
      { text: "ankommen können", value: "a" },
      { text: "ankommen konnte", value: "b" },
      { text: "ankommen würde", value: "c" },
      { text: "ankommen gekonnt hätte", value: "d" },
    ],
    correctAnswer: "d", // ankommen gekonnt hätte
  },

  // Konjunktiv I ve Indirekte Rede
  {
    question:
      "Welcher Satz verwendet Konjunktiv I im Präsens? 'Er sagt, er ___ morgen.'",
    options: [
      { text: "kommt", value: "a" },
      { text: "komme", value: "b" },
      { text: "käme", value: "c" },
      { text: "kommen würde", value: "d" },
    ],
    correctAnswer: "b", // komme
  },
  {
    question:
      "Welcher Satz ist indirekte Rede mit Konjunktiv I? 'Sie sagt: „Ich bin müde.“' → 'Sie sagt, sie ___ müde.'",
    options: [
      { text: "ist", value: "a" },
      { text: "sei", value: "b" },
      { text: "wäre", value: "c" },
      { text: "sei gewesen", value: "d" },
    ],
    correctAnswer: "b", // sei
  },
  {
    question:
      "Welcher Satz verwendet Konjunktiv I Futur I? 'Er meint, er ___ es morgen ___.'",
    options: [
      { text: "werde ... machen", value: "a" },
      { text: "würde ... machen", value: "b" },
      { text: "wird ... machen", value: "c" },
      { text: "mache ... werden", value: "d" },
    ],
    correctAnswer: "a", // werde ... machen
  },
  {
    question:
      "Welcher Satz zeigt eine indirekte Frage mit Konjunktiv I? 'Er fragt, ob sie ___ kommen.'",
    options: [
      { text: "kommt", value: "a" },
      { text: "komme", value: "b" },
      { text: "käme", value: "c" },
      { text: "kommen würde", value: "d" },
    ],
    correctAnswer: "b", // komme
  },

  // 4. Bölüm - 1. Ders: Ana cümle ve yan cümle bağlantı türleri
  {
    question: "Welcher Nebensatz ist ein Subjektsatz? '___ ist mir egal.'",
    options: [
      { text: "Wer kommt", value: "a" },
      { text: "Warum er kommt", value: "b" },
      { text: "Wie er kommt", value: "c" },
      { text: "Dass er kommt", value: "d" },
    ],
    correctAnswer: "d", // Dass er kommt
  },
  {
    question:
      "Welcher Nebensatz ist ein Adverbialsatz? 'Ich bleibe, ___ ich Zeit habe.'",
    options: [
      { text: "weil", value: "a" },
      { text: "der", value: "b" },
      { text: "was", value: "c" },
      { text: "dass", value: "d" },
    ],
    correctAnswer: "a", // weil
  },

  // 4. Bölüm - 2. Ders: Temporalsätze
  {
    question:
      "Welcher Temporalsatz zeigt Gleichzeitigkeit? 'Er liest, ___ sie kocht.'",
    options: [
      { text: "während", value: "a" },
      { text: "bevor", value: "b" },
      { text: "nachdem", value: "c" },
      { text: "sobald", value: "d" },
    ],
    correctAnswer: "a", // während
  },
  {
    question:
      "Welcher Temporalsatz zeigt Vorzeitigkeit? 'Ich rufe an, ___ ich ankomme.'",
    options: [
      { text: "während", value: "a" },
      { text: "bevor", value: "b" },
      { text: "sobald", value: "c" },
      { text: "solange", value: "d" },
    ],
    correctAnswer: "c", // sobald
  },

  // 4. Bölüm - 3. Ders: Kausalsätze
  {
    question:
      "Welcher Kausalsatz verwendet 'weil'? 'Er bleibt zu Hause, ___ er krank ist.'",
    options: [
      { text: "denn", value: "a" },
      { text: "weil", value: "b" },
      { text: "nämlich", value: "c" },
      { text: "auf Grund", value: "d" },
    ],
    correctAnswer: "b", // weil
  },
  {
    question:
      "Welches Präposition zeigt eine Kausalbeziehung? 'Er blieb ___ des Regens zu Hause.'",
    options: [
      { text: "anlässlich", value: "a" },
      { text: "wegen", value: "b" },
      { text: "zwecks", value: "c" },
      { text: "zufolge", value: "d" },
    ],
    correctAnswer: "b", // wegen
  },

  // 4. Bölüm - 4. Ders: Modalsätze
  {
    question:
      "Welcher Modalsatz verwendet 'indem'? 'Er löst das Problem, ___ er nachdenkt.'",
    options: [
      { text: "dadurch ... dass", value: "a" },
      { text: "indem", value: "b" },
      { text: "damit", value: "c" },
      { text: "durch", value: "d" },
    ],
    correctAnswer: "b", // indem
  },
  {
    question:
      "Welches Präposition zeigt eine Modalsatz-Nominalstil? 'Er gewann ___ harter Arbeit.'",
    options: [
      { text: "durch", value: "a" },
      { text: "weil", value: "b" },
      { text: "indem", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "a", // durch
  },

  // 4. Bölüm - 5. Ders: Konzessive und Restriktive Konnektoren
  {
    question:
      "Welcher Konzessivsatz ist korrekt? '___ er müde ist, arbeitet er weiter.'",
    options: [
      { text: "Wenn auch", value: "a" },
      { text: "Selbst wenn", value: "b" },
      { text: "Außer wenn", value: "c" },
      { text: "Es sei denn", value: "d" },
    ],
    correctAnswer: "b", // Selbst wenn
  },
  {
    question: "Welcher Restriktivsatz ist korrekt? 'Ich komme, ___ es regnet.'",
    options: [
      { text: "selbst wenn", value: "a" },
      { text: "außer wenn", value: "b" },
      { text: "wenn auch", value: "c" },
      { text: "zwar ... aber", value: "d" },
    ],
    correctAnswer: "b", // außer wenn
  },

  // Spezielle Verben, Modalverben und ihre Alternativen
  {
    question:
      "Welcher Satz verwendet 'sein + zu + Infinitiv'? 'Das Problem ___ gelöst ___.'",
    options: [
      { text: "ist ... zu werden", value: "a" },
      { text: "wird ... werden", value: "b" },
      { text: "war ... geworden", value: "c" },
      { text: "ist ... werden", value: "d" },
    ],
    correctAnswer: "a", // ist ... zu werden
  },

  // 5. Bölüm - 2. Ders: Gerundiv
  {
    question:
      "Welcher Satz verwendet das Gerundiv? 'Das ist eine ___ Aufgabe.'",
    options: [
      { text: "zu lösende", value: "a" },
      { text: "gelöste", value: "b" },
      { text: "lösende", value: "c" },
      { text: "zu lösen", value: "d" },
    ],
    correctAnswer: "a", // zu lösende
  },

  // 5. Bölüm - 3. Ders: scheinen + zu + Infinitiv
  {
    question:
      "Welcher Satz verwendet 'scheinen + zu + Infinitiv'? 'Er ___ die Wahrheit ___.'",
    options: [
      { text: "scheint ... zu wissen", value: "a" },
      { text: "wusste ... scheinen", value: "b" },
      { text: "scheint ... wissen", value: "c" },
      { text: "wusste ... zu scheinen", value: "d" },
    ],
    correctAnswer: "a", // scheint ... zu wissen
  },

  // 5. Bölüm - 4. Ders: Verben mit Infinitiv ohne "zu"
  {
    question:
      "Welcher Satz verwendet ein Verb mit Infinitiv ohne 'zu'? 'Ich höre ihn ___.'",
    options: [
      { text: "zu singen", value: "a" },
      { text: "singen", value: "b" },
      { text: "gesungen", value: "c" },
      { text: "singend", value: "d" },
    ],
    correctAnswer: "b", // singen
  },

  // 5. Bölüm - 5. Ders: Modalitätsverben
  {
    question: "Welches Modalitätsverb passt? 'Er ___ es versuchen.'",
    options: [
      { text: "will", value: "a" },
      { text: "versucht", value: "b" },
      { text: "beabsichtigt", value: "c" },
      { text: "kann", value: "d" },
    ],
    correctAnswer: "c", // beabsichtigt
  },

  // 5. Bölüm - 6. Ders: Das Verb "lassen"
  {
    question:
      "Welcher Satz verwendet 'lassen' als Passiversatzform? 'Das Auto ___ sich leicht fahren.'",
    options: [
      { text: "lässt", value: "a" },
      { text: "wird", value: "b" },
      { text: "ist", value: "c" },
      { text: "hat", value: "d" },
    ],
    correctAnswer: "a", // lässt
  },

  // Feste Verbindungen im Deutschen
  {
    question:
      "Welches Verb mit Präposition ist korrekt? 'Ich ___ mich ___ die Aufgabe.'",
    options: [
      { text: "freue ... auf", value: "a" },
      { text: "denke ... an", value: "b" },
      { text: "beschwere ... über", value: "c" },
      { text: "kümmere ... um", value: "d" },
    ],
    correctAnswer: "d", // kümmere ... um
  },
  {
    question:
      "Welches Adjektiv mit Präposition ist korrekt? 'Er ist ___ sein Ergebnis.'",
    options: [
      { text: "stolz auf", value: "a" },
      { text: "dankbar für", value: "b" },
      { text: "bekannt für", value: "c" },
      { text: "verantwortlich für", value: "d" },
    ],
    correctAnswer: "a", // stolz auf
  },
  {
    question:
      "Welches Nomen mit Präposition ist korrekt? 'Der ___ ___ Erfolg war groß.'",
    options: [
      { text: "Anspruch auf", value: "a" },
      { text: "Mangel an", value: "b" },
      { text: "Hinweis auf", value: "c" },
      { text: "Kampf um", value: "d" },
    ],
    correctAnswer: "b", // Mangel an
  },
  {
    question: "Welche Nomen-Verb Verbindung ist korrekt? 'Er ___ großen ___.'",
    options: [
      { text: "nimmt ... Angriff", value: "a" },
      { text: "stellt ... Verfügung", value: "b" },
      { text: "erhebt ... Einspruch", value: "c" },
      { text: "bringt ... Ausdruck", value: "d" },
    ],
    correctAnswer: "c", // erhebt ... Einspruch
  },

  // Passiv
  {
    question: "Welcher Satz ist Vorgangspassiv? 'Das Haus ___ gerade ___.'",
    options: [
      { text: "wird ... gebaut", value: "a" },
      { text: "ist ... gebaut", value: "b" },
      { text: "wurde ... gebaut", value: "c" },
      { text: "ist ... gebaut worden", value: "d" },
    ],
    correctAnswer: "a", // wird ... gebaut
  },
  {
    question:
      "Welcher Satz verwendet 'durch' im Passiv? 'Das Bild ___ ___ einem Künstler gemalt.'",
    options: [
      { text: "wurde ... durch", value: "a" },
      { text: "wurde ... von", value: "b" },
      { text: "ist ... mit", value: "c" },
      { text: "war ... über", value: "d" },
    ],
    correctAnswer: "a", // wurde ... durch
  },
  {
    question:
      "Welches Verb kann nicht im Passiv verwendet werden? 'Das Buch ___ mir.'",
    options: [
      { text: "gefällt", value: "a" },
      { text: "wird gelesen", value: "b" },
      { text: "wurde gekauft", value: "c" },
      { text: "ist geschrieben", value: "d" },
    ],
    correctAnswer: "a", // gefällt
  },
  {
    question:
      "Welcher Passiversatzform verwendet 'bekommen + Partizip II'? 'Er ___ die Aufgabe ___.'",
    options: [
      { text: "bekommt ... erklärt", value: "a" },
      { text: "wird ... erklärt", value: "b" },
      { text: "ist ... erklärt", value: "c" },
      { text: "hat ... erklärt", value: "d" },
    ],
    correctAnswer: "a", // bekommt ... erklärt
  },

  // Infinitivsätze
  {
    question: "Welcher Infinitivsatz ist ein Subjektsatz? '___ macht Spaß.'",
    options: [
      { text: "Zu tanzen", value: "a" },
      { text: "Dass ich tanze", value: "b" },
      { text: "Um zu tanzen", value: "c" },
      { text: "Ohne zu tanzen", value: "d" },
    ],
    correctAnswer: "a", // Zu tanzen
  },
  {
    question:
      "Welcher Infinitivsatz ist ein Adverbialbestimmung? 'Er kam, ___ zu helfen.'",
    options: [
      { text: "um", value: "a" },
      { text: "dass", value: "b" },
      { text: "weil", value: "c" },
      { text: "ohne", value: "d" },
    ],
    correctAnswer: "a", // um
  },
  {
    question:
      "Welcher Infinitivsatz zeigt Vorzeitigkeit im Passiv? 'Er freut sich, das Buch ___ zu haben.'",
    options: [
      { text: "gelesen", value: "a" },
      { text: "zu lesen", value: "b" },
      { text: "gelesen worden", value: "c" },
      { text: "zu lesen gewesen", value: "d" },
    ],
    correctAnswer: "c", // gelesen worden
  },

  // Das Pronomen "Es"
  {
    question:
      "Welcher Satz verwendet 'es' als Yancümle işaretçisi? '___ freut mich, dass du kommst.'",
    options: [
      { text: "Es", value: "a" },
      { text: "Das", value: "b" },
      { text: "Dies", value: "c" },
      { text: "Was", value: "d" },
    ],
    correctAnswer: "a", // Es
  },
  {
    question:
      "Welcher Satz verwendet 'es' als Pseudo-Subjekt? '___ regnet heute.'",
    options: [
      { text: "Es", value: "a" },
      { text: "Das", value: "b" },
      { text: "Dies", value: "c" },
      { text: "Was", value: "d" },
    ],
    correctAnswer: "a", // Es
  },

  // Verweiswörter
  {
    question:
      "Welches Verweiswort verweist auf die vorige Aussage? 'Er hat gewonnen. ___ freut mich.'",
    options: [
      { text: "Das", value: "a" },
      { text: "Es", value: "b" },
      { text: "Darauf", value: "c" },
      { text: "Worum", value: "d" },
    ],
    correctAnswer: "a", // Das
  },
  {
    question:
      "Welches Pronominaladverb ist korrekt? 'Er spricht davon. ___ freut mich.'",
    options: [
      { text: "Darüber", value: "a" },
      { text: "Dafür", value: "b" },
      { text: "Damit", value: "c" },
      { text: "Daran", value: "d" },
    ],
    correctAnswer: "a", // Darüber
  },

  // Graduierung der Adjektive
  {
    question: "Welches Adverb graduert das Adjektiv? 'Das ist ___ schön.'",
    options: [
      { text: "äußerst", value: "a" },
      { text: "dort", value: "b" },
      { text: "gestern", value: "c" },
      { text: "deshalb", value: "d" },
    ],
    correctAnswer: "a", // äußerst
  },

  // Die Adverbklassen
  {
    question: "Welches Adverb ist ein Lokaladverb? 'Das Buch liegt ___.'",
    options: [
      { text: "dort", value: "a" },
      { text: "heute", value: "b" },
      { text: "schnell", value: "c" },
      { text: "deshalb", value: "d" },
    ],
    correctAnswer: "a", // dort
  },
  {
    question: "Welches Adverb ist ein Temporaladverb? 'Wir treffen uns ___.'",
    options: [
      { text: "hier", value: "a" },
      { text: "morgen", value: "b" },
      { text: "sorgfältig", value: "c" },
      { text: "daher", value: "d" },
    ],
    correctAnswer: "b", // morgen
  },
  {
    question: "Welches Adverb ist ein Modaladverb? 'Er arbeitet ___.'",
    options: [
      { text: "gestern", value: "a" },
      { text: "dort", value: "b" },
      { text: "sorgfältig", value: "c" },
      { text: "nämlich", value: "d" },
    ],
    correctAnswer: "c", // sorgfältig
  },
  {
    question:
      "Welches Adverb ist ein Kausaladverb? 'Er war krank, ___ blieb er zu Hause.'",
    options: [
      { text: "hier", value: "a" },
      { text: "oft", value: "b" },
      { text: "deshalb", value: "c" },
      { text: "schnell", value: "d" },
    ],
    correctAnswer: "c", // deshalb
  },
  {
    question:
      "Welches Adverb ist ein Satzadverb? '___ hat er die Prüfung bestanden.'",
    options: [
      { text: "dort", value: "a" },
      { text: "gestern", value: "b" },
      { text: "schnell", value: "c" },
      { text: "zweifellos", value: "d" },
    ],
    correctAnswer: "d", // zweifellos
  },
  {
    question:
      "Welches Adverb ist ein Konjunktionaladverb? 'Beeil dich, ___ verpasst du den Zug!'",
    options: [
      { text: "dort", value: "a" },
      { text: "heute", value: "b" },
      { text: "sonst", value: "c" },
      { text: "schnell", value: "d" },
    ],
    correctAnswer: "c", // sonst
  },
];
export default Anasorular;
