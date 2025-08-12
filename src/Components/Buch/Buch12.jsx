import React, { useState } from "react";

const GermanVerbStory = () => {
  const [hoveredVerb, setHoveredVerb] = useState(null);

  const verbData = {
    geholfen: "helfen - yardım etmek",
    begonnen: "beginnen - başlamak",
    gesprochen: "sprechen - konuşmak",
    beschäftigt: "sich beschäftigen - meşgul olmak",
    teilgenommen: "teilnehmen - katılmak",
    gezweifelt: "zweifeln - şüphe etmek",
    gelitten: "leiden - acı çekmek",
    bestanden: "bestehen - oluşmak/dayanmak",
    gratuliert: "gratulieren - tebrik etmek",
    gehört: "gehören - ait olmak",
    geraten: "raten - tavsiye etmek",
    gepasst: "passen - uygun olmak",
    geträumt: "träumen - rüya görmek",
    abgehangen: "abhängen - bağımlı olmak",
    gewusst: "wissen - bilmek",
    profitiert: "profitieren - faydalanmak",
    gehandelt: "handeln - davranmak/konu olmak",
    gelebt: "leben - yaşamak",
    erzählt: "erzählen - anlatmak",
    berichtet: "berichten - rapor etmek",
    geklagt: "klagen - şikayet etmek",
    nachgedacht: "nachdenken - düşünmek",
    geurteilt: "urteilen - yargılamak",
    verfügt: "verfügen - sahip olmak",
    geäußert: "sich äußern - görüş belirtmek",
    beigetragen: "beitragen - katkıda bulunmak",
    geneigt: "neigen - eğilimli olmak",
    tendiert: "tendieren - eğilim göstermek",
    bekannt: "sich bekennen - itiraf etmek",
    geeignet: "sich eignen - uygun olmak",
    ermutigt: "ermutigen - cesaret vermek",
    verholfen: "verhelfen - yardım etmek",
    hingegeben: "sich hingeben - kendini vermek",
    entschlossen: "sich entschließen - karar vermek",
    gesellt: "sich gesellen - katılmak",
    gefügt: "sich fügen - boyun eğmek",
    ergeben: "sich ergeben - ortaya çıkmak",
    übereingestimmt: "übereinstimmen - uyuşmak",
    befasst: "sich befassen - ilgilenmek",
    auseinandergesetzt: "sich auseinandersetzen - uğraşmak",
    bedient: "sich bedienen - kullanmak",
    enthalten: "sich enthalten - kaçınmak",
    erinnert: "sich erinnern - hatırlamak",
    geschämt: "sich schämen - utanmak",
    gerühmt: "sich rühmen - övünmek",
    angenommen: "sich annehmen - ilgilenmek",
    bemächtigt: "sich bemächtigen - ele geçirmek",
    entledigt: "sich entledigen - kurtulmak",
    besonnen: "sich besinnen - kendine gelmek",
    vergewissert: "sich vergewissern - emin olmak",
    erbarmt: "sich erbarmen - acımak",
    entsonnen: "sich entsinnen - hatırlamak",
    erwehrt: "sich erwehren - savunmak",
    geharrt: "harren - beklemek",
    gedacht: "gedenken - anmak",
    entäußert: "sich entäußern - vazgeçmek",
    entschlagen: "sich entschlagen - vazgeçmek",
    befleißigt: "sich befleißigen - çaba göstermek",
    entraten: "sich entraten - vazgeçmek",
    angeklagt: "anklagen - suçlamak",
    bezichtigt: "bezichtigen - suçlamak",
    beschuldigt: "beschuldigen - suçlamak",
    überführt: "überführen - suçunu kanıtlamak",
    verdächtigt: "verdächtigen - şüphelenmek",
    genommen: "nehmen - almak",
    gestanden: "stehen - durmak",
    gebracht: "bringen - getirmek",
    getragen: "tragen - taşımak",
    gezogen: "ziehen - çekmek",
    gelegt: "legen - koymak",
  };

  const HighlightedVerb = ({ children, verb }) => (
    <span
      className="bg-yellow-300 font-bold px-1 py-0.5 rounded cursor-pointer relative"
      onMouseEnter={() => setHoveredVerb({ verb, text: verbData[verb] })}
      onMouseLeave={() => setHoveredVerb(null)}
    >
      {children}
      {hoveredVerb && hoveredVerb.verb === verb && (
        <div className="absolute bottom-full left-0 bg-black text-white px-2 py-1 rounded text-sm whitespace-nowrap z-10 mb-1">
          {hoveredVerb.text}
        </div>
      )}
    </span>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Die Geschichte von Dr. Elisabeth Müller
      </h1>

      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
        <p>
          Dr. Elisabeth Müller{" "}
          <HighlightedVerb verb="geholfen">
            hatte ihren Kollegen bei
          </HighlightedVerb>{" "}
          der schwierigen Forschung{" "}
          <HighlightedVerb verb="geholfen">geholfen</HighlightedVerb>, nachdem
          sie bereits mit dem Projekt{" "}
          <HighlightedVerb verb="begonnen">begonnen hatte</HighlightedVerb>. Sie{" "}
          <HighlightedVerb verb="gesprochen">hatte lange mit</HighlightedVerb>
          dem Professor{" "}
          <HighlightedVerb verb="gesprochen">gesprochen</HighlightedVerb> und
          sich intensiv mit der Materie{" "}
          <HighlightedVerb verb="beschäftigt">beschäftigt</HighlightedVerb>.
        </p>

        <p>
          An der internationalen Konferenz{" "}
          <HighlightedVerb verb="teilgenommen">
            hatte sie teilgenommen
          </HighlightedVerb>
          , obwohl sie an den Ergebnissen
          <HighlightedVerb verb="gezweifelt">gezweifelt hatte</HighlightedVerb>.
          Jahrelang{" "}
          <HighlightedVerb verb="gelitten">hatte sie an</HighlightedVerb> einer
          seltenen Krankheit
          <HighlightedVerb verb="gelitten">gelitten</HighlightedVerb>, die aus
          mehreren Komponenten{" "}
          <HighlightedVerb verb="bestanden">bestanden hatte</HighlightedVerb>.
        </p>

        <p>
          Ihrem Mentor{" "}
          <HighlightedVerb verb="gratuliert">hatte sie zu</HighlightedVerb>{" "}
          seinem Erfolg{" "}
          <HighlightedVerb verb="gratuliert">gratuliert</HighlightedVerb>, denn
          er <HighlightedVerb verb="gehört">hatte zu</HighlightedVerb> den
          angesehensten Wissenschaftlern{" "}
          <HighlightedVerb verb="gehört">gehört</HighlightedVerb>. Er{" "}
          <HighlightedVerb verb="geraten">hatte ihr zu</HighlightedVerb> dieser
          Laufbahn <HighlightedVerb verb="geraten">geraten</HighlightedVerb>,
          was perfekt zu ihr{" "}
          <HighlightedVerb verb="gepasst">gepasst hatte</HighlightedVerb>.
        </p>

        <p>
          Nachts{" "}
          <HighlightedVerb verb="geträumt">hatte sie von</HighlightedVerb>{" "}
          großen Entdeckungen{" "}
          <HighlightedVerb verb="geträumt">geträumt</HighlightedVerb>. Ihr
          Erfolg <HighlightedVerb verb="abgehangen">hatte von</HighlightedVerb>{" "}
          ihrer Ausdauer{" "}
          <HighlightedVerb verb="abgehangen">abgehangen</HighlightedVerb>, und
          sie <HighlightedVerb verb="gewusst">hatte von</HighlightedVerb> den
          Risiken <HighlightedVerb verb="gewusst">gewusst</HighlightedVerb>. Von
          der Erfahrung{" "}
          <HighlightedVerb verb="profitiert">
            hatte sie profitiert
          </HighlightedVerb>
          .
        </p>

        <p>
          Das Buch <HighlightedVerb verb="gehandelt">hatte von</HighlightedVerb>{" "}
          ihrer Forschung{" "}
          <HighlightedVerb verb="gehandelt">gehandelt</HighlightedVerb>. Von
          ihren Ersparnissen{" "}
          <HighlightedVerb verb="gelebt">hatte sie gelebt</HighlightedVerb>,
          während sie ihren Studenten von ihren Erfahrungen
          <HighlightedVerb verb="erzählt">erzählt hatte</HighlightedVerb>. Den
          Medien{" "}
          <HighlightedVerb verb="berichtet">hatte sie über</HighlightedVerb>
          ihre Erfolge{" "}
          <HighlightedVerb verb="berichtet">berichtet</HighlightedVerb>.
        </p>

        <p>
          Über die unfaire Behandlung{" "}
          <HighlightedVerb verb="geklagt">hatte sie geklagt</HighlightedVerb>.
          Stundenlang{" "}
          <HighlightedVerb verb="nachgedacht">hatte sie über</HighlightedVerb>{" "}
          das Problem{" "}
          <HighlightedVerb verb="nachgedacht">nachgedacht</HighlightedVerb>.
          Über ihre Kollegen{" "}
          <HighlightedVerb verb="geurteilt">
            hatte sie nie geurteilt
          </HighlightedVerb>
          , obwohl sie über große Ressourcen
          <HighlightedVerb verb="verfügt">verfügt hatte</HighlightedVerb>.
        </p>

        <p>
          Zu dieser Angelegenheit{" "}
          <HighlightedVerb verb="geäußert">
            hatte sie sich geäußert
          </HighlightedVerb>{" "}
          und zum Fortschritt
          <HighlightedVerb verb="beigetragen">beigetragen</HighlightedVerb>. Sie{" "}
          <HighlightedVerb verb="geneigt">hatte dazu geneigt</HighlightedVerb>,
          optimistisch zu bleiben, und{" "}
          <HighlightedVerb verb="tendiert">hatte dazu tendiert</HighlightedVerb>
          , andere zu unterstützen.
        </p>

        <p>
          Zu ihren Fehlern{" "}
          <HighlightedVerb verb="bekannt">
            hatte sie sich bekannt
          </HighlightedVerb>
          . Für diese Aufgabe{" "}
          <HighlightedVerb verb="geeignet">
            hatte sie sich geeignet
          </HighlightedVerb>
          . Junge Forscher{" "}
          <HighlightedVerb verb="ermutigt">
            hatte sie dazu ermutigt
          </HighlightedVerb>
          , weiterzumachen, und ihnen zum Erfolg{" "}
          <HighlightedVerb verb="verholfen">verholfen</HighlightedVerb>.
        </p>

        <p>
          Der Forschung{" "}
          <HighlightedVerb verb="hingegeben">
            hatte sie sich hingegeben
          </HighlightedVerb>
          . Zu dieser drastischen Maßnahme{" "}
          <HighlightedVerb verb="entschlossen">
            hatte sie sich entschlossen
          </HighlightedVerb>
          . Zu den Experten{" "}
          <HighlightedVerb verb="gesellt">
            hatte sie sich gesellt
          </HighlightedVerb>{" "}
          und sich dem Schicksal
          <HighlightedVerb verb="gefügt">gefügt</HighlightedVerb>.
        </p>

        <p>
          Aus den Daten{" "}
          <HighlightedVerb verb="ergeben">hatte sich ergeben</HighlightedVerb>,
          dass ihre Theorie stimmte. Mit den anderen Wissenschaftlern{" "}
          <HighlightedVerb verb="übereingestimmt">
            hatte sie übereingestimmt
          </HighlightedVerb>
          . Mit dem komplexen Thema{" "}
          <HighlightedVerb verb="befasst">
            hatte sie sich befasst
          </HighlightedVerb>{" "}
          und sich intensiv mit den Kritikern
          <HighlightedVerb verb="auseinandergesetzt">
            auseinandergesetzt
          </HighlightedVerb>
          .
        </p>

        <p>
          Eines modernen Computers{" "}
          <HighlightedVerb verb="bedient">
            hatte sie sich bedient
          </HighlightedVerb>
          . Eines Kommentars{" "}
          <HighlightedVerb verb="enthalten">
            hatte sie sich enthalten
          </HighlightedVerb>
          . Eines alten Versprechens{" "}
          <HighlightedVerb verb="erinnert">
            hatte sie sich erinnert
          </HighlightedVerb>
          . Ihres Verhaltens{" "}
          <HighlightedVerb verb="geschämt">
            hatte sie sich geschämt
          </HighlightedVerb>
          .
        </p>

        <p>
          Ihrer Leistungen{" "}
          <HighlightedVerb verb="gerühmt">
            hatte sie sich gerühmt
          </HighlightedVerb>
          . Eines schwierigen Falls{" "}
          <HighlightedVerb verb="angenommen">
            hatte sie sich angenommen
          </HighlightedVerb>
          . Des Computers{" "}
          <HighlightedVerb verb="bemächtigt">
            hatte sie sich bemächtigt
          </HighlightedVerb>
          . Ihrer Sorgen{" "}
          <HighlightedVerb verb="entledigt">
            hatte sie sich entledigt
          </HighlightedVerb>
          .
        </p>

        <p>
          Ihrer Pflicht{" "}
          <HighlightedVerb verb="besonnen">
            hatte sie sich besonnen
          </HighlightedVerb>
          . Des Ergebnisses{" "}
          <HighlightedVerb verb="vergewissert">
            hatte sie sich vergewissert
          </HighlightedVerb>
          . Des Patienten{" "}
          <HighlightedVerb verb="erbarmt">
            hatte sie sich erbarmt
          </HighlightedVerb>
          . Ihrer Kindheit{" "}
          <HighlightedVerb verb="entsonnen">
            hatte sie sich entsonnen
          </HighlightedVerb>
          .
        </p>

        <p>
          Der Angriffe{" "}
          <HighlightedVerb verb="erwehrt">
            hatte sie sich erwehrt
          </HighlightedVerb>
          . Der Antwort{" "}
          <HighlightedVerb verb="geharrt">hatte sie geharrt</HighlightedVerb>.
          Der Verstorbenen{" "}
          <HighlightedVerb verb="gedacht">hatte sie gedacht</HighlightedVerb>.
          Ihres Besitzes{" "}
          <HighlightedVerb verb="entäußert">
            hatte sie sich entäußert
          </HighlightedVerb>
          .
        </p>

        <p>
          Ihrer Gewohnheiten{" "}
          <HighlightedVerb verb="entschlagen">
            hatte sie sich entschlagen
          </HighlightedVerb>
          . Der Höflichkeit{" "}
          <HighlightedVerb verb="befleißigt">
            hatte sie sich befleißigt
          </HighlightedVerb>
          . Der Hilfe{" "}
          <HighlightedVerb verb="entraten">
            hatte sie sich entraten
          </HighlightedVerb>
          . Einen Kollegen des Betrugs{" "}
          <HighlightedVerb verb="angeklagt">
            hatte sie angeklagt
          </HighlightedVerb>
          .
        </p>

        <p>
          Jemanden der Lüge{" "}
          <HighlightedVerb verb="bezichtigt">
            hatte sie bezichtigt
          </HighlightedVerb>
          . Einen Studenten des Plagiats{" "}
          <HighlightedVerb verb="beschuldigt">
            hatte sie beschuldigt
          </HighlightedVerb>
          . Einen Betrüger seiner Taten{" "}
          <HighlightedVerb verb="überführt">
            hatte sie überführt
          </HighlightedVerb>
          . Jemanden der Manipulation{" "}
          <HighlightedVerb verb="verdächtigt">
            hatte sie verdächtigt
          </HighlightedVerb>
          .
        </p>

        <p>
          Anstoß an der Vorgehensweise{" "}
          <HighlightedVerb verb="genommen">hatte sie genommen</HighlightedVerb>.
          Mit der Universität in Verbindung{" "}
          <HighlightedVerb verb="gestanden">
            hatte sie gestanden
          </HighlightedVerb>
          . Von der Idee Abstand{" "}
          <HighlightedVerb verb="genommen">hatte sie genommen</HighlightedVerb>.
          Ihre Theorie in Einklang mit den Fakten{" "}
          <HighlightedVerb verb="gebracht">hatte sie gebracht</HighlightedVerb>.
        </p>

        <p>
          Den ethischen Aspekten Rechnung{" "}
          <HighlightedVerb verb="getragen">hatte sie getragen</HighlightedVerb>.
          Auf die Entscheidung Einfluss{" "}
          <HighlightedVerb verb="genommen">hatte sie genommen</HighlightedVerb>.
          Die Ergebnisse in Zweifel{" "}
          <HighlightedVerb verb="gezogen">hatte sie gezogen</HighlightedVerb>.
          Den Assistenten zur Verantwortung{" "}
          <HighlightedVerb verb="gezogen">hatte sie gezogen</HighlightedVerb>.
        </p>

        <p>
          Zu dem Vorfall Stellung{" "}
          <HighlightedVerb verb="genommen">hatte sie genommen</HighlightedVerb>.
          Ihre Gedanken zum Ausdruck{" "}
          <HighlightedVerb verb="gebracht">hatte sie gebracht</HighlightedVerb>.
          Die Laborräume in Anspruch{" "}
          <HighlightedVerb verb="genommen">hatte sie genommen</HighlightedVerb>.
          Auf frühere Studien Bezug{" "}
          <HighlightedVerb verb="genommen">hatte sie genommen</HighlightedVerb>.
        </p>

        <p>
          Den Studenten zur Verfügung{" "}
          <HighlightedVerb verb="gestanden">
            hatte sie gestanden
          </HighlightedVerb>
          . Alle Optionen in Betracht{" "}
          <HighlightedVerb verb="gezogen">hatte sie gezogen</HighlightedVerb>.
          Die Risiken in Kauf{" "}
          <HighlightedVerb verb="genommen">hatte sie genommen</HighlightedVerb>.
          Auf Präzision großen Wert{" "}
          <HighlightedVerb verb="gelegt">hatte sie gelegt</HighlightedVerb>.
        </p>

        <p>
          Mit ihren Kollegen über die Zukunft{" "}
          <HighlightedVerb verb="gesprochen">
            hatte sie gesprochen
          </HighlightedVerb>
          , an die Zeitung über ihre Entdeckungen{" "}
          <HighlightedVerb verb="geschrieben">geschrieben</HighlightedVerb>, mit
          Experten über ethische Fragen{" "}
          <HighlightedVerb verb="diskutiert">diskutiert</HighlightedVerb>. Sie{" "}
          <HighlightedVerb verb="gedacht">hatte an</HighlightedVerb> die Zukunft{" "}
          <HighlightedVerb verb="gedacht">gedacht</HighlightedVerb>
          und sich auf neue Herausforderungen{" "}
          <HighlightedVerb verb="gefreut">gefreut</HighlightedVerb>.
        </p>

        <p>
          Für ihre Studenten{" "}
          <HighlightedVerb verb="gesorgt">hatte sie gesorgt</HighlightedVerb>{" "}
          und um ihre Zukunft
          <HighlightedVerb verb="gesorgt">gesorgt</HighlightedVerb>. Ihr Erfolg{" "}
          <HighlightedVerb verb="bestanden">hatte aus</HighlightedVerb>
          harter Arbeit{" "}
          <HighlightedVerb verb="bestanden">bestanden</HighlightedVerb>, und sie{" "}
          <HighlightedVerb verb="bestanden">hatte auf</HighlightedVerb>
          Qualität <HighlightedVerb verb="bestanden">bestanden</HighlightedVerb>
          . Ihre Stärke{" "}
          <HighlightedVerb verb="bestanden">hatte in</HighlightedVerb>
          ihrer Beharrlichkeit{" "}
          <HighlightedVerb verb="bestanden">bestanden</HighlightedVerb>.
        </p>

        <p>
          Am Ende ihres langen Lebens blickte Dr. Elisabeth Müller auf eine
          erfolgreiche Karriere zurück. Sie{" "}
          <HighlightedVerb verb="verfügt">hatte über</HighlightedVerb> ein
          umfassendes Wissen{" "}
          <HighlightedVerb verb="verfügt">verfügt</HighlightedVerb>
          und <HighlightedVerb verb="verfügt">hatte von</HighlightedVerb> großer
          Weisheit <HighlightedVerb verb="verfügt">verfügt</HighlightedVerb>.
          Ihre Geschichte wird für immer ein Beispiel dafür bleiben, was durch
          Hingabe und Ausdauer erreicht werden kann.
        </p>
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Anleitung:</h3>
        <p className="text-sm text-gray-600">
          Fahren Sie mit der Maus über die{" "}
          <span className="bg-yellow-300 px-1 rounded">
            gelb markierten Verben
          </span>
          im Perfekt und Plusquamperfekt, um die Grundform und türkische
          Bedeutung zu sehen.
        </p>
      </div>
    </div>
  );
};

export default GermanVerbStory;
