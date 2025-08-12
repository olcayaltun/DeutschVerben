import React, { useState } from "react";

const StoryApp = () => {
  const [hoveredWord, setHoveredWord] = useState(null);

  // Dictionary of all 300 expressions with their base form and Turkish translations
  const translations = {
    aufhalten: "aufhalten - durdurmak",
    "im Schlepptau haben": "im Schlepptau haben - yanında getirmek",
    handeln: "handeln - ticaret yapmak",
    startbereit: "startbereit - hazır",
    Foyer: "Foyer - giriş holü",
    Derivat: "Derivat - türev ürün",
    Anzeigetafel: "Anzeigetafel - bilgi panosu",
    "den Atem rauben": "den Atem rauben - nefes kesmek",
    "hin und weg sein": "hin und weg sein - hayran kalmak",
    Referent: "Referent - konuşmacı",
    "zur Sprache bringen": "zur Sprache bringen - dile getirmek",
    "in Frage stellen": "in Frage stellen - sorgulamak",
    "eine Entscheidung treffen": "eine Entscheidung treffen - bir karar almak",
    "auf die Nerven gehen": "auf die Nerven gehen - sinir bozmak",
    "einen Vorschlag machen": "einen Vorschlag machen - bir teklif yapmak",
    "zur Verfügung stehen":
      "zur Verfügung stehen - mevcut olmak, hizmete sunulmak",
    "in Betracht ziehen": "in Betracht ziehen - göz önünde bulundurmak",
    "in Kauf nehmen": "in Kauf nehmen - göze almak",
    "in Erinnerung rufen": "in Erinnerung rufen - hatırlatmak",
    "unter Druck setzen": "unter Druck setzen - baskı yapmak",
    "zur Kenntnis nehmen": "zur Kenntnis nehmen - farkına varmak",
    "in Verbindung stehen": "in Verbindung stehen - bağlantılı olmak",
    "eine Rolle spielen": "eine Rolle spielen - rol oynamak",
    "in Frage kommen": "in Frage kommen - söz konusu olmak",
    "Beachtung finden": "Beachtung finden - dikkate alınmak",
    "eine Antwort geben": "eine Antwort geben - bir cevap vermek",
    "eine Erklärung abgeben": "eine Erklärung abgeben - açıklama yapmak",
    "Verantwortung übernehmen": "Verantwortung übernehmen - sorumluluk almak",
    "in Angriff nehmen": "in Angriff nehmen - başlamak, işe koyulmak",
    "zum Ausdruck bringen": "zum Ausdruck bringen - ifade etmek",
    "sich in Acht nehmen": "sich in Acht nehmen - dikkatli olmak",
    "einen Eindruck hinterlassen":
      "einen Eindruck hinterlassen - izlenim bırakmak",
    "Daumen drücken": "Daumen drücken - başarı dilemek, parmak tutmak",
    "ins Gras beißen": "ins Gras beißen - ölmek",
    "die Daumen drehen":
      "die Daumen drehen - hiçbir şey yapmamak, tembellik etmek",
    "Hals über Kopf": "Hals über Kopf - alelacele",
    "die Nase voll haben": "die Nase voll haben - bıkmak, usanmak",
    "über die Runden kommen":
      "über die Runden kommen - ayın sonunu getirmek, idare etmek",
    "jemandem einen Bären aufbinden":
      "jemandem einen Bären aufbinden - birine yalan söylemek",
    "den Nagel auf den Kopf treffen":
      "den Nagel auf den Kopf treffen - tam isabet etmek",
    "sich Gedanken machen über":
      "sich Gedanken machen über - bir şey hakkında düşünmek",
    "auf dem Laufenden sein":
      "auf dem Laufenden sein - güncel olmak, haberleri takip etmek",
    "jemanden an der Nase herumführen":
      "jemanden an der Nase herumführen - birini kandırmak",
    "die Ohren spitzen": "die Ohren spitzen - kulak kabartmak",
    "den Kopf verlieren": "den Kopf verlieren - paniğe kapılmak",
    "ein Auge zudrücken":
      "ein Auge zudrücken - görmezden gelmek, hoşgörülü olmak",
    "auf eigene Faust": "auf eigene Faust - kendi başına",
    "seinen Senf dazugeben":
      "seinen Senf dazugeben - istenmeyen fikrini belirtmek",
    "Schwein haben": "Schwein haben - şanslı olmak",
    "die Katze im Sack kaufen":
      "die Katze im Sack kaufen - görmeden satın almak",
    "jemandem das Herz brechen": "jemandem das Herz brechen - kalbini kırmak",
    "eine Beziehung eingehen": "eine Beziehung eingehen - ilişki kurmak",
    "auf Wolke sieben schweben": "auf Wolke sieben schweben - çok mutlu olmak",
    "jemanden zum Narren halten":
      "jemanden zum Narren halten - biriyle alay etmek",
    "sich zum Affen machen": "sich zum Affen machen - kendini rezil etmek",
    "Liebe geht durch den Magen":
      "Liebe geht durch den Magen - aşk mideden geçer",
    "jemanden im Stich lassen": "jemanden im Stich lassen - yüzüstü bırakmak",
    "kein Blatt vor den Mund nehmen":
      "kein Blatt vor den Mund nehmen - dobra konuşmak",
    "jemanden auf die Palme bringen":
      "jemanden auf die Palme bringen - birini çileden çıkarmak",
    "sich in die Haare geraten": "sich in die Haare geraten - kavga etmek",
    "zur Einsicht kommen": "zur Einsicht kommen - farkına varmak",
    "in der Lage sein": "in der Lage sein - yapabilmek, kapasitesi olmak",
    "in der Tat": "in der Tat - gerçekte, aslında",
    "zum Ergebnis kommen": "zum Ergebnis kommen - sonuca varmak",
    "zu dem Schluss kommen": "zu dem Schluss kommen - sonuca varmak",
    "sich ein Bild machen von":
      "sich ein Bild machen von - bir şey hakkında fikir edinmek",
    "unter Beweis stellen": "unter Beweis stellen - kanıtlamak",
    "Rücksicht nehmen auf": "Rücksicht nehmen auf - dikkate almak",
    "über etwas nachdenken": "über etwas nachdenken - bir şey üzerine düşünmek",
    "zwischen den Zeilen lesen":
      "zwischen den Zeilen lesen - satır aralarını okumak",
    "in Konflikt geraten": "in Konflikt geraten - çatışmaya girmek",
    "eine Auswirkung haben auf":
      "eine Auswirkung haben auf - üzerinde etkisi olmak",
    "in der Patsche sitzen": "in der Patsche sitzen - zor durumda olmak",
    "das Handtuch werfen": "das Handtuch werfen - pes etmek",
    "durch dick und dünn gehen":
      "durch dick und dünn gehen - iyi günde kötü günde birlikte olmak",
    "jemanden im Regen stehen lassen":
      "jemanden im Regen stehen lassen - zor durumda yalnız bırakmak",
    "die Nerven verlieren": "die Nerven verlieren - sabrını kaybetmek",
    "aus einer Mücke einen Elefanten machen":
      "aus einer Mücke einen Elefanten machen - pireyi deve yapmak",
    "mit dem Feuer spielen": "mit dem Feuer spielen - ateşle oynamak",
    "auf dem Holzweg sein": "auf dem Holzweg sein - yanılmak",
    "einen Beitrag leisten": "einen Beitrag leisten - katkıda bulunmak",
    "eine Bitte äußern": "eine Bitte äußern - bir ricada bulunmak",
    "im Stande sein": "im Stande sein - yapabilmek",
    "eine Anfrage stellen":
      "eine Anfrage stellen - bir soru sormak, başvuru yapmak",
    "in Zusammenhang stehen mit":
      "in Zusammenhang stehen mit - ile bağlantılı olmak",
    "eine Lösung finden": "eine Lösung finden - bir çözüm bulmak",
    "in Übereinstimmung mit": "in Übereinstimmung mit - ile uyumlu olmak",
    "einen Plan erstellen": "einen Plan erstellen - bir plan hazırlamak",
    "auf die Dauer wirken": "auf die Dauer wirken - uzun vadede etki yapmak",
    "eine Position einnehmen":
      "eine Position einnehmen - bir pozisyon almak, görüş belirtmek",
    "etwas auf die Beine stellen":
      "etwas auf die Beine stellen - bir şey organize etmek",
    "alle Hände voll zu tun haben":
      "alle Hände voll zu tun haben - çok meşgul olmak",
    "die Ärmel hochkrempeln": "die Ärmel hochkrempeln - kolları sıvamak",
    "die Früchte seiner Arbeit ernten":
      "die Früchte seiner Arbeit ernten - emeğinin karşılığını almak",
    "aus allen Wolken fallen":
      "aus allen Wolken fallen - şaşkınlıktan dona kalmak",
    "eine Meinung vertreten": "eine Meinung vertreten - bir görüşü savunmak",
    "in der Verantwortung stehen":
      "in der Verantwortung stehen - sorumluluk taşımak",
    "zur Folge haben": "zur Folge haben - sonucu olmak",
    "mit jemandem unter einer Decke stecken":
      "mit jemandem unter einer Decke stecken - birileriyle işbirliği yapmak, gizlice",
    "jemanden an den Pranger stellen":
      "jemanden an den Pranger stellen - birini teşhir etmek",
    "etwas unter den Teppich kehren":
      "etwas unter den Teppich kehren - bir şeyi örtbas etmek",
    "jemandem auf die Füße treten":
      "jemandem auf die Füße treten - birinin duygularını incitmek",
    "jemandem auf den Schlips treten":
      "jemandem auf den Schlips treten - birini gücendirmek",
    "hinter dem Berg halten": "hinter dem Berg halten - çekingen davranmak",
    "aus der Haut fahren": "aus der Haut fahren - çileden çıkmak",
    "mit offenen Karten spielen":
      "mit offenen Karten spielen - dürüst davranmak",
    "sein Gesicht wahren": "sein Gesicht wahren - itibarını korumak",
    "jemandem Honig um den Mund schmieren":
      "jemandem Honig um den Mund schmieren - dalkavukluk yapmak",
    "etwas auf die lange Bank schieben":
      "etwas auf die lange Bank schieben - bir şeyi ertelemek, ağırdan almak",
    "jemandem ein Dorn im Auge sein":
      "jemandem ein Dorn im Auge sein - birinin gözüne batmak, rahatsız etmek",
    "jemanden aufhalten": "jemanden aufhalten - durdurmak",
    "jemanden im Schlepptau haben":
      "jemanden im Schlepptau haben - yanında getirmek",
    "mit etwas handeln": "mit etwas handeln - ticaret yapmak",
    startbereit: "startbereit - hazır",
    Foyer: "Foyer - giriş holü",
    Derivat: "Derivat - türev ürün",
    Anzeigetafel: "Anzeigetafel - bilgi panosu",
    "jemandem den Atem rauben": "jemandem den Atem rauben - nefes kesmek",
    "hin und weg sein": "hin und weg sein - hayran kalmak",
    Referent: "Referent - konuşmacı",
    Aktionär: "Aktionär - hissedar",
    Ertrag: "Ertrag - kazanç",
    exorbitant: "exorbitant - aşırı",
    "zu schaffen machen": "zu schaffen machen - sorun çıkarmak",
    beben: "beben - sallanmak",
    "das A und O sein": "das A und O sein - en önemli şey olmak",
    anstupsen: "anstupsen - dürtmek",
    überschwänglich: "überschwänglich - coşkulu",
    hinzufügen: "hinzufügen - eklemek",
    schalkisch: "schalkisch - şakacı, esprili",
    Zug: "Zug - adım, yöntem",
    nett: "nett - iyi, büyük",
    Portfolio: "Portfolio - portföy",
    "mühsam ernährt sich das Eichhörnchen":
      "mühsam ernährt sich das Eichhörnchen - küçük adımlarla ilerlemek",
    "im Kern": "im Kern - özünde",
    erschaffen: "erschaffen - yaratmak",
    "liegt jemandem am Herzen": "liegt jemandem am Herzen - önem vermek",
    "auf Nummer sicher gehen":
      "auf Nummer sicher gehen - risksiz hareket etmek",
    abzocken: "abzocken - dolandırmak",
    ergattern: "ergattern - ele geçirmek",
    "zur Rechenschaft ziehen": "zur Rechenschaft ziehen - sorumlu tutmak",
    Gier: "Gier - açgözlülük",
    erwischen: "erwischen - yakalamak",
    "in etwas versetzen": "in etwas versetzen - duruma sokmak",
    betrachten: "betrachten - incelemek",
    eindringlich: "eindringlich - etkileyici",
    Coup: "Coup - başarılı operasyon",
    landen: "landen - başarmak",
    "in den Sand setzen": "in den Sand setzen - başarısız olmak",
    eigenartig: "eigenartig - tuhaf",
    unbegreiflich: "unbegreiflich - anlaşılmaz",
    "einen Dachschaden haben": "einen Dachschaden haben - deli olmak",
    verlockend: "verlockend - cazip",
    Wesentliche: "Wesentliche - en önemli şey",
    kontern: "kontern - karşılık vermek",
    aushalten: "aushalten - katlanmak",
    "geschweige denn": "geschweige denn - hele",
    weiterbohren: "weiterbohren - ısrarla sormak",
    "die Hände über dem Kopf zusammenschlagen":
      "die Hände über dem Kopf zusammenschlagen - şaşkınlıkla elleri başa vurmak",
    Absicht: "Absicht - niyet, amaç",
    durchschauen: "durchschauen - iç yüzünü anlamak",
    Seufzer: "Seufzer - iç çekiş",
    pieksen: "pieksen - dürterek rahatsız etmek",
    "von mir aus": "von mir aus - bana göre",
    "den Mund halten": "den Mund halten - sessiz kalmak",
    "sich gegen etwas sträuben": "sich gegen etwas sträuben - direnmek",
    durchforsten: "durchforsten - detaylı araştırmak",
    fließen: "fließen - akmak",
    "auf etwas stoßen": "auf etwas stoßen - rastlantıyla bulmak",
    zigtausende: "zigtausende - on binlerce",
    "vor sich hinmurren": "vor sich hinmurren - mırıldanmak",
    durchgehen: "durchgehen - dikkatle incelemek",
    unterliegen: "unterliegen - tabi olmak",
    Unregelmäßigkeit: "Unregelmäßigkeit - düzensizlik",
    auftreten: "auftreten - ortaya çıkmak",
    verzögern: "verzögern - geciktirmek",
    "schlagen (Kalp)": "schlagen (Kalp) - çarpmak",
    vorhergesehen: "vorhergesehen - öngörülmüş",
    "zwei Herzen schlagen in jemandes Brust":
      "zwei Herzen schlagen in jemandes Brust - ikilem yaşamak",
    austricksen: "austricksen - kandırmak",
    ungebrochen: "ungebrochen - sarsılmaz",
    Schreck: "Schreck - şok",
    Kreide: "Kreide - tebeşir",
    zucken: "zucken - seğirmek",
    Gipfel: "Gipfel - zirve",
    Fortschritt: "Fortschritt - ilerleme",
    "jemandem fällt ein Stein vom Herzen":
      "jemandem fällt ein Stein vom Herzen - rahatlamak",
    wackelig: "wackelig - sallantılı",
    "sich erschrecken": "sich erschrecken - ürkmek",
    "sich fernhalten": "sich fernhalten - uzak durmak",
    Peanuts: "Peanuts - önemsiz miktar",
    sichtlich: "sichtlich - belirgin şekilde",
    abschalten: "abschalten - rahatlamak",
    verwundert: "verwundert - şaşın",
    abtun: "abtun - önemsememek",
    mulmig: "mulmig - huzursuz",
    "sich entschließen": "sich entschließen - karar vermek",
    "mit Argusaugen": "mit Argusaugen - dikkatle",
    "in Einklang mit": "in Einklang mit - uyum içinde",
    überziehen: "überziehen - kaplamak",
    höchst: "höchst - son derece",
    "einen großen Fisch an der Angel haben":
      "einen großen Fisch an der Angel haben - büyük kazanç ummak",
    durchmachen: "durchmachen - deneyimlemek",
    "in etwas eindringen": "in etwas eindringen - izinsiz girmek",
    "jemandem rutscht das Herz in die Hose":
      "jemandem rutscht das Herz in die Hose - korkmak",
    durchstehen: "durchstehen - dayanmak",
    "nicht hochzisasten": "nicht hochzisasten - pes etmemek",
    "sich über etwas im Klaren sein":
      "sich über etwas im Klaren sein - farkında olmak",
    zynisch: "zynisch - alaycı",
    "Offshore-Konto": "Offshore-Konto - offshore hesap",
    nachvollziehbar: "nachvollziehbar - anlaşılır",
    "sich an etwas fassen": "sich an etwas fassen - dokunmak",
    herrschen: "herrschen - hâkim olmak",
    Bankgeheimnis: "Bankgeheimnis - banka sırrı",
    untertauchen: "untertauchen - gizlenmek",
    zögern: "zögern - tereddüt etmek",
    nachhallen: "nachhallen - yankılanmak",
    überlisten: "überlisten - kandırmak",
    "jemandem etwas anhaben können":
      "jemandem etwas anhaben können - zarar verebilmek",
    benommen: "benommen - sersemlemiş",
    "jemanden in seinen Bann ziehen":
      "jemanden in seinen Bann ziehen - büyülemek",
    "jemanden fesseln": "jemanden fesseln - ilgisini çekmek",
    "sich von etwas lösen": "sich von etwas lösen - kurtulmak",
    "sich zusammenreißen": "sich zusammenreißen - kendini toplamak",
    Verdacht: "Verdacht - şüphe",
    erregen: "erregen - uyandırmak",
    verweilen: "verweilen - kalmak",
    regungslos: "regungslos - hareketsiz",
    "Vertrauen in etwas legen": "Vertrauen in etwas legen - güvenmek",
    Kinderspiel: "Kinderspiel - çocuk oyuncağı",
    "sich etwas einfallen lassen": "sich etwas einfallen lassen - akıl etmek",
    ausgeklügelt: "ausgeklügelt - kurnazca",
    nachverfolgen: "nachverfolgen - izlemek",
    beten: "beten - dua etmek",
    Schicksal: "Schicksal - kader",
    besiegeln: "besiegeln - sonuçlandırmak",
    erfolgen: "erfolgen - gerçekleşmek",
    "jemandem bleibt nichts übrig":
      "jemandem bleibt nichts übrig - başka seçenek kalmamak",
    herunterfahren: "herunterfahren - kapatmak",
    "sich in die Hose machen": "sich in die Hose machen - korkmak",
    Adrenalinschub: "Adrenalinschub - adrenalin patlaması",
    schmerztracks: "schmerztracks - anında",
    rasen: "rasen - hızla gitmek",
    "siehe da": "siehe da - işte",
    schleßen: "schleßen - hızla hareket etmek",
    überwältigen: "überwältigen - etkilemek",
    Macht: "Macht - güç",
    vorfallen: "vorfallen - gerçekleşmek",
    knapp: "knapp - kısa",
    "die Füße stillhalten": "die Füße stillhalten - beklemek",
    "sich gedulden": "sich gedulden - sabretmek",
    zuschauen: "zuschauen - izlemek",
    "aus allen Wolken fallen":
      "aus allen Wolken fallen - şaşkınlıktan dona kalmak",
    durchaus: "durchaus - oldukça",
    "mit etwas rechnen": "mit etwas rechnen - hesaba katmak",
    Zaster: "Zaster - altın (argo)",
    akribisch: "akribisch - titiz",
    durchziehen: "durchziehen - sonuna kadar götürmek",
  };

  const HighlightedWord = ({ word, baseWord, isVerb = false }) => {
    const handleMouseEnter = () => {
      if (isVerb) {
        setHoveredWord(word);
      }
    };

    const handleMouseLeave = () => {
      setHoveredWord(null);
    };

    return (
      <span
        className={`relative ${
          isVerb
            ? "font-bold text-blue-800 cursor-pointer hover:bg-blue-100 px-1 rounded"
            : ""
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {word}
        {hoveredWord === word && (
          <div className="absolute z-10 bg-gray-800 text-white text-sm px-2 py-1 rounded shadow-lg -top-8 left-0 whitespace-nowrap">
            {translations[baseWord]}
          </div>
        )}
      </span>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Die Geschichte von Dr. Maria Weber: Ein neues Kapitel
      </h1>

      <div className="text-lg leading-relaxed text-gray-700 space-y-4">
        <p>
          Dr. Maria Weber{" "}
          <HighlightedWord
            word="hatte aufgehalten"
            baseWord="aufhalten"
            isVerb={true}
          />{" "}
          <strong>hatte aufgehalten</strong> und einen Kollegen im{" "}
          <HighlightedWord word="Foyer" baseWord="Foyer" isVerb={false} />{" "}
          <strong>Foyer</strong> der Klinik gestoppt, um ein Problem zu
          besprechen. Sie{" "}
          <HighlightedWord
            word="hatte im Schlepptau gehabt"
            baseWord="im Schlepptau haben"
            isVerb={true}
          />{" "}
          <strong>hatte im Schlepptau gehabt</strong> und ihre Assistentin
          mitgebracht, die über ein{" "}
          <HighlightedWord word="Derivat" baseWord="Derivat" isVerb={false} />{" "}
          <strong>Derivat</strong> in der Finanzierung sprach. Maria{" "}
          <HighlightedWord
            word="hatte gehandelt"
            baseWord="handeln"
            isVerb={true}
          />{" "}
          <strong>hatte gehandelt</strong> und mit Sponsoren verhandelt, um das
          Projekt{" "}
          <HighlightedWord
            word="startbereit"
            baseWord="startbereit"
            isVerb={false}
          />{" "}
          <strong>startbereit</strong> zu machen.
        </p>

        <p>
          Auf einer Konferenz{" "}
          <HighlightedWord
            word="hatte zur Sprache gebracht"
            baseWord="zur Sprache bringen"
            isVerb={true}
          />{" "}
          <strong>hatte zur Sprache gebracht</strong> und ein heikles Thema
          angesprochen. Ein{" "}
          <HighlightedWord word="Referent" baseWord="Referent" isVerb={false} />{" "}
          <strong>Referent</strong>{" "}
          <HighlightedWord
            word="hatte in Frage gestellt"
            baseWord="in Frage stellen"
            isVerb={true}
          />{" "}
          <strong>hatte in Frage gestellt</strong> und ihre Methoden kritisiert,
          was sie{" "}
          <HighlightedWord
            word="hatte auf die Nerven gegangen"
            baseWord="auf die Nerven gehen"
            isVerb={true}
          />{" "}
          <strong>hatte auf die Nerven gegangen</strong>. Dennoch{" "}
          <HighlightedWord
            word="hatte eine Entscheidung getroffen"
            baseWord="eine Entscheidung treffen"
            isVerb={true}
          />{" "}
          <strong>hatte eine Entscheidung getroffen</strong> und ihre Strategie
          verteidigt.
        </p>

        <p>
          Ihre Präsentation{" "}
          <HighlightedWord
            word="hatte den Atem geraubt"
            baseWord="den Atem rauben"
            isVerb={true}
          />{" "}
          <strong>hatte den Atem geraubt</strong> und das Publikum{" "}
          <HighlightedWord
            word="war hin und weg gewesen"
            baseWord="hin und weg sein"
            isVerb={true}
          />{" "}
          <strong>war hin und weg gewesen</strong>. Sie{" "}
          <HighlightedWord
            word="hatte einen Vorschlag gemacht"
            baseWord="einen Vorschlag machen"
            isVerb={true}
          />{" "}
          <strong>hatte einen Vorschlag gemacht</strong> und neue
          Therapieansätze vorgestellt, die{" "}
          <HighlightedWord
            word="zur Verfügung gestanden hatten"
            baseWord="zur Verfügung stehen"
            isVerb={true}
          />{" "}
          <strong>zur Verfügung gestanden hatten</strong>. Die Idee{" "}
          <HighlightedWord
            word="hatte in Betracht gezogen"
            baseWord="in Betracht ziehen"
            isVerb={true}
          />{" "}
          <strong>hatte in Betracht gezogen</strong> und mögliche Risiken{" "}
          <HighlightedWord
            word="hatte in Kauf genommen"
            baseWord="in Kauf nehmen"
            isVerb={true}
          />{" "}
          <strong>hatte in Kauf genommen</strong>.
        </p>

        <p>
          Maria{" "}
          <HighlightedWord
            word="hatte in Erinnerung gerufen"
            baseWord="in Erinnerung rufen"
            isVerb={true}
          />{" "}
          <strong>hatte in Erinnerung gerufen</strong> und frühere Erfolge
          betont. Der Druck der Öffentlichkeit{" "}
          <HighlightedWord
            word="hatte unter Druck gesetzt"
            baseWord="unter Druck setzen"
            isVerb={true}
          />{" "}
          <strong>hatte unter Druck gesetzt</strong>, aber sie{" "}
          <HighlightedWord
            word="hatte zur Kenntnis genommen"
            baseWord="zur Kenntnis nehmen"
            isVerb={true}
          />{" "}
          <strong>hatte zur Kenntnis genommen</strong> und die Kritik
          angenommen. Ihre Arbeit{" "}
          <HighlightedWord
            word="hatte in Verbindung gestanden"
            baseWord="in Verbindung stehen"
            isVerb={true}
          />{" "}
          <strong>hatte in Verbindung gestanden</strong> mit internationalen
          Standards und{" "}
          <HighlightedWord
            word="hatte eine Rolle gespielt"
            baseWord="eine Rolle spielen"
            isVerb={true}
          />{" "}
          <strong>hatte eine Rolle gespielt</strong> in der Reform des
          Gesundheitswesens.
        </p>

        <p>
          Neue Therapiemethoden{" "}
          <HighlightedWord
            word="waren in Frage gekommen"
            baseWord="in Frage kommen"
            isVerb={true}
          />{" "}
          <strong>waren in Frage gekommen</strong>, aber sie{" "}
          <HighlightedWord
            word="hatte Beachtung gefunden"
            baseWord="Beachtung finden"
            isVerb={true}
          />{" "}
          <strong>hatte Beachtung gefunden</strong> bei Experten. Maria{" "}
          <HighlightedWord
            word="hatte eine Antwort gegeben"
            baseWord="eine Antwort geben"
            isVerb={true}
          />{" "}
          <strong>hatte eine Antwort gegeben</strong> und{" "}
          <HighlightedWord
            word="hatte eine Erklärung abgegeben"
            baseWord="eine Erklärung abgeben"
            isVerb={true}
          />{" "}
          <strong>hatte eine Erklärung abgegeben</strong>, um Missverständnisse
          zu klären. Sie{" "}
          <HighlightedWord
            word="hatte Verantwortung übernommen"
            baseWord="Verantwortung übernehmen"
            isVerb={true}
          />{" "}
          <strong>hatte Verantwortung übernommen</strong> und das Projekt{" "}
          <HighlightedWord
            word="hatte in Angriff genommen"
            baseWord="in Angriff nehmen"
            isVerb={true}
          />{" "}
          <strong>hatte in Angriff genommen</strong>.
        </p>

        <p>
          Ihre Überzeugungen{" "}
          <HighlightedWord
            word="hatte zum Ausdruck gebracht"
            baseWord="zum Ausdruck bringen"
            isVerb={true}
          />{" "}
          <strong>hatte zum Ausdruck gebracht</strong> und{" "}
          <HighlightedWord
            word="hatte sich in Acht genommen"
            baseWord="sich in Acht nehmen"
            isVerb={true}
          />{" "}
          <strong>hatte sich in Acht genommen</strong>, um Fehler zu vermeiden.
          Maria{" "}
          <HighlightedWord
            word="hatte einen Eindruck hinterlassen"
            baseWord="einen Eindruck hinterlassen"
            isVerb={true}
          />{" "}
          <strong>hatte einen Eindruck hinterlassen</strong> bei ihren Kollegen,
          die ihr{" "}
          <HighlightedWord
            word="hatten Daumen gedrückt"
            baseWord="Daumen drücken"
            isVerb={true}
          />{" "}
          <strong>hatten Daumen gedrückt</strong> für ihren Erfolg. Leider{" "}
          <HighlightedWord
            word="war ein Patient ins Gras gebissen"
            baseWord="ins Gras beißen"
            isVerb={true}
          />{" "}
          <strong>war ins Gras gebissen</strong>, was sie tief berührte.
        </p>

        <p>
          Während andere{" "}
          <HighlightedWord
            word="hatten die Daumen gedreht"
            baseWord="die Daumen drehen"
            isVerb={true}
          />{" "}
          <strong>hatten die Daumen gedreht</strong>, hatte Maria{" "}
          <HighlightedWord
            word="Hals über Kopf"
            baseWord="Hals über Kopf"
            isVerb={true}
          />{" "}
          <strong>Hals über Kopf</strong> gehandelt, um die Krise zu bewältigen.
          Sie{" "}
          <HighlightedWord
            word="hatte die Nase voll gehabt"
            baseWord="die Nase voll haben"
            isVerb={true}
          />{" "}
          <strong>hatte die Nase voll gehabt</strong> von Bürokratie, aber{" "}
          <HighlightedWord
            word="war über die Runden gekommen"
            baseWord="über die Runden kommen"
            isVerb={true}
          />{" "}
          <strong>war über die Runden gekommen</strong> durch harte Arbeit. Ein
          Kollege{" "}
          <HighlightedWord
            word="hatte ihr einen Bären aufgebunden"
            baseWord="jemandem einen Bären aufbinden"
            isVerb={true}
          />{" "}
          <strong>hatte ihr einen Bären aufgebunden</strong>, aber sie{" "}
          <HighlightedWord
            word="hatte den Nagel auf den Kopf getroffen"
            baseWord="den Nagel auf den Kopf treffen"
            isVerb={true}
          />{" "}
          <strong>hatte den Nagel auf den Kopf getroffen</strong> und die
          Wahrheit erkannt.
        </p>

        <p>
          Maria{" "}
          <HighlightedWord
            word="hatte sich Gedanken gemacht über"
            baseWord="sich Gedanken machen über"
            isVerb={true}
          />{" "}
          <strong>hatte sich Gedanken gemacht über</strong> die Finanzen der
          Klinik und{" "}
          <HighlightedWord
            word="war auf dem Laufenden gewesen"
            baseWord="auf dem Laufenden sein"
            isVerb={true}
          />{" "}
          <strong>war auf dem Laufenden gewesen</strong>. Ein Betrüger{" "}
          <HighlightedWord
            word="hatte sie an der Nase herumgeführt"
            baseWord="jemanden an der Nase herumführen"
            isVerb={true}
          />{" "}
          <strong>hatte sie an der Nase herumgeführt</strong>, aber sie{" "}
          <HighlightedWord
            word="hatte die Ohren gespitzt"
            baseWord="die Ohren spitzen"
            isVerb={true}
          />{" "}
          <strong>hatte die Ohren gespitzt</strong> und Beweise gefunden. Sie{" "}
          <HighlightedWord
            word="hatte den Kopf verloren"
            baseWord="den Kopf verlieren"
            isVerb={true}
          />{" "}
          <strong>hatte den Kopf verloren</strong>, als sie die Wahrheit erfuhr,
          doch{" "}
          <HighlightedWord
            word="hatte ein Auge zugedrückt"
            baseWord="ein Auge zudrücken"
            isVerb={true}
          />{" "}
          <strong>hatte ein Auge zugedrückt</strong> für kleine Fehler ihrer
          Assistentin.
        </p>

        <p>
          Auf{" "}
          <HighlightedWord
            word="hatte auf eigene Faust"
            baseWord="auf eigene Faust"
            isVerb={true}
          />{" "}
          <strong>hatte auf eigene Faust</strong> gehandelt und ein neues System
          entwickelt. Ein Kollege{" "}
          <HighlightedWord
            word="hatte seinen Senf dazugegeben"
            baseWord="seinen Senf dazugeben"
            isVerb={true}
          />{" "}
          <strong>hatte seinen Senf dazugegeben</strong>, was sie nervte. Zum
          Glück{" "}
          <HighlightedWord
            word="hatte Schwein gehabt"
            baseWord="Schwein haben"
            isVerb={true}
          />{" "}
          <strong>hatte Schwein gehabt</strong> und Fördermittel erhalten. Sie{" "}
          <HighlightedWord
            word="hatte die Katze im Sack gekauft"
            baseWord="die Katze im Sack kaufen"
            isVerb={true}
          />{" "}
          <strong>hatte die Katze im Sack gekauft</strong>, als sie ein Gerät
          ohne Test kaufte, was ein Fehler war.
        </p>

        <p>
          Ein Patient, dessen Vertrauen sie{" "}
          <HighlightedWord
            word="hatte das Herz gebrochen"
            baseWord="jemandem das Herz brechen"
            isVerb={true}
          />{" "}
          <strong>hatte das Herz gebrochen</strong>, hatte sie tief berührt. Sie{" "}
          <HighlightedWord
            word="hatte eine Beziehung eingegangen"
            baseWord="eine Beziehung eingehen"
            isVerb={true}
          />{" "}
          <strong>hatte eine Beziehung eingegangen</strong> mit einem Kollegen,
          was sie{" "}
          <HighlightedWord
            word="hatte auf Wolke sieben schweben lassen"
            baseWord="auf Wolke sieben schweben"
            isVerb={true}
          />{" "}
          <strong>hatte auf Wolke sieben schweben lassen</strong>. Doch ein
          Streit{" "}
          <HighlightedWord
            word="hatte sie zum Narren gehalten"
            baseWord="jemanden zum Narren halten"
            isVerb={true}
          />{" "}
          <strong>hatte sie zum Narren gehalten</strong>, und sie{" "}
          <HighlightedWord
            word="hatte sich zum Affen gemacht"
            baseWord="sich zum Affen machen"
            isVerb={true}
          />{" "}
          <strong>hatte sich zum Affen gemacht</strong> durch eine impulsive
          Reaktion.
        </p>

        <p>
          Maria glaubte, dass{" "}
          <HighlightedWord
            word="Liebe durch den Magen gegangen war"
            baseWord="Liebe geht durch den Magen"
            isVerb={true}
          />{" "}
          <strong>Liebe durch den Magen gegangen war</strong>, und kochte für
          ihr Team. Ein Kollege{" "}
          <HighlightedWord
            word="hatte sie im Stich gelassen"
            baseWord="jemanden im Stich lassen"
            isVerb={true}
          />{" "}
          <strong>hatte sie im Stich gelassen</strong>, was sie wütend machte.
          Sie{" "}
          <HighlightedWord
            word="hatte kein Blatt vor den Mund genommen"
            baseWord="kein Blatt vor den Mund nehmen"
            isVerb={true}
          />{" "}
          <strong>hatte kein Blatt vor den Mund genommen</strong> und ihn
          kritisiert, was ihn{" "}
          <HighlightedWord
            word="hatte auf die Palme gebracht"
            baseWord="jemanden auf die Palme bringen"
            isVerb={true}
          />{" "}
          <strong>hatte auf die Palme gebracht</strong>. Die beiden{" "}
          <HighlightedWord
            word="waren in die Haare geraten"
            baseWord="sich in die Haare geraten"
            isVerb={true}
          />{" "}
          <strong>waren in die Haare geraten</strong>, doch sie{" "}
          <HighlightedWord
            word="war zur Einsicht gekommen"
            baseWord="zur Einsicht kommen"
            isVerb={true}
          />{" "}
          <strong>war zur Einsicht gekommen</strong> und hatte sich
          entschuldigt.
        </p>

        <p>
          Maria{" "}
          <HighlightedWord
            word="war in der Lage gewesen"
            baseWord="in der Lage sein"
            isVerb={true}
          />{" "}
          <strong>war in der Lage gewesen</strong> und hatte komplexe Fälle
          gelöst.{" "}
          <HighlightedWord
            word="In der Tat"
            baseWord="in der Tat"
            isVerb={true}
          />{" "}
          <strong>In der Tat</strong>, sie{" "}
          <HighlightedWord
            word="hatte zum Ergebnis gekommen"
            baseWord="zum Ergebnis kommen"
            isVerb={true}
          />{" "}
          <strong>hatte zum Ergebnis gekommen</strong> und{" "}
          <HighlightedWord
            word="war zu dem Schluss gekommen"
            baseWord="zu dem Schluss kommen"
            isVerb={true}
          />{" "}
          <strong>war zu dem Schluss gekommen</strong>, dass Reformen nötig
          waren. Sie{" "}
          <HighlightedWord
            word="hatte sich ein Bild gemacht von"
            baseWord="sich ein Bild machen von"
            isVerb={true}
          />{" "}
          <strong>hatte sich ein Bild gemacht von</strong> der Situation und{" "}
          <HighlightedWord
            word="hatte unter Beweis gestellt"
            baseWord="unter Beweis stellen"
            isVerb={true}
          />{" "}
          <strong>hatte unter Beweis gestellt</strong> ihre Kompetenz.
        </p>

        <p>
          Maria{" "}
          <HighlightedWord
            word="hatte Rücksicht genommen auf"
            baseWord="Rücksicht nehmen auf"
            isVerb={true}
          />{" "}
          <strong>hatte Rücksicht genommen auf</strong> die Bedürfnisse ihrer
          Patienten und{" "}
          <HighlightedWord
            word="hatte über etwas nachgedacht"
            baseWord="über etwas nachdenken"
            isVerb={true}
          />{" "}
          <strong>hatte über etwas nachgedacht</strong>, bevor sie handelte. Sie{" "}
          <HighlightedWord
            word="hatte zwischen den Zeilen gelesen"
            baseWord="zwischen den Zeilen lesen"
            isVerb={true}
          />{" "}
          <strong>hatte zwischen den Zeilen gelesen</strong> und versteckte
          Motive entdeckt. Ein Streit{" "}
          <HighlightedWord
            word="war in Konflikt geraten"
            baseWord="in Konflikt geraten"
            isVerb={true}
          />{" "}
          <strong>war in Konflikt geraten</strong> und{" "}
          <HighlightedWord
            word="hatte eine Auswirkung gehabt auf"
            baseWord="eine Auswirkung haben auf"
            isVerb={true}
          />{" "}
          <strong>hatte eine Auswirkung gehabt auf</strong> die Teamdynamik.
        </p>

        <p>
          Als die Klinik{" "}
          <HighlightedWord
            word="in der Patsche gesessen hatte"
            baseWord="in der Patsche sitzen"
            isVerb={true}
          />{" "}
          <strong>in der Patsche gesessen hatte</strong>, hatte Maria{" "}
          <HighlightedWord
            word="das Handtuch nicht geworfen"
            baseWord="das Handtuch werfen"
            isVerb={true}
          />{" "}
          <strong>das Handtuch nicht geworfen</strong>. Sie{" "}
          <HighlightedWord
            word="war durch dick und dünn gegangen"
            baseWord="durch dick und dünn gehen"
            isVerb={true}
          />{" "}
          <strong>war durch dick und dünn gegangen</strong> mit ihrem Team und{" "}
          <HighlightedWord
            word="hatte niemanden im Regen stehen lassen"
            baseWord="jemanden im Regen stehen lassen"
            isVerb={true}
          />{" "}
          <strong>hatte niemanden im Regen stehen lassen</strong>. Doch sie{" "}
          <HighlightedWord
            word="hatte die Nerven verloren"
            baseWord="die Nerven verlieren"
            isVerb={true}
          />{" "}
          <strong>hatte die Nerven verloren</strong>, als ein Skandal{" "}
          <HighlightedWord
            word="aus einer Mücke einen Elefanten gemacht hatte"
            baseWord="aus einer Mücke einen Elefanten machen"
            isVerb={true}
          />{" "}
          <strong>aus einer Mücke einen Elefanten gemacht hatte</strong>.
        </p>

        <p>
          Maria{" "}
          <HighlightedWord
            word="hatte mit dem Feuer gespielt"
            baseWord="mit dem Feuer spielen"
            isVerb={true}
          />{" "}
          <strong>hatte mit dem Feuer gespielt</strong>, indem sie riskante
          Entscheidungen traf. Sie{" "}
          <HighlightedWord
            word="war auf dem Holzweg gewesen"
            baseWord="auf dem Holzweg sein"
            isVerb={true}
          />{" "}
          <strong>war auf dem Holzweg gewesen</strong>, als sie einem Gerücht
          glaubte. Dennoch{" "}
          <HighlightedWord
            word="hatte einen Beitrag geleistet"
            baseWord="einen Beitrag leisten"
            isVerb={true}
          />{" "}
          <strong>hatte einen Beitrag geleistet</strong> und{" "}
          <HighlightedWord
            word="hatte eine Bitte geäußert"
            baseWord="eine Bitte äußern"
            isVerb={true}
          />{" "}
          <strong>hatte eine Bitte geäußert</strong> für mehr Unterstützung.
        </p>

        <p>
          Sie{" "}
          <HighlightedWord
            word="war im Stande gewesen"
            baseWord="im Stande sein"
            isVerb={true}
          />{" "}
          <strong>war im Stande gewesen</strong> und hatte eine Lösung
          entwickelt. Maria{" "}
          <HighlightedWord
            word="hatte eine Anfrage gestellt"
            baseWord="eine Anfrage stellen"
            isVerb={true}
          />{" "}
          <strong>hatte eine Anfrage gestellt</strong> bei der Verwaltung, die{" "}
          <HighlightedWord
            word="in Zusammenhang gestanden hatte mit"
            baseWord="in Zusammenhang stehen mit"
            isVerb={true}
          />{" "}
          <strong>in Zusammenhang gestanden hatte mit</strong> Finanzproblemen.
          Sie{" "}
          <HighlightedWord
            word="hatte eine Lösung gefunden"
            baseWord="eine Lösung finden"
            isVerb={true}
          />{" "}
          <strong>hatte eine Lösung gefunden</strong> und{" "}
          <HighlightedWord
            word="in Übereinstimmung mit"
            baseWord="in Übereinstimmung mit"
            isVerb={true}
          />{" "}
          <strong>in Übereinstimmung mit</strong> den Vorschriften gehandelt.
        </p>

        <p>
          Maria{" "}
          <HighlightedWord
            word="hatte einen Plan erstellt"
            baseWord="einen Plan erstellen"
            isVerb={true}
          />{" "}
          <strong>hatte einen Plan erstellt</strong>, der{" "}
          <HighlightedWord
            word="auf die Dauer gewirkt hatte"
            baseWord="auf die Dauer wirken"
            isVerb={true}
          />{" "}
          <strong>auf die Dauer gewirkt hatte</strong>. Sie{" "}
          <HighlightedWord
            word="hatte eine Position eingenommen"
            baseWord="eine Position einnehmen"
            isVerb={true}
          />{" "}
          <strong>hatte eine Position eingenommen</strong> und{" "}
          <HighlightedWord
            word="hatte etwas auf die Beine gestellt"
            baseWord="etwas auf die Beine stellen"
            isVerb={true}
          />{" "}
          <strong>hatte etwas auf die Beine gestellt</strong>, um die Klinik zu
          retten. Sie{" "}
          <HighlightedWord
            word="hatte alle Hände voll zu tun gehabt"
            baseWord="alle Hände voll zu tun haben"
            isVerb={true}
          />{" "}
          <strong>hatte alle Hände voll zu tun gehabt</strong> und{" "}
          <HighlightedWord
            word="hatte die Ärmel hochgekrempelt"
            baseWord="die Ärmel hochkrempeln"
            isVerb={true}
          />{" "}
          <strong>hatte die Ärmel hochgekrempelt</strong>.
        </p>

        <p>
          Schließlich{" "}
          <HighlightedWord
            word="hatte die Früchte ihrer Arbeit geerntet"
            baseWord="die Früchte seiner Arbeit ernten"
            isVerb={true}
          />{" "}
          <strong>hatte die Früchte ihrer Arbeit geerntet</strong>, als die
          Klinik florierte. Doch ein Skandal{" "}
          <HighlightedWord
            word="hatte sie aus allen Wolken fallen lassen"
            baseWord="aus allen Wolken fallen"
            isVerb={true}
          />{" "}
          <strong>hatte sie aus allen Wolken fallen lassen</strong>. Ein{" "}
          <HighlightedWord word="Aktionär" baseWord="Aktionär" isVerb={false} />{" "}
          <strong>Aktionär</strong>{" "}
          <HighlightedWord
            word="hatte eine Meinung vertreten"
            baseWord="eine Meinung vertreten"
            isVerb={true}
          />{" "}
          <strong>hatte eine Meinung vertreten</strong>, die{" "}
          <HighlightedWord
            word="in der Verantwortung gestanden hatte"
            baseWord="in der Verantwortung stehen"
            isVerb={true}
          />{" "}
          <strong>in der Verantwortung gestanden hatte</strong>.
        </p>

        <p>
          Der Skandal{" "}
          <HighlightedWord
            word="hatte zur Folge gehabt"
            baseWord="zur Folge haben"
            isVerb={true}
          />{" "}
          <strong>hatte zur Folge gehabt</strong>, dass Maria Nachforschungen
          anstellte. Sie vermutete, dass jemand{" "}
          <HighlightedWord
            word="mit jemandem unter einer Decke gesteckt hatte"
            baseWord="mit jemandem unter einer Decke stecken"
            isVerb={true}
          />{" "}
          <strong>mit jemandem unter einer Decke gesteckt hatte</strong>. Sie{" "}
          <HighlightedWord
            word="hatte jemanden an den Pranger gestellt"
            baseWord="jemanden an den Pranger stellen"
            isVerb={true}
          />{" "}
          <strong>hatte jemanden an den Pranger gestellt</strong> und{" "}
          <HighlightedWord
            word="hatte etwas unter den Teppich gekehrt"
            baseWord="etwas unter den Teppich kehren"
            isVerb={true}
          />{" "}
          <strong>hatte etwas unter den Teppich gekehrt</strong>, um die Klinik
          zu schützen.
        </p>

        <p>
          Ein Kollege{" "}
          <HighlightedWord
            word="hatte ihr auf die Füße getreten"
            baseWord="jemandem auf die Füße treten"
            isVerb={true}
          />{" "}
          <strong>hatte ihr auf die Füße getreten</strong> und{" "}
          <HighlightedWord
            word="hatte ihr auf den Schlips getreten"
            baseWord="jemandem auf den Schlips treten"
            isVerb={true}
          />{" "}
          <strong>hatte ihr auf den Schlips getreten</strong> durch unfaire
          Kritik. Sie{" "}
          <HighlightedWord
            word="hatte hinter dem Berg gehalten"
            baseWord="hinter dem Berg halten"
            isVerb={true}
          />{" "}
          <strong>hatte hinter dem Berg gehalten</strong>, um ihre Gefühle zu
          verbergen, doch{" "}
          <HighlightedWord
            word="war aus der Haut gefahren"
            baseWord="aus der Haut fahren"
            isVerb={true}
          />{" "}
          <strong>war aus der Haut gefahren</strong>, als die Lügen zunahmen.
        </p>

        <p>
          Maria{" "}
          <HighlightedWord
            word="hatte mit offenen Karten gespielt"
            baseWord="mit offenen Karten spielen"
            isVerb={true}
          />{" "}
          <strong>hatte mit offenen Karten gespielt</strong> und{" "}
          <HighlightedWord
            word="hatte ihr Gesicht gewahrt"
            baseWord="sein Gesicht wahren"
            isVerb={true}
          />{" "}
          <strong>hatte ihr Gesicht gewahrt</strong>. Ein Kollege{" "}
          <HighlightedWord
            word="hatte ihr Honig um den Mund geschmiert"
            baseWord="jemandem Honig um den Mund schmieren"
            isVerb={true}
          />{" "}
          <strong>hatte ihr Honig um den Mund geschmiert</strong>, aber sie{" "}
          <HighlightedWord
            word="hatte etwas auf die lange Bank geschoben"
            baseWord="etwas auf die lange Bank schieben"
            isVerb={true}
          />{" "}
          <strong>hatte etwas auf die lange Bank geschoben</strong>, um Zeit zu
          gewinnen. Der Skandal{" "}
          <HighlightedWord
            word="war ihr ein Dorn im Auge gewesen"
            baseWord="jemandem ein Dorn im Auge sein"
            isVerb={true}
          />{" "}
          <strong>war ihr ein Dorn im Auge gewesen</strong>.
        </p>

        <p>
          Der <HighlightedWord word="Ertrag" baseWord="Ertrag" isVerb={false} />{" "}
          <strong>Ertrag</strong> der Klinik war{" "}
          <HighlightedWord
            word="exorbitant"
            baseWord="exorbitant"
            isVerb={false}
          />{" "}
          <strong>exorbitant</strong>, doch der Skandal{" "}
          <HighlightedWord
            word="hatte ihr zu schaffen gemacht"
            baseWord="zu schaffen machen"
            isVerb={true}
          />{" "}
          <strong>hatte ihr zu schaffen gemacht</strong>. Ihr Herz{" "}
          <HighlightedWord word="hatte gebebt" baseWord="beben" isVerb={true} />{" "}
          <strong>hatte gebebt</strong>, als sie Beweise fand. Die Wahrheit{" "}
          <HighlightedWord
            word="war das A und O gewesen"
            baseWord="das A und O sein"
            isVerb={true}
          />{" "}
          <strong>war das A und O gewesen</strong>. Sie{" "}
          <HighlightedWord
            word="hatte jemanden angestupst"
            baseWord="anstupsen"
            isVerb={true}
          />{" "}
          <strong>hatte jemanden angestupst</strong>, um Informationen zu
          erhalten, und{" "}
          <HighlightedWord
            word="überschwänglich"
            baseWord="überschwänglich"
            isVerb={false}
          />{" "}
          <strong>überschwänglich</strong> reagiert, als sie Fortschritte
          machte.
        </p>

        <p>
          Maria{" "}
          <HighlightedWord
            word="hatte etwas hinzugefügt"
            baseWord="hinzufügen"
            isVerb={true}
          />{" "}
          <strong>hatte etwas hinzugefügt</strong> zu ihrem{" "}
          <HighlightedWord
            word="Portfolio"
            baseWord="Portfolio"
            isVerb={false}
          />{" "}
          <strong>Portfolio</strong> und{" "}
          <HighlightedWord
            word="hatte mühsam ernährt sich das Eichhörnchen"
            baseWord="mühsam ernährt sich das Eichhörnchen"
            isVerb={true}
          />{" "}
          <strong>hatte mühsam ernährt sich das Eichhörnchen</strong> durch
          kleine Fortschritte.{" "}
          <HighlightedWord word="Im Kern" baseWord="im Kern" isVerb={true} />{" "}
          <strong>Im Kern</strong> war ihr Ziel, die Klinik zu retten. Sie{" "}
          <HighlightedWord
            word="hatte etwas erschaffen"
            baseWord="erschaffen"
            isVerb={true}
          />{" "}
          <strong>hatte etwas erschaffen</strong>, das ihr{" "}
          <HighlightedWord
            word="am Herzen gelegen hatte"
            baseWord="liegt jemandem am Herzen"
            isVerb={true}
          />{" "}
          <strong>am Herzen gelegen hatte</strong>. Maria{" "}
          <HighlightedWord
            word="hatte auf Nummer sicher gegangen"
            baseWord="auf Nummer sicher gehen"
            isVerb={true}
          />{" "}
          <strong>hatte auf Nummer sicher gegangen</strong>, um Risiken zu
          minimieren.
        </p>

        <p>
          Ein Betrüger{" "}
          <HighlightedWord
            word="hatte sie abgezockt"
            baseWord="abzocken"
            isVerb={true}
          />{" "}
          <strong>hatte sie abgezockt</strong>, aber sie{" "}
          <HighlightedWord
            word="hatte etwas ergattert"
            baseWord="ergattern"
            isVerb={true}
          />{" "}
          <strong>hatte etwas ergattert</strong>, nämlich Beweise. Sie{" "}
          <HighlightedWord
            word="hatte jemanden zur Rechenschaft gezogen"
            baseWord="zur Rechenschaft ziehen"
            isVerb={true}
          />{" "}
          <strong>hatte jemanden zur Rechenschaft gezogen</strong>, trotz seiner{" "}
          <HighlightedWord word="Gier" baseWord="Gier" isVerb={false} />{" "}
          <strong>Gier</strong>. Maria{" "}
          <HighlightedWord
            word="hatte ihn erwischt"
            baseWord="erwischen"
            isVerb={true}
          />{" "}
          <strong>hatte ihn erwischt</strong> und in eine schwierige Lage{" "}
          <HighlightedWord
            word="versetzt"
            baseWord="in etwas versetzen"
            isVerb={true}
          />{" "}
          <strong>versetzt</strong>.
        </p>

        <p>
          Sie{" "}
          <HighlightedWord
            word="hatte die Situation betrachtet"
            baseWord="betrachten"
            isVerb={true}
          />{" "}
          <strong>hatte die Situation betrachtet</strong> mit{" "}
          <HighlightedWord
            word="eindringlich"
            baseWord="eindringlich"
            isVerb={false}
          />{" "}
          <strong>eindringlich</strong> Aufmerksamkeit. Ihr{" "}
          <HighlightedWord word="Coup" baseWord="Coup" isVerb={false} />{" "}
          <strong>Coup</strong>{" "}
          <HighlightedWord
            word="hatte gelandet"
            baseWord="landen"
            isVerb={true}
          />{" "}
          <strong>hatte gelandet</strong>, doch sie{" "}
          <HighlightedWord
            word="hatte etwas in den Sand gesetzt"
            baseWord="in den Sand setzen"
            isVerb={true}
          />{" "}
          <strong>hatte etwas in den Sand gesetzt</strong>, als ein Plan
          scheiterte. Das Verhalten eines Kollegen war{" "}
          <HighlightedWord
            word="eigenartig"
            baseWord="eigenartig"
            isVerb={false}
          />{" "}
          <strong>eigenartig</strong> und{" "}
          <HighlightedWord
            word="unbegreiflich"
            baseWord="unbegreiflich"
            isVerb={false}
          />{" "}
          <strong>unbegreiflich</strong>. Ein Patient meinte, sie{" "}
          <HighlightedWord
            word="hatte einen Dachschaden gehabt"
            baseWord="einen Dachschaden haben"
            isVerb={true}
          />{" "}
          <strong>hatte einen Dachschaden gehabt</strong>, was sie{" "}
          <HighlightedWord
            word="verlockend"
            baseWord="verlockend"
            isVerb={false}
          />{" "}
          <strong>verlockend</strong> ignorierte.
        </p>

        <p>
          Das{" "}
          <HighlightedWord
            word="Wesentliche"
            baseWord="Wesentliche"
            isVerb={false}
          />{" "}
          <strong>Wesentliche</strong> war, die Wahrheit zu finden. Maria{" "}
          <HighlightedWord
            word="hatte gekontert"
            baseWord="kontern"
            isVerb={true}
          />{" "}
          <strong>hatte gekontert</strong> gegen Vorwürfe und{" "}
          <HighlightedWord
            word="hatte aushalten"
            baseWord="aushalten"
            isVerb={true}
          />{" "}
          <strong>hatte aushalten</strong> den Druck,{" "}
          <HighlightedWord
            word="geschweige denn"
            baseWord="geschweige denn"
            isVerb={true}
          />{" "}
          <strong>geschweige denn</strong> aufzugeben. Sie{" "}
          <HighlightedWord
            word="hatte weitergebohrt"
            baseWord="weiterbohren"
            isVerb={true}
          />{" "}
          <strong>hatte weitergebohrt</strong> und{" "}
          <HighlightedWord
            word="hatte die Hände über dem Kopf zusammengeschlagen"
            baseWord="die Hände über dem Kopf zusammenschlagen"
            isVerb={true}
          />{" "}
          <strong>hatte die Hände über dem Kopf zusammengeschlagen</strong>, als
          sie die Wahrheit erfuhr.
        </p>

        <p>
          Ihre{" "}
          <HighlightedWord word="Absicht" baseWord="Absicht" isVerb={false} />{" "}
          <strong>Absicht</strong> war klar, und sie{" "}
          <HighlightedWord
            word="hatte durchschaut"
            baseWord="durchschauen"
            isVerb={true}
          />{" "}
          <strong>hatte durchschaut</strong> die Motive des Betrügers. Mit einem{" "}
          <HighlightedWord word="Seufzer" baseWord="Seufzer" isVerb={false} />{" "}
          <strong>Seufzer</strong>{" "}
          <HighlightedWord
            word="hatte sie jemanden gepiekst"
            baseWord="pieksen"
            isVerb={true}
          />{" "}
          <strong>hatte sie jemanden gepiekst</strong> mit Worten.{" "}
          <HighlightedWord
            word="Von mir aus"
            baseWord="von mir aus"
            isVerb={true}
          />{" "}
          <strong>Von mir aus</strong>, sagte sie, doch sie{" "}
          <HighlightedWord
            word="hatte den Mund gehalten"
            baseWord="den Mund halten"
            isVerb={true}
          />{" "}
          <strong>hatte den Mund gehalten</strong>, um die Ermittlungen nicht zu
          gefährden. Sie{" "}
          <HighlightedWord
            word="hatte sich gegen etwas gesträubt"
            baseWord="sich gegen etwas sträuben"
            isVerb={true}
          />{" "}
          <strong>hatte sich gegen etwas gesträubt</strong>, doch{" "}
          <HighlightedWord
            word="hatte durchforstet"
            baseWord="durchforsten"
            isVerb={true}
          />{" "}
          <strong>hatte durchforstet</strong> die Unterlagen.
        </p>

        <p>
          Die Wahrheit{" "}
          <HighlightedWord
            word="war geflossen"
            baseWord="fließen"
            isVerb={true}
          />{" "}
          <strong>war geflossen</strong>, als sie{" "}
          <HighlightedWord
            word="auf etwas gestoßen war"
            baseWord="auf etwas stoßen"
            isVerb={true}
          />{" "}
          <strong>auf etwas gestoßen war</strong>, nämlich{" "}
          <HighlightedWord
            word="zigtausende"
            baseWord="zigtausende"
            isVerb={false}
          />{" "}
          <strong>zigtausende</strong> Euro auf einem{" "}
          <HighlightedWord
            word="Offshore-Konto"
            baseWord="Offshore-Konto"
            isVerb={false}
          />{" "}
          <strong>Offshore-Konto</strong>. Sie{" "}
          <HighlightedWord
            word="hatte vor sich hingemurrt"
            baseWord="vor sich hinmurren"
            isVerb={true}
          />{" "}
          <strong>hatte vor sich hingemurrt</strong> und{" "}
          <HighlightedWord
            word="hatte durchgegangen"
            baseWord="durchgehen"
            isVerb={true}
          />{" "}
          <strong>hatte durchgegangen</strong> die Beweise. Die{" "}
          <HighlightedWord
            word="Unregelmäßigkeit"
            baseWord="Unregelmäßigkeit"
            isVerb={false}
          />{" "}
          <strong>Unregelmäßigkeit</strong>{" "}
          <HighlightedWord
            word="war aufgetreten"
            baseWord="auftreten"
            isVerb={true}
          />{" "}
          <strong>war aufgetreten</strong> und hatte alles verzögert.
        </p>

        <p>
          Maria{" "}
          <HighlightedWord
            word="hatte verzögert"
            baseWord="verzögern"
            isVerb={true}
          />{" "}
          <strong>hatte verzögert</strong> die Veröffentlichung, da ihr Herz{" "}
          <HighlightedWord
            word="hatte geschlagen"
            baseWord="schlagen (Kalp)"
            isVerb={true}
          />{" "}
          <strong>hatte geschlagen</strong> vor Aufregung. Der Skandal war{" "}
          <HighlightedWord
            word="vorhergesehen"
            baseWord="vorhergesehen"
            isVerb={false}
          />{" "}
          <strong>vorhergesehen</strong>, doch sie{" "}
          <HighlightedWord
            word="hatte zwei Herzen in ihrer Brust schlagen gehabt"
            baseWord="zwei Herzen schlagen in jemandes Brust"
            isVerb={true}
          />{" "}
          <strong>hatte zwei Herzen in ihrer Brust schlagen gehabt</strong>, da
          sie zwischen Loyalität und Wahrheit schwankte. Sie{" "}
          <HighlightedWord
            word="hatte ausgetrickst"
            baseWord="austricksen"
            isVerb={true}
          />{" "}
          <strong>hatte ausgetrickst</strong> den Betrüger mit ihrer{" "}
          <HighlightedWord
            word="ungebrochen"
            baseWord="ungebrochen"
            isVerb={false}
          />{" "}
          <strong>ungebrochen</strong> Entschlossenheit.
        </p>

        <p>
          Der{" "}
          <HighlightedWord word="Schreck" baseWord="Schreck" isVerb={false} />{" "}
          <strong>Schreck</strong> traf sie, als sie eine{" "}
          <HighlightedWord word="Kreide" baseWord="Kreide" isVerb={false} />{" "}
          <strong>Kreide</strong> fand, die Hinweise enthielt. Ihr Körper{" "}
          <HighlightedWord
            word="hatte gezuckt"
            baseWord="zucken"
            isVerb={true}
          />{" "}
          <strong>hatte gezuckt</strong>, als sie den{" "}
          <HighlightedWord word="Gipfel" baseWord="Gipfel" isVerb={false} />{" "}
          <strong>Gipfel</strong> des Skandals erkannte. Der{" "}
          <HighlightedWord
            word="Fortschritt"
            baseWord="Fortschritt"
            isVerb={false}
          />{" "}
          <strong>Fortschritt</strong> war groß, und ihr{" "}
          <HighlightedWord
            word="war ein Stein vom Herzen gefallen"
            baseWord="jemandem fällt ein Stein vom Herzen"
            isVerb={true}
          />{" "}
          <strong>war ein Stein vom Herzen gefallen</strong>. Doch die Situation
          war{" "}
          <HighlightedWord word="wackelig" baseWord="wackelig" isVerb={false} />{" "}
          <strong>wackelig</strong>.
        </p>

        <p>
          Maria{" "}
          <HighlightedWord
            word="hatte sich erschrocken"
            baseWord="sich erschrecken"
            isVerb={true}
          />{" "}
          <strong>hatte sich erschrocken</strong> und{" "}
          <HighlightedWord
            word="hatte sich ferngehalten"
            baseWord="sich fernhalten"
            isVerb={true}
          />{" "}
          <strong>hatte sich ferngehalten</strong> von Medien. Der Betrag war
          nur{" "}
          <HighlightedWord word="Peanuts" baseWord="Peanuts" isVerb={false} />{" "}
          <strong>Peanuts</strong>, doch der Schaden war{" "}
          <HighlightedWord
            word="sichtlich"
            baseWord="sichtlich"
            isVerb={false}
          />{" "}
          <strong>sichtlich</strong>. Sie{" "}
          <HighlightedWord
            word="hatte abgeschaltet"
            baseWord="abschalten"
            isVerb={true}
          />{" "}
          <strong>hatte abgeschaltet</strong>, um sich zu beruhigen, und war{" "}
          <HighlightedWord
            word="verwundert"
            baseWord="verwundert"
            isVerb={false}
          />{" "}
          <strong>verwundert</strong> über die Lügen.
        </p>

        <p>
          Gerüchte{" "}
          <HighlightedWord
            word="hatte abgetan"
            baseWord="abtun"
            isVerb={true}
          />{" "}
          <strong>hatte abgetan</strong>, doch sie fühlte sich{" "}
          <HighlightedWord word="mulmig" baseWord="mulmig" isVerb={false} />{" "}
          <strong>mulmig</strong>. Maria{" "}
          <HighlightedWord
            word="hatte sich entschlossen"
            baseWord="sich entschließen"
            isVerb={true}
          />{" "}
          <strong>hatte sich entschlossen</strong>, mit{" "}
          <HighlightedWord
            word="mit Argusaugen"
            baseWord="mit Argusaugen"
            isVerb={true}
          />{" "}
          <strong>mit Argusaugen</strong> zu handeln. Ihre Lösung war{" "}
          <HighlightedWord
            word="in Einklang mit"
            baseWord="in Einklang mit"
            isVerb={true}
          />{" "}
          <strong>in Einklang mit</strong> den Regeln, und sie{" "}
          <HighlightedWord
            word="hatte überzogen"
            baseWord="überziehen"
            isVerb={true}
          />{" "}
          <strong>hatte überzogen</strong> die Wahrheit mit Vorsicht.
        </p>

        <p>
          Sie{" "}
          <HighlightedWord
            word="hatte einen großen Fisch an der Angel gehabt"
            baseWord="einen großen Fisch an der Angel haben"
            isVerb={true}
          />{" "}
          <strong>hatte einen großen Fisch an der Angel gehabt</strong> und{" "}
          <HighlightedWord
            word="hatte durchgemacht"
            baseWord="durchmachen"
            isVerb={true}
          />{" "}
          <strong>hatte durchgemacht</strong> eine schwierige Phase. Jemand{" "}
          <HighlightedWord
            word="hatte in etwas eingedrungen"
            baseWord="in etwas eindringen"
            isVerb={true}
          />{" "}
          <strong>hatte in etwas eingedrungen</strong>, und ihr{" "}
          <HighlightedWord
            word="war das Herz in die Hose gerutscht"
            baseWord="jemandem rutscht das Herz in die Hose"
            isVerb={true}
          />{" "}
          <strong>war das Herz in die Hose gerutscht</strong>. Doch sie{" "}
          <HighlightedWord
            word="hatte durchgestanden"
            baseWord="durchstehen"
            isVerb={true}
          />{" "}
          <strong>hatte durchgestanden</strong> und{" "}
          <HighlightedWord
            word="hatte nicht hochzisastiert"
            baseWord="nicht hochzisasten"
            isVerb={true}
          />{" "}
          <strong>hatte nicht hochzisastiert</strong>.
        </p>

        <p>
          Maria{" "}
          <HighlightedWord
            word="war sich über etwas im Klaren gewesen"
            baseWord="sich über etwas im Klaren sein"
            isVerb={true}
          />{" "}
          <strong>war sich über etwas im Klaren gewesen</strong> und ignorierte{" "}
          <HighlightedWord word="zynisch" baseWord="zynisch" isVerb={false} />{" "}
          <strong>zynisch</strong> Kommentare. Das{" "}
          <HighlightedWord
            word="Bankgeheimnis"
            baseWord="Bankgeheimnis"
            isVerb={false}
          />{" "}
          <strong>Bankgeheimnis</strong>{" "}
          <HighlightedWord
            word="hatte geherrscht"
            baseWord="herrschen"
            isVerb={true}
          />{" "}
          <strong>hatte geherrscht</strong>, aber sie{" "}
          <HighlightedWord
            word="hatte untertaucht"
            baseWord="untertauchen"
            isVerb={true}
          />{" "}
          <strong>hatte untertaucht</strong>, um Beweise zu sichern. Sie{" "}
          <HighlightedWord
            word="hatte gezögert"
            baseWord="zögern"
            isVerb={true}
          />{" "}
          <strong>hatte gezögert</strong>, doch die Wahrheit{" "}
          <HighlightedWord
            word="hatte nachgehallt"
            baseWord="nachhallen"
            isVerb={true}
          />{" "}
          <strong>hatte nachgehallt</strong>.
        </p>

        <p>
          Maria{" "}
          <HighlightedWord
            word="hatte überlistet"
            baseWord="überlisten"
            isVerb={true}
          />{" "}
          <strong>hatte überlistet</strong> den Betrüger, und niemand{" "}
          <HighlightedWord
            word="hatte ihr etwas anhaben können"
            baseWord="jemandem etwas anhaben können"
            isVerb={true}
          />{" "}
          <strong>hatte ihr etwas anhaben können</strong>. Sie war{" "}
          <HighlightedWord word="benommen" baseWord="benommen" isVerb={false} />{" "}
          <strong>benommen</strong>, doch ihre Entschlossenheit{" "}
          <HighlightedWord
            word="hatte sie in ihren Bann gezogen"
            baseWord="jemanden in seinen Bann ziehen"
            isVerb={true}
          />{" "}
          <strong>hatte sie in ihren Bann gezogen</strong>. Die Wahrheit{" "}
          <HighlightedWord
            word="hatte sie gefesselt"
            baseWord="jemanden fesseln"
            isVerb={true}
          />{" "}
          <strong>hatte sie gefesselt</strong>, und sie{" "}
          <HighlightedWord
            word="hatte sich von etwas gelöst"
            baseWord="sich von etwas lösen"
            isVerb={true}
          />{" "}
          <strong>hatte sich von etwas gelöst</strong>.
        </p>

        <p>
          Maria{" "}
          <HighlightedWord
            word="hatte sich zusammengerissen"
            baseWord="sich zusammenreißen"
            isVerb={true}
          />{" "}
          <strong>hatte sich zusammengerissen</strong> und den{" "}
          <HighlightedWord word="Verdacht" baseWord="Verdacht" isVerb={false} />{" "}
          <strong>Verdacht</strong> bestätigt. Der Skandal{" "}
          <HighlightedWord
            word="hatte Aufsehen erregt"
            baseWord="erregen"
            isVerb={true}
          />{" "}
          <strong>hatte Aufsehen erregt</strong>. Sie{" "}
          <HighlightedWord
            word="hatte verweilt"
            baseWord="verweilen"
            isVerb={true}
          />{" "}
          <strong>hatte verweilt</strong> und blieb{" "}
          <HighlightedWord
            word="regungslos"
            baseWord="regungslos"
            isVerb={false}
          />{" "}
          <strong>regungslos</strong>. Doch sie{" "}
          <HighlightedWord
            word="hatte Vertrauen in etwas gelegt"
            baseWord="Vertrauen in etwas legen"
            isVerb={true}
          />{" "}
          <strong>hatte Vertrauen in etwas gelegt</strong>, dass die Wahrheit
          siegen würde.
        </p>

        <p>
          Die Lösung war kein{" "}
          <HighlightedWord
            word="Kinderspiel"
            baseWord="Kinderspiel"
            isVerb={false}
          />{" "}
          <strong>Kinderspiel</strong>, aber Maria{" "}
          <HighlightedWord
            word="hatte sich etwas einfallen lassen"
            baseWord="sich etwas einfallen lassen"
            isVerb={true}
          />{" "}
          <strong>hatte sich etwas einfallen lassen</strong> mit einem{" "}
          <HighlightedWord
            word="ausgeklügelt"
            baseWord="ausgeklügelt"
            isVerb={false}
          />{" "}
          <strong>ausgeklügelt</strong> Plan. Sie{" "}
          <HighlightedWord
            word="hatte nachverfolgt"
            baseWord="nachverfolgen"
            isVerb={true}
          />{" "}
          <strong>hatte nachverfolgt</strong> die Spuren und{" "}
          <HighlightedWord
            word="hatte gebetet"
            baseWord="beten"
            isVerb={true}
          />{" "}
          <strong>hatte gebetet</strong>, dass ihr{" "}
          <HighlightedWord
            word="Schicksal"
            baseWord="Schicksal"
            isVerb={false}
          />{" "}
          <strong>Schicksal</strong> günstig wäre. Der Fall{" "}
          <HighlightedWord
            word="hatte besiegelt"
            baseWord="besiegeln"
            isVerb={true}
          />{" "}
          <strong>hatte besiegelt</strong> ihren Ruf, und der Erfolg{" "}
          <HighlightedWord
            word="war erfolgt"
            baseWord="erfolgen"
            isVerb={true}
          />{" "}
          <strong>war erfolgt</strong>.
        </p>

        <p>
          Maria{" "}
          <HighlightedWord
            word="hatte nichts übrig bleiben lassen"
            baseWord="jemandem bleibt nichts übrig"
            isVerb={true}
          />{" "}
          <strong>hatte nichts übrig bleiben lassen</strong> und alles riskiert.
          Sie{" "}
          <HighlightedWord
            word="hatte heruntergefahren"
            baseWord="herunterfahren"
            isVerb={true}
          />{" "}
          <strong>hatte heruntergefahren</strong> ihre Ängste und{" "}
          <HighlightedWord
            word="hatte sich in die Hose gemacht"
            baseWord="sich in die Hose machen"
            isVerb={true}
          />{" "}
          <strong>hatte sich in die Hose gemacht</strong> vor Nervosität. Ein{" "}
          <HighlightedWord
            word="Adrenalinschub"
            baseWord="Adrenalinschub"
            isVerb={false}
          />{" "}
          <strong>Adrenalinschub</strong> traf sie{" "}
          <HighlightedWord
            word="schmerztracks"
            baseWord="schmerztracks"
            isVerb={true}
          />{" "}
          <strong>schmerztracks</strong>, als sie die Wahrheit enthüllte.
        </p>

        <p>
          Ihr Herz{" "}
          <HighlightedWord word="hatte gerast" baseWord="rasen" isVerb={true} />{" "}
          <strong>hatte gerast</strong>, und{" "}
          <HighlightedWord word="siehe da" baseWord="siehe da" isVerb={true} />{" "}
          <strong>siehe da</strong>, sie{" "}
          <HighlightedWord
            word="hatte geschleßt"
            baseWord="schleßen"
            isVerb={true}
          />{" "}
          <strong>hatte geschleßt</strong> zur Wahrheit. Der Erfolg{" "}
          <HighlightedWord
            word="hatte überwältigt"
            baseWord="überwältigen"
            isVerb={true}
          />{" "}
          <strong>hatte überwältigt</strong> sie, und ihre{" "}
          <HighlightedWord word="Macht" baseWord="Macht" isVerb={false} />{" "}
          <strong>Macht</strong> wuchs. Der Skandal{" "}
          <HighlightedWord
            word="war vorgefallen"
            baseWord="vorfallen"
            isVerb={true}
          />{" "}
          <strong>war vorgefallen</strong> in{" "}
          <HighlightedWord word="knapp" baseWord="knapp" isVerb={false} />{" "}
          <strong>knapp</strong> Zeit.
        </p>

        <p>
          Maria{" "}
          <HighlightedWord
            word="hatte die Füße stillgehalten"
            baseWord="die Füße stillhalten"
            isVerb={true}
          />{" "}
          <strong>hatte die Füße stillgehalten</strong> und{" "}
          <HighlightedWord
            word="hatte sich geduldet"
            baseWord="sich gedulden"
            isVerb={true}
          />{" "}
          <strong>hatte sich geduldet</strong>. Sie{" "}
          <HighlightedWord
            word="hatte zugeschaut"
            baseWord="zuschauen"
            isVerb={true}
          />{" "}
          <strong>hatte zugeschaut</strong>, wie die Wahrheit ans Licht kam.{" "}
          <HighlightedWord word="Durchaus" baseWord="durchaus" isVerb={true} />{" "}
          <strong>Durchaus</strong> hatte sie{" "}
          <HighlightedWord
            word="mit etwas gerechnet"
            baseWord="mit etwas rechnen"
            isVerb={true}
          />{" "}
          <strong>mit etwas gerechnet</strong>, nämlich dem{" "}
          <HighlightedWord word="Zaster" baseWord="Zaster" isVerb={false} />{" "}
          <strong>Zaster</strong>. Mit{" "}
          <HighlightedWord
            word="akribisch"
            baseWord="akribisch"
            isVerb={false}
          />{" "}
          <strong>akribisch</strong> Arbeit{" "}
          <HighlightedWord
            word="hatte durchgezogen"
            baseWord="durchziehen"
            isVerb={true}
          />{" "}
          <strong>hatte durchgezogen</strong> und die Klinik gerettet.
        </p>
      </div>
    </div>
  );
};

export default StoryApp;
