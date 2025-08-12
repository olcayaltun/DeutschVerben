import React, { useState } from "react";

const GermanStoryC1 = () => {
  const [hoveredVerb, setHoveredVerb] = useState(null);

  const VerbTooltip = ({ verb, infinitive, turkish, children }) => {
    return (
      <span
        className="relative inline-block"
        onMouseEnter={() => setHoveredVerb(verb)}
        onMouseLeave={() => setHoveredVerb(null)}
      >
        <span className="font-bold text-blue-800 cursor-pointer hover:text-blue-600 transition-colors">
          {children}
        </span>
        {hoveredVerb === verb && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-800 text-white px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap z-10">
            <div className="font-medium">{infinitive}</div>
            <div className="text-gray-300">{turkish}</div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
          </div>
        )}
      </span>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Der Lebensweg einer außergewöhnlichen Frau
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            Maria{" "}
            <VerbTooltip
              verb="hatte gewohnt"
              infinitive="wohnen"
              turkish="yaşamak"
            >
              hatte gewohnt
            </VerbTooltip>{" "}
            ihr ganzes Leben lang in dem kleinen Dorf, in dem sie geboren{" "}
            <VerbTooltip verb="war gewesen" infinitive="sein" turkish="olmak">
              war gewesen
            </VerbTooltip>
            . Sie{" "}
            <VerbTooltip
              verb="hatte gearbeitet"
              infinitive="arbeiten"
              turkish="çalışmak"
            >
              hatte gearbeitet
            </VerbTooltip>{" "}
            als Lehrerin und{" "}
            <VerbTooltip
              verb="hatte verlassen"
              infinitive="verlassen"
              turkish="terk etmek"
            >
              hatte verlassen
            </VerbTooltip>{" "}
            nie ihre Heimat. Nachts{" "}
            <VerbTooltip
              verb="hatte geträumt"
              infinitive="träumen"
              turkish="rüya görmek"
            >
              hatte geträumt
            </VerbTooltip>{" "}
            sie oft von fernen Ländern und{" "}
            <VerbTooltip
              verb="hatte gehofft"
              infinitive="hoffen"
              turkish="umut etmek"
            >
              hatte gehofft
            </VerbTooltip>{" "}
            insgeheim auf ein Abenteuer.
          </p>

          <p>
            Jahrelang{" "}
            <VerbTooltip
              verb="hatte gedacht"
              infinitive="denken"
              turkish="düşünmek"
            >
              hatte gedacht
            </VerbTooltip>{" "}
            sie, dass ihr Leben vorhersagbar bleiben würde. Sie{" "}
            <VerbTooltip
              verb="hatte gelernt"
              infinitive="lernen"
              turkish="öğrenmek"
            >
              hatte gelernt
            </VerbTooltip>
            , sich mit der Routine zu arrangieren, bis sie eines Tages einen
            alten Brief{" "}
            <VerbTooltip
              verb="hatte gefunden"
              infinitive="finden"
              turkish="bulmak"
            >
              hatte gefunden
            </VerbTooltip>
            . Dieser Brief{" "}
            <VerbTooltip
              verb="ist geworden"
              infinitive="werden"
              turkish="olmak"
            >
              ist geworden
            </VerbTooltip>{" "}
            der Wendepunkt ihres Lebens.
          </p>

          <p>
            Langsam{" "}
            <VerbTooltip
              verb="hat sich entwickelt"
              infinitive="sich entwickeln"
              turkish="gelişmek"
            >
              hat sich entwickelt
            </VerbTooltip>{" "}
            in ihr der Mut zur Veränderung. Mit 45 Jahren{" "}
            <VerbTooltip
              verb="hat begonnen"
              infinitive="beginnen"
              turkish="başlamak"
            >
              hat begonnen
            </VerbTooltip>{" "}
            sie ein völlig neues Kapitel. Ihr Leben{" "}
            <VerbTooltip
              verb="hat sich verändert"
              infinitive="sich verändern"
              turkish="değişmek"
            >
              hat sich verändert
            </VerbTooltip>{" "}
            drastisch, als sie beschloss, nach Berlin zu ziehen. Dort{" "}
            <VerbTooltip
              verb="ist gewachsen"
              infinitive="wachsen"
              turkish="büyümek"
            >
              ist gewachsen
            </VerbTooltip>{" "}
            ihr Selbstvertrauen stetig.
          </p>

          <p>
            Schnell{" "}
            <VerbTooltip
              verb="hat erreicht"
              infinitive="erreichen"
              turkish="ulaşmak"
            >
              hat erreicht
            </VerbTooltip>{" "}
            sie neue berufliche Höhen. Sie{" "}
            <VerbTooltip
              verb="hat entdeckt"
              infinitive="entdecken"
              turkish="keşfetmek"
            >
              hat entdeckt
            </VerbTooltip>{" "}
            ihre Leidenschaft für Journalismus und{" "}
            <VerbTooltip
              verb="hat verstanden"
              infinitive="verstehen"
              turkish="anlamak"
            >
              hat verstanden
            </VerbTooltip>{" "}
            endlich ihre wahre Berufung. Gegen alle Widerstände{" "}
            <VerbTooltip
              verb="hat gekämpft"
              infinitive="kämpfen"
              turkish="savaşmak"
            >
              hat gekämpft
            </VerbTooltip>{" "}
            sie für ihre Träume und{" "}
            <VerbTooltip
              verb="hat überwunden"
              infinitive="überwinden"
              turkish="üstesinden gelmek"
            >
              hat überwunden
            </VerbTooltip>{" "}
            jede Hürde.
          </p>

          <p>
            Mit ihren Artikeln{" "}
            <VerbTooltip
              verb="hat gezeigt"
              infinitive="zeigen"
              turkish="göstermek"
            >
              hat gezeigt
            </VerbTooltip>{" "}
            sie großes Talent und{" "}
            <VerbTooltip
              verb="hat bewiesen"
              infinitive="beweisen"
              turkish="kanıtlamak"
            >
              hat bewiesen
            </VerbTooltip>
            , dass Neuanfänge in jedem Alter möglich sind. Sie{" "}
            <VerbTooltip
              verb="hat geschaffen"
              infinitive="schaffen"
              turkish="yaratmak"
            >
              hat geschaffen
            </VerbTooltip>{" "}
            eine neue Identität für sich und{" "}
            <VerbTooltip
              verb="hat aufgebaut"
              infinitive="aufbauen"
              turkish="kurmak"
            >
              hat aufgebaut
            </VerbTooltip>{" "}
            ein beeindruckendes Netzwerk. Systematisch{" "}
            <VerbTooltip
              verb="hat entwickelt"
              infinitive="entwickeln"
              turkish="geliştirmek"
            >
              hat entwickelt
            </VerbTooltip>{" "}
            sie ihren eigenen Stil.
          </p>

          <p>
            Für ihre Arbeit{" "}
            <VerbTooltip
              verb="hat erhalten"
              infinitive="erhalten"
              turkish="almak"
            >
              hat erhalten
            </VerbTooltip>{" "}
            sie mehrere Auszeichnungen und{" "}
            <VerbTooltip
              verb="hat gewonnen"
              infinitive="gewinnen"
              turkish="kazanmak"
            >
              hat gewonnen
            </VerbTooltip>{" "}
            den Respekt ihrer Kollegen. In Berlin{" "}
            <VerbTooltip
              verb="hat geheiratet"
              infinitive="heiraten"
              turkish="evlenmek"
            >
              hat geheiratet
            </VerbTooltip>{" "}
            sie einen Gleichgesinnten und{" "}
            <VerbTooltip
              verb="hat gegründet"
              infinitive="gründen"
              turkish="kurmak"
            >
              hat gegründet
            </VerbTooltip>{" "}
            mit ihm ein kleines Verlagshaus. Gemeinsam{" "}
            <VerbTooltip
              verb="hat geschrieben"
              infinitive="schreiben"
              turkish="yazmak"
            >
              hat geschrieben
            </VerbTooltip>{" "}
            sie ein Buch über Mut und Veränderung.
          </p>

          <p>
            Trotz aller Erfolge{" "}
            <VerbTooltip
              verb="ist geblieben"
              infinitive="bleiben"
              turkish="kalmak"
            >
              ist geblieben
            </VerbTooltip>{" "}
            sie bodenständig. Ihre Geschichte{" "}
            <VerbTooltip
              verb="hat inspiriert"
              infinitive="inspirieren"
              turkish="ilham vermek"
            >
              hat inspiriert
            </VerbTooltip>{" "}
            viele Menschen und{" "}
            <VerbTooltip
              verb="hat begeistert"
              infinitive="begeistern"
              turkish="heveslendirmek"
            >
              hat begeistert
            </VerbTooltip>{" "}
            Leser in ganz Deutschland. Besonders{" "}
            <VerbTooltip
              verb="hat berührt"
              infinitive="berühren"
              turkish="dokunmak"
            >
              hat berührt
            </VerbTooltip>{" "}
            sie Menschen mittleren Alters, die ähnliche Träume hegen.
          </p>

          <p>
            Rückblickend erkannte Maria, dass sie zuvor viele Jahre der
            Unsicherheit{" "}
            <VerbTooltip
              verb="hatte erlebt"
              infinitive="erleben"
              turkish="yaşamak"
            >
              hatte erlebt
            </VerbTooltip>{" "}
            und eine schwierige Phase der Selbstfindung{" "}
            <VerbTooltip
              verb="hatte durchgemacht"
              infinitive="durchmachen"
              turkish="geçirmek"
            >
              hatte durchgemacht
            </VerbTooltip>
            . Sie{" "}
            <VerbTooltip
              verb="war geworden"
              infinitive="werden"
              turkish="olmak"
            >
              war geworden
            </VerbTooltip>{" "}
            zu einer völlig anderen Person. Aus der anfänglichen Angst{" "}
            <VerbTooltip
              verb="hatte entstanden"
              infinitive="entstehen"
              turkish="ortaya çıkmak"
            >
              hatte entstanden
            </VerbTooltip>{" "}
            ungeahnte Kraft.
          </p>

          <p>
            Ihre Familie{" "}
            <VerbTooltip
              verb="hatte aufgenommen"
              infinitive="aufnehmen"
              turkish="kabul etmek"
            >
              hatte aufgenommen
            </VerbTooltip>{" "}
            ihre Entscheidung zunächst skeptisch, aber später{" "}
            <VerbTooltip
              verb="hatte unterstützt"
              infinitive="unterstützen"
              turkish="desteklemek"
            >
              hatte unterstützt
            </VerbTooltip>{" "}
            sie sie bedingungslos. Freunde{" "}
            <VerbTooltip
              verb="hatte ermutigt"
              infinitive="ermutigen"
              turkish="cesaretlendirmek"
            >
              hatte ermutigt
            </VerbTooltip>{" "}
            sie immer wieder und{" "}
            <VerbTooltip
              verb="hatte betrachtet"
              infinitive="betrachten"
              turkish="bakmak"
            >
              hatte betrachtet
            </VerbTooltip>{" "}
            sie als Vorbild. Tief in ihrem Herzen{" "}
            <VerbTooltip
              verb="hatte gespürt"
              infinitive="spüren"
              turkish="hissetmek"
            >
              hatte gespürt
            </VerbTooltip>{" "}
            sie schon lange, dass eine Veränderung nötig war.
          </p>

          <p>
            Bereits mit 30{" "}
            <VerbTooltip
              verb="hatte erkannt"
              infinitive="erkennen"
              turkish="tanımak"
            >
              hatte erkannt
            </VerbTooltip>{" "}
            sie ihre schriftstellerischen Fähigkeiten, doch erst Jahre später{" "}
            <VerbTooltip
              verb="hatte beschlossen"
              infinitive="beschließen"
              turkish="karar vermek"
            >
              hatte beschlossen
            </VerbTooltip>{" "}
            sie, ihnen zu folgen. Die Großstadt{" "}
            <VerbTooltip
              verb="hatte verwandelt"
              infinitive="verwandeln"
              turkish="dönüştürmek"
            >
              hatte verwandelt
            </VerbTooltip>{" "}
            sie in eine selbstbewusste Frau. Bereits früh{" "}
            <VerbTooltip
              verb="hatte studiert"
              infinitive="studieren"
              turkish="okumak"
            >
              hatte studiert
            </VerbTooltip>{" "}
            sie Germanistik und{" "}
            <VerbTooltip
              verb="hatte besucht"
              infinitive="besuchen"
              turkish="ziyaret etmek"
            >
              hatte besucht
            </VerbTooltip>{" "}
            literarische Salons.
          </p>

          <p>
            In Berlin{" "}
            <VerbTooltip
              verb="hatte kennengelernt"
              infinitive="kennenlernen"
              turkish="tanışmak"
            >
              hatte kennengelernt
            </VerbTooltip>{" "}
            sie einflussreiche Persönlichkeiten. Sie{" "}
            <VerbTooltip
              verb="hatte geöffnet"
              infinitive="öffnen"
              turkish="açmak"
            >
              hatte geöffnet
            </VerbTooltip>{" "}
            ihr Herz für neue Erfahrungen, nachdem sie das Kapitel ihrer
            Vergangenheit{" "}
            <VerbTooltip
              verb="hatte geschlossen"
              infinitive="schließen"
              turkish="kapatmak"
            >
              hatte geschlossen
            </VerbTooltip>
            . Intensiv{" "}
            <VerbTooltip
              verb="hatte gefühlt"
              infinitive="fühlen"
              turkish="hissetmek"
            >
              hatte gefühlt
            </VerbTooltip>{" "}
            sie die Aufregung des Neuen. Schon immer{" "}
            <VerbTooltip
              verb="hatte gewusst"
              infinitive="wissen"
              turkish="bilmek"
            >
              hatte gewusst
            </VerbTooltip>{" "}
            sie, dass mehr in ihr steckte.
          </p>

          <p>
            Die Zeichen der Zeit{" "}
            <VerbTooltip
              verb="hatte gesehen"
              infinitive="sehen"
              turkish="görmek"
            >
              hatte gesehen
            </VerbTooltip>{" "}
            sie klar und den Ruf des Schicksals{" "}
            <VerbTooltip
              verb="hatte gehört"
              infinitive="hören"
              turkish="duymak"
            >
              hatte gehört
            </VerbTooltip>{" "}
            sie deutlich. Alle wichtigen Bücher über Journalismus{" "}
            <VerbTooltip
              verb="hatte gelesen"
              infinitive="lesen"
              turkish="okumak"
            >
              hatte gelesen
            </VerbTooltip>{" "}
            sie bereits und unzählige Artikel{" "}
            <VerbTooltip
              verb="hatte geschrieben"
              infinitive="schreiben"
              turkish="yazmak"
            >
              hatte geschrieben
            </VerbTooltip>{" "}
            sie als Übung. Mit Experten{" "}
            <VerbTooltip
              verb="hatte gesprochen"
              infinitive="sprechen"
              turkish="konuşmak"
            >
              hatte gesprochen
            </VerbTooltip>{" "}
            sie über ihre Pläne und gleichgesinnte Menschen{" "}
            <VerbTooltip
              verb="hatte getroffen"
              infinitive="treffen"
              turkish="buluşmak"
            >
              hatte getroffen
            </VerbTooltip>{" "}
            sie zufällig.
          </p>

          <p>
            Heute blickt Maria zufrieden auf ihren Weg zurück. Sie{" "}
            <VerbTooltip verb="hat gelebt" infinitive="leben" turkish="yaşamak">
              hat gelebt
            </VerbTooltip>{" "}
            ein erfülltes Leben und{" "}
            <VerbTooltip
              verb="hat geliebt"
              infinitive="lieben"
              turkish="sevmek"
            >
              hat geliebt
            </VerbTooltip>{" "}
            jeden Moment ihres Abenteuers. Härter als je zuvor{" "}
            <VerbTooltip
              verb="hat gearbeitet"
              infinitive="arbeiten"
              turkish="çalışmak"
            >
              hat gearbeitet
            </VerbTooltip>{" "}
            sie für ihre Träume und intensiver{" "}
            <VerbTooltip
              verb="hat studiert"
              infinitive="studieren"
              turkish="okumak"
            >
              hat studiert
            </VerbTooltip>{" "}
            sie ihr Handwerk. Das Glück{" "}
            <VerbTooltip
              verb="hat bekommen"
              infinitive="bekommen"
              turkish="almak"
            >
              hat bekommen
            </VerbTooltip>{" "}
            sie, weil sie mutig war.
          </p>

          <p>
            Ihr Beispiel{" "}
            <VerbTooltip
              verb="hat gemacht"
              infinitive="machen"
              turkish="yapmak"
            >
              hat gemacht
            </VerbTooltip>{" "}
            vielen Menschen Mut. Lange Zeit{" "}
            <VerbTooltip
              verb="hat gesucht"
              infinitive="suchen"
              turkish="aramak"
            >
              hat gesucht
            </VerbTooltip>{" "}
            sie nach ihrer wahren Bestimmung und endlich{" "}
            <VerbTooltip
              verb="hat gefunden"
              infinitive="finden"
              turkish="bulmak"
            >
              hat gefunden
            </VerbTooltip>{" "}
            sie sie. Niemals{" "}
            <VerbTooltip
              verb="hat verloren"
              infinitive="verlieren"
              turkish="kaybetmek"
            >
              hat verloren
            </VerbTooltip>{" "}
            sie ihren Optimismus und am Ende{" "}
            <VerbTooltip
              verb="hat gewonnen"
              infinitive="gewinnen"
              turkish="kazanmak"
            >
              hat gewonnen
            </VerbTooltip>{" "}
            sie das Spiel des Lebens.
          </p>

          <p>
            Neue Türen{" "}
            <VerbTooltip
              verb="hat geöffnet"
              infinitive="öffnen"
              turkish="açmak"
            >
              hat geöffnet
            </VerbTooltip>{" "}
            sie für andere und alte Wunden{" "}
            <VerbTooltip
              verb="hat geschlossen"
              infinitive="schließen"
              turkish="kapatmak"
            >
              hat geschlossen
            </VerbTooltip>{" "}
            sie für immer. Mit 45 Jahren{" "}
            <VerbTooltip
              verb="hat angefangen"
              infinitive="anfangen"
              turkish="başlamak"
            >
              hat angefangen
            </VerbTooltip>{" "}
            sie ein neues Leben und mit 60{" "}
            <VerbTooltip
              verb="hat beendet"
              infinitive="beenden"
              turkish="bitirmek"
            >
              hat beendet
            </VerbTooltip>{" "}
            sie ihre aktive Laufbahn als Journalistin. Alles{" "}
            <VerbTooltip
              verb="hat versucht"
              infinitive="versuchen"
              turkish="denemek"
            >
              hat versucht
            </VerbTooltip>{" "}
            sie und vieles{" "}
            <VerbTooltip
              verb="hat geschafft"
              infinitive="schaffen"
              turkish="başarmak"
            >
              hat geschafft
            </VerbTooltip>{" "}
            sie.
          </p>

          <p>
            An sich selbst{" "}
            <VerbTooltip
              verb="hat geglaubt"
              infinitive="glauben"
              turkish="inanmak"
            >
              hat geglaubt
            </VerbTooltip>{" "}
            sie immer und positiv{" "}
            <VerbTooltip
              verb="hat gedacht"
              infinitive="denken"
              turkish="düşünmek"
            >
              hat gedacht
            </VerbTooltip>{" "}
            sie in schwierigen Zeiten. Die Freude am Schreiben{" "}
            <VerbTooltip
              verb="hat gefühlt"
              infinitive="fühlen"
              turkish="hissetmek"
            >
              hat gefühlt
            </VerbTooltip>{" "}
            sie jeden Tag und die Erfüllung{" "}
            <VerbTooltip
              verb="hat gespürt"
              infinitive="spüren"
              turkish="hissetmek"
            >
              hat gespürt
            </VerbTooltip>{" "}
            sie in jeder Zeile. Ihre Berufung{" "}
            <VerbTooltip
              verb="hat erkannt"
              infinitive="erkennen"
              turkish="tanımak"
            >
              hat erkannt
            </VerbTooltip>{" "}
            sie spät, aber sie{" "}
            <VerbTooltip
              verb="hat verstanden"
              infinitive="verstehen"
              turkish="anlamak"
            >
              hat verstanden
            </VerbTooltip>
            , dass es nie zu spät ist.
          </p>

          <p>
            Viel{" "}
            <VerbTooltip
              verb="hat gelernt"
              infinitive="lernen"
              turkish="öğrenmek"
            >
              hat gelernt
            </VerbTooltip>{" "}
            sie über sich selbst und nie{" "}
            <VerbTooltip
              verb="hat vergessen"
              infinitive="vergessen"
              turkish="unutmak"
            >
              hat vergessen
            </VerbTooltip>{" "}
            sie ihre Wurzeln. An ihre Anfänge{" "}
            <VerbTooltip
              verb="hat erinnert"
              infinitive="erinnern"
              turkish="hatırlamak"
            >
              hat erinnert
            </VerbTooltip>{" "}
            sie sich gern und ihre Geschichte{" "}
            <VerbTooltip
              verb="hat erzählt"
              infinitive="erzählen"
              turkish="anlatmak"
            >
              hat erzählt
            </VerbTooltip>{" "}
            sie oft. "Träume haben kein Verfallsdatum",{" "}
            <VerbTooltip
              verb="hat gesagt"
              infinitive="sagen"
              turkish="söylemek"
            >
              hat gesagt
            </VerbTooltip>{" "}
            sie immer wieder.
          </p>

          <p>
            Wer sie nach ihrem Geheimnis{" "}
            <VerbTooltip
              verb="hat gefragt"
              infinitive="fragen"
              turkish="sormak"
            >
              hat gefragt
            </VerbTooltip>{" "}
            hat, dem{" "}
            <VerbTooltip
              verb="hat geantwortet"
              infinitive="antworten"
              turkish="cevap vermek"
            >
              hat geantwortet
            </VerbTooltip>{" "}
            sie stets: "Mut und Ausdauer." Vielen Menschen{" "}
            <VerbTooltip
              verb="hat geholfen"
              infinitive="helfen"
              turkish="yardım etmek"
            >
              hat geholfen
            </VerbTooltip>{" "}
            sie bei ihren eigenen Träumen und sie{" "}
            <VerbTooltip
              verb="hat unterstützt"
              infinitive="unterstützen"
              turkish="desteklemek"
            >
              hat unterstützt
            </VerbTooltip>{" "}
            sie bedingungslos. Andere{" "}
            <VerbTooltip
              verb="hat ermutigt"
              infinitive="ermutigen"
              turkish="cesaretlendirmek"
            >
              hat ermutigt
            </VerbTooltip>{" "}
            sie, ihren Weg zu gehen, und sie{" "}
            <VerbTooltip
              verb="hat motiviert"
              infinitive="motivieren"
              turkish="motive etmek"
            >
              hat motiviert
            </VerbTooltip>{" "}
            sie durch ihr Beispiel.
          </p>

          <p>
            Generationen{" "}
            <VerbTooltip
              verb="hat inspiriert"
              infinitive="inspirieren"
              turkish="ilham vermek"
            >
              hat inspiriert
            </VerbTooltip>{" "}
            sie mit ihrer Geschichte und das Leben vieler Menschen{" "}
            <VerbTooltip
              verb="hat beeinflusst"
              infinitive="beeinflussen"
              turkish="etkilemek"
            >
              hat beeinflusst
            </VerbTooltip>{" "}
            sie positiv. Die Welt{" "}
            <VerbTooltip
              verb="hat verändert"
              infinitive="verändern"
              turkish="değiştirmek"
            >
              hat verändert
            </VerbTooltip>{" "}
            sie nicht, aber sich selbst{" "}
            <VerbTooltip
              verb="hat verbessert"
              infinitive="verbessern"
              turkish="iyileştirmek"
            >
              hat verbessert
            </VerbTooltip>{" "}
            sie stetig. Ihren Stil{" "}
            <VerbTooltip
              verb="hat entwickelt"
              infinitive="entwickeln"
              turkish="geliştirmek"
            >
              hat entwickelt
            </VerbTooltip>{" "}
            sie über Jahre und ein beeindruckendes Werk{" "}
            <VerbTooltip
              verb="hat geschaffen"
              infinitive="schaffen"
              turkish="yaratmak"
            >
              hat geschaffen
            </VerbTooltip>{" "}
            sie dabei.
          </p>

          <p>
            Ihr Verlagshaus{" "}
            <VerbTooltip
              verb="hat gebaut"
              infinitive="bauen"
              turkish="inşa etmek"
            >
              hat gebaut
            </VerbTooltip>{" "}
            sie mit viel Liebe zum Detail auf. Vorurteile{" "}
            <VerbTooltip
              verb="hat zerstört"
              infinitive="zerstören"
              turkish="yıkmak"
            >
              hat zerstört
            </VerbTooltip>{" "}
            sie durch ihr Beispiel und zerbrochene Träume anderer{" "}
            <VerbTooltip
              verb="hat repariert"
              infinitive="reparieren"
              turkish="tamir etmek"
            >
              hat repariert
            </VerbTooltip>{" "}
            sie mit ihren Worten. Perfekt{" "}
            <VerbTooltip
              verb="hat organisiert"
              infinitive="organisieren"
              turkish="organize etmek"
            >
              hat organisiert
            </VerbTooltip>{" "}
            sie ihr neues Leben und sorgfältig{" "}
            <VerbTooltip
              verb="hat geplant"
              infinitive="planen"
              turkish="planlamak"
            >
              hat geplant
            </VerbTooltip>{" "}
            sie jeden Schritt.
          </p>

          <p>
            Jeden Tag{" "}
            <VerbTooltip
              verb="hat vorbereitet"
              infinitive="vorbereiten"
              turkish="hazırlamak"
            >
              hat vorbereitet
            </VerbTooltip>{" "}
            sie sich auf neue Herausforderungen und systematisch{" "}
            <VerbTooltip
              verb="hat durchgeführt"
              infinitive="durchführen"
              turkish="yürütmek"
            >
              hat durchgeführt
            </VerbTooltip>{" "}
            sie ihre Pläne. Alle ihre Ziele{" "}
            <VerbTooltip
              verb="hat erreicht"
              infinitive="erreichen"
              turkish="ulaşmak"
            >
              hat erreicht
            </VerbTooltip>{" "}
            sie durch harte Arbeit und das Unmögliche{" "}
            <VerbTooltip
              verb="hat geschafft"
              infinitive="schaffen"
              turkish="başarmak"
            >
              hat geschafft
            </VerbTooltip>{" "}
            sie durch Beharrlichkeit. Der Welt{" "}
            <VerbTooltip
              verb="hat bewiesen"
              infinitive="beweisen"
              turkish="kanıtlamak"
            >
              hat bewiesen
            </VerbTooltip>{" "}
            sie, dass Neuanfänge möglich sind.
          </p>

          <p>
            Ihren Mut{" "}
            <VerbTooltip
              verb="hat gezeigt"
              infinitive="zeigen"
              turkish="göstermek"
            >
              hat gezeigt
            </VerbTooltip>{" "}
            sie jeden Tag aufs Neue und ihre Überzeugungen{" "}
            <VerbTooltip
              verb="hat demonstriert"
              infinitive="demonstrieren"
              turkish="göstermek"
            >
              hat demonstriert
            </VerbTooltip>{" "}
            sie durch Taten. Ihre Philosophie{" "}
            <VerbTooltip
              verb="hat präsentiert"
              infinitive="präsentieren"
              turkish="sunmak"
            >
              hat präsentiert
            </VerbTooltip>{" "}
            sie in zahlreichen Vorträgen und sich selbst{" "}
            <VerbTooltip
              verb="hat vorgestellt"
              infinitive="vorstellen"
              turkish="tanıtmak"
            >
              hat vorgestellt
            </VerbTooltip>{" "}
            sie als Beispiel für Wandel. Neue Denkweisen{" "}
            <VerbTooltip
              verb="hat eingeführt"
              infinitive="einführen"
              turkish="tanıtmak"
            >
              hat eingeführt
            </VerbTooltip>{" "}
            sie in ihrem Umfeld.
          </p>

          <p>
            Ihren Ruf{" "}
            <VerbTooltip
              verb="hat etabliert"
              infinitive="etablieren"
              turkish="kurmak"
            >
              hat etabliert
            </VerbTooltip>{" "}
            sie durch qualitative Arbeit und ein literarisches Café{" "}
            <VerbTooltip
              verb="hat gegründet"
              infinitive="gründen"
              turkish="kurmak"
            >
              hat gegründet
            </VerbTooltip>{" "}
            sie in ihrem Kiez. Ihr Netzwerk{" "}
            <VerbTooltip
              verb="hat aufgebaut"
              infinitive="aufbauen"
              turkish="kurmak"
            >
              hat aufgebaut
            </VerbTooltip>{" "}
            sie strategisch und ihren Horizont{" "}
            <VerbTooltip
              verb="hat erweitert"
              infinitive="erweitern"
              turkish="genişletmek"
            >
              hat erweitert
            </VerbTooltip>{" "}
            sie kontinuierlich. Ihr Selbstvertrauen{" "}
            <VerbTooltip
              verb="hat vergrößert"
              infinitive="vergrößern"
              turkish="büyütmek"
            >
              hat vergrößert
            </VerbTooltip>{" "}
            sie mit jedem Erfolg.
          </p>

          <p>
            Ihre Ängste{" "}
            <VerbTooltip
              verb="hat reduziert"
              infinitive="reduzieren"
              turkish="azaltmak"
            >
              hat reduziert
            </VerbTooltip>{" "}
            sie durch Mut und ihre Zweifel{" "}
            <VerbTooltip
              verb="hat verkleinert"
              infinitive="verkleinern"
              turkish="küçültmek"
            >
              hat verkleinert
            </VerbTooltip>{" "}
            sie durch Taten. Ihre Produktivität{" "}
            <VerbTooltip
              verb="hat erhöht"
              infinitive="erhöhen"
              turkish="artırmak"
            >
              hat erhöht
            </VerbTooltip>{" "}
            sie durch Disziplin und ihre Erwartungen{" "}
            <VerbTooltip
              verb="hat gesenkt"
              infinitive="senken"
              turkish="düşürmek"
            >
              hat gesenkt
            </VerbTooltip>{" "}
            sie nie. Ihre Leistungen{" "}
            <VerbTooltip
              verb="hat gesteigert"
              infinitive="steigern"
              turkish="artırmak"
            >
              hat gesteigert
            </VerbTooltip>{" "}
            sie stetig und ihr Leben{" "}
            <VerbTooltip
              verb="hat verbessert"
              infinitive="verbessern"
              turkish="iyileştirmek"
            >
              hat verbessert
            </VerbTooltip>{" "}
            sie grundlegend.
          </p>

          <p>
            Nie{" "}
            <VerbTooltip
              verb="hat verschlechtert"
              infinitive="verschlechtern"
              turkish="kötüleştirmek"
            >
              hat verschlechtert
            </VerbTooltip>{" "}
            sie ihre Situation durch Unüberlegtheit. Ihre Gewohnheiten{" "}
            <VerbTooltip
              verb="hat erneuert"
              infinitive="erneuern"
              turkish="yenilemek"
            >
              hat erneuert
            </VerbTooltip>{" "}
            sie komplett und sich selbst{" "}
            <VerbTooltip
              verb="hat modernisiert"
              infinitive="modernisieren"
              turkish="modernleştirmek"
            >
              hat modernisiert
            </VerbTooltip>{" "}
            sie in jeder Hinsicht. Marias Geschichte zeigt uns, dass es nie zu
            spät ist, das Leben zu leben, das wir uns wünschen.
          </p>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">
            Kullanım Kılavuzu:
          </h3>
          <p className="text-blue-700">
            Mavi renkli kelimeler üzerine fare ile geldiğinizde, fiilin yalın
            halini ve Türkçe anlamını görebilirsiniz. Bu hikayede Perfect
            (Perfekt) ve Plusquamperfekt (Geçmiş Zaman) yapıları sistematik
            olarak kullanılmıştır.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GermanStoryC1;
