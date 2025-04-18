const gesund = [
  {
    sentence: "Gesundheit ist das höchste Gut des Menschen.",
    translation: "Sağlık, insanın sahip olduğu en değerli şeydir.",
  },
  {
    sentence: "Ohne Gesundheit kann man das Leben nicht voll genießen.",
    translation: "Sağlık olmadan hayatın tadını tam olarak çıkaramazsın.",
  },
  {
    sentence: "Eine gesunde Ernährung spielt dabei eine wichtige Rolle.",
    translation: "Sağlıklı beslenme bu konuda önemli bir rol oynar.",
  },
  {
    sentence: "Obst und Gemüse enthalten viele Vitamine und Mineralstoffe.",
    translation: "Meyve ve sebzeler birçok vitamin ve mineral içerir.",
  },
  {
    sentence: "Zucker und Fett sollten nur in Maßen konsumiert werden.",
    translation: "Şeker ve yağ sadece ölçülü şekilde tüketilmelidir.",
  },
  {
    sentence: "Auch regelmäßige Bewegung ist sehr wichtig.",
    translation: "Düzenli hareket de çok önemlidir.",
  },
  {
    sentence: "Schon ein täglicher Spaziergang kann die Gesundheit verbessern.",
    translation: "Günlük bir yürüyüş bile sağlığı iyileştirebilir.",
  },
  {
    sentence: "Sport stärkt das Herz-Kreislauf-System und das Immunsystem.",
    translation:
      "Spor, kalp-dolaşım sistemini ve bağışıklık sistemini güçlendirir.",
  },
  {
    sentence:
      "Wer sich regelmäßig bewegt, fühlt sich fitter und ausgeglichener.",
    translation:
      "Düzenli hareket eden kişi kendini daha dinç ve dengeli hisseder.",
  },
  {
    sentence: "Ausreichend Schlaf ist ebenfalls notwendig für die Gesundheit.",
    translation: "Yeterli uyku da sağlık için gereklidir.",
  },
  {
    sentence: "Der Körper braucht Zeit zur Regeneration.",
    translation: "Vücudun yenilenmek için zamana ihtiyacı vardır.",
  },
  {
    sentence: "Stress kann auf Dauer krank machen.",
    translation: "Stres uzun vadede hastalığa yol açabilir.",
  },
  {
    sentence: "Entspannungsübungen wie Yoga oder Meditation helfen dagegen.",
    translation:
      "Yoga veya meditasyon gibi gevşeme egzersizleri buna karşı yardımcı olur.",
  },
  {
    sentence: "Auch soziale Kontakte sind gut für das seelische Wohlbefinden.",
    translation: "Sosyal ilişkiler ruhsal sağlık için de iyidir.",
  },
  {
    sentence: "Wer gute Freunde hat, lebt oft gesünder und glücklicher.",
    translation:
      "İyi arkadaşlara sahip olanlar genellikle daha sağlıklı ve mutlu yaşar.",
  },
  {
    sentence:
      "Rauchen und übermäßiger Alkoholkonsum sind gesundheitsschädlich.",
    translation: "Sigara içmek ve aşırı alkol tüketimi sağlığa zararlıdır.",
  },
  {
    sentence: "Viele Menschen versuchen, mit dem Rauchen aufzuhören.",
    translation: "Birçok insan sigarayı bırakmaya çalışıyor.",
  },
  {
    sentence: "Dabei helfen Beratung und Nikotinersatzprodukte.",
    translation:
      "Danışmanlık ve nikotin yerine geçen ürünler bu konuda yardımcı olur.",
  },
  {
    sentence: "Auch eine ausgewogene Work-Life-Balance ist wichtig.",
    translation: "Dengeli bir iş-yaşam dengesi de önemlidir.",
  },
  {
    sentence: "Wer ständig arbeitet, riskiert ein Burnout.",
    translation: "Sürekli çalışan biri tükenmişlik sendromu riski taşır.",
  },
  {
    sentence: "Deshalb sollte man sich regelmäßig Pausen gönnen.",
    translation: "Bu yüzden düzenli olarak kendine ara vermelisin.",
  },
  {
    sentence: "Vorsorgeuntersuchungen helfen, Krankheiten früh zu erkennen.",
    translation:
      "Önleyici kontroller hastalıkları erken teşhis etmeye yardımcı olur.",
  },
  {
    sentence: "Impfungen schützen vor gefährlichen Infektionen.",
    translation: "Aşılar tehlikeli enfeksiyonlara karşı korur.",
  },
  {
    sentence: "In der Pandemie haben wir gesehen, wie wichtig Hygiene ist.",
    translation: "Pandemi sırasında hijyenin ne kadar önemli olduğunu gördük.",
  },
  {
    sentence: "Hände waschen kann viele Krankheiten verhindern.",
    translation: "Ellerin yıkanması birçok hastalığı önleyebilir.",
  },
  {
    sentence:
      "In vielen Ländern ist der Zugang zu medizinischer Versorgung schwierig.",
    translation: "Birçok ülkede sağlık hizmetlerine erişim zordur.",
  },
  {
    sentence: "In Deutschland ist das Gesundheitssystem gut ausgebaut.",
    translation: "Almanya’da sağlık sistemi iyi gelişmiştir.",
  },
  {
    sentence: "Jeder Mensch hat Anspruch auf eine Krankenversicherung.",
    translation: "Her bireyin sağlık sigortasına hakkı vardır.",
  },
  {
    sentence: "Ärzte und Pflegepersonal leisten eine wertvolle Arbeit.",
    translation: "Doktorlar ve sağlık çalışanları değerli bir iş yapıyor.",
  },
  {
    sentence: "Besonders in Notfällen sind sie unersetzlich.",
    translation: "Özellikle acil durumlarda onlar vazgeçilmezdir.",
  },
  {
    sentence: "Eine gute Gesundheitspolitik schützt die Bevölkerung.",
    translation: "İyi bir sağlık politikası halkı korur.",
  },
  {
    sentence: "Auch Bildung über Gesundheit ist wichtig.",
    translation: "Sağlık hakkında eğitim de önemlidir.",
  },
  {
    sentence: "Schon Kinder sollten lernen, wie sie gesund leben können.",
    translation: "Çocuklar bile sağlıklı nasıl yaşanacağını öğrenmelidir.",
  },
  {
    sentence: "Schulen und Eltern haben hier eine große Verantwortung.",
    translation: "Okullar ve ebeveynler bu konuda büyük sorumluluk taşır.",
  },
  {
    sentence: "Gesunde Menschen sind leistungsfähiger im Alltag.",
    translation: "Sağlıklı insanlar günlük hayatta daha verimlidir.",
  },
  {
    sentence: "Krankenkassen bieten viele Präventionskurse an.",
    translation: "Sağlık sigortaları birçok önleyici kurs sunmaktadır.",
  },
  {
    sentence: "Dazu gehören z. B. Rückenschule oder Ernährungskurse.",
    translation:
      "Bunlara örneğin sırt eğitimi veya beslenme kursları dahildir.",
  },
  {
    sentence: "Ein gesunder Lebensstil ist eine bewusste Entscheidung.",
    translation: "Sağlıklı bir yaşam tarzı bilinçli bir karardır.",
  },
  {
    sentence: "Jeder kann etwas für seine Gesundheit tun.",
    translation: "Herkes sağlığı için bir şeyler yapabilir.",
  },
  {
    sentence: "Denn ein gesundes Leben ist ein glückliches Leben.",
    translation: "Çünkü sağlıklı bir hayat mutlu bir hayattır.",
  },
];
export default gesund;
