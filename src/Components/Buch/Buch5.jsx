import { useState } from "react";
import React from "react";

export default function DieGeschichteBerlins() {
  const [showLegend, setShowLegend] = useState(false);
  const [showDictionary, setShowDictionary] = useState(false);

  const dictionary = {
    "die Bibliothek, -en": "Kütüphane",
    "das Regal, -e": "Raf",
    "der Lesesaal, -säle": "Okuma salonu",
    "der Vortrag, -träge": "Sunum, konferans",
    "das Referat, -e": "Bildiri, rapor",
    "die Ehre, -n": "Onur",
    "die Mauer, -n": "Duvar (Berlin Duvarı)",
    "die Teilung, -en": "Bölünme",
    "das Kapitel, -": "Bölüm",
    "die Literatur, -en": "Edebiyat, kaynakça",
    "der Inhalt, -e": "İçerik",
    "die Präsentation, -en": "Sunum",
    "der Akzent, -e": "Aksan",
    "der Applaus": "Alkış",
    "die Sprachkenntnisse": "Dil bilgisi",
    "die Muttersprache, -n": "Ana dil",
    "die Einleitung, -en": "Giriş",
    "die Metropole, -n": "Metropol",
    "die Gründung, -en": "Kuruluş",
    "die Residenzstadt, -städte": "Başkent şehri",
    "der Monarch, -en": "Hükümdar",
    "die Hauptstadt, -städte": "Başkent",
    "die Weimarer Republik": "Weimar Cumhuriyeti",
    "der Zweite Weltkrieg": "İkinci Dünya Savaşı",
    "der Konflikt, -e": "Çatışma",
    "die Hoffnung, -en": "Umut",
    "die Vereinigung, -en": "Birleşme",
    "der Besucher, -": "Ziyaretçi",
    "der Kommilitone, -n": "Sınıf arkadaşı",
    "die Verbindung, -en": "Bağlantı",
    blättern: "Sayfaları çevirmek",
    belegt: "Kalabalık",
    beauftragen: "Görevlendirmek",
    prägend: "Belirleyici, şekillendirici",
    bedeutend: "Önemli",
    relevant: "İlgili",
    strukturieren: "Yapılandırmak",
    begeistert: "Heyecanlı",
    unverkennbar: "Benzersiz, tanınabilir",
    nervös: "Gergin",
    faszinierend: "Büyüleyici",
    aufmerksam: "Dikkatli",
    lebendig: "Canlı",
    undenkbar: "Düşünülemez",
    erleichtert: "Rahatlamış",
    vertiefen: "Derinleştirmek",
    "sich auseinandersetzen": "Üzerinde çalışmak",
    lauschen: "Dikkatle dinlemek",
    erkunden: "Keşfetmek",
    einnehmen: "Ele geçirmek",
    gründen: "Kurmak",
    trennen: "Ayırmak",
    fallen: "Düşmek",
    zusammenfinden: "Bir araya gelmek",
    klatschen: "Alkışlamak",
    anerkennend: "Takdir ederek",
    // Yeni eklenenler:
    "die Blätter": "Yapraklar",
    "die Veranstaltung, -en": "Etkinlik",
    "etwas erfüllen": "Bir şeyi gerçekleştirmek",
    recht: "Oldukça, hak",
    halten: "Tutmak, yapmak (sunum vb.)",
    bedeuten: "Anlamına gelmek",
    prägen: "Şekillendirmek",
    "der Anschluss, -schlüsse": "Bağlantı, aktarma",
    fortfahren: "Devam etmek",
    hautnah: "Birebir, canlı, yakından",
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">DIE GESCHICHTE BERLINS</h1>

      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setShowLegend(!showLegend)}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded transition-colors"
        >
          {showLegend ? "Legende ausblenden" : "Legende anzeigen"}
        </button>

        <button
          onClick={() => setShowDictionary(!showDictionary)}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded transition-colors"
        >
          {showDictionary ? "Wörterbuch ausblenden" : "Wörterbuch anzeigen"}
        </button>
      </div>

      {showLegend && (
        <div className="p-4 bg-white rounded-lg shadow border mb-4">
          <h2 className="text-lg font-semibold mb-2">Farbkennzeichnung:</h2>
          <ul className="space-y-2">
            <li>
              <span className="text-green-600 font-medium">■</span> Nebensätze
              (alle Arten)
            </li>
            <li>
              <span className="text-blue-600 font-medium">■</span> Adjektive
              (Eigenschaftswörter)
            </li>
            <li>
              <span className="font-bold text-black">■</span> Verben
              (Zeitwörter) und trennbare Vorsilben
            </li>
            <li>
              <span className="text-red-600 font-medium">■</span> Präpositionen
              (Verhältniswörter)
            </li>
          </ul>
        </div>
      )}

      {showDictionary && (
        <div className="p-4 bg-white rounded-lg shadow border mb-4 max-h-96 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-2">
            Wörterbuch Deutsch-Türkisch:
          </h2>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-2">Deutsch</th>
                <th className="text-left p-2">Türkisch</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(dictionary).map(([word, translation], index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                  <td className="p-2 font-medium">{word}</td>
                  <td className="p-2">{translation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mb-6">
        <p className="mb-4">
          Carl <span className="font-bold text-black">sitzt</span> an diesem
          Nachmittag zusammen <span className="text-red-600">mit</span> Astrid{" "}
          <span className="text-red-600">in</span> der Bibliothek. Sie{" "}
          <span className="font-bold text-black">blättern</span>{" "}
          <span className="text-red-600">durch</span> die{" "}
          <span className="text-blue-600">dicken</span> Bücher,{" "}
          <span className="text-green-600 font-medium">
            die sie sich <span className="text-red-600">aus</span> den Regalen{" "}
            <span className="font-bold text-black">geholt</span>{" "}
            <span className="font-bold text-black">haben</span>.
          </span>{" "}
          <span className="text-red-600">Durch</span> das Fenster{" "}
          <span className="text-red-600">neben</span> ihrem Tisch{" "}
          <span className="font-bold text-black">blicken</span> sie direkt{" "}
          <span className="text-red-600">auf</span> den{" "}
          <span className="text-blue-600">belebten</span> Campus,{" "}
          <span className="text-green-600 font-medium">
            wo <span className="text-blue-600">zahlreiche</span> Studenten{" "}
            <span className="text-red-600">von</span> einer Veranstaltung{" "}
            <span className="text-red-600">zur</span> nächsten{" "}
            <span className="font-bold text-black">gehen</span>.
          </span>{" "}
          Die Sonne <span className="font-bold text-black">lässt</span> sich ab
          und zu <span className="font-bold text-black">blicken</span> und{" "}
          <span className="font-bold text-black">sorgt</span>{" "}
          <span className="text-red-600">für</span> ein{" "}
          <span className="text-blue-600">warmes</span> Licht{" "}
          <span className="text-red-600">im</span> Lesesaal. Es{" "}
          <span className="font-bold text-black">ist</span> die{" "}
          <span className="text-blue-600">perfekte</span> Atmosphäre,{" "}
          <span className="text-green-600 font-medium">
            um ihre Mission <span className="font-bold text-black">zu</span>{" "}
            <span className="font-bold text-black">erfüllen</span>:
          </span>{" "}
          ihr <span className="text-blue-600">erster</span> Vortrag!
        </p>

        <p className="mb-4">
          Professor Schröder <span className="font-bold text-black">hat</span>{" "}
          sie damit <span className="font-bold text-black">beauftragt</span>,
          ein Referat <span className="text-red-600">über</span> die Geschichte
          Berlins <span className="text-red-600">seit</span> seiner Gründung{" "}
          <span className="font-bold text-black">zu</span>{" "}
          <span className="font-bold text-black">halten</span>. Es{" "}
          <span className="font-bold text-black">ist</span>{" "}
          <span className="text-red-600">für</span> sie eine{" "}
          <span className="text-blue-600">große</span> Ehre,{" "}
          <span className="text-green-600 font-medium">
            dass sie dieses Thema{" "}
            <span className="font-bold text-black">zugeteilt</span>{" "}
            <span className="font-bold text-black">bekommen</span>{" "}
            <span className="font-bold text-black">haben</span>.
          </span>{" "}
          Schließlich <span className="font-bold text-black">setzen</span> sie
          sich nun schon <span className="text-red-600">seit</span> Wochen
          intensiv <span className="text-red-600">mit</span> der Geschichte der
          Stadt <span className="font-bold text-black">auseinander</span> und{" "}
          <span className="font-bold text-black">haben</span> bereits{" "}
          <span className="text-blue-600">zahlreiche</span> Informationen{" "}
          <span className="font-bold text-black">gesammelt</span>. „
          <span className="font-bold text-black">Schau</span> dir das an,
          Astrid", <span className="font-bold text-black">sagt</span> Carl und{" "}
          <span className="font-bold text-black">zeigt</span>{" "}
          <span className="text-red-600">auf</span> ein{" "}
          <span className="text-blue-600">altes</span> Schwarz-Weiß-Foto{" "}
          <span className="text-red-600">von</span> der Berliner Mauer. „Das{" "}
          <span className="font-bold text-black">war</span> eine{" "}
          <span className="text-blue-600">prägende</span> Zeit{" "}
          <span className="text-red-600">für</span> diese Stadt." Astrid{" "}
          <span className="font-bold text-black">nickt</span>. „Ja, die Teilung
          Berlins und Deutschlands{" "}
          <span className="font-bold text-black">ist</span> ein{" "}
          <span className="text-blue-600">bedeutendes</span> Kapitel der{" "}
          <span className="text-blue-600">deutschen</span> Geschichte. Aber{" "}
          <span className="font-bold text-black">lass</span> uns{" "}
          <span className="text-red-600">von</span> Anfang an{" "}
          <span className="font-bold text-black">beginnen</span>."
        </p>

        <p className="mb-4">
          Die beiden <span className="font-bold text-black">verbringen</span>{" "}
          mehrere Tage damit, die <span className="text-blue-600">nötige</span>{" "}
          Literatur <span className="text-red-600">für</span> ihren Vortrag{" "}
          <span className="font-bold text-black">zu</span>{" "}
          <span className="font-bold text-black">sammeln</span>. Sie{" "}
          <span className="font-bold text-black">schreiben</span> die{" "}
          <span className="text-blue-600">relevanten</span> Inhalte{" "}
          <span className="font-bold text-black">heraus</span> und{" "}
          <span className="font-bold text-black">strukturieren</span> sie.{" "}
          <span className="text-green-600 font-medium">
            Nachdem sie alles{" "}
            <span className="font-bold text-black">vorbereitet</span>{" "}
            <span className="font-bold text-black">haben</span>,
          </span>{" "}
          <span className="font-bold text-black">halten</span> sie am Abend{" "}
          <span className="text-red-600">vor</span> dem{" "}
          <span className="text-blue-600">großen</span> Tag ihre Präsentation{" "}
          <span className="text-red-600">vor</span> ihrer Mitbewohnerin. Die{" "}
          <span className="text-blue-600">Italienerin</span>{" "}
          <span className="font-bold text-black">ist</span>{" "}
          <span className="text-blue-600">begeistert</span>. „Bravo,{" "}
          <span className="text-blue-600">gute</span> Arbeit!",{" "}
          <span className="font-bold text-black">ruft</span> sie den beiden{" "}
          <span className="text-red-600">in</span> ihrem{" "}
          <span className="text-blue-600">unverkennbaren</span> Akzent{" "}
          <span className="font-bold text-black">zu</span> und{" "}
          <span className="font-bold text-black">applaudiert</span>.{" "}
          <span className="text-green-600 font-medium">
            Wenn Luisa <span className="font-bold text-black">spricht</span>,
          </span>{" "}
          <span className="font-bold text-black">hört</span> man sie schon{" "}
          <span className="text-red-600">von</span> Weitem.
        </p>

        <p className="mb-4">
          Am Tag des Vortrags <span className="font-bold text-black">sind</span>{" "}
          Astrid und Carl <span className="text-blue-600">nervös</span>.
          Schließlich <span className="font-bold text-black">sollen</span> sie
          nicht nur einen Vortrag <span className="text-red-600">vor</span> etwa
          zwanzig Leuten <span className="font-bold text-black">halten</span>,
          sondern sie <span className="font-bold text-black">müssen</span> ihn
          auch <span className="text-red-600">auf</span> Deutsch{" "}
          <span className="font-bold text-black">halten</span>. Ihre
          Sprachkenntnisse <span className="font-bold text-black">sind</span>{" "}
          zwar schon <span className="text-blue-600">recht</span>{" "}
          <span className="text-blue-600">gut</span>, aber trotzdem{" "}
          <span className="font-bold text-black">ist</span> es immer{" "}
          <span className="text-blue-600">schwieriger</span>,{" "}
          <span className="text-red-600">in</span> einer{" "}
          <span className="text-blue-600">Fremdsprache</span> und nicht{" "}
          <span className="text-red-600">in</span> der Muttersprache{" "}
          <span className="font-bold text-black">zu</span>{" "}
          <span className="font-bold text-black">referieren</span>. „
          <span className="text-blue-600">Guten</span> Tag, alle miteinander",{" "}
          <span className="font-bold text-black">beginnt</span> Astrid. „Heute{" "}
          <span className="font-bold text-black">nehmen</span> wir euch{" "}
          <span className="text-red-600">mit</span>{" "}
          <span className="text-red-600">auf</span> eine Reise{" "}
          <span className="text-red-600">durch</span> die Zeit,{" "}
          <span className="text-green-600 font-medium">
            um die <span className="text-blue-600">faszinierende</span>{" "}
            Geschichte Berlins <span className="font-bold text-black">zu</span>{" "}
            <span className="font-bold text-black">erkunden</span>."
          </span>
        </p>

        <p className="mb-4">
          <span className="text-green-600 font-medium">
            Nachdem sie die Einleitung{" "}
            <span className="font-bold text-black">präsentiert</span>{" "}
            <span className="font-bold text-black">hat</span>,
          </span>{" "}
          <span className="font-bold text-black">führt</span> Carl den Vortrag{" "}
          <span className="text-blue-600">weiter</span>{" "}
          <span className="font-bold text-black">aus</span>. „Berlin,{" "}
          <span className="text-green-600 font-medium">
            wie wir es heute{" "}
            <span className="font-bold text-black">kennen</span>,
          </span>{" "}
          <span className="font-bold text-black">ist</span> der{" "}
          <span className="text-blue-600">kulturelle</span>,{" "}
          <span className="text-blue-600">politische</span> und{" "}
          <span className="text-blue-600">historische</span> Mittelpunkt
          Deutschlands. Aber jede Metropole{" "}
          <span className="font-bold text-black">hat</span> mal{" "}
          <span className="text-blue-600">klein</span>{" "}
          <span className="font-bold text-black">angefangen</span>." Sie{" "}
          <span className="font-bold text-black">erzählen</span>{" "}
          <span className="text-red-600">von</span> der Gründung Berlins{" "}
          <span className="text-red-600">im</span> Jahr 1237 sowie der
          Entstehung der Doppelstadt Berlin-Kölln.{" "}
          <span className="text-red-600">In</span> den{" "}
          <span className="text-blue-600">folgenden</span> Jahrhunderten{" "}
          <span className="font-bold text-black">entwickelte</span> sich der Ort{" "}
          <span className="font-bold text-black">zu</span> einer{" "}
          <span className="text-blue-600">kurfürstlichen</span> und später{" "}
          <span className="text-blue-600">königlichen</span> Residenzstadt.
          König Friedrich <span className="font-bold text-black">war</span>{" "}
          <span className="text-red-600">im</span> Jahr 1701 der{" "}
          <span className="text-blue-600">erste</span> Monarch und Berlin{" "}
          <span className="font-bold text-black">wurde</span>{" "}
          <span className="font-bold text-black">zur</span> Hauptstadt des{" "}
          <span className="text-blue-600">preußischen</span> Staates. 100 Jahre
          später, <span className="text-red-600">im</span> Oktober 1806,{" "}
          <span className="font-bold text-black">nahm</span> Napoleon die Stadt{" "}
          <span className="font-bold text-black">ein</span> und 1871{" "}
          <span className="font-bold text-black">wurde</span> schließlich das
          Deutsche Reich <span className="font-bold text-black">gegründet</span>
          . Sie <span className="font-bold text-black">sprechen</span>{" "}
          <span className="text-red-600">im</span> Anschluss{" "}
          <span className="text-red-600">von</span> der Weimarer Republik und
          dann <span className="text-red-600">über</span> den Zweiten Weltkrieg
          sowie den Bau der Berliner Mauer.
        </p>

        <p className="mb-4">
          Die <span className="text-blue-600">anderen</span> Studenten{" "}
          <span className="font-bold text-black">lauschen</span>{" "}
          <span className="text-blue-600">aufmerksam</span> und{" "}
          <span className="font-bold text-black">machen</span> sich Notizen.
          Fotos und Dokumente <span className="text-blue-600">vergangener</span>{" "}
          Zeiten,{" "}
          <span className="text-green-600 font-medium">
            die die beiden{" "}
            <span className="font-bold text-black">präsentieren</span>,
          </span>{" "}
          <span className="font-bold text-black">machen</span> den Vortrag{" "}
          <span className="text-blue-600">lebendig</span>. „Die Mauer{" "}
          <span className="font-bold text-black">trennte</span> nicht nur die
          Stadt", <span className="font-bold text-black">erklärt</span> Astrid,
          „sie <span className="font-bold text-black">trennte</span> Familien
          und Freunde. Es <span className="font-bold text-black">war</span> eine
          Zeit des Konflikts, aber auch der Hoffnung. Die Hoffnung,{" "}
          <span className="text-green-600 font-medium">
            dass eines Tages die Mauer{" "}
            <span className="font-bold text-black">fallen</span>{" "}
            <span className="font-bold text-black">würde</span>."
          </span>{" "}
          Und dann, 1989, <span className="font-bold text-black">geschah</span>{" "}
          das <span className="text-blue-600">Undenkbare</span>,{" "}
          <span className="font-bold text-black">fährt</span> Carl{" "}
          <span className="font-bold text-black">fort</span>. Am 9. November{" "}
          <span className="font-bold text-black">fiel</span> die Mauer. Berlin,
          eine Stadt{" "}
          <span className="text-green-600 font-medium">
            die jahrzehntelang{" "}
            <span className="font-bold text-black">geteilt</span>{" "}
            <span className="font-bold text-black">war</span>,
          </span>{" "}
          <span className="font-bold text-black">fand</span> wieder{" "}
          <span className="font-bold text-black">zusammen</span>. Heute{" "}
          <span className="font-bold text-black">ist</span> Berlin{" "}
          <span className="text-blue-600">vereint</span> und{" "}
          <span className="font-bold text-black">erzählt</span> eine{" "}
          <span className="text-blue-600">moderne</span> Geschichte.{" "}
          <span className="text-red-600">Über</span> 10 Millionen Besucher{" "}
          <span className="text-red-600">aus</span> aller Welt{" "}
          <span className="font-bold text-black">kommen</span> jedes Jahr
          hierher,{" "}
          <span className="text-green-600 font-medium">
            um diese Geschichte <span className="text-blue-600">hautnah</span>{" "}
            <span className="font-bold text-black">zu</span>{" "}
            <span className="font-bold text-black">erleben</span>,
          </span>{" "}
          und wir <span className="font-bold text-black">sind</span> ein Teil{" "}
          <span className="text-red-600">davon</span>.
        </p>

        <p className="mb-4">
          <span className="text-red-600">Mit</span> diesen Worten{" "}
          <span className="font-bold text-black">endet</span> der Vortrag und
          die Zuhörer <span className="font-bold text-black">beginnen</span>{" "}
          <span className="font-bold text-black">zu</span>{" "}
          <span className="font-bold text-black">klatschen</span>.{" "}
          <span className="text-blue-600">Faszinierte</span> Blicke{" "}
          <span className="font-bold text-black">gehen</span>{" "}
          <span className="text-red-600">durch</span> den Raum und Professor
          Schröder <span className="font-bold text-black">nickt</span> seinen
          Referenten <span className="text-blue-600">anerkennend</span>{" "}
          <span className="font-bold text-black">zu</span>. Carl und Astrid{" "}
          <span className="font-bold text-black">sind</span>{" "}
          <span className="text-blue-600">erleichtert</span> und{" "}
          <span className="text-blue-600">zufrieden</span>. Sie{" "}
          <span className="font-bold text-black">erleben</span> sich,{" "}
          <span className="text-green-600 font-medium">
            dass sie nicht nur ihre Kommilitonen{" "}
            <span className="text-red-600">über</span> die Geschichte Berlins{" "}
            <span className="font-bold text-black">aufgeklärt</span>{" "}
            <span className="font-bold text-black">haben</span>,
          </span>{" "}
          sondern auch ihre <span className="text-blue-600">eigene</span>{" "}
          Verbindung <span className="text-red-600">zur</span> Stadt{" "}
          <span className="font-bold text-black">vertieft</span>{" "}
          <span className="font-bold text-black">haben</span>. Spätestens ab
          diesem Moment <span className="font-bold text-black">ist</span> Berlin{" "}
          <span className="text-red-600">für</span> sie nicht mehr nur ein Ort{" "}
          <span className="text-red-600">zum</span> Studieren, sondern ein Teil
          ihrer <span className="text-blue-600">eigenen</span>{" "}
          <span className="text-blue-600">persönlichen</span> Geschichte.
        </p>
      </div>
    </div>
  );
}
