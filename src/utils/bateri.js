const bateri = [
  {
    sentence: "Elektroautos werden immer beliebter auf der ganzen Welt.",
    translation:
      "Elektrikli araçlar tüm dünyada giderek daha popüler hale geliyor.",
  },
  {
    sentence: "Dennoch bleibt die Batterielebensdauer ein großes Problem.",
    translation: "Yine de pil ömrü büyük bir sorun olarak kalıyor.",
  },
  {
    sentence:
      "Viele Menschen haben Angst, dass die Batterie zu schnell kaputtgeht.",
    translation: "Birçok insan, pilin çok hızlı bozulmasından korkuyor.",
  },
  {
    sentence: "Forscher auf der ganzen Welt arbeiten an Lösungen.",
    translation:
      "Dünyanın dört bir yanındaki araştırmacılar çözümler üzerinde çalışıyor.",
  },
  {
    sentence:
      "Eine Idee ist, bessere Materialien für die Batterien zu verwenden.",
    translation: "Bir fikir, piller için daha iyi malzemeler kullanmaktır.",
  },
  {
    sentence: "Lithium-Eisen-Phosphat-Batterien sind ein Beispiel dafür.",
    translation: "Lityum-demir-fosfat piller buna bir örnektir.",
  },
  {
    sentence: "Diese Batterien sind stabiler und halten länger.",
    translation: "Bu piller daha stabildir ve daha uzun ömürlüdür.",
  },
  {
    sentence: "Ein weiteres Ziel ist es, die Ladezyklen zu optimieren.",
    translation: "Başka bir hedef ise şarj döngülerini optimize etmektir.",
  },
  {
    sentence: "Schnelles Laden kann die Batterie schneller altern lassen.",
    translation: "Hızlı şarj, pilin daha hızlı yaşlanmasına neden olabilir.",
  },
  {
    sentence: "Deshalb entwickeln Firmen neue, schonendere Ladesysteme.",
    translation:
      "Bu yüzden firmalar yeni, daha nazik şarj sistemleri geliştiriyor.",
  },
  {
    sentence: "Auch die Temperatur spielt eine große Rolle.",
    translation: "Sıcaklık da büyük bir rol oynar.",
  },
  {
    sentence: "Hohe Temperaturen können die Batterie schädigen.",
    translation: "Yüksek sıcaklıklar pili zarar verebilir.",
  },
  {
    sentence: "Neue Kühlsysteme sollen die Batterien schützen.",
    translation: "Yeni soğutma sistemleri pilleri korumalıdır.",
  },
  {
    sentence: "Ein weiteres Forschungsfeld ist das Batteriemanagementsystem.",
    translation: "Başka bir araştırma alanı pil yönetim sistemidir.",
  },
  {
    sentence: "Dieses System überwacht die Batterie ständig.",
    translation: "Bu sistem pili sürekli izler.",
  },
  {
    sentence: "Es sorgt dafür, dass die Batterie optimal genutzt wird.",
    translation: "Pilin en iyi şekilde kullanılmasını sağlar.",
  },
  {
    sentence: "Auch künstliche Intelligenz wird eingesetzt.",
    translation: "Yapay zeka da kullanılıyor.",
  },
  {
    sentence: "KI kann das Ladeverhalten analysieren und verbessern.",
    translation: "Yapay zeka, şarj davranışını analiz edip iyileştirebilir.",
  },
  {
    sentence: "Manche Forscher entwickeln sogenannte Festkörperbatterien.",
    translation: "Bazı araştırmacılar “katı hal pilleri” geliştiriyor.",
  },
  {
    sentence: "Diese sollen sicherer und langlebiger sein.",
    translation: "Bunlar daha güvenli ve daha dayanıklı olmalıdır.",
  },
  {
    sentence: "Die Produktion solcher Batterien ist jedoch teuer.",
    translation: "Ancak bu tür pillerin üretimi pahalıdır.",
  },
  {
    sentence: "Auch Recycling spielt eine wichtige Rolle.",
    translation: "Geri dönüşüm de önemli bir rol oynar.",
  },
  {
    sentence: "Alte Batterien können recycelt und wiederverwendet werden.",
    translation: "Eski piller geri dönüştürülüp tekrar kullanılabilir.",
  },
  {
    sentence: "Dadurch können Ressourcen geschont werden.",
    translation: "Bu sayede kaynaklar korunabilir.",
  },
  {
    sentence: "Tesla und andere Firmen investieren stark in die Forschung.",
    translation:
      "Tesla ve diğer şirketler araştırmaya büyük yatırımlar yapıyor.",
  },
  {
    sentence:
      "Ihr Ziel ist es, Batterien günstiger undgravity langlebiger zu machen.",
    translation: "Amaçları, pilleri daha ucuz ve uzun ömürlü hale getirmektir.",
  },
  {
    sentence: "Auch Universitäten forschen intensiv auf diesem Gebiet.",
    translation: "Üniversiteler de bu alanda yoğun araştırmalar yapıyor.",
  },
  {
    sentence: "In Deutschland gibt es viele Pilotprojekte.",
    translation: "Almanya’da birçok pilot proje bulunuyor.",
  },
  {
    sentence: "Dort werden neue Batterietechnologien getestet.",
    translation: "Orada yeni pil teknolojileri test ediliyor.",
  },
  {
    sentence: "Einige Projekte setzen auf alternative Rohstoffe.",
    translation: "Bazı projeler alternatif hammaddelere odaklanıyor.",
  },
  {
    sentence: "Zum Beispiel wird Natrium als Ersatz für Lithium erforscht.",
    translation: "Örneğin, lityum yerine sodyum araştırılıyor.",
  },
  {
    sentence: "Sogenannte Second-Life-Batterien sind ein weiteres Thema.",
    translation:
      "“Sekonder yaşam pilleri” (ikinci ömür pilleri) başka bir konudur.",
  },
  {
    sentence: "Sie werden nach ihrer Nutzung in Autos weiterverwendet.",
    translation:
      "Bu piller, araçlarda kullanıldıktan sonra başka alanlarda kullanılmaya devam eder.",
  },
  {
    sentence: "Zum Beispiel als Energiespeicher für Häuser.",
    translation: "Örneğin evler için enerji depolayıcı olarak.",
  },
  {
    sentence: "Dadurch verlängert sich die Gesamtnutzungsdauer deutlich.",
    translation: "Bu da toplam kullanım süresini önemli ölçüde uzatır.",
  },
  {
    sentence: "Die Forschung entwickelt sich sehr schnell.",
    translation: "Araştırmalar çok hızlı gelişiyor.",
  },
  {
    sentence:
      "Experten glauben, dass die Batterien in fünf Jahren doppelt so lange halten könnten.",
    translation:
      "Uzmanlar, pillerin beş yıl içinde iki kat daha uzun dayanabileceğine inanıyor.",
  },
  {
    sentence: "Das wäre ein großer Schritt für die Elektromobilität.",
    translation: "Bu, elektrikli ulaşım için büyük bir adım olurdu.",
  },
  {
    sentence:
      "Mehr Reichweite und längere Lebensdauer würden viele Menschen überzeugen.",
    translation:
      "Daha fazla menzil ve daha uzun pil ömrü birçok insanı ikna ederdi.",
  },
  {
    sentence:
      "Die Zukunft der Batterietechnologie sieht also sehr spannend aus.",
    translation:
      "Bu yüzden pil teknolojisinin geleceği çok heyecan verici görünüyor.",
  },
];
export default bateri;
