import React from "react";

const Makale2 = () => {
  const content = [
    {
      text: "Die Politik in Deutschland steht vor einer entscheidenden Wende. Nach einer intensiven Wahlkampagne, die die öffentliche Meinung stark polarisiert hat, haben die Bürger in der Bundeswahl ein neues Parlament ",
      bold: "gewählt",
      translation: "seçmek",
      rest: ". Die Wahlbeteiligung war überraschend hoch, was die Bedeutung der Demokratie unterstreicht. Die Bürger haben mit ihrer Stimme über die Zukunft des Staates ",
    },
    {
      bold: "entschieden",
      translation: "karar vermek",
      rest: ", während die Meinungsforschung und Umfragen die Hochrechnung der Ergebnisse präzise vorhersagten. Die Direktwahl und die Briefwahl ermöglichten es, dass sowohl die Erststimme als auch die Zweitstimme gezählt wurden, um die Sitzverteilung im Bundestag zu ",
    },
    {
      bold: "bestimmen",
      translation: "belirlemek",
      rest: ".",
    },
    {
      text: "Die Regierungspartei, eine konservative Koalition, konnte die Wahlen mit deutlichem Vorsprung ",
      bold: "gewinnen",
      translation: "kazanmak",
      rest: ", während die Opposition, die sich als progressiv und sozialdemokratisch positioniert, überraschend eine Wahlniederlage ",
    },
    {
      bold: "erlitt",
      translation: "uğramak",
      rest: ". Der Wahlsieger, ein erfahrener Politiker, wird nun als Bundeskanzler ",
    },
    {
      bold: "führen",
      translation: "yönetmek",
      rest: " und die Exekutive ",
    },
    {
      bold: "leiten",
      translation: "yönlendirmek",
      rest: ". Seine Partei hat ihren Spitzenkandidaten bereits im Vorfeld ",
    },
    {
      bold: "nominiert",
      translation: "aday göstermek",
      rest: " und im Wahlkampf klar für soziale Gerechtigkeit und nachhaltige Entwicklung argumentiert. Doch die Wähler waren gespalten: Während einige die zentristische Haltung der Regierung ",
    },
    {
      bold: "schätzten",
      translation: "değer vermek",
      rest: ", kritisierten andere deren populistischen Ansätze.",
    },
    {
      text: "Die Verfassung garantiert die Gewaltenteilung, sodass die Legislative, vertreten durch den Bundestag und den Bundesrat, die Judikative und die Exekutive ",
      bold: "kontrolliert",
      translation: "kontrol etmek",
      rest: ". Der Rechtsstaat bleibt ein zentraler Pfeiler, und die Menschenrechte, einschließlich der Pressefreiheit und der Meinungsfreiheit, werden strikt ",
    },
    {
      bold: "geschützt",
      translation: "korumak",
      rest: ". Dennoch hat die Desinformation in den sozialen Medien die Debatte erschwert. Journalisten mussten einen Medienskandal ",
    },
    {
      bold: "enthüllen",
      translation: "ortaya çıkarmak",
      rest: ", bei dem Fehlinformationen verbreitet wurden, um die Wähler zu ",
    },
    {
      bold: "beeinflussen",
      translation: "etkilemek",
      rest: ".",
    },
    {
      text: "Im Parlament wird nun intensiv über neue Gesetze ",
      bold: "debattiert",
      translation: "tartışmak",
      rest: ". Der Bundestag hat kürzlich ein Gesetz ",
    },
    {
      bold: "verabschiedet",
      translation: "onaylamak",
      rest: ", das die Steuerpolitik novelliert und nächste Woche in Kraft tritt. Dieses Gesetz gilt für alle Bundesländer und zielt darauf ab, die Staatsverschuldung zu ",
    },
    {
      bold: "senken",
      translation: "indirmek",
      rest: ". Die Regierung plant, die Verwaltung zu ",
    },
    {
      bold: "modernisieren",
      translation: "modernize etmek",
      rest: " und den Finanzmarkt strenger zu ",
    },
    {
      bold: "regulieren",
      translation: "düzenlemek",
      rest: ". Gleichzeitig will sie die Infrastruktur durch gezielte Investitionen ",
    },
    {
      bold: "fördern",
      translation: "teşvik etmek",
      rest: ", während die Landwirtschaft weiter ",
    },
    {
      bold: "subventioniert",
      translation: "sübvansiyon sağlamak",
      rest: " wird. Kritiker widersprechen jedoch und ",
    },
    {
      bold: "fordern",
      translation: "talep etmek",
      rest: ", dass die Sozialausgaben nicht gekürzt werden.",
    },
    {
      text: "Die Opposition hat sich klar gegen diese Pläne ausgesprochen und Neuwahlen ",
      bold: "gefordert",
      translation: "talep etmek",
      rest: ". Sie ",
    },
    {
      bold: "behauptet",
      translation: "iddia etmek",
      rest: ", die Regierung sei an den Verhandlungen über die Wirtschaftspolitik ",
    },
    {
      bold: "gescheitert",
      translation: "başarısız olmak",
      rest: ". Die Fraktion der sozialistischen Partei im Parlament hat zudem einen Skandal ",
    },
    {
      bold: "aufgedeckt",
      translation: "ortaya çıkarmak",
      rest: ", der dazu führte, dass ein Minister ",
    },
    {
      bold: "zurücktreten",
      translation: "istifa etmek",
      rest: " musste. Der Bundeskanzler sah sich gezwungen, einen weiteren Minister zu ",
    },
    {
      bold: "entlassen",
      translation: "işten çıkarmak",
      rest: ", um die Koalition zu ",
    },
    {
      bold: "stabilisieren",
      translation: "istikrar sağlamak",
      rest: ". Die Berichterstattung in der Zeitung war gnadenlos: Schlagzeilen und Kommentare interpretierten die Ereignisse als Zeichen für eine Krise. Ein Artikel in einer bekannten Zeitung berichtete über die Pressekonferenz, in der der Bundeskanzler die Situation zu ",
    },
    {
      bold: "erklären",
      translation: "açıklamak",
      rest: " versuchte.",
    },
    {
      text: "Auf internationaler Ebene steht Deutschland vor Herausforderungen. Die Europäische Union ",
      bold: "kooperiert",
      translation: "işbirliği yapmak",
      rest: " eng mit den Mitgliedstaaten, und das Europäische Parlament sowie die Europäische Kommission ",
    },
    {
      bold: "ratifizieren",
      translation: "onaylamak",
      rest: " neue Abkommen. Deutschland hat kürzlich ein Abkommen ",
    },
    {
      bold: "unterzeichnet",
      translation: "imzalamak",
      rest: ", das die Klimapolitik ",
    },
    {
      bold: "stärkt",
      translation: "güçlendirmek",
      rest: ", um den Klimawandel zu ",
    },
    {
      bold: "bekämpfen",
      translation: "mücadele etmek",
      rest: ". Die Diplomatie spielt hierbei eine Schlüsselrolle: Der Botschafter Deutschlands bei der UNO ",
    },
    {
      bold: "vermittelt",
      translation: "aracılık etmek",
      rest: " in Friedensverhandlungen, während die NATO vor einer möglichen Eskalation eines Konflikts ",
    },
    {
      bold: "warnt",
      translation: "uyarmak",
      rest: ". Ein Staat drohte kürzlich mit Vergeltungsmaßnahmen, was die internationale Gemeinschaft dazu veranlasste, Sanktionen zu ",
    },
    {
      bold: "sanktionieren",
      translation: "yaptırım uygulamak",
      rest: " und eine Blockade zu ",
    },
    {
      bold: "verhängen",
      translation: "uygulamak",
      rest: ". Die Abrüstung bleibt ein Ziel, doch einige Staaten ",
    },
    {
      bold: "blockieren",
      translation: "engellemek",
      rest: " Fortschritte im UN-Sicherheitsrat.",
    },
    {
      text: "Die Energiewende ist ein weiteres zentrales Thema. Die Regierung ",
      bold: "liberalisiert",
      translation: "serbestleştirmek",
      rest: " den Energiemarkt, um erneuerbare Energien zu ",
    },
    {
      bold: "fördern",
      translation: "teşvik etmek",
      rest: ", während sie die Verstaatlichung bestimmter Sektoren ",
    },
    {
      bold: "durchsetzt",
      translation: "uygulamak",
      rest: ". Doch die Wirtschaftskrise und die Inflation belasten den Haushalt. Das Bruttoinlandsprodukt ",
    },
    {
      bold: "stagniert",
      translation: "durgunlaşmak",
      rest: ", und die Arbeitslosigkeit ",
    },
    {
      bold: "steigt",
      translation: "yükselmek",
      rest: ", was die Arbeitslosenquote ",
    },
    {
      bold: "erhöht",
      translation: "artırmak",
      rest: ". Die Europäische Zentralbank versucht, die Währung, den Euro, zu ",
    },
    {
      bold: "stabilisieren",
      translation: "istikrar sağlamak",
      rest: ", während die Zentralbank die Konjunktur ",
    },
    {
      bold: "reguliert",
      translation: "düzenlemek",
      rest: ". Die Regierung hat jedoch ",
    },
    {
      bold: "beschlossen",
      translation: "karar vermek",
      rest: ", sich weiter zu ",
    },
    {
      bold: "verschulden",
      translation: "borçlanmak",
      rest: ", um Verteidigungsausgaben zu ",
    },
    {
      bold: "erhöhen",
      translation: "artırmak",
      rest: ".",
    },
    {
      text: "Die Gesellschaft ist gespalten. Tausende ",
      bold: "protestieren",
      translation: "protesto etmek",
      rest: " gegen die neuen Gesetze und ",
    },
    {
      bold: "demonstrieren",
      translation: "gösteri yapmak",
      rest: " für mehr Demokratie. Einige Arbeiter haben sogar ",
    },
    {
      bold: "gestreikt",
      translation: "grev yapmak",
      rest: ", um höhere Löhne zu ",
    },
    {
      bold: "fordern",
      translation: "talep etmek",
      rest: ". Die Opposition hat die Abstimmung im Parlament ",
    },
    {
      bold: "boykottiert",
      translation: "boykot etmek",
      rest: ", während die Regierung versucht, ihre Reformen zu ",
    },
    {
      bold: "verteidigen",
      translation: "savunmak",
      rest: ". Die Medien ",
    },
    {
      bold: "kommentieren",
      translation: "yorum yapmak",
      rest: " die Ereignisse und ",
    },
    {
      bold: "veröffentlichen",
      translation: "yayınlamak",
      rest: " Berichte, die die Nachrichtenagenturen ",
    },
    {
      bold: "melden",
      translation: "bildirmek",
      rest: ". Experten ",
    },
    {
      bold: "betonen",
      translation: "vurgulamak",
      rest: " die Notwendigkeit, die Digitalisierung voranzutreiben, ohne den Datenschutz zu ",
    },
    {
      bold: "gefährden",
      translation: "tehlikeye atmak",
      rest: ". Die Überwachung bleibt ein kontroverses Thema, da sie die Meinungsfreiheit ",
    },
    {
      bold: "einschränken",
      translation: "kısıtlamak",
      rest: " könnte.",
    },
    {
      text: "Die Globalisierung und die Flüchtlingskrise prägen die Diskussionen. Die Einwanderungspolitik und die Sicherheitspolitik stehen im Fokus, während die Terrorismusbekämpfung und die Cyberkrieg-Bedrohung die Regierung vor neue Herausforderungen stellen. Die Regierung hat ein Dekret ",
      bold: "erlassen",
      translation: "yayınlamak",
      rest: ", um die Verwaltung zu ",
    },
    {
      bold: "delegieren",
      translation: "yetki devretmek",
      rest: " und die Kooperation mit den Nachbarländern zu ",
    },
    {
      bold: "stärken",
      translation: "güçlendirmek",
      rest: ". Ein Ministerpräsident eines Bundeslandes hat sich für eine Reform der Bildungspolitik ",
    },
    {
      bold: "eingesetzt",
      translation: "çaba göstermek",
      rest: ", während ein anderer die Gesundheitspolitik ",
    },
    {
      bold: "modernisieren",
      translation: "modernize etmek",
      rest: " will.",
    },
    {
      text: "Die Partei der Grünen hat ihre Anhänger ",
      bold: "mobilisiert",
      translation: "harekete geçirmek",
      rest: " und sich für eine liberalere Umweltpolitik ausgesprochen. Sie ",
    },
    {
      bold: "kritisieren",
      translation: "eleştirmek",
      rest: " die kapitalistische Ausrichtung der Regierung und ",
    },
    {
      bold: "fordern",
      translation: "talep etmek",
      rest: " eine sozialere Politik. Die nationalistischen und extremistischen Flügel anderer Parteien haben jedoch die Debatte erschwert, indem sie Propaganda ",
    },
    {
      bold: "verbreitet",
      translation: "yaymak",
      rest: " haben. Die Regierung hat daraufhin ein Interview ",
    },
    {
      bold: "gegeben",
      translation: "vermek",
      rest: ", um ihre Strategie zu ",
    },
    {
      bold: "erklären",
      translation: "açıklamak",
      rest: " und die Bürger zu ",
    },
    {
      bold: "überzeugen",
      translation: "ikna etmek",
      rest: ".",
    },
    {
      text: "Trotz der Herausforderungen bleibt die Regierung entschlossen, ihre Reformen ",
      bold: "durchzusetzen",
      translation: "uygulamak",
      rest: ". Der Bundespräsident hat in einer Rede die Wichtigkeit der internationalen Beziehungen ",
    },
    {
      bold: "betont",
      translation: "vurgulamak",
      rest: " und die Bündnisse mit der EU und der NATO ",
    },
    {
      bold: "gelobt",
      translation: "övmek",
      rest: ". Die Parlamente der Mitgliedstaaten ",
    },
    {
      bold: "koalieren",
      translation: "koalisyon kurmak",
      rest: " zunehmend, um die nachhaltige Entwicklung zu ",
    },
    {
      bold: "fördern",
      translation: "teşvik etmek",
      rest: ". Doch die Intervention in einem Bürgerkrieg und die Drohungen eines Regimes lassen die Spannungen ",
    },
    {
      bold: "eskalieren",
      translation: "artmak",
      rest: ". Die Regierung muss nun ",
    },
    {
      bold: "verhandeln",
      translation: "müzakere etmek",
      rest: ", um einen Vertrag zu ",
    },
    {
      bold: "schließen",
      translation: "imzalamak",
      rest: ", der den Frieden ",
    },
    {
      bold: "sichert",
      translation: "garanti etmek",
      rest: ".",
    },
    {
      text: "Die Zukunft Deutschlands hängt davon ab, wie die Politiker die Herausforderungen ",
      bold: "meistern",
      translation: "üstesinden gelmek",
      rest: ". Werden sie die Gesellschaft ",
    },
    {
      bold: "einen",
      translation: "birleştirmek",
      rest: " oder weiter polarisieren? Wird die Regierung die Bürger ",
    },
    {
      bold: "überzeugen",
      translation: "ikna etmek",
      rest: " und die Reformen erfolgreich ",
    },
    {
      bold: "durchsetzen",
      translation: "uygulamak",
      rest: "? Die Medien werden die Entwicklungen genau ",
    },
    {
      bold: "beobachten",
      translation: "gözlemlemek",
      rest: ", und die Bürger werden mit ihrer Stimme in der nächsten Wahl erneut ",
    },
    {
      bold: "entscheiden",
      translation: "karar vermek",
      rest: ".",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Eine politische Wende in Deutschland: Wahlen, Reform–
      </h1>
      <div className="max-w-3xl mx-auto space-y-4">
        {content.map((item, index) => (
          <p key={index} className="text-lg">
            {item.text && <span>{item.text}</span>}
            <span className="font-bold text-gray-100 relative group">
              {item.bold}
              <span className="absolute left-0 mt-1 bg-gray-800 text-gray-300 text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.translation}
              </span>
            </span>
            {item.rest && <span>{item.rest}</span>}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Makale2;
