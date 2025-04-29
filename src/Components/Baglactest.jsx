import React, { useState, useEffect } from "react";

const Baglactest = () => {
  // Data from your file
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

  // Generate question types
  const generateQuestions = () => {
    const questionTypes = [
      { type: "meaningToConjunction", difficulty: 1 },
      { type: "conjunctionToMeaning", difficulty: 1 },
      { type: "fillBlanks", difficulty: 2 },
      { type: "matchExample", difficulty: 2 },
      { type: "multipleChoice", difficulty: 1 },
      { type: "matchPairs", difficulty: 3 },
      { type: "completeExample", difficulty: 3 },
      { type: "similarMeanings", difficulty: 4 },
      { type: "identifyType", difficulty: 4 },
      { type: "translateSentence", difficulty: 5 },
    ];

    const allQuestions = [];

    while (allQuestions.length < 100) {
      questionTypes.forEach((qType) => {
        if (allQuestions.length < 100) {
          for (let i = 0; i < Math.ceil(10 / questionTypes.length); i++) {
            if (allQuestions.length < 100) {
              const question = createQuestion(qType.type, qType.difficulty);
              if (question) {
                allQuestions.push(question);
              }
            }
          }
        }
      });
    }

    return allQuestions.sort(() => Math.random() - 0.5);
  };

  const createQuestion = (type, difficulty) => {
    const randomIndex = Math.floor(Math.random() * conjunctions.length);
    const conjunction = conjunctions[randomIndex];

    switch (type) {
      case "meaningToConjunction":
        return {
          id: `${type}-${randomIndex}`,
          type,
          difficulty,
          question: `"${conjunction.meaning}" kelimesinin Almanca bağlacı nedir?`,
          correctAnswer: conjunction.conjunction,
          options: generateOptions(conjunction.conjunction, "conjunction"),
        };

      case "conjunctionToMeaning":
        return {
          id: `${type}-${randomIndex}`,
          type,
          difficulty,
          question: `"${conjunction.conjunction}" bağlacının Türkçe anlamı nedir?`,
          correctAnswer: conjunction.meaning,
          options: generateOptions(conjunction.meaning, "meaning"),
        };

      case "fillBlanks":
        const words = conjunction.example.split(" ");
        const conjunctionIndex = words.findIndex(
          (word) =>
            word === conjunction.conjunction ||
            word.includes(conjunction.conjunction + ",") ||
            word.includes(conjunction.conjunction + ".")
        );

        if (conjunctionIndex !== -1) {
          const blankedWord = words[conjunctionIndex].replace(
            conjunction.conjunction,
            "____"
          );
          words[conjunctionIndex] = blankedWord;

          return {
            id: `${type}-${randomIndex}`,
            type,
            difficulty,
            question: `Boşluğu doğru bağlaçla doldurun: ${words.join(" ")}`,
            correctAnswer: conjunction.conjunction,
            options: generateOptions(conjunction.conjunction, "conjunction"),
          };
        }
        return createQuestion("multipleChoice", 1);

      case "matchExample":
        const correctExample = conjunction.example;
        return {
          id: `${type}-${randomIndex}`,
          type,
          difficulty,
          question: `"${conjunction.conjunction}" bağlacı için doğru örnek cümleyi seçin:`,
          correctAnswer: correctExample,
          options: generateExampleOptions(correctExample),
        };

      case "multipleChoice":
        return {
          id: `${type}-${randomIndex}`,
          type,
          difficulty,
          question: `"${conjunction.conjunction}" hangi anlamda kullanılır?`,
          correctAnswer: conjunction.meaning,
          options: generateOptions(conjunction.meaning, "meaning"),
        };

      case "matchPairs":
        const otherConjunctions = getRandomConjunctions(3, randomIndex);
        const allConjunctions = [conjunction, ...otherConjunctions];
        const shuffledConjunctions = [...allConjunctions].sort(
          () => Math.random() - 0.5
        );

        return {
          id: `${type}-${randomIndex}`,
          type,
          difficulty,
          question: `Aşağıdaki Almanca bağlaçları Türkçe anlamlarıyla eşleştirin:`,
          pairs: shuffledConjunctions.map((conj) => ({
            german: conj.conjunction,
            turkish: conj.meaning,
          })),
          correctPairs: allConjunctions.map((conj) => ({
            german: conj.conjunction,
            turkish: conj.meaning,
          })),
        };

      case "completeExample":
        const exampleParts = conjunction.example.split(conjunction.conjunction);
        if (exampleParts.length === 2) {
          return {
            id: `${type}-${randomIndex}`,
            type,
            difficulty,
            question: `Bu cümleyi doğru bağlaçla tamamlayın: ${exampleParts[0]} _____ ${exampleParts[1]}`,
            correctAnswer: conjunction.conjunction,
            options: generateOptions(conjunction.conjunction, "conjunction"),
          };
        }
        return createQuestion("multipleChoice", 1);

      case "similarMeanings":
        const similarConjunctions = conjunctions.filter(
          (conj) =>
            conj.meaning.includes(conjunction.meaning.split(" ")[0]) &&
            conj.conjunction !== conjunction.conjunction
        );

        if (similarConjunctions.length >= 2) {
          const options = [
            conjunction.conjunction,
            ...similarConjunctions.slice(0, 3).map((c) => c.conjunction),
          ];
          if (options.length < 4) {
            const fillOptions = getRandomConjunctions(
              4 - options.length,
              randomIndex
            );
            options.push(...fillOptions.map((c) => c.conjunction));
          }

          return {
            id: `${type}-${randomIndex}`,
            type,
            difficulty,
            question: `"${conjunction.meaning}" anlamına benzer bir anlam taşıyan bağlaçları seçin:`,
            correctAnswer: [
              conjunction.conjunction,
              ...similarConjunctions.slice(0, 2).map((c) => c.conjunction),
            ],
            options: options.sort(() => Math.random() - 0.5),
            multiSelect: true,
          };
        }
        return createQuestion("multipleChoice", 1);

      case "identifyType":
        const types = [
          {
            name: "Kopulatif (Bağlayıcı)",
            examples: [
              "und",
              "sowohl ... als auch",
              "nicht nur ... sondern auch",
            ],
          },
          {
            name: "Disjunktif (Ayırıcı)",
            examples: ["oder", "entweder ... oder", "beziehungsweise"],
          },
          {
            name: "Adversatif (Zıtlık)",
            examples: ["aber", "jedoch", "dennoch", "trotzdem", "sondern"],
          },
          { name: "Kausal (Sebep)", examples: ["weil", "denn", "da", "zumal"] },
          {
            name: "Konsekutif (Sonuç)",
            examples: ["deshalb", "daher", "deswegen", "darum", "sodass"],
          },
          {
            name: "Konzessiv (Taviz)",
            examples: ["obwohl", "trotzdem", "dennoch", "wenngleich"],
          },
          { name: "Konditional (Şart)", examples: ["wenn", "falls", "sofern"] },
          {
            name: "Temporal (Zaman)",
            examples: [
              "als",
              "wenn",
              "bevor",
              "nachdem",
              "während",
              "bis",
              "seit",
            ],
          },
        ];

        const conjType = types.find((type) =>
          type.examples.includes(conjunction.conjunction)
        );
        if (conjType) {
          const otherTypes = types.filter((t) => t.name !== conjType.name);
          const options = [
            conjType.name,
            ...otherTypes.sort(() => Math.random() - 0.5).slice(0, 3),
          ];

          return {
            id: `${type}-${randomIndex}`,
            type,
            difficulty,
            question: `"${conjunction.conjunction}" bağlacı hangi bağlaç türüne aittir?`,
            correctAnswer: conjType.name,
            options: generateOptions(conjType.name, "name", types),
          };
        }
        return createQuestion("multipleChoice", 1);

      case "translateSentence":
        return {
          id: `${type}-${randomIndex}`,
          type,
          difficulty,
          question: `Bu cümleyi Türkçe'ye çevirin: "${conjunction.example}"`,
          hint: `İpucu: "${conjunction.conjunction}" = "${conjunction.meaning}"`,
          userInput: true,
          correctAnswer: "", // Manual checking needed in real app
        };

      default:
        return null;
    }
  };

  // Helper functions
  const generateOptions = (correctAnswer, field, source = conjunctions) => {
    const otherOptions = source
      .filter((item) => item[field] !== correctAnswer)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((item) => item[field]);

    return [correctAnswer, ...otherOptions].sort(() => Math.random() - 0.5);
  };

  const generateExampleOptions = (correctExample) => {
    const otherExamples = conjunctions
      .filter((item) => item.example !== correctExample)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((item) => item.example);

    return [correctExample, ...otherExamples].sort(() => Math.random() - 0.5);
  };

  const getRandomConjunctions = (count, excludeIndex) => {
    const availableConjunctions = conjunctions.filter(
      (_, index) => index !== excludeIndex
    );
    return availableConjunctions
      .sort(() => Math.random() - 0.5)
      .slice(0, count);
  };

  // State management
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [pairMatches, setPairMatches] = useState({});
  const [stats, setStats] = useState({
    correct: 0,
    incorrect: 0,
    skipped: 0,
    totalQuestions: 0,
    timeSpent: 0,
  });
  const [timer, setTimer] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState("mixed");
  const [questionsRemaining, setQuestionsRemaining] = useState(100);

  // Initialize questions
  useEffect(() => {
    if (quizStarted) {
      let filteredQuestions = generateQuestions();

      if (selectedDifficulty !== "mixed") {
        const difficultyLevel = parseInt(selectedDifficulty);
        filteredQuestions = filteredQuestions.filter(
          (q) => q.difficulty === difficultyLevel
        );
        filteredQuestions = filteredQuestions.slice(0, 100);
      }

      setQuestions(filteredQuestions);
      setQuestionsRemaining(filteredQuestions.length);
      setStats((prev) => ({
        ...prev,
        totalQuestions: filteredQuestions.length,
      }));

      const interval = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [quizStarted, selectedDifficulty]);

  // Format timer display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Handle answer submission
  const handleAnswer = (answer) => {
    const currentQuestion = questions[currentQuestionIndex];
    let isCorrect = false;

    if (currentQuestion.type === "matchPairs") {
      const userPairs = Object.entries(pairMatches).map(
        ([german, turkish]) => ({
          german,
          turkish,
        })
      );

      isCorrect = currentQuestion.correctPairs.every((pair) =>
        userPairs.some(
          (userPair) =>
            userPair.german === pair.german && userPair.turkish === pair.turkish
        )
      );
    } else if (currentQuestion.multiSelect) {
      isCorrect =
        Array.isArray(currentQuestion.correctAnswer) &&
        selectedOptions.length === currentQuestion.correctAnswer.length &&
        currentQuestion.correctAnswer.every((ans) =>
          selectedOptions.includes(ans)
        );
    } else if (currentQuestion.userInput) {
      isCorrect = true; // Manual checking needed in real app
    } else {
      isCorrect = answer === currentQuestion.correctAnswer;
    }

    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        userAnswer:
          currentQuestion.type === "matchPairs"
            ? pairMatches
            : currentQuestion.userInput
            ? userInput
            : currentQuestion.multiSelect
            ? selectedOptions
            : answer,
        isCorrect,
        question: currentQuestion,
      },
    }));

    setStats((prev) => ({
      ...prev,
      correct: prev.correct + (isCorrect ? 1 : 0),
      incorrect: prev.incorrect + (isCorrect ? 0 : 1),
      timeSpent: timer,
    }));

    setSelectedOptions([]);
    setUserInput("");
    setPairMatches({});

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setQuestionsRemaining((prev) => prev - 1);
    } else {
      setShowResults(true);
    }
  };

  // Handle skipping questions
  const handleSkip = () => {
    setStats((prev) => ({
      ...prev,
      skipped: prev.skipped + 1,
    }));

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setQuestionsRemaining((prev) => prev - 1);
    } else {
      setShowResults(true);
    }
  };

  // Handle multi-select options
  const toggleOption = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  // Handle pair matching
  const handlePairMatch = (german, turkish) => {
    setPairMatches((prev) => ({
      ...prev,
      [german]: turkish,
    }));
  };

  // Start the quiz
  const startQuiz = () => {
    setQuizStarted(true);
  };

  // Reset the quiz
  const resetQuiz = () => {
    setQuizStarted(false);
    setShowResults(false);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setSelectedOptions([]);
    setUserInput("");
    setPairMatches({});
    setStats({
      correct: 0,
      incorrect: 0,
      skipped: 0,
      totalQuestions: 0,
      timeSpent: 0,
    });
    setTimer(0);
    setQuestionsRemaining(100);
  };

  // UI Rendering
  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">
            Almanca Bağlaçlar Testi
          </h1>
          <div className="mb-6">
            <label className="block mb-2 font-medium">Zorluk Seviyesi:</label>
            <select
              className="w-full p-2 border rounded"
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
            >
              <option value="mixed">Karışık</option>
              <option value="1">1 - Kolay</option>
              <option value="2">2 - Orta</option>
              <option value="3">3 - Zor</option>
              <option value="4">4 - Çok Zor</option>
              <option value="5">5 - Uzman</option>
            </select>
          </div>
          <div className="text-center mb-6">
            <p>Bu test 100 farklı soru içermektedir.</p>
            <p className="mt-2">Hazır olduğunuzda başlayabilirsiniz.</p>
          </div>
          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
            onClick={startQuiz}
          >
            Testi Başlat
          </button>
        </div>
      </div>
    );
  }

  if (showResults) {
    const score = Math.round((stats.correct / stats.totalQuestions) * 100);
    let feedback = "";

    if (score >= 90)
      feedback = "Mükemmel! Almanca bağlaçlara çok iyi hakimsin.";
    else if (score >= 75)
      feedback = "Çok iyi! Almanca bağlaçlar konusunda oldukça başarılısın.";
    else if (score >= 60)
      feedback = "İyi! Almanca bağlaçlar konusunda temel bilgiye sahipsin.";
    else if (score >= 40)
      feedback = "Orta! Biraz daha çalışmaya ihtiyacın var.";
    else
      feedback =
        "Daha fazla pratik yapmalısın. Almanca bağlaçları öğrenmek için çalışmaya devam et.";

    // Filter incorrect answers
    const incorrectAnswers = Object.values(userAnswers).filter(
      (answer) => !answer.isCorrect
    );

    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
          <h1 className="text-2xl font-bold text-center mb-6">
            Test Sonuçları
          </h1>
          <div className="mb-8">
            <div className="text-center mb-4">
              <div className="text-5xl font-bold mb-2">{score}%</div>
              <div className="text-gray-600">{feedback}</div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-green-100 p-4 rounded-lg text-center">
                <div className="text-green-600 text-xl font-bold">
                  {stats.correct}
                </div>
                <div>Doğru</div>
              </div>
              <div className="bg-red-100 p-4 rounded-lg text-center">
                <div className="text-red-600 text-xl font-bold">
                  {stats.incorrect}
                </div>
                <div>Yanlış</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <div className="text-gray-600 text-xl font-bold">
                  {stats.skipped}
                </div>
                <div>Atlanmış</div>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg text-center">
                <div className="text-blue-600 text-xl font-bold">
                  {formatTime(stats.timeSpent)}
                </div>
                <div>Süre</div>
              </div>
            </div>
          </div>

          {/* Incorrect Answers Section */}
          {incorrectAnswers.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">
                Yanlış Cevapladığınız Sorular
              </h2>
              <div className="space-y-4">
                {incorrectAnswers.map((answer, index) => (
                  <div
                    key={index}
                    className="p-4 bg-red-50 rounded-lg border border-red-200"
                  >
                    <p className="font-medium mb-2">
                      Soru: {answer.question.question}
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                      Sizin Cevabınız:{" "}
                      {answer.question.type === "matchPairs"
                        ? Object.entries(answer.userAnswer)
                            .map(([german, turkish]) => `${german}: ${turkish}`)
                            .join(", ")
                        : answer.question.multiSelect
                        ? answer.userAnswer.join(", ")
                        : answer.userAnswer}
                    </p>
                    <p className="text-sm text-gray-600">
                      Doğru Cevap:{" "}
                      {answer.question.type === "matchPairs"
                        ? answer.question.correctPairs
                            .map((pair) => `${pair.german}: ${pair.turkish}`)
                            .join(", ")
                        : answer.question.multiSelect
                        ? answer.question.correctAnswer.join(", ")
                        : answer.question.correctAnswer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
            onClick={resetQuiz}
          >
            Yeniden Başla
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  if (!currentQuestion) {
    return <div className="text-center p-8">Sorular yükleniyor...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex justify-between items-center">
          <div>
            <span className="font-bold">
              Soru {currentQuestionIndex + 1}/{questions.length}
            </span>
            <span className="ml-4 text-gray-600">
              Kalan: {questionsRemaining}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-green-100 px-3 py-1 rounded-lg">
              <span className="text-green-700 font-medium">
                {stats.correct} Doğru
              </span>
            </div>
            <div className="bg-red-100 px-3 py-1 rounded-lg">
              <span className="text-red-700 font-medium">
                {stats.incorrect} Yanlış
              </span>
            </div>
            <div className="bg-blue-100 px-3 py-1 rounded-lg">
              <span className="text-blue-700 font-medium">
                {formatTime(timer)}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
          <div className="flex justify-between items-center mb-4">
            <span
              className={`text-sm font-medium px-3 py-1 rounded-full ${
                currentQuestion.difficulty === 1
                  ? "bg-green-100 text-green-700"
                  : currentQuestion.difficulty === 2
                  ? "bg-yellow-100 text-yellow-700"
                  : currentQuestion.difficulty === 3
                  ? "bg-orange-100 text-orange-700"
                  : currentQuestion.difficulty >= 4
                  ? "bg-red-100 text-red-700"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Zorluk: {currentQuestion.difficulty} -{" "}
              {currentQuestion.difficulty === 1
                ? "Kolay"
                : currentQuestion.difficulty === 2
                ? "Orta"
                : currentQuestion.difficulty === 3
                ? "Zor"
                : currentQuestion.difficulty === 4
                ? "Çok Zor"
                : "Uzman"}
            </span>
            <button
              onClick={handleSkip}
              className="text-gray-500 hover:text-gray-700 text-sm font-medium"
            >
              Bu soruyu geç →
            </button>
          </div>

          <h2 className="text-xl font-semibold mb-6">
            {currentQuestion.question}
          </h2>

          {currentQuestion.type === "matchPairs" ? (
            <div className="space-y-4">
              {currentQuestion.pairs.map((pair, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <span className="w-1/2 p-2 bg-gray-50 rounded-lg">
                    {pair.german}
                  </span>
                  <select
                    className="w-1/2 p-2 border rounded-lg"
                    onChange={(e) =>
                      handlePairMatch(pair.german, e.target.value)
                    }
                    value={pairMatches[pair.german] || ""}
                  >
                    <option value="">Eşleştir...</option>
                    {currentQuestion.pairs.map((p, i) => (
                      <option key={i} value={p.turkish}>
                        {p.turkish}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
              <button
                onClick={() => handleAnswer()}
                className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
                disabled={
                  Object.keys(pairMatches).length !==
                  currentQuestion.pairs.length
                }
              >
                Cevaplamayı Bitir
              </button>
            </div>
          ) : currentQuestion.multiSelect ? (
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => toggleOption(option)}
                  className={`w-full p-3 text-left rounded-lg border transition-colors ${
                    selectedOptions.includes(option)
                      ? "bg-indigo-100 border-indigo-300"
                      : "hover:bg-gray-50 border-gray-200"
                  }`}
                >
                  {option}
                </button>
              ))}
              <button
                onClick={() => handleAnswer()}
                className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
                disabled={selectedOptions.length === 0}
              >
                Cevaplamayı Bitir
              </button>
            </div>
          ) : currentQuestion.userInput ? (
            <div className="space-y-4">
              <textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="w-full p-3 border rounded-lg"
                placeholder="Cevabınızı buraya yazın..."
                rows="3"
              />
              <p className="text-sm text-gray-500">{currentQuestion.hint}</p>
              <button
                onClick={() => handleAnswer()}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
                disabled={!userInput.trim()}
              >
                Cevaplamayı Bitir
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full p-3 text-left rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="h-2 bg-gray-200 rounded-full mb-4">
          <div
            className="h-full bg-indigo-600 rounded-full transition-all duration-300"
            style={{
              width: `${
                ((currentQuestionIndex + 1) / questions.length) * 100
              }%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Baglactest;
