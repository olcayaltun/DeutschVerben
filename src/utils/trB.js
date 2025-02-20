const Tr = [
  {
    kommen: {
      ankommen: "varmak",
      mitkommen: "birlikte gelmek",
      zurückkommen: "geri gelmek",
    },
    gehen: {
      ausgehen: "dışarı çıkmak",
      losgehen: "yola çıkmak",
      untergehen: "batmak, yok olmak",
    },
    sehen: {
      ansehen: "izlemek",
      nachsehen: "kontrol etmek",
      übersehen: "gözden kaçırmak",
    },
    hören: {
      anhören: "dinlemek",
      aufhören: "bırakmak, durmak",
      mithören: "kulak misafiri olmak",
    },
    stehen: {
      aufstehen: "ayağa kalkmak, uyanmak",
      bestehen: "başarmak, var olmak",
      verstehen: "anlamak",
    },
    nehmen: {
      aufnehmen: "kaydetmek, almak",
      mitnehmen: "yanına almak",
      übernehmen: "devralmak",
    },
    fahren: {
      abfahren: "hareket etmek",
      losfahren: "yola çıkmak",
      weiterfahren: "devam etmek",
    },
    sprechen: {
      ansprechen: "birine hitap etmek, bahsetmek",
      aussprechen: "telaffuz etmek, dile getirmek",
      durchsprechen: "bir konuyu enine boyuna konuşmak",
      einsprechen: "bir şeye ses kaydı yapmak, birine telkin vermek",
      mitsprechen: "konuşmaya katılmak, bir konuda söz sahibi olmak",
      nachsprechen: "tekrar etmek, ardından söylemek",
      vorsprechen:
        "bir şeyi başkalarına söylemek, birine rol için deneme yapmak",
      widersprechen: "itiraz etmek, karşı çıkmak",
    },
    lassen: {
      anlassen: "çalışır durumda bırakmak, motoru açık bırakmak",
      auslassen: "atlamak, boş bırakmak",
      einlassen: "içeri almak, kabul etmek",
      nachlassen: "azalmak, gevşemek",
      zulassen: "izin vermek, kapalı tutmak",
      überlassen: "devretmek, bırakmak",
      verlassen: "terk etmek, ayrılmak",
      unterlassen: "kaçınmak, yapmamak",
      hinterlassen: "geride bırakmak, miras bırakmak",
      erlassen: "kanun çıkarmak, affetmek",
    },

    brechen: {
      abbrechen: "iptal etmek, kırarak koparmak",
      aufbrechen: "zorla açmak, yola çıkmak",
      durchbrechen: "delmek, kırıp geçmek",
      einbrechen: "zorla girmek, çökmek",
      unterbrechen: "kesmek, ara vermek",
      verbrechen: "suç işlemek",
    },
    halten: {
      anhalten: "durmak, durdurmak",
      aufhalten: "alıkoymak, durdurmak",
      durchhalten: "dayanmak, sabretmek",
      einhalten: "uymak, riayet etmek",
      festhalten: "sıkıca tutmak",
      zurückhalten: "geri tutmak, engellemek",
    },
    laden: {
      einladen: "davet etmek",
      aufladen: "şarj etmek, yüklemek",
      herunterladen: "indirmek (download)",
      überladen: "aşırı yüklemek",
    },
    schlagen: {
      abschlagen: "geri çevirmek, reddetmek",
      aufschlagen: "açmak (kitap, göz), çarpmak",
      durchschlagen: "zorla geçmek",
      einschlagen: "kırmak, vurmak",
      vorschlagen: "önermek",
    },
    setzen: {
      absetzen: "görevden almak, indirmek",
      ansetzen: "başlamak, eklemek",
      durchsetzen: "kabul ettirmek, zorla yaptırmak",
      einsetzen: "kullanmak, görevlendirmek",
      umsetzen: "uygulamak, hayata geçirmek",
    },
    stehen: {
      aufstehen: "ayağa kalkmak, uyanmak",
      bestehen: "var olmak, başarmak",
      dastehen: "orada durmak, kalakalmak",
      verstehen: "anlamak",
      widerstehen: "karşı koymak, direnmek",
    },
    ziehen: {
      abziehen: "çekip almak, çıkarmak",
      anziehen: "giyinmek, cezbetmek",
      aufziehen: "büyütmek, yukarı çekmek",
      einziehen: "taşınmak",
      zurückziehen: "geri çekilmek",
    },

    fangen: {
      anfangen: "başlamak",
      auffangen: "yakalamak, toplamak",
      ausfangen: "tuzak kurmak",
      einfangen: "yakalamak, hapsetmek",
      losfahren: "yola çıkmak", // Bu zaten var, sadece örnek için
    },
    räumen: {
      aufräumen: "temizlemek, toplamak",
      ausräumen: "boşaltmak",
      einräumen: "itiraf etmek, yerleştirmek",
      wegräumen: "kaldırmak, ortadan kaldırmak",
    },
    holen: {
      abholen: "almak (birini/bir şeyi)",
      einholen: "yetmek, telafi etmek",
      nachholen: "telafi etmek",
      zurückholen: "geri almak",
    },
    geben: {
      abgeben: "teslim etmek",
      angeben: "övünmek, belirtmek",
      aufgeben: "vazgeçmek",
      ausgeben: "harcamak, dağıtmak",
      umgeben: "kuşatmak",
      vorgeben: "bahane uydurmak",
      zurückgeben: "geri vermek",
    },
    kaufen: {
      einkaufen: "alışveriş yapmak",
      aufkaufen: "toplamak, satın almak",
      zurückkaufen: "geri satın almak",
    },
    legen: {
      ablegen: "çıkarmak (giysi)",
      anlegen: "yatırım yapmak, başlatmak",
      auflegen: "kapatmak (telefon)",
      beilegen: "eklemek, iliştirmek",
      hinlegen: "yatırmak, koymak",
    },
    machen: {
      aufmachen: "açmak",
      ausmachen: "söndürmek, anlamak",
      durchmachen: "katlanmak, denemek",
      nachmachen: "taklit etmek",
      vormachen: "göstermek, numara yapmak",
    },
    denken: {
      andenken: "anmak",
      ausdenken: "uydurmak",
      nachdenken: "düşünmek",
      vordenken: "önceden planlamak",
    },
    ziehen: {
      abziehen: "çekip almak", // Zaten var
      anziehen: "giymek", // Zaten var
      beziehen: "kaplamak, ilişkilendirmek",
      umziehen: "taşınmak",
      vorziehen: "tercih etmek",
    },
    arbeiten: {
      abarbeiten: "üzerinde çalışmak",
      aufarbeiten: "işlemek, hazmetmek",
      ausarbeiten: "detaylandırmak",
      mitarbeiten: "birlikte çalışmak",
    },
  },
];
export default Tr;
