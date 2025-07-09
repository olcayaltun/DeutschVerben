import React, { useState } from "react";

const GermanStory = () => {
  const [hoveredVerb, setHoveredVerb] = useState(null);

  const verbMeanings = {
    angesprochen: "ansprechen - hitap etmek",
    verpönt: "verpönen - ayıplamak",
    wahrgenommen: "wahrnehmen - algılamak",
    vermisst: "vermissen - özlemek",
    aufgenommen: "aufnehmen - kabul etmek",
    gebacken: "backen - pişirmek",
    reingepackt: "reinpacken - içine koymak",
    ausgezogen: "ausziehen - çıkarmak",
    mitgebracht: "mitbringen - beraberinde getirmek",
    genossen: "genießen - tadını çıkarmak",
    ausgewichen: "ausweichen - kaçınmak",
    umgekommen: "umkommen - ölmek",
    geschützt: "schützen - korumak",
    abgeschlossen: "abschließen - bitirmek",
    beschwert: "beschweren - şikayet etmek",
    fixiert: "fixieren - sabitlemek",
    fokussiert: "fokussieren - odaklanmak",
    durchgetaktet: "durchtakten - programlamak",
    empfunden: "empfinden - hissetmek",
    spezialisiert: "spezialisieren - uzmanlaşmak",
    vorbereitet: "vorbereiten - hazırlamak",
    geschnitten: "schneiden - kesmek",
    weitergeführt: "weiterführen - devam ettirmek",
    gebucht: "buchen - rezervasyon yapmak",
    gestaltet: "gestalten - şekillendirmek",
    unterstützt: "unterstützen - desteklemek",
    ausprobiert: "ausprobieren - denemek",
    ausgeschaut: "ausschauen - bakmak",
    beeinflusst: "beeinflussen - etkilemek",
    ausgeübt: "ausüben - icra etmek",
    verabschiedet: "verabschieden - vedalaşmak",
    zugezogen: "zuziehen - taşınmak",
    verändert: "verändern - değiştirmek",
    bestätigt: "bestätigen - doğrulamak",
    ausgeglichen: "ausgleichen - dengelemek",
    aufgewachsen: "aufwachsen - büyümek",
    ausgewandert: "auswandern - göç etmek",
    besucht: "besuchen - ziyaret etmek",
    verschlossen: "verschließen - kapatmak",
    aufgegeben: "aufgeben - vazgeçmek",
    geblieben: "bleiben - kalmak",
    angemeldet: "anmelden - kayıt olmak",
    gekündigt: "kündigen - feshetmek",
    gezweifelt: "zweifeln - şüphe etmek",
    festgemacht: "festmachen - saptamak",
    überarbeitet: "überarbeiten - aşırı çalışmak",
    ausgesehen: "aussehen - görünmek",
    eingeschätzt: "einschätzen - değerlendirmek",
    geschätzt: "schätzen - değer vermek",
    verglichen: "vergleichen - karşılaştırmak",
    angefreundet: "anfreunden - arkadaş olmak",
    abgekapselt: "abkapseln - soyutlamak",
    reflektiert: "reflektieren - düşünmek",
    hinterfragt: "hinterfragen - sorgulamak",
    adaptiert: "adaptieren - uyarlamak",
    überprüft: "überprüfen - kontrol etmek",
    ausgestrahlt: "ausstrahlen - yaymak",
    geleistet: "leisten - başarmak",
    gleichberechtigt: "gleichberechtigen - eşit haklar vermek",
    benachteiligt: "benachteiligen - dezavantaja sokmak",
    versorgt: "versorgen - bakım yapmak",
    ausgefallen: "ausfallen - iptal olmak",
    eingestellt: "einstellen - işe almak",
    verlängert: "verlängern - uzatmak",
    geherrscht: "herrschen - hüküm sürmek",
    vertreten: "vertreten - temsil etmek",
    umgedacht: "umdenken - yeniden düşünmek",
    eingesetzt: "einsetzen - kullanmak",
    kompensiert: "kompensieren - telafi etmek",
    eingestanden: "einstehen - sorumlu olmak",
    gezwungen: "zwingen - zorlamak",
    aufgemacht: "aufmachen - açmak",
    hingewiesen: "hinweisen - işaret etmek",
    nachgezogen: "nachziehen - ardından gelmek",
    ausgerichtet: "ausrichten - yönlendirmek",
    konzentriert: "konzentrieren - konsantre olmak",
    herausgefunden: "herausfinden - keşfetmek",
    entsandt: "entsenden - göndermek",
    entschieden: "entscheiden - karar vermek",
    ausgebildet: "ausbilden - eğitmek",
    angeboten: "anbieten - sunmak",
    angewendet: "anwenden - uygulamak",
    formuliert: "formulieren - formüle etmek",
    gemessen: "messen - ölçmek",
    gemeistert: "meistern - üstesinden gelmek",
    geführt: "führen - yönetmek",
    definiert: "definieren - tanımlamak",
    simuliert: "simulieren - simüle etmek",
    motiviert: "motivieren - motive etmek",
    akzeptiert: "akzeptieren - kabul etmek",
    durchgehalten: "durchhalten - dayanmak",
    entspannt: "entspannen - rahatlamak",
    bestanden: "bestehen - geçmek",
    erfüllt: "erfüllen - yerine getirmek",
    aufgegangen: "aufgehen - gerçekleşmek",
    überstanden: "überstehen - atlatmak",
    festgestellt: "feststellen - tespit etmek",
    verbunden: "verbinden - bağlamak",
    verschlüsselt: "verschlüsseln - şifrelemek",
    generiert: "generieren - üretmek",
    synchronisiert: "synchronisieren - senkronize etmek",
    geantwortet: "antworten - cevap vermek",
    gepflegt: "pflegen - bakım yapmak",
    transportiert: "transportieren - taşımak",
    verstärkt: "verstärken - güçlendirmek",
    verknüpft: "verknüpfen - bağlamak",
    finanziert: "finanzieren - finanse etmek",
    ausgedrückt: "ausdrücken - ifade etmek",
    verwirrt: "verwirren - şaşırtmak",
  };

  const VerbTooltip = ({ verb, children }) => (
    <span
      className="font-bold text-blue-800 cursor-pointer relative"
      onMouseEnter={() => setHoveredVerb(verb)}
      onMouseLeave={() => setHoveredVerb(null)}
    >
      {children}
      {hoveredVerb === verb && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap z-10">
          {verbMeanings[verb]}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      )}
    </span>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Almanca C1 Hikaye - Perfect & Plusquamperfekt
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-800">
            Eine Lebensgeschichte
          </h2>

          <p className="mb-4">
            Sarah war eine junge Frau, die sich ihr ganzes Leben lang nie{" "}
            <VerbTooltip verb="angesprochen">angesprochen</VerbTooltip> hatte,
            über ihre Träume zu sprechen. In ihrer Familie war es immer{" "}
            <VerbTooltip verb="verpönt">verpönt</VerbTooltip> gewesen, große
            Ambitionen zu haben. Sie hatte die Erwartungen ihrer Eltern stets
            als etwas sehr Bedrückendes{" "}
            <VerbTooltip verb="wahrgenommen">wahrgenommen</VerbTooltip>.
          </p>

          <p className="mb-4">
            Nachdem sie Deutschland verlassen hatte,{" "}
            <VerbTooltip verb="vermisst">vermisste</VerbTooltip> sie zunächst
            vieles. Aber in ihrer neuen Heimat war sie sehr gut{" "}
            <VerbTooltip verb="aufgenommen">aufgenommen</VerbTooltip> worden.
            Ihre Nachbarin hatte wöchentlich gutes deutsches Brot{" "}
            <VerbTooltip verb="gebacken">gebacken</VerbTooltip> und Sarah immer
            ein paar Scheiben{" "}
            <VerbTooltip verb="mitgebracht">mitgebracht</VerbTooltip>.
          </p>

          <p className="mb-4">
            Am Anfang hatte sie das Geschirr einfach irgendwo{" "}
            <VerbTooltip verb="reingepackt">reingepackt</VerbTooltip>, aber mit
            der Zeit lernte sie, die Erleichterungen zu{" "}
            <VerbTooltip verb="genossen">genießen</VerbTooltip>, die man in
            Deutschland <VerbTooltip verb="genossen">genossen</VerbTooltip>{" "}
            hatte. Wenn sie ihre Jacke{" "}
            <VerbTooltip verb="ausgezogen">ausgezogen</VerbTooltip> hatte,
            dachte sie oft an die Hindernisse, denen sie{" "}
            <VerbTooltip verb="ausgewichen">ausgewichen</VerbTooltip> war.
          </p>

          <p className="mb-4">
            "Man braucht ein Auto, um nicht{" "}
            <VerbTooltip verb="umgekommen">umzukommen</VerbTooltip>", hatte sie
            einmal gescherzt. Vor Viren war sie immer gut{" "}
            <VerbTooltip verb="geschützt">geschützt</VerbTooltip> gewesen,
            nachdem sie ihr zweijähriges Krankenversicherungspaket{" "}
            <VerbTooltip verb="abgeschlossen">abgeschlossen</VerbTooltip> hatte.
          </p>

          <p className="mb-4">
            Sarah hatte sich nie über alles{" "}
            <VerbTooltip verb="beschwert">beschwert</VerbTooltip> wie andere.
            Sie hatte sich nie auf das Negative{" "}
            <VerbTooltip verb="fixiert">fixiert</VerbTooltip> oder darauf{" "}
            <VerbTooltip verb="fokussiert">fokussiert</VerbTooltip>. Alles war
            zwar sehr{" "}
            <VerbTooltip verb="durchgetaktet">durchgetaktet</VerbTooltip>{" "}
            gewesen, aber sie hatte ein deutsches Empfinden dafür{" "}
            <VerbTooltip verb="empfunden">empfunden</VerbTooltip>.
          </p>

          <p className="mb-4">
            Beruflich hatte sie sich nicht nur auf Rinder{" "}
            <VerbTooltip verb="spezialisiert">spezialisiert</VerbTooltip>. Sie
            hatte sich immer gut auf ihre Videos{" "}
            <VerbTooltip verb="vorbereitet">vorbereitet</VerbTooltip> und diese
            sorgfältig <VerbTooltip verb="geschnitten">geschnitten</VerbTooltip>
            . Die Leidenschaft dafür hatte sie immer{" "}
            <VerbTooltip verb="weitergeführt">weitergeführt</VerbTooltip>.
          </p>

          <p className="mb-4">
            Für Konzerte war sie oft{" "}
            <VerbTooltip verb="gebucht">gebucht</VerbTooltip> worden. Sie hatte
            Politik für und mit jungen Menschen{" "}
            <VerbTooltip verb="gestaltet">gestaltet</VerbTooltip> und dabei
            viele Projekte{" "}
            <VerbTooltip verb="unterstützt">unterstützt</VerbTooltip>. Einiges
            hatte sie <VerbTooltip verb="ausprobiert">ausprobiert</VerbTooltip>{" "}
            und sich möglichst viel{" "}
            <VerbTooltip verb="ausgeschaut">ausgeschaut</VerbTooltip>.
          </p>

          <p className="mb-4">
            Sie hatte sich nie von anderen{" "}
            <VerbTooltip verb="beeinflusst">beeinflussen</VerbTooltip> lassen,
            als sie ihren Job{" "}
            <VerbTooltip verb="ausgeübt">ausgeübt</VerbTooltip> hatte. Nachdem
            sie sich von ihren Kindern{" "}
            <VerbTooltip verb="verabschiedet">verabschiedet</VerbTooltip> hatte,
            waren viele Menschen nach Berlin{" "}
            <VerbTooltip verb="zugezogen">zugezogen</VerbTooltip>.
          </p>

          <p className="mb-4">
            Sie hatte sich sehr viel{" "}
            <VerbTooltip verb="ausprobiert">ausprobiert</VerbTooltip>, während
            sich die Stadt <VerbTooltip verb="verändert">verändert</VerbTooltip>{" "}
            hatte. Das hatte sich jetzt gerade bei ihr sehr{" "}
            <VerbTooltip verb="bestätigt">bestätigt</VerbTooltip>. Alles war so
            gut <VerbTooltip verb="ausgeglichen">ausgeglichen</VerbTooltip>{" "}
            gewesen.
          </p>

          <p className="mb-4">
            Sarah war in Berlin geboren und{" "}
            <VerbTooltip verb="aufgewachsen">aufgewachsen</VerbTooltip>. Später
            war sie <VerbTooltip verb="ausgewandert">ausgewandert</VerbTooltip>{" "}
            und hatte oft Familie und Freunde{" "}
            <VerbTooltip verb="besucht">besucht</VerbTooltip>. Südtirol war eher
            ländlich und{" "}
            <VerbTooltip verb="verschlossen">verschlossen</VerbTooltip> gewesen.
          </p>

          <p className="mb-4">
            Sie hatte nie ihre Freiheit{" "}
            <VerbTooltip verb="aufgegeben">aufgegeben</VerbTooltip> und war in
            Berlin <VerbTooltip verb="geblieben">geblieben</VerbTooltip>. Für
            fünf Euro im Monat hatte sie sich{" "}
            <VerbTooltip verb="angemeldet">angemeldet</VerbTooltip>, aber sie
            konnte jederzeit wieder{" "}
            <VerbTooltip verb="gekündigt">kündigen</VerbTooltip>.
          </p>

          <p className="mb-4">
            Sie hatte nie daran{" "}
            <VerbTooltip verb="gezweifelt">gezweifelt</VerbTooltip>, dass sie es
            schaffen würde. Woran es lag, hatte sie schon längst{" "}
            <VerbTooltip verb="festgemacht">festgemacht</VerbTooltip>. Gestresst
            und <VerbTooltip verb="überarbeitet">überarbeitet</VerbTooltip>{" "}
            hatte sie trotzdem immer gut{" "}
            <VerbTooltip verb="ausgesehen">ausgesehen</VerbTooltip>.
          </p>

          <p className="mb-4">
            Sie hatte sich selbst richtig{" "}
            <VerbTooltip verb="eingeschätzt">eingeschätzt</VerbTooltip> und sich
            selbst mehr <VerbTooltip verb="geschätzt">geschätzt</VerbTooltip>,
            anstatt sich mit anderen zu{" "}
            <VerbTooltip verb="verglichen">vergleichen</VerbTooltip>. Mit dieser
            Einstellung hatte sie sich{" "}
            <VerbTooltip verb="angefreundet">angefreundet</VerbTooltip>.
          </p>

          <p className="mb-4">
            Sie hatte versucht, sich von negativen Einflüssen{" "}
            <VerbTooltip verb="abgekapselt">abzukapseln</VerbTooltip> und hatte
            das immer <VerbTooltip verb="reflektiert">reflektiert</VerbTooltip>.
            Sich kritisch zu{" "}
            <VerbTooltip verb="hinterfragt">hinterfragen</VerbTooltip> hatte sie
            gelernt. Das, was sie übernommen und{" "}
            <VerbTooltip verb="adaptiert">adaptiert</VerbTooltip> hatte, hatte
            sie regelmäßig <VerbTooltip verb="überprüft">überprüft</VerbTooltip>
            .
          </p>

          <p className="mb-4">
            Ihre Ausstrahlung hatte sie positiv{" "}
            <VerbTooltip verb="ausgestrahlt">ausgestrahlt</VerbTooltip> und
            geschätzt, was ihr Körper ihr{" "}
            <VerbTooltip verb="geleistet">geleistet</VerbTooltip> hatte. Sie
            hatte sich gefragt, ob Männer und Frauen wirklich{" "}
            <VerbTooltip verb="gleichberechtigt">gleichberechtigt</VerbTooltip>{" "}
            waren und ob niemand{" "}
            <VerbTooltip verb="benachteiligt">benachteiligt</VerbTooltip> wurde.
          </p>

          <p className="mb-4">
            Die Kinder waren gut{" "}
            <VerbTooltip verb="versorgt">versorgt</VerbTooltip> worden, auch
            wenn einige Termine{" "}
            <VerbTooltip verb="ausgefallen">ausgefallen</VerbTooltip> waren.
            Frauen waren nicht so gerne{" "}
            <VerbTooltip verb="eingestellt">eingestellt</VerbTooltip> worden und
            ihre Verträge waren nicht{" "}
            <VerbTooltip verb="verlängert">verlängert</VerbTooltip> worden.
          </p>

          <p className="mb-4">
            Dort hatten Einzelvertragsverhandlungen{" "}
            <VerbTooltip verb="geherrscht">geherrscht</VerbTooltip> und Frauen
            waren schwächer in Führungspositionen{" "}
            <VerbTooltip verb="vertreten">vertreten</VerbTooltip> gewesen. Ein
            grundsätzliches Umdenken hatte{" "}
            <VerbTooltip verb="umgedacht">stattgefunden</VerbTooltip>. Sie hatte
            sich dafür <VerbTooltip verb="eingesetzt">eingesetzt</VerbTooltip>{" "}
            und einiges{" "}
            <VerbTooltip verb="kompensiert">kompensiert</VerbTooltip>.
          </p>

          <p className="mb-4">
            Für ihre Familie hatte sie{" "}
            <VerbTooltip verb="eingestanden">eingestanden</VerbTooltip>, aber
            niemand hatte die Unternehmen{" "}
            <VerbTooltip verb="gezwungen">zwingen</VerbTooltip> können. Sie
            hatte ein wichtiges Thema{" "}
            <VerbTooltip verb="aufgemacht">aufgemacht</VerbTooltip> und den
            Fokus darauf <VerbTooltip verb="fokussiert">gelenkt</VerbTooltip>.
            Darauf hatte sie{" "}
            <VerbTooltip verb="hingewiesen">hingewiesen</VerbTooltip>.
          </p>

          <p className="mb-4">
            Sie hatte beobachtet, wen andere{" "}
            <VerbTooltip verb="nachgezogen">nachgezogen</VerbTooltip> hatten.
            Ihre Karriere hatte sie darauf{" "}
            <VerbTooltip verb="ausgerichtet">ausgerichtet</VerbTooltip> und sich
            auf nichts anderes{" "}
            <VerbTooltip verb="konzentriert">konzentriert</VerbTooltip>. Sie
            hatte sich auf Auslandseinsätze{" "}
            <VerbTooltip verb="vorbereitet">vorbereitet</VerbTooltip> und
            <VerbTooltip verb="herausgefunden">herausgefunden</VerbTooltip>, wie
            andere es geschafft hatten.
          </p>

          <p className="mb-4">
            In andere Länder war sie{" "}
            <VerbTooltip verb="entsandt">entsandt</VerbTooltip> worden, nachdem
            sie ihre Präferenzen{" "}
            <VerbTooltip verb="angemeldet">angemeldet</VerbTooltip> hatte. Das
            Ministerium hatte{" "}
            <VerbTooltip verb="entschieden">entschieden</VerbTooltip> und sie
            hatte durch Hintergrundwissen{" "}
            <VerbTooltip verb="kompensiert">kompensiert</VerbTooltip>.
          </p>

          <p className="mb-4">
            Hier war sie{" "}
            <VerbTooltip verb="ausgebildet">ausgebildet</VerbTooltip> worden.
            Sprachkurse waren{" "}
            <VerbTooltip verb="angeboten">angeboten</VerbTooltip> worden und sie
            hatte die Sprache praktisch{" "}
            <VerbTooltip verb="angewendet">angewendet</VerbTooltip>. Ein klares
            Ziel hatte sie{" "}
            <VerbTooltip verb="formuliert">formuliert</VerbTooltip> und der
            Erfolg hatte sich <VerbTooltip verb="gemessen">messen</VerbTooltip>{" "}
            lassen.
          </p>

          <p className="mb-4">
            Ein Date hatte sie erfolgreich{" "}
            <VerbTooltip verb="gemeistert">gemeistert</VerbTooltip> und ein
            Visa-Interview <VerbTooltip verb="geführt">geführt</VerbTooltip>.
            Für sich hatte sie es{" "}
            <VerbTooltip verb="definiert">definiert</VerbTooltip> und
            sprachliche Situationen{" "}
            <VerbTooltip verb="simuliert">simuliert</VerbTooltip>.
          </p>

          <p className="mb-4">
            Ihre Studierenden hatte sie{" "}
            <VerbTooltip verb="motiviert">motiviert</VerbTooltip>. Das hatte sie
            einfach <VerbTooltip verb="akzeptiert">akzeptiert</VerbTooltip> und
            <VerbTooltip verb="durchgehalten">durchgehalten</VerbTooltip>. Zeit
            zum Entspannen hatte sie sich{" "}
            <VerbTooltip verb="entspannt">genommen</VerbTooltip> und sie hatten
            einander <VerbTooltip verb="unterstützt">unterstützt</VerbTooltip>.
          </p>

          <p className="mb-4">
            Die Prüfung hatte sie{" "}
            <VerbTooltip verb="bestanden">bestanden</VerbTooltip> und ihr Leben
            darauf <VerbTooltip verb="ausgerichtet">ausgerichtet</VerbTooltip>.
            Sie hatte sich sehr{" "}
            <VerbTooltip verb="erfüllt">erfüllt</VerbTooltip> gefühlt, als ihre
            Pläne so <VerbTooltip verb="aufgegangen">aufgegangen</VerbTooltip>{" "}
            waren. Alles hatte sie gut{" "}
            <VerbTooltip verb="überstanden">überstanden</VerbTooltip>.
          </p>

          <p className="mb-4">
            Persönliches Glück hatte sie so{" "}
            <VerbTooltip verb="definiert">definiert</VerbTooltip>: Sie hatte
            sich hier <VerbTooltip verb="versorgt">versorgt</VerbTooltip>{" "}
            gefühlt und
            <VerbTooltip verb="festgestellt">festgestellt</VerbTooltip>, dass
            sie sich mit über 60 anderen Ländern
            <VerbTooltip verb="verbunden">verbinden</VerbTooltip> konnte.
          </p>

          <p className="mb-4">
            Ihre Verbindung war{" "}
            <VerbTooltip verb="verschlüsselt">verschlüsselt</VerbTooltip>{" "}
            gewesen und sie hatte sichere Passwörter{" "}
            <VerbTooltip verb="generiert">generiert</VerbTooltip>. Diese hatte
            sie <VerbTooltip verb="synchronisiert">synchronisiert</VerbTooltip>{" "}
            und alles risikofrei{" "}
            <VerbTooltip verb="ausprobiert">ausprobiert</VerbTooltip>.
          </p>

          <p className="mb-4">
            Auf kritische Fragen hatte sie immer{" "}
            <VerbTooltip verb="geantwortet">geantwortet</VerbTooltip>. Sie hatte
            sich nie <VerbTooltip verb="beschwert">beschwert</VerbTooltip> und
            konnte das vielleicht gar nicht so{" "}
            <VerbTooltip verb="geschätzt">schätzen</VerbTooltip>. Manche
            Menschen hatten ihr Unglück{" "}
            <VerbTooltip verb="gepflegt">gepflegt</VerbTooltip>.
          </p>

          <p className="mb-4">
            Gefühle und Einstellungen hatte sie{" "}
            <VerbTooltip verb="transportiert">transportiert</VerbTooltip> und
            das hatte diese Emotionen{" "}
            <VerbTooltip verb="verstärkt">verstärkt</VerbTooltip>. Sie hatte es
            im richtigen Kontext{" "}
            <VerbTooltip verb="angewendet">angewendet</VerbTooltip> und selbst{" "}
            <VerbTooltip verb="entschieden">entschieden</VerbTooltip>.
          </p>

          <p className="mb-4">
            Theoretisch war das vielleicht immer noch{" "}
            <VerbTooltip verb="verknüpft">verknüpft</VerbTooltip> gewesen. Ihre
            Arbeit hatte sie{" "}
            <VerbTooltip verb="finanziert">finanziert</VerbTooltip> und als
            Mitglied hatte sie andere{" "}
            <VerbTooltip verb="unterstützt">unterstützt</VerbTooltip>. Emotionen
            hatte sie <VerbTooltip verb="ausgedrückt">ausgedrückt</VerbTooltip>,
            auch wenn manche Wörter sie{" "}
            <VerbTooltip verb="verwirrt">verwirrt</VerbTooltip> hatten.
          </p>

          <p className="mb-6">
            So war Sarah durchs Leben gegangen - mit all den Erfahrungen, die
            sie <VerbTooltip verb="gemeistert">gemeistert</VerbTooltip> hatte,
            den Herausforderungen, die sie{" "}
            <VerbTooltip verb="überstanden">überstanden</VerbTooltip> hatte, und
            den Träumen, die sie{" "}
            <VerbTooltip verb="verwirklicht">verwirklicht</VerbTooltip> hatte.
          </p>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">
            Kullanım Kılavuzu:
          </h3>
          <p className="text-sm text-blue-700">
            Koyu renkli fiillerin üzerine mouse ile gelerek fiillerin mastar
            hallerini ve Türkçe anlamlarını görebilirsiniz. Bu hikayede Perfect
            (haben/sein + Partizip II) ve Plusquamperfekt (hatte/war + Partizip
            II) zamanları kullanılmıştır.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GermanStory;
