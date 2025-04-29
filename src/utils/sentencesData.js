const sentencesData = [
  {
    category: "Nominativ",
    subcategories: [
      {
        subcategory: "Maskulin (der)",
        sentences: [
          {
            de: "Der Mann, der dort steht, ist mein Vater.",
            tr: "Orada duran adam benim babam.",
          },
          {
            de: "Der Lehrer, der gestern krank war, unterrichtet heute wieder.",
            tr: "Dün hasta olan öğretmen bugün tekrar ders veriyor.",
          },
          {
            de: "Wir kennen den Arzt, der im Krankenhaus arbeitet.",
            tr: "Hastanede çalışan doktoru tanıyoruz.",
          },
          {
            de: "Der Student, der fleißig lernt, wird die Prüfung bestehen.",
            tr: "Çalışkan öğrenci sınavı geçecek.",
          },
          {
            de: "Der Hund, der im Garten spielt, gehört meinem Nachbarn.",
            tr: "Bahçede oynayan köpek komşuma ait.",
          },
          {
            de: "Der Schauspieler, der in diesem Film mitspielt, ist sehr berühmt.",
            tr: "Bu filmde oynayan aktör çok ünlü.",
          },
          {
            de: "Kennst du den Mann, der gerade angekommen ist?",
            tr: "Yeni gelen adamı tanıyor musun?",
          },
          {
            de: "Der Sportler, der die Goldmedaille gewonnen hat, kommt aus Deutschland.",
            tr: "Altın madalya kazanan sporcu Almanya'dan geliyor.",
          },
          {
            de: "Der Junge, der dort singt, hat eine schöne Stimme.",
            tr: "Orada şarkı söyleyen çocuğun güzel bir sesi var.",
          },
          {
            de: "Der Tourist, der die Fotos macht, spricht kein Deutsch.",
            tr: "Fotoğraf çeken turist Almanca konuşmuyor.",
          },
        ],
      },
      {
        subcategory: "Feminin (die)",
        sentences: [
          {
            de: "Die Frau, die dort arbeitet, ist meine Schwester.",
            tr: "Orada çalışan kadın benim kız kardeşim.",
          },
          {
            de: "Die Lehrerin, die sehr streng ist, gibt viele Hausaufgaben.",
            tr: "Çok sert olan öğretmen çok ev ödevi veriyor.",
          },
          {
            de: "Ich kenne die Ärztin, die mir geholfen hat.",
            tr: "Bana yardım eden doktoru tanıyorum.",
          },
          {
            de: "Die Studentin, die aus Japan kommt, spricht gut Deutsch.",
            tr: "Japonya'dan gelen öğrenci iyi Almanca konuşuyor.",
          },
          {
            de: "Die Katze, die auf dem Dach sitzt, gehört unseren Nachbarn.",
            tr: "Çatıda oturan kedi komşumuzun.",
          },
          {
            de: "Die Schauspielerin, die in diesem Film die Hauptrolle spielt, hat einen Oscar gewonnen.",
            tr: "Bu filmde başrolü oynayan aktris bir Oscar kazandı.",
          },
          {
            de: "Die Politikerin, die gestern eine Rede gehalten hat, ist sehr populär.",
            tr: "Dün konuşma yapan politikacı çok popüler.",
          },
          {
            de: "Die Frau, die neben mir wohnt, ist Musikerin.",
            tr: "Yanımda oturan kadın müzisyen.",
          },
          {
            de: "Die Sängerin, die bei dem Konzert aufgetreten ist, hat eine wunderbare Stimme.",
            tr: "Konserde sahne alan şarkıcının harika bir sesi var.",
          },
          {
            de: "Die Freundin, die mir immer hilft, kommt heute zu Besuch.",
            tr: "Bana her zaman yardım eden arkadaşım bugün ziyarete geliyor.",
          },
        ],
      },
      {
        subcategory: "Neutral (das)",
        sentences: [
          {
            de: "Das Kind, das dort spielt, ist mein Neffe.",
            tr: "Orada oynayan çocuk yeğenim.",
          },
          {
            de: "Das Buch, das auf dem Tisch liegt, gehört mir.",
            tr: "Masada duran kitap bana ait.",
          },
          {
            de: "Das Auto, das vor dem Haus parkt, ist neu.",
            tr: "Evin önünde park eden araba yeni.",
          },
          {
            de: "Das Mädchen, das lange Haare hat, ist meine Cousine.",
            tr: "Uzun saçlı kız kuzinim.",
          },
          {
            de: "Das Restaurant, das gerade eröffnet hat, ist sehr gut.",
            tr: "Yeni açılan restoran çok iyi.",
          },
          {
            de: "Das Handy, das ich gestern gekauft habe, funktioniert nicht richtig.",
            tr: "Dün satın aldığım telefon düzgün çalışmıyor.",
          },
          {
            de: "Das Hotel, das am Strand liegt, ist ausgebucht.",
            tr: "Plajda bulunan otel tamamen dolu.",
          },
          {
            de: "Das Gemälde, das an der Wand hängt, ist sehr wertvoll.",
            tr: "Duvarda asılı olan tablo çok değerli.",
          },
          {
            de: "Das Land, das wir letztes Jahr besucht haben, war wunderschön.",
            tr: "Geçen yıl ziyaret ettiğimiz ülke harikaydı.",
          },
          {
            de: "Das Geschenk, das du mir gegeben hast, hat mir sehr gefallen.",
            tr: "Bana verdiğin hediye çok hoşuma gitti.",
          },
        ],
      },
      {
        subcategory: "Plural (die)",
        sentences: [
          {
            de: "Die Leute, die dort warten, sind meine Kollegen.",
            tr: "Orada bekleyen insanlar meslektaşlarım.",
          },
          {
            de: "Die Bücher, die ich gelesen habe, waren interessant.",
            tr: "Okuduğum kitaplar ilginçti.",
          },
          {
            de: "Die Kinder, die im Garten spielen, sind sehr laut.",
            tr: "Bahçede oynayan çocuklar çok gürültülü.",
          },
          {
            de: "Die Häuser, die neu gebaut wurden, sind sehr modern.",
            tr: "Yeni inşa edilen evler çok modern.",
          },
          {
            de: "Die Filme, die wir gesehen haben, waren langweilig.",
            tr: "İzlediğimiz filmler sıkıcıydı.",
          },
          {
            de: "Die Studenten, die fleißig lernen, bestehen die Prüfung.",
            tr: "Çalışkan öğrenciler sınavı geçerler.",
          },
          {
            de: "Die Lehrer, die an dieser Schule unterrichten, sind sehr kompetent.",
            tr: "Bu okulda öğreten öğretmenler çok yetkin.",
          },
          {
            de: "Die Hotels, die am Strand liegen, sind im Sommer ausgebucht.",
            tr: "Plajda bulunan oteller yazın tamamen dolu.",
          },
          {
            de: "Die Geschäfte, die sonntags geöffnet haben, sind selten.",
            tr: "Pazar günleri açık olan mağazalar nadir.",
          },
          {
            de: "Die Freunde, die mich besuchen, bringen immer Geschenke mit.",
            tr: "Beni ziyaret eden arkadaşlar her zaman hediyeler getirirler.",
          },
        ],
      },
    ],
  },
  {
    category: "Akkusativ",
    subcategories: [
      {
        subcategory: "Maskulin (den)",
        sentences: [
          {
            de: "Der Mann, den ich gestern getroffen habe, ist Arzt.",
            tr: "Dün karşılaştığım adam doktor.",
          },
          {
            de: "Der Film, den wir gesehen haben, war sehr spannend.",
            tr: "İzlediğimiz film çok heyecanlıydı.",
          },
          {
            de: "Der Apfel, den ich gegessen habe, war sauer.",
            tr: "Yediğim elma ekşiydi.",
          },
          {
            de: "Der Brief, den ich geschrieben habe, ist wichtig.",
            tr: "Yazdığım mektup önemli.",
          },
          {
            de: "Der Hund, den wir gestern adoptiert haben, ist sehr lieb.",
            tr: "Dün sahiplendiğimiz köpek çok sevimli.",
          },
          {
            de: "Der Computer, den ich gekauft habe, funktioniert nicht.",
            tr: "Satın aldığım bilgisayar çalışmıyor.",
          },
          {
            de: "Der Wein, den wir getrunken haben, war ausgezeichnet.",
            tr: "İçtiğimiz şarap mükemmeldi.",
          },
          {
            de: "Der Lehrer, den wir respektieren, ist streng aber fair.",
            tr: "Saygı duyduğumuz öğretmen katı ama adil.",
          },
          {
            de: "Der Kollege, den ich dir vorgestellt habe, arbeitet jetzt in Berlin.",
            tr: "Sana tanıttığım meslektaşım şimdi Berlin'de çalışıyor.",
          },
          {
            de: "Der Fußballer, den alle bewundern, hat drei Tore geschossen.",
            tr: "Herkesin hayran olduğu futbolcu üç gol attı.",
          },
        ],
      },
      {
        subcategory: "Feminin (die)",
        sentences: [
          {
            de: "Die Frau, die ich liebe, ist meine beste Freundin.",
            tr: "Sevdiğim kadın en iyi arkadaşım.",
          },
          {
            de: "Die Musik, die ich höre, ist klassisch.",
            tr: "Dinlediğim müzik klasik.",
          },
          {
            de: "Die Pizza, die wir bestellt haben, schmeckt gut.",
            tr: "Sipariş ettiğimiz pizza lezzetli.",
          },
          {
            de: "Die Stadt, die wir besucht haben, war wunderschön.",
            tr: "Ziyaret ettiğimiz şehir harikaydı.",
          },
          {
            de: "Die Geschichte, die er erzählt hat, kenne ich schon.",
            tr: "Onun anlattığı hikayeyi zaten biliyorum.",
          },
          {
            de: "Die Tasche, die ich gekauft habe, ist aus Leder.",
            tr: "Satın aldığım çanta deriden yapılmış.",
          },
          {
            de: "Die Kamera, die ich benutze, ist sehr teuer.",
            tr: "Kullandığım kamera çok pahalı.",
          },
          {
            de: "Die Sprache, die ich lerne, ist schwierig.",
            tr: "Öğrendiğim dil zor.",
          },
          {
            de: "Die Torte, die meine Mutter gebacken hat, schmeckt fantastisch.",
            tr: "Annemin pişirdiği pasta harika tadıyor.",
          },
          {
            de: "Die Blume, die du mir geschenkt hast, ist verblüht.",
            tr: "Bana hediye ettiğin çiçek soldu.",
          },
        ],
      },
      {
        subcategory: "Neutral (das)",
        sentences: [
          {
            de: "Das Buch, das ich gelesen habe, war interessant.",
            tr: "Okuduğum kitap ilginçti.",
          },
          {
            de: "Das Auto, das wir gekauft haben, ist rot.",
            tr: "Satın aldığımız araba kırmızı.",
          },
          {
            de: "Das Haus, das wir mieten, ist alt.",
            tr: "Kiraladığımız ev eski.",
          },
          {
            de: "Das Bild, das du gemalt hast, gefällt mir.",
            tr: "Boyadığın resim hoşuma gidiyor.",
          },
          {
            de: "Das Geschenk, das ich bekommen habe, ist schön.",
            tr: "Aldığım hediye güzel.",
          },
          {
            de: "Das Lied, das sie singt, kenne ich.",
            tr: "Onun söylediği şarkıyı biliyorum.",
          },
          {
            de: "Das Kind, das wir adoptiert haben, ist jetzt 10 Jahre alt.",
            tr: "Evlat edindiğimiz çocuk şimdi 10 yaşında.",
          },
          {
            de: "Das Museum, das wir besucht haben, war interessant.",
            tr: "Ziyaret ettiğimiz müze ilginçti.",
          },
          {
            de: "Das Restaurant, das er empfohlen hat, ist geschlossen.",
            tr: "Onun önerdiği restoran kapalı.",
          },
          {
            de: "Das Hotel, das wir gebucht haben, liegt am Strand.",
            tr: "Rezervasyon yaptığımız otel plajda yer alıyor.",
          },
        ],
      },
      {
        subcategory: "Plural (die)",
        sentences: [
          {
            de: "Die Bücher, die ich gekauft habe, sind teuer.",
            tr: "Satın aldığım kitaplar pahalı.",
          },
          {
            de: "Die Leute, die wir eingeladen haben, kommen morgen.",
            tr: "Davet ettiğimiz insanlar yarın gelecek.",
          },
          {
            de: "Die Filme, die wir gesehen haben, waren interessant.",
            tr: "İzlediğimiz filmler ilginçti.",
          },
          {
            de: "Die Briefe, die ich geschrieben habe, wurden verschickt.",
            tr: "Yazdığım mektuplar gönderildi.",
          },
          {
            de: "Die Lieder, die er komponiert hat, sind wunderschön.",
            tr: "Bestelediği şarkılar harika.",
          },
          {
            de: "Die Fotos, die du gemacht hast, sind sehr schön.",
            tr: "Çektiğin fotoğraflar çok güzel.",
          },
          {
            de: "Die Geschenke, die wir bekommen haben, waren überraschend.",
            tr: "Aldığımız hediyeler şaşırtıcıydı.",
          },
          {
            de: "Die Aufgaben, die wir erledigt haben, waren schwierig.",
            tr: "Tamamladığımız görevler zordu.",
          },
          {
            de: "Die Freunde, die wir getroffen haben, waren nett.",
            tr: "Karşılaştığımız arkadaşlar nazikti.",
          },
          {
            de: "Die Probleme, die wir gelöst haben, erschienen anfangs unlösbar.",
            tr: "Çözdüğümüz problemler başlangıçta çözülemez gibi görünüyordu.",
          },
        ],
      },
    ],
  },
  {
    category: "Dativ",
    subcategories: [
      {
        subcategory: "Maskulin (dem)",
        sentences: [
          {
            de: "Der Mann, dem ich geholfen habe, war sehr dankbar.",
            tr: "Yardım ettiğim adam çok minnettardı.",
          },
          {
            de: "Der Lehrer, dem ich die Frage gestellt habe, konnte sie nicht beantworten.",
            tr: "Soru sorduğum öğretmen onu cevaplayamadı.",
          },
          {
            de: "Der Freund, dem ich vertraue, hat mich nicht verraten.",
            tr: "Güvendiğim arkadaş beni ele vermedi.",
          },
          {
            de: "Der Junge, dem wir den Weg gezeigt haben, hat sich verirrt.",
            tr: "Yolu gösterdiğimiz çocuk kaybolmuş.",
          },
          {
            de: "Der Arzt, dem ich von meinen Symptomen erzählt habe, hat mich ins Krankenhaus geschickt.",
            tr: "Belirtilerimden bahsettiğim doktor beni hastaneye gönderdi.",
          },
          {
            de: "Der Nachbar, dem wir die Pflanzen gegeben haben, hat sie gut gepflegt.",
            tr: "Bitkileri verdiğimiz komşu onlara iyi baktı.",
          },
          {
            de: "Der Chef, dem ich den Bericht geschickt habe, war zufrieden.",
            tr: "Raporu gönderdiğim patron memnundu.",
          },
          {
            de: "Der Kellner, dem wir ein Trinkgeld gegeben haben, hat sich bedankt.",
            tr: "Bahşiş verdiğimiz garson teşekkür etti.",
          },
          {
            de: "Der Student, dem ich bei der Hausaufgabe geholfen habe, hat die Prüfung bestanden.",
            tr: "Ev ödevinde yardım ettiğim öğrenci sınavı geçti.",
          },
          {
            de: "Der Schriftsteller, dem wir einen Brief geschrieben haben, hat geantwortet.",
            tr: "Mektup yazdığımız yazar cevap verdi.",
          },
        ],
      },
      {
        subcategory: "Feminin (der)",
        sentences: [
          {
            de: "Die Frau, der ich geholfen habe, war sehr dankbar.",
            tr: "Yardım ettiğim kadın çok minnettardı.",
          },
          {
            de: "Die Lehrerin, der ich die Frage gestellt habe, konnte sie beantworten.",
            tr: "Soru sorduğum öğretmen onu cevaplayabildi.",
          },
          {
            de: "Die Freundin, der ich vertraue, hat mein Geheimnis bewahrt.",
            tr: "Güvendiğim arkadaş sırrımı sakladı.",
          },
          {
            de: "Die Touristen, der wir den Weg gezeigt haben, waren sehr dankbar.",
            tr: "Yolu gösterdiğimiz turistler çok minnettardı.",
          },
          {
            de: "Die Ärztin, der ich von meinen Symptomen erzählt habe, hat mir ein Rezept gegeben.",
            tr: "Belirtilerimden bahsettiğim doktor bana bir reçete verdi.",
          },
          {
            de: "Die Nachbarin, der wir die Katze anvertraut haben, hat gut auf sie aufgepasst.",
            tr: "Kediyi emanet ettiğimiz komşu ona iyi baktı.",
          },
          {
            de: "Die Chefin, der ich den Vorschlag gemacht habe, fand ihn gut.",
            tr: "Öneri yaptığım patron onu beğendi.",
          },
          {
            de: "Die Kollegin, der ich geholfen habe, hat mir später auch geholfen.",
            tr: "Yardım ettiğim meslektaşım daha sonra bana da yardım etti.",
          },
          {
            de: "Die Professorin, der ich meine Arbeit gezeigt habe, war beeindruckt.",
            tr: "Çalışmamı gösterdiğim profesör etkilendi.",
          },
          {
            de: "Die Großmutter, der wir zum Geburtstag gratuliert haben, hat sich sehr gefreut.",
            tr: "Doğum gününü kutladığımız büyükanne çok sevindi.",
          },
        ],
      },
      {
        subcategory: "Neutral (dem)",
        sentences: [
          {
            de: "Das Kind, dem ich die Geschichte vorgelesen habe, ist eingeschlafen.",
            tr: "Hikaye okuduğum çocuk uykuya daldı.",
          },
          {
            de: "Das Restaurant, dem wir eine gute Bewertung gegeben haben, ist jetzt sehr beliebt.",
            tr: "İyi değerlendirme verdiğimiz restoran şimdi çok popüler.",
          },
          {
            de: "Das Museum, dem wir einen Besuch abgestattet haben, war sehr interessant.",
            tr: "Ziyaret ettiğimiz müze çok ilginçti.",
          },
          {
            de: "Das Team, dem wir gratuliert haben, hat das Turnier gewonnen.",
            tr: "Tebrik ettiğimiz takım turnuvayı kazandı.",
          },
          {
            de: "Das Mädchen, dem wir das Geschenk gegeben haben, hat sich sehr gefreut.",
            tr: "Hediyeyi verdiğimiz kız çok sevindi.",
          },
          {
            de: "Das Unternehmen, dem wir vertraut haben, hat uns nicht enttäuscht.",
            tr: "Güvendiğimiz şirket bizi hayal kırıklığına uğratmadı.",
          },
          {
            de: "Das Hotel, dem wir eine E-Mail geschickt haben, hat noch freie Zimmer.",
            tr: "E-posta gönderdiğimiz otelin hala boş odaları var.",
          },
          {
            de: "Das Tier, dem wir geholfen haben, ist jetzt gesund.",
            tr: "Yardım ettiğimiz hayvan şimdi sağlıklı.",
          },
          {
            de: "Das Ministerium, dem wir den Antrag geschickt haben, hat noch nicht geantwortet.",
            tr: "Başvuruyu gönderdiğimiz bakanlık henüz cevap vermedi.",
          },
          {
            de: "Das Baby, dem die Mutter ein Lied vorgesungen hat, schläft jetzt.",
            tr: "Annenin şarkı söylediği bebek şimdi uyuyor.",
          },
        ],
      },
      {
        subcategory: "Plural (denen)",
        sentences: [
          {
            de: "Die Kinder, denen wir Geschenke gekauft haben, waren glücklich.",
            tr: "Hediyeler aldığımız çocuklar mutluydu.",
          },
          {
            de: "Die Lehrer, denen wir für ihre Hilfe gedankt haben, haben sich gefreut.",
            tr: "Yardımları için teşekkür ettiğimiz öğretmenler sevindiler.",
          },
          {
            de: "Die Freunde, denen ich vertraue, haben mich nicht enttäuscht.",
            tr: "Güvendiğim arkadaşlar beni hayal kırıklığına uğratmadı.",
          },
          {
            de: "Die Touristen, denen wir den Weg gezeigt haben, waren sehr dankbar.",
            tr: "Yolu gösterdiğimiz turistler çok minnettardı.",
          },
          {
            de: "Die Kollegen, denen wir zum Geburtstag gratuliert haben, haben uns zum Essen eingeladen.",
            tr: "Doğum gününü kutladığımız meslektaşlar bizi yemeğe davet ettiler.",
          },
          {
            de: "Die Nachbarn, denen wir bei dem Umzug geholfen haben, haben uns zum Kaffee eingeladen.",
            tr: "Taşınmada yardım ettiğimiz komşular bizi kahveye davet ettiler.",
          },
          {
            de: "Die Studenten, denen ich die Aufgabe erklärt habe, haben sie verstanden.",
            tr: "Görevi açıkladığım öğrenciler onu anladılar.",
          },
          {
            de: "Die Firmen, denen wir eine E-Mail geschickt haben, haben geantwortet.",
            tr: "E-posta gönderdiğimiz şirketler cevap verdiler.",
          },
          {
            de: "Die Patienten, denen der Arzt Medikamente verschrieben hat, sind jetzt gesund.",
            tr: "Doktorun ilaç yazdığı hastalar şimdi sağlıklı.",
          },
          {
            de: "Die Menschen, denen wir heute begegnet sind, waren alle sehr freundlich.",
            tr: "Bugün karşılaştığımız insanların hepsi çok arkadaş canlısıydı.",
          },
        ],
      },
    ],
  },
  {
    category: "Genitiv",
    subcategories: [
      {
        subcategory: "Maskulin (dessen)",
        sentences: [
          {
            de: "Der Mann, dessen Auto gestohlen wurde, ist verzweifelt.",
            tr: "Arabası çalınan adam çaresiz.",
          },
          {
            de: "Der Schüler, dessen Hausaufgaben immer perfekt sind, ist sehr fleißig.",
            tr: "Ödevleri her zaman mükemmel olan öğrenci çok çalışkan.",
          },
          {
            de: "Der Autor, dessen Buch ich gelesen habe, hat einen neuen Roman veröffentlicht.",
            tr: "Kitabını okuduğum yazar yeni bir roman yayınladı.",
          },
          {
            de: "Der Lehrer, dessen Unterricht interessant ist, ist bei den Schülern beliebt.",
            tr: "Dersi ilginç olan öğretmen öğrenciler arasında popüler.",
          },
          {
            de: "Der Arzt, dessen Praxis in der Nähe ist, hat heute keine Sprechstunde.",
            tr: "Muayenehanesi yakında olan doktorun bugün görüşme saati yok.",
          },
          {
            de: "Der Nachbar, dessen Hund immer bellt, entschuldigt sich oft.",
            tr: "Köpeği her zaman havlayan komşu sık sık özür diliyor.",
          },
          {
            de: "Der Chef, dessen Firma expandiert, sucht neue Mitarbeiter.",
            tr: "Şirketi büyüyen patron yeni çalışanlar arıyor.",
          },
          {
            de: "Der Freund, dessen Rat ich immer schätze, hat mir geholfen.",
            tr: "Tavsiyesine her zaman değer verdiğim arkadaş bana yardım etti.",
          },
          {
            de: "Der Politiker, dessen Rede ich gehört habe, hat viele Anhänger.",
            tr: "Konuşmasını dinlediğim politikacının çok taraftarı var.",
          },
          {
            de: "Der Wissenschaftler, dessen Forschung bahnbrechend ist, hat einen Preis gewonnen.",
            tr: "Araştırması çığır açan bilim insanı bir ödül kazandı.",
          },
        ],
      },
      {
        subcategory: "Feminin (deren)",
        sentences: [
          {
            de: "Die Frau, deren Kind krank ist, bleibt zu Hause.",
            tr: "Çocuğu hasta olan kadın evde kalıyor.",
          },
          {
            de: "Die Lehrerin, deren Unterricht interessant ist, ist bei den Schülern beliebt.",
            tr: "Dersi ilginç olan öğretmen öğrenciler arasında popüler.",
          },
          {
            de: "Die Autorin, deren Buch ich gelesen habe, kommt aus Deutschland.",
            tr: "Kitabını okuduğum yazar Almanya'dan geliyor.",
          },
          {
            de: "Die Ärztin, deren Praxis in der Nähe ist, hat heute keine Sprechstunde.",
            tr: "Muayenehanesi yakında olan doktorun bugün görüşme saati yok.",
          },
          {
            de: "Die Nachbarin, deren Katze verschwunden ist, sucht überall.",
            tr: "Kedisi kaybolan komşu her yerde arıyor.",
          },
          {
            de: "Die Chefin, deren Firma expandiert, sucht neue Mitarbeiter.",
            tr: "Şirketi büyüyen patron yeni çalışanlar arıyor.",
          },
          {
            de: "Die Freundin, deren Rat ich immer schätze, hat mir geholfen.",
            tr: "Tavsiyesine her zaman değer verdiğim arkadaş bana yardım etti.",
          },
          {
            de: "Die Politikerin, deren Rede ich gehört habe, hat viele Anhänger.",
            tr: "Konuşmasını dinlediğim politikacının çok taraftarı var.",
          },
          {
            de: "Die Wissenschaftlerin, deren Forschung bahnbrechend ist, hat einen Preis gewonnen.",
            tr: "Araştırması çığır açan bilim insanı bir ödül kazandı.",
          },
          {
            de: "Die Kollegin, deren Büro neben meinem ist, arbeitet heute von zu Hause.",
            tr: "Ofisi benimkinin yanında olan meslektaşım bugün evden çalışıyor.",
          },
        ],
      },
      {
        subcategory: "Neutral (dessen)",
        sentences: [
          {
            de: "Das Kind, dessen Eltern im Ausland arbeiten, lebt bei seiner Großmutter.",
            tr: "Ebeveynleri yurtdışında çalışan çocuk büyükannesinin yanında yaşıyor.",
          },
          {
            de: "Das Buch, dessen Autor berühmt ist, ist ein Bestseller.",
            tr: "Yazarı ünlü olan kitap bir çok satan.",
          },
          {
            de: "Das Haus, dessen Dach repariert werden muss, ist alt.",
            tr: "Çatısı onarılması gereken ev eski.",
          },
          {
            de: "Das Auto, dessen Motor kaputt ist, steht in der Garage.",
            tr: "Motoru bozuk olan araba garajda duruyor.",
          },
          {
            de: "Das Restaurant, dessen Küche ausgezeichnet ist, ist immer voll.",
            tr: "Mutfağı mükemmel olan restoran her zaman dolu.",
          },
          {
            de: "Das Land, dessen Wirtschaft wächst, zieht viele Investoren an.",
            tr: "Ekonomisi büyüyen ülke birçok yatırımcıyı çekiyor.",
          },
          {
            de: "Das Unternehmen, dessen Produkte weltweit verkauft werden, hat seinen Sitz in Berlin.",
            tr: "Ürünleri dünya çapında satılan şirketin merkezi Berlin'de.",
          },
          {
            de: "Das Museum, dessen Ausstellungen berühmt sind, wird renoviert.",
            tr: "Sergileri ünlü olan müze yenileniyor.",
          },
          {
            de: "Das Team, dessen Leistung beeindruckend war, wurde belohnt.",
            tr: "Performansı etkileyici olan takım ödüllendirildi.",
          },
          {
            de: "Das Hotel, dessen Service erstklassig ist, hat viele Stammgäste.",
            tr: "Hizmeti birinci sınıf olan otelin çok düzenli müşterisi var.",
          },
        ],
      },
      {
        subcategory: "Plural (deren)",
        sentences: [
          {
            de: "Die Kinder, deren Eltern im Ausland arbeiten, leben bei ihrer Großmutter.",
            tr: "Ebeveynleri yurtdışında çalışan çocuklar büyükannelerinin yanında yaşıyorlar.",
          },
          {
            de: "Die Bücher, deren Autoren berühmt sind, sind Bestseller.",
            tr: "Yazarları ünlü olan kitaplar çok satanlar.",
          },
          {
            de: "Die Häuser, deren Dächer repariert werden müssen, sind alt.",
            tr: "Çatıları onarılması gereken evler eski.",
          },
          {
            de: "Die Autos, deren Motoren kaputt sind, stehen in der Garage.",
            tr: "Motorları bozuk olan arabalar garajda duruyor.",
          },
          {
            de: "Die Restaurants, deren Küchen ausgezeichnet sind, sind immer voll.",
            tr: "Mutfakları mükemmel olan restoranlar her zaman dolu.",
          },
          {
            de: "Die Länder, deren Wirtschaft wächst, ziehen viele Investoren an.",
            tr: "Ekonomileri büyüyen ülkeler birçok yatırımcıyı çekiyor.",
          },
          {
            de: "Die Unternehmen, deren Produkte weltweit verkauft werden, haben ihren Sitz in Berlin.",
            tr: "Ürünleri dünya çapında satılan şirketlerin merkezi Berlin'de.",
          },
          {
            de: "Die Museen, deren Ausstellungen berühmt sind, werden renoviert.",
            tr: "Sergileri ünlü olan müzeler yenileniyor.",
          },
          {
            de: "Die Teams, deren Leistungen beeindruckend waren, wurden belohnt.",
            tr: "Performansları etkileyici olan takımlar ödüllendirildi.",
          },
          {
            de: "Die Hotels, deren Service erstklassig ist, haben viele Stammgäste.",
            tr: "Hizmetleri birinci sınıf olan otellerin çok düzenli müşterileri var.",
          },
        ],
      },
    ],
  },
  {
    category: "Karışık Örnekler",
    subcategories: [
      {
        subcategory: "Temel Örnekler",
        sentences: [
          {
            de: "Der Film, dessen Ende überraschend war, hat viele Preise gewonnen.",
            tr: "Sonu şaşırtıcı olan film birçok ödül kazandı.",
          },
          {
            de: "Die Studentin, der ich beim Lernen geholfen habe, hat die Prüfung bestanden.",
            tr: "Öğrenmesine yardım ettiğim öğrenci sınavı geçti.",
          },
          {
            de: "Das Zimmer, das ich gemietet habe, ist sonnig.",
            tr: "Kiraladığım oda güneşli.",
          },
          {
            de: "Der Zug, mit dem wir gefahren sind, hatte Verspätung.",
            tr: "Bindiğimiz tren gecikmişti.",
          },
          {
            de: "Die Frau, deren Tasche gestohlen wurde, war sehr traurig.",
            tr: "Çantası çalınan kadın çok üzgündü.",
          },
          {
            de: "Das Kind, dem wir ein Eis gekauft haben, hat gelächelt.",
            tr: "Dondurma aldığımız çocuk gülümsedi.",
          },
          {
            de: "Die Kollegen, mit denen ich zusammenarbeite, sind sehr hilfsbereit.",
            tr: "Birlikte çalıştığım meslektaşlarım çok yardımsever.",
          },
        ],
      },
      {
        subcategory: "Edatlarla Relativpronomen",
        sentences: [
          {
            de: "Das Haus, in dem ich aufgewachsen bin, steht nicht mehr.",
            tr: "Büyüdüğüm ev artık yok.",
          },
          {
            de: "Die Stadt, aus der ich komme, liegt im Süden.",
            tr: "Geldiğim şehir güneyde bulunuyor.",
          },
          {
            de: "Der Berg, auf den wir gestiegen sind, ist 3000 Meter hoch.",
            tr: "Tırmandığımız dağ 3000 metre yüksekliğinde.",
          },
          {
            de: "Die Bank, neben der ich sitze, ist aus Holz.",
            tr: "Yanında oturduğum bank ahşaptan yapılmış.",
          },
          {
            de: "Das Fenster, durch das wir schauen, zeigt den Garten.",
            tr: "Baktığımız pencere bahçeyi gösteriyor.",
          },
          {
            de: "Die Brücke, unter der wir stehen, ist sehr alt.",
            tr: "Altında durduğumuz köprü çok eski.",
          },
          {
            de: "Der Baum, hinter dem das Haus steht, ist eine Eiche.",
            tr: "Arkasında evin durduğu ağaç bir meşe.",
          },
          {
            de: "Die Tür, vor der wir warten, ist verschlossen.",
            tr: "Önünde beklediğimiz kapı kilitli.",
          },
          {
            de: "Das Meer, an dem wir Urlaub machen, ist wunderschön.",
            tr: "Tatil yaptığımız deniz harika.",
          },
          {
            de: "Die Menschen, zwischen denen ich saß, sprachen Spanisch.",
            tr: "Arasında oturduğum insanlar İspanyolca konuşuyordu.",
          },
        ],
      },
      {
        subcategory: "Günlük Yaşam Örnekleri",
        sentences: [
          {
            de: "Der Computer, mit dem ich arbeite, ist neu.",
            tr: "Çalıştığım bilgisayar yeni.",
          },
          {
            de: "Die Wohnung, in der wir leben, hat drei Zimmer.",
            tr: "Yaşadığımız daire üç odalı.",
          },
          {
            de: "Das Rezept, nach dem ich koche, ist von meiner Großmutter.",
            tr: "Yemek pişirdiğim tarif büyükannemden.",
          },
          {
            de: "Der Grund, wegen dessen ich nicht kommen konnte, war eine Erkältung.",
            tr: "Gelemememin nedeni bir soğuk algınlığıydı.",
          },
          {
            de: "Die Musik, bei der ich entspannen kann, ist klassisch.",
            tr: "Rahatlayabildiğim müzik klasiktir.",
          },
          {
            de: "Das Problem, über das wir gesprochen haben, ist gelöst.",
            tr: "Konuştuğumuz sorun çözüldü.",
          },
          {
            de: "Der Film, während dessen ich eingeschlafen bin, war sehr langweilig.",
            tr: "Uyuyakaldığım film çok sıkıcıydı.",
          },
          {
            de: "Die Freunde, mit denen ich ausgehe, sind lustig.",
            tr: "Birlikte çıktığım arkadaşlar eğlenceli.",
          },
          {
            de: "Das Restaurant, in dem wir oft essen, hat sonntags geschlossen.",
            tr: "Sık sık yemek yediğimiz restoran pazar günleri kapalı.",
          },
          {
            de: "Die Straße, auf der wir fahren, führt zum See.",
            tr: "Üzerinde gittiğimiz yol göle gidiyor.",
          },
        ],
      },
      {
        subcategory: "İş ve Eğitim",
        sentences: [
          {
            de: "Der Chef, für den ich arbeite, ist fair.",
            tr: "Çalıştığım patron adil.",
          },
          {
            de: "Die Firma, bei der ich angestellt bin, ist international.",
            tr: "Çalıştığım şirket uluslararası.",
          },
          {
            de: "Das Projekt, an dem wir arbeiten, ist fast fertig.",
            tr: "Üzerinde çalıştığımız proje neredeyse bitti.",
          },
          {
            de: "Der Kollege, ohne den wir nicht erfolgreich wären, ist im Urlaub.",
            tr: "Onsuz başarılı olamayacağımız meslektaş tatilde.",
          },
          {
            de: "Die Schule, in der ich unterrichte, ist neu renoviert.",
            tr: "Öğretmenlik yaptığım okul yeni yenilendi.",
          },
          {
            de: "Das Büro, vor dem wir uns treffen, ist im zweiten Stock.",
            tr: "Önünde buluştuğumuz ofis ikinci katta.",
          },
          {
            de: "Der Student, dessen Arbeit am besten war, hat einen Preis gewonnen.",
            tr: "Çalışması en iyi olan öğrenci bir ödül kazandı.",
          },
          {
            de: "Die Professorin, deren Vorlesung sehr interessant ist, forscht in Biologie.",
            tr: "Dersi çok ilginç olan profesör biyoloji alanında araştırma yapıyor.",
          },
          {
            de: "Das Seminar, in dem wir viel gelernt haben, ist zu Ende.",
            tr: "Çok şey öğrendiğimiz seminer sona erdi.",
          },
          {
            de: "Die Universität, von der ich einen Abschluss habe, ist renommiert.",
            tr: "Mezun olduğum üniversite saygın.",
          },
        ],
      },
      {
        subcategory: "Seyahat ve Tatil",
        sentences: [
          {
            de: "Der Flughafen, zu dem wir fahren, ist 30 Kilometer entfernt.",
            tr: "Gittiğimiz havaalanı 30 kilometre uzaklıkta.",
          },
          {
            de: "Die Insel, auf der wir Urlaub machen, liegt in der Ägäis.",
            tr: "Tatil yaptığımız ada Ege Denizi'nde bulunuyor.",
          },
          {
            de: "Das Hotel, in dem wir übernachten, bietet Halbpension an.",
            tr: "Konakladığımız otel yarım pansiyon sunuyor.",
          },
          {
            de: "Der Strand, an dem wir liegen, ist sehr sauber.",
            tr: "Uzandığımız plaj çok temiz.",
          },
          {
            de: "Die Reise, auf die ich mich freue, beginnt nächste Woche.",
            tr: "Heyecanla beklediğim seyahat önümüzdeki hafta başlıyor.",
          },
          {
            de: "Das Land, dessen Kultur mich fasziniert, möchte ich besuchen.",
            tr: "Kültürü beni büyüleyen ülkeyi ziyaret etmek istiyorum.",
          },
          {
            de: "Der Berg, den wir bestiegen haben, bietet eine tolle Aussicht.",
            tr: "Tırmandığımız dağ muhteşem bir manzara sunuyor.",
          },
          {
            de: "Die Stadt, durch die wir spaziert sind, hat viele historische Gebäude.",
            tr: "Gezdiğimiz şehrin birçok tarihi binası var.",
          },
          {
            de: "Das Museum, für das wir Eintrittskarten gekauft haben, ist montags geschlossen.",
            tr: "Giriş bileti aldığımız müze pazartesileri kapalı.",
          },
          {
            de: "Die Region, in der wir wandern, ist für ihren Wein bekannt.",
            tr: "Yürüyüş yaptığımız bölge şaraplarıyla ünlü.",
          },
        ],
      },
      {
        subcategory: "İlişkiler ve Aile",
        sentences: [
          {
            de: "Der Freund, mit dem ich seit der Kindheit befreundet bin, wohnt jetzt im Ausland.",
            tr: "Çocukluğumdan beri arkadaş olduğum kişi şimdi yurtdışında yaşıyor.",
          },
          {
            de: "Die Familie, bei der ich zu Besuch war, war sehr gastfreundlich.",
            tr: "Ziyaret ettiğim aile çok misafirperverdi.",
          },
          {
            de: "Das Kind, dessen Eltern ich kenne, geht in meine Klasse.",
            tr: "Ebeveynlerini tanıdığım çocuk benim sınıfıma gidiyor.",
          },
          {
            de: "Der Nachbar, zu dem wir ein gutes Verhältnis haben, ist umgezogen.",
            tr: "İyi ilişkimiz olan komşu taşındı.",
          },
          {
            de: "Die Cousine, von der ich oft spreche, studiert Medizin.",
            tr: "Sık sık bahsettiğim kuzen tıp okuyor.",
          },
          {
            de: "Das Paar, mit dem wir befreundet sind, erwartet ein Baby.",
            tr: "Arkadaş olduğumuz çift bir bebek bekliyor.",
          },
          {
            de: "Der Onkel, dessen Auto ich geliehen habe, ist sehr großzügig.",
            tr: "Arabasını ödünç aldığım amca çok cömert.",
          },
          {
            de: "Die Tante, deren Kuchen wunderbar schmeckt, hat mir das Rezept gegeben.",
            tr: "Pastası harika tadıyla bilinen halam bana tarifi verdi.",
          },
          {
            de: "Das Geschwisterkind, auf das ich aufpasse, ist sehr lebhaft.",
            tr: "Baktığım kardeş çok hareketli.",
          },
          {
            de: "Die Schwiegereltern, bei denen wir zum Essen eingeladen sind, kochen traditionell.",
            tr: "Yemeğe davetli olduğumuz kayınvalide ve kayınpeder geleneksel yemekler pişiriyor.",
          },
        ],
      },
      {
        subcategory: "Ek Örnekler",
        sentences: [
          {
            de: "Der Film, den wir gestern gesehen haben, war langweilig.",
            tr: "Dün izlediğimiz film sıkıcıydı.",
          },
          {
            de: "Das Buch, in dem ich lese, ist spannend.",
            tr: "Okuduğum kitap heyecan verici.",
          },
          {
            de: "Die Stadt, in der ich geboren bin, ist klein.",
            tr: "Doğduğum şehir küçük.",
          },
          {
            de: "Der Mann, mit dem ich gesprochen habe, ist Architekt.",
            tr: "Konuştuğum adam mimar.",
          },
          {
            de: "Die Lehrerin, die uns Deutsch beibringt, kommt aus Österreich.",
            tr: "Bize Almanca öğreten öğretmen Avusturya'dan geliyor.",
          },
          {
            de: "Das Museum, das wir besuchen wollen, ist montags geschlossen.",
            tr: "Ziyaret etmek istediğimiz müze pazartesileri kapalı.",
          },
          {
            de: "Die Studenten, deren Projekte ausgezeichnet wurden, sind sehr stolz.",
            tr: "Projeleri ödüllendirilen öğrenciler çok gururlu.",
          },
          {
            de: "Der Computer, den ich gekauft habe, ist sehr schnell.",
            tr: "Satın aldığım bilgisayar çok hızlı.",
          },
          {
            de: "Die Frau, deren Mann im Ausland arbeitet, fühlt sich einsam.",
            tr: "Kocası yurtdışında çalışan kadın kendini yalnız hissediyor.",
          },
          {
            de: "Das Restaurant, in dem wir gegessen haben, war teuer.",
            tr: "Yemek yediğimiz restoran pahalıydı.",
          },
          {
            de: "Die Kinder, die im Garten spielen, sind laut.",
            tr: "Bahçede oynayan çocuklar gürültülü.",
          },
          {
            de: "Der Bus, mit dem ich zur Arbeit fahre, ist immer pünktlich.",
            tr: "İşe gittiğim otobüs her zaman zamanında.",
          },
          {
            de: "Die Freundin, der ich ein Geschenk gekauft habe, hat morgen Geburtstag.",
            tr: "Hediye aldığım arkadaşımın yarın doğum günü.",
          },
          {
            de: "Das Hotel, in dem wir übernachtet haben, war komfortabel.",
            tr: "Konakladığımız otel rahatdı.",
          },
          {
            de: "Die Straße, auf der wir wohnen, ist ruhig.",
            tr: "Yaşadığımız sokak sessiz.",
          },
          {
            de: "Der Arzt, dem ich vertraue, hat eine neue Praxis eröffnet.",
            tr: "Güvendiğim doktor yeni bir muayenehane açtı.",
          },
          {
            de: "Die Geschichte, die mein Großvater erzählt hat, war sehr interessant.",
            tr: "Büyükbabamın anlattığı hikaye çok ilginçti.",
          },
          {
            de: "Das Dorf, in dem meine Großeltern leben, ist sehr malerisch.",
            tr: "Büyükanne ve büyükbabamın yaşadığı köy çok pitoresk.",
          },
          {
            de: "Die Berge, die wir sehen können, sind mit Schnee bedeckt.",
            tr: "Görebildiğimiz dağlar karla kaplı.",
          },
          {
            de: "Der Park, durch den wir spazieren gegangen sind, ist sehr schön.",
            tr: "Gezindiğimiz park çok güzel.",
          },
          {
            de: "Die Universität, an der ich studiere, ist bekannt für ihre Forschung.",
            tr: "Okuduğum üniversite araştırmalarıyla tanınıyor.",
          },
          {
            de: "Das Wetter, das wir heute haben, ist perfekt für einen Ausflug.",
            tr: "Bugünkü hava bir gezi için mükemmel.",
          },
          {
            de: "Die Leute, denen wir begegnet sind, waren sehr freundlich.",
            tr: "Karşılaştığımız insanlar çok arkadaş canlısıydı.",
          },
          {
            de: "Die Firma, für die ich arbeite, ist international tätig.",
            tr: "Çalıştığım şirket uluslararası faaliyet gösteriyor.",
          },
          {
            de: "Der Supermarkt, in dem wir einkaufen, hat lange Öffnungszeiten.",
            tr: "Alışveriş yaptığımız süpermarket uzun çalışma saatlerine sahip.",
          },
          {
            de: "Die App, die ich entwickelt habe, wurde tausendmal heruntergeladen.",
            tr: "Geliştirdiğim uygulama binlerce kez indirildi.",
          },
          {
            de: "Das Konzert, auf das wir uns freuen, findet morgen statt.",
            tr: "Heyecanla beklediğimiz konser yarın gerçekleşecek.",
          },
          {
            de: "Die Brücke, über die wir gegangen sind, ist sehr alt.",
            tr: "Üzerinden geçtiğimiz köprü çok eski.",
          },
          {
            de: "Der Kuchen, den meine Mutter gebacken hat, schmeckt ausgezeichnet.",
            tr: "Annemin pişirdiği pasta mükemmel tadıyor.",
          },
          {
            de: "Die Sonnenbrille, die ich verloren habe, war teuer.",
            tr: "Kaybettiğim güneş gözlüğü pahalıydı.",
          },
          {
            de: "Das Theater, in dem wir waren, wurde kürzlich renoviert.",
            tr: "Bulunduğumuz tiyatro kısa süre önce yenilendi.",
          },
          {
            de: "Die Blumen, die im Garten wachsen, sind wunderschön.",
            tr: "Bahçede büyüyen çiçekler harika.",
          },
          {
            de: "Der Film, über den alle sprechen, hat viele Oscars gewonnen.",
            tr: "Herkesin konuştuğu film birçok Oscar kazandı.",
          },
        ],
      },
    ],
  },
];
export default sentencesData;
