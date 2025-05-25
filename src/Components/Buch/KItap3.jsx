import React, { useState, useEffect } from "react";

const textContent = [
  {
    text: "Als ich durch die Straßen von München schlenderte, war ich mir **zumal** (özellikle) der Tatsache bewusst, dass meine Zeit in Deutschland **nahezu** (neredeyse) zu Ende ging.",
  },
  {
    text: "Nach fünf Jahren hatte ich mich entschieden, wieder in die Türkei zurückzukehren. Es war ein schwieriger Entschluss, denn ich hatte mich in Bayern bereits **niedergelassen** (yerleşmek) und fühlte mich wie ein **Einheimischer** (yerli).",
  },
  {
    text: "Von der **Baumkrone** (ağaç tepesi) über mir konnte ich Vögel **zwitschern** (kuş ötüşü) hören. Insekten **schwirrten** (vızıldamak) um meinen Kopf herum.",
  },
  {
    text: "Ich wollte mir die Stadt noch einmal richtig ansehen, bevor ich sie verließ. Ich wollte mich an diesen Orten **sattsehen** (doymak, artık görmek istememek), die so wichtig für mich geworden waren.",
  },
  {
    text: "In der Ferne sah ich das Oktoberfestgelände. Die bayerische **Trinkkultur** (içme kültürü) hatte ich nie ganz **verkörpert** (temsil etmek), obwohl ich es versucht hatte.",
  },
  {
    text: "Ich erinnerte mich an meinen ersten **Krug** (büyük bardak) Bier und wie ich am nächsten Tag mit einem **schwerwiegenden** (ciddi) Kater aufgewacht war. Es war eine echte **Gaudi** (eğlence) gewesen, wie die Bayern sagen würden.",
  },
  {
    text: 'Mein Handy vibrierte. Es war eine Nachricht von meinem Chef bei der Softwarefirma, für die ich arbeitete. "Könntest du heute Abend zur letzten **Schicht** (vardiya) kommen? Einer unserer Programmierer ist krank geworden."',
  },
  {
    text: "Es war eine **rhetorische Frage** (retorik soru) - natürlich würde ich einspringen. Ich hatte die Arbeit immer geliebt, und die **Entlohnung** (ücret, ödeme) war mehr als **großzügig** (cömert) gewesen.",
  },
  {
    text: "Ich **seufzte** (derin bir nefes alıp vermek) und dachte darüber nach, wie schwer es wohl werden würde, in der Türkei wieder **in die Gänge zu kommen** (harekete geçmek).",
  },
  {
    text: "Aber ich hatte einen guten Abschluss **absolviert** (bir şeyi tamamlamak) und war der deutschen Sprache **mächtig** (bir şeye hakim olmak), also war ich **vermutlich** (muhtemelen) gut vorbereitet.",
  },
  {
    text: "An der nächsten Ecke sah ich ein Café, das ich oft besucht hatte. Der Barista hinter dem **Tresen** (tezgah) **nickte** (başını sallamak) mir zu, als ich eintrat.",
  },
  { text: "Ich bestellte einen Kaffee und eine **Brezn** (Bavarya simidi)." },
  {
    text: '"Schon gehört, dass du uns verlässt?", fragte er. "Bayern wird nicht mehr dasselbe sein ohne dich."',
  },
  {
    text: 'Ich **erwiderte** (cevap vermek) mit einem Lächeln: "Ich werde euch vermissen. Ihr habt mich immer wie Familie behandelt."',
  },
  {
    text: '"Na ja, du hast oft genug **auf den Deckel bekommen** (azar işitmek), wenn du zu spät zur Arbeit erschienen bist", scherzte er.',
  },
  {
    text: "Ich musste lachen. Es stimmte. Pünktlichkeit war nie meine Stärke gewesen.",
  },
  {
    text: "Ich war oft im Büro erschienen mit einem **arm wie eine Kirchenmaus** (çok fakir) Aussehen nach einer durchwachten Nacht. Trotzdem hatte man mir nie etwas **verwehrt** (birine bir şeyi reddetmek).",
  },
  {
    text: "Mit meinem Kaffee setzte ich mich ans Fenster und beobachtete die Menschen draußen. Einige **starrten** (dik dik bakmak) auf ihre Handys, andere eilten geschäftig durch die Straßen.",
  },
  { text: "München war eine Stadt, die niemals zur Ruhe kam." },
  {
    text: "Ich dachte an meinen Vater, der vor einem Jahr gestorben war. Er hatte immer davon geträumt, dass ich sein Geschäft in Istanbul **übernehmen** (bir şeyi devralmak) würde.",
  },
  {
    text: "Die Verantwortung schien **immens** (çok büyük), aber ich war bereit, **in die Fußstapfen** (birinin izinden gitmek) meines Vaters zu treten und sein **Erbe aufrechtzuerhalten** (mirası sürdürmek).",
  },
  {
    text: "Plötzlich spürte ich, wie mein Herz schwer wurde. War ich bereit, Deutschland zu verlassen? Ich hatte hier so viel **erschaffen** (bir şey yaratmak), so viel **erlangt** (bir şey elde etmek).",
  },
  {
    text: "Mein Leben war **halbwegs** (yeterince, oldukça) stabil geworden. Würde ich in der Türkei wieder bei Null anfangen müssen?",
  },
  {
    text: "Ich zahlte meine **Bezahlung** (ödeme, maaş) und machte mich auf den Weg zur Arbeit.",
  },
  {
    text: "Die Sicherheitskontrolle am Eingang mit dem **Fingerabdruckscanner** (parmak izi okuyucu) war ein vertrauter **Vorgang** (süreç), mit dem ich mich längst **vertraut gemacht** (bir şeye alışmak) hatte.",
  },
  {
    text: "Mein Kollege Klaus, ein Mann mit einem beeindruckenden **Bierbauch** (bira göbeği), begrüßte mich mit einer warmen **Umarmung** (sarılma).",
  },
  {
    text: '"Du wirst uns fehlen", sagte er mit **gesenktem** (aşağı bakıyor) Blick. "Du warst unsere **Stütze** (destek) in schwierigen Zeiten."',
  },
  {
    text: "Ich wusste nicht, was ich sagen sollte. Klaus hatte mich eingearbeitet, als ich neu war. Er war nie **ruppig** (kaba, sert) gewesen, immer **friedlich** (barışçıl) und hilfsbereit.",
  },
  {
    text: '"Vielleicht bekommst du ja eine ordentliche **Gehaltserhöhung** (maaş zammı), wenn du in der Türkei anfängst", **scherzte** (şaka yapmak) er.',
  },
  {
    text: 'Mit einer **zarten** (narin) Bewegung klopfte er mir auf die Schulter. "Der **Vorstand** (yönetim kurulu) will dich übrigens noch sehen, bevor du gehst."',
  },
  {
    text: "Das überraschte mich. Hatte ich etwas falsch gemacht? Stand mein **Posten** (iş pozisyonu) etwa **auf der Kippe** (riskli bir durumda olmak)? Meine Position war in den letzten Wochen etwas **wackelig** (sallantılı) gewesen, da das Unternehmen Umstrukturierungen plante.",
  },
  {
    text: "Ich klopfte an die Tür des Konferenzraums. Der Geschäftsführer, Herr Müller, ein Mann, der für seinen **makellosen** (kusursuz) Führungsstil bekannt war, lächelte mir zu.",
  },
  { text: "Er **strahlte wie ein Honigkuchenpferd** (çok mutlu görünmek)." },
  {
    text: '"Ah, da sind Sie ja! Wir wollten Ihnen ein Angebot machen, bevor Sie uns verlassen."',
  },
  {
    text: "Er **legte vor** (bir şeyi sunmak), was sie sich überlegt hatten: Eine Führungsposition in der neuen Niederlassung in Istanbul. Ich wäre **zuständig** (sorumlu) für den Aufbau des Teams dort.",
  },
  {
    text: "Ich war **beschämt** (utanmış), dass ich überhaupt daran gedacht hatte zu gehen. Das Angebot war **ausgezeichnet** (mükemmel) und **erfüllte** (birini tatmin etmek) alle meine Wünsche.",
  },
  {
    text: '"Ich... ich weiß nicht, was ich sagen soll", stammelte ich und wurde **errötet** (kızarmış).',
  },
  {
    text: '"Sie müssen sich nicht sofort entscheiden. Aber wir würden uns freuen, wenn Sie das Angebot **annehmen** (bir şeyi kabul etmek) würden."',
  },
  {
    text: "Ich versprach, darüber nachzudenken. Aber in meinem Herzen wusste ich bereits die Antwort. Manchmal muss man einfach **etwas aushalten** (bir şeye katlanmak, dayanmak), um später belohnt zu werden.",
  },
  {
    text: "Nach der Arbeit traf ich mich mit meinen Freunden in unserem Stammlokal. Wir hatten uns vorgenommen, vor meiner Abreise noch einmal richtig zu feiern.",
  },
  {
    text: "Ein **Dutzend** (düzine) Freunde waren gekommen, und jeder hatte eine Anekdote über unsere gemeinsame Zeit.",
  },
  {
    text: '"Weißt du noch, als du hundert **Liegestütze** (şınav) machen musstest, weil du eine Wette verloren hattest?", fragte mein Freund Stefan.',
  },
  {
    text: "Ich musste lachen. Es gab so viele Erinnerungen, die ich **verarbeiten** (bir şeyi sindirmek) musste, bevor ich gehen konnte.",
  },
  {
    text: "Als ich später in meine Wohnung zurückkehrte, fühlte ich mich seltsam leer. Die Umzugskartons standen überall herum, ein **Haufen** (yığın) von Erinnerungen in Kisten verpackt.",
  },
  {
    text: "War es das richtige, was ich tat? Oder würde ich es später **bereuen** (pişman olmak)?",
  },
  {
    text: "In dieser Nacht konnte ich nicht schlafen. Meine Gedanken **rasten** (hızla gitmek) durch meinen Kopf.",
  },
  {
    text: "Ich versuchte, mich mit einem Buch **zu zerstreuen** (kendini oyalamak, başka şeyler düşünmek), aber es half nicht.",
  },
  {
    text: "Am nächsten Morgen wachte ich mit einem **Hörsturz** (ani işitme kaybı) auf. Der Stress der letzten Wochen hatte seinen Tribut gefordert.",
  },
  {
    text: "Ich hatte mich so sehr auf den Umzug konzentriert, dass ich meine Gesundheit vernachlässigt hatte.",
  },
  {
    text: 'Der Arzt, der mich untersuchte, hatte einen ernsten **Gesichtsausdruck** (yüz ifadesi). "Sie müssen sich schonen", sagte er mit **kratziger** (sert, tırtıklı) Stimme. "Stress ist ein stiller Killer."',
  },
  {
    text: "Ich dachte über seine Worte nach. Vielleicht hatte ich mich zu sehr auf materiellen Erfolg konzentriert. War ich zu **besessen** (takıntılı) von meiner Karriere geworden?",
  },
  {
    text: "Als ich nach Hause kam, klingelte mein Telefon. Es war meine Mutter aus Istanbul.",
  },
  {
    text: '"Wie geht es dir, mein Sohn?", fragte sie besorgt. "Du klingst nicht gut."',
  },
  {
    text: "Ich erzählte ihr von dem Jobangebot und meinem Hörsturz. Sie hörte **geduldig** (sabırla) zu und gab mir dann einen Rat:",
  },
  {
    text: '"Du musst nicht in die Türkei zurückkommen, um dein Erbe anzutreten. Dein Vater wäre stolz auf dich, egal wo du bist. Er wollte nur, dass du **glücklich** (mutlu) bist."',
  },
  {
    text: "Ihre Worte trafen mich wie ein **Schlag** (vurmak). War ich all die Jahre einem falschen Pflichtgefühl **erlegen** (bir şeye yenik düşmek)? Hatte ich mich selbst in einen mentalen **Käfig** (kafes) gesperrt?",
  },
  {
    text: "In den nächsten Tagen dachte ich viel nach. Ich ging im Englischen Garten spazieren und **lauschte** (dinlemek) den Geräuschen der Natur.",
  },
  {
    text: "Die Stadt, die ich so liebte, schien mich nicht **freigeben** (serbest bırakmak) zu wollen.",
  },
  {
    text: "Mein Freund Thomas, ein Umweltaktivist, traf sich mit mir zum Mittagessen. Er hatte immer vor der Art gewarnt, wie wir unsere Umwelt **verpesten** (bir şeyi kirletmek), und setzte sich dafür ein, die Natur zu **schonen** (bir şeyi korumak).",
  },
  {
    text: '"Du siehst **bescheiden** (mütevazı) aus", bemerkte er. "Hast du schon eine Entscheidung getroffen?"',
  },
  {
    text: 'Ich schüttelte den Kopf. "Ich weiß es nicht. Einerseits möchte ich zurück in die Heimat, andererseits ist Deutschland mittlerweile auch mein Zuhause."',
  },
  {
    text: '"Manchmal ist der **Ausweg** (çıkış yolu) nicht so klar, wie wir es gerne hätten", sagte er weise.',
  },
  {
    text: "An jenem Abend bekam ich eine E-Mail von der Firma. Sie boten mir an, zwischen Deutschland und der Türkei zu pendeln - sechs Monate hier, sechs Monate dort.",
  },
  { text: "Es schien der perfekte Kompromiss zu sein." },
  {
    text: "Ich war **am Boden zerstört** (çok üzgün olmak), dass ich nicht früher auf diese Idee gekommen war. Es war, als hätte ich einen **schweren Schlag erlitten** (ağır bir darbe almak), weil ich in schwarz-weiß-Kategorien gedacht hatte.",
  },
  {
    text: '"Manchmal musst du einfach lernen, mit etwas **klarzukommen** (bir şeyle başa çıkmak)", hatte mein Vater immer gesagt. Und er hatte Recht.',
  },
  {
    text: "Ich rief den Geschäftsführer an und sagte ihm, dass ich das modifizierte Angebot **akzeptiere** (bir şeyi kabul etmek).",
  },
  {
    text: "Die **finanzielle Belohnung** (maddi ödül) war nicht einmal das Wichtigste - es war die Möglichkeit, in beiden Welten zu leben.",
  },
  {
    text: 'Meine Freunde organisierten einen **Abschlussball** (mezuniyet balosu) für mich, obwohl ich gar nicht richtig ging. Es war eher ein "Auf Wiedersehen, bis in sechs Monaten"-Fest.',
  },
  {
    text: '"Du hattest immer diese besondere **Ausstrahlung** (etki, karizma)", sagte meine Freundin Lisa. "Ich **beneide** (birini kıskanmak) dich um deinen Mut, neue Wege zu gehen."',
  },
  {
    text: "Ich musste mich nicht mehr **rechtfertigen** (kendini savunmak) für meine Entscheidungen. Ich hatte gelernt, dass es in Ordnung war, einen unkonventionellen Weg zu wählen.",
  },
  {
    text: "Das Leben war zu kurz, um sich an **gewöhnliche** (alışılagelmiş) Muster zu halten.",
  },
  {
    text: "In den letzten Tagen vor meiner Abreise nach Istanbul genoss ich München noch einmal in vollen Zügen. Ich **bestaunte** (bir şeyi hayranlıkla seyretmek) die Architektur, als sähe ich sie zum ersten Mal.",
  },
  {
    text: "Am Flughafen verabschiedete ich mich von meinen Freunden. Es war keine traurige Atmosphäre, sondern eine **ermutigende** (cesaret verici).",
  },
  {
    text: "Ich würde zurückkommen, und bis dahin würden wir in Kontakt bleiben.",
  },
  {
    text: "Im Flugzeug blickte ich aus dem kleinen Fenster auf die Stadt, die mir so viel gegeben hatte. In der Ferne konnte ich den **Frachtraum** (yük bölümü) des Flughafens sehen, wo Arbeiter eifrig Pakete verluden.",
  },
  {
    text: '"Möchten Sie etwas trinken?", fragte die Flugbegleiterin mit einem freundlichen Lächeln.',
  },
  {
    text: '"Ja, bitte", antwortete ich. "**Jemandem ist nach etwas zumute** (birinin bir şeye isteği olmak), wenn man zwischen zwei Heimaten reist."',
  },
  {
    text: "In Istanbul angekommen, spürte ich sofort die Energie der Stadt. Meine Mutter holte mich ab, und ich machte vor Freude einen **Freudensprung** (sevinçten zıplamak).",
  },
  {
    text: "Sie hatte sich Sorgen gemacht, dass ich **gescheitert** (başarısız) zurückkehren würde, aber stattdessen kam ich **mit erhobenem Haupt** (başı dik).",
  },
  {
    text: "In den nächsten Wochen **tauchte** (ortaya çıkmak) ich in das Istanbuler Leben ein.",
  },
  {
    text: "Ich begann, das Büro aufzubauen und neue Mitarbeiter **an Bord zu holen** (birini ekibe almak). Es war eine aufregende Zeit.",
  },
  {
    text: 'Dann kam der Anruf: In München hatte man Probleme mit einem Projekt, an dem ich gearbeitet hatte. "Könntest du **möglicherweise** (belki, olasılıkla) früher zurückkommen?", fragte mein Chef.',
  },
  {
    text: 'Ich zögerte nicht. "Natürlich", sagte ich. "Ich werde sie **begleiten** (birine eşlik etmek)."',
  },
  {
    text: "Es war seltsam, wie schnell sich Pläne ändern konnten. Aber ich hatte gelernt, flexibel zu sein.",
  },
  {
    text: "Das Leben war kein **einwandfreier** (kusursuz) Plan, der immer funktionierte. Es war ein ständiges Anpassen und Neuorientieren.",
  },
  {
    text: "Zurück in München fühlte es sich an, als wäre ich nie weg gewesen. Das **Bellen** (köpek havlaması) der Hunde im Park, der Geruch von frischem Brot am Morgen - alles war vertraut.",
  },
  {
    text: "Eines Abends, als ich allein in meiner alten, jetzt nur temporären Wohnung saß, dachte ich über die Entscheidungen nach, die ich getroffen hatte.",
  },
  {
    text: "Ich hatte mich **geweigert** (reddetmek), mich für nur einen Weg zu entscheiden, und es hatte sich als richtig erwiesen.",
  },
  {
    text: "Vor fünf Jahren war mein Traum, in Deutschland zu arbeiten, **in Erfüllung gegangen** (gerçekleşmek). Jetzt hatte ich einen neuen Traum **gegründet** (bir şey kurmak): eine Brücke zwischen zwei Kulturen zu sein.",
  },
  {
    text: "Mein **Vermögen** (servet) bestand nicht aus Geld oder Besitz, sondern aus Erfahrungen und Beziehungen.",
  },
  {
    text: "Ich war nicht mehr **auf jemanden angewiesen** (birine muhtaç olmak), sondern stand auf eigenen Füßen.",
  },
  {
    text: "In dieser Nacht schrieb ich einen langen Brief an meinen verstorbenen Vater. Ich erzählte ihm von meinen Abenteuern, meinen Ängsten und meinen Erfolgen.",
  },
  {
    text: "Ich wusste, er würde **neugierig** (meraklı) sein, was aus seinem Sohn geworden war.",
  },
  {
    text: '"Lieber Vater", schrieb ich, "ich habe gelernt, dass Heimat kein Ort ist, sondern ein Gefühl. Ich habe gelernt, dass man manchmal **vergeblich** (boşuna) nach Antworten sucht, die es nicht gibt. Und ich habe gelernt, dass das Leben zu kostbar ist, um es mit Zweifeln zu **verschwenden** (israf etmek)."',
  },
  {
    text: "Als der Morgen anbrach, fühlte ich mich leichter. Die **ausschweifenden** (aşırı) Gedanken der Nacht hatten einem klaren Kopf Platz gemacht.",
  },
  {
    text: "Ich würde mein Leben nicht mehr nach den Erwartungen anderer leben, **geschweige denn** (zaten ... değil) nach meinen eigenen überhöhten Ansprüchen.",
  },
  {
    text: "In den kommenden Jahren pendelte ich zwischen Istanbul und München. Es war nicht immer einfach, aber es war mein Weg.",
  },
  {
    text: "Ich lebte weder **sorgenfrei** (kaygısız) noch in ständiger Sorge. Ich hatte gelernt, eine Balance zu finden.",
  },
  {
    text: "Der Arbeitsalltag forderte meine volle **Aufmerksamkeit** (dikkat), aber ich fand auch Zeit, mich den Dingen **zu widmen** (bir şeye zaman ayırmak), die mir Freude bereiteten.",
  },
  {
    text: "Ich reiste viel, lernte neue Menschen kennen und entwickelte mich weiter.",
  },
  {
    text: 'Wenn mich jemand fragte, ob ich meine Entscheidung bereute, konnte ich mit Überzeugung sagen: "Nein, ich **täusche** (yanılmak) mich nicht. Es war die richtige Entscheidung."',
  },
  {
    text: "Das Leben ist zu kurz, um es in einem **permanenten** (sürekli) Zustand der Unzufriedenheit zu verbringen.",
  },
  {
    text: "Manchmal muss man seine **Haltung bewahren** (soğukkanlılığını korumak) und einen Schritt zurücktreten, um zu sehen, was wirklich wichtig ist.",
  },
  {
    text: "Es geht nicht darum, alles richtig zu machen, sondern darum, aus seinen Fehlern zu lernen und weiterzugehen.",
  },
  {
    text: "Es geht darum, seine **Bedürfnisse** (ihtiyaç) zu erkennen und ihnen zu folgen, selbst wenn der Weg nicht immer klar ist.",
  },
  {
    text: "Am Ende **irrt** (yanılmak) man sich manchmal, aber das ist Teil des Lebens.",
  },
  {
    text: "Wichtig ist nur, dass man sich nicht von Angst **lähmen** (felç etmek) lässt, sondern mutig voranschreitet.",
  },
  {
    text: 'Und wenn jemand fragt, wie lange dieser Lebensstil **halten** (sürmek, dayanmak) wird, kann ich nur sagen: "So lange, wie es sich richtig anfühlt."',
  },
  {
    text: "Denn letztendlich ist das Leben eine Reise ohne festes Ziel, und der Weg selbst ist das Ziel.",
  },
  {
    text: "In **zukünftigen** (gelecekte) Jahren werde ich vielleicht einen anderen Weg einschlagen.",
  },
  {
    text: "Vielleicht werde ich mich irgendwann entscheiden, an einem Ort zu bleiben. Aber für jetzt ist dieses Pendeln zwischen zwei Welten genau das, was ich brauche.",
  },
  {
    text: "Istanbul oder München? Die Antwort ist: beides. Denn manchmal muss man nicht wählen.",
  },
  {
    text: "Manchmal kann man beides haben, wenn man bereit ist, für seinen Traum zu kämpfen und niemals **aufzugeben** (vazgeçmek).",
  },
  {
    text: "Wenn ich in Istanbul bin, vermisse ich München. Wenn ich in München bin, vermisse ich Istanbul.",
  },
  {
    text: "Aber ich habe gelernt, dass das in Ordnung ist. Heimweh ist der Preis, den man zahlt, wenn man zwei Heimaten hat. Und es ist ein Preis, den ich gerne zahle.",
  },
  {
    text: "Ich sehe meinen Freund Thomas oft, wenn ich in München bin. Er **muntert mich auf** (birini neşelendirmek), wenn ich an **Zeitmangel** (zaman darlığı) leide und mich gestresst fühle.",
  },
  {
    text: '"Das Leben ist **herrlich** (harika), wenn du es zu schätzen weißt", sagt er immer.',
  },
  {
    text: "Und er hat Recht. Das Leben ist herrlich, mit all seinen Höhen und Tiefen, seinen Herausforderungen und Erfolgen.",
  },
  {
    text: "Es ist ein Geschenk, das wir jeden Tag aufs Neue auspacken dürfen.",
  },
  {
    text: "In Istanbul bin ich mittlerweile eine bekannte Persönlichkeit in der Tech-Szene. Meine Expertise ist **angesagt** (moda, popüler), und viele junge Entwickler suchen meinen Rat.",
  },
  {
    text: '"Wie hast du es geschafft, so erfolgreich zu sein?", fragen sie mich oft.',
  },
  {
    text: 'Meine Antwort ist immer dieselbe: "Indem ich meinen eigenen Weg gegangen bin und mich geweigert habe, mich in eine Schublade stecken zu lassen."',
  },
  {
    text: 'Manchmal **warnt** (bir şey hakkında uyarmak) mich meine Mutter, dass ich zu viel arbeite. "Du musst auf deine Gesundheit achten", sagt sie.',
  },
  {
    text: "Und sie hat Recht. Der **Lebensmut** (yaşama sevinci) ist das Wichtigste, was wir haben.",
  },
  {
    text: "An manchen Tagen, wenn ich über die Isar-Brücke in München gehe oder am Bosporus in Istanbul sitze, denke ich darüber nach, was ich **beschlossen** (bir şeye karar vermek) habe.",
  },
  { text: "Es war nicht immer der einfachste Weg, aber es war mein Weg." },
  {
    text: 'Und wenn mich jemand fragt, ob ich glücklich bin, kann ich mit absoluter Überzeugung sagen: "Ja, ich bin glücklich. Nicht weil alles perfekt ist, sondern weil ich gelernt habe, die Unvollkommenheit zu lieben."',
  },
  {
    text: "Das ist vielleicht die wichtigste Lektion, die ich gelernt habe: Das Leben muss nicht perfekt sein, um **lebenswert** (yaşamaya değer) zu sein.",
  },
  {
    text: "Es muss nur authentisch sein, ein Ausdruck dessen, wer wir wirklich sind.",
  },
  {
    text: "Und wer bin ich? Ich bin ein Mensch zwischen zwei Welten, **in weiter Ferne** (çok uzakta) von dem, was ich einmal war, und doch näher als je zuvor an dem, was ich sein möchte.",
  },
  {
    text: "Die Geschichte endet hier, aber meine Reise geht weiter. Denn das Leben ist keine Geschichte mit einem Ende, sondern ein fortlaufendes Abenteuer, das wir jeden Tag neu schreiben.",
  },
];

function Kitap3() {
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

export default Kitap3;
