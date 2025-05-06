import React, { useState } from "react";

const textContent = [
  {
    text: "Es war ein regnerischer Montagmorgen, als Sophie **sich nicht unterkriegen ließ** (pes etmemek) und trotz des **verregnet** (yağmurlu) Wetters zur Universität ging.",
  },
  {
    text: "Ihre letzte Prüfungsphase hatte begonnen, und sie war entschlossen, gute **Leistungen** (performans) zu erbringen.",
  },
  {
    text: "Obwohl ihre Freunde ihr sagten, dass die Noten **zweitrangig** (ikinci derecede) seien, **gab sie sich Mühe** (çaba göstermek), um **über sich selbst hinauszuwachsen** (kendini aşmak).",
  },
  {
    text: "In der Bibliothek traf sie auf ihren Kommilitonen Mark, der **bleich** (solgun) und erschöpft aussah.",
  },
  {
    text: '"**Mir ist schwindelig** (başı dönmek)", flüsterte er, als er sich neben sie setzte.',
  },
  {
    text: 'Sophie versuchte, ihn zu beruhigen: "Die Prüfung wird nicht so schwer sein, du musst nur den **Durchschnitt** (ortalama) **erreichen** (yeterli olmak)."',
  },
  {
    text: "Marks **zaghaftes** (ürkek) Lächeln verschwand jedoch schnell, und eine **Träne** (gözyaşı) lief über seine **Wange** (yanak).",
  },
  {
    text: 'Sophie legte ihm die Hand auf die Schulter, um ihn zu **trösten** (birini teselli etmek): "Ist alles in Ordnung?"',
  },
  {
    text: '"Mein Seminar wurde **gestrichen** (iptal olmak)", antwortete er **fassungslos** (şaşkın). "Ich muss meine ganze Dissertation neu planen."',
  },
  {
    text: '"Du musst das jetzt **verdauen** (bir şeyi hazmetmek), aber dann musst du es **anpacken** (bir şeye el atmak)", sagte Sophie entschlossen.',
  },
  {
    text: "Sie war bekannt für ihren **Fleiß** (çalışkanlık) und ihre positive Einstellung.",
  },
  {
    text: '"Wir können heute Abend **übernachten** (gecelemek) und eine **Nachtschicht einlegen** (gece vardiyası yapmak), um einen neuen Plan zu **erstellen** (bir şey oluşturmak)."',
  },
  {
    text: "Mark schaute sie **sehnsüchtig** (hasretle) an. Er wusste, dass Sophie ihm den Weg **ebnen** (yol açmak) würde, um die **Ungewissheit** (belirsizlik) zu überwinden.",
  },
  { text: "Seine Sorgen würden bald **ein Ende nehmen** (sona ermek)." },
  {
    text: "Als sie später am Abend in Sophies **Bude** (ev) ankamen, war Mark erstaunt.",
  },
  {
    text: "Er hatte **aufgerissene** (kocaman açılmış) Augen und konnte **nicht aus dem Staunen herauskommen** (hayretten kurtulamamak).",
  },
  {
    text: "Die Wohnung hatte **bodenhohe** (yerden tavana kadar) Fenster und eine moderne **Schiebetür** (sürgülü kapı) zum Balkon.",
  },
  {
    text: '"Du hast mir nie erzählt, dass du so **wohlhabend** (varlıklı) bist", sagte er **scherzhaft** (şaka yollu).',
  },
  {
    text: 'Sophie lachte. "Das ist nicht meine Wohnung. Ich passe auf die **Sofalandschaft** (köşe takımı) und die **makellosen** (kusursuz) Möbel auf, die die Wohnung **zieren** (bir şeyi süslemek), während meine Tante im Ausland ist."',
  },
  {
    text: "Als sie arbeiteten, **ergab sich** (ortaya çıkmak) eine produktive Atmosphäre.",
  },
  {
    text: 'Mark **warf ein** (araya söz sokmak): "Weißt du, manchmal denke ich, dass das Schicksal uns an bestimmte Orte **verschlägt** (birini bir yere savurmak), genau wenn wir einen **Tapetenwechsel** (dekor değişikliği) brauchen."',
  },
  {
    text: "Sophie nickte. Sie fühlte sich **vertraut** (aşina) mit Mark, obwohl sie sich erst vor einem Semester kennengelernt hatten.",
  },
  {
    text: "**Auf Schritt und Tritt** (her adımda) entdeckten sie neue Gemeinsamkeiten.",
  },
  {
    text: "Sie konnten **lange** (uzun süre) und **mühelos** (zahmetsizce) über alles reden, was **erstaunlich** (şaşırtıcı) war.",
  },
  {
    text: "Sie diskutierten **über Gott und die Welt** (her şey hakkında), und die Verbindung zwischen ihnen war **überwältigend** (ezici).",
  },
  {
    text: "Zwischendurch klingelte Sophies Telefon. Es war ihr Freund Thomas, der **sicherstellen** (bir şeyi garanti altına almak) wollte, dass es ihr gut ging.",
  },
  {
    text: "Nach dem kurzen Gespräch **tauchte** (ortaya çıkmak) ein unangenehmes Schweigen auf.",
  },
  {
    text: '"Thomas klingt sehr **warmherzig** (sıcakkanlı)", sagte Mark schließlich.',
  },
  {
    text: '"Er hat mich vor einem Jahr fast **verlassen** (birini terk etmek)", erwiderte Sophie leise.',
  },
  {
    text: '"Seitdem sorge ich mich mehr um sein **Wohlergehen** (refah) als um meine eigenen Gefühle. Manchmal fühle ich mich **einsam** (yalnız), auch wenn ich bei ihm bin."',
  },
  {
    text: 'Sie seufzte. "Ich **schmeiße den Haushalt** (evi çekip çevirmek), studiere und arbeite nebenbei. Er ist nicht immer **verständnisvoll** (anlayışlı)."',
  },
  {
    text: 'Mark schaute sie ernst an. "Vielleicht solltest du ihn **loslassen** (bir şeyi/birini bırakmak)."',
  },
  {
    text: '"**Nicht so weit** (o kadar ileri gitmemek)", unterbrach Sophie ihn und widmete sich **wortlos** (sessizce) wieder ihren Büchern.',
  },
  {
    text: "Die Stunden vergingen, und beide **versanken** (batmak) in ihrer Arbeit.",
  },
  {
    text: 'Als die **Mitternacht** (gece yarısı) kam, **gähnte** (esnemek) Sophie und streckte sich. "Die Zeit verging **wie im Flug** (çok hızlı)."',
  },
  {
    text: '"**Apropos** (bu arada) Zeit", sagte Mark, "ich sollte wohl gehen. Danke für deine **Gastfreundschaft** (misafirperverlik)."',
  },
  {
    text: '"**Musst du wirklich los**? (gitmek zorunda olmak)", fragte Sophie und fügte **ebenfalls** (aynı şekilde) hinzu: "Es ist spät, du kannst auf dem Sofa übernachten."',
  },
  {
    text: "Mark lächelte **verschmitzt** (muzip), **lehnte aber ab** (bir şeyi reddetmek).",
  },
  {
    text: "Er wollte nicht zugeben, dass er **Schmetterlinge im Bauch hatte** (aşık olmak), wenn er in ihrer Nähe war.",
  },
  {
    text: "Sophie war so **liebenswert** (sevimli), aber sie war vergeben, und das **tat weh** (acımak) wie eine **Pfeilspitze** (ok ucu) im Herzen.",
  },
  {
    text: "Als er ging, fragte er sich, ob Sophie auch **Gefühle für ihn hegte** (birine karşı his beslemek).",
  },
  {
    text: "Ihre Freundschaft war **erfüllend** (tatmin edici), aber er wollte sie nicht aus ihrem **Tagtraum reißen** (birinin hayalini yıkmak).",
  },
  {
    text: "Es **blieb ihm nichts anderes übrig** (başka çare kalmamak), als zu warten.",
  },
  {
    text: "Am nächsten **morgendlichen** (sabahları) Treffen brachte Mark als **Paradebeispiel** (tipik örnek) bayerischer Gastfreundschaft eine **Semmel** (ekmek) mit **Leberkäse** (bir tür sosis) und heiße **Trinkschokolade** (sıcak çikolata) mit.",
  },
  {
    text: "Als sie das Frühstück teilten, **knurrte** (mide guruldaması) Sophies Magen laut, was sie beide zum Lachen brachte.",
  },
  {
    text: '"Wie **ordnest du** (bir şeyi ilişkilendirmek) deine Gefühle zu Thomas ein?", fragte Mark plötzlich, **überzeugt** (ikna olmuş), dass er **innerlich** (içten) stark genug war, die Antwort zu hören.',
  },
  {
    text: "Sophie zögerte. Es war ein **Mysterium** (gizem), warum sie das Thema nicht loslassen konnte.",
  },
  {
    text: "Als Mark sie vor Wochen im Zug **angesprochen hatte** (biriyle konuşmaya başlamak), wusste sie in diesem **Augenblick** (an), dass etwas Besonderes passierte.",
  },
  {
    text: "Sie saßen damals im **Vierersitz** (dört kişilik koltuk), und er hatte so **bescheiden** (mütevazı) gewirkt.",
  },
  {
    text: '"Es ist **knapp** (dar) ein Jahr her, dass Thomas und ich fast getrennt wurden", sagte sie **verzweifelt** (çaresiz).',
  },
  {
    text: '"Die Situation war **verzwickt** (karmaşık), und meine Gefühle haben sich **getrübt** (kararmak). Ich konnte **meinen Ohren nicht trauen** (duyduğuna inanamamak), als er zurückkam und sagte, er sei nicht **böse** (kötü)."',
  },
  {
    text: 'Mark machte eine sanfte **Geste** (jest). "Ich will nicht zwischen euch treten, aber ihr scheint nicht zu **passen** (uymak)."',
  },
  {
    text: "Plötzlich klingelte Sophies Handy wieder. Es war Thomas, der seine Pläne für den Tag absagte.",
  },
  {
    text: 'Als sie auflegte, war sie **komplett aus dem Häuschen** (çok heyecanlanmak) vor Freude. "Ich habe heute Zeit für die Bibliothek!"',
  },
  {
    text: '"**Pfiat di**! (Hoşça kal!)", sagte Mark mit bayerischem Akzent und beschloss, die **Initiative zu ergreifen** (inisiyatif almak).',
  },
  {
    text: '"Sophie, ich mag dich - und zwar **doppelt** (iki kat) so sehr, wie du vielleicht denkst. Aber ich respektiere deine Beziehung."',
  },
  {
    text: "Sophies **Eigeninitiative** (kendi inisiyatifi) überraschte ihn, als sie ihm einen Kuss auf die Wange gab.",
  },
  {
    text: '"Lass uns das **planmäßig** (plana göre) angehen. Ich werde mit Thomas reden."',
  },
  {
    text: "Marks **Charme** (çekicilik) hatte sie verzaubert, und sie **jubelte** (sevinç çığlıkları atmak) innerlich.",
  },
  {
    text: "Sie hätte am liebsten einen **Freudentanz** (sevinç dansı) aufgeführt.",
  },
  {
    text: "In den kommenden Wochen **schwelgten sie in Erinnerungen** (anılara dalmak) an ihre ersten Begegnungen und fanden **Muße** (keyif), über ihre Zukunft zu sprechen.",
  },
  {
    text: "Sophie beendete ihre Beziehung mit Thomas und konzentrierte sich auf ihre **Dissertation** (doktora tezi), die **spannender** (heyecan verici) war als je zuvor.",
  },
  {
    text: "Mark hatte einen **Nervenzusammenbruch** (sinir krizi) befürchtet, als Sophie ihm von der Trennung erzählte, aber sie wirkte **amüsiert** (eğlenceli) über seine Sorge.",
  },
  { text: '"Du bist mein **Schützling** (himaye edilen kişi)", scherzte sie.' },
  {
    text: "Gemeinsam arbeiteten sie an ihrer akademischen Karriere, teilten **URLs** (internet adresi) von interessanten Artikeln und halfen sich **gezielt** (hedefli) bei ihren Forschungen.",
  },
  {
    text: "Es war eine **realistische** (gerçekçi) Beziehung, in der beide ein **besseres Bild** (daha iyi bir fikir edinmek) voneinander bekamen.",
  },
  {
    text: '"**Im Prinzip** (prensip olarak) sind wir jetzt ein Paar", sagte Mark eines Abends, als sie ihren Studienplan **durchgingen** (bir şeyi gözden geçirmek).',
  },
  { text: '"**Es ist so weit** (zamanı geldi)", bestätigte Sophie lächelnd.' },
  {
    text: "Sie arbeiteten **parallel** (paralel) an ihren Projekten, beide **hypermotiviert** (aşırı motive) und entschlossen, keine Zeit zu **verschwenden** (bir şeyi israf etmek).",
  },
  {
    text: "Ihr **straffer Zeitplan** (sıkı bir program) ließ wenig Raum für Freizeit, aber sie waren so **eifrig** (hevesli), dass sie sich nicht **ablenken ließen** (dikkati dağılmak).",
  },
  {
    text: "Sie hatten einen **soliden Grundstein gelegt** (sağlam bir temel atmak) für ihre gemeinsame Zukunft.",
  },
  {
    text: "Als die Prüfungszeit endete, **gingen sie von dannen** (oradan ayrılmak), Hand in Hand, und Sophie zog den **Vorhang** (perde) zu ihrer alten Beziehung endgültig **zu** (bir şeyi kapatmak).",
  },
  {
    text: "In den folgenden Monaten integrierten sie tägliche **Dosen** (doz) von Lernzeit und Entspannung in ihren Alltag.",
  },
  {
    text: '"**Gesagt, getan** (sözünü tutmak)", war Marks Motto, als er vier Stunden **am Stück** (aralıksız) an seinen Forschungspapieren arbeitete.',
  },
  {
    text: "Sophie hatte sich seinen Rat **zu Herzen genommen** (bir öğüdü ciddiye almak) und ihre Arbeitsweise optimiert.",
  },
  {
    text: "Sie **breitete** (bir şeyi yaymak) ihre Bücher vor sich aus und schuf eine **optimale** (en uygun) Lernumgebung.",
  },
  {
    text: "Ihr gemeinsames **Vorwissen** (ön bilgi) machte sie zu einem unschlagbaren Team.",
  },
  {
    text: "Mark war **fasziniert** (büyülenmiş) von Sophies Intelligenz, während sie seine Kreativität bewunderte.",
  },
  {
    text: "Ein Jahr später kam eine unerwartete Nachricht: Thomas hatte **Scheidungspapiere** (boşanma belgeleri) von seiner heimlichen Ehefrau erhalten, von der Sophie nie gewusst hatte.",
  },
  {
    text: "Die **Anwältin** (avukat - kadın) hatte ihm die Dokumente geschickt und Sophie eine Kopie **überlassen** (bir şeyi birine bırakmak).",
  },
  {
    text: "Das **juristische Schriftstück** (hukuki belge) bewies, dass Thomas ein Doppelleben geführt hatte.",
  },
  {
    text: "Als Sophie die **Leitung** (hat - telefon) zu Mark aufnahm, war sie erleichtert, dass sie sich von Thomas getrennt hatte.",
  },
  {
    text: "Sie hatten ihr **Zelt aufgeschlagen** (kamp kurmak) in einer gesunden Beziehung, und Mark hatte **ohnehin** (zaten) nie etwas **verheimlicht** (bir şeyi gizlemek).",
  },
  {
    text: "Ihre Professoren waren beeindruckt, als die beiden pünktlich zur Deadline mit ihren Dissertationen **eintrafen** (varmak).",
  },
  {
    text: "**Nach und nach** (yavaş yavaş) **ließen sie ihre Studienzeit Revue passieren** (bir şeyi gözden geçirmek).",
  },
  {
    text: "Als die Verteidigung ihrer Doktorarbeiten **drankam** (sırası gelmek), schafften beide das **Übliche** (her zamanki): eine exzellente Präsentation, die alle Erwartungen **abdeckte** (bir şeyi kapsamak).",
  },
  {
    text: "Die Prüfer **fragten sie ab** (bir şeyi sormak), und beide konnten souverän antworten.",
  },
  {
    text: "Sophie **meldete sich zu Wort** (söz almak), als es um die Zukunftsaussichten ging.",
  },
  {
    text: "Sie hatte sich einen **Überblick verschafft** (genel bir bakış edinmek) über den Arbeitsmarkt und ihre Möglichkeiten **überflogen** (bir şeyi göz atmak).",
  },
  {
    text: "Die **Schlüsselwörter** (anahtar kelime) ihrer Präsentation waren klar und nicht zu **abstrakt** (soyut).",
  },
  {
    text: 'Alles **Relevante** (önemli) wurde erwähnt. "**Es erscheint mir** (Bana göre...), sagte sie, "dass wir **im Grunde** (aslında) einen **bewährten** (denenmiş) Weg einschlagen sollten."',
  },
  {
    text: "Als sie ihre Ergebnisse **rekapitulierte** (bir şeyi özetlemek), zog sie **Parallelen** (paralel) zu Marks Arbeit und erhielt in der letzten **Runde** (tur) ausgezeichnete **Rückmeldungen** (geri bildirim).",
  },
  {
    text: "Ihr Doktorvater war **großzügig** (cömert) mit seinem Lob und **beklagte** (şikayet etmek) sich nicht über kleinere Mängel.",
  },
  {
    text: "Er nannte Sophie eine wahre **Leseratte** (kitap kurdu), was sie zum Lächeln brachte.",
  },
  {
    text: "Nach der erfolgreichen Verteidigung **reichten sie** (bir şeyi teslim etmek) ihre finalen Dokumente ein und erhielten **zahlreiche** (çok sayıda) Glückwünsche.",
  },
  {
    text: "Sie hatten es geschafft, nicht **mit leeren Händen** (eli boş) dazustehen.",
  },
  {
    text: "Als sie ihren Erfolg feierten, waren sie beide bereit, für den nächsten Lebensabschnitt **am Start zu sein** (hazır olmak).",
  },
  {
    text: "Mark **drehte die Musik auf** (bir şeyi açmak) und zog Sophie zum Tanzen.",
  },
  {
    text: "Sie hatten sich gegenseitig **gerettet** (birini kurtarmak) vor dem Burnout während des Studiums.",
  },
  {
    text: "Sophies Eltern schickten eine Box mit **gesammelten** (toplu) Erinnerungsstücken aus ihrer Kindheit.",
  },
  {
    text: 'In der **Papierschachtel** (karton kutu) mit der **Aufschrift** (yazı) "Sophies Träume" fanden sie Zeichnungen von zwei Personen, die gemeinsam Bücher lasen.',
  },
  {
    text: '"**Das ist doch nicht nötig!** (Buna gerek yok!)", lachte Sophie **gerührt** (duygulanmış) über diese prophetische **Geste** (jest) des Schicksals.',
  },
  {
    text: '"**Selbstverständlich** (tabii ki)", war Marks Antwort, als er ihr einen Heiratsantrag machte.',
  },
  {
    text: "Zur **Abwechslung** (değişiklik) hatte er ein Lied komponiert, das sie gemeinsam **mitsangen** (birlikte şarkı söylemek) - **gefühlvoll** (duygulu) und voller Liebe.",
  },
  {
    text: "Wenn sie heute in ihren alten Tagebüchern **nachlesen** (bir şeyi tekrar okumak), müssen sie lächeln.",
  },
  {
    text: "Mark **erwähnt** (bir şeyden bahsetmek) oft, dass ihre Begegnung im Zug der beste Zufall seines Lebens war.",
  },
  {
    text: 'Es war **tatsächlich** (gerçekten) ein **Begriff** (terim), den der **öffentliche Rundfunk** (kamu yayıncılığı) gerne als "Schicksal" bezeichnet.',
  },
  {
    text: "Ob es Zufall oder Bestimmung war - es war definitiv eine **Geschmackssache** (zevk meselesi), wie ein guter **Heimatfilm** (yöresel film) mit Happy End.",
  },
  {
    text: "Sie konnten nun **in Ruhe** (sakin bir şekilde) ihr Leben genießen und ihre akademische Karriere fortsetzen.",
  },
  {
    text: "Die **besagte** (söz konusu) Geschichte von Sophie und Mark **klingt langsam aus** (bir şeyi yavaşça bitirmek), aber ihre Liebe bleibt bestehen, **aufgeregt** (heyecanlı) und voller Möglichkeiten, wie die perfekte **Einleitung** (giriş) zu einem neuen Kapitel.",
  },
  {
    text: "Sie haben sich als **fleißige Bienen** (çalışkan arı) erwiesen und ihr **Gehör** (işitme) für die Bedürfnisse des anderen **geschult** (bir şeyi/birini eğitmek).",
  },
  {
    text: "Sie **loben** (birini övmek) sich gegenseitig für ihre Erfolge und sind gut **versorgt** (bakımlı) in ihrer gemeinsamen Wohnung.",
  },
  {
    text: "Ihre **eifrige** (gayretli) Arbeit hat **Wunder gewirkt** (mucizeler yaratmak), und ihre akademische **Umgebung** (çevre) schätzt sie sehr.",
  },
  { text: "Jedes **Geräusch** (ses) ihrer Stimmen beruhigt den anderen." },
  {
    text: "Sophie muss **gestehen** (bir şeyi itiraf etmek), dass sie nie gedacht hätte, dass ihre Studienzeit so enden würde.",
  },
  {
    text: "Mark **merkt an** (bir şeye dikkat çekmek), dass er immer etwas **auf dem Herzen hatte** (içini dökmek istemek), wenn es um Sophie ging.",
  },
  {
    text: "Ihre Verbindung hat sich **gezielt** (hedefli) **entwickelt** (ortaya çıkmak), obwohl beide **alle Hände voll zu tun hatten** (çok meşgul olmak) mit ihren Dissertationen.",
  },
  {
    text: "**Mittlerweile** (bu sırada) haben sie verstanden, dass der Weg zur Liebe manchmal **steinig** (taşlı) ist und voller **Hindernisse** (engel).",
  },
  {
    text: "Aber **obendrein** (üstelik) haben sie gelernt, dass selbst in **mauen** (kötü) Zeiten die Unterstützung des anderen **stets** (daima) **mit Abstand** (açık ara) das Wichtigste ist.",
  },
  {
    text: "Sie waren nie **empört** (öfkeli) oder **verwirrt** (kafası karışık) über ihre Gefühle, sondern haben früh **erraten** (bir şeyi tahmin etmek), dass sie füreinander bestimmt waren.",
  },
  {
    text: "Sie waren **weder** unentschlossen **noch** (ne ... ne de) misstrauisch.",
  },
  {
    text: "Am Ende der Geschichte sind sie mehr als nur **Kumpel** (arkadaş) - sie sind Partner fürs Leben, mit **haufenweise** (yığınla) gemeinsamen Träumen.",
  },
  {
    text: "Sie **stoßen an** (kadeh tokuşturmak) auf ihre Erfolge und **laden ihre Batterien auf** (enerji toplamak) in der Gegenwart des anderen.",
  },
  {
    text: 'Mit einem **Gläschen** (küçük bardak) Wein in der Hand **platzt es aus** (pat diye söylemek) Mark heraus: "Ich hätte nicht die **Geduld** (sabır) gehabt, auf jemand anderen zu warten."',
  },
  {
    text: 'Sophie lächelt. "Du hattest **vermutlich** (muhtemelen) Recht mit allem, was du gesagt hast. Ich **konnte es kaum erwarten** (bir şeyi sabırsızlıkla beklemek), mit dir zusammen zu sein."',
  },
  {
    text: "So endete ein Kapitel und begann ein neues, nicht mehr **verregnet** (yağmurlu), sondern sonnig, nicht mehr mit **wehenden** (esmek) Zweifeln, sondern mit Sicherheit.",
  },
  {
    text: 'In ihrem **gebrochenen** (kırık - dil) Italienisch sagten sie "Ti amo" zueinander - nicht perfekt, aber **waschecht** (tam anlamıyla) von Herzen.',
  },
  {
    text: "Ihr gemeinsames Leben war wie ein **Bauwerk** (yapı), das sie zusammen errichtet hatten - **hervorragend** (mükemmel) und stabil, mit genügend Raum für **Päuschen** (küçük mola) und Lachen, für **Kichern** (kıkırdamak) und ernste Gespräche.",
  },
  {
    text: "Und wenn es mal ein **Notfalltreffen** (acil toplantı) gab, weil einer von ihnen seine Pflichten **vernachlässigt** (bir şeyi ihmal etmek) hatte, fanden sie immer einen Kompromiss.",
  },
  {
    text: "Sie verstanden, dass jeder sein eigenes **Feld** (alan) brauchte, ohne zu **fluchen** (küfretmek) oder **Schimpfwörter** (küfür) zu benutzen.",
  },
  {
    text: "Sophie war manchmal **frech** (küstah), und Mark versuchte, seine Unsicherheit zu **überspielen** (bir şeyi gizlemek), aber ihre **kecke** (şımarık) und **charmante** (çekici) Art machte sie zu einem unschlagbaren Team.",
  },
  {
    text: "Als sie sich von ihren Freunden **verabschiedeten** (veda etmek), gingen sie **mit rauchenden Köpfen** (kafa patlatmak) nach Hause, um an ihren neuesten Projekten zu arbeiten.",
  },
  {
    text: "Die **Anspannung** (gerginlik) des Studiums war vorbei, und sie mussten nie mehr **wie ein Häufchen Elend** (perişan halde) in der Bibliothek sitzen.",
  },
  {
    text: "Sie kannten ihre **Schwachpunkte** (zayıf nokta) und halfen sich gegenseitig, den **Wald vor lauter Bäumen nicht zu übersehen** (ağaçlardan ormanı görememek).",
  },
  {
    text: "In der richtigen **Reihenfolge** (sıralama) hatten sie alles **erhalten** (bir şeyi almak), was sie sich gewünscht hatten: Liebe, Erfolg und eine gemeinsame Zukunft.",
  },
  {
    text: "Beide waren **gespannt** (meraklı), was diese bringen würde, und es **fiel ihnen nicht schwer** (zor gelmek), optimistisch zu sein.",
  },
  { text: "Das **Wesentliche** (önemli) war, dass sie zusammen waren." },
  {
    text: "Selbst wenn Sophie manchmal eine **Grimasse zog** (yüz buruşturmak), wenn Mark seine Socken nicht aufräumte, oder wenn **Schweißperlen** (ter damlası) seine **Stirn** (alın) bedeckten, wenn er nervös war - sie liebten sich bedingungslos.",
  },
  {
    text: "Als Mark seine Beförderung **ankündigte** (bir şeyi duyurmak), kam Sophie **unangekündigt** (habersiz) mit Champagner nach Hause.",
  },
  {
    text: "Er war **entsetzt** (dehşete düşmüş), als er erfuhr, dass sie alles über dieses **Ereignis** (olay) wusste - sein Chef hatte sie informiert.",
  },
  {
    text: '"Wir müssen jetzt **Gas geben** (gaz vermek), sagte sie, "aber immer **einen kühlen Kopf bewahren** (soğukkanlılığını korumak)."',
  },
  {
    text: "Sie beschlossen, sich zur Feier des Tages einen Urlaub zu **gönnen** (kendine bir şey çıkarmak).",
  },
  {
    text: "Sie hatten nie **geschummelt** (kopya çekmek) oder waren **durchgefallen** (sınavdan kalmak), hatten sich nie **in die Hose gemacht** (korkudan altına yapmak) vor Angst und nie vor Nervosität **gezittert** (titremek).",
  },
  {
    text: "Sie hatten immer einen Plan B **auf Lager** (bir şeyi hazır bulundurmak) und waren **weise** (bilge) genug, Hilfe anzunehmen, wenn sie sie brauchten.",
  },
  {
    text: "Manchmal mussten sie Dokumente **überfliegen** (bir şeye göz atmak) und **Lücken** (boşluk) in ihrem Wissen füllen, aber als **Führungskräfte** (yönetici) in ihren Bereichen waren sie respektiert und geschätzt.",
  },
  {
    text: "Mit einem tiefen **Seufzer** (iç çekme) der Zufriedenheit schauten sie auf ihr gemeinsames Leben.",
  },
  {
    text: "Die Türen **knackten** (çıtırdamak) nicht mehr, wenn sie sich öffneten, es gab keine **Beschwerden** (şikayet) an **Vorgesetzte** (amir), und sie waren nie mehr **fix und fertig** (bitkin) nach einem langen Tag.",
  },
  {
    text: "Ihre **Stimmen** (ses) erhoben sich für eine **geschlechtergerechte Sprache** (cinsiyet eşitliğine duyarlı dil) und für Umweltschutz.",
  },
  {
    text: "Sie erhielten ihre **Impfungen** (aşı) und machten es sich in ihrem **kuscheligen** (rahat) Zuhause gemütlich.",
  },
  {
    text: '"**Da müssen wir jetzt durch!** (Bunu atlatmalıyız!), war ihr Motto, wenn Herausforderungen kamen, sei es bei einem anstrengenden **Stadtbummel** (şehir turu) oder bei beruflichen Hürden.',
  },
  {
    text: "Sie konnten immer **mithalten** (ayak uydurmak) mit den Anforderungen und nie **übertrieben** (abartmak) sie ihre Erfolge.",
  },
  {
    text: "Ihr Leben war **eindrucksvoll** (etkileyici), und **hin und wieder** (arada bir) schrieben sie ihre Geschichten auf, um die **Stimmung aufzuhellen** (neşelendirmek) an grauen Tagen.",
  },
  {
    text: "Sie waren immer **satt** (tok) an Liebe und **in der Lage** (muktedir olmak), Probleme zu lösen.",
  },
  { text: "Es schien, als würde ihre Liebe **ewig** (sonsuz) dauern." },
  {
    text: "Sie besuchten **angesagte** (moda) Restaurants und **genossen das Leben in vollen Zügen** (doyasıya yaşamak).",
  },
  {
    text: "Sie waren stets **vergnügt** (keyifli) in der Gesellschaft des anderen.",
  },
  {
    text: "Mit **geheimen Informationen** (gizli bilgiler) überraschten sie sich gegenseitig zu Geburtstagen, ohne je versuchen zu müssen, etwas aus dem anderen **herauszuquetschen** (birinden zorla bilgi almak).",
  },
  {
    text: "Mark war der **Kerl** (adam), von dem Sophie immer geträumt hatte, und sie war so **verliebt** (aşık), dass sie nie **über Thomas hinwegkommen** (bir şeyi/birini atlatmak) musste - sie hatte ihn längst vergessen.",
  },
  {
    text: "Eine **Menge** (bir sürü) ihrer Freunde bewunderte ihre Beziehung.",
  },
  {
    text: "Sie **schlenderten** (ağır ağır yürümek) oft durch die **Shoppingmeile** (alışveriş caddesi), ohne die **Absicht** (niyet), etwas zu kaufen, nur um Zeit miteinander zu verbringen.",
  },
];

