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
            antwort: "der",
          },
          {
            de: "Der Lehrer, der gestern krank war, unterrichtet heute wieder.",
            tr: "Dün hasta olan öğretmen bugün tekrar ders veriyor.",
            antwort: "der",
          },
          {
            de: "Wir kennen den Arzt, der im Krankenhaus arbeitet.",
            tr: "Hastanede çalışan doktoru tanıyoruz.",
            antwort: "der",
          },
          {
            de: "Der Student, der fleißig lernt, wird die Prüfung bestehen.",
            tr: "Çalışkan öğrenci sınavı geçecek.",
            antwort: "der",
          },
          {
            de: "Der Hund, der im Garten spielt, gehört meinem Nachbarn.",
            tr: "Bahçede oynayan köpek komşuma ait.",
            antwort: "der",
          },
          {
            de: "Der Schauspieler, der in diesem Film mitspielt, ist sehr berühmt.",
            tr: "Bu filmde oynayan aktör çok ünlü.",
            antwort: "der",
          },
          {
            de: "Kennst du den Mann, der gerade angekommen ist?",
            tr: "Yeni gelen adamı tanıyor musun?",
            antwort: "der",
          },
          {
            de: "Der Sportler, der die Goldmedaille gewonnen hat, kommt aus Deutschland.",
            tr: "Altın madalya kazanan sporcu Almanya'dan geliyor.",
            antwort: "der",
          },
          {
            de: "Der Junge, der dort singt, hat eine schöne Stimme.",
            tr: "Orada şarkı söyleyen çocuğun güzel bir sesi var.",
            antwort: "der",
          },
          {
            de: "Der Tourist, der die Fotos macht, spricht kein Deutsch.",
            tr: "Fotoğraf çeken turist Almanca konuşmuyor.",
            antwort: "der",
          },
        ],
      },
      {
        subcategory: "Feminin (die)",
        sentences: [
          {
            de: "Die Frau, die dort arbeitet, ist meine Schwester.",
            tr: "Orada çalışan kadın benim kız kardeşim.",
            antwort: "die",
          },
          {
            de: "Die Lehrerin, die sehr streng ist, gibt viele Hausaufgaben.",
            tr: "Çok sert olan öğretmen çok ev ödevi veriyor.",
            antwort: "die",
          },
          {
            de: "Ich kenne die Ärztin, die mir geholfen hat.",
            tr: "Bana yardım eden doktoru tanıyorum.",
            antwort: "die",
          },
          {
            de: "Die Studentin, die aus Japan kommt, spricht gut Deutsch.",
            tr: "Japonya'dan gelen öğrenci iyi Almanca konuşuyor.",
            antwort: "die",
          },
          {
            de: "Die Katze, die auf dem Dach sitzt, gehört unseren Nachbarn.",
            tr: "Çatıda oturan kedi komşumuzun.",
            antwort: "die",
          },
          {
            de: "Die Schauspielerin, die in diesem Film die Hauptrolle spielt, hat einen Oscar gewonnen.",
            tr: "Bu filmde başrolü oynayan aktris bir Oscar kazandı.",
            antwort: "die",
          },
          {
            de: "Die Politikerin, die gestern eine Rede gehalten hat, ist sehr populär.",
            tr: "Dün konuşma yapan politikacı çok popüler.",
            antwort: "die",
          },
          {
            de: "Die Frau, die neben mir wohnt, ist Musikerin.",
            tr: "Yanımda oturan kadın müzisyen.",
            antwort: "die",
          },
          {
            de: "Die Sängerin, die bei dem Konzert aufgetreten ist, hat eine wunderbare Stimme.",
            tr: "Konserde sahne alan şarkıcının harika bir sesi var.",
            antwort: "die",
          },
          {
            de: "Die Freundin, die mir immer hilft, kommt heute zu Besuch.",
            tr: "Bana her zaman yardım eden arkadaşım bugün ziyarete geliyor.",
            antwort: "die",
          },
        ],
      },
      {
        subcategory: "Neutral (das)",
        sentences: [
          {
            de: "Das Kind, das dort spielt, ist mein Neffe.",
            tr: "Orada oynayan çocuk yeğenim.",
            antwort: "das",
          },
          {
            de: "Das Buch, das auf dem Tisch liegt, gehört mir.",
            tr: "Masada duran kitap bana ait.",
            antwort: "das",
          },
          {
            de: "Das Auto, das vor dem Haus parkt, ist neu.",
            tr: "Evin önünde park eden araba yeni.",
            antwort: "das",
          },
          {
            de: "Das Mädchen, das lange Haare hat, ist meine Cousine.",
            tr: "Uzun saçlı kız kuzinim.",
            antwort: "das",
          },
          {
            de: "Das Restaurant, das gerade eröffnet hat, ist sehr gut.",
            tr: "Yeni açılan restoran çok iyi.",
            antwort: "das",
          },
          {
            de: "Das Handy, das ich gestern gekauft habe, funktioniert nicht richtig.",
            tr: "Dün satın aldığım telefon düzgün çalışmıyor.",
            antwort: "das",
          },
          {
            de: "Das Hotel, das am Strand liegt, ist ausgebucht.",
            tr: "Plajda bulunan otel tamamen dolu.",
            antwort: "das",
          },
          {
            de: "Das Gemälde, das an der Wand hängt, ist sehr wertvoll.",
            tr: "Duvarda asılı olan tablo çok değerli.",
            antwort: "das",
          },
          {
            de: "Das Land, das wir letztes Jahr besucht haben, war wunderschön.",
            tr: "Geçen yıl ziyaret ettiğimiz ülke harikaydı.",
            antwort: "das",
          },
          {
            de: "Das Geschenk, das du mir gegeben hast, hat mir sehr gefallen.",
            tr: "Bana verdiğin hediye çok hoşuma gitti.",
            antwort: "das",
          },
        ],
      },
      {
        subcategory: "Plural (die)",
        sentences: [
          {
            de: "Die Leute, die dort warten, sind meine Kollegen.",
            tr: "Orada bekleyen insanlar meslektaşlarım.",
            antwort: "die",
          },
          {
            de: "Die Bücher, die ich gelesen habe, waren interessant.",
            tr: "Okuduğum kitaplar ilginçti.",
            antwort: "die",
          },
          {
            de: "Die Kinder, die im Garten spielen, sind sehr laut.",
            tr: "Bahçede oynayan çocuklar çok gürültülü.",
            antwort: "die",
          },
          {
            de: "Die Häuser, die neu gebaut wurden, sind sehr modern.",
            tr: "Yeni inşa edilen evler çok modern.",
            antwort: "die",
          },
          {
            de: "Die Filme, die wir gesehen haben, waren langweilig.",
            tr: "İzlediğimiz filmler sıkıcıydı.",
            antwort: "die",
          },
          {
            de: "Die Studenten, die fleißig lernen, bestehen die Prüfung.",
            tr: "Çalışkan öğrenciler sınavı geçerler.",
            antwort: "die",
          },
          {
            de: "Die Lehrer, die an dieser Schule unterrichten, sind sehr kompetent.",
            tr: "Bu okulda öğreten öğretmenler çok yetkin.",
            antwort: "die",
          },
          {
            de: "Die Hotels, die am Strand liegen, sind im Sommer ausgebucht.",
            tr: "Plajda bulunan oteller yazın tamamen dolu.",
            antwort: "die",
          },
          {
            de: "Die Geschäfte, die sonntags geöffnet haben, sind selten.",
            tr: "Pazar günleri açık olan mağazalar nadir.",
            antwort: "die",
          },
          {
            de: "Die Freunde, die mich besuchen, bringen immer Geschenke mit.",
            tr: "Beni ziyaret eden arkadaşlar her zaman hediyeler getirirler.",
            antwort: "die",
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
            antwort: "den",
          },
          {
            de: "Der Film, den wir gesehen haben, war sehr spannend.",
            tr: "İzlediğimiz film çok heyecanlıydı.",
            antwort: "den",
          },
          {
            de: "Der Apfel, den ich gegessen habe, war sauer.",
            tr: "Yediğim elma ekşiydi.",
            antwort: "den",
          },
          {
            de: "Der Brief, den ich geschrieben habe, ist wichtig.",
            tr: "Yazdığım mektup önemli.",
            antwort: "den",
          },
          {
            de: "Der Hund, den wir gestern adoptiert haben, ist sehr lieb.",
            tr: "Dün sahiplendiğimiz köpek çok sevimli.",
            antwort: "den",
          },
          {
            de: "Der Computer, den ich gekauft habe, funktioniert nicht.",
            tr: "Satın aldığım bilgisayar çalışmıyor.",
            antwort: "den",
          },
          {
            de: "Der Wein, den wir getrunken haben, war ausgezeichnet.",
            tr: "İçtiğimiz şarap mükemmeldi.",
            antwort: "den",
          },
          {
            de: "Der Lehrer, den wir respektieren, ist streng aber fair.",
            tr: "Saygı duyduğumuz öğretmen katı ama adil.",
            antwort: "den",
          },
          {
            de: "Der Kollege, den ich dir vorgestellt habe, arbeitet jetzt in Berlin.",
            tr: "Sana tanıttığım meslektaşım şimdi Berlin'de çalışıyor.",
            antwort: "den",
          },
          {
            de: "Der Fußballer, den alle bewundern, hat drei Tore geschossen.",
            tr: "Herkesin hayran olduğu futbolcu üç gol attı.",
            antwort: "den",
          },
        ],
      },
      {
        subcategory: "Feminin (die)",
        sentences: [
          {
            de: "Die Frau, die ich liebe, ist meine beste Freundin.",
            tr: "Sevdiğim kadın en iyi arkadaşım.",
            antwort: "die",
          },
          {
            de: "Die Musik, die ich höre, ist klassisch.",
            tr: "Dinlediğim müzik klasik.",
            antwort: "die",
          },
          {
            de: "Die Pizza, die wir bestellt haben, schmeckt gut.",
            tr: "Sipariş ettiğimiz pizza lezzetli.",
            antwort: "die",
          },
          {
            de: "Die Stadt, die wir besucht haben, war wunderschön.",
            tr: "Ziyaret ettiğimiz şehir harikaydı.",
            antwort: "die",
          },
          {
            de: "Die Geschichte, die er erzählt hat, kenne ich schon.",
            tr: "Onun anlattığı hikayeyi zaten biliyorum.",
            antwort: "die",
          },
          {
            de: "Die Tasche, die ich gekauft habe, ist aus Leder.",
            tr: "Satın aldığım çanta deriden yapılmış.",
            antwort: "die",
          },
          {
            de: "Die Kamera, die ich benutze, ist sehr teuer.",
            tr: "Kullandığım kamera çok pahalı.",
            antwort: "die",
          },
          {
            de: "Die Sprache, die ich lerne, ist schwierig.",
            tr: "Öğrendiğim dil zor.",
            antwort: "die",
          },
          {
            de: "Die Torte, die meine Mutter gebacken hat, schmeckt fantastisch.",
            tr: "Annemin pişirdiği pasta harika tadıyor.",
            antwort: "die",
          },
          {
            de: "Die Blume, die du mir geschenkt hast, ist verblüht.",
            tr: "Bana hediye ettiğin çiçek soldu.",
            antwort: "die",
          },
        ],
      },
      {
        subcategory: "Neutral (das)",
        sentences: [
          {
            de: "Das Buch, das ich gelesen habe, war interessant.",
            tr: "Okuduğum kitap ilginçti.",
            antwort: "das",
          },
          {
            de: "Das Auto, das wir gekauft haben, ist rot.",
            tr: "Satın aldığımız araba kırmızı.",
            antwort: "das",
          },
          {
            de: "Das Haus, das wir mieten, ist alt.",
            tr: "Kiraladığımız ev eski.",
            antwort: "das",
          },
          {
            de: "Das Bild, das du gemalt hast, gefällt mir.",
            tr: "Boyadığın resim hoşuma gidiyor.",
            antwort: "das",
          },
          {
            de: "Das Geschenk, das ich bekommen habe, ist schön.",
            tr: "Aldığım hediye güzel.",
            antwort: "das",
          },
          {
            de: "Das Lied, das sie singt, kenne ich.",
            tr: "Onun söylediği şarkıyı biliyorum.",
            antwort: "das",
          },
          {
            de: "Das Kind, das wir adoptiert haben, ist jetzt 10 Jahre alt.",
            tr: "Evlat edindiğimiz çocuk şimdi 10 yaşında.",
            antwort: "das",
          },
          {
            de: "Das Museum, das wir besucht haben, war interessant.",
            tr: "Ziyaret ettiğimiz müze ilginçti.",
            antwort: "das",
          },
          {
            de: "Das Restaurant, das er empfohlen hat, ist geschlossen.",
            tr: "Onun önerdiği restoran kapalı.",
            hedron: "das",
          },
          {
            de: "Das Hotel, das wir gebucht haben, liegt am Strand.",
            tr: "Rezervasyon yaptığımız otel plajda yer alıyor.",
            antwort: "das",
          },
        ],
      },
      {
        subcategory: "Plural (die)",
        sentences: [
          {
            de: "Die Bücher, die ich gekauft habe, sind teuer.",
            tr: "Satın aldığım kitaplar pahalı.",
            antwort: "die",
          },
          {
            de: "Die Leute, die wir eingeladen haben, kommen morgen.",
            tr: "Davet ettiğimiz insanlar yarın gelecek.",
            antwort: "die",
          },
          {
            de: "Die Filme, die wir gesehen haben, waren interessant.",
            tr: "İzlediğimiz filmler ilginçti.",
            antwort: "die",
          },
          {
            de: "Die Briefe, die ich geschrieben habe, wurden verschickt.",
            tr: "Yazdığım mektuplar gönderildi.",
            antwort: "die",
          },
          {
            de: "Die Lieder, die er komponiert hat, sind wunderschön.",
            tr: "Bestelediği şarkılar harika.",
            antwort: "die",
          },
          {
            de: "Die Fotos, die du gemacht hast, sind sehr schön.",
            tr: "Çektiğin fotoğraflar çok güzel.",
            antwort: "die",
          },
          {
            de: "Die Geschenke, die wir bekommen haben, waren überraschend.",
            tr: "Aldığımız hediyeler şaşırtıcıydı.",
            antwort: "die",
          },
          {
            de: "Die Aufgaben, die wir erledigt haben, waren schwierig.",
            tr: "Tamamladığımız görevler zordu.",
            antwort: "die",
          },
          {
            de: "Die Freunde, die wir getroffen haben, waren nett.",
            tr: "Karşılaştığımız arkadaşlar nazikti.",
            antwort: "die",
          },
          {
            de: "Die Probleme, die wir gelöst haben, erschienen anfangs unlösbar.",
            tr: "Çözdüğümüz problemler başlangıçta çözülemez gibi görünüyordu.",
            antwort: "die",
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
            antwort: "dem",
          },
          {
            de: "Der Lehrer, dem ich die Frage gestellt habe, konnte sie nicht beantworten.",
            tr: "Soru sorduğum öğretmen onu cevaplayamadı.",
            antwort: "dem",
          },
          {
            de: "Der Freund, dem ich vertraue, hat mich nicht verraten.",
            tr: "Güvendiğim arkadaş beni ele vermedi.",
            antwort: "dem",
          },
          {
            de: "Der Junge, dem wir den Weg gezeigt haben, hat sich verirrt.",
            tr: "Yolu gösterdiğimiz çocuk kaybolmuş.",
            antwort: "dem",
          },
          {
            de: "Der Arzt, dem ich von meinen Symptomen erzählt habe, hat mich ins Krankenhaus geschickt.",
            tr: "Belirtilerimden bahsettiğim doktor beni hastaneye gönderdi.",
            antwort: "dem",
          },
          {
            de: "Der Nachbar, dem wir die Pflanzen gegeben haben, hat sie gut gepflegt.",
            tr: "Bitkileri verdiğimiz komşu onlara iyi baktı.",
            antwort: "dem",
          },
          {
            de: "Der Chef, dem ich den Bericht geschickt habe, war zufrieden.",
            tr: "Raporu gönderdiğim patron memnundu.",
            antwort: "dem",
          },
          {
            de: "Der Kellner, dem wir ein Trinkgeld gegeben haben, hat sich bedankt.",
            tr: "Bahşiş verdiğimiz garson teşekkür etti.",
            antwort: "dem",
          },
          {
            de: "Der Student, dem ich bei der Hausaufgabe geholfen habe, hat die Prüfung bestanden.",
            tr: "Ev ödevinde yardım ettiğim öğrenci sınavı geçti.",
            antwort: "dem",
          },
          {
            de: "Der Schriftsteller, dem wir einen Brief geschrieben haben, hat geantwortet.",
            tr: "Mektup yazdığımız yazar cevap verdi.",
            antwort: "dem",
          },
        ],
      },
      {
        subcategory: "Feminin (der)",
        sentences: [
          {
            de: "Die Frau, der ich geholfen habe, war sehr dankbar.",
            tr: "Yardım ettiğim kadın çok minnettardı.",
            antwort: "der",
          },
          {
            de: "Die Lehrerin, der ich die Frage gestellt habe, konnte sie beantworten.",
            tr: "Soru sorduğum öğretmen onu cevaplayabildi.",
            antwort: "der",
          },
          {
            de: "Die Freundin, der ich vertraue, hat mein Geheimnis bewahrt.",
            tr: "Güvendiğim arkadaş sırrımı sakladı.",
            antwort: "der",
          },
          {
            de: "Die Touristen, der wir den Weg gezeigt haben, waren sehr dankbar.",
            tr: "Yolu gösterdiğimiz turistler çok minnettardı.",
            antwort: "der",
          },
          {
            de: "Die Ärztin, der ich von meinen Symptomen erzählt habe, hat mir ein Rezept gegeben.",
            tr: "Belirtilerimden bahsettiğim doktor bana bir reçete verdi.",
            antwort: "der",
          },
          {
            de: "Die Nachbarin, der wir die Katze anvertraut haben, hat gut auf sie aufgepasst.",
            tr: "Kediyi emanet ettiğimiz komşu ona iyi baktı.",
            antwort: "der",
          },
          {
            de: "Die Chefin, der ich den Vorschlag gemacht habe, fand ihn gut.",
            tr: "Öneri yaptığım patron onu beğendi.",
            antwort: "der",
          },
          {
            de: "Die Kollegin, der ich geholfen habe, hat mir später auch geholfen.",
            tr: "Yardım ettiğim meslektaşım daha sonra bana da yardım etti.",
            antwort: "der",
          },
          {
            de: "Die Professorin, der ich meine Arbeit gezeigt habe, war beeindruckt.",
            tr: "Çalışmamı gösterdiğim profesör etkilendi.",
            antwort: "der",
          },
          {
            de: "Die Großmutter, der wir zum Geburtstag gratuliert haben, hat sich sehr gefreut.",
            tr: "Doğum gününü kutladığımız büyükanne çok sevindi.",
            antwort: "der",
          },
        ],
      },
      {
        subcategory: "Neutral (dem)",
        sentences: [
          {
            de: "Das Kind, dem ich die Geschichte vorgelesen habe, ist eingeschlafen.",
            tr: "Hikaye okuduğum çocuk uykuya daldı.",
            antwort: "dem",
          },
          {
            de: "Das Restaurant, dem wir eine gute Bewertung gegeben haben, ist jetzt sehr beliebt.",
            tr: "İyi değerlendirme verdiğimiz restoran şimdi çok popüler.",
            antwort: "dem",
          },
          {
            de: "Das Museum, dem wir einen Besuch abgestattet haben, war sehr interessant.",
            tr: "Ziyaret ettiğimiz müze çok ilginçti.",
            antwort: "dem",
          },
          {
            de: "Das Team, dem wir gratuliert haben, hat das Turnier gewonnen.",
            tr: "Tebrik ettiğimiz takım turnuvayı kazandı.",
            antwort: "dem",
          },
          {
            de: "Das Mädchen, dem wir das Geschenk gegeben haben, hat sich sehr gefreut.",
            tr: "Hediyeyi verdiğimiz kız çok sevindi.",
            antwort: "dem",
          },
          {
            de: "Das Unternehmen, dem wir vertraut haben, hat uns nicht enttäuscht.",
            tr: "Güvendiğimiz şirket bizi hayal kırıklığına uğratmadı.",
            antwort: "dem",
          },
          {
            de: "Das Hotel, dem wir eine E-Mail geschickt haben, hat noch freie Zimmer.",
            tr: "E-posta gönderdiğimiz otelin hala boş odaları var.",
            antwort: "dem",
          },
          {
            de: "Das Tier, dem wir geholfen haben, ist jetzt gesund.",
            tr: "Yardım ettiğimiz hayvan şimdi sağlıklı.",
            antwort: "dem",
          },
          {
            de: "Das Ministerium, dem wir den Antrag geschickt haben, hat noch nicht geantwortet.",
            tr: "Başvuruyu gönderdiğimiz bakanlık henüz cevap vermedi.",
            antwort: "dem",
          },
          {
            de: "Das Baby, dem die Mutter ein Lied vorgesungen hat, schläft jetzt.",
            tr: "Annenin şarkı söylediği bebek şimdi uyuyor.",
            antwort: "dem",
          },
        ],
      },
      {
        subcategory: "Plural (denen)",
        sentences: [
          {
            de: "Die Kinder, denen wir Geschenke gekauft haben, waren glücklich.",
            tr: "Hediyeler aldığımız çocuklar mutluydu.",
            antwort: "denen",
          },
          {
            de: "Die Lehrer, denen wir für ihre Hilfe gedankt haben, haben sich gefreut.",
            tr: "Yardımları için teşekkür ettiğimiz öğretmenler sevindiler.",
            antwort: "denen",
          },
          {
            de: "Die Freunde, denen ich vertraue, haben mich nicht enttäuscht.",
            tr: "Güvendiğim arkadaşlar beni hayal kırıklığına uğratmadı.",
            antwort: "denen",
          },
          {
            de: "Die Touristen, denen wir den Weg gezeigt haben, waren sehr dankbar.",
            tr: "Yolu gösterdiğimiz turistler çok minnettardı.",
            antwort: "denen",
          },
          {
            de: "Die Kollegen, denen wir zum Geburtstag gratuliert haben, haben uns zum Essen eingeladen.",
            tr: "Doğum gününü kutladığımız meslektaşlar bizi yemeğe davet ettiler.",
            antwort: "denen",
          },
          {
            de: "Die Nachbarn, denen wir bei dem Umzug geholfen haben, haben uns zum Kaffee eingeladen.",
            tr: "Taşınmada yardım ettiğimiz komşular bizi kahveye davet ettiler.",
            antwort: "denen",
          },
          {
            de: "Die Studenten, denen ich die Aufgabe erklärt habe, haben sie verstanden.",
            tr: "Görevi açıkladığım öğrenciler onu anladılar.",
            antwort: "denen",
          },
          {
            de: "Die Firmen, denen wir eine E-Mail geschickt haben, haben geantwortet.",
            tr: "E-posta gönderdiğimiz şirketler cevap verdiler.",
            antwort: "denen",
          },
          {
            de: "Die Patienten, denen der Arzt Medikamente verschrieben hat, sind jetzt gesund.",
            tr: "Doktorun ilaç yazdığı hastalar şimdi sağlıklı.",
            antwort: "denen",
          },
          {
            de: "Die Menschen, denen wir heute begegnet sind, waren alle sehr freundlich.",
            tr: "Bugün karşılaştığımız insanların hepsi çok arkadaş canlısıydı.",
            antwort: "denen",
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
            antwort: "dessen",
          },
          {
            de: "Der Schüler, dessen Hausaufgaben immer perfekt sind, ist sehr fleißig.",
            tr: "Ödevleri her zaman mükemmel olan öğrenci çok çalışkan.",
            antwort: "dessen",
          },
          {
            de: "Der Autor, dessen Buch ich gelesen habe, hat einen neuen Roman veröffentlicht.",
            tr: "Kitabını okuduğum yazar yeni bir roman yayınladı.",
            antwort: "dessen",
          },
          {
            de: "Der Lehrer, dessen Unterricht interessant ist, ist bei den Schülern beliebt.",
            tr: "Dersi ilginç olan öğretmen öğrenciler arasında popüler.",
            antwort: "dessen",
          },
          {
            de: "Der Arzt, dessen Praxis in der Nähe ist, hat heute keine Sprechstunde.",
            tr: "Muayenehanesi yakında olan doktorun bugün görüşme saati yok.",
            antwort: "dessen",
          },
          {
            de: "Der Nachbar, dessen Hund immer bellt, entschuldigt sich oft.",
            tr: "Köpeği her zaman havlayan komşu sık sık özür diliyor.",
            antwort: "dessen",
          },
          {
            de: "Der Chef, dessen Firma expandiert, sucht neue Mitarbeiter.",
            tr: "Şirketi büyüyen patron yeni çalışanlar arıyor.",
            antwort: "dessen",
          },
          {
            de: "Der Freund, dessen Rat ich immer schätze, hat mir geholfen.",
            tr: "Tavsiyesine her zaman değer verdiğim arkadaş bana yardım etti.",
            antwort: "dessen",
          },
          {
            de: "Der Politiker, dessen Rede ich gehört habe, hat viele Anhänger.",
            tr: "Konuşmasını dinlediğim politikacının çok taraftarı var.",
            antwort: "dessen",
          },
          {
            de: "Der Wissenschaftler, dessen Forschung bahnbrechend ist, hat einen Preis gewonnen.",
            tr: "Araştırması çığır açan bilim insanı bir ödül kazandı.",
            antwort: "dessen",
          },
        ],
      },
      {
        subcategory: "Feminin (deren)",
        sentences: [
          {
            de: "Die Frau, deren Kind krank ist, bleibt zu Hause.",
            tr: "Çocuğu hasta olan kadın evde kalıyor.",
            antwort: "deren",
          },
          {
            de: "Die Lehrerin, deren Unterricht interessant ist, ist bei den Schülern beliebt.",
            tr: "Dersi ilginç olan öğretmen öğrenciler arasında popüler.",
            antwort: "deren",
          },
          {
            de: "Die Autorin, deren Buch ich gelesen habe, kommt aus Deutschland.",
            tr: "Kitabını okuduğum yazar Almanya'dan geliyor.",
            antwort: "deren",
          },
          {
            de: "Die Ärztin, deren Praxis in der Nähe ist, hat heute keine Sprechstunde.",
            tr: "Muayenehanesi yakında olan doktorun bugün görüşme saati yok.",
            antwort: "deren",
          },
          {
            de: "Die Nachbarin, deren Katze verschwunden ist, sucht überall.",
            tr: "Kedisi kaybolan komşu her yerde arıyor.",
            antwort: "deren",
          },
          {
            de: "Die Chefin, deren Firma expandiert, sucht neue Mitarbeiter.",
            tr: "Şirketi büyüyen patron yeni çalışanlar arıyor.",
            antwort: "deren",
          },
          {
            de: "Die Freundin, deren Rat ich immer schätze, hat mir geholfen.",
            tr: "Tavsiyesine her zaman değer verdiğim arkadaş bana yardım etti.",
            antwort: "deren",
          },
          {
            de: "Die Politikerin, deren Rede ich gehört habe, hat viele Anhänger.",
            tr: "Konuşmasını dinlediğim politikacının çok taraftarı var.",
            antwort: "deren",
          },
          {
            de: "Die Wissenschaftlerin, deren Forschung bahnbrechend ist, hat einen Preis gewonnen.",
            tr: "Araştırması çığır açan bilim insanı bir ödül kazandı.",
            antwort: "deren",
          },
          {
            de: "Die Kollegin, deren Büro neben meinem ist, arbeitet heute von zu Hause.",
            tr: "Ofisi benimkinin yanında olan meslektaşım bugün evden çalışıyor.",
            antwort: "deren",
          },
        ],
      },
      {
        subcategory: "Neutral (dessen)",
        sentences: [
          {
            de: "Das Kind, dessen Eltern im Ausland arbeiten, lebt bei seiner Großmutter.",
            tr: "Ebeveynleri yurtdışında çalışan çocuk büyükannesinin yanında yaşıyor.",
            antwort: "dessen",
          },
          {
            de: "Das Buch, dessen Autor berühmt ist, ist ein Bestseller.",
            tr: "Yazarı ünlü olan kitap bir çok satan.",
            antwort: "dessen",
          },
          {
            de: "Das Haus, dessen Dach repariert werden muss, ist alt.",
            tr: "Çatısı onarılması gereken ev eski.",
            antwort: "dessen",
          },
          {
            de: "Das Auto, dessen Motor kaputt ist, steht in der Garage.",
            tr: "Motoru bozuk olan araba garajda duruyor.",
            antwort: "dessen",
          },
          {
            de: "Das Restaurant, dessen Küche ausgezeichnet ist, ist immer voll.",
            tr: "Mutfağı mükemmel olan restoran her zaman dolu.",
            antwort: "dessen",
          },
          {
            de: "Das Land, dessen Wirtschaft wächst, zieht viele Investoren an.",
            tr: "Ekonomisi büyüyen ülke birçok yatırımcıyı çekiyor.",
            antwort: "dessen",
          },
          {
            de: "Das Unternehmen, dessen Produkte weltweit verkauft werden, hat seinen Sitz in Berlin.",
            tr: "Ürünleri dünya çapında satılan şirketin merkezi Berlin'de.",
            antwort: "dessen",
          },
          {
            de: "Das Museum, dessen Ausstellungen berühmt sind, wird renoviert.",
            tr: "Sergileri ünlü olan müze yenileniyor.",
            antwort: "dessen",
          },
          {
            de: "Das Team, dessen Leistung beeindruckend war, wurde belohnt.",
            tr: "Performansı etkileyici olan takım ödüllendirildi.",
            antwort: "dessen",
          },
          {
            de: "Das Hotel, dessen Service erstklassig ist, hat viele Stammgäste.",
            tr: "Hizmeti birinci sınıf olan otelin çok düzenli müşterisi var.",
            antwort: "dessen",
          },
        ],
      },
      {
        subcategory: "Plural (deren)",
        sentences: [
          {
            de: "Die Kinder, deren Eltern im Ausland arbeiten, leben bei ihrer Großmutter.",
            tr: "Ebeveynleri yurtdışında çalışan çocuklar büyükannelerinin yanında yaşıyorlar.",
            antwort: "deren",
          },
          {
            de: "Die Bücher, deren Autoren berühmt sind, sind Bestseller.",
            tr: "Yazarları ünlü olan kitaplar çok satanlar.",
            antwort: "deren",
          },
          {
            de: "Die Häuser, deren Dächer repariert werden müssen, sind alt.",
            tr: "Çatıları onarılması gereken evler eski.",
            antwort: "deren",
          },
          {
            de: "Die Autos, deren Motoren kaputt sind, stehen in der Garage.",
            tr: "Motorları bozuk olan arabalar garajda duruyor.",
            antwort: "deren",
          },
          {
            de: "Die Restaurants, deren Küchen ausgezeichnet sind, sind immer voll.",
            tr: "Mutfakları mükemmel olan restoranlar her zaman dolu.",
            antwort: "deren",
          },
          {
            de: "Die Länder, deren Wirtschaft wächst, ziehen viele Investoren an.",
            tr: "Ekonomileri büyüyen ülkeler birçok yatırımcıyı çekiyor.",
            antwort: "deren",
          },
          {
            de: "Die Unternehmen, deren Produkte weltweit verkauft werden, haben ihren Sitz in Berlin.",
            tr: "Ürünleri dünya çapında satılan şirketlerin merkezi Berlin'de.",
            antwort: "deren",
          },
          {
            de: "Die Museen, deren Ausstellungen berühmt sind, werden renoviert.",
            tr: "Sergileri ünlü olan müzeler yenileniyor.",
            antwort: "deren",
          },
          {
            de: "Die Teams, deren Leistungen beeindruckend waren, wurden belohnt.",
            tr: "Performansları etkileyici olan takımlar ödüllendirildi.",
            antwort: "deren",
          },
          {
            de: "Die Hotels, deren Service erstklassig ist, haben viele Stammgäste.",
            tr: "Hizmetleri birinci sınıf olan otellerin çok düzenli müşterileri var.",
            antwort: "deren",
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
            antwort: "dessen",
          },
          {
            de: "Die Studentin, der ich beim Lernen geholfen habe, hat die Prüfung bestanden.",
            tr: "Öğrenmesine yardım ettiğim öğrenci sınavı geçti.",
            antwort: "der",
          },
          {
            de: "Das Zimmer, das ich gemietet habe, ist sonnig.",
            tr: "Kiraladığım oda güneşli.",
            antwort: "das",
          },
          {
            de: "Der Zug, mit dem wir gefahren sind, hatte Verspätung.",
            tr: "Bindiğimiz tren gecikmişti.",
            antwort: "dem",
          },
          {
            de: "Die Frau, deren Tasche gestohlen wurde, war sehr traurig.",
            tr: "Çantası çalınan kadın çok üzgündü.",
            antwort: "deren",
          },
          {
            de: "Das Kind, dem wir ein Eis gekauft haben, hat gelächelt.",
            tr: "Dondurma aldığımız çocuk gülümsedi.",
            antwort: "dem",
          },
          {
            de: "Die Kollegen, mit denen ich zusammenarbeite, sind sehr hilfsbereit.",
            tr: "Birlikte çalıştığım meslektaşlarım çok yardımsever.",
            antwort: "denen",
          },
        ],
      },
      {
        subcategory: "Edatlarla Relativpronomen",
        sentences: [
          {
            de: "Das Haus, in dem ich aufgewachsen bin, steht nicht mehr.",
            tr: "Büyüdüğüm ev artık yok.",
            antwort: "dem",
          },
          {
            de: "Die Stadt, aus der ich komme, liegt im Süden.",
            tr: "Geldiğim şehir güneyde bulunuyor.",
            antwort: "der",
          },
          {
            de: "Der Berg, auf den wir gestiegen sind, ist 3000 Meter hoch.",
            tr: "Tırmandığımız dağ 3000 metre yüksekliğinde.",
            antwort: "den",
          },
          {
            de: "Die Bank, neben der ich sitze, ist aus Holz.",
            tr: "Yanında oturduğum bank ahşaptan yapılmış.",
            antwort: "der",
          },
          {
            de: "Das Fenster, durch das wir schauen, zeigt den Garten.",
            tr: "Baktığımız pencere bahçeyi gösteriyor.",
            antwort: "das",
          },
          {
            de: "Die Brücke, unter der wir stehen, ist sehr alt.",
            tr: "Altında durduğumuz köprü çok eski.",
            antwort: "der",
          },
          {
            de: "Der Baum, hinter dem das Haus steht, ist eine Eiche.",
            tr: "Arkasında evin durduğu ağaç bir meşe.",
            antwort: "dem",
          },
          {
            de: "Die Tür, vor der wir warten, ist verschlossen.",
            tr: "Önünde beklediğimiz kapı kilitli.",
            antwort: "der",
          },
          {
            de: "Das Meer, an dem wir Urlaub machen, ist wunderschön.",
            tr: "Tatil yaptığımız deniz harika.",
            antwort: "dem",
          },
          {
            de: "Die Menschen, zwischen denen ich saß, sprachen Spanisch.",
            tr: "Arasında oturduğum insanlar İspanyolca konuşuyordu.",
            antwort: "denen",
          },
        ],
      },
      {
        subcategory: "Günlük Yaşam Örnekleri",
        sentences: [
          {
            de: "Der Computer, mit dem ich arbeite, ist neu.",
            tr: "Çalıştığım bilgisayar yeni.",
            antwort: "dem",
          },
          {
            de: "Die Wohnung, in der wir leben, hat drei Zimmer.",
            tr: "Yaşadığımız daire üç odalı.",
            antwort: "der",
          },
          {
            de: "Das Rezept, nach dem ich koche, ist von meiner Großmutter.",
            tr: "Yemek pişirdiğim tarif büyükannemden.",
            antwort: "dem",
          },
          {
            de: "Der Grund, wegen dessen ich nicht kommen konnte, war eine Erkältung.",
            tr: "Gelemememin nedeni bir soğuk algınlığıydı.",
            antwort: "dessen",
          },
          {
            de: "Die Musik, bei der ich entspannen kann, ist klassisch.",
            tr: "Rahatlayabildiğim müzik klasiktir.",
            antwort: "der",
          },
          {
            de: "Das Problem, über das wir gesprochen haben, ist gelöst.",
            tr: "Konuştuğumuz sorun çözüldü.",
            antwort: "das",
          },
          {
            de: "Der Film, während dessen ich eingeschlafen bin, war sehr langweilig.",
            tr: "Uyuyakaldığım film çok sıkıcıydı.",
            antwort: "dessen",
          },
          {
            de: "Die Freunde, mit denen ich ausgehe, sind lustig.",
            tr: "Birlikte çıktığım arkadaşlar eğlenceli.",
            antwort: "denen",
          },
          {
            de: "Das Restaurant, in dem wir oft essen, hat sonntags geschlossen.",
            tr: "Sık sık yemek yediğimiz restoran pazar günleri kapalı.",
            antwort: "dem",
          },
          {
            de: "Die Straße, auf der wir fahren, führt zum See.",
            tr: "Üzerinde gittiğimiz yol göle gidiyor.",
            antwort: "der",
          },
        ],
      },
      {
        subcategory: "İş ve Eğitim",
        sentences: [
          {
            de: "Der Chef, für den ich arbeite, ist fair.",
            tr: "Çalıştığım patron adil.",
            antwort: "den",
          },
          {
            de: "Die Firma, bei der ich angestellt bin, ist international.",
            tr: "Çalıştığım şirket uluslararası.",
            antwort: "der",
          },
          {
            de: "Das Projekt, an dem wir arbeiten, ist fast fertig.",
            tr: "Üzerinde çalıştığımız proje neredeyse bitti.",
            antwort: "dem",
          },
          {
            de: "Der Kollege, ohne den wir nicht erfolgreich wären, ist im Urlaub.",
            tr: "Onsuz başarılı olamayacağımız meslektaş tatilde.",
            antwort: "den",
          },
          {
            de: "Die Schule, in der ich unterrichte, ist neu renoviert.",
            tr: "Öğretmenlik yaptığım okul yeni yenilendi.",
            antwort: "der",
          },
          {
            de: "Das Büro, vor dem wir uns treffen, ist im zweiten Stock.",
            tr: "Önünde buluştuğumuz ofis ikinci katta.",
            antwort: "dem",
          },
          {
            de: "Der Student, dessen Arbeit am besten war, hat einen Preis gewonnen.",
            tr: "Çalışması en iyi olan öğrenci bir ödül kazandı.",
            antwort: "dessen",
          },
          {
            de: "Die Professorin, deren Vorlesung sehr interessant ist, forscht in Biologie.",
            tr: "Dersi çok ilginç olan profesör biyoloji alanında araştırma yapıyor.",
            antwort: "deren",
          },
          {
            de: "Das Seminar, in dem wir viel gelernt haben, ist zu Ende.",
            tr: "Çok şey öğrendiğimiz seminer sona erdi.",
            antwort: "dem",
          },
          {
            de: "Die Universität, von der ich einen Abschluss habe, ist renommiert.",
            tr: "Mezun olduğum üniversite saygın.",
            antwort: "der",
          },
        ],
      },
      {
        subcategory: "Seyahat ve Tatil",
        sentences: [
          {
            de: "Der Flughafen, zu dem wir fahren, ist 30 Kilometer entfernt.",
            tr: "Gittiğimiz havaalanı 30 kilometre uzaklıkta.",
            antwort: "dem",
          },
          {
            de: "Die Insel, auf der wir Urlaub machen, liegt in der Ägäis.",
            tr: "Tatil yaptığımız ada Ege Denizi'nde bulunuyor.",
            antwort: "der",
          },
          {
            de: "Das Hotel, in dem wir übernachten, bietet Halbpension an.",
            tr: "Konakladığımız otel yarım pansiyon sunuyor.",
            antwort: "dem",
          },
          {
            de: "Der Strand, an dem wir liegen, ist sehr sauber.",
            tr: "Uzandığımız plaj çok temiz.",
            antwort: "dem",
          },
          {
            de: "Die Reise, auf die ich mich freue, beginnt nächste Woche.",
            tr: "Heyecanla beklediğim seyahat önümüzdeki hafta başlıyor.",
            antwort: "die",
          },
          {
            de: "Das Land, dessen Kultur mich fasziniert, möchte ich besuchen.",
            tr: "Kültürü beni büyüleyen ülkeyi ziyaret etmek istiyorum.",
            antwort: "dessen",
          },
          {
            de: "Der Berg, den wir bestiegen haben, bietet eine tolle Aussicht.",
            tr: "Tırmandığımız dağ muhteşem bir manzara sunuyor.",
            antwort: "den",
          },
          {
            de: "Die Stadt, durch die wir spaziert sind, hat viele historische Gebäude.",
            tr: "Gezdiğimiz şehrin birçok tarihi binası var.",
            antwort: "die",
          },
          {
            de: "Das Museum, für das wir Eintrittskarten gekauft haben, ist montags geschlossen.",
            tr: "Giriş bileti aldığımız müze pazartesileri kapalı.",
            antwort: "das",
          },
          {
            de: "Die Region, in der wir wandern, ist für ihren Wein bekannt.",
            tr: "Yürüyüş yaptığımız bölge şaraplarıyla ünlü.",
            antwort: "der",
          },
        ],
      },
      {
        subcategory: "İlişkiler ve Aile",
        sentences: [
          {
            de: "Der Freund, mit dem ich seit der Kindheit befreundet bin, wohnt jetzt im Ausland.",
            tr: "Çocukluğumdan beri arkadaş olduğum kişi şimdi yurtdışında yaşıyor.",
            antwort: "dem",
          },
          {
            de: "Die Familie, bei der ich zu Besuch war, war sehr gastfreundlich.",
            tr: "Ziyaret ettiğim aile çok misafirperverdi.",
            antwort: "der",
          },
          {
            de: "Das Kind, dessen Eltern ich kenne, geht in meine Klasse.",
            tr: "Ebeveynlerini tanıdığım çocuk benim sınıfıma gidiyor.",
            antwort: "dessen",
          },
          {
            de: "Der Nachbar, zu dem wir ein gutes Verhältnis haben, ist umgezogen.",
            tr: "İyi ilişkimiz olan komşu taşındı.",
            antwort: "dem",
          },
          {
            de: "Die Cousine, von der ich oft spreche, studiert Medizin.",
            tr: "Sık sık bahsettiğim kuzen tıp okuyor.",
            antwort: "der",
          },
          {
            de: "Das Paar, mit dem wir befreundet sind, erwartet ein Baby.",
            tr: "Arkadaş olduğumuz çift bir bebek bekliyor.",
            antwort: "dem",
          },
          {
            de: "Der Onkel, dessen Auto ich geliehen habe, ist sehr großzügig.",
            tr: "Arabasını ödünç aldığım amca çok cömert.",
            antwort: "dessen",
          },
          {
            de: "Die Tante, deren Kuchen wunderbar schmeckt, hat mir das Rezept gegeben.",
            tr: "Pastası harika tadıyla bilinen halam bana tarifi verdi.",
            antwort: "deren",
          },
          {
            de: "Das Geschwisterkind, auf das ich aufpasse, ist sehr lebhaft.",
            tr: "Baktığım kardeş çok hareketli.",
            antwort: "das",
          },
          {
            de: "Die Schwiegereltern, bei denen wir zum Essen eingeladen sind, kochen traditionell.",
            tr: "Yemeğe davetli olduğumuz kayınvalide ve kayınpeder geleneksel yemekler pişiriyor.",
            antwort: "denen",
          },
        ],
      },
      {
        subcategory: "Ek Örnekler",
        sentences: [
          {
            de: "Der Film, den wir gestern gesehen haben, war langweilig.",
            tr: "Dün izlediğimiz film sıkıcıydı.",
            antwort: "den",
          },
          {
            de: "Das Buch, in dem ich lese, ist spannend.",
            tr: "Okuduğum kitap heyecan verici.",
            antwort: "dem",
          },
          {
            de: "Die Stadt, in der ich geboren bin, ist klein.",
            tr: "Doğduğum şehir küçük.",
            antwort: "der",
          },
          {
            de: "Der Mann, mit dem ich gesprochen habe, ist Architekt.",
            tr: "Konuştuğum adam mimar.",
            antwort: "dem",
          },
          {
            de: "Die Lehrerin, die uns Deutsch beibringt, kommt aus Österreich.",
            tr: "Bize Almanca öğreten öğretmen Avusturya'dan geliyor.",
            antwort: "die",
          },
          {
            de: "Das Museum, das wir besuchen wollen, ist montags geschlossen.",
            tr: "Ziyaret etmek istediğimiz müze pazartesileri kapalı.",
            antwort: "das",
          },
          {
            de: "Die Studenten, deren Projekte ausgezeichnet wurden, sind sehr stolz.",
            tr: "Projeleri ödüllendirilen öğrenciler çok gururlu.",
            antwort: "deren",
          },
          {
            de: "Der Computer, den ich gekauft habe, ist sehr schnell.",
            tr: "Satın aldığım bilgisayar çok hızlı.",
            antwort: "den",
          },
          {
            de: "Die Frau, deren Mann im Ausland arbeitet, fühlt sich einsam.",
            tr: "Kocası yurtdışında çalışan kadın kendini yalnız hissediyor.",
            antwort: "deren",
          },
          {
            de: "Das Restaurant, in dem wir gegessen haben, war teuer.",
            tr: "Yemek yediğimiz restoran pahalıydı.",
            antwort: "dem",
          },
          {
            de: "Die Kinder, die im Garten spielen, sind laut.",
            tr: "Bahçede oynayan çocuklar gürültülü.",
            antwort: "die",
          },
          {
            de: "Der Bus, mit dem ich zur Arbeit fahre, ist immer pünktlich.",
            tr: "İşe gittiğim otobüs her zaman zamanında.",
            antwort: "dem",
          },
          {
            de: "Die Freundin, der ich ein Geschenk gekauft habe, hat morgen Geburtstag.",
            tr: "Hediye aldığım arkadaşımın yarın doğum günü.",
            antwort: "der",
          },
          {
            de: "Das Hotel, in dem wir übernachtet haben, war komfortabel.",
            tr: "Konakladığımız otel rahatdı.",
            antwort: "dem",
          },
          {
            de: "Die Straße, auf der wir wohnen, ist ruhig.",
            tr: "Yaşadığımız sokak sessiz.",
            antwort: "der",
          },
          {
            de: "Der Arzt, dem ich vertraue, hat eine neue Praxis eröffnet.",
            tr: "Güvendiğim doktor yeni bir muayenehane açtı.",
            antwort: "dem",
          },
          {
            de: "Die Geschichte, die mein Großvater erzählt hat, war sehr interessant.",
            tr: "Büyükbabamın anlattığı hikaye çok ilginçti.",
            antwort: "die",
          },
          {
            de: "Das Dorf, in dem meine Großeltern leben, ist sehr malerisch.",
            tr: "Büyükanne ve büyükbabamın yaşadığı köy çok pitoresk.",
            antwort: "dem",
          },
          {
            de: "Die Berge, die wir sehen können, sind mit Schnee bedeckt.",
            tr: "Görebildiğimiz dağlar karla kaplı.",
            antwort: "die",
          },
          {
            de: "Der Park, durch den wir spazieren gegangen sind, ist sehr schön.",
            tr: "Gezindiğimiz park çok güzel.",
            antwort: "den",
          },
          {
            de: "Die Universität, an der ich studiere, ist bekannt für ihre Forschung.",
            tr: "Okuduğum üniversite araştırmalarıyla tanınıyor.",
            antwort: "der",
          },
          {
            de: "Das Wetter, das wir heute haben, ist perfekt für einen Ausflug.",
            tr: "Bugünkü hava bir gezi için mükemmel.",
            antwort: "das",
          },
          {
            de: "Die Leute, denen wir begegnet sind, waren sehr freundlich.",
            tr: "Karşılaştığımız insanlar çok arkadaş canlısıydı.",
            antwort: "denen",
          },
          {
            de: "Die Firma, für die ich arbeite, ist international tätig.",
            tr: "Çalıştığım şirket uluslararası faaliyet gösteriyor.",
            antwort: "die",
          },
          {
            de: "Der Supermarkt, in dem wir einkaufen, hat lange Öffnungszeiten.",
            tr: "Alışveriş yaptığımız süpermarket uzun çalışma saatlerine sahip.",
            antwort: "dem",
          },
          {
            de: "Die App, die ich entwickelt habe, wurde tausendmal heruntergeladen.",
            tr: "Geliştirdiğim uygulama binlerce kez indirildi.",
            antwort: "die",
          },
          {
            de: "Das Konzert, auf das wir uns freuen, findet morgen statt.",
            tr: "Heyecanla beklediğimiz konser yarın gerçekleşecek.",
            antwort: "das",
          },
          {
            de: "Die Brücke, über die wir gegangen sind, ist sehr alt.",
            tr: "Üzerinden geçtiğimiz köprü çok eski.",
            antwort: "die",
          },
          {
            de: "Der Kuchen, den meine Mutter gebacken hat, schmeckt ausgezeichnet.",
            tr: "Annemin pişirdiği pasta mükemmel tadıyor.",
            antwort: "den",
          },
          {
            de: "Die Sonnenbrille, die ich verloren habe, war teuer.",
            tr: "Kaybettiğim güneş gözlüğü pahalıydı.",
            antwort: "die",
          },
          {
            de: "Das Theater, in dem wir waren, wurde kürzlich renoviert.",
            tr: "Bulunduğumuz tiyatro kısa süre önce yenilendi.",
            antwort: "dem",
          },
          {
            de: "Die Blumen, die im Garten wachsen, sind wunderschön.",
            tr: "Bahçede büyüyen çiçekler harika.",
            antwort: "die",
          },
          {
            de: "Der Film, über den alle sprechen, hat viele Oscars gewonnen.",
            tr: "Herkesin konuştuğu film birçok Oscar kazandı.",
            antwort: "den",
          },
        ],
      },
    ],
  },
];
export default sentencesData;
