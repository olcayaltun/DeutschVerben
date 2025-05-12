import React, { useState } from "react";

const data = [
  {
    cumle: "Guten Morgen!",
    turkce: "Günaydın!",
  },
  {
    cumle: "Guten Tag!",
    turkce: "İyi günler!",
  },
  {
    cumle: "Guten Abend!",
    turkce: "İyi akşamlar!",
  },
  {
    cumle: "Gute Nacht!",
    turkce: "İyi geceler!",
  },
  {
    cumle: "Auf Wiedersehen!",
    turkce: "Hoşça kal!",
  },
  {
    cumle: "Tschüss!",
    turkce: "Hoşça kal! (Informal)",
  },
  {
    cumle: "Bis bald!",
    turkce: "Yakında görüşürüz!",
  },
  {
    cumle: "Bis morgen!",
    turkce: "Yarın görüşürüz!",
  },
  {
    cumle: "Bis später!",
    turkce: "Sonra görüşürüz!",
  },
  {
    cumle: "Wie heißt du?",
    turkce: "Adın ne?",
  },
  {
    cumle: "Ich heiße...",
    turkce: "Benim adım...",
  },
  {
    cumle: "Wie ist dein Name?",
    turkce: "İsmin nedir?",
  },
  {
    cumle: "Mein Name ist...",
    turkce: "Benim adım...",
  },
  {
    cumle: "Wie geht es dir?",
    turkce: "Nasılsın?",
  },
  {
    cumle: "Mir geht es gut.",
    turkce: "İyiyim.",
  },
  {
    cumle: "Es geht mir nicht so gut.",
    turkce: "Pek iyi değilim.",
  },
  {
    cumle: "Wie geht es Ihnen?",
    turkce: "Nasılsınız? (Resmi)",
  },
  {
    cumle: "Mir geht es sehr gut, danke.",
    turkce: "Çok iyiyim, teşekkürler.",
  },
  {
    cumle: "Woher kommst du?",
    turkce: "Nerelisin?",
  },
  {
    cumle: "Ich komme aus der Türkei.",
    turkce: "Türkiye'den geliyorum.",
  },
  {
    cumle: "Wo wohnst du?",
    turkce: "Nerede yaşıyorsun?",
  },
  {
    cumle: "Ich wohne in Istanbul.",
    turkce: "İstanbul'da yaşıyorum.",
  },
  {
    cumle: "Wie alt bist du?",
    turkce: "Kaç yaşındasın?",
  },
  {
    cumle: "Ich bin 25 Jahre alt.",
    turkce: "25 yaşındayım.",
  },
  {
    cumle: "Was machst du beruflich?",
    turkce: "Mesleğin ne?",
  },
  {
    cumle: "Ich bin Student/Studentin.",
    turkce: "Ben öğrenciyim.",
  },
  {
    cumle: "Ich bin Lehrer/Lehrerin.",
    turkce: "Ben öğretmenim.",
  },
  {
    cumle: "Ich arbeite als Ingenieur.",
    turkce: "Mühendis olarak çalışıyorum.",
  },
  {
    cumle: "Ich bin Arzt/Ärztin.",
    turkce: "Ben doktorum.",
  },
  {
    cumle: "Ich bin arbeitslos.",
    turkce: "İşsizim.",
  },

  // A1 SEVİYESİ - GÜNLÜK İFADELER
  {
    cumle: "Entschuldigung!",
    turkce: "Özür dilerim!",
  },
  {
    cumle: "Entschuldigen Sie bitte!",
    turkce: "Lütfen affedin! (Resmi)",
  },
  {
    cumle: "Danke schön!",
    turkce: "Çok teşekkür ederim!",
  },
  {
    cumle: "Vielen Dank!",
    turkce: "Çok teşekkürler!",
  },
  {
    cumle: "Danke sehr!",
    turkce: "Çok teşekkürler!",
  },
  {
    cumle: "Bitte schön!",
    turkce: "Rica ederim!",
  },
  {
    cumle: "Gern geschehen!",
    turkce: "Bir şey değil!",
  },
  {
    cumle: "Ja.",
    turkce: "Evet.",
  },
  {
    cumle: "Nein.",
    turkce: "Hayır.",
  },
  {
    cumle: "Vielleicht.",
    turkce: "Belki.",
  },
  {
    cumle: "Natürlich.",
    turkce: "Elbette.",
  },
  {
    cumle: "Ich verstehe nicht.",
    turkce: "Anlamıyorum.",
  },
  {
    cumle: "Können Sie bitte langsamer sprechen?",
    turkce: "Lütfen daha yavaş konuşabilir misiniz?",
  },
  {
    cumle: "Können Sie das bitte wiederholen?",
    turkce: "Bunu tekrar edebilir misiniz lütfen?",
  },
  {
    cumle: "Wie bitte?",
    turkce: "Efendim? / Ne dediniz?",
  },
  {
    cumle: "Ich verstehe das nicht.",
    turkce: "Bunu anlamıyorum.",
  },
  {
    cumle: "Sprechen Sie Englisch?",
    turkce: "İngilizce biliyor musunuz?",
  },
  {
    cumle: "Sprechen Sie Türkisch?",
    turkce: "Türkçe biliyor musunuz?",
  },
  {
    cumle: "Ich spreche ein bisschen Deutsch.",
    turkce: "Biraz Almanca konuşuyorum.",
  },
  {
    cumle: "Ich lerne Deutsch.",
    turkce: "Almanca öğreniyorum.",
  },

  // A1 SEVİYESİ - GÜNLÜK HAYAT
  {
    cumle: "Wie viel kostet das?",
    turkce: "Bu ne kadar?",
  },
  {
    cumle: "Das ist zu teuer.",
    turkce: "Bu çok pahalı.",
  },
  {
    cumle: "Haben Sie es billiger?",
    turkce: "Daha ucuzu var mı?",
  },
  {
    cumle: "Ich nehme das.",
    turkce: "Bunu alıyorum.",
  },
  {
    cumle: "Ich möchte einen Kaffee, bitte.",
    turkce: "Bir kahve istiyorum, lütfen.",
  },
  {
    cumle: "Ich hätte gerne ein Glas Wasser.",
    turkce: "Bir bardak su istiyorum.",
  },
  {
    cumle: "Die Rechnung, bitte.",
    turkce: "Hesap, lütfen.",
  },
  {
    cumle: "Haben Sie ein Zimmer frei?",
    turkce: "Boş odanız var mı?",
  },
  {
    cumle: "Wo ist die Toilette?",
    turkce: "Tuvalet nerede?",
  },
  {
    cumle: "Wo ist der Ausgang?",
    turkce: "Çıkış nerede?",
  },
  {
    cumle: "Wie spät ist es?",
    turkce: "Saat kaç?",
  },
  {
    cumle: "Es ist 10 Uhr.",
    turkce: "Saat 10.",
  },
  {
    cumle: "Es ist halb acht.",
    turkce: "Saat yedi buçuk.",
  },
  {
    cumle: "Ich habe Hunger.",
    turkce: "Açım.",
  },
  {
    cumle: "Ich habe Durst.",
    turkce: "Susadım.",
  },
  {
    cumle: "Ich bin müde.",
    turkce: "Yorgunum.",
  },
  {
    cumle: "Ich bin krank.",
    turkce: "Hastayım.",
  },
  {
    cumle: "Wo ist der Bahnhof?",
    turkce: "Tren istasyonu nerede?",
  },
  {
    cumle: "Wo ist die nächste Bushaltestelle?",
    turkce: "En yakın otobüs durağı nerede?",
  },
  {
    cumle: "Wie komme ich zum Hotel?",
    turkce: "Otele nasıl giderim?",
  },

  // A2 SEVİYESİ - GÜNLÜK İLETİŞİM
  {
    cumle: "Ich hätte gerne eine Tasse Tee.",
    turkce: "Bir fincan çay istiyorum.",
  },
  {
    cumle: "Können Sie mir helfen?",
    turkce: "Bana yardım edebilir misiniz?",
  },
  {
    cumle: "Ich brauche Hilfe.",
    turkce: "Yardıma ihtiyacım var.",
  },
  {
    cumle: "Ich suche den Bahnhof.",
    turkce: "Tren istasyonunu arıyorum.",
  },
  {
    cumle: "Ich habe mich verlaufen.",
    turkce: "Kayboldum.",
  },
  {
    cumle: "Wie komme ich zum Museum?",
    turkce: "Müzeye nasıl giderim?",
  },
  {
    cumle: "Ist es weit von hier?",
    turkce: "Buradan uzak mı?",
  },
  {
    cumle: "Gehen Sie geradeaus und dann links.",
    turkce: "Düz gidin ve sonra sola dönün.",
  },
  {
    cumle: "Es ist ungefähr 10 Minuten zu Fuß.",
    turkce: "Yaklaşık 10 dakikalık yürüme mesafesinde.",
  },
  {
    cumle: "Ich möchte eine Fahrkarte kaufen.",
    turkce: "Bir bilet satın almak istiyorum.",
  },
  {
    cumle: "Einfach oder hin und zurück?",
    turkce: "Tek yön mü gidiş-dönüş mü?",
  },
  {
    cumle: "Wann fährt der nächste Zug nach Berlin?",
    turkce: "Berlin'e bir sonraki tren ne zaman kalkıyor?",
  },
  {
    cumle: "Von welchem Gleis fährt der Zug ab?",
    turkce: "Tren hangi perondan kalkıyor?",
  },
  {
    cumle: "Ist dieser Platz frei?",
    turkce: "Bu yer boş mu?",
  },
  {
    cumle: "Darf ich hier sitzen?",
    turkce: "Buraya oturabilir miyim?",
  },

  // A2 SEVİYESİ - HOBİLER VE BOŞZAMAN
  {
    cumle: "Was machen Sie in Ihrer Freizeit?",
    turkce: "Boş zamanlarınızda ne yaparsınız?",
  },
  {
    cumle: "Ich lese gerne Bücher.",
    turkce: "Kitap okumayı severim.",
  },
  {
    cumle: "Ich spiele Fußball.",
    turkce: "Futbol oynarım.",
  },
  {
    cumle: "Ich gehe oft ins Kino.",
    turkce: "Sık sık sinemaya giderim.",
  },
  {
    cumle: "Ich höre gerne Musik.",
    turkce: "Müzik dinlemeyi severim.",
  },
  {
    cumle: "Ich koche gerne.",
    turkce: "Yemek yapmayı severim.",
  },
  {
    cumle: "Ich reise gerne.",
    turkce: "Seyahat etmeyi severim.",
  },
  {
    cumle: "Ich treibe Sport.",
    turkce: "Spor yaparım.",
  },
  {
    cumle: "Ich spiele Gitarre.",
    turkce: "Gitar çalarım.",
  },
  {
    cumle: "Ich tanze gerne.",
    turkce: "Dans etmeyi severim.",
  },
  {
    cumle: "Haben Sie Geschwister?",
    turkce: "Kardeşleriniz var mı?",
  },
  {
    cumle: "Ich habe einen Bruder und eine Schwester.",
    turkce: "Bir erkek kardeşim ve bir kız kardeşim var.",
  },
  {
    cumle: "Ich habe keine Geschwister.",
    turkce: "Kardeşim yok.",
  },
  {
    cumle: "Ich bin Einzelkind.",
    turkce: "Ben tek çocuğum.",
  },
  {
    cumle: "Was sind deine Hobbys?",
    turkce: "Hobilerin neler?",
  },
  {
    cumle: "Ich mag Musik hören.",
    turkce: "Müzik dinlemeyi seviyorum.",
  },
  {
    cumle: "Welche Musik hörst du gerne?",
    turkce: "Ne tür müzik dinlemeyi seversin?",
  },
  {
    cumle: "Ich höre gerne Rock und Pop.",
    turkce: "Rock ve pop dinlemeyi severim.",
  },
  {
    cumle: "Welche Filme magst du?",
    turkce: "Hangi filmleri seversin?",
  },
  {
    cumle: "Ich mag Komödien und Actionfilme.",
    turkce: "Komedileri ve aksiyon filmlerini severim.",
  },

  // A2 SEVİYESİ - DİL VE ZAMAN İFADELERİ
  {
    cumle: "Welche Sprachen sprichst du?",
    turkce: "Hangi dilleri konuşuyorsun?",
  },
  {
    cumle: "Ich spreche Deutsch und Englisch.",
    turkce: "Almanca ve İngilizce konuşuyorum.",
  },
  {
    cumle: "Ich lerne seit einem Jahr Deutsch.",
    turkce: "Bir yıldır Almanca öğreniyorum.",
  },
  {
    cumle: "Deutsch ist eine schwere Sprache.",
    turkce: "Almanca zor bir dil.",
  },
  {
    cumle: "Ich möchte mein Deutsch verbessern.",
    turkce: "Almancamı geliştirmek istiyorum.",
  },
  {
    cumle: "Was hast du am Wochenende gemacht?",
    turkce: "Hafta sonu ne yaptın?",
  },
  {
    cumle: "Ich war zu Hause und habe ferngesehen.",
    turkce: "Evdeydim ve televizyon izledim.",
  },
  {
    cumle: "Ich war im Kino.",
    turkce: "Sinemadaydım.",
  },
  {
    cumle: "Ich habe Freunde getroffen.",
    turkce: "Arkadaşlarımla buluştum.",
  },
  {
    cumle: "Ich hatte keine Zeit.",
    turkce: "Vaktim yoktu.",
  },
  {
    cumle: "Ich war sehr beschäftigt.",
    turkce: "Çok meşguldüm.",
  },
  {
    cumle: "Hast du morgen Zeit?",
    turkce: "Yarın vaktin var mı?",
  },
  {
    cumle: "Leider habe ich keine Zeit.",
    turkce: "Maalesef vaktim yok.",
  },
  {
    cumle: "Ja, ich habe Zeit.",
    turkce: "Evet, vaktim var.",
  },
  {
    cumle: "Wir könnten ins Restaurant gehen.",
    turkce: "Restorana gidebiliriz.",
  },
  {
    cumle: "Das klingt gut.",
    turkce: "Bu kulağa hoş geliyor.",
  },
  {
    cumle: "Das Wetter ist heute schön.",
    turkce: "Bugün hava güzel.",
  },
  {
    cumle: "Es regnet stark.",
    turkce: "Şiddetli yağmur yağıyor.",
  },
  {
    cumle: "Es ist heute sehr heiß.",
    turkce: "Bugün çok sıcak.",
  },
  {
    cumle: "Es ist kalt.",
    turkce: "Hava soğuk.",
  },
  {
    cumle: "Es schneit.",
    turkce: "Kar yağıyor.",
  },
  {
    cumle: "Ich muss jetzt gehen.",
    turkce: "Şimdi gitmem gerek.",
  },
  {
    cumle: "Ich rufe dich später an.",
    turkce: "Seni daha sonra arayacağım.",
  },
  {
    cumle: "Wir sehen uns morgen.",
    turkce: "Yarın görüşürüz.",
  },
  {
    cumle: "Ich bin spät dran.",
    turkce: "Geç kaldım.",
  },
  {
    cumle: "Ich habe es eilig.",
    turkce: "Acelem var.",
  },

  // B1 SEVİYESİ - İLETİŞİM VE GÜNLÜK HAYAT
  {
    cumle: "Könnten Sie mir bitte erklären, wie das funktioniert?",
    turkce: "Bunun nasıl çalıştığını bana açıklayabilir misiniz?",
  },
  {
    cumle: "Können Sie mir das genauer erläutern?",
    turkce: "Bunu bana daha detaylı açıklayabilir misiniz?",
  },
  {
    cumle: "Ich verstehe den Zusammenhang nicht ganz.",
    turkce: "Bağlantıyı tam olarak anlamıyorum.",
  },
  {
    cumle: "Können Sie ein Beispiel geben?",
    turkce: "Bir örnek verebilir misiniz?",
  },
  {
    cumle: "Ich würde gerne einen Termin vereinbaren.",
    turkce: "Bir randevu almak istiyorum.",
  },
  {
    cumle: "Wann passt es Ihnen am besten?",
    turkce: "Size en uygun zaman ne zaman?",
  },
  {
    cumle: "Ich bin an diesem Tag leider verhindert.",
    turkce: "O gün maalesef meşgulüm.",
  },
  {
    cumle: "Können wir den Termin verschieben?",
    turkce: "Randevuyu erteleyebilir miyiz?",
  },
  {
    cumle: "Ich habe meine Brieftasche verloren.",
    turkce: "Cüzdanımı kaybettim.",
  },
  {
    cumle: "Haben Sie mein Handy gesehen?",
    turkce: "Telefonumu gördünüz mü?",
  },
  {
    cumle: "Ich habe meinen Schlüssel vergessen.",
    turkce: "Anahtarımı unuttum.",
  },
  {
    cumle: "Können Sie mir den Weg zur Post beschreiben?",
    turkce: "Bana postaneye giden yolu tarif edebilir misiniz?",
  },
  {
    cumle: "Wie lange dauert es zu Fuß?",
    turkce: "Yürüyerek ne kadar sürer?",
  },
  {
    cumle: "Gibt es hier in der Nähe eine Bank?",
    turkce: "Buralarda bir banka var mı?",
  },
  {
    cumle: "Wo ist der nächste Supermarkt?",
    turkce: "En yakın süpermarket nerede?",
  },

  // B1 SEVİYESİ - EV VE GÜNLÜK YAŞAM
  {
    cumle: "Ich suche eine Wohnung zu mieten.",
    turkce: "Kiralamak için bir daire arıyorum.",
  },
  {
    cumle: "Wie hoch ist die monatliche Miete?",
    turkce: "Aylık kira ne kadar?",
  },
  {
    cumle: "Sind die Nebenkosten im Preis enthalten?",
    turkce: "Yan giderler fiyata dahil mi?",
  },
  {
    cumle: "Gibt es einen Aufzug im Gebäude?",
    turkce: "Binada asansör var mı?",
  },
  {
    cumle: "Wie groß ist die Wohnung?",
    turkce: "Daire ne kadar büyük?",
  },
  {
    cumle: "Die Heizung funktioniert nicht.",
    turkce: "Kalorifer çalışmıyor.",
  },
  {
    cumle: "Der Wasserhahn tropft.",
    turkce: "Musluk damlıyor.",
  },
  {
    cumle: "Ich muss die Waschmaschine reparieren lassen.",
    turkce: "Çamaşır makinesini tamir ettirmem gerekiyor.",
  },
  {
    cumle: "Können Sie es bitte reparieren?",
    turkce: "Lütfen tamir edebilir misiniz?",
  },
  {
    cumle: "Wann kann der Techniker kommen?",
    turkce: "Teknisyen ne zaman gelebilir?",
  },

  // B1 SEVİYESİ - FİKİR VE TAVSİYE
  {
    cumle: "Was würden Sie an meiner Stelle tun?",
    turkce: "Benim yerimde olsaydınız ne yapardınız?",
  },
  {
    cumle: "Ich bin mir nicht sicher, was ich tun soll.",
    turkce: "Ne yapacağımdan emin değilim.",
  },
  {
    cumle: "Haben Sie einen Vorschlag?",
    turkce: "Bir öneriniz var mı?",
  },
  {
    cumle: "Das ist eine gute Idee.",
    turkce: "Bu iyi bir fikir.",
  },
  {
    cumle: "Ich bin nicht davon überzeugt.",
    turkce: "Buna ikna olmadım.",
  },
  {
    cumle: "Ich freue mich auf unser Treffen.",
    turkce: "Görüşmemizi dört gözle bekliyorum.",
  },
  {
    cumle: "Ich bin gespannt auf Ihren Vortrag.",
    turkce: "Sunumunuzu merakla bekliyorum.",
  },
  {
    cumle: "Es tut mir leid, dass ich zu spät gekommen bin.",
    turkce: "Geç kaldığım için özür dilerim.",
  },
  {
    cumle: "Ich entschuldige mich für die Unannehmlichkeiten.",
    turkce: "Rahatsızlık için özür dilerim.",
  },
  {
    cumle: "Ich bin mit dem Ergebnis nicht zufrieden.",
    turkce: "Sonuçtan memnun değilim.",
  },
  {
    cumle: "Das hat meine Erwartungen nicht erfüllt.",
    turkce: "Bu beklentilerimi karşılamadı.",
  },
  {
    cumle: "Wir sollten das Problem so schnell wie möglich lösen.",
    turkce: "Bu sorunu mümkün olduğunca çabuk çözmeliyiz.",
  },
  {
    cumle: "Wir müssen eine Lösung finden.",
    turkce: "Bir çözüm bulmamız gerekiyor.",
  },

  // B1 SEVİYESİ - GELECEK PLANLARI VE GEÇMİŞ DENEYİMLER
  {
    cumle: "Ich habe vor, nächstes Jahr nach Deutschland zu reisen.",
    turkce: "Gelecek yıl Almanya'ya seyahat etmeyi planlıyorum.",
  },
  {
    cumle: "Was sind deine Pläne für die Zukunft?",
    turkce: "Gelecek için planların neler?",
  },
  {
    cumle: "Ich möchte im Ausland studieren.",
    turkce: "Yurtdışında okumak istiyorum.",
  },
  {
    cumle: "Ich will meine Deutschkenntnisse verbessern.",
    turkce: "Almanca bilgimi geliştirmek istiyorum.",
  },
  {
    cumle: "Haben Sie schon einmal in der Türkei Urlaub gemacht?",
    turkce: "Hiç Türkiye'de tatil yaptınız mı?",
  },
  {
    cumle: "Ich war noch nie in Deutschland.",
    turkce: "Hiç Almanya'da bulunmadım.",
  },
  {
    cumle: "Das war meine beste Reise.",
    turkce: "Bu benim en iyi seyahatimdi.",
  },
  {
    cumle: "Ich habe viele interessante Menschen kennengelernt.",
    turkce: "Birçok ilginç insanla tanıştım.",
  },

  // B1 SEVİYESİ - KOŞULLU CÜMLELER VE FİKİR BELİRTME
  {
    cumle: "Wenn ich Zeit hätte, würde ich mehr Sport treiben.",
    turkce: "Vaktim olsa, daha fazla spor yapardım.",
  },
  {
    cumle: "Wenn das Wetter schön ist, gehen wir spazieren.",
    turkce: "Hava güzelse, yürüyüşe çıkarız.",
  },
  {
    cumle: "Falls ich nicht rechtzeitig komme, fang ohne mich an.",
    turkce: "Eğer zamanında gelemezsem, bensiz başla.",
  },
  {
    cumle: "Ich bin seit drei Jahren verheiratet.",
    turkce: "Üç yıldır evliyim.",
  },
  {
    cumle: "Ich wohne seit 2019 in dieser Stadt.",
    turkce: "2019'dan beri bu şehirde yaşıyorum.",
  },
  {
    cumle: "Wie lange kennst du ihn schon?",
    turkce: "Onu ne zamandır tanıyorsun?",
  },
  {
    cumle: "Was sind die Vor- und Nachteile dieser Methode?",
    turkce: "Bu yöntemin avantajları ve dezavantajları nelerdir?",
  },
  {
    cumle: "Einerseits ist es praktisch, andererseits ist es teuer.",
    turkce: "Bir yandan pratik, diğer yandan pahalı.",
  },
  {
    cumle: "Ich bin der Meinung, dass...",
    turkce: "Bence...",
  },
  {
    cumle: "Meiner Ansicht nach ist das keine gute Idee.",
    turkce: "Bana göre bu iyi bir fikir değil.",
  },
  {
    cumle: "Ich denke, wir sollten zuerst recherchieren.",
    turkce: "Bence önce araştırma yapmalıyız.",
  },

  // B1 SEVİYESİ - GÜNLÜK KONUŞMA İFADELERİ
  {
    cumle: "Es wäre besser, wenn wir früher anfangen würden.",
    turkce: "Daha erken başlasak daha iyi olurdu.",
  },
  {
    cumle: "Könnten Sie das bitte wiederholen?",
    turkce: "Bunu tekrar edebilir misiniz lütfen?",
  },
  {
    cumle: "Ich habe nicht verstanden, was Sie meinen.",
    turkce: "Ne demek istediğinizi anlamadım.",
  },
  {
    cumle: "Könnten Sie das anders formulieren?",
    turkce: "Bunu başka türlü ifade edebilir misiniz?",
  },
  {
    cumle: "Ich habe das Gefühl, dass etwas nicht stimmt.",
    turkce: "Bir şeylerin yanlış olduğu hissine kapılıyorum.",
  },
  {
    cumle: "Ich bin mir nicht sicher, ob das funktionieren wird.",
    turkce: "Bunun işe yarayacağından emin değilim.",
  },
  {
    cumle: "Wir müssen uns beeilen, sonst verpassen wir den Zug.",
    turkce: "Acele etmeliyiz, yoksa treni kaçıracağız.",
  },
  {
    cumle: "Beeil dich, wir sind spät dran!",
    turkce: "Acele et, geç kaldık!",
  },
  {
    cumle: "Ich bin mit deinem Vorschlag einverstanden.",
    turkce: "Önerinize katılıyorum.",
  },
  {
    cumle: "Ich stimme dir voll und ganz zu.",
    turkce: "Sana tamamen katılıyorum.",
  },
  {
    cumle: "Da bin ich anderer Meinung.",
    turkce: "Bu konuda farklı düşünüyorum.",
  },
  {
    cumle: "Darf ich Ihnen eine Frage stellen?",
    turkce: "Size bir soru sorabilir miyim?",
  },
  {
    cumle: "Darf ich etwas vorschlagen?",
    turkce: "Bir şey önerebilir miyim?",
  },
  {
    cumle: "Es ist mir egal, was die anderen denken.",
    turkce: "Başkalarının ne düşündüğü umurumda değil.",
  },
  {
    cumle: "Das spielt für mich keine Rolle.",
    turkce: "Bu benim için önemli değil.",
  },

  // B1 SEVİYESİ - İŞ VE TOPLANTI İFADELERİ
  {
    cumle: "Können wir einen anderen Termin vereinbaren?",
    turkce: "Başka bir randevu ayarlayabilir miyiz?",
  },
  {
    cumle: "Der Termin passt mir leider nicht.",
    turkce: "Maalesef randevu bana uygun değil.",
  },
  {
    cumle: "Können wir das Meeting auf nächste Woche verschieben?",
    turkce: "Toplantıyı gelecek haftaya erteleyebilir miyiz?",
  },
  {
    cumle: "Ich bin noch nicht fertig mit meiner Arbeit.",
    turkce: "İşimi henüz bitirmedim.",
  },
  {
    cumle: "Ich brauche noch etwas mehr Zeit.",
    turkce: "Biraz daha zamana ihtiyacım var.",
  },
  {
    cumle: "Die Frist ist zu knapp.",
    turkce: "Süre çok kısa.",
  },
  {
    cumle: "Können Sie mir die Unterlagen zuschicken?",
    turkce: "Bana belgeleri gönderebilir misiniz?",
  },
  {
    cumle: "Ich habe die E-Mail noch nicht erhalten.",
    turkce: "E-postayı henüz almadım.",
  },
  {
    cumle: "Was halten Sie von diesem Vorschlag?",
    turkce: "Bu öneri hakkında ne düşünüyorsunuz?",
  },
  {
    cumle: "Das klingt vielversprechend.",
    turkce: "Bu umut verici görünüyor.",
  },
  {
    cumle: "Das überzeugt mich nicht.",
    turkce: "Bu beni ikna etmiyor.",
  },
  {
    cumle: "Ich finde es wichtig, dass wir darüber sprechen.",
    turkce: "Bunun hakkında konuşmamızın önemli olduğunu düşünüyorum.",
  },
  {
    cumle: "Wir sollten alle Aspekte berücksichtigen.",
    turkce: "Tüm yönleri göz önünde bulundurmalıyız.",
  },
  {
    cumle: "Haben Sie noch weitere Fragen?",
    turkce: "Başka sorularınız var mı?",
  },

  // B1 SEVİYESİ - SOSYAL İLİŞKİLER
  {
    cumle: "Es tut mir leid, aber ich habe keine Zeit.",
    turkce: "Üzgünüm ama vaktim yok.",
  },
  {
    cumle: "Ich bin momentan sehr beschäftigt.",
    turkce: "Şu anda çok meşgulüm.",
  },
  {
    cumle: "Vielleicht ein andermal.",
    turkce: "Belki başka bir zaman.",
  },
  {
    cumle: "Ich freue mich, Sie kennenzulernen.",
    turkce: "Sizi tanıdığıma memnun oldum.",
  },
  {
    cumle: "Es war ein schöner Abend mit Ihnen.",
    turkce: "Sizinle güzel bir akşamdı.",
  },
  {
    cumle: "Wir sollten öfter etwas zusammen unternehmen.",
    turkce: "Daha sık birlikte bir şeyler yapmalıyız.",
  },
  {
    cumle: "Ich werde mein Bestes tun.",
    turkce: "Elimden geleni yapacağım.",
  },
  {
    cumle: "Sie können sich auf mich verlassen.",
    turkce: "Bana güvenebilirsiniz.",
  },
  {
    cumle: "Ich stehe Ihnen gerne zur Verfügung.",
    turkce: "Memnuniyetle hizmetinizdeyim.",
  },
  {
    cumle: "Ich wünsche Ihnen viel Erfolg!",
    turkce: "Size başarılar dilerim!",
  },
  {
    cumle: "Gute Besserung!",
    turkce: "Geçmiş olsun!",
  },
  {
    cumle: "Herzlichen Glückwunsch zum Geburtstag!",
    turkce: "Doğum günün kutlu olsun!",
  },
  {
    cumle: "Frohe Weihnachten und ein gutes neues Jahr!",
    turkce: "Mutlu Noeller ve mutlu yıllar!",
  },

  // B2 SEVİYESİ - DAHA KARMAŞIK İFADELER
  {
    cumle: "Es wäre mir lieb, wenn Sie das bis morgen erledigen könnten.",
    turkce: "Bunu yarına kadar halledebilirseniz sevinirim.",
  },
  {
    cumle: "Ich würde mich freuen, wenn Sie meine Einladung annehmen würden.",
    turkce: "Davetimi kabul ederseniz sevinirim.",
  },
  {
    cumle: "Obwohl ich mein Bestes gegeben habe, ist es mir nicht gelungen.",
    turkce: "Elimden gelenin en iyisini yapmama rağmen, başaramadım.",
  },
  {
    cumle: "Es ist wichtig, dass wir alle Möglichkeiten in Betracht ziehen.",
    turkce: "Tüm olasılıkları göz önünde bulundurmamız önemli.",
  },
  {
    cumle: "Ich hätte es anders gemacht, wenn ich gewusst hätte, dass...",
    turkce: "Eğer bilseydim ki..., farklı yapardım.",
  },
  {
    cumle: "Unter diesen Umständen sollten wir vorsichtig sein.",
    turkce: "Bu koşullar altında dikkatli olmalıyız.",
  },
  {
    cumle: "Im Großen und Ganzen bin ich mit dem Ergebnis zufrieden.",
    turkce: "Genel olarak sonuçtan memnunum.",
  },
  {
    cumle:
      "Einerseits verstehe ich Ihren Standpunkt, andererseits muss ich widersprechen.",
    turkce:
      "Bir yandan bakış açınızı anlıyorum, diğer yandan karşı çıkmak zorundayım.",
  },
  {
    cumle: "Soweit ich informiert bin, findet die Veranstaltung nicht statt.",
    turkce: "Bildiğim kadarıyla, etkinlik gerçekleşmeyecek.",
  },
  {
    cumle: "Es liegt auf der Hand, dass wir eine Lösung finden müssen.",
    turkce: "Bir çözüm bulmamız gerektiği açıktır.",
  },
];

const Konusma = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAlmanca, setShowAlmanca] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
    setShowAlmanca(false); // Yeni cümleye geçince Almanca kısmı kapanır
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
    setShowAlmanca(false); // Yeni cümleye geçince Almanca kısmı kapanır
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-4">
          <p className="text-lg font-semibold text-gray-800">
            {data[currentIndex].turkce}
          </p>
          <div className="mt-4">
            <button
              onClick={() => setShowAlmanca(!showAlmanca)}
              className="text-blue-500 hover:underline focus:outline-none"
            >
              {showAlmanca ? "Almanca'yı Gizle" : "Almanca'yı Göster"}
            </button>
            {showAlmanca && (
              <p className="mt-2 text-gray-600">{data[currentIndex].cumle}</p>
            )}
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrev}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Geri
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            İleri
          </button>
        </div>
      </div>
    </div>
  );
};

export default Konusma;
