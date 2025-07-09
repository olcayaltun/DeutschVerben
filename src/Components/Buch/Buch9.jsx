import React, { useState } from "react";

const GermanStory = () => {
  const [hoveredVerb, setHoveredVerb] = useState(null);

  const verbDefinitions = {
    ausgebildet: "ausbilden - eğitmek, yetiştirmek",
    manipuliert: "manipulieren - manipüle etmek",
    projiziert: "projizieren - projeksiyonlamak",
    entschieden: "entscheiden - karar vermek",
    ausprobiert: "ausprobieren - denemek",
    gelandet: "landen - inmek, ulaşmak",
    bewirkt: "bewirken - etki etmek, neden olmak",
    nachgedacht: "nachdenken - düşünmek",
    beworben: "bewerben - başvurmak",
    interessiert: "interessieren - ilgilenmek",
    "selbständig gemacht": "sich selbständig machen - bağımsız olmak",
    umgesetzt: "umsetzen - uygulamak",
    empfohlen: "empfehlen - tavsiye etmek",
    erfasst: "erfassen - kavramak, yakalamak",
    erforscht: "erforschen - araştırmak",
    angefragt: "anfragen - sormak, talep etmek",
    eingerichtet: "einrichten - düzenlemek",
    verspätet: "sich verspäten - gecikmek",
    erhalten: "erhalten - almak, elde etmek",
    strukturiert: "strukturieren - yapılandırmak",
    aufgewachsen: "aufwachsen - büyümek",
    gegolten: "gelten - geçerli olmak",
    aufgestellt: "aufstellen - kurmak",
    eingestiegen: "einsteigen - girmek, başlamak",
    mitgebracht: "mitbringen - beraberinde getirmek",
    gezählt: "zählen - saymak",
    geschildert: "schildern - anlatmak",
    vorbereitet: "vorbereiten - hazırlamak",
    übertrieben: "übertreiben - abartmak",
    zugegeben: "zugeben - itiraf etmek",
    informiert: "informieren - bilgilendirmek",
    erfüllt: "erfüllen - yerine getirmek",
    anerkannt: "anerkennen - tanımak",
    erkundigt: "sich erkundigen - bilgi almak",
    finanziert: "finanzieren - finanse etmek",
    beantragt: "beantragen - başvurmak",
    berechnet: "berechnen - hesaplamak",
    nachgewiesen: "nachweisen - kanıtlamak",
    absolviert: "absolvieren - tamamlamak",
    gestaltet: "gestalten - şekillendirmek",
    erworben: "erwerben - kazanmak",
    ausgemacht: "ausmachen - oluşturmak",
    vervollständigt: "vervollständigen - tamamlamak",
    fortgesetzt: "fortsetzen - devam etmek",
    ausgeschlafen: "ausschlafen - uyuyakalmak",
    organisiert: "organisieren - organize etmek",
    umgegangen: "umgehen - ilgilenmek",
    eingeladen: "einladen - davet etmek",
    verstanden: "verstehen - anlamak",
    jongliert: "jonglieren - hokkabazlık yapmak",
    beeindruckt: "beeindrucken - etkilemek",
    beklagt: "beklagen - şikayet etmek",
    wertgeschätzt: "wertschätzen - takdir etmek",
    überzeugt: "überzeugen - ikna etmek",
    genossen: "genießen - tadını çıkarmak",
    abgesichert: "absichern - güvence altına almak",
    zugefügt: "zufügen - vermek, zarar vermek",
    gehaftet: "haften - sorumlu olmak",
    versichert: "versichern - sigortalamak",
    gekündigt: "kündigen - iptal etmek",
    ausgeglichen: "ausgleichen - dengelemek",
    eingespart: "einsparen - tasarruf etmek",
    bestanden: "bestehen - ısrar etmek",
    gegriffen: "greifen - tutmak, geçerli olmak",
    übernommen: "übernehmen - üstlenmek",
    abgeschlossen: "abschließen - kapamak",
    verbunden: "verbinden - bağlamak",
    zurückgegangen: "zurückgehen - geri gitmek",
    getraut: "trauen - nikah kıymak",
    vermählt: "vermählen - evlendirmek",
    zusammengeflossen: "zusammenfließen - birleşmek",
    verschlossen: "verschließen - kilitlemek",
    unterstützt: "unterstützen - desteklemek",
    eingebracht: "einbringen - katkıda bulunmak",
    eingestuft: "einstufen - sınıflandırmak",
    erwartet: "erwarten - beklemek",
    geschenkt: "schenken - hediye etmek",
    entwickelt: "entwickeln - geliştirmek",
    hinzugefügt: "hinzufügen - eklemek",
    wiederholt: "wiederholen - tekrarlamak",
    empfohlen: "empfehlen - tavsiye etmek",
    gefühlt: "fühlen - hissetmek",
    zusammengehalten: "zusammenhalten - bir arada tutmak",
    konfrontiert: "konfrontieren - yüzleştirmek",
    überschätzt: "überschätzen - fazla takdir etmek",
    abgestumpft: "abstumpfen - duygusuzlaşmak",
    kommuniziert: "kommunizieren - iletişim kurmak",
    verändert: "verändern - değiştirmek",
    zuversichtlich: "zuversichtlich sein - iyimser olmak",
    gemerkt: "merken - fark etmek",
    repariert: "reparieren - tamir etmek",
    überwunden: "überwinden - üstesinden gelmek",
    geprägt: "prägen - şekillendirmek",
    nachgeholt: "nachholen - telafi etmek",
    zugelassen: "zulassen - kabul etmek",
    konsumiert: "konsumieren - tüketmek",
    verwirklicht: "verwirklichen - gerçekleştirmek",
    weiterentwickelt: "weiterentwickeln - geliştirmek",
    getroffen: "treffen - karşılaşmak",
    bereut: "bereuen - pişman olmak",
    benannt: "benennen - adlandırmak",
    gewappnet: "gewappnet sein - hazır olmak",
    bereichert: "bereichern - zenginleştirmek",
    ausgedruckt: "ausdrucken - yazdırmak",
    motiviert: "motivieren - motive etmek",
    gehandelt: "handeln - hareket etmek",
    positioniert: "positionieren - konumlandırmak",
    ersetzt: "ersetzen - değiştirmek",
    getraut: "sich trauen - cesaret etmek",
    nachvollzogen: "nachvollziehen - anlamak",
    aufgearbeitet: "aufarbeiten - işlemek",
  };

  const VerbTooltip = ({ verb, children }) => (
    <span
      className="relative inline-block"
      onMouseEnter={() => setHoveredVerb(verb)}
      onMouseLeave={() => setHoveredVerb(null)}
    >
      <span className="font-bold text-blue-600 cursor-pointer hover:text-blue-800 transition-colors">
        {children}
      </span>
      {hoveredVerb === verb && (
        <div className="absolute z-10 px-3 py-2 text-sm text-white bg-gray-800 rounded-lg shadow-lg -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          {verbDefinitions[verb]}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
        </div>
      )}
    </span>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Der Weg zum Erfolg
        </h1>
        <p className="text-gray-600 italic">
          Eine Geschichte über Persönlichkeitsentwicklung und beruflichen Erfolg
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Hover über die blauen Wörter für Übersetzungen
        </p>
      </div>

      <div className="prose prose-lg max-w-none space-y-6 leading-relaxed text-gray-700">
        <p>
          Maria war in einer kleinen Stadt{" "}
          <VerbTooltip verb="aufgewachsen">aufgewachsen</VerbTooltip> und hatte
          schon früh <VerbTooltip verb="entschieden">entschieden</VerbTooltip>,
          dass sie Erzieherin werden wollte. Sie hatte sich bereits als Kind
          dafür <VerbTooltip verb="interessiert">interessiert</VerbTooltip>, wie
          andere Menschen{" "}
          <VerbTooltip verb="ausgebildet">ausgebildet</VerbTooltip> werden
          konnten. Nachdem sie ihr Abitur{" "}
          <VerbTooltip verb="absolviert">absolviert</VerbTooltip> hatte,{" "}
          <VerbTooltip verb="beworben">beworben</VerbTooltip> sie sich bei einer
          Fachschule.
        </p>

        <p>
          Die Ausbildung hatte sie sehr gut{" "}
          <VerbTooltip verb="strukturiert">strukturiert</VerbTooltip>. Sie hatte
          gelernt, wie wichtig es war, sich über ein Unternehmen zu{" "}
          <VerbTooltip verb="informiert">informieren</VerbTooltip>, bevor man
          sich dort <VerbTooltip verb="beworben">bewirbt</VerbTooltip>. Ihr
          Professor hatte ihr{" "}
          <VerbTooltip verb="empfohlen">empfohlen</VerbTooltip>, dass sie sich
          nicht nur theoretisch, sondern auch praktisch{" "}
          <VerbTooltip verb="vorbereitet">vorbereitet</VerbTooltip>.
        </p>

        <p>
          Nach ihrer Ausbildung hatte Maria sich{" "}
          <VerbTooltip verb="selbständig gemacht">
            selbständig gemacht
          </VerbTooltip>
          . Sie hatte eine eigene Kindertagesstätte{" "}
          <VerbTooltip verb="eingerichtet">eingerichtet</VerbTooltip> und war
          stolz darauf, dass sie alle bürokratischen Voraussetzungen{" "}
          <VerbTooltip verb="erfüllt">erfüllt</VerbTooltip> hatte. Das Projekt
          hatte sie komplett allein{" "}
          <VerbTooltip verb="finanziert">finanziert</VerbTooltip>, nachdem sie
          BAföG <VerbTooltip verb="beantragt">beantragt</VerbTooltip> und alle
          nötigen Unterlagen{" "}
          <VerbTooltip verb="nachgewiesen">nachgewiesen</VerbTooltip> hatte.
        </p>

        <p>
          Die ersten Jahre waren schwierig gewesen. Maria hatte oft darüber{" "}
          <VerbTooltip verb="nachgedacht">nachgedacht</VerbTooltip>, ob sie die
          richtige Entscheidung{" "}
          <VerbTooltip verb="getroffen">getroffen</VerbTooltip> hatte. Sie hatte
          sich gegen verschiedene Risiken{" "}
          <VerbTooltip verb="abgesichert">abgesichert</VerbTooltip> und eine
          Haftpflichtversicherung{" "}
          <VerbTooltip verb="abgeschlossen">abgeschlossen</VerbTooltip>, die bei
          Schäden <VerbTooltip verb="gegriffen">gegriffen</VerbTooltip> hätte.
        </p>

        <p>
          Besonders herausfordernd war es, mit den Kindern{" "}
          <VerbTooltip verb="umgegangen">umzugehen</VerbTooltip>. Maria hatte
          schnell <VerbTooltip verb="gemerkt">gemerkt</VerbTooltip>, dass sie
          ihre pädagogischen Ansätze{" "}
          <VerbTooltip verb="weiterentwickelt">weiterentwickelt</VerbTooltip>{" "}
          musste. Sie hatte verschiedene Methoden{" "}
          <VerbTooltip verb="ausprobiert">ausprobiert</VerbTooltip> und war{" "}
          <VerbTooltip verb="beeindruckt">beeindruckt</VerbTooltip> davon, wie
          kreativ Kinder sein konnten.
        </p>

        <p>
          Ein besonderer Moment war, als sie zum ersten Mal von Eltern zum
          Geburtstag <VerbTooltip verb="eingeladen">eingeladen</VerbTooltip>{" "}
          wurde. Die Kinder hatten ihr kleine Geschenke{" "}
          <VerbTooltip verb="geschenkt">geschenkt</VerbTooltip> und sie hatte
          den Tag richtig <VerbTooltip verb="genossen">genossen</VerbTooltip>.
          In diesem Moment hatte sie{" "}
          <VerbTooltip verb="verstanden">verstanden</VerbTooltip>, dass sie mit
          ihrer Arbeit wirklich etwas{" "}
          <VerbTooltip verb="bewirkt">bewirkt</VerbTooltip> hatte.
        </p>

        <p>
          Die Kita hatte sich zu einem Ort entwickelt, der als innovativ{" "}
          <VerbTooltip verb="gegolten">gegolten</VerbTooltip> hatte. Maria hatte
          neue Konzepte <VerbTooltip verb="entwickelt">entwickelt</VerbTooltip>{" "}
          und regelmäßig Fortbildungen{" "}
          <VerbTooltip verb="organisiert">organisiert</VerbTooltip>. Sie hatte
          sich nie <VerbTooltip verb="beklagt">beklagt</VerbTooltip>, wenn die
          Arbeit stressig wurde, sondern ihre Mitarbeiter immer{" "}
          <VerbTooltip verb="unterstützt">unterstützt</VerbTooltip>.
        </p>

        <p>
          Als die Corona-Pandemie kam, hatte sich alles{" "}
          <VerbTooltip verb="verändert">verändert</VerbTooltip>. Maria hatte
          schnell digitale Lösungen{" "}
          <VerbTooltip verb="umgesetzt">umgesetzt</VerbTooltip> und eine App{" "}
          <VerbTooltip verb="entwickelt">entwickelt</VerbTooltip>, die es Eltern
          ermöglichte, mit den Erziehern zu{" "}
          <VerbTooltip verb="kommuniziert">kommunizieren</VerbTooltip>. Sie
          hatte neue Funktionen{" "}
          <VerbTooltip verb="hinzugefügt">hinzugefügt</VerbTooltip> und das
          System täglich <VerbTooltip verb="wiederholt">wiederholt</VerbTooltip>{" "}
          getestet.
        </p>

        <p>
          Trotz aller Herausforderungen war Maria immer{" "}
          <VerbTooltip verb="zuversichtlich">zuversichtlich</VerbTooltip>{" "}
          geblieben. Sie hatte alle Schicksalsschläge{" "}
          <VerbTooltip verb="überwunden">überwunden</VerbTooltip> und war nie{" "}
          <VerbTooltip verb="abgestumpft">abgestumpft</VerbTooltip>. Diese
          Erfahrungen hatten sie{" "}
          <VerbTooltip verb="geprägt">geprägt</VerbTooltip> und ihr Leben{" "}
          <VerbTooltip verb="bereichert">bereichert</VerbTooltip>.
        </p>

        <p>
          Heute kann Maria sagen, dass sie ihre Träume{" "}
          <VerbTooltip verb="verwirklicht">verwirklicht</VerbTooltip> hat. Sie
          hatte sich nie{" "}
          <VerbTooltip verb="manipuliert">manipuliert</VerbTooltip> gefühlt und
          hatte immer ihre eigenen Ideen{" "}
          <VerbTooltip verb="eingebracht">eingebracht</VerbTooltip>. Ihre Kita
          hatte sie als führend in der Region{" "}
          <VerbTooltip verb="positioniert">positioniert</VerbTooltip> und sie
          hatte nie <VerbTooltip verb="bereut">bereut</VerbTooltip>, diesen Weg
          gewählt zu haben.
        </p>

        <p>
          Wenn Maria heute junge Menschen{" "}
          <VerbTooltip verb="motiviert">motiviert</VerbTooltip>, erzählt sie
          ihnen immer, dass Erfolg bedeutet, authentisch zu{" "}
          <VerbTooltip verb="gehandelt">handeln</VerbTooltip> und sich nicht zu{" "}
          <VerbTooltip verb="überschätzt">überschätzen</VerbTooltip>. Sie hat
          gelernt, dass man sich immer{" "}
          <VerbTooltip verb="gewappnet">gewappnet</VerbTooltip> sein muss für
          neue Herausforderungen und dass es wichtig ist, andere zu{" "}
          <VerbTooltip verb="wertgeschätzt">wertschätzen</VerbTooltip>.
        </p>

        <p>
          Die Geschichte von Maria zeigt, dass man mit Durchhaltevermögen und
          der richtigen Einstellung alles erreichen kann. Sie hatte nie{" "}
          <VerbTooltip verb="übertrieben">übertrieben</VerbTooltip>, wenn sie
          ihre Erfolge <VerbTooltip verb="geschildert">geschildert</VerbTooltip>{" "}
          hat, und hat immer{" "}
          <VerbTooltip verb="zugegeben">zugegeben</VerbTooltip>, wenn sie etwas
          nicht konnte. Diese Ehrlichkeit hatte sie bei allen{" "}
          <VerbTooltip verb="überzeugt">überzeugt</VerbTooltip> und ihr
          geholfen, langfristig erfolgreich zu sein.
        </p>
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">
          Grammatik-Hinweise:
        </h3>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>
            • <strong>Perfekt</strong>: für abgeschlossene Handlungen mit Bezug
            zur Gegenwart
          </li>
          <li>
            • <strong>Plusquamperfekt</strong>: für Handlungen, die vor einem
            anderen Zeitpunkt in der Vergangenheit stattfanden
          </li>
          <li>• Alle verwendeten Verben sind auf C1-Niveau</li>
        </ul>
      </div>
    </div>
  );
};

export default GermanStory;
