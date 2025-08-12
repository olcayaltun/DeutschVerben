import React, { useState } from "react";

const GermanStory = () => {
  const [hoveredWord, setHoveredWord] = useState(null);

  const VerbTooltip = ({
    verb,
    translation,
    children,
    isPlusquamperfekt = false,
  }) => (
    <span
      className={`relative cursor-pointer font-bold px-1 py-0.5 rounded transition-colors ${
        isPlusquamperfekt
          ? "bg-purple-800 text-white hover:bg-purple-900"
          : "bg-blue-800 text-white hover:bg-blue-900"
      }`}
      onMouseEnter={() =>
        setHoveredWord({ verb, translation, isPlusquamperfekt })
      }
      onMouseLeave={() => setHoveredWord(null)}
    >
      {children}
      {hoveredWord && hoveredWord.verb === verb && (
        <div
          className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm rounded-lg shadow-lg z-10 whitespace-nowrap ${
            isPlusquamperfekt ? "bg-purple-900" : "bg-blue-900"
          } text-white`}
        >
          <div className="font-semibold">{verb}</div>
          <div className="text-gray-200">{translation}</div>
          <div
            className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
              isPlusquamperfekt ? "border-t-purple-900" : "border-t-blue-900"
            }`}
          ></div>
        </div>
      )}
    </span>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Der Angeklagte und die Archäologie
          </h1>

          <div className="mb-6 p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Hikaye Rehberi:
            </h2>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-blue-800 rounded"></span>
                <span>Perfect (Perfekt)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-purple-800 rounded"></span>
                <span>Plusquamperfekt</span>
              </div>
              <div className="text-gray-600">
                💡 Fiillerin üzerine gelerek yalın hallerini ve Türkçe
                anlamlarını görebilirsiniz
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              Professor Dr. Weber, ein renommierter Archäologe,{" "}
              <VerbTooltip verb="anklagen" translation="suçlamak">
                hatte einen Angeklagten angeklagt
              </VerbTooltip>
              , der angeblich antike Artefakte gestohlen{" "}
              <VerbTooltip verb="haben" translation="sahip olmak">
                hatte
              </VerbTooltip>
              . Diese Angelegenheit{" "}
              <VerbTooltip verb="aufkommen" translation="ortaya çıkmak">
                war aufgekommen
              </VerbTooltip>
              , nachdem die Polizei eine archäologische Ausgrabungsstätte
              untersucht{" "}
              <VerbTooltip verb="haben" translation="sahip olmak">
                hatte
              </VerbTooltip>
              . Der Ankläger{" "}
              <VerbTooltip verb="anpassen" translation="uyum sağlamak">
                hatte sich angepasst
              </VerbTooltip>{" "}
              an die komplexe Situation.
            </p>

            <p>
              Der Verdächtige{" "}
              <VerbTooltip verb="anlegen" translation="yatırım yapmak">
                hatte Geld angelegt
              </VerbTooltip>{" "}
              in teure Antiquitäten, bevor er{" "}
              <VerbTooltip verb="ansprechen" translation="hitap etmek">
                angesprochen worden war
              </VerbTooltip>
              . Seine anspruchsvolle Sammlung{" "}
              <VerbTooltip verb="ansteigen" translation="artmak">
                war angestiegen
              </VerbTooltip>{" "}
              im Wert. Die Experten{" "}
              <VerbTooltip verb="anwerben" translation="işe almak">
                hatten ihn angeworben
              </VerbTooltip>
              , um bei der Bewertung zu helfen.
            </p>

            <p>
              Der Professor{" "}
              <VerbTooltip verb="aufbauen" translation="inşa etmek">
                hatte eine Theorie aufgebaut
              </VerbTooltip>
              , die auf wissenschaftlichen Erkenntnissen basierte. Er{" "}
              <VerbTooltip verb="aufbewahren" translation="saklamak">
                hatte die Beweise aufbewahrt
              </VerbTooltip>{" "}
              in einem sicheren Tresor. Die Batterien seiner Geräte{" "}
              <VerbTooltip verb="aufbrauchen" translation="tüketmek">
                waren aufgebraucht worden
              </VerbTooltip>
              , bevor die Untersuchung{" "}
              <VerbTooltip verb="beginnen" translation="başlamak">
                begonnen hatte
              </VerbTooltip>
              .
            </p>

            <p>
              Diebe{" "}
              <VerbTooltip verb="aufbrechen" translation="kırmak">
                hatten die Tür aufgebrochen
              </VerbTooltip>{" "}
              und{" "}
              <VerbTooltip verb="aufladen" translation="şarj etmek">
                die Geräte aufgeladen
              </VerbTooltip>
              . Die Kollegen{" "}
              <VerbTooltip verb="aufmuntern" translation="neşelendirmek">
                hatten den Professor aufgemuntert
              </VerbTooltip>
              , als er niedergeschlagen war. Sie{" "}
              <VerbTooltip verb="aufnehmen" translation="kaydetmek">
                hatten Gespräche aufgenommen
              </VerbTooltip>{" "}
              als Beweis.
            </p>

            <p>
              Der Angeklagte{" "}
              <VerbTooltip verb="aufsetzen" translation="takmak">
                hatte seine Brille aufgesetzt
              </VerbTooltip>{" "}
              und{" "}
              <VerbTooltip verb="aufstellen" translation="kurmak">
                ein Alibi aufgestellt
              </VerbTooltip>
              . Er{" "}
              <VerbTooltip verb="aufstoßen" translation="geğirmek">
                hatte aufgestoßen
              </VerbTooltip>{" "}
              nach dem nervösen Essen. Die Polizei{" "}
              <VerbTooltip verb="auftreiben" translation="bulup getirmek">
                hatte Zeugen aufgetrieben
              </VerbTooltip>
              , die ihn gesehen hatten.
            </p>

            <p>
              Der Verdächtige{" "}
              <VerbTooltip verb="aufwachsen" translation="büyümek">
                war aufgewachsen
              </VerbTooltip>{" "}
              in einer armen Familie. Seine Persönlichkeit{" "}
              <VerbTooltip verb="aufweisen" translation="göstermek">
                hatte seltsame Eigenschaften aufgewiesen
              </VerbTooltip>
              . Der Ausbau des Museums{" "}
              <VerbTooltip verb="ausbleiben" translation="gerçekleşmemek">
                war ausgeblieben
              </VerbTooltip>
              , nachdem der Skandal{" "}
              <VerbTooltip verb="ausbrechen" translation="kaçmak">
                ausgebrochen war
              </VerbTooltip>
              .
            </p>

            <p>
              Die Krankheit{" "}
              <VerbTooltip verb="ausbreiten" translation="yayılmak">
                hatte sich ausgebreitet
              </VerbTooltip>{" "}
              unter den Arbeitern. Der Direktor{" "}
              <VerbTooltip verb="ausdrücken" translation="ifade etmek">
                hatte seine Sorge ausgedrückt
              </VerbTooltip>
              . Die Meinungen{" "}
              <VerbTooltip verb="auseinandergehen" translation="ayrılmak">
                waren auseinandergegangen
              </VerbTooltip>{" "}
              über die Schuld des Angeklagten.
            </p>

            <p>
              Die Veranstaltung{" "}
              <VerbTooltip verb="ausfallen" translation="iptal olmak">
                war ausgefallen
              </VerbTooltip>
              , nachdem die Vorräte{" "}
              <VerbTooltip verb="ausgehen" translation="tükenmek">
                ausgegangen waren
              </VerbTooltip>
              . Die Gesellschaft{" "}
              <VerbTooltip verb="ausgrenzen" translation="dışlamak">
                hatte ihn ausgegrenzt
              </VerbTooltip>
              , bevor er{" "}
              <VerbTooltip verb="auskommen" translation="geçinmek">
                mit seinem Geld ausgekommen war
              </VerbTooltip>
              .
            </p>

            <p>
              Der Verdächtige{" "}
              <VerbTooltip verb="ausnutzen" translation="sömürmek">
                hatte die Situation ausgenutzt
              </VerbTooltip>{" "}
              und{" "}
              <VerbTooltip verb="ausprägen" translation="belirginleştirmek">
                seine Fähigkeiten ausgeprägt
              </VerbTooltip>
              . Er{" "}
              <VerbTooltip verb="ausreden" translation="bahane bulmak">
                hatte sich ausgeredet
              </VerbTooltip>{" "}
              mit falschen Behauptungen. Vor Gericht{" "}
              <VerbTooltip verb="aussagen" translation="ifade vermek">
                hatte er ausgesagt
              </VerbTooltip>
              .
            </p>

            <p>
              Der Richter{" "}
              <VerbTooltip verb="ausscheiden" translation="çekilmek">
                war ausgeschieden
              </VerbTooltip>{" "}
              wegen Befangenheit. Er{" "}
              <VerbTooltip verb="ausschließen" translation="hariç tutmak">
                hatte andere Möglichkeiten ausgeschlossen
              </VerbTooltip>
              . Die Universität{" "}
              <VerbTooltip verb="ausschreiben" translation="ilan etmek">
                hatte eine Stelle ausgeschrieben
              </VerbTooltip>
              .
            </p>

            <p>
              Die Experten{" "}
              <VerbTooltip verb="aussortieren" translation="ayıklamak">
                hatten die Fälschungen aussortiert
              </VerbTooltip>{" "}
              und{" "}
              <VerbTooltip verb="ausstoßen" translation="salmak">
                Giftstoffe ausgestoßen
              </VerbTooltip>
              . Sie{" "}
              <VerbTooltip verb="austauschen" translation="değiştirmek">
                hatten Informationen ausgetauscht
              </VerbTooltip>{" "}
              mit internationalen Kollegen.
            </p>

            <p>
              Der Angeklagte{" "}
              <VerbTooltip verb="austreten" translation="çıkmak">
                war ausgetreten
              </VerbTooltip>{" "}
              aus dem Verein. Er{" "}
              <VerbTooltip verb="ausweichen" translation="kaçınmak">
                hatte den Fragen ausgewichen
              </VerbTooltip>{" "}
              und{" "}
              <VerbTooltip verb="auswerfen" translation="fırlatmak">
                Gegenstände ausgeworfen
              </VerbTooltip>{" "}
              aus Wut.
            </p>

            <p>
              Die Polizei{" "}
              <VerbTooltip verb="auswerten" translation="değerlendirmek">
                hatte die Beweise ausgewertet
              </VerbTooltip>
              . Der Skandal{" "}
              <VerbTooltip verb="auswirken" translation="etkilemek">
                hatte sich ausgewirkt
              </VerbTooltip>{" "}
              auf sein Ansehen. Die Jury{" "}
              <VerbTooltip verb="auszeichnen" translation="ödüllendirmek">
                hatte ihn ausgezeichnet
              </VerbTooltip>{" "}
              für seine Kooperation.
            </p>

            <p>
              Der Experte{" "}
              <VerbTooltip verb="basieren" translation="dayanmak">
                hatte seine Theorie basiert
              </VerbTooltip>{" "}
              auf Fakten. Er{" "}
              <VerbTooltip verb="beeindrucken" translation="etkilemek">
                hatte alle beeindruckt
              </VerbTooltip>{" "}
              mit seinem Wissen. Die Familie{" "}
              <VerbTooltip verb="beerdigen" translation="gömmek">
                hatte den Großvater beerdigt
              </VerbTooltip>
              .
            </p>

            <p>
              Der Professor{" "}
              <VerbTooltip verb="befassen" translation="ilgilenmek">
                hatte sich befasst
              </VerbTooltip>{" "}
              mit der Antike. Er{" "}
              <VerbTooltip verb="befestigen" translation="sabitlemek">
                hatte die Ausstellung befestigt
              </VerbTooltip>{" "}
              an der Wand. Die Beamten{" "}
              <VerbTooltip verb="begehen" translation="işlemek">
                hatten einen Fehler begangen
              </VerbTooltip>
              .
            </p>

            <p>
              Der Schuldner{" "}
              <VerbTooltip verb="begleichen" translation="ödemek">
                hatte seine Schulden beglichen
              </VerbTooltip>
              . Die Zeugen{" "}
              <VerbTooltip verb="beklagen" translation="şikâyet etmek">
                hatten sich beklagt
              </VerbTooltip>{" "}
              über die Behandlung. Der Anwalt{" "}
              <VerbTooltip verb="belegen" translation="kanıtlamak">
                hatte die Unschuld belegt
              </VerbTooltip>
              .
            </p>

            <p>
              Der Angeklagte{" "}
              <VerbTooltip verb="bemühen" translation="çaba göstermek">
                hatte sich bemüht
              </VerbTooltip>{" "}
              um eine Lösung. Die Gesellschaft{" "}
              <VerbTooltip
                verb="benachteiligen"
                translation="dezavantajlı duruma düşürmek"
              >
                hatte ihn benachteiligt
              </VerbTooltip>
              . Der Anwalt{" "}
              <VerbTooltip verb="bereithalten" translation="hazır bulundurmak">
                hatte Beweise bereitgehalten
              </VerbTooltip>
              .
            </p>

            <p>
              Das Gericht{" "}
              <VerbTooltip verb="berücksichtigen" translation="dikkate almak">
                hatte alle Faktoren berücksichtigt
              </VerbTooltip>
              . Der Staatsanwalt{" "}
              <VerbTooltip verb="beschuldigen" translation="suçlamak">
                hatte ihn beschuldigt
              </VerbTooltip>
              . Die Artefakte{" "}
              <VerbTooltip verb="bestehen" translation="var olmak">
                hatten bestanden
              </VerbTooltip>{" "}
              aus wertvollen Materialien.
            </p>

            <p>
              Die Schäden{" "}
              <VerbTooltip verb="betragen" translation="tutmak">
                hatten Millionen betragen
              </VerbTooltip>
              . Der Fall{" "}
              <VerbTooltip verb="betreffen" translation="ilgilendirmek">
                hatte viele betroffen
              </VerbTooltip>
              . Die Experten{" "}
              <VerbTooltip verb="bewältigen" translation="üstesinden gelmek">
                hatten die Krise bewältigt
              </VerbTooltip>
              .
            </p>

            <p>
              Das Gericht{" "}
              <VerbTooltip verb="bewilligen" translation="onaylamak">
                hatte die Klage bewilligt
              </VerbTooltip>
              . Der Angeklagte{" "}
              <VerbTooltip verb="bezeichnen" translation="adlandırmak">
                hatte sich bezeichnet
              </VerbTooltip>{" "}
              als unschuldig. Die Kommission{" "}
              <VerbTooltip verb="bilden" translation="oluşturmak">
                hatte sich gebildet
              </VerbTooltip>{" "}
              aus Experten.
            </p>

            <p>
              Am Ende{" "}
              <VerbTooltip verb="siegen" translation="kazanmak">
                hatte die Wahrheit gesiegt
              </VerbTooltip>
              . Der Angeklagte{" "}
              <VerbTooltip verb="gestehen" translation="itiraf etmek">
                hatte gestanden
              </VerbTooltip>
              , dass er die Blütezeit der Antike{" "}
              <VerbTooltip verb="ausnutzen" translation="sömürmek">
                ausgenutzt hatte
              </VerbTooltip>
              . Die Gerechtigkeit{" "}
              <VerbTooltip verb="triumphieren" translation="zafer kazanmak">
                hat triumphiert
              </VerbTooltip>
              , und die Bronze-Statue{" "}
              <VerbTooltip verb="zurückgeben" translation="geri vermek">
                wurde zurückgegeben
              </VerbTooltip>
              .
            </p>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Hikaye Özeti:
            </h3>
            <p className="text-gray-600 text-sm">
              Bu hikaye, bir arkeolog profesörün çalınan antik eserleri
              araştırması ve suçlunun yakalanması sürecini anlatmaktadır.
              Hikayede Perfect (Perfekt) ve Plusquamperfekt zaman yapıları
              kullanılarak geçmiş olayların kronolojik sırası vurgulanmıştır.
              Belgenizdeki tüm fiiller hikayeye dahil edilmiştir.
            </p>
          </div>

          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              Kullanılan Fiiller:
            </h3>
            <p className="text-blue-600 text-sm">
              anklagen, anpassen, anlegen, ansprechen, ansteigen, anwerben,
              aufbauen, aufbewahren, aufbrauchen, aufbrechen, aufladen,
              aufmuntern, aufnehmen, aufsetzen, aufstellen, aufstoßen,
              auftreiben, aufwachsen, aufweisen, ausbleiben, ausbrechen,
              ausbreiten, ausdrücken, auseinandergehen, ausfallen, ausgehen,
              ausgrenzen, auskommen, ausnutzen, ausprägen, ausreden, aussagen,
              ausscheiden, ausschließen, ausschreiben, aussortieren, ausstoßen,
              austauschen, austreten, ausweichen, auswerfen, auswerten,
              auswirken, auszeichnen, basieren, beeindrucken, beerdigen,
              befassen, befestigen, begehen, begleichen, beklagen, belegen,
              bemühen, benachteiligen, bereithalten, berücksichtigen,
              beschuldigen, bestehen, betragen, betreffen, bewältigen,
              bewilligen, bezeichnen, bilden
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GermanStory;
