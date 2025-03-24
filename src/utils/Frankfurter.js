const dizi = [
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
    kelime: "sprachlos: şaşkın",
    cümle: "Die Nachricht ließ ihn sprachlos zurück.",
  },
  {
    kelime: "jemanden abstempeln: etiketlemek",
    cümle: "Man sollte niemanden vorschnell abstempeln.",
  },
  {
    kelime: "die Spannung: gerilim",
    cümle: "Die Spannung im Raum war greifbar.",
  },
  {
    kelime: "die Geste: jest",
    cümle: "Eine freundliche Geste kann Wunder wirken.",
  },
  {
    kelime: "außer Atem: nefes nefese",
    cümle: "Er kam außer Atem im Ziel an.",
  },
  {
    kelime: "die Augenbrauen hochziehen: kaş kaldırmak",
    cümle: "Sie zog die Augenbrauen hoch, als sie ihn sah.",
  },
  {
    kelime: "erstaunt: hayret etmiş",
    cümle: "Er war erstaunt über das Ergebnis.",
  },
  {
    kelime: "sich etwas reiben: ovmak",
    cümle: "Er rieb sich die müden Augen.",
  },
  {
    kelime: "sich profilieren: öne çıkmak",
    cümle: "Sie profilierte sich als Expertin in ihrem Feld.",
  },
  {
    kelime: "schmunzeln: gülümsemek",
    cümle: "Er schmunzelte über die lustige Bemerkung.",
  },
  {
    kelime: "der Angriff: saldırı",
    cümle: "Der Angriff wurde erfolgreich abgewehrt.",
  },
  {
    kelime: "geschickt: becerikli",
    cümle: "Sie handelte geschickt in der schwierigen Situation.",
  },
  {
    kelime: "etwas abwehren: savuşturmak",
    cümle: "Die Armee konnte den Feind abwehren.",
  },
  {
    kelime: "bestehen: var olmak",
    cümle: "Die Gefahr besteht weiterhin.",
  },
  {
    kelime: "etwas umleiten: yönlendirmek",
    cümle: "Der Verkehr wurde wegen Bauarbeiten umgeleitet.",
  },
  {
    kelime: "etwas beheben: çözmek",
    cümle: "Der Techniker hat das Problem schnell behoben.",
  },
  {
    kelime: "inwiefern: hangi açıdan",
    cümle: "Inwiefern betrifft das uns?",
  },
  {
    kelime: "auf etwas kommen: fikir edinmek",
    cümle: "Wie bist du auf diese Idee gekommen?",
  },
  {
    kelime: "die Richtlinie: yönerge",
    cümle: "Die neuen Richtlinien wurden heute bekannt gegeben.",
  },
  {
    kelime: "an Bord: dahil",
    cümle: "Wir sind froh, dich an Bord zu haben.",
  },
  {
    kelime: "ausführlich: detaylı",
    cümle: "Er gab eine ausführliche Erklärung.",
  },
  {
    kelime: "das Muster: şablon",
    cümle: "Das Muster des Stoffes gefällt mir.",
  },
  {
    kelime: "jemandem etwas zur Verfügung stellen: sağlamak",
    cümle: "Die Firma stellt uns die benötigten Geräte zur Verfügung.",
  },
  {
    kelime: "etwas ansetzen: planlamak",
    cümle: "Wir setzen das Meeting für nächste Woche an.",
  },
  {
    kelime: "den Stier bei den Hörnern packen: cesaretle hareket etmek",
    cümle: "Er packte den Stier bei den Hörnern und löste das Problem.",
  },
  {
    kelime: "sich amüsieren: eğlenmek",
    cümle: "Die Gäste amüsierten sich köstlich.",
  },
  {
    kelime: "das Verfahren: yöntem",
    cümle: "Dieses Verfahren ist sehr effizient.",
  },
  {
    kelime: "etwas erläutern: açıklamak",
    cümle: "Der Lehrer erläuterte die Aufgabe Schritt für Schritt.",
  },
  {
    kelime: "der Anbruch: başlangıç",
    cümle: "Der Anbruch des Tages war atemberaubend.",
  },
  {
    kelime: "der Anblick: görüntü",
    cümle: "Der Anblick der Berge ließ sie staunen.",
  },
  {
    kelime: "eine (große) Hausnummer: etkileyici",
    cümle: "Das ist aber eine Hausnummer von einem Projekt!",
  },
  {
    kelime: "die Hand zur Faust ballen: yumruk yapmak",
    cümle: "Er ballte die Hand zur Faust aus Wut.",
  },
  {
    kelime: "Das ist der Hammer!: Bu harika!",
    cümle: "Dein Erfolg ist echt der Hammer!",
  },
  {
    kelime: "sich umarmen: sarılmak",
    cümle: "Sie umarmten sich herzlich zum Abschied.",
  },
  {
    kelime: "es weit bringen: başarılı olmak",
    cümle: "Mit Fleiß kann man es weit bringen.",
  },
  {
    kelime: "es dreht sich alles um: odak noktası olmak",
    cümle: "In diesem Buch dreht sich alles um Liebe.",
  },
  {
    kelime: "die Stirn runzeln: kaş çatmak",
    cümle: "Sie runzelte die Stirn über der komplizierten Aufgabe.",
  },
  {
    kelime: "etwas ausstoßen: salmak",
    cümle: "Das Auto stößt zu viele Schadstoffe aus.",
  },
  {
    kelime: "verswinden: kaybolmak",
    cümle: "Der Dieb verschwand in der Menschenmenge.",
  },
  {
    kelime: "edel überweisen: para transfer etmek",
    cümle: "Er überwies den Betrag edel auf mein Konto.",
  },
  {
    kelime: "etwas abbeißen: ısırmak",
    cümle: "Sie biss ein Stück vom Apfel ab.",
  },
  {
    kelime: "die Kohle: para (argo)",
    cümle: "Dafür brauchen wir jede Menge Kohle.",
  },
  {
    kelime: "etwas gewährleisten: garanti etmek",
    cümle: "Wir gewährleisten eine schnelle Lieferung.",
  },
  {
    kelime: "einwandfrei: kusursuz",
    cümle: "Die Maschine funktioniert einwandfrei.",
  },
  {
    kelime: "leidenschaftlich: tutkulu",
    cümle: "Er spielte leidenschaftlich Klavier.",
  },
  {
    kelime: "der Elan: coşku, dinamizm",
    cümle: "Sein Elan war ansteckend und motivierte das ganze Team.",
  },
  {
    kelime: "fortschreiten: ilerlemek",
    cümle: "Die Verhandlungen sind gut fortgeschritten.",
  },
  {
    kelime: "der Tatendrang: eylem arzusu",
    cümle: "Mit großem Tatendrang begann er das neue Projekt.",
  },
  {
    kelime: "im stillen Kämmerlein: gözlerden uzak",
    cümle: "Sie entwickelte ihre Ideen im stillen Kämmerlein.",
  },
  {
    kelime: "stetig: sürekli",
    cümle: "Die Bevölkerung wächst stetig.",
  },
  {
    kelime: "jemanden erfüllen: tatmin etmek",
    cümle: "Diese Aufgabe erfüllt ihn voll und ganz.",
  },
  {
    kelime: "die Sicherheitslücke: güvenlik açığı",
    cümle: "Die Sicherheitslücke wurde umgehend geschlossen.",
  },
  {
    kelime: "etwas ausmerzen: ortadan kaldırmak",
    cümle: "Fehler müssen systematisch ausgemerzt werden.",
  },
  {
    kelime: "das Tagesgeschäft: günlük işler",
    cümle: "Das Tagesgeschäft lässt wenig Zeit für Kreativität.",
  },
  {
    kelime: "eng: yakın",
    cümle: "Sie pflegen eine enge Zusammenarbeit.",
  },
  {
    kelime: "bedeutend: önemli",
    cümle: "Das war ein bedeutender Schritt für die Forschung.",
  },
  {
    kelime: "in den Hintergrund geraten: arka plana düşmek",
    cümle: "Seine Ideen sind leider in den Hintergrund geraten.",
  },
  {
    kelime: "der Drittanbieter: üçüncü taraf",
    cümle: "Drittanbieter bieten oft günstigere Lösungen an.",
  },
  {
    kelime: "die Bedürfnisse: ihtiyaçlar",
    cümle: "Die Bedürfnisse der Mitarbeiter werden priorisiert.",
  },
  {
    kelime: "angeschnitten: kısaca değinmek",
    cümle: "Das Thema wurde nur kurz angeschnitten.",
  },
  {
    kelime: "losschlagen: konuşmaya başlamak",
    cümle: "Er schlug mit einer kritischen Frage los.",
  },
  {
    kelime: "etwas kreieren: yaratmak",
    cümle: "Sie kreierte ein einzigartiges Design.",
  },
  {
    kelime: "anhand: yardımıyla",
    cümle: "Anhand der Daten analysierten wir das Problem.",
  },
  {
    kelime: "der Fahrplan: zaman çizelgesi",
    cümle: "Der Fahrplan für das Event steht fest.",
  },
  {
    kelime: "jemandem etwas zuteilen: paylaştırmak",
    cümle: "Die Aufgaben wurden fair zugeteilt.",
  },
  {
    kelime: "scherzen: şaka yapmak",
    cümle: "Sie scherzten über die alte Zeit.",
  },
  {
    kelime: "jemanden retten: kurtarmak",
    cümle: "Die Feuerwehr rettete die eingeschlossenen Personen.",
  },
  {
    kelime: "die Stellung halten: pozisyonu korumak",
    cümle: "Die Soldaten hielten trotz Angriffen ihre Stellung.",
  },
  {
    kelime: "die Schwachstelle: zayıf nokta",
    cümle: "Die Schwachstelle im System wurde behoben.",
  },
  {
    kelime: "etwas fälschen: sahtecilik yapmak",
    cümle: "Er versuchte, die Dokumente zu fälschen.",
  },
  {
    kelime: "genüsslich: keyifle",
    cümle: "Sie aß genüsslich das Dessert.",
  },
  {
    kelime: "stutzig: şüpheli",
    cümle: "Sein Verhalten machte mich stutzig.",
  },
  {
    kelime: "abrupt: ani",
    cümle: "Das Gespräch endete abrupt.",
  },
  {
    kelime: "Spiel mit dem Feuer: risk almak",
    cümle: "Das ist ein gefährliches Spiel mit dem Feuer.",
  },
  {
    kelime: "jemandem etwas stehlen: çalmak",
    cümle: "Er stahl heimlich das Portemonnaie.",
  },
  {
    kelime: "jemanden belächeln: küçümsemek",
    cümle: "Sie belächelte seine naiven Vorstellungen.",
  },
  {
    kelime: "den Verstand verlieren: aklını kaybetmek",
    cümle: "Nach dem Schock schien er den Verstand zu verlieren.",
  },
  {
    kelime: "jemanden berauben: soymak",
    cümle: "Die Diebe beraubten den alten Mann.",
  },
  {
    kelime: "etwas fassen: inanmak",
    cümle: "Sie konnte es kaum fassen, dass sie gewonnen hatte.",
  },
  {
    kelime: "jemanden beschwichtigen: yatıştırmak",
    cümle: "Er versuchte, die wütende Kundin zu beschwichtigen.",
  },
  {
    kelime: "mit den Augen rollen: gözlerini devirmek",
    cümle: "Sie rollte mit den Augen über seine alberne Bemerkung.",
  },
  {
    kelime: "wütend: öfkeli",
    cümle: "Er war wütend über die ungerechte Behandlung.",
  },
  {
    kelime: "etwas umgehen: kaçınmak",
    cümle: "Sie umging geschickt die unangenehme Frage.",
  },
  {
    kelime: "auffliegen: ortaya çıkmak",
    cümle: "Der Betrug flog nach wenigen Tagen auf.",
  },
  {
    kelime: "vehement: şiddetli",
    cümle: "Er verteidigte seine Meinung vehement.",
  },
  {
    kelime: "verführerisch: baştan çıkarıcı",
    cümle: "Das Dessert sah verführerisch aus.",
  },
  {
    kelime: "schweigend: sessizce",
    cümle: "Sie sahen schweigend dem Sonnenuntergang zu.",
  },
  {
    kelime: "fassungslos: şaşkın",
    cümle: "Er stand fassungslos vor den Trümmern.",
  },
  {
    kelime: "ständig: sürekli",
    cümle: "Das Kind fragte ständig nach Süßigkeiten.",
  },
  {
    kelime: "das Kaff: ücra köy",
    cümle: "Er wuchs in einem kleinen Kaff auf.",
  },
  {
    kelime: "ehrenhaft: onurlu",
    cümle: "Seine ehrenhafte Haltung beeindruckte alle.",
  },
  {
    kelime: "der Knast: hapishane (argo)",
    cümle: "Er saß fünf Jahre im Knast.",
  },
  {
    kelime: "verstummen: sessizleşmek",
    cümle: "Die Musik verstummte plötzlich.",
  },
  {
    kelime: "steinreich: çok zengin",
    cümle: "Seine Familie ist steinreich.",
  },
  {
    kelime: "jemanden unterbrechen: sözünü kesmek",
    cümle: "Er unterbrach sie unhöflich mitten im Satz.",
  },
  {
    kelime: "die Spinnerei: saçmalık",
    cümle: "Das ist doch reine Spinnerei!",
  },
  {
    kelime: "der Verbrecher: suçlu",
    cümle: "Der Verbrecher wurde festgenommen.",
  },
  {
    kelime: "schweigen: susmak",
    cümle: "Sie schwieg aus Angst.",
  },
  {
    kelime: "schnappen: nefes almak",
    cümle: "Er schnappte nach Luft.",
  },
  {
    kelime: "jemandem etwas beibringen: öğretmek",
    cümle: "Sie brachte ihm das Schwimmen bei.",
  },
  {
    kelime: "ehrenwert: saygın",
    cümle: "Er ist ein ehrenwerter Bürger.",
  },
  {
    kelime: "etwas lässt jemanden nicht los: takıntı yapmak",
    cümle: "Der Gedanke ließ ihn nicht los.",
  },
  {
    kelime: "der Reiz: cazibe",
    cümle: "Der Reiz der Unbekannten lockte ihn.",
  },
  {
    kelime: "die Versuchung: ayartma",
    cümle: "Der Schokoladenkuchen war eine große Versuchung.",
  },
  {
    kelime: "sich hin und her wälzen: dönüp durmak",
    cümle: "Er wälzte sich hin und her, konnte nicht schlafen.",
  },
  {
    kelime: "die Machenschaft: entrika",
    cümle: "Die Machenschaften der Firma wurden aufgedeckt.",
  },
  {
    kelime: "jemanden/etwas treiben: yönlendirmek",
    cümle: "Die Neugier trieb ihn an.",
  },
  {
    kelime: "imstande sein: muktedir olmak",
    cümle: "Sie war imstande, das Problem zu lösen.",
  },
  {
    kelime: "ansatzweise: kısmen",
    cümle: "Er verstand die Theorie nur ansatzweise.",
  },
  {
    kelime: "etwas abschütteln: bir şeyden kurtulmak",
    cümle: "Er schüttelte die negativen Gedanken ab und machte weiter.",
  },
  {
    kelime: "ein Leben in Saus und Braus führen: şatafatlı yaşamak",
    cümle: "Nach dem Lottogewinn führte er ein Leben in Saus und Braus.",
  },
  {
    kelime: "abstrus: saçma, tuhaf",
    cümle: "Seine abstrusen Theorien verwirrten alle.",
  },
  {
    kelime: "jemandem die Nerven rauben: sinir etmek",
    cümle: "Das laute Geräusch raubte mir die Nerven.",
  },
  {
    kelime: "hausseigen: şirkete özgü",
    cümle: "Die hauseigenen Richtlinien sind streng.",
  },
  {
    kelime: "die Federführung: sorumluluk",
    cümle: "Sie übernahm die Federführung für das Projekt.",
  },
  {
    kelime: "uneingeschränkt: sınırsız",
    cümle: "Er genoss ihr uneingeschränktes Vertrauen.",
  },
  {
    kelime: "die Finger von etwas lassen: uzak durmak",
    cümle: "Lass die Finger von dieser gefährlichen Maschine!",
  },
  {
    kelime: "in Schwierigkeiten geraten: zor duruma düşmek",
    cümle: "Ohne Plan geriet er in Schwierigkeiten.",
  },
  {
    kelime: "ehrlich währt am längsten: dürüstlük en iyi politikadır",
    cümle: "Denk dran: Ehrlich währt am längsten.",
  },
  {
    kelime: "grübeln: kafa yormak",
    cümle: "Sie grübelte stundenlang über die Entscheidung.",
  },
  {
    kelime: "zehnstellig: on basamaklı",
    cümle: "Die Summe war zehnstellig und kaum vorstellbar.",
  },
  {
    kelime: "unerlässlich: vazgeçilmez",
    cümle: "Teamwork ist für den Erfolg unerlässlich.",
  },
  {
    kelime: "etwas verhindern: engel olmak",
    cümle: "Wir müssen den Unfall verhindern.",
  },
  {
    kelime: "zunehmend: giderek artan",
    cümle: "Die Probleme wurden zunehmend größer.",
  },
  {
    kelime: "etwas einstufen: sınıflandırmak",
    cümle: "Die Behörde stufte den Vorfall als schwerwiegend ein.",
  },
  {
    kelime: "Alarm schlagen: alarm vermek",
    cümle: "Die Anwohner schlugen Alarm bei dem Brand.",
  },
  {
    kelime: "jemandem brummt der Kopf: baş ağrımak",
    cümle: "Nach der Prüfung brummte ihm der Kopf.",
  },
  {
    kelime: "unberechenbar: öngörülemez",
    cümle: "Sein Verhalten war völlig unberechenbar.",
  },
  {
    kelime: "merkwürdig: tuhaf",
    cümle: "Das merkwürdige Geräusch ließ ihn aufhorchen.",
  },
  {
    kelime: "schlapp: bitkin",
    cümle: "Nach dem Marathon fühlte er sich schlapp.",
  },
  {
    kelime: "versagen: başarısız olmak",
    cümle: "Die Technik versagte im kritischen Moment.",
  },
  {
    kelime: "jemanden ausschalten: etkisiz hale getirmek",
    cümle: "Der Gegner wurde strategisch ausgeschaltet.",
  },
  {
    kelime: "spöttisch: alaycı",
    cümle: "Er warf ihr einen spöttischen Blick zu.",
  },
  {
    kelime: "der Spinner: sapkın",
    cümle: "Alle hielten ihn für einen Spinner.",
  },
  {
    kelime: "jemanden beklauen: çalmak",
    cümle: "Er beklaut seine eigenen Kollegen.",
  },
  {
    kelime: "sich krümmen: kıvrılmak",
    cümle: "Vor Schmerz krümmte er sich auf dem Boden.",
  },
  {
    kelime: "die Wiedergutmachung: tazminat",
    cümle: "Die Wiedergutmachung wurde sofort gezahlt.",
  },
  {
    kelime: "die Schnapsidee: çılgın fikir",
    cümle: "Das war mal wieder eine typische Schnapsidee!",
  },
  {
    kelime: "der Kundgang: müşteri turu",
    cümle: "Der Chef machte einen Kundgang durch die Filiale.",
  },
  {
    kelime: "strahlen: parlamak",
    cümle: "Sie strahlte vor Glück, als sie die Nachricht hörte.",
  },
  {
    kelime: "gegen etwas hämmern: bir şeye vurmak",
    cümle: "Er hämmerte wütend gegen die Tür.",
  },
  {
    kelime: "brüllen: bağırmak",
    cümle: "Der Trainer brüllte Anweisungen vom Spielfeldrand.",
  },
  {
    kelime: "etwas aufreißen: bir şeyi hızla açmak",
    cümle: "Sie riss das Fenster auf, um frische Luft hereinzulassen.",
  },
  {
    kelime: "stapfen: ağır adımlarla yürümek",
    cümle: "Er stapfte durch den tiefen Schnee.",
  },
  {
    kelime: "herausgeputzt: şık giyinmiş",
    cümle: "Sie war herausgeputzt zur Gala erschienen.",
  },
  {
    kelime: "edel: zarif",
    cümle: "Das edle Design des Gebäudes beeindruckte alle.",
  },
  {
    kelime: "die Säule: sütun",
    cümle: "Die alten Säulen des Tempels sind noch erhalten.",
  },
  {
    kelime: "die Kuppel: kubbe",
    cümle: "Die Kuppel der Kathedrale war atemberaubend.",
  },
  {
    kelime: "der Ziegel: tuğla",
    cümle: "Die Mauer wurde aus roten Ziegeln gebaut.",
  },
  {
    kelime: "prachtvoll: görkemli",
    cümle: "Der Palast war prachtvoll dekoriert.",
  },
  {
    kelime: "jemanden aufhalten: durdurmak",
    cümle: "Die Polizei hielt den Verdächtigen auf.",
  },
  {
    kelime: "jemanden im Schlepptau haben: yanında getirmek",
    cümle: "Er kam mit einem ganzen Team im Schlepptau.",
  },
  {
    kelime: "mit etwas handeln: ticaret yapmak",
    cümle: "Sie handelte erfolgreich mit Antiquitäten.",
  },
  {
    kelime: "startbereit: hazır",
    cümle: "Das Flugzeug war startbereit.",
  },
  {
    kelime: "das Foyer: giriş holü",
    cümle: "Im Foyer warteten die Gäste geduldig.",
  },
  {
    kelime: "das Derivat: türev ürün",
    cümle: "Derivate sind komplexe Finanzinstrumente.",
  },
  {
    kelime: "die Anzeigetafel: bilgi panosu",
    cümle: "Die Abfahrtszeiten standen auf der Anzeigetafel.",
  },
  {
    kelime: "jemandem den Atem rauben: nefes kesmek",
    cümle: "Die Aussicht raubte ihm den Atem.",
  },
  {
    kelime: "hin und weg sein: hayran kalmak",
    cümle: "Sie war hin und weg von dem Konzert.",
  },
  {
    kelime: "der Referent: konuşmacı",
    cümle: "Der Referent hielt einen spannenden Vortrag.",
  },
  {
    kelime: "der Aktionär: hissedar",
    cümle: "Die Aktionäre stimmten über den Vorschlag ab.",
  },
  {
    kelime: "der Ertrag: kazanç",
    cümle: "Die Erträge des Unternehmens stiegen dieses Jahr.",
  },
  {
    kelime: "exorbitant: aşırı",
    cümle: "Die Mieten in der Stadt sind exorbitant hoch.",
  },
  {
    kelime: "jemandem zu schaffen machen: sorun çıkarmak",
    cümle: "Die Hitze machte den Arbeitern zu schaffen.",
  },
  {
    kelime: "beben: sallanmak",
    cümle: "Die Erde bebte während des Erdbebens.",
  },
  {
    kelime: "das A und O sein: en önemli şey olmak",
    cümle: "Vertrauen ist das A und O in einer Beziehung.",
  },
  {
    kelime: "jemanden anstupsen: dürtmek",
    cümle: "Sie stupste ihn an, um ihn aufmerksam zu machen.",
  },
  {
    kelime: "überschwänglich: coşkulu",
    cümle: "Seine überschwängliche Art begeisterte alle.",
  },
  {
    kelime: "etwas hinzufügen: eklemek",
    cümle: "Er fügte dem Bericht noch einige Details hinzu.",
  },
  {
    kelime: "schalkisch: şakacı, esprili",
    cümle: "Sein schalkisches Lächeln lockerte die Stimmung auf.",
  },
  {
    kelime: "der Zug: adım, yöntem",
    cümle: "Dieser strategische Zug brachte uns den Sieg.",
  },
  {
    kelime: "nett: iyi, büyük",
    cümle: "Das ist eine nette Summe für den guten Zweck.",
  },
  {
    kelime: "das Portfolio: portföy",
    cümle: "Sein Portfolio umfasst internationale Aktien.",
  },
  {
    kelime: "mühsam ernährt sich das Eichhörnchen: küçük adımlarla ilerlemek",
    cümle: "Geduld! Mühsam ernährt sich das Eichhörnchen.",
  },
  {
    kelime: "im Kern: özünde",
    cümle: "Im Kern geht es um Vertrauensfragen.",
  },
  {
    kelime: "etwas erschaffen: yaratmak",
    cümle: "Künstler erschaffen oft Neues aus dem Nichts.",
  },
  {
    kelime: "etwas liegt jemandem am Herzen: önem vermek",
    cümle: "Umweltschutz liegt ihr sehr am Herzen.",
  },
  {
    kelime: "auf Nummer sicher gehen: risksiz hareket etmek",
    cümle: "Er ging auf Nummer sicher und überprüfte alles zweimal.",
  },
  {
    kelime: "jemanden abzocken: dolandırmak",
    cümle: "Der Betrüger versuchte, Touristen abzuzocken.",
  },
  {
    kelime: "etwas ergattern: ele geçirmek",
    cümle: "Sie ergatterte die letzten Karten für das Konzert.",
  },
  {
    kelime: "jemanden zur Rechenschaft ziehen: sorumlu tutmak",
    cümle: "Der Chef zog ihn für den Fehler zur Rechenschaft.",
  },
  {
    kelime: "die Gier: açgözlülük",
    cümle: "Seine Gier nach Macht kannte keine Grenzen.",
  },
  {
    kelime: "jemanden erwischen: yakalamak",
    cümle: "Die Polizei erwischte den Dieb auf frischer Tat.",
  },
  {
    kelime: "jemanden in etwas versetzen: duruma sokmak",
    cümle: "Die Nachricht versetzte sie in Panik.",
  },
  {
    kelime: "etwas/jemanden betrachten: incelemek",
    cümle: "Er betrachtete das Gemälde genau.",
  },
  {
    kelime: "eindringlich: etkileyici",
    cümle: "Sie gab ihm eindringliche Ratschläge.",
  },
  {
    kelime: "der Coup: başarılı operasyon",
    cümle: "Der gelungene Coup brachte ihm Ruhm.",
  },
  {
    kelime: "etwas landen: başarmak",
    cümle: "Er landete einen lukrativen Deal.",
  },
  {
    kelime: "etwas in den Sand setzen: başarısız olmak",
    cümle: "Das Projekt wurde leider in den Sand gesetzt.",
  },
  {
    kelime: "eigenartig: tuhaf",
    cümle: "Sein eigenartiges Verhalten irritierte alle.",
  },
  {
    kelime: "unbegreiflich: anlaşılmaz",
    cümle: "Seine Entscheidung war für uns unbegreiflich.",
  },
  {
    kelime: "einen Dachschaden haben: deli olmak",
    cümle: "Der Typ hat doch einen Dachschaden!",
  },
  {
    kelime: "verlockend: cazip",
    cümle: "Das Angebot klang verlockend.",
  },
  {
    kelime: "das Wesentliche: en önemli şey",
    cümle: "Konzentrieren wir uns auf das Wesentliche.",
  },
  {
    kelime: "kontern: karşılık vermek",
    cümle: "Er konterte schlagfertig ihre Kritik.",
  },
  {
    kelime: "etwas aushalten: katlanmak",
    cümle: "Sie konnte den Lärm kaum aushalten.",
  },
  {
    kelime: "geschweige denn: hele",
    cümle: "Er kann nicht mal laufen, geschweige denn rennen.",
  },
  {
    kelime: "weiterbohren: ısrarla sormak",
    cümle: "Der Reporter bohrte weiter nach Details.",
  },
  {
    kelime:
      "die Hände über dem Kopf zusammenschlagen: şaşkınlıkla elleri başa vurmak",
    cümle:
      "Sie schlug die Hände über dem Kopf zusammen, als sie den Schaden sah.",
  },
  {
    kelime: "die Absicht: niyet, amaç",
    cümle: "Seine Absicht war es, alles friedlich zu klären.",
  },
  {
    kelime: "etwas/jemanden durchschauen: iç yüzünü anlamak",
    cümle: "Er durchschaute ihren Plan sofort.",
  },
  {
    kelime: "der Seufzer: iç çekiş",
    cümle: "Ein tiefer Seufzer entwich ihren Lippen.",
  },
  {
    kelime: "jemanden pieksen: dürterek rahatsız etmek",
    cümle: "Sie piekste ihn spielerisch mit dem Finger.",
  },
  {
    kelime: "von mir aus: bana göre",
    cümle: "Von mir aus können wir früher gehen.",
  },
  {
    kelime: "den Mund halten: sessiz kalmak",
    cümle: "Er hielt den Mund, um keinen Ärger zu provozieren.",
  },
  {
    kelime: "sich gegen etwas sträuben: direnmek",
    cümle: "Das Kind sträubte sich gegen die Impfung.",
  },
  {
    kelime: "etwas durchforsten: detaylı araştırmak",
    cümle: "Sie durchforstete das Archiv nach Beweisen.",
  },
  {
    kelime: "fließen: akmak",
    cümle: "Die Tränen flossen unkontrolliert.",
  },
  {
    kelime: "auf etwas stoßen: rastlantıyla bulmak",
    cümle: "Wir stießen auf eine geheime Tür.",
  },
  {
    kelime: "zigtausende: on binlerce",
    cümle: "Zigtausende Menschen demonstrierten friedlich.",
  },
  {
    kelime: "vor sich hinmurren: mırıldanmak",
    cümle: "Er murmelte vor sich hin, während er arbeitete.",
  },
  {
    kelime: "etwas durchgehen: dikkatle incelemek",
    cümle: "Die Polizei ging jeden Verdacht sorgfältig durch.",
  },
  {
    kelime: "etwas unterliegen: tabi olmak",
    cümle: "Die Entscheidung unterliegt strengen Regeln.",
  },
  {
    kelime: "die Unregelmäßigkeit: düzensizlik",
    cümle: "Die Unregelmäßigkeit im Bericht fiel sofort auf.",
  },
  {
    kelime: "auftreten: ortaya çıkmak",
    cümle: "Das Problem trat plötzlich auf.",
  },
  {
    kelime: "etwas verzögern: geciktirmek",
    cümle: "Der Sturm verzögerte den Flug.",
  },
  {
    kelime: "schlagen (Kalp): çarpmak",
    cümle: "Sein Herz schlug schneller vor Aufregung.",
  },
  {
    kelime: "vorhergesehen: öngörülmüş",
    cümle: "Die Krise war nicht vorhergesehen worden.",
  },
  {
    kelime: "zwei Herzen schlagen in jemandes Brust: ikilem yaşamak",
    cümle: "In ihm schlugen zwei Herzen – Karriere oder Familie?",
  },
  {
    kelime: "etwas/jemanden austricksen: kandırmak",
    cümle: "Sie trickste das System geschickt aus.",
  },
  {
    kelime: "ungebrochen: sarsılmaz",
    cümle: "Seine Motivation blieb ungebrochen.",
  },
  {
    kelime: "der Schreck: şok",
    cümle: "Der Schreck saß ihr tief in den Gliedern.",
  },
  {
    kelime: "die Kreide: tebeşir",
    cümle: "Der Lehrer schrieb mit Kreide an die Tafel.",
  },
  {
    kelime: "zucken: seğirmek",
    cümle: "Sein Augenlid zuckte nervös.",
  },
  {
    kelime: "der Gipfel: zirve",
    cümle: "Der Gipfel des Berges war in Wolken gehüllt.",
  },
  {
    kelime: "der Fortschritt: ilerleme",
    cümle: "Die technischen Fortschritte sind beeindruckend.",
  },
  {
    kelime: "jemandem fällt ein Stein vom Herzen: rahatlamak",
    cümle: "Als sie die gute Nachricht hörte, fiel ihr ein Stein vom Herzen.",
  },
  {
    kelime: "wackelig: sallantılı",
    cümle: "Der Tisch stand auf wackeligen Beinen.",
  },
  {
    kelime: "sich erschrecken: ürkmek",
    cümle: "Sie erschrak vor dem lauten Knall.",
  },
  {
    kelime: "sich fernhalten: uzak durmak",
    cümle: "Er hält sich von negativen Menschen fern.",
  },
  {
    kelime: "die Peanuts: önemsiz miktar",
    cümle: "Für ihn sind 100 Euro nur Peanuts.",
  },
  {
    kelime: "sichtlich: belirgin şekilde",
    cümle: "Sie war sichtlich erleichtert.",
  },
  {
    kelime: "abschalten: rahatlamak",
    cümle: "Nach der Arbeit schaltete er beim Sport ab.",
  },
  {
    kelime: "verwundert: şaşkın",
    cümle: "Er sah sie verwundert an.",
  },
  {
    kelime: "etwas abtun: önemsememek",
    cümle: "Sie tat seine Kritik als unwichtig ab.",
  },
  {
    kelime: "mulmig: huzursuz",
    cümle: "Ihm wurde mulmig, als er die Nachricht hörte.",
  },
  {
    kelime: "sich entschließen: karar vermek",
    cümle: "Sie entschloss sich, das Angebot anzunehmen.",
  },
  {
    kelime: "jemandem fällt etwas schwer: zor gelmek",
    cümle: "Ihm fällt es schwer, Fremdsprachen zu lernen.",
  },
  {
    kelime: "mit Argusaugen: dikkatle",
    cümle: "Der Chef beobachtete das Team mit Argusaugen.",
  },
  {
    kelime: "in Einklang mit: uyum içinde",
    cümle: "Seine Handlungen stehen im Einklang mit den Werten.",
  },
  {
    kelime: "etwas überziehen: kaplamak",
    cümle: "Der Nebel überzog die Stadt.",
  },
  {
    kelime: "höchst: son derece",
    cümle: "Das war höchst unprofessionell!",
  },
  {
    kelime: "einen großen Fisch an der Angel haben: büyük kazanç ummak",
    cümle: "Mit diesem Deal hat er einen dicken Fisch an der Angel.",
  },
  {
    kelime: "etwas durchmachen: deneyimlemek",
    cümle: "Sie hat eine schwere Zeit durchgemacht.",
  },
  {
    kelime: "in etwas eindringen: izinsiz girmek",
    cümle: "Hacker drangen in das System ein.",
  },
  {
    kelime: "jemandem rutscht das Herz in die Hose: korkmak",
    cümle: "Als die Polizei kam, rutschte ihm das Herz in die Hose.",
  },
  {
    kelime: "etwas durchstehen: dayanmak",
    cümle: "Gemeinsam stehen wir jede Krise durch.",
  },
  {
    kelime: "nicht hochzisasten: pes etmemek",
    cümle: "Trotz Rückschlägen zisaste er nicht hoch.",
  },
  {
    kelime: "sich über etwas im Klaren sein: farkında olmak",
    cümle: "Sie war sich der Gefahr vollkommen im Klaren.",
  },
  {
    kelime: "zynisch: alaycı",
    cümle: "Sein zynischer Kommentar traf sie tief.",
  },
  {
    kelime: "das Offshore-Konto: offshore hesap",
    cümle: "Er eröffnete ein Offshore-Konto in der Karibik.",
  },
  {
    kelime: "nachvollziehbar: anlaşılır",
    cümle: "Seine Enttäuschung ist nachvollziehbar.",
  },
  {
    kelime: "sich an etwas fassen: dokunmak",
    cümle: "Sie fasste sich an die Stirn und seufzte.",
  },
  {
    kelime: "herrschen: hâkim olmak",
    cümle: "Im Saal herrschte absolute Stille.",
  },
  {
    kelime: "das Bankgeheimnis: banka sırrı",
    cümle: "Das Bankgeheimnis schützt die Privatsphäre der Kunden.",
  },
  {
    kelime: "untertauchen: gizlenmek",
    cümle: "Der Verbrecher tauchte monatelang unter.",
  },
  {
    kelime: "zögern: tereddüt etmek",
    cümle: "Er zögerte einen Moment, bevor er antwortete.",
  },
  {
    kelime: "nachhallen: yankılanmak",
    cümle: "Seine Worte hallten noch lange im Raum nach.",
  },
  {
    kelime: "jemanden überlisten: kandırmak",
    cümle: "Sie überlistete den Wächter geschickt.",
  },
  {
    kelime: "jemandem etwas anhaben können: zarar verebilmek",
    cümle: "Du kannst mir nichts anhaben!",
  },
  {
    kelime: "benommen: sersemlemiş",
    cümle: "Nach dem Unfall fühlte er sich benommen.",
  },
  {
    kelime: "jemanden in seinen Bann ziehen: büyülemek",
    cümle: "Der Redner zog alle in seinen Bann.",
  },
  {
    kelime: "jemanden fesseln: ilgisini çekmek",
    cümle: "Die Geschichte fesselte die Zuhörer.",
  },
  {
    kelime: "sich von etwas lösen: kurtulmak",
    cümle: "Er löste sich langsam von der Vergangenheit.",
  },
  {
    kelime: "sich zusammenreißen: kendini toplamak",
    cümle: "Sie riss sich zusammen und weinte nicht.",
  },
  {
    kelime: "der Verdacht: şüphe",
    cümle: "Der Verdacht fiel sofort auf ihn.",
  },
  {
    kelime: "erregen: uyandırmak",
    cümle: "Seine Worte erregten Aufsehen.",
  },
  {
    kelime: "verweilen: kalmak",
    cümle: "Sie verweilten noch eine Weile im Park.",
  },
  {
    kelime: "regungslos: hareketsiz",
    cümle: "Er stand regungslos vor dem Spiegel.",
  },
  {
    kelime: "Vertrauen in etwas legen: güvenmek",
    cümle: "Sie legte großes Vertrauen in seine Fähigkeiten.",
  },
  {
    kelime: "das Kinderspiel: çocuk oyuncağı",
    cümle: "Für ihn war die Aufgabe ein Kinderspiel.",
  },
  {
    kelime: "sich etwas einfallen lassen: akıl etmek",
    cümle: "Er ließ sich eine clevere Lösung einfallen.",
  },
  {
    kelime: "ausgeklügelt: kurnazca",
    cümle: "Der Plan war ausgeklügelt und effektiv.",
  },
  {
    kelime: "etwas nachverfolgen: izlemek",
    cümle: "Die Polizei verfolgte die Spur nach.",
  },
  {
    kelime: "beten: dua etmek",
    cümle: "Sie betete für seine Genesung.",
  },
  {
    kelime: "das Schicksal: kader",
    cümle: "Das Schicksal führte sie zusammen.",
  },
  {
    kelime: "etwas besiegeln: sonuçlandırmak",
    cümle: "Der Vertrag besiegelte die Zusammenarbeit.",
  },
  {
    kelime: "erfolgen: gerçekleşmek",
    cümle: "Die Entscheidung erfolgte sofort.",
  },
  {
    kelime: "jemandem bleibt nichts übrig: başka seçenek kalmamak",
    cümle: "Ihm blieb nichts anderes übrig, als zuzustimmen.",
  },
  {
    kelime: "etwas herunterfahren: kapatmak",
    cümle: "Sie fuhr den Computer herunter.",
  },
  {
    kelime: "sich in die Hose machen: korkmak",
    cümle: "Vor Prüfungen macht er sich immer in die Hose.",
  },
  {
    kelime: "der Adrenalinschub: adrenalin patlaması",
    cümle: "Der Adrenalinschub gab ihm plötzliche Energie.",
  },
  {
    kelime: "schmerztracks: anında",
    cümle: "Er reagierte schmerztracks auf die Beleidigung.",
  },
  {
    kelime: "rasen: hızla gitmek",
    cümle: "Das Auto raste die Straße entlang.",
  },
  {
    kelime: "siehe da: işte",
    cümle: "Siehe da! Das war die Lösung.",
  },
  {
    kelime: "schleßen: hızla hareket etmek",
    cümle: "Er schoss aus dem Haus, als es klingelte.",
  },
  {
    kelime: "überwältigen: etkilemek",
    cümle: "Die Schönheit der Landschaft überwältigte sie.",
  },
  {
    kelime: "die Macht: güç",
    cümle: "Die Macht der Natur ist unbezwingbar.",
  },
  {
    kelime: "vorfallen: gerçekleşmek",
    cümle: "In der Sitzung fiel ein unangenehmes Thema vor.",
  },
  {
    kelime: "knapp: kısa",
    cümle: "Er antwortete knapp und präzise.",
  },
  {
    kelime: "die Füße stillhalten: beklemek",
    cümle: "In dieser Situation müssen wir die Füße stillhalten.",
  },
  {
    kelime: "sich gedulden: sabretmek",
    cümle: "Gedulden Sie sich bitte einen Moment.",
  },
  {
    kelime: "etwas zuschauen: izlemek",
    cümle: "Sie schaute dem Spiel gelassen zu.",
  },
  {
    kelime: "aus allen Wolken fallen: şaşırmak",
    cümle: "Als er die Nachricht hörte, fiel er aus allen Wolken.",
  },
  {
    kelime: "durchaus: oldukça",
    cümle: "Das ist durchaus möglich.",
  },
  {
    kelime: "mit etwas rechnen: hesaba katmak",
    cümle: "Man muss mit Verzögerungen rechnen.",
  },
  {
    kelime: "der Zaster: altın (argo)",
    cümle: "Er sammelte jeden Zaster, den er finden konnte.",
  },
  {
    kelime: "akribisch: titiz",
    cümle: "Die Arbeit wurde akribisch ausgeführt.",
  },
  {
    kelime: "etwas durchziehen: sonuna kadar götürmek",
    cümle: "Trotz Schwierigkeiten zog er das Projekt durch.",
  },
  {
    kelime: "etwas abzweigen: çalmak",
    cümle: "Er zweigte einen Teil des Geldes ab.",
  },
  {
    kelime: "sich rentieren: değmek",
    cümle: "Die Investition wird sich langfristig rentieren.",
  },
  {
    kelime: "necken: şakalaşmak",
    cümle: "Sie neckten sich gegenseitig während der Pause.",
  },
  {
    kelime: "nicht geheuer: huzursuz",
    cümle: "Ihm war die dunkle Gasse nicht geheuer.",
  },
  {
    kelime: "klauen: çalmak (argo)",
    cümle: "Er klaute heimlich Süßigkeiten aus dem Laden.",
  },
  {
    kelime: "der Haftbefehl: tutuklama emri",
    cümle: "Gegen ihn wurde ein Haftbefehl erlassen.",
  },
  {
    kelime: "teuflisch: şeytani",
    cümle: "Sein teuflisches Lachen verunsicherte alle.",
  },
  {
    kelime: "verschmitzt: kurnaz",
    cümle: "Er lächelte verschmitzt und sagte nichts.",
  },
  {
    kelime: "grandios: muhteşem",
    cümle: "Die Aufführung war einfach grandios!",
  },
  {
    kelime: "verharren: hareketsiz kalmak",
    cümle: "Sie verharrten regungslos in der Ecke.",
  },
  {
    kelime: "raus mit der Sprache: çabuk söyle!",
    cümle: "Raus mit der Sprache! Was ist passiert?",
  },
  {
    kelime: "der Ermittler: dedektif",
    cümle: "Der Ermittler befragte alle Zeugen.",
  },
  {
    kelime: "jemandem auf die Spur kommen: izini bulmak",
    cümle: "Die Polizei kam dem Täter schnell auf die Spur.",
  },
  {
    kelime: "unsichtbar: görünmez",
    cümle: "Der Dieb bewegte sich fast unsichtbar.",
  },
  {
    kelime: "sich in Luft auflösen: yok olmak",
    cümle: "Der Verdächtige schien sich in Luft aufgelöst zu haben.",
  },
  {
    kelime: "der Umweg: dolaylı yol",
    cümle: "Wir nahmen einen Umweg, um den Stau zu vermeiden.",
  },
  {
    kelime: "der Schlüssel: şifre",
    cümle: "Der Schlüssel zum Erfolg ist harte Arbeit.",
  },
  {
    kelime: "alles auf ein Pferd setzen: risk almak",
    cümle: "Er setzte alles auf ein Pferd und verlor.",
  },
  {
    kelime: "undurchsichtig: şüpheli",
    cümle: "Die Machenschaften waren undurchsichtig.",
  },
  {
    kelime: "etwas versuchen: denemek",
    cümle: "Er versuchte, das Schloss zu öffnen.",
  },
  {
    kelime: "etwas verbinden: birleştirmek",
    cümle: "Sie verband die Kabel korrekt.",
  },
  {
    kelime: "sich bedienen: almak",
    cümle: "Er bediente sich am Buffet.",
  },
  {
    kelime: "die Krypto-Wallet: kripto para cüzdanı",
    cümle: "Er speicherte seine Bitcoins in einer sicheren Krypto-Wallet.",
  },
  {
    kelime: "etwas schöpfen: elde etmek",
    cümle: "Sie schöpfte neuen Mut aus den positiven Nachrichten.",
  },
  {
    kelime: "sich vorbeugen: öne eğilmek",
    cümle: "Er beugte sich vor, um das Buch besser zu lesen.",
  },
  {
    kelime: "etwas hüten: korumak",
    cümle: "Sie hütete das Familiengeheimnis wie einen Schatz.",
  },
  {
    kelime: "sich etwas schnappen: kapmak",
    cümle: "Er schnappte sich die letzte Tasse Kaffee.",
  },
  {
    kelime: "auftauchen: ortaya çıkmak",
    cümle: "Plötzlich tauchte ein Delphin vor dem Boot auf.",
  },
  {
    kelime: "die Landung: iniş",
    cümle: "Die Landung des Flugzeugs verlief reibungslos.",
  },
  {
    kelime: "nur im Notfall: son çare olarak",
    cümle: "Nur im Notfall dürfen Sie diesen Knopf drücken.",
  },
  {
    kelime: "das Vermögen: servet",
    cümle: "Sein Vermögen wurde auf Millionen geschätzt.",
  },
  {
    kelime: "das Schaudern: ürperti",
    cümle: "Ein Schaudern lief ihr über den Rücken.",
  },
  {
    kelime: "sich auf dünnem Eis bewegen: risk almak",
    cümle: "Mit dieser Aussage bewegte er sich auf dünnem Eis.",
  },
  {
    kelime: "unwiderstehlich: karşı konulamaz",
    cümle: "Der Duft des Essens war unwiderstehlich.",
  },
  {
    kelime: "zögerlich: tereddütlü",
    cümle: "Sie nickte zögerlich und fragte nach Details.",
  },
  {
    kelime: "sich nähern: yaklaşmak",
    cümle: "Das Gewitter näherte sich schnell.",
  },
  {
    kelime: "etwas in Erfahrung bringen: öğrenmek",
    cümle: "Die Polizei brachte die Wahrheit ans Licht.",
  },
  {
    kelime: "der Spielraum: hareket alanı",
    cümle: "In diesem Projekt gibt es wenig Spielraum.",
  },
  {
    kelime: "gesagt, getan: sözüne sadık kalmak",
    cümle: "Gesagt, getan – er begann sofort mit der Arbeit.",
  },
  {
    kelime: "die Schwankung: dalgalanma",
    cümle: "Die Schwankungen des Aktienmarktes sind normal.",
  },
  {
    kelime: "sprunghaft: ani",
    cümle: "Seine Laune änderte sich sprunghaft.",
  },
  {
    kelime: "der Abfall: düşüş",
    cümle: "Der Abfall der Temperaturen war deutlich spürbar.",
  },
  {
    kelime: "das Aufsehen: dikkat çekme",
    cümle: "Sein Auftritt erregte großes Aufsehen.",
  },
  {
    kelime: "jemandem etwas erteilen: vermek",
    cümle: "Der Lehrer erteilte strenge Anweisungen.",
  },
  {
    kelime: "beziehungsweise: veya",
    cümle: "Wir treffen uns morgen, beziehungsweise übermorgen.",
  },
  {
    kelime: "schwanken: sallanmak",
    cümle: "Die Waage schwankte leicht.",
  },
  {
    kelime: "ausgelegt: tasarlanmış",
    cümle: "Das System ist für hohe Belastungen ausgelegt.",
  },
  {
    kelime: "etwas aussetzen: ertelemek",
    cümle: "Wir setzten das Meeting wegen Stromausfalls aus.",
  },
  {
    kelime: "sich akkumulieren: birikmek",
    cümle: "Der Müll akkumulierte sich im Hof.",
  },
  {
    kelime: "in der Tat: gerçekten",
    cümle: "In der Tat war dies die beste Lösung.",
  },
  {
    kelime: "etwas anweisen: talimat vermek",
    cümle: "Sie wies die Zahlung sofort an.",
  },
  {
    kelime: "der Pufferzeitpunkt: tampon süre",
    cümle: "Der Pufferzeitpunkt gab uns Flexibilität.",
  },
  {
    kelime: "etwas abpassen: zamanlamak",
    cümle: "Er passte den perfekten Moment ab.",
  },
  {
    kelime: "sich etwas verkneifen: bir şeyi bastırmak",
    cümle: "Sie verkneifte sich ein Lachen, als sie den Witz hörte.",
  },
  {
    kelime: "etwas irgendwohin feuern: fırlatmak",
    cümle: "Er feuerte den Ball wütend gegen die Wand.",
  },
  {
    kelime: "loslegen: başlamak",
    cümle: "Ohne zu zögern, legte er mit der Arbeit los.",
  },
  {
    kelime: "verwirrt: şaşkın",
    cümle: "Die komplizierte Anleitung ließ ihn völlig verwirrt zurück.",
  },
  {
    kelime: "etwas tun und lassen können: özgürce hareket etmek",
    cümle: "Hier kann man tun und lassen, was man will.",
  },
  {
    kelime: "sich die Hände reiben: ellerini ovuşturmak",
    cümle: "Vor Vorfreude rieb er sich die Hände.",
  },
  {
    kelime: "restlos: tamamen",
    cümle: "Das Essen war restlos aufgegessen.",
  },
  {
    kelime: "etwas wagen: risk almak",
    cümle: "Sie wagte einen Blick aus dem Fenster.",
  },
  {
    kelime: "schallen: yankılanmak",
    cümle: "Seine Stimme schallte durch den leeren Korridor.",
  },
  {
    kelime: "die Zeitleiste: zaman çizelgesi",
    cümle: "Die Zeitleiste zeigt alle wichtigen Ereignisse.",
  },
  {
    kelime: "ablassen: vazgeçmek",
    cümle: "Er ließ von seinem Plan ab, als er die Risiken sah.",
  },
  {
    kelime: "etwas aktivieren: etkinleştirmek",
    cümle: "Sie aktivierte den Alarm, als sie das Geräusch hörte.",
  },
  {
    kelime: "stichwortartig: madde madde",
    cümle: "Er notierte stichwortartig die wichtigsten Punkte.",
  },
  {
    kelime: "etwas in Angriff nehmen: üstlenmek",
    cümle: "Das Team nahm das Projekt entschlossen in Angriff.",
  },
  {
    kelime: "etwas eintrüben: karartmak",
    cümle: "Die Nachricht trübte die Stimmung ein.",
  },
  {
    kelime: "sich kratzen: kaşınmak",
    cümle: "Sie kratzte sich am Arm, wo die Mücke gestochen hatte.",
  },
  {
    kelime: "etwas anstellen: başarmak",
    cümle: "Was hast du heute wieder angestellt?",
  },
  {
    kelime: "von etwas ausgehen: varsaymak",
    cümle: "Wir gehen davon aus, dass pünktlich begonnen wird.",
  },
  {
    kelime: "etwas in Anspruch nehmen: gerektirmek",
    cümle: "Die Reparatur nimmt viel Zeit in Anspruch.",
  },
  {
    kelime: "viele Wege führen nach Rom: birçok yol Roma'ya çıkar",
    cümle: "Mach dir keine Sorgen – viele Wege führen nach Rom!",
  },
  {
    kelime: "förmlich: adeta",
    cümle: "Sie war förmlich vor Freude gesprungen.",
  },
  {
    kelime: "besagt: belirtmek",
    cümle: "Wie bereits besagt, müssen wir vorsichtig sein.",
  },
  {
    kelime: "etwas verschränken: kavuşturmak",
    cümle: "Er verschränkte die Arme und wartete geduldig.",
  },
  {
    kelime: "nahezu: neredeyse",
    cümle: "Das Experiment war nahezu perfekt gelungen.",
  },
  {
    kelime: "der Entwurf: taslak",
    cümle: "Der Entwurf des Gebäudes wurde genehmigt.",
  },
  {
    kelime: "sich schlapplachen: katıla katıla gülmek",
    cümle: "Wir haben uns über den Witz schlappgelacht.",
  },
  {
    kelime: "etwas vorgeben: belirlemek",
    cümle: "Der Chef gab strenge Richtlinien vor.",
  },
  {
    kelime: "Buxtehude: ıssız/önemsiz yer (mecazi)",
    cümle: "Der Ort liegt irgendwo in Buxtehude – total abgelegen!",
  },
  {
    kelime: "der Katzensprung: kısa mesafe",
    cümle: "Zum Strand ist es nur ein Katzensprung von hier.",
  },
  {
    kelime: "etwas durchforsten: detaylı araştırmak",
    cümle: "Sie durchforstete das Internet nach Informationen.",
  },
  {
    kelime: "die Einreisebestimmungen: giriş kuralları",
    cümle: "Die Einreisebestimmungen wurden verschärft.",
  },
  {
    kelime: "verschlafen: çok uyumak",
    cümle: "Er verschlief den Morgen und kam zu spät.",
  },
  {
    kelime: "etwas vollkritzeln: karalamak",
    cümle: "Das Kind kritzelte das Papier voll.",
  },
  {
    kelime: "die Berufung: meslek, çağrı",
    cümle: "Lehren war seine wahre Berufung.",
  },
  {
    kelime: "verschlafen: uykulu",
    cümle: "Nach der Nachtschicht fühlte er sich verschlafen.",
  },
  {
    kelime: "der Satz: cümle",
    cümle: "Der letzte Satz des Buches war besonders berührend.",
  },
  {
    kelime: "in Windeseile: çok hızlı",
    cümle: "Er erledigte die Aufgabe in Windeseile.",
  },
  {
    kelime: "schnarchen: horlamak",
    cümle: "Sein lautes Schnarchen störte alle.",
  },
  {
    kelime: "jemanden überkommt etwas: hisse kapılmak",
    cümle: "Ihn überkam plötzlich eine Welle der Traurigkeit.",
  },
  {
    kelime: "schwirren: vızıldamak",
    cümle: "Bienen schwirrten um die Blumen.",
  },
  {
    kelime: "etwas berücksichtigen: dikkate almak",
    cümle: "Wir müssen alle Faktoren berücksichtigen.",
  },
  {
    kelime: "etwas aufgeben: vazgeçmek",
    cümle: "Sie gab das Rauchen endgültig auf.",
  },
  {
    kelime: "sieht das: bugüne kadar",
    cümle: "Sieht das war alles möglich.",
  },
  {
    kelime: "sich ablenken: dikkat dağıtmak",
    cümle: "Er lenkte sich mit Musik ab.",
  },
  {
    kelime: "die Programmierkunst: programlama becerisi",
    cümle: "Seine Programmierkunst ist bewundernswert.",
  },
  {
    kelime: "Small Talk halten: sohbet etmek",
    cümle: "Beim Empfang hielt sie Small Talk mit den Gästen.",
  },
  {
    kelime: "wie sowieso: zaten",
    cümle: "Wie sowieso geplant, trafen wir uns um acht.",
  },
  {
    kelime: "die Nachteule: gece kuşu",
    cümle: "Als Nachteule arbeitet er am liebsten nachts.",
  },
  {
    kelime: "vorstattengehen: gerçekleşmek",
    cümle: "Die Verhandlungen gingen langsam vorstatten.",
  },
  {
    kelime: "bereinbrechen: başlamak",
    cümle: "Ein Sturm brach über die Stadt herein.",
  },
  {
    kelime: "an etwas herumbasteln: kurcalamak",
    cümle: "Er bastelte stundenlang an der alten Uhr herum.",
  },
  {
    kelime: "der Nervenkitzel: heyecan",
    cümle: "Extremsport gibt ihm den Nervenkitzel.",
  },
  {
    kelime: "etwas auftritt: yüklemek",
    cümle: "Die Software tritt automatisch Updates auf.",
  },
  {
    kelime: "behutsam vorgehen: dikkatli ilerlemek",
    cümle: "Wir müssen in dieser Sache behutsam vorgehen.",
  },
  {
    kelime: "schleichen: sessizce hareket etmek",
    cümle: "Der Dieb schlich sich ins Haus.",
  },
  {
    kelime: "etwas ist zum Greifen nah: çok yakın",
    cümle: "Der Sieg war zum Greifen nah.",
  },
  {
    kelime: "etwas befürchten: endişelenmek",
    cümle: "Sie befürchtete das Schlimmste.",
  },
  {
    kelime: "jemanden heimstehen: kötü sonuçlanmak",
    cümle: "Die Folgen des Fehlers heimsten ihn schwer.",
  },
  {
    kelime: "Jemanden quälen: birini üzmek",
    cümle: "Er quälte sich mit Selbstvorwürfen.",
  },
  {
    kelime: "erdnen: ses çıkarmak",
    cümle: "Ein leises Summen erdnete aus dem Raum.",
  },
  {
    kelime: "mit einem Stein im Magen: endişeli",
    cümle: "Sie ging mit einem Stein im Magen zur Prüfung.",
  },
  {
    kelime: "sich sammeln: toparlanmak",
    cümle: "Er sammelte seine Gedanken, bevor er sprach.",
  },
  {
    kelime: "der Anfug: iz",
    cümle: "Ein Anfug von Zweifel blieb in ihr.",
  },
  {
    kelime: "der Schwindel: baş dönmesi",
    cümle: "Plötzlich überkam ihn ein Schwindel.",
  },
  {
    kelime: "das Geschehnis: olay",
    cümle: "Das Geschehnis prägte sich tief in ihr Gedächtnis ein.",
  },
  {
    kelime: "verdachtet: şüpheli",
    cümle: "Sein verdachtetes Verhalten erregte Aufmerksamkeit.",
  },
  {
    kelime: "aufrecht: dik",
    cümle: "Sie saß aufrecht und selbstbewusst da.",
  },
  {
    kelime: "der Beistand: destek",
    cümle: "In schweren Zeiten braucht man Beistand.",
  },
  {
    kelime: "mehr denn je: her zamankinden daha çok",
    cümle: "Mehr denn je vertraute sie auf ihre Stärken.",
  },
  {
    kelime: "sich bemühen: çabalamak",
    cümle: "Er bemühte sich, ruhig zu bleiben.",
  },
  {
    kelime: "aufgewühlt: sarsılmış",
    cümle: "Die Nachricht ließ sie aufgewühlt zurück.",
  },
  {
    kelime: "vorfallen: meydana gelmek",
    cümle: "Ein seltsamer Vorfall störte die Ruhe.",
  },
  {
    kelime: "der Härtetest: stres testi",
    cümle: "Das Team bestand den Härtetest mit Bravour.",
  },
  {
    kelime: "jemandes Nerven liegen blank: sinirli olmak",
    cümle: "Nach der Deadline lagen seine Nerven blank.",
  },
  {
    kelime: "etwas bestaunen: hayranlıkla bakmak",
    cümle: "Sie bestaunte das Gemälde minutenlang.",
  },
  {
    kelime: "etwas verknüpfen: bağlamak",
    cümle: "Er verknüpfte die Ideen zu einem Konzept.",
  },
  {
    kelime: "die Spur: iz",
    cümle: "Die Spur führte die Polizei zum Täter.",
  },
  {
    kelime: "die Handvoll: avuç dolusu",
    cümle: "Nur eine Handvoll Leute erschien.",
  },
  {
    kelime: "etwas abgleichen: karşılaştırmak",
    cümle: "Die Daten wurden sorgfältig abgeglichen.",
  },
  {
    kelime: "erforderlich: gerekli",
    cümle: "Diese Maßnahme ist dringend erforderlich.",
  },
  {
    kelime: "angewischt: belirsiz",
    cümle: "Seine Antwort war angewischt und unklar.",
  },
  {
    kelime: "der Übermut: coşku",
    cümle: "Der Übermut der Kinder war ansteckend.",
  },
  {
    kelime: "etwas bricht über jemanden herein: ansızın gelmek",
    cümle: "Die Krise brach unerwartet über sie herein.",
  },
  {
    kelime: "das Drahtseil: çelik halat",
    cümle: "Er balancierte über das Drahtseil.",
  },
  {
    kelime: "etwas verifizieren: doğrulamak",
    cümle: "Die Echtheit der Unterschrift wurde verifiziert.",
  },
  {
    kelime: "gelangen: ulaşmak",
    cümle: "Die Nachricht gelangte schnell an die Öffentlichkeit.",
  },
  {
    kelime: "etwas in die Wege leiten: başlatmak",
    cümle: "Sie leitete die Verhandlungen in die Wege.",
  },
  {
    kelime: "brodeln: kaynamak",
    cümle: "Die Unruhe brodelte unter der Oberfläche.",
  },
  {
    kelime: "seufzen: iç çekmek",
    cümle: "Er seufzte tief und schaute aus dem Fenster.",
  },
  {
    kelime: "jemanden aus den Augen verlieren: gözden kaybetmek",
    cümle: "Sie verlor ihn in der Menge aus den Augen.",
  },
  {
    kelime: "berührt: etkilenmiş",
    cümle: "Seine Worte ließen sie tief berührt zurück.",
  },
  {
    kelime: "der Anschlussflug: aktarma uçuşu",
    cümle: "Der Anschlussflug nach Berlin war bereits gebucht.",
  },
  {
    kelime: "die Wüste: çöl",
    cümle: "Die Sahara ist die größte Wüste der Welt.",
  },
  {
    kelime: "schnuppern: koklamak",
    cümle: "Der Hund schnupperte neugierig an der Blume.",
  },
  {
    kelime: "etwas durchgehen: gözden geçirmek",
    cümle: "Sie ging die Liste noch einmal sorgfältig durch.",
  },
  {
    kelime: "langfristig: uzun vadeli",
    cümle: "Langfristig wird sich diese Investition lohnen.",
  },
  {
    kelime: "unausgesprochen: söylenmemiş",
    cümle: "Die unausgesprochene Spannung war spürbar.",
  },
  {
    kelime: "die Einigkeit: uzlaşı",
    cümle: "Einigkeit herrschte im Team über das Vorgehen.",
  },
  {
    kelime: "auf etwas deuten: işaret etmek",
    cümle: "Alles deutet auf einen Erfolg hin.",
  },
  {
    kelime: "gängig: yaygın",
    cümle: "Das ist eine gängige Praxis in der Branche.",
  },
  {
    kelime: "etwas zurückverfolgen: iz sürmek",
    cümle: "Die Polizei verfolgte die Spur zurück.",
  },
  {
    kelime: "kramen: karıştırmak",
    cümle: "Er kramte in der Schublade nach dem Schlüssel.",
  },
  {
    kelime: "neulich: geçenlerde",
    cümle: "Neulich traf ich zufällig einen alten Freund.",
  },
  {
    kelime: "jemandem etwas abzwacken: birinden bir şey koparmak",
    cümle: "Er zwackte seinem Kollegen ein paar Euro ab.",
  },
  {
    kelime: "etwas verschlüsseln: şifrelemek",
    cümle: "Die Nachricht wurde sicher verschlüsselt.",
  },
  {
    kelime: "etwas timen: zamanlamak",
    cümle: "Sie timte den perfekten Moment für die Ankündigung.",
  },
  {
    kelime: "danebengehen: başarısız olmak",
    cümle: "Der Plan ging leider daneben.",
  },
  {
    kelime: "dran sein: sıra olmak",
    cümle: "Du bist dran, die Präsentation zu halten.",
  },
  {
    kelime: "der Panzerknacker: kasa hırsızı",
    cümle: "Der Panzerknacker wurde schließlich gefasst.",
  },
  {
    kelime: "der Fausthieb: yumruk",
    cümle: "Ein Fausthieb beendete den Streit.",
  },
  {
    kelime: "der Spitzname: takma ad",
    cümle: "Sein Spitzname in der Schule war ‚Der Chef‘.",
  },
  {
    kelime: "mulmig: huzursuz",
    cümle: "Ihm wurde mulmig, als er die Schritte hörte.",
  },
  {
    kelime: "die Anspannung: gerilim",
    cümle: "Die Anspannung vor dem Auftritt war enorm.",
  },
  {
    kelime: "schwinden: azalmak",
    cümle: "Seine Hoffnung schwand langsam.",
  },
  {
    kelime: "schrecklich: korkunç",
    cümle: "Das war ein schrecklicher Unfall.",
  },
  {
    kelime: "der Drahtseilakt: riskli iş",
    cümle: "Die Verhandlungen waren ein politischer Drahtseilakt.",
  },
  {
    kelime: "etwas tätigen: gerçekleştirmek",
    cümle: "Er tätigte eine große Investition.",
  },
  {
    kelime: "demzufolge: dolayısıyla",
    cümle: "Demzufolge müssen wir unsere Strategie ändern.",
  },
  {
    kelime: "quasi-präzise: neredeyse kesin",
    cümle: "Seine Vorhersage war quasi-präzise.",
  },
  {
    kelime: "etwas ausschließen: engellemek",
    cümle: "Fehler müssen ausgeschlossen werden.",
  },
  {
    kelime: "Bilanz ziehen: değerlendirme yapmak",
    cümle: "Am Jahresende ziehen wir Bilanz.",
  },
  {
    kelime: "rasen: hızla gitmek",
    cümle: "Das Auto raste die Straße hinunter.",
  },
  {
    kelime: "etwas ermöglichen: mümkün kılmak",
    cümle: "Die Technologie ermöglicht neue Lösungen.",
  },
  {
    kelime: "peitschen: çok sert esmek",
    cümle: "Der Wind peitschte durch die Straßen.",
  },
  {
    kelime: "ertönen: duyulur hale gelmek",
    cümle: "Plötzlich ertönte laute Musik aus dem Nachbarhaus.",
  },
  {
    kelime: "in Tränen ausbrechen: aniden ağlamaya başlamak",
    cümle: "Als sie die Nachricht hörte, brach sie in Tränen aus.",
  },
  {
    kelime: "jemanden/etwas aufhalten: durdurmak",
    cümle: "Der Sturm hielt den Zug auf.",
  },
  {
    kelime: "jemandem guttun: pozitif etkisi olmak",
    cümle: "Die Ruhe nach der Arbeit tut mir gut.",
  },
  {
    kelime: "aufs Ganze gehen: her şeyi riske atmak",
    cümle: "Er ging aufs Ganze und investierte sein gesamtes Erspartes.",
  },
  {
    kelime: "jemandem offenstehen: olanak sunmak",
    cümle: "Nach dem Abschluss stehen ihm viele Karrierewege offen.",
  },
  {
    kelime: "lauern: pusuya yatmak (olumsuz)",
    cümle: "In der dunklen Gasse lauerte eine Gefahr.",
  },
  {
    kelime: "etwas in Kauf nehmen: olumsuz bir durumu kabul etmek",
    cümle: "Sie nahm den Lärm in Kauf, um in der Stadt zu wohnen.",
  },
  {
    kelime: "die Seele: ruh",
    cümle: "Die Seele braucht manchmal Stille, um zu heilen.",
  },
  {
    kelime: "der Teufel: şeytan",
    cümle: "In der Geschichte kämpfte Gott gegen den Teufel.",
  },
  {
    kelime: "anbrechen: başlamak",
    cümle: "Der Morgen brach langsam an.",
  },
  {
    kelime: "erst recht nicht: özellikle hiç",
    cümle: "Wenn du nicht kommst, gehe ich erst recht nicht.",
  },
  {
    kelime: "abtauchen: ortadan kaybolmak",
    cümle: "Nach dem Diebstahl tauchte der Täter unter.",
  },
  {
    kelime: "gähnende Leere: mutlak boşluk",
    cümle: "Nach der Party herrschte gähnende Leere im Raum.",
  },
  {
    kelime: "die Dämmerung: alacakaranlık",
    cümle: "In der Dämmerung sieht die Landschaft magisch aus.",
  },
  {
    kelime: "einsetzen: başlamak",
    cümle: "Der Regen setzte plötzlich ein.",
  },
  {
    kelime: "das Drehbuch: senaryo",
    cümle: "Das Drehbuch für den Film war sehr spannend.",
  },
  {
    kelime: "grell: çok parlak",
    cümle: "Die grelle Sonne blendete die Autofahrer.",
  },
  {
    kelime: "jemanden blenden: göz kamaştırmak",
    cümle: "Das Fernlicht des Autos blendete mich.",
  },
  {
    kelime: "auf jemanden zustürmen: birine hızla yaklaşmak",
    cümle: "Der Hund stürmte auf das Kind zu.",
  },
  {
    kelime: "brüllen: kükremek / bağırmak",
    cümle: "Der Löwe brüllte in der Savanne.",
  },
  {
    kelime: "erstarren: donakalmak",
    cümle: "Vor Schreck erstarrte sie mitten im Raum.",
  },
  {
    kelime: "verschwimmen: bulanıklaşmak",
    cümle: "Die Konturen verschwammen im Nebel.",
  },
  {
    kelime: "der Knall: patlama sesi",
    cümle: "Ein lauter Knall erschütterte die Nacht.",
  },
  {
    kelime: "die Handschellen: kelepçe",
    cümle: "Die Polizei legte ihm Handschellen an.",
  },
  {
    kelime: "rau: sert / pürüzlü",
    cümle: "Die raue Oberfläche kratzte an der Haut.",
  },
  {
    kelime: "der Diebstahl: hırsızlık",
    cümle: "Der Diebstahl des Fahrrads wurde angezeigt.",
  },
  {
    kelime: "jemanden abführen: birini gözaltına almak",
    cümle: "Die Polizei führte den Verdächtigen ab.",
  },
  {
    kelime: "die Untersuchungshaft: tutukluluk (dava başlayana kadar)",
    cümle: "Der Verdächtige wurde in Untersuchungshaft genommen.",
  },
  {
    kelime: "jemanden unterbringen: birine kalacak yer bulmak",
    cümle: "Die Sozialarbeiterin brachte den Obdachlosen in einem Heim unter.",
  },
  {
    kelime: "die Zelle: küçük oda (hapishane/manastır)",
    cümle: "Der Mönch lebte jahrelang in einer schlichten Zelle.",
  },
  {
    kelime: "blank: çıplak / korunmasız",
    cümle: "Die blanke Wut in seinen Augen war beängstigend.",
  },
  {
    kelime: "starren: hareketsiz bakmak",
    cümle: "Sie starrte stumm auf das leere Blatt Papier.",
  },
  {
    kelime: "der Haftrichter: tutuklama yargıcı",
    cümle: "Der Haftrichter ordnete die Freilassung an.",
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
export default dizi;
