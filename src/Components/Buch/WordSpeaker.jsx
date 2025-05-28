import React, { useState, useEffect, useCallback } from "react";

const wordsData = {
  das_Bellen: "köpek havlaması",
  vermutlich: "muhtemelen",
  möglicherweise: "belki, olasılıkla",
  etwas_aushalten: "bir şeye katlanmak, dayanmak",
  mit_etwas_klarkommen: "bir şeyle başa çıkmak",
  etwas_akzeptieren: "bir şeyi kabul etmek",
  die_Entlohnung: "ücret, ödeme",
  die_Bezahlung: "ödeme, maaş",
  die_finanzielle_Belohnung: "maddi ödül",
  starren: "dik dik bakmak",
  der_Liegestütz: "şınav",
  in_die_Gänge_kommen: "harekete geçmek",
  halbwegs: "yeterince, oldukça",
  sich_niederlassen: "yerleşmek",
  sich_zerstreuen: "kendini oyalamak, başka şeyler düşünmek",
  sich_sattsehen: "doymak, artık görmek istememek",
  etwas_bestaunen: "bir şeyi hayranlıkla seyretmek",
  etwas_erschaffen: "bir şey yaratmak",
  nahezu: "neredeyse",
  großzügig: "cömert",
  zuständig: "sorumlu",
  jemanden_erfüllen: "birini tatmin etmek",
  die_Schicht: "vardiya",
  der_Tresen: "tezgah",
  das_Dutzend: "düzine (12 adet)",
  einwandfrei: "kusursuz",
  beschämt: "utanmış",
  der_Fingerabdruckscanner: "parmak izi okuyucu",
  der_Vorgang: "süreç",
  sich_mit_etwas_vertraut_machen: "bir şeye alışmak",
  ruppig: "kaba, sert",
  der_Gesichtsausdruck: "yüz ifadesi",
  seufzen: "derin bir nefes alıp vermek",
  friedlich: "barışçıl",
  kratzig: "sert, tırtıklı",
  der_Bierbauch: "bira göbeği",
  der_Frachtraum: "yük bölümü",
  errötet: "kızarmış",
  etwas_versprechen: "söz vermek",
  etwas_beherrschen: "bir şeyi iyi bilmek",
  der_Vorstand: "yönetim kurulu",
  auf_der_Kippe_stehen: "riskli bir durumda olmak",
  der_Posten: "iş pozisyonu",
  wackelig: "sallantılı",
  etwas_annehmen: "bir şeyi kabul etmek",
  sich_irren: "yanılmak",
  halten: "sürmek, dayanmak",
  zukünftig: "gelecekte",
  bescheiden: "mütevazı",
  angesagt: "moda, popüler",
  in_weiter_Ferne: "çok uzakta",
  zumal: "özellikle",
  etwas_absolvieren: "bir şeyi tamamlamak",
  ausgezeichnet: "mükemmel",
  außer: "hariç",
  der_Einheimische: "yerli",
  zwitschern: "kuş ötüşü",
  die_Baumkrone: "ağaç tepesi",
  schwirren: "vızıldamak",
  etwas_verpesten: "bir şeyi kirletmek",
  etwas_schonen: "bir şeyi korumak",
  lauschen: "dinlemek",
  etwas_aufgeben: "vazgeçmek",
  der_Zeitmangel: "zaman darlığı",
  die_Brezn: "Bavarya simidi",
  nicken: "başını sallamak",
  erwidern: "cevap vermek",
  auf_den_Deckel_bekommen: "azar işitmek",
  etwas_verkörpern: "bir şeyi temsil etmek",
  das_Klischee: "klişe",
  die_Trinkkultur: "içme kültürü",
  etwas_verpassen: "bir şeyi kaçırmak",
  der_Krug: "büyük bardak",
  die_rhetorische_Frage: "retorik soru",
  die_Gaudi: "eğlence (Güney Almanca)",
  schwerwiegend: "ciddi",
  etwas_Genitiv_mächtig_sein: "bir şeye hakim olmak",
  schlagen: "vurmak",
  rasen: "hızla gitmek",
  die_Haltung_bewahren: "soğukkanlılığını korumak",
  jemandem_ist_nach_etwas_zumute: "birinin bir şeye isteği olmak",
  zart: "narin",
  etwas_gründen: "bir şey kurmak",
  in_Erfüllung_gehen: "gerçekleşmek",
  geschweige_denn: "zaten ... değil",
  permanent: "sürekli",
  leer: "boş",
  sorgenfrei: "kaygısız",
  arm_wie_eine_Kirchenmaus: "çok fakir",
  der_Haufen: "yığın",
  das_Bedürfnis: "ihtiyaç",
  jemandem_etwas_verwehren: "birine bir şeyi reddetmek",
  besessen: "takıntılı",
  vor_etwas_warnen: "bir şey hakkında uyarmak",
  herrlich: "harika",
  am_Boden_zerstört_sein: "çok üzgün olmak",
  sich_täuschen: "yanılmak",
  einen_schweren_Schlag_erleiden: "ağır bir darbe almak",
  etwas_vermeiden: "bir şeyden kaçınmak",
  der_Ausweg: "çıkış yolu",
  jemanden_binden: "birine bağlanmak",
  der_Lebensmut: "yaşama sevinci",
  etwas_beschließen: "bir şeye karar vermek",
  mit_erhobenem_Haupt: "başı dik",
  jemanden_beneiden: "birini kıskanmak",
  die_Ausstrahlung: "etki, karizma",
  makellos: "kusursuz",
  strahlen_wie_ein_Honigkuchenpferd: "çok mutlu görünmek",
  die_Umarmung: "sarılma",
  die_Stütze: "destek",
  scherzen: "şaka yapmak",
  die_Gehaltserhöhung: "maaş zammı",
  gesenkt: "aşağı bakıyor",
  etwas_vorlegen: "bir şeyi sunmak",
  etwas_verursachen: "bir şeye neden olmak",
  gescheitert: "başarısız",
  ermutigend: "cesaret verici",
  der_Käfig: "kafes",
  in_die_Fußstapfen_von_jemandem_treten: "birinin izinden gitmek",
  etwas_übernehmen: "bir şeyi devralmak",
  immens: "çok büyük",
  etwas_erlangen: "bir şey elde etmek",
  ein_Erbe_aufrechterhalten: "mirası sürdürmek",
  etwas_D_erliegen: "bir şeye yenik düşmek",
  etwas_verarbeiten: "bir şeyi sindirmek",
  sich_ablenken: "dikkatini dağıtmak",
  der_Abschlussball: "mezuniyet balosu",
  sich_rechtfertigen: "kendini savunmak",
  gewöhnlich: "alışılagelmiş",
  sich_A_etwas_D_widmen: "bir şeye zaman ayırmak",
  sich_weigern: "reddetmek",
  vergeblich: "boşuna",
  jemanden_an_Bord_holen: "birini ekibe almak",
  jemanden_begleiten: "birine eşlik etmek",
  das_Vermögen: "servet",
  auf_jemanden_angewiesen_sein: "birine muhtaç olmak",
  ausschweifend: "aşırı",
  die_Aufmerksamkeit: "dikkat",
  jemanden_aufmuntern: "birini neşelendirmek",
  der_Freudensprung: "sevinçten zıplamak",
  auftauchen: "ortaya çıkmak",
  der_Hörsturz: "ani işitme kaybı",
  neugierig: "meraklı",
  schießen: "hızla gitmek",
  abreißen: "kesilmek",
  der_Vorfall: "olay",
  etwas_wagen: "bir şeyi denemek",
  Fuß_fassen: "yer edinmek",
  mager: "az",
  einrosten: "paslanmak",
  begeistert: "heyecanlı",
  von_Grund_auf: "temelden",
  die_Herausforderung: "meydan okuma",
  etwas_vorweisen: "bir şey göstermek",
  der_Vorgesetzte: "amir",
  schluchzen: "hıçkırmak",
  innig: "samimi",
  erschöpft: "bitkin",
  bedrohlich: "tehlikeli",
  an_einem_seidenen_Faden_hängen: "ip üstünde olmak",
  etwas_verspielen: "bir şeyi kaybetmek",
  die_Lage: "durum",
  fachsprachlich: "mesleki dil",
  ins_Schwitzen_kommen: "terlemek",
  gestrig: "dünkü",
  das_Augenzwinkern: "göz kırpma",
  die_Hantel: "dambıl",
  das_Bankdrücken: "bench press",
  der_Wasserspender: "su sebili",
  quatschen: "sohbet etmek",
  frustriert: "hayal kırıklığına uğramış",
  der_Zugezogene: "taşınan kişi",
  prächtige_Bauten: "görkemli binalar",
  der_Schaufensterbummel: "vitrin gezmek",
  herrlich: "harika",
  am_Boden_zerstört_sein: "çok üzgün olmak",
  sich_täuschen: "yanılmak",
  einen_schweren_Schlag_erleiden: "ağır bir darbe almak",
  etwas_vermeiden: "bir şeyden kaçınmak",
  der_Ausweg: "çıkış yolu",
  jemanden_binden: "birine bağlanmak",
  der_Lebensmut: "yaşama sevinci",
  etwas_beschließen: "bir şeye karar vermek",
  mit_erhobenem_Haupt: "başı dik",
  jemanden_beneiden: "birini kıskanmak",
  die_Ausstrahlung: "etki, karizma",
  makellos: "kusursuz",
  strahlen_wie_ein_Honigkuchenpferd: "çok mutlu görünmek",
  die_Umarmung: "sarılma",
  die_Stütze: "destek",
  scherzen: "şaka yapmak",
  die_Gehaltserhöhung: "maaş zammı",
  gesenkt: "aşağı bakıyor",
  etwas_vorlegen: "bir şeyi sunmak",
  etwas_verursachen: "bir şeye neden olmak",
  gescheitert: "başarısız",
  ermutigend: "cesaret verici",
  der_Käfig: "kafes",
  in_die_Fußstapfen_von_jemandem_treten: "birinin izinden gitmek",
  etwas_übernehmen: "bir şeyi devralmak",
  immens: "çok büyük",
  etwas_erlangen: "bir şey elde etmek",
  ein_Erbe_aufrechterhalten: "mirası sürdürmek",
  etwas_D_erliegen: "bir şeye yenik düşmek",
  etwas_verarbeiten: "bir şeyi sindirmek",
  sich_ablenken: "dikkatini dağıtmak",
  der_Abschlussball: "mezuniyet balosu",
  sich_rechtfertigen: "kendini savunmak",
  gewöhnlich: "alışılagelmiş",
  sich_A_etwas_D_widmen: "bir şeye zaman ayırmak",
  sich_weigern: "reddetmek",
  vergeblich: "boşuna",
  jemanden_an_Bord_holen: "birini ekibe almak",
  jemanden_begleiten: "birine eşlik etmek",
  das_Vermögen: "servet",
  auf_jemanden_angewiesen_sein: "birine muhtaç olmak",
  ausschweifend: "aşırı",
  die_Aufmerksamkeit: "dikkat",
  jemanden_aufmuntern: "birini neşelendirmek",
  der_Freudensprung: "sevinçten zıplamak",
  auftauchen: "ortaya çıkmak",
  der_Hörsturz: "ani işitme kaybı",
  neugierig: "meraklı",
  schießen: "hızla gitmek",
  abreißen: "kesilmek",
  der_Vorfall: "olay",
  etwas_wagen: "bir şeyi denemek",
  Fuß_fassen: "yer edinmek",
  mager: "az",
  einrosten: "paslanmak",
  begeistert: "heyecanlı",
  von_Grund_auf: "temelden",
  die_Herausforderung: "meydan okuma",
  etwas_vorweisen: "bir şey göstermek",
  der_Vorgesetzte: "amir",
  schluchzen: "hıçkırmak",
  innig: "samimi",
  erschöpft: "bitkin",
  bedrohlich: "tehlikeli",
  an_einem_seidenen_Faden_hängen: "ip üstünde olmak",
  etwas_verspielen: "bir şeyi kaybetmek",
  die_Lage: "durum",
  fachsprachlich: "mesleki dil",
  ins_Schwitzen_kommen: "terlemek",
  gestrig: "dünkü",
  das_Augenzwinkern: "göz kırpma",
  die_Hantel: "dambıl",
  das_Bankdrücken: "bench press",
  der_Wasserspender: "su sebili",
  quatschen: "sohbet etmek",
  frustriert: "hayal kırıklığına uğramış",
  der_Zugezogene: "taşınan kişi",
  prächtige_Bauten: "görkemli binalar",
  der_Schaufensterbummel: "vitrin gezmek",
  heraussprudeln: "hızla söylemek",
  hervorragend: "mükemmel",
  an_etwas_feilen: "bir şeyi geliştirmek",
  anstoßen: "kadeh tokuşturmak",
  eine_frohe_Botschaft: "müjde",
  weit_aufgerissen: "kocaman açılmış",
  der_Riesenzufall: "büyük tesadüf",
  der_Leidensgenosse: "aynı kaderi paylaşan kişi",
  die_Bedrücktheit: "sıkıntı",
  im_Bunde: "birlikte",
  etwas_überhören: "bir şeyi duymamak",
  ratlos: "çaresiz",
  stirnrunzelnd: "kaşlarını çatarak",
  nickend: "başını sallayarak",
  das_Klirren: "cam şıkırtısı",
  das_Dilemma: "ikilem",
  stechend: "keskin (ağrı)",
  hektisch: "telaşlı",
  sich_breit_machen: "yayılmak",
  die_Luftlinie: "kuş uçuşu mesafe",
  jemandem_etwas_auf_einem_dem_Silbertablett_servieren:
    "bir şeyi kolayca sunmak",
  jemanden_plagen_Zweifel: "şüphelerle boğuşmak",
  jemanden_entlassen: "birini işten çıkarmak",
  schmollen: "surat asmak",
  Die_Zeit_läuft: "zaman daralıyor",
  jemanden_bestärken: "birini cesaretlendirmek",
  vorbeilaufend: "yanından geçen",
  etwas_verspüren: "bir şey hissetmek",
  in_Gedanken_versinken: "derin düşüncelere dalmak",
  belebt: "kalabalık",
  der_Bürgersteig: "kaldırım",
  das_Gleichgewicht: "denge",
  etwas_ausblenden: "bir şeyi görmezden gelmek",
  gebrochenes_Deutsch_sprechen: "bozuk Almanca konuşmak",
  innerlich: "içten",
  der_zeitliche_Rahmen: "zaman çerçevesi",
  der_Umfang: "kapsam",
  verzweifelt: "umutsuz",
  einen_Blick_auf_etwas_werfen: "bir şeye göz atmak",
  etwas_ausschöpfen: "bir şeyi tamamen kullanmak",
  bedingt: "belirli bir nedene dayanmak",
  köstlich: "lezzetli",
  ertönen: "duyulmak",
  geflochtene_Zöpfe: "örgülü saç",
  die_Schlange: "kuyruk",
  der_Schokoriegel: "çikolatalı gofret",
  sanft: "yumuşak",
  frech: "küstah",
  der_Frust: "hayal kırıklığı",
  sich_nach_etwas_umschauen: "bir şeyi aramak",
  der_Wille: "irade",
  bekanntlich: "bilindiği gibi",
  sich_an_jemanden_wenden: "birine danışmak",
  der_Wettlauf: "yarış",
  aufgeben: "pes etmek",
  zögern: "tereddüt etmek",
  sich_abwenden: "sırtını dönmek",
  streng: "sert",
  jemanden_ärgern: "birini kızdırmak",
  ausgeprägt: "belirgin",
  die_Zornesfalte: "öfke kırışığı",
  zornig: "öfkeli",
  ächzen: "inlemek",
  getrübt: "kararmış",
  die_Anforderung: "gereksinim",
  darauffolgend: "sonraki",
  bedrückt: "bunalmış",
  etwas_verwandeln: "bir şeyi dönüştürmek",
  zu_ihren_Gunsten: "lehlerine",
  erlöschen: "sönmek",
  ersehnt: "özlemle beklenen",
  flackern: "titremek",
  eingehend: "detaylı",
  die_Fortbildung: "mesleki eğitim",
  klappen: "başarılı olmak",
  Licht_am_Ende_des_Tunnels: "tünelin ucundaki ışık",
  etwas_zurückhalten: "bir şeyi saklamak",
  kratzend: "tırmalayıcı",
  sich_sichtlich_abmühen: "belirgin şekilde çabalamak",
  verneinend: "olumsuz",
  solide: "sağlam",
  verwundert: "şaşırmış",
  etwas_herauskramen: "bir şeyi çıkarmak",
  was_angeht: "... konusunda",
  wie_wild: "deli gibi",
  schockiert: "şok olmuş",
  etwas_bereuen: "bir şeyden pişman olmak",
  loslegen: "başlamak",
  verdammt: "lanet olası",
  die_Faust_ballen: "yumruğunu sıkmak",
  schweigend: "sessizce",
  der_Mut: "cesaret",
  etwas_vorhaben: "bir şey planlamak",
  stolz: "gururlu",
  Wirkung_zeigen: "etki göstermek",
  jemanden_einholen: "birine yetişmek",
  gelangen: "ulaşmak",
  durchhalten: "dayanmak",
  mit_jemandem_Schritt_halten: "birine ayak uydurmak",
  jemandem_Mut_zusprechen: "birine cesaret vermek",
  jemandem_zu_schaffen_machen: "birine zorluk çıkarmak",
  bereiten: "neden olmak",
  die_Belastung: "yük",
  versagen: "başarısız olmak",
  zu_sein_scheinen: "öyle görünmek",
  scheitern: "başarısız olmak",
  das_Minimum: "asgari",
  philosophieren: "felsefe yapmak",
  in_der_Zwischenzeit: "bu arada",
  hochgezogene_Augenbrauen: "kalkık kaşlar",
  der_Lautsprecher: "hoparlör",
  vergnügt: "neşeli",
  eine_Grimasse_ziehen: "yüz buruşturmak",
  die_Erleichterung: "rahatlama",
  etwas_genießen: "bir şeyin tadını çıkarmak",
  in_vollen_Zügen: "doyasıya",
  nervenaufreibend: "sinir bozucu",
  herumsschwen: "etrafta uçuşmak",
  regungslos: "hareketsiz",
  festkleben: "yapıştırmak",
  inständig: "içtenlikle",
  der_Streich: "şaka",
  zucken: "seğirmek",
  der_Tonfall: "ses tonu",
  stürzen: "düşmek",
  etwas_parat_haben: "bir şey hazır bulundurmak",
  der_Pessimismus: "kötümserlik",
  sich_nicht_unterkriegen_lassen: "pes etmemek",
  saftig: "sulu",
  funkeln: "parıldamak",
  in_Selbstmitleid_baden: "kendine acımak",
  die_Achterbahn: "hız treni",
  die_Zuckerwatte: "pamuk şeker",
  der_Schießstand: "atış poligonu",
  das_Plüschtier: "peluş oyuncak",
  sich_anschließen: "katılmak",
  staunen: "hayret etmek",
  das_Fahrgeschäft: "lunapark aracı",
  gebrannte_Mandeln: "kavrulmuş badem",
  tönen: "ses çıkarmak",
  im_Schlepptau: "peşinde",
  kreischen: "çığlık atmak",
  der_Adrenalinschub: "adrenalin patlaması",
  der_Hammer: "harika",
  etwas_packt_jemanden: "birini etkiler",
  lebendig: "canlı",
  die_Geisterbahn: "korku tüneli",
  die_Schweinshaxe: "domuz budu",
  der_Knödel: "hamur topu",
  ausgelassen: "neşeli",
  die_Tracht: "geleneksel kıyafet",
  das_Dirndl: "Bavyera yöresel kıyafeti",
  sich_mitreissen_lassen: "kendini kaptırmak",
  ins_Schwarze_treffen: "tam isabet ettirmek",
  die_Auszeit: "mola",
  etwas_in_Angriff_nehmen: "bir şeye başlamak",
  das_Festgelände: "festival alanı",
  fest_entschlossen: "kararlı",
  etwas_abmachen: "bir şeyi ayarlamak",
  neulich: "geçenlerde",
  die_Wahlheimat: "seçilmiş vatan",
  Pläne_schmieden: "plan yapmak",
  etwas_platzieren: "bir şeyi yerleştirmek",
  wund: "yaralı",
  das_Kopfschütteln: "baş sallama",
  herausplatzen: "pat diye söylemek",
  die_Faust: "yumruk",
  anständig: "düzgün",
  wesentlich: "önemli",
  jemandem_einen_Streich_spielen: "birine şaka yapmak",
  vorankommen: "ilerlemek",
  resignieren: "pes etmek",
  die_Herangehensweise: "yaklaşım",
  angespannt: "gergin",
  etwas_erfüllen: "bir şeyi yerine getirmek",
  etwas_durchbrechen: "bir şeyi kırmak",
  skeptisch: "şüpheci",
  etwas_ausarbeiten: "bir şeyi hazırlamak",
  herumtippen: "etrafta yazmak",
  etwas_ablegen: "bir şeyi bırakmak",
  etwas_einwenden: "itiraz etmek",
  etwas_rückmelden: "geri bildirim vermek",
  der_Lektor: "editör",
  eigenständig: "bağımsız",
  etwas_meistern: "bir şeyi başarmak",
  anspruchsvoll: "iddialı",
  der_Mitgliedsausweis: "üyelik kartı",
  quasi: "neredeyse",
  die_Leseecke: "okuma köşesi",
  geeignet: "uygun",
  die_Bürde: "yük",
  die_Aufteilung: "bölüşüm",
  jemandem_etwas_zuteilen: "birine bir şey atamak",
  im_Uhrzeigersinn: "saat yönünde",
  effizient: "verimli",
  die_Recherche: "araştırma",
  etwas_zusammentragen: "bir şeyi bir araya getirmek",
  die_Paarprüfung: "çiftli sınav",
  semi_formell: "yarı resmi",
  schlimm: "kötü",
  sich_A_etwas_D_stellen: "bir şeyle yüzleşmek",
  sich_austauschen: "fikir alışverişi yapmak",
  etwas_außer_Acht_lassen: "bir şeyi göz ardı etmek",
  sich_D_etwas_A_vornehmen: "bir şeyi planlamak",
  etwas_vor_Augen_haben: "bir şeyi gözünde canlandırmak",
  zweifellos: "şüphesiz",
  die_Bude: "ev (günlük dil)",
  aufgerissen: "kocaman açılmış",
  nicht_aus_dem_Staunen_herauskommen: "hayretten kurtulamamak",
  bodenhoch: "yerden tavana kadar",
  die_Schiebetür: "sürgülü kapı",
  scherzhaft: "şaka yollu",
  wohlhabend: "varlıklı",
  die_Sofalandschaft: "köşe takımı",
  etwas_zieren: "bir şeyi süslemek",
  sich_ergeben: "ortaya çıkmak",
  etwas_einwerfen: "araya söz sokmak",
  jemanden_verschlagen_an_einen_Ort: "birini bir yere savurmak",
  der_Tapetenwechsel: "dekor değişikliği",
  vertraut: "aşina",
  auf_Schritt_und_Tritt: "her adımda",
  lange: "uzun süre",
  mühelos: "zahmetsizce",
  erstaunlich: "şaşırtıcı",
  über_Gott_und_die_Welt: "her şey hakkında",
  überwältigend: "ezici",
  etwas_sicherstellen: "bir şeyi garanti etmek",
  warmherzig: "sıcakkanlı",
  jemanden_verlassen: "birini terk etmek",
  das_Wohlergehen: "refah",
  einsam: "yalnız",
  den_Haushalt_schmeißen: "evi çekip çevirmek",
  verständnisvoll: "anlayışlı",
  etwas_jemanden_loslassen: "bir şeyi/birini bırakmak",
  nicht_so_weit: "o kadar ileri gitmemek",
  wortlos: "sessizce",
  Hals_über_Kopf: "baş üstü",
  versinken: "batmak",
  die_Mitternacht: "gece yarısı",
  gähnen: "esnemek",
  wie_im_Flug: "çok hızlı",
  apropos: "bu arada",
  die_Gastfreundschaft: "misafirperverlik",
  losmüssen: "gitmek zorunda olmak",
  ebenfalls: "aynı şekilde",
  verschmitzt: "muzip",
  etwas_ablehnen: "bir şeyi reddetmek",
  Schmetterlinge_im_Bauch_haben: "aşık olmak",
  liebenswert: "sevimli",
  wehtun: "acımak",
  die_Pfeilspitze: "ok ucu",
  Gefühle_für_jemanden_hegen: "birine karşı his beslemek",
  erfüllend: "tatmin edici",
  jemanden_aus_dem_TagTraum_reißen: "birinin hayalini yıkmak",
  nichts_anderes_übrigbleiben: "başka çare kalmamak",
  morgendlich: "sabahları",
  das_Paradebeispiel: "tipik örnek",
  die_Semmel: "ekmek (Bavyera)",
  der_Leberkäse: "bir tür sosis",
  die_Trinkschokolade: "sıcak çikolata",
  der_Magen_knurrt: "mide guruldaması",
  etwas_zuordnen: "bir şeyi ilişkilendirmek",
  überzeugt: "ikna olmuş",
  das_Mysterium: "gizem",
  jemanden_ansprechen: "biriyle konuşmaya başlamak",
  der_Augenblick: "an",
  der_Vierersitz: "dört kişilik koltuk",
  knapp: "dar",
  verzwickt: "karmaşık",
  sich_trüben: "kararmak",
  seinen_Ohren_nicht_trauen: "duyduğuna inanamamak",
  böse: "kötü",
  die_Geste: "jest",
  passen: "uymak",
  komplett_aus_dem_Häuschen_sein: "çok heyecanlanmak",
  Pfiat_di: "Hoşça kal! (Bavyera)",
  die_Initiative_ergreifen: "inisiyatif almak",
  doppelt: "iki kat",
  die_Eigeninitiative: "kendi inisiyatifi",
  planmäßig: "plana göre",
  der_Charme: "çekicilik",
  jubeln: "sevinç çığlıkları atmak",
  der_Freudentanz: "sevinç dansı",
  in_Erinnerungen_schwelgen: "anılara dalmak",
  die_Muße: "keyif",
  die_Dissertation: "doktora tezi",
  spannend: "heyecan verici",
  der_Nervenzusammenbruch: "sinir krizi",
  amüsiert: "eğlenceli",
  der_Schützling: "himaye edilen kişi",
  die_URL: "internet adresi",
  gezielt: "hedefli",
  realistisch: "gerçekçi",
  ein_besseres_Bild_bekommen: "daha iyi bir fikir edinmek",
  im_Prinzip: "prensip olarak",
  etwas_durchgehen: "bir şeyi gözden geçirmek",
  Es_ist_so_weit: "zamanı geldi",
  parallel: "paralel",
  hypermotiviert: "aşırı motive",
  etwas_verschwenden: "bir şeyi israf etmek",
  ein_straffer_Zeitplan: "sıkı bir program",
  eifrig: "hevesli",
  sich_ablenken_lassen: "dikkati dağılmak",
  einen_soliden_Grundstein_legen: "sağlam bir temel atmak",
  von_dannen_gehen: "oradan ayrılmak",
  der_Vorhang: "perde",
  etwas_zuziehen: "bir şeyi kapatmak",
  die_Dosis: "doz",
  etwas_integrieren: "bir şeyi dahil etmek",
  gesagt_getan: "sözünü tutmak",
  am_Stück: "aralıksız",
  sich_D_etwas_A_zu_Herzen_nehmen: "bir öğüdü ciddiye almak",
  etwas_ausbreiten: "bir şeyi yaymak",
  optimal: "en uygun",
  das_Vorwissen: "ön bilgi",
  fasziniert: "büyülenmiş",
  die_Scheidung: "boşanma",
  die_Anwältin: "avukat (kadın)",
  jemandem_etwas_überlassen: "bir şeyi birine bırakmak",
  das_juristische_Schriftstück: "hukuki belge",
  die_Leitung: "hat (telefon)",
  sein_Zelt_Camp_aufschlagen_ohnehin: "kamp kurmak",
  etwas_verheimlichen: "bir şeyi gizlemek",
  eintreffen: "varmak",
  nach_und_nach: "yavaş yavaş",
  etwas_Revue_passieren_lassen: "bir şeyi gözden geçirmek",
  drankommen: "sırası gelmek",
  das_Übliche: "her zamanki",
  etwas_abdecken: "bir şeyi kapsamamak",
  etwas_abfragen: "bir şeyi sormak",
  sich_zu_Wort_melden: "söz almak",
  sich_einen_Überblick_verschaffen: "genel bir bakış edinmek",
  etwas_überfliegen: "bir şeyi göz atmak",
  das_Schlüsselwort: "anahtar kelime",
  abstrakt: "soyut",
  relevant: "önemli",
  Es_erscheint_mir: "Bana göre…",
  im_Grunde: "aslında",
  bewährt: "denenmiş",
  sich_etwas_rekapitulieren: "bir şeyi özetlemek",
  die_Parallele: "paralel",
  die_Runde: "tur",
  die_Rückmeldung: "geri bildirim",
  sich_beklagen: "şikayet etmek",
  die_Leseratte: "kitap kurdu",
  etwas_einreichen: "bir şeyi teslim etmek",
  zahlreich: "çok sayıda",
  mit_leeren_Händen: "eli boş",
  am_Start_sein: "hazır olmak",
  etwas_aufdrehen: "bir şeyi açmak (ses)",
  jemanden_retten: "birini kurtarmak",
  gesammelt: "toplu",
  die_Papierschachtel: "karton kutu",
  die_Aufschrift: "yazı",
  Das_ist_doch_nicht_nötig: "Buna gerek yok!",
  gerührt: "duy",
  selbstverständlich: "tabii ki",
  die_Abwechslung: "değişiklik",
  mitsingenLASEN: "birlik",
  gefühlvoll: "duygulu",
  etwas_nachlesen: "bir şeyi tekrar okumak",
  etwas_erwähnen: "bir şeyden bahsetmek",
  tatsächlich: "gerçekten",
  der_Begriff: "terim",
  der_öffentliche_Rundfunk: "kamu yayıncılığı",
  die_Geschmackssache: "bir zevk meselesi",
  der_Heimatfilm: "yöresel film",
  in_Ruhe: "sakin bir şekilde",
  besagt: "söz konusu",
  etwas_ausklingen: "bir şeyi yavaşça bitirmek",
  aufgeregt: "heyecanlı",
  die_Einleitung: "giriş",
  fleißige_Biene: "çalışkan arı (mecazi)",
  das_Gehör: "işitme",
  etwas_jemanden_schulen: "bir şeyi/birini eğitmek",
  jemanden_loben: "birini övmek",
  versorgt: "bakımlı",
  Wunder_wirken: "mucizeler yaratmak",
  die_Umgebung: "çevre",
  das_Geräusch: "ses",
  etwas_gestehen: "bir şeyi itiraf etmek",
  etwas_anmerken: "bir şeye dikkat çekmek",
  etwas_auf_dem_Herzen_haben: "içini dökmek istemek",
  alle_Hände_voll_zu_tun_haben: "çok meşgul olmak",
  mittlerweile: "bu sırada",
  steinig: "taşlı",
  das_Hindernis: "engel",
  obendrein: "üstelik",
  mau: "kötü",
  stets: "daima",
  mit_Abstand: "açık ara",
  empört: "öfkeli",
  verwirrt: "kafası karışık",
  etwas_erraten: "bir şeyi tahmin etmek",
  weder_noch: "ne … ne de",
  der_Kumpel: "arkadaş",
  haufenweise: "yığınla",
  seine_Batterien_aufladen: "enerji toplamak",
  das_Gläschen: "küçük bardak",
  die_Geduld: "sabır",
  etwas_kaum_erwarten_können: "bir şeyi sabırsızlıkla beklemek",
  verregnet: "yağmurlu",
  wehen: "esmek",
  gebrochen: "kırık (dil)",
  waschecht: "tam anlamıyla",
  das_Bauwerk: "yapı",
  das_Päuschen: "küçük mola",
  kichern: "kıkırdamak",
  das_Notfalltreffen: "acil toplantı",
  etwas_vernachlässigen: "bir şeyi ihmal etmek",
  das_Feld: "alan",
  fluchen: "küfretmek",
  das_Schimpfwort: "küfür",
  etwas_überspielen: "bir şeyi gizlemek",
  keck: "şımarık",
  charmant: "çekici",
  sich_verabschieden: "veda etmek",
  mit_rauchenden_Köpfen_rauchendem_Kopf: "kafa patlatmak",
  die_Anspannung: "gerginlik",
  wie_ein_Häufchen_Elend: "perişan halde",
  der_Schwachpunkt: "zayıf nokta",
  den_Wald_vor_lauter_Bäumen_nicht_sehen: "ağaçlardan ormanı görememek",
  die_Reihenfolge: "sıralama",
  etwas_erhalten: "bir şeyi almak",
  gespannt: "meraklı",
  schwerfallen: "zor gelmek",
  die_Schweißperle: "ter damlası",
  die_Stirn: "alın",
  etwas_ankündigen: "bir şeyi duyurmak",
  unangekündigt: "habersiz",
  entsetzt: "dehşete düşmüş",
  das_Ereignis: "olay",
  Gas_geben: "gaz vermek",
  einen_kühlen_Kopf_bewahren: "soğukkanlılığını korumak",
  sich_D_etwas_D_gönnen: "kendine bir şey çıkarmak",
  schummeln: "kopya çekmek",
  durchfallen: "sınavdan kalmak",
  sich_in_die_Hose_machen: "korkudan altına yapmak",
  zittern: "titremek",
  etwas_auf_Lager_haben: "bir şeyi hazır bulundurmak",
  weise: "bilge",
  die_Lücke: "boşluk",
  die_Führungskraft: "yönetici",
  der_Seufzer: "iç çekmek",
  knacken: "çıtırdamak",
  die_Beschwerde: "şikayet",
  fix_und_fertig: "bitkin",
  die_Stimme: "ses",
  geschlechtergerechte_Sprache: "cinsiyet eşitliğine duyarlı dil",
  die_Impfung: "aşı",
  kuschelig: "rahat",
  Da_müssen_wir_jetzt_durch: "Bunu atlatmalıyız!",
  der_Stadtbummel: "şehir turu",
  mithalten_können: "ayak uydurmak",
  übertreiben: "abartmak",
  eindrucksvoll: "etkileyici",
  hin_und_wieder: "arada bir",
  die_Stimmung_aufhellen: "neşelendirmek",
  satt: "tok",
  in_der_Lage_sein: "muktedir olmak",
  ewig: "sonsuz",
  geheime_Informationen: "gizli bilgiler",
  etwas_aus_jemandem_herausquetschen: "birinden zorla bilgi almak",
  der_Kerl: "adam",
  verliebt: "aşık",
  über_etwas_jemanden_hinweg_sein: "bir şeyi/birini atlatmak",
  eine_Menge: "bir sürü",
  schlendern: "ağır ağır yürümek",
  die_Shoppingmeile: "alışveriş caddesi",
  die_Absicht: "niyet",
  etwas_ansetzen: "bir şeyi planlamak",
  auflegen: "telefonu kapatmak",
  schlucken: "yutkunmak",
  überwiegen: "ağır basmak",
  jemandem_ist_nicht_nach_etwas_zumute: "birinin (canı bir şey) istemek",
  ununterbrochen: "aralıksız",
  flehen: "yalvarmak",
  etwas_verkraften: "bir şeyi atlatmak",
  die_Leistung: "performans",
  sich_D_Mühe_geben: "çaba göstermek",
  zweitrangig: "ikinci derecede",
  fortfahren: "devam etmek",
  über_sich_selbst_hinauswachsen: "kendini aşmak",
  bleich: "solgun",
  jemandem_ist_wird_schwindelig: "başı dönmek",
  etwas_ausgleichen: "bir şeyi dengelemek",
  der_Durchschnitt: "ortalama",
  reichen: "yeterli olmak",
  zaghaft: "ürkek",
  die_Träne: "gözyaşı",
  die_Wange: "yanak",
  jemanden_trösten: "birini teselli etmek",
  gestrichen_sein: "iptal olmak",
  fassungslos: "şaşkın",
  etwas_verdauen: "bir şeyi hazmetmek",
  etwas_anpacken: "bir şeye el atmak",
  der_Fleiß: "çalışkanlık",
  übernachten: "gecelemek",
  eine_Nachtschicht_einlegen: "gece vardiyası yapmak",
  etwas_erstellen: "bir şey oluşturmak",
  sehnsüchtig: "hasretle",
  ebnen: "yol açmak",
  die_Ungewissheit: "belirsizlik",
  ein_Ende_nehmen: "sona ermek",
  der_Absender: "gönderen",
  etwas_hauchen: "fısıldamak",
  wie_von_der_einer_Tarantel_gestochen: "ani hareket etmek",
  etwas_durchstehen: "bir şeyi atlatmak",
  die_Eigenschaft: "özellik",
  zu_Wort_kommen: "söz almak",
  quietschen: "gıcırdamak",
  die_Warteschleife: "bekletme hattı",
  den_Tränen_nahe_sein: "ağlamak üzere olmak",
  die_Ohnmacht: "bayılma",
  zappelig: "hareketli",
  stürmen: "hücum etmek",
  sich_auf_etwas_jemanden_schmeißen: "bir şeye/birine atılmak",
  senken_Boletile: "alçalt",
  jemanden_reinlegen: "birini kandırmak",
  aufspringen: "fırlamak",
  bis_zum_Umfallen: "yıkılana kadar",
  Früchte_tragen: "meyve vermek",
  der_Einsatz: "çaba",
  sich_aus_etwas_lösen: "bir şeyden kurtulmak",
  sich_festhalten: "sıkıca tutunmak",
  die_Unterlage: "belge",
  eingeschüchtert: "gözü korkmuş",
  völlig: "tamamen",
  schnurstracks: "dosdoğru",
  etwas_für_sich_behalten: "bir şeyi kendine saklamak",
  sich_D_den_Bauch_vollschlagen: "karnını doyurmak",
  jemandem_raucht_der_Kopf: "kafa yormak",
  mahnen: "uyarmak",
  verstummen: "susmak",
  sich_Blicke_zuwerfen: "bakışmak",
  überfordert: "aşırı yüklenmiş",
  der_Prüfung: "sınava giren",
  erleichtert: "rahatlamış",
  das_Gemurmel: "mırıltı",
  Stille_herrscht: "sessizlik hüküm sürüyor",
  pauken: "çalışmak",
  fehlerhaft: "hatalı",
  sich_etwas_ins_Gedächtnis_rufen: "hatırlamak",
  abschneiden: "sonuç almak",
  etwas_stapeln: "bir şeyi üst üste koymak",
  das_Pult: "kürsü",
  herausragen: "dışarı çıkmak",
  die_Thermosflasche: "termos",
  riechen: "kokmak",
  verhungern: "açlıktan ölmek",
  schließlich: "sonuçta",
  das_Lebenszeichen: "hayat belirtisi",
  sich_melden: "haber vermek",
  der_Abstand: "mesafe",
  unaufhörlich: "durmaksızın",
  der_Ausweis: "kimlik",
  bedauerlicherweise: "ne yazık ki",
  es_gibt_kein_Zurück_mehr: "geri dönüş yok",
  erschüttert: "sarsılmış",
  der_Bogen: "kağıt",
  das_Murmeln: "mırıldanma",
  etwas_ist_jemandem_ins_Gesicht_geschrieben: "yüzünden okunmak",
  kein_Unmensch_sein: "insafsız olmamak",
  sämtliche: "tüm",
  abschalten: "kendini kapatmak",
  fabelhaft: "harika",
  jemanden_zusammenschweißen: "birbirine bağlamak",
  etwas_durchmachen: "bir şeyi yaşamak",
  seinen_Platz_einnehmen: "yerini almak",
  erscheinen: "ortaya çıkmak",
  das_Schicksal: "kader",
  riesig: "devasa",
  sich_etwas_durchlesen: "bir şeyi dikkatle okumak",
  etwas_ahnen: "bir şeyi sezmek",
  sorgfältig: "özenli",
  etwas_spüren: "bir şeyi hissetmek",
  sich_gestalten: "şekillenmek",
  ausfallen: "sonuçlanmak",
  fließen: "akmak",
  der_Rückschlag: "gerileme",
  jemanden_völlig_aus_der_Bahn_werfen: "birini altüst etmek",
  ein_Opfer_bringen: "fedakarlık yapmak",
  die_Decke: "battaniye",
  leiden: "acı çekmek",
  ausgelaugt: "tükenmiş",
  jemandem_etwas_erlassen: "birini bir şeyden muaf tutmak",
  sich_unterhalten: "sohbet etmek",
  der_Schluck: "yudum",
  eine_Party_schmeißen: "parti vermek",
  etwas_ausschlagen: "bir şeyi reddetmek",
  schwärmen: "övmek",
};

