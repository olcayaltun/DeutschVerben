import React, { useState, useEffect } from "react";

const Test2 = () => {
  const vocabularyData = [
    {
      germanTerm: "Morddrohungen",
      turkishTranslations: ["Ölüm tehditleri"],
      meaning: "Threats of murder or death directed at someone.",
      exampleSentenceGerman:
        "Der Journalist erhielt Morddrohungen nach seiner Veröffentlichung.",
      exampleSentenceTurkish:
        "Gazeteci, haberinden sonra ölüm tehditleri aldı.",
    },
    {
      germanTerm: "Vertreter",
      turkishTranslations: ["Temsilci", "Vekil", "Satış elemanı"],
      meaning:
        "A representative, agent, or salesperson acting on behalf of a company or group.",
      exampleSentenceGerman:
        "Der Vertreter der Firma stellte das neue Produkt vor.",
      exampleSentenceTurkish: "Şirketin temsilcisi yeni ürünü tanıttı.",
    },
    {
      germanTerm: "Dunkelziffer",
      turkishTranslations: ["Kayıtlara geçmeyen sayı", "Gizli sayı"],
      meaning:
        "The number of unreported or hidden cases, often in statistics or crime.",
      exampleSentenceGerman:
        "Die Dunkelziffer bei Einbrüchen ist vermutlich hoch.",
      exampleSentenceTurkish:
        "Hırsızlıklardaki gizli sayı muhtemelen yüksektir.",
    },
    {
      germanTerm: "weitaus",
      turkishTranslations: ["Çok daha", "Katbekat"],
      meaning:
        "By far or much more, indicating a significant degree of difference.",
      exampleSentenceGerman: "Das Ergebnis war weitaus besser als erwartet.",
      exampleSentenceTurkish: "Sonuç beklenenden çok daha iyiydi.",
    },
    {
      germanTerm: "ausnahmslos",
      turkishTranslations: ["İstisnasız"],
      meaning: "Without exception, applying to everyone or everything.",
      exampleSentenceGerman: "Die neuen Regeln gelten ausnahmslos für alle.",
      exampleSentenceTurkish:
        "Yeni kurallar istisnasız herkes için geçerlidir.",
    },
    {
      germanTerm: "jeder kennt jeden",
      turkishTranslations: ["Herkes herkesi tanıyor"],
      meaning:
        "Everyone knows everyone, typically used to describe close-knit communities.",
      exampleSentenceGerman: "In unserem Dorf kennt jeder jeden.",
      exampleSentenceTurkish: "Köyümüzde herkes herkesi tanır.",
    },
    {
      germanTerm: "Äußerung",
      turkishTranslations: ["İfade", "Açıklama", "Söz"],
      meaning: "A statement, expression, or remark made publicly or formally.",
      exampleSentenceGerman: "Die Äußerung des Politikers löste Kritik aus.",
      exampleSentenceTurkish: "Politikacının açıklaması eleştiri yarattı.",
    },
    {
      germanTerm: "Hass rübergebracht",
      turkishTranslations: ["Nefret aktarmak", "Nefret ifade etmek"],
      meaning: "Conveying or expressing hatred through words or actions.",
      exampleSentenceGerman: "Seine Rede hat viel Hass rübergebracht.",
      exampleSentenceTurkish: "Konuşması çok nefret yansıttı.",
    },
    {
      germanTerm: "Individualisierung",
      turkishTranslations: ["Bireyselleşme", "Kişiselleştirme"],
      meaning:
        "Individualization or personalization, tailoring to individual needs.",
      exampleSentenceGerman:
        "Die Individualisierung des Unterrichts hilft den Schülern.",
      exampleSentenceTurkish:
        "Eğitimin kişiselleştirilmesi öğrencilere yardımcı olur.",
    },
    {
      germanTerm: "Verrohung",
      turkishTranslations: ["Kabalaşma", "Vahşileşme", "Duyarsızlaşma"],
      meaning:
        "Coarsening, brutalization, or desensitization of behavior or language.",
      exampleSentenceGerman:
        "Viele beklagen die Verrohung der Sprache im Internet.",
      exampleSentenceTurkish:
        "Birçok kişi internette dilin kabalaştığından şikâyet ediyor.",
    },
    {
      germanTerm: "befeuern",
      turkishTranslations: ["Ateşlemek", "Körüklemek", "Teşvik etmek"],
      meaning:
        "To ignite, fuel, or encourage something, such as a discussion or conflict.",
      exampleSentenceGerman: "Seine Worte befeuerten die Diskussion.",
      exampleSentenceTurkish: "Onun sözleri tartışmayı alevlendirdi.",
    },
    {
      germanTerm: "auszugleichen",
      turkishTranslations: ["Dengelemek", "Telafi etmek"],
      meaning:
        "To balance or compensate for something, such as a disadvantage.",
      exampleSentenceGerman:
        "Den Nachteil versuchte er durch Fleiß auszugleichen.",
      exampleSentenceTurkish:
        "Dezavantajını çalışkanlığıyla telafi etmeye çalıştı.",
    },
    {
      germanTerm: "Zielscheibe",
      turkishTranslations: ["Hedef tahtası", "Hedef"],
      meaning:
        "A target, either literally (e.g., a dartboard) or figuratively (e.g., a scapegoat).",
      exampleSentenceGerman:
        "Nach dem Skandal wurde er zur Zielscheibe der Medien.",
      exampleSentenceTurkish: "Skandaldan sonra medyanın hedefi oldu.",
    },
    {
      germanTerm: "Amtsträger",
      turkishTranslations: ["Kamu görevlisi", "Resmî görevli"],
      meaning:
        "A public official or officeholder responsible for official duties.",
      exampleSentenceGerman: "Amtsträger müssen sich an die Gesetze halten.",
      exampleSentenceTurkish: "Kamu görevlileri yasalara uymak zorundadır.",
    },
    {
      germanTerm: "Mandatsträger",
      turkishTranslations: ["Seçilmiş görevli", "Siyasi temsilci"],
      meaning:
        "An elected official or representative with a mandate to serve the public.",
      exampleSentenceGerman:
        "Mandatsträger sind verpflichtet, das Wohl der Bürger zu vertreten.",
      exampleSentenceTurkish:
        "Görevli temsilciler vatandaşların çıkarlarını temsil etmekle yükümlüdür.",
    },
    {
      germanTerm: "Andersdenkenden",
      turkishTranslations: ["Farklı düşünenler", "Muhalifler"],
      meaning:
        "People who think differently or dissenters, often in a democratic context.",
      exampleSentenceGerman:
        "In einer Demokratie müssen Andersdenkenden geschützt werden.",
      exampleSentenceTurkish: "Bir demokraside farklı düşünenler korunmalıdır.",
    },
    {
      germanTerm: "nachlassen",
      turkishTranslations: ["gevşemek", "azalmak"],
      meaning: "To decrease, subside, or become less intense.",
      exampleSentenceGerman: "Der Regen hat endlich nachgelassen.",
      exampleSentenceTurkish: "Yağmur sonunda azaldı.",
    },
    {
      germanTerm: "in Strömen",
      turkishTranslations: ["bardaktan boşanırcasına"],
      meaning: "Pouring heavily, like from a bucket.",
      exampleSentenceGerman: "Es regnet in Strömen.",
      exampleSentenceTurkish: "Bardaktan boşanırcasına yağmur yağıyor.",
    },
    {
      germanTerm: "keineswegs",
      turkishTranslations: ["kesinlikle değil", "asla"],
      meaning: "By no means, not at all.",
      exampleSentenceGerman: "Das stimmt keineswegs.",
      exampleSentenceTurkish: "Bu kesinlikle doğru değil.",
    },
    {
      germanTerm: "unterschätzen",
      turkishTranslations: ["küçümsemek", "hafife almak"],
      meaning: "To underestimate or undervalue.",
      exampleSentenceGerman: "Man darf die Gefahr nicht unterschätzen.",
      exampleSentenceTurkish: "Tehlikeyi hafife almamak gerekir.",
    },
    {
      germanTerm: "Suchtgefahr",
      turkishTranslations: ["bağımlılık tehlikesi"],
      meaning: "The risk or danger of addiction.",
      exampleSentenceGerman: "Dieses Spiel birgt eine hohe Suchtgefahr.",
      exampleSentenceTurkish: "Bu oyun yüksek bağımlılık tehlikesi içeriyor.",
    },
    {
      germanTerm: "verleiten",
      turkishTranslations: ["ayartmak", "teşvik etmek"],
      meaning: "To tempt or entice someone to do something.",
      exampleSentenceGerman: "Die Werbung verleitet oft zum Kaufen.",
      exampleSentenceTurkish: "Reklam çoğu zaman satın almaya teşvik eder.",
    },
    {
      germanTerm: "umstritten",
      turkishTranslations: ["tartışmalı"],
      meaning: "Controversial or disputed.",
      exampleSentenceGerman: "Das neue Gesetz ist sehr umstritten.",
      exampleSentenceTurkish: "Yeni yasa oldukça tartışmalı.",
    },
    {
      germanTerm: "fördern",
      turkishTranslations: ["desteklemek", "teşvik etmek"],
      meaning: "To promote or support.",
      exampleSentenceGerman: "Die Schule fördert begabte Kinder.",
      exampleSentenceTurkish: "Okul yetenekli çocukları destekliyor.",
    },
    {
      germanTerm: "vergiften",
      turkishTranslations: ["zehirlemek"],
      meaning: "To poison or contaminate.",
      exampleSentenceGerman: "Das Gift kann das Wasser vergiften.",
      exampleSentenceTurkish: "Zehir suyu kirletebilir.",
    },
    {
      germanTerm: "Phänomen",
      turkishTranslations: ["olgu", "fenomen"],
      meaning: "A phenomenon or observable event.",
      exampleSentenceGerman: "Der Klimawandel ist ein globales Phänomen.",
      exampleSentenceTurkish: "İklim değişikliği küresel bir olgudur.",
    },
    {
      germanTerm: "Auswirkungen",
      turkishTranslations: ["etkiler", "sonuçlar"],
      meaning: "Effects or consequences.",
      exampleSentenceGerman:
        "Die Krise hat große Auswirkungen auf die Wirtschaft.",
      exampleSentenceTurkish: "Krizin ekonomi üzerinde büyük etkileri var.",
    },
    {
      germanTerm: "Vorlieben",
      turkishTranslations: ["tercihler", "zevkler"],
      meaning: "Preferences or tastes.",
      exampleSentenceGerman: "Jeder hat seine eigenen Vorlieben.",
      exampleSentenceTurkish: "Herkesin kendi zevkleri vardır.",
    },
    {
      germanTerm: "unterhaltsam",
      turkishTranslations: ["eğlenceli"],
      meaning: "Entertaining or amusing.",
      exampleSentenceGerman: "Der Film war sehr unterhaltsam.",
      exampleSentenceTurkish: "Film çok eğlenceliydi.",
    },
    {
      germanTerm: "ausreichend",
      turkishTranslations: ["yeterli"],
      meaning: "Sufficient or adequate.",
      exampleSentenceGerman:
        "Die Schüler haben ausreichend Zeit für die Prüfung.",
      exampleSentenceTurkish: "Öğrencilerin sınav için yeterli zamanı var.",
    },
    {
      germanTerm: "grundsätzlich",
      turkishTranslations: ["temelde", "esasen"],
      meaning: "Fundamentally or basically.",
      exampleSentenceGerman:
        "Ich stimme dir grundsätzlich zu, aber es gibt kleine Unterschiede.",
      exampleSentenceTurkish:
        "Sana temelde katılıyorum ama küçük farklılıklar var.",
    },
    {
      germanTerm: "erhöhen",
      turkishTranslations: ["artırmak"],
      meaning: "To increase or raise.",
      exampleSentenceGerman:
        "Die Firma möchte die Produktion im nächsten Jahr erhöhen.",
      exampleSentenceTurkish: "Şirket gelecek yıl üretimi artırmak istiyor.",
    },
    {
      germanTerm: "Steigerung",
      turkishTranslations: ["artış", "yükseliş"],
      meaning: "Increase or rise.",
      exampleSentenceGerman: "Es gibt eine deutliche Steigerung der Preise.",
      exampleSentenceTurkish: "Fiyatlarda belirgin bir artış var.",
    },
    {
      germanTerm: "Ergebnis",
      turkishTranslations: ["sonuç"],
      meaning: "Result or outcome.",
      exampleSentenceGerman: "Das Ergebnis der Prüfung war sehr gut.",
      exampleSentenceTurkish: "Sınavın sonucu çok iyiydi.",
    },
    {
      germanTerm: "vermieden",
      turkishTranslations: ["kaçınılmış"],
      meaning: "Avoided or prevented.",
      exampleSentenceGerman:
        "Fehler können durch gute Planung vermieden werden.",
      exampleSentenceTurkish: "Hatalar iyi planlama ile kaçınılabilir.",
    },
    {
      germanTerm: "verringern",
      turkishTranslations: ["azaltmak"],
      meaning: "To reduce or decrease.",
      exampleSentenceGerman: "Wir müssen den Energieverbrauch verringern.",
      exampleSentenceTurkish: "Enerji tüketimini azaltmalıyız.",
    },
    {
      germanTerm: "Schlussfolgerung",
      turkishTranslations: ["sonuç", "çıkarım"],
      meaning: "Conclusion or inference.",
      exampleSentenceGerman:
        "Die Schlussfolgerung aus der Diskussion war eindeutig.",
      exampleSentenceTurkish: "Tartışmadan çıkan sonuç açıktı.",
    },
    {
      germanTerm: "Energieerzeugung",
      turkishTranslations: ["enerji üretimi"],
      meaning: "Energy production or generation.",
      exampleSentenceGerman:
        "Die Energieerzeugung aus Windkraft wird immer wichtiger.",
      exampleSentenceTurkish:
        "Rüzgâr enerjisinden enerji üretimi giderek daha önemli hale geliyor.",
    },
    {
      germanTerm: "herkömmlich",
      turkishTranslations: ["geleneksel", "alışılmış"],
      meaning: "Conventional or traditional.",
      exampleSentenceGerman:
        "Viele Menschen benutzen noch herkömmliche Glühbirnen.",
      exampleSentenceTurkish:
        "Birçok insan hâlâ geleneksel ampulleri kullanıyor.",
    },
    {
      germanTerm: "erhebliche",
      turkishTranslations: ["önemli", "ciddi"],
      meaning: "Significant or considerable.",
      exampleSentenceGerman: "Die Kosten waren erheblich.",
      exampleSentenceTurkish: "Maliyetler ciddiydi.",
    },
    {
      germanTerm: "ausgestattet",
      turkishTranslations: ["donanımlı", "donatılmış"],
      meaning: "Equipped or furnished.",
      exampleSentenceGerman:
        "Das Zimmer ist mit moderner Technik ausgestattet.",
      exampleSentenceTurkish: "Oda modern teknoloji ile donatılmıştır.",
    },
    {
      germanTerm: "im Allgemeinen",
      turkishTranslations: ["genel olarak"],
      meaning: "Generally or in general.",
      exampleSentenceGerman: "Im Allgemeinen sind Kinder neugierig.",
      exampleSentenceTurkish: "Genel olarak çocuklar meraklıdır.",
    },
    {
      germanTerm: "uneingeschränkter",
      turkishTranslations: ["sınırsız", "kısıtlamasız"],
      meaning: "Unrestricted or unlimited.",
      exampleSentenceGerman: "Er hat uneingeschränkten Zugang zu den Daten.",
      exampleSentenceTurkish: "Verilere sınırsız erişimi var.",
    },
    {
      germanTerm: "Infrastruktur",
      turkishTranslations: ["altyapı"],
      meaning: "Infrastructure.",
      exampleSentenceGerman: "Die Infrastruktur der Stadt ist gut ausgebaut.",
      exampleSentenceTurkish: "Şehrin altyapısı iyi geliştirilmiş.",
    },
    {
      germanTerm: "individuellen Vorlieben",
      turkishTranslations: ["bireysel tercihler"],
      meaning: "Individual preferences.",
      exampleSentenceGerman:
        "Die Speisekarte kann nach den individuellen Vorlieben angepasst werden.",
      exampleSentenceTurkish: "Menü bireysel tercihlere göre ayarlanabilir.",
    },
    {
      germanTerm: "bevorzugen",
      turkishTranslations: ["tercih etmek"],
      meaning: "To prefer.",
      exampleSentenceGerman: "Ich bevorzuge Tee statt Kaffee.",
      exampleSentenceTurkish: "Kahve yerine çayı tercih ederim.",
    },
    {
      germanTerm: "die Hektik",
      turkishTranslations: ["koşuşturma", "telaş"],
      meaning: "Hustle or bustle.",
      exampleSentenceGerman: "Ich mag die Ruhe, nicht die Hektik der Stadt.",
      exampleSentenceTurkish: "Şehrin telaşını değil, sakinliğini severim.",
    },
    {
      germanTerm: "Verfolgung",
      turkishTranslations: ["takip", "zulüm"],
      meaning: "Persecution or pursuit.",
      exampleSentenceGerman:
        "Krieg und Verfolgung sind häufige Ursachen von Flucht.",
      exampleSentenceTurkish:
        "Savaş ve zulüm kaçışın sık rastlanan nedenleridir.",
    },
    {
      germanTerm: "beherrscht",
      turkishTranslations: ["hakim", "egemen"],
      meaning: "Proficient or in command of.",
      exampleSentenceGerman: "Er beherrscht drei Sprachen.",
      exampleSentenceTurkish: "O, üç dile hakimdir.",
    },
    {
      germanTerm: "Gleichaltrigen",
      turkishTranslations: ["yaşıtlar"],
      meaning: "Peers or those of the same age.",
      exampleSentenceGerman: "Kinder lernen viel von ihren Gleichaltrigen.",
      exampleSentenceTurkish: "Çocuklar yaşıtlarından çok şey öğrenir.",
    },
    {
      germanTerm: "gegenseitigen",
      turkishTranslations: ["karşılıklı", "birbirine"],
      meaning: "Mutual or reciprocal.",
      exampleSentenceGerman: "Wir müssen gegenseitigen Respekt zeigen.",
      exampleSentenceTurkish: "Karşılıklı saygı göstermeliyiz.",
    },
    {
      germanTerm: "erfordert",
      turkishTranslations: ["gerektirir"],
      meaning: "Requires or demands.",
      exampleSentenceGerman: "Dieses Projekt erfordert viel Geduld.",
      exampleSentenceTurkish: "Bu proje çok sabır gerektirir.",
    },
    {
      germanTerm: "enorme",
      turkishTranslations: ["muazzam", "büyük"],
      meaning: "Enormous or tremendous.",
      exampleSentenceGerman: "Die Technologie hat enorme Fortschritte gemacht.",
      exampleSentenceTurkish: "Teknoloji muazzam ilerlemeler kaydetti.",
    },
    {
      germanTerm: "Fortschritte",
      turkishTranslations: ["ilerlemeler", "gelişmeler"],
      meaning: "Progress or advancements.",
      exampleSentenceGerman:
        "Die Fortschritte in der Medizin sind beeindruckend.",
      exampleSentenceTurkish: "Tıptaki ilerlemeler etkileyicidir.",
    },
    {
      germanTerm: "mittlerweile",
      turkishTranslations: ["artık", "şu sıralar"],
      meaning: "Meanwhile or by now.",
      exampleSentenceGerman: "Mittlerweile weiß ich die Antwort.",
      exampleSentenceTurkish: "Artık cevabı biliyorum.",
    },
    {
      germanTerm: "fester Bestandteil",
      turkishTranslations: ["sabit unsur"],
      meaning: "Fixed or integral part.",
      exampleSentenceGerman: "Sport ist ein fester Bestandteil unseres Lebens.",
      exampleSentenceTurkish: "Spor, hayatımızın sabit bir unsurudur.",
    },
    {
      germanTerm: "Segen betrachten",
      turkishTranslations: ["nimet olarak görmek"],
      meaning: "To consider as a blessing.",
      exampleSentenceGerman:
        "Man sollte die Vorteile der Technologie als Segen betrachten.",
      exampleSentenceTurkish:
        "Teknolojinin avantajlarını nimet olarak görmek gerekir.",
    },
    {
      germanTerm: "Fluch",
      turkishTranslations: ["lanet", "felaket"],
      meaning: "Curse or disaster.",
      exampleSentenceGerman: "Übermäßiger Konsum kann ein Fluch sein.",
      exampleSentenceTurkish: "Aşırı tüketim bir lanet olabilir.",
    },
    {
      germanTerm: "Chancen von KI",
      turkishTranslations: ["yapay zekanın fırsatları"],
      meaning: "Opportunities of artificial intelligence.",
      exampleSentenceGerman:
        "Zu den Chancen von KI gehört die Fähigkeit, große Datenmengen zu analysieren.",
      exampleSentenceTurkish:
        "Yapay zekanın fırsatlarından biri, büyük veri kümelerini analiz etme yeteneğidir.",
    },
    {
      germanTerm: "Diagnose",
      turkishTranslations: ["teşhis"],
      meaning: "Diagnosis.",
      exampleSentenceGerman: "Die Diagnose des Arztes war richtig.",
      exampleSentenceTurkish: "Doktorun teşhisi doğruydu.",
    },
    {
      germanTerm: "identifizieren",
      turkishTranslations: ["tanımlamak", "teşhis etmek"],
      meaning: "To identify or diagnose.",
      exampleSentenceGerman: "Wir müssen die Ursachen identifizieren.",
      exampleSentenceTurkish: "Nedenleri tanımlamalıyız.",
    },
    {
      germanTerm: "Pestiziden",
      turkishTranslations: ["pestisitler"],
      meaning: "Pesticides.",
      exampleSentenceGerman: "Die Pflanzen werden mit Pestiziden behandelt.",
      exampleSentenceTurkish: "Bitkiler pestisitlerle işleniyor.",
    },
    {
      germanTerm: "birgt",
      turkishTranslations: ["içerir", "saklamak", "risk taşımak"],
      meaning: "Contains, holds, or carries risk.",
      exampleSentenceGerman: "Diese Entscheidung birgt große Risiken.",
      exampleSentenceTurkish: "Bu karar büyük riskler içeriyor.",
    },
    {
      germanTerm: "Privatsphäre",
      turkishTranslations: ["özel yaşam", "mahremiyet"],
      meaning: "Privacy or private life.",
      exampleSentenceGerman: "Jeder Mensch hat das Recht auf Privatsphäre.",
      exampleSentenceTurkish: "Her insanın özel yaşama hakkı vardır.",
    },
    {
      germanTerm: "in der Lage",
      turkishTranslations: ["-e muktedir", "-e yetenekli"],
      meaning: "Capable or able to.",
      exampleSentenceGerman: "Er ist in der Lage, das Problem zu lösen.",
      exampleSentenceTurkish: "O, problemi çözebilecek durumda.",
    },
    {
      germanTerm: "hinsichtlich",
      turkishTranslations: ["ile ilgili", "bakımından"],
      meaning: "With regard to or in terms of.",
      exampleSentenceGerman:
        "Hinsichtlich der Sicherheit müssen wir vorsichtig sein.",
      exampleSentenceTurkish: "Güvenlik bakımından dikkatli olmalıyız.",
    },
    {
      germanTerm: "Anforderungen",
      turkishTranslations: ["gereksinimler", "talepler"],
      meaning: "Requirements or demands.",
      exampleSentenceGerman: "Das Projekt erfüllt alle Anforderungen.",
      exampleSentenceTurkish: "Proje tüm gereksinimleri karşılıyor.",
    },
    {
      germanTerm: "erwähnen",
      turkishTranslations: ["bahsetmek", "anmak"],
      meaning: "To mention or refer to.",
      exampleSentenceGerman: "Ich möchte einen wichtigen Punkt erwähnen.",
      exampleSentenceTurkish: "Önemli bir noktaya bahsetmek istiyorum.",
    },
    {
      germanTerm: "Integrationsbeauftragte",
      turkishTranslations: ["entegrasyon sorumlusu"],
      meaning: "Integration officer or representative.",
      exampleSentenceGerman:
        "Der Integrationsbeauftragte unterstützt Migranten.",
      exampleSentenceTurkish: "Entegrasyon sorumlusu, göçmenleri destekler.",
    },
    {
      germanTerm: "Ausstoß",
      turkishTranslations: ["salım", "çıkış"],
      meaning: "Emission or output.",
      exampleSentenceGerman: "Der Ausstoß von CO₂ muss reduziert werden.",
      exampleSentenceTurkish: "CO₂ salımı azaltılmalı.",
    },
    {
      germanTerm: "Ursachen",
      turkishTranslations: ["nedenler"],
      meaning: "Causes or reasons.",
      exampleSentenceGerman: "Die Ursachen für das Problem sind vielfältig.",
      exampleSentenceTurkish: "Sorunun nedenleri çeşitli.",
    },
    {
      germanTerm: "schwerwiegende",
      turkishTranslations: ["ciddi", "ağır"],
      meaning: "Serious or severe.",
      exampleSentenceGerman: "Der Fehler hatte schwerwiegende Folgen.",
      exampleSentenceTurkish: "Hatanın ciddi sonuçları oldu.",
    },
    {
      germanTerm: "aussterben",
      turkishTranslations: ["nesli tükenmek"],
      meaning: "To become extinct.",
      exampleSentenceGerman: "Viele Tierarten sterben aus.",
      exampleSentenceTurkish: "Birçok hayvan türü tükeniyor.",
    },
    {
      germanTerm: "verschlimmert",
      turkishTranslations: ["daha da kötüleştirmek"],
      meaning: "To worsen or aggravate.",
      exampleSentenceGerman: "Die Hitze hat die Situation verschlimmert.",
      exampleSentenceTurkish: "Sıcaklık durumu kötüleştirdi.",
    },
    {
      germanTerm: "Voranschreiten",
      turkishTranslations: ["ilerleme", "gelişme"],
      meaning: "Progress or advancement.",
      exampleSentenceGerman:
        "Das rasche Voranschreiten der Technologie verändert die Welt.",
      exampleSentenceTurkish:
        "Teknolojinin hızlı ilerlemesi dünyayı değiştiriyor.",
    },
    {
      germanTerm: "drastisch",
      turkishTranslations: ["ciddi", "köklü", "sert"],
      meaning: "Drastic or severe.",
      exampleSentenceGerman: "Die Preise sind drastisch gestiegen.",
      exampleSentenceTurkish: "Fiyatlar ciddi şekilde arttı.",
    },
    {
      germanTerm: "bekämpfen",
      turkishTranslations: ["mücadele etmek", "yok etmek"],
      meaning: "To combat or fight against.",
      exampleSentenceGerman: "Wir müssen den Klimawandel bekämpfen.",
      exampleSentenceTurkish: "İklim değişikliğiyle mücadele etmeliyiz.",
    },
    {
      germanTerm: "Bedenken",
      turkishTranslations: ["çekince", "kuşku", "dikkate almak"],
      meaning: "Concerns or reservations / to consider.",
      exampleSentenceGerman: "Ich habe Bedenken wegen des Plans.",
      exampleSentenceTurkish: "Plan hakkında çekincelerim var.",
    },
    {
      germanTerm: "heilen",
      turkishTranslations: ["iyileşmek", "tedavi etmek"],
      meaning: "To heal or cure.",
      exampleSentenceGerman: "Die Wunde heilt langsam.",
      exampleSentenceTurkish: "Yara yavaşça iyileşiyor.",
    },
    {
      germanTerm: "Erbgut",
      turkishTranslations: ["genetik yapı", "kalıtım materyali"],
      meaning: "Genetic material or heredity.",
      exampleSentenceGerman: "Das Erbgut des Menschen besteht aus DNA.",
      exampleSentenceTurkish: "İnsan genetik yapısı DNA’dan oluşur.",
    },
    {
      germanTerm: "Sichelzellanämie",
      turkishTranslations: ["orak hücreli anemi"],
      meaning: "Sickle cell anemia, a hereditary blood disorder.",
      exampleSentenceGerman:
        "Sichelzellanämie ist eine erblich bedingte Bluterkrankung.",
      exampleSentenceTurkish:
        "Orak hücreli anemi genetik bir kan hastalığıdır.",
    },
    {
      germanTerm: "Mukoviszidose",
      turkishTranslations: ["kistik fibroz"],
      meaning: "Cystic fibrosis, a genetic disorder.",
      exampleSentenceGerman: "Mukoviszidose ist eine genetische Erkrankung.",
      exampleSentenceTurkish: "Kistik fibroz genetik bir hastalıktır.",
    },
    {
      germanTerm: "Schädlinge",
      turkishTranslations: ["zararlılar", "haşereler"],
      meaning: "Pests or harmful organisms.",
      exampleSentenceGerman: "Schädlinge können ganze Ernten zerstören.",
      exampleSentenceTurkish: "Zararlılar tüm ürünleri yok edebilir.",
    },
    {
      germanTerm: "Freisetzung",
      turkishTranslations: ["serbest bırakma", "salım"],
      meaning: "Release or emission.",
      exampleSentenceGerman:
        "Die Freisetzung von CO₂ trägt zum Klimawandel bei.",
      exampleSentenceTurkish:
        "CO₂’nin salımı iklim değişikliğine katkıda bulunur.",
    },
    {
      germanTerm: "vermehren",
      turkishTranslations: ["çoğalmak", "artırmak"],
      meaning: "To multiply or increase.",
      exampleSentenceGerman: "Die Bakterien vermehren sich schnell.",
      exampleSentenceTurkish: "Bakteriler hızla çoğalıyor.",
    },
    {
      germanTerm: "Nahrungskette",
      turkishTranslations: ["besin zinciri"],
      meaning: "Food chain.",
      exampleSentenceGerman: "Die Nahrungskette zeigt, wer wen frisst.",
      exampleSentenceTurkish: "Besin zinciri kim kimi yer gösterir.",
    },
    {
      germanTerm: "reguliert",
      turkishTranslations: ["düzenlenmiş", "kontrol edilmiş"],
      meaning: "Regulated or controlled.",
      exampleSentenceGerman:
        "Die Temperatur im Labor wird automatisch reguliert.",
      exampleSentenceTurkish:
        "Laboratuvar sıcaklığı otomatik olarak düzenleniyor.",
    },
    {
      germanTerm: "berücksichtigt",
      turkishTranslations: ["dikkate alınmış"],
      meaning: "Taken into account or considered.",
      exampleSentenceGerman: "Alle Faktoren wurden berücksichtigt.",
      exampleSentenceTurkish: "Tüm faktörler dikkate alındı.",
    },
    {
      germanTerm: "behindert",
      turkishTranslations: ["engelli", "engellenmiş"],
      meaning: "Disabled or obstructed.",
      exampleSentenceGerman:
        "Menschen mit Behinderung benötigen besondere Unterstützung.",
      exampleSentenceTurkish: "Engelli insanlar özel destek gerektirir.",
    },
    {
      germanTerm: "angemessen",
      turkishTranslations: ["uygun", "yerinde"],
      meaning: "Appropriate or suitable.",
      exampleSentenceGerman: "Die Kleidung war für die Feier angemessen.",
      exampleSentenceTurkish: "Kıyafet kutlama için uygundu.",
    },
    {
      germanTerm: "Leistungsvermögen",
      turkishTranslations: ["performans kapasitesi", "verimlilik"],
      meaning: "Performance capacity or efficiency.",
      exampleSentenceGerman:
        "Das Leistungsvermögen des Computers ist beeindruckend.",
      exampleSentenceTurkish: "Bilgisayarın performans kapasitesi etkileyici.",
    },
    {
      germanTerm: "vernachlässigen",
      turkishTranslations: ["ihmal etmek", "önem vermemek"],
      meaning: "To neglect or disregard.",
      exampleSentenceGerman: "Er hat seine Gesundheit vernachlässigt.",
      exampleSentenceTurkish: "Sağlığını ihmal etti.",
    },
    {
      germanTerm: "darüber hinaus",
      turkishTranslations: ["bunun yanı sıra"],
      meaning: "In addition or furthermore.",
      exampleSentenceGerman:
        "Darüber hinaus ist es wichtig, regelmäßig Sport zu treiben.",
      exampleSentenceTurkish: "Buna ek olarak, düzenli spor yapmak önemlidir.",
    },
    {
      germanTerm: "hinaus",
      turkishTranslations: ["dışarı", "ötesinde", "fazlasıyla"],
      meaning: "Out, beyond, or excessively.",
      exampleSentenceGerman: "Geh bitte hinaus!",
      exampleSentenceTurkish: "Lütfen dışarı çık!",
    },
    {
      germanTerm: "umfassenden",
      turkishTranslations: ["kapsamlı", "geniş"],
      meaning: "Comprehensive or extensive.",
      exampleSentenceGerman:
        "Die Studie bietet einen umfassenden Überblick über das Thema.",
      exampleSentenceTurkish:
        "Çalışma, konu hakkında kapsamlı bir genel bakış sunuyor.",
    },
    {
      germanTerm: "erzielen",
      turkishTranslations: ["elde etmek", "sağlamak"],
      meaning: "To achieve or obtain.",
      exampleSentenceGerman:
        "Mit harter Arbeit kann man gute Ergebnisse erzielen.",
      exampleSentenceTurkish: "Sıkı çalışmayla iyi sonuçlar elde edilebilir.",
    },
    {
      germanTerm: "gleichermaßen",
      turkishTranslations: ["aynı şekilde", "eşit derecede"],
      meaning: "Equally or in the same way.",
      exampleSentenceGerman:
        "Alle Beteiligten wurden gleichermaßen informiert.",
      exampleSentenceTurkish: "Tüm katılımcılar aynı şekilde bilgilendirildi.",
    },
    {
      germanTerm: "profitiert von",
      turkishTranslations: ["-den faydalanmak", "yararlanmak"],
      meaning: "To benefit or profit from.",
      exampleSentenceGerman:
        "Eine offene Gesellschaft profitiert von Vielfalt.",
      exampleSentenceTurkish: "Açık bir toplum çeşitlilikten faydalanır.",
    },
    {
      germanTerm: "Berufstätigen",
      turkishTranslations: ["çalışan kişiler"],
      meaning: "Working people or professionals.",
      exampleSentenceGerman: "Viele Berufstätigen haben wenig Freizeit.",
      exampleSentenceTurkish: "Birçok çalışan kişinin az boş vakti var.",
    },
    {
      germanTerm: "somit auch",
      turkishTranslations: ["dolayısıyla", "böylece"],
      meaning: "Thus or therefore.",
      exampleSentenceGerman:
        "Er hat viel gelernt und somit auch die Prüfung bestanden.",
      exampleSentenceTurkish: "Çok çalıştı ve dolayısıyla sınavı da geçti.",
    },
    {
      germanTerm: "existieren",
      turkishTranslations: ["var olmak"],
      meaning: "To exist.",
      exampleSentenceGerman:
        "Leben existiert auch unter schwierigen Bedingungen.",
      exampleSentenceTurkish: "Zor koşullarda bile yaşam var olabilir.",
    },
    {
      germanTerm: "Tätigkeitsfelder",
      turkishTranslations: ["faaliyet alanları"],
      meaning: "Fields of activity or professional domains.",
      exampleSentenceGerman:
        "Die Tätigkeitsfelder eines Arztes sind sehr vielfältig.",
      exampleSentenceTurkish: "Bir doktorun faaliyet alanları çok çeşitlidir.",
    },
    {
      germanTerm: "weiterhin",
      turkishTranslations: ["ayrıca", "hâlâ", "bundan sonra da"],
      meaning: "Furthermore, still, or henceforth.",
      exampleSentenceGerman: "Sie arbeitet weiterhin in Berlin.",
      exampleSentenceTurkish: "Hâlâ Berlin’de çalışıyor.",
    },
    {
      germanTerm: "Wandels",
      turkishTranslations: ["değişimin"],
      meaning: "Change (genitive form).",
      exampleSentenceGerman: "Die Folgen des Wandels sind deutlich sichtbar.",
      exampleSentenceTurkish: "Değişimin sonuçları açıkça görülüyor.",
    },
    {
      germanTerm: "voranzutreiben",
      turkishTranslations: ["ilerletmek", "teşvik etmek"],
      meaning: "To advance or promote.",
      exampleSentenceGerman:
        "Die Regierung versucht, die Digitalisierung voranzutreiben.",
      exampleSentenceTurkish: "Hükümet, dijitalleşmeyi ilerletmeye çalışıyor.",
    },
    {
      germanTerm: "im Zuge",
      turkishTranslations: ["… kapsamında", "… sürecinde"],
      meaning: "In the course of or as part of.",
      exampleSentenceGerman:
        "Im Zuge der Reformen wurden viele Gesetze geändert.",
      exampleSentenceTurkish: "Reformlar kapsamında birçok yasa değiştirildi.",
    },
    {
      germanTerm: "vermehrt Jobs",
      turkishTranslations: ["artan işler", "daha çok iş"],
      meaning: "Increasingly more jobs.",
      exampleSentenceGerman:
        "Durch die neue Technologie entstehen vermehrt Jobs.",
      exampleSentenceTurkish:
        "Yeni teknoloji sayesinde daha çok iş ortaya çıkıyor.",
    },
    {
      germanTerm: "wegfallen",
      turkishTranslations: ["ortadan kalkmak", "artık olmamak"],
      meaning: "To disappear or become obsolete.",
      exampleSentenceGerman: "Viele alte Berufe werden in Zukunft wegfallen.",
      exampleSentenceTurkish: "Birçok eski meslek gelecekte ortadan kalkacak.",
    },
    {
      germanTerm: "zunehmend",
      turkishTranslations: ["giderek artan", "artarak"],
      meaning: "Increasingly or growing.",
      exampleSentenceGerman: "Das Wetter wird zunehmend extremer.",
      exampleSentenceTurkish: "Hava giderek daha aşırı hale geliyor.",
    },
    {
      germanTerm: "ermöglichen",
      turkishTranslations: ["mümkün kılmak", "imkân sağlamak"],
      meaning: "To enable or make possible.",
      exampleSentenceGerman:
        "Das Internet ermöglicht schnellen Informationsaustausch.",
      exampleSentenceTurkish: "İnternet hızlı bilgi alışverişini mümkün kılar.",
    },
    {
      germanTerm: "Anforderungen",
      turkishTranslations: ["gereklilikler", "talepler", "şartlar"],
      meaning: "Requirements, demands, or conditions.",
      exampleSentenceGerman: "Die Anforderungen für diesen Job sind sehr hoch.",
      exampleSentenceTurkish: "Bu iş için gereklilikler çok yüksek.",
    },
    {
      germanTerm: "einschließlich",
      turkishTranslations: ["dahil olmak üzere"],
      meaning: "Including or inclusive of.",
      exampleSentenceGerman:
        "Alle Gäste, einschließlich der Kinder, waren eingeladen.",
      exampleSentenceTurkish:
        "Çocuklar dahil olmak üzere tüm konuklar davet edildi.",
    },
    {
      germanTerm: "Entwaldung",
      turkishTranslations: ["ormansızlaşma"],
      meaning: "Deforestation.",
      exampleSentenceGerman:
        "Die Entwaldung hat große Auswirkungen auf das Klima.",
      exampleSentenceTurkish:
        "Ormansızlaşma iklim üzerinde büyük etkilere sahip.",
    },
    {
      germanTerm: "Landnutzungsänderungen",
      turkishTranslations: ["arazi kullanım değişiklikleri"],
      meaning: "Changes in land use.",
      exampleSentenceGerman:
        "Landnutzungsänderungen beeinflussen die Umwelt stark.",
      exampleSentenceTurkish:
        "Arazi kullanım değişiklikleri çevreyi güçlü bir şekilde etkiler.",
    },
    {
      germanTerm: "Voranschreiten",
      turkishTranslations: ["ilerleme", "ilerleyiş"],
      meaning: "Progress or advancement.",
      exampleSentenceGerman:
        "Das Voranschreiten der Technik ist nicht zu stoppen.",
      exampleSentenceTurkish: "Teknolojinin ilerleyişi durdurulamaz.",
    },
    {
      germanTerm: "verursachten",
      turkishTranslations: ["sebep oldu"],
      meaning: "Caused (past participle).",
      exampleSentenceGerman: "Das Unwetter verursachte große Schäden.",
      exampleSentenceTurkish: "Fırtına büyük hasarlara sebep oldu.",
    },
    {
      germanTerm: "Gletschern",
      turkishTranslations: ["buzullar"],
      meaning: "Glaciers (dative/plural).",
      exampleSentenceGerman: "In den Alpen schmelzen die Gletscher.",
      exampleSentenceTurkish: "Alpler’de buzullar eriyor.",
    },
    {
      germanTerm: "Eisschelfen",
      turkishTranslations: ["buz sahanlıkları"],
      meaning: "Ice shelves.",
      exampleSentenceGerman:
        "Die Eisschelfen in der Antarktis brechen auseinander.",
      exampleSentenceTurkish: "Antarktika’daki buz sahanlıkları parçalanıyor.",
    },
    {
      germanTerm: "Extremwetterereignisse",
      turkishTranslations: ["aşırı hava olayları"],
      meaning: "Extreme weather events.",
      exampleSentenceGerman: "Extremwetterereignisse nehmen weltweit zu.",
      exampleSentenceTurkish: "Aşırı hava olayları dünya çapında artıyor.",
    },
    {
      germanTerm: "intensiveren",
      turkishTranslations: ["yoğunlaştırmak"],
      meaning: "To intensify.",
      exampleSentenceGerman: "Die Sonne intensiverte die Hitzewelle.",
      exampleSentenceTurkish: "Güneş, sıcak hava dalgasını yoğunlaştırdı.",
    },
    {
      germanTerm: "Hitzewellen",
      turkishTranslations: ["sıcak hava dalgaları"],
      meaning: "Heatwaves.",
      exampleSentenceGerman: "Hitzewellen werden immer häufiger.",
      exampleSentenceTurkish:
        "Sıcak hava dalgaları giderek daha sık hale geliyor.",
    },
    {
      germanTerm: "die unvermeidbaren",
      turkishTranslations: ["kaçınılmaz olanlar"],
      meaning: "The unavoidable (things or events).",
      exampleSentenceGerman:
        "Wir müssen die unvermeidbaren Risiken akzeptieren.",
      exampleSentenceTurkish: "Kaçınılmaz riskleri kabul etmeliyiz.",
    },
    {
      germanTerm: "die Schaffung",
      turkishTranslations: ["oluşturma", "kurma"],
      meaning: "Creation or establishment.",
      exampleSentenceGerman: "Die Schaffung neuer Arbeitsplätze ist wichtig.",
      exampleSentenceTurkish: "Yeni iş yerlerinin oluşturulması önemlidir.",
    },
    {
      germanTerm: "Förderung",
      turkishTranslations: ["destek", "teşvik"],
      meaning: "Support or promotion.",
      exampleSentenceGerman: "Die Förderung von Kindern ist entscheidend.",
      exampleSentenceTurkish: "Çocukların desteklenmesi çok önemlidir.",
    },
    {
      germanTerm: "die Unterzeichnung",
      turkishTranslations: ["imzalama"],
      meaning: "The signing.",
      exampleSentenceGerman: "Die Unterzeichnung des Vertrags war gestern.",
      exampleSentenceTurkish: "Sözleşmenin imzalanması dün gerçekleşti.",
    },
    {
      germanTerm: "verhindern",
      turkishTranslations: ["önlemek", "engellemek"],
      meaning: "To prevent or stop.",
      exampleSentenceGerman: "Wir müssen den Unfall verhindern.",
      exampleSentenceTurkish: "Kazayı önlemeliyiz.",
    },
    {
      germanTerm: "die unaufhaltsamen",
      turkishTranslations: ["durdurulamaz olanlar"],
      meaning: "The unstoppable (things or events).",
      exampleSentenceGerman:
        "Die unaufhaltsamen Veränderungen machen vielen Angst.",
      exampleSentenceTurkish:
        "Durdurulamaz değişiklikler birçok kişiyi korkutuyor.",
    },
    {
      germanTerm: "erzielen",
      turkishTranslations: ["elde etmek", "(sonuç) almak"],
      meaning: "To achieve or obtain.",
      exampleSentenceGerman: "Die Mannschaft erzielte ein gutes Ergebnis.",
      exampleSentenceTurkish: "Takım iyi bir sonuç elde etti.",
    },
    {
      germanTerm: "hinsichtlich",
      turkishTranslations: ["… açısından", "… ile ilgili olarak"],
      meaning: "With regard to or concerning.",
      exampleSentenceGerman:
        "Hinsichtlich der Kosten müssen wir vorsichtig sein.",
      exampleSentenceTurkish: "Maliyetler açısından dikkatli olmalıyız.",
    },
    {
      germanTerm: "befürchtet",
      turkishTranslations: ["korkulan", "endişe edilen"],
      meaning: "Feared or anticipated (with concern).",
      exampleSentenceGerman: "Die befürchteten Probleme sind eingetreten.",
      exampleSentenceTurkish: "Endişe edilen sorunlar gerçekleşti.",
    },
    {
      germanTerm: "Debatte",
      turkishTranslations: ["tartışma", "müzakere"],
      meaning: "Debate or discussion.",
      exampleSentenceGerman: "Die Debatte im Parlament war sehr lebhaft.",
      exampleSentenceTurkish: "Parlamentodaki tartışma çok canlıydı.",
    },
    {
      germanTerm: "im Klaren (sein)",
      turkishTranslations: ["farkında olmak", "bilincinde olmak"],
      meaning: "To be aware or clear about something.",
      exampleSentenceGerman: "Ich bin mir über die Risiken im Klaren.",
      exampleSentenceTurkish: "Risklerin farkındayım.",
    },
    {
      germanTerm: "langfristigen",
      turkishTranslations: ["uzun vadeli"],
      meaning: "Long-term (inflected form).",
      exampleSentenceGerman: "Wir brauchen langfristige Lösungen.",
      exampleSentenceTurkish: "Uzun vadeli çözümlere ihtiyacımız var.",
    },
    {
      germanTerm: "sicherstellen",
      turkishTranslations: ["sağlamak", "garanti etmek"],
      meaning: "To ensure or guarantee.",
      exampleSentenceGerman: "Die Polizei stellte die Sicherheit sicher.",
      exampleSentenceTurkish: "Polis güvenliği sağladı.",
    },
    {
      germanTerm: "ausgewogene",
      turkishTranslations: ["dengeli"],
      meaning: "Balanced (inflected form).",
      exampleSentenceGerman: "Eine ausgewogene Ernährung ist wichtig.",
      exampleSentenceTurkish: "Dengeli bir beslenme önemlidir.",
    },
    {
      germanTerm: "einnehmen",
      turkishTranslations: [
        "almak (ilaç)",
        "işgal etmek",
        "gelir elde etmek",
        "tutum sergilemek",
      ],
      meaning:
        "To take (e.g., medicine), occupy, generate income, or adopt an attitude.",
      exampleSentenceGerman: "Er muss das Medikament täglich einnehmen.",
      exampleSentenceTurkish: "İlacı her gün alması gerekiyor.",
    },
    {
      germanTerm: "haften",
      turkishTranslations: ["yapışmak", "sorumlu olmak"],
      meaning: "To stick or be liable/responsible.",
      exampleSentenceGerman: "Eltern haften für ihre Kinder.",
      exampleSentenceTurkish: "Ebeveynler çocuklarından sorumludur.",
    },
    {
      germanTerm: "die Spur",
      turkishTranslations: ["iz", "işaret", "ipucu", "şerit"],
      meaning: "Trace, sign, clue, or lane.",
      exampleSentenceGerman: "Die Polizei hat eine neue Spur gefunden.",
      exampleSentenceTurkish: "Polis yeni bir ipucu buldu.",
    },
    {
      germanTerm: "beinhalten",
      turkishTranslations: ["içermek", "kapsamak"],
      meaning: "To include or contain.",
      exampleSentenceGerman: "Der Vertrag beinhaltet wichtige Regeln.",
      exampleSentenceTurkish: "Sözleşme önemli kuralları içeriyor.",
    },
    {
      germanTerm: "glänzend",
      turkishTranslations: ["parlayan", "ışıldayan", "harika", "mükemmel"],
      meaning: "Shiny, radiant; excellent, brilliant.",
      exampleSentenceGerman: "Er hat die Prüfung glänzend bestanden.",
      exampleSentenceTurkish: "Sınavı mükemmel bir şekilde geçti.",
    },
    {
      germanTerm: "verschütten",
      turkishTranslations: ["dökmek", "saçmak (kazara)"],
      meaning: "To spill or scatter (accidentally).",
      exampleSentenceGerman: "Ich habe meinen Kaffee verschüttet.",
      exampleSentenceTurkish: "Kahvemi döktüm.",
    },
    {
      germanTerm: "wedeln",
      turkishTranslations: ["sallamak (özellikle kuyruk, bayrak vb.)"],
      meaning: "To wag or wave (especially a tail, flag, etc.).",
      exampleSentenceGerman: "Der Hund wedelt mit dem Schwanz.",
      exampleSentenceTurkish: "Köpek kuyruğunu sallıyor.",
    },
    {
      germanTerm: "der Schwanz",
      turkishTranslations: ["kuyruk"],
      meaning: "Tail.",
      exampleSentenceGerman: "Die Katze hat einen langen Schwanz.",
      exampleSentenceTurkish: "Kedi uzun bir kuyruğa sahip.",
    },
    {
      germanTerm: "falten",
      turkishTranslations: ["katlamak", "buruşturmak"],
      meaning: "To fold or crumple.",
      exampleSentenceGerman: "Sie faltet das Papier in der Mitte.",
      exampleSentenceTurkish: "Kağıdı ortadan katlıyor.",
    },
    {
      germanTerm: "trocknen / abtrocknen / austrocknen",
      turkishTranslations: ["kurutmak", "kurulamak", "tamamen kurutmak"],
      meaning: "To dry, wipe dry, or dry out completely.",
      exampleSentenceGerman: "Die Sonne trocknet die Wäsche.",
      exampleSentenceTurkish: "Güneş çamaşırları kurutuyor.",
    },
    {
      germanTerm: "der Trockner / Wäschetrockner",
      turkishTranslations: ["kurutucu (çamaşır makinesi)"],
      meaning: "Dryer or clothes dryer.",
      exampleSentenceGerman: "Unser Trockner ist kaputt.",
      exampleSentenceTurkish: "Kurutucumuz bozuldu.",
    },
    {
      germanTerm: "fügen",
      turkishTranslations: ["eklemek", "birleştirmek", "boyun eğmek"],
      meaning: "To add, join, or submit.",
      exampleSentenceGerman: "Er fügte hinzu, dass er morgen kommt.",
      exampleSentenceTurkish: "Yarın geleceğini ekledi.",
    },
    {
      germanTerm: "niedrig",
      turkishTranslations: ["alçak", "düşük"],
      meaning: "Low or short.",
      exampleSentenceGerman: "Die Preise sind dieses Jahr sehr niedrig.",
      exampleSentenceTurkish: "Bu yıl fiyatlar çok düşük.",
    },
    {
      germanTerm: "der Superheld",
      turkishTranslations: ["süper kahraman"],
      meaning: "Superhero.",
      exampleSentenceGerman: "Superman ist ein bekannter Superheld.",
      exampleSentenceTurkish: "Superman ünlü bir süper kahraman.",
    },
    {
      germanTerm: "der Außenseiter",
      turkishTranslations: ["dışlanmış", "marjinal", "sürpriz aday"],
      meaning: "Outsider, marginal, or dark horse candidate.",
      exampleSentenceGerman:
        "In der Schule fühlte er sich wie ein Außenseiter.",
      exampleSentenceTurkish: "Okulda kendini dışlanmış gibi hissetti.",
    },
    {
      germanTerm: "der Durchgang",
      turkishTranslations: ["geçit", "geçiş", "aşama"],
      meaning: "Passage, transit, or phase.",
      exampleSentenceGerman: "Der Durchgang zum Garten ist geschlossen.",
      exampleSentenceTurkish: "Bahçeye geçiş kapalı.",
    },
    {
      germanTerm: "einen Schritt machen/tun",
      turkishTranslations: ["adım atmak"],
      meaning: "To take a step.",
      exampleSentenceGerman: "Er machte einen Schritt nach vorne.",
      exampleSentenceTurkish: "İleri bir adım attı.",
    },
    {
      germanTerm: "die Glühbirne",
      turkishTranslations: ["ampul"],
      meaning: "Light bulb.",
      exampleSentenceGerman: "Die Glühbirne ist durchgebrannt.",
      exampleSentenceTurkish: "Ampul patladı.",
    },
    {
      germanTerm: "rühren",
      turkishTranslations: ["karıştırmak", "duygulandırmak", "kımıldamak"],
      meaning: "To stir, move emotionally, or move slightly.",
      exampleSentenceGerman: "Sie rührt die Suppe mit einem Löffel.",
      exampleSentenceTurkish: "Çorbayı kaşıkla karıştırıyor.",
    },
    {
      germanTerm: "möglicherweise",
      turkishTranslations: ["muhtemelen", "belki"],
      meaning: "Possibly or perhaps.",
      exampleSentenceGerman: "Er kommt möglicherweise später.",
      exampleSentenceTurkish: "Muhtemelen daha sonra gelecek.",
    },
    {
      germanTerm: "Genom-Editierung",
      turkishTranslations: ["genom düzenleme"],
      meaning: "Genome editing.",
      exampleSentenceGerman: "CRISPR ist eine Methode der Genom-Editierung.",
      exampleSentenceTurkish: "CRISPR, gen düzenlemenin bir yöntemidir.",
    },
    {
      germanTerm: "Regulierung",
      turkishTranslations: ["düzenleme", "kontrol"],
      meaning: "Regulation or control.",
      exampleSentenceGerman: "Die Regulierung des Verkehrs ist wichtig.",
      exampleSentenceTurkish: "Trafiğin düzenlenmesi önemlidir.",
    },
    {
      germanTerm: "modifizieren",
      turkishTranslations: ["değiştirmek", "uyarlamak"],
      meaning: "To modify or adapt.",
      exampleSentenceGerman:
        "Forscher modifizieren Bakterien für die Forschung.",
      exampleSentenceTurkish:
        "Araştırmacılar araştırma için bakterileri değiştiriyor.",
    },
    {
      germanTerm: "Anwendung",
      turkishTranslations: ["uygulama", "kullanım"],
      meaning: "Application or use.",
      exampleSentenceGerman: "Die Anwendung dieser Methode ist einfach.",
      exampleSentenceTurkish: "Bu yöntemin uygulanması kolaydır.",
    },
    {
      germanTerm: "Bedenken",
      turkishTranslations: ["endişe", "kuşku", "çekince"],
      meaning: "Concern, doubt, or reservation.",
      exampleSentenceGerman: "Ich habe Bedenken, dass das Projekt scheitert.",
      exampleSentenceTurkish: "Projenin başarısız olacağından endişeliyim.",
    },
    {
      germanTerm: "auseinandersetzen",
      turkishTranslations: ["uğraşmak", "tartışmak", "ele almak"],
      meaning: "To deal with, discuss, or address.",
      exampleSentenceGerman:
        "Wir müssen uns mit diesem Thema auseinandersetzen.",
      exampleSentenceTurkish: "Bu konuyla ilgilenmemiz gerekiyor.",
    },
    {
      germanTerm: "angegangen",
      turkishTranslations: ["ele almak", "ilgilenmek", "saldırmak"],
      meaning: "To address, deal with, or tackle.",
      exampleSentenceGerman: "Das Problem muss sofort angegangen werden.",
      exampleSentenceTurkish: "Problem hemen ele alınmalı.",
    },
    {
      germanTerm: "erblich",
      turkishTranslations: ["kalıtsal", "irsi"],
      meaning: "Hereditary or inherited.",
      exampleSentenceGerman: "Die Krankheit ist erblich.",
      exampleSentenceTurkish: "Hastalık kalıtsaldır.",
    },
    {
      germanTerm: "in Bezug auf",
      turkishTranslations: ["… ile ilgili olarak", "… bakımından"],
      meaning: "With regard to or in terms of.",
      exampleSentenceGerman:
        "In Bezug auf deine Frage habe ich keine Informationen.",
      exampleSentenceTurkish: "Sorunla ilgili elimde bilgi yok.",
    },
    {
      germanTerm: "Merkmale",
      turkishTranslations: ["özellikler", "nitelikler"],
      meaning: "Characteristics or features.",
      exampleSentenceGerman: "Die Merkmale dieser Pflanze sind groß.",
      exampleSentenceTurkish: "Bu bitkinin özellikleri büyüktür.",
    },
    {
      germanTerm: "Spaltung",
      turkishTranslations: ["bölünme", "ayrılma", "parçalanma"],
      meaning: "Division, separation, or split.",
      exampleSentenceGerman: "Die politische Spaltung des Landes ist groß.",
      exampleSentenceTurkish: "Ülkenin siyasi bölünmesi büyük.",
    },
    {
      germanTerm: "privilegierte",
      turkishTranslations: ["ayrıcalıklı", "imtiyazlı"],
      meaning: "Privileged or advantaged.",
      exampleSentenceGerman:
        "Kinder aus privilegierten Familien haben Vorteile.",
      exampleSentenceTurkish:
        "Ayrıcalıklı ailelerin çocuklarının avantajları vardır.",
    },
    {
      germanTerm: "Kluft",
      turkishTranslations: ["uçurum", "derin ayrılık"],
      meaning: "Gap or deep divide.",
      exampleSentenceGerman: "Die Kluft zwischen Arm und Reich wächst.",
      exampleSentenceTurkish: "Zengin ve fakir arasındaki uçurum büyüyor.",
    },
    {
      germanTerm: "entsprechende Steuerung",
      turkishTranslations: ["uygun kontrol", "yönlendirme"],
      meaning: "Appropriate control or guidance.",
      exampleSentenceGerman:
        "Die Maschine benötigt eine entsprechende Steuerung.",
      exampleSentenceTurkish: "Makine uygun bir kontrol sistemi gerektiriyor.",
    },
    {
      germanTerm: "strikte",
      turkishTranslations: ["katı", "sıkı", "kesin"],
      meaning: "Strict or rigorous.",
      exampleSentenceGerman: "Die Schule hat strikte Regeln.",
      exampleSentenceTurkish: "Okulun katı kuralları vardır.",
    },
    {
      germanTerm: "Haftung",
      turkishTranslations: ["sorumluluk", "yükümlülük"],
      meaning: "Liability or responsibility.",
      exampleSentenceGerman: "Die Firma übernimmt keine Haftung für Schäden.",
      exampleSentenceTurkish: "Şirket zararlardan sorumluluk kabul etmez.",
    },
    {
      germanTerm: "schief",
      turkishTranslations: ["eğri", "ters", "yanlış"],
      meaning: "Crooked, askew, or wrong.",
      exampleSentenceGerman: "Das Bild hängt schief an der Wand.",
      exampleSentenceTurkish: "Resim duvarda yamuk asılı.",
    },
    {
      germanTerm: "Forscher",
      turkishTranslations: ["araştırmacı", "bilim insanı"],
      meaning: "Researcher or scientist.",
      exampleSentenceGerman: "Die Forscher arbeiten an einem neuen Medikament.",
      exampleSentenceTurkish:
        "Araştırmacılar yeni bir ilaç üzerinde çalışıyor.",
    },
    {
      germanTerm: "Zellen",
      turkishTranslations: ["hücreler"],
      meaning: "Cells.",
      exampleSentenceGerman: "Die Zellen des Körpers erneuern sich ständig.",
      exampleSentenceTurkish: "Vücudun hücreleri sürekli yenilenir.",
    },
    {
      germanTerm: "entgegenzuwirken",
      turkishTranslations: ["karşı koymak", "önlem almak"],
      meaning: "To counteract or take measures against.",
      exampleSentenceGerman:
        "Maßnahmen wurden ergriffen, um der Inflation entgegenzuwirken.",
      exampleSentenceTurkish: "Enflasyona karşı önlemler alındı.",
    },
    {
      germanTerm: "einher",
      turkishTranslations: ["beraberinde", "eşlik ederek"],
      meaning: "Accompanied by or associated with.",
      exampleSentenceGerman: "Die Krankheit geht oft mit Fieber einher.",
      exampleSentenceTurkish: "Hastalık genellikle ateşle birlikte görülür.",
    },
    {
      germanTerm: "zu züchten oder zu schlachten",
      turkishTranslations: ["yetiştirmek veya kesmek"],
      meaning: "To breed or to slaughter.",
      exampleSentenceGerman:
        "Man muss entscheiden, ob man die Tiere züchtet oder schlachtet.",
      exampleSentenceTurkish:
        "Hayvanları yetiştirip kesmeye karar vermek gerekir.",
    },
    {
      germanTerm: "imitieren",
      turkishTranslations: ["taklit etmek", "kopyalamak"],
      meaning: "To imitate or copy.",
      exampleSentenceGerman: "Die Kinder imitieren ihre Eltern.",
      exampleSentenceTurkish: "Çocuklar ebeveynlerini taklit ediyor.",
    },
    {
      germanTerm: "befassen",
      turkishTranslations: ["uğraşmak", "ilgilenmek"],
      meaning: "To deal with or engage in.",
      exampleSentenceGerman: "Wir befassen uns mit den neuen Methoden.",
      exampleSentenceTurkish: "Yeni yöntemlerle ilgileniyoruz.",
    },
    {
      germanTerm: "Texturprobleme",
      turkishTranslations: ["doku sorunları", "yapı problemleri"],
      meaning: "Texture problems or structural issues.",
      exampleSentenceGerman:
        "In der Lebensmittelproduktion können Texturprobleme auftreten.",
      exampleSentenceTurkish:
        "Gıda üretiminde doku sorunları ortaya çıkabilir.",
    },
    {
      germanTerm: "Veganismus",
      turkishTranslations: ["veganlık"],
      meaning: "Veganism, a lifestyle avoiding animal-derived products.",
      exampleSentenceGerman:
        "Immer mehr Menschen entscheiden sich für den Veganismus, um die Umwelt zu schützen.",
      exampleSentenceTurkish:
        "Giderek daha fazla insan, çevreyi korumak için veganlığı tercih ediyor.",
    },
    {
      germanTerm: "vorübergehend",
      turkishTranslations: ["geçici"],
      meaning: "Temporary or provisional.",
      exampleSentenceGerman: "Das Geschäft ist vorübergehend geschlossen.",
      exampleSentenceTurkish: "Mağaza geçici olarak kapalı.",
    },
    {
      germanTerm: "bezeichnet",
      turkishTranslations: ["adlandırır", "tanımlar"],
      meaning: "Denotes or designates.",
      exampleSentenceGerman: "Dieses Symbol bezeichnet den Eingang.",
      exampleSentenceTurkish: "Bu sembol giriş kapısını belirtir.",
    },
    {
      germanTerm: "Speiseplan",
      turkishTranslations: ["yemek listesi", "menü"],
      meaning: "Menu or meal plan.",
      exampleSentenceGerman:
        "Der Speiseplan der Kantine hängt am Schwarzen Brett.",
      exampleSentenceTurkish: "Kantinin yemek listesi duyuru panosuna asılı.",
    },
    {
      germanTerm: "Samen",
      turkishTranslations: ["tohum", "meni"],
      meaning: "Seed or semen.",
      exampleSentenceGerman: "Der Bauer sät die Samen auf das Feld.",
      exampleSentenceTurkish: "Çiftçi tarlaya tohum ekiyor.",
    },
    {
      germanTerm: "zurückgegriffen",
      turkishTranslations: ["başvuruldu", "dayanıldı"],
      meaning: "Resorted to or relied upon.",
      exampleSentenceGerman:
        "In der Krise wurde auf alte Strategien zurückgegriffen.",
      exampleSentenceTurkish: "Krizde eski stratejilere başvuruldu.",
    },
    {
      germanTerm: "Viele Prominente",
      turkishTranslations: ["birçok ünlü"],
      meaning: "Many celebrities.",
      exampleSentenceGerman:
        "Viele Prominente engagieren sich für den Umweltschutz.",
      exampleSentenceTurkish: "Birçok ünlü çevre koruma için çaba gösteriyor.",
    },
    {
      germanTerm: "Tierrechte und Tierwohl",
      turkishTranslations: ["hayvan hakları ve hayvan refahı"],
      meaning: "Animal rights and animal welfare.",
      exampleSentenceGerman:
        "Viele Organisationen kämpfen für die Tierrechte und fordern ein Verbot von Tierversuchen.",
      exampleSentenceTurkish:
        "Birçok örgüt hayvan hakları için mücadele ediyor ve hayvan deneylerinin yasaklanmasını talep ediyor.",
    },
    {
      germanTerm: "Massentierhaltung",
      turkishTranslations: ["endüstriyel hayvancılık"],
      meaning: "Factory farming or industrial livestock production.",
      exampleSentenceGerman:
        "Massentierhaltung steht oft in der Kritik, weil die Tiere unter schlechten Bedingungen leben.",
      exampleSentenceTurkish:
        "Endüstriyel hayvancılık, hayvanların kötü koşullarda yaşaması nedeniyle sık sık eleştiriliyor.",
    },
    {
      germanTerm: "Rodung",
      turkishTranslations: ["orman açma", "ağaç kesme"],
      meaning: "Deforestation or clearing of trees.",
      exampleSentenceGerman:
        "Die Rodung des Regenwaldes hat dramatische Folgen für das Klima.",
      exampleSentenceTurkish:
        "Yağmur ormanlarının kesilmesi iklim için dramatik sonuçlar doğuruyor.",
    },
    {
      germanTerm: "Futtermittel",
      turkishTranslations: ["hayvan yemi"],
      meaning: "Animal feed.",
      exampleSentenceGerman:
        "Die Kühe werden mit hochwertigen Futtermitteln gefüttert.",
      exampleSentenceTurkish: "İnekler kaliteli yemlerle besleniyor.",
    },
    {
      germanTerm: "belegen",
      turkishTranslations: [
        "kanıtlamak",
        "belgelemek",
        "yer ayırtmak",
        "kaplamak",
      ],
      meaning: "To prove, document, reserve, or cover.",
      exampleSentenceGerman:
        "Die Studie belegt die Wirksamkeit des Medikaments.",
      exampleSentenceTurkish: "Çalışma, ilacın etkili olduğunu kanıtlıyor.",
    },
    {
      germanTerm: "unerlässlich",
      turkishTranslations: ["vazgeçilmez", "mutlaka gerekli"],
      meaning: "Indispensable or essential.",
      exampleSentenceGerman:
        "Gute Sprachkenntnisse sind für diesen Beruf unerlässlich.",
      exampleSentenceTurkish: "Bu meslek için iyi dil bilgisi vazgeçilmezdir.",
    },
    {
      germanTerm: "naheliegend",
      turkishTranslations: ["akla yatkın", "mantıklı"],
      meaning: "Obvious or logical.",
      exampleSentenceGerman: "Die Erklärung ist naheliegend.",
      exampleSentenceTurkish: "Açıklama çok mantıklı / bariz.",
    },
    {
      germanTerm: "Skeptiker",
      turkishTranslations: ["şüpheci"],
      meaning: "Skeptic.",
      exampleSentenceGerman:
        "Viele Skeptiker zweifeln an der Wirksamkeit dieser Methode.",
      exampleSentenceTurkish:
        "Birçok şüpheci bu yöntemin etkili olduğundan kuşku duyuyor.",
    },
    {
      germanTerm: "ausgewogene",
      turkishTranslations: ["dengeli"],
      meaning: "Balanced (inflected form).",
      exampleSentenceGerman:
        "Eine ausgewogene Ernährung ist wichtig für die Gesundheit.",
      exampleSentenceTurkish: "Dengeli beslenme sağlık için önemlidir.",
    },
    {
      germanTerm: "Verzicht",
      turkishTranslations: ["vazgeçme", "feragat"],
      meaning: "Renunciation or abstinence.",
      exampleSentenceGerman:
        "Der Verzicht auf Zucker fällt vielen Menschen schwer.",
      exampleSentenceTurkish: "Şekerden vazgeçmek birçok insan için zordur.",
    },
    {
      germanTerm: "holst",
      turkishTranslations: ["alıp getirmek"],
      meaning: "To fetch or pick up (2nd person singular of holen).",
      exampleSentenceGerman: "Du holst die Kinder von der Schule ab.",
      exampleSentenceTurkish: "Sen çocukları okuldan alıyorsun.",
    },
    {
      germanTerm: "Frühkindliche Förderung",
      turkishTranslations: ["erken çocukluk eğitimi"],
      meaning: "Early childhood education.",
      exampleSentenceGerman:
        "Viele Studien zeigen, dass frühkindliche Förderung die kognitive Entwicklung unterstützt.",
      exampleSentenceTurkish:
        "Birçok araştırma, erken çocukluk eğitiminin bilişsel gelişimi desteklediğini gösteriyor.",
    },
    {
      germanTerm: "ausschöpfen",
      turkishTranslations: [
        "tam olarak kullanmak",
        "sonuna kadar değerlendirmek",
      ],
      meaning: "To fully utilize or exploit.",
      exampleSentenceGerman:
        "Wir sollten alle Möglichkeiten ausschöpfen, um das Projekt erfolgreich zu machen.",
      exampleSentenceTurkish:
        "Projeyi başarılı kılmak için tüm olanaklardan faydalanmalıyız.",
    },
    {
      germanTerm: "Studien",
      turkishTranslations: ["çalışmalar", "araştırmalar"],
      meaning: "Studies or research.",
      exampleSentenceGerman:
        "Viele Studien zeigen, dass Bewegung die Gesundheit fördert.",
      exampleSentenceTurkish:
        "Birçok araştırma, hareketin sağlığı desteklediğini gösteriyor.",
    },
    {
      germanTerm: "abgestimmt",
      turkishTranslations: ["uyumlu", "koordine edilmiş"],
      meaning: "Coordinated or harmonized.",
      exampleSentenceGerman: "Die Maßnahmen sind aufeinander abgestimmt.",
      exampleSentenceTurkish: "Önlemler birbiriyle uyumlu / koordine edilmiş.",
    },
    {
      germanTerm: "entfalten",
      turkishTranslations: ["geliştirmek", "ortaya çıkarmak"],
      meaning: "To develop or unfold.",
      exampleSentenceGerman:
        "Die Kinder können ihre Talente in diesem Kurs entfalten.",
      exampleSentenceTurkish:
        "Çocuklar bu kursta yeteneklerini geliştirebilir / ortaya çıkarabilir.",
    },
    {
      germanTerm: "berücksichtigt",
      turkishTranslations: ["dikkate alınmış", "göz önünde bulundurulmuş"],
      meaning: "Taken into account or considered.",
      exampleSentenceGerman:
        "Bei der Planung wurden alle Wünsche der Teilnehmer berücksichtigt.",
      exampleSentenceTurkish:
        "Planlama sırasında tüm katılımcıların istekleri dikkate alındı.",
    },
    {
      germanTerm: "umfassend",
      turkishTranslations: ["kapsamlı"],
      meaning: "Comprehensive or extensive.",
      exampleSentenceGerman: "Die Studie liefert eine umfassende Analyse.",
      exampleSentenceTurkish: "Çalışma kapsamlı bir analiz sunuyor.",
    },
    {
      germanTerm: "Dimensionen",
      turkishTranslations: ["boyutlar"],
      meaning: "Dimensions or aspects.",
      exampleSentenceGerman: "Die Dimensionen des Problems sind vielfältig.",
      exampleSentenceTurkish: "Problemin boyutları çeşitlidir.",
    },
    {
      germanTerm: "das Wachstum",
      turkishTranslations: ["büyüme"],
      meaning: "Growth.",
      exampleSentenceGerman:
        "Das Wirtschaftswachstum ist in diesem Jahr gestiegen.",
      exampleSentenceTurkish: "Bu yıl ekonomik büyüme arttı.",
    },
    {
      germanTerm: "Weltbevölkerung",
      turkishTranslations: ["dünya nüfusu"],
      meaning: "World population.",
      exampleSentenceGerman: "Die Weltbevölkerung wächst stetig.",
      exampleSentenceTurkish: "Dünya nüfusu sürekli artıyor.",
    },
    {
      germanTerm: "wiederum",
      turkishTranslations: ["buna karşılık", "öte yandan"],
      meaning: "In turn or on the other hand.",
      exampleSentenceGerman:
        "Die einen sind zufrieden, die anderen wiederum nicht.",
      exampleSentenceTurkish: "Bazıları memnun, öte yandan bazıları değil.",
    },
    {
      germanTerm: "verbundene",
      turkishTranslations: ["bağlantılı", "ilişkili"],
      meaning: "Connected or related.",
      exampleSentenceGerman: "Die Risiken sind eng miteinander verbunden.",
      exampleSentenceTurkish: "Riskler birbirine sıkı sıkıya bağlıdır.",
    },
    {
      germanTerm: "ergeben",
      turkishTranslations: ["ortaya çıkarmak", "sonuç vermek"],
      meaning: "To yield or result in.",
      exampleSentenceGerman: "Die Untersuchung ergab interessante Ergebnisse.",
      exampleSentenceTurkish: "Araştırma ilginç sonuçlar ortaya çıkardı.",
    },
    {
      germanTerm: "Fällen",
      turkishTranslations: ["durumlar", "vakalar"],
      meaning: "Cases or instances.",
      exampleSentenceGerman: "In vielen Fällen ist schnelle Hilfe notwendig.",
      exampleSentenceTurkish: "Birçok durumda hızlı yardım gereklidir.",
    },
    {
      germanTerm: "Verlust",
      turkishTranslations: ["kayıp"],
      meaning: "Loss.",
      exampleSentenceGerman:
        "Der Verlust von Daten kann schwerwiegende Folgen haben.",
      exampleSentenceTurkish: "Veri kaybının ciddi sonuçları olabilir.",
    },
    {
      germanTerm: "ergreifen",
      turkishTranslations: ["ele almak", "kavramak", "başlamak"],
      meaning: "To take up, grasp, or initiate.",
      exampleSentenceGerman: "Die Regierung muss Maßnahmen ergreifen.",
      exampleSentenceTurkish: "Hükümet önlemler almak zorunda.",
    },
    {
      germanTerm: "in Betracht",
      turkishTranslations: ["dikkate almak"],
      meaning: "To take into consideration.",
      exampleSentenceGerman: "Wir müssen alle Optionen in Betracht ziehen.",
      exampleSentenceTurkish: "Tüm seçenekleri dikkate almalıyız.",
    },
    {
      germanTerm: "bewirken",
      turkishTranslations: ["sebep olmak", "yol açmak"],
      meaning: "To cause or bring about.",
      exampleSentenceGerman: "Die neue Regelung bewirkt Veränderungen.",
      exampleSentenceTurkish: "Yeni düzenleme değişikliklere yol açıyor.",
    },
    {
      germanTerm: "bewahren",
      turkishTranslations: ["korumak", "saklamak"],
      meaning: "To preserve or protect.",
      exampleSentenceGerman: "Wir müssen die Natur bewahren.",
      exampleSentenceTurkish: "Doğayı korumalıyız.",
    },
    {
      germanTerm: "Horizont",
      turkishTranslations: ["ufuk", "görüş alanı"],
      meaning: "Horizon or perspective.",
      exampleSentenceGerman: "Reisen erweitert den Horizont.",
      exampleSentenceTurkish: "Seyahat, ufku genişletir.",
    },
    {
      germanTerm: "erweitern",
      turkishTranslations: ["genişletmek", "artırmak"],
      meaning: "To expand or broaden.",
      exampleSentenceGerman: "Wir sollten unser Wissen erweitern.",
      exampleSentenceTurkish: "Bilgimizi genişletmeliyiz.",
    },
    {
      germanTerm: "Sichtweisen",
      turkishTranslations: ["bakış açıları"],
      meaning: "Perspectives or viewpoints.",
      exampleSentenceGerman:
        "Verschiedene Sichtweisen bereichern die Diskussion.",
      exampleSentenceTurkish: "Farklı bakış açıları tartışmayı zenginleştirir.",
    },
    {
      germanTerm: "unschätzbarem",
      turkishTranslations: ["paha biçilmez"],
      meaning: "Invaluable or priceless (inflected form).",
      exampleSentenceGerman: "Seine Erfahrung ist von unschätzbarem Wert.",
      exampleSentenceTurkish: "Onun deneyimi paha biçilemez değerdedir.",
    },
    {
      germanTerm: "Unterkunft",
      turkishTranslations: ["konaklama", "barınak"],
      meaning: "Accommodation or shelter.",
      exampleSentenceGerman: "Wir haben eine schöne Unterkunft gebucht.",
      exampleSentenceTurkish: "Güzel bir konaklama rezervasyonu yaptık.",
    },
    {
      germanTerm: "Stipendien",
      turkishTranslations: ["burslar"],
      meaning: "Scholarships.",
      exampleSentenceGerman: "Viele Studenten erhalten Stipendien.",
      exampleSentenceTurkish: "Birçok öğrenci burs alıyor.",
    },
    {
      germanTerm: "erlangen",
      turkishTranslations: ["elde etmek", "kazanmak"],
      meaning: "To obtain or achieve.",
      exampleSentenceGerman: "Er hat die Zustimmung erlangt.",
      exampleSentenceTurkish: "Onayını elde etti.",
    },
    {
      germanTerm: "überragen",
      turkishTranslations: ["öne çıkmak", "üstün olmak"],
      meaning: "To stand out or surpass.",
      exampleSentenceGerman: "Seine Leistungen überragen die der anderen.",
      exampleSentenceTurkish: "Onun başarıları diğerlerinin önüne geçiyor.",
    },
    {
      germanTerm: "mehrsprachige Erziehung",
      turkishTranslations: ["çok dilli eğitim", "yetiştirme"],
      meaning: "Multilingual education or upbringing.",
      exampleSentenceGerman:
        "Mehrsprachige Erziehung fördert die kognitive Entwicklung.",
      exampleSentenceTurkish: "Çok dilli eğitim, bilişsel gelişimi destekler.",
    },
    {
      germanTerm: "befassen",
      turkishTranslations: ["ilgilenmek", "uğraşmak"],
      meaning: "To deal with or engage in.",
      exampleSentenceGerman: "Wir befassen uns mit diesem Thema.",
      exampleSentenceTurkish: "Bu konuyla ilgileniyoruz.",
    },
    {
      germanTerm: "Umfeld",
      turkishTranslations: ["çevre", "ortam", "sosyal çevre"],
      meaning: "Environment or social surroundings.",
      exampleSentenceGerman:
        "Das familiäre Umfeld ist sehr wichtig für Kinder.",
      exampleSentenceTurkish: "Aile ortamı çocuklar için çok önemlidir.",
    },
    {
      germanTerm: "profitieren",
      turkishTranslations: ["faydalanmak", "yararlanmak"],
      meaning: "To benefit or profit from.",
      exampleSentenceGerman: "Studenten profitieren von Stipendien.",
      exampleSentenceTurkish: "Öğrenciler burslardan faydalanır.",
    },
    {
      germanTerm: "Sitten",
      turkishTranslations: ["örf ve adetler", "gelenekler"],
      meaning: "Customs or traditions.",
      exampleSentenceGerman: "Alte Sitten geraten langsam in Vergessenheit.",
      exampleSentenceTurkish: "Eski örf ve adetler yavaş yavaş unutuluyor.",
    },
    {
      germanTerm: "Gebräuche",
      turkishTranslations: ["gelenekler", "adetler"],
      meaning: "Customs or traditions.",
      exampleSentenceGerman:
        "Religiöse Gebräuche sind in dieser Region wichtig.",
      exampleSentenceTurkish: "Bu bölgede dini gelenekler önemlidir.",
    },
    {
      germanTerm: "beherrschen",
      turkishTranslations: ["hâkim olmak", "ustalaşmak", "kontrol etmek"],
      meaning: "To master, be proficient in, or control.",
      exampleSentenceGerman: "Er beherrscht drei Sprachen fließend.",
      exampleSentenceTurkish: "O, üç dili akıcı bir şekilde biliyor.",
    },
    {
      germanTerm: "darstellen",
      turkishTranslations: ["göstermek", "tasvir etmek", "ifade etmek"],
      meaning: "To depict, represent, or express.",
      exampleSentenceGerman: "Das Bild stellt eine Landschaft dar.",
      exampleSentenceTurkish: "Resim bir manzarayı tasvir ediyor.",
    },
    {
      germanTerm: "bevorzugt",
      turkishTranslations: ["tercih edilen", "öncelikli", "tercihen"],
      meaning: "Preferred or prioritized.",
      exampleSentenceGerman: "Wir suchen bevorzugt erfahrene Bewerber.",
      exampleSentenceTurkish: "Tercihen deneyimli adaylar arıyoruz.",
    },
    {
      germanTerm: "berücksichtigen",
      turkishTranslations: ["dikkate almak", "göz önünde bulundurmak"],
      meaning: "To consider or take into account.",
      exampleSentenceGerman:
        "Bitte berücksichtigen Sie die Vorschläge der Kollegen.",
      exampleSentenceTurkish: "Lütfen meslektaşların önerilerini dikkate alın.",
    },
    {
      germanTerm: "sicherstellen",
      turkishTranslations: ["sağlamak", "garanti altına almak", "el koymak"],
      meaning: "To ensure, guarantee, or secure.",
      exampleSentenceGerman:
        "Wir müssen sicherstellen, dass alle informiert sind.",
      exampleSentenceTurkish:
        "Herkesin bilgilendirildiğini garanti altına almalıyız.",
    },
    {
      germanTerm: "anzuwenden",
      turkishTranslations: ["uygulamak", "kullanmak", "tatbik etmek"],
      meaning: "To apply or implement.",
      exampleSentenceGerman: "Die Theorie ist schwer anzuwenden.",
      exampleSentenceTurkish: "Teoriyi uygulamak zordur.",
    },
    {
      germanTerm: "Eine kontroverse Betrachtung",
      turkishTranslations: ["tartışmalı bir değerlendirme", "bakış"],
      meaning: "A controversial perspective or evaluation.",
      exampleSentenceGerman:
        "Der Artikel bietet eine kontroverse Betrachtung der Globalisierung.",
      exampleSentenceTurkish:
        "Makale, küreselleşmenin tartışmalı bir değerlendirmesini sunuyor.",
    },
    {
      germanTerm: "wesentliches",
      turkishTranslations: ["esas olan", "temel", "önemli nokta"],
      meaning: "Essential or fundamental (inflected form).",
      exampleSentenceGerman: "Das Wesentliche darf man nicht vergessen.",
      exampleSentenceTurkish: "Esas olanı unutmamak gerekir.",
    },
    {
      germanTerm: "Rasse",
      turkishTranslations: ["ırk", "cins (hayvanlar için)"],
      meaning: "Race or breed (for animals).",
      exampleSentenceGerman: "Der Hund gehört zu einer seltenen Rasse.",
      exampleSentenceTurkish: "Köpek nadir bir cins ırka aittir.",
    },
    {
      germanTerm: "ausschöpfen",
      turkishTranslations: [
        "sonuna kadar kullanmak",
        "tam anlamıyla yararlanmak",
      ],
      meaning: "To fully exploit or utilize.",
      exampleSentenceGerman: "Wir sollten alle Möglichkeiten ausschöpfen.",
      exampleSentenceTurkish: "Tüm imkânlardan yararlanmalıyız.",
    },
    {
      germanTerm: "Stereotypen",
      turkishTranslations: ["kalıp yargılar", "stereotipler"],
      meaning: "Stereotypes or clichés.",
      exampleSentenceGerman: "Viele Stereotypen über Kulturen sind falsch.",
      exampleSentenceTurkish:
        "Kültürlerle ilgili birçok kalıp yargı yanlıştır.",
    },
    {
      germanTerm: "überwunden",
      turkishTranslations: ["üstesinden gelmiş", "aşılmış"],
      meaning: "Overcome or surmounted.",
      exampleSentenceGerman: "Er hat seine Angst überwunden.",
      exampleSentenceTurkish: "Korkusunun üstesinden geldi.",
    },
    {
      germanTerm: "erweitern",
      turkishTranslations: ["genişletmek", "artırmak", "zenginleştirmek"],
      meaning: "To expand, increase, or enrich.",
      exampleSentenceGerman: "Der Kurs erweitert mein Wissen.",
      exampleSentenceTurkish: "Kurs bilgimi artırıyor.",
    },
    {
      germanTerm: "Es gibt jedoch auch Stimmen",
      turkishTranslations: ["ancak … diyen görüşler de vardır"],
      meaning: "However, there are also voices/opinions.",
      exampleSentenceGerman: "Es gibt jedoch auch Stimmen, die dagegen sind.",
      exampleSentenceTurkish: "Ancak buna karşı olan görüşler de vardır.",
    },
    {
      germanTerm: "konsequente",
      turkishTranslations: ["tutarlı", "kararlı", "istikrarlı"],
      meaning: "Consistent or resolute (inflected form).",
      exampleSentenceGerman:
        "Eine konsequente Umsetzung der Regeln ist wichtig.",
      exampleSentenceTurkish:
        "Kuralların tutarlı bir şekilde uygulanması önemlidir.",
    },
    {
      germanTerm: "Durchsetzung",
      turkishTranslations: ["uygulanma", "kabul ettirme", "hayata geçirme"],
      meaning: "Enforcement or implementation.",
      exampleSentenceGerman: "Die Durchsetzung neuer Regeln ist schwierig.",
      exampleSentenceTurkish: "Yeni kuralların uygulanması zordur.",
    },
    {
      germanTerm: "Umsetzung",
      turkishTranslations: ["uygulama", "hayata geçirme", "gerçekleştirme"],
      meaning: "Implementation or realization.",
      exampleSentenceGerman: "Die Umsetzung des Projekts verlief reibungslos.",
      exampleSentenceTurkish: "Projenin uygulanması sorunsuz gerçekleşti.",
    },
    {
      germanTerm: "benachteiligt",
      turkishTranslations: ["dezavantajlı", "haksızlığa uğramış"],
      meaning: "Disadvantaged or discriminated against.",
      exampleSentenceGerman:
        "Kinder aus armen Familien sind oft benachteiligt.",
      exampleSentenceTurkish:
        "Fakir ailelerden gelen çocuklar çoğu zaman dezavantajlıdır.",
    },
    {
      germanTerm: "Quotenregelungen",
      turkishTranslations: ["kontenjan düzenlemeleri", "kotalar"],
      meaning: "Quota regulations or quotas.",
      exampleSentenceGerman:
        "Quotenregelungen sollen die Gleichstellung fördern.",
      exampleSentenceTurkish:
        "Kontenjan düzenlemeleri eşitliği teşvik etmeyi amaçlıyor.",
    },
    {
      germanTerm: "Frauenanteil",
      turkishTranslations: ["kadın oranı", "kadın payı"],
      meaning: "Proportion or share of women.",
      exampleSentenceGerman:
        "Der Frauenanteil in Führungspositionen steigt langsam.",
      exampleSentenceTurkish:
        "Yönetici pozisyonlarındaki kadın oranı yavaşça artıyor.",
    },
    {
      germanTerm: "Bedenken und Anliegen",
      turkishTranslations: ["endişeler ve talepler", "çekinceler ve istekler"],
      meaning: "Concerns and requests.",
      exampleSentenceGerman: "Die Bürger äußerten ihre Bedenken und Anliegen.",
      exampleSentenceTurkish:
        "Vatandaşlar endişelerini ve taleplerini dile getirdi.",
    },
  ];

  const [step, setStep] = useState(1);
  const [currentTerms, setCurrentTerms] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [options, setOptions] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quizTerms, setQuizTerms] = useState([]);
  const [showTurkish, setShowTurkish] = useState(false);
  const [allFavorites, setAllFavorites] = useState([]);
  const [showAllFavorites, setShowAllFavorites] = useState(false);

  // LocalStorage'dan tüm verileri yükle
  useEffect(() => {
    const savedFavorites = localStorage.getItem("allFavorites");
    const savedStep = localStorage.getItem("step");
    const savedCurrentIndex = localStorage.getItem("currentIndex");
    const savedScore = localStorage.getItem("score");
    const savedCurrentQuestion = localStorage.getItem("currentQuestion");
    const savedQuizTerms = localStorage.getItem("quizTerms");

    if (savedFavorites) {
      setAllFavorites(JSON.parse(savedFavorites));
    }
    if (savedStep) {
      setStep(parseInt(savedStep));
    }
    if (savedCurrentIndex) {
      setCurrentIndex(parseInt(savedCurrentIndex));
    }
    if (savedScore) {
      setScore(parseInt(savedScore));
    }
    if (savedCurrentQuestion) {
      setCurrentQuestion(parseInt(savedCurrentQuestion));
    }
    if (savedQuizTerms) {
      setQuizTerms(JSON.parse(savedQuizTerms));
    }
  }, []);

  // Tüm state'leri LocalStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("allFavorites", JSON.stringify(allFavorites));
    localStorage.setItem("step", step.toString());
    localStorage.setItem("currentIndex", currentIndex.toString());
    localStorage.setItem("score", score.toString());
    localStorage.setItem("currentQuestion", currentQuestion.toString());
    localStorage.setItem("quizTerms", JSON.stringify(quizTerms));
  }, [step, currentIndex, score, currentQuestion, quizTerms, allFavorites]);

  const initializeQuiz = () => {
    const terms = vocabularyData.slice(currentIndex, currentIndex + 5);
    setCurrentTerms(terms);
    setQuizTerms(terms);
    setCurrentQuestion(0);
    setShowTurkish(false);
    if (terms.length > 0) {
      setOptions(generateQuizOptions(terms[0]));
    }
  };

  const initializeSentenceQuiz = () => {
    setCurrentTerms(quizTerms);
    setCurrentQuestion(0);
    setShowTurkish(false);
    setOptions(shuffleArray(quizTerms.map((term) => term.germanTerm)));
  };

  const generateQuizOptions = (correctTerm) => {
    const correctAnswer = correctTerm.turkishTranslations[0];
    const otherTerms = vocabularyData.filter(
      (term) => term.germanTerm !== correctTerm.germanTerm
    );
    const randomOptions = shuffleArray(otherTerms)
      .slice(0, 3)
      .map((term) => term.turkishTranslations[0]);
    return shuffleArray([correctAnswer, ...randomOptions]);
  };

  const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

  useEffect(() => {
    if (step === 1) {
      initializeQuiz();
    } else if (step === 2 && favorites.length > 0) {
      const terms = favorites;
      setCurrentTerms(terms);
      setCurrentQuestion(0);
      setShowTurkish(false);
      if (terms.length > 0) {
        setOptions(generateQuizOptions(terms[0]));
      }
    } else if (step === 2 && favorites.length === 0) {
      setStep(3);
    } else if (step === 3) {
      initializeSentenceQuiz();
    }
  }, [step, currentIndex]);

  const handleQuizAnswer = (selectedOption) => {
    const correctAnswer = currentTerms[currentQuestion].turkishTranslations[0];
    if (selectedOption === correctAnswer) {
      setFeedback("correct");
      setScore(score + 1);
      setTimeout(() => proceedToNextQuestion(), 800);
    } else {
      setFeedback("incorrect");
      if (
        !favorites.some(
          (fav) => fav.germanTerm === currentTerms[currentQuestion].germanTerm
        )
      ) {
        const newFavorite = currentTerms[currentQuestion];
        setFavorites([...favorites, newFavorite]);

        // Tüm favorilere ekle
        if (
          !allFavorites.some((fav) => fav.germanTerm === newFavorite.germanTerm)
        ) {
          const updatedAllFavorites = [...allFavorites, newFavorite];
          setAllFavorites(updatedAllFavorites);
        }
      }
      setTimeout(() => proceedToNextQuestion(), 800);
    }
  };

  const handleSentenceAnswer = (selectedTerm) => {
    const correctTerm = currentTerms[currentQuestion].germanTerm;
    if (selectedTerm === correctTerm) {
      setFeedback("correct");
      setScore(score + 1);
      setTimeout(() => proceedToNextQuestion(), 800);
    } else {
      setFeedback("incorrect");
      setTimeout(() => setFeedback(null), 800);
    }
  };

  const proceedToNextQuestion = () => {
    if (currentQuestion < currentTerms.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowTurkish(false);
      if (step === 1 || step === 2) {
        setOptions(generateQuizOptions(currentTerms[currentQuestion + 1]));
      } else if (step === 3) {
        setOptions(shuffleArray(currentTerms.map((term) => term.germanTerm)));
      }
      setFeedback(null);
    } else {
      if (step === 1) {
        if (favorites.length > 0) {
          setStep(2);
        } else {
          setStep(3);
        }
      } else if (step === 2) {
        setStep(3);
      } else if (step === 3) {
        if (currentIndex + 5 < vocabularyData.length) {
          setCurrentIndex(currentIndex + 5);
          setStep(1);
          setFavorites([]);
        } else {
          setStep(4);
        }
      }
      setFeedback(null);
    }
  };

  const resetTest = () => {
    setStep(1);
    setCurrentTerms([]);
    setCurrentQuestion(0);
    setFavorites([]);
    setOptions([]);
    setFeedback(null);
    setScore(0);
    setCurrentIndex(0);
    setQuizTerms([]);
    setShowTurkish(false);
    setShowAllFavorites(false);

    // LocalStorage'ı da temizle
    localStorage.removeItem("allFavorites");
    localStorage.removeItem("step");
    localStorage.removeItem("currentIndex");
    localStorage.removeItem("score");
    localStorage.removeItem("currentQuestion");
    localStorage.removeItem("quizTerms");
  };

  const createBlankSentence = (sentence, term) => {
    const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escapedTerm, "gi");
    return sentence.replace(regex, "________");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-sm font-semibold text-gray-600">
            {step === 1 && "Almanca-Türkçe Kelime Testi"}
            {step === 2 && "Favoriler Testi"}
            {step === 3 && "Cümle Tamamlama Testi"}
            {step === 4 && "Test Tamamlandı"}
          </h2>
          <div className="text-sm font-medium text-blue-600">
            Skor: <span className="font-bold">{score}</span>
          </div>
        </div>

        {/* Tüm Favorileri Göster Butonu */}
        <div className="mb-4 text-center">
          <button
            onClick={() => setShowAllFavorites(!showAllFavorites)}
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-3 rounded text-sm transition-colors"
          >
            {showAllFavorites
              ? "Tüm Yanlışlarımı Gizle"
              : "Tüm Yanlışlarımı Göster"}
          </button>
        </div>

        {/* Tüm Favoriler Modal */}
        {showAllFavorites && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md max-h-96 overflow-y-auto">
              <h3 className="text-lg font-bold mb-4 text-center text-red-600">
                Tüm Yanlış Cevaplanan Kelimeler
              </h3>
              {allFavorites.length > 0 ? (
                <div className="space-y-3">
                  {allFavorites.map((term, index) => (
                    <div key={index} className="border-b pb-3">
                      <p className="font-semibold text-gray-800">
                        {term.germanTerm}
                      </p>
                      <p className="text-sm text-gray-600">
                        {term.turkishTranslations.join(", ")}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {term.meaning}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center">
                  Henüz yanlış cevaplanan kelime yok.
                </p>
              )}
              <div className="mt-4 text-center">
                <button
                  onClick={() => setShowAllFavorites(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded transition-colors"
                >
                  Kapat
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="text-center py-8">
            <h2 className="text-xl font-bold text-green-600 mb-4">
              Tebrikler! Testi Tamamladınız
            </h2>
            <p className="text-gray-600 mb-4">
              Toplam Skor: <span className="font-bold">{score}</span>
            </p>
            <button
              onClick={resetTest}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              Testi Yeniden Başlat
            </button>
          </div>
        )}

        {step !== 4 && currentTerms.length > 0 && (
          <>
            {step === 1 && (
              <div>
                <h1 className="text-xl font-bold mb-4 text-center text-gray-800">
                  Almanca-Türkçe Kelime Testi
                </h1>
                <div className="mb-2 text-sm text-gray-500">
                  Soru {currentQuestion + 1}/{currentTerms.length} (Grup:{" "}
                  {Math.floor(currentIndex / 5) + 1})
                </div>
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <p className="text-lg font-medium text-center text-gray-800">
                    "
                    <strong className="text-blue-600">
                      {currentTerms[currentQuestion].germanTerm}
                    </strong>
                    " kelimesinin Türkçe karşılığı nedir?
                  </p>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h1 className="text-xl font-bold mb-4 text-center text-gray-800">
                  Favorilerden Test
                </h1>
                <div className="mb-2 text-sm text-gray-500">
                  Soru {currentQuestion + 1}/{currentTerms.length}
                </div>
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <p className="text-lg font-medium text-center text-gray-800">
                    "
                    <strong className="text-blue-600">
                      {currentTerms[currentQuestion].germanTerm}
                    </strong>
                    " kelimesinin Türkçe karşılığı nedir?
                  </p>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h1 className="text-xl font-bold mb-4 text-center text-gray-800">
                  Cümle Tamamlama Testi
                </h1>
                <div className="mb-2 text-sm text-gray-500">
                  Soru {currentQuestion + 1}/{currentTerms.length} (Grup:{" "}
                  {Math.floor(currentIndex / 5) + 1})
                </div>
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <p className="text-lg font-medium text-center text-gray-800 whitespace-pre-wrap">
                    {createBlankSentence(
                      currentTerms[currentQuestion].exampleSentenceGerman,
                      currentTerms[currentQuestion].germanTerm
                    )}
                  </p>
                  {showTurkish && (
                    <p className="text-sm text-gray-600 mt-2 text-center whitespace-pre-wrap">
                      {currentTerms[currentQuestion].exampleSentenceTurkish}
                    </p>
                  )}
                  <button
                    onClick={() => setShowTurkish(!showTurkish)}
                    className="mt-2 text-sm text-blue-600 hover:text-blue-800"
                  >
                    {showTurkish
                      ? "Türkçe çeviriyi gizle"
                      : "Türkçe çeviriyi göster"}
                  </button>
                </div>
              </div>
            )}

            <div className="space-y-2 mb-4">
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() =>
                    step === 3
                      ? handleSentenceAnswer(option)
                      : handleQuizAnswer(option)
                  }
                  className={`w-full p-3 rounded text-left border ${
                    feedback === "correct" &&
                    ((step === 3 &&
                      option === currentTerms[currentQuestion].germanTerm) ||
                      (step !== 3 &&
                        option ===
                          currentTerms[currentQuestion].turkishTranslations[0]))
                      ? "border-green-500 bg-green-50 text-green-700"
                      : feedback === "incorrect" &&
                        ((step === 3 &&
                          option ===
                            currentTerms[currentQuestion].germanTerm) ||
                          (step !== 3 &&
                            option ===
                              currentTerms[currentQuestion]
                                .turkishTranslations[0]))
                      ? "border-green-500 bg-green-50 text-green-700"
                      : feedback === "incorrect"
                      ? "border-gray-300 bg-gray-100 text-gray-500"
                      : "border-gray-300 bg-white text-gray-800 hover:bg-gray-50"
                  }`}
                  disabled={feedback !== null}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="h-12 flex items-center justify-center">
              {feedback && (
                <div
                  className={`${
                    feedback === "correct" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {feedback === "correct"
                    ? "Doğru!"
                    : `Yanlış! Doğru cevap: ${
                        step === 3
                          ? currentTerms[currentQuestion].germanTerm
                          : currentTerms[currentQuestion].turkishTranslations[0]
                      }`}
                </div>
              )}
            </div>
          </>
        )}

        <div className="mt-6 text-center">
          <button
            onClick={resetTest}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition-colors"
          >
            Testi Yeniden Başlat
          </button>
        </div>
      </div>
    </div>
  );
};

export default Test2;
