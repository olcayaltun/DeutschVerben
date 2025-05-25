import React, { useState } from "react";

// German political terms with their Turkish translations
const translations = {
  Wahlen: "Seçimler",
  Demokratie: "Demokrasi",
  Wahlkampagne: "Seçim kampanyası",
  Meinungsforschung: "Kamuoyu araştırması",
  Umfragen: "Anketler",
  Hochrechnung: "Öngörü",
  Direktwahl: "Doğrudan seçim",
  Briefwahl: "Posta yoluyla oy",
  Erststimme: "İlk oy",
  Zweitstimme: "İkinci oy",
  Bundestag: "Federal Meclis",
  Regierungspartei: "İktidar partisi",
  Koalition: "Koalisyon",
  Opposition: "Muhalefet",
  Wahlniederlage: "Seçim yenilgisi",
  Wahlsieger: "Seçim galibi",
  Bundeskanzler: "Başbakan",
  Exekutive: "Yürütme",
  Spitzenkandidaten: "Baş aday",
  Wahlkampf: "Seçim kampanyası",
  zentristische: "Merkez",
  populistischen: "Popülist",
  Verfassung: "Anayasa",
  Gewaltenteilung: "Kuvvetler ayrılığı",
  Legislative: "Yasama",
  Bundesrat: "Federal Konsey",
  Judikative: "Yargı",
  Rechtsstaat: "Hukuk devleti",
  Menschenrechte: "İnsan hakları",
  Pressefreiheit: "Basın özgürlüğü",
  Meinungsfreiheit: "İfade özgürlüğü",
  Desinformation: "Yanlış bilgilendirme",
  Medienskandal: "Medya skandalı",
  Gesetz: "Kanun",
  verabschiedet: "Kabul edilmiş",
  novelliert: "Değiştirilmiş",
  Bundesländer: "Federal eyaletler",
  Staatsverschuldung: "Devlet borcu",
  Verwaltung: "İdare/Yönetim",
  Finanzmarkt: "Finans piyasası",
  Infrastruktur: "Altyapı",
  Landwirtschaft: "Tarım",
  subventioniert: "Sübvanse edilmiş",
  Sozialausgaben: "Sosyal harcamalar",
  Neuwahlen: "Erken seçim",
  Verhandlungen: "Müzakereler",
  Wirtschaftspolitik: "Ekonomi politikası",
  Fraktion: "Meclis grubu",
  Skandal: "Skandal",
  zurücktreten: "İstifa etmek",
  entlassen: "Görevden almak",
  Berichterstattung: "Habercilik",
  Schlagzeilen: "Manşetler",
  Kommentare: "Yorumlar",
  Artikel: "Makale",
  Pressekonferenz: "Basın toplantısı",
  "Europäische Union": "Avrupa Birliği",
  Mitgliedstaaten: "Üye ülkeler",
  "Europäisches Parlament": "Avrupa Parlamentosu",
  "Europäische Kommission": "Avrupa Komisyonu",
  ratifizieren: "Onaylamak",
  Abkommen: "Anlaşma",
  Klimapolitik: "İklim politikası",
  Klimawandel: "İklim değişikliği",
  Diplomatie: "Diplomasi",
  Botschafter: "Büyükelçi",
  UNO: "BM (Birleşmiş Milletler)",
  Friedensverhandlungen: "Barış görüşmeleri",
  NATO: "NATO",
  Eskalation: "Tırmanma",
  Konflikt: "Çatışma",
  Vergeltungsmaßnahmen: "Misilleme",
  Sanktionen: "Yaptırımlar",
  Blockade: "Abluka",
  Abrüstung: "Silahsızlanma",
  "UN-Sicherheitsrat": "BM Güvenlik Konseyi",
  Energiewende: "Enerji dönüşümü",
  liberalisiert: "Serbestleştirmek",
  "erneuerbare Energien": "Yenilenebilir enerji",
  Verstaatlichung: "Devletleştirme",
  Wirtschaftskrise: "Ekonomik kriz",
  Inflation: "Enflasyon",
  Haushalt: "Bütçe",
  Bruttoinlandsprodukt: "Gayri safi yurtiçi hasıla",
  Arbeitslosigkeit: "İşsizlik",
  Arbeitslosenquote: "İşsizlik oranı",
  "Europäische Zentralbank": "Avrupa Merkez Bankası",
  Währung: "Para birimi",
  Euro: "Euro",
  Zentralbank: "Merkez Bankası",
  Konjunktur: "Ekonomik durum",
  verschulden: "Borçlanmak",
  Verteidigungsausgaben: "Savunma harcamaları",
  protestieren: "Protesto etmek",
  demonstrieren: "Gösteri yapmak",
  gestreikt: "Grev yapmak",
  Abstimmung: "Oylama",
  boykottiert: "Boykot etmek",
  Nachrichtenagenturen: "Haber ajansları",
  Digitalisierung: "Dijitalleşme",
  Datenschutz: "Veri koruma",
  Überwachung: "Gözetim",
  Globalisierung: "Küreselleşme",
  Flüchtlingskrise: "Mülteci krizi",
  Einwanderungspolitik: "Göç politikası",
  Sicherheitspolitik: "Güvenlik politikası",
  Terrorismusbekämpfung: "Terörle mücadele",
  Cyberkrieg: "Siber savaş",
  Dekret: "Kararname",
  delegieren: "Yetki vermek",
  Ministerpräsident: "Eyalet başbakanı",
  Bildungspolitik: "Eğitim politikası",
  Gesundheitspolitik: "Sağlık politikası",
  Umweltpolitik: "Çevre politikası",
  kapitalistische: "Kapitalist",
  nationalistischen: "Milliyetçi",
  extremistischen: "Aşırıcı",
  Propaganda: "Propaganda",
  Interview: "Röportaj",
  Bundespräsident: "Cumhurbaşkanı",
  Bündnisse: "İttifaklar",
  Parlamente: "Parlamentolar",
  koalieren: "Koalisyon yapmak",
  "nachhaltige Entwicklung": "Sürdürülebilir kalkınma",
  Intervention: "Müdahale",
  Bürgerkrieg: "İç savaş",
  Regime: "Rejim",
  verhandeln: "Müzakere etmek",
  Vertrag: "Antlaşma",
};

