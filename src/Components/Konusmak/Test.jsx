import React, { useState, useEffect } from "react";

const data = [
  {
    cumle: "Ich hätte gern einen Kaffee.",
    turkce: "Bir kahve almak isterdim.",
    level: "A1",
    notes: "Nezaket ifadesi olarak",
  },
  {
    cumle: "Könntest du mir bitte helfen?",
    turkce: "Bana yardım edebilir misin lütfen?",
    level: "A1",
    notes: "Kibar rica",
  },
  {
    cumle: "Ich würde gerne Deutsch lernen.",
    turkce: "Almanca öğrenmek isterdim.",
    level: "A1",
    notes: "İstek ifade etme",
  },
  {
    cumle: "Wärst du so nett?",
    turkce: "Nazik olur muydun?",
    level: "A1",
    notes: "Rica ifadesi",
  },
  {
    cumle: "Ich möchte ein Wasser, bitte.",
    turkce: "Bir su isterdim, lütfen.",
    level: "A1",
    notes: "Sipariş verme",
  },
  {
    cumle: "Das wäre schön!",
    turkce: "Bu güzel olurdu!",
    level: "A1",
    notes: "Beğeni ifadesi",
  },
  {
    cumle: "Hättest du Zeit morgen?",
    turkce: "Yarın vaktin olur muydu?",
    level: "A1",
    notes: "Zaman sorma",
  },
  {
    cumle: "Würdest du mir das Salz geben?",
    turkce: "Bana tuzu verir misin?",
    level: "A1",
    notes: "Masa başı rica",
  },
  {
    cumle: "Es wäre gut für dich.",
    turkce: "Senin için iyi olurdu.",
    level: "A1",
    notes: "Öneri/tavsiye",
  },
  {
    cumle: "Ich würde gerne bezahlen.",
    turkce: "Ödemek isterdim.",
    level: "A1",
    notes: "Restoranda ödeme isteği",
  },
  {
    cumle: "Könnten Sie langsamer sprechen?",
    turkce: "Daha yavaş konuşabilir misiniz?",
    level: "A1",
    notes: "Dil öğrenirken rica",
  },
  {
    cumle: "Das wäre alles, danke.",
    turkce: "Hepsi bu kadar olurdu, teşekkürler.",
    level: "A1",
    notes: "Alışveriş sonlandırma",
  },
  {
    cumle: "Ich hätte eine Frage.",
    turkce: "Bir sorum olurdu/var.",
    level: "A1",
    notes: "Soru sorma girişi",
  },
  {
    cumle: "Wäre das möglich?",
    turkce: "Bu mümkün olur muydu?",
    level: "A1",
    notes: "İmkan sorma",
  },
  {
    cumle: "Würdest du mir einen Gefallen tun?",
    turkce: "Bana bir iyilik yapar mısın?",
    level: "A1",
    notes: "Rica etme",
  },
  {
    cumle: "Ich hätte gern die Rechnung.",
    turkce: "Hesabı almak isterdim.",
    level: "A1",
    notes: "Restoranda hesap isteme",
  },
  {
    cumle: "Das würde ich nicht machen.",
    turkce: "Bunu yapmazdım.",
    level: "A1",
    notes: "Basit tavsiye",
  },
  {
    cumle: "Könnten Sie mir zeigen, wie das geht?",
    turkce: "Bana bunun nasıl yapıldığını gösterebilir misiniz?",
    level: "A1",
    notes: "Yardım isteme",
  },
  {
    cumle: "Ich wäre froh, wenn du kommst.",
    turkce: "Gelirsen sevinirim.",
    level: "A1",
    notes: "Davet ifadesi",
  },
  {
    cumle: "Würdest du mir einen Tee bringen?",
    turkce: "Bana bir çay getirir misin?",
    level: "A1",
    notes: "Rica",
  },

  // A2 Seviyesi (21-40)
  {
    cumle: "Wenn ich Zeit hätte, würde ich ins Kino gehen.",
    turkce: "Zamanım olsaydı, sinemaya giderdim.",
    level: "A2",
    notes: "Basit şartlı cümle",
  },
  {
    cumle: "An deiner Stelle würde ich früher aufstehen.",
    turkce: "Senin yerinde olsaydım daha erken kalkardım.",
    level: "A2",
    notes: "Tavsiye verme",
  },
  {
    cumle: "Ich wünschte, ich könnte schwimmen.",
    turkce: "Keşke yüzebilseydim.",
    level: "A2",
    notes: "Dilek ifadesi",
  },
  {
    cumle: "Was würdest du in meiner Situation tun?",
    turkce: "Benim durumumda ne yapardın?",
    level: "A2",
    notes: "Tavsiye isteme",
  },
  {
    cumle: "Wenn es nicht regnen würde, könnten wir spazieren gehen.",
    turkce: "Yağmur yağmasaydı, yürüyüşe çıkabilirdik.",
    level: "A2",
    notes: "Koşullu ifade",
  },
  {
    cumle: "Ich hätte gern eine größere Wohnung.",
    turkce: "Daha büyük bir eve sahip olmak isterdim.",
    level: "A2",
    notes: "İstek belirtme",
  },
  {
    cumle: "Es wäre besser, wenn du jetzt anrufen würdest.",
    turkce: "Şimdi arasan daha iyi olurdu.",
    level: "A2",
    notes: "Öneri",
  },
  {
    cumle: "Ohne deine Hilfe hätte ich es nicht geschafft.",
    turkce: "Senin yardımın olmadan başaramazdım.",
    level: "A2",
    notes: "Minnettarlık",
  },
  {
    cumle: "Würdest du mir deinen Stift leihen?",
    turkce: "Kalemini bana ödünç verir misin?",
    level: "A2",
    notes: "Rica",
  },
  {
    cumle: "Wenn ich mehr Geld hätte, würde ich reisen.",
    turkce: "Daha fazla param olsaydı, seyahat ederdim.",
    level: "A2",
    notes: "Hayali durum",
  },
  {
    cumle: "Es wäre schön, wenn du mitkommen könntest.",
    turkce: "Gelirsen güzel olurdu.",
    level: "A2",
    notes: "Davet",
  },
  {
    cumle: "Ich würde lieber zu Hause bleiben.",
    turkce: "Evde kalmayı tercih ederdim.",
    level: "A2",
    notes: "Tercih belirtme",
  },
  {
    cumle: "Könntest du mir bei den Hausaufgaben helfen?",
    turkce: "Ödevlerimde bana yardım edebilir misin?",
    level: "A2",
    notes: "Yardım isteme",
  },
  {
    cumle: "Wenn das Wetter schön wäre, würden wir grillen.",
    turkce: "Hava güzel olsaydı, mangal yapardık.",
    level: "A2",
    notes: "Koşullu etkinlik",
  },
  {
    cumle: "Ich würde dir gerne meine Stadt zeigen.",
    turkce: "Sana şehrimi göstermek isterdim.",
    level: "A2",
    notes: "İstek",
  },
  {
    cumle: "Hättest du Lust, ins Kino zu gehen?",
    turkce: "Sinemaya gitmeye hevesli olur muydun?",
    level: "A2",
    notes: "Davet",
  },
  {
    cumle: "Was würdest du mit einer Million Euro machen?",
    turkce: "Bir milyon Euro ile ne yapardın?",
    level: "A2",
    notes: "Hayali durum",
  },
  {
    cumle: "Ich hätte lieber einen Tee als Kaffee.",
    turkce: "Kahve yerine çay tercih ederdim.",
    level: "A2",
    notes: "Tercih",
  },
  {
    cumle: "Wenn ich du wäre, würde ich nicht so viel arbeiten.",
    turkce: "Ben sen olsaydım, bu kadar çok çalışmazdım.",
    level: "A2",
    notes: "Tavsiye",
  },
  {
    cumle: "Es wäre toll, wenn wir uns bald wiedersehen könnten.",
    turkce: "Yakında tekrar görüşebilsek harika olurdu.",
    level: "A2",
    notes: "Dilek",
  },

  // B1 Seviyesi (41-60)
  {
    cumle:
      "Wenn ich mehr Zeit gehabt hätte, hätte ich den Film fertig gesehen.",
    turkce: "Daha fazla zamanım olsaydı, filmi bitirmiş olurdum.",
    level: "B1",
    notes: "Geçmişteki hayali durum",
  },
  {
    cumle: "An deiner Stelle hätte ich anders gehandelt.",
    turkce: "Senin yerinde olsaydım, farklı davranırdım.",
    level: "B1",
    notes: "Geçmiş için tavsiye",
  },
  {
    cumle: "Ich würde gerne wissen, ob du Zeit hättest.",
    turkce: "Zamanın olup olmadığını bilmek isterdim.",
    level: "B1",
    notes: "Dolaylı soru",
  },
  {
    cumle: "Ohne den Stau wären wir pünktlich angekommen.",
    turkce: "Trafik sıkışıklığı olmasaydı, zamanında varmış olurduk.",
    level: "B1",
    notes: "Geçmişteki imkansız durum",
  },
  {
    cumle: "Es wäre besser gewesen, wenn du früher gekommen wärst.",
    turkce: "Daha erken gelseydin daha iyi olurdu.",
    level: "B1",
    notes: "Pişmanlık ifadesi",
  },
  {
    cumle: "Könntest du mir bitte erklären, wie das funktioniert?",
    turkce: "Bunun nasıl çalıştığını bana açıklayabilir misin?",
    level: "B1",
    notes: "Açıklama isteme",
  },
  {
    cumle: "Wenn ich reich wäre, würde ich ein Haus am Meer kaufen.",
    turkce: "Zengin olsaydım, deniz kenarında bir ev alırdım.",
    level: "B1",
    notes: "Hayali gelecek planı",
  },
  {
    cumle: "Ich hätte nicht gedacht, dass es so schwer sein würde.",
    turkce: "Bu kadar zor olacağını düşünmezdim.",
    level: "B1",
    notes: "Beklentinin tersine durum",
  },
  {
    cumle:
      "Wenn das Wetter besser gewesen wäre, hätten wir einen Ausflug gemacht.",
    turkce: "Hava daha iyi olsaydı, bir geziye çıkmış olurduk.",
    level: "B1",
    notes: "Geçmişteki imkansız etkinlik",
  },
  {
    cumle: "Was hättest du an meiner Stelle getan?",
    turkce: "Benim yerimde olsaydın ne yapardın?",
    level: "B1",
    notes: "Geçmiş hakkında fikir sorma",
  },
  {
    cumle: "Ich wünschte, ich könnte fliegen.",
    turkce: "Keşke uçabilseydim.",
    level: "B1",
    notes: "İmkansız dilek",
  },
  {
    cumle: "Es hätte dir gefallen, wenn du dabei gewesen wärst.",
    turkce: "Orada olsaydın, hoşuna giderdi.",
    level: "B1",
    notes: "Geçmiş hakkında varsayım",
  },
  {
    cumle:
      "Wenn ich früher losgefahren wäre, hätte ich den Zug nicht verpasst.",
    turkce: "Daha erken yola çıksaydım, treni kaçırmazdım.",
    level: "B1",
    notes: "Pişmanlık",
  },
  {
    cumle: "Hätte ich das gewusst, hätte ich anders entschieden.",
    turkce: "Bunu bilseydim, farklı karar verirdim.",
    level: "B1",
    notes: "Pişmanlık",
  },
  {
    cumle: "Ich würde dir gerne helfen, aber ich habe keine Zeit.",
    turkce: "Sana yardım etmek isterdim ama zamanım yok.",
    level: "B1",
    notes: "İmkansız istek",
  },
  {
    cumle: "Sie sieht aus, als ob sie müde wäre.",
    turkce: "Yorgunmuş gibi görünüyor.",
    level: "B1",
    notes: "Benzetme",
  },
  {
    cumle: "Wenn es nach mir ginge, würden wir sofort abreisen.",
    turkce: "Bana kalsaydı, hemen yola çıkardık.",
    level: "B1",
    notes: "Kişisel tercih",
  },
  {
    cumle: "Ich hätte nie gedacht, dass du das schaffen würdest.",
    turkce: "Bunu başaracağını hiç düşünmezdim.",
    level: "B1",
    notes: "Şaşkınlık ifadesi",
  },
  {
    cumle: "Es wäre schön, wenn wir mehr Zeit füreinander hätten.",
    turkce: "Birbirimiz için daha fazla zamanımız olsaydı güzel olurdu.",
    level: "B1",
    notes: "İstek",
  },
  {
    cumle:
      "Wenn du mich früher angerufen hättest, hätte ich dir helfen können.",
    turkce: "Beni daha erken arasaydın, sana yardım edebilirdim.",
    level: "B1",
    notes: "Geçmişteki imkansız yardım",
  },

  // B2 Seviyesi (61-100)
  {
    cumle: "Hätte ich doch bloß auf dich gehört!",
    turkce: "Keşke seni dinleseydim!",
    level: "B2",
    notes: "Pişmanlık ünlemi",
  },
  {
    cumle: "Selbst wenn ich es gewollt hätte, hätte ich nichts ändern können.",
    turkce: "İsteseydim bile, hiçbir şeyi değiştiremezdim.",
    level: "B2",
    notes: "İmkansızlık vurgusu",
  },
  {
    cumle: "Als hätten wir nicht genug Probleme!",
    turkce: "Sanki yeterince sorunumuz yokmuş gibi!",
    level: "B2",
    notes: "İroni",
  },
  {
    cumle:
      "Wenn du mir damals geholfen hättest, wäre ich jetzt nicht in dieser Situation.",
    turkce: "O zaman bana yardım etseydin, şimdi bu durumda olmazdım.",
    level: "B2",
    notes: "Nedensellik bağlantısı",
  },
  {
    cumle: "Es sei denn, du hättest eine bessere Idee.",
    turkce: "Daha iyi bir fikrin olmadığı sürece.",
    level: "B2",
    notes: "Koşullu istisna",
  },
  {
    cumle: "Das hätte ich dir gleich sagen können!",
    turkce: "Bunu sana hemen söyleyebilirdim!",
    level: "B2",
    notes: "Öngörü ifadesi",
  },
  {
    cumle: "Ich täte das nicht, wenn ich du wäre.",
    turkce: "Ben sen olsaydım bunu yapmazdım.",
    level: "B2",
    notes: "Alternatif konjunktiv II formu",
  },
  {
    cumle: "Wenn du nur ein bisschen vorsichtiger gewesen wärest!",
    turkce: "Keşke biraz daha dikkatli olsaydın!",
    level: "B2",
    notes: "Eleştirel pişmanlık",
  },
  {
    cumle: "Man könnte meinen, er hätte noch nie einen Computer benutzt.",
    turkce: "Sanki hiç bilgisayar kullanmamış gibi düşünülebilir.",
    level: "B2",
    notes: "Kınayıcı benzetme",
  },
  {
    cumle: "Es wäre schön gewesen, wenn du Bescheid gesagt hättest.",
    turkce: "Haber verseydin güzel olurdu.",
    level: "B2",
    notes: "Nezaket içeren sitem",
  },
  {
    cumle:
      "Ich hätte schwören können, dass ich den Schlüssel hier gelassen habe.",
    turkce: "Anahtarı buraya koyduğuma yemin edebilirdim.",
    level: "B2",
    notes: "Güçlü inanç",
  },
  {
    cumle: "Sie tat so, als ob sie mich nicht gesehen hätte.",
    turkce: "Beni görmemiş gibi davrandı.",
    level: "B2",
    notes: "Davranış betimleme",
  },
  {
    cumle:
      "Ohne deine Unterstützung wäre dieses Projekt nie zustande gekommen.",
    turkce: "Senin desteğin olmadan bu proje asla gerçekleşmezdi.",
    level: "B2",
    notes: "Minnettarlık",
  },
  {
    cumle: "Das hätte ins Auge gehen können!",
    turkce: "Bu kötü sonuçlanabilirdi!",
    level: "B2",
    notes: "Tehlikeli durum",
  },
  {
    cumle: "Man sollte meinen, er wäre klüger gewesen.",
    turkce: "Daha akıllı olduğunu düşünebilirdin.",
    level: "B2",
    notes: "Hayal kırıklığı",
  },
  {
    cumle: "An Ihrer Stelle würde ich die Finger davon lassen.",
    turkce: "Sizin yerinizde olsaydım, ona dokunmazdım.",
    level: "B2",
    notes: "Güçlü uyarı",
  },
  {
    cumle: "Ich hätte nie gedacht, dass es so weit kommen würde.",
    turkce: "İşin bu kadar ilerleyeceğini hiç düşünmezdim.",
    level: "B2",
    notes: "Şaşkınlık",
  },
  {
    cumle: "Es hätte schlimmer kommen können.",
    turkce: "Daha kötü olabilirdi.",
    level: "B2",
    notes: "Teselli",
  },
  {
    cumle: "Ich würde zu gerne wissen, was sie dazu gesagt hätte.",
    turkce: "Buna ne diyeceğini çok merak ederdim.",
    level: "B2",
    notes: "Merak/ilgi",
  },
  {
    cumle: "Hätte ich das Geld, würde ich sofort eine Weltreise machen.",
    turkce: "Param olsaydı, hemen dünya turuna çıkardım.",
    level: "B2",
    notes: "Hayali plan",
  },
  {
    cumle: "Das hätte ich mir denken können!",
    turkce: "Bunu düşünebilirdim!",
    level: "B2",
    notes: "Kendini eleştirme",
  },
  {
    cumle:
      "Wenn du ehrlich gewesen wärst, hätten wir das Problem längst gelöst.",
    turkce: "Dürüst olsaydın, sorunu çoktan çözmüş olurduk.",
    level: "B2",
    notes: "Eleştiri",
  },
  {
    cumle: "Da wäre ich mir nicht so sicher.",
    turkce: "Bu konuda bu kadar emin olmazdım.",
    level: "B2",
    notes: "Kuşku ifadesi",
  },
  {
    cumle: "Es wäre besser gewesen, wenn wir den anderen Weg genommen hätten.",
    turkce: "Diğer yolu seçseydik daha iyi olurdu.",
    level: "B2",
    notes: "Karar eleştirisi",
  },
  {
    cumle: "Als ob ich nichts Besseres zu tun hätte!",
    turkce: "Sanki yapacak daha iyi bir işim yokmuş gibi!",
    level: "B2",
    notes: "Sinirli tepki",
  },
  {
    cumle: "Solltest du Hilfe benötigen, wäre ich gerne für dich da.",
    turkce:
      "Yardıma ihtiyacın olursa, sana yardım etmekten memnuniyet duyarım.",
    level: "B2",
    notes: "Destek önerisi",
  },
  {
    cumle: "Hätte, hätte, Fahrradkette!",
    turkce: "Keşke keşke, bisiklet zinciri!",
    level: "B2",
    notes: "Alman atasözü: Sürekli 'keşke' demenin anlamsızlığı",
  },
  {
    cumle: "Es sähe besser aus, wenn du die Farben anders kombiniert hättest.",
    turkce: "Renkleri farklı kombine etseydin daha iyi görünürdü.",
    level: "B2",
    notes: "Estetik tavsiye",
  },
  {
    cumle: "Ich wäre fast gestorben vor Angst!",
    turkce: "Korkudan neredeyse ölecektim!",
    level: "B2",
    notes: "Abartı",
  },
  {
    cumle: "Diese Aufgabe hätte eigentlich nicht so schwierig sein sollen.",
    turkce: "Bu görev aslında bu kadar zor olmamalıydı.",
    level: "B2",
    notes: "Beklenti-gerçeklik tezatlığı",
  },
  {
    cumle: "Man könnte fast denken, du hättest das mit Absicht getan.",
    turkce: "Neredeyse bunu kasten yaptığını düşünebilirdim.",
    level: "B2",
    notes: "Hafif suçlama",
  },
  {
    cumle: "Wer hätte das gedacht?",
    turkce: "Kim düşünürdü?",
    level: "B2",
    notes: "Şaşkınlık ünlemi",
  },
  {
    cumle: "Wenn ich das früher gewusst hätte, hätte ich anders gehandelt.",
    turkce: "Bunu daha önce bilseydim, farklı davranırdım.",
    level: "B2",
    notes: "Pişmanlık",
  },
  {
    cumle: "Sie sprach, als wäre sie eine Expertin auf diesem Gebiet.",
    turkce: "Bu alanda uzmanmış gibi konuştu.",
    level: "B2",
    notes: "Davranış eleştirisi",
  },
  {
    cumle: "Das hätte dir eine Lehre sein sollen!",
    turkce: "Bu sana bir ders olmalıydı!",
    level: "B2",
    notes: "Ders çıkarma",
  },
  {
    cumle: "Es hätte mich gewundert, wenn er pünktlich gekommen wäre.",
    turkce: "Zamanında gelseydi şaşırırdım.",
    level: "B2",
    notes: "İroni",
  },
  {
    cumle:
      "Hätte er doch nur ein bisschen nachgedacht, bevor er das gesagt hat!",
    turkce: "Keşke bunu söylemeden önce biraz düşünseydi!",
    level: "B2",
    notes: "Eleştirel pişmanlık",
  },
  {
    cumle: "Ich würde es nicht so ausdrücken wollen, aber...",
    turkce: "Bu şekilde ifade etmek istemezdim, ama...",
    level: "B2",
    notes: "Nazikçe eleştiri girişi",
  },
  {
    cumle:
      "Es wäre vielleicht besser gewesen, wenn wir das unter vier Augen besprochen hätten.",
    turkce: "Belki bunu baş başa konuşsaydık daha iyi olurdu.",
    level: "B2",
    notes: "Durum değerlendirmesi",
  },
  {
    cumle: "Hätten Sie vielleicht einen Moment Zeit für mich?",
    turkce: "Acaba bana biraz zaman ayırabilir miydiniz?",
    level: "B2",
    notes: "Resmi rica",
  },
  {
    cumle: "Ich habe Brot gekauft.",
    turkce: "Ben ekmek satın aldım.",
    level: "A2",
    partizip: "gekauft",
    notes: "kaufen fiilinin Partizip 2 hali: gekauft",
  },
  {
    cumle: "Sie hat einen Brief geschrieben.",
    turkce: "O (kadın) bir mektup yazdı.",
    level: "A2",
    partizip: "geschrieben",
    notes: "schreiben fiilinin Partizip 2 hali: geschrieben",
  },
  {
    cumle: "Wir haben zusammen gegessen.",
    turkce: "Biz birlikte yemek yedik.",
    level: "A2",
    partizip: "gegessen",
    notes: "essen fiilinin Partizip 2 hali: gegessen",
  },
  {
    cumle: "Er hat Deutsch gelernt.",
    turkce: "O (erkek) Almanca öğrendi.",
    level: "A2",
    partizip: "gelernt",
    notes: "lernen fiilinin Partizip 2 hali: gelernt",
  },
  {
    cumle: "Hast du gut geschlafen?",
    turkce: "İyi uyudun mu?",
    level: "A2",
    partizip: "geschlafen",
    notes: "schlafen fiilinin Partizip 2 hali: geschlafen",
  },
  {
    cumle: "Ich bin nach Hause gegangen.",
    turkce: "Eve gittim.",
    level: "A2",
    partizip: "gegangen",
    notes:
      "gehen fiilinin Partizip 2 hali: gegangen - hareket fiili olduğu için sein yardımcı fiiliyle kullanılır",
  },
  {
    cumle: "Sie haben Musik gehört.",
    turkce: "Onlar müzik dinlediler.",
    level: "A2",
    partizip: "gehört",
    notes: "hören fiilinin Partizip 2 hali: gehört",
  },
  {
    cumle: "Ich habe meine Hausaufgaben gemacht.",
    turkce: "Ödevlerimi yaptım.",
    level: "A2",
    partizip: "gemacht",
    notes: "machen fiilinin Partizip 2 hali: gemacht",
  },
  {
    cumle: "Er ist spät aufgestanden.",
    turkce: "O (erkek) geç kalktı.",
    level: "A2",
    partizip: "aufgestanden",
    notes:
      "aufstehen fiilinin Partizip 2 hali: aufgestanden - ayrılabilir fiil",
  },
  {
    cumle: "Wir haben einen Film gesehen.",
    turkce: "Bir film izledik.",
    level: "A2",
    partizip: "gesehen",
    notes: "sehen fiilinin Partizip 2 hali: gesehen",
  },
  {
    cumle: "Hast du dein Zimmer geputzt?",
    turkce: "Odanı temizledin mi?",
    level: "A2",
    partizip: "geputzt",
    notes: "putzen fiilinin Partizip 2 hali: geputzt",
  },
  {
    cumle: "Ich habe Kaffee getrunken.",
    turkce: "Kahve içtim.",
    level: "A2",
    partizip: "getrunken",
    notes: "trinken fiilinin Partizip 2 hali: getrunken",
  },
  {
    cumle: "Sie ist mit dem Bus gefahren.",
    turkce: "O (kadın) otobüsle gitti.",
    level: "A2",
    partizip: "gefahren",
    notes:
      "fahren fiilinin Partizip 2 hali: gefahren - hareket fiili olduğu için sein ile kullanılır",
  },
  {
    cumle: "Wir haben viel gelacht.",
    turkce: "Çok güldük.",
    level: "A2",
    partizip: "gelacht",
    notes: "lachen fiilinin Partizip 2 hali: gelacht",
  },
  {
    cumle: "Er hat sein Handy gefunden.",
    turkce: "O (erkek) telefonunu buldu.",
    level: "A2",
    partizip: "gefunden",
    notes: "finden fiilinin Partizip 2 hali: gefunden",
  },
  {
    cumle: "Ich habe ihm geholfen.",
    turkce: "Ona yardım ettim.",
    level: "A2",
    partizip: "geholfen",
    notes: "helfen fiilinin Partizip 2 hali: geholfen",
  },
  {
    cumle: "Wir haben Fußball gespielt.",
    turkce: "Futbol oynadık.",
    level: "A2",
    partizip: "gespielt",
    notes: "spielen fiilinin Partizip 2 hali: gespielt",
  },
  {
    cumle: "Sie hat das Fenster geöffnet.",
    turkce: "O (kadın) pencereyi açtı.",
    level: "A2",
    partizip: "geöffnet",
    notes: "öffnen fiilinin Partizip 2 hali: geöffnet",
  },
  {
    cumle: "Habt ihr die Nachrichten gesehen?",
    turkce: "Haberleri izlediniz mi?",
    level: "A2",
    partizip: "gesehen",
    notes: "sehen fiilinin Partizip 2 hali: gesehen",
  },
  {
    cumle: "Ich bin früh eingeschlafen.",
    turkce: "Erken uyudum.",
    level: "A2",
    partizip: "eingeschlafen",
    notes:
      "einschlafen fiilinin Partizip 2 hali: eingeschlafen - ayrılabilir fiil, sein ile kullanılır",
  },
  {
    cumle: "Er hat seine Brille verloren.",
    turkce: "O (erkek) gözlüğünü kaybetti.",
    level: "A2",
    partizip: "verloren",
    notes: "verlieren fiilinin Partizip 2 hali: verloren",
  },
  {
    cumle: "Wir haben das Haus gesäubert.",
    turkce: "Evi temizledik.",
    level: "A2",
    partizip: "gesäubert",
    notes: "säubern fiilinin Partizip 2 hali: gesäubert",
  },
  {
    cumle: "Sie haben viel gearbeitet.",
    turkce: "Onlar çok çalıştılar.",
    level: "A2",
    partizip: "gearbeitet",
    notes: "arbeiten fiilinin Partizip 2 hali: gearbeitet",
  },
  {
    cumle: "Ich habe ein Lied gesungen.",
    turkce: "Bir şarkı söyledim.",
    level: "A2",
    partizip: "gesungen",
    notes: "singen fiilinin Partizip 2 hali: gesungen",
  },
  {
    cumle: "Er ist ins Kino gegangen.",
    turkce: "O (erkek) sinemaya gitti.",
    level: "A2",
    partizip: "gegangen",
    notes: "gehen fiilinin Partizip 2 hali: gegangen - sein ile kullanılır",
  },

  // A2 Seviyesi (26-50)
  {
    cumle: "Ich habe das Licht ausgemacht.",
    turkce: "Işığı kapattım.",
    level: "A2",
    partizip: "ausgemacht",
    notes: "ausmachen fiilinin Partizip 2 hali: ausgemacht - ayrılabilir fiil",
  },
  {
    cumle: "Sie ist um 8 Uhr aufgewacht.",
    turkce: "O (kadın) saat 8'de uyandı.",
    level: "A2",
    partizip: "aufgewacht",
    notes:
      "aufwachen fiilinin Partizip 2 hali: aufgewacht - ayrılabilir fiil, sein ile kullanılır",
  },
  {
    cumle: "Hast du dein Zimmer aufgeräumt?",
    turkce: "Odanı topladın mı?",
    level: "A2",
    partizip: "aufgeräumt",
    notes: "aufräumen fiilinin Partizip 2 hali: aufgeräumt - ayrılabilir fiil",
  },
  {
    cumle: "Er hat den Bus verpasst.",
    turkce: "O (erkek) otobüsü kaçırdı.",
    level: "A2",
    partizip: "verpasst",
    notes:
      "verpassen fiilinin Partizip 2 hali: verpasst - ayrılamaz fiil, 'ge-' öneki almaz",
  },
  {
    cumle: "Wir sind mit dem Zug gefahren.",
    turkce: "Trenle yolculuk ettik.",
    level: "A2",
    partizip: "gefahren",
    notes: "fahren fiilinin Partizip 2 hali: gefahren - sein ile kullanılır",
  },
  {
    cumle: "Sie haben die Prüfung bestanden.",
    turkce: "Onlar sınavı geçtiler.",
    level: "A2",
    partizip: "bestanden",
    notes: "bestehen fiilinin Partizip 2 hali: bestanden - ayrılamaz fiil",
  },
  {
    cumle: "Ich habe meinen Schlüssel verloren.",
    turkce: "Anahtarımı kaybettim.",
    level: "A2",
    partizip: "verloren",
    notes: "verlieren fiilinin Partizip 2 hali: verloren",
  },
  {
    cumle: "Er hat seine Freundin angerufen.",
    turkce: "O (erkek) kız arkadaşını aradı.",
    level: "A2",
    partizip: "angerufen",
    notes: "anrufen fiilinin Partizip 2 hali: angerufen - ayrılabilir fiil",
  },
  {
    cumle: "Wir haben uns gut unterhalten.",
    turkce: "Biz iyi sohbet ettik.",
    level: "A2",
    partizip: "unterhalten",
    notes:
      "sich unterhalten fiilinin Partizip 2 hali: unterhalten - ayrılamaz fiil",
  },
  {
    cumle: "Sie hat viel zugenommen.",
    turkce: "O (kadın) çok kilo aldı.",
    level: "A2",
    partizip: "zugenommen",
    notes: "zunehmen fiilinin Partizip 2 hali: zugenommen - ayrılabilir fiil",
  },
  {
    cumle: "Ich habe im Restaurant reserviert.",
    turkce: "Restoranda rezervasyon yaptım.",
    level: "A2",
    partizip: "reserviert",
    notes:
      "reservieren fiilinin Partizip 2 hali: reserviert - '-ieren' ile bittiği için 'ge-' öneki almaz",
  },
  {
    cumle: "Er ist umgezogen.",
    turkce: "O (erkek) taşındı.",
    level: "A2",
    partizip: "umgezogen",
    notes:
      "umziehen fiilinin Partizip 2 hali: umgezogen - ayrılabilir fiil, sein ile kullanılır",
  },
  {
    cumle: "Wir haben das Geschenk eingepackt.",
    turkce: "Hediyeyi paketledik.",
    level: "A2",
    partizip: "eingepackt",
    notes: "einpacken fiilinin Partizip 2 hali: eingepackt - ayrılabilir fiil",
  },
  {
    cumle: "Sie hat ihren Freund besucht.",
    turkce: "O (kadın) arkadaşını ziyaret etti.",
    level: "A2",
    partizip: "besucht",
    notes: "besuchen fiilinin Partizip 2 hali: besucht - ayrılamaz fiil",
  },
  {
    cumle: "Hast du die Zeitung gelesen?",
    turkce: "Gazeteyi okudun mu?",
    level: "A2",
    partizip: "gelesen",
    notes: "lesen fiilinin Partizip 2 hali: gelesen",
  },
  {
    cumle: "Er hat die Tür zugemacht.",
    turkce: "O (erkek) kapıyı kapattı.",
    level: "A2",
    partizip: "zugemacht",
    notes: "zumachen fiilinin Partizip 2 hali: zugemacht - ayrılabilir fiil",
  },
  {
    cumle: "Ich bin gestern angekommen.",
    turkce: "Dün vardım/geldim.",
    level: "A2",
    partizip: "angekommen",
    notes:
      "ankommen fiilinin Partizip 2 hali: angekommen - ayrılabilir fiil, sein ile kullanılır",
  },
  {
    cumle: "Sie haben das Problem erklärt.",
    turkce: "Onlar problemi açıkladılar.",
    level: "A2",
    partizip: "erklärt",
    notes: "erklären fiilinin Partizip 2 hali: erklärt - ayrılamaz fiil",
  },
  {
    cumle: "Wir haben im Restaurant gegessen.",
    turkce: "Restoranda yemek yedik.",
    level: "A2",
    partizip: "gegessen",
    notes: "essen fiilinin Partizip 2 hali: gegessen",
  },
  {
    cumle: "Ich habe mein Auto verkauft.",
    turkce: "Arabamı sattım.",
    level: "A2",
    partizip: "verkauft",
    notes: "verkaufen fiilinin Partizip 2 hali: verkauft - ayrılamaz fiil",
  },
  {
    cumle: "Er hat lange geschlafen.",
    turkce: "O (erkek) uzun süre uyudu.",
    level: "A2",
    partizip: "geschlafen",
    notes: "schlafen fiilinin Partizip 2 hali: geschlafen",
  },
  {
    cumle: "Sie sind nach Berlin geflogen.",
    turkce: "Onlar Berlin'e uçtular.",
    level: "A2",
    partizip: "geflogen",
    notes: "fliegen fiilinin Partizip 2 hali: geflogen - sein ile kullanılır",
  },
  {
    cumle: "Wir haben viel fotografiert.",
    turkce: "Çok fotoğraf çektik.",
    level: "A2",
    partizip: "fotografiert",
    notes:
      "fotografieren fiilinin Partizip 2 hali: fotografiert - '-ieren' ile bittiği için 'ge-' öneki almaz",
  },
  {
    cumle: "Er hat das Lied komponiert.",
    turkce: "O (erkek) şarkıyı besteledi.",
    level: "A2",
    partizip: "komponiert",
    notes:
      "komponieren fiilinin Partizip 2 hali: komponiert - '-ieren' ile bittiği için 'ge-' öneki almaz",
  },
  {
    cumle: "Ich habe den Termin abgesagt.",
    turkce: "Randevuyu iptal ettim.",
    level: "A2",
    partizip: "abgesagt",
    notes: "absagen fiilinin Partizip 2 hali: abgesagt - ayrılabilir fiil",
  },

  // B1 Seviyesi (51-75)
  {
    cumle: "Ich habe gestern schwimmen können.",
    turkce: "Dün yüzebildim.",
    level: "B1",
    partizip: "können",
    notes:
      "Modal fiil können ile kullanımı: Perfekt zamanda infinitif formda kalır",
  },
  {
    cumle: "Sie hat das Buch zu Ende gelesen.",
    turkce: "O (kadın) kitabı sonuna kadar okudu.",
    level: "B1",
    partizip: "gelesen",
    notes: "zu Ende lesen: deyimsel bir kullanım, 'sonuna kadar okumak'",
  },
  {
    cumle: "Er hat die Rechnung bezahlt bekommen.",
    turkce: "O (erkek) hesabı ödendi (başkası tarafından).",
    level: "B1",
    partizip: "bekommen",
    notes:
      "bekommen fiilinin Partizip 2 hali: bekommen - 'ge-' öneki almayan fiil",
  },
  {
    cumle: "Das gewaschene Auto steht in der Garage.",
    turkce: "Yıkanmış araba garajda duruyor.",
    level: "B1",
    partizip: "gewaschene",
    notes: "waschen fiilinin Partizip 2 hali sıfat olarak: gewaschene",
  },
  {
    cumle: "Mit den gefundenen Schlüsseln bin ich nach Hause gegangen.",
    turkce: "Bulunan anahtarlarla eve gittim.",
    level: "B1",
    partizip: "gefundenen",
    notes: "finden fiilinin Partizip 2 hali sıfat olarak: gefundenen",
  },
  {
    cumle: "Sie hat ihren Urlaub in Italien verbracht.",
    turkce: "O (kadın) tatilini İtalya'da geçirdi.",
    level: "B1",
    partizip: "verbracht",
    notes: "verbringen fiilinin Partizip 2 hali: verbracht - ayrılamaz fiil",
  },
  {
    cumle: "Wir haben uns über das bestandene Examen gefreut.",
    turkce: "Geçilen sınavdan dolayı sevindik.",
    level: "B1",
    partizip: "bestandene",
    notes: "bestehen fiilinin Partizip 2 hali sıfat olarak: bestandene",
  },
  {
    cumle: "Er hat sich das Bein gebrochen.",
    turkce: "O (erkek) bacağını kırdı.",
    level: "B1",
    partizip: "gebrochen",
    notes: "brechen fiilinin Partizip 2 hali: gebrochen",
  },
  {
    cumle: "Die von mir gekochte Suppe schmeckt gut.",
    turkce: "Benim pişirdiğim çorba lezzetli.",
    level: "B1",
    partizip: "gekochte",
    notes: "kochen fiilinin Partizip 2 hali sıfat olarak: gekochte",
  },
  {
    cumle: "Sie hat den ganzen Tag geschlafen gehabt.",
    turkce: "O (kadın) bütün gün uyumuştu.",
    level: "B1",
    partizip: "geschlafen",
    notes:
      "Plusquamperfekt: haben + Partizip 2 + gehabt - bir olay diğerinden önce olduğunu belirtir",
  },
  {
    cumle: "Er hat mir zu helfen versprochen.",
    turkce: "O (erkek) bana yardım etmeyi söz verdi.",
    level: "B1",
    partizip: "versprochen",
    notes:
      "versprechen fiilinin Partizip 2 hali: versprochen - ayrılamaz fiil ve zu infinitif yapısıyla kullanımı",
  },
  {
    cumle: "Wir haben lange warten müssen.",
    turkce: "Uzun süre beklemek zorunda kaldık.",
    level: "B1",
    partizip: "müssen",
    notes: "müssen modal fiilinin Partizip 2 ile kullanımı",
  },
  {
    cumle: "Der gestrige Regen hat die Straßen überschwemmt.",
    turkce: "Dünkü yağmur sokakları sel altında bıraktı.",
    level: "B1",
    partizip: "überschwemmt",
    notes:
      "überschwemmen fiilinin Partizip 2 hali: überschwemmt - ayrılamaz fiil",
  },
  {
    cumle: "Sie ist früh aufgestanden und hat gefrühstückt.",
    turkce: "O (kadın) erken kalktı ve kahvaltı yaptı.",
    level: "B1",
    partizip: "aufgestanden, gefrühstückt",
    notes: "aufstehen ve frühstücken fiillerinin Partizip 2 halleri",
  },
  {
    cumle: "Die gestellte Frage war schwer zu beantworten.",
    turkce: "Sorulan soru yanıtlaması zordu.",
    level: "B1",
    partizip: "gestellte",
    notes: "stellen fiilinin Partizip 2 hali sıfat olarak: gestellte",
  },
  {
    cumle: "Er hat den ganzen Film gedreht.",
    turkce: "O (erkek) tüm filmi çekti.",
    level: "B1",
    partizip: "gedreht",
    notes: "drehen fiilinin Partizip 2 hali: gedreht",
  },
  {
    cumle: "Wir sind durch den Park gelaufen.",
    turkce: "Parktan yürüdük.",
    level: "B1",
    partizip: "gelaufen",
    notes: "laufen fiilinin Partizip 2 hali: gelaufen - sein ile kullanılır",
  },
  {
    cumle: "Ich habe an der Universität studiert.",
    turkce: "Üniversitede okudum.",
    level: "B1",
    partizip: "studiert",
    notes:
      "studieren fiilinin Partizip 2 hali: studiert - '-ieren' ile bittiği için 'ge-' öneki almaz",
  },
  {
    cumle: "Sie hat mir den Weg gezeigt.",
    turkce: "O (kadın) bana yolu gösterdi.",
    level: "B1",
    partizip: "gezeigt",
    notes: "zeigen fiilinin Partizip 2 hali: gezeigt",
  },
  {
    cumle: "Der beschädigte Computer funktioniert nicht mehr.",
    turkce: "Hasarlı bilgisayar artık çalışmıyor.",
    level: "B1",
    partizip: "beschädigte",
    notes: "beschädigen fiilinin Partizip 2 hali sıfat olarak: beschädigte",
  },
  {
    cumle: "Er hat seiner Mutter ein Geschenk mitgebracht.",
    turkce: "O (erkek) annesine bir hediye getirdi.",
    level: "B1",
    partizip: "mitgebracht",
    notes:
      "mitbringen fiilinin Partizip 2 hali: mitgebracht - ayrılabilir fiil",
  },
  {
    cumle: "Wir haben die Nachricht übermittelt.",
    turkce: "Haberi ilettik.",
    level: "B1",
    partizip: "übermittelt",
    notes: "übermitteln fiilinin Partizip 2 hali: übermittelt - ayrılamaz fiil",
  },
  {
    cumle: "Sie hat das Problem verstanden.",
    turkce: "O (kadın) problemi anladı.",
    level: "B1",
    partizip: "verstanden",
    notes: "verstehen fiilinin Partizip 2 hali: verstanden - ayrılamaz fiil",
  },
  {
    cumle: "Der entwickelte Plan war gut.",
    turkce: "Geliştirilen plan iyiydi.",
    level: "B1",
    partizip: "entwickelte",
    notes: "entwickeln fiilinin Partizip 2 hali sıfat olarak: entwickelte",
  },
  {
    cumle: "Ich habe mein Passwort vergessen.",
    turkce: "Şifremi unuttum.",
    level: "B1",
    partizip: "vergessen",
    notes: "vergessen fiilinin Partizip 2 hali: vergessen - ayrılamaz fiil",
  },

  // B2 Seviyesi (76-100)
  {
    cumle: "Das Haus wird renoviert.",
    turkce: "Ev yenileniyor.",
    level: "B2",
    partizip: "renoviert",
    notes: "Vorgangspassiv - werden ile pasif yapı",
  },
  {
    cumle: "Der Film wurde gestern Abend gezeigt.",
    turkce: "Film dün akşam gösterildi.",
    level: "B2",
    partizip: "gezeigt",
    notes: "Vorgangspassiv, Präteritum: wurde + Partizip 2",
  },
  {
    cumle: "Die Tür ist geschlossen worden.",
    turkce: "Kapı kapatılmış.",
    level: "B2",
    partizip: "geschlossen",
    notes: "Vorgangspassiv, Perfekt: ist + Partizip 2 + worden",
  },
  {
    cumle: "Das im Ofen gebackene Brot riecht gut.",
    turkce: "Fırında pişirilen ekmek güzel kokuyor.",
    level: "B2",
    partizip: "gebackene",
    notes: "backen fiilinin genişletilmiş Partizip 2 sıfat yapısı",
  },
  {
    cumle: "In München angekommen, suchte er ein Hotel.",
    turkce: "Münih'e vardığında, bir otel aradı.",
    level: "B2",
    partizip: "angekommen",
    notes: "Partizipialsatz - yan cümle yerine kısaltılmış cümle yapısı",
  },
  {
    cumle: "Von allen bewundert, stand sie auf der Bühne.",
    turkce: "Herkes tarafından hayranlık duyularak, sahnede duruyordu.",
    level: "B2",
    partizip: "bewundert",
    notes: "Partizipialsatz - pasif anlamlı",
  },
  {
    cumle: "Der Dieb ist von der Polizei verhaftet worden.",
    turkce: "Hırsız polis tarafından tutuklandı.",
    level: "B2",
    partizip: "verhaftet",
    notes: "Vorgangspassiv, von + Dativ ile fail belirtimi",
  },
  {
    cumle: "Die im Kühlschrank aufbewahrten Lebensmittel sind frisch.",
    turkce: "Buzdolabında saklanan yiyecekler taze.",
    level: "B2",
    partizip: "aufbewahrten",
    notes: "aufbewahren fiilinin genişletilmiş Partizip 2 sıfat yapısı",
  },
  {
    cumle: "Das gestohlene Auto wurde gefunden.",
    turkce: "Çalınan araba bulundu.",
    level: "B2",
    partizip: "gestohlene",
    notes:
      "stehlen fiilinin Partizip 2 sıfat hali: gestohlene + Vorgangspassiv",
  },
  {
    cumle: "Mit geschlossenen Augen hörte er der Musik zu.",
    turkce: "Kapalı gözlerle müziği dinledi.",
    level: "B2",
    partizip: "geschlossenen",
    notes: "schließen fiilinin Partizip 2 sıfat hali: geschlossenen",
  },
  {
    cumle: "Das Problem konnte gelöst werden.",
    turkce: "Problem çözülebildi.",
    level: "B2",
    partizip: "gelöst",
    notes: "Vorgangspassiv ile modal fiil kombinasyonu",
  },
  {
    cumle: "Die gesammelten Daten wurden analysiert.",
    turkce: "Toplanan veriler analiz edildi.",
    level: "B2",
    partizip: "gesammelten",
    notes:
      "sammeln fiilinin Partizip 2 sıfat hali: gesammelten + Vorgangspassiv",
  },
  {
    cumle: "Der vor zwei Jahren geschriebene Brief wurde endlich gefunden.",
    turkce: "İki yıl önce yazılan mektup sonunda bulundu.",
    level: "B2",
    partizip: "geschriebene",
    notes:
      "schreiben fiilinin genişletilmiş Partizip 2 sıfat yapısı + Vorgangspassiv",
  },
  {
    cumle: "Die vom Chef getroffene Entscheidung war richtig.",
    turkce: "Şef tarafından alınan karar doğruydu.",
    level: "B2",
    partizip: "getroffene",
    notes: "treffen fiilinin Partizip 2 sıfat hali: getroffene",
  },
  {
    cumle: "Das ist eine weitverbreitete Meinung.",
    turkce: "Bu, yaygın bir görüştür.",
    level: "B2",
    partizip: "verbreitete",
    notes:
      "verbreiten fiilinin Partizip 2 sıfat hali: verbreitete, weit- ile birleşimi",
  },
  {
    cumle: "In der Stadt angekommen, regnete es stark.",
    turkce: "Şehre vardığımızda, şiddetli yağmur yağıyordu.",
    level: "B2",
    partizip: "angekommen",
    notes: "Partizipialsatz - zaman ilişkisi belirten kısaltılmış cümle",
  },
  {
    cumle: "Die neu eingerichtete Wohnung gefällt mir.",
    turkce: "Yeni döşenmiş daire hoşuma gidiyor.",
    level: "B2",
    partizip: "eingerichtete",
    notes: "einrichten fiilinin Partizip 2 sıfat hali: eingerichtete",
  },
  {
    cumle: "Der lang erwartete Brief ist endlich gekommen.",
    turkce: "Uzun zamandır beklenen mektup sonunda geldi.",
    level: "B2",
    partizip: "erwartete",
    notes: "erwarten fiilinin Partizip 2 sıfat hali:期待ete",
  },
  {
    cumle: "Das Konzert musste verschoben werden.",
    turkce: "Konser ertelenmek zorunda kaldı.",
    level: "B2",
    partizip: "verschoben",
    notes: "Vorgangspassiv ile müssen modal fiili",
  },
  {
    cumle: "Die Arbeit ist getan worden.",
    turkce: "İş yapılmış.",
    level: "B2",
    partizip: "getan",
    notes: "Vorgangspassiv, Perfekt: ist + Partizip 2 + worden",
  },
  {
    cumle: "Das gut versteckte Geschenk wurde nicht gefunden.",
    turkce: "İyi saklanmış hediye bulunmadı.",
    level: "B2",
    partizip: "versteckte",
    notes:
      "verstecken fiilinin Partizip 2 sıfat hali: versteckte + Vorgangspassiv",
  },
  {
    cumle: "Die Tür wird geöffnet sein.",
    turkce: "Kapı açılmış olacak.",
    level: "B2",
    partizip: "geöffnet",
    notes: "Zustandspassiv + Futur I: wird + Partizip 2 + sein",
  },
  {
    cumle: "Der Aufsatz ist überarbeitet worden.",
    turkce: "Makale revize edildi.",
    level: "B2",
    partizip: "überarbeitet",
    notes:
      "überarbeiten fiilinin Partizip 2 hali: überarbeitet + Vorgangspassiv Perfekt",
  },
  {
    cumle: "Einmal verloren, ist das Vertrauen schwer wiederzugewinnen.",
    turkce: "Bir kez kaybedildiğinde, güven yeniden kazanılması zordur.",
    level: "B2",
    partizip: "verloren",
    notes: "Partizipialsatz - koşul belirten",
  },
  {
    cumle: "Die Aufgabe wurde erfolgreich abgeschlossen.",
    turkce: "Görev başarıyla tamamlandı.",
    level: "B2",
    partizip: "abgeschlossen",
    notes:
      "abschließen fiilinin Partizip 2 hali: abgeschlossen + Vorgangspassiv",
  },
  {
    cumle: "Ich kann Deutsch sprechen.",
    turkce: "Almanca konuşabilirim.",
    level: "A1",
    notes: "Yetenek ifade eder",
  },
  {
    cumle: "Kannst du mir helfen?",
    turkce: "Bana yardım edebilir misin?",
    level: "A1",
    notes: "Kibar bir rica",
  },
  {
    cumle: "Wir können morgen ins Kino gehen.",
    turkce: "Yarın sinemaya gidebiliriz.",
    level: "A1",
    notes: "Olasılık veya plan belirtir",
  },
  {
    cumle: "Sie kann sehr gut kochen.",
    turkce: "O çok iyi yemek yapabilir.",
    level: "A1",
    notes: "Yetenek vurgusu",
  },
  {
    cumle: "Ich konnte gestern nicht schlafen.",
    turkce: "Dün uyuyamadım.",
    level: "A2",
    notes: "Geçmişte yeteneksizlik",
  },
  {
    cumle: "Man kann hier nicht parken.",
    turkce: "Burada park edilemez.",
    level: "A2",
    notes: "Genel bir kural",
  },
  {
    cumle: "Könntest du bitte das Fenster öffnen?",
    turkce: "Lütfen pencereyi açabilir misin?",
    level: "B1",
    notes: "Konditional ile kibar rica",
  },
  {
    cumle: "Ich könnte dir mein Auto leihen.",
    turkce: "Sana arabamı ödünç verebilirim.",
    level: "B1",
    notes: "Olasılık veya teklif",
  },
  {
    cumle: "Das kann nicht wahr sein!",
    turkce: "Bu doğru olamaz!",
    level: "B1",
    notes: "İnançsızlık ifadesi",
  },
  {
    cumle: "Sie können den Antrag online ausfüllen.",
    turkce: "Başvuruyu çevrimiçi doldurabilirsiniz.",
    level: "B2",
    notes: "Resmi bir izin veya seçenek",
  },

  // dürfen (izinli olmak)
  {
    cumle: "Darf ich fragen?",
    turkce: "Sorabilir miyim?",
    level: "A1",
    notes: "Kibar izin isteme",
  },
  {
    cumle: "Du darfst hier nicht rauchen.",
    turkce: "Burada sigara içemezsin.",
    level: "A1",
    notes: "Yasak ifade eder",
  },
  {
    cumle: "Wir dürfen heute länger bleiben.",
    turkce: "Bugün daha uzun kalabiliriz.",
    level: "A1",
    notes: "İzin verilen bir durum",
  },
  {
    cumle: "Darf ich Ihnen helfen?",
    turkce: "Size yardım edebilir miyim?",
    level: "A1",
    notes: "Resmi yardım teklifi",
  },
  {
    cumle: "Die Kinder dürfen nicht allein draußen spielen.",
    turkce: "Çocuklar dışarıda yalnız oynayamazlar.",
    level: "A2",
    notes: "Kısıtlama belirtir",
  },
  {
    cumle: "Hier darf man fotografieren.",
    turkce: "Burada fotoğraf çekilebilir.",
    level: "A2",
    notes: "Genel izin kuralı",
  },
  {
    cumle: "Dürfte ich kurz Ihr Handy benutzen?",
    turkce: "Kısa bir süre telefonunuzu kullanabilir miyim?",
    level: "B1",
    notes: "Konditional ile kibar rica",
  },
  {
    cumle: "Sie dürfen die Unterlagen mitnehmen.",
    turkce: "Belgeleri yanınıza alabilirsiniz.",
    level: "B1",
    notes: "Resmi izin",
  },
  {
    cumle: "Das dürfte kein Problem sein.",
    turkce: "Bu bir sorun olmamalı.",
    level: "B2",
    notes: "Olasılık tahmini",
  },
  {
    cumle: "Ab 18 Jahren darf man Auto fahren.",
    turkce: "18 yaşından itibaren araba kullanmak serbesttir.",
    level: "B2",
    notes: "Yasal izin kuralı",
  },

  // müssen (zorunda olmak)
  {
    cumle: "Ich muss jetzt gehen.",
    turkce: "Şimdi gitmem gerek.",
    level: "A1",
    notes: "Zorunluluk ifade eder",
  },
  {
    cumle: "Musst du arbeiten?",
    turkce: "Çalışmak zorunda mısın?",
    level: "A1",
    notes: "Zorunluluk sorgulama",
  },
  {
    cumle: "Wir müssen um 8 Uhr aufstehen.",
    turkce: "Saat 8'de kalkmak zorundayız.",
    level: "A1",
    notes: "Grup zorunluluğu",
  },
  {
    cumle: "Sie muss heute zum Arzt.",
    turkce: "Bugün doktora gitmek zorunda.",
    level: "A1",
    notes: "Kişisel zorunluluk",
  },
  {
    cumle: "Ich musste lange warten.",
    turkce: "Uzun süre beklemek zorunda kaldım.",
    level: "A2",
    notes: "Geçmişte zorunluluk",
  },
  {
    cumle: "Man muss hier ein Ticket kaufen.",
    turkce: "Burada bilet satın almak gerekiyor.",
    level: "A2",
    notes: "Genel bir zorunluluk",
  },
  {
    cumle: "Du musst nicht alles essen.",
    turkce: "Her şeyi yemek zorunda değilsin.",
    level: "A2",
    notes: "Zorunluluk olmaması",
  },
  {
    cumle: "Wir müssen unbedingt darüber sprechen.",
    turkce: "Bu konuda kesinlikle konuşmalıyız.",
    level: "B1",
    notes: "Güçlü bir zorunluluk",
  },
  {
    cumle: "Das muss ein Irrtum sein.",
    turkce: "Bu bir hata olmalı.",
    level: "B1",
    notes: "Mantıksal çıkarım",
  },
  {
    cumle: "Sie müssen den Antrag bis Freitag einreichen.",
    turkce: "Başvuruyu Cuma gününe kadar sunmanız gerekiyor.",
    level: "B2",
    notes: "Resmi bir zorunluluk",
  },

  // sollen (gerekli olmak)
  {
    cumle: "Soll ich dir helfen?",
    turkce: "Sana yardım edeyim mi?",
    level: "A1",
    notes: "Yardım önerisi",
  },
  {
    cumle: "Du sollst pünktlich sein.",
    turkce: "Dakik olmalısın.",
    level: "A1",
    notes: "Tavsiye veya beklenti",
  },
  {
    cumle: "Wir sollen heute früh schlafen.",
    turkce: "Bugün erken uyumalıyız.",
    level: "A1",
    notes: "Grup tavsiyesi",
  },
  {
    cumle: "Was soll ich kochen?",
    turkce: "Ne pişirmeliyim?",
    level: "A1",
    notes: "Karar sorma", // Düzeltme: "What" yerine "Was"
  },
  {
    cumle: "Sollte ich einen Regenschirm mitnehmen?",
    turkce: "Şemsiye almalı mıyım?",
    level: "A2",
    notes: "Konditional ile tavsiye sorma",
  },
  {
    cumle: "Man soll jeden Tag Obst essen.",
    turkce: "Her gün meyve yemelidir.",
    level: "A2",
    notes: "Genel bir tavsiye",
  },
  {
    cumle: "Er soll sehr nett sein.",
    turkce: "O çok nazik olmalı/öyle söyleniyor.",
    level: "B1",
    notes: "Söylenti veya beklenti",
  },
  {
    cumle: "Du solltest mehr Sport treiben.",
    turkce: "Daha fazla spor yapmalısın.",
    level: "B1",
    notes: "Kişisel tavsiye",
  },
  {
    cumle: "Das sollte eigentlich funktionieren.",
    turkce: "Bu aslında çalışması gerekiyor.",
    level: "B2",
    notes: "Olasılık veya beklenti",
  },
  {
    cumle: "Sie sollen den Arzt sofort anrufen.",
    turkce: "Doktoru hemen aramalısınız.",
    level: "B2",
    notes: "Acil bir tavsiye",
  },

  // wollen (istemek)
  {
    cumle: "Ich will nach Hause gehen.",
    turkce: "Eve gitmek istiyorum.",
    level: "A1",
    notes: "Kişisel istek",
  },
  {
    cumle: "Willst du einen Kaffee?",
    turkce: "Kahve ister misin?",
    level: "A1",
    notes: "Kibar bir teklif",
  },
  {
    cumle: "Wir wollen am Wochenende wandern.",
    turkce: "Hafta sonu yürüyüşe çıkmak istiyoruz.",
    level: "A1",
    notes: "Grup planı",
  },
  {
    cumle: "Sie will Ärztin werden.",
    turkce: "Doktor olmak istiyor.",
    level: "A1",
    notes: "Uzun vadeli hedef",
  },
  {
    cumle: "Ich wollte dich anrufen.",
    turkce: "Seni aramak istedim.",
    level: "A2",
    notes: "Geçmişte istek",
  },
  {
    cumle: "Was willst du damit sagen?",
    turkce: "Bununla ne demek istiyorsun?",
    level: "A2",
    notes: "Anlam sorma",
  },
  {
    cumle: "Er will uns nicht helfen.",
    turkce: "Bize yardım etmek istemiyor.",
    level: "A2",
    notes: "Reddetme ifadesi",
  },
  {
    cumle: "Wir wollten eigentlich schon früher kommen.",
    turkce: "Aslında daha erken gelmek istedik.",
    level: "B1",
    notes: "Geçmişte planlanmış istek",
  },
  {
    cumle: "Sie will unbedingt diese Stelle bekommen.",
    turkce: "Bu pozisyonu kesinlikle almak istiyor.",
    level: "B1",
    notes: "Güçlü bir istek",
  },
  {
    cumle: "Ich will, dass du ehrlich bist.",
    turkce: "Dürüst olmanı istiyorum.",
    level: "B2",
    notes: "Yan cümle ile istek",
  },

  // mögen/möchten (hoşlanmak/istemek)
  {
    cumle: "Ich mag Schokolade.",
    turkce: "Çikolatayı severim.",
    level: "A1",
    notes: "Genel bir beğeni",
  },
  {
    cumle: "Magst du Tiere?",
    turkce: "Hayvanları sever misin?",
    level: "A1",
    notes: "Beğeni sorma",
  },
  {
    cumle: "Möchtest du etwas trinken?",
    turkce: "Bir şeyler içmek ister misin?",
    level: "A1",
    notes: "Kibar bir teklif",
  },
  {
    cumle: "Wir möchten bestellen.",
    turkce: "Sipariş vermek istiyoruz.",
    level: "A1",
    notes: "Restoran ortamında rica",
  },
  {
    cumle: "Er mag keine Äpfel.",
    turkce: "Elmaları sevmez.",
    level: "A1",
    notes: "Olumsuz beğeni",
  },
  {
    cumle: "Ich möchte gern nach Berlin fahren.",
    turkce: "Berlin'e gitmek isterim.",
    level: "A2",
    notes: "Kibar bir istek",
  },
  {
    cumle: "Sie mögen klassische Musik.",
    turkce: "Klasik müziği severler.",
    level: "A2",
    notes: "Grup beğenisi",
  },
  {
    cumle: "Möchten Sie einen Termin vereinbaren?",
    turkce: "Bir randevu ayarlamak ister misiniz?",
    level: "B1",
    notes: "Resmi bir teklif",
  },
  {
    cumle: "Ich mochte diesen Film nicht.",
    turkce: "Bu filmi sevmedim.",
    level: "B1",
    notes: "Geçmişte beğenmeme",
  },
  {
    cumle: "Er möchte sich bei Ihnen für die Hilfe bedanken.",
    turkce: "Yardımınız için size teşekkür etmek istiyor.",
    level: "B2",
    notes: "Kibar bir niyet",
  },
];

