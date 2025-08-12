import { useState } from "react";
import React from "react";

const vocabulary = [
  { german: "sich/etwas gestalten", turkish: "yapılandırmak/organize etmek" },
  { german: "absolvieren", turkish: "tamamlamak, yapmak" },
  { german: "guttun", turkish: "olumlu etkisi olmak, hoş olmak" },
  { german: "variieren", turkish: "değişiklik göstermek, farklılık göstermek" },
  { german: "erwähnen", turkish: "bahsetmek, değinmek" },
  { german: "Dehnübungen", turkish: "germe egzersizleri" },
  { german: "ausüben", turkish: "uygulama yapmak, alıştırma yapmak" },
  { german: "des Weiteren", turkish: "ayrıca, bunun da ötesinde" },
  { german: "schonen", turkish: "yormamak, korumak" },
  { german: "Gliedmaßen", turkish: "uzuvlar - kollar ve bacaklar" },
  { german: "Zeitfresser", turkish: "gereksiz zaman harcatan aktivite" },
  { german: "zusammenhängen", turkish: "bağlantılı olmak, ilişkili olmak" },
  {
    german: "in die Quere kommen",
    turkish: "rahatsız etmek, dikkatini dağıtmak",
  },
  {
    german: "sich eingestehen",
    turkish: "hoş olmayan bir şeyi açıkça söylemek/kabul etmek",
  },
  { german: "verbringen", turkish: "geçirmek, harcamak" },
  { german: "minimieren", turkish: "azaltmak, en aza indirmek" },
  { german: "treffen", turkish: "karşılaşmak, tanışmak" },
  { german: "eigentlich", turkish: "aslında, gerçekten" },
  { german: "genießen", turkish: "keyif almak, tadını çıkarmak" },
  { german: "daher", turkish: "bu nedenle, dolayısıyla" },
  { german: "Wettbewerb/Wettkampf", turkish: "rekabet, yarışma" },
  {
    german: "Freizeitgestaltung",
    turkish: "boş zaman aktiviteleri, serbest zaman düzenleme",
  },
  { german: "hauptsächlich", turkish: "esas olarak, başlıca" },
  { german: "sich/etwas dehnen", turkish: "kendini/bir şeyi uzatmak, germek" },
  {
    german: "die Eigenschaft, -en",
    turkish: "özellik, karakterin bir parçası",
  },
  {
    german: "etwas ergeben",
    turkish: "bir şeyi sonuçlandırmak, belirli bir sonuç doğurmak",
  },
  {
    german: "der Einzelfall, -fälle",
    turkish: "istisna, bireysel olarak ele alınması gereken somut durum",
  },
  { german: "im Großen und Ganzen", turkish: "genel olarak, bütünüyle" },
  {
    german: "zu etwas stehen",
    turkish: "bir şeyin arkasında durmak, bir şeye bağlı kalmak",
  },
  {
    german: "etwas vermeiden",
    turkish: "bir şeyden kaçınmak, bir şeyin olmasına engel olmak",
  },
  {
    german: "die Täuschung, -en",
    turkish: "yanıltma, birine yanlış bir şey inandırma",
  },
  {
    german: "der Betrug, -üge",
    turkish: "kasıtlı yanıltma, avantaj elde etmek için aldatma",
  },
  { german: "vertrauenswürdig", turkish: "güvenilir, birine güvenilebilir" },
  { german: "sei es", turkish: "fark etmez, ne olursa olsun" },
  {
    german: "sich in die Lage von jemandem hineinversetzen",
    turkish: "birinin yerine kendini koymak, birine empati göstermek",
  },
  {
    german: "die Unaufrichtigkeit, -en",
    turkish: "samimiyetsizlik, dürüst olmama",
  },
  {
    german: "das Paradebeispiel, -e",
    turkish: "örnek teşkil eden durum, bir şeyi özellikle iyi gösteren örnek",
  },
  { german: "sich rausnehmen", turkish: "burada: katılmamak, iştirak etmemek" },
  { german: "schlimm", turkish: "korkunç, çok hoş olmayan" },
  {
    german: "der Wert, -e",
    turkish: "değer, bir şeyin/kişinin olumlu anlamı, önem",
  },
  {
    german: "die Notlüge, -n",
    turkish:
      "zararsız yalan, örneğin birine zarar vermemek için söylenen yalan",
  },
  { german: "aufrichtig", turkish: "dürüst, açık" },
  { german: "zugeben", turkish: "itiraf etmek" },
  { german: "vor allen Dingen", turkish: "her şeyden önce, özellikle" },
  { german: "quälen", turkish: "kendini zorlama" },
  { german: "durchziehen", turkish: "üstesinden gelme" },
  { german: "innerer Schweinehund", turkish: "tembellik/rahatlık" },
  { german: "sich überwinden", turkish: "kendini aşmak" },
  { german: "in dieser Hinsicht", turkish: "bu bakımdan" },
  { german: "Teamgeist", turkish: "takım ruhu" },
  { german: "freiwillig", turkish: "gönüllü" },
  { german: "gute Vorsätze", turkish: "yeni yıl kararları" },
  { german: "Karbileiche", turkish: "kayıtlı ama aktif olmayan kişi" },
  { german: "bewundern", turkish: "hayranlık duymak" },
  { german: "entstehen", turkish: "oluşmak" },
  { german: "mitreißen", turkish: "coşmak/motive olmak" },
  { german: "pumpen", turkish: "ağırlık kaldırmak" },
  { german: "ganzheitlich", turkish: "bütüncül" },
  { german: "Quälerei", turkish: "işkence/zorluk" },
  { german: "besiegen", turkish: "yenmek" },
  { german: "abhaken", turkish: "tamamlandı olarak işaretlemek" },
  { german: "Übertragung", turkish: "canlı yayın" },
  { german: "Sportsgeist", turkish: "spor ruhu" },
  { german: "EM", turkish: "Avrupa Şampiyonası" },
  { german: "WM", turkish: "Dünya Kupası" },
  { german: "unterm Strich", turkish: "sonuç olarak" },
  { german: "verkehrt", turkish: "yanlış" },
  { german: "Sportmuffel", turkish: "spora ilgisiz kişi" },
  { german: "outen", turkish: "ifşa etmek" },
  { german: "sich aufraffen", turkish: "kendini toparlamak" },
  { german: "mitnehmen", turkish: "bir şeyler öğrenmek" },
  {
    german: "sich um etwas drehen",
    turkish: "es geht um.../das Thema ist... (bir şey hakkında olmak)",
  },
  {
    german: "sich an etwas machen",
    turkish: "mit etwas beginnen, loslegen (bir şeye başlamak)",
  },
  {
    german: "im stillen Kämmerlein",
    turkish: "ganz allein, isoliert (yapayalnız, tecrit halinde)",
  },
  {
    german: "Kognitive Umstrukturierung",
    turkish:
      "kognitiv betrifft unser Denken; Umstrukturierung = Umbau (bilişsel düşüncemizi etkiler; yeniden yapılandırma)",
  },
  {
    german: "Geteiltes Leid ist halbes Leid",
    turkish:
      "Wenn man seine Sorgen teilt, sind sie nicht mehr so schlimm. (dertleri paylaştığında artık o kadar kötü olmaz)",
  },
  {
    german: "etwas hinterfragen",
    turkish:
      "sich fragen, ob etwas stimmt (bir şeyin doğru olup olmadığını sorgulamak)",
  },
  {
    german: "berechtigt",
    turkish:
      "wenn etwas zu Recht besteht oder einen guten Grund hat (haklı, geçerli bir nedeni olan)",
  },
  {
    german: "visualisieren",
    turkish: "sich etwas bildlich vorstellen (bir şeyi zihninde canlandırmak)",
  },
  { german: "reflektieren", turkish: "nachdenken (düşünmek)" },
  { german: "Beständigkeit", turkish: "süreklilik, istikrar" },
  { german: "das A und O", turkish: "en önemli şey" },
  { german: "erstaunt", turkish: "şaşırmış" },
  { german: "in die Sprache eintauchen", turkish: "dile dalın" },
  { german: "zur Verfügung stehen", turkish: "kullanımımızda olan" },
  { german: "gebräuchlich", turkish: "yaygın olarak kullanılan" },
  { german: "Selbstvertrauen", turkish: "özgüven" },
  { german: "messbar", turkish: "ölçülebilir" },
  { german: "konkret", turkish: "somut, belirli" },
  { german: "zurückblicken", turkish: "geriye bakmak" },
  { german: "nicht zuletzt", turkish: "son olarak, ayrıca" },
  { german: "ausdauernd", turkish: "sebatkar, dayanıklı" },
  { german: "ausschließlich", turkish: "sadece, yalnızca" },
  { german: "durchaus", turkish: "kesinlikle, elbette" },
  { german: "Partnergemeinschaften", turkish: "kardeş şehir ortaklıkları" },
  { german: "diverse", turkish: "çeşitli, birçok" },
  { german: "Austauschprogramme", turkish: "değişim programları" },
  { german: "gebracht haben", turkish: "faydası oldu mu" },
  { german: "so gut wie gar nicht", turkish: "neredeyse hiç" },
  { german: "bekannt vorkommen", turkish: "bu bana tanıdık geliyor" },
  { german: "Repertoire", turkish: "repertuvar" },
  { german: "verfolgen", turkish: "takip etmek, üzerine gitmek" },
  { german: "aufholen", turkish: "telafi etmek" },
  { german: "überhaupt nicht so", turkish: "hiç de öyle değil" },
  { german: "großartig", turkish: "çok iyi" },
  { german: "ins kalte Wasser geworfen", turkish: "soğuk suya atılır" },
  { german: "nachvollziehen", turkish: "anlayabiliyorum" },
  { german: "Werdegang", turkish: "hayat hikayesi" },
  { german: "verpflichtend", turkish: "zorunlu" },
  { german: "Lehramt", turkish: "öğretmenlik eğitimi" },
  { german: "Sprachpraxis", turkish: "dil pratiği" },
  { german: "Faktor", turkish: "faktör" },
  { german: "Notwendigkeit", turkish: "gereklilik" },
  { german: "Anreiz", turkish: "teşvik" },
  {
    german: "der Entzug, Entzüge",
    turkish:
      "Behandlung/Therapie, um von einer Sucht geheilt zu werden (bağımlılıktan kurtulmak için tedavi/terapi)",
  },
  {
    german: "etwas beschränken",
    turkish: "etwas begrenzen/einschränken (bir şeyi sınırlamak/kısıtlamak)",
  },
  {
    german: "etwas in den Griff bekommen",
    turkish:
      "etwas unter Kontrolle bekommen, eine Lösung für etwas finden (bir şeyi kontrol altına almak, çözüm bulmak)",
  },
  {
    german: "sozusagen",
    turkish: "wie man es ausdrücken könnte (tabir yerindeyse)",
  },
  {
    german: "zack",
    turkish:
      "Äußerung, die ausdrückt, dass etwas in (gefühlter) Sekundenschnelle passiert/beendet ist (bir şeyin aniden olduğunu ifade eden ses)",
  },
  {
    german: "etwas überwinden",
    turkish:
      "etwas Schwieriges meistern, mit etwas Schwierigem fertigwerden (zor bir şeyin üstesinden gelmek)",
  },
  {
    german: "losschießen (oft im Imperativ)",
    turkish:
      "zu sprechen anfangen, etwas sagen/berichten (konuşmaya başlamak, anlatmak)",
  },
  {
    german: "allererstes",
    turkish: "Verstärkung für erstes (ilk'in güçlendirilmiş hali)",
  },
  {
    german: "etwas verfolgen",
    turkish:
      "hier: etwas aufmerksam beobachten, etwas kontrollieren/im Auge behalten (burada: dikkatli takip etmek, gözlemlemek)",
  },
  {
    german: "auf etwas/jemanden angewiesen sein",
    turkish:
      "etwas/jemanden brauchen, von etwas/jemandem abhängig sein (bir şeye/birine bağımlı olmak, ihtiyaç duymak)",
  },
  {
    german: "die Benachrichtigung, en",
    turkish: "die Mitteilung, der Bescheid, die Nachricht (bildirim, haber)",
  },
  {
    german: "im Endeffekt",
    turkish: "letztlich, letzten Endes (sonuçta, nihayetinde)",
  },
  {
    german: "etwas erfüllen",
    turkish:
      "etwas abdecken/befriedigen, etwas (D) entsprechen (bir şeyi karşılamak/tatmin etmek)",
  },
  {
    german: "das Bedürfnis, se",
    turkish:
      "die Lebensnotwendigkeit, das, was jemand zum Leben braucht (ihtiyaç, yaşam gereksinimleri)",
  },
  {
    german: "die Achtsamkeit",
    turkish:
      "die Aufmerksamkeit, das bewusste Erleben eines Moments/der Gegenwart (farkındalık, anın bilinçli yaşanması)",
  },
  {
    german: "studiVZ",
    turkish:
      "deutschsprachiges soziales Netzwerk für Studenten (2005-2022) (öğrenciler için Almanca sosyal ağ)",
  },
  {
    german: "abdriften",
    turkish:
      "sich entfernen, eine andere Richtung einschlagen, abweichen (uzaklaşmak, farklı yöne gitmek)",
  },
  {
    german: "jemanden/etwas vernachlässigen",
    turkish:
      "sich zu wenig um etwas/jemanden kümmern (birine/bir şeye yeterince ilgi göstermemek)",
  },
  {
    german: "die Maßnahme, n",
    turkish: "die Aktion, die Handlung, die Regelung (önlem, tedbir, eylem)",
  },
  {
    german: "etwas ergreifen",
    turkish:
      "hier: einleiten und durchführen, übernehmen (burada: başlatmak ve yürütmek, almak)",
  },
  {
    german: "das Stichwort",
    turkish:
      "ein Wort, das in ein Thema einführt (bir konuya giriş yapan kelime)",
  },
  { german: "das Tief", turkish: "eine depressive Phase (depresif dönem)" },
  {
    german: "über kurz oder lang",
    turkish:
      "etwas passiert irgendwann, es ist nur eine Frage der Zeit (bir şey er ya da geç olur, sadece zaman meselesi)",
  },
  {
    german: "im Zuge dessen",
    turkish:
      "aus diesem Grund, als Reaktion auf eine Sache (bu nedenle, bir şeye tepki olarak)",
  },
  {
    german: "die Selbstfürsorge",
    turkish:
      "sich um sich selbst kümmern, sich etwas Gutes tun (kendine bakmak, kendine iyi davranmak)",
  },
  {
    german: "die Seele",
    turkish:
      "die Gesamtheit aller Gefühle und geistigen Prozesse eines Menschen (kişinin tüm duygularının ve zihinsel süreçlerinin bütünü)",
  },
  {
    german: "etwas streichen",
    turkish:
      "etwas nicht mehr machen, eliminieren (bir şeyi artık yapmamak, elimine etmek)",
  },
  { german: "freisetzen", turkish: "im Körper produzieren (vücutta üretmek)" },
  { german: "Endorphine", turkish: "Glückshormone (mutluluk hormonları)" },
  { german: "permanent", turkish: "ständig, andauernd (sürekli, devamlı)" },
  {
    german: "Was auch immer!",
    turkish: "ganz egal, was es ist (ne olursa olsun!)",
  },
  {
    german: "vernachlässigen",
    turkish: "weniger tun, als man will/soll (istenenden/gerekenden az yapmak)",
  },
  {
    german: "Das ist Geschichte.",
    turkish: "Es ist in der Vergangenheit (geçmişte kaldı)",
  },
  { german: "literweise", turkish: "mehrere Liter (birkaç litre)" },
  {
    german: "sich den Magen verderben",
    turkish:
      "wenn der Magen kurzzeitig krank wird, z. B. wegen schlechtem Essen (mide kötü yemek yüzünden geçici olarak hasta olduğunda)",
  },
  {
    german: "die Stressbewältigung",
    turkish: "Wege, um den Stress loszuwerden (stresten kurtulma yolları)",
  },
  {
    german: "etwas durchziehen",
    turkish:
      "etwas bis zum Schluss machen, fertigstellen (bir şeyi sonuna kadar yapmak, tamamlamak)",
  },
  {
    german: "sich etwas aneignen",
    turkish:
      "etwas lernen, sich an etwas gewöhnen (bir şey öğrenmek, bir şeye alışmak)",
  },
  {
    german: "jemanden/etwas ausmachen",
    turkish:
      "das Wesentliche an jemandem/etwas sein (birinin/bir şeyin özünü oluşturmak)",
  },
  {
    german: "scheitern",
    turkish: "keinen Erfolg haben, nicht erfolgreich sein (başarısız olmak)",
  },
  {
    german: "der Zwang, Zwänge",
    turkish: "der Druck, das Muss (baskı, zorunluluk)",
  },
  {
    german: "gierig",
    turkish: "hungrig, hier auch: neidisch (aç, burada: kıskanç)",
  },
  {
    german: "einknicken",
    turkish:
      "seine Meinung ändern, den bisherigen Standpunkt aufgeben (fikrini değiştirmek, tutumunu bırakmak)",
  },
  {
    german: "schwach",
    turkish:
      "nicht stark, nicht genug Kraft haben (zayıf, yeterli güce sahip olmamak)",
  },
  {
    german: "Der Wille ist stark, aber das Fleisch ist schwach",
    turkish:
      "gute Vorsätze werden aus Bequemlichkeit oder menschlicher Schwäche nicht befolgt (iyi niyetler rahatlık veya insani zayıflık yüzünden takip edilmez - deyim)",
  },
  {
    german: "sich für etwas schämen",
    turkish:
      "etwas ist jemandem peinlich, man fühlt sich unwohl (bir şey için utanmak)",
  },
  {
    german: "der Umstand, Umstände",
    turkish: "unnötige Mühe, die Mehrarbeit (gereksiz zahmet, ekstra iş)",
  },
  {
    german: "jemanden ausgrenzen",
    turkish:
      "jemanden aus einer Gruppe/Gemeinschaft ausschließen (birini gruptan dışlamak)",
  },
  {
    german: "die Seide",
    turkish:
      "sehr feines Material, das aus dem Kokon eines Schmetterlings hergestellt wird (kelebek kozasından yapılan çok ince malzeme)",
  },
  {
    german: "die Raupe",
    turkish: "Larve eines Schmetterlings (kelebek larvası)",
  },
  {
    german: "tierversuchsfrei",
    turkish:
      "ohne Tierversuche hergestellt (hayvan deneyleri olmadan üretilmiş)",
  },
  { german: "mit etwas rechnen", turkish: "etwas erwarten (bir şey beklemek)" },
  {
    german: "unfreiwillig",
    turkish:
      "hier: zufällig, ungeplant, ohne Absicht (burada: tesadüfi, plansız)",
  },
  {
    german: "von etwas ausgehen",
    turkish: "etwas annehmen/denken (bir şey varsaymak)",
  },
  {
    german: "anscheinend",
    turkish: "offenbar, wohl, vermutlich (görünüşe göre, muhtemelen)",
  },
  {
    german: "pur",
    turkish: "bloß, nichts anderes als (saf, başka bir şey değil)",
  },
  {
    german: "etwas labeln",
    turkish: "etwas mit einem Label versehen (bir şeyi etiketlemek)",
  },
  {
    german: "der Aufstrich",
    turkish:
      "etwas, was auf ein Brot gestrichen werden kann (ekmek üzerine sürülebilen şey)",
  },
  {
    german: "sich von etwas verabschieden",
    turkish: "etwas aufgeben, sich von etwas trennen (bir şeyden vazgeçmek)",
  },
  {
    german: "jemandem schaden",
    turkish: "ein Nachteil/schlecht für jemanden sein (birine zarar vermek)",
  },
  {
    german: "stricken",
    turkish:
      "aus einem Faden/Wolle ein Kleidungsstück herstellen (iplik/yünden giysi yapmak)",
  },
  {
    german: "bestehen",
    turkish: "da/vorhanden sein, existieren (var olmak, mevcut olmak)",
  },
  {
    german: "etwas entsorgen",
    turkish:
      "etwas wegwerfen, etwas in den Müll werfen (bir şeyi atmak, çöpe atmak)",
  },
  {
    german: "die Einstellung",
    turkish: "die Meinung, die Ansicht, der Standpunkt (görüş, tutum)",
  },
  { german: "quasi", turkish: "sozusagen, in dem Sinne (yani, o anlamda)" },
  {
    german: "eingeschränkt",
    turkish:
      "nicht frei, mit Schmerzen oder Hindernissen (özgür değil, ağrılarla veya engellerle)",
  },
  {
    german: "sich wohlfühlen",
    turkish: "sich gut fühlen (kendini iyi hissetmek)",
  },
  {
    german: "das Wohlbefinden",
    turkish: "sich wohlfühlen (kendini iyi hissetmek)",
  },
  {
    german: "die Einschränkung",
    turkish: 'Nomen von eingeschränkt ("eingeschränkt"ın isim hali)',
  },
  {
    german: "beschwerdefrei",
    turkish: "ohne Beschwerden/Schmerzen (şikayetsiz/ağrısız)",
  },
  {
    german: "unbeschwert",
    turkish:
      "frei, ohne Probleme oder Schmerzen (özgür, problemsiz veya ağrısız)",
  },
  {
    german: "psychisch",
    turkish: "die Psyche, den Geist betreffend (ruh, zihin ile ilgili)",
  },
  { german: "physisch", turkish: "den Körper betreffend (vücut ile ilgili)" },
  { german: "die Partizipation", turkish: "die Teilnahme (katılım)" },
  {
    german: "Wert legen auf",
    turkish: "wenn jemandem eine Sache wichtig ist (birine bir şey önemliyse)",
  },
  {
    german: "die Wirbelsäulengymnastik",
    turkish:
      "Übungen für den Rücken und die Wirbelsäule (sırt ve omurga için egzersizler)",
  },
  {
    german: "die Vorsorgeuntersuchung",
    turkish:
      "wenn man zum Arzt geht, bevor man krank ist; präventiv (hasta olmadan önce doktora gitmek; önleyici)",
  },
  {
    german: "der Stellenwert",
    turkish:
      "die Bedeutung einer Sache für eine Person (bir şeyin kişi için önemi)",
  },
  {
    german: "selbstverständlich",
    turkish: "normal, ohne es in Frage zu stellen (normal, sorgulamadan)",
  },
  { german: "essenziell", turkish: "grundlegend, wichtig (temel, önemli)" },
  { german: "existentiell", turkish: "zum Leben wichtig (yaşam için önemli)" },
  {
    german: "ursprünglich",
    turkish: "eigentlich, anfänglich, zuerst (aslında, başlangıçta, önce)",
  },
  {
    german: "jemanden begeistern",
    turkish:
      "jemanden faszinieren, Interesse in jemandem wecken (birini büyülemek, birinde ilgi uyandırmak)",
  },
  {
    german: "das Abitur, e",
    turkish:
      "höherer Schulabschluss, mit dem man studieren kann (üniversiteye girebilmek için gerekli lise diploması)",
  },
  {
    german: "jedenfalls",
    turkish: "auf jeden Fall, schließlich (her halükarda, nihayetinde)",
  },
  {
    german: "jemanden (zu etwas) hinziehen",
    turkish:
      "jemand findet etwas besonders attraktiv oder interessant (biri bir şeyi özellikle çekici veya ilginç bulur)",
  },
  {
    german: "dem war (überhaupt) nicht so",
    turkish:
      "das war (überhaupt) nicht so, das stimmte (überhaupt) nicht (öyle hiç değildi, bu hiç doğru değildi)",
  },
  {
    german: "sich verständigen",
    turkish:
      "sich mitteilen/verständlich machen, sprechen (kendini anlatmak/anlaşılır kılmak, iletişim kurmak)",
  },
  {
    german: "etwas aufsaugen",
    turkish:
      "hier: (Informationen/Wissen) aufnehmen (burada: bilgi/beceri emmek, almak)",
  },
  {
    german: "echt",
    turkish: "wirklich (umgangssprachlich) (gerçekten - günlük dil)",
  },
  {
    german: "voll",
    turkish: "sehr, total (umgangssprachlich) (çok, tamamen - günlük dil)",
  },
  {
    german: "jemandem geht etwas aus",
    turkish:
      "jemand hat von etwas immer weniger, bis nichts mehr übrig ist (birinin bir şeyi bitmek, tükenmek)",
  },
  { german: "die Gastro", turkish: "die Gastronomie (gastronomi - kısaltma)" },
  { german: "tingeln", turkish: "herumlaufen (dolaşmak)" },
  {
    german: "letztendlich",
    turkish: "schließlich, am Ende, zu guter Letzt (sonunda, nihayetinde)",
  },
  {
    german: "der Grundstein, e",
    turkish: "die Basis, der Anfang (temel, başlangıç)",
  },
  {
    german: "der Flyer, -",
    turkish:
      "Papier mit Informationen, der Handzettel (bilgi içeren kağıt, broşür)",
  },
  {
    german: "landen",
    turkish:
      "hier: überraschend, ungeplant an einen bestimmten Ort kommen (burada: beklenmedik şekilde bir yere gelmek)",
  },
  {
    german: "dolmetschen",
    turkish: "mündlich übersetzen (sözlü çeviri yapmak)",
  },
  {
    german: "das Hochspanisch",
    turkish:
      "standardisiertes Spanisch, allgemein verbindliches Spanisch (standartlaştırılmış İspanyolca)",
  },
  {
    german: "sich (D) etwas (A) abgewöhnen",
    turkish:
      "etwas nicht mehr machen, eine (schlechte) Gewohnheit ablegen (bir şeyi artık yapmamak, alışkanlığı bırakmak)",
  },
  {
    german: "stark",
    turkish:
      "hier: sehr ausgeprägt, deutlich hörbar (burada: çok belirgin, açıkça duyulur)",
  },
  {
    german: "das Geschlecht, er",
    turkish:
      "in der Biologie: männlich oder weiblich, in der Grammatik: das Genus (biyolojide: erkek veya dişi, gramer: cins)",
  },
  {
    german: "gendern",
    turkish:
      "bestimmte sprachliche Mittel verwenden, um Menschen aller Geschlechtsidentitäten anzusprechen (tüm cinsiyet kimliklerindeki insanları hitap etmek için belirli dil araçları kullanmak)",
  },
  {
    german: "der Ursprung, Ursprünge",
    turkish: "der Beginn, der Anfang, der Ausgangspunkt (başlangıç, kaynak)",
  },
  {
    german: "etwas zugeben",
    turkish:
      "etwas gestehen/anerkennen, etwas (Unangenehmes) offen aussprechen (bir şeyi itiraf etmek/kabul etmek)",
  },
  { german: "etwas verfassen", turkish: "etwas schreiben (bir şey yazmak)" },
  {
    german: "die Quellenangaben, n",
    turkish:
      "Angabe/Liste der genutzten/zitierten Quellen (kullanılan/alıntı yapılan kaynakların belirtilmesi)",
  },
  {
    german: "die Klammer, n",
    turkish: "Schriftzeichen: ( ) (parantez işareti)",
  },
  {
    german: "das Erscheinungsjahr, e",
    turkish:
      "Jahr, in dem etwas erschienen ist/veröffentlicht wurde (bir şeyin yayınlanma yılı)",
  },
  {
    german: "das Sternchen, -",
    turkish:
      "hier: das Gendersternchen, z.B. in Lehrer*innen (burada: cinsiyet yıldızı)",
  },
  {
    german: "die Umstellung, en",
    turkish: "die Veränderung, der Wechsel (değişiklik, geçiş)",
  },
  {
    german: "in Erscheinung treten",
    turkish: "erscheinen, sichtbar/zu sehen sein (görünmek, ortaya çıkmak)",
  },
  {
    german: "mit gemeint",
    turkish:
      "implizit enthalten, aber nicht ausdrücklich gesagt (ima edilmiş, ama açıkça söylenmemiş)",
  },
  {
    german: "praktikabel",
    turkish: "brauchbar, nützlich, durchführbar (kullanışlı, uygulanabilir)",
  },
  {
    german: "umständlich",
    turkish: "kompliziert, unpraktisch (karmaşık, pratik olmayan)",
  },
  {
    german: "der Schwachpunkt, e",
    turkish: "die Schwäche, der Nachteil (zayıf nokta, dezavantaj)",
  },
  {
    german: "etwas durchziehen",
    turkish:
      "etwas (trotz Schwierigkeiten) zu Ende führen (zorluklara rağmen sonuna kadar götürmek)",
  },
  {
    german: "sich (D) etwas (A) eingestehen",
    turkish:
      "(eine Schwäche, einen Fehler) zugeben/offen aussprechen (bir zayıflığı, hatayı itiraf etmek)",
  },
  {
    german: "jemanden/etwas abbilden",
    turkish:
      "jemanden/etwas darstellen, hier auch: jemanden ansprechen/zum Ausdruck bringen (birini/bir şeyi temsil etmek, burada: hitap etmek)",
  },
  {
    german: "langwierig",
    turkish:
      "wenn etwas viel Zeit braucht und dabei mühsam/schwierig ist (uzun süren ve zahmetli)",
  },
  {
    german: "etwas vermerken",
    turkish:
      "etwas anmerken/notieren/festhalten (bir şeyi not etmek/kaydetmek)",
  },
  {
    german: "die Hürde, n",
    turkish: "die Barriere, die Schwierigkeit, das Hindernis (engel, zorluk)",
  },
  {
    german: "das generische Femininum",
    turkish:
      "die Verwendung einer femininen Personenbezeichnung in einem generischen Sinn (genel anlamda dişil kişi adlandırmasının kullanımı)",
  },
  {
    german: "etwas handhaben",
    turkish:
      "etwas in bestimmter Art und Weise durchführen/praktizieren (bir şeyi belirli şekilde ele almak/uygulamak)",
  },
  {
    german: "etwas festlegen",
    turkish:
      "etwas beschließen/bestimmen, Regeln vorschreiben (bir şeyi belirlemek/karar vermek)",
  },
  {
    german: "etwas fortsetzen",
    turkish: "etwas weiterführen/weitermachen (bir şeyi devam ettirmek)",
  },
  {
    german: "alles kann, nichts muss",
    turkish:
      "man ist offen für alles, aber hat keine Erwartungen (her şeye açık olmak, ama beklenti olmamak)",
  },
  {
    german: "jemanden betreffen",
    turkish:
      "etwas hat einen Einfluss/eine Wirkung auf jemanden (birinin üzerinde etkisi/tesiri olmak)",
  },
  {
    german: "das Lebewesen, -",
    turkish:
      "der Organismus, besonders Tiere oder Menschen (organizma, özellikle hayvanlar veya insanlar)",
  },
  {
    german: "etwas verursachen",
    turkish:
      "der Grund/die Ursache für etwas sein (bir şeyin nedeni/sebebi olmak)",
  },
  {
    german: "vielschichtig",
    turkish:
      "kompliziert, heterogen, vielfältig (karmaşık, heterojen, çeşitli)",
  },
  {
    german: "die Maßnahme, n",
    turkish: "die Aktion, die Handlung, der Schritt (eylem, hareket, adım)",
  },
  {
    german: "etwas beitragen",
    turkish: "bei etwas mithelfen (bir şeyde yardım etmek)",
  },
  {
    german: "der CO2-Fußabdruck, abdrücke",
    turkish:
      "Bilanz aller Emissionen, die durch einen Menschen und seine Aktivitäten verursacht werden (bir insan ve faaliyetlerinin neden olduğu tüm emisyonların bilançosu)",
  },
  { german: "die Bedrohung, en", turkish: "die Gefahr (tehlike)" },
  {
    german: "etwas verringern",
    turkish: "etwas verkleinern/reduzieren (bir şeyi küçültmek/azaltmak)",
  },
  {
    german: "etwas abschwächen",
    turkish:
      "etwas schwächer/geringer machen, etwas reduzieren/verringern (bir şeyi daha zayıf/az yapmak, azaltmak)",
  },
  {
    german: "das Gerät, e",
    turkish: "der Apparat, der Gegenstand (alet, cihaz, nesne)",
  },
  {
    german: "die Bemühung, en",
    turkish:
      "die Anstrengung, das Engagement, die aktive Arbeit für etwas (çaba, gayret, bir şey için aktif çalışma)",
  },
  {
    german: "die Erhaltung, en",
    turkish:
      "die Konservierung, die Pflege, das Weiterbestehen (koruma, bakım, devam etme)",
  },
  {
    german: "nachhaltig",
    turkish:
      "so, dass nicht mehr verbraucht wird, als nachwachsen oder sich regenerieren kann (yenilenebileceğinden fazla tüketilmeyen şekilde)",
  },
  { german: "dringend", turkish: "eilig, akut (acil, ivedi)" },
  {
    german: "etwas angehen",
    turkish:
      "anfangen, sich mit etwas zu beschäftigen, etwas in Angriff nehmen (başlamak, bir şeyle uğraşmaya başlamak, ele almak)",
  },
  {
    german: "für etwas/jemanden eintreten",
    turkish:
      "sich für etwas/jemanden einsetzen/aktiv werden (bir şey/biri için çaba göstermek/aktif olmak)",
  },
  {
    german: "erneuerbare Energie, n",
    turkish:
      "regenerative Energie, die praktisch unendlich verfügbar ist, z.B. Solar- oder Windenergie (pratik olarak sonsuz mevcut olan yenilenebilir enerji, örn. güneş veya rüzgar enerjisi)",
  },
  {
    german: "die Abkehr (nur Singular)",
    turkish:
      "die Trennung, etwas nicht mehr nutzen (ayrılma, bir şeyi artık kullanmama)",
  },
  {
    german: "fossil",
    turkish:
      "Stoff, der in geologischer Vorzeit entstanden ist und nicht erneuerbar ist (jeolojik geçmişte oluşmuş ve yenilenemeyen madde)",
  },
  {
    german: "der Brennstoff, e",
    turkish:
      "Material/Stoff zum Heizen/um Wärme zu produzieren (ısıtma/ısı üretmek için malzeme/madde)",
  },
  {
    german: "die Hinwendung, en",
    turkish:
      "die Orientierung, die Beschäftigung, hier auch: die Nutzung (yönelim, uğraş, burada: kullanım)",
  },
  {
    german: "das Treibhausgas, e",
    turkish:
      "Gas, das den Treibhauseffekt verursacht, z.B. Kohlendioxid (sera etkisine neden olan gaz, örn. karbondioksit)",
  },
  { german: "handeln", turkish: "aktiv werden (aktif olmak, harekete geçmek)" },
  {
    german: "etwas bewirken",
    turkish:
      "etwas verursachen, hier auch: etwas verändern/verbessern (bir şeye sebep olmak, burada: bir şeyi değiştirmek/iyileştirmek)",
  },
  {
    german: "der Begriff, e",
    turkish: "das Wort, der Ausdruck (kelime, ifade)",
  },
  {
    german: "knackig",
    turkish: "hier: prägnant, treffend (burada: özlü, isabetli)",
  },
  {
    german: "die Anhängerin, nen",
    turkish: "der Fan, die Vertreterin (hayran, savunucu)",
  },
  {
    german: "(sich) halten",
    turkish:
      "in gutem Zustand bleiben, in gleicher Form bleiben (iyi durumda kalmak, aynı formda kalmak)",
  },
  {
    german: "der Grad, e",
    turkish: "hier: das Maß, das Ausmaß (burada: ölçü, boyut)",
  },
  {
    german: "etwas bereuen",
    turkish:
      "sich wünschen, dass man etwas anders gemacht hätte (bir şeyi farklı yapmış olmayı dilemek)",
  },
  {
    german: "wandern",
    turkish: "hier: landen, weggeworfen werden (buradya: gitmek, atılmak)",
  },
  {
    german: "sich (mit etwas) schwertun",
    turkish:
      "(mit etwas) Schwierigkeiten haben, etwas fällt jemandem schwer (bir şeyde zorlanmak, bir şeyin zor gelmesi)",
  },
  {
    german: "der Rohstoff, e",
    turkish:
      "ein Stoff, den die Natur liefert, z.B. Kohle, Öl oder Holz (doğanın sağladığı madde, örn. kömür, petrol veya ahşap)",
  },
  {
    german: "die Unmenge, n",
    turkish: "sehr große Menge, sehr viel (çok büyük miktar, çok fazla)",
  },
  {
    german: "etwas verschwenden",
    turkish:
      "etwas unnötig/sinnlos verbrauchen (bir şeyi gereksiz/anlamsızca tüketmek)",
  },
  { german: "gelangen", turkish: "kommen (gelmek, ulaşmak)" },
  {
    german: "das Abwasser, -wässer/wasser",
    turkish:
      "schmutziges Wasser durch häusliche oder industrielle Nutzung (evsel veya endüstriyel kullanım sonucu kirli su)",
  },
  {
    german: "etwas entsorgen",
    turkish: "etwas wegwerfen/entfernen (bir şeyi atmak/kaldırmak)",
  },
  {
    german: "vermeidbar",
    turkish:
      "etwas, was vermieden werden kann, unnötig (kaçınılabilir, gereksiz)",
  },
  { german: "einstürzen", turkish: "in sich zusammenfallen (çökmek)" },
  {
    german: "etwas mitbekommen",
    turkish:
      "etwas hören/sehen, etwas verstehen (bir şeyi duymak/görmek, anlamak)",
  },
  {
    german: "herrschen",
    turkish: "verbreitet/vorhanden sein (yaygın/mevcut olmak)",
  },
  { german: "die High-End-Marke, n", turkish: "die Luxusmarke (lüks marka)" },
  {
    german: "die Vorschrift, en",
    turkish: "die Regel, die Anordnung (kural, düzenleme)",
  },
  {
    german: "etwas einhalten",
    turkish:
      "etwas befolgen/erfüllen, sich an etwas halten (bir şeyi uygulama/yerine getirmek, bir şeye uymak)",
  },
  {
    german: "das Anführungszeichen, -",
    turkish:
      'Satzzeichen, vor allem Anfang und Ende wörtlicher Rede („...") (noktalama işareti, özellikle doğrudan konuşmanın başı ve sonu)',
  },
  {
    german: "zeitlos",
    turkish:
      "zeitlich unbegrenzt, unabhängig von bestimmten Trends (zamansız, belirli trendlerden bağımsız)",
  },
  {
    german: "einlaufen",
    turkish: "beim Waschen kleiner/enger werden (yıkarken küçülmek/daralmak)",
  },
  {
    german: "jemandem etwas überlassen",
    turkish:
      "jemand kann selbst über etwas entscheiden (birinin bir şey hakkında kendisi karar verebilmesi)",
  },
  {
    german: "in Maßen",
    turkish:
      "nicht zu viel, ohne Übertreibung, in der richtigen Menge (fazla olmadan, abartısız, doğru miktarda)",
  },
  {
    german: "etwas auf etwas (anderes) anwenden",
    turkish:
      "etwas übertragen, auf etwas beziehen (bir şeyi aktarmak, bir şeye uygulamak)",
  },
  {
    german: "heil",
    turkish: "unbeschädigt, gesund, intakt (hasarsız, sağlıklı, bozulmamış)",
  },
  {
    german: "der Zeitgeist, er",
    turkish:
      "allgemeine Haltung/Denkweise in einer bestimmten Zeit (belirli bir zamandaki genel tavır/düşünce tarzı)",
  },
  {
    german: "der Schornstein, e",
    turkish:
      "langer Schacht eines Hauses/einer Fabrik für Rauch/Abgase (ev/fabrikanın duman/egzoz gazları için uzun bacası)",
  },
  {
    german: "(he)rumliegen",
    turkish:
      "ungeordnet (und nutzlos) irgendwo liegen (düzensizce (ve yararsızca) bir yerde bulunmak)",
  },
  {
    german: "ersticken",
    turkish:
      "sterben, weil man nicht mehr atmen kann (nefes alamadığı için ölmek)",
  },
  {
    german: "der Dreck (nur Singular)",
    turkish: "der Schmutz, der Müll (pislik, çöp)",
  },
  {
    german: "die Kohle, n",
    turkish:
      "braunes bis schwarzes Material zum Heizen oder Brennen (ısıtma veya yakma için kahverengi-siyah malzeme)",
  },
  {
    german: "etwas abschaffen",
    turkish:
      "etwas aufgeben, etwas nicht mehr haben (bir şeyden vazgeçmek, artık sahip olmamak)",
  },
  {
    german: "der Stoffbeutel, -",
    turkish:
      "Tragetasche aus textilem Material (tekstil malzemeden taşıma çantası)",
  },
  {
    german: "der Kaffeegrund (nur Singular)",
    turkish:
      "restliches Kaffeepulver nach dem Kaffeekochen (kahve pişirdikten sonra kalan kahve telvesi)",
  },
  {
    german: "ab und an",
    turkish: "ab und zu, manchmal, hin und wieder (arada sırada, bazen)",
  },
  {
    german: "etwas aufheben",
    turkish: "etwas vom Boden (weg)nehmen (yerden bir şeyi almak)",
  },
  {
    german: "etwas (he)runterdrehen",
    turkish:
      "etwas auf eine niedrigere Stufe stellen (bir şeyi daha düşük seviyeye getirmek)",
  },
  {
    german: "etwas anhaben",
    turkish: "hier: etwas eingeschaltet haben (burada: bir şeyin açık olması)",
  },
  { german: "schnippen", turkish: "hier: werfen (burada: atmak)" },
  {
    german: "etwas beziehen",
    turkish: "etwas bekommen/erhalten (bir şey almak/elde etmek)",
  },
  {
    german: "etwas belasten",
    turkish:
      "etwas (D) schaden, etwas (zu) stark beanspruchen (bir şeye zarar vermek, aşırı yüklemek)",
  },
  {
    german: "reinschrauben",
    turkish:
      "hier: Glühbirnen in die Fassung drehen (burada: ampulleri duyya takmak)",
  },
  {
    german: "etwas verabschieden",
    turkish:
      "(ein Gesetz) annehmen/beschließen (bir yasayı kabul etmek/karar vermek)",
  },
  {
    german: "die Auflage, n",
    turkish: "die Verpflichtung, die Bedingung (yükümlülük, koşul)",
  },
  {
    german: "der gläserne Staat",
    turkish:
      "Staat, in dem alle Bürger überwacht/kontrolliert werden (tüm vatandaşların gözetlendiği/kontrol edildiği devlet)",
  },
  {
    german: "sich an den eigenen Ohren packen",
    turkish:
      "selbst für etwas verantwortlich sein, seine eigenen Fehler sehen (bir şeyden kendinin sorumlu olması, kendi hatalarını görmek)",
  },
  { german: "das Etwas, -", turkish: "die Sache, das Ding (şey, nesne)" },
  {
    german: "zeitgemäß",
    turkish: "aktuell, der Zeit angemessen (güncel, zamana uygun)",
  },
  {
    german: "der Energiehaushalt, e",
    turkish: "Gesamtverbrauch an Energie (toplam enerji tüketimi)",
  },
  {
    german: "der Plastebecher, -",
    turkish: "der Plastikbecher (plastik bardak)",
  },
  {
    german: "etwas hochdrehen",
    turkish:
      "etwas auf eine höhere Stufe stellen (bir şeyi daha yüksek seviyeye getirmek)",
  },
  {
    german: "gefrieren",
    turkish:
      "durch Kälte zu Eis/fest und hart werden (soğuktan dolayı buz/katı ve sert hale gelmek)",
  },
  {
    german: "das Vesper, -",
    turkish:
      "kleinere Mahlzeit, auch: das Abendessen (küçük öğün, ayrıca: akşam yemeği)",
  },
  {
    german: "etwas knallen",
    turkish:
      "etwas (mit viel Kraft) irgendwohin werfen (bir şeyi (güçlü bir şekilde) bir yere atmak)",
  },
  {
    german: "jemandem eine Bühne geben/bieten",
    turkish:
      "jemanden in den Mittelpunkt stellen, jemandem Aufmerksamkeit schenken (birini merkeze koymak, birine ilgi göstermek)",
  },
  {
    german: "im Anschluss",
    turkish: "danach, anschließend (sonrasında, ardından)",
  },
  {
    german: "ausgerechnet",
    turkish:
      "gerade (Partikel, die den folgenden Satzteil betont) (tam (takip eden cümle parçasını vurgulayan kelime))",
  },
  {
    german: "bemerkenswert",
    turkish:
      "ungewöhnlich, in hohem Maß, beachtlich (olağandışı, yüksek derecede, dikkate değer)",
  },
  {
    german: "sich tarnen",
    turkish:
      'sich durch Anpassung unkenntlich/"unsichtbar" machen, sich vor Entdeckung schützen (uyum sağlayarak tanınmaz/"görünmez" hale gelmek, keşfedilmekten korunmak)',
  },
  {
    german: "die Umgebung, en",
    turkish: "alles, was um einen herum ist (etrafta olan her şey)",
  },
  {
    german: "Sachen gibt´s!",
    turkish:
      "Ausruf, um Überraschung/Erstaunen zu zeigen (şaşkınlık/hayret göstermek için ünlem)",
  },
  { german: "kräftig", turkish: "stark, mit viel Kraft (güçlü, çok güçle)" },
  {
    german: "der Schlag, Schläge",
    turkish:
      "starke, schnelle Bewegung mit dem Arm/den Armen auf etwas/jemanden (kol/kollarla bir şeye/birine karşı güçlü, hızlı hareket)",
  },
  { german: "geläufig", turkish: "bekannt, vertraut (bilinen, tanıdık)" },
  { german: "heftig", turkish: "hart, stark (sert, güçlü)" },
  {
    german: "etwas ausführen",
    turkish: "machen, tun (yapmak, gerçekleştirmek)",
  },
  {
    german: "die Geschwindigkeit, en",
    turkish: "die Schnelligkeit, das Tempo (hız, tempo)",
  },
  {
    german: "pro Stunde (kann weggelassen werden)",
    turkish:
      'Julia sagt hier 112 km/h pro Stunde, "pro Stunde" kann weggelassen werden (Julia burada saatte 112 km/h diyor, "saatte" çıkarılabilir)',
  },
  {
    german: "schlagen",
    turkish:
      "hier: mit den Flügeln mehrfach schnelle Bewegungen machen (burada: kanatlarla birkaç kez hızlı hareketler yapmak)",
  },
  {
    german: "der Flügel, -",
    turkish:
      "Organ, mit dem Vögel oder Insekten fliegen (kuşların veya böceklerin uçtuğu organ)",
  },
  {
    german: "etwas wahrnehmen",
    turkish: "hier: sehen, bemerken (burada: görmek, fark etmek)",
  },
  {
    german: "das Säugetier, e",
    turkish:
      "Tierart, bei der die Jungtiere bei ihren Müttern an der Brust trinken (=säugen), der Mensch z.B. ist auch ein Säugetier (yavrularının annelerinin göğsünden süt içtiği (=emzirdiği) hayvan türü, örneğin insan da bir memelidir)",
  },
  {
    german: "der Schnabel, Schnäbel",
    turkish:
      "spitzer Körperteil vorn am Kopf (besonders bei Vögeln) (kafanın önündeki sivri vücut parçası (özellikle kuşlarda))",
  },
  {
    german: "die Elektrorezeptoren (nur im Plural)",
    turkish:
      "Sinnesorgane bestimmter Tiere für die Orientierung in einem elektrischen Feld (belirli hayvanların elektrik alanında yönelim için duyu organları)",
  },
  {
    german: "etwas/jemanden aufspüren",
    turkish:
      "etwas/jemanden entdecken/finden (bir şeyi/birini keşfetmek/bulmak)",
  },
  {
    german: "die Beute, n",
    turkish:
      "hier: Tiere, die von anderen Tieren gejagt und gefressen werden (burada: diğer hayvanlar tarafından avlanan ve yenen hayvanlar)",
  },
  {
    german: "Wahnsinn",
    turkish:
      "Ausruf, um seine Begeisterung zu zeigen (coşkuyu göstermek için ünlem)",
  },
  {
    german: "voll",
    turkish:
      "hier: sehr, total (sehr umgangssprachlich) (burada: çok, tamamen (çok günlük dil))",
  },
  {
    german: "die Vielfalt (nur Singular)",
    turkish:
      "große Auswahl, breites Spektrum, die Diversität (büyük seçenek, geniş spektrum, çeşitlilik)",
  },
  {
    german: "der Beitrag, Beiträge",
    turkish: "die Mitarbeit, die Mitwirkung (işbirliği, katkı)",
  },
  {
    german: "das Erbe (nur Singular)",
    turkish:
      "ölümden sonra başkalarına bırakılan şey, burada: geçmişten günümüze korunan maddi olmayan şey",
  },
  { german: "aufwachsen", turkish: "büyümek, çocukluğunu geçirmek" },
  { german: "etwas wert sein", turkish: "değmek, hak etmek" },
  {
    german: "der Kastanienbaum, -bäume",
    turkish:
      "büyük yaprakları, beyaz çiçekleri ve yenilebilir meyveleri olan ağaç (at kestanesi)",
  },
  {
    german: "das Umland (nur Singular)",
    turkish: "çevre, kenar bölge, çeperler",
  },
  {
    german: "jemandem kommt etwas in den Sinn",
    turkish: "birinin aklına bir şey gelmek",
  },
  {
    german: "zu meiner Schande",
    turkish: "benim utancıma (genellikle alaycı)",
  },
  {
    german: "etwas gestehen",
    turkish: "hoş olmayan bir şeyi açıkça söylemek, itiraf etmek",
  },
  {
    german: "die Menschenansammlung, en",
    turkish: "insan kalabalığı, insan yığını",
  },
  {
    german: "der Ausnahmezustand, -zustände",
    turkish: "olağanüstü durum, istisnai durum",
  },
  {
    german: "es verschlägt jemanden irgendwohin",
    turkish: "birinin (plansız olarak) belirli bir yere gitmesi",
  },
  {
    german: "das Weltkulturerbe (nur Singular)",
    turkish: "dünya topluluğu için özel öneme sahip yerler",
  },
  { german: "ansonsten", turkish: "bunun dışında, ayrıca" },
  {
    german: "der Rheinländer, -",
    turkish:
      "Ren bölgesinden (Orta ve Aşağı Ren kıyılarındaki bölge) olan kişi",
  },
  { german: "die Frohnatur, en", turkish: "genellikle iyi ruh hali olan kişi" },
  { german: "sich festlegen", turkish: "kesin olarak karar vermek" },
  { german: "insofern", turkish: "bu bakımdan, bu nedenle" },
  {
    german: "der Unterschlupf, Unterschlupfe (Plural selten)",
    turkish: "burada: konaklama yeri, geceleyecek yer",
  },
  { german: "vielerlei", turkish: "birçok farklı, çok sayıda, birçok türde" },
  { german: "in Sachen", turkish: "konusunda, açısından" },
  { german: "unfassbar", turkish: "inanılmaz" },
  { german: "atemberaubend", turkish: "çok etkileyici, büyüleyici" },
  { german: "der Wolkenkratzer, -", turkish: "çok yüksek bina" },
  { german: "hochschießen", turkish: "burada: çok yüksek inşa edilmiş olmak" },
  { german: "krass", turkish: "aşırı, dikkat çekici" },
  { german: "riesengroß", turkish: "çok büyük, şaşırtıcı derecede büyük" },
  {
    german: "der Jahrmarkt, -märkte",
    turkish: "satış tezgâhları, atlıkarınca vb. olan pazar, kermes, panayır",
  },
  {
    german: "die Ente, n",
    turkish: "geniş gagalı, kısa boyunlu ve kısa bacaklı su kuşu",
  },
  {
    german: "jemanden füttern",
    turkish: "birine yemek vermek, örn. bir hayvana veya bebeğe",
  },
  { german: "schlendern", turkish: "rahat (ve amaçsız) yürüyüş yapmak" },
  {
    german: "der Enthusiast, en",
    turkish: "bir şeyi tutkuyla/coşkuyla yapan kişi",
  },
  {
    german: "der Langlauf, -läufe",
    turkish: "genellikle düz arazide uzun mesafelerde kayak yapma",
  },
  { german: "aufschlussreich", turkish: "bilgilendirici" },
  { german: "der/das Input, s", turkish: "burada: katkı, bilgi, uyarı" },
  {
    german: "die Überleitung, en",
    turkish: "geçiş, yeni bir şeye yönlendirme",
  },
  { german: "die Ferne, n", turkish: "burada: bilinmeyen, yabancı ülke" },
  { german: "verbunden", turkish: "bağlantılı, ilişkili" },
  { german: "überwiegend", turkish: "özellikle, esas olarak" },
  { german: "des Öfteren", turkish: "daha sık, tekrar tekrar, birkaç kez" },
  { german: "öfters", turkish: "daha sık" },
  { german: "etwas erkunden", turkish: "bir şeyi keşfetmek/tanımak" },
  { german: "etwas unternehmen", turkish: "burada: yapmak" },
  {
    german: "der Aufwand, Aufwände",
    turkish: "kullanılan araçlar/maliyetler, çaba",
  },
  {
    german: "das Hauptanliegen, -",
    turkish: "birinin ulaşmak istediği en önemli şey, en önemli istek",
  },
  { german: "der Aufenthalt, e", turkish: "belirli bir yerde sınırlı süre" },
  {
    german: "etwas bereisen",
    turkish: "bir ülkeyi/bölgeyi tanımak için seyahat etmek",
  },
  { german: "daheim", turkish: "evde" },
  { german: "kostengünstig", turkish: "uygun fiyatlı, ucuz" },
  { german: "allein", turkish: "burada: zaten" },
  { german: "quer", turkish: "bir taraftan diğer tarafa, bir uçtan diğer uca" },
  { german: "wesentlich", turkish: "çok (fazla)" },
  {
    german: "etwas wahrnehmen",
    turkish: "burada: bir şeyden faydalanmak, kullanmak",
  },
  { german: "der Zuschuss, Zuschüsse", turkish: "maddi yardım, hibe" },
  { german: "der Aufwand, Aufwände", turkish: "burada: maliyetler (çoğul)" },
  { german: "zinsfrei", turkish: "faizsiz" },
  {
    german: "der Bund (nur Singular in dieser Bedeutung)",
    turkish: "burada: devlet",
  },
  {
    german: "die Förderbank, en",
    turkish:
      "kamu fonlarını teşvik programlarında örneğin kredi olarak veren özel bankalar",
  },
  {
    german: "der Zins, en",
    turkish: "kredi için ödenecek tutar, örneğin %2,5 faiz",
  },
  { german: "die Leistung, en", turkish: "burada: not, derece" },
  { german: "das Einkommen, -", turkish: "maaş, ücret" },
  {
    german: "die Doppelbelastung, en",
    turkish: "iki farklı görev/faaliyet nedeniyle çifte baskı/çifte çaba",
  },
  {
    german: "etwas (D) ausgesetzt sein",
    turkish: "burada: bir şeyden zarar görmek, zor bir şeyi başarmak",
  },
  {
    german: "der Unterhalt (nur Singular)",
    turkish: "yaşam için gerekli tüm harcamalar (kira, gıda, giyim)",
  },
  {
    german: "sich (D) etwas erlauben können",
    turkish: "bir şeyi karşılayabilmek, belirli bir şey için parası olmak",
  },
  {
    german: "die Versorgung (nur Singular)",
    turkish: "burada: geçim, yaşam masrafları",
  },
  {
    german: "etwas übrighaben/überhaben",
    turkish: "burada: artık olarak/tüm harcamalardan sonra hala mevcut olmak",
  },
  { german: "etwas spüren", turkish: "bir şeyi hissetmek/algılamak" },
  {
    german: "Gas geben",
    turkish:
      "daha çok çaba göstermek, daha güçlü katılım göstermek, ayrıca: bir süreç/işlemi hızlandırmak",
  },
  { german: "etwas erzielen", turkish: "bir şey elde etmek" },
  { german: "vorkommen", turkish: "olmak, meydana gelmek" },
  { german: "einsteigen", turkish: "burada: bir konuya değinmek" },
  { german: "besagen", turkish: "ifade etmek, belirtmek, anlamına gelmek" },
  {
    german: "jemanden erwischen",
    turkish:
      "birini yasak/gizli bir şey yaparken yakalamak, burada ünlem olarak: tam doğru kişiye soruyorsun, tam isabet, bingo",
  },
  { german: "die Erfüllung, en", turkish: "burada: yaşam anlamı" },
  {
    german: "das Mittel zum Zweck (nur Singular)",
    turkish: "bir amaca ulaşmak için araç olarak kullanılan kişi veya şey",
  },
  {
    german: "die Work-Life-Balance, s",
    turkish: "bir kişinin meslek ve özel yaşamı arasındaki dengeli ilişki",
  },
  {
    german: "das Dauerthema, -themen",
    turkish: "sürekli konu, tekrar tekrar ortaya çıkan konu",
  },
  {
    german: "jemandem gelingt etwas",
    turkish: "biri bir şeyi başarıyla yapar, bir şey başarılı olur",
  },
  {
    german: "die Unterlage, n (meist im Plural)",
    turkish: "belge, dosya, kağıt",
  },
  { german: "sich austauschen", turkish: "tartışmak, sohbet etmek" },
  { german: "beibehalten", turkish: "sürdürmek, devam etmek" },
  { german: "das Pilotprojekt, e", turkish: "pilot proje, deneme projesi" },
  { german: "der Einkommensverlust, e", turkish: "kayıp, zarar" },
  { german: "erleiden", turkish: "zarar görmek, çekmek" },
  { german: "die Umsätze", turkish: "ciro, satış" },
  { german: "der Umstieg, e", turkish: "geçiş, değişim" },
  { german: "vielversprechend", turkish: "umut verici" },
  { german: "pendeln", turkish: "işe gidip gelmek" },
  { german: "die Schwachstelle, n", turkish: "zayıf nokta, eksiklik" },
  { german: "die Betriebszeiten", turkish: "çalışma saatleri" },
  { german: "erfordern", turkish: "gerektirmek" },
  { german: "sicherstellen", turkish: "güvence altına almak" },
  { german: "die Abdeckung", turkish: "kapsama, yeterli sayı" },
  { german: "erfüllen", turkish: "yerine getirmek" },
  { german: "mangeln", turkish: "eksik olmak, yetmemek" },
  { german: "anlangen", turkish: "bir hedefe varmak" },
  {
    german: "Riesen-",
    turkish: "bir şeyin çok büyük/yoğun olduğunu ifade eden önek",
  },
  {
    german: "der Chatbot, s",
    turkish: "insan sohbet ortağını taklit eden elektronik diyalog sistemi",
  },
  {
    german: "die Zukunftsmusik (nur Singular)",
    turkish: "şu anda utopik olan, gerçekleşmesi uzak gelecekte olan bir şey",
  },
  {
    german: "(der) Wahnsinn",
    turkish: 'coşku ifadesi, "İnanılmaz!" anlamında',
  },
  {
    german: "jemanden überfordern",
    turkish: "birine çok yüksek beklenti/gereksinim yüklemek",
  },
  { german: "überwältigt", turkish: "(çok) güçlü bir şekilde etkilenmiş" },
  { german: "der Zwilling, e", turkish: "burada: kopya, suret" },
  {
    german: "etwas kreieren",
    turkish: "bir şeyi yaratmak/icat etmek/tasarlamak",
  },
  {
    german: "als etwas dienen",
    turkish: "belirli bir amacı yerine getirmek, kullanılmak",
  },
  { german: "umsetzbar", turkish: "mümkün, yapılabilir, gerçekleştirilebilir" },
  { german: "quasi", turkish: "tabiri caizse, neredeyse" },
  {
    german: "jemanden/etwas ersetzen",
    turkish: "birinin/bir şeyin yerine geçmek ve onun görevlerini üstlenmek",
  },
  {
    german: "drumrumkommen",
    turkish: "bir şeyden kaçınmak, hoş olmayan bir şeyden kaçabilmek",
  },
  {
    german: "etwas bereichern",
    turkish: "bir şeyi iyileştirmek, ayrıca: bir şeyi büyütmek",
  },
  { german: "vorgefertigt", turkish: "burada: önceden yazılmış" },
  {
    german: "das Anführungszeichen, -",
    turkish:
      'özellikle doğrudan konuşmadan önce ve sonra gelen noktalama işareti („...")',
  },
  {
    german: "etwas/jemanden übertreffen",
    turkish: "birinden/bir şeyden daha iyi olmak, bir şeyi aşmak",
  },
  {
    german: "etwas reicht jemandem",
    turkish: "bir şey birisi için yeterli/kifayetli",
  },
  {
    german: "sich auf etwas/jemanden auswirken",
    turkish: "bir şey/biri üzerinde etki/etkisi olmak",
  },
  {
    german: "auf etwas stoßen",
    turkish: "(beklenmedik şekilde) bir şeyi bulmak/keşfetmek",
  },
  { german: "der Zugang, Zugänge", turkish: "burada: yaklaşma, erişim" },
  {
    german: "die Unterhaltung (nur Singular in dieser Bedeutung)",
    turkish: "eğlence, zevk",
  },
  {
    german: "die Bildungseinrichtung, en",
    turkish: "ders verilen yer, örn. okullar veya üniversiteler",
  },
  { german: "die Quelle, n", turkish: "birine bilgi veren/sağlayan metin/yer" },
  { german: "sämtliche", turkish: "hepsi, tümü" },
  { german: "dennoch", turkish: "yine de" },
  {
    german: "etwas aufnehmen",
    turkish:
      "burada: bir şeyi ses taşıyıcısında (örn. kaset veya CD) kaydetmek",
  },
  {
    german: "der Festnetzanschluss, -anschlüsse",
    turkish: "kablo üzerinden telefon bağlantısı",
  },
  { german: "das Schild, er", turkish: "işaret veya yazı bulunan levha/tabla" },
  {
    german: "etwas wegdenken",
    turkish: "bir şeyi mevcut değilmiş gibi düşünmek (çoğunlukla olumsuzda)",
  },
  {
    german: "sich in etwas/jemanden reinversetzen/hineinversetzen",
    turkish: "kendini bir şeyin/birinin yerine koymak/düşünmek",
  },
  { german: "bewusst", turkish: "kasıtlı, isteyerek" },
  { german: "durchaus", turkish: "kesinlikle, mutlaka" },
  {
    german: "etwas abfragen",
    turkish: "burada: bir şeyi edinmek, bir şeyi araştırmak/sormak",
  },
  {
    german: "etwas wagen",
    turkish: "bir şeye cesaret etmek, bir şeyden korkmamak, risk almak",
  },
  { german: "der Kompass, e", turkish: "mıknatısla yönleri belirleyen alet" },
];
function Buch26() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleMeaning = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-5 max-w-md w-full border border-gray-200">
        <h1 className="text-2xl font-bold text-center mb-6 text-indigo-700">
          Almanca-Türkçe Sözlük
        </h1>

        <ul className="space-y-3">
          {vocabulary.map((item, index) => (
            <li
              key={index}
              className={`p-3 rounded-lg cursor-pointer transition-all ${
                expandedIndex === index
                  ? "bg-indigo-50 border border-indigo-200 shadow-sm"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
              onClick={() => toggleMeaning(index)}
            >
              <div className="flex justify-between items-center">
                <span className="font-bold text-black-500">{item.german}</span>
                <span className="text-xs text-gray-500">
                  {expandedIndex === index ? "▲" : "▼"}
                </span>
              </div>

              {expandedIndex === index && (
                <div className="mt-2 pt-2 border-t border-indigo-100 text-gray-700 animate-fadeIn">
                  {item.turkish}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Buch26;
