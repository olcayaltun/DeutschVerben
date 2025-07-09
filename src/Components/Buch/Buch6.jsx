import React, { useState } from "react";

const GermanStoryC1 = () => {
  const [hoveredVerb, setHoveredVerb] = useState(null);

  const verbs = {
    abgebrochen: "abbrechen - iptal etmek, kesmek",
    abgehangen: "abhängen - bağlı olmak, takılmak",
    abgelaufen: "ablaufen - süresi dolmak",
    abgenommen: "abnehmen - kilo vermek, azalmak",
    abgeschlossen: "abschließen - kilitlemek, tamamlamak",
    abgeschnitten: "abschneiden - kesmek",
    abgeschrieben: "abschreiben - kopya çekmek, bir yerden yazmak",
    abgesendet: "absenden - göndermek",
    abgesunken: "absinken - batmak, alçalmak",
    abgestiegen: "absteigen - inmek (bisiklet, at vb.)",
    angegeben: "angeben - belirtmek",
    angegriffen: "angreifen - saldırmak",
    angehalten: "anhalten - durdurmak",
    angelogen: "anlügen - yalan söylemek",
    angenommen: "annehmen - kabul etmek",
    angesehen: "ansehen - bakmak",
    angesprochen: "ansprechen - hitap etmek",
    angestiegen: "ansteigen - artmak, yükselmek",
    angewachsen: "anwachsen - büyümek, artmak",
    angewandt: "anwenden - uygulamak",
    angezogen: "anziehen - giyinmek, çekmek",
    aufgebrochen: "aufbrechen - kırmak, yola çıkmak",
    aufgegessen: "aufessen - yiyip bitirmek",
    aufgegeben: "aufgeben - pes etmek",
    aufgehalten: "aufhalten - durdurmak",
    aufgehoben: "aufheben - kaldırmak",
    aufgenommen: "aufnehmen - kabul etmek, kaydetmek",
    aufgestanden: "aufstehen - ayağa kalkmak",
    aufgetreten: "auftreten - sahneye çıkmak",
    aufgewachsen: "aufwachsen - büyümek (çocuk)",
    ausgebrochen: "ausbrechen - patlak vermek, kaçmak",
    ausgefallen: "ausfallen - iptal olmak, dökülmek (saç)",
    ausgegangen: "ausgehen - dışarı çıkmak",
    ausgehalten: "aushalten - dayanmak",
    ausgeliehen: "ausleihen - ödünç vermek",
    ausgesehen: "aussehen - görünmek",
    ausgestiegen: "aussteigen - inmek (taşıttan)",
    ausgezogen: "ausziehen - soyunmak, taşınmak (evden)",
    gebacken: "backen - fırında pişirmek",
    begriffen: "begreifen - anlamak",
    behalten: "behalten - saklamak, korumak",
    beigebracht: "beibringen - öğretmek",
    beiseitegelegt: "beiseitelegen - bir kenara koymak",
    beigetragen: "beitragen - katkıda bulunmak",
    bekommen: "bekommen - almak",
    beraten: "beraten - danışmak, tavsiye vermek",
    beschlossen: "beschließen - karar vermek",
    beschrieben: "beschreiben - tanımlamak",
    besprochen: "besprechen - görüşmek",
    bestanden: "bestehen - başarmak, var olmak",
    betragen: "betragen - tutmak, etmek (miktar)",
    betrieben: "betreiben - işletmek",
    betrogen: "betrügen - aldatmak",
    bewiesen: "beweisen - kanıtlamak",
    beworben: "bewerben - başvurmak (iş vb.)",
    geboten: "bieten - teklif etmek",
    gebunden: "binden - bağlamak",
    gebeten: "bitten - rica etmek",
    geblieben: "bleiben - kalmak",
    gebrochen: "brechen - kırmak",
    gebrannt: "brennen - yanmak",
    gebracht: "bringen - getirmek",
    gedacht: "denken - düşünmek",
    gedroschen: "dreschen - dövmek",
    gedrungen: "dringen - nüfuz etmek",
    gedurft: "dürfen - izinli olmak",
    eingebrochen: "einbrechen - hırsızlık yapmak, zorla girmek",
    eingefallen: "einfallen - aklına gelmek",
    eingegeben: "eingeben - girmek (bilgi)",
    eingegangen: "eingehen - girmek",
    eingehalten: "einhalten - uymak",
    eingeladen: "einladen - davet etmek",
    eingenommen: "einnehmen - almak (ilaç vb.)",
    eingeschlafen: "einschlafen - uykuya dalmak",
    eingeschlossen: "einschließen - kilitlemek, içermek",
    eingesehen: "einsehen - anlamak, görmek",
    eingestiegen: "einsteigen - binmek (taşıta)",
    eingetragen: "eintragen - kaydetmek, yazmak",
    eingeworfen: "einwerfen - atmak",
    eingezogen: "einziehen - taşınmak (yeni eve)",
    empfohlen: "empfehlen - tavsiye etmek",
    empfangen: "empfangen - almak (misafir vb.)",
    empfunden: "empfinden - hissetmek",
    enthalten: "enthalten - içermek",
    entlassen: "entlassen - işten çıkarmak",
    entschieden: "entscheiden - karar vermek",
    entschlossen: "entschließen - karar vermek",
    entsprochen: "entsprechen - karşılamak",
    entstanden: "entstehen - meydana gelmek",
    erfunden: "erfinden - icat etmek",
    erhalten: "erhalten - almak",
    erkannt: "erkennen - tanımak",
    erschaffen: "erschaffen - yaratmak",
    erschlossen: "erschließen - erişmek",
    erschrocken: "erschrecken - korkmak, korkutmak",
    ersonnen: "ersinnen - tasarlamak",
    erzogen: "erziehen - yetiştirmek",
    gegessen: "essen - yemek yemek",
    gefahren: "fahren - sürmek, gitmek (araçla)",
    gefallen: "fallen - düşmek",
    gefangen: "fangen - yakalamak",
    gefunden: "finden - bulmak",
    geflogen: "fliegen - uçmak",
    geflohen: "fliehen - kaçmak",
    geflossen: "fließen - akmak",
    gefressen: "fressen - yemek (hayvan için)",
    gefroren: "frieren - donmak, üşümek",
    gegeben: "geben - vermek",
    gegangen: "gehen - gitmek",
    gelungen: "gelingen - başarmak",
    genossen: "genießen - tadını çıkarmak",
    geschehen: "geschehen - olmak, meydana gelmek",
    gewonnen: "gewinnen - kazanmak",
    gegossen: "gießen - dökmek, sulamak",
    geglichen: "gleichen - benzemek",
    geglitten: "gleiten - kaymak",
    gegraben: "graben - kazmak",
    gegriffen: "greifen - yakalamak, tutmak",
    gehabt: "haben - sahip olmak",
    gehalten: "halten - tutmak",
    gehangen: "hängen - asmak, asılı durmak",
    gehoben: "heben - kaldırmak",
    geheißen: "heißen - adı olmak",
    geholfen: "helfen - yardım etmek",
    hergestellt: "herstellen - üretmek",
    hingewiesen: "hinweisen - işaret etmek",
    gekannt: "kennen - tanımak",
    geklungen: "klingen - çalmak (ses)",
    gekommen: "kommen - gelmek",
    gekonnt: "können - yapabilmek",
    gekrochen: "kriechen - sürünmek",
    geladen: "laden - yüklemek, çağırmak",
    gelassen: "lassen - bırakmak, izin vermek",
    gelaufen: "laufen - koşmak",
    gelitten: "leiden - acı çekmek",
    geliehen: "leihen - ödünç almak",
    gelesen: "lesen - okumak",
    gelegen: "liegen - yatmak, bulunmak",
    gelogen: "lügen - yalan söylemek",
    gemessen: "messen - ölçmek",
    gemocht: "mögen - sevmek, hoşlanmak",
    gemusst: "müssen - zorunda olmak",
    genommen: "nehmen - almak",
    genannt: "nennen - adlandırmak",
    gepfiffen: "pfeifen - ıslık çalmak",
    geraten: "raten - tavsiye vermek, tahmin etmek",
    geritten: "reiten - ata binmek",
    gerochen: "riechen - koklamak, kokmak",
    gerufen: "rufen - çağırmak",
    geschaffen: "schaffen - yaratmak, başarmak",
    geschienen: "scheinen - parlamak, görünmek",
    geschoben: "schieben - itmek",
    geschossen: "schießen - ateş etmek",
    geschlafen: "schlafen - uyumak",
    geschlagen: "schlagen - vurmak",
    geschlichen: "schleichen - sessizce yaklaşmak",
    geschlossen: "schließen - kapatmak",
    geschlungen: "schlingen - sarmak, yutmak",
    geschmissen: "schmeißen - fırlatmak",
    geschmolzen: "schmelzen - erimek, eritmek",
    geschnitten: "schneiden - kesmek",
    geschrieben: "schreiben - yazmak",
    geschrieen: "schreien - bağırmak",
    geschwiegen: "schweigen - susmak",
    geschwommen: "schwimmen - yüzmek",
    gesehen: "sehen - görmek",
    gewesen: "sein - olmak",
    gesungen: "singen - şarkı söylemek",
    gesunken: "sinken - batmak, düşmek",
    gesessen: "sitzen - oturmak",
    gesprochen: "sprechen - konuşmak",
    gesprungen: "springen - zıplamak",
    gestochen: "stechen - sokmak, batırmak",
    gestanden: "stehen - durmak",
    gestohlen: "stehlen - çalmak",
    gestiegen: "steigen - tırmanmak, yükselmek",
    gestorben: "sterben - ölmek",
    gestoßen: "stoßen - itmek",
    gestrichen: "streichen - boyamak, iptal etmek",
    gestritten: "streiten - kavga etmek",
    getragen: "tragen - taşımak, giymek",
    getroffen: "treffen - buluşmak, vurmak",
    getrieben: "treiben - sürmek, yapmak",
    getreten: "treten - tekme atmak",
    getrunken: "trinken - içmek",
    getan: "tun - yapmak",
    überfahren: "überfahren - ezmek (arabayla)",
    überflogen: "überfliegen - gözden geçirmek",
    übergeben: "übergeben - teslim etmek",
    übernommen: "übernehmen - devralmak",
    überschlafen: "überschlafen - bir gece üzerine düşünmek",
    überschnitten: "überschneiden - kesişmek",
    überschrieben: "überschreiben - başlık atmak",
    übersprungen: "überspringen - atlamak",
    übertragen: "übertragen - nakletmek",
    übertrieben: "übertreiben - abartmak",
    umfahren: "umfahren - etrafından dolaşmak",
    umgegangen: "umgehen - kaçınmak, dolaşmak",
    umgekommen: "umkommen - ölmek",
    umgesehen: "umsehen - etrafa bakmak",
  };

  const VerbSpan = ({ verb, children }) => (
    <span
      className="font-bold text-blue-600 cursor-pointer hover:bg-blue-100 px-1 py-0.5 rounded transition-colors relative"
      onMouseEnter={() => setHoveredVerb(verb)}
      onMouseLeave={() => setHoveredVerb(null)}
    >
      {children}
      {hoveredVerb === verb && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap z-10 max-w-xs">
          {verbs[verb]}
        </div>
      )}
    </span>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Der Unternehmer und sein außergewöhnliches Leben
        </h1>
        <p className="text-gray-600">
          Eine C1-Niveau Geschichte mit 200 deutschen Verben in Perfect-Form
        </p>
        <p className="text-sm text-blue-600 mt-2">
          💡 Tipp: Fahren Sie mit der Maus über die blauen Wörter, um die
          Türkçe-Übersetzung zu sehen!
        </p>
      </div>

      <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
        <p>
          Thomas Müller hatte sein Leben völlig verändert. Als junger Mann hatte
          er sein Studium <VerbSpan verb="abgebrochen">abgebrochen</VerbSpan>{" "}
          und hatte von seinen Eltern{" "}
          <VerbSpan verb="abgehangen">abgehangen</VerbSpan>. Sein
          Studentenausweis war <VerbSpan verb="abgelaufen">abgelaufen</VerbSpan>{" "}
          und er hatte bereits zehn Kilogramm{" "}
          <VerbSpan verb="abgenommen">abgenommen</VerbSpan>, weil er sich nicht
          richtig ernährt hatte.
        </p>

        <p>
          Seine Familie hatte das Gespräch über seine Zukunft{" "}
          <VerbSpan verb="abgeschlossen">abgeschlossen</VerbSpan> und ihm alle
          finanziellen Mittel
          <VerbSpan verb="abgeschnitten">abgeschnitten</VerbSpan>. Er hatte von
          seinem Kommilitonen{" "}
          <VerbSpan verb="abgeschrieben">abgeschrieben</VerbSpan> und mehrere
          Bewerbungen <VerbSpan verb="abgesendet">abgesendet</VerbSpan>. Seine
          Motivation war dramatisch{" "}
          <VerbSpan verb="abgesunken">abgesunken</VerbSpan>.
        </p>

        <p>
          Eines Tages war er vom Bus{" "}
          <VerbSpan verb="abgestiegen">abgestiegen</VerbSpan> und hatte in einer
          Stellenanzeige seine Qualifikationen
          <VerbSpan verb="angegeben">angegeben</VerbSpan>. Ein Unternehmen hatte
          ihn hart <VerbSpan verb="angegriffen">angegriffen</VerbSpan> und das
          Vorstellungsgespräch <VerbSpan verb="angehalten">angehalten</VerbSpan>
          . Der Personalchef hatte ihn{" "}
          <VerbSpan verb="angelogen">angelogen</VerbSpan>
          und erst später die Wahrheit über die Arbeitsbedingungen preisgegeben.
        </p>

        <p>
          Trotzdem hatte Thomas das Jobangebot{" "}
          <VerbSpan verb="angenommen">angenommen</VerbSpan> und sich die Firma
          genauer <VerbSpan verb="angesehen">angesehen</VerbSpan>. Er hatte die
          Mitarbeiter freundlich{" "}
          <VerbSpan verb="angesprochen">angesprochen</VerbSpan> und bemerkt,
          dass die Umsätze stetig
          <VerbSpan verb="angestiegen">angestiegen</VerbSpan> waren. Das
          Unternehmen war in den letzten Jahren stark{" "}
          <VerbSpan verb="angewachsen">angewachsen</VerbSpan>.
        </p>

        <p>
          Thomas hatte innovative Methoden{" "}
          <VerbSpan verb="angewandt">angewandt</VerbSpan> und jeden Morgen
          seinen besten Anzug
          <VerbSpan verb="angezogen">angezogen</VerbSpan>. Früh am Morgen war er
          zu Geschäftsterminen{" "}
          <VerbSpan verb="aufgebrochen">aufgebrochen</VerbSpan> und hatte seine
          Mittagspause vollständig{" "}
          <VerbSpan verb="aufgegessen">aufgegessen</VerbSpan>. Niemals hatte er
          bei schwierigen Projekten
          <VerbSpan verb="aufgegeben">aufgegeben</VerbSpan>.
        </p>

        <p>
          Sein Chef hatte ihn oft{" "}
          <VerbSpan verb="aufgehalten">aufgehalten</VerbSpan> und wichtige
          Dokumente
          <VerbSpan verb="aufgehoben">aufgehoben</VerbSpan>. Das Unternehmen
          hatte neue Mitarbeiter{" "}
          <VerbSpan verb="aufgenommen">aufgenommen</VerbSpan> und Thomas war
          jeden Tag pünktlich{" "}
          <VerbSpan verb="aufgestanden">aufgestanden</VerbSpan>. Bei der
          Weihnachtsfeier war er vor allen Kollegen
          <VerbSpan verb="aufgetreten">aufgetreten</VerbSpan> und hatte eine
          inspirierende Rede gehalten.
        </p>

        <p>
          Thomas war in einem kleinen Dorf{" "}
          <VerbSpan verb="aufgewachsen">aufgewachsen</VerbSpan>, aber dann war
          ein Skandal in seinem Unternehmen
          <VerbSpan verb="ausgebrochen">ausgebrochen</VerbSpan>. Das wichtigste
          Meeting war <VerbSpan verb="ausgefallen">ausgefallen</VerbSpan> und er
          war abends nicht <VerbSpan verb="ausgegangen">ausgegangen</VerbSpan>.
          Er hatte den Druck kaum{" "}
          <VerbSpan verb="ausgehalten">ausgehalten</VerbSpan>.
        </p>

        <p>
          Seinem Kollegen hatte er Geld{" "}
          <VerbSpan verb="ausgeliehen">ausgeliehen</VerbSpan> und sehr müde{" "}
          <VerbSpan verb="ausgesehen">ausgesehen</VerbSpan>. Am Ende war er aus
          dem Unternehmen <VerbSpan verb="ausgestiegen">ausgestiegen</VerbSpan>{" "}
          und aus seiner alten Wohnung
          <VerbSpan verb="ausgezogen">ausgezogen</VerbSpan>. Seine Mutter hatte
          für ihn Kuchen <VerbSpan verb="gebacken">gebacken</VerbSpan> und er
          hatte endlich die Situation{" "}
          <VerbSpan verb="begriffen">begriffen</VerbSpan>.
        </p>

        <p>
          Thomas hatte seine Würde <VerbSpan verb="behalten">behalten</VerbSpan>{" "}
          und sich selbst Programmieren{" "}
          <VerbSpan verb="beigebracht">beigebracht</VerbSpan>. Er hatte sein
          Erspartes <VerbSpan verb="beiseitegelegt">beiseitegelegt</VerbSpan>{" "}
          und zu einem neuen Projekt
          <VerbSpan verb="beigetragen">beigetragen</VerbSpan>. Durch harte
          Arbeit hatte er Anerkennung{" "}
          <VerbSpan verb="bekommen">bekommen</VerbSpan> und sich von Experten{" "}
          <VerbSpan verb="beraten">beraten</VerbSpan> lassen.
        </p>

        <p>
          Er hatte <VerbSpan verb="beschlossen">beschlossen</VerbSpan>, sein
          eigenes Startup zu gründen. In seinem Businessplan hatte er sein
          Konzept detailliert{" "}
          <VerbSpan verb="beschrieben">beschrieben</VerbSpan> und mit Investoren{" "}
          <VerbSpan verb="besprochen">besprochen</VerbSpan>. Er hatte alle
          Prüfungen <VerbSpan verb="bestanden">bestanden</VerbSpan> und das
          Startkapital hatte fünfzigtausend Euro
          <VerbSpan verb="betragen">betragen</VerbSpan>.
        </p>

        <p>
          Thomas hatte ein innovatives Softwareunternehmen{" "}
          <VerbSpan verb="betrieben">betrieben</VerbSpan> und niemals seine
          Kunden
          <VerbSpan verb="betrogen">betrogen</VerbSpan>. Er hatte die Qualität
          seiner Produkte <VerbSpan verb="bewiesen">bewiesen</VerbSpan> und sich
          um internationale Märkte <VerbSpan verb="beworben">beworben</VerbSpan>
          . Seinen Kunden hatte er exzellente Dienstleistungen
          <VerbSpan verb="geboten">geboten</VerbSpan> und Partnerschaften fest{" "}
          <VerbSpan verb="gebunden">gebunden</VerbSpan>.
        </p>

        <p>
          Er hatte seine Mitarbeiter um Überstunden{" "}
          <VerbSpan verb="gebeten">gebeten</VerbSpan> und war seiner Vision treu
          <VerbSpan verb="geblieben">geblieben</VerbSpan>. Niemals hatte er
          unter dem Druck <VerbSpan verb="gebrochen">gebrochen</VerbSpan> und
          sein Ehrgeiz hatte lichterloh{" "}
          <VerbSpan verb="gebrannt">gebrannt</VerbSpan>. Er hatte revolutionäre
          Ideen <VerbSpan verb="gebracht">gebracht</VerbSpan> und strategisch{" "}
          <VerbSpan verb="gedacht">gedacht</VerbSpan>.
        </p>

        <p>
          Seine Konkurrenten hatte er{" "}
          <VerbSpan verb="gedroschen">gedroschen</VerbSpan> und in neue Märkte
          <VerbSpan verb="gedrungen">gedrungen</VerbSpan>. Er hatte expandieren{" "}
          <VerbSpan verb="gedurft">gedurft</VerbSpan> und war in das Büro der
          Konkurrenz <VerbSpan verb="eingebrochen">eingebrochen</VerbSpan> -
          metaphorisch gesprochen natürlich. Ihm war eine geniale
          Marketingstrategie <VerbSpan verb="eingefallen">eingefallen</VerbSpan>
          .
        </p>

        <p>
          Er hatte wichtige Daten{" "}
          <VerbSpan verb="eingegeben">eingegeben</VerbSpan> und war neue
          Kooperationen <VerbSpan verb="eingegangen">eingegangen</VerbSpan>.
          Thomas hatte alle Termine{" "}
          <VerbSpan verb="eingehalten">eingehalten</VerbSpan> und
          Geschäftspartner zum Abendessen
          <VerbSpan verb="eingeladen">eingeladen</VerbSpan>. Er hatte täglich
          Vitamine <VerbSpan verb="eingenommen">eingenommen</VerbSpan> und war
          spät <VerbSpan verb="eingeschlafen">eingeschlafen</VerbSpan>.
        </p>

        <p>
          Thomas hatte seine Mitarbeiter{" "}
          <VerbSpan verb="eingeschlossen">eingeschlossen</VerbSpan> und seine
          Fehler
          <VerbSpan verb="eingesehen">eingesehen</VerbSpan>. Er war in den
          ersten Zug <VerbSpan verb="eingestiegen">eingestiegen</VerbSpan> und
          hatte sich im Handelsregister{" "}
          <VerbSpan verb="eingetragen">eingetragen</VerbSpan>. Bei Diskussionen
          hatte er konstruktive Argumente
          <VerbSpan verb="eingeworfen">eingeworfen</VerbSpan> und war in eine
          luxuriöse Penthouse-Wohnung{" "}
          <VerbSpan verb="eingezogen">eingezogen</VerbSpan>.
        </p>

        <p>
          Ein Berater hatte ihm eine Expansion{" "}
          <VerbSpan verb="empfohlen">empfohlen</VerbSpan> und er hatte wichtige
          Gäste
          <VerbSpan verb="empfangen">empfangen</VerbSpan>. Thomas hatte große
          Zufriedenheit <VerbSpan verb="empfunden">empfunden</VerbSpan> und sein
          Erfolg hatte alle Erwartungen{" "}
          <VerbSpan verb="enthalten">enthalten</VerbSpan>. Er hatte ineffiziente
          Mitarbeiter
          <VerbSpan verb="entlassen">entlassen</VerbSpan> und sich für
          internationale Expansion{" "}
          <VerbSpan verb="entschieden">entschieden</VerbSpan>.
        </p>

        <p>
          Thomas hatte sich{" "}
          <VerbSpan verb="entschlossen">entschlossen</VerbSpan>, ein zweites
          Unternehmen zu gründen. Seine Leistungen hatten allen Erwartungen{" "}
          <VerbSpan verb="entsprochen">entsprochen</VerbSpan> und ein
          Technologieimperium war{" "}
          <VerbSpan verb="entstanden">entstanden</VerbSpan>. Er hatte
          bahnbrechende Algorithmen{" "}
          <VerbSpan verb="erfunden">erfunden</VerbSpan> und mehrere
          Auszeichnungen <VerbSpan verb="erhalten">erhalten</VerbSpan>.
        </p>

        <p>
          Seine Mitarbeiter hatten sein Potenzial{" "}
          <VerbSpan verb="erkannt">erkannt</VerbSpan> und er hatte ein
          Technologieökosystem
          <VerbSpan verb="erschaffen">erschaffen</VerbSpan>. Thomas hatte neue
          Märkte <VerbSpan verb="erschlossen">erschlossen</VerbSpan> und war
          über seinen eigenen Erfolg{" "}
          <VerbSpan verb="erschrocken">erschrocken</VerbSpan>. Er hatte geniale
          Strategien
          <VerbSpan verb="ersonnen">ersonnen</VerbSpan> und junge Talente{" "}
          <VerbSpan verb="erzogen">erzogen</VerbSpan>.
        </p>

        <p>
          Thomas hatte in den besten Restaurants{" "}
          <VerbSpan verb="gegessen">gegessen</VerbSpan> und war mit seinem
          Privatjet
          <VerbSpan verb="gefahren">gefahren</VerbSpan>. Sein Unternehmen war
          niemals <VerbSpan verb="gefallen">gefallen</VerbSpan> und er hatte die
          Aufmerksamkeit der Medien{" "}
          <VerbSpan verb="gefangen">gefangen</VerbSpan>. Thomas hatte seine
          Berufung
          <VerbSpan verb="gefunden">gefunden</VerbSpan> und war zu
          internationalen Konferenzen{" "}
          <VerbSpan verb="geflogen">geflogen</VerbSpan>.
        </p>

        <p>
          Vor seinen Problemen war er niemals{" "}
          <VerbSpan verb="geflohen">geflohen</VerbSpan> und das Geld war
          reichlich
          <VerbSpan verb="geflossen">geflossen</VerbSpan>. Seine Kritiker hatten
          Gift und Galle <VerbSpan verb="gefressen">gefressen</VerbSpan> und er
          hatte vor wichtigen Präsentationen{" "}
          <VerbSpan verb="gefroren">gefroren</VerbSpan>. Thomas hatte seinen
          Mitarbeitern Bonusse
          <VerbSpan verb="gegeben">gegeben</VerbSpan> und war seinen eigenen Weg{" "}
          <VerbSpan verb="gegangen">gegangen</VerbSpan>.
        </p>

        <p>
          Ihm war alles <VerbSpan verb="gelungen">gelungen</VerbSpan> und er
          hatte seinen Erfolg <VerbSpan verb="genossen">genossen</VerbSpan>. Ein
          Wunder war <VerbSpan verb="geschehen">geschehen</VerbSpan> und er
          hatte alle Konkurrenten <VerbSpan verb="gewonnen">gewonnen</VerbSpan>.
          Thomas hatte Champagner <VerbSpan verb="gegossen">gegossen</VerbSpan>{" "}
          und sein Erfolg hatte einem Märchen{" "}
          <VerbSpan verb="geglichen">geglichen</VerbSpan>.
        </p>

        <p>
          Er war elegant über das Parkett{" "}
          <VerbSpan verb="geglitten">geglitten</VerbSpan> und hatte tiefe
          Geschäftsbeziehungen
          <VerbSpan verb="gegraben">gegraben</VerbSpan>. Thomas hatte nach den
          Sternen <VerbSpan verb="gegriffen">gegriffen</VerbSpan> und ein
          Millionenvermögen <VerbSpan verb="gehabt">gehabt</VerbSpan>. Er hatte
          seine Marktposition <VerbSpan verb="gehalten">gehalten</VerbSpan> und
          sein Porträt hatte in der Lobby{" "}
          <VerbSpan verb="gehangen">gehangen</VerbSpan>.
        </p>

        <p>
          Thomas hatte sein Unternehmen{" "}
          <VerbSpan verb="gehoben">gehoben</VerbSpan> und "Innovator des Jahres"{" "}
          <VerbSpan verb="geheißen">geheißen</VerbSpan>. Er hatte jungen
          Unternehmern <VerbSpan verb="geholfen">geholfen</VerbSpan> und
          revolutionäre Produkte{" "}
          <VerbSpan verb="hergestellt">hergestellt</VerbSpan>. Thomas hatte auf
          wichtige Trends <VerbSpan verb="hingewiesen">hingewiesen</VerbSpan>{" "}
          und alle Branchenführer <VerbSpan verb="gekannt">gekannt</VerbSpan>.
        </p>

        <p>
          Seine Stimme hatte machtvoll{" "}
          <VerbSpan verb="geklungen">geklungen</VerbSpan> und er war zum
          Wirtschaftsgipfel <VerbSpan verb="gekommen">gekommen</VerbSpan>.
          Thomas hatte alles <VerbSpan verb="gekonnt">gekonnt</VerbSpan> und war
          vor niemandem <VerbSpan verb="gekrochen">gekrochen</VerbSpan>. Er
          hatte Container voller Waren{" "}
          <VerbSpan verb="geladen">geladen</VerbSpan> und seine Konkurrenten in
          Ruhe <VerbSpan verb="gelassen">gelassen</VerbSpan>.
        </p>

        <p>
          Thomas war zu internationalen Märkten{" "}
          <VerbSpan verb="gelaufen">gelaufen</VerbSpan> und hatte unter
          Erfolgsdruck
          <VerbSpan verb="gelitten">gelitten</VerbSpan>. Er hatte sich Geld{" "}
          <VerbSpan verb="geliehen">geliehen</VerbSpan> und Fachzeitschriften{" "}
          <VerbSpan verb="gelesen">gelesen</VerbSpan>. Sein Büro hatte im
          Zentrum <VerbSpan verb="gelegen">gelegen</VerbSpan> und er hatte
          niemals <VerbSpan verb="gelogen">gelogen</VerbSpan>.
        </p>

        <p>
          Thomas hatte seinen Erfolg{" "}
          <VerbSpan verb="gemessen">gemessen</VerbSpan> und Herausforderungen{" "}
          <VerbSpan verb="gemocht">gemocht</VerbSpan>. Er hatte hart arbeiten{" "}
          <VerbSpan verb="gemusst">gemusst</VerbSpan> und große Risiken{" "}
          <VerbSpan verb="genommen">genommen</VerbSpan>. Seine Mitarbeiter
          hatten ihn einen Visionär <VerbSpan verb="genannt">genannt</VerbSpan>{" "}
          und er hatte vor Freude
          <VerbSpan verb="gepfiffen">gepfiffen</VerbSpan>.
        </p>

        <p>
          Berater hatten ihm zur Expansion{" "}
          <VerbSpan verb="geraten">geraten</VerbSpan> und er war auf einem
          weißen Pferd
          <VerbSpan verb="geritten">geritten</VerbSpan> - metaphorisch
          gesprochen. Thomas hatte den Duft des Erfolges{" "}
          <VerbSpan verb="gerochen">gerochen</VerbSpan> und die besten
          Investoren <VerbSpan verb="gerufen">gerufen</VerbSpan>. Er hatte ein
          Technologieimperium <VerbSpan verb="geschaffen">geschaffen</VerbSpan>{" "}
          und wie ein Stern <VerbSpan verb="geschienen">geschienen</VerbSpan>.
        </p>

        <p>
          Thomas hatte Grenzen <VerbSpan verb="geschoben">geschoben</VerbSpan>{" "}
          und hatte niemals daneben{" "}
          <VerbSpan verb="geschossen">geschossen</VerbSpan>. Er hatte wenig{" "}
          <VerbSpan verb="geschlafen">geschlafen</VerbSpan> und alle Rekorde{" "}
          <VerbSpan verb="geschlagen">geschlagen</VerbSpan>. Wie ein Schatten
          war er <VerbSpan verb="geschlichen">geschlichen</VerbSpan> und hatte
          wichtige Deals <VerbSpan verb="geschlossen">geschlossen</VerbSpan>.
        </p>

        <p>
          Thomas hatte Partnerschaften{" "}
          <VerbSpan verb="geschlungen">geschlungen</VerbSpan> und alte
          Strukturen <VerbSpan verb="geschmissen">geschmissen</VerbSpan>. Sein
          Herz war vor Stolz <VerbSpan verb="geschmolzen">geschmolzen</VerbSpan>{" "}
          und er hatte alle Verbindungen{" "}
          <VerbSpan verb="geschnitten">geschnitten</VerbSpan> zu toxischen
          Geschäftspartnern. Thomas hatte seine Autobiografie{" "}
          <VerbSpan verb="geschrieben">geschrieben</VerbSpan> und vor Freude{" "}
          <VerbSpan verb="geschrieen">geschrieen</VerbSpan>.
        </p>

        <p>
          Über seine Vergangenheit hatte er{" "}
          <VerbSpan verb="geschwiegen">geschwiegen</VerbSpan> und war in Luxus{" "}
          <VerbSpan verb="geschwommen">geschwommen</VerbSpan>. Thomas hatte die
          Zukunft <VerbSpan verb="gesehen">gesehen</VerbSpan> und ein
          Technologiepionier <VerbSpan verb="gewesen">gewesen</VerbSpan>. Er
          hatte das Lied des Erfolgs{" "}
          <VerbSpan verb="gesungen">gesungen</VerbSpan> und war niemals{" "}
          <VerbSpan verb="gesunken">gesunken</VerbSpan>.
        </p>

        <p>
          Thomas hatte in Vorstandssitzungen{" "}
          <VerbSpan verb="gesessen">gesessen</VerbSpan> und in fünf Sprachen{" "}
          <VerbSpan verb="gesprochen">gesprochen</VerbSpan>. Er war über alle
          Hindernisse <VerbSpan verb="gesprungen">gesprungen</VerbSpan> und
          hatte alle Konkurrenten{" "}
          <VerbSpan verb="gestochen">gestochen</VerbSpan>. Thomas hatte fest{" "}
          <VerbSpan verb="gestanden">gestanden</VerbSpan> und hatte niemals{" "}
          <VerbSpan verb="gestohlen">gestohlen</VerbSpan>.
        </p>

        <p>
          Er war an die Spitze <VerbSpan verb="gestiegen">gestiegen</VerbSpan>{" "}
          und war fast vor Anstrengung{" "}
          <VerbSpan verb="gestorben">gestorben</VerbSpan>. Thomas hatte alle
          Grenzen <VerbSpan verb="gestoßen">gestoßen</VerbSpan> und hatte
          veraltete Konzepte <VerbSpan verb="gestrichen">gestrichen</VerbSpan>.
          Er hatte sich niemals{" "}
          <VerbSpan verb="gestritten">gestritten</VerbSpan> und hatte
          Verantwortung <VerbSpan verb="getragen">getragen</VerbSpan>.
        </p>

        <p>
          Thomas hatte die wichtigsten Investoren{" "}
          <VerbSpan verb="getroffen">getroffen</VerbSpan> und hatte sein
          Unternehmen
          <VerbSpan verb="getrieben">getrieben</VerbSpan>. Er hatte alle
          Konkurrenten <VerbSpan verb="getreten">getreten</VerbSpan> und den
          besten Champagner <VerbSpan verb="getrunken">getrunken</VerbSpan>. Was
          hatte er nicht alles <VerbSpan verb="getan">getan</VerbSpan>!
        </p>

        <p>
          Ein rücksichtsloser Konkurrent hatte einen Fußgänger{" "}
          <VerbSpan verb="überfahren">überfahren</VerbSpan> und Thomas hatte
          schnell die Nachrichten{" "}
          <VerbSpan verb="überflogen">überflogen</VerbSpan>. Er hatte die
          Geschäftsführung <VerbSpan verb="übergeben">übergeben</VerbSpan> und
          hatte weitere Unternehmen{" "}
          <VerbSpan verb="übernommen">übernommen</VerbSpan>. Thomas hatte
          wichtige Entscheidungen
          <VerbSpan verb="überschlafen">überschlafen</VerbSpan> und hatte sich
          mit Konkurrenten{" "}
          <VerbSpan verb="überschnitten">überschnitten</VerbSpan>.
        </p>

        <p>
          Er hatte Verträge{" "}
          <VerbSpan verb="überschrieben">überschrieben</VerbSpan> und hatte
          schwierige Phasen{" "}
          <VerbSpan verb="übersprungen">übersprungen</VerbSpan>. Thomas hatte
          Verantwortung <VerbSpan verb="übertragen">übertragen</VerbSpan> und
          hatte niemals <VerbSpan verb="übertrieben">übertrieben</VerbSpan>. Er
          hatte Hindernisse <VerbSpan verb="umfahren">umfahren</VerbSpan> und
          war mit Problemen clever{" "}
          <VerbSpan verb="umgegangen">umgegangen</VerbSpan>.
        </p>

        <p>
          Glücklicherweise war Thomas niemals{" "}
          <VerbSpan verb="umgekommen">umgekommen</VerbSpan> und hatte sich nach
          neuen Möglichkeiten
          <VerbSpan verb="umgesehen">umgesehen</VerbSpan>. Heute, dreißig Jahre
          später, blickt er auf ein erfülltes Leben zurück. Thomas Müller hatte
          aus einem gescheiterten Studenten einen der erfolgreichsten
          Technologieunternehmer Deutschlands gemacht.
        </p>

        <p className="text-center font-bold text-lg mt-8 text-blue-600">
          Ende der Geschichte
        </p>

        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <h3 className="font-bold text-lg mb-2">Zusammenfassung:</h3>
          <p className="text-sm text-gray-700">
            Diese Geschichte enthält alle 200 deutschen Verben in ihrer
            Perfect-Form (Partizip II mit haben/sein). Jeder hervorgehobene Verb
            kann durch Hover-Effekt die türkische Übersetzung anzeigen. Die
            Geschichte folgt dem Lebensweg von Thomas Müller von einem
            gescheiterten Studenten zu einem erfolgreichen Unternehmer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GermanStoryC1;
