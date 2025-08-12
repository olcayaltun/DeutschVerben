import React, { useState } from "react";

const GermanStory = () => {
  const [hoveredVerb, setHoveredVerb] = useState(null);

  const verbMeanings = {
    // sehen verbs
    abgesehen: "absehen - öngörmek, tahmin etmek",
    angesehen: "ansehen - bakmak, izlemek",
    aufgesehen: "aufsehen - yukarı bakmak",
    ausgesehen: "aussehen - görünmek",
    besehen: "besehen - incelemek",
    durchgesehen: "durchsehen - göz gezdirmek, kontrol etmek",
    eingesehen: "einsehen - kabul etmek, anlamak",
    ersehen: "ersehen - anlamak, çıkarmak",
    fergesehen: "fersehen - uzaktaki bir şeyi görmek",
    hergesehen: "hersehen - buraya bakmak",
    hingesehen: "hinsehen - bakmak, dikkat etmek",
    mitgesehen: "mitsehen - birlikte izlemek",
    nachgesehen: "nachsehen - kontrol etmek, bakmak",
    übersehen: "übersehen - gözden kaçırmak, görmemek",
    umgesehen: "umsehen - etrafına bakmak",
    versehen: "versehen - donatmak",
    vorgesehen: "vorsehen - öngörmek, planlamak",
    weggesehen: "wegsehen - başka tarafa bakmak",
    wiedergesehen: "wiedersehen - tekrar görmek, tekrar buluşmak",
    zugesehen: "zusehen - izlemek, seyretmek",

    // gehen verbs
    abgegangen: "abgehen - ayrılmak, çıkmak",
    angegangen: "angehen - yaklaşmak, ilgilendirmek",
    aufgegangen: "aufgehen - açılmak, doğmak (güneş)",
    ausgegangen: "ausgehen - dışarı çıkmak, sönmek",
    begangen: "begehen - kutlamak, işlemek (suç)",
    durchgegangen: "durchgehen - geçmek, gözden geçirmek",
    eingegangen: "eingehen - içeri girmek, kabul etmek",
    entgangen: "entgehen - kaçırmak, kurtulmak",
    hinausgegangen: "hinausgehen - dışarı çıkmak",
    nachgegangen: "nachgehen - peşinden gitmek, takip etmek",
    übergegangen: "übergehen - geçmek, atlamak",
    umgegangen: "umgehen - dolaşmak, baş etmek",
    vergangen: "vergehen - geçmek (zaman)",
    vorgegangen: "vorgehen - öne çıkmak, ilerlemek",
    zugegangen: "zugehen - yaklaşmak",

    // kommen verbs
    abgekommen: "abkommen - sapmak, ayrılmak",
    angekommen: "ankommen - varmak, gelmek",
    aufgekommen: "aufkommen - ortaya çıkmak, üstlenmek",
    ausgekommen: "auskommen - geçinmek, idare etmek",
    bekommen: "bekommen - almak, elde etmek",
    durchgekommen: "durchkommen - geçmek, başarmak",
    eingekommen: "einkommen - içeri girmek, gelir elde etmek",
    entkommen: "entkommen - kaçmak, kurtulmak",
    hergekommen: "herkommen - buraya gelmek, kökeni olmak",
    hingekommen: "hinkommen - oraya gitmek, ulaşmak",
    mitgekommen: "mitkommen - birlikte gelmek",
    nachgekommen: "nachkommen - takip etmek, yerine getirmek",
    überkommen: "überkommen - kapılmak, üstesinden gelmek",
    umgekommen: "umkommen - ölmek, telef olmak",
    vorgekommen: "vorkommen - meydana gelmek, görülmek",
    weggekommen: "wegkommen - uzaklaşmak, kurtulmak",
    zurückgekommen: "zurückkommen - geri gelmek",

    // machen verbs
    abgemacht: "abmachen - anlaşmak, çıkarmak",
    angemacht: "anmachen - açmak (cihaz), baştan çıkarmak",
    aufgemacht: "aufmachen - açmak (kapı, paket)",
    ausgemacht: "ausmachen - kapatmak, oluşturmak, fark etmek",
    bemacht: "bemachen - kirletmek (nadir)",
    durchgemacht: "durchmachen - katlanmak, geçirmek (zor bir süreç)",
    eingemacht: "einmachen - konserve yapmak",
    fertiggemacht: "fertigmachen - tamamlamak, bitirmek",
    herausgemacht: "herausmachen - çıkarmak, anlamak",
    hingemacht: "hinmachen - oraya götürmek, başarmak",
    kaputtgemacht: "kaputtmachen - bozmak, kırmak",
    mitgemacht: "mitmachen - katılmak, eşlik etmek",
    nachgemacht: "nachmachen - taklit etmek, kopyalamak",
    übergemacht: "übermachen - devretmek, hediye etmek",
    untergemacht: "untermachen - aldatmak, sabote etmek",
    vermacht: "vermachen - miras bırakmak",
    vorgemacht: "vormachen - göstermek, kandırmak",
    weitergemacht: "weitermachen - devam etmek",
    zugemacht: "zumachen - kapatmak (kapı, pencere)",

    // geben verbs
    abgegeben: "abgeben - teslim etmek, bırakmak",
    angegeben: "angeben - belirtmek, övünmek",
    aufgegeben: "aufgeben - vazgeçmek, teslim etmek (posta)",
    ausgegeben: "ausgeben - harcamak, yayınlamak",
    begeben: "begeben - gitmek, kendini adamak",
    durchgegeben: "durchgeben - iletmek, aktarmak",
    eingegeben: "eingeben - girmek (veri), sunmak",
    herausgegeben: "herausgeben - yayınlamak, geri vermek",
    hergegeben: "hergeben - vermek, feda etmek",
    hingegeben: "hingeben - kendini adamak, teslim olmak",
    mitgegeben: "mitgeben - birlikte vermek, eklemek",
    nachgegeben: "nachgeben - boyun eğmek, esnemek",
    übergegeben: "übergeben - devretmek, teslim etmek",
    vergeben: "vergeben - affetmek, dağıtmak",
    vorgegeben: "vorgeben - iddia etmek, öne sürmek",
    weitergegeben: "weitergeben - aktarmak, devretmek",
    zurückgegeben: "zurückgeben - geri vermek, iade etmek",

    // nehmen verbs
    abgenommen: "abnehmen - çıkarmak, kilo vermek",
    angenommen: "annehmen - kabul etmek, varsaymak",
    aufgenommen: "aufnehmen - kaydetmek, almak (misafir)",
    ausgenommen: "ausnehmen - içini boşaltmak, kazıklamak",
    benommen: "benehmen - davranmak, terbiyeli olmak",
    durchgenommen: "durchnehmen - gözden geçirmek, ele almak",
    eingenommen: "einnehmen - almak (ilaç), kazanmak",
    entnommen: "entnehmen - çıkarmak, anlamak",
    herausgenommen: "herausnehmen - dışarı çıkarmak",
    hingenommen: "hinnehmen - kabul etmek, katlanmak",
    mitgenommen: "mitnehmen - yanında götürmek, almak",
    nachgenommen: "nachnehmen - tekrar almak, örnek almak",
    übernommen: "übernehmen - devralmak, üstlenmek",
    unternommen: "unternehmen - girişimde bulunmak",
    vernommen: "vernehmen - duymak, sorgulamak",
    vorgenommen: "vornehmen - planlamak, karar vermek",
    weggenommen: "wegnehmen - almak, elinden almak",
    zugenommen: "zunehmen - kilo almak, artmak",

    // stehen verbs
    abgestanden: "abstehen - dışarı çıkmak, uzak durmak",
    angestanden: "anstehen - kuyrukta beklemek, yakışmak",
    aufgestanden: "aufstehen - ayağa kalkmak, uyanmak",
    ausgestanden: "ausstehen - beklemek (bir şeyin), dayanmak",
    bestanden: "bestehen - var olmak, geçmek (sınav)",
    durchgestanden: "durchstehen - dayanmak, atlatmak",
    eingestanden: "einstehen - kefil olmak, savunmak",
    entstanden: "entstehen - ortaya çıkmak, oluşmak",
    hergestanden: "herstehen - buraya gelmek, hazır olmak",
    hinausgestanden: "hinausstehen - dışarı sarkmak",
    mitgestanden: "mitstehen - eşlik etmek, dayanmak",
    nachgestanden: "nachstehen - geri kalmak, aşağı olmak",
    überstanden: "überstehen - atlatmak, üstesinden gelmek",
    umgestanden: "umstehen - etrafta durmak",
    verstanden: "verstehen - anlamak, idrak etmek",
    vorgestanden: "vorstehen - başkanlık etmek, çıkıntı yapmak",
    weggestanden: "wegstehen - yoldan çekilmek",
    zugestanden: "zustehen - hak etmek, uygun olmak",
  };

  const VerbSpan = ({ verb, children }) => (
    <span
      className="bg-gray-800 text-white px-1 py-0.5 rounded cursor-pointer relative font-semibold"
      onMouseEnter={() => setHoveredVerb(verb)}
      onMouseLeave={() => setHoveredVerb(null)}
    >
      {children}
      {hoveredVerb === verb && (
        <div className="absolute bottom-full left-0 bg-black text-white px-2 py-1 rounded text-sm whitespace-nowrap z-10 mb-1">
          {verbMeanings[verb]}
        </div>
      )}
    </span>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Das Geheimnis der verschwundenen Forschung
      </h1>

      <div className="bg-white rounded-lg shadow-lg p-8 leading-relaxed text-gray-700 space-y-4">
        <p>
          Es war ein kalter Wintermorgen, als Professor Müller endlich{" "}
          <VerbSpan verb="aufgestanden">aufgestanden</VerbSpan> war. Er hatte
          die ganze Nacht <VerbSpan verb="durchgemacht">durchgemacht</VerbSpan>,
          weil er ein wichtiges Dokument
          <VerbSpan verb="durchgesehen">durchgesehen</VerbSpan> hatte. Von
          seinem Kollegen hatte er einen mysteriösen Brief
          <VerbSpan verb="bekommen">bekommen</VerbSpan>, der ihm große Sorgen
          bereitet hatte.
        </p>

        <p>
          Als er sich in seinem Büro{" "}
          <VerbSpan verb="umgesehen">umgesehen</VerbSpan> hatte, bemerkte er,
          dass jemand
          <VerbSpan verb="eingegangen">eingegangen</VerbSpan> war. Alle Akten
          waren durcheinander geraten. Er hatte{" "}
          <VerbSpan verb="eingesehen">eingesehen</VerbSpan>, dass hier etwas
          nicht stimmte. Die Sonne war noch nicht{" "}
          <VerbSpan verb="aufgegangen">aufgegangen</VerbSpan>, als er
          <VerbSpan verb="nachgegangen">nachgegangen</VerbSpan> war, um die
          Wahrheit herauszufinden.
        </p>

        <p>
          Seine Assistentin war bereits{" "}
          <VerbSpan verb="angekommen">angekommen</VerbSpan> und hatte ihm
          mitgeteilt, dass seltsame Dinge{" "}
          <VerbSpan verb="vorgekommen">vorgekommen</VerbSpan> waren. Der
          Hausmeister hatte
          <VerbSpan verb="angemacht">angemacht</VerbSpan> das Licht im Gebäude,
          aber etwas war ihm
          <VerbSpan verb="aufgegangen">aufgegangen</VerbSpan> - die
          Sicherheitskameras waren
          <VerbSpan verb="ausgemacht">ausgemacht</VerbSpan> gewesen.
        </p>

        <p>
          Professor Müller hatte sich{" "}
          <VerbSpan verb="vorgenommen">vorgenommen</VerbSpan>, die Wahrheit
          herauszufinden. Er war{" "}
          <VerbSpan verb="ausgegangen">ausgegangen</VerbSpan> und hatte alle
          seine Kontakte angerufen. Dabei war ihm{" "}
          <VerbSpan verb="aufgekommen">aufgekommen</VerbSpan>, dass der Dieb
          sehr systematisch
          <VerbSpan verb="vorgegangen">vorgegangen</VerbSpan> war. Seine
          wichtigsten Forschungsunterlagen hatte er zu Hause{" "}
          <VerbSpan verb="versehen">versehen</VerbSpan> mit einem
          Sicherheitscode.
        </p>

        <p>
          Als er zum Café{" "}
          <VerbSpan verb="hinausgegangen">hinausgegangen</VerbSpan> war, hatte
          er einen Mann bemerkt, der ihm{" "}
          <VerbSpan verb="nachgegangen">nachgegangen</VerbSpan> war. Der Fremde
          hatte sofort
          <VerbSpan verb="weggesehen">weggesehen</VerbSpan>, als ihre Blicke
          sich begegnet waren. Professor Müller hatte{" "}
          <VerbSpan verb="angesehen">angesehen</VerbSpan> den Mann genauer und
          war
          <VerbSpan verb="angegangen">angegangen</VerbSpan> auf ihn zu.
        </p>

        <p>
          "Entschuldigung", hatte er{" "}
          <VerbSpan verb="angegeben">angegeben</VerbSpan>, "aber ich glaube, Sie
          sind mir gefolgt." Der Mann hatte zunächst alles{" "}
          <VerbSpan verb="abgegeben">abgegeben</VerbSpan>
          an Ausreden, aber seine nervöse Art hatte ihn verraten. Seine Hände
          hatten
          <VerbSpan verb="zugenommen">zugenommen</VerbSpan> zu zittern, als er
          endlich
          <VerbSpan verb="zugegeben">zugegeben</VerbSpan> hatte, dass er ein
          Privatdetektiv war.
        </p>

        <p>
          Es war <VerbSpan verb="herausgekommen">herausgekommen</VerbSpan>, dass
          eine konkurrierende Firma Professor Müllers revolutionäre
          Forschungsergebnisse hatte stehlen wollen. Der Detektiv hatte{" "}
          <VerbSpan verb="herausgenommen">herausgenommen</VerbSpan> einen
          Notizblock und hatte{" "}
          <VerbSpan verb="durchgegeben">durchgegeben</VerbSpan> wichtige
          Informationen an die Polizei. Die Firma hatte{" "}
          <VerbSpan verb="übernommen">übernommen</VerbSpan> die Verantwortung
          nicht, aber die Beweise waren eindeutig.
        </p>

        <p>
          Nachdem sie eine Weile zusammen{" "}
          <VerbSpan verb="zugesehen">zugesehen</VerbSpan> hatten, wie die
          Polizei den Fall untersuchte, war Professor Müller{" "}
          <VerbSpan verb="zurückgegangen">zurückgegangen</VerbSpan>
          zu seinem Büro. Er hatte{" "}
          <VerbSpan verb="nachgesehen">nachgesehen</VerbSpan>, ob noch etwas
          fehlte. Glücklicherweise hatte er seine wichtigsten Dokumente{" "}
          <VerbSpan verb="mitgenommen">mitgenommen</VerbSpan>
          nach Hause und dort <VerbSpan verb="versehen">versehen</VerbSpan> mit
          einem Tresor.
        </p>

        <p>
          Die Polizei hatte den Fall{" "}
          <VerbSpan verb="übernommen">übernommen</VerbSpan> und
          <VerbSpan verb="unternommen">unternommen</VerbSpan> sofort eine
          Untersuchung. Sie hatten{" "}
          <VerbSpan verb="vernommen">vernommen</VerbSpan> alle Zeugen und
          <VerbSpan verb="aufgenommen">aufgenommen</VerbSpan> die Aussagen.
          Professor Müller hatte
          <VerbSpan verb="abgegeben">abgegeben</VerbSpan> seine Aussage und
          gehofft, dass die Täter bald gefasst würden.
        </p>

        <p>
          Als er am Abend{" "}
          <VerbSpan verb="zurückgekommen">zurückgekommen</VerbSpan> war, hatte
          er festgestellt, dass auch dort jemand{" "}
          <VerbSpan verb="eingekommen">eingekommen</VerbSpan> war. Aber diesmal
          war der Dieb <VerbSpan verb="entkommen">entkommen</VerbSpan>, ohne
          etwas zu finden. Professor Müller hatte{" "}
          <VerbSpan verb="vorgesehen">vorgesehen</VerbSpan> solche
          Vorsichtsmaßnahmen und war{" "}
          <VerbSpan verb="weggekommen">weggekommen</VerbSpan> mit einem blauen
          Auge.
        </p>

        <p>
          Einen Tag später hatte er{" "}
          <VerbSpan verb="wiedergesehen">wiedergesehen</VerbSpan> seinen alten
          Kollegen, der ihm <VerbSpan verb="mitgegeben">mitgegeben</VerbSpan>{" "}
          hatte wichtige Informationen über die Konkurrenzfirma. Sie hatten{" "}
          <VerbSpan verb="durchgenommen">durchgenommen</VerbSpan>
          alle möglichen Szenarien und{" "}
          <VerbSpan verb="herausgemacht">herausgemacht</VerbSpan>, dass der
          Diebstahl schon lange{" "}
          <VerbSpan verb="vorgesehen">vorgesehen</VerbSpan> gewesen war.
        </p>

        <p>
          Professor Müller hatte{" "}
          <VerbSpan verb="eingenommen">eingenommen</VerbSpan> seine Medizin
          gegen den Stress und{" "}
          <VerbSpan verb="hingenommen">hingenommen</VerbSpan> die Situation. Er
          hatte <VerbSpan verb="ausgekommen">ausgekommen</VerbSpan> mit weniger
          Schlaf als üblich, aber seine Gesundheit hatte{" "}
          <VerbSpan verb="nachgenommen">nachgenommen</VerbSpan> unter dem
          Stress. Seine Frau hatte ihm{" "}
          <VerbSpan verb="weggenommen">weggenommen</VerbSpan> die Sorgen, indem
          sie ihn unterstützt hatte.
        </p>

        <p>
          Der Hausmeister hatte{" "}
          <VerbSpan verb="aufgemacht">aufgemacht</VerbSpan> am nächsten Morgen
          das Gebäude und <VerbSpan verb="zugemacht">zugemacht</VerbSpan> alle
          Fenster, die offen <VerbSpan verb="abgestanden">abgestanden</VerbSpan>{" "}
          hatten. Er hatte{" "}
          <VerbSpan verb="fertiggemacht">fertiggemacht</VerbSpan> die Reinigung
          und <VerbSpan verb="weitergemacht">weitergemacht</VerbSpan> mit seiner
          Arbeit, als wäre nichts{" "}
          <VerbSpan verb="vorgekommen">vorgekommen</VerbSpan>.
        </p>

        <p>
          In der Zwischenzeit hatten die Ermittler{" "}
          <VerbSpan verb="herausgemacht">herausgemacht</VerbSpan>, dass die
          Täter <VerbSpan verb="nachgemacht">nachgemacht</VerbSpan> hatten die
          Schlüssel zum Gebäude. Sie hatten{" "}
          <VerbSpan verb="mitgemacht">mitgemacht</VerbSpan> bei einem größeren
          Industriespionage-Ring und{" "}
          <VerbSpan verb="kaputtgemacht">kaputtgemacht</VerbSpan>
          die Sicherheitssysteme mehrerer Universitäten.
        </p>

        <p>
          Eine Woche später waren die Täter gefasst worden. Sie hatten{" "}
          <VerbSpan verb="bestanden">bestanden</VerbSpan>
          darauf, unschuldig zu sein, aber hatten schließlich{" "}
          <VerbSpan verb="eingestanden">eingestanden</VerbSpan>
          ihre Schuld. Die Verhandlung hatte{" "}
          <VerbSpan verb="angestanden">angestanden</VerbSpan>
          für den nächsten Monat. Professor Müller hatte{" "}
          <VerbSpan verb="durchgestanden">durchgestanden</VerbSpan>
          diese schwierige Zeit mit Hilfe seiner Familie.
        </p>

        <p>
          Nach dem Prozess hatte er{" "}
          <VerbSpan verb="überstanden">überstanden</VerbSpan> die schlimmste
          Zeit und war <VerbSpan verb="hingekommen">hingekommen</VerbSpan> zu
          seinem normalen Arbeitsrhythmus. Seine Forschung hatte{" "}
          <VerbSpan verb="zugestanden">zugestanden</VerbSpan> ihm internationale
          Anerkennung, und er hatte{" "}
          <VerbSpan verb="verstanden">verstanden</VerbSpan>, wie wichtig
          Sicherheit in der Wissenschaft war.
        </p>

        <p>
          Die Konkurrenzfirma hatte{" "}
          <VerbSpan verb="vergeben">vergeben</VerbSpan> um Entschuldigung
          gebeten und <VerbSpan verb="weitergegeben">weitergegeben</VerbSpan>{" "}
          eine offizielle Entschuldigung an die Universität. Sie hatte{" "}
          <VerbSpan verb="zurückgegeben">zurückgegeben</VerbSpan>
          alle gestohlenen Dokumente und{" "}
          <VerbSpan verb="übergegeben">übergegeben</VerbSpan>
          eine Entschädigungssumme.
        </p>

        <p>
          Professor Müller hatte <VerbSpan verb="begeben">begeben</VerbSpan>{" "}
          sich auf eine neue Forschungsreise und hatte{" "}
          <VerbSpan verb="hingegeben">hingegeben</VerbSpan> sich vollständig
          seiner Arbeit. Er hatte{" "}
          <VerbSpan verb="hergegeben">hergegeben</VerbSpan> viel Zeit und
          Energie, aber am Ende hatte{" "}
          <VerbSpan verb="ausgegeben">ausgegeben</VerbSpan> die Universität Geld
          für ein neues Sicherheitssystem.
        </p>

        <p>
          Die Erfahrung hatte ihn gelehrt, dass man nie zu vorsichtig sein kann.
          Er hatte <VerbSpan verb="entstanden">entstanden</VerbSpan> lassen ein
          neues Bewusstsein für Sicherheit und hatte{" "}
          <VerbSpan verb="vorgestanden">vorgestanden</VerbSpan>
          einem Komitee für Forschungssicherheit. Seine Kollegen hatten{" "}
          <VerbSpan verb="umgestanden">umgestanden</VerbSpan>
          ihn mit Unterstützung und{" "}
          <VerbSpan verb="mitgestanden">mitgestanden</VerbSpan>
          in schwierigen Zeiten.
        </p>

        <p>
          Zum Schluss hatte er <VerbSpan verb="abgekommen">abgekommen</VerbSpan>{" "}
          von seinem ursprünglichen Plan, seine Forschung geheim zu halten. Er
          hatte <VerbSpan verb="überkommen">überkommen</VerbSpan>
          das Gefühl, dass Transparenz wichtiger war als Geheimhaltung. Die
          Wissenschaft hatte{" "}
          <VerbSpan verb="nachgestanden">nachgestanden</VerbSpan>
          nicht hinter kommerziellen Interessen, sondern sollte der Menschheit
          dienen.
        </p>

        <p>
          Jahre später hatte er <VerbSpan verb="vermacht">vermacht</VerbSpan>{" "}
          seine gesamte Forschung der Universität und hatte{" "}
          <VerbSpan verb="übergemacht">übergemacht</VerbSpan>
          seine Patente an eine gemeinnützige Organisation. Seine Arbeit hatte{" "}
          <VerbSpan verb="benommen">benommen</VerbSpan> vielen Menschen den Atem
          und war <VerbSpan verb="entnommen">entnommen</VerbSpan> aus seinem
          lebenslangen Engagement für die Wissenschaft.
        </p>

        <p>
          Professor Müller hatte <VerbSpan verb="ersehen">ersehen</VerbSpan> aus
          dieser Erfahrung, dass Vertrauen das Wichtigste in der Wissenschaft
          ist. Er hatte <VerbSpan verb="besehen">besehen</VerbSpan> seine
          Prinzipien und war
          <VerbSpan verb="weggestanden">weggestanden</VerbSpan> von seinem
          alten, misstrauischen Verhalten. Die Zukunft der Forschung hatte{" "}
          <VerbSpan verb="hergestanden">hergestanden</VerbSpan>
          in der Zusammenarbeit, nicht in der Isolation.
        </p>

        <p>
          Als er in Rente ging, hatte er{" "}
          <VerbSpan verb="hingesehen">hingesehen</VerbSpan>
          auf ein erfolgreiches Leben zurück. Er hatte{" "}
          <VerbSpan verb="fergesehen">fergesehen</VerbSpan>
          die Auswirkungen seiner Arbeit auf zukünftige Generationen und war
          zufrieden. Seine Geschichte war{" "}
          <VerbSpan verb="hergesehen">hergesehen</VerbSpan>
          als Beispiel für Integrität in der Wissenschaft und hatte
          <VerbSpan verb="ausgestanden">ausgestanden</VerbSpan> den Test der
          Zeit.
        </p>

        <p>
          Zum Abschied hatte er{" "}
          <VerbSpan verb="aufgesehen">aufgesehen</VerbSpan> zu den Sternen und{" "}
          <VerbSpan verb="hinausgestanden">hinausgestanden</VerbSpan> auf seinem
          Balkon. Er hatte <VerbSpan verb="umgekommen">umgekommen</VerbSpan>{" "}
          wäre er fast vor Stress, aber hatte{" "}
          <VerbSpan verb="begangen">begangen</VerbSpan> keine Fehler in seiner
          Ethik. Die Welt hatte{" "}
          <VerbSpan verb="hergekommen">hergekommen</VerbSpan> zu einem besseren
          Ort durch seine Forschung, und das war{" "}
          <VerbSpan verb="ausgesehen">ausgesehen</VerbSpan>
          wie der größte Erfolg seines Lebens.
        </p>
      </div>

      <div className="mt-8 bg-blue-50 p-4 rounded-lg">
        <h3 className="font-bold text-lg mb-2 text-blue-800">
          Kullanım Talimatı:
        </h3>
        <p className="text-blue-700">
          Koyu renkli fiillerin üzerine fareyle gelin ve fiilin yalın halini ve
          Türkçe anlamını görün. Hikayede Perfect (haben/sein + Partizip II) ve
          Plusquamperfekt (hatte/war + Partizip II) zamanları kullanılmıştır.
          Verdiğiniz listedeki TÜM 103 fiil bu hikayede kullanılmıştır.
        </p>
      </div>
    </div>
  );
};

export default GermanStory;
