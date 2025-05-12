import React from "react";

const Tooltip = ({ children, tooltipText }) => (
  <span className="relative group">
    {children}
    <span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 bottom-full left-1/2 transform -translate-x-1/2 mb-1 z-10">
      {tooltipText}
    </span>
  </span>
);

const Edat2 = () => {
  const paragraphs = [
    <p key={0} className="mb-4 bg-amber-50">
      Als Lisa an diesem Morgen{" "}
      <Tooltip tooltipText="uyandı">
        <span className="text-red-600 font-bold">aufwachte</span>
      </Tooltip>
      ,{" "}
      <Tooltip tooltipText="düşündü">
        <span className="text-blue-600 font-bold">dachte sie an</span>
      </Tooltip>{" "}
      den wichtigen Tag, der vor ihr lag. Sie{" "}
      <Tooltip tooltipText="hazırlandı">
        <span className="text-red-600 font-bold">bereitete sich auf</span>
      </Tooltip>{" "}
      das entscheidende Vorstellungsgespräch vor und{" "}
      <Tooltip tooltipText="odaklandı">
        <span className="text-blue-600 font-bold">konzentrierte sich auf</span>
      </Tooltip>{" "}
      ihre Stärken. Lisa{" "}
      <Tooltip tooltipText="karar verdi">
        <span className="text-red-600 font-bold">
          hatte sich entschlossen zu
        </span>
      </Tooltip>{" "}
      einem Berufswechsel, nachdem sie zehn Jahre lang als Ingenieurin
      gearbeitet hatte. Sie{" "}
      <Tooltip tooltipText="ilgi duydu">
        <span className="text-blue-600 font-bold">interessierte sich für</span>
      </Tooltip>{" "}
      eine Position als Projektmanagerin in einem renommierten Unternehmen und{" "}
      <Tooltip tooltipText="başvurdu">
        <span className="text-red-600 font-bold">hatte sich beworben bei</span>
      </Tooltip>{" "}
      mehreren Firmen.
    </p>,
    <p key={1} className="mb-4">
      Während sie frühstückte,{" "}
      <Tooltip tooltipText="hatırladı">
        <span className="text-blue-600 font-bold">erinnerte sie sich an</span>
      </Tooltip>{" "}
      den Rat ihres ehemaligen Chefs: "Du kannst dich immer{" "}
      <Tooltip tooltipText="güvenmek">
        <span className="text-red-600 font-bold">verlassen auf</span>
      </Tooltip>{" "}
      deine Erfahrung und Kompetenz." Sie{" "}
      <Tooltip tooltipText="umut etti">
        <span className="text-blue-600 font-bold">hoffte auf</span>
      </Tooltip>{" "}
      einen erfolgreichen Tag, obwohl sie{" "}
      <Tooltip tooltipText="şüphe etti">
        <span className="text-red-600 font-bold">zweifelte an</span>
      </Tooltip>{" "}
      ihren Chancen. Der Kaffee{" "}
      <Tooltip tooltipText="kokusu ... gibiydi">
        <span className="text-blue-600 font-bold">roch nach</span>
      </Tooltip>{" "}
      frisch gemahlenen Bohnen und{" "}
      <Tooltip tooltipText="tadı ... gibiydi">
        <span className="text-red-600 font-bold">schmeckte nach</span>
      </Tooltip>{" "}
      Haselnuss – ihr Lieblingsaroma.
    </p>,
    <p key={2} className="mb-4">
      Lisa{" "}
      <Tooltip tooltipText="korudu">
        <span className="text-blue-600 font-bold">schützte sich vor</span>
      </Tooltip>{" "}
      dem Regen mit einem großen Schirm und machte sich auf den Weg zur
      Bushaltestelle. Dort{" "}
      <Tooltip tooltipText="bekledi">
        <span className="text-red-600 font-bold">wartete sie auf</span>
      </Tooltip>{" "}
      den Bus, der sie ins Stadtzentrum bringen sollte. Eine ältere Dame{" "}
      <Tooltip tooltipText="sordu">
        <span className="text-blue-600 font-bold">fragte nach</span>
      </Tooltip>{" "}
      der richtigen Linie zum Krankenhaus, und Lisa{" "}
      <Tooltip tooltipText="yardım etti">
        <span className="text-red-600 font-bold">half ihr bei</span>
      </Tooltip>{" "}
      der Orientierung auf dem komplizierten Fahrplan.
    </p>,
    <p key={3} className="mb-4">
      Im Bus{" "}
      <Tooltip tooltipText="sohbet etti">
        <span className="text-blue-600 font-bold">unterhielt sie sich mit</span>
      </Tooltip>{" "}
      einem Herrn, der zufälligerweise in der Firma arbeitete,{" "}
      <Tooltip tooltipText="...'de">
        <span className="text-red-600 font-bold">bei der</span>
      </Tooltip>{" "}
      sie sich{" "}
      <Tooltip tooltipText="başvurmuştu">
        <span className="text-blue-600 font-bold">beworben hatte um</span>
      </Tooltip>{" "}
      die Stelle. Sie{" "}
      <Tooltip tooltipText="konuştular">
        <span className="text-red-600 font-bold">sprachen über</span>
      </Tooltip>{" "}
      die Unternehmenskultur und die Herausforderungen der Branche. Der Mann{" "}
      <Tooltip tooltipText="rapor etti">
        <span className="text-blue-600 font-bold">berichtete über</span>
      </Tooltip>{" "}
      die aktuellen Projekte und{" "}
      <Tooltip tooltipText="bahsetti">
        <span className="text-red-600 font-bold">erzählte von</span>
      </Tooltip>{" "}
      seinen eigenen Erfahrungen. Lisa{" "}
      <Tooltip tooltipText="teşekkür etti">
        <span className="text-blue-600 font-bold">bedankte sich für</span>
      </Tooltip>{" "}
      die wertvollen Informationen und{" "}
      <Tooltip tooltipText="teşekkür etti">
        <span className="text-red-600 font-bold">bedankte sich bei</span>
      </Tooltip>{" "}
      ihm für seine Zeit. Sie{" "}
      <Tooltip tooltipText="dört gözle bekledi">
        <span className="text-blue-600 font-bold">freute sich auf</span>
      </Tooltip>{" "}
      das bevorstehende Gespräch noch mehr.
    </p>,
    <p key={4} className="mb-4">
      Als sie am Firmengebäude ankam,{" "}
      <Tooltip tooltipText="dikkat etti">
        <span className="text-red-600 font-bold">achtete sie auf</span>
      </Tooltip>{" "}
      ihr Erscheinungsbild und atmete tief durch. Der Empfangschef{" "}
      <Tooltip tooltipText="rica etti">
        <span className="text-blue-600 font-bold">bat um</span>
      </Tooltip>{" "}
      ihren Ausweis. Während sie wartete,{" "}
      <Tooltip tooltipText="bilgi edindi">
        <span className="text-red-600 font-bold">
          informierte sie sich über
        </span>
      </Tooltip>{" "}
      das Unternehmen durch die ausliegenden Broschüren. Sie wusste, dass das
      Gebäude{" "}
      <Tooltip tooltipText="...'dan oluşuyordu">
        <span className="text-blue-600 font-bold">bestand aus</span>
      </Tooltip>{" "}
      umweltfreundlichen Materialien.
    </p>,
    <p key={5} className="mb-4">
      Die Personalchefin, Frau Schmidt, holte sie ab und führte Lisa in einen
      hellen Konferenzraum, wo bereits zwei weitere Personen{" "}
      <Tooltip tooltipText="beklediler">
        <span className="text-red-600 font-bold">warteten auf</span>
      </Tooltip>{" "}
      sie. Das Gespräch{" "}
      <Tooltip tooltipText="başladı">
        <span className="text-blue-600 font-bold">begann mit</span>
      </Tooltip>{" "}
      einer kurzen Vorstellung. Lisa{" "}
      <Tooltip tooltipText="çaba gösterdi">
        <span className="text-red-600 font-bold">bemühte sich um</span>
      </Tooltip>{" "}
      einen guten ersten Eindruck.
    </p>,
    <p key={6} className="mb-4">
      "Ihr Lebenslauf{" "}
      <Tooltip tooltipText="...'ı gösterir">
        <span className="text-blue-600 font-bold">zeugt von</span>
      </Tooltip>{" "}
      großer Erfahrung", sagte Herr Weber, der Abteilungsleiter. "Aber wir{" "}
      <Tooltip tooltipText="şüphe etmek">
        <span className="text-red-600 font-bold">zweifeln an</span>
      </Tooltip>{" "}
      Ihrer Entscheidung, die technische Laufbahn zu verlassen. Können Sie uns
      erklären, warum Sie sich{" "}
      <Tooltip tooltipText="karar verdiler">
        <span className="text-blue-600 font-bold">entschieden haben für</span>
      </Tooltip>{" "}
      diesen Wechsel?"
    </p>,
    <p key={7} className="mb-4">
      Lisa{" "}
      <Tooltip tooltipText="yanıtladı">
        <span className="text-red-600 font-bold">antwortete auf</span>
      </Tooltip>{" "}
      diese Frage mit Überzeugung. "Alles in meinem Leben{" "}
      <Tooltip tooltipText="...'a bağlı">
        <span className="text-blue-600 font-bold">hängt ab von</span>
      </Tooltip>{" "}
      Veränderungen und neuen Herausforderungen", erklärte sie. "Ich möchte mich
      nicht{" "}
      <Tooltip tooltipText="ayrılmak">
        <span className="text-red-600 font-bold">trennen von</span>
      </Tooltip>{" "}
      der technischen Arbeit, sondern meine Kenntnisse erweitern."
    </p>,
    <p key={8} className="mb-4">
      Die dritte Person im Raum, ein älterer Herr namens Dr. Müller,{" "}
      <Tooltip tooltipText="mücadele etti">
        <span className="text-blue-600 font-bold">kämpfte für</span>
      </Tooltip>{" "}
      innovative Ideen im Unternehmen und{" "}
      <Tooltip tooltipText="sordu">
        <span className="text-red-600 font-bold">erkundigte sich nach</span>
      </Tooltip>{" "}
      Lisas Vision für die Zukunft des Projektmanagements. Sie{" "}
      <Tooltip tooltipText="...'ı kastetmedi">
        <span className="text-blue-600 font-bold">ging um</span>
      </Tooltip>{" "}
      die direkte Antwort nicht herum und{" "}
      <Tooltip tooltipText="ilgilendi">
        <span className="text-red-600 font-bold">kümmerte sich um</span>
      </Tooltip>{" "}
      jede Frage mit Sorgfalt. Sie{" "}
      <Tooltip tooltipText="...'dan biriydi">
        <span className="text-blue-600 font-bold">gehörte zu</span>
      </Tooltip>{" "}
      den Menschen, die immer ehrlich antworten.
    </p>,
    <p key={9} className="mb-4">
      Nach einer Stunde intensiver Diskussion{" "}
      <Tooltip tooltipText="veda etti">
        <span className="text-red-600 font-bold">
          verabschiedete sich Lisa von
        </span>
      </Tooltip>{" "}
      den Interviewern. Sie{" "}
      <Tooltip tooltipText="terk etti">
        <span className="text-blue-600 font-bold">verließ</span>
      </Tooltip>{" "}
      das Gebäude mit gemischten Gefühlen.{" "}
      <Tooltip tooltipText="... izlenimi uyandırdı">
        <span className="text-red-600 font-bold">Kam sie auf</span>
      </Tooltip>{" "}
      einen guten Eindruck? War ihre Präsentation stark genug? Sie{" "}
      <Tooltip tooltipText="sinirlendi">
        <span className="text-blue-600 font-bold">ärgerte sich über</span>
      </Tooltip>{" "}
      ein paar kleine Fehler, die sie gemacht hatte.
    </p>,
    <p key={10} className="mb-4">
      Auf dem Heimweg{" "}
      <Tooltip tooltipText="telefonda konuştu">
        <span className="text-red-600 font-bold">telefonierte sie mit</span>
      </Tooltip>{" "}
      ihrer besten Freundin Julia und{" "}
      <Tooltip tooltipText="anlattı">
        <span className="text-blue-600 font-bold">erzählte über</span>
      </Tooltip>{" "}
      das Vorstellungsgespräch. Julia{" "}
      <Tooltip tooltipText="tebrik etti">
        <span className="text-red-600 font-bold">gratulierte zu</span>
      </Tooltip>{" "}
      ihrem Mut und versuchte, sie aufzumuntern. "Du solltest dich nicht{" "}
      <Tooltip tooltipText="üzülmek">
        <span className="text-blue-600 font-bold">aufregen über</span>
      </Tooltip>{" "}
      Kleinigkeiten. Das Wichtigste ist, dass du authentisch warst", sagte sie.
      Sie{" "}
      <Tooltip tooltipText="tartışmak">
        <span className="text-red-600 font-bold">diskutierten über</span>
      </Tooltip>{" "}
      die Chancen, die Stelle zu bekommen.
    </p>,
    <p key={11} className="mb-4">
      Zuhause{" "}
      <Tooltip tooltipText="uğraştı">
        <span className="text-blue-600 font-bold">
          beschäftigte sich Lisa mit
        </span>
      </Tooltip>{" "}
      ihrem Hobby, der Malerei, um sich{" "}
      <Tooltip tooltipText="dinlenmek">
        <span className="text-red-600 font-bold">zu erholen von</span>
      </Tooltip>{" "}
      dem anstrengenden Tag. Die Kunst half ihr, abzuschalten und nicht ständig{" "}
      <Tooltip tooltipText="düşünmek">
        <span className="text-blue-600 font-bold">nachzudenken über</span>
      </Tooltip>{" "}
      das Vorstellungsgespräch. Als ihr Vater anrief,{" "}
      <Tooltip tooltipText="pek önemsemedi">
        <span className="text-red-600 font-bold">hielt sie nicht viel von</span>
      </Tooltip>{" "}
      seinen Ratschlägen, sich zu entspannen, denn sie war zu aufgeregt.
    </p>,
    <p key={12} className="mb-4">
      Drei Tage später{" "}
      <Tooltip tooltipText="...'dan haber aldı">
        <span className="text-blue-600 font-bold">hörte sie von</span>
      </Tooltip>{" "}
      der Firma. Die E-Mail{" "}
      <Tooltip tooltipText="atıfta bulundu">
        <span className="text-red-600 font-bold">bezog sich auf</span>
      </Tooltip>{" "}
      ihr Vorstellungsgespräch und enthielt eine überraschende Nachricht: Sie
      hatten eine neue Position für sie geschaffen, die sowohl technische
      Expertise als auch Projektmanagement umfasste. Lisa konnte ihr Glück kaum
      fassen!
    </p>,
    <p key={13} className="mb-4">
      Sie{" "}
      <Tooltip tooltipText="davet etti">
        <span className="text-blue-600 font-bold">lud ihre Freunde ein zu</span>
      </Tooltip>{" "}
      einer spontanen Feier und{" "}
      <Tooltip tooltipText="sevindi">
        <span className="text-red-600 font-bold">freute sich über</span>
      </Tooltip>{" "}
      diese unerwartete Wendung. Wenn sie{" "}
      <Tooltip tooltipText="düşündü">
        <span className="text-blue-600 font-bold">an Erfolg dachte</span>
      </Tooltip>
      , hatte sie immer eine traditionelle Karriere im Sinn gehabt, aber jetzt{" "}
      <Tooltip tooltipText="...'e açıktı">
        <span className="text-red-600 font-bold">war sie für</span>
      </Tooltip>{" "}
      neue Wege offen. Ihre Familie{" "}
      <Tooltip tooltipText="gurur duydu">
        <span className="text-blue-600 font-bold">war stolz auf</span>
      </Tooltip>{" "}
      sie und{" "}
      <Tooltip tooltipText="destekledi">
        <span className="text-red-600 font-bold">unterstützte sie bei</span>
      </Tooltip>{" "}
      allen Entscheidungen.
    </p>,
    <p key={14} className="mb-4">
      Am ersten Arbeitstag{" "}
      <Tooltip tooltipText="buluştu">
        <span className="text-blue-600 font-bold">traf sie sich mit</span>
      </Tooltip>{" "}
      ihrem neuen Team. Sie{" "}
      <Tooltip tooltipText="kendini tanıttı">
        <span className="text-red-600 font-bold">stellte sich vor bei</span>
      </Tooltip>{" "}
      den Kollegen und{" "}
      <Tooltip tooltipText="katıldı">
        <span className="text-blue-600 font-bold">nahm teil an</span>
      </Tooltip>{" "}
      der Morgenbesprechung. Es{" "}
      <Tooltip tooltipText="... ile ilgiliydi">
        <span className="text-red-600 font-bold">ging um</span>
      </Tooltip>{" "}
      ein neues Projekt, das gerade{" "}
      <Tooltip tooltipText="başladı">
        <span className="text-blue-600 font-bold">anfing mit</span>
      </Tooltip>{" "}
      der Konzeptphase.
    </p>,
    <p key={15} className="mb-4">
      Ein Kollege namens Thomas{" "}
      <Tooltip tooltipText="çok anlar">
        <span className="text-red-600 font-bold">verstand viel von</span>
      </Tooltip>{" "}
      technischen Details und{" "}
      <Tooltip tooltipText="iyi anlaştı">
        <span className="text-blue-600 font-bold">verstand sich gut mit</span>
      </Tooltip>{" "}
      Lisa auf Anhieb. Er{" "}
      <Tooltip tooltipText="engelledi">
        <span className="text-red-600 font-bold">hinderte sie an</span>
      </Tooltip>{" "}
      einigen Fehlern, die sie als Neuling hätte machen können. Lisa{" "}
      <Tooltip tooltipText="katıldı">
        <span className="text-blue-600 font-bold">beteiligte sich an</span>
      </Tooltip>{" "}
      allen wichtigen Diskussionen und{" "}
      <Tooltip tooltipText="karşı çıktı">
        <span className="text-red-600 font-bold">protestierte gegen</span>
      </Tooltip>
      {}
      ineffiziente Prozesse.
    </p>,
    <p key={16} className="mb-4">
      Nach einigen Wochen{" "}
      <Tooltip tooltipText="şok oldu">
        <span className="text-blue-600 font-bold">erschrak sie über</span>
      </Tooltip>{" "}
      die Menge an Arbeit, die auf sie zukam, aber sie{" "}
      <Tooltip tooltipText="ikna etti">
        <span className="text-red-600 font-bold">
          überzeugte ihre Vorgesetzten zu
        </span>
      </Tooltip>{" "}
      einer besseren Ressourcenverteilung. Das Team{" "}
      <Tooltip tooltipText="bekledi">
        <span className="text-blue-600 font-bold">rechnete mit</span>
      </Tooltip>{" "}
      Schwierigkeiten während der Umstellung, aber Lisa{" "}
      <Tooltip tooltipText="sağladı">
        <span className="text-red-600 font-bold">sorgte für</span>
      </Tooltip>{" "}
      einen reibungslosen Ablauf.
    </p>,
    <p key={17} className="mb-4">
      In einer wichtigen Sitzung{" "}
      <Tooltip tooltipText="yazdı">
        <span className="text-blue-600 font-bold">schrieb sie an</span>
      </Tooltip>{" "}
      einem neuen Konzept, das die Arbeitsabläufe verbessern sollte. Als einige
      Kollegen skeptisch waren,{" "}
      <Tooltip tooltipText="... olarak gördü">
        <span className="text-red-600 font-bold">hielt sie für</span>
      </Tooltip>{" "}
      notwendig, ihre Ideen detaillierter zu erklären. Sie{" "}
      <Tooltip tooltipText="ısrar ettiler">
        <span className="text-blue-600 font-bold">bestanden auf</span>
      </Tooltip>{" "}
      traditionellen Methoden, aber Lisa konnte sie überzeugen.
    </p>,
    <p key={18} className="mb-4">
      Ein Jahr später{" "}
      <Tooltip tooltipText="şaşırdı">
        <span className="text-red-600 font-bold">wunderte sich Lisa über</span>
      </Tooltip>{" "}
      ihren eigenen Erfolg. Sie hatte nicht nur ihre Position gefestigt, sondern
      war auch{" "}
      <Tooltip tooltipText="... oldu">
        <span className="text-blue-600 font-bold">geworden zu</span>
      </Tooltip>{" "}
      einer wichtigen Führungspersönlichkeit im Unternehmen. Sie{" "}
      <Tooltip tooltipText="biliyordu">
        <span className="text-red-600 font-bold">wusste von</span>
      </Tooltip>{" "}
      den Herausforderungen, die noch vor ihr lagen, aber sie war bereit, sich
      ihnen zu stellen.
    </p>,
    <p key={19} className="mb-4">
      Als ein Journalist für die Firmenzeitschrift{" "}
      <Tooltip tooltipText="görüştü">
        <span className="text-blue-600 font-bold">sie interviewte</span>
      </Tooltip>
      ,{" "}
      <Tooltip tooltipText="bahsetti">
        <span className="text-red-600 font-bold">redete er von</span>
      </Tooltip>{" "}
      ihrem beeindruckenden Werdegang. Lisa{" "}
      <Tooltip tooltipText="konuştu">
        <span className="text-blue-600 font-bold">redete über</span>
      </Tooltip>{" "}
      ihre Erfahrungen und{" "}
      <Tooltip tooltipText="vurguladı">
        <span className="text-red-600 font-bold">betonte</span>
      </Tooltip>
      , wie wichtig es sei, auf seine Intuition zu hören. Der Artikel{" "}
      <Tooltip tooltipText="...'dan bahsediyordu">
        <span className="text-blue-600 font-bold">handelte von</span>
      </Tooltip>{" "}
      ihrer Karriere und inspirierte viele Mitarbeiter.
    </p>,
    <p key={20} className="mb-4">
      Lisa{" "}
      <Tooltip tooltipText="inandı">
        <span className="text-red-600 font-bold">glaubte an</span>
      </Tooltip>{" "}
      ihre Fähigkeiten und{" "}
      <Tooltip tooltipText="güvendi">
        <span className="text-blue-600 font-bold">vertraute auf</span>
      </Tooltip>{" "}
      ihre Intuition. Als ein neues Teammitglied{" "}
      <Tooltip tooltipText="şikayet etti">
        <span className="text-red-600 font-bold">klagte über</span>
      </Tooltip>{" "}
      die hohe Arbeitsbelastung,{" "}
      <Tooltip tooltipText="yardım etti">
        <span className="text-blue-600 font-bold">half sie ihm bei</span>
      </Tooltip>{" "}
      der Prioritätensetzung. Sie{" "}
      <Tooltip tooltipText="uyardı">
        <span className="text-red-600 font-bold">warnte ihn vor</span>
      </Tooltip>{" "}
      Burnout und gab Tipps zur Work-Life-Balance.
    </p>,
    <p key={21} className="mb-4">
      Nach zwei Jahren{" "}
      <Tooltip tooltipText="...'dan muzdarip değildi">
        <span className="text-blue-600 font-bold">litt sie nicht an</span>
      </Tooltip>{" "}
      Selbstzweifeln mehr und{" "}
      <Tooltip tooltipText="...'dan muzdarip değildi">
        <span className="text-red-600 font-bold">litt nicht unter</span>
      </Tooltip>{" "}
      dem Druck, perfekt sein zu müssen. Sie{" "}
      <Tooltip tooltipText="dikkat eder">
        <span className="text-blue-600 font-bold">achtet auf</span>
      </Tooltip>{" "}
      ihre Bedürfnisse und{" "}
      <Tooltip tooltipText="dikkat eder">
        <span className="text-red-600 font-bold">passt auf</span>
      </Tooltip>{" "}
      ihre Gesundheit auf. In Meetings{" "}
      <Tooltip tooltipText="güler">
        <span className="text-blue-600 font-bold">lacht sie über</span>
      </Tooltip>{" "}
      kleine Missgeschicke und{" "}
      <Tooltip tooltipText="kabul eder">
        <span className="text-red-600 font-bold">erkennt an</span>
      </Tooltip>
      , dass Fehler zum Lernprozess gehören.
    </p>,
    <p key={22} className="mb-4">
      Als sie eine Fortbildung{" "}
      <Tooltip tooltipText="yönetti">
        <span className="text-blue-600 font-bold">leitete</span>
      </Tooltip>
      ,{" "}
      <Tooltip tooltipText="unutmadı">
        <span className="text-red-600 font-bold">vergaß sie nicht auf</span>
      </Tooltip>{" "}
      die Bedürfnisse der verschiedenen Teilnehmer einzugehen. Sie{" "}
      <Tooltip tooltipText="karşı değildi">
        <span className="text-blue-600 font-bold">war nicht gegen</span>
      </Tooltip>{" "}
      verschiedene Lernmethoden, sondern förderte Vielfalt. Nach der Schulung{" "}
      <Tooltip tooltipText="tartışmaz">
        <span className="text-red-600 font-bold">streitet sie mit</span>
      </Tooltip>{" "}
      einem Kollegen nicht, wenn dieser anderer Meinung war, sondern{" "}
      <Tooltip tooltipText="tartışır">
        <span className="text-blue-600 font-bold">streitet über</span>
      </Tooltip>{" "}
      sachliche Themen konstruktiv.
    </p>,
    <p key={23} className="mb-4">
      In ihrer Freizeit{" "}
      <Tooltip tooltipText="düşünür">
        <span className="text-red-600 font-bold">denkt sie nach über</span>
      </Tooltip>{" "}
      ihre berufliche Entwicklung und wie sie anderen helfen kann. Sie engagiert
      sich für ein Mentorenprogramm und{" "}
      <Tooltip tooltipText="...'dan ölmez">
        <span className="text-blue-600 font-bold">stirbt an</span>
      </Tooltip>{" "}
      keinen Vorurteilen, sondern bleibt offen für neue Ideen.
    </p>,
    <p key={24} className="mb-4">
      Wenn neue Projekte{" "}
      <Tooltip tooltipText="...'a varmak">
        <span className="text-red-600 font-bold">ankommen auf</span>
      </Tooltip>{" "}
      ihrer Abteilung, ist Lisa immer die Erste, die Verantwortung übernimmt.
      Sie hat gelernt, wie man effektiv{" "}
      <Tooltip tooltipText="vazgeçer">
        <span className="text-blue-600 font-bold">aufhört mit</span>
      </Tooltip>{" "}
      nicht funktionierenden Strategien und neue Wege findet. Ihr Team{" "}
      <Tooltip tooltipText="alışır">
        <span className="text-red-600 font-bold">gewöhnt sich an</span>
      </Tooltip>{" "}
      ihren dynamischen Führungsstil.
    </p>,
    <p key={25} className="mb-4">
      In schwierigen Situationen{" "}
      <Tooltip tooltipText="özür diler">
        <span className="text-blue-600 font-bold">
          entschuldigt sie sich bei
        </span>
      </Tooltip>{" "}
      den Betroffenen für Fehler und{" "}
      <Tooltip tooltipText="özür diler">
        <span className="text-red-600 font-bold">entschuldigt sich für</span>
      </Tooltip>{" "}
      Verzögerungen oder Missverständnisse. Sie steht zu ihren Worten und Taten.
    </p>,
    <p key={26} className="mb-4">
      Bei einem Firmenausflug{" "}
      <Tooltip tooltipText="... ile buluştu">
        <span className="text-blue-600 font-bold">
          verabredete sie sich mit
        </span>
      </Tooltip>{" "}
      Kollegen zum Wandern und nutzte die Gelegenheit, sie besser
      kennenzulernen. Als ein Gewitter aufzog,{" "}
      <Tooltip tooltipText="konuştu">
        <span className="text-red-600 font-bold">sprach sie mit</span>
      </Tooltip>{" "}
      der Gruppe über Sicherheitsmaßnahmen und traf vernünftige Entscheidungen.
    </p>,
    <p key={27} className="mb-4">
      Wenn Lisa heute auf ihren Weg zurückblickt, ist sie dankbar für alle
      Erfahrungen. Sie hat sich{" "}
      <Tooltip tooltipText="...'a aşık">
        <span className="text-blue-600 font-bold">verliebt in</span>
      </Tooltip>{" "}
      ihren Beruf und{" "}
      <Tooltip tooltipText="düşünür">
        <span className="text-red-600 font-bold">denkt oft an</span>
      </Tooltip>{" "}
      die Anfänge ihrer Karriere zurück.
    </p>,
    <p key={28} className="mb-4">
      Als ihr Chef sie fragte, ob sie bereit wäre, eine Niederlassung im Ausland
      zu leiten,{" "}
      <Tooltip tooltipText="uzun süre düşündü">
        <span className="text-blue-600 font-bold">überlegte sie lange</span>
      </Tooltip>
      . Diese Entscheidung würde ihr ganzes Leben verändern. Sie wusste, sie
      müsste sich von vielen Freunden und Kollegen{" "}
      <Tooltip tooltipText="veda etmek">
        <span className="text-red-600 font-bold">verabschieden von</span>
      </Tooltip>
      , aber gleichzeitig würde es eine einmalige Chance sein.
    </p>,
    <p key={29} className="mb-4">
      Nach reiflicher Überlegung{" "}
      <Tooltip tooltipText="karar verdi">
        <span className="text-blue-600 font-bold">entschied sie sich für</span>
      </Tooltip>{" "}
      das Angebot und begann, die Umzugsvorbereitungen zu treffen. Ihre Familie{" "}
      <Tooltip tooltipText="tartıştı">
        <span className="text-red-600 font-bold">unterhielt sich über</span>
      </Tooltip>{" "}
      die Vor- und Nachteile dieser Entscheidung, unterstützte sie aber
      letztendlich.
    </p>,
    <p key={30} className="mb-4">
      Bei der Abschiedsfeier{" "}
      <Tooltip tooltipText="teşekkür etti">
        <span className="text-blue-600 font-bold">
          dankten ihr viele Kollegen für
        </span>
      </Tooltip>{" "}
      ihre Unterstützung und ihren Einsatz. Lisa{" "}
      <Tooltip tooltipText="yazdı">
        <span className="text-red-600 font-bold">schrieb an</span>
      </Tooltip>{" "}
      jeden eine persönliche Dankeskarte.
    </p>,
    <p key={31} className="mb-4">
      In ihrem neuen Zuhause angekommen, musste Lisa sich erst einmal an die
      neue Kultur gewöhnen. Sie{" "}
      <Tooltip tooltipText="başladı">
        <span className="text-blue-600 font-bold">fing an mit</span>
      </Tooltip>{" "}
      Sprachkursen und lokalen Traditionen. Manchmal{" "}
      <Tooltip tooltipText="...'a bağlıydı">
        <span className="text-red-600 font-bold">kam es an auf</span>
      </Tooltip>{" "}
      kleine Gesten, um Brücken zu bauen.
    </p>,
    <p key={32} className="mb-4">
      Lisa ist ein Beispiel dafür, dass Mut und Durchhaltevermögen zum Erfolg
      führen können. Ihre Geschichte zeigt, dass es wichtig ist, auf sich selbst
      zu vertrauen und manchmal Risiken einzugehen. Am Ende{" "}
      <Tooltip tooltipText="...'a bağlıdır">
        <span className="text-blue-600 font-bold">kommt es an auf</span>
      </Tooltip>{" "}
      den Glauben an sich selbst und die Bereitschaft, Herausforderungen
      anzunehmen.
    </p>,
    <p key={33} className="mb-4">
      Wenn jemand sie heute fragt, ob sie zufrieden ist mit ihrer Entscheidung,
      sagt sie: "Mein Leben{" "}
      <Tooltip tooltipText="...'dan oluşur">
        <span className="text-red-600 font-bold">besteht aus</span>
      </Tooltip>{" "}
      Entscheidungen, und ich habe gelernt, dass manchmal der schwierigere Weg
      der richtige ist. Ich würde es jederzeit wieder tun."
    </p>,
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 font-sans leading-relaxed bg-amber-50">
      <h1 className="text-3xl font-bold text-center mb-8">
        Eine unerwartete Wendung
      </h1>
      {paragraphs.map((paragraph, index) => (
        <div key={index} className="paragraph">
          {paragraph}
        </div>
      ))}
    </div>
  );
};

export default Edat2;
