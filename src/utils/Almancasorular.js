const almancaSorular = [
  // --- A1 Temel ---
  { german: "Wie heißen Sie?", turkish: "Adınız nedir?" },
  { german: "Woher kommen Sie?", turkish: "Nerelisiniz?" },
  { german: "Wie alt sind Sie?", turkish: "Kaç yaşındasınız?" },
  { german: "Sprechen Sie Englisch?", turkish: "İngilizce konuşuyor musunuz?" },
  { german: "Was ist das?", turkish: "Bu ne?" },
  { german: "Wie viel kostet das?", turkish: "Bu ne kadar?" },
  { german: "Wo ist die Toilette?", turkish: "Tuvalet nerede?" },
  { german: "Haben Sie Geschwister?", turkish: "Kardeşiniz var mı?" },
  { german: "Was möchten Sie trinken?", turkish: "Ne içmek istersiniz?" },
  { german: "Wie spät ist es?", turkish: "Saat kaç?" },

  // --- A2 Günlük Yaşam ---
  { german: "Was kochst du heute?", turkish: "Bugün ne pişiriyorsun?" },
  { german: "Wann kommst du nach Hause?", turkish: "Eve ne zaman geliyorsun?" },
  { german: "Hast du heute Abend Zeit?", turkish: "Bu akşam vaktin var mı?" },
  { german: "Magst du Fußball?", turkish: "Futbol sever misin?" },
  { german: "Wie kommst du zur Arbeit?", turkish: "İşe nasıl gidiyorsun?" },
  {
    german: "Wo hast du Deutsch gelernt?",
    turkish: "Almancayı nerede öğrendin?",
  },
  { german: "Kannst du mir helfen?", turkish: "Bana yardım edebilir misin?" },
  {
    german: "Was machst du am Wochenende?",
    turkish: "Hafta sonu ne yapıyorsun?",
  },
  { german: "Wie ist das Wetter heute?", turkish: "Bugün hava nasıl?" },
  {
    german: "Wohin reist du gern?",
    turkish: "Nereye seyahat etmeyi seversin?",
  },

  // --- B1 Orta ---
  {
    german: "Was würdest du an meiner Stelle tun?",
    turkish: "Benim yerimde olsan ne yapardın?",
  },
  {
    german: "Könnten Sie das bitte wiederholen?",
    turkish: "Bunu tekrar eder misiniz?",
  },
  {
    german: "Wie lange bleiben Sie in Deutschland?",
    turkish: "Almanya'da ne kadar kalacaksınız?",
  },
  {
    german: "Warum hast du dich dafür entschieden?",
    turkish: "Neden bunu seçtin?",
  },
  {
    german: "Was denkst du über diese Idee?",
    turkish: "Bu fikir hakkında ne düşünüyorsun?",
  },
  { german: "Hättest du Lust, mitzukommen?", turkish: "Gelme isteğin var mı?" },
  {
    german: "Wie fühlst du dich dabei?",
    turkish: "Bu konuda nasıl hissediyorsun?",
  },
  {
    german: "Was ist deine Lieblingsserie?",
    turkish: "En sevdiğin dizi nedir?",
  },
  { german: "Worüber habt ihr gesprochen?", turkish: "Neden bahsediyordunuz?" },
  {
    german: "Wie bereitest du dich auf Prüfungen vor?",
    turkish: "Sınavlara nasıl hazırlanıyorsun?",
  },

  // --- B2 İleri Orta ---
  {
    german: "Was wäre, wenn wir scheitern?",
    turkish: "Başarısız olursak ne olur?",
  },
  {
    german: "Können Sie das genauer erklären?",
    turkish: "Bunu daha detaylı açıklar mısınız?",
  },
  {
    german: "Inwiefern unterscheidet sich das?",
    turkish: "Bu ne kadar farklı?",
  },
  {
    german: "Welche Konsequenzen könnte das haben?",
    turkish: "Bunun ne gibi sonuçları olabilir?",
  },
  {
    german: "Wie reagieren Sie auf unerwartete Änderungen?",
    turkish: "Beklenmedik değişikliklere nasıl tepki verirsiniz?",
  },
  {
    german: "Würden Sie mir ein Beispiel nennen?",
    turkish: "Bana bir örnek verebilir misiniz?",
  },
  {
    german: "Was hat Sie dazu bewogen, diesen Weg einzuschlagen?",
    turkish: "Sizi bu yola iten ne oldu?",
  },
  {
    german: "Wie stehen Sie zu kontroversen Themen?",
    turkish: "Tartışmalı konular hakkında ne düşünüyorsunuz?",
  },
  {
    german: "Was zeichnet eine gute Führungskraft aus?",
    turkish: "İyi bir lideri ne tanımlar?",
  },
  {
    german: "Wie gehen Sie mit Zeitdruck um?",
    turkish: "Zaman baskısıyla nasıl başa çıkıyorsunuz?",
  },

  // --- C1-C2 İleri Düzey ---
  {
    german:
      "Würden Sie behaupten, dass Künstliche Intelligenz die Menschheit bedroht?",
    turkish: "Yapay zekanın insanlığı tehdit ettiğini iddia eder misiniz?",
  },
  {
    german: "Wie definieren Sie persönliches Glück?",
    turkish: "Kişisel mutluluğu nasıl tanımlarsınız?",
  },
  {
    german: "Was wäre aus Ihrer Sicht die ideale Gesellschaftsform?",
    turkish: "Sizin bakış açınıza göre ideal toplum modeli ne olurdu?",
  },
  {
    german: "Inwieweit prägt die Kultur unsere Identität?",
    turkish: "Kültür kimliğimizi ne ölçüde şekillendirir?",
  },
  {
    german: "Kann ein Verbrechen jemals gerechtfertigt sein?",
    turkish: "Bir suç hiç haklı çıkarılabilir mi?",
  },
  {
    german: "Welche ethischen Dilemmata sehen Sie in der modernen Medizin?",
    turkish: "Modern tıpta hangi etik ikilemleri görüyorsunuz?",
  },
  {
    german: "Wie interpretieren Sie Nietzsches Aussage 'Gott ist tot'?",
    turkish: "Nietzsche'nin 'Tanrı öldü' sözünü nasıl yorumluyorsunuz?",
  },
  {
    german: "Was wäre, wenn die Zeit eine Illusion wäre?",
    turkish: "Zaman bir illüzyon olsaydı ne olurdu?",
  },
  {
    german: "Wie sähe die Welt ohne Geld aus?",
    turkish: "Parasız bir dünya nasıl görünürdü?",
  },
  {
    german: "Kann absolute Gerechtigkeit existieren?",
    turkish: "Mutlak adalet var olabilir mi?",
  },

  // --- İş Görüşmesi ---
  {
    german: "Welche Soft Skills bringen Sie mit?",
    turkish: "Hangi yumuşak becerilere sahipsiniz?",
  },
  {
    german: "Wie managen Sie mehrere Projekte gleichzeitig?",
    turkish: "Aynı anda birden fazla projeyi nasıl yönetirsiniz?",
  },
  {
    german: "Was tun Sie, um sich weiterzubilden?",
    turkish: "Kendinizi geliştirmek için ne yapıyorsunuz?",
  },
  {
    german:
      "Beschreiben Sie eine schwierige Entscheidung, die Sie treffen mussten.",
    turkish: "Vermek zorunda kaldığınız zor bir kararı anlatın.",
  },
  {
    german: "Wie messen Sie beruflichen Erfolg?",
    turkish: "Mesleki başarıyı nasıl ölçersiniz?",
  },
  {
    german: "Was würden Sie in den ersten 100 Tagen hier tun?",
    turkish: "Buradaki ilk 100 gününüzde ne yapardınız?",
  },
  {
    german: "Wie reagieren Sie auf negatives Feedback?",
    turkish: "Olumsuz geri bildirime nasıl tepki verirsiniz?",
  },
  {
    german: "Was motiviert Sie am meisten?",
    turkish: "Sizi en çok ne motive eder?",
  },
  {
    german: "Wie priorisieren Sie Aufgaben?",
    turkish: "Görevleri nasıl önceliklendirirsiniz?",
  },
  {
    german: "Warum sollten wir gerade Sie einstellen?",
    turkish: "Neden tam da sizi işe alalım?",
  },

  // --- Seyahat & Kültür ---
  {
    german: "Welche Sehenswürdigkeiten empfehlen Sie?",
    turkish: "Hangi gezilecek yerleri önerirsiniz?",
  },
  {
    german: "Gibt es hier typische Gerichte, die ich probieren sollte?",
    turkish: "Denemem gereken tipik yemekler var mı?",
  },
  {
    german: "Wie verhalte ich mich in dieser Situation höflich?",
    turkish: "Bu durumda nasıl kibar davranabilirim?",
  },
  {
    german: "Was ist ein kulturelles Tabu, das ich kennen sollte?",
    turkish: "Bilmem gereken kültürel bir tabu nedir?",
  },
  {
    german: "Wo finde ich authentische Souvenirs?",
    turkish: "Otantik hediyelik eşyaları nerede bulabilirim?",
  },

  // --- Retorik & Felsefe ---
  {
    german: "Ist Freiheit ohne Verantwortung möglich?",
    turkish: "Sorumluluk olmadan özgürlük mümkün mü?",
  },
  {
    german: "Kann Technologie menschliche Emotionen ersetzen?",
    turkish: "Teknoloji insan duygularının yerini alabilir mi?",
  },
  {
    german: "Was ist der Preis des Fortschritts?",
    turkish: "İlerlemenin bedeli nedir?",
  },
  {
    german: "Sind wir Produkte unserer Gene oder unserer Umwelt?",
    turkish: "Genlerimizin mi yoksa çevremizin mi ürünüyüz?",
  },
  {
    german: "Wo liegt die Grenze zwischen Kunst und Provokation?",
    turkish: "Sanat ve provokasyon arasındaki sınır nerede?",
  },
];

export default almancaSorular;
