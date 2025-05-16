import React from "react";

const Makale1 = () => {
  const content = [
    {
      text: "In einer Zeit globaler Vernetzung muss die internationale Gemeinschaft neue Wege ",
      bold: "finden",
      translation: "bulmak",
      rest: ", um komplexe Probleme zu lösen. Experten ",
    },
    {
      bold: "sagen",
      translation: "söylemek",
      rest: ", dass multilaterale Zusammenarbeit wichtiger denn je ist. Führende Politiker ",
    },
    {
      bold: "versuchen",
      translation: "denemek",
      rest: ", auf verschiedene Krisen angemessen zu reagieren.",
    },
    {
      text: "Die deutsche Bundesregierung ",
      bold: "erklären",
      translation: "açıklamak",
      rest: " regelmäßig ihre außenpolitischen Ziele und ",
    },
    {
      bold: "betonen",
      translation: "vurgulamak",
      rest: " die Bedeutung internationaler Kooperation. Der Bundeskanzler ",
    },
    {
      bold: "mitteilen",
      translation: "bildirmek",
      rest: ' bei Pressekonferenzen: "Wir ',
    },
    {
      bold: "brauchen",
      translation: "ihtiyacı olmak",
      rest: ' ein geeintes Europa." Die Medien ',
    },
    {
      bold: "berichten",
      translation: "bildirmek",
      rest: " ausführlich über seine Reden.",
    },
    {
      text: "Oppositionsparteien ",
      bold: "kritisieren",
      translation: "eleştirmek",
      rest: " hingegen die Regierungspolitik und ",
    },
    {
      bold: "fordern",
      translation: "talep etmek",
      rest: " einen anderen Kurs. Sie ",
    },
    {
      bold: "warnen",
      translation: "uyarmak",
      rest: " vor den Folgen aktueller Entscheidungen. Ein Oppositionsführer ",
    },
    {
      bold: "ankündigen",
      translation: "duyurmak",
      rest: " bereits eine andere Politik nach der nächsten Wahl und ",
    },
    {
      bold: "bestätigen",
      translation: "doğrulamak",
      rest: " seine Absicht zu kandidieren.",
    },
    {
      text: "Die Regierung ",
      bold: "ablehnen",
      translation: "reddetmek",
      rest: " diese Kritik entschieden. Sie ",
    },
    {
      bold: "planen",
      translation: "planlamak",
      rest: " stattdessen weitere Initiativen und ",
    },
    {
      bold: "beschließen",
      translation: "karar vermek",
      rest: " regelmäßig neue Gesetze. Das Wirtschaftsministerium ",
    },
    {
      bold: "veröffentlichen",
      translation: "yayınlamak",
      rest: " kürzlich eine Studie zur Wettbewerbsfähigkeit und ",
    },
    {
      bold: "hinweisen",
      translation: "işaret etmek",
      rest: " auf Handlungsbedarf in mehreren Branchen.",
    },
    {
      text: "Experten ",
      bold: "informieren",
      translation: "bilgilendirmek",
      rest: " die Öffentlichkeit über komplexe Zusammenhänge. Manche Analysten ",
    },
    {
      bold: "behaupten",
      translation: "iddia etmek",
      rest: ", dass fundamentale Reformen nötig seien. Wirtschaftsvertreter ",
    },
    {
      bold: "zustimmen",
      translation: "onaylamak",
      rest: " dieser Einschätzung mehrheitlich und ",
    },
    {
      bold: "diskutieren",
      translation: "tartışmak",
      rest: " mögliche Lösungsansätze.",
    },
    {
      text: "Die Finanzmärkte ",
      bold: "reagieren",
      translation: "tepki göstermek",
      rest: " sensibel auf politische Entwicklungen. Behörden ",
    },
    {
      bold: "untersuchen",
      translation: "incelemek",
      rest: " auffällige Kursbewegungen. Große Konzerne ",
    },
    {
      bold: "präsentieren",
      translation: "sunmak",
      rest: " trotz Unsicherheiten solide Quartalszahlen, während Gewerkschaften mit der Arbeitgeberseite ",
    },
    {
      bold: "verhandeln",
      translation: "müzakere etmek",
      rest: ".",
    },
    {
      text: "Erfolgreiche Unternehmen ",
      bold: "gewinnen",
      translation: "kazanmak",
      rest: " Marktanteile, während schwächere Firmen ",
    },
    {
      bold: "verlieren",
      translation: "kaybetmek",
      rest: ". Die Aktienkurse ",
    },
    {
      bold: "steigen",
      translation: "yükselmek",
      rest: " und ",
    },
    {
      bold: "sinken",
      translation: "düşmek",
      rest: " im Wochenverlauf. Die Inflation ",
    },
    {
      bold: "zunehmen",
      translation: "artmak",
      rest: ", während das Vertrauen der Verbraucher ",
    },
    {
      bold: "abnehmen",
      translation: "azalmak",
      rest: ". Die Zentralbank muss entscheiden, ob sie die Zinsen ",
    },
    {
      bold: "erhöhen",
      translation: "yükseltmek",
      rest: " oder ",
    },
    {
      bold: "senken",
      translation: "indirmek",
      rest: " sollte.",
    },
    {
      text: "Neue Technologieprojekte ",
      bold: "starten",
      translation: "başlamak",
      rest: " regelmäßig, andere hingegen ",
    },
    {
      bold: "beenden",
      translation: "bitirmek",
      rest: " ihre Aktivitäten. Die Regierung ",
    },
    {
      bold: "einführen",
      translation: "tanıtmak",
      rest: " neue Fördermaßnahmen und ",
    },
    {
      bold: "abschaffen",
      translation: "kaldırmak",
      rest: " veraltete Vorschriften. Unternehmen ",
    },
    {
      bold: "ändern",
      translation: "değiştirmek",
      rest: " ihre Strategien und ",
    },
    {
      bold: "entwickeln",
      translation: "geliştirmek",
      rest: " innovative Produkte.",
    },
    {
      text: "Behörden ",
      bold: "prüfen",
      translation: "incelemek",
      rest: " Anträge sorgfältig. Erfolgreiche Verhandlungsteams ",
    },
    {
      bold: "erreichen",
      translation: "ulaşmak",
      rest: " ihre Ziele, während andere ",
    },
    {
      bold: "scheitern",
      translation: "başarısız olmak",
      rest: ". Internationale Konferenzen ",
    },
    {
      bold: "stattfinden",
      translation: "gerçekleşmek",
      rest: " regelmäßig, obwohl einige wegen unvorhergesehener Umstände ",
    },
    {
      bold: "ausfallen",
      translation: "iptal olmak",
      rest: ".",
    },
    {
      text: "Bürger ",
      bold: "protestieren",
      translation: "protesto etmek",
      rest: " gegen unpopuläre Maßnahmen und ",
    },
    {
      bold: "demonstrieren",
      translation: "gösteri yapmak",
      rest: " für ihre Rechte. Die Polizei ",
    },
    {
      bold: "festnehmen",
      translation: "tutuklamak",
      rest: " bei Ausschreitungen einige Randalierer und ",
    },
    {
      bold: "verhaften",
      translation: "tutuklamak",
      rest: " Verdächtige. Unternehmen ",
    },
    {
      bold: "entlassen",
      translation: "işten çıkarmak",
      rest: " Mitarbeiter in Krisenzeiten, aber ",
    },
    {
      bold: "einstellen",
      translation: "işe almak",
      rest: " auch neue Fachkräfte in Wachstumsbereichen.",
    },
    {
      text: "Staaten ",
      bold: "investieren",
      translation: "yatırım yapmak",
      rest: " in Infrastruktur, müssen aber gleichzeitig ",
    },
    {
      bold: "sparen",
      translation: "tasarruf etmek",
      rest: ". Große Konzerne ",
    },
    {
      bold: "verkaufen",
      translation: "satmak",
      rest: " unrentable Geschäftsbereiche und ",
    },
    {
      bold: "kaufen",
      translation: "satın almak",
      rest: " vielversprechende Start-ups. Die Verwaltung ",
    },
    {
      bold: "umsetzen",
      translation: "uygulamak",
      rest: " politische Beschlusse effizient.",
    },
    {
      text: "Behörden ",
      bold: "verbieten",
      translation: "yasaklamak",
      rest: " gefährliche Praktiken, aber ",
    },
    {
      bold: "erlauben",
      translation: "izin vermek",
      rest: " Innovation innerhalb definierter Grenzen. Die Europäische Union ",
    },
    {
      bold: "unterstützen",
      translation: "desteklemek",
      rest: " ihre Mitgliedstaaten bei Reformen. Anträge werden entweder ",
    },
    {
      bold: "genehmigen",
      translation: "onaylamak",
      rest: " oder ",
    },
    {
      bold: "ablehnen",
      translation: "reddetmek",
      rest: ".",
    },
    {
      text: "In Krisenzeiten ",
      bold: "verschärfen",
      translation: "sertleştirmek",
      rest: " Regierungen die Kontrollen, später ",
    },
    {
      bold: "lockern",
      translation: "gevşetmek",
      rest: " sie diese wieder. Politiker müssen ihre Entscheidungen ",
    },
    {
      bold: "begründen",
      translation: "gerekçelendirmek",
      rest: ". Experten ",
    },
    {
      bold: "kommentieren",
      translation: "yorum yapmak",
      rest: " aktuelle Ereignisse. Die Opposition ",
    },
    {
      bold: "vorwerfen",
      translation: "suçlamak",
      rest: " der Regierung Untätigkeit, während Minister ihre Politik ",
    },
    {
      bold: "verteidigen",
      translation: "savunmak",
      rest: ".",
    },
    {
      text: "Nach Skandalen ",
      bold: "zurücktreten",
      translation: "istifa etmek",
      rest: " manchmal hochrangige Politiker. Der Präsident ",
    },
    {
      bold: "ernennen",
      translation: "atamak",
      rest: " dann neue Minister. Die Bürger ",
    },
    {
      bold: "wählen",
      translation: "seçmek",
      rest: " alle vier Jahre eine neue Regierung. Ambitionierte Politiker ",
    },
    {
      bold: "kandidieren",
      translation: "aday olmak",
      rest: " für wichtige Ämter.",
    },
    {
      text: "Unzufriedene Arbeitnehmer ",
      bold: "streiken",
      translation: "grev yapmak",
      rest: " für bessere Bedingungen. Naturkatastrophen ",
    },
    {
      bold: "verursachen",
      translation: "neden olmak",
      rest: " oft erhebliche Schäden und ",
    },
    {
      bold: "auswirken",
      translation: "etkilemek",
      rest: " sich negativ auf die Wirtschaft. Die Polizei ",
    },
    {
      bold: "durchsetzen",
      translation: "uygulamak",
      rest: " Gesetze konsequent.",
    },
    {
      text: "Konfliktparteien ",
      bold: "vereinbaren",
      translation: "anlaşmak",
      rest: " manchmal Kompromisse. Verschiedene Behörden ",
    },
    {
      bold: "zusammenarbeiten",
      translation: "işbirliği yapmak",
      rest: " bei komplexen Ermittlungen. Zeugen ",
    },
    {
      bold: "aussagen",
      translation: "ifade vermek",
      rest: " vor Gericht. Wichtige Konferenzen ",
    },
    {
      bold: "beginnen",
      translation: "başlamak",
      rest: " oft mit einer Grundsatzrede.",
    },
    {
      text: "Wissenschaftler ",
      bold: "beobachten",
      translation: "gözlemlemek",
      rest: " gesellschaftliche Trends. Diplomaten ",
    },
    {
      bold: "unterschreiben",
      translation: "imzalamak",
      rest: " internationale Abkommen. Minister ",
    },
    {
      bold: "verantworten",
      translation: "sorumlu olmak",
      rest: " die Politik ihrer Ressorts. Bei Unfällen ",
    },
    {
      bold: "verletzen",
      translation: "yaralamak",
      rest: " sich leider immer wieder Menschen.",
    },
    {
      text: "In Krisengebieten ",
      bold: "sterben",
      translation: "ölmek",
      rest: " Menschen durch Gewalt. Die Wirtschaft ",
    },
    {
      bold: "wachsen",
      translation: "büyümek",
      rest: " in stabilen Zeiten. Botschafter ",
    },
    {
      bold: "vertreten",
      translation: "temsil etmek",
      rest: " ihr Land im Ausland. Neue Gesetze ",
    },
    {
      bold: "betreffen",
      translation: "ilgilendirmek",
      rest: " verschiedene Bevölkerungsgruppen unterschiedlich stark.",
    },
    {
      text: "Neue Bücher ",
      bold: "erscheinen",
      translation: "görünmek",
      rest: " regelmäßig zum Thema internationale Politik. Diplomaten ",
    },
    {
      bold: "vermeiden",
      translation: "kaçınmak",
      rest: " offene Konfrontationen. Unbedachte Äußerungen ",
    },
    {
      bold: "gefährden",
      translation: "tehlikeye atmak",
      rest: " manchmal das Vertrauen zwischen Staaten. Kluge Politik ",
    },
    {
      bold: "stärken",
      translation: "güçlendirmek",
      rest: " internationale Beziehungen, während Fehlentscheidungen sie ",
    },
    {
      bold: "schwächen",
      translation: "zayıflatmak",
      rest: ".",
    },
    {
      text: "Experten ",
      bold: "empfehlen",
      translation: "tavsiye etmek",
      rest: " langfristige Strategien. Forschungsinstitute ",
    },
    {
      bold: "analysieren",
      translation: "analiz etmek",
      rest: " komplexe Daten. Kritiker ",
    },
    {
      bold: "bezweifeln",
      translation: "şüphe etmek",
      rest: " oft offizielle Darstellungen. Große Konzerne ",
    },
    {
      bold: "übernehmen",
      translation: "devralmak",
      rest: " kleinere Wettbewerber.",
    },
    {
      text: "Schwache Verhandlungspartner ",
      bold: "aufgeben",
      translation: "vazgeçmek",
      rest: " manchmal ihre Forderungen. Beschuldigte ",
    },
    {
      bold: "zurückweisen",
      translation: "reddetmek",
      rest: " Anschuldigungen. Ermittler ",
    },
    {
      bold: "ausschließen",
      translation: "dışlamak",
      rest: " unwahrscheinliche Szenarien. Sicherheitsexperten ",
    },
    {
      bold: "einschätzen",
      translation: "değerlendirmek",
      rest: " Risiken sorgfältig.",
    },
    {
      text: "Untersuchungskommissionen ",
      bold: "feststellen",
      translation: "tespit etmek",
      rest: " Fehler und Versäumnisse. Politiker ",
    },
    {
      bold: "versprechen",
      translation: "söz vermek",
      rest: " vor Wahlen viele Verbesserungen. Wähler ",
    },
    {
      bold: "zweifeln",
      translation: "şüphelenmek",
      rest: " oft an diesen Zusagen. Die internationale Gemeinschaft muss gemeinsam handeln, um globale Herausforderungen zu bewältigen.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Die Herausforderungen der globalen Politik im 21. Jahrhundert
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

export default Makale1;
