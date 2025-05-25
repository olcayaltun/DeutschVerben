import React, { useState, useEffect } from "react";

const textContent = [
  {
    text: "Es war ein **verregeneter** (yağmurlu) Herbsttag in München, als ich in meiner kleinen **Bude** (ev, günlük dil) saß und versuchte, meine **Dissertation** (doktora tezi) zu schreiben.",
  },
  {
    text: "Der Wind **wehte** (esmek) heftig durch die schmalen Straßen, und ich konnte **mühelos** (zahmetsizce) erkennen, dass es kein Tag für einen **Stadtbummel** (şehir turu) war.",
  },
  {
    text: "Als ich so **in Erinnerungen schwelgte** (anılara dalmak), klingelte plötzlich mein Telefon.",
  },
  {
    text: "Ich **kam nicht aus dem Staunen heraus** (hayretten kurtulamamak), als ich die Stimme meiner alten Freundin Lena hörte. Wir hatten uns seit Jahren nicht gesehen, seit sie nach Berlin gezogen war.",
  },
  {
    text: '"Hallo! Rate mal, wo ich bin?", fragte sie mit **aufgeregter** (heyecanlı) Stimme.',
  },
  {
    text: '"Ich kann es kaum **erraten** (bir şeyi tahmin etmek)", antwortete ich überrascht.',
  },
  {
    text: '"Ich bin in München! Mein Flug hat mich hierher **verschlagen** (birini bir yere savurmak)! Ich brauche einen **Tapetenwechsel** (dekor değişikliği) und dachte, ich besuche dich **unangekündigt** (habersiz)."',
  },
  {
    text: 'Ich war **entsetzt** (dehşete düşmüş) und gleichzeitig erfreut über dieses unerwartete **Ereignis** (olay). Ohne zu zögern, sagte ich: "**Evet** (evet), natürlich! Komm vorbei!"',
  },
  {
    text: "Als sie eine Stunde später an meiner Tür klopfte, öffnete ich mit einem **vergnügten** (keyifli) Lächeln.",
  },
  {
    text: "Lena stand da, mit **aufgerissenen** (kocaman açılmış) Augen, als sie meine Wohnung sah.",
  },
  {
    text: "Ich hatte mittlerweile eine **wohlhabende** (varlıklı) Ärztin geheiratet und lebte in einer eleganten Wohnung mit **bodenhochern** (yerden tavana kadar) Fenstern und einer **Schiebetür** (sürgülü kapı), die zu einem kleinen Balkon führte.",
  },
  {
    text: '"Wow", sagte sie **scherzhaft** (şaka yollu), "du hast es ja weit gebracht!" Eine **makellose** (kusursuz) **Sofalandschaft** (köşe takımı) **zierte** (bir şeyi süslemek) den Wohnbereich.',
  },
  {
    text: '"Komm rein", lud ich sie ein. "Erzähl mir, was sich in deinem Leben **ergeben** (ortaya çıkmak) hat."',
  },
  {
    text: '"Moment", **warf sie ein** (araya söz sokmak), "erst will ich alles sehen!"',
  },
  {
    text: "Wir verbrachten den Nachmittag damit, **über Gott und die Welt** (her şey hakkında) zu reden.",
  },
  {
    text: "Es war **erstaunlich** (şaşırtıcı), wie leicht wir an unsere alte **vertraute** (aşina) Freundschaft anknüpfen konnten.",
  },
  {
    text: "**Auf Schritt und Tritt** (her adımda) entdeckten wir, dass wir noch immer viel gemeinsam hatten.",
  },
  {
    text: '"Ich muss dir etwas **gestehen** (bir şeyi itiraf etmek)", sagte Lena schließlich mit **überwältigender** (ezici) Ehrlichkeit.',
  },
  {
    text: '"Ich bin hier, weil ich meinen Mann **verlassen** (birini terk etmek) habe. Die **Scheidungspapiere** (boşanma belgeleri) sind schon bei der **Anwältin** (avukat, kadın). Es war **nicht so weit** (o kadar ileri gitmemek) hergeholt, dass ich bei dir **auftauche** (ortaya çıkmak)."',
  },
  {
    text: "Ihre **warmherzige** (sıcakkanlı) Art hatte mich schon immer beeindruckt, aber ich war besorgt um ihr **Wohlergehen** (refah).",
  },
  {
    text: '"Fühlst du dich **einsam** (yalnız)?", fragte ich **verständnisvoll** (anlayışlı).',
  },
  {
    text: '"Es war schwer, ihn **loszulassen** (bir şeyi/birini bırakmak)", sagte sie **wortlos** (sessizce) und starrte aus dem Fenster.',
  },
  {
    text: '"Ich bin **Hals über Kopf** (baş üstü) in Arbeit **versunken** (batmak), um nicht nachdenken zu müssen."',
  },
  {
    text: "Die Stunden vergingen **wie im Flug** (çok hızlı), und bald war es **Mitternacht** (gece yarısı).",
  },
  {
    text: 'Ich **gähnte** (esnemek) und sagte: "**Apropos** (bu arada) Müdigkeit – willst du hier übernachten? Unsere **Gastfreundschaft** (misafirperverlik) steht dir zur Verfügung."',
  },
  {
    text: '"Danke, aber ich **muss los** (gitmek zorunda olmak)", antwortete sie. "Ich habe ein Hotelzimmer gebucht. Aber ich würde mich freuen, wenn wir uns morgen **ebenfalls** (aynı şekilde) treffen könnten."',
  },
  {
    text: "Sie lächelte **verschmitzt** (muzip) und umarmte mich zum Abschied. Ich konnte nicht **ablehnen** (bir şeyi reddetmek) – sie war schließlich meine älteste Freundin.",
  },
  {
    text: "Als sie ging, spürte ich plötzlich **Schmetterlinge im Bauch** (aşık olmak).",
  },
  {
    text: "Nicht wegen Lena – sie war immer eine **liebenswerte** (sevimli) Freundin gewesen – sondern weil ihre Anwesenheit mir **wehtat** (acımak) wie eine **Pfeilspitze** (ok ucu), die mich an meine eigene unbefriedigende Ehe erinnerte.",
  },
  {
    text: "Hatte ich jemals solche tiefen **Gefühle für jemanden gehegt** (birine karşı his beslemek) wie sie für ihren Ex-Mann? War meine Beziehung wirklich **erfüllend** (tatmin edici)? Diese Gedanken **rissen mich aus dem Tagtraum** (birinin hayalini yıkmak).",
  },
  {
    text: "Mir **blieb nichts anderes übrig** (başka çare kalmamak), als bis zum nächsten Tag zu warten.",
  },
  {
    text: "Nach meinem **morgendlichen** (sabahları) Kaffee – dem **Paradebeispiel** (tipik örnek) eines perfekten Frühstücks mit **Semmeln** (ekmek, Bavyera), **Leberkäse** (bir tür sosis) und **Trinkschokolade** (sıcak çikolata) – rief ich Lena an.",
  },
  {
    text: 'Mein **Magen knurrte** (mide guruldaması) noch, als sie abhob. "Hast du Zeit?", fragte ich, unsicher, wie ich meine Gefühle von gestern Abend **zuordnen** (bir şeyi ilişkilendirmek) sollte.',
  },
  {
    text: '"Natürlich!", antwortete sie **überzeugt** (ikna olmuş). "Ich habe schon darauf gewartet."',
  },
  {
    text: "Ich wusste **innerlich** (içten), dass dieses Wiedersehen ein **Mysterium** (gizem) lösen würde, das mich seit langem beschäftigte.",
  },
  {
    text: 'Wir trafen uns in einem kleinen Café in der Innenstadt. Als ich sie sah, überwand ich meine Schüchternheit und **sprach sie an** (biriyle konuşmaya başlamak): "Ich muss dir etwas sagen. In diesem **Augenblick** (an) ist mir klar geworden, dass ich nicht glücklich bin."',
  },
  {
    text: "Wir saßen in einem **Vierersitz** (dört kişilik koltuk) ganz hinten im Café, und ich fühlte mich **bescheiden** (mütevazı) angesichts ihrer Offenheit.",
  },
  {
    text: "Der Platz war **knapp** (dar), aber die Intimität half mir, mich zu öffnen.",
  },
  {
    text: '"Ich bin **verzweifelt** (çaresiz) in meiner Ehe", gestand ich. "Es ist eine **verzwickte** (karmaşık) Situation."',
  },
  {
    text: "Das Licht im Café **trübte** (kararmak) sich leicht, als eine Wolke die Sonne verdeckte.",
  },
  {
    text: 'Lena **traute ihren Ohren nicht** (duyduğuna inanamamak) und fragte: "Warum hast du nie etwas gesagt? Das ist nicht **böse** (kötü) gemeint, aber du hättest mich anrufen können."',
  },
  {
    text: '"Diese **Geste** (jest) wäre nicht zu mir **gepasst** (uymak) haben", antwortete ich leise.',
  },
  {
    text: '"Du musst dich ändern!", rief sie, **komplett aus dem Häuschen** (çok heyecanlanmak). "Es ist Zeit für einen Neuanfang! **Pfiat di!** (Hoşça kal!, Bavyera) zu deinem alten Leben!"',
  },
  {
    text: "Es war an der Zeit, die **Initiative zu ergreifen** (inisiyatif almak).",
  },
  {
    text: "Mit **doppelter** (iki kat) Entschlossenheit und **Eigeninitiative** (kendi inisiyatifi) beschloss ich, mein Leben zu ändern.",
  },
  {
    text: "Alles verlief **planmäßig** (plana göre). Lenas **Charme** (çekicilik) und Unterstützung halfen mir, den schwierigen Schritt zu wagen.",
  },
  {
    text: "Ich **jubelte** (sevinç çığlıkları atmak) innerlich und vollführte einen mentalen **Freudentanz** (sevinç dansı).",
  },
  {
    text: "Ein paar Monate später saßen wir wieder zusammen, um in einem anderen Café **in Erinnerungen zu schwelgen** (anılara dalmak).",
  },
  {
    text: "Diesmal hatte ich die **Muße** (keyif), mein neues Leben zu genießen.",
  },
  {
    text: '"Wie geht es mit deiner **Dissertation** (doktora tezi) voran?", fragte Lena.',
  },
  {
    text: '"Es ist **spannend** (heyecan verici), aber ich hatte fast einen **Nervenzusammenbruch** (sinir krizi) letzte Woche", antwortete ich **amüsiert** (eğlenceli).',
  },
  {
    text: '"Du bist mein **Schützling** (himaye edilen kişi)", lachte sie. "Übrigens, hast du die **URL** (internet adresi) bekommen, die ich dir geschickt habe? Es gibt ein tolles Online-Forum für Doktoranden."',
  },
  {
    text: "Ich nickte und erklärte, dass ich **gezielt** (hedefli) nach Informationen suchte und versuchte, **realistisch** (gerçekçi) zu bleiben.",
  },
  {
    text: '"Um ein **besseres Bild zu bekommen** (daha iyi bir fikir edinmek), solltest du **im Prinzip** (prensip olarak) jeden Tag ein bisschen schreiben", empfahl sie.',
  },
  {
    text: "Wir **gingen gemeinsam durch** (bir şeyi gözden geçirmek) meinen Zeitplan für die nächsten Wochen.",
  },
  {
    text: '"**Es ist so weit** (zamanı geldi)", sagte ich entschlossen. "Ich muss meine Arbeit **parallel** (paralel) zu meinem neuen Leben voranbringen."',
  },
  {
    text: "Ich war **hypermotiviert** (aşırı motive) und wollte keine Zeit **verschwenden** (bir şeyi israf etmek).",
  },
  {
    text: "Mit einem **straffen Zeitplan** (sıkı bir program) und **eifrigem** (hevesli) Arbeiten, ohne mich **ablenken zu lassen** (dikkati dağılmak), konnte ich einen **soliden Grundstein legen** (sağlam bir temel atmak).",
  },
  {
    text: "Als wir **von dannen gingen** (oradan ayrılmak), zog ich den **Vorhang** (perde) meines alten Lebens endgültig **zu** (bir şeyi kapatmak).",
  },
  {
    text: "In den folgenden Wochen integrierte ich eine tägliche **Dosis** (doz) Schreibarbeit in meinen Alltag.",
  },
  {
    text: "Ich **integrierte** (bir şeyi dahil etmek) auch regelmäßige Treffen mit Lena, die mittlerweile eine enge Vertraute geworden war.",
  },
  {
    text: "**Gesagt, getan** (sözünü tutmak) – ich arbeitete manchmal fünf Stunden **am Stück** (aralıksız) und **nahm mir zu Herzen** (bir öğüdü ciddiye almak), was mein Betreuer mir geraten hatte.",
  },
  {
    text: "Die Forschungsliteratur **breitete ich aus** (bir şeyi yaymak) auf meinem Schreibtisch, um **optimal** (en uygun) arbeiten zu können.",
  },
  {
    text: "Mit meinem **Vorwissen** (ön bilgi) und Lenas Unterstützung machte ich schnell Fortschritte.",
  },
  {
    text: "Ich war **fasziniert** (büyülenmiş) von meinem Thema und verlor mich oft in den Details.",
  },
  {
    text: "Eines Tages besuchte mich Lena mit einer Überraschung: Sie hatte endlich ihre **Scheidungspapiere** (boşanma belgeleri) erhalten.",
  },
  {
    text: "Ihre **Anwältin** (avukat, kadın) hatte alle Details geregelt und ihr alles **überlassen** (bir şeyi birine bırakmak), was sie brauchte.",
  },
  {
    text: "Das **juristische Schriftstück** (hukuki belge) lag auf meinem Tisch, als das Telefon klingelte.",
  },
  {
    text: '"Ich bin in der **Leitung** (hat, telefon)", sagte eine Stimme – es war mein Betreuer. Er wollte wissen, wie meine Arbeit voranging.',
  },
  {
    text: "Lena hatte mittlerweile ihr **Zelt aufgeschlagen** (kamp kurmak) in einer Wohnung ganz in der Nähe.",
  },
  {
    text: "Das war praktisch, denn wir konnten uns **ohnehin** (zaten) regelmäßig sehen.",
  },
  {
    text: "Es gab nichts, was wir voreinander **verheimlichen** (bir şeyi gizlemek) müssten.",
  },
  {
    text: "Als der Sommer **eintraf** (varmak), hatten wir **nach und nach** (yavaş yavaş) ein neues Leben aufgebaut.",
  },
  {
    text: "Eines Abends ließen wir den Tag **Revue passieren** (bir şeyi gözden geçirmek).",
  },
  {
    text: "Es war Lenas **drankommen** (sırası gelmek), zu kochen. Sie bereitete **das Übliche** (her zamanki) zu – eine leckere Pasta mit Gemüse.",
  },
  {
    text: '"Du musst alle Ernährungsgruppen **abdecken** (bir şeyi kapsamak)", sagte sie und **fragte ab** (bir şeyi sormak), was ich den ganzen Tag gemacht hatte.',
  },
  {
    text: "Ich **meldete mich zu Wort** (söz almak) und erzählte von meinen Fortschritten bei der Dissertation.",
  },
  {
    text: "Ich hatte mir einen **Überblick verschafft** (genel bir bakış edinmek) über die Literatur und viele Artikel **überflogen** (bir şeyi göz atmak).",
  },
  {
    text: '"Die **Schlüsselwörter** (anahtar kelime) in meiner Forschung sind sehr **abstrakt** (soyut), aber **relevant** (önemli) für die aktuelle Diskussion", erklärte ich.',
  },
  {
    text: '"**Es erscheint mir** (Bana göre…)", antwortete Lena, "dass du **im Grunde** (aslında) eine **bewährte** (denenmiş) Methode entwickelt hast."',
  },
  {
    text: "Wir **rekapitulierten** (bir şeyi özetlemek) gemeinsam meine Fortschritte und zogen **Parallelen** (paralel) zu Lenas neuer Arbeit.",
  },
  {
    text: "Nach ein paar **Runden** (tur) Diskussion und ehrlicher **Rückmeldung** (geri bildirim) fühlte ich mich gestärkt.",
  },
  {
    text: '"Du bist so **großzügig** (cömert) mit deiner Zeit", sagte ich dankbar. "Du **beklagst** (şikayet etmek) dich nie, wenn ich stundenlang über meine Arbeit rede."',
  },
  {
    text: '"Ich bin eine **Leseratte** (kitap kurdu)", lachte sie. "Ich liebe es, neue Dinge zu lernen. Wann wirst du deine Arbeit **einreichen** (bir şeyi teslim etmek)?"',
  },
  {
    text: '"In ein paar Monaten", antwortete ich. "Ich habe noch **zahlreiche** (çok sayıda) Kapitel zu schreiben, aber ich werde nicht **mit leeren Händen** (eli boş) vor meinem Prüfungskomitee stehen."',
  },
  {
    text: '"Du bist **am Start** (hazır olmak)", ermutigte sie mich und **drehte die Musik auf** (bir şeyi açmak, ses). "Du wirst es schaffen – ich werde dich **retten** (birini kurtarmak), wenn du Hilfe brauchst!"',
  },
  {
    text: 'Zu meiner Überraschung hatte Lena all meine Notizen **gesammelt** (toplu) und in eine **Papierschachtel** (karton kutu) mit der **Aufschrift** (yazı) "Dissertation" gelegt.',
  },
  {
    text: '"**Das ist doch nicht nötig!** (Buna gerek yok!)", protestierte ich, aber ich war **gerührt** (duygulanmış) von dieser **Geste** (jest).',
  },
  {
    text: '"**Selbstverständlich** (tabii ki) ist es das", antwortete sie. "Zur **Abwechslung** (değişiklik) sollten wir heute Abend feiern."',
  },
  {
    text: "Sie begann, ein altes Lied zu summen, und ich **sang mit** (birlikte şarkı söylemek). Es war ein **gefühlvoller** (duygulu) Moment.",
  },
  {
    text: "Später, als ich noch einmal meine Notizen **nachlas** (bir şeyi tekrar okumak), fiel mir ein, dass Lena etwas **erwähnt** (bir şeyden bahsetmek) hatte, das ich überprüfen wollte.",
  },
  {
    text: 'Der **Begriff** (terim) "**öffentlicher Rundfunk** (kamu yayıncılığı)" war in meinem Forschungsbereich wichtig.',
  },
  {
    text: '"Es ist **Geschmackssache** (zevk meselesi)", hatte sie gesagt, "aber ich finde, alte **Heimatfilme** (yöresel film) sind oft unterschätzt in der Wissenschaft."',
  },
  {
    text: "Ich nahm mir vor, **in Ruhe** (sakin bir şekilde) diesen **besagten** (söz konusu) Aspekt zu untersuchen.",
  },
  {
    text: "Der Abend **klang aus** (bir şeyi yavaşça bitirmek) mit einem Glas Wein und leiser Musik.",
  },
  {
    text: "Morgens war ich wieder **aufgeregt** (heyecanlı), an meiner **Einleitung** (giriş) zu arbeiten.",
  },
  {
    text: "Ich war eine **fleißige Biene** (çalışkan arı, mecazi) und versuchte, mein **Gehör** (işitme) für akademische Sprache zu **schulen** (bir şeyi/birini eğitmek).",
  },
  {
    text: "Lena pflegte mich dafür zu **loben** (birini övmek), dass ich so **versorgt** (bakımlı) mit Literatur war und **eifrig** (gayretli) arbeitete.",
  },
  {
    text: "Ihre Unterstützung **wirkte Wunder** (mucizeler yaratmak) auf meine Produktivität.",
  },
  {
    text: "Die **Umgebung** (çevre) war ruhig, nur das **Geräusch** (ses) meiner Tastatur war zu hören.",
  },
  {
    text: "Ich musste Lena etwas **anmerken** (bir şeye dikkat çekmek) – ich hatte etwas **auf dem Herzen** (içini dökmek istemek).",
  },
  {
    text: '"Ich glaube, ich muss dir etwas **gezielt** (hedefli) sagen", begann ich. "Zwischen uns ist etwas **entstanden** (ortaya çıkmak), das mir sehr wichtig ist."',
  },
  {
    text: '"Ich habe **alle Hände voll zu tun** (çok meşgul olmak), um meine eigenen Gefühle zu sortieren", antwortete sie leise.',
  },
  {
    text: '"**Mittlerweile** (bu sırada) ist der Weg nicht mehr so **steinig** (taşlı), aber es gibt noch **Hindernisse** (engel). Und **obendrein** (üstelik) ist die Arbeitsmarktsituation **mau** (kötü)."',
  },
  {
    text: '"Du bist **stets** (daima) ehrlich", sagte ich. "Das schätze ich **mit Abstand** (açık ara) am meisten an dir."',
  },
  {
    text: 'Sie schaute **empört** (öfkeli) und **verwirrt** (kafası karışık) zugleich. "Hast du gedacht, ich würde dich romantisch lieben?"',
  },
  {
    text: '"Ich wollte nur sagen, dass du meine beste Freundin bist", **erriet** (bir şeyi tahmin etmek) ich ihre Gedanken. "**Weder** Liebe **noch** (ne … ne de) romantische Gefühle – nur ehrliche Freundschaft wie zwischen **Kumpeln** (arkadaş)."',
  },
  {
    text: "Sie lachte erleichtert und holte **haufenweise** (yığınla) Snacks aus der Küche.",
  },
  {
    text: "Wir **stießen an** (kadeh tokuşturmak) mit Limonade und beschlossen, unsere Freundschaft zu feiern und unsere **Batterien aufzuladen** (enerji toplamak).",
  },
  {
    text: 'Beim dritten **Gläschen** (küçük bardak) **platzte es aus mir heraus** (pat diye söylemek): "Ich bin so froh, dass du in mein Leben zurückgekehrt bist!"',
  },
  {
    text: "Ich verlor die **Geduld** (sabır) mit mir selbst und meiner **vermutlich** (muhtemelen) zu sentimentalen Art.",
  },
  {
    text: '"Ich **kann es kaum erwarten** (bir şeyi sabırsızlıkla beklemek), meine Dissertation fertigzustellen und ein neues Kapitel zu beginnen."',
  },
  {
    text: "Draußen war es noch immer **verregnet** (yağmurlu), aber drinnen war es warm.",
  },
  {
    text: "Lena sprach in **gebrochenem** (kırık, dil) Deutsch – sie war zwar in Deutschland geboren, aber ihre Eltern waren Türken, und sie war eine **waschechte** (tam anlamıyla) Deutsch-Türkin.",
  },
  {
    text: "Sie erzählte von ihrer Heimatstadt Istanbul und den wunderbaren **Bauwerken** (yapı) dort.",
  },
  {
    text: '"Du musst unbedingt mitkommen", sagte sie. "Du wirst Istanbul **hervorragend** (mükemmel) finden!"',
  },
  {
    text: "Nach einer Weile brauchten wir ein **Päuschen** (küçük mola) und **kicherten** (kıkırdamak) über alte Geschichten.",
  },
  {
    text: '"Wir brauchen ein **Notfalltreffen** (acil toplantı)", scherzte sie. "Um sicherzustellen, dass wir die Freundschaft nicht **vernachlässigen** (bir şeyi ihmal etmek)!"',
  },
  {
    text: "Ich nickte und erklärte, dass das **Feld** (alan) der Freundschaft genauso wichtig sei wie die akademische Arbeit.",
  },
  {
    text: "Manchmal **fluchte** (küfretmek) Lena, wenn sie frustriert war, und benutzte türkische **Schimpfwörter** (küfür), die ich nicht verstand.",
  },
  {
    text: "Sie war manchmal **frech** (küstah), aber sie konnte es gut **überspielen** (bir şeyi gizlemek) mit ihrem **kecken** (şımarık) Humor und ihrer **charmanten** (çekici) Art.",
  },
  {
    text: "Als sie sich an diesem Abend **verabschiedete** (veda etmek), arbeitete ich noch lange weiter **mit rauchendem Kopf** (kafa patlatmak).",
  },
  {
    text: "Die **Anspannung** (gerginlik) ließ nach, aber ich fühlte mich **wie ein Häufchen Elend** (perişan halde).",
  },
  {
    text: "Ich erkannte, dass der **Schwachpunkt** (zayıf nokta) meiner Dissertation noch immer die Struktur war.",
  },
  {
    text: "Ich konnte **den Wald vor lauter Bäumen nicht sehen** (ağaçlardan ormanı görememek) und musste die **Reihenfolge** (sıralama) der Kapitel überdenken.",
  },
  {
    text: "Als ich endlich eine E-Mail von meinem Betreuer **erhielt** (bir şeyi almak), war ich **gespannt** (meraklı) auf sein Feedback.",
  },
  {
    text: "Es **fiel mir schwer** (zor gelmek), seine Kritik anzunehmen, aber ich wusste, dass es **wesentlich** (önemli) für meinen Erfolg war.",
  },
  {
    text: "Ich **zog eine Grimasse** (yüz buruşturmak), als ich seine Kommentare las.",
  },
  {
    text: "**Schweißperlen** (ter damlası) bildeten sich auf meiner **Stirn** (alın), aber ich beschloss, weiterzumachen.",
  },
  {
    text: "Ich rief Lena an, um ein Treffen **anzukündigen** (bir şeyi duyurmak).",
  },
  {
    text: "Es war Zeit, **Gas zu geben** (gaz vermek) und einen **kühlen Kopf zu bewahren** (soğukkanlılığını korumak).",
  },
  {
    text: "Ich **gönnte mir** (kendine bir şey çıkarmak) eine kurze Pause und dachte daran, wie ich bei meiner letzten Prüfung **geschummelt** (kopya çekmek) hatte und fast **durchgefallen** (sınavdan kalmak) wäre.",
  },
  {
    text: '"Ich **mache mir fast in die Hose** (korkudan altına yapmak)", gestand ich Lena am Telefon.',
  },
  {
    text: '"Du **zitterst** (titremek) ja!", sagte sie, als wir uns trafen. "Aber ich **habe etwas auf Lager** (bir şeyi hazır bulundurmak) für dich – einen **weisen** (bilge) Rat: Nimm dir Zeit und geh Schritt für Schritt vor."',
  },
  {
    text: "Ich **überflog** (bir şeye göz atmak) noch einmal meine Arbeit und erkannte **Lücken** (boşluk), die ich schließen musste.",
  },
  {
    text: "Als angehende **Führungskraft** (yönetici) in der Akademie musste ich präzise sein.",
  },
  {
    text: "Mit einem **Seufzer** (iç çekme) setzte ich mich wieder an den Schreibtisch.",
  },
  { text: "Meine Gelenke **knackten** (çıtırdamak) vom langen Sitzen." },
  {
    text: "Ich hatte keine **Beschwerden** (şikayet) an meinen **Vorgesetzten** (amir), aber ich war **fix und fertig** (bitkin).",
  },
  {
    text: "Lena ermutigte mich, auf meine **Stimme** (ses) zu hören und auch auf **geschlechtergerechte Sprache** (cinsiyet eşitliğine duyarlı dil) in meiner Arbeit zu achten.",
  },
  {
    text: "Sie hatte gerade ihre **Impfung** (aşı) bekommen und fühlte sich nicht wohl, aber sie unterstützte mich trotzdem.",
  },
  {
    text: '"**Da müssen wir jetzt durch!** (Bunu atlatmalıyız!)", sagte sie entschlossen. "Wenn du fertig bist, machen wir einen ausgiebigen **Stadtbummel** (şehir turu)."',
  },
  {
    text: "Ich fragte mich, ob ich mit ihrem Tempo **mithalten könnte** (ayak uydurmak).",
  },
  {
    text: "Lena neigte dazu, zu **übertreiben** (abartmak), aber ihre **eindrucksvolle** (etkileyici) Energie war genau das, was ich brauchte.",
  },
  {
    text: "**Hin und wieder** (arada bir) machte sie Witze, um die **Stimmung aufzuhellen** (neşelendirmek).",
  },
  {
    text: "Nach einem guten Abendessen waren wir beide **satt** (tok) und zufrieden.",
  },
  {
    text: '"Bist du **in der Lage** (muktedir olmak), morgen weiterzuarbeiten?", fragte sie. "Es scheint, als würde es **ewig** (sonsuz) dauern, bis du fertig bist."',
  },
  {
    text: '"Ich bin konzentriert", antwortete ich. "In der Wissenschaft ist es gerade **angesagt** (moda), interdisziplinär zu arbeiten."',
  },
  {
    text: "Wir beschlossen, den Abend **in vollen Zügen zu genießen** (doyasıya yaşamak).",
  },
  {
    text: "Lena versuchte, **geheime Informationen** (gizli bilgiler) über meine Verabredungen **aus mir herauszuquetschen** (birinden zorla bilgi almak), aber ich blieb standhaft.",
  },
  {
    text: '"Du bist ein lustiger **Kerl** (adam)", lachte sie. "Bist du etwa **verliebt** (aşık)?"',
  },
  {
    text: '"Ich bin längst **über meine Ex-Frau hinweg** (bir şeyi/birini atlatmak)", antwortete ich. "Aber ich habe **eine Menge** (bir sürü) zu tun, bevor ich wieder date."',
  },
  {
    text: "Am nächsten Tag **schlenderten** (ağır ağır yürümek) wir durch das Zentrum und genossen die sonnige **Shoppingmeile** (alışveriş caddesi).",
  },
  {
    text: "Die **Absicht** (niyet), einen entspannten Tag zu verbringen, war klar.",
  },
  {
    text: '"Ich muss ein Treffen mit meinem Betreuer **ansetzen** (bir şeyi planlamak)", sagte ich.',
  },
  {
    text: "Ich rief ihn an und **legte auf** (telefonu kapatmak), als ich seine Mailbox hörte.",
  },
  {
    text: 'Lena **schluckte** (yutkunmak) und meinte: "Die Vorteile einer Freundschaft **überwiegen** (ağır basmak) die Nachteile bei weitem."',
  },
  {
    text: "Mir **war nicht nach** (birinin canı bir şey istemek) Arbeit zumute, aber ich musste meine Dissertation voranbringen.",
  },
  { text: "Ich arbeitete **ununterbrochen** (aralıksız) den ganzen Tag." },
  {
    text: '"Bitte, mach eine Pause!", **flehte** (yalvarmak) Lena mich an. "Du musst auch mal durchatmen, sonst kannst du den Stress nicht **verkraften** (bir şeyi atlatmak)."',
  },
  {
    text: "Sie hatte Recht. In den letzten Monaten hatte ich viel durchgemacht und musste lernen, wieder ein ausgeglichenes Leben zu führen.",
  },
  {
    text: "Mit Lenas Unterstützung und meiner eigenen Entschlossenheit hatte ich es geschafft, eine schwierige Phase zu überwinden.",
  },
  {
    text: "Als ich schließlich meine Dissertation einreichte, waren wir beide unglaublich stolz.",
  },
  {
    text: "Wir hatten es gemeinsam geschafft, durch alle Höhen und Tiefen zu gehen, und unsere Freundschaft war stärker denn je.",
  },
  {
    text: '"Das ist erst der Anfang", sagte Lena lächelnd. "Auf viele weitere Abenteuer!"',
  },
  {
    text: '"Auf viele weitere Abenteuer!", wiederholte ich und hob mein Glas.',
  },
];

