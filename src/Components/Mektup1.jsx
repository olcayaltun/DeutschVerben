import React, { useState } from "react";

const Mektup1 = () => {
  // Original text lines and their translations
  const textLines = [
    {
      original:
        "Betreff: Anfrage zur Zusammenarbeit im Rahmen zukünftiger IT-Projekte",
      translation: "Konu: Gelecekteki BT projeleri kapsamında işbirliği talebi",
    },
    {
      original: "Sehr geehrte Damen und Herren,",
      translation: "Sayın Baylar ve Bayanlar,",
    },
    {
      original:
        "im Rahmen unserer strategischen Neuausrichtung im Bereich Digitalisierung suchen wir derzeit nach verlässlichen Partnerunternehmen für langfristige Kooperationen.",
      translation:
        "Dijitalleşme alanındaki stratejik yeniden yapılanmamız kapsamında, uzun vadeli işbirlikleri için güvenilir ortak şirketler arıyoruz.",
    },
    {
      original:
        "Unser Fokus liegt dabei insbesondere auf Softwarelösungen für das Finanz- und Versicherungswesen.",
      translation:
        "Özellikle finans ve sigorta sektörü için yazılım çözümlerine odaklanıyoruz.",
    },
    {
      original:
        "Aufgrund Ihrer überzeugenden Internetpräsenz und positiver Referenzen sind wir auf Ihr Unternehmen aufmerksam geworden.",
      translation:
        "İkna edici internet varlığınız ve olumlu referanslarınız sayesinde şirketinizi fark ettik.",
    },
    {
      original:
        "Wir bitten Sie daher, uns nähere Informationen zu Ihren Dienstleistungen, Referenzprojekten und möglichen Kooperationsmodellen zukommen zu lassen.",
      translation:
        "Bu nedenle, hizmetleriniz, referans projeleriniz ve olası işbirliği modelleri hakkında daha fazla bilgi göndermenizi rica ediyoruz.",
    },
    {
      original:
        "Besonders interessieren uns Ihre Erfahrungen in der Backend-Entwicklung mit Node.js sowie Ihre Expertise bei der Integration von Open Banking APIs.",
      translation:
        "Özellikle Node.js ile arka uç geliştirme deneyiminiz ve Açık Bankacılık API'lerinin entegrasyonundaki uzmanlığınızla ilgileniyoruz.",
    },
    {
      original:
        "Bitte übersenden Sie uns zudem Ihre allgemeinen Geschäftsbedingungen und eine aktuelle Preisliste.",
      translation:
        "Lütfen bize genel şartlarınızı ve güncel bir fiyat listesi de gönderin.",
    },
    {
      original:
        "Wir planen, erste Gespräche im Laufe des kommenden Monats zu führen, und wären Ihnen für eine Rückmeldung bis spätestens 30. April sehr dankbar.",
      translation:
        "Önümüzdeki ay içinde ilk görüşmeleri yapmayı planlıyoruz ve en geç 30 Nisan'a kadar bir cevap verirseniz çok memnun oluruz.",
    },
    {
      original:
        "Für Rückfragen stehen wir Ihnen selbstverständlich telefonisch oder per E-Mail zur Verfügung.",
      translation:
        "Sorularınız için telefon veya e-posta yoluyla hizmetinizdeyiz.",
    },
    {
      original:
        "Wir freuen uns auf Ihre Antwort und eine mögliche zukünftige Zusammenarbeit.",
      translation:
        "Cevabınızı ve olası gelecekteki işbirliğimizi dört gözle bekliyoruz.",
    },
    {
      original: "Mit freundlichen Grüßen",
      translation: "Saygılarımızla",
    },
    {
      original: "[Ihr Name]",
      translation: "[Adınız]",
    },
  ];

  // State to track which line is showing translation
  const [translatedLineIndex, setTranslatedLineIndex] = useState(null);

  // Toggle translation for a specific line
  const toggleTranslation = (index) => {
    if (translatedLineIndex === index) {
      setTranslatedLineIndex(null);
    } else {
      setTranslatedLineIndex(index);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <div className="border-b-2 border-gray-200 pb-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Geschäftsbrief</h1>
        <p className="text-sm text-gray-500 mt-1">
          Klicken Sie auf eine Zeile für die türkische Übersetzung
        </p>
      </div>

      <div className="space-y-4 text-gray-700">
        {textLines.map((line, index) => (
          <p
            key={index}
            className={`cursor-pointer p-2 rounded-md transition-colors duration-200 ${
              translatedLineIndex === index ? "bg-blue-50" : "hover:bg-gray-50"
            }`}
            onClick={() => toggleTranslation(index)}
          >
            {translatedLineIndex === index ? line.translation : line.original}
          </p>
        ))}
      </div>

      <div className="mt-8 pt-4 border-t border-gray-200 text-center text-sm text-gray-500">
        Deutsch ⟷ Türkisch Interaktiver Brief
      </div>
    </div>
  );
};

export default Mektup1;