const WordSpeaker = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [words, setWords] = useState([]);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [synth, setSynth] = useState(null);
  const [voices, setVoices] = useState([]);

  const loadVoices = useCallback(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const availableVoices = window.speechSynthesis.getVoices();
      const germanVoices = availableVoices.filter(
        (voice) =>
          voice.lang.startsWith("de") ||
          voice.name.toLowerCase().includes("german")
      );
      setVoices(germanVoices);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      setSynth(window.speechSynthesis);
      window.speechSynthesis.onvoiceschanged = loadVoices;
      loadVoices();
    }
  }, [loadVoices]);

  useEffect(() => {
    const initializedWords = Object.entries(wordsData).map(([de, tr]) => ({
      german: de.replace(/_/g, " "),
      turkish: tr.split(", ")[0],
    }));
    setWords(initializedWords);
  }, []);

  useEffect(() => {
    if (
      words.length > 0 &&
      currentWordIndex < words.length &&
      voices.length > 0
    ) {
      speakWord(words[currentWordIndex].german);
      generateOptions(words[currentWordIndex]);
    }
  }, [currentWordIndex, words, voices]);

  const generateOptions = useCallback(
    (currentWord) => {
      const incorrectOptions = words
        .filter((word) => word.german !== currentWord.german)
        .map((word) => word.turkish)
        .sort(() => 0.5 - Math.random())
        .slice(0, 1);

      const allOptions = [currentWord.turkish, ...incorrectOptions];
      setOptions(allOptions.sort(() => 0.5 - Math.random()));
    },
    [words]
  );

  const speakWord = useCallback(
    async (word) => {
      try {
        if (!synth || voices.length === 0) return;

        synth.cancel();
        const utterance = new SpeechSynthesisUtterance();

        // Doğal ses optimizasyonları
        utterance.text = word;
        utterance.voice =
          voices.find(
            (v) => v.lang === "de-DE" && v.name.includes("Natural")
          ) || voices[0];

        // İnsan konuşmasına yakın parametreler
        utterance.rate = 0.95;
        utterance.pitch = 1.05;
        utterance.volume = 0.8;
        utterance.lang = "de-DE";

        // Konuşma ritmi için noktalama optimizasyonu
        utterance.text = word.replace(/([.,])/g, "$1 ");

        // Ses efektleri
        utterance.onstart = () => {
          document.documentElement.style.setProperty(
            "--wave-animation",
            "running"
          );
        };

        utterance.onend = () => {
          document.documentElement.style.setProperty(
            "--wave-animation",
            "paused"
          );
        };

        synth.speak(utterance);
      } catch (error) {
        console.error("Ses hatası:", error);
        alert("Ses çalınamadı. Lütfen tarayıcı izinlerini kontrol edin.");
      }
    },
    [synth, voices]
  );

  const handleAnswer = (selectedAnswer) => {
    const correctAnswer = words[currentWordIndex]?.turkish;
    if (!correctAnswer) return;

    if (selectedAnswer === correctAnswer) {
      setScore((prev) => prev + 1);
      setShowFeedback(true);
      setTimeout(() => {
        setShowFeedback(false);
        setCurrentWordIndex((prev) =>
          prev < words.length - 1 ? prev + 1 : prev
        );
      }, 1200);
    } else {
      setShowFeedback(true);
      setTimeout(() => setShowFeedback(false), 1200);
    }
  };

  if (words.length === 0) return <div className="p-4">Yükleniyor...</div>;

  if (currentWordIndex >= words.length) {
    return (
      <div className="p-4 text-xl text-center text-green-600 bg-white rounded-lg shadow-lg mx-4">
        <div className="animate-bounce mb-4">🎉</div>
        Tebrikler! Tüm kelimeleri tamamladınız!
        <div className="mt-2 text-2xl font-bold">
          Skor: {score}/{words.length}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 p-8">
      <style>{`
        @keyframes wave {
          0% { transform: scaleY(1); }
          50% { transform: scaleY(1.5); }
          100% { transform: scaleY(1); }
        }
        .wave-animation path {
          animation: wave 0.8s ease-in-out infinite;
          animation-play-state: var(--wave-animation, paused);
        }
      `}</style>

      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-6 transition-all duration-300 hover:shadow-2xl">
        {voices.length === 0 && (
          <div className="mb-4 p-3 bg-red-100 rounded-lg text-red-700 border border-red-300 animate-pulse">
            ⚠️ Almanca ses paketi bulunamadı!
            <br />
            <span className="text-sm">
              macOS: Sistem Tercihleri → Erişilebilirlik → Sesli İçerik → Sesler
            </span>
          </div>
        )}

        <div className="flex justify-between items-center mb-6">
          <div className="text-gray-500 text-sm font-medium">
            📖 Kelime {currentWordIndex + 1}/{words.length}
          </div>
          <div className="text-blue-600 font-bold text-lg bg-blue-50 px-3 py-1 rounded-full">
            🏅 {score}
          </div>
        </div>

        <div className="mb-6 text-center">
          <button
            onClick={() => speakWord(words[currentWordIndex].german)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full 
              shadow-lg transition-all duration-300 transform hover:scale-105
              flex items-center justify-center gap-3 mx-auto relative"
          >
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))" }}
            >
              <path
                fill="currentColor"
                d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
              />
            </svg>
            <span className="text-lg">Dinle</span>
          </button>
        </div>

        <div className="space-y-3">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              disabled={showFeedback}
              className={`w-full p-4 text-lg text-left rounded-xl transition-all duration-300
                ${
                  showFeedback
                    ? option === words[currentWordIndex].turkish
                      ? "bg-green-500 text-white shadow-green"
                      : "bg-red-500 text-white shadow-red"
                    : "bg-gray-50 hover:bg-blue-50 shadow-md hover:shadow-lg"
                }`}
              style={{
                transform: showFeedback
                  ? option === words[currentWordIndex].turkish
                    ? "translateX(5px)"
                    : "translateX(-5px)"
                  : "none",
              }}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WordSpeaker;
