// 1. Artikel (Belirli/Belirsiz Tanımlıklar)
const questions = [
  {
    question: "_____ Buch ist sehr interessant.",
    options: [
      { text: "Der", value: "a" },
      { text: "Die", value: "b" },
      { text: "Das", value: "c" },
      { text: "Den", value: "d" },
    ],
    correctAnswer: "c", // Das Buch ist sehr interessant.
  },
  {
    question: "Ist das _____ Katze?",
    options: [
      { text: "ein", value: "a" },
      { text: "eine", value: "b" },
      { text: "einer", value: "c" },
      { text: "einen", value: "d" },
    ],
    correctAnswer: "b", // Ist das eine Katze?
  },
  {
    question: "_____ Mann kommt aus Deutschland.",
    options: [
      { text: "Der", value: "a" },
      { text: "Die", value: "b" },
      { text: "Das", value: "c" },
      { text: "Den", value: "d" },
    ],
    correctAnswer: "a", // Der Mann kommt aus Deutschland.
  },
  {
    question: "Hast du _____ Auto?",
    options: [
      { text: "ein", value: "a" },
      { text: "eine", value: "b" },
      { text: "einer", value: "c" },
      { text: "einen", value: "d" },
    ],
    correctAnswer: "a", // Hast du ein Auto?
  },
  {
    question: "Dort steht _____ Frau.",
    options: [
      { text: "der", value: "a" },
      { text: "die", value: "b" },
      { text: "das", value: "c" },
      { text: "den", value: "d" },
    ],
    correctAnswer: "b", // Dort steht die Frau.
  },
  {
    question: "_____ Apfel ist rot.",
    options: [
      { text: "Der", value: "a" },
      { text: "Die", value: "b" },
      { text: "Das", value: "c" },
      { text: "Den", value: "d" },
    ],
    correctAnswer: "a", // Der Apfel ist rot.
  },
  {
    question: "_____ Kind spielt im Garten.",
    options: [
      { text: "Der", value: "a" },
      { text: "Die", value: "b" },
      { text: "Das", value: "c" },
      { text: "Den", value: "d" },
    ],
    correctAnswer: "c", // Das Kind spielt im Garten.
  },
  {
    question: "Ich habe _____ Bruder und _____ Schwester.",
    options: [
      { text: "ein / ein", value: "a" },
      { text: "einen / eine", value: "b" },
      { text: "eine / ein", value: "c" },
      { text: "ein / eine", value: "d" },
    ],
    correctAnswer: "b", // Ich habe ein Bruder und eine Schwester.
  },
  {
    question: "Das ist _____ alte Haus.",
    options: [
      { text: "ein", value: "a" },
      { text: "eine", value: "b" },
      { text: "einer", value: "c" },
      { text: "einen", value: "d" },
    ],
    correctAnswer: "a", // Das ist ein alte Haus.
  },
  {
    question: "Wo ist _____ Bahnhof?",
    options: [
      { text: "der", value: "a" },
      { text: "die", value: "b" },
      { text: "das", value: "c" },
      { text: "den", value: "d" },
    ],
    correctAnswer: "a", // Wo ist der Bahnhof?
  },

  // 2. Kişi Zamirleri
  {
    question: "_____ heißt Thomas und kommt aus München.",
    options: [
      { text: "Ich", value: "a" },
      { text: "Du", value: "b" },
      { text: "Er", value: "c" },
      { text: "Sie", value: "d" },
    ],
    correctAnswer: "c", // Er heißt Thomas und kommt aus München.
  },
  {
    question: "Woher kommst _____?",
    options: [
      { text: "ich", value: "a" },
      { text: "du", value: "b" },
      { text: "er", value: "c" },
      { text: "ihr", value: "d" },
    ],
    correctAnswer: "b", // Woher kommst du?
  },
  {
    question: "_____ sind Studenten an der Universität.",
    options: [
      { text: "Wir", value: "a" },
      { text: "Ihr", value: "b" },
      { text: "Sie (3. Person Singular)", value: "c" },
      { text: "Sie (3. Person Plural)", value: "d" },
    ],
    correctAnswer: "a", // Wir sind Studenten an der Universität.
  },
  {
    question: "_____ spielt gern Fußball.",
    options: [
      { text: "Wir", value: "a" },
      { text: "Ihr", value: "b" },
      { text: "Sie (3. Person Singular)", value: "c" },
      { text: "Sie (3. Person Plural)", value: "d" },
    ],
    correctAnswer: "c", // Sie spielt gern Fußball. (Singular)
  },
  {
    question: "Haben _____ Zeit?",
    options: [
      { text: "Sie", value: "a" },
      { text: "ihr", value: "b" },
      { text: "wir", value: "c" },
      { text: "du", value: "d" },
    ],
    correctAnswer: "a", // Haben Sie Zeit?
  },
  {
    question: "_____ lernt Deutsch seit einem Jahr.",
    options: [
      { text: "Ich", value: "a" },
      { text: "Du", value: "b" },
      { text: "Er", value: "c" },
      { text: "Wir", value: "d" },
    ],
    correctAnswer: "c", // Ich lerne Deutsch seit einem Jahr.
  },
  {
    question: "_____ fährt nach Berlin.",
    options: [
      { text: "Wir", value: "a" },
      { text: "Er", value: "b" },
      { text: "Sie", value: "c" },
      { text: "Ich", value: "d" },
    ],
    correctAnswer: "b", // Ich fahre nach Berlin.
  },
  {
    question: "_____ arbeitet in einer Firma.",
    options: [
      { text: "Du", value: "a" },
      { text: "Sie (Höflichkeitsform)", value: "b" },
      { text: "Sie (3. Person Singular)", value: "c" },
      { text: "Sie (3. Person Plural)", value: "d" },
    ],
    correctAnswer: "c", // Sie arbeitet in einer Firma.
  },
  {
    question: "Können _____ mir helfen?",
    options: [
      { text: "du", value: "a" },
      { text: "ihr", value: "b" },
      { text: "sie", value: "c" },
      { text: "wir", value: "d" },
    ],
    correctAnswer: "d", // Können du mir helfen?
  },
  {
    question: "_____ geht ins Kino.",
    options: [
      { text: "Er", value: "a" },
      { text: "Du", value: "b" },
      { text: "Sie (3. Person Plural)", value: "c" },
      { text: "Wir", value: "d" },
    ],
    correctAnswer: "a", // Ich gehe ins Kino.
  },

  // 3. Basit Cümle Yapısı (SVO)
  {
    question: "_____ trinkt Kaffee am Morgen.",
    options: [
      { text: "Maria am Morgen Kaffee trinkt", value: "a" },
      { text: "Trinkt Maria Kaffee am Morgen", value: "b" },
      { text: "Maria trinkt Kaffee am Morgen", value: "c" },
      { text: "Kaffee trinkt Maria am Morgen", value: "d" },
    ],
    correctAnswer: "c", // Maria trinkt Kaffee am Morgen.
  },
  {
    question: "Welcher Satz ist richtig?",
    options: [
      { text: "Ich jeden Tag Deutsch lerne", value: "a" },
      { text: "Lerne ich jeden Tag Deutsch", value: "b" },
      { text: "Ich lerne Deutsch jeden Tag", value: "c" },
      { text: "Deutsch lerne ich jeden Tag", value: "d" },
    ],
    correctAnswer: "c", // Ich lerne Deutsch jeden Tag.
  },
  {
    question: "_____ kauft ein neues Auto.",
    options: [
      { text: "Mein Vater kauft ein neues Auto", value: "a" },
      { text: "Ein neues Auto mein Vater kauft", value: "b" },
      { text: "Kauft mein Vater ein neues Auto", value: "c" },
      { text: "Mein Vater ein neues Auto kauft", value: "d" },
    ],
    correctAnswer: "a", // Mein Vater kauft ein neues Auto.
  },
  {
    question: "Welcher Satz hat die richtige Wortstellung?",
    options: [
      { text: "Am Samstag wir gehen ins Kino", value: "a" },
      { text: "Wir gehen am Samstag ins Kino", value: "b" },
      { text: "Ins Kino wir gehen am Samstag", value: "c" },
      { text: "Wir am Samstag gehen ins Kino", value: "d" },
    ],
    correctAnswer: "b", // Wir gehen am Samstag ins Kino.
  },
  {
    question: "_____ liest ein Buch.",
    options: [
      { text: "Ein Buch sie liest", value: "a" },
      { text: "Sie liest ein Buch", value: "b" },
      { text: "Liest sie ein Buch", value: "c" },
      { text: "Sie ein Buch liest", value: "d" },
    ],
    correctAnswer: "b", // Sie liest ein Buch.
  },
  {
    question: "Wie heißt der Satz mit der richtigen Wortstellung?",
    options: [
      { text: "Thomas heute Abend kommt zu mir", value: "a" },
      { text: "Heute Abend Thomas kommt zu mir", value: "b" },
      { text: "Thomas kommt heute Abend zu mir", value: "c" },
      { text: "Kommt Thomas heute Abend zu mir", value: "d" },
    ],
    correctAnswer: "c", // Thomas kommt heute Abend zu mir.
  },
  {
    question: "_____ macht ihre Hausaufgaben.",
    options: [
      { text: "Sie macht ihre Hausaufgaben", value: "a" },
      { text: "Ihre Hausaufgaben sie macht", value: "b" },
      { text: "Sie ihre Hausaufgaben macht", value: "c" },
      { text: "Macht sie ihre Hausaufgaben", value: "d" },
    ],
    correctAnswer: "a", // Sie macht ihre Hausaufgaben.
  },
  {
    question: "Welcher Satz ist korrekt?",
    options: [
      { text: "Der Lehrer gibt den Schülern die Bücher", value: "a" },
      { text: "Der Lehrer den Schülern gibt die Bücher", value: "b" },
      { text: "Die Bücher gibt der Lehrer den Schülern", value: "c" },
      { text: "Der Lehrer die Bücher gibt den Schülern", value: "d" },
    ],
    correctAnswer: "a", // Der Lehrer gibt den Schülern die Bücher.
  },
  {
    question: "_____ esse ich gern.",
    options: [
      { text: "Pizza esse ich gern", value: "a" },
      { text: "Ich Pizza gern esse", value: "b" },
      { text: "Ich esse gern Pizza", value: "c" },
      { text: "Esse ich gern Pizza", value: "d" },
    ],
    correctAnswer: "c", // Ich esse gern Pizza.
  },
  {
    question: "Wählen Sie den richtigen Satz:",
    options: [
      { text: "Du gehst morgen zur Schule", value: "a" },
      { text: "Du morgen gehst zur Schule", value: "b" },
      { text: "Zur Schule gehst du morgen", value: "c" },
      { text: "Du zur Schule morgen gehst", value: "d" },
    ],
    correctAnswer: "a", // Du gehst morgen zur Schule.
  },

  // 4. Şimdiki Zaman (Präsens)
  {
    question: "Ich _____ Deutsch.",
    options: [
      { text: "lerne", value: "a" },
      { text: "lernt", value: "b" },
      { text: "lernst", value: "c" },
      { text: "lernen", value: "d" },
    ],
    correctAnswer: "a", // Ich lerne Deutsch.
  },
  {
    question: "Er _____ im Restaurant.",
    options: [
      { text: "arbeite", value: "a" },
      { text: "arbeitest", value: "b" },
      { text: "arbeitet", value: "c" },
      { text: "arbeiten", value: "d" },
    ],
    correctAnswer: "c", // Er arbeitet im Restaurant.
  },
  {
    question: "Wir _____ Musik.",
    options: [
      { text: "höre", value: "a" },
      { text: "hörst", value: "b" },
      { text: "hört", value: "c" },
      { text: "hören", value: "d" },
    ],
    correctAnswer: "d", // Wir hören Musik.
  },
  {
    question: "Was _____ du gern?",
    options: [
      { text: "esse", value: "a" },
      { text: "isst", value: "b" },
      { text: "esst", value: "c" },
      { text: "essen", value: "d" },
    ],
    correctAnswer: "b", // Was isst du gern?
  },
  {
    question: "Ihr _____ nach Hause.",
    options: [
      { text: "gehe", value: "a" },
      { text: "gehst", value: "b" },
      { text: "geht", value: "c" },
      { text: "gehen", value: "d" },
    ],
    correctAnswer: "c", // Ihr geht nach Hause.
  },
  {
    question: "Sie (Plural) _____ Kaffee.",
    options: [
      { text: "trinke", value: "a" },
      { text: "trinkst", value: "b" },
      { text: "trinkt", value: "c" },
      { text: "trinken", value: "d" },
    ],
    correctAnswer: "d", // Sie trinken Kaffee.
  },
  {
    question: "Er _____ ein neues Auto.",
    options: [
      { text: "habe", value: "a" },
      { text: "hast", value: "b" },
      { text: "hat", value: "c" },
      { text: "haben", value: "d" },
    ],
    correctAnswer: "c", // Er hat ein neues Auto.
  },
  {
    question: "Ich _____ meine Freunde.",
    options: [
      { text: "besuche", value: "a" },
      { text: "besuchst", value: "b" },
      { text: "besucht", value: "c" },
      { text: "besuchen", value: "d" },
    ],
    correctAnswer: "a", // Ich besuche meine Freunde.
  },
  {
    question: "_____ du viel Sport?",
    options: [
      { text: "Treibe", value: "a" },
      { text: "Treibst", value: "b" },
      { text: "Treibt", value: "c" },
      { text: "Treiben", value: "d" },
    ],
    correctAnswer: "b", // Treibst du viel Sport?
  },
  {
    question: "Meine Schwester _____ in Berlin.",
    options: [
      { text: "wohne", value: "a" },
      { text: "wohnst", value: "b" },
      { text: "wohnt", value: "c" },
      { text: "wohnen", value: "d" },
    ],
    correctAnswer: "c", // Meine Schwester wohnt in Berlin.
  },

  // 5. Olumsuzluk (nicht / kein)
  {
    question: "Ich esse _____ Fleisch.",
    options: [
      { text: "nicht", value: "a" },
      { text: "keine", value: "b" },
      { text: "kein", value: "c" },
      { text: "nein", value: "d" },
    ],
    correctAnswer: "c", // Ich esse kein Fleisch.
  },
  {
    question: "Er hat _____ Zeit.",
    options: [
      { text: "nicht", value: "a" },
      { text: "keine", value: "b" },
      { text: "kein", value: "c" },
      { text: "nein", value: "d" },
    ],
    correctAnswer: "b", // Er hat keine Zeit.
  },
  {
    question: "Wir sind _____ müde.",
    options: [
      { text: "nicht", value: "a" },
      { text: "keine", value: "b" },
      { text: "kein", value: "c" },
      { text: "nein", value: "d" },
    ],
    correctAnswer: "a", // Wir sind nicht müde.
  },
  {
    question: "Das ist _____ mein Auto.",
    options: [
      { text: "nicht", value: "a" },
      { text: "keine", value: "b" },
      { text: "kein", value: "c" },
      { text: "nein", value: "d" },
    ],
    correctAnswer: "a", // Das ist nicht mein Auto.
  },
  {
    question: "Ich trinke _____ Kaffee.",
    options: [
      { text: "nicht", value: "a" },
      { text: "keinen", value: "b" },
      { text: "kein", value: "c" },
      { text: "keine", value: "d" },
    ],
    correctAnswer: "b", // Ich trinke keinen Kaffee.
  },
  {
    question: "Sie hat _____ Geschwister.",
    options: [
      { text: "nicht", value: "a" },
      { text: "keine", value: "b" },
      { text: "kein", value: "c" },
      { text: "keinen", value: "d" },
    ],
    correctAnswer: "b", // Sie hat keine Geschwister.
  },
  {
    question: "Das Wetter ist _____ schön.",
    options: [
      { text: "nicht", value: "a" },
      { text: "kein", value: "b" },
      { text: "keine", value: "c" },
      { text: "nein", value: "d" },
    ],
    correctAnswer: "a", // Das Wetter ist nicht schön.
  },
  {
    question: "Er findet _____ Lösung für das Problem.",
    options: [
      { text: "nicht", value: "a" },
      { text: "keine", value: "b" },
      { text: "kein", value: "c" },
      { text: "keiner", value: "d" },
    ],
    correctAnswer: "b", // Er findet keine Lösung für das Problem.
  },
  {
    question: "Ich habe _____ Geld dabei.",
    options: [
      { text: "nicht", value: "a" },
      { text: "keinen", value: "b" },
      { text: "kein", value: "c" },
      { text: "keine", value: "d" },
    ],
    correctAnswer: "c", // Ich habe kein Geld dabei.
  },
  {
    question: "Das Buch ist _____ interessant.",
    options: [
      { text: "nicht", value: "a" },
      { text: "kein", value: "b" },
      { text: "keine", value: "c" },
      { text: "keins", value: "d" },
    ],
    correctAnswer: "a", // Das Buch ist nicht interessant.
  },
  {
    question: "Das ist _____ Buch.",
    options: [
      { text: "mein", value: "a" },
      { text: "meine", value: "b" },
      { text: "meines", value: "c" },
      { text: "meinen", value: "d" },
    ],
    correctAnswer: "a", // Das ist mein Buch.
  },
  {
    question: "Wo ist _____ Tasche?",
    options: [
      { text: "dein", value: "a" },
      { text: "deine", value: "b" },
      { text: "deines", value: "c" },
      { text: "deiner", value: "d" },
    ],
    correctAnswer: "b", // Wo ist deine Tasche?
  },
  {
    question: "Er sucht _____ Schlüssel.",
    options: [
      { text: "sein", value: "a" },
      { text: "seine", value: "b" },
      { text: "seinen", value: "c" },
      { text: "seiner", value: "d" },
    ],
    correctAnswer: "c", // Er sucht seinen Schlüssel.
  },
  {
    question: "_____ Mutter kommt aus Spanien.",
    options: [
      { text: "Ihr", value: "a" },
      { text: "Ihre", value: "b" },
      { text: "Ihres", value: "c" },
      { text: "Ihren", value: "d" },
    ],
    correctAnswer: "b", // Ihre Mutter kommt aus Spanien.
  },
  {
    question: "Wir machen _____ Hausaufgaben.",
    options: [
      { text: "unser", value: "a" },
      { text: "unsere", value: "b" },
      { text: "unseren", value: "c" },
      { text: "unseres", value: "d" },
    ],
    correctAnswer: "b", // Wir machen unsere Hausaufgaben.
  },
  {
    question: "Habt ihr _____ Bücher dabei?",
    options: [
      { text: "euer", value: "a" },
      { text: "eure", value: "b" },
      { text: "euren", value: "c" },
      { text: "eurem", value: "d" },
    ],
    correctAnswer: "b", // Habt ihr eure Bücher dabei?
  },
  {
    question: "Die Kinder spielen mit _____ Spielzeug.",
    options: [
      { text: "ihr", value: "a" },
      { text: "ihre", value: "b" },
      { text: "ihrem", value: "c" },
      { text: "ihren", value: "d" },
    ],
    correctAnswer: "c", // Die Kinder spielen mit ihrem Spielzeug.
  },
  {
    question: "Ist das _____ Auto, Herr Müller?",
    options: [
      { text: "Ihr", value: "a" },
      { text: "Ihre", value: "b" },
      { text: "Ihres", value: "c" },
      { text: "Ihren", value: "d" },
    ],
    correctAnswer: "a", // Ist das Ihr Auto, Herr Müller?
  },
  {
    question: "Ich kann _____ Handy nicht finden.",
    options: [
      { text: "mein", value: "a" },
      { text: "meine", value: "b" },
      { text: "meinem", value: "c" },
      { text: "meinen", value: "d" },
    ],
    correctAnswer: "a", // Ich kann mein Handy nicht finden.
  },
  {
    question: "Sie liebt _____ Kinder sehr.",
    options: [
      { text: "ihr", value: "a" },
      { text: "ihre", value: "b" },
      { text: "ihren", value: "c" },
      { text: "ihrem", value: "d" },
    ],
    correctAnswer: "b", // Sie liebt ihre Kinder sehr.
  },

  // Soru Kelimeleri
  {
    question: "_____ heißt du?",
    options: [
      { text: "Wie", value: "a" },
      { text: "Was", value: "b" },
      { text: "Wer", value: "c" },
      { text: "Wo", value: "d" },
    ],
    correctAnswer: "a", // Wie heißt du?
  },
  {
    question: "_____ kommst du?",
    options: [
      { text: "Wann", value: "a" },
      { text: "Warum", value: "b" },
      { text: "Woher", value: "c" },
      { text: "Wohin", value: "d" },
    ],
    correctAnswer: "c", // Woher kommst du?
  },
  {
    question: "_____ kostet das Buch?",
    options: [
      { text: "Wie viel", value: "a" },
      { text: "Wie", value: "b" },
      { text: "Was", value: "c" },
      { text: "Warum", value: "d" },
    ],
    correctAnswer: "a", // Wie viel kostet das Buch?
  },
  {
    question: "_____ wohnst du?",
    options: [
      { text: "Wo", value: "a" },
      { text: "Wann", value: "b" },
      { text: "Wie", value: "c" },
      { text: "Wer", value: "d" },
    ],
    correctAnswer: "a", // Wo wohnst du?
  },
  {
    question: "_____ fährt der Zug ab?",
    options: [
      { text: "Wo", value: "a" },
      { text: "Wann", value: "b" },
      { text: "Wie", value: "c" },
      { text: "Was", value: "d" },
    ],
    correctAnswer: "b", // Wann fährt der Zug ab?
  },
  {
    question: "_____ gehört dieser Hund?",
    options: [
      { text: "Wem", value: "a" },
      { text: "Wen", value: "b" },
      { text: "Wer", value: "c" },
      { text: "Was", value: "d" },
    ],
    correctAnswer: "a", // Wem gehört dieser Hund?
  },
  {
    question: "_____ bleibst du in Deutschland?",
    options: [
      { text: "Wie lange", value: "a" },
      { text: "Wann", value: "b" },
      { text: "Wie", value: "c" },
      { text: "Warum", value: "d" },
    ],
    correctAnswer: "a", // Wie lange bleibst du in Deutschland?
  },
  {
    question: "_____ lernst du Deutsch?",
    options: [
      { text: "Warum", value: "a" },
      { text: "Wofür", value: "b" },
      { text: "Wie", value: "c" },
      { text: "Wo", value: "d" },
    ],
    correctAnswer: "a", // Warum lernst du Deutsch?
  },
  {
    question: "_____ bist du heute so müde?",
    options: [
      { text: "Warum", value: "a" },
      { text: "Was", value: "b" },
      { text: "Wie", value: "c" },
      { text: "Wofür", value: "d" },
    ],
    correctAnswer: "a", // Warum bist du heute so müde?
  },
  {
    question: "_____ gehst du? - Ins Kino.",
    options: [
      { text: "Wohin", value: "a" },
      { text: "Wo", value: "b" },
      { text: "Woher", value: "c" },
      { text: "Was", value: "d" },
    ],
    correctAnswer: "a", // Wohin gehst du? - Ins Kino.
  },

  // Emir Kipi (Imperativ)
  {
    question: "_____ bitte langsam! (sprechen - du)",
    options: [
      { text: "Sprich", value: "a" },
      { text: "Sprichst", value: "b" },
      { text: "Spreche", value: "c" },
      { text: "Sprecht", value: "d" },
    ],
    correctAnswer: "a", // Sprich bitte langsam!
  },
  {
    question: "_____ Sie mir bitte! (helfen)",
    options: [
      { text: "Helft", value: "a" },
      { text: "Hilf", value: "b" },
      { text: "Helfen", value: "c" },
      { text: "Hilfst", value: "d" },
    ],
    correctAnswer: "c", // Helfen Sie mir bitte!
  },
  {
    question: "_____ nicht so laut! (sein - ihr)",
    options: [
      { text: "Sind", value: "a" },
      { text: "Sei", value: "b" },
      { text: "Seit", value: "c" },
      { text: "Seid", value: "d" },
    ],
    correctAnswer: "d", // Seid nicht so laut!
  },
  {
    question: "_____ die Tür zu! (machen - du)",
    options: [
      { text: "Mach", value: "a" },
      { text: "Machst", value: "b" },
      { text: "Mache", value: "c" },
      { text: "Macht", value: "d" },
    ],
    correctAnswer: "a", // Mach die Tür zu!
  },
  {
    question: "_____ ihr bitte pünktlich! (kommen)",
    options: [
      { text: "Komm", value: "a" },
      { text: "Kommt", value: "b" },
      { text: "Kommen", value: "c" },
      { text: "Kommst", value: "d" },
    ],
    correctAnswer: "b", // Kommt ihr bitte pünktlich!
  },
  {
    question: "_____ Sie das Formular aus! (füllen)",
    options: [
      { text: "Füllt", value: "a" },
      { text: "Füll", value: "b" },
      { text: "Füllen", value: "c" },
      { text: "Füllst", value: "d" },
    ],
    correctAnswer: "c", // Füllen Sie das Formular aus!
  },
  {
    question: "_____ mir deine Adresse! (geben - du)",
    options: [
      { text: "Geb", value: "a" },
      { text: "Gibst", value: "b" },
      { text: "Gib", value: "c" },
      { text: "Gebt", value: "d" },
    ],
    correctAnswer: "c", // Gib mir deine Adresse!
  },
  {
    question: "_____ mich morgen an! (anrufen - du)",
    options: [
      { text: "Rufst", value: "a" },
      { text: "Ruf", value: "b" },
      { text: "Rufe", value: "c" },
      { text: "Ruft", value: "d" },
    ],
    correctAnswer: "b", // Ruf mich morgen an!
  },
  {
    question: "_____ nicht so viel Salz in die Suppe! (tun - ihr)",
    options: [
      { text: "Tut", value: "a" },
      { text: "Tun", value: "b" },
      { text: "Tu", value: "c" },
      { text: "Tust", value: "d" },
    ],
    correctAnswer: "a", // Tut nicht so viel Salz in die Suppe!
  },
  {
    question: "_____ euch die Hände! (waschen - ihr)",
    options: [
      { text: "Wascht", value: "a" },
      { text: "Wasch", value: "b" },
      { text: "Waschen", value: "c" },
      { text: "Wäscht", value: "d" },
    ],
    correctAnswer: "a", // Wascht euch die Hände!
  },

  // Modal Fiiller (Basit Kullanımlar)
  {
    question: "Ich _____ gut Deutsch sprechen.",
    options: [
      { text: "kann", value: "a" },
      { text: "könne", value: "b" },
      { text: "kannst", value: "c" },
      { text: "können", value: "d" },
    ],
    correctAnswer: "a", // Ich kann gut Deutsch sprechen.
  },
  {
    question: "Er _____ heute ins Kino gehen.",
    options: [
      { text: "möchten", value: "a" },
      { text: "möchte", value: "b" },
      { text: "möchtest", value: "c" },
      { text: "möchtet", value: "d" },
    ],
    correctAnswer: "b", // Er möchte heute ins Kino gehen.
  },
  {
    question: "Wir _____ jetzt nach Hause gehen.",
    options: [
      { text: "müsst", value: "a" },
      { text: "müssen", value: "b" },
      { text: "muss", value: "c" },
      { text: "musst", value: "d" },
    ],
    correctAnswer: "b", // Wir müssen jetzt nach Hause gehen.
  },
  {
    question: "_____ du mir helfen?",
    options: [
      { text: "Könnst", value: "a" },
      { text: "Kannst", value: "b" },
      { text: "Kann", value: "c" },
      { text: "Können", value: "d" },
    ],
    correctAnswer: "b", // Kannst du mir helfen?
  },
  {
    question: "Sie _____ um 8 Uhr aufstehen.",
    options: [
      { text: "müsst", value: "a" },
      { text: "muss", value: "b" },
      { text: "musst", value: "c" },
      { text: "müssen", value: "d" },
    ],
    correctAnswer: "d", // Sie müssen um 8 Uhr aufstehen.
  },
  {
    question: "Ich _____ nicht schwimmen.",
    options: [
      { text: "könnt", value: "a" },
      { text: "kannst", value: "b" },
      { text: "kann", value: "c" },
      { text: "können", value: "d" },
    ],
    correctAnswer: "c", // Ich kann nicht schwimmen.
  },
  {
    question: "_____ ihr Kaffee trinken?",
    options: [
      { text: "Möchtet", value: "a" },
      { text: "Möchtest", value: "b" },
      { text: "Möchte", value: "c" },
      { text: "Möchten", value: "d" },
    ],
    correctAnswer: "a", // Möchtet ihr Kaffee trinken?
  },
  {
    question: "Er _____ viel arbeiten.",
    options: [
      { text: "musst", value: "a" },
      { text: "müsst", value: "b" },
      { text: "müssen", value: "c" },
      { text: "muss", value: "d" },
    ],
    correctAnswer: "d", // Er muss viel arbeiten.
  },
  {
    question: "_____ Sie mir einen Tee bringen?",
    options: [
      { text: "Können", value: "a" },
      { text: "Könnt", value: "b" },
      { text: "Kannst", value: "c" },
      { text: "Kann", value: "d" },
    ],
    correctAnswer: "a", // Können Sie mir einen Tee bringen?
  },
  {
    question: "Wir _____ heute nicht kommen.",
    options: [
      { text: "könnt", value: "a" },
      { text: "können", value: "b" },
      { text: "kannst", value: "c" },
      { text: "kann", value: "d" },
    ],
    correctAnswer: "b", // Wir können heute nicht kommen.
  },

  // Ayrılabilen Fiiller
  {
    question: "Ich _____ morgen um 6 Uhr _____.",
    options: [
      { text: "stehe / auf", value: "a" },
      { text: "aufstehe / -", value: "b" },
      { text: "stehe / an", value: "c" },
      { text: "stehe / ein", value: "d" },
    ],
    correctAnswer: "a", // Ich stehe morgen um 6 Uhr auf.
  },
  {
    question: "Wann _____ der Zug _____?",
    options: [
      { text: "fährt / ein", value: "a" },
      { text: "kommt / ab", value: "b" },
      { text: "kommt / an", value: "c" },
      { text: "fährt / an", value: "d" },
    ],
    correctAnswer: "c", // Wann kommt der Zug an?
  },
  {
    question: "Er _____ den Fernseher _____.",
    options: [
      { text: "macht / an", value: "a" },
      { text: "macht / ein", value: "b" },
      { text: "schaltet / aus", value: "c" },
      { text: "schaltet / an", value: "d" },
    ],
    correctAnswer: "d", // Er schaltet den Fernseher an.
  },
  {
    question: "Ich _____ heute im Supermarkt _____.",
    options: [
      { text: "kaufe / ein", value: "a" },
      { text: "kaufe / aus", value: "b" },
      { text: "kaufe / -", value: "c" },
      { text: "kaufe / an", value: "d" },
    ],
    correctAnswer: "a", // Ich kaufe heute im Supermarkt ein.
  },
  {
    question: "_____ ihr jetzt _____ ?",
    options: [
      { text: "Geht / mit", value: "a" },
      { text: "Geht / aus", value: "b" },
      { text: "Kommt / mit", value: "c" },
      { text: "Kommt / ein", value: "d" },
    ],
    correctAnswer: "c", // Kommt ihr jetzt mit?
  },
  {
    question: "Er _____ das Licht _____.",
    options: [
      { text: "macht / aus", value: "a" },
      { text: "schaltet / ein", value: "b" },
      { text: "geht / aus", value: "c" },
      { text: "nimmt / an", value: "d" },
    ],
    correctAnswer: "a", // Er macht das Licht aus.
  },
  {
    question: "Wir _____ die Aufgabe zusammen _____.",
    options: [
      { text: "machen / auf", value: "a" },
      { text: "machen / zu", value: "b" },
      { text: "geben / auf", value: "c" },
      { text: "fangen / an", value: "d" },
    ],
    correctAnswer: "d", // Wir fangen die Aufgabe zusammen an.
  },
  {
    question: "_____ bitte das Fenster _____!",
    options: [
      { text: "Mach / zu", value: "a" },
      { text: "Mach / an", value: "b" },
      { text: "Geh / aus", value: "c" },
      { text: "Schalte / an", value: "d" },
    ],
    correctAnswer: "a", // Mach bitte das Fenster zu!
  },
  {
    question: "Die Schüler _____ am Projekt _____.",
    options: [
      { text: "fangen / an", value: "a" },
      { text: "hören / auf", value: "b" },
      { text: "nehmen / teil", value: "c" },
      { text: "kommen / vor", value: "d" },
    ],
    correctAnswer: "c", // Die Schüler nehmen am Projekt teil.
  },
  {
    question: "Wann _____ du morgen _____?",
    options: [
      { text: "stehst / auf", value: "a" },
      { text: "fängst / an", value: "b" },
      { text: "kommst / an", value: "c" },
      { text: "machst / zu", value: "d" },
    ],
    correctAnswer: "a", // Wann stehst du morgen auf?
  },

  // İsmin Halleri (Basit - Nominativ ve Akkusativ)
  {
    question: "_____ Mann liest _____ Zeitung.",
    options: [
      { text: "Der / die", value: "a" },
      { text: "Den / der", value: "b" },
      { text: "Der / der", value: "c" },
      { text: "Den / die", value: "d" },
    ],
    correctAnswer: "a", // Der Mann liest die Zeitung.
  },
  {
    question: "Ich sehe _____ Frau mit _____ Kind.",
    options: [
      { text: "die / dem", value: "a" },
      { text: "der / das", value: "b" },
      { text: "die / dem", value: "c" },
      { text: "die / das", value: "d" },
    ],
    correctAnswer: "c", // Ich sehe die Frau mit das Kind.
  },
  {
    question: "_____ Kinder spielen mit _____ Ball.",
    options: [
      { text: "Die / dem", value: "a" },
      { text: "Der / den", value: "b" },
      { text: "Die / den", value: "c" },
      { text: "Die / der", value: "d" },
    ],
    correctAnswer: "a", // Die Kinder spielen mit dem Ball.
  },
  {
    question: "Hast du _____ Schlüssel für _____ Auto?",
    options: [
      { text: "den / dem", value: "a" },
      { text: "den / das", value: "b" },
      { text: "der / das", value: "c" },
      { text: "der / dem", value: "d" },
    ],
    correctAnswer: "b", // Hast du den Schlüssel für das Auto?
  },
  {
    question: "_____ Lehrer erklärt _____ Aufgabe.",
    options: [
      { text: "Der / der", value: "a" },
      { text: "Der / die", value: "b" },
      { text: "Den / die", value: "c" },
      { text: "Den / der", value: "d" },
    ],
    correctAnswer: "b", // Der Lehrer erklärt die Aufgabe.
  },
  {
    question: "Ich kenne _____ Mann nicht.",
    options: [
      { text: "der", value: "a" },
      { text: "den", value: "b" },
      { text: "dem", value: "c" },
      { text: "des", value: "d" },
    ],
    correctAnswer: "b", // Ich kenne den Mann nicht.
  },
  {
    question: "_____ Buch liegt auf dem Tisch.",
    options: [
      { text: "Der", value: "a" },
      { text: "Die", value: "b" },
      { text: "Das", value: "c" },
      { text: "Den", value: "d" },
    ],
    correctAnswer: "c", // Das Buch liegt auf dem Tisch.
  },
  {
    question: "Sie trinkt _____ Kaffee.",
    options: [
      { text: "den", value: "a" },
      { text: "der", value: "b" },
      { text: "dem", value: "c" },
      { text: "das", value: "d" },
    ],
    correctAnswer: "a", // Sie trinkt den Kaffee.
  },
  {
    question: "_____ Schüler lesen _____ Text.",
    options: [
      { text: "Die / den", value: "a" },
      { text: "Die / der", value: "b" },
      { text: "Der / den", value: "c" },
      { text: "Den / den", value: "d" },
    ],
    correctAnswer: "a", // Die Schüler lesen den Text.
  },
  {
    question: "Ich esse _____ Apfel und _____ Banane.",
    options: [
      { text: "einen / eine", value: "a" },
      { text: "ein / eine", value: "b" },
      { text: "einen / ein", value: "c" },
      { text: "ein / ein", value: "d" },
    ],
    correctAnswer: "a", // Ich esse einen Apfel und eine Banane.
  },

  // Edatlar (Yer/Zaman)
  {
    question: "Das Buch liegt _____ dem Tisch.",
    options: [
      { text: "auf", value: "a" },
      { text: "in", value: "b" },
      { text: "unter", value: "c" },
      { text: "neben", value: "d" },
    ],
    correctAnswer: "a", // Das Buch liegt auf dem Tisch.
  },
  {
    question: "Die Katze schläft _____ dem Sofa.",
    options: [
      { text: "über", value: "a" },
      { text: "unter", value: "b" },
      { text: "an", value: "c" },
      { text: "zwischen", value: "d" },
    ],
    correctAnswer: "b", // Die Katze schläft unter dem Sofa.
  },
  {
    question: "Das Bild hängt _____ der Wand.",
    options: [
      { text: "an", value: "a" },
      { text: "auf", value: "b" },
      { text: "in", value: "c" },
      { text: "neben", value: "d" },
    ],
    correctAnswer: "a", // Das Bild hängt an der Wand.
  },
  {
    question: "Die Lampe hängt _____ dem Tisch.",
    options: [
      { text: "auf", value: "a" },
      { text: "an", value: "b" },
      { text: "über", value: "c" },
      { text: "unter", value: "d" },
    ],
    correctAnswer: "c", // Die Lampe hängt über dem Tisch.
  },
  {
    question: "Der Hund liegt _____ dem Bett und dem Schrank.",
    options: [
      { text: "zwischen", value: "a" },
      { text: "neben", value: "b" },
      { text: "hinter", value: "c" },
      { text: "vor", value: "d" },
    ],
    correctAnswer: "a", // Der Hund liegt zwischen dem Bett und dem Schrank.
  },
  {
    question: "Wir treffen uns _____ 18 Uhr.",
    options: [
      { text: "in", value: "a" },
      { text: "um", value: "b" },
      { text: "an", value: "c" },
      { text: "auf", value: "d" },
    ],
    correctAnswer: "b", // Wir treffen uns um 18 Uhr.
  },
  {
    question: "Er kommt _____ Montag zurück.",
    options: [
      { text: "am", value: "a" },
      { text: "im", value: "b" },
      { text: "um", value: "c" },
      { text: "in", value: "d" },
    ],
    correctAnswer: "a", // Er kommt am Montag zurück.
  },
  {
    question: "Sie bleibt _____ drei Wochen in Berlin.",
    options: [
      { text: "für", value: "a" },
      { text: "in", value: "b" },
      { text: "um", value: "c" },
      { text: "an", value: "d" },
    ],
    correctAnswer: "a", // Sie bleibt für drei Wochen in Berlin.
  },
  {
    question: "Mein Bruder wohnt _____ der Schweiz.",
    options: [
      { text: "in", value: "a" },
      { text: "auf", value: "b" },
      { text: "an", value: "c" },
      { text: "bei", value: "d" },
    ],
    correctAnswer: "a", // Mein Bruder wohnt in der Schweiz.
  },
  {
    question: "Das Museum ist _____ der Kirche.",
    options: [
      { text: "neben", value: "a" },
      { text: "zwischen", value: "b" },
      { text: "hinter", value: "c" },
      { text: "in", value: "d" },
    ],
    correctAnswer: "a", // Das Museum ist neben der Kirche.
  },
  {
    question: "Ich _____ gestern ins Kino _____.",
    options: [
      { text: "bin / gegangen", value: "a" },
      { text: "habe / gegangen", value: "b" },
      { text: "bin / gegehen", value: "c" },
      { text: "habe / gehen", value: "d" },
    ],
    correctAnswer: "a", // Ich bin gestern ins Kino gegangen.
  },
  {
    question: "Er _____ viel Wasser _____.",
    options: [
      { text: "hat / getrunken", value: "a" },
      { text: "ist / getrunken", value: "b" },
      { text: "hat / trinken", value: "c" },
      { text: "ist / trinken", value: "d" },
    ],
    correctAnswer: "a", // Er hat viel Wasser getrunken.
  },
  {
    question: "Wir _____ uns gut _____.",
    options: [
      { text: "sind / unterhalten", value: "a" },
      { text: "haben / unterhalten", value: "b" },
      { text: "sind / untergehalten", value: "c" },
      { text: "haben / untergehalten", value: "d" },
    ],
    correctAnswer: "b", // Wir haben uns gut unterhalten.
  },
  {
    question: "Sie _____ sehr schnell _____.",
    options: [
      { text: "ist / gelaufen", value: "a" },
      { text: "hat / gelaufen", value: "b" },
      { text: "ist / gelauft", value: "c" },
      { text: "hat / gelauft", value: "d" },
    ],
    correctAnswer: "a", // Sie ist sehr schnell gelaufen.
  },
  {
    question: "_____ du das Buch schon _____?",
    options: [
      { text: "Hast / gelesen", value: "a" },
      { text: "Bist / gelesen", value: "b" },
      { text: "Hast / lesen", value: "c" },
      { text: "Bist / lesen", value: "d" },
    ],
    correctAnswer: "a", // Hast du das Buch schon gelesen?
  },
  {
    question: "Die Kinder _____ im Garten _____.",
    options: [
      { text: "sind / gespielt", value: "a" },
      { text: "haben / gespielt", value: "b" },
      { text: "sind / gespielen", value: "c" },
      { text: "haben / spielen", value: "d" },
    ],
    correctAnswer: "b", // Die Kinder haben im Garten gespielt.
  },
  {
    question: "Er _____ seiner Mutter einen Brief _____.",
    options: [
      { text: "ist / geschrieben", value: "a" },
      { text: "hat / geschreiben", value: "b" },
      { text: "hat / geschrieben", value: "c" },
      { text: "ist / schreiben", value: "d" },
    ],
    correctAnswer: "c", // Er hat seiner Mutter einen Brief geschrieben.
  },
  {
    question: "Wir _____ in München _____.",
    options: [
      { text: "sind / gewesen", value: "a" },
      { text: "haben / gewesen", value: "b" },
      { text: "sind / gesein", value: "c" },
      { text: "haben / sein", value: "d" },
    ],
    correctAnswer: "a", // Wir sind in München gewesen.
  },
  {
    question: "_____ ihr schon _____ ?",
    options: [
      { text: "Habt / gefrühstückt", value: "a" },
      { text: "Seid / gefrühstückt", value: "b" },
      { text: "Habt / frühstücken", value: "c" },
      { text: "Seid / frühstücken", value: "d" },
    ],
    correctAnswer: "a", // Habt ihr schon gefrühstückt?
  },
  {
    question: "Das Flugzeug _____ pünktlich _____.",
    options: [
      { text: "hat / angekommen", value: "a" },
      { text: "ist / angekommen", value: "b" },
      { text: "hat / ankommen", value: "c" },
      { text: "ist / gekommen", value: "d" },
    ],
    correctAnswer: "b", // Das Flugzeug ist pünktlich angekommen.
  },

  {
    question: "Ich _____ gestern zu Hause.",
    options: [
      { text: "war", value: "a" },
      { text: "warst", value: "b" },
      { text: "waren", value: "c" },
      { text: "sein", value: "d" },
    ],
    correctAnswer: "a", // Ich war gestern zu Hause.
  },
  {
    question: "Er _____ ein neues Auto.",
    options: [
      { text: "habte", value: "a" },
      { text: "hatte", value: "b" },
      { text: "hatten", value: "c" },
      { text: "haben", value: "d" },
    ],
    correctAnswer: "b", // Er hatte ein neues Auto.
  },
  {
    question: "Wir _____ ins Kino gehen.",
    options: [
      { text: "wollte", value: "a" },
      { text: "wolltest", value: "b" },
      { text: "wollten", value: "c" },
      { text: "wollen", value: "d" },
    ],
    correctAnswer: "c", // Wir wollten ins Kino gehen.
  },
  {
    question: "Sie _____ mir nicht helfen.",
    options: [
      { text: "konnten", value: "a" },
      { text: "könnte", value: "b" },
      { text: "konnte", value: "c" },
      { text: "können", value: "d" },
    ],
    correctAnswer: "c", // Sie konnte mir nicht helfen.
  },
  {
    question: "Das Kind _____ laut.",
    options: [
      { text: "weinte", value: "a" },
      { text: "weinen", value: "b" },
      { text: "weint", value: "c" },
      { text: "weinten", value: "d" },
    ],
    correctAnswer: "a", // Das Kind weinte laut.
  },
  {
    question: "Ich _____ nach Berlin.",
    options: [
      { text: "fuhrt", value: "a" },
      { text: "fuhrst", value: "b" },
      { text: "fuhr", value: "c" },
      { text: "fahren", value: "d" },
    ],
    correctAnswer: "c", // Ich fuhr nach Berlin.
  },
  {
    question: "_____ du gestern in der Schule?",
    options: [
      { text: "Warst", value: "a" },
      { text: "War", value: "b" },
      { text: "Waren", value: "c" },
      { text: "Bist", value: "d" },
    ],
    correctAnswer: "a", // Warst du gestern in der Schule?
  },
  {
    question: "Die Leute _____ sehr freundlich.",
    options: [
      { text: "war", value: "a" },
      { text: "warst", value: "b" },
      { text: "waren", value: "c" },
      { text: "sein", value: "d" },
    ],
    correctAnswer: "c", // Die Leute waren sehr freundlich.
  },
  {
    question: "Er _____ viel Geld für das Geschenk.",
    options: [
      { text: "ausgebte", value: "a" },
      { text: "gab aus", value: "b" },
      { text: "ausgab", value: "c" },
      { text: "gabte aus", value: "d" },
    ],
    correctAnswer: "c", // Er ausgab viel Geld für das Geschenk.
  },
  {
    question: "Wir _____ den ganzen Tag.",
    options: [
      { text: "arbeitete", value: "a" },
      { text: "arbeiteten", value: "b" },
      { text: "arbeiten", value: "c" },
      { text: "arbeitst", value: "d" },
    ],
    correctAnswer: "b", // Wir arbeiteten den ganzen Tag.
  },

  {
    question: "Berlin ist _____ als München.",
    options: [
      { text: "groß", value: "a" },
      { text: "größer", value: "b" },
      { text: "am größten", value: "c" },
      { text: "größte", value: "d" },
    ],
    correctAnswer: "b", // Berlin ist größer als München.
  },
  {
    question: "Das ist der _____ Film, den ich je gesehen habe.",
    options: [
      { text: "guter", value: "a" },
      { text: "bessere", value: "b" },
      { text: "beste", value: "c" },
      { text: "am besten", value: "d" },
    ],
    correctAnswer: "c", // Das ist der beste Film, den ich je gesehen habe.
  },
  {
    question: "Mein Bruder ist _____ als ich.",
    options: [
      { text: "alt", value: "a" },
      { text: "älter", value: "b" },
      { text: "am ältesten", value: "c" },
      { text: "älteste", value: "d" },
    ],
    correctAnswer: "b", // Mein Bruder ist älter als ich.
  },
  {
    question: "Der Mount Everest ist der _____ Berg der Welt.",
    options: [
      { text: "hohe", value: "a" },
      { text: "höher", value: "b" },
      { text: "höchste", value: "c" },
      { text: "am höchsten", value: "d" },
    ],
    correctAnswer: "c", // Der Mount Everest ist der höchste Berg der Welt.
  },
  {
    question: "Diese Aufgabe ist _____ als die letzte.",
    options: [
      { text: "schwer", value: "a" },
      { text: "schwerer", value: "b" },
      { text: "schwerste", value: "c" },
      { text: "am schwersten", value: "d" },
    ],
    correctAnswer: "b", // Diese Aufgabe ist schwerer als die letzte.
  },
  {
    question: "Er läuft _____ von allen.",
    options: [
      { text: "schnell", value: "a" },
      { text: "schneller", value: "b" },
      { text: "schnellste", value: "c" },
      { text: "am schnellsten", value: "d" },
    ],
    correctAnswer: "d", // Er läuft am schnellsten von allen.
  },
  {
    question: "Diese Blume ist _____ als jene.",
    options: [
      { text: "schön", value: "a" },
      { text: "schöner", value: "b" },
      { text: "am schönsten", value: "c" },
      { text: "schönste", value: "d" },
    ],
    correctAnswer: "b", // Diese Blume ist schöner als jene.
  },
  {
    question: "Das Wasser ist heute _____ als gestern.",
    options: [
      { text: "kalt", value: "a" },
      { text: "kälter", value: "b" },
      { text: "am kältesten", value: "c" },
      { text: "kälteste", value: "d" },
    ],
    correctAnswer: "b", // Das Wasser ist heute kälter als gestern.
  },
  {
    question: "Sie ist die _____ Studentin in der Klasse.",
    options: [
      { text: "fleißig", value: "a" },
      { text: "fleißiger", value: "b" },
      { text: "fleißigste", value: "c" },
      { text: "am fleißigsten", value: "d" },
    ],
    correctAnswer: "c", // Sie ist die fleißigste Studentin in der Klasse.
  },
  {
    question: "Meine Schwester spricht _____ Englisch als ich.",
    options: [
      { text: "gut", value: "a" },
      { text: "besser", value: "b" },
      { text: "beste", value: "c" },
      { text: "am besten", value: "d" },
    ],
    correctAnswer: "b", // Meine Schwester spricht besser Englisch als ich.
  },

  {
    question: "Ich gebe _____ Mann das Buch.",
    options: [
      { text: "dem", value: "a" },
      { text: "den", value: "b" },
      { text: "der", value: "c" },
      { text: "des", value: "d" },
    ],
    correctAnswer: "a", // Ich gebe dem Mann das Buch.
  },
  {
    question: "Sie schreibt _____ Freundin einen Brief.",
    options: [
      { text: "dem", value: "a" },
      { text: "der", value: "b" },
      { text: "die", value: "c" },
      { text: "den", value: "d" },
    ],
    correctAnswer: "b", // Sie schreibt der Freundin einen Brief.
  },
  {
    question: "Wir helfen _____ alten Frau.",
    options: [
      { text: "die", value: "a" },
      { text: "der", value: "b" },
      { text: "den", value: "c" },
      { text: "dem", value: "d" },
    ],
    correctAnswer: "b", // Wir helfen der alten Frau.
  },
  {
    question: "Er gibt _____ Kind ein Geschenk.",
    options: [
      { text: "das", value: "a" },
      { text: "dem", value: "b" },
      { text: "den", value: "c" },
      { text: "des", value: "d" },
    ],
    correctAnswer: "b", // Er gibt dem Kind ein Geschenk.
  },
  {
    question: "Das gehört _____ Lehrerin.",
    options: [
      { text: "die", value: "a" },
      { text: "der", value: "b" },
      { text: "dem", value: "c" },
      { text: "den", value: "d" },
    ],
    correctAnswer: "b", // Das gehört der Lehrerin.
  },
  {
    question: "Ich danke _____ für deine Hilfe.",
    options: [
      { text: "dich", value: "a" },
      { text: "dir", value: "b" },
      { text: "du", value: "c" },
      { text: "dein", value: "d" },
    ],
    correctAnswer: "b", // Ich danke dir für deine Hilfe.
  },
  {
    question: "Sie folgt _____ durch die Stadt.",
    options: [
      { text: "ihn", value: "a" },
      { text: "ihm", value: "b" },
      { text: "er", value: "c" },
      { text: "sein", value: "d" },
    ],
    correctAnswer: "b", // Sie folgt ihm durch die Stadt.
  },
  {
    question: "Kannst du _____ bitte helfen?",
    options: [
      { text: "mich", value: "a" },
      { text: "mir", value: "b" },
      { text: "ich", value: "c" },
      { text: "mein", value: "d" },
    ],
    correctAnswer: "b", // Kannst du mir bitte helfen?
  },
  {
    question: "Die Mutter kauft _____ Kindern neue Schuhe.",
    options: [
      { text: "die", value: "a" },
      { text: "der", value: "b" },
      { text: "den", value: "c" },
      { text: "dem", value: "d" },
    ],
    correctAnswer: "c", // Die Mutter kauft den Kindern neue Schuhe.
  },
  {
    question: "Er erzählt _____ Bruder eine Geschichte.",
    options: [
      { text: "seinen", value: "a" },
      { text: "seinen", value: "b" },
      { text: "seinem", value: "c" },
      { text: "seines", value: "d" },
    ],
    correctAnswer: "c", // Er erzählt seinem Bruder eine Geschichte.
  },
  {
    question: "Ich lege das Buch _____ den Tisch. (Akkusativ)",
    options: [
      { text: "auf", value: "a" },
      { text: "in", value: "b" },
      { text: "unter", value: "c" },
      { text: "über", value: "d" },
    ],
    correctAnswer: "a", // Ich lege das Buch auf den Tisch.
  },
  {
    question: "Das Buch liegt _____ dem Tisch. (Dativ)",
    options: [
      { text: "auf", value: "a" },
      { text: "in", value: "b" },
      { text: "an", value: "c" },
      { text: "zu", value: "d" },
    ],
    correctAnswer: "a", // Das Buch liegt auf dem Tisch.
  },
  {
    question: "Sie geht _____ die Schule. (Akkusativ)",
    options: [
      { text: "in", value: "a" },
      { text: "zu", value: "b" },
      { text: "bei", value: "c" },
      { text: "von", value: "d" },
    ],
    correctAnswer: "a", // Sie geht in die Schule.
  },
  {
    question: "Er arbeitet _____ der Schule. (Dativ)",
    options: [
      { text: "in", value: "a" },
      { text: "an", value: "b" },
      { text: "auf", value: "c" },
      { text: "zu", value: "d" },
    ],
    correctAnswer: "b", // Er arbeitet an der Schule.
  },
  {
    question: "Wir stellen die Lampe _____ das Fenster. (Akkusativ)",
    options: [
      { text: "neben", value: "a" },
      { text: "zwischen", value: "b" },
      { text: "bei", value: "c" },
      { text: "gegenüber", value: "d" },
    ],
    correctAnswer: "a", // Wir stellen die Lampe neben das Fenster.
  },
  {
    question: "Die Katze sitzt _____ dem Sofa. (Dativ)",
    options: [
      { text: "über", value: "a" },
      { text: "unter", value: "b" },
      { text: "neben", value: "c" },
      { text: "zwischen", value: "d" },
    ],
    correctAnswer: "c", // Die Katze sitzt neben dem Sofa.
  },
  {
    question: "Hänge das Bild _____ die Wand! (Akkusativ)",
    options: [
      { text: "an", value: "a" },
      { text: "auf", value: "b" },
      { text: "in", value: "c" },
      { text: "neben", value: "d" },
    ],
    correctAnswer: "a", // Hänge das Bild an die Wand!
  },
  {
    question: "Das Bild hängt _____ der Wand. (Dativ)",
    options: [
      { text: "an", value: "a" },
      { text: "auf", value: "b" },
      { text: "in", value: "c" },
      { text: "über", value: "d" },
    ],
    correctAnswer: "a", // Das Bild hängt an der Wand.
  },
  {
    question: "Stell den Stuhl _____ den Tisch und das Sofa! (Akkusativ)",
    options: [
      { text: "zwischen", value: "a" },
      { text: "neben", value: "b" },
      { text: "hinter", value: "c" },
      { text: "vor", value: "d" },
    ],
    correctAnswer: "a", // Stell den Stuhl zwischen den Tisch und das Sofa!
  },
  {
    question: "Die Vase steht _____ dem Tisch und dem Fenster. (Dativ)",
    options: [
      { text: "zwischen", value: "a" },
      { text: "neben", value: "b" },
      { text: "an", value: "c" },
      { text: "in", value: "d" },
    ],
    correctAnswer: "a", // Die Vase steht zwischen dem Tisch und dem Fenster.
  },

  {
    question: "Ich _____ mich jeden Morgen.",
    options: [
      { text: "wasche", value: "a" },
      { text: "waschst", value: "b" },
      { text: "wascht", value: "c" },
      { text: "waschen", value: "d" },
    ],
    correctAnswer: "a", // Ich wasche mich jeden Morgen.
  },
  {
    question: "Er _____ sich über das Geschenk.",
    options: [
      { text: "freust", value: "a" },
      { text: "freut", value: "b" },
      { text: "freuen", value: "c" },
      { text: "freue", value: "d" },
    ],
    correctAnswer: "b", // Er freut sich über das Geschenk.
  },
  {
    question: "Wir _____ uns auf den Urlaub.",
    options: [
      { text: "freuen", value: "a" },
      { text: "freue", value: "b" },
      { text: "freut", value: "c" },
      { text: "freust", value: "d" },
    ],
    correctAnswer: "a", // Wir freuen uns auf den Urlaub.
  },
  {
    question: "_____ du dich oft mit deinen Eltern?",
    options: [
      { text: "Streitest", value: "a" },
      { text: "Streiten", value: "b" },
      { text: "Streite", value: "c" },
      { text: "Streitet", value: "d" },
    ],
    correctAnswer: "a", // Streitest du dich oft mit deinen Eltern?
  },
  {
    question: "Die Kinder _____ sich im Spiegel.",
    options: [
      { text: "betrachten", value: "a" },
      { text: "betrachte", value: "b" },
      { text: "betrachtet", value: "c" },
      { text: "betrachtest", value: "d" },
    ],
    correctAnswer: "a", // Die Kinder betrachten sich im Spiegel.
  },
  {
    question: "Ich kann _____ nicht an seinen Namen erinnern.",
    options: [
      { text: "mir", value: "a" },
      { text: "mich", value: "b" },
      { text: "sich", value: "c" },
      { text: "dich", value: "d" },
    ],
    correctAnswer: "a", // Ich kann mir nicht an seinen Namen erinnern.
  },
  {
    question: "Er _____ sich für Kunst.",
    options: [
      { text: "interessiere", value: "a" },
      { text: "interessierst", value: "b" },
      { text: "interessiert", value: "c" },
      { text: "interessieren", value: "d" },
    ],
    correctAnswer: "c", // Er interessiert sich für Kunst.
  },
  {
    question: "Wir müssen _____ beeilen.",
    options: [
      { text: "sich", value: "a" },
      { text: "uns", value: "b" },
      { text: "euch", value: "c" },
      { text: "mich", value: "d" },
    ],
    correctAnswer: "b", // Wir müssen uns beeilen.
  },
  {
    question: "_____ ihr euch auf das Konzert?",
    options: [
      { text: "Freuen", value: "a" },
      { text: "Freut", value: "b" },
      { text: "Freue", value: "c" },
      { text: "Freust", value: "d" },
    ],
    correctAnswer: "b", // Freut ihr euch auf das Konzert?
  },
  {
    question: "Sie _____ sich jeden Tag die Zähne.",
    options: [
      { text: "putzt", value: "a" },
      { text: "putzen", value: "b" },
      { text: "putze", value: "c" },
      { text: "putzst", value: "d" },
    ],
    correctAnswer: "a", // Sie putzt sich jeden Tag die Zähne.
  },
  {
    question: "Ich lerne Deutsch, _____ in Deutschland zu studieren.",
    options: [
      { text: "damit", value: "a" },
      { text: "um", value: "b" },
      { text: "für", value: "c" },
      { text: "weil", value: "d" },
    ],
    correctAnswer: "b", // Ich lerne Deutsch, um in Deutschland zu studieren.
  },
  {
    question: "Er spart Geld, _____ ein Auto zu kaufen.",
    options: [
      { text: "damit", value: "a" },
      { text: "um", value: "b" },
      { text: "für", value: "c" },
      { text: "weil", value: "d" },
    ],
    correctAnswer: "b", // Er spart Geld, um ein Auto zu kaufen.
  },
  {
    question: "Wir gehen früh ins Bett, _____ wir morgen fit sind.",
    options: [
      { text: "damit", value: "a" },
      { text: "um", value: "b" },
      { text: "für", value: "c" },
      { text: "weil", value: "d" },
    ],
    correctAnswer: "a", // Wir gehen früh ins Bett, damit wir morgen fit sind.
  },
  {
    question: "Sie lernt viel, _____ die Prüfung zu bestehen.",
    options: [
      { text: "damit", value: "a" },
      { text: "um", value: "b" },
      { text: "weil", value: "c" },
      { text: "dass", value: "d" },
    ],
    correctAnswer: "b", // Sie lernt viel, um die Prüfung zu bestehen.
  },
  {
    question:
      "Ich gebe dir mein Wörterbuch, _____ du die Übersetzung machen kannst.",
    options: [
      { text: "um", value: "a" },
      { text: "damit", value: "b" },
      { text: "weil", value: "c" },
      { text: "dass", value: "d" },
    ],
    correctAnswer: "b", // Ich gebe dir mein Wörterbuch, damit du die Übersetzung machen kannst.
  },
  {
    question: "Er braucht einen Stift, _____ zu schreiben.",
    options: [
      { text: "damit", value: "a" },
      { text: "um", value: "b" },
      { text: "für", value: "c" },
      { text: "weil", value: "d" },
    ],
    correctAnswer: "b", // Er braucht einen Stift, um zu schreiben.
  },
  {
    question: "Die Mutter kocht, _____ die Familie essen kann.",
    options: [
      { text: "um", value: "a" },
      { text: "damit", value: "b" },
      { text: "weil", value: "c" },
      { text: "dass", value: "d" },
    ],

    correctAnswer: "b", // Die Mutter kocht, damit die Familie essen kann.
  },
  {
    question: "Sie geht zum Arzt, _____ eine Medizin zu bekommen.",
    options: [
      { text: "damit", value: "a" },
      { text: "um", value: "b" },
      { text: "für", value: "c" },
      { text: "weil", value: "d" },
    ],
    correctAnswer: "b", // Sie geht zum Arzt, um eine Medizin zu bekommen.
  },
  {
    question: "Wir kaufen ein Geschenk, _____ unsere Freundin sich freut.",
    options: [
      { text: "damit", value: "a" },
      { text: "um", value: "b" },
      { text: "weil", value: "c" },
      { text: "dass", value: "d" },
    ],
    correctAnswer: "a", // Wir kaufen ein Geschenk, damit unsere Freundin sich freut.
  },
  {
    question: "Er steht früh auf, _____ pünktlich zur Arbeit zu kommen.",
    options: [
      { text: "damit", value: "a" },
      { text: "um", value: "b" },
      { text: "für", value: "c" },
      { text: "dass", value: "d" },
    ],
    correctAnswer: "b", // Er steht früh auf, um pünktlich zur Arbeit zu kommen.
  },

  {
    question: "Ich komme nicht, _____ ich krank bin.",
    options: [
      { text: "dass", value: "a" },
      { text: "weil", value: "b" },
      { text: "wenn", value: "c" },
      { text: "ob", value: "d" },
    ],
    correctAnswer: "b", // Ich komme nicht, weil ich krank bin.
  },
  {
    question: "Er fragt, _____ du kommst.",
    options: [
      { text: "dass", value: "a" },
      { text: "weil", value: "b" },
      { text: "wenn", value: "c" },
      { text: "ob", value: "d" },
    ],
    correctAnswer: "d", // Er fragt, ob du kommst.
  },
  {
    question: "Sie geht nach Hause, _____ sie müde ist.",
    options: [
      { text: "dass", value: "a" },
      { text: "weil", value: "b" },
      { text: "wenn", value: "c" },
      { text: "obwohl", value: "d" },
    ],
    correctAnswer: "b", // Sie geht nach Hause, weil sie müde ist.
  },
  {
    question: "Wir bleiben zu Hause, _____ es regnet.",
    options: [
      { text: "dass", value: "a" },
      { text: "weil", value: "b" },
      { text: "wenn", value: "c" },
      { text: "ob", value: "d" },
    ],
    correctAnswer: "b", // Wir bleiben zu Hause, weil es regnet.
  },
  {
    question: "Ich weiß nicht, _____ er morgen kommt.",
    options: [
      { text: "dass", value: "a" },
      { text: "weil", value: "b" },
      { text: "wenn", value: "c" },
      { text: "ob", value: "d" },
    ],
    correctAnswer: "d", // Ich weiß nicht, ob er morgen kommt.
  },
  {
    question: "_____ er krank ist, geht er zur Arbeit.",
    options: [
      { text: "Dass", value: "a" },
      { text: "Weil", value: "b" },
      { text: "Obwohl", value: "c" },
      { text: "Ob", value: "d" },
    ],
    correctAnswer: "c", // Obwohl er krank ist, geht er zur Arbeit.
  },
  {
    question: "Ich rufe dich an, _____ ich zu Hause bin.",
    options: [
      { text: "dass", value: "a" },
      { text: "weil", value: "b" },
      { text: "wenn", value: "c" },
      { text: "ob", value: "d" },
    ],
    correctAnswer: "c", // Ich rufe dich an, wenn ich zu Hause bin.
  },
  {
    question: "Sie denkt, _____ ich morgen komme.",
    options: [
      { text: "dass", value: "a" },
      { text: "weil", value: "b" },
      { text: "wenn", value: "c" },
      { text: "ob", value: "d" },
    ],
    correctAnswer: "a", // Sie denkt, dass ich morgen komme.
  },
  {
    question: "Er kommt mit, _____ er keine Zeit hat.",
    options: [
      { text: "dass", value: "a" },
      { text: "weil", value: "b" },
      { text: "wenn", value: "c" },
      { text: "obwohl", value: "d" },
    ],
    correctAnswer: "d", // Er kommt mit, obwohl er keine Zeit hat.
  },
  {
    question: "Ich weiß, _____ du die Wahrheit sagst.",
    options: [
      { text: "dass", value: "a" },
      { text: "weil", value: "b" },
      { text: "wenn", value: "c" },
      { text: "ob", value: "d" },
    ],
    correctAnswer: "a", // Ich weiß, dass du die Wahrheit sagst.
  },
  {
    question: "Das ist ein ____ Buch.",
    options: [
      { text: "interessant", value: "a" },
      { text: "interessante", value: "b" },
      { text: "interessantes", value: "c" },
      { text: "interessanten", value: "d" },
    ],
    correctAnswer: "c", // Das ist ein interessantes Buch.
  },
  {
    question: "Ich habe einen ____ Bruder.",
    options: [
      { text: "klein", value: "a" },
      { text: "kleine", value: "b" },
      { text: "kleines", value: "c" },
      { text: "kleinen", value: "d" },
    ],
    correctAnswer: "d", // Ich habe einen kleinen Bruder.
  },
  {
    question: "Die ____ Frau arbeitet in einer Bank.",
    options: [
      { text: "jung", value: "a" },
      { text: "junge", value: "b" },
      { text: "junges", value: "c" },
      { text: "jungen", value: "d" },
    ],
    correctAnswer: "b", // Die junge Frau arbeitet in einer Bank.
  },
  {
    question: "Er fährt ein ____ Auto.",
    options: [
      { text: "schnell", value: "a" },
      { text: "schnelle", value: "b" },
      { text: "schnelles", value: "c" },
      { text: "schnellen", value: "d" },
    ],
    correctAnswer: "c", // Er fährt ein schnelles Auto.
  },
  {
    question: "Wir haben ____ Kinder.",
    options: [
      { text: "nett", value: "a" },
      { text: "nette", value: "b" },
      { text: "nettes", value: "c" },
      { text: "netten", value: "d" },
    ],
    correctAnswer: "b", // Wir haben nette Kinder.
  },
  {
    question: "Ich suche einen ____ Job.",
    options: [
      { text: "gut", value: "a" },
      { text: "gute", value: "b" },
      { text: "gutes", value: "c" },
      { text: "guten", value: "d" },
    ],
    correctAnswer: "d", // Ich suche einen guten Job.
  },
  {
    question: "Das ist eine ____ Tasche.",
    options: [
      { text: "teuer", value: "a" },
      { text: "teure", value: "b" },
      { text: "teures", value: "c" },
      { text: "teuren", value: "d" },
    ],
    correctAnswer: "b", // Das ist eine teure Tasche.
  },
  {
    question: "Der ____ Mann ist Arzt.",
    options: [
      { text: "alt", value: "a" },
      { text: "alte", value: "b" },
      { text: "altes", value: "c" },
      { text: "alten", value: "d" },
    ],
    correctAnswer: "b", // Der alte Mann ist Arzt.
  },
  {
    question: "Wir brauchen ____ Bücher.",
    options: [
      { text: "neu", value: "a" },
      { text: "neue", value: "b" },
      { text: "neues", value: "c" },
      { text: "neuen", value: "d" },
    ],
    correctAnswer: "b", // Wir brauchen neue Bücher.
  },
  {
    question: "Er hat eine ____ Wohnung gefunden.",
    options: [
      { text: "groß", value: "a" },
      { text: "große", value: "b" },
      { text: "großes", value: "c" },
      { text: "großen", value: "d" },
    ],
    correctAnswer: "b", // Er hat eine große Wohnung gefunden.
  },
  {
    question: "Kannst du mir sagen, ____ der Bahnhof ist?",
    options: [
      { text: "wo", value: "a" },
      { text: "wann", value: "b" },
      { text: "warum", value: "c" },
      { text: "wie", value: "d" },
    ],
    correctAnswer: "a", // Kannst du mir sagen, wo der Bahnhof ist?
  },
  {
    question: "Weißt du, ____ der Film beginnt?",
    options: [
      { text: "wo", value: "a" },
      { text: "wann", value: "b" },
      { text: "warum", value: "c" },
      { text: "wer", value: "d" },
    ],
    correctAnswer: "b", // Weißt du, wann der Film beginnt?
  },
  {
    question: "Er fragt, ____ du morgen kommst.",
    options: [
      { text: "dass", value: "a" },
      { text: "wenn", value: "b" },
      { text: "ob", value: "c" },
      { text: "als", value: "d" },
    ],
    correctAnswer: "c", // Er fragt, ob du morgen kommst.
  },
  {
    question: "Ich möchte wissen, ____ das funktioniert.",
    options: [
      { text: "wo", value: "a" },
      { text: "wann", value: "b" },
      { text: "wie", value: "c" },
      { text: "warum", value: "d" },
    ],
    correctAnswer: "c", // Ich möchte wissen, wie das funktioniert.
  },
  {
    question: "Sie fragt, ____ wir fertig sind.",
    options: [
      { text: "wann", value: "a" },
      { text: "wo", value: "b" },
      { text: "wie", value: "c" },
      { text: "ob", value: "d" },
    ],
    correctAnswer: "d", // Sie fragt, ob wir fertig sind.
  },
  {
    question: "Kannst du mir erklären, ____ du das gemacht hast?",
    options: [
      { text: "wann", value: "a" },
      { text: "wie", value: "b" },
      { text: "wo", value: "c" },
      { text: "warum", value: "d" },
    ],
    correctAnswer: "b", // Kannst du mir erklären, wie du das gemacht hast?
  },
  {
    question: "Weißt du, ____ diese Stadt liegt?",
    options: [
      { text: "wo", value: "a" },
      { text: "wann", value: "b" },
      { text: "wie", value: "c" },
      { text: "warum", value: "d" },
    ],
    correctAnswer: "a", // Weißt du, wo diese Stadt liegt?
  },
  {
    question: "Er fragt, ____ ich ihm helfen kann.",
    options: [
      { text: "dass", value: "a" },
      { text: "wenn", value: "b" },
      { text: "ob", value: "c" },
      { text: "weil", value: "d" },
    ],
    correctAnswer: "c", // Er fragt, ob ich ihm helfen kann.
  },
  {
    question: "Ich möchte wissen, ____ das kostet.",
    options: [
      { text: "wie", value: "a" },
      { text: "was", value: "b" },
      { text: "wieviel", value: "c" },
      { text: "wo", value: "d" },
    ],
    correctAnswer: "c", // Ich möchte wissen, wieviel das kostet.
  },
  {
    question: "Sie fragt, ____ ich morgen Zeit habe.",
    options: [
      { text: "wann", value: "a" },
      { text: "ob", value: "b" },
      { text: "dass", value: "c" },
      { text: "wenn", value: "d" },
    ],
    correctAnswer: "b", // Sie fragt, ob ich morgen Zeit habe.
  },
  {
    question: "Ich wohne ____ drei Jahren in Berlin.",
    options: [
      { text: "seit", value: "a" },
      { text: "vor", value: "b" },
      { text: "um", value: "c" },
      { text: "in", value: "d" },
    ],
    correctAnswer: "a", // Ich wohne seit drei Jahren in Berlin.
  },
  {
    question: "____ einer Stunde beginnt der Film.",
    options: [
      { text: "Seit", value: "a" },
      { text: "Vor", value: "b" },
      { text: "In", value: "c" },
      { text: "Um", value: "d" },
    ],
    correctAnswer: "c", // In einer Stunde beginnt der Film.
  },
  {
    question: "Wir treffen uns ____ 8 Uhr.",
    options: [
      { text: "seit", value: "a" },
      { text: "vor", value: "b" },
      { text: "in", value: "c" },
      { text: "um", value: "d" },
    ],
    correctAnswer: "d", // Wir treffen uns um 8 Uhr.
  },
  {
    question: "Er ist ____ zwei Stunden nach Hause gegangen.",
    options: [
      { text: "seit", value: "a" },
      { text: "vor", value: "b" },
      { text: "in", value: "c" },
      { text: "um", value: "d" },
    ],
    correctAnswer: "b", // Er ist vor zwei Stunden nach Hause gegangen.
  },
  {
    question: "____ Montag habe ich einen Termin.",
    options: [
      { text: "Seit", value: "a" },
      { text: "Vor", value: "b" },
      { text: "Am", value: "c" },
      { text: "Um", value: "d" },
    ],
    correctAnswer: "c", // Am Montag habe ich einen Termin.
  },
  {
    question: "Ich war ____ einem Jahr in Italien.",
    options: [
      { text: "seit", value: "a" },
      { text: "vor", value: "b" },
      { text: "in", value: "c" },
      { text: "um", value: "d" },
    ],
    correctAnswer: "b", // Ich war vor einem Jahr in Italien.
  },
  {
    question: "____ zwei Tagen bekomme ich Besuch.",
    options: [
      { text: "Seit", value: "a" },
      { text: "Vor", value: "b" },
      { text: "In", value: "c" },
      { text: "Um", value: "d" },
    ],
    correctAnswer: "c", // In zwei Tagen bekomme ich Besuch.
  },
  {
    question: "Er arbeitet ____ drei Jahren bei dieser Firma.",
    options: [
      { text: "seit", value: "a" },
      { text: "vor", value: "b" },
      { text: "in", value: "c" },
      { text: "um", value: "d" },
    ],
    correctAnswer: "a", // Er arbeitet seit drei Jahren bei dieser Firma.
  },
  {
    question: "____ dem Frühstück lese ich die Zeitung.",
    options: [
      { text: "Seit", value: "a" },
      { text: "Vor", value: "b" },
      { text: "Nach", value: "c" },
      { text: "Um", value: "d" },
    ],
    correctAnswer: "c", // Nach dem Frühstück lese ich die Zeitung.
  },
  {
    question: "Wir fahren ____ Sommer nach Spanien.",
    options: [
      { text: "seit", value: "a" },
      { text: "vor", value: "b" },
      { text: "im", value: "c" },
      { text: "am", value: "d" },
    ],
    correctAnswer: "c", // Wir fahren im Sommer nach Spanien.
  },
  {
    question: "Das ist das Auto ____ Mannes.",
    options: [
      { text: "der", value: "a" },
      { text: "des", value: "b" },
      { text: "dem", value: "c" },
      { text: "den", value: "d" },
    ],
    correctAnswer: "b", // Das ist das Auto des Mannes.
  },
  {
    question: "Die Tasche ____ Frau ist rot.",
    options: [
      { text: "der", value: "a" },
      { text: "des", value: "b" },
      { text: "dem", value: "c" },
      { text: "den", value: "d" },
    ],
    correctAnswer: "a", // Die Tasche der Frau ist rot.
  },
  {
    question: "____ des Buches ist interessant.",
    options: [
      { text: "Das Titel", value: "a" },
      { text: "Der Titel", value: "b" },
      { text: "Die Titel", value: "c" },
      { text: "Den Titel", value: "d" },
    ],
    correctAnswer: "b", // Der Titel des Buches ist interessant.
  },
  {
    question: "Die Farbe ____ Autos gefällt mir.",
    options: [
      { text: "der", value: "a" },
      { text: "des", value: "b" },
      { text: "dem", value: "c" },
      { text: "den", value: "d" },
    ],
    correctAnswer: "b", // Die Farbe des Autos gefällt mir.
  },
  {
    question: "Das Spielzeug ____ Kindes ist neu.",
    options: [
      { text: "der", value: "a" },
      { text: "des", value: "b" },
      { text: "dem", value: "c" },
      { text: "den", value: "d" },
    ],
    correctAnswer: "b", // Das Spielzeug des Kindes ist neu.
  },
  {
    question: "Er ist der Bruder ____ Freundin.",
    options: [
      { text: "meine", value: "a" },
      { text: "meiner", value: "b" },
      { text: "meinem", value: "c" },
      { text: "meinen", value: "d" },
    ],
    correctAnswer: "b", // Er ist der Bruder meiner Freundin.
  },
  {
    question: "____ der Prüfung bleibe ich zu Hause.",
    options: [
      { text: "Wegen", value: "a" },
      { text: "Während", value: "b" },
      { text: "Trotz", value: "c" },
      { text: "Statt", value: "d" },
    ],
    correctAnswer: "a", // Wegen der Prüfung bleibe ich zu Hause.
  },
  {
    question: "____ des schlechten Wetters gehen wir spazieren.",
    options: [
      { text: "Wegen", value: "a" },
      { text: "Während", value: "b" },
      { text: "Trotz", value: "c" },
      { text: "Statt", value: "d" },
    ],
    correctAnswer: "c", // Trotz des schlechten Wetters gehen wir spazieren.
  },
  {
    question: "____ der Arbeit höre ich Musik.",
    options: [
      { text: "Wegen", value: "a" },
      { text: "Während", value: "b" },
      { text: "Trotz", value: "c" },
      { text: "Statt", value: "d" },
    ],
    correctAnswer: "b", // Während der Arbeit höre ich Musik.
  },
  {
    question: "Er bleibt zu Hause ____ seiner Erkältung.",
    options: [
      { text: "wegen", value: "a" },
      { text: "während", value: "b" },
      { text: "trotz", value: "c" },
      { text: "statt", value: "d" },
    ],
    correctAnswer: "a", // Er bleibt zu Hause wegen seiner Erkältung.
  },
  {
    question: "Das Haus ____ gebaut.",
    options: [
      { text: "wird", value: "a" },
      { text: "werdet", value: "b" },
      { text: "wirst", value: "c" },
      { text: "werden", value: "d" },
    ],
    correctAnswer: "a", // Das Haus wird gebaut.
  },
  {
    question: "Die Straße ____ gereinigt.",
    options: [
      { text: "wurde", value: "a" },
      { text: "wurden", value: "b" },
      { text: "wurdest", value: "c" },
      { text: "wurdet", value: "d" },
    ],
    correctAnswer: "a", // Die Straße wurde gereinigt.
  },
  {
    question: "Die Aufgaben ____ von den Schülern gelöst.",
    options: [
      { text: "wird", value: "a" },
      { text: "werden", value: "b" },
      { text: "werdet", value: "c" },
      { text: "wirst", value: "d" },
    ],
    correctAnswer: "b", // Die Aufgaben werden von den Schülern gelöst.
  },
  {
    question: "Das Buch ____ von ihm gelesen.",
    options: [
      { text: "wird", value: "a" },
      { text: "wirst", value: "b" },
      { text: "werdet", value: "c" },
      { text: "werden", value: "d" },
    ],
    correctAnswer: "a", // Das Buch wird von ihm gelesen.
  },
  {
    question: "Die Tür ____ geschlossen.",
    options: [
      { text: "wurde", value: "a" },
      { text: "wurden", value: "b" },
      { text: "wurdest", value: "c" },
      { text: "wurdet", value: "d" },
    ],
    correctAnswer: "a", // Die Tür wurde geschlossen.
  },
  {
    question: "In Deutschland ____ viel Bier getrunken.",
    options: [
      { text: "wird", value: "a" },
      { text: "wirst", value: "b" },
      { text: "werdet", value: "c" },
      { text: "werden", value: "d" },
    ],
    correctAnswer: "a", // In Deutschland wird viel Bier getrunken.
  },
  {
    question: "Der Brief ____ geschrieben.",
    options: [
      { text: "werde", value: "a" },
      { text: "wirst", value: "b" },
      { text: "wird", value: "c" },
      { text: "werden", value: "d" },
    ],
    correctAnswer: "c", // Der Brief wird geschrieben.
  },
  {
    question: "Die Häuser ____ renoviert.",
    options: [
      { text: "werden", value: "a" },
      { text: "wird", value: "b" },
      { text: "wirst", value: "c" },
      { text: "werdet", value: "d" },
    ],
    correctAnswer: "a", // Die Häuser werden renoviert.
  },
  {
    question: "Das Auto ____ repariert.",
    options: [
      { text: "wurde", value: "a" },
      { text: "wurden", value: "b" },
      { text: "wurdest", value: "c" },
      { text: "wurdet", value: "d" },
    ],
    correctAnswer: "a", // Das Auto wurde repariert.
  },
  {
    question: "Die Fenster ____ geputzt.",
    options: [
      { text: "werden", value: "a" },
      { text: "wird", value: "b" },
      { text: "wirst", value: "c" },
      { text: "werdet", value: "d" },
    ],
    correctAnswer: "a", // Die Fenster werden geputzt.
  },
  {
    question: "Wenn ich Zeit ____, würde ich kommen.",
    options: [
      { text: "habe", value: "a" },
      { text: "hätte", value: "b" },
      { text: "hatte", value: "c" },
      { text: "haben", value: "d" },
    ],
    correctAnswer: "b", // Wenn ich Zeit hätte, würde ich kommen.
  },
  {
    question: "Ich ____ gerne nach Berlin fahren.",
    options: [
      { text: "wurde", value: "a" },
      { text: "würde", value: "b" },
      { text: "werde", value: "c" },
      { text: "wird", value: "d" },
    ],
    correctAnswer: "b", // Ich würde gerne nach Berlin fahren.
  },
  {
    question: "Wenn er Geld ____, könnte er ein Auto kaufen.",
    options: [
      { text: "hat", value: "a" },
      { text: "hätte", value: "b" },
      { text: "hatte", value: "c" },
      { text: "haben", value: "d" },
    ],
    correctAnswer: "b", // Wenn er Geld hätte, könnte er ein Auto kaufen.
  },
  {
    question: "____ du mir bitte helfen?",
    options: [
      { text: "Könntest", value: "a" },
      { text: "Kannst", value: "b" },
      { text: "Konntest", value: "c" },
      { text: "Können", value: "d" },
    ],
    correctAnswer: "a", // Könntest du mir bitte helfen?
  },
  {
    question: "Sie ____ lieber zu Hause bleiben.",
    options: [
      { text: "würde", value: "a" },
      { text: "wurde", value: "b" },
      { text: "wird", value: "c" },
      { text: "werden", value: "d" },
    ],
    correctAnswer: "a", // Sie würde lieber zu Hause bleiben.
  },
  {
    question: "Wenn wir mehr Zeit ____, könnten wir ins Kino gehen.",
    options: [
      { text: "haben", value: "a" },
      { text: "hatten", value: "b" },
      { text: "hätten", value: "c" },
      { text: "hat", value: "d" },
    ],
    correctAnswer: "c", // Wenn wir mehr Zeit hätten, könnten wir ins Kino gehen.
  },
  {
    question: "Ich ____ das nicht tun.",
    options: [
      { text: "werde", value: "a" },
      { text: "würde", value: "b" },
      { text: "wurde", value: "c" },
      { text: "wird", value: "d" },
    ],
    correctAnswer: "b", // Ich würde das nicht tun.
  },
  {
    question: "Wenn ich du ____, würde ich das anders machen.",
    options: [
      { text: "bin", value: "a" },
      { text: "wäre", value: "b" },
      { text: "war", value: "c" },
      { text: "bist", value: "d" },
    ],
    correctAnswer: "b", // Wenn ich du wäre, würde ich das anders machen.
  },
  {
    question: "Er ____ gerne Deutsch lernen.",
    options: [
      { text: "wird", value: "a" },
      { text: "würde", value: "b" },
      { text: "wurde", value: "c" },
      { text: "werde", value: "d" },
    ],
    correctAnswer: "b", // Er würde gerne Deutsch lernen.
  },
  {
    question: "Wenn es nicht regnen ____, würden wir spazieren gehen.",
    options: [
      { text: "würde", value: "a" },
      { text: "wird", value: "b" },
      { text: "werde", value: "c" },
      { text: "wurden", value: "d" },
    ],
    correctAnswer: "a", // Wenn es nicht regnen würde, würden wir spazieren gehen.
  },
  {
    question: "Das ist der Mann, ____ in Berlin wohnt.",
    options: [
      { text: "der", value: "a" },
      { text: "die", value: "b" },
      { text: "das", value: "c" },
      { text: "den", value: "d" },
    ],
    correctAnswer: "a", // Das ist der Mann, der in Berlin wohnt.
  },
  {
    question: "Die Frau, ____ ich gestern getroffen habe, ist Lehrerin.",
    options: [
      { text: "der", value: "a" },
      { text: "die", value: "b" },
      { text: "das", value: "c" },
      { text: "den", value: "d" },
    ],
    correctAnswer: "b", // Die Frau, die ich gestern getroffen habe, ist Lehrerin.
  },
  {
    question: "Das Buch, ____ auf dem Tisch liegt, ist interessant.",
    options: [
      { text: "der", value: "a" },
      { text: "die", value: "b" },
      { text: "das", value: "c" },
      { text: "den", value: "d" },
    ],
    correctAnswer: "c", // Das Buch, das auf dem Tisch liegt, ist interessant.
  },
  {
    question: "Kennst du die Leute, ____ dort stehen?",
    options: [
      { text: "der", value: "a" },
      { text: "die", value: "b" },
      { text: "das", value: "c" },
      { text: "den", value: "d" },
    ],
    correctAnswer: "b", // Kennst du die Leute, die dort stehen?
  },
  {
    question: "Der Junge, ____ Vater Arzt ist, geht in meine Klasse.",
    options: [
      { text: "dessen", value: "a" },
      { text: "deren", value: "b" },
      { text: "dem", value: "c" },
      { text: "den", value: "d" },
    ],
    correctAnswer: "a", // Der Junge, dessen Vater Arzt ist, geht in meine Klasse.
  },
  {
    question: "Die Frau, ____ Auto vor dem Haus steht, ist meine Nachbarin.",
    options: [
      { text: "dessen", value: "a" },
      { text: "deren", value: "b" },
      { text: "dem", value: "c" },
      { text: "den", value: "d" },
    ],
    correctAnswer: "b", // Die Frau, deren Auto vor dem Haus steht, ist meine Nachbarin.
  },
  {
    question: "Das ist das Haus, ____ ich gekauft habe.",
    options: [
      { text: "der", value: "a" },
      { text: "die", value: "b" },
      { text: "das", value: "c" },
      { text: "den", value: "d" },
    ],
    correctAnswer: "c", // Das ist das Haus, das ich gekauft habe.
  },
  {
    question: "Die Menschen, ____ ich helfe, sind sehr dankbar.",
    options: [
      { text: "der", value: "a" },
      { text: "die", value: "b" },
      { text: "das", value: "c" },
      { text: "denen", value: "d" },
    ],
    correctAnswer: "d", // Die Menschen, denen ich helfe, sind sehr dankbar.
  },
  {
    question: "Das ist der Film, ____ wir gestern gesehen haben.",
    options: [
      { text: "der", value: "a" },
      { text: "die", value: "b" },
      { text: "das", value: "c" },
      { text: "den", value: "d" },
    ],
    correctAnswer: "c", // Das ist der Film, das wir gestern gesehen haben.
  },
  {
    question: "Die Stadt, ____ ich geboren bin, ist sehr klein.",
    options: [
      { text: "in der", value: "a" },
      { text: "in die", value: "b" },
      { text: "in das", value: "c" },
      { text: "in dem", value: "d" },
    ],
    correctAnswer: "a", // Die Stadt, in der ich geboren bin, ist sehr klein.
  },
  {
    question: "Er wohnt in ____ alten Haus.",
    options: [
      { text: "einem", value: "a" },
      { text: "einen", value: "b" },
      { text: "einer", value: "c" },
      { text: "eines", value: "d" },
    ],
    correctAnswer: "a", // Er wohnt in einem alten Haus.
  },
  {
    question: "Sie spricht mit ____ netten Mann.",
    options: [
      { text: "einem", value: "a" },
      { text: "einen", value: "b" },
      { text: "einer", value: "c" },
      { text: "eines", value: "d" },
    ],
    correctAnswer: "a", // Sie spricht mit einem netten Mann.
  },
  {
    question: "Das Buch ____ bekannten Autors ist sehr interessant.",
    options: [
      { text: "einem", value: "a" },
      { text: "einen", value: "b" },
      { text: "einer", value: "c" },
      { text: "eines", value: "d" },
    ],
    correctAnswer: "d", // Das Buch eines bekannten Autors ist sehr interessant.
  },
  {
    question: "Wir helfen ____ alten Frau.",
    options: [
      { text: "einem", value: "a" },
      { text: "einen", value: "b" },
      { text: "einer", value: "c" },
      { text: "eines", value: "d" },
    ],
    correctAnswer: "c", // Wir helfen einer alten Frau.
  },
  {
    question: "Die Farbe ____ neuen Autos gefällt mir.",
    options: [
      { text: "einem", value: "a" },
      { text: "einen", value: "b" },
      { text: "einer", value: "c" },
      { text: "eines", value: "d" },
    ],
    correctAnswer: "d", // Die Farbe eines neuen Autos gefällt mir.
  },
  {
    question: "Sie denkt an ____ schönen Tag.",
    options: [
      { text: "einem", value: "a" },
      { text: "einen", value: "b" },
      { text: "einer", value: "c" },
      { text: "eines", value: "d" },
    ],
    correctAnswer: "a", // Sie denkt an einen schönen Tag.
  },
  {
    question: "Er spricht über ____ interessantes Thema.",
    options: [
      { text: "einem", value: "a" },
      { text: "einen", value: "b" },
      { text: "einer", value: "c" },
      { text: "ein", value: "d" },
    ],
    correctAnswer: "a", // Er spricht über ein interessantes Thema.
  },
  {
    question: "Das ist die Tasche ____ kleinen Mädchens.",
    options: [
      { text: "einem", value: "a" },
      { text: "einen", value: "b" },
      { text: "einer", value: "c" },
      { text: "des", value: "d" },
    ],
    correctAnswer: "c", // Das ist die Tasche einer kleinen Mädchens.
  },
  {
    question: "Wir fahren mit ____ schnellen Auto.",
    options: [
      { text: "einem", value: "a" },
      { text: "einen", value: "b" },
      { text: "einer", value: "c" },
      { text: "eines", value: "d" },
    ],
    correctAnswer: "a", // Wir fahren mit einem schnellen Auto.
  },
  {
    question: "Sie wohnt in ____ großen Stadt.",
    options: [
      { text: "einem", value: "a" },
      { text: "einen", value: "b" },
      { text: "einer", value: "c" },
      { text: "eines", value: "d" },
    ],
    correctAnswer: "c", // Sie wohnt in einer großen Stadt.
  },
  {
    question: "Nachdem ich meine Hausaufgaben ____ ____, ging ich ins Kino.",
    options: [
      { text: "habe / gemacht", value: "a" },
      { text: "hatte / gemacht", value: "b" },
      { text: "bin / gemacht", value: "c" },
      { text: "war / gemacht", value: "d" },
    ],
    correctAnswer: "b", // Nachdem ich meine Hausaufgaben gemacht hatte, ging ich ins Kino.
  },
  {
    question: "Er ____ sein Handy verloren, bevor er nach Hause kam.",
    options: [
      { text: "hat", value: "a" },
      { text: "hatte", value: "b" },
      { text: "ist", value: "c" },
      { text: "war", value: "d" },
    ],
    correctAnswer: "b", // Er hatte sein Handy verloren, bevor er nach Hause kam.
  },
  {
    question: "Nachdem sie ____ ____, ging sie einkaufen.",
    options: [
      { text: "hat / gefrühstückt", value: "a" },
      { text: "hatte / gefrühstückt", value: "b" },
      { text: "ist / gefrühstückt", value: "c" },
      { text: "war / gefrühstückt", value: "d" },
    ],
    correctAnswer: "b", // Nachdem sie gefrühstückt hatte, ging sie einkaufen.
  },
  {
    question: "Wir ____ schon gegessen, als er ankam.",
    options: [
      { text: "haben", value: "a" },
      { text: "hatten", value: "b" },
      { text: "sind", value: "c" },
      { text: "waren", value: "d" },
    ],
    correctAnswer: "b", // Wir hatten schon gegessen, als er ankam.
  },
  {
    question: "Nachdem er den Film ____ ____, ging er schlafen.",
    options: [
      { text: "hat / gesehen", value: "a" },
      { text: "hatte / gesehen", value: "b" },
      { text: "ist / gesehen", value: "c" },
      { text: "war / gesehen", value: "d" },
    ],
    correctAnswer: "b", // Nachdem er den Film gesehen hatte, ging er schlafen.
  },
  {
    question: "Sie ____ das Buch gelesen, bevor sie den Film sah.",
    options: [
      { text: "hat", value: "a" },
      { text: "hatte", value: "b" },
      { text: "ist", value: "c" },
      { text: "war", value: "d" },
    ],
    correctAnswer: "b", // Sie hatte das Buch gelesen, bevor sie den Film sah.
  },
  {
    question: "Nachdem wir den Bus ____ ____, mussten wir zu Fuß gehen.",
    options: [
      { text: "haben / verpasst", value: "a" },
      { text: "hatten / verpasst", value: "b" },
      { text: "sind / verpasst", value: "c" },
      { text: "waren / verpasst", value: "d" },
    ],
    correctAnswer: "b", // Nachdem wir den Bus verpasst hatten, mussten wir zu Fuß gehen.
  },
  {
    question: "Er ____ seine Schlüssel verloren, bevor er zur Arbeit ging.",
    options: [
      { text: "hat", value: "a" },
      { text: "hatte", value: "b" },
      { text: "ist", value: "c" },
      { text: "war", value: "d" },
    ],
    correctAnswer: "b", // Er hatte seine Schlüssel verloren, bevor er zur Arbeit ging.
  },
  {
    question: "Nachdem ich den Brief ____ ____, brachte ich ihn zur Post.",
    options: [
      { text: "habe / geschrieben", value: "a" },
      { text: "hatte / geschrieben", value: "b" },
      { text: "bin / geschrieben", value: "c" },
      { text: "war / geschrieben", value: "d" },
    ],
    correctAnswer: "b", // Nachdem ich den Brief geschrieben hatte, brachte ich ihn zur Post.
  },
  {
    question: "Sie ____ schon geschlafen, als ich nach Hause kam.",
    options: [
      { text: "hat", value: "a" },
      { text: "hatte", value: "b" },
      { text: "ist", value: "c" },
      { text: "war", value: "d" },
    ],
    correctAnswer: "b", // Sie hatte schon geschlafen, als ich nach Hause kam.
  },
  {
    question: "Er geht ____ des Regens spazieren.",
    options: [
      { text: "wegen", value: "a" },
      { text: "trotz", value: "b" },
      { text: "während", value: "c" },
      { text: "statt", value: "d" },
    ],
    correctAnswer: "b", // Er geht trotz des Regens spazieren.
  },
  {
    question: "____ des Lärms konnte ich nicht schlafen.",
    options: [
      { text: "Wegen", value: "a" },
      { text: "Trotz", value: "b" },
      { text: "Während", value: "c" },
      { text: "Statt", value: "d" },
    ],
    correctAnswer: "a", // Wegen des Lärms konnte ich nicht schlafen.
  },
  {
    question: "____ des Films schlief er ein.",
    options: [
      { text: "Wegen", value: "a" },
      { text: "Trotz", value: "b" },
      { text: "Während", value: "c" },
      { text: "Statt", value: "d" },
    ],
    correctAnswer: "c", // Während des Films schlief er ein.
  },
  {
    question: "Sie geht ____ ihrer Freundin ins Kino.",
    options: [
      { text: "wegen", value: "a" },
      { text: "trotz", value: "b" },
      { text: "während", value: "c" },
      { text: "statt", value: "d" },
    ],
    correctAnswer: "d", // Sie geht statt ihrer Freundin ins Kino.
  },
  {
    question: "____ des Regens gingen wir schwimmen.",
    options: [
      { text: "Wegen", value: "a" },
      { text: "Trotz", value: "b" },
      { text: "Während", value: "c" },
      { text: "Statt", value: "d" },
    ],
    correctAnswer: "b", // Trotz des Regens gingen wir schwimmen.
  },
  {
    question: "____ seiner Hilfe konnten wir das Problem lösen.",
    options: [
      { text: "Trotz", value: "a" },
      { text: "Während", value: "b" },
      { text: "Dank", value: "c" },
      { text: "Statt", value: "d" },
    ],
    correctAnswer: "c", // Dank seiner Hilfe konnten wir das Problem lösen.
  },
  {
    question: "Er blieb zu Hause ____ seiner Erkältung.",
    options: [
      { text: "wegen", value: "a" },
      { text: "trotz", value: "b" },
      { text: "während", value: "c" },
      { text: "statt", value: "d" },
    ],
    correctAnswer: "a", // Er blieb zu Hause wegen seiner Erkältung.
  },
  {
    question: "____ des Lärms arbeitete sie konzentriert.",
    options: [
      { text: "Wegen", value: "a" },
      { text: "Trotz", value: "b" },
      { text: "Während", value: "c" },
      { text: "Statt", value: "d" },
    ],
    correctAnswer: "b", // Trotz des Lärms arbeitete sie konzentriert.
  },
  {
    question: "____ des schlechten Wetters bleiben wir zu Hause.",
    options: [
      { text: "Wegen", value: "a" },
      { text: "Trotz", value: "b" },
      { text: "Während", value: "c" },
      { text: "Statt", value: "d" },
    ],
    correctAnswer: "a", // Wegen des schlechten Wetters bleiben wir zu Hause.
  },
  {
    question: "Ich nehme einen Tee ____ eines Kaffees.",
    options: [
      { text: "wegen", value: "a" },
      { text: "trotz", value: "b" },
      { text: "während", value: "c" },
      { text: "statt", value: "d" },
    ],
    correctAnswer: "d", // Ich nehme einen Tee statt eines Kaffees.
  },
  {
    question: "Er spricht ____ Deutsch ____ Englisch.",
    options: [
      { text: "entweder / oder", value: "a" },
      { text: "weder / noch", value: "b" },
      { text: "sowohl / als auch", value: "c" },
      { text: "nicht nur / sondern auch", value: "d" },
    ],
    correctAnswer: "c", // Er spricht sowohl Deutsch als auch Englisch.
  },
  {
    question: "Sie hat ____ ein Auto ____ ein Fahrrad.",
    options: [
      { text: "entweder / oder", value: "a" },
      { text: "weder / noch", value: "b" },
      { text: "sowohl / als auch", value: "c" },
      { text: "nicht nur / sondern auch", value: "d" },
    ],
    correctAnswer: "b", // Sie hat weder ein Auto noch ein Fahrrad.
  },
  {
    question: "Ich gehe ____ ins Kino ____ ins Theater.",
    options: [
      { text: "entweder / oder", value: "a" },
      { text: "weder / noch", value: "b" },
      { text: "sowohl / als auch", value: "c" },
      { text: "nicht nur / sondern auch", value: "d" },
    ],
    correctAnswer: "a", // Ich gehe entweder ins Kino oder ins Theater.
  },
  {
    question: "Er ist ____ intelligent ____ fleißig.",
    options: [
      { text: "entweder / oder", value: "a" },
      { text: "weder / noch", value: "b" },
      { text: "sowohl / als auch", value: "c" },
      { text: "nicht nur / sondern auch", value: "d" },
    ],
    correctAnswer: "c", // Er ist sowohl intelligent als auch fleißig.
  },
  {
    question: "Sie spricht ____ Französisch ____ Italienisch.",
    options: [
      { text: "entweder / oder", value: "a" },
      { text: "weder / noch", value: "b" },
      { text: "sowohl / als auch", value: "c" },
      { text: "nicht nur / sondern auch", value: "d" },
    ],
    correctAnswer: "b", // Sie spricht weder Französisch noch Italienisch.
  },
  {
    question: "Das Essen war ____ zu salzig ____ zu kalt.",
    options: [
      { text: "entweder / oder", value: "a" },
      { text: "weder / noch", value: "b" },
      { text: "sowohl / als auch", value: "c" },
      { text: "nicht nur / sondern auch", value: "d" },
    ],
    correctAnswer: "d", // Das Essen war nicht nur zu salzig, sondern auch zu kalt.
  },
  {
    question: "____ er ____ seine Schwester kommen zur Party.",
    options: [
      { text: "Entweder / oder", value: "a" },
      { text: "Weder / noch", value: "b" },
      { text: "Sowohl / als auch", value: "c" },
      { text: "Nicht nur / sondern auch", value: "d" },
    ],
    correctAnswer: "a", // Entweder er oder seine Schwester kommen zur Party.
  },
  {
    question: "Ich trinke ____ Kaffee ____ auch Tee.",
    options: [
      { text: "entweder / oder", value: "a" },
      { text: "weder / noch", value: "b" },
      { text: "sowohl / als auch", value: "c" },
      { text: "nicht nur / sondern auch", value: "d" },
    ],
    correctAnswer: "c", // Ich trinke sowohl Kaffee als auch Tee.
  },
  {
    question: "____ heute ____ morgen haben wir Zeit.",
    options: [
      { text: "Entweder / oder", value: "a" },
      { text: "Weder / noch", value: "b" },
      { text: "Sowohl / als auch", value: "c" },
      { text: "Nicht nur / sondern auch", value: "d" },
    ],
    correctAnswer: "a", // Entweder heute oder morgen haben wir Zeit.
  },
  {
    question: "Er ist ____ klug, ____ auch sehr nett.",
    options: [
      { text: "entweder / oder", value: "a" },
      { text: "weder / noch", value: "b" },
      { text: "sowohl / als auch", value: "c" },
      { text: "nicht nur / sondern auch", value: "d" },
    ],
    correctAnswer: "d", // Er ist nicht nur klug, sondern auch sehr nett.
  },
  {
    question: "Der ____ kommt aus Berlin.",
    options: [
      { text: "Student", value: "a" },
      { text: "Studenten", value: "b" },
      { text: "Studente", value: "c" },
      { text: "Studentens", value: "d" },
    ],
    correctAnswer: "a", // Der Student kommt aus Berlin.
  },
  {
    question: "Ich habe den ____ gesehen.",
    options: [
      { text: "Mensch", value: "a" },
      { text: "Menschen", value: "b" },
      { text: "Mensche", value: "c" },
      { text: "Menschens", value: "d" },
    ],
    correctAnswer: "b", // Ich habe den Menschen gesehen.
  },
  {
    question: "Der ____ arbeitet in einem Krankenhaus.",
    options: [
      { text: "Polizist", value: "a" },
      { text: "Polizisten", value: "b" },
      { text: "Poliziste", value: "c" },
      { text: "Polizists", value: "d" },
    ],
    correctAnswer: "a", // Der Polizist arbeitet in einem Krankenhaus.
  },
  {
    question: "Wir helfen dem ____.",
    options: [
      { text: "Kollege", value: "a" },
      { text: "Kollegen", value: "b" },
      { text: "Kolleges", value: "c" },
      { text: "Kollegens", value: "d" },
    ],
    correctAnswer: "b", // Wir helfen dem Kollegen.
  },
  {
    question: "Das Auto des ____ ist neu.",
    options: [
      { text: "Junge", value: "a" },
      { text: "Jungen", value: "b" },
      { text: "Junges", value: "c" },
      { text: "Jungens", value: "d" },
    ],
    correctAnswer: "b", // Das Auto des Jungen ist neu.
  },
  {
    question: "Der ____ hat eine Präsentation gehalten.",
    options: [
      { text: "Präsident", value: "a" },
      { text: "Präsidenten", value: "b" },
      { text: "Präsidente", value: "c" },
      { text: "Präsidents", value: "d" },
    ],
    correctAnswer: "a", // Der Präsident hat eine Präsentation gehalten.
  },
  {
    question: "Ich kenne den ____ gut.",
    options: [
      { text: "Tourist", value: "a" },
      { text: "Touristen", value: "b" },
      { text: "Touriste", value: "c" },
      { text: "Tourists", value: "d" },
    ],
    correctAnswer: "b", // Ich kenne den Touristen gut.
  },
  {
    question: "Die Rede des ____ war sehr gut.",
    options: [
      { text: "Diplomat", value: "a" },
      { text: "Diplomaten", value: "b" },
      { text: "Diplomate", value: "c" },
      { text: "Diplomats", value: "d" },
    ],
    correctAnswer: "b", // Die Rede des Diplomaten war sehr gut.
  },
  {
    question: "Der ____ spielt Gitarre.",
    options: [
      { text: "Musikant", value: "a" },
      { text: "Musikanten", value: "b" },
      { text: "Musikante", value: "c" },
      { text: "Musikants", value: "d" },
    ],
    correctAnswer: "a", // Der Musikant spielt Gitarre.
  },
  {
    question: "Ich danke dem ____ für die Hilfe.",
    options: [
      { text: "Patient", value: "a" },
      { text: "Patienten", value: "b" },
      { text: "Patiente", value: "c" },
      { text: "Patients", value: "d" },
    ],
    correctAnswer: "b", // Ich danke dem Patienten für die Hilfe.
  },
  {
    question: "Ich ____ morgen ins Kino ____.",
    options: [
      { text: "werde / gehen", value: "a" },
      { text: "wirst / gehen", value: "b" },
      { text: "wird / gehen", value: "c" },
      { text: "werden / gehen", value: "d" },
    ],
    correctAnswer: "a", // Ich werde morgen ins Kino gehen.
  },
  {
    question: "Du ____ nächste Woche nach Berlin ____.",
    options: [
      { text: "werde / fahren", value: "a" },
      { text: "wirst / fahren", value: "b" },
      { text: "wird / fahren", value: "c" },
      { text: "werden / fahren", value: "d" },
    ],
    correctAnswer: "b", // Du wirst nächste Woche nach Berlin fahren.
  },
  {
    question: "Er ____ ein neues Auto ____.",
    options: [
      { text: "werde / kaufen", value: "a" },
      { text: "wirst / kaufen", value: "b" },
      { text: "wird / kaufen", value: "c" },
      { text: "werden / kaufen", value: "d" },
    ],
    correctAnswer: "c", // Er wird ein neues Auto kaufen.
  },
  {
    question: "Wir ____ nächstes Jahr umziehen ____.",
    options: [
      { text: "werde / umziehen", value: "a" },
      { text: "wirst / umziehen", value: "b" },
      { text: "wird / umziehen", value: "c" },
      { text: "werden / umziehen", value: "d" },
    ],
    correctAnswer: "d", // Wir werden nächstes Jahr umziehen.
  },
  {
    question: "____ ihr an dem Kurs teilnehmen ____?",
    options: [
      { text: "Werde / teilnehmen", value: "a" },
      { text: "Wirst / teilnehmen", value: "b" },
      { text: "Wird / teilnehmen", value: "c" },
      { text: "Werdet / teilnehmen", value: "d" },
    ],
    correctAnswer: "d", // Werdet ihr an dem Kurs teilnehmen?
  },
  {
    question: "Sie ____ uns besuchen ____.",
    options: [
      { text: "werde / besuchen", value: "a" },
      { text: "wirst / besuchen", value: "b" },
      { text: "wird / besuchen", value: "c" },
      { text: "werden / besuchen", value: "d" },
    ],
    correctAnswer: "c", // Sie wird uns besuchen.
  },
  {
    question: "Ich ____ dir helfen ____.",
    options: [
      { text: "werde / helfen", value: "a" },
      { text: "wirst / helfen", value: "b" },
      { text: "wird / helfen", value: "c" },
      { text: "werden / helfen", value: "d" },
    ],
    correctAnswer: "a", // Ich werde dir helfen.
  },
  {
    question: "Du ____ es verstehen ____.",
    options: [
      { text: "werde / verstehen", value: "a" },
      { text: "wirst / verstehen", value: "b" },
      { text: "wird / verstehen", value: "c" },
      { text: "werden / verstehen", value: "d" },
    ],
    correctAnswer: "b", // Du wirst es verstehen.
  },
  {
    question: "Er ____ nicht kommen ____.",
    options: [
      { text: "werde / kommen", value: "a" },
      { text: "wirst / kommen", value: "b" },
      { text: "wird / kommen", value: "c" },
      { text: "werden / kommen", value: "d" },
    ],
    correctAnswer: "c", // Er wird nicht kommen.
  },
  {
    question: "Wir ____ uns freuen ____.",
    options: [
      { text: "werde / freuen", value: "a" },
      { text: "wirst / freuen", value: "b" },
      { text: "wird / freuen", value: "c" },
      { text: "werden / freuen", value: "d" },
    ],
    correctAnswer: "d", // Wir werden uns freuen.
  },
  {
    question: 'Er sagt: "Ich bin müde." → Er sagt, er ____ müde.',
    options: [
      { text: "ist", value: "a" },
      { text: "sei", value: "b" },
      { text: "wäre", value: "c" },
      { text: "würde", value: "d" },
    ],
    correctAnswer: "b", // Er sagt, er sei müde.
  },
  {
    question:
      'Sie sagt: "Ich habe keine Zeit." → Sie sagt, sie ____ keine Zeit.',
    options: [
      { text: "hat", value: "a" },
      { text: "habe", value: "b" },
      { text: "hätte", value: "c" },
      { text: "würde", value: "d" },
    ],
    correctAnswer: "b", // Sie sagt, sie habe keine Zeit.
  },
  {
    question:
      'Er sagt: "Ich kann nicht kommen." → Er sagt, er ____ nicht kommen.',
    options: [
      { text: "kann", value: "a" },
      { text: "könne", value: "b" },
      { text: "könnte", value: "c" },
      { text: "würde", value: "d" },
    ],
    correctAnswer: "b", // Er sagt, er könne nicht kommen.
  },
  {
    question: 'Sie sagt: "Ich muss arbeiten." → Sie sagt, sie ____ arbeiten.',
    options: [
      { text: "muss", value: "a" },
      { text: "müsse", value: "b" },
      { text: "müsste", value: "c" },
      { text: "würde", value: "d" },
    ],
    correctAnswer: "b", // Sie sagt, sie müsse arbeiten.
  },
  {
    question: 'Er sagt: "Ich werde helfen." → Er sagt, er ____ helfen.',
    options: [
      { text: "wird", value: "a" },
      { text: "werde", value: "b" },
      { text: "würde", value: "c" },
      { text: "wird", value: "d" },
    ],
    correctAnswer: "b", // Er sagt, er werde helfen.
  },
  {
    question:
      'Sie sagt: "Ich bin gestern angekommen." → Sie sagt, sie ____ gestern angekommen.',
    options: [
      { text: "ist", value: "a" },
      { text: "sei", value: "b" },
      { text: "wäre", value: "c" },
      { text: "würde", value: "d" },
    ],
    correctAnswer: "b", // Sie sagt, sie sei gestern angekommen.
  },
  {
    question: 'Er fragt: "Kommst du morgen?" → Er fragt, ob ich morgen ____.',
    options: [
      { text: "komme", value: "a" },
      { text: "käme", value: "b" },
      { text: "kommt", value: "c" },
      { text: "kommen", value: "d" },
    ],
    correctAnswer: "a", // Er fragt, ob ich morgen komme.
  },
  {
    question: 'Sie fragt: "Hast du Zeit?" → Sie fragt, ob ich Zeit ____.',
    options: [
      { text: "habe", value: "a" },
      { text: "hätte", value: "b" },
      { text: "hat", value: "c" },
      { text: "haben", value: "d" },
    ],
    correctAnswer: "a", // Sie fragt, ob ich Zeit habe.
  },
  {
    question:
      'Er sagt: "Ich hatte keine Ahnung." → Er sagt, er ____ keine Ahnung gehabt.',
    options: [
      { text: "hatte", value: "a" },
      { text: "habe", value: "b" },
      { text: "hätte", value: "c" },
      { text: "würde", value: "d" },
    ],
    correctAnswer: "a", // Er sagt, er habe keine Ahnung gehabt.
  },
  {
    question:
      'Sie sagt: "Ich werde dich anrufen." → Sie sagt, sie ____ mich anrufen.',
    options: [
      { text: "wird", value: "a" },
      { text: "werde", value: "b" },
      { text: "würde", value: "c" },
      { text: "werde", value: "d" },
    ],
    correctAnswer: "b", // Sie sagt, sie werde mich anrufen.
  },
  {
    question: "____ muss pünktlich sein.",
    options: [
      { text: "Man", value: "a" },
      { text: "Jemand", value: "b" },
      { text: "Niemand", value: "c" },
      { text: "Etwas", value: "d" },
    ],
    correctAnswer: "a", // Man muss pünktlich sein.
  },
  {
    question: "Gibt es hier ____ zu essen?",
    options: [
      { text: "man", value: "a" },
      { text: "jemand", value: "b" },
      { text: "niemand", value: "c" },
      { text: "etwas", value: "d" },
    ],
    correctAnswer: "d", // Gibt es hier etwas zu essen?
  },
  {
    question: "____ hat angerufen.",
    options: [
      { text: "Man", value: "a" },
      { text: "Jemand", value: "b" },
      { text: "Niemand", value: "c" },
      { text: "Etwas", value: "d" },
    ],
    correctAnswer: "b", // Jemand hat angerufen.
  },
  {
    question: "____ kann mir helfen.",
    options: [
      { text: "Man", value: "a" },
      { text: "Jemand", value: "b" },
      { text: "Niemand", value: "c" },
      { text: "Etwas", value: "d" },
    ],
    correctAnswer: "b", // Jemand kann mir helfen.
  },
  {
    question: "In Deutschland spricht ____ Deutsch.",
    options: [
      { text: "man", value: "a" },
      { text: "jemand", value: "b" },
      { text: "niemand", value: "c" },
      { text: "etwas", value: "d" },
    ],
    correctAnswer: "a", // In Deutschland spricht man Deutsch.
  },
  {
    question: "Ich habe ____ vergessen.",
    options: [
      { text: "man", value: "a" },
      { text: "jemand", value: "b" },
      { text: "niemand", value: "c" },
      { text: "etwas", value: "d" },
    ],
    correctAnswer: "d", // Ich habe etwas vergessen.
  },
  {
    question: "____ hat das Fenster geöffnet.",
    options: [
      { text: "Man", value: "a" },
      { text: "Jemand", value: "b" },
      { text: "Niemand", value: "c" },
      { text: "Etwas", value: "d" },
    ],
    correctAnswer: "b", // Jemand hat das Fenster geöffnet.
  },
  {
    question: "____ versteht mich.",
    options: [
      { text: "Man", value: "a" },
      { text: "Jemand", value: "b" },
      { text: "Niemand", value: "c" },
      { text: "Etwas", value: "d" },
    ],
    correctAnswer: "c", // Niemand versteht mich.
  },
  {
    question: "Kann ____ mir bitte helfen?",
    options: [
      { text: "man", value: "a" },
      { text: "jemand", value: "b" },
      { text: "niemand", value: "c" },
      { text: "etwas", value: "d" },
    ],
    correctAnswer: "b", // Kann jemand mir bitte helfen?
  },
  {
    question: "Ich habe ____ Interessantes gelesen.",
    options: [
      { text: "man", value: "a" },
      { text: "jemand", value: "b" },
      { text: "niemand", value: "c" },
      { text: "etwas", value: "d" },
    ],
    correctAnswer: "d", // Ich habe etwas Interessantes gelesen.
  },
  {
    question: "Er sagt, er ____ krank.",
    options: [
      { text: "ist", value: "a" },
      { text: "sei", value: "b" },
      { text: "wäre", value: "c" },
      { text: "würde", value: "d" },
    ],
    correctAnswer: "b", // Er sagt, er sei krank.
  },
  {
    question: "Sie behauptet, sie ____ keine Zeit.",
    options: [
      { text: "hat", value: "a" },
      { text: "habe", value: "b" },
      { text: "hätte", value: "c" },
      { text: "haben", value: "d" },
    ],
    correctAnswer: "b", // Sie behauptet, sie habe keine Zeit.
  },
  {
    question: "Er sagt, er ____ morgen kommen.",
    options: [
      { text: "wird", value: "a" },
      { text: "werde", value: "b" },
      { text: "würde", value: "c" },
      { text: "würden", value: "d" },
    ],
    correctAnswer: "b", // Er sagt, er werde morgen kommen.
  },
  {
    question: "Sie erklärt, sie ____ die Wahrheit.",
    options: [
      { text: "sagt", value: "a" },
      { text: "sage", value: "b" },
      { text: "sagte", value: "c" },
      { text: "sagen", value: "d" },
    ],
    correctAnswer: "b", // Sie erklärt, sie sage die Wahrheit.
  },
  {
    question: "Er behauptet, er ____ nichts davon gewusst.",
    options: [
      { text: "hat", value: "a" },
      { text: "habe", value: "b" },
      { text: "hatte", value: "c" },
      { text: "hätte", value: "d" },
    ],
    correctAnswer: "b", // Er behauptet, er habe nichts davon gewusst.
  },
  {
    question: "Sie sagt, sie ____ in Berlin.",
    options: [
      { text: "wohnt", value: "a" },
      { text: "wohne", value: "b" },
      { text: "wohnte", value: "c" },
      { text: "würde", value: "d" },
    ],
    correctAnswer: "b", // Sie sagt, sie wohne in Berlin.
  },
  {
    question: "Er meint, das ____ eine gute Idee.",
    options: [
      { text: "ist", value: "a" },
      { text: "sei", value: "b" },
      { text: "wäre", value: "c" },
      { text: "würde", value: "d" },
    ],
    correctAnswer: "b", // Er meint, das sei eine gute Idee.
  },
  {
    question: "Sie sagt, wir ____ recht.",
    options: [
      { text: "haben", value: "a" },
      { text: "haben", value: "b" },
      { text: "hätten", value: "c" },
      { text: "würden", value: "d" },
    ],
    correctAnswer: "a", // Sie sagt, wir haben recht.
  },
  {
    question: "Der Arzt sagt, ich ____ mehr Sport treiben.",
    options: [
      { text: "soll", value: "a" },
      { text: "solle", value: "b" },
      { text: "sollte", value: "c" },
      { text: "würde", value: "d" },
    ],
    correctAnswer: "b", // Der Arzt sagt, ich solle mehr Sport treiben.
  },
  {
    question: "Er behauptet, er ____ uns gestern gesehen.",
    options: [
      { text: "hat", value: "a" },
      { text: "habe", value: "b" },
      { text: "hatte", value: "c" },
      { text: "hätte", value: "d" },
    ],
    correctAnswer: "b", // Er behauptet, er habe uns gestern gesehen.
  },

  {
    question: "Das Fenster ____ geöffnet.",
    options: [
      { text: "wird", value: "a" },
      { text: "ist", value: "b" },
      { text: "wurde", value: "c" },
      { text: "hat", value: "d" },
    ],
    correctAnswer: "b", // Das Fenster ist geöffnet.
  },
  {
    question: "Die Tür ____ geschlossen.",
    options: [
      { text: "wird", value: "a" },
      { text: "ist", value: "b" },
      { text: "wurde", value: "c" },
      { text: "hat", value: "d" },
    ],
    correctAnswer: "c", // Die Tür wurde geschlossen.
  },
  {
    question: "Das Haus ____ gebaut worden.",
    options: [
      { text: "wird", value: "a" },
      { text: "ist", value: "b" },
      { text: "hat", value: "c" },
      { text: "wird", value: "d" },
    ],
    correctAnswer: "b", // Das Haus ist gebaut worden.
  },
  {
    question: "Der Brief ____ geschrieben worden.",
    options: [
      { text: "wird", value: "a" },
      { text: "ist", value: "b" },
      { text: "wurde", value: "c" },
      { text: "hat", value: "d" },
    ],
    correctAnswer: "b", // Der Brief ist geschrieben worden.
  },
  {
    question: "Das Auto ____ repariert ______.",
    options: [
      { text: "wird / werden", value: "a" },
      { text: "ist / worden", value: "b" },
      { text: "wurde / worden", value: "c" },
      { text: "hat / worden", value: "d" },
    ],
    correctAnswer: "b", // Das Auto ist repariert worden.
  },
  {
    question: "Der Text ____ übersetzt.",
    options: [
      { text: "wird", value: "a" },
      { text: "ist", value: "b" },
      { text: "wurde", value: "c" },
      { text: "hat", value: "d" },
    ],
    correctAnswer: "c", // Der Text wurde übersetzt.
  },
  {
    question: "Die Straße ____ gereinigt worden sein.",
    options: [
      { text: "will", value: "a" },
      { text: "soll", value: "b" },
      { text: "darf", value: "c" },
      { text: "kann", value: "d" },
    ],
    correctAnswer: "b", // Die Straße soll gereinigt worden sein.
  },
  {
    question: "Die Tür ____ geöffnet ______.",
    options: [
      { text: "wird / werden", value: "a" },
      { text: "ist / worden", value: "b" },
      { text: "wurde / worden", value: "c" },
      { text: "hat / worden", value: "d" },
    ],
    correctAnswer: "b", // Die Tür ist geöffnet worden.
  },
  {
    question: "Der Müll ____ entsorgt werden.",
    options: [
      { text: "darf", value: "a" },
      { text: "kann", value: "b" },
      { text: "muss", value: "c" },
      { text: "will", value: "d" },
    ],
    correctAnswer: "c", // Der Müll muss entsorgt werden.
  },

  {
    question: "Der ____ Mann ist mein Lehrer.",
    options: [
      { text: "in Berlin wohnende", value: "a" },
      { text: "in Berlin wohnender", value: "b" },
      { text: "in Berlin wohnenden", value: "c" },
      { text: "in Berlin wohnendes", value: "d" },
    ],
    correctAnswer: "b", // Der in Berlin wohnender Mann ist mein Lehrer.
  },
  {
    question: "Das ____ Buch ist interessant.",
    options: [
      { text: "auf dem Tisch liegende", value: "a" },
      { text: "auf dem Tisch liegender", value: "b" },
      { text: "auf dem Tisch liegenden", value: "c" },
      { text: "auf dem Tisch liegendes", value: "d" },
    ],
    correctAnswer: "d", // Das auf dem Tisch liegendes Buch ist interessant.
  },
  {
    question: "Die ____ Frau arbeitet in einer Bank.",
    options: [
      { text: "aus Italien kommende", value: "a" },
      { text: "aus Italien kommender", value: "b" },
      { text: "aus Italien kommenden", value: "c" },
      { text: "aus Italien kommendes", value: "d" },
    ],
    correctAnswer: "a", // Die aus Italien kommende Frau arbeitet in einer Bank.
  },
  {
    question: "Der ____ Student spricht gut Deutsch.",
    options: [
      { text: "in Deutschland studierende", value: "a" },
      { text: "in Deutschland studierender", value: "b" },
      { text: "in Deutschland studierenden", value: "c" },
      { text: "in Deutschland studierendes", value: "d" },
    ],
    correctAnswer: "b", // Der in Deutschland studierender Student spricht gut Deutsch.
  },
  {
    question: "Das ____ Kind weint.",
    options: [
      { text: "im Park spielende", value: "a" },
      { text: "im Park spielender", value: "b" },
      { text: "im Park spielenden", value: "c" },
      { text: "im Park spielendes", value: "d" },
    ],
    correctAnswer: "d", // Das im Park spielendes Kind weint.
  },
  {
    question: "Die ____ Bücher sind sehr teuer.",
    options: [
      { text: "von mir gekaufte", value: "a" },
      { text: "von mir gekaufter", value: "b" },
      { text: "von mir gekauften", value: "c" },
      { text: "von mir gekauftes", value: "d" },
    ],
    correctAnswer: "a", // Die von mir gekaufte Bücher sind sehr teuer.
  },
  {
    question: "Der ____ Brief ist wichtig.",
    options: [
      { text: "gestern angekommene", value: "a" },
      { text: "gestern angekommener", value: "b" },
      { text: "gestern angekommenen", value: "c" },
      { text: "gestern angekommenes", value: "d" },
    ],
    correctAnswer: "b", // Der gestern angekommener Brief ist wichtig.
  },
  {
    question: "Die ____ Studenten haben eine Prüfung.",
    options: [
      { text: "aus dem Ausland kommende", value: "a" },
      { text: "aus dem Ausland kommender", value: "b" },
      { text: "aus dem Ausland kommenden", value: "c" },
      { text: "aus dem Ausland kommendes", value: "d" },
    ],
    correctAnswer: "c", // Die aus dem Ausland kommenden Studenten haben eine Prüfung.
  },
  {
    question: 'Was ist die richtige Nominalisierung von "sprechen"?',
    options: [
      { text: "Das Gespräch", value: "a" },
      { text: "Das Sprechen", value: "b" },
      { text: "Die Sprache", value: "c" },
      { text: "Die Sprechung", value: "d" },
    ],
    correctAnswer: "b", // Das Sprechen ist die direkte Nominalisierung von "sprechen".
  },
  {
    question: "Welche Nominalisierung ist falsch?",
    options: [
      { text: "laufen → das Laufen", value: "a" },
      { text: "singen → das Singen", value: "b" },
      { text: "schlafen → das Schlaf", value: "c" },
      { text: "lesen → das Lesen", value: "d" },
    ],
    correctAnswer: "c", // "Das Schlaf" ist falsch, korrekt wäre "das Schlafen".
  },
  {
    question:
      '"________ von Fremdsprachen ist wichtig für die internationale Kommunikation."',
    options: [
      { text: "Das Lernen", value: "a" },
      { text: "Die Lernheit", value: "b" },
      { text: "Das Gelernten", value: "c" },
      { text: "Die Lernung", value: "d" },
    ],
    correctAnswer: "a", // Das Lernen ist die richtige Nominalisierung.
  },
  {
    question: "Welcher Satz enthält eine Nominalisierung?",
    options: [
      { text: "Er spricht sehr gut Deutsch.", value: "a" },
      { text: "Das Sprechen fällt ihm leicht.", value: "b" },
      { text: "Sie hat gestern viel gesprochen.", value: "c" },
      { text: "Wir werden morgen sprechen.", value: "d" },
    ],
    correctAnswer: "b", // "Das Sprechen" ist eine Nominalisierung.
  },
  {
    question: 'Wie lautet die Nominalisierung von "sich erinnern"?',
    options: [
      { text: "Die Erinnerung", value: "a" },
      { text: "Das Erinnern", value: "b" },
      { text: "Das Gedächtnis", value: "c" },
      { text: "Beide a und b sind richtig", value: "d" },
    ],
    correctAnswer: "d", // Sowohl "Die Erinnerung" als auch "Das Erinnern" sind korrekt.
  },
  {
    question: "Welche Nominalisierung passt nicht in die Reihe?",
    options: [
      { text: "Das Schwimmen", value: "a" },
      { text: "Das Fahren", value: "b" },
      { text: "Die Reise", value: "c" },
      { text: "Das Gehen", value: "d" },
    ],
    correctAnswer: "c", // "Die Reise" ist keine direkte Verb-Nominalisierung.
  },
  {
    question: '"________ regelmäßiger Übungen ist wichtig für die Gesundheit."',
    options: [
      { text: "Das Machen", value: "a" },
      { text: "Die Machung", value: "b" },
      { text: "Das Gemachte", value: "c" },
      { text: "Die Gemachtheit", value: "d" },
    ],
    correctAnswer: "a", // "Das Machen" ist die richtige Nominalisierung von "machen".
  },
  {
    question: "Welche Nominalisierung ist korrekt?",
    options: [
      { text: "diskutieren → die Diskutierung", value: "a" },
      { text: "analysieren → das Analysieren", value: "b" },
      { text: "motivieren → das Motiviert", value: "c" },
      { text: "kontrollieren → die Kontrollierung", value: "d" },
    ],
    correctAnswer: "b", // "Das Analysieren" ist die korrekte Form.
  },
  {
    question:
      'Was ist die richtige Nominalisierung des Satzes "Sie lebt gesund"?',
    options: [
      { text: "Das gesunde Leben", value: "a" },
      { text: "Die Gesundheit des Lebens", value: "b" },
      { text: "Das Leben der Gesundheit", value: "c" },
      { text: "Die gesundliche Lebung", value: "d" },
    ],
    correctAnswer: "a", // "Das gesunde Leben" ist die passende Nominalisierung.
  },
  {
    question: "Welche Präposition wird häufig mit Nominalisierungen verwendet?",
    options: [
      { text: "mit", value: "a" },
      { text: "durch", value: "b" },
      { text: "wegen", value: "c" },
      { text: "Alle oben genannten", value: "d" },
    ],
    correctAnswer: "d", // Alle genannten Präpositionen können mit Nominalisierungen verwendet werden.
  },
  {
    question: '"_____ mehr ich lerne, ______ besser werde ich."',
    options: [
      { text: "So... wie", value: "a" },
      { text: "Je... desto", value: "b" },
      { text: "Zwar... aber", value: "c" },
      { text: "Entweder... oder", value: "d" },
    ],
    correctAnswer: "b", // Je mehr ich lerne, desto besser werde ich.
  },
  {
    question: "Welches Wortpaar ist kein Doppelkonjunktor?",
    options: [
      { text: "sowohl... als auch", value: "a" },
      { text: "entweder... oder", value: "b" },
      { text: "weil... dann", value: "c" },
      { text: "weder... noch", value: "d" },
    ],
    correctAnswer: "c", // "weil... dann" ist kein Doppelkonjunktor.
  },
  {
    question: '"Er ist _____ intelligent, _____ manchmal faul."',
    options: [
      { text: "je... desto", value: "a" },
      { text: "zwar... aber", value: "b" },
      { text: "sowohl... als auch", value: "c" },
      { text: "nicht nur... sondern auch", value: "d" },
    ],
    correctAnswer: "b", // Er ist zwar intelligent, aber manchmal faul.
  },
  {
    question: "Welcher Satz ist grammatikalisch korrekt?",
    options: [
      {
        text: "Je schneller du fährst, desto gefährlicher ist es.",
        value: "a",
      },
      {
        text: "Je schneller du fährst, desto es ist gefährlicher.",
        value: "b",
      },
      {
        text: "Je du schneller fährst, desto gefährlicher ist es.",
        value: "c",
      },
      {
        text: "Je du fährst schneller, desto ist es gefährlicher.",
        value: "d",
      },
    ],
    correctAnswer: "a", // Nur a ist grammatikalisch korrekt.
  },
  {
    question:
      '"Sie spricht _____ gut Deutsch, _____ ihr Akzent ist noch stark."',
    options: [
      { text: "entweder... oder", value: "a" },
      { text: "weder... noch", value: "b" },
      { text: "zwar... aber", value: "c" },
      { text: "je... desto", value: "d" },
    ],
    correctAnswer: "c", // Sie spricht zwar gut Deutsch, aber ihr Akzent ist noch stark.
  },
  {
    question: "Welche Doppelkonjunktion drückt eine Alternative aus?",
    options: [
      { text: "sowohl... als auch", value: "a" },
      { text: "entweder... oder", value: "b" },
      { text: "zwar... aber", value: "c" },
      { text: "nicht nur... sondern auch", value: "d" },
    ],
    correctAnswer: "b", // "entweder... oder" drückt eine Alternative aus.
  },
  {
    question:
      '"_____ kleiner die Wohnung ist, _____ weniger kostet die Miete."',
    options: [
      { text: "Sowohl... als auch", value: "a" },
      { text: "Je... desto", value: "b" },
      { text: "Zwar... aber", value: "c" },
      { text: "Weder... noch", value: "d" },
    ],
    correctAnswer: "b", // Je kleiner die Wohnung ist, desto weniger kostet die Miete.
  },
  {
    question: '"Das Buch ist _____ interessant, _____ auch lehrreich."',
    options: [
      { text: "sowohl... als", value: "a" },
      { text: "entweder... oder", value: "b" },
      { text: "je... desto", value: "c" },
      { text: "zwar... aber", value: "d" },
    ],
    correctAnswer: "c", // Das Buch ist sowohl interessant als auch lehrreich.
  },
  {
    question: "Welcher Satz verwendet die Doppelkonjunktion korrekt?",
    options: [
      { text: "Er hat zwar viel Geld aber keine Zeit.", value: "a" },
      { text: "Er hat zwar viel Geld, aber keine Zeit.", value: "b" },
      {
        text: "Er hat zwar viel Geld, aber er hat keine Zeit.",
        value: "c",
      },
      { text: "Sowohl b als auch c sind korrekt.", value: "d" },
    ],
    correctAnswer: "b", // b ist die korrekte Verwendung mit Komma.
  },
  {
    question: '"Sie isst _____ Fleisch _____ Fisch."',
    options: [
      { text: "entweder... oder", value: "a" },
      { text: "weder... noch", value: "b" },
      { text: "sowohl... als auch", value: "c" },
      { text: "zwar... aber", value: "d" },
    ],
    correctAnswer: "b", // Sie isst weder Fleisch noch Fisch.
  },
  {
    question: "Welche Form ist richtig?",
    options: [
      { text: "Das lesende Buch", value: "a" },
      { text: "Das gelesene Buch", value: "b" },
      { text: "Das lesene Buch", value: "c" },
      { text: "Das Buch, das gelesen ist", value: "d" },
    ],
    correctAnswer: "b", // "Das gelesene Buch" ist die korrekte Partizip II-Form.
  },
  {
    question: '"Die _______ Kinder spielen im Garten."',
    options: [
      { text: "lachend", value: "a" },
      { text: "lachende", value: "b" },
      { text: "gelachte", value: "c" },
      { text: "gelachten", value: "d" },
    ],
    correctAnswer: "b", // Die lachende Kinder spielen im Garten (Partizip I, Nominativ Plural).
  },
  {
    question: "Welches Partizip ist falsch gebildet?",
    options: [
      { text: "Der spielende Junge", value: "a" },
      { text: "Das geöffnete Fenster", value: "b" },
      { text: "Die gekommene Frau", value: "c" },
      { text: "Der verlorene Schlüssel", value: "d" },
    ],
    correctAnswer: "c", // "Die gekommene Frau" ist falsch, korrekt wäre "Die gekommene Frau" mit "gekommen".
  },
  {
    question: "Was ist die richtige Partizipialform?",
    options: [
      { text: "Die in Berlin lebende Familie", value: "a" },
      { text: "Die in Berlin gelebte Familie", value: "b" },
      { text: "Die Familie, die in Berlin lebt", value: "c" },
      { text: "a und c sind beide richtig", value: "d" },
    ],
    correctAnswer: "a", // "Die in Berlin lebende Familie" ist die korrekte Partizipialform.
  },
  {
    question: '"Der _______ Brief liegt auf dem Tisch."',
    options: [
      { text: "schreibend", value: "a" },
      { text: "schreibende", value: "b" },
      { text: "geschriebene", value: "c" },
      { text: "geschrieben", value: "d" },
    ],
    correctAnswer: "d", // Der geschrieben Brief liegt auf dem Tisch (Partizip II, Nominativ).
  },
  {
    question: "Welcher Satz enthält ein Partizip I?",
    options: [
      {
        text: "Das geöffnete Fenster lässt frische Luft herein.",
        value: "a",
      },
      { text: "Der lesende Student sitzt in der Bibliothek.", value: "b" },
      { text: "Die gefundene Brieftasche wurde abgegeben.", value: "c" },
      { text: "Die gekochten Kartoffeln schmecken gut.", value: "d" },
    ],
    correctAnswer: "b", // "Der lesende Student" enthält ein Partizip I.
  },
  {
    question: '"Die _______ Aufgabe war sehr schwierig."',
    options: [
      { text: "zu lösend", value: "a" },
      { text: "lösende", value: "b" },
      { text: "gelöste", value: "c" },
      { text: "lösbare", value: "d" },
    ],
    correctAnswer: "c", // Die gelöste Aufgabe war sehr schwierig (Partizip II).
  },
  {
    question: "Welcher Satz enthält eine falsche Partizipialform?",
    options: [
      { text: "Die tanzenden Paare sahen elegant aus.", value: "a" },
      { text: "Das getrunkene Wasser war kalt.", value: "b" },
      { text: "Die gefahrene Strecke war lang.", value: "c" },
      { text: "Das gestandene Buch steht im Regal.", value: "d" },
    ],
    correctAnswer: "d", // "Das gestandene Buch" ist falsch, korrekt wäre "Das gelesene Buch".
  },
  {
    question: '"Der _______ Zug fährt nach München."',
    options: [
      { text: "fahrende", value: "a" },
      { text: "gefahrene", value: "b" },
      { text: "fahrte", value: "c" },
      { text: "gefahrte", value: "d" },
    ],
    correctAnswer: "a", // Der fahrende Zug fährt nach München (Partizip I).
  },
  {
    question: "Welche Partizipform ist korrekt?",
    options: [
      { text: "Die gestern angekommene Freundin", value: "a" },
      { text: "Die gestern ankommene Freundin", value: "b" },
      { text: "Die gestern kommende Freundin", value: "c" },
      { text: "Die gestern gekommte Freundin", value: "d" },
    ],
    correctAnswer: "a", // "Die gestern angekommene Freundin" ist korrekt (Partizip II).
  },
  {
    question:
      '"Er interessiert sich nicht _______, was andere von ihm denken."',
    options: [
      { text: "davon", value: "a" },
      { text: "dafür", value: "b" },
      { text: "darüber", value: "c" },
      { text: "daran", value: "d" },
    ],
    correctAnswer: "c", // Er interessiert sich nicht darüber, was andere denken.
  },
  {
    question: '"Er hat sich _______ gefreut, dass du gekommen bist."',
    options: [
      { text: "darüber", value: "a" },
      { text: "dazu", value: "b" },
      { text: "daran", value: "c" },
      { text: "davon", value: "d" },
    ],
    correctAnswer: "a", // Er hat sich darüber gefreut, dass du gekommen bist.
  },
  {
    question: '"Ich träume _______, eines Tages nach Japan zu reisen."',
    options: [
      { text: "dafür", value: "a" },
      { text: "darüber", value: "b" },
      { text: "davon", value: "c" },
      { text: "damit", value: "d" },
    ],
    correctAnswer: "c", // Ich träume davon, eines Tages nach Japan zu reisen.
  },
  {
    question: "Welches Pronominaladverb ist falsch?",
    options: [
      { text: "für + das = dafür", value: "a" },
      { text: "mit + das = damit", value: "b" },
      { text: "von + das = davon", value: "c" },
      { text: "über + dem = darüber", value: "d" },
    ],
    correctAnswer: "d", // "über + dem = darüber" ist falsch, korrekt wäre "über + das = darüber".
  },
  {
    question: '"Ich habe lange _______ nachgedacht."',
    options: [
      { text: "daran", value: "a" },
      { text: "davon", value: "b" },
      { text: "darüber", value: "c" },
      { text: "dazu", value: "d" },
    ],
    correctAnswer: "c", // Ich habe lange darüber nachgedacht.
  },
  {
    question: "Welcher Satz verwendet das Pronominaladverb korrekt?",
    options: [
      {
        text: "Ich freue mich auf deinen Besuch, ich bereite mich darauf vor.",
        value: "a",
      },
      {
        text: "Ich freue mich auf deinen Besuch, ich bereite mich dafür vor.",
        value: "b",
      },
      {
        text: "Ich freue mich auf deinen Besuch, ich bereite mich daran vor.",
        value: "c",
      },
      {
        text: "Ich freue mich auf deinen Besuch, ich bereite mich dabei vor.",
        value: "d",
      },
    ],
    correctAnswer: "a", // "darauf" ist hier korrekt.
  },
  {
    question:
      '"Er hat mir ein Geschenk gegeben. Ich habe mich sehr _______ gefreut."',
    options: [
      { text: "davon", value: "a" },
      { text: "darüber", value: "b" },
      { text: "daran", value: "c" },
      { text: "dafür", value: "d" },
    ],
    correctAnswer: "b", // Ich habe mich sehr darüber gefreut.
  },
  {
    question: '"Wir haben viel Geld ausgegeben. Wir müssen _______ sparen."',
    options: [
      { text: "dafür", value: "a" },
      { text: "damit", value: "b" },
      { text: "daran", value: "c" },
      { text: "davon", value: "d" },
    ],
    correctAnswer: "a", // Wir müssen dafür sparen.
  },
  {
    question: '"Er hat viele Fehler gemacht. Er hat _______ gelernt."',
    options: [
      { text: "daran", value: "a" },
      { text: "davon", value: "b" },
      { text: "daraus", value: "c" },
      { text: "dazu", value: "d" },
    ],
    correctAnswer: "c", // Er hat daraus gelernt.
  },
  {
    question: "Welcher Satz ist korrekt?",
    options: [
      {
        text: "Worauf wartest du? - Ich warte darauf, dass der Bus kommt.",
        value: "a",
      },
      {
        text: "Wofür wartest du? - Ich warte dafür, dass der Bus kommt.",
        value: "b",
      },
      {
        text: "Worauf wartest du? - Ich warte dafür, dass der Bus kommt.",
        value: "c",
      },
      {
        text: "Wofür wartest du? - Ich warte darauf, dass der Bus kommt.",
        value: "d",
      },
    ],
    correctAnswer: "a", // "worauf" und "darauf" sind hier korrekt.
  },

  {
    question: '"Ich warte _______ den Bus."',
    options: [
      { text: "für", value: "a" },
      { text: "auf", value: "b" },
      { text: "zu", value: "c" },
      { text: "an", value: "d" },
    ],
    correctAnswer: "b", // Ich warte auf den Bus.
  },
  {
    question: "Welche Verb-Präposition-Kombination ist falsch?",
    options: [
      { text: "sich freuen auf", value: "a" },
      { text: "sich kümmern für", value: "b" },
      { text: "denken an", value: "c" },
      { text: "warten auf", value: "d" },
    ],
    correctAnswer: "b", // "sich kümmern für" ist falsch, korrekt ist "sich kümmern um".
  },
  {
    question: '"Er hat sich _______ das Geschenk gefreut."',
    options: [
      { text: "für", value: "a" },
      { text: "auf", value: "b" },
      { text: "über", value: "c" },
      { text: "an", value: "d" },
    ],
    correctAnswer: "c", // Er hat sich über das Geschenk gefreut.
  },
  {
    question: 'Welche Präposition passt zum Verb "sich interessieren"?',
    options: [
      { text: "auf", value: "a" },
      { text: "an", value: "b" },
      { text: "für", value: "c" },
      { text: "über", value: "d" },
    ],
    correctAnswer: "c", // Sich interessieren für.
  },
  {
    question: '"Sie hat _______ ihre Prüfung bestanden."',
    options: [
      { text: "ohne", value: "a" },
      { text: "mit", value: "b" },
      { text: "bei", value: "c" },
      { text: "durch", value: "d" },
    ],
    correctAnswer: "b", // Sie hat mit ihre Prüfung bestanden (Kontext: mit Erfolg).
  },
  {
    question: 'Welche Präposition passt zum Verb "sich entscheiden"?',
    options: [
      { text: "zu", value: "a" },
      { text: "für", value: "b" },
      { text: "auf", value: "c" },
      { text: "mit", value: "d" },
    ],
    correctAnswer: "b", // Sich entscheiden für.
  },
  {
    question: '"Ich träume _______ einer besseren Zukunft."',
    options: [
      { text: "von", value: "a" },
      { text: "für", value: "b" },
      { text: "über", value: "c" },
      { text: "an", value: "d" },
    ],
    correctAnswer: "a", // Ich träume von einer besseren Zukunft.
  },
  {
    question: "Welche Verb-Präposition-Kombination ist richtig?",
    options: [
      { text: "sich erinnern auf", value: "a" },
      { text: "sich erinnern für", value: "b" },
      { text: "sich erinnern an", value: "c" },
      { text: "sich erinnern über", value: "d" },
    ],
    correctAnswer: "c", // Sich erinnern an ist korrekt.
  },
  {
    question: '"Sie hat sich _______ ihren Freund verliebt."',
    options: [
      { text: "zu", value: "a" },
      { text: "für", value: "b" },
      { text: "in", value: "c" },
      { text: "mit", value: "d" },
    ],
    correctAnswer: "c", // Sie hat sich in ihren Freund verliebt.
  },
  {
    question: 'Welche Präposition passt zum Verb "sich bewerben"?',
    options: [
      { text: "um", value: "a" },
      { text: "für", value: "b" },
      { text: "bei", value: "c" },
      { text: "an", value: "d" },
    ],
    correctAnswer: "a", // Sich bewerben um.
  },
  {
    question: "Welcher Satz hat die richtige Wortstellung?",
    options: [
      { text: "Obwohl es regnet, ich gehe spazieren.", value: "a" },
      { text: "Obwohl es regnet, gehe ich spazieren.", value: "b" },
      { text: "Obwohl regnet es, ich gehe spazieren.", value: "c" },
      { text: "Obwohl regnet es, gehe ich spazieren.", value: "d" },
    ],
    correctAnswer: "b", // Nach Nebensatz folgt Verb an zweiter Stelle im Hauptsatz.
  },
  {
    question: '"Nachdem ich meine Hausaufgaben gemacht hatte, _______."',
    options: [
      { text: "ich ging ins Kino", value: "a" },
      { text: "ging ich ins Kino", value: "b" },
      { text: "ich ins Kino ging", value: "c" },
      { text: "ins Kino ging ich", value: "d" },
    ],
    correctAnswer: "b", // Verb an zweiter Stelle im Hauptsatz.
  },
  {
    question: "Welche Konjunktion leitet keinen Nebensatz ein?",
    options: [
      { text: "weil", value: "a" },
      { text: "obwohl", value: "b" },
      { text: "und", value: "c" },
      { text: "wenn", value: "d" },
    ],
    correctAnswer: "c", // "und" ist eine koordinierende Konjunktion.
  },
  {
    question: "Welche Wortstellung ist im Nebensatz korrekt?",
    options: [
      { text: "Ich weiß, dass er morgen kommt.", value: "a" },
      { text: "Ich weiß, dass er kommt morgen.", value: "b" },
      { text: "Ich weiß, dass morgen er kommt.", value: "c" },
      { text: "Ich weiß, morgen dass er kommt.", value: "d" },
    ],
    correctAnswer: "a", // Verb am Ende im Nebensatz.
  },
  {
    question: '"_______ er krank war, kam er trotzdem zur Arbeit."',
    options: [
      { text: "Trotzdem", value: "a" },
      { text: "Obwohl", value: "b" },
      { text: "Weil", value: "c" },
      { text: "Wenn", value: "d" },
    ],
    correctAnswer: "b", // Obwohl er krank war, kam er trotzdem zur Arbeit.
  },
  {
    question: "Welcher Satz hat eine korrekte komplexe Struktur?",
    options: [
      { text: "Wenn du kommst, wir gehen ins Kino.", value: "a" },
      { text: "Da es regnet, wir bleiben zu Hause.", value: "b" },
      {
        text: "Als ich jung war, habe ich viel Sport getrieben.",
        value: "c",
      },
      { text: "Obwohl es teuer ist, ich kaufe es.", value: "d" },
    ],
    correctAnswer: "c", // Nur c hat die richtige Wortstellung.
  },
  {
    question: '"_______ ich Zeit habe, besuche ich dich."',
    options: [
      { text: "Als", value: "a" },
      { text: "Weil", value: "b" },
      { text: "Wenn", value: "c" },
      { text: "Ob", value: "d" },
    ],
    correctAnswer: "c", // Wenn ich Zeit habe, besuche ich dich.
  },
  {
    question: "Welcher Satz ist korrekt?",
    options: [
      { text: "Sie sagte, dass sie kommt morgen.", value: "a" },
      { text: "Sie sagte, dass sie morgen kommt.", value: "b" },
      { text: "Sie sagte, dass morgen sie kommt.", value: "c" },
      { text: "Sie sagte, morgen dass sie kommt.", value: "d" },
    ],
    correctAnswer: "b", // Verb am Ende im Nebensatz.
  },
  {
    question: '"Er fragte mich, _______ ich ihm helfen könnte."',
    options: [
      { text: "dass", value: "a" },
      { text: "wenn", value: "b" },
      { text: "ob", value: "c" },
      { text: "weil", value: "d" },
    ],
    correctAnswer: "c", // Er fragte mich, ob ich ihm helfen könnte.
  },
  {
    question:
      "Welche Wortstellung ist im Hauptsatz nach einem Nebensatz korrekt?",
    options: [
      { text: "Weil es regnet, ich bleibe zu Hause.", value: "a" },
      { text: "Weil es regnet, bleibe ich zu Hause.", value: "b" },
      { text: "Weil es regnet, ich zu Hause bleibe.", value: "c" },
      { text: "Weil regnet es, bleibe ich zu Hause.", value: "d" },
    ],
    correctAnswer: "b", // Verb an zweiter Stelle im Hauptsatz.
  },
  {
    question: '"_______ des Flusses liegt ein kleines Dorf."',
    options: [
      { text: "Jenseits", value: "a" },
      { text: "Anstatt", value: "b" },
      { text: "Während", value: "c" },
      { text: "Trotz", value: "d" },
    ],
    correctAnswer: "a", // Jenseits des Flusses liegt ein kleines Dorf.
  },
  {
    question: "Welche Präposition regiert nicht den Genitiv?",
    options: [
      { text: "wegen", value: "a" },
      { text: "trotz", value: "b" },
      { text: "seit", value: "c" },
      { text: "angesichts", value: "d" },
    ],
    correctAnswer: "c", // "seit" regiert den Dativ.
  },
  {
    question: '"Er kam _______ des starken Regens."',
    options: [
      { text: "wegen", value: "a" },
      { text: "während", value: "b" },
      { text: "anstatt", value: "c" },
      { text: "neben", value: "d" },
    ],
    correctAnswer: "a", // Er kam wegen des starken Regens.
  },
  {
    question: "Welcher Satz verwendet die Genitivpräposition korrekt?",
    options: [
      {
        text: "Aufgrund dem schlechten Wetter blieben wir zu Hause.",
        value: "a",
      },
      { text: "Trotz dem Regen gingen wir spazieren.", value: "b" },
      { text: "Wegen des Unwetters fiel der Strom aus.", value: "c" },
      { text: "Während dem Konzert schlief er ein.", value: "d" },
    ],
    correctAnswer: "c", // "Wegen des Unwetters" ist korrekt.
  },
  {
    question: '"Sie kam _______ ihrer Schwester zum Fest."',
    options: [
      { text: "statt", value: "a" },
      { text: "anstelle", value: "b" },
      { text: "anstatt", value: "c" },
      { text: "Alle oben genannten sind richtig", value: "d" },
    ],
    correctAnswer: "b", // Sie kam anstelle ihrer Schwester zum Fest.
  },
  {
    question:
      "Welche Präposition kann sowohl mit Genitiv als auch mit Dativ verwendet werden?",
    options: [
      { text: "während", value: "a" },
      { text: "jenseits", value: "b" },
      { text: "außerhalb", value: "c" },
      { text: "angesichts", value: "d" },
    ],
    correctAnswer: "a", // "während" kann mit Genitiv oder Dativ stehen.
  },
  {
    question: '"_______ seiner Bemühungen blieb er erfolglos."',
    options: [
      { text: "Trotz", value: "a" },
      { text: "Anstatt", value: "b" },
      { text: "Während", value: "c" },
      { text: "Außer", value: "d" },
    ],
    correctAnswer: "a", // Trotz seiner Bemühungen blieb er erfolglos.
  },
  {
    question: "Welcher Satz ist grammatikalisch korrekt?",
    options: [
      {
        text: "Innerhalb von zwei Tagen muss die Arbeit fertig sein.",
        value: "a",
      },
      {
        text: "Innerhalb zwei Tagen muss die Arbeit fertig sein.",
        value: "b",
      },
      {
        text: "Innerhalb der zwei Tage muss die Arbeit fertig sein.",
        value: "c",
      },
      {
        text: "Innerhalb zwei Tage muss die Arbeit fertig sein.",
        value: "d",
      },
    ],
    correctAnswer: "c", // "Innerhalb der zwei Tage" ist korrekt (Genitiv).
  },
  {
    question: '"_______ des Vortrags durfte nicht gesprochen werden."',
    options: [
      { text: "Während", value: "a" },
      { text: "Wegen", value: "b" },
      { text: "Anstatt", value: "c" },
      { text: "Statt", value: "d" },
    ],
    correctAnswer: "a", // Während des Vortrags durfte nicht gesprochen werden.
  },
  {
    question: "Welche Präposition erfordert den Genitiv?",
    options: [
      { text: "mit", value: "a" },
      { text: "für", value: "b" },
      { text: "ohne", value: "c" },
      { text: "infolge", value: "d" },
    ],
    correctAnswer: "d", // "infolge" erfordert den Genitiv.
  },
  {
    question: "Welcher Satz enthält keine Modalpartikel?",
    options: [
      { text: "Komm doch mal vorbei!", value: "a" },
      { text: "Das ist ja interessant!", value: "b" },
      { text: "Ich gehe jetzt nach Hause.", value: "c" },
      { text: "Das ist halt so.", value: "d" },
    ],
    correctAnswer: "c", // Keine Modalpartikel in diesem Satz.
  },
  {
    question: "Welche Modalpartikel drückt Ungeduld aus?",
    options: [
      { text: "ja", value: "a" },
      { text: "doch", value: "b" },
      { text: "mal", value: "c" },
      { text: "eben", value: "d" },
    ],
    correctAnswer: "c", // "mal" kann Ungeduld ausdrücken (z. B. "Komm mal her!").
  },
  {
    question: '"Das habe ich dir _______ schon tausendmal gesagt!"',
    options: [
      { text: "ja", value: "a" },
      { text: "halt", value: "b" },
      { text: "doch", value: "c" },
      { text: "eben", value: "d" },
    ],
    correctAnswer: "c", // Das habe ich dir doch schon tausendmal gesagt!
  },
  {
    question: "Welche Modalpartikel wird oft in Aufforderungen verwendet?",
    options: [
      { text: "mal", value: "a" },
      { text: "ja", value: "b" },
      { text: "halt", value: "c" },
      { text: "eben", value: "d" },
    ],
    correctAnswer: "a", // "mal" wird oft in Aufforderungen verwendet (z. B. "Hilf mir mal!").
  },
  {
    question: '"Das ist _______ eine schwierige Frage."',
    options: [
      { text: "schon", value: "a" },
      { text: "ja", value: "b" },
      { text: "denn", value: "c" },
      { text: "Alle oben genannten können passen", value: "d" },
    ],
    correctAnswer: "b", // Das ist ja eine schwierige Frage (Überraschung).
  },
  {
    question: "Welcher Satz verwendet die Modalpartikel falsch?",
    options: [
      { text: "Kannst du mir mal helfen?", value: "a" },
      { text: "Das ist doch nicht dein Ernst!", value: "b" },
      { text: "Ja komm her!", value: "c" },
      { text: "Das war halt meine Entscheidung.", value: "d" },
    ],
    correctAnswer: "c", // "Ja" ist hier unpassend als Modalpartikel in einer Aufforderung.
  },
  {
    question: '"Mach _______ die Tür zu!"',
    options: [
      { text: "doch", value: "a" },
      { text: "ja", value: "b" },
      { text: "mal", value: "c" },
      { text: "Alle oben genannten können passen", value: "d" },
    ],
    correctAnswer: "c", // Mach mal die Tür zu! (Aufforderung).
  },
  {
    question: "Welche Modalpartikel drückt Resignation aus?",
    options: [
      { text: "ja", value: "a" },
      { text: "doch", value: "b" },
      { text: "halt", value: "c" },
      { text: "mal", value: "d" },
    ],
    correctAnswer: "c", // "halt" drückt oft Resignation aus (z. B. "Das ist halt so").
  },
  {
    question: '"Das ist _______ klar, dass er nicht kommt."',
    options: [
      { text: "ja", value: "a" },
      { text: "doch", value: "b" },
      { text: "mal", value: "c" },
      { text: "wohl", value: "d" },
    ],
    correctAnswer: "d", // Das ist wohl klar, dass er nicht kommt (Vermutung).
  },
  {
    question: "Welche Aussage über Modalpartikeln ist richtig?",
    options: [
      { text: "Sie verändern die Grundbedeutung des Satzes.", value: "a" },
      { text: "Sie können nicht kombiniert werden.", value: "b" },
      { text: "Sie färben die Aussage emotional.", value: "c" },
      {
        text: "Sie können nur in Fragesätzen verwendet werden.",
        value: "d",
      },
    ],
    correctAnswer: "c", // Modalpartikeln färben die Aussage emotional.
  },

  {
    question: "Welche Form ist Konjunktiv I?",
    options: [
      { text: "er käme", value: "a" },
      { text: "er sei", value: "b" },
      { text: "er wäre", value: "c" },
      { text: "er hätte", value: "d" },
    ],
    correctAnswer: "b", // "er sei" ist Konjunktiv I.
  },
  {
    question: "\"Er sagte: 'Ich bin krank.' → Er sagte, er _______ krank.\"",
    options: [
      { text: "wäre", value: "a" },
      { text: "ist", value: "b" },
      { text: "sei", value: "c" },
      { text: "war", value: "d" },
    ],
    correctAnswer: "c", // Er sagte, er sei krank (Konjunktiv I für indirekte Rede).
  },
  {
    question: "Welcher Satz verwendet den Konjunktiv II korrekt?",
    options: [
      { text: "Wenn ich Zeit hätte, käme ich mit.", value: "a" },
      { text: "Wenn ich Zeit hätte, komme ich mit.", value: "b" },
      { text: "Wenn ich Zeit habe, käme ich mit.", value: "c" },
      { text: "Wenn ich Zeit hätte, ich käme mit.", value: "d" },
    ],
    correctAnswer: "a", // Wenn ich Zeit hätte, käme ich mit (Konjunktiv II).
  },
  {
    question: '"Ich wünschte, ich _______ mehr Zeit."',
    options: [
      { text: "habe", value: "a" },
      { text: "hätte", value: "b" },
      { text: "haben", value: "c" },
      { text: "hatte", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question: "Welche Form wird in der indirekten Rede verwendet?",
    options: [
      { text: "Nur Konjunktiv I", value: "a" },
      { text: "Nur Konjunktiv II", value: "b" },
      {
        text: "Zuerst Konjunktiv I, wenn nicht eindeutig, dann Konjunktiv II",
        value: "c",
      },
      {
        text: "Je nach Bedeutung entweder Konjunktiv I oder II",
        value: "d",
      },
    ],
    correctAnswer: "c", // Indirekte Rede verwendet zuerst Konjunktiv I, bei Mehrdeutigkeit Konjunktiv II.
  },
  {
    question: '"Er tat so, als ob er mich nicht _______."',
    options: [
      { text: "kennt", value: "a" },
      { text: "kenne", value: "b" },
      { text: "kannte", value: "c" },
      { text: "kennen würde", value: "d" },
    ],
    correctAnswer: "c", // Er tat so, als ob er mich nicht kennte (Konjunktiv II).
  },
  {
    question: "Welcher Satz ist im Konjunktiv I?",
    options: [
      { text: "Sie sagt, sie kommt morgen.", value: "a" },
      { text: "Sie sagt, sie käme morgen.", value: "b" },
      { text: "Sie sagt, sie komme morgen.", value: "c" },
      { text: "Sie sagt, sie würde morgen kommen.", value: "d" },
    ],
    correctAnswer: "c", // Sie sagt, sie komme morgen (Konjunktiv I).
  },
  {
    question: '"Wenn ich du _______, würde ich das nicht tun."',
    options: [
      { text: "wäre", value: "a" },
      { text: "bin", value: "b" },
      { text: "sei", value: "c" },
      { text: "gewesen wäre", value: "d" },
    ],
    correctAnswer: "a", // Wenn ich du wäre, würde ich das nicht tun (Konjunktiv II).
  },
  {
    question: "Welcher Konjunktiv wird bei höflichen Anfragen verwendet?",
    options: [
      { text: "Konjunktiv I", value: "a" },
      { text: "Konjunktiv II", value: "b" },
      { text: "Beide können verwendet werden", value: "c" },
      { text: "Keiner von beiden", value: "d" },
    ],
    correctAnswer: "b", // Konjunktiv II wird für höfliche Anfragen genutzt (z. B. "Könnten Sie...?").
  },
  {
    question: '"Es ist wichtig, dass er pünktlich _______."',
    options: [
      { text: "ist", value: "a" },
      { text: "sei", value: "b" },
      { text: "wäre", value: "c" },
      { text: "sein würde", value: "d" },
    ],
    correctAnswer: "b", // Es ist wichtig, dass er pünktlich sei (Konjunktiv I).
  },
  {
    question: '"Er ging ins Bett, _______ seine Zähne zu putzen."',
    options: [
      { text: "ohne", value: "a" },
      { text: "statt", value: "b" },
      { text: "um", value: "c" },
      { text: "anstatt", value: "d" },
    ],
    correctAnswer: "a", // Er ging ins Bett, ohne seine Zähne zu putzen.
  },
  {
    question: "Welcher Satz ist falsch?",
    options: [
      { text: "Er ging, ohne ein Wort zu sagen.", value: "a" },
      { text: "Anstatt zu arbeiten, sah er fern.", value: "b" },
      { text: "Um pünktlich zu sein, nahm er ein Taxi.", value: "c" },
      { text: "Er ging, ohne dass er ein Wort sagte.", value: "d" },
    ],
    correctAnswer: "d", // "ohne dass" ist keine Infinitivkonstruktion, sondern ein Nebensatz.
  },
  {
    question: '"_______ zu schlafen, lernte sie die ganze Nacht."',
    options: [
      { text: "Ohne", value: "a" },
      { text: "Statt", value: "b" },
      { text: "Um", value: "c" },
      { text: "Anstatt", value: "d" },
    ],
    correctAnswer: "d", // Anstatt zu schlafen, lernte sie die ganze Nacht.
  },
  {
    question: "Welche Infinitivkonstruktion drückt einen Zweck aus?",
    options: [
      { text: "ohne ... zu", value: "a" },
      { text: "anstatt ... zu", value: "b" },
      { text: "um ... zu", value: "c" },
      { text: "statt ... zu", value: "d" },
    ],
    correctAnswer: "c", // "um ... zu" drückt einen Zweck aus.
  },
  {
    question: '"Ich lerne Deutsch, _______ in Deutschland zu studieren."',
    options: [
      { text: "ohne", value: "a" },
      { text: "statt", value: "b" },
      { text: "um", value: "c" },
      { text: "anstatt", value: "d" },
    ],
    correctAnswer: "c", // Ich lerne Deutsch, um in Deutschland zu studieren.
  },
  {
    question: "Welcher Satz verwendet die Infinitivkonstruktion korrekt?",
    options: [
      { text: "Er ging weg, statt zu bleiben.", value: "a" },
      { text: "Er ging weg, statt dass er bleibt.", value: "b" },
      { text: "Er ging weg, statt er bleibt.", value: "c" },
      { text: "Er ging weg, statt zu bleiben er.", value: "d" },
    ],
    correctAnswer: "a", // Er ging weg, statt zu bleiben ist korrekt.
  },
  {
    question: '"Sie verließ das Haus, _______ die Tür abzuschließen."',
    options: [
      { text: "ohne", value: "a" },
      { text: "anstatt", value: "b" },
      { text: "statt", value: "c" },
      { text: "um", value: "d" },
    ],
    correctAnswer: "a", // Sie verließ das Haus, ohne die Tür abzuschließen.
  },
  {
    question: "Welcher Satz hat eine korrekte Infinitivkonstruktion?",
    options: [
      { text: "Er rennt, statt zu gehen.", value: "a" },
      { text: "Er rennt, statt dass er geht.", value: "b" },
      { text: "Er rennt, anstatt geht.", value: "c" },
      { text: "Er rennt, ohne geht.", value: "d" },
    ],
    correctAnswer: "a", // Er rennt, statt zu gehen ist korrekt.
  },
  {
    question: '"_______ zu klagen, solltest du handeln."',
    options: [
      { text: "Ohne", value: "a" },
      { text: "Statt", value: "b" },
      { text: "Um", value: "c" },
      { text: "Für", value: "d" },
    ],
    correctAnswer: "b", // Statt zu klagen, solltest du handeln.
  },
  {
    question: "Welche Aussage über Infinitivkonstruktionen ist richtig?",
    options: [
      { text: "Sie ersetzen immer einen Nebensatz.", value: "a" },
      { text: "Sie können nur am Satzanfang stehen.", value: "b" },
      {
        text: "Das Subjekt muss in beiden Teilen identisch sein.",
        value: "c",
      },
      { text: "Sie können nicht mit 'dass' ersetzt werden.", value: "d" },
    ],
    correctAnswer: "c", // Das Subjekt muss in beiden Teilen identisch sein.
  },
  {
    question: "Welcher Satz enthält eine stilistische Verkürzung?",
    options: [
      { text: "Nachdem er gegessen hatte, ging er schlafen.", value: "a" },
      { text: "Nach dem Essen ging er schlafen.", value: "b" },
      { text: "Er ging schlafen, nachdem er gegessen hatte.", value: "c" },
      { text: "Er aß und ging dann schlafen.", value: "d" },
    ],
    correctAnswer: "b", // "Nach dem Essen" ist eine stilistische Verkürzung von "Nachdem er gegessen hatte".
  },
  {
    question: "Welcher Satz hat eine Inversion?",
    options: [
      { text: "Ich gehe heute ins Kino.", value: "a" },
      { text: "Heute gehe ich ins Kino.", value: "b" },
      { text: "Ins Kino gehe ich heute.", value: "c" },
      { text: "b und c sind richtig.", value: "d" },
    ],
    correctAnswer: "d", // Sowohl b als auch c enthalten eine Inversion.
  },
  {
    question: "Welche Verkürzung ist stilistisch falsch?",
    options: [
      {
        text: "Am Fenster stehend, beobachtete er die Straße.",
        value: "a",
      },
      { text: "Im Park angekommen, suchten wir einen Platz.", value: "b" },
      {
        text: "Nach Hause gekommen, er machte sich Abendessen.",
        value: "c",
      },
      { text: "Von der Reise erschöpft, legte sie sich hin.", value: "d" },
    ],
    correctAnswer: "c", // "Nach Hause gekommen, er machte" ist stilistisch falsch; das Subjekt sollte nicht wiederholt werden.
  },
  {
    question: "Welcher Satz hat eine besondere stilistische Form?",
    options: [
      { text: "Der Mann, der dort steht, ist mein Vater.", value: "a" },
      { text: "Dort steht der Mann, der mein Vater ist.", value: "b" },
      { text: "Dort steht mein Vater.", value: "c" },
      { text: "Mein Vater steht dort.", value: "d" },
    ],
    correctAnswer: "b", // "Dort steht der Mann, der mein Vater ist" hat eine Inversion und einen Relativsatz.
  },
  {
    question: '"_______, verließ er das Haus."',
    options: [
      { text: "Verärgert über die Nachricht", value: "a" },
      { text: "Er war verärgert über die Nachricht", value: "b" },
      { text: "Weil er über die Nachricht verärgert war", value: "c" },
      { text: "Da er über die Nachricht verärgert war", value: "d" },
    ],
    correctAnswer: "a", // "Verärgert über die Nachricht" ist eine stilistisch anspruchsvolle Partizipialkonstruktion.
  },
  {
    question: "Welcher Satz hat eine komplexe stilistische Struktur?",
    options: [
      { text: "Er liest ein Buch.", value: "a" },
      { text: "Ein Buch lesend, vergaß er die Zeit.", value: "b" },
      { text: "Er vergaß die Zeit, während er ein Buch las.", value: "c" },
      { text: "Während er ein Buch las, vergaß er die Zeit.", value: "d" },
    ],
    correctAnswer: "b", // "Ein Buch lesend, vergaß er die Zeit" ist eine komplexe Verkürzung mit Partizip I.
  },
  {
    question: "Welche Satzverkürzung ist korrekt?",
    options: [
      { text: "Obwohl müde, ging sie zur Arbeit.", value: "a" },
      { text: "Obwohl sie müde war, ging sie zur Arbeit.", value: "b" },
      { text: "Obwohl müde war, ging sie zur Arbeit.", value: "c" },
      { text: "Müde, ging sie zur Arbeit.", value: "d" },
    ],
    correctAnswer: "a", // "Obwohl müde" ist eine korrekte stilistische Verkürzung.
  },
  {
    question: "Welcher Satz hat eine stilistisch anspruchsvolle Inversion?",
    options: [
      { text: "Gestern habe ich ein Buch gekauft.", value: "a" },
      { text: "Ein Buch habe ich gestern gekauft.", value: "b" },
      { text: "Gekauft habe ich gestern ein Buch.", value: "c" },
      { text: "Ich habe gestern ein Buch gekauft.", value: "d" },
    ],
    correctAnswer: "c", // "Gekauft habe ich gestern ein Buch" ist eine starke und anspruchsvolle Inversion.
  },
  {
    question: "Welche Aussage zur stilistischen Grammatik ist richtig?",
    options: [
      {
        text: "Inversionen sind in der deutschen Sprache nicht erlaubt.",
        value: "a",
      },
      {
        text: "Satzverkürzungen werden nur in informellen Texten verwendet.",
        value: "b",
      },
      {
        text: "Stilistisch anspruchsvolle Strukturen sind typisch für literarische Texte.",
        value: "c",
      },
      {
        text: "Man sollte stilistische Variationen in formalen Texten vermeiden.",
        value: "d",
      },
    ],
    correctAnswer: "c", // Stilistisch anspruchsvolle Strukturen sind typisch für literarische Texte.
  },
  {
    question: "Welche Verkürzung ist stilistisch elegant?",
    options: [
      {
        text: "Kaum hatte er das Haus verlassen, als es zu regnen begann.",
        value: "a",
      },
      {
        text: "Er hatte kaum das Haus verlassen, als es zu regnen begann.",
        value: "b",
      },
      {
        text: "Als er kaum das Haus verlassen hatte, begann es zu regnen.",
        value: "c",
      },
      {
        text: "Es begann zu regnen, als er kaum das Haus verlassen hatte.",
        value: "d",
      },
    ],
    correctAnswer: "a", // "Kaum hatte er..." ist eine elegante und stilistische Verkürzung.
  },

  {
    question: '"_______, desto besser."',
    options: [
      { text: "Je schneller", value: "a" },
      { text: "Wenn schneller", value: "b" },
      { text: "So schneller", value: "c" },
      { text: "Schneller", value: "d" },
    ],
    correctAnswer: "a", // Je schneller, desto besser ist die korrekte elliptische Form.
  },
  {
    question: "Welcher Satz ist eine Ellipse?",
    options: [
      { text: "Ich komme morgen.", value: "a" },
      { text: "Morgen komme ich.", value: "b" },
      { text: "Komme morgen.", value: "c" },
      { text: "Ich komme.", value: "d" },
    ],
    correctAnswer: "c", // "Komme morgen" ist eine Ellipse (Subjekt weggelassen).
  },
  {
    question: '"Gestern im Kino? - Ja, _______."',
    options: [
      { text: "ich war", value: "a" },
      { text: "war ich", value: "b" },
      { text: "ich bin gewesen", value: "c" },
      { text: "Keine Ergänzung nötig", value: "d" },
    ],
    correctAnswer: "d", // "Ja" ist bereits eine elliptische Antwort.
  },
  {
    question: "Welcher Satz ist keine Ellipse?",
    options: [
      { text: "Schönes Wetter heute!", value: "a" },
      { text: "Bis morgen!", value: "b" },
      { text: "Er kommt heute nicht.", value: "c" },
      { text: "Wohin?", value: "d" },
    ],
    correctAnswer: "c", // "Er kommt heute nicht" ist ein vollständiger Satz.
  },
  {
    question: '"Noch ein Kaffee?" - "_______."',
    options: [
      { text: "Ja, bitte", value: "a" },
      { text: "Ich möchte einen", value: "b" },
      { text: "Ich will noch einen Kaffee", value: "c" },
      { text: "Ja, ich möchte noch einen Kaffee", value: "d" },
    ],
    correctAnswer: "a", // "Ja, bitte" ist eine elliptische Antwort.
  },
  {
    question: "Welche Antwort ist elliptisch?",
    options: [
      { text: "Ich komme morgen.", value: "a" },
      { text: "Morgen komme ich.", value: "b" },
      { text: "Komme morgen.", value: "c" },
      { text: "Ich werde morgen kommen.", value: "d" },
    ],
    correctAnswer: "c", // "Komme morgen" ist elliptisch (Subjekt weggelassen).
  },
  {
    question: '"_______, desto günstiger."',
    options: [
      { text: "Mehr", value: "a" },
      { text: "Je mehr", value: "b" },
      { text: "Wenn mehr", value: "c" },
      { text: "So mehr", value: "d" },
    ],
    correctAnswer: "b", // Je mehr, desto günstiger ist korrekt.
  },
  {
    question: "Welcher Ausdruck ist eine typische Ellipse?",
    options: [
      { text: "Guten Tag!", value: "a" },
      { text: "Ich wünsche einen guten Tag!", value: "b" },
      { text: "Haben Sie einen guten Tag!", value: "c" },
      { text: "Mögen Sie einen guten Tag haben!", value: "d" },
    ],
    correctAnswer: "a", // "Guten Tag!" ist eine typische Ellipse.
  },
  {
    question: '"Warum nicht?"',
    options: [
      { text: "Warum nicht machen wir das?", value: "a" },
      { text: "Warum machen wir das nicht?", value: "b" },
      { text: "Warum wir das nicht machen?", value: "c" },
      {
        text: "Es ist bereits eine vollständige elliptische Form.",
        value: "d",
      },
    ],
    correctAnswer: "d", // "Warum nicht?" ist bereits eine vollständige elliptische Form.
  },
  {
    question: "Welche Aussage über Ellipsen ist richtig?",
    options: [
      { text: "Ellipsen sind grammatikalisch immer falsch.", value: "a" },
      {
        text: "Ellipsen werden nur in der gesprochenen Sprache verwendet.",
        value: "b",
      },
      { text: "Ellipsen machen die Sprache oft effizienter.", value: "c" },
      {
        text: "Ellipsen sollten in formalen Texten vermieden werden.",
        value: "d",
      },
    ],
    correctAnswer: "c", // Doğru cevap eklendi
  },
  {
    question: "Welche Form ist typisch für die Umgangssprache?",
    options: [
      { text: "Ich habe das nicht gewusst.", value: "a" },
      { text: "Ich wusste das nicht.", value: "b" },
      { text: "Das wusst' ich nicht.", value: "c" },
      { text: "Nicht gewusst habe ich das.", value: "d" },
    ],
    correctAnswer: "c", // "Das wusst' ich nicht" ist typisch für die Umgangssprache mit verkürztem "wusste".
  },
  {
    question: "Welches Wort ist typisch für den süddeutschen Raum?",
    options: [
      { text: "Brötchen", value: "a" },
      { text: "Semmel", value: "b" },
      { text: "Schrippe", value: "c" },
      { text: "Rundstück", value: "d" },
    ],
    correctAnswer: "b", // "Semmel" ist ein typisches Wort im süddeutschen Raum (z. B. Bayern, Österreich).
  },
  {
    question: "Welcher Ausdruck gehört zur formellen Sprache?",
    options: [
      { text: "Hi!", value: "a" },
      { text: "Sehr geehrte Damen und Herren", value: "b" },
      { text: "Hallo!", value: "c" },
      { text: "Tschüss!", value: "d" },
    ],
    correctAnswer: "b", // "Sehr geehrte Damen und Herren" ist ein formeller Ausdruck.
  },
  {
    question: "Welche Form des Grußes ist informell?",
    options: [
      { text: "Mit freundlichen Grüßen", value: "a" },
      { text: "Hochachtungsvoll", value: "b" },
      { text: "Viele Grüße", value: "c" },
      { text: "Ich verbleibe mit freundlichen Grüßen", value: "d" },
    ],
    correctAnswer: "c", // "Viele Grüße" ist ein informeller Gruß.
  },
  {
    question: "Welcher Satz ist im Dialekt?",
    options: [
      { text: "Ich bin müde.", value: "a" },
      { text: "I bin miad.", value: "b" },
      { text: "Ich bin müd'.", value: "c" },
      { text: "Müde bin ich.", value: "d" },
    ],
    correctAnswer: "b", // "I bin miad" ist bayerischer Dialekt.
  },
  {
    question: "Welche Anrede ist formell?",
    options: [
      { text: "du", value: "a" },
      { text: "Sie", value: "b" },
      { text: "ihr", value: "c" },
      { text: "euch", value: "d" },
    ],
    correctAnswer: "b", // "Sie" ist die formelle Anrede.
  },
  {
    question: "Was ist typisch für die deutsche Schriftsprache?",
    options: [
      { text: "Kurze Sätze", value: "a" },
      { text: "Komplexe Satzstrukturen", value: "b" },
      { text: "Umgangssprache", value: "c" },
      { text: "Dialektwörter", value: "d" },
    ],
    correctAnswer: "b", // Komplexe Satzstrukturen sind typisch für die Schriftsprache.
  },
  {
    question: "Welcher Ausdruck gehört zur Umgangssprache?",
    options: [
      { text: "meines Erachtens", value: "a" },
      { text: "krass", value: "b" },
      { text: "in Anbetracht der Tatsache", value: "c" },
      { text: "demzufolge", value: "d" },
    ],
    correctAnswer: "b", // "krass" ist ein umgangssprachlicher Ausdruck.
  },
  {
    question: 'Was ist ein regionales Wort für "Metzger"?',
    options: [
      { text: "Fleischer", value: "a" },
      { text: "Bäcker", value: "b" },
      { text: "Koch", value: "c" },
      { text: "Wirt", value: "d" },
    ],
    correctAnswer: "a", // "Fleischer" ist ein regionales Wort für "Metzger", besonders im Norden und Osten Deutschlands.
  },
  {
    question: "Welcher Satz ist in formeller Sprache?",
    options: [
      { text: "Kannste mir helfen?", value: "a" },
      { text: "Könnten Sie mir bitte behilflich sein?", value: "b" },
      { text: "Hilf mal!", value: "c" },
      { text: "Machste mit?", value: "d" },
    ],
    correctAnswer: "b", // "Könnten Sie mir bitte behilflich sein?" ist formell.
  },
  {
    question: "Welcher Satz enthält eine Nominalphrase?",
    options: [
      { text: "Er kommt morgen zu uns.", value: "a" },
      { text: "Die Erreichung des Ziels ist schwierig.", value: "b" },
      { text: "Sie hat gestern angerufen.", value: "c" },
      { text: "Wir gehen ins Kino.", value: "d" },
    ],
    correctAnswer: "b", // "Die Erreichung des Ziels" ist eine Nominalphrase.
  },
  {
    question: "Identifizieren Sie die Nominalphrase:",
    options: [
      { text: "Er läuft schnell.", value: "a" },
      { text: "Die Einführung des neuen Systems", value: "b" },
      { text: "Sie arbeitet dort.", value: "c" },
      { text: "Wir sind müde.", value: "d" },
    ],
    correctAnswer: "b", // "Die Einführung des neuen Systems" ist eine Nominalphrase.
  },
  {
    question: "Was ist keine Nominalphrase?",
    options: [
      { text: "Die Durchführung der Maßnahme", value: "a" },
      { text: "Der Verzicht auf Süßigkeiten", value: "b" },
      { text: "Er hat viel gelernt", value: "c" },
      { text: "Die Bearbeitung der Anträge", value: "d" },
    ],
    correctAnswer: "c", // "Er hat viel gelernt" ist ein vollständiger Satz, keine Nominalphrase.
  },
  {
    question:
      "Welcher Satz verwendet eine Nominalphrase anstelle einer Verbalkonstruktion?",
    options: [
      { text: "Ich werde dir helfen.", value: "a" },
      { text: "Er liest ein Buch.", value: "b" },
      { text: "Die Überprüfung der Dokumente dauert lange.", value: "c" },
      { text: "Sie kommt heute nicht.", value: "d" },
    ],
    correctAnswer: "c", // "Die Überprüfung der Dokumente" ersetzt eine Verbalkonstruktion wie "Die Dokumente überprüfen".
  },
  {
    question: '"Die ______ der Probleme erfordert Zeit."',
    options: [
      { text: "lösen", value: "a" },
      { text: "Lösung", value: "b" },
      { text: "gelöst", value: "c" },
      { text: "lösbar", value: "d" },
    ],
    correctAnswer: "b", // "Die Lösung der Probleme" ist die korrekte Nominalphrase.
  },
  {
    question: "Welche Nominalphrase drückt eine Handlung aus?",
    options: [
      { text: "Der alte Mann", value: "a" },
      { text: "Das rote Auto", value: "b" },
      { text: "Die Besteigung des Berges", value: "c" },
      { text: "Die schöne Blume", value: "d" },
    ],
    correctAnswer: "c", // "Die Besteigung des Berges" drückt eine Handlung aus (Nominalisierung von "besteigen").
  },
  {
    question: "Welcher Satz enthält KEINE Nominalphrase?",
    options: [
      {
        text: "Die Steigerung der Produktivität ist unser Ziel.",
        value: "a",
      },
      {
        text: "Zur Vermeidung von Missverständnissen sollten klare Anweisungen gegeben werden.",
        value: "b",
      },
      { text: "Er geht jeden Tag spazieren.", value: "c" },
      {
        text: "Die Entwicklung neuer Technologien schreitet voran.",
        value: "d",
      },
    ],
    correctAnswer: "c", // "Er geht jeden Tag spazieren" enthält keine Nominalphrase, sondern ist ein vollständiger Satz.
  },
  {
    question: "Was ist das Besondere an Nominalphrasen im Deutschen?",
    options: [
      { text: "Sie enthalten immer ein Adjektiv.", value: "a" },
      { text: "Sie werden nur im Singular verwendet.", value: "b" },
      {
        text: "Sie können komplexe Sachverhalte kompakt ausdrücken.",
        value: "c",
      },
      {
        text: "Sie kommen nur in der gesprochenen Sprache vor.",
        value: "d",
      },
    ],
    correctAnswer: "c", // Nominalphrasen können komplexe Sachverhalte kompakt ausdrücken.
  },
  {
    question:
      "Welche dieser Phrasen ist eine typische Nominalphrase in wissenschaftlichen Texten?",
    options: [
      { text: "Wir lernen Deutsch.", value: "a" },
      { text: "Die Durchführung der empirischen Untersuchung", value: "b" },
      { text: "Er kommt aus Berlin.", value: "c" },
      { text: "Sie ist Ärztin.", value: "d" },
    ],
    correctAnswer: "b", // "Die Durchführung der empirischen Untersuchung" ist typisch für wissenschaftliche Texte.
  },
  {
    question:
      "Finden Sie die Nominalphrase im folgenden Satz: 'Nach Abschluss der Verhandlungen unterzeichneten beide Parteien den Vertrag.'",
    options: [
      { text: "Nach Abschluss der Verhandlungen", value: "a" },
      { text: "unterzeichneten", value: "b" },
      { text: "beide Parteien", value: "c" },
      { text: "den Vertrag", value: "d" },
    ],
    correctAnswer: "a", // "Nach Abschluss der Verhandlungen" ist die Nominalphrase.
  },
  {
    question: "Welche komplexe Konjunktion drückt eine Begründung aus?",
    options: [
      { text: "indes", value: "a" },
      { text: "zumal", value: "b" },
      { text: "inwiefern", value: "c" },
      { text: "sodass", value: "d" },
    ],
    correctAnswer: "b", // "zumal" drückt eine Begründung aus (z. B. "Er blieb zu Hause, zumal er krank war").
  },
  {
    question: '"Ich konnte nicht kommen, _____ ich krank war."',
    options: [
      { text: "indes", value: "a" },
      { text: "zumal", value: "b" },
      { text: "inwiefern", value: "c" },
      { text: "wenngleich", value: "d" },
    ],
    correctAnswer: "b", // "Ich konnte nicht kommen, zumal ich krank war" (Begründung).
  },
  {
    question: "Welche Konjunktion drückt einen Gegensatz aus?",
    options: [
      { text: "zumal", value: "a" },
      { text: "indes", value: "b" },
      { text: "inwiefern", value: "c" },
      { text: "sofern", value: "d" },
    ],
    correctAnswer: "b", // "indes" drückt einen Gegensatz aus (z. B. "Er wollte helfen, indes kam er zu spät").
  },
  {
    question: "Welche Konjunktion leitet eine indirekte Frage ein?",
    options: [
      { text: "zumal", value: "a" },
      { text: "indes", value: "b" },
      { text: "inwiefern", value: "c" },
      { text: "als ob", value: "d" },
    ],
    correctAnswer: "c", // "inwiefern" leitet indirekte Fragen ein (z. B. "Er fragte, inwiefern das möglich sei").
  },
  {
    question:
      '"Er hat die Prüfung bestanden, _____ er nicht viel gelernt hat."',
    options: [
      { text: "indes", value: "a" },
      { text: "zumal", value: "b" },
      { text: "inwiefern", value: "c" },
      { text: "als ob", value: "d" },
    ],
    correctAnswer: "a", // "Er hat die Prüfung bestanden, indes er nicht viel gelernt hat" (Gegensatz).
  },
  {
    question: "Welche Konjunktion wird verwendet, um Zweifel auszudrücken?",
    options: [
      { text: "zumal", value: "a" },
      { text: "indes", value: "b" },
      { text: "inwieweit", value: "c" },
      { text: "als ob", value: "d" },
    ],
    correctAnswer: "d", // "als ob" drückt Zweifel oder Irrealität aus (z. B. "Es sieht aus, als ob er lügt").
  },
  {
    question:
      '"Er fragte mich, _____ ich mit seiner Entscheidung einverstanden sei."',
    options: [
      { text: "zumal", value: "a" },
      { text: "indes", value: "b" },
      { text: "inwiefern", value: "c" },
      { text: "wobei", value: "d" },
    ],
    correctAnswer: "c", // "Er fragte mich, inwiefern ich einverstanden sei" (indirekte Frage).
  },
  {
    question: "Welche komplexe Konjunktion drückt einen starken Grund aus?",
    options: [
      { text: "indes", value: "a" },
      { text: "zumal", value: "b" },
      { text: "inwiefern", value: "c" },
      { text: "weshalb", value: "d" },
    ],
    correctAnswer: "b", // "zumal" drückt einen starken Grund aus.
  },
  {
    question: 'Welche Konjunktion bedeutet "während" oder "hingegen"?',
    options: [
      { text: "indes", value: "a" },
      { text: "zumal", value: "b" },
      { text: "inwiefern", value: "c" },
      { text: "sofern", value: "d" },
    ],
    correctAnswer: "a", // "indes" bedeutet "während" oder "hingegen".
  },
  {
    question: '"Ich verstehe nicht, _____ diese Regelung sinnvoll sein soll."',
    options: [
      { text: "zumal", value: "a" },
      { text: "indes", value: "b" },
      { text: "inwiefern", value: "c" },
      { text: "sofern", value: "d" },
    ],
    correctAnswer: "c", // "Ich verstehe nicht, inwiefern diese Regelung sinnvoll sein soll" (indirekte Frage).
  },

  {
    question: "Wählen Sie die richtige Verbindung:",
    options: [
      { text: "Er geht in die Stadt, für einkaufen.", value: "a" },
      { text: "Er geht in die Stadt, um einzukaufen.", value: "b" },
      { text: "Er geht in die Stadt, um zu einkaufen.", value: "c" },
      { text: "Er geht in die Stadt, damit einkaufen.", value: "d" },
    ],
    correctAnswer: "b", // "Er geht in die Stadt, um einzukaufen" ist die korrekte Form (Zweck).
  },
  {
    question: '"Sie lernt Deutsch, _____ in Deutschland zu studieren."',
    options: [
      { text: "für", value: "a" },
      { text: "damit", value: "b" },
      { text: "um", value: "c" },
      { text: "zu", value: "d" },
    ],
    correctAnswer: "c", // "Sie lernt Deutsch, um in Deutschland zu studieren" (Zweck).
  },
  {
    question: "Welcher Satz ist grammatikalisch korrekt?",
    options: [
      {
        text: "Er ging nach Hause, ohne dass er sich verabschiedet.",
        value: "a",
      },
      {
        text: "Er ging nach Hause, ohne dass er sich verabschiedete.",
        value: "b",
      },
      { text: "Er ging nach Hause, ohne er sich verabschiedete.", value: "c" },
      {
        text: "Er ging nach Hause, ohne zu dass er sich verabschiedete.",
        value: "d",
      },
    ],
    correctAnswer: "b", // "ohne dass" erfordert Konjunktiv II: "verabschiedete".
  },
  {
    question: "Was ist die richtige Form?",
    options: [
      { text: "Ich bin gekommen, ohne zu informieren dich.", value: "a" },
      { text: "Ich bin gekommen, ohne dich zu informieren.", value: "b" },
      { text: "Ich bin gekommen, ohne dass du zu informieren.", value: "c" },
      { text: "Ich bin gekommen, ohne du zu informieren.", value: "d" },
    ],
    correctAnswer: "b", // "ohne dich zu informieren" ist die korrekte Infinitivkonstruktion.
  },
  {
    question: "Wählen Sie die korrekte Struktur:",
    options: [
      { text: "Sie übt täglich, um besser zu werden.", value: "a" },
      { text: "Sie übt täglich, um zu besser werden.", value: "b" },
      { text: "Sie übt täglich, für besser zu werden.", value: "c" },
      { text: "Sie übt täglich, um dass sie besser wird.", value: "d" },
    ],
    correctAnswer: "a", // "um besser zu werden" ist die korrekte Zweckangabe.
  },
  {
    question: '"Er verließ das Haus, _____ einen Regenschirm mitzunehmen."',
    options: [
      { text: "statt", value: "a" },
      { text: "ohne", value: "b" },
      { text: "anstatt dass", value: "c" },
      { text: "um nicht", value: "d" },
    ],
    correctAnswer: "b", // "Er verließ das Haus, ohne einen Regenschirm mitzunehmen" ist korrekt.
  },
  {
    question: 'Welcher Satz verwendet "ohne dass" korrekt?',
    options: [
      { text: "Er ging, ohne dass er bezahlt hat.", value: "a" },
      { text: "Er ging, ohne dass er bezahlt hatte.", value: "b" },
      { text: "Er ging, ohne dass er bezahlt.", value: "c" },
      { text: "Er ging, ohne dass bezahlt.", value: "d" },
    ],
    correctAnswer: "b", // "ohne dass" mit Konjunktiv II: "Er ging, ohne dass er bezahlt hatte" ist korrekt.
  },
  {
    question: "Wählen Sie die richtige Konstruktion:",
    options: [
      { text: "Sie arbeitet hart, um Geld zu verdienen.", value: "a" },
      { text: "Sie arbeitet hart, um zu Geld verdienen.", value: "b" },
      { text: "Sie arbeitet hart, für Geld verdienen.", value: "c" },
      { text: "Sie arbeitet hart, damit zu Geld verdienen.", value: "d" },
    ],
    correctAnswer: "a", // "um Geld zu verdienen" ist die korrekte Zweckangabe mit Infinitivkonstruktion.
  },
  {
    question: '"Wir gingen spazieren, _____ das schlechte Wetter zu beachten."',
    options: [
      { text: "ohne", value: "a" },
      { text: "statt", value: "b" },
      { text: "anstatt", value: "c" },
      { text: "ohne zu", value: "d" },
    ],
    correctAnswer: "a", // "ohne das schlechte Wetter zu beachten" ist die richtige Infinitivkonstruktion.
  },
  {
    question: "Welcher Satz ist grammatikalisch korrekt?",
    options: [
      { text: "Er spricht laut, ohne dass er es merkt.", value: "a" },
      { text: "Er spricht laut, ohne dass er es bemerkt.", value: "b" },
      { text: "Er spricht laut, ohne zu merken es.", value: "c" },
      { text: "Er spricht laut, ohne dass es merkt.", value: "d" },
    ],
    correctAnswer: "b", // "ohne dass er es bemerkt" verwendet Konjunktiv II korrekt.
  },

  {
    question:
      '"_____ der schlechten Wirtschaftslage mussten viele Firmen schließen."',
    options: [
      { text: "Anhand", value: "a" },
      { text: "Infolge", value: "b" },
      { text: "Angesichts", value: "c" },
      { text: "Zwecks", value: "d" },
    ],
    correctAnswer: "b", // "Infolge der schlechten Wirtschaftslage" drückt eine Konsequenz aus.
  },
  {
    question:
      '"_____ des Experiments konnten wir unsere Hypothese bestätigen."',
    options: [
      { text: "Anhand", value: "a" },
      { text: "Infolge", value: "b" },
      { text: "Angesichts", value: "c" },
      { text: "Zufolge", value: "d" },
    ],
    correctAnswer: "b", // "Infolge des Experiments" bedeutet "als Folge davon".
  },
  {
    question:
      '"_____ der neuen Beweise musste der Fall neu aufgerollt werden."',
    options: [
      { text: "Anhand", value: "a" },
      { text: "Infolge", value: "b" },
      { text: "Angesichts", value: "c" },
      { text: "Mittels", value: "d" },
    ],
    correctAnswer: "c", // "Angesichts der neuen Beweise" bedeutet "in Anbetracht".
  },
  {
    question: '"_____ des Unfalls wurde die Straße gesperrt."',
    options: [
      { text: "Anhand", value: "a" },
      { text: "Infolge", value: "b" },
      { text: "Angesichts", value: "c" },
      { text: "Kraft", value: "d" },
    ],
    correctAnswer: "b", // "Infolge des Unfalls" drückt eine Konsequenz aus.
  },
  {
    question: "Welche Präposition drückt eine Konsequenz aus?",
    options: [
      { text: "Anhand", value: "a" },
      { text: "Infolge", value: "b" },
      { text: "Angesichts", value: "c" },
      { text: "Zwecks", value: "d" },
    ],
    correctAnswer: "b", // "Infolge" bedeutet "als Folge von" und drückt eine Konsequenz aus.
  },
  {
    question: '"_____ des Regens fiel das Picknick aus."',
    options: [
      { text: "Anhand", value: "a" },
      { text: "Infolge", value: "b" },
      { text: "Angesichts", value: "c" },
      { text: "Kraft", value: "d" },
    ],
    correctAnswer: "b", // "Infolge des Regens" bedeutet "wegen des Regens" (Konsequenz).
  },
  {
    question: 'Welche Präposition bedeutet "mit Hilfe von"?',
    options: [
      { text: "Anhand", value: "a" },
      { text: "Infolge", value: "b" },
      { text: "Angesichts", value: "c" },
      { text: "Zufolge", value: "d" },
    ],
    correctAnswer: "a", // "Anhand" bedeutet "mit Hilfe von" oder "auf Basis von".
  },
  {
    question:
      '"_____ seiner langjährigen Erfahrung konnte er das Problem schnell lösen."',
    options: [
      { text: "Anhand", value: "a" },
      { text: "Infolge", value: "b" },
      { text: "Angesichts", value: "c" },
      { text: "Mittels", value: "d" },
    ],
    correctAnswer: "c", // "Angesichts seiner langjährigen Erfahrung" bedeutet "in Anbetracht".
  },
  {
    question:
      "Welche Präposition drückt einen betrachtenden Blick auf etwas aus?",
    options: [
      { text: "Anhand", value: "a" },
      { text: "Infolge", value: "b" },
      { text: "Angesichts", value: "c" },
      { text: "Kraft", value: "d" },
    ],
    correctAnswer: "c", // "Angesichts" drückt eine Betrachtung oder einen Blick auf etwas aus.
  },
  {
    question:
      '"_____ der vorliegenden Daten können wir folgende Schlüsse ziehen."',
    options: [
      { text: "Anhand", value: "a" },
      { text: "Infolge", value: "b" },
      { text: "Angesichts", value: "c" },
      { text: "Zwecks", value: "d" },
    ],
    correctAnswer: "a", // "Anhand der vorliegenden Daten" bedeutet "auf Basis der Daten".
  },
];

export default questions;