const Makale1 = () => {
  const [tooltip, setTooltip] = useState({ show: false, text: "", x: 0, y: 0 });

  // Process the article to highlight the translatable words
  const processText = (text) => {
    let parts = [text]; // Start with the full text as a single part

    // Split the text by each translatable word
    Object.keys(translations).forEach((word) => {
      parts = parts.flatMap((part, index) => {
        if (typeof part !== "string") return [part]; // Skip already processed JSX elements
        return part
          .split(new RegExp(`(${word})`, "g"))
          .map((subPart, subIndex) => {
            if (subPart === word) {
              return (
                <span
                  key={`word-${index}-${subIndex}`}
                  className="font-bold cursor-help border-b border-dotted border-gray-500"
                  onMouseEnter={(e) => {
                    setTooltip({
                      show: true,
                      text: translations[word],
                      x: e.clientX,
                      y: e.clientY,
                    });
                  }}
                  onMouseLeave={() =>
                    setTooltip({ show: false, text: "", x: 0, y: 0 })
                  }
                >
                  {subPart}
                </span>
              );
            }
            return subPart;
          });
      });
    });

    return parts;
  };

  // Split the article into paragraphs
  const paragraphs = `Eine politische Wende in Deutschland: Wahlen, Reform–
Die Politik in Deutschland steht vor einer entscheidenden Wende. Nach einer intensiven Wahlkampagne, die die öffentliche Meinung stark polarisiert hat, haben die Bürger in der Bundeswahl ein neues Parlament gewählt. Die Wahlbeteiligung war überraschend hoch, was die Bedeutung der Demokratie unterstreicht. Die Bürger haben mit ihrer Stimme über die Zukunft des Staates entschieden, während die Meinungsforschung und Umfragen die Hochrechnung der Ergebnisse präzise vorhersagten. Die Direktwahl und die Briefwahl ermöglichten es, dass sowohl die Erststimme als auch die Zweitstimme gezählt wurden, um die Sitzverteilung im Bundestag zu bestimmen.
Die Regierungspartei, eine konservative Koalition, konnte die Wahlen mit deutlichem Vorsprung gewinnen, während die Opposition, die sich als progressiv und sozialdemokratisch positioniert, überraschend eine Wahlniederlage erlitt. Der Wahlsieger, ein erfahrener Politiker, wird nun als Bundeskanzler führen und die Exekutive leiten. Seine Partei hat ihren Spitzenkandidaten bereits im Vorfeld nominiert und im Wahlkampf klar für soziale Gerechtigkeit und nachhaltige Entwicklung argumentiert. Doch die Wähler waren gespalten: Während einige die zentristische Haltung der Regierung schätzten, kritisierten andere deren populistischen Ansätze.
Die Verfassung garantiert die Gewaltenteilung, sodass die Legislative, vertreten durch den Bundestag und den Bundesrat, die Judikative und die Exekutive kontrolliert. Der Rechtsstaat bleibt ein zentraler Pfeiler, und die Menschenrechte, einschließlich der Pressefreiheit und der Meinungsfreiheit, werden strikt geschützt. Dennoch hat die Desinformation in den sozialen Medien die Debatte erschwert. Journalisten mussten einen Medienskandal enthüllen, bei dem Fehlinformationen verbreitet wurden, um die Wähler zu beeinflussen.
Im Parlament wird nun intensiv über neue Gesetze debattiert. Der Bundestag hat kürzlich ein Gesetz verabschiedet, das die Steuerpolitik novelliert und nächste Woche in Kraft tritt. Dieses Gesetz gilt für alle Bundesländer und zielt darauf ab, die Staatsverschuldung zu senken. Die Regierung plant, die Verwaltung zu modernisieren und den Finanzmarkt strenger zu regulieren. Gleichzeitig will sie die Infrastruktur durch gezielte Investitionen fördern, während die Landwirtschaft weiter subventioniert wird. Kritiker widersprechen jedoch und fordern, dass die Sozialausgaben nicht gekürzt werden.
Die Opposition hat sich klar gegen diese Pläne ausgesprochen und Neuwahlen gefordert. Sie behauptet, die Regierung sei an den Verhandlungen über die Wirtschaftspolitik gescheitert. Die Fraktion der sozialistischen Partei im Parlament hat zudem einen Skandal aufgedeckt, der dazu führte, dass ein Minister zurücktreten musste. Der Bundeskanzler sah sich gezwungen, einen weiteren Minister zu entlassen, um die Koalition zu stabilisieren. Die Berichterstattung in der Zeitung war gnadenlos: Schlagzeilen und Kommentare interpretierten die Ereignisse als Zeichen für eine Krise. Ein Artikel in einer bekannten Zeitung berichtete über die Pressekonferenz, in der der Bundeskanzler die Situation zu erklären versuchte.
Auf internationaler Ebene steht Deutschland vor Herausforderungen. Die Europäische Union kooperiert eng mit den Mitgliedstaaten, und das Europäisches Parlament sowie die Europäische Kommission ratifizieren neue Abkommen. Deutschland hat kürzlich ein Abkommen unterzeichnet, das die Klimapolitik stärkt, um den Klimawandel zu bekämpfen. Die Diplomatie spielt hierbei eine Schlüsselrolle: Der Botschafter Deutschlands bei der UNO vermittelt in Friedensverhandlungen, während die NATO vor einer möglichen Eskalation eines Konflikts warnt. Ein Staat drohte kürzlich mit Vergeltungsmaßnahmen, was die internationale Gemeinschaft dazu veranlasste, Sanktionen zu sanktionieren und eine Blockade zu verhängen. Die Abrüstung bleibt

 ein Ziel, doch einige Staaten blockieren Fortschritte im UN-Sicherheitsrat.
Die Energiewende ist ein weiteres zentrales Thema. Die Regierung liberalisiert den Energiemarkt, um erneuerbare Energien zu fördern, während sie die Verstaatlichung bestimmter Sektoren durchsetzt. Doch die Wirtschaftskrise und die Inflation belasten den Haushalt. Das Bruttoinlandsprodukt stagniert, und die Arbeitslosigkeit steigt, was die Arbeitslosenquote erhöht. Die Europäische Zentralbank versucht, die Währung, den Euro, zu stabilisieren, während die Zentralbank die Konjunktur reguliert. Die Regierung hat jedoch beschlossen, sich weiter zu verschulden, um Verteidigungsausgaben zu erhöhen.
Die Gesellschaft ist gespalten. Tausende protestieren gegen die neuen Gesetze und demonstrieren für mehr Demokratie. Einige Arbeiter haben sogar gestreikt, um höhere Löhne zu fordern. Die Opposition hat die Abstimmung im Parlament boykottiert, während die Regierung versucht, ihre Reformen zu verteidigen. Die Medien kommentieren die Ereignisse und veröffentlichen Berichte, die die Nachrichtenagenturen melden. Experten betonen die Notwendigkeit, die Digitalisierung voranzutreiben, ohne den Datenschutz zu gefährden. Die Überwachung bleibt ein kontroverses Thema, da sie die Meinungsfreiheit einschränken könnte.
Die Globalisierung und die Flüchtlingskrise prägen die Diskussionen. Die Einwanderungspolitik und die Sicherheitspolitik stehen im Fokus, während die Terrorismusbekämpfung und die Cyberkrieg-Bedrohung die Regierung vor neue Herausforderungen stellen. Die Regierung hat ein Dekret erlassen, um die Verwaltung zu delegieren und die Kooperation mit den Nachbarländern zu stärken. Ein Ministerpräsident eines Bundeslandes hat sich für eine Reform der Bildungspolitik eingesetzt, während ein anderer die Gesundheitspolitik modernisieren will.
Die Partei der Grünen hat ihre Anhänger mobilisiert und sich für eine liberalere Umweltpolitik ausgesprochen. Sie kritisieren die kapitalistische Ausrichtung der Regierung und fordern eine sozialere Politik. Die nationalistischen und extremistischen Flügel anderer Parteien haben jedoch die Debatte erschwert, indem sie Propaganda verbreitet haben. Die Regierung hat daraufhin ein Interview gegeben, um ihre Strategie zu erklären und die Bürger zu überzeugen.
Trotz der Herausforderungen bleibt die Regierung entschlossen, ihre Reformen durchzusetzen. Der Bundespräsident hat in einer Rede die Wichtigkeit der internationalen Beziehungen betont und die Bündnisse mit der EU und der NATO gelobt. Die Parlamente der Mitgliedstaaten koalieren zunehmend, um die nachhaltige Entwicklung zu fördern. Doch die Intervention in einem Bürgerkrieg und die Drohungen eines Regimes lassen die Spannungen eskalieren. Die Regierung muss nun verhandeln, um einen Vertrag zu schließen, der den Frieden sichert.
Die Zukunft Deutschlands hängt davon ab, wie die Politiker die Herausforderungen meistern. Werden sie die Gesellschaft einen oder weiter polarisieren? Wird die Regierung die Bürger überzeugen und die Reformen erfolgreich durchsetzen? Die Medien werden die Entwicklungen genau beobachten, und die Bürger werden mit ihrer Stimme in der nächsten Wahl erneut entscheiden.`.split(
    "\n"
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Eine politische Wende in Deutschland: Wahlen, Reform
      </h1>

      <div className="mb-4 bg-blue-50 p-4 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-700">
          <span className="font-bold">Kullanım:</span> Koyu renkli kelimelerin
          üzerine fare imlecini getirerek Türkçe anlamlarını görebilirsiniz.
        </p>
      </div>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-justify">
            {processText(paragraph)}
          </p>
        ))}
      </div>

      {tooltip.show && (
        <div
          className="fixed bg-black text-white px-3 py-1 rounded-md text-sm shadow-lg z-50"
          style={{
            left: `${tooltip.x + 10}px`,
            top: `${tooltip.y - 30}px`,
            transform: "translateX(-50%)",
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
};

export default Makale1;
