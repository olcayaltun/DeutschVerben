import React, { useState } from "react";

const Mektup = () => {
  // Beş mektup için veriler
  const letters = [
    // 1. Geschäftsbrief / E-Mail – Genel İş Yazışması
    {
      title: "Geschäftsbrief / E-Mail – Genel İş Yazışması",
      lines: [
        {
          original:
            "Betreff: Anfrage zur Zusammenarbeit im Rahmen zukünftiger IT-Projekte",
          translation:
            "Konu: Gelecekteki BT Projeleri Kapsamında İşbirliği Talebi",
        },
        {
          original: "Sehr geehrte Damen und Herren,",
          translation: "Sayın Baylar ve Bayanlar,",
        },
        {
          original:
            "im Rahmen unserer strategischen Neuausrichtung im Bereich Digitalisierung suchen wir derzeit nach verlässlichen Partnerunternehmen für langfristige Kooperationen.",
          translation:
            "Dijitalleşme alanındaki stratejik yeniden yapılanmamız kapsamında, şu anda uzun vadeli işbirlikleri için güvenilir iş ortakları arıyoruz.",
        },
        {
          original:
            "Unser Fokus liegt dabei insbesondere auf Softwarelösungen für das Finanz- und Versicherungswesen.",
          translation:
            "Odak noktamız özellikle finans ve sigorta sektörüne yönelik yazılım çözümleri üzerinde.",
        },
        {
          original:
            "Aufgrund Ihrer überzeugenden Internetpräsenz und positiver Referenzen sind wir auf Ihr Unternehmen aufmerksam geworden.",
          translation:
            "Etkileyici internet siteniz ve olumlu referanslarınız sayesinde firmanıza dikkat kesildik.",
        },
        {
          original:
            "Wir bitten Sie daher, uns nähere Informationen zu Ihren Dienstleistungen, Referenzprojekten und möglichen Kooperationsmodellen zukommen zu lassen.",
          translation:
            "Bu nedenle, hizmetleriniz, referans projeleriniz ve olası işbirliği modelleri hakkında bize daha fazla bilgi göndermenizi rica ediyoruz.",
        },
        {
          original:
            "Besonders interessieren uns Ihre Erfahrungen in der Backend-Entwicklung mit Node.js sowie Ihre Expertise bei der Integration von Open Banking APIs.",
          translation:
            "Özellikle Node.js ile backend geliştirme konusundaki deneyimleriniz ve Open Banking API’lerinin entegrasyonundaki uzmanlığınız bizi ilgilendiriyor.",
        },
        {
          original:
            "Bitte übersenden Sie uns zudem Ihre allgemeinen Geschäftsbedingungen und eine aktuelle Preisliste.",
          translation:
            "Ayrıca genel iş koşullarınızı ve güncel bir fiyat listesini bize iletmenizi rica ediyoruz.",
        },
        {
          original:
            "Wir planen, erste Gespräche im Laufe des kommenden Monats zu führen, und wären Ihnen für eine Rückmeldung bis spätestens 30. April sehr dankbar.",
          translation:
            "Önümüzdeki ay boyunca ilk görüşmeleri yapmayı planlıyoruz ve en geç 30 Nisan’a kadar geri dönüş yaparsanız çok memnun oluruz.",
        },
        {
          original:
            "Für Rückfragen stehen wir Ihnen selbstverständlich telefonisch oder per E-Mail zur Verfügung.",
          translation:
            "Sorularınız için elbette telefon veya e-posta yoluyla size her zaman ulaşabilirsiniz.",
        },
        {
          original:
            "Wir freuen uns auf Ihre Antwort und eine mögliche zukünftige Zusammenarbeit.",
          translation:
            "Cevabınızı ve olası bir gelecekteki işbirliğini sabırsızlıkla bekliyoruz.",
        },
        {
          original: "Mit freundlichen Grüßen",
          translation: "Saygılarımla",
        },
        {
          original: "[Ihr Name]",
          translation: "[Adınız]",
        },
      ],
    },
    // 2. Beschwerdebrief – Şikayet Mektubu
    {
      title: "Beschwerdebrief – Şikayet Mektubu",
      lines: [
        {
          original:
            "Betreff: Beschwerde bezüglich der verspäteten Lieferung und beschädigter Ware",
          translation: "Konu: Geç Teslimat ve Hasarlı Ürünler Hakkında Şikayet",
        },
        {
          original: "Sehr geehrter Herr Schuster,",
          translation: "Sayın Bay Schuster,",
        },
        {
          original: "leider muss ich mich mit einer Beschwerde an Sie wenden.",
          translation: "Maalesef size bir şikayette bulunmam gerekiyor.",
        },
        {
          original:
            "Am 12. März haben wir bei Ihnen 50 Stück des Produkts „Zahlterminal X300“ bestellt, die laut Auftragsbestätigung spätestens am 25. März eintreffen sollten.",
          translation:
            "12 Mart'ta sizden 50 adet 'Ödeme Terminali X300' ürünü sipariş ettik ve sipariş onayına göre en geç 25 Mart'ta teslim edilmesi gerekiyordu.",
        },
        {
          original:
            "Tatsächlich wurde die Lieferung erst am 3. April – also mehr als eine Woche verspätet – geliefert.",
          translation:
            "Ancak teslimat 3 Nisan'da – yani bir haftadan fazla gecikmeyle – teslim edildi.",
        },
        {
          original:
            "Bei der Entgegennahme mussten wir zudem feststellen, dass mehrere Geräte erhebliche Schäden aufwiesen und nicht betriebsbereit sind.",
          translation:
            "Ayrıca, teslim alırken birçok cihazın ciddi hasarlar taşıdığını ve çalışır durumda olmadığını fark ettik.",
        },
        {
          original:
            "Dies führte zu erheblichen Verzögerungen in unserem Kundenprojekt, was unser Ansehen und unsere Geschäftsbeziehungen gefährdet.",
          translation:
            "Bu durum, müşteri projemizde önemli gecikmelere neden oldu ve itibarımızı ve iş ilişkilerimizi tehlikeye attı.",
        },
        {
          original:
            "Ich bitte Sie daher dringend, den Vorfall intern zu prüfen und mir bis spätestens 10. April eine schriftliche Stellungnahme zukommen zu lassen.",
          translation:
            "Bu nedenle, olayı içerde incelemenizi ve en geç 10 Nisan'a kadar bana yazılı bir açıklama göndermenizi rica ediyorum.",
        },
        {
          original:
            "Zudem erwarten wir entweder den sofortigen Ersatz der beschädigten Geräte oder eine entsprechende Gutschrift.",
          translation:
            "Ayrıca, hasarlı cihazların hemen değiştirilmesini veya uygun bir kredi notu sağlanmasını bekliyoruz.",
        },
        {
          original:
            "Ich hoffe auf eine zeitnahe und kundenorientierte Lösung und danke Ihnen im Voraus für Ihre Bemühungen.",
          translation:
            "Zamanında ve müşteri odaklı bir çözüm umuyorum ve çabalarınız için şimdiden teşekkür ederim.",
        },
        {
          original: "Mit freundlichen Grüßen",
          translation: "Saygılarımla",
        },
        {
          original: "[Ihr Name]",
          translation: "[Adınız]",
        },
      ],
    },
    // 3. Anfrage / Angebot – Bilgi/Teklif İsteme
    {
      title: "Anfrage / Angebot – Bilgi/Teklif İsteme",
      lines: [
        {
          original:
            "Betreff: Anfrage zu Preisen und Konditionen für Cloud-basierte Datenlösungen",
          translation:
            "Konu: Bulut Tabanlı Veri Çözümleri İçin Fiyat ve Koşul Talebi",
        },
        {
          original: "Sehr geehrter Herr Becker,",
          translation: "Sayın Bay Becker,",
        },
        {
          original:
            "im Rahmen eines neuen Projekts bei unserem Kunden in der Finanzbranche benötigen wir eine performante und skalierbare Cloud-Lösung zur sicheren Speicherung und Analyse sensibler Kundendaten.",
          translation:
            "Finans sektöründeki bir müşterimiz için yeni bir proje kapsamında, hassas müşteri verilerinin güvenli saklanması ve analizi için performanslı ve ölçeklenebilir bir bulut çözümü arıyoruz.",
        },
        {
          original:
            "Bei unserer Recherche sind wir auf Ihre Produkte aufmerksam geworden und möchten Sie daher um ein konkretes Angebot bitten.",
          translation:
            "Araştırmalarımız sırasında ürünlerinize rastladık ve bu nedenle sizden somut bir teklif rica ediyoruz.",
        },
        {
          original:
            "Könnten Sie uns bitte detaillierte Informationen zu Ihren Servicepaketen zusenden?",
          translation:
            "Hizmet paketleriniz hakkında detaylı bilgi gönderebilir misiniz?",
        },
        {
          original:
            "Besonders interessieren uns Aspekte wie Datenverschlüsselung, DSGVO-Konformität, Backup-Strategien und Integrationsmöglichkeiten mit bestehenden CRM-Systemen.",
          translation:
            "Özellikle veri şifreleme, GDPR uyumluluğu, yedekleme stratejileri ve mevcut CRM sistemleriyle entegrasyon imkanları gibi konular bizi ilgilendiriyor.",
        },
        {
          original:
            "Zudem wären Preisstaffelungen für Vertragslaufzeiten von 12 bzw. 24 Monaten für uns relevant.",
          translation:
            "Ayrıca, 12 ve 24 aylık sözleşme süreleri için fiyat kademeleri bizim için önemli.",
        },
        {
          original:
            "Bitte teilen Sie uns auch Ihre Reaktionszeiten im Support sowie Informationen zu zusätzlichen Dienstleistungen wie Consulting oder Schulungen mit.",
          translation:
            "Lütfen destek ekibinizin yanıt sürelerini ve danışmanlık veya eğitim gibi ek hizmetler hakkındaki bilgileri de bizimle paylaşın.",
        },
        {
          original:
            "Wir planen, das Projekt in naher Zukunft zu starten, und wären Ihnen für eine Rückmeldung bis spätestens 15. April dankbar.",
          translation:
            "Projeyi yakın bir gelecekte başlatmayı planlıyoruz ve en geç 15 Nisan’a kadar geri dönüş yaparsanız memnun oluruz.",
        },
        {
          original:
            "Für Rückfragen stehe ich Ihnen jederzeit gerne zur Verfügung.",
          translation:
            "Sorularınız için her zaman memnuniyetle hizmetinizdeyim.",
        },
        {
          original:
            "Vielen Dank im Voraus für Ihre Mühe – ich freue mich auf Ihr Angebot.",
          translation:
            "Çabalarınız için şimdiden teşekkür ederim – teklifinizi sabırsızlıkla bekliyorum.",
        },
        {
          original: "Mit freundlichen Grüßen",
          translation: "Saygılarımla",
        },
        {
          original: "[Ihr Name]",
          translation: "[Adınız]",
        },
      ],
    },
    // 4. Reservierung – Rezervasyon Yazısı
    {
      title: "Reservierung – Rezervasyon Yazısı",
      lines: [
        {
          original: "Betreff: Reservierungsanfrage für ein Doppelzimmer",
          translation: "Konu: İki Kişilik Oda İçin Rezervasyon Talebi",
        },
        {
          original: "Sehr geehrte Damen und Herren,",
          translation: "Sayın Baylar ve Bayanlar,",
        },
        {
          original:
            "hiermit möchte ich ein Doppelzimmer in Ihrem Hotel für den Zeitraum vom 14. bis 18. Mai 2025 reservieren.",
          translation:
            "Bu vesileyle, 14-18 Mayıs 2025 tarihleri arasında otelinizde iki kişilik bir oda rezervasyonu yapmak istiyorum.",
        },
        {
          original:
            "Der Aufenthalt erfolgt im Rahmen einer beruflichen Fortbildung an der nahegelegenen Fachhochschule.",
          translation:
            "Konaklama, yakındaki meslek yüksekokulunda düzenlenecek bir iş eğitimi kapsamında gerçekleşecek.",
        },
        {
          original:
            "Bitte bestätigen Sie mir schriftlich die Verfügbarkeit sowie den Gesamtpreis für vier Nächte inklusive Frühstück.",
          translation:
            "Lütfen bana yazılı olarak müsaitlik durumunu ve kahvaltı dahil dört gece için toplam fiyatı teyit edin.",
        },
        {
          original:
            "Zudem wäre ich Ihnen dankbar, wenn Sie mir Ihre Zahlungsoptionen (Kreditkarte oder Banküberweisung) mitteilen könnten.",
          translation:
            "Ayrıca, ödeme seçeneklerinizi (kredi kartı veya banka havalesi) bana bildirebilirseniz memnun olurum.",
        },
        {
          original:
            "Ich möchte außerdem wissen, ob ein kostenloser Parkplatz sowie WLAN-Zugang im Zimmerpreis enthalten sind.",
          translation:
            "Ayrıca, ücretsiz bir otopark ve Wi-Fi erişiminin oda fiyatına dahil olup olmadığını öğrenmek istiyorum.",
        },
        {
          original: "Falls nicht, bitte ich um entsprechende Angaben.",
          translation: "Eğer dahil değilse, lütfen ilgili bilgileri paylaşın.",
        },
        {
          original:
            "Die Reservierung sollte auf den Namen „Olcay Yılmaz“ lauten.",
          translation: "Rezervasyon 'Olcay Yılmaz' adına yapılmalı.",
        },
        {
          original:
            "Bitte teilen Sie mir auch Ihre Stornobedingungen mit, insbesondere für den Fall einer kurzfristigen Absage.",
          translation:
            "Lütfen iptal koşullarınızı da bana bildirin, özellikle kısa vadeli bir iptal durumunda.",
        },
        {
          original:
            "Vielen Dank im Voraus für Ihre Unterstützung und Ihre schnelle Rückmeldung.",
          translation:
            "Desteğiniz ve hızlı geri dönüşünüz için şimdiden teşekkür ederim.",
        },
        {
          original: "Mit freundlichen Grüßen",
          translation: "Saygılarımla",
        },
        {
          original: "Olcay Yılmaz",
          translation: "Olcay Yılmaz",
        },
      ],
    },
    // 5. Formelle Zusage – Resmi Onay/Kabul Yazısı
    {
      title: "Formelle Zusage – Resmi Onay/Kabul Yazısı",
      lines: [
        {
          original:
            "Betreff: Bestätigung der Zusammenarbeit – Projekt „FinTech Optimierung 2025“",
          translation:
            "Konu: İşbirliği Onayı – 'FinTech Optimizasyon 2025' Projesi",
        },
        {
          original: "Sehr geehrter Herr Lange,",
          translation: "Sayın Bay Lange,",
        },
        {
          original:
            "nach detaillierter Prüfung Ihres Angebots vom 20. März 2025 freuen wir uns, Ihnen mitzuteilen, dass wir Ihre vorgeschlagenen Konditionen annehmen und die Zusammenarbeit hiermit offiziell bestätigen.",
          translation:
            "20 Mart 2025 tarihli teklifinizi detaylı bir şekilde inceledikten sonra, önerdiğiniz koşulları kabul ettiğimizi ve işbirliğini resmi olarak onayladığımızı size bildirmekten mutluluk duyuyoruz.",
        },
        {
          original:
            "Besonders beeindruckt haben uns Ihre technische Expertise im Bereich Finanzsoftware sowie Ihre Flexibilität bei der Umsetzung individueller Anforderungen.",
          translation:
            "Özellikle finans yazılımı alanındaki teknik uzmanlığınız ve bireysel taleplerin uygulanmasındaki esnekliğiniz bizi etkiledi.",
        },
        {
          original:
            "Wir schätzen Ihre transparente Kommunikation und freuen uns darauf, gemeinsam am Projekt „FinTech Optimierung 2025“ zu arbeiten.",
          translation:
            "Şeffaf iletişiminizi takdir ediyoruz ve 'FinTech Optimizasyon 2025' projesinde birlikte çalışmayı sabırsızlıkla bekliyoruz.",
        },
        {
          original:
            "Bitte senden Sie uns zeitnah die finalen Vertragsunterlagen sowie einen konkreten Projektzeitplan.",
          translation:
            "Lütfen bize en kısa sürede nihai sözleşme belgelerini ve somut bir proje zaman planını gönderin.",
        },
        {
          original:
            "Gerne können wir auch ein Kick-off-Meeting abhalten, um alle weiteren Details abzustimmen – schlagen Sie uns hierfür bitte mögliche Termine vor.",
          translation:
            "Ayrıca, tüm diğer detayları koordine etmek için bir başlangıç toplantısı düzenleyebiliriz – lütfen bunun için olası tarihler önerin.",
        },
        {
          original:
            "Vielen Dank für Ihre professionelle Vorbereitung – wir freuen uns auf eine erfolgreiche Partnerschaft.",
          translation:
            "Profesyonel hazırlığınız için teşekkür ederiz – başarılı bir ortaklık için sabırsızlanıyoruz.",
        },
        {
          original: "Mit freundlichen Grüßen",
          translation: "Saygılarımla",
        },
        {
          original: "[Ihr Name]",
          translation: "[Adınız]",
        },
      ],
    },
  ];

  // Hangi mektubun gösterileceğini kontrol eden state
  const [selectedLetterIndex, setSelectedLetterIndex] = useState(null);
  const [translatedLineIndex, setTranslatedLineIndex] = useState(null);

  // Çeviriyi açıp kapatan fonksiyon
  const toggleTranslation = (index) => {
    if (translatedLineIndex === index) {
      setTranslatedLineIndex(null);
    } else {
      setTranslatedLineIndex(index);
    }
  };

  return (
    <div className="p-8">
      {/* Buttonlar */}
      <div className="mektup-buttons flex gap-4 mb-8 justify-center">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setSelectedLetterIndex(0)}
        >
          Mektup 1 {selectedLetterIndex === 0 ? "✖" : "📨"}
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setSelectedLetterIndex(1)}
        >
          Mektup 2 {selectedLetterIndex === 1 ? "✖" : "📨"}
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setSelectedLetterIndex(2)}
        >
          Mektup 3 {selectedLetterIndex === 2 ? "✖" : "📨"}
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setSelectedLetterIndex(3)}
        >
          Mektup 4 {selectedLetterIndex === 3 ? "✖" : "📨"}
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setSelectedLetterIndex(4)}
        >
          Mektup 5 {selectedLetterIndex === 4 ? "✖" : "📨"}
        </button>
      </div>

      {/* Seçilen mektup içeriği */}
      {selectedLetterIndex !== null && (
        <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg">
          <div className="border-b-2 border-gray-200 pb-4 mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              {letters[selectedLetterIndex].title}
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Klicken Sie auf eine Zeile für die türkische Übersetzung
            </p>
          </div>

          <div className="space-y-4 text-gray-700">
            {letters[selectedLetterIndex].lines.map((line, index) => (
              <p
                key={index}
                className={`cursor-pointer p-2 rounded-md transition-colors duration-200 ${
                  translatedLineIndex === index
                    ? "bg-blue-50"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => toggleTranslation(index)}
              >
                {translatedLineIndex === index
                  ? line.translation
                  : line.original}
              </p>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-gray-200 text-center text-sm text-gray-500">
            Deutsch ⟷ Türkisch Interaktiver Brief
          </div>
        </div>
      )}
    </div>
  );
};

export default Mektup;
