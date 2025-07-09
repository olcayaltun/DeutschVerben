import React, { useState } from "react";

const GermanPrepositionsStory = () => {
  const [hoveredPhrase, setHoveredPhrase] = useState(null);

  const phraseDefinitions = {
    "helfen bei": "helfen bei + Dativ - yardım etmek",
    "beginnen mit": "beginnen mit + Dativ - ile başlamak",
    "sprechen mit": "sprechen mit + Dativ - ile konuşmak",
    "sich beschäftigen mit": "sich beschäftigen mit + Dativ - ile ilgilenmek",
    "teilnehmen an": "teilnehmen an + Dativ - katılmak",
    "zweifeln an": "zweifeln an + Dativ - şüphe etmek",
    "leiden an": "leiden an + Dativ - çekmek (hastalık)",
    "bestehen aus": "bestehen aus + Dativ - oluşmak",
    "gratulieren zu": "gratulieren zu + Dativ - tebrik etmek",
    "gehören zu": "gehören zu + Dativ - ait olmak",
    "raten zu": "raten zu + Dativ - tavsiye etmek",
    "passen zu": "passen zu + Dativ - uymak",
    "träumen von": "träumen von + Dativ - rüya görmek",
    "abhängen von": "abhängen von + Dativ - bağımlı olmak",
    "wissen von": "wissen von + Dativ - bilmek",
    "profitieren von": "profitieren von + Dativ - faydalanmak",
    "handeln von": "handeln von + Dativ - konu olmak",
    "leben von": "leben von + Dativ - ile geçinmek",
    "erzählen von": "erzählen von + Dativ - anlatmak",
    "berichten über": "berichten über + Akkusativ - haber vermek",
    "klagen über": "klagen über + Akkusativ - şikayet etmek",
    "nachdenken über": "nachdenken über + Akkusativ - düşünmek",
    "urteilen über": "urteilen über + Akkusativ - yargılamak",
    "verfügen über": "verfügen über + Akkusativ - sahip olmak",
    "sich äußern zu": "sich äußern zu + Dativ - görüş bildirmek",
    "beitragen zu": "beitragen zu + Dativ - katkıda bulunmak",
    "neigen zu": "neigen zu + Dativ - eğilimli olmak",
    "sich bekennen zu": "sich bekennen zu + Dativ - itiraf etmek",
    "sich eignen zu": "sich eignen zu + Dativ - uygun olmak",
    "ermutigen zu": "ermutigen zu + Dativ - cesaretlendirmek",
    "sich entschließen zu": "sich entschließen zu + Dativ - karar vermek",
    "sich ergeben aus": "sich ergeben aus + Dativ - çıkmak (sonuç)",
    "übereinstimmen mit": "übereinstimmen mit + Dativ - uyuşmak",
    "sich befassen mit": "sich befassen mit + Dativ - ilgilenmek",
    "sich auseinandersetzen mit":
      "sich auseinandersetzen mit + Dativ - uğraşmak",
    "sich bedienen eines": "sich bedienen + Genitiv - kullanmak",
    "sich enthalten eines": "sich enthalten + Genitiv - kaçınmak",
    "sich erinnern eines": "sich erinnern + Genitiv - hatırlamak",
    "sich schämen eines": "sich schämen + Genitiv - utanmak",
    "sich rühmen eines": "sich rühmen + Genitiv - övünmek",
    "sich annehmen eines": "sich annehmen + Genitiv - ilgilenmek",
    "sich bemächtigen eines": "sich bemächtigen + Genitiv - ele geçirmek",
    "sich entledigen eines": "sich entledigen + Genitiv - kurtulmak",
    "sich besinnen eines": "sich besinnen + Genitiv - hatırlamak",
    "sich vergewissern eines": "sich vergewissern + Genitiv - emin olmak",
    "gedenken eines": "gedenken + Genitiv - anmak",
    "jemanden anklagen eines": "jemanden anklagen + Genitiv - suçlamak",
    "jemanden beschuldigen eines": "jemanden beschuldigen + Genitiv - suçlamak",
    "jemanden verdächtigen eines":
      "jemanden verdächtigen + Genitiv - şüphelenmek",
    "Anstoß nehmen an": "Anstoß nehmen an + Dativ - rahatsız olmak",
    "in Verbindung stehen mit":
      "in Verbindung stehen mit + Dativ - bağlantılı olmak",
    "Abstand nehmen von": "Abstand nehmen von + Dativ - uzak durmak",
    "in Einklang bringen mit":
      "in Einklang bringen mit + Dativ - uyumlu hale getirmek",
    "Einfluss nehmen auf": "Einfluss nehmen auf + Akkusativ - etki etmek",
    "in Zweifel ziehen": "in Zweifel ziehen + Akkusativ - şüphe etmek",
    "zur Verantwortung ziehen für":
      "zur Verantwortung ziehen für + Akkusativ - sorumlu tutmak",
    "Stellung nehmen zu": "Stellung nehmen zu + Dativ - görüş bildirmek",
    "zum Ausdruck bringen": "zum Ausdruck bringen + Akkusativ - ifade etmek",
    "in Anspruch nehmen für":
      "in Anspruch nehmen für + Akkusativ - hak iddia etmek",
    "Bezug nehmen auf": "Bezug nehmen auf + Akkusativ - atıfta bulunmak",
    "zur Verfügung stehen für":
      "zur Verfügung stehen für + Akkusativ - hizmetinde olmak",
    "in Betracht ziehen für":
      "in Betracht ziehen für + Akkusativ - göz önünde bulundurmak",
    "in Kauf nehmen für": "in Kauf nehmen für + Akkusativ - göze almak",
    "Wert legen auf": "Wert legen auf + Akkusativ - önem vermek",
    "in Erfahrung bringen über":
      "in Erfahrung bringen über + Akkusativ - öğrenmek",
    "in Verbindung setzen mit":
      "in Verbindung setzen mit + Dativ - bağlantı kurmak",
    "zur Kenntnis nehmen von": "zur Kenntnis nehmen von + Dativ - not almak",
    "zu dem Schluss kommen": "zu dem Schluss kommen + Dativ - sonuca varmak",
    "zu der Überzeugung gelangen":
      "zu der Überzeugung gelangen + Dativ - kanıya varmak",
    "unter dem Einfluss stehen von":
      "unter dem Einfluss stehen von + Dativ - etkisi altında olmak",
    "in den Verdacht geraten":
      "in den Verdacht geraten + Genitiv - şüphe altında kalmak",
    "in Beziehung stehen zu": "in Beziehung stehen zu + Dativ - ilişkili olmak",
    "in Widerspruch stehen zu": "in Widerspruch stehen zu + Dativ - çelişmek",
    "in Übereinstimmung bringen mit":
      "in Übereinstimmung bringen mit + Dativ - uyumlu hale getirmek",
    "zum Ausdruck kommen in": "zum Ausdruck kommen in + Dativ - ifade bulmak",
    "zur Geltung kommen bei": "zur Geltung kommen bei + Dativ - ortaya çıkmak",
    "aus der Fassung geraten wegen":
      "aus der Fassung geraten wegen + Genitiv - şaşırmak",
    "aus dem Gleichgewicht geraten durch":
      "aus dem Gleichgewicht geraten durch + Akkusativ - dengesini kaybetmek",
  };

  const PhraseTooltip = ({ phrase, children }) => (
    <span
      className="relative inline-block"
      onMouseEnter={() => setHoveredPhrase(phrase)}
      onMouseLeave={() => setHoveredPhrase(null)}
    >
      <span className="font-bold text-purple-600 cursor-pointer hover:text-purple-800 transition-colors border-b-2 border-purple-300 hover:border-purple-500">
        {children}
      </span>
      {hoveredPhrase === phrase && (
        <div className="absolute z-10 px-4 py-2 text-sm text-white bg-purple-800 rounded-lg shadow-lg -top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap max-w-xs">
          {phraseDefinitions[phrase]}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-purple-800"></div>
        </div>
      )}
    </span>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Klimawandel und Gesellschaft
        </h1>
        <p className="text-gray-600 italic text-lg">
          Eine komplexe Analyse über Umwelt, Bildung und soziale Verantwortung
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Hover über die lila unterstrichenen Ausdrücke für
          Grammatik-Erklärungen
        </p>
      </div>

      <div className="prose prose-lg max-w-none space-y-6 leading-relaxed text-gray-700">
        <p>
          Dr. Schmidt, ein renommierter Klimaforscher,{" "}
          <PhraseTooltip phrase="beschäftigen mit">
            beschäftigte sich mit
          </PhraseTooltip>{" "}
          den Auswirkungen des Klimawandels auf die Gesellschaft. Seine
          Forschung{" "}
          <PhraseTooltip phrase="handeln von">handelte von</PhraseTooltip>{" "}
          extremen Wetterphänomenen wie Dürren, Überschwemmungen und Stürmen,
          die{" "}
          <PhraseTooltip phrase="in Verbindung stehen mit">
            in Verbindung standen mit
          </PhraseTooltip>{" "}
          der globalen Erwärmung.
        </p>

        <p>
          Bei einer internationalen Konferenz{" "}
          <PhraseTooltip phrase="teilnehmen an">nahm er teil an</PhraseTooltip>{" "}
          wichtigen Diskussionen über nachhaltige Entwicklung. Er{" "}
          <PhraseTooltip phrase="berichten über">berichtete über</PhraseTooltip>{" "}
          seine Erkenntnisse und{" "}
          <PhraseTooltip phrase="Stellung nehmen zu">
            nahm Stellung zu
          </PhraseTooltip>{" "}
          den kontroversen Themen der Klimapolitik. Viele Teilnehmer{" "}
          <PhraseTooltip phrase="zweifeln an">zweifelten an</PhraseTooltip> der
          Effektivität der vorgeschlagenen Maßnahmen.
        </p>

        <p>
          Die Bevölkerung{" "}
          <PhraseTooltip phrase="leiden an">litt an</PhraseTooltip> den Folgen
          des Klimawandels und{" "}
          <PhraseTooltip phrase="klagen über">klagte über</PhraseTooltip> die
          unzureichenden Reaktionen der Politik. Dr. Schmidt{" "}
          <PhraseTooltip phrase="sich entschließen zu">
            entschloss sich zu
          </PhraseTooltip>{" "}
          einer radikalen Herangehensweise: Er wollte die Öffentlichkeit direkt{" "}
          <PhraseTooltip phrase="ermutigen zu">ermutigen zu</PhraseTooltip>{" "}
          umweltfreundlichem Verhalten.
        </p>

        <p>
          Seine Strategie{" "}
          <PhraseTooltip phrase="bestehen aus">bestand aus</PhraseTooltip>{" "}
          mehreren Komponenten. Zunächst{" "}
          <PhraseTooltip phrase="sich bedienen eines">
            bediente er sich eines
          </PhraseTooltip>{" "}
          innovativen Kommunikationskonzepts, das{" "}
          <PhraseTooltip phrase="in Einklang bringen mit">
            in Einklang brachte mit
          </PhraseTooltip>{" "}
          wissenschaftlicher Genauigkeit und verständlicher Sprache. Er{" "}
          <PhraseTooltip phrase="sich vergewissern eines">
            vergewisserte sich eines
          </PhraseTooltip>{" "}
          breiten Publikums, indem er soziale Medien nutzte.
        </p>

        <p>
          Besonders wichtig war ihm die Bildungsarbeit. Er{" "}
          <PhraseTooltip phrase="Wert legen auf">legte Wert auf</PhraseTooltip>{" "}
          die Zusammenarbeit mit Schulen und Universitäten. Sein Team{" "}
          <PhraseTooltip phrase="sich befassen mit">
            befasste sich mit
          </PhraseTooltip>{" "}
          der Entwicklung von Lehrplänen, die{" "}
          <PhraseTooltip phrase="beitragen zu">beitrugen zu</PhraseTooltip>{" "}
          einem besseren Verständnis der Klimaproblematik.
        </p>

        <p>
          Die Industrie{" "}
          <PhraseTooltip phrase="verfügen über">verfügte über</PhraseTooltip>{" "}
          die notwendigen Technologien, aber viele Unternehmen{" "}
          <PhraseTooltip phrase="sich enthalten eines">
            enthielten sich eines
          </PhraseTooltip>{" "}
          aktiven Engagements. Dr. Schmidt{" "}
          <PhraseTooltip phrase="zur Verantwortung ziehen für">
            zog sie zur Verantwortung für
          </PhraseTooltip>{" "}
          ihre Umweltsünden und{" "}
          <PhraseTooltip phrase="in Zweifel ziehen">
            zog in Zweifel
          </PhraseTooltip>{" "}
          ihre Versprechungen für nachhaltige Produktion.
        </p>

        <p>
          In seinen Vorträgen{" "}
          <PhraseTooltip phrase="zum Ausdruck bringen">
            brachte er zum Ausdruck
          </PhraseTooltip>
          , dass die Gesellschaft{" "}
          <PhraseTooltip phrase="aus dem Gleichgewicht geraten durch">
            aus dem Gleichgewicht geraten war durch
          </PhraseTooltip>{" "}
          rücksichtslosen Konsum. Er{" "}
          <PhraseTooltip phrase="träumen von">träumte von</PhraseTooltip> einer
          Welt, in der Menschen{" "}
          <PhraseTooltip phrase="leben von">leben von</PhraseTooltip>{" "}
          erneuerbaren Energien und nachhaltigen Ressourcen.
        </p>

        <p>
          Seine Forschung{" "}
          <PhraseTooltip phrase="sich ergeben aus">
            ergab sich aus
          </PhraseTooltip>{" "}
          jahrelanger Beobachtung der Klimadaten. Er{" "}
          <PhraseTooltip phrase="zu dem Schluss kommen">
            kam zu dem Schluss
          </PhraseTooltip>
          , dass nur drastische Maßnahmen die Katastrophe verhindern könnten.
          Die Ergebnisse{" "}
          <PhraseTooltip phrase="übereinstimmen mit">
            stimmten überein mit
          </PhraseTooltip>{" "}
          den Prognosen internationaler Klimamodelle.
        </p>

        <p>
          Kritiker{" "}
          <PhraseTooltip phrase="jemanden beschuldigen eines">
            beschuldigten ihn eines
          </PhraseTooltip>{" "}
          Alarmismus, aber Dr. Schmidt{" "}
          <PhraseTooltip phrase="sich schämen eines">
            schämte sich eines
          </PhraseTooltip>{" "}
          solchen Vorwurfs nicht. Er{" "}
          <PhraseTooltip phrase="sich rühmen eines">
            rühmte sich eines
          </PhraseTooltip>{" "}
          wissenschaftlich fundierten Ansatzes und{" "}
          <PhraseTooltip phrase="sich bekennen zu">
            bekannte sich zu
          </PhraseTooltip>{" "}
          seiner Verantwortung als Wissenschaftler.
        </p>

        <p>
          Die Regierung{" "}
          <PhraseTooltip phrase="zur Verfügung stehen für">
            stand zur Verfügung für
          </PhraseTooltip>{" "}
          die Umsetzung seiner Vorschläge. Politiker{" "}
          <PhraseTooltip phrase="in Betracht ziehen für">
            zogen in Betracht für
          </PhraseTooltip>{" "}
          die Zukunft strengere Gesetze und{" "}
          <PhraseTooltip phrase="in Kauf nehmen für">
            nahmen in Kauf für
          </PhraseTooltip>{" "}
          den Klimaschutz wirtschaftliche Einbußen.
        </p>

        <p>
          Dr. Schmidt{" "}
          <PhraseTooltip phrase="sich auseinandersetzen mit">
            setzte sich auseinander mit
          </PhraseTooltip>{" "}
          den komplexen Wechselwirkungen zwischen Klima und Gesellschaft. Seine
          Arbeit{" "}
          <PhraseTooltip phrase="in Beziehung stehen zu">
            stand in Beziehung zu
          </PhraseTooltip>{" "}
          wichtigen gesellschaftlichen Veränderungen und{" "}
          <PhraseTooltip phrase="Einfluss nehmen auf">
            nahm Einfluss auf
          </PhraseTooltip>{" "}
          die öffentliche Meinung.
        </p>

        <p>
          Er{" "}
          <PhraseTooltip phrase="profitieren von">
            profitierte von
          </PhraseTooltip>{" "}
          der Zusammenarbeit mit Kollegen weltweit und{" "}
          <PhraseTooltip phrase="in Erfahrung bringen über">
            brachte in Erfahrung über
          </PhraseTooltip>{" "}
          neue Forschungsmethoden. Seine Studien{" "}
          <PhraseTooltip phrase="zur Geltung kommen bei">
            kamen zur Geltung bei
          </PhraseTooltip>{" "}
          wichtigen Entscheidungen der Klimapolitik.
        </p>

        <p>
          Die Medien{" "}
          <PhraseTooltip phrase="erzählen von">erzählten von</PhraseTooltip>{" "}
          seinem Engagement und{" "}
          <PhraseTooltip phrase="gratulieren zu">gratulierten zu</PhraseTooltip>{" "}
          seinen Erfolgen. Seine Botschaft{" "}
          <PhraseTooltip phrase="zum Ausdruck kommen in">
            kam zum Ausdruck in
          </PhraseTooltip>{" "}
          vielen Interviews und Dokumentationen.
        </p>

        <p>
          Heute <PhraseTooltip phrase="gehören zu">gehört zu</PhraseTooltip> Dr.
          Schmidts wichtigsten Erkenntnissen, dass Klimaschutz und soziale
          Gerechtigkeit{" "}
          <PhraseTooltip phrase="passen zu">passen zu</PhraseTooltip> einer
          nachhaltigen Zukunft. Er{" "}
          <PhraseTooltip phrase="raten zu">rät zu</PhraseTooltip> einem
          ganzheitlichen Ansatz, der alle Bereiche der Gesellschaft einbezieht.
        </p>

        <p>
          Seine Geschichte zeigt, dass Wissenschaftler{" "}
          <PhraseTooltip phrase="sich annehmen eines">
            sich annehmen eines
          </PhraseTooltip>{" "}
          gesellschaftlichen Problems können und dabei{" "}
          <PhraseTooltip phrase="abhängen von">abhängen von</PhraseTooltip> der
          Unterstützung der Öffentlichkeit. Dr. Schmidt{" "}
          <PhraseTooltip phrase="neigen zu">neigt zu</PhraseTooltip> der
          Überzeugung, dass nur gemeinsame Anstrengungen die Klimakrise
          bewältigen können.
        </p>
      </div>

      <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-purple-800 mb-4">
          Grammatik-Übersicht:
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold text-purple-700 mb-2">
              Verben mit Dativ:
            </h4>
            <p className="text-gray-600">
              helfen bei, sprechen mit, teilnehmen an, gehören zu, etc.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-purple-700 mb-2">
              Verben mit Genitiv:
            </h4>
            <p className="text-gray-600">
              sich bedienen, sich schämen, sich rühmen, gedenken, etc.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-purple-700 mb-2">
              Funktionsverbgefüge:
            </h4>
            <p className="text-gray-600">
              Stellung nehmen zu, in Zweifel ziehen, zur Verfügung stehen
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-purple-700 mb-2">
              Komplexe Konstruktionen:
            </h4>
            <p className="text-gray-600">
              Feste Verbindungen mit Präpositionen und Artikeln
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GermanPrepositionsStory;
