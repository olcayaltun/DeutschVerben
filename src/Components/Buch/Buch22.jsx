import React, { useState } from "react";

const StoryApp = () => {
  const [hoveredWord, setHoveredWord] = useState(null);

  const verbTranslations = {
    nachfragen: "nachfragen - sormak",
    nachhaken: "nachhaken - üstelemek",
    nachkommen: "nachkommen - yerine getirmek",
    nachreichen: "nachreichen - sonradan sunmak",
    nachvollziehen: "nachvollziehen - anlamak",
    nachweisen: "nachweisen - kanıtlamak",
    nerven: "nerven - sinir etmek",
    nicken: "nicken - başını sallamak",
    niederlassen: "niederlassen - yerleşmek",
    optimieren: "optimieren - optimize etmek",
    polieren: "polieren - parlatmak",
    prägen: "prägen - şekillendirmek",
    proben: "proben - prova yapmak",
    programmieren: "programmieren - programlamak",
    raten: "raten - tavsiye etmek",
    reflektieren: "reflektieren - yansıtmak",
    reformieren: "reformieren - yeniden düzenlemek",
    reiben: "reiben - ovmak",
    ringen: "ringen - güreşmek",
    scheitern: "scheitern - başarısız olmak",
    schildern: "schildern - betimlemek",
    schlucken: "schlucken - yutmak",
    schmelzen: "schmelzen - erimek",
    schütteln: "schütteln - sallamak",
    schwinden: "schwinden - azalmak",
    sicherstellen: "sicherstellen - garantiye almak",
    signalisieren: "signalisieren - işaret vermek",
    spalten: "spalten - bölmek",
    spenden: "spenden - bağışlamak",
    stattgeben: "stattgeben - kabul etmek",
    strahlen: "strahlen - ışık saçmak",
    streichen: "streichen - çizmek",
    tapezieren: "tapezieren - duvar kağıdı yapıştırmak",
    teilhaben: "teilhaben - katılmak",
    tolerieren: "tolerieren - hoş görmek",
    trauen: "trauen - güvenmek",
    tropfen: "tropfen - damlamak",
    trösten: "trösten - teselli etmek",
    überbewerten: "überbewerten - abartmak",
    überdenken: "überdenken - yeniden düşünmek",
    übereinstimmen: "übereinstimmen - aynı fikirde olmak",
    überfordern: "überfordern - zorlamak",
    übergehen: "übergehen - atlatmak",
    überliefern: "überliefern - aktarmak",
    übernehmen: "übernehmen - devralmak",
    überschätzen: "überschätzen - gözünde büyütmek",
    überschwemmen: "überschwemmen - su basmak",
    überstehen: "überstehen - atlatmak",
    übertreiben: "übertreiben - abartmak",
    überwachen: "überwachen - gözetlemek",
    umfassen: "umfassen - kapsamak",
    umgeben: "umgeben - çevrelemek",
    umwandeln: "umwandeln - dönüştürmek",
    unterbewerten: "unterbewerten - hafife almak",
    unterbringen: "unterbringen - yerleştirmek",
    unterfordern: "unterfordern - altında kalmak",
    unterschätzen: "unterschätzen - hafife almak",
    untertreiben: "untertreiben - küçümsemek",
    veranschaulichen: "veranschaulichen - örneklendirmek",
    veranstalten: "veranstalten - düzenlemek",
    verbauen: "verbauen - engel olmak",
    verbeugen: "verbeugen - eğilmek",
    verbreiten: "verbreiten - yaymak",
    verdampfen: "verdampfen - buharlaşmak",
    verfassen: "verfassen - yazmak",
    verfilmen: "verfilmen - filme uyarlamak",
    verheimlichen: "verheimlichen - gizlemek",
    verkünden: "verkünden - ilan etmek",
    verlegen: "verlegen - ertelemek",
    vermitteln: "vermitteln - aracılık etmek",
    vernachlässigen: "vernachlässigen - ihmal etmek",
    vernehmen: "vernehmen - ifade almak",
    versagen: "versagen - başarısız olmak",
    verschieben: "verschieben - ertelemek",
    verschlagen: "verschlagen - şaşırtmak",
    verschwenden: "verschwenden - israf etmek",
    versorgen: "versorgen - bakmak",
    verstärken: "verstärken - güçlenmek",
    verstauen: "verstauen - yerleştirmek",
    verstoßen: "verstoßen - ihlal etmek",
    verteidigen: "verteidigen - savunmak",
    vertreten: "vertreten - temsil etmek",
    verweigern: "verweigern - reddetmek",
    verziehen: "verziehen - eğilmek",
    vorlegen: "vorlegen - sunmak",
    vorsprechen: "vorsprechen - dinletmek",
    vorstellen: "vorstellen - tanıştırmak",
    vorwerfen: "vorwerfen - suçlamak",
    warten: "warten - beklemek",
    wegdrehen: "wegdrehen - çevirmek",
    wegschmeißen: "wegschmeißen - atmak",
    weiterbilden: "weiterbilden - kendini geliştirmek",
    widerlegen: "widerlegen - çürütmek",
    widerspiegeln: "widerspiegeln - yansıtmak",
    wiedergeben: "wiedergeben - geri vermek",
    wiederverwenden: "wiederverwenden - yeniden kullanmak",
    wischen: "wischen - silmek",
    zerdrücken: "zerdrücken - ezmek",
    zerfallen: "zerfallen - parçalanmak",
    zerschlagen: "zerschlagen - parçalamak",
    zitieren: "zitieren - alıntı yapmak",
    zittern: "zittern - titremek",
    zucken: "zucken - seğirmek",
    zugutekommen: "zugutekommen - fayda sağlamak",
    zulegen: "zulegen - hızlanmak",
    zunehmen: "zunehmen - artmak",
    zurechtfinden: "zurechtfinden - yolunu bulmak",
    zurechtkommen: "zurechtkommen - başa çıkmak",
    zurückgehen: "zurückgehen - gerilemek",
    zusammensetzen: "zusammensetzen - oluşmak",
    zustande_bringen: "zustande bringen - başarmak",
    zutrauen: "zutrauen - güvenmek",
    zuwenden: "zuwenden - yönelmek",
  };

  const HighlightedWord = ({ word, isVerb = false }) => {
    const handleMouseEnter = () => {
      if (isVerb) {
        setHoveredWord(word);
      }
    };

    const handleMouseLeave = () => {
      setHoveredWord(null);
    };

    return (
      <span
        className={`relative ${
          isVerb
            ? "font-bold text-blue-800 cursor-pointer hover:bg-blue-100 px-1 rounded"
            : ""
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {word}
        {hoveredWord === word && (
          <div className="absolute z-10 bg-gray-800 text-white text-sm px-2 py-1 rounded shadow-lg -top-8 left-0 whitespace-nowrap">
            {verbTranslations[word]}
          </div>
        )}
      </span>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Die Geschichte von Dr. Maria Weber
      </h1>

      <div className="text-lg leading-relaxed text-gray-700 space-y-4">
        <p>
          Dr. Maria Weber war eine angesehene <strong>Psychologin</strong>{" "}
          (Psikolog) gewesen, die in einer <strong>multikulturellen</strong>{" "}
          (Çok kültürlü) Nachbarschaft praktiziert hatte. Sie{" "}
          <HighlightedWord word="nachfragen" isVerb={true} />{" "}
          <strong>hatte nachgefragt</strong> und bei ihren Patienten immer{" "}
          <HighlightedWord word="nachhaken" isVerb={true} />{" "}
          <strong>nachgehakt</strong>, um die Wahrheit zu erfahren. Ihre{" "}
          <strong>nachhaltige</strong> (Sürdürülebilir) Therapiemethode{" "}
          <HighlightedWord word="nachkommen" isVerb={true} />{" "}
          <strong>war nachgekommen</strong> und hatte vielen Menschen geholfen.
        </p>

        <p>
          In der <strong>Nachkriegszeit</strong> (Savaş sonrası dönem){" "}
          <HighlightedWord word="nachreichen" isVerb={true} />{" "}
          <strong>hatte sie nachgereicht</strong> und wichtige Dokumente für
          ihre Ausbildung vorgelegt. Ihre <strong>Nächstenliebe</strong> (Komşu
          sevgisi) <HighlightedWord word="nachvollziehen" isVerb={true} />{" "}
          <strong>war nachvollziehbar gewesen</strong> und hatte sich in ihrer
          täglichen Arbeit widergespiegelt. Den <strong>Nachweis</strong>{" "}
          (Kanıt) für ihre Kompetenz{" "}
          <HighlightedWord word="nachweisen" isVerb={true} />{" "}
          <strong>hatte sie nachgewiesen</strong>, als sie mit einem schwierigen
          Fall konfrontiert wurde.
        </p>

        <p>
          Ein Patient aus der <strong>Neuzeit</strong> (Yeni Çağ){" "}
          <HighlightedWord word="nerven" isVerb={true} />{" "}
          <strong>hatte sie genervt</strong>, weil er ständig seine{" "}
          <strong>Nationalität</strong> (Milliyet) betonte und über den{" "}
          <strong>Nationalsozialismus</strong> (Nasyonal sosyalizm) sprach.
          Trotz ihres <strong>Neids</strong> (Kıskançlık) auf andere
          erfolgreiche Kollegen <HighlightedWord word="nicken" isVerb={true} />{" "}
          <strong>hatte sie genickt</strong> und professionell reagiert. Ihre{" "}
          <strong>neidischen</strong> (Kıskanç) Gefühle{" "}
          <HighlightedWord word="niederlassen" isVerb={true} />{" "}
          <strong>hatte sie niedergelassen</strong> und sich voll auf ihre
          Arbeit konzentriert.
        </p>

        <p>
          In der <strong>Niederschrift</strong> (Tutanak) ihrer
          Therapiesitzungen <HighlightedWord word="optimieren" isVerb={true} />{" "}
          <strong>hatte sie optimiert</strong> und jeden Fall detailliert
          dokumentiert. Ihre <strong>Niere</strong> (Böbrek) schmerzte oft nach
          langen Arbeitstagen, aber sie blieb immer <strong>nüchtern</strong>{" "}
          (Ayık) und fokussiert. Die <strong>Nutzerfreundlichkeit</strong>{" "}
          (Kullanıcı dostu) ihrer Therapiemethoden{" "}
          <HighlightedWord word="polieren" isVerb={true} />{" "}
          <strong>hatte sie poliert</strong> und verfeinert.
        </p>

        <p>
          An der <strong>Oberfläche</strong> (Yüzey) schien alles{" "}
          <strong>offensichtlich</strong> (Açık) zu sein, doch das{" "}
          <strong>Oberhaupt</strong> (Lider) der Klinik{" "}
          <HighlightedWord word="prägen" isVerb={true} />{" "}
          <strong>hatte geprägt</strong> und eine neue Richtung eingeschlagen.
          Die <strong>Öffentlichkeit</strong> (Kamuoyu) diskutierte über das{" "}
          <strong>Preis-Leistungs-Verhältnis</strong> (Fiyat-performans oranı)
          der Therapien. Maria trug einen schönen <strong>Ohrring</strong>{" "}
          (Küpe) und malte in ihrer Freizeit mit <strong>Ölfarbe</strong> (Yağlı
          boya).
        </p>

        <p>
          Eine <strong>Orchidee</strong> (Orkide) in ihrem Büro{" "}
          <HighlightedWord word="proben" isVerb={true} />{" "}
          <strong>hatte geprobt</strong> und ihre Aufmerksamkeit auf sich
          gezogen. Die <strong>ortsansässige</strong> (Yerleşik) Bevölkerung
          schätzte ihre Arbeit sehr. Ihre Kenntnisse in{" "}
          <strong>Pädagogik</strong> (Pedagoji){" "}
          <HighlightedWord word="programmieren" isVerb={true} />{" "}
          <strong>hatte sie programmiert</strong> und in moderne Therapieansätze
          integriert.
        </p>

        <p>
          Ein <strong>Pantomime</strong> (Pandomim) aus der Nachbarschaft{" "}
          <HighlightedWord word="raten" isVerb={true} />{" "}
          <strong>hatte geraten</strong> und ihr eine neue Perspektive eröffnet.
          Sie warf eine leere Flasche in den <strong>Papierkorb</strong> (Çöp
          sepeti) und dachte über die Worte des <strong>Papstes</strong> (Papa)
          nach. Ein <strong>Passant</strong> (Yaya){" "}
          <HighlightedWord word="reflektieren" isVerb={true} />{" "}
          <strong>hatte reflektiert</strong> und seine Gedanken geteilt.
        </p>

        <p>
          Das <strong>Pedal</strong> (Pedal) ihres Fahrrads{" "}
          <HighlightedWord word="reformieren" isVerb={true} />{" "}
          <strong>hatte reformiert</strong> und eine neue Funktionalität
          erhalten. Ihre <strong>personenbezogenen</strong> (Kişiye özel) Daten{" "}
          <HighlightedWord word="reiben" isVerb={true} />{" "}
          <strong>hatte sie gerieben</strong> und gelöscht. Aus einer neuen{" "}
          <strong>Perspektive</strong> (Perspektif) betrachtete sie ihre Arbeit
          mit dem <strong>Pflegepersonal</strong> (Bakım personeli).
        </p>

        <p>
          Ein <strong>Physiotherapeut</strong> (Fizyoterapist){" "}
          <HighlightedWord word="ringen" isVerb={true} />{" "}
          <strong>hatte gerungen</strong> und um Verständnis für seine Patienten
          gekämpft. Ein <strong>Pilz</strong> (Mantar) in ihrem Garten{" "}
          <HighlightedWord word="scheitern" isVerb={true} />{" "}
          <strong>war gescheitert</strong> und nicht gewachsen. Die{" "}
          <strong>Pilzinfektion</strong> (Mantar enfeksiyonu) eines Patienten{" "}
          <HighlightedWord word="schildern" isVerb={true} />{" "}
          <strong>hatte sie geschildert</strong> und detailliert beschrieben.
        </p>

        <p>
          An der <strong>Pinnwand</strong> (Pano) hingen wichtige Notizen, die
          sie mit einem <strong>Pinsel</strong> (Fırça){" "}
          <HighlightedWord word="schlucken" isVerb={true} />{" "}
          <strong>geschluckt</strong> und innerlich verarbeitet hatte. Ihr{" "}
          <strong>Plädoyer</strong> (Savunma konuşması) für mehr Empathie{" "}
          <HighlightedWord word="schmelzen" isVerb={true} />{" "}
          <strong>war geschmolzen</strong> und hatte die Herzen der Zuhörer
          erreicht.
        </p>

        <p>
          Die <strong>Polizeidirektion</strong> (Polis müdürlüğü){" "}
          <HighlightedWord word="schütteln" isVerb={true} />{" "}
          <strong>hatte geschüttelt</strong> und ihre Unterstützung für das
          Therapieprogramm ausgedrückt. Ein <strong>Porträt</strong> (Portre)
          aus <strong>Porzellan</strong> (Porselen){" "}
          <HighlightedWord word="schwinden" isVerb={true} />{" "}
          <strong>war geschwunden</strong> und hatte seinen Glanz verloren. Auf
          ihrem wichtigen <strong>Posten</strong> (Görev){" "}
          <HighlightedWord word="sicherstellen" isVerb={true} />{" "}
          <strong>hatte sie sichergestellt</strong>, dass alle Patienten die
          beste Betreuung erhielten.
        </p>

        <p>
          Ein <strong>Proband</strong> (Denek) aus einer Studie{" "}
          <HighlightedWord word="signalisieren" isVerb={true} />{" "}
          <strong>hatte signalisiert</strong> und seine Bereitschaft zur
          Teilnahme gezeigt. Die <strong>Prognose</strong> (Tahmin) für seine
          Genesung war vielversprechend. Maria's <strong>Prinzip</strong> (İlke){" "}
          <HighlightedWord word="spalten" isVerb={true} />{" "}
          <strong>hatte gespalten</strong> und unterschiedliche Meinungen
          hervorgerufen.
        </p>

        <p>
          Der <strong>Puls</strong> (Nabız) eines Patienten{" "}
          <HighlightedWord word="spenden" isVerb={true} />{" "}
          <strong>hatte gespendet</strong> und wichtige Informationen über
          seinen Gesundheitszustand geliefert. Das{" "}
          <strong>Puppentheater</strong> (Kukla tiyatrosu){" "}
          <HighlightedWord word="stattgeben" isVerb={true} />{" "}
          <strong>hatte stattgegeben</strong> und eine therapeutische Wirkung
          gezeigt. Mit einem <strong>Putzlappen</strong> (Bez){" "}
          <HighlightedWord word="strahlen" isVerb={true} />{" "}
          <strong>hatte sie gestrahlt</strong> und ihr Büro sauber gehalten.
        </p>

        <p>
          Die <strong>Quelle</strong> (Kaynak) ihrer Inspiration{" "}
          <HighlightedWord word="streichen" isVerb={true} />{" "}
          <strong>hatte gestrichen</strong> und neue Ideen gefördert. Ein{" "}
          <strong>Radiergummi</strong> (Silgi){" "}
          <HighlightedWord word="tapezieren" isVerb={true} />{" "}
          <strong>hatte tapeziert</strong> und Fehler korrigiert. Die{" "}
          <strong>Radioaktivität</strong> (Radyoaktivite) in einem medizinischen
          Gerät <HighlightedWord word="teilhaben" isVerb={true} />{" "}
          <strong>hatte teilgehabt</strong> und bei der Diagnostik geholfen.
        </p>

        <p>
          Im <strong>Rahmen</strong> (Çerçeve) ihrer Arbeit{" "}
          <HighlightedWord word="tolerieren" isVerb={true} />{" "}
          <strong>hatte sie toleriert</strong> und verschiedene Ansichten
          respektiert. Ein Patient aus einem <strong>Randgebiet</strong> (Kenar
          bölge) <HighlightedWord word="trauen" isVerb={true} />{" "}
          <strong>hatte getraut</strong> und ihr sein Vertrauen geschenkt.
          Diskussionen über <strong>Rasse</strong> (Irk) und{" "}
          <strong>Rassismus</strong> (Irkçılık){" "}
          <HighlightedWord word="tropfen" isVerb={true} />{" "}
          <strong>waren getropft</strong> und hatten emotionale Reaktionen
          ausgelöst.
        </p>

        <p>
          Die <strong>raue</strong> (Pürüzlü) Oberfläche eines Gegenstands{" "}
          <HighlightedWord word="trösten" isVerb={true} />{" "}
          <strong>hatte getröstet</strong> und taktile Therapie ermöglicht. Ein
          Fall mit <strong>Rauschgift</strong> (Uyuşturucu){" "}
          <HighlightedWord word="überbewerten" isVerb={true} />{" "}
          <strong>hatte überbewertet</strong> und zu viel Aufmerksamkeit
          erhalten. Die <strong>Rechtsbehelfsbelehrung</strong> (Hukuki yol
          bilgilendirmesi) <HighlightedWord word="überdenken" isVerb={true} />{" "}
          <strong>hatte überdacht</strong> und juristische Klarheit geschaffen.
        </p>

        <p>
          Eine <strong>Reform</strong> (Reform) des Gesundheitssystems{" "}
          <HighlightedWord word="übereinstimmen" isVerb={true} />{" "}
          <strong>hatte übereingestimmt</strong> und allgemeine Zustimmung
          gefunden. Die <strong>Reformation</strong> (Reformasyon){" "}
          <HighlightedWord word="überfordern" isVerb={true} />{" "}
          <strong>hatte überfordert</strong> und zu viele Veränderungen auf
          einmal gebracht. Der <strong>Regenwald</strong> (Yağmur ormanı){" "}
          <HighlightedWord word="übergehen" isVerb={true} />{" "}
          <strong>war übergegangen</strong> und hatte eine neue
          Entwicklungsphase erreicht.
        </p>

        <p>
          Ihre <strong>religiösen</strong> (Dini) Überzeugungen{" "}
          <HighlightedWord word="überliefern" isVerb={true} />{" "}
          <strong>hatte überliefert</strong> und an nachfolgende Generationen
          weitergegeben. Die <strong>Rentenversicherung</strong> (Emeklilik
          sigortası) <HighlightedWord word="übernehmen" isVerb={true} />{" "}
          <strong>hatte übernommen</strong> und finanzielle Sicherheit geboten.
          Wichtige <strong>Ressourcen</strong> (Kaynak){" "}
          <HighlightedWord word="überschätzen" isVerb={true} />{" "}
          <strong>hatte überschätzt</strong> und ihre Verfügbarkeit falsch
          eingeschätzt.
        </p>

        <p>
          Ein <strong>Rohstoff</strong> (Ham madde){" "}
          <HighlightedWord word="überschwemmen" isVerb={true} />{" "}
          <strong>hatte überschwemmt</strong> und den Markt übersättigt. Die{" "}
          <strong>römische</strong> (Roma'ya ait) Geschichte{" "}
          <HighlightedWord word="überstehen" isVerb={true} />{" "}
          <strong>hatte überstanden</strong> und wichtige Lektionen
          hinterlassen. Eine <strong>Röntgenaufnahme</strong> (Röntgen
          görüntüsü) <HighlightedWord word="übertreiben" isVerb={true} />{" "}
          <strong>hatte übertrieben</strong> und die Symptome verstärkt
          dargestellt.
        </p>

        <p>
          Der <strong>Rückgang</strong> (Düşüş) der Patientenzahlen{" "}
          <HighlightedWord word="überwachen" isVerb={true} />{" "}
          <strong>hatte überwacht</strong> und statistische Daten geliefert. Ihr{" "}
          <strong>Rückstand</strong> (Geri kalma) in der Forschung{" "}
          <HighlightedWord word="umfassen" isVerb={true} />{" "}
          <strong>hatte umfasst</strong> und verschiedene Bereiche betroffen.
          Die <strong>Rückzahlungsverpflichtung</strong> (Geri ödeme
          yükümlülüğü) <HighlightedWord word="umgeben" isVerb={true} />{" "}
          <strong>hatte umgeben</strong> und finanzielle Belastungen geschaffen.
        </p>

        <p>
          Ihr guter <strong>Ruf</strong> (Ün){" "}
          <HighlightedWord word="umwandeln" isVerb={true} />{" "}
          <strong>hatte umgewandelt</strong> und neue Möglichkeiten eröffnet.
          Den <strong>Sachverhalt</strong> (Olgu){" "}
          <HighlightedWord word="unterbewerten" isVerb={true} />{" "}
          <strong>hatte unterbewertetet</strong> und seine Komplexität
          unterschätzt. Mit einer <strong>Säge</strong> (Testere){" "}
          <HighlightedWord word="unterbringen" isVerb={true} />{" "}
          <strong>hatte untergebracht</strong> und Materialien für die Therapie
          vorbereitet.
        </p>

        <p>
          Der <strong>Sauerstoff</strong> (Oksijen) im Raum{" "}
          <HighlightedWord word="unterfordern" isVerb={true} />{" "}
          <strong>hatte unterfordert</strong> und für frische Luft gesorgt. Ein{" "}
          <strong>Schadensersatzanspruch</strong> (Tazminat talebi){" "}
          <HighlightedWord word="unterschätzen" isVerb={true} />{" "}
          <strong>hatte unterschätzt</strong> und rechtliche Konsequenzen
          gehabt. <strong>Schadstoffe</strong> (Zararlı madde){" "}
          <HighlightedWord word="untertreiben" isVerb={true} />{" "}
          <strong>hatte untertrieben</strong> und ihre Wirkung minimiert.
        </p>

        <p>
          Ein <strong>Schäferhund</strong> (Çoban köpeği){" "}
          <HighlightedWord word="veranschaulichen" isVerb={true} />{" "}
          <strong>hatte veranschaulicht</strong> und als Therapiehund gedient.
          Die <strong>Schicht</strong> (Vardiya) der Nachtpfleger{" "}
          <HighlightedWord word="veranstalten" isVerb={true} />{" "}
          <strong>hatte veranstaltet</strong> und besondere Betreuung
          organisiert. Auf der <strong>Schiene</strong> (Ray){" "}
          <HighlightedWord word="verbauen" isVerb={true} />{" "}
          <strong>hatte verbaut</strong> und den Weg für neue Projekte geebnet.
        </p>

        <p>
          Eine detaillierte <strong>Schilderung</strong> (Tasvir){" "}
          <HighlightedWord word="verbeugen" isVerb={true} />{" "}
          <strong>hatte verbeugt</strong> und Respekt vor der Komplexität des
          Falls gezeigt. Das <strong>Schlagzeug</strong> (Bateri){" "}
          <HighlightedWord word="verbreiten" isVerb={true} />{" "}
          <strong>hatte verbreitet</strong> und therapeutische Rhythmen erzeugt.
          Bitter schmeckende Medizin{" "}
          <HighlightedWord word="verdampfen" isVerb={true} />{" "}
          <strong>war verdampft</strong> und ihre Wirkung entfaltet.
        </p>

        <p>
          Das Metall <HighlightedWord word="verfassen" isVerb={true} />{" "}
          <strong>hatte verfasst</strong> und wichtige Berichte geschrieben. Ein{" "}
          <strong>schmerzhafte</strong> (Acı verici) Erfahrung{" "}
          <HighlightedWord word="verfilmen" isVerb={true} />{" "}
          <strong>hatte verfilmt</strong> und dokumentiert. Der{" "}
          <strong>Schornsteinfeger</strong> (Baca temizleyicisi){" "}
          <HighlightedWord word="verheimlichen" isVerb={true} />{" "}
          <strong>hatte verheimlicht</strong> und seine wahren Absichten
          verborgen.
        </p>

        <p>
          Eine <strong>Schraube</strong> (Vida){" "}
          <HighlightedWord word="verkünden" isVerb={true} />{" "}
          <strong>hatte verkündet</strong> und strukturelle Veränderungen
          angekündigt. Mit einem <strong>Schraubendreher</strong> (Tornavida){" "}
          <HighlightedWord word="verlegen" isVerb={true} />{" "}
          <strong>hatte verlegt</strong> und Termine verschoben. In der{" "}
          <strong>Schublade</strong> (Çekmece){" "}
          <HighlightedWord word="vermitteln" isVerb={true} />{" "}
          <strong>hatte vermittelt</strong> und wichtige Dokumente aufbewahrt.
        </p>

        <p>
          Der <strong>Schulstoff</strong> (Ders müfredatı){" "}
          <HighlightedWord word="vernachlässigen" isVerb={true} />{" "}
          <strong>hatte vernachlässigt</strong> und wichtige Aspekte der
          Entwicklung übersehen. Die <strong>Schwerkraft</strong> (Yer çekimi){" "}
          <HighlightedWord word="vernehmen" isVerb={true} />{" "}
          <strong>hatte vernommen</strong> und physikalische Gesetze
          demonstriert. Der <strong>Schwindel</strong> (Baş dönmesi)eines
          Patienten <HighlightedWord word="versagen" isVerb={true} />{" "}
          <strong>hatte versagt</strong> und seine Balance beeinträchtigt. Maria{" "}
          <HighlightedWord word="verschieben" isVerb={true} />{" "}
          <strong>hatte verschoben</strong> und einen Termin neu angesetzt, um
          sich besser auf den Fall vorzubereiten. Ein <strong>Schwur</strong>{" "}
          (Yemin) eines Kollegen{" "}
          <HighlightedWord word="verschlagen" isVerb={true} />{" "}
          <strong>hatte verschlagen</strong> und sie überrascht.{" "}
        </p>

        <p>
          Die <strong>Sicherheitsmaßnahmen</strong> (Güvenlik önlemleri) in der
          Klinik <HighlightedWord word="verschwenden" isVerb={true} />{" "}
          <strong>hatten verschwendet</strong> und unnötige Ressourcen
          verbraucht. Maria <HighlightedWord word="versorgen" isVerb={true} />{" "}
          <strong>hatte versorgt</strong> und ihre Patienten mit den besten
          Materialien ausgestattet. Ihre <strong>Sichtweise</strong> (Bakış
          açısı) <HighlightedWord word="verstärken" isVerb={true} />{" "}
          <strong>hatte verstärkt</strong> und ihre Überzeugungen gefestigt.
        </p>

        <p>
          Ein <strong>Sitzplatz</strong> (Oturma yeri) im Wartezimmer{" "}
          <HighlightedWord word="verstauen" isVerb={true} />{" "}
          <strong>hatte verstaut</strong> und Patientenakten ordentlich
          organisiert. Die <strong>Sozialversicherung</strong> (Sosyal sigorta){" "}
          <HighlightedWord word="verstoßen" isVerb={true} />{" "}
          <strong>hatte verstoßen</strong> und gegen bestimmte Vorschriften
          gehandelt. Maria <HighlightedWord word="verteidigen" isVerb={true} />{" "}
          <strong>hatte verteidigt</strong> und ihre Methoden gegenüber
          Kritikern gerechtfertigt.
        </p>

        <p>
          Als <strong>Vertreterin</strong> (Temsilci) ihrer Klinik{" "}
          <HighlightedWord word="vertreten" isVerb={true} />{" "}
          <strong>hatte vertreten</strong> und an Konferenzen teilgenommen. Eine
          Bitte um zusätzliche Mittel{" "}
          <HighlightedWord word="verweigern" isVerb={true} />{" "}
          <strong>hatte verweigert</strong> und finanzielle Einschränkungen
          verursacht. Ihre <strong>Verzierung</strong> (Süsleme) des Büros{" "}
          <HighlightedWord word="verziehen" isVerb={true} />{" "}
          <strong>hatte verzogen</strong> und eine gemütliche Atmosphäre
          geschaffen.
        </p>

        <p>
          Wichtige Dokumente <HighlightedWord word="vorlegen" isVerb={true} />{" "}
          <strong>hatte vorgelegt</strong> und den Behörden zur Prüfung
          übergeben. Ein Patient{" "}
          <HighlightedWord word="vorsprechen" isVerb={true} />{" "}
          <strong>hatte vorgesprochen</strong> und seine Geschichte erzählt.
          Maria <HighlightedWord word="vorstellen" isVerb={true} />{" "}
          <strong>hatte vorgestellt</strong> und neue Kollegen ins Team
          eingeführt. Ein Vorwurf{" "}
          <HighlightedWord word="vorwerfen" isVerb={true} />{" "}
          <strong>war vorgeworfen</strong> und hatte zu Diskussionen geführt.
        </p>

        <p>
          Während sie auf Ergebnisse{" "}
          <HighlightedWord word="warten" isVerb={true} />{" "}
          <strong>hatte gewartet</strong>, nutzte sie die Zeit, um ihre
          Therapiepläne zu überarbeiten. Ein <strong>Wecker</strong> (Çalar
          saat) <HighlightedWord word="wegdrehen" isVerb={true} />{" "}
          <strong>hatte weggedreht</strong> und die Zeit vergessen lassen. Alte
          Unterlagen <HighlightedWord word="wegschmeißen" isVerb={true} />{" "}
          <strong>hatte weggeschmissen</strong> und Platz für Neues geschaffen.
        </p>

        <p>
          Maria <HighlightedWord word="weiterbilden" isVerb={true} />{" "}
          <strong>hatte sich weitergebildet</strong> und neue Techniken erlernt.
          Eine falsche Annahme{" "}
          <HighlightedWord word="widerlegen" isVerb={true} />{" "}
          <strong>hatte widerlegt</strong> und ihre Forschung gestärkt. Ihre
          Arbeit <HighlightedWord word="widerspiegeln" isVerb={true} />{" "}
          <strong>hatte widergespiegelt</strong> und ihre Werte zum Ausdruck
          gebracht.
        </p>

        <p>
          Wichtige Erkenntnisse{" "}
          <HighlightedWord word="wiedergeben" isVerb={true} />{" "}
          <strong>hatte wiedergegeben</strong> und in Berichten festgehalten.
          Alte Materialien{" "}
          <HighlightedWord word="wiederverwenden" isVerb={true} />{" "}
          <strong>hatte wiederverwendet</strong> und nachhaltig genutzt. Mit
          einem <strong>Wischmopp</strong> (Paspas){" "}
          <HighlightedWord word="wischen" isVerb={true} />{" "}
          <strong>hatte gewischt</strong> und den Boden gereinigt.
        </p>

        <p>
          Ein <strong>Wortlaut</strong> (İfade) in einem Bericht{" "}
          <HighlightedWord word="zerdrücken" isVerb={true} />{" "}
          <strong>hatte zerdrückt</strong> und Emotionen ausgelöst. Eine alte
          Theorie <HighlightedWord word="zerfallen" isVerb={true} />{" "}
          <strong>war zerfallen</strong> und hatte Platz für neue Ansätze
          gemacht. Ein Konzept{" "}
          <HighlightedWord word="zerschlagen" isVerb={true} />{" "}
          <strong>hatte zerschlagen</strong> und Diskussionen ausgelöst.
        </p>

        <p>
          Maria <HighlightedWord word="zitieren" isVerb={true} />{" "}
          <strong>hatte zitiert</strong> und wichtige Studien in ihren Vorträgen
          erwähnt. Bei Stress <HighlightedWord word="zittern" isVerb={true} />{" "}
          <strong>hatte gezittert</strong> und ihre Nervosität gezeigt. Ein
          Muskel <HighlightedWord word="zucken" isVerb={true} />{" "}
          <strong>hatte gezuckt</strong> und eine Reaktion signalisiert.
        </p>

        <p>
          Ihre Arbeit <HighlightedWord word="zugutekommen" isVerb={true} />{" "}
          <strong>hatte zugutekommen</strong> und vielen Patienten geholfen. Sie{" "}
          <HighlightedWord word="zulegen" isVerb={true} />{" "}
          <strong>hatte zugelegt</strong> und ihre Produktivität gesteigert. Die
          Nachfrage nach Therapien{" "}
          <HighlightedWord word="zunehmen" isVerb={true} />{" "}
          <strong>hatte zugenommen</strong> und ihre Arbeit gefördert.
        </p>

        <p>
          Maria <HighlightedWord word="zurechtfinden" isVerb={true} />{" "}
          <strong>hatte zurechtgefunden</strong> und sich in komplexen Fällen
          orientiert. Mit Herausforderungen{" "}
          <HighlightedWord word="zurechtkommen" isVerb={true} />{" "}
          <strong>hatte zurechtgekommen</strong> und Lösungen gefunden. Der{" "}
          <strong>Zustand</strong> (Durum) eines Patienten{" "}
          <HighlightedWord word="zurückgehen" isVerb={true} />{" "}
          <strong>war zurückgegangen</strong> und hatte Besorgnis erregt.
        </p>

        <p>
          Ihre Therapieansätze{" "}
          <HighlightedWord word="zusammensetzen" isVerb={true} />{" "}
          <strong>hatten zusammengesetzt</strong> und verschiedene Methoden
          kombiniert. Große Erfolge{" "}
          <HighlightedWord word="zustande_bringen" isVerb={true} />{" "}
          <strong>hatte zustande gebracht</strong> und ihre Reputation gestärkt.
          Ihren Patienten <HighlightedWord word="zutrauen" isVerb={true} />{" "}
          <strong>hatte zugetraut</strong> und ihnen Vertrauen gegeben.
        </p>

        <p>
          Schließlich <HighlightedWord word="zuwenden" isVerb={true} />{" "}
          <strong>hatte sich zugewandt</strong> und ihre volle Aufmerksamkeit
          den Bedürfnissen ihrer Patienten gewidmet. Dr. Maria Weber blieb eine{" "}
          <strong>unverzichtbare</strong> (Vazgeçilmez) Kraft in der Psychologie
          und hinterließ ein bleibendes <strong>Vermächtnis</strong> (Miras).
        </p>
      </div>
    </div>
  );
};
export default StoryApp;
