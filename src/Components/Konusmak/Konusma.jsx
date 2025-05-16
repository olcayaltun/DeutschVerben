import React, { useState, useEffect } from "react";

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
  {
    cumle: "Guten Morgen!",
    turkce: "Günaydın!",
    level: "A1",
    notes: "Sabah selamlaşması",
  },
  {
    cumle: "Guten Tag!",
    turkce: "İyi günler!",
    level: "A1",
    notes: "Gün içinde selamlaşma",
  },
  {
    cumle: "Guten Abend!",
    turkce: "İyi akşamlar!",
    level: "A1",
    notes: "Akşam selamlaşması",
  },
  {
    cumle: "Gute Nacht!",
    turkce: "İyi geceler!",
    level: "A1",
    notes: "Gece vedalaşması",
  },
  {
    cumle: "Auf Wiedersehen!",
    turkce: "Hoşça kal!",
    level: "A1",
    notes: "Resmi vedalaşma",
  },
  {
    cumle: "Tschüss!",
    turkce: "Hoşça kal! (Informal)",
    level: "A1",
    notes: "Samimi vedalaşma",
  },
  {
    cumle: "Bis bald!",
    turkce: "Yakında görüşürüz!",
    level: "A1",
    notes: "Samimi bir veda",
  },
  {
    cumle: "Bis morgen!",
    turkce: "Yarın görüşürüz!",
    level: "A1",
    notes: "Ertesi gün için veda",
  },
  {
    cumle: "Bis später!",
    turkce: "Sonra görüşürüz!",
    level: "A1",
    notes: "Kısa süreli ayrılık için",
  },

  // A1 SEVİYESİ - TANITMA VE TANIŞMA
  {
    cumle: "Wie heißt du?",
    turkce: "Adın ne?",
    level: "A1",
    notes: "Samimi tanışma sorusu",
  },
  {
    cumle: "Ich heiße...",
    turkce: "Benim adım...",
    level: "A1",
    notes: "Kendini tanıtma",
  },
  {
    cumle: "Wie ist dein Name?",
    turkce: "İsmin nedir?",
    level: "A1",
    notes: "Alternatif tanışma sorusu",
  },
  {
    cumle: "Mein Name ist...",
    turkce: "Benim adım...",
    level: "A1",
    notes: "Resmi kendini tanıtma",
  },
  {
    cumle: "Wie geht es dir?",
    turkce: "Nasılsın?",
    level: "A1",
    notes: "Samimi hal hatır sorma",
  },
  {
    cumle: "Mir geht es gut.",
    turkce: "İyiyim.",
    level: "A1",
    notes: "Olumlu yanıt",
  },
  {
    cumle: "Es geht mir nicht so gut.",
    turkce: "Pek iyi değilim.",
    level: "A1",
    notes: "Olumsuz yanıt",
  },
  {
    cumle: "Wie geht es Ihnen?",
    turkce: "Nasılsınız? (Resmi)",
    level: "A1",
    notes: "Resmi hal hatır sorma",
  },
  {
    cumle: "Mir geht es sehr gut, danke.",
    turkce: "Çok iyiyim, teşekkürler.",
    level: "A1",
    notes: "Kibar olumlu yanıt",
  },
  {
    cumle: "Woher kommst du?",
    turkce: "Nerelisin?",
    level: "A1",
    notes: "Köken sorma",
  },
  {
    cumle: "Ich komme aus der Türkei.",
    turkce: "Türkiye'den geliyorum.",
    level: "A1",
    notes: "Köken belirtme",
  },
  {
    cumle: "Wo wohnst du?",
    turkce: "Nerede yaşıyorsun?",
    level: "A1",
    notes: "İkamet sorma",
  },
  {
    cumle: "Ich wohne in Istanbul.",
    turkce: "İstanbul'da yaşıyorum.",
    level: "A1",
    notes: "İkamet belirtme",
  },
  {
    cumle: "Wie alt bist du?",
    turkce: "Kaç yaşındasın?",
    level: "A1",
    notes: "Yaş sorma",
  },
  {
    cumle: "Ich bin 25 Jahre alt.",
    turkce: "25 yaşındayım.",
    level: "A1",
    notes: "Yaş belirtme",
  },
  {
    cumle: "Was machst du beruflich?",
    turkce: "Mesleğin ne?",
    level: "A1",
    notes: "Meslek sorma",
  },
  {
    cumle: "Ich bin Student/Studentin.",
    turkce: "Ben öğrenciyim.",
    level: "A1",
    notes: "Meslek belirtme",
  },
  {
    cumle: "Ich bin Lehrer/Lehrerin.",
    turkce: "Ben öğretmenim.",
    level: "A1",
    notes: "Meslek belirtme",
  },
  {
    cumle: "Ich arbeite als Ingenieur.",
    turkce: "Mühendis olarak çalışıyorum.",
    level: "A1",
    notes: "Meslek belirtme",
  },
  {
    cumle: "Ich bin Arzt/Ärztin.",
    turkce: "Ben doktorum.",
    level: "A1",
    notes: "Meslek belirtme",
  },
  {
    cumle: "Ich bin arbeitslos.",
    turkce: "İşsizim.",
    level: "A1",
    notes: "İş durumu belirtme",
  },

  // A1 SEVİYESİ - GÜNLÜK İFADELER
  {
    cumle: "Entschuldigung!",
    turkce: "Özür dilerim!",
    level: "A1",
    notes: "Samimi özür",
  },
  {
    cumle: "Entschuldigen Sie bitte!",
    turkce: "Lütfen affedin! (Resmi)",
    level: "A1",
    notes: "Resmi özür",
  },
  {
    cumle: "Danke schön!",
    turkce: "Çok teşekkür ederim!",
    level: "A1",
    notes: "Kibar teşekkür",
  },
  {
    cumle: "Vielen Dank!",
    turkce: "Çok teşekkürler!",
    level: "A1",
    notes: "Kibar teşekkür",
  },
  {
    cumle: "Danke sehr!",
    turkce: "Çok teşekkürler!",
    level: "A1",
    notes: "Kibar teşekkür",
  },
  {
    cumle: "Bitte schön!",
    turkce: "Rica ederim!",
    level: "A1",
    notes: "Teşekküre yanıt",
  },
  {
    cumle: "Gern geschehen!",
    turkce: "Bir şey değil!",
    level: "A1",
    notes: "Teşekküre samimi yanıt",
  },
  {
    cumle: "Ja.",
    turkce: "Evet.",
    level: "A1",
    notes: "Olumlama",
  },
  {
    cumle: "Nein.",
    turkce: "Hayır.",
    level: "A1",
    notes: "Olumsuzlama",
  },
  {
    cumle: "Vielleicht.",
    turkce: "Belki.",
    level: "A1",
    notes: "Belirsizlik ifadesi",
  },
  {
    cumle: "Natürlich.",
    turkce: "Elbette.",
    level: "A1",
    notes: "Kesin onay",
  },
  {
    cumle: "Ich verstehe nicht.",
    turkce: "Anlamıyorum.",
    level: "A1",
    notes: "Anlamama ifadesi",
  },
  {
    cumle: "Können Sie bitte langsamer sprechen?",
    turkce: "Lütfen daha yavaş konuşabilir misiniz?",
    level: "A1",
    notes: "Kibar rica",
  },
  {
    cumle: "Können Sie das bitte wiederholen?",
    turkce: "Bunu tekrar edebilir misiniz lütfen?",
    level: "A1",
    notes: "Tekrar isteme",
  },
  {
    cumle: "Wie bitte?",
    turkce: "Efendim? / Ne dediniz?",
    level: "A1",
    notes: "Anlamadığında sorma",
  },
  {
    cumle: "Ich verstehe das nicht.",
    turkce: "Bunu anlamıyorum.",
    level: "A1",
    notes: "Anlamama ifadesi",
  },
  {
    cumle: "Sprechen Sie Englisch?",
    turkce: "İngilizce biliyor musunuz?",
    level: "A1",
    notes: "Dil becerisi sorma",
  },
  {
    cumle: "Sprechen Sie Türkisch?",
    turkce: "Türkçe biliyor musunuz?",
    level: "A1",
    notes: "Dil becerisi sorma",
  },
  {
    cumle: "Ich spreche ein bisschen Deutsch.",
    turkce: "Biraz Almanca konuşuyorum.",
    level: "A1",
    notes: "Dil seviyesi belirtme",
  },
  {
    cumle: "Ich lerne Deutsch.",
    turkce: "Almanca öğreniyorum.",
    level: "A1",
    notes: "Öğrenme süreci belirtme",
  },

  // A1 SEVİYESİ - GÜNLÜK HAYAT
  {
    cumle: "Wie viel kostet das?",
    turkce: "Bu ne kadar?",
    level: "A1",
    notes: "Fiyat sorma",
  },
  {
    cumle: "Das ist zu teuer.",
    turkce: "Bu çok pahalı.",
    level: "A1",
    notes: "Fiyat değerlendirme",
  },
  {
    cumle: "Haben Sie es billiger?",
    turkce: "Daha ucuzu var mı?",
    level: "A1",
    notes: "Pazarlık ifadesi",
  },
  {
    cumle: "Ich nehme das.",
    turkce: "Bunu alıyorum.",
    level: "A1",
    notes: "Satın alma kararı",
  },
  {
    cumle: "Ich möchte einen Kaffee, bitte.",
    turkce: "Bir kahve istiyorum, lütfen.",
    level: "A1",
    notes: "Sipariş verme",
  },
  {
    cumle: "Ich hätte gerne ein Glas Wasser.",
    turkce: "Bir bardak su istiyorum.",
    level: "A1",
    notes: "Kibar sipariş",
  },
  {
    cumle: "Die Rechnung, bitte.",
    turkce: "Hesap, lütfen.",
    level: "A1",
    notes: "Hesap isteme",
  },
  {
    cumle: "Haben Sie ein Zimmer frei?",
    turkce: "Boş odanız var mı?",
    level: "A1",
    notes: "Otel sorgusu",
  },
  {
    cumle: "Wo ist die Toilette?",
    turkce: "Tuvalet nerede?",
    level: "A1",
    notes: "Yer sorma",
  },
  {
    cumle: "Wo ist der Ausgang?",
    turkce: "Çıkış nerede?",
    level: "A1",
    notes: "Yer sorma",
  },
  {
    cumle: "Wie spät ist es?",
    turkce: "Saat kaç?",
    level: "A1",
    notes: "Saat sorma",
  },
  {
    cumle: "Es ist 10 Uhr.",
    turkce: "Saat 10.",
    level: "A1",
    notes: "Saat belirtme",
  },
  {
    cumle: "Es ist halb acht.",
    turkce: "Saat yedi buçuk.",
    level: "A1",
    notes: "Saat belirtme",
  },
  {
    cumle: "Ich habe Hunger.",
    turkce: "Açım.",
    level: "A1",
    notes: "İhtiyaç ifadesi",
  },
  {
    cumle: "Ich habe Durst.",
    turkce: "Susadım.",
    level: "A1",
    notes: "İhtiyaç ifadesi",
  },
  {
    cumle: "Ich bin müde.",
    turkce: "Yorgunum.",
    level: "A1",
    notes: "Durum ifadesi",
  },
  {
    cumle: "Ich bin krank.",
    turkce: "Hastayım.",
    level: "A1",
    notes: "Sağlık durumu ifadesi",
  },
  {
    cumle: "Wo ist der Bahnhof?",
    turkce: "Tren istasyonu nerede?",
    level: "A1",
    notes: "Yer sorma",
  },
  {
    cumle: "Wo ist die nächste Bushaltestelle?",
    turkce: "En yakın otobüs durağı nerede?",
    level: "A1",
    notes: "Yer sorma",
  },
  {
    cumle: "Wie komme ich zum Hotel?",
    turkce: "Otele nasıl giderim?",
    level: "A1",
    notes: "Yol tarifi sorma",
  },

  // A2 SEVİYESİ - GÜNLÜK İLETİŞİM
  {
    cumle: "Ich hätte gerne eine Tasse Tee.",
    turkce: "Bir fincan çay istiyorum.",
    level: "A2",
    notes: "Kibar sipariş",
  },
  {
    cumle: "Können Sie mir helfen?",
    turkce: "Bana yardım edebilir misiniz?",
    level: "A2",
    notes: "Yardım isteme",
  },
  {
    cumle: "Ich brauche Hilfe.",
    turkce: "Yardıma ihtiyacım var.",
    level: "A2",
    notes: "Yardım talebi",
  },
  {
    cumle: "Ich suche den Bahnhof.",
    turkce: "Tren istasyonunu arıyorum.",
    level: "A2",
    notes: "Yer arama",
  },
  {
    cumle: "Ich habe mich verlaufen.",
    turkce: "Kayboldum.",
    level: "A2",
    notes: "Durum ifadesi",
  },
  {
    cumle: "Wie komme ich zum Museum?",
    turkce: "Müzeye nasıl giderim?",
    level: "A2",
    notes: "Yol tarifi sorma",
  },
  {
    cumle: "Ist es weit von hier?",
    turkce:
      "Burise yakın bir mesafede bulunuyor. Mesafeyi yürüyerek 30 dakikada katedebilirsiniz.",

    level: "A2",
    notes: "Mesafe sorma",
  },
  {
    cumle: "Gehen Sie geradeaus und dann links.",
    turkce: "Düz gidin ve sonra sola dönün.",
    level: "A2",
    notes: "Yol tarifi verme",
  },
  {
    cumle: "Es ist ungefähr 10 Minuten zu Fuß.",
    turkce: "Yaklaşık 10 dakikalık yürüme mesafesinde.",
    level: "A2",
    notes: "Mesafe belirtme",
  },
  {
    cumle: "Ich möchte eine Fahrkarte kaufen.",
    turkce: "Bir bilet satın almak istiyorum.",
    level: "A2",
    notes: "Bilet alma",
  },
  {
    cumle: "Einfach oder hin und zurück?",
    turkce: "Tek yön mü gidiş-dönüş mü?",
    level: "A2",
    notes: "Bilet türü sorma",
  },
  {
    cumle: "Wann fährt der nächste Zug nach Berlin?",
    turkce: "Berlin'e bir sonraki tren ne zaman kalkıyor?",
    level: "A2",
    notes: "Tren saati sorma",
  },
  {
    cumle: "Von welchem Gleis fährt der Zug ab?",
    turkce: "Tren hangi perondan kalkıyor?",
    level: "A2",
    notes: "Peron sorma",
  },
  {
    cumle: "Ist dieser Platz frei?",
    turkce: "Bu yer boş mu?",
    level: "A2",
    notes: "Yer sorma",
  },
  {
    cumle: "Darf ich hier sitzen?",
    turkce: "Buraya oturabilir miyim?",
    level: "A2",
    notes: "İzin isteme",
  },

  // A2 SEVİYESİ - HOBİLER VE BOŞ ZAMAN
  {
    cumle: "Was machen Sie in Ihrer Freizeit?",
    turkce: "Boş zamanlarınızda ne yaparsınız?",
    level: "A2",
    notes: "Hobi sorma",
  },
  {
    cumle: "Ich lese gerne Bücher.",
    turkce: "Kitap okumayı severim.",
    level: "A2",
    notes: "Hobi belirtme",
  },
  {
    cumle: "Ich spiele Fußball.",
    turkce: "Futbol oynarım.",
    level: "A2",
    notes: "Hobi belirtme",
  },
  {
    cumle: "Ich gehe oft ins Kino.",
    turkce: "Sık sık sinemaya giderim.",
    level: "A2",
    notes: "Hobi belirtme",
  },
  {
    cumle: "Ich höre gerne Musik.",
    turkce: "Müzik dinlemeyi severim.",
    level: "A2",
    notes: "Hobi belirtme",
  },
  {
    cumle: "Ich koche gerne.",
    turkce: "Yemek yapmayı severim.",
    level: "A2",
    notes: "Hobi belirtme",
  },
  {
    cumle: "Ich reise gerne.",
    turkce: "Seyahat etmeyi severim.",
    level: "A2",
    notes: "Hobi belirt nyelir",
  },
  {
    cumle: "Ich treibe Sport.",
    turkce: "Spor yaparım.",
    level: "A2",
    notes: "Hobi belirtme",
  },
  {
    cumle: "Ich spiele Gitarre.",
    turkce: "Gitar çalarım.",
    level: "A2",
    notes: "Hobi belirtme",
  },
  {
    cumle: "Ich tanze gerne.",
    turkce: "Dans etmeyi severim.",
    level: "A2",
    notes: "Hobi belirtme",
  },
  {
    cumle: "Haben Sie Geschwister?",
    turkce: "Kardeşleriniz var mı?",
    level: "A2",
    notes: "Aile sorma",
  },
  {
    cumle: "Ich habe einen Bruder und eine Schwester.",
    turkce: "Bir erkek kardeşim ve bir kız kardeşim var.",
    level: "A2",
    notes: "Aile belirtme",
  },
  {
    cumle: "Ich habe keine Geschwister.",
    turkce: "Kardeşim yok.",
    level: "A2",
    notes: "Aile belirtme",
  },
  {
    cumle: "Ich bin Einzelkind.",
    turkce: "Ben tek çocuğum.",
    level: "A2",
    notes: "Aile belirtme",
  },
  {
    cumle: "Was sind deine Hobbys?",
    turkce: "Hobilerin neler?",
    level: "A2",
    notes: "Hobi sorma",
  },
  {
    cumle: "Ich mag Musik hören.",
    turkce: "Müzik dinlemeyi seviyorum.",
    level: "A2",
    notes: "Hobi belirtme",
  },
  {
    cumle: "Welche Musik hörst du gerne?",
    turkce: "Ne tür müzik dinlemeyi seversin?",
    level: "A2",
    notes: "Müzik türü sorma",
  },
  {
    cumle: "Ich höre gerne Rock und Pop.",
    turkce: "Rock ve pop dinlemeyi severim.",
    level: "A2",
    notes: "Müzik türü belirtme",
  },
  {
    cumle: "Welche Filme magst du?",
    turkce: "Hangi filmleri seversin?",
    level: "A2",
    notes: "Film türü sorma",
  },
  {
    cumle: "Ich mag Komödien und Actionfilme.",
    turkce: "Komedileri ve aksiyon filmlerini severim.",
    level: "A2",
    notes: "Film türü belirtme",
  },

  // A2 SEVİYESİ - DİL VE ZAMAN İFADELERİ
  {
    cumle: "Welche Sprachen sprichst du?",
    turkce: "Hangi dilleri konuşuyorsun?",
    level: "A2",
    notes: "Dil becerisi sorma",
  },
  {
    cumle: "Ich spreche Deutsch und Englisch.",
    turkce: "Almanca ve İngilizce konuşuyorum.",
    level: "A2",
    notes: "Dil becerisi belirtme",
  },
  {
    cumle: "Ich lerne seit einem Jahr Deutsch.",
    turkce: "Bir yıldır Almanca öğreniyorum.",
    level: "A2",
    notes: "Öğrenme süresi belirtme",
  },
  {
    cumle: "Deutsch ist eine schwere Sprache.",
    turkce: "Almanca zor bir dil.",
    level: "A2",
    notes: "Dil değerlendirme",
  },
  {
    cumle: "Ich möchte mein Deutsch verbessern.",
    turkce: "Almancamı geliştirmek istiyorum.",
    level: "A2",
    notes: "Hedef belirtme",
  },
  {
    cumle: "Was hast du am Wochenende gemacht?",
    turkce: "Hafta sonu ne yaptın?",
    level: "A2",
    notes: "Geçmiş etkinlik sorma",
  },
  {
    cumle: "Ich war zu Hause und habe ferngesehen.",
    turkce: "Evdeydim ve televizyon izledim.",
    level: "A2",
    notes: "Geçmiş etkinlik belirtme",
  },
  {
    cumle: "Ich war im Kino.",
    turkce: "Sinemadaydım.",
    level: "A2",
    notes: "Geçmiş etkinlik belirtme",
  },
  {
    cumle: "Ich habe Freunde getroffen.",
    turkce: "Arkadaşlarımla buluştum.",
    level: "A2",
    notes: "Geçmiş etkinlik belirtme",
  },
  {
    cumle: "Ich hatte keine Zeit.",
    turkce: "Vaktim yoktu.",
    level: "A2",
    notes: "Geçmiş durum belirtme",
  },
  {
    cumle: "Ich war sehr beschäftigt.",
    turkce: "Çok meşguldüm.",
    level: "A2",
    notes: "Geçmiş durum belirtme",
  },
  {
    cumle: "Hast du morgen Zeit?",
    turkce: "Yarın vaktin var mı?",
    level: "A2",
    notes: "Plan sorma",
  },
  {
    cumle: "Leider habe ich keine Zeit.",
    turkce: "Maalesef vaktim yok.",
    level: "A2",
    notes: "Olumsuz yanıt",
  },
  {
    cumle: "Ja, ich habe Zeit.",
    turkce: "Evet, vaktim var.",
    level: "A2",
    notes: "Olumlu yanıt",
  },
  {
    cumle: "Wir könnten ins Restaurant gehen.",
    turkce: "Restorana gidebiliriz.",
    level: "A2",
    notes: "Plan önerisi",
  },
  {
    cumle: "Das klingt gut.",
    turkce: "Bu kulağa hoş geliyor.",
    level: "A2",
    notes: "Olumlu tepki",
  },
  {
    cumle: "Das Wetter ist heute schön.",
    turkce: "Bugün hava güzel.",
    level: "A2",
    notes: "Hava durumu belirtme",
  },
  {
    cumle: "Es regnet stark.",
    turkce: "Şiddetli yağmur yağıyor.",
    level: "A2",
    notes: "Hava durumu belirtme",
  },
  {
    cumle: "Es ist heute sehr heiß.",
    turkce: "Bugün çok sıcak.",
    level: "A2",
    notes: "Hava durumu belirtme",
  },
  {
    cumle: "Es ist kalt.",
    turkce: "Hava soğuk.",
    level: "A2",
    notes: "Hava durumu belirtme",
  },
  {
    cumle: "Es schneit.",
    turkce: "Kar yağıyor.",
    level: "A2",
    notes: "Hava durumu belirtme",
  },
  {
    cumle: "Ich muss jetzt gehen.",
    turkce: "Şimdi gitmem gerek.",
    level: "A2",
    notes: "Zorunluluk ifadesi",
  },
  {
    cumle: "Ich rufe dich später an.",
    turkce: "Seni daha sonra arayacağım.",
    level: "A2",
    notes: "Gelecek plan belirtme",
  },
  {
    cumle: "Wir sehen uns morgen.",
    turkce: "Yarın görüşürüz.",
    level: "A2",
    notes: "Veda ifadesi",
  },
  {
    cumle: "Ich bin spät dran.",
    turkce: "Geç kaldım.",
    level: "A2",
    notes: "Durum ifadesi",
  },
  {
    cumle: "Ich habe es eilig.",
    turkce: "Acelem var.",
    level: "A2",
    notes: "Acil durum ifadesi",
  },

  // B1 SEVİYESİ - İLETİŞİM VE GÜNLÜK HAYAT
  {
    cumle: "Könnten Sie mir bitte erklären, wie das funktioniert?",
    turkce: "Bunun nasıl çalıştığını bana açıklayabilir misiniz?",
    level: "B1",
    notes: "Kibar açıklama isteme",
  },
  {
    cumle: "Können Sie mir das genauer erläutern?",
    turkce: "Bunu bana daha detaylı açıklayabilir misiniz?",
    level: "B1",
    notes: "Detaylı bilgi isteme",
  },
  {
    cumle: "Ich verstehe den Zusammenhang nicht ganz.",
    turkce: "Bağlantıyı tam olarak anlamıyorum.",
    level: "B1",
    notes: "Anlama güçlüğü ifadesi",
  },
  {
    cumle: "Können Sie ein Beispiel geben?",
    turkce: "Bir örnek verebilir misiniz?",
    level: "B1",
    notes: "Örnek isteme",
  },
  {
    cumle: "Ich würde gerne einen Termin vereinbaren.",
    turkce: "Bir randevu almak istiyorum.",
    level: "B1",
    notes: "Randevu talebi",
  },
  {
    cumle: "Wann passt es Ihnen am besten?",
    turkce: "Size en uygun zaman ne zaman?",
    level: "B1",
    notes: "Zaman uygunluğu sorma",
  },
  {
    cumle: "Ich bin an diesem Tag leider verhindert.",
    turkce: "O gün maalesef meşgulüm.",
    level: "B1",
    notes: "Meşguliyet ifadesi",
  },
  {
    cumle: "Können wir den Termin verschieben?",
    turkce: "Randevuyu erteleyebilir miyiz?",
    level: "B1",
    notes: "Randevu erteleme talebi",
  },
  {
    cumle: "Ich habe meine Brieftasche verloren.",
    turkce: "Cüzdanımı kaybettim.",
    level: "B1",
    notes: "Kayıp eşya belirtme",
  },
  {
    cumle: "Haben Sie mein Handy gesehen?",
    turkce: "Telefonumu gördünüz mü?",
    level: "B1",
    notes: "Eşya sorma",
  },
  {
    cumle: "Ich habe meinen Schlüssel vergessen.",
    turkce: "Anahtarımı unuttum.",
    level: "B1",
    notes: "Unutma ifadesi",
  },
  {
    cumle: "Können Sie mir den Weg zur Post beschreiben?",
    turkce: "Bana postaneye giden yolu tarif edebilir misiniz?",
    level: "B1",
    notes: "Yol tarifi isteme",
  },
  {
    cumle: "Wie lange dauert es zu Fuß?",
    turkce: "Yürüyerek ne kadar sürer?",
    level: "B1",
    notes: "Süre sorma",
  },
  {
    cumle: "Gibt es hier in der Nähe eine Bank?",
    turkce: "Buralarda bir banka var mı?",
    level: "B1",
    notes: "Yer sorma",
  },
  {
    cumle: "Wo ist der nächste Supermarkt?",
    turkce: "En yakın süpermarket nerede?",
    level: "B1",
    notes: "Yer sorma",
  },

  // B1 SEVİYESİ - EV VE GÜNLÜK YAŞAM
  {
    cumle: "Ich suche eine Wohnung zu mieten.",
    turkce: "Kiralamak için bir daire arıyorum.",
    level: "B1",
    notes: "Kiralık ev arama",
  },
  {
    cumle: "Wie hoch ist die monatliche Miete?",
    turkce: "Aylık kira ne kadar?",
    level: "B1",
    notes: "Kira sorma",
  },
  {
    cumle: "Sind die Nebenkosten im Preis enthalten?",
    turkce: "Yan giderler fiyata dahil mi?",
    level: "B1",
    notes: "Ek masraf sorma",
  },
  {
    cumle: "Gibt es einen Aufzug im Gebäude?",
    turkce: "Binada asansör var mı?",
    level: "B1",
    notes: "Bina özelliği sorma",
  },
  {
    cumle: "Wie groß ist die Wohnung?",
    turkce: "Daire ne kadar büyük?",
    level: "B1",
    notes: "Daire boyutu sorma",
  },
  {
    cumle: "Die Heizung funktioniert nicht.",
    turkce: "Kalorifer çalışmıyor.",
    level: "B1",
    notes: "Arıza bildirme",
  },
  {
    cumle: "Der Wasserhahn tropft.",
    turkce: "Musluk damlıyor.",
    level: "B1",
    notes: "Arıza bildirme",
  },
  {
    cumle: "Ich muss die Waschmaschine reparieren lassen.",
    turkce: "Çamaşır makinesini tamir ettirmem gerekiyor.",
    level: "B1",
    notes: "Tamir talebi",
  },
  {
    cumle: "Können Sie es bitte reparieren?",
    turkce: "Lütfen tamir edebilir misiniz?",
    level: "B1",
    notes: "Kibar tamir talebi",
  },
  {
    cumle: "Wann kann der Techniker kommen?",
    turkce: "Teknisyen ne zaman gelebilir?",
    level: "B1",
    notes: "Zaman sorma",
  },

  // B1 SEVİYESİ - FİKİR VE TAVSİYE
  {
    cumle: "Was würden Sie an meiner Stelle tun?",
    turkce: "Benim yerimde olsaydınız ne yapardınız?",
    level: "B1",
    notes: "Tavsiye isteme",
  },
  {
    cumle: "Ich bin mir nicht sicher, was ich tun soll.",
    turkce: "Ne yapacağımdan emin değilim.",
    level: "B1",
    notes: "Kararsızlık ifadesi",
  },
  {
    cumle: "Haben Sie einen Vorschlag?",
    turkce: "Bir öneriniz var mı?",
    level: "B1",
    notes: "Öneri isteme",
  },
  {
    cumle: "Das ist eine gute Idee.",
    turkce: "Bu iyi bir fikir.",
    level: "B1",
    notes: "Olumlu tepki",
  },
  {
    cumle: "Ich bin nicht davon überzeugt.",
    turkce: "Buna ikna olmadım.",
    level: "B1",
    notes: "İkna olmama ifadesi",
  },
  {
    cumle: "Ich freue mich auf unser Treffen.",
    turkce: "Görüşmemizi dört gözle bekliyorum.",
    level: "B1",
    notes: "Heyecan ifadesi",
  },
  {
    cumle: "Ich bin gespannt auf Ihren Vortrag.",
    turkce: "Sunumunuzu merakla bekliyorum.",
    level: "B1",
    notes: "Merak ifadesi",
  },
  {
    cumle: "Es tut mir leid, dass ich zu spät gekommen bin.",
    turkce: "Geç kaldığım için özür dilerim.",
    level: "B1",
    notes: "Özür ifadesi",
  },
  {
    cumle: "Ich entschuldige mich für die Unannehmlichkeiten.",
    turkce: "Rahatsızlık için özür dilerim.",
    level: "B1",
    notes: "Resmi özür",
  },
  {
    cumle: "Ich bin mit dem Ergebnis nicht zufrieden.",
    turkce: "Sonuçtan memnun değilim.",
    level: "B1",
    notes: "Memnuniyetsizlik ifadesi",
  },
  {
    cumle: "Das hat meine Erwartungen nicht erfüllt.",
    turkce: "Bu beklentilerimi karşılamadı.",
    level: "B1",
    notes: "Hayal kırıklığı ifadesi",
  },
  {
    cumle: "Wir sollten das Problem so schnell wie möglich lösen.",
    turkce: "Bu sorunu mümkün olduğunca çabuk çözmeliyiz.",
    level: "B1",
    notes: "Acil çözüm önerisi",
  },
  {
    cumle: "Wir müssen eine Lösung finden.",
    turkce: "Bir çözüm bulmamız gerekiyor.",
    level: "B1",
    notes: "Çözüm gerekliliği",
  },

  // B1 SEVİYESİ - GELECEK PLANLARI VE GEÇMİŞ DENEYİMLER
  {
    cumle: "Ich habe vor, nächstes Jahr nach Deutschland zu reisen.",
    turkce: "Gelecek yıl Almanya'ya seyahat etmeyi planlıyorum.",
    level: "B1",
    notes: "Gelecek plan belirtme",
  },
  {
    cumle: "Was sind deine Pläne für die Zukunft?",
    turkce: "Gelecek için planların neler?",
    level: "B1",
    notes: "Plan sorma",
  },
  {
    cumle: "Ich möchte im Ausland studieren.",
    turkce: "Yurtdışında okumak istiyorum.",
    level: "B1",
    notes: "Hedef belirtme",
  },
  {
    cumle: "Ich will meine Deutschkenntnisse verbessern.",
    turkce: "Almanca bilgimi geliştirmek istiyorum.",
    level: "B1",
    notes: "Hedef belirtme",
  },
  {
    cumle: "Haben Sie schon einmal in der Türkei Urlaub gemacht?",
    turkce: "Hiç Türkiye'de tatil yaptınız mı?",
    level: "B1",
    notes: "Geçmiş deneyim sorma",
  },
  {
    cumle: "Ich war noch nie in Deutschland.",
    turkce: "Hiç Almanya'da bulunmadım.",
    level: "B1",
    notes: "Geçmiş deneyim belirtme",
  },
  {
    cumle: "Das war meine beste Reise.",
    turkce: "Bu benim en iyi seyahatimdi.",
    level: "B1",
    notes: "Geçmiş deneyim değerlendirme",
  },
  {
    cumle: "Ich habe viele interessante Menschen kennengelernt.",
    turkce: "Birçok ilginç insanla tanıştım.",
    level: "B1",
    notes: "Geçmiş deneyim belirtme",
  },

  // B1 SEVİYESİ - KOŞULLU CÜMLELER VE FİKİR BELİRTME
  {
    cumle: "Wenn ich Zeit hätte, würde ich mehr Sport treiben.",
    turkce: "Vaktim olsa, daha fazla spor yapardım.",
    level: "B1",
    notes: "Koşullu cümle (Konjunktiv II)",
  },
  {
    cumle: "Wenn das Wetter schön ist, gehen wir spazieren.",
    turkce: "Hava güzelse, yürüyüşe çıkarız.",
    level: "B1",
    notes: "Koşullu cümle",
  },
  {
    cumle: "Falls ich nicht rechtzeitig komme, fang ohne mich an.",
    turkce: "Eğer zamanında gelemezsem, bensiz başla.",
    level: "B1",
    notes: "Koşullu cümle",
  },
  {
    cumle: "Ich bin seit drei Jahren verheiratet.",
    turkce: "Üç yıldır evliyim.",
    level: "B1",
    notes: "Süre belirtme",
  },
  {
    cumle: "Ich wohne seit 2019 in dieser Stadt.",
    turkce: "2019'dan beri bu şehirde yaşıyorum.",
    level: "B1",
    notes: "Süre belirtme",
  },
  {
    cumle: "Wie lange kennst du ihn schon?",
    turkce: "Onu ne zamandır tanıyorsun?",
    level: "B1",
    notes: "Süre sorma",
  },
  {
    cumle: "Was sind die Vor- und Nachteile dieser Methode?",
    turkce: "Bu yöntemin avantajları ve dezavantajları nelerdir?",
    level: "B1",
    notes: "Değerlendirme sorma",
  },
  {
    cumle: "Einerseits ist es praktisch, andererseits ist es teuer.",
    turkce: "Bir yandan pratik, diğer yandan pahalı.",
    level: "B1",
    notes: "Karşılaştırma ifadesi",
  },
  {
    cumle: "Ich bin der Meinung, dass...",
    turkce: "Bence...",
    level: "B1",
    notes: "Fikir belirtme",
  },
  {
    cumle: "Meiner Ansicht nach ist das keine gute Idee.",
    turkce: "Bana göre bu iyi bir fikir değil.",
    level: "B1",
    notes: "Fikir belirtme",
  },
  {
    cumle: "Ich denke, wir sollten zuerst recherchieren.",
    turkce: "Bence önce araştırma yapmalıyız.",
    level: "B1",
    notes: "Öneri sunma",
  },

  // B1 SEVİYESİ - GÜNLÜK KONUŞMA İFADELERİ
  {
    cumle: "Es wäre besser, wenn wir früher anfangen würden.",
    turkce: "Daha erken başlasak daha iyi olurdu.",
    level: "B1",
    notes: "Koşullu öneri",
  },
  {
    cumle: "Könnten Sie das bitte wiederholen?",
    turkce: "Bunu tekrar edebilir misiniz lütfen?",
    level: "B1",
    notes: "Tekrar isteme",
  },
  {
    cumle: "Ich habe nicht verstanden, was Sie meinen.",
    turkce: "Ne demek istediğinizi anlamadım.",
    level: "B1",
    notes: "Anlamama ifadesi",
  },
  {
    cumle: "Könnten Sie das anders formulieren?",
    turkce: "Bunu başka türlü ifade edebilir misiniz?",
    level: "B1",
    notes: "Yeniden ifade isteme",
  },
  {
    cumle: "Ich habe das Gefühl, dass etwas nicht stimmt.",
    turkce: "Bir şeylerin yanlış olduğu hissine kapılıyorum.",
    level: "B1",
    notes: "Sezgi ifadesi",
  },
  {
    cumle: "Ich bin mir nicht sicher, ob das funktionieren wird.",
    turkce: "Bunun işe yarayacağından emin değilim.",
    level: "B1",
    notes: "Belirsizlik ifadesi",
  },
  {
    cumle: "Wir müssen uns beeilen, sonst verpassen wir den Zug.",
    turkce: "Acele etmeliyiz, yoksa treni kaçıracağız.",
    level: "B1",
    notes: "Acil durum uyarısı",
  },
  {
    cumle: "Beeil dich, wir sind spät dran!",
    turkce: "Acele et, geç kaldık!",
    level: "B1",
    notes: "Acil durum çağrısı",
  },
  {
    cumle: "Ich bin mit deinem Vorschlag einverstanden.",
    turkce: "Önerinize katılıyorum.",
    level: "B1",
    notes: "Onay ifadesi",
  },
  {
    cumle: "Ich stimme dir voll und ganz zu.",
    turkce: "Sana tamamen katılıyorum.",
    level: "B1",
    notes: "Tam onay",
  },
  {
    cumle: "Da bin ich anderer Meinung.",
    turkce: "Bu konuda farklı düşünüyorum.",
    level: "B1",
    notes: "Fikir ayrılığı",
  },
  {
    cumle: "Darf ich Ihnen eine Frage stellen?",
    turkce: "Size bir soru sorabilir PRED miyim?",
    level: "B1",
    notes: "Kibar izin isteme",
  },
  {
    cumle: "Darf ich etwas vorschlagen?",
    turkce: "Bir şey önerebilir miyim?",
    level: "B1",
    notes: "Öneri sunma izni",
  },
  {
    cumle: "Es ist mir egal, was die anderen denken.",
    turkce: "Başkalarının ne düşündüğü umurumda değil.",
    level: "B1",
    notes: "Kayıtsızlık ifadesi",
  },
  {
    cumle: "Das spielt für mich keine Rolle.",
    turkce: "Bu benim için önemli değil.",
    level: "B1",
    notes: "Kayıtsızlık ifadesi",
  },

  // B1 SEVİYESİ - İŞ VE TOPLANTI İFADELERİ
  {
    cumle: "Können wir einen anderen Termin vereinbaren?",
    turkce: "Başka bir randevu ayarlayabilir miyiz?",
    level: "B1",
    notes: "Randevu değiştirme",
  },
  {
    cumle: "Der Termin passt mir leider nicht.",
    turkce: "Maalesef randevu bana uygun değil.",
    level: "B1",
    notes: "Randevu uygunluğu",
  },
  {
    cumle: "Können wir das Meeting auf nächste Woche verschieben?",
    turkce: "Toplantıyı gelecek haftaya erteleyebilir miyiz?",
    level: "B1",
    notes: "Toplantı erteleme",
  },
  {
    cumle: "Ich bin noch nicht fertig mit meiner Arbeit.",
    turkce: "İşimi henüz bitirmedim.",
    level: "B1",
    notes: "İş durumu belirtme",
  },
  {
    cumle: "Ich brauche noch etwas mehr Zeit.",
    turkce: "Biraz daha zamana ihtiyacım var.",
    level: "B1",
    notes: "Zaman talebi",
  },
  {
    cumle: "Die Frist ist zu knapp.",
    turkce: "Süre çok kısa.",
    level: "B1",
    notes: "Süre değerlendirme",
  },
  {
    cumle: "Können Sie mir die Unterlagen zuschicken?",
    turkce: "Bana belgeleri gönderebilir misiniz?",
    level: "B1",
    notes: "Belge talebi",
  },
  {
    cumle: "Ich habe die E-Mail noch nicht erhalten.",
    turkce: "E-postayı henüz almadım.",
    level: "B1",
    notes: "İletişim durumu",
  },
  {
    cumle: "Was halten Sie von diesem Vorschlag?",
    turkce: "Bu öneri hakkında ne düşünüyorsunuz?",
    level: "B1",
    notes: "Fikir sorma",
  },
  {
    cumle: "Das klingt vielversprechend.",
    turkce: "Bu umut verici görünüyor.",
    level: "B1",
    notes: "Olumlu değerlendirme",
  },
  {
    cumle: "Das überzeugt mich nicht.",
    turkce: "Bu beni ikna etmiyor.",
    level: "B1",
    notes: "İkna olmama ifadesi",
  },
  {
    cumle: "Ich finde es wichtig, dass wir darüber sprechen.",
    turkce: "Bunun hakkında konuşmamızın önemli olduğunu düşünüyorum.",
    level: "B1",
    notes: "Konuşma gerekliliği",
  },
  {
    cumle: "Wir sollten alle Aspekte berücksichtigen.",
    turkce: "Tüm yönleri göz önünde bulundurmalıyız.",
    level: "B1",
    notes: "Değerlendirme önerisi",
  },
  {
    cumle: "Haben Sie noch weitere Fragen?",
    turkce: "Başka sorularınız var mı?",
    level: "B1",
    notes: "Soru sorma",
  },

  // B1 SEVİYESİ - SOSYAL İLİŞKİLER
  {
    cumle: "Es tut mir leid, aber ich habe keine Zeit.",
    turkce: "Üzgünüm ama vaktim yok.",
    level: "B1",
    notes: "Zaman eksikliği ifadesi",
  },
  {
    cumle: "Ich bin momentan sehr beschäftigt.",
    turkce: "Şu anda çok meşgulüm.",
    level: "B1",
    notes: "Meşguliyet ifadesi",
  },
  {
    cumle: "Vielleicht ein andermal.",
    turkce: "Belki başka bir zaman.",
    level: "B1",
    notes: "Erteleme önerisi",
  },
  {
    cumle: "Ich freue mich, Sie kennenzulernen.",
    turkce: "Sizi tanıdığıma memnun oldum.",
    level: "B1",
    notes: "Tanışma ifadesi",
  },
  {
    cumle: "Es war ein schöner Abend mit Ihnen.",
    turkce: "Sizinle güzel bir akşamdı.",
    level: "B1",
    notes: "Olumlu deneyim",
  },
  {
    cumle: "Wir sollten öfter etwas zusammen unternehmen.",
    turkce: "Daha sık birlikte bir şeyler yapmalıyız.",
    level: "B1",
    notes: "Sosyal öneri",
  },
  {
    cumle: "Ich werde mein Bestes tun.",
    turkce: "Elimden geleni yapacağım.",
    level: "B1",
    notes: "Çaba sözü",
  },
  {
    cumle: "Sie können sich auf mich verlassen.",
    turkce: "Bana güvenebilirsiniz.",
    level: "B1",
    notes: "Güvence verme",
  },
  {
    cumle: "Ich stehe Ihnen gerne zur Verfügung.",
    turkce: "Memnuniyetle hizmetinizdeyim.",
    level: "B1",
    notes: "Yardım teklifi",
  },
  {
    cumle: "Ich wünsche Ihnen viel Erfolg!",
    turkce: "Size başarılar dilerim!",
    level: "B1",
    notes: "İyi dilek",
  },
  {
    cumle: "Gute Besserung!",
    turkce: "Geçmiş olsun!",
    level: "B1",
    notes: "Sağlık dileği",
  },
  {
    cumle: "Herzlichen Glückwunsch zum Geburtstag!",
    turkce: "Doğum günün kutlu olsun!",
    level: "B1",
    notes: "Tebrik ifadesi",
  },
  {
    cumle: "Frohe Weihnachten und ein gutes neues Jahr!",
    turkce: "Mutlu Noeller ve mutlu yıllar!",
    level: "B1",
    notes: "Tatil tebriği",
  },

  // B2 SEVİYESİ - DAHA KARMAŞIK İFADELER
  {
    cumle: "Es wäre mir lieb, wenn Sie das bis morgen erledigen könnten.",
    turkce: "Bunu yarına kadar halledebilirseniz sevinirim.",
    level: "B2",
    notes: "Kibar rica (Konjunktiv II)",
  },
  {
    cumle: "Ich würde mich freuen, wenn Sie meine Einladung annehmen würden.",
    turkce: "Davetimi kabul ederseniz sevinirim.",
    level: "B2",
    notes: "Kibar davet",
  },
  {
    cumle: "Obwohl ich mein Bestes gegeben habe, ist es mir nicht gelungen.",
    turkce: "Elimden gelenin en iyisini yapmama rağmen, başaramadım.",
    level: "B2",
    notes: "Zıtlık ifadesi",
  },
  {
    cumle: "Es ist wichtig, dass wir alle Möglichkeiten in Betracht ziehen.",
    turkce: "Tüm olasılıkları göz önünde bulundurmamız önemli.",
    level: "B2",
    notes: "Önem vurgusu",
  },
  {
    cumle: "Ich hätte es anders gemacht, wenn ich gewusst hätte, dass...",
    turkce: "Eğer bilseydim ki..., farklı yapardım.",
    level: "B2",
    notes: "Koşullu geçmiş (Konjunktiv II)",
  },
  {
    cumle: "Unter diesen Umständen sollten wir vorsichtig sein.",
    turkce: "Bu koşullar altında dikkatli olmalıyız.",
    level: "B2",
    notes: "Durum değerlendirme",
  },
  {
    cumle: "Im Großen und Ganzen bin ich mit dem Ergebnis zufrieden.",
    turkce: "Genel olarak sonuçtan memnunum.",
    level: "B2",
    notes: "Genel değerlendirme",
  },
  {
    cumle:
      "Einerseits verstehe ich Ihren Standpunkt, andererseits muss ich widersprechen.",
    turkce:
      "Bir yandan bakış açınızı anlıyorum, diğer yandan karşı çıkmak zorundayım.",
    level: "B2",
    notes: "Karşıt görüş sunma",
  },
  {
    cumle: "Soweit ich informiert bin, findet die Veranstaltung nicht statt.",
    turkce: "Bildiğim kadarıyla, etkinlik gerçekleşmeyecek.",
    level: "B2",
    notes: "Bilgi aktarımı",
  },
  {
    cumle: "Es liegt auf der Hand, dass wir eine Lösung finden müssen.",
    turkce: "Bir çözüm bulmamız gerektiği açıktır.",
    level: "B2",
    notes: "Açık gereklilik",
  },
];

