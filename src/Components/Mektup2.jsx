import React, { useState } from "react";

const Mektup2 = () => {
  // Original text lines and their translations
  const textLines = [
    {
      original:
        "Betreff: Beschwerde bezüglich der verspäteten Lieferung und beschädigter Ware",
      translation: "Konu: Geç teslimat ve hasarlı ürünlerle ilgili şikayet",
    },
    {
      original: "Sehr geehrter Herr Schuster,",
      translation: "Sayın Bay Schuster,",
    },
    {
      original: "leider muss ich mich mit einer Beschwerde an Sie wenden.",
      translation: "Maalesef size bir şikayette bulunmak zorundayım.",
    },
    {
      original:
        "Am 12. März haben wir bei Ihnen 50 Stück des Produkts „Zahlterminal X300 bestellt, die laut Auftragsbestätigung spätestens am 25. März eintreffen sollten.",
      translation:
        "12 Mart'ta sizden 50 adet 'Ödeme Terminali X300' ürünü sipariş ettik ve sipariş onayına göre en geç 25 Mart'ta teslim edilmesi gerekiyordu.",
    },
    {
      original:
        "Tatsächlich wurde die Lieferung erst am 3. April – also mehr als eine Woche verspätet – geliefert.",
      translation:
        "Ancak teslimat 3 Nisan'da – yani bir haftadan fazla gecikmeyle – gerçekleşti.",
    },
    {
      original:
        "Bei der Entgegennahme mussten wir zudem feststellen, dass mehrere Geräte erhebliche Schäden aufwiesen und nicht betriebsbereit sind.",
      translation:
        "Ayrıca, teslim alırken birçok cihazın önemli hasarlar taşıdığını ve çalışır durumda olmadığını tespit ettik.",
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
        "Bu nedenle, olayı dahili olarak incelemenizi ve en geç 10 Nisan'a kadar bana yazılı bir açıklama göndermenizi acilen rica ediyorum.",
    },
    {
      original:
        "Zudem erwarten wir entweder den sofortigen Ersatz der beschädigten Geräte oder eine entsprechende Gutschrift.",
      translation:
        "Ayrıca, hasarlı cihazların derhal değiştirilmesini veya uygun bir kredi notu düzenlenmesini bekliyoruz.",
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
        <h1 className="text-2xl font-bold text-gray-800">Beschwerdebrief</h1>
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
        Deutsch ⟷ Türkisch Interaktiver Beschwerdebrief
      </div>
    </div>
  );
};

export default Mektup2;