function Kitap5() {
  const [tooltip, setTooltip] = useState({
    visible: false,
    content: "",
    x: 0,
    y: 0,
  });

  const handleWordClick = (word, translation, event) => {
    const rect = event.target.getBoundingClientRect();
    setTooltip({
      visible: true,
      content: `${word}: ${translation}`,
      x: rect.left + window.scrollX,
      y: rect.bottom + window.scrollY + 5,
    });
  };

  const handleClickOutside = () => {
    setTooltip({ visible: false, content: "", x: 0, y: 0 });
  };

  const parseText = (text) => {
    const regex = /\*\*(.*?)\*\*\s*\((.*?)\)/g;
    let lastIndex = 0;
    const elements = [];
    let match;

    while ((match = regex.exec(text)) !== null) {
      const [fullMatch, word, translation] = match;
      const beforeText = text.slice(lastIndex, match.index);
      if (beforeText) {
        elements.push(<span key={lastIndex}>{beforeText}</span>);
      }
      elements.push(
        <span
          key={match.index}
          className="font-bold cursor-pointer text-blue-600 hover:underline"
          onClick={(e) => handleWordClick(word, translation, e)}
        >
          {word}
        </span>
      );
      lastIndex = regex.lastIndex;
    }

    const remainingText = text.slice(lastIndex);
    if (remainingText) {
      elements.push(<span key={lastIndex}>{remainingText}</span>);
    }

    return elements;
  };

  return (
    <div
      className="min-h-screen bg-gray-100 flex justify-center p-4"
      onClick={handleClickOutside}
    >
      <div className="max-w-3xl bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Eine unerwartete Wendung
        </h1>
        {textContent.map((item, index) => (
          <p key={index} className="mb-4 text-lg leading-relaxed">
            {parseText(item.text)}
          </p>
        ))}
        {tooltip.visible && (
          <div
            className="fixed bg-gray-800 text-white text-sm px-3 py-2 rounded shadow-lg"
            style={{ top: tooltip.y, left: tooltip.x }}
          >
            {tooltip.content}
          </div>
        )}
      </div>
    </div>
  );
}

export default Kitap5;
