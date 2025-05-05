import React, { useState } from "react";

const Deyim = () => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    text: "",
    x: 0,
    y: 0,
  });

  const handleWordClick = (word, translation, event) => {
    setTooltip({
      visible: true,
      text: translation,
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleCloseTooltip = () => {
    setTooltip({ visible: false, text: "", x: 0, y: 0 });
  };

  // Hikaye metni ve sıfatlar/deyimler
  const storyContent = [
    {
      title: "Ein unerwarteter Lebensweg",
      paragraphs: [
        <>
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("Beklenmedik", "beklenmedik", e)}
          >
            Beklenmedik
          </span>{" "}
          bir yaşam yolu
        </>,
        <>
          Markus saß in seinem Büro und machte sich{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "Gedanken über seine berufliche Zukunft",
                "mesleki geleceği hakkında düşünüyordu (Deyim: sich Gedanken machen über - bir şey hakkında düşünmek, kafa yormak)",
                e
              )
            }
          >
            Gedanken über seine berufliche Zukunft
          </span>
          .
        </>,
        <>
          Seit drei Jahren arbeitete er in einem{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("großen", "büyük", e)}
          >
            großen
          </span>{" "}
          Unternehmen, aber in letzter Zeit hatte er{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "die Nase voll von den endlosen Besprechungen",
                "bitmek bilmeyen toplantılardan bıkmıştı (Deyim: die Nase voll haben - bıkmak, usanmak)",
                e
              )
            }
          >
            die Nase voll von den endlosen Besprechungen
          </span>{" "}
          und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("leeren", "boş", e)}
          >
            leeren
          </span>{" "}
          Versprechungen seiner Vorgesetzten.
        </>,
        <>
          Er kam mit seinem{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("geringen", "düşük", e)}
          >
            geringen
          </span>{" "}
          Gehalt{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "kaum über die Runden",
                "zar zor geçiniyordu (Deyim: über die Runden kommen - geçinmek, idare etmek)",
                e
              )
            }
          >
            kaum über die Runden
          </span>{" "}
          und fühlte sich{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("unterbewertet", "değersiz", e)}
          >
            unterbewertet
          </span>
          .
        </>,
        <>
          "Ich muss dieses{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("wichtige", "önemli", e)}
          >
            wichtige
          </span>{" "}
          Thema bei der nächsten Sitzung{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "zur Sprache bringen",
                "konuyu gündeme getirmek (Deyim: zur Sprache bringen - konuyu gündeme getirmek, konuşmak)",
                e
              )
            }
          >
            zur Sprache bringen
          </span>
          ", dachte er und beschloss, einen{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("detaillierten", "ayrıntılı", e)}
          >
            detaillierten
          </span>{" "}
          Plan zu erstellen, wie er seine Karriere vorantreiben könnte.
        </>,
        <>
          Markus war immer{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "auf dem Laufenden",
                "güncel bilgiye sahip (Deyim: auf dem Laufenden sein - güncel olmak, haberdar olmak)",
                e
              )
            }
          >
            auf dem Laufenden
          </span>
          , was die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("neuesten", "en son", e)}
          >
            neuesten
          </span>{" "}
          Entwicklungen in seiner Branche betraf, und hatte oft{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("innovative", "yenilikçi", e)}
          >
            innovative
          </span>{" "}
          Ideen, die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "viel Beachtung fanden",
                "büyük ilgi görüyordu (Deyim: Beachtung finden - ilgi görmek, dikkat çekmek)",
                e
              )
            }
          >
            viel Beachtung fanden
          </span>
          .
        </>,
        <>
          An diesem Abend kam sein{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("bester", "en iyi", e)}
          >
            bester
          </span>{" "}
          Freund Thomas vorbei.
          <br />
          Sie kannten sich seit der Schulzeit und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "gingen durch dick und dünn",
                "her koşulda yanındaydılar (Deyim: durch dick und dünn gehen - iyi günde kötü günde birlikte olmak)",
                e
              )
            }
          >
            gingen durch dick und dünn
          </span>{" "}
          zusammen.
        </>,
        <>
          Thomas sah sofort, dass etwas nicht stimmte.
          <br />
          "Was ist los? Du siehst aus, als hättest du{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "ins Gras gebissen",
                "moralsiz görünüyorsun (Deyim: ins Gras beißen - ölmek, kötü durumda olmak; burada mecazi olarak moralsiz görünmek)",
                e
              )
            }
          >
            ins Gras gebissen
          </span>
          ", scherzte er.
        </>,
        <>
          "Ach, ich bin mit meinem Chef wegen der Arbeitszeiten{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "in Konflikt geraten",
                "çatıştım (Deyim: in Konflikt geraten - çatışmak, anlaşmazlığa düşmek)",
                e
              )
            }
          >
            in Konflikt geraten
          </span>
          ", antwortete Markus.
        </>,
        <>
          "Er hat mich heute{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "unter Druck gesetzt",
                "baskı altına aldı (Deyim: unter Druck setzen - baskı yapmak, sıkıştırmak)",
                e
              )
            }
          >
            unter Druck gesetzt
          </span>
          , ein Projekt früher fertigzustellen, aber das ist{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("unmöglich", "imkânsız", e)}
          >
            unmöglich
          </span>
          .<br />
          Ich habe{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "alle Hände voll zu tun",
                "çok meşgulüm (Deyim: alle Hände voll zu tun haben - çok meşgul olmak, başı kalabalık olmak)",
                e
              )
            }
          >
            alle Hände voll zu tun
          </span>{" "}
          mit den{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("aktuellen", "mevcut", e)}
          >
            aktuellen
          </span>{" "}
          Aufgaben!"
        </>,
        <>
          Thomas hörte{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("aufmerksam", "dikkatle", e)}
          >
            aufmerksam
          </span>{" "}
          zu und wollte nicht{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "seinen Senf dazugeben",
                "kendi fikrini söylemek (Deyim: seinen Senf dazugeben - istenmeden yorum yapmak, fikrini söylemek)",
                e
              )
            }
          >
            seinen Senf dazugeben
          </span>
          , bevor Markus fertig war.
        </>,
        <>
          Sie hatten in ihrer Freundschaft immer{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "mit offenen Karten gespielt",
                "açık sözlü olmuşlardı (Deyim: mit offenen Karten spielen - açık sözlü olmak, dürüst davranmak)",
                e
              )
            }
          >
            mit offenen Karten gespielt
          </span>{" "}
          und niemand würde den anderen{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "im Regen stehen lassen",
                "yüzüstü bırakmazdı (Deyim: im Regen stehen lassen - yüzüstü bırakmak, yalnız bırakmak)",
                e
              )
            }
          >
            im Regen stehen lassen
          </span>
          .
        </>,
        <>
          "Du solltest nicht{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "den Kopf verlieren",
                "panik yapmamalısın (Deyim: den Kopf verlieren - panik yapmak, soğukkanlılığını kaybetmek)",
                e
              )
            }
          >
            den Kopf verlieren
          </span>
          ", sagte Thomas schließlich.
        </>,
        <>
          "
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "Nimm dich in Acht",
                "dikkat et (Deyim: sich in Acht nehmen - dikkat etmek, temkinli olmak)",
                e
              )
            }
          >
            Nimm dich in Acht
          </span>{" "}
          vor{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("übereilten", "acele", e)}
          >
            übereilten
          </span>{" "}
          Entscheidungen.
          <br />
          Vielleicht solltest du{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "eine Bitte äußern",
                "ricada bulunmalısın (Deyim: eine Bitte äußern - ricada bulunmak)",
                e
              )
            }
          >
            eine Bitte äußern
          </span>
          , mehr Zeit zu bekommen, anstatt{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "das Handtuch zu werfen",
                "pes etmek (Deyim: das Handtuch werfen - pes etmek, vazgeçmek)",
                e
              )
            }
          >
            das Handtuch zu werfen
          </span>
          ."
        </>,
        <>
          Markus wusste, dass sein Freund recht hatte.
          <br />
          "Danke, dass du mir{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "die Daumen drückst",
                "destek olduğun (Deyim: die Daumen drücken - destek olmak, şans dilemek)",
                e
              )
            }
          >
            die Daumen drückst
          </span>
          .<br />
          Ich werde morgen{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "zur Einsicht kommen",
                "mantıklı bir sonuca varacağım (Deyim: zur Einsicht kommen - mantıklı bir sonuca varmak, aklı başına gelmek)",
                e
              )
            }
          >
            zur Einsicht kommen
          </span>{" "}
          und eine Lösung finden."
        </>,
        <>
          Am nächsten Tag entschied sich Markus, mit seinem Chef zu sprechen und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "eine ehrliche Antwort",
                "dürüst bir cevap (Deyim: eine ehrliche Antwort - dürüst bir cevap)",
                e
              )
            }
          >
            eine ehrliche Antwort
          </span>{" "}
          auf seine Bedenken zu bekommen.
        </>,
        <>
          Er{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "nahm zur Kenntnis",
                "fark etti (Deyim: zur Kenntnis nehmen - fark etmek, not etmek)",
                e
              )
            }
          >
            nahm zur Kenntnis
          </span>
          , dass er vielleicht seine Position{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("besser", "daha iyi", e)}
          >
            besser
          </span>{" "}
          erklären musste.
        </>,
        <>
          Sein Chef hörte ihm zu und gemeinsam{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "kamen sie zum Ergebnis",
                "bir sonuca vardılar (Deyim: zum Ergebnis kommen - bir sonuca varmak)",
                e
              )
            }
          >
            kamen sie zum Ergebnis
          </span>
          , dass das Projekt mehr Zeit benötigte.
        </>,
        <>
          "Ich muss{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "eine Erklärung abgeben",
                "bir açıklama yapmalıyım (Deyim: eine Erklärung abgeben - açıklama yapmak)",
                e
              )
            }
          >
            eine Erklärung abgeben
          </span>
          ", sagte sein Chef überraschend.
        </>,
        <>
          "Ich habe dich{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("falsch", "yanlış", e)}
          >
            falsch
          </span>{" "}
          eingeschätzt und möchte{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "Verantwortung übernehmen",
                "sorumluluk almak (Deyim: Verantwortung übernehmen - sorumluluk almak)",
                e
              )
            }
          >
            Verantwortung übernehmen
          </span>{" "}
          für den Druck, den ich ausgeübt habe."
        </>,
        <>
          Markus{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "fiel aus allen Wolken",
                "şok oldu (Deyim: aus allen Wolken fallen - şok olmak, çok şaşırmak)",
                e
              )
            }
          >
            fiel aus allen Wolken
          </span>{" "}
          – er hatte nicht erwartet, dass sein Chef einen solchen Schritt machen
          würde.
        </>,
        <>
          Die Situation hatte{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "eine positive Auswirkung",
                "olumlu bir etki (Deyim: eine positive Auswirkung haben - olumlu bir etki yaratmak)",
                e
              )
            }
          >
            eine positive Auswirkung
          </span>{" "}
          auf ihre Arbeitsbeziehung.
        </>,
        <>
          Einige Wochen später erhielt Markus ein{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("interessantes", "ilginç", e)}
          >
            interessantes
          </span>{" "}
          Jobangebot von einem Konkurrenzunternehmen.
          <br />
          Er stand nun vor einer{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("schwierigen", "zor", e)}
          >
            schwierigen
          </span>{" "}
          Entscheidung.
          <br />
          Einerseits hatte sich die Situation mit seinem{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("aktuellen", "mevcut", e)}
          >
            aktuellen
          </span>{" "}
          Chef verbessert, andererseits bot die neue Stelle{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("bessere", "daha iyi", e)}
          >
            bessere
          </span>{" "}
          Konditionen.
          <br />
          Er musste diese Alternativen{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "in Betracht ziehen",
                "değerlendirmesi gerekiyordu (Deyim: in Betracht ziehen - değerlendirmek, düşünmek)",
                e
              )
            }
          >
            in Betracht ziehen
          </span>{" "}
          und überlegte, ob er{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "eine neue Beziehung eingehen",
                "yeni bir ilişkiye girmeli (Deyim: eine Beziehung eingehen - bir ilişkiye başlamak)",
                e
              )
            }
          >
            eine neue Beziehung eingehen
          </span>{" "}
          sollte zu einem anderen Arbeitgeber.
        </>,
        <>
          Seine Kollegin Maria, die ihm{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "einen Bären aufbinden",
                "kandırmaya çalışarak (Deyim: einen Bären aufbinden - kandırmak, yalan söylemek)",
                e
              )
            }
          >
            einen Bären aufbinden
          </span>{" "}
          wollte, behauptete:
        </>,
        <>
          "In dem neuen Unternehmen{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "stecken alle unter einer Decke",
                "herkes birbirini kolluyor (Deyim: unter einer Decke stecken - birbirini kollamak, gizli iş çevirmek)",
                e
              )
            }
          >
            stecken alle unter einer Decke
          </span>{" "}
          und versuchen, ihre Probleme{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "unter den Teppich zu kehren",
                "sorunları örtbas etmeye çalışıyor (Deyim: unter den Teppich kehren - sorunları gizlemek, örtbas etmek)",
                e
              )
            }
          >
            unter den Teppich zu kehren
          </span>
          ."
        </>,
        <>
          Markus{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "spitzte die Ohren",
                "kulak kabarttı (Deyim: die Ohren spitzen - kulak kabartmak, dikkat kesilmek)",
                e
              )
            }
          >
            spitzte die Ohren
          </span>
          .<br />
          War das wahr oder versuchte Maria nur, ihn{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "an der Nase herumzuführen",
                "kandırmaya çalışıyordu (Deyim: an der Nase herumführen - kandırmak, aldatmak)",
                e
              )
            }
          >
            an der Nase herumzuführen
          </span>
          ?
        </>,
        <>
          Er beschloss,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "sich selbst ein Bild von der Situation zu machen",
                "durumu kendi gözleriyle görmeye karar verdi (Deyim: sich ein Bild von etwas machen - bir şey hakkında kendi fikrini oluşturmak)",
                e
              )
            }
          >
            sich selbst ein Bild von der Situation zu machen
          </span>
          , bevor er urteilen würde.
        </>,
        <>
          Er recherchierte{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("gründlich", "detaylı", e)}
          >
            gründlich
          </span>{" "}
          und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "stellte eine Anfrage",
                "bir soru sordu (Deyim: eine Anfrage stellen - bir talepte bulunmak, sormak)",
                e
              )
            }
          >
            stellte eine Anfrage
          </span>{" "}
          bei einem Bekannten, der in dem Unternehmen arbeitete.
        </>,
        <>
          Dieser{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "vertrat eine andere Meinung",
                "farklı bir görüş savundu (Deyim: eine Meinung vertreten - bir görüş savunmak)",
                e
              )
            }
          >
            vertrat eine andere Meinung
          </span>{" "}
          als Maria und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "hielt mit seiner positiven Einschätzung nicht hinter dem Berg",
                "olumlu değerlendirmesini saklamadı (Deyim: nicht hinter dem Berg halten - fikrini açıkça söylemek, saklamamak)",
                e
              )
            }
          >
            hielt mit seiner positiven Einschätzung nicht hinter dem Berg
          </span>
          .
        </>,
        <>
          "Du solltest nicht{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "aus einer Mücke einen Elefanten machen",
                "pireyi deve yapmamalısın (Deyim: aus einer Mücke einen Elefanten machen - pireyi deve yapmak, abartmak)",
                e
              )
            }
          >
            aus einer Mücke einen Elefanten machen
          </span>
          ", sagte sein Bekannter.
        </>,
        <>
          "Jedes Unternehmen hat seine Herausforderungen, aber hier kann jeder{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "einen Beitrag leisten",
                "katkıda bulunabilir (Deyim: einen Beitrag leisten - katkıda bulunmak)",
                e
              )
            }
          >
            einen Beitrag leisten
          </span>{" "}
          und wird dafür geschätzt."
        </>,
        <>
          Markus dachte{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "zwischen den Zeilen zu lesen",
                "satır aralarını okumaya çalıştı (Deyim: zwischen den Zeilen lesen - satır aralarını okumak, ima edilen anlamı anlamak)",
                e
              )
            }
          >
            zwischen den Zeilen zu lesen
          </span>{" "}
          und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "kam zu dem Schluss",
                "sonuca vardı (Deyim: zu dem Schluss kommen - bir sonuca varmak)",
                e
              )
            }
          >
            kam zu dem Schluss
          </span>
          , dass er die neue Chance ergreifen sollte.
        </>,
        <>
          Er hatte{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "den Nagel auf den Kopf getroffen",
                "tam isabet etmişti (Deyim: den Nagel auf den Kopf treffen - tam isabet etmek, doğru noktaya değinmek)",
                e
              )
            }
          >
            den Nagel auf den Kopf getroffen
          </span>{" "}
          – es war Zeit für Veränderung.
        </>,
        <>
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "In der Tat",
                "gerçekten de (Deyim: in der Tat - gerçekten de)",
                e
              )
            }
          >
            In der Tat
          </span>{" "}
          war er{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "im Stande",
                "yapabilecek durumdaydı (Deyim: im Stande sein - yapabilmek, muktedir olmak)",
                e
              )
            }
          >
            im Stande
          </span>
          , mehr zu erreichen, und diese Gelegenheit könnte ihm helfen,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "die Früchte seiner Arbeit zu ernten",
                "emeğinin meyvelerini toplamasına yardımcı olabilirdi (Deyim: die Früchte ernten - emeğinin karşılığını almak)",
                e
              )
            }
          >
            die Früchte seiner Arbeit zu ernten
          </span>
          .
        </>,
        <>
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "Hals über Kopf",
                "aceleyle (Deyim: Hals über Kopf - apar topar, aceleyle)",
                e
              )
            }
          >
            Hals über Kopf
          </span>{" "}
          bereitete er seine Kündigung vor.
        </>,
        <>
          Als er seinem Chef mitteilte, dass er gehen würde, versuchte dieser
          nicht, ihn{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "zum Narren zu halten",
                "kandırmaya çalışmadı (Deyim: zum Narren halten - aptal yerine koymak, kandırmak)",
                e
              )
            }
          >
            zum Narren zu halten
          </span>{" "}
          oder ihm{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "auf die Füße zu treten",
                "zarar vermeye çalışmadı (Deyim: auf die Füße treten - zarar vermek, engel olmak)",
                e
              )
            }
          >
            auf die Füße zu treten
          </span>
          .
        </>,
        <>
          Stattdessen respektierte er Markus' Entscheidung und wünschte ihm
          alles{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("Gute", "başarılar", e)}
          >
            Gute
          </span>
          .<br />
          Sein{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("letzter", "son", e)}
          >
            letzter
          </span>{" "}
          Arbeitstag war{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("emotional", "duygusal", e)}
          >
            emotional
          </span>
          .<br />
          Seine Kollegen organisierten eine Abschiedsfeier und Markus{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "hinterließ einen sehr guten Eindruck",
                "çok olumlu bir izlenim bıraktı (Deyim: einen guten Eindruck hinterlassen - iyi bir izlenim bırakmak)",
                e
              )
            }
          >
            hinterließ einen sehr guten Eindruck
          </span>
          .
        </>,
        <>
          Er hatte während seiner Zeit dort seine Kompetenz{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "mehrfach unter Beweis gestellt",
                "defalarca kanıtlamıştı (Deyim: unter Beweis stellen - kanıtlamak)",
                e
              )
            }
          >
            mehrfach unter Beweis gestellt
          </span>
          , und niemand konnte diese{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "in Frage stellen",
                "sorgulayamazdı (Deyim: in Frage stellen - sorgulamak)",
                e
              )
            }
          >
            in Frage stellen
          </span>
          .
        </>,
        <>
          In seinem neuen Job musste Markus{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "die Ärmel hochkrempeln",
                "kolları sıvamak (Deyim: die Ärmel hochkrempeln - kolları sıvamak, işe koyulmak)",
                e
              )
            }
          >
            die Ärmel hochkrempeln
          </span>{" "}
          und sich{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("schnell", "hızlıca", e)}
          >
            schnell
          </span>{" "}
          einarbeiten.
        </>,
        <>
          Die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("ersten", "ilk", e)}
          >
            ersten
          </span>{" "}
          Wochen waren nicht{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("einfach", "kolay", e)}
          >
            einfach
          </span>{" "}
          – er{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "saß oft in der Patsche",
                "sık sık zor durumda kaldı (Deyim: in der Patsche sitzen - zor durumda olmak)",
                e
              )
            }
          >
            saß oft in der Patsche
          </span>{" "}
          und fragte sich, ob er{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "mit dem Feuer gespielt hatte",
                "risk alıp almadığını sorguladı (Deyim: mit dem Feuer spielen - risk almak, tehlikeli bir şey yapmak)",
                e
              )
            }
          >
            mit dem Feuer gespielt hatte
          </span>
          , indem er seinen{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("sicheren", "güvenli", e)}
          >
            sicheren
          </span>{" "}
          Job aufgab.
        </>,
        <>
          Doch er{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "verlor nicht die Nerven",
                "soğukkanlılığını kaybetmedi (Deyim: die Nerven verlieren - soğukkanlılığını kaybetmek, panik yapmak)",
                e
              )
            }
          >
            verlor nicht die Nerven
          </span>{" "}
          und nahm die Herausforderung an.
        </>,
        <>
          Seine neue Chefin, Frau Weber,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "schmierte ihm keinen Honig um den Mund",
                "boş iltifatlar yapmadı (Deyim: jemandem Honig um den Mund schmieren - boş iltifatlar yapmak, yağ çekmek)",
                e
              )
            }
          >
            schmierte ihm keinen Honig um den Mund
          </span>
          .
        </>,
        <>
          Sie war{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("direkt", "açık sözlü", e)}
          >
            direkt
          </span>{" "}
          und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "nahm kein Blatt vor den Mund",
                "lafi dolandırmıyordu (Deyim: kein Blatt vor den Mund nehmen - lafi dolandırmamak, açık konuşmak)",
                e
              )
            }
          >
            nahm kein Blatt vor den Mund
          </span>
          , was Markus schätzte.
        </>,
        <>
          Sie{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "brachte ihre Erwartungen klar zum Ausdruck",
                "beklentilerini açıkça ifade etti (Deyim: etwas klar zum Ausdruck bringen - bir şeyi açıkça ifade etmek)",
                e
              )
            }
          >
            brachte ihre Erwartungen klar zum Ausdruck
          </span>{" "}
          und gab ihm{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("konstruktives", "yapıcı", e)}
          >
            konstruktives
          </span>{" "}
          Feedback.
        </>,
        <>
          "Ich möchte nicht, dass Sie Ihre Arbeit{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "auf die lange Bank schieben",
                "ertelemelisiniz (Deyim: auf die lange Bank schieben - ertelemek, oyalamak)",
                e
              )
            }
          >
            auf die lange Bank schieben
          </span>
          ", sagte sie.
        </>,
        <>
          "Wir müssen dieses Projekt so{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("schnell", "hızlı", e)}
          >
            schnell
          </span>{" "}
          wie möglich{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "in Angriff nehmen",
                "ele almalıyız (Deyim: in Angriff nehmen - ele almak, başlamak)",
                e
              )
            }
          >
            in Angriff nehmen
          </span>
          ."
        </>,
        <>
          Markus{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "nahm Rücksicht",
                "dikkate aldı (Deyim: Rücksicht nehmen - dikkate almak)",
                e
              )
            }
          >
            nahm Rücksicht
          </span>{" "}
          auf ihre Anweisungen und zeigte, dass er{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "in der Lage war",
                "yapabileceğini (Deyim: in der Lage sein - yapabilmek)",
                e
              )
            }
          >
            in der Lage war
          </span>
          , Verantwortung zu übernehmen.
        </>,
        <>
          Er arbeitete oft{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "auf eigene Faust",
                "kendi başına (Deyim: auf eigene Faust - kendi başına, bağımsız olarak)",
                e
              )
            }
          >
            auf eigene Faust
          </span>{" "}
          an Lösungen und brachte{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("innovative", "yenilikçi", e)}
          >
            innovative
          </span>{" "}
          Vorschläge ein, die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "in Übereinstimmung mit",
                "ile uyumlu (Deyim: in Übereinstimmung mit - ile uyumlu)",
                e
              )
            }
          >
            in Übereinstimmung mit
          </span>{" "}
          den Unternehmenszielen standen.
        </>,
        <>
          Nach sechs Monaten hatte sich Markus etabliert.
          <br />
          Seine neuen Kollegen respektierten ihn, und er fühlte sich, als würde
          er{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "auf Wolke sieben schweben",
                "yedinci cennette gibi hissediyordu (Deyim: auf Wolke sieben schweben - çok mutlu olmak, bulutların üzerinde hissetmek)",
                e
              )
            }
          >
            auf Wolke sieben schweben
          </span>
          .
        </>,
        <>
          Seine Ideen{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "standen in Verbindung mit",
                "ile bağlantılıydı (Deyim: in Verbindung stehen mit - ile bağlantılı olmak)",
                e
              )
            }
          >
            standen in Verbindung mit
          </span>{" "}
          den{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("strategischen", "stratejik", e)}
          >
            strategischen
          </span>{" "}
          Zielen des Unternehmens und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "spielten eine wichtige Rolle",
                "önemli bir rol oynadı (Deyim: eine wichtige Rolle spielen - önemli bir rol oynamak)",
                e
              )
            }
          >
            spielten eine wichtige Rolle
          </span>{" "}
          bei der Entwicklung neuer Produkte.
        </>,
        <>
          In einer{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("wichtigen", "önemli", e)}
          >
            wichtigen
          </span>{" "}
          Präsentation stellte er einen neuen Ansatz vor.
          <br />
          "Wir sollten alle{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "in der Verantwortung stehen",
                "sorumlu olmalıyız (Deyim: in der Verantwortung stehen - sorumlu olmak)",
                e
              )
            }
          >
            in der Verantwortung stehen
          </span>
          ,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick("nachhaltiger", "daha sürdürülebilir", e)
            }
          >
            nachhaltiger
          </span>{" "}
          zu arbeiten", erklärte er.
        </>,
        <>
          Seine Worte hatten{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "zur Folge",
                "neden oldu (Deyim: zur Folge haben - neden olmak, sonuç doğurmak)",
                e
              )
            }
          >
            zur Folge
          </span>
          , dass das Management eine neue Initiative startete.
        </>,
        <>
          Selbst sein früherer Kollege Stefan, der ihm früher{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "ein Dorn im Auge gewesen war",
                "gözüne batan (Deyim: ein Dorn im Auge sein - göze batmak, rahatsız etmek)",
                e
              )
            }
          >
            ein Dorn im Auge gewesen war
          </span>{" "}
          und jetzt in derselben Firma arbeitete, musste zugeben, dass Markus'
          Methoden{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("effektiv", "etkili", e)}
          >
            effektiv
          </span>{" "}
          waren.
        </>,
        <>
          "Du hattest{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "Schwein",
                "şanslısın (Deyim: Schwein haben - şanslı olmak)",
                e
              )
            }
          >
            Schwein
          </span>
          , dass du den Job bekommen hast", sagte Stefan eines Tages.
        </>,
        <>
          "Es war keine Glückssache", antwortete Markus.
          <br />
          "Ich habe{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "die Katze nicht im Sack gekauft",
                "kediyi çuvalda almadım (Deyim: die Katze im Sack kaufen - ne olduğunu bilmeden bir şey satın almak, risk almak)",
                e
              )
            }
          >
            die Katze nicht im Sack gekauft
          </span>
          , sondern genau gewusst, worauf ich mich einlasse."
        </>,
        <>
          Ein Jahr später wurde Markus befördert.
          <br />
          Bei der Bekanntgabe{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "drückte die Geschäftsführerin ein Auge zu",
                "göz yumdu (Deyim: ein Auge zudrücken - göz yumamak, hoşgörülü olmak)",
                e
              )
            }
          >
            drückte die Geschäftsführerin ein Auge zu
          </span>
          , als seine Teammitglieder jubelten und applaudierten.
        </>,
        <>
          Sie wusste, dass solche Momente{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("wichtig", "önemli", e)}
          >
            wichtig
          </span>{" "}
          waren, um{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "das Gesicht zu wahren",
                "prestiji korumak (Deyim: das Gesicht wahren - prestiji korumak, itibarını kurtarmak)",
                e
              )
            }
          >
            das Gesicht zu wahren
          </span>{" "}
          und die Teamdynamik zu stärken.
        </>,
        <>
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "Liebe geht durch den Magen",
                "sevgi mideden geçer (Deyim: Liebe geht durch den Magen - sevgi mideden geçer, burada mecazi olarak işini tutkuyla yapmak)",
                e
              )
            }
          >
            Liebe geht durch den Magen
          </span>
          , sagt man, und Markus liebte seinen neuen Job wirklich.
        </>,
        <>
          Die Arbeit füllte ihn aus und{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "auf die Dauer",
                "uzun vadede (Deyim: auf die Dauer - uzun vadede, zamanla)",
                e
              )
            }
          >
            auf die Dauer
          </span>{" "}
          wirkte sich die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("positive", "olumlu", e)}
          >
            positive
          </span>{" "}
          Umgebung auf sein gesamtes Leben aus.
        </>,
        <>
          Er hatte gelernt, nicht{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "auf dem Holzweg zu sein",
                "yanlış yolda olmadığını (Deyim: auf dem Holzweg sein - yanlış yolda olmak, yanılmak)",
                e
              )
            }
          >
            auf dem Holzweg zu sein
          </span>
          , wenn es um seine Karriereentscheidungen ging.
        </>,
        <>
          Manchmal dachte er zurück an seinen alten Job und war{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("froh", "memnun", e)}
          >
            froh
          </span>
          , dass er den Mut gehabt hatte,{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "eine Entscheidung zu treffen",
                "bir karar verme (Deyim: eine Entscheidung treffen - karar vermek)",
                e
              )
            }
          >
            eine Entscheidung zu treffen
          </span>
          .
        </>,
        <>
          Er hatte sich nicht{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "zum Affen gemacht",
                "kendini aptal yerine koymamıştı (Deyim: sich zum Affen machen - kendini aptal yerine koymak, gülünç duruma düşmek)",
                e
              )
            }
          >
            zum Affen gemacht
          </span>
          , indem er in einer{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick("unbefriedigenden", "tatmin edici olmayan", e)
            }
          >
            unbefriedigenden
          </span>{" "}
          Position geblieben war.
        </>,
        <>
          Ein{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("guter", "iyi", e)}
          >
            guter
          </span>{" "}
          Freund hatte ihm einmal gesagt: "Manchmal muss man{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "jemandem das Herz brechen",
                "birinin kalbini kırmak (Deyim: jemandem das Herz brechen - birinin kalbini kırmak)",
                e
              )
            }
          >
            jemandem das Herz brechen
          </span>
          , um etwas Neues zu beginnen."
        </>,
        <>
          Das brachte die Situation{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("perfekt", "mükemmel", e)}
          >
            perfekt
          </span>{" "}
          auf den Punkt.
          <br />
          Markus hatte sein altes Arbeitsleben hinter sich gelassen und war
          nicht{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "aus der Haut gefahren",
                "çıldırmamıştı (Deyim: aus der Haut fahren - çıldırmak, çok sinirlenmek)",
                e
              )
            }
          >
            aus der Haut gefahren
          </span>
          , als Schwierigkeiten auftraten.
        </>,
        <>
          Wenn seine Familie und Freunde ihn fragten, ob er mit seiner
          Entscheidung zufrieden sei, konnte er{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("ehrlich", "dürüstçe", e)}
          >
            ehrlich
          </span>{" "}
          antworten:
          <br />
          "Ich bin jetzt genau da, wo ich sein sollte.
          <br />
          Es war nicht immer{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("leicht", "kolay", e)}
          >
            leicht
          </span>
          , aber es hat sich gelohnt, nicht{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "jemandem das Herz zu brechen",
                "kimsenin kalbini kırmak (Deyim: jemandem das Herz brechen - birinin kalbini kırmak)",
                e
              )
            }
          >
            jemandem das Herz zu brechen
          </span>
          , sondern meinen eigenen Weg zu gehen."
        </>,
        <>
          Manchmal{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "geriet er sich mit seinen Kollegen in die Haare",
                "tartışıyordu (Deyim: sich in die Haare geraten - tartışmak, kavga etmek)",
                e
              )
            }
          >
            geriet er sich mit seinen Kollegen in die Haare
          </span>{" "}
          wegen Kleinigkeiten, aber das gehörte zum Arbeitsalltag.
        </>,
        <>
          Was zählte, war, dass er nie{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "jemanden im Stich ließ",
                "kimseyi yüzüstü bırakmaması (Deyim: jemanden im Stich lassen - birini yüzüstü bırakmak)",
                e
              )
            }
          >
            jemanden im Stich ließ
          </span>{" "}
          und immer versuchte, andere{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "auf die Palme zu bringen",
                "heyecanlandırmaya çalışmasıydı (Deyim: jemanden auf die Palme bringen - birini çıldırmak, sinirlendirmek; burada mecazi olarak heyecanlandırmak)",
                e
              )
            }
          >
            auf die Palme zu bringen
          </span>
          , wenn es um{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("innovative", "yenilikçi", e)}
          >
            innovative
          </span>{" "}
          Ideen ging, nicht um persönliche Konflikte.
        </>,
        <>
          Eines Tages traf Markus seinen alten Chef bei einer Konferenz.
          <br />
          Sie{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "standen in Verbindung",
                "iletişim halindeydiler (Deyim: in Verbindung stehen - iletişim halinde olmak)",
                e
              )
            }
          >
            standen in Verbindung
          </span>{" "}
          miteinander, seit Markus das Unternehmen verlassen hatte, aber es war
          das{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("erste", "ilk", e)}
          >
            erste
          </span>{" "}
          persönliche Treffen.
        </>,
        <>
          "Du siehst{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("gut", "iyi", e)}
          >
            gut
          </span>{" "}
          aus", sagte sein ehemaliger Chef.
          <br />
          "Der Jobwechsel scheint die{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("richtige", "doğru", e)}
          >
            richtige
          </span>{" "}
          Entscheidung gewesen zu sein."
          <br />
          "Ja, aber ich bin dir{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("dankbar", "minnettarım", e)}
          >
            dankbar
          </span>{" "}
          für alles, was ich bei dir gelernt habe", antwortete Markus.
          <br />
          Er wollte{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "einen Vorschlag machen",
                "bir öneride bulunmak (Deyim: einen Vorschlag machen - öneride bulunmak)",
                e
              )
            }
          >
            einen Vorschlag machen
          </span>
          :
        </>,
        <>
          "Vielleicht könnten unsere Unternehmen in Zukunft zusammenarbeiten?
          <br />
          Ich glaube, wir könnten gemeinsam{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "etwas auf die Beine stellen",
                "bir şeyler yapabiliriz (Deyim: etwas auf die Beine stellen - bir şeyi hayata geçirmek, gerçekleştirmek)",
                e
              )
            }
          >
            etwas auf die Beine stellen
          </span>
          , das beiden Seiten nutzt."
        </>,
        <>
          Der ehemalige Chef nickte und meinte: "Lass uns{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "darüber nachdenken",
                "bunu düşünelim (Deyim: darüber nachdenken - düşünmek, değerlendirmek)",
                e
              )
            }
          >
            darüber nachdenken
          </span>
          .<br />
          Ich{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "stehe dir zur Verfügung",
                "her zaman hazırım (Deyim: zur Verfügung stehen - hazır olmak, müsait olmak)",
                e
              )
            }
          >
            stehe dir zur Verfügung
          </span>{" "}
          für Gespräche jederzeit."
        </>,
        <>
          Als Markus nach Hause fuhr, dachte er darüber nach, wie{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("viel", "çok", e)}
          >
            viel
          </span>{" "}
          sich in seinem Leben in{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("kurzer", "kısa", e)}
          >
            kurzer
          </span>{" "}
          Zeit verändert hatte.
          <br />
          Er hatte eine{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("wichtige", "önemli", e)}
          >
            wichtige
          </span>{" "}
          Lektion gelernt: Man sollte nicht{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) =>
              handleWordClick(
                "die Daumen drehen",
                "boş oturmamalı (Deyim: die Daumen drehen - boş oturmak, hiçbir şey yapmamak)",
                e
              )
            }
          >
            die Daumen drehen
          </span>{" "}
          und auf bessere Zeiten warten, sondern aktiv werden und Veränderungen
          herbeiführen.
        </>,
        <>
          Sein Leben hatte eine{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("neue", "yeni", e)}
          >
            neue
          </span>{" "}
          Richtung eingeschlagen, weil er den Mut gehabt hatte, seine
          Komfortzone zu verlassen.
          <br />
          Und das war kein Ende, sondern erst der Anfang eines{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={(e) => handleWordClick("spannenden", "heyecan verici", e)}
          >
            spannenden
          </span>{" "}
          neuen Kapitels in seinem Lebensweg.
        </>,
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black p-8">
      <div className="max-w-3xl mx-auto">
        {storyContent.map((section, index) => (
          <div key={index} className="mb-8">
            <h1 className="text-3xl font-bold mb-4 text-center">
              {section.title}
            </h1>
            {section.paragraphs.map((paragraph, pIndex) => (
              <p key={pIndex} className="mb-4 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>

      {tooltip.visible && (
        <div
          className="fixed bg-gray-800 text-white p-2 rounded shadow-lg max-w-xs"
          style={{ top: tooltip.y + 10, left: tooltip.x + 10 }}
          onClick={handleCloseTooltip}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
};

export default Deyim;
