const Dizi = [
  {
    kelime: "die Ewigkeit: çok uzun zaman, sonsuz görünen süre",
    cümle: "Die Ewigkeit des Universums ist schwer zu begreifen.",
  },
  {
    kelime: "kräftig: güçlü, yüksek sesli, yoğun",
    cümle: "Er trank einen kräftigen Kaffee, um wach zu bleiben.",
  },
  {
    kelime: "überhören: bir şeyi duymamak",
    cümle: "Sie hat seine Bemerkung absichtlich überhört.",
  },
  {
    kelime: "den Kopf schütteln: başı sağa sola sallamak",
    cümle: "Er schüttelte nur den Kopf, als er die Nachricht hörte.",
  },
  {
    kelime: "dringen: belirli bir yere ulaşmak",
    cümle: "Das Wasser drang langsam durch die Ritzen.",
  },
  {
    kelime: "sich schleppen: zorlukla hareket etmek",
    cümle: "Er schleppte sich müde nach Hause.",
  },
  {
    kelime: "jemandem etwas entgegenstrecken: birine bir şey uzatmak",
    cümle: "Sie streckte ihm die Hand entgegen, um zu helfen.",
  },
  {
    kelime: "umgehend: hemen, anında",
    cümle: "Bitte antworten Sie umgehend auf diese E-Mail.",
  },
  {
    kelime: "aus dem Staunen nicht herauskommen: çok şaşırmak",
    cümle: "Sie kam aus dem Staunen nicht heraus, als sie das Geschenk sah.",
  },
  {
    kelime: "ehrfürchtig: saygılı",
    cümle: "Die Kinder sahen ehrfürchtig zu den Sternen auf.",
  },
  {
    kelime: "wart’s ab: göreceksin",
    cümle: "Wart's ab, morgen wird alles besser!",
  },
  {
    kelime: "frech: arsız, yüzsüz",
    cümle: "Seine freche Antwort verärgerte den Lehrer.",
  },
  {
    kelime: "etwas betreten: bir yere girmek",
    cümle: "Sie betrat das Zimmer leise, um niemanden zu stören.",
  },
  {
    kelime: "ohne zu zögern: tereddüt etmeden",
    cümle: "Er sprang ohne zu zögern ins kalte Wasser.",
  },
  {
    kelime: "etwas mit sich führen: yanında taşımak",
    cümle: "Sie führt immer einen Regenschirm mit sich.",
  },
  {
    kelime: "jemanden dirigieren: yönlendirmek",
    cümle: "Der Manager dirigierte das Team effizient durch die Krise.",
  },
  {
    kelime: "etwas aufnehmen: not etmek",
    cümle: "Der Student nahm alle wichtigen Punkte im Heft auf.",
  },
  {
    kelime: "jemanden duzen: 'sen' diye hitap etmek",
    cümle: "In Deutschland duzt man oft Freunde und Kollegen.",
  },
  {
    kelime: "der Vorgesetzte: amir, patron",
    cümle: "Der Vorgesetzte lobte das Team für die gute Arbeit.",
  },
  {
    kelime: "solide: sağlam, güvenilir",
    cümle: "Das Haus wurde auf einem soliden Fundament gebaut.",
  },
  {
    kelime: "einen Beitrag leisten: katkıda bulunmak",
    cümle: "Jeder kann einen Beitrag zum Umweltschutz leisten.",
  },
  {
    kelime: "unbesetzt: boş, dolu değil",
    cümle: "Der Parkplatz war glücklicherweise unbesetzt.",
  },
  {
    kelime: "stets: her zaman",
    cümle: "Er ist stets pünktlich zur Arbeit gekommen.",
  },
  {
    kelime: "reibungslos: sorunsuz",
    cümle: "Die Verhandlungen verliefen reibungslos.",
  },
  {
    kelime: "fortfahren: devam etmek",
    cümle: "Bitte fahren Sie mit Ihrer Erklärung fort.",
  },
  {
    kelime: "etwas/jemanden überwachen: kontrol etmek",
    cümle: "Die Kameras überwachen den Eingang des Gebäudes.",
  },
  {
    kelime: "etwas sicherstellen: garanti etmek",
    cümle: "Wir müssen die Qualität der Produkte sicherstellen.",
  },
  {
    kelime: "etwas aufrechterhalten: sürdürmek",
    cümle: "Es ist wichtig, die Traditionen aufrechtzuerhalten.",
  },
  {
    kelime: "jemandem etwas vermitteln: anlatmak",
    cümle: "Der Lehrer vermittelte uns die Grundlagen der Physik.",
  },
  {
    kelime: "etwas/jemandem fordern: desteklemek",
    cümle: "Die Organisation fordert benachteiligte Gemeinden.",
  },
  {
    kelime: "etwas herausholen: avantaj sağlamak",
    cümle: "Sie holte das Beste aus der Situation heraus.",
  },
  {
    kelime: "spüren: hissetmek",
    cümle: "Ich spürte die Anspannung im Raum.",
  },
  {
    kelime: "agieren: hareket etmek",
    cümle: "In Krisen muss man schnell und entschlossen agieren.",
  },
  {
    kelime: "hinunterlaufen: aşağı koşmak",
    cümle: "Die Kinder liefen die Treppe hinunter.",
  },
  {
    kelime: "die Schweißperle: ter damlası",
    cümle: "Eine Schweißperle rollte ihm über die Stirn.",
  },
  {
    kelime: "sich etwas gewachsen fühlen: üstesinden gelebileceğini hissetmek",
    cümle: "Sie fühlte sich der Herausforderung gewachsen.",
  },
  {
    kelime: "das Heiligtum: kutsal yer",
    cümle: "Die Kathedrale gilt als Heiligtum der Stadt.",
  },
  {
    kelime: "der Ablauf: süreç",
    cümle: "Der Ablauf der Veranstaltung war gut organisiert.",
  },
  {
    kelime: "sich einarbeiten: işe alışmak",
    cümle: "Er brauchte eine Woche, um sich einzuarbeiten.",
  },
  {
    kelime: "angeregt: canlı",
    cümle: "Die Diskussion war angeregt und produktiv.",
  },
  {
    kelime: "vergnügt: neşeli",
    cümle: "Die vergnügte Kindergruppe spielte im Park.",
  },
  {
    kelime: "Stück für Stück: yavaş yavaş",
    cümle: "Stück für Stück baute er das Modellflugzeug.",
  },
  {
    kelime: "etwas aus den Augen verlieren: unutmak",
    cümle: "Er verlor das Ziel nie aus den Augen.",
  },
  {
    kelime: "herumtrippen: klavyeye hafifçe basmak",
    cümle: "Sie trippelte gelangweilt auf der Tastatur herum.",
  },
  {
    kelime: "jemandem loben: övmek",
    cümle: "Der Chef lobte das Team für die hervorragende Arbeit.",
  },
  {
    kelime: "anerkennend: takdir edercesine",
    cümle: "Sie nickte anerkennend, als er die Lösung präsentierte.",
  },
  {
    kelime: "das Gespür: sezgi",
    cümle: "Er hat ein natürliches Gespür für Musik.",
  },
  {
    kelime: "die Schwachstelle: zayıf nokta",
    cümle: "Die Sicherheitslücke war die Schwachstelle des Systems.",
  },
  {
    kelime: "jemandem schmeicheln: pohpohlamak",
    cümle: "Er schmeichelte ihr, um einen Gefallen zu bekommen.",
  },
  {
    kelime: "jemandem als ... bezeichnen: birini ... olarak adlandırmak",
    cümle: "Sie bezeichnete ihn als ihren besten Freund.",
  },
  {
    kelime: "angeschalteten: uygun, tam yerinde",
    cümle: "Das Timing war perfekt angeschalteten.",
  },
  {
    kelime: "der Einsatz: çaba, emek",
    cümle: "Sein Einsatz für das Projekt war bewundernswert.",
  },
  {
    kelime: "ins Staunen geraten: şaşırmak",
    cümle: "Sie geriet ins Staunen, als sie die Überraschung sah.",
  },
  {
    kelime: "jemandem aufnehmen: birini gruba kabul etmek",
    cümle: "Die Gruppe nahm den Neuling freundlich auf.",
  },
  {
    kelime: "wie aus dem Ei gepellt: şık ve düzenli",
    cümle: "Er erschien wie aus dem Ei gepellt zur Hochzeit.",
  },
  {
    kelime: "ansehnlich: gösterişli, çekici",
    cümle: "Das Gebäude war äußerlich sehr ansehnlich.",
  },
  {
    kelime: "aus sich herauskommen: çekingenliği yenmek",
    cümle: "Beim Networking muss man aus sich herauskommen.",
  },
  {
    kelime: "die Bereicherung: zenginleştirme",
    cümle: "Seine Ideen waren eine Bereicherung für das Team.",
  },
  {
    kelime: "sich in Schale werfen: şık giyinmek",
    cümle: "Sie warf sich in Schale für die Gala.",
  },
  {
    kelime: "lebhaft: canlı, hareketli",
    cümle: "Die Diskussion wurde schnell lebhaft.",
  },
  {
    kelime: "der Form halber: şeklen, formalite icabı",
    cümle: "Der Form halber unterschrieb er das Dokument.",
  },
  {
    kelime: "das Vorhaben: plan, niyet",
    cümle: "Unser Vorhaben, den Park zu renovieren, gelang.",
  },
  {
    kelime: "sein Handwerk verstehen: işinde usta olmak",
    cümle: "Er versteht sein Handwerk als Koch perfekt.",
  },
  {
    kelime: "den Weg ebnen: yolu açmak",
    cümle: "Die Regierung ebnete den Weg für neue Investitionen.",
  },
  {
    kelime: "etwas in vollen Zügen genießen: tadını çıkarmak",
    cümle: "Sie genoss den Urlaub in vollen Zügen.",
  },
  {
    kelime: "die Bekanntschaft: tanışıklık",
    cümle: "Ich machte die Bekanntschaft eines interessanten Künstlers.",
  },
  {
    kelime: "die Köpfe zusammenstecken: fısıldaşmak",
    cümle:
      "Die Schüler steckten die Köpfe zusammen, um den Plan zu besprechen.",
  },
  {
    kelime: "unbedingt: kesinlikle",
    cümle: "Du musst unbedingt diesen Film sehen!",
  },
  {
    kelime: "längst nicht: hiç değil",
    cümle: "Das Problem ist längst nicht gelöst.",
  },
  {
    kelime: "die Gelegenheit: fırsat",
    cümle: "Nutze die Gelegenheit, solange sie da ist.",
  },
  {
    kelime: "mit gemischten Gefühlen: karışık duygularla",
    cümle: "Er verließ die Stadt mit gemischten Gefühlen.",
  },
  {
    kelime: "vernarrt: tutkun, aşık",
    cümle: "Sie ist vernarrt in klassische Musik.",
  },
  {
    kelime: "etwas/jemanden umgeben: çevrelemek",
    cümle: "Ein geheimnisvoller Wald umgab das Schloss.",
  },
  {
    kelime: "wertvoll: değerli",
    cümle: "Diese Erfahrung war für mich sehr wertvoll.",
  },
  {
    kelime: "vorrang haben: öncelikli olmak",
    cümle: "Gesundheit hat immer Vorrang.",
  },
  {
    kelime: "sich ergeben: ortaya çıkmak",
    cümle: "Aus der Diskussion ergab sich eine neue Idee.",
  },
  {
    kelime: "etwas nachbereiten: sonradan işlemek",
    cümle: "Wir müssen die Daten noch nachbereiten.",
  },
  {
    kelime: "jemals: hiç, bir zaman",
    cümle: "Hast du jemals vom Nordlicht geträumt?",
  },
  {
    kelime: "flüstern: fısıldamak",
    cümle: "Sie flüsterte ihm das Geheimnis ins Ohr.",
  },
  {
    kelime: "zu wünschen übrig lassen: eksik kalmak",
    cümle: "Die Hygiene ließ hier leider zu wünschen übrig.",
  },
  {
    kelime: "der Fleiß: çalışkanlık",
    cümle: "Sein Fleiß führte zum Erfolg.",
  },
  {
    kelime: "etwas erzielen: başarmak",
    cümle: "Das Team erzielte einen neuen Rekord.",
  },
  {
    kelime: "lediglich: sadece",
    cümle: "Es war lediglich eine Frage der Zeit.",
  },
  {
    kelime: "sich vertiefen: yoğunlaşmak",
    cümle:
      "Er vertiefte sich in sein Buch und hörte nichts mehr um sich herum.",
  },
  {
    kelime: "unbeholfen: beceriksiz",
    cümle:
      "Der unbeholfene Versuch, das Regal aufzubauen, scheiterte kläglich.",
  },
  {
    kelime: "kichern: kıkırdamak",
    cümle: "Die Mädchen kicherten hinter vorgehaltener Hand.",
  },
  {
    kelime: "gesprächig: konuşkan",
    cümle: "Der gesprächige Taxifahrer erzählte seine ganze Lebensgeschichte.",
  },
  {
    kelime: "der Unterton: alt ton",
    cümle: "In ihrer Stimme lag ein drohender Unterton.",
  },
  {
    kelime: "sich einig werden: anlaşmak",
    cümle: "Nach stundenlangem Streit wurden sie sich endlich einig.",
  },
  {
    kelime: "die Vorfreude: beklenti",
    cümle: "Die Vorfreude auf den Geburtstag war kaum auszuhalten.",
  },
  {
    kelime: "der Bock: istek (argo)",
    cümle: "Ich habe keinen Bock, heute zu arbeiten!",
  },
  {
    kelime: "etwas zuklappen: kapatmak",
    cümle: "Sie klappte den Laptop zu und stand auf.",
  },
  {
    kelime: "aufbrechen: yola çıkmak",
    cümle: "Wir brechen bei Sonnenaufgang auf.",
  },
  {
    kelime: "einen Blick reinwerfen: göz atmak",
    cümle: "Kann ich mal einen Blick in dein Notizbuch werfen?",
  },
  {
    kelime: "das Genie: dahi",
    cümle: "Albert Einstein gilt als Genie der Physik.",
  },
  {
    kelime: "etwas beherrschen: hakim olmak",
    cümle: "Sie beherrscht fünf Sprachen fließend.",
  },
  {
    kelime: "der Spruch: özlü söz",
    cümle: "„Carpe Diem“ ist ein berühmter lateinischer Spruch.",
  },
  {
    kelime: "jemanden auffordern: davet etmek",
    cümle: "Der Lehrer forderte die Schüler auf, leise zu sein.",
  },
  {
    kelime: "tippen: hafifçe dokunmak",
    cümle: "Sie tippte ihn sanft auf die Schulter.",
  },
  {
    kelime: "die Einkaufsstraße: alışveriş caddesi",
    cümle: "Die Einkaufsstraße war an Wochenenden immer überfüllt.",
  },
  {
    kelime: "alles, was das Herz begehrt: her şey",
    cümle: "In diesem Laden gibt es alles, was das Herz begehrt.",
  },
  {
    kelime: "etwas übernehmen: üstlenmek",
    cümle: "Er übernahm die Verantwortung für den Fehler.",
  },
  {
    kelime: "sich Mühe geben: çaba göstermek",
    cümle: "Gib dir Mühe, dann schaffst du es!",
  },
  {
    kelime: "belebt: canlı",
    cümle: "Der Marktplatz war lebhaft und belebt.",
  },
  {
    kelime: "das Herz: merkez",
    cümle: "Der Park ist das Herz der Stadt.",
  },
  {
    kelime: "der Wachturm: gözetleme kulesi",
    cümle: "Der alte Wachturm steht noch immer am Stadtrand.",
  },
  {
    kelime: "umliegend: çevredeki",
    cümle: "Die umliegenden Dörfer lagen im Nebel.",
  },
  {
    kelime: "das Ein und Alles: en önemli şey",
    cümle: "Für sie war ihre Familie das Ein und Alles.",
  },
  {
    kelime: "sich auf etwas einlassen: kabul etmek",
    cümle: "Er ließ sich auf das riskante Geschäft ein.",
  },
  {
    kelime: "gelten als: sayılmak",
    cümle: "Er gilt als bester Spieler der Mannschaft.",
  },
  {
    kelime: "landen: varmak",
    cümle: "Das Flugzeug landete sicher in Berlin.",
  },
  {
    kelime: "die Gesangskunst: şarkı söyleme sanatı",
    cümle: "Ihre Gesangskunst begeisterte das Publikum.",
  },
  {
    kelime: "etwas zum Besten geben: sunmak, eğlendirmek",
    cümle: "Er gab eine lustige Geschichte zum Besten.",
  },
  {
    kelime: "sich umschauen: etrafa bakmak",
    cümle: "Sie schaute sich um, um den Ausgang zu finden.",
  },
  {
    kelime: "jemandem fällt etwas/jemand auf: fark etmek",
    cümle: "Ihm fiel sofort auf, dass etwas nicht stimmte.",
  },
  {
    kelime: "unauffällig: dikkat çekmeyen",
    cümle: "Sie trug ein unauffälliges Outfit.",
  },
  {
    kelime: "zu jemandem rüberschauen: birine bakmak",
    cümle: "Er schaute rüber zu ihr und lächelte.",
  },
  {
    kelime: "vorkommen: görünmek, izlenim vermek",
    cümle: "Sein Verhalten kam mir seltsam vor.",
  },
  {
    kelime: "etwas heben: kaldırmak",
    cümle: "Er hob die Kiste mühelos hoch.",
  },
  {
    kelime: "verdutzt: şaşkın",
    cümle: "Sie war verdutzt über seine plötzliche Frage.",
  },
  {
    kelime: "lässig: rahat, kaygısız",
    cümle: "Er trug die Jeans lässig mit einem weißen Shirt.",
  },
  {
    kelime: "etwas ausstrahlen: yaymak",
    cümle: "Sie strahlte pure Freude aus.",
  },
  {
    kelime: "der Schützling: himaye edilen kişi",
    cümle: "Der junge Künstler war sein Schützling.",
  },
  {
    kelime: "eins und eins zusammenzählen: sonuç çıkarmak",
    cümle: "Sie zählte eins und eins zusammen und verstand den Betrug.",
  },
  {
    kelime: "aufatmen: rahatlamak",
    cümle: "Endlich konnte er aufatmen, als die Prüfung vorbei war.",
  },
  {
    kelime: "der Vorfall: olay",
    cümle: "Der Vorfall wurde der Polizei gemeldet.",
  },
  {
    kelime: "etwas durchführen: uygulamak",
    cümle: "Das Experiment wurde sorgfältig durchgeführt.",
  },
  {
    kelime: "die Bewertung: değerlendirme",
    cümle: "Die Bewertung der Leistung erfolgte anonym.",
  },
  {
    kelime: "leuchten: parlamak",
    cümle: "Die Sterne leuchteten am Nachthimmel.",
  },
  {
    kelime: "der Posten: pozisyon",
    cümle: "Er bekam einen neuen Posten in der Firma.",
  },
  {
    kelime: "mittelfristig: orta vadeli",
    cümle: "Mittelfristig planen wir eine Expansion.",
  },
  {
    kelime: "die Bedrohung: tehdit",
    cümle: "Die Bedrohung durch Cyberangriffe wächst.",
  },
  {
    kelime: "in der Tat: gerçekten",
    cümle: "In der Tat war das Ergebnis überraschend.",
  },
  {
    kelime: "etwas fortsetzen: sürdürmek",
    cümle: "Wir werden die Verhandlungen fortsetzen.",
  },
  {
    kelime: "etwas/jemanden stehen lassen: bırakmak",
    cümle: "Er ließ seinen Koffer im Zug stehen.",
  },
  {
    kelime: "das Gewissen: vicdan",
    cümle: "Sein Gewissen ließ ihn nicht schlafen.",
  },
  {
    kelime: "auf etwas/jemanden anstoßen: kadeh tokuşturmak",
    cümle: "Sie stießen auf den Erfolg an.",
  },
  {
    kelime: "etwas (D) nachgehen: peşinden gitmek",
    cümle: "Er ging seinem Hobby leidenschaftlich nach.",
  },
  {
    kelime: "die Sitzung: toplantı",
    cümle: "Die Sitzung wurde auf nächste Woche verschoben.",
  },
  {
    kelime: "sich erheben: ayağa kalkmak",
    cümle: "Die Zuhörer erhoben sich zum Applaus.",
  },
  {
    kelime: "der Zuspruch: övgü, takdir",
    cümle: "Sein Zuspruch gab mir neuen Mut.",
  },
  {
    kelime: "etwas aufklappen: açmak",
    cümle: "Sie klappte den Laptop auf und begann zu arbeiten.",
  },
  {
    kelime: "etwas implementieren: uygulamak",
    cümle: "Die neue Software wurde erfolgreich implementiert.",
  },
  {
    kelime: "jemanden betreffen: etkilemek",
    cümle: "Die Entscheidung betrifft uns alle direkt.",
  },
  {
    kelime: "stecken: yatırım yapmak",
    cümle: "Er steckte viel Energie in das Projekt.",
  },
  {
    kelime: "die Herangehensweise: yaklaşım",
    cümle: "Ihre Herangehensweise an das Problem war kreativ.",
  },
  {
    kelime: "scharfsinnig: keskin zekalı",
    cümle: "Seine scharfsinnigen Bemerkungen überraschten alle.",
  },
  {
    kelime: "jemandem liegt etwas an etwas: önem vermek",
    cümle: "Ihr liegt viel an Umweltschutz.",
  },
  {
    kelime: "etwas bewegen: değiştirmek",
    cümle: "Wir wollen die Welt zum Besseren bewegen.",
  },
  {
    kelime: "jemanden vorführen: birini yetkili birine götürmek",
    cümle: "Der Gefangene wurde dem Richter vorgeführt.",
  },
  {
    kelime: "der Stoß: yığın / istif",
    cümle: "Auf dem Tisch lag ein Stoß ungeöffneter Briefe.",
  },
  {
    kelime: "jemandem auf die Schliche kommen: birinin suçunu ortaya çıkarmak",
    cümle: "Die Ermittler kamen dem Betrug schnell auf die Schliche.",
  },
  {
    kelime: "vermeintlich: sözde / sanılan",
    cümle: "Der vermeintliche Zeuge entpuppte sich als Lügner.",
  },
  {
    kelime: "ausreichen: yeterli olmak",
    cümle: "Das Geld reicht gerade noch für die Miete aus.",
  },
  {
    kelime: "etwas/jemanden übersehen: fark etmemek",
    cümle: "Er übersah das Stoppschild und fuhr weiter.",
  },
  {
    kelime: "das Log: erişim bilgilerini içeren dosya",
    cümle: "Das Server-Log zeigte verdächtige Aktivitäten.",
  },
  {
    kelime: "das Vorgehen: yöntem / izlenen yol",
    cümle: "Sein rücksichtsloses Vorgehen schockierte alle.",
  },
  {
    kelime: "zusammenbrechen: çökmek / yıkılmak",
    cümle: "Nach dem Erdbeben brach das Gebäude zusammen.",
  },
  {
    kelime: "knallen: yüksek sesle çarpmak",
    cümle: "Die Tür knallte im Wind laut gegen den Rahmen.",
  },
  {
    kelime: "die Beweislast: suç kanıtı yükü",
    cümle: "Die Beweislast lag eindeutig bei der Anklage.",
  },
  {
    kelime: "erfrischend: yenileyici / canlandırıcı",
    cümle: "Seine erfrischende Direktheit war ungewöhnlich.",
  },
  {
    kelime: "die Führung: davranış / yönetim tarzı",
    cümle: "Ihre arrogante Führung verärgerte das Team.",
  },
  {
    kelime: "jemanden entlassen: serbest bırakmak (hapishaneden)",
    cümle: "Der Häftling wurde nach fünf Jahren entlassen.",
  },
  {
    kelime: "der Berater: danışman",
    cümle: "Der Berater analysierte die Geschäftsprozesse.",
  },
  {
    kelime: "jemanden fürchten: birinden korkmak",
    cümle: "Die Kinder fürchteten den strengen Lehrer.",
  },
  {
    kelime: "etwas bergen: içermek / barındırmak",
    cümle: "Das Gedicht barg eine tiefe philosophische Botschaft.",
  },
  {
    kelime: "sich etwas stellen: bir durumla yüzleşmek",
    cümle: "Er stellte sich mutig der Herausforderung.",
  },
  {
    kelime: "die Trümmer: enkaz / yıkıntı",
    cümle: "In den Trümmern des Hauses fand man Überlebende.",
  },
  {
    kelime: "scheitern: başarısız olmak",
    cümle: "Das Projekt scheiterte an mangelnder Finanzierung.",
  },
  {
    kelime: "zählen: önemli olmak",
    cümle: "In dieser Firma zählt nur Leistung.",
  },
];
export default Dizi;
