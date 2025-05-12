import React, { useState } from "react";

const textData = [
  {
    title: "1. Verbposition in einfachen Sätzen",
    sentences: [
      {
        text: "Martin schloss die Augen.",
        translation: "Martin gözlerini kapattı.",
        explanation:
          "Basit cümlelerde çekimli fiil ikinci konumdadır. Burada 'schloss' (kapattı), özne 'Martin'den sonra gelir.",
      },
      {
        text: "Er atmete tief ein und aus.",
        translation: "Derin bir nefes aldı ve verdi.",
        explanation:
          "Çekimli fiil 'atmete' (nefes aldı) ikinci konumdadır. Koordinatif bağlaç 'und' ile bağlı ikinci fiil de aynı kuralı takip eder.",
      },
      {
        text: "Das Vorstellungsgespräch begann in nur zwanzig Minuten.",
        translation: "Mülakat yirmi dakika içinde başlayacaktı.",
        explanation:
          "Fiil 'begann' (başlayacaktı) ikinci konumdadır. Zaman zarfı 'in nur zwanzig Minuten' cümlenin sonunda yer alır.",
      },
      {
        text: "Seine Hände zitterten leicht.",
        translation: "Elleri hafifçe titriyordu.",
        explanation:
          "Fiil 'zitterten' (titriyordu) ikinci konumdadır. Zarf 'leicht' fiilden sonra gelir ve eylemi nitelendirir.",
      },
      {
        text: "Der Kandidat bereitete sich mental auf die schwierigen Fragen vor.",
        translation: "Aday, zor sorulara zihinsel olarak hazırlandı.",
        explanation:
          "Fiil 'bereitete' (hazırlandı) ikinci konumdadır. 'Sich vor' fiilden sonra gelir ve hazırlık eylemini tamamlar.",
      },
      {
        text: "Auf dem Tisch lag seine perfekt gestaltete Bewerbungsmappe.",
        translation:
          "Masanın üzerinde mükemmel hazırlanmış başvuru dosyası duruyordu.",
        explanation:
          "Fiil 'lag' (duruyordu) ikinci konumdadır. Mekan zarfı 'auf dem Tisch' cümlenin başında, nesne ise fiilden sonra yer alır.",
      },
      {
        text: "Neben ihm saßen drei weitere Bewerber.",
        translation: "Onun yanında üç başka aday oturuyordu.",
        explanation:
          "Fiil 'saßen' (oturuyordu) ikinci konumdadır. Mekan zarfı 'neben ihm' fiilden önce gelir.",
      },
      {
        text: "Die Sekretärin rief plötzlich seinen Namen.",
        translation: "Sekreter aniden onun adını çağırdı.",
        explanation:
          "Fiil 'rief' (çağırdı) ikinci konumdadır. Zarf 'plötzlich' fiilden sonra gelir ve eylemin nasıl gerçekleştiğini belirtir.",
      },
      {
        text: "Martin stand sofort auf.",
        translation: "Martin hemen ayağa kalktı.",
        explanation:
          "Fiil 'stand' (ayağa kalktı) ikinci konumdadır. Zarf 'sofort' fiilden sonra gelir.",
      },
      {
        text: "Er folgte ihr durch einen langen Korridor.",
        translation: "Onu uzun bir koridordan takip etti.",
        explanation:
          "Fiil 'folgte' (takip etti) ikinci konumdadır. Mekan zarfı 'durch einen langen Korridor' fiilden sonra gelir.",
      },
      {
        text: "Die Tür zum Besprechungsraum öffnete sich langsam.",
        translation: "Toplantı odasının kapısı yavaşça açıldı.",
        explanation:
          "Fiil 'öffnete' (açıldı) ikinci konumdadır. Zarf 'langsam' fiilden sonra gelir ve eylemin hızını belirtir.",
      },
    ],
  },
  {
    title: "2. Verbposition in Satzverbindungen",
    sentences: [
      {
        text: "Als Martin den Raum betrat, lächelte ihm eine Frau in einem eleganten Anzug freundlich zu.",
        translation:
          "Martin odaya girdiğinde, şık bir takım elbiseli bir kadın ona dostça gülümsedi.",
        explanation:
          "Bağımlı yan cümlede fiil ('betrat') cümlenin sonunda yer alır. Ana cümlede çekimli fiil 'lächelte' (gülümsedi) ikinci konumdadır.",
      },
      {
        text: "Er wusste sofort, dass sie die Personalchefin sein musste, weil ihre Ausstrahlung Autorität vermittelte.",
        translation:
          "Onun personel müdürü olması gerektiğini hemen anladı, çünkü duruşu otorite yayıyordu.",
        explanation:
          "Ana cümlede fiil 'wusste' (anladı) ikinci konumdadır. 'Dass' ile başlayan yan cümlede fiil 'sein musste' sonda, 'weil' ile başlayan yan cümlede fiil 'vermittelte' sonda yer alır.",
      },
      {
        text: "Obwohl er gut vorbereitet war, spürte er, wie sein Herz schneller schlug.",
        translation:
          "İyi hazırlanmış olmasına rağmen, kalbinin daha hızlı attığını hissetti.",
        explanation:
          "'Obwohl' ile başlayan yan cümlede fiil 'war' sonda yer alır. Ana cümlede fiil 'spürte' (hissetti) ikinci konumdadır.",
      },
      {
        text: "Er setzte sich auf den angebotenen Stuhl, nachdem die Personalchefin ihm dies mit einer Handbewegung signalisiert hatte.",
        translation:
          "Personel müdürü ona el hareketiyle işaret ettikten sonra, sunulan sandalyeye oturdu.",
        explanation:
          "Ana cümlede fiil 'setzte' (oturdu) ikinci konumdadır. 'Nachdem' ile başlayan yan cümlede fiil 'hatte' sonda yer alır.",
      },
      {
        text: '"Wir haben Ihren Lebenslauf mit großem Interesse gelesen", begann sie das Gespräch, während sie seine Unterlagen durchblätterte.',
        translation:
          '"Özgeçmişinizi büyük bir ilgiyle okuduk," diye konuşmaya başladı, belgelerini karıştırırken.',
        explanation:
          "Ana cümlede fiil 'begann' (başladı) ikinci konumdadır. 'Während' ile başlayan yan cümlede fiil 'durchblätterte' sonda yer alır.",
      },
      {
        text: "Martin holte tief Luft und antwortete ruhig, sodass sein Nervenkitzel nicht zu bemerken war.",
        translation:
          "Martin derin bir nefes aldı ve sakin bir şekilde cevap verdi, böylece heyecanı fark edilmedi.",
        explanation:
          "Ana cümlede fiil 'antwortete' (cevap verdi) ikinci konumdadır. 'Sodass' ile başlayan yan cümlede fiil 'war' sonda yer alır.",
      },
      {
        text: "Da er sich seit Wochen auf diesen Moment vorbereitet hatte, konnte er ihre Fragen souverän beantworten.",
        translation:
          "Haftalardır bu ana hazırlandığı için, sorularını kendine güvenerek cevaplayabildi.",
        explanation:
          "'Da' ile başlayan yan cümlede fiil 'hatte' sonda yer alır. Ana cümlede fiil 'konnte' (cevaplayabildi) ikinci konumdadır.",
      },
    ],
  },
  {
    title: "3. Position von Datum und Ortsangabe zum Subjekt",
    sentences: [
      {
        text: "Am nächsten Morgen erhielt Martin in seiner kleinen Wohnung den ersehnten Anruf.",
        translation:
          "Ertesi sabah Martin küçük dairesinde beklenen telefon çağrısını aldı.",
        explanation:
          "Zaman zarfı 'am nächsten Morgen' cümlenin başında yer alır. Çekimli fiil 'erhielt' (aldı) ikinci konumdadır. Mekan zarfı 'in seiner kleinen Wohnung' fiilden sonra gelir.",
      },
      {
        text: "Die Personalchefin teilte ihm gestern Abend nach langer Überlegung die frohe Nachricht mit.",
        translation:
          "Personel müdürü dün akşam uzun bir düşünce sürecinden sonra ona müjdeli haberi verdi.",
        explanation:
          "Zaman zarfı 'gestern Abend' ve 'nach langer Überlegung' fiilden önce veya sonra yer alabilir. Fiil 'teilte' (verdi) ikinci konumdadır.",
      },
      {
        text: "In Berlin würde er ab dem ersten August seine neue Stelle antreten.",
        translation:
          "Berlin’de 1 Ağustos’tan itibaren yeni görevine başlayacaktı.",
        explanation:
          "Mekan zarfı 'in Berlin' cümlenin başında, zaman zarfı 'ab dem ersten August' fiilden sonra gelir. Fiil 'würde' ikinci konumdadır.",
      },
      {
        text: "Martin feierte am Wochenende mit seinen Freunden im Lieblingsrestaurant seinen Erfolg.",
        translation:
          "Martin hafta sonunda arkadaşlarıyla favori restoranında başarısını kutladı.",
        explanation:
          "Zaman zarfı 'am Wochenende' cümlenin başında, mekan zarfı 'im Lieblingsrestaurant' fiilden sonra gelir. Fiil 'feierte' (kutladı) ikinci konumdadır.",
      },
      {
        text: "Während der kommenden Wochen musste er in seiner Heimatstadt alles für den Umzug vorbereiten.",
        translation:
          "Önümüzdeki haftalarda memleketinde taşınma için her şeyi hazırlamak zorundaydı.",
        explanation:
          "Zaman zarfı 'während der kommenden Wochen' cümlenin başında, mekan zarfı 'in seiner Heimatstadt' fiilden sonra gelir. Fiil 'musste' ikinci konumdadır.",
      },
      {
        text: "Vor seiner Abreise besuchte er noch einmal in Ruhe seine Eltern.",
        translation:
          "Ayrılmadan önce bir kez daha sakin bir şekilde ailesini ziyaret etti.",
        explanation:
          "Zaman zarfı 'vor seiner Abreise' cümlenin başında, mekan zarfı 'in Ruhe' fiilden sonra gelir. Fiil 'besuchte' (ziyaret etti) ikinci konumdadır.",
      },
      {
        text: "Nach einer sechsstündigen Zugfahrt kam er schließlich in der deutschen Hauptstadt an.",
        translation:
          "Altı saatlik bir tren yolculuğundan sonra nihayet Alman başkentine ulaştı.",
        explanation:
          "Zaman zarfı 'nach einer sechsstündigen Zugfahrt' cümlenin başında, mekan zarfı 'in der deutschen Hauptstadt' fiilden sonra gelir. Fiil 'kam' (ulaştı) ikinci konumdadır.",
      },
    ],
  },
  {
    title: "4. Position der Angaben im Satz",
    sentences: [
      {
        text: "Martin hat glücklicherweise schnell eine schöne Wohnung in der Nähe seines neuen Arbeitsplatzes gefunden.",
        translation:
          "Martin şans eseri yeni iş yerinin yakınında güzel bir daire buldu.",
        explanation:
          "Fiil 'hat gefunden' ikinci konumdadır. Zarf 'glücklicherweise' cümlenin başında, mekan zarfı 'in der Nähe seines neuen Arbeitsplatzes' fiilden sonra gelir.",
      },
      {
        text: "Er hat sich trotz anfänglicher Zweifel gut in der Großstadt eingelebt.",
        translation:
          "Başlangıçtaki şüphelerine rağmen büyük şehirde iyi bir şekilde yerleşti.",
        explanation:
          "Fiil 'hat eingelebt' ikinci konumdadır. Zarf 'trotz anfänglicher Zweifel' cümlenin başında gelir.",
      },
      {
        text: "Die Kollegen haben ihn von Anfang an herzlich in ihrem Team aufgenommen.",
        translation:
          "Meslektaşları onu baştan beri içtenlikle ekiplerine kabul ettiler.",
        explanation:
          "Fiil 'haben aufgenommen' ikinci konumdadır. Zaman zarfı 'von Anfang an' fiilden sonra gelir.",
      },
      {
        text: "Martin arbeitet jetzt seit einem Monat mit großer Freude in der Marketingabteilung des Unternehmens.",
        translation:
          "Martin şimdi bir aydır büyük bir keyifle şirketin pazarlama bölümünde çalışıyor.",
        explanation:
          "Fiil 'arbeitet' ikinci konumdadır. Zaman zarfı 'seit einem Monat' ve mekan zarfı 'in der Marketingabteilung' fiilden sonra gelir.",
      },
      {
        text: "Er hat bereits mehrere kreative Projekte mit seinen Teamkollegen erfolgreich abgeschlossen.",
        translation:
          "Zaten ekip arkadaşlarıyla birkaç yaratıcı projeyi başarıyla tamamladı.",
        explanation:
          "Fiil 'hat abgeschlossen' ikinci konumdadır. Zarf 'bereits' fiilden önce gelir.",
      },
      {
        text: "Sein Chef lobte ihn gestern wegen seiner innovativen Ideen in der Teambesprechung.",
        translation:
          "Patronu dün yenilikçi fikirleri nedeniyle ekip toplantısında onu övdü.",
        explanation:
          "Fiil 'lobte' (övdü) ikinci konumdadır. Zaman zarfı 'gestern' ve neden zarfı 'wegen seiner innovativen Ideen' fiilden sonra gelir.",
      },
      {
        text: "Martin kann sich momentan kein besseres Arbeitsleben vorstellen.",
        translation: "Martin şu anda daha iyi bir iş hayatı hayal edemez.",
        explanation:
          "Fiil 'kann' ikinci konumdadır. Zaman zarfı 'momentan' fiilden sonra gelir.",
      },
    ],
  },
  {
    title: "5. Informationen direkt zum Verb",
    sentences: [
      {
        text: "In seinem neuen Alltag lernt Martin täglich Deutsch.",
        translation: "Yeni günlük yaşamında Martin her gün Almanca öğreniyor.",
        explanation:
          "Fiil 'lernt' (öğreniyor) ikinci konumdadır. Zaman zarfı 'täglich' fiilden sonra gelir ve eylemin sıklığını belirtir.",
      },
      {
        text: "Er spricht mittlerweile fließend mit seinen Kollegen.",
        translation: "Artık meslektaşlarıyla akıcı bir şekilde konuşuyor.",
        explanation:
          "Fiil 'spricht' (konuşuyor) ikinci konumdadır. Zarf 'mittlerweile' fiilden önce gelir.",
      },
      {
        text: "Seine Freundin Sarah kommt nächste Woche zu Besuch.",
        translation: "Kız arkadaşı Sarah önümüzdeki hafta ziyarete gelecek.",
        explanation:
          "Fiil 'kommt' (gelecek) ikinci konumdadır. Zaman zarfı 'nächste Woche' fiilden sonra gelir.",
      },
      {
        text: "Sie bleibt wahrscheinlich für zwei Wochen in Berlin.",
        translation: "Muhtemelen iki hafta Berlin’de kalacak.",
        explanation:
          "Fiil 'bleibt' (kalacak) ikinci konumdadır. Zaman zarfı 'für zwei Wochen' fiilden sonra gelir.",
      },
      {
        text: "Martin zeigt ihr gerne seine neue Lieblingsorte.",
        translation:
          "Martin ona yeni favori yerlerini memnuniyetle gösterecek.",
        explanation:
          "Fiil 'zeigt' (gösterecek) ikinci konumdadır. Zarf 'gerne' fiilden sonra gelir.",
      },
      {
        text: "Die beiden gehen bestimmt oft essen.",
        translation: "İkisi kesinlikle sık sık yemeğe çıkacak.",
        explanation:
          "Fiil 'gehen' (çıkacak) ikinci konumdadır. Zarf 'bestimmt' fiilden sonra gelir.",
      },
      {
        text: "Sie werden gemeinsam das Brandenburger Tor besichtigen.",
        translation: "Birlikte Brandenburg Kapısı’nı ziyaret edecekler.",
        explanation:
          "Fiil 'werden' ikinci konumdadır. Nesne 'das Brandenburger Tor' fiilden sonra gelir.",
      },
      {
        text: "Martin hofft insgeheim auf einen Heiratsantrag.",
        translation: "Martin gizlice bir evlenme teklifi umuyor.",
        explanation:
          "Fiil 'hofft' (umuyor) ikinci konumdadır. Zarf 'insgeheim' fiilden sonra gelir.",
      },
      {
        text: "Er wartet schon lange auf den richtigen Moment.",
        translation: "Doğru anı uzun süredir bekliyor.",
        explanation:
          "Fiil 'wartet' (bekliyor) ikinci konumdadır. Zaman zarfı 'schon lange' fiilden sonra gelir.",
      },
      {
        text: "Sarah reist leider bald wieder ab.",
        translation: "Sarah ne yazık ki yakında tekrar ayrılacak.",
        explanation:
          "Fiil 'reist' (ayrılacak) ikinci konumdadır. Zarf 'leider' fiilden sonra gelir.",
      },
      {
        text: "Martin begleitet sie selbstverständlich zum Flughafen.",
        translation: "Martin onu tabii ki havalimanına götürecek.",
        explanation:
          "Fiil 'begleitet' (götürecek) ikinci konumdadır. Zarf 'selbstverständlich' fiilden sonra gelir.",
      },
    ],
  },
  {
    title: "6. Position von *nicht*",
    sentences: [
      {
        text: "Nach Sarahs Abreise war Martin nicht mehr so motiviert wie zuvor.",
        translation:
          "Sarah’nın ayrılışından sonra Martin eskisi kadar motive değildi.",
        explanation:
          "'Nicht', fiilden önce yer alır ve fiili olumsuz yapar. Burada 'war' fiilini olumsuzlaştırır.",
      },
      {
        text: "Er konnte sich nicht auf die Arbeit konzentrieren.",
        translation: "İşe konsantre olamadı.",
        explanation:
          "'Nicht', fiilden önce gelir ve 'konzentrieren' fiilini olumsuz yapar.",
      },
      {
        text: "Seine Vorgesetzte bemerkte seine Unaufmerksamkeit nicht sofort.",
        translation: "Amiri onun dikkatsizliğini hemen fark etmedi.",
        explanation:
          "'Nicht', fiilden önce gelir ve 'bemerkte' fiilini olumsuz yapar.",
      },
      {
        text: "Martin wollte nicht darüber sprechen, was ihn bedrückte.",
        translation: "Martin onu rahatsız eden şey hakkında konuşmak istemedi.",
        explanation:
          "'Nicht', fiilden önce gelir ve 'wollte' fiilini olumsuz yapar.",
      },
      {
        text: "Er ging nicht mehr regelmäßig ins Fitnessstudio.",
        translation: "Artık düzenli olarak spor salonuna gitmiyordu.",
        explanation:
          "'Nicht', fiilden önce gelir ve 'ging' fiilini olumsuz yapar.",
      },
      {
        text: "Die Kollegen luden ihn zum Abendessen ein, aber er kam nicht mit.",
        translation:
          "Meslektaşları onu akşam yemeğine davet etti, ama o gelmedi.",
        explanation:
          "'Nicht', fiilden önce gelir ve 'kam' fiilini olumsuz yapar.",
      },
      {
        text: "Es war nicht leicht für ihn, die Trennung zu verarbeiten.",
        translation: "Ayrılığı kabullenmek onun için kolay değildi.",
        explanation:
          "'Nicht', fiilden önce gelir ve 'war' fiilini olumsuz yapar.",
      },
      {
        text: "Sarah hatte ihm nicht die Wahrheit gesagt.",
        translation: "Sarah ona gerçeği söylememişti.",
        explanation:
          "'Nicht', fiilden önce gelir ve 'hatte gesagt' fiilini olumsuz yapar.",
      },
      {
        text: "Sie kam nicht zu ihm zurück, wie versprochen.",
        translation: "Söz verdiği gibi ona geri dönmedi.",
        explanation:
          "'Nicht', fiilden önce gelir ve 'kam' fiilini olumsuz yapar.",
      },
      {
        text: "Martin wollte nicht länger traurig sein.",
        translation: "Martin artık üzgün olmak istemedi.",
        explanation:
          "'Nicht', fiilden önce gelir ve 'wollte' fiilini olumsuz yapar.",
      },
      {
        text: "Er entschied sich, nicht aufzugeben.",
        translation: "Vazgeçmemeye karar verdi.",
        explanation:
          "'Nicht', fiilden önce gelir ve 'aufzugeben' fiilini olumsuz yapar.",
      },
    ],
  },
  {
    title: "7. Position von *auch* und Fokuspartikeln",
    sentences: [
      {
        text: "Martin wollte auch sein soziales Leben wieder aktivieren.",
        translation: "Martin sosyal hayatını da yeniden canlandırmak istedi.",
        explanation:
          "'Auch', fiilden önce gelir ve ek bir unsuru vurgular. Burada 'sein soziales Leben' vurgulanır.",
      },
      {
        text: "Besonders seine alten Hobbys nahm er wieder auf.",
        translation: "Özellikle eski hobilerini yeniden aldı.",
        explanation:
          "'Besonders', fiilden önce gelir ve 'seine alten Hobbys' üzerinde vurgu yapar.",
      },
      {
        text: "Sogar ein neues Hobby entdeckte er für sich: das Fotografieren.",
        translation: "Hatta yeni bir hobi keşfetti: fotoğrafçılık.",
        explanation:
          "'Sogar', fiilden önce gelir ve beklenmedik bir unsuru ('ein neues Hobby') vurgular.",
      },
      {
        text: "Martin hatte sich schon immer für Architektur interessiert und fotografierte nun auch die beeindruckenden Gebäude Berlins.",
        translation:
          "Martin her zaman mimariye ilgi duymuştu ve şimdi Berlin’in etkileyici binalarını da fotoğraflıyordu.",
        explanation:
          "'Auch', fiilden sonra gelir ve 'die beeindruckenden Gebäude Berlins' üzerinde ek bir vurgu yapar.",
      },
      {
        text: "Seine Kollegen waren ebenfalls von seinen Fotos begeistert.",
        translation: "Meslektaşları da onun fotoğraflarından etkilenmişti.",
        explanation:
          "'Ebenfalls', fiilden önce gelir ve 'seine Kollegen' üzerinde ek bir vurgu yapar.",
      },
      {
        text: "Fast täglich machte er jetzt Spaziergänge durch verschiedene Viertel.",
        translation:
          "Artık neredeyse her gün farklı mahallelerde yürüyüş yapıyordu.",
        explanation:
          "'Fast', fiilden önce gelir ve 'täglich' üzerinde yoğunluk vurgusu yapar.",
      },
      {
        text: "Vor allem die historischen Gebäude hatten es ihm angetan.",
        translation: "Özellikle tarihi binalar onu büyülemişti.",
        explanation:
          "'Vor allem', fiilden önce gelir ve 'die historischen Gebäude' üzerinde vurgu yapar.",
      },
      {
        text: "Nur am Wochenende blieb er manchmal zu Hause.",
        translation: "Sadece hafta sonları bazen evde kalıyordu.",
        explanation:
          "'Nur', fiilden önce gelir ve 'am Wochenende' üzerinde kısıtlayıcı bir vurgu yapar.",
      },
      {
        text: "Selbst dann experimentierte er mit Bildbearbeitung.",
        translation: "O zaman bile görüntü düzenlemeyle deneyler yapıyordu.",
        explanation:
          "'Selbst', fiilden önce gelir ve 'dann' üzerinde beklenmedik bir vurgu yapar.",
      },
      {
        text: "Auch seine berufliche Motivation kehrte allmählich zurück.",
        translation: "Mesleki motivasyonu da yavaş yavaş geri döndü.",
        explanation:
          "'Auch', fiilden önce gelir ve 'seine berufliche Motivation' üzerinde ek bir vurgu yapar.",
      },
    ],
  },
  {
    title: "8. Informationsverteilung im Satz",
    sentences: [
      {
        text: "Die neue Leidenschaft für Fotografie brachte Martin auf eine Idee für die aktuelle Marketingkampagne seines Unternehmens.",
        translation:
          "Fotoğrafçılığa olan yeni tutku, Martin’e şirketinin mevcut pazarlama kampanyası için bir fikir verdi.",
        explanation:
          "Fiil 'brachte' (verdi) ikinci konumdadır. Nesne 'eine Idee' fiilden sonra, amaç zarfı 'für die aktuelle Marketingkampagne' cümlenin sonunda yer alır.",
      },
      {
        text: "Seinen Chef überzeugte er mit authentischen Stadtbildern für die Werbestrategie.",
        translation:
          "Patronunu reklam stratejisi için otantik şehir görüntüleriyle ikna etti.",
        explanation:
          "Fiil 'überzeugte' (ikna etti) ikinci konumdadır. Nesne 'seinen Chef' fiilden önce, araç zarfı 'mit authentischen Stadtbildern' fiilden sonra gelir.",
      },
      {
        text: "Dem Kreativteam präsentierte er stolz seine besten Aufnahmen in einer digitalen Mappe.",
        translation:
          "Yaratıcı ekibe en iyi çekimlerini gururla dijital bir dosyada sundu.",
        explanation:
          "Fiil 'präsentierte' (sundu) ikinci konumdadır. Nesne 'dem Kreativteam' fiilden önce, nesne 'seine besten Aufnahmen' fiilden sonra gelir.",
      },
      {
        text: "Von seinen Kollegen erhielt er viel Zuspruch und konstruktive Kritik.",
        translation: "Meslektaşlarından çok destek ve yapıcı eleştiri aldı.",
        explanation:
          "Fiil 'erhielt' (aldı) ikinci konumdadır. Kaynak zarfı 'von seinen Kollegen' fiilden önce gelir.",
      },
      {
        text: "Bei der Vorstandssitzung stellte er letzte Woche das komplette Konzept vor.",
        translation:
          "Yönetim kurulu toplantısında geçen hafta tüm konsepti sundu.",
        explanation:
          "Fiil 'stellte' (sundu) ikinci konumdadır. Zaman zarfı 'letzte Woche' fiilden sonra gelir.",
      },
      {
        text: "Den größten Applaus bekam er für die emotionale Geschichte hinter den Bildern.",
        translation:
          "En büyük alkışı resimlerin ardındaki duygusal hikaye için aldı.",
        explanation:
          "Fiil 'bekam' (aldı) ikinci konumdadır. Neden zarfı 'für die emotionale Geschichte' fiilden sonra gelir.",
      },
      {
        text: "Dem Erfolg seiner Karriere stand nun nichts mehr im Weg.",
        translation: "Artık kariyerinin başarısının önünde hiçbir engel yoktu.",
        explanation:
          "Fiil 'stand' (yoktu) ikinci konumdadır. Nesne 'dem Erfolg seiner Karriere' fiilden önce gelir.",
      },
      {
        text: "Seiner Familie in der Heimat berichtete er begeistert von den positiven Entwicklungen.",
        translation:
          "Memleketindeki ailesine olumlu gelişmelerden heyecanla bahsetti.",
        explanation:
          "Fiil 'berichtete' (bahsetti) ikinci konumdadır. Nesne 'seiner Familie' fiilden önce, kaynak zarfı 'von den positiven Entwicklungen' fiilden sonra gelir.",
      },
    ],
  },
  {
    title: "9. Partnerseite 1: Word positions – Give a speech together",
    sentences: [
      {
        text: '"Meine sehr geehrten Damen und Herren," begann Martin seine Präsentation auf der Marketingkonferenz, während seine neue Kollegin Anna die Technik vorbereitete.',
        translation:
          '"Sayın bayanlar ve baylar," diyerek Martin pazarlama konferansındaki sunumuna başladı, yeni meslektaşı Anna tekniği hazırlarken.',
        explanation:
          "Ana cümlede fiil 'begann' (başladı) ikinci konumdadır. 'Während' ile başlayan yan cümlede fiil 'vorbereitete' sonda yer alır.",
      },
      {
        text: '"Ich freue mich außerordentlich," fuhr er fort, "Ihnen heute unser innovatives Stadtmarketing-Konzept vorstellen zu dürfen."',
        translation:
          '"Bugün yenilikçi şehir pazarlama konseptimizi sunmaktan büyük mutluluk duyuyorum," diye devam etti.',
        explanation:
          "Fiil 'freue' (duyuyorum) ikinci konumdadır. Alıntı cümlede fiil 'vorstellen' sonda yer alır.",
      },
      {
        text: 'Anna übernahm nahtlos: "Wie Sie auf dieser Grafik erkennen können, haben wir die authentischen Perspektiven der Stadt eingefangen."',
        translation:
          'Anna sorunsuzca devraldı: "Bu grafikte görebileceğiniz gibi, şehrin otantik perspektiflerini yakaladık."',
        explanation:
          "Fiil 'übernahm' (devraldı) ikinci konumdadır. Alıntı cümlede fiil 'haben eingefangen' ikinci konumdadır.",
      },
      {
        text: 'Martin ergänzte geschickt: "Dabei war es uns besonders wichtig, die Vielfalt Berlins zu zeigen."',
        translation:
          'Martin ustalıkla ekledi: "Bu sırada Berlin’in çeşitliliğini göstermek bizim için özellikle önemliydi."',
        explanation:
          "Fiil 'ergänzte' (ekledi) ikinci konumdadır. Alıntı cümlede fiil 'war' ikinci konumdadır.",
      },
      {
        text: '"Genau," bestätigte Anna, "denn unsere Zielgruppe sucht nach echten Erlebnissen."',
        translation:
          '"Kesinlikle," diye onayladı Anna, "çünkü hedef kitlemiz gerçek deneyimler arıyor."',
        explanation:
          "Fiil 'bestätigte' (onayladı) ikinci konumdadır. Alıntı cümlede fiil 'sucht' ikinci konumdadır.",
      },
      {
        text: "Sie wechselten sich perfekt ab, ergänzten gegenseitig ihre Sätze und schufen so einen harmonischen Redefluss.",
        translation:
          "Mükemmel bir şekilde sırayla konuştular, birbirlerinin cümlelerini tamamladılar ve böylece uyumlu bir konuşma akışı yarattılar.",
        explanation:
          "Fiil 'wechselten' (konuştular) ikinci konumdadır. Nesne 'ihre Sätze' fiilden sonra gelir.",
      },
      {
        text: '"Zusammenfassend lässt sich sagen," schloss Martin die gelungene Präsentation, "dass unser Konzept die perfekte Balance zwischen Tradition und Moderne darstellt."',
        translation:
          '"Özetle söylemek gerekirse," diyerek Martin başarılı sunumu tamamladı, "konseptimiz gelenek ve modernlik arasında mükemmel bir denge sunuyor."',
        explanation:
          "Fiil 'schloss' (tamamladı) ikinci konumdadır. Alıntı cümlede fiil 'lässt' ikinci konumdadır.",
      },
      {
        text: "Der tosende Applaus bestätigte ihren gemeinsamen Erfolg.",
        translation: "Gürültülü alkış, ortak başarılarını doğruladı.",
        explanation:
          "Fiil 'bestätigte' (doğruladı) ikinci konumdadır. Nesne 'ihren gemeinsamen Erfolg' fiilden sonra gelir.",
      },
    ],
  },
  {
    title: "Konjunktiv 2 der Gegenwart: Formen",
    sentences: [
      {
        text: "Nach der erfolgreichen Präsentation käme Martin endlich zur Ruhe, wenn nicht schon das nächste Projekt warten würde.",
        translation:
          "Başarılı sunumdan sonra Martin nihayet dinlenebilirdi, eğer bir sonraki proje beklemiyor olsaydı.",
        explanation:
          "Konjunktiv 2, irreale durumları ifade eder. 'Käme' ve 'würde' fiilleri, koşullu bir durumu belirtir.",
      },
      {
        text: "Er nähme sich gerne eine Auszeit, aber die Arbeit ließe das momentan nicht zu.",
        translation:
          "Kendine memnuniyetle bir mola alırdı, ama iş şu anda buna izin vermiyor.",
        explanation:
          "'Nähme' ve 'ließe', Konjunktiv 2 formlarıdır ve irreale istekleri ifade eder.",
      },
      {
        text: "Sein Chef sähe es nicht gern, wenn wichtige Termine verschoben würden.",
        translation:
          "Patronu önemli tarihlerin ertelenmesini hoş karşılamazdı.",
        explanation:
          "'Sähe' ve 'würden', Konjunktiv 2 formlarıdır ve irreale bir durumu belirtir.",
      },
      {
        text: "Martin dächte oft an einen kurzen Urlaub.",
        translation: "Martin sık sık kısa bir tatili düşünürdü.",
        explanation:
          "'Dächte', Konjunktiv 2 formudur ve irreale bir düşünceyi ifade eder.",
      },
      {
        text: "Er führe gerne für ein paar Tage ans Meer.",
        translation: "Birkaç günlüğüne memnuniyetle denize giderdi.",
        explanation:
          "'Führe', Konjunktiv 2 formudur ve irreale bir isteği ifade eder.",
      },
      {
        text: "Das täte ihm sicherlich gut.",
        translation: "Bu ona kesinlikle iyi gelirdi.",
        explanation:
          "'Täte', Konjunktiv 2 formudur ve irreale bir sonucu ifade eder.",
      },
      {
        text: "Anna meinte, sie hülfe ihm gerne bei der Vorbereitung der nächsten Kampagne.",
        translation:
          "Anna, bir sonraki kampanyanın hazırlığında ona memnuniyetle yardım edeceğini söyledi.",
        explanation:
          "'Hülfe', Konjunktiv 2 formudur ve irreale bir yardımı ifade eder.",
      },
      {
        text: '"Du bräuchtest wirklich eine Pause", sagte sie besorgt.',
        translation: "Gerçekten bir molaya ihtiyacın var, dedi endişeyle.",
        explanation:
          "'Bräuchtest', Konjunktiv 2 formudur ve irreale bir ihtiyacı ifade eder.",
      },
      {
        text: '"Ich wüsste auch schon, wer dich vertreten könnte."',
        translation: '"Seni kimin vekalet edebileceğini de biliyorum."',
        explanation:
          "'Wüsste', Konjunktiv 2 formudur ve irreale bir bilgiyi ifade eder.",
      },
      {
        text: "Martin lächelte. Er wüsste ihre Unterstützung sehr zu schätzen.",
        translation: "Martin gülümsedi. Onun desteğini çok takdir ederdi.",
        explanation:
          "'Wüsste', Konjunktiv 2 formudur ve irreale bir takdiri ifade eder.",
      },
    ],
  },
  {
    title: "Konjunktiv 2 der Vergangenheit: Formen",
    sentences: [
      {
        text: "Hätte Martin gewusst, wie anspruchsvoll sein neuer Job werden würde, hätte er vielleicht mehr über das Angebot nachgedacht.",
        translation:
          "Martin yeni işinin ne kadar zor olacağını bilseydi, belki teklif hakkında daha fazla düşünürdü.",
        explanation:
          "Konjunktiv 2 geçmiş zaman, irreale geçmiş durumları ifade eder. 'Hätte gewusst' ve 'hätte nachgedacht' koşullu geçmiş durumları belirtir.",
      },
      {
        text: "Er wäre ohne die Unterstützung seiner Kollegen sicherlich überfordert gewesen.",
        translation:
          "Meslektaşlarının desteği olmadan kesinlikle bunalmış olurdu.",
        explanation:
          "'Wäre gewesen', Konjunktiv 2 geçmiş formudur ve irreale bir sonucu ifade eder.",
      },
      {
        text: "Seine Freundin Sarah hätte ihm bei diesem Stress helfen können, wäre sie noch bei ihm geblieben.",
        translation:
          "Kız arkadaşı Sarah bu stresle ona yardım edebilirdi, eğer yanında kalsaydı.",
        explanation:
          "'Hätte helfen können' ve 'wäre geblieben', Konjunktiv 2 geçmiş formlarıdır ve irreale koşulları ifade eder.",
      },
      {
        text: "Martin hätte ihr mehr Zeit widmen sollen.",
        translation: "Martin ona daha fazla zaman ayırmalıydı.",
        explanation:
          "'Hätte widmen sollen', Konjunktiv 2 geçmiş formudur ve geçmişte yapılması gereken bir şeyi ifade eder.",
      },
      {
        text: "Er hätte auf ihre Bedürfnisse besser eingehen müssen.",
        translation: "Onun ihtiyaçlarına daha iyi yanıt vermeliydi.",
        explanation:
          "'Hätte eingehen müssen', Konjunktiv 2 geçmiş formudur ve geçmişte yapılması gereken bir şeyi ifade eder.",
      },
      {
        text: "Sie hätte sich mehr Aufmerksamkeit gewünscht.",
        translation: "O daha fazla ilgi istemiş olurdu.",
        explanation:
          "'Hätte gewünscht', Konjunktiv 2 geçmiş formudur ve irreale bir isteği ifade eder.",
      },
      {
        text: "Wäre er nicht so auf seine Karriere fokussiert gewesen, hätte ihre Beziehung vielleicht noch eine Chance gehabt.",
        translation:
          "Kariyerine bu kadar odaklanmış olmasaydı, ilişkileri belki hâlâ bir şans bulabilirdi.",
        explanation:
          "'Wäre gewesen' ve 'hätte gehabt', Konjunktiv 2 geçmiş formlarıdır ve irreale koşulları ifade eder.",
      },
      {
        text: "Er hätte diese Lektion früher lernen sollen: Beruflicher Erfolg ist nicht alles im Leben.",
        translation:
          "Bu dersi daha önce öğrenmeliydi: Mesleki başarı hayatta her şey değildir.",
        explanation:
          "'Hätte lernen sollen', Konjunktiv 2 geçmiş formudur ve geçmişte yapılması gereken bir şeyi ifade eder.",
      },
    ],
  },
  {
    title: "Höflichkeit, Vorschläge, Ratschläge und Vorwürfe",
    sentences: [
      {
        text: '"Könnten Sie mir bitte die Unterlagen für das Meeting zusenden?", fragte Martin seine Assistentin höflich.',
        translation:
          '"Toplantı için belgeleri bana gönderebilir misiniz lütfen?" diye Martin asistanına kibar bir şekilde sordu.',
        explanation:
          "Konjunktiv 2, kibar talepler için kullanılır. 'Könnten' kibar bir rica ifade eder.",
      },
      {
        text: '"Würden Sie mir auch einen Termin mit Herrn Müller vereinbaren?"',
        translation: '"Bay Müller ile bir randevu da ayarlar mısınız?"',
        explanation:
          "'Würden', Konjunktiv 2 formudur ve kibar bir talebi ifade eder.",
      },
      {
        text: 'Anna kam in sein Büro und meinte: "Du solltest wirklich eine Pause machen."',
        translation:
          'Anna ofisine geldi ve dedi ki: "Gerçekten bir mola yapmalısın."',
        explanation:
          "'Solltest', Konjunktiv 2 formudur ve bir öneriyi ifade eder.",
      },
      {
        text: '"Es wäre besser, wenn du früher nach Hause gehen würdest."',
        translation: '"Eve daha erken gitsen daha iyi olur."',
        explanation:
          "'Wäre' ve 'würdest', Konjunktiv 2 formlarıdır ve bir öneriyi ifade eder.",
      },
      {
        text: 'Sein Chef riet ihm: "An Ihrer Stelle würde ich die Präsentation nochmals überarbeiten."',
        translation:
          'Patronu ona tavsiyede bulundu: "Sizin yerinizde olsam sunumu bir kez daha gözden geçirirdim."',
        explanation:
          "'Würde', Konjunktiv 2 formudur ve bir tavsiyeyi ifade eder.",
      },
      {
        text: "Martin dachte bei sich: Das hättest du mir auch früher sagen können.",
        translation:
          "Martin kendi kendine düşündü: Bunu bana daha önce de söyleyebilirdin.",
        explanation:
          "'Hättest', Konjunktiv 2 geçmiş formudur ve bir sitemi ifade eder.",
      },
      {
        text: '"Dürfte ich Sie um einen Vorschlag bitten, was genau verbessert werden sollte?"',
        translation:
          '"Neyin tam olarak iyileştirilmesi gerektiği konusunda bir öneri isteyebilir miyim?"',
        explanation:
          "'Dürfte', Konjunktiv 2 formudur ve kibar bir ricayı ifade eder.",
      },
      {
        text: 'Seine Mutter rief an und warf ihm vor: "Du könntest ruhig öfter anrufen!"',
        translation:
          'Annesi aradı ve ona sitem etti: "Daha sık arayabilirdin!"',
        explanation:
          "'Könntest', Konjunktiv 2 formudur ve bir sitemi ifade eder.",
      },
      {
        text: '"Wir hätten dich gerne öfter zu Besuch."',
        translation: '"Seni daha sık ziyaret etmeni isterdik."',
        explanation:
          "'Hätten', Konjunktiv 2 formudur ve bir isteği ifade eder.",
      },
    ],
  },
  {
    title: "Wünsche, irreale Wünsche, irreale Bedingungen",
    sentences: [
      {
        text: 'Martin seufzte: "Wenn ich nur mehr Zeit für mich hätte!"',
        translation:
          'Martin iç çekti: "Keşke kendime daha fazla zamanım olsaydı!"',
        explanation:
          "'Hätte', Konjunktiv 2 formudur ve irreale bir isteği ifade eder.",
      },
      {
        text: "Er wünschte, er könnte eine längere Reise machen.",
        translation: "Daha uzun bir yolculuk yapabilmeyi diledi.",
        explanation:
          "'Könnte', Konjunktiv 2 formudur ve irreale bir isteği ifade eder.",
      },
      {
        text: "Wenn er nicht so viele Verpflichtungen hätte, würde er sofort seinen Rucksack packen und losziehen.",
        translation:
          "Eğer bu kadar çok yükümlülüğü olmasaydı, hemen sırt çantasını toplar ve yola çıkardı.",
        explanation:
          "'Hätte' ve 'würde', Konjunktiv 2 formlarıdır ve irreale bir koşulu ifade eder.",
      },
      {
        text: "Falls das Projekt früher abgeschlossen wäre, hätte er vielleicht im Sommer frei.",
        translation:
          "Eğer proje daha erken tamamlanmış olsaydı, belki yazın boş vakti olurdu.",
        explanation:
          "'Wäre' ve 'hätte', Konjunktiv 2 formlarıdır ve irreale bir koşulu ifade eder.",
      },
      {
        text: '"Ach, wenn Sarah doch noch hier wäre", dachte er wehmütig.',
        translation:
          '"Ah, keşke Sarah hâlâ burada olsaydı," diye hüzünle düşündü.',
        explanation:
          "'Wäre', Konjunktiv 2 formudur ve irreale bir isteği ifade eder.",
      },
      {
        text: "Wenn sie sich nicht getrennt hätten, würden sie jetzt gemeinsam Pläne schmieden.",
        translation:
          "Eğer ayrılmamış olsalardı, şimdi birlikte planlar yapıyor olurlardı.",
        explanation:
          "'Hätten' ve 'würden', Konjunktiv 2 formlarıdır ve irreale bir koşulu ifade eder.",
      },
      {
        text: "Sollte er sie anrufen?",
        translation: "Onu aramalı mı?",
        explanation:
          "'Sollte', Konjunktiv 2 formudur ve bir olasılığı ifade eder.",
      },
      {
        text: "Falls sie antworten würde, könnte er ihr von seinen Erfolgen erzählen.",
        translation: "Eğer cevap verseydi, ona başarılarından bahsedebilirdi.",
        explanation:
          "'Würde' ve 'könnte', Konjunktiv 2 formlarıdır ve irreale bir koşulu ifade eder.",
      },
      {
        text: "Wenn er damals nicht so stur gewesen wäre, wären sie vielleicht noch zusammen.",
        translation:
          "Eğer o zaman bu kadar inatçı olmasaydı, belki hâlâ birlikte olurlardı.",
        explanation:
          "'Wäre' ve 'wären', Konjunktiv 2 formlarıdır ve irreale bir koşulu ifade eder.",
      },
      {
        text: '"Wenn ich doch nur eine zweite Chance bekäme", flüsterte er leise.',
        translation:
          '"Keşke bir ikinci şansım olsaydı," diye fısıldadı usulca.',
        explanation:
          "'Bekäme', Konjunktiv 2 formudur ve irreale bir isteği ifade eder.",
      },
    ],
  },
  {
    title: "Irreale Vergleiche und irreale Folgen",
    sentences: [
      {
        text: "Martin arbeitete, als ob er gegen die Zeit kämpfen würde.",
        translation:
          "Martin, zamana karşı mücadele ediyormuş gibi çalışıyordu.",
        explanation:
          "'Als ob' ile başlayan cümlede Konjunktiv 2 kullanılır. 'Würde', irreale bir karşılaştırmayı ifade eder.",
      },
      {
        text: "Er fühlte sich, als hätte er tagelang nicht geschlafen.",
        translation: "Günlerdir uyumamış gibi hissediyordu.",
        explanation:
          "'Als hätte', Konjunktiv 2 geçmiş formudur ve irreale bir karşılaştırmayı ifade eder.",
      },
      {
        text: "Die Situation war so anstrengend, dass er fast seine Gesundheit riskiert hätte.",
        translation:
          "Durum o kadar yorucuydu ki neredeyse sağlığını riske atabilirdi.",
        explanation:
          "'Hätte', Konjunktiv 2 geçmiş formudur ve irreale bir sonucu ifade eder.",
      },
      {
        text: "Seine Kollegin behandelte ihn, als wäre er ein Roboter ohne Gefühle.",
        translation: "Meslektaşı ona, duygusuz bir robotmuş gibi davranıyordu.",
        explanation:
          "'Als wäre', Konjunktiv 2 formudur ve irreale bir karşılaştırmayı ifade eder.",
      },
      {
        text: "Der Terminplan war so eng, dass niemand ihn hätte einhalten können.",
        translation: "Takvim o kadar yoğundu ki kimse ona uyamazdı.",
        explanation:
          "'Hätte', Konjunktiv 2 geçmiş formudur ve irreale bir sonucu ifade eder.",
      },
      {
        text: "Martin war zu erschöpft, als dass er sich noch konzentrieren könnte.",
        translation: "Martin o kadar yorgundu ki artık konsantre olamazdı.",
        explanation:
          "'Als dass' ile Konjunktiv 2 kullanılır. 'Könnte', irreale bir sonucu ifade eder.",
      },
      {
        text: "Er verhielt sich manchmal, als ob er allein für den Erfolg der Firma verantwortlich wäre.",
        translation:
          "Bazen, şirketin başarısından tek başına sorumluymuş gibi davranıyordu.",
        explanation:
          "'Als ob' ile Konjunktiv 2 kullanılır. 'Wäre', irreale bir karşılaştırmayı ifade eder.",
      },
      {
        text: "Die Aufgabe erschien zu komplex, als dass sie in einer Woche zu bewältigen wäre.",
        translation: "Görev o kadar karmaşıktı ki bir haftada tamamlanamazdı.",
        explanation:
          "'Als dass' ile Konjunktiv 2 kullanılır. 'Wäre', irreale bir sonucu ifade eder.",
      },
      {
        text: "Er fühlte sich, als ob er auf der Stelle treten würde, anstatt voranzukommen.",
        translation: "İlerlemek yerine yerinde sayıyormuş gibi hissediyordu.",
        explanation:
          "'Als ob' ile Konjunktiv 2 kullanılır. 'Würde', irreale bir karşılaştırmayı ifade eder.",
      },
    ],
  },
  {
    title:
      "Partnerseite 2: Unreal conditions in present and past – Guessing game",
    sentences: [
      {
        text: "Beim Teambuilding-Event spielten Martin und seine Kollegen ein Ratespiel mit irrealen Bedingungen.",
        translation:
          "Ekip oluşturma etkinliğinde Martin ve meslektaşları irreale koşullarla bir tahmin oyunu oynadılar.",
        explanation:
          "Fiil 'spielten' (oynadılar) ikinci konumdadır. Nesne 'ein Ratespiel' fiilden sonra gelir.",
      },
      {
        text: 'Anna begann: "Wenn ich ein Tier wäre, würde ich durch die Lüfte gleiten."',
        translation:
          'Anna başladı: "Eğer bir hayvan olsaydım, havada süzülürdüm."',
        explanation:
          "'Wäre' ve 'würde', Konjunktiv 2 formlarıdır ve irreale bir koşulu ifade eder.",
      },
      {
        text: 'Martin überlegte: "Wenn du ein Adler wärest, könntest du die Welt von oben betrachten."',
        translation:
          'Martin düşündü: "Eğer bir kartal olsaydın, dünyayı yukarıdan görebilirdin."',
        explanation:
          "'Wärest' ve 'könntest', Konjunktiv 2 formმოდ and 'würde', Konjunktiv 2 formlarıdır ve irreale koşulları ifade eder.",
      },
      {
        text: '"Nein, nicht ganz", lachte sie. "Wenn ich nachts aktiv wäre und hervorragend hören könnte?"',
        translation:
          '"Tam değil," diye güldü. "Eğer geceleri aktif olsaydım ve mükemmel duysaydım?"',
        explanation:
          "'Wäre' ve 'könnte', Konjunktiv 2 formlarıdır ve irreale bir koşulu ifade eder.",
      },
      {
        text: '"Ah, wenn du eine Fledermaus wärest, würdest du Ultraschall zur Orientierung nutzen!"',
        translation:
          '"Ah, eğer bir yarasa olsaydın, yön bulmak için ultrason kullanırdın!"',
        explanation:
          "'Wärest' ve 'würdest', Konjunktiv 2 formlarıdır ve irreale bir koşulu ifade eder.",
      },
      {
        text: '"Genau!" Nun war Martin an der Reihe: "Wenn ich ein Gebäude in Berlin wäre, hätte ich eine dramatische Geschichte erlebt."',
        translation:
          '"Tam isabet!" Şimdi sıra Martin’deydi: "Eğer Berlin’de bir bina olsaydım, dramatik bir hikaye yaşamış olurdum."',
        explanation:
          "'Wäre' ve 'hätte', Konjunktiv 2 formlarıdır ve irreale bir koşulu ifade eder.",
      },
      {
        text: 'Anna riet: "Wenn du die Berliner Mauer gewesen wärest, hättest du den Fall des Kommunismus miterlebt."',
        translation:
          'Anna tahmin etti: "Eğer Berlin Duvarı olsaydın, komünizmin çöküşüne tanıklık etmiş olurdun."',
        explanation:
          "'Wärest' ve 'hättest', Konjunktiv 2 geçmiş formlarıdır ve irreale bir koşulu ifade eder.",
      },
      {
        text: '"Fast! Ich hätte viele wichtige politische Entscheidungen beherbergt."',
        translation:
          '"Neredeyse! Birär. "Birçok önemli siyasi kararı barındırmış olurdum."',
        explanation:
          "'Hätte', Konjunktiv 2 geçmiş formudur ve irreale bir durumu ifade eder.",
      },
      {
        text: '"Oh, wenn du der Reichstag gewesen wärest, hättest du Feuer, Krieg und Wiedervereinigung überstanden!"',
        translation:
          '"Oh, eğer Reichstag olsaydın, yangını, savaşı ve yeniden birleşmeyi atlatmış olurdun!"',
        explanation:
          "'Wärest' ve 'hättest', Konjunktiv 2 geçmiş formlarıdır ve irreale bir koşulu ifade eder.",
      },
      {
        text: '"Richtig getroffen!", bestätigte Martin beeindruckt.',
        translation: '"Doğru tahmin!" dedi Martin etkilenmiş bir şekilde.',
        explanation:
          "Fiil 'bestätigte' (dedi) ikinci konumdadır. Zarf 'beeindruckt' fiilden sonra gelir.",
      },
    ],
  },
  {
    title: "Passiv in allen Zeiten",
    sentences: [
      {
        text: "Die neue Marketingkampagne wurde von Martins Team entwickelt.",
        translation:
          "Yeni pazarlama kampanyası Martin’in ekibi tarafından geliştirildi.",
        explanation:
          "Passiv, eylemin özne tarafından değil, başka bir ajan tarafından yapıldığını gösterir. 'Wurde entwickelt', geçmiş zamanda passiv formudur.",
      },
      {
        text: "Sie wird nächste Woche offiziell vorgestellt.",
        translation: "Önümüzdeki hafta resmi olarak tanıtılacak.",
        explanation: "'Wird vorgestellt', gelecek zamanda passiv formudur.",
      },
      {
        text: "Das Konzept ist bereits vom Vorstand genehmigt worden.",
        translation: "Konsept zaten yönetim kurulu tarafından onaylandı.",
        explanation:
          "'Ist genehmigt worden', şimdiki zaman tamamlanmış passiv formudur.",
      },
      {
        text: "Die Werbeplakate waren schon im Vormonat entworfen worden.",
        translation: "Reklam afişleri önceki ayda zaten tasarlanmıştı.",
        explanation:
          "'Waren entworfen worden', geçmiş zaman tamamlanmış passiv formudur.",
      },
      {
        text: "Die Reaktionen der Zielgruppe werden regelmäßig analysiert werden.",
        translation: "Hedef kitlenin tepkileri düzenli olarak analiz edilecek.",
        explanation:
          "'Werden analysiert werden', gelecek zamanda passiv formudur.",
      },
      {
        text: "Das Budget war vom Finanzteam streng kalkuliert worden.",
        translation:
          "Bütçe finans ekibi tarafından sıkı bir şekilde hesaplanmıştı.",
        explanation:
          "'War kalkuliert worden', geçmiş zaman tamamlanmış passiv formudur.",
      },
      {
        text: "Die Werbespots werden gerade von einer renommierten Agentur produziert.",
        translation:
          "Reklam filmleri şu anda tanınmış bir ajans tarafından üretiliyor.",
        explanation: "'Werden produziert', şimdiki zamanda passiv formudur.",
      },
      {
        text: "Die digitalen Anzeigen sind gestern veröffentlicht worden.",
        translation: "Dijital reklamlar dün yayınlandı.",
        explanation:
          "'Sind veröffentlicht worden', şimdiki zaman tamamlanmış passiv formudur.",
      },
      {
        text: "Der Erfolg der Kampagne wird in drei Monaten gemessen werden.",
        translation: "Kampanyanın başarısı üç ay içinde ölçülecek.",
        explanation: "'Wird gemessen werden', gelecek zamanda passiv formudur.",
      },
      {
        text: "Jedes Detail wurde sorgfältig geplant.",
        translation: "Her detay özenle planlandı.",
        explanation: "'Wurde geplant', geçmiş zamanda passiv formudur.",
      },
      {
        text: "Die gesamte Stadt wird bald mit den kreativen Motiven geschmückt sein.",
        translation: "Tüm şehir yakında yaratıcı motiflerle süslenecek.",
        explanation: "'Wird geschmückt sein', gelecek zamanda passiv formudur.",
      },
    ],
  },
  {
    title: "Passiv mit Modalverben in allen Zeiten",
    sentences: [
      {
        text: "Die Termine müssen von allen Teammitgliedern eingehalten werden.",
        translation: "Tüm ekip üyeleri tarafından tarihler uyulmalıdır.",
        explanation:
          "'Müssen eingehalten werden', modal fiil 'müssen' ile passiv formudur.",
      },
      {
        text: "Die Präsentation musste zweimal verschoben werden.",
        translation: "Sunum iki kez ertelenmek zorunda kaldı.",
        explanation:
          "'Musste verschoben werden', geçmiş zamanda modal fiil ile passiv formudur.",
      },
      {
        text: "Die Zielgruppe soll durch emotionale Bilder angesprochen werden können.",
        translation:
          "Hedef kitle, duygusal görüntülerle hitap edilebilmelidir.",
        explanation:
          "'Soll angesprochen werden können', modal fiil 'sollen' ile passiv formudur.",
      },
      {
        text: "Die technischen Aspekte hatten von den Experten geprüft werden müssen.",
        translation:
          "Teknik yönler uzmanlar tarafından kontrol edilmek zorunda kalmıştı.",
        explanation:
          "'Hatten geprüft werden müssen', geçmiş zaman tamamlanmış modal fiil ile passiv formudur.",
      },
      {
        text: "Alle Texte dürfen erst nach der Freigabe veröffentlicht werden.",
        translation: "Tüm metinler ancak onaydan sonra yayınlanabilir.",
        explanation:
          "'Dürfen veröffentlicht werden', modal fiil 'dürfen' ile passiv formudur.",
      },
      {
        text: "Die Kosten konnten deutlich reduziert werden.",
        translation: "Maliyetler belirgin bir şekilde azaltılabildi.",
        explanation:
          "'Konnten reduziert werden', geçmiş zamanda modal fiil 'können' ile passiv formudur.",
      },
      {
        text: "Die Marketingstrategie wird noch einmal überarbeitet werden müssen.",
        translation:
          "Pazarlama stratejisi bir kez daha gözden geçirilmek zorunda kalacak.",
        explanation:
          "'Wird überarbeitet werden müssen', gelecek zamanda modal fiil ile passiv formudur.",
      },
      {
        text: "Die Kampagne hatte trotz Hindernissen pünktlich gestartet werden sollen.",
        translation: "Kampanya, engellere rağmen zamanında başlatılmalıydı.",
        explanation:
          "'Hatte gestartet werden sollen', geçmiş zaman tamamlanmış modal fiil ile passiv formudur.",
      },
      {
        text: "Die Botschaft mag von manchen Kunden missverstanden worden sein.",
        translation:
          "Mesaj bazı müşteriler tarafından yanlış anlaşılmış olabilir.",
        explanation:
          "'Mag missverstanden worden sein', modal fiil 'mögen' ile passiv formudur.",
      },
      {
        text: "Der Slogan wird eingängiger formuliert werden müssen.",
        translation:
          "Slogan daha akılda kalıcı bir şekilde formüle edilmek zorunda kalacak.",
        explanation:
          "'Wird formuliert werden müssen', gelecek zamanda modal fiil ile passiv formudur.",
      },
    ],
  },
  {
    title: "Alternativen zum Passiv",
    sentences: [
      {
        text: "Man diskutierte die Ergebnisse der Umfrage intensiv.",
        translation: "Anket sonuçları yoğun bir şekilde tartışıldı.",
        explanation: "'Man' ile aktif cümle, passiv yerine kullanılabilir.",
      },
      {
        text: "Die Agentur lässt die Werbefilme in einem Studio produzieren.",
        translation: "Ajans, reklam filmlerini bir stüdyoda ürettiriyor.",
        explanation: "'Lässt' ile aktif yapı, passiv yerine kullanılabilir.",
      },
      {
        text: "Es gibt verschiedene Meinungen zur neuen Kampagne.",
        translation: "Yeni kampanyaya dair farklı görüşler var.",
        explanation: "'Es gibt' yapısı, passiv yerine kullanılabilir.",
      },
      {
        text: "Die Plakate finden überall in der Stadt Beachtung.",
        translation: "Afişler şehirde her yerde dikkat çekiyor.",
        explanation: "Aktif fiil 'finden', passiv yerine kullanılabilir.",
      },
      {
        text: "Das Meeting ließ sich nicht länger verschieben.",
        translation: "Toplantı daha fazla ertelenemedi.",
        explanation: "'Ließ sich', passiv yerine kullanılan bir yapıdır.",
      },
      {
        text: "Der Bericht ist morgen abzugeben.",
        translation: "Rapor yarın teslim edilecek.",
        explanation: "'Ist abzugeben', passiv anlamı taşıyan bir yapıdır.",
      },
      {
        text: "Die Verträge bedürfen noch der Unterschrift des Vorstands.",
        translation:
          "Sözleşmeler hâlâ yönetim kurulunun imzasını gerektiriyor.",
        explanation: "'Bedürfen', passiv yerine kullanılan bir yapıdır.",
      },
      {
        text: "Die Website erfährt gerade eine komplette Überarbeitung.",
        translation: "Web sitesi şu anda tamamen yenileniyor.",
        explanation: "'Erfährt', passiv yerine kullanılan bir yapıdır.",
      },
      {
        text: "Die Dokumente liegen zur Durchsicht bereit.",
        translation: "Belgeler inceleme için hazır duruyor.",
        explanation: "'Liegen bereit', passiv yerine kullanılan bir yapıdır.",
      },
      {
        text: "Diese Aufgabe bleibt zu erledigen.",
        translation: "Bu görev tamamlanmayı bekliyor.",
        explanation:
          "'Bleibt zu erledigen', passiv anlamı taşıyan bir yapıdır.",
      },
      {
        text: "Die neuen Richtlinien kommen ab nächstem Monat zur Anwendung.",
        translation: "Yeni yönergeler önümüzdeki aydan itibaren uygulanacak.",
        explanation:
          "'Kommen zur Anwendung', passiv yerine kullanılan bir yapıdır.",
      },
    ],
  },
  {
    title: "Formen mit Passivbedeutung",
    sentences: [
      {
        text: "Die Broschüren sind leicht zu verstehen.",
        translation: "Broşürler kolayca anlaşılır.",
        explanation: "'Sind zu verstehen', passiv anlamı taşıyan bir yapıdır.",
      },
      {
        text: "Der Termin ist nicht zu verschieben.",
        translation: "Randevu ertelenemez.",
        explanation:
          "'Ist nicht zu verschieben', passiv anlamı taşıyan bir yapıdır.",
      },
      {
        text: "Die Präsentation lässt sich verbessern.",
        translation: "Sunum iyileştirilebilir.",
        explanation:
          "'Lässt sich verbessern', passiv anlamı taşıyan bir yapıdır.",
      },
      {
        text: "Das Problem erweist sich als lösbar.",
        translation: "Sorun çözülebilir olduğu ortaya çıkıyor.",
        explanation:
          "'Erweist sich als lösbar', passiv anlamı taşıyan bir yapıdır.",
      },
      {
        text: "Die Kampagne ist binnen einer Woche fertigzustellen.",
        translation: "Kampanya bir hafta içinde tamamlanacak.",
        explanation:
          "'Ist fertigzustellen', passiv anlamı taşıyan bir yapıdır.",
      },
      {
        text: "Die alten Werbekonzepte gehören überarbeitet.",
        translation: "Eski reklam konseptleri gözden geçirilmeli.",
        explanation:
          "'Gehören überarbeitet', passiv anlamı taşıyan bir yapıdır.",
      },
      {
        text: "Die Kritik bleibt zu berücksichtigen.",
        translation: "Eleştiri dikkate alınmayı bekliyor.",
        explanation:
          "'Bleibt zu berücksichtigen', passiv anlamı taşıyan bir yapıdır.",
      },
      {
        text: "Das Meeting bekam eine neue Struktur verpasst.",
        translation: "Toplantıya yeni bir yapı kazandırıldı.",
        explanation: "'Bekam verpasst', passiv anlamı taşıyan bir yapıdır.",
      },
      {
        text: "Der Vorschlag bekommt allgemeine Zustimmung.",
        translation: "Öneri genel onay alıyor.",
        explanation: "'Bekommt Zustimmung', passiv anlamı taşıyan bir yapıdır.",
      },
      {
        text: "Die Daten bekommen eine neue Auswertung.",
        translation: "Veriler yeni bir değerlendirme alıyor.",
        explanation: "'Bekommt Auswertung', passiv anlamı taşıyan bir yapıdır.",
      },
      {
        text: "Die Website erhält ein modernes Design.",
        translation: "Web sitesi modern bir tasarım alıyor.",
        explanation: "'Erhält Design', passiv anlamı taşıyan bir yapıdır.",
      },
    ],
  },
  {
    title: "Passivsätze ohne Subjekt",
    sentences: [
      {
        text: "Im Meeting wurde heftig diskutiert.",
        translation: "Toplantıda hararetli bir tartışma yapıldı.",
        explanation:
          "Öznesiz passiv cümlede fiil 'wurde diskutiert' kullanılır.",
      },
      {
        text: "Über die neuen Ideen wird noch beraten.",
        translation: "Yeni fikirler hakkında hâlâ görüşülüyor.",
        explanation: "Öznesiz passiv cümlede fiil 'wird beraten' kullanılır.",
      },
      {
        text: "Bei der Präsentation wurde applaudiert.",
        translation: "Sunumda alkışlandı.",
        explanation:
          "Öznesiz passiv cümlede fiil 'wurde applaudiert' kullanılır.",
      },
      {
        text: "An diesem Projekt wird mit Hochdruck gearbeitet.",
        translation: "Bu projede yüksek baskıyla çalışılıyor.",
        explanation:
          "Öznesiz passiv cümlede fiil 'wird gearbeitet' kullanılır.",
      },
      {
        text: "Über das Budget wird noch verhandelt.",
        translation: "Bütçe hakkında hâlâ müzakere ediliyor.",
        explanation:
          "Öznesiz passiv cümlede fiil 'wird verhandelt' kullanılır.",
      },
      {
        text: "In der Abteilung wird viel gelacht.",
        translation: "Bölümde çok gülünüyor.",
        explanation: "Öznesiz passiv cümlede fiil 'wird gelacht' kullanılır.",
      },
      {
        text: "Unter den Kollegen wird sich gegenseitig geholfen.",
        translation: "Meslektaşlar arasında birbirine yardım ediliyor.",
        explanation: "Öznesiz passiv cümlede fiil 'wird geholfen' kullanılır.",
      },
      {
        text: "Bei den Planungstreffen wird offen gesprochen.",
        translation: "Planlama toplantılarında açıkça konuşuluyor.",
        explanation:
          "Öznesiz passiv cümlede fiil 'wird gesprochen' kullanılır.",
      },
      {
        text: "Nach innovativen Lösungen wird ständig gesucht.",
        translation: "Yenilikçi çözümler için sürekli aranıyor.",
        explanation: "Öznesiz passiv cümlede fiil 'wird gesucht' kullanılır.",
      },
      {
        text: "Am Konzept wird noch gefeilt.",
        translation: "Konsept üzerinde hâlâ ince ayar yapılıyor.",
        explanation: "Öznesiz passiv cümlede fiil 'wird gefeilt' kullanılır.",
      },
      {
        text: "Von einer Verzögerung wurde nicht ausgegangen.",
        translation: "Bir gecikme beklenmiyordu.",
        explanation:
          "Öznesiz passiv cümlede fiil 'wurde ausgegangen' kullanılır.",
      },
    ],
  },
  {
    title: "Wann ist Passiv möglich, wann nicht?",
    sentences: [
      {
        text: "Die Idee wurde von Martin entwickelt.",
        translation: "Fikir Martin tarafından geliştirildi.",
        explanation:
          "Passiv mümkün: Eylem bir ajan (Martin) tarafından gerçekleştiriliyor.",
      },
      {
        text: "Der Erfolg wurde von allen gefeiert.",
        translation: "Başarı herkes tarafından kutlandı.",
        explanation:
          "Passiv mümkün: Eylem bir grup (herkes) tarafından gerçekleştiriliyor.",
      },
      {
        text: "Martin geht jeden Tag zur Arbeit.",
        translation: "Martin her gün işe gidiyor.",
        explanation:
          "Passiv mümkün değil: 'Geht' fiili bir ajan gerektirmez ve durum fiilidir.",
      },
      {
        text: "Das Projekt gefällt dem Kunden sehr gut.",
        translation: "Proje müşteriye çok hoş geliyor.",
        explanation:
          "Passiv mümkün değil: 'Gefällt' fiili bir ajan gerektirmez.",
      },
      {
        text: "Es wurde bis spät in die Nacht gearbeitet.",
        translation: "Geç saatlere kadar çalışıldı.",
        explanation:
          "Passiv mümkün: Öznesiz passiv cümlede eylem gerçekleşiyor.",
      },
      {
        text: "Der Chef vertraut seinem Team.",
        translation: "Patron ekibine güveniyor.",
        explanation:
          "Passiv mümkün değil: 'Vertraut' fiili bir ajan gerektirmez.",
      },
      {
        text: "Das Meeting dauerte drei Stunden.",
        translation: "Toplantı üç saat sürdü.",
        explanation:
          "Passiv mümkün değil: 'Dauerte' fiili bir ajan gerektirmez.",
      },
      {
        text: "Es wird angenommen, dass die Kampagne erfolgreich sein wird.",
        translation: "Kampanyanın başarılı olacağı varsayılıyor.",
        explanation:
          "Passiv mümkün: Öznesiz passiv cümlede bir varsayım ifade ediliyor.",
      },
      {
        text: "Der Marketingabteilung gehören fünfzehn Mitarbeiter an.",
        translation: "Pazarlama bölümünde on beş çalışan var.",
        explanation:
          "Passiv mümkün değil: 'Gehören' fiili bir ajan gerektirmez.",
      },
      {
        text: "Die neue Software wurde schnell erlernt.",
        translation: "Yeni yazılım hızla öğrenildi.",
        explanation:
          "Passiv mümkün: Eylem bir ajan tarafından gerçekleştiriliyor.",
      },
      {
        text: "Martin lächelte zufrieden.",
        translation: "Martin memnun bir şekilde gülümsedi.",
        explanation:
          "Passiv mümkün değil: 'Lächelte' fiili bir ajan gerektirmez.",
      },
      {
        text: "Die Meinung des Kunden wurde sehr geschätzt.",
        translation: "Müşterinin görüşü çok takdir edildi.",
        explanation:
          "Passiv mümkün: Eylem bir ajan tarafından gerçekleştiriliyor.",
      },
    ],
  },
  {
    title: "Partnerseite 3: Passive – Word games",
    sentences: [
      {
        text: '"Lass uns ein Wortspiel zum Passiv machen", schlug Anna vor, als sie mit Martin in der Kantine saß.',
        translation:
          '"Passivle bir kelime oyunu oynayalım," diye önerdi Anna, Martin’le kantinde otururken.',
        explanation:
          "Fiil 'schlug' (önerdi) ikinci konumdadır. Alıntı cümlede fiil 'machen' sonda yer alır.",
      },
      {
        text: '"Von wem wird dieses Spiel erfunden?", lachte Martin.',
        translation:
          '"Bu oyun kim tarafından icat ediliyor?" diye güldü Martin.',
        explanation:
          "Passiv cümlede fiil 'wird erfunden' kullanılır ve bir ajan (von wem) belirtilir.",
      },
      {
        text: '"Es wird gerade spontan von mir entwickelt", antwortete Anna schmunzelnd.',
        translation:
          '"Şu anda spontane bir şekilde benim tarafımdan geliştiriliyor," diye gülümseyerek cevap verdi Anna.',
        explanation:
          "Passiv cümlede fiil 'wird entwickelt' kullanılır ve ajan 'von mir' belirtilir.",
      },
      {
        text: '"Es könnte so gespielt werden: Ich nenne einen Satz im Aktiv, und der muss von dir ins Passiv umgewandelt werden."',
        translation:
          '"Böyle oynanabilir: Ben aktif bir cümle söylüyorum, sen onu passiv’e çevirmelisin."',
        explanation:
          "Fiil 'könnte' (oynanabilir) ikinci konumdadır. Passiv dönüşüm kuralı açıklanır.",
      },
      {
        text: 'Martin nickte: "Und dann wird von mir ein neuer Aktivsatz genannt?"',
        translation:
          'Martin başını salladı: "Ve sonra benim tarafımdan yeni bir aktif cümle mi söylenecek?"',
        explanation:
          "Passiv cümlede fiil 'wird genannt' kullanılır ve ajan 'von mir' belirtilir.",
      },
      {
        text: '"Genau! Es wird begonnen!", rief Anna.',
        translation: '"Tamam! Başlanıyor!" diye bağırdı Anna.',
        explanation: "Öznesiz passiv cümlede fiil 'wird begonnen' kullanılır.",
      },
      {
        text: '"Die Praktikanten organisieren die Weihnachtsfeier."',
        translation: '"Stajyerler yılbaşı partisini organize ediyor."',
        explanation:
          "Aktif cümle, passiv’e çevrilecek bir örnek olarak verilir.",
      },
      {
        text: 'Martin antwortete prompt: "Die Weihnachtsfeier wird von den Praktikanten organisiert."',
        translation:
          'Martin hemen cevap verdi: "Yılbaşı partisi stajyerler tarafından organize ediliyor."',
        explanation:
          "Passiv cümlede fiil 'wird organisiert' kullanılır ve ajan 'von den Praktikanten' belirtilir.",
      },
      {
        text: '"Der Chef lobt das Marketingteam."',
        translation: '"Patron pazarlama ekibini övüyor."',
        explanation:
          "Aktif cümle, passiv’e çevrilecek bir örnek olarak verilir.",
      },
      {
        text: 'Anna überlegte kurz: "Das Marketingteam wird vom Chef gelobt."',
        translation:
          'Anna kısa bir süre düşündü: "Pazarlama ekibi patron tarafından övülüyor."',
        explanation:
          "Passiv cümlede fiil 'wird gelobt' kullanılır ve ajan 'vom Chef' belirtilir.",
      },
      {
        text: '"In diesem Spiel können auch passivfähige von nicht-passivfähigen Verben unterschieden werden."',
        translation:
          '"Bu oyunda passiv’e uygun fiiller, uygun olmayanlardan ayırt edilebilir."',
        explanation:
          "Fiil 'können' (ayırt edilebilir) ikinci konumdadır. Passiv kuralı açıklanır.",
      },
      {
        text: 'Martin schmunzelte: "Dieser Unterschied wird von uns jetzt erkannt."',
        translation:
          'Martin gülümsedi: "Bu fark şimdi bizim tarafımızdan fark ediliyor."',
        explanation:
          "Passiv cümlede fiil 'wird erkannt' kullanılır ve ajan 'von uns' belirtilir.",
      },
      {
        text: '"Es wird von mir sehr geschätzt, dass von dir solche lehrreichen Spiele vorgeschlagen werden."',
        translation:
          '"Senin böyle öğretici oyunlar önermen benim tarafımdan çok takdir ediliyor."',
        explanation:
          "Passiv cümlede fiil 'wird geschätzt' kullanılır ve ajan 'von mir' belirtilir.",
      },
    ],
  },
  {
    title: "Wechselpräpositionen",
    sentences: [
      {
        text: "Martin stellte seine Kaffeetasse auf den Tisch.",
        translation: "Martin kahve fincanını masanın üzerine koydu.",
        explanation:
          "'Auf' burada ismin -e haliyle (Akkusativ) kullanılır, çünkü hareket ifade eder (bir şeyi bir yere koyma).",
      },
      {
        text: "Die Unterlagen lagen bereits auf dem Tisch.",
        translation: "Belgeler zaten masanın üzerindeydi.",
        explanation:
          "'Auf' burada ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder (bir şey bir yerde duruyor).",
      },
      {
        text: "Er hängte seinen Mantel an die Garderobe.",
        translation: "Paltosunu askılığa astı.",
        explanation:
          "'An' burada ismin -e haliyle (Akkusativ) kullanılır, çünkü hareket ifade eder (bir şeyi bir yere asma).",
      },
      {
        text: "Das Bild hing an der Wand neben seinem Schreibtisch.",
        translation: "Resim, masasının yanındaki duvarda asılıydı.",
        explanation:
          "'An' burada ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder (bir şey bir yerde asılı).",
      },
      {
        text: "Die Kollegen setzten sich in den Konferenzraum.",
        translation: "Meslektaşlar konferans odasına oturdular.",
        explanation:
          "'In' burada ismin -e haliyle (Akkusativ) kullanılır, çünkü hareket ifade eder (bir yere girme).",
      },
      {
        text: "Sie saßen schon seit einer Stunde in dem Raum.",
        translation: "Bir saattir odada oturuyorlardı.",
        explanation:
          "'In' burada ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder (bir yerde bulunma).",
      },
      {
        text: "Martin legte die Präsentation unter den Projektor.",
        translation: "Martin sunumu projektörün altına koydu.",
        explanation:
          "'Unter' burada ismin -e haliyle (Akkusativ) kullanılır, çünkü hareket ifade eder (bir şeyi bir yere koyma).",
      },
      {
        text: "Die wichtigen Dokumente befanden sich unter dem Stapel Papiere.",
        translation: "Önemli belgeler kağıt yığınının altındaydı.",
        explanation:
          "'Unter' burada ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder (bir şey bir yerde).",
      },
      {
        text: "Er klebte eine Notiz neben das Whiteboard.",
        translation: "Beyaz tahtanın yanına bir not yapıştırdı.",
        explanation:
          "'Neben' burada ismin -e haliyle (Akkusativ) kullanılır, çünkü hareket ifade eder (bir şeyi bir yere yapıştırma).",
      },
      {
        text: "Seine To-Do-Liste stand neben der Tastatur seines Computers.",
        translation: "Yapılacaklar listesi bilgisayar klavyesinin yanındaydı.",
        explanation:
          "'Neben' burada ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder (bir şey bir yerde).",
      },
      {
        text: "Anna trat hinter den Vorhang.",
        translation: "Anna perdenin arkasına geçti.",
        explanation:
          "'Hinter' burada ismin -e haliyle (Akkusativ) kullanılır, çünkü hareket ifade eder (bir yere geçme).",
      },
      {
        text: "Die Sonne schien bereits hinter dem Vorhang hervor.",
        translation: "Güneş zaten perdenin arkasından parlıyordu.",
        explanation:
          "'Hinter' burada ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder (bir şey bir yerde).",
      },
    ],
  },
  {
    title: "Oft gebrauchte lokale Präpositionen",
    sentences: [
      {
        text: "Martin wohnte in Berlin.",
        translation: "Martin Berlin’de yaşıyordu.",
        explanation:
          "'In' burada ismin -de haliyle (Dativ) kullanılır, çünkü bir şehirde yaşamayı ifade eder (sabit konum).",
      },
      {
        text: "Er fuhr jeden Morgen mit der U-Bahn zur Arbeit.",
        translation: "Her sabah metroyla işe gidiyordu.",
        explanation:
          "'Zu' ismin -e haliyle (Akkusativ) kullanılır, çünkü bir hedefe yönelmeyi ifade eder (hareket).",
      },
      {
        text: "Das Büro befand sich im Zentrum der Stadt.",
        translation: "Ofis şehrin merkezindeydi.",
        explanation:
          "'In' burada ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder.",
      },
      {
        text: "Seine Wohnung lag in einem ruhigen Viertel am Stadtrand.",
        translation: "Dairesi şehrin kenarında sakin bir mahalledeydi.",
        explanation:
          "'In' burada ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder. 'Am' de konum belirtir.",
      },
      {
        text: "Vor dem Gebäude stand eine alte Eiche.",
        translation: "Binanın önünde eski bir meşe ağacı duruyordu.",
        explanation:
          "'Vor' burada ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder.",
      },
      {
        text: "Hinter dem Haus gab es einen kleinen Park.",
        translation: "Evin arkasında küçük bir park vardı.",
        explanation:
          "'Hinter' burada ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder.",
      },
      {
        text: "Martins Arbeitsplatz war neben dem Fenster mit Blick auf die Spree.",
        translation:
          "Martin’in çalışma yeri, Spree’ye bakan pencerenin yanındaydı.",
        explanation:
          "'Neben' burada ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder.",
      },
      {
        text: "Die U-Bahn-Station lag unter dem Hauptplatz.",
        translation: "Metro istasyonu ana meydanın altındaydı.",
        explanation:
          "'Unter' burada ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder.",
      },
      {
        text: "Auf dem Dach des Gebäudes befand sich eine Terrasse für die Mitarbeiter.",
        translation: "Binanın çatısında çalışanlar için bir teras vardı.",
        explanation:
          "'Auf' burada ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder.",
      },
      {
        text: "Eine Bäckerei war gegenüber dem Eingang.",
        translation: "Girişin karşısında bir fırın vardı.",
        explanation:
          "'Gegenüber' ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder.",
      },
      {
        text: "Durch die großen Fenster strömte helles Licht in das Büro.",
        translation: "Büyük pencerelerden ofise parlak ışık akıyordu.",
        explanation:
          "'Durch' ismin -e haliyle (Akkusativ) kullanılır, çünkü hareket ifade eder (bir şey bir yerden geçiyor).",
      },
    ],
  },
  {
    title: "Weitere lokale Präpositionen",
    sentences: [
      {
        text: "Die Kollegen kamen aus verschiedenen Ländern.",
        translation: "Meslektaşlar farklı ülkelerden geliyordu.",
        explanation:
          "'Aus' ismin -de haliyle (Dativ) kullanılır, çünkü bir kaynaktan gelmeyi ifade eder.",
      },
      {
        text: "Das Meeting fand außerhalb des Büros statt.",
        translation: "Toplantı ofisin dışında gerçekleşti.",
        explanation:
          "'Außerhalb' ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder.",
      },
      {
        text: "Der neue Kunde kam von jenseits der Grenzen Europas.",
        translation: "Yeni müşteri Avrupa sınırlarının ötesinden geldi.",
        explanation:
          "'Von' ismin -de haliyle (Dativ) kullanılır, çünkü bir kaynaktan gelmeyi ifade eder.",
      },
      {
        text: "Innerhalb der Abteilung herrschte ein freundliches Klima.",
        translation: "Bölüm içinde dostça bir atmosfer vardı.",
        explanation:
          "'Innerhalb' ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder.",
      },
      {
        text: "Die Unterlagen lagen unterhalb des Monitors.",
        translation: "Belgeler monitörün altında duruyordu.",
        explanation:
          "'Unterhalb' ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder.",
      },
      {
        text: "Die Wasserflasche stand oberhalb der Heizung.",
        translation: "Su şişesi radyatörün üstünde duruyordu.",
        explanation:
          "'Oberhalb' ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder.",
      },
      {
        text: "Martin ging entlang der Spree spazieren.",
        translation: "Martin Spree boyunca yürüyüş yaptı.",
        explanation:
          "'Entlang' ismin -de haliyle (Dativ) kullanılır, çünkü bir yol boyunca hareketi ifade eder.",
      },
      {
        text: "Der Kurier wartete diesseits der Schranke.",
        translation: "Kurye bariyerin bu tarafında bekledi.",
        explanation:
          "'Diesseits' ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder.",
      },
      {
        text: "Die Konkurrenz befand sich jenseits des Flusses.",
        translation: "Rakip nehrin ötesindeydi.",
        explanation:
          "'Jenseits' ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder.",
      },
      {
        text: "Martin stellte sich inmitten seiner Kollegen für das Gruppenfoto.",
        translation:
          "Martin grup fotoğrafı için meslektaşlarının ortasına geçti.",
        explanation:
          "'Inmitten' ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder.",
      },
      {
        text: "Die Blumen standen unweit des Eingangs.",
        translation: "Çiçekler girişten uzak olmayan bir yerde duruyordu.",
        explanation:
          "'Unweit' ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder.",
      },
      {
        text: "Seitlich des Gebäudes befand sich der Parkplatz.",
        translation: "Binanın yanında otopark vardı.",
        explanation:
          "'Seitlich' ismin -de haliyle (Dativ) kullanılır, çünkü sabit bir konum ifade eder.",
      },
    ],
  },
  {
    title: "Die wichtigsten temporalen Präpositionen",
    sentences: [
      {
        text: "Martin kam um acht Uhr ins Büro.",
        translation: "Martin saat sekizde ofise geldi.",
        explanation:
          "'Um' belirli bir zaman noktasını ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Während der Mittagspause aß er meistens in der Kantine.",
        translation: "Öğle arasında genellikle kantinde yemek yerdi.",
        explanation:
          "'Während' bir zaman dilimini ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Er arbeitete von Montag bis Freitag.",
        translation: "Pazartesiden cumaya kadar çalışıyordu.",
        explanation:
          "'Von ... bis' bir zaman aralığını ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Nach Feierabend ging er oft ins Fitnessstudio.",
        translation: "Mesai sonrası sık sık spor salonuna giderdi.",
        explanation:
          "'Nach' bir olayın sonrasını ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Vor dem Wochenende erledigte er alle wichtigen Aufgaben.",
        translation: "Hafta sonundan önce tüm önemli görevleri tamamlardı.",
        explanation:
          "'Vor' bir olayın öncesini ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Bei der letzten Präsentation war er sehr nervös gewesen.",
        translation: "Son sunumda çok gergindi.",
        explanation:
          "'Bei' bir olay sırasında kullanılan bir zaman edatıdır ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Seit seiner Beförderung hatte er mehr Verantwortung.",
        translation: "Terfisinden beri daha fazla sorumluluğu vardı.",
        explanation:
          "'Seit' bir zaman noktasından itibaren devam eden durumu ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Die neue Kampagne startete ab nächstem Monat.",
        translation: "Yeni kampanya önümüzdeki aydan itibaren başlayacaktı.",
        explanation:
          "'Ab' bir zaman noktasından itibaren başlar ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "In drei Wochen würde er seinen Jahresurlaub nehmen.",
        translation: "Üç hafta içinde yıllık iznini alacaktı.",
        explanation:
          "'In' gelecekteki bir zaman dilimini ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Innerhalb von zwei Tagen musste der Bericht fertig sein.",
        translation: "İki gün içinde rapor hazır olmalıydı.",
        explanation:
          "'Innerhalb' belirli bir zaman dilimi içinde olanı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Systemic 'v' is not a valid keyword, but I assume you meant 'von' or 'vom' since they sound similar",
        translation: "Raporu gece yarısına kadar cevaplaması gerekiyordu.",
        explanation:
          "'Bis' bir zaman sınırını ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
    ],
  },
  {
    title: "Weitere temporale Präpositionen",
    sentences: [
      {
        text: "Binnen einer Woche sollte das Projekt abgeschlossen sein.",
        translation: "Proje bir hafta içinde tamamlanmalıydı.",
        explanation:
          "'Binnen' belirli bir zaman dilimi içinde tamamlanmayı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Während des Meetings kamen viele neue Ideen auf.",
        translation: "Toplantı sırasında birçok yeni fikir ortaya çıktı.",
        explanation:
          "'Während' bir olay sırasında olanı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Die Frist lief innerhalb von drei Tagen ab.",
        translation: "Süre üç gün içinde doldu.",
        explanation:
          "'Innerhalb' belirli bir zaman dilimi içinde olanı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Außerhalb der Arbeitszeiten war Martin selten erreichbar.",
        translation: "Çalışma saatleri dışında Martin’e nadiren ulaşılırdı.",
        explanation:
          "'Außerhalb' belirli bir zaman dilimi dışında olanı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Die Konferenz fand gegen Ende des Monats statt.",
        translation: "Konferans ayın sonuna doğru gerçekleşti.",
        explanation:
          "'Gegen' bir zaman dilimine yakın olanı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Er hatte die Präsentation längst vor Beginn der Veranstaltung fertiggestellt.",
        translation: "Sunumu etkinliğin başlamasından çok önce tamamlamıştı.",
        explanation:
          "'Vor' bir olayın öncesini ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Martin blieb über Nacht im Büro, um die Deadline einzuhalten.",
        translation:
          "Martin son teslim tarihine uymak için gece boyunca ofiste kaldı.",
        explanation:
          "'Über' bir zaman dilimini kapsayan durumu ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Die Verhandlungen zogen sich durch den ganzen Tag.",
        translation: "Müzakereler bütün gün boyunca sürdü.",
        explanation:
          "'Durch' bir zaman dilimini kapsayan durumu ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Nach einem anstrengenden Arbeitstag entspannte er sich zu Hause.",
        translation: "Yorucu bir iş gününden sonra evde dinlendi.",
        explanation:
          "'Nach' bir olayın sonrasını ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Zwischen den Terminen blieb ihm kaum Zeit für eine Pause.",
        translation:
          "Randevular arasında mola için neredeyse hiç vakti kalmadı.",
        explanation:
          "'Zwischen' iki zaman noktası arasını ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Seit seiner Ankunft in Berlin hatte sich viel verändert.",
        translation: "Berlin’e geldiğinden beri çok şey değişmişti.",
        explanation:
          "'Seit' bir zaman noktasından itibaren devam eden durumu ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
    ],
  },
  {
    title: "Kausale Präpositionen",
    sentences: [
      {
        text: "Wegen des schlechten Wetters nahm Martin heute ein Taxi.",
        translation: "Kötü hava nedeniyle Martin bugün taksi aldı.",
        explanation:
          "'Wegen' bir nedeni ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Aufgrund der vielen Arbeit musste er Überstunden machen.",
        translation: "Yoğun iş yükü nedeniyle fazla mesai yapması gerekti.",
        explanation:
          "'Aufgrund' bir nedeni ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Durch seine Hartnäckigkeit gewann er den wichtigen Kunden.",
        translation: "İnatçılığı sayesinde önemli bir müşteri kazandı.",
        explanation:
          "'Durch' bir aracı veya nedeni ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Dank Annas Hilfe konnte er das Projekt rechtzeitig abschließen.",
        translation:
          "Anna’nın yardımı sayesinde projeyi zamanında tamamlayabildi.",
        explanation:
          "'Dank' bir teşekkürü veya nedeni ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Infolge seiner guten Leistungen bekam er eine Gehaltserhöhung.",
        translation: "İyi performansı sonucunda maaş zammı aldı.",
        explanation:
          "'Infolge' bir sonucu ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Um des Erfolges willen arbeitete das ganze Team am Wochenende.",
        translation: "Başarı için tüm ekip hafta sonu çalıştı.",
        explanation:
          "'Um ... willen' bir amacı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Aus Liebe zum Detail überprüfte Martin jedes Dokument mehrmals.",
        translation:
          "Detaylara olan sevgisinden dolayı Martin her belgeyi birkaç kez kontrol etti.",
        explanation:
          "'Aus' bir nedeni ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Vor lauter Begeisterung vergaß er die Zeit.",
        translation: "Aşırı heyecanından zamanı unuttu.",
        explanation:
          "'Vor lauter' bir nedeni ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Trotz der Schwierigkeiten gab er nicht auf.",
        translation: "Zorluklara rağmen pes etmedi.",
        explanation:
          "'Trotz' bir engeli ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Angesichts der Herausforderungen blieb er optimistisch.",
        translation: "Zorluklar karşısında iyimser kaldı.",
        explanation:
          "'Angesichts' bir durumu ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Mangels besserer Alternativen entschied er sich für diesen Plan.",
        translation:
          "Daha iyi alternatiflerin olmaması nedeniyle bu planı seçti.",
        explanation:
          "'Mangels' bir eksikliği ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
    ],
  },
  {
    title: "Präpositionen der Redewiedergabe und Referenz",
    sentences: [
      {
        text: "Laut dem Bericht war die Kampagne ein voller Erfolg.",
        translation: "Rapora göre kampanya büyük bir başarıydı.",
        explanation:
          "'Laut' bir kaynağa referans verir ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Zufolge der Marktanalyse stieg der Umsatz um 15%.",
        translation: "Pazar analizine göre ciro %15 arttı.",
        explanation:
          "'Zufolge' bir kaynağa referans verir ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Gemäß den Richtlinien musste jedes Dokument archiviert werden.",
        translation: "Yönergelere göre her belge arşivlenmeliydi.",
        explanation:
          "'Gemäß' bir kurala referans verir ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Nach Aussage des Kunden war er mit dem Ergebnis sehr zufrieden.",
        translation: "Müşterinin ifadesine göre sonuçtan çok memnundu.",
        explanation:
          "'Nach Aussage' bir beyana referans verir ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Dem Chef zufolge würde es bald eine Umstrukturierung geben.",
        translation: "Patrona göre yakında bir yeniden yapılandırma olacaktı.",
        explanation:
          "'Zufolge' bir kaynağa referans verir ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Entsprechend der Vereinbarung wurde die Zahlung bereits veranlasst.",
        translation: "Anlaşmaya uygun olarak ödeme zaten başlatılmıştı.",
        explanation:
          "'Entsprechend' bir anlaşmaya referans verir ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Martin handelte nach bestem Wissen und Gewissen.",
        translation: "Martin en iyi bildiği ve vicdanına göre hareket etti.",
        explanation:
          "'Nach' bir kritere referans verir ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Den Umfrageergebnissen nach zu urteilen, kam das Produkt gut an.",
        translation: "Anket sonuçlarına bakılırsa, ürün iyi karşılandı.",
        explanation:
          "'Nach' bir sonuca referans verir ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "In Bezug auf die Qualität gab es keine Kompromisse.",
        translation: "Kalite konusunda hiçbir taviz verilmedi.",
        explanation:
          "'In Bezug auf' bir konuya referans verir ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Hinsichtlich der Kosten mussten sie noch verhandeln.",
        translation: "Maliyetler konusunda hâlâ müzakere etmeleri gerekiyordu.",
        explanation:
          "'Hinsichtlich' bir konuya referans verir ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Bezüglich seiner nächsten Aufgabe hatte Martin schon einige Ideen.",
        translation:
          "Bir sonraki göreviyle ilgili Martin’in zaten bazı fikirleri vardı.",
        explanation:
          "'Bezüglich' bir konuya referans verir ve ismin -de haliyle (Dativ) kullanılır.",
      },
    ],
  },
  {
    title: "Präpositionen mit verschiedenen Positionen",
    sentences: [
      {
        text: "Den ganzen Tag über arbeitete Martin an dem Projekt.",
        translation: "Bütün gün boyunca Martin proje üzerinde çalıştı.",
        explanation:
          "'Über' bir zaman dilimini kapsar ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Die Kollegen saßen um den Tisch herum.",
        translation: "Meslektaşlar masanın etrafında oturuyordu.",
        explanation:
          "'Um ... herum' bir çevreyi ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Der Fehler lag an Martin, ihm war das klar.",
        translation: "Hata Martin’dendi, bu ona açıktı.",
        explanation:
          "'An' bir sorumluluğu ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Die Notizen lagen irgendwo zwischen den Unterlagen.",
        translation: "Notlar belgelerin arasında bir yerdeydi.",
        explanation:
          "'Zwischen' iki şey arasını ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Der Hund des Nachbarn lief an Martin vorbei.",
        translation: "Komşunun köpeği Martin’in yanından geçti.",
        explanation:
          "'An ... vorbei' bir yerden geçmeyi ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Das Büro lag der Bushaltestelle gegenüber.",
        translation: "Ofis otobüs durağının karşısındaydı.",
        explanation:
          "'Gegenüber' bir konumu ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Der Fluss floss durch die Stadt hindurch.",
        translation: "Nehir şehir boyunca aktı.",
        explanation:
          "'Durch ... hindurch' bir yerden geçmeyi ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Martin stand dem Vorschlag positiv gegenüber.",
        translation: "Martin öneriye olumlu yaklaştı.",
        explanation:
          "'Gegenüber' bir tutumu ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Das Problem lag ihm schwer auf dem Herzen.",
        translation: "Sorun onun kalbinde ağır bir yük gibiydi.",
        explanation:
          "'Auf' bir yükü ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Der Tunnel führt unter dem Fluss hindurch.",
        translation: "Tünel nehrin altından geçiyor.",
        explanation:
          "'Unter ... hindurch' bir yerden geçmeyi ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Die Veränderungen traten von heute an in Kraft.",
        translation: "Değişiklikler bugünden itibaren yürürlüğe girdi.",
        explanation:
          "'Von ... an' bir başlangıç noktasını ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Das Bild hing schief an der Wand entlang.",
        translation: "Resim duvarda yamuk asılıydı.",
        explanation:
          "'An ... entlang' bir yüzey boyunca olanı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
    ],
  },
  {
    title: '"Sprechende" Präpositionen',
    sentences: [
      {
        text: "Martin sprach mit Anna über das neue Projekt.",
        translation: "Martin, Anna ile yeni proje hakkında konuştu.",
        explanation:
          "'Mit' bir konuşma partnerini, 'über' konuşma konusunu ifade eder ve sırasıyla ismin -de haliyle (Dativ) ve -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Er diskutierte mit seinem Chef über die Strategie.",
        translation: "Patronuyla strateji hakkında tartıştı.",
        explanation:
          "'Mit' bir tartışma partnerini, 'über' tartışma konusunu ifade eder.",
      },
      {
        text: "Die Kollegen freuten sich auf das Wochenende.",
        translation: "Meslektaşlar hafta sonunu iple çekiyordu.",
        explanation:
          "'Auf' bir beklentiyi ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Martin dachte oft an seine Heimat.",
        translation: "Martin sık sık memleketini düşünüyordu.",
        explanation:
          "'An' bir düşünceyi ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Er hoffte auf einen baldigen Urlaub.",
        translation: "Yakın bir tatil umuyordu.",
        explanation:
          "'Auf' bir umudu ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Das Team arbeitete an einer innovativen Lösung.",
        translation: "Ekip yenilikçi bir çözüm üzerinde çalışıyordu.",
        explanation:
          "'An' bir çalışma konusunu ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Der Chef bestand auf pünktlicher Abgabe.",
        translation: "Patron zamanında teslimatta ısrar etti.",
        explanation:
          "'Auf' bir talebi ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Die Abteilung verfügte über ausreichende Mittel.",
        translation: "Bölüm yeterli kaynaklara sahipti.",
        explanation:
          "'Über' bir varlığı ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Martin wartete auf die Rückmeldung des Kunden.",
        translation: "Martin müşterinin geri dönüşünü bekliyordu.",
        explanation:
          "'Auf' bir beklentiyi ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Anna fragte nach dem Termin.",
        translation: "Anna randevuyu sordu.",
        explanation:
          "'Nach' bir şeyi sormayı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Martin gewöhnte sich an das Leben in Berlin.",
        translation: "Martin Berlin’deki yaşama alıştı.",
        explanation:
          "'An' bir alışkanlığı ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Er erinnerte sich an seinen ersten Arbeitstag.",
        translation: "İlk iş gününü hatırladı.",
        explanation:
          "'An' bir hatırayı ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
    ],
  },
  {
    title: "Bedeutungen von *in, an, auf, über, unter, vor*",
    sentences: [
      {
        text: "Martin lebte in Berlin, in einer kleinen Wohnung.",
        translation: "Martin Berlin’de, küçük bir dairede yaşıyordu.",
        explanation:
          "'In' bir şehirde veya mekânda olmayı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Er war in bester Stimmung.",
        translation: "En iyi ruh halindeydi.",
        explanation:
          "'In' bir durumu ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Die Stadt befand sich in einer wirtschaftlichen Blütezeit.",
        translation: "Şehir ekonomik bir refah dönemindeydi.",
        explanation:
          "'In' bir dönemi ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Anna saß an ihrem Schreibtisch.",
        translation: "Anna masasında oturuyordu.",
        explanation:
          "'An' bir yüzeyde konumlanmayı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Das Bild hing an der Wand.",
        translation: "Resim duvarda asılıydı.",
        explanation:
          "'An' bir yüzeyde asılı olmayı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Martin zweifelte an der Entscheidung.",
        translation: "Martin karardan şüphe ediyordu.",
        explanation:
          "'An' bir şüpheyi ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Die Unterlagen lagen auf dem Tisch.",
        translation: "Belgeler masanın üzerindeydi.",
        explanation:
          "'Auf' bir yüzeyde olmayı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Er konzentrierte sich auf seine Arbeit.",
        translation: "İşine odaklandı.",
        explanation:
          "'Auf' bir odaklanmayı ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Martin war auf einer Dienstreise.",
        translation: "Martin bir iş gezisindeydi.",
        explanation:
          "'Auf' bir etkinliği ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Sie sprachen über ihre Zukunftspläne.",
        translation: "Gelecek planları hakkında konuştular.",
        explanation:
          "'Über' bir konuyu ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Martin machte sich Gedanken über das nächste Meeting.",
        translation: "Martin bir sonraki toplantı hakkında düşünüyordu.",
        explanation:
          "'Über' bir düşünceyi ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Der Artikel erschien über Nacht in der Zeitung.",
        translation: "Makale gece boyunca gazetede yayınlandı.",
        explanation:
          "'Über' bir zaman dilimini ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Das Budget lag unter dem geplanten Betrag.",
        translation: "Bütçe planlanan miktarın altındaydı.",
        explanation:
          "'Unter' bir sınırın altında olmayı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Anna arbeitete unter Martins Leitung.",
        translation: "Anna Martin’in yönetimi altında çalışıyordu.",
        explanation:
          "'Unter' bir hiyerarşiyi ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Er stand unter Zeitdruck.",
        translation: "Zaman baskısı altındaydı.",
        explanation:
          "'Unter' bir baskıyı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Martin kam vor Mittag ins Büro.",
        translation: "Martin öğleden önce ofise geldi.",
        explanation:
          "'Vor' bir zaman öncesini ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Er stellte sich vor seine Kollegen.",
        translation: "Meslektaşlarının önüne geçti.",
        explanation:
          "'Vor' bir konumu ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Die Präsentation fand vor einer Woche statt.",
        translation: "Sunum bir hafta önce gerçekleşti.",
        explanation:
          "'Vor' bir zaman dilimini ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
    ],
  },
  {
    title: "Bedeutungen von *um, bei, von, nach, aus, mit, zu*",
    sentences: [
      {
        text: "Das Meeting begann um 14 Uhr.",
        translation: "Toplantı saat 14’te başladı.",
        explanation:
          "'Um' belirli bir zaman noktasını ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Es handelte sich um ein wichtiges Projekt.",
        translation: "Bu önemli bir projeydi.",
        explanation:
          "'Um' bir konuyu ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Martin kümmerte sich um die Details.",
        translation: "Martin detaylarla ilgilendi.",
        explanation:
          "'Um' bir ilgilenmeyi ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Er arbeitete bei einer internationalen Firma.",
        translation: "Uluslararası bir şirkette çalışıyordu.",
        explanation:
          "'Bei' bir iş yerini ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Bei Regen nahm er einen Regenschirm mit.",
        translation: "Yağmurda şemsiye aldı.",
        explanation:
          "'Bei' bir durumu ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Bei genauerem Hinsehen entdeckte er den Fehler.",
        translation: "Daha yakından bakınca hatayı keşfetti.",
        explanation:
          "'Bei' bir etkinlik sırasında olanı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Das Büro war nicht weit von seiner Wohnung entfernt.",
        translation: "Ofis dairesinden uzak değildi.",
        explanation:
          "'Von' bir mesafeyi ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Er kam gerade von einem Kundentermin.",
        translation: "Bir müşteri görüşmesinden yeni gelmişti.",
        explanation:
          "'Von' bir kaynaktan gelmeyi ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Der Brief war von seinem Chef.",
        translation: "Mektup patronundandı.",
        explanation:
          "'Von' bir kaynağı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Nach der Arbeit ging er nach Hause.",
        translation: "İşten sonra eve gitti.",
        explanation:
          "'Nach' bir hedefi ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Er sehnte sich nach einem Urlaub.",
        translation: "Bir tatil özlemi çekiyordu.",
        explanation:
          "'Nach' bir özlemi ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Nach seiner Meinung war der Plan gut durchdacht.",
        translation: "Onun fikrine göre plan iyi düşünülmüştü.",
        explanation:
          "'Nach' bir görüşü ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Das Material bestand aus Recyclingpapier.",
        translation: "Malzeme geri dönüştürülmüş kağıttan yapılmıştı.",
        explanation:
          "'Aus' bir malzemeyi ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Aus Erfahrung wusste er, dass Geduld wichtig war.",
        translation: "Tecrübesinden sabrın önemli olduğunu biliyordu.",
        explanation:
          "'Aus' bir nedeni ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Martin kam aus Überzeugung pünktlich.",
        translation: "Martin inancından dolayı dakikti.",
        explanation:
          "'Aus' bir motivasyonu ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Er fuhr mit der U-Bahn zur Arbeit.",
        translation: "Metroyla işe gitti.",
        explanation:
          "'Mit' bir aracı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Mit großer Sorgfalt prüfte er die Dokumente.",
        translation: "Büyük bir özenle belgeleri kontrol etti.",
        explanation:
          "'Mit' bir tarzı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Martin war mit dem Ergebnis zufrieden.",
        translation: "Martin sonuçtan memnundu.",
        explanation:
          "'Mit' bir memnuniyeti ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Er ging zu seinem Arbeitsplatz.",
        translation: "İş yerine gitti.",
        explanation:
          "'Zu' bir hedefi ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: "Die Kollegen gratulierten ihm zu seinem Erfolg.",
        translation: "Meslektaşları başarısından dolayı onu tebrik etti.",
        explanation:
          "'Zu' bir nedeni ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: "Das Projekt neigte sich zu Ende.",
        translation: "Proje sona eriyordu.",
        explanation:
          "'Zu' bir sonucu ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
    ],
  },
  {
    title: "Partnerseite 4: Prepositions – Game: 5 in a row",
    sentences: [
      {
        text: 'In der Mittagspause schlugen Anna und Martin ein Spiel vor: "5 in einer Reihe" mit Präpositionen.',
        translation:
          'Öğle arasında Anna ve Martin bir oyun önerdi: Edatlarla "5’li sıra".',
        explanation:
          "Fiil 'schlugen' (önerdi) ikinci konumdadır. Nesne 'ein Spiel' fiilden sonra gelir.",
      },
      {
        text: 'Anna begann: "Ich komme aus Italien."',
        translation: 'Anna başladı: "İtalya’dan geliyorum."',
        explanation:
          "'Aus' bir kaynaktan gelmeyi ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: 'Martin folgte: "Mein Büro liegt neben dem Aufzug."',
        translation: 'Martin devam etti: "Ofisim asansörün yanında."',
        explanation:
          "'Neben' bir konumu ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: 'Anna: "Die Konferenz findet in zwei Wochen statt."',
        translation: 'Anna: "Konferans iki hafta içinde gerçekleşecek."',
        explanation:
          "'In' bir zaman dilimini ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: 'Martin: "Wegen des Regens nehme ich heute ein Taxi."',
        translation: 'Martin: "Yağmur nedeniyle bugün taksi alıyorum."',
        explanation:
          "'Wegen' bir nedeni ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: 'Anna: "Der Chef steht hinter unserer Entscheidung."',
        translation: 'Anna: "Patron kararımızın arkasında."',
        explanation:
          "'Hinter' bir desteği ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: '"Das sind fünf richtige Sätze! Du gewinnst diese Runde," sagte Martin anerkennend.',
        translation:
          '"Beş doğru cümle! Bu turu kazandın," dedi Martin takdirle.',
        explanation:
          "Fiil 'sagte' (dedi) ikinci konumdadır. Zarf 'anerkennend' fiilden sonra gelir.",
      },
      {
        text: 'Nun war Martin an der Reihe: "Die Unterlagen liegen auf meinem Schreibtisch."',
        translation: 'Şimdi sıra Martin’deydi: "Belgeler masamın üzerinde."',
        explanation:
          "'Auf' bir yüzeyde olmayı ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: 'Anna: "Sie arbeitet seit drei Jahren bei unserer Firma."',
        translation: 'Anna: "Üç yıldır firmamızda çalışıyor."',
        explanation:
          "'Bei' bir iş yerini ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: 'Martin: "Trotz der Schwierigkeiten haben wir das Projekt abgeschlossen."',
        translation: 'Martin: "Zorluklara rağmen projeyi tamamladık."',
        explanation:
          "'Trotz' bir engeli ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: 'Anna: "Der Fehler liegt an der Software."',
        translation: 'Anna: "Hata yazılımdan kaynaklanıyor."',
        explanation:
          "'An' bir sorumluluğu ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: 'Martin: "Nach dem Meeting gehen wir zusammen essen."',
        translation: 'Martin: "Toplantıdan sonra birlikte yemeğe gidiyoruz."',
        explanation:
          "'Nach' bir olayın sonrasını ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: '"Perfekt! Fünf in einer Reihe," jubelte Anna.',
        translation: '"Mükemmel! Beşli sıra," diye sevindi Anna.',
        explanation:
          "Fiil 'jubelte' (sevindi) ikinci konumdadır. Nesne 'Fünf in einer Reihe' fiilden sonra gelir.",
      },
      {
        text: '"Jetzt wird es schwieriger. Wir müssen Präpositionen mit Akkusativ und Dativ korrekt unterscheiden."',
        translation:
          '"Şimdi daha zor olacak. Akkusativ ve Dativ edatlarını doğru ayırt etmeliyiz."',
        explanation:
          "Fiil 'wird' ikinci konumdadır. Nesne 'Präpositionen' fiilden sonra gelir.",
      },
      {
        text: 'Martin nickte: "Ich stelle die Pflanze auf den Tisch."',
        translation:
          'Martin başını salladı: "Bitkiyi masanın üzerine koyuyorum."',
        explanation:
          "'Auf' hareket ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: 'Anna: "Die Blume steht auf dem Tisch."',
        translation: 'Anna: "Çiçek masanın üzerinde duruyor."',
        explanation:
          "'Auf' sabit konum ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: 'Martin: "Ich hänge das Bild an die Wand."',
        translation: 'Martin: "Resmi duvara asıyorum."',
        explanation:
          "'An' hareket ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: 'Anna: "Das Foto hängt an der Wand."',
        translation: 'Anna: "Fotoğraf duvarda asılı."',
        explanation:
          "'An' sabit konum ifade eder ve ismin -de haliyle (Dativ) kullanılır.",
      },
      {
        text: 'Martin: "Wir stellen die Stühle in den Konferenzraum."',
        translation: 'Martin: "Sandalyeleri konferans odasına koyuyoruz."',
        explanation:
          "'In' hareket ifade eder ve ismin -e haliyle (Akkusativ) kullanılır.",
      },
      {
        text: '"Sehr gut!", lachte Anna.',
        translation: '"Çok iyi!" diye güldü Anna.',
        explanation: "Fiil 'lachte' (güldü) ikinci konumdadır.",
      },
      {
        text: '"Du beherrschst die Wechselpräpositionen perfekt. Dieses Spiel macht nicht nur Spaß, sondern verbessert auch unsere Sprachkenntnisse."',
        translation:
          '"Wechselpräpositionen’i mükemmel kullanıyorsun. Bu oyun sadece eğlenceli değil, aynı zamanda dil becerilerimizi de geliştiriyor."',
        explanation:
          "Fiil 'macht' (yapıyor) ikinci konumdadır. Nesne 'Spaß' fiilden sonra gelir.",
      },
    ],
  },
  {
    title: "1. Verben mit Akkusativ und Dativ",
    sentences: [
      {
        text: "Lukas saß auf einer Bank am Ufer des Bodensees.",
        translation: "Lukas Bodensee kıyısındaki bir bankta oturuyordu.",
        explanation:
          "Fiil 'saß' (oturuyordu) ikinci konumdadır. 'Auf einer Bank' ve 'am Ufer des Bodensees' yer zarflarıdır, dativ ile kullanılır.",
      },
      {
        text: "Er beobachtete die Möwen.",
        translation: "Martıları gözlemledi.",
        explanation:
          "Fiil 'beobachtete' (gözlemledi) ikinci konumdadır. 'Die Möwen' akkusativ nesnesidir, doğrudan etkilenen nesneyi belirtir.",
      },
      {
        text: "Der kühle Herbstwind strich ihm durch das Haar.",
        translation: "Serin sonbahar rüzgarı saçlarından geçti.",
        explanation:
          "Fiil 'strich' (geçti) ikinci konumdadır. 'Ihm' dativ nesnesidir, 'durch das Haar' yer zarfıdır.",
      },
      {
        text: "Er sah dem Sonnenuntergang zu.",
        translation: "Güneş batışını izledi.",
        explanation:
          "Fiil 'sah' (izledi) ikinci konumdadır. 'Dem Sonnenuntergang' dativ nesnesidir, 'zusehen' fiili dativ ile kullanılır.",
      },
      {
        text: "Er nahm ein Buch aus seiner Tasche.",
        translation: "Çantasından bir kitap aldı.",
        explanation:
          "Fiil 'nahm' (aldı) ikinci konumdadır. 'Ein Buch' akkusativ nesnesidir, 'aus seiner Tasche' yer zarfıdır.",
      },
      {
        text: "Er hatte seinem Freund Marcus dieses Buch empfohlen.",
        translation: "Arkadaşı Marcus'a bu kitabı önermişti.",
        explanation:
          "Fiil 'hatte' (yardımcı fiil) ikinci konumdadır, 'empfohlen' geçmiş zaman formunu oluşturur. 'Seinem Freund Marcus' dativ, 'dieses Buch' akkusativ nesnesidir.",
      },
      {
        text: "Marcus zeigte kein Interesse daran.",
        translation: "Marcus buna ilgi göstermedi.",
        explanation:
          "Fiil 'zeigte' (göstermedi) ikinci konumdadır. 'Kein Interesse' akkusativ nesnesidir, 'daran' dativ ile kullanılan bir zamirdir.",
      },
      {
        text: "Ich kaufe dir ein Exemplar zum Geburtstag.",
        translation: "Sana doğum gününde bir kopya alacağım.",
        explanation:
          "Fiil 'kaufe' (alacağım) ikinci konumdadır. 'Dir' dativ, 'ein Exemplar' akkusativ nesnesidir.",
      },
      {
        text: "Er legte dem alten Mann seine Jacke über die Schultern.",
        translation: "Yaşlı adama ceketini omuzlarına örttü.",
        explanation:
          "Fiil 'legte' (örttü) ikinci konumdadır. 'Dem alten Mann' dativ, 'seine Jacke' akkusativ nesnesidir.",
      },
      {
        text: "Der Fremde schenkte ihm ein dankbares Lächeln.",
        translation: "Yabancı ona minnettar bir gülümseme sundu.",
        explanation:
          "Fiil 'schenkte' (sundu) ikinci konumdadır. 'Ihm' dativ, 'ein dankbares Lächeln' akkusativ nesnesidir.",
      },
      {
        text: "Er stellte sich als Professor Eichendorff vor.",
        translation: "Kendisini Profesör Eichendorff olarak tanıttı.",
        explanation:
          "Fiil 'stellte' (tanıttı) ikinci konumdadır. 'Sich' dönüşlü zamir, 'als Professor Eichendorff' tanıtım ifadesidir.",
      },
    ],
  },
  {
    title: "2. Verben mit Genitiv",
    sentences: [
      {
        text: "Er annahm sich des kulturellen Erbes der Region.",
        translation: "Bölgenin kültürel mirasını üstlendi.",
        explanation:
          "Fiil 'annahm' (üstlendi) ikinci konumdadır. 'Des kulturellen Erbes' genitiv nesnesidir, 'sich annehmen' fiili genitiv ile kullanılır.",
      },
      {
        text: "Ich entsinne mich des Tages noch genau.",
        translation: "O günü hâlâ tam olarak hatırlıyorum.",
        explanation:
          "Fiil 'entsinne' (hatırlıyorum) ikinci konumdadır. 'Des Tages' genitiv nesnesidir, 'sich entsinnen' fiili genitiv ile kullanılır.",
      },
      {
        text: "Der Professor erinnerte sich der vergangenen Zeiten.",
        translation: "Profesör geçmiş zamanları hatırladı.",
        explanation:
          "Fiil 'erinnerte' (hatırladı) ikinci konumdadır. 'Der vergangenen Zeiten' genitiv nesnesidir, 'sich erinnern' fiili genitiv ile kullanılır.",
      },
      {
        text: "Diese Geschichten entbehrten nicht des dramatischen Elements.",
        translation: "Bu hikayeler dramatik unsurdan yoksun değildi.",
        explanation:
          "Fiil 'entbehrten' (yoksun değildi) ikinci konumdadır. 'Des dramatischen Elements' genitiv nesnesidir, 'entbehren' fiili genitiv ile kullanılır.",
      },
      {
        text: "Er bediente sich einer bildhaften Sprache.",
        translation: "Betimleyici bir dil kullandı.",
        explanation:
          "Fiil 'bediente' (kullandı) ikinci konumdadır. 'Einer bildhaften Sprache' genitiv nesnesidir, 'sich bedienen' fiili genitiv ile kullanılır.",
      },
      {
        text: "Man beschuldigte mich des Diebstahls wertvoller Dokumente.",
        translation: "Beni değerli belgelerin hırsızlığıyla suçladılar.",
        explanation:
          "Fiil 'beschuldigte' (suçladı) ikinci konumdadır. 'Des Diebstahls' genitiv nesnesidir, 'beschuldigen' fiili genitiv ile kullanılır.",
      },
      {
        text: "Er schämte sich seines damaligen Leichtsinns.",
        translation: "O zamanki hafifliğinden utandı.",
        explanation:
          "Fiil 'schämte' (utandı) ikinci konumdadır. 'Seines damaligen Leichtsinns' genitiv nesnesidir, 'sich schämen' fiili genitiv ile kullanılır.",
      },
    ],
  },
  {
    title: "3. Verben, Nomen und Adjektive mit Präpositionen",
    sentences: [
      {
        text: "Lukas war fasziniert von der Geschichte des Professors.",
        translation: "Lukas profesörün hikayesinden büyülenmişti.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Von der Geschichte' dativ ile kullanılan prepozisyonel ifadedir, 'fasziniert' sıfatı 'von' ile dativ alır.",
      },
      {
        text: "Er dachte intensiv über dessen Worte nach.",
        translation: "Onun sözleri üzerine yoğun bir şekilde düşündü.",
        explanation:
          "Fiil 'dachte' (düşündü) ikinci konumdadır. 'Über dessen Worte' akkusativ ile kullanılan prepozisyonel ifadedir, 'nachdenken' fiili 'über' ile akkusativ alır.",
      },
      {
        text: "Er war interessiert an historischen Mysterien.",
        translation: "Tarihi gizemlere ilgi duyuyordu.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'An historischen Mysterien' dativ ile kullanılan prepozisyonel ifadedir, 'interessiert' sıfatı 'an' ile dativ alır.",
      },
      {
        text: "Er sehnte sich nach einem Abenteuer.",
        translation: "Bir macera özlemi çekiyordu.",
        explanation:
          "Fiil 'sehnte' (özlem çekiyordu) ikinci konumdadır. 'Nach einem Abenteuer' dativ ile kullanılan prepozisyonel ifadedir, 'sich sehnen' fiili 'nach' ile dativ alır.",
      },
      {
        text: "Der Professor war reich an Erfahrungen.",
        translation: "Profesör deneyim açısından zengindi.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'An Erfahrungen' dativ ile kullanılan prepozisyonel ifadedir, 'reich' sıfatı 'an' ile dativ alır.",
      },
      {
        text: "Er war bekannt für seine archäologischen Entdeckungen.",
        translation: "Arkeolojik keşifleriyle tanınıyordu.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Für seine archäologischen Entdeckungen' dativ ile kullanılan prepozisyonel ifadedir, 'bekannt' sıfatı 'für' ile dativ alır.",
      },
      {
        text: "Ich arbeite an einem Buch über die geheimen Tunnel.",
        translation: "Gizli tüneller hakkında bir kitap üzerinde çalışıyorum.",
        explanation:
          "Fiil 'arbeite' (çalışıyorum) ikinci konumdadır. 'An einem Buch' dativ ile, 'über die geheimen Tunnel' akkusativ ile kullanılan prepozisyonel ifadelerdir.",
      },
      {
        text: "Er war stolz auf seine Forschung.",
        translation: "Araştırmasıyla gurur duyuyordu.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Auf seine Forschung' akkusativ ile kullanılan prepozisyonel ifadedir, 'stolz' sıfatı 'auf' ile akkusativ alır.",
      },
      {
        text: "Er war überzeugt von seiner Theorie.",
        translation: "Teorisinden emindi.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Von seiner Theorie' dativ ile kullanılan prepozisyonel ifadedir, 'überzeugt' sıfatı 'von' ile dativ alır.",
      },
      {
        text: "Er war bereit, sie mit Lukas zu teilen.",
        translation: "Bunu Lukas ile paylaşmaya hazırdı.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Mit Lukas' dativ ile kullanılan prepozisyonel ifadedir, 'teilen' fiili 'mit' ile dativ alır.",
      },
      {
        text: "Lukas war begierig nach Wissen.",
        translation: "Lukas bilgiye açtı.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Nach Wissen' dativ ile kullanılan prepozisyonel ifadedir, 'begierig' sıfatı 'nach' ile dativ alır.",
      },
      {
        text: "Sind Sie abhängig von finanzieller Unterstützung?",
        translation: "Mali desteğe bağımlı mısınız?",
        explanation:
          "Fiil 'sind' ikinci konumdadır. 'Von finanzieller Unterstützung' dativ ile kullanılan prepozisyonel ifadedir, 'abhängig' sıfatı 'von' ile dativ alır.",
      },
      {
        text: "Ich bin dankbar für jede Hilfe.",
        translation: "Her türlü yardım için minnettarım.",
        explanation:
          "Fiil 'bin' ikinci konumdadır. 'Für jede Hilfe' dativ ile kullanılan prepozisyonel ifadedir, 'dankbar' sıfatı 'für' ile dativ alır.",
      },
      {
        text: "Ich bin nicht angewiesen auf große Geldgeber.",
        translation: "Büyük bağışçılara bağımlı değilim.",
        explanation:
          "Fiil 'bin' ikinci konumdadır. 'Auf große Geldgeber' akkusativ ile kullanılan prepozisyonel ifadedir, 'angewiesen' sıfatı 'auf' ile akkusativ alır.",
      },
    ],
  },
  {
    title:
      "4. Verben, Adjektive und Nomen mit festen Präpositionen + Akkusativ",
    sentences: [
      {
        text: "Der Professor deutete auf ein altes Gebäude.",
        translation: "Profesör eski bir binayı işaret etti.",
        explanation:
          "Fiil 'deutete' (işaret etti) ikinci konumdadır. 'Auf ein altes Gebäude' akkusativ ile kullanılan prepozisyonel ifadedir, 'deuten' fiili 'auf' ile akkusativ alır.",
      },
      {
        text: "Ich konzentriere mich auf die architektonischen Details.",
        translation: "Mimari detaylara odaklanıyorum.",
        explanation:
          "Fiil 'konzentriere' (odaklanıyorum) ikinci konumdadır. 'Auf die architektonischen Details' akkusativ ile kullanılan prepozisyonel ifadedir, 'sich konzentrieren' fiili 'auf' ile akkusativ alır.",
      },
      {
        text: "Lukas war erstaunt über die Präzision.",
        translation: "Lukas hassasiyete şaşırmıştı.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Über die Präzision' akkusativ ile kullanılan prepozisyonel ifadedir, 'erstaunt' sıfatı 'über' ile akkusativ alır.",
      },
      {
        text: "Er argumentierte gegen die vorherrschende Meinung.",
        translation: "Hâkim görüşe karşı savundu.",
        explanation:
          "Fiil 'argumentierte' (savundu) ikinci konumdadır. 'Gegen die vorherrschende Meinung' akkusativ ile kullanılan prepozisyonel ifadedir, 'argumentieren' fiili 'gegen' ile akkusativ alır.",
      },
      {
        text: "Die Hinweise deuteten auf einen unterirdischen Gang.",
        translation: "İpuçları yeraltı geçidine işaret ediyordu.",
        explanation:
          "Fiil 'deuteten' (işaret ediyordu) ikinci konumdadır. 'Auf einen unterirdischen Gang' akkusativ ile kullanılan prepozisyonel ifadedir, 'deuten' fiili 'auf' ile akkusativ alır.",
      },
      {
        text: "Ich bin spezialisiert auf mittelalterliche Bauwerke.",
        translation: "Ortaçağ yapılarında uzmanım.",
        explanation:
          "Fiil 'bin' ikinci konumdadır. 'Auf mittelalterliche Bauwerke' akkusativ ile kullanılan prepozisyonel ifadedir, 'spezialisiert' sıfatı 'auf' ile akkusativ alır.",
      },
      {
        text: "Ich habe mich durch die Archive gearbeitet.",
        translation: "Arşivlerde çalıştım.",
        explanation:
          "Fiil 'habe' ikinci konumdadır, 'gearbeitet' geçmiş zaman formunu oluşturur. 'Durch die Archive' akkusativ ile kullanılan prepozisyonel ifadedir, 'sich arbeiten' fiili 'durch' ile akkusativ alır.",
      },
      {
        text: "Lukas lehnte sich gegen den Baum.",
        translation: "Lukas ağaca yaslandı.",
        explanation:
          "Fiil 'lehnte' (yaslandı) ikinci konumdadır. 'Gegen den Baum' akkusativ ile kullanılan prepozisyonel ifadedir, 'sich lehnen' fiili 'gegen' ile akkusativ alır.",
      },
    ],
  },
  {
    title: "5. Verben, Adjektive und Nomen mit festen Präpositionen + Dativ",
    sentences: [
      {
        text: "Er erzählte von seinen Entdeckungen.",
        translation: "Keşiflerinden bahsetti.",
        explanation:
          "Fiil 'erzählte' (bahsetti) ikinci konumdadır. 'Von seinen Entdeckungen' dativ ile kullanılan prepozisyonel ifadedir, 'erzählen' fiili 'von' ile dativ alır.",
      },
      {
        text: "Ich träume von einem durchschlagenden Beweis.",
        translation: "Kesin bir kanıt hayali kuruyorum.",
        explanation:
          "Fiil 'träume' (hayal kuruyorum) ikinci konumdadır. 'Von einem durchschlagenden Beweis' dativ ile kullanılan prepozisyonel ifadedir, 'träumen' fiili 'von' ile dativ alır.",
      },
      {
        text: "Er sprach mit einer Überzeugung.",
        translation: "Bir inançla konuştu.",
        explanation:
          "Fiil 'sprach' (konuştu) ikinci konumdadır. 'Mit einer Überzeugung' dativ ile kullanılan prepozisyonel ifadedir, 'sprechen' fiili 'mit' ile dativ alır.",
      },
      {
        text: "Lukas half bei den Vorbereitungen.",
        translation: "Lukas hazırlıklarda yardımcı oldu.",
        explanation:
          "Fiil 'half' (yardımcı oldu) ikinci konumdadır. 'Bei den Vorbereitungen' dativ ile kullanılan prepozisyonel ifadedir, 'helfen' fiili 'bei' ile dativ alır.",
      },
      {
        text: "Er war zufrieden mit dem Plan.",
        translation: "Plandan memnundu.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Mit dem Plan' dativ ile kullanılan prepozisyonel ifadedir, 'zufrieden' sıfatı 'mit' ile dativ alır.",
      },
      {
        text: "Er freute sich auf das morgige Abenteuer.",
        translation: "Yarınki maceraya sevindi.",
        explanation:
          "Fiil 'freute' (sevindi) ikinci konumdadır. 'Auf das morgige Abenteuer' akkusativ ile kullanılan prepozisyonel ifadedir, 'sich freuen' fiili 'auf' ile akkusativ alır.",
      },
      {
        text: "Der Professor warnte ihn vor den Gefahren.",
        translation: "Profesör onu tehlikelere karşı uyardı.",
        explanation:
          "Fiil 'warnte' (uyardı) ikinci konumdadır. 'Vor den Gefahren' dativ ile kullanılan prepozisyonel ifadedir, 'warnen' fiili 'vor' ile dativ alır.",
      },
      {
        text: "Lukas bestand auf seiner Teilnahme.",
        translation: "Lukas katılımında ısrar etti.",
        explanation:
          "Fiil 'bestand' (ısrar etti) ikinci konumdadır. 'Auf seiner Teilnahme' dativ ile kullanılan prepozisyonel ifadedir, 'bestehen' fiili 'auf' ile dativ alır.",
      },
      {
        text: "Sie verabredeten sich zu einem frühen Frühstück.",
        translation: "Erken bir kahvaltı için sözleştiler.",
        explanation:
          "Fiil 'verabredeten' (sözleştiler) ikinci konumdadır. 'Zu einem frühen Frühstück' dativ ile kullanılan prepozisyonel ifadedir, 'sich verabreden' fiili 'zu' ile dativ alır.",
      },
      {
        text: "Sie suchten nach einer geeigneten Ausrüstung.",
        translation: "Uygun bir ekipman aradılar.",
        explanation:
          "Fiil 'suchten' (aradılar) ikinci konumdadır. 'Nach einer geeigneten Ausrüstung' dativ ile kullanılan prepozisyonel ifadedir, 'suchen' fiili 'nach' ile dativ alır.",
      },
      {
        text: "Es liegt an Ihnen, ob Sie mitkommen wollen.",
        translation: "Gelip gelmemek size bağlı.",
        explanation:
          "Fiil 'liegt' (bağlı) ikinci konumdadır. 'An Ihnen' dativ ile kullanılan prepozisyonel ifadedir, 'liegen' fiili 'an' ile dativ alır.",
      },
      {
        text: "Lukas zweifelte nicht an der Wichtigkeit.",
        translation: "Lukas önemin şüphe etmedi.",
        explanation:
          "Fiil 'zweifelte' (şüphe etmedi) ikinci konumdadır. 'An der Wichtigkeit' dativ ile kullanılan prepozisyonel ifadedir, 'zweifeln' fiili 'an' ile dativ alır.",
      },
    ],
  },
  {
    title: "6. Verben und ihre Ergänzungen – Eine gemeinsame Geschichte",
    sentences: [
      {
        text: "Lukas notierte, was er dem Professor mitteilen wollte.",
        translation: "Lukas profesöre anlatmak istediklerini not etti.",
        explanation: "Fiil notierte (not etti) ikinci konum",
      },

      {
        title: "1. Verben mit Akkusativ und Dativ",
        sentences: [
          {
            text: "Lukas saß auf einer Bank am Ufer des Bodensees.",
            translation: "Lukas Bodensee kıyısındaki bir bankta oturuyordu.",
            explanation:
              "Fiil 'saß' (oturuyordu) ikinci konumdadır. 'Auf einer Bank' ve 'am Ufer des Bodensees' yer zarflarıdır, dativ ile kullanılır.",
          },
          {
            text: "Er beobachtete die Möwen, die über das schimmernde Wasser kreisten.",
            translation:
              "Martıları gözlemledi, onlar pırıldayan suyun üzerinde daireler çiziyordu.",
            explanation:
              "Fiil 'beobachtete' (gözlemledi) ikinci konumdadır. 'Die Möwen' akkusativ nesnesidir. Yan cümlede 'kreisten' fiili sonda yer alır.",
          },
          {
            text: "Der kühle Herbstwind strich ihm durch das Haar.",
            translation: "Serin sonbahar rüzgarı saçlarından geçti.",
            explanation:
              "Fiil 'strich' (geçti) ikinci konumdadır. 'Ihm' dativ nesnesidir, 'durch das Haar' yer zarfıdır.",
          },
          {
            text: "Er sah dem Sonnenuntergang zu.",
            translation: "Güneş batışını izledi.",
            explanation:
              "Fiil 'sah' (izledi) ikinci konumdadır. 'Dem Sonnenuntergang' dativ nesnesidir, 'zusehen' fiili dativ ile kullanılır.",
          },
          {
            text: "Er nahm ein Buch aus seiner Tasche.",
            translation: "Çantasından bir kitap aldı.",
            explanation:
              "Fiil 'nahm' (aldı) ikinci konumdadır. 'Ein Buch' akkusativ nesnesidir, 'aus seiner Tasche' yer zarfıdır.",
          },
          {
            text: "Er hatte seinem Freund Marcus dieses Buch empfohlen.",
            translation: "Arkadaşı Marcus'a bu kitabı önermişti.",
            explanation:
              "Fiil 'hatte' (yardımcı fiil) ikinci konumdadır, 'empfohlen' geçmiş zaman formunu oluşturur. 'Seinem Freund Marcus' dativ, 'dieses Buch' akkusativ nesnesidir.",
          },
          {
            text: "Marcus zeigte kein Interesse daran.",
            translation: "Marcus buna ilgi göstermedi.",
            explanation:
              "Fiil 'zeigte' (göstermedi) ikinci konumdadır. 'Kein Interesse' akkusativ nesnesidir, 'daran' dativ ile kullanılan bir zamirdir.",
          },
          {
            text: "Ich kaufe dir ein Exemplar zum Geburtstag.",
            translation: "Sana doğum gününde bir kopya alacağım.",
            explanation:
              "Fiil 'kaufe' (alacağım) ikinci konumdadır. 'Dir' dativ, 'ein Exemplar' akkusativ nesnesidir.",
          },
          {
            text: "Er legte dem alten Mann, der sich neben ihn gesetzt hatte, seine Jacke über die Schultern.",
            translation: "Yanına oturan yaşlı adama ceketini omuzlarına örttü.",
            explanation:
              "Fiil 'legte' (örttü) ikinci konumdadır. 'Dem alten Mann' dativ, 'seine Jacke' akkusativ nesnesidir. Yan cümlede 'hatte' fiili sonda yer alır.",
          },
          {
            text: "Der Fremde schenkte ihm ein dankbares Lächeln.",
            translation: "Yabancı ona minnettar bir gülümseme sundu.",
            explanation:
              "Fiil 'schenkte' (sundu) ikinci konumdadır. 'Ihm' dativ, 'ein dankbares Lächeln' akkusativ nesnesidir.",
          },
          {
            text: "Er stellte sich als Professor Eichendorff vor.",
            translation: "Kendisini Profesör Eichendorff olarak tanıttı.",
            explanation:
              "Fiil 'stellte' (tanıttı) ikinci konumdadır. 'Sich' dönüşlü zamir, 'als Professor Eichendorff' tanıtım ifadesidir.",
          },
        ],
      },
      {
        title: "2. Verben mit Genitiv",

        text: "Er annahm sich des kulturellen Erbes der Region besonders.",
        translation: "Bölgenin kültürel mirasını özellikle üstlendi.",
        explanation:
          "Fiil 'annahm' (üstlendi) ikinci konumdadır. 'Des kulturellen Erbes' genitiv nesnesidir, 'sich annehmen' fiili genitiv ile kullanılır.",
      },
      {
        text: "Er war nach Konstanz gekommen, um sich einer wichtigen Forschungsarbeit zu widmen.",
        translation: "Önemli bir araştırmaya adanmak için Konstanz'a gelmişti.",
        explanation:
          "Fiil 'war' (yardımcı fiil) ikinci konumdadır, 'gekommen' geçmiş zaman formunu oluşturur. 'Einer wichtigen Forschungsarbeit' genitiv nesnesidir, 'sich widmen' fiili genitiv ile kullanılır.",
      },
      {
        text: "Ich entsinne mich des Tages noch genau.",
        translation: "O günü hâlâ tam olarak hatırlıyorum.",
        explanation:
          "Fiil 'entsinne' (hatırlıyorum) ikinci konumdadır. 'Des Tages' genitiv nesnesidir, 'sich entsinnen' fiili genitiv ile kullanılır.",
      },
      {
        text: "Lukas hörte aufmerksam zu, als der Professor sich der vergangenen Zeiten erinnerte.",
        translation:
          "Lukas dikkatle dinledi, profesör geçmiş zamanları hatırlarken.",
        explanation:
          "Fiil 'hörte' (dinledi) ikinci konumdadır. 'Der vergangenen Zeiten' genitiv nesnesidir, 'sich erinnern' fiili genitiv ile kullanılır.",
      },
      {
        text: "Diese Geschichten entbehrten nicht des dramatischen Elements.",
        translation: "Bu hikayeler dramatik unsurdan yoksun değildi.",
        explanation:
          "Fiil 'entbehrten' (yoksun değildi) ikinci konumdadır. 'Des dramatischen Elements' genitiv nesnesidir, 'entbehren' fiili genitiv ile kullanılır.",
      },
      {
        text: "Der alte Mann bediente sich einer bildhaften Sprache.",
        translation: "Yaşlı adam betimleyici bir dil kullandı.",
        explanation:
          "Fiil 'bediente' (kullandı) ikinci konumdadır. 'Einer bildhaften Sprache' genitiv nesnesidir, 'sich bedienen' fiili genitiv ile kullanılır.",
      },
      {
        text: "Man beschuldigte mich des Diebstahls wertvoller Dokumente.",
        translation: "Beni değerli belgelerin hırsızlığıyla suçladılar.",
        explanation:
          "Fiil 'beschuldigte' (suçladı) ikinci konumdadır. 'Des Diebstahls' genitiv nesnesidir, 'beschuldigen' fiili genitiv ile kullanılır.",
      },
      {
        text: "Er schämte sich seines damaligen Leichtsinns.",
        translation: "O zamanki hafifliğinden utandı.",
        explanation:
          "Fiil 'schämte' (utandı) ikinci konumdadır. 'Seines damaligen Leichtsinns' genitiv nesnesidir, 'sich schämen' fiili genitiv ile kullanılır.",
      },
    ],
  },
  {
    title: "3. Verben, Nomen und Adjektive mit Präpositionen",
    sentences: [
      {
        text: "Lukas war fasziniert von der Geschichte des Professors.",
        translation: "Lukas profesörün hikayesinden büyülenmişti.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Von der Geschichte' dativ ile kullanılan prepozisyonel ifadedir, 'fasziniert' sıfatı 'von' ile dativ alır.",
      },
      {
        text: "Er dachte intensiv über dessen Worte nach.",
        translation: "Onun sözleri üzerine yoğun bir şekilde düşündü.",
        explanation:
          "Fiil 'dachte' (düşündü) ikinci konumdadır. 'Über dessen Worte' akkusativ ile kullanılan prepozisyonel ifadedir, 'nachdenken' fiili 'über' ile akkusativ alır.",
      },
      {
        text: "Er war schon immer interessiert an historischen Mysterien.",
        translation: "Her zaman tarihi gizemlere ilgi duyuyordu.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'An historischen Mysterien' dativ ile kullanılan prepozisyonel ifadedir, 'interessiert' sıfatı 'an' ile dativ alır.",
      },
      {
        text: "Er sehnte sich nach einem Abenteuer.",
        translation: "Bir macera özlemi çekiyordu.",
        explanation:
          "Fiil 'sehnte' (özlem çekiyordu) ikinci konumdadır. 'Nach einem Abenteuer' dativ ile kullanılan prepozisyonel ifadedir, 'sich sehnen' fiili 'nach' ile dativ alır.",
      },
      {
        text: "Der Professor schien reich an Erfahrungen zu sein.",
        translation: "Profesör deneyim açısından zengin görünüyordu.",
        explanation:
          "Fiil 'schien' (görünüyordu) ikinci konumdadır. 'An Erfahrungen' dativ ile kullanılan prepozisyonel ifadedir, 'reich' sıfatı 'an' ile dativ alır.",
      },
      {
        text: "Er war bekannt für seine archäologischen Entdeckungen.",
        translation: "Arkeolojik keşifleriyle tanınıyordu.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Für seine archäologischen Entdeckungen' dativ ile kullanılan prepozisyonel ifadedir, 'bekannt' sıfatı 'für' ile dativ alır.",
      },
      {
        text: "Ich arbeite momentan an einem Buch über die geheimen Tunnel unter dem Bodensee.",
        translation:
          "Şu anda Bodensee altındaki gizli tüneller hakkında bir kitap üzerinde çalışıyorum.",
        explanation:
          "Fiil 'arbeite' (çalışıyorum) ikinci konumdadır. 'An einem Buch' dativ, 'über die geheimen Tunnel' akkusativ ile kullanılan prepozisyonel ifadelerdir.",
      },
      {
        text: "Er war sichtlich stolz auf seine Forschung.",
        translation: "Araştırmasıyla açıkça gurur duyuyordu.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Auf seine Forschung' akkusativ ile kullanılan prepozisyonel ifadedir, 'stolz' sıfatı 'auf' ile akkusativ alır.",
      },
      {
        text: "Er war überzeugt von seiner Theorie.",
        translation: "Teorisinden emindi.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Von seiner Theorie' dativ ile kullanılan prepozisyonel ifadedir, 'überzeugt' sıfatı 'von' ile dativ alır.",
      },
      {
        text: "Er war bereit, sie mit Lukas zu teilen.",
        translation: "Bunu Lukas ile paylaşmaya hazırdı.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Mit Lukas' dativ ile kullanılan prepozisyonel ifadedir, 'teilen' fiili 'mit' ile dativ alır.",
      },
      {
        text: "Die Begeisterung für das Thema war ansteckend.",
        translation: "Konuya duyulan coşku bulaşıcıydı.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Für das Thema' dativ ile kullanılan prepozisyonel ifadedir, 'Begeisterung' ismi 'für' ile dativ alır.",
      },
      {
        text: "Lukas war begierig nach Wissen.",
        translation: "Lukas bilgiye açtı.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Nach Wissen' dativ ile kullanılan prepozisyonel ifadedir, 'begierig' sıfatı 'nach' ile dativ alır.",
      },
      {
        text: "Sind Sie abhängig von finanzieller Unterstützung für Ihre Forschung?",
        translation: "Araştırmanız için mali desteğe bağımlı mısınız?",
        explanation:
          "Fiil 'sind' ikinci konumdadır. 'Von finanzieller Unterstützung' ve 'für Ihre Forschung' dativ ile kullanılan prepozisyonel ifadelerdir, 'abhängig' sıfatı 'von' ile dativ alır.",
      },
      {
        text: "Ich bin dankbar für jede Hilfe.",
        translation: "Her türlü yardım için minnettarım.",
        explanation:
          "Fiil 'bin' ikinci konumdadır. 'Für jede Hilfe' dativ ile kullanılan prepozisyonel ifadedir, 'dankbar' sıfatı 'für' ile dativ alır.",
      },
      {
        text: "Ich bin nicht angewiesen auf große Geldgeber.",
        translation: "Büyük bağışçılara bağımlı değilim.",
        explanation:
          "Fiil 'bin' ikinci konumdadır. 'Auf große Geldgeber' akkusativ ile kullanılan prepozisyonel ifadedir, 'angewiesen' sıfatı 'auf' ile akkusativ alır.",
      },
    ],
  },
  {
    title:
      "4. Verben, Adjektive und Nomen mit festen Präpositionen + Akkusativ",
    sentences: [
      {
        text: "Der Professor blickte durch das Fernglas.",
        translation: "Profesör dürbünle baktı.",
        explanation:
          "Fiil 'blickte' (baktı) ikinci konumdadır. 'Durch das Fernglas' akkusativ ile kullanılan prepozisyonel ifadedir, 'blicken' fiili 'durch' ile akkusativ alır.",
      },
      {
        text: "Er deutete auf ein altes Gebäude am gegenüberliegenden Ufer.",
        translation: "Karşı kıyıdaki eski bir binayı işaret etti.",
        explanation:
          "Fiil 'deutete' (işaret etti) ikinci konumdadır. 'Auf ein altes Gebäude' akkusativ ile kullanılan prepozisyonel ifadedir, 'deuten' fiili 'auf' ile akkusativ alır.",
      },
      {
        text: "Ich konzentriere mich auf die architektonischen Details.",
        translation: "Mimari detaylara odaklanıyorum.",
        explanation:
          "Fiil 'konzentriere' (odaklanıyorum) ikinci konumdadır. 'Auf die architektonischen Details' akkusativ ile kullanılan prepozisyonel ifadedir, 'sich konzentrieren' fiili 'auf' ile akkusativ alır.",
      },
      {
        text: "Er reichte Lukas das Fernglas.",
        translation: "Lukas'a dürbünü uzattı.",
        explanation:
          "Fiil 'reichte' (uzattı) ikinci konumdadır. 'Lukas' dativ, 'das Fernglas' akkusativ nesnesidir.",
      },
      {
        text: "Lukas war erstaunt über die Präzision.",
        translation: "Lukas hassasiyete şaşırmıştı.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Über die Präzision' akkusativ ile kullanılan prepozisyonel ifadedir, 'erstaunt' sıfatı 'über' ile akkusativ alır.",
      },
      {
        text: "Er argumentierte gegen die vorherrschende Meinung der akademischen Welt.",
        translation: "Akademik dünyanın hâkim görüşüne karşı savundu.",
        explanation:
          "Fiil 'argumentierte' (savundu) ikinci konumdadır. 'Gegen die vorherrschende Meinung' akkusativ ile kullanılan prepozisyonel ifadedir, 'argumentieren' fiili 'gegen' ile akkusativ alır.",
      },
      {
        text: "Die Hinweise deuteten auf einen unterirdischen Gang.",
        translation: "İpuçları yeraltı geçidine işaret ediyordu.",
        explanation:
          "Fiil 'deuteten' (işaret ediyordu) ikinci konumdadır. 'Auf einen unterirdischen Gang' akkusativ ile kullanılan prepozisyonel ifadedir, 'deuten' fiili 'auf' ile akkusativ alır.",
      },
      {
        text: "Ich bin spezialisiert auf mittelalterliche Bauwerke.",
        translation: "Ortaçağ yapılarında uzmanım.",
        explanation:
          "Fiil 'bin' ikinci konumdadır. 'Auf mittelalterliche Bauwerke' akkusativ ile kullanılan prepozisyonel ifadedir, 'spezialisiert' sıfatı 'auf' ile akkusativ alır.",
      },
      {
        text: "Ich habe mich durch die Archive der umliegenden Klöster gearbeitet.",
        translation: "Çevredeki manastırların arşivlerinde çalıştım.",
        explanation:
          "Fiil 'habe' ikinci konumdadır, 'gearbeitet' geçmiş zaman formunu oluşturur. 'Durch die Archive' akkusativ ile kullanılan prepozisyonel ifadedir, 'sich arbeiten' fiili 'durch' ile akkusativ alır.",
      },
      {
        text: "Lukas lehnte sich gegen den Baum.",
        translation: "Lukas ağaca yaslandı.",
        explanation:
          "Fiil 'lehnte' (yaslandı) ikinci konumdadır. 'Gegen den Baum' akkusativ ile kullanılan prepozisyonel ifadedir, 'sich lehnen' fiili 'gegen' ile akkusativ alır.",
      },
      {
        text: "Die Begeisterung des alten Mannes hatte sich auf ihn übertragen.",
        translation: "Yaşlı adamın coşkusu ona bulaşmıştı.",
        explanation:
          "Fiil 'hatte' ikinci konumdadır, 'übertragen' geçmiş zaman formunu oluşturur. 'Auf ihn' akkusativ ile kullanılan prepozisyonel ifadedir, 'sich übertragen' fiili 'auf' ile akkusativ alır.",
      },
    ],
  },
  {
    title: "5. Verben, Adjektive und Nomen mit festen Präpositionen + Dativ",
    sentences: [
      {
        text: "Professor Eichendorff erzählte von seinen Entdeckungen mit einer Lebendigkeit.",
        translation:
          "Profesör Eichendorff keşiflerinden büyük bir canlılıkla bahsetti.",
        explanation:
          "Fiil 'erzählte' (bahsetti) ikinci konumdadır. 'Von seinen Entdeckungen' ve 'mit einer Lebendigkeit' dativ ile kullanılan prepozisyonel ifadelerdir, 'erzählen' fiili 'von' ile dativ alır.",
      },
      {
        text: "Ich träume von einem durchschlagenden Beweis für meine Theorie.",
        translation: "Teorim için kesin bir kanıt hayali kuruyorum.",
        explanation:
          "Fiil 'träume' (hayal kuruyorum) ikinci konumdadır. 'Von einem durchschlagenden Beweis' dativ ile kullanılan prepozisyonel ifadedir, 'träumen' fiili 'von' ile dativ alır.",
      },
      {
        text: "Der alte Mann sprach mit einer Überzeugung, die keinen Zweifel zuließ.",
        translation: "Yaşlı adam, şüpheye yer bırakmayan bir inançla konuştu.",
        explanation:
          "Fiil 'sprach' (konuştu) ikinci konumdadır. 'Mit einer Überzeugung' dativ ile kullanılan prepozisyonel ifadedir, 'sprechen' fiili 'mit' ile dativ alır.",
      },
      {
        text: "Lukas half bei den Vorbereitungen für eine kleine Expedition.",
        translation:
          "Lukas küçük bir keşif gezisi için hazırlıklarda yardımcı oldu.",
        explanation:
          "Fiil 'half' (yardımcı oldu) ikinci konumdadır. 'Bei den Vorbereitungen' ve 'für eine kleine Expedition' dativ ile kullanılan prepozisyonel ifadelerdir, 'helfen' fiili 'bei' ile dativ alır.",
      },
      {
        text: "Er war zufrieden mit dem Plan.",
        translation: "Plandan memnundu.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Mit dem Plan' dativ ile kullanılan prepozisyonel ifadedir, 'zufrieden' sıfatı 'mit' ile dativ alır.",
      },
      {
        text: "Er freute sich auf das morgige Abenteuer.",
        translation: "Yarınki maceraya sevindi.",
        explanation:
          "Fiil 'freute' (sevindi) ikinci konumdadır. 'Auf das morgige Abenteuer' akkusativ ile kullanılan prepozisyonel ifadedir, 'sich freuen' fiili 'auf' ile akkusativ alır.",
      },
      {
        text: "Der Professor warnte ihn vor den Gefahren eines solchen Unterfangens.",
        translation:
          "Profesör onu böyle bir girişimin tehlikelerine karşı uyardı.",
        explanation:
          "Fiil 'warnte' (uyardı) ikinci konumdadır. 'Vor den Gefahren' dativ ile kullanılan prepozisyonel ifadedir, 'warnen' fiili 'vor' ile dativ alır.",
      },
      {
        text: "Lukas bestand auf seiner Teilnahme.",
        translation: "Lukas katılımında ısrar etti.",
        explanation:
          "Fiil 'bestand' (ısrar etti) ikinci konumdadır. 'Auf seiner Teilnahme' dativ ile kullanılan prepozisyonel ifadedir, 'bestehen' fiili 'auf' ile dativ alır.",
      },
      {
        text: "Die beiden verabredeten sich zu einem frühen Frühstück im Hotel des Professors.",
        translation:
          "İkisi, profesörün otelinde erken bir kahvaltı için sözleşti.",
        explanation:
          "Fiil 'verabredeten' (sözleştiler) ikinci konumdadır. 'Zu einem frühen Frühstück' dativ ile kullanılan prepozisyonel ifadedir, 'sich verabreden' fiili 'zu' ile dativ alır.",
      },
      {
        text: "Die Sonne verschwand langsam hinter den Bergen.",
        translation: "Güneş yavaşça dağların ardında kayboldu.",
        explanation:
          "Fiil 'verschwand' (kayboldu) ikinci konumdadır. 'Hinter den Bergen' dativ ile kullanılan prepozisyonel ifadedir, 'verschwinden' fiili 'hinter' ile dativ alır.",
      },
      {
        text: "Sie suchten nach einer geeigneten Ausrüstung.",
        translation: "Uygun bir ekipman aradılar.",
        explanation:
          "Fiil 'suchten' (aradılar) ikinci konumdadır. 'Nach einer geeigneten Ausrüstung' dativ ile kullanılan prepozisyonel ifadedir, 'suchen' fiili 'nach' ile dativ alır.",
      },
      {
        text: "Es liegt an Ihnen, ob Sie wirklich mitkommen wollen.",
        translation: "Gelip gelmemek size bağlı.",
        explanation:
          "Fiil 'liegt' (bağlı) ikinci konumdadır. 'An Ihnen' dativ ile kullanılan prepozisyonel ifadedir, 'liegen' fiili 'an' ile dativ alır.",
      },
      {
        text: "Lukas zweifelte nicht an der Wichtigkeit dieser Expedition.",
        translation: "Lukas bu keşif gezisinin öneminden şüphe etmedi.",
        explanation:
          "Fiil 'zweifelte' (şüphe etmedi) ikinci konumdadır. 'An der Wichtigkeit' dativ ile kullanılan prepozisyonel ifadedir, 'zweifeln' fiili 'an' ile dativ alır.",
      },
    ],
  },
  {
    title: "6. Verben und ihre Ergänzungen – Eine gemeinsame Geschichte",
    sentences: [
      {
        text: "Lukas saß in seinem Hotelzimmer.",
        translation: "Lukas otel odasında oturuyordu.",
        explanation:
          "Fiil 'saß' (oturuyordu) ikinci konumdadır. 'In seinem Hotelzimmer' dativ ile kullanılan yer zarfıdır.",
      },
      {
        text: "Er notierte, was er dem Professor seine Erfahrungen mitteilen wollte.",
        translation:
          "Lukas, profesöre deneyimlerini anlatmak istediklerini not etti.",
        explanation:
          "Fiil 'notierte' (not etti) ikinci konumdadır. 'Dem Professor' dativ, 'seine Erfahrungen' akkusativ nesnesidir, 'mitteilen' fiili dativ ve akkusativ alır.",
      },
      {
        text: "Er hatte sich des Gefühls nicht erwehren können.",
        translation: "Bu histen kendini alıkoyamamıştı.",
        explanation:
          "Fiil 'hatte' ikinci konumdadır, 'erwehren' geçmiş zaman formunu oluşturur. 'Des Gefühls' genitiv nesnesidir, 'sich erwehren' fiili genitiv ile kullanılır.",
      },
      {
        text: "Er dachte über die Bedeutung dieser Expedition nach.",
        translation: "Bu keşif gezisinin anlamı üzerine düşündü.",
        explanation:
          "Fiil 'dachte' (düşündü) ikinci konumdadır. 'Über die Bedeutung' akkusativ ile kullanılan prepozisyonel ifadedir, 'nachdenken' fiili 'über' ile akkusativ alır.",
      },
      {
        text: "Es klopfte plötzlich an der Tür.",
        translation: "Aniden kapı çalındı.",
        explanation:
          "Fiil 'klopfte' (çalındı) ikinci konumdadır. 'An der Tür' dativ ile kullanılan prepozisyonel ifadedir.",
      },
      {
        text: "Es war Marcus, der auf seine Einladung hin angereist war.",
        translation: "Daveti üzerine gelen Marcus'tu.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Auf seine Einladung' akkusativ ile kullanılan prepozisyonel ifadedir, yan cümlede 'war' sonda yer alır.",
      },
      {
        text: "Lukas freute sich über das unerwartete Wiedersehen.",
        translation: "Lukas beklenmedik buluşmaya sevindi.",
        explanation:
          "Fiil 'freute' (sevindi) ikinci konumdadır. 'Über das unerwartete Wiedersehen' akkusativ ile kullanılan prepozisyonel ifadedir, 'sich freuen' fiili 'über' ile akkusativ alır.",
      },
      {
        text: "Er erzählte seinem Freund aufgeregt von seinem Treffen mit dem Professor.",
        translation: "Arkadaşına profesörle buluşmasını heyecanla anlattı.",
        explanation:
          "Fiil 'erzählte' (anlattı) ikinci konumdadır. 'Seinem Freund' dativ, 'von seinem Treffen' dativ ile kullanılan prepozisyonel ifadedir.",
      },
      {
        text: "Ich habe dir die Wahrheit verschwiegen.",
        translation: "Sana gerçeği sakladım.",
        explanation:
          "Fiil 'habe' ikinci konumdadır, 'verschwiegen' geçmiş zaman formunu oluşturur. 'Dir' dativ, 'die Wahrheit' akkusativ nesnesidir.",
      },
      {
        text: "Er zog einen alten Brief aus seiner Tasche.",
        translation: "Cebinden eski bir mektup çıkardı.",
        explanation:
          "Fiil 'zog' (çıkardı) ikinci konumdadır. 'Einen alten Brief' akkusativ nesnesidir, 'aus seiner Tasche' yer zarfıdır.",
      },
      {
        text: "Ich arbeite mit Professor Eichendorff seit Jahren zusammen.",
        translation: "Yıllardır Profesör Eichendorff ile birlikte çalışıyorum.",
        explanation:
          "Fiil 'arbeite' (çalışıyorum) ikinci konumdadır. 'Mit Professor Eichendorff' dativ ile kullanılan prepozisyonel ifadedir, 'zusammenarbeiten' fiili 'mit' ile dativ alır.",
      },
      {
        text: "Ich war es, der ihn auf dich aufmerksam gemacht hat.",
        translation: "Seni ona fark ettiren bendim.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Auf dich' akkusativ ile kullanılan prepozisyonel ifadedir, 'aufmerksam machen' fiili 'auf' ile akkusativ alır.",
      },
      {
        text: "Lukas war sprachlos.",
        translation: "Lukas nutku tutulmuştu.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Sprachlos' sıfat, durum bildiren bir tamamlayıcıdır.",
      },
      {
        text: "Er erinnerte sich des Moments, als der Professor sich neben ihn gesetzt hatte.",
        translation: "Profesörün yanına oturduğu anı hatırladı.",
        explanation:
          "Fiil 'erinnerte' (hatırladı) ikinci konumdadır. 'Des Moments' genitiv nesnesidir, 'sich erinnern' fiili genitiv ile kullanılır.",
      },
      {
        text: "Marcus half bei der Aufklärung.",
        translation: "Marcus açıklamaya yardım etti.",
        explanation:
          "Fiil 'half' (yardım etti) ikinci konumdadır. 'Bei der Aufklärung' dativ ile kullanılan prepozisyonel ifadedir, 'helfen' fiili 'bei' ile dativ alır.",
      },
      {
        text: "Der Professor ist abhängig von deinen Sprachkenntnissen.",
        translation: "Profesör senin dil bilgine bağımlı.",
        explanation:
          "Fiil 'ist' ikinci konumdadır. 'Von deinen Sprachkenntnissen' dativ ile kullanılan prepozisyonel ifadedir, 'abhängig' sıfatı 'von' ile dativ alır.",
      },
      {
        text: "Die drei trafen sich zu einem späten Abendessen.",
        translation: "Üçü geç bir akşam yemeği için buluştu.",
        explanation:
          "Fiil 'trafen' (buluştu) ikinci konumdadır. 'Zu einem späten Abendessen' dativ ile kullanılan prepozisyonel ifadedir, 'sich treffen' fiili 'zu' ile dativ alır.",
      },
      {
        text: "Der Professor legte Lukas die alten Pergamente vor.",
        translation: "Profesör Lukas'a eski parşömenleri sundu.",
        explanation:
          "Fiil 'legte' (sundu) ikinci konumdadır. 'Lukas' dativ, 'die alten Pergamente' akkusativ nesnesidir, 'vorlegen' fiili dativ ve akkusativ alır.",
      },
      {
        text: "Er bat ihn um Hilfe.",
        translation: "Ondan yardım istedi.",
        explanation:
          "Fiil 'bat' (istedi) ikinci konumdadır. 'Ihn' akkusativ, 'um Hilfe' akkusativ ile kullanılan prepozisyonel ifadedir, 'bitten' fiili 'um' ile akkusativ alır.",
      },
      {
        text: "Er war dankbar für die Unterstützung.",
        translation: "Destek için minnettardı.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Für die Unterstützung' dativ ile kullanılan prepozisyonel ifadedir, 'dankbar' sıfatı 'für' ile dativ alır.",
      },
      {
        text: "Er versprach, Lukas an der Entdeckung teilhaben zu lassen.",
        translation: "Lukas'ı keşfe ortak etmeye söz verdi.",
        explanation:
          "Fiil 'versprach' (söz verdi) ikinci konumdadır. 'An der Entdeckung' dativ ile kullanılan prepozisyonel ifadedir, 'teilhaben' fiili 'an' ile dativ alır.",
      },
      {
        text: "Sie machten sich bereit für die Expedition.",
        translation: "Keşif gezisi için hazırlandılar.",
        explanation:
          "Fiil 'machten' (hazırlandılar) ikinci konumdadır. 'Für die Expedition' dativ ile kullanılan prepozisyonel ifadedir, 'sich bereit machen' fiili 'für' ile dativ alır.",
      },
      {
        text: "Lukas war gespannt auf das Abenteuer.",
        translation: "Lukas maceraya meraklıydı.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Auf das Abenteuer' akkusativ ile kullanılan prepozisyonel ifadedir, 'gespannt' sıfatı 'auf' ile akkusativ alır.",
      },
      {
        text: "Er wusste, dass dieser Tag sein Leben verändern würde.",
        translation: "Bu günün hayatını değiştireceğini biliyordu.",
        explanation:
          "Fiil 'wusste' (biliyordu) ikinci konumdadır. Yan cümlede fiil 'würde' sonda yer alır.",
      },
      {
        text: "Er blickte durch das Fenster auf den See hinaus.",
        translation: "Pencereden göle doğru baktı.",
        explanation:
          "Fiil 'blickte' (baktı) ikinci konumdadır. 'Durch das Fenster' ve 'auf den See' akkusativ ile kullanılan prepozisyonel ifadelerdir.",
      },
      {
        text: "Er war sich sicher: Dies war erst der Anfang.",
        translation: "Kendinden emindi: Bu sadece başlangıçtı.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Sich sicher' dönüşlü bir yapıdır, durum bildiren tamamlayıcıdır.",
      },
      {
        text: "Er würde gegen die Zeit antreten, um des Rätsels Lösung zu finden.",
        translation:
          "Gizemlerin çözümünü bulmak için zamana karşı yarışacaktı.",
        explanation:
          "Fiil 'würde' ikinci konumdadır. 'Gegen die Zeit' akkusativ, 'des Rätsels' genitiv nesnesidir, 'antreten' fiili 'gegen' ile akkusativ alır.",
      },
      {
        text: "Die Vergangenheit wartete darauf, entdeckt zu werden.",
        translation: "Geçmiş, keşfedilmeyi bekliyordu.",
        explanation:
          "Fiil 'wartete' (bekliyordu) ikinci konumdadır. 'Darauf' dativ zamiridir, 'entdeckt zu werden' mastar yapısıdır.",
      },
      {
        text: "Lukas war bereit, sich dieser Herausforderung zu stellen.",
        translation: "Lukas bu meydan okumaya hazırdı.",
        explanation:
          "Fiil 'war' ikinci konumdadır. 'Sich dieser Herausforderung' dativ ile kullanılan prepozisyonel ifadedir, 'sich stellen' fiili dativ alır.",
      },
    ],
  },
  {
    title: "1. Bildung der Vergangenheitszeiten",
    sentences: [
      {
        text: "Am frühen Morgen brach Lukas mit Professor Eichendorff und Marcus zum See auf.",
        translation:
          "Sabah erken saatlerde Lukas, Profesör Eichendorff ve Marcus ile göle doğru yola çıktı.",
        explanation:
          "Fiil 'brach' (yola çıktı) Präteritum formundadır, geçmişteki bir olayı anlatır. İkinci konumdadır.",
      },
      {
        text: "Die Sonne schien bereits hell am Himmel, als sie das kleine Boot bestiegen.",
        translation:
          "Onlar küçük tekneye binerken güneş zaten gökyüzünde parlak bir şekilde parlıyordu.",
        explanation:
          "Fiil 'schien' (parlıyordu) Präteritum formundadır, geçmişteki bir durumu ifade eder. Yan cümlede 'bestiegen' (bindiler) fiili sonda yer alır.",
      },
      {
        text: "Der Professor erklärte ihnen den Weg zu der kleinen Insel.",
        translation: "Profesör onlara küçük adaya giden yolu açıkladı.",
        explanation:
          "Fiil 'erklärte' (açıkladı) Präteritum formundadır, geçmişteki bir eylemi belirtir. 'Ihnen' dativ nesnesidir.",
      },
      {
        text: "Marcus nahm das Ruder in die Hand und steuerte geschickt durch die leichten Wellen.",
        translation:
          "Marcus küreği eline aldı ve hafif dalgalar arasında ustalıkla yönlendirdi.",
        explanation:
          "Fiiller 'nahm' (aldı) ve 'steuerte' (yönlendirdi) Präteritum formundadır, geçmişteki eylemleri ifade eder. Her ikisi de ikinci konumdadır.",
      },
      {
        text: "Der Wind wehte sanft, und die Vögel kreisten über ihnen.",
        translation:
          "Rüzgar hafifçe esiyordu ve kuşlar üzerlerinde daireler çiziyordu.",
        explanation:
          "Fiiller 'wehte' (esiyordu) ve 'kreisten' (daireler çiziyordu) Präteritum formundadır, geçmişteki durumu anlatır. İkisi de ikinci konumdadır.",
      },
      {
        text: "Vor dreißig Jahren entdeckte ich in der Bibliothek des Klosters Reichenau einen Hinweis.",
        translation:
          "Otuz yıl önce Reichenau Manastırı kütüphanesinde bir ipucu keşfettim.",
        explanation:
          "Fiil 'entdeckte' (keşfettim) Präteritum formundadır, geçmişteki bir eylemi belirtir. İkinci konumdadır.",
      },
      {
        text: "Ich verbrachte damals Monate mit der Suche.",
        translation: "O zamanlar aylarca aramakla geçirdim.",
        explanation:
          "Fiil 'verbrachte' (geçirdim) Präteritum formundadır, geçmişteki bir süreci ifade eder. İkinci konumdadır.",
      },
      {
        text: "Bis ich sie endlich fand.",
        translation: "Ta ki onları sonunda bulana kadar.",
        explanation:
          "Fiil 'fand' (buldum) Präteritum formundadır, geçmişteki bir sonucu belirtir. İkinci konumdadır.",
      },
      {
        text: "Doch dann geschah etwas Unerwartetes – ich musste sie verstecken.",
        translation:
          "Ama sonra beklenmedik bir şey oldu – onları saklamak zorunda kaldım.",
        explanation:
          "Fiiller 'geschah' (oldu) ve 'musste' (zorunda kaldım) Präteritum formundadır, geçmişteki olayları ifade eder. İkisi de ikinci konumdadır.",
      },
      {
        text: "Lukas hörte aufmerksam zu.",
        translation: "Lukas dikkatle dinledi.",
        explanation:
          "Fiil 'hörte' (dinledi) Präteritum formundadır, geçmişteki bir eylemi belirtir. İkinci konumdadır.",
      },
      {
        text: "Der ernste Blick des Professors ließ keinen Zweifel daran, dass er die Wahrheit sprach.",
        translation:
          "Profesörün ciddi bakışı, gerçeği konuştuğuna dair hiçbir şü  bırakmadı.",
        explanation:
          "Fiil 'ließ' (bırakmadı) Präteritum formundadır, geçmişteki bir durumu ifade eder. Yan cümlede 'sprach' (konuştu) fiili sonda yer alır.",
      },
      {
        text: "Ich habe diese Geschichte noch nie jemandem erzählt.",
        translation: "Bu hikayeyi daha önce hiç kimseye anlatmadım.",
        explanation:
          "Fiil 'habe ... erzählt' Perfekt formundadır, geçmişteki tamamlanmış bir eylemi ifade eder. 'Habe' ikinci konumdadır.",
      },
      {
        text: "Nur Marcus hat über die Jahre von meinen Forschungen erfahren.",
        translation:
          "Yıllar boyunca sadece Marcus araştırmalarımdan haberdar oldu.",
        explanation:
          "Fiil 'hat ... erfahren' Perfekt formundadır, geçmişteki bir süreci ifade eder. 'Hat' ikinci konumdadır.",
      },
      {
        text: "Lukas war erstaunt, dass sein Freund ihm nie davon berichtet hat.",
        translation:
          "Lukas, arkadaşının ona bundan hiç bahsetmediğine şaşırdı.",
        explanation:
          "Fiil 'war' Präteritum, yan cümlede 'hat ... berichtet' Perfekt formundadır, geçmişteki bir durumu ve tamamlanmış bir eylemi ifade eder.",
      },
      {
        text: "Wir haben es für besser gehalten, dich erst jetzt einzuweihen.",
        translation: "Seni şimdi bilgilendirmeyi daha iyi bulduk.",
        explanation:
          "Fiil 'haben ... gehalten' Perfekt formundadır, geçmişteki bir kararı ifade eder. 'Haben' ikinci konumdadır.",
      },
      {
        text: "Die kleine Gruppe ist inzwischen an der Insel angekommen.",
        translation: "Küçük grup bu arada adaya varmıştı.",
        explanation:
          "Fiil 'ist ... angekommen' Perfekt formundadır, geçmişteki tamamlanmış bir eylemi ifade eder. 'Ist' ikinci konumdadır.",
      },
      {
        text: "Hier habe ich vor Jahren die Nacht verbracht und die Dokumente versteckt.",
        translation:
          "Burada yıllar önce geceyi geçirdim ve belgeleri sakladım.",
        explanation:
          "Fiiller 'habe ... verbracht' ve 'versteckt' Perfekt formundadır, geçmişteki tamamlanmış eylemleri ifade eder. 'Habe' ikinci konumdadır.",
      },
      {
        text: "Bevor sie auf der Insel ankamen, hatte Lukas schon viel über die mittelalterliche Geschichte gelernt.",
        translation:
          "Adaya varmadan önce Lukas ortaçağ tarihi hakkında çok şey öğrenmişti.",
        explanation:
          "Fiil 'hatte ... gelernt' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir eylemi ifade eder. 'Hatte' ikinci konumdadır.",
      },
      {
        text: "Der Professor hatte ihm während der Bootsfahrt von den alten Klöstern erzählt.",
        translation:
          "Profesör ona tekne yolculuğu sırasında eski manastırlardan bahsetmişti.",
        explanation:
          "Fiil 'hatte ... erzählt' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir eylemi ifade eder. 'Hatte' ikinci konumdadır.",
      },
      {
        text: "Marcus hatte diese Geschichten bereits als Kind gehört.",
        translation: "Marcus bu hikayeleri çocukken zaten duymuştu.",
        explanation:
          "Fiil 'hatte ... gehört' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir eylemi ifade eder. 'Hatte' ikinci konumdadır.",
      },
      {
        text: "Die Dokumente waren ursprünglich Teil einer größeren Sammlung gewesen.",
        translation: "Belgeler aslen daha büyük bir koleksiyonun parçasıydı.",
        explanation:
          "Fiil 'waren ... gewesen' Plusquamperfekt formundadır, geçmişteki bir durumdan önceki bir durumu ifade eder. 'Waren' ikinci konumdadır.",
      },
      {
        text: "Ich hatte nie damit gerechnet, dass meine Forschungen mich hierher führen würden.",
        translation:
          "Araştırmalarımın beni buraya getireceğini hiç beklememiştim.",
        explanation:
          "Fiil 'hatte ... gerechnet' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir beklentiyi ifade eder. 'Hatte' ikinci konumdadır.",
      },
    ],
  },
  {
    title: "2. Besondere Perfektformen: Modalverben und sehen, hören, lassen",
    sentences: [
      {
        text: "Als Student habe ich die alten Pergamente zum ersten Mal sehen können.",
        translation: "Öğrenciyken eski parşömenleri ilk kez görebildim.",
        explanation:
          "Fiil 'habe ... können' Perfekt formunda, modal fiil 'können' ile birlikte. 'Sehen' mastar olarak kullanılır, geçmişteki bir yeteneği ifade eder.",
      },
      {
        text: "Damals hat mir niemand glauben wollen, dass sie von historischer Bedeutung sind.",
        translation:
          "O zamanlar kimse onların tarihi önemine inanmak istemedi.",
        explanation:
          "Fiil 'hat ... wollen' Perfekt formunda, modal fiil 'wollen' ile birlikte. 'Glauben' mastar olarak kullanılır, geçmişteki bir isteksizliği ifade eder.",
      },
      {
        text: "Der Professor hat mir oft erzählen müssen, wie er nächtelang in den Archiven arbeiten müssen hat.",
        translation:
          "Profesör bana sık sık, gecelerce arşivlerde çalışmak zorunda kaldığını anlatmak zorunda kaldı.",
        explanation:
          "Fiil 'hat ... müssen' Perfekt formunda, iki kez modal fiil 'müssen' ile birlikte. 'Erzählen' ve 'arbeiten' mastar olarak kullanılır, geçmişteki zorunluluğu ifade eder.",
      },
      {
        text: "In der Klosterbibliothek habe ich einmal einen alten Mönch eine seltsame Melodie singen hören.",
        translation:
          "Manastır kütüphanesinde bir keresinde yaşlı bir keşişin garip bir melodi söylediğini duydum.",
        explanation:
          "Fiil 'habe ... hören' Perfekt formunda, algı fiili 'hören' ile birlikte. 'Singen' mastar olarak kullanılır, geçmişteki bir algıyı ifade eder.",
      },
      {
        text: "Diese Melodie hat mir später den Weg zeigen sollen.",
        translation: "Bu melodi daha sonra bana yolu gösterecekti.",
        explanation:
          "Fiil 'hat ... sollen' Perfekt formunda, modal fiil 'sollen' ile birlikte. 'Zeigen' mastar olarak kullanılır, geçmişteki bir amacı ifade eder.",
      },
      {
        text: "Haben Sie die Originaldokumente jemals fotografieren lassen?",
        translation: "Orijinal belgeleri hiç fotoğraflattınız mı?",
        explanation:
          "Fiil 'haben ... lassen' Perfekt formunda, causative fiil 'lassen' ile birlikte. 'Fotografieren' mastar olarak kullanılır, geçmişteki bir eylemi sorgular.",
      },
      {
        text: "Ich habe damals niemandem trauen dürfen.",
        translation: "O zamanlar kimseye güvenmemeliydim.",
        explanation:
          "Fiil 'habe ... dürfen' Perfekt formunda, modal fiil 'dürfen' ile birlikte. 'Trauen' mastar olarak kullanılır, geçmişteki bir izni ifade eder.",
      },
      {
        text: "Ich habe alles genau abzeichnen lassen.",
        translation: "Her şeyi tam olarak çizdirdim.",
        explanation:
          "Fiil 'habe ... lassen' Perfekt formunda, causative fiil 'lassen' ile birlikte. 'Abzeichnen' mastar olarak kullanılır, geçmişteki bir eylemi ifade eder.",
      },
      {
        text: "Der Professor hat mir die Kopien sehen lassen.",
        translation: "Profesör bana kopyaları gösterdi.",
        explanation:
          "Fiil 'hat ... lassen' Perfekt formunda, causative fiil 'lassen' ile birlikte. 'Sehen' mastar olarak kullanılır, geçmişteki bir eylemi ifade eder.",
      },
      {
        text: "Deshalb habe ich ihn unterstützen wollen.",
        translation: "Bu yüzden onu desteklemek istedim.",
        explanation:
          "Fiil 'habe ... wollen' Perfekt formunda, modal fiil 'wollen' ile birlikte. 'Unterstützen' mastar olarak kullanılır, geçmişteki bir isteği ifade eder.",
      },
    ],
  },
  {
    title: "3. Gebrauch von Zeiten der Vergangenheit",
    sentences: [
      {
        text: "Als sie tiefer in die Insel vordrangen, erzählte der Professor von seinen Entdeckungen.",
        translation:
          "Adaya daha derinlemesine ilerlediklerinde, profesör keşiflerinden bahsetti.",
        explanation:
          "Fiil 'erzählte' (bahsetti) Präteritum formundadır, geçmişteki bir anlatımı ifade eder. İkinci konumdadır.",
      },
      {
        text: "Ich fand die ersten Hinweise im Jahr 1985.",
        translation: "İlk ipuçlarını 1985 yılında buldum.",
        explanation:
          "Fiil 'fand' (buldum) Präteritum formundadır, geçmişteki bir eylemi belirtir. İkinci konumdadır.",
      },
      {
        text: "Damals arbeitete ich noch an der Universität Konstanz.",
        translation: "O zamanlar hâlâ Konstanz Üniversitesi'nde çalışıyordum.",
        explanation:
          "Fiil 'arbeitete' (çalışıyordum) Präteritum formundadır, geçmişteki bir durumu ifade eder. İkinci konumdadır.",
      },
      {
        text: "In jenem Sommer habe ich meine wichtigste Entdeckung gemacht.",
        translation: "O yaz en önemli keşfimi yaptım.",
        explanation:
          "Fiil 'habe ... gemacht' Perfekt formundadır, geçmişteki tamamlanmış bir eylemi vurgular. 'Habe' ikinci konumdadır.",
      },
      {
        text: "Ich bin durch Zufall auf einen verschlüsselten Text gestoßen.",
        translation: "Tesadüfen şifreli bir metne rastladım.",
        explanation:
          "Fiil 'bin ... gestoßen' Perfekt formundadır, geçmişteki tamamlanmış bir eylemi ifade eder. 'Bin' ikinci konumdadır.",
      },
      {
        text: "Bevor der Professor diesen Text entdeckt hatte, hatten viele Historiker die Existenz dieses Archivs nur für eine Legende gehalten.",
        translation:
          "Profesör bu metni keşfetmeden önce, birçok tarihçi bu arşivin varlığını sadece bir efsane sanmıştı.",
        explanation:
          "Fiiller 'hatte ... entdeckt' ve 'hatten ... gehalten' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki durumu ifade eder. 'Hatte' ve 'hatten' ikinci konumdadır.",
      },
      {
        text: "Hier versteckte ich die Dokumente vor genau fünfzehn Jahren.",
        translation: "Tam on beş yıl önce burada belgeleri sakladım.",
        explanation:
          "Fiil 'versteckte' (sakladım) Präteritum formundadır, geçmişteki bir eylemi belirtir. İkinci konumdadır.",
      },
      {
        text: "Ich hatte zuvor sichergestellt, dass der Ort trocken und geschützt war.",
        translation:
          "Daha önce buranın kuru ve korunaklı olduğundan emin olmuştum.",
        explanation:
          "Fiil 'hatte ... sichergestellt' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir eylemi ifade eder. 'Hatte' ikinci konumdadır.",
      },
      {
        text: "Seitdem bin ich nicht mehr hier gewesen.",
        translation: "O zamandan beri burada bulunmadım.",
        explanation:
          "Fiil 'bin ... gewesen' Perfekt formundadır, geçmişten bugüne kadar olan bir durumu ifade eder. 'Bin' ikinci konumdadır.",
      },
      {
        text: "Habt ihr beide jemals darüber nachgedacht, was in diesen Dokumenten stehen könnte?",
        translation:
          "İkiniz hiç bu belgelerde neler olabileceği hakkında düşündünüz mü?",
        explanation:
          "Fiil 'habt ... nachgedacht' Perfekt formundadır, geçmişteki bir düşünce sürecini sorgular. 'Habt' ikinci konumdadır.",
      },
      {
        text: "Wir haben oft darüber diskutiert.",
        translation: "Bunu sık sık tartıştık.",
        explanation:
          "Fiil 'haben ... diskutiert' Perfekt formundadır, geçmişteki tekrarlanan bir eylemi ifade eder. 'Haben' ikinci konumdadır.",
      },
      {
        text: "Der Professor vermutete, dass sie ein Geheimnis enthüllen.",
        translation:
          "Profesör, onların bir sırrı açığa çıkaracağını tahmin etti.",
        explanation:
          "Fiil 'vermutete' (tahmin etti) Präteritum formundadır, geçmişteki bir tahmini ifade eder. Yan cümlede fiil sonda yer alır.",
      },
    ],
  },
  {
    title: "4. Vermutung und Zukunft mit dem Futur",
    sentences: [
      {
        text: "Was werden wir in den Dokumenten finden?",
        translation: "Belgelerde ne bulacağız?",
        explanation:
          "Fiil 'werden ... finden' Futur I formundadır, gelecekteki bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Die Pergamente werden uns Aufschluss über die geheimen Tunnel geben.",
        translation: "Parşömenler bize gizli tüneller hakkında bilgi verecek.",
        explanation:
          "Fiil 'werden ... geben' Futur I formundadır, gelecekteki bir sonucu ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Morgen werden wir bereits mit der Übersetzung beginnen.",
        translation: "Yarın zaten çeviriye başlayacağız.",
        explanation:
          "Fiil 'werden ... beginnen' Futur I formundadır, yakın gelecekteki bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Ihr werdet erstaunt sein, was diese alten Texte offenbaren.",
        translation:
          "Bu eski metinlerin neler ortaya koyacağına şaşıracaksınız.",
        explanation:
          "Fiil 'werdet ... sein' Futur I formundadır, gelecekteki bir durumu ifade eder. 'Werdet' ikinci konumdadır.",
      },
      {
        text: "Der Schatz wird wohl in einer der Höhlen versteckt sein.",
        translation: "Hazine muhtemelen mağaralardan birinde saklı olacak.",
        explanation:
          "Fiil 'wird ... sein' Futur I formundadır, 'wohl' ile birlikte bir tahmini ifade eder. 'Wird' ikinci konumdadır.",
      },
      {
        text: "Er wird vermutlich aus Gold und wertvollen Manuskripten bestehen.",
        translation: "Muhtemelen altın ve değerli el yazmalarından oluşacak.",
        explanation:
          "Fiil 'wird ... bestehen' Futur I formundadır, 'vermutlich' ile birlikte bir tahmini ifade eder. 'Wird' ikinci konumdadır.",
      },
      {
        text: "Du wirst wohl vom großen Reichtum träumen.",
        translation: "Muhtemelen büyük bir zenginlik hayali kuruyorsun.",
        explanation:
          "Fiil 'wirst ... träumen' Futur I formundadır, 'wohl' ile birlikte bir tahmini ifade eder. 'Wirst' ikinci konumdadır.",
      },
      {
        text: "Die wahre Bedeutung wird eine andere sein.",
        translation: "Gerçek anlam başka olacak.",
        explanation:
          "Fiil 'wird ... sein' Futur I formundadır, gelecekteki bir durumu ifade eder. 'Wird' ikinci konumdadır.",
      },
      {
        text: "Die Einheimischen werden nichts von diesem Ort wissen.",
        translation: "Yerliler bu yer hakkında hiçbir şey bilmeyecek.",
        explanation:
          "Fiil 'werden ... wissen' Futur I formundadır, bir tahmini ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Sonst wird es hier nicht so verlassen sein.",
        translation: "Aksi takdirde burası bu kadar terk edilmiş olmaz.",
        explanation:
          "Fiil 'wird ... sein' Futur I formundadır, bir tahmini ifade eder. 'Wird' ikinci konumdadır.",
      },
      {
        text: "Bis heute Abend werden wir alle Dokumente gesichtet haben.",
        translation: "Bu akşam tüm belgeleri gözden geçirmiş olacağız.",
        explanation:
          "Fiil 'werden ... haben' Futur II formundadır, gelecekte tamamlanmış bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Bis zum Ende der Woche werden wir die wichtigsten Passagen übersetzt haben.",
        translation:
          "Hafta sonuna kadar en önemli pasajları çevirmiş olacağız.",
        explanation:
          "Fiil 'werden ... haben' Futur II formundadır, gelecekte tamamlanmış bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Wenn wir zurückkehren, werden die anderen Wissenschaftler überrascht sein.",
        translation: "Döndüğümüzde diğer bilim insanları şaşıracak.",
        explanation:
          "Fiil 'werden ... sein' Futur I formundadır, gelecekteki bir durumu ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Bis dahin wird die Welt noch nichts von unserer Entdeckung erfahren haben.",
        translation: "O zamana kadar dünya keşfimizden haberdar olmayacak.",
        explanation:
          "Fiil 'wird ... haben' Futur II formundadır, gelecekte tamamlanmamış bir durumu ifade eder. 'Wird' ikinci konumdadır.",
      },
    ],
  },
  {
    title: "5. Überblick über die Zeiten im Deutschen",
    sentences: [
      {
        text: "Mit zitternden Händen zog der Professor eine wasserdichte Metallschatulle aus der Höhlung.",
        translation:
          "Titreyen ellerle profesör, kayanın oyuğundan su geçirmez bir metal kutu çıkardı.",
        explanation:
          "Fiil 'zog' (çıkardı) Präteritum formundadır, geçmişteki bir eylemi anlatır. İkinci konumdadır.",
      },
      {
        text: "Eine historische Entdeckung lag vor ihnen.",
        translation: "Onların önünde tarihi bir keşif yatıyordu.",
        explanation:
          "Fiil 'lag' (yatıyordu) Präteritum formundadır, geçmişteki bir durumu ifade eder. İkinci konumdadır.",
      },
      {
        text: "Ich habe all die Jahre darauf gewartet, diese Dokumente wieder in den Händen zu halten.",
        translation: "Bunca yıl bu belgeleri tekrar elimde tutmayı bekledim.",
        explanation:
          "Fiil 'habe ... gewartet' Perfekt formundadır, geçmişten bugüne uzanan bir eylemi ifade eder. 'Habe' ikinci konumdadır.",
      },
      {
        text: "Bevor sie die Schatulle öffneten, hatte der Professor bereits spezielle Handschuhe angezogen.",
        translation:
          "Kutuyu açmadan önce profesör zaten özel eldivenler giymişti.",
        explanation:
          "Fiil 'hatte ... angezogen' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir eylemi ifade eder. 'Hatte' ikinci konumdadır.",
      },
      {
        text: "Wir werden diese Dokumente sorgfältig untersuchen.",
        translation: "Bu belgeleri dikkatle inceleyeceğiz.",
        explanation:
          "Fiil 'werden ... untersuchen' Futur I formundadır, gelecekteki bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Bis zum Ende des Jahres werden wir alle Texte entschlüsselt haben.",
        translation: "Yıl sonuna kadar tüm metinleri çözmüş olacağız.",
        explanation:
          "Fiil 'werden ... haben' Futur II formundadır, gelecekte tamamlanmış bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Während sie vorsichtig das erste Pergament entfalten, halten alle drei den Atem an.",
        translation:
          "İlk parşömeni dikkatlice açarken, üçü de nefeslerini tutuyor.",
        explanation:
          "Fiil 'halten' (tutuyor) Präsens formundadır, şu anki bir eylemi ifade eder. İkinci konumdadır.",
      },
      {
        text: "Hier steht etwas in einer alten Geheimschrift, die ich kenne.",
        translation:
          "Burada bildiğim eski bir gizli yazıyla yazılmış bir şey var.",
        explanation:
          "Fiil 'steht' (var) Präsens formundadır, mevcut bir durumu ifade eder. İkinci konumdadır.",
      },
    ],
  },
  {
    title: "6. Zeiten – Eine gemeinsame Geschichte erzählen",
    sentences: [
      {
        text: "Die drei Abenteurer saßen bis spät in die Nacht im Hotelzimmer.",
        translation:
          "Üç maceraperest gece geç saatlere kadar otel odasında oturdu.",
        explanation:
          "Fiil 'saßen' (oturdu) Präteritum formundadır, geçmişteki bir durumu ifade eder. İkinci konumdadır.",
      },
      {
        text: "Der Professor hatte bereits vor Jahren einen Schlüssel für die seltsame Codierung entwickelt.",
        translation:
          "Profesör yıllar önce garip kodlama için bir anahtar geliştirmişti.",
        explanation:
          "Fiil 'hatte ... entwickelt' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir eylemi ifade eder. 'Hatte' ikinci konumdadır.",
      },
      {
        text: "Ich habe so etwas noch nie gesehen.",
        translation: "Böyle bir şeyi daha önce hiç görmedim.",
        explanation:
          "Fiil 'habe ... gesehen' Perfekt formundadır, geçmişteki bir deneyimi ifade eder. 'Habe' ikinci konumdadır.",
      },
      {
        text: "Marcus hat plötzlich aufgeregt ausgerufen: 'Dort unten muss ein verborgener Raum sein!'",
        translation:
          "Marcus birden heyecanla bağırdı: 'Orada gizli bir oda olmalı!'",
        explanation:
          "Fiil 'hat ... ausgerufen' Perfekt formundadır, geçmişteki ani bir eylemi ifade eder. 'Hat' ikinci konumdadır.",
      },
      {
        text: "Wir werden morgen früh aufbrechen und diesen Ort finden.",
        translation: "Yarın sabah yola çıkacağız ve bu yeri bulacağız.",
        explanation:
          "Fiil 'werden ... aufbrechen' Futur I formundadır, gelecekteki bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Bis morgen Abend werden wir das Geheimnis gelüftet haben.",
        translation: "Yarın akşam sırrı çözmüş olacağız.",
        explanation:
          "Fiil 'werden ... haben' Futur II formundadır, gelecekte tamamlanmış bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Als Lukas am nächsten Morgen erwachte, hatte der Professor bereits alle Vorbereitungen getroffen.",
        translation:
          "Lukas ertesi sabah uyandığında, profesör zaten tüm hazırlıkları yapmıştı.",
        explanation:
          "Fiil 'erwachte' Präteritum, 'hatte ... getroffen' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir eylemi ifade eder.",
      },
      {
        text: "Ich bin schon um fünf Uhr aufgestanden.",
        translation: "Sabah beşte zaten kalktım.",
        explanation:
          "Fiil 'bin ... aufgestanden' Perfekt formundadır, geçmişteki tamamlanmış bir eylemi ifade eder. 'Bin' ikinci konumdadır.",
      },
      {
        text: "Die Tunnel werden wohl seit Jahrhunderten nicht mehr betreten worden sein.",
        translation: "Tüneller yüzyıllardır girilmemiş olacak.",
        explanation:
          "Fiil 'werden ... sein' Futur II formundadır, 'wohl' ile birlikte bir tahmini ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Ich habe alles mitnehmen lassen, was wir brauchen könnten.",
        translation: "İhtiyacımız olabilecek her şeyi aldırdım.",
        explanation:
          "Fiil 'habe ... lassen' Perfekt formunda, causative fiil 'lassen' ile birlikte. 'Mitnehmen' mastar, geçmişteki bir eylemi ifade eder.",
      },
      {
        text: "Damals hat mir niemand glauben wollen.",
        translation: "O zamanlar kimse bana inanmak istemedi.",
        explanation:
          "Fiil 'hat ... wollen' Perfekt formunda, modal fiil 'wollen' ile birlikte. 'Glauben' mastar, geçmişteki bir isteksizliği ifade eder.",
      },
      {
        text: "Hier muss es sein.",
        translation: "Burası olmalı.",
        explanation:
          "Fiil 'muss' (olmalı) Präsens formundadır, bir tahmini ifade eder. İkinci konumdadır.",
      },
      {
        text: "Unter diesem Felsen wird der Eingang verborgen sein.",
        translation: "Bu kayanın altında giriş gizli olacak.",
        explanation:
          "Fiil 'wird ... sein' Futur I formundadır, bir tahmini ifade eder. 'Wird' ikinci konumdadır.",
      },
      {
        text: "Mit vereinten Kräften schoben sie den schweren Stein beiseite.",
        translation: "Birleşik güçlerle ağır taşı kenara ittiler.",
        explanation:
          "Fiil 'schoben' (ittiler) Präteritum formundadır, geçmişteki bir eylemi ifade eder. İkinci konumdadır.",
      },
      {
        text: "Ein kühler Luftzug kam ihnen entgegen.",
        translation: "Soğuk bir hava akımı onlara doğru geldi.",
        explanation:
          "Fiil 'kam' (geldi) Präteritum formundadır, geçmişteki bir durumu ifade eder. İkinci konumdadır.",
      },
      {
        text: "Ich werde vorangehen.",
        translation: "Önden gideceğim.",
        explanation:
          "Fiil 'werde ... vorangehen' Futur I formundadır, gelecekteki bir eylemi ifade eder. 'Werde' ikinci konumdadır.",
      },
      {
        text: "Wenn wir die Kammer erreicht haben werden, werden wir verstehen.",
        translation: "Odaya ulaştığımızda, anlayacağız.",
        explanation:
          "Fiil 'werden ... haben' Futur II, 'werden ... verstehen' Futur I formundadır, gelecekte tamamlanmış bir eylemi ve sonucu ifade eder.",
      },
      {
        text: "Vor ihnen lag ein vollständig erhaltenes unterirdisches Archiv.",
        translation: "Önlerinde tamamen korunmuş bir yeraltı arşivi yatıyordu.",
        explanation:
          "Fiil 'lag' (yatıyordu) Präteritum formundadır, geçmişteki bir durumu ifade eder. İkinci konumdadır.",
      },
      {
        text: "Wir haben tatsächlich gefunden, wonach Generationen von Forschern vergeblich gesucht haben.",
        translation:
          "Gerçekten, nesiller boyu araştırmacıların boşuna aradığı şeyi bulduk.",
        explanation:
          "Fiil 'haben ... gefunden' Perfekt formundadır, geçmişteki tamamlanmış bir eylemi ifade eder. 'Haben' ikinci konumdadır.",
      },
      {
        text: "Dies wird die Geschichte des Bodensees neu schreiben.",
        translation: "Bu, Bodensee tarihini yeniden yazacak.",
        explanation:
          "Fiil 'wird ... schreiben' Futur I formundadır, gelecekteki bir sonucu ifade eder. 'Wird' ikinci konumdadır.",
      },
      {
        text: "Lukas drehte sich lächelnd zu seinen Gefährten um.",
        translation: "Lukas gülümseyerek yoldaşlarına döndü.",
        explanation:
          "Fiil 'drehte' (döndü) Präteritum formundadır, geçmişteki bir eylemi ifade eder. İkinci konumdadır.",
      },
      {
        text: "Morgen werden wir mit der systematischen Dokumentation begonnen haben.",
        translation:
          "Yarın sistematik belgeleme çalışmalarına başlamış olacağız.",
        explanation:
          "Fiil 'werden ... haben' Futur II formundadır, gelecekte tamamlanmış bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "In einem Jahr werden wir der Welt von dieser Entdeckung berichten.",
        translation: "Bir yıl içinde dünyaya bu keşfi bildireceğiz.",
        explanation:
          "Fiil 'werden ... berichten' Futur I formundadır, gelecekteki bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "So begann für die drei Freunde ein Abenteuer.",
        translation: "Böylece üç arkadaş için bir macera başladı.",
        explanation:
          "Fiil 'begann' (başladı) Präteritum formundadır, geçmişteki bir başlangıcı ifade eder. İkinci konumdadır.",
      },
      {
        text: "Die geheimnisvolle Begegnung am Bodensee hatte zu einer Entdeckung geführt.",
        translation: "Bodensee'deki gizemli karşılaşma bir keşfe yol açmıştı.",
        explanation:
          "Fiil 'hatte ... geführt' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir sonucu ifade eder. 'Hatte' ikinci konumdadır.",
      },
      {
        text: "Die ihr Leben für immer verändern wird.",
        translation: "Bu, hayatlarını sonsuza dek değiştirecek.",
        explanation:
          "Fiil 'wird ... verändern' Futur I formundadır, gelecekteki bir sonucu ifade eder. 'Wird' ikinci konumdadır.",
      },
    ],
  },
  {
    title: "1. Bildung der Vergangenheitszeiten",
    sentences: [
      {
        text: "Am frühen Morgen brach Lukas mit Professor Eichendorff und Marcus zum See auf.",
        translation:
          "Sabah erken saatlerde Lukas, Profesör Eichendorff ve Marcus ile göle doğru yola çıktı.",
        explanation:
          "Fiil 'brach' (yola çıktı) Präteritum formundadır, geçmişteki bir olayı anlatır. İkinci konumdadır.",
      },
      {
        text: "Die Sonne schien bereits hell am Himmel, als sie das kleine Boot bestiegen.",
        translation:
          "Onlar küçük tekneye binerken güneş zaten gökyüzünde parlak bir şekilde parlıyordu.",
        explanation:
          "Fiil 'schien' (parlıyordu) Präteritum formundadır, geçmişteki bir durumu ifade eder. Yan cümlede 'bestiegen' (bindiler) fiili sonda yer alır.",
      },
      {
        text: "Der Professor erklärte ihnen den Weg zu der kleinen Insel.",
        translation: "Profesör onlara küçük adaya giden yolu açıkladı.",
        explanation:
          "Fiil 'erklärte' (açıkladı) Präteritum formundadır, geçmişteki bir eylemi belirtir. 'Ihnen' dativ nesnesidir.",
      },
      {
        text: "Marcus nahm das Ruder in die Hand und steuerte geschickt durch die leichten Wellen.",
        translation:
          "Marcus küreği eline aldı ve hafif dalgalar arasında ustalıkla yönlendirdi.",
        explanation:
          "Fiiller 'nahm' (aldı) ve 'steuerte' (yönlendirdi) Präteritum formundadır, geçmişteki eylemleri ifade eder. Her ikisi de ikinci konumdadır.",
      },
      {
        text: "Der Wind wehte sanft, und die Vögel kreisten über ihnen.",
        translation:
          "Rüzgar hafifçe esiyordu ve kuşlar üzerlerinde daireler çiziyordu.",
        explanation:
          "Fiiller 'wehte' (esiyordu) ve 'kreisten' (daireler çiziyordu) Präteritum formundadır, geçmişteki durumu anlatır. İkisi de ikinci konumdadır.",
      },
      {
        text: "Vor dreißig Jahren entdeckte ich in der Bibliothek des Klosters Reichenau einen Hinweis.",
        translation:
          "Otuz yıl önce Reichenau Manastırı kütüphanesinde bir ipucu keşfettim.",
        explanation:
          "Fiil 'entdeckte' (keşfettim) Präteritum formundadır, geçmişteki bir eylemi belirtir. İkinci konumdadır.",
      },
      {
        text: "Ich verbrachte damals Monate mit der Suche.",
        translation: "O zamanlar aylarca aramakla geçirdim.",
        explanation:
          "Fiil 'verbrachte' (geçirdim) Präteritum formundadır, geçmişteki bir süreci ifade eder. İkinci konumdadır.",
      },
      {
        text: "Bis ich sie endlich fand.",
        translation: "Ta ki onları sonunda bulana kadar.",
        explanation:
          "Fiil 'fand' (buldum) Präteritum formundadır, geçmişteki bir sonucu belirtir. İkinci konumdadır.",
      },
      {
        text: "Doch dann geschah etwas Unerwartetes – ich musste sie verstecken.",
        translation:
          "Ama sonra beklenmedik bir şey oldu – onları saklamak zorunda kaldım.",
        explanation:
          "Fiiller 'geschah' (oldu) ve 'musste' (zorunda kaldım) Präteritum formundadır, geçmişteki olayları ifade eder. İkisi de ikinci konumdadır.",
      },
      {
        text: "Lukas hörte aufmerksam zu.",
        translation: "Lukas dikkatle dinledi.",
        explanation:
          "Fiil 'hörte' (dinledi) Präteritum formundadır, geçmişteki bir eylemi belirtir. İkinci konumdadır.",
      },
      {
        text: "Der ernste Blick des Professors ließ keinen Zweifel daran, dass er die Wahrheit sprach.",
        translation:
          "Profesörün ciddi bakışı, gerçeği konuştuğuna dair hiçbir şü  bırakmadı.",
        explanation:
          "Fiil 'ließ' (bırakmadı) Präteritum formundadır, geçmişteki bir durumu ifade eder. Yan cümlede 'sprach' (konuştu) fiili sonda yer alır.",
      },
      {
        text: "Ich habe diese Geschichte noch nie jemandem erzählt.",
        translation: "Bu hikayeyi daha önce hiç kimseye anlatmadım.",
        explanation:
          "Fiil 'habe ... erzählt' Perfekt formundadır, geçmişteki tamamlanmış bir eylemi ifade eder. 'Habe' ikinci konumdadır.",
      },
      {
        text: "Nur Marcus hat über die Jahre von meinen Forschungen erfahren.",
        translation:
          "Yıllar boyunca sadece Marcus araştırmalarımdan haberdar oldu.",
        explanation:
          "Fiil 'hat ... erfahren' Perfekt formundadır, geçmişteki bir süreci ifade eder. 'Hat' ikinci konumdadır.",
      },
      {
        text: "Lukas war erstaunt, dass sein Freund ihm nie davon berichtet hat.",
        translation:
          "Lukas, arkadaşının ona bundan hiç bahsetmediğine şaşırdı.",
        explanation:
          "Fiil 'war' Präteritum, yan cümlede 'hat ... berichtet' Perfekt formundadır, geçmişteki bir durumu ve tamamlanmış bir eylemi ifade eder.",
      },
      {
        text: "Wir haben es für besser gehalten, dich erst jetzt einzuweihen.",
        translation: "Seni şimdi bilgilendirmeyi daha iyi bulduk.",
        explanation:
          "Fiil 'haben ... gehalten' Perfekt formundadır, geçmişteki bir kararı ifade eder. 'Haben' ikinci konumdadır.",
      },
      {
        text: "Die kleine Gruppe ist inzwischen an der Insel angekommen.",
        translation: "Küçük grup bu arada adaya varmıştı.",
        explanation:
          "Fiil 'ist ... angekommen' Perfekt formundadır, geçmişteki tamamlanmış bir eylemi ifade eder. 'Ist' ikinci konumdadır.",
      },
      {
        text: "Hier habe ich vor Jahren die Nacht verbracht und die Dokumente versteckt.",
        translation:
          "Burada yıllar önce geceyi geçirdim ve belgeleri sakladım.",
        explanation:
          "Fiiller 'habe ... verbracht' ve 'versteckt' Perfekt formundadır, geçmişteki tamamlanmış eylemleri ifade eder. 'Habe' ikinci konumdadır.",
      },
      {
        text: "Bevor sie auf der Insel ankamen, hatte Lukas schon viel über die mittelalterliche Geschichte gelernt.",
        translation:
          "Adaya varmadan önce Lukas ortaçağ tarihi hakkında çok şey öğrenmişti.",
        explanation:
          "Fiil 'hatte ... gelernt' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir eylemi ifade eder. 'Hatte' ikinci konumdadır.",
      },
      {
        text: "Der Professor hatte ihm während der Bootsfahrt von den alten Klöstern erzählt.",
        translation:
          "Profesör ona tekne yolculuğu sırasında eski manastırlardan bahsetmişti.",
        explanation:
          "Fiil 'hatte ... erzählt' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir eylemi ifade eder. 'Hatte' ikinci konumdadır.",
      },
      {
        text: "Marcus hatte diese Geschichten bereits als Kind gehört.",
        translation: "Marcus bu hikayeleri çocukken zaten duymuştu.",
        explanation:
          "Fiil 'hatte ... gehört' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir eylemi ifade eder. 'Hatte' ikinci konumdadır.",
      },
      {
        text: "Die Dokumente waren ursprünglich Teil einer größeren Sammlung gewesen.",
        translation: "Belgeler aslen daha büyük bir koleksiyonun parçasıydı.",
        explanation:
          "Fiil 'waren ... gewesen' Plusquamperfekt formundadır, geçmişteki bir durumdan önceki bir durumu ifade eder. 'Waren' ikinci konumdadır.",
      },
      {
        text: "Ich hatte nie damit gerechnet, dass meine Forschungen mich hierher führen würden.",
        translation:
          "Araştırmalarımın beni buraya getireceğini hiç beklememiştim.",
        explanation:
          "Fiil 'hatte ... gerechnet' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir beklentiyi ifade eder. 'Hatte' ikinci konumdadır.",
      },
    ],
  },
  {
    title: "2. Besondere Perfektformen: Modalverben und sehen, hören, lassen",
    sentences: [
      {
        text: "Als Student habe ich die alten Pergamente zum ersten Mal sehen können.",
        translation: "Öğrenciyken eski parşömenleri ilk kez görebildim.",
        explanation:
          "Fiil 'habe ... können' Perfekt formunda, modal fiil 'können' ile birlikte. 'Sehen' mastar olarak kullanılır, geçmişteki bir yeteneği ifade eder.",
      },
      {
        text: "Damals hat mir niemand glauben wollen, dass sie von historischer Bedeutung sind.",
        translation:
          "O zamanlar kimse onların tarihi önemine inanmak istemedi.",
        explanation:
          "Fiil 'hat ... wollen' Perfekt formunda, modal fiil 'wollen' ile birlikte. 'Glauben' mastar olarak kullanılır, geçmişteki bir isteksizliği ifade eder.",
      },
      {
        text: "Der Professor hat mir oft erzählen müssen, wie er nächtelang in den Archiven arbeiten müssen hat.",
        translation:
          "Profesör bana sık sık, gecelerce arşivlerde çalışmak zorunda kaldığını anlatmak zorunda kaldı.",
        explanation:
          "Fiil 'hat ... müssen' Perfekt formunda, iki kez modal fiil 'müssen' ile birlikte. 'Erzählen' ve 'arbeiten' mastar olarak kullanılır, geçmişteki zorunluluğu ifade eder.",
      },
      {
        text: "In der Klosterbibliothek habe ich einmal einen alten Mönch eine seltsame Melodie singen hören.",
        translation:
          "Manastır kütüphanesinde bir keresinde yaşlı bir keşişin garip bir melodi söylediğini duydum.",
        explanation:
          "Fiil 'habe ... hören' Perfekt formunda, algı fiili 'hören' ile birlikte. 'Singen' mastar olarak kullanılır, geçmişteki bir algıyı ifade eder.",
      },
      {
        text: "Diese Melodie hat mir später den Weg zeigen sollen.",
        translation: "Bu melodi daha sonra bana yolu gösterecekti.",
        explanation:
          "Fiil 'hat ... sollen' Perfekt formunda, modal fiil 'sollen' ile birlikte. 'Zeigen' mastar olarak kullanılır, geçmişteki bir amacı ifade eder.",
      },
      {
        text: "Haben Sie die Originaldokumente jemals fotografieren lassen?",
        translation: "Orijinal belgeleri hiç fotoğraflattınız mı?",
        explanation:
          "Fiil 'haben ... lassen' Perfekt formunda, causative fiil 'lassen' ile birlikte. 'Fotografieren' mastar olarak kullanılır, geçmişteki bir eylemi sorgular.",
      },
      {
        text: "Ich habe damals niemandem trauen dürfen.",
        translation: "O zamanlar kimseye güvenmemeliydim.",
        explanation:
          "Fiil 'habe ... dürfen' Perfekt formunda, modal fiil 'dürfen' ile birlikte. 'Trauen' mastar olarak kullanılır, geçmişteki bir izni ifade eder.",
      },
      {
        text: "Ich habe alles genau abzeichnen lassen.",
        translation: "Her şeyi tam olarak çizdirdim.",
        explanation:
          "Fiil 'habe ... lassen' Perfekt formunda, causative fiil 'lassen' ile birlikte. 'Abzeichnen' mastar olarak kullanılır, geçmişteki bir eylemi ifade eder.",
      },
      {
        text: "Der Professor hat mir die Kopien sehen lassen.",
        translation: "Profesör bana kopyaları gösterdi.",
        explanation:
          "Fiil 'hat ... lassen' Perfekt formunda, causative fiil 'lassen' ile birlikte. 'Sehen' mastar olarak kullanılır, geçmişteki bir eylemi ifade eder.",
      },
      {
        text: "Deshalb habe ich ihn unterstützen wollen.",
        translation: "Bu yüzden onu desteklemek istedim.",
        explanation:
          "Fiil 'habe ... wollen' Perfekt formunda, modal fiil 'wollen' ile birlikte. 'Unterstützen' mastar olarak kullanılır, geçmişteki bir isteği ifade eder.",
      },
    ],
  },
  {
    title: "3. Gebrauch von Zeiten der Vergangenheit",
    sentences: [
      {
        text: "Als sie tiefer in die Insel vordrangen, erzählte der Professor von seinen Entdeckungen.",
        translation:
          "Adaya daha derinlemesine ilerlediklerinde, profesör keşiflerinden bahsetti.",
        explanation:
          "Fiil 'erzählte' (bahsetti) Präteritum formundadır, geçmişteki bir anlatımı ifade eder. İkinci konumdadır.",
      },
      {
        text: "Ich fand die ersten Hinweise im Jahr 1985.",
        translation: "İlk ipuçlarını 1985 yılında buldum.",
        explanation:
          "Fiil 'fand' (buldum) Präteritum formundadır, geçmişteki bir eylemi belirtir. İkinci konumdadır.",
      },
      {
        text: "Damals arbeitete ich noch an der Universität Konstanz.",
        translation: "O zamanlar hâlâ Konstanz Üniversitesi'nde çalışıyordum.",
        explanation:
          "Fiil 'arbeitete' (çalışıyordum) Präteritum formundadır, geçmişteki bir durumu ifade eder. İkinci konumdadır.",
      },
      {
        text: "In jenem Sommer habe ich meine wichtigste Entdeckung gemacht.",
        translation: "O yaz en önemli keşfimi yaptım.",
        explanation:
          "Fiil 'habe ... gemacht' Perfekt formundadır, geçmişteki tamamlanmış bir eylemi vurgular. 'Habe' ikinci konumdadır.",
      },
      {
        text: "Ich bin durch Zufall auf einen verschlüsselten Text gestoßen.",
        translation: "Tesadüfen şifreli bir metne rastladım.",
        explanation:
          "Fiil 'bin ... gestoßen' Perfekt formundadır, geçmişteki tamamlanmış bir eylemi ifade eder. 'Bin' ikinci konumdadır.",
      },
      {
        text: "Bevor der Professor diesen Text entdeckt hatte, hatten viele Historiker die Existenz dieses Archivs nur für eine Legende gehalten.",
        translation:
          "Profesör bu metni keşfetmeden önce, birçok tarihçi bu arşivin varlığını sadece bir efsane sanmıştı.",
        explanation:
          "Fiiller 'hatte ... entdeckt' ve 'hatten ... gehalten' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki durumu ifade eder. 'Hatte' ve 'hatten' ikinci konumdadır.",
      },
      {
        text: "Hier versteckte ich die Dokumente vor genau fünfzehn Jahren.",
        translation: "Tam on beş yıl önce burada belgeleri sakladım.",
        explanation:
          "Fiil 'versteckte' (sakladım) Präteritum formundadır, geçmişteki bir eylemi belirtir. İkinci konumdadır.",
      },
      {
        text: "Ich hatte zuvor sichergestellt, dass der Ort trocken und geschützt war.",
        translation:
          "Daha önce buranın kuru ve korunaklı olduğundan emin olmuştum.",
        explanation:
          "Fiil 'hatte ... sichergestellt' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir eylemi ifade eder. 'Hatte' ikinci konumdadır.",
      },
      {
        text: "Seitdem bin ich nicht mehr hier gewesen.",
        translation: "O zamandan beri burada bulunmadım.",
        explanation:
          "Fiil 'bin ... gewesen' Perfekt formundadır, geçmişten bugüne kadar olan bir durumu ifade eder. 'Bin' ikinci konumdadır.",
      },
      {
        text: "Habt ihr beide jemals darüber nachgedacht, was in diesen Dokumenten stehen könnte?",
        translation:
          "İkiniz hiç bu belgelerde neler olabileceği hakkında düşündünüz mü?",
        explanation:
          "Fiil 'habt ... nachgedacht' Perfekt formundadır, geçmişteki bir düşünce sürecini sorgular. 'Habt' ikinci konumdadır.",
      },
      {
        text: "Wir haben oft darüber diskutiert.",
        translation: "Bunu sık sık tartıştık.",
        explanation:
          "Fiil 'haben ... diskutiert' Perfekt formundadır, geçmişteki tekrarlanan bir eylemi ifade eder. 'Haben' ikinci konumdadır.",
      },
      {
        text: "Der Professor vermutete, dass sie ein Geheimnis enthüllen.",
        translation:
          "Profesör, onların bir sırrı açığa çıkaracağını tahmin etti.",
        explanation:
          "Fiil 'vermutete' (tahmin etti) Präteritum formundadır, geçmişteki bir tahmini ifade eder. Yan cümlede fiil sonda yer alır.",
      },
    ],
  },
  {
    title: "4. Vermutung und Zukunft mit dem Futur",
    sentences: [
      {
        text: "Was werden wir in den Dokumenten finden?",
        translation: "Belgelerde ne bulacağız?",
        explanation:
          "Fiil 'werden ... finden' Futur I formundadır, gelecekteki bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Die Pergamente werden uns Aufschluss über die geheimen Tunnel geben.",
        translation: "Parşömenler bize gizli tüneller hakkında bilgi verecek.",
        explanation:
          "Fiil 'werden ... geben' Futur I formundadır, gelecekteki bir sonucu ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Morgen werden wir bereits mit der Übersetzung beginnen.",
        translation: "Yarın zaten çeviriye başlayacağız.",
        explanation:
          "Fiil 'werden ... beginnen' Futur I formundadır, yakın gelecekteki bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Ihr werdet erstaunt sein, was diese alten Texte offenbaren.",
        translation:
          "Bu eski metinlerin neler ortaya koyacağına şaşıracaksınız.",
        explanation:
          "Fiil 'werdet ... sein' Futur I formundadır, gelecekteki bir durumu ifade eder. 'Werdet' ikinci konumdadır.",
      },
      {
        text: "Der Schatz wird wohl in einer der Höhlen versteckt sein.",
        translation: "Hazine muhtemelen mağaralardan birinde saklı olacak.",
        explanation:
          "Fiil 'wird ... sein' Futur I formundadır, 'wohl' ile birlikte bir tahmini ifade eder. 'Wird' ikinci konumdadır.",
      },
      {
        text: "Er wird vermutlich aus Gold und wertvollen Manuskripten bestehen.",
        translation: "Muhtemelen altın ve değerli el yazmalarından oluşacak.",
        explanation:
          "Fiil 'wird ... bestehen' Futur I formundadır, 'vermutlich' ile birlikte bir tahmini ifade eder. 'Wird' ikinci konumdadır.",
      },
      {
        text: "Du wirst wohl vom großen Reichtum träumen.",
        translation: "Muhtemelen büyük bir zenginlik hayali kuruyorsun.",
        explanation:
          "Fiil 'wirst ... träumen' Futur I formundadır, 'wohl' ile birlikte bir tahmini ifade eder. 'Wirst' ikinci konumdadır.",
      },
      {
        text: "Die wahre Bedeutung wird eine andere sein.",
        translation: "Gerçek anlam başka olacak.",
        explanation:
          "Fiil 'wird ... sein' Futur I formundadır, gelecekteki bir durumu ifade eder. 'Wird' ikinci konumdadır.",
      },
      {
        text: "Die Einheimischen werden nichts von diesem Ort wissen.",
        translation: "Yerliler bu yer hakkında hiçbir şey bilmeyecek.",
        explanation:
          "Fiil 'werden ... wissen' Futur I formundadır, bir tahmini ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Sonst wird es hier nicht so verlassen sein.",
        translation: "Aksi takdirde burası bu kadar terk edilmiş olmaz.",
        explanation:
          "Fiil 'wird ... sein' Futur I formundadır, bir tahmini ifade eder. 'Wird' ikinci konumdadır.",
      },
      {
        text: "Bis heute Abend werden wir alle Dokumente gesichtet haben.",
        translation: "Bu akşam tüm belgeleri gözden geçirmiş olacağız.",
        explanation:
          "Fiil 'werden ... haben' Futur II formundadır, gelecekte tamamlanmış bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Bis zum Ende der Woche werden wir die wichtigsten Passagen übersetzt haben.",
        translation:
          "Hafta sonuna kadar en önemli pasajları çevirmiş olacağız.",
        explanation:
          "Fiil 'werden ... haben' Futur II formundadır, gelecekte tamamlanmış bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Wenn wir zurückkehren, werden die anderen Wissenschaftler überrascht sein.",
        translation: "Döndüğümüzde diğer bilim insanları şaşıracak.",
        explanation:
          "Fiil 'werden ... sein' Futur I formundadır, gelecekteki bir durumu ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Bis dahin wird die Welt noch nichts von unserer Entdeckung erfahren haben.",
        translation: "O zamana kadar dünya keşfimizden haberdar olmayacak.",
        explanation:
          "Fiil 'wird ... haben' Futur II formundadır, gelecekte tamamlanmamış bir durumu ifade eder. 'Wird' ikinci konumdadır.",
      },
    ],
  },
  {
    title: "5. Überblick über die Zeiten im Deutschen",
    sentences: [
      {
        text: "Mit zitternden Händen zog der Professor eine wasserdichte Metallschatulle aus der Höhlung.",
        translation:
          "Titreyen ellerle profesör, kayanın oyuğundan su geçirmez bir metal kutu çıkardı.",
        explanation:
          "Fiil 'zog' (çıkardı) Präteritum formundadır, geçmişteki bir eylemi anlatır. İkinci konumdadır.",
      },
      {
        text: "Eine historische Entdeckung lag vor ihnen.",
        translation: "Onların önünde tarihi bir keşif yatıyordu.",
        explanation:
          "Fiil 'lag' (yatıyordu) Präteritum formundadır, geçmişteki bir durumu ifade eder. İkinci konumdadır.",
      },
      {
        text: "Ich habe all die Jahre darauf gewartet, diese Dokumente wieder in den Händen zu halten.",
        translation: "Bunca yıl bu belgeleri tekrar elimde tutmayı bekledim.",
        explanation:
          "Fiil 'habe ... gewartet' Perfekt formundadır, geçmişten bugüne uzanan bir eylemi ifade eder. 'Habe' ikinci konumdadır.",
      },
      {
        text: "Bevor sie die Schatulle öffneten, hatte der Professor bereits spezielle Handschuhe angezogen.",
        translation:
          "Kutuyu açmadan önce profesör zaten özel eldivenler giymişti.",
        explanation:
          "Fiil 'hatte ... angezogen' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir eylemi ifade eder. 'Hatte' ikinci konumdadır.",
      },
      {
        text: "Wir werden diese Dokumente sorgfältig untersuchen.",
        translation: "Bu belgeleri dikkatle inceleyeceğiz.",
        explanation:
          "Fiil 'werden ... untersuchen' Futur I formundadır, gelecekteki bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Bis zum Ende des Jahres werden wir alle Texte entschlüsselt haben.",
        translation: "Yıl sonuna kadar tüm metinleri çözmüş olacağız.",
        explanation:
          "Fiil 'werden ... haben' Futur II formundadır, gelecekte tamamlanmış bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Während sie vorsichtig das erste Pergament entfalten, halten alle drei den Atem an.",
        translation:
          "İlk parşömeni dikkatlice açarken, üçü de nefeslerini tutuyor.",
        explanation:
          "Fiil 'halten' (tutuyor) Präsens formundadır, şu anki bir eylemi ifade eder. İkinci konumdadır.",
      },
      {
        text: "Hier steht etwas in einer alten Geheimschrift, die ich kenne.",
        translation:
          "Burada bildiğim eski bir gizli yazıyla yazılmış bir şey var.",
        explanation:
          "Fiil 'steht' (var) Präsens formundadır, mevcut bir durumu ifade eder. İkinci konumdadır.",
      },
    ],
  },
  {
    title: "6. Zeiten – Eine gemeinsame Geschichte erzählen",
    sentences: [
      {
        text: "Die drei Abenteurer saßen bis spät in die Nacht im Hotelzimmer.",
        translation:
          "Üç maceraperest gece geç saatlere kadar otel odasında oturdu.",
        explanation:
          "Fiil 'saßen' (oturdu) Präteritum formundadır, geçmişteki bir durumu ifade eder. İkinci konumdadır.",
      },
      {
        text: "Der Professor hatte bereits vor Jahren einen Schlüssel für die seltsame Codierung entwickelt.",
        translation:
          "Profesör yıllar önce garip kodlama için bir anahtar geliştirmişti.",
        explanation:
          "Fiil 'hatte ... entwickelt' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir eylemi ifade eder. 'Hatte' ikinci konumdadır.",
      },
      {
        text: "Ich habe so etwas noch nie gesehen.",
        translation: "Böyle bir şeyi daha önce hiç görmedim.",
        explanation:
          "Fiil 'habe ... gesehen' Perfekt formundadır, geçmişteki bir deneyimi ifade eder. 'Habe' ikinci konumdadır.",
      },
      {
        text: "Marcus hat plötzlich aufgeregt ausgerufen: 'Dort unten muss ein verborgener Raum sein!'",
        translation:
          "Marcus birden heyecanla bağırdı: 'Orada gizli bir oda olmalı!'",
        explanation:
          "Fiil 'hat ... ausgerufen' Perfekt formundadır, geçmişteki ani bir eylemi ifade eder. 'Hat' ikinci konumdadır.",
      },
      {
        text: "Wir werden morgen früh aufbrechen und diesen Ort finden.",
        translation: "Yarın sabah yola çıkacağız ve bu yeri bulacağız.",
        explanation:
          "Fiil 'werden ... aufbrechen' Futur I formundadır, gelecekteki bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Bis morgen Abend werden wir das Geheimnis gelüftet haben.",
        translation: "Yarın akşam sırrı çözmüş olacağız.",
        explanation:
          "Fiil 'werden ... haben' Futur II formundadır, gelecekte tamamlanmış bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Als Lukas am nächsten Morgen erwachte, hatte der Professor bereits alle Vorbereitungen getroffen.",
        translation:
          "Lukas ertesi sabah uyandığında, profesör zaten tüm hazırlıkları yapmıştı.",
        explanation:
          "Fiil 'erwachte' Präteritum, 'hatte ... getroffen' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir eylemi ifade eder.",
      },
      {
        text: "Ich bin schon um fünf Uhr aufgestanden.",
        translation: "Sabah beşte zaten kalktım.",
        explanation:
          "Fiil 'bin ... aufgestanden' Perfekt formundadır, geçmişteki tamamlanmış bir eylemi ifade eder. 'Bin' ikinci konumdadır.",
      },
      {
        text: "Die Tunnel werden wohl seit Jahrhunderten nicht mehr betreten worden sein.",
        translation: "Tüneller yüzyıllardır girilmemiş olacak.",
        explanation:
          "Fiil 'werden ... sein' Futur II formundadır, 'wohl' ile birlikte bir tahmini ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "Ich habe alles mitnehmen lassen, was wir brauchen könnten.",
        translation: "İhtiyacımız olabilecek her şeyi aldırdım.",
        explanation:
          "Fiil 'habe ... lassen' Perfekt formunda, causative fiil 'lassen' ile birlikte. 'Mitnehmen' mastar, geçmişteki bir eylemi ifade eder.",
      },
      {
        text: "Damals hat mir niemand glauben wollen.",
        translation: "O zamanlar kimse bana inanmak istemedi.",
        explanation:
          "Fiil 'hat ... wollen' Perfekt formunda, modal fiil 'wollen' ile birlikte. 'Glauben' mastar, geçmişteki bir isteksizliği ifade eder.",
      },
      {
        text: "Hier muss es sein.",
        translation: "Burası olmalı.",
        explanation:
          "Fiil 'muss' (olmalı) Präsens formundadır, bir tahmini ifade eder. İkinci konumdadır.",
      },
      {
        text: "Unter diesem Felsen wird der Eingang verborgen sein.",
        translation: "Bu kayanın altında giriş gizli olacak.",
        explanation:
          "Fiil 'wird ... sein' Futur I formundadır, bir tahmini ifade eder. 'Wird' ikinci konumdadır.",
      },
      {
        text: "Mit vereinten Kräften schoben sie den schweren Stein beiseite.",
        translation: "Birleşik güçlerle ağır taşı kenara ittiler.",
        explanation:
          "Fiil 'schoben' (ittiler) Präteritum formundadır, geçmişteki bir eylemi ifade eder. İkinci konumdadır.",
      },
      {
        text: "Ein kühler Luftzug kam ihnen entgegen.",
        translation: "Soğuk bir hava akımı onlara doğru geldi.",
        explanation:
          "Fiil 'kam' (geldi) Präteritum formundadır, geçmişteki bir durumu ifade eder. İkinci konumdadır.",
      },
      {
        text: "Ich werde vorangehen.",
        translation: "Önden gideceğim.",
        explanation:
          "Fiil 'werde ... vorangehen' Futur I formundadır, gelecekteki bir eylemi ifade eder. 'Werde' ikinci konumdadır.",
      },
      {
        text: "Wenn wir die Kammer erreicht haben werden, werden wir verstehen.",
        translation: "Odaya ulaştığımızda, anlayacağız.",
        explanation:
          "Fiil 'werden ... haben' Futur II, 'werden ... verstehen' Futur I formundadır, gelecekte tamamlanmış bir eylemi ve sonucu ifade eder.",
      },
      {
        text: "Vor ihnen lag ein vollständig erhaltenes unterirdisches Archiv.",
        translation: "Önlerinde tamamen korunmuş bir yeraltı arşivi yatıyordu.",
        explanation:
          "Fiil 'lag' (yatıyordu) Präteritum formundadır, geçmişteki bir durumu ifade eder. İkinci konumdadır.",
      },
      {
        text: "Wir haben tatsächlich gefunden, wonach Generationen von Forschern vergeblich gesucht haben.",
        translation:
          "Gerçekten, nesiller boyu araştırmacıların boşuna aradığı şeyi bulduk.",
        explanation:
          "Fiil 'haben ... gefunden' Perfekt formundadır, geçmişteki tamamlanmış bir eylemi ifade eder. 'Haben' ikinci konumdadır.",
      },
      {
        text: "Dies wird die Geschichte des Bodensees neu schreiben.",
        translation: "Bu, Bodensee tarihini yeniden yazacak.",
        explanation:
          "Fiil 'wird ... schreiben' Futur I formundadır, gelecekteki bir sonucu ifade eder. 'Wird' ikinci konumdadır.",
      },
      {
        text: "Lukas drehte sich lächelnd zu seinen Gefährten um.",
        translation: "Lukas gülümseyerek yoldaşlarına döndü.",
        explanation:
          "Fiil 'drehte' (döndü) Präteritum formundadır, geçmişteki bir eylemi ifade eder. İkinci konumdadır.",
      },
      {
        text: "Morgen werden wir mit der systematischen Dokumentation begonnen haben.",
        translation:
          "Yarın sistematik belgeleme çalışmalarına başlamış olacağız.",
        explanation:
          "Fiil 'werden ... haben' Futur II formundadır, gelecekte tamamlanmış bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "In einem Jahr werden wir der Welt von dieser Entdeckung berichten.",
        translation: "Bir yıl içinde dünyaya bu keşfi bildireceğiz.",
        explanation:
          "Fiil 'werden ... berichten' Futur I formundadır, gelecekteki bir eylemi ifade eder. 'Werden' ikinci konumdadır.",
      },
      {
        text: "So begann für die drei Freunde ein Abenteuer.",
        translation: "Böylece üç arkadaş için bir macera başladı.",
        explanation:
          "Fiil 'begann' (başladı) Präteritum formundadır, geçmişteki bir başlangıcı ifade eder. İkinci konumdadır.",
      },
      {
        text: "Die geheimnisvolle Begegnung am Bodensee hatte zu einer Entdeckung geführt.",
        translation: "Bodensee'deki gizemli karşılaşma bir keşfe yol açmıştı.",
        explanation:
          "Fiil 'hatte ... geführt' Plusquamperfekt formundadır, geçmişteki bir olaydan önceki bir sonucu ifade eder. 'Hatte' ikinci konumdadır.",
      },
      {
        text: "Die ihr Leben für immer verändern wird.",
        translation: "Bu, hayatlarını sonsuza dek değiştirecek.",
        explanation:
          "Fiil 'wird ... verändern' Futur I formundadır, gelecekteki bir sonucu ifade eder. 'Wird' ikinci konumdadır.",
      },
    ],
  },
];

function Gramatik() {
  const [modalContent, setModalContent] = useState(null);

  const handleSentenceClick = (sentence, translation, explanation) => {
    setModalContent({ sentence, translation, explanation });
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="min-h-screen bg-green-100 flex justify-center items-center p-4">
      <div className="bg-amber-50 shadow-2xl rounded-lg max-w-3xl w-full p-8 font-semibold">
        <h1 className="text-3xl font-serif text-center mb-6">
          Beklenmedik Bir Karşılaşma
        </h1>
        <div className="space-y-6">
          {textData?.map((section, index) => (
            <div key={index} className="border-b pb-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {section.title}
              </h2>
              <div className="text-gray-700 leading-relaxed">
                {section.sentences?.map((sentence, sIndex) => (
                  <span
                    key={sIndex}
                    className="cursor-pointer hover:bg-yellow-100 transition-colors duration-200"
                    onClick={() =>
                      handleSentenceClick(
                        sentence.text,
                        sentence.translation,
                        sentence.explanation
                      )
                    }
                  >
                    {sentence.text}{" "}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        {modalContent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <h3 className="text-lg font-semibold mb-2">Cümle:</h3>
              <p className="text-gray-700 mb-4">{modalContent.sentence}</p>
              <h3 className="text-lg font-semibold mb-2">Türkçe Çeviri:</h3>
              <p className="text-gray-600 mb-4">{modalContent.translation}</p>
              <h3 className="text-lg font-semibold mb-2">
                Dilbilgisi Açıklaması:
              </h3>
              <p className="text-gray-600">{modalContent.explanation}</p>
              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={closeModal}
              >
                Kapat
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Gramatik;
