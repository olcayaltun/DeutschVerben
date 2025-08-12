import React, { useState, useRef, useEffect } from "react";

const Buch11 = () => {
  // Örnek olarak metnin bir kısmını alıyoruz
  const sentences = [
    {
      original: "Ihr hört Auf der Spur.",
      translation: 'Siz "Auf der Spur"u dinliyorsunuz.',
    },
    {
      original:
        "Die ARD-Ermittler-Krimis: Jede Woche ein neuer Fall, immer zuerst in der ARD-Audiothek.",
      translation:
        "ARD Dedektif Krimileri: Her hafta yeni bir vaka, her zaman önce ARD-Audiothek’te.",
    },
    {
      original: "Am besten sofort abonnieren.",
      translation: "En iyisi hemen abone olmak.",
    },
    {
      original:
        "Krimisommer mit Tabor Süden: Das Verschwinden der Natalia Aschenbrenner.",
      translation:
        "Tabor Süden ile Krimisommer: Natalia Aschenbrenner’ın Kayboluşu.",
    },
    {
      original: "Tabor Süden ermittelt in den Tiefen des Schwarzwalds.",
      translation:
        "Tabor Süden, Kara Orman’ın derinliklerinde soruşturma yapıyor.",
    },
    {
      original: "Krimiserie von Friedrich Ani.",
      translation: "Friedrich Ani’nin krimi dizisi.",
    },
    { original: "Folge 1: Der Anruf.", translation: "Bölüm 1: Telefon." },
    {
      original: "Der Aufzug fuhr nach unten.",
      translation: "Asansör aşağı iniyordu.",
    },
    {
      original: "Auf der Anzeige stand E2 oder E喧0E4.",
      translation: "Ekranda E2 ya da E4 yazıyordu.",
    },
    {
      original:
        "So genau konnte ich die Buchstaben und Zahlen im schummrigen Licht nicht erkennen.",
      translation: "Loş ışıkta harfleri ve sayıları tam olarak seçemedim.",
    },
    {
      original:
        "Außerdem war ich verwirrt, weil ich eigentlich in den zweiten Stock wollte, wo eine Wohnung lag.",
      translation:
        "Ayrıca kafam karışıktı, çünkü aslında bir dairenin bulunduğu ikinci kata gitmek istiyordum.",
    },
    {
      original: "Und der Lift schien zu rasen.",
      translation: "Ve asansör hızla iniyor gibiydi.",
    },
    {
      original:
        "Ich fragte mich schon, wann er beginnen würde abzubremsen, als er plötzlich anhielt.",
      translation:
        "Ne zaman yavaşlamaya başlayacak diye merak ediyordum ki birden durdu.",
    },
    {
      original:
        "Die Tür öffnete sich, zwei Männer stiegen ein, und die Fahrt ging nun weiter nach unten.",
      translation:
        "Kapı açıldı, iki adam bindi ve yolculuk aşağı doğru devam etti.",
    },
    {
      original:
        "Als der Aufzug erneut hielt und die Tür zur Seite glitt, wusste ich nicht, auf welcher Ebene wir uns befanden.",
      translation:
        "Asansör tekrar durduğunda ve kapı yana kaydığında, hangi katta olduğumuzu bilmiyordum.",
    },
    {
      original: "Mit lautlosen Schritten verschwanden die Männer.",
      translation: "Adamlar sessiz adımlarla kayboldular.",
    },
    {
      original:
        "Bevor die Tür sich wieder geschlossen hatte, fuhr der Aufzug mit zunehmender Geschwindigkeit weiter.",
      translation: "Kapı kapanmadan önce asansör artan bir hızla devam etti.",
    },
    {
      original: "Ich hätte längst aussteigen müssen.",
      translation: "Çoktan inmiş olmalıydım.",
    },
    {
      original:
        "Draußen flogen Hochhäuser, Straßen und kahle Landschaften vorbei.",
      translation:
        "Dışarıda gökdelenler, sokaklar ve çıplak manzaralar hızla geçiyordu.",
    },
    {
      original: "Plötzlich saß ich in einem Zug.",
      translation: "Birdenbire bir trende oturuyordum.",
    },
    {
      original: "Inmitten einer Menschenmenge auf dem Weg zur Arbeit.",
      translation: "İşe giden bir kalabalığın içinde.",
    },
    {
      original:
        "In einer Hochbahn überquerten wir mehrere Stadtteile, überwanden die Entfernung zwischen zwei Städten, und niemand vermittelte den Eindruck, dass etwas Ungewöhnliches geschah.",
      translation:
        "Yüksek bir trenle birkaç mahalleyi geçtik, iki şehir arasındaki mesafeyi aştık ve kimse olağandışı bir şey olduğu izlenimini vermedi.",
    },
    {
      original:
        "Manche Leute unterhielten sich, Schulkinder trugen schwere Taschen auf dem Rücken und schubsten sich gegenseitig.",
      translation:
        "Bazı insanlar sohbet ediyordu, okul çocukları sırtlarında ağır çantalar taşıyor ve birbirlerini itip kakıyorlardı.",
    },
    {
      original: "Die Durchsagen des Fahrers waren nicht zu verstehen.",
      translation: "Sürücünün anonsları anlaşılmıyordu.",
    },
    {
      original: "Von irgendwoher kam Musik.",
      translation: "Bir yerlerden müzik geliyordu.",
    },
    {
      original:
        "Mir gefiel die Reise, auch wenn ich immer noch der vagen Vorstellung nachhing, in mein Zimmer zurückkehren zu wollen.",
      translation:
        "Yolculuk hoşuma gitmişti, her ne kadar hâlâ odama dönmek gibi belirsiz bir düşünceye kapılsam da.",
    },
    {
      original: "Ein schwarzer Plastikball rollte auf meine Füße zu.",
      translation: "Siyah bir plastik top ayaklarıma doğru yuvarlandı.",
    },
    {
      original: "Ich bückte mich, um ihn aufzuheben.",
      translation: "Onu almak için eğildim.",
    },
    {
      original: "Er war prall gefüllt und hatte eine raue Oberfläche.",
      translation: "Top dolgun ve pürüzlü bir yüzeye sahipti.",
    },
    {
      original:
        "Ich hielt nach dem Besitzer Ausschau – vielleicht hatte eines der Kinder den Ball durch den Wagen geschossen.",
      translation:
        "Sahibini aradım – belki çocuklardan biri topu vagonun içinden fırlatmıştı.",
    },
    { original: "Niemand reagierte.", translation: "Kimse tepki vermedi." },
    {
      original:
        "Ich warf den Ball in die Höhe, fing ihn wieder auf und drückte ihn fest an die Brust, wie früher als Torwart.",
      translation:
        "Topu havaya attım, tekrar yakaladım ve kaleci olduğum zamanlardaki gibi göğsüme sıkıca bastırdım.",
    },
    {
      original: "Plötzlich klingelte ein Telefon.",
      translation: "Birden bir telefon çaldı.",
    },
    {
      original:
        "Es schallte durch den Wagen wie aus einer Telefonzelle im vergangenen Jahrhundert.",
      translation:
        "Geçen yüzyıldan kalma bir telefon kulübesinden geliyormuş gibi vagonun içinde yankılandı.",
    },
    {
      original:
        "Ich musste aussteigen, doch die Leute versperrten mir den Weg.",
      translation: "İnmeliydim, ama insanlar yolumu tıkıyordu.",
    },
    {
      original:
        "Der Zug hielt an, doch bevor ich mich bemerkbar machen konnte, setzte er seine Fahrt fort.",
      translation:
        "Tren durdu, ama kendimi fark ettiremeden yolculuğuna devam etti.",
    },
    {
      original: "Die Türen hatten sich nicht geöffnet.",
      translation: "Kapılar açılmamıştı.",
    },
    {
      original: "Trotzdem war außer mir niemand mehr da.",
      translation: "Yine de benden başka kimse kalmamıştı.",
    },
    {
      original:
        "Offenbar hatte ich den Ball fallen lassen, denn er rollte nach vorne zur Fahrertür.",
      translation:
        "Anlaşılan topu düşürmüştüm, çünkü öne, sürücü kapısına doğru yuvarlandı.",
    },
    {
      original: "Was konnte ich deutlich sehen?",
      translation: "Neyi açıkça görebiliyordum?",
    },
    { original: "Ich hatte Angst.", translation: "Korkuyordum." },
    {
      original: "Und wusste nicht, warum.",
      translation: "Ve nedenini bilmiyordum.",
    },
    { original: "„Warum? Was?“", translation: "“Neden? Ne?”" },
    {
      original: "„Sind Sie Süden? Der Detektiv?“",
      translation: "“Süden siz misiniz? Dedektif?”",
    },
    { original: "„Warum?“", translation: "“Neden?”" },
    {
      original: "„Sie ist weg. Bitte. Sie müssen sie suchen. Bitte.“",
      translation: "“O kayıp. Lütfen. Onu bulmalısınız. Lütfen.”",
    },
    { original: "„Wen suchen?“", translation: "“Kimi bulayım?”" },
    {
      original:
        "„Mich. Natalia Aschenbrenner. Ich bin gekidnappt worden. Ich hab Angst.“",
      translation: "“Beni. Natalia Aschenbrenner. Kaçırıldım. Korkuyorum.”",
    },
    { original: "„Hallo? Natalia?“", translation: "“Alo? Natalia?”" },
    {
      original: "Natalia Aschenbrenner.",
      translation: "Natalia Aschenbrenner.",
    },
    {
      original:
        "Auf meinem mittlerweile ziemlich ramponierten Laptop suchte ich den Namen im Internet.",
      translation:
        "Artık oldukça yıpranmış olan laptopumda ismi internette aradım.",
    },
    {
      original:
        "Zuerst im Telefonbuch: 199 Treffer, davon 119 gewerblich und 20 privat.",
      translation:
        "Önce telefon rehberinde: 199 sonuç, bunlardan 119’u ticari, 20’si özel.",
    },
    {
      original: "Doch keine Frau mit dem passenden Vornamen.",
      translation: "Ancak uygun isimde bir kadın yoktu.",
    },
    {
      original:
        "Aschenbrenner war im süddeutschen Raum kein allzu seltener Name.",
      translation:
        "Aschenbrenner, Güney Almanya bölgesinde çok nadir bir soyad değildi.",
    },
    {
      original: "Ich rief einige der gelisteten Personen an.",
      translation: "Listelenen bazı kişileri aradım.",
    },
    {
      original: "Keine von ihnen kannte eine Natalia.",
      translation: "Hiçbiri bir Natalia’yı tanımıyordu.",
    },
    {
      original: "Anschließend klickte ich mich durch soziale Netzwerke.",
      translation: "Sonra sosyal ağlarda gezinmeye başladım.",
    },
    {
      original:
        "Das dauerte eine Weile, weil ich mich auf diesem Gebiet nicht auskannte.",
      translation: "Bu biraz zaman aldı, çünkü bu konuda pek bilgim yoktu.",
    },
    {
      original:
        "Wäre ich nicht angestellt, wäre ich vermutlich nicht mal ein Handybesitzer geworden.",
      translation:
        "Eğer bir işte çalışmıyor olsaydım, muhtemelen bir cep telefonu sahibi bile olmazdım.",
    },
    {
      original:
        "Als ich noch Hauptkommissar auf der Vermisstenstelle der Kripo war und die Mobiltelefone aufkamen, sträubte ich mich lange dagegen.",
      translation:
        "Kayıp Şahıslar Bürosu’nda başkomiserken ve cep telefonları çıktığında, buna uzun süre direndim.",
    },
    {
      original: "„Bin erreichbar genug“, sagte ich zu meinen Kollegen.",
      translation: "“Yeterince ulaşılıyorum,” dedim meslektaşlarıma.",
    },
    {
      original: "Ich telefonierte generell ungern.",
      translation: "Genel olarak telefonla konuşmayı sevmezdim.",
    },
    {
      original:
        "Ich brauchte das Gesicht zur Stimme, um mir ein Bild von meinem Gegenüber machen zu können.",
      translation:
        "Karşımdakinin bir resmini çizebilmek için sese ek olarak yüzü görmem gerekiyordu.",
    },
    {
      original:
        "Getrickste Worte spiegelten sich im Gesicht, und ein Gesicht, das ein Geheimnis verbarg, verfälschte die Stimme.",
      translation:
        "Hileli sözler yüzde yansır, bir sırrı saklayan bir yüz ise sesi çarpıtır.",
    },
    {
      original:
        "Und alles zusammen – Blicke, Worte, Mimik – vermittelte mir eine Ahnung vom Ausmaß der Lüge, die mich als Ermittler zwangsläufig umgab.",
      translation:
        "Ve her şey birlikte – bakışlar, sözler, mimikler – bir dedektif olarak beni kaçınılmaz olarak çevreleyen yalanın boyutuna dair bir fikir verirdi.",
    },
    {
      original:
        "Bei Facebook stieß ich auf eine junge Frau mit dem Namen Natalia Aschenbrenner.",
      translation:
        "Facebook’ta Natalia Aschenbrenner adında genç bir kadına rastladım.",
    },
    {
      original: "Ihr Gesicht hatte ich mir nie vorgestellt.",
      translation: "Onun yüzünü hiç hayal etmemiştim.",
    },
    {
      original:
        "Ich schickte eine Nachricht, nannte meinen Namen und den Grund meines Kontakts und hinterließ meine Mailadresse.",
      translation:
        "Bir mesaj gönderdim, adımı ve iletişime geçme nedenimi belirttim ve e-posta adresimi bıraktım.",
    },
    {
      original:
        "Zehn Minuten später schrieb sie mir, sie sei wohlauf und es gebe keinen Grund, nach ihr zu suchen.",
      translation:
        "On dakika sonra bana yazdı, iyi olduğunu ve onu aramak için bir neden olmadığını söyledi.",
    },
    {
      original:
        "Sie wollte mehr erfahren und wissen, was man als Detektiv so verdient.",
      translation:
        "Daha fazla bilgi almak ve bir dedektifin ne kadar kazandığını öğrenmek istedi.",
    },
    {
      original: "Woher hatte die Frau meine Telefonnummer?",
      translation: "Bu kadın telefon numaramı nereden almıştı?",
    },
    {
      original:
        "Ich rief die Auskunft an und erfuhr nicht nur meine Festnetznummer, sondern auch, dass ich in der Schafreiterstraße 1D in München wohnte.",
      translation:
        "Bilgi servisini aradım ve sadece sabit telefon numaramı değil, aynı zamanda Münih’teki Schafreiterstraße 1D’de oturduğumu öğrendim.",
    },
    {
      original: "Ich fragte nach Natalia Aschenbrenner. Kein Eintrag.",
      translation: "Natalia Aschenbrenner’ı sordum. Kayıt yoktu.",
    },
    {
      original: "Mir war etwas eingefallen.",
      translation: "Aklıma bir şey geldi.",
    },
    {
      original:
        "Vielleicht gab es eine Möglichkeit, Natalias Adresse doch noch herauszufinden.",
      translation: "Belki Natalia’nın adresini bulmanın bir yolu vardı.",
    },
    {
      original: "Dazu musste ich meinen Stadtteil durchqueren.",
      translation: "Bunun için mahallemi geçmem gerekiyordu.",
    },
    {
      original: "Offenbar war ich trotz meiner kalten Dusche noch nicht wach.",
      translation: "Anlaşılan soğuk duş almama rağmen hâlâ uyanmamıştım.",
    },
    {
      original:
        "Beinah wäre ich in ein Auto gerannt und ein paar hundert Meter weiter in eine Straßenbahn.",
      translation:
        "Neredeyse bir arabaya çarpacaktım ve birkaç yüz metre ötede bir tramvaya.",
    },
    {
      original:
        "Es kam mir vor, als wäre ich innerlich wieder in meinem Traum unterwegs – in einem rasenden Aufzug, in einem über eine Stadt hinwegfliegenden Schnellzug.",
      translation:
        "İçimde hâlâ rüyamdaymışım gibi hissettim – hızla inen bir asansörde, bir şehir üzerinden uçan bir hızlı trende.",
    },
    {
      original:
        "Ich blieb stehen, atmete tief die kühle Sonntagsluft ein, legte den Kopf in den Nacken und schloss die Augen.",
      translation:
        "Durup derin bir nefes aldım, serin pazar havasını içime çektim, başımı geriye yatırdım ve gözlerimi kapattım.",
    },
    {
      original: "Der Rauhaardackel missfiel die Welt. Oder bloß mich.",
      translation:
        "Tüylü dachshund dünyadan hoşlanmamıştı. Ya da sadece benden.",
    },
    {
      original:
        "Ich setzte meinen Weg entlang der Schlierseestraße fort, gespannt darauf, ob bei Tony die Happy Hour am Sonntag nach wie vor Gültigkeit hatte.",
      translation:
        "Schlierseestraße boyunca yoluma devam ettim, Tony’nin yerinde pazar günleri happy hour’un hâlâ geçerli olup olmadığını merak ederek.",
    },
    {
      original:
        "Zwischen 10 und 15 Uhr kostete in seinem Lokal jedes Bier nur die Hälfte.",
      translation:
        "10 ile 15 saatleri arasında onun mekanında her bira yarı fiyatınaydı.",
    },
    {
      original: "Das erste Bier ist immer das Beste.",
      translation: "İlk bira her zaman en iyisidir.",
    },
    {
      original: "„Es ist 12 Uhr mittags. Maß muss das sein, Kalo.“",
      translation: "“Öğlen 12 oldu. Büyük bardak olmalı, Kalo.”",
    },
    {
      original: "„Heute ist Feiertag. Heute ruh ich mich aus.“",
      translation: "“Bugün tatil. Bugün dinleniyorum.”",
    },
    {
      original:
        "„Ich will dir doch helfen. Und ich bin ganz ratlos, was wir machen sollen.“",
      translation:
        "“Sana yardım etmek istiyorum. Ve ne yapacağımız konusunda tamamen çaresizim.”",
    },
    {
      original:
        "„Ist schon schön hier. Ich sag’s immer wieder, Maxi. In München kann man’s aushalten.“",
      translation:
        "“Burası zaten güzel. Hep söylüyorum, Maxi. Münih’te yaşanır.”",
    },
    {
      original: "„Muss man nicht. Kann man.“",
      translation: "“Zorunlu değil. Yaşanabilir.”",
    },
    {
      original:
        "„Wenn alles vorbei ist, wollen wir dann nach Berlin, Kalo? In deine Heimat.“",
      translation:
        "“Her şey bittiğinde, Berlin’e gidelim mi, Kalo? Memleketine.”",
    },
    {
      original: "„Ich hab keine Heimat. Lasst mich in Ruhe.“",
      translation: "“Benim memleketim yok. Bırakın beni rahat.”",
    },
    {
      original: "„Ich mag das nicht, wenn du mich so wegschubst.“",
      translation: "“Beni böyle itip kakmanı sevmiyorum.”",
    },
    {
      original: "„Wie bist du so zu mir?“",
      translation: "“Bana böyle nasıl davranırsın?”",
    },
    {
      original: "„Weil du nix kapierst.“",
      translation: "“Çünkü sen hiçbir şeyi anlamıyorsun.”",
    },
    {
      original:
        "„Doch. Nein, du sagst, wir helfen, aber dann nörgelst du nur rum und fängst an zu heulen, weil du Schiss hast.“",
      translation:
        "“Anlıyorum. Hayır, sen yardım edeceğiz diyorsun, ama sonra sadece mızmızlanıyorsun ve korktuğun için ağlamaya başlıyorsun.”",
    },
    {
      original: "„Mit so jemand kann ich nicht arbeiten.“",
      translation: "“Böyle biriyle çalışamam.”",
    },
    {
      original: "„Richtig, Kalo. Ruhig.“",
      translation: "“Doğru, Kalo. Sakin ol.”",
    },
    { original: "„So ist gut.“", translation: "“Böyle iyi.”" },
    {
      original:
        "„Was meinst du damit? Mit so jemand kannst du nicht arbeiten?“",
      translation: "“Ne demek istiyorsun? Böyle biriyle çalışamaz mısın?”",
    },
    { original: "„Nix.“", translation: "“Hiçbir şey.”" },
    {
      original: "„Deine blöden Freunde nerven.“",
      translation: "“Senin aptal arkadaşların sinir bozucu.”",
    },
    {
      original: "„Willst du was sagen?“",
      translation: "“Bir şey mi söylemek istiyorsun?”",
    },
    { original: "„Nicht schreien.“", translation: "“Bağırma.”" },
    { original: "„Oh, hey, hey, hey.“", translation: "“Oh, hey, hey, hey.”" },
    {
      original: "„Warum willst du mir nicht helfen?“",
      translation: "“Neden bana yardım etmek istemiyorsun?”",
    },
    {
      original:
        "„Weil ich dich verlassen habe. Weil ich jetzt mit deiner Freundin zusammen bin.“",
      translation:
        "“Çünkü seni terk ettim. Çünkü şimdi senin kız arkadaşınlayım.”",
    },
    {
      original:
        "„Das, worum ich dich bitte, ist ein Kinderspiel für jemanden wie dich.“",
      translation:
        "“Senden istediğim şey, senin gibi biri için çocuk oyuncağı.”",
    },
    {
      original: "„Warum bist du so störrisch?“",
      translation: "“Neden bu kadar inatçısın?”",
    },
    { original: "„Und?“", translation: "“E?”" },
    { original: "„Und?“", translation: "“E?”" },
    {
      original: "„Was denn passiert? Du bist hier?“",
      translation: "“Ne oldu ki? Burada mısın?”",
    },
    {
      original: "„Du hast mich verraten und verkauft.“",
      translation: "“Bana ihanet ettin ve beni sattın.”",
    },
    { original: "„Quatsch.“", translation: "“Saçmalık.”" },
    {
      original: "„Ich muss aufs Klo.“",
      translation: "“Tuvalete gitmem lazım.”",
    },
    { original: "„Wer verknüpft dich?“", translation: "“Seni kim bağladı?”" },
    {
      original: "„Ich bring dich ins Bad, Lea.“",
      translation: "“Seni banyoya götüreceğim, Lea.”",
    },
    {
      original: "„Du weißt schon, dass du keine Wahl hast, Lea.“",
      translation: "“Biliyorsun, başka seçeneğin yok, Lea.”",
    },
    { original: "„Das… weißt du?“", translation: "“Bunu… biliyor musun?”" },
    {
      original:
        "Bei Tony hatte die Happy Hour ihren glücklichsten Punkt schon überschritten.",
      translation:
        "Tony’nin yerinde happy hour en güzel noktasını çoktan geçmişti.",
    },
    {
      original:
        "Die Gäste – wie immer vor allem ältere Männer und eine Handvoll jüngerer, die nicht so aussahen – verfolgten im Fernsehen die Nachberichte der Bundesliga-Spiele vom Vortag und stießen munter mit ihren Gläsern an.",
      translation:
        "Konuklar – her zamanki gibi çoğunlukla yaşlı erkekler ve bir avuç daha genç, öyle görünmeyenler – televizyonda önceki günün Bundesliga maçlarının özetlerini izliyor ve neşeyle kadeh tokuşturuyorlardı.",
    },
    {
      original:
        "So betrunken sie auch sein mochten, sie schienen sich zu amüsieren und den Sonntag auf ihre sehr spezielle Art in vollen Zügen zu genießen.",
      translation:
        "Ne kadar sarhoş olsalar da, eğleniyor gibiydiler ve pazar gününü kendilerine özgü bir şekilde dolu dolu yaşıyorlardı.",
    },
    {
      original:
        "Tony, der eine schillernde Biografie und ein kurioses Deutsch sprach, verwahrte in seiner winzigen Küche alte Telefonbücher auf.",
      translation:
        "Renkli bir biyografiye ve tuhaf bir Almanca’ya sahip olan Tony, küçük mutfağında eski telefon rehberlerini saklıyordu.",
    },
    {
      original:
        "Jedenfalls hoffte ich, dass er sie nicht inzwischen weggeworfen hatte.",
      translation: "Her neyse, umarım onları henüz atmamıştır diye düşündüm.",
    },
    { original: "Und ich hatte Glück.", translation: "Ve şansım yaver gitti." },
    {
      original:
        "In einem Verzeichnis aus dem Jahr 2009 wurde ich tatsächlich fündig.",
      translation: "2009 yılına ait bir rehberde gerçekten bir şey buldum.",
    },
    {
      original: "„Sie sind Natalia Aschenbrenner?“",
      translation: "“Siz Natalia Aschenbrenner mısınız?”",
    },
    {
      original: "„Woher wollen Sie das wissen?“",
      translation: "“Bunu nereden biliyorsunuz?”",
    },
    { original: "„Besuchen Sie.“", translation: "“Ziyaret edin.”" },
    {
      original: "„Was machen Sie hier für einen Lärm in der Nacht?“",
      translation: "“Gece vakti burada bu gürültüyü ne için yapıyorsunuz?”",
    },
    { original: "„Kennen Sie mich?“", translation: "“Beni tanıyor musunuz?”" },
    { original: "„Ich kenne Sie nicht.“", translation: "“Sizi tanımıyorum.”" },
    {
      original: "„Nehmen Sie die Hand von der Tür.“",
      translation: "“Elinizi kapıdan çekin.”",
    },
    { original: "„Nein.“", translation: "“Hayır.”" },
    { original: "„Gehen Sie weg.“", translation: "“Gidin.”" },
    {
      original: "„Was schauen Sie mich so an?“",
      translation: "“Neden bana böyle bakıyorsunuz?”",
    },
    {
      original: "„Ich schaue Sie nicht an.“",
      translation: "“Sana bakmıyorum.”",
    },
    { original: "„Sie kennen mich.“", translation: "“Beni tanıyorsunuz.”" },
    {
      original: "„Sie haben mich doch schon mal gesehen.“",
      translation: "“Beni daha önce görmüşsünüz.”",
    },
    { original: "„Echt nicht.“", translation: "“Gerçekten değil.”" },
    {
      original: "„Ich will, dass Sie jetzt gehen.“",
      translation: "“Şimdi gitmenizi istiyorum.”",
    },
    { original: "„Das bin ich.“", translation: "“Bu benim.”" },
    { original: "„Was wollen Sie?“", translation: "“Ne istiyorsunuz?”" },
    {
      original: "„Sie sind nicht Natalia Aschenbrenner.“",
      translation: "“Siz Natalia Aschenbrenner değilsiniz.”",
    },
    {
      original: "„Lassen Sie mich in die Wohnung.“",
      translation: "“Beni daireye alın.”",
    },
    { original: "„Spinnst du?“", translation: "“Kafayı mı yedin?”" },
    { original: "Ich hörte ein Geräusch.", translation: "Bir ses duydum." },
    {
      original: "Wollte mich noch umdrehen.",
      translation: "Hâlâ dönmek istiyordum.",
    },
    { original: "Aber…", translation: "Ama…" },
    {
      original: "„Wir schleifen ihn rein und dann weg hier.“",
      translation: "“Onu içeri sürükleyelim ve sonra buradan gidelim.”",
    },
    {
      original: "„Hilf mir nochmal, du dumme Kuh.“",
      translation: "“Bir kez daha yardım et, aptal inek.”",
    },
    {
      original: "„Bitte red nicht so mit mir.“",
      translation: "“Lütfen benimle böyle konuşma.”",
    },
    { original: "„Hast du den Koffer?“", translation: "“Valizi aldın mı?”" },
    { original: "„Eloise.“", translation: "“Eloise.”" },
    {
      original: "„Solange es einfach für die Marine lernen.“",
      translation: "“Denizciler için öğrenmesi kolay olduğu sürece.”",
    },
    {
      original: "„Hilfe, ich bin 1989.“",
      translation: "“Yardım, 1989’dayım.”",
    },
    {
      original: "„Hilfe, ich lese mich.“",
      translation: "“Yardım, kendimi okuyorum.”",
    },
    {
      original: "„Sie reden, das ist wichtig.“",
      translation: "“Konuşuyorlar, bu önemli.”",
    },
    {
      original: "„Frau, was teuer für?“",
      translation: "“Kadın, ne için pahalı?”",
    },
    { original: "„Mach die Tür auf.“", translation: "“Kapıyı aç.”" },
    { original: "„Nein, nein.“", translation: "“Hayır, hayır.”" },
    {
      original: "„Ich bin zurück aus Amerika.",
      translation: "“Amerika’dan döndüm.”",
    },
    {
      original:
        "Bis jetzt wohne ich noch im Hotel in Baden-Baden, aber ich werde wieder hier in Henkersbach leben.",
      translation:
        "“Şimdilik Baden-Baden’deki otelde kalıyorum, ama tekrar Henkersbach’ta yaşayacağım.”",
    },
    {
      original: "Und weißt du, warum ich das will?",
      translation: "“Ve neden bunu istediğimi biliyor musun?”",
    },
    {
      original: "Weil ich das Hotel wieder eröffnen will.",
      translation: "“Çünkü oteli yeniden açmak istiyorum.”",
    },
    {
      original: "Und zwar mit dir als Chefköchin.“",
      translation: "“Hem de senin baş aşçı olarak.”",
    },
    { original: "„Geh weg, du.“", translation: "“Git buradan.”" },
    {
      original: "„Ich wusste, dass du immer noch hier bist.",
      translation: "“Hâlâ burada olduğunu biliyordum.”",
    },
    {
      original: "Du wirst nie woanders sein.",
      translation: "“Asla başka bir yerde olmayacaksın.”",
    },
    {
      original: "Und ich verrat dir was, Eloise.",
      translation: "“Ve sana bir şey söyleyeyim, Eloise.”",
    },
    {
      original: "All die Jahre da drüben habe ich an dich gedacht, jeden Tag.“",
      translation: "“Oradaki tüm o yıllarda seni düşündüm, her gün.”",
    },
    {
      original: "„Läufst du mir nach?“",
      translation: "“Beni mi takip ediyorsun?”",
    },
    { original: "„Mach auf.“", translation: "“Aç kapıyı.”" },
    {
      original: "„Ich will dich anschauen.“",
      translation: "“Sana bakmak istiyorum.”",
    },
    {
      original: "„Hast du deine Haare gefärbt?“",
      translation: "“Saçlarını mı boyattın?”",
    },
    {
      original: "„Du bist immer noch genauso scharf wie damals, das Wettig.“",
      translation: "“Hâlâ eskisi gibi çekicisin, bu kesin.”",
    },
    {
      original: "„Die ich kann das Leben nicht verunstalten.“",
      translation: "“Hayatı mahvedemem.”",
    },
    {
      original: "„Ich zeige dich schon mal dem Steinhaus.",
      translation: "“Seni zaten Steinhaus’a göstereceğim.”",
    },
    {
      original: "Und dann kommt die ganze Geschichte endlich ans Licht.“",
      translation: "“Ve sonra tüm hikaye nihayet gün ışığına çıkacak.”",
    },
    {
      original: "„Ich lüge noch so viele Jahre.“",
      translation: "“Hâlâ bunca yıl yalan söylüyorum.”",
    },
    {
      original: "„Kuss, Wioleer, merk doch!",
      translation: "“Öpücük, Wioleer, fark et!”",
    },
    {
      original: "Ich habe niemand ermordet.“",
      translation: "“Kimseyi öldürmedim.”",
    },
    {
      original: "„Und ich… dich habe ich geliebt.“",
      translation: "“Ve ben… seni sevdim.”",
    },
    { original: "„Ich hoffe, die Polizei.“", translation: "“Umarım polis.”" },
    {
      original: "„Okay, okay, Eloise.",
      translation: "“Tamam, tamam, Eloise.”",
    },
    {
      original:
        "Geh ins Bett, schlaf dich aus, und morgen oder übermorgen besuche ich dich wieder.",
      translation:
        "“Yatağa git, uyu, yarın ya da öbür gün seni tekrar ziyaret edeceğim.”",
    },
    {
      original: "Und dann reden wir in aller Ruhe.",
      translation: "“Ve sonra sakin sakin konuşuruz.”",
    },
    {
      original: "Gute Nacht, meine Schöne.“",
      translation: "“İyi geceler, güzelim.”",
    },
    {
      original:
        "Etwas in meinem Kopf fühlte sich an wie das Echo eines Baseballschlägers.",
      translation:
        "Kafamda bir şey, bir beyzbol sopasının yankısı gibi hissettiriyordu.",
    },
    {
      original: "Als ich das letzte Mal zusammengeschlagen wurde, war ich 19.",
      translation: "En son dayak yediğimde 19 yaşındaydım.",
    },
    {
      original: "Mein Gegner war mein bester Freund Martin Heuer.",
      translation: "Rakibim en iyi arkadaşım Martin Heuer’di.",
    },
    {
      original:
        "Der schlug mit einer solchen Wucht zu, wie ich es niemals erwartet hätte.",
      translation: "O, hiç beklemediğim bir güçle vurmuştu.",
    },
    {
      original: "Ich schaute mich in der Wohnung um.",
      translation: "Dairede etrafa baktım.",
    },
    {
      original: "Zwei mittelgroße Zimmer, schlichte Möbel.",
      translation: "İki orta büyüklükte oda, sade mobilyalar.",
    },
    {
      original:
        "Eine Unmenge von Modezeitschriften und Illustrierten auf dem Wohnzimmertisch.",
      translation: "Oturma odası masasında bir yığın moda dergisi ve magazin.",
    },
    {
      original: "Ein Regal voller DVDs und Videokassetten.",
      translation: "DVD’ler ve video kasetlerle dolu bir raf.",
    },
    {
      original:
        "An der Pinnwand in der Küche hingen signierte Fotos von Schauspielern.",
      translation:
        "Mutfaktaki mantar panoda oyuncuların imzalı fotoğrafları asılıydı.",
    },
    {
      original:
        "Manche bedankten sich in krakeliger Schrift für Natalias tolle Arbeit.",
      translation:
        "Bazıları, Natalia’nın harika işi için karışık bir yazıyla teşekkür ediyordu.",
    },
    {
      original: "War sie Regisseurin oder Fotografin?",
      translation: "Yönetmen miydi yoksa fotoğrafçı mı?",
    },
    {
      original: "Nichts in der Wohnung deutete auf einen Kampf hin.",
      translation: "Dairede bir kavgaya işaret eden hiçbir şey yoktu.",
    },
    {
      original:
        "Wenn Natalia tatsächlich gekidnappt worden war, war das nicht hier geschehen.",
      translation: "Eğer Natalia gerçekten kaçırılmışsa, bu burada olmamıştı.",
    },
    {
      original:
        "Oder sie war zunächst freiwillig mitgegangen, ohne den Ernst der Situation zu erkennen.",
      translation:
        "Ya da başlangıçta durumun ciddiyetini fark etmeden gönüllü olarak gitmişti.",
    },
    {
      original:
        "In einer Glasschale im Flur entdeckte ich einen Stapel Visitenkarten.",
      translation: "Koridorda bir cam kapta bir yığın kartvizit buldum.",
    },
    {
      original: "Natalia Aschenbrenner, Maskenbildnerin, Friseurin.",
      translation: "Natalia Aschenbrenner, Makyaj Sanatçısı, Kuaför.",
    },
    {
      original: "Darunter standen ihre Handynummer und ihre Mailadresse.",
      translation: "Altında cep telefonu numarası ve e-posta adresi yazıyordu.",
    },
    {
      original: "Ich holte mein Handy aus der Tasche.",
      translation: "Cebimden telefonumu çıkardım.",
    },
    {
      original: "„Hallo, hier ist Natalia Aschenbrenner.",
      translation: "“Merhaba, bu Natalia Aschenbrenner.”",
    },
    {
      original: "Ich bin leider gerade nicht anwesend.",
      translation: "“Maalesef şu anda burada değilim.”",
    },
    {
      original: "Bitte hinterlassen Sie Ihren Namen und Ihre Nummer.",
      translation: "“Lütfen adınızı ve numaranızı bırakın.”",
    },
    {
      original: "Ich rufe Sie schnell zurück. Versprochen.“",
      translation: "“Sizi hemen geri arayacağım. Söz veriyorum.”",
    },
    {
      original:
        "„Tabor Süden. Wo sind Sie? Bitte rufen Sie mich an. Meine Nummer sehen Sie auf dem Display.“",
      translation:
        "“Tabor Süden. Neredesiniz? Lütfen beni arayın. Numaramı ekranda görüyorsunuz.”",
    },
    {
      original: "Natürlich hatten sie mich eingesperrt.",
      translation: "Tabii ki beni kilitlemişlerdi.",
    },
    {
      original: "Die Suche nach einem Schlüssel gab ich nach fünf Minuten auf.",
      translation: "Anahtar aramayı beş dakika sonra bıraktım.",
    },
    {
      original:
        "Ich rief einen Mitarbeiter eines Schlüsseldienstes an, den ich noch aus meiner Zeit beim Dezernat 11 kannte.",
      translation: "11. Şube’den tanıdığım bir çilingir çalışanını aradım.",
    },
    {
      original: "Er versprach, sich zu beeilen.",
      translation: "O, acele edeceğini söyledi.",
    },
    {
      original:
        "Gerade als ich es aufgab, nach Hinweisen auf Natalias Lebensumstände zu stöbern und überlegte, ob ich die Polizei einschalten sollte, klingelte mein Handy.",
      translation:
        "Tam Natalia’nın yaşam koşullarına dair ipuçları aramaktan vazgeçmiş ve polisi arayıp aramamayı düşünürken telefonum çaldı.",
    },
    { original: "Eine unterdrückte Nummer.", translation: "Gizli bir numara." },
    {
      original:
        "„Herr Süden, mein Name ist Walter Steinhaus. Ich bin der Vater von Natalia Aschenbrenner. Hören Sie mich?“",
      translation:
        "“Bay Süden, adım Walter Steinhaus. Natalia Aschenbrenner’ın babasıyım. Beni duyuyor musunuz?”",
    },
    {
      original:
        "„Oh, bedankt. Gut. Also, ich bin in Baden-Baden, Hotel Leopold. Meine Tochter ist verschwunden. Gestern war sie noch in unserem ehemaligen Haus in Henkersbach, wo sie immer noch ein Zimmer hat. Bitte, kommen Sie und helfen Sie mir bei der Suche. Sie sind doch Detektiv.“",
      translation:
        "“Oh, teşekkürler. İyi. Şey, Baden-Baden’deyim, Leopold Oteli’nde. Kızım kayboldu. Dün hâlâ Henkersbach’taki eski evimizdeydi, orada hâlâ bir odası var. Lütfen gelin ve aramama yardım edin. Dedektifsiniz, değil mi?”",
    },
    {
      original: "„Woher haben Sie meine Nummer?“",
      translation: "“Numaramı nereden aldınız?”",
    },
    {
      original: "„Von Lea Sandig. Sie hat sie in Ihrem Zimmer liegen lassen.“",
      translation: "“Lea Sandig’den. O, numaranızı odanızda bırakmış.”",
    },
    { original: "„Wann?“", translation: "“Ne zaman?”" },
    {
      original:
        "„Sie hat mich heute Morgen angerufen. Mich doch auch. Und ich bin dann gleich nach München losgefahren. Und dann lag nur noch ihr Handy da in dem Haus, und die anderen Mieter wissen nichts.“",
      translation:
        "“Bu sabah beni aradı. Gerçekten. Ve hemen Münih’e yola çıktım. Sonra evde sadece onun cep telefonu vardı ve diğer kiracılar hiçbir şey bilmiyor.”",
    },
    {
      original: "„Waren Sie bei der Polizei?“",
      translation: "“Polise gittiniz mi?”",
    },
    {
      original:
        "„Nein. Meine Tochter… Sie ist schon oft weggewesen in diesen Zirkeln, wo sie mit Geistern sprechen. Keine Polizei. Bitte kommen Sie. Ich bezahle die Reise natürlich.“",
      translation:
        "“Hayır. Kızım… Daha önce sık sık bu ruhlarla konuştuğu gruplarla kaybolmuştu. Polis olmaz. Lütfen gelin. Seyahat masraflarını tabii ki ben ödeyeceğim.”",
    },
    {
      original: "„Wo ist Natalias Mutter?“",
      translation: "“Natalia’nın annesi nerede?”",
    },
    {
      original:
        "„Sie ist aus Deutschland weggezogen. Wir haben keinen Kontakt.“",
      translation: "“Almanya’dan taşındı. İletişimimiz yok.”",
    },
    {
      original:
        "„Ich glaube nicht, dass Natalia von Geistern entführt wurde, Herr Steinhaus.“",
      translation:
        "“Natalia’nın hayaletler tarafından kaçırıldığını sanmıyorum, Bay Steinhaus.”",
    },
    {
      original: "„Helfen Sie mir, bitte. Lea ist leicht, glaube ich. Bitte.“",
      translation: "“Lütfen yardım edin. Lea kolay, sanırım. Lütfen.”",
    },
    {
      original:
        "Auf die Frage, warum ich mich auf so etwas einlassen könnte, musste ich keine vernünftige Antwort geben.",
      translation:
        "Böyle bir şeye neden karışacağım sorusuna mantıklı bir cevap vermem gerekmiyordu.",
    },
    {
      original:
        "Edith Liebergesell, die Leiterin der Detektei, bei der ich offiziell immer noch arbeitete, obwohl unsere Büroräume nach einem Brandanschlag weiterhin unbenutzbar waren, hatte darauf bestanden, mich am Münchner Hauptbahnhof zu treffen.",
      translation:
        "Resmi olarak hâlâ çalıştığım dedektiflik bürosunun müdürü Edith Liebergesell, bir kundaklama sonrası ofislerimiz hâlâ kullanılamaz durumda olmasına rağmen, Münih Merkez İstasyonu’nda buluşmamızda ısrar etmişti.",
    },
    {
      original:
        "Nachdem ich ihr von dem morgendlichen Anruf und dem Überfall auf mich erzählte, starrte sie mich an, als hätte ich den Verstand verloren.",
      translation:
        "Ona sabahki telefon görüşmesini ve bana yapılan saldırıyı anlattıktan sonra, sanki aklımı kaybetmişim gibi bana baktı.",
    },
    {
      original:
        "Sie konnte nicht glauben, dass ich nicht längst die Polizei eingeschaltet hatte.",
      translation: "Polisi çoktan aramamış olmama inanamıyordu.",
    },
    {
      original: "Abgesehen davon beunruhigte sie mein Hämatom am Hinterkopf.",
      translation:
        "Bunun dışında, kafamın arkasındaki hematom onu endişelendiriyordu.",
    },
    {
      original:
        "Mir gehe es gut, versicherte ich ihr. Das bezweifelte sie massiv.",
      translation: "İyi olduğumu söyledim, ama o buna kesinlikle inanmadı.",
    },
    {
      original:
        "In dem zu den Gleisen hin offenen Restaurant der Bahnhofshalle hatte sie ein Glas Weißwein bestellt, es zur Hälfte ausgetrunken und mich dann mit ihren Fragen gelöchert.",
      translation:
        "İstasyon salonundaki raylara açık restoranda bir kadeh beyaz şarap sipariş etmiş, yarısını içmiş ve sonra beni sorularıyla bunaltmıştı.",
    },
    {
      original:
        "Auch mich trieben die Fragen, die ich mir selbst stellte, fortwährend durch den Kopf, während ich über 100 Kilometer hinweg in eine Gegend fuhr, in der ich noch nie gewesen war, auf der Suche nach einer Frau, von der ich fast nichts wusste, außer dass sie von Beruf Maskenbildnerin und Friseurin war und dass jemand sie offensichtlich verschleppt hatte.",
      translation:
        "Kendi kendime sorduğum sorular da sürekli kafamı kurcalıyordu, 100 kilometreden fazla bir mesafeyi, hiç gitmediğim bir bölgeye, neredeyse hiçbir şey bilmediğim bir kadını aramak için giderken; sadece onun meslek olarak makyaj sanatçısı ve kuaför olduğunu ve birinin onu açıkça kaçırdığını biliyordum.",
    },
    { original: "Was war los mit mir?", translation: "Bana neler oluyordu?" },
    {
      original:
        "Beinah wäre ich heute schon in ein Auto gelaufen, von der Straßenbahn ganz zu schweigen.",
      translation:
        "Bugün neredeyse bir arabaya çarpıyordum, tramvayı saymıyorum bile.",
    },
    {
      original:
        "Wie ein Anfänger hatte ich mich hinterrücks niederschlagen lassen.",
      translation: "Bir acemi gibi arkadan vurulmama izin vermiştim.",
    },
    {
      original:
        "Ich wühlte in alten Telefonbüchern auf der Suche nach einem Namen, den ich wenige Stunden zuvor zum ersten Mal gehört hatte.",
      translation:
        "Birkaç saat önce ilk kez duyduğum bir ismi bulmak için eski telefon rehberlerini karıştırıyordum.",
    },
    { original: "Was sollte das?", translation: "Bu neydi şimdi?" },
    {
      original:
        "„Natalia Aschenbrenner, wo soll das sein?“ fragte mich Edith Liebergesell.",
      translation:
        "“Natalia Aschenbrenner, bu nerede?” diye sordu Edith Liebergesell.",
    },
    {
      original: "Und ich wusste, wie so oft, keine Antwort.",
      translation: "Ve her zaman olduğu gibi, bir cevabım yoktu.",
    },
    {
      original:
        "Eine junge Frau, von ihren Freunden und ihrem Vater offensichtlich nicht hierhergebracht.",
      translation:
        "Genç bir kadın, arkadaşları ve babası tarafından açıkça buraya getirilmemişti.",
    },
    {
      original:
        "Der Vater behauptete, er hätte meine Nummer vom Handy seiner Tochter.",
      translation:
        "Baba, numaramı kızının telefonundan aldığını iddia ediyordu.",
    },
    {
      original:
        "„Glaubst du im Ernst, dass dieser Mann die Wahrheit sagt?“ meinte Edith Liebergesell, leerte ihr Weinglas und winkte dem Kellner.",
      translation:
        "“Bu adamın doğruyu söylediğine gerçekten inanıyor musun?” dedi Edith Liebergesell, şarap kadehini bitirdi ve garsona işaret etti.",
    },
    {
      original: "Ich wusste nicht, ob ich ihm glauben konnte.",
      translation: "Ona inanıp inanamayacağımı bilmiyordum.",
    },
    {
      original: "Walter Steinhaus. Und Lea Sandig.",
      translation: "Walter Steinhaus. Ve Lea Sandig.",
    },
    {
      original:
        "Und wer war die Frau, die mir in Natalias Wohnung die Tür geöffnet hatte?",
      translation: "Ve Natalia’nın dairesinde kapıyı açan kadın kimdi?",
    },
    {
      original:
        "Eine Verbündete der Person, die mich bewusstlos geschlagen hatte, so viel stand fest.",
      translation: "Beni bayıltan kişinin bir müttefiki olduğu kesindi.",
    },
    {
      original:
        "„Wir müssen zur Polizei“, wiederholte Edith Liebergesell zum fünften Mal.",
      translation: "“Polise gitmeliyiz,” dedi Edith Liebergesell beşinci kez.",
    },
    {
      original: "Und zum fünften Mal sagte ich: „Nein.“",
      translation: "Ve beşinci kez dedim ki: “Hayır.”",
    },
    {
      original:
        "Sie erklärte mich für unprofessionell, leichtsinnig und lebensmüde.",
      translation:
        "Beni profesyonelce davranmamakla, pervasız ve ölüme meydan okumakla suçladı.",
    },
    {
      original: "Ich versprach, mich regelmäßig bei ihr zu melden.",
      translation: "Ona düzenli olarak haber vereceğime söz verdim.",
    },
    {
      original: "Sie wusste, dass sie sich darauf nicht verlassen konnte.",
      translation: "Bunun güvenilir olmadığını biliyordu.",
    },
    {
      original: "Sie umarmte mich trotzdem.",
      translation: "Yine de bana sarıldı.",
    },
    {
      original:
        "Erleichtert unterwegs zu seinem Land, ließ ich mich in meinen Sitz im Großraumwagen zurückfallen, schloss die Augen und hörte Stimmen, die nicht mit denen um mich herum übereinstimmten.",
      translation:
        "Onun bölgesine giderken rahatlamış bir şekilde, büyük vagondaki koltuğuma yaslandım, gözlerimi kapattım ve etrafımdakilerle uyuşmayan sesler duydum.",
    },
    {
      original: "„Sind Sie Süden? Der Detektif?“",
      translation: "“Süden siz misiniz? Dedektif?”",
    },
    {
      original: "„Was machen Sie hier für einen Lärm in der Nacht?“",
      translation: "“Gece vakti burada bu gürültüyü ne için yapıyorsunuz?”",
    },
    { original: "„Ich bin gekidnappt worden.“", translation: "“Kaçırıldım.”" },
    {
      original: "„Habe ich Sie gewählt?“",
      translation: "“Sizi ben mi seçtim?”",
    },
    {
      original: "„Bitte, ich schaue Sie nicht an.“",
      translation: "“Lütfen, size bakmıyorum.”",
    },
    {
      original: "„Sie müssen mich suchen.“",
      translation: "“Beni bulmalısınız.”",
    },
    {
      original: "„Bitte, das ist meine Wohnung.“",
      translation: "“Lütfen, bu benim dairem.”",
    },
    { original: "„Im Schwarzwald.“", translation: "“Kara Orman’da.”" },
    { original: "„In Henkersbach.“", translation: "“Henkersbach’ta.”" },
    {
      original: "„Bitte. Bitte, nächste Station.“",
      translation: "“Lütfen. Lütfen, bir sonraki durak.”",
    },
    {
      original:
        "„Das war so super von dir, wie du das am Telefon gemacht hast. Super, super.“",
      translation: "“Telefonda yaptığın şey çok süperdi. Süper, süper.”",
    },
    { original: "„Lass das.“", translation: "“Bırak bunu.”" },
    {
      original: "„Ich muss mich konzentrieren.“",
      translation: "“Konsantre olmam lazım.”",
    },
    {
      original: "„Wir kriegen ihn, ich schwör’s.“",
      translation: "“Onu yakalayacağız, yemin ederim.”",
    },
    {
      original: "„Und dann wird er büßen für das, was er mir angetan hat.“",
      translation: "“Ve sonra bana yaptıklarının bedelini ödeyecek.”",
    },
    { original: "„Du bist der Größte.“", translation: "“Sen en iyisisin.”" },
    {
      original: "„Er ist super, der Größte.“",
      translation: "“O süper, en iyisi.”",
    },
    {
      original: "„Und du bist betrunken.“",
      translation: "“Ve sen sarhoşsun.”",
    },
    {
      original: "„Ich darf was trinken, wenn du rauchen darfst.“",
      translation: "“Sen sigara içebiliyorsan, ben de içki içebilirim.”",
    },
    { original: "„Mir ist kalt.“", translation: "“Üşüyorum.”" },
    { original: "„Mach das Fenster zu.“", translation: "“Pencereyi kapat.”" },
    {
      original: "„Sei einfach still. Total still.“",
      translation: "“Sadece sessiz ol. Tamamen sessiz.”",
    },
    { original: "„Hast du das gehört?“", translation: "“Bunu duydun mu?”" },
    { original: "„Was?“", translation: "“Ne?”" },
    {
      original: "„Ist das ein Humpeln?“",
      translation: "“Bu bir topallama mı?”",
    },
    {
      original: "„Ich bin dein Kopf.“",
      translation: "“Ben senin kafanın içiyim.”",
    },
    { original: "„Im Kofferraum.“", translation: "“Bagajda.”" },
    { original: "„Quatsch.“", translation: "“Saçmalık.”" },
    {
      original: "„Wir müssen nach Samkalen.“",
      translation: "“Samkalen’e gitmeliyiz.”",
    },
    { original: "„Wir haben keine Zeit.“", translation: "“Vaktimiz yok.”" },
    {
      original: "„Ich will wissen, wie es Lea geht.“",
      translation: "“Lea’nın nasıl olduğunu bilmek istiyorum.”",
    },
    { original: "„Was wollen Sie?“", translation: "“Ne istiyorsunuz?”" },
    {
      original: "„Sie sind Walter Steinhaus.“",
      translation: "“Siz Walter Steinhaus’sunuz.”",
    },
    { original: "„Und Sie?“", translation: "“Ya siz?”" },
    { original: "„Tabor Süden.“", translation: "“Tabor Süden.”" },
    {
      original: "„Sie haben mich nicht angerufen.“",
      translation: "“Beni aramadınız.”",
    },
    {
      original: "„Können wir uns erinnern, dass wir verabredet waren?“",
      translation: "“Randevulaştığımızı hatırlıyor muyuz?”",
    },
    {
      original: "„Wir haben uns nicht verabredet.“",
      translation: "“Randevulaşmadık.”",
    },
    {
      original: "„Wir haben uns nicht verabredet.“",
      translation: "“Randevulaşmadık.”",
    },
    {
      original: "„Wir haben uns nicht verabredet.“",
      translation: "“Randevulaşmadık.”",
    },
    // ... diğer cümleler buraya eklenebilir
  ];
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const skipTime = (seconds) => {
    const audio = audioRef.current;
    audio.currentTime = Math.max(
      0,
      Math.min(audio.currentTime + seconds, duration)
    );
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sol taraf - yazılar scroll edebilir */}
      <div className="w-2/3 overflow-y-scroll p-6">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          {sentences.map((sentence, index) => (
            <div key={index} className="relative group mb-4">
              <span className="text-lg text-gray-800 cursor-pointer group-hover:underline">
                {sentence.original}
              </span>
              <div className="absolute hidden group-hover:block bg-black text-white text-sm rounded-lg p-2 mt-1 z-10 max-w-xs">
                {sentence.translation}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sağ taraf - sabit ses oynatıcı */}
      <div className="w-1/3 bg-white border-l border-gray-300  columns-1 items-center justify-center">
        <div className="bg-gray-50 p-6 rounded-xl shadow-md w-full max-w-sm text-center">
          <div className="flex items-center justify-between space-x-2 mb-3">
            <button
              onClick={() => skipTime(-3)}
              className="bg-gray-300 text-black px-3 py-1 rounded hover:bg-gray-400"
            >
              ⏪ 3s
            </button>

            <button
              onClick={togglePlay}
              className={`px-5 py-2 text-white rounded-lg font-semibold ${
                isPlaying ? "bg-red-500" : "bg-green-500"
              } hover:opacity-90 transition`}
            >
              {isPlaying ? "⏸ Durdur" : "▶️ Oynat"}
            </button>

            <button
              onClick={() => skipTime(3)}
              className="bg-gray-300 text-black px-3 py-1 rounded hover:bg-gray-400"
            >
              3s ⏩
            </button>
          </div>

          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>

          <audio
            ref={audioRef}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
          >
            <source src="/a.mp3" type="audio/mpeg" />
            Tarayıcınız audio elementini desteklemiyor.
          </audio>

          <div className="text-center font-semibold mt-2">
            🎧 ARD Krimiserie: Tabor Süden
          </div>
        </div>
      </div>
    </div>
  );
};
export default Buch11;
