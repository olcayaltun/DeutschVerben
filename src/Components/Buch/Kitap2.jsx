import React, { useState } from "react";

const textContent = [
  {
    text: "Lisa stand **regungslos** (hareketsiz) vor dem imposanten Bürogebäude, in dem sie heute ihr Vorstellungsgespräch hatte.",
  },
  {
    text: "Es war ein **prächtiger Bau** (görkemli bina) mit einer modernen Glasfassade, die im Sonnenlicht **funkelte** (parıldamak).",
  },
  {
    text: "Sie fühlte, wie ihr Herz raste und ihre Hände zitterten. Heute würde sie endlich versuchen, in diesem renommierten Unternehmen **Fuß zu fassen** (yer edinmek).",
  },
  {
    text: "Sie hatte in den letzten Monaten viel erlebt. Nach ihrer Kündigung bei ihrer alten Firma musste sie **von Grund auf** (temelden) neu anfangen.",
  },
  {
    text: "Die Arbeitssuche war eine echte **Herausforderung** (meydan okuma) gewesen, besonders mit ihren nur **mageren** (az) Deutschkenntnissen.",
  },
  {
    text: "Lisa war erst vor einem Jahr als **Zugezogene** (taşınan kişi) nach Deutschland gekommen und sprach noch **gebrochenes Deutsch** (bozuk Almanca konuşmak).",
  },
  {
    text: 'Sie atmete tief ein und nahm all ihren **Mut** (cesaret) zusammen. "Ich darf nicht **zögern** (tereddüt etmek)", dachte sie und betrat entschlossen das Gebäude.',
  },
  {
    text: "Im Aufzug **kam sie ins Schwitzen** (terlemek), während sie mental ihre Antworten auf mögliche Fragen durchging.",
  },
  {
    text: "Ihre beruflichen Fähigkeiten durften nicht **einrosten** (paslanmak), das hatte ihr **Vorgesetzter** (amir) in ihrem alten Job immer betont.",
  },
  {
    text: "Als die Aufzugtüren sich öffneten, **warf sie einen Blick auf** (bir şeye göz atmak) die elegante Empfangshalle.",
  },
  {
    text: "Am **Wasserspender** (su sebili) standen zwei Mitarbeiter und **quatschten** (sohbet etmek) angeregt miteinander.",
  },
  {
    text: "Lisa ging mit **weit aufgerissenen** (kocaman açılmış) Augen an ihnen vorbei zur Rezeption.",
  },
  {
    text: '"Guten Morgen, ich bin Lisa Yılmaz. Ich habe einen Termin für ein Vorstellungsgespräch", sagte sie mit leicht **zitternder** (titremek) Stimme.',
  },
  {
    text: '"Bitte nehmen Sie Platz. Herr Müller wird Sie gleich abholen", antwortete die freundliche Dame am Empfang.',
  },
  {
    text: "Lisa setzte sich und **versank in Gedanken** (derin düşüncelere dalmak).",
  },
  {
    text: "Der **zeitliche Rahmen** (zaman çerçevesi) und der **Umfang** (kapsam) des Gesprächs waren ihr nicht bekannt, was ihre Nervosität noch verstärkte.",
  },
  {
    text: "Vor ihr lag ein großes Magazin, und sie **herauskramte** (bir şeyi çıkarmak) ihre Brille aus ihrer Tasche, um die Zeit mit Lesen zu überbrücken.",
  },
  {
    text: '"Frau Yılmaz?", **ertönte** (duyulmak) plötzlich eine **sanfte** (yumuşak) Stimme.',
  },
  {
    text: "Ein hochgewachsener Mann mit **geflochtenen Zöpfen** (örgülü saç) und einem freundlichen Lächeln stand участк System: vor ihr.",
  },
  {
    text: '"Ja, das bin ich", antwortete Lisa und stand auf, wobei sie beinahe ihr **Gleichgewicht** (denge) verlor.',
  },
  {
    text: '"Ich bin Thomas Müller, der Abteilungsleiter. Freut mich, Sie kennenzulernen. Folgen Sie mir bitte."',
  },
  { text: "Lisa folgte ihm durch einen **belebten** (kalabalık) Flur." },
  {
    text: "Sie konnte sehen, wie einige Mitarbeiter an ihren Schreibtischen saßen und **wie wild** (deli gibi) auf ihren Tastaturen **herumtippten** (etrafta yazmak).",
  },
  {
    text: "Das Büro war modern eingerichtet, mit einer gemütlichen **Leseecke** (ostuma köşesi) in einer Ecke, die besonders **einladend** (davetkar) aussah.",
  },
  {
    text: 'In einem hellen Besprechungsraum warteten bereits zwei weitere Personen. "Das sind meine Kollegen Julia Weber und Alex Schmidt", stellte Herr Müller vor. "Wir werden das Gespräch gemeinsam führen."',
  },
  {
    text: "Lisa setzte sich an den großen Tisch und versuchte, ruhig zu bleiben. Sie wusste, dass sie heute alles **vorweisen** (bir şey göstermek) musste, was sie konnte.",
  },
  { text: "Ihre Zukunft **hing an einem seidenen Faden** (ip üstünde olmak)." },
  {
    text: '"Nun, Frau Yılmaz", begann Julia Weber mit einem freundlichen **Augenzwinkern** (göz kırpma). "Wir haben Ihren Lebenslauf gelesen. Sehr beeindruckend. Was hat Sie dazu gebracht, nach Deutschland zu kommen?"',
  },
  {
    text: "Lisa räusperte sich und begann zu erklären. Sie hatte ihre Antwort gut vorbereitet, aber plötzlich begann sie zu **stocken** (takılmak).",
  },
  {
    text: '"Ich... ich..." Sie spürte, wie Panik in ihr aufstieg. Dann erinnerte sie sich an den Rat ihrer Freundin: "**Loslegen** (başlamak) und nicht aufhören zu reden!"',
  },
  {
    text: '"Entschuldigung. Die deutsche Sprache ist manchmal noch eine **Bürde** (yük) für mich", gab sie ehrlich zu. "Ich kam nach Deutschland, weil ich neue berufliche **Herausforderungen** (meydan okuma) suchte. In meinem Heimatland hatte ich das Gefühl, dass ich nicht mehr wachsen konnte."',
  },
  {
    text: 'Alex Schmidt **nickte** (başını sallayarak) anerkennend. "Und wie gefällt Ihnen Deutschland bisher? Haben Sie sich schon eingelebt?"',
  },
  {
    text: '"Es war anfangs nicht leicht", antwortete Lisa. "Aber ich bin **fest entschlossen** (kararlı), hier zu bleiben. Deutschland ist jetzt meine **Wahlheimat** (seçilmiş vatan). Ich liebe die Kultur, besonders die Feste. **Neulich** (geçenlerde) war ich zum ersten Mal auf dem Oktoberfest!"',
  },
  {
    text: '"Oh, wie schön!", rief Herr Müller **begeistert** (heyecanlı) aus. "Und, wie fanden Sie es?"',
  },
  {
    text: 'Lisa lächelte. "Es war ein **Hammer** (harika)! Die **Schweinshaxe** (domuz budu) mit **Knödeln** (hamur topu) war **köstlich** (lezzetli), und überall waren Menschen in **Tracht** (geleneksel kıyafet) und **Dirndl** (Bavyera yöresel kıyafeti). Ich habe mich total **mitreißen lassen** (kendini kaptırmak) von der **ausgelassenen** (neşeli) Stimmung."',
  },
  {
    text: '"Das freut mich zu hören", sagte Frau Weber. "Jetzt aber zurück zu Ihrer beruflichen Laufbahn. Sie haben in Ihrer Bewerbung erwähnt, dass Sie eine **Fortbildung** (mesleki eğitim) im Bereich Projektmanagement absolviert haben?"',
  },
  {
    text: '"Ja, das stimmt. Ich habe mich **eingehend** (detaylı) mit agilen Methoden beschäftigt", erklärte Lisa selbstbewusster. "In meinem letzten Job musste ich oft mit **fachsprachlichen** (mesleki dil) Begriffen arbeiten und habe gelernt, komplexe Projekte **eigenständig** (bağımsız) zu **meistern** (bir şeyi başarmak)."',
  },
  {
    text: "Das Gespräch floss nun besser. Lisa spürte, wie ihre anfängliche Nervosität nachließ. Nach einer Stunde intensiver Fragen kam Herr Müller zum Ende.",
  },
  {
    text: '"Wir haben noch eine letzte Frage, Frau Yılmaz. Was würden Sie tun, wenn ein Projekt zu **scheitern** (başarısız olmak) droht?"',
  },
  {
    text: 'Lisa dachte kurz nach. "Ich würde nicht **aufgeben** (pes etmek). In solchen Situationen ist es wichtig, **durchzuhalten** (dayanmak) und nach Lösungen zu suchen. Man muss das Problem **in Angriff nehmen** (bir şeye başlamak) und manchmal seine **Herangehensweise** (yaklaşım) ändern."',
  },
  { text: "Alle drei **nickten** (başını sallayarak) zustimmend." },
  {
    text: '"Sehr gut", sagte Herr Müller. "Wir werden uns Ihre Bewerbung noch einmal **eingehend** (detaylı) anschauen und uns dann bei Ihnen melden. Haben Sie noch Fragen an uns?"',
  },
  {
    text: 'Lisa überlegte. "Ja, eine Frage hätte ich. Welche Möglichkeiten gibt es in Ihrem Unternehmen, sich weiterzuentwickeln und neue Fähigkeiten zu erlernen?"',
  },
  {
    text: '"Eine **hervorragende** (mükemmel) Frage!", antwortete Frau Weber. "Wir bieten regelmäßig **anspruchsvolle** (iddialı) Schulungen an und unterstützen unsere Mitarbeiter dabei, an **Fortbildungen** (mesleki eğitim) teilzunehmen. Wir glauben daran, dass man ständig an seinen Fähigkeiten **feilen** (bir şeyi geliştirmek) sollte."',
  },
  {
    text: "Nach dem Gespräch verließ Lisa das Gebäude mit gemischten Gefühlen. Sie war **erschöpft** (bitkin) aber auch stolz auf sich selbst.",
  },
  {
    text: "Auf dem **Bürgersteig** (kaldırım) blieb sie stehen und atmete tief durch. Jetzt hieß es warten.",
  },
  {
    text: "Eine Woche später **ertönte** (duyulmak) ihr Handy. Mit **zitternden** (titremek) Händen nahm sie den Anruf entgegen.",
  },
  {
    text: '"Guten Tag, Frau Yılmaz. Hier spricht Thomas Müller. Ich habe eine **frohe Botschaft** (müjde) für Sie. Wir würden Ihnen gerne eine Stelle in unserem Team anbieten."',
  },
  { text: 'Lisa konnte kaum atmen. "Das... das ist wunderbar! Vielen Dank!"' },
  { text: '"Können Sie nächsten Montag anfangen?"' },
  { text: '"Natürlich! Ich freue mich sehr!"' },
  {
    text: "Nach dem Telefonat **ballte Lisa die Faust** (yumruğunu sıkmak) und musste sich beherrschen, nicht vor Freude zu **schreien** (çığlık atmak).",
  },
  {
    text: "Sie hatte es geschafft! Endlich würde sie nicht mehr **verzweifelt** (umutsuz) nach Arbeit suchen müssen.",
  },
  {
    text: "Am ersten Arbeitstag war Lisa **nervös** (gergin) und **angespannt** (gergin).",
  },
  {
    text: "Sie hatte sich extra früh auf den Weg gemacht, um pünktlich zu sein. In der **Schlange** (kuyruk) am Kaffeeautomaten traf sie auf Alex Schmidt.",
  },
  {
    text: '"Guten Morgen, Frau Yılmaz! Schön, dass Sie heute anfangen. Wie fühlen Sie sich?"',
  },
  {
    text: '"Etwas nervös, aber auch sehr **begeistert** (heyecanlı)", gestand Lisa.',
  },
  {
    text: '"Das ist normal", beruhigte Alex sie. "Kommen Sie, ich zeige Ihnen Ihren Arbeitsplatz und stelle Sie dem Team vor."',
  },
  {
    text: "Lisa folgte ihm durch das Großraumbüro. Überall **schossen** (hızla gitmek) Mitarbeiter hin und her, telefonierten oder arbeiteten konzentriert an ihren Computern.",
  },
  {
    text: "An ihrem neuen Schreibtisch wartete bereits eine kleine Überraschung: ein Willkommenspaket mit einem **Schokoriegel** (çikolatalı gofret) und einer Tasse mit dem Firmenlogo.",
  },
  {
    text: '"Das ist **quasi** (neredeyse) unsere Tradition", erklärte Alex. "Jeder Neuankömmling bekommt so ein Paket."',
  },
  { text: '"Wie nett!", sagte Lisa gerührt.' },
  {
    text: '"Heute haben wir um 10 Uhr ein Teammeeting, bei dem Sie sich allen vorstellen können. Bis dahin können Sie sich mit Ihrem Computer vertraut machen und die Unterlagen durchsehen, die ich Ihnen **zugeteilt** (birine bir şey atamak) habe."',
  },
  { text: "Lisa nickte dankbar und setzte sich an ihren neuen Arbeitsplatz." },
  {
    text: "Die anderen Kollegen im Raum warfen ihr neugierige Blicke zu, und einige kamen auch vorbei, um sich kurz vorzustellen.",
  },
  {
    text: "Um 10 Uhr fand dann das angekündigte Meeting statt. Lisa musste sich kurz vorstellen, was ihr anfangs schwer fiel.",
  },
  {
    text: "Sie spürte, wie ihre Stimme leicht **kratzend** (tırmalayıcı) klang, aber die freundlichen Gesichter ihrer neuen Kollegen ermutigten sie.",
  },
  {
    text: "Nach der Vorstellungsrunde ging es um ein neues Projekt, an dem sie mitarbeiten sollte. Es klang **anspruchsvoll** (iddialı), aber Lisa war entschlossen, ihr Bestes zu geben.",
  },
  {
    text: "Als die Aufgaben **im Uhrzeigersinn** (saat yönünde) verteilt wurden, bekam sie die **Recherche** (araştırma) zugeteilt.",
  },
  { text: '"Trauen Sie sich das zu?", fragte Herr Müller.' },
  {
    text: '"Ja, ich **wage** (bir şeyi denemek) es", antwortete Lisa selbstbewusst.',
  },
  {
    text: "Sie würde es nicht zulassen, dass ihre anfänglichen Sprachprobleme sie davon abhielten, **voranzukommen** (ilerlemek).",
  },
  {
    text: "In den nächsten Wochen arbeitete Lisa hart. Sie musste viel lernen und sich an die neue Unternehmenskultur gewöhnen.",
  },
  {
    text: "Manchmal fühlte sie sich **überfordert** (aşırı yüklenmiş) und **bedrückt** (bunalmış), besonders wenn die Kommunikation schnell und **fachsprachlich** (mesleki dil) wurde.",
  },
  { text: "Aber sie **gab nicht auf** (pes etmek)." },
  {
    text: "Eines Tages kam es zu einem **Vorfall** (olay), der Lisa sehr verunsicherte.",
  },
  {
    text: "In einer wichtigen Präsentation vor Kunden hatte sie einen Fehler gemacht und falsche Zahlen genannt.",
  },
  {
    text: "Sie hatte die Korrektur **überhört** (bir şeyi duymamak), die ihr Kollege ihr zugeflüstert hatte.",
  },
  {
    text: "Nach der Präsentation rief Herr Müller sie in sein Büro. Lisa fühlte sich **elend** (berbat) und war **ratlos** (çaresiz), wie sie den Fehler erklären sollte.",
  },
  {
    text: '"Frau Yılmaz, was ist heute passiert?", fragte er **stirnrunzelnd** (kaşlarını çatarak).',
  },
  {
    text: '"Es tut mir sehr leid", begann Lisa. "Ich war so nervös, dass ich die korrigierten Zahlen vergessen habe. Ich **bereue** (bir şeyden pişman olmak) meinen Fehler sehr."',
  },
  {
    text: 'Herr Müller seufzte. "Solche Fehler dürfen nicht passieren. Die Situation war **bedrohlich** (tehlikeli) für unseren Ruf. Sie müssen besser aufpassen."',
  },
  {
    text: "Lisa nickte **schweigend** (sessizce). Sie fühlte sich **frustriert** (hayal kırıklığına uğramış) und hatte Angst, dass sie ihren Job **verspielen** (bir şeyi kaybetmek) würde.",
  },
  {
    text: '"Aber", fuhr Herr Müller fort, und sein Ton wurde **sanfter** (yumuşak), "ich weiß, dass Sie noch neu sind und sich einarbeiten müssen. Ich schlage vor, dass Sie an unserer nächsten **Paarprüfung** (çiftli sınav) teilnehmen, damit wir solche Fehler in Zukunft vermeiden können."',
  },
  {
    text: 'Lisa war erleichtert. "Danke für Ihr Verständnis. Ich verspreche, dass ich mich verbessern werde."',
  },
  { text: "**In der Zwischenzeit** (bu arada) arbeitete Lisa noch härter." },
  {
    text: "Sie nahm an jeder möglichen Schulung teil und bat ihre Kollegen um Feedback.",
  },
  {
    text: "Besonders Alex wurde zu einem wichtigen **Leidensgenossen** (aynı kaderi paylaşan kişi), der ihr half, wenn sie Probleme hatte.",
  },
  {
    text: "Drei Monate später hatte Lisa sich gut eingelebt. Sie fühlte sich **sicherer** (daha güvenli) in ihrer Rolle und konnte sogar schon komplexere Aufgaben übernehmen.",
  },
  {
    text: "Bei einem Teamausflug in einen Freizeitpark lernte sie ihre Kollegen auch privat besser kennen.",
  },
  {
    text: "Der Freizeitpark war voller Attraktionen: eine **Achterbahn** (hız treni), ein **Schießstand** (atış poligonu), wo man **Plüschtiere** (peluş oyuncak) gewinnen konnte, und Stände mit **Zuckerwatte** (pamuk şeker) und **gebrannten Mandeln** (kavrulmuş badem).",
  },
  {
    text: '"Wollen wir zur Geisterbahn?", fragte Julia mit einem schelmischen Grinsen.',
  },
  {
    text: '"Zur **Geisterbahn** (korku tüneli)? Ist das nicht gruselig?", fragte Lisa zögernd.',
  },
  {
    text: '"Das gehört doch dazu!", lachte Alex und zog sie mit. "Der **Adrenalinschub** (adrenalin patlaması) macht Spaß!"',
  },
  {
    text: "Lisa ließ sich mitziehen und **schloss sich** (katılmak) der Gruppe an.",
  },
  {
    text: "Während der Fahrt **kreischte** (çığlık atmak) sie laut, aber am Ende hatte sie tatsächlich Spaß daran.",
  },
  {
    text: '"Das war ja gar nicht so schlimm", gab sie zu, als sie wieder ins Freie traten.',
  },
  {
    text: '"Siehst du?", sagte Julia. "Manchmal muss man einfach etwas Neues **wagen** (bir şeyi denemek)."',
  },
  {
    text: "Lisa nickte nachdenklich. Diese Erkenntnis konnte sie auch auf ihre Arbeit anwenden.",
  },
  {
    text: "Sie durfte nicht **zögern** (tereddüt etmek), neue Dinge auszuprobieren, auch wenn sie Angst hatte zu **versagen** (başarısız olmak).",
  },
  {
    text: "Am Abend saßen sie alle zusammen in einem traditionellen bayerischen Restaurant, aßen **Schweinshaxe** (domuz budu) und **stießen an** (kadeh tokuşturmak) auf ein erfolgreiches Projekt.",
  },
  { text: '"Auf uns!", rief Alex und hob sein Glas.' },
  {
    text: '"Und auf Lisa, unsere neueste Teamverstärkung!", fügte Julia hinzu.',
  },
  {
    text: "Lisa lächelte gerührt. Sie hatte das Gefühl, endlich dazuzugehören.",
  },
  {
    text: "Ein Jahr später hatte Lisa große Fortschritte gemacht. Ihr Deutsch war viel besser geworden, sie leitete inzwischen eigene Projekte und hatte sogar eine kleine Beförderung erhalten.",
  },
  {
    text: "Doch dann kam eine neue **Herausforderung** (meydan okuma): Ein wichtiger Kunde aus ihrer Heimat sollte betreut werden, und Lisa wurde ausgewählt, das Projekt zu leiten.",
  },
  {
    text: '"Das ist Ihre Chance zu zeigen, was Sie können", sagte Herr Müller. "Sind Sie bereit dafür?"',
  },
  {
    text: '"Ich denke schon", antwortete Lisa, obwohl sie innerlich unsicher war. Konnte sie wirklich ein so wichtiges Projekt leiten?',
  },
  {
    text: "In den nächsten Wochen arbeitete Lisa wie besessen. Sie **recherchierte** (araştırma), **trug Material zusammen** (bir şeyi bir araya getirmek) und bereitete alles für den Besuch des Kunden vor.",
  },
  { text: "Doch je näher der Termin rückte, desto nervöser wurde sie." },
  {
    text: "Am Abend vor der wichtigen Präsentation saß Lisa noch spät im Büro. Sie hatte das Gefühl, nicht **ausreichend** (yeterli) vorbereitet zu sein.",
  },
  { text: "Plötzlich klopfte es an ihrer Tür." },
  {
    text: '"Lisa? Bist du noch hier?", fragte Alex, der überrascht war, sie noch anzutreffen.',
  },
  { text: '"Ja, ich muss noch einiges vorbereiten", seufzte Lisa.' },
  {
    text: '"Du siehst **erschöpft** (bitkin) aus", bemerkte er besorgt. "Kann ich dir helfen?"',
  },
  {
    text: 'Lisa wollte zuerst ablehnen, doch dann nickte sie dankbar. "Ja, bitte. Ich bin mir bei einigen Formulierungen unsicher."',
  },
  {
    text: "Sie arbeiteten noch zwei Stunden zusammen, und Alex half ihr, ihre Präsentation zu perfektionieren.",
  },
  {
    text: '"Weißt du, was dein Problem ist?", sagte er schließlich. "Du bist zu **streng** (sert) mit dir selbst. Du machst das großartig. Glaub an dich!"',
  },
  {
    text: 'Lisa lächelte müde. "Danke, Alex. Es ist nur... manchmal fühle ich mich immer noch wie eine Außenseiterin."',
  },
  {
    text: '"Das verstehe ich", sagte er **sanft** (yumuşak). "Als ich neu in der Firma war, ging es mir genauso. Aber du gehörst jetzt **im Bunde** (birlikte) zu uns, vergiss das nicht."',
  },
  {
    text: "Am nächsten Tag lief die Präsentation **hervorragend** (mükemmel). Der Kunde war beeindruckt von Lisas Professionalität und ihrer Fähigkeit, zwischen den Kulturen zu vermitteln.",
  },
  { text: "Nach dem Meeting gratulierte Herr Müller ihr persönlich." },
  {
    text: '"Das haben Sie sehr gut gemacht, Frau Yılmaz. Ich bin **stolz** (gururlu) auf Sie."',
  },
  {
    text: "Diese Worte bedeuteten Lisa sehr viel. Sie hatte es geschafft, sich in einem fremden Land zu beweisen und beruflich zu etablieren.",
  },
  { text: "Der Weg war nicht leicht gewesen, aber sie hatte nie aufgegeben." },
  {
    text: "An diesem Abend feierte Lisa ihren Erfolg mit Alex und einigen anderen Kollegen. Sie **genoss** (bir şeyin tadını çıkarmak) den Moment **in vollen Zügen** (doyasıya).",
  },
  { text: '"Auf die Zukunft!", sagte sie und hob ihr Glas.' },
  {
    text: '"Und auf dich", erwiderte Alex mit einem warmen Lächeln. "Du hast es **verdient** (hak etmek)."',
  },
  {
    text: "Lisa wusste, dass noch viele **Herausforderungen** (meydan okuma) vor ihr lagen, aber sie war bereit, sich ihnen zu stellen.",
  },
  {
    text: "Sie hatte gelernt, dass man manchmal **wagen** (bir şeyi denemek) muss, um zu gewinnen, und dass es wichtig ist, nicht aufzugeben, auch wenn der Weg **schwierig** (zor) erscheint.",
  },
  {
    text: "Deutschland war nun wirklich ihre Heimat geworden, und sie war **stolz** (gururlu) darauf, was sie erreicht hatte.",
  },
  {
    text: "**Zweifellos** (şüphesiz) würde ihre Reise weitergehen, mit allen Höhen und Tiefen.",
  },
  {
    text: "Aber eines hatte Lisa verstanden: Das Leben ist ein ständiger **Wettlauf** (yarış), und man muss lernen, **mit jemandem Schritt zu halten** (birine ayak uydurmak) oder sogar **jemanden einzuholen** (birine yetişmek), ohne dabei die eigene Identität zu verlieren.",
  },
  {
    text: "Mit diesem Gedanken im Kopf sah Lisa **optimistisch** (iyimser) in die Zukunft.",
  },
  {
    text: "Das **Licht am Ende des Tunnels** (tünelin ucundaki ışık) war nicht mehr nur ein ferner Schimmer – es war jetzt eine strahlende Realität.",
  },
];

