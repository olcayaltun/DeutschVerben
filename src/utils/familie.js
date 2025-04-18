const familie = [
  {
    sentence:
      "Die Familie ist die erste soziale Gemeinschaft, in der ein Mensch aufwächst.",
    translation: "Aile, bir insanın büyüdüğü ilk sosyal topluluktur.",
  },
  {
    sentence: "Eltern tragen eine große Verantwortung für ihre Kinder.",
    translation: "Ebeveynler, çocukları için büyük bir sorumluluk taşır.",
  },
  {
    sentence: "Sie müssen ihnen Liebe, Sicherheit und Orientierung geben.",
    translation: "Onlara sevgi, güvenlik ve yön göstermelidirler.",
  },
  {
    sentence:
      "Kinder lernen in der Familie soziale Werte und Verhaltensweisen.",
    translation:
      "Çocuklar ailede sosyal değerleri ve davranış biçimlerini öğrenir.",
  },
  {
    sentence:
      "Eine gute Kommunikation ist die Basis für stabile Familienbeziehungen.",
    translation: "İyi bir iletişim, sağlam aile ilişkilerinin temelidir.",
  },
  {
    sentence:
      "Wenn in der Familie offen gesprochen wird, können Konflikte leichter gelöst werden.",
    translation: "Ailede açık konuşulursa, çatışmalar daha kolay çözülür.",
  },
  {
    sentence: "Gemeinsame Zeit stärkt das Wir-Gefühl.",
    translation: "Birlikte geçirilen zaman, “biz” duygusunu güçlendirir.",
  },
  {
    sentence:
      "In vielen Familien sind gemeinsame Mahlzeiten ein wichtiger Bestandteil.",
    translation: "Pek çok ailede birlikte yemek yemek önemli bir unsurdur.",
  },
  {
    sentence: "Dabei kann man sich austauschen und voneinander lernen.",
    translation:
      "Bu sırada insanlar fikir alışverişinde bulunabilir ve birbirlerinden öğrenebilir.",
  },
  {
    sentence:
      "Die Rollenverteilung in der Familie hat sich im Laufe der Zeit verändert.",
    translation: "Ailedeki rol dağılımı zamanla değişmiştir.",
  },
  {
    sentence: "Früher war der Vater oft alleiniger Ernährer der Familie.",
    translation: "Eskiden baba genellikle ailenin tek geçim kaynağıydı.",
  },
  {
    sentence: "Heute teilen sich viele Eltern die Aufgaben gleichberechtigt.",
    translation: "Bugün birçok ebeveyn görevleri eşit şekilde paylaşmaktadır.",
  },
  {
    sentence: "Auch Männer übernehmen heute aktiv die Erziehung der Kinder.",
    translation:
      "Günümüzde erkekler de çocukların eğitiminde aktif rol alıyor.",
  },
  {
    sentence: "Alleinerziehende Eltern haben es oft besonders schwer.",
    translation:
      "Tek başına çocuk yetiştiren ebeveynlerin işi genellikle daha zordur.",
  },
  {
    sentence:
      "Sie müssen Arbeit, Haushalt und Kindererziehung allein bewältigen.",
    translation:
      "İş, ev işleri ve çocuk eğitimini tek başlarına üstlenmek zorundadırlar.",
  },
  {
    sentence: "Großeltern spielen eine wichtige Rolle im Familienleben.",
    translation:
      "Büyükanneler ve büyükbabalar aile yaşamında önemli bir rol oynar.",
  },
  {
    sentence:
      "Sie geben nicht nur Unterstützung, sondern auch wertvolle Lebenserfahrung weiter.",
    translation:
      "Sadece destek vermekle kalmaz, aynı zamanda değerli yaşam tecrübelerini de aktarırlar.",
  },
  {
    sentence: "In vielen Kulturen leben mehrere Generationen unter einem Dach.",
    translation: "Birçok kültürde birden fazla nesil aynı çatı altında yaşar.",
  },
  {
    sentence:
      "Das kann Vorteile, aber auch Herausforderungen mit sich bringen.",
    translation:
      "Bu durum avantajlar getirebilir, ama zorluklar da beraberinde gelir.",
  },
  {
    sentence: "Respekt und Verständnis zwischen den Generationen sind wichtig.",
    translation: "Nesiller arasında saygı ve anlayış önemlidir.",
  },
  {
    sentence: "Jugendliche wollen oft mehr Freiheit und Selbstständigkeit.",
    translation: "Gençler genellikle daha fazla özgürlük ve bağımsızlık ister.",
  },
  {
    sentence: "Eltern möchten ihre Kinder jedoch vor Gefahren schützen.",
    translation: "Ancak ebeveynler çocuklarını tehlikelerden korumak ister.",
  },
  {
    sentence: "Das führt manchmal zu Konflikten in der Familie.",
    translation: "Bu durum bazen aile içinde çatışmalara yol açar.",
  },
  {
    sentence: "Ein respektvoller Umgang hilft, solche Konflikte zu lösen.",
    translation:
      "Saygılı bir iletişim, bu tür çatışmaları çözmeye yardımcı olur.",
  },
  {
    sentence:
      "In Krisenzeiten zeigt sich, wie stark eine Familie wirklich ist.",
    translation:
      "Kriz zamanlarında ailenin ne kadar güçlü olduğu ortaya çıkar.",
  },
  {
    sentence: "Zusammenhalt ist dann besonders wichtig.",
    translation: "Böyle zamanlarda birliktelik özellikle önemlidir.",
  },
  {
    sentence:
      "Auch schwierige Phasen wie Trennung oder Krankheit belasten Familien.",
    translation: "Ayrılık veya hastalık gibi zor dönemler aileleri zorlar.",
  },
  {
    sentence: "Offene Gespräche und gegenseitige Unterstützung können helfen.",
    translation: "Açık konuşmalar ve karşılıklı destek yardımcı olabilir.",
  },
  {
    sentence: "In manchen Familien gibt es auch Gewalt oder Missbrauch.",
    translation: "Bazı ailelerde şiddet veya istismar da vardır.",
  },
  {
    sentence: "In solchen Fällen ist professionelle Hilfe notwendig.",
    translation: "Böyle durumlarda profesyonel yardım gereklidir.",
  },
  {
    sentence: "Familienberatung kann Wege aus der Krise zeigen.",
    translation: "Aile danışmanlığı, krizden çıkış yolları gösterebilir.",
  },
  {
    sentence:
      "Eine liebevolle und stabile Familie gibt Kindern Selbstvertrauen.",
    translation: "Sevgi dolu ve istikrarlı bir aile çocuklara özgüven verir.",
  },
  {
    sentence:
      "Familienfeste wie Geburtstage oder Feiertage stärken die Bindung.",
    translation:
      "Doğum günleri veya bayramlar gibi aile kutlamaları bağı güçlendirir.",
  },
  {
    sentence: "Auch kleine Rituale im Alltag schaffen Nähe.",
    translation: "Günlük hayattaki küçük ritüeller bile yakınlık oluşturur.",
  },
  {
    sentence: "Digitale Medien beeinflussen heute das Familienleben stark.",
    translation:
      "Dijital medya günümüzde aile yaşamını büyük ölçüde etkiliyor.",
  },
  {
    sentence: "Es ist wichtig, gemeinsame Zeit auch offline zu verbringen.",
    translation: "Birlikte çevrimdışı zaman geçirmek de önemlidir.",
  },
  {
    sentence: "Familien verändern sich im Laufe des Lebens.",
    translation: "Aileler zamanla değişir.",
  },
  {
    sentence: "Kinder werden erwachsen und gründen eigene Familien.",
    translation: "Çocuklar büyür ve kendi ailelerini kurar.",
  },
  {
    sentence: "Dennoch bleibt die emotionale Verbindung meist bestehen.",
    translation: "Yine de duygusal bağ genellikle kalıcı olur.",
  },
  {
    sentence: "Eine starke Familie ist ein sicherer Hafen im Leben.",
    translation: "Güçlü bir aile, hayattaki güvenli bir limandır.",
  },
];
export default familie;
