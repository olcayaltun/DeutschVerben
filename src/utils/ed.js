const ed = [
  {
    sentence: "Bildung ist ein zentraler Bestandteil jeder Gesellschaft.",
    translation: "Eğitim her toplumun temel bir parçasıdır.",
  },
  {
    sentence: "Sie beginnt bereits im frühen Kindesalter.",
    translation: "Eğitim çok küçük yaşlarda başlar.",
  },
  {
    sentence: "Kindergärten fördern die soziale und sprachliche Entwicklung.",
    translation: "Anaokulları sosyal ve dil gelişimini destekler.",
  },
  {
    sentence: "In der Schule erwerben Kinder grundlegende Kenntnisse.",
    translation: "Okulda çocuklar temel bilgileri edinir.",
  },
  {
    sentence: "Mathe, Lesen und Schreiben sind die Basis für weiteres Lernen.",
    translation: "Matematik, okuma ve yazma, sonraki öğrenmelerin temelidir.",
  },
  {
    sentence: "Der Zugang zu Bildung ist ein Menschenrecht.",
    translation: "Eğitime erişim bir insan hakkıdır.",
  },
  {
    sentence: "Leider ist sie weltweit nicht für alle gleich verfügbar.",
    translation: "Ne yazık ki dünya genelinde herkese eşit şekilde sunulmaz.",
  },
  {
    sentence: "Armut und soziale Ungleichheit erschweren die Bildungschancen.",
    translation:
      "Yoksulluk ve toplumsal eşitsizlik eğitim fırsatlarını zorlaştırır.",
  },
  {
    sentence:
      "In Deutschland besteht eine Schulpflicht bis zum 18. Lebensjahr.",
    translation: "Almanya’da 18 yaşına kadar eğitim zorunludur.",
  },
  {
    sentence:
      "Danach können Jugendliche eine Ausbildung oder ein Studium beginnen.",
    translation:
      "Daha sonra gençler bir meslek eğitimi ya da üniversiteye başlayabilir.",
  },
  {
    sentence:
      "Berufsausbildungen sind eine wichtige Alternative zur Universität.",
    translation: "Mesleki eğitim, üniversiteye önemli bir alternatiftir.",
  },
  {
    sentence: "Theorie und Praxis werden dabei miteinander kombiniert.",
    translation: "Bu eğitimde teori ve pratik birleştirilir.",
  },
  {
    sentence: "Immer mehr Menschen entscheiden sich für eine Weiterbildung.",
    translation: "Giderek daha fazla insan bir ek eğitim almayı tercih ediyor.",
  },
  {
    sentence: "Der Arbeitsmarkt verändert sich ständig.",
    translation: "İş piyasası sürekli değişiyor.",
  },
  {
    sentence: "Neue Technologien erfordern neue Kompetenzen.",
    translation: "Yeni teknolojiler yeni beceriler gerektiriyor.",
  },
  {
    sentence: "Lebenslanges Lernen wird deshalb immer wichtiger.",
    translation:
      "Bu nedenle yaşam boyu öğrenme giderek daha önemli hale geliyor.",
  },
  {
    sentence: "Online-Kurse und digitale Plattformen machen Lernen flexibler.",
    translation:
      "Online kurslar ve dijital platformlar öğrenmeyi daha esnek kılıyor.",
  },
  {
    sentence: "Man kann heute von überall aus Neues lernen.",
    translation: "Günümüzde her yerden yeni şeyler öğrenmek mümkün.",
  },
  {
    sentence: "Auch Erwachsene kehren oft ins Klassenzimmer zurück.",
    translation: "Yetişkinler de sık sık yeniden sınıfa dönüyor.",
  },
  {
    sentence: "Sprachkurse, Computerkurse oder Abendschulen sind sehr gefragt.",
    translation:
      "Dil kursları, bilgisayar kursları ve akşam okulları oldukça rağbet görüyor.",
  },
  {
    sentence: "Bildung fördert nicht nur beruflichen Erfolg.",
    translation: "Eğitim sadece mesleki başarıyı desteklemez.",
  },
  {
    sentence:
      "Sie stärkt auch das Selbstbewusstsein und die Persönlichkeitsentwicklung.",
    translation: "Aynı zamanda özgüveni ve kişisel gelişimi de güçlendirir.",
  },
  {
    sentence: "Wer gut gebildet ist, trifft bessere Entscheidungen im Leben.",
    translation: "İyi eğitim almış kişiler hayatta daha iyi kararlar verir.",
  },
  {
    sentence:
      "Eine gut informierte Gesellschaft ist demokratischer und offener.",
    translation:
      "İyi bilgilendirilmiş bir toplum daha demokratik ve açık olur.",
  },
  {
    sentence: "Auch kulturelle Bildung ist von großer Bedeutung.",
    translation: "Kültürel eğitim de büyük önem taşır.",
  },
  {
    sentence: "Sie fördert Kreativität und kritisches Denken.",
    translation: "Yaratıcılığı ve eleştirel düşünmeyi destekler.",
  },
  {
    sentence: "Museen, Theater und Bücher sind Bildungsquellen.",
    translation: "Müzeler, tiyatrolar ve kitaplar birer eğitim kaynağıdır.",
  },
  {
    sentence: "Lehrer und Lehrerinnen haben eine große Verantwortung.",
    translation: "Öğretmenlerin büyük bir sorumluluğu vardır.",
  },
  {
    sentence: "Sie begleiten Kinder und Jugendliche auf ihrem Weg.",
    translation: "Çocuklara ve gençlere yollarında eşlik ederler.",
  },
  {
    sentence: "Gute Bildung braucht gute Rahmenbedingungen.",
    translation: "İyi bir eğitim iyi şartlar gerektirir.",
  },
  {
    sentence:
      "Dazu gehören moderne Schulen, motivierte Lehrer und genügend Material.",
    translation:
      "Buna modern okullar, motive öğretmenler ve yeterli materyal dahildir.",
  },
  {
    sentence: "Bildungspolitik spielt dabei eine entscheidende Rolle.",
    translation: "Eğitim politikası bu noktada belirleyici bir rol oynar.",
  },
  {
    sentence: "Investitionen in Bildung zahlen sich langfristig aus.",
    translation: "Eğitime yapılan yatırımlar uzun vadede karşılığını verir.",
  },
  {
    sentence:
      "Unternehmen profitieren ebenfalls von gut ausgebildeten Fachkräften.",
    translation: "Şirketler de iyi eğitim almış uzmanlardan fayda sağlar.",
  },
  {
    sentence:
      "Internationale Bildungsprogramme fördern den Austausch zwischen Ländern.",
    translation:
      "Uluslararası eğitim programları ülkeler arasında etkileşimi teşvik eder.",
  },
  {
    sentence: "Erasmus ist ein bekanntes Beispiel dafür.",
    translation: "Erasmus buna bilinen bir örnektir.",
  },
  {
    sentence: "Bildung kann Brücken zwischen Kulturen bauen.",
    translation: "Eğitim kültürler arasında köprüler kurabilir.",
  },
  {
    sentence: "Sie hilft, Vorurteile abzubauen und Toleranz zu fördern.",
    translation:
      "Önyargıları azaltmaya ve hoşgörüyü geliştirmeye yardımcı olur.",
  },
  {
    sentence: "Jeder Mensch sollte die Chance auf gute Bildung haben.",
    translation:
      "Her insan iyi bir eğitime sahip olma şansına sahip olmalıdır.",
  },
  {
    sentence: "Denn Bildung ist der Schlüssel zu einer besseren Zukunft.",
    translation: "Çünkü eğitim daha iyi bir geleceğin anahtarıdır.",
  },
];
export default ed;
