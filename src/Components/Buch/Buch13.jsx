import React, { useState } from "react";

const GermanStory = () => {
  const [hoveredWord, setHoveredWord] = useState(null);

  const verbMeanings = {
    abgebaut: "abbauen - yıkmak, sökmek",
    abgegeben: "abgeben - vermek, teslim etmek",
    abgehangen: "abhängen - bağlı olmak, asılı olmak",
    angebaut: "anbauen - yetiştirmek, ekmek",
    geatmet: "atmen - nefes almak",
    aufgebraucht: "aufbrauchen - tüketmek, bitirmek",
    ausgestoßen: "ausstoßen - dışarı atmak, kovmak",
    ausgewirkt: "auswirken - etki etmek",
    gebaut: "bauen - inşa etmek, yapmak",
    bedeckt: "bedecken - örtmek, kaplamak",
    beeinflusst: "beeinflussen - etkilemek",
    befördert: "befördern - taşımak, sevk etmek",
    begrenzt: "begrenzen - sınırlamak",
    belastet: "belasten - yüklemek, rahatsız etmek",
    benötigt: "benötigen - ihtiyaç duymak",
    beigetragen: "beitragen - katkıda bulunmak",
    geblasen: "blasen - üflemek",
    gebraucht: "brauchen - ihtiyaç duymak",
    eingekauft: "einkaufen - alışveriş yapmak",
    eingegriffen: "eingreifen - müdahale etmek",
    entstanden: "entstehen - oluşmak, meydana gelmek",
    erhalten: "erhalten - almak, korumak",
    erlebt: "erleben - yaşamak, deneyimlemek",
    erwärmt: "erwärmen - ısıtmak",
    erzeugt: "erzeugen - üretmek",
    geflogen: "fliegen - uçmak",
    gefördert: "fördern - desteklemek, teşvik etmek",
    geführt: "führen - yönetmek, götürmek",
    funktioniert: "funktionieren - çalışmak, işlemek",
    gelangt: "gelangen - ulaşmak, varmak",
    geraten: "geraten - düşmek, girmek",
    gewonnen: "gewinnen - kazanmak",
    gehabt: "haben - sahip olmak",
    geholfen: "helfen - yardım etmek",
    hergestellt: "herstellen - üretmek",
    gekauft: "kaufen - satın almak",
    gekommen: "kommen - gelmek",
    gekonnt: "können - yapabilmek",
    konsumiert: "konsumieren - tüketmek",
    gelandet: "landen - inmek, varmak",
    gelassen: "lassen - bırakmak",
    gelebt: "leben - yaşamak",
    gelegen: "liegen - yatmak, bulunmak",
    gemacht: "machen - yapmak",
    gemusst: "müssen - zorunda olmak",
    genommen: "nehmen - almak",
    genutzt: "nutzen - kullanmak",
    produziert: "produzieren - üretmek",
    recycelt: "recyceln - geri dönüştürmek",
    reduziert: "reduzieren - azaltmak",
    geschützt: "schützen - korumak",
    gewesen: "sein - olmak",
    gesetzt: "setzen - koymak",
    gespart: "sparen - tasarruf etmek",
    gestorben: "sterben - ölmek",
    gestiegen: "steigen - yükselmek",
    gestoßen: "stoßen - itmek",
    summiert: "summieren - toplamak",
    getragen: "tragen - taşımak",
    getroffen: "treffen - karşılaşmak",
    getrunken: "trinken - içmek",
    umfasst: "umfassen - kapsamak",
    umgesetzt: "umsetzen - uygulamak",
    umgewandelt: "umwandeln - dönüştürmek",
    umgeben: "umgeben - çevrelemek",
    verbraucht: "verbrauchen - tüketmek",
    verbrannt: "verbrennen - yakmak",
    verlassen: "verlassen - terk etmek",
    vermieden: "vermeiden - kaçınmak",
    verschmutzt: "verschmutzen - kirletmek",
    verwechselt: "verwechseln - karıştırmak",
    verwendet: "verwenden - kullanmak",
    geworden: "werden - olmak",
    gewirtschaftet: "wirtschaften - ekonomi yapmak",
    zerstört: "zerstören - yok etmek",
    zugenommen: "zunehmen - artmak",
    bedroht: "bedrohen - tehdit etmek",
    reagieren: "reagieren - tepki göstermek",
    verschärft: "verschärfen - keskinleştirmek",
    geleistet: "leisten - başarmak",
    erfordert: "erfordern - gerektirmek",
    gehandelt: "handeln - hareket etmek",
    gefordert: "fordern - istemek",
    erworben: "erwerben - edinmek",
    gekehrt: "kehren - dönmek",
    gemessen: "messen - ölçmek",
    verhindert: "verhindern - önlemek",
    gegönnt: "gönnen - nasip etmek",
    bewältigt: "bewältigen - üstesinden gelmek",
    erfüllen: "erfüllen - yerine getirmek",
    vertreten: "vertreten - temsil etmek",
    gegolten: "gelten - geçerli olmak",
    geprägt: "prägen - şekillendirmek",
    geschont: "schonen - korumak",
    verlängert: "verlängern - uzatmak",
    entwickelt: "entwickeln - geliştirmek",
    betroffen: "betreffen - ilgilendirmek",
    angesetzt: "ansetzen - uygulamak",
    verschlimmert: "verschlimmern - kötüleştirmek",
  };

  const HighlightedWord = ({ word, children }) => (
    <span
      className="relative font-bold text-blue-700 cursor-pointer hover:text-blue-900 transition-colors"
      onMouseEnter={() => setHoveredWord(word)}
      onMouseLeave={() => setHoveredWord(null)}
    >
      {children}
      {hoveredWord === word && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap z-10">
          {verbMeanings[word]}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
        </div>
      )}
    </span>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Der Klimawandel und seine Folgen
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            Professor Schmidt{" "}
            <HighlightedWord word="gelangt">
              war zu der Überzeugung gelangt
            </HighlightedWord>
            , dass die Menschheit durch extreme Wetterphänomene wie Dürren,
            Überschwemmungen und Stürme{" "}
            <HighlightedWord word="bedroht">bedroht</HighlightedWord> wird.
            Seine Forschung{" "}
            <HighlightedWord word="beigetragen">
              hatte dazu beigetragen
            </HighlightedWord>
            , dass Küstenstädte weltweit als ein deutliches Zeichen für den
            Klimawandel empfindlich{" "}
            <HighlightedWord word="reagieren">reagieren</HighlightedWord>{" "}
            mussten.
          </p>

          <p>
            Die Hauptursache{" "}
            <HighlightedWord word="verschärft">
              hatte sich verschärft
            </HighlightedWord>
            , nachdem der Konsum fossiler Brennstoffe über Jahre{" "}
            <HighlightedWord word="zugenommen">
              zugenommen hatte
            </HighlightedWord>
            . Maßnahmen{" "}
            <HighlightedWord word="geleistet">
              waren geleistet worden
            </HighlightedWord>
            , aber der Verzicht auf umweltschädliche Praktiken{" "}
            <HighlightedWord word="erfordert">erforderte</HighlightedWord>{" "}
            internationale Abkommen. Die Anstrengungen{" "}
            <HighlightedWord word="gehandelt">hatten gehandelt</HighlightedWord>
            , faire Lieferketten zu fördern, die als wichtiger Bestandteil{" "}
            <HighlightedWord word="gefordert">gefordert wurden</HighlightedWord>
            .
          </p>

          <p>
            Dr. Müller{" "}
            <HighlightedWord word="erworben">hatte erworben</HighlightedWord>,
            dass lebenslanges Lernen aus verschiedenen Bildungsquellen{" "}
            <HighlightedWord word="gekehrt">war gekehrt</HighlightedWord>. Die
            Rahmenbedingungen für langfristige Entwicklung{" "}
            <HighlightedWord word="gemessen">
              waren in Maßen gemessen worden
            </HighlightedWord>
            . Das Herz-Kreislauf-System und das Immunsystem{" "}
            <HighlightedWord word="beeinflusst">
              hatten das seelische Wohlbefinden beeinflusst
            </HighlightedWord>
            .
          </p>

          <p>
            Eine ausgewogene Work-Life-Balance{" "}
            <HighlightedWord word="verhindert">
              hatte Burnout verhindert
            </HighlightedWord>
            . Die Menschen{" "}
            <HighlightedWord word="gegönnt">
              hatten sich Pausen gegönnt
            </HighlightedWord>
            , um den Anspruch auf Gesundheit zu erfüllen. Verschiedene Werte und
            Verhaltensweisen{" "}
            <HighlightedWord word="bewältigt">
              waren bewältigt worden
            </HighlightedWord>
            , um schwierige Phasen nach einer Trennung{" "}
            <HighlightedWord word="beeinflusst">
              zu beeinflussen
            </HighlightedWord>
            .
          </p>

          <p>
            Es{" "}
            <HighlightedWord word="gewesen">
              war unerlässlich gewesen
            </HighlightedWord>
            , sinnvolle freiwillige Aktivitäten in regelmäßigen Abständen{" "}
            <HighlightedWord word="erfüllen">zu erfüllen</HighlightedWord>. Die
            Bevölkerung{" "}
            <HighlightedWord word="vertreten">
              hatte mündige Bürger vertreten
            </HighlightedWord>
            , deren Engagement als legitimes Mittel der Meinungsäußerung{" "}
            <HighlightedWord word="gegolten">gegolten hatte</HighlightedWord>.
            Unabhängig vom Geschlecht{" "}
            <HighlightedWord word="gemacht">
              hatte es Sinn gemacht
            </HighlightedWord>
            , frühzeitig zu handeln, ohne die Menschen zu verwirren oder
            abschreckend zu wirken.
          </p>

          <p>
            Die Gesellschaft{" "}
            <HighlightedWord word="geprägt">war geprägt worden</HighlightedWord>{" "}
            von Forschern, die Lithium-Eisen-Phosphat (LiFePO₄) Batterien
            entwickelt <HighlightedWord word="gehabt">hatten</HighlightedWord>.
            Diese Technologie{" "}
            <HighlightedWord word="geschont">
              hatte die Umwelt geschont
            </HighlightedWord>{" "}
            und{" "}
            <HighlightedWord word="verlängert">
              die Ladezyklen verlängert
            </HighlightedWord>
            . Sogenannte Ersatztechnologien{" "}
            <HighlightedWord word="entwickelt">
              waren entwickelt worden
            </HighlightedWord>
            , um neurodegenerative Erkrankungen zu behandeln.
          </p>

          <p>
            Patienten{" "}
            <HighlightedWord word="betroffen">
              waren betroffen gewesen
            </HighlightedWord>{" "}
            von Eiweißablagerungen im Gehirn. Forscher{" "}
            <HighlightedWord word="abgebaut">
              hatten diese Ablagerungen abgebaut
            </HighlightedWord>
            , indem sie Beta-Amyloid mit Aducanumab{" "}
            <HighlightedWord word="angesetzt">angesetzt hatten</HighlightedWord>
            . Die Entzündungshemmung{" "}
            <HighlightedWord word="verschlimmert">
              hatte sich nicht verschlimmert
            </HighlightedWord>
            .
          </p>

          <p>
            Die Umweltprobleme{" "}
            <HighlightedWord word="abgehangen">
              hatten von verschiedenen Faktoren abgehangen
            </HighlightedWord>
            . Landwirte{" "}
            <HighlightedWord word="angebaut">
              hatten nachhaltige Pflanzen angebaut
            </HighlightedWord>{" "}
            und dabei frische Luft{" "}
            <HighlightedWord word="geatmet">geatmet</HighlightedWord>.
            Natürliche Ressourcen{" "}
            <HighlightedWord word="aufgebraucht">
              waren aufgebraucht worden
            </HighlightedWord>
            , während Fabriken schädliche Gase{" "}
            <HighlightedWord word="ausgestoßen">
              ausgestoßen hatten
            </HighlightedWord>
            .
          </p>

          <p>
            Diese Entwicklungen{" "}
            <HighlightedWord word="ausgewirkt">
              hatten sich negativ auf die Umwelt ausgewirkt
            </HighlightedWord>
            . Ingenieure{" "}
            <HighlightedWord word="gebaut">
              hatten umweltfreundliche Gebäude gebaut
            </HighlightedWord>
            , die mit Solarpanels{" "}
            <HighlightedWord word="bedeckt">bedeckt waren</HighlightedWord>.
            Politiker{" "}
            <HighlightedWord word="beeinflusst">
              hatten die öffentliche Meinung beeinflusst
            </HighlightedWord>{" "}
            und Güter{" "}
            <HighlightedWord word="befördert">befördert</HighlightedWord>, um
            den Schaden zu{" "}
            <HighlightedWord word="begrenzen">begrenzen</HighlightedWord>.
          </p>

          <p>
            Die Wirtschaft{" "}
            <HighlightedWord word="belastet">
              war durch die Krise belastet worden
            </HighlightedWord>
            . Unternehmen{" "}
            <HighlightedWord word="benötigt">
              hatten finanzielle Unterstützung benötigt
            </HighlightedWord>
            , während starke Winde{" "}
            <HighlightedWord word="geblasen">geblasen hatten</HighlightedWord>.
            Familien{" "}
            <HighlightedWord word="gebraucht">
              hatten mehr Energie gebraucht
            </HighlightedWord>{" "}
            und{" "}
            <HighlightedWord word="eingekauft">
              online eingekauft
            </HighlightedWord>
            .
          </p>

          <p>
            Die Regierung{" "}
            <HighlightedWord word="eingegriffen">
              war eingegriffen
            </HighlightedWord>
            , nachdem neue Probleme{" "}
            <HighlightedWord word="entstanden">
              entstanden waren
            </HighlightedWord>
            . Bürgerinitiativen{" "}
            <HighlightedWord word="erhalten">
              hatten Unterstützung erhalten
            </HighlightedWord>{" "}
            und{" "}
            <HighlightedWord word="erlebt">
              dramatische Veränderungen erlebt
            </HighlightedWord>
            . Die Atmosphäre{" "}
            <HighlightedWord word="erwärmt">hatte sich erwärmt</HighlightedWord>
            , während Kraftwerke Strom{" "}
            <HighlightedWord word="erzeugt">erzeugt hatten</HighlightedWord>.
          </p>

          <p>
            Vögel{" "}
            <HighlightedWord word="geflogen">
              waren in wärmere Gebiete geflogen
            </HighlightedWord>
            . Organisationen{" "}
            <HighlightedWord word="gefördert">
              hatten Umweltprojekte gefördert
            </HighlightedWord>{" "}
            und Expeditionen{" "}
            <HighlightedWord word="geführt">geführt</HighlightedWord>. Neue
            Technologien{" "}
            <HighlightedWord word="funktioniert">
              hatten perfekt funktioniert
            </HighlightedWord>
            , und Schadstoffe{" "}
            <HighlightedWord word="gelangt">
              waren in die Gewässer gelangt
            </HighlightedWord>
            .
          </p>

          <p>
            Städte{" "}
            <HighlightedWord word="geraten">
              waren in Schwierigkeiten geraten
            </HighlightedWord>
            . Wissenschaftler{" "}
            <HighlightedWord word="gewonnen">
              hatten wichtige Erkenntnisse gewonnen
            </HighlightedWord>{" "}
            und Experten{" "}
            <HighlightedWord word="geholfen">
              hatten bei der Lösung geholfen
            </HighlightedWord>
            . Firmen{" "}
            <HighlightedWord word="hergestellt">
              hatten umweltfreundliche Produkte hergestellt
            </HighlightedWord>{" "}
            und Verbraucher{" "}
            <HighlightedWord word="gekauft">
              hatten diese gekauft
            </HighlightedWord>
            .
          </p>

          <p>
            Delegationen{" "}
            <HighlightedWord word="gekommen">
              waren zu Klimakonferenzen gekommen
            </HighlightedWord>
            . Sie{" "}
            <HighlightedWord word="gekonnt">
              hatten Kompromisse finden können
            </HighlightedWord>{" "}
            und weniger Ressourcen{" "}
            <HighlightedWord word="konsumiert">konsumiert</HighlightedWord>.
            Flugzeuge{" "}
            <HighlightedWord word="gelandet">
              waren auf nachhaltigen Flughäfen gelandet
            </HighlightedWord>{" "}
            und Regierungen{" "}
            <HighlightedWord word="gelassen">
              hatten alte Praktiken gelassen
            </HighlightedWord>
            .
          </p>

          <p>
            Menschen{" "}
            <HighlightedWord word="gelebt">
              hatten bewusster gelebt
            </HighlightedWord>
            . Probleme{" "}
            <HighlightedWord word="gelegen">
              hatten in der Vergangenheit gelegen
            </HighlightedWord>
            , aber alle{" "}
            <HighlightedWord word="gemacht">
              hatten sich Gedanken gemacht
            </HighlightedWord>
            . Sie{" "}
            <HighlightedWord word="gemusst">
              hatten handeln müssen
            </HighlightedWord>{" "}
            und Verantwortung{" "}
            <HighlightedWord word="genommen">genommen</HighlightedWord>.
          </p>

          <p>
            Gemeinden{" "}
            <HighlightedWord word="genutzt">
              hatten erneuerbare Energien genutzt
            </HighlightedWord>{" "}
            und{" "}
            <HighlightedWord word="produziert">
              saubere Energie produziert
            </HighlightedWord>
            . Materialien{" "}
            <HighlightedWord word="recycelt">
              waren recycelt worden
            </HighlightedWord>{" "}
            und Emissionen{" "}
            <HighlightedWord word="reduziert">reduziert</HighlightedWord>.
            Naturschutzgebiete{" "}
            <HighlightedWord word="geschützt">
              waren geschützt worden
            </HighlightedWord>{" "}
            und das Bewusstsein{" "}
            <HighlightedWord word="gewesen">war höher gewesen</HighlightedWord>.
          </p>

          <p>
            Ziele{" "}
            <HighlightedWord word="gesetzt">
              waren gesetzt worden
            </HighlightedWord>{" "}
            und Geld <HighlightedWord word="gespart">gespart</HighlightedWord>.
            Arten{" "}
            <HighlightedWord word="gestorben">waren gestorben</HighlightedWord>,
            aber die Temperaturen{" "}
            <HighlightedWord word="gestiegen">waren gestiegen</HighlightedWord>.
            Wissenschaftler{" "}
            <HighlightedWord word="gestoßen">
              waren auf neue Lösungen gestoßen
            </HighlightedWord>{" "}
            und alle Anstrengungen{" "}
            <HighlightedWord word="summiert">
              hatten sich summiert
            </HighlightedWord>
            .
          </p>

          <p>
            Aktivisten{" "}
            <HighlightedWord word="getragen">
              hatten Banner getragen
            </HighlightedWord>{" "}
            und Politiker{" "}
            <HighlightedWord word="getroffen">getroffen</HighlightedWord>.
            Forscher{" "}
            <HighlightedWord word="getrunken">
              hatten Kaffee getrunken
            </HighlightedWord>
            , während ihre Studien alles{" "}
            <HighlightedWord word="umfasst">umfasst hatten</HighlightedWord>.
            Pläne{" "}
            <HighlightedWord word="umgesetzt">
              waren umgesetzt worden
            </HighlightedWord>{" "}
            und Abfall{" "}
            <HighlightedWord word="umgewandelt">
              in Energie umgewandelt
            </HighlightedWord>
            .
          </p>

          <p>
            Wälder{" "}
            <HighlightedWord word="umgeben">
              hatten Städte umgeben
            </HighlightedWord>
            . Haushalte{" "}
            <HighlightedWord word="verbraucht">
              hatten weniger Strom verbraucht
            </HighlightedWord>{" "}
            und{" "}
            <HighlightedWord word="verbrannt">
              keine fossilen Brennstoffe verbrannt
            </HighlightedWord>
            . Niemand{" "}
            <HighlightedWord word="verlassen">
              hatte die Hoffnung verlassen
            </HighlightedWord>{" "}
            und alle{" "}
            <HighlightedWord word="vermieden">
              hatten Verschwendung vermieden
            </HighlightedWord>
            .
          </p>

          <p>
            Flüsse{" "}
            <HighlightedWord word="verschmutzt">
              waren verschmutzt worden
            </HighlightedWord>
            , aber Menschen{" "}
            <HighlightedWord word="verwechselt">
              hatten Ursache und Wirkung nicht verwechselt
            </HighlightedWord>
            . Alle{" "}
            <HighlightedWord word="verwendet">
              hatten nachhaltige Methoden verwendet
            </HighlightedWord>{" "}
            und der Planet{" "}
            <HighlightedWord word="geworden">
              war gesünder geworden
            </HighlightedWord>
            . Länder{" "}
            <HighlightedWord word="gewirtschaftet">
              hatten nachhaltig gewirtschaftet
            </HighlightedWord>{" "}
            und niemand{" "}
            <HighlightedWord word="zerstört">
              hatte die Natur zerstört
            </HighlightedWord>
            .
          </p>

          <p>
            Am Ende{" "}
            <HighlightedWord word="zugenommen">
              hatte das Bewusstsein zugenommen
            </HighlightedWord>{" "}
            und alle Menschen arbeiteten zusammen für eine bessere Zukunft. Die
            Geschichte zeigt, wie wichtig es ist, rechtzeitig zu handeln und
            Verantwortung zu übernehmen.
          </p>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">
            Anleitung:
          </h3>
          <p className="text-blue-700">
            Bewegen Sie die Maus über die{" "}
            <span className="font-bold text-blue-700">
              fett markierten Wörter
            </span>{" "}
            (Perfekt und Plusquamperfekt), um die Grundform und türkische
            Bedeutung zu sehen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GermanStory;
