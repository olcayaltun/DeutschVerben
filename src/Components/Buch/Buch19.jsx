import React, { useState } from "react";

const GermanStory = () => {
  const [hoveredWord, setHoveredWord] = useState(null);

  const verbDefinitions = {
    hatte_christianisiert: "christianisieren - Hristiyanlaştırmak",
    hatte_dahintergekommen: "dahinterkommen - Anlamak, farkına varmak",
    hatte_dargestellt: "darstellen - Temsil etmek",
    hatte_definiert: "definieren - Tanımlamak",
    hatte_demonstriert: "demonstrieren - Gösteri yapmak",
    hatte_desinfiziert: "desinfizieren - Dezenfekte etmek",
    hatte_durchgebrochen: "durchbrechen - Kırmak (engeli)",
    hatte_durchgebracht: "durchbringen - Geçindirmek",
    hatte_durchgeführt: "durchführen - Uygulamak",
    hatte_durchgegangen: "durchgehen - Gözden geçirmek",
    hatte_durchgehalten: "durchhalten - Dayanmak",
    hatte_durchgelaufen: "durchlaufen - Geçmek (süreç)",
    hatte_durchgestanden: "durchstehen - Katlanmak",
    hatte_durchgezogen: "durchziehen - Uygulamak (plan)",
    hatte_einbezogen: "einbeziehen - Dahil etmek",
    hatte_eingegangen: "eingehen - Kabul etmek (teklif)",
    hatte_eingestanden: "eingestehen - İtiraf etmek",
    hatte_eingehalten: "einhalten - Uymak (kural)",
    hatte_eingelebt: "einleben - Alışmak",
    hatte_eingeleuchtet: "einleuchten - Mantıklı gelmek",
    hatte_eingemischt: "einmischen - Karışmak",
    hatte_eingereicht: "einreichen - Sunmak (belge)",
    hatte_eingeschränkt: "einschränken - Kısıtlamak",
    hatte_eingeschrieben: "einschreiben - Kaydolmak",
    war_eingetreten: "eintreten - Gerçekleşmek",
    war_eingewandert: "einwandern - Göç etmek",
    hatte_entgegengekommen: "entgegenkommen - Karşılamak (beklenti)",
    hatte_entgiftet: "entgiften - Detoks yapmak",
    hatte_entladen: "entladen - Boşalmak (pil)",
    hatte_entnommen: "entnehmen - Almak (örnek)",
    hatte_entsprochen: "entsprechen - Karşılık gelmek",
    hatte_entworfen: "entwerfen - Tasarlamak",
    hatte_erbrochen: "erbrechen - Kusmak",
    hatte_erbracht: "erbringen - Sağlamak (kanıt)",
    hatte_erforscht: "erforschen - Araştırmak",
    hatte_ergeben: "ergeben - Sonuçlanmak",
    hatte_erhalten: "erhalten - Almak",
    hatte_erhoben: "erheben - Toplamak (vergi)",
    hatte_erkundet: "erkunden - Keşfetmek",
    war_erloschen: "erlöschen - Sönmek",
    hatte_ermutigt: "ermutigen - Cesaretlendirmek",
    hatte_erobert: "erobern - Fethetmek",
    hatte_erschlossen: "erschließen - Geliştirmek (alan)",
    hatte_erschreckt: "erschrecken - Ürkmek",
    hatte_erstattet: "erstatten - Geri ödemek",
    war_erstanden: "erstehen - Dirilmek",
    hatte_erworben: "erwerben - Kazanmak",
    hatte_erzeugt: "erzeugen - Üretmek",
    hatte_erzielt: "erzielen - Elde etmek",
    hat_christianisiert: "christianisieren - Hristiyanlaştırmak",
    hat_dahintergekommen: "dahinterkommen - Anlamak, farkına varmak",
    hat_dargestellt: "darstellen - Temsil etmek",
    hat_definiert: "definieren - Tanımlamak",
    hat_demonstriert: "demonstrieren - Gösteri yapmak",
    hat_desinfiziert: "desinfizieren - Dezenfekte etmek",
    hat_durchgebrochen: "durchbrechen - Kırmak (engeli)",
    hat_durchgebracht: "durchbringen - Geçindirmek",
    hat_durchgeführt: "durchführen - Uygulamak",
    hat_durchgegangen: "durchgehen - Gözden geçirmek",
    hat_durchgehalten: "durchhalten - Dayanmak",
    hat_durchgelaufen: "durchlaufen - Geçmek (süreç)",
    hat_durchgestanden: "durchstehen - Katlanmak",
    hat_durchgezogen: "durchziehen - Uygulamak (plan)",
    hat_einbezogen: "einbeziehen - Dahil etmek",
    ist_eingegangen: "eingehen - Kabul etmek (teklif)",
    hat_eingestanden: "eingestehen - İtiraf etmek",
    hat_eingehalten: "einhalten - Uymak (kural)",
    hat_eingelebt: "einleben - Alışmak",
    hat_eingeleuchtet: "einleuchten - Mantıklı gelmek",
    hat_eingemischt: "einmischen - Karışmak",
    hat_eingereicht: "einreichen - Sunmak (belge)",
    hat_eingeschränkt: "einschränken - Kısıtlamak",
    hat_eingeschrieben: "einschreiben - Kaydolmak",
    ist_eingetreten: "eintreten - Gerçekleşmek",
    ist_eingewandert: "einwandern - Göç etmek",
    ist_entgegengekommen: "entgegenkommen - Karşılamak (beklenti)",
    hat_entgiftet: "entgiften - Detoks yapmak",
    hat_entladen: "entladen - Boşalmak (pil)",
    hat_entnommen: "entnehmen - Almak (örnek)",
    hat_entsprochen: "entsprechen - Karşılık gelmek",
    hat_entworfen: "entwerfen - Tasarlamak",
    hat_erbrochen: "erbrechen - Kusmak",
    hat_erbracht: "erbringen - Sağlamak (kanıt)",
    hat_erforscht: "erforschen - Araştırmak",
    hat_ergeben: "ergeben - Sonuçlanmak",
    hat_erhalten: "erhalten - Almak",
    hat_erhoben: "erheben - Toplamak (vergi)",
    hat_erkundet: "erkunden - Keşfetmek",
    ist_erloschen: "erlöschen - Sönmek",
    hat_ermutigt: "ermutigen - Cesaretlendirmek",
    hat_erobert: "erobern - Fethetmek",
    hat_erschlossen: "erschließen - Geliştirmek (alan)",
    ist_erschreckt: "erschrecken - Ürkmek",
    hat_erstattet: "erstatten - Geri ödemek",
    ist_erstanden: "erstehen - Dirilmek",
    hat_erworben: "erwerben - Kazanmak",
    hat_erzeugt: "erzeugen - Üretmek",
    hat_erzielt: "erzielen - Elde etmek",
  };

  const VerbSpan = ({ word, children }) => (
    <span
      className="font-bold text-blue-800 cursor-pointer hover:bg-blue-100 px-1 py-0.5 rounded relative"
      onMouseEnter={() => setHoveredWord(word)}
      onMouseLeave={() => setHoveredWord(null)}
    >
      {children}
      {hoveredWord === word && (
        <div className="absolute bottom-full left-0 mb-2 p-2 bg-gray-800 text-white text-sm rounded shadow-lg whitespace-nowrap z-10">
          {verbDefinitions[word]}
        </div>
      )}
    </span>
  );

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Die Geschichte von Dr. Elisabeth Müller
      </h1>

      <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
        <p>
          Dr. Elisabeth Müller war eine brillante{" "}
          <em className="text-green-600">Chirurgin</em> mit{" "}
          <em className="text-green-600">deutschstämmigen</em> Wurzeln, die ihr
          Leben der Medizin gewidmet hatte. Nachdem sie als Kind das{" "}
          <em className="text-green-600">Christentum</em> kennengelernt hatte,{" "}
          <VerbSpan word="hatte_christianisiert">
            hatte sie christianisiert
          </VerbSpan>{" "}
          viele ihrer Patienten in schwierigen Zeiten spirituell begleitet.
        </p>

        <p>
          In ihrer Jugend war sie eine{" "}
          <em className="text-green-600">charmante</em> junge Frau gewesen, die
          schon früh{" "}
          <VerbSpan word="hatte_dahintergekommen">
            dahintergekommen war
          </VerbSpan>
          , dass sie Ärztin werden wollte. Ihre{" "}
          <em className="text-green-600">Denkweise</em> war schon immer{" "}
          <em className="text-green-600">detailliert</em> und{" "}
          <em className="text-green-600">chronologisch</em> strukturiert
          gewesen.
        </p>

        <p>
          Als <em className="text-green-600">Erstsemester</em> an der
          medizinischen Fakultät{" "}
          <VerbSpan word="hatte_dargestellt">hatte sie dargestellt</VerbSpan>,
          wie wichtig es war, <em className="text-green-600">chronische</em>{" "}
          Krankheiten zu verstehen. Ihre Professoren{" "}
          <VerbSpan word="hatte_definiert">hatten definiert</VerbSpan>, was von
          einer guten Ärztin erwartet wurde, und Elisabeth{" "}
          <VerbSpan word="hatte_demonstriert">hatte demonstriert</VerbSpan>,
          dass sie alle <em className="text-green-600">Eigenschaften</em> besaß.
        </p>

        <p>
          Während ihrer Ausbildung{" "}
          <VerbSpan word="hatte_desinfiziert">hatte sie desinfiziert</VerbSpan>{" "}
          unzählige Instrumente und{" "}
          <VerbSpan word="hatte_durchgebrochen">hatte durchgebrochen</VerbSpan>{" "}
          viele Barrieren in der männerdominierten Medizin. Als{" "}
          <em className="text-green-600">Einwanderin</em> der zweiten Generation{" "}
          <VerbSpan word="hatte_durchgebracht">
            hatte sie durchgebracht
          </VerbSpan>{" "}
          ihre Familie durch schwierige Zeiten.
        </p>

        <p>
          Eines Tages{" "}
          <VerbSpan word="hatte_durchgeführt">hatte sie durchgeführt</VerbSpan>{" "}
          eine komplizierte Operation, bei der sie alle Schritte{" "}
          <VerbSpan word="hatte_durchgegangen">durchgegangen war</VerbSpan> und{" "}
          <VerbSpan word="hatte_durchgehalten">durchgehalten hatte</VerbSpan>,
          obwohl sie <em className="text-green-600">Durchfall</em> hatte und
          sich <em className="text-green-600">eklig</em> fühlte.
        </p>

        <p>
          Der Patient{" "}
          <VerbSpan word="hatte_durchgelaufen">hatte durchgelaufen</VerbSpan>{" "}
          einen schweren <em className="text-green-600">chronischen</em> Prozess
          und{" "}
          <VerbSpan word="hatte_durchgestanden">hatte durchgestanden</VerbSpan>{" "}
          mehrere Operationen. Elisabeth{" "}
          <VerbSpan word="hatte_durchgezogen">hatte durchgezogen</VerbSpan>{" "}
          ihren Behandlungsplan trotz aller Schwierigkeiten.
        </p>

        <p>
          In die Behandlung{" "}
          <VerbSpan word="hatte_einbezogen">hatte sie einbezogen</VerbSpan> auch
          einen <em className="text-green-600">Elektriker</em>, der durch einen
          Unfall eine <em className="text-green-600">Einstichstelle</em> am{" "}
          <em className="text-green-600">Daumen</em> hatte. Auf sein Angebot{" "}
          <VerbSpan word="hatte_eingegangen">war sie eingegangen</VerbSpan> und{" "}
          <VerbSpan word="hatte_eingestanden">hatte eingestanden</VerbSpan>,
          dass sie Hilfe brauchte.
        </p>

        <p>
          Elisabeth{" "}
          <VerbSpan word="hatte_eingehalten">hatte eingehalten</VerbSpan> alle
          medizinischen Standards und{" "}
          <VerbSpan word="hatte_eingelebt">hatte sich eingelebt</VerbSpan> in
          die neue Klinik. Den <em className="text-green-600">Einheimischen</em>{" "}
          <VerbSpan word="hatte_eingeleuchtet">hatte eingeleuchtet</VerbSpan>,
          dass sie eine <em className="text-green-600">einzigartige</em> Ärztin
          war.
        </p>

        <p>
          Niemals{" "}
          <VerbSpan word="hatte_eingemischt">
            hatte sie sich eingemischt
          </VerbSpan>{" "}
          in die Politik, aber sie{" "}
          <VerbSpan word="hatte_eingereicht">hatte eingereicht</VerbSpan> einen
          Antrag für bessere{" "}
          <em className="text-green-600">Desinfektionsmittel</em>. Die
          Verwaltung{" "}
          <VerbSpan word="hatte_eingeschränkt">hatte eingeschränkt</VerbSpan>{" "}
          das Budget, deshalb{" "}
          <VerbSpan word="hatte_eingeschrieben">
            hatte sie sich eingeschrieben
          </VerbSpan>{" "}
          für einen Kurs in <em className="text-green-600">Elektrotechnik</em>.
        </p>

        <p>
          Ein dramatischer Moment{" "}
          <VerbSpan word="war_eingetreten">war eingetreten</VerbSpan>, als ein
          Patient mit <em className="text-green-600">Epilepsie</em> und{" "}
          <em className="text-green-600">entzündeten</em>{" "}
          <em className="text-green-600">Därmen</em> ankam. Seine Familie{" "}
          <VerbSpan word="war_eingewandert">war eingewandert</VerbSpan> aus der
          Türkei und sprach über{" "}
          <em className="text-green-600">Diskriminierung</em> in diesem{" "}
          <em className="text-green-600">Einwanderungsland</em>.
        </p>

        <p>
          Elisabeth{" "}
          <VerbSpan word="hatte_entgegengekommen">
            war entgegengekommen
          </VerbSpan>{" "}
          ihren Sorgen und{" "}
          <VerbSpan word="hatte_entgiftet">hatte entgiftet</VerbSpan> nicht nur
          den Körper des Patienten, sondern auch die angespannte Atmosphäre. Das{" "}
          <em className="text-green-600">Display</em> des medizinischen Geräts{" "}
          <VerbSpan word="hatte_entladen">hatte sich entladen</VerbSpan>, aber
          sie <VerbSpan word="hatte_entnommen">hatte entnommen</VerbSpan>{" "}
          schnell eine Blutprobe.
        </p>

        <p>
          Ihre Behandlung{" "}
          <VerbSpan word="hatte_entsprochen">hatte entsprochen</VerbSpan> allen{" "}
          <em className="text-green-600">effizienten</em> Standards. Sie{" "}
          <VerbSpan word="hatte_entworfen">hatte entworfen</VerbSpan> ein neues{" "}
          <em className="text-green-600">Design</em> für die{" "}
          <em className="text-green-600">EDV-gestützte</em> Patientenakte, das{" "}
          <em className="text-green-600">detailreich</em> alle Informationen
          sammelte.
        </p>

        <p>
          Der Patient{" "}
          <VerbSpan word="hatte_erbrochen">hatte erbrochen</VerbSpan> wegen
          seiner <em className="text-green-600">Entzündung</em>, aber Elisabeth{" "}
          <VerbSpan word="hatte_erbracht">hatte erbracht</VerbSpan> den Beweis,
          dass es sich um eine behandelbare Krankheit handelte. Sie{" "}
          <VerbSpan word="hatte_erforscht">hatte erforscht</VerbSpan> die
          neuesten Therapien und ihre Studien{" "}
          <VerbSpan word="hatte_ergeben">hatten ergeben</VerbSpan>, dass{" "}
          <em className="text-green-600">Emotionen</em> eine wichtige Rolle
          spielten.
        </p>

        <p>
          Eine <em className="text-green-600">Eingangsbestätigung</em>{" "}
          <VerbSpan word="hatte_erhalten">hatte sie erhalten</VerbSpan> für ihre
          Forschung über <em className="text-green-600">ethnische</em>{" "}
          Unterschiede in der Medizin. Die Universität{" "}
          <VerbSpan word="hatte_erhoben">hatte erhoben</VerbSpan> eine spezielle
          Gebühr für internationale Studien, aber Elisabeth{" "}
          <VerbSpan word="hatte_erkundet">hatte erkundet</VerbSpan> alternative
          Finanzierungsmöglichkeiten.
        </p>

        <p>
          Als das Licht im Operationssaal{" "}
          <VerbSpan word="war_erloschen">erloschen war</VerbSpan>,{" "}
          <VerbSpan word="hatte_ermutigt">hatte sie ermutigt</VerbSpan> ihr Team
          weiterzumachen. Wie ein General, der eine Stadt{" "}
          <VerbSpan word="hatte_erobert">erobert hatte</VerbSpan>, führte sie
          die <em className="text-green-600">Eroberung</em> gegen die Krankheit
          an.
        </p>

        <p>
          Elisabeth{" "}
          <VerbSpan word="hatte_erschlossen">hatte erschlossen</VerbSpan> neue
          Behandlungsmethoden und niemals{" "}
          <VerbSpan word="hatte_erschreckt">hatte sie sich erschreckt</VerbSpan>{" "}
          vor schwierigen Fällen. Den Patienten{" "}
          <VerbSpan word="hatte_erstattet">hatte sie erstattet</VerbSpan> sogar
          die Kosten für zusätzliche Medikamente aus eigener Tasche.
        </p>

        <p>
          Am Ende ihrer Laufbahn{" "}
          <VerbSpan word="war_erstanden">war erstanden</VerbSpan> eine neue{" "}
          <em className="text-green-600">Epoche</em> in der Medizin. Elisabeth{" "}
          <VerbSpan word="hatte_erworben">hatte erworben</VerbSpan>{" "}
          internationalen Ruhm und{" "}
          <VerbSpan word="hatte_erzeugt">hatte erzeugt</VerbSpan> eine neue
          Generation von Ärzten. Ihr <em className="text-green-600">Erbe</em>{" "}
          war das <em className="text-green-600">Erstaunen</em> über das, was
          sie <VerbSpan word="hatte_erzielt">erzielt hatte</VerbSpan>.
        </p>

        <p>
          Heute{" "}
          <VerbSpan word="hat_christianisiert">hat christianisiert</VerbSpan>{" "}
          sie viele ihrer Kollegen mit ihrer{" "}
          <em className="text-green-600">Brüderlichkeit</em> und ihrem{" "}
          <em className="text-green-600">emotionalen</em> Ansatz. Sie{" "}
          <VerbSpan word="hat_dahintergekommen">ist dahintergekommen</VerbSpan>,
          dass die moderne Medizin nicht nur{" "}
          <em className="text-green-600">Elektrofahrzeuge</em> und{" "}
          <em className="text-green-600">Drohnen</em> braucht, sondern auch
          menschliche Wärme.
        </p>

        <p>
          In der heutigen Zeit der{" "}
          <em className="text-green-600">Elektromobilität</em> und{" "}
          <em className="text-green-600">Energieerzeugung</em>{" "}
          <VerbSpan word="hat_dargestellt">hat sie dargestellt</VerbSpan>, wie
          wichtig es ist, auch die <em className="text-green-600">Emission</em>{" "}
          von Mitgefühl nicht zu vergessen. Elisabeth{" "}
          <VerbSpan word="hat_definiert">hat definiert</VerbSpan>, was es
          bedeutet, ein <em className="text-green-600">erfolgreicher</em> Arzt
          zu sein.
        </p>

        <p>
          Kürzlich{" "}
          <VerbSpan word="hat_demonstriert">hat sie demonstriert</VerbSpan>, wie
          man mit <em className="text-green-600">Einwegplastik</em> umgeht und{" "}
          <VerbSpan word="hat_desinfiziert">hat desinfiziert</VerbSpan> die
          Instrumente mit <em className="text-green-600">entsetzlicher</em>{" "}
          Gründlichkeit. Durch ihre{" "}
          <em className="text-green-600">Eifersucht</em> auf andere Ärzte{" "}
          <VerbSpan word="hat_durchgebrochen">hat sie durchgebrochen</VerbSpan>{" "}
          zu neuen Erkenntnissen.
        </p>

        <p>
          Elisabeth{" "}
          <VerbSpan word="hat_durchgebracht">hat durchgebracht</VerbSpan> ihre
          Patienten durch die schlimmste{" "}
          <em className="text-green-600">Dürre</em> von Hoffnung und{" "}
          <VerbSpan word="hat_durchgeführt">hat durchgeführt</VerbSpan>{" "}
          Operationen auch während der{" "}
          <em className="text-green-600">Diktatur</em> der Bürokratie. Alle
          Protokolle{" "}
          <VerbSpan word="hat_durchgegangen">ist sie durchgegangen</VerbSpan>{" "}
          und <VerbSpan word="hat_durchgehalten">hat durchgehalten</VerbSpan>{" "}
          trotz <em className="text-green-600">erfolgloser</em> Versuche der
          Verwaltung.
        </p>

        <p>
          Der gesamte Genehmigungsprozess{" "}
          <VerbSpan word="hat_durchgelaufen">hat durchgelaufen</VerbSpan>{" "}
          verschiedene Stadien, die sie{" "}
          <VerbSpan word="hat_durchgestanden">durchgestanden hat</VerbSpan> mit
          der Zähigkeit ihres <em className="text-green-600">Dackels</em>. Ihren
          Plan <VerbSpan word="hat_durchgezogen">hat sie durchgezogen</VerbSpan>{" "}
          trotz aller Hindernisse.
        </p>

        <p>
          In ihre Forschung{" "}
          <VerbSpan word="hat_einbezogen">hat sie einbezogen</VerbSpan> auch
          einen <em className="text-green-600">Buchhalter</em>, der{" "}
          <em className="text-green-600">evangelisch</em> war. Auf seine Ideen{" "}
          <VerbSpan word="ist_eingegangen">ist sie eingegangen</VerbSpan> und{" "}
          <VerbSpan word="hat_eingestanden">hat eingestanden</VerbSpan>, dass{" "}
          <em className="text-green-600">Büroartikel</em> teuer sein können.
        </p>

        <p>
          Alle Regeln{" "}
          <VerbSpan word="hat_eingehalten">hat sie eingehalten</VerbSpan> und{" "}
          <VerbSpan word="hat_eingelebt">hat sich eingelebt</VerbSpan> in die
          neue Klinik wie ein <em className="text-green-600">Element</em> in der{" "}
          <em className="text-green-600">Chronologie</em>. Den Kollegen{" "}
          <VerbSpan word="hat_eingeleuchtet">hat eingeleuchtet</VerbSpan>, dass
          sie ihre <em className="text-green-600">Elektrizität</em> aus reiner
          Leidenschaft bezog.
        </p>

        <p>
          Nie{" "}
          <VerbSpan word="hat_eingemischt">hat sie sich eingemischt</VerbSpan>{" "}
          in den <em className="text-green-600">Bürgerkrieg</em> der
          Abteilungen, aber sie{" "}
          <VerbSpan word="hat_eingereicht">hat eingereicht</VerbSpan> einen
          Antrag für bessere <em className="text-green-600">Büroartikel</em>.
          Die Verwaltung{" "}
          <VerbSpan word="hat_eingeschränkt">hat eingeschränkt</VerbSpan> das
          Budget, deshalb{" "}
          <VerbSpan word="hat_eingeschrieben">
            hat sie sich eingeschrieben
          </VerbSpan>{" "}
          für einen Kurs über <em className="text-green-600">Erdöl</em> als
          Ausgangsstoff für medizinische Geräte.
        </p>

        <p>
          Ein <em className="text-green-600">Drama</em>{" "}
          <VerbSpan word="ist_eingetreten">ist eingetreten</VerbSpan>, als ein
          Patient mit seinem <em className="text-green-600">Dreitagebart</em>{" "}
          und <em className="text-green-600">Ekel</em> vor Spritzen ankam. Seine
          Familie <VerbSpan word="ist_eingewandert">ist eingewandert</VerbSpan>{" "}
          und sprach über <em className="text-green-600">Erpressung</em> durch
          das Gesundheitssystem.
        </p>

        <p>
          Elisabeth{" "}
          <VerbSpan word="ist_entgegengekommen">ist entgegengekommen</VerbSpan>{" "}
          ihren Sorgen und{" "}
          <VerbSpan word="hat_entgiftet">hat entgiftet</VerbSpan> die Situation
          mit ihrer ruhigen Art. Das <em className="text-green-600">Eisen</em>{" "}
          im Blut des Patienten{" "}
          <VerbSpan word="hat_entladen">hat sich entladen</VerbSpan>, aber sie{" "}
          <VerbSpan word="hat_entnommen">hat entnommen</VerbSpan> schnell
          weitere Proben.
        </p>

        <p>
          Ihre Behandlung{" "}
          <VerbSpan word="hat_entsprochen">hat entsprochen</VerbSpan> allen
          Standards und sie{" "}
          <VerbSpan word="hat_entworfen">hat entworfen</VerbSpan> ein neues
          System für die <em className="text-green-600">Entdeckung</em> von
          Krankheiten. Der Patient{" "}
          <VerbSpan word="hat_erbrochen">hat erbrochen</VerbSpan>, aber
          Elisabeth <VerbSpan word="hat_erbracht">hat erbracht</VerbSpan> den
          Beweis für eine <em className="text-green-600">Entführung</em> von
          Mineralien aus dem Körper.
        </p>

        <p>
          Sie <VerbSpan word="hat_erforscht">hat erforscht</VerbSpan> die
          Ursachen und ihre Analyse{" "}
          <VerbSpan word="hat_ergeben">hat ergeben</VerbSpan>, dass eine{" "}
          <em className="text-green-600">Entschädigung</em> für die Behandlung
          notwendig war. Eine Bestätigung{" "}
          <VerbSpan word="hat_erhalten">hat sie erhalten</VerbSpan> von der
          Versicherung, die{" "}
          <VerbSpan word="hat_erhoben">erhoben hatte</VerbSpan> keine Einwände.
        </p>

        <p>
          Elisabeth <VerbSpan word="hat_erkundet">hat erkundet</VerbSpan> neue
          Behandlungsmethoden und als das Licht{" "}
          <VerbSpan word="ist_erloschen">erloschen ist</VerbSpan>,{" "}
          <VerbSpan word="hat_ermutigt">hat sie ermutigt</VerbSpan> ihr Team.
          Wie eine Kriegerin{" "}
          <VerbSpan word="hat_erobert">hat sie erobert</VerbSpan> das Vertrauen
          ihrer Patienten.
        </p>

        <p>
          Elisabeth <VerbSpan word="hat_erschlossen">hat erschlossen</VerbSpan>{" "}
          neue Therapien und niemals{" "}
          <VerbSpan word="ist_erschreckt">ist sie erschreckt</VerbSpan> vor
          schwierigen Diagnosen. Den Patienten{" "}
          <VerbSpan word="hat_erstattet">hat sie erstattet</VerbSpan> sogar die
          Kosten für alternative Behandlungen.
        </p>

        <p>
          So <VerbSpan word="ist_erstanden">ist erstanden</VerbSpan> eine neue
          Ära in der Medizin. Elisabeth{" "}
          <VerbSpan word="hat_erworben">hat erworben</VerbSpan> weltweiten
          Respekt und <VerbSpan word="hat_erzeugt">hat erzeugt</VerbSpan> eine
          Bewegung des Mitgefühls. Was sie{" "}
          <VerbSpan word="hat_erzielt">erzielt hat</VerbSpan>, war mehr als nur
          medizinische Erfolge - es war eine Revolution des Herzens.
        </p>
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Kullanım Kılavuzu:</h3>
        <p className="text-sm text-gray-600">
          Koyu mavi renkli fiillerin üzerine gelin, fiilin yalın hali ve Türkçe
          anlamını göreceksiniz. Bu hikayede Perfect (hat/ist + Partizip II) ve
          Plusquamperfekt (hatte/war + Partizip II) zamanları kullanılmıştır.
        </p>
      </div>
    </div>
  );
};

export default GermanStory;