function Kitap4() {
  const [tooltip, setTooltip] = useState({
    visible: false,
    content: "",
    position: { x: 0, y: 0 },
  });

  // Adjust tooltip position to stay within viewport
  const adjustTooltipPosition = (x, y) => {
    const tooltipWidth = 200; // Approximate width
    const tooltipHeight = 40; // Approximate height
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    return {
      x: Math.min(x, windowWidth - tooltipWidth),
      y: Math.min(y, windowHeight - tooltipHeight),
    };
  };

  // Handle click and keyboard events
  const handleClick = (e, translation) => {
    const rect = e.target.getBoundingClientRect();
    const adjustedPos = adjustTooltipPosition(
      rect.left,
      rect.bottom + window.scrollY
    );
    setTooltip({
      visible: true,
      content: translation,
      position: adjustedPos,
    });
  };

  // Cleanup timeout on unmount or when tooltip visibility changes
  useEffect(() => {
    let timeoutId;
    if (tooltip.visible) {
      timeoutId = setTimeout(() => {
        setTooltip((prev) => ({ ...prev, visible: false }));
      }, 2000);
    }
    return () => clearTimeout(timeoutId);
  }, [tooltip.visible]);

  // Parse text function
  const parseText = (text, index) => {
    const regex = /\*\*([^\*]+)\*\*\s*\(([^\)]+)\)/g;
    let lastIndex = 0;
    const elements = [];
    let match;

    while ((match = regex.exec(text)) !== null) {
      const [fullMatch, word, translation] = match;
      const beforeText = text.slice(lastIndex, match.index);
      if (beforeText) {
        elements.push(
          <span key={`${index}-before-${lastIndex}`}>{beforeText}</span>
        );
      }
      elements.push(
        <span
          key={`${index}-match-${match.index}`}
          className="font-bold text-blue-600 cursor-pointer relative"
          role="button"
          aria-label={`Show translation for ${word}`}
          tabIndex={0}
          onClick={(e) => handleClick(e, translation)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleClick(e, translation);
            }
          }}
        >
          {word}
        </span>
      );
      lastIndex = regex.lastIndex;
    }

    const remainingText = text.slice(lastIndex);
    if (remainingText) {
      elements.push(
        <span key={`${index}-remaining-${lastIndex}`}>{remainingText}</span>
      );
    }

    return elements;
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Der Weg nach Hause
      </h1>
      {textContent.map((paragraph, index) => (
        <p key={index} className="mb-4 text-gray-700 leading-relaxed">
          {parseText(paragraph.text, index)}
        </p>
      ))}
      {tooltip.visible && (
        <div
          className="fixed bg-gray-800 text-white text-sm px-2 py-1 rounded shadow-lg z-[1000]"
          style={{ top: tooltip.position.y + 5, left: tooltip.position.x }}
        >
          {tooltip.content}
        </div>
      )}
    </div>
  );
}

export default Kitap4;
