import React, { useState } from "react";

const VocabularyCard = () => {
  // Sample data from your provided list (you can expand this array with all 200+ entries)
  const vocabularyData = [
    {
      word: "der Grundstein, e",
      turkish: "temel, başlangıç",
      germanSentence: "Der Grundstein für den Erfolg wurde früh gelegt.",
    },
    {
      word: "landen",
      turkish: "beklenmedik şekilde bir yere gelmek",
      germanSentence: "Ich bin ausgerechnet in dieser kleinen Stadt gelandet.",
    },
    {
      word: "in Erscheinung treten",
      turkish: "görünmek, ortaya çıkmak",
      germanSentence: "Er tritt oft in der Öffentlichkeit in Erscheinung.",
    },
    {
      word: "sich (D) etwas (A) eingestehen",
      turkish: "bir zayıflığı, hatayı itiraf etmek",
      germanSentence:
        "Sie musste sich eingestehen, dass sie einen Fehler gemacht hat.",
    },
    {
      word: "die Maßnahme, n",
      turkish: "eylem, hareket, adım",
      germanSentence:
        "Die Regierung hat neue Maßnahmen zur Umweltverbesserung eingeführt.",
    },
    {
      word: "die Bemühung, en",
      turkish: "çaba, gayret, bir şey için aktif çalışma",
      germanSentence:
        "Ihre Bemühungen um bessere Arbeitsbedingungen wurden belohnt.",
    },
    {
      word: "die Erhaltung, en",
      turkish: "koruma, bakım, devam etme",
      germanSentence: "Die Erhaltung der Natur ist eine wichtige Aufgabe.",
    },
    {
      word: "für etwas/jemanden eintreten",
      turkish: "bir şey/biri için çaba göstermek/aktif olmak",
      germanSentence: "Er tritt für die Rechte der Arbeitnehmer ein.",
    },
    {
      word: "die Abkehr (nur Singular)",
      turkish: "ayrılma, bir şeyi artık kullanmama",
      germanSentence: "Die Abkehr von fossilen Brennstoffen ist notwendig.",
    },
    {
      word: "(sich) halten",
      turkish: "iyi durumda kalmak, aynı formda kalmak",
      germanSentence: "Das Gebäude hat sich über die Jahre gut gehalten.",
    },
    {
      word: "sich (mit etwas) schwertun",
      turkish: "bir şeyde zorlanmak, bir şeyin zor gelmesi",
      germanSentence: "Er tut sich schwer mit der neuen Sprache.",
    },
    {
      word: "etwas entsorgen",
      turkish: "bir şeyi atmak/kaldırmak",
      germanSentence: "Bitte entsorge den Müll richtig.",
    },
    {
      word: "herrschen",
      turkish: "yaygın/mevcut olmak",
      germanSentence: "In der Stadt herrscht eine entspannte Atmosphäre.",
    },
    {
      word: "einlaufen",
      turkish: "yıkarken küçülmek/daralmak",
      germanSentence: "Mein Pullover ist beim Waschen eingelaufen.",
    },
    {
      word: "jemandem etwas überlassen",
      turkish: "birinin bir şey hakkında kendisi karar verebilmesi",
      germanSentence: "Ich überlasse dir die Entscheidung.",
    },
    {
      word: "in Maßen",
      turkish: "fazla olmadan, abartısız, doğru miktarda",
      germanSentence: "Man sollte alles in Maßen genießen.",
    },
    {
      word: "etwas (he)runterdrehen",
      turkish: "bir şeyi daha düşük seviyeye getirmek",
      germanSentence: "Kannst du die Heizung etwas runterdrehen?",
    },
    {
      word: "schnippen",
      turkish: "burada: atmak",
      germanSentence: "Er hat den Ball einfach weggeschnippt.",
    },
    {
      word: "reinschrauben",
      turkish: "burada: ampulleri duyya takmak",
      germanSentence: "Ich muss noch eine Glühbirne reinschrauben.",
    },
    {
      word: "die Auflage, n",
      turkish: "yükümlülük, koşul",
      germanSentence: "Die neuen Auflagen müssen streng eingehalten werden.",
    },
    {
      word: "zeitgemäß",
      turkish: "güncel, zamana uygun",
      germanSentence: "Das Design ist sehr zeitgemäß.",
    },
    {
      word: "das Vesper, -",
      turkish: "küçük öğün, ayrıca: akşam yemeği",
      germanSentence: "Wir haben ein kleines Vesper am Abend gegessen.",
    },
    {
      word: "jemandem eine Bühne geben/bieten",
      turkish: "birini merkeze koymak, birine ilgi göstermek",
      germanSentence: "Der Moderator gibt den Gästen eine Bühne.",
    },
    {
      word: "ausgerechnet",
      turkish: "tam (takip eden cümle parçasını vurgulayan kelime)",
      germanSentence: "Ausgerechnet heute regnet es.",
    },
    {
      word: "bemerkenswert",
      turkish: "olağandışı, yüksek derecede, dikkate değer",
      germanSentence: "Sein Vortrag war wirklich bemerkenswert.",
    },
    {
      word: "geläufig",
      turkish: "bilinen, tanıdık",
      germanSentence: "Das Wort ist mir nicht geläufig.",
    },
    {
      word: "pro Stunde (kann weggelassen werden)",
      turkish: 'Julia burada saatte 112 km/h diyor, "saatte" çıkarılabilir',
      germanSentence: "Julia fährt mit 112 km/h pro Stunde.",
    },
    {
      word: "schlagen",
      turkish: "burada: kanatlarla birkaç kez hızlı hareketler yapmak",
      germanSentence: "Der Vogel schlägt kräftig mit den Flügeln.",
    },
    {
      word: "die Elektrorezeptoren (nur im Plural)",
      turkish:
        "belirli hayvanların elektrik alanında yönelim için duyu organları",
      germanSentence: "Haie nutzen Elektrorezeptoren zur Orientierung.",
    },
    {
      word: "etwas/jemanden aufspüren",
      turkish: "bir şeyi/birini keşfetmek/bulmak",
      germanSentence: "Die Polizei konnte den Dieb aufspüren.",
    },
    {
      word: "das Erbe (nur Singular)",
      turkish:
        "ölümden sonra başkalarına bırakılan şey, burada: geçmişten günümüze korunan maddi olmayan şey",
      germanSentence: "Das kulturelle Erbe wird sorgfältig bewahrt.",
    },
    {
      word: "zu meiner Schande",
      turkish: "benim utancıma (genellikle alaycı)",
      germanSentence: "Zu meiner Schande habe ich das Buch nie gelesen.",
    },
    {
      word: "etwas gestehen",
      turkish: "hoş olmayan bir şeyi açıkça söylemek, itiraf etmek",
      germanSentence: "Er musste seine Schuld gestehen.",
    },
    {
      word: "sich festlegen",
      turkish: "kesin olarak karar vermek",
      germanSentence: "Ich möchte mich noch nicht festlegen.",
    },
    {
      word: "der Unterschlupf, Unterschlupfe (Plural selten)",
      turkish: "burada: konaklama yeri, geceleyecek yer",
      germanSentence: "Die Reisenden fanden einen Unterschlupf für die Nacht.",
    },
    {
      word: "schlendern",
      turkish: "rahat (ve amaçsız) yürüyüş yapmak",
      germanSentence: "Wir sind durch die Stadt geschlendert.",
    },
    {
      word: "der Enthusiast, en",
      turkish: "bir şeyi tutkuyla/coşkuyla yapan kişi",
      germanSentence: "Er ist ein echter Enthusiast für alte Autos.",
    },
    {
      word: "der Langlauf, -läufe",
      turkish: "genellikle düz arazide uzun mesafelerde kayak yapma",
      germanSentence: "Langlauf ist eine beliebte Wintersportart.",
    },
    {
      word: "die Überleitung, en",
      turkish: "geçiş, yeni bir şeye yönlendirme",
      germanSentence: "Die Überleitung zum nächsten Thema war sehr geschickt.",
    },
    {
      word: "überwiegend",
      turkish: "özellikle, esas olarak",
      germanSentence: "Das Publikum war überwiegend jung.",
    },
    {
      word: "etwas unternehmen",
      turkish: "burada: yapmak",
      germanSentence:
        "Wir müssen etwas gegen die Umweltverschmutzung unternehmen.",
    },
    {
      word: "der Aufwand, Aufwände",
      turkish: "kullanılan araçlar/maliyetler, çaba",
      germanSentence: "Der Aufwand für das Projekt war enorm.",
    },
    {
      word: "das Hauptanliegen, -",
      turkish: "birinin ulaşmak istediği en önemli şey, en önemli istek",
      germanSentence: "Das Hauptanliegen der Kampagne ist Umweltschutz.",
    },
    {
      word: "der Aufenthalt, e",
      turkish: "belirli bir yerde sınırlı süre",
      germanSentence: "Mein Aufenthalt in Berlin war unvergesslich.",
    },
    {
      word: "etwas bereisen",
      turkish: "bir ülkeyi/bölgeyi tanımak için seyahat etmek",
      germanSentence: "Sie hat viele Länder bereist.",
    },
    {
      word: "allein",
      turkish: "burada: zaten",
      germanSentence: "Allein die Aussicht war die Reise wert.",
    },
    {
      word: "quer",
      turkish: "bir taraftan diğer tarafa, bir uçtan diğer uca",
      germanSentence: "Wir sind quer durch die Stadt gelaufen.",
    },
    {
      word: "wesentlich",
      turkish: "çok (fazla)",
      germanSentence:
        "Die Änderungen haben wesentlich zur Verbesserung beigetragen.",
    },
    {
      word: "die Versorgung (nur Singular)",
      turkish: "burada: geçim, yaşam masrafları",
      germanSentence: "Die Versorgung der Bevölkerung ist gesichert.",
    },
    {
      word: "etwas übrighaben/überhaben",
      turkish: "burada: artık olarak/tüm harcamalardan sonra hala mevcut olmak",
      germanSentence: "Nach den Kosten hatte er noch etwas Geld übrig.",
    },
    {
      word: "etwas erzielen",
      turkish: "bir şey elde etmek",
      germanSentence: "Das Team erzielte einen großen Erfolg.",
    },
    {
      word: "vorkommen",
      turkish: "olmak, meydana gelmek",
      germanSentence: "Solche Probleme kommen oft vor.",
    },
    {
      word: "jemanden erwischen",
      turkish:
        "birini yasak/gizli bir şey yaparken yakalamak, burada ünlem olarak: tam doğru kişiye soruyorsun, tam isabet, bingo",
      germanSentence: "Du hast mich erwischt, ich kenne die Antwort!",
    },
    {
      word: "die Erfüllung, en",
      turkish: "burada: yaşam anlamı",
      germanSentence: "Seine Arbeit ist für ihn eine große Erfüllung.",
    },
    {
      word: "die Unterlage, n (meist im Plural)",
      turkish: "belge, dosya, kağıt",
      germanSentence:
        "Ich habe alle Unterlagen für die Präsentation vorbereitet.",
    },
    {
      word: "der Umstieg, e",
      turkish: "geçiş, değişim",
      germanSentence: "Der Umstieg auf erneuerbare Energien ist wichtig.",
    },
    {
      word: "vielversprechend",
      turkish: "umut verici",
      germanSentence: "Das neue Projekt ist sehr vielversprechend.",
    },
    {
      word: "anlangen",
      turkish: "bir hedefe varmak",
      germanSentence: "Das Schiff wird bald im Hafen anlangen.",
    },
    {
      word: "überwältigt",
      turkish: "(çok) güçlü bir şekilde etkilenmiş",
      germanSentence: "Sie war von der Schönheit der Landschaft überwältigt.",
    },
    {
      word: "etwas kreieren",
      turkish: "bir şeyi yaratmak/icat etmek/tasarlamak",
      germanSentence: "Er hat ein neues Kunstwerk kreiert.",
    },
    {
      word: "als etwas dienen",
      turkish: "belirli bir amacı yerine getirmek, kullanılmak",
      germanSentence: "Das Buch dient als Leitfaden für Anfänger.",
    },
    {
      word: "umsetzbar",
      turkish: "mümkün, yapılabilir, gerçekleştirilebilir",
      germanSentence: "Der Plan ist durchaus umsetzbar.",
    },
    {
      word: "drumrumkommen",
      turkish: "bir şeyden kaçınmak, hoş olmayan bir şeyden kaçabilmek",
      germanSentence: "Ich konnte dem Gespräch leider nicht drumrumkommen.",
    },
    {
      word: "etwas bereichern",
      turkish: "bir şeyi iyileştirmek, ayrıca: bir şeyi büyütmek",
      germanSentence: "Seine Ideen haben das Projekt bereichert.",
    },
    {
      word: "vorgefertigt",
      turkish: "burada: önceden yazılmış",
      germanSentence: "Die Antworten waren vorgefertigt und wenig spontan.",
    },
    {
      word: "etwas wegdenken",
      turkish: "bir şeyi mevcut değilmiş gibi düşünmek (çoğunlukla olumsuzda)",
      germanSentence: "Man kann das Internet heute nicht mehr wegdenken.",
    },
    {
      word: "etwas wagen",
      turkish: "bir şeye cesaret etmek, bir şeyden korkmamak, risk almak",
      germanSentence: "Er wagte es, seine Meinung offen zu sagen.",
    },
    // Adding entries from the question list
    {
      word: "Auslandsaufenthalt",
      turkish: "yurtdışı konaklama",
      germanSentence:
        "Ein Auslandsaufenthalt hat meine Sprachkenntnisse verbessert.",
    },
    {
      word: "fließend, praktisch, motiviert",
      turkish: "akıcı, pratik, motive",
      germanSentence:
        "Ein idealer Sprachlerner ist fließend, praktisch und motiviert.",
    },
    {
      word: "sprachliche Hindernisse",
      turkish: "dil engelleri",
      germanSentence:
        "Die sprachlichen Hindernisse haben sie nicht aufgehalten.",
    },
    {
      word: "Fehler machen",
      turkish: "hata yapmak",
      germanSentence: "Wer Fehler macht, lernt die Sprache besser.",
    },
    {
      word: "die Angst vor Fehlern",
      turkish: "hata yapma korkusu",
      germanSentence: "Die Angst vor Fehlern kann das Sprechen hemmen.",
    },
    {
      word: "ängstlich, verständlich",
      turkish: "korkulu, anlaşılır",
      germanSentence:
        "Er war ängstlich, aber seine Erklärungen waren verständlich.",
    },
    {
      word: "das Selbstbewusstsein",
      turkish: "özgüven",
      germanSentence: "Sein Selbstbewusstsein beim Sprechen ist beeindruckend.",
    },
    {
      word: "auf etwas eingehen",
      turkish: "bir konuya değinmek/ele almak",
      germanSentence: "Ich möchte auf dieses Thema näher eingehen.",
    },
    {
      word: "ein elementarer Teil",
      turkish: "temel bir parça",
      germanSentence: "Fehler sind ein elementarer Teil des Lernprozesses.",
    },
    {
      word: "eine Art Schockstarre",
      turkish: "şok ve hareketsizlik durumu",
      germanSentence: "Nach der Nachricht war er in einer Art Schockstarre.",
    },
    {
      word: "auf welchem Niveau",
      turkish: "hangi seviyede",
      germanSentence: "Auf welchem Niveau sprichst du die Sprache?",
    },
    {
      word: "dadurch allerdings",
      turkish: "bununla birlikte, kısıtlayıcı veya şaşırtıcı bir sonuç olarak",
      germanSentence: "Dadurch allerdings hat sich die Situation verändert.",
    },
    {
      word: "betrifft",
      turkish: "ilgili olmak, alakalı olmak",
      germanSentence: "Diese Regel betrifft alle Mitarbeiter.",
    },
    {
      word: "ansprichst",
      turkish: "konuşuyorsun, değiniyorsun",
      germanSentence: "Was sprichst du in deinem Vortrag an?",
    },
    {
      word: "Passiv (Leideform) im Präsens",
      turkish: "şimdiki zamanda edilgen yapı",
      germanSentence: "Die Studie wird von Experten durchgeführt.",
    },
    {
      word: "derjenige",
      turkish: "özel vurgu için işaret zamiri",
      germanSentence: "Derjenige, der übt, wird besser.",
    },
    {
      word: "diejenige",
      turkish: "dişil akkusativ işaret zamiri",
      germanSentence: "Ich habe diejenige Person getroffen, die du meinst.",
    },
    {
      word: "übrigens",
      turkish: "ek bilgi verirken/konu değiştirirken",
      germanSentence: "Übrigens, ich habe morgen frei.",
    },
    {
      word: "eine Beziehung eingehen",
      turkish: "bir ilişkiye girmek",
      germanSentence: "Sie haben beschlossen, eine Beziehung einzugehen.",
    },
    {
      word: "Zeit investieren",
      turkish: "zaman harcamak",
      germanSentence: "Zeit investieren führt zu großen Fortschritten.",
    },
    {
      word: "das Wohlbefinden",
      turkish: "iyi oluş, esenlik",
      germanSentence: "Das Wohlbefinden der Mitarbeiter ist wichtig.",
    },
    {
      word: "unbeschwert leben",
      turkish: "sıkıntısız, tasasız yaşamak",
      germanSentence: "Sie möchte unbeschwert leben.",
    },
    {
      word: "eine Vorsorgeuntersuchung machen",
      turkish: "önleyici muayene yaptırmak",
      germanSentence: "Ich habe eine Vorsorgeuntersuchung gemacht.",
    },
    {
      word: "einschränken",
      turkish: "sınırlamak",
      germanSentence: "Wir müssen unsere Ausgaben einschränken.",
    },
    {
      word: "beschwerdefrei",
      turkish: "ağrısız",
      germanSentence: "Nach der Behandlung war er beschwerdefrei.",
    },
    {
      word: "vernachlässigen",
      turkish: "ihmal etmek",
      germanSentence: "Man darf die Gesundheit nicht vernachlässigen.",
    },
    {
      word: "Zeitfresser",
      turkish: "zaman yiyici",
      germanSentence: "Soziale Medien sind echte Zeitfresser.",
    },
    {
      word: "Prokrastination",
      turkish: "erteleme alışkanlığı",
      germanSentence: "Prokrastination hindert ihn am Fortschritt.",
    },
    {
      word: "die Bildschirmzeit begrenzen",
      turkish: "ekran süresini sınırlamak",
      germanSentence:
        "Eltern sollten die Bildschirmzeit ihrer Kinder begrenzen.",
    },
    {
      word: "durchlesen",
      turkish: "baştan sona dikkatlice okumak",
      germanSentence: "Bitte lies den Vertrag gründlich durch.",
    },
    {
      word: "sich umstellen",
      turkish: "bir şeye adapte olmak, alışmak",
      germanSentence: "Er musste sich auf die neue Arbeitsweise umstellen.",
    },
    {
      word: "Abstand halten",
      turkish: "mesafe bırakmak, uzak durmak",
      germanSentence: "Bitte haltet Abstand zueinander.",
    },
    {
      word: "Stressphasen",
      turkish: "stresli dönemler",
      germanSentence: "In Stressphasen braucht er Ruhe.",
    },
    {
      word: "Stressbewältigung",
      turkish: "stresle başa çıkma",
      germanSentence: "Stressbewältigung ist ein wichtiges Thema.",
    },
    {
      word: "bewährte Techniken",
      turkish: "kanıtlanmış, denenmiş teknikler",
      germanSentence: "Er nutzt bewährte Techniken zur Entspannung.",
    },
    {
      word: "handyfrei verbringen",
      turkish: "telefonsuz zaman geçirmek",
      germanSentence: "Ich versuche, den Abend handyfrei zu verbringen.",
    },
    {
      word: "ein analoger Wecker",
      turkish: "geleneksel çalar saat",
      germanSentence: "Ich benutze einen analogen Wecker statt meines Handys.",
    },
    {
      word: "Benachrichtigungen ausschalten",
      turkish: "bildirimleri kapatmak",
      germanSentence:
        "Ich habe die Benachrichtigungen ausgeschaltet, um mich zu konzentrieren.",
    },
    {
      word: "Schafwolle",
      turkish: "koyun yünü",
      germanSentence: "Der Pullover ist aus Schafwolle gemacht.",
    },
    {
      word: "Baumwolle",
      turkish: "pamuk",
      germanSentence: "Ich bevorzuge Kleidung aus Baumwolle.",
    },
    {
      word: "einen Kurs belegen",
      turkish: "kursa kaydolmak",
      germanSentence: "Sie hat einen Sprachkurs belegt.",
    },
    {
      word: "Aussagen belegen",
      turkish: "söylediklerini kanıtlamak",
      germanSentence: "Er konnte seine Aussagen mit Fakten belegen.",
    },
    {
      word: "wie hat das geklappt?",
      turkish: "nasıl oldu?/nasıl sonuçlandı?",
      germanSentence: "Wie hat das geklappt, hast du die Prüfung bestanden?",
    },
    {
      word: "das ist jetzt Geschichte",
      turkish: "artık geçmişte kaldı",
      germanSentence: "Die alten Probleme sind jetzt Geschichte.",
    },
    {
      word: "Mhh, clever!",
      turkish: "hımm, zekice!",
      germanSentence: "Mhh, clever! Das ist eine gute Idee.",
    },
    {
      word: "teilweise",
      turkish: "kısmen, yer yer",
      germanSentence: "Das Projekt ist teilweise abgeschlossen.",
    },
    {
      word: "insbesondere",
      turkish: "özellikle, bilhassa",
      germanSentence: "Insbesondere die Jugend ist betroffen.",
    },
    {
      word: "profitieren von",
      turkish: "faydalanmak, yararlanmak",
      germanSentence: "Wir profitieren von der neuen Technologie.",
    },
    {
      word: "ein überzeugter Demokrat",
      turkish: "demokrasiyi kesinlikle savunan kişi",
      germanSentence:
        "Er ist ein überzeugter Demokrat und kämpft für Freiheit.",
    },
    {
      word: "durch ein Tief gehen",
      turkish: "kötü dönem/çöküş yaşamak",
      germanSentence:
        "Sie musste durch ein Tief gehen, hat aber nicht aufgegeben.",
    },
    {
      word: "Selbstfürsorge",
      turkish: "öz bakım",
      germanSentence: "Selbstfürsorge ist wichtig für die mentale Gesundheit.",
    },
    {
      word: "prokrastiniert",
      turkish: "erteleme hastalığına kapılmak",
      germanSentence: "Er prokrastiniert oft und schiebt Aufgaben auf.",
    },
    {
      word: "überzeugt",
      turkish: "ikna edilmiş",
      germanSentence: "Ich habe ihn überzeugt, mitzukommen.",
    },
    {
      word: "begeistert sein",
      turkish: "çok hevesli, etkilenmiş olmak",
      germanSentence: "Sie ist begeistert von der neuen Stadt.",
    },
    {
      word: "unbedingt",
      turkish: "kesinlikle, mutlaka",
      germanSentence: "Das musst du unbedingt ausprobieren!",
    },
    {
      word: "aufregend",
      turkish: "heyecan verici",
      germanSentence: "Das Abenteuer war wirklich aufregend.",
    },
    {
      word: "überreden",
      turkish: "ikna etmek",
      germanSentence: "Ich habe sie überredet, mitzukommen.",
    },
    {
      word: "sich entscheiden",
      turkish: "karar vermek",
      germanSentence: "Ich musste mich schnell entscheiden.",
    },
    {
      word: "entschlossen",
      turkish: "kararlı, azimli",
      germanSentence: "Er ist entschlossen, sein Ziel zu erreichen.",
    },
    {
      word: "anstrengend",
      turkish: "yorucu",
      germanSentence: "Der Tag war wirklich anstrengend.",
    },
    {
      word: "herausfordernd",
      turkish: "zorlu, meydan okuyan",
      germanSentence: "Die Aufgabe war herausfordernd, aber spannend.",
    },
    {
      word: "grundlegend",
      turkish: "temel, önemli",
      germanSentence: "Das ist eine grundlegende Regel in der Sprache.",
    },
    {
      word: "gendern",
      turkish: "cinsiyetçi olmayan dil kullanımı",
      germanSentence: "Viele Medienhäuser gendern inzwischen ihre Texte.",
    },
    {
      word: "ausgeschlossen fühlen",
      turkish: "dışlanmış hissetmek",
      germanSentence: "Er fühlte sich in der Gruppe ausgeschlossen.",
    },
    {
      word: "verfassen",
      turkish: "yazmak",
      germanSentence: "Sie hat einen Artikel für die Zeitung verfasst.",
    },
    {
      word: "thematisieren",
      turkish: "gündeme getirmek",
      germanSentence: "Wir müssen dieses Problem endlich thematisieren.",
    },
    {
      word: "formulieren",
      turkish: "ifade etmek, oluşturmak",
      germanSentence: "Er hat seine Gedanken klar formuliert.",
    },
    {
      word: "auswandern",
      turkish: "göç etmek, yurt dışına taşınmak",
      germanSentence: "Sie plant, nach Kanada auszuwandern.",
    },
    {
      word: "es hat geklappt",
      turkish: "oldu! başardı! yolunda gitti!",
      germanSentence: "Hurra, es hat geklappt!",
    },
    {
      word: "die Grundlagen lernen",
      turkish: "temelleri, esasları öğrenmek",
      germanSentence: "Ich muss zuerst die Grundlagen lernen.",
    },
    {
      word: "eine Debatte",
      turkish: "tartışma, münazara",
      germanSentence: "Die Debatte über Umweltpolitik war hitzig.",
    },
    {
      word: "diskutieren",
      turkish: "tartışmak",
      germanSentence: "Wir haben lange über das Thema diskutiert.",
    },
    {
      word: "kohärent",
      turkish: "tutarlı, uyumlu",
      germanSentence: "Sein Vortrag war klar und kohärent.",
    },
    {
      word: "konsequent handeln",
      turkish: "tutarlı, kararlı davranmak",
      germanSentence: "Man muss konsequent handeln, um Erfolg zu haben.",
    },
    {
      word: "inkohärent",
      turkish: "tutarsız, dağınık, çelişkili",
      germanSentence: "Seine Argumente waren leider inkohärent.",
    },
    {
      word: "umständlich",
      turkish: "zahmetli, karmaşık",
      germanSentence: "Die Erklärung war sehr umständlich.",
    },
    {
      word: "sich etablieren",
      turkish: "yerleşmek, kendini kabul ettirmek",
      germanSentence: "Das Unternehmen hat sich schnell etabliert.",
    },
    {
      word: "der Albtraum",
      turkish: "kâbus",
      germanSentence: "Ich hatte letzte Nacht einen Albtraum.",
    },
    {
      word: "einen schrecklichen Albtraum haben",
      turkish: "korkunç kâbus görmek",
      germanSentence: "Sie hatte einen schrecklichen Albtraum.",
    },
    {
      word: "die Umwelt schonen",
      turkish: "çevreyi korumak",
      germanSentence: "Wir sollten die Umwelt schonen.",
    },
    {
      word: "den Müll trennen",
      turkish: "çöpü ayırmak, sınıflandırmak",
      germanSentence: "In Deutschland muss man den Müll trennen.",
    },
    {
      word: "verweigern",
      turkish: "reddetmek",
      germanSentence: "Er hat die Teilnahme verweigert.",
    },
    {
      word: "CO2-Fußabdruck",
      turkish: "karbon ayak izi",
      germanSentence: "Wir versuchen, unseren CO2-Fußabdruck zu reduzieren.",
    },
    {
      word: "erneuerbare Energien",
      turkish: "yenilenebilir enerji kaynakları",
      germanSentence: "Erneuerbare Energien sind die Zukunft.",
    },
    {
      word: "eine Naturschutzorganisation",
      turkish: "doğayı korumayı amaçlayan kurum",
      germanSentence: "Sie arbeitet für eine Naturschutzorganisation.",
    },
    {
      word: "die Auswirkungen abschwächen",
      turkish: "etkileri hafifletmek, azaltmak",
      germanSentence:
        "Wir müssen die Auswirkungen des Klimawandels abschwächen.",
    },
    {
      word: "Bewusstsein schaffen",
      turkish: "farkındalık yaratmak",
      germanSentence: "Die Kampagne soll Bewusstsein schaffen.",
    },
    {
      word: "sich für etwas einsetzen",
      turkish: "bir şey için çaba göstermek, desteklemek",
      germanSentence: "Sie setzt sich für Tierrechte ein.",
    },
    {
      word: "sich an die Umgebung anpassen",
      turkish: "uyum sağlamak",
      germanSentence: "Er hat sich schnell an die neue Umgebung angepasst.",
    },
    {
      word: "etwas voraussagen",
      turkish: "önceden tahmin etmek",
      germanSentence: "Niemand konnte den Erfolg voraussagen.",
    },
    {
      word: "außergewöhnlich",
      turkish: "sıradışı",
      germanSentence: "Sein Talent ist außergewöhnlich.",
    },
    {
      word: "Fast Fashion",
      turkish: "hızlı moda (trend kıyafetlerin hızla üretilmesi)",
      germanSentence: "Fast Fashion schadet der Umwelt.",
    },
    {
      word: "Fair Fashion",
      turkish: "adil/sürdürülebilir moda",
      germanSentence: "Ich kaufe nur Fair Fashion.",
    },
    {
      word: "Ressourcenverschwendung",
      turkish: "kaynak israfı",
      germanSentence: "Ressourcenverschwendung ist ein großes Problem.",
    },
    {
      word: "eine Textilfabrik",
      turkish: "tekstil fabrikası",
      germanSentence: "Die Textilfabrik produziert nachhaltige Kleidung.",
    },
    {
      word: "das Grundwasser verschmutzen",
      turkish: "yeraltı suyunu kirletmek",
      germanSentence: "Industrieabfälle können das Grundwasser verschmutzen.",
    },
    {
      word: "Hygienevorschriften einhalten",
      turkish: "hijyen kurallarına uymak",
      germanSentence:
        "In der Küche müssen Hygienevorschriften eingehalten werden.",
    },
    {
      word: "Lebensbedingungen",
      turkish: "yaşam koşulları",
      germanSentence: "Die Lebensbedingungen in der Stadt sind gut.",
    },
    {
      word: "beeinflusst werden",
      turkish: "etkilenmek",
      germanSentence: "Er wurde stark von seiner Familie beeinflusst.",
    },
    {
      word: "die Rettung",
      turkish: "kurtarma, kurtuluş",
      germanSentence: "Die Rettung der Tiere war erfolgreich.",
    },
    {
      word: "die Kandidaten",
      turkish: "adaylar",
      germanSentence: "Die Kandidaten bereiten sich auf die Wahl vor.",
    },
    {
      word: "Prioritäten setzen",
      turkish: "öncelikler belirlemek",
      germanSentence: "Wir müssen klare Prioritäten setzen.",
    },
    {
      word: "jemanden aufklären",
      turkish: "birisini bilgilendirmek, aydınlatmak",
      germanSentence: "Ich habe ihn über die neuen Regeln aufgeklärt.",
    },
    {
      word: "die Aufklärung",
      turkish: "bilinçlendirme, bilgilendirme",
      germanSentence: "Die Aufklärung über Klimawandel ist wichtig.",
    },
    {
      word: "die Schornsteine",
      turkish: "bacalar",
      germanSentence: "Die Schornsteine der Fabrik rauchen.",
    },
    {
      word: "eingehalten werden",
      turkish: "(kurallara) uyulmak",
      germanSentence: "Die Vorschriften müssen eingehalten werden.",
    },
    {
      word: "seit Neuestem",
      turkish: "yakın zamandan beri/artık",
      germanSentence: "Seit Neuestem arbeitet er von zu Hause aus.",
    },
    {
      word: "vernünftig",
      turkish: "mantıklı, makul",
      germanSentence: "Seine Entscheidung war sehr vernünftig.",
    },
    {
      word: "komplex",
      turkish: "karmaşık",
      germanSentence: "Das Problem ist ziemlich komplex.",
    },
    {
      word: "dringend",
      turkish: "acil",
      germanSentence: "Wir brauchen dringend eine Lösung.",
    },
    {
      word: "schnell",
      turkish: "hızlı",
      germanSentence: "Er rennt sehr schnell.",
    },
    {
      word: "bemerkenswert",
      turkish: "dikkate değer",
      germanSentence: "Das Ergebnis ist wirklich bemerkenswert.",
    },
    {
      word: "Urlaubmachen mit etwas verbinden",
      turkish: "tatili bir şeyle ilişkilendirmek",
      germanSentence: "Ich verbinde Urlaubmachen mit Entspannung.",
    },
    {
      word: "eine Region erkunden",
      turkish: "bir bölgeyi keşfetmek",
      germanSentence: "Wir haben die Region zu Fuß erkundet.",
    },
    {
      word: "Fernreisen unternehmen",
      turkish: "uzak seyahatlere çıkmak",
      germanSentence: "Er liebt es, Fernreisen zu unternehmen.",
    },
    {
      word: "andere Länder bereisen",
      turkish: "başka ülkeleri gezmek, dolaşmak",
      germanSentence: "Sie hat viele andere Länder bereist.",
    },
    {
      word: "neue Kulturen kennenlernen",
      turkish: "yeni kültürleri tanımak",
      germanSentence: "Reisen hilft, neue Kulturen kennenzulernen.",
    },
    {
      word: "Urlaub verbringen",
      turkish: "tatil (zaman) geçirmek",
      germanSentence: "Wir verbringen den Urlaub am Meer.",
    },
    {
      word: "sich erholen",
      turkish: "dinlenmek",
      germanSentence: "Nach der Arbeit muss ich mich erholen.",
    },
    {
      word: "sich die Frage stellen",
      turkish: "kendine soru sormak",
      germanSentence: "Ich stelle mir die Frage, ob das richtig ist.",
    },
    {
      word: "etwas ermöglichen",
      turkish: "mümkün kılmak",
      germanSentence: "Die Technologie ermöglicht neue Arbeitsweisen.",
    },
    {
      word: "weite Strecken zurücklegen",
      turkish: "uzun mesafeleri katetmek",
      germanSentence: "Er legt täglich weite Strecken mit dem Fahrrad zurück.",
    },
    {
      word: "Billigflieger angeboten werden",
      turkish: "ucuz uçuşların sunulması",
      germanSentence: "Viele Billigflieger werden jetzt angeboten.",
    },
    {
      word: "Heimweh spüren",
      turkish: "memleket hasreti hissetmek",
      germanSentence: "Im Ausland spürte sie oft Heimweh.",
    },
    {
      word: "von etwas geprägt sein",
      turkish: "bir şeyden etkilenmek, şekillendirilmek",
      germanSentence: "Seine Kindheit war von Armut geprägt.",
    },
    {
      word: "die Neugier",
      turkish: "merak",
      germanSentence: "Ihre Neugier trieb sie zu neuen Abenteuern.",
    },
    {
      word: "die Reiselust",
      turkish: "seyahat arzusu",
      germanSentence: "Die Reiselust hat ihn um die Welt geführt.",
    },
    {
      word: "das Verlangen",
      turkish: "arzu, özlem, istek",
      germanSentence: "Sein Verlangen nach Freiheit war groß.",
    },
    {
      word: "die Entdeckung",
      turkish: "keşif",
      germanSentence: "Die Entdeckung neuer Kulturen fasziniert ihn.",
    },
    {
      word: "die Entwicklung",
      turkish: "gelişim",
      germanSentence: "Die Entwicklung der Technologie ist beeindruckend.",
    },
    {
      word: "das Verständnis entwickeln",
      turkish: "anlayış geliştirmek",
      germanSentence: "Durch Reisen kann man Verständnis entwickeln.",
    },
    {
      word: "der Gegensatz",
      turkish: "zıtlık, karşıtlık",
      germanSentence: "Der Gegensatz zwischen Stadt und Land ist groß.",
    },
    {
      word: "die Einstellung",
      turkish: "tutum, bakış açısı",
      germanSentence: "Seine Einstellung zum Leben ist positiv.",
    },
    {
      word: "neugierig sein",
      turkish: "meraklı olmak",
      germanSentence: "Sie ist immer neugierig auf neue Kulturen.",
    },
    {
      word: "einfach und unkompliziert",
      turkish: "kolay ve karmaşık olmayan",
      germanSentence: "Das System ist einfach und unkompliziert.",
    },
    {
      word: "prägnant",
      turkish: "özlü, anlam yüklü",
      germanSentence: "Sein Vortrag war kurz und prägnant.",
    },
    {
      word: "entspannt fühlen",
      turkish: "rahatlamış hissetmek",
      germanSentence: "Nach dem Urlaub fühle ich mich entspannt.",
    },
    {
      word: "bequem werden",
      turkish: "rahatına düşkün, konforuna alışmış olmak",
      germanSentence: "Er ist im Homeoffice bequem geworden.",
    },
    {
      word: "ein günstiges Flugticket",
      turkish: "ucuz uçak bileti",
      germanSentence:
        "Ich habe ein günstiges Flugticket nach Istanbul gefunden.",
    },
    {
      word: "interkulturell",
      turkish: "kültürler arası",
      germanSentence: "Interkulturelle Kompetenz ist heutzutage wichtig.",
    },
    {
      word: "persönliche Bedeutung",
      turkish: "kişisel anlam",
      germanSentence: "Das Buch hat für mich persönliche Bedeutung.",
    },
    {
      word: "zugeben",
      turkish: "itiraf etmek, kabul etmek",
      germanSentence: "Er musste zugeben, dass er falsch lag.",
    },
    {
      word: "herzlich willkommen",
      turkish: "içtenlikle hoş geldiniz (selamlama)",
      germanSentence: "Herzlich willkommen zu unserem Podcast!",
    },
    {
      word: "tatsächlich Expertin",
      turkish: "gerçekten uzman (saptama/tespit)",
      germanSentence: "Du bist tatsächlich Expertin für Sprachen.",
    },
    {
      word: "Rückfrage",
      turkish: "açıklığa kavuşturma sorusu",
      germanSentence:
        "Wie sieht so eine Prüfung aus? - Das ist eine Rückfrage.",
    },
    {
      word: "Smalltalk",
      turkish: "ortamı yumuşatmak için yapılan kısa, gündelik konuşma",
      germanSentence: "Vor der Besprechung machten wir etwas Smalltalk.",
    },
    {
      word: "weitgehend",
      turkish: "büyük ölçüde, genel olarak",
      germanSentence: "Die Regeln sind weitgehend standardisiert.",
    },
    {
      word: "sich für etwas entscheiden",
      turkish: "bir şeye karar vermek / seçmek",
      germanSentence: "Ich habe mich für das Thema entschieden.",
    },
    {
      word: "bestehen aus",
      turkish: "-dan/-den oluşmak",
      germanSentence: "Der Vortrag besteht aus drei Teilen.",
    },
    {
      word: "im Anschluss",
      turkish: "ardından, sonrasında",
      germanSentence: "Im Anschluss sprechen wir über die Ergebnisse.",
    },
    {
      word: "zustimmen",
      turkish: "tam katılma/onaylama",
      germanSentence: "Ich kann dir nur zustimmen.",
    },
    {
      word: "widersprechen",
      turkish: "itiraz etme, karşı çıkma",
      germanSentence: "Ich muss dir leider widersprechen.",
    },
    {
      word: "erinnern und aufmerksam machen",
      turkish: "hatırlatma ve dikkat çekme",
      germanSentence: "Man darf nicht vergessen, die Nachteile zu erwähnen.",
    },
    {
      word: "unterbrechen",
      turkish: "sözünü kesmek",
      germanSentence: "Darf ich dich kurz unterbrechen?",
    },
    {
      word: "einen anderen Standpunkt haben",
      turkish: "farklı bir görüşte olma",
      germanSentence: "In diesem Punkt habe ich einen anderen Standpunkt.",
    },
    {
      word: "verzichten auf",
      turkish: "vazgeçmek",
      germanSentence: "Wir können auf deine Hilfe nicht verzichten.",
    },
    {
      word: "entsprechen",
      turkish: "uygun olmak, örtüşmek",
      germanSentence: "Das entspricht nicht meinen Erwartungen.",
    },
    {
      word: "anführen",
      turkish: "örnek vermek",
      germanSentence: "Ich kann dazu ein Beispiel anführen.",
    },
    {
      word: "die meiste Zeit",
      turkish: "çoğunlukla, büyük bölümü",
      germanSentence: "Die meiste Zeit arbeitet sie allein.",
    },
    {
      word: "ab und zu",
      turkish: "ara sıra, zaman zaman",
      germanSentence: "Ich gehe ab und zu joggen.",
    },
    {
      word: "vorschlagen",
      turkish: "öneri sunmak",
      germanSentence: "Laura schlägt einen Ausflug vor.",
    },
    {
      word: "sich bemühen",
      turkish: "çaba göstermek, çabalamak",
      germanSentence: "Sie bemüht sich um eine bessere Balance.",
    },
    {
      word: "empfehlen",
      turkish: "önermek, tavsiye etmek",
      germanSentence: "Ich empfehle dir dieses Buch.",
    },
    {
      word: "die Einladung akzeptieren",
      turkish: "daveti kabul etmek",
      germanSentence: "Julia akzeptiert die Einladung gerne.",
    },
    {
      word: "beginnen",
      turkish: "başlamak",
      germanSentence: "Leon hat sein Studium begonnen.",
    },
    {
      word: "genießen",
      turkish: "keyfini çıkarmak",
      germanSentence: "Laura hat die freie Zeit genossen.",
    },
    {
      word: "Kontakt verlieren",
      turkish: "teması kaybetmek",
      germanSentence: "Er hat den Kontakt zu seinen Freunden verloren.",
    },
    {
      word: "als",
      turkish: "zaman belirtir",
      germanSentence: "Er begann sein Studium, als die Pandemie anfing.",
    },
    {
      word: "durch",
      turkish: "sayesinde, -den dolayı",
      germanSentence: "Durch das Homeoffice hat sie mehr Zeit.",
    },
    {
      word: "über",
      turkish: "üzerinden, vasıtasıyla",
      germanSentence: "Er bleibt über Social Media in Kontakt.",
    },
    {
      word: "anpassungsfähig",
      turkish: "uyum sağlayabilen, esnek",
      germanSentence: "Im Homeoffice muss man anpassungsfähig sein.",
    },
    {
      word: "wesentliche",
      turkish: "temel, asıl",
      germanSentence: "Eine wesentliche Herausforderung ist die Konzentration.",
    },
    {
      word: "durchführen",
      turkish: "gerçekleştirmek, yapmak",
      germanSentence: "Die Studie wurde von Experten durchgeführt.",
    },
    {
      word: "beibehalten",
      turkish: "sürdürmek, devam ettirmek",
      germanSentence: "Wir möchten die 4-Tage-Woche beibehalten.",
    },
    {
      word: "gesunken",
      turkish: "azalmış",
      germanSentence: "Die Zahl der Krankheitstage ist gesunken.",
    },
    {
      word: "das Pilotprojekt",
      turkish: "zaman sınırlı bir test projesi",
      germanSentence: "Das Pilotprojekt war ein großer Erfolg.",
    },
    {
      word: "der Fachkräftemangel",
      turkish: "nitelikli iş gücü eksikliği",
      germanSentence: "Der Fachkräftemangel ist ein großes Problem.",
    },
    {
      word: "das Pendeln",
      turkish: "ev ile iş yeri arasında düzenli seyahat",
      germanSentence: "Das Pendeln nimmt viel Zeit in Anspruch.",
    },
    {
      word: "der Einkommensverlust",
      turkish: "gelir kaybı",
      germanSentence: "Viele fürchten einen Einkommensverlust.",
    },
    {
      word: "vereinfacht",
      turkish: "kolaylaştırdı",
      germanSentence: "Das Internet hat die Kommunikation vereinfacht.",
    },
    {
      word: "unverzichtbar",
      turkish: "vazgeçilmez",
      germanSentence: "Das Internet ist unverzichtbar geworden.",
    },
    {
      word: "wagen",
      turkish: "cesaret etmek, göze almak",
      germanSentence: "Er wagte es, ein neues Unternehmen zu gründen.",
    },
    {
      word: "recherchieren",
      turkish: "araştırma yapmak",
      germanSentence: "Ich muss noch mehr Informationen recherchieren.",
    },
    {
      word: "kommunizieren",
      turkish: "iletişim kurmak",
      germanSentence: "Wir kommunizieren täglich über E-Mail.",
    },
    {
      word: "sich etwas vorstellen",
      turkish: "bir şeyi hayal etmek",
      germanSentence: "Ich kann mir das Leben ohne Internet nicht vorstellen.",
    },
    {
      word: "die",
      turkish: "dişil zamir (Kindheit için)",
      germanSentence:
        "Laura erinnert sich an ihre Kindheit, die sie ohne Internet verbracht hat.",
    },
    {
      word: "der",
      turkish: "eril zamir (Zeit için)",
      germanSentence: "Leon denkt an eine Zeit, in der es kein Internet gab.",
    },
    {
      word: "das",
      turkish: "nötr zamir (Experiment için)",
      germanSentence:
        "Simon schlägt ein Experiment vor, das ohne Internet stattfinden soll.",
    },
    {
      word: "ortsunabhängig",
      turkish: "mekândan bağımsız",
      germanSentence: "Digitale Nomaden arbeiten ortsunabhängig.",
    },
    {
      word: "sich betrachten als",
      turkish: "kendini ... olarak görmek",
      germanSentence: "Laura betrachtet sich nicht als digitale Nomadin.",
    },
    {
      word: "einig sein",
      turkish: "hemfikir olmak",
      germanSentence: "Beide sind sich über die Lösung einig.",
    },
    {
      word: "stabile",
      turkish: "sabit, kararlı",
      germanSentence: "Eine stabile Internetverbindung ist entscheidend.",
    },
    {
      word: "konstante",
      turkish: "sürekli, sabit",
      germanSentence: "Das konstante Umherreisen ist anstrengend.",
    },
    {
      word: "unabhängige",
      turkish: "bağımsız (çoğul akkusativ)",
      germanSentence: "Viele schätzen unabhängige Lebensstile.",
    },
    {
      word: "Wohnsitz",
      turkish: "ikamet yeri, adres",
      germanSentence: "Digitale Nomaden haben oft keinen festen Wohnsitz.",
    },
    {
      word: "Infrastruktur",
      turkish: "altyapı",
      germanSentence: "Die lokale Infrastruktur muss verbessert werden.",
    },
    {
      word: "erläutern",
      turkish: "açıklamak, izah etmek",
      germanSentence: "Sie erläutert die Unterschiede klar.",
    },
    {
      word: "fasziniert",
      turkish: "etkilenmiş, büyülenmiş",
      germanSentence: "Julia ist von den Möglichkeiten fasziniert.",
    },
    {
      word: "erschaffen",
      turkish: "yaratmak, oluşturmak",
      germanSentence: "Er hat einen digitalen Zwilling erschaffen.",
    },
    {
      word: "aufnehmen",
      turkish: "kaydetmek",
      germanSentence: "Wir wollen einen Podcast aufnehmen.",
    },
    {
      word: "zur Verfügung stellen",
      turkish: "sağlamak, sunmak",
      germanSentence: "Die Firma stellt uns die Daten zur Verfügung.",
    },
    {
      word: "Einfluss haben auf",
      turkish: "üzerinde etki yapmak",
      germanSentence: "Die Entscheidung hat Einfluss auf unser Leben.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTurkish, setShowTurkish] = useState(false);
  const [showGermanSentence, setShowGermanSentence] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % vocabularyData.length);
    setShowTurkish(false);
    setShowGermanSentence(false);
  };

  const handleShowTurkish = () => {
    setShowTurkish(true);
  };

  const handleShowGermanSentence = () => {
    setShowGermanSentence(true);
  };

  const currentVocab = vocabularyData[currentIndex];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-4">
          Almanca Kelime Öğrenme
        </h1>

        {/* Display the German word/phrase */}
        <div className="text-lg font-semibold text-center mb-4">
          {currentVocab.word}
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-4 mb-4">
          <button
            onClick={handleShowTurkish}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Türkçe Anlam
          </button>
          <button
            onClick={handleShowGermanSentence}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Almanca Cümle
          </button>
        </div>

        {/* Display Turkish translation if clicked */}
        {showTurkish && (
          <div className="text-center text-gray-700 mb-4">
            <strong>Türkçe:</strong> {currentVocab.turkish}
          </div>
        )}

        {/* Display German sentence if clicked */}
        {showGermanSentence && (
          <div className="text-center text-gray-700">
            <strong>Almanca Cümle:</strong> {currentVocab.germanSentence}
          </div>
        )}

        {/* Next button */}
        <div className="text-center mt-4">
          <button
            onClick={handleNext}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Sonraki Kelime
          </button>
        </div>
      </div>
    </div>
  );
};

export default VocabularyCard;