const Konusma = () => {
  // Son index'i saklamak için state
  const [currentIndex, setCurrentIndex] = useState(() => {
    // localStorage'dan son index'i al, yoksa 0
    return parseInt(localStorage.getItem("currentIndex")) || 0;
  });

  // Almanca göster/gizle state'i
  const [showAlmanca, setShowAlmanca] = useState(false);

  // Favorileri saklamak için state
  const [favorites, setFavorites] = useState(() => {
    // localStorage'dan favorileri al, yoksa boş array
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  // Favoriler görünümünü aç/kapa
  const [showFavorites, setShowFavorites] = useState(false);

  // currentIndex değiştiğinde localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("currentIndex", currentIndex);
  }, [currentIndex]);

  // favorites değiştiğinde localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
    setShowAlmanca(false); // Yeni cümleye geçince Almanca kısmı kapanır
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
    setShowAlmanca(false); // Yeni cümleye geçince Almanca kısmı kapanır
  };

  // Favori ekleme/kaldırma
  const toggleFavorite = () => {
    const currentItem = data[currentIndex];
    if (favorites.some((fav) => fav.cumle === currentItem.cumle)) {
      // Favorilerde varsa kaldır
      setFavorites(favorites.filter((fav) => fav.cumle !== currentItem.cumle));
    } else {
      // Favorilerde yoksa ekle
      setFavorites([...favorites, currentItem]);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Favoriler butonu */}
        <div className="flex justify-between mb-4">
          <button
            onClick={() => setShowFavorites(!showFavorites)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            {showFavorites ? "Kartlara Dön" : "Favorileri Göster"}
          </button>
        </div>

        {/* Favoriler görünümü */}
        {showFavorites ? (
          <div>
            <h2 className="text-lg font-semibold mb-4">Favoriler</h2>
            {favorites.length === 0 ? (
              <p className="text-gray-600">Henüz favori eklemediniz.</p>
            ) : (
              <ul className="space-y-4">
                {favorites.map((fav, index) => (
                  <li key={index} className="border-b pb-2">
                    <p className="font-semibold">{fav.turkce}</p>
                    <p className="text-gray-600">{fav.cumle}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <>
            {/* Flashcard görünümü */}
            <div className="text-center mb-4">
              <p className="text-lg font-semibold text-gray-800">
                {data[currentIndex].turkce}
              </p>
              <div className="mt-4">
                <button
                  onClick={() => setShowAlmanca(!showAlmanca)}
                  className="text-blue-500 hover:underline focus:outline-none"
                >
                  {showAlmanca ? "Almanca’yı Gizle" : "Almanca’yı Göster"}
                </button>
                {showAlmanca && (
                  <p className="mt-2 text-gray-600">
                    {data[currentIndex].cumle}
                  </p>
                )}
              </div>
            </div>

            {/* Favori butonu */}
            <div className="text-center mb-4">
              <button
                onClick={toggleFavorite}
                className={`px-4 py-2 rounded transition ${
                  favorites.some(
                    (fav) => fav.cumle === data[currentIndex].cumle
                  )
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-yellow-500 text-white hover:bg-yellow-600"
                }`}
              >
                {favorites.some((fav) => fav.cumle === data[currentIndex].cumle)
                  ? "Favorilerden Çıkar"
                  : "Favorilere Ekle"}
              </button>
            </div>

            {/* Geri/İleri butonları */}
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
          </>
        )}
      </div>
    </div>
  );
};

export default Konusma;
