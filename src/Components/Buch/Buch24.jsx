import React, { useState } from "react";

const GermanStoryInteractive = () => {
  const [hoveredVerb, setHoveredVerb] = useState(null);

  const verbMeanings = {
    // lassen fiilleri
    gelassen: "lassen - bırakmak, izin vermek",
    abgelassen: "ablassen - boşaltmak, bırakmak",
    angelassen: "anlassen - çalıştırmak (motor), açık bırakmak",
    aufgelassen: "auflassen - açmak, bırakmak (kapı)",
    ausgelassen: "auslassen - dışarı çıkarmak, atlamak",
    belassen: "belassen - olduğu gibi bırakmak",
    durchgelassen: "durchlassen - geçmesine izin vermek",
    eingelassen: "einlassen - içeri almak, sokmak",
    entlassen: "entlassen - işten çıkarmak, serbest bırakmak",
    herausgelassen: "herauslassen - dışarı salmak, açıklamak",
    hingelassen: "hinlassen - oraya bırakmak, ihmal etmek",
    mitgelassen: "mitlassen - birlikte götürmek, dahil etmek",
    nachgelassen: "nachlassen - azalmak, gevşemek",
    überlassen: "überlassen - devretmek, bırakmak",
    unterlassen: "unterlassen - yapmaktan kaçınmak",
    verlassen: "verlassen - terk etmek, ayrılmak",
    vorgelassen: "vorlassen - öne bırakmak, öncelik vermek",
    weggelassen: "weglassen - çıkarmak, atlamak",
    zugelassen: "zulassen - izin vermek, kabul etmek",

    // sprechen fiilleri
    gesprochen: "sprechen - konuşmak",
    abgesprochen: "absprechen - anlaşmak, kararlaştırmak",
    angesprochen: "ansprechen - hitap etmek, konu açmak",
    aufgesprochen: "aufsprechen - kaydetmek (ses), konuşmak",
    ausgesprochen: "aussprechen - telaffuz etmek, açıkça söylemek",
    besprochen: "besprechen - tartışmak, görüşmek",
    durchgesprochen: "durchsprechen - detaylıca konuşmak",
    eingesprochen: "einsprechen - ses kaydetmek, araya girmek",
    entgegengesprochen: "entgegensprechen - karşı çıkmak, çelişmek",
    hergesprochen: "hersprechen - buraya gelip konuşmak",
    mitgesprochen: "mitsprechen - konuşmaya katılmak",
    nachgesprochen: "nachsprechen - tekrar etmek, taklit etmek",
    übergesprochen: "übersprechen - üstüne konuşmak, çevirmek",
    versprochen: "versprechen - söz vermek, yanlış söylemek",
    vorausgesprochen: "voraussprechen - önceden konuşmak",
    vorgesprochen: "vorsprechen - deneme yapmak (oyunculuk), konuşmak",
    weitergesprochen: "weitersprechen - konuşmaya devam etmek",
    zugesprochen: "zusprechen - cesaretlendirmek, ikna etmek",

    // schreiben fiilleri
    geschrieben: "schreiben - yazmak",
    abgeschrieben: "abschreiben - kopya çekmek, yazarak çıkarmak",
    angeschrieben: "anschreiben - yazmak (birine), borç yazmak",
    aufgeschrieben: "aufschreiben - not almak, yazmak",
    ausgeschrieben: "ausschreiben - ilan etmek, tam yazmak",
    beschrieben: "beschreiben - tarif etmek, betimlemek",
    durchgeschrieben: "durchschreiben - kopyasını çıkarmak, devamlı yazmak",
    eingeschrieben: "einschreiben - kaydetmek, taahhütlü göndermek",
    fortgeschrieben: "fortschreiben - devam ettirmek, güncellemek",
    hergeschrieben: "herschreiben - buraya yazmak",
    hingeschrieben: "hinschreiben - oraya yazmak, aceleyle yazmak",
    mitgeschrieben: "mitschreiben - not almak, birlikte yazmak",
    nachgeschrieben: "nachschreiben - tekrar yazmak, kopya etmek",
    überschrieben: "überschreiben - üzerine yazmak, devretmek",
    umgeschrieben: "umschreiben - yeniden yazmak, dolaylı ifade etmek",
    verschrieben: "verschreiben - reçete yazmak, yanlış yazmak",
    vorgeschrieben: "vorschreiben - emretmek, dikte etmek",
    weitergeschrieben: "weiterschreiben - yazmaya devam etmek",
    zugeschrieben: "zuschreiben - atfetmek, birine yazmak",

    // finden fiilleri
    gefunden: "finden - bulmak",
    abgefunden: "abfinden - razı olmak, yetinmek",
    angefunden: "anfinden - başlamak (nadir), bulmaya başlamak",
    aufgefunden: "auffinden - bulmak, keşfetmek",
    ausgefunden: "ausfinden - öğrenmek, keşfetmek",
    befunden: "befinden - bulunmak, olmak (durum)",
    durchgefunden: "durchfinden - geçmek, yolunu bulmak",
    eingefunden: "einfinden - alışmak, uyum sağlamak",
    erfunden: "erfinden - icat etmek, uydurmak",
    herausgefunden: "herausfinden - öğrenmek, keşfetmek",
    hingefunden: "hinfinden - razı olmak, katlanmak",
    mitgefunden: "mitfinden - birlikte bulmak",
    nachgefunden: "nachfinden - aramak, izini sürmek",
    stattgefunden: "stattfinden - gerçekleşmek, yapılmak",
    übergefunden: "überfinden - şaşırmak, düşünmek",
    verfunden: "verfinden - kaybetmek, yitirmek (nadir)",
    vorgefunden: "vorfinden - bulmak (bir şeyin olduğu gibi)",
    weitergefunden: "weiterfinden - devam etmek, bulmaya devam etmek",
    zugefunden: "zufinden - tesadüfen bulmak",

    // halten fiilleri
    gehalten: "halten - tutmak, durdurmak",
    abgehalten: "abhalten - engellemek, düzenlemek (etkinlik)",
    angehalten: "anhalten - durdurmak, devam etmek",
    aufgehalten: "aufhalten - oyalamak, durdurmak",
    ausgehalten: "aushalten - dayanmak, katlanmak",
    behalten: "behalten - saklamak, hatırlamak",
    durchgehalten: "durchhalten - direnmek, devam etmek",
    eingehalten: "einhalten - uymak (kurala), durdurmak",
    enthalten: "enthalten - içermek, kapsamak",
    erhalten: "erhalten - almak, korumak",
    herausgehalten: "heraushalten - dışarı uzatmak, dayanmak",
    hingehalten: "hinhalten - oyalamak, idare etmek",
    mitgehalten: "mithalten - ayak uydurmak",
    nachgehalten: "nachhalten - kin tutmak, sürdürmek",
    übergehalten: "überhalten - devam ettirmek, üstesinden gelmek",
    unterhalten: "unterhalten - eğlendirmek, sürdürmek",
    verhalten: "verhalten - davranmak, tutum sergilemek",
    vorgehalten: "vorhalten - sitem etmek, hazır tutmak",
    weitergehalten: "weiterhalten - devam etmek",
    zurückgehalten: "zurückhalten - tutmak, engellemek",

    // arbeiten fiilleri
    gearbeitet: "arbeiten - çalışmak",
    abgearbeitet: "abarbeiten - işleri bitirmek, tamamlamak",
    angearbeitet: "anarbeiten - başlamak (bir işte), kaba iş yapmak",
    aufgearbeitet: "aufarbeiten - işlemek, ele almak (konu)",
    ausgearbeitet: "ausarbeiten - detaylandırmak, geliştirmek",
    bearbeitet: "bearbeiten - işlemek, düzenlemek",
    durchgearbeitet: "durcharbeiten - baştan sona çalışmak, gece çalışmak",
    eingearbeitet: "einarbeiten - alışmak (işe), öğrenmek",
    erarbeitet: "erarbeiten - kazanmak, elde etmek (çaba ile)",
    herausgearbeitet: "herausarbeiten - ortaya çıkarmak, vurgulamak",
    mitgearbeitet: "mitarbeiten - katkıda bulunmak, birlikte çalışmak",
    nachgearbeitet: "nacharbeiten - eksik işleri tamamlamak",
    überarbeitet: "überarbeiten - gözden geçirmek, fazla çalışmak",
    verarbeitet: "verarbeiten - işlemek (malzeme), başa çıkmak",
    vorgearbeitet: "vorarbeiten - önceden çalışmak, hazırlık yapmak",
    weitergearbeitet: "weiterarbeiten - çalışmaya devam etmek",
    zusammengearbeitet: "zusammenarbeiten - işbirliği yapmak",

    // ziehen fiilleri
    gezogen: "ziehen - çekmek, taşınmak",
    abgezogen: "abziehen - çekip çıkarmak, soyulmak",
    angezogen: "anziehen - giymek, çekmek (dikkat)",
    aufgezogen: "aufziehen - açmak, büyütmek (çocuk)",
    ausgezogen: "ausziehen - çıkarmak (giysi), taşınmak",
    bezogen: "beziehen - kaplamak, referans yapmak",
    durchgezogen: "durchziehen - tamamlamak, geçirmek",
    eingezogen: "einziehen - içeri çekmek, taşınmak",
    entzogen: "entziehen - çekip almak, kaçmak",
    erzogen: "erziehen - yetiştirmek, eğitmek",
    herausgezogen: "herausziehen - dışarı çekmek, uzatmak",
    hergezogen: "herziehen - buraya çekmek, göç etmek",
    hingezogen: "hinziehen - uzatmak, oyalanmak",
    mitgezogen: "mitziehen - birlikte çekmek, eşlik etmek",
    nachgezogen: "nachziehen - takip etmek, sıkılaştırmak",
    überzogen: "überziehen - kaplamak, aşmak (süre)",
    umgezogen: "umziehen - taşınmak, kıyafet değiştirmek",
    verzogen: "verziehen - çarpıtmak, şımartmak",
    vorgezogen: "vorziehen - tercih etmek, öne çekmek",
    zurückgezogen: "zurückziehen - geri çekmek, emekli olmak",

    // setzen fiilleri
    gesetzt: "setzen - koymak, oturtmak",
    abgesetzt: "absetzen - indirmek, çıkarmak, satmak",
    angesetzt: "ansetzen - başlatmak, hazırlamak (yemek)",
    aufgesetzt: "aufsetzen - yazmak (belge), takmak (şapka)",
    ausgesetzt: "aussetzen - bırakmak, maruz bırakmak",
    besetzt: "besetzen - işgal etmek, doldurmak (rol)",
    durchgesetzt: "durchsetzen - uygulamak, başarmak",
    eingesetzt: "einsetzen - kullanmak, yerleştirmek",
    entsetzt: "entsetzen - azletmek, dehşete düşürmek",
    fortgesetzt: "fortsetzen - devam ettirmek",
    herausgesetzt: "heraussetzen - riske atmak, bırakmak",
    hingesetzt: "hinsetzen - oturtmak, yazmak (aceleyle)",
    nachgesetzt: "nachsetzen - peşinden gitmek, eklemek",
    übersetzt: "übersetzen - çevirmek, geçirmek (nehir)",
    umgesetzt: "umsetzen - uygulamak, dönüştürmek",
    versetzt: "versetzen - transfer etmek, şaşırtmak",
    vorausgesetzt: "voraussetzen - varsaymak, gerektirmek",
    weitergesetzt: "weitersetzen - devam ettirmek",
    zusammengesetzt: "zusammensetzen - bir araya getirmek, oluşturmak",

    // bringen fiilleri
    gebracht: "bringen - getirmek",
    abgebracht: "abbringen - vazgeçirmek, uzaklaştırmak",
    angebracht: "anbringen - takmak, yerleştirmek",
    aufgebracht: "aufbringen - toplamak (para), sinirlendirmek",
    ausgebracht: "ausbringen - dağıtmak, yaymak",
    beigebracht: "beibringen - öğretmek, bildirmek",
    durchgebracht: "durchbringen - geçindirmek, başarmak",
    eingebracht: "einbringen - sunmak, kazandırmak",
    entgebracht: "entbringen - kurtulmak, uzaklaşmak",
    erbracht: "erbringen - sağlamak, yerine getirmek",
    hergebracht: "herbringen - buraya getirmek",
    hingebracht: "hinbringen - oraya götürmek, başarmak",
    mitgebracht: "mitbringen - yanında getirmek",
    nachgebracht: "nachbringen - sonradan getirmek, tamamlamak",
    überbracht: "überbringen - teslim etmek, iletmek",
    umgebracht: "umbringen - öldürmek",
    untergebracht: "unterbringen - yerleştirmek, barındırmak",
    verbracht: "verbringen - geçirmek (zaman)",
    vorgebracht: "vorbringen - öne sürmek, ifade etmek",
    weitergebracht: "weiterbringen - ilerletmek, geliştirmek",

    // denken fiilleri
    gedacht: "denken - düşünmek",
    angedacht: "andenken - düşünmek (birine), hatırlamak",
    ausgedacht: "ausdenken - tasarlamak, uydurmak",
    bedacht: "bedenken - düşünmek, tereddüt etmek",
    durchdacht: "durchdenken - iyice düşünmek, planlamak",
    eingedacht: "eindenken - hatırlamak, anımsamak",
    erdacht: "erdenken - icat etmek, hayal etmek",
    herausgedacht: "herausdenken - bulmak, çözmek",
    hingedacht: "hindenken - düşünmek (bir yere), ima etmek",
    mitgedacht: "mitdenken - birlikte düşünmek, hesaba katmak",
    nachgedacht: "nachdenken - düşünmek, kafa yormak",
    überdacht: "überdenken - yeniden düşünmek, gözden geçirmek",
    umgedacht: "umdenken - fikrini değiştirmek, yeniden düşünmek",
    vorausgedacht: "vorausdenken - önceden düşünmek, tahmin etmek",
    vorgedacht: "vordenken - önceden düşünmek, planlamak",
    weitergedacht: "weiterdenken - düşünmeye devam etmek",
    zugedacht: "zudenken - düşünmek (birine yönelik), hayal etmek",

    // wissen fiilleri
    gewusst: "wissen - bilmek",
    abgewusst: "abwissen - silmek, temizlemek (nadir)",
    angewusst: "anwissen - bulaştırmak (nadir)",
    ausgewusst: "auswissen - iyi bilmek, uzman olmak",
    bewusst: "bewissen - bilinçli olmak, farkında olmak",
    durchgewusst: "durchwissen - tamamen bilmek, hakim olmak",
    eingewusst: "einwissen - bilgilendirmek, öğretmek (nadir)",
    erwusst: "erwissen - öğrenmek, keşfetmek",
    herausgewusst: "herauswissen - bulmak, öğrenmek",
    hingewusst: "hinwissen - bilmek (bir yere nasıl gidileceğini)",
    mitgewusst: "mitwissen - haberdar olmak, bilmek",
    nachgewusst: "nachwissen - kontrol etmek, teyit etmek",
    vorgewusst: "vorwissen - önceden bilmek, tahmin etmek",
    weitergewusst: "weiterwissen - ne yapacağını bilmek, devam etmek",
    widergewusst: "widerwissen - aleyhinde bilmek, karşı çıkmak (nadir)",
    zugewusst: "zuwissen - birine bildirmek, atfetmek",

    // lernen fiilleri
    gelernt: "lernen - öğrenmek",
    abgelernt: "ablernen - öğrenip bırakmak, taklit etmek",
    angelernt: "anlernen - öğrenmeye başlamak, alışmak",
    aufgelernt: "auflernen - ezberlemek, öğrenmek (nadir)",
    ausgelernt: "auslernen - bitirip öğrenmek (eğitim), ders çıkarmak",
    belehrt: "belernen - öğretmek, eğitmek",
    durchgelernt: "durchlernen - iyice öğrenmek, çalışarak geçmek",
    eingelernt: "einlernen - öğrenmek, ezberlemek",
    erlernt: "erlernen - öğrenmek, tecrübe etmek",
    fortgelernt: "fortlernen - öğrenmeye devam etmek",
    herausgelernt: "herauslernen - keşfetmek, öğrenmek",
    hingelernt: "hinlernen - ek olarak öğrenmek",
    kennengelernt: "kennenlernen - tanışmak, tanımak",
    mitgelernt: "mitlernen - birlikte öğrenmek",
    nachgelernt: "nachlernen - tekrar öğrenmek, taklit etmek",
    umgelernt: "umlernen - yeniden öğrenmek, farklı şekilde öğrenmek",
    verlernt: "verlernen - öğrenmek, alışmak",
    vorgelernt: "vorlernen - önceden öğrenmek, ezberlemek",
    weitergelernt: "weiterlernen - öğrenmeye devam etmek",
    zugelernt: "zulernen - öğrenmek (bir şeye yönelik)",

    // fahren fiilleri
    gefahren: "fahren - sürmek, gitmek",
    abgefahren: "abfahren - kalkmak (tren, otobüs), ayrılmak",
    angefahren: "anfahren - başlamak, çarpmak (araçla)",
    aufgefahren: "auffahren - çarpmak, açmak (kapı)",
    ausgefahren: "ausfahren - dışarı çıkmak, dağıtım yapmak",
    befahren: "befahren - kullanmak (yol), geçmek",
    durchgefahren: "durchfahren - geçmek, durmadan gitmek",
    eingefahren: "einfahren - içeri girmek, alışmak (makine)",
    entfahren: "entfahren - ağzından kaçırmak, kaçmak",
    erfahren: "erfahren - öğrenmek, yaşamak",
    fortgefahren: "fortfahren - devam etmek",
    herausgefahren: "herausfahren - dışarı çıkmak, patlamak (öfkeyle)",
    hergefahren: "herfahren - buraya gelmek (araçla)",
    hingefahren: "hinfahren - oraya gitmek",
    mitgefahren: "mitfahren - birlikte gitmek, eşlik etmek",
    nachgefahren: "nachfahren - takip etmek, peşinden gitmek",
    überfahren: "überfahren - ezmek, geçmek (sınırı)",
    umgefahren: "umfahren - dolaşmak, devirmek",
    verfahren: "verfahren - yanlış yapmak, işlemek (süreç)",
    vorgefahren: "vorfahren - öne geçmek, sürmek (birinin önüne)",
    weitergefahren: "weiterfahren - devam etmek (yolculuğ)",

    // Additional verbs used in the story
    vernachlässigt: "vernachlässigen - ihmal etmek",
    angeboten: "anbieten - teklif etmek, sunmak",
    abgelehnt: "ablehnen - reddetmek",
    eingerichtet: "einrichten - düzenlemek, kurmak",
    vorgestellt: "vorstellen - tanıtmak, tasavvur etmek",
    erzählt: "erzählen - anlatmak",
    zugehört: "zuhören - dinlemek",
    durcheinander: "durcheinander sein - karışık olmak",
    verabschiedet: "verabschieden - vedalaşmak",
    eingekauft: "einkaufen - alışveriş yapmak",
    vorgenommen: "vornehmen - planlamak, niyet etmek",
    aufgebrochen: "aufbrechen - yola çıkmak",
    losgefahren: "losfahren - yola çıkmak",
    bewirtet: "bewirten - misafir etmek, ağırlamak",
    mitgeteilt: "mitteilen - bildirmek, paylaşmak",
    geholfen: "helfen - yardım etmek",
    beobachtet: "beobachten - gözlemlemek",
    bewundert: "bewundern - hayran olmak",
    verändert: "verändern - değiştirmek",
    umgestaltet: "umgestalten - yeniden düzenlemek, dönüştürmek",
    eröffnet: "eröffnen - açmak (iş yeri)",
    verkauft: "verkaufen - satmak",
    unterstützt: "unterstützen - desteklemek",
    verliebt: "verlieben - âşık olmak",
    geheiratet: "heiraten - evlenmek",
    gesucht: "suchen - aramak",
    besucht: "besuchen - ziyaret etmek",
    gestaunt: "staunen - şaşırmak, hayret etmek",
    inspiriert: "inspirieren - ilham vermek",
    ermutigt: "ermutigen - cesaretlendirmek",
    erreicht: "erreichen - ulaşmak, elde etmek",
    besessen: "besitzen - sahip olmak",
    gelebt: "leben - yaşamak",
    verwirklicht: "verwirklichen - gerçekleştirmek",
  };

  const VerbTooltip = ({ verb, children }) => {
    return (
      <span
        className="relative inline-block"
        onMouseEnter={() => setHoveredVerb(verb)}
        onMouseLeave={() => setHoveredVerb(null)}
      >
        <span className="bg-blue-800 text-white px-1 py-0.5 rounded cursor-pointer font-bold">
          {children}
        </span>
        {hoveredVerb === verb && verbMeanings[verb] && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap z-10">
            {verbMeanings[verb]}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
          </div>
        )}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-2xl p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Der Wandel eines Lebens
          </h1>
          <p className="text-sm text-gray-600 mb-8 text-center italic">
            Mavi renkli kelimelerin üzerine gelin ve Almanca fiillerin
            anlamlarını öğrenin
          </p>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Thomas war ein erfolgreicher Geschäftsmann, der sein ganzes Leben
              in der Großstadt{" "}
              <VerbTooltip verb="verbracht">verbracht</VerbTooltip> hatte. Als
              er jung war,{" "}
              <VerbTooltip verb="abgeschrieben">
                hatte er von der Schule abgeschrieben
              </VerbTooltip>{" "}
              und{" "}
              <VerbTooltip verb="nachgedacht">
                hatte nie richtig über seine Zukunft nachgedacht
              </VerbTooltip>
              . Seine Eltern{" "}
              <VerbTooltip verb="vorgeschrieben">
                hatten ihm vorgeschrieben
              </VerbTooltip>
              , was er studieren sollte, und er{" "}
              <VerbTooltip verb="abgefunden">
                hatte sich damit abgefunden
              </VerbTooltip>
              .
            </p>

            <p>
              In seinem Büro{" "}
              <VerbTooltip verb="durchgearbeitet">
                hatte er jahrelang durchgearbeitet
              </VerbTooltip>{" "}
              und{" "}
              <VerbTooltip verb="überlassen">
                hatte seiner Sekretärin viele Aufgaben überlassen
              </VerbTooltip>
              . Seine Kollegen{" "}
              <VerbTooltip verb="angesprochen">
                hatten ihn oft auf wichtige Projekte angesprochen
              </VerbTooltip>
              , aber er{" "}
              <VerbTooltip verb="weggelassen">
                hatte meistens die Details weggelassen
              </VerbTooltip>
              . Die Firma{" "}
              <VerbTooltip verb="ausgeschrieben">
                hatte neue Stellen ausgeschrieben
              </VerbTooltip>
              , und Thomas{" "}
              <VerbTooltip verb="besetzt">
                hatte sie schnell besetzt
              </VerbTooltip>
              .
            </p>

            <p>
              Eines Tages{" "}
              <VerbTooltip verb="herausgefunden">
                hatte er herausgefunden
              </VerbTooltip>
              , dass seine Frau, mit der er{" "}
              <VerbTooltip verb="zusammengearbeitet">
                jahrelang zusammengearbeitet
              </VerbTooltip>{" "}
              hatte, <VerbTooltip verb="verlassen">ihn verlassen</VerbTooltip>{" "}
              wollte. Sie{" "}
              <VerbTooltip verb="beschrieben">
                hatte ihm ihre Gefühle beschrieben
              </VerbTooltip>{" "}
              und{" "}
              <VerbTooltip verb="ausgesprochen">
                hatte offen ausgesprochen
              </VerbTooltip>
              , dass sie sich{" "}
              <VerbTooltip verb="vernachlässigt">vernachlässigt</VerbTooltip>{" "}
              fühlte. Thomas{" "}
              <VerbTooltip verb="versprochen">
                hatte ihr versprochen
              </VerbTooltip>
              , sich zu ändern, aber sie{" "}
              <VerbTooltip verb="unterlassen">hatte es unterlassen</VerbTooltip>
              , ihm zu glauben.
            </p>

            <p>
              Nach der Scheidung{" "}
              <VerbTooltip verb="umgezogen">
                war er in eine kleine Wohnung umgezogen
              </VerbTooltip>
              . Er{" "}
              <VerbTooltip verb="mitgebracht">
                hatte nur wenige Sachen mitgebracht
              </VerbTooltip>{" "}
              und{" "}
              <VerbTooltip verb="zurückgelassen">
                hatte alles andere zurückgelassen
              </VerbTooltip>
              . Seine Freunde{" "}
              <VerbTooltip verb="angeboten">
                hatten ihm Hilfe angeboten
              </VerbTooltip>
              , aber er{" "}
              <VerbTooltip verb="abgelehnt">hatte sie abgelehnt</VerbTooltip>.
              Er{" "}
              <VerbTooltip verb="eingezogen">war allein eingezogen</VerbTooltip>{" "}
              und{" "}
              <VerbTooltip verb="eingerichtet">
                hatte die Wohnung schlicht eingerichtet
              </VerbTooltip>
              .
            </p>

            <p>
              In seiner neuen Umgebung{" "}
              <VerbTooltip verb="kennengelernt">
                hatte er neue Menschen kennengelernt
              </VerbTooltip>
              . Seine Nachbarin Maria{" "}
              <VerbTooltip verb="angelassen">
                hatte ihre Tür immer angelassen
              </VerbTooltip>{" "}
              und{" "}
              <VerbTooltip verb="eingelassen">
                hatte ihn oft zum Kaffee eingelassen
              </VerbTooltip>
              . Sie{" "}
              <VerbTooltip verb="aufgeschrieben">
                hatte seine Telefonnummer aufgeschrieben
              </VerbTooltip>{" "}
              ve{" "}
              <VerbTooltip verb="angeschrieben">
                hatte ihn regelmäßig angeschrieben
              </VerbTooltip>
              . Thomas{" "}
              <VerbTooltip verb="erlernt">hatte schnell erlernt</VerbTooltip>,
              wie man mit weniger Geld auskommt.
            </p>

            <p>
              Eines Abends{" "}
              <VerbTooltip verb="stattgefunden">
                hatte in der Nachbarschaft ein Fest stattgefunden
              </VerbTooltip>
              . Maria{" "}
              <VerbTooltip verb="mitgelassen">
                hatte ihn mitgelassen
              </VerbTooltip>{" "}
              ve{" "}
              <VerbTooltip verb="vorgestellt">
                hatte ihn allen vorgestellt
              </VerbTooltip>
              . Ein alter Mann{" "}
              <VerbTooltip verb="erzählt">
                hatte ihm von seinem Leben erzählt
              </VerbTooltip>{" "}
              ve{" "}
              <VerbTooltip verb="beigebracht">
                hatte ihm beigebracht
              </VerbTooltip>
              , wie wichtig einfache Freuden sind. Thomas{" "}
              <VerbTooltip verb="zugehört">
                hatte aufmerksam zugehört
              </VerbTooltip>{" "}
              ve{" "}
              <VerbTooltip verb="mitgeschrieben">
                hatte sich wichtige Gedanken mitgeschrieben
              </VerbTooltip>
              .
            </p>

            <p>
              Am nächsten Tag{" "}
              <VerbTooltip verb="nachgedacht">
                hatte Thomas lange nachgedacht
              </VerbTooltip>
              . Er{" "}
              <VerbTooltip verb="überdacht">
                hatte sein ganzes Leben überdacht
              </VerbTooltip>{" "}
              ve{" "}
              <VerbTooltip verb="umgedacht">
                hatte beschlossen umzudenken
              </VerbTooltip>
              . Seine Prioritäten{" "}
              <VerbTooltip verb="durcheinander">
                waren völlig durcheinander
              </VerbTooltip>{" "}
              gewesen. Er{" "}
              <VerbTooltip verb="ausgedacht">
                hatte sich einen neuen Plan ausgedacht
              </VerbTooltip>{" "}
              ve{" "}
              <VerbTooltip verb="aufgesetzt">
                hatte einen Brief an seinen Chef aufgesetzt
              </VerbTooltip>
              .
            </p>

            <p>
              In dem Brief{" "}
              <VerbTooltip verb="ausgesprochen">
                hatte er seine Kündigungsabsicht ausgesprochen
              </VerbTooltip>
              . Seine Kollegen{" "}
              <VerbTooltip verb="entsetzt">waren entsetzt</VerbTooltip> gewesen
              ve{" "}
              <VerbTooltip verb="abgebracht">
                hatten ihn von seinem Vorhaben abgebracht
              </VerbTooltip>{" "}
              wollen. Aber Thomas{" "}
              <VerbTooltip verb="durchgesetzt">
                hatte seine Entscheidung durchgesetzt
              </VerbTooltip>{" "}
              ve{" "}
              <VerbTooltip verb="fortgesetzt">
                hatte seine Pläne fortgesetzt
              </VerbTooltip>
              . Er{" "}
              <VerbTooltip verb="abgehalten">
                hatte eine Abschiedsfeier abgehalten
              </VerbTooltip>{" "}
              ve{" "}
              <VerbTooltip verb="verabschiedet">
                hatte sich von allen verabschiedet
              </VerbTooltip>
              .
            </p>

            <p>
              Nach seinem Abschied{" "}
              <VerbTooltip verb="eingekauft">
                hatte er sich ein Fahrrad eingekauft
              </VerbTooltip>{" "}
              ve{" "}
              <VerbTooltip verb="vorgenommen">
                hatte sich vorgenommen
              </VerbTooltip>
              , das Land zu erkunden. Er{" "}
              <VerbTooltip verb="aufgebrochen">
                war früh am Morgen aufgebrochen
              </VerbTooltip>{" "}
              ve{" "}
              <VerbTooltip verb="losgefahren">
                war in Richtung Süden losgefahren
              </VerbTooltip>
              . Die erste Nacht{" "}
              <VerbTooltip verb="verbracht">
                hatte er unter freiem Himmel verbracht
              </VerbTooltip>{" "}
              ve <VerbTooltip verb="erfahren">hatte dabei erfahren</VerbTooltip>
              , wie friedlich die Stille sein kann.
            </p>

            <p>
              Während seiner Reise{" "}
              <VerbTooltip verb="angehalten">
                hatte er in verschiedenen Dörfern angehalten
              </VerbTooltip>
              . In einem Gasthaus{" "}
              <VerbTooltip verb="untergebracht">
                hatte ihn der Wirt untergebracht
              </VerbTooltip>{" "}
              ve{" "}
              <VerbTooltip verb="bewirtet">
                hatte ihn herzlich bewirtet
              </VerbTooltip>
              . Die Gäste{" "}
              <VerbTooltip verb="zugehört">
                hatten seinen Geschichten zugehört
              </VerbTooltip>{" "}
              ve{" "}
              <VerbTooltip verb="mitgeteilt">
                hatten ihm ihre eigenen Erfahrungen mitgeteilt
              </VerbTooltip>
              . Thomas{" "}
              <VerbTooltip verb="eingelernt">
                hatte sich schnell eingelernt
              </VerbTooltip>
              , wie man mit wenig Geld reist.
            </p>

            <p>
              In einem Bergdorf{" "}
              <VerbTooltip verb="aufgehalten">
                hatte er sich länger aufgehalten
              </VerbTooltip>
              . Ein Bauer{" "}
              <VerbTooltip verb="angeboten">
                hatte ihm Arbeit angeboten
              </VerbTooltip>{" "}
              ve{" "}
              <VerbTooltip verb="beigebracht">
                hatte ihm beigebracht
              </VerbTooltip>
              , wie man Gemüse anbaut. Thomas{" "}
              <VerbTooltip verb="gelernt">hatte schnell gelernt</VerbTooltip>,
              mit seinen Händen zu arbeiten. Er{" "}
              <VerbTooltip verb="mitgearbeitet">
                hatte auf dem Hof mitgearbeitet
              </VerbTooltip>{" "}
              ve{" "}
              <VerbTooltip verb="geholfen">
                hatte bei der Ernte geholfen
              </VerbTooltip>
              .
            </p>

            <p>
              Der Bauer{" "}
              <VerbTooltip verb="erzogen">
                hatte seine Kinder streng erzogen
              </VerbTooltip>
              , aber mit viel Liebe. Thomas{" "}
              <VerbTooltip verb="beobachtet">
                hatte die Familie beobachtet
              </VerbTooltip>{" "}
              ve{" "}
              <VerbTooltip verb="bewundert">
                hatte ihr Zusammenleben bewundert
              </VerbTooltip>
              . Die Kinder{" "}
              <VerbTooltip verb="aufgezogen">
                waren mit einfachen Werten aufgezogen
              </VerbTooltip>{" "}
              worden ve <VerbTooltip verb="gelernt">hatten gelernt</VerbTooltip>
              , die Natur zu respektieren.
            </p>

            <p>
              Nach einigen Wochen{" "}
              <VerbTooltip verb="weitergefahren">
                war Thomas weitergefahren
              </VerbTooltip>
              . Er{" "}
              <VerbTooltip verb="durchgefahren">
                hatte verschiedene Regionen durchgefahren
              </VerbTooltip>{" "}
              ve{" "}
              <VerbTooltip verb="kennengelernt">
                hatte die Vielfalt des Landes kennengelernt
              </VerbTooltip>
              . In einer Küstenstadt{" "}
              <VerbTooltip verb="angefahren">
                hatte er einen Hafen angefahren
              </VerbTooltip>{" "}
              ve{" "}
              <VerbTooltip verb="beobachtet">
                hatte die Fischer bei der Arbeit beobachtet
              </VerbTooltip>
              .
            </p>

            <p>
              Ein alter Fischer{" "}
              <VerbTooltip verb="herausgefahren">
                war gerade herausgefahren
              </VerbTooltip>{" "}
              ve{" "}
              <VerbTooltip verb="mitgenommen">
                hatte Thomas mitgenommen
              </VerbTooltip>
              . Auf dem Meer{" "}
              <VerbTooltip verb="erzählt">
                hatte er von seinem Leben erzählt
              </VerbTooltip>{" "}
              ve{" "}
              <VerbTooltip verb="erklärt">
                hatte die Geheimnisse des Meeres erklärt
              </VerbTooltip>
              . Thomas <VerbTooltip verb="gelernt">hatte gelernt</VerbTooltip>,
              dass wahre Zufriedenheit nicht im Besitz liegt, sondern in der
              Einfachheit.
            </p>

            <p>
              Am Ende seiner Reise{" "}
              <VerbTooltip verb="zurückgefahren">
                war er in seine Stadt zurückgefahren
              </VerbTooltip>
              . Aber er{" "}
              <VerbTooltip verb="verändert">
                hatte sich völlig verändert
              </VerbTooltip>
              . Seine Wohnung{" "}
              <VerbTooltip verb="umgestaltet">hatte er umgestaltet</VerbTooltip>{" "}
              ve{" "}
              <VerbTooltip verb="eingerichtet">
                hatte sie minimalistisch eingerichtet
              </VerbTooltip>
              . Er{" "}
              <VerbTooltip verb="weggelassen">
                hatte alles Überflüssige weggelassen
              </VerbTooltip>{" "}
              ve{" "}
              <VerbTooltip verb="behalten">
                hatte nur das Nötige behalten
              </VerbTooltip>
              .
            </p>

            <p>
              Thomas{" "}
              <VerbTooltip verb="eröffnet">
                hatte einen kleinen Laden eröffnet
              </VerbTooltip>
              , in dem er{" "}
              <VerbTooltip verb="verkauft">
                handgemachte Waren verkauft
              </VerbTooltip>
              . Maria{" "}
              <VerbTooltip verb="geholfen">
                hatte ihm dabei geholfen
              </VerbTooltip>{" "}
              ve{" "}
              <VerbTooltip verb="unterstützt">
                hatte sein Vorhaben unterstützt
              </VerbTooltip>
              . Die beiden{" "}
              <VerbTooltip verb="kennengelernt">
                hatten sich besser kennengelernt
              </VerbTooltip>{" "}
              ve{" "}
              <VerbTooltip verb="verliebt">
                hatten sich ineinander verliebt
              </VerbTooltip>
              .
            </p>

            <p>
              Ein Jahr später{" "}
              <VerbTooltip verb="geheiratet">hatten sie geheiratet</VerbTooltip>
              . Thomas <VerbTooltip verb="gelernt">hatte gelernt</VerbTooltip>,
              dass wahres Glück nicht in der Geschwindigkeit des Lebens liegt,
              sondern in der Qualität der Momente. Er{" "}
              <VerbTooltip verb="gefunden">hatte endlich gefunden</VerbTooltip>,
              wonach er unbewusst{" "}
              <VerbTooltip verb="gesucht">gesucht</VerbTooltip> hatte: einen
              Sinn, eine Liebe und inneren Frieden.
            </p>

            <p>
              Seine ehemaligen Kollegen{" "}
              <VerbTooltip verb="besucht">hatten ihn besucht</VerbTooltip> ve{" "}
              <VerbTooltip verb="gestaunt">
                hatten über seine Transformation gestaunt
              </VerbTooltip>
              . Einige{" "}
              <VerbTooltip verb="inspiriert">
                waren von seinem Beispiel inspiriert
              </VerbTooltip>{" "}
              worden ve{" "}
              <VerbTooltip verb="nachgedacht">
                hatten über ihr eigenes Leben nachgedacht
              </VerbTooltip>
              . Thomas{" "}
              <VerbTooltip verb="erzählt">
                hatte ihnen seine Geschichte erzählt
              </VerbTooltip>{" "}
              ve <VerbTooltip verb="ermutigt">hatte sie ermutigt</VerbTooltip>,
              ihre eigenen Träume zu verfolgen.
            </p>

            <p>
              So <VerbTooltip verb="gelernt">hatte Thomas gelernt</VerbTooltip>,
              dass ein Leben nicht daran gemessen wird, wie viel man{" "}
              <VerbTooltip verb="erreicht">erreicht</VerbTooltip> oder{" "}
              <VerbTooltip verb="besessen">besessen</VerbTooltip> hat, sondern
              daran, wie authentisch man{" "}
              <VerbTooltip verb="gelebt">gelebt</VerbTooltip> hat. Er{" "}
              <VerbTooltip verb="gefunden">
                hatte seinen Weg gefunden
              </VerbTooltip>{" "}
              ve{" "}
              <VerbTooltip verb="verwirklicht">
                hatte seine wahren Träume verwirklicht
              </VerbTooltip>
              . Das war der Beginn seines neuen, erfüllten Lebens.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GermanStoryInteractive;
