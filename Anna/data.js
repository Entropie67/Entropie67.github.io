/* Lernkarten-Daten — Physiotherapie-Prüfung
   cat: atmung | innere | ausdauer | anat | komm | chir | neuro
   sections: {h, items[]} | {h, kv[[k,v]]} | {h, text} | {h, tags[]}
*/
const DATA = [

/* ============== ATMUNG & LUNGE ============== */
{
  cat:"atmung", title:"Asthma bronchiale", sub:"Chronisch-entzündliche Atemwegserkrankung",
  sections:[
    {h:"Definition", text:"<mark>Chronisch-entzündliche</mark> Erkrankung der Atemwege mit <b>reversibler</b> Bronchialobstruktion. Trias: Bronchospasmus, Schleimhautödem, Hyperkrinie (zäher Schleim)."},
    {h:"Symptome", items:["Atemnot (Dyspnoe), anfallsartig","Trockener Husten, oft nachts","Zäher Schleim / Auswurf","Engegefühl in der Brust","Exspiratorisches Giemen/Pfeifen","Verlängerte Ausatmung"]},
    {h:"Ursachen — allergisch", items:["Schimmelpilze","Pollen","Haustiere","Hausstaub(milben)"]},
    {h:"Ursachen — nicht allergisch", items:["Infektion","Rauch","Kalte Luft","Luftverschmutzung","Stress / Emotionen","Anstrengung (Belastungsasthma)"]},
    {h:"Notfallprozedere (Anfall)", items:["1. Aktivität stoppen","2. Lippenbremse","3. 2–3 Hübe Notfallspray (Bronchodilatator)","4. Kortisontabletten","5. Sitzposition mit AHM-Einsatz (Kutschersitz)","6. Lippenbremse fortsetzen","7. Keine Besserung nach 5–10 Min → Notarzt (112)"]},
    {h:"Therapieziele PT", items:["Entzündung reduzieren (medikamentös)","Bronchien erweitern","Atmung verbessern / ökonomisieren","Atembewegung verbessern","Sekret lösen (Sekretolyse)","Atemerleichternde Stellungen schulen"]},
  ],
  merke:"Asthma = <b>reversibel</b>, COPD = weitgehend <b>irreversibel</b>. Atemerleichternde Stellungen: Kutschersitz, Torwartstellung, Lippenbremse."
},
{
  cat:"atmung", title:"Pneumonie", sub:"Lungenentzündung",
  sections:[
    {h:"Definition", text:"Akute oder chronische <mark>Entzündung des Lungengewebes</mark> (Alveolen und/oder Interstitium), meist bakteriell (Pneumokokken), viral oder durch Aspiration."},
    {h:"Symptome", items:["Hohes Fieber, Schüttelfrost","Husten mit Auswurf (evtl. rostbraun/eitrig)","Dyspnoe, Tachypnoe","Schmerzen beim Atmen (bei Pleurabeteiligung)","Abgeschlagenheit, Krankheitsgefühl"]},
    {h:"Formen", items:["Lobärpneumonie (ganzer Lungenlappen)","Bronchopneumonie (herdförmig)","Interstitielle Pneumonie (atypisch, viral)","Nosokomial vs. ambulant erworben"]},
    {h:"Risikofaktoren", items:["Immobilität / Bettlägerigkeit","Hohes Alter, Immunschwäche","Beatmung, Aspiration","Rauchen, Vorerkrankungen (COPD)"]},
    {h:"Therapieziele PT", items:["Sekretmobilisation & -abtransport","Belüftung minderbelüfteter Areale verbessern","Pneumonieprophylaxe (bei Risikopatienten!)","Atemvertiefung, Thoraxmobilisation","Frühmobilisation"]},
  ],
  merke:"<b>Pneumonieprophylaxe</b> ist zentrale PT-Aufgabe: Mobilisation, Atemübungen (z.B. Triflow/SMI), Lagerung, Sekretlösung."
},
{
  cat:"atmung", title:"COPD", sub:"Chronisch obstruktive Lungenerkrankung",
  sections:[
    {h:"Definition", text:"Chronische, <mark>nicht vollständig reversible</mark> Atemwegsobstruktion. Kombination aus chronischer Bronchitis + Lungenemphysem. Fortschreitend."},
    {h:"Ursachen", items:["Rauchen (Hauptursache, ~90%)","Luftverschmutzung, Stäube","Alpha-1-Antitrypsin-Mangel (genetisch)","Häufige Atemwegsinfekte"]},
    {h:"Symptome (AHA)", items:["<b>A</b>uswurf (chronisch)","<b>H</b>usten (morgens)","<b>A</b>temnot (zunächst bei Belastung, später in Ruhe)","Fassthorax bei Emphysem"]},
    {h:"GOLD-Stadien", text:"Einteilung nach FEV1 (Einsekundenkapazität): GOLD 1 (leicht) bis GOLD 4 (sehr schwer)."},
    {h:"Therapieziele PT", items:["Atemökonomie (Lippenbremse, dosierte Belastung)","Sekretmanagement","Kraft- und Ausdauertraining (Lungensport)","Atemhilfsmuskulatur entlasten","Belastungsdyspnoe reduzieren"]},
  ],
  merke:"Bei COPD Belastung <b>dosieren</b> und Lippenbremse einsetzen (verhindert Bronchialkollaps durch positiven Druck)."
},
{
  cat:"atmung", title:"Mukoviszidose", sub:"Zystische Fibrose (CF)",
  sections:[
    {h:"Definition", text:"<mark>Angeborene, genetische</mark> Stoffwechselerkrankung (autosomal-rezessiv, CFTR-Gen). Störung der Chloridkanäle → <b>zäher Schleim</b> in allen exokrinen Drüsen."},
    {h:"Betroffene Organe", items:["Lunge: zäher Schleim → Infekte, Obstruktion","Pankreas: Verdauungsenzyme fehlen","Darm, Leber, Schweißdrüsen (salziger Schweiß)"]},
    {h:"Symptome", items:["Chronischer Husten, zäher Auswurf","Wiederkehrende Atemwegsinfekte","Gedeihstörung, Untergewicht","Fettstühle (Pankreasinsuffizienz)"]},
    {h:"Therapieziele PT", items:["Sekretelimination (Autogene Drainage, PEP, Flutter)","Inhalationstherapie","Thoraxmobilität erhalten","Körperliches Training / Ausdauer","Infektprophylaxe"]},
  ],
  merke:"Sekret ist bei CF extrem <b>zäh</b> → Techniken wie <b>autogene Drainage</b>, PEP-Systeme (Flutter, RC-Cornet) sind Kernstück."
},
{
  cat:"atmung", title:"Lungenembolie", sub:"Verschluss einer Lungenarterie",
  sections:[
    {h:"Definition", text:"Akuter <mark>Verschluss einer Lungenarterie</mark>, meist durch einen verschleppten Thrombus (Embolus) aus den tiefen Beinvenen (TVT). <b>Notfall!</b>"},
    {h:"Ursache / Entstehung", text:"Meist Folge einer <b>tiefen Beinvenenthrombose</b> → Thrombus löst sich → wandert über rechtes Herz in die Lungenstrombahn."},
    {h:"Symptome", items:["Plötzliche Dyspnoe, Tachypnoe","Thoraxschmerz (atemabhängig)","Tachykardie","Husten, evtl. Bluthusten (Hämoptyse)","Angst, Zyanose","Bei großer LE: Kreislaufschock, Synkope"]},
    {h:"Risikofaktoren", items:["Immobilität, lange OP, lange Flüge","Frühere Thrombose","Rauchen + Pille","Adipositas, Malignom"]},
    {h:"PT-Relevanz", items:["Thromboseprophylaxe = Embolieprophylaxe!","Bei V.a. LE: Mobilisation stoppen, Notarzt","Nach Diagnose: Wiederbelastung erst nach ärztl. Freigabe"]},
  ],
  merke:"Wichtigste Prophylaxe: <b>Thromboseprophylaxe</b> (Bewegung, MTPS-Strümpfe, Heparin). Kette: TVT → LE."
},
{
  cat:"atmung", title:"Atemhilfsmuskeln — Inspiration", sub:"Auxiliäre Einatmung",
  sections:[
    {h:"Hauptatemmuskel", text:"<b>Zwerchfell (Diaphragma)</b> — wichtigster Inspirationsmuskel (~70% der Ruheatmung), zusätzlich Mm. intercostales externi."},
    {h:"Atemhilfsmuskeln Inspiration", items:["M. sternocleidomastoideus","Mm. scaleni","M. pectoralis major & minor","M. serratus anterior","M. serratus posterior superior","Mm. levatores costarum"]},
    {h:"Wann aktiv?", text:"Bei <mark>vertiefter/forcierter Einatmung</mark> und bei Atemnot. Einsatz sichtbar z.B. beim Asthmaanfall → deshalb Kutschersitz (Arme abstützen = Punctum fixum für Pectoralis)."},
  ],
  merke:"Kutschersitz/Torwartstellung: Arme werden fixiert → Ansatz und Ursprung tauschen → AHM können am Thorax ziehen und die Einatmung unterstützen."
},
{
  cat:"atmung", title:"Atemhilfsmuskeln — Exspiration", sub:"Auxiliäre Ausatmung",
  sections:[
    {h:"Ruheatmung", text:"Ausatmung in Ruhe ist <mark>passiv</mark> (elastische Rückstellkräfte von Lunge/Thorax) — keine Muskelarbeit nötig."},
    {h:"Atemhilfsmuskeln Exspiration", items:["Mm. intercostales interni","M. rectus abdominis","Mm. obliquus externus & internus","M. transversus abdominis","M. quadratus lumborum"]},
    {h:"Wann aktiv?", text:"Bei <b>forcierter Ausatmung</b>, Husten, Pressen, Sprechen/Singen. Bauchmuskeln erhöhen den intraabdominalen Druck → Zwerchfell wird nach kranial gedrückt."},
  ],
  merke:"Aktive Ausatmung v.a. über die <b>Bauchmuskulatur</b> — wichtig für Hustentechnik & Sekretabtransport."
},
{
  cat:"atmung", title:"Luftwege", sub:"Anatomie des Respirationstrakts",
  sections:[
    {h:"Obere Atemwege", items:["Nase (Nasus) / Nasenhöhle","Rachen (Pharynx)","Kehlkopf (Larynx)"]},
    {h:"Untere Atemwege", items:["Luftröhre (Trachea)","Hauptbronchien (li/re)","Bronchien → Bronchiolen","Terminale Bronchiolen","Alveolen (Gasaustausch)"]},
    {h:"Funktion / Konditionierung", text:"Luft wird in den oberen Atemwegen <mark>angewärmt, angefeuchtet und gereinigt</mark> (Flimmerepithel + Schleim = mukoziliäre Clearance)."},
    {h:"Gasaustausch", text:"Findet in den <b>Alveolen</b> statt: O₂ ins Blut, CO₂ in die Alveole (Diffusion über die Blut-Luft-Schranke)."},
  ],
  merke:"Leitungszone (Nase→Bronchiolen, kein Gasaustausch = Totraum) vs. Respirationszone (Alveolen = Gasaustausch)."
},
{
  cat:"atmung", title:"Knöcherner Thorax", sub:"Brustkorb — Anatomie",
  sections:[
    {h:"Bestandteile", items:["12 Brustwirbel (Vertebrae thoracicae)","12 Rippenpaare (Costae)","Brustbein (Sternum): Manubrium, Corpus, Proc. xiphoideus"]},
    {h:"Rippen-Einteilung", items:["Costae verae (1–7): echte Rippen, direkt am Sternum","Costae spuriae (8–10): falsche Rippen, über Rippenbogen","Costae fluctuantes (11–12): freie/fliegende Rippen"]},
    {h:"Gelenke", items:["Kostovertebralgelenke (Rippe–Wirbel)","Kostotransversalgelenke (Rippe–Querfortsatz)","Sternokostalgelenke (Rippe–Sternum)"]},
    {h:"Atemmechanik", text:"Rippen bewegen sich bei Einatmung nach <mark>kranial-ventral</mark> ('Pumpenschwenk' & 'Eimerhenkel') → Thoraxvolumen ↑."},
  ],
},

/* ============== INNERE MEDIZIN ============== */
{
  cat:"innere", title:"Blutgefäße", sub:"Wandschichten & Gefäßtypen",
  sections:[
    {h:"Wandschichten (von innen nach außen)", kv:[["Tunica intima","innerste Schicht (Endothel) — glatt, kann verletzt werden / porös werden"],["Tunica media","mittlere Muskelschicht + elastische Fasern"],["Tunica externa (adventitia)","äußere Bindegewebsschicht"]]},
    {h:"Prinzip", text:"Arterien, Venen und Kapillaren sind <mark>gleich aufgebaut</mark> (intima–media–externa), unterscheiden sich aber in Dicke und Stärke der Schichten."},
    {h:"Arterien", items:["Starke Tunica media (viele elastische Fasern) + starke Adventitia","Enges Lumen, halten hohen Druck stand","Transportieren Blut <b>vom Herzen weg</b>"]},
    {h:"Venen", items:["Schwache Tunica media, starke Adventitia","Venenklappen (Taschenklappen) → Blutfluss in eine Richtung","Kapazitätsgefäß, leiten Blut <b>zum Herzen zurück</b>"]},
    {h:"Kapillaren", items:["Nur einzelne Schicht Endothelzellen + Basalmembran","Sehr dünne Wand → Austausch von O₂, Nährstoffen & Abfallprodukten zwischen Blut und Gewebe"]},
  ],
  merke:"Lagerung: <b>Arterien → tieflagern</b> (Durchblutung fördern), <b>Venen → hochlagern</b> (Rückfluss fördern)."
},
{
  cat:"innere", title:"Blutkreislauf & venöser Rücktransport", sub:"Kreislauf, Windkessel, Rückstrom",
  sections:[
    {h:"Zwei Kreisläufe", kv:[["Kleiner Kreislauf","Lungenkreislauf: Blut vom Herzen zur Lunge und zurück"],["Großer Kreislauf","Körperkreislauf: Blut aus dem Körper zurück zum Herzen"]]},
    {h:"Windkesselfunktion", text:"Die elastische <mark>Aortenwand</mark> speichert in der Systole einen Teil des Schlagvolumens und gibt es in der Diastole wieder ab → wandelt stoßweisen Auswurf in kontinuierlichen Blutfluss um."},
    {h:"Venöser Rücktransport (6 Mechanismen)", items:["1. Sog des Herzens (Ventilebenenmechanismus)","2. Muskelpumpe (Muskelkontraktion presst Venen aus)","3. Venenklappen (verhindern Rückstrom)","4. Blutdruckgefälle (venöser Druck sehr niedrig)","5. Parallele Anlage von Venen & Arterien (Pulswelle drückt Venen aus)","6. Atemtechnik (Zwerchfell → Druckgefälle, Blut fließt herzwärts)"]},
  ],
  merke:"Für <b>venöse</b> Krankheiten ist der Rücktransport zentral: Muskelpumpe, Venenklappen & Hochlagerung unterstützen ihn."
},
{
  cat:"innere", title:"Hormone — Hypophyse", sub:"Hypophysenhormone",
  sections:[
    {h:"Definition", text:"Hormone der <mark>Hypophyse</mark> (Hirnanhangsdrüse) steuern viele Körperfunktionen und andere Hormondrüsen."},
    {h:"Wichtige Hormone", kv:[["ADH (Adiuretin / Vasopressin)","fördert Wasserrückresorption in der Niere → RR-Steigerung"],["Oxytocin","Milcheinschuss (Stillzeit), Kontraktion der Gebärmutter bei der Geburt"],["ACTH (Corticotropin)","stimuliert Nebennierenrinde (Cortisol, Androgene)"],["TSH (Thyreotropin)","stimuliert Schilddrüse (T3, T4)"],["Prolaktin (PRL)","Brustdrüsenwachstum, Milchproduktion"],["FSH / LH","Keimdrüsen: Geschlechtshormone, Fortpflanzung"],["STH (Somatotropin)","Wachstumshormon, Körperwachstum"],["MSH (Melanotropin)","Melaninproduktion → Hautpigment"]]},
  ],
  merke:"<b>ADH</b> = Wasser sparen (antidiuretisch). <b>Oxytocin</b> = Geburt & Stillen. <b>TSH/ACTH</b> steuern andere Drüsen."
},
{
  cat:"innere", title:"Arteriosklerose", sub:"Arterienverkalkung",
  sections:[
    {h:"Definition", text:"<mark>Systemische Erkrankung der Arterien</mark>: Einlagerung von Lipiden, Kalk und Bindegewebe in die Gefäßwand → Plaques → Gefäß verengt/verhärtet, Elastizität ↓."},
    {h:"Risikofaktoren", items:["Rauchen","Bluthochdruck (Hypertonie)","Diabetes mellitus","Hohe Blutfette (Hypercholesterinämie)","Adipositas, Bewegungsmangel","Alter, Geschlecht, Genetik"]},
    {h:"Folgeerkrankungen", items:["KHK / Herzinfarkt (Koronararterien)","Schlaganfall (Hirnarterien)","pAVK (Beinarterien)","Nierenarterienstenose"]},
    {h:"Therapieziele PT", items:["Risikofaktoren senken (Bewegung!)","Ausdauertraining","Gewichtsreduktion unterstützen","Gefäßtraining bei pAVK"]},
  ],
  merke:"Arteriosklerose ist die <b>gemeinsame Grundlage</b> von KHK, Schlaganfall und pAVK."
},
{
  cat:"innere", title:"pAVK", sub:"Periphere arterielle Verschlusskrankheit",
  sections:[
    {h:"Definition", text:"<mark>Durchblutungsstörung der Extremitätenarterien</mark> (meist Beine) durch Arteriosklerose → verminderte O₂-Versorgung der Muskulatur."},
    {h:"Leitsymptom", text:"<b>Claudicatio intermittens</b> ('Schaufensterkrankheit'): belastungsabhängiger Wadenschmerz, der zum Stehenbleiben zwingt, in Ruhe verschwindet."},
    {h:"Ursachen", items:["In 95% Arteriosklerose","Männer 5× häufiger betroffen","Selten: Entzündungen, rezidivierende Thrombembolien"]},
    {h:"Stadien nach Fontaine", kv:[["I","keine Beschwerden (Stenose, Pulsabschwächung)"],["II","Claudicatio intermittens (IIa >200m, IIb <200m)"],["III","Ruheschmerz"],["IV","Nekrose / Ulkus / Gangrän"]]},
    {h:"Diagnostik", items:["Anamnese: Risikofaktoren (Nikotin, Hypertonie, Diabetes…)","<b>Gehtest</b>: Zeit/Strecke bis Schmerz stoppen","<b>Ratschow-Lagerungsprobe</b>: Beine hoch + Füße kreisen → bei pAVK Blässe der Fußsohle, verzögerte Rötung/Venenfüllung beim Aufsetzen","Beckentyp: leichte Kniebeugen · Oberschenkeltyp: Zehenstand"]},
    {h:"Gehtraining — Methoden", items:["Alte Methode: bis Schmerz auftritt (2/3), dann 1/3 Pause","Neue Methode: im Schmerz trainieren (1–3 Sek), dann 1/3 Pause","Stadium I & II: Gehtraining fördert Kollateralen","Stadium III–IV: Medikamente / Rekanalisation"]},
    {h:"PT muss beachten (wichtig!)", items:["Keine lokale <b>Wärme- oder Kälteanwendung</b> (Gefäße reagieren paradox)","Druck durch Lagerung/Kleidung vermeiden","<b>Keine Antithrombosestrümpfe</b> bei Dopplerdruck < 50 mmHg","Extremität <b>tief</b> lagern"]},
  ],
  merke:"„Umweg\" = Kollateralen (natürlich) oder Bypass (operativ). Bei pAVK Beine <b>tief</b> lagern, <b>keine Wärme</b>, keine engen Strümpfe."
},
{
  cat:"innere", title:"Thrombose", sub:"Arterielle & venöse Thrombusbildung",
  sections:[
    {h:"Definition", text:"Bildung eines <mark>Blutgerinnsels (Thrombus)</mark> in einem Gefäß mit teilweisem/vollständigem Verschluss."},
    {h:"Virchow-Trias (Ursachen)", items:["1. Gefäßwandschaden (Endothelläsion)","2. Verlangsamter Blutfluss (Stase, Immobilität)","3. Veränderte Blutzusammensetzung (Hyperkoagulabilität)"]},
    {h:"Risikofaktoren", items:["Immobilität, Bettruhe, OP","Rauchen + Ovulationshemmer","Exsikkose","Malignom, Schwangerschaft","Frühere Thrombose"]},
    {h:"Gefahr", text:"Ablösung → <b>Embolie</b> (venös → Lungenembolie; arteriell → Infarkt/Schlaganfall)."},
    {h:"Prophylaxe PT", items:["Frühmobilisation, aktive Bewegung","Muskelpumpe aktivieren (Fußwippen)","MTPS/Kompressionsstrümpfe","Ausreichend Flüssigkeit"]},
  ],
  merke:"Die <b>Virchow-Trias</b> ist DAS Prüfungsthema: Gefäßwand – Blutfluss – Blutzusammensetzung."
},
{
  cat:"innere", title:"Phlebothrombose", sub:"Tiefe Beinvenenthrombose (TVT)",
  sections:[
    {h:"Definition", text:"<mark>Thrombose der tiefen Venen</mark> (meist Bein/Becken). Abzugrenzen von der oberflächlichen <b>Thrombophlebitis</b> (Entzündung + Thrombus einer oberflächlichen Vene)."},
    {h:"Symptome", items:["Schwellung, Umfangsdifferenz","Überwärmung, Rötung, Zyanose","Schmerz, Spannungsgefühl","Homans-Zeichen (Wadenschmerz bei Dorsalextension)","Meyer-/Payr-Zeichen"]},
    {h:"Größte Gefahr", text:"<b>Lungenembolie</b> durch Ablösung des Thrombus."},
    {h:"Therapie / PT", items:["Antikoagulation (Heparin), Kompression","Mobilisation nach ärztlicher Freigabe","KEINE forcierte Massage/Manipulation am betroffenen Bein (Emboliegefahr)","Später: Kompressionstherapie, Bewegung"]},
  ],
  merke:"Bei akuter TVT: <b>keine kräftigen mechanischen Reize</b> am Bein → Emboliegefahr. Erst nach Freigabe mobilisieren."
},
{
  cat:"innere", title:"Thrombophlebitis", sub:"Oberflächliche Venenentzündung + Thrombus",
  sections:[
    {h:"Definition", text:"Die <mark>oberflächliche Vene</mark> ist entzündet und durch einen Thrombus verschlossen. Oft auf Basis von <b>Varikosis</b> (Krampfadern). Abzugrenzen von der tiefen Phlebothrombose (TVT)."},
    {h:"Ursachen / Formen", kv:[["Bakterielle Form","Gerinnsel mit lokaler Entzündung"],["Arterielle Form","nach Trauma oder Injektion (Spritze) — Risiko hämatogener Aussaat"]]},
    {h:"Symptome", items:["Druckschmerz entlang der Vene","Rötung, lokale Schwellung","Bei bakteriell: Fieber, Schüttelfrost, eitrige Einschmelzung"]},
    {h:"Komplikationen", items:["Übergreifen auf tiefe Venen → Gefahr Lungenembolie","Infektion"]},
    {h:"Diagnostik & Therapie", items:["Klinik, Duplex-Sonographie (Ultraschall)","Keine strenge Bettruhe → Mobilisation!","Kompression, Kühlung, Bewegung","NSAR (nicht-steroidale Antirheumatika = entzündungshemmende Schmerzmittel), ggf. Antikoagulation"]},
  ],
  merke:"Anders als bei der TVT: bei oberflächlicher Thrombophlebitis <b>keine Bettruhe</b> — Patienten sollen viel laufen (mit Kompression)."
},
{
  cat:"innere", title:"CVI", sub:"Chronisch venöse Insuffizienz",
  sections:[
    {h:"Definition", text:"<mark>Chronische Abflussstörung der Beinvenen</mark> durch Klappeninsuffizienz → venöser Rückstau, erhöhter Venendruck."},
    {h:"Ursachen", items:["Varikose (Krampfadern)","Zustand nach TVT (postthrombotisches Syndrom)","Bindegewebsschwäche, Klappeninsuffizienz"]},
    {h:"Stadien (Widmer)", kv:[["I","Ödeme, Corona phlebectatica"],["II","Hautveränderungen: Hyperpigmentierung, Ekzem, Verhärtung"],["III","Ulcus cruris venosum (offenes Bein)"]]},
    {h:"Symptome", items:["Schwere, müde Beine","Ödeme (abends schlimmer)","Hautveränderungen, Juckreiz","Ulcus cruris (Endstadium)"]},
    {h:"Therapieziele PT", items:["Aktivierung der Muskelpumpe (Gehen, Fußgymnastik)","Kompressionstherapie unterstützen","Hochlagerung der Beine","Manuelle Lymphdrainage bei Ödem"]},
  ],
  merke:"Bei CVI Beine <b>hoch</b> lagern & Muskelpumpe aktivieren — Gegenteil zur pAVK (dort tief lagern)."
},
{
  cat:"innere", title:"Diabetes mellitus", sub:"Zuckerkrankheit",
  sections:[
    {h:"Definition", text:"Chronische Stoffwechselerkrankung mit <mark>erhöhtem Blutzucker</mark> (Hyperglykämie) durch Insulinmangel oder Insulinresistenz."},
    {h:"Typen", kv:[["Typ 1","Beginn im Kindes-/Jugendalter, erblich, ~5% der Fälle, β-Zellen produzieren kein Insulin → <b>absoluter Insulinmangel</b> (schlank)"],["Typ 2","meist Erwachsene, ~85%, Bewegungsmangel/falsche Ernährung/Übergewicht → Zellen resistent = <b>relativer Insulinmangel</b> (Downregulation → Insulinresistenz)"]]},
    {h:"Symptome (Hyperglykämie)", items:["Starker Durst (Polydipsie)","Häufiges Wasserlassen (Polyurie)","Müdigkeit, Gewichtsverlust","Schlechte Wundheilung"]},
    {h:"Folgeschäden", items:["Diabetische Neuropathie (Sensibilität ↓)","Diabetischer Fuß (Ulzera)","Retinopathie, Nephropathie","Makroangiopathie (KHK, pAVK)"]},
    {h:"Notfall Hypoglykämie", items:["Zittern, Schwitzen, Heißhunger","Verwirrtheit, Bewusstlosigkeit","→ Sofort Zucker geben (wenn wach)!"]},
    {h:"Therapieziele PT", items:["Bewegung senkt Blutzucker (Muskelarbeit)","Typ 2: statische Dehnung, Kraft- & Ausdauertraining (z.B. Laufband, Theraband)","Fußkontrolle/-schulung (Neuropathie)","Vor Sport: Hypoglykämie-Risiko beachten"]},
  ],
  merke:"<b>Muskelarbeit senkt den Blutzucker</b> — vor dem Training BZ beachten, bei Hypo sofort Zucker geben. Typ 1 = schlank/absolut, Typ 2 = Übergewicht/relativ."
},
{
  cat:"innere", title:"Hypertonie", sub:"Bluthochdruck",
  sections:[
    {h:"Definition", text:"Dauerhaft <mark>erhöhter arterieller Blutdruck ≥ 140/90 mmHg</mark>. Normwert ~120/80 mmHg."},
    {h:"Werte", kv:[["Optimal","< 120 / 80"],["Normal","< 130 / 85"],["Hypertonie Grad 1","140–159 / 90–99"],["Grad 2","160–179 / 100–109"],["Grad 3","≥ 180 / 110"]]},
    {h:"Arten", kv:[["Primär / essenziell","~90%, multifaktoriell, keine erkennbare Ursache (genetisch, Ernährung, Konsum, Stress)"],["Sekundär","~10%, Folge z.B. von Schlafapnoe, Nierenerkrankung, hormoneller Störung, Aortenisthmusstenose"],["Renal","über das RAAS (reguliert Blutdruck & Wasserhaushalt)"],["Endokrin","Phäochromozytom (Adrenalin↑), Cushing (Cortisol↑), Conn (Aldosteron↑ → Na⁺-Retention)"]]},
    {h:"Metabolisches Syndrom", text:"Hypertonie zählt — wie Adipositas, Diabetes Typ 2, Fettstoffwechselstörungen & Gicht — zum <mark>metabolischen Syndrom</mark>."},
    {h:"Risiken / Folgen", items:["Herzinfarkt, Schlaganfall","Herzinsuffizienz, Linksherzhypertrophie","Nierenschäden, Arteriosklerose"]},
    {h:"Therapieziele PT", items:["Dosiertes Ausdauertraining (Spazieren, Nordic Walking, Joggen, Schwimmen)","Dynamische statt isometrischer Belastung","<b>Pressatmung (Valsalva) vermeiden</b> → gefährliche systolische Spitzen","Entspannungstechniken, Atemkontrolle"]},
    {h:"Basistherapie / Lebensstil", items:["Gewicht normalisieren","Mediterrane Ernährung, Salzreduktion","Rauchen einstellen, Kaffee/Alkohol einschränken","Regelmäßige Bewegung"]},
  ],
  merke:"Beim Training <b>Pressatmung vermeiden</b> (Valsalva → RR-Anstieg). Dynamische Ausdauer statt schwerer statischer Belastung."
},
{
  cat:"innere", title:"KHK", sub:"Koronare Herzkrankheit",
  sections:[
    {h:"Definition", text:"<mark>Arteriosklerose der Herzkranzgefäße (Koronararterien)</mark> → Verengung → Missverhältnis zwischen O₂-Angebot und -Bedarf des Herzmuskels (Myokardischämie)."},
    {h:"Leitsymptom", text:"<b>Angina pectoris</b> — Brustenge/-schmerz, oft belastungsabhängig, Ausstrahlung in li. Arm, Kiefer, Rücken."},
    {h:"Risikofaktoren", items:["Rauchen, Hypertonie, Diabetes","Hohe Blutfette, Adipositas","Bewegungsmangel, Stress","Familiäre Belastung"]},
    {h:"Komplikationen", items:["Herzinfarkt (Myokardinfarkt)","Herzrhythmusstörungen","Herzinsuffizienz","Plötzlicher Herztod"]},
    {h:"Therapieziele PT", items:["Kontrolliertes Ausdauertraining (Herzsport)","Belastung nach Herzfrequenz-/Borg-Steuerung","Risikofaktoren senken","Belastungsgrenzen respektieren"]},
  ],
  merke:"KHK = Arteriosklerose der <b>Koronarien</b>. Symptom = Angina pectoris. Komplikation = Herzinfarkt."
},
{
  cat:"innere", title:"Angina pectoris", sub:"'Brustenge'",
  sections:[
    {h:"Definition", text:"<mark>Anfallsartiger Brustschmerz</mark> durch vorübergehende Myokardischämie (Sauerstoffmangel), Symptom der KHK."},
    {h:"Formen", kv:[["Stabile AP","reproduzierbar bei Belastung, bessert in Ruhe / mit Nitro"],["Instabile AP","in Ruhe, zunehmend, neu aufgetreten → Notfall, Infarktvorbote"]]},
    {h:"Symptome", items:["Retrosternaler Druck-/Engegefühl","Ausstrahlung: li. Arm, Kiefer, Schulter, Oberbauch","Atemnot, Angst","Dauer meist < 15 Min (stabil)"]},
    {h:"Maßnahmen", items:["Belastung sofort stoppen, Ruhe","Oberkörper hoch lagern","Nitrospray (ärztlich verordnet)","Keine Besserung / >20 Min → Notarzt (Infarktverdacht)"]},
  ],
  merke:"<b>Instabile</b> Angina pectoris = Warnzeichen für einen Herzinfarkt → Notfall!"
},
{
  cat:"innere", title:"Myokardinfarkt", sub:"Herzinfarkt",
  sections:[
    {h:"Definition", text:"<mark>Absterben von Herzmuskelgewebe (Nekrose)</mark> durch anhaltenden Verschluss einer Koronararterie (meist durch Thrombus auf einer Plaque). <b>Notfall!</b>"},
    {h:"Symptome", items:["Starker, anhaltender Brustschmerz (>20 Min)","Ausstrahlung li. Arm, Kiefer, Rücken","Vernichtungsgefühl, Todesangst","Kaltschweißigkeit, Übelkeit","Atemnot","Nitro bringt KEINE Besserung","Bei Frauen/Diabetikern oft atypisch/stumm"]},
    {h:"Sofortmaßnahmen", items:["Notruf 112","Oberkörper hoch, beruhigen","Beengende Kleidung öffnen","Bei Kreislaufstillstand: Reanimation (CPR)"]},
    {h:"PT nach Infarkt (Reha)", items:["Frühmobilisation im Krankenhaus","Stufenweiser Belastungsaufbau (Herzgruppe)","HF- und Borg-gesteuertes Ausdauertraining","Sekundärprävention: Risikofaktoren"]},
  ],
  merke:"Unterschied zur Angina: Infarktschmerz hält an, ist stärker und spricht <b>nicht auf Nitro</b> an → Gewebe stirbt ab."
},
{
  cat:"innere", title:"Herzreha — Mobilisationsstufen", sub:"Belastungsaufbau nach Herzinfarkt/-OP",
  sections:[
    {h:"Prinzip", text:"Stufenweiser Belastungsaufbau (<mark>Mobstufe 0 → 3</mark>). Vorgabe der Stufe erfolgt <b>durch den behandelnden Arzt</b>. Vor jeder Einheit: Ruhepuls & Blutdruck messen."},
    {h:"Die Stufen", kv:[["Mobstufe 0","Bettruhe: passiv-aktiv, Atemtherapie, Muskelpumpe, Lagerung — HF max +10/Min über Ruhepuls"],["Mobstufe 1","Sitz Bettkante: Transfer RL–SL–Sitz, Schinkengehen, Sitzbalance — HF max +15/Min"],["Mobstufe 2","Gehen in der Ebene: Zimmer/Flur, Koordination, Ausdauer — HF max +20/Min"],["Mobstufe 3","Treppe: Gehstrecke & -zeit steigern, Treppe — HF max +30/Min"]]},
    {h:"Kontraindikationen (alle Stufen)", items:["Keine Isometrie","Keine Bauchpresse / Pressatmung (Valsalva)","Keine Pectoralisdehnung","Keine massive Vorlasterhöhung"]},
    {h:"Belastungsparameter überwachen", items:["Puls, Blutdruck, Atmung, ggf. Monitor-EKG, SO₂","Anstrengungsgefühl, Schwitzen, Hautfarbe (Blässe/Zyanose)","Retrosternales Druckgefühl / Angina pectoris","Schwindel, Übelkeit, Schwäche → abbrechen"]},
    {h:"Nach Herzkatheter / Stent (Leiste)", text:"Solange der Druckverband besteht: <b>Hüftgelenk nicht beugen</b> (Einführung über die Leiste, Gefäßwand muss verheilen)."},
    {h:"Nach Bypass-OP / Klappenersatz", items:["Keine gegengleichen Armbewegungen","Keine Flexion über 90° der Arme","Keine Seitlage, keine Bettgalgennutzung","Kein Druck/Zug auf die (Sternum-)Narbe"]},
  ],
  merke:"Stufe kommt <b>vom Arzt</b>. Immer: keine Isometrie, keine Pressatmung. Nach Katheter: Hüfte nicht beugen. Nach Bypass: Sternum-Narbe schonen."
},

/* ============== AUSDAUER & TRAINING ============== */
{
  cat:"ausdauer", title:"Herzfrequenz", sub:"HFmax & Trainingssteuerung",
  sections:[
    {h:"Definition", text:"Anzahl der <mark>Herzschläge pro Minute</mark> (bpm). Wichtigster Parameter zur Steuerung von Ausdauertraining."},
    {h:"Wichtige Werte", kv:[["Ruhe-HF","~60–80 bpm (Trainierte niedriger)"],["Maximale HF (Faustformel)","220 − Lebensalter"],["HF-Reserve","HFmax − Ruhe-HF"]]},
    {h:"Karvonen-Formel", text:"Trainings-HF = Ruhe-HF + (HFmax − Ruhe-HF) × Intensität(%). Berücksichtigt individuelle Ruhe-HF → genauer als reine %-HFmax."},
    {h:"Beispiel-Zonen (% HFmax)", kv:[["Regeneration","50–60 %"],["Grundlagenausdauer (Fettstoffw.)","60–70 %"],["Aerob","70–80 %"],["Anaerobe Schwelle","80–90 %"]]},
  ],
  merke:"Faustformel <b>HFmax = 220 − Alter</b>. Für individuelle Zonen: <b>Karvonen</b> (nutzt Ruhe-HF)."
},
{
  cat:"ausdauer", title:"Belastungsbereiche", sub:"Trainingszonen / Energiebereitstellung",
  sections:[
    {h:"Prinzip", text:"Je nach Intensität wird Energie unterschiedlich bereitgestellt — von <mark>aerob (mit O₂)</mark> bis <mark>anaerob (ohne O₂)</mark>."},
    {h:"Bereiche", kv:[["Kompensation/Regeneration","sehr niedrig, aktive Erholung"],["Grundlagenausdauer 1 (GA1)","aerob, Fettstoffwechsel, lange Dauer"],["Grundlagenausdauer 2 (GA2)","aerob-anaerober Übergang"],["Wettkampf-/anaerober Bereich","hohe Intensität, Laktatbildung"]]},
    {h:"Schwellen", items:["Aerobe Schwelle (~2 mmol/l Laktat)","Anaerobe Schwelle (~4 mmol/l, Laktat-Gleichgewicht)","Oberhalb: Laktat steigt an → Belastung nicht lange haltbar"]},
    {h:"Steuerung", items:["Herzfrequenz","Laktat","Subjektives Belastungsempfinden (Borg-Skala 6–20)","Watt / Geschwindigkeit"]},
  ],
  merke:"<b>GA1</b> = Basis jeder Ausdauerentwicklung (aerob, Fettstoffwechsel). Anaerobe Schwelle ~4 mmol/l Laktat."
},
{
  cat:"ausdauer", title:"Trainingsmethoden", sub:"Ausdauertraining",
  sections:[
    {h:"Dauermethode", items:["Kontinuierlich, gleichbleibende Intensität","Kein/kaum Pause","Verbessert Grundlagenausdauer, Fettstoffwechsel","Varianten: extensiv (lang, niedrig) / intensiv (kürzer, höher)"]},
    {h:"Intervallmethode", items:["Wechsel Belastung ↔ 'lohnende Pause' (unvollständige Erholung)","Höhere Intensitäten möglich","Verbessert aerobe + anaerobe Kapazität"]},
    {h:"Wiederholungsmethode", items:["Hohe Intensität, vollständige Pausen","Für Schnelligkeitsausdauer/Wettkampf"]},
    {h:"Wettkampf-/Kontrollmethode", items:["Einmalige Belastung wettkampfnah","Leistungsüberprüfung"]},
    {h:"Trainingsprinzipien", tags:["Reiz überschwellig","Progressive Belastungssteigerung","Superkompensation","Kontinuität","Periodisierung","Individualität"]},
  ],
  merke:"<b>Superkompensation</b>: Nach Belastung + Erholung steigt das Leistungsniveau über das Ausgangsniveau — richtiger Zeitpunkt des nächsten Reizes ist entscheidend."
},
{
  cat:"ausdauer", title:"Muskelkontraktion", sub:"Kontraktionsformen",
  sections:[
    {h:"Definition", text:"Aktive <mark>Spannungsentwicklung des Muskels</mark>. Nach Längenänderung unterscheidet man verschiedene Kontraktionsformen."},
    {h:"Formen", kv:[["Isometrisch","Spannung ohne Längenänderung (statisch halten)"],["Isotonisch","Längenänderung ohne Spannungsänderung (theoretisch)"],["Auxotonisch","Spannung UND Länge ändern sich (Alltagsrealität)"],["Konzentrisch","Muskel verkürzt sich (Last heben)"],["Exzentrisch","Muskel verlängert sich unter Spannung (Last bremsen)"]]},
    {h:"Gleitfilamenttheorie", text:"Aktin- und Myosinfilamente gleiten ineinander (Querbrückenzyklus) → Sarkomer verkürzt sich. Energie durch <b>ATP</b>, ausgelöst durch Ca²⁺."},
    {h:"PT-Bezug", items:["Exzentrisch = höchste Kraftentwicklung, aber Muskelkater-Risiko","Isometrie: gelenkschonend, z.B. bei Immobilisation","Kontraktionsform gezielt je nach Ziel wählen"]},
  ],
  merke:"<b>Exzentrisch</b> (bremsen, verlängern) erzeugt die größte Kraft und ist reizintensiv. Merksatz: kon<b>z</b>entrisch = <b>z</b>usammenziehen."
},

/* ============== ANATOMIE ============== */
{
  cat:"anat", title:"Muskel", sub:"Aufbau & Funktion",
  sections:[
    {h:"Muskelarten", kv:[["Skelettmuskel","quergestreift, willkürlich"],["Herzmuskel","quergestreift, unwillkürlich"],["glatte Muskulatur","unwillkürlich (Organe, Gefäße)"]]},
    {h:"Aufbau (grob → fein)", items:["Muskel → umhüllt von Faszie/Epimysium","Muskelfaserbündel (Perimysium)","Muskelfaser = Muskelzelle (Endomysium)","Myofibrille","Sarkomer (kleinste kontraktile Einheit)","Aktin (dünn) & Myosin (dick)"]},
    {h:"Fasertypen", kv:[["Typ I","langsam (slow twitch), ausdauernd, rot, aerob"],["Typ II","schnell (fast twitch), kraftvoll, weiß, anaerob"]]},
    {h:"Hilfseinrichtungen", tags:["Sehnen","Faszien","Schleimbeutel (Bursa)","Sehnenscheiden","Sesambeine"]},
    {h:"Funktionelle Rollen", items:["Agonist (Spieler)","Antagonist (Gegenspieler)","Synergist (Helfer)","Fixator/Stabilisator"]},
  ],
  merke:"Kleinste funktionelle Einheit = <b>Sarkomer</b>. Typ-I-Fasern = Ausdauer (rot), Typ-II-Fasern = Kraft/Schnelligkeit (weiß)."
},
{
  cat:"anat", title:"Knie — passiv", sub:"Articulatio genus · Bewegungsausmaße",
  sections:[
    {h:"Gelenktyp", text:"<mark>Dreh-Scharnier-Gelenk (Trochoginglymus)</mark> zwischen Femur, Tibia und Patella. Bewegung in 2 Freiheitsgraden."},
    {h:"Bewegungen & ROM (Neutral-Null)", kv:[["Flexion / Extension","~140° / 0° / 5–10° (Überstreckung)"],["Innen-/Außenrotation","nur bei gebeugtem Knie (~10°/20°)"]]},
    {h:"Wichtige Strukturen", items:["Menisken (medial C-förmig, lateral O-förmig)","Kreuzbänder (VKB, HKB) — a.-p. Stabilität","Seitenbänder (Innen-/Außenband) — seitliche Stabilität","Patellasehne, Quadrizeps"]},
    {h:"'Schlussrotation'", text:"Bei Endstreckung dreht die Tibia leicht nach außen → Knie 'verriegelt' (stabile Standphase)."},
    {h:"Passive Testung", items:["Passive Beweglichkeit prüfen, Endgefühl beurteilen","Schubladentest (Kreuzbänder)","Seitenband-Stabilitätstest","Meniskustests (z.B. Steinmann)"]},
  ],
  merke:"Rotation im Knie ist <b>nur in Beugung</b> möglich (in Streckung durch Bänder verriegelt)."
},
{
  cat:"anat", title:"Hüfte — passiv", sub:"Articulatio coxae · Bewegungsausmaße",
  sections:[
    {h:"Gelenktyp", text:"<mark>Kugelgelenk (Nussgelenk / Enarthrosis)</mark> — Hüftkopf tief in der Pfanne (Acetabulum), 3 Freiheitsgrade, sehr stabil."},
    {h:"Bewegungen & ROM (Neutral-Null)", kv:[["Flexion / Extension","~120–130° / 0° / 10–15°"],["Abduktion / Adduktion","~45° / 0° / 20–30°"],["Außen-/Innenrotation","~40–50° / 0° / 30–40°"]]},
    {h:"Bänder (sehr kräftig)", items:["Lig. iliofemorale (stärkstes Band des Körpers, hemmt Extension)","Lig. pubofemorale","Lig. ischiofemorale"]},
    {h:"Passive Testung", items:["Passive ROM in allen Ebenen","Endgefühl (meist fest-elastisch)","Thomas-Test (Hüftbeugekontraktur)","Kapselmuster beachten"]},
  ],
  merke:"Hüfte = <b>Kugelgelenk</b>, sehr stabil durch tiefe Pfanne + kräftige Bänder. Lig. iliofemorale = stärkstes Band des Körpers."
},
{
  cat:"anat", title:"Fuß — passiv", sub:"Sprunggelenke & Fußgewölbe",
  sections:[
    {h:"Gelenke", kv:[["OSG (oberes Sprunggelenk)","Scharniergelenk: Dorsalext./Plantarflex."],["USG (unteres Sprunggelenk)","Pro-/Supination, Inversion/Eversion"]]},
    {h:"Bewegungen & ROM", kv:[["Dorsalextension / Plantarflexion (OSG)","~20–30° / 0° / 40–50°"],["Supination / Pronation (USG)","~60° / 0° / 30°"]]},
    {h:"Fußgewölbe", items:["Längsgewölbe (medial/lateral)","Quergewölbe","Stabilisiert durch Bänder, Muskeln, Plantaraponeurose"]},
    {h:"Wichtige Bänder", items:["Außenband (Lig. talofibulare ant./post., calcaneofibulare) — häufig bei Supinationstrauma verletzt","Innenband (Lig. deltoideum) — sehr kräftig"]},
    {h:"Passive Testung", items:["Passive ROM OSG/USG","Aufklapptest Außenband","Talusvorschub (vorderes Schubladenzeichen)"]},
  ],
  merke:"Supinationstrauma ('Umknicken') verletzt das <b>Außenband</b> (v.a. Lig. talofibulare anterius)."
},

/* ============== KOMMUNIKATION ============== */
{
  cat:"komm", title:"Kommunikation", sub:"Grundlagen & Modelle",
  sections:[
    {h:"Watzlawick — 5 Axiome", items:["1. Man kann nicht NICHT kommunizieren","2. Jede Kommunikation hat Inhalts- & Beziehungsaspekt","3. Kommunikation ist Ursache und Wirkung (Interpunktion)","4. Digitale (verbal) & analoge (nonverbal) Modalitäten","5. Symmetrische (gleichrangig) vs. komplementäre (ungleich) Kommunikation"]},
    {h:"4-Ohren-Modell (Schulz v. Thun)", items:["Sachinhalt (worüber ich informiere)","Selbstoffenbarung (was ich von mir preisgebe)","Beziehung (was ich von dir halte)","Appell (was ich erreichen will)"]},
    {h:"Verbal vs. nonverbal", text:"Nonverbale Signale (Mimik, Gestik, Körperhaltung, Tonfall) machen einen <mark>Großteil der Wirkung</mark> aus — besonders wichtig in der Therapeut-Patient-Beziehung."},
    {h:"Aktives Zuhören", items:["Zuwendung, Blickkontakt","Paraphrasieren / Wiederholen","Nachfragen, Verbalisieren von Gefühlen","Nicht bewerten"]},
    {h:"PT-Praxis", items:["Verständliche, patientengerechte Sprache (kein Fachjargon)","Empathie & Vertrauen aufbauen","Compliance/Adhärenz fördern","Klare Instruktionen bei Übungen"]},
  ],
  merke:"<b>Watzlawick 1. Axiom:</b> „Man kann nicht nicht kommunizieren.“ Auch Schweigen ist Kommunikation."
},

/* ============== CHIRURGIE ============== */
{
  cat:"chir", title:"Frakturlehre", sub:"Knochenbrüche — Einteilung",
  sections:[
    {h:"Definition", text:"<mark>Kontinuitätsunterbrechung des Knochens</mark>, meist durch Trauma; auch pathologisch (Tumor, Osteoporose) oder als Ermüdungsbruch."},
    {h:"Frakturzeichen", kv:[["Sicher","Achsenfehlstellung, abnorme Beweglichkeit, Krepitation, sichtbare Fragmente"],["Unsicher","Schmerz, Schwellung, Hämatom, Funktionsverlust, Überwärmung"]]},
    {h:"Einteilung", items:["Geschlossen vs. offen (Weichteil-/Hautverletzung)","Vollständig vs. unvollständig (z.B. Grünholzfraktur bei Kindern)","Nach Verlauf: quer, schräg, spiral, Trümmer","Mit/ohne Dislokation (Verschiebung)"]},
    {h:"Therapieprinzipien", items:["Konservativ: Reposition, Retention (Gips), Ruhigstellung","Operativ (Osteosynthese): Platten, Schrauben, Nägel, Fixateur externe","Grundsatz: Reposition – Retention – Rehabilitation"]},
  ],
  merke:"<b>Sichere</b> Frakturzeichen (Fehlstellung, abnorme Beweglichkeit, Krepitation, sichtbare Fragmente) beweisen den Bruch — unsichere nicht."
},
{
  cat:"chir", title:"Frakturheilung — Parameter", sub:"Heilung & Einflussfaktoren",
  sections:[
    {h:"Heilungsarten", kv:[["Primär (direkt)","bei anatomischer Reposition + Kompression, ohne Kallus (Osteosynthese)"],["Sekundär (indirekt)","über Kallusbildung, bei konservativer Therapie / kleinem Spalt"]]},
    {h:"Phasen der Heilung", items:["1. Entzündungs-/Hämatomphase (Tage)","2. Granulations-/Weichkallus (Wochen)","3. Hartkallus / Knochenbildung","4. Remodeling / Umbau (Monate–Jahre)"]},
    {h:"Fördernde Faktoren", items:["Gute Durchblutung","Ausreichende Ruhigstellung + dosierte Belastung","Junge Patienten","Gute Ernährung (Kalzium, Vit. D, Eiweiß)"]},
    {h:"Störende Faktoren", items:["Instabilität, zu große Fragmentdistanz","Durchblutungsstörung, Rauchen","Infektion","Diabetes, hohes Alter, Kortison"]},
    {h:"Komplikation", text:"Ausbleibende Heilung → <b>Pseudarthrose</b> (Falschgelenk)."},
  ],
  merke:"Primäre Heilung = ohne Kallus (stabile Osteosynthese). Sekundäre Heilung = über <b>Kallus</b>. Rauchen & Instabilität stören massiv."
},
{
  cat:"chir", title:"Nahtmaterial & Nähte", sub:"Wundverschluss",
  sections:[
    {h:"Nahtmaterial", kv:[["Resorbierbar","löst sich auf (z.B. Vicryl) — für innere Schichten"],["Nicht resorbierbar","muss entfernt werden (z.B. Seide, Prolene) — Haut"],["Monofil","glatt, ein Faden — weniger Keimbesiedlung"],["Polyfil","geflochten, reißfester, aber Dochtwirkung"]]},
    {h:"Fäden ziehen (Richtwerte)", kv:[["Gesicht","~5 Tage"],["Kopf/Hals","~7 Tage"],["Rumpf/Arme","~10–12 Tage"],["Über Gelenken/Beine","~14 Tage"]]},
    {h:"Wundheilungsphasen", items:["1. Exsudation/Reinigung (Tag 1–4)","2. Granulation/Proliferation (Tag 4–14)","3. Regeneration/Reparation (Narbe, ab ~Woche 3)"]},
    {h:"PT-Relevanz", items:["Belastung/Zug auf frische Narbe vermeiden","Narbenmobilisation erst nach Wundschluss","Bewegungsausmaß je nach Heilungsphase steigern"]},
  ],
  merke:"Erst nach abgeschlossenem <b>Wundschluss</b> mit Narbenmobilisation beginnen; Zug auf frische Nähte vermeiden."
},
{
  cat:"chir", title:"SMART-Ziele", sub:"Zielformulierung in der Therapie",
  sections:[
    {h:"Prinzip", text:"Therapieziele sollen <mark>SMART</mark> formuliert werden, damit sie überprüfbar und motivierend sind."},
    {h:"SMART steht für", kv:[["S — Spezifisch","konkret, eindeutig formuliert"],["M — Messbar","überprüfbar (Zahlen, ROM, Strecke)"],["A — Attraktiv/Akzeptiert","für den Patienten bedeutsam & erreichbar (achievable)"],["R — Realistisch","tatsächlich erreichbar"],["T — Terminiert","mit klarem Zeitrahmen"]]},
    {h:"Beispiel", text:"Statt „Patient soll besser gehen“ → „Patient geht in 3 Wochen 200 m frei mit Unterarmgehstützen ohne Pause.“"},
    {h:"ICF-Bezug", items:["Ziele auf Ebene Körperfunktion, Aktivität, Teilhabe","Patientenzentriert formulieren","Nah- und Fernziele unterscheiden"]},
  ],
  merke:"SMART = <b>S</b>pezifisch, <b>M</b>essbar, <b>A</b>ttraktiv, <b>R</b>ealistisch, <b>T</b>erminiert. Immer patientenzentriert."
},
{
  cat:"chir", title:"Hüft-TEP", sub:"Hüft-Totalendoprothese",
  sections:[
    {h:"Definition", text:"<mark>Vollständiger künstlicher Ersatz des Hüftgelenks</mark> (Pfanne + Kopf/Schaft), meist bei fortgeschrittener Koxarthrose oder Schenkelhalsfraktur."},
    {h:"Zugangswege", kv:[["Dorsal/posterior","Luxationsgefahr bei Flexion + Add. + IRO"],["Lateral/anterolateral","Luxationsgefahr bei Ext. + Add. + ARO"]]},
    {h:"Verbotene Bewegungen (dorsaler Zugang!)", items:["Flexion über 90°","Adduktion über die Mittellinie","Innenrotation","→ Kombination = Luxationsgefahr!"]},
    {h:"Therapieziele PT", items:["Frühmobilisation, Gangschule mit Gehstützen","Luxationsprophylaxe schulen (Alltagsverhalten)","Kräftigung Glutealmuskulatur (Trendelenburg vermeiden)","ROM verbessern, Belastung nach Vorgabe steigern"]},
    {h:"Alltagshilfen", tags:["Erhöhter WC-Sitz","Keil zwischen Beinen","Greifhilfe","Keine tiefe Sitzgelegenheit"]},
  ],
  merke:"Dorsaler Zugang: <b>keine Flexion >90° + Adduktion + Innenrotation</b> — sonst Luxation. Alltagsschulung ist essenziell."
},
{
  cat:"chir", title:"Knie-TEP", sub:"Knie-Totalendoprothese",
  sections:[
    {h:"Definition", text:"<mark>Künstlicher Kniegelenkersatz</mark>, meist bei fortgeschrittener Gonarthrose. Ersatz der Gelenkflächen von Femur und Tibia (ggf. Patella)."},
    {h:"Therapieziele PT", items:["Extension voll erreichen (Streckdefizit vermeiden!)","Flexion mind. ~90° (Alltag) anstreben","Quadrizeps aktivieren (v.a. VMO)","Schwellung/Erguss reduzieren","Gangschulung, Belastungsaufbau"]},
    {h:"Wichtige Frühziele", items:["Aktive Streckung / Quadrizepsspannung","Kniescheibe mobil halten (Patellamobilisation)","Beugung schrittweise steigern","Gehen mit Gehhilfen"]},
    {h:"Häufige Probleme", items:["Streckdefizit (Beugekontraktur)","Schwellung, Erguss","Quadrizepsinsuffizienz","Bewegungseinschränkung → ggf. Mobilisation"]},
  ],
  merke:"Beim Knie-TEP hat die <b>volle Streckung</b> (Extension = 0°) Priorität — ein Streckdefizit stört den Gang massiv."
},
{
  cat:"chir", title:"VKB-Ruptur", sub:"Vorderes Kreuzband — Riss",
  sections:[
    {h:"Definition", text:"Riss des <mark>vorderen Kreuzbandes</mark>, das die Tibia gegen ein Vorgleiten nach vorne sichert. Häufig Sportverletzung (Fußball, Ski)."},
    {h:"Unhappy Triad", text:"Kombinationsverletzung: <b>VKB + Innenband + Innenmeniskus</b> (typisch bei Valgus-Außenrotations-Trauma)."},
    {h:"Symptome", items:["Oft hörbares „Knacken“ beim Trauma","Sofortige Schwellung (Hämarthros)","Instabilitätsgefühl („Giving way“)","Schmerz, eingeschränkte Beweglichkeit"]},
    {h:"Tests", items:["Vorderer Schubladentest","Lachman-Test (sensitivster Test)","Pivot-Shift-Test"]},
    {h:"Therapie & PT", items:["Konservativ oder OP (Kreuzbandplastik, z.B. Semitendinosus/Patellasehne)","Postop: Schutz der Plastik, Bewegungslimits nach Schema","Quadrizeps- & Hamstring-Kräftigung","Propriozeption/Koordination (Kernstück!)","Return to Sport erst nach Reha-Kriterien"]},
  ],
  merke:"<b>Lachman-Test</b> = sensitivster Test. Reha-Schwerpunkt: Propriozeption + muskuläre Stabilisierung (Hamstrings schützen die Plastik)."
},
{
  cat:"chir", title:"Meniskusläsion", sub:"Meniskusriss",
  sections:[
    {h:"Definition", text:"<mark>Riss des Meniskus</mark> (Faserknorpel im Knie, Innen- & Außenmeniskus). Traumatisch (Dreh-Beuge-Trauma) oder degenerativ (Verschleiß)."},
    {h:"Innen- vs. Außenmeniskus", text:"<b>Innenmeniskus</b> häufiger verletzt (fester mit Innenband/Kapsel verwachsen, weniger beweglich)."},
    {h:"Symptome", items:["Belastungs-/Drehschmerz im Gelenkspalt","Schwellung","Einklemmungsgefühl, evtl. Blockierung","Streckhemmung bei Korbhenkelriss"]},
    {h:"Tests", items:["Steinmann I und II","McMurray-Test","Payr-Zeichen","Apley-Grinding-Test"]},
    {h:"Therapie & PT", items:["Konservativ bei kleinen/degenerativen Rissen","OP: Naht (durchblutete Außenzone) oder Teilresektion","Postop Naht: eingeschränkte Beugung/Belastung nach Schema","Quadrizeps-Kräftigung, Beweglichkeit, Koordination"]},
  ],
  merke:"Der <b>Innenmeniskus</b> reißt häufiger. Nur die durchblutete Außenzone („rot-rot“) heilt gut → dort wird genäht."
},
{
  cat:"chir", title:"Pseudarthrose", sub:"Falschgelenk",
  sections:[
    {h:"Definition", text:"<mark>Ausbleibende knöcherne Heilung einer Fraktur</mark> nach >6 Monaten → falsche Beweglichkeit an der Bruchstelle („Falschgelenk“)."},
    {h:"Formen", kv:[["Hypertroph (vital)","gute Durchblutung, zu viel Bewegung/Instabilität → Kallus, aber keine Überbrückung"],["Atroph (avital)","schlechte Durchblutung, biologisch inaktiv"]]},
    {h:"Ursachen", items:["Instabilität / mangelnde Ruhigstellung","Durchblutungsstörung","Infektion","Zu großer Frakturspalt, Interposition von Weichteilen","Rauchen, Diabetes"]},
    {h:"Therapie", items:["Hypertroph: Stabilisierung (Osteosynthese)","Atroph: Anfrischen + Knochentransplantat (Spongiosa)","Ggf. Infektsanierung","PT: Belastungsaufbau nach Stabilität"]},
  ],
  merke:"Hypertrophe Pseudarthrose = zu viel <b>Bewegung</b> (braucht Stabilität). Atrophe = zu wenig <b>Biologie</b> (braucht Knochen/Durchblutung)."
},
{
  cat:"chir", title:"Osteomyelitis", sub:"Knochen(mark)entzündung",
  sections:[
    {h:"Definition", text:"<mark>Infektion des Knochens und Knochenmarks</mark>, meist bakteriell (häufig <b>Staphylococcus aureus</b>)."},
    {h:"Entstehungswege", items:["Endogen/hämatogen (über die Blutbahn)","Exogen (offene Fraktur, OP, Wunde)"]},
    {h:"Verlaufsformen", kv:[["Akut","Fieber, starke Schmerzen, Überwärmung, Rötung"],["Chronisch","Fistelbildung, Sequester (abgestorbener Knochen), rezidivierend"]]},
    {h:"Symptome", items:["Lokal: Schmerz, Schwellung, Überwärmung, Rötung","Allgemein: Fieber, Krankheitsgefühl","Bewegungseinschränkung"]},
    {h:"Therapie & PT", items:["Antibiotika (oft langfristig)","OP: Débridement, Sequesterentfernung","Ruhigstellung akut, danach vorsichtige Mobilisation","Kontrakturprophylaxe, angepasster Belastungsaufbau"]},
  ],
  merke:"Häufigster Erreger: <b>Staphylococcus aureus</b>. Chronische Form → Fistel & Sequester."
},
{
  cat:"chir", title:"Patellafraktur & -luxation", sub:"Kniescheibe",
  sections:[
    {h:"Patellafraktur", text:"Bruch der Kniescheibe, meist durch <mark>direktes Trauma</mark> (Sturz auf das Knie, „Dashboard-Verletzung“). Der Streckapparat kann unterbrochen sein."},
    {h:"Fraktur — Symptome", items:["Schmerz, Schwellung, Hämatom","Aktive Streckung oft nicht möglich (Streckapparat!)","Tastbare Delle bei Dislokation"]},
    {h:"Patellaluxation", text:"Verrenkung der Kniescheibe, fast immer nach <b>lateral</b> (außen). Begünstigt durch Dysplasie, Genu valgum, schwachen VMO, Bandlaxität."},
    {h:"Luxation — Symptome / Faktoren", items:["Verschobene Patella, Federung","Instabilitätsgefühl, Angst (Apprehension-Test positiv)","Rezidivneigung"]},
    {h:"Therapie & PT", items:["Fraktur: bei Dislokation OP (Zuggurtung), sonst konservativ","Luxation: Reposition, meist konservativ, ggf. OP","PT: VMO-Training (medialer Zug!), Patellamobilisation, Streckapparat kräftigen"]},
  ],
  merke:"Patellaluxation fast immer nach <b>lateral</b> → PT stärkt den <b>M. vastus medialis (VMO)</b> für medialen Zug."
},
{
  cat:"chir", title:"Gangzyklus", sub:"Ganganalyse",
  sections:[
    {h:"Definition", text:"Ein <mark>Gangzyklus (Doppelschritt)</mark> = vom ersten Bodenkontakt eines Fußes bis zum erneuten Bodenkontakt desselben Fußes."},
    {h:"Zwei Hauptphasen", kv:[["Standphase","~60% — Fuß am Boden"],["Schwungphase","~40% — Fuß in der Luft"]]},
    {h:"Standphase (Unterphasen)", items:["Initialer Bodenkontakt (Fersenkontakt)","Belastungsantwort (loading response)","Mittlere Standphase (mid stance)","Terminale Standphase (Fersenablösung)","Vorschwung (pre-swing / Zehenablösung)"]},
    {h:"Schwungphase (Unterphasen)", items:["Initialer Schwung","Mittlerer Schwung","Terminaler Schwung"]},
    {h:"Doppelunterstützung", text:"Zweimal pro Zyklus stehen <b>beide Füße gleichzeitig</b> am Boden (~20%). Beim Laufen entfällt sie (Flugphase)."},
    {h:"PT-Bezug", items:["Gangabweichungen erkennen (Trendelenburg, Duchenne, Steppergang)","Ursachen zuordnen (muskulär, neurologisch, Schmerz)","Gangschulung gezielt einsetzen"]},
  ],
  merke:"Standphase ~60%, Schwungphase ~40%. Beim <b>Gehen</b> gibt es Doppelunterstützung, beim <b>Laufen</b> eine Flugphase."
},
{
  cat:"chir", title:"Supinationstrauma", sub:"OSG-Distorsion ('Umknicken')",
  sections:[
    {h:"Definition", text:"<mark>Umknicken des Fußes nach innen (Supination)</mark> → Überdehnung/Riss der <b>Außenbänder</b> des oberen Sprunggelenks. Häufigste Sportverletzung."},
    {h:"Betroffene Bänder (Reihenfolge)", items:["1. Lig. talofibulare anterius (zuerst & häufigste)","2. Lig. calcaneofibulare","3. Lig. talofibulare posterius (nur bei schwerem Trauma)"]},
    {h:"Symptome", items:["Schmerz & Schwellung am Außenknöchel","Hämatom","Belastungsschmerz","Instabilitätsgefühl (bei Bandruptur)"]},
    {h:"Erstversorgung — PECH", kv:[["P","Pause"],["E","Eis (Kühlung)"],["C","Compression (Druckverband)"],["H","Hochlagern"]]},
    {h:"Therapie & PT", items:["Meist konservativ (Orthese/Schiene)","Frühfunktionelle Behandlung","<b>Propriozeptions-/Stabilisationstraining</b> (Wackelbrett!)","Peronealmuskulatur kräftigen (aktive Stabilisatoren)"]},
  ],
  merke:"Erstversorgung = <b>PECH</b>-Schema. Reha-Kern: <b>Propriozeption</b> + Peroneus-Kräftigung gegen die Rezidivneigung."
},

/* ============== NEUROLOGIE ============== */
{
  cat:"neuro", title:"Schlaganfall", sub:"Apoplex / Stroke",
  sections:[
    {h:"Definition", text:"<mark>Plötzliche Durchblutungsstörung des Gehirns</mark> → Ausfall von Hirnfunktionen. <b>Notfall — „Time is brain“.</b>"},
    {h:"Zwei Formen", kv:[["Ischämisch (~85%)","Gefäßverschluss (Thrombus/Embolie) → Minderdurchblutung"],["Hämorrhagisch (~15%)","Hirnblutung (geplatztes Gefäß)"]]},
    {h:"FAST-Test", kv:[["F — Face","Gesichtslähmung (hängender Mundwinkel)"],["A — Arms","Armschwäche (ein Arm sinkt)"],["S — Speech","Sprachstörung"],["T — Time","sofort Notruf 112!"]]},
    {h:"Typische Symptome", items:["Halbseitenlähmung (Hemiparese/-plegie) — kontralateral!","Sensibilitätsstörungen","Sprachstörung (Aphasie), Sprechstörung (Dysarthrie)","Gesichtsfeldausfall, Neglect","Spastik (im Verlauf)"]},
    {h:"Therapieziele PT", items:["Frühmobilisation, Kontrakturprophylaxe","Fazilitation normaler Bewegung (z.B. Bobath)","Tonusregulation (Spastik ↔ Hypotonie)","Gang- & Alltagstraining, Selbstständigkeit","Sturzprophylaxe"]},
  ],
  merke:"Läsion ist <b>kontralateral</b> zur Lähmung (rechte Hirnhälfte → linke Körperseite). <b>FAST</b> zur Erkennung, „Time is brain“."
},
{
  cat:"neuro", title:"Gehirn", sub:"Aufbau & Einteilung",
  sections:[
    {h:"Hauptabschnitte", items:["Großhirn (Cerebrum) — 2 Hemisphären","Zwischenhirn (Diencephalon) — Thalamus, Hypothalamus","Mittelhirn (Mesencephalon)","Kleinhirn (Cerebellum) — Koordination, Gleichgewicht","Hirnstamm (Pons, Medulla oblongata) — vitale Zentren"]},
    {h:"Hirnhäute (Meningen)", items:["Dura mater (harte Hirnhaut)","Arachnoidea (Spinnwebenhaut)","Pia mater (weiche Hirnhaut)"]},
    {h:"Funktionelle Systeme", items:["Pyramidales System (Willkürmotorik)","Extrapyramidales System (Bewegungssteuerung, Tonus)","Limbisches System (Emotion, Gedächtnis)"]},
    {h:"Versorgung", text:"Blutversorgung über <b>Circulus arteriosus (Willisii)</b> — Verbindung von A. carotis interna & A. vertebralis/basilaris."},
  ],
  merke:"Kleinhirn = <b>Koordination & Gleichgewicht</b>. Hirnstamm = vitale Zentren (Atmung, Kreislauf). Großhirn = Willkür & höhere Funktionen."
},
{
  cat:"neuro", title:"Hirnnerven", sub:"12 Nervi craniales",
  sections:[
    {h:"Übersicht (I–XII)", kv:[["I","N. olfactorius — Riechen"],["II","N. opticus — Sehen"],["III","N. oculomotorius — Augenbewegung, Pupille"],["IV","N. trochlearis — Auge (M. obliquus sup.)"],["V","N. trigeminus — Gesichtssensibilität, Kauen"],["VI","N. abducens — Auge (M. rectus lat.)"],["VII","N. facialis — Mimik, Geschmack"],["VIII","N. vestibulocochlearis — Hören & Gleichgewicht"],["IX","N. glossopharyngeus — Schlucken, Geschmack"],["X","N. vagus — Parasympathikus, Organe"],["XI","N. accessorius — M. sternocleidom., M. trapezius"],["XII","N. hypoglossus — Zungenmotorik"]]},
    {h:"Merksatz (Reihenfolge I–XII)", text:"„<b>O</b>nkel <b>O</b>tto <b>O</b>rgelt <b>T</b>äglich, <b>T</b>rotzdem <b>A</b>bends <b>F</b>ehlt <b>V</b>ihm <b>G</b>eld, <b>V</b>ater <b>A</b>chims <b>H</b>ilfe.“"},
    {h:"PT-relevant", items:["N. facialis (VII): Fazialisparese → Mimik einseitig gelähmt","N. vestibulocochlearis (VIII): Schwindel, Gleichgewicht","N. trigeminus (V): Gesichtssensibilität"]},
  ],
  merke:"12 Hirnnervenpaare. VII (Facialis) = Mimik, VIII (Vestibulocochlearis) = Hören/Gleichgewicht — beide oft PT-relevant."
},
{
  cat:"neuro", title:"Neurologische Symptome", sub:"Zentral vs. peripher",
  sections:[
    {h:"Zentrale Lähmung (1. Motoneuron)", items:["Spastik (Tonus ↑)","Gesteigerte Reflexe (Hyperreflexie)","Pyramidenbahnzeichen (z.B. Babinski positiv)","Kein/wenig Muskelschwund","Pathologische Massenbewegungen"]},
    {h:"Periphere Lähmung (2. Motoneuron)", items:["Schlaffe Lähmung (Tonus ↓)","Abgeschwächte/fehlende Reflexe","Muskelatrophie (deutlich)","Faszikulationen","Babinski negativ"]},
    {h:"Weitere Symptome", tags:["Aphasie (Sprache)","Dysarthrie (Sprechen)","Dysphagie (Schlucken)","Ataxie (Koordination)","Neglect","Apraxie","Sensibilitätsstörungen"]},
  ],
  merke:"<b>Zentral</b> = spastisch, Reflexe ↑, Babinski +, kaum Atrophie. <b>Peripher</b> = schlaff, Reflexe ↓, starke Atrophie."
},
{
  cat:"neuro", title:"Sensibilität", sub:"Oberflächen- & Tiefensensibilität",
  sections:[
    {h:"Oberflächensensibilität (exterozeptiv)", items:["Berührung / Druck","Temperatur (warm/kalt)","Schmerz (nozizeptiv)"]},
    {h:"Tiefensensibilität (propriozeptiv)", items:["Lagesinn (Stellung der Gelenke)","Bewegungssinn (Kinästhesie)","Kraft-/Widerstandssinn","Vibrationsempfinden (Pallästhesie)"]},
    {h:"Qualitätsstörungen", kv:[["Hypästhesie","vermindertes Empfinden"],["Anästhesie","fehlendes Empfinden"],["Hyperästhesie","gesteigertes Empfinden"],["Parästhesie","Missempfindung (Kribbeln)"],["Dysästhesie","unangenehme/veränderte Empfindung"]]},
    {h:"PT-Testung & Training", items:["Berührung (Wattebausch), Spitz/Stumpf, warm/kalt","Lagesinn: Gelenkstellung nachstellen lassen","Zwei-Punkt-Diskrimination","Sensibilitätstraining, Desensibilisierung"]},
  ],
  merke:"<b>Propriozeption</b> (Tiefensensibilität) = Lage-, Bewegungs-, Kraftsinn — Grundlage für Koordination & Gleichgewicht."
},
{
  cat:"neuro", title:"Spastik", sub:"Erhöhter Muskeltonus",
  sections:[
    {h:"Definition", text:"<mark>Geschwindigkeitsabhängige Tonuserhöhung</mark> der Muskulatur mit gesteigerten Reflexen — Folge einer Schädigung des <b>1. Motoneurons / der Pyramidenbahn</b>."},
    {h:"Merkmale", items:["Tonus steigt bei schneller passiver Dehnung","„Taschenmesser-Phänomen“ (plötzliches Nachgeben)","Gesteigerte Muskeleigenreflexe","Kloni möglich","Typische Muster (z.B. Wernicke-Mann-Haltung)"]},
    {h:"Wernicke-Mann (nach Schlaganfall)", text:"Arm: Beugemuster (Flexion). Bein: Streckmuster (Extension) → Zirkumduktionsgang."},
    {h:"Messung", text:"<b>Modified Ashworth Scale</b> (0–4): Beurteilung des Widerstands bei passiver Bewegung."},
    {h:"Therapieziele PT", items:["Tonusregulation (Dehnung, langsame Mobilisation)","Kontrakturprophylaxe, Lagerung","Fazilitation selektiver Bewegung (Bobath)","Reize vermeiden, die Tonus erhöhen (Schmerz, Stress, Kälte)"]},
  ],
  merke:"Spastik ist <b>geschwindigkeitsabhängig</b> → langsame Bewegungen, schnelle Dehnung vermeiden. Messung: Modified Ashworth Scale."
},
{
  cat:"neuro", title:"Pyramidenbahn", sub:"Tractus corticospinalis",
  sections:[
    {h:"Definition", text:"<mark>Wichtigste Bahn der Willkürmotorik</mark> (Feinmotorik). Verläuft vom Großhirn (motorischer Kortex) bis zu den Motoneuronen im Rückenmark."},
    {h:"Verlauf & Kreuzung", text:"Ursprung im Gyrus praecentralis → durch Capsula interna & Hirnstamm → <b>Kreuzung (Decussatio) in der Medulla oblongata</b> (~80%) → Vorderhorn RM."},
    {h:"Bedeutung der Kreuzung", text:"Weil die meisten Fasern kreuzen, steuert jede Hirnhälfte die <b>gegenüberliegende (kontralaterale)</b> Körperseite → erklärt Halbseitenlähmung bei Schlaganfall."},
    {h:"Schädigungszeichen", items:["Zentrale (spastische) Lähmung","Positive Pyramidenbahnzeichen (Babinski)","Reflexsteigerung","Verlust der Feinmotorik"]},
  ],
  merke:"Pyramidenbahn = <b>Willkür-/Feinmotorik</b>, kreuzt in der Medulla oblongata → jede Hemisphäre steuert die Gegenseite."
},
{
  cat:"neuro", title:"Extrapyramidales System", sub:"EPS",
  sections:[
    {h:"Definition", text:"Motorisches System <mark>außerhalb der Pyramidenbahn</mark>. Steuert <b>unwillkürliche Bewegungsanteile</b>: Muskeltonus, Haltung, Mitbewegungen, automatisierte Bewegungen."},
    {h:"Beteiligte Strukturen", items:["Basalganglien (Striatum, Pallidum, Nucleus subthalamicus)","Substantia nigra","Nucleus ruber","Formatio reticularis","Verbindungen zu Kleinhirn & Thalamus"]},
    {h:"Aufgaben", items:["Regulation des Muskeltonus","Haltungs- & Stützmotorik","Automatisierte Bewegungen (z.B. Mitschwingen der Arme)","Bewegungsstart & -stopp"]},
    {h:"Störungen (Beispiele)", kv:[["Parkinson","Dopaminmangel (Substantia nigra): Rigor, Tremor, Akinese"],["Chorea/Dyskinesien","Überschießende, unwillkürliche Bewegungen"]]},
  ],
  merke:"Pyramidal = <b>willkürliche Feinmotorik</b>; extrapyramidal = <b>unwillkürlicher Tonus/Haltung</b> (Basalganglien). Parkinson = EPS-Störung."
},
{
  cat:"neuro", title:"Reflexe", sub:"Aufgabe · Funktion · Einteilung",
  sections:[
    {h:"Definition", text:"<mark>Unwillkürliche, stereotype Antwort</mark> auf einen Reiz über einen Reflexbogen (Rezeptor → afferent → Zentrum → efferent → Effektor)."},
    {h:"Aufgabe / Funktion", items:["Schutz (z.B. Wegziehreflex)","Haltungs- & Gleichgewichtssicherung","Regulation des Muskeltonus","Schnelle Reaktion ohne Umweg über das Großhirn"]},
    {h:"Einteilung", kv:[["Eigenreflex","Reiz & Antwort im selben Organ, monosynaptisch (z.B. Patellarsehnenreflex) — nicht ermüdbar"],["Fremdreflex","Reiz & Antwort in verschiedenen Organen, polysynaptisch (z.B. Bauchhautreflex) — ermüdbar"]]},
    {h:"Pathologische Reflexe", items:["Babinski (Pyramidenbahnzeichen)","frühkindliche Reflexe, die persistieren/wiederkehren"]},
    {h:"Beispiele Eigenreflexe (PT-Testung)", tags:["PSR (Patella)","ASR (Achilles)","BSR (Bizeps)","TSR (Trizeps)"]},
  ],
  merke:"<b>Eigenreflex</b> = monosynaptisch, nicht ermüdbar (PSR). <b>Fremdreflex</b> = polysynaptisch, ermüdbar. Babinski = pathologisch (zentrale Läsion)."
},
{
  cat:"neuro", title:"Pusher-Symptomatik", sub:"'Pushen' nach Schlaganfall",
  sections:[
    {h:"Definition", text:"Störung nach Schlaganfall, bei der Patienten aktiv <mark>zur gelähmten (betroffenen) Seite drücken</mark> und einer Korrektur zur Mitte Widerstand leisten."},
    {h:"Ursache", text:"Gestörte Wahrnehmung der <b>Körpervertikalen</b> — die eigene Körpermitte wird zur gelähmten Seite hin fehlwahrgenommen; die visuelle Vertikale bleibt oft intakt."},
    {h:"Merkmale", items:["Drücken mit der nicht betroffenen Seite zur betroffenen Seite","Angst & Widerstand gegen passive Korrektur","Sturzgefahr zur gelähmten Seite","Erschwertes Sitzen, Stehen, Transfer"]},
    {h:"Therapieziele PT", items:["Vertikale neu erarbeiten (visuelle Orientierung, senkrechte Referenzen nutzen)","Patient selbst Fehlstellung erkennen & korrigieren lassen","Gewichtsverlagerung zur nicht betroffenen Seite üben","Nicht dagegen 'kämpfen' — über die intakte visuelle Wahrnehmung arbeiten"]},
  ],
  merke:"Beim Pushen die <b>visuelle Vertikale</b> nutzen (senkrechte Bezugslinien), da diese meist intakt ist — nicht gegen den Druck kämpfen."
},

];
