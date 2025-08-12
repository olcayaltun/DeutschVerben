import React, { useState } from "react";

const GermanVerbsStory = () => {
  const [hoveredVerb, setHoveredVerb] = useState(null);

  const verbs = {
    abgebrochen: { infinitive: "abbrechen", meaning: "iptal etmek, kesmek" },
    abgehangen: { infinitive: "abhängen", meaning: "bağlı olmak, takılmak" },
    abgelaufen: { infinitive: "ablaufen", meaning: "süresi dolmak" },
    abgenommen: { infinitive: "abnehmen", meaning: "kilo vermek, azalmak" },
    abgeschlossen: {
      infinitive: "abschließen",
      meaning: "kilitlemek, tamamlamak",
    },
    abgeschnitten: { infinitive: "abschneiden", meaning: "kesmek" },
    abgeschrieben: {
      infinitive: "abschreiben",
      meaning: "kopya çekmek, bir yerden yazmak",
    },
    abgesendet: { infinitive: "absenden", meaning: "göndermek" },
    abgesunken: { infinitive: "absinken", meaning: "batmak, alçalmak" },
    abgestiegen: {
      infinitive: "absteigen",
      meaning: "inmek (bisiklet, at vb.)",
    },
    angegeben: { infinitive: "angeben", meaning: "belirtmek" },
    angegriffen: { infinitive: "angreifen", meaning: "saldırmak" },
    angehalten: { infinitive: "anhalten", meaning: "durdurmak" },
    angelogen: { infinitive: "anlügen", meaning: "yalan söylemek" },
    angenommen: { infinitive: "annehmen", meaning: "kabul etmek" },
    angesehen: { infinitive: "ansehen", meaning: "bakmak" },
    angesprochen: { infinitive: "ansprechen", meaning: "hitap etmek" },
    angestiegen: { infinitive: "ansteigen", meaning: "artmak, yükselmek" },
    angewachsen: { infinitive: "anwachsen", meaning: "büyümek, artmak" },
    angewandt: { infinitive: "anwenden", meaning: "uygulamak" },
    angezogen: { infinitive: "anziehen", meaning: "giyinmek, çekmek" },
    aufgebrochen: { infinitive: "aufbrechen", meaning: "kırmak, yola çıkmak" },
    aufgegessen: { infinitive: "aufessen", meaning: "yiyip bitirmek" },
    aufgegeben: { infinitive: "aufgeben", meaning: "pes etmek" },
    aufgehalten: { infinitive: "aufhalten", meaning: "durdurmak" },
    aufgehoben: { infinitive: "aufheben", meaning: "kaldırmak" },
    aufgenommen: { infinitive: "aufnehmen", meaning: "kabul etmek, kaydetmek" },
    aufgestanden: { infinitive: "aufstehen", meaning: "ayağa kalkmak" },
    aufgetreten: { infinitive: "auftreten", meaning: "sahneye çıkmak" },
    aufgewachsen: { infinitive: "aufwachsen", meaning: "büyümek (çocuk)" },
    ausgebrochen: {
      infinitive: "ausbrechen",
      meaning: "patlak vermek, kaçmak",
    },
    ausgefallen: {
      infinitive: "ausfallen",
      meaning: "iptal olmak, dökülmek (saç)",
    },
    ausgegangen: { infinitive: "ausgehen", meaning: "dışarı çıkmak" },
    ausgehalten: { infinitive: "aushalten", meaning: "dayanmak" },
    ausgeliehen: { infinitive: "ausleihen", meaning: "ödünç vermek" },
    ausgesehen: { infinitive: "aussehen", meaning: "görünmek" },
    ausgestiegen: { infinitive: "aussteigen", meaning: "inmek (taşıttan)" },
    ausgezogen: {
      infinitive: "ausziehen",
      meaning: "soyunmak, taşınmak (evden)",
    },
    gebacken: { infinitive: "backen", meaning: "fırında pişirmek" },
    begriffen: { infinitive: "begreifen", meaning: "anlamak" },
    behalten: { infinitive: "behalten", meaning: "saklamak, korumak" },
    beigebracht: { infinitive: "beibringen", meaning: "öğretmek" },
    beiseitegelegt: {
      infinitive: "beiseitelegen",
      meaning: "bir kenara koymak",
    },
    beigetragen: { infinitive: "beitragen", meaning: "katkıda bulunmak" },
    bekommen: { infinitive: "bekommen", meaning: "almak" },
    beraten: { infinitive: "beraten", meaning: "danışmak, tavsiye vermek" },
    beschlossen: { infinitive: "beschließen", meaning: "karar vermek" },
    beschrieben: { infinitive: "beschreiben", meaning: "tanımlamak" },
    besprochen: { infinitive: "besprechen", meaning: "görüşmek" },
    bestanden: { infinitive: "bestehen", meaning: "başarmak, var olmak" },
    betragen: { infinitive: "betragen", meaning: "tutmak, etmek (miktar)" },
    betrieben: { infinitive: "betreiben", meaning: "işletmek" },
    betrogen: { infinitive: "betrügen", meaning: "aldatmak" },
    bewiesen: { infinitive: "beweisen", meaning: "kanıtlamak" },
    beworben: { infinitive: "bewerben", meaning: "başvurmak (iş vb.)" },
    geboten: { infinitive: "bieten", meaning: "teklif etmek" },
    gebunden: { infinitive: "binden", meaning: "bağlamak" },
    gebeten: { infinitive: "bitten", meaning: "rica etmek" },
    geblieben: { infinitive: "bleiben", meaning: "kalmak" },
    gebrochen: { infinitive: "brechen", meaning: "kırmak" },
    gebrannt: { infinitive: "brennen", meaning: "yanmak" },
    gebracht: { infinitive: "bringen", meaning: "getirmek" },
    gedacht: { infinitive: "denken", meaning: "düşünmek" },
    gedroschen: { infinitive: "dreschen", meaning: "dövmek" },
    gedrungen: { infinitive: "dringen", meaning: "nüfuz etmek" },
    gedurft: { infinitive: "dürfen", meaning: "izinli olmak" },
    eingebrochen: {
      infinitive: "einbrechen",
      meaning: "hırsızlık yapmak, zorla girmek",
    },
    eingefallen: { infinitive: "einfallen", meaning: "aklına gelmek" },
    eingegeben: { infinitive: "eingeben", meaning: "girmek (bilgi)" },
    eingegangen: { infinitive: "eingehen", meaning: "girmek" },
    eingehalten: { infinitive: "einhalten", meaning: "uymak" },
    eingeladen: { infinitive: "einladen", meaning: "davet etmek" },
    eingenommen: { infinitive: "einnehmen", meaning: "almak (ilaç vb.)" },
    eingeschlafen: { infinitive: "einschlafen", meaning: "uykuya dalmak" },
    eingeschlossen: {
      infinitive: "einschließen",
      meaning: "kilitlemek, içermek",
    },
    eingesehen: { infinitive: "einsehen", meaning: "anlamak, görmek" },
    eingestiegen: { infinitive: "einsteigen", meaning: "binmek (taşıta)" },
    eingetragen: { infinitive: "eintragen", meaning: "kaydetmek, yazmak" },
    eingeworfen: { infinitive: "einwerfen", meaning: "atmak" },
    eingezogen: { infinitive: "einziehen", meaning: "taşınmak (yeni eve)" },
    empfohlen: { infinitive: "empfehlen", meaning: "tavsiye etmek" },
    empfangen: { infinitive: "empfangen", meaning: "almak (misafir vb.)" },
    empfunden: { infinitive: "empfinden", meaning: "hissetmek" },
    enthalten: { infinitive: "enthalten", meaning: "içermek" },
    entlassen: { infinitive: "entlassen", meaning: "işten çıkarmak" },
    entschieden: { infinitive: "entscheiden", meaning: "karar vermek" },
    entschlossen: { infinitive: "entschließen", meaning: "karar vermek" },
    entsprochen: { infinitive: "entsprechen", meaning: "karşılamak" },
    entstanden: { infinitive: "entstehen", meaning: "meydana gelmek" },
    erfunden: { infinitive: "erfinden", meaning: "icat etmek" },
    erhalten: { infinitive: "erhalten", meaning: "almak" },
    erkannt: { infinitive: "erkennen", meaning: "tanımak" },
    erschaffen: { infinitive: "erschaffen", meaning: "yaratmak" },
    erschlossen: { infinitive: "erschließen", meaning: "erişmek" },
    erschrocken: { infinitive: "erschrecken", meaning: "korkmak, korkutmak" },
    ersonnen: { infinitive: "ersinnen", meaning: "tasarlamak" },
    erzogen: { infinitive: "erziehen", meaning: "yetiştirmek" },
    gegessen: { infinitive: "essen", meaning: "yemek yemek" },
    gefahren: { infinitive: "fahren", meaning: "sürmek, gitmek (araçla)" },
    gefallen: { infinitive: "fallen", meaning: "düşmek" },
    gefangen: { infinitive: "fangen", meaning: "yakalamak" },
    gefunden: { infinitive: "finden", meaning: "bulmak" },
    geflogen: { infinitive: "fliegen", meaning: "uçmak" },
    geflohen: { infinitive: "fliehen", meaning: "kaçmak" },
    geflossen: { infinitive: "fließen", meaning: "akmak" },
    gefressen: { infinitive: "fressen", meaning: "yemek (hayvan için)" },
    gefroren: { infinitive: "frieren", meaning: "donmak, üşümek" },
    gegeben: { infinitive: "geben", meaning: "vermek" },
    gegangen: { infinitive: "gehen", meaning: "gitmek" },
    gelungen: { infinitive: "gelingen", meaning: "başarmak" },
    genossen: { infinitive: "genießen", meaning: "tadını çıkarmak" },
    geschehen: { infinitive: "geschehen", meaning: "olmak, meydana gelmek" },
    gewonnen: { infinitive: "gewinnen", meaning: "kazanmak" },
    gegossen: { infinitive: "gießen", meaning: "dökmek, sulamak" },
    geglichen: { infinitive: "gleichen", meaning: "benzemek" },
    geglitten: { infinitive: "gleiten", meaning: "kaymak" },
    gegraben: { infinitive: "graben", meaning: "kazmak" },
    gegriffen: { infinitive: "greifen", meaning: "yakalamak, tutmak" },
    gehabt: { infinitive: "haben", meaning: "sahip olmak" },
    gehalten: { infinitive: "halten", meaning: "tutmak" },
    gehangen: { infinitive: "hängen", meaning: "asmak, asılı durmak" },
    gehoben: { infinitive: "heben", meaning: "kaldırmak" },
    geheißen: { infinitive: "heißen", meaning: "adı olmak" },
    geholfen: { infinitive: "helfen", meaning: "yardım etmek" },
    hergestellt: { infinitive: "herstellen", meaning: "üretmek" },
    hingewiesen: { infinitive: "hinweisen", meaning: "işaret etmek" },
    gekannt: { infinitive: "kennen", meaning: "tanımak" },
    geklungen: { infinitive: "klingen", meaning: "çalmak (ses)" },
    gekommen: { infinitive: "kommen", meaning: "gelmek" },
    gekonnt: { infinitive: "können", meaning: "yapabilmek" },
    gekrochen: { infinitive: "kriechen", meaning: "sürünmek" },
    geladen: { infinitive: "laden", meaning: "yüklemek, çağırmak" },
    gelassen: { infinitive: "lassen", meaning: "bırakmak, izin vermek" },
    gelaufen: { infinitive: "laufen", meaning: "koşmak" },
    gelitten: { infinitive: "leiden", meaning: "acı çekmek" },
    geliehen: { infinitive: "leihen", meaning: "ödünç almak" },
    gelesen: { infinitive: "lesen", meaning: "okumak" },
    gelegen: { infinitive: "liegen", meaning: "yatmak, bulunmak" },
    gelogen: { infinitive: "lügen", meaning: "yalan söylemek" },
    gemessen: { infinitive: "messen", meaning: "ölçmek" },
    gemocht: { infinitive: "mögen", meaning: "sevmek, hoşlanmak" },
    gemusst: { infinitive: "müssen", meaning: "zorunda olmak" },
    genommen: { infinitive: "nehmen", meaning: "almak" },
    genannt: { infinitive: "nennen", meaning: "adlandırmak" },
    gepfiffen: { infinitive: "pfeifen", meaning: "ıslık çalmak" },
    geraten: { infinitive: "raten", meaning: "tavsiye vermek, tahmin etmek" },
    geritten: { infinitive: "reiten", meaning: "ata binmek" },
    gerochen: { infinitive: "riechen", meaning: "koklamak, kokmak" },
    gerufen: { infinitive: "rufen", meaning: "çağırmak" },
    geschaffen: { infinitive: "schaffen", meaning: "yaratmak, başarmak" },
    geschienen: { infinitive: "scheinen", meaning: "parlamak, görünmek" },
    geschoben: { infinitive: "schieben", meaning: "itmek" },
    geschossen: { infinitive: "schießen", meaning: "ateş etmek" },
    geschlafen: { infinitive: "schlafen", meaning: "uyumak" },
    geschlagen: { infinitive: "schlagen", meaning: "vurmak" },
    geschlichen: { infinitive: "schleichen", meaning: "sessizce yaklaşmak" },
    geschlossen: { infinitive: "schließen", meaning: "kapatmak" },
    geschlungen: { infinitive: "schlingen", meaning: "sarmak, yutmak" },
    geschmissen: { infinitive: "schmeißen", meaning: "fırlatmak" },
    geschmolzen: { infinitive: "schmelzen", meaning: "erimek, eritmek" },
    geschnitten: { infinitive: "schneiden", meaning: "kesmek" },
    geschrieben: { infinitive: "schreiben", meaning: "yazmak" },
    geschrien: { infinitive: "schreien", meaning: "bağırmak" },
    geschwiegen: { infinitive: "schweigen", meaning: "susmak" },
    geschwommen: { infinitive: "schwimmen", meaning: "yüzmek" },
    gesehen: { infinitive: "sehen", meaning: "görmek" },
    gewesen: { infinitive: "sein", meaning: "olmak" },
    gesungen: { infinitive: "singen", meaning: "şarkı söylemek" },
    gesunken: { infinitive: "sinken", meaning: "batmak, düşmek" },
    gesessen: { infinitive: "sitzen", meaning: "oturmak" },
    gesprochen: { infinitive: "sprechen", meaning: "konuşmak" },
    gesprungen: { infinitive: "springen", meaning: "zıplamak" },
    geworden: { infinitive: "werden", meaning: "olmak" },
    eingepackt: { infinitive: "einpacken", meaning: "paketlemek" },
    verlassen: { infinitive: "verlassen", meaning: "terk etmek" },
    gesagt: { infinitive: "sagen", meaning: "söylemek" },
    gesteckt: { infinitive: "stecken", meaning: "sokmak" },
    übernachtet: { infinitive: "übernachten", meaning: "gecelemek" },
    getroffen: { infinitive: "treffen", meaning: "karşılaşmak" },
    erzählt: { infinitive: "erzählen", meaning: "anlatmak" },
    berichtet: { infinitive: "berichten", meaning: "bildirmek" },
    entdeckt: { infinitive: "entdecken", meaning: "keşfetmek" },
    mitgenommen: { infinitive: "mitnehmen", meaning: "beraberinde götürmek" },
    geglaubt: { infinitive: "glauben", meaning: "inanmak" },
    nachgedacht: { infinitive: "nachdenken", meaning: "düşünmek" },
    eingeschlagen: { infinitive: "einschlagen", meaning: "yol tutmak" },
    erreicht: { infinitive: "erreichen", meaning: "varmak" },
    angemacht: { infinitive: "anmachen", meaning: "açmak" },
    hineingegangen: { infinitive: "hineingehen", meaning: "içeri girmek" },
    verschlossen: { infinitive: "verschließen", meaning: "kilitlemek" },
    erinnert: { infinitive: "erinnern", meaning: "hatırlamak" },
    herausgenommen: { infinitive: "herausnehmen", meaning: "çıkarmak" },
    geblättert: { infinitive: "blättern", meaning: "sayfa çevirmek" },
    geöffnet: { infinitive: "öffnen", meaning: "açmak" },
    gezeigt: { infinitive: "zeigen", meaning: "göstermek" },
    verstanden: { infinitive: "verstehen", meaning: "anlamak" },
    begonnen: { infinitive: "beginnen", meaning: "başlamak" },
    studiert: { infinitive: "studieren", meaning: "incelemek" },
    geträumt: { infinitive: "träumen", meaning: "rüya görmek" },
    besessen: { infinitive: "besitzen", meaning: "sahip olmak" },
    fortzusetzen: { infinitive: "fortsetzen", meaning: "devam etmek" },
    gelernt: { infinitive: "lernen", meaning: "öğrenmek" },
    versteckt: { infinitive: "verstecken", meaning: "saklamak" },
    gelehrt: { infinitive: "lehren", meaning: "öğretmek" },
    gestochen: { infinitive: "stechen", meaning: "sokmak, batırmak" },
    gestanden: { infinitive: "stehen", meaning: "durmak" },
    gestohlen: { infinitive: "stehlen", meaning: "çalmak" },
    gestiegen: { infinitive: "steigen", meaning: "tırmanmak, yükselmek" },
    gestorben: { infinitive: "sterben", meaning: "ölmek" },
    gestoßen: { infinitive: "stoßen", meaning: "itmek" },
    gestrichen: { infinitive: "streichen", meaning: "boyamak, iptal etmek" },
    gestritten: { infinitive: "streiten", meaning: "tartışmak" },
    getragen: { infinitive: "tragen", meaning: "taşımak" },
    getroffen: { infinitive: "treffen", meaning: "buluşmak" },
    getrieben: { infinitive: "treiben", meaning: "sürmek (spor vb.)" },
    getrunken: { infinitive: "trinken", meaning: "içmek" },
    getan: { infinitive: "tun", meaning: "yapmak" },
    vergessen: { infinitive: "vergessen", meaning: "unutmak" },
    verstanden: { infinitive: "verstehen", meaning: "anlamak" },
    verloren: { infinitive: "verlieren", meaning: "kaybetmek" },
    verlassen: { infinitive: "verlassen", meaning: "terk etmek" },
    verschwunden: { infinitive: "verschwinden", meaning: "kaybolmak" },
    verziehen: { infinitive: "verzeihen", meaning: "affetmek" },
    gewachsen: { infinitive: "wachsen", meaning: "büyümek, gelişmek" },
    gewählt: { infinitive: "wählen", meaning: "seçmek" },
    gewaschen: { infinitive: "waschen", meaning: "yıkamak" },
    geweckt: { infinitive: "wecken", meaning: "uyandırmak" },
    geworden: { infinitive: "werden", meaning: "olmak" },
    geworfen: { infinitive: "werfen", meaning: "fırlatmak" },
    gewusst: { infinitive: "wissen", meaning: "bilmek" },
    gewollt: { infinitive: "wollen", meaning: "istemek" },
    gezogen: { infinitive: "ziehen", meaning: "çekmek" },
    gezwungen: { infinitive: "zwingen", meaning: "zorlamak" },
    abgebaut: { infinitive: "abbauen", meaning: "sökmek, azaltmak, yıkmak" },
    abgebildet: { infinitive: "abbilden", meaning: "göstermek, resmetmek" },
    abgegeben: { infinitive: "abgeben", meaning: "vermek, teslim etmek" },
    abhandengekommen: { infinitive: "abhandenkommen", meaning: "kaybolmak" },
    abgelegt: { infinitive: "ablegen", meaning: "çıkarmak, bırakmak" },
    abgelenkt: { infinitive: "ablenken", meaning: "dikkat dağıtmak" },
    abgelesen: {
      infinitive: "ablesen",
      meaning: "okumak, okumak (sayacı vb.)",
    },
    abgenutzt: {
      infinitive: "abnutzen",
      meaning: "aşındırmak, kullanarak eskimek",
    },
    abgesaugt: { infinitive: "absaugen", meaning: "emmek, çekmek" },
    abgeschafft: { infinitive: "abschaffen", meaning: "ortadan kaldırmak" },
    absolviert: { infinitive: "absolvieren", meaning: "tamamlamak, bitirmek" },
    abgestammt: { infinitive: "abstammen", meaning: "soyundan gelmek" },
    abgestaubt: { infinitive: "abstauben", meaning: "toz almak" },
    abgestritten: { infinitive: "abstreiten", meaning: "inkar etmek" },
    abgestürzt: { infinitive: "abstürzen", meaning: "düşmek, çakılmak" },
    abgewichen: { infinitive: "abweichen", meaning: "sapmak, farklı olmak" },
    abgewendet: {
      infinitive: "abwenden",
      meaning: "yön değiştirmek, çevirmek",
    },
    abgewischt: { infinitive: "abwischen", meaning: "silmek, süpürmek" },
    gealtert: { infinitive: "altern", meaning: "yaşlanmak" },
    angefallen: { infinitive: "anfallen", meaning: "saldırmak, ortaya çıkmak" },
    angefühlt: { infinitive: "anfühlen", meaning: "hissetmek, dokunmak" },
    angeklagt: { infinitive: "anklagen", meaning: "suçlamak" },
    angelegt: {
      infinitive: "anlegen",
      meaning: "yatırım yapmak, yerleştirmek",
    },
    angepasst: { infinitive: "anpassen", meaning: "uydurmak, adapte olmak" },
    angesteckt: { infinitive: "anstecken", meaning: "bulaştırmak" },
    überstanden: { infinitive: "überstehen", meaning: "atlatmak" },
    ersteigen: { infinitive: "ersteigen", meaning: "tırmanmak" },
    vorbereitet: { infinitive: "vorbereiten", meaning: "hazırlamak" },
    gestürzt: { infinitive: "stürzen", meaning: "düşmek" },
    zerrissen: { infinitive: "zerreißen", meaning: "yırtmak" },
    weitergestiegen: {
      infinitive: "weitersteigen",
      meaning: "devam etmek (tırmanmaya)",
    },
    verwittert: { infinitive: "verwittern", meaning: "aşınmak" },
    berührt: { infinitive: "berühren", meaning: "dokunmak" },
    erschienen: { infinitive: "erscheinen", meaning: "görünmek" },
    gesucht: { infinitive: "suchen", meaning: "aramak" },
    gespürt: { infinitive: "spüren", meaning: "hissetmek" },
    zurückgekehrt: { infinitive: "zurückkehren", meaning: "geri dönmek" },
    bemerkt: { infinitive: "bemerken", meaning: "fark etmek" },
    verändert: { infinitive: "verändern", meaning: "değiştirmek" },
    verwenden: { infinitive: "verwenden", meaning: "kullanmak" },
    geheilt: { infinitive: "heilen", meaning: "iyileştirmek" },
    gespeist: { infinitive: "speisen", meaning: "yemek vermek" },
    erkannt: { infinitive: "erkennen", meaning: "tanımak" },
    gesammelt: { infinitive: "sammeln", meaning: "toplamak" },
    geendet: { infinitive: "enden", meaning: "sona ermek" },
  };

  const VerbTooltip = ({ verb, children }) => (
    <span
      className="relative inline-block"
      onMouseEnter={() => setHoveredVerb(verb)}
      onMouseLeave={() => setHoveredVerb(null)}
    >
      <span className="font-bold text-blue-800 cursor-pointer hover:text-blue-600 transition-colors">
        {children}
      </span>
      {hoveredVerb === verb && verbs[verb] && (
        <div className="absolute z-10 bg-gray-800 text-white p-2 rounded shadow-lg whitespace-nowrap -top-12 left-1/2 transform -translate-x-1/2">
          <div className="text-sm">
            <div className="font-semibold">{verbs[verb].infinitive}</div>
            <div className="text-gray-300">{verbs[verb].meaning}</div>
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      )}
    </span>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Die Geheimnisvolle Reise - C1 Seviye Hikaye
      </h1>

      <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
        <div className="text-lg leading-relaxed space-y-4 text-gray-700">
          <p>
            Es war einmal ein junger Mann namens Erik, der in einem kleinen Dorf{" "}
            <VerbTooltip verb="aufgewachsen">aufgewachsen</VerbTooltip> war.
            Seine Eltern hatten ihn streng{" "}
            <VerbTooltip verb="erzogen">erzogen</VerbTooltip> und ihm
            beigebracht, dass man niemals{" "}
            <VerbTooltip verb="aufgegeben">aufgeben</VerbTooltip> darf. Als Erik
            zwanzig Jahre alt{" "}
            <VerbTooltip verb="geworden">geworden</VerbTooltip> war, hatte er{" "}
            <VerbTooltip verb="entschieden">entschieden</VerbTooltip>, eine
            große Reise zu unternehmen.
          </p>

          <p>
            Am frühen Morgen war Erik{" "}
            <VerbTooltip verb="aufgestanden">aufgestanden</VerbTooltip> und
            hatte sein Frühstück schnell{" "}
            <VerbTooltip verb="aufgegessen">aufgegessen</VerbTooltip>. Seine
            Mutter hatte ihm warme Kleidung{" "}
            <VerbTooltip verb="eingepackt">eingepackt</VerbTooltip> und einen
            Brief <VerbTooltip verb="geschrieben">geschrieben</VerbTooltip>. Der
            Brief hatte wichtige Informationen{" "}
            <VerbTooltip verb="enthalten">enthalten</VerbTooltip>, die Erik auf
            seiner Reise <VerbTooltip verb="geholfen">geholfen</VerbTooltip>{" "}
            hätten.
          </p>

          <p>
            Bevor Erik das Haus{" "}
            <VerbTooltip verb="verlassen">verlassen</VerbTooltip> hatte, war er
            zu seinem Vater <VerbTooltip verb="gegangen">gegangen</VerbTooltip>.
            Sein Vater hatte ihm ein altes Buch{" "}
            <VerbTooltip verb="gegeben">gegeben</VerbTooltip> und{" "}
            <VerbTooltip verb="gesagt">gesagt</VerbTooltip>: "Dieses Buch wird
            dir helfen, wenn du in Schwierigkeiten gerätst." Erik hatte das Buch{" "}
            <VerbTooltip verb="genommen">genommen</VerbTooltip> und es in seinen
            Rucksack <VerbTooltip verb="gesteckt">gesteckt</VerbTooltip>.
          </p>

          <p>
            Die ersten Tage der Reise waren schwierig{" "}
            <VerbTooltip verb="gewesen">gewesen</VerbTooltip>. Erik hatte viele
            Kilometer zu Fuß <VerbTooltip verb="gelaufen">gelaufen</VerbTooltip>{" "}
            und war müde <VerbTooltip verb="geworden">geworden</VerbTooltip>. Er
            hatte in einem kleinen Gasthaus{" "}
            <VerbTooltip verb="übernachtet">übernachtet</VerbTooltip> und dort
            einen merkwürdigen Mann{" "}
            <VerbTooltip verb="getroffen">getroffen</VerbTooltip>. Der Mann
            hatte Erik{" "}
            <VerbTooltip verb="angesprochen">angesprochen</VerbTooltip> und ihm
            eine seltsame Geschichte{" "}
            <VerbTooltip verb="erzählt">erzählt</VerbTooltip>.
          </p>

          <p>
            Der Mann hatte <VerbTooltip verb="berichtet">berichtet</VerbTooltip>
            , dass er vor Jahren eine geheimnisvolle Höhle{" "}
            <VerbTooltip verb="entdeckt">entdeckt</VerbTooltip> hatte. In dieser
            Höhle hatte er einen wertvollen Schatz{" "}
            <VerbTooltip verb="gefunden">gefunden</VerbTooltip>, aber er hatte
            ihn nicht <VerbTooltip verb="mitgenommen">mitgenommen</VerbTooltip>.
            Er hatte Erik <VerbTooltip verb="geraten">geraten</VerbTooltip>,
            nach der Höhle zu suchen, weil er{" "}
            <VerbTooltip verb="geglaubt">geglaubt</VerbTooltip> hatte, dass Erik
            der Richtige für diese Aufgabe sei.
          </p>

          <p>
            Erik hatte lange über diese Geschichte{" "}
            <VerbTooltip verb="nachgedacht">nachgedacht</VerbTooltip>. Er hatte{" "}
            <VerbTooltip verb="beschlossen">beschlossen</VerbTooltip>, nach der
            Höhle zu suchen. Am nächsten Morgen war er früh{" "}
            <VerbTooltip verb="aufgebrochen">aufgebrochen</VerbTooltip> und
            hatte den Weg zum Berg{" "}
            <VerbTooltip verb="eingeschlagen">eingeschlagen</VerbTooltip>. Der
            Weg war steil und gefährlich{" "}
            <VerbTooltip verb="gewesen">gewesen</VerbTooltip>, aber Erik hatte
            nicht <VerbTooltip verb="aufgegeben">aufgegeben</VerbTooltip>.
          </p>

          <p>
            Nach stundenlangem Klettern hatte Erik endlich die Höhle{" "}
            <VerbTooltip verb="erreicht">erreicht</VerbTooltip>. Die Höhle war
            dunkel und geheimnisvoll{" "}
            <VerbTooltip verb="gewesen">gewesen</VerbTooltip>. Erik hatte seine
            Taschenlampe <VerbTooltip verb="angemacht">angemacht</VerbTooltip>{" "}
            und war vorsichtig{" "}
            <VerbTooltip verb="hineingegangen">hineingegangen</VerbTooltip>.
            Tief in der Höhle hatte er eine alte Truhe{" "}
            <VerbTooltip verb="entdeckt">entdeckt</VerbTooltip>.
          </p>

          <p>
            Die Truhe war mit einem komplizierten Schloss{" "}
            <VerbTooltip verb="verschlossen">verschlossen</VerbTooltip>{" "}
            <VerbTooltip verb="gewesen">gewesen</VerbTooltip>. Erik hatte sich{" "}
            <VerbTooltip verb="erinnert">erinnert</VerbTooltip>, dass sein Vater
            ihm ein altes Buch <VerbTooltip verb="gegeben">gegeben</VerbTooltip>{" "}
            hatte. Er hatte das Buch{" "}
            <VerbTooltip verb="herausgenommen">herausgenommen</VerbTooltip> und
            darin <VerbTooltip verb="geblättert">geblättert</VerbTooltip>. Zu
            seiner Überraschung hatte das Buch die Lösung für das Schloss{" "}
            <VerbTooltip verb="enthalten">enthalten</VerbTooltip>.
          </p>

          <p>
            Erik hatte das Schloss{" "}
            <VerbTooltip verb="geöffnet">geöffnet</VerbTooltip> und in der Truhe
            einen wunderschönen goldenen Anhänger{" "}
            <VerbTooltip verb="gefunden">gefunden</VerbTooltip>. Aber das war
            nicht alles - unter dem Anhänger hatte er eine alte Karte{" "}
            <VerbTooltip verb="entdeckt">entdeckt</VerbTooltip>. Die Karte hatte
            den Weg zu einem noch größeren Schatz{" "}
            <VerbTooltip verb="gezeigt">gezeigt</VerbTooltip>.
          </p>

          <p>
            Erik hatte <VerbTooltip verb="verstanden">verstanden</VerbTooltip>,
            dass seine Reise erst{" "}
            <VerbTooltip verb="begonnen">begonnen</VerbTooltip> hatte. Er hatte
            den Anhänger{" "}
            <VerbTooltip verb="mitgenommen">mitgenommen</VerbTooltip> und die
            Karte sorgfältig <VerbTooltip verb="studiert">studiert</VerbTooltip>
            . Als er die Höhle{" "}
            <VerbTooltip verb="verlassen">verlassen</VerbTooltip> hatte, hatte
            die Sonne bereits{" "}
            <VerbTooltip verb="begonnen">begonnen</VerbTooltip> unterzugehen.
          </p>

          <p>
            Diese Nacht hatte Erik unter dem Sternenhimmel{" "}
            <VerbTooltip verb="geschlafen">geschlafen</VerbTooltip> und seltsame
            Träume <VerbTooltip verb="gehabt">gehabt</VerbTooltip>. Er hatte{" "}
            <VerbTooltip verb="geträumt">geträumt</VerbTooltip>, dass der
            Anhänger magische Kräfte{" "}
            <VerbTooltip verb="besessen">besessen</VerbTooltip> hatte. Am
            nächsten Morgen hatte Erik{" "}
            <VerbTooltip verb="entschieden">entschieden</VerbTooltip>, der Karte
            zu folgen und sein Abenteuer{" "}
            <VerbTooltip verb="fortzusetzen">fortzusetzen</VerbTooltip>.
          </p>

          <p>
            So war Erik zu einem wahren Abenteurer{" "}
            <VerbTooltip verb="geworden">geworden</VerbTooltip>, der{" "}
            <VerbTooltip verb="gelernt">gelernt</VerbTooltip> hatte, dass die
            größten Schätze oft dort{" "}
            <VerbTooltip verb="versteckt">versteckt</VerbTooltip> sind, wo man
            sie am wenigsten erwartet. Seine Reise hatte ihn{" "}
            <VerbTooltip verb="gelehrt">gelehrt</VerbTooltip>, dass Mut und
            Ausdauer die wichtigsten Eigenschaften eines jeden Abenteurers sind.
          </p>

          <p>
            Während seiner weiteren Reise hatte Erik viele Gefahren{" "}
            <VerbTooltip verb="überstanden">überstanden</VerbTooltip>. Einmal
            war er von Dieben{" "}
            <VerbTooltip verb="angegriffen">angegriffen</VerbTooltip> worden,
            die ihm seinen Schatz{" "}
            <VerbTooltip verb="gestohlen">gestohlen</VerbTooltip> hatten. Er
            hatte sich <VerbTooltip verb="gestritten">gestritten</VerbTooltip>{" "}
            und war fast <VerbTooltip verb="gestorben">gestorben</VerbTooltip>,
            aber seine Entschlossenheit hatte ihm{" "}
            <VerbTooltip verb="geholfen">geholfen</VerbTooltip>, die Situation
            zu überwinden.
          </p>

          <p>
            In einem Dorf hatte Erik einen alten Weisen{" "}
            <VerbTooltip verb="getroffen">getroffen</VerbTooltip>, der ihm{" "}
            <VerbTooltip verb="geraten">geraten</VerbTooltip> hatte, den Berg zu{" "}
            <VerbTooltip verb="ersteigen">ersteigen</VerbTooltip>. "Dort oben,"
            hatte der Weise <VerbTooltip verb="gesagt">gesagt</VerbTooltip>,
            "wirst du die Wahrheit{" "}
            <VerbTooltip verb="finden">finden</VerbTooltip>." Erik hatte Wasser{" "}
            <VerbTooltip verb="getrunken">getrunken</VerbTooltip> und sich für
            den schwierigen Aufstieg{" "}
            <VerbTooltip verb="vorbereitet">vorbereitet</VerbTooltip>.
          </p>

          <p>
            Der Aufstieg war gefährlich{" "}
            <VerbTooltip verb="gewesen">gewesen</VerbTooltip>. Erik hatte
            schwere Steine <VerbTooltip verb="getragen">getragen</VerbTooltip>{" "}
            und war mehrmals <VerbTooltip verb="gestürzt">gestürzt</VerbTooltip>
            . Seine Kleidung war{" "}
            <VerbTooltip verb="zerrissen">zerrissen</VerbTooltip> und seine
            Hände waren von Dornen{" "}
            <VerbTooltip verb="gestochen">gestochen</VerbTooltip> worden. Aber
            er hatte nicht{" "}
            <VerbTooltip verb="aufgegeben">aufgegeben</VerbTooltip> und war{" "}
            <VerbTooltip verb="weitergestiegen">weitergestiegen</VerbTooltip>.
          </p>

          <p>
            Auf dem Gipfel hatte Erik eine seltsame Statue{" "}
            <VerbTooltip verb="entdeckt">entdeckt</VerbTooltip>. Die Statue war
            alt und <VerbTooltip verb="verwittert">verwittert</VerbTooltip>{" "}
            <VerbTooltip verb="gewesen">gewesen</VerbTooltip>. Er hatte sie
            vorsichtig <VerbTooltip verb="berührt">berührt</VerbTooltip> und
            plötzlich war sie{" "}
            <VerbTooltip verb="verschwunden">verschwunden</VerbTooltip>. An
            ihrer Stelle war ein großer Kristall{" "}
            <VerbTooltip verb="erschienen">erschienen</VerbTooltip>.
          </p>

          <p>
            Der Kristall hatte eine magische Kraft{" "}
            <VerbTooltip verb="besessen">besessen</VerbTooltip>. Erik hatte{" "}
            <VerbTooltip verb="gewusst">gewusst</VerbTooltip>, dass dies der
            wahre Schatz war, nach dem er{" "}
            <VerbTooltip verb="gesucht">gesucht</VerbTooltip> hatte. Er hatte
            den Kristall <VerbTooltip verb="genommen">genommen</VerbTooltip> und
            hatte <VerbTooltip verb="gespürt">gespürt</VerbTooltip>, wie eine
            warme Energie durch seinen Körper{" "}
            <VerbTooltip verb="geflossen">geflossen</VerbTooltip> war.
          </p>

          <p>
            Als Erik wieder ins Dorf{" "}
            <VerbTooltip verb="zurückgekehrt">zurückgekehrt</VerbTooltip> war,
            hatte er <VerbTooltip verb="bemerkt">bemerkt</VerbTooltip>, dass er
            sich <VerbTooltip verb="verändert">verändert</VerbTooltip> hatte. Er
            war <VerbTooltip verb="gewachsen">gewachsen</VerbTooltip> - nicht
            körperlich, sondern geistig. Er hatte{" "}
            <VerbTooltip verb="vergessen">vergessen</VerbTooltip>, wie es war,
            schwach zu sein. Die Menschen hatten ihn{" "}
            <VerbTooltip verb="angesprochen">angesprochen</VerbTooltip> und um
            Hilfe <VerbTooltip verb="gebeten">gebeten</VerbTooltip>.
          </p>

          <p>
            Erik hatte <VerbTooltip verb="entschieden">entschieden</VerbTooltip>
            , seine Kraft für das Gute zu{" "}
            <VerbTooltip verb="verwenden">verwenden</VerbTooltip>. Er hatte
            kranke Menschen <VerbTooltip verb="geheilt">geheilt</VerbTooltip>{" "}
            und Hungrige <VerbTooltip verb="gespeist">gespeist</VerbTooltip>.
            Seine Hände waren{" "}
            <VerbTooltip verb="gewaschen">gewaschen</VerbTooltip> und rein{" "}
            <VerbTooltip verb="geworden">geworden</VerbTooltip>. Die
            Dorfbewohner hatten ihn zu ihrem Anführer{" "}
            <VerbTooltip verb="gewählt">gewählt</VerbTooltip>.
          </p>

          <p>
            Jahre später hatte Erik über seine Abenteuer{" "}
            <VerbTooltip verb="nachgedacht">nachgedacht</VerbTooltip>. Er hatte{" "}
            <VerbTooltip verb="erkannt">erkannt</VerbTooltip>, dass der wahre
            Schatz nicht Gold oder Edelsteine{" "}
            <VerbTooltip verb="gewesen">gewesen</VerbTooltip> waren, sondern die
            Weisheit und Erfahrung, die er auf seinem Weg{" "}
            <VerbTooltip verb="gesammelt">gesammelt</VerbTooltip> hatte. So
            hatte seine Geschichte{" "}
            <VerbTooltip verb="geendet">geendet</VerbTooltip> - nicht mit
            Reichtum, sondern mit innerem Frieden und Zufriedenheit.
          </p>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-600">
        <p>
          Fiillerin üzerine gelin, yalın halini ve Türkçe anlamını görmek için!
        </p>
        <p>Toplam {Object.keys(verbs).length} fiil kullanılmıştır.</p>
      </div>
    </div>
  );
};

export default GermanVerbsStory;
