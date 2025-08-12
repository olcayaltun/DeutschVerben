import React, { useState } from "react";

const GermanStory = () => {
  const [hoveredWord, setHoveredWord] = useState(null);

  const verbTranslations = {
    "hatte improvisiert": "improvisieren - Doğaçlama yapmak",
    "war infiziert worden": "infizieren - Enfekte etmek",
    "hatte inspiriert": "inspirieren - İlham vermek",
    "hatte instandgehalten": "instandhalten - Bakım yapmak",
    "hatte interpretiert": "interpretieren - Yorumlamak",
    "hatte investiert": "investieren - Yatırım yapmak",
    "hatte gejuckt": "jucken - Kaşınmak",
    "hatte kalkuliert": "kalkulieren - Hesaplamak",
    "hatte geklatscht": "klatschen - Alkışlamak",
    "hatte kommuniziert": "kommunizieren - İletişim kurmak",
    "hatte kondensiert": "kondensieren - Yoğunlaştırmak",
    "hatte konfrontiert": "konfrontieren - Yüzleştirmek",
    "hatte geleistet": "leisten - Başarmak",
    "hatte gelöffelt": "löffeln - Kaşıkla almak",
    "hatte sich gelohnt": "lohnen - Değmek",
    "hatte sich gelöst": "lösen - Çözmek",
    "war losgeworden": "loswerden - Kurtulmak",
    "hatte gemeistert": "meistern - Üstesinden gelmek",
    "hatte missachtet": "missachten - Görmezden gelmek",
    "hatte missbraucht": "missbrauchen - Kötüye kullanmak",
    "hatte missfallen": "missfallen - Hoşlanmamak",
    "hatte misstraut": "misstrauen - Güvenmemek",
    "hatte missverstanden": "missverstehen - Yanlış anlamak",
    "hatte mitgewirkt": "mitwirken - Katkıda bulunmak",
    "hatte montiert": "montieren - Montaj yapmak",
    "hatte mürrisch reagiert": "mürrisch reagieren - Somurtarak tepki vermek",
    "hatte nachgedacht": "nachdenken - Düşünmek",
    "hatte nachgeforscht": "nachforschen - Araştırmak",
    "hatte nachgegeben": "nachgeben - Boyun eğmek",
    "hatte nachgeholt": "nachholen - Telafi etmek",
    "hatte nachgewiesen": "nachweisen - Kanıtlamak",
    "hatte sich genähert": "nähern - Yaklaşmak",
    "hatte niemals verstanden": "niemals verstehen - Asla anlamamak",
    "hatte sich notiert": "notieren - Not almak",
    "hatte sich orientiert": "orientieren - Yönlendirmek",
    "hatte sich produziert": "produzieren - Üretmek",
    "hatte reagiert": "reagieren - Tepki vermek",
    "hatte sich realisiert": "realisieren - Gerçekleştirmek",
    "hatte renoviert": "renovieren - Yenilemek",
    "hatte resümiert": "resümieren - Özetlemek",
    "hatte sich revanchiert": "revanchieren - Rövanş almak",
    "hatte sich spezialisiert": "spezialisieren - Uzmanlaşmak",
    "hatte stabilisiert": "stabilisieren - Stabilize etmek",
    "hatte studiert": "studieren - Okumak",
    "hatte transportiert": "transportieren - Taşımak",
    "hatte sich verwandelt": "verwandeln - Dönüştürmek",
    "hatte verzichtet": "verzichten - Vazgeçmek",
    "hatte sich vorgestellt": "vorstellen - Tanıtmak",
    "hatte sich widersetzt": "widersetzen - Karşı koymak",
    "hatte zugegeben": "zugeben - İtiraf etmek",
    "war zugestimmt worden": "zustimmen - Onaylamak",
  };

  const VerbSpan = ({ children, translation }) => (
    <span
      className="font-bold text-blue-800 cursor-pointer hover:bg-blue-100 px-1 rounded relative"
      onMouseEnter={() => setHoveredWord(translation)}
      onMouseLeave={() => setHoveredWord(null)}
    >
      {children}
      {hoveredWord === translation && (
        <div className="absolute bottom-full left-0 bg-gray-900 text-white p-2 rounded text-sm whitespace-nowrap z-10 shadow-lg">
          {translation}
        </div>
      )}
    </span>
  );

  return (
    <div className="max-w-5xl mx-auto p-8 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Der Wissenschaftler und die Industrialisierung
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            Professor Dr. Heinrich Wagner war ein renommierter Experte für{" "}
            <strong className="text-indigo-600">Kunstgeschichte</strong> und{" "}
            <strong className="text-indigo-600">literarische</strong> Werke des{" "}
            <strong className="text-indigo-600">Mittelalters</strong>. In seinem{" "}
            <strong className="text-indigo-600">mittelalterlichen</strong> Büro
            an der Universität{" "}
            <VerbSpan translation={verbTranslations["hatte studiert"]}>
              hatte er jahrelang studiert
            </VerbSpan>{" "}
            und{" "}
            <VerbSpan
              translation={verbTranslations["hatte sich spezialisiert"]}
            >
              hatte sich auf die Kolonialzeit spezialisiert
            </VerbSpan>
            . Die{" "}
            <strong className="text-indigo-600">Industrialisierung</strong>{" "}
            seines Heimatlandes{" "}
            <VerbSpan translation={verbTranslations["hatte inspiriert"]}>
              hatte ihn schon früh inspiriert
            </VerbSpan>
            , über die Transformation der Gesellschaft zu forschen.
          </p>

          <p>
            Der Professor{" "}
            <VerbSpan translation={verbTranslations["hatte kommuniziert"]}>
              hatte regelmäßig mit Kollegen aus anderen Industriestaaten
              kommuniziert
            </VerbSpan>{" "}
            und{" "}
            <VerbSpan translation={verbTranslations["hatte mitgewirkt"]}>
              hatte an verschiedenen Projekten mitgewirkt
            </VerbSpan>
            . Seine <strong className="text-indigo-600">Kapazität</strong> für{" "}
            <strong className="text-indigo-600">komplexe</strong> Analysen war
            beeindruckend. In seiner letzten{" "}
            <strong className="text-indigo-600">Lehrveranstaltung</strong>{" "}
            <VerbSpan translation={verbTranslations["hatte interpretiert"]}>
              hatte er ein berühmtes Kunstwerk interpretiert
            </VerbSpan>
            , das die <strong className="text-indigo-600">Moderne</strong>{" "}
            repräsentierte.
          </p>

          <p>
            Die <strong className="text-indigo-600">Inanspruchnahme</strong>{" "}
            seiner Dienste durch die Regierung{" "}
            <VerbSpan translation={verbTranslations["hatte sich gelohnt"]}>
              hatte sich gelohnt
            </VerbSpan>
            . Er{" "}
            <VerbSpan translation={verbTranslations["hatte kalkuliert"]}>
              hatte genau kalkuliert
            </VerbSpan>
            , wie viel Zeit er für seine Forschung über{" "}
            <strong className="text-indigo-600">Installationskunst</strong> und{" "}
            <strong className="text-indigo-600">Malerei</strong> benötigen
            würde. Seine <strong className="text-indigo-600">Leistung</strong>{" "}
            in diesem Bereich war{" "}
            <strong className="text-indigo-600">meisterhaft</strong>.
          </p>

          <p>
            Eines Tages{" "}
            <VerbSpan translation={verbTranslations["war infiziert worden"]}>
              war er mit einer schweren Infektion infiziert worden
            </VerbSpan>
            . Die <strong className="text-indigo-600">Lungenentzündung</strong>{" "}
            <VerbSpan translation={verbTranslations["hatte gejuckt"]}>
              hatte ihm die Haut gejuckt
            </VerbSpan>{" "}
            und seine <strong className="text-indigo-600">Leber</strong>{" "}
            belastet. Der <strong className="text-indigo-600">Kommissar</strong>{" "}
            für Gesundheitswesen{" "}
            <VerbSpan translation={verbTranslations["hatte investiert"]}>
              hatte viel Geld in moderne Medizin investiert
            </VerbSpan>
            . Die <strong className="text-indigo-600">Kanüle</strong> war{" "}
            <strong className="text-indigo-600">klebrig</strong> und die
            Behandlung <strong className="text-indigo-600">lästig</strong>.
          </p>

          <p>
            Während seiner Genesung{" "}
            <VerbSpan translation={verbTranslations["hatte nachgedacht"]}>
              hatte er über die Zukunft nachgedacht
            </VerbSpan>
            . Die <strong className="text-indigo-600">Katastrophe</strong> des{" "}
            <strong className="text-indigo-600">Klimawandels</strong> und der{" "}
            <strong className="text-indigo-600">Kohleausstieg</strong>{" "}
            beschäftigten ihn.{" "}
            <strong className="text-indigo-600">Kohlenstoffdioxid</strong> und{" "}
            <strong className="text-indigo-600">Methan</strong> waren{" "}
            <strong className="text-indigo-600">lebensgefährlich</strong> für
            alle <strong className="text-indigo-600">Lebewesen</strong>. Seine{" "}
            <strong className="text-indigo-600">Lebenserwartung</strong> würde
            durch die Umweltverschmutzung verkürzt.
          </p>

          <p>
            In seinem <strong className="text-indigo-600">Lebensraum</strong>{" "}
            <VerbSpan translation={verbTranslations["hatte instandgehalten"]}>
              hatte er sein altes Mauerwerk instandgehalten
            </VerbSpan>
            . Die{" "}
            <strong className="text-indigo-600">Lebenshaltungskosten</strong> in
            der Stadt waren gestiegen, aber sein{" "}
            <strong className="text-indigo-600">Lebensstandard</strong> blieb
            hoch. Seine <strong className="text-indigo-600">Lebensweise</strong>{" "}
            war <strong className="text-indigo-600">konstant</strong> und{" "}
            <strong className="text-indigo-600">konkret</strong> strukturiert.
          </p>

          <p>
            Der <strong className="text-indigo-600">Kaiser</strong> des
            ehemaligen <strong className="text-indigo-600">Königreichs</strong>{" "}
            <VerbSpan translation={verbTranslations["hatte missachtet"]}>
              hatte die Rechte der Minderheiten missachtet
            </VerbSpan>
            . Diese <strong className="text-indigo-600">Monarchie</strong>{" "}
            <VerbSpan translation={verbTranslations["hatte missbraucht"]}>
              hatte ihre Macht missbraucht
            </VerbSpan>
            . Die <strong className="text-indigo-600">katholische</strong>{" "}
            <strong className="text-indigo-600">Konfession</strong>{" "}
            <VerbSpan translation={verbTranslations["hatte misstraut"]}>
              hatte der weltlichen Bildung misstraut
            </VerbSpan>
            .
          </p>

          <p>
            Professor Wagner{" "}
            <VerbSpan translation={verbTranslations["hatte sich notiert"]}>
              hatte sich wichtige Informationen über Mikroplastik notiert
            </VerbSpan>
            . Die <strong className="text-indigo-600">Masse</strong> der{" "}
            <strong className="text-indigo-600">Moleküle</strong> in der{" "}
            <strong className="text-indigo-600">Materie</strong> war{" "}
            <strong className="text-indigo-600">materiell</strong> messbar.
            Seine <strong className="text-indigo-600">Mikrowelle</strong>{" "}
            <VerbSpan translation={verbTranslations["hatte kondensiert"]}>
              hatte Wasserdampf kondensiert
            </VerbSpan>
            .
          </p>

          <p>
            Die <strong className="text-indigo-600">Massentierhaltung</strong>{" "}
            und <strong className="text-indigo-600">Milchprodukte</strong>{" "}
            <VerbSpan translation={verbTranslations["hatte konfrontiert"]}>
              hatten ihn mit ethischen Fragen konfrontiert
            </VerbSpan>
            . Das <strong className="text-indigo-600">Militär</strong>{" "}
            <VerbSpan translation={verbTranslations["hatte transportiert"]}>
              hatte Güter mit Kerosin transportiert
            </VerbSpan>
            . Die <strong className="text-indigo-600">Mehrsprachigkeit</strong>{" "}
            war in seiner{" "}
            <strong className="text-indigo-600">mehrsprachigen</strong> Familie{" "}
            <strong className="text-indigo-600">lebenswichtig</strong>.
          </p>

          <p>
            Seine Studenten aus der{" "}
            <strong className="text-indigo-600">Mittelschicht</strong>{" "}
            <VerbSpan translation={verbTranslations["hatte geklatscht"]}>
              hatten nach seiner Vorlesung geklatscht
            </VerbSpan>
            . Die <strong className="text-indigo-600">mittelständischen</strong>{" "}
            Unternehmen{" "}
            <VerbSpan translation={verbTranslations["hatte renoviert"]}>
              hatten ihre Fabriken renoviert
            </VerbSpan>
            . Der <strong className="text-indigo-600">Maschinenbau</strong>{" "}
            <VerbSpan translation={verbTranslations["hatte sich verwandelt"]}>
              hatte sich durch die Digitalisierung verwandelt
            </VerbSpan>
            .
          </p>

          <p>
            Menschen mit{" "}
            <strong className="text-indigo-600">Migrationshintergrund</strong>{" "}
            <VerbSpan translation={verbTranslations["hatte improvisiert"]}>
              hatten oft improvisiert
            </VerbSpan>
            , um sich zu integrieren. Die{" "}
            <strong className="text-indigo-600">Mitwirkungspflicht</strong>{" "}
            <VerbSpan translation={verbTranslations["hatte sich realisiert"]}>
              hatte sich in neuen Gesetzen realisiert
            </VerbSpan>
            . Ein <strong className="text-indigo-600">Mörder</strong>{" "}
            <VerbSpan translation={verbTranslations["hatte zugegeben"]}>
              hatte seine Tat zugegeben
            </VerbSpan>{" "}
            und <strong className="text-indigo-600">Lösegeld</strong> gefordert.
          </p>

          <p>
            Die <strong className="text-indigo-600">Leinwand</strong> eines
            berühmten Künstlers{" "}
            <VerbSpan translation={verbTranslations["hatte sich gelöst"]}>
              hatte sich vom Rahmen gelöst
            </VerbSpan>
            . Das <strong className="text-indigo-600">Mosaik</strong> aus{" "}
            <strong className="text-indigo-600">Marmor</strong> und{" "}
            <strong className="text-indigo-600">Keramik</strong>{" "}
            <VerbSpan translation={verbTranslations["hatte montiert"]}>
              hatte ein Handwerker montiert
            </VerbSpan>
            . Der <strong className="text-indigo-600">Kork</strong> in der
            Flasche war <strong className="text-indigo-600">kratzig</strong> und{" "}
            <strong className="text-indigo-600">langatmig</strong> zu entfernen.
          </p>

          <p>
            Seine <strong className="text-indigo-600">Körpersprache</strong>{" "}
            <VerbSpan translation={verbTranslations["hatte missfallen"]}>
              hatte der Journalistin missfallen
            </VerbSpan>
            . Die <strong className="text-indigo-600">Karikatur</strong> in der
            Zeitung war <strong className="text-indigo-600">lebendig</strong>{" "}
            und <strong className="text-indigo-600">kaufmännisch</strong>{" "}
            orientiert. Der <strong className="text-indigo-600">Jude</strong>{" "}
            <VerbSpan translation={verbTranslations["hatte sich widersetzt"]}>
              hatte sich der Diskriminierung widersetzt
            </VerbSpan>
            .
          </p>

          <p>
            Die <strong className="text-indigo-600">Laufzeit</strong> seines
            Projekts{" "}
            <VerbSpan translation={verbTranslations["hatte sich vorgestellt"]}>
              hatte er sich anders vorgestellt
            </VerbSpan>
            . Die <strong className="text-indigo-600">Ladezeit</strong> der
            neuen Software war zu lang. Seine{" "}
            <strong className="text-indigo-600">Lehre</strong> über{" "}
            <strong className="text-indigo-600">Latein</strong>{" "}
            <VerbSpan translation={verbTranslations["hatte geleistet"]}>
              hatte er mit Hingabe geleistet
            </VerbSpan>
            .
          </p>

          <p>
            Am Ende seines{" "}
            <strong className="text-indigo-600">Liebesverhältnisses</strong>{" "}
            <VerbSpan translation={verbTranslations["hatte gelöffelt"]}>
              hatte er allein seine Suppe gelöffelt
            </VerbSpan>
            . Sein <strong className="text-indigo-600">Kuscheltier</strong> aus
            der Kindheit{" "}
            <VerbSpan translation={verbTranslations["war losgeworden"]}>
              war er nie losgeworden
            </VerbSpan>
            . Der <strong className="text-indigo-600">Kreislauf</strong> der
            Natur{" "}
            <VerbSpan translation={verbTranslations["hatte stabilisiert"]}>
              hatte das Ökosystem stabilisiert
            </VerbSpan>
            .
          </p>

          <p>
            Seine Assistentin{" "}
            <VerbSpan translation={verbTranslations["hatte nachgeforscht"]}>
              hatte über Menschenrechte nachgeforscht
            </VerbSpan>
            . Sie{" "}
            <VerbSpan translation={verbTranslations["hatte sich orientiert"]}>
              hatte sich an den industriellen Standards orientiert
            </VerbSpan>
            . Der <strong className="text-indigo-600">Kittel</strong> im Labor{" "}
            <VerbSpan translation={verbTranslations["hatte sich produziert"]}>
              hatte sich als nützlich produziert
            </VerbSpan>
            .
          </p>

          <p>
            Der <strong className="text-indigo-600">Knochenbruch</strong> nach
            dem Unfall{" "}
            <VerbSpan translation={verbTranslations["hatte nachgeholt"]}>
              hatte seine Heilung nachgeholt
            </VerbSpan>
            . Die <strong className="text-indigo-600">Lunge</strong>{" "}
            <VerbSpan translation={verbTranslations["hatte reagiert"]}>
              hatte auf die Medikamente reagiert
            </VerbSpan>
            . <strong className="text-indigo-600">Kohle</strong>{" "}
            <VerbSpan translation={verbTranslations["hatte verzichtet"]}>
              hatte die Regierung als Energiequelle verzichtet
            </VerbSpan>
            .
          </p>

          <p>
            Professor Wagner{" "}
            <VerbSpan translation={verbTranslations["hatte resümiert"]}>
              hatte am Ende seines Lebens resümiert
            </VerbSpan>
            : Die{" "}
            <strong className="text-indigo-600">Industrialisierung</strong>{" "}
            <VerbSpan translation={verbTranslations["hatte gemeistert"]}>
              hatte die Menschheit viele Herausforderungen gemeistert
            </VerbSpan>
            , aber auch neue Probleme geschaffen. Seine{" "}
            <strong className="text-indigo-600">Forschung</strong> über die{" "}
            <strong className="text-indigo-600">Kolonialzeit</strong>{" "}
            <VerbSpan translation={verbTranslations["hatte nachgewiesen"]}>
              hatte nachgewiesen
            </VerbSpan>
            , dass sich die Geschichte wiederholt.
          </p>

          <p>
            Die <strong className="text-indigo-600">Mauerfall</strong>{" "}
            <VerbSpan translation={verbTranslations["hatte missverstanden"]}>
              hatte er zunächst missverstanden
            </VerbSpan>
            . Die Bedeutung dieses Ereignisses{" "}
            <VerbSpan translation={verbTranslations["hatte sich genähert"]}>
              hatte sich ihm erst Jahre später genähert
            </VerbSpan>
            .{" "}
            <VerbSpan translation={verbTranslations["hatte sich revanchiert"]}>
              Er hatte sich bei der Geschichte revanchiert
            </VerbSpan>
            , indem er die Wahrheit dokumentierte.
          </p>

          <p>
            Seine letzte Erkenntnis war, dass{" "}
            <VerbSpan translation={verbTranslations["war zugestimmt worden"]}>
              der Wandel der Welt zugestimmt worden war
            </VerbSpan>{" "}
            von allen <strong className="text-indigo-600">Lebewesen</strong>.
            Die <strong className="text-indigo-600">Zukunft</strong> würde
            zeigen, ob die Menschheit aus ihren Fehlern lernen könnte.
          </p>
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-bold text-blue-800 mb-2">
            Verwendete Grammatik
          </h3>
          <p className="text-gray-700">
            <strong>Perfekt:</strong> Für abgeschlossene Handlungen mit Bezug
            zur Gegenwart
            <br />
            <strong>Plusquamperfekt:</strong> Für Handlungen, die vor einem
            anderen Zeitpunkt in der Vergangenheit stattfanden
            <br />
            <em>
              Fahren Sie mit der Maus über die blauen Wörter, um die Grundform
              und türkische Bedeutung zu sehen.
            </em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GermanStory;