function Test() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTurkish, setShowTurkish] = useState(true);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [showFavorites, setShowFavorites] = useState(false);
  const [repeatCount, setRepeatCount] = useState(0); // Aynı cümlenin kaç kez gösterildiğini takip eder

  // Rasgele indeks seçme fonksiyonu
  const getRandomIndex = () => {
    return Math.floor(Math.random() * data.length);
  };

  // İlk yüklemede rasgele bir cümle seç
  useEffect(() => {
    setCurrentIndex(getRandomIndex());
  }, []);

  // Almanca'dan bir sonraki adıma otomatik geçiş (5 saniye)
  useEffect(() => {
    let timer;
    if (!showFavorites && !showTurkish) {
      // Sadece Almanca gösterimde ve favoriler kapalıyken
      timer = setTimeout(() => {
        if (repeatCount < 1) {
          // İlk gösterim: Aynı cümlenin Türkçesine dön
          setShowTurkish(true);
          setRepeatCount((prev) => prev + 1);
        } else {
          // İkinci gösterim: Yeni rasgele cümle ve sıfırla
          setCurrentIndex(getRandomIndex());
          setShowTurkish(true);
          setRepeatCount(0);
        }
      }, 5000); // Almanca 5 saniye gösteriliyor
    }
    return () => clearTimeout(timer);
  }, [showTurkish, showFavorites, repeatCount]);

  // İleri butonu için fonksiyon (Türkçe'den Almanca'ya geçiş)
  const goToGerman = () => {
    setShowTurkish(false);
  };

  // Favorilere ekleme fonksiyonu
  const addToFavorites = () => {
    const newFavorite = data[currentIndex];
    if (!favorites.some((fav) => fav.cumle === newFavorite.cumle)) {
      const updatedFavorites = [...favorites, newFavorite];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
    // İleri butonuyla aynı mantık: Almanca'ya geç
    setShowTurkish(false);
  };

  // Favorilerden kaldırma fonksiyonu
  const removeFromFavorites = (indexToRemove) => {
    const updatedFavorites = favorites.filter(
      (_, index) => index !== indexToRemove
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  // Favorileri aç/kapa fonksiyonu
  const toggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Almanca Öğren</h1>

        {/* Favoriler kapalıyken cümle gösterimi */}
        {!showFavorites && (
          <div className="transition-opacity duration-300">
            {showTurkish ? (
              <div>
                <p className="text-2xl font-bold text-red-500">
                  {data[currentIndex].turkce}
                </p>
                <div className="mt-4 flex justify-center gap-4">
                  <button
                    onClick={addToFavorites}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-transform hover:scale-105"
                  >
                    Favorilere Ekle
                  </button>
                  <button
                    onClick={goToGerman}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-transform hover:scale-105"
                  >
                    İleri
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-3xl font-semibold text-red-500">
                  {data[currentIndex].cumle}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Favoriler butonu */}
        <div className="mt-4">
          <button
            onClick={toggleFavorites}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition-transform hover:scale-105"
          >
            {showFavorites ? "Cümlelere Dön" : "Favorileri Göster"}
          </button>
        </div>

        {/* Favoriler açıkken sadece favoriler listesi */}
        {showFavorites && (
          <div className="mt-4 max-h-96 overflow-y-auto transition-all duration-300">
            <h2 className="text-lg font-semibold mb-2">Favoriler</h2>
            {favorites.length > 0 ? (
              <ul className="space-y-3">
                {favorites.map((fav, index) => (
                  <li
                    key={index}
                    className="p-3 bg-gray-50 rounded-lg shadow-sm flex justify-between items-center hover:bg-gray-100 transition-transform hover:-translate-y-0.5"
                  >
                    <div className="text-left">
                      <p className="font-medium">{fav.cumle}</p>
                      <p className="text-sm text-gray-700">{fav.turkce}</p>
                      <p className="text-xs text-gray-500">
                        Seviye: {fav.level} | Not: {fav.notes}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromFavorites(index)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition-transform hover:scale-105"
                    >
                      Kaldır
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">Henüz favori eklenmedi.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Test;
