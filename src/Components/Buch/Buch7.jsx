import React, { useState } from "react";

const VerbTooltip = ({ children, verb, meaning }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <span className="relative">
      <span
        className="bg-blue-800 text-white px-1 py-0.5 rounded cursor-pointer font-bold"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </span>
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg z-10 whitespace-nowrap">
          <div className="font-semibold">{verb}</div>
          <div className="text-gray-300">{meaning}</div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      )}
    </span>
  );
};

const GermanStory = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Die Reise des Lebens
        </h1>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            Als Maria jung war,{" "}
            <VerbTooltip verb="träumen" meaning="rüya görmek">
              hatte sie geträumt
            </VerbTooltip>
            , einmal die ganze Welt zu bereisen. Sie{" "}
            <VerbTooltip verb="wachsen" meaning="büyümek">
              war aufgewachsen
            </VerbTooltip>{" "}
            in einem kleinen Dorf, wo sie jeden Tag zur Schule ging und{" "}
            <VerbTooltip verb="lernen" meaning="öğrenmek">
              gelernt hatte
            </VerbTooltip>
            , dass das Leben mehr zu bieten hat.
          </p>

          <p>
            Nachdem sie{" "}
            <VerbTooltip verb="abschließen" meaning="bitirmek">
              abgeschlossen hatte
            </VerbTooltip>
            ,{" "}
            <VerbTooltip verb="entscheiden" meaning="karar vermek">
              hat sie sich entschieden
            </VerbTooltip>
            , ihre Träume zu verwirklichen. Sie{" "}
            <VerbTooltip verb="bewerben" meaning="başvuru yapmak">
              hatte sich beworben
            </VerbTooltip>{" "}
            bei verschiedenen Universitäten und{" "}
            <VerbTooltip verb="erhalten" meaning="almak">
              erhalten hatte
            </VerbTooltip>{" "}
            ein Stipendium für München.
          </p>

          <p>
            In der Großstadt{" "}
            <VerbTooltip verb="beginnen" meaning="başlamak">
              hat sie begonnen
            </VerbTooltip>
            , ein neues Leben aufzubauen. Sie{" "}
            <VerbTooltip verb="mieten" meaning="kiralamak">
              hatte gemietet
            </VerbTooltip>{" "}
            ein kleines Apartment und{" "}
            <VerbTooltip verb="einrichten" meaning="döşemek">
              eingerichtet hatte
            </VerbTooltip>{" "}
            es mit viel Liebe zum Detail. Das erste Mal{" "}
            <VerbTooltip verb="umziehen" meaning="taşınmak">
              war sie umgezogen
            </VerbTooltip>{" "}
            von zu Hause weg.
          </p>

          <p>
            Während des Studiums{" "}
            <VerbTooltip verb="arbeiten" meaning="çalışmak">
              hat sie gearbeitet
            </VerbTooltip>{" "}
            in einem Café, um ihr Leben zu finanzieren. Sie{" "}
            <VerbTooltip verb="überleben" meaning="hayatta kalmak">
              hatte überlebt
            </VerbTooltip>{" "}
            mit wenig Geld, aber{" "}
            <VerbTooltip verb="leisten" meaning="karşılayabilmek">
              leisten konnte
            </VerbTooltip>{" "}
            sie sich alles Notwendige. Jeden Monat{" "}
            <VerbTooltip verb="bedenken" meaning="düşünmek">
              hatte sie bedacht
            </VerbTooltip>
            , wie sie ihre Ausgaben reduzieren könnte.
          </p>

          <p>
            Eines Tages{" "}
            <VerbTooltip verb="treffen" meaning="rastlamak">
              hat sie getroffen
            </VerbTooltip>{" "}
            einen interessanten Mann namens Andreas. Er{" "}
            <VerbTooltip verb="studieren" meaning="okumak">
              hatte studiert
            </VerbTooltip>{" "}
            Medizin und{" "}
            <VerbTooltip verb="erzählen" meaning="anlatmak">
              erzählt hatte
            </VerbTooltip>{" "}
            ihr von seinen Plänen, nach dem Studium ins Ausland zu gehen. Sie{" "}
            <VerbTooltip verb="verlieben" meaning="aşık olmak">
              hat sich verliebt
            </VerbTooltip>{" "}
            in seine Leidenschaft für das Leben.
          </p>

          <p>
            Gemeinsam{" "}
            <VerbTooltip verb="verbringen" meaning="geçirmek">
              haben sie verbracht
            </VerbTooltip>{" "}
            viele schöne Stunden. Sie{" "}
            <VerbTooltip verb="unternehmen" meaning="girişmek">
              hatten unternommen
            </VerbTooltip>{" "}
            lange Spaziergänge durch die Stadt und{" "}
            <VerbTooltip verb="besuchen" meaning="ziyaret etmek">
              besucht hatten
            </VerbTooltip>{" "}
            sie alle wichtigen Museen. Andreas{" "}
            <VerbTooltip verb="vorstellen" meaning="tanıtmak">
              hat vorgestellt
            </VerbTooltip>{" "}
            ihr seine Freunde, die sie herzlich aufnahmen.
          </p>

          <p>
            Nach zwei Jahren{" "}
            <VerbTooltip verb="vorschlagen" meaning="önermek">
              hat Andreas vorgeschlagen
            </VerbTooltip>
            , dass sie zusammen nach Spanien reisen sollten. Maria{" "}
            <VerbTooltip verb="zögern" meaning="tereddüt etmek">
              hatte gezögert
            </VerbTooltip>
            , weil sie{" "}
            <VerbTooltip verb="sparen" meaning="para biriktirmek">
              gespart hatte
            </VerbTooltip>{" "}
            für ihre Masterarbeit. Aber schließlich{" "}
            <VerbTooltip verb="überwinden" meaning="yenmek">
              hat sie überwunden
            </VerbTooltip>{" "}
            ihre Bedenken.
          </p>

          <p>
            Die Reise{" "}
            <VerbTooltip verb="verlaufen" meaning="geçmek">
              war verlaufen
            </VerbTooltip>{" "}
            wie ein Märchen. Sie{" "}
            <VerbTooltip verb="anschauen" meaning="bakmak">
              hatten angeschaut
            </VerbTooltip>{" "}
            den Regenwald und{" "}
            <VerbTooltip verb="bereisen" meaning="dolaşmak">
              bereist hatten
            </VerbTooltip>{" "}
            das ganze Land. Maria{" "}
            <VerbTooltip verb="erwarten" meaning="beklemek">
              hatte erwartet
            </VerbTooltip>
            , viel Neues zu sehen, aber die Realität{" "}
            <VerbTooltip verb="übertreffen" meaning="aşmak">
              hat übertroffen
            </VerbTooltip>{" "}
            alle ihre Erwartungen.
          </p>

          <p>
            Sie{" "}
            <VerbTooltip verb="erleben" meaning="yaşamak">
              haben erlebt
            </VerbTooltip>{" "}
            so viele Abenteuer, die sie erstmal{" "}
            <VerbTooltip verb="verarbeiten" meaning="hazmetmek">
              verarbeiten musste
            </VerbTooltip>
            . Abends{" "}
            <VerbTooltip verb="sitzen" meaning="oturmak">
              haben sie gesessen
            </VerbTooltip>{" "}
            am Strand und{" "}
            <VerbTooltip verb="sprechen" meaning="konuşmak">
              gesprochen hatten
            </VerbTooltip>{" "}
            über ihre Zukunft. Andreas{" "}
            <VerbTooltip verb="gestehen" meaning="itiraf etmek">
              hat gestanden
            </VerbTooltip>
            , dass er sie heiraten möchte.
          </p>

          <p>
            Als sie zurück in München waren,{" "}
            <VerbTooltip verb="verändern" meaning="değiştirmek">
              hatte sich verändert
            </VerbTooltip>{" "}
            alles. Maria{" "}
            <VerbTooltip verb="finden" meaning="bulmak">
              hat gefunden
            </VerbTooltip>{" "}
            einen neuen Job und{" "}
            <VerbTooltip verb="verdienen" meaning="kazanmak">
              verdient hatte
            </VerbTooltip>{" "}
            sie jetzt genug, um komfortabel zu leben. Sie{" "}
            <VerbTooltip verb="abspecken" meaning="azaltmak">
              hatte abgespeckt
            </VerbTooltip>{" "}
            ihre Ausgaben und{" "}
            <VerbTooltip verb="steigern" meaning="artırmak">
              gesteigert
            </VerbTooltip>{" "}
            ihre Gehaltschancen.
          </p>

          <p>
            Die Hochzeit{" "}
            <VerbTooltip verb="feiern" meaning="kutlamak">
              haben sie gefeiert
            </VerbTooltip>{" "}
            im Frühling. Alle Freunde{" "}
            <VerbTooltip verb="kommen" meaning="gelmek">
              waren gekommen
            </VerbTooltip>{" "}
            und{" "}
            <VerbTooltip verb="gratulieren" meaning="tebrik etmek">
              gratuliert hatten
            </VerbTooltip>{" "}
            dem glücklichen Paar. Marias Eltern{" "}
            <VerbTooltip verb="weinen" meaning="ağlamak">
              haben geweint
            </VerbTooltip>{" "}
            vor Freude, als sie ihre Tochter im weißen Kleid sahen.
          </p>

          <p>
            Nach der Hochzeit{" "}
            <VerbTooltip verb="kaufen" meaning="satın almak">
              haben sie gekauft
            </VerbTooltip>{" "}
            ein Haus am Stadtrand. Sie{" "}
            <VerbTooltip verb="einziehen" meaning="taşınmak">
              waren eingezogen
            </VerbTooltip>{" "}
            im Sommer und{" "}
            <VerbTooltip verb="renovieren" meaning="yenilemek">
              renoviert hatten
            </VerbTooltip>{" "}
            es komplett. Andreas{" "}
            <VerbTooltip verb="pflanzen" meaning="ekmek">
              hat gepflanzt
            </VerbTooltip>{" "}
            einen Garten, während Maria{" "}
            <VerbTooltip verb="streichen" meaning="boyamak">
              gestrichen hatte
            </VerbTooltip>{" "}
            alle Wände.
          </p>

          <p>
            Ein Jahr später{" "}
            <VerbTooltip verb="gebären" meaning="doğurmak">
              hat Maria geboren
            </VerbTooltip>{" "}
            ihr erstes Kind. Sie{" "}
            <VerbTooltip verb="nennen" meaning="adını koymak">
              haben genannt
            </VerbTooltip>{" "}
            ihn Paul. Andreas{" "}
            <VerbTooltip verb="nehmen" meaning="almak">
              hatte genommen
            </VerbTooltip>{" "}
            Vaterschaftsurlaub und{" "}
            <VerbTooltip verb="helfen" meaning="yardım etmek">
              geholfen hatte
            </VerbTooltip>{" "}
            bei der Kinderbetreuung. Die ersten Monate{" "}
            <VerbTooltip verb="schlafen" meaning="uyumak">
              haben sie geschlafen
            </VerbTooltip>{" "}
            sehr wenig.
          </p>

          <p>
            Als Paul größer wurde,{" "}
            <VerbTooltip verb="lesen" meaning="okumak">
              hat Maria gelesen
            </VerbTooltip>{" "}
            ihm jeden Abend vor. Sie{" "}
            <VerbTooltip verb="aussuchen" meaning="seçmek">
              hatte ausgesucht
            </VerbTooltip>{" "}
            die schönsten Märchen und{" "}
            <VerbTooltip verb="erzählen" meaning="anlatmak">
              erzählt
            </VerbTooltip>{" "}
            ihm Geschichten von ihren Reisen. Paul{" "}
            <VerbTooltip verb="hören" meaning="dinlemek">
              hat gehört
            </VerbTooltip>{" "}
            aufmerksam zu und{" "}
            <VerbTooltip verb="stellen" meaning="soru sormak">
              gestellt hatte
            </VerbTooltip>{" "}
            viele Fragen.
          </p>

          <p>
            Die Familie{" "}
            <VerbTooltip verb="wachsen" meaning="büyümek">
              ist gewachsen
            </VerbTooltip>{" "}
            weiter. Maria{" "}
            <VerbTooltip verb="gebären" meaning="doğurmak">
              hat geboren
            </VerbTooltip>{" "}
            noch zwei Kinder: Anna und Tom. Das Haus{" "}
            <VerbTooltip verb="füllen" meaning="doldurmak">
              hatte sich gefüllt
            </VerbTooltip>{" "}
            mit Kinderlachen und{" "}
            <VerbTooltip verb="werden" meaning="olmak">
              geworden war
            </VerbTooltip>{" "}
            zu einem wahren Zuhause.
          </p>

          <p>
            Andreas{" "}
            <VerbTooltip verb="aufsteigen" meaning="terfi etmek">
              ist aufgestiegen
            </VerbTooltip>{" "}
            in seinem Beruf und{" "}
            <VerbTooltip verb="werden" meaning="olmak">
              geworden war
            </VerbTooltip>{" "}
            Chefarzt. Er{" "}
            <VerbTooltip verb="arbeiten" meaning="çalışmak">
              hatte gearbeitet
            </VerbTooltip>{" "}
            hart dafür und{" "}
            <VerbTooltip verb="opfern" meaning="feda etmek">
              geopfert
            </VerbTooltip>{" "}
            viel Zeit. Manchmal{" "}
            <VerbTooltip verb="kommen" meaning="gelmek">
              ist er gekommen
            </VerbTooltip>{" "}
            spät nach Hause, aber{" "}
            <VerbTooltip verb="versuchen" meaning="denemek">
              versucht hatte
            </VerbTooltip>{" "}
            er immer, Zeit für die Familie zu finden.
          </p>

          <p>
            Die Kinder{" "}
            <VerbTooltip verb="gehen" meaning="gitmek">
              sind gegangen
            </VerbTooltip>{" "}
            zur Schule und{" "}
            <VerbTooltip verb="lernen" meaning="öğrenmek">
              gelernt haben
            </VerbTooltip>{" "}
            sie fleißig. Paul{" "}
            <VerbTooltip verb="interessieren" meaning="ilgisini çekmek">
              hat sich interessiert
            </VerbTooltip>{" "}
            für Naturwissenschaften, Anna{" "}
            <VerbTooltip verb="lieben" meaning="sevmek">
              hat geliebt
            </VerbTooltip>{" "}
            Musik und Tom{" "}
            <VerbTooltip verb="spielen" meaning="oynamak">
              gespielt hatte
            </VerbTooltip>{" "}
            leidenschaftlich Fußball.
          </p>

          <p>
            In den Ferien{" "}
            <VerbTooltip verb="reisen" meaning="seyahat etmek">
              sind sie gereist
            </VerbTooltip>{" "}
            oft zusammen. Sie{" "}
            <VerbTooltip verb="besuchen" meaning="ziyaret etmek">
              haben besucht
            </VerbTooltip>{" "}
            verschiedene Länder und{" "}
            <VerbTooltip verb="kennenlernen" meaning="tanışmak">
              kennengelernt hatten
            </VerbTooltip>{" "}
            verschiedene Kulturen. Die Kinder{" "}
            <VerbTooltip verb="sammeln" meaning="toplamak">
              haben gesammelt
            </VerbTooltip>{" "}
            Erinnerungen aus jedem Land.
          </p>

          <p>
            Als die Kinder älter wurden,{" "}
            <VerbTooltip verb="beginnen" meaning="başlamak">
              haben sie begonnen
            </VerbTooltip>{" "}
            ihre eigenen Wege zu gehen. Paul{" "}
            <VerbTooltip verb="studieren" meaning="okumak">
              hat studiert
            </VerbTooltip>{" "}
            Medizin wie sein Vater, Anna{" "}
            <VerbTooltip verb="werden" meaning="olmak">
              ist geworden
            </VerbTooltip>{" "}
            Musikerin und Tom{" "}
            <VerbTooltip verb="entscheiden" meaning="karar vermek">
              hat sich entschieden
            </VerbTooltip>{" "}
            für eine Laufbahn als Sportlehrer.
          </p>

          <p>
            Maria{" "}
            <VerbTooltip verb="zurückblicken" meaning="geriye bakmak">
              hat zurückgeblickt
            </VerbTooltip>{" "}
            auf ihr Leben und{" "}
            <VerbTooltip verb="erkennen" meaning="fark etmek">
              erkannt
            </VerbTooltip>
            , dass alle ihre Träume{" "}
            <VerbTooltip verb="erfüllen" meaning="gerçekleştirmek">
              erfüllt worden waren
            </VerbTooltip>
            . Sie{" "}
            <VerbTooltip verb="reisen" meaning="seyahat etmek">
              hatte gereist
            </VerbTooltip>
            ,{" "}
            <VerbTooltip verb="lieben" meaning="sevmek">
              geliebt
            </VerbTooltip>{" "}
            und eine wunderbare Familie{" "}
            <VerbTooltip verb="aufbauen" meaning="kurmak">
              aufgebaut
            </VerbTooltip>
            .
          </p>

          <p>
            Heute{" "}
            <VerbTooltip verb="sitzen" meaning="oturmak">
              sitzt sie
            </VerbTooltip>{" "}
            in ihrem Garten und{" "}
            <VerbTooltip verb="beobachten" meaning="gözlemlemek">
              beobachtet
            </VerbTooltip>{" "}
            ihre Enkelkinder beim Spielen. Sie{" "}
            <VerbTooltip verb="lächeln" meaning="gülümsemek">
              lächelt
            </VerbTooltip>{" "}
            und{" "}
            <VerbTooltip verb="denken" meaning="düşünmek">
              denkt
            </VerbTooltip>{" "}
            daran, wie schnell die Zeit{" "}
            <VerbTooltip verb="vergehen" meaning="geçmek">
              vergangen ist
            </VerbTooltip>
            . Das Leben{" "}
            <VerbTooltip verb="schenken" meaning="hediye etmek">
              hat geschenkt
            </VerbTooltip>{" "}
            ihr alles, was sie sich je{" "}
            <VerbTooltip verb="wünschen" meaning="dilemek">
              gewünscht hatte
            </VerbTooltip>
            .
          </p>

          <p>
            Manchmal{" "}
            <VerbTooltip verb="erinnern" meaning="hatırlamak">
              erinnert sie sich
            </VerbTooltip>{" "}
            an jene Zeit, als sie jung war und{" "}
            <VerbTooltip verb="träumen" meaning="rüya görmek">
              geträumt hatte
            </VerbTooltip>{" "}
            von der großen weiten Welt. Sie{" "}
            <VerbTooltip verb="verstehen" meaning="anlamak">
              hat verstanden
            </VerbTooltip>
            , dass das größte Abenteuer das Leben selbst ist, und dass jeder Tag
            neue Möglichkeiten{" "}
            <VerbTooltip verb="bieten" meaning="sunmak">
              bietet
            </VerbTooltip>
            .
          </p>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">
            Nasıl Kullanılır:
          </h3>
          <p className="text-blue-700">
            Koyu mavi renkli kelimeler Perfect ve Plusquamperfekt zamanında
            kullanılan fiillerdir. Farenizi bu kelimelerin üzerine
            getirdiğinizde fiilin yalın hali ve Türkçe anlamını görebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GermanStory;
