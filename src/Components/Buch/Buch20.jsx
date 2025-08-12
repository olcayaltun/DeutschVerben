import React, { useState } from "react";

const GermanStory = () => {
  const [hoveredWord, setHoveredWord] = useState(null);

  const verbDefinitions = {
    "hatte experimentiert": "experimentieren - deney yapmak",
    "war gelungen": "gelingen - başarmak",
    "hatte formuliert": "formulieren - ifade etmek",
    "war gehalten": "halten - tutmak",
    "hatte herausgegeben": "herausgeben - yayınlamak",
    "war herausgefunden": "herausfinden - keşfetmek",
    "hatte gestaltet": "gestalten - şekillendirmek",
    "war gelangt": "gelangen - ulaşmak",
    "hatte gefertigt": "fertigen - üretmek",
    "war gegeben": "geben - vermek",
    "hatte hinzugefügt": "hinzufügen - eklemek",
    "war fehlgeschlagen": "fehlschlagen - başarısız olmak",
    "hatte freigesetzt": "freisetzen - serbest bırakmak",
    "war geflüstert": "flüstern - fısıldamak",
    "hatte gestikuliert": "gestikulieren - jest yapmak",
    "war gehört": "gehören - ait olmak",
    "hatte identifiziert": "identifizieren - tanımlamak",
    "war immatrikuliert": "immatrikulieren - üniversiteye kaydolmak",
    "hatte hintergangen": "hintergehen - aldatmak",
    "war hinbekommen": "hinbekommen - başarmak",
    "hatte hineinversetzt": "hineinversetzen - kendini yerine koymak",
    "war geflirtet": "flirten - flört etmek",
    "hatte gegolten": "gelten - geçerli olmak",
    "hatte freigestellt": "freistellen - izin vermek",
  };

  const VerbTooltip = ({ verb, children }) => (
    <span
      className="relative inline-block"
      onMouseEnter={() => setHoveredWord(verb)}
      onMouseLeave={() => setHoveredWord(null)}
    >
      <span className="font-bold text-blue-800 cursor-pointer border-b-2 border-blue-300 hover:bg-blue-100 px-1 rounded">
        {children}
      </span>
      {hoveredWord === verb && (
        <div className="absolute z-10 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg -top-10 left-0 whitespace-nowrap">
          {verbDefinitions[verb]}
        </div>
      )}
    </span>
  );

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-indigo-800">
          Der Wissenschaftler und seine großartige Entdeckung
        </h1>

        <div className="space-y-4 text-base leading-relaxed text-gray-800">
          <p>
            Dr. Weber war ein{" "}
            <span className="font-semibold text-green-700">hervorragender</span>{" "}
            Wissenschaftler, der jahrelang mit{" "}
            <span className="font-semibold text-green-700">fieberhafte</span>{" "}
            Intensität in seinem Labor{" "}
            <VerbTooltip verb="hatte experimentiert">
              experimentiert hatte
            </VerbTooltip>
            . Seine{" "}
            <span className="font-semibold text-green-700">Fachsprache</span>{" "}
            war so komplex, dass es ihm schwer{" "}
            <VerbTooltip verb="war gelungen">gelungen war</VerbTooltip>, seine
            Theorien seinem{" "}
            <span className="font-semibold text-green-700">Familienkreis</span>{" "}
            zu erklären.
          </p>

          <p>
            Als er seine neueste Theorie{" "}
            <VerbTooltip verb="hatte formuliert">formuliert hatte</VerbTooltip>,
            wurde eine wichtige Konferenz im{" "}
            <span className="font-semibold text-green-700">Gerichtssaal</span>{" "}
            der Universität{" "}
            <VerbTooltip verb="war gehalten">gehalten</VerbTooltip>. Der
            Professor{" "}
            <VerbTooltip verb="hatte herausgegeben">
              hatte herausgegeben
            </VerbTooltip>
            , dass seine Forschung über{" "}
            <span className="font-semibold text-green-700">Giftstoffe</span>{" "}
            revolutionär sei. Nachdem er wichtige{" "}
            <span className="font-semibold text-green-700">Funde</span>{" "}
            <VerbTooltip verb="war herausgefunden">
              herausgefunden hatte
            </VerbTooltip>
            , begann er, seine Präsentation zu{" "}
            <VerbTooltip verb="hatte gestaltet">gestalten</VerbTooltip>.
          </p>

          <p>
            Seine Kollegen aus seinem{" "}
            <span className="font-semibold text-green-700">Freundeskreis</span>{" "}
            waren{" "}
            <span className="font-semibold text-green-700">faszinierend</span>{" "}
            von dem{" "}
            <span className="font-semibold text-green-700">Experiment</span>,
            das er entwickelt hatte. Bis zu diesem Punkt war er zu einer
            wichtigen Erkenntnis{" "}
            <VerbTooltip verb="war gelangt">gelangt</VerbTooltip>: Die{" "}
            <span className="font-semibold text-green-700">Fertigung</span>{" "}
            neuer Materialien, die er im Labor{" "}
            <VerbTooltip verb="hatte gefertigt">gefertigt hatte</VerbTooltip>,
            könnte der Menschheit große Vorteile bringen.
          </p>

          <p>
            Seiner Assistentin{" "}
            <VerbTooltip verb="war gegeben">war gegeben</VerbTooltip> worden,
            alle notwendigen Daten zu sammeln. Sie{" "}
            <VerbTooltip verb="hatte hinzugefügt">
              hatte hinzugefügt
            </VerbTooltip>
            , dass der erste Versuch{" "}
            <VerbTooltip verb="war fehlgeschlagen">
              fehlgeschlagen war
            </VerbTooltip>
            , aber das neue{" "}
            <span className="font-semibold text-green-700">Gewebe</span> hatte
            gefährliche Stoffe{" "}
            <VerbTooltip verb="hatte freigesetzt">freigesetzt</VerbTooltip>. In
            der{" "}
            <span className="font-semibold text-green-700">
              Gerichtsverhandlung
            </span>{" "}
            über die Sicherheit wurde leise{" "}
            <VerbTooltip verb="war geflüstert">geflüstert</VerbTooltip>, während
            die Anwälte heftig{" "}
            <VerbTooltip verb="hatte gestikuliert">
              gestikuliert hatten
            </VerbTooltip>
            .
          </p>

          <p>
            Die <span className="font-semibold text-green-700">Funktion</span>{" "}
            dieses neuen Materials{" "}
            <VerbTooltip verb="war gehört">hatte gehört</VerbTooltip> zu einer
            völlig neuen Kategorie. Dr. Weber{" "}
            <VerbTooltip verb="hatte identifiziert">
              hatte identifiziert
            </VerbTooltip>
            , dass es sich um eine{" "}
            <span className="font-semibold text-green-700">großartige</span>{" "}
            Entdeckung handelte. Als er sich an der Universität{" "}
            <VerbTooltip verb="war immatrikuliert">
              immatrikuliert hatte
            </VerbTooltip>
            , hätte er nie gedacht, dass er zu solchen Ergebnissen kommen würde.
          </p>

          <p>
            Seine{" "}
            <span className="font-semibold text-green-700">Hauptfigur</span> in
            der Forschung war Dr. Schmidt, aber Weber fühlte sich von ihm{" "}
            <VerbTooltip verb="hatte hintergangen">hintergangen</VerbTooltip>,
            als er erfuhr, dass Schmidt die Ergebnisse für sich beansprucht
            hatte. Trotz dieser{" "}
            <span className="font-semibold text-green-700">
              Geringfügigkeit
            </span>{" "}
            war es Weber{" "}
            <VerbTooltip verb="war hinbekommen">hinbekommen</VerbTooltip>, seine
            Forschung fortzusetzen.
          </p>

          <p>
            Er{" "}
            <VerbTooltip verb="hatte hineinversetzt">
              hatte sich hineinversetzt
            </VerbTooltip>{" "}
            in die Position eines{" "}
            <span className="font-semibold text-green-700">Flüchtling</span>,
            der nach{" "}
            <span className="font-semibold text-green-700">Gleichheit</span>{" "}
            suchte. In seinem{" "}
            <span className="font-semibold text-green-700">Herkunftsland</span>{" "}
            war er mit{" "}
            <span className="font-semibold text-green-700">Homophobie</span>{" "}
            konfrontiert worden, obwohl er nicht{" "}
            <span className="font-semibold text-green-700">homosexuell</span>{" "}
            war.
          </p>

          <p>
            Seine Sekretärin hatte heimlich mit ihm{" "}
            <VerbTooltip verb="war geflirtet">geflirtet</VerbTooltip>, aber für
            ihn <VerbTooltip verb="hatte gegolten">hatte gegolten</VerbTooltip>,
            dass berufliche{" "}
            <span className="font-semibold text-green-700">
              Freundschaftsverhältnisse
            </span>{" "}
            wichtiger seien. Die Universität{" "}
            <VerbTooltip verb="hatte freigestellt">
              hatte freigestellt
            </VerbTooltip>
            , ob er seine Forschung in dem{" "}
            <span className="font-semibold text-green-700">Glashaus</span> oder
            im traditionellen Labor fortsetzen wollte.
          </p>

          <p>
            Am Ende seiner Karriere blickte Dr. Weber auf seine{" "}
            <span className="font-semibold text-green-700">Handlungen</span>{" "}
            zurück. Seine{" "}
            <span className="font-semibold text-green-700">hartnäckige</span>{" "}
            Arbeit hatte sich gelohnt, und seine{" "}
            <span className="font-semibold text-green-700">glaubwürdige</span>{" "}
            Forschung war zu einer{" "}
            <span className="font-semibold text-green-700">Grundlage</span> für
            zukünftige Generationen geworden. Der{" "}
            <span className="font-semibold text-green-700">Glaube</span> an
            seine Mission hatte ihn durch alle{" "}
            <span className="font-semibold text-green-700">fürchterlichen</span>{" "}
            Momente getragen.
          </p>

          <p>
            Seine Entdeckung eines neuen{" "}
            <span className="font-semibold text-green-700">Impfstoffs</span> aus{" "}
            <span className="font-semibold text-green-700">Getreide</span> war
            revolutionär. Die{" "}
            <span className="font-semibold text-green-700">
              Gesetzmäßigkeit
            </span>{" "}
            seiner Forschung wurde von der{" "}
            <span className="font-semibold text-green-700">Hebamme</span> bis
            zum <span className="font-semibold text-green-700">Herrscher</span>{" "}
            des Landes anerkannt. Seine{" "}
            <span className="font-semibold text-green-700">Herrschaft</span>{" "}
            über die wissenschaftliche Welt war unbestritten.
          </p>

          <p>
            Die <span className="font-semibold text-green-700">Hülle</span>{" "}
            seiner Forschungsunterlagen war{" "}
            <span className="font-semibold text-green-700">flauschig</span> und
            schützte wichtige Dokumente. Ein{" "}
            <span className="font-semibold text-green-700">Fleck</span> auf
            seinem Laborkittel erinnerte ihn an den Tag, als das{" "}
            <span className="font-semibold text-green-700">Hochwasser</span>{" "}
            sein Labor überschwemmt hatte. Sein{" "}
            <span className="font-semibold text-green-700">
              Gesichtsausdruck
            </span>{" "}
            zeigte{" "}
            <span className="font-semibold text-green-700">Herzklopfen</span>{" "}
            vor Aufregung.
          </p>

          <p>
            Die{" "}
            <span className="font-semibold text-green-700">Geburtenrate</span>{" "}
            in seinem Labor war hoch - neue Ideen entstanden täglich. Sein{" "}
            <span className="font-semibold text-green-700">Gebrauch</span>{" "}
            modernster{" "}
            <span className="font-semibold text-green-700">
              Haushaltsartikel
            </span>{" "}
            wie dem{" "}
            <span className="font-semibold text-green-700">Geschirrspüler</span>{" "}
            und{" "}
            <span className="font-semibold text-green-700">
              Flachbildfernseher
            </span>{" "}
            im Labor war unkonventionell. Die{" "}
            <span className="font-semibold text-green-700">Feststelltaste</span>{" "}
            seines Computers war durch ständigen{" "}
            <span className="font-semibold text-green-700">Gebrauch</span>{" "}
            abgenutzt.
          </p>

          <p>
            Seine{" "}
            <span className="font-semibold text-green-700">Hausaufgaben</span>{" "}
            als Student waren immer{" "}
            <span className="font-semibold text-green-700">fristgerecht</span>{" "}
            gewesen. Die{" "}
            <span className="font-semibold text-green-700">Frist</span> für
            seine aktuelle Forschung war{" "}
            <span className="font-semibold text-green-700">fristgemäß</span>{" "}
            eingehalten worden. Trotz{" "}
            <span className="font-semibold text-green-700">Frust</span> und{" "}
            <span className="font-semibold text-green-700">Handicaps</span>{" "}
            hatte er nie aufgegeben.
          </p>

          <p>
            Das <span className="font-semibold text-green-700">Gerüst</span>{" "}
            seiner Theorie war solide. Seine{" "}
            <span className="font-semibold text-green-700">Geige</span> spielte
            er in den Pausen, um seinen{" "}
            <span className="font-semibold text-green-700">Geist</span> zu
            entspannen. Die{" "}
            <span className="font-semibold text-green-700">geistige</span>{" "}
            Anstrengung war enorm, aber nicht{" "}
            <span className="font-semibold text-green-700">geistlich</span>{" "}
            motiviert wie bei einem{" "}
            <span className="font-semibold text-green-700">Geistlichen</span>.
          </p>

          <p>
            Seine{" "}
            <span className="font-semibold text-green-700">Gänsehaut</span>{" "}
            bekam er immer, wenn er an seine größte Entdeckung dachte. Das{" "}
            <span className="font-semibold text-green-700">gasförmige</span>{" "}
            Material, das er entwickelt hatte, wurde vom{" "}
            <span className="font-semibold text-green-700">Gaszähler</span>{" "}
            nicht erfasst. Die{" "}
            <span className="font-semibold text-green-700">Gletscher</span>{" "}
            schmolzen wegen der globalen Erwärmung, aber seine Forschung könnte
            helfen.
          </p>

          <p>
            Der <span className="font-semibold text-green-700">glitschige</span>{" "}
            Boden im Labor war gefährlich. Sein{" "}
            <span className="font-semibold text-green-700">Gegenüber</span> war
            skeptisch, aber er blieb{" "}
            <span className="font-semibold text-green-700">gläubig</span>. Die{" "}
            <span className="font-semibold text-green-700">gegenteilige</span>{" "}
            Meinung seiner Kollegen war manchmal{" "}
            <span className="font-semibold text-green-700">grauenhaft</span> und{" "}
            <span className="font-semibold text-green-700">grauenvoll</span>.
          </p>

          <p>
            Der <span className="font-semibold text-green-700">Griff</span>{" "}
            seiner Laborausrüstung war ergonomisch gestaltet. Ein{" "}
            <span className="font-semibold text-green-700">Gemälde</span> an der
            Wand zeigte Menschen verschiedener{" "}
            <span className="font-semibold text-green-700">Hautfarbe</span>. Der{" "}
            <span className="font-semibold text-green-700">Gerichtsdiener</span>{" "}
            brachte wichtige Dokumente. Seine{" "}
            <span className="font-semibold text-green-700">Grundsätze</span>{" "}
            waren klar definiert.
          </p>

          <p>
            Die{" "}
            <span className="font-semibold text-green-700">Fehlermeldung</span>{" "}
            auf seinem Computer war{" "}
            <span className="font-semibold text-green-700">heftig</span>. Als{" "}
            <span className="font-semibold text-green-700">
              Geringverdiener
            </span>{" "}
            hatte er früher gekämpft, aber jetzt war er erfolgreich. Seine{" "}
            <span className="font-semibold text-green-700">Harnblase</span> war
            durch die langen Arbeitstage strapaziert. Der{" "}
            <span className="font-semibold text-green-700">Gesprächsstoff</span>{" "}
            mit seiner Familie war immer seine Forschung.
          </p>

          <p>
            Das <span className="font-semibold text-green-700">Gewinde</span>{" "}
            seiner Laborausrüstung war präzise gefertigt. Seine Arbeiten waren
            zu einem wichtigen{" "}
            <span className="font-semibold text-green-700">Gesprächsstoff</span>{" "}
            in der wissenschaftlichen Gemeinschaft geworden. Die{" "}
            <span className="font-semibold text-green-700">Geflüchteten</span>{" "}
            in seinem Labor fanden hier eine neue Heimat für ihre Forschung.
          </p>

          <p>
            Dr. Weber war stolz auf seine Lebensleistung. Seine{" "}
            <span className="font-semibold text-green-700">Grundlage</span> für
            zukünftige Forschungen war gelegt, und sein wissenschaftlicher{" "}
            <span className="font-semibold text-green-700">Gebrauch</span>{" "}
            innovativer Methoden hatte neue Standards gesetzt. Die Welt würde
            sich durch seine Entdeckungen für immer verändern.
          </p>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-bold text-blue-800 mb-2">Nasıl Kullanılır:</h3>
          <p className="text-blue-700">
            <span className="font-bold text-blue-800">Mavi renkli</span>{" "}
            kelimelerin üzerine fareyle gelin. Perfect ve Plusquamperfekt
            fiillerinin temel halini ve Türkçe anlamlarını görebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GermanStory;
