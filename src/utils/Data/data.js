const data = [
  {
    question: "Welche Satzstellung ist richtig?",
    options: {
      A: "Ich morgen gehe ins Kino.",
      B: "Ins Kino ich morgen gehe.",
      C: "Ich gehe morgen ins Kino.",
      D: "Gehe ich morgen ins Kino.",
    },
    correct: "C",
  },
  {
    question: "Ergänzen Sie den Satz: '_________ kommst du nach Hause?'",
    options: {
      A: "Wann",
      B: "Warum",
      C: "Woher",
      D: "Wie",
    },
    correct: "A",
  },
  {
    question: "Bei welchem Satz steht das Verb an der richtigen Position?",
    options: {
      A: "Manchmal ich treffe meine Freunde in der Stadt.",
      B: "Ich treffe manchmal meine Freunde in der Stadt.",
      C: "Ich manchmal treffe meine Freunde in der Stadt.",
      D: "Treffe ich manchmal meine Freunde in der Stadt.",
    },
    correct: "B",
  },
  {
    question: "Was ist die richtige Satzstellung bei einer Frage?",
    options: {
      A: "Du gehst morgen in die Schule?",
      B: "Gehst du morgen in die Schule?",
      C: "Morgen du gehst in die Schule?",
      D: "Du morgen gehst in die Schule?",
    },
    correct: "B",
  },
  {
    question: "Welcher Satz hat die richtige Verbposition?",
    options: {
      A: "Er in Berlin wohnt.",
      B: "In Berlin er wohnt.",
      C: "Er wohnt in Berlin.",
      D: "Wohnt er in Berlin.",
    },
    correct: "C",
  },

  {
    question:
      "Ergänzen Sie den Satz mit der richtigen Verbposition: 'Ich gehe ins Kino, _____ mein Freund besucht mich.'",
    options: {
      A: "weil",
      B: "aber",
      C: "dass",
      D: "ob",
    },
    correct: "B",
  },
  {
    question: "Welche Verbposition ist in einem Nebensatz mit 'weil' korrekt?",
    options: {
      A: "Ich komme heute nicht, weil ich bin krank.",
      B: "Ich komme heute nicht, weil ich krank bin.",
      C: "Ich komme heute nicht, weil bin ich krank.",
      D: "Ich komme heute nicht, weil krank ich bin.",
    },
    correct: "B",
  },
  {
    question: "Welcher Satz hat die richtige Verbposition?",
    options: {
      A: "Nachdem ich gegessen hatte, ich ins Bett gegangen bin.",
      B: "Nachdem ich gegessen hatte, bin ich ins Bett gegangen.",
      C: "Nachdem ich hatte gegessen, ich bin ins Bett gegangen.",
      D: "Nachdem hatte ich gegessen, ins Bett bin ich gegangen.",
    },
    correct: "B",
  },
  {
    question: "In welchem Nebensatz steht das Verb an der richtigen Position?",
    options: {
      A: "Ich weiß nicht, wann kommt er nach Hause.",
      B: "Ich weiß nicht, wann er nach Hause kommt.",
      C: "Ich weiß nicht, wann er kommt nach Hause.",
      D: "Ich weiß nicht, wann nach Hause kommt er.",
    },
    correct: "B",
  },
  {
    question: "Welcher Satz ist richtig?",
    options: {
      A: "Obwohl es regnet, gehe ich spazieren.",
      B: "Obwohl es regnet, ich gehe spazieren.",
      C: "Obwohl regnet es, ich gehe spazieren.",
      D: "Obwohl regnet es, gehe ich spazieren.",
    },
    correct: "A",
  },
  {
    question: "Welche Reihenfolge ist korrekt für Zeitangaben und Ortsangaben?",
    options: {
      A: "Zeit - Ort - Art und Weise",
      B: "Art und Weise - Ort - Zeit",
      C: "Ort - Zeit - Art und Weise",
      D: "Zeit - Art und Weise - Ort",
    },
    correct: "A",
  },
  {
    question: "In welchem Satz ist die Position der Angaben korrekt?",
    options: {
      A: "Ich fahre mit dem Auto morgen nach Berlin.",
      B: "Ich fahre morgen nach Berlin mit dem Auto.",
      C: "Ich fahre mit dem Auto nach Berlin morgen.",
      D: "Ich fahre nach Berlin morgen mit dem Auto.",
    },
    correct: "B",
  },
  {
    question: "Welcher Satz hat die richtige Wortstellung?",
    options: {
      A: "Er geht heute Abend ins Theater mit seiner Freundin.",
      B: "Er geht mit seiner Freundin ins Theater heute Abend.",
      C: "Er geht heute Abend mit seiner Freundin ins Theater.",
      D: "Er geht ins Theater heute Abend mit seiner Freundin.",
    },
    correct: "C",
  },
  {
    question: "Welche Satzstellung ist im Deutschen üblich?",
    options: {
      A: "Subjekt - Prädikat - Temporale Angabe - Lokale Angabe",
      B: "Subjekt - Prädikat - Lokale Angabe - Temporale Angabe",
      C: "Temporale Angabe - Subjekt - Prädikat - Lokale Angabe",
      D: "Lokale Angabe - Prädikat - Subjekt - Temporale Angabe",
    },
    correct: "A",
  },
  {
    question:
      "Ergänzen Sie den Satz mit der richtigen Wortstellung: 'Die Konferenz findet ...'",
    options: {
      A: "morgen in Berlin um 9 Uhr statt.",
      B: "in Berlin morgen statt um 9 Uhr.",
      C: "statt morgen um 9 Uhr in Berlin.",
      D: "um 9 Uhr statt morgen in Berlin.",
    },
    correct: "A",
  },

  {
    question: "Welche Position hat die Modalangabe (Art und Weise) im Satz?",
    options: {
      A: "Am Anfang des Satzes",
      B: "Nach dem Subjekt",
      C: "Vor der Zeitangabe",
      D: "Vor der Ortsangabe",
    },
    correct: "D",
  },
  {
    question: "Welcher Satz hat die richtige Anordnung der Informationen?",
    options: {
      A: "Ich fahre nächste Woche nach Hamburg mit dem Zug gerne.",
      B: "Ich fahre gerne nächste Woche mit dem Zug nach Hamburg.",
      C: "Ich fahre gerne mit dem Zug nächste Woche nach Hamburg.",
      D: "Ich fahre mit dem Zug gerne nach Hamburg nächste Woche.",
    },
    correct: "B",
  },
  {
    question: "Was ist die richtige Position für eine kausale Angabe (Grund)?",
    options: {
      A: "Nach der Zeitangabe und vor der Ortsangabe",
      B: "Nach dem finiten Verb und vor der Zeitangabe",
      C: "Am Ende des Satzes, nach der Ortsangabe",
      D: "Es gibt keine feste Regel, hängt vom Kontext ab",
    },
    correct: "D",
  },
  {
    question:
      "Ergänzen Sie den Satz mit der richtigen Anordnung: 'Sie lernt ...'",
    options: {
      A: "in der Bibliothek fleißig jeden Tag Deutsch.",
      B: "fleißig jeden Tag in der Bibliothek Deutsch.",
      C: "jeden Tag fleißig Deutsch in der Bibliothek.",
      D: "Deutsch fleißig jeden Tag in der Bibliothek.",
    },
    correct: "C",
  },
  {
    question: "Welche Reihenfolge entspricht dem 'Tekamolo'-Prinzip?",
    options: {
      A: "Temporal - Kausal - Modal - Lokal",
      B: "Temporal - Lokal - Modal - Kausal",
      C: "Temporal - Kausal - Lokal - Modal",
      D: "Temporal - Modal - Kausal - Lokal",
    },
    correct: "A",
  },
  {
    question: "Was gehört zu den Ergänzungen, die direkt zum Verb gehören?",
    options: {
      A: "Zeitangaben",
      B: "Objekte",
      C: "Modalangaben",
      D: "Ortsangaben",
    },
    correct: "B",
  },
  {
    question:
      "In welchem Satz steht die verbgebundene Information an der richtigen Stelle?",
    options: {
      A: "Er hat gestern ein Buch seiner Schwester gegeben.",
      B: "Er hat seiner Schwester gestern ein Buch gegeben.",
      C: "Er hat gestern seiner Schwester ein Buch gegeben.",
      D: "Er hat ein Buch gestern seiner Schwester gegeben.",
    },
    correct: "B",
  },
  {
    question: "Welche Aussage über Objekte im Satz ist richtig?",
    options: {
      A: "Das Dativobjekt steht immer vor dem Akkusativobjekt.",
      B: "Das Akkusativobjekt steht immer vor dem Dativobjekt.",
      C: "Die Reihenfolge der Objekte ist immer frei wählbar.",
      D: "Pronomen stehen vor Nomen, unabhängig vom Kasus.",
    },
    correct: "D",
  },
  {
    question: "Welche Information steht am nächsten zum Verb?",
    options: {
      A: "Temporale Ergänzung",
      B: "Lokale Ergänzung",
      C: "Kausalangabe",
      D: "Negation mit 'nicht'",
    },
    correct: "D",
  },
  {
    question: "In welchem Satz steht die verbgebundene Information korrekt?",
    options: {
      A: "Sie erinnert sich an ihre Kindheit oft.",
      B: "Sie erinnert oft sich an ihre Kindheit.",
      C: "Sie erinnert sich oft an ihre Kindheit.",
      D: "Sie oft erinnert sich an ihre Kindheit.",
    },
    correct: "C",
  },

  {
    question: "Wo steht 'nicht' bei der Negation eines Verbs?",
    options: {
      A: "Direkt vor dem Verb",
      B: "Am Ende des Satzes",
      C: "Nach dem Subjekt",
      D: "Vor dem Objekt",
    },
    correct: "B",
  },
  {
    question: "Wo steht 'nicht' bei der Negation eines Nomens?",
    options: {
      A: "Vor dem Artikel",
      B: "Nach dem Artikel",
      C: "Nach dem Nomen",
      D: "Direkt vor dem Nomen (nach dem Artikel)",
    },
    correct: "D",
  },
  {
    question: "Wo steht 'nicht' im folgenden Satz? 'Ich komme ___ zur Party.'",
    options: {
      A: "Direkt nach dem Verb",
      B: "Am Ende des Satzes",
      C: "Vor der Präposition 'zur'",
      D: "Nach 'zur Party'",
    },
    correct: "C",
  },
  {
    question: "Welcher Satz zeigt die korrekte Position von 'nicht'?",
    options: {
      A: "Ich habe nicht das Buch gelesen.",
      B: "Ich habe das Buch nicht gelesen.",
      C: "Ich nicht habe das Buch gelesen.",
      D: "Ich habe das nicht Buch gelesen.",
    },
    correct: "B",
  },
  {
    question:
      "Welche Regel gilt für die Position von 'nicht' bei trennbaren Verben im Hauptsatz?",
    options: {
      A: "Nicht steht vor dem abgetrennten Präfix.",
      B: "Nicht steht direkt nach dem konjugierten Verbteil.",
      C: "Nicht steht immer direkt vor dem Objekt.",
      D: "Nicht steht immer am Ende des Satzes.",
    },
    correct: "A",
  },

  {
    question:
      "Wo steht 'auch' im folgenden Satz? 'Sie hat ___ ein neues Auto gekauft.'",
    options: {
      A: "Nach dem Hilfsverb",
      B: "Vor dem Objekt",
      C: "Nach dem Objekt",
      D: "Am Ende des Satzes",
    },
    correct: "A",
  },
  {
    question: "Wie lautet die Regel für die Position von Fokuspartikeln?",
    options: {
      A: "Sie stehen immer am Anfang des Satzes.",
      B: "Sie stehen meistens direkt vor dem Wort, das sie betonen.",
      C: "Sie stehen immer am Ende des Satzes.",
      D: "Sie stehen immer nach dem Verb.",
    },
    correct: "B",
  },
  {
    question: "Welcher Satz zeigt die korrekte Position von 'nur'?",
    options: {
      A: "Nur er kommt zur Party.",
      B: "Er nur kommt zur Party.",
      C: "Er kommt nur zur Party.",
      D: "Er kommt zur nur Party.",
    },
    correct: "A",
  },
  {
    question:
      "Welche Position hat 'sogar' im folgenden Satz? 'Er hat ___ seine Großmutter zum Konzert eingeladen.'",
    options: {
      A: "Nach dem Hilfsverb",
      B: "Vor dem Objekt 'seine Großmutter'",
      C: "Nach dem Objekt 'seine Großmutter'",
      D: "Vor dem Infinitiv 'eingeladen'",
    },
    correct: "B",
  },
  {
    question:
      "In welchem Satz steht die Fokuspartikel 'auch' an der richtigen Position?",
    options: {
      A: "Auch ich habe das Buch gelesen.",
      B: "Ich auch habe das Buch gelesen.",
      C: "Ich habe auch das Buch gelesen.",
      D: "Ich habe das Buch auch gelesen.",
    },
    correct: "A",
  },
  {
    question: "Was steht typischerweise am Anfang eines deutschen Satzes?",
    options: {
      A: "Die wichtigste neue Information",
      B: "Die bereits bekannte Information",
      C: "Das Verb",
      D: "Das Objekt",
    },
    correct: "B",
  },
  {
    question: "Was ist im Deutschen die 'Topikposition'?",
    options: {
      A: "Die erste Position im Satz",
      B: "Die Position direkt nach dem Verb",
      C: "Die letzte Position im Satz",
      D: "Die Position vor dem Nebensatz",
    },
    correct: "A",
  },
  {
    question: "Welche Funktion hat die erste Position im deutschen Satz oft?",
    options: {
      A: "Sie betont die wichtigste Information.",
      B: "Sie verbindet den Satz mit dem vorherigen Kontext.",
      C: "Sie enthält immer das Subjekt.",
      D: "Sie enthält immer eine Zeitangabe.",
    },
    correct: "B",
  },
  {
    question: "Was bezeichnet man als 'Rhema' in der Informationsstruktur?",
    options: {
      A: "Die bekannte Information",
      B: "Die neue, wichtige Information",
      C: "Das Verb",
      D: "Das Subjekt",
    },
    correct: "B",
  },
  {
    question:
      "Welche Position im Satz wird oft für die wichtigste neue Information verwendet?",
    options: {
      A: "Die erste Position (Vorfeld)",
      B: "Direkt nach dem Verb",
      C: "Die letzte Position",
      D: "Die Position direkt vor dem Verb",
    },
    correct: "C",
  },
  {
    question:
      "Wie lautet die Konjunktiv-II-Form von 'kommen' in der 1. Person Singular?",
    options: {
      A: "ich komme",
      B: "ich kam",
      C: "ich käme",
      D: "ich würde kommen",
    },
    correct: "C",
  },
  {
    question: "Welche Form des Verbs 'gehen' im Konjunktiv II ist korrekt?",
    options: {
      A: "ich gehe",
      B: "ich ginge",
      C: "ich ging",
      D: "ich gehte",
    },
    correct: "B",
  },
  {
    question: "Wie bildet man den Konjunktiv II von regelmäßigen Verben?",
    options: {
      A: "Präteritumstamm + Umlaut + Konjunktivendungen",
      B: "Präteritumstamm + Konjunktivendungen",
      C: "Infinitiv + würde",
      D: "Präsensstamm + Konjunktivendungen",
    },
    correct: "B",
  },
  {
    question: "Welche Konjunktiv-II-Form ist korrekt?",
    options: {
      A: "ich habte",
      B: "ich hätte",
      C: "ich habe",
      D: "ich hatte",
    },
    correct: "B",
  },
  {
    question:
      "Bei welchem Verb verwendet man in der gesprochenen Sprache meistens die würde-Form statt der einfachen Konjunktiv-II-Form?",
    options: {
      A: "sein",
      B: "haben",
      C: "können",
      D: "arbeiten",
    },
    correct: "D",
  },
  {
    question: "Wie bildet man den Konjunktiv II der Vergangenheit?",
    options: {
      A: "hätte + Partizip II",
      B: "würde + Partizip II",
      C: "wäre + Partizip II",
      D: "hatte + Partizip II",
    },
    correct: "A",
  },
  {
    question: "Welche Form ist der Konjunktiv II Vergangenheit von 'gehen'?",
    options: {
      A: "ich ginge",
      B: "ich wäre gegangen",
      C: "ich würde gehen",
      D: "ich ging",
    },
    correct: "B",
  },
  {
    question: "Welche Aussage zum Konjunktiv II der Vergangenheit ist richtig?",
    options: {
      A: "Er wird mit 'würde' + Infinitiv gebildet.",
      B: "Er wird mit dem Konjunktiv II von 'haben' oder 'sein' + Partizip II gebildet.",
      C: "Er wird mit dem Präteritum des Verbs gebildet.",
      D: "Er wird mit dem Konjunktiv I des Hilfsverbs + Partizip II gebildet.",
    },
    correct: "B",
  },
  {
    question: "Wie lautet der Konjunktiv II der Vergangenheit von 'arbeiten'?",
    options: {
      A: "ich würde arbeiten",
      B: "ich arbeitete",
      C: "ich hätte gearbeitet",
      D: "ich habe gearbeitet",
    },
    correct: "C",
  },
  {
    question:
      "Welche Form ist korrekt für den Konjunktiv II der Vergangenheit von 'einschlafen'?",
    options: {
      A: "ich würde einschlafen",
      B: "ich schliefe ein",
      C: "ich wäre eingeschlafen",
      D: "ich schlief ein",
    },
    correct: "C",
  },
  {
    question: "Welche Form drückt eine höfliche Bitte aus?",
    options: {
      A: "Können Sie mir helfen?",
      B: "Könnten Sie mir helfen?",
      C: "Sie müssen mir helfen.",
      D: "Helfen Sie mir.",
    },
    correct: "B",
  },
  {
    question: "Wie formuliert man einen höflichen Vorschlag mit Konjunktiv II?",
    options: {
      A: "Wir gehen ins Kino.",
      B: "Wir müssen ins Kino gehen.",
      C: "Wir könnten ins Kino gehen.",
      D: "Wir sind ins Kino gegangen.",
    },
    correct: "C",
  },
  {
    question: "Welcher Satz drückt einen Ratschlag mit Konjunktiv II aus?",
    options: {
      A: "Du musst mehr lernen.",
      B: "Du lernst mehr.",
      C: "Du solltest mehr lernen.",
      D: "Du hast mehr gelernt.",
    },
    correct: "C",
  },
  {
    question: "Wie formuliert man einen höflichen Vorwurf mit Konjunktiv II?",
    options: {
      A: "Du hast es mir nicht gesagt!",
      B: "Du hättest es mir sagen können!",
      C: "Sag es mir das nächste Mal!",
      D: "Warum sagst du es mir nicht?",
    },
    correct: "B",
  },
  {
    question: "Welcher Satz enthält einen höflichen Ratschlag?",
    options: {
      A: "Du musst sofort zum Arzt gehen.",
      B: "Geh sofort zum Arzt!",
      C: "Es wäre besser, wenn du zum Arzt gehen würdest.",
      D: "Warum gehst du nicht zum Arzt?",
    },
    correct: "C",
  },
  {
    question: "Wie formuliert man einen irrealen Wunsch in der Gegenwart?",
    options: {
      A: "Ich wünsche mir, dass ich reich bin.",
      B: "Wenn ich doch reich wäre!",
      C: "Ich möchte reich sein.",
      D: "Ich will reich sein.",
    },
    correct: "B",
  },
  {
    question:
      "Welcher Satz drückt einen irrealen Wunsch in der Vergangenheit aus?",
    options: {
      A: "Ich wünschte, ich hätte mehr Zeit gehabt.",
      B: "Ich wünsche mir mehr Zeit.",
      C: "Wenn ich Zeit habe, komme ich mit.",
      D: "Ich hatte zu wenig Zeit.",
    },
    correct: "A",
  },
  {
    question: "Wie formuliert man eine irreale Bedingung in der Gegenwart?",
    options: {
      A: "Wenn ich Zeit habe, komme ich mit.",
      B: "Wenn ich Zeit hätte, würde ich mitkommen.",
      C: "Als ich Zeit hatte, kam ich mit.",
      D: "Weil ich keine Zeit habe, komme ich nicht mit.",
    },
    correct: "B",
  },
  {
    question:
      "Welcher Satz enthält eine irreale Bedingung in der Vergangenheit?",
    options: {
      A: "Wenn er pünktlich kommt, gehen wir zusammen los.",
      B: "Wenn er pünktlich gekommen wäre, wären wir zusammen losgegangen.",
      C: "Weil er pünktlich kam, gingen wir zusammen los.",
      D: "Obwohl er pünktlich kam, gingen wir nicht zusammen los.",
    },
    correct: "B",
  },
  {
    question: "Welche Konjunktion kann man bei irrealen Wünschen verwenden?",
    options: {
      A: "als",
      B: "ob",
      C: "wenn",
      D: "weil",
    },
    correct: "C",
  },
  {
    question: "Mit welcher Struktur bildet man einen irrealen Vergleich?",
    options: {
      A: "so + Adjektiv + wie",
      B: "als ob + Konjunktiv II",
      C: "als + Komparativ",
      D: "wie wenn + Indikativ",
    },
    correct: "B",
  },
  {
    question: "Welcher Satz enthält einen irrealen Vergleich?",
    options: {
      A: "Er ist so groß wie sein Vater.",
      B: "Er ist größer als sein Bruder.",
      C: "Er tut so, als ob er der Chef wäre.",
      D: "Er ist kleiner als erwartet.",
    },
    correct: "C",
  },
  {
    question: "Wie formuliert man eine irreale Folge?",
    options: {
      A: "Er ist so müde, dass er einschläft.",
      B: "Er ist so müde, dass er einschlafen würde.",
      C: "Weil er müde ist, schläft er ein.",
      D: "Obwohl er müde ist, schläft er nicht ein.",
    },
    correct: "B",
  },
  {
    question: "Welcher Satz enthält eine irreale Folge?",
    options: {
      A: "Er ist zu müde, um Auto zu fahren.",
      B: "Er ist so müde, dass er nach Hause geht.",
      C: "Er war zu müde, als dass er hätte Auto fahren können.",
      D: "Weil er müde ist, fährt er kein Auto.",
    },
    correct: "C",
  },
  {
    question: "Welche Konstruktion verwendet man für irreale Folgen?",
    options: {
      A: "so ... dass + Indikativ",
      B: "zu ... als dass + Konjunktiv II",
      C: "so ... wie",
      D: "weil ... deshalb",
    },
    correct: "B",
  },
  {
    question:
      "Welche Präposition kann sowohl vor als auch nach dem Substantiv stehen?",
    options: {
      A: "mit",
      B: "für",
      C: "entlang",
      D: "ohne",
    },
    correct: "C",
  },
  {
    question: "Welche Präposition steht in der Regel nach dem Substantiv?",
    options: {
      A: "nach",
      B: "gegenüber",
      C: "neben",
      D: "hinter",
    },
    correct: "B",
  },
  {
    question: "Welcher Satz verwendet die Präposition richtig?",
    options: {
      A: "Entlang dem Fluss sind viele Bäume.",
      B: "Dem Fluss entlang sind viele Bäume.",
      C: "Beide sind korrekt.",
      D: "Keine ist korrekt.",
    },
    correct: "B",
  },
  {
    question:
      "Welche Präposition kann sowohl vor als auch nach dem Substantiv stehen?",
    options: {
      A: "wegen",
      B: "zufolge",
      C: "durch",
      D: "seit",
    },
    correct: "B",
  },
  {
    question: "Welcher Satz ist korrekt?",
    options: {
      A: "Gegenüber dem Bahnhof ist ein Hotel.",
      B: "Dem Bahnhof gegenüber ist ein Hotel.",
      C: "Beide sind korrekt.",
      D: "Keine ist korrekt.",
    },
    correct: "B",
  },
  {
    question: "Was sind 'sprechende Präpositionen'?",
    options: {
      A: "Präpositionen, die man nur in der gesprochenen Sprache verwendet",
      B: "Präpositionen, deren Bedeutung aus ihrer Form erschlossen werden kann",
      C: "Präpositionen, die Sprechakte bezeichnen",
      D: "Präpositionen, die aus Verben entstanden sind",
    },
    correct: "B",
  },
  {
    question: "Welches ist ein Beispiel für eine 'sprechende Präposition'?",
    options: {
      A: "mit",
      B: "für",
      C: "angesichts",
      D: "zu",
    },
    correct: "C",
  },
  {
    question: "Welche Präposition ist komplex und 'sprechend'?",
    options: {
      A: "in Bezug auf",
      B: "mit",
      C: "zu",
      D: "um",
    },
    correct: "A",
  },
  {
    question: "Welcher Satz enthält eine komplexe 'sprechende Präposition'?",
    options: {
      A: "Ich warte auf dich.",
      B: "Ich komme mit dir.",
      C: "Im Hinblick auf die Kosten müssen wir sparen.",
      D: "Ich fahre nach Berlin.",
    },
    correct: "C",
  },
  {
    question: "Aus welchen Wortarten entstehen oft komplexe Präpositionen?",
    options: {
      A: "Verben und Adverbien",
      B: "Nomen und Präpositionen",
      C: "Adjektive und Adverbien",
      D: "Pronomen und Verben",
    },
    correct: "B",
  },
  {
    question: "Welche Präposition verwendet man für Oberflächenkontakt?",
    options: {
      A: "in",
      B: "an",
      C: "auf",
      D: "über",
    },
    correct: "C",
  },
  {
    question: "Welche Präposition verwendet man für 'innerhalb eines Raumes'?",
    options: {
      A: "an",
      B: "auf",
      C: "in",
      D: "über",
    },
    correct: "C",
  },
  {
    question: "Welcher Satz verwendet die richtige Präposition?",
    options: {
      A: "Das Bild hängt auf der Wand.",
      B: "Das Bild hängt an der Wand.",
      C: "Das Bild hängt in der Wand.",
      D: "Das Bild hängt über der Wand.",
    },
    correct: "B",
  },
  {
    question:
      "Welche Präposition verwendet man für 'höher als etwas, ohne Kontakt'?",
    options: {
      A: "auf",
      B: "an",
      C: "über",
      D: "in",
    },
    correct: "C",
  },
  {
    question: "Welche zeitliche Bedeutung hat die Präposition 'vor'?",
    options: {
      A: "gleichzeitig",
      B: "nachzeitig",
      C: "vorzeitig",
      D: "dauerhaft",
    },
    correct: "C",
  },
  {
    question: "Welche Präposition drückt eine Herkunft aus?",
    options: {
      A: "zu",
      B: "von",
      C: "aus",
      D: "nach",
    },
    correct: "C",
  },
  {
    question: "Welche Präposition drückt ein Ziel aus?",
    options: {
      A: "von",
      B: "zu",
      C: "aus",
      D: "bei",
    },
    correct: "B",
  },
  {
    question: "Welcher Satz verwendet die Präposition 'mit' richtig?",
    options: {
      A: "Er fährt mit dem Auto.",
      B: "Er fährt bei dem Auto.",
      C: "Er fährt zu dem Auto.",
      D: "Er fährt aus dem Auto.",
    },
    correct: "A",
  },
  {
    question:
      "Welche Präposition verwendet man für 'ungefähr zu einer bestimmten Zeit'?",
    options: {
      A: "zu",
      B: "gegen",
      C: "um",
      D: "bei",
    },
    correct: "C",
  },
  {
    question: "Welcher Satz verwendet die Präposition 'nach' richtig?",
    options: {
      A: "Nach der Schule gehe ich nach Hause.",
      B: "Nach der Schule gehe ich zu Hause.",
      C: "Nach der Schule gehe ich auf Hause.",
      D: "Nach der Schule gehe ich in Hause.",
    },
    correct: "A",
  },
  {
    question: "Welches Verb nimmt ein Akkusativobjekt?",
    options: {
      A: "helfen",
      B: "danken",
      C: "kaufen",
      D: "gratulieren",
    },
    correct: "C",
  },
  {
    question: "Welches Verb nimmt ein Dativobjekt?",
    options: {
      A: "besuchen",
      B: "sehen",
      C: "helfen",
      D: "lieben",
    },
    correct: "C",
  },
  {
    question: "Welcher Satz ist grammatikalisch korrekt?",
    options: {
      A: "Ich helfe dir.",
      B: "Ich helfe dich.",
      C: "Ich helfe du.",
      D: "Ich helfe deiner.",
    },
    correct: "A",
  },
  {
    question:
      "Welches Verb kann sowohl mit Dativ- als auch mit Akkusativobjekt verwendet werden?",
    options: {
      A: "kaufen",
      B: "schenken",
      C: "sehen",
      D: "lesen",
    },
    correct: "B",
  },
  {
    question: "Welcher Satz verwendet die Objekte im richtigen Kasus?",
    options: {
      A: "Ich schenke meinem Bruder einen Kugelschreiber.",
      B: "Ich schenke meinen Bruder einen Kugelschreiber.",
      C: "Ich schenke meinem Bruder ein Kugelschreiber.",
      D: "Ich schenke mein Bruder einen Kugelschreiber.",
    },
    correct: "A",
  },
  {
    question: "Welches Verb nimmt ein Genitivobjekt?",
    options: {
      A: "denken",
      B: "gedenken",
      C: "glauben",
      D: "meinen",
    },
    correct: "B",
  },
  {
    question: "Welcher Satz verwendet das Genitivobjekt korrekt?",
    options: {
      A: "Wir gedenken die Opfer.",
      B: "Wir gedenken den Opfern.",
      C: "Wir gedenken der Opfer.",
      D: "Wir gedenken die Opfern.",
    },
    correct: "C",
  },
  {
    question: "Welches Verb wird heute kaum noch mit Genitiv verwendet?",
    options: {
      A: "sich erinnern",
      B: "bedürfen",
      C: "gedenken",
      D: "sich schämen",
    },
    correct: "A",
  },
  {
    question:
      "Wie lautet der Satz 'Sie beschuldigt ihn des Diebstahls' mit einem anderen Kasus?",
    options: {
      A: "Sie beschuldigt ihn für den Diebstahl.",
      B: "Sie beschuldigt ihn wegen des Diebstahls.",
      C: "Sie beschuldigt ihn mit dem Diebstahl.",
      D: "Sie beschuldigt ihn über den Diebstahl.",
    },
    correct: "B",
  },
  {
    question: "Welches Verb nimmt kein Genitivobjekt?",
    options: {
      A: "sich erinnern (heute mit 'an' + Akkusativ)",
      B: "sich bedienen",
      C: "sich bemächtigen",
      D: "sich besinnen",
    },
    correct: "A",
  },
  {
    question:
      "Welches Verb wird mit der Präposition 'auf' + Akkusativ verwendet?",
    options: {
      A: "denken an",
      B: "warten auf",
      C: "sich interessieren für",
      D: "achten an",
    },
    correct: "B",
  },
  {
    question: "Welches Substantiv wird mit der Präposition 'auf' verwendet?",
    options: {
      A: "Interesse an",
      B: "Antwort auf",
      C: "Angst vor",
      D: "Ärger über",
    },
    correct: "B",
  },
  {
    question:
      "Welches Adjektiv wird mit der Präposition 'auf' + Akkusativ verwendet?",
    options: {
      A: "interessiert an",
      B: "stolz auf",
      C: "zufrieden mit",
      D: "froh über",
    },
    correct: "B",
  },
  {
    question: "Welcher Satz verwendet die richtige Präposition?",
    options: {
      A: "Ich warte für den Bus.",
      B: "Ich warte auf den Bus.",
      C: "Ich warte an den Bus.",
      D: "Ich warte zu den Bus.",
    },
    correct: "B",
  },
  {
    question:
      "Welcher Satz verwendet die richtige Präposition mit dem Substantiv?",
    options: {
      A: "Ich habe Angst vor Spinnen.",
      B: "Ich habe Angst an Spinnen.",
      C: "Ich habe Angst über Spinnen.",
      D: "Ich habe Angst von Spinnen.",
    },
    correct: "A",
  },
  {
    question: "Welches Verb wird mit 'für' + Akkusativ verwendet?",
    options: {
      A: "warten für",
      B: "sich interessieren für",
      C: "denken für",
      D: "achten für",
    },
    correct: "B",
  },
  {
    question: "Welches Adjektiv wird mit 'über' + Akkusativ verwendet?",
    options: {
      A: "froh über",
      B: "zufrieden über",
      C: "interessiert über",
      D: "stolz über",
    },
    correct: "A",
  },
  {
    question: "Welches Substantiv wird mit 'gegen' + Akkusativ verwendet?",
    options: {
      A: "Kampf gegen",
      B: "Angst gegen",
      C: "Wut gegen",
      D: "Interesse gegen",
    },
    correct: "A",
  },
  {
    question: "Welcher Satz verwendet die richtige Präposition mit Akkusativ?",
    options: {
      A: "Ich ärgere mich auf meinen Chef.",
      B: "Ich ärgere mich über meinen Chef.",
      C: "Ich ärgere mich für meinen Chef.",
      D: "Ich ärgere mich mit meinen Chef.",
    },
    correct: "B",
  },
  {
    question: "Welcher Satz verwendet die richtige Präposition mit Akkusativ?",
    options: {
      A: "Sie ist böse über mich.",
      B: "Sie ist böse mit mir.",
      C: "Sie ist böse auf mich.",
      D: "Sie ist böse für mich.",
    },
    correct: "C",
  },
  {
    question: "Welches Verb wird mit 'mit' + Dativ verwendet?",
    options: {
      A: "kämpfen mit",
      B: "warten mit",
      C: "denken mit",
      D: "sprechen mit",
    },
    correct: "D",
  },
  {
    question: "Welches Adjektiv wird mit 'von' + Dativ verwendet?",
    options: {
      A: "abhängig von",
      B: "interessiert von",
      C: "zufrieden von",
      D: "stolz von",
    },
    correct: "A",
  },
  {
    question: "Welches Substantiv wird mit 'zu' + Dativ verwendet?",
    options: {
      A: "Liebe zu",
      B: "Angst zu",
      C: "Interesse zu",
      D: "Freude zu",
    },
    correct: "A",
  },
  {
    question: "Welcher Satz verwendet die richtige Präposition mit Dativ?",
    options: {
      A: "Ich träume von einem neuen Auto.",
      B: "Ich träume mit einem neuen Auto.",
      C: "Ich träume für ein neues Auto.",
      D: "Ich träume über ein neues Auto.",
    },
    correct: "A",
  },
  {
    question: "Welcher Satz verwendet die richtige Präposition mit Dativ?",
    options: {
      A: "Sie ist zufrieden für der Arbeit.",
      B: "Sie ist zufrieden über die Arbeit.",
      C: "Sie ist zufrieden mit der Arbeit.",
      D: "Sie ist zufrieden von der Arbeit.",
    },
    correct: "C",
  },
  {
    question: "Wie bildet man das Perfekt?",
    options: {
      A: "haben/sein + Infinitiv",
      B: "haben/sein + Partizip II",
      C: "werden + Infinitiv",
      D: "werden + Partizip II",
    },
    correct: "B",
  },
  {
    question: "Welche Verben bilden das Perfekt mit 'sein'?",
    options: {
      A: "Transitive Verben",
      B: "Reflexive Verben",
      C: "Verben der Bewegung und Zustandsveränderung",
      D: "Verben mit Dativobjekt",
    },
    correct: "C",
  },
  {
    question: "Wie bildet man das Plusquamperfekt?",
    options: {
      A: "hatte/war + Partizip II",
      B: "habe/bin + Partizip II",
      C: "werde + Partizip II",
      D: "hatte/war + Infinitiv",
    },
    correct: "A",
  },
  {
    question: "Welcher Satz steht im Präteritum?",
    options: {
      A: "Er hat ein Buch gelesen.",
      B: "Er liest ein Buch.",
      C: "Er las ein Buch.",
      D: "Er wird ein Buch lesen.",
    },
    correct: "C",
  },
  {
    question: "Welche Aussage zum Präteritum ist richtig?",
    options: {
      A: "Es wird hauptsächlich in der gesprochenen Sprache verwendet.",
      B: "Es wird hauptsächlich in der geschriebenen Sprache verwendet.",
      C: "Es wird nur bei regelmäßigen Verben verwendet.",
      D: "Es wird nur bei unregelmäßigen Verben verwendet.",
    },
    correct: "B",
  },
  {
    question:
      "Wie bildet man das Perfekt von Modalverben, wenn sie mit einem Infinitiv stehen?",
    options: {
      A: "haben + Modalverb im Partizip II + Infinitiv",
      B: "haben + Infinitiv + Modalverb im Infinitiv",
      C: "haben + Infinitiv des Vollverbs + Modalverb im Infinitiv",
      D: "haben + Modalverb im Infinitiv + Infinitiv des Vollverbs",
    },
    correct: "C",
  },
  {
    question: "Wie lautet der Satz 'Ich musste arbeiten' im Perfekt?",
    options: {
      A: "Ich habe arbeiten müssen.",
      B: "Ich habe gemusst arbeiten.",
      C: "Ich habe müssen arbeiten.",
      D: "Ich habe gemusst zu arbeiten.",
    },
    correct: "A",
  },
  {
    question:
      "Wie bildet man das Perfekt von 'sehen', wenn es mit einem Infinitiv steht?",
    options: {
      A: "haben + gesehen + Infinitiv",
      B: "haben + Infinitiv + gesehen",
      C: "haben + Infinitiv + sehen",
      D: "haben + sehen + Infinitiv",
    },
    correct: "A",
  },
  {
    question: "Welcher Satz zeigt die richtige Perfektform eines Modalverbs?",
    options: {
      A: "Ich habe nicht kommen können.",
      B: "Ich habe nicht gekonnt kommen.",
      C: "Ich habe nicht kommen gekonnt.",
      D: "Ich habe nicht könnt kommen.",
    },
    correct: "A",
  },
  {
    question: "Welcher Satz zeigt die korrekte Perfektform mit 'lassen'?",
    options: {
      A: "Ich habe das Auto reparieren lassen.",
      B: "Ich habe das Auto gelassen reparieren.",
      C: "Ich habe lassen das Auto reparieren.",
      D: "Ich habe gelassen das Auto reparieren.",
    },
    correct: "A",
  },
  {
    question:
      "Welche Vergangenheitsform verwendet man hauptsächlich in der gesprochenen Sprache?",
    options: {
      A: "Präteritum",
      B: "Perfekt",
      C: "Plusquamperfekt",
      D: "Futur II",
    },
    correct: "B",
  },
  {
    question:
      "Welche Verben werden auch in der gesprochenen Sprache oft im Präteritum verwendet?",
    options: {
      A: "Vollverben",
      B: "Reflexive Verben",
      C: "Sein, haben, Modalverben",
      D: "Verben der Bewegung",
    },
    correct: "C",
  },
  {
    question: "Wann verwendet man das Plusquamperfekt?",
    options: {
      A: "Für Handlungen in der Vergangenheit, die vor anderen Handlungen in der Vergangenheit stattfanden",
      B: "Für alle Handlungen in der Vergangenheit",
      C: "Für Handlungen in der Zukunft",
      D: "Für regelmäßig wiederkehrende Handlungen in der Vergangenheit",
    },
    correct: "A",
  },
  {
    question: "Welcher Satz zeigt den korrekten Gebrauch des Plusquamperfekts?",
    options: {
      A: "Nachdem ich gefrühstückt habe, bin ich zur Arbeit gegangen.",
      B: "Nachdem ich gefrühstückt hatte, bin ich zur Arbeit gegangen.",
      C: "Nachdem ich frühstücke, bin ich zur Arbeit gegangen.",
      D: "Nachdem ich frühstückte, bin ich zur Arbeit gegangen.",
    },
    correct: "B",
  },
  {
    question:
      "Welcher zeitliche Unterschied besteht zwischen Präteritum und Perfekt?",
    options: {
      A: "Das Präteritum drückt eine weiter zurückliegende Handlung aus als das Perfekt.",
      B: "Das Perfekt drückt eine weiter zurückliegende Handlung aus als das Präteritum.",
      C: "Es gibt keinen zeitlichen Unterschied, nur einen stilistischen.",
      D: "Das Präteritum drückt eine zukünftige Handlung aus, das Perfekt eine vergangene.",
    },
    correct: "C",
  },
  {
    question: "Wie bildet man das Futur I?",
    options: {
      A: "werden + Partizip II",
      B: "werden + Infinitiv",
      C: "haben/sein + Infinitiv",
      D: "haben/sein + Partizip II",
    },
    correct: "B",
  },
  {
    question: "Welche Funktion kann das Futur I haben?",
    options: {
      A: "Nur Ausdruck zukünftiger Handlungen",
      B: "Nur Ausdruck von Vermutungen über die Gegenwart",
      C: "Sowohl Ausdruck zukünftiger Handlungen als auch von Vermutungen über die Gegenwart",
      D: "Ausdruck vergangener Handlungen",
    },
    correct: "C",
  },
  {
    question: "Welcher Satz drückt eine Vermutung über die Gegenwart aus?",
    options: {
      A: "Morgen wird es regnen.",
      B: "Er wird jetzt zu Hause sein.",
      C: "Ich werde morgen kommen.",
      D: "Sie werden nächstes Jahr heiraten.",
    },
    correct: "B",
  },
  {
    question: "Wie bildet man das Futur II?",
    options: {
      A: "werden + Infinitiv Perfekt (haben/sein + Partizip II)",
      B: "werden + Partizip II",
      C: "haben/sein + werden + Partizip II",
      D: "werden + haben/sein + Infinitiv",
    },
    correct: "A",
  },
  {
    question: "Wie bildet man das Passiv im Präsens?",
    options: {
      A: "haben + Partizip II",
      B: "werden + Partizip II",
      C: "sein + Partizip II",
      D: "wurde + Partizip II",
    },
    correct: "B",
  },
  {
    question: "Wie lautet der Satz 'Man baut ein Haus' im Passiv?",
    options: {
      A: "Ein Haus wird gebaut.",
      B: "Ein Haus ist gebaut.",
      C: "Ein Haus wurde gebaut.",
      D: "Ein Haus baut sich.",
    },
    correct: "A",
  },
  {
    question: "Wie bildet man das Perfekt im Passiv?",
    options: {
      A: "wurde + Partizip II",
      B: "ist + Partizip II + worden",
      C: "hat + Partizip II + werden",
      D: "ist + Partizip II",
    },
    correct: "B",
  },
  {
    question: "Welche Passivform steht im Präteritum?",
    options: {
      A: "Das Fenster wird geöffnet.",
      B: "Das Fenster ist geöffnet worden.",
      C: "Das Fenster wurde geöffnet.",
      D: "Das Fenster wird geöffnet worden sein.",
    },
    correct: "C",
  },
  {
    question:
      "Wie lautet das Futur I im Passiv von 'Man wird den Brief schreiben'?",
    options: {
      A: "Der Brief wird geschrieben.",
      B: "Der Brief wird geschrieben werden.",
      C: "Der Brief ist geschrieben worden.",
      D: "Der Brief wurde geschrieben.",
    },
    correct: "B",
  },
  {
    question: "Wie bildet man das Passiv mit Modalverb im Präsens?",
    options: {
      A: "Modalverb + Partizip II",
      B: "Modalverb + Partizip II + werden",
      C: "Modalverb + Infinitiv + werden",
      D: "werden + Modalverb + Partizip II",
    },
    correct: "B",
  },
  {
    question:
      "Wie lautet der Satz 'Man muss das Formular ausfüllen' im Passiv?",
    options: {
      A: "Das Formular muss ausgefüllt.",
      B: "Das Formular muss ausgefüllt werden.",
      C: "Das Formular wird ausgefüllt müssen.",
      D: "Das Formular ist auszufüllen.",
    },
    correct: "B",
  },
  {
    question: "Wie bildet man das Perfekt im Passiv mit Modalverb?",
    options: {
      A: "hat + Partizip II + werden + Modalverb (Infinitiv)",
      B: "Modalverb (Präteritum) + Partizip II + werden",
      C: "Modalverb (Perfekt) + Partizip II",
      D: "hat + Modalverb (Infinitiv) + Partizip II + werden müssen",
    },
    correct: "A",
  },
  {
    question: "Welcher Satz steht im Passiv mit Modalverb im Präteritum?",
    options: {
      A: "Das Auto muss repariert werden.",
      B: "Das Auto musste repariert werden.",
      C: "Das Auto hat repariert werden müssen.",
      D: "Das Auto ist repariert worden.",
    },
    correct: "B",
  },
  {
    question:
      "Wie lautet der Satz 'Man wird das Problem lösen können' im Passiv?",
    options: {
      A: "Das Problem wird gelöst können werden.",
      B: "Das Problem kann gelöst werden.",
      C: "Das Problem wird gelöst werden können.",
      D: "Das Problem wird können gelöst werden.",
    },
    correct: "C",
  },
  {
    question: "Welche Konstruktion ist eine Alternative zum Passiv?",
    options: {
      A: "man + Aktiv",
      B: "sein + Infinitiv",
      C: "haben + Infinitiv",
      D: "werden + Infinitiv",
    },
    correct: "A",
  },
  {
    question:
      "Welcher Satz ist eine Alternative zum Passiv 'Das Buch wird gelesen'?",
    options: {
      A: "Man liest das Buch.",
      B: "Das Buch liest sich.",
      C: "Das Buch liest.",
      D: "Das Buch wird von jemandem gelesen.",
    },
    correct: "A",
  },
  {
    question:
      "Welche Konstruktion mit 'lassen' kann als Alternative zum Passiv verwendet werden?",
    options: {
      A: "lassen + sich + Infinitiv",
      B: "lassen + Partizip II",
      C: "sich + lassen + Infinitiv",
      D: "werden + lassen + Infinitiv",
    },
    correct: "C",
  },
  {
    question:
      "Welcher Satz verwendet eine '-bar'-Konstruktion als Alternative zum Passiv?",
    options: {
      A: "Der Text ist lesbar.",
      B: "Der Text wird gelesen.",
      C: "Man liest den Text.",
      D: "Der Text lässt sich lesen.",
    },
    correct: "A",
  },
  {
    question:
      "Welche Konstruktion mit 'sein' kann als Alternative zum Passiv verwendet werden?",
    options: {
      A: "sein + zu + Infinitiv",
      B: "sein + Partizip II (mit Zustandsbedeutung)",
      C: "sein + Infinitiv",
      D: "sein + worden + Infinitiv",
    },
    correct: "A",
  },
  {
    question: "Welche Form hat Passivbedeutung?",
    options: {
      A: "sein + Infinitiv",
      B: "sein + zu + Infinitiv",
      C: "sein + am + Infinitiv",
      D: "sein + Partizip I",
    },
    correct: "B",
  },
  {
    question:
      "Welcher Satz hat Passivbedeutung, ohne ein grammatisches Passiv zu sein?",
    options: {
      A: "Das Buch wird gelesen.",
      B: "Das Buch liest sich gut.",
      C: "Man liest das Buch.",
      D: "Das Buch ist lesend.",
    },
    correct: "B",
  },
  {
    question: "Welche Adjektivendung hat oft Passivbedeutung?",
    options: {
      A: "-lich",
      B: "-bar",
      C: "-sam",
      D: "-haft",
    },
    correct: "B",
  },
  {
    question: "Welcher Satz verwendet ein reflexives Verb mit Passivbedeutung?",
    options: {
      A: "Das erledigt sich von selbst.",
      B: "Das wird von selbst erledigt.",
      C: "Man erledigt das von selbst.",
      D: "Das ist von selbst zu erledigen.",
    },
    correct: "A",
  },
  {
    question:
      "Welche Konstruktion hat Passivbedeutung und drückt eine Notwendigkeit aus?",
    options: {
      A: "sein + Partizip II",
      B: "sein + zu + Infinitiv",
      C: "sich lassen + Infinitiv",
      D: "werden + Infinitiv",
    },
    correct: "B",
  },
  {
    question: "Wie nennt man ein Passiv ohne Subjekt?",
    options: {
      A: "Reflexivpassiv",
      B: "unpersönliches Passiv",
      C: "Zustandspassiv",
      D: "Modalpassiv",
    },
    correct: "B",
  },
  {
    question: "Bei welchen Verben kann man ein unpersönliches Passiv bilden?",
    options: {
      A: "Nur bei transitiven Verben",
      B: "Nur bei intransitiven Verben",
      C: "Bei transitiven und intransitiven Verben",
      D: "Nur bei reflexiven Verben",
    },
    correct: "B",
  },
  {
    question:
      "Wie lautet der Satz 'Man tanzt viel auf der Party' im unpersönlichen Passiv?",
    options: {
      A: "Es wird viel auf der Party getanzt.",
      B: "Viel wird auf der Party getanzt.",
      C: "Auf der Party wird viel getanzt.",
      D: "Alle sind korrekt.",
    },
    correct: "D",
  },
  {
    question: "Welcher Satz enthält ein unpersönliches Passiv?",
    options: {
      A: "Hier wird gearbeitet.",
      B: "Die Arbeit wird gemacht.",
      C: "Man arbeitet hier.",
      D: "Die Arbeit ist zu machen.",
    },
    correct: "A",
  },
  {
    question: "Wie bildet man ein unpersönliches Passiv mit einem Modalverb?",
    options: {
      A: "Es muss hier gearbeitet werden.",
      B: "Hier muss gearbeitet werden.",
      C: "Es wird hier arbeiten müssen.",
      D: "A und B sind korrekt.",
    },
    correct: "D",
  },
  {
    question: "Bei welchen Verben ist ein Passiv nicht möglich?",
    options: {
      A: "Transitive Verben",
      B: "Intransitive Verben mit Dativobjekt",
      C: "Verben ohne Objekt wie 'schlafen'",
      D: "Reflexive Verben",
    },
    correct: "C",
  },
  {
    question: "Welches Verb kann nicht im Passiv verwendet werden?",
    options: {
      A: "geben",
      B: "haben (im Sinne von besitzen)",
      C: "bauen",
      D: "kaufen",
    },
    correct: "B",
  },
  {
    question: "Welcher Satz kann nicht ins Passiv umgewandelt werden?",
    options: {
      A: "Man schreibt einen Brief.",
      B: "Man dankt dem Lehrer.",
      C: "Man schläft tief und fest.",
      D: "Man öffnet die Tür.",
    },
    correct: "C",
  },
  {
    question:
      "Bei welchen Verben ist das Passiv möglich, obwohl sie kein Akkusativobjekt haben?",
    options: {
      A: "Transitive Verben",
      B: "Intransitive Verben mit Präpositionalobjekt",
      C: "Intransitive Verben ohne Objekt",
      D: "Reflexive Verben",
    },
    correct: "B",
  },
  {
    question: "Welcher Satz kann ins Passiv umgewandelt werden?",
    options: {
      A: "Er gefällt mir.",
      B: "Er ähnelt seinem Vater.",
      C: "Es gibt viele Bücher.",
      D: "Man hilft den Kindern.",
    },
    correct: "D",
  },
  {
    question: "Welche sind die Wechselpräpositionen im Deutschen?",
    options: {
      A: "auf, in, an, über, unter, vor, hinter, neben, zwischen",
      B: "aus, bei, mit, nach, seit, von, zu",
      C: "durch, für, gegen, ohne, um",
      D: "wegen, während, trotz, statt",
    },
    correct: "A",
  },
  {
    question: "Was bestimmt den Kasus bei Wechselpräpositionen?",
    options: {
      A: "Das Verb",
      B: "Das Substantiv",
      C: "Die Frage 'Wohin?' (Akkusativ) oder 'Wo?' (Dativ)",
      D: "Die Frage 'Wann?' oder 'Wie lange?'",
    },
    correct: "C",
  },
  {
    question:
      "Welcher Satz verwendet die Wechselpräposition mit dem richtigen Kasus?",
    options: {
      A: "Ich stelle das Buch auf dem Tisch.",
      B: "Ich stelle das Buch auf den Tisch.",
      C: "Ich stelle das Buch auf der Tisch.",
      D: "Ich stelle das Buch auf dem Tischen.",
    },
    correct: "B",
  },
  {
    question: "Welcher Satz ist richtig?",
    options: {
      A: "Das Bild hängt an der Wand.",
      B: "Das Bild hängt an die Wand.",
      C: "Das Bild hängt in der Wand.",
      D: "Das Bild hängt an den Wand.",
    },
    correct: "A",
  },
  {
    question: "Welche Präposition ist keine Wechselpräposition?",
    options: {
      A: "in",
      B: "auf",
      C: "mit",
      D: "hinter",
    },
    correct: "C",
  },
  {
    question:
      "Welche Präposition verwendet man für Orte mit bestimmten Grenzen (Länder, Städte)?",
    options: {
      A: "in",
      B: "auf",
      C: "an",
      D: "bei",
    },
    correct: "A",
  },
  {
    question: "Welche Präposition verwendet man für Inseln?",
    options: {
      A: "in",
      B: "auf",
      C: "an",
      D: "nach",
    },
    correct: "B",
  },
  {
    question: "Welcher Satz verwendet die richtige lokale Präposition?",
    options: {
      A: "Ich wohne in der Bahnhofstraße.",
      B: "Ich wohne auf der Bahnhofstraße.",
      C: "Ich wohne an der Bahnhofstraße.",
      D: "Ich wohne bei der Bahnhofstraße.",
    },
    correct: "A",
  },
  {
    question: "Welche Präposition verwendet man für Gebäude?",
    options: {
      A: "zu",
      B: "in",
      C: "auf",
      D: "nach",
    },
    correct: "B",
  },
  {
    question: "Welcher Satz verwendet die richtige lokale Präposition?",
    options: {
      A: "Ich fahre nach Frankreich.",
      B: "Ich fahre in Frankreich.",
      C: "Ich fahre zu Frankreich.",
      D: "Ich fahre bei Frankreich.",
    },
    correct: "A",
  },
  {
    question: "Welche Präposition bedeutet 'rund um'?",
    options: {
      A: "durch",
      B: "um",
      C: "gegen",
      D: "entlang",
    },
    correct: "B",
  },
  {
    question:
      "Welche Präposition verwendet man für 'die andere Seite von etwas'?",
    options: {
      A: "durch",
      B: "hinter",
      C: "jenseits",
      D: "gegenüber",
    },
    correct: "C",
  },
  {
    question: "Welcher Satz verwendet die richtige lokaleЈ Präposition?",
    options: {
      A: "Wir gehen über die Brücke.",
      B: "Wir gehen auf der Brücke.",
      C: "Wir gehen durch die Brücke.",
      D: "Wir gehen um die Brücke.",
    },
    correct: "A",
  },
  {
    question: "Welche Präposition verwendet man für 'entfernt von'?",
    options: {
      A: "außerhalb",
      B: "innerhalb",
      C: "entlang",
      D: "zwischen",
    },
    correct: "A",
  },
  {
    question: "Welcher Satz verwendet die richtige lokale Präposition?",
    options: {
      A: "Die Katze läuft um das Haus.",
      B: "Die Katze läuft durch das Haus.",
      C: "Die Katze läuft entlang das Haus.",
      D: "Die Katze läuft außerhalb das Haus.",
    },
    correct: "A",
  },
  {
    question:
      "Welche Präposition verwendet man für einen bestimmten Zeitpunkt?",
    options: {
      A: "seit",
      B: "am",
      C: "für",
      D: "während",
    },
    correct: "B",
  },
  {
    question: "Welche Präposition verwendet man für Wochentage?",
    options: {
      A: "in",
      B: "an",
      C: "auf",
      D: "zu",
    },
    correct: "B",
  },
  {
    question: "Welcher Satz verwendet die richtige temporale Präposition?",
    options: {
      A: "Ich komme im Montag.",
      B: "Ich komme am Montag.",
      C: "Ich komme auf Montag.",
      D: "Ich komme zum Montag.",
    },
    correct: "B",
  },
  {
    question: "Welche Präposition verwendet man für Monate?",
    options: {
      A: "in",
      B: "an",
      C: "auf",
      D: "zu",
    },
    correct: "A",
  },
  {
    question: "Welcher Satz verwendet die richtige temporale Präposition?",
    options: {
      A: "In drei Wochen fahre ich in Urlaub.",
      B: "An drei Wochen fahre ich in Urlaub.",
      C: "Mit drei Wochen fahre ich in Urlaub.",
      D: "Von drei Wochen fahre ich in Urlaub.",
    },
    correct: "A",
  },
  {
    question: "Welche Präposition drückt eine Zeitdauer aus?",
    options: {
      A: "seit",
      B: "bis",
      C: "während",
      D: "vor",
    },
    correct: "C",
  },
  {
    question:
      "Welche Präposition bedeutet 'vom jetzigen Zeitpunkt an rückwärts gerechnet'?",
    options: {
      A: "seit",
      B: "vor",
      C: "nach",
      D: "innerhalb",
    },
    correct: "B",
  },
  {
    question: "Welcher Satz verwendet die richtige temporale Präposition?",
    options: {
      A: "Ich bin während drei Stunden fertig.",
      B: "Ich bin innerhalb von drei Stunden fertig.",
      C: "Ich bin bis drei Stunden fertig.",
      D: "Ich bin nach drei Stunden fertig.",
    },
    correct: "B",
  },
  {
    question: "Welche Präposition verwendet man für 'nicht später als'?",
    options: {
      A: "vor",
      B: "bis",
      C: "nach",
      D: "gegen",
    },
    correct: "B",
  },
  {
    question: "Welcher Satz verwendet die richtige temporale Präposition?",
    options: {
      A: "Er ist nach drei Jahren gestorben.",
      B: "Er ist vor drei Jahren gestorben.",
      C: "Er ist mit drei Jahren gestorben.",
      D: "Er ist in drei Jahren gestorben.",
    },
    correct: "B",
  },
  {
    question: "Welche Präposition drückt einen Grund aus?",
    options: {
      A: "trotz",
      B: "wegen",
      C: "durch",
      D: "für",
    },
    correct: "B",
  },
  {
    question: "Welche Präposition drückt einen Gegensatz aus?",
    options: {
      A: "wegen",
      B: "aufgrund",
      C: "trotz",
      D: "dank",
    },
    correct: "C",
  },
  {
    question: "Welcher Satz verwendet die richtige kausale Präposition?",
    options: {
      A: "Wegen dem Regen bleiben wir zu Hause.",
      B: "Trotz dem Regen gehen wir spazieren.",
      C: "Aus dem Regen fahren wir nicht.",
      D: "Mit dem Regen bleiben wir zu Hause.",
    },
    correct: "B",
  },
  {
    question: "Welche Präposition drückt einen positiven Grund aus?",
    options: {
      A: "aufgrund",
      B: "wegen",
      C: "dank",
      D: "durch",
    },
    correct: "C",
  },
  {
    question: "Welcher Satz verwendet die richtige kausale Präposition?",
    options: {
      A: "Durch der Hilfe meiner Freunde habe ich die Prüfung bestanden.",
      B: "Dank der Hilfe meiner Freunde habe ich die Prüfung bestanden.",
      C: "Wegen der Hilfe meiner Freunde habe ich die Prüfung bestanden.",
      D: "Von der Hilfe meiner Freunde habe ich die Prüfung bestanden.",
    },
    correct: "B",
  },
  {
    question: "Welche Präposition verwendet man für indirekte Rede?",
    options: {
      A: "nach",
      B: "laut",
      C: "mit",
      D: "bei",
    },
    correct: "B",
  },
  {
    question: "Welche Präposition verwendet man für die Angabe einer Quelle?",
    options: {
      A: "von",
      B: "durch",
      C: "mit",
      D: "bei",
    },
    correct: "A",
  },
  {
    question:
      "Welcher Satz verwendet die richtige Präposition für Redewiedergabe?",
    options: {
      A: "Nach dem Professor ist diese Theorie falsch.",
      B: "Mit dem Professor ist diese Theorie falsch.",
      C: "Aus dem Professor ist diese Theorie falsch.",
      D: "In dem Professor ist diese Theorie falsch.",
    },
    correct: "A",
  },
  {
    question:
      "Welche Präposition kann man für die Angabe eines Autors verwenden?",
    options: {
      A: "mit",
      B: "zu",
      C: "von",
      D: "für",
    },
    correct: "C",
  },
  {
    question: "Welcher Satz verwendet die richtige Präposition für Referenz?",
    options: {
      A: "In Shakespeare gibt es viele interessante Charaktere.",
      B: "Mit Shakespeare gibt es viele interessante Charaktere.",
      C: "Bei Shakespeare gibt es viele interessante Charaktere.",
      D: "Zu Shakespeare gibt es viele interessante Charaktere.",
    },
    correct: "C",
  },
  {
    question: "Welches Modalverb drückt eine Fähigkeit aus?",
    options: {
      A: "sollen",
      B: "können",
      C: "müssen",
      D: "wollen",
    },
    correct: "B",
  },
  {
    question: "In welchem Satz wird das Modalverb 'dürfen' richtig verwendet?",
    options: {
      A: "Ich darfe hier nicht rauchen.",
      B: "Er darf nicht zu spät kommen.",
      C: "Wir darfen morgen länger schlafen.",
      D: "Sie darft den Film sehen.",
    },
    correct: "B",
  },
  {
    question: "Welcher Satz drückt eine Notwendigkeit aus?",
    options: {
      A: "Er will einen neuen Computer kaufen.",
      B: "Sie mag keine Äpfel.",
      C: "Wir müssen die Hausaufgaben bis morgen abgeben.",
      D: "Du sollst deine Großmutter besuchen.",
    },
    correct: "C",
  },
  {
    question: "Welcher Satz enthält ein Modalverb in seiner Grundbedeutung?",
    options: {
      A: "Er will Arzt werden.",
      B: "Du sollst nicht lügen.",
      C: "Sie könnte schon zu Hause sein.",
      D: "Er muss krank sein.",
    },
    correct: "A",
  },
  {
    question: "Wie bildet man den Konjunktiv II von 'können'?",
    options: {
      A: "könnete",
      B: "könnte",
      C: "könne",
      D: "kannen",
    },
    correct: "B",
  },
  {
    question: "Welcher Satz drückt eine Vermutung über die Gegenwart aus?",
    options: {
      A: "Er muss gestern krank gewesen sein.",
      B: "Sie dürfte jetzt im Büro sein.",
      C: "Wir sollten morgen früher aufstehen.",
      D: "Du kannst das doch schaffen!",
    },
    correct: "B",
  },
  {
    question:
      "Welches Modalverb wird am häufigsten für starke Vermutungen in der Gegenwart verwendet?",
    options: {
      A: "könnte",
      B: "sollte",
      C: "müsste",
      D: "dürfte",
    },
    correct: "C",
  },
  {
    question: "Welcher Satz enthält KEINE Vermutung über die Gegenwart?",
    options: {
      A: "Er könnte jetzt zu Hause sein.",
      B: "Sie muss jetzt sehr beschäftigt sein.",
      C: "Du sollst sofort nach Hause kommen.",
      D: "Die Konferenz dürfte bereits begonnen haben.",
    },
    correct: "C",
  },
  {
    question: "Was drückt der Satz 'Es mag stimmen, was du sagst' aus?",
    options: {
      A: "Eine starke Vermutung",
      B: "Eine Möglichkeit oder Einräumung",
      C: "Eine Erlaubnis",
      D: "Eine Fähigkeit",
    },
    correct: "B",
  },
  {
    question:
      "Welcher Satz enthält eine Vermutung mit mittlerem Wahrscheinlichkeitsgrad?",
    options: {
      A: "Er wird jetzt in der Bibliothek sein.",
      B: "Sie muss jetzt schon zu Hause sein.",
      C: "Er könnte sich gerade auf die Prüfung vorbereiten.",
      D: "Sie soll sehr intelligent sein.",
    },
    correct: "C",
  },
  {
    question: "Welcher Satz drückt eine Vermutung über die Vergangenheit aus?",
    options: {
      A: "Er kann schwimmen.",
      B: "Sie muss den Zug verpasst haben.",
      C: "Du sollst mir helfen.",
      D: "Wir wollen morgen ins Kino gehen.",
    },
    correct: "B",
  },
  {
    question:
      "Wie bildet man eine Vermutung über die Vergangenheit mit 'können'?",
    options: {
      A: "Er kann nicht zu Hause gewesen sein.",
      B: "Er konnte nicht zu Hause sein.",
      C: "Er könnte nicht zu Hause gewesen sein.",
      D: "Er hat nicht zu Hause sein können.",
    },
    correct: "C",
  },
  {
    question:
      "Welcher Satz enthält eine starke Vermutung über die Vergangenheit?",
    options: {
      A: "Er dürfte den Schlüssel verloren haben.",
      B: "Sie sollte pünktlich gekommen sein.",
      C: "Ihr müsst die falsche Straße genommen haben.",
      D: "Wir mögen uns geirrt haben.",
    },
    correct: "C",
  },
  {
    question: "Was drückt der Satz 'Er kann das nicht gewusst haben' aus?",
    options: {
      A: "Eine Fähigkeit in der Vergangenheit",
      B: "Eine Erlaubnis in der Vergangenheit",
      C: "Eine Vermutung über die Vergangenheit",
      D: "Eine Pflicht in der Vergangenheit",
    },
    correct: "C",
  },
  {
    question:
      "Welche Zeitform wird für Vermutungen über die Vergangenheit mit Modalverben verwendet?",
    options: {
      A: "Präteritum",
      B: "Perfekt",
      C: "Plusquamperfekt",
      D: "Infinitiv Perfekt mit Modalverb",
    },
    correct: "D",
  },
  {
    question:
      "Welche Bedeutung hat 'lassen' im Satz 'Ich lasse mein Auto reparieren'?",
    options: {
      A: "Erlauben",
      B: "Veranlassen",
      C: "Unterlassen",
      D: "Zurücklassen",
    },
    correct: "B",
  },
  {
    question: "Welcher Satz verwendet 'lassen' im Sinne von 'erlauben'?",
    options: {
      A: "Ich lasse die Haare schneiden.",
      B: "Lassen Sie mich bitte ausreden.",
      C: "Er lässt seinen Mantel im Büro.",
      D: "Wir lassen den Termin verschieben.",
    },
    correct: "B",
  },
  {
    question:
      "Welche Form ist der Imperativ von 'lassen' in der 2. Person Singular?",
    options: {
      A: "Lasse!",
      B: "Lässt!",
      C: "Lass!",
      D: "Lasst!",
    },
    correct: "C",
  },
  {
    question:
      "Welche Funktion hat 'lassen' im Satz 'Das lässt sich leicht erklären'?",
    options: {
      A: "Möglichkeit",
      B: "Notwendigkeit",
      C: "Wunsch",
      D: "Befehl",
    },
    correct: "A",
  },
  {
    question:
      "Welcher Satz verwendet das Verb 'lassen' im Sinne von 'unterlassen'?",
    options: {
      A: "Lass das Buch auf dem Tisch.",
      B: "Lass mich in Ruhe!",
      C: "Lass das Rauchen!",
      D: "Lass dir Zeit.",
    },
    correct: "C",
  },
  {
    question: "Welches Verb ist trennbar?",
    options: {
      A: "bekommen",
      B: "verstehen",
      C: "aufstehen",
      D: "entdecken",
    },
    correct: "C",
  },
  {
    question: "In welchem Satz wird ein trennbares Verb richtig verwendet?",
    options: {
      A: "Er anruft seinen Freund.",
      B: "Sie teilnimmt an der Konferenz.",
      C: "Ich fange morgen früh an.",
      D: "Wir ankommen um 9 Uhr.",
    },
    correct: "C",
  },
  {
    question: "Welches Präfix macht ein Verb untrennbar?",
    options: {
      A: "mit-",
      B: "vor-",
      C: "zer-",
      D: "ab-",
    },
    correct: "C",
  },
  {
    question: "Wie bildet man den Perfekt von 'anfangen'?",
    options: {
      A: "Er hat angefangen.",
      B: "Er hat gefangen an.",
      C: "Er ist angefangen.",
      D: "Er ist gefangen an.",
    },
    correct: "A",
  },
  {
    question: "Welches dieser Verben ist NICHT trennbar?",
    options: {
      A: "einladen",
      B: "aufräumen",
      C: "umziehen",
      D: "übersetzen (einen Text)",
    },
    correct: "D",
  },
  {
    question: "Welches Präfix kann sowohl trennbar als auch untrennbar sein?",
    options: {
      A: "be-",
      B: "ver-",
      C: "über-",
      D: "ent-",
    },
    correct: "C",
  },
  {
    question:
      "Wie lautet der Satz im Präsens mit dem trennbaren Verb 'einsteigen'?",
    options: {
      A: "Ich einsteige in den Zug.",
      B: "Ich steige in den Zug ein.",
      C: "Ich einsteigen in den Zug.",
      D: "Ich steigen in den Zug ein.",
    },
    correct: "B",
  },
  {
    question:
      "Welches Verb hat eine unterschiedliche Bedeutung je nachdem, ob es trennbar oder untrennbar verwendet wird?",
    options: {
      A: "einladen/einladen",
      B: "überlegen/überlegen",
      C: "anbieten/anbieten",
      D: "aufgeben/aufgeben",
    },
    correct: "B",
  },
  {
    question: "Wo steht bei einem Nebensatz das Präfix eines trennbaren Verbs?",
    options: {
      A: "Am Ende des Hauptsatzes",
      B: "Es wird vom Verb getrennt",
      C: "Es bleibt mit dem Verb verbunden",
      D: "Es steht am Anfang des Nebensatzes",
    },
    correct: "C",
  },
  {
    question:
      "Welcher Satz zeigt die richtige Bildung des Infinitivs mit 'zu' bei einem trennbaren Verb?",
    options: {
      A: "Ich versuche, anzurufen ihn.",
      B: "Ich versuche, zu anrufen ihn.",
      C: "Ich versuche, ihn anzurufen.",
      D: "Ich versuche, ihn zu anrufen.",
    },
    correct: "C",
  },
  {
    question: "Welcher Artikel ist bei dem Nomen 'Joghurt' korrekt?",
    options: {
      A: "der Joghurt",
      B: "die Joghurt",
      C: "das Joghurt",
      D: "Alle genannten Artikel können verwendet werden.",
    },
    correct: "A",
  },
  {
    question:
      "Was ist bei folgendem Satz falsch? 'Die Student kommt aus Japan.'",
    options: {
      A: "Der Artikel sollte 'der' sein.",
      B: "Es fehlt ein Adjektiv vor dem Nomen.",
      C: "Das Nomen sollte 'Studentin' sein.",
      D: "Das Verb ist falsch konjugiert.",
    },
    correct: "A",
  },
  {
    question: "Ergänzen Sie: '_____ Unterricht beginnt um 9 Uhr.'",
    options: {
      A: "Die",
      B: "Der",
      C: "Das",
      D: "Den",
    },
    correct: "B",
  },
  {
    question:
      "Welches Nomen hat ein anderes grammatikalisches Geschlecht als die anderen?",
    options: {
      A: "Löffel",
      B: "Gabel",
      C: "Messer",
      D: "Teller",
    },
    correct: "C",
  },
  {
    question: "Welcher Satz ist korrekt?",
    options: {
      A: "Das Auto, den ich gestern gekauft habe, ist rot.",
      B: "Das Auto, die ich gestern gekauft habe, ist rot.",
      C: "Das Auto, das ich gestern gekauft habe, ist rot.",
      D: "Das Auto, dessen ich gestern gekauft habe, ist rot.",
    },
    correct: "C",
  },
  {
    question: "Welche Regel bestimmt das Genus bei dem Wort 'Freiheit'?",
    options: {
      A: "Substantive auf -heit sind maskulin",
      B: "Substantive auf -heit sind feminin",
      C: "Substantive auf -heit sind neutral",
      D: "Das Genus von 'Freiheit' ist eine Ausnahme",
    },
    correct: "B",
  },
  {
    question:
      "Welches Nomen folgt nicht der Regel, dass Nomen, die Jahreszeiten, Monate oder Wochentage bezeichnen, maskulin sind?",
    options: {
      A: "Sommer",
      B: "Januar",
      C: "Nacht",
      D: "Montag",
    },
    correct: "C",
  },
  {
    question: "Welches Wort ist nicht feminin?",
    options: {
      A: "Schönheit",
      B: "Freundschaft",
      C: "Wachstum",
      D: "Schwierigkeit",
    },
    correct: "C",
  },
  {
    question: "Bei zusammengesetzten Nomen richtet sich das Genus nach:",
    options: {
      A: "dem ersten Teil des Nomens",
      B: "dem letzten Teil des Nomens",
      C: "beiden Teilen",
      D: "Es gibt keine feste Regel",
    },
    correct: "B",
  },
  {
    question:
      "Welches Nomen folgt der Regel, dass Nomen, die aus Verben ohne Suffix gebildet wurden, meistens maskulin sind?",
    options: {
      A: "der Lauf",
      B: "das Spielen",
      C: "die Bewegung",
      D: "das Leben",
    },
    correct: "A",
  },
  {
    question: "In welchem Fall verwendet man keinen Artikel?",
    options: {
      A: "Bei bestimmten geografischen Namen",
      B: "Bei Personennamen mit Adjektiven",
      C: "Bei abstrakten Begriffen im Allgemeinen",
      D: "Bei Superlativen",
    },
    correct: "A",
  },
  {
    question:
      "Warum fehlt hier der Artikel vor 'Präsident'? 'Präsident Müller spricht morgen im Fernsehen.'",
    options: {
      A: "Weil Berufsbezeichnungen mit Eigennamen ohne Artikel stehen",
      B: "Weil 'Präsident' ein Lehnwort ist",
      C: "Weil 'Präsident' maskulin ist",
      D: "Weil 'Präsident' ein abstrakter Begriff ist",
    },
    correct: "A",
  },
  {
    question: "In welchem Satz ist der Artikelgebrauch falsch?",
    options: {
      A: "Ich trinke gern Wein.",
      B: "Die meisten Menschen mögen den Sommer.",
      C: "Der Gold ist ein wertvolles Metall.",
      D: "Im Winter fällt oft Schnee.",
    },
    correct: "C",
  },
  {
    question: "Wann verwendet man den unbestimmten Artikel?",
    options: {
      A: "Bei Generalisierungen",
      B: "Bei bereits bekannten Personen oder Dingen",
      C: "Bei erstmalig erwähnten, nicht näher bestimmten Personen oder Dingen",
      D: "Bei Abstrakta im Allgemeinen",
    },
    correct: "C",
  },
  {
    question: "In welchem Satz fehlt ein Artikel?",
    options: {
      A: "Sie ist Ärztin in Hamburg.",
      B: "Er ist bester Student in seiner Klasse.",
      C: "Wir gehen heute ins Kino.",
      D: "Die Kinder spielen im Garten.",
    },
    correct: "B",
  },
  {
    question: "Wie lautet der Genitiv von 'der Student'?",
    options: {
      A: "des Studenten",
      B: "des Students",
      C: "der Studenten",
      D: "dem Studenten",
    },
    correct: "A",
  },
  {
    question: "Welche Genitivform ist korrekt?",
    options: {
      A: "das Buch des Kinds",
      B: "das Buch dem Kind",
      C: "das Buch des Kindes",
      D: "das Buch den Kindes",
    },
    correct: "C",
  },
  {
    question: "Welcher Satz enthält einen korrekten Genitiv?",
    options: {
      A: "Das ist das Auto meines Bruders.",
      B: "Das ist das Auto meinem Bruder.",
      C: "Das ist das Auto von meines Bruders.",
      D: "Das ist das Auto zu meinem Bruder.",
    },
    correct: "A",
  },
  {
    question:
      "Bei welchem Nomen kann man im Genitiv Singular sowohl die Endung -s als auch -es verwenden?",
    options: {
      A: "Tag",
      B: "Mann",
      C: "Kind",
      D: "Haus",
    },
    correct: "A",
  },
  {
    question:
      "Welche Funktion hat das Plusquamperfekt in folgendem Satz? 'Nachdem er gegessen hatte, ging er spazieren.'",
    options: {
      A: "Es zeigt eine zukünftige Handlung.",
      B: "Es betont den Beginn der Handlung.",
      C: "Es beschreibt eine Handlung, die vor einer anderen in der Vergangenheit stattfand.",
      D: "Es zeigt eine allgemeine Gewohnheit.",
    },
    correct: "C",
  },
  {
    question: "Welcher Artikel ist bei dem Nomen 'Joghurt' korrekt?",
    options: {
      A: "der Joghurt",
      B: "die Joghurt",
      C: "das Joghurt",
      D: "Alle genannten Artikel können verwendet werden.",
    },
    correct: "A (regional auch D möglich)",
  },
  {
    question:
      "Was ist bei folgendem Satz falsch? 'Die Student kommt aus Japan.'",
    options: {
      A: "Der Artikel sollte 'der' sein.",
      B: "Es fehlt ein Adjektiv vor dem Nomen.",
      C: "Das Nomen sollte 'Studentin' sein.",
      D: "Das Verb ist falsch konjugiert.",
    },
    correct: "A",
  },
  {
    question: "Ergänzen Sie: '_____ Unterricht beginnt um 9 Uhr.'",
    options: {
      A: "Die",
      B: "Der",
      C: "Das",
      D: "Den",
    },
    correct: "B",
  },
  {
    question:
      "Welches Nomen hat ein anderes grammatikalisches Geschlecht als die anderen?",
    options: {
      A: "Löffel",
      B: "Gabel",
      C: "Messer",
      D: "Teller",
    },
    correct: "B",
  },
  {
    question: "Welcher Satz ist korrekt?",
    options: {
      A: "Das Auto, den ich gestern gekauft habe, ist rot.",
      B: "Das Auto, die ich gestern gekauft habe, ist rot.",
      C: "Das Auto, das ich gestern gekauft habe, ist rot.",
      D: "Das Auto, dessen ich gestern gekauft habe, ist rot.",
    },
    correct: "C",
  },
  {
    question: "Welche Regel bestimmt das Genus bei dem Wort 'Freiheit'?",
    options: {
      A: "Substantive auf -heit sind maskulin",
      B: "Substantive auf -heit sind feminin",
      C: "Substantive auf -heit sind neutral",
      D: "Das Genus von 'Freiheit' ist eine Ausnahme",
    },
    correct: "B",
  },
  {
    question:
      "Welches Nomen folgt nicht der Regel, dass Nomen, die Jahreszeiten, Monate oder Wochentage bezeichnen, maskulin sind?",
    options: {
      A: "Sommer",
      B: "Januar",
      C: "Nacht",
      D: "Montag",
    },
    correct: "C",
  },
  {
    question: "Welches Wort ist nicht feminin?",
    options: {
      A: "Schönheit",
      B: "Freundschaft",
      C: "Wachstum",
      D: "Schwierigkeit",
    },
    correct: "C",
  },
  {
    question: "Bei zusammengesetzten Nomen richtet sich das Genus nach:",
    options: {
      A: "dem ersten Teil des Nomens",
      B: "dem letzten Teil des Nomens",
      C: "beiden Teilen",
      D: "Es gibt keine feste Regel",
    },
    correct: "B",
  },
  {
    question:
      "Welches Nomen folgt der Regel, dass Nomen, die aus Verben ohne Suffix gebildet wurden, meistens maskulin sind?",
    options: {
      A: "der Lauf",
      B: "das Spielen",
      C: "die Bewegung",
      D: "das Leben",
    },
    correct: "A",
  },
  {
    question: "In welchem Fall verwendet man keinen Artikel?",
    options: {
      A: "Bei bestimmten geografischen Namen",
      B: "Bei Personennamen mit Adjektiven",
      C: "Bei abstrakten Begriffen im Allgemeinen",
      D: "Bei Superlativen",
    },
    correct: "A",
  },
  {
    question:
      "Warum fehlt hier der Artikel vor 'Präsident'? 'Präsident Müller spricht morgen im Fernsehen.'",
    options: {
      A: "Weil Berufsbezeichnungen mit Eigennamen ohne Artikel stehen",
      B: "Weil 'Präsident' ein Lehnwort ist",
      C: "Weil 'Präsident' maskulin ist",
      D: "Weil 'Präsident' ein abstrakter Begriff ist",
    },
    correct: "A",
  },
  {
    question: "In welchem Satz ist der Artikelgebrauch falsch?",
    options: {
      A: "Ich trinke gern Wein.",
      B: "Die meisten Menschen mögen den Sommer.",
      C: "Der Gold ist ein wertvolles Metall.",
      D: "Im Winter fällt oft Schnee.",
    },
    correct: "C",
  },
  {
    question: "Wann verwendet man den unbestimmten Artikel?",
    options: {
      A: "Bei Generalisierungen",
      B: "Bei bereits bekannten Personen oder Dingen",
      C: "Bei erstmalig erwähnten, nicht näher bestimmten Personen oder Dingen",
      D: "Bei Abstrakta im Allgemeinen",
    },
    correct: "C",
  },
  {
    question: "In welchem Satz fehlt ein Artikel?",
    options: {
      A: "Sie ist Ärztin in Hamburg.",
      B: "Er ist bester Student in seiner Klasse.",
      C: "Wir gehen heute ins Kino.",
      D: "Die Kinder spielen im Garten.",
    },
    correct: "B",
  },
  {
    question: "Wie lautet der Genitiv von 'der Student'?",
    options: {
      A: "des Studenten",
      B: "des Students",
      C: "der Studenten",
      D: "dem Studenten",
    },
    correct: "A",
  },
  {
    question: "Welche Genitivform ist korrekt?",
    options: {
      A: "das Buch des Kinds",
      B: "das Buch dem Kind",
      C: "das Buch des Kindes",
      D: "das Buch den Kindes",
    },
    correct: "C",
  },
  {
    question: "Welcher Satz enthält einen korrekten Genitiv?",
    options: {
      A: "Das ist das Auto meines Bruders.",
      B: "Das ist das Auto meinem Bruder.",
      C: "Das ist das Auto von meines Bruders.",
      D: "Das ist das Auto zu meinem Bruder.",
    },
    correct: "A",
  },
  {
    question:
      "Bei welchem Nomen kann man im Genitiv Singular sowohl die Endung -s als auch -es verwenden?",
    options: {
      A: "Tag",
      B: "Mann",
      C: "Kind",
      D: "Frau",
    },
    correct: "A",
  },
  {
    question: "Welche Präposition verlangt den Genitiv?",
    options: {
      A: "mit",
      B: "wegen",
      C: "durch",
      D: "für",
    },
    correct: "B",
  },
  {
    question: "Welches Nomen gehört zur n-Deklination?",
    options: {
      A: "der Freund",
      B: "der Mensch",
      C: "der Tag",
      D: "der Baum",
    },
    correct: "B",
  },
  {
    question: "Wie lautet der Akkusativ Singular von 'der Bär'?",
    options: {
      A: "der Bär",
      B: "den Bären",
      C: "dem Bären",
      D: "des Bären",
    },
    correct: "B",
  },
  {
    question: "Welches Nomen folgt nicht der n-Deklination?",
    options: {
      A: "der Student",
      B: "der Kollege",
      C: "der Computer",
      D: "der Junge",
    },
    correct: "C",
  },
  {
    question: "Wie lautet die korrekte Pluralform von 'der Mensch'?",
    options: {
      A: "die Mensche",
      B: "die Menschen",
      C: "die Mensches",
      D: "die Menschs",
    },
    correct: "B",
  },
  {
    question:
      "Welcher Kasus ist in diesem Satz verwendet? 'Ich helfe dem Jungen bei den Hausaufgaben.'",
    options: {
      A: "Nominativ",
      B: "Akkusativ",
      C: "Dativ",
      D: "Genitiv",
    },
    correct: "C",
  },
  {
    question: "Zu welcher Deklination gehört 'die Frau'?",
    options: {
      A: "starke Deklination",
      B: "schwache Deklination (n-Deklination)",
      C: "gemischte Deklination",
      D: "feminine Deklination",
    },
    correct: "A",
  },
  {
    question: "Welches Merkmal ist typisch für die schwache Deklination?",
    options: {
      A: "Endung -s im Genitiv Singular",
      B: "Endung -n in allen Kasus außer Nominativ Singular",
      C: "Endung -en im Dativ Plural",
      D: "Keine besonderen Endungen",
    },
    correct: "B",
  },
  {
    question: "Welches Wort folgt der gemischten Deklination?",
    options: {
      A: "der Mensch",
      B: "das Herz",
      C: "die Frau",
      D: "der Tag",
    },
    correct: "B",
  },
  {
    question: "Die schwache Deklination betrifft hauptsächlich:",
    options: {
      A: "Neutrum-Nomen",
      B: "Femininum-Nomen",
      C: "Maskulinum-Nomen",
      D: "Pluralformen",
    },
    correct: "C",
  },
  {
    question: "Welcher Satz enthält ein Nomen der starken Deklination?",
    options: {
      A: "Der Bote bringt die Post.",
      B: "Der Präsident spricht im Fernsehen.",
      C: "Der Tisch steht im Wohnzimmer.",
      D: "Der Löwe brüllt laut.",
    },
    correct: "C",
  },
  {
    question: "Wie lautet die korrekte Form? 'Das ist _____ Buch.'",
    options: {
      A: "mein",
      B: "meinen",
      C: "meinem",
      D: "meines",
    },
    correct: "A",
  },
  {
    question: "Ergänzen Sie korrekt: 'Ich bin mit _____ Arbeit fertig.'",
    options: {
      A: "mein",
      B: "meiner",
      C: "meinem",
      D: "meines",
    },
    correct: "B",
  },
  {
    question:
      "Welche Form des Possessivpronomens ist korrekt? 'Sie hat _____ Schlüssel verloren.'",
    options: {
      A: "ihr",
      B: "ihren",
      C: "ihrem",
      D: "ihres",
    },
    correct: "B",
  },
  {
    question:
      "Wie heißt es richtig? 'Trotz _____ Anstrengungen hat er die Prüfung nicht bestanden.'",
    options: {
      A: "sein",
      B: "seine",
      C: "seiner",
      D: "seines",
    },
    correct: "C",
  },
  {
    question:
      "Welcher Satz enthält ein korrekt dekliniertes Indefinitpronomen?",
    options: {
      A: "Man kann nicht jedes verstehen.",
      B: "Keinem hat das neue Buch gefallen.",
      C: "Sie hat etwas wichtiges zu sagen.",
      D: "Ich habe alles Geld ausgegeben.",
    },
    correct: "D",
  },
  {
    question: "Welches Indefinitpronomen wird nur für Personen verwendet?",
    options: {
      A: "etwas",
      B: "jemand",
      C: "nichts",
      D: "alles",
    },
    correct: "B",
  },
  {
    question: "Ergänzen Sie: '_____ kann mir helfen?'",
    options: {
      A: "Jemand",
      B: "Etwas",
      C: "Niemand",
      D: "Keiner",
    },
    correct: "A",
  },
  {
    question: "Wie lautet der Dativ von 'jemand'?",
    options: {
      A: "jemander",
      B: "jemandes",
      C: "jemandem",
      D: "jemanden",
    },
    correct: "C",
  },
  {
    question: "In welchem Satz ist das Indefinitpronomen falsch verwendet?",
    options: {
      A: "Jemand hat angerufen.",
      B: "Ich habe niemanden gesehen.",
      C: "Hat jemandes dich besucht?",
      D: "Ist niemand zu Hause?",
    },
    correct: "C",
  },
  {
    question:
      "Welche Form ist im folgenden Satz korrekt? 'Ich habe _____ gefragt.'",
    options: {
      A: "niemand",
      B: "niemanden",
      C: "niemandes",
      D: "niemander",
    },
    correct: "B",
  },
  {
    question:
      "Welches Indefinitpronomen kann sich sowohl auf Personen als auch auf Sachen beziehen?",
    options: {
      A: "jemand",
      B: "etwas",
      C: "alle",
      D: "niemand",
    },
    correct: "C",
  },
  {
    question:
      "Welcher Satz enthält ein Indefinitpronomen, das sich auf Dinge bezieht?",
    options: {
      A: "Jeder sollte pünktlich sein.",
      B: "Niemand hat die Antwort gewusst.",
      C: "Etwas stimmt nicht mit dem Computer.",
      D: "Alle waren bei der Party.",
    },
    correct: "C",
  },
  {
    question: "Ergänzen Sie: '_____ Bücher sind interessant.'",
    options: {
      A: "Alle",
      B: "Jedes",
      C: "Sämtliches",
      D: "Manches",
    },
    correct: "A",
  },
  {
    question: "Welche Form ist korrekt? 'Er hat mit _____ gesprochen.'",
    options: {
      A: "jeden",
      B: "jedem",
      C: "jedes",
      D: "jeder",
    },
    correct: "B",
  },
  {
    question: "In welchem Satz wird das Indefinitpronomen falsch verwendet?",
    options: {
      A: "Einige Studenten fehlen heute.",
      B: "Mancher ist damit nicht einverstanden.",
      C: "Sie hat sämtliches Geld ausgegeben.",
      D: "Keinen interessiert das Thema.",
    },
    correct: "D",
  },
  {
    question:
      "Welche Form des Adjektivs ist in diesem Satz richtig? 'Das ist ein _____ Mann.'",
    options: {
      A: "alter",
      B: "alten",
      C: "altem",
      D: "alte",
    },
    correct: "A",
  },
  {
    question:
      "Wie lautet das Adjektiv im folgenden Satz korrekt? 'Ich mag _____ Musik.'",
    options: {
      A: "klassisch",
      B: "klassische",
      C: "klassischen",
      D: "klassischem",
    },
    correct: "B",
  },
  {
    question: "Welches Adjektiv ist nicht steigerbar?",
    options: {
      A: "schnell",
      B: "laut",
      C: "tot",
      D: "groß",
    },
    correct: "C",
  },
  {
    question: "Welcher Satz enthält ein prädikativer Adjektiv?",
    options: {
      A: "Der rote Wagen fährt schnell.",
      B: "Sie kauft einen teuren Computer.",
      C: "Das Wetter ist schön.",
      D: "Ich esse einen leckeren Apfel.",
    },
    correct: "C",
  },
  {
    question:
      "Welche Funktion hat das Adjektiv im folgenden Satz? 'Die fleißigen Studenten bestehen die Prüfung.'",
    options: {
      A: "attributiv",
      B: "prädikativ",
      C: "adverbial",
      D: "substantiviert",
    },
    correct: "A",
  },
  {
    question:
      "Wie lautet die korrekte Form des Adjektivs? 'Er fährt ein _____ Auto.'",
    options: {
      A: "neues",
      B: "neue",
      C: "neuen",
      D: "neuem",
    },
    correct: "A",
  },
  {
    question: "Welche Form ist richtig? 'Die Kinder spielen mit _____ Bällen.'",
    options: {
      A: "roten",
      B: "rotem",
      C: "rote",
      D: "roter",
    },
    correct: "A",
  },
  {
    question: "Ergänzen Sie: 'Das ist der Schlüssel des _____ Hauses.'",
    options: {
      A: "alte",
      B: "alten",
      C: "alter",
      D: "altes",
    },
    correct: "B",
  },
  {
    question:
      "Welche Form des Adjektivs ist korrekt? 'Sie trinkt _____ Kaffee.'",
    options: {
      A: "heiß",
      B: "heiße",
      C: "heißen",
      D: "heißer",
    },
    correct: "C",
  },
  {
    question: "Welcher Satz enthält ein falsch dekliniertes Adjektiv?",
    options: {
      A: "Ich brauche ein neues Handy.",
      B: "Wir essen frisches Obst.",
      C: "Sie hat einen großen Bruder.",
      D: "Er wohnt in einem schönem Haus.",
    },
    correct: "D",
  },
  {
    question:
      "Welche Form des Adjektivs ist nach einem bestimmten Artikel im Nominativ richtig?",
    options: {
      A: "der alte Mann",
      B: "der alter Mann",
      C: "der alten Mann",
      D: "der altem Mann",
    },
    correct: "A",
  },
  {
    question:
      "Wie wird das Adjektiv nach einem unbestimmten Artikel im Akkusativ dekliniert? 'Sie kauft einen _____ Tisch.'",
    options: {
      A: "groß",
      B: "große",
      C: "großen",
      D: "großer",
    },
    correct: "C",
  },
  {
    question:
      "Welche Form ist bei einem Nullartikel im Dativ Plural richtig? 'Mit _____ Büchern'",
    options: {
      A: "interessante",
      B: "interessanten",
      C: "interessantem",
      D: "interessanter",
    },
    correct: "B",
  },
  {
    question: "Ergänzen Sie: 'Das ist mein _____ Freund.'",
    options: {
      A: "guter",
      B: "gute",
      C: "guten",
      D: "gutem",
    },
    correct: "A",
  },
  {
    question:
      "Bei welchem Artikelwort folgt das Adjektiv der schwachen Deklination?",
    options: {
      A: "ein",
      B: "kein",
      C: "dieser",
      D: "mein",
    },
    correct: "C",
  },
  {
    question: "Wie lautet der Komparativ von 'gut'?",
    options: {
      A: "guter",
      B: "mehr gut",
      C: "besser",
      D: "am besten",
    },
    correct: "C",
  },
  {
    question: "Welche Steigerungsform ist korrekt?",
    options: {
      A: "am schönsten",
      B: "am schönsten",
      C: "am schönest",
      D: "am schönste",
    },
    correct: "A",
  },
  {
    question: "Ergänzen Sie: 'Dieser Computer ist _____ als jener.'",
    options: {
      A: "teuer",
      B: "teuerer",
      C: "teurer",
      D: "am teuersten",
    },
    correct: "B",
  },
  {
    question: "Welcher Superlativ ist korrekt?",
    options: {
      A: "am intelligentsten",
      B: "am intelligentesten",
      C: "am intelligentsten",
      D: "intelligentsten",
    },
    correct: "A",
  },
  {
    question: "In welchem Satz ist die Komparativform falsch?",
    options: {
      A: "Berlin ist größer als München.",
      B: "Das neue Auto ist besser als das alte.",
      C: "Dieser Film ist interessanter als der andere.",
      D: "Die Aufgabe ist schwieriger wie erwartet.",
    },
    correct: "D",
  },
  {
    question: "Welches Partizip ist hier verwendet? 'Das weinende Kind'",
    options: {
      A: "Partizip I",
      B: "Partizip II",
      C: "Partizip III",
      D: "Kein Partizip",
    },
    correct: "A",
  },
  {
    question: "Welcher Satz enthält ein Partizip II als Adjektiv?",
    options: {
      A: "Die spielenden Kinder sind laut.",
      B: "Der gebrauchte Wagen ist günstig.",
      C: "Sie hat eine entspannende Massage bekommen.",
      D: "Der lachende Mann ist mein Bruder.",
    },
    correct: "B",
  },
  {
    question: "Wie wird das Partizip I von 'lesen' gebildet?",
    options: {
      A: "gelesen",
      B: "lesend",
      C: "gelest",
      D: "lesende",
    },
    correct: "B",
  },
  {
    question: "Welche Form ist korrekt? 'Die _____ Aufgabe war schwer.'",
    options: {
      A: "gelöste",
      B: "lösende",
      C: "lösene",
      D: "zu lösende",
    },
    correct: "A",
  },
  {
    question: "In welchem Satz ist das Partizip falsch verwendet?",
    options: {
      A: "Sie liest das geöffnete Buch.",
      B: "Der schlafene Mann träumt.",
      C: "Die brennende Kerze duftet gut.",
      D: "Sie hat einen inspirierten Vortrag gehalten.",
    },
    correct: "B",
  },
  {
    question:
      "Welcher Modus wird hauptsächlich in der indirekten Rede verwendet?",
    options: {
      A: "Indikativ",
      B: "Konjunktiv I",
      C: "Konjunktiv II",
      D: "Imperativ",
    },
    correct: "B",
  },
  {
    question:
      "Wie lautet die indirekte Rede von 'Sie sagte: \"Ich komme morgen\"'?",
    options: {
      A: "Sie sagte, sie kommt morgen.",
      B: "Sie sagte, sie käme morgen.",
      C: "Sie sagte, sie komme morgen.",
      D: "Sie sagte, dass sie kam morgen.",
    },
    correct: "C",
  },
  {
    question:
      "In welchem Fall verwendet man in der indirekten Rede den Konjunktiv II anstelle des Konjunktiv I?",
    options: {
      A: "Wenn der Konjunktiv I mit dem Indikativ identisch ist",
      B: "Wenn eine Bedingung ausgedrückt wird",
      C: "Wenn der Sprecher unbekannt ist",
      D: "Wenn es sich um die Vergangenheit handelt",
    },
    correct: "A",
  },
  {
    question:
      "Wie wird der Satz 'Er sagt: \"Ich bin krank\"' in die indirekte Rede umgewandelt?",
    options: {
      A: "Er sagt, er ist krank.",
      B: "Er sagt, er sei krank.",
      C: "Er sagt, er wäre krank.",
      D: "Er sagt, dass er krank ist.",
    },
    correct: "B",
  },
  {
    question: "Welcher Satz enthält eine korrekte indirekte Rede?",
    options: {
      A: "Er behauptet, dass er hat keine Zeit.",
      B: "Sie fragt, ob ich komme mit.",
      C: "Er sagt, er habe keine Zeit.",
      D: "Sie meint, sie könnte nicht helfen.",
    },
    correct: "C",
  },
  {
    question:
      "Wie lautet der Konjunktiv I von 'sein' in der 3. Person Singular?",
    options: {
      A: "wäre",
      B: "sei",
      C: "ist",
      D: "sein",
    },
    correct: "B",
  },
  {
    question: "Welche Form ist korrekt? 'Er sagt, er _____ morgen kommen.'",
    options: {
      A: "wird",
      B: "würde",
      C: "werde",
      D: "werden",
    },
    correct: "C",
  },
  {
    question:
      "Wie wird der Satz 'Sie sagen: \"Wir haben Zeit\"' in die indirekte Rede übertragen?",
    options: {
      A: "Sie sagen, sie haben Zeit.",
      B: "Sie sagen, sie hätten Zeit.",
      C: "Sie sagen, sie haben Zeit gehabt.",
      D: "Sie sagen, sie haben Zeit.",
    },
    correct: "B",
  },
  {
    question:
      "Bei welchem Verb stimmt die Form des Konjunktiv I und des Indikativ in der 1. und 3. Person Plural überein?",
    options: {
      A: "sein",
      B: "haben",
      C: "kommen",
      D: "gehen",
    },
    correct: "C",
  },
  {
    question: "Welcher Satz verwendet den Konjunktiv I korrekt?",
    options: {
      A: "Er sagte, er hätte keine Zeit.",
      B: "Sie behauptet, sie sei unschuldig.",
      C: "Wir denken, es würde regnen.",
      D: "Ich meine, du wärst krank.",
    },
    correct: "B",
  },
  {
    question:
      "Wie wird 'Er sagte: \"Ich habe ein Buch gekauft\"' in die indirekte Rede umgewandelt?",
    options: {
      A: "Er sagte, er hat ein Buch gekauft.",
      B: "Er sagte, er hatte ein Buch gekauft.",
      C: "Er sagte, er habe ein Buch gekauft.",
      D: "Er sagte, er hätte ein Buch gekauft.",
    },
    correct: "C",
  },
  {
    question:
      "Welche Form wird verwendet, um eine Vergangenheitsaussage in der indirekten Rede wiederzugeben?",
    options: {
      A: "Präsens",
      B: "Perfekt",
      C: "Präteritum",
      D: "Plusquamperfekt",
    },
    correct: "B",
  },
  {
    question:
      "Wie lautet die indirekte Rede von 'Sie erklärte: \"Ich war gestern nicht zu Hause\"'?",
    options: {
      A: "Sie erklärte, sie war gestern nicht zu Hause.",
      B: "Sie erklärte, sie wäre gestern nicht zu Hause.",
      C: "Sie erklärte, sie sei gestern nicht zu Hause gewesen.",
      D: "Sie erklärte, sie ist gestern nicht zu Hause gewesen.",
    },
    correct: "C",
  },
  {
    question:
      "Welcher Satz gibt die Vergangenheit in der indirekten Rede korrekt wieder?",
    options: {
      A: "Er sagte, er ging ins Kino.",
      B: "Er sagte, er gehe ins Kino.",
      C: "Er sagte, er sei ins Kino gegangen.",
      D: "Er sagte, er wird ins Kino gehen.",
    },
    correct: "C",
  },
  {
    question:
      "Wie wird 'Sie fragten: \"Habt ihr den Film gesehen?\"' in der indirekten Rede ausgedrückt?",
    options: {
      A: "Sie fragten, ob wir den Film gesehen haben.",
      B: "Sie fragten, ob wir den Film gesehen hätten.",
      C: "Sie fragten, ob wir den Film sehen.",
      D: "Sie fragten, ob wir den Film sahen.",
    },
    correct: "B",
  },
  {
    question:
      "Wie wird eine Aufforderung in der indirekten Rede wiedergegeben? 'Der Lehrer sagte: \"Macht die Hausaufgaben!\"'",
    options: {
      A: "Der Lehrer sagte, wir machen die Hausaufgaben.",
      B: "Der Lehrer sagte, wir sollen die Hausaufgaben machen.",
      C: "Der Lehrer sagte, wir würden die Hausaufgaben machen.",
      D: "Der Lehrer sagte, wir machten die Hausaufgaben.",
    },
    correct: "B",
  },
  {
    question: "Wie gibt man ein Gerücht in der indirekten Rede wieder?",
    options: {
      A: "Nur mit dem Konjunktiv I",
      B: "Nur mit dem Konjunktiv II",
      C: "Mit dem Indikativ",
      D: "Mit einer speziellen Gerüchtform",
    },
    correct: "B",
  },
  {
    question:
      "Was ist bei der Wiedergabe von Selbstaussagen in der indirekten Rede zu beachten?",
    options: {
      A: "Man verwendet immer 'ich'",
      B: "Die Person wechselt nicht",
      C: "Man verwendet immer den Konjunktiv II",
      D: "Selbstaussagen können nicht in der indirekten Rede wiedergegeben werden",
    },
    correct: "B",
  },
  {
    question:
      "Welcher Satz gibt eine Aufforderung korrekt in der indirekten Rede wieder?",
    options: {
      A: "Er bat mich, dass ich ihm helfe.",
      B: "Er bat mich, ihm zu helfen.",
      C: "Er bat mich, ich helfe ihm.",
      D: "Er bat mich, ihm helfen.",
    },
    correct: "B",
  },
  {
    question:
      "Wie wird 'Man sagt: \"Der Minister ist zurückgetreten\"' als Gerücht wiedergegeben?",
    options: {
      A: "Man sagt, der Minister sei zurückgetreten.",
      B: "Man sagt, der Minister wäre zurückgetreten.",
      C: "Man sagt, der Minister ist zurückgetreten.",
      D: "Man sagt, der Minister trete zurück.",
    },
    correct: "B",
  },
  {
    question: "Welche temporale Konjunktion drückt eine Gleichzeitigkeit aus?",
    options: {
      A: "Nachdem",
      B: "Bevor",
      C: "Während",
      D: "Sobald",
    },
    correct: "C",
  },
  {
    question:
      "Ergänzen Sie den Satz korrekt: '_____ ich mit dem Studium fertig bin, werde ich eine Weltreise machen.'",
    options: {
      A: "Als",
      B: "Seit",
      C: "Während",
      D: "Sobald",
    },
    correct: "D",
  },
  {
    question:
      "In welchem Satz wird die Konjunktion 'nachdem' richtig verwendet?",
    options: {
      A: "Nachdem ich ins Kino gehe, esse ich immer Pizza.",
      B: "Nachdem ich ins Kino gegangen bin, habe ich Pizza gegessen.",
      C: "Nachdem ich ins Kino gehe, habe ich Pizza gegessen.",
      D: "Nachdem ich ins Kino gegangen bin, esse ich Pizza.",
    },
    correct: "B",
  },
  {
    question:
      "Welche temporale Konjunktion wird verwendet, um ein einmaliges Ereignis in der Vergangenheit einzuleiten?",
    options: {
      A: "Wenn",
      B: "Als",
      C: "Während",
      D: "Seit",
    },
    correct: "B",
  },
  {
    question:
      "Welche Zeitform steht in einem 'bevor'-Satz, wenn die Handlung im Hauptsatz in der Zukunft liegt?",
    options: {
      A: "Perfekt",
      B: "Präteritum",
      C: "Präsens",
      D: "Plusquamperfekt",
    },
    correct: "C",
  },
  {
    question: "Welche Konjunktion leitet einen konzessiven Nebensatz ein?",
    options: {
      A: "Weil",
      B: "Da",
      C: "Obwohl",
      D: "Denn",
    },
    correct: "C",
  },
  {
    question: "Welche kausale Konjunktion steht immer an Position 0 im Satz?",
    options: {
      A: "Weil",
      B: "Da",
      C: "Denn",
      D: "Deshalb",
    },
    correct: "C",
  },
  {
    question: "Was ist der Unterschied zwischen 'weil' und 'da'?",
    options: {
      A: "'Da' leitet einen Nebensatz ein, 'weil' einen Hauptsatz.",
      B: "'Da' wird für bekannte Gründe verwendet, 'weil' für neue Informationen.",
      C: "'Weil' kann nur am Satzanfang stehen, 'da' nicht.",
      D: "Es gibt keinen Unterschied, beide sind vollkommen austauschbar.",
    },
    correct: "B",
  },
  {
    question: "Welcher Satz enthält einen kausalen Nebensatz?",
    options: {
      A: "Obwohl es regnete, ging sie spazieren.",
      B: "Sie ging spazieren, denn es war schönes Wetter.",
      C: "Da es regnete, blieb sie zu Hause.",
      D: "Sie blieb zu Hause, trotzdem wollte sie eigentlich spazieren gehen.",
    },
    correct: "C",
  },
  {
    question:
      "Welche konzessive Konjunktion wird in folgendem Satz verwendet? 'Er bestand die Prüfung, _____ er kaum gelernt hatte.'",
    options: {
      A: "weil",
      B: "obgleich",
      C: "denn",
      D: "sodass",
    },
    correct: "B",
  },
  {
    question: "Welche Konjunktion leitet einen konsekutiven Nebensatz ein?",
    options: {
      A: "Sodass",
      B: "Weil",
      C: "Obwohl",
      D: "Wenn",
    },
    correct: "A",
  },
  {
    question: "Welche Wortverbindung drückt eine Folge aus?",
    options: {
      A: "Nicht nur ... sondern auch",
      B: "So ... dass",
      C: "Entweder ... oder",
      D: "Weder ... noch",
    },
    correct: "B",
  },
  {
    question:
      "In welchem Satz wird die konsekutive Bedeutung korrekt ausgedrückt?",
    options: {
      A: "Er sprach so leise, dass ihn niemand verstehen konnte.",
      B: "Er sprach so leise, weil er erkältet war.",
      C: "Er sprach so leise, obwohl er eine laute Stimme hat.",
      D: "Er sprach so leise, als ob er ein Geheimnis verraten würde.",
    },
    correct: "A",
  },
  {
    question: "Welches Wort kann keine konsekutive Beziehung ausdrücken?",
    options: {
      A: "Folglich",
      B: "Deshalb",
      C: "Daher",
      D: "Trotzdem",
    },
    correct: "D",
  },
  {
    question: "Welche Satzstellung ist nach 'sodass' korrekt?",
    options: {
      A: "Verbzweitstellung",
      B: "Verberststellung",
      C: "Verbletzstellung",
      D: "Keine der genannten",
    },
    correct: "C",
  },
  {
    question: "Welche Konjunktion leitet einen konditionalen Nebensatz ein?",
    options: {
      A: "Obwohl",
      B: "Falls",
      C: "Damit",
      D: "Während",
    },
    correct: "B",
  },
  {
    question: "Welcher Satz enthält einen Konditionalsatz ohne Konjunktion?",
    options: {
      A: "Wenn du fleißig lernst, wirst du die Prüfung bestehen.",
      B: "Lernst du fleißig, wirst du die Prüfung bestehen.",
      C: "Du wirst die Prüfung bestehen, falls du fleißig lernst.",
      D: "Da du fleißig lernst, wirst du die Prüfung bestehen.",
    },
    correct: "B",
  },
  {
    question: "Welches ist die richtige Übersetzung für 'even if'?",
    options: {
      A: "Trotzdem",
      B: "Obwohl",
      C: "Selbst wenn",
      D: "Als ob",
    },
    correct: "C",
  },
  {
    question: "Welche Konjunktion drückt eine Einschränkung aus?",
    options: {
      A: "Wenn",
      B: "Falls",
      C: "Sofern",
      D: "Ob",
    },
    correct: "C",
  },
  {
    question: "In welchem Satz wird ein irrealer Konditionalsatz ausgedrückt?",
    options: {
      A: "Wenn ich Zeit hätte, würde ich dich besuchen.",
      B: "Wenn ich Zeit habe, besuche ich dich.",
      C: "Falls ich Zeit habe, besuche ich dich.",
      D: "Sobald ich Zeit habe, besuche ich dich.",
    },
    correct: "A",
  },
  {
    question:
      "Welche Konjunktion leitet einen modalen Nebensatz ein, der eine Art und Weise beschreibt?",
    options: {
      A: "Indem",
      B: "Damit",
      C: "Weil",
      D: "Nachdem",
    },
    correct: "A",
  },
  {
    question: "Welcher Satz enthält einen modalen Vergleichssatz?",
    options: {
      A: "Sie singt, während sie kocht.",
      B: "Sie singt, wie ihre Mutter es ihr beigebracht hat.",
      C: "Sie singt, damit die Zeit schneller vergeht.",
      D: "Sie singt, weil sie gute Laune hat.",
    },
    correct: "B",
  },
  {
    question:
      "Ergänzen Sie den Satz korrekt: 'Er benahm sich, _____ er betrunken wäre.'",
    options: {
      A: "wie",
      B: "als",
      C: "als ob",
      D: "wenn",
    },
    correct: "C",
  },
  {
    question: "Welche Konjunktion drückt einen Instrumentalnebensatz aus?",
    options: {
      A: "Indem",
      B: "Wobei",
      C: "Anstatt dass",
      D: "Ohne dass",
    },
    correct: "A",
  },
  {
    question: "In welchem Satz wird die modale Beziehung korrekt ausgedrückt?",
    options: {
      A: "Er lernte Deutsch, indem er deutsche Filme schaute.",
      B: "Er lernte Deutsch, nachdem er deutsche Filme geschaut hatte.",
      C: "Er lernte Deutsch, bevor er deutsche Filme schaute.",
      D: "Er lernte Deutsch, obwohl er deutsche Filme schaute.",
    },
    correct: "A",
  },
  {
    question: "In welchem Fall steht der Infinitiv ohne 'zu'?",
    options: {
      A: "Nach Modalverben",
      B: "Nach 'um'",
      C: "Nach 'ohne'",
      D: "Nach 'anstatt'",
    },
    correct: "A",
  },
  {
    question: "Welcher Satz verwendet den Infinitiv mit 'zu' korrekt?",
    options: {
      A: "Ich muss morgen früh aufstehen zu.",
      B: "Er versucht, pünktlich zu kommen.",
      C: "Wir werden bald zu umziehen.",
      D: "Sie möchte ein Buch zu lesen.",
    },
    correct: "B",
  },
  {
    question: "Bei welchem Verb steht der Infinitiv ohne 'zu'?",
    options: {
      A: "anfangen",
      B: "hoffen",
      C: "bleiben",
      D: "vergessen",
    },
    correct: "C",
  },
  {
    question:
      "Ergänzen Sie den Satz korrekt: 'Es ist wichtig, regelmäßig _____ essen.'",
    options: {
      A: "zu",
      B: "-",
      C: "für zu",
      D: "um zu",
    },
    correct: "A",
  },
  {
    question: "Welcher Satz ist grammatikalisch korrekt?",
    options: {
      A: "Sie geht einkaufen zu.",
      B: "Ich höre ihn singen zu.",
      C: "Er hilft mir kochen.",
      D: "Wir haben vor, morgen abzureisen.",
    },
    correct: "D",
  },
  {
    question:
      "Wann kann man einen 'dass'-Satz durch einen Infinitiv mit 'zu' ersetzen?",
    options: {
      A: "Wenn beide Sätze verschiedene Subjekte haben",
      B: "Wenn beide Sätze das gleiche Subjekt haben",
      C: "Wenn der Hauptsatz im Präteritum steht",
      D: "Wenn der Nebensatz im Konjunktiv steht",
    },
    correct: "B",
  },
  {
    question:
      "Welcher Satz kann NICHT durch einen Infinitiv mit 'zu' ersetzt werden?",
    options: {
      A: "Ich hoffe, dass ich bald eine neue Wohnung finde.",
      B: "Sie behauptet, dass sie die Wahrheit sagt.",
      C: "Er glaubt, dass wir ihm nicht helfen wollen.",
      D: "Wir versprechen, dass wir pünktlich kommen.",
    },
    correct: "C",
  },
  {
    question: "Welcher Satz enthält eine korrekte Infinitivkonstruktion?",
    options: {
      A: "Er bittet mich, ihm zu helfen.",
      B: "Er bittet mich, dass ich ihm helfe.",
      C: "Er bittet mich, zu ihm helfen.",
      D: "Er bittet mich, dass zu helfen.",
    },
    correct: "A",
  },
  {
    question: "Welche Aussage ist korrekt?",
    options: {
      A: "Nach 'es ist wichtig' folgt immer ein 'dass'-Satz.",
      B: "Nach 'jemanden bitten' folgt immer ein Infinitiv mit 'zu'.",
      C: "'Dass'-Sätze und Infinitive mit 'zu' sind nie austauschbar.",
      D: "Bei gleichem Subjekt kann ein 'dass'-Satz oft durch einen Infinitiv mit 'zu' ersetzt werden.",
    },
    correct: "D",
  },
  {
    question: "Welcher Infinitivsatz mit 'zu' enthält einen Fehler?",
    options: {
      A: "Sie hofft, bald zu heiraten.",
      B: "Er verspricht, mit dem Rauchen aufzuhören.",
      C: "Ich freue mich, Sie kennenzulernen.",
      D: "Wir glauben, zu haben Recht.",
    },
    correct: "D",
  },
  {
    question:
      "Welche Infinitivkonstruktion drückt eine Absicht oder einen Zweck aus?",
    options: {
      A: "um ... zu",
      B: "ohne ... zu",
      C: "anstatt ... zu",
      D: "(an)statt ... zu",
    },
    correct: "A",
  },
  {
    question: "Welcher Satz enthält eine finale Infinitivkonstruktion?",
    options: {
      A: "Er lief, ohne sich umzusehen.",
      B: "Sie ging ins Geschäft, um Brot zu kaufen.",
      C: "Anstatt zu arbeiten, spielte er Computer.",
      D: "Er versucht, Deutsch zu lernen.",
    },
    correct: "B",
  },
  {
    question: "Welcher Satz enthält einen finalen Nebensatz?",
    options: {
      A: "Ich lerne Deutsch, damit ich in Deutschland studieren kann.",
      B: "Ich lerne Deutsch, weil ich in Deutschland studieren möchte.",
      C: "Ich lerne Deutsch, obwohl es schwierig ist.",
      D: "Ich lerne Deutsch, wenn ich Zeit habe.",
    },
    correct: "A",
  },
  {
    question: "Womit kann man einen 'um ... zu'-Satz ersetzen?",
    options: {
      A: "Mit einem 'weil'-Satz",
      B: "Mit einem 'damit'-Satz",
      C: "Mit einem 'obwohl'-Satz",
      D: "Mit einem 'wenn'-Satz",
    },
    correct: "B",
  },
  {
    question: "Welcher Satz drückt eine nicht realisierte Handlung aus?",
    options: {
      A: "Er ging ins Bett, ohne sich die Zähne zu putzen.",
      B: "Sie lernte fleißig, um die Prüfung zu bestehen.",
      C: "Anstatt zu schlafen, sah er fern.",
      D: "Er versucht, früh aufzustehen.",
    },
    correct: "C",
  },
  {
    question:
      "In welchem Kasus steht das Relativpronomen im folgenden Satz? 'Das ist der Mann, dem ich geholfen habe.'",
    options: {
      A: "Nominativ",
      B: "Akkusativ",
      C: "Dativ",
      D: "Genitiv",
    },
    correct: "C",
  },
  {
    question: "Welcher Relativsatz ist korrekt?",
    options: {
      A: "Die Frau, die ich gestern getroffen habe, ist Ärztin.",
      B: "Die Frau, der ich gestern getroffen habe, ist Ärztin.",
      C: "Die Frau, den ich gestern getroffen habe, ist Ärztin.",
      D: "Die Frau, das ich gestern getroffen habe, ist Ärztin.",
    },
    correct: "A",
  },
  {
    question:
      "Ergänzen Sie das korrekte Relativpronomen: 'Das ist der Student, _____ aus China kommt.'",
    options: {
      A: "der",
      B: "den",
      C: "dem",
      D: "dessen",
    },
    correct: "A",
  },
  {
    question: "In welchem Satz ist das Relativpronomen falsch?",
    options: {
      A: "Die Kinder, denen ich Geschenke gekauft habe, sind meine Neffen.",
      B: "Das Auto, das ich mir kaufen möchte, ist sehr teuer.",
      C: "Der Mann, den wir gestern kennengelernt haben, ist Architekt.",
      D: "Die Frau, der wir geholfen haben, hat uns gedankt.",
    },
    correct: "D",
  },
  {
    question:
      "Welches Relativpronomen passt in die Lücke? 'Das sind die Bücher, _____ ich lesen möchte.'",
    options: {
      A: "der",
      B: "die",
      C: "den",
      D: "dem",
    },
    correct: "B",
  },
  {
    question: "Welches Relativpronomen im Genitiv ist korrekt für 'die Frau'?",
    options: {
      A: "dessen",
      B: "deren",
      C: "denen",
      D: "derer",
    },
    correct: "B",
  },
  {
    question:
      "Ergänzen Sie das korrekte Relativpronomen: 'Das ist der Student, _____ Vater Professor ist.'",
    options: {
      A: "dessen",
      B: "deren",
      C: "dem",
      D: "den",
    },
    correct: "A",
  },
  {
    question:
      "In welchem Satz wird das Genitivrelativpronomen korrekt verwendet?",
    options: {
      A: "Die Kinder, dessen Eltern verreist sind, bleiben bei der Großmutter.",
      B: "Die Kinder, deren Eltern verreist sind, bleiben bei der Großmutter.",
      C: "Die Kinder, denen Eltern verreist sind, bleiben bei der Großmutter.",
      D: "Die Kinder, die Eltern verreist sind, bleiben bei der Großmutter.",
    },
    correct: "B",
  },
  {
    question: "Welches Relativpronomen im Genitiv passt zu 'das Haus'?",
    options: {
      A: "dessen",
      B: "deren",
      C: "das",
      D: "dem",
    },
    correct: "A",
  },
  {
    question: "Welche Aussage zum Genitivrelativpronomen ist korrekt?",
    options: {
      A: "'Dessen' wird nur für maskuline Substantive verwendet.",
      B: "'Deren' wird für feminine und plurale Substantive verwendet.",
      C: "'Dessen' wird für maskuline und neutrale Substantive verwendet.",
      D: "'Deren' wird nur für feminine Substantive verwendet.",
    },
    correct: "C",
  },
  {
    question:
      "Welches Fragepronomen kann als Relativpronomen verwendet werden?",
    options: {
      A: "Wer",
      B: "Was",
      C: "Wo",
      D: "Wann",
    },
    correct: "C",
  },
  {
    question:
      "Ergänzen Sie den Satz korrekt: 'Berlin ist die Stadt, _____ ich geboren bin.'",
    options: {
      A: "wo",
      B: "wohin",
      C: "woher",
      D: "wann",
    },
    correct: "A",
  },
  {
    question: "Welcher Satz verwendet 'als' als Relativpronomen korrekt?",
    options: {
      A: "Er ist der beste Freund, als ich je hatte.",
      B: "Das war der schönste Tag, als ich je erlebt habe.",
      C: "Sie ist die intelligenteste Person, als ich kenne.",
      D: "Das ist alles, als ich sagen kann.",
    },
    correct: "D",
  },
  {
    question: "In welchem Fall wird 'wofür' als Relativpronomen verwendet?",
    options: {
      A: "Bei Personen",
      B: "Bei Ortsangaben",
      C: "Bei Zeitangaben",
      D: "Bei Sachen mit Präposition",
    },
    correct: "D",
  },
  {
    question: "Welcher Satz enthält ein korrektes w-Relativpronomen?",
    options: {
      A: "Das ist der Grund, wofür ich hier bin.",
      B: "Das ist der Grund, woran ich hier bin.",
      C: "Das ist der Grund, weshalb ich hier bin.",
      D: "Das ist der Grund, wonach ich hier bin.",
    },
    correct: "C",
  },
  {
    question: "Welche Konjunktion drückt einen Gegensatz aus?",
    options: {
      A: "Denn",
      B: "Jedoch",
      C: "Außerdem",
      D: "Deswegen",
    },
    correct: "B",
  },
  {
    question: "Welche Zweiteilige Konjunktion ist korrekt verwendet?",
    options: {
      A: "Entweder er kommt, und wir gehen ins Kino.",
      B: "Weder sie ist klug, noch er ist intelligent.",
      C: "Je mehr ich lerne, desto besser verstehe ich es.",
      D: "Nicht nur er ist gekommen, aber auch seine Freundin.",
    },
    correct: "C",
  },
  {
    question: "Welche Kombination drückt eine Alternative aus?",
    options: {
      A: "sowohl ... als auch",
      B: "weder ... noch",
      C: "entweder ... oder",
      D: "je ... desto",
    },
    correct: "C",
  },
  {
    question: "Welcher Satz verwendet 'zwar ... aber' korrekt?",
    options: {
      A: "Er ist zwar intelligent, sondern faul.",
      B: "Sie ist zwar reich, trotzdem unglücklich.",
      C: "Zwar kommt er aus Deutschland, aber er spricht kein Deutsch.",
      D: "Zwar will ich dir helfen, denn ich habe keine Zeit.",
    },
    correct: "C",
  },
  {
    question: "Welches Wortpaar drückt eine doppelte Verneinung aus?",
    options: {
      A: "entweder ... oder",
      B: "sowohl ... als auch",
      C: "weder ... noch",
      D: "nicht nur ... sondern auch",
    },
    correct: "C",
  },
  {
    question:
      "Ergänzen Sie den Satz mit dem passenden Doppelkonnektor: '__________ er viel Stress bei der Arbeit hat, __________ engagiert er sich noch ehrenamtlich im Verein.'",
    options: {
      A: "Obwohl ... trotzdem",
      B: "Weder ... noch",
      C: "Nicht nur ... sondern auch",
      D: "Je ... desto",
    },
    correct: "A",
  },
  {
    question:
      "Welcher Doppelkonnektor passt in die Lücke? '__________ du mir hilfst, __________ schaffe ich es nicht rechtzeitig.'",
    options: {
      A: "Entweder ... oder",
      B: "Sowohl ... als auch",
      C: "Wenn ... dann",
      D: "Zwar ... aber",
    },
    correct: "C",
  },
  {
    question:
      "Wählen Sie den korrekten Doppelkonnektor: '__________ er durch seine Krankheit eingeschränkt war, __________ nahm er an dem Marathon teil.'",
    options: {
      A: "Weder ... noch",
      B: "Sowohl ... als auch",
      C: "Nicht nur ... sondern auch",
      D: "Zwar ... aber",
    },
    correct: "D",
  },
  {
    question: "In welchem Satz ist der Doppelkonnektor falsch verwendet?",
    options: {
      A: "Je länger sie übte, desto besser wurde ihr Klavierspiel.",
      B: "Entweder kommst du pünktlich, oder du bleibst ganz zu Hause.",
      C: "Sowohl die Qualität als auch der Preis haben mich überzeugt.",
      D: "Nicht nur er hat gelogen, sondern er hat auch Beweise vernichtet.",
    },
    correct:
      "D (korrekt wäre: 'Nicht nur hat er gelogen, sondern er hat auch...')",
  },
  {
    question:
      "Ergänzen Sie den Satz korrekt: '__________ wir früh aufbrechen, __________ wir mehr von der Stadt sehen.'",
    options: {
      A: "Je früher ... desto mehr",
      B: "Einerseits ... andererseits",
      C: "Weder ... noch",
      D: "Sowohl ... als auch",
    },
    correct: "A",
  },
  {
    question:
      "Welche Negation ist in diesem Kontext am passendsten? 'Ich habe __________ Zeit, mich um alles zu kümmern.'",
    options: {
      A: "keine",
      B: "nicht",
      C: "niemand",
      D: "nichts",
    },
    correct: "A",
  },
  {
    question:
      "Wie lautet die korrekte Negation im folgenden Satz? 'Gestern ist __________ zur Party erschienen.'",
    options: {
      A: "kein",
      B: "keine",
      C: "niemand",
      D: "nicht",
    },
    correct: "C",
  },
  {
    question: "Welcher negierte Satz ist grammatikalisch korrekt?",
    options: {
      A: "Er hat nie nicht gearbeitet.",
      B: "Ich habe keinen Brief bekommen.",
      C: "Wir sind nirgendwo gegangen.",
      D: "Sie hat nichts niemandem erzählt.",
    },
    correct: "B",
  },
  {
    question:
      "Was ist die korrekte doppelte Negation in diesem Satz? 'Es ist unmöglich, dass man __________ bemerkt hat.'",
    options: {
      A: "nichts",
      B: "niemanden",
      C: "nicht nichts",
      D: "kein nichts",
    },
    correct: "A",
  },
  {
    question:
      "Bei welchem Satz ändert die Position des Negationswortes die Bedeutung?",
    options: {
      A: "Ich lese nicht gerne.",
      B: "Nicht alle Studenten waren anwesend.",
      C: "Sie hat nicht getanzt.",
      D: "Er kommt nicht aus Deutschland.",
    },
    correct: "B",
  },
  {
    question:
      "Welches 'irgend'-Wort passt in folgende Lücke? 'Hast du __________ von meinen Büchern gesehen?'",
    options: {
      A: "irgendwann",
      B: "irgendwo",
      C: "irgendwer",
      D: "irgendeins",
    },
    correct: "D",
  },
  {
    question:
      "Vervollständigen Sie den Satz: '__________ wird uns schon helfen können.'",
    options: {
      A: "Irgendwelche",
      B: "Irgendwas",
      C: "Irgendwer",
      D: "Irgendwohin",
    },
    correct: "C",
  },
  {
    question: "Welche Aussage ist korrekt?",
    options: {
      A: "'Irgendwoher' bezeichnet eine unbestimmte Richtung in die Zukunft.",
      B: "'Irgendwann' bezeichnet einen unbestimmten Zeitpunkt.",
      C: "'Irgendwo' bezieht sich auf eine unbestimmte Person.",
      D: "'Irgendwer' bezeichnet eine unbestimmte Sache.",
    },
    correct: "B",
  },
  {
    question:
      "Ergänzen Sie den Satz korrekt: 'Ich muss das Paket __________ abgeben, bevor ich nach Hause gehe.'",
    options: {
      A: "irgendwo",
      B: "irgendwie",
      C: "irgendwas",
      D: "irgendwem",
    },
    correct: "A",
  },
  {
    question: "Welcher Satz ist grammatikalisch falsch?",
    options: {
      A: "Hast du irgendwen gesehen, der mir helfen könnte?",
      B: "Irgendwas muss ich doch tun können!",
      C: "Ich habe irgendwo gelesen, dass der Film gut sein soll.",
      D: "Er hat irgendwann in irgendwo gewohnt.",
    },
    correct: "D (korrekt wäre: 'irgendwo' ohne 'in')",
  },
  {
    question: "Welches Wortpaar drückt die Richtung korrekt aus?",
    options: {
      A: "drinnen / draußen",
      B: "oben / unten",
      C: "hinauf / hinunter",
      D: "rechts / links",
    },
    correct: "C",
  },
  {
    question: "Welches Präfix bezeichnet die Bewegung zum Sprecher hin?",
    options: {
      A: "hin-",
      B: "her-",
      C: "auf-",
      D: "ein-",
    },
    correct: "B",
  },
  {
    question:
      "Welche Präposition ist korrekt? 'Der Schlüssel liegt __________ dem Tisch.'",
    options: {
      A: "über",
      B: "an",
      C: "auf",
      D: "in",
    },
    correct: "C",
  },
  {
    question:
      "Ergänzen Sie den Satz mit der richtigen Präposition: 'Die Katze sprang __________ das Sofa und versteckte sich __________ dem Kissen.'",
    options: {
      A: "auf / unter",
      B: "über / hinter",
      C: "neben / vor",
      D: "zwischen / neben",
    },
    correct: "A",
  },
  {
    question: "Welcher Satz verwendet die Richtungsangabe falsch?",
    options: {
      A: "Kommst du mit zu mir herauf?",
      B: "Geh bitte dort hinüber!",
      C: "Sie lief hinaus aus dem Haus.",
      D: "Ich gehe herein in den Garten.",
    },
    correct:
      "D (korrekt wäre: 'hinein' da die Bewegung vom Sprecher weg erfolgt)",
  },
  {
    question: "In welchem Fall ist 'es' ein Platzhalter?",
    options: {
      A: "Es regnet heute stark.",
      B: "Es handelt sich um ein wichtiges Dokument.",
      C: "Es wurde viel diskutiert.",
      D: "Es freut mich, dich zu sehen.",
    },
    correct: "C",
  },
  {
    question: "Bei welchem Satz kann 'es' nicht weggelassen werden?",
    options: {
      A: "Es stehen viele Bücher im Regal.",
      B: "Es gibt verschiedene Möglichkeiten.",
      C: "Es haben viele Menschen demonstriert.",
      D: "Es kommen morgen Gäste.",
    },
    correct: "B",
  },
  {
    question: "In welchem Satz ist 'es' das grammatikalische Subjekt?",
    options: {
      A: "Es ist schön, dass du da bist.",
      B: "Ich finde es interessant.",
      C: "Es schneit.",
      D: "Es wurden alle Fragen beantwortet.",
    },
    correct: "C",
  },
  {
    question: "Welcher Satz verwendet 'es' als Korrelat?",
    options: {
      A: "Es friert mich.",
      B: "Es geht um deine Zukunft.",
      C: "Es ist bekannt, dass er lügt.",
      D: "Es wurden keine Fehler gefunden.",
    },
    correct: "C",
  },
  {
    question:
      "Welche Funktion hat 'es' in folgendem Satz? 'Es fehlt mir an Geduld.'",
    options: {
      A: "Formales Subjekt",
      B: "Pronomen für ein vorher genanntes Nomen",
      C: "Platzhalter",
      D: "Korrelat für einen Nebensatz",
    },
    correct: "A",
  },
  {
    question: "Welche Verbindung ist ein Funktionsverbgefüge?",
    options: {
      A: "einen Brief schreiben",
      B: "eine Entscheidung treffen",
      C: "ein Buch lesen",
      D: "eine Person sehen",
    },
    correct: "B",
  },
  {
    question:
      "Ergänzen Sie das korrekte Funktionsverb: 'Die Regierung hat eine neue Regelung in __________ gebracht.'",
    options: {
      A: "Kraft",
      B: "Gang",
      C: "Tat",
      D: "Einsatz",
    },
    correct: "A",
  },
  {
    question: "Welches der folgenden Beispiele ist kein Funktionsverbgefüge?",
    options: {
      A: "zur Verfügung stehen",
      B: "Einfluss nehmen",
      C: "ins Gespräch kommen",
      D: "eine Suppe kochen",
    },
    correct: "D",
  },
  {
    question:
      "Wählen Sie das passende Funktionsverbgefüge: 'Nach langer Diskussion haben wir endlich eine Lösung __________.'",
    options: {
      A: "gefunden",
      B: "erzielt",
      C: "entdeckt",
      D: "bekommen",
    },
    correct: "B",
  },
  {
    question: "Welches Funktionsverbgefüge drückt einen Prozess aus?",
    options: {
      A: "zum Abschluss kommen",
      B: "in Bewegung setzen",
      C: "unter Beweis stellen",
      D: "zur Kenntnis nehmen",
    },
    correct: "B",
  },
  {
    question: "Welches Funktionsverbgefüge enthält ein nominalisiertes Verb?",
    options: {
      A: "in Ordnung bringen",
      B: "zum Ausdruck bringen",
      C: "zur Verfügung stellen",
      D: "in Frage stellen",
    },
    correct: "B",
  },
  {
    question:
      "Welches ist das korrekte Funktionsverb für: 'Er brachte das Projekt zum __________.'",
    options: {
      A: "Ende",
      B: "Schluss",
      C: "Abschluss",
      D: "Beenden",
    },
    correct: "C",
  },
  {
    question:
      "Welchen Kasus verlangt das Funktionsverbgefüge 'in Betracht ziehen'?",
    options: {
      A: "Nominativ",
      B: "Genitiv",
      C: "Dativ",
      D: "Akkusativ",
    },
    correct: "D",
  },
  {
    question:
      "Welches Funktionsverbgefüge kann man durch ein einfaches Verb ersetzen? 'Wir müssen eine Entscheidung treffen.'",
    options: {
      A: "entschließen",
      B: "entscheiden",
      C: "beschließen",
      D: "bestimmen",
    },
    correct: "B",
  },
  {
    question:
      "Welches Funktionsverbgefüge passt in die Lücke? 'Die neue Methode hat sich in der Praxis __________.'",
    options: {
      A: "zur Bewährung gebracht",
      B: "in Bewährung gesetzt",
      C: "unter Beweis gestellt",
      D: "unter Bewährung gestellt",
    },
    correct: "C",
  },
  {
    question: "Welche Funktion hat 'da-' in Verbindung mit einer Präposition?",
    options: {
      A: "Es verstärkt die Bedeutung der Präposition.",
      B: "Es ersetzt ein zuvor genanntes Nomen.",
      C: "Es verneint die Aussage der Präposition.",
      D: "Es drückt einen Ort aus.",
    },
    correct: "B",
  },
  {
    question:
      "Welches 'da-'Wort passt in die Lücke? 'Das Problem ist sehr komplex, __________ müssen wir uns morgen beschäftigen.'",
    options: {
      A: "davon",
      B: "damit",
      C: "dazu",
      D: "darauf",
    },
    correct: "B",
  },
  {
    question:
      "Ergänzen Sie korrekt: '__________ kann ich mich nicht erinnern.'",
    options: {
      A: "Daran",
      B: "Darauf",
      C: "Dafür",
      D: "Davon",
    },
    correct: "A",
  },
  {
    question: "In welchem Satz ist das 'da-'Wort falsch verwendet?",
    options: {
      A: "Das ist das Buch, davon ich dir erzählt habe.",
      B: "Er hat eine Idee, darüber er mit dir sprechen möchte.",
      C: "Wir haben ein Problem, damit wir uns beschäftigen müssen.",
      D: "Das ist der Grund, dafür ich zu spät gekommen bin.",
    },
    correct: "A (korrekt wäre: 'wovon')",
  },
  {
    question: "Welches da-Wort bezieht sich auf einen Ort?",
    options: {
      A: "darum",
      B: "dabei",
      C: "dagegen",
      D: "daher",
    },
    correct: "D",
  },
  {
    question: "Welche Funktion haben Modalpartikeln im Satz?",
    options: {
      A: "Sie verändern die Zeitform des Verbs.",
      B: "Sie drücken die Einstellung des Sprechers aus.",
      C: "Sie verbinden Haupt- und Nebensätze.",
      D: "Sie ersetzen das Subjekt.",
    },
    correct: "B",
  },
  {
    question: "Welche Modalpartikel drückt Überraschung aus?",
    options: {
      A: "ja",
      B: "doch",
      C: "mal",
      D: "eben",
    },
    correct: "B",
  },
  {
    question: "Welcher Satz enthält eine falsch verwendete Modalpartikel?",
    options: {
      A: "Das ist doch nicht dein Ernst!",
      B: "Komm mal her!",
      C: "Das habe ich ja gestern schon gesagt.",
      D: "Er ist eben angekommen nach Hause.",
    },
    correct: "D",
  },
  {
    question: "Welche Modalpartikel kann in einem Befehl stehen?",
    options: {
      A: "ja",
      B: "eben",
      C: "denn",
      D: "mal",
    },
    correct: "D",
  },
  {
    question:
      "Was drückt die Modalpartikel in diesem Satz aus? 'Das ist ja interessant!'",
    options: {
      A: "Eine Frage",
      B: "Eine Verstärkung",
      C: "Eine Aufforderung",
      D: "Einen Widerspruch",
    },
    correct: "B",
  },
  {
    question:
      "Welche Transformation ist korrekt? Aktiv: 'Der Lehrer erklärt die Grammatik.' Passiv:",
    options: {
      A: "Die Grammatik erklärt der Lehrer.",
      B: "Die Grammatik wird vom Lehrer erklärt.",
      C: "Die Grammatik ist erklärt worden.",
      D: "Vom Lehrer wird die Grammatik erklärt sein.",
    },
    correct: "B",
  },
  {
    question:
      "Transformieren Sie in einen Konditionalsatz: 'Bei gutem Wetter gehen wir schwimmen.'",
    options: {
      A: "Wenn gutes Wetter ist, gehen wir schwimmen.",
      B: "Als gutes Wetter war, gingen wir schwimmen.",
      C: "Da gutes Wetter ist, gehen wir schwimmen.",
      D: "Obwohl gutes Wetter ist, gehen wir schwimmen.",
    },
    correct: "A",
  },
  {
    question:
      "Welche Transformation des Satzes ist nicht äquivalent? 'Obwohl es regnete, gingen wir spazieren.'",
    options: {
      A: "Trotz des Regens gingen wir spazieren.",
      B: "Wir gingen spazieren, obwohl es regnete.",
      C: "Es regnete, aber wir gingen spazieren.",
      D: "Wir gingen spazieren, weil es regnete.",
    },
    correct: "D",
  },
  {
    question:
      "Transformieren Sie korrekt von direkter in indirekte Rede: 'Er sagte: \"Ich komme morgen.\"'",
    options: {
      A: "Er sagte, er kommt morgen.",
      B: "Er sagte, er käme am nächsten Tag.",
      C: "Er sagte, dass er morgen kommen würde.",
      D: "Er sagte, er wird morgen kommen.",
    },
    correct: "B",
  },
  {
    question:
      "Welche Funktion hat das Plusquamperfekt in folgendem Satz? 'Nachdem er gegessen hatte, ging er spazieren.'",
    options: {
      A: "Es zeigt eine zukünftige Handlung.",
      B: "Es betont den Beginn der Handlung.",
      C: "Es beschreibt eine Handlung, die vor einer anderen in der Vergangenheit stattfand.",
      D: "Es zeigt eine allgemeine Gewohnheit.",
    },
    correct: "C",
  },
  {
    question: "Welche der folgenden Nominalisierungen ist korrekt?",
    options: {
      A: "Das Laufendes ist gesund.",
      B: "Das Laufen ist gesund.",
      C: "Der Laufen ist gesund.",
      D: "Die Laufen ist gesund.",
    },
    correct: "B",
  },
  {
    question: "Welches Genus hat die Nominalisierung 'das Gelesene'?",
    options: {
      A: "Maskulinum",
      B: "Femininum",
      C: "Neutrum",
      D: "Pluralform ohne Genus",
    },
    correct: "C",
  },
  {
    question:
      "Was ist die richtige Nominalisierung des Satzes 'Sie läuft schnell'?",
    options: {
      A: "Das Lauf ist schnell.",
      B: "Ihr schnelles Laufen.",
      C: "Die schnelle Laufen.",
      D: "Der schnelle Lauf.",
    },
    correct: "B",
  },
  {
    question: "Welche Nominalisierung ist falsch gebildet?",
    options: {
      A: "das Arbeiten (arbeiten)",
      B: "das Verständnis (verstehen)",
      C: "das Geräusche (rauschen)",
      D: "die Begeisterung (begeistern)",
    },
    correct: "C",
  },
  {
    question: "Bei der Nominalisierung eines Verbs ändert sich oft:",
    options: {
      A: "Nur die Schreibweise",
      B: "Die Wortart und die grammatikalischen Eigenschaften",
      C: "Nur die Aussprache",
      D: "Nichts, die Form bleibt gleich",
    },
    correct: "B",
  },
  {
    question: "Was ist ein Linksattribut in der deutschen Grammatik?",
    options: {
      A: "Ein Attribut, das rechts vom Bezugswort steht",
      B: "Ein Attribut, das links vom Bezugswort steht",
      C: "Ein Attribut am Satzanfang",
      D: "Ein Attribut am Satzende",
    },
    correct: "B",
  },
  {
    question: "Welches ist ein typisches Rechtsattribut?",
    options: {
      A: "Adjektivattribut",
      B: "Genitivattribut",
      C: "Possessivpronomen",
      D: "Artikel",
    },
    correct: "B",
  },
  {
    question: "In welchem Beispiel findet sich ein Linksattribut?",
    options: {
      A: "Der Mann mit dem Hut",
      B: "Das Haus, das renoviert wurde",
      C: "Die alte Vase",
      D: "Berlin, die Hauptstadt Deutschlands",
    },
    correct: "C",
  },
  {
    question: "Welche Konstruktion stellt ein erweitertes Linksattribut dar?",
    options: {
      A: "Die Frau des Präsidenten",
      B: "Der Mann, den ich gestern traf",
      C: "Der von seinem Chef gelobte Mitarbeiter",
      D: "Berlin als Kulturmetropole",
    },
    correct: "C",
  },
  {
    question: "Welches ist KEIN mögliches Rechtsattribut?",
    options: {
      A: "Relativsatz",
      B: "Präpositionalattribut",
      C: "Genitivattribut",
      D: "Komparativ",
    },
    correct: "D",
  },
  {
    question:
      "Welche der folgenden Wortgruppen kann sowohl als Präposition als auch als Adverb verwendet werden?",
    options: {
      A: "mit",
      B: "während",
      C: "außer",
      D: "entlang",
    },
    correct: "D",
  },
  {
    question: "Welches Wort ist ein kausaler Konnektor?",
    options: {
      A: "nachdem",
      B: "weil",
      C: "bevor",
      D: "obwohl",
    },
    correct: "B",
  },
  {
    question: "Welche Präposition verlangt den Genitiv?",
    options: {
      A: "für",
      B: "mit",
      C: "trotz",
      D: "ohne",
    },
    correct: "C",
  },
  {
    question: "Was ist die korrekte Verwendung des Konnektors 'sodass'?",
    options: {
      A: "Er ist krank, sodass er nicht kommen kann.",
      B: "Er ist krank. Sodass er nicht kommen kann.",
      C: "Sodass er nicht kommen kann, ist er krank.",
      D: "Er ist krank sodass er nicht kommen kann.",
    },
    correct: "A",
  },
  {
    question: "Welche der folgenden Wortgruppen ist ein Pronominaladverb?",
    options: {
      A: "darüber",
      B: "durch",
      C: "denn",
      D: "deshalb",
    },
    correct: "A",
  },
  {
    question:
      "Welches Wort wird NICHT als subordinierender Konnektor verwendet?",
    options: {
      A: "obwohl",
      B: "weil",
      C: "aber",
      D: "wenn",
    },
    correct: "C",
  },
  {
    question:
      "Welche der folgenden Präpositionen kann sowohl mit dem Dativ als auch mit dem Akkusativ stehen?",
    options: {
      A: "ohne",
      B: "für",
      C: "an",
      D: "mit",
    },
    correct: "C",
  },
  {
    question:
      "Wie nennt man Adverbien, die eine zeitliche Beziehung ausdrücken?",
    options: {
      A: "Lokaladverbien",
      B: "Modaladverbien",
      C: "Temporaladverbien",
      D: "Kausaladverbien",
    },
    correct: "C",
  },
  {
    question: "Welcher Konnektor leitet einen Konzessivsatz ein?",
    options: {
      A: "weil",
      B: "obwohl",
      C: "nachdem",
      D: "damit",
    },
    correct: "B",
  },
  {
    question: "Bei welchem Konnektor steht das finite Verb am Ende des Satzes?",
    options: {
      A: "und",
      B: "denn",
      C: "oder",
      D: "dass",
    },
    correct: "D",
  },
  {
    question: "Welche der folgenden Verbindungen ist KEINE Subjunktion?",
    options: {
      A: "während",
      B: "falls",
      C: "trotzdem",
      D: "sofern",
    },
    correct: "C",
  },
  {
    question: "Welches Adverb drückt eine Einschränkung aus?",
    options: {
      A: "außerdem",
      B: "deshalb",
      C: "allerdings",
      D: "nämlich",
    },
    correct: "C",
  },
  {
    question:
      "Bei welchem Konnektor steht das Verb an zweiter Position im Satz?",
    options: {
      A: "dass",
      B: "weil",
      C: "deshalb",
      D: "obwohl",
    },
    correct: "C",
  },
  {
    question:
      "Welche der folgenden Präpositionen verlangt immer den Akkusativ?",
    options: {
      A: "seit",
      B: "durch",
      C: "bei",
      D: "nach",
    },
    correct: "B",
  },
  {
    question:
      "Welche Funktion hat die Präposition 'zu' im folgenden Satz: 'Sie ging zum Arzt.'?",
    options: {
      A: "Sie gibt die Richtung an",
      B: "Sie gibt den Zweck an",
      C: "Sie gibt eine Zeitangabe an",
      D: "Sie gibt ein Mittel an",
    },
    correct: "A",
  },
  {
    question:
      "Welche Umformung des Satzes 'Wegen des Regens fiel das Picknick aus' ist korrekt?",
    options: {
      A: "Das Picknick fiel aus, trotz des Regens.",
      B: "Das Picknick fiel aus, weil es regnete.",
      C: "Obwohl es regnete, fiel das Picknick aus.",
      D: "Seit es regnete, fiel das Picknick aus.",
    },
    correct: "B",
  },
  {
    question:
      "Welche Transformation von 'Nachdem er die Prüfung bestanden hatte, feierte er mit Freunden' ins Präsens ist korrekt?",
    options: {
      A: "Nachdem er die Prüfung besteht, feiert er mit Freunden.",
      B: "Nachdem er die Prüfung bestanden hat, feiert er mit Freunden.",
      C: "Wenn er die Prüfung besteht, feiert er mit Freunden.",
      D: "Weil er die Prüfung besteht, feiert er mit Freunden.",
    },
    correct: "B",
  },
  {
    question:
      "Welche Umformung des aktiven Satzes 'Der Lehrer lobt die Schüler' ins Passiv ist korrekt?",
    options: {
      A: "Die Schüler werden vom Lehrer gelobt.",
      B: "Die Schüler wurden vom Lehrer gelobt.",
      C: "Der Lehrer wird die Schüler loben.",
      D: "Die Schüler haben den Lehrer gelobt.",
    },
    correct: "A",
  },
  {
    question:
      "Wie lautet die korrekte indirekte Rede des Satzes 'Er sagte: \"Ich komme morgen.\"'?",
    options: {
      A: "Er sagte, ich komme morgen.",
      B: "Er sagte, er kommt morgen.",
      C: "Er sagte, er käme morgen.",
      D: "Er sagte, dass ich morgen komme.",
    },
    correct: "C",
  },
  {
    question:
      "Welche Umformung des Satzes 'Um die Prüfung zu bestehen, muss man viel lernen' ist korrekt?",
    options: {
      A: "Wenn man viel lernt, muss man die Prüfung bestehen.",
      B: "Man muss viel lernen, damit man die Prüfung besteht.",
      C: "Man muss viel lernen, weil man die Prüfung besteht.",
      D: "Da man die Prüfung besteht, muss man viel lernen.",
    },
    correct: "B",
  },
  {
    question: "Was bezeichnet man als 'Funktionsverbgefüge'?",
    options: {
      A: "Eine Verbindung aus Hilfsverb und Vollverb",
      B: "Eine Verbindung aus Modalverb und Vollverb",
      C: "Eine Verbindung aus bedeutungsarmem Verb und Substantiv",
      D: "Eine Verbindung aus zwei gleichrangigen Verben",
    },
    correct: "C",
  },
  {
    question: "Was ist ein 'Pleonasmus'?",
    options: {
      A: "Ein notwendiger Bestandteil jedes Satzes",
      B: "Eine überflüssige Doppelung (wie 'weißer Schimmel')",
      C: "Ein Stilmittel zur Betonung",
      D: "Ein grammatikalischer Fehler",
    },
    correct: "B",
  },
  {
    question: "Was versteht man unter dem Begriff 'Valenz' in der Linguistik?",
    options: {
      A: "Die Fähigkeit eines Wortes, bestimmte Satzglieder an sich zu binden",
      B: "Die Betonung eines Wortes",
      C: "Die Änderung der Wortstellung im Satz",
      D: "Die Häufigkeit, mit der ein Wort verwendet wird",
    },
    correct: "A",
  },
  {
    question: "Was ist eine 'Apposition'?",
    options: {
      A: "Ein nachgestelltes Attribut, das im gleichen Kasus steht wie sein Bezugswort",
      B: "Ein vorangestelltes Attribut",
      C: "Ein Nebensatz",
      D: "Ein Teil des Prädikats",
    },
    correct: "A",
  },
  {
    question: "Was ist ein 'Euphemismus'?",
    options: {
      A: "Eine bildhafte Umschreibung",
      B: "Eine beschönigende Umschreibung",
      C: "Eine übertriebene Darstellung",
      D: "Eine wörtliche Übersetzung",
    },
    correct: "B",
  },
  {
    question: "In welchem Fall muss KEIN Komma gesetzt werden?",
    options: {
      A: "Bei der Abtrennung eines Relativsatzes",
      B: "Bei der Abtrennung eines erweiterten Infinitivs mit 'zu'",
      C: "Bei der Aufzählung gleichrangiger Satzteile",
      D: "Bei der Verbindung von Hauptsätzen mit 'und'",
    },
    correct: "D",
  },
  {
    question: "Wo ist die Kommasetzung falsch?",
    options: {
      A: "Er kaufte Brot, Milch und Käse.",
      B: "Ich gehe ins Kino, weil der Film interessant ist.",
      C: "Das ist die Frau, die ich gestern getroffen habe.",
      D: "Sie sagte, dass sie kommt, und brachte Geschenke mit.",
    },
    correct: "D",
  },
  {
    question: "In welchem Fall ist ein Komma fakultativ?",
    options: {
      A: "Bei der Abtrennung von Nebensätzen",
      B: "Bei einfachen Infinitivgruppen mit 'zu'",
      C: "Bei der Abtrennung von Appositionen",
      D: "Bei der Abtrennung von Anreden",
    },
    correct: "B",
  },
  {
    question: "Wann steht ein Komma bei Partizipialgruppen?",
    options: {
      A: "Immer",
      B: "Nie",
      C: "Nur wenn sie am Satzanfang stehen",
      D: "Wenn sie als nähere Bestimmung eines Substantivs dienen",
    },
    correct: "D",
  },
  {
    question: "Wo ist die Kommasetzung korrekt?",
    options: {
      A: "Er kam zu spät weil er den Bus verpasst hatte.",
      B: "Ich möchte wissen ob du kommst.",
      C: "Das ist, meiner Meinung nach, keine gute Idee.",
      D: "Sie hatte Hunger denn sie hatte nicht gefrühstückt.",
    },
    correct: "C",
  },
  {
    question: "Was ist ein charakteristisches Merkmal der mündlichen Sprache?",
    options: {
      A: "Vollständige Sätze",
      B: "Komplexe Nebensatzstrukturen",
      C: "Ellipsen (Satzverkürzungen)",
      D: "Ausschließliche Verwendung des Hochdeutschen",
    },
    correct: "C",
  },
  {
    question:
      "Welches Phänomen tritt typischerweise in der gesprochenen Sprache auf?",
    options: {
      A: "Redundanz",
      B: "Vermeidung von Füllwörtern",
      C: "Strenge Einhaltung der Standardgrammatik",
      D: "Ausschließliche Verwendung von Fachvokabular",
    },
    correct: "A",
  },
  {
    question: "Was ist ein 'Anakoluth'?",
    options: {
      A: "Eine rhetorische Figur mit Wiederholungen",
      B: "Ein Satzbruch oder Konstruktionswechsel",
      C: "Eine besondere Form der Anrede",
      D: "Ein Merkmal der Schriftsprache",
    },
    correct: "B",
  },
  {
    question:
      "Welches sprachliche Phänomen ist typisch für informelle mündliche Kommunikation?",
    options: {
      A: "Nominalstil",
      B: "Passivkonstruktionen",
      C: "Partikelhäufung (ja, halt, eben, mal)",
      D: "Komplexe Attribute",
    },
    correct: "C",
  },
  {
    question: "Was versteht man unter 'Code-Switching'?",
    options: {
      A: "Das Wechseln zwischen verschiedenen Sprachen oder Sprachvarietäten während einer Kommunikation",
      B: "Das Verschlüsseln von Nachrichten",
      C: "Das Ändern des Gesprächsthemas",
      D: "Die Verwendung von Fachbegriffen",
    },
    correct: "A",
  },

  {
    question:
      "Welche Funktion hat ein Anhang in einem wissenschaftlichen Text?",
    options: {
      A: "Er enthält die wichtigsten Argumente",
      B: "Er fasst den Hauptteil zusammen",
      C: "Er enthält ergänzende Materialien und Daten",
      D: "Er dient der Einleitung in das Thema",
    },
    correct: "C",
  },
  {
    question: "Was gehört typischerweise NICHT in einen Anhang?",
    options: {
      A: "Tabellen und Grafiken",
      B: "Verwendete Fragebögen",
      C: "Die zentrale These der Arbeit",
      D: "Transkriptionen von Interviews",
    },
    correct: "C",
  },
  {
    question: "Wie werden Anhänge üblicherweise nummeriert?",
    options: {
      A: "Mit römischen Zahlen (I, II, III)",
      B: "Mit Buchstaben (Anhang A, B, C)",
      C: "Mit arabischen Zahlen (1, 2, 3)",
      D: "Alle Antworten können korrekt sein",
    },
    correct: "D",
  },
  {
    question: "Welche Aussage zum Anhang ist korrekt?",
    options: {
      A: "Der Anhang muss immer vor dem Literaturverzeichnis stehen",
      B: "Der Anhang kann weggelassen werden, wenn er für das Verständnis nicht essentiell ist",
      C: "Die Informationen im Anhang dürfen im Hauptteil nicht erwähnt werden",
      D: "Der Anhang darf nie länger sein als der Haupttext",
    },
    correct: "B",
  },
  {
    question: "Was ist bei Verweisen auf den Anhang im Haupttext zu beachten?",
    options: {
      A: "Verweise auf den Anhang sollten vermieden werden",
      B: "Verweise müssen immer in Fußnoten stehen",
      C: "Der Anhang sollte eindeutig bezeichnet werden (z.B. 'siehe Anhang A')",
      D: "Der gesamte Inhalt des Anhangs muss kurz erläutert werden",
    },
    correct: "C",
  },
  {
    question:
      "Was ist das Hauptziel von Automatisierungsübungen im Sprachtraining?",
    options: {
      A: "Die Aussprache einzelner Laute zu verbessern",
      B: "Grammatikalische Strukturen automatisch anwenden zu können",
      C: "Den Wortschatz zu erweitern",
      D: "Die Lesegeschwindigkeit zu erhöhen",
    },
    correct: "B",
  },
  {
    question:
      "Welche Methode wird bei Automatisierungsübungen häufig verwendet?",
    options: {
      A: "Pattern-Drill (Musterübungen mit Wiederholungen)",
      B: "Freies Schreiben",
      C: "Diskussionen in Gruppen",
      D: "Stilles Lesen",
    },
    correct: "A",
  },
  {
    question: "Was ist beim Üben mit Audiodateien besonders wichtig?",
    options: {
      A: "Die Texte auswendig zu lernen",
      B: "Regelmäßiges Üben in kurzen Einheiten",
      C: "Die Audiodateien nur einmal anzuhören",
      D: "Während des Hörens Notizen zu machen",
    },
    correct: "B",
  },
  {
    question:
      "Welche Übungsform ist typisch für die Automatisierung von Satzbaumustern?",
    options: {
      A: "Lückentexte",
      B: "Nachsprechübungen mit Substitution",
      C: "Diktat",
      D: "Kreuzworträtsel",
    },
    correct: "B",
  },
  {
    question:
      "Welchen Vorteil bieten Audiodateien im Vergleich zu schriftlichen Übungen?",
    options: {
      A: "Sie trainieren nur das Hörverstehen",
      B: "Sie bieten authentische Aussprache- und Intonationsmuster",
      C: "Sie sind immer kürzer als schriftliche Übungen",
      D: "Sie erfordern keine aktive Beteiligung des Lernenden",
    },
    correct: "B",
  },
  {
    question:
      "Welche Position hat das finite Verb in einem deutschen Hauptsatz?",
    options: {
      A: "Position 1",
      B: "Position 2",
      C: "Position 3",
      D: "Letzte Position",
    },
    correct: "B",
  },
  {
    question:
      "Welche Position hat das finite Verb in einem deutschen Nebensatz?",
    options: {
      A: "Position 1",
      B: "Position 2",
      C: "Position 3",
      D: "Letzte Position",
    },
    correct: "D",
  },
  {
    question:
      "Was steht in der Regel auf Position 1 eines deutschen Fragesatzes mit Fragewort?",
    options: {
      A: "Das Subjekt",
      B: "Das Fragewort",
      C: "Das finite Verb",
      D: "Ein temporales Adverb",
    },
    correct: "B",
  },
  {
    question: "Was bezeichnet man als 'Mittelfeld' im deutschen Satz?",
    options: {
      A: "Den Bereich zwischen finitem Verb und Satzende",
      B: "Den Bereich zwischen finitem Verb und infiniten Verbteilen",
      C: "Den Bereich zwischen Subjekt und Objekt",
      D: "Den Bereich zwischen zwei Nebensätzen",
    },
    correct: "B",
  },
  {
    question:
      "Welche Reihenfolge im Mittelfeld entspricht der üblichen Tendenz im Deutschen?",
    options: {
      A: "Dativ vor Akkusativ",
      B: "Akkusativ vor Dativ",
      C: "Genitiv vor Dativ",
      D: "Die Reihenfolge ist beliebig",
    },
    correct: "A",
  },
  {
    question: "Welche Präposition verlangt ausschließlich den Dativ?",
    options: {
      A: "für",
      B: "ohne",
      C: "mit",
      D: "durch",
    },
    correct: "C",
  },
  {
    question:
      "Bei welcher der folgenden Wechselpräpositionen steht der Dativ, wenn sie eine Ortsangabe bezeichnet?",
    options: {
      A: "in (Richtungsangabe)",
      B: "an (Ortsangabe)",
      C: "über (Richtungsangabe)",
      D: "hinter (Richtungsangabe)",
    },
    correct: "B",
  },
  {
    question: "Welche Präposition verlangt den Genitiv?",
    options: {
      A: "trotz",
      B: "nach",
      C: "bei",
      D: "zu",
    },
    correct: "A",
  },
  {
    question:
      "Welche Präposition kann sowohl mit dem Dativ als auch mit dem Akkusativ stehen?",
    options: {
      A: "seit",
      B: "wegen",
      C: "vor",
      D: "gegen",
    },
    correct: "C",
  },
  {
    question:
      "In welchem Fall wird die Präposition 'wegen' mit dem Dativ verwendet?",
    options: {
      A: "In der gehobenen Schriftsprache",
      B: "Bei Personennamen",
      C: "In der Umgangssprache",
      D: "Bei Zeitangaben",
    },
    correct: "C",
  },
  {
    question: "Welche Präposition passt zu 'sich freuen'?",
    options: {
      A: "über (Akk.) / auf (Akk.)",
      B: "von (Dat.) / mit (Dat.)",
      C: "zu (Dat.) / bei (Dat.)",
      D: "an (Dat.) / in (Dat.)",
    },
    correct: "A",
  },
  {
    question: "Welche Präposition folgt nach dem Adjektiv 'stolz'?",
    options: {
      A: "mit",
      B: "für",
      C: "auf",
      D: "von",
    },
    correct: "C",
  },
  {
    question: "Welche Präposition wird mit dem Verb 'sich erinnern' verwendet?",
    options: {
      A: "über",
      B: "an",
      C: "für",
      D: "bei",
    },
    correct: "B",
  },
  {
    question: "Welche Präposition passt zum Nomen 'Interesse'?",
    options: {
      A: "auf",
      B: "für",
      C: "an",
      D: "zu",
    },
    correct: "C",
  },
  {
    question: "Welches Verb wird mit der Präposition 'nach' verwendet?",
    options: {
      A: "denken",
      B: "fragen",
      C: "zweifeln",
      D: "achten",
    },
    correct: "B",
  },
  {
    question: "Welche Präposition folgt nach dem Verb 'abhängen'?",
    options: {
      A: "mit",
      B: "zu",
      C: "von",
      D: "für",
    },
    correct: "C",
  },
  {
    question:
      "Mit welcher Präposition wird das Adjektiv 'verantwortlich' verwendet?",
    options: {
      A: "mit",
      B: "zu",
      C: "auf",
      D: "für",
    },
    correct: "D",
  },
  {
    question: "Welche Präposition wird mit dem Nomen 'Angst' verwendet?",
    options: {
      A: "von",
      B: "vor",
      C: "zu",
      D: "bei",
    },
    correct: "B",
  },
  {
    question: "Mit welcher Präposition steht das Verb 'sich beschäftigen'?",
    options: {
      A: "mit",
      B: "über",
      C: "für",
      D: "an",
    },
    correct: "A",
  },
  {
    question: "Welche Präposition folgt nach dem Adjektiv 'müde'?",
    options: {
      A: "von",
      B: "aus",
      C: "für",
      D: "mit",
    },
    correct: "A",
  },
  {
    question: "Welches Verb verlangt den Dativ?",
    options: {
      A: "loben",
      B: "helfen",
      C: "sehen",
      D: "mögen",
    },
    correct: "B",
  },
  {
    question: "Welches Verb verlangt den Genitiv?",
    options: {
      A: "sich erinnern",
      B: "sich bedienen",
      C: "gefallen",
      D: "folgen",
    },
    correct: "B",
  },
  {
    question: "Welches Adjektiv wird mit dem Dativ verwendet?",
    options: {
      A: "wert",
      B: "sicher",
      C: "ähnlich",
      D: "wichtig",
    },
    correct: "C",
  },
  {
    question: "Welches Verb kann zwei Akkusativobjekte haben?",
    options: {
      A: "geben",
      B: "lehren",
      C: "sagen",
      D: "schenken",
    },
    correct: "B",
  },
  {
    question:
      "Bei welchem Verb steht die Person im Dativ und die Sache im Akkusativ?",
    options: {
      A: "überzeugen",
      B: "erklären",
      C: "beibringen",
      D: "bewundern",
    },
    correct: "C",
  },
  {
    question: "Welche Form ist korrekt?",
    options: {
      A: "er hat geschwimmt",
      B: "er hat geschwommen",
      C: "er hat schwimmen",
      D: "er hat geschwammen",
    },
    correct: "B",
  },
  {
    question: "Wie lautet das Partizip II von 'empfehlen'?",
    options: {
      A: "empfehlt",
      B: "empfohlen",
      C: "empfehlen",
      D: "empfahl",
    },
    correct: "B",
  },
  {
    question: "Welche Formen gehören zum Verb 'bitten'?",
    options: {
      A: "bitten - bat - gebeten",
      B: "bitten - bitt - gebitten",
      C: "bitten - bietete - gebietet",
      D: "bitten - bot - geboten",
    },
    correct: "A",
  },
  {
    question: "Welches ist die korrekte Präteritumform von 'lesen'?",
    options: {
      A: "leste",
      B: "las",
      C: "laste",
      D: "lasen (für alle Personen)",
    },
    correct: "B",
  },
  {
    question: "Welche Vokalwechsel findet beim Verb 'helfen' im Präsens statt?",
    options: {
      A: "e → i",
      B: "e → ie",
      C: "e → a",
      D: "e → i (nur in der 2. und 3. Person Singular)",
    },
    correct: "D",
  },
  {
    question:
      "Wie lautet die korrekte Konjugation von 'wissen' in der 3. Person Singular Präsens?",
    options: {
      A: "er weiß",
      B: "er wisst",
      C: "er weißt",
      D: "er weiß",
    },
    correct: "A",
  },
  {
    question: "Welche Form ist das Partizip II von 'vergessen'?",
    options: {
      A: "vergisst",
      B: "vergaß",
      C: "vergessen",
      D: "vergesst",
    },
    correct: "C",
  },
  {
    question: "Welches ist die korrekte Präteritumform von 'beginnen'?",
    options: {
      A: "begann",
      B: "beginnte",
      C: "begonnen",
      D: "beginn",
    },
    correct: "A",
  },
  {
    question: "Welche Form ist falsch?",
    options: {
      A: "singen - sang - gesungen",
      B: "bringen - brachte - gebracht",
      C: "denken - dachte - gedacht",
      D: "tun - tate - getan",
    },
    correct: "D",
  },
  {
    question:
      "Welches Verb folgt NICHT dem Muster 'i-a-u' (wie singen - sang - gesungen)?",
    options: {
      A: "trinken",
      B: "finden",
      C: "springen",
      D: "beginnen",
    },
    correct: "B",
  },
  {
    question:
      "Bei der Korrektur von Grammatikübungen sollte man auf welchen Aspekt besonders achten?",
    options: {
      A: "Nur auf die Rechtschreibung",
      B: "Nur auf die korrekte Verbform",
      C: "Auf den spezifischen Fehlertyp, der geübt wird",
      D: "Ausschließlich auf die Satzstellung",
    },
    correct: "C",
  },
  {
    question: "Welche Aussage zu Lösungsschlüsseln ist korrekt?",
    options: {
      A: "Sie sollten nur eine mögliche Lösung enthalten",
      B: "Sie sollten alle akzeptablen Varianten enthalten",
      C: "Sie sind nur für Anfänger wichtig",
      D: "Sie sind überflüssig bei fortgeschrittenen Lernern",
    },
    correct: "B",
  },
  {
    question:
      "Was ist bei Lösungsschlüsseln für Übungen mit freien Antworten zu beachten?",
    options: {
      A: "Es gibt immer nur eine richtige Lösung",
      B: "Man sollte Musterlösungen anbieten und auf Variationsmöglichkeiten hinweisen",
      C: "Freie Übungen sollten keine Lösungen haben",
      D: "Die Lösungen müssen immer vollständige Sätze sein",
    },
    correct: "B",
  },
  {
    question: "Welchen Wert haben Lösungsschlüssel für selbstständiges Lernen?",
    options: {
      A: "Sie sind hinderlich, da sie zum Schummeln verleiten",
      B: "Sie haben keinen didaktischen Wert",
      C: "Sie ermöglichen autonomes Lernen und Selbstkontrolle",
      D: "Sie sind nur für Prüfungssituationen relevant",
    },
    correct: "C",
  },
  {
    question:
      "Was sollte ein guter Lösungsschlüssel für komplexe Übungen enthalten?",
    options: {
      A: "Nur das Endergebnis",
      B: "Lösungsschritte und Erklärungen",
      C: "Nur die fehlerhaften Stellen",
      D: "Ausschließlich Verweise auf Grammatikregeln",
    },
    correct: "B",
  },
  {
    question: "Was versteht man unter 'Register' in der Linguistik?",
    options: {
      A: "Ein Verzeichnis wichtiger Begriffe",
      B: "Eine Sprachvarietät, die in bestimmten Situationen verwendet wird",
      C: "Die Betonung beim Sprechen",
      D: "Die Zusammenstellung aller Vokabeln",
    },
    correct: "B",
  },
  {
    question: "Welches ist KEIN sprachliches Register?",
    options: {
      A: "Formelles Register",
      B: "Informelles Register",
      C: "Fachsprachliches Register",
      D: "Morphologisches Register",
    },
    correct: "D",
  },
  {
    question:
      "In welchem Register würde man die Anrede 'Sehr geehrte Damen und Herren' verwenden?",
    options: {
      A: "Im informellen Register",
      B: "Im formellen Register",
      C: "Im umgangssprachlichen Register",
      D: "Im dialektalen Register",
    },
    correct: "B",
  },
  {
    question: "Was kennzeichnet das wissenschaftliche Register?",
    options: {
      A: "Viele umgangssprachliche Ausdrücke",
      B: "Direkte Ansprache des Lesers",
      C: "Hohe Informationsdichte und Fachbegriffe",
      D: "Emotionale Sprache",
    },
    correct: "C",
  },
  {
    question: "Welche Aussage zur Registerwahl ist korrekt?",
    options: {
      A: "Das gewählte Register ist immer situationsunabhängig",
      B: "Die Registerwahl hängt von der Kommunikationssituation ab",
      C: "Alle Register sind in allen Situationen angemessen",
      D: "Es gibt nur zwei Register: formell und informell",
    },
    correct: "B",
  },
  {
    question: "Warum sind Quellenangaben bei Audio-Dateien wichtig?",
    options: {
      A: "Sie haben keine Bedeutung",
      B: "Aus urheberrechtlichen Gründen",
      C: "Nur für die optische Gestaltung",
      D: "Nur für kommerzielle Zwecke",
    },
    correct: "B",
  },
  {
    question:
      "Was gehört zu einer vollständigen Quellenangabe bei Audio-Dateien?",
    options: {
      A: "Nur der Titel",
      B: "Nur der Name des Sprechers",
      C: "Titel, Autor/Sprecher, Erscheinungsjahr, Verlag/Quelle",
      D: "Nur das Erscheinungsjahr",
    },
    correct: "C",
  },
  {
    question: "Was versteht man unter einem 'Impressum' bei Audio-Dateien?",
    options: {
      A: "Die künstlerische Gestaltung",
      B: "Die rechtlich vorgeschriebenen Angaben zum Herausgeber",
      C: "Die technischen Spezifikationen",
      D: "Die Inhaltsübersicht",
    },
    correct: "B",
  },
  {
    question:
      "Welche Angabe ist für das Impressum einer Audio-Datei NICHT erforderlich?",
    options: {
      A: "Name des Verantwortlichen",
      B: "Kontaktdaten des Herausgebers",
      C: "Die genaue Aufnahmezeit",
      D: "Informationen zum Urheberrecht",
    },
    correct: "C",
  },
  {
    question:
      "Wie sollten Zitate aus Audio-Dateien in wissenschaftlichen Arbeiten gekennzeichnet werden?",
    options: {
      A: "Zitate aus Audio-Dateien müssen nicht gekennzeichnet werden",
      B: "Mit genauer Zeitangabe und vollständiger Quellenangabe",
      C: "Nur mit dem Namen des Sprechers",
      D: "Ausschließlich in Fußnoten",
    },
    correct: "B",
  },
];
export default data;