function Kitap2() {
  const [tooltip, setTooltip] = useState({
    visible: false,
    content: "",
    position: { x: 0, y: 0 },
  });

  // Metni parse eden fonksiyon
  const parseText = (text, index) => {
    const regex = /\*\*([^\*]+)\*\*\s*\(([^\)]+)\)/g;
    let lastIndex = 0;
    const elements = [];
    let match;

    while ((match = regex.exec(text)) !== null) {
      const [fullMatch, word, translation] = match;
      const beforeText = text.slice(lastIndex, match.index);
      if (beforeText) {
        elements.push(<span key={`${index}-${lastIndex}`}>{beforeText}</span>);
      }
      elements.push(
        <span
          key={`${index}-${match.index}`}
          className="font-bold text-blue-600 cursor-pointer relative"
          onClick={(e) => {
            const rect = e.target.getBoundingClientRect();
            setTooltip({
              visible: true,
              content: translation,
              position: { x: rect.left, y: rect.bottom + window.scrollY },
            });
            setTimeout(() => setTooltip({ ...tooltip, visible: false }), 2000); // 2 saniye sonra tooltip kaybolur
          }}
        >
          {word}
        </span>
      );
      lastIndex = regex.lastIndex;
    }

    const remainingText = text.slice(lastIndex);
    if (remainingText) {
      elements.push(<span key={`${index}-${lastIndex}`}>{remainingText}</span>);
    }

    return elements;
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Der Neuanfang
      </h1>
      {textContent.map((paragraph, index) => (
        <p key={index} className="mb-4 text-gray-700 leading-relaxed">
          {parseText(paragraph.text, index)}
        </p>
      ))}
      {tooltip.visible && (
        <div
          className="fixed bg-gray-800 text-white text-sm px-2 py-1 rounded shadow-lg z-50"
          style={{ top: tooltip.position.y + 5, left: tooltip.position.x }}
        >
          {tooltip.content}
        </div>
      )}
    </div>
  );
}

export default Kitap2;
