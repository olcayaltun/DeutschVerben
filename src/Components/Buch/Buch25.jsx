import React, { useState } from "react";

const GermanStoryWithVerbs = () => {
  const [hoveredWord, setHoveredWord] = useState(null);

  const verbMeanings = {
    ausgegeben: "ausgeben - harcamak",
    trainiert: "trainieren - antrenman yapmak",
    zugeschaut: "zuschauen - seyretmek",
    angefangen: "anfangen - başlamak",
    geregnet: "regnen - yağmur yağmak",
    verglichen: "vergleichen - karşılaştırmak",
    beantragt: "beantragen - başvurmak",
    aufgepasst: "aufpassen - dikkat etmek",
    verarbeitet: "verarbeiten - işlemek, sindirmek",
    beschäftigt: "beschäftigen - meşgul etmek, ilgilenmek",
    geführt: "führen - yönetmek, tutmak",
    gepostet: "posten - paylaşmak, yayımlamak",
    fotografiert: "fotografieren - fotoğraf çekmek",
    berührt: "berühren - dokunmak, etkilemek",
    gecheckt: "checken - kontrol etmek",
    verstanden: "verstehen - anlamak",
    gekannt: "kennen - tanımak, bilmek",
    ausgekannt: "sich auskennen - bilmek, anlamak",
    gefreut: "sich freuen - sevinmek",
    gefühlt: "sich fühlen - hissetmek",
    vorgestellt: "sich vorstellen - hayal etmek, düşünmek",
    verändert: "sich verändern - değişmek",
    hineinversetzt: "sich hineinversetzen - kendini yerine koymak",
    benommen: "sich benehmen - davranmak",
    zurückgekommen: "zurückkommen - geri dönmek",
    vorbeigeschaut: "vorbeischauen - uğramak, bakmak",
    aufgestanden: "aufstehen - kalkmak",
    eingepackt: "einpacken - paketlemek",
    verstaut: "verstauen - saklamak, yerleştirmek",
    aufgenommen: "aufnehmen - almak, kabul etmek",
    mitgenommen: "mitnehmen - yanına almak",
    losgefahren: "losfahren - hareket etmek, yola çıkmak",
    weitergefahren: "weiterfahren - devam etmek, sürmeye devam etmek",
    aufgegeben: "aufgeben - tükenmek, bitkin düşmek",
    angebaut: "anbauen - yetiştirmek",
    ausgecheckt: "auschecken - kontrol etmek, incelemek",
    zurückgezogen: "sich zurückziehen - geri çekilmek",
    abgebrochen: "abbrechen - sökmek, kaldırmak",
    nachverfolgt: "nachverfolgen - takip etmek",
    weiterverfolgt: "weiterverfolgen - takip etmeye devam etmek",
    nachgedacht: "nachdenken - düşünmek",
    überquert: "überqueren - geçmek, aşmak",
    entschieden: "entscheiden - karar vermek",
    vergrößert: "vergrößern - büyütmek",
    betrieben: "betreiben - yürütmek, yapmak",
    optimiert: "optimieren - optimize etmek",
    erledigt: "erledigen - halletmek",
    vermisst: "vermissen - özlemek",
    überwunden: "überwinden - üstesinden gelebilmek",
    angefragt: "anfragen - sormak, talep etmek",
    entstanden: "entstehen - ortaya çıkmak",
    integriert: "integrieren - entegre etmek",
    reaktiviert: "reaktivieren - yeniden etkinleştirmek",
    präsentiert: "präsentieren - sunmak",
    verlinkt: "verlinken - bağlantı vermek",
    losgegangen: "losgehen - iyi geçmesini sağlamak",
    gequatscht: "quatschen - sohbet etmek",
    geschoben: "schieben - itmek",
    herausgesprudelt: "heraussprudeln - hızla söylemek",
    gefeilt: "feilen - geliştirmek",
    angestoßen: "anstoßen - kadeh tokuşturmak",
    überhört: "überhören - duymamak",
    entlassen: "entlassen - işten çıkarmak",
    geschmollt: "schmollen - surat asmak",
    gezwitschert: "zwitschern - kuş ötüşü",
    umhergeschwirrt: "schwirren - vızıldamak",
    verpestet: "verpesten - bir şeyi kirletmek",
    geschont: "schonen - bir şeyi korumak",
    genickt: "nicken - başını sallamak",
    erwidert: "erwidern - cevap vermek",
    verpasst: "verpassen - bir şeyi kaçırmak",
    gerast: "rasen - hızla gitmek",
    gegründet: "gründen - bir şey kurmak",
    verwehrt: "verwehren - reddetmek",
    gewöhnt: "gewöhnen - alışmak",
    bewundert: "bewundern - hayran olmak",
    gestrahlt: "strahlen - parlamak",
    gescherzt: "scherzen - şaka yapmak",
    vorgelegt: "vorlegen - sunmak",
    verursacht: "verursachen - neden olmak",
    übernommen: "übernehmen - devralmak",
    erlangt: "erlangen - elde etmek",
    erlegen: "erliegen - yenik düşmek",
    abgelenkt: "ablenken - dikkatini dağıtmak",
    rechtfertigen: "rechtfertigen - kendini savunmak",
    gewidmet: "widmen - zaman ayırmak",
    geweigert: "weigern - reddetmek",
    aufgemuntert: "aufmuntern - neşelendirmek",
    aufgetaucht: "auftauchen - ortaya çıkmak",
    geschossen: "schießen - hızla gitmek",
    abgerissen: "abreißen - kesilmek",
    gewagt: "wagen - denemek",
    vorweisen: "vorweisen - göstermek",
    geschluchzt: "schluchzen - hıçkırmak",
    verspielt: "verspielen - kaybetmek",
    beherrscht: "beherrschen - bir şeyi iyi bilmek",
    geirrt: "irren - yanılmak",
    gehalten: "halten - sürmek, dayanmak",
    absolviert: "absolvieren - bir şeyi tamamlamak",
    versprochen: "versprechen - söz vermek",
    verkörpert: "verkörpern - bir şeyi temsil etmek",
    geschlagen: "schlagen - vurmak",
    gewarnt: "warnen - uyarmak",
    getäuscht: "täuschen - yanılmak",
    vermeiden: "vermeiden - kaçınmak",
    gebunden: "binden - bağlanmak",
    beschlossen: "beschließen - karar vermek",
    beneidet: "beneiden - kıskanmak",
  };

  const nounMeanings = {
    Bellen: "das Bellen - köpek havlaması",
    Entlohnung: "die Entlohnung - ücret, ödeme",
    Bezahlung: "die Bezahlung - ödeme, maaş",
    Liegestütz: "der Liegestütz - şınav",
    Schicht: "die Schicht - vardiya",
    Tresen: "der Tresen - tezgah",
    Dutzend: "das Dutzend - düzine (12 adet)",
    Fingerabdruckscanner: "der Fingerabdruckscanner - parmak izi okuyucu",
    Vorgang: "der Vorgang - süreç",
    Gesichtsausdruck: "der Gesichtsausdruck - yüz ifadesi",
    Bierbauch: "der Bierbauch - bira göbeği",
    Frachtraum: "der Frachtraum - yük bölümü",
    Vorstand: "der Vorstand - yönetim kurulu",
    Posten: "der Posten - iş pozisyonu",
    Einheimische: "der Einheimische - yerli",
    Baumkrone: "die Baumkrone - ağaç tepesi",
    Zeitmangel: "der Zeitmangel - zaman darlığı",
    Brezn: "die Brezn - Bavarya simidi",
    Klischee: "das Klischee - klişe",
    Trinkkultur: "die Trinkkultur - içme kültürü",
    Krug: "der Krug - büyük bardak",
    Gaudi: "die/das Gaudi - eğlence (Güney Almanca)",
    Haltung: "die Haltung - soğukkanlılık",
    Haufen: "der Haufen - yığın",
    Bedürfnis: "das Bedürfnis - ihtiyaç",
    Ausweg: "der Ausweg - çıkış yolu",
    Lebensmut: "der Lebensmut - yaşama sevinci",
    Ausstrahlung: "die Ausstrahlung - etki, karizma",
    Umarmung: "die Umarmung - sarılma",
    Stütze: "die Stütze - destek",
    Gehaltserhöhung: "die Gehaltserhöhung - maaş zammı",
    Käfig: "der Käfig - kafes",
    Abschlussball: "der Abschlussball - mezuniyet balosu",
    Vermögen: "das Vermögen - servet",
    Aufmerksamkeit: "die Aufmerksamkeit - dikkat",
    Freudensprung: "der Freudensprung - sevinçten zıplamak",
    Hörsturz: "der Hörsturz - ani işitme kaybı",
    Vorfall: "der Vorfall - olay",
    Herausforderung: "die Herausforderung - meydan okuma",
    Vorgesetzte: "der Vorgesetzte - amir",
    Lage: "die Lage - durum",
    Augenzwinkern: "das Augenzwinkern - göz kırpma",
    Hantel: "die Hantel - dambıl",
    Wasserspender: "der Wasserspender - su sebili",
    Zugezogene: "der Zugezogene - taşınan kişi",
    Schaufensterbummel: "der Schaufensterbummel - vitrin gezmek",
    Riesenzufall: "der Riesenzufall - büyük tesadüf",
    Leidensgenosse: "der Leidensgenosse - aynı kaderi paylaşan kişi",
    Bedrücktheit: "die Bedrücktheit - sıkıntı",
    Klirren: "das Klirren - cam şıkırtısı",
    Dilemma: "das Dilemma - ikilem",
    Luftlinie: "die Luftlinie - kuş uçuşu mesafe",
    Bunde: "im Bunde - birlik içinde",
  };

  const adjectiveMeanings = {
    vermutlich: "muhtemelen",
    möglicherweise: "belki, olasılıkla",
    halbwegs: "yeterince, oldukça",
    nahezu: "neredeyse",
    großzügig: "cömert",
    zuständig: "sorumlu",
    einwandfrei: "kusursuz",
    beschämt: "utanmış",
    ruppig: "kaba, sert",
    friedlich: "barışçıl",
    kratzig: "sert, tırtıklı",
    errötet: "kızarmış",
    wackelig: "sallantılı",
    zukünftig: "gelecekte",
    bescheiden: "mütevazı",
    angesagt: "moda, popüler",
    ausgezeichnet: "mükemmel",
    schwerwiegend: "ciddi",
    zart: "narin",
    permanent: "sürekli",
    leer: "boş",
    sorgenfrei: "kaygısız",
    besessen: "takıntılı",
    herrlich: "harika",
    makellos: "kusursuz",
    gesenkt: "aşağı bakıyor",
    gescheitert: "başarısız",
    ermutigend: "cesaret verici",
    immens: "çok büyük",
    gewöhnlich: "alışılagelmiş",
    vergeblich: "boşuna",
    ausschweifend: "aşırı",
    neugierig: "meraklı",
    mager: "az",
    begeistert: "heyecanlı",
    innig: "samimi",
    erschöpft: "bitkin",
    bedrohlich: "tehlikeli",
    fachsprachlich: "mesleki dil",
    gestrig: "dünkü",
    frustriert: "hayal kırıklığına uğramış",
    prächtige: "görkemli",
    hervorragend: "mükemmel",
    ratlos: "çaresiz",
    stechend: "keskin (ağrı)",
    hektisch: "telaşlı",
    froh: "neşeli",
  };

  const otherMeanings = {
    starren: "dik dik bakmak",
    seufzen: "derin bir nefes alıp vermek",
    versprechen: "söz vermek",
    beherrschen: "bir şeyi iyi bilmek",
    irren: "yanılmak",
    halten: "sürmek, dayanmak",
    annehmen: "bir şeyi kabul etmek",
    absolvieren: "bir şeyi tamamlamak",
    zwitschern: "kuş ötüşü",
    schwirren: "vızıldamak",
    verpesten: "bir şeyi kirletmek",
    schonen: "bir şeyi korumak",
    lauschen: "dinlemek",
    nicken: "başını sallamak",
    erwidern: "cevap vermek",
    verkörpern: "bir şeyi temsil etmek",
    verpassen: "bir şeyi kaçırmak",
    schlagen: "vurmak",
    rasen: "hızla gitmek",
    gründen: "bir şey kurmak",
    verwehren: "reddetmek",
    warnen: "uyarmak",
    täuschen: "yanılmak",
    vermeiden: "kaçınmak",
    binden: "bağlanmak",
    beschließen: "karar vermek",
    beneiden: "kıskanmak",
    strahlen: "parlamak",
    scherzen: "şaka yapmak",
    vorlegen: "sunmak",
    verursachen: "neden olmak",
    übernehmen: "devralmak",
    erlangen: "elde etmek",
    erliegen: "yenik düşmek",
    ablenken: "dikkatini dağıtmak",
    rechtfertigen: "kendini savunmak",
    widmen: "zaman ayırmak",
    weigern: "reddetmek",
    begleiten: "eşlik etmek",
    aufmuntern: "neşelendirmek",
    auftauchen: "ortaya çıkmak",
    schießen: "hızla gitmek",
    abreißen: "kesilmek",
    wagen: "denemek",
    einrosten: "paslanmak",
    vorweisen: "göstermek",
    schluchzen: "hıçkırmak",
    verspielen: "kaybetmek",
    quatschen: "sohbet etmek",
    heraussprudeln: "hızla söylemek",
    feilen: "geliştirmek",
    anstoßen: "kadeh tokuşturmak",
    überhören: "duymamak",
    entlassen: "işten çıkarmak",
    schmollen: "surat asmak",
    zumal: "özellikle, zira",
    außer: "hariç",
    aufreißen: "ardına kadar açmak",
    stirnrunzeln: "kaşlarını çatmak",
    weit: "geniş",
    im: "...-de",
    gewachsen: "wachsen - büyümek",
    Bankdrücken: "das Bankdrücken - bench press",
  };

  const allMeanings = {
    ...verbMeanings,
    ...nounMeanings,
    ...adjectiveMeanings,
    ...otherMeanings,
  };

  // Yardımcı fiillerin listesi
  const auxiliaryVerbs = ["hatte", "war", "hatten", "waren"];

  const HoverableWord = ({ word, meaning, isHighlighted = false }) => {
    const wordKey = word.replace(/[.,!?;:]/, "");
    // Yardımcı fiilse anlamı null yap, aksi takdirde allMeanings'den al veya meaning prop'unu kullan
    const actualMeaning = auxiliaryVerbs.includes(wordKey)
      ? null
      : meaning || allMeanings[wordKey];

    return (
      <span
        className={`relative cursor-pointer transition-all duration-200 ${
          isHighlighted
            ? "font-bold text-blue-700 hover:bg-blue-100 px-1 rounded"
            : "hover:bg-gray-100 px-1 rounded"
        }`}
        onMouseEnter={() => actualMeaning && setHoveredWord(wordKey)}
        onMouseLeave={() => setHoveredWord(null)}
      >
        {word}
        {hoveredWord === wordKey && actualMeaning && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black text-white text-sm rounded-lg shadow-lg whitespace-nowrap z-10">
            {actualMeaning}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
          </div>
        )}
      </span>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Almanca C1 Hikaye - Fiiller ve Kelimeler
        </h1>

        <div className="text-lg leading-relaxed text-gray-700 space-y-4">
          <p>
            Thomas <HoverableWord word="hatte" isHighlighted={true} /> sein
            ganzes <HoverableWord word="Vermögen" /> für den neuen Laden{" "}
            <HoverableWord word="ausgegeben" isHighlighted={true} />. Er{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> jahrelang im
            Fitnessstudio{" "}
            <HoverableWord word="trainiert" isHighlighted={true} /> und dabei
            anderen beim Sport{" "}
            <HoverableWord word="zugeschaut" isHighlighted={true} />. Nachdem er
            mit dem Training{" "}
            <HoverableWord word="angefangen" isHighlighted={true} />{" "}
            <HoverableWord word="hatte" isHighlighted={true} />,{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> es drei Tage
            lang <HoverableWord word="geregnet" isHighlighted={true} />.
          </p>

          <p>
            Er <HoverableWord word="hatte" isHighlighted={true} />{" "}
            <HoverableWord word="vermutlich" /> verschiedene{" "}
            <HoverableWord word="Entlohnung" />
            smöglichkeiten{" "}
            <HoverableWord word="verglichen" isHighlighted={true} /> und eine{" "}
            <HoverableWord word="Bezahlung" /> für seine Arbeit{" "}
            <HoverableWord word="beantragt" isHighlighted={true} />.
            <HoverableWord word="möglicherweise" />{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> er nicht genug{" "}
            <HoverableWord word="aufgepasst" isHighlighted={true} />, als er die
            Zahlen <HoverableWord word="verarbeitet" isHighlighted={true} />{" "}
            <HoverableWord word="hatte" isHighlighted={true} />.
          </p>

          <p>
            Die neue Stelle <HoverableWord word="hatte" isHighlighted={true} />{" "}
            ihn stark <HoverableWord word="beschäftigt" isHighlighted={true} />.
            Er <HoverableWord word="hatte" isHighlighted={true} /> eine kleine
            Gruppe von Mitarbeitern{" "}
            <HoverableWord word="geführt" isHighlighted={true} /> und täglich
            Inhalte auf Social Media{" "}
            <HoverableWord word="gepostet" isHighlighted={true} />. Dabei{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> er Kunden{" "}
            <HoverableWord word="fotografiert" isHighlighted={true} /> und ihre
            Geschichten <HoverableWord word="hatten" isHighlighted={true} /> ihn
            tief <HoverableWord word="berührt" isHighlighted={true} />.
          </p>

          <p>
            Während seiner <HoverableWord word="Schicht" /> am{" "}
            <HoverableWord word="Tresen" />{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> er regelmäßig
            die Kasse <HoverableWord word="gecheckt" isHighlighted={true} />.
            Ein <HoverableWord word="Dutzend" /> Kunden{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> er bereits
            bedient, als er endlich{" "}
            <HoverableWord word="verstanden" isHighlighted={true} />{" "}
            <HoverableWord word="hatte" isHighlighted={true} />, was los war. Er{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> alle Stammkunden{" "}
            <HoverableWord word="gekannt" isHighlighted={true} /> und{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> sich in der
            Gegend gut <HoverableWord word="ausgekannt" isHighlighted={true} />.
          </p>

          <p>
            Zunächst <HoverableWord word="hatte" isHighlighted={true} /> er sich
            über den <HoverableWord word="einwandfrei" />
            en <HoverableWord word="Fingerabdruckscanner" />{" "}
            <HoverableWord word="gefreut" isHighlighted={true} />. Der ganze{" "}
            <HoverableWord word="Vorgang" />{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> ihn anfangs{" "}
            <HoverableWord word="beschämt" />{" "}
            <HoverableWord word="gefühlt" isHighlighted={true} /> lassen. Er{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> sich oft{" "}
            <HoverableWord word="vorgestellt" isHighlighted={true} />, wie sich
            die Situation{" "}
            <HoverableWord word="verändert" isHighlighted={true} />{" "}
            <HoverableWord word="hatte" isHighlighted={true} />.
          </p>

          <p>
            Ein <HoverableWord word="ruppig" />
            er Kunde mit <HoverableWord word="kratzig" />
            em <HoverableWord word="Gesichtsausdruck" /> und einem{" "}
            <HoverableWord word="Bierbauch" />{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> sich in seine
            Lage <HoverableWord word="hineinversetzt" isHighlighted={true} />.
            Thomas <HoverableWord word="hatte" isHighlighted={true} /> sich{" "}
            <HoverableWord word="friedlich" />{" "}
            <HoverableWord word="benommen" isHighlighted={true} /> und tief{" "}
            <HoverableWord word="geseufzt" isHighlighted={true} />.
          </p>

          <p>
            Nachdem er am Morgen früh{" "}
            <HoverableWord word="aufgestanden" isHighlighted={true} />{" "}
            <HoverableWord word="war" isHighlighted={true} />,{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> er seine Sachen{" "}
            <HoverableWord word="eingepackt" isHighlighted={true} /> und sie im{" "}
            <HoverableWord word="Frachtraum" />{" "}
            <HoverableWord word="verstaut" isHighlighted={true} />. Seine
            Kollegin <HoverableWord word="war" isHighlighted={true} />{" "}
            <HoverableWord word="zurückgekommen" isHighlighted={true} /> und{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> kurz{" "}
            <HoverableWord word="vorbeigeschaut" isHighlighted={true} />.
          </p>

          <p>
            Er <HoverableWord word="hatte" isHighlighted={true} /> neue Aufträge{" "}
            <HoverableWord word="aufgenommen" isHighlighted={true} /> und
            wichtige Dokumente{" "}
            <HoverableWord word="mitgenommen" isHighlighted={true} />. Nachdem
            er pünktlich{" "}
            <HoverableWord word="losgefahren" isHighlighted={true} />{" "}
            <HoverableWord word="war" isHighlighted={true} />,{" "}
            <HoverableWord word="war" isHighlighted={true} /> er ohne Pause{" "}
            <HoverableWord word="weitergefahren" isHighlighted={true} />. Seine
            Kräfte <HoverableWord word="hatten" isHighlighted={true} /> ihn fast{" "}
            <HoverableWord word="aufgegeben" isHighlighted={true} />.
          </p>

          <p>
            Der <HoverableWord word="Vorstand" />{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> im eigenen
            Garten Gemüse <HoverableWord word="angebaut" isHighlighted={true} />{" "}
            und die Ernte gründlich{" "}
            <HoverableWord word="ausgecheckt" isHighlighted={true} />. Thomas{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> sich nach dem
            Gespräch <HoverableWord word="zurückgezogen" isHighlighted={true} />{" "}
            und das Projekt{" "}
            <HoverableWord word="abgebrochen" isHighlighted={true} />{" "}
            <HoverableWord word="hatte" isHighlighted={true} />.
          </p>

          <p>
            Sein <HoverableWord word="wackelig" />
            er <HoverableWord word="Posten" />{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> ihn dazu
            gebracht, jede Entwicklung genau zu{" "}
            <HoverableWord word="nachverfolgen" isHighlighted={true} />. Er{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> die
            Angelegenheit{" "}
            <HoverableWord word="weiterverfolgt" isHighlighted={true} /> und
            lange über die Konsequenzen{" "}
            <HoverableWord word="nachgedacht" isHighlighted={true} />.
          </p>

          <p>
            Nachdem er die Straße{" "}
            <HoverableWord word="überquert" isHighlighted={true} />{" "}
            <HoverableWord word="hatte" isHighlighted={true} />,{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> er sich{" "}
            <HoverableWord word="entschieden" isHighlighted={true} />, das
            Geschäft zu <HoverableWord word="vergrößern" isHighlighted={true} />
            .
            <HoverableWord word="nahezu" /> ein Jahr lang{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> er das
            Unternehmen erfolgreich{" "}
            <HoverableWord word="betrieben" isHighlighted={true} /> und die
            Prozesse <HoverableWord word="optimiert" isHighlighted={true} />{" "}
            <HoverableWord word="hatte" isHighlighted={true} />.
          </p>

          <p>
            <HoverableWord word="großzügig" />e Kunden{" "}
            <HoverableWord word="hatten" isHighlighted={true} /> alle Aufträge{" "}
            <HoverableWord word="erledigt" isHighlighted={true} /> und{" "}
            <HoverableWord word="hatten" isHighlighted={true} /> ihre alte
            Heimat <HoverableWord word="vermisst" isHighlighted={true} />.
            Thomas <HoverableWord word="hatte" isHighlighted={true} /> alle
            Hindernisse <HoverableWord word="überwunden" isHighlighted={true} />{" "}
            und bei verschiedenen Firmen{" "}
            <HoverableWord word="angefragt" isHighlighted={true} />.
          </p>

          <p>
            Eine neue Geschäftsidee{" "}
            <HoverableWord word="war" isHighlighted={true} />{" "}
            <HoverableWord word="entstanden" isHighlighted={true} /> und{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> moderne
            Technologie <HoverableWord word="integriert" isHighlighted={true} />
            . Er <HoverableWord word="hatte" isHighlighted={true} /> alte
            Kontakte <HoverableWord word="reaktiviert" isHighlighted={true} />{" "}
            und seine Pläne dem Team{" "}
            <HoverableWord word="präsentiert" isHighlighted={true} />.
          </p>

          <p>
            Nachdem er die Website mit Social Media{" "}
            <HoverableWord word="verlinkt" isHighlighted={true} />{" "}
            <HoverableWord word="hatte" isHighlighted={true} />,{" "}
            <HoverableWord word="war" isHighlighted={true} /> alles gut{" "}
            <HoverableWord word="losgegangen" isHighlighted={true} />. Am{" "}
            <HoverableWord word="Wasserspender" />{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> er mit Kollegen{" "}
            <HoverableWord word="gequatscht" isHighlighted={true} /> und schwere{" "}
            <HoverableWord word="Hantel" />n{" "}
            <HoverableWord word="geschoben" isHighlighted={true} />{" "}
            <HoverableWord word="hatte" isHighlighted={true} />.
          </p>

          <p>
            Ein <HoverableWord word="frustriert" />
            er <HoverableWord word="Zugezogene" />{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> die{" "}
            <HoverableWord word="prächtige" /> Bauten der Stadt bewundert und
            einen <HoverableWord word="Schaufensterbummel" /> gemacht. Seine
            Worte <HoverableWord word="waren" isHighlighted={true} /> nur so{" "}
            <HoverableWord word="herausgesprudelt" isHighlighted={true} /> und
            er <HoverableWord word="hatte" isHighlighted={true} />{" "}
            <HoverableWord word="hervorragend" /> an seiner Technik{" "}
            <HoverableWord word="gefeilt" isHighlighted={true} />.
          </p>

          <p>
            Bei der Feier <HoverableWord word="hatten" isHighlighted={true} />{" "}
            alle miteinander{" "}
            <HoverableWord word="angestoßen" isHighlighted={true} /> - es{" "}
            <HoverableWord word="war" isHighlighted={true} /> eine{" "}
            <HoverableWord word="froh" /> Botschaft gewesen. Seine Augen{" "}
            <HoverableWord word="waren" isHighlighted={true} />{" "}
            <HoverableWord word="weit" /> <HoverableWord word="aufgerissen" />{" "}
            gewesen, als er von dem <HoverableWord word="Riesenzufall" />{" "}
            erfahren <HoverableWord word="hatte" isHighlighted={true} />.
          </p>

          <p>
            Sein <HoverableWord word="Leidensgenosse" />{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> die gleiche{" "}
            <HoverableWord word="Bedrücktheit" /> gespürt und sie{" "}
            <HoverableWord word="waren" isHighlighted={true} />{" "}
            <HoverableWord word="im" /> <HoverableWord word="Bunde" /> gewesen.
            Thomas <HoverableWord word="hatte" isHighlighted={true} /> die
            wichtigen Details{" "}
            <HoverableWord word="überhört" isHighlighted={true} /> und stand{" "}
            <HoverableWord word="ratlos" /> da,{" "}
            <HoverableWord word="stirnrunzeln" /> und{" "}
            <HoverableWord word="nicken" isHighlighted={true} />.
          </p>

          <p>
            Das <HoverableWord word="Klirren" /> der Gläser{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> sein{" "}
            <HoverableWord word="Dilemma" /> noch verstärkt. Ein{" "}
            <HoverableWord word="stechend" />
            er Schmerz <HoverableWord word="hatte" isHighlighted={true} /> sich
            in seinem Kopf <HoverableWord word="breit" /> gemacht{" "}
            <HoverableWord word="hatte" isHighlighted={true} />. Die{" "}
            <HoverableWord word="hektisch" />e Atmosphäre{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> ihn nervös
            werden lassen.
          </p>

          <p>
            Sein Chef <HoverableWord word="hatte" isHighlighted={true} /> ihm
            alles auf einem Silbertablett serviert, aber Zweifel{" "}
            <HoverableWord word="hatten" isHighlighted={true} /> ihn geplagt.
            Die <HoverableWord word="Luftlinie" /> zwischen seinem Zuhause und
            der Arbeit betrug nur wenige Kilometer, doch{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> sein
            Vorgesetzter ihn trotzdem{" "}
            <HoverableWord word="entlassen" isHighlighted={true} />. Thomas{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> tagelang{" "}
            <HoverableWord word="geschmollt" isHighlighted={true} />.
          </p>

          <p>
            Er <HoverableWord word="hatte" isHighlighted={true} /> sich daran{" "}
            <HoverableWord word="gewöhnt" isHighlighted={true} />, früh am
            Morgen das <HoverableWord word="Bellen" /> der Nachbarshunde zu
            hören.
            <HoverableWord word="vermutlich" />{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> er etwas
            aushalten müssen und{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> mit der
            schwierigen Situation klarkommen müssen.
          </p>

          <p>
            Seine finanzielle Belohnung{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> er schließlich
            akzeptiert und <HoverableWord word="hatte" isHighlighted={true} />{" "}
            die Wände angestarrt, während er seine täglichen{" "}
            <HoverableWord word="Liegestütz" />e machte.
            <HoverableWord word="halbwegs" />{" "}
            <HoverableWord word="war" isHighlighted={true} /> er wieder in die
            Gänge gekommen und{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> sich in der
            neuen Stadt niedergelassen.
          </p>

          <p>
            Um sich zu zerstreuen,{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> er sich an den
            schönen Gebäuden sattgesehen und sie{" "}
            <HoverableWord word="bewundert" isHighlighted={true} />. Die
            Einheimischen <HoverableWord word="hatten" isHighlighted={true} />{" "}
            etwas Wunderbares erschaffen und{" "}
            <HoverableWord word="waren" isHighlighted={true} />{" "}
            <HoverableWord word="zuständig" /> für ihn gewesen.
          </p>

          <p>
            Das neue Leben <HoverableWord word="hatte" isHighlighted={true} />{" "}
            ihn erfüllt und seine letzte <HoverableWord word="Schicht" />{" "}
            <HoverableWord word="war" isHighlighted={true} />{" "}
            <HoverableWord word="einwandfrei" /> verlaufen. Am{" "}
            <HoverableWord word="Tresen" />{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> er ein{" "}
            <HoverableWord word="Dutzend" /> zufriedene Kunden bedient und{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> sich nicht mehr{" "}
            <HoverableWord word="beschämt" /> gefühlt.
          </p>

          <p>
            Der <HoverableWord word="Fingerabdruckscanner" />{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> einwandfrei
            funktioniert und der ganze <HoverableWord word="Vorgang" />{" "}
            <HoverableWord word="war" isHighlighted={true} /> reibungslos
            verlaufen. Er <HoverableWord word="hatte" isHighlighted={true} />{" "}
            sich mit der neuen Technik vertraut gemacht und sein{" "}
            <HoverableWord word="ruppig" />
            er <HoverableWord word="Gesichtsausdruck" />{" "}
            <HoverableWord word="war" isHighlighted={true} /> verschwunden.
          </p>

          <p>
            <HoverableWord word="friedlich" />{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> er{" "}
            <HoverableWord word="geseufzt" isHighlighted={true} /> und sein{" "}
            <HoverableWord word="kratzig" />
            es Hemd gegen ein neues getauscht. Der Kunde mit dem{" "}
            <HoverableWord word="Bierbauch" />{" "}
            <HoverableWord word="war" isHighlighted={true} />{" "}
            <HoverableWord word="errötet" /> gewesen und{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> ihm etwas{" "}
            <HoverableWord word="versprochen" isHighlighted={true} />.
          </p>

          <p>
            Thomas <HoverableWord word="hatte" isHighlighted={true} /> die neue
            Sprache <HoverableWord word="beherrscht" isHighlighted={true} /> und
            der <HoverableWord word="Vorstand" />{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> nicht mehr auf
            der Kippe gestanden. Sein <HoverableWord word="wackelig" />
            er <HoverableWord word="Posten" />{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> sich
            stabilisiert und er{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> die{" "}
            <HoverableWord word="Herausforderung" /> angenommen.
          </p>

          <p>
            Er <HoverableWord word="hatte" isHighlighted={true} /> sich nie{" "}
            <HoverableWord word="geirrt" isHighlighted={true} /> - das neue
            Leben <HoverableWord word="hatte" isHighlighted={true} /> länger{" "}
            <HoverableWord word="gehalten" isHighlighted={true} /> als erwartet.
            <HoverableWord word="zukünftig" /> würde er{" "}
            <HoverableWord word="bescheiden" /> bleiben, auch wenn sein Erfolg{" "}
            <HoverableWord word="angesagt" />{" "}
            <HoverableWord word="war" isHighlighted={true} />. Die großen Träume{" "}
            <HoverableWord word="waren" isHighlighted={true} /> nicht mehr in{" "}
            <HoverableWord word="weit" /> Ferne gewesen.
          </p>

          <p>
            <HoverableWord word="zumal" isHighlighted={true} /> er ein{" "}
            <HoverableWord word="ausgezeichnet" />
            es Studium <HoverableWord
              word="absolviert"
              isHighlighted={true}
            />, <HoverableWord word="hatten" isHighlighted={true} /> alle{" "}
            <HoverableWord word="außer" isHighlighted={true} /> den{" "}
            <HoverableWord word="Einheimische" />n seine Fähigkeiten anerkannt.
            Die Vögel <HoverableWord word="hatten" isHighlighted={true} /> in
            den <HoverableWord word="Baumkrone" />n{" "}
            <HoverableWord word="gezwitschert" isHighlighted={true} /> und
            Insekten <HoverableWord word="waren" isHighlighted={true} />{" "}
            <HoverableWord word="umhergeschwirrt" isHighlighted={true} />.
          </p>

          <p>
            Nichts <HoverableWord word="hatte" isHighlighted={true} /> mehr die
            Luft <HoverableWord word="verpestet" isHighlighted={true} /> und er{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> seine Gesundheit{" "}
            <HoverableWord word="geschont" isHighlighted={true} />. Beim{" "}
            <HoverableWord word="lauschen" isHighlighted={true} /> der
            Naturgeräusche <HoverableWord word="hatte" isHighlighted={true} />{" "}
            er seine alten Gewohnheiten aufgegeben - der{" "}
            <HoverableWord word="Zeitmangel" />{" "}
            <HoverableWord word="war" isHighlighted={true} /> kein Problem mehr
            gewesen.
          </p>

          <p>
            Mit einer <HoverableWord word="Brezn" /> in der Hand{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> er{" "}
            <HoverableWord word="genickt" isHighlighted={true} /> und freundlich{" "}
            <HoverableWord word="erwidert" isHighlighted={true} />. Er{" "}
            <HoverableWord word="war" isHighlighted={true} /> nicht mehr auf den
            Deckel bekommen und{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> alle{" "}
            <HoverableWord word="Klischee" />s über die{" "}
            <HoverableWord word="Trinkkultur" />{" "}
            <HoverableWord word="verkörpert" isHighlighted={true} />. Den
            wichtigen Termin <HoverableWord word="hatte" isHighlighted={true} />{" "}
            er nicht <HoverableWord word="verpasst" isHighlighted={true} /> und{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> aus dem{" "}
            <HoverableWord word="Krug" /> getrunken.
          </p>

          <p>
            Seine rhetorischen Fragen{" "}
            <HoverableWord word="hatten" isHighlighted={true} /> für{" "}
            <HoverableWord word="Gaudi" /> gesorgt, aber die{" "}
            <HoverableWord word="Lage" />{" "}
            <HoverableWord word="war" isHighlighted={true} />{" "}
            <HoverableWord word="schwerwiegend" /> gewesen. Er{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> der deutschen
            Sprache mächtig sein müssen und{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> hart{" "}
            <HoverableWord word="geschlagen" isHighlighted={true} /> werden
            können.
          </p>

          <p>
            Die Zeit <HoverableWord word="war" isHighlighted={true} />{" "}
            <HoverableWord word="gerast" isHighlighted={true} /> und er{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> seine{" "}
            <HoverableWord word="Haltung" /> bewahrt. Ihm{" "}
            <HoverableWord word="war" isHighlighted={true} /> nach einer{" "}
            <HoverableWord word="zart" />
            en <HoverableWord word="Umarmung" /> zumute gewesen und er{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> etwas Neues{" "}
            <HoverableWord word="gegründet" isHighlighted={true} />.
          </p>

          <p>
            Seine Träume <HoverableWord word="waren" isHighlighted={true} /> in
            Erfüllung gegangen,{" "}
            <HoverableWord
              word="geschweige"
              isHighlighted={true}
              meaning="geschweige - hele ki"
            />{" "}
            denn <HoverableWord word="permanent" />e Probleme. Sein Kopf{" "}
            <HoverableWord word="war" isHighlighted={true} /> nicht mehr{" "}
            <HoverableWord word="leer" /> gewesen und er{" "}
            <HoverableWord word="hatte" isHighlighted={true} />{" "}
            <HoverableWord word="sorgenfrei" /> gelebt. Obwohl er arm wie eine
            Kirchenmaus gewesen{" "}
            <HoverableWord word="war" isHighlighted={true} />,{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> er einen{" "}
            <HoverableWord word="Haufen" /> Glück gehabt.
          </p>

          <p>
            Sein <HoverableWord word="Bedürfnis" /> nach Anerkennung{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> niemand{" "}
            <HoverableWord word="verwehrt" isHighlighted={true} /> und er{" "}
            <HoverableWord word="war" isHighlighted={true} /> nicht mehr{" "}
            <HoverableWord word="besessen" /> von Erfolg gewesen. Man{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> ihn vor den
            Gefahren <HoverableWord word="gewarnt" isHighlighted={true} />, aber
            das Leben <HoverableWord word="war" isHighlighted={true} />{" "}
            <HoverableWord word="herrlich" /> gewesen.
          </p>

          <p>
            Er <HoverableWord word="war" isHighlighted={true} /> nicht mehr am
            Boden zerstört gewesen und{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> sich nicht{" "}
            <HoverableWord word="getäuscht" isHighlighted={true} />. Den
            schweren Schlag <HoverableWord word="hatte" isHighlighted={true} />{" "}
            er <HoverableWord word="überwunden" isHighlighted={true} /> und{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> weitere Probleme{" "}
            <HoverableWord word="vermeiden" isHighlighted={true} />.
          </p>

          <p>
            Einen <HoverableWord word="Ausweg" />{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> er gefunden und{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> sich an das neue
            Leben <HoverableWord word="gebunden" isHighlighted={true} />. Sein{" "}
            <HoverableWord word="Lebensmut" />{" "}
            <HoverableWord word="war" isHighlighted={true} /> zurückgekehrt und
            er <HoverableWord word="hatte" isHighlighted={true} />{" "}
            <HoverableWord word="beschlossen" isHighlighted={true} />, mit
            erhobenem Haupt weiterzumachen.
          </p>

          <p>
            Andere <HoverableWord word="hatte" isHighlighted={true} /> er um
            ihre <HoverableWord word="makellos" />e{" "}
            <HoverableWord word="Ausstrahlung" />{" "}
            <HoverableWord word="beneidet" isHighlighted={true} />, aber jetzt{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> er selbst{" "}
            <HoverableWord word="gestrahlt" isHighlighted={true} /> wie ein
            Honigkuchenpferd. Die warme <HoverableWord word="Umarmung" />{" "}
            <HoverableWord word="war" isHighlighted={true} /> eine wichtige{" "}
            <HoverableWord word="Stütze" /> gewesen und er{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> oft{" "}
            <HoverableWord word="gescherzt" isHighlighted={true} />.
          </p>

          <p>
            Die <HoverableWord word="Gehaltserhöhung" />{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> er mit{" "}
            <HoverableWord word="gesenkt" />
            em Blick entgegengenommen und wichtige Dokumente{" "}
            <HoverableWord word="vorgelegt" isHighlighted={true} />. Seine
            Entscheidung <HoverableWord word="hatte" isHighlighted={true} />{" "}
            positive Veränderungen{" "}
            <HoverableWord word="verursacht" isHighlighted={true} /> und er{" "}
            <HoverableWord word="war" isHighlighted={true} /> nicht{" "}
            <HoverableWord word="gescheitert" />.
          </p>

          <p>
            Die <HoverableWord word="ermutigend" />
            en Worte <HoverableWord word="hatten" isHighlighted={true} /> ihn
            aus seinem <HoverableWord word="Käfig" /> befreit und er{" "}
            <HoverableWord word="war" isHighlighted={true} /> in die Fußstapfen
            seines Mentors getreten. Die Verantwortung{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> er{" "}
            <HoverableWord word="übernommen" isHighlighted={true} /> und einen{" "}
            <HoverableWord word="immens" />
            en Erfolg <HoverableWord word="erlangt" isHighlighted={true} />.
          </p>

          <p>
            Das Erbe <HoverableWord word="hatte" isHighlighted={true} /> er{" "}
            <HoverableWord word="aufrechterhalten" isHighlighted={true} /> und{" "}
            <HoverableWord word="war" isHighlighted={true} /> dem Druck nicht{" "}
            <HoverableWord word="erlegen" isHighlighted={true} />. Die
            schwierigen Erfahrungen{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> er{" "}
            <HoverableWord word="verarbeitet" isHighlighted={true} /> und{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> sich mit anderen
            Aktivitäten <HoverableWord word="abgelenkt" isHighlighted={true} />.
          </p>

          <p>
            Vom <HoverableWord word="Abschlussball" />{" "}
            <HoverableWord word="war" isHighlighted={true} /> er{" "}
            <HoverableWord word="begeistert" /> zurückgekehrt und{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> sich nicht{" "}
            <HoverableWord word="rechtfertigen" isHighlighted={true} /> müssen.
            <HoverableWord word="gewöhnlich" />{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> er sich seiner
            Familie <HoverableWord word="gewidmet" isHighlighted={true} />, aber
            diesmal <HoverableWord word="hatte" isHighlighted={true} /> er sich{" "}
            <HoverableWord word="geweigert" isHighlighted={true} />.
          </p>

          <p>
            <HoverableWord word="vergeblich" />{" "}
            <HoverableWord word="hatten" isHighlighted={true} /> andere
            versucht, ihn an Bord zu holen, aber er{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> seine Familie{" "}
            <HoverableWord word="begleitet" isHighlighted={true} />. Sein{" "}
            <HoverableWord word="Vermögen" />{" "}
            <HoverableWord word="war" isHighlighted={true} />{" "}
            <HoverableWord word="gewachsen" isHighlighted={true} /> und er{" "}
            <HoverableWord word="war" isHighlighted={true} /> nicht mehr auf
            andere angewiesen gewesen.
          </p>

          <p>
            Das <HoverableWord word="ausschweifend" />e Leben{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> seine{" "}
            <HoverableWord word="Aufmerksamkeit" /> erregt und Freunde{" "}
            <HoverableWord word="hatten" isHighlighted={true} /> ihn{" "}
            <HoverableWord word="aufgemuntert" isHighlighted={true} />. Mit
            einem <HoverableWord word="Freudensprung" />{" "}
            <HoverableWord word="war" isHighlighted={true} /> er reagiert und
            plötzlich <HoverableWord word="waren" isHighlighted={true} /> neue
            Möglichkeiten{" "}
            <HoverableWord word="aufgetaucht" isHighlighted={true} />.
          </p>

          <p>
            Der <HoverableWord word="Hörsturz" />{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> ihn{" "}
            <HoverableWord word="neugierig" /> gemacht und Gedanken{" "}
            <HoverableWord word="waren" isHighlighted={true} /> durch seinen
            Kopf <HoverableWord word="geschossen" isHighlighted={true} />. Der
            Kontakt zu alten Freunden{" "}
            <HoverableWord word="war" isHighlighted={true} /> nicht{" "}
            <HoverableWord word="abgerissen" isHighlighted={true} /> und nach
            dem <HoverableWord word="Vorfall" />{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> er etwas Neues{" "}
            <HoverableWord word="gewagt" isHighlighted={true} />.
          </p>

          <p>
            In der neuen Stadt{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> er Fuß gefasst,
            obwohl die Erfolge anfangs <HoverableWord word="mager" /> gewesen{" "}
            <HoverableWord word="waren" isHighlighted={true} />. Seine
            Fähigkeiten <HoverableWord word="waren" isHighlighted={true} />{" "}
            nicht <HoverableWord word="eingerostet" isHighlighted={true} /> und{" "}
            <HoverableWord word="begeistert" />{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> er von Grund auf
            neu begonnen.
          </p>

          <p>
            Die <HoverableWord word="Herausforderung" />{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> er angenommen
            und <HoverableWord word="hatte" isHighlighted={true} />{" "}
            beeindruckende Ergebnisse{" "}
            <HoverableWord word="vorweisen" isHighlighted={true} /> können.
            Seinem <HoverableWord word="Vorgesetzte" />n{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> er bewiesen,
            dass er die richtige Wahl gewesen{" "}
            <HoverableWord word="war" isHighlighted={true} />.
          </p>

          <p>
            <HoverableWord word="innig" />{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> er{" "}
            <HoverableWord word="geschluchzt" isHighlighted={true} />, als er an
            die schweren Zeiten dachte, aber jetzt{" "}
            <HoverableWord word="war" isHighlighted={true} /> er nicht mehr{" "}
            <HoverableWord word="erschöpft" />. Die{" "}
            <HoverableWord word="bedrohlich" />e Situation, in der sein Job an
            einem seidenen Faden gehangen{" "}
            <HoverableWord word="hatte" isHighlighted={true} />,{" "}
            <HoverableWord word="war" isHighlighted={true} /> vorbei gewesen.
          </p>

          <p>
            Er <HoverableWord word="hatte" isHighlighted={true} /> seine Zukunft
            nicht <HoverableWord word="verspielt" isHighlighted={true} /> und
            die schwierige <HoverableWord word="Lage" /> gemeistert. Mit{" "}
            <HoverableWord word="fachsprachlich" />
            en Begriffen <HoverableWord word="war" isHighlighted={true} /> er
            ins Schwitzen gekommen, aber die <HoverableWord word="gestrig" />
            en Sorgen <HoverableWord word="waren" isHighlighted={true} />{" "}
            vergessen gewesen.
          </p>

          <p>
            Mit einem <HoverableWord word="Augenzwinkern" />{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> er die{" "}
            <HoverableWord word="Hantel" /> gehoben und beim{" "}
            <HoverableWord word="Bankdrücken" isHighlighted={true} /> seine
            Kraft bewiesen. Am <HoverableWord word="Wasserspender" />{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> er mit Kollegen{" "}
            <HoverableWord word="gequatscht" isHighlighted={true} /> und{" "}
            <HoverableWord word="war" isHighlighted={true} /> nicht mehr{" "}
            <HoverableWord word="frustriert" /> gewesen.
          </p>

          <p>
            Als <HoverableWord word="Zugezogene" />r{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> er die{" "}
            <HoverableWord word="prächtige" />n Bauten{" "}
            <HoverableWord word="bewundert" isHighlighted={true} /> und einen
            entspannten <HoverableWord word="Schaufensterbummel" /> gemacht.
            <HoverableWord word="begeistert" />{" "}
            <HoverableWord word="waren" isHighlighted={true} /> die Worte aus
            ihm <HoverableWord word="herausgesprudelt" isHighlighted={true} />{" "}
            und er <HoverableWord word="hatte" isHighlighted={true} />{" "}
            <HoverableWord word="hervorragend" /> an seinen Deutschkenntnissen{" "}
            <HoverableWord word="gefeilt" isHighlighted={true} />.
          </p>

          <p>
            Thomas lächelte zufrieden. Sein neues Leben{" "}
            <HoverableWord word="hatte" isHighlighted={true} /> alle Erwartungen
            übertroffen und er <HoverableWord word="war" isHighlighted={true} />{" "}
            endlich angekommen - sowohl beruflich als auch persönlich.
          </p>
        </div>

        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-600 text-center">
            <strong>Tipp:</strong> Koyu renkli fiillerin, sıfatların ve diğer
            kelimelerin üzerine fare ile gelerek Almanca kelimelerin yalın
            halini ve Türkçe anlamlarını görebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GermanStoryWithVerbs;
