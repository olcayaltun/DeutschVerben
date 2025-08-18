// src/components/Quiz.js
import React, { useState } from "react";

const questions = [
  {
    id: 1,
    question:
      "Welche Aussage über Auslandsaufenthalte beim Sprachenlernen ist korrekt?",
    options: [
      "a) Der Anreiz, im Ausland zu studieren, beschränkt sich hauptsächlich auf finanzielle Vorteile.",
      "b) Ein Auslandsaufenthalt bietet den Vorteil des natürlichen Spracherwerbs durch tägliche Kommunikation.",
      "c) Auslandsaufenthalte sind nur für fortgeschrittene Lerner sinnvoll.",
    ],
    correct: "b",
    correctText:
      "b) Ein Auslandsaufenthalt bietet den Vorteil des natürlichen Spracherwerbs durch tägliche Kommunikation.",
  },
  {
    id: 2,
    question:
      '"Während meines Auslandsaufenthalts habe ich die Sprache viel besser gelernt." Diese Aussage impliziert:',
    options: [
      "a) Dass theoretisches Lernen im Klassenzimmer ineffektiv ist.",
      "b) Dass praktische Anwendung im natürlichen Umfeld den Lernprozess beschleunigt.",
      "c) Dass Auslandsaufenthalte die einzige Möglichkeit zum Sprachenlernen darstellen.",
    ],
    correct: "b",
    correctText:
      "b) Dass praktische Anwendung im natürlichen Umfeld den Lernprozess beschleunigt.",
  },
  {
    id: 3,
    question:
      "Welche Kombination beschreibt am besten einen idealen Sprachlerner?",
    options: [
      "a) stockend, theoretisch, entmutigt",
      "b) fließend, praktisch, motiviert",
      "c) bekannt, verpflichtend, wirkungslos",
    ],
    correct: "b",
    correctText: "b) fließend, praktisch, motiviert",
  },
  {
    id: 4,
    question:
      '"Die sprachlichen Hindernisse haben sie nicht entmutigt." Dies bedeutet:',
    options: [
      "a) Sie hat trotz Schwierigkeiten ihre Motivation beibehalten.",
      "b) Sie hat aufgrund der Probleme das Lernen aufgegeben.",
      "c) Die Hindernisse waren zu unbedeutend, um sie zu beeinflussen.",
    ],
    correct: "a",
    correctText:
      "a) Sie hat trotz Schwierigkeiten ihre Motivation beibehalten.",
  },
  {
    id: 5,
    question:
      "Welche Aussage über Fehler beim Sprachenlernen ist am zutreffendsten?",
    options: [
      "a) Fehler sollten um jeden Preis vermieden werden, da sie den Lernprozess behindern.",
      "b) Menschen, die Fehler machen, entwickeln ein tieferes Verständnis für die Sprache.",
      "c) Fehler sind nur bei Anfängern akzeptabel, fortgeschrittene Lerner sollten fehlerfrei sprechen.",
    ],
    correct: "b",
    correctText:
      "b) Menschen, die Fehler machen, entwickeln ein tieferes Verständnis für die Sprache.",
  },
  {
    id: 6,
    question:
      '"Die Angst vor Fehlern kann das Sprechen hemmen." Um diesem Problem zu begegnen, sollte man:',
    options: [
      "a) Nur sprechen, wenn man sich völlig sicher fühlt.",
      "b) Fehler als elementaren Teil des Lernprozesses akzeptieren.",
      "c) Ausschließlich schriftliche Kommunikation bevorzugen.",
    ],
    correct: "b",
    correctText:
      "b) Fehler als elementaren Teil des Lernprozesses akzeptieren.",
  },
  {
    id: 7,
    question: "Welche Wortbildung ist korrekt?",
    options: [
      "a) die Angst → ängstlich, das Verständnis → verständlich",
      "b) die Sicherheit → sicherlich, der Nutzen → genützt",
      "c) die Kommunikation → kommuniziert, die Garantie → garantisch",
    ],
    correct: "a",
    correctText: "a) die Angst → ängstlich, das Verständnis → verständlich",
  },
  {
    id: 8,
    question:
      '"Er ist sehr selbstbewusst beim Sprechen." Das zugehörige Nomen ist:',
    options: [
      "a) die Selbstbewusstheit",
      "b) das Selbstbewusstsein",
      "c) die Selbstbewusstung",
    ],
    correct: "b",
    correctText: "b) das Selbstbewusstsein",
  },
  {
    id: 9,
    question: '"Auf etwas eingehen" hat die ähnliche Bedeutung wie:',
    options: [
      "a) sich von etwas fernhalten",
      "b) etwas thematisieren",
      "c) etwas ignorieren",
    ],
    correct: "b",
    correctText: "b) etwas thematisieren",
  },
  {
    id: 10,
    question: 'Das Gegenteil von "ein elementarer Teil" ist:',
    options: [
      "a) ein grundlegender Teil",
      "b) ein unwichtiger Teil",
      "c) ein zusätzlicher Teil",
    ],
    correct: "b",
    correctText: "b) ein unwichtiger Teil",
  },
  {
    id: 11,
    question: '"Eine Art Schockstarre" beschreibt:',
    options: [
      "a) eine plötzliche Freude",
      "b) einen Zustand des Schocks und der Bewegungslosigkeit",
      "c) eine schnelle Reaktion",
    ],
    correct: "b",
    correctText: "b) einen Zustand des Schocks und der Bewegungslosigkeit",
  },
  {
    id: 12,
    question:
      '"Auf welchem Niveau schätzt du dich momentan?" - Die grammatische Analyse dieses Satzes zeigt:',
    options: [
      'a) "welchem" steht im Dativ wegen der Präposition "auf"',
      'b) "welchem" steht im Akkusativ als direktes Objekt',
      'c) "welchem" ist ein Adverb der Zeit',
    ],
    correct: "a",
    correctText: 'a) "welchem" steht im Dativ wegen der Präposition "auf"',
  },
  {
    id: 13,
    question: '"Dadurch allerdings" drückt aus:',
    options: [
      "a) Eine uneingeschränkt positive Konsequenz",
      "b) Eine Konsequenz mit einschränkender oder überraschender Wirkung",
      "c) Einen reinen Zeitbezug ohne kausale Verbindung",
    ],
    correct: "b",
    correctText:
      "b) Eine Konsequenz mit einschränkender oder überraschender Wirkung",
  },
  {
    id: 14,
    question:
      '"Dann kommen wir zur 2. Aufgabe und die betrifft sicherlich einen großen Teil von euch." Das Wort "betrifft" bedeutet hier:',
    options: [
      "a) erreicht physisch",
      "b) ist relevant für / geht an",
      "c) kritisiert scharf",
    ],
    correct: "b",
    correctText: "b) ist relevant für / geht an",
  },
  {
    id: 15,
    question: '"ansprichst" in der Frage "Was sprichst du an?" bedeutet:',
    options: [
      "a) Du unterbrichst jemanden beim Sprechen",
      "b) Du gehst auf jemanden zu und redest ihn an",
      "c) Du erwähnst oder thematisierst etwas",
    ],
    correct: "c",
    correctText: "c) Du erwähnst oder thematisierst etwas",
  },
  {
    id: 16,
    question:
      '"Die Studie wird von Experten durchgeführt." Dies ist ein Beispiel für:',
    options: [
      'a) Perfekt (Vergangenheit) mit Hilfsverb "werden"',
      "b) Passiv (Leideform) im Präsens",
      "c) Futur I (Zukunft) mit modalem Aspekt",
    ],
    correct: "b",
    correctText: "b) Passiv (Leideform) im Präsens",
  },
  {
    id: 17,
    question: '"Derjenige, der viel übt, wird besser." - "Derjenige" ist:',
    options: [
      "a) Ein bestimmter Artikel im Maskulinum",
      "b) Ein Demonstrativpronomen zur besonderen Betonung",
      "c) Ein Relativpronomen im Nominativ",
    ],
    correct: "b",
    correctText: "b) Ein Demonstrativpronomen zur besonderen Betonung",
  },
  {
    id: 18,
    question:
      'Die korrekte Deklination von "derjenige" im Femininum Akkusativ ist:',
    options: ["a) derjenige", "b) diejenige", "c) dasjenige"],
    correct: "b",
    correctText: "b) diejenige",
  },
  {
    id: 19,
    question:
      '"Übrigens, ich habe morgen frei." - "Übrigens" wird hier verwendet, um:',
    options: [
      "a) Ein wichtiges Hauptthema einzuleiten",
      "b) Eine zusätzliche Information beiläufig einzufügen",
      "c) Eine Begründung für das Folgende zu geben",
    ],
    correct: "b",
    correctText: "b) Eine zusätzliche Information beiläufig einzufügen",
  },
  {
    id: 20,
    question:
      '"eingehen" in "eine Beziehung eingehen" vs. "auf ein Thema eingehen" - Der Unterschied liegt darin, dass:',
    options: [
      "a) Beide Verwendungen identische Bedeutungen haben",
      'b) Die erste bedeutet "beginnen/starten", die zweite "behandeln/thematisieren"',
      "c) Die erste ist reflexiv, die zweite transitiv verwendet",
    ],
    correct: "b",
    correctText:
      'b) Die erste bedeutet "beginnen/starten", die zweite "behandeln/thematisieren"',
  },
  {
    id: 21,
    category: "Bağlaçlar ve Geçiş İfadeleri",
    question: '"Übrigens" kelimesi ne zaman kullanılır?',
    options: [
      "a) Sadece cümle başında",
      "b) Ek bilgi verirken/konu değiştirirken",
      "c) Sadece soru cümlelerinde",
    ],
    correct: "b",
    correctText: "b) Ek bilgi verirken/konu değiştirirken",
  },
  {
    id: 22,
    category: "Bağlaçlar ve Geçiş İfadeleri",
    question:
      '"Übrigens, ich habe morgen frei" cümlesinin Türkçe karşılığı nedir?',
    options: [
      "a) Aslında, yarın çalışacağım",
      "b) Bu arada, yarın izinliyim",
      "c) Tabii ki, yarın müsaitim",
    ],
    correct: "b",
    correctText: "b) Bu arada, yarın izinliyim",
  },
  // Bölüm 9: İdiomatik İfadeler
  {
    id: 23,
    category: "İdiomatik İfadeler",
    question: '"Eine Beziehung eingehen" ne demektir?',
    options: [
      "a) Bir ilişkiyi bitirmek",
      "b) Bir ilişkiye girmek",
      "c) Bir ilişkiyi görmezden gelmek",
    ],
    correct: "b",
    correctText: "b) Bir ilişkiye girmek",
  },
  {
    id: 24,
    category: "İdiomatik İfadeler",
    question: '"Auf ein Thema eingehen" ifadesi ne anlama gelir?',
    options: [
      "a) Bir konuyu görmezden gelmek",
      "b) Bir konudan kaçmak",
      "c) Bir konuya değinmek/ele almak",
    ],
    correct: "c",
    correctText: "c) Bir konuya değinmek/ele almak",
  },
  // Bölüm 10: Metin Anlayışı ve Bağlam
  {
    id: 25,
    category: "Metin Anlayışı ve Bağlam",
    question: "Notlara göre, yabancı dil öğreniminde hatalar neden önemlidir?",
    options: [
      "a) Çünkü hatalar öğrenmeyi engeller",
      "b) Çünkü hatalar dil için daha derin anlayış geliştirir",
      "c) Çünkü hatalar konuşmayı kolaylaştırır",
    ],
    correct: "b",
    correctText: "b) Çünkü hatalar dil için daha derin anlayış geliştirir",
  },
  {
    id: 26,
    category: "Metin Anlayışı ve Bağlam",
    question: '"Eine Art Schockstarre" ifadesi neyi tanımlar?',
    options: [
      "a) Ani bir sevinç",
      "b) Hızlı bir başarı",
      "c) Şok ve hareketsizlik durumu",
    ],
    correct: "c",
    correctText: "c) Şok ve hareketsizlik durumu",
  },
  {
    id: 27,
    category: "Metin Anlayışı ve Bağlam",
    question: 'Metne göre, dil öğreniminde "Zeit investieren" ne sağlar?',
    options: [
      "a) Daha az ilerleme",
      "b) Daha büyük ilerleme",
      "c) Aynı seviyede kalma",
    ],
    correct: "b",
    correctText: "b) Daha büyük ilerleme",
  },
  // Bölüm 11: Sağlık ve Yaşam Kalitesi
  {
    id: 28,
    category: "Sağlık ve Yaşam Kalitesi",
    question: '"Das Wohlbefinden" kelimesi neyi ifade eder?',
    options: ["a) Hastalık", "b) İyi oluş, esenlik", "c) Yorgunluk"],
    correct: "b",
    correctText: "b) İyi oluş, esenlik",
  },
  {
    id: 29,
    category: "Sağlık ve Yaşam Kalitesi",
    question: '"Unbeschwert leben" ne demektir?',
    options: [
      "a) Sıkıntısız, tasasız yaşamak",
      "b) Zorlu yaşamak",
      "c) Yalnız yaşamak",
    ],
    correct: "a",
    correctText: "a) Sıkıntısız, tasasız yaşamak",
  },
  {
    id: 30,
    category: "Sağlık ve Yaşam Kalitesi",
    question: '"Eine Vorsorgeuntersuchung machen" ifadesi ne anlama gelir?',
    options: [
      "a) Ameliyat olmak",
      "b) Önleyici muayene yaptırmak",
      "c) İlaç almak",
    ],
    correct: "b",
    correctText: "b) Önleyici muayene yaptırmak",
  },
  // Bölüm 12: Antonimler ve Eş Anlamlılar (Sağlık)
  {
    id: 31,
    category: "Antonimler ve Eş Anlamlılar (Sağlık)",
    question: '"Einschränken" kelimesinin eş anlamlısı hangisidir?',
    options: ["a) Erweitern", "b) Begrenzen", "c) Verbessern"],
    correct: "b",
    correctText: "b) Begrenzen",
  },
  {
    id: 32,
    category: "Antonimler ve Eş Anlamlılar (Sağlık)",
    question: '"Beschwerdefrei" kelimesinin anlamı nedir?',
    options: ["a) Ağrılı", "b) Schmerzfrei (ağrısız)", "c) Hasta"],
    correct: "b",
    correctText: "b) Schmerzfrei (ağrısız)",
  },
  {
    id: 33,
    category: "Antonimler ve Eş Anlamlılar (Sağlık)",
    question: '"Vernachlässigen" kelimesinin zıt anlamlısı nedir?',
    options: ["a) Ignorieren", "b) Pflegen", "c) Vergessen"],
    correct: "b",
    correctText: "b) Pflegen",
  },
  // Bölüm 13: Sosyal Medya ve Dijital Bağımlılık
  {
    id: 34,
    category: "Sosyal Medya ve Dijital Bağımlılık",
    question: '"Zeitfresser" kelimesi neyi ifade eder?',
    options: ["a) Zaman kazandıran şey", "b) Zaman yiyici", "c) Zaman ölçer"],
    correct: "b",
    correctText: "b) Zaman yiyici",
  },
  {
    id: 35,
    category: "Sosyal Medya ve Dijital Bağımlılık",
    question: '"Prokrastination" ne demektir?',
    options: [
      "a) Erken davranmak",
      "b) Erteleme alışkanlığı",
      "c) Hızlı çalışmak",
    ],
    correct: "b",
    correctText: "b) Erteleme alışkanlığı",
  },
  {
    id: 36,
    category: "Sosyal Medya ve Dijital Bağımlılık",
    question: '"Die Bildschirmzeit begrenzen" ne anlama gelir?',
    options: [
      "a) Ekran süresini sınırlamak",
      "b) Ekran süresini artırmak",
      "c) Ekranı temizlemek",
    ],
    correct: "a",
    correctText: "a) Ekran süresini sınırlamak",
  },
  // Bölüm 14: Bileşik Fiiller ve Anlamları
  {
    id: 37,
    category: "Bileşik Fiiller ve Anlamları",
    question: '"Durchlesen" fiilinin anlamı nedir?',
    options: [
      "a) Hızlıca göz atmak",
      "b) Baştan sona dikkatlice okumak",
      "c) Okumayı bırakmak",
    ],
    correct: "b",
    correctText: "b) Baştan sona dikkatlice okumak",
  },
  {
    id: 38,
    category: "Bileşik Fiiller ve Anlamları",
    question: '"Sich umstellen" fiili ne demektir?',
    options: [
      "a) Ayakta durmak",
      "b) Bir şeye adapte olmak, alışmak",
      "c) Geri dönmek",
    ],
    correct: "b",
    correctText: "b) Bir şeye adapte olmak, alışmak",
  },
  {
    id: 39,
    category: "Bileşik Fiiller ve Anlamları",
    question: '"Abstand halten" ifadesi ne anlama gelir?',
    options: [
      "a) Yaklaşmak",
      "b) Mesafe bırakmak, uzak durmak",
      "c) Yardım etmek",
    ],
    correct: "b",
    correctText: "b) Mesafe bırakmak, uzak durmak",
  },
  // Bölüm 15: Stres ve Başa Çıkma Yöntemleri
  {
    id: 40,
    category: "Stres ve Başa Çıkma Yöntemleri",
    question: '"Stressphasen" kelimesi neyi tanımlar?',
    options: ["a) Mutlu anlar", "b) Stresli dönemler", "c) Tatil zamanları"],
    correct: "b",
    correctText: "b) Stresli dönemler",
  },
  {
    id: 41,
    category: "Stres ve Başa Çıkma Yöntemleri",
    question: '"Stressbewältigung" ne demektir?',
    options: [
      "a) Stres yaratmak",
      "b) Stresle başa çıkma",
      "c) Stresi görmezden gelmek",
    ],
    correct: "b",
    correctText: "b) Stresle başa çıkma",
  },
  {
    id: 42,
    category: "Stres ve Başa Çıkma Yöntemleri",
    question: '"Bewährte Techniken" ifadesi ne anlama gelir?',
    options: [
      "a) Yeni yöntemler",
      "b) Kanıtlanmış, denenmiş teknikler",
      "c) Riskli yöntemler",
    ],
    correct: "b",
    correctText: "b) Kanıtlanmış, denenmiş teknikler",
  },
  // Bölüm 16: Günlük Hayat ve Alışkanlıklar
  {
    id: 43,
    category: "Günlük Hayat ve Alışkanlıklar",
    question: '"Handyfrei verbringen" ne demektir?',
    options: [
      "a) Telefonla zaman geçirmek",
      "b) Telefonsuz zaman geçirmek",
      "c) Telefonu tamir etmek",
    ],
    correct: "b",
    correctText: "b) Telefonsuz zaman geçirmek",
  },
  {
    id: 44,
    category: "Günlük Hayat ve Alışkanlıklar",
    question: '"Ein analoger Wecker" nedir?',
    options: [
      "a) Dijital saat",
      "b) Geleneksel çalar saat",
      "c) Telefon alarmı",
    ],
    correct: "b",
    correctText: "b) Geleneksel çalar saat",
  },
  {
    id: 45,
    category: "Günlük Hayat ve Alışkanlıklar",
    question: '"Benachrichtigungen ausschalten" ne anlama gelir?',
    options: [
      "a) Bildirimleri açmak",
      "b) Bildirimleri kapatmak",
      "c) Bildirimleri okumak",
    ],
    correct: "b",
    correctText: "b) Bildirimleri kapatmak",
  },
  // Bölüm 17: Malzeme ve Tekstil
  {
    id: 46,
    category: "Malzeme ve Tekstil",
    question: '"Schafwolle" ne demektir?',
    options: ["a) Pamuk", "b) Koyun yünü", "c) Sentetik kumaş"],
    correct: "b",
    correctText: "b) Koyun yünü",
  },
  {
    id: 47,
    category: "Malzeme ve Tekstil",
    question: '"Baumwolle" kelimesinin anlamı nedir?',
    options: ["a) Yün", "b) İpek", "c) Pamuk"],
    correct: "c",
    correctText: "c) Pamuk",
  },
  // Bölüm 18: Eğitim ve Kurs Kayıt
  {
    id: 48,
    category: "Eğitim ve Kurs Kayıt",
    question: '"Einen Kurs belegen" ne demektir?',
    options: ["a) Kursu bırakmak", "b) Kursa kaydolmak", "c) Kursu eleştirmek"],
    correct: "b",
    correctText: "b) Kursa kaydolmak",
  },
  {
    id: 49,
    category: "Eğitim ve Kurs Kayıt",
    question: '"Aussagen belegen" ifadesi ne anlama gelir?',
    options: [
      "a) Söylediklerini kanıtlamak",
      "b) Söylediklerini gizlemek",
      "c) Söylediklerini unutmak",
    ],
    correct: "a",
    correctText: "a) Söylediklerini kanıtlamak",
  },
  // Bölüm 19: Günlük Konuşma İfadeleri
  {
    id: 50,
    category: "Günlük Konuşma İfadeleri",
    question: '"Wie hat das geklappt?" sorusu ne demektir?',
    options: [
      "a) Bu ne zaman oldu?",
      "b) Nasıl oldu?/Nasıl sonuçlandı?",
      "c) Bu nerede oldu?",
    ],
    correct: "b",
    correctText: "b) Nasıl oldu?/Nasıl sonuçlandı?",
  },
  {
    id: 51,
    category: "Günlük Konuşma İfadeleri",
    question: '"Das ist jetzt Geschichte" ifadesi ne anlama gelir?',
    options: [
      "a) Bu tarihi önemli",
      "b) Artık geçmişte kaldı",
      "c) Bu gelecekte olacak",
    ],
    correct: "b",
    correctText: "b) Artık geçmişte kaldı",
  },
  {
    id: 52,
    category: "Günlük Konuşma İfadeleri",
    question: '"Mhh, clever!" ifadesi nasıl çevrilir?',
    options: ["a) Hımm, zekice!", "b) Bu çok kötü!", "c) Anlayamadım!"],
    correct: "a",
    correctText: "a) Hımm, zekice!",
  },
  // Bölüm 20: Özel Durumlar ve Bağlam
  {
    id: 53,
    category: "Özel Durumlar ve Bağlam",
    question: '"Teilweise" kelimesinin anlamı nedir?',
    options: ["a) Tamamen", "b) Kısmen, yer yer", "c) Hiç"],
    correct: "b",
    correctText: "b) Kısmen, yer yer",
  },
  {
    id: 54,
    category: "Özel Durumlar ve Bağlam",
    question: '"Insbesondere" kelimesi ne demektir?',
    options: ["a) Genel olarak", "b) Özellikle, bilhassa", "c) Nadiren"],
    correct: "b",
    correctText: "b) Özellikle, bilhassa",
  },
  {
    id: 55,
    category: "Özel Durumlar ve Bağlam",
    question: '"Profitieren von" ifadesi ne anlama gelir?',
    options: ["a) Zarar vermek", "b) Faydalanmak, yararlanmak", "c) Kaçmak"],
    correct: "b",
    correctText: "b) Faydalanmak, yararlanmak",
  },
  // Bölüm 21: Psikolojik Durumlar
  {
    id: 56,
    category: "Psikolojik Durumlar",
    question: '"Ein überzeugter Demokrat" ne demektir?',
    options: [
      "a) Şüpheci bir kişi",
      "b) Demokrasiyi kesinlikle savunan kişi",
      "c) Kararsız bir kişi",
    ],
    correct: "b",
    correctText: "b) Demokrasiyi kesinlikle savunan kişi",
  },
  {
    id: 57,
    category: "Psikolojik Durumlar",
    question: '"Durch ein Tief gehen" ifadesi ne anlama gelir?',
    options: [
      "a) Mutlu bir dönem geçirmek",
      "b) Kötü dönem/çöküş yaşamak",
      "c) Sıradan bir gün geçirmek",
    ],
    correct: "b",
    correctText: "b) Kötü dönem/çöküş yaşamak",
  },
  {
    id: 58,
    category: "Psikolojik Durumlar",
    question: '"Selbstfürsorge" kelimesi neyi ifade eder?',
    options: ["a) Başkalarına bakmak", "b) Öz bakım", "c) Sorumluluk almamak"],
    correct: "b",
    correctText: "b) Öz bakım",
  },
  // Bölüm 22: Fiil Çekimleri ve Zamanlar
  {
    id: 59,
    category: "Fiil Çekimleri ve Zamanlar",
    question: '"Er prokrastiniert oft" cümlesindeki fiil ne demektir?',
    options: [
      "a) Erken başlamak",
      "b) Erteleme hastalığına kapılmak",
      "c) Hızlı bitirmek",
    ],
    correct: "b",
    correctText: "b) Erteleme hastalığına kapılmak",
  },
  {
    id: 60,
    category: "Fiil Çekimleri ve Zamanlar",
    question: '"Ich habe ihn überzeugt" cümlesinin anlamı nedir?',
    options: ["a) Onu ikna ettim", "b) Ondan kaçtım", "c) Onu gördüm"],
    correct: "a",
    correctText: "a) Onu ikna ettim",
  },
  // Bölüm 23: Duygular ve Tutumlar
  {
    id: 61,
    category: "Duygular ve Tutumlar",
    question: '"Begeistert sein" ne demektir?',
    options: [
      "a) Üzgün olmak",
      "b) Çok hevesli, etkilenmiş olmak",
      "c) Kızgın olmak",
    ],
    correct: "b",
    correctText: "b) Çok hevesli, etkilenmiş olmak",
  },
  {
    id: 62,
    category: "Duygular ve Tutumlar",
    question: '"Unbedingt" kelimesinin anlamı nedir?',
    options: ["a) Belki", "b) Kesinlikle, mutlaka", "c) Asla"],
    correct: "b",
    correctText: "b) Kesinlikle, mutlaka",
  },
  {
    id: 63,
    category: "Duygular ve Tutumlar",
    question: '"Aufregend" sıfatının eş anlamlısı hangisidir?',
    options: ["a) Sıkıcı", "b) Spannend (heyecan verici)", "c) Ruhsuz"],
    correct: "b",
    correctText: "b) Spannend (heyecan verici)",
  },
  // Bölüm 24: İkna ve Karar Verme
  {
    id: 64,
    category: "İkna ve Karar Verme",
    question: '"Überreden" fiilinin anlamı nedir?',
    options: ["a) Reddetmek", "b) İkna etmek", "c) Unutmak"],
    correct: "b",
    correctText: "b) İkna etmek",
  },
  {
    id: 65,
    category: "İkna ve Karar Verme",
    question: '"Sich entscheiden" ne demektir?',
    options: ["a) Tereddüt etmek", "b) Karar vermek", "c) Vazgeçmek"],
    correct: "b",
    correctText: "b) Karar vermek",
  },
  {
    id: 66,
    category: "İkna ve Karar Verme",
    question: '"Entschlossen" sıfatının eş anlamlısı hangisidir?',
    options: [
      "a) Entschieden (kararlı, azimli)",
      "b) Unentschlossen",
      "c) Gleichgültig",
    ],
    correct: "a",
    correctText: "a) Entschieden (kararlı, azimli)",
  },
  // Bölüm 25: Zorluklar ve Duygusal Durumlar
  {
    id: 67,
    category: "Zorluklar ve Duygusal Durumlar",
    question: '"Anstrengend" kelimesinin eş anlamlısı nedir?',
    options: ["a) Ermüdend (yorucu)", "b) Entspannend", "c) Leicht"],
    correct: "a",
    correctText: "a) Ermüdend (yorucu)",
  },
  {
    id: 68,
    category: "Zorluklar ve Duygusal Durumlar",
    question: '"Herausfordernd" ne demektir?',
    options: ["a) Kolay", "b) Zorlu, meydan okuyan", "c) Monoton"],
    correct: "b",
    correctText: "b) Zorlu, meydan okuyan",
  },
  {
    id: 69,
    category: "Zorluklar ve Duygusal Durumlar",
    question: '"Grundlegend" sıfatının eş anlamlısı hangisidir?',
    options: [
      "a) Unwichtig",
      "b) Wesentlich (temel, önemli)",
      "c) Oberflächlich",
    ],
    correct: "b",
    correctText: "b) Wesentlich (temel, önemli)",
  },
  // Bölüm 26: Cinsiyet Adaletsiz Dil (Gendern)
  {
    id: 70,
    category: "Cinsiyet Adaletsiz Dil (Gendern)",
    question: '"Gendern" ne demektir?',
    options: [
      "a) Sadece erkek formu kullanmak",
      "b) Cinsiyetçi olmayan dil kullanımı",
      "c) Kadın formu kullanmamak",
    ],
    correct: "b",
    correctText: "b) Cinsiyetçi olmayan dil kullanımı",
  },
  {
    id: 71,
    category: "Cinsiyet Adaletsiz Dil (Gendern)",
    question: '"Ausgeschlossen fühlen" ifadesi ne anlama gelir?',
    options: [
      "a) Dahil edilmiş hissetmek",
      "b) Dışlanmış hissetmek",
      "c) Özel hissetmek",
    ],
    correct: "b",
    correctText: "b) Dışlanmış hissetmek",
  },
  {
    id: 72,
    category: "Cinsiyet Adaletsiz Dil (Gendern)",
    question: '"In Erscheinung treten" ne demektir?',
    options: [
      "a) Gizlenmek",
      "b) Ortaya çıkmak, görünür olmak",
      "c) Kaybolmak",
    ],
    correct: "b",
    correctText: "b) Ortaya çıkmak, görünür olmak",
  },
  // Bölüm 27: Akademik Fiiller ve İfadeler
  {
    id: 73,
    category: "Akademik Fiiller ve İfadeler",
    question: '"Verfassen" fiilinin eş anlamlısı hangisidir?',
    options: ["a) Schreiben (yazmak)", "b) Lesen", "c) Sprechen"],
    correct: "a",
    correctText: "a) Schreiben (yazmak)",
  },
  {
    id: 74,
    category: "Akademik Fiiller ve İfadeler",
    question: '"Thematisieren" kelimesinin eş anlamlısı nedir?',
    options: [
      "a) Ignorieren",
      "b) Ansprechen (gündeme getirmek)",
      "c) Vergessen",
    ],
    correct: "b",
    correctText: "b) Ansprechen (gündeme getirmek)",
  },
  {
    id: 75,
    category: "Akademik Fiiller ve İfadeler",
    question: '"Formulieren" ne demektir?',
    options: ["a) Silmek", "b) İfade etmek, oluşturmak", "c) Okumak"],
    correct: "b",
    correctText: "b) İfade etmek, oluşturmak",
  },
  // Bölüm 28: Göç ve Yaşam Değişiklikleri
  {
    id: 76,
    category: "Göç ve Yaşam Değişiklikleri",
    question: '"Auswandern" fiilinin anlamı nedir?',
    options: [
      "a) Ülke içinde taşınmak",
      "b) Göç etmek, yurt dışına taşınmak",
      "c) Tatile gitmek",
    ],
    correct: "b",
    correctText: "b) Göç etmek, yurt dışına taşınmak",
  },
  {
    id: 77,
    category: "Göç ve Yaşam Değişiklikleri",
    question: '"Es hat geklappt" ifadesi ne demektir?',
    options: [
      "a) Başarısız oldu",
      "b) Oldu! Başardı! Yolunda gitti!",
      "c) Hiç başlamadı",
    ],
    correct: "b",
    correctText: "b) Oldu! Başardı! Yolunda gitti!",
  },
  {
    id: 78,
    category: "Göç ve Yaşam Değişiklikleri",
    question: '"Die Grundlagen lernen" ne anlama gelir?',
    options: [
      "a) İleri seviye öğrenmek",
      "b) Temelleri, esasları öğrenmek",
      "c) Hiçbir şey öğrenmemek",
    ],
    correct: "b",
    correctText: "b) Temelleri, esasları öğrenmek",
  },
  // Bölüm 29: Tartışma ve İletişim
  {
    id: 79,
    category: "Tartışma ve İletişim",
    question: '"Eine Debatte" nedir?',
    options: ["a) Sessiz kalma", "b) Tartışma, münazara", "c) Monolog"],
    correct: "b",
    correctText: "b) Tartışma, münazara",
  },
  {
    id: 80,
    category: "Tartışma ve İletişim",
    question: '"Diskutieren" fiilinin eş anlamlısı hangisidir?',
    options: ["a) Debattieren (tartışmak)", "b) Schweigen", "c) Zuhören"],
    correct: "a",
    correctText: "a) Debattieren (tartışmak)",
  },
  // Bölüm 30: Tutarlılık ve Mantık
  {
    id: 81,
    category: "Tutarlılık ve Mantık",
    question: '"Kohärent" ne demektir?',
    options: ["a) Tutarsız", "b) Tutarlı, uyumlu", "c) Karmaşık"],
    correct: "b",
    correctText: "b) Tutarlı, uyumlu",
  },
  {
    id: 82,
    category: "Tutarlılık ve Mantık",
    question: '"Konsequent handeln" ne anlama gelir?',
    options: [
      "a) Kararsız davranmak",
      "b) Tutarlı, kararlı davranmak",
      "c) Rastgele davranmak",
    ],
    correct: "b",
    correctText: "b) Tutarlı, kararlı davranmak",
  },
  {
    id: 83,
    category: "Tutarlılık ve Mantık",
    question: '"Inkohärent" kelimesinin anlamı nedir?',
    options: [
      "a) Çok tutarlı",
      "b) Tutarsız, dağınık, çelişkili",
      "c) Açık ve net",
    ],
    correct: "b",
    correctText: "b) Tutarsız, dağınık, çelişkili",
  },
  // Bölüm 31: Süreç ve Yöntem
  {
    id: 84,
    category: "Süreç ve Yöntem",
    question: '"Umständlich" sıfatı ne demektir?',
    options: ["a) Basit ve kolay", "b) Zahmetli, karmaşık", "c) Hızlı"],
    correct: "b",
    correctText: "b) Zahmetli, karmaşık",
  },
  {
    id: 85,
    category: "Süreç ve Yöntem",
    question: '"Sich etablieren" ne anlama gelir?',
    options: [
      "a) Başarısız olmak",
      "b) Yerleşmek, kendini kabul ettirmek",
      "c) Vazgeçmek",
    ],
    correct: "b",
    correctText: "b) Yerleşmek, kendini kabul ettirmek",
  },
  // Bölüm 32: Rüya ve Psikoloji
  {
    id: 86,
    category: "Rüya ve Psikoloji",
    question: '"Der Albtraum" kelimesinin anlamı nedir?',
    options: ["a) Güzel rüya", "b) Kâbus", "c) Uyanıklık"],
    correct: "b",
    correctText: "b) Kâbus",
  },
  {
    id: 87,
    category: "Rüya ve Psikoloji",
    question: '"Einen schrecklichen Albtraum haben" ne demektir?',
    options: [
      "a) Güzel rüya görmek",
      "b) Korkunç kâbus görmek",
      "c) Uyuyamamak",
    ],
    correct: "b",
    correctText: "b) Korkunç kâbus görmek",
  },
  // Bölüm 33: Çevre Koruma ve Sürdürülebilirlik
  {
    id: 88,
    category: "Çevre Koruma ve Sürdürülebilirlik",
    question: '"Die Umwelt schonen" ne demektir?',
    options: [
      "a) Çevreye zarar vermek",
      "b) Çevreyi korumak",
      "c) Çevreyi görmezden gelmek",
    ],
    correct: "b",
    correctText: "b) Çevreyi korumak",
  },
  {
    id: 89,
    category: "Çevre Koruma ve Sürdürülebilirlik",
    question: '"Den Müll trennen" ifadesi ne anlama gelir?',
    options: [
      "a) Çöpü karıştırmak",
      "b) Çöpü ayırmak, sınıflandırmak",
      "c) Çöpü atmak",
    ],
    correct: "b",
    correctText: "b) Çöpü ayırmak, sınıflandırmak",
  },
  {
    id: 90,
    category: "Çevre Koruma ve Sürdürülebilirlik",
    question: '"Verweigern" fiilinin eş anlamlısı hangisidir?',
    options: ["a) Kabul etmek", "b) Ablehnen (reddetmek)", "c) Beklemek"],
    correct: "b",
    correctText: "b) Ablehnen (reddetmek)",
  },
  // Bölüm 34: Çevre Terimleri ve Kavramlar
  {
    id: 91,
    category: "Çevre Terimleri ve Kavramlar",
    question: '"CO2-Fußabdruck" ne demektir?',
    options: [
      "a) Ayak izi",
      "b) Karbon ayak izi (tüketim sonucu salınan karbon miktarı)",
      "c) Fiziksel iz",
    ],
    correct: "b",
    correctText: "b) Karbon ayak izi (tüketim sonucu salınan karbon miktarı)",
  },
  {
    id: 92,
    category: "Çevre Terimleri ve Kavramlar",
    question: '"Erneuerbare Energien" kelimesinin anlamı nedir?',
    options: [
      "a) Fosil yakıtlar",
      "b) Yenilenebilir enerji kaynakları",
      "c) Nükleer enerji",
    ],
    correct: "b",
    correctText: "b) Yenilenebilir enerji kaynakları",
  },
  {
    id: 93,
    category: "Çevre Terimleri ve Kavramlar",
    question: '"Eine Naturschutzorganisation" nedir?',
    options: [
      "a) Doğayı korumayı amaçlayan kurum",
      "b) İnşaat şirketi",
      "c) Teknoloji firması",
    ],
    correct: "a",
    correctText: "a) Doğayı korumayı amaçlayan kurum",
  },
  // Bölüm 35: Çevre Sorunları ve Çözümler
  {
    id: 94,
    category: "Çevre Sorunları ve Çözümler",
    question: '"Die Auswirkungen abschwächen" ne demektir?',
    options: [
      "a) Etkileri artırmak",
      "b) Etkileri hafifletmek, azaltmak",
      "c) Etkileri görmezden gelmek",
    ],
    correct: "b",
    correctText: "b) Etkileri hafifletmek, azaltmak",
  },
  {
    id: 95,
    category: "Çevre Sorunları ve Çözümler",
    question: '"Bewusstsein schaffen" ifadesi ne anlama gelir?',
    options: ["a) Farkındalık yaratmak", "b) Unutturmak", "c) Saklamak"],
    correct: "a",
    correctText: "a) Farkındalık yaratmak",
  },
  {
    id: 96,
    category: "Çevre Sorunları ve Çözümler",
    question: '"Sich für etwas einsetzen" ne demektir?',
    options: [
      "a) Bir şeyden kaçmak",
      "b) Bir şey için çaba göstermek, desteklemek",
      "c) Bir şeyi reddetmek",
    ],
    correct: "b",
    correctText: "b) Bir şey için çaba göstermek, desteklemek",
  },
  // Bölüm 36: Hayvan Dünyası ve Doğa
  {
    id: 97,
    category: "Hayvan Dünyası ve Doğa",
    question: '"Sich an die Umgebung anpassen" ne anlama gelir?',
    options: [
      "a) Çevreden kaçmak",
      "b) Uyum sağlamak",
      "c) Çevreyi değiştirmek",
    ],
    correct: "b",
    correctText: "b) Uyum sağlamak",
  },
  {
    id: 98,
    category: "Hayvan Dünyası ve Doğa",
    question: '"Etwas voraussagen" ne demektir?',
    options: ["a) Geçmişi hatırlamak", "b) Önceden tahmin etmek", "c) Unutmak"],
    correct: "b",
    correctText: "b) Önceden tahmin etmek",
  },
  {
    id: 99,
    category: "Hayvan Dünyası ve Doğa",
    question: '"Außergewöhnlich" kelimesinin zıt anlamlısı nedir?',
    options: ["a) Normal (sıradan)", "b) Büyük", "c) Hızlı"],
    correct: "a",
    correctText: "a) Normal (sıradan)",
  },
  // Bölüm 37: Moda ve Tekstil Sektörü
  {
    id: 100,
    category: "Moda ve Tekstil Sektörü",
    question: '"Fast Fashion" ne demektir?',
    options: [
      "a) Yavaş moda",
      "b) Hızlı moda (trend kıyafetlerin hızla üretilmesi)",
      "c) Pahalı moda",
    ],
    correct: "b",
    correctText: "b) Hızlı moda (trend kıyafetlerin hızla üretilmesi)",
  },
  {
    id: 101,
    category: "Moda ve Tekstil Sektörü",
    question: '"Fair Fashion" kelimesinin anlamı nedir?',
    options: [
      "a) Hızlı üretim",
      "b) Adil/sürdürülebilir moda",
      "c) Ucuz giyim",
    ],
    correct: "b",
    correctText: "b) Adil/sürdürülebilir moda",
  },
  {
    id: 102,
    category: "Moda ve Tekstil Sektörü",
    question: '"Ressourcenverschwendung" ne demektir?',
    options: ["a) Kaynak tasarrufu", "b) Kaynak israfı", "c) Kaynak üretimi"],
    correct: "b",
    correctText: "b) Kaynak israfı",
  },
  // Bölüm 38: Üretim ve Sanayi
  {
    id: 103,
    category: "Üretim ve Sanayi",
    question: '"Eine Textilfabrik" nedir?',
    options: [
      "a) Gıda fabrikası",
      "b) Tekstil fabrikası",
      "c) Otomobil fabrikası",
    ],
    correct: "b",
    correctText: "b) Tekstil fabrikası",
  },
  {
    id: 104,
    category: "Üretim ve Sanayi",
    question: '"Das Grundwasser verschmutzen" ne anlama gelir?',
    options: [
      "a) Yeraltı suyunu temizlemek",
      "b) Yeraltı suyunu kirletmek",
      "c) Su tasarrufu yapmak",
    ],
    correct: "b",
    correctText: "b) Yeraltı suyunu kirletmek",
  },
  {
    id: 105,
    category: "Üretim ve Sanayi",
    question: '"Hygienevorschriften einhalten" ne demektir?',
    options: [
      "a) Hijyen kurallarına uymak",
      "b) Hijyeni görmezden gelmek",
      "c) Temizlik yapmamak",
    ],
    correct: "a",
    correctText: "a) Hijyen kurallarına uymak",
  },
  // Bölüm 39: Yaşam Koşulları ve Toplum
  {
    id: 106,
    category: "Yaşam Koşulları ve Toplum",
    question: '"Lebensbedingungen" kelimesinin anlamı nedir?',
    options: ["a) Ölüm koşulları", "b) Yaşam koşulları", "c) Çalışma saatleri"],
    correct: "b",
    correctText: "b) Yaşam koşulları",
  },
  {
    id: 107,
    category: "Yaşam Koşulları ve Toplum",
    question: '"Beeinflusst werden" ne demektir?',
    options: ["a) Etkilenmek", "b) Etkilememek", "c) Kaçınmak"],
    correct: "a",
    correctText: "a) Etkilenmek",
  },
  {
    id: 108,
    category: "Yaşam Koşulları ve Toplum",
    question: '"Die Rettung" kelimesinin anlamı nedir?',
    options: ["a) Tehlike", "b) Kurtarma, kurtuluş", "c) Problem"],
    correct: "b",
    correctText: "b) Kurtarma, kurtuluş",
  },
  // Bölüm 40: Seçim ve Öncelikler
  {
    id: 109,
    category: "Seçim ve Öncelikler",
    question: '"Die Kandidaten" ne demektir?',
    options: ["a) Seçmenler", "b) Adaylar", "c) Yöneticiler"],
    correct: "b",
    correctText: "b) Adaylar",
  },
  {
    id: 110,
    category: "Seçim ve Öncelikler",
    question: '"Prioritäten setzen" ifadesi ne anlama gelir?',
    options: [
      "a) Öncelikleri karıştırmak",
      "b) Öncelikler belirlemek",
      "c) Her şeyi eşit görmek",
    ],
    correct: "b",
    correctText: "b) Öncelikler belirlemek",
  },
  // Bölüm 41: Bilgilendirme ve Eğitim
  {
    id: 111,
    category: "Bilgilendirme ve Eğitim",
    question: '"Jemanden aufklären" ne demektir?',
    options: [
      "a) Birisini uyandırmak",
      "b) Birisini bilgilendirmek, aydınlatmak",
      "c) Birisini uyarmak",
    ],
    correct: "b",
    correctText: "b) Birisini bilgilendirmek, aydınlatmak",
  },
  {
    id: 112,
    category: "Bilgilendirme ve Eğitim",
    question: '"Die Aufklärung" kelimesinin anlamı nedir?',
    options: ["a) Karanlık", "b) Bilinçlendirme, bilgilendirme", "c) Gizlilik"],
    correct: "b",
    correctText: "b) Bilinçlendirme, bilgilendirme",
  },
  // Bölüm 42: Teknik Terimler
  {
    id: 113,
    category: "Teknik Terimler",
    question: '"Die Schornsteine" ne demektir?',
    options: ["a) Pencereler", "b) Bacalar", "c) Kapılar"],
    correct: "b",
    correctText: "b) Bacalar",
  },
  {
    id: 114,
    category: "Teknik Terimler",
    question: '"Eingehalten werden" ifadesi ne anlama gelir?',
    options: ["a) Bozulmak", "b) (Kurallara) uyulmak", "c) Değiştirilmek"],
    correct: "b",
    correctText: "b) (Kurallara) uyulmak",
  },
  // Bölüm 43: Zaman İfadeleri
  {
    id: 115,
    category: "Zaman İfadeleri",
    question: '"Seit Neuestem" ne demektir?',
    options: [
      "a) Çok eskiden beri",
      "b) Yakın zamandan beri/artık",
      "c) Gelecekte",
    ],
    correct: "b",
    correctText: "b) Yakın zamandan beri/artık",
  },
  {
    id: 116,
    category: "Zaman İfadeleri",
    question: '"Vernünftig" sıfatının anlamı nedir?',
    options: ["a) Saçma", "b) Mantıklı, makul", "c) Garip"],
    correct: "b",
    correctText: "b) Mantıklı, makul",
  },
  // Bölüm 44: Eş Anlamlılar ve Zıt Anlamlılar
  {
    id: 117,
    category: "Eş Anlamlılar ve Zıt Anlamlılar",
    question: '"Komplex" kelimesinin eş anlamlısı hangisidir?',
    options: ["a) Einfach", "b) Vielschichtig (karmaşık)", "c) Schnell"],
    correct: "b",
    correctText: "b) Vielschichtig (karmaşık)",
  },
  {
    id: 118,
    category: "Eş Anlamlılar ve Zıt Anlamlılar",
    question: '"Dringend" kelimesinin eş anlamlısı nedir?',
    options: ["a) Langsam", "b) Eilig (acil)", "c) Unwichtig"],
    correct: "b",
    correctText: "b) Eilig (acil)",
  },
  {
    id: 119,
    category: "Eş Anlamlılar ve Zıt Anlamlılar",
    question: '"Schnell" kelimesinin zıt anlamlısı hangisidir?',
    options: ["a) Langsam (yavaş)", "b) Groß", "c) Klein"],
    correct: "a",
    correctText: "a) Langsam (yavaş)",
  },
  {
    id: 120,
    category: "Eş Anlamlılar ve Zıt Anlamlılar",
    question: '"Bemerkenswert" kelimesinin zıt anlamlısı nedir?',
    options: [
      "a) Wichtig",
      "b) Unauffällig (göze çarpmayan)",
      "c) Interessant",
    ],
    correct: "b",
    correctText: "b) Unauffällig (göze çarpmayan)",
  },
  // Bölüm 45: Seyahat ve Tatil
  {
    id: 121,
    category: "Seyahat ve Tatil",
    question: '"Urlaubmachen mit etwas verbinden" ne demektir?',
    options: [
      "a) Tatili iptal etmek",
      "b) Tatili bir şeyle ilişkilendirmek",
      "c) Tatilden vazgeçmek",
    ],
    correct: "b",
    correctText: "b) Tatili bir şeyle ilişkilendirmek",
  },
  {
    id: 122,
    category: "Seyahat ve Tatil",
    question: '"Eine Region erkunden" ifadesi ne anlama gelir?',
    options: [
      "a) Bir bölgeyi terk etmek",
      "b) Bir bölgeyi keşfetmek",
      "c) Bir bölgeyi unutmak",
    ],
    correct: "b",
    correctText: "b) Bir bölgeyi keşfetmek",
  },
  {
    id: 123,
    category: "Seyahat ve Tatil",
    question: '"Fernreisen unternehmen" ne demektir?',
    options: [
      "a) Uzak seyahatlere çıkmak",
      "b) Yakın yerlere gitmek",
      "c) Evde kalmak",
    ],
    correct: "a",
    correctText: "a) Uzak seyahatlere çıkmak",
  },
  // Bölüm 46: Kültür ve Tanışma
  {
    id: 124,
    category: "Kültür ve Tanışma",
    question: '"Andere Länder bereisen" ne anlama gelir?',
    options: [
      "a) Başka ülkeleri gezmek, dolaşmak",
      "b) Ülkeleri haritada görmek",
      "c) Ülkeler hakkında okumak",
    ],
    correct: "a",
    correctText: "a) Başka ülkeleri gezmek, dolaşmak",
  },
  {
    id: 125,
    category: "Kültür ve Tanışma",
    question: '"Neue Kulturen kennenlernen" ifadesi ne demektir?',
    options: [
      "a) Kültürleri reddetmek",
      "b) Yeni kültürleri tanımak",
      "c) Kültürlerden kaçınmak",
    ],
    correct: "b",
    correctText: "b) Yeni kültürleri tanımak",
  },
  {
    id: 126,
    category: "Kültür ve Tanışma",
    question: '"Urlaub verbringen" ne anlama gelir?',
    options: [
      "a) Tatili iptal etmek",
      "b) Tatil (zaman) geçirmek",
      "c) Tatili ertelemek",
    ],
    correct: "b",
    correctText: "b) Tatil (zaman) geçirmek",
  },
  // Bölüm 47: Dinlenme ve Motivasyon
  {
    id: 127,
    category: "Dinlenme ve Motivasyon",
    question: '"Sich erholen" fiilinin anlamı nedir?',
    options: ["a) Yorulmak", "b) Dinlenmek", "c) Çalışmak"],
    correct: "b",
    correctText: "b) Dinlenmek",
  },
  {
    id: 128,
    category: "Dinlenme ve Motivasyon",
    question: '"Sich die Frage stellen" ifadesi ne demektir?',
    options: [
      "a) Sorudan kaçmak",
      "b) Kendine soru sormak",
      "c) Soruyu unutmak",
    ],
    correct: "b",
    correctText: "b) Kendine soru sormak",
  },
  // Bölüm 48: Teknoloji ve İmkanlar
  {
    id: 129,
    category: "Teknoloji ve İmkanlar",
    question: '"Etwas ermöglichen" ne demektir?',
    options: ["a) Engellemek", "b) Mümkün kılmak", "c) Yasaklamak"],
    correct: "b",
    correctText: "b) Mümkün kılmak",
  },
  {
    id: 130,
    category: "Teknoloji ve İmkanlar",
    question: '"Weite Strecken zurücklegen" ifadesi ne anlama gelir?',
    options: [
      "a) Kısa mesafe gitmek",
      "b) Uzun mesafeleri katetmek",
      "c) Hareketsiz kalmak",
    ],
    correct: "b",
    correctText: "b) Uzun mesafeleri katetmek",
  },
  {
    id: 131,
    category: "Teknoloji ve İmkanlar",
    question: '"Billigflieger angeboten werden" ne demektir?',
    options: [
      "a) Ucuz uçuşların sunulması",
      "b) Pahalı uçuşlar",
      "c) Uçuş iptali",
    ],
    correct: "a",
    correctText: "a) Ucuz uçuşların sunulması",
  },
  // Bölüm 49: Duygusal Durumlar
  {
    id: 132,
    category: "Duygusal Durumlar",
    question: '"Heimweh spüren" ne anlama gelir?',
    options: [
      "a) Sevinç duymak",
      "b) Memleket hasreti hissetmek",
      "c) Öfkelenmek",
    ],
    correct: "b",
    correctText: "b) Memleket hasreti hissetmek",
  },
  {
    id: 133,
    category: "Duygusal Durumlar",
    question: '"Von etwas geprägt sein" ifadesi ne demektir?',
    options: [
      "a) Bir şeyden etkilenmek, şekillendirilmek",
      "b) Bir şeyi reddetmek",
      "c) Bir şeyi unutmak",
    ],
    correct: "a",
    correctText: "a) Bir şeyden etkilenmek, şekillendirilmek",
  },
  // Bölüm 50: Seyahat Psikolojisi
  {
    id: 134,
    category: "Seyahat Psikolojisi",
    question: '"Die Neugier" kelimesinin anlamı nedir?',
    options: ["a) Korku", "b) Merak", "c) Öfke"],
    correct: "b",
    correctText: "b) Merak",
  },
  {
    id: 135,
    category: "Seyahat Psikolojisi",
    question: '"Die Reiselust" ne demektir?',
    options: ["a) Seyahat korkusu", "b) Seyahat arzusu", "c) Seyahat zorluğu"],
    correct: "b",
    correctText: "b) Seyahat arzusu",
  },
  {
    id: 136,
    category: "Seyahat Psikolojisi",
    question: '"Das Verlangen" kelimesinin anlamı nedir?',
    options: ["a) Nefret", "b) Arzu, özlem, istek", "c) Kayıtsızlık"],
    correct: "b",
    correctText: "b) Arzu, özlem, istek",
  },
  // Bölüm 51: Keşif ve Gelişim
  {
    id: 137,
    category: "Keşif ve Gelişim",
    question: '"Die Entdeckung" ne demektir?',
    options: ["a) Kayıp", "b) Keşif", "c) Gizlilik"],
    correct: "b",
    correctText: "b) Keşif",
  },
  {
    id: 138,
    category: "Keşif ve Gelişim",
    question: '"Die Entwicklung" kelimesinin anlamı nedir?',
    options: ["a) Gerileme", "b) Gelişim", "c) Durgunluk"],
    correct: "b",
    correctText: "b) Gelişim",
  },
  {
    id: 139,
    category: "Keşif ve Gelişim",
    question: '"Das Verständnis entwickeln" ne anlama gelir?',
    options: [
      "a) Anlayış geliştirmek",
      "b) Anlayışı kaybetmek",
      "c) Karışıklık yaratmak",
    ],
    correct: "a",
    correctText: "a) Anlayış geliştirmek",
  },
  // Bölüm 52: Karşıtlık ve Tutumlar
  {
    id: 140,
    category: "Karşıtlık ve Tutumlar",
    question: '"Der Gegensatz" kelimesinin anlamı nedir?',
    options: ["a) Benzerlik", "b) Zıtlık, karşıtlık", "c) Ortaklık"],
    correct: "b",
    correctText: "b) Zıtlık, karşıtlık",
  },
  {
    id: 141,
    category: "Karşıtlık ve Tutumlar",
    question: '"Die Einstellung" ne demektir?',
    options: ["a) Kapatma", "b) Tutum, bakış açısı", "c) Açılış"],
    correct: "b",
    correctText: "b) Tutum, bakış açısı",
  },
  // Bölüm 53: Sıfatlar ve Özellikler
  {
    id: 142,
    category: "Sıfatlar ve Özellikler",
    question: '"Neugierig sein" ne anlama gelir?',
    options: ["a) Meraklı olmak", "b) Kayıtsız olmak", "c) Korkak olmak"],
    correct: "a",
    correctText: "a) Meraklı olmak",
  },
  {
    id: 143,
    category: "Sıfatlar ve Özellikler",
    question: '"Einfach und unkompliziert" ifadesi ne demektir?',
    options: [
      "a) Zor ve karmaşık",
      "b) Kolay ve karmaşık olmayan",
      "c) İmkansız",
    ],
    correct: "b",
    correctText: "b) Kolay ve karmaşık olmayan",
  },
  {
    id: 144,
    category: "Sıfatlar ve Özellikler",
    question: '"Prägnant" sıfatının anlamı nedir?',
    options: ["a) Belirsiz", "b) Özlü, anlam yüklü", "c) Uzun"],
    correct: "b",
    correctText: "b) Özlü, anlam yüklü",
  },
  // Bölüm 54: Rahatlık ve Konfor
  {
    id: 145,
    category: "Rahatlık ve Konfor",
    question: '"Entspannt fühlen" ne demektir?',
    options: [
      "a) Gergin hissetmek",
      "b) Rahatlamış hissetmek",
      "c) Üzgün hissetmek",
    ],
    correct: "b",
    correctText: "b) Rahatlamış hissetmek",
  },
  {
    id: 146,
    category: "Rahatlık ve Konfor",
    question: '"Bequem werden" ifadesi ne anlama gelir?',
    options: [
      "a) Zorlaşmak",
      "b) Rahatına düşkün, konforuna alışmış olmak",
      "c) Aceleci olmak",
    ],
    correct: "b",
    correctText: "b) Rahatına düşkün, konforuna alışmış olmak",
  },
  // Bölüm 55: Ekonomik Durumlar
  {
    id: 147,
    category: "Ekonomik Durumlar",
    question: '"Ein günstiges Flugticket" ne demektir?',
    options: [
      "a) Pahalı uçak bileti",
      "b) Ucuz uçak bileti",
      "c) İptal edilmiş bilet",
    ],
    correct: "b",
    correctText: "b) Ucuz uçak bileti",
  },
  {
    id: 148,
    category: "Ekonomik Durumlar",
    question: '"Interkulturell" kelimesinin anlamı nedir?',
    options: ["a) Tek kültürlü", "b) Kültürler arası", "c) Kültürsüz"],
    correct: "b",
    correctText: "b) Kültürler arası",
  },
  // Bölüm 56: Kişisel Gelişim
  {
    id: 149,
    category: "Kişisel Gelişim",
    question: '"Persönliche Bedeutung" ifadesi ne anlama gelir?',
    options: ["a) Genel önem", "b) Kişisel anlam", "c) Önemsizlik"],
    correct: "b",
    correctText: "b) Kişisel anlam",
  },
  {
    id: 150,
    category: "Kişisel Gelişim",
    question: '"Zugeben" fiilinin anlamı nedir?',
    options: ["a) Reddetmek", "b) İtiraf etmek, kabul etmek", "c) Saklamak"],
    correct: "b",
    correctText: "b) İtiraf etmek, kabul etmek",
  },
  // Almanca C1 Seviyesi Test - Sözlü Sınav ve İfadeler
  // Bölüm 1: Podcast İfadeleri ve İletişim Fonksiyonları
  {
    id: 151,
    category: "Podcast İfadeleri ve İletişim Fonksiyonları",
    question:
      '"Herzlich willkommen zu unserem nächsten Podcast" ifadesi hangi iletişim fonksiyonunu yerine getirir?',
    options: [
      "a) Themendarstellung (Konu tanıtımı)",
      "b) Begrüßung (Selamlama)",
      "c) Rückfrage (Karşı soru)",
    ],
    correct: "b",
    correctText: "b) Begrüßung (Selamlama)",
  },
  {
    id: 152,
    category: "Podcast İfadeleri ve İletişim Fonksiyonları",
    question:
      '"Du bist tatsächlich Expertin für Prüfungsvorbereitung" cümlesi hangi kategoriye girer?',
    options: [
      "a) Vergleich (Karşılaştırma)",
      "b) Feststellung (Saptama/Tespit)",
      "c) Information (Bilgi verme)",
    ],
    correct: "b",
    correctText: "b) Feststellung (Saptama/Tespit)",
  },
  {
    id: 153,
    category: "Podcast İfadeleri ve İletişim Fonksiyonları",
    question:
      '"Wie sieht so eine mündliche Prüfung überhaupt aus?" - Bu cümle hangi iletişim fonksiyonunu temsil eder?',
    options: [
      "a) Rückfrage (Açıklığa kavuşturma sorusu)",
      "b) Themendarstellung (Konu tanıtımı)",
      "c) Vergleich (Karşılaştırma)",
    ],
    correct: "a",
    correctText: "a) Rückfrage (Açıklığa kavuşturma sorusu)",
  },
  // Bölüm 2: Doğru İfade Seçimi
  {
    id: 154,
    category: "Doğru İfade Seçimi",
    question: "Aşağıdaki cümlelerden hangisi dilbilgisi açısından doğrudur?",
    options: [
      "a) Es geht um mündliche Prüfungsvorbereitung und da lerne ich, wie ich mich am besten vorbereiten kann.",
      "b) Es geht um mündliche Prüfungsvorbereitung, und da lernt ich, wie ich mich am besten vorbereite kann.",
      "c) Es geht für mündliche Prüfungsvorbereitung und da lerne ich, wie ich mich am besten vorbereiten könnte.",
    ],
    correct: "a",
    correctText:
      "a) Es geht um mündliche Prüfungsvorbereitung und da lerne ich, wie ich mich am besten vorbereiten kann.",
  },
  {
    id: 155,
    category: "Doğru İfade Seçimi",
    question: '"Smalltalk" kelimesinin bağlamda anlamı nedir?',
    options: [
      "a) Önemli bir iş konuşması",
      "b) Ortamı yumuşatmak için yapılan kısa, gündelik konuşma",
      "c) Resmi bir sunum",
    ],
    correct: "b",
    correctText: "b) Ortamı yumuşatmak için yapılan kısa, gündelik konuşma",
  },
  {
    id: 156,
    category: "Doğru İfade Seçimi",
    question:
      '"Die Prüfungen sind weitgehend standardisiert" cümlesindeki "weitgehend" kelimesinin anlamı nedir?',
    options: [
      "a) Tamamen, bütünüyle",
      "b) Büyük ölçüde, genel olarak",
      "c) Kısmen, az miktarda",
    ],
    correct: "b",
    correctText: "b) Büyük ölçüde, genel olarak",
  },
  // Bölüm 3: Sunum İfadeleri
  {
    id: 157,
    category: "Sunum İfadeleri",
    question:
      '"Ich habe mich für das interessante Thema entschieden" - Bu ifadede kullanılan yapının doğru tercümesi nedir?',
    options: [
      "a) Bu konuyu seçmek zorunda kaldım",
      "b) Bu konuya karar verdim / Bu konuyu seçtim",
      "c) Bu konuyu öneriyorum",
    ],
    correct: "b",
    correctText: "b) Bu konuya karar verdim / Bu konuyu seçtim",
  },
  {
    id: 158,
    category: "Sunum İfadeleri",
    question:
      '"Mein heutiger Vortrag besteht aus drei Teilen" - Buradaki "bestehen aus" ifadesinin anlamı:',
    options: ["a) üzerinde durmak", "b) karşı çıkmak", "c) -dan/-den oluşmak"],
    correct: "c",
    correctText: "c) -dan/-den oluşmak",
  },
  {
    id: 159,
    category: "Sunum İfadeleri",
    question:
      '"Im Anschluss möchte ich über die Vor- und Nachteile sprechen" - "Im Anschluss" ifadesi ne anlama gelir?',
    options: ["a) Başlangıçta", "b) Ardından, sonrasında", "c) Öncesinde"],
    correct: "b",
    correctText: "b) Ardından, sonrasında",
  },
  // Bölüm 4: Tartışma İfadeleri
  {
    id: 160,
    category: "Tartışma İfadeleri",
    question:
      '"Das sehe ich genauso. Ich kann dem nur zustimmen." - Bu ifade hangi tutumu gösterir?',
    options: ["a) Karşı çıkma", "b) Tam katılma/onaylama", "c) Kararsızlık"],
    correct: "b",
    correctText: "b) Tam katılma/onaylama",
  },
  {
    id: 161,
    category: "Tartışma İfadeleri",
    question:
      '"Das kann so nicht stimmen. Ich muss dir leider widersprechen." - Bu cümlede konuşmacının tutumu nedir?',
    options: [
      "a) Anlayışla karşılama",
      "b) İtiraz etme, karşı çıkma",
      "c) Onaylama",
    ],
    correct: "b",
    correctText: "b) İtiraz etme, karşı çıkma",
  },
  {
    id: 162,
    category: "Tartışma İfadeleri",
    question:
      '"Man darf nicht vergessen, dass es auch einige Nachteile gibt." - Bu ifadede hangi strateji kullanılıyor?',
    options: [
      "a) Hatırlatma ve dikkat çekme",
      "b) Özür dileme",
      "c) Teşekkür etme",
    ],
    correct: "a",
    correctText: "a) Hatırlatma ve dikkat çekme",
  },
  // Bölüm 5: İleri Düzey Kelime Bilgisi
  {
    id: 163,
    category: "İleri Düzey Kelime Bilgisi",
    question:
      '"Darf ich dich kurz unterbrechen?" - "unterbrechen" fiilinin anlamı:',
    options: ["a) desteklemek", "b) sözünü kesmek", "c) dinlemek"],
    correct: "b",
    correctText: "b) sözünü kesmek",
  },
  {
    id: 164,
    category: "İleri Düzey Kelime Bilgisi",
    question:
      '"In diesem Aspekt stehe ich auf einem anderen Standpunkt." - Bu cümlede ne ifade ediliyor?',
    options: [
      "a) Aynı fikirde olma",
      "b) Farklı bir görüşte olma",
      "c) Kararsız kalma",
    ],
    correct: "b",
    correctText: "b) Farklı bir görüşte olma",
  },
  {
    id: 165,
    category: "İleri Düzey Kelime Bilgisi",
    question: '"verzichten" fiili genellikle hangi edatla kullanılır?',
    options: ["a) mit + Dativ", "b) für + Akkusativ", "c) auf + Akkusativ"],
    correct: "c",
    correctText: "c) auf + Akkusativ",
  },
  {
    id: 166,
    category: "İleri Düzey Kelime Bilgisi",
    question:
      '"Wir können auf deine Hilfe nicht verzichten" cümlesinin anlamı:',
    options: [
      "a) Senin yardımından vazgeçemeyiz",
      "b) Senin yardımına ihtiyacımız yok",
      "c) Senin yardımın yeterli değil",
    ],
    correct: "a",
    correctText: "a) Senin yardımından vazgeçemeyiz",
  },
  {
    id: 167,
    category: "İleri Düzey Kelime Bilgisi",
    question:
      '"Das entspricht nicht meiner Erfahrung" - "entsprechen" fiilinin anlamı:',
    options: ["a) karşı çıkmak", "b) uygun olmak, örtüşmek", "c) reddetmek"],
    correct: "b",
    correctText: "b) uygun olmak, örtüşmek",
  },
  {
    id: 168,
    category: "İleri Düzey Kelime Bilgisi",
    question:
      '"Hierzu kann ich auch ein Beispiel anführen" - "anführen" fiilinin bu bağlamdaki anlamı:',
    options: ["a) yönetmek", "b) örnek vermek", "c) eleştirmek"],
    correct: "b",
    correctText: "b) örnek vermek",
  },
  // Almanca C1 Seviyesi Test - İş Hayatı ve Home-Office
  // Bölüm 1: Çalışma Ortamları ve İfadeler
  {
    id: 169,
    category: "Çalışma Ortamları ve İfadeler",
    question:
      '"Julia arbeitet die meiste Zeit allein zu Hause" - Bu cümlede "die meiste Zeit" ifadesinin anlamı nedir?',
    options: ["a) Bazen", "b) Çoğunlukla, büyük bölümü", "c) Hiçbir zaman"],
    correct: "b",
    correctText: "b) Çoğunlukla, büyük bölümü",
  },
  {
    id: 170,
    category: "Çalışma Ortamları ve İfadeler",
    question:
      '"Laura geht ab und zu in ein Co-Working-Space" - "ab und zu" ifadesi ne anlama gelir?',
    options: ["a) Her gün", "b) Hiçbir zaman", "c) Ara sıra, zaman zaman"],
    correct: "c",
    correctText: "c) Ara sıra, zaman zaman",
  },
  {
    id: 171,
    category: "Çalışma Ortamları ve İfadeler",
    question:
      '"Laura schlägt Julia vor, mit ihr in ein Co-Working-Space zu gehen" - Bu cümlede hangi eylem gerçekleşir?',
    options: [
      "a) Laura bir öneri sunuyor",
      "b) Laura bir ricada bulunuyor",
      "c) Laura bir emir veriyor",
    ],
    correct: "a",
    correctText: "a) Laura bir öneri sunuyor",
  },
  // Bölüm 2: Fiil Kullanımları ve Anlamları
  {
    id: 172,
    category: "Fiil Kullanımları ve Anlamları",
    question:
      '"Julia bemüht sich, eine bessere Work-Life-Balance zu finden" - "sich bemühen" fiilinin anlamı nedir?',
    options: [
      "a) Vazgeçmek",
      "b) Çaba göstermek, çabalamak",
      "c) Başarısız olmak",
    ],
    correct: "b",
    correctText: "b) Çaba göstermek, çabalamak",
  },
  {
    id: 173,
    category: "Fiil Kullanımları ve Anlamları",
    question:
      '"Laura empfiehlt Julia, mit ihr in ein Co-Working-Space zu gehen" - "empfehlen" fiili hangi anlama gelir?',
    options: ["a) Yasaklamak", "b) Önermek, tavsiye etmek", "c) Zorlamak"],
    correct: "b",
    correctText: "b) Önermek, tavsiye etmek",
  },
  {
    id: 174,
    category: "Fiil Kullanımları ve Anlamları",
    question:
      '"Julia akzeptiert die Einladung von Laura gerne" - Bu cümlede Julia ne yapar?',
    options: [
      "a) Daveti reddeder",
      "b) Daveti kabul eder",
      "c) Davet hakkında düşünür",
    ],
    correct: "b",
    correctText: "b) Daveti kabul eder",
  },
  // Bölüm 3: Perfekt Zamanı
  {
    id: 175,
    category: "Perfekt Zamanı",
    question:
      '"Leon hat sein Studium während des Home-Office begonnen" - "begonnen" hangi fiilin Perfekt halidir?',
    options: ["a) beginnen", "b) beenden", "c) bekommen"],
    correct: "a",
    correctText: "a) beginnen",
  },
  {
    id: 176,
    category: "Perfekt Zamanı",
    question:
      '"Laura hat die zusätzliche Zeit am Morgen genossen" - "genossen" hangi fiilin geçmiş katılımcısıdır?',
    options: ["a) gehen", "b) genießen", "c) geben"],
    correct: "b",
    correctText: "b) genießen",
  },
  {
    id: 178,
    category: "Perfekt Zamanı",
    question:
      '"Leon hat den Kontakt zu seinen Mitmenschen verloren" - Bu cümlenin anlamı nedir?',
    options: [
      "a) Çevresindeki insanlarla teması güçlendirdi",
      "b) Çevresindeki insanlarla teması kaybetti",
      "c) Çevresindeki insanlarla yeni temaslar kurdu",
    ],
    correct: "b",
    correctText: "b) Çevresindeki insanlarla teması kaybetti",
  },
  // Bölüm 4: Bağlaç ve Edatlar
  {
    id: 179,
    category: "Bağlaç ve Edatlar",
    question:
      '"Leon hat sein Studium begonnen, als die Pandemie angefangen hat" - "als" bağlacının bu cümledeki işlevi nedir?',
    options: [
      "a) Karşılaştırma yapar",
      "b) Zaman belirtir",
      "c) Sebep belirtir",
    ],
    correct: "b",
    correctText: "b) Zaman belirtir",
  },
  {
    id: 180,
    category: "Bağlaç ve Edatlar",
    question:
      '"Laura genießt die zusätzliche Zeit am Morgen durch das Home-Office" - "durch" edatının anlamı:',
    options: ["a) karşısında", "b) sayesinde, -den dolayı", "c) rağmen"],
    correct: "b",
    correctText: "b) sayesinde, -den dolayı",
  },
  {
    id: 181,
    category: "Bağlaç ve Edatlar",
    question:
      '"Simon schafft es, über Social Media mit seinen Kommilitonen Kontakt zu halten" - "über" edatının bu bağlamdaki anlamı:',
    options: ["a) üzerinden, vasıtasıyla", "b) hakkında", "c) karşısında"],
    correct: "a",
    correctText: "a) üzerinden, vasıtasıyla",
  },
  // Bölüm 5: Sıfatlar ve Tanımlamalar
  {
    id: 182,
    category: "Sıfatlar ve Tanımlamalar",
    question:
      '"Es war herausfordernd, im Home-Office konzentriert zu bleiben" - "herausfordernd" sıfatının anlamı:',
    options: ["a) Kolay", "b) Zorlayıcı, meydan okuyan", "c) Sıkıcı"],
    correct: "b",
    correctText: "b) Zorlayıcı, meydan okuyan",
  },
  {
    id: 183,
    category: "Sıfatlar ve Tanımlamalar",
    question:
      '"Im Home-Office muss man anpassungsfähig sein" - "anpassungsfähig" ne demektir?',
    options: [
      "a) Katı, değişmez",
      "b) Uyum sağlayabilen, esnek",
      "c) Bağımsız",
    ],
    correct: "b",
    correctText: "b) Uyum sağlayabilen, esnek",
  },
  {
    id: 184,
    category: "Sıfatlar ve Tanımlamalar",
    question:
      '"Eine wesentliche Herausforderung im Home-Office ist..." - "wesentliche" sıfatının anlamı:',
    options: ["a) Önemsiz", "b) Temel, asıl", "c) Geçici"],
    correct: "b",
    correctText: "b) Temel, asıl",
  },
  // Bölüm 6: İş Dünyası Terimleri
  {
    id: 185,
    category: "İş Dünyası Terimleri",
    question:
      '"Die Non-Profit-Initiative hat eine Studie durchgeführt" - "durchführen" fiilinin anlamı:',
    options: ["a) Sonlandırmak", "b) Gerçekleştirmek, yapmak", "c) Planlamak"],
    correct: "b",
    correctText: "b) Gerçekleştirmek, yapmak",
  },
  {
    id: 186,
    category: "İş Dünyası Terimleri",
    question:
      '"Fast alle Unternehmen möchten die 4-Tage-Woche beibehalten" - "beibehalten" ne anlama gelir?',
    options: [
      "a) Değiştirmek",
      "b) Sürdürmek, devam ettirmek",
      "c) İptal etmek",
    ],
    correct: "b",
    correctText: "b) Sürdürmek, devam ettirmek",
  },
  {
    id: 187,
    category: "İş Dünyası Terimleri",
    question:
      '"Die Zahl der Krankheitstage ist gesunken" - "gesunken" hangi durumu ifade eder?',
    options: ["a) Artmış", "b) Azalmış", "c) Sabit kalmış"],
    correct: "b",
    correctText: "b) Azalmış",
  },
  // Bölüm 7: Uzmanlık Terimleri
  {
    id: 188,
    category: "Uzmanlık Terimleri",
    question: '"Das Pilotprojekt" terimi neyi ifade eder?',
    options: [
      "a) Kalıcı bir program",
      "b) Zaman sınırlı bir test projesi",
      "c) Başarısız bir girişim",
    ],
    correct: "b",
    correctText: "b) Zaman sınırlı bir test projesi",
  },
  {
    id: 189,
    category: "Uzmanlık Terimleri",
    question: '"Der Fachkräftemangel" teriminin anlamı nedir?',
    options: [
      "a) Nitelikli iş gücü fazlası",
      "b) Nitelikli iş gücü eksikliği",
      "c) İş gücü dengesizliği",
    ],
    correct: "b",
    correctText: "b) Nitelikli iş gücü eksikliği",
  },
  {
    id: 190,
    category: "Uzmanlık Terimleri",
    question: '"Das Pendeln" kavramı neyi ifade eder?',
    options: [
      "a) Tatile çıkma",
      "b) Ev ile iş yeri arasında düzenli seyahat",
      "c) İş değiştirme",
    ],
    correct: "b",
    correctText: "b) Ev ile iş yeri arasında düzenli seyahat",
  },
  {
    id: 191,
    category: "Uzmanlık Terimleri",
    question: '"Der Einkommensverlust" terimi ne anlama gelir?',
    options: ["a) Gelir artışı", "b) Gelir kaybı", "c) Gelir dengesi"],
    correct: "b",
    correctText: "b) Gelir kaybı",
  },
  // Almanca C1 Seviyesi Test - Dijital Dünya ve Teknoloji
  // Bölüm 1: İnternet ve Günlük Yaşam
  {
    id: 192,
    category: "İnternet ve Günlük Yaşam",
    question:
      '"Das Internet hat die Kommunikation stark vereinfacht" - "vereinfacht" kelimesinin anlamı nedir?',
    options: ["a) Karmaşıklaştırdı", "b) Kolaylaştırdı", "c) Değiştirdi"],
    correct: "b",
    correctText: "b) Kolaylaştırdı",
  },
  {
    id: 193,
    category: "İnternet ve Günlük Yaşam",
    question:
      '"In der Arbeitswelt ist es unverzichtbar geworden" - "unverzichtbar" sıfatının anlamı:',
    options: ["a) Vazgeçilmez", "b) Gereksiz", "c) Pahalı"],
    correct: "a",
    correctText: "a) Vazgeçilmez",
  },
  {
    id: 194,
    category: "İnternet ve Günlük Yaşam",
    question:
      '"Leon wäre bereit, das Experiment zu wagen" - "wagen" fiilinin anlamı nedir?',
    options: ["a) Reddetmek", "b) Cesaret etmek, göze almak", "c) Planlamak"],
    correct: "b",
    correctText: "b) Cesaret etmek, göze almak",
  },
  // Bölüm 2: Teknoloji Fiilleri
  {
    id: 195,
    category: "Teknoloji Fiilleri",
    question:
      '"Informationen zu einem bestimmten Thema suchen und sammeln" - Bu tanım hangi fiile aittir?',
    options: ["a) kommunizieren", "b) recherchieren", "c) aufnehmen"],
    correct: "b",
    correctText: "b) recherchieren",
  },
  {
    id: 196,
    category: "Teknoloji Fiilleri",
    question:
      '"Mit anderen Menschen in Kontakt treten und sich austauschen" - Bu açıklama hangi fiili tanımlar?',
    options: ["a) kommunizieren", "b) vorstellen", "c) zurückblicken"],
    correct: "a",
    correctText: "a) kommunizieren",
  },
  {
    id: 197,
    category: "Teknoloji Fiilleri",
    question:
      '"Sich eine Situation in Gedanken ausmalen" - Bu tanım hangi fiil için geçerlidir?',
    options: ["a) ersparen", "b) abfragen", "c) sich etwas vorstellen"],
    correct: "c",
    correctText: "c) sich etwas vorstellen",
  },
  // Bölüm 3: Bağıl Zamirler (Relativpronomen)
  {
    id: 198,
    category: "Bağıl Zamirler (Relativpronomen)",
    question:
      '"Laura erinnert sich an ihre Kindheit, ___ sie teilweise ohne Internet verbracht hat" - Boşluğa hangi zamir gelir?',
    options: ["a) das", "b) die", "c) der"],
    correct: "b",
    correctText: "b) die",
  },
  {
    id: 199,
    category: "Bağıl Zamirler (Relativpronomen)",
    question:
      '"Leon denkt an eine Zeit, in ___ es noch kein Internet gab" - Hangi zamir doğrudur?',
    options: ["a) die", "b) der", "c) das"],
    correct: "b",
    correctText: "b) der",
  },
  {
    id: 200,
    category: "Bağıl Zamirler (Relativpronomen)",
    question:
      '"Simon schlägt ein Experiment vor, ___ ohne Internet stattfinden soll" - Doğru zamir hangisidir?',
    options: ["a) der", "b) die", "c) das"],
    correct: "c",
    correctText: "c) das",
  },
  // Bölüm 4: Dijital Nomadlar
  {
    id: 201,
    category: "Dijital Nomadlar",
    question:
      '"Digitale Nomaden nutzen Technologie, um ortsunabhängig zu arbeiten" - "ortsunabhängig" ne anlama gelir?',
    options: ["a) Mekâna bağlı", "b) Mekândan bağımsız", "c) Zamanla sınırlı"],
    correct: "b",
    correctText: "b) Mekândan bağımsız",
  },
  {
    id: 202,
    category: "Dijital Nomadlar",
    question:
      '"Laura betrachtet sich nicht als digitale Nomadin" - "sich betrachten als" ifadesinin anlamı:',
    options: [
      "a) Kendini ... olarak görmek",
      "b) ... ile karşılaştırmak",
      "c) ... hakkında düşünmek",
    ],
    correct: "a",
    correctText: "a) Kendini ... olarak görmek",
  },
  {
    id: 203,
    category: "Dijital Nomadlar",
    question:
      '"Beide sind sich darüber einig" - "einig sein" ifadesi ne demektir?',
    options: ["a) Farklı düşünmek", "b) Hemfikir olmak", "c) Kararsız kalmak"],
    correct: "b",
    correctText: "b) Hemfikir olmak",
  },
  // Bölüm 5: Sıfat Çekimi
  {
    id: 204,
    category: "Sıfat Çekimi",
    question:
      '"Eine ___ Internetverbindung ist entscheidend" - Hangi çekim doğrudur?',
    options: ["a) stabiler", "b) stabile", "c) stabilen"],
    correct: "b",
    correctText: "b) stabile",
  },
  {
    id: 205,
    category: "Sıfat Çekimi",
    question:
      '"Das ___ Umherreisen kann eine Herausforderung sein" - Doğru çekim:',
    options: ["a) konstanten", "b) konstanter", "c) konstante"],
    correct: "c",
    correctText: "c) konstante",
  },
  {
    id: 206,
    category: "Sıfat Çekimi",
    question:
      '"Viele digitale Nomaden schätzen ___ Lebensstile" - Akkusativ çoğul:',
    options: ["a) unabhängiger", "b) unabhängige", "c) unabhängigen"],
    correct: "b",
    correctText: "b) unabhängige",
  },
  // Bölüm 6: Teknoloji Terimleri
  {
    id: 207,
    category: "Teknoloji Terimleri",
    question:
      '"Digitale Nomaden haben oft keinen festen Wohnsitz" - "Wohnsitz" ne demektir?',
    options: ["a) İş yeri", "b) İkamet yeri, adres", "c) Tatil yeri"],
    correct: "b",
    correctText: "b) İkamet yeri, adres",
  },
  {
    id: 208,
    category: "Teknoloji Terimleri",
    question:
      '"Die lokale Infrastruktur kann leiden" - "Infrastruktur" teriminin anlamı:',
    options: ["a) Kültür", "b) Altyapı", "c) Ekonomi"],
    correct: "b",
    correctText: "b) Altyapı",
  },
  {
    id: 209,
    category: "Teknoloji Terimleri",
    question:
      '"Ein längerer Aufenthalt kann den CO2-Fußabdruck verringern" - "CO2-Fußabdruck" ne anlama gelir?',
    options: ["a) Karbon ayak izi", "b) Çevre koruma", "c) Hava kalitesi"],
    correct: "a",
    correctText: "a) Karbon ayak izi",
  },
  // Bölüm 7: Yapay Zeka Konuşmaları
  {
    id: 210,
    category: "Yapay Zeka Konuşmaları",
    question:
      '"Nora erläutert den Unterschied zwischen schwacher und starker KI" - "erläutern" fiilinin anlamı:',
    options: ["a) Karşılaştırmak", "b) Açıklamak, izah etmek", "c) Eleştirmek"],
    correct: "b",
    correctText: "b) Açıklamak, izah etmek",
  },
  {
    id: 211,
    category: "Yapay Zeka Konuşmaları",
    question:
      '"Julia zeigt sich fasziniert von den Möglichkeiten" - "fasziniert" sıfatının anlamı:',
    options: ["a) Etkilenmiş, büyülenmiş", "b) Endişeli", "c) Kayıtsız"],
    correct: "a",
    correctText: "a) Etkilenmiş, büyülenmiş",
  },
  {
    id: 212,
    category: "Yapay Zeka Konuşmaları",
    question:
      '"einen digitalen Zwilling von sich zu erschaffen" - "erschaffen" fiili ne demektir?',
    options: ["a) Yok etmek", "b) Yaratmak, oluşturmak", "c) Kopyalamak"],
    correct: "b",
    correctText: "b) Yaratmak, oluşturmak",
  },
  // Bölüm 8: Fiil-İsim Eşleştirmeleri
  {
    id: 213,
    category: "Fiil-İsim Eşleştirmeleri",
    question: '"einen Podcast ___" - Hangi fiil uygundur?',
    options: ["a) erstellen", "b) aufnehmen", "c) ausdrücken"],
    correct: "b",
    correctText: "b) aufnehmen",
  },
  {
    id: 214,
    category: "Fiil-İsim Eşleştirmeleri",
    question: '"etwas zur Verfügung ___" - Doğru fiil:',
    options: ["a) nehmen", "b) stellen", "c) geben"],
    correct: "b",
    correctText: "b) stellen",
  },
  {
    id: 215,
    category: "Fiil-İsim Eşleştirmeleri",
    question: '"Einfluss ___ auf" - Hangi fiil kullanılır?',
    options: ["a) nehmen", "b) geben", "c) haben"],
    correct: "c",
    correctText: "c) haben",
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = () => {
    const correctAnswer = questions[currentQuestion].correct;
    if (selectedAnswer !== correctAnswer) {
      setWrongAnswers([
        ...wrongAnswers,
        {
          question: questions[currentQuestion].question,
          selected: questions[currentQuestion].options.find((opt) =>
            opt.startsWith(selectedAnswer)
          ),
          correct: questions[currentQuestion].correctText,
        },
      ]);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setWrongAnswers([]);
    setShowResult(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
      {!showResult ? (
        <div>
          <h2 className="text-xl font-bold mb-4">
            Frage {currentQuestion + 1} von {questions.length}
          </h2>
          <p className="mb-4">{questions[currentQuestion].question}</p>
          <div className="space-y-2">
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="radio"
                  name="answer"
                  value={option[0]}
                  checked={selectedAnswer === option[0]}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                  className="mr-2"
                />
                <label>{option}</label>
              </div>
            ))}
          </div>
          <button
            onClick={handleAnswer}
            disabled={!selectedAnswer}
            className={`mt-4 px-4 py-2 rounded ${
              selectedAnswer
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Weiter
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold mb-4">Ergebnisse</h2>
          {wrongAnswers.length > 0 ? (
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Falsch beantwortete Fragen:
              </h3>
              <ul className="list-disc pl-5 mb-6">
                {wrongAnswers.map((wrong, index) => (
                  <li key={index} className="mb-2">
                    <p>
                      <strong>Frage:</strong> {wrong.question}
                    </p>
                    <p></p>
                    <p>
                      <strong>Richtige Antwort:</strong> {wrong.correct}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="mb-6">
              Super! Du hast alle Fragen richtig beantwortet!
            </p>
          )}
          <h3 className="text-lg font-semibold mb-2">
            Alle korrekten Antworten:
          </h3>
          <ul className="list-decimal pl-5">
            {questions.map((q, index) => (
              <li key={index} className="mb-2">
                <p>
                  <strong>Frage {q.id}:</strong> {q.question}
                </p>
                <p>
                  <strong>Richtige Antwort:</strong> {q.correctText}
                </p>
              </li>
            ))}
          </ul>
          <button
            onClick={resetQuiz}
            className="mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Quiz neu starten
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
