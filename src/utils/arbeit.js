const arbeit = [
  {
    sentence: "Die Arbeitswelt hat sich in den letzten Jahren stark verändert.",
    translation: "Son yıllarda iş dünyası büyük ölçüde değişti.",
  },
  {
    sentence: "Viele Berufe gibt es heute nicht mehr.",
    translation: "Birçok meslek bugün artık yok.",
  },
  {
    sentence: "Neue Berufe entstehen durch Digitalisierung und Technik.",
    translation:
      "Sayısallaşma ve teknolojiyle birlikte yeni meslekler ortaya çıkıyor.",
  },
  {
    sentence: "Flexibilität ist heute im Job besonders wichtig.",
    translation: "İş hayatında esneklik bugün özellikle önemlidir.",
  },
  {
    sentence: "Viele Menschen arbeiten nicht mehr von 9 bis 17 Uhr.",
    translation: "Birçok insan artık sabah 9’dan akşam 5’e kadar çalışmıyor.",
  },
  {
    sentence: "Homeoffice und Teilzeitarbeit sind weit verbreitet.",
    translation: "Evden çalışma ve yarı zamanlı işler yaygındır.",
  },
  {
    sentence: "Auch die Work-Life-Balance wird immer bedeutender.",
    translation: "İş-yaşam dengesi de giderek daha önemli hâle geliyor.",
  },
  {
    sentence: "Arbeitnehmer wünschen sich mehr Freizeit und weniger Stress.",
    translation: "Çalışanlar daha fazla boş zaman ve daha az stres istiyor.",
  },
  {
    sentence: "In vielen Berufen ist Teamarbeit unerlässlich.",
    translation: "Birçok meslekte ekip çalışması vazgeçilmezdir.",
  },
  {
    sentence: "Kommunikation und soziale Kompetenz sind gefragter denn je.",
    translation:
      "İletişim ve sosyal beceriler her zamankinden daha çok talep ediliyor.",
  },
  {
    sentence:
      "Manche Berufe erfordern spezielle Ausbildungen oder Studiengänge.",
    translation:
      "Bazı meslekler özel eğitim ya da üniversite bölümleri gerektirir.",
  },
  {
    sentence: "Handwerksberufe sind in Deutschland sehr anerkannt.",
    translation: "Almanya’da zanaat meslekleri oldukça saygı görür.",
  },
  {
    sentence: "Es gibt aber auch einen Fachkräftemangel in vielen Bereichen.",
    translation: "Ancak birçok alanda nitelikli iş gücü eksikliği vardır.",
  },
  {
    sentence: "Daher fördert der Staat berufliche Weiterbildung.",
    translation: "Bu yüzden devlet mesleki gelişimi destekler.",
  },
  {
    sentence: "Viele Menschen entscheiden sich für eine Umschulung.",
    translation: "Birçok insan meslek değiştirmeye karar veriyor.",
  },
  {
    sentence: "Besonders in der IT-Branche gibt es gute Zukunftschancen.",
    translation: "Özellikle bilişim sektöründe iyi gelecek fırsatları vardır.",
  },
  {
    sentence: "Programmierer und Datenanalysten sind sehr gefragt.",
    translation: "Yazılımcılar ve veri analistleri çok talep görüyor.",
  },
  {
    sentence: "Auch Pflegekräfte und Erzieher werden dringend gebraucht.",
    translation:
      "Ayrıca bakım personeli ve eğitmenlere de acil ihtiyaç vardır.",
  },
  {
    sentence: "In Bewerbungsgesprächen zählt neben Fachwissen auch Auftreten.",
    translation:
      "İş görüşmelerinde teknik bilginin yanı sıra duruş da önemlidir.",
  },
  {
    sentence: "Ein überzeugender Lebenslauf ist dabei sehr hilfreich.",
    translation: "Etkileyici bir özgeçmiş bu konuda çok yardımcıdır.",
  },
  {
    sentence:
      "Soft Skills werden genauso geschätzt wie technische Fähigkeiten.",
    translation: "Yumuşak beceriler, teknik beceriler kadar değer görür.",
  },
  {
    sentence: "Viele junge Leute möchten selbstständig arbeiten.",
    translation: "Birçok genç kendi işini yapmak istiyor.",
  },
  {
    sentence: "Die Zahl der Start-ups steigt in vielen Städten.",
    translation: "Birçok şehirde start-up sayısı artıyor.",
  },
  {
    sentence: "Selbstständigkeit bedeutet aber auch mehr Verantwortung.",
    translation: "Ancak kendi işini yapmak daha fazla sorumluluk demektir.",
  },
  {
    sentence:
      "Die Arbeit sollte nicht nur Geld bringen, sondern auch erfüllen.",
    translation:
      "İş sadece para kazandırmamalı, aynı zamanda tatmin de sağlamalıdır.",
  },
  {
    sentence:
      "Beruf und Leidenschaft zu verbinden ist ein Ziel vieler Menschen.",
    translation: "Birçok insan mesleğiyle tutkusunu birleştirmeyi hedefler.",
  },
  {
    sentence: "Manche suchen nach einem “sinnvollen” Beruf.",
    translation: "Bazıları “anlamlı” bir meslek arar.",
  },
  {
    sentence: "Die Berufswahl beeinflusst oft das ganze Leben.",
    translation: "Meslek seçimi genellikle tüm hayatı etkiler.",
  },
  {
    sentence:
      "Eltern und Lehrer spielen eine wichtige Rolle bei der Berufsberatung.",
    translation:
      "Ebeveynler ve öğretmenler meslek danışmanlığında önemli rol oynar.",
  },
  {
    sentence: "Praktika helfen, verschiedene Berufe kennenzulernen.",
    translation: "Stajlar farklı meslekleri tanımaya yardımcı olur.",
  },
  {
    sentence: "Viele Schüler machen ein freiwilliges soziales Jahr.",
    translation: "Birçok öğrenci gönüllü sosyal yıl yapar.",
  },
  {
    sentence: "Die Arbeitslosigkeit ist in manchen Regionen höher.",
    translation: "Bazı bölgelerde işsizlik daha yüksektir.",
  },
  {
    sentence: "Langzeitarbeitslosigkeit kann psychisch belastend sein.",
    translation: "Uzun süreli işsizlik ruhsal olarak yorucu olabilir.",
  },
  {
    sentence: "Programme zur Integration in den Arbeitsmarkt sind wichtig.",
    translation: "İşgücü piyasasına entegrasyon programları önemlidir.",
  },
  {
    sentence:
      "Die Zukunft der Arbeit wird von KI und Automatisierung beeinflusst.",
    translation:
      "İşin geleceği yapay zekâ ve otomasyon tarafından şekillenecek.",
  },
  {
    sentence: "Roboter übernehmen einfache oder gefährliche Aufgaben.",
    translation: "Robotlar basit veya tehlikeli görevleri üstleniyor.",
  },
  {
    sentence: "Kreative und soziale Berufe bleiben vom Wandel eher unberührt.",
    translation:
      "Yaratıcı ve sosyal meslekler bu değişimden daha az etkilenir.",
  },
  {
    sentence: "Lebenslanges Lernen wird immer wichtiger.",
    translation: "Hayat boyu öğrenme giderek daha önemli hâle geliyor.",
  },
  {
    sentence: "Wer flexibel bleibt, hat bessere Chancen im Berufsleben.",
    translation: "Esnek kalan kişiler iş hayatında daha iyi şansa sahiptir.",
  },
  {
    sentence: "Die Arbeitswelt der Zukunft verlangt neue Denkweisen.",
    translation: "Geleceğin iş dünyası yeni düşünme biçimleri gerektiriyor.",
  },
];
export default arbeit;
