const verben = [
  "Das Konzert wurde wegen des schlechten Wetters abgebrochen.",
  "Mein Erfolg hängt von harter Arbeit ab.",
  "Mein Pass läuft nächsten Monat ab.",
  "Er hat in den letzten Monaten fünf Kilo abgenommen.",
  "Vergiss nicht, die Tür zu abschließen.",
  "Ich habe ein Stück Seil abgeschnitten.",
  "Er hat während der Prüfung abgeschrieben.",
  "Hast du die E-Mail schon abgesendet?",
  "Das Schiff begann langsam abzusinken.",
  "Er ist vom Pferd abgestiegen.",
  "Bitte geben Sie Ihre Adresse an.",
  "Die Armee hat das Dorf angegriffen.",
  "Der Polizist hat das Auto angehalten.",
  "Er hat mich gestern angelogen.",
  "Ich nehme dein Angebot gerne an.",
  "Ich sehe mir den Film gerne an.",
  "Er hat mich auf der Straße angesprochen.",
  "Die Preise steigen jedes Jahr an.",
  "Die Zahl der Einwohner wächst weiter an.",
  "Wir müssen dieses Wissen in der Praxis anwenden.",
  "Zieh dich schnell an, wir müssen los!",
  "Wir müssen früh aufbrechen, um pünktlich zu sein.",
  "Er hat sein ganzes Essen aufgegessen.",
  "Ich werde nie aufgeben, meine Träume zu verfolgen.",
  "Die Polizei konnte den Verdächtigen aufhalten.",
  "Kannst du mir bitte die Tasche aufheben?",
  "Der Verein nimmt jedes Jahr neue Mitglieder auf.",
  "Ich stehe jeden Morgen um sechs Uhr auf.",
  "Der Sänger tritt heute Abend in Berlin auf.",
  "Ich bin in einer kleinen Stadt aufgewachsen.",
  "In der Stadt ist ein Feuer ausgebrochen.",
  "Das Konzert ist wegen Krankheit des Sängers ausgefallen.",
  "Heute Abend wollen wir zusammen ausgehen.",
  "Ich kann diesen Lärm nicht mehr aushalten.",
  "Kann ich mir dein Buch für eine Woche ausleihen?",
  "Du siehst heute sehr müde aus.",
  "Er ist an der letzten Haltestelle ausgestiegen.",
  "Sie sind vor einer Woche aus ihrer Wohnung ausgezogen.",
  "Sie backt jeden Sonntag einen Kuchen.",
  "Ich begreife das Problem nicht.",
  "Er hat das Geheimnis für sich behalten.",
  "Sie bringt ihrem Sohn das Klavierspielen bei.",
  "Ich lege jeden Monat etwas Geld beiseite.",
  "Er hat viel zur Diskussion beigetragen.",
  "Ich habe ein Geschenk von ihm bekommen.",
  "Der Anwalt hat mich gut beraten.",
  "Wir haben beschlossen, in den Urlaub zu fahren.",
  "Er hat das Thema ausführlich beschrieben.",
  "Wir haben das Problem gemeinsam besprochen.",
  "Er hat die Prüfung erfolgreich bestanden.",
  "Die Gesamtkosten betragen 200 Euro.",
  "Sie betreibt ein kleines Café in der Stadt.",
  "Er hat seinen Freund betrogen.",
  "Der Wissenschaftler hat die Theorie bewiesen.",
  "Ich habe mich auf die Stelle beworben.",
  "Er bietet mir seine Hilfe an.",
  "Sie bindet ihre Schuhe.",
  "Ich bitte um Entschuldigung.",
  "Er bleibt immer ruhig.",
  "Der Junge hat sich den Arm gebrochen.",
  "Das Feuer brennt lichterloh.",
  "Er bringt mir ein Glas Wasser.",
  "Ich denke oft an meine Kindheit.",
  "Er drescht das Korn auf dem Feld.",
  "Das Wasser dringt durch die Wand.",
  "Du darfst hier nicht rauchen.",
  "Die Diebe sind ins Haus eingebrochen.",
  "Mir fällt eine gute Idee ein.",
  "Ich gebe die Daten in das System ein.",
  "Er ist in das Gebäude eingegangen.",
  "Ich halte mich an die Regeln.",
  "Er lädt mich zur Party ein.",
  "Sie nimmt täglich ihre Medizin ein.",
  "Das Baby ist schnell eingeschlafen.",
  "Er hat die Tür hinter sich eingeschlossen.",
  "Ich sehe jetzt mein Problem ein.",
  "Er steigt in den Zug ein.",
  "Ich trage die Daten in die Liste ein.",
  "Er wirft den Brief in den Briefkasten ein.",
  "Wir sind gestern in die neue Wohnung eingezogen.",
  "Der Lehrer empfiehlt dieses Buch.",
  "Sie hat viele Gäste empfangen.",
  "Ich empfinde große Freude.",
  "Dieses Getränk enthält viel Zucker.",
  "Der Chef hat ihn entlassen.",
  "Wir haben uns für das neue Auto entschieden.",
  "Ich habe mich entschlossen, mehr Sport zu machen.",
  "Das Ergebnis entspricht meinen Erwartungen.",
  "Hier entsteht ein neues Einkaufszentrum.",
  "Er hat ein neues Gerät erfunden.",
  "Ich habe einen Brief erhalten.",
  "Ich erkenne ihn sofort wieder.",
  "Der Künstler hat ein Meisterwerk erschaffen.",
  "Die Polizei hat den Fall erschlossen.",
  "Er ist vor Schreck zusammengezuckt.",
  "Er hat eine brillante Idee ersonnen.",
  "Die Eltern erziehen ihre Kinder streng.",
  "Ich esse gerne Schokolade.",
  "Er fährt mit dem Auto zur Arbeit.",
  "Die Blätter fallen von den Bäumen.",
  "Der Hund fängt den Ball.",
  "Ich finde die Lösung nicht.",
  "Der Vogel fliegt hoch in den Himmel.",
  "Die Gefangenen sind geflohen.",
  "Der Fluss fließt ins Meer.",
  "Der Hund frisst sein Futter.",
  "Im Winter friert das Wasser.",
  "Ich gebe dir mein Buch.",
  "Er geht jeden Tag spazieren.",
  "Das Experiment ist gelungen.",
  "Ich genieße die Sonne.",
  "Was ist hier geschehen?",
  "Er hat den Preis gewonnen.",
  "Sie gießt die Blumen.",
  "Er gleicht seinem Vater sehr.",
  "Das Flugzeug gleitet durch die Luft.",
  "Der Mann gräbt ein Loch.",
  "Er greift nach dem Seil.",
  "Ich habe ein Auto.",
  "Er hält die Tasse in der Hand.",
  "Das Bild hängt an der Wand.",
  "Er hebt die Tasche hoch.",
  "Er heißt Thomas.",
  "Sie hilft ihrer Freundin.",
  "Die Firma stellt Autos her.",
  "Der Lehrer weist auf den Fehler hin.",
  "Ich kenne diese Stadt gut.",
  "Die Glocke klingt laut.",
  "Er kommt spät nach Hause.",
  "Ich kann gut schwimmen.",
  "Die Schlange kriecht langsam.",
  "Er lädt die Dateien hoch.",
  "Lass mich in Ruhe!",
  "Sie läuft sehr schnell.",
  "Er leidet an einer Krankheit.",
  "Ich leihe dir mein Buch.",
  "Ich lese jeden Abend ein Buch.",
  "Das Hotel liegt am Strand.",
  "Er lügt nie.",
  "Er misst die Temperatur.",
  "Ich mag Schokolade.",
  "Ich muss früh aufstehen.",
  "Er nimmt den Schlüssel mit.",
  "Man nennt ihn den besten Spieler.",
  "Er pfeift ein Lied.",
  "Ich rate dir, vorsichtig zu sein.",
  "Er reitet auf einem Pferd.",
  "Die Blume riecht gut.",
  "Er ruft seinen Freund an.",
  "Der Künstler schafft ein Meisterwerk.",
  "Die Sonne scheint hell.",
  "Er schiebt den Tisch zur Seite.",
  "Der Polizist schießt auf das Ziel.",
  "Er schläft tief.",
  "Er schlägt auf den Tisch.",
  "Die Katze schleicht durch den Garten.",
  "Er schließt die Tür.",
  "Er schlingt das Seil um den Ast.",
  "Er schmeißt den Ball weit.",
  "Das Eis schmilzt in der Sonne.",
  "Er schneidet das Brot.",
  "Er schreibt einen Brief.",
  "Das Kind schreit laut.",
  "Er schweigt die ganze Zeit.",
  "Er schwimmt im See.",
  "Ich sehe dich.",
  "Er ist sehr müde.",
  "Sie singt ein Lied.",
  "Das Schiff sinkt langsam.",
  "Er sitzt auf dem Stuhl.",
  "Sie spricht fließend Deutsch.",
  "Der Frosch springt ins Wasser.",
  "Die Biene sticht ihn.",
  "Das Haus steht auf einem Hügel.",
  "Der Dieb stiehlt das Geld.",
  "Er steigt die Treppe hinauf.",
  "Der alte Mann ist gestorben.",
  "Er stößt gegen die Tür.",
  "Er streicht die Wand blau.",
  "Die Kinder streiten sich.",
  "Er trägt einen schweren Koffer.",
  "Wir treffen uns morgen.",
  "Er treibt viel Sport.",
  "Ich trinke einen Kaffee.",
  "Er tut so, als wüsste er nichts.",
  "Ich habe meinen Schlüssel vergessen.",
  "Kannst du diesen Text verstehen?",
  "Wir dürfen dieses Spiel nicht verlieren.",
  "Sie hat ihre Heimatstadt verlassen.",
  "Der Dieb ist spurlos verschwunden.",
  "Kannst du mir jemals verzeihen?",
  "Kinder wachsen so schnell heran.",
  "Wir müssen einen neuen Vorsitzenden wählen.",
  "Ich wasche mir gerade die Hände.",
  "Der Wecker weckt mich um 7 Uhr.",
  "Es wird langsam dunkel.",
  "Der Spieler wirft den Ball ins Tor.",
  "Ich weiß nicht, wo mein Portemonnaie ist.",
  "Sie will nächsten Sommer nach Japan reisen.",
  "Zieh bitte vorsichtig an der Tür!",
  "Man darf niemanden zu etwas zwingen.",
  "Dieses Material ist biologisch abbaubar.",
  "Bergleute bauen Kohle unter Tage ab.",
  "Die Karte bildet die Region detailliert ab.",
  "Wir müssen das Projekt leider abbrechen.",
  "Der Abgaswert überschreitet die Grenze.",
  "Gib bitte dein Handy bei der Security ab.",
  "Mein Portemonnaie ist abhandengekommen.",
  "Abholzung bedroht die Regenwälder.",
  "Er legte seine alten Gewohnheiten ab.",
  "Lass dich nicht so leicht ablenken!",
  "Ich lese den Zählerstand jedes Monat ab.",
  "Sie nimmt seit einem Monat ab.",
  "Die Schuhe sind völlig abgenutzt.",
  "Die monatliche Abrechnung steht an.",
  "Wir saugen gerade die Staubmilben ab.",
  "Sklaverei wurde im 19. Jh. abgeschafft.",
  "Die Abschiebung erfolgte gestern Nacht.",
  "Uni-Absolventen finden schnell Jobs.",
  "Sie absolvierte ihr Medizinstudium.",
  "Menschen und Affen stammen gemeinsam ab.",
  "Halten Sie bitte 1,5 m Abstand!",
  "Ich staube gerade die Möbel ab.",
  "Er streitet die Vorwürfe vehement ab.",
  "Das Flugzeug ist über der Wüste abgestürzt.",
  "Unsere Meinungen weichen stark voneinander ab.",
  "Sie wendete ihr Gesicht ab.",
  "Der Polizist winkte den Wagen ab.",
  "Kannst du den Tisch schnell abwischen?",
  "Der Adel verlor im 20. Jh. an Macht.",
  "Adlige hatten früher besondere Privilegien.",
  "Er spielt leidenschaftlich Akkordeon.",
  "Der Patient benötigt akute Hilfe.",
  "Sie spricht akzentfrei Italienisch.",
  "In der Alltagssprache verwendet man viele Redewendungen.",
  "Menschen altern unterschiedlich schnell.",
  "Die Alterspyramide zeigt demografische Entwicklungen.",
  "Die Altersstruktur in Europa verändert sich.",
  "Seine Kleidung wirkt etwas altmodisch.",
  "Aluminium wird oft recycelt.",
  "Der Epilepsie-Anfall kam plötzlich.",
  "Bei der Renovierung fiel viel Müll an.",
  "Der Stoff fühlt sich seltsam an.",
  "Angehörige erhalten Ermäßigungen.",
  "Der Angeklagte schwieg während der Verhandlung.",
  "Das ist eine private Angelegenheit.",
  "Die Bezahlung ist angemessen.",
  "Siehe Anhang für weitere Details.",
  "Die Staatsanwaltschaft klagt ihn an.",
  "Der Ankläger präsentierte neue Beweise.",
  "Er legte Geld in Aktien an.",
  "Ausländer müssen sich anpassen.",
  "Die Anpassung an das Klima dauert.",
  "Das Anschreiben muss professionell sein.",
  "Der Professor genießt internationales Ansehen.",
  "Das war eine deutliche Anspielung.",
  "Mein Anspitzer ist kaputt.",
  "Der Patient ist nicht ansprechbar.",
  "Der Redner sprach wichtige Themen an.",
  "Die Aufgabe ist anspruchsvoll.",
  "Grippe ist hoch ansteckend.",
  "Die Temperaturen steigen stetig an.",
  "Jeder hat seinen Anteil zu tragen.",
  "Das Antibiotikum wirkt nicht gegen Viren.",
  "Wir bewundern antike Kunstwerke.",
  "Die Antike prägte Europa nachhaltig.",
  "Antisemitismus ist leider immer noch präsent.",
  "Der Antragsteller wartet auf Antwort.",
  "Die Anwendung ist kinderleicht.",
  "Die Firma wirbt Fachkräfte an.",
  "Paris hat große Anziehungskraft.",
  "Viele Arbeitskräfte werden gesucht.",
  "Archäologische Funde begeistern uns.",
  "Gotische Architektur beeindruckt mich.",
  "Ärger schadet der Gesundheit.",
  "Armut bekämpfen ist eine globale Aufgabe.",
  "Artensterben bedroht das Ökosystem.",
  "Wir müssen die Artenvielfalt schützen.",
  "Dieses Arzneimittel hat Nebenwirkungen.",
  "Aschenbecher sind draußen aufgestellt.",
  "Die Atmosphäre im Saal war gespannt.",
  "Tiefe Atmung beruhigt den Geist.",
  "Atome sind winzig klein.",
  "Der Atomkern enthält Protonen.",
  "Wir bauen eine Gartenhütte auf.",
  "Bewahre Lebensmittel kühl auf.",
  "Wir brauchen unsere Reserven auf.",
  "Die Expedition bricht morgen auf.",
  "Seine Auffassung ist umstritten.",
  "Aufklärung war eine wichtige Epoche.",
  "Zweifel kamen in mir auf.",
  "Ich lade mein Handy gerade auf.",
  "Die Musik munterte alle auf.",
  "Das Mikrofon nimmt Geräusche auf.",
  "Setz die Brille richtig auf!",
  "Wir stellen ein Zelt auf.",
  "Das Essen stößt mir sauer auf.",
  "Wir trieben alle Materialien auf.",
  "Er ist auf dem Land aufgewachsen.",
  "Das Produkt weist Mängel auf.",
  "Der Ausbau der Straße dauert.",
  "Ausbeutung von Arbeitern ist illegal.",
  "Die Antwort blieb leider aus.",
  "Ein Gefangener ist ausgebrochen.",
  "Das Feuer breitete sich schnell aus.",
  "Die Ausbreitung des Virus stoppen!",
  "Er drückte seine Liebe aus.",
  "Unsere Wege gingen auseinander.",
  "Das Restaurant bietet koscheres Essen.",
  "Genier dich nicht so!",
  "Sie traute sich endlich zu fragen.",
  "Das ist mir völlig wurscht.",
  "Er wurde fristlos entlassen.",
  "Touristen sind leichte Beute.",
  "Der Alkuma versuchte ihn zu verführen.",
  "Die Polizei nahm das Diebesgut weg.",
  "Die Wetterfee sagt Sonne voraus.",
  "Wir schlenderten durch die Altstadt.",
  "Pech gehabt beim Lotto!",
  "Wir machen um 8 Uhr einen Termin ab.",
  "Wir erfüllen alle Kundenwünsche.", // Erfüllen
  "Die Grafik zeigt das Problem deutlich auf.", // Aufzeigen
  "Er gibt sich voll seiner Arbeit hin.", // Sich hingeben
  "Worum geht's in dieser Diskussion?", // Worum geht's
  "Das Konzert war sensationell gut!", // Sensationell gut
  "Sie übernimmt die Verantwortung.", // Übernehmen
  "Die Polizei fragte ihn stundenlang aus.", // Ausfragen
  "Sei vorsichtig auf der vereisten Straße!", // Vorsichtig sein
  "Ist das so korrekt?", // Ist das so
  "Das Essen schmeckte furchtbar.", // Furchtbar
  "Gib niemals deine Träume auf!", // Aufgeben
  "Der Funke löste einen Brand aus.", // Auslösen
  "Im Grunde ist es ganz einfach.", // Im Grunde
  "Er ist nachweislich unschuldig.", // Nachweislich
  "Der Ranghöh traf die Entscheidung.", // Ranghöh
  "Auf keinen Fall vergesse ich das!", // Auf keinen Fall
  "Der Trainer motiviert das Team.", // Der Trainer
  "Das Kind führt sich unmöglich auf.", // Sich aufführen
  "Der entstandene Schaden ist enorm.", // Entstandener Schaden
  "Die Versicherung zahlt vollumfänglich.", // Vollumfänglich
  "Wir kooperieren mit internationalen Firmen.", // Kooperieren
  "Das Unternehmen machte Pleite.", // Pleite
  "Die Änderungen erfolgen schrittweise.", // Erfolgen
  "Wir bangen um seine Genesung.", // Bangen
  "Fassungslos hörten wir die Nachricht.", // Fassungslos
  "Vor Kälte schlotterte er am ganzen Körper.", // Schlottern
  "Der horrische Chef herrscht über alle.", // Horrisch
  "Sie ist verrückt nach Schokolade.", // verrückt sein nach etwas
  "Alle richteten die Augen auf die Bühne.", // Die Augen auf etwas richten
  "Das ist nicht von schlechten Eltern!", // nicht von schlechten Eltern sein
  "Kopf hoch! Das wird schon.", // Kopf hoch
  "Dabei sein ist alles beim Sportfest.", // Dabei sein ist alles
  "Im Fjord schwimmen viele Heringe.", // im Fjord Heringe
  "Der See wurde komplett hergefischt.", // hergefischt
  "Die Bucht war atemberaubend schön.", // die Bucht
  "Er züchtet seltene Papageien.", // züchten
  "Die Situation hat sich verändert.", // verändert
  "Wer steckt hinter dem Mord?", // hinterm Mord
  "Na los, fang schon an!", // Na los
  "Der Arzt tastete den Bereich ab.", // austasten
  "Dort drüben ist das Museum.", // dort/drüben
  "Sitten und Traditionen sind wichtig.", // Sitte die Tradition
  "Die Beerdigung findet morgen statt.", // Beerdigung
  "Er führt das Unternehmen klug.", // er führt
  "Sie hinterließ ein geheimnisvolles Tagebuch.", // hinterlassen
  "Das Urteil war unfair.", // unfair
  "Eine mutige Entscheidung!", // mutig
  "Der Dieb ist einfach abgehauen.", // abgehauen
  "Hol bitte die Dokumente!", // holt
  "Die Stimmung war düster.", // düster
  "Das Kind rastete völlig aus.", // ausrasten
  "Wir hauen jetzt ab!", // abhauen
  "Sie geht jeden Samstag einkaufen.", // einkaufen
  "Zu geeigneterem Maße bitte!", // zu geeigneterem Maße
  "Warum hast du das einfach so getan?", // einfach so
  "Inzwischen ist es schon spät.", // inzwischen

  // İsimler & Sıfatlar
  "Das Material ist biologisch abbaubar.", // abbaubar
  "Bergleute bauen Kohle ab.", // abbauen
  "Die Kamera bildet die Szene ab.", // abbilden
  "Wir müssen das Gespräch abbrechen.", // abbrechen
  "Der Abgaswert liegt über dem Limit.", // Abgaswert
  "Gib dein Gepäck am Schalter ab.", // abgeben
  "Mein Pass ist abhandengekommen.", // abhandenkommen
  "Abholzung zerstört den Regenwald.", // Abholzung
  "Er legte seine alten Gewohnheiten ab.", // ablegen
  "Lass dich nicht ablenken!", // ablenken
  "Ich lese den Stromzähler ab.", // ablesen
  "Sie nimmt seit einem Monat ab.", // abnehmen
  "Die Schuhe sind abgenutzt.", // abnutzen
  "Die Abrechnung kommt monatlich.", // Abrechnung
  "Wir saugen den Staub ab.", // absaugen
  "Die Todesstrafe wurde abgeschafft.", // abschaffen
  "Die Abschiebung erfolgte gestern.", // Abschiebung
  "Absolventen feierten ihren Abschluss.", // Absolvent
  "Sie absolvierte die Prüfung erfolgreich.", // absolvieren
  "Menschen stammen von Primaten ab.", // abstammen
  "Halten Sie bitte Abstand!", // Abstand
  "Ich staube die Möbel ab.", // abstauben
  "Er streitet alle Vorwürfe ab.", // abstreiten
  "Das System ist abgestürzt.", // abstürzen
  "Unsere Meinungen weichen ab.", // abweichen
  "Sie wandte das Unglück ab.", // abwenden
  "Der Polizist winkte den Wagen ab.", // abwinken
  "Kannst du den Tisch abwischen?", // abwischen
  "Der Adel verlor an Einfluss.", // Adel
  "Adlige lebten in Schlössern.", // Adlige
  "Er spielt leidenschaftlich Akkordeon.", // Akkordeon
  "Der Patient braucht akute Hilfe.", // akut
  "Sie spricht akzentfrei Spanisch.", // akzentfrei
  "Alltagssprache unterscheidet sich von Schriftsprache.", // Alltagssprache
  "Menschen altern unterschiedlich schnell.", // altern
  "Die Alterspyramide zeigt die Demografie.", // Alterspyramide
  "Die Altersstruktur ändert sich.", // Altersstruktur
  "Sein Stil wirkt altmodisch.", // altmodisch
  "Aluminium ist leicht und stabil.", // Aluminium
  "Ein epileptischer Anfall trat auf.", // Anfall
  "Bei der Arbeit fiel viel Müll an.", // anfallen
  "Der Stoff fühlt sich weich an.", // anfühlen
  "Angehörige wurden informiert.", // Angehörige
  "Der Angeklagte schwieg.", // Angeklagte
  "Das ist eine private Angelegenheit.", // Angelegenheit
  "Das Gehalt ist angemessen.", // angemessen
  "Siehe Anhang für Details.", // Anhang
  "Die Staatsanwaltschaft klagt an.", // anklagen
  "Der Ankläger präsentierte Beweise.", // Ankläger
  "Er legte Geld in Aktien an.", // anlegen
  "Sie passt sich schnell an.", // anpassen
  "Die Anpassung dauerte lange.", // Anpassung
  "Das Anschreiben muss perfekt sein.", // Anschreiben
  "Der Arzt hat hohes Ansehen.", // Ansehen
  "Das war eine deutliche Anspielung.", // Anspielung
  "Mein Anspitzer ist kaputt.", // Anspitzer
  "Der Patient ist ansprechbar.", // ansprechbar
  "Er sprach das Problem direkt an.", // ansprechen
  "Die Prüfung war anspruchsvoll.", // anspruchsvoll
  "Masern sind ansteckend.", // ansteckend
  "Die Preise steigen an.", // ansteigen
  "Jeder hat seinen Anteil.", // Anteil
  "Das Antibiotikum wirkt nicht.", // Antibiotikum
  "Antike Möbel sind wertvoll.", // antik
  "Die Antike prägte Europa.", // Antike
  "Antisemitismus ist unerträglich.", // Antisemitismus
  "Der Antragsteller wartet.", // Antragsteller
  "Die Anwendung ist einfach.", // Anwendung
  "Die Firma wirbt Fachkräfte an.", // anwerben
  "Die Stadt hat Anziehungskraft.", // Anziehungskraft
  "Qualifizierte Arbeitskräfte fehlen.", // Arbeitskraft
  "Archäologische Funde sind spannend.", // archäologisch
  "Moderne Architektur beeindruckt.", // Architektur
  "Ärger schadet der Gesundheit.", // Ärger
  "Armut ist ein globales Problem.", // Armut
  "Artensterben bedroht die Natur.", // Artensterben
  "Artenvielfalt muss erhalten bleiben.", // Artenvielfalt
  "Das Arzneimittel hilft schnell.", // Arzneimittel
  "Aschenbecher sind draußen.", // Aschenbecher
  "Die Atmosphäre war entspannt.", // Atmosphäre
  "Tiefe Atmung beruhigt.", // Atmung
  "Atome sind winzig klein.", // Atom
  "Der Atomkern enthält Protonen.", // Atomkern
  "Wir bauen ein neues Haus auf.", // aufbauen
  "Bewahre Lebensmittel richtig auf.", // aufbewahren
  "Wir brauchen unsere Vorräte auf.", // aufbrauchen
  "Die Expedition bricht morgen auf.", // aufbrechen
  "Seine Auffassung ist klar.", // Auffassung
  "Die Aufklärung war wichtig.", // Aufklärung
  "Zweifel kamen in mir auf.", // aufkommen
  "Ich lade mein Handy auf.", // aufladen
  "Die Musik munterte alle auf.", // aufmuntern
  "Die Kamera nimmt alles auf.", // aufnehmen
  "Setz die Brille richtig auf!", // aufsetzen
  "Wir stellen ein Zelt auf.", // aufstellen
  "Das Essen stößt mir auf.", // aufstoßen
  "Wir trieben alle Materialien auf.", // auftreiben
  "Er ist hier aufgewachsen.", // aufwachsen
  "Das Produkt weist Mängel auf.", // aufweisen
  "Der Ausbau der Straße dauert.", // Ausbau
  "Ausbeutung ist unmoralisch.", // Ausbeutung
  "Die Antwort blieb aus.", // ausbleiben
  "Ein Gefangener ist ausgebrochen.", // ausbrechen
  "Das Gerücht breitete sich aus.", // ausbreiten
  "Die Ausbreitung des Virus stoppen!", // Ausbreitung
  "Er drückte seine Freude aus.", // ausdrücken
  "Unsere Wege gingen auseinander.", // auseinandergehen
  "Das Konzert fiel wegen Regen aus.", // ausfallen
  "Er gab eine ausführliche Erklärung.", // ausführlich
  "Unser Vorrat geht langsam aus.", // ausgehen
  "Niemand sollte ausgegrenzt werden.", // ausgrenzen
  "Am Schwarzen Brett hängt ein Aushang.", // Aushang
  "Wir kommen gut ohne Auto aus.", // auskommen
  "Im Ausnahmefall ist das erlaubt.", // Ausnahmefall
  "Er nutzte ihre Gutmütigkeit aus.", // ausnutzen
  "Die Kultur prägt sich deutlich aus.", // ausprägen
  "Er sucht immer Ausreden.", // ausreden
  "Der Zeuge sagte vor Gericht aus.", // aussagen
  "Sie schied aus dem Wettbewerb aus.", // ausscheiden
  "Der Ausschlag juckt schrecklich.", // Ausschlag
  "Wir schließen Betrug aus.", // ausschließen
  "Die Stelle wird öffentlich ausgeschrieben.", // ausschreiben
  "Wir sortieren kaputte Teile aus.", // aussortieren
  "Die Ausstattung des Hotels ist luxuriös.", // Ausstattung
  "Der CO2-Ausstoß muss reduziert werden.", // Ausstoß
  "Fabriken stoßen Schadstoffe aus.", // ausstoßen
  "Wir tauschen die Batterien aus.", // austauschen
  "Er trat aus der Partei aus.", // austreten
  "Viele Auswanderer gingen nach Amerika.", // Auswanderer
  "Das Auto wich dem Hund aus.", // ausweichen
  "Er antwortete ausweichend.", // ausweichend
  "Der Vulkan wirft Lava aus.", // auswerfen
  "Daten werden wissenschaftlich ausgewertet.", // auswerten
  "Die Entscheidung wirkt sich positiv aus.", // auswirken
  "Die Auswirkungen sind enorm.", // Auswirkung
  "Sie wurde für ihre Leistung ausgezeichnet.", // auszeichnen
  "Ein Bakterium ist mikroskopisch klein.", // Bakterium
  "Sie tanzt seit Jahren Ballett.", // Ballett
  "Der Eingang ist barrierefrei.", // barrierefrei
  "Die Theorie basiert auf Fakten.", // basieren
  "Vertrauen ist die Basis jeder Beziehung.", // Basis
  "Baumwolle ist ein natürlicher Stoff.", // Baumwolle
  "Dieses Bauteil muss ersetzt werden.", // Bauteil
  "Sein Bedauern war deutlich spürbar.", // Bedauern
  "Sein Können beeindruckte alle.", // beeindrucken
  "Der Verstorbene wurde gestern beerdigt.", // beerdigen
  "Wir befassen uns mit dem Problem.", // befassen
  "Soldaten folgen dem Befehl.", // Befehl
  "Er befestigte das Bild an der Wand.", // befestigen
  "Die Befragung dauerte Stunden.", // Befragung
  "Wir sind seit Jahren befreundet.", // befreundet
  "Das Kind ist musikalisch begabt.", // begabt
  "Er beging einen schweren Fehler.", // begehen
  "Die Rechnung wurde beglichen.", // begleichen
  "Freiheit ist ein wichtiger Begriff.", // Begriff
  "Die Kritik war gut begründet.", // begründet
  "Seine Behauptung ist falsch.", // Behauptung
  "Behinderung bedeutet keine Einschränkung.", // Behinderung
  "Wir behalten die aktuellen Regeln bei.", // beibehalten
  "Im Bekanntenkreis wird viel gelacht.", // Bekanntenkreis
  "Die Bekanntgabe erfolgte per E-Mail.", // Bekanntgabe
  "Er beklagte sich über den Lärm.", // beklagen
  "Die Studie belegt die These.", // belegen
  "Er bemüht sich sehr um sie.", // bemühen
  "Niemand darf benachteiligt werden.", // benachteiligen
  "Halten Sie die Unterlagen bereit!", // bereithalten
  "Alle Faktoren wurden berücksichtigt.", // berücksichtigen
  "Sie beschuldigte ihn des Diebstahls.", // beschuldigen
  "Der Besitz macht ihn nicht glücklich.", // Besitz
  "Das Besteck ist aus Silber.", // Besteck
  "Die Gefahr besteht weiterhin.", // bestehen
  "Die bestehenden Regeln gelten.", // bestehend
  "Die Kosten betragen 500 Euro.", // betragen
  "Das betrifft uns alle.", // betreffen
  "Der Betrieb läuft rund um die Uhr.", // Betrieb
  "Betriebswirtschaft ist sein Studienfach.", // Betriebswirtschaft
  "Sie bewältigte die Krise gut.", // bewältigen
  "Bewegung ist gesund.", // Bewegung
  "Der Antrag wurde bewilligt.", // bewilligen
  "Er lag bewusstlos am Boden.", // bewusstlos
  "Man bezeichnet ihn als Genie.", // bezeichnen
  "Die Bezeichnung ist irreführend.", // Bezeichnung
  "Wolken bilden sich am Himmel.", // bilden
  "Bildhauerei erfordert Geduld.", // Bildhauerei
  "Bildung ist der Schlüssel zum Erfolg.", // Bildung
  "Die emotionale Bindung ist stark.", // Bindung
  "Der Bischof hielt eine Predigt.", // Bischof
  "Eine Blase bildete sich auf der Haut.", // Blase
  "Blickkontakt zeigt Aufmerksamkeit.", // Blickkontakt
  "Der Blumentopf ist aus Ton.", // Blumentopf
  "Sein Blutdruck ist zu hoch.", // Blutdruck
  "Die 1920er waren eine Blütezeit.", // Blütezeit
  "Die Blutprobe wurde analysiert.", // Blutprobe
  "Die Blutwerte sind normal.", // Blutwerte
  "Sein Blutzucker ist stabil.", // Blutzucker
  "Der Bodenbelag ist rutschig.", // Bodenbelag
  "Alte Bräuche werden gepflegt.", // Brauch
  "Die Statue ist aus Bronze.", // Bronze
  "Brüderlichkeit verbindet uns.", // Brüderlichkeit
  "Der Buchhalter prüft die Zahlen.", // Buchhalter
  "Der Bürgerkrieg verwüstete das Land.", // Bürgerkrieg
  "Büroartikel sind im dritten Stock.", // Büroartikel
  "Er ist ein charmanter Gastgeber.", // charmant
  "Der Chirurg operierte erfolgreich.", // Chirurg
  "Das Christentum verbreitete sich weltweit.", // Christentum
  "Missionare christianisierten die Region.", // christianisieren
  "Weihnachten ist ein christliches Fest.", // christlich
  "Sie leidet an chronischen Schmerzen.", // chronisch
  "Die Chronologie der Ereignisse ist klar.", // Chronologie
  "Die Ereignisse sind chronologisch geordnet.", // chronologisch
  "Sein Dackel heißt Waldi.", // Dackel
  "Endlich kam ich dahinter, wo der Fehler lag.", // dahinterkommen
  "Der Darm ist Teil des Verdauungssystems.", // Darm
  "Das Gemälde stellt eine Landschaft dar.", // darstellen
  "Drücken Sie den Daumen nach oben!", // Daumen
  "Wir definieren klare Ziele.", // definieren
  "Tausende demonstrierten für Frieden.", // demonstrieren
  "Seine Denkweise ist ungewöhnlich.", // Denkweise
  "Das Design ist modern und funktional.", // Design
  "Desinfektionsmittel töten Keime ab.", // Desinfektionsmittel
  "Die Instrumente wurden desinfiziert.", // desinfizieren
  "Der Bericht ist detailliert.", // detailliert
  "Das Gemälde ist detailreich.", // detailreich
  "Viele Amerikaner sind deutschstämmig.", // d
  "Die Diktatur unterdrückte die Meinungsfreiheit.", // Diktatur
  "Diskriminierung ist gesetzlich verboten.", // Diskriminierung
  "Das Display zeigt alle Informationen an.", // Display
  "Das Theaterstück war ein ergreifendes Drama.", // Drama
  "Er trägt einen Dreitagebart.", // Dreitagebart
  "Drohnen überwachen das Gebiet.", // Drohnen
  "Sie durchbrachen die feindlichen Linien.", // Durchbrechen
  "Er bringt seine Familie allein durch.", // Durchbringen
  "Durchfall kann dehydrierend wirken.", // Durchfall
  "Wir führen das Experiment durch.", // Durchführen
  "Bitte gehen Sie den Vertrag durch.", // Durchgehen
  "Wir müssen noch eine Woche durchhalten.", // Durchhalten
  "Das Verfahren durchlief mehrere Stufen.", // Durchlaufen
  "Sie standen alle Krisen gemeinsam durch.", // Durchstehen
  "Wir ziehen den Plan konsequent durch.", // Durchziehen
  "Die Dürre zerstörte die Ernte.", // Dürre
  "Er spielt E-Bass in einer Band.", // E-Bass
  "EDV-gestützte Systeme vereinfachen die Arbeit.", // EDV-gestützt
  "Effiziente Methoden sparen Zeit.", // Effizient
  "Der Eierbecher ist aus Porzellan.", // Eierbecher
  "Eifersucht zerstörte ihre Beziehung.", // Eifersucht
  "Geduld ist eine wichtige Eigenschaft.", // Eigenschaft
  "Das Eigentum wurde sicher verwahrt.", // Eigentum
  "Wir beziehen alle Mitarbeiter ein.", // Einbeziehen
  "Die Eingangsbestätigung liegt bei.", // Eingangsbestätigung
  "Er geht auf den Vorschlag ein.", // Eingehen
  "Sie gestand ihren Fehler ein.", // Eingestehen
  "Alle müssen die Regeln einhalten.", // Einhalten
  "Einheimische kennen die besten Orte.", // Einheimische
  "Er lebte sich schnell in der Stadt ein.", // Einleben
  "Seine Erklärung leuchtet mir ein.", // Einleuchten
  "Mische dich nicht in fremde Angelegenheiten!", // Einmischen
  "Reichen Sie die Unterlagen bitte ein.", // Einreichen
  "Wir müssen unsere Ausgaben einschränken.", // Einschränken
  "Ich schreibe mich für den Kurs ein.", // Einschreiben
  "Die Einstichstelle ist gerötet.", // Einstichstelle
  "Das Ereignis trat unerwartet ein.", // Eintreten
  "Einwanderer bereichern die Kultur.", // Einwanderer
  "Viele wanderten im 19. Jh. aus.", // Einwandern
  "Deutschland ist ein Einwanderungsland.", // Einwanderungsland
  "Einwegplastik ist umweltschädlich.", // Einwegplastik
  "Das Kunstwerk ist einzigartig.", // Einzigartig
  "Eisen ist ein wichtiger Rohstoff.", // Eisen
  "Ekel überkam ihn beim Anblick.", // Ekel
  "Der Geruch war eklig.", // Eklig
  "Der Elektriker reparierte die Leitung.", // Elektriker
  "Elektrizität treibt Maschinen an.", // Elektrizität
  "Elektrofahrzeuge sind umweltfreundlich.", // Elektrofahrzeug
  "Elektromobilität ist die Zukunft.", // Elektromobilität
  "Elektrotechnik ist sein Studienfach.", // Elektrotechnik
  "Wasser ist ein lebenswichtiges Element.", // Element
  "Die Emissionen müssen reduziert werden.", // Emission
  "Emotionen beeinflussen Entscheidungen.", // Emotion
  "Die Rede war sehr emotional.", // Emotional
  "Erneuerbare Energieerzeugung wächst.", // Energieerzeugung
  "Die Entdeckung Amerikas veränderte die Welt.", // Entdeckung
  "Die Entführung löste eine Großfahndung aus.", // Entführung
  "Wir kommen Ihnen gerne entgegen.", // Entgegenkommen
  "Der Körper entgiftet über die Leber.", // Entgiften
  "Der Akku hat sich komplett entladen.", // Entladen
  "Der Arzt entnahm eine Blutprobe.", // Entnehmen
  "Opfer erhalten eine Entschädigung.", // Entschädigung
  "Der Anblick war entsetzlich.", // Entsetzlich
  "Das Ergebnis entspricht den Erwartungen.", // Entsprechen
  "Sie entwarf ein innovatives Logo.", // Entwerfen
  "Die Wunde ist entzündet.", // Entzündet
  "Die Entzündung heilt langsam ab.", // Entzündung
  "Epilepsie erfordert medizinische Betreuung.", // Epilepsie
  "Die Renaissance war eine bedeutende Epoche.", // Epoche
  "Er trat sein Erbe an.", // Erbe
  "Das Kind erbrach sich plötzlich.", // Erbrechen
  "Er brachte den notwendigen Nachweis.", // Erbringen
  "Erdöl ist ein begrenzter Rohstoff.", // Erdöl
  "Der erfolglose Versuch enttäuschte alle.", // Erfolglos
  "Das Projekt war äußerst erfolgreich.", // Erfolgreich
  "Wissenschaftler erforschen das Klima.", // Erforschen
  "Die Diskussion ergab neue Erkenntnisse.", // Ergeben
  "Der Erhalt der Artenvielfalt ist wichtig.", // Erhalt
  "Sie erhielt eine Auszeichnung.", // Erhalten
  "Der Staat erhebt Steuern.", // Erheben
  "Er erkundete die Umgebung.", // Erkunden
  "Das Feuer erlosch langsam.", // Erlöschen
  "Der Lehrer ermutigte die Schüler.", // Ermutigen
  "Alexander der Große eroberte viele Länder.", // Erobern
  "Die Eroberung dauerte Monate.", // Eroberung
  "Erpressung ist eine Straftat.", // Erpressung
  "Neue Gebiete werden erschlossen.", // Erschließen
  "Das laute Geräusch erschreckte ihn.", // Erschrecken
  "Die Kosten werden erstattet.", // Erstatten
  "Sein Talent erfüllt uns mit Erstaunen.", // Erstaunen
  "Die Legende besagt, er sei wieder erstanden.", // Erstehen
  "Erstsemester erhalten eine Campus-Tour.", // Erstsemester
  "Er erwarb sich großes Ansehen.", // Erwerben
  "Die Fabrik erzeugt Ökostrom.", // Erzeugen
  "Wir erzielten eine Einigung.", // Erzielen
  "Ethnische Konflikte sind komplex.", // Ethnisch
  "Sie gehört der evangelischen Kirche an.", // Evangelisch
  "Das Experiment bestätigte die Theorie.", // Experiment
  "Juristische Fachsprache ist komplex.", // Fachsprache
  "Im Familienkreis feiern wir Weihnachten.", // Familienkreis
  "Das Nordlicht ist faszinierend.", // Faszinierend
  "Eine Fehlermeldung erschien auf dem Bildschirm.", // Fehlermeldung
  "Der Plan ist fehlgeschlagen.", // Fehlschlagen
  "Sie fertigt handgemachte Möbel.", // Fertigen
  "Die Fertigung läuft rund um die Uhr.", // Fertigung
  "Die Feststelltaste ist aktiviert.", // Feststelltaste
  "In fieberhafter Eile erledigte er alles.", // fieberhaft
  "Der Flachbildfernseher hängt an der Wand.", // Flachbildfernseher
  "Das Kissen ist flauschig weich.", // flauschig
  "Ein Fleck auf dem Hemd ist sichtbar.", // Fleck
  "Sie flirteten charmant an der Bar.", // flirten
  "Flüchtlinge erhalten humanitäre Hilfe.", // Flüchtling
  "Er flüsterte ihr ein Geheimnis zu.", // flüstern
  "Bitte formulieren Sie Ihren Antrag klar.", // formulieren
  "Das Unternehmen setzt Schadstoffe frei.", // freisetzen
  "Der Chef stellt ihn für das Projekt frei.", // freistellen
  "Im Freundeskreis feiern wir oft.", // Freundeskreis
  "Ihr Freundschaftsverhältnis hält seit Jahren.", // Freundschaftsverhältnis
  "Die Frist endet nächsten Freitag.", // Frist
  "Die Zahlung erfolgte fristgemäß.", // fristgemäß
  "Bitte antworten Sie fristgerecht.", // fristgerecht
  "Sein Frust war deutlich spürbar.", // Frust
  "Archäologische Funde begeistern Historiker.", // Funde
  "Die Funktion des Geräts ist unbekannt.", // Funktion
  "Das Essen schmeckte fürchterlich.", // fürchterlich
  "Die Gänsehaut lief ihr über den Rücken.", // Gänsehaut
  "Wasserdampf ist gasförmig.", // gasförmig
  "Der Gaszähler muss abgelesen werden.", // Gaszähler
  "Er gibt das Buch an den Besitzer zurück.", // geben
  "Der Gebrauch von Plastik ist reduziert.", // Gebrauch
  "Die Geburtenrate sinkt in Europa.", // Geburtenrate
  "Die Geburtshelferin assistierte bei der Geburt.", // Geburtshelfer
  "Geflüchtete brauchen unsere Unterstützung.", // Geflüchtete
  "Seine Meinung war gegenteilig zu ihrer.", // gegenteilig
  "Das Gegenüber lächelte freundlich.", // Gegenüber
  "Das Buch gehört mir.", // gehören
  "Sie spielt Geige im Orchester.", // Geige
  "Der Geist des Verstorbenen soll hier spuken.", // Geist
  "Geistige Fitness ist wichtig im Alter.", // geistig
  "Geistliche leiteten die Zeremonie.", // geistlich
  "Der Geistliche hielt eine Predigt.", // Geistliche
  "Der Brief gelangte sicher ans Ziel.", // gelangen
  "Diese Regel gilt ab sofort.", // gelten
  "Das Gemälde hängt im Louvre.", // Gemälde
  "Der Gerichtsdiener überreichte die Papiere.", // Gerichtsdiener
  "Der Gerichtssaal war voll besetzt.", // Gerichtssaal
  "Die Gerichtsverhandlung wurde vertagt.", // Gerichtsverhandlung
  "Es handelt sich um eine Geringfügigkeit.", // Geringfügigkeit
  "Geringverdiener erhalten Unterstützung.", // Geringverdiener
  "Das Gerüst umgibt das Gebäude.", // Gerüst
  "Der Geschirrspüler ist kaputt.", // Geschirrspüler
  "Gesetzmäßigkeiten bestimmen die Natur.", // Gesetzmäßigkeit
  "Sein Gesichtsausdruck verriet Angst.", // Gesichtsausdruck
  "Das Wetter ist immer Gesprächsstoff.", // Gesprächsstoff
  "Wir gestalten den Garten neu.", // gestalten
  "Er gestikulierte wild während des Streits.", // gestikulieren
  "Getreide wird weltweit angebaut.", // Getreide
  "Das Gewebe unter dem Mikroskop ist sichtbar.", // Gewebe
  "Das Gewinde der Schraube ist beschädigt.", // Gewinde
  "Giftstoffe müssen entsorgt werden.", // Giftstoffe
  "Im Glashaus wachsen Tomaten.", // Glashaus
  "Sein Glaube gibt ihm Kraft.", // Glaube
  "Sie ist eine gläubige Christin.", // gläubig
  "Seine Aussage wirkte glaubwürdig.", // glaubwürdig
  "Gleichheit ist ein Menschenrecht.", // Gleichheit
  "Der Gletscher schmilzt rapide.", // Gletscher
  "Der Boden ist nach dem Regen glitschig.", // glitschig
  "Der Anblick war grauenhaft.", // grauenhaft
  "Der Film war grauenvoll.", // grauenvoll
  "Der Griff an der Tür ist locker.", // Griff
  "Das Konzert war großartig!", // großartig
  "Vertrauen ist die Grundlage jeder Beziehung.", // Grundlage
  "Fairness ist unser Grundsatz.", // Grundsatz
  "Er hält die Schlüssel in der Hand.", // halten
  "Sein Handicap hinderte ihn nicht.", // Handicap
  "Die Handlung des Films ist spannend.", // Handlung
  "Die Harnblase muss entleert werden.", // Harnblase
  "Er ist hartnäckig wie ein Kind.", // hartnäckig
  "Die Hauptfigur stirbt am Ende.", // Hauptfigur
  "Hausaufgaben müssen bis morgen fertig sein.", // Hausaufgaben
  "Haushaltsartikel sind im Erdgeschoss.", // Haushaltsartikel
  "Hautfarbe sollte keine Rolle spielen.", // Hautfarbe
  "Die Hebamme half bei der Geburt.", // Hebamme
  "Der Sturm tobte heftig.", // heftig
  "Wir fanden heraus, wer es war.", // herausfinden
  "Der Verlag gibt ein neues Buch heraus.", // herausgeben
  "Sein Herkunftsland ist unbekannt.", // Herkunftsland
  "Die Herrschaft des Königs endete blutig.", // Herrschaft
  "Der Herrscher regierte weise.", // Herrscher
  "Das Essen schmeckte hervorragend.", // hervorragend
  "Vor Aufregung hatte sie Herzklopfen.", // Herzklopfen
  "Wir bekommen das Problem hin.", // hinbekommen
  "Versetz dich in meine Lage!", // hineinversetzen
  "Er hinterging seine Partnerin.", // hintergehen
  "Fügen Sie bitte Salz hinzu.", // hinzufügen
  "Hochwasser überschwemmte die Stadt.", // Hochwasser
  "Homophobie hat keinen Platz hier.", // Homophobie
  "Homosexuelle Paare dürfen heiraten.", // homosexuell
  "Die Hülle schützt das Gerät.", // Hülle
  "Die Polizei identifizierte den Täter.", // identifizieren
  "Sie hat sich an der Uni immatrikuliert.", // immatrikulieren
  "Der Impfstoff wurde getestet.", // Impfstoff
  "Der Schauspieler improvisierte brillant.", // improvisieren
  "Die Inanspruchnahme des Services ist kostenpflichtig.", // Inanspruchnahme
  "Die Industrialisierung veränderte Europa.", // Industrialisierung
  "Industrielle Abfälle verschmutzen die Umwelt.", // industriell
  "Deutschland ist ein Industriestaat.", // Industriestaat
  "Die Infektion breitete sich schnell aus.", // Infektion
  "Er infizierte sich mit dem Virus.", // infizieren
  "Seine Musik inspiriert Millionen.", // inspirieren
  "Installationskunst begeistert Kunstliebhaber.", // Installationskunst
  "Wir halten die Maschinen instand.", // instandhalten
  "Wie interpretierst du dieses Gedicht?", // interpretieren
  "Sie investierte in Immobilien.", // investieren
  "Der Mückenstich juckt stark.", // jucken
  "Viele Juden emigrierten während des Krieges.", // Jude
  "Der Kaiser herrschte über ein riesiges Reich.", // Kaiser
  "Wir kalkulieren die Kosten genau.", // kalkulieren
  "Die Kanüle wurde steril verpackt.", // Kanüle
  "Die Kapazität des Saals ist begrenzt.", // Kapazität
  "Die Karikatur kritisiert die Politik.", // Karikatur
  "Die Katastrophe forderte viele Opfer.", // Katastrophe
  "Er ist Mitglied der katholischen Kirche.", // katholisch
  "Kaufmännisches Denken ist gefragt.", // kaufmännisch
  "Keramik wird bei hohen Temperaturen gebrannt.", // Keramik
  "Kerosin wird als Flugtreibstoff genutzt.", // Kerosin
  "Der Arzt trägt einen weißen Kittel.", // Kittel
  "Das Publikum klatschte begeistert.", // klatschen
  "Der Klebstoff ist noch klebrig.", // klebrig
  "Der Klimawandel ist eine globale Bedrohung.", // Klimawandel
  "Ein Knochenbruch braucht Zeit zum Heilen.", // Knochenbruch
  "Kohle wird noch immer verfeuert.", // Kohle
  "Der Kohleausstieg ist beschlossen.", // Kohleausstieg
  "Kohlenstoffdioxid erwärmt die Atmosphäre.", // Kohlenstoffdioxid
  "In der Kolonialzeit herrschte Ausbeutung.", // Kolonialzeit
  "Der Kommissar ermittelt im Fall.", // Kommissar
  "Wir kommunizieren per E-Mail.", // kommunizieren
  "Die Aufgabe ist zu komplex.", // komplex
  "Wasserdampf kondensiert an kalten Oberflächen.", // kondensieren
  "Die Konfession spielt hier keine Rolle.", // Konfession
  "Sie konfrontierte ihn mit den Beweisen.", // konfrontieren
  "Das Königreich wurde vor 100 Jahren gegründet.", // Königreich
  "Wir brauchen konkrete Lösungen.", // konkret
  "Die Temperatur bleibt konstant.", // konstant
  "Kork wird aus Baumrinde gewonnen.",
  "Körpersprache verrät oft mehr als Worte.", // Körpersprache (Beden dili)
  "Der Pullover fühlt sich kratzig an.", // kratzig (Tırmalayıcı)
  "Ein gesunder Kreislauf ist lebenswichtig.", // Kreislauf (Dolaşım)
  "Kunstgeschichte studiert sie in Heidelberg.", // Kunstgeschichte (Sanat tarihi)
  "Dieses Kunstwerk hängt im MoMA.", // Kunstwerk (Sanat eseri)
  "Das Kind schläft mit seinem Kuscheltier.", // Kuscheltier (Peluş oyuncak)
  "Die Ladezeit des E-Autos beträgt 30 Minuten.", // Ladezeit (Şarj süresi)
  "Sein Vortrag war langatmig und monoton.", // langatmig (Uzun soluklu)
  "Fliegen können im Sommer richtig lästig sein.", // lästig (Can sıkıcı)
  "Latein wird an vielen Gymnasien unterrichtet.", // Latein (Latince)
  "Die Laufzeit des Vertrags beträgt zwei Jahre.", // Laufzeit (Süre)
  "Lebendige Diskussionen bereichern das Seminar.", // lebendig (Canlı)
  "Die Lebenserwartung steigt weltweit.", // Lebenserwartung (Yaşam beklentisi)
  "Das war ein lebensgefährlicher Sprung!", // lebensgefährlich (Hayati tehlike)
  "Lebenshaltungskosten variieren je nach Stadt.", // Lebenshaltungskosten (Geçim maliyeti)
  "Der Klimawandel bedroht den Lebensraum vieler Tiere.", // Lebensraum (Yaşam alanı)
  "Unser Lebensstandard hat sich verbessert.", // Lebensstandard (Yaşam standardı)
  "Eine vegane Lebensweise erfordert Disziplin.", // Lebensweise (Yaşam tarzı)
  "Sauerstoff ist lebenswichtig für Menschen.", // lebenswichtig (Hayati)
  "Die Leber filtert Giftstoffe aus dem Blut.", // Leber (Karaciğer)
  "Jedes Lebewesen hat einen Platz im Ökosystem.", // Lebewesen (Canlı)
  "In der Lehre des Buddhismus findet er Ruhe.", // Lehre (Öğreti)
  "Die Lehrveranstaltung fällt heute aus.", // Lehrveranstaltung (Ders)
  "Auf der Leinwand entstand ein Meisterwerk.", // Leinwand (Tuval)
  "Wir leisten einen Beitrag zum Umweltschutz.", // leisten (Başarmak)
  "Hohe Leistung erfordert gute Konzentration.", // Leistung (Performans)
  "Ihr Liebesverhältnis blieb lange geheim.", // Liebesverhältnis (Aşk ilişkisi)
  "Goethe ist eine literarische Ikone.", // literarisch (Edebi)
  "Er löffelte genüsslich die Suppe.", // löffeln (Kaşıkla almak)
  "Es lohnt sich nicht, darüber zu streiten.", // lohnen (Değmek)
  "Die Entführer verlangten hohes Lösegeld.", // Lösegeld (Fidye)
  "Wir lösen das Rätsel gemeinsam.", // lösen (Çözmek)
  "Ich werde das alte Sofa loswerden.", // loswerden (Kurtulmak)
  "Rauchen schadet der Lunge.", // Lunge (Akciğer)
  "Eine Lungenentzündung kann tödlich sein.", // Lungenentzündung (Zatürre)
  "Die Malerei der Renaissance fasziniert mich.", // Malerei (Resim sanatı)
  "Die Statue ist aus reinem Marmor.", // Marmor (Mermer)
  "Maschinenbau ist ein beliebtes Studienfach.", // Maschinenbau (Makine mühendisliği)
  "Die Masse des Objekts wird in Kilogramm gemessen.", // Masse (Kütle)
  "Massentierhaltung ist ethisch umstritten.", // Massentierhaltung (Fabrika çiftçiliği)
  "Dunkle Materie gibt der Wissenschaft Rätsel auf.", // Materie (Madde)
  "Sie hat keine materiellen Sorgen.", // materiell (Maddi)
  "Der Mauerfall 1989 veränderte Europa.", // Mauerfall (Duvarın yıkılışı)
  "Das Mauerwerk muss saniert werden.", // Mauerwerk (Duvar işçiliği)
  "Die Schweiz ist ein mehrsprachiges Land.", // mehrsprachig (Çok dilli)
  "Mehrsprachigkeit ist in der EU üblich.", // Mehrsprachigkeit (Çok dillilik)
  "Ein meisterhafter Schachzug beendete das Spiel.", // meisterhaft (Usta işi)
  "Sie meisterte alle Prüfungen mit Bravour.", // meistern (Üstesinden gelmek)
  "Menschenrechte sind universell gültig.", // Menschenrecht (İnsan hakkı)
  "Methan ist ein potentes Treibhausgas.", // Methan (Metan)
  "Viele Deutsche haben einen Migrationshintergrund.", // Migrationshintergrund (Göçmen köken)
  "Mikroplastik verschmutzt die Ozeane.", // Mikroplastik (Mikroplastik)
  "Er wärmte das Essen in der Mikrowelle.", // Mikrowelle (Mikrodalga)
  "Laktoseintoleranz erfordert Verzicht auf Milchprodukte.", // Milchprodukt (Süt ürünü)
  "Das Militär wurde in den Krieg geschickt.", // Militär (Ordu)
  "Minderheiten verdienen besonderen Schutz.", // Minderheit (Azınlık)
  "Missachte nicht die Verkehrsregeln!", // missachten (Görmezden gelmek)
  "Er missbrauchte seine Macht schamlos.", // missbrauchen (Kötüye kullanmak)
  "Sein Verhalten missfiel allen Anwesenden.", // missfallen (Hoşlanmamak)
  "Ich misstraue seinem plötzlichen Freundlichkeit.", // misstrauen (Güvenmemek)
  "Sie haben meine Worte missverstanden.", // missverstehen (Yanlış anlamak)
  "Im Mittelalter gab es viele Pestepidemien.", // Mittelalter (Orta Çağ)
  "Die Burg hat einen mittelalterlichen Charme.", // mittelalterlich (Orta Çağ’a ait)
  "Die Mittelschicht schrumpft in vielen Ländern.", // Mittelschicht (Orta sınıf)
  "Mittelständische Unternehmen schaffen Jobs.", // mittelständisch (Orta ölçekli)
  "Viele Künstler wirkten an dem Film mit.", // mitwirken (Katkıda bulunmak)
  "Die Mitwirkungspflicht ist vertraglich geregelt.", // Mitwirkungspflicht (İşbirliği zorunluluğu)
  "Die Moderne brachte radikale Veränderungen.", // Moderne (Modernite)
  "Ein Wassermolekül besteht aus zwei Wasserstoffatomen.", // Molekül (Molekül)
  "Großbritannien ist eine konstitutionelle Monarchie.", // Monarchie (Monarşi)
  "Er montierte das Regal an der Wand.", // montieren (Montaj yapmak)
  "Der Mörder wurde zu lebenslanger Haft verurteilt.", // Mörder (Katil)
  "Das Mosaik zeigt eine antike Schlachtenszene.", // Mosaik (Mozaik)
  "Berlin ist eine multikulturelle Metropole.", // multikulturell (Çok kültürlü)
  "Das Musical 'Cats' lief jahrelang auf Broadway.", // Musical (Müzikal)
  "Muslime fasten während des Ramadan.", // Muslim (Müslüman)
  "In unserer Nachbarschaft gibt es viele Parks.", // Nachbarschaft (Komşuluk)
  "Ich werde nochmal beim Chef nachfragen.", // nachfragen (Sormak)
  "Der Journalist hakte beim Interview nach.", // nachhaken (Üstelemek)
  "Nachhaltige Landwirtschaft schützt die Böden.", // nachhaltig (Sürdürülebilir)
  "Umweltschutz ist ein Pfeiler der Nachhaltigkeit.", // Nachhaltigkeit (Sürdürülebilirlik)
  "Er kommt seinen Verpflichtungen nicht nach.", // nachkommen (Yerine getirmek)
  "In der Nachkriegszeit herrschte große Armut.", // Nachkriegszeit (Savaş sonrası dönem)
  "Die Unterlagen reichte er später nach.", // nachreichen (Sonradan sunmak)
  "Nächstenliebe ist ein christliches Gebot.", // Nächstenliebe (Komşu sevgisi)
  "Ich kann seine Entscheidung nicht nachvollziehen.", // nachvollziehen (Anlamak)
  "Der Nachweis seiner Unschuld gelang nicht.", // Nachweis (Kanıt)
  "Wissenschaftler wiesen das Phänomen experimentell nach.", // nachweisen (Kanıtlamak)
  "Nackte Füße im Sand sind ein Urlaubsgefühl.", // nackt (Çıplak)
  "Nährstoffe sind essenziell für den Körper.", // Nährstoff (Besin maddesi)
  "Der Nahrungskreislauf im Meer ist komplex.", // Nahrungskreislauf (Besin zinciri)
  "Doppelte Nationalität ist in manchen Ländern erlaubt.", // Nationalität (Milliyet)
  "Der Nationalsozialismus führte zu unermesslichem Leid.", // Nationalsozialismus (Nasyonal sosyalizm)
  "Island ist ein Nationalstaat mit homogener Bevölkerung.", // Nationalstaat (Ulus devlet)
  "Neid ist eine zerstörerische Emotion.", // Neid (Kıskançlık)
  "Sie war neidisch auf seine Beförderung.", // neidisch (Kıskanç)
  "Das Summen der Mücken nervt mich.", // nerven (Sinir etmek)
  "Die Prüfungssituation war eine nervliche Belastung.", // nervlich (Sinirsel)
  "Neurologische Erkrankungen erfordern Spezialisten.", // neurologisch (Nörolojik)
  "Die Neuzeit begann mit der Renaissance.", // Neuzeit (Yeni Çağ)
  "Sie nickte zustimmend mit dem Kopf.", // nicken (Başını sallamak)
  "Viele Firmen lassen sich in Steueroasen nieder.", // niederlassen (Yerleşmek)
  "Die Niederschrift des Vertrags liegt vor.", // Niederschrift (Tutanak)
  "Dialysepatienten haben oft Nierenprobleme.", // Niere (Böbrek)
  "Nüchtern betrachtet, war es ein Fehler.", // nüchtern (Ayık)
  "Nutzerfreundlichkeit ist bei Apps entscheidend.", // Nutzerfreundlichkeit (Kullanıcı dostu)
  "Die Oberfläche des Sees glitzerte in der Sonne.", // Oberfläche (Yüzey)
  "Das Oberhaupt der Familie traf die Entscheidung.", // Oberhaupt (Lider)
  "Seine Lüge war offensichtlich.", // offensichtlich (Açık)
  "Der Skandal wurde in der Öffentlichkeit diskutiert.", // Öffentlichkeit (Kamuoyu)
  "Sie verlor ihren Ohrring im Schwimmbad.", // Ohrring (Küpe)
  "Ölfarbe trocknet langsamer als Acryl.", // Ölfarbe (Yağlı boya)
  "Wir optimieren unsere Website für mobile Geräte.", // optimieren (Optimize etmek)
  "Orchideen benötigen spezielle Pflege.", // Orchidee (Orkide)
  "Ortsansässige Unternehmen unterstützen die Gemeinde.", // ortsansässig (Yerleşik)
  "Pädagogik ist die Wissenschaft von Erziehung.", // Pädagogik (Pedagoji)
  "Pantomime ist eine Kunst der stummen Darstellung.", // Pantomime (Pandomim)
  "Wirf den Müll bitte in den Papierkorb.", // Papierkorb (Çöp sepeti)
  "Der Papst hielt eine Rede im Vatikan.", // Papst (Papa)
  "Ein Passant half der verletzten Frau.", // Passant (Yaya)
  "Das Klavierpedal war defekt.", // Pedal (Pedal)
  "Personenbezogene Daten sind geschützt.", // personenbezogen (Kişiye özel)
  "Aus seiner Perspektive war es gerechtfertigt.", // Perspektive (Perspektif)
  "Pflegepersonal arbeitet oft unter Druck.", // Pflegepersonal (Bakım personeli)
  "Der Physiotherapeut behandelte seine Verletzung.", // Physiotherapeut (Fizyoterapist)
  "Dieser Pilz ist giftig!", // Pilz (Mantar)
  "Pilzinfektionen erfordern Antimykotika.", // Pilzinfektion (Mantar enfeksiyonu)
  "An der Pinnwand hängen wichtige Informationen.", // Pinnwand (Pano)
  "Der Künstler reinigte seinen Pinsel sorgfältig.", // Pinsel (Fırça)
  "Das Plädoyer des Anwalts war überzeugend.", // Plädoyer (Savunma konuşması)
  "Er polierte das Silberbesteck auf Hochglanz.", // polieren (Parlatmak)
  "Die Polizeidirektion koordinierte den Einsatz.", // Polizeidirektion (Polis müdürlüğü)
  "Das Porträt der Königin hing im Schloss.", // Porträt (Portre)
  "Meißner Porzellan ist weltberühmt.", // Porzellan (Porselen)
  "Er übernahm den Posten des Abteilungsleiters.", // Posten (Görev)
  "Die Erfahrung prägte ihn nachhaltig.", // prägen (Şekillendirmek)
  "Das Preis-Leistungs-Verhältnis stimmt hier.", // Preis_Leistungs_Verhältnis (Fiyat-performans)
  "Ehrlichkeit ist mein wichtigstes Prinzip.", // Prinzip (İlke)
  "Probanden erhielten eine Aufwandsentschädigung.", // Proband (Denek)
  "Die Band probte intensiv für das Konzert.", // proben (Prova yapmak)
  "Die Wirtschaftsprognose sieht düster aus.", // Prognose (Tahmin)
  "Er programmiert seit seinem 12. Lebensjahr.", // programmieren (Programlamak)
  "Der Psychologe analysierte das Verhalten.", // Psychologe (Psikolog)
  "Psychologische Tricks beeinflussen die Werbung.", // psychologisch (Psikolojik)
  "Sein Puls war nach dem Laufen erhöht.", // Puls (Nabız)
  "Das Puppentheater begeisterte die Kinder.", // Puppentheater (Kukla tiyatrosu)
  "Sie wischte den Tisch mit einem Putzlappen ab.", // Putzlappen (Bez)
  "Die Quelle des Flusses liegt in den Bergen.",
  "Ich rate dir, vorsichtig zu sein.", // raten_Verb
  "Der See reflektiert das Mondlicht.", // reflektieren_Verb
  "Die Regierung will das Bildungssystem reformieren.", // reformieren_Verb
  "Sie reibt die Salbe auf die Haut.", // reiben_Verb
  "Die Politiker ringen um eine Lösung.", // ringen_Verb
  "Das Projekt könnte an mangelndem Budget scheitern.", // scheitern_Verb
  "Der Zeuge schildert den Vorfall detailliert.", // schildern_Verb
  "Das Kind schluckt die bittere Medizin.", // schlucken_Verb
  "Schnee schmilzt bei Temperaturen über Null.", // schmelzen_Verb
  "Er schüttelt die Flasche vor dem Öffnen.", // schütteln_Refl_Verb
  "Die Ampel signalisiert grün für Fußgänger.", // signalisieren_Verb
  "Der Laser spaltet das Material präzise.", // spalten_Verb
  "Viele Menschen spenden Kleidung für Bedürftige.", // spenden_Verb
  "Die Sterne strahlen am Nachthimmel.", // strahlen_Verb
  "Wir streichen die Wand in Pastellfarben.", // streichen_Verb
  "Jeder Bürger soll an Wahlen teilhaben.", // teilhaben_Verb
  "Ich traue seinen Versprechungen nicht.", // trauen_Verb
  "Wasser tropft langsam aus dem undichten Hahn.", // tropfen_Verb
  "Die Freundin tröstet ihn nach der Niederlage.", // trösten_Verb
  "Man sollte kleinere Fehler nicht überbewerten.", // überbewerten_Verb
  "Ich muss meine Karrierepläne überdenken.", // überdenken_Verb
  "Unsere Meinungen übereinstimmen selten.", // übereinstimmen_Verb
  "Die komplexe Aufgabe überfordert die Schüler.", // überfordern_Verb
  "Wir können formale Details übergehen.", // übergehen_Verb
  "Märchen werden über Generationen überliefert.", // überliefern_Verb
  "Das Unternehmen wird neue Technologien übernehmen.", // übernehmen_Verb
  "Viele überschätzen ihre körperliche Belastbarkeit.", // überschätzen_Verb
  "Starkregen könnte die Straßen überschwemmen.", // überschwemmen_Verb
  "Wir haben die Krise gemeinsam überstanden.", // überstehen_Verb
  "Du übertreibst mit deinen Vorwürfen.", // übertreiben_Verb
  "Kameras überwachen den Eingangsbereich.", // überwachen_Verb
  "Das Museum umfasst drei historische Abteilungen.", // umfassen_Verb
  "Ein tiefer Graben umgibt die mittelalterliche Burg.", // umgeben_Verb
  "Pflanzen wandeln Licht in chemische Energie um.",
  "Sein unangemessenes Lachen irritierte alle.", // unangemessen_Adj
  "Die Kritik war völlig unbegründet.", // unbegründet_Adj
  "Seine Aussagen wirken unglaubwürdig.", // unglaubwürdig_Adj
  "Viele unterbewerten die Bedeutung von Schlaf.", // unterbewerten_Verb
  "Wir müssen die Flüchtlinge sicher unterbringen.", // unterbringen_Verb
  "Einfache Aufgaben unterfordern hochqualifizierte Mitarbeiter.", // unterfordern_Verb
  "Man darf die Naturgewalt nicht unterschätzen.", // unterschätzen_Verb
  "Er untertreibt seine Leistungen ständig.", // untertreiben_Verb
  "Ein Diagramm veranschaulicht die Daten.", // veranschaulichen_Verb
  "Die Uni veranstaltet eine Klimakonferenz.", // veranstalten_Verb
  "Engpässe verbauen uns den Weg zum Erfolg.", // verbauen_Verb
  "Er verbeugt sich vor dem Publikum.", // verbeugen_Refl_Verb
  "Soziale Medien verbreiten Fake-News rasend schnell.", // verbreiten_Verb
  "Die Länder sind wirtschaftlich verbunden.", // verbunden_sein_Verb
  "Wasser verdampft bei 100°C.", // verdampfen_Verb
  "Sie verfasste einen brillanten Forschungsbericht.", // verfassen_Verb
  "Der Bestseller wird bald verfilmt.", // verfilmen_Verb
  "Warum verheimlichst du die Wahrheit?", // verheimlichen_Verb
  "Der Präsident verkündet neue Steuergesetze.", // verkünden_Verb
  "Das Konzert wird auf nächstes Jahr verlegt.", // verlegen_Verb
  "Lehrer vermitteln nicht nur Fachwissen.", // vermitteln_Verb
  "Er vernachlässigt seine Gesundheit.", // vernachlässigen_Verb
  "Die Polizei vernehmte den Zeugen stundenlang.", // vernehmen_Verb
  "Das System versagt unter Extrembedingungen.", // versagen_Verb
  "Wir verschieben das Meeting auf Donnerstag.", // verschieben_Verb
  "Seine Antwort verschlug mir die Sprache.", // verschlagen_Verb
  "Vermeide es, Lebensmittel zu verschwenden.", // verschwenden_Verb
  "Krankenhäuser versorgen die Verletzten.", // versorgen_Verb
  "Die Proteste verstärken sich täglich.", // verstärken_Refl_Verb
  "Sie verstauten das Gepäck im Kofferraum.", // verstauen_Verb
  "Das verstoßt gegen die Menschenrechte.", // verstoßen_Verb
  "Der Anwalt verteidigt den Angeklagten.", // verteidigen_Verb
  "Er vertritt die Firma bei der Messe.", // vertreten_Verb
  "Der Soldat verweigerte den Befehl.", // verweigern_Verb
  "Die Hitze verzieht das Holz.", // verziehen_Verb
  "Experimente widerlegen die Theorie.", // widerlegen_Verb
  "Kunstwerke widerspiegeln oft gesellschaftliche Konflikte.", // widerspiegeln_Verb
  "Er gab das Geld treuhänderisch wieder.", // wiedergeben_Verb
  "Plastikflaschen sollte man wiederverwenden.", // wiederverwenden_Verb
  "Sie wischt den Staub von den Möbeln.", // wischen_Verb
  "Er bildet sich beruflich weiter.", // weiterbilden_Refl_Verb
  "Wegschmeißen ist umweltschädlich.", // wegschmeißen_Verb
  "Dreh den Kopf nicht weg!", // wegdrehen_Verb
  "Er zerdrückte die leere Dose.", // zerdrücken_Verb
  "Radioaktive Stoffe zerfallen über Jahrtausende.", // zerfallen_Verb
  "Der Sturm zerschlug die Fensterscheiben.", // zerschlagen_Verb
  "Der Professor zitierte Goethe.", // zitieren_Verb
  "Vor Kälte zitterten ihre Hände.", // zittern_Verb
  "Sein Auge zuckte nervös.", // zucken_Verb
  "Die Erfahrung kommt dir im Beruf zugute.", // zugutekommen_Verb
  "Das Auto legte plötzlich an Geschwindigkeit zu.", // zulegen_Refl_Verb
  "Die Armut nimmt weltweit zu.", // zunehmen_Verb
  "Touristen finden sich in der Stadt schnell zurecht.", // zurechtfinden_Verb
  "Wie kommst du mit dem Druck zurecht?", // zurechtkommen_Verb
  "Die Aktienkurse gehen stark zurück.", // zurückgehen_Verb
  "Das Team setzt sich aus Experten zusammen.", // zusammensetzen_Refl_Verb
  "Wir bringen das Projekt endlich zustande.", // zustande_bringen_Verb
  "Ich traue mir die Prüfung zu.", // zutrauen_Refl_Verb
  "Sie wendet sich neuen Hobbys zu.", // zuwenden_Verb
];

export default verben;
