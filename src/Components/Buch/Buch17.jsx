import React, { useState } from "react";

const GermanStoryWithTooltips = () => {
  const [hoveredWord, setHoveredWord] = useState(null);

  const verbTooltips = {
    "hatte aufgebaut": "aufbauen - kurmak, inşa etmek",
    "hatte aufbewahrt": "aufbewahren - saklamak",
    "hatte aufgebraucht": "aufbrauchen - tüketmek",
    "war aufgebrochen": "aufbrechen - yola çıkmak",
    "hatte aufgeladen": "aufladen - şarj etmek",
    "hatte aufgemuntert": "aufmuntern - neşelendirmek",
    "hatte aufgenommen": "aufnehmen - almak, kaydetmek",
    "hatte aufgesetzt": "aufsetzen - kurmak, yerleştirmek",
    "hatte aufgestellt": "aufstellen - kurmak, dikmek",
    "war aufgestoßen": "aufstoßen - itmek, kalkmak",
    "hatte aufgetrieben": "auftreiben - bulmak",
    "war aufgewachsen": "aufwachsen - büyümek",
    "hatte aufgewiesen": "aufweisen - göstermek, sergilemek",
    "war ausgeblieben": "ausbleiben - olmamak, gelmemek",
    "war ausgebrochen": "ausbrechen - kaçmak, patlak vermek",
    "hatte ausgebreitet": "ausbreiten - yayılmak",
    "hatte ausgedrückt": "ausdrücken - ifade etmek",
    "waren auseinandergegangen": "auseinandergehen - ayrılmak, dağılmak",
    "hatte angeworben": "anwerben - işe almak",
    "hatte abgemacht": "abmachen - anlaşmak, kararlaştırmak",
    "hatte erfüllt": "erfüllen - bir isteği yerine getirmek",
    "hatte aufgezeigt": "aufzeigen - göstermek, ortaya koymak",
    "hatte sich hingegeben": "sich hingeben - kendini adamak, kaptırmak",
    "hatte übernommen": "übernehmen - devralmak",
    "hatte ausgefragt": "ausfragen - sorguya çekmek",
    "hatte aufgegeben": "aufgeben - vazgeçmek, bırakmak",
    "hatte ausgelöst": "auslösen - tetiklemek",
    "hatte kooperiert": "kooperieren - iş birliği yapmak",
    "war erfolgt": "erfolgen - meydana gelmek, gerçekleşmek",
    "hatte gebangt": "bangen - endişelenmek",
    "hatte geschlottert": "schlottern - aşırı titremek",
    "hatte gezüchtet": "züchten - yetiştirmek",
    "hatte ausgetastet": "austasten - yoklamak",
    "hatte hinterlassen": "hinterlassen - geride bırakmak",
    "war abgehauen": "abhauen - kaçmak",
    "hatte geholt": "holen - alıyor / getiriyor",
    "war ausgerastet": "ausrasten - çıldırmak",
    "hatte eingekauft": "einkaufen - alışveriş yapmak",
    "hatte abgebaut": "abbauen - sökmek, azaltmak",
    "hatte abgebildet": "abbilden - resmetmek, temsil etmek",
    "hatte abgebrochen": "abbrechen - yarıda kesmek",
    "hatte abgegeben": "abgeben - teslim etmek",
    "war abhandengekommen": "abhandenkommen - kaybolmak",
    "hatte abgelegt": "ablegen - bir kenara koymak",
    "hatte abgelenkt": "ablenken - dikkat dağıtmak",
    "hatte abgelesen": "ablesen - okumak (ölçü aletinden)",
    "hatte abgenommen": "abnehmen - kilo vermek, azalmak",
    "hatte abgenutzt": "abnutzen - aşınmak",
    "hatte abgesaugt": "absaugen - emerek temizlemek",
    "hatte abgeschafft": "abschaffen - kaldırmak",
    "hatte absolviert": "absolvieren - tamamlamak (eğitim)",
    "hatte abgestammt": "abstammen - köken almak",
    "hatte abgestaubt": "abstauben - tozunu almak",
    "hatte abgestritten": "abstreiten - inkâr etmek",
    "war abgestürzt": "abstürzen - çökmek (bilgisayar)",
    "war abgewichen": "abweichen - sapmak",
    "hatte abgewendet": "abwenden - önlemek",
    "hatte abgewinkt": "abwinken - reddetmek (el hareketiyle)",
    "hatte abgewischt": "abwischen - silmek",
    "war gealtert": "altern - yaşlanmak",
    "war angefallen": "anfallen - ortaya çıkmak (atık vb.)",
    "hatte angefühlt": "anfühlen - hissetmek",
  };

  const Tooltip = ({ word, definition, children }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <span
        className="relative"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <span className="font-bold text-blue-800 cursor-pointer hover:text-blue-600 transition-colors">
          {children}
        </span>
        {isVisible && (
          <div className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap">
            <div className="font-medium">{definition}</div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
          </div>
        )}
      </span>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Die Geschichte des Dr. Weber
      </h1>

      <div className="prose prose-lg leading-relaxed text-gray-700 space-y-4">
        <p>
          Dr. Weber war ein berühmter Archäologe, der sein ganzes Leben der
          Erforschung antiker Zivilisationen gewidmet hatte. Er{" "}
          <Tooltip definition="aufbauen - kurmak, inşa etmek">
            hatte aufgebaut
          </Tooltip>{" "}
          eine beeindruckende Sammlung archäologischer Funde, die er sorgfältig
          in seinem privaten Museum{" "}
          <Tooltip definition="aufbewahren - saklamak">
            hatte aufbewahrt
          </Tooltip>
          .
        </p>

        <p>
          Eines Tages erhielt er einen Brief von einem Antragsteller, der um
          Unterstützung für eine Expedition bat. Der Brief{" "}
          <Tooltip definition="aufzeigen - göstermek, ortaya koymak">
            hatte aufgezeigt
          </Tooltip>
          , dass in einem entlegenen Fjord bedeutende Funde zu erwarten seien.
          Weber, der immer{" "}
          <Tooltip definition="sich hingeben - kendini adamak, kaptırmak">
            hatte sich hingegeben
          </Tooltip>
          der Wissenschaft, entschied sich, die Expedition zu unterstützen.
        </p>

        <p>
          Die Atmosphäre in seinem Labor war düster geworden, seit er die
          schockierende Nachricht erhalten hatte. Seine Assistentin{" "}
          <Tooltip definition="ausfragen - sorguya çekmek">
            hatte ausgefragt
          </Tooltip>{" "}
          ihn über seine Pläne, aber er{" "}
          <Tooltip definition="abwinken - reddetmek (el hareketiyle)">
            hatte abgewinkt
          </Tooltip>{" "}
          und gemeint: "Worum gehts? Es ist sensationell gut, wenn wir diese
          Chance nutzen!"
        </p>

        <p>
          Weber{" "}
          <Tooltip definition="übernehmen - devralmak">
            hatte übernommen
          </Tooltip>{" "}
          die Verantwortung für die gesamte Operation. Er{" "}
          <Tooltip definition="anwerben - işe almak">hatte angeworben</Tooltip>{" "}
          erfahrene Arbeitskräfte und
          <Tooltip definition="aufstellen - kurmak, dikmek">
            hatte aufgestellt
          </Tooltip>{" "}
          ein Team von Experten. Die Anziehungskraft des Projekts war enorm - es
          versprach, die Artenvielfalt der Region zu dokumentieren und
          gleichzeitig wichtige archäologische Entdeckungen zu machen.
        </p>

        <p>
          Vor der Abreise{" "}
          <Tooltip definition="aufladen - şarj etmek">hatte aufgeladen</Tooltip>{" "}
          er alle elektronischen Geräte und
          <Tooltip definition="aufmuntern - neşelendirmek">
            hatte aufgemuntert
          </Tooltip>{" "}
          sein Team mit den Worten: "Kopf hoch! Dabei sein ist alles!" Seine
          Auffassung war, dass nur durch mutige Entscheidungen wissenschaftliche
          Durchbrüche möglich seien.
        </p>

        <p>
          Die Expedition{" "}
          <Tooltip definition="aufbrechen - yola çıkmak">
            war aufgebrochen
          </Tooltip>{" "}
          am frühen Morgen. Das Team{" "}
          <Tooltip definition="aufnehmen - almak, kaydetmek">
            hatte aufgenommen
          </Tooltip>{" "}
          alle notwendigen Ausrüstungen und{" "}
          <Tooltip definition="aufsetzen - kurmak, yerleştirmek">
            hatte aufgesetzt
          </Tooltip>{" "}
          die Schutzhelme. Weber{" "}
          <Tooltip definition="aufweisen - göstermek, sergilemek">
            hatte aufgewiesen
          </Tooltip>{" "}
          große Führungsqualitäten und{" "}
          <Tooltip definition="auftreiben - bulmak">hatte aufgetrieben</Tooltip>{" "}
          zusätzliche Finanzierung für das Projekt.
        </p>

        <p>
          Am Zielort angekommen, stellten sie fest, dass die Situation
          komplizierter war als erwartet. Die lokale Bevölkerung{" "}
          <Tooltip definition="ausbrechen - kaçmak, patlak vermek">
            war ausgebrochen
          </Tooltip>{" "}
          in Proteste, da sie die Ausbeutung ihrer natürlichen Ressourcen
          befürchteten. Ein Konflikt{" "}
          <Tooltip definition="ausbreiten - yayılmak">
            hatte ausgebreitet
          </Tooltip>{" "}
          sich in der Region, und die Armut{" "}
          <Tooltip definition="aufkommen - ortaya çıkmak">
            war aufgekommen
          </Tooltip>{" "}
          als Hauptproblem.
        </p>

        <p>
          Weber{" "}
          <Tooltip definition="ausdrücken - ifade etmek">
            hatte ausgedrückt
          </Tooltip>{" "}
          sein Verständnis für die Sorgen der Einheimischen. Er erklärte ihnen,
          dass die Forschung nicht darauf abzielte, die Umwelt zu schädigen,
          sondern das Artensterben zu dokumentieren und zu verhindern. Die
          Gruppe{" "}
          <Tooltip definition="abmachen - anlaşmak, kararlaştırmak">
            hatte abgemacht
          </Tooltip>
          , dass sie mit der lokalen Gemeinschaft{" "}
          <Tooltip definition="kooperieren - iş birliği yapmak">
            kooperieren
          </Tooltip>{" "}
          würden.
        </p>

        <p>
          Nach intensiven Verhandlungen{" "}
          <Tooltip definition="erfüllen - bir isteği yerine getirmek">
            hatte erfüllt
          </Tooltip>
          Weber alle Bedingungen der Einheimischen. Er{" "}
          <Tooltip definition="abgeben - teslim etmek">hatte abgegeben</Tooltip>
          eine offizielle Erklärung, dass alle Funde dokumentiert und der
          Gemeinde
          <Tooltip definition="hinterlassen - geride bırakmak">
            hinterlassen
          </Tooltip>{" "}
          würden. Die Situation war im Grunde nachweislich entspannter geworden.
        </p>

        <p>
          Der Trainer des Teams{" "}
          <Tooltip definition="aufgeben - vazgeçmek, bırakmak">
            hatte aufgegeben
          </Tooltip>{" "}
          jedoch die Hoffnung, als neue Probleme{" "}
          <Tooltip definition="auslösen - tetiklemek">ausgelöst</Tooltip>{" "}
          wurden. Ein ranghohes Mitglied der Expedition{" "}
          <Tooltip definition="sich aufführen - abartılı davranmak">
            hatte sich aufgeführt
          </Tooltip>
          äußerst unprofessionell und{" "}
          <Tooltip definition="erfolgen - meydana gelmek, gerçekleşmek">
            war erfolgt
          </Tooltip>
          ein schwerer Zwischenfall.
        </p>

        <p>
          Weber{" "}
          <Tooltip definition="bangen - endişelenmek">hatte gebangt</Tooltip> um
          das Projekt und
          <Tooltip definition="schlottern - aşırı titremek">
            hatte geschlottert
          </Tooltip>{" "}
          vor Aufregung. Er war fassungslos und horrisch zugleich. "Auf keinen
          Fall darf das Projekt scheitern!", dachte er. Die Situation war
          furchtbar geworden, und er musste vorsichtig sein.
        </p>

        <p>
          Inzwischen{" "}
          <Tooltip definition="züchten - yetiştirmek">hatte gezüchtet</Tooltip>{" "}
          die lokale Bevölkerung in der Bucht verschiedene Fischarten, um die
          überfischten Heringe zu ersetzen. Sie{" "}
          <Tooltip definition="austasten - yoklamak">hatte ausgetastet</Tooltip>{" "}
          neue Möglichkeiten für nachhaltigen Fischfang. Weber erkannte, dass
          dort drüben eine alte Sitte, die Tradition des respektvollen Umgangs
          mit der Natur, noch lebendig war.
        </p>

        <p>
          Nach einer Beerdigung eines örtlichen Würdenträgers{" "}
          <Tooltip definition="abhauen - kaçmak">war abgehauen</Tooltip>
          einer der Expeditionsteilnehmer. Er{" "}
          <Tooltip definition="holen - alıyor / getiriyor">
            hatte geholt
          </Tooltip>
          wichtige Ausrüstung und{" "}
          <Tooltip definition="ausrasten - çıldırmak">war ausgerastet</Tooltip>,
          als er vom entstandenen Schaden erfuhr. Weber musste vollumfänglich
          für die Kosten aufkommen.
        </p>

        <p>
          Das Team{" "}
          <Tooltip definition="einkaufen - alışveriş yapmak">
            hatte eingekauft
          </Tooltip>{" "}
          neue Ausrüstung und{" "}
          <Tooltip definition="abbauen - sökmek, azaltmak">
            hatte abgebaut
          </Tooltip>{" "}
          die alten, nicht mehr brauchbaren Geräte. Sie{" "}
          <Tooltip definition="abbilden - resmetmek, temsil etmek">
            hatte abgebildet
          </Tooltip>
          alle Funde sorgfältig und{" "}
          <Tooltip definition="abbrechen - yarıda kesmek">
            hatte abgebrochen
          </Tooltip>
          die Arbeiten nur bei schlechtem Wetter.
        </p>

        <p>
          Weber{" "}
          <Tooltip definition="abgeben - teslim etmek">hatte abgegeben</Tooltip>{" "}
          regelmäßige Berichte über die Abgaswerte der verwendeten Maschinen.
          Leider
          <Tooltip definition="abhandenkommen - kaybolmak">
            war abhandengekommen
          </Tooltip>{" "}
          ein wichtiges Dokument, das die Abholzung in der Region dokumentierte.
          Er
          <Tooltip definition="ablegen - bir kenara koymak">
            hatte abgelegt
          </Tooltip>{" "}
          eine Kopie in seinem Archiv.
        </p>

        <p>
          Nichts konnte ihn{" "}
          <Tooltip definition="ablenken - dikkat dağıtmak">ablenken</Tooltip>{" "}
          von seinem Ziel. Er{" "}
          <Tooltip definition="ablesen - okumak (ölçü aletinden)">
            hatte abgelesen
          </Tooltip>{" "}
          alle Messwerte und festgestellt, dass die Umweltverschmutzung
          <Tooltip definition="abnehmen - kilo vermek, azalmak">
            hatte abgenommen
          </Tooltip>
          . Die Geräte{" "}
          <Tooltip definition="abnutzen - aşınmak">hatte abgenutzt</Tooltip>{" "}
          waren nach monatelangem Einsatz.
        </p>

        <p>
          Nach der Abrechnung{" "}
          <Tooltip definition="absaugen - emerek temizlemek">
            hatte abgesaugt
          </Tooltip>
          das Team alle Arbeitsplätze und{" "}
          <Tooltip definition="abschaffen - kaldırmak">
            hatte abgeschafft
          </Tooltip>
          die strengen Sicherheitsmaßnahmen. Weber, ein Absolvent der
          renommierten Universität,
          <Tooltip definition="absolvieren - tamamlamak (eğitim)">
            hatte absolviert
          </Tooltip>{" "}
          das Projekt erfolgreich.
        </p>

        <p>
          Die Ergebnisse zeigten, dass viele Arten{" "}
          <Tooltip definition="abstammen - köken almak">
            hatte abgestammt
          </Tooltip>
          von gemeinsamen Vorfahren. Mit angemessenem Abstand{" "}
          <Tooltip definition="abstauben - tozunu almak">
            hatte abgestaubt
          </Tooltip>
          Weber die wertvollen Funde. Er{" "}
          <Tooltip definition="abstreiten - inkâr etmek">
            hatte abgestritten
          </Tooltip>
          zunächst die Bedeutung einiger Entdeckungen.
        </p>

        <p>
          Als sein Computer{" "}
          <Tooltip definition="abstürzen - çökmek (bilgisayar)">
            war abgestürzt
          </Tooltip>
          , war Weber kurz vom geplanten Kurs{" "}
          <Tooltip definition="abweichen - sapmak">abgewichen</Tooltip>. Er{" "}
          <Tooltip definition="abwenden - önlemek">hatte abgewendet</Tooltip>{" "}
          eine Katastrophe und{" "}
          <Tooltip definition="abwischen - silmek">hatte abgewischt</Tooltip>{" "}
          den Schweiß von der Stirn.
        </p>

        <p>
          Der Adel der Region, besonders eine einflussreiche Adlige,
          <Tooltip definition="unterstützen - desteklemek">
            hatte unterstützt
          </Tooltip>{" "}
          das Projekt. Sie spielte Akkordeon in ihrer Freizeit und sprach
          akzentfrei mehrere Sprachen. In der Alltagssprache der Region galt sie
          als altmodisch, aber ihre Weisheit war wertvoll.
        </p>

        <p>
          Weber <Tooltip definition="altern - yaşlanmak">war gealtert</Tooltip>{" "}
          während der Expedition, aber seine Erfahrung hatte die Alterspyramide
          des Teams positiv beeinflusst. Die Altersstruktur war ideal für das
          Projekt. Er studierte die Eigenschaften von Aluminium und anderen
          Materialien, die{" "}
          <Tooltip definition="anfallen - ortaya çıkmak (atık vb.)">
            angefallen
          </Tooltip>{" "}
          waren.
        </p>

        <p>
          Das Arzneimittel, das er benötigte, lag im Aschenbecher neben seinem
          Atmungsgerät. Er{" "}
          <Tooltip definition="anfühlen - hissetmek">hatte angefühlt</Tooltip>{" "}
          die raue Oberfläche des uralten Atoms. Seine Angehörigen waren stolz
          auf seine Leistungen.
        </p>

        <p>
          Am Ende der Geschichte war Weber ein anderer Mensch geworden. Er war
          verrückt nach weiteren Entdeckungen und
          <Tooltip definition="richten - yönlendirmek">
            hatte gerichtet
          </Tooltip>{" "}
          die Augen auf neue Projekte. Seine Arbeit war nicht von schlechten
          Eltern - sie war außergewöhnlich gut gelungen.
        </p>

        <p>
          Als Weber Jahre später zurückblickte, erkannte er, dass diese
          Expedition sein Leben grundlegend verändert hatte. Die Erfahrungen,
          die er gesammelt hatte, die Menschen, die er kennengelernt hatte, und
          die Erkenntnisse, die er gewonnen hatte, prägten ihn bis ins hohe
          Alter. Es war nicht nur eine wissenschaftliche Mission gewesen - es
          war eine Reise zur Selbsterkenntnis.
        </p>
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <p className="text-sm text-gray-600">
          <strong>Kullanım:</strong> Koyu mavi renkli kelimelerin üzerine fareyi
          getirdiğinizde fiilin yalın hali ve Türkçe anlamını görebilirsiniz.
        </p>
      </div>
    </div>
  );
};

export default GermanStoryWithTooltips;
