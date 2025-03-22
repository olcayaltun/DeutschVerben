const kelimeler = [
  {
    kelime: "angestellt: Çalışan, istihdam edilen",
    cümle: "Ich bin seit fünf Jahren bei dieser Firma angestellt.",
  },
  {
    kelime: "ergreifen: Ele geçirmek, başlamak (bir iş veya fırsat)",
    cümle: "Sie hat die Gelegenheit ergriffen, um ins Ausland zu gehen.",
  },
  {
    kelime: "Pendler: İşe gidip gelen kişi, günlük yolcu",
    cümle: "Viele Pendler fahren jeden Tag mit dem Zug zur Arbeit.",
  },
  {
    kelime: "Gehaltserhöhung: Maaş artışı",
    cümle: "Nach einem Jahr harter Arbeit bekam ich eine Gehaltserhöhung.",
  },
  {
    kelime: "überzeugen: İkna etmek",
    cümle: "Er konnte mich mit seinen Argumenten überzeugen.",
  },
  {
    kelime: "Forderungen: Talepler",
    cümle: "Die Arbeiter stellten neue Forderungen an die Geschäftsleitung.",
  },
  {
    kelime: "Bedingungen: Koşullar",
    cümle: "Die Arbeitsbedingungen in dieser Firma sind sehr gut.",
  },
  {
    kelime: "Auftrag: Görev, sipariş",
    cümle: "Ich habe den Auftrag bekommen, das Projekt zu leiten.",
  },
  {
    kelime: "konkreten: Somut",
    cümle: "Wir brauchen konkrete Vorschläge, um das Problem zu lösen.",
  },
  {
    kelime: "Aspekt: Yön, bakış açısı",
    cümle: "Ein wichtiger Aspekt dieses Plans ist die Zeitplanung.",
  },
  {
    kelime: "betroffen: Etkilenmiş",
    cümle: "Die betroffenen Familien erhielten Hilfe nach der Flut.",
  },
  {
    kelime: "Pflicht: Görev, zorunluluk",
    cümle: "Es ist meine Pflicht, die Arbeit pünktlich abzugeben.",
  },
  {
    kelime: "Jobsuchmaschine: İş arama motoru",
    cümle: "Ich habe meinen neuen Job über eine Jobsuchmaschine gefunden.",
  },
  {
    kelime: "Zitat: Alıntı",
    cümle: "Er begann seine Rede mit einem berühmten Zitat.",
  },
  {
    kelime: "eingeschränkt: Kısıtlanmış",
    cümle: "Wegen der Pandemie war der Zugang eingeschränkt.",
  },
  {
    kelime: "aufzählen: Saymak, sıralamak",
    cümle: "Kannst du die Vorteile dieses Plans aufzählen?",
  },
  {
    kelime: "Herausforderung: Zorluk, meydan okuma",
    cümle: "Die neue Aufgabe ist eine große Herausforderung für mich.",
  },
  {
    kelime: "Wettbewerb: Rekabet, yarışma",
    cümle: "Im Wettbewerb mit anderen Firmen müssen wir uns verbessern.",
  },
  {
    kelime: "weißt du warum: Nedenini biliyor musun?",
    cümle: "Weißt du warum er nicht zur Arbeit gekommen ist?",
  },
  {
    kelime: "Verfügung: Emir, kullanım",
    cümle: "Das Geld steht dir zur Verfügung, wenn du es brauchst.",
  },
  {
    kelime: "verhungerst: Açlıktan ölüyorsun",
    cümle: "Wenn du nichts isst, verhungerst du noch!",
  },
  {
    kelime: "Bei mir ist: Bende durum",
    cümle: "Bei mir ist alles in Ordnung, danke!",
  },
  {
    kelime: "mal so: Şöyle böyle, bir bakıma",
    cümle: "Das war mal so eine spontane Idee.",
  },
  {
    kelime: "zählen: Saymak",
    cümle: "Kannst du die Bücher auf dem Tisch zählen?",
  },
  {
    kelime: "Freizeitgestaltung: Boş zaman etkinliği",
    cümle: "Sport ist meine liebste Freizeitgestaltung.",
  },
  {
    kelime: "freien: Boş, serbest",
    cümle: "Ich habe am Wochenende freien Tag.",
  },
  {
    kelime: "belastend: Yük, stresli",
    cümle: "Die vielen Überstunden sind sehr belastend.",
  },
  {
    kelime: "bewirtet: Misafir edilmiş, ağırlanmış",
    cümle: "Die Gäste wurden mit leckeren Speisen bewirtet.",
  },
  {
    kelime: "verbringen: Geçirmek (zaman)",
    cümle: "Ich möchte den Sommer am Meer verbringen.",
  },
  {
    kelime: "Röhre: Boru",
    cümle: "Das Wasser fließt durch eine lange Röhre.",
  },
  {
    kelime: "durchsichtigem: Şeffaf",
    cümle: "Die Fenster sind aus durchsichtigem Glas gemacht.",
  },
  {
    kelime: "Schacht: Şaft, baca",
    cümle: "Der Aufzug fährt durch einen engen Schacht.",
  },
  {
    kelime: "Anlage: Tesis, sistem",
    cümle: "Die neue Anlage zur Wasseraufbereitung ist sehr modern.",
  },
  {
    kelime: "reicht: Yeter",
    cümle: "Das Geld reicht für den ganzen Monat.",
  },
  {
    kelime: "neulich: Geçenlerde",
    cümle: "Neulich habe ich einen alten Freund getroffen.",
  },
  {
    kelime: "damaligen: O zamanki",
    cümle: "Die damaligen Ereignisse waren sehr aufregend.",
  },
  {
    kelime: "Das Mittelalter: Orta Çağ",
    cümle: "Das Mittelalter war eine Zeit großer Veränderungen.",
  },
  {
    kelime: "merkwürdig: Tuhaf, garip",
    cümle: "Sein Verhalten war gestern sehr merkwürdig.",
  },
  {
    kelime: "Leidenschaft werden: Tutku haline gelmek",
    cümle: "Malen kann zu deiner Leidenschaft werden.",
  },
  {
    kelime: "Passion: Tutku",
    cümle: "Musik ist meine größte Passion.",
  },
  {
    kelime: "exzessiv: Aşırı",
    cümle: "Er treibt exzessiv Sport, fast jeden Tag.",
  },
  {
    kelime: "Bereicherung: Zenginleştirme",
    cümle: "Die Reise war eine große Bereicherung für mein Leben.",
  },
  {
    kelime: "vorzunehmen: Planlamak, yapmaya karar vermek",
    cümle: "Ich habe mir vorgenommen, mehr zu lesen.",
  },
  {
    kelime: "der inhaltliche Teil: İçerik kısmı",
    cümle: "Der inhaltliche Teil des Buches ist sehr interessant.",
  },
  {
    kelime: "sprachlichen Teil: Dil kısmı",
    cümle: "Der sprachliche Teil des Kurses war leicht zu verstehen.",
  },
  {
    kelime: "sozusagen: Adeta, bir bakıma",
    cümle: "Er ist sozusagen der Chef hier.",
  },
  {
    kelime: "Die Steigerungsform: Artırma biçimi, karşılaştırma derecesi",
    cümle: "Die Steigerungsform von 'gut' ist 'besser'.",
  },
  {
    kelime: "verlinken: Bağlantı vermek",
    cümle: "Ich werde den Artikel auf meiner Seite verlinken.",
  },
  {
    kelime: "fassen: Almak (karar), kavramak",
    cümle: "Ich habe den Vorsatz gefasst, gesünder zu leben.",
  },
  {
    kelime: "verzichten: Vazgeçmek",
    cümle: "Ich möchte auf Süßigkeiten verzichten.",
  },
  {
    kelime: "bezieht: İlgili",
    cümle: "Das Problem bezieht sich auf die Technik.",
  },
  {
    kelime: "festgestellt: Tespit edilmiş",
    cümle: "Ich habe festgestellt, dass ich mehr Schlaf brauche.",
  },
  {
    kelime: "beziehungsweise: Ya da, daha doğrusu",
    cümle: "Ich komme am Montag, beziehungsweise am Dienstag.",
  },
  {
    kelime: "abschalten: Kapatmak, rahatlamak",
    cümle: "Nach der Arbeit möchte ich einfach abschalten.",
  },
  {
    kelime: "begleitet: Eşlik eder",
    cümle: "Musik begleitet mich durch den Tag.",
  },
  {
    kelime: "erwähnt: Bahsedilmiş",
    cümle: "Das hast du gestern schon erwähnt.",
  },
  {
    kelime: "behandelt: Ele alınır, işlenir",
    cümle: "Die Lehrerin hat das Thema sehr gut behandelt.",
  },
  {
    kelime: "abläuft: Gerçekleşir, ilerler",
    cümle: "Der Unterricht läuft heute anders ab als gestern.",
  },
  {
    kelime: "vertritt: Temsil eder, savunur",
    cümle:
      "Er vertritt die Meinung, dass alle gleich behandelt werden sollten.",
  },
  {
    kelime: "bestimmte: Belirli",
    cümle: "Wir haben bestimmte Regeln, die wir befolgen müssen.",
  },
  {
    kelime: "vertrauen: Güvenmek",
    cümle: "Ich vertraue darauf, dass du die Aufgabe gut erledigst.",
  },
  {
    kelime: "Im engeren Sinne: Dar anlamda",
    cümle:
      "Im engeren Sinne bezieht sich das Wort auf die berufliche Ausbildung.",
  },
  {
    kelime: "meint man damit: Bununla kastedilen",
    cümle:
      "Wenn man von 'Fingerspitzengefühl' spricht, meint man damit Sensibilität.",
  },
  {
    kelime: "den Prozess: Süreçtir",
    cümle: "Das Lernen ist den Prozess, durch den wir Wissen erwerben.",
  },
  {
    kelime: "durch den: Ki bu süreç sayesinde",
    cümle: "Durch den Unterricht habe ich viel gelernt.",
  },
  {
    kelime: "jemand einen Beruf erlernt: Biri bir meslek öğrenir",
    cümle: "Wenn jemand einen Beruf erlernt, braucht er viel Geduld.",
  },
  {
    kelime: "also quasi: Yani adeta",
    cümle: "Der Hund führt ihn, also quasi wie ein Führer.",
  },
  {
    kelime: "eine berufliche Ausbildung: Mesleki eğitimdir",
    cümle: "Eine berufliche Ausbildung ist wichtig für die Zukunft.",
  },
  {
    kelime: "rund 330: Yaklaşık 330",
    cümle: "In Deutschland gibt es rund 330 verschiedene Ausbildungsberufe.",
  },
  {
    kelime: "Eine Mischung: Bir karışım",
    cümle: "Das Gericht ist eine Mischung aus süß und salzig.",
  },
  {
    kelime: "Diejenigen, die: Şunlar ki / o kişiler ki",
    cümle:
      "Diejenigen, die blind sind, nutzen oft ihre anderen Sinne intensiver.",
  },
  {
    kelime: "herstellen: Üretmek",
    cümle: "Die Firma stellt hochwertige Produkte her.",
  },
  {
    kelime: "erstellen: Oluşturmak",
    cümle: "Wir müssen einen Plan für das Projekt erstellen.",
  },
  {
    kelime: "erstaunlich: Şaşırtıcı",
    cümle: "Es ist erstaunlich, wie gut Tiere Gefahren spüren können.",
  },
  {
    kelime: "Gleichzeitig: Aynı anda",
    cümle: "Ich kann nicht gleichzeitig essen und sprechen.",
  },
  {
    kelime: "reinkommen: İçeri girmek",
    cümle: "Als ich ins Museum reinkam, war es ganz dunkel.",
  },
  {
    kelime: "Stoff: Kumaş, madde",
    cümle: "Der Stoff dieses Kleidungsstücks fühlt sich weich an.",
  },
  {
    kelime: "Viel Abwechslung: Çok çeşitlilik",
    cümle: "Mein Job bietet viel Abwechslung, und das gefällt mir.",
  },
  {
    kelime: "aufmerksam: Dikkatli",
    cümle: "Man muss aufmerksam sein, um die Geräusche zu unterscheiden.",
  },
  {
    kelime: "beschäftigen: Meşgul etmek, ilgilenmek",
    cümle: "Wir beschäftigen uns heute mit den fünf Sinnen.",
  },
  {
    kelime: "Missverständnisse: Yanlış anlamalar",
    cümle:
      "Manchmal gibt es Missverständnisse, wenn man nicht klar kommuniziert.",
  },
  {
    kelime: "zulässt: İzin verir",
    cümle: "Die Regel zulässt keine Ausnahmen.",
  },
  {
    kelime: "verwechselt: Karıştırır",
    cümle: "Er verwechselt oft die Wörter 'hören' und 'fühlen'.",
  },
  {
    kelime: "Also bleibt dran: O yüzden devam edin",
    cümle: "Es wird spannend, also bleibt dran!",
  },
  {
    kelime: "festgelegtes: Belirlenmiş",
    cümle: "Es gibt ein festgelegtes Programm für den Tag.",
  },
  {
    kelime: "Bescheid: Haber",
    cümle: "Gib mir bitte Bescheid, wenn du fertig bist.",
  },
  {
    kelime: "aufgefasst: Kavranmış, anlaşılmış",
    cümle: "Das Problem wurde falsch aufgefasst.",
  },
  {
    kelime: "klares: Net",
    cümle: "Wir brauchen ein klares Ziel für das Projekt.",
  },
  {
    kelime: "gemeint: Kastedilen",
    cümle: "Was genau ist mit diesem Wort gemeint?",
  },
  {
    kelime: "Verständigung: Anlayış",
    cümle: "Eine gute Kommunikation führt zur Verständigung.",
  },
  {
    kelime: "Genauigkeit: Doğruluk, kesinlik",
    cümle: "Bei dieser Aufgabe ist Genauigkeit sehr wichtig.",
  },
  {
    kelime: "auszudenken: Tasarlamak, düşünmek",
    cümle: "Es ist schwierig, sich eine neue Sprache auszudenken.",
  },
  {
    kelime: "einfällt?: Aklına gelir mi?",
    cümle: "Was fällt dir zum Thema 'Sinne' ein?",
  },
  {
    kelime: "der Knackpunkt: Kilit nokta",
    cümle: "Der Knackpunkt ist, dass wir uns einigen müssen.",
  },
  {
    kelime: "geeinigt: Uzlaşılmış",
    cümle: "Wir haben uns auf einen Plan geeinigt.",
  },
  {
    kelime: "Einheitlichkeit: Tekdüzelik, birlik",
    cümle: "Die Einheitlichkeit der Regeln ist wichtig.",
  },
  {
    kelime: "wertvoll: Değerli",
    cümle: "Diese Erfahrung ist sehr wertvoll für mich.",
  },
  {
    kelime: "begegnen: Karşılaşmak",
    cümle: "Ich begegne oft freundlichen Menschen.",
  },
  {
    kelime: "Überblick: Genel bakış",
    cümle: "Der Lehrer gibt uns einen Überblick über das Thema.",
  },
  {
    kelime: "hauptsächlich: Başlıca",
    cümle: "Wir sprechen hauptsächlich über die fünf Sinne.",
  },
  {
    kelime: "vorhin: Daha önce",
    cümle: "Vorhin haben wir über das Hören gesprochen.",
  },
  {
    kelime: "daran gewöhnen: Alışmak",
    cümle: "Mit der Zeit gewöhnt man sich daran.",
  },
  {
    kelime: "verwenden: Kullanmak",
    cümle: "Wir verwenden unsere Sinne jeden Tag.",
  },
  {
    kelime: "Mit der Zeit: Zamanla",
    cümle: "Mit der Zeit wird alles einfacher.",
  },
  {
    kelime: "beibehalten: Sürdürmek",
    cümle: "Wir sollten diese Tradition beibehalten.",
  },
  {
    kelime: "Gange: Hareket halinde",
    cümle: "Das Projekt ist jetzt richtig im Gange.",
  },
  {
    kelime:
      "Zum Schluss bleibt festzuhalten: Sonuç olarak şunu belirtmek gerekir",
    cümle: "Zum Schluss bleibt festzuhalten, dass Sinne wichtig sind.",
  },
  {
    kelime: "Gelegenheit: Fırsat",
    cümle: "Das ist eine gute Gelegenheit zu lernen.",
  },
  {
    kelime: "angekündigten: Duyurulmuş",
    cümle: "Die angekündigten Änderungen kommen nächste Woche.",
  },
  {
    kelime: "Schau mal vorbei: Bir uğra",
    cümle: "Schau mal vorbei, wenn du Zeit hast!",
  },
  {
    kelime: "benimmt: Davranır",
    cümle: "Er benimmt sich immer sehr höflich.",
  },
  {
    kelime: "zurückhaltend: Çekingen",
    cümle: "Sie ist eher zurückhaltend in neuen Situationen.",
  },
  {
    kelime: "verbalen: Sözel",
    cümle: "Wir üben heute die verbalen Fähigkeiten.",
  },
  {
    kelime: "gewaltfreie: Şiddetsiz",
    cümle: "Eine gewaltfreie Kommunikation ist wichtig.",
  },
  {
    kelime: "Tischmanieren: Sofra adabı",
    cümle: "Gute Tischmanieren sind in vielen Kültürler wichtig.",
  },
  {
    kelime: "Kleinigkeiten: Küçük şeyler",
    cümle: "Es sind oft die Kleinigkeiten, die zählen.",
  },
  {
    kelime: "verdirbt: Bozar",
    cümle: "Ein Streit verdribt die Stimmung.",
  },
  {
    kelime: "die Welt wahrnehmen: Dünyayı algılamak",
    cümle: "Wir nehmen die Welt mit unseren Sinnen wahr.",
  },
  {
    kelime: "Lebewesen: Canlı varlıklar",
    cümle: "Alle Lebewesen haben Sinne.",
  },
  {
    kelime: "Ausstellung: Sergi",
    cümle: "Die Ausstellung im Museum war beeindruckend.",
  },
  {
    kelime: "blind: Kör",
    cümle: "Die blinden Mitarbeiter führen uns durch das Museum.",
  },
  {
    kelime: "führen: Yönlendirmek",
    cümle: "Der Hund führt den Mann zum Markt.",
  },
  {
    kelime: "sich festhalten: Tutunmak",
    cümle: "Ich musste mich am Geländer festhalten.",
  },
  {
    kelime: "Gerüche: Kokular",
    cümle: "Im Wald gibt es viele angenehme Gerüche.",
  },
  {
    kelime: "Zu Beginn: Başlangıçta",
    cümle: "Zu Beginn war ich sehr nervös.",
  },
  {
    kelime: "Zutaten: Malzemeler",
    cümle: "Die Zutaten für das Rezept sind einfach.",
  },
  {
    kelime: "Faszinierend: Büyüleyici",
    cümle: "Die Geschichte des Hundes war faszinierend.",
  },
  {
    kelime: "das Tasten: Dokunma",
    cümle: "Das Tasten hilft uns, die Welt zu verstehen.",
  },
  {
    kelime: "Gebärdensprache: İşaret dili",
    cümle: "Die Gebärdensprache ist in jedem Land anders.",
  },
  {
    kelime: "beherrschen: Hâkim olmak",
    cümle: "Er beherrscht die Gebärdensprache perfekt.",
  },
  {
    kelime: "gescheitert: Başarısız olmuş",
    cümle: "Das Projekt ist leider gescheitert.",
  },
  {
    kelime: "aufheitern: Neşelendirmek",
    cümle: "Ich versuche, sie mit einem Witz aufzuheitern.",
  },
  {
    kelime: "beziehen: İlişkilendirmek",
    cümle: "Das Wort bezieht sich auf den Geschmackssinn.",
  },
  {
    kelime: "Oberflächen: Yüzeyler",
    cümle: "Verschiedene Oberflächen fühlen sich unterschiedlich an.",
  },
  {
    kelime: "rau: Pürüzlü",
    cümle: "Die Wand ist sehr rau und uneben.",
  },
  {
    kelime: "glatte: Pürüzsüz",
    cümle: "Der Tisch hat eine glatte Oberfläche.",
  },
  {
    kelime: "Richtungen: Yönler",
    cümle: "Er kennt alle Richtungen in der Stadt.",
  },
  {
    kelime: "beißen: Isırmak",
    cümle: "Das Kind beißt in eine saure Zitrone.",
  },
  {
    kelime: "Löchern: Delikler",
    cümle: "Die Nase hat zwei kleine Löcher.",
  },
  {
    kelime: "stinken: Kokmak",
    cümle: "Der Müll stinkt wirklich unangenehm.",
  },
  {
    kelime: "Das Substantiv: İsim",
    cümle: "Das Substantiv von 'stinken' ist 'Gestank'.",
  },
  {
    kelime: "Gestank: Koku",
    cümle: "Der Gestank im Raum war unerträglich.",
  },
  {
    kelime: "Das ist Geschmackssache: Bu zevk meselesi",
    cümle: "Ob das gut riecht, ist Geschmackssache.",
  },
  {
    kelime: "Thymian: Kekik",
    cümle: "Thymian gibt dem Essen einen besonderen Geschmack.",
  },
  {
    kelime: "Vorahnung: Önsezi",
    cümle: "Ich hatte eine Vorahnung, dass etwas passieren würde.",
  },
  {
    kelime: "wahrnehmen: Algılamak",
    cümle: "Wir nehmen Geräusche mit den Ohren wahr.",
  },
  {
    kelime: "faszinierend: Büyüleyici",
    cümle: "Die Natur ist wirklich faszinierend.",
  },
  {
    kelime: "erforscht: Araştırılmış",
    cümle: "Das Thema ist noch nicht vollständig erforscht.",
  },
  {
    kelime: "währenddessen: Bu sırada",
    cümle: "Ich esse, währenddessen höre ich Musik.",
  },
  {
    kelime: "aufsetzen: Takmak",
    cümle: "Ich setze die Kopfhörer auf, um mich zu konzentrieren.",
  },
  {
    kelime: "Haut: Cilt",
    cümle: "Die Haut ist unser größtes Organ.",
  },
];
export default kelimeler;
