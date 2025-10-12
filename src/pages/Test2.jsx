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
    {
      germanTerm: "Behandlung",
      turkishTranslations: ["tedavi"],
      meaning: "Treatment or therapy.",
      exampleSentenceGerman:
        "Die Behandlung des Patienten dauerte mehrere Wochen.",
      exampleSentenceTurkish: "Hastanın tedavisi birkaç hafta sürdü.",
    },
    {
      germanTerm: "Risikobewertung unterzogen",
      turkishTranslations: ["risk değerlendirmesine tabi tutulmak"],
      meaning: "Subjected to a risk assessment.",
      exampleSentenceGerman:
        "Das Produkt wurde einer strengen Risikobewertung unterzogen.",
      exampleSentenceTurkish:
        "Ürün sıkı bir risk değerlendirmesine tabi tutuldu.",
    },
    {
      germanTerm: "berücksichtigt",
      turkishTranslations: ["dikkate alınmış"],
      meaning: "Taken into account or considered.",
      exampleSentenceGerman:
        "Alle Faktoren wurden bei der Entscheidung berücksichtigt.",
      exampleSentenceTurkish: "Karar verilirken tüm faktörler dikkate alındı.",
    },
    {
      germanTerm: "angemessen",
      turkishTranslations: ["uygun", "yerinde"],
      meaning: "Appropriate or suitable.",
      exampleSentenceGerman: "Die Strafe war der Tat angemessen.",
      exampleSentenceTurkish: "Ceza suça uygundu.",
    },
    {
      germanTerm: "befassen",
      turkishTranslations: ["ilgilenmek", "meşgul olmak"],
      meaning: "To deal with or engage in.",
      exampleSentenceGerman: "Wir müssen uns mit diesem Problem befassen.",
      exampleSentenceTurkish: "Bu sorunla ilgilenmeliyiz.",
    },
    {
      germanTerm: "Tierwohl",
      turkishTranslations: ["hayvan refahı"],
      meaning: "Animal welfare.",
      exampleSentenceGerman:
        "Das Tierwohl spielt in der Landwirtschaft eine wichtige Rolle.",
      exampleSentenceTurkish: "Hayvan refahı tarımda önemli bir rol oynar.",
    },
    {
      germanTerm: "Wasserverbrauch",
      turkishTranslations: ["su tüketimi"],
      meaning: "Water consumption.",
      exampleSentenceGerman: "Der Wasserverbrauch in der Stadt ist gestiegen.",
      exampleSentenceTurkish: "Şehirdeki su tüketimi arttı.",
    },
    {
      germanTerm: "Landbedarf",
      turkishTranslations: ["arazi ihtiyacı"],
      meaning: "Land requirement.",
      exampleSentenceGerman: "Der Landbedarf für den Bau war enorm.",
      exampleSentenceTurkish: "İnşaat için arazi ihtiyacı büyüktü.",
    },
    {
      germanTerm: "Textur",
      turkishTranslations: ["doku"],
      meaning: "Texture.",
      exampleSentenceGerman: "Die Textur des Stoffes fühlt sich weich an.",
      exampleSentenceTurkish: "Kumaşın dokusu yumuşak hissettiriyor.",
    },
    {
      germanTerm: "sinnvolle",
      turkishTranslations: ["mantıklı", "anlamlı"],
      meaning: "Sensible or meaningful (inflected form).",
      exampleSentenceGerman: "Es war eine sinnvolle Entscheidung.",
      exampleSentenceTurkish: "Bu mantıklı bir karardı.",
    },
    {
      germanTerm: "ausgesprochen",
      turkishTranslations: ["son derece", "çok"],
      meaning: "Extremely or very.",
      exampleSentenceGerman: "Er ist ein ausgesprochen höflicher Mensch.",
      exampleSentenceTurkish: "O son derece kibar bir insan.",
    },
    {
      germanTerm: "salonfähig",
      turkishTranslations: ["kabul edilebilir", "toplumca uygun"],
      meaning: "Socially acceptable or respectable.",
      exampleSentenceGerman: "Das Thema ist heute salonfähig geworden.",
      exampleSentenceTurkish:
        "Bu konu bugün toplumca kabul edilebilir hale geldi.",
    },
    {
      germanTerm: "Futtermitteln",
      turkishTranslations: ["yem maddeleri"],
      meaning: "Animal feed (dative/plural).",
      exampleSentenceGerman:
        "Die Kühe werden mit speziellen Futtermitteln gefüttert.",
      exampleSentenceTurkish: "İnekler özel yem maddeleriyle besleniyor.",
    },
    {
      germanTerm: "Eisen",
      turkishTranslations: ["demir"],
      meaning: "Iron.",
      exampleSentenceGerman: "Spinat enthält viel Eisen.",
      exampleSentenceTurkish: "Ispanak çok demir içerir.",
    },
    {
      germanTerm: "Förderung",
      turkishTranslations: ["destek", "teşvik"],
      meaning: "Support or promotion.",
      exampleSentenceGerman: "Die Förderung der Bildung ist sehr wichtig.",
      exampleSentenceTurkish: "Eğitimin desteklenmesi çok önemlidir.",
    },
    {
      germanTerm: "Begünstigung",
      turkishTranslations: ["avantaj", "kayırma"],
      meaning: "Advantage or favoritism.",
      exampleSentenceGerman:
        "Die neue Regelung bringt eine Begünstigung für Familien.",
      exampleSentenceTurkish:
        "Yeni düzenleme aileler için bir avantaj sağlıyor.",
    },
    {
      germanTerm: "auslösen",
      turkishTranslations: ["tetiklemek", "yol açmak"],
      meaning: "To trigger or cause.",
      exampleSentenceGerman: "Das Medikament kann Nebenwirkungen auslösen.",
      exampleSentenceTurkish: "İlaç yan etkilere yol açabilir.",
    },
    {
      germanTerm: "Auslandsaufenthalt",
      turkishTranslations: ["yurtdışı ikameti", "yurtdışında kalma"],
      meaning: "Stay abroad or international residency.",
      exampleSentenceGerman: "Ein Auslandsaufenthalt erweitert den Horizont.",
      exampleSentenceTurkish: "Yurtdışında kalma ufku genişletir.",
    },
    {
      germanTerm: "intrinsisch",
      turkishTranslations: ["içsel", "doğuştan gelen"],
      meaning: "Intrinsic or inherent.",
      exampleSentenceGerman:
        "Sie hatte eine intrinsische Motivation zu lernen.",
      exampleSentenceTurkish: "Öğrenmek için içsel bir motivasyonu vardı.",
    },
    {
      germanTerm: "basiert",
      turkishTranslations: ["dayanır", "temellenir"],
      meaning: "Is based on or relies on.",
      exampleSentenceGerman: "Der Film basiert auf einer wahren Geschichte.",
      exampleSentenceTurkish: "Film gerçek bir hikayeye dayanıyor.",
    },
    {
      germanTerm: "Maßstäbe",
      turkishTranslations: ["ölçütler", "standartlar"],
      meaning: "Standards or criteria.",
      exampleSentenceGerman: "Die neuen Maßstäbe sind sehr streng.",
      exampleSentenceTurkish: "Yeni standartlar çok katı.",
    },
    {
      germanTerm: "Ansprüche",
      turkishTranslations: ["talepler", "haklar"],
      meaning: "Demands or expectations.",
      exampleSentenceGerman: "Die Kunden haben hohe Ansprüche.",
      exampleSentenceTurkish: "Müşterilerin yüksek talepleri var.",
    },
    {
      germanTerm: "steigert",
      turkishTranslations: ["artırır"],
      meaning: "Increases or enhances.",
      exampleSentenceGerman: "Sport steigert das Wohlbefinden.",
      exampleSentenceTurkish: "Spor, refahı artırır.",
    },
    {
      germanTerm: "Einhaltung",
      turkishTranslations: ["riayet", "uyma"],
      meaning: "Compliance or adherence.",
      exampleSentenceGerman: "Die Einhaltung der Regeln ist notwendig.",
      exampleSentenceTurkish: "Kurallara uymak gereklidir.",
    },
    {
      germanTerm: "abwägen",
      turkishTranslations: ["tartmak", "değerlendirmek"],
      meaning: "To weigh or evaluate.",
      exampleSentenceGerman: "Wir müssen die Vor- und Nachteile abwägen.",
      exampleSentenceTurkish: "Artıları ve eksileri değerlendirmeliyiz.",
    },
    {
      germanTerm: "geeignet",
      turkishTranslations: ["uygun"],
      meaning: "Suitable or appropriate.",
      exampleSentenceGerman: "Dieses Buch ist für Anfänger geeignet.",
      exampleSentenceTurkish: "Bu kitap yeni başlayanlar için uygundur.",
    },
    {
      germanTerm: "gegenwärtigen",
      turkishTranslations: ["mevcut", "şimdiki"],
      meaning: "Current or present (inflected form).",
      exampleSentenceGerman:
        "In der gegenwärtigen Situation ist Vorsicht geboten.",
      exampleSentenceTurkish: "Mevcut durumda dikkatli olunmalı.",
    },
    {
      germanTerm: "bewerten",
      turkishTranslations: ["değerlendirmek"],
      meaning: "To assess or evaluate.",
      exampleSentenceGerman: "Der Lehrer bewertet die Prüfungen.",
      exampleSentenceTurkish: "Öğretmen sınavları değerlendiriyor.",
    },
    {
      germanTerm: "urteilen",
      turkishTranslations: ["hüküm vermek"],
      meaning: "To judge or pass judgment.",
      exampleSentenceGerman:
        "Man sollte nicht vorschnell über andere urteilen.",
      exampleSentenceTurkish: "Başkaları hakkında aceleyle hüküm verilmemeli.",
    },
    {
      germanTerm: "vollständig",
      turkishTranslations: ["eksiksiz", "tam"],
      meaning: "Complete or full.",
      exampleSentenceGerman: "Die Liste ist vollständig.",
      exampleSentenceTurkish: "Liste eksiksiz.",
    },
    {
      germanTerm: "belegen",
      turkishTranslations: ["kanıtlamak", "belgelemek"],
      meaning: "To prove or document.",
      exampleSentenceGerman: "Die Ergebnisse belegen seine Theorie.",
      exampleSentenceTurkish: "Sonuçlar onun teorisini kanıtlıyor.",
    },
    {
      germanTerm: "Blutdruck senkt",
      turkishTranslations: ["tansiyonu düşürür"],
      meaning: "Lowers blood pressure.",
      exampleSentenceGerman: "Sport senkt den Blutdruck.",
      exampleSentenceTurkish: "Spor tansiyonu düşürür.",
    },
    {
      germanTerm: "dienen",
      turkishTranslations: ["hizmet etmek"],
      meaning: "To serve or be used for.",
      exampleSentenceGerman: "Dieses Gerät dient zur Messung der Temperatur.",
      exampleSentenceTurkish: "Bu cihaz sıcaklık ölçümü için hizmet eder.",
    },
    {
      germanTerm: "In einigen Fällen",
      turkishTranslations: ["bazı durumlarda"],
      meaning: "In some cases.",
      exampleSentenceGerman: "In einigen Fällen ist eine Operation notwendig.",
      exampleSentenceTurkish: "Bazı durumlarda ameliyat gereklidir.",
    },
    {
      germanTerm: "eingesetzt",
      turkishTranslations: ["kullanılmış", "görevlendirilmiş"],
      meaning: "Used or deployed.",
      exampleSentenceGerman: "Die Technik wird in vielen Bereichen eingesetzt.",
      exampleSentenceTurkish: "Teknoloji birçok alanda kullanılıyor.",
    },
    {
      germanTerm: "darstellen",
      turkishTranslations: ["temsil etmek", "ortaya koymak"],
      meaning: "To represent or present.",
      exampleSentenceGerman: "Die Grafik stellt die Ergebnisse dar.",
      exampleSentenceTurkish: "Grafik sonuçları ortaya koyuyor.",
    },
    {
      germanTerm: "erfüllt / erfülltes",
      turkishTranslations: ["dolu", "tatmin edici"],
      meaning: "Fulfilled or satisfying (inflected form).",
      exampleSentenceGerman: "Er führt ein erfülltes Leben.",
      exampleSentenceTurkish: "Tatmin edici bir hayat sürüyor.",
    },
    {
      germanTerm: "bewältigen",
      turkishTranslations: ["üstesinden gelmek"],
      meaning: "To cope with or overcome.",
      exampleSentenceGerman: "Er konnte die schwierige Situation bewältigen.",
      exampleSentenceTurkish: "Zor durumu üstesinden gelebildi.",
    },
    {
      germanTerm: "jeher",
      turkishTranslations: ["öteden beri"],
      meaning: "Since time immemorial or for a long time.",
      exampleSentenceGerman: "Seit jeher ist Musik ein Teil der Kultur.",
      exampleSentenceTurkish: "Öteden beri müzik kültürün bir parçasıdır.",
    },
    {
      germanTerm: "vermittelt",
      turkishTranslations: ["aktarmış", "iletmiş"],
      meaning: "Conveyed or transmitted.",
      exampleSentenceGerman: "Der Lehrer vermittelt den Schülern Wissen.",
      exampleSentenceTurkish: "Öğretmen öğrencilere bilgi aktarıyor.",
    },
    {
      germanTerm: "Ereignisse",
      turkishTranslations: ["olaylar"],
      meaning: "Events or incidents.",
      exampleSentenceGerman:
        "Die Ereignisse der letzten Woche waren überraschend.",
      exampleSentenceTurkish: "Geçen haftanın olayları şaşırtıcıydı.",
    },
    {
      germanTerm: "Interpretation",
      turkishTranslations: ["yorum", "açıklama"],
      meaning: "Interpretation or explanation.",
      exampleSentenceGerman: "Die Interpretation des Gedichts war interessant.",
      exampleSentenceTurkish: "Şiirin yorumu ilginçti.",
    },
    {
      germanTerm: "Strömungen",
      turkishTranslations: ["akımlar"],
      meaning: "Currents or movements (e.g., ideological).",
      exampleSentenceGerman: "Es gibt verschiedene politische Strömungen.",
      exampleSentenceTurkish: "Farklı siyasi akımlar var.",
    },
    {
      germanTerm: "Tendenzen",
      turkishTranslations: ["eğilimler"],
      meaning: "Trends or tendencies.",
      exampleSentenceGerman: "Die aktuellen Tendenzen zeigen ein Wachstum.",
      exampleSentenceTurkish: "Mevcut eğilimler bir büyüme gösteriyor.",
    },
    {
      germanTerm: "Identitätsbildung",
      turkishTranslations: ["kimlik oluşumu"],
      meaning: "Identity formation.",
      exampleSentenceGerman:
        "Die Schule spielt eine Rolle in der Identitätsbildung.",
      exampleSentenceTurkish: "Okul, kimlik oluşumunda bir rol oynar.",
    },
    {
      germanTerm: "gefährdet",
      turkishTranslations: ["tehlikede"],
      meaning: "Endangered or at risk.",
      exampleSentenceGerman: "Die Art ist durch Umweltverschmutzung gefährdet.",
      exampleSentenceTurkish: "Tür, çevre kirliliği nedeniyle tehlikede.",
    },
    {
      germanTerm: "trockenes",
      turkishTranslations: ["kuru"],
      meaning: "Dry (inflected form).",
      exampleSentenceGerman: "Ich habe trockene Haut.",
      exampleSentenceTurkish: "Kuru cildim var.",
    },
    {
      germanTerm: "wahrgenommen",
      turkishTranslations: ["algılanmış", "fark edilmiş"],
      meaning: "Perceived or noticed.",
      exampleSentenceGerman: "Er hat ein Geräusch wahrgenommen.",
      exampleSentenceTurkish: "Bir ses fark etti.",
    },
    {
      germanTerm: "entgegenzuwirken",
      turkishTranslations: ["karşı koymak", "önlem almak"],
      meaning: "To counteract or take measures against.",
      exampleSentenceGerman: "Wir müssen dem Problem entgegenzuwirken.",
      exampleSentenceTurkish: "Soruna karşı önlem almalıyız.",
    },
    {
      germanTerm: "festhalten",
      turkishTranslations: ["tutmak", "kayda geçirmek"],
      meaning: "To hold or record.",
      exampleSentenceGerman: "Bitte das Geländer festhalten!",
      exampleSentenceTurkish: "Lütfen tırabzanı tut!",
    },
    {
      germanTerm: "zugunsten",
      turkishTranslations: ["lehine"],
      meaning: "In favor of.",
      exampleSentenceGerman: "Das Urteil fiel zugunsten des Angeklagten aus.",
      exampleSentenceTurkish: "Karar sanığın lehine sonuçlandı.",
    },
    {
      germanTerm: "vermeintlich",
      turkishTranslations: ["sözde", "güya"],
      meaning: "Alleged or supposed.",
      exampleSentenceGerman: "Der vermeintliche Dieb war unschuldig.",
      exampleSentenceTurkish: "Sözde hırsız masumdu.",
    },
    {
      germanTerm: "Ehrenamt",
      turkishTranslations: ["gönüllü görev"],
      meaning: "Voluntary work or honorary position.",
      exampleSentenceGerman: "Viele Menschen arbeiten im Ehrenamt.",
      exampleSentenceTurkish: "Birçok insan gönüllü görevlerde çalışıyor.",
    },
    {
      germanTerm: "ein wesentlicher",
      turkishTranslations: ["temel", "önemli"],
      meaning: "Essential or fundamental.",
      exampleSentenceGerman:
        "Teamarbeit ist ein wesentlicher Faktor für den Erfolg.",
      exampleSentenceTurkish: "Ekip çalışması başarı için temel bir faktördür.",
    },
    {
      germanTerm: "aneignen",
      turkishTranslations: ["edinmek", "öğrenmek"],
      meaning: "To acquire or learn.",
      exampleSentenceGerman: "Sie hat sich neue Kenntnisse angeeignet.",
      exampleSentenceTurkish: "Yeni bilgiler edindi.",
    },
    {
      germanTerm: "Burnout",
      turkishTranslations: ["tükenmişlik"],
      meaning: "Burnout or exhaustion.",
      exampleSentenceGerman: "Viele Arbeitnehmer leiden unter Burnout.",
      exampleSentenceTurkish: "Birçok çalışan tükenmişlikten muzdarip.",
    },
    {
      germanTerm: "lohnende",
      turkishTranslations: ["değerli", "faydalı"],
      meaning: "Worthwhile or rewarding (inflected form).",
      exampleSentenceGerman: "Es war eine lohnende Erfahrung.",
      exampleSentenceTurkish: "Bu değerli bir deneyimdi.",
    },
    {
      germanTerm: "Gedächtnistraining",
      turkishTranslations: ["hafıza eğitimi"],
      meaning: "Memory training.",
      exampleSentenceGerman:
        "Regelmäßiges Gedächtnistraining verbessert die Konzentration.",
      exampleSentenceTurkish: "Düzenli hafıza eğitimi konsantrasyonu artırır.",
    },
    {
      germanTerm: "Mnemotechniken",
      turkishTranslations: ["hafıza teknikleri"],
      meaning: "Mnemonic techniques.",
      exampleSentenceGerman:
        "Mnemotechniken helfen, sich lange Zahlenreihen zu merken.",
      exampleSentenceTurkish:
        "Hafıza teknikleri uzun sayı dizilerini hatırlamaya yardımcı olur.",
    },
    {
      germanTerm: "Auseinandersetzung",
      turkishTranslations: ["tartışma", "mücadele"],
      meaning: "Discussion or conflict.",
      exampleSentenceGerman:
        "Es kam zu einer hitzigen Auseinandersetzung zwischen den Kollegen.",
      exampleSentenceTurkish:
        "Meslektaşlar arasında hararetli bir tartışma yaşandı.",
    },
    {
      germanTerm: "etabliert",
      turkishTranslations: ["yerleşmiş", "kökleşmiş"],
      meaning: "Established or well-rooted.",
      exampleSentenceGerman:
        "Deutsch ist eine etablierte Wissenschaftssprache.",
      exampleSentenceTurkish: "Almanca yerleşmiş bir bilim dilidir.",
    },
    {
      germanTerm: "umstritten",
      turkishTranslations: ["tartışmalı"],
      meaning: "Controversial.",
      exampleSentenceGerman: "Die neuen Maßnahmen sind sehr umstritten.",
      exampleSentenceTurkish: "Yeni önlemler çok tartışmalı.",
    },
    {
      germanTerm: "eskaliert",
      turkishTranslations: ["tırmanmış", "şiddetlenmiş"],
      meaning: "Escalated or intensified.",
      exampleSentenceGerman: "Der Konflikt eskalierte nach den Gesprächen.",
      exampleSentenceTurkish: "Görüşmelerden sonra çatışma şiddetlenmiş.",
    },
    {
      germanTerm: "erforderlich",
      turkishTranslations: ["gerekli"],
      meaning: "Required or necessary.",
      exampleSentenceGerman: "Für die Anmeldung ist ein Ausweis erforderlich.",
      exampleSentenceTurkish: "Kayıt için kimlik gerekli.",
    },
    {
      germanTerm: "Reimen",
      turkishTranslations: ["kafiyelenmek"],
      meaning: "To rhyme.",
      exampleSentenceGerman: "Die Kinder lernen, wie sich Wörter reimen.",
      exampleSentenceTurkish:
        "Çocuklar kelimelerin nasıl kafiyelendiğini öğreniyor.",
    },
    {
      germanTerm: "Akronymen",
      turkishTranslations: ["kısaltmalar", "akronimler"],
      meaning: "Acronyms.",
      exampleSentenceGerman: "UNO und NATO sind bekannte Akronyme.",
      exampleSentenceTurkish: "BM ve NATO bilinen akronimlerdir.",
    },
    {
      germanTerm: "wirken",
      turkishTranslations: ["etki etmek"],
      meaning: "To have an effect or impact.",
      exampleSentenceGerman: "Die Medizin wirkt sehr schnell.",
      exampleSentenceTurkish: "İlaç çok hızlı etki ediyor.",
    },
    {
      germanTerm: "Zusammenfassend lässt sich sagen",
      turkishTranslations: ["özetlemek gerekirse"],
      meaning: "In summary, it can be said.",
      exampleSentenceGerman:
        "Zusammenfassend lässt sich sagen, dass die Studie erfolgreich war.",
      exampleSentenceTurkish: "Özetlemek gerekirse, çalışma başarılıydı.",
    },
    {
      germanTerm: "bewerten",
      turkishTranslations: ["değerlendirmek"],
      meaning: "To evaluate or assess.",
      exampleSentenceGerman: "Die Lehrer müssen die Prüfungen fair bewerten.",
      exampleSentenceTurkish:
        "Öğretmenler sınavları adil bir şekilde değerlendirmeli.",
    },
    {
      germanTerm: "Schönheitswahn",
      turkishTranslations: ["güzellik takıntısı"],
      meaning: "Obsession with beauty.",
      exampleSentenceGerman:
        "Der Schönheitswahn führt oft zu psychischen Problemen.",
      exampleSentenceTurkish:
        "Güzellik takıntısı genellikle psikolojik sorunlara yol açar.",
    },
    {
      germanTerm: "Anorexie",
      turkishTranslations: ["anoreksiya", "iştahsızlık hastalığı"],
      meaning: "Anorexia, an eating disorder.",
      exampleSentenceGerman: "Anorexie ist eine ernsthafte Essstörung.",
      exampleSentenceTurkish: "Anoreksiya ciddi bir yeme bozukluğudur.",
    },
    {
      germanTerm: "Bulimie",
      turkishTranslations: ["bulimiya"],
      meaning: "Bulimia, an eating disorder.",
      exampleSentenceGerman: "Bulimie kann lebensgefährlich sein.",
      exampleSentenceTurkish: "Bulimiya hayati tehlike yaratabilir.",
    },
    {
      germanTerm: "Binge-Eating-Störung",
      turkishTranslations: ["tıkınırcasına yeme bozukluğu"],
      meaning: "Binge eating disorder.",
      exampleSentenceGerman:
        "Die Binge-Eating-Störung betrifft viele junge Menschen.",
      exampleSentenceTurkish:
        "Tıkınırcasına yeme bozukluğu birçok genci etkiliyor.",
    },
    {
      germanTerm: "Essverhalten",
      turkishTranslations: ["yeme alışkanlığı"],
      meaning: "Eating behavior.",
      exampleSentenceGerman:
        "Das Essverhalten verändert sich oft in Stresssituationen.",
      exampleSentenceTurkish:
        "Yeme alışkanlıkları genellikle stresli durumlarda değişir.",
    },
    {
      germanTerm: "entsprechen",
      turkishTranslations: ["karşılık gelmek", "uymak"],
      meaning: "To correspond or comply.",
      exampleSentenceGerman: "Das Ergebnis entspricht unseren Erwartungen.",
      exampleSentenceTurkish: "Sonuç beklentilerimize karşılık geliyor.",
    },
    {
      germanTerm: "hervorrufen",
      turkishTranslations: ["sebep olmak"],
      meaning: "To cause or trigger.",
      exampleSentenceGerman: "Das Medikament kann Nebenwirkungen hervorrufen.",
      exampleSentenceTurkish: "İlaç yan etkilere sebep olabilir.",
    },
    {
      germanTerm: "Äußerlichkeiten",
      turkishTranslations: ["dış görünüş", "dışsal şeyler"],
      meaning: "External appearances or superficialities.",
      exampleSentenceGerman: "Er legt zu viel Wert auf Äußerlichkeiten.",
      exampleSentenceTurkish: "Dış görünüşe çok fazla önem veriyor.",
    },
    {
      germanTerm: "basieren",
      turkishTranslations: ["dayanmak"],
      meaning: "To be based on.",
      exampleSentenceGerman:
        "Die Theorie basiert auf neuen Forschungsergebnissen.",
      exampleSentenceTurkish: "Teori yeni araştırma sonuçlarına dayanıyor.",
    },
    {
      germanTerm: "Anforderungen",
      turkishTranslations: ["gereklilikler", "talepler"],
      meaning: "Requirements or demands.",
      exampleSentenceGerman: "Die Anforderungen an den Beruf sind sehr hoch.",
      exampleSentenceTurkish: "Meslek için gereklilikler çok yüksek.",
    },
    {
      germanTerm: "aussehen sollte",
      turkishTranslations: ["görünmeli", "görünmesi gerekir"],
      meaning: "Should look like.",
      exampleSentenceGerman: "So sollte das Projekt am Ende aussehen.",
      exampleSentenceTurkish: "Proje sonunda böyle görünmeli.",
    },
    {
      germanTerm: "setzen sollte",
      turkishTranslations: ["koymalı", "belirlemeli"],
      meaning: "Should set or establish.",
      exampleSentenceGerman: "Man sollte klare Prioritäten setzen.",
      exampleSentenceTurkish: "Açık öncelikler belirlemeli.",
    },
    {
      germanTerm: "Fundament",
      turkishTranslations: ["temel"],
      meaning: "Foundation or basis.",
      exampleSentenceGerman: "Vertrauen ist das Fundament jeder Beziehung.",
      exampleSentenceTurkish: "Güven her ilişkinin temelidir.",
    },
    {
      germanTerm: "gewahrt",
      turkishTranslations: ["korunmuş", "muhafaza edilmiş"],
      meaning: "Preserved or safeguarded.",
      exampleSentenceGerman: "Die Rechte der Arbeitnehmer wurden gewahrt.",
      exampleSentenceTurkish: "Çalışanların hakları korunmuş.",
    },
    {
      germanTerm: "befürchten",
      turkishTranslations: ["endişe etmek", "korkmak"],
      meaning: "To fear or be concerned about.",
      exampleSentenceGerman: "Viele befürchten eine Wirtschaftskrise.",
      exampleSentenceTurkish: "Birçok kişi ekonomik krizden endişe ediyor.",
    },
    {
      germanTerm: "wissenschaftlichen",
      turkishTranslations: ["bilimsel"],
      meaning: "Scientific (inflected form).",
      exampleSentenceGerman:
        "Die Ergebnisse basieren auf wissenschaftlichen Studien.",
      exampleSentenceTurkish: "Sonuçlar bilimsel çalışmalara dayanıyor.",
    },
    {
      germanTerm: "der neuronalen Netze",
      turkishTranslations: ["sinir ağlarının"],
      meaning: "Of neural networks (genitive/dative plural).",
      exampleSentenceGerman:
        "Die Funktion der neuronalen Netze wird erforscht.",
      exampleSentenceTurkish: "Sinir ağlarının işlevi araştırılıyor.",
    },
    {
      germanTerm: "Muster",
      turkishTranslations: ["desen", "örüntü"],
      meaning: "Pattern or design.",
      exampleSentenceGerman: "Das Kleid hat ein schönes Muster.",
      exampleSentenceTurkish: "Elbise güzel bir desene sahip.",
    },
    {
      germanTerm: "effizienter auszuführen",
      turkishTranslations: ["daha verimli gerçekleştirmek"],
      meaning: "To perform more efficiently.",
      exampleSentenceGerman:
        "Computer sind in der Lage, Prozesse effizienter auszuführen.",
      exampleSentenceTurkish:
        "Bilgisayarlar süreçleri daha verimli gerçekleştirebilir.",
    },
    {
      germanTerm: "fehlerhafte Entscheidungen treffen",
      turkishTranslations: ["hatalı kararlar almak"],
      meaning: "To make erroneous decisions.",
      exampleSentenceGerman:
        "Menschen können unter Stress fehlerhafte Entscheidungen treffen.",
      exampleSentenceTurkish:
        "İnsanlar stres altında hatalı kararlar alabilir.",
    },
    {
      germanTerm: "beeinträchtigen",
      turkishTranslations: ["olumsuz etkilemek", "zedelemek"],
      meaning: "To impair or negatively affect.",
      exampleSentenceGerman: "Lärm kann die Konzentration beeinträchtigen.",
      exampleSentenceTurkish: "Gürültü konsantrasyonu olumsuz etkileyebilir.",
    },
    {
      germanTerm: "Nachhaltigkeit",
      turkishTranslations: ["sürdürülebilirlik"],
      meaning: "Sustainability.",
      exampleSentenceGerman:
        "Nachhaltigkeit spielt in der heutigen Wirtschaft eine wichtige Rolle.",
      exampleSentenceTurkish:
        "Sürdürülebilirlik günümüz ekonomisinde önemli bir rol oynar.",
    },
    {
      germanTerm: "Definition",
      turkishTranslations: ["tanım"],
      meaning: "Definition.",
      exampleSentenceGerman: "Die Definition dieses Begriffs ist sehr komplex.",
      exampleSentenceTurkish: "Bu terimin tanımı çok karmaşık.",
    },
    {
      germanTerm: "Umsetzbarkeit",
      turkishTranslations: ["uygulanabilirlik"],
      meaning: "Feasibility or implementability.",
      exampleSentenceGerman: "Die Umsetzbarkeit des Plans ist fraglich.",
      exampleSentenceTurkish: "Planın uygulanabilirliği şüpheli.",
    },
    {
      germanTerm: "erschweren",
      turkishTranslations: ["zorlaştırmak"],
      meaning: "To make difficult or complicate.",
      exampleSentenceGerman: "Regen kann die Bauarbeiten erheblich erschweren.",
      exampleSentenceTurkish:
        "Yağmur inşaat çalışmalarını önemli ölçüde zorlaştırabilir.",
    },
    {
      germanTerm: "ausreichen",
      turkishTranslations: ["yeterli olmak"],
      meaning: "To be sufficient.",
      exampleSentenceGerman: "Das Geld reicht für die Reparatur aus.",
      exampleSentenceTurkish: "Para tamir için yeterli.",
    },
    {
      germanTerm: "erfüllen",
      turkishTranslations: ["yerine getirmek"],
      meaning: "To fulfill or meet.",
      exampleSentenceGerman: "Er konnte alle Anforderungen erfüllen.",
      exampleSentenceTurkish: "Tüm gereklilikleri yerine getirebildi.",
    },
    {
      germanTerm: "Stakeholder",
      turkishTranslations: ["paydaşlar"],
      meaning: "Stakeholders.",
      exampleSentenceGerman:
        "Die Stakeholder wurden in die Entscheidung einbezogen.",
      exampleSentenceTurkish: "Paydaşlar karara dahil edildi.",
    },
    {
      germanTerm: "einbezogen",
      turkishTranslations: ["dahil edilmiş"],
      meaning: "Included or involved.",
      exampleSentenceGerman: "Alle Schüler wurden in das Projekt einbezogen.",
      exampleSentenceTurkish: "Tüm öğrenciler projeye dahil edildi.",
    },
    {
      germanTerm: "derartige",
      turkishTranslations: ["böyle bir", "buna benzer"],
      meaning: "Such or similar.",
      exampleSentenceGerman: "Derartige Fehler sollten vermieden werden.",
      exampleSentenceTurkish: "Böyle hatalardan kaçınılmalı.",
    },
    {
      germanTerm: "Fake News",
      turkishTranslations: ["sahte haber"],
      meaning: "Fake news.",
      exampleSentenceGerman: "Im Internet kursieren viele Fake News.",
      exampleSentenceTurkish: "İnternette birçok sahte haber dolaşıyor.",
    },
    {
      germanTerm: "ernsthaften",
      turkishTranslations: ["ciddi"],
      meaning: "Serious (inflected form).",
      exampleSentenceGerman: "Es handelt sich um ein ernsthaftes Problem.",
      exampleSentenceTurkish: "Bu ciddi bir sorun.",
    },
    {
      germanTerm: "Ereignisse",
      turkishTranslations: ["olaylar"],
      meaning: "Events or incidents.",
      exampleSentenceGerman: "Die Stadt erlebte viele kulturelle Ereignisse.",
      exampleSentenceTurkish: "Şehir birçok kültürel olay yaşadı.",
    },
    {
      germanTerm: "Desinformation",
      turkishTranslations: ["dezenformasyon"],
      meaning: "Disinformation.",
      exampleSentenceGerman:
        "Die Desinformation verbreitete sich sehr schnell.",
      exampleSentenceTurkish: "Dezenformasyon çok hızlı yayıldı.",
    },
    {
      germanTerm: "Ausnutzung",
      turkishTranslations: ["istismar", "sömürü"],
      meaning: "Exploitation or abuse.",
      exampleSentenceGerman:
        "Die Ausnutzung der Naturressourcen ist gefährlich.",
      exampleSentenceTurkish: "Doğal kaynakların istismarı tehlikelidir.",
    },
    {
      germanTerm: "verifizieren",
      turkishTranslations: ["doğrulamak"],
      meaning: "To verify or confirm.",
      exampleSentenceGerman: "Bitte verifizieren Sie Ihre Identität.",
      exampleSentenceTurkish: "Lütfen kimliğinizi doğrulayın.",
    },
    {
      germanTerm: "die Verbreitung",
      turkishTranslations: ["yayılma"],
      meaning: "Spread or dissemination.",
      exampleSentenceGerman: "Die Verbreitung des Virus war rasant.",
      exampleSentenceTurkish: "Virüsün yayılması çok hızlıydı.",
    },
    {
      germanTerm: "einzudämmen",
      turkishTranslations: ["sınırlamak", "kontrol altına almak"],
      meaning: "To contain or curb.",
      exampleSentenceGerman: "Die Maßnahmen sollen die Krise einzudämmen.",
      exampleSentenceTurkish: "Önlemler krizi kontrol altına almayı amaçlıyor.",
    },
    {
      germanTerm: "Bekämpfung",
      turkishTranslations: ["mücadele", "bertaraf etme"],
      meaning: "Combating or elimination.",
      exampleSentenceGerman:
        "Die Bekämpfung von Krankheiten ist eine wichtige Aufgabe der Medizin.",
      exampleSentenceTurkish:
        "Hastalıklarla mücadele, tıbbın önemli bir görevidir.",
    },
    {
      germanTerm: "befassen",
      turkishTranslations: ["ilgilenmek", "uğraşmak"],
      meaning: "To deal with or engage in.",
      exampleSentenceGerman:
        "Wir befassen uns heute mit dem Thema Umweltschutz.",
      exampleSentenceTurkish: "Bugün çevre koruma konusuyla ilgileniyoruz.",
    },
    {
      germanTerm: "Falschmeldungen",
      turkishTranslations: ["yanlış haberler"],
      meaning: "False reports or misinformation.",
      exampleSentenceGerman:
        "Im Internet verbreiten sich Falschmeldungen sehr schnell.",
      exampleSentenceTurkish: "İnternette yanlış haberler çok hızlı yayılıyor.",
    },
    {
      germanTerm: "Akteure",
      turkishTranslations: ["aktörler", "failler", "rol oynayan kişiler"],
      meaning: "Actors or agents.",
      exampleSentenceGerman:
        "Die politischen Akteure diskutieren über neue Gesetze.",
      exampleSentenceTurkish: "Siyasi aktörler yeni yasaları tartışıyor.",
    },
    {
      germanTerm: "Regierungen",
      turkishTranslations: ["hükümetler"],
      meaning: "Governments.",
      exampleSentenceGerman:
        "Viele Regierungen arbeiten zusammen, um den Klimawandel zu bekämpfen.",
      exampleSentenceTurkish:
        "Birçok hükümet, iklim değişikliğiyle mücadele etmek için birlikte çalışıyor.",
    },
    {
      germanTerm: "Streben",
      turkishTranslations: ["çaba", "gayret", "arzu"],
      meaning: "Aspiration or endeavor.",
      exampleSentenceGerman:
        "Das Streben nach Wissen ist etwas sehr Wertvolles.",
      exampleSentenceTurkish: "Bilgiye ulaşma çabası çok değerli bir şeydir.",
    },
    {
      germanTerm: "Profit",
      turkishTranslations: ["kâr", "kazanç"],
      meaning: "Profit or gain.",
      exampleSentenceGerman:
        "Die Firma macht großen Profit durch neue Technologien.",
      exampleSentenceTurkish:
        "Şirket, yeni teknolojilerle büyük kâr elde ediyor.",
    },
    {
      germanTerm: "selektive",
      turkishTranslations: ["seçici"],
      meaning: "Selective (inflected form).",
      exampleSentenceGerman:
        "Er hat eine sehr selektive Wahrnehmung der Realität.",
      exampleSentenceTurkish: "Gerçekliği çok seçici bir şekilde algılıyor.",
    },
    {
      germanTerm: "Wahrnehmung",
      turkishTranslations: ["algı", "farkına varma"],
      meaning: "Perception or awareness.",
      exampleSentenceGerman:
        "Die Wahrnehmung von Geräuschen ist bei jedem Menschen unterschiedlich.",
      exampleSentenceTurkish: "Seslerin algılanması her insanda farklıdır.",
    },
    {
      germanTerm: "Anfälligkeit",
      turkishTranslations: ["yatkınlık", "hassasiyet"],
      meaning: "Susceptibility or vulnerability.",
      exampleSentenceGerman:
        "Die Anfälligkeit für Erkältungen ist im Winter höher.",
      exampleSentenceTurkish:
        "Kışın soğuk algınlığına yatkınlık daha yüksektir.",
    },
    {
      germanTerm: "schwerwiegende",
      turkishTranslations: ["ciddi", "ağır"],
      meaning: "Serious or severe (inflected form).",
      exampleSentenceGerman: "Das war ein schwerwiegender Fehler.",
      exampleSentenceTurkish: "Bu ciddi bir hataydı.",
    },
    {
      germanTerm: "untergraben",
      turkishTranslations: ["zayıflatmak", "baltalamak"],
      meaning: "To undermine or weaken.",
      exampleSentenceGerman:
        "Korruption kann das Vertrauen in den Staat untergraben.",
      exampleSentenceTurkish: "Yolsuzluk, devlete olan güveni baltalayabilir.",
    },
    {
      germanTerm: "gefährden",
      turkishTranslations: ["tehlikeye atmak"],
      meaning: "To endanger or jeopardize.",
      exampleSentenceGerman:
        "Rücksichtsloses Fahren kann Menschenleben gefährden.",
      exampleSentenceTurkish:
        "Dikkatsiz sürüş insan hayatını tehlikeye atabilir.",
    },
    {
      germanTerm: "erfordert",
      turkishTranslations: ["gerektirir"],
      meaning: "Requires or demands.",
      exampleSentenceGerman: "Diese Aufgabe erfordert viel Geduld.",
      exampleSentenceTurkish: "Bu görev çok sabır gerektirir.",
    },
    {
      germanTerm: "geschult",
      turkishTranslations: ["eğitimli"],
      meaning: "Trained or skilled.",
      exampleSentenceGerman:
        "Nur geschulte Mitarbeiter dürfen die Maschine bedienen.",
      exampleSentenceTurkish:
        "Yalnızca eğitimli çalışanlar makineyi kullanabilir.",
    },
    {
      germanTerm: "wahrheitsgemäßen",
      turkishTranslations: ["gerçeğe uygun"],
      meaning: "Truthful or accurate (inflected form).",
      exampleSentenceGerman: "Bitte geben Sie eine wahrheitsgemäße Antwort.",
      exampleSentenceTurkish: "Lütfen gerçeğe uygun bir cevap verin.",
    },
    {
      germanTerm: "vertrauenswürdigen",
      turkishTranslations: ["güvenilir"],
      meaning: "Trustworthy or reliable (inflected form).",
      exampleSentenceGerman: "Wir brauchen vertrauenswürdige Quellen.",
      exampleSentenceTurkish: "Güvenilir kaynaklara ihtiyacımız var.",
    },
    {
      germanTerm: "Zugang",
      turkishTranslations: ["erişim", "giriş"],
      meaning: "Access or entry.",
      exampleSentenceGerman: "Ich habe keinen Zugang zum Computer.",
      exampleSentenceTurkish: "Bilgisayara erişimim yok.",
    },
    {
      germanTerm: "rein ökologisches",
      turkishTranslations: ["tamamen ekolojik"],
      meaning: "Purely ecological (inflected form).",
      exampleSentenceGerman: "Das ist ein rein ökologisches Produkt.",
      exampleSentenceTurkish: "Bu tamamen ekolojik bir ürün.",
    },
    {
      germanTerm: "umfasst",
      turkishTranslations: ["kapsar"],
      meaning: "Includes or encompasses.",
      exampleSentenceGerman: "Der Kurs umfasst zehn Lektionen.",
      exampleSentenceTurkish: "Kurs on dersi kapsar.",
    },
    {
      germanTerm: "sicherzustellen",
      turkishTranslations: ["güvence altına almak"],
      meaning: "To ensure or guarantee.",
      exampleSentenceGerman:
        "Wir arbeiten hart, um die Qualität sicherzustellen.",
      exampleSentenceTurkish:
        "Kaliteyi güvence altına almak için sıkı çalışıyoruz.",
    },
    {
      germanTerm: "profitieren",
      turkishTranslations: ["faydalanmak"],
      meaning: "To benefit or profit from.",
      exampleSentenceGerman:
        "Alle Studenten profitieren von den neuen Angeboten.",
      exampleSentenceTurkish: "Tüm öğrenciler yeni tekliflerden faydalanıyor.",
    },
    {
      germanTerm: "in erster Linie",
      turkishTranslations: ["öncelikle", "her şeyden önce"],
      meaning: "Primarily or first and foremost.",
      exampleSentenceGerman: "Wir sind hier in erster Linie, um zu lernen.",
      exampleSentenceTurkish: "Burada öncelikle öğrenmek için bulunuyoruz.",
    },
    {
      germanTerm: "Ressourcen",
      turkishTranslations: ["kaynaklar"],
      meaning: "Resources.",
      exampleSentenceGerman: "Natürliche Ressourcen müssen geschützt werden.",
      exampleSentenceTurkish: "Doğal kaynaklar korunmalı.",
    },
    {
      germanTerm: "implementieren",
      turkishTranslations: ["uygulamak", "hayata geçirmek"],
      meaning: "To implement or put into practice.",
      exampleSentenceGerman:
        "Die neue Software wurde erfolgreich implementiert.",
      exampleSentenceTurkish: "Yeni yazılım başarıyla uygulandı.",
    },
    {
      germanTerm: "Bedenken",
      turkishTranslations: ["endişeler", "tereddütler"],
      meaning: "Concerns or reservations.",
      exampleSentenceGerman: "Er hatte Bedenken wegen der Sicherheit.",
      exampleSentenceTurkish: "Güvenlik konusunda endişeleri vardı.",
    },
    {
      germanTerm: "Anreize",
      turkishTranslations: ["teşvikler"],
      meaning: "Incentives.",
      exampleSentenceGerman:
        "Die Regierung gibt Anreize für erneuerbare Energien.",
      exampleSentenceTurkish:
        "Hükümet yenilenebilir enerjiler için teşvikler sunuyor.",
    },
    {
      germanTerm: "dass wir die Bedürfnisse der Gegenwart erfüllen",
      turkishTranslations: ["günümüzün ihtiyaçlarını karşılamamız"],
      meaning: "That we meet the needs of the present.",
      exampleSentenceGerman:
        "Es ist wichtig, dass wir die Bedürfnisse der Gegenwart erfüllen, ohne die Zukunft zu gefährden.",
      exampleSentenceTurkish:
        "Günümüzün ihtiyaçlarını karşılamamız, geleceği tehlikeye atmadan önemlidir.",
    },
    {
      germanTerm: "gewährleisten",
      turkishTranslations: ["garanti etmek", "sağlamak"],
      meaning: "To guarantee or ensure.",
      exampleSentenceGerman:
        "Die Sicherheit der Daten muss gewährleistet sein.",
      exampleSentenceTurkish: "Verilerin güvenliği garanti edilmelidir.",
    },
    {
      germanTerm: "eingesetzt",
      turkishTranslations: ["kullanılmış", "görevlendirilmiş"],
      meaning: "Used or deployed.",
      exampleSentenceGerman: "Die neuen Geräte werden in Schulen eingesetzt.",
      exampleSentenceTurkish: "Yeni cihazlar okullarda kullanılıyor.",
    },
    {
      germanTerm: "sowie",
      turkishTranslations: ["ve ayrıca"],
      meaning: "As well as or and also.",
      exampleSentenceGerman: "Er spricht Deutsch sowie Englisch.",
      exampleSentenceTurkish: "Almanca ve ayrıca İngilizce konuşuyor.",
    },
    {
      germanTerm: "einschließlich",
      turkishTranslations: ["dahil olmak üzere"],
      meaning: "Including or inclusive of.",
      exampleSentenceGerman:
        "Alle Kosten, einschließlich der Steuern, sind im Preis enthalten.",
      exampleSentenceTurkish:
        "Vergiler dahil olmak üzere tüm maliyetler fiyata dahildir.",
    },
    {
      germanTerm: "Bildverarbeitung",
      turkishTranslations: ["görüntü işleme"],
      meaning: "Image processing.",
      exampleSentenceGerman:
        "Bildverarbeitung spielt in der KI eine große Rolle.",
      exampleSentenceTurkish:
        "Görüntü işleme, yapay zekada büyük bir rol oynar.",
    },
    {
      germanTerm: "Hindernisse",
      turkishTranslations: ["engeller"],
      meaning: "Obstacles or barriers.",
      exampleSentenceGerman: "Wir müssen Hindernisse überwinden.",
      exampleSentenceTurkish: "Engelleri aşmalıyız.",
    },
    {
      germanTerm: "auszuführen",
      turkishTranslations: ["yerine getirmek", "icra etmek"],
      meaning: "To carry out or execute.",
      exampleSentenceGerman: "Er hat vergessen, die Aufgabe auszuführen.",
      exampleSentenceTurkish: "Görevi yerine getirmeyi unuttu.",
    },
    {
      germanTerm: "erfordern",
      turkishTranslations: ["gerektirmek"],
      meaning: "To require or demand.",
      exampleSentenceGerman: "Diese Arbeit erfordert viel Erfahrung.",
      exampleSentenceTurkish: "Bu iş çok deneyim gerektiriyor.",
    },
    {
      germanTerm: "vielversprechend",
      turkishTranslations: ["umut verici"],
      meaning: "Promising or hopeful.",
      exampleSentenceGerman: "Das ist ein vielversprechender Ansatz.",
      exampleSentenceTurkish: "Bu umut verici bir yaklaşım.",
    },
    {
      germanTerm: "Allzweck-KI",
      turkishTranslations: ["çok amaçlı yapay zekâ"],
      meaning: "General-purpose AI.",
      exampleSentenceGerman:
        "Eine Allzweck-KI kann viele verschiedene Aufgaben erledigen.",
      exampleSentenceTurkish:
        "Çok amaçlı bir yapay zekâ birçok farklı görevi yerine getirebilir.",
    },
    {
      germanTerm: "in der Lage",
      turkishTranslations: ["yapabilecek durumda"],
      meaning: "Capable or able to.",
      exampleSentenceGerman: "Sie ist in der Lage, drei Sprachen zu sprechen.",
      exampleSentenceTurkish: "Üç dil konuşabilecek durumda.",
    },
    {
      germanTerm: "bezüglich",
      turkishTranslations: ["ilgili olarak"],
      meaning: "Regarding or concerning.",
      exampleSentenceGerman: "Ich habe eine Frage bezüglich Ihrer Bestellung.",
      exampleSentenceTurkish: "Siparişinizle ilgili bir sorum var.",
    },
    {
      germanTerm: "hinsichtlich",
      turkishTranslations: ["bakımından", "açısından"],
      meaning: "With regard to or in terms of.",
      exampleSentenceGerman:
        "Hinsichtlich der Qualität gibt es keine Probleme.",
      exampleSentenceTurkish: "Kalite açısından hiçbir sorun yok.",
    },
    {
      germanTerm: "Fakten",
      turkishTranslations: ["gerçekler"],
      meaning: "Facts.",
      exampleSentenceGerman: "Wir sollten uns an die Fakten halten.",
      exampleSentenceTurkish: "Gerçeklere bağlı kalmalıyız.",
    },
    {
      germanTerm: "fundierte",
      turkishTranslations: ["sağlam", "temelli"],
      meaning: "Well-founded or solid (inflected form).",
      exampleSentenceGerman: "Er hat eine fundierte Ausbildung.",
      exampleSentenceTurkish: "Sağlam bir eğitimi var.",
    },
    {
      germanTerm: "überflüssig",
      turkishTranslations: ["gereksiz"],
      meaning: "Superfluous or unnecessary.",
      exampleSentenceGerman: "Dieses Detail ist völlig überflüssig.",
      exampleSentenceTurkish: "Bu detay tamamen gereksiz.",
    },
    {
      germanTerm: "Voreingenommenheit",
      turkishTranslations: ["önyargı"],
      meaning: "Bias or prejudice.",
      exampleSentenceGerman:
        "Voreingenommenheit kann die Objektivität beeinträchtigen.",
      exampleSentenceTurkish: "Önyargı tarafsızlığı etkileyebilir.",
    },
    {
      germanTerm: "darstellen",
      turkishTranslations: ["tasvir etmek", "göstermek"],
      meaning: "To depict or represent.",
      exampleSentenceGerman: "Das Bild stellt eine Landschaft dar.",
      exampleSentenceTurkish: "Resim bir manzarayı tasvir ediyor.",
    },
    {
      germanTerm: "unvollständig",
      turkishTranslations: ["eksik", "tamamlanmamış"],
      meaning: "Incomplete or unfinished.",
      exampleSentenceGerman: "Die Liste ist unvollständig.",
      exampleSentenceTurkish: "Liste eksik.",
    },
    {
      germanTerm: "Behandlung fördern",
      turkishTranslations: ["tedaviyi desteklemek"],
      meaning: "To promote or support treatment.",
      exampleSentenceGerman: "Neue Medikamente können die Behandlung fördern.",
      exampleSentenceTurkish: "Yeni ilaçlar tedaviyi destekleyebilir.",
    },
    {
      germanTerm: "Auftreten",
      turkishTranslations: ["ortaya çıkış", "davranış", "tutum"],
      meaning: "Occurrence, behavior, or demeanor.",
      exampleSentenceGerman:
        "Sein selbstbewusstes Auftreten beeindruckte alle.",
      exampleSentenceTurkish: "Kendine güvenli tutumu herkesi etkiledi.",
    },
    {
      germanTerm: "genannt",
      turkishTranslations: ["adı verilen", "denilen"],
      meaning: "Called or referred to as.",
      exampleSentenceGerman: "Er ist ein Experte in der genannten Branche.",
      exampleSentenceTurkish: "O, adı verilen sektörde bir uzman.",
    },
    {
      germanTerm: "Einklang",
      turkishTranslations: ["uyum"],
      meaning: "Harmony or accordance.",
      exampleSentenceGerman: "Wir arbeiten im Einklang mit der Natur.",
      exampleSentenceTurkish: "Doğayla uyum içinde çalışıyoruz.",
    },
    {
      germanTerm: "Vorstellungen",
      turkishTranslations: ["fikirler", "hayaller", "beklentiler"],
      meaning: "Ideas, visions, or expectations.",
      exampleSentenceGerman:
        "Jeder hat unterschiedliche Vorstellungen vom Glück.",
      exampleSentenceTurkish:
        "Herkesin mutlulukla ilgili farklı fikirleri var.",
    },
    {
      germanTerm: "Welt gerecht",
      turkishTranslations: ["dünyaya adil"],
      meaning: "A just world.",
      exampleSentenceGerman: "Wir müssen eine Welt gerecht für alle schaffen.",
      exampleSentenceTurkish: "Herkes için adil bir dünya yaratmalıyız.",
    },
    {
      germanTerm: "durchgeführt",
      turkishTranslations: ["gerçekleştirilmiş"],
      meaning: "Carried out or conducted.",
      exampleSentenceGerman: "Die Studie wurde erfolgreich durchgeführt.",
      exampleSentenceTurkish: "Çalışma başarıyla gerçekleştirildi.",
    },
    {
      germanTerm: "nach wie vor",
      turkishTranslations: ["hâlâ", "eskisi gibi"],
      meaning: "Still or as before.",
      exampleSentenceGerman: "Er ist nach wie vor mein bester Freund.",
      exampleSentenceTurkish: "O hâlâ en iyi arkadaşım.",
    },
    {
      germanTerm: "überfüllt",
      turkishTranslations: ["aşırı dolu"],
      meaning: "Overcrowded or overflowing.",
      exampleSentenceGerman: "Der Zug war völlig überfüllt.",
      exampleSentenceTurkish: "Tren tamamen aşırı doluydu.",
    },
    {
      germanTerm: "Bedingungen",
      turkishTranslations: ["koşullar", "şartlar"],
      meaning: "Conditions or circumstances.",
      exampleSentenceGerman: "Wir arbeiten unter schwierigen Bedingungen.",
      exampleSentenceTurkish: "Zor koşullarda çalışıyoruz.",
    },
    {
      germanTerm: "anzuwenden",
      turkishTranslations: ["uygulamak"],
      meaning: "To apply or implement.",
      exampleSentenceGerman: "Die Regeln sind auf alle anzuwenden.",
      exampleSentenceTurkish: "Kurallar herkes için uygulanmalı.",
    },
    {
      germanTerm: "Vermittlung",
      turkishTranslations: ["aracılık", "öğretme", "aktarma"],
      meaning: "Mediation, teaching, or transmission.",
      exampleSentenceGerman:
        "Die Vermittlung von Wissen ist die Aufgabe der Lehrer.",
      exampleSentenceTurkish: "Bilgi aktarımı öğretmenlerin görevidir.",
    },
    {
      germanTerm: "Die Betonung",
      turkishTranslations: ["vurgu"],
      meaning: "Emphasis or stress.",
      exampleSentenceGerman: "Die Betonung liegt auf dem letzten Wort.",
      exampleSentenceTurkish: "Vurgu son kelimede.",
    },
    {
      germanTerm: "solides",
      turkishTranslations: ["sağlam", "güvenilir"],
      meaning: "Solid or reliable (inflected form).",
      exampleSentenceGerman: "Er hat ein solides Wissen in Mathematik.",
      exampleSentenceTurkish: "Matematikte sağlam bir bilgisi var.",
    },
    {
      germanTerm: "inhaltlich",
      turkishTranslations: ["içerik açısından"],
      meaning: "In terms of content.",
      exampleSentenceGerman: "Der Text ist inhaltlich korrekt.",
      exampleSentenceTurkish: "Metin içerik açısından doğru.",
    },
    {
      germanTerm: "unterfordert / überfordert",
      turkishTranslations: ["yeterince zorlanmayan", "aşırı zorlanan"],
      meaning: "Underchallenged or overchallenged.",
      exampleSentenceGerman:
        "Der Schüler war unterfordert, die Schülerin überfordert.",
      exampleSentenceTurkish:
        "Öğrenci yeterince zorlanmadı, kız öğrenci ise aşırı zorlandı.",
    },
    {
      germanTerm: "dienen",
      turkishTranslations: ["hizmet etmek"],
      meaning: "To serve or be used for.",
      exampleSentenceGerman: "Dieses Werkzeug dient zum Schneiden.",
      exampleSentenceTurkish: "Bu alet kesmek için kullanılır.",
    },
    {
      germanTerm: "berücksichtigen",
      turkishTranslations: ["dikkate almak"],
      meaning: "To consider or take into account.",
      exampleSentenceGerman: "Wir müssen alle Faktoren berücksichtigen.",
      exampleSentenceTurkish: "Tüm faktörleri dikkate almalıyız.",
    },
    {
      germanTerm: "agieren",
      turkishTranslations: ["hareket etmek", "davranmak"],
      meaning: "To act or behave.",
      exampleSentenceGerman: "Die Firma agiert international.",
      exampleSentenceTurkish: "Şirket uluslararası hareket ediyor.",
    },
    {
      germanTerm: "Essstörungen",
      turkishTranslations: ["yeme bozuklukları"],
      meaning: "Eating disorders.",
      exampleSentenceGerman: "Viele Jugendliche leiden an Essstörungen.",
      exampleSentenceTurkish: "Birçok genç yeme bozukluklarından muzdarip.",
    },
    {
      germanTerm: "Schönheit",
      turkishTranslations: ["güzellik"],
      meaning: "Beauty.",
      exampleSentenceGerman: "Schönheit liegt im Auge des Betrachters.",
      exampleSentenceTurkish: "Güzellik bakanın gözündedir.",
    },
    {
      germanTerm: "Drang",
      turkishTranslations: ["dürtü", "istek"],
      meaning: "Urge or desire.",
      exampleSentenceGerman: "Er verspürte den Drang zu reisen.",
      exampleSentenceTurkish: "Seyahat etme dürtüsü hissetti.",
    },
    {
      germanTerm: "Streben",
      turkishTranslations: ["çaba", "istek"],
      meaning: "Aspiration or striving.",
      exampleSentenceGerman: "Das Streben nach Glück ist universell.",
      exampleSentenceTurkish: "Mutluluğa ulaşma çabası evrenseldir.",
    },
    {
      germanTerm: "gestörten",
      turkishTranslations: ["bozulmuş", "sorunlu"],
      meaning: "Disturbed or problematic (inflected form).",
      exampleSentenceGerman: "Er leidet an gestörten Schlafmustern.",
      exampleSentenceTurkish: "Sorunlu uyku düzenlerinden muzdarip.",
    },
    {
      germanTerm: "zusammenhängen",
      turkishTranslations: ["bağlantılı olmak"],
      meaning: "To be related or connected.",
      exampleSentenceGerman: "Stress kann mit Krankheiten zusammenhängen.",
      exampleSentenceTurkish: "Stres hastalıklarla bağlantılı olabilir.",
    },
    {
      germanTerm: "betreffen",
      turkishTranslations: ["ilgilendirmek", "etkilemek"],
      meaning: "To concern or affect.",
      exampleSentenceGerman: "Die neuen Regeln betreffen alle Studenten.",
      exampleSentenceTurkish: "Yeni kurallar tüm öğrencileri ilgilendiriyor.",
    },
    {
      germanTerm: "ausgesetzt",
      turkishTranslations: ["maruz kalmış"],
      meaning: "Exposed to.",
      exampleSentenceGerman: "Die Pflanzen sind starkem Wind ausgesetzt.",
      exampleSentenceTurkish: "Bitkiler güçlü rüzgâra maruz kalmış.",
    },
    {
      germanTerm: "entsprechen",
      turkishTranslations: ["karşılamak", "uygun olmak"],
      meaning: "To meet or correspond.",
      exampleSentenceGerman: "Das Ergebnis entspricht meinen Erwartungen.",
      exampleSentenceTurkish: "Sonuç beklentilerime uygun.",
    },
    {
      germanTerm: "mithalten",
      turkishTranslations: ["ayak uydurmak"],
      meaning: "To keep up with.",
      exampleSentenceGerman: "Er kann mit den anderen mithalten.",
      exampleSentenceTurkish: "Diğerlerine ayak uydurabilir.",
    },
    {
      germanTerm: "wahrnehmen",
      turkishTranslations: ["algılamak", "fark etmek"],
      meaning: "To perceive or notice.",
      exampleSentenceGerman: "Ich kann einen seltsamen Geruch wahrnehmen.",
      exampleSentenceTurkish: "Garip bir koku algılayabiliyorum.",
    },
    {
      germanTerm: "Unzulänglichkeit",
      turkishTranslations: ["yetersizlik"],
      meaning: "Inadequacy or insufficiency.",
      exampleSentenceGerman: "Er fühlt eine Unzulänglichkeit in seiner Arbeit.",
      exampleSentenceTurkish: "İşinde bir yetersizlik hissediyor.",
    },
    {
      germanTerm: "darunter",
      turkishTranslations: ["bunların arasında", "bunun altında"],
      meaning: "Among them or under it.",
      exampleSentenceGerman: "Es gibt viele Bücher, darunter auch Klassiker.",
      exampleSentenceTurkish:
        "Pek çok kitap var, bunların arasında klasikler de bulunuyor.",
    },
    {
      germanTerm: "Der Einfluss",
      turkishTranslations: ["etki"],
      meaning: "Influence or impact.",
      exampleSentenceGerman: "Der Einfluss der Medien ist sehr groß.",
      exampleSentenceTurkish: "Medyanın etkisi çok büyük.",
    },
    {
      germanTerm: "behandeln",
      turkishTranslations: ["tedavi etmek", "ele almak"],
      meaning: "To treat or address.",
      exampleSentenceGerman: "Der Arzt behandelt viele Patienten.",
      exampleSentenceTurkish: "Doktor birçok hastayı tedavi ediyor.",
    },
    {
      germanTerm: "Art und Weise",
      turkishTranslations: ["tarz", "biçim"],
      meaning: "Manner or way.",
      exampleSentenceGerman: "Die Art und Weise seines Redens gefällt mir.",
      exampleSentenceTurkish: "Konuşma tarzı hoşuma gidiyor.",
    },
    {
      germanTerm: "entgegenzuwirken",
      turkishTranslations: ["karşı koymak", "engel olmak"],
      meaning: "To counteract or prevent.",
      exampleSentenceGerman: "Wir müssen der Verschmutzung entgegenzuwirken.",
      exampleSentenceTurkish: "Kirliliğe karşı koymalıyız.",
    },
    {
      germanTerm: "beinhaltet",
      turkishTranslations: ["içerir"],
      meaning: "Contains or includes.",
      exampleSentenceGerman: "Das Buch beinhaltet viele Beispiele.",
      exampleSentenceTurkish: "Kitap birçok örnek içeriyor.",
    },
    {
      germanTerm: "schaffen",
      turkishTranslations: ["başarmak", "yaratmak"],
      meaning: "To achieve or create.",
      exampleSentenceGerman: "Er hat die Prüfung geschafft.",
      exampleSentenceTurkish: "Sınavı başardı.",
    },
    {
      germanTerm: "Produktivität",
      turkishTranslations: ["verimlilik"],
      meaning: "Productivity.",
      exampleSentenceGerman: "Gute Organisation steigert die Produktivität.",
      exampleSentenceTurkish: "İyi organizasyon verimliliği artırır.",
    },
    {
      germanTerm: "insgesamt",
      turkishTranslations: ["toplamda", "genel olarak"],
      meaning: "In total or overall.",
      exampleSentenceGerman: "Insgesamt waren 50 Personen anwesend.",
      exampleSentenceTurkish: "Toplamda 50 kişi vardı.",
    },
    {
      germanTerm: "gedruckten Büchern",
      turkishTranslations: ["basılı kitaplar"],
      meaning: "Printed books (dative plural).",
      exampleSentenceGerman: "Viele Menschen lesen lieber gedruckte Bücher.",
      exampleSentenceTurkish:
        "Birçok insan basılı kitapları okumayı tercih eder.",
    },
    {
      germanTerm: "Konkurrenzkampf",
      turkishTranslations: ["rekabet mücadelesi"],
      meaning: "Competitive struggle.",
      exampleSentenceGerman: "Der Konkurrenzkampf zwischen Firmen ist hart.",
      exampleSentenceTurkish: "Şirketler arasındaki rekabet mücadelesi zorlu.",
    },
    {
      germanTerm: "Versand",
      turkishTranslations: ["gönderim", "sevkiyat"],
      meaning: "Shipping or dispatch.",
      exampleSentenceGerman: "Der Versand der Waren dauert drei Tage.",
      exampleSentenceTurkish: "Malların sevkiyatı üç gün sürüyor.",
    },
    {
      germanTerm: "verursacht",
      turkishTranslations: ["sebep olur"],
      meaning: "Causes or triggers.",
      exampleSentenceGerman: "Rauchen verursacht viele Krankheiten.",
      exampleSentenceTurkish: "Sigara içmek birçok hastalığa sebep olur.",
    },
    {
      germanTerm: "Im Gegensatz",
      turkishTranslations: ["aksine"],
      meaning: "In contrast.",
      exampleSentenceGerman: "Im Gegensatz zu ihm bin ich pünktlich.",
      exampleSentenceTurkish: "Ona aksine, ben dakikim.",
    },
    {
      germanTerm: "erschöpft",
      turkishTranslations: ["yorgun", "bitkin"],
      meaning: "Exhausted or depleted.",
      exampleSentenceGerman: "Nach der Arbeit war sie völlig erschöpft.",
      exampleSentenceTurkish: "İşten sonra tamamen bitkindi.",
    },
    {
      germanTerm: "konfrontiert",
      turkishTranslations: ["karşı karşıya kalmış"],
      meaning: "Confronted or faced with.",
      exampleSentenceGerman: "Wir sind mit großen Problemen konfrontiert.",
      exampleSentenceTurkish: "Büyük sorunlarla karşı karşıyayız.",
    },
    {
      germanTerm: "geeignete Maßnahmen",
      turkishTranslations: ["uygun önlemler"],
      meaning: "Appropriate measures.",
      exampleSentenceGerman: "Die Regierung ergreift geeignete Maßnahmen.",
      exampleSentenceTurkish: "Hükümet uygun önlemler alıyor.",
    },
    {
      germanTerm: "verschieben",
      turkishTranslations: ["ertelemek", "kaydırmak"],
      meaning: "To postpone or shift.",
      exampleSentenceGerman: "Das Treffen wurde auf morgen verschoben.",
      exampleSentenceTurkish: "Toplantı yarına ertelendi.",
    },
    {
      germanTerm: "begleitet",
      turkishTranslations: ["eşlik etti"],
      meaning: "Accompanied.",
      exampleSentenceGerman: "Er hat mich nach Hause begleitet.",
      exampleSentenceTurkish: "Bana eve kadar eşlik etti.",
    },
    {
      germanTerm: "maßgeblicher",
      turkishTranslations: ["belirleyici", "etkili"],
      meaning: "Decisive or influential.",
      exampleSentenceGerman: "Er spielte eine maßgebliche Rolle im Projekt.",
      exampleSentenceTurkish: "Projede belirleyici bir rol oynadı.",
    },
    {
      germanTerm: "Hindernissen",
      turkishTranslations: ["engellere"],
      meaning: "Obstacles (dative/genitive plural).",
      exampleSentenceGerman: "Sie standen großen Hindernissen gegenüber.",
      exampleSentenceTurkish: "Büyük engellerle karşılaştılar.",
    },
    {
      germanTerm: "bewältigt",
      turkishTranslations: ["üstesinden geldi"],
      meaning: "Overcame or managed.",
      exampleSentenceGerman: "Die Aufgabe wurde erfolgreich bewältigt.",
      exampleSentenceTurkish: "Görev başarıyla üstesinden gelindi.",
    },
    {
      germanTerm: "jedoch",
      turkishTranslations: ["ancak", "fakat"],
      meaning: "However or but.",
      exampleSentenceGerman: "Er wollte kommen, hatte jedoch keine Zeit.",
      exampleSentenceTurkish: "Gelmek istedi, ancak vakti yoktu.",
    },
    {
      germanTerm: "entsprechend",
      turkishTranslations: ["uygun olarak", "-e göre"],
      meaning: "Correspondingly or in accordance with.",
      exampleSentenceGerman: "Die Mitarbeiter wurden entsprechend bezahlt.",
      exampleSentenceTurkish: "Çalışanlar uygun olarak ödendi.",
    },
    {
      germanTerm: "Infolgedessen",
      turkishTranslations: ["bunun sonucunda"],
      meaning: "As a result or consequently.",
      exampleSentenceGerman: "Es regnete, infolgedessen fiel das Spiel aus.",
      exampleSentenceTurkish: "Yağmur yağdı, bunun sonucunda maç iptal oldu.",
    },
    {
      germanTerm: "kontinuierliche",
      turkishTranslations: ["sürekli", "kesintisiz"],
      meaning: "Continuous or uninterrupted (inflected form).",
      exampleSentenceGerman: "Wir brauchen eine kontinuierliche Verbesserung.",
      exampleSentenceTurkish: "Sürekli bir iyileştirme gerekiyor.",
    },
    {
      germanTerm: "Versorgung",
      turkishTranslations: ["tedarik", "bakım"],
      meaning: "Supply or care.",
      exampleSentenceGerman: "Die medizinische Versorgung ist wichtig.",
      exampleSentenceTurkish: "Tıbbi bakım önemlidir.",
    },
    {
      germanTerm: "aussprechen",
      turkishTranslations: ["telaffuz etmek", "ifade etmek"],
      meaning: "To pronounce or express.",
      exampleSentenceGerman: "Er konnte seine Meinung klar aussprechen.",
      exampleSentenceTurkish: "Düşüncesini açıkça ifade edebildi.",
    },
    {
      germanTerm: "Viehzucht",
      turkishTranslations: ["hayvancılık"],
      meaning: "Livestock farming.",
      exampleSentenceGerman: "In dieser Region ist Viehzucht sehr verbreitet.",
      exampleSentenceTurkish: "Bu bölgede hayvancılık çok yaygındır.",
    },
    {
      germanTerm: "Düngemitteln",
      turkishTranslations: ["gübreler"],
      meaning: "Fertilizers (dative plural).",
      exampleSentenceGerman:
        "Die Felder werden regelmäßig mit Düngemitteln behandelt.",
      exampleSentenceTurkish: "Tarlalar düzenli olarak gübrelerle işlenir.",
    },
    {
      germanTerm: "im Kindesalter",
      turkishTranslations: ["çocuklukta"],
      meaning: "In childhood.",
      exampleSentenceGerman:
        "Lesen lernen ist im Kindesalter besonders wichtig.",
      exampleSentenceTurkish:
        "Okumayı öğrenmek çocuklukta özellikle önemlidir.",
    },
    {
      germanTerm: "durchdachte Strategie",
      turkishTranslations: ["iyi düşünülmüş strateji"],
      meaning: "Well-thought-out strategy.",
      exampleSentenceGerman: "Eine durchdachte Strategie führt zum Erfolg.",
      exampleSentenceTurkish: "İyi düşünülmüş bir strateji başarıya götürür.",
    },
    {
      germanTerm: "beispielsweise",
      turkishTranslations: ["örneğin"],
      meaning: "For example.",
      exampleSentenceGerman:
        "Viele Sportarten, beispielsweise Fußball, machen Spaß.",
      exampleSentenceTurkish: "Birçok spor, örneğin futbol, eğlencelidir.",
    },
    {
      germanTerm: "Selbstbestimmung",
      turkishTranslations: ["kendi kendini belirleme", "özerklik"],
      meaning: "Self-determination or autonomy.",
      exampleSentenceGerman:
        "Selbstbestimmung ist ein grundlegendes Menschenrecht.",
      exampleSentenceTurkish:
        "Kendi kendini belirleme temel bir insan hakkıdır.",
    },
    {
      germanTerm: "im Einklang",
      turkishTranslations: ["uyum içinde"],
      meaning: "In harmony.",
      exampleSentenceGerman:
        "Die Arbeit steht im Einklang mit den Unternehmenszielen.",
      exampleSentenceTurkish: "Çalışma, şirket hedefleriyle uyum içindedir.",
    },
    {
      germanTerm: "berücksichtigt",
      turkishTranslations: ["dikkate alınmış"],
      meaning: "Taken into account or considered.",
      exampleSentenceGerman: "Alle Meinungen wurden berücksichtigt.",
      exampleSentenceTurkish: "Tüm görüşler dikkate alındı.",
    },
    {
      germanTerm: "einbezogen",
      turkishTranslations: ["dahil edilmiş", "katılmış"],
      meaning: "Included or involved.",
      exampleSentenceGerman: "Die Schüler wurden in die Planung einbezogen.",
      exampleSentenceTurkish: "Öğrenciler planlamaya dahil edildi.",
    },
    {
      germanTerm: "permanentes",
      turkishTranslations: ["sürekli", "kalıcı"],
      meaning: "Permanent or continuous (inflected form).",
      exampleSentenceGerman:
        "Permanentes Lernen ist für die persönliche Entwicklung wichtig.",
      exampleSentenceTurkish:
        "Sürekli öğrenme, kişisel gelişim için önemlidir.",
    },
    {
      germanTerm: "bereichernde",
      turkishTranslations: ["zenginleştirici", "faydalı"],
      meaning: "Enriching or beneficial (inflected form).",
      exampleSentenceGerman: "Reisen können bereichernde Erfahrungen bieten.",
      exampleSentenceTurkish:
        "Seyahatler zenginleştirici deneyimler sunabilir.",
    },
    {
      germanTerm: "erfülltes",
      turkishTranslations: ["tatmin edici", "dolu dolu"],
      meaning: "Fulfilling or satisfying (inflected form).",
      exampleSentenceGerman: "Ein erfülltes Leben bringt Zufriedenheit.",
      exampleSentenceTurkish: "Dolu dolu bir yaşam memnuniyet getirir.",
    },
    {
      germanTerm: "beinhalten",
      turkishTranslations: ["içermek", "kapsamak"],
      meaning: "To contain or include.",
      exampleSentenceGerman: "Das Buch beinhaltet viele nützliche Tipps.",
      exampleSentenceTurkish: "Kitap birçok faydalı ipucu içeriyor.",
    },
    {
      germanTerm: "Mangelnde Disziplin",
      turkishTranslations: ["yetersiz disiplin"],
      meaning: "Lack of discipline.",
      exampleSentenceGerman: "Mangelnde Disziplin führt oft zu Problemen.",
      exampleSentenceTurkish:
        "Yetersiz disiplin çoğu zaman sorunlara yol açar.",
    },
    {
      germanTerm: "gewährleisten",
      turkishTranslations: ["garanti etmek", "sağlamak"],
      meaning: "To guarantee or ensure.",
      exampleSentenceGerman:
        "Die Sicherheit der Patienten muss jederzeit gewährleistet werden.",
      exampleSentenceTurkish: "Hastaların güvenliği her zaman sağlanmalıdır.",
    },
    {
      germanTerm: "bewerten",
      turkishTranslations: ["değerlendirmek"],
      meaning: "To evaluate or assess.",
      exampleSentenceGerman: "Wir müssen die Ergebnisse sorgfältig bewerten.",
      exampleSentenceTurkish: "Sonuçları dikkatlice değerlendirmeliyiz.",
    },
    {
      germanTerm: "geeignet",
      turkishTranslations: ["uygun", "elverişli"],
      meaning: "Suitable or appropriate.",
      exampleSentenceGerman: "Dieses Buch ist für Anfänger geeignet.",
      exampleSentenceTurkish:
        "Bu kitap başlangıç seviyesindekiler için uygundur.",
    },
    {
      germanTerm: "missbraucht",
      turkishTranslations: ["kötüye kullanılmış", "suistimal edilmiş"],
      meaning: "Misused or abused.",
      exampleSentenceGerman: "Das Vertrauen wurde missbraucht.",
      exampleSentenceTurkish: "Güven kötüye kullanıldı.",
    },
    {
      germanTerm: "unterschätzt",
      turkishTranslations: ["küçümsenmiş", "hafife alınmış"],
      meaning: "Underestimated.",
      exampleSentenceGerman: "Die Risiken wurden unterschätzt.",
      exampleSentenceTurkish: "Riskler hafife alındı.",
    },
    {
      germanTerm: "Auseinandersetzung",
      turkishTranslations: ["tartışma", "mücadele"],
      meaning: "Discussion or conflict.",
      exampleSentenceGerman:
        "Die Auseinandersetzung über das Projekt war lang.",
      exampleSentenceTurkish: "Proje üzerine tartışma uzundu.",
    },
    {
      germanTerm: "verklären",
      turkishTranslations: ["yüceltmek", "idealize etmek"],
      meaning: "To idealize or romanticize.",
      exampleSentenceGerman: "Er verklärt die Vergangenheit oft.",
      exampleSentenceTurkish: "Geçmişi sık sık idealize ediyor.",
    },
    {
      germanTerm: "zurückgedrängt",
      turkishTranslations: ["geri itilmiş"],
      meaning: "Pushed back or relegated.",
      exampleSentenceGerman:
        "Die Probleme wurden in den Hintergrund zurückgedrängt.",
      exampleSentenceTurkish: "Sorunlar geri plana itildi.",
    },
    {
      germanTerm: "Zeitzeugengespräche",
      turkishTranslations: ["zaman tanığı görüşmeleri"],
      meaning: "Conversations with contemporary witnesses.",
      exampleSentenceGerman: "In der Schule fanden Zeitzeugengespräche statt.",
      exampleSentenceTurkish: "Okulda zaman tanığı görüşmeleri yapıldı.",
    },
    {
      germanTerm: "festhalten",
      turkishTranslations: ["tutmak", "kaydetmek"],
      meaning: "To hold or record.",
      exampleSentenceGerman:
        "Die Ergebnisse sollten schriftlich festgehalten werden.",
      exampleSentenceTurkish: "Sonuçlar yazılı olarak kaydedilmelidir.",
    },
    {
      germanTerm: "würdigen",
      turkishTranslations: ["takdir etmek"],
      meaning: "To appreciate or honor.",
      exampleSentenceGerman: "Man sollte die Arbeit der Freiwilligen würdigen.",
      exampleSentenceTurkish:
        "Gönüllülerin çalışmalarını takdir etmek gerekir.",
    },
    {
      germanTerm: "Freundschaften schließen",
      turkishTranslations: ["arkadaşlıklar kurmak"],
      meaning: "To make friends or form friendships.",
      exampleSentenceGerman:
        "In der neuen Schule fiel es ihm leicht, Freundschaften zu schließen.",
      exampleSentenceTurkish: "Yeni okulda arkadaşlıklar kurması kolay oldu.",
    },
    {
      germanTerm: "Verfahren",
      turkishTranslations: ["yöntem", "süreç"],
      meaning: "Method or procedure.",
      exampleSentenceGerman: "Dieses Verfahren ist sehr effektiv.",
      exampleSentenceTurkish: "Bu yöntem çok etkili.",
    },
    {
      germanTerm: "Wirksamkeit",
      turkishTranslations: ["etkililik"],
      meaning: "Effectiveness.",
      exampleSentenceGerman: "Die Wirksamkeit der Maßnahmen wurde überprüft.",
      exampleSentenceTurkish: "Tedbirlerin etkililiği kontrol edildi.",
    },
    {
      germanTerm: "Wohlbefinden",
      turkishTranslations: ["refah", "iyi olma durumu"],
      meaning: "Well-being.",
      exampleSentenceGerman: "Sport trägt zum Wohlbefinden bei.",
      exampleSentenceTurkish: "Spor, iyi olma durumuna katkı sağlar.",
    },
    {
      germanTerm: "vielversprechend",
      turkishTranslations: ["umut verici"],
      meaning: "Promising.",
      exampleSentenceGerman: "Das Projekt sieht vielversprechend aus.",
      exampleSentenceTurkish: "Proje umut verici görünüyor.",
    },
    {
      germanTerm: "Anstrengung",
      turkishTranslations: ["çaba"],
      meaning: "Effort or exertion.",
      exampleSentenceGerman: "Er erreichte das Ziel mit großer Anstrengung.",
      exampleSentenceTurkish: "Hedefe büyük çabayla ulaştı.",
    },
    {
      germanTerm: "beispiellosem",
      turkishTranslations: ["eşsiz", "benzersiz"],
      meaning: "Unprecedented (inflected form).",
      exampleSentenceGerman: "Die Region erlebte beispiellosem Wachstum.",
      exampleSentenceTurkish: "Bölge eşsiz bir büyüme yaşadı.",
    },
    {
      germanTerm: "schwerwiegenden",
      turkishTranslations: ["ciddi", "ağır"],
      meaning: "Serious or severe (inflected form).",
      exampleSentenceGerman: "Die Entscheidung hatte schwerwiegenden Folgen.",
      exampleSentenceTurkish: "Kararın ciddi sonuçları oldu.",
    },
    {
      germanTerm: "Egoshootern",
      turkishTranslations: ["birinci şahıs nişancı oyunları"],
      meaning: "First-person shooter games (dative plural).",
      exampleSentenceGerman: "Viele Jugendliche spielen Egoshooter.",
      exampleSentenceTurkish:
        "Birçok genç birinci şahıs nişancı oyunları oynuyor.",
    },
    {
      germanTerm: "schätzen",
      turkishTranslations: ["değer vermek", "tahmin etmek"],
      meaning: "To appreciate or estimate.",
      exampleSentenceGerman: "Ich schätze deine Hilfe sehr.",
      exampleSentenceTurkish: "Yardımına çok değer veriyorum.",
    },
    {
      germanTerm: "vorkommenden",
      turkishTranslations: ["meydana gelen", "görülen"],
      meaning: "Occurring or observed (inflected form).",
      exampleSentenceGerman: "Die vorkommenden Fehler müssen behoben werden.",
      exampleSentenceTurkish: "Meydana gelen hatalar düzeltilmelidir.",
    },
    {
      germanTerm: "Lebensweise",
      turkishTranslations: ["yaşam tarzı"],
      meaning: "Lifestyle.",
      exampleSentenceGerman: "Eine gesunde Lebensweise ist wichtig.",
      exampleSentenceTurkish: "Sağlıklı bir yaşam tarzı önemlidir.",
    },
    {
      germanTerm: "Bedarfs",
      turkishTranslations: ["ihtiyaç"],
      meaning: "Need or requirement (genitive/dative).",
      exampleSentenceGerman:
        "Der Unterricht wird dem Bedarf der Schüler angepasst.",
      exampleSentenceTurkish: "Ders öğrencilerin ihtiyacına göre uyarlanır.",
    },
    {
      germanTerm: "Erleichterung",
      turkishTranslations: ["kolaylaştırma", "rahatlama"],
      meaning: "Facilitation or relief.",
      exampleSentenceGerman: "Nach der Prüfung fühlte sie große Erleichterung.",
      exampleSentenceTurkish: "Sınavdan sonra büyük bir rahatlama hissetti.",
    },
    {
      germanTerm: "abrufen",
      turkishTranslations: ["çağırmak", "erişmek"],
      meaning: "To retrieve or access.",
      exampleSentenceGerman: "Daten können jederzeit abgerufen werden.",
      exampleSentenceTurkish: "Verilere her zaman erişilebilir.",
    },
    {
      germanTerm: "diejenigen",
      turkishTranslations: ["bunlar", "söz konusu olanlar"],
      meaning: "Those or the ones.",
      exampleSentenceGerman:
        "Diejenigen, die fleißig arbeiten, werden belohnt.",
      exampleSentenceTurkish: "Çalışkan olanlar ödüllendirilir.",
    },
    {
      germanTerm: "weiterbilden",
      turkishTranslations: ["kendini geliştirmek", "eğitim almak"],
      meaning: "To further educate or train.",
      exampleSentenceGerman: "Er möchte sich beruflich weiterbilden.",
      exampleSentenceTurkish: "Kariyerine yönelik kendini geliştirmek istiyor.",
    },
    {
      germanTerm: "entstanden",
      turkishTranslations: ["oluşmuş", "meydana gelmiş"],
      meaning: "Arisen or occurred.",
      exampleSentenceGerman: "Durch den Sturm sind große Schäden entstanden.",
      exampleSentenceTurkish: "Fırtına sonucunda büyük zararlar meydana geldi.",
    },
    {
      germanTerm: "Messaging-Dienste",
      turkishTranslations: ["mesajlaşma servisleri"],
      meaning: "Messaging services.",
      exampleSentenceGerman:
        "WhatsApp und Signal sind beliebte Messaging-Dienste.",
      exampleSentenceTurkish:
        "WhatsApp ve Signal popüler mesajlaşma servisleridir.",
    },
    {
      germanTerm: "Burnout",
      turkishTranslations: ["tükenmişlik sendromu"],
      meaning: "Burnout syndrome.",
      exampleSentenceGerman: "Immer mehr Arbeitnehmer leiden unter Burnout.",
      exampleSentenceTurkish:
        "Giderek daha fazla çalışan tükenmişlikten muzdarip.",
    },
    {
      germanTerm: "betrifft",
      turkishTranslations: ["ilgilendirmek"],
      meaning: "To concern or affect.",
      exampleSentenceGerman: "Die neue Regelung betrifft alle Mitarbeiter.",
      exampleSentenceTurkish: "Yeni düzenleme tüm çalışanları ilgilendiriyor.",
    },
    {
      germanTerm: "ergreifen",
      turkishTranslations: ["yakalamak", "ele geçirmek", "önlem almak"],
      meaning: "To seize, take, or take measures.",
      exampleSentenceGerman: "Die Regierung muss dringend Maßnahmen ergreifen.",
      exampleSentenceTurkish: "Hükümet acilen önlemler almak zorunda.",
    },
    {
      germanTerm: "Steuerung",
      turkishTranslations: ["kontrol", "yönlendirme"],
      meaning: "Control or steering.",
      exampleSentenceGerman: "Die Maschine wird von einem Computer gesteuert.",
      exampleSentenceTurkish:
        "Makine bir bilgisayar tarafından kontrol ediliyor.",
    },
    {
      germanTerm: "Einführung",
      turkishTranslations: ["giriş", "tanıtım"],
      meaning: "Introduction or initiation.",
      exampleSentenceGerman:
        "Der Kurs beginnt mit einer Einführung in die Mathematik.",
      exampleSentenceTurkish: "Kurs matematiğe giriş ile başlıyor.",
    },
    {
      germanTerm: "Ernährungsweise",
      turkishTranslations: ["beslenme biçimi"],
      meaning: "Diet or eating habits.",
      exampleSentenceGerman: "Eine ausgewogene Ernährungsweise ist wichtig.",
      exampleSentenceTurkish: "Dengeli bir beslenme biçimi önemlidir.",
    },
    {
      germanTerm: "gestrichen",
      turkishTranslations: ["iptal edilmiş", "boyanmış"],
      meaning: "Canceled or painted.",
      exampleSentenceGerman: "Der Termin wurde gestrichen.",
      exampleSentenceTurkish: "Randevu iptal edildi.",
    },
    {
      germanTerm: "Gesteuert",
      turkishTranslations: ["yönetilen", "kontrol edilen"],
      meaning: "Controlled or managed.",
      exampleSentenceGerman: "Das Auto wird automatisch gesteuert.",
      exampleSentenceTurkish: "Araba otomatik olarak kontrol ediliyor.",
    },
    {
      germanTerm: "Lüften",
      turkishTranslations: ["havalandırmak", "açığa çıkarmak"],
      meaning: "To ventilate or reveal.",
      exampleSentenceGerman: "Ich lüfte jeden Morgen das Schlafzimmer.",
      exampleSentenceTurkish: "Her sabah yatak odasını havalandırırım.",
    },
    {
      germanTerm: "generieren",
      turkishTranslations: ["üretmek", "oluşturmak"],
      meaning: "To generate or create.",
      exampleSentenceGerman: "Das Programm generiert automatisch ein Passwort.",
      exampleSentenceTurkish: "Program otomatik olarak bir şifre oluşturuyor.",
    },
    {
      germanTerm: "den Horizont erweitern",
      turkishTranslations: ["ufkunu genişletmek"],
      meaning: "To broaden one's horizons.",
      exampleSentenceGerman:
        "Reisen ins Ausland können den Horizont erweitern.",
      exampleSentenceTurkish: "Yurt dışına seyahat etmek ufku genişletebilir.",
    },
    {
      germanTerm: "Sicht",
      turkishTranslations: ["görüş", "bakış açısı", "manzara"],
      meaning: "View, perspective, or scenery.",
      exampleSentenceGerman: "Aus meiner Sicht ist das eine gute Idee.",
      exampleSentenceTurkish: "Benim bakış açıma göre bu iyi bir fikir.",
    },
    {
      germanTerm: "Einschränkung",
      turkishTranslations: ["kısıtlama", "sınırlama"],
      meaning: "Restriction or limitation.",
      exampleSentenceGerman:
        "Die Einschränkung der Freiheit ist ein sensibles Thema.",
      exampleSentenceTurkish: "Özgürlüğün kısıtlanması hassas bir konudur.",
    },
    {
      germanTerm: "aneignen",
      turkishTranslations: ["edinmek", "öğrenmek", "sahiplenmek"],
      meaning: "To acquire, learn, or appropriate.",
      exampleSentenceGerman: "Er hat sich gute Deutschkenntnisse angeeignet.",
      exampleSentenceTurkish: "İyi Almanca bilgisi edindi.",
    },
    {
      germanTerm: "Burnout-Risiko",
      turkishTranslations: ["tükenmişlik riski"],
      meaning: "Risk of burnout.",
      exampleSentenceGerman: "Lehrer haben ein erhöhtes Burnout-Risiko.",
      exampleSentenceTurkish:
        "Öğretmenler daha yüksek bir tükenmişlik riski taşır.",
    },
    {
      germanTerm: "als Voraussetzung für beruflichen Erfolg",
      turkishTranslations: ["mesleki başarı için ön koşul olarak"],
      meaning: "As a prerequisite for professional success.",
      exampleSentenceGerman:
        "Teamfähigkeit gilt als Voraussetzung für beruflichen Erfolg.",
      exampleSentenceTurkish:
        "Takım çalışmasına yatkınlık, mesleki başarı için ön koşuldur.",
    },
    {
      germanTerm: "Leidenschaften vernachlässigen",
      turkishTranslations: ["tutkularını ihmal etmek"],
      meaning: "To neglect one's passions.",
      exampleSentenceGerman:
        "Viele Menschen vernachlässigen ihre Leidenschaften wegen der Arbeit.",
      exampleSentenceTurkish:
        "Birçok insan işi yüzünden tutkularını ihmal ediyor.",
    },
    {
      germanTerm: "Maßnahmen",
      turkishTranslations: ["önlemler", "tedbirler"],
      meaning: "Measures or actions.",
      exampleSentenceGerman:
        "Die Regierung hat neue Maßnahmen gegen die Inflation beschlossen.",
      exampleSentenceTurkish: "Hükümet enflasyona karşı yeni önlemler aldı.",
    },
    {
      germanTerm: "anzubieten",
      turkishTranslations: ["sunmak", "teklif etmek"],
      meaning: "To offer or provide.",
      exampleSentenceGerman:
        "Die Firma hat beschlossen, neue Dienstleistungen anzubieten.",
      exampleSentenceTurkish: "Şirket yeni hizmetler sunmaya karar verdi.",
    },
    {
      germanTerm: "Maß",
      turkishTranslations: ["ölçü", "miktar", "boyut"],
      meaning: "Measure, amount, or extent.",
      exampleSentenceGerman: "Ein gewisses Maß an Disziplin ist notwendig.",
      exampleSentenceTurkish: "Belirli bir ölçüde disiplin gereklidir.",
    },
    {
      germanTerm: "Ressourcen",
      turkishTranslations: ["kaynaklar"],
      meaning: "Resources.",
      exampleSentenceGerman:
        "Die natürlichen Ressourcen der Erde sind begrenzt.",
      exampleSentenceTurkish: "Dünya’nın doğal kaynakları sınırlıdır.",
    },
    {
      germanTerm: "eine unrealistische Vorstellung",
      turkishTranslations: ["gerçekçi olmayan bir düşünce", "beklenti"],
      meaning: "An unrealistic idea or expectation.",
      exampleSentenceGerman:
        "Zu glauben, dass man ohne Anstrengung Erfolg hat, ist eine unrealistische Vorstellung.",
      exampleSentenceTurkish:
        "Çabasız başarıya ulaşılacağına inanmak gerçekçi olmayan bir düşüncedir.",
    },
    {
      germanTerm: "immer mehr",
      turkishTranslations: ["giderek daha fazla"],
      meaning: "Increasingly or more and more.",
      exampleSentenceGerman:
        "Immer mehr Menschen interessieren sich für gesunde Ernährung.",
      exampleSentenceTurkish:
        "Giderek daha fazla insan sağlıklı beslenmeye ilgi duyuyor.",
    },
    {
      germanTerm: "Eigenverantwortung",
      turkishTranslations: ["kişisel sorumluluk"],
      meaning: "Personal responsibility.",
      exampleSentenceGerman:
        "Kinder sollten lernen, Eigenverantwortung zu übernehmen.",
      exampleSentenceTurkish:
        "Çocuklar kendi sorumluluklarını üstlenmeyi öğrenmelidir.",
    },
    {
      germanTerm: "Leitlinien",
      turkishTranslations: ["yol gösterici ilkeler", "rehber ilkeler"],
      meaning: "Guidelines or guiding principles.",
      exampleSentenceGerman:
        "Die Leitlinien für die Behandlung von Diabetes wurden aktualisiert.",
      exampleSentenceTurkish:
        "Diyabet tedavisi için rehber ilkeler güncellendi.",
    },
    {
      germanTerm: "stammt",
      turkishTranslations: ["gelmektedir", "köken almaktadır"],
      meaning: "Comes from or originates.",
      exampleSentenceGerman: "Er stammt aus der Türkei.",
      exampleSentenceTurkish: "O, Türkiye’den gelmektedir.",
    },
    {
      germanTerm: "zeitgemäß",
      turkishTranslations: ["çağa uygun", "günümüz şartlarına uygun"],
      meaning: "Contemporary or up-to-date.",
      exampleSentenceGerman: "Wir brauchen eine zeitgemäße Lösung.",
      exampleSentenceTurkish: "Zamana uygun bir çözüme ihtiyacımız var.",
    },
    {
      germanTerm: "zurückzudrängen",
      turkishTranslations: ["geri püskürtmek", "bastırmak", "geriletmek"],
      meaning: "To push back, suppress, or repel.",
      exampleSentenceGerman:
        "Die Polizei versuchte, die Menge zurückzudrängen.",
      exampleSentenceTurkish: "Polis kalabalığı geri püskürtmeye çalıştı.",
    },
    {
      germanTerm: "beseitigen",
      turkishTranslations: ["gidermek", "ortadan kaldırmak", "yok etmek"],
      meaning: "To eliminate or remove.",
      exampleSentenceGerman: "Der Techniker konnte den Fehler beseitigen.",
      exampleSentenceTurkish: "Teknisyen hatayı giderdi.",
    },
    {
      germanTerm: "signifikanten",
      turkishTranslations: [
        "önemli",
        "dikkate değer",
        "istatistiksel olarak anlamlı",
      ],
      meaning: "Significant or noteworthy (inflected form).",
      exampleSentenceGerman: "Es gibt einen signifikanten Unterschied.",
      exampleSentenceTurkish: "Önemli bir fark vardır.",
    },
    {
      germanTerm: "eine Überbetonung der Vermittlung",
      turkishTranslations: ["aktarmaya/öğretmeye aşırı vurgu"],
      meaning: "An overemphasis on transmission/teaching.",
      exampleSentenceGerman:
        "Eine Überbetonung der Vermittlung von Fakten ist nicht sinnvoll.",
      exampleSentenceTurkish:
        "Olguların aktarımına aşırı vurgu yapmak mantıklı değildir.",
    },
    {
      germanTerm: "auszuführen",
      turkishTranslations: [
        "yerine getirmek",
        "açıklamak",
        "dışarı çıkarmak",
        "ihraç etmek",
      ],
      meaning: "To carry out, explain, take out, or export.",
      exampleSentenceGerman: "Die Aufgabe ist sorgfältig auszuführen.",
      exampleSentenceTurkish: "Görev özenle yerine getirilmelidir.",
    },
    {
      germanTerm: "vielversprechendsten",
      turkishTranslations: ["en umut verici", "en gelecek vadeden"],
      meaning: "Most promising (inflected superlative form).",
      exampleSentenceGerman: "Das ist die vielversprechendste Methode.",
      exampleSentenceTurkish: "Bu en umut verici yöntemdir.",
    },
    {
      germanTerm: "versprechend",
      turkishTranslations: ["vaat eden", "umut verici"],
      meaning: "Promising or hopeful.",
      exampleSentenceGerman: "Das klingt versprechend.",
      exampleSentenceTurkish: "Bu kulağa umut verici geliyor.",
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
