/* ============================================================
   Lightweight i18n for the results dashboard.
   - T: translation map keyed by the EXACT English source string.
   - translateData(d): returns a translated copy of the data object.
   - translateDOM(root): translates the fixed UI text nodes after render.
   - tr(s): translate a single string (for JS-built bits: charts, reco).
   English is the source; missing keys fall back to English.
   ============================================================ */
(function () {
  const KEY = 'effx-lang';
  window.LANG = localStorage.getItem(KEY) || 'en';
  window.setLang = function (l) { localStorage.setItem(KEY, l); window.LANG = l; };

  const T = {
    /* ── Navigation ── */
    "Coordinator": { nl: "Coördinator", de: "Koordinator" },
    "Home": { nl: "Home", de: "Home" },
    "Surveys": { nl: "Onderzoeken", de: "Befragungen" },
    "All surveys": { nl: "Alle onderzoeken", de: "Alle Befragungen" },
    "Projects": { nl: "Projecten", de: "Projekte" },
    "360 feedback": { nl: "360 feedback", de: "360-Feedback" },
    "Organization": { nl: "Organisatie", de: "Organisation" },
    "Support wiki": { nl: "Support-wiki", de: "Support-Wiki" },

    /* ── Breadcrumb / header ── */
    "Back": { nl: "Terug", de: "Zurück" },
    "Engagement Survey, 2023–2026": { nl: "Betrokkenheidsonderzoek, 2023–2026", de: "Engagement-Befragung, 2023–2026" },
    "Results": { nl: "Resultaten", de: "Ergebnisse" },
    "Filter": { nl: "Filter", de: "Filter" },
    "Engagement Survey 2026 Q2": { nl: "Betrokkenheidsonderzoek 2026 Q2", de: "Engagement-Befragung 2026 Q2" },
    "Engagement Survey 2026 Q3": { nl: "Betrokkenheidsonderzoek 2026 Q3", de: "Engagement-Befragung 2026 Q3" },

    /* ── Tabs ── */
    "Overview": { nl: "Overzicht", de: "Übersicht" },
    "Focus View": { nl: "Focusweergave", de: "Fokusansicht" },
    "Themes": { nl: "Thema's", de: "Themen" },
    "Questions": { nl: "Vragen", de: "Fragen" },
    "Open answers": { nl: "Open antwoorden", de: "Offene Antworten" },
    "Topics & Ideas": { nl: "Onderwerpen & ideeën", de: "Themen & Ideen" },
    "Reports": { nl: "Rapporten", de: "Berichte" },
    "Actions": { nl: "Acties", de: "Maßnahmen" },

    /* ── AI summary ── */
    "AI Summary": { nl: "AI-samenvatting", de: "KI-Zusammenfassung" },
    "Hide summary": { nl: "Samenvatting verbergen", de: "Zusammenfassung ausblenden" },
    "More information": { nl: "Meer informatie", de: "Mehr Informationen" },
    "Show more": { nl: "Meer tonen", de: "Mehr anzeigen" },
    "Show less": { nl: "Minder tonen", de: "Weniger anzeigen" },
    "Strengths": { nl: "Sterke punten", de: "Stärken" },
    "Growth Areas": { nl: "Groeigebieden", de: "Wachstumsfelder" },
    "Suggested actions": { nl: "Voorgestelde acties", de: "Vorgeschlagene Maßnahmen" },
    "This AI summary may not be fully accurate—please review before making decisions.": { nl: "Deze AI-samenvatting is mogelijk niet volledig accuraat—controleer ze voordat u beslissingen neemt.", de: "Diese KI-Zusammenfassung ist möglicherweise nicht vollständig korrekt—bitte prüfen Sie sie, bevor Sie Entscheidungen treffen." },
    "Learn more": { nl: "Lees meer", de: "Mehr erfahren" },
    "This summary was helpful": { nl: "Deze samenvatting was nuttig", de: "Diese Zusammenfassung war hilfreich" },
    "Not really helpful": { nl: "Niet echt nuttig", de: "Nicht wirklich hilfreich" },

    /* ── Cards ── */
    "Effectiveness": { nl: "Effectiviteit", de: "Effektivität" },
    "Performance environment": { nl: "Werkomgeving", de: "Leistungsumfeld" },
    "Engagement": { nl: "Betrokkenheid", de: "Engagement" },
    "Engagement score": { nl: "Betrokkenheidsscore", de: "Engagement-Wert" },
    "Employees that are inspired and energized by their work.": { nl: "Medewerkers die geïnspireerd en energiek zijn door hun werk.", de: "Mitarbeitende, die durch ihre Arbeit inspiriert und voller Energie sind." },
    "Employees that are inspired and energized by their work": { nl: "Medewerkers die geïnspireerd en energiek zijn door hun werk", de: "Mitarbeitende, die durch ihre Arbeit inspiriert und voller Energie sind" },
    "Shows to what extent employees would recommend your organization": { nl: "Laat zien in welke mate medewerkers uw organisatie zouden aanbevelen", de: "Zeigt, inwieweit Mitarbeitende Ihre Organisation weiterempfehlen würden" },
    "Promoters": { nl: "Promoters", de: "Promotoren" },
    "Passives": { nl: "Passieven", de: "Passive" },
    "Detractors": { nl: "Criticasters", de: "Kritiker" },
    "Current": { nl: "Huidig", de: "Aktuell" },
    "Previous": { nl: "Vorig", de: "Vorherige" },
    "Response rate": { nl: "Responspercentage", de: "Rücklaufquote" },
    "Participants": { nl: "Deelnemers", de: "Teilnehmende" },
    "Workload": { nl: "Werkdruk", de: "Arbeitsbelastung" },
    "Employees who find their workload just right.": { nl: "Medewerkers die hun werkdruk precies goed vinden.", de: "Mitarbeitende, die ihre Arbeitsbelastung als genau richtig empfinden." },
    "Retention": { nl: "Behoud", de: "Mitarbeiterbindung" },
    "Employees who want to stay at their current role.": { nl: "Medewerkers die in hun huidige functie willen blijven.", de: "Mitarbeitende, die in ihrer aktuellen Rolle bleiben möchten." },
    "Well-being": { nl: "Welzijn", de: "Wohlbefinden" },
    "How well employees can maintain a good work-life balance.": { nl: "Hoe goed medewerkers een goede balans tussen werk en privé kunnen behouden.", de: "Wie gut Mitarbeitende eine ausgewogene Work-Life-Balance halten können." },
    "Feel-good topics": { nl: "Feelgood-onderwerpen", de: "Feel-good-Themen" },
    "What topic are you most proud of within Novanta?": { nl: "Op welk onderwerp ben je het meest trots binnen Novanta?", de: "Auf welches Thema sind Sie bei Novanta am stolzesten?" },
    "times selected": { nl: "keer geselecteerd", de: "mal ausgewählt" },
    "View Topics & Ideas": { nl: "Onderwerpen & ideeën bekijken", de: "Themen & Ideen ansehen" },
    "Highest scores": { nl: "Hoogste scores", de: "Höchste Werte" },
    "Lowest scores": { nl: "Laagste scores", de: "Niedrigste Werte" },
    "Pin card": { nl: "Kaart vastzetten", de: "Karte anheften" },
    "Card settings": { nl: "Kaartinstellingen", de: "Karteneinstellungen" },
    "Correlating questions": { nl: "Correlerende vragen", de: "Korrelierende Fragen" },

    /* ── Topics ── */
    "Collaboration between teams": { nl: "Samenwerking tussen teams", de: "Zusammenarbeit zwischen Teams" },
    "Our feedback culture very long example": { nl: "Onze feedbackcultuur heel lang voorbeeld", de: "Unsere Feedbackkultur sehr langes Beispiel" },
    "Our feedback culture": { nl: "Onze feedbackcultuur", de: "Unsere Feedbackkultur" },

    /* ── Questions (high/low scores) ── */
    "I feel comfortable within the team": { nl: "Ik voel me op mijn gemak binnen het team", de: "Ich fühle mich im Team wohl" },
    "Our team trusts one another": { nl: "Ons team vertrouwt elkaar", de: "Unser Team vertraut einander" },
    "During a team meeting, everyone has a fair chance to speak up": { nl: "Tijdens een teamoverleg krijgt iedereen een eerlijke kans om iets te zeggen", de: "In Teambesprechungen hat jede Person eine faire Gelegenheit, sich zu äußern" },
    "There is a relaxed atmosphere within our team": { nl: "Er heerst een ontspannen sfeer binnen ons team", de: "In unserem Team herrscht eine entspannte Atmosphäre" },
    "I enjoy my work": { nl: "Ik heb plezier in mijn werk", de: "Ich habe Freude an meiner Arbeit" },
    "I know how to carry out my tasks": { nl: "Ik weet hoe ik mijn taken moet uitvoeren", de: "Ich weiß, wie ich meine Aufgaben ausführen soll" },
    "I receive enough feedback on my work": { nl: "Ik krijg voldoende feedback op mijn werk", de: "Ich erhalte genügend Feedback zu meiner Arbeit" },
    "I am satisfied with my work": { nl: "Ik ben tevreden met mijn werk", de: "Ich bin mit meiner Arbeit zufrieden" },
    "We honour agreements in our team": { nl: "We komen afspraken na in ons team", de: "Wir halten Vereinbarungen in unserem Team ein" },
    "I see ample opportunities to develop further": { nl: "Ik zie volop mogelijkheden om me verder te ontwikkelen", de: "Ich sehe viele Möglichkeiten, mich weiterzuentwickeln" },

    /* ── Effectiveness side panel ── */
    "How effective is a group in reaching their goals, staying innovative and dealing with change in an ever changing organization.": { nl: "Hoe effectief is een groep in het behalen van doelen, innovatief blijven en omgaan met verandering in een continu veranderende organisatie.", de: "Wie effektiv ist eine Gruppe darin, ihre Ziele zu erreichen, innovativ zu bleiben und mit Veränderungen in einer sich ständig wandelnden Organisation umzugehen." },
    "Insights": { nl: "Inzichten", de: "Einblicke" },
    "Comparisons:": { nl: "Vergelijkingen:", de: "Vergleiche:" },
    "Organization Level": { nl: "Organisatieniveau", de: "Organisationsebene" },
    "Organization level": { nl: "Organisatieniveau", de: "Organisationsebene" },
    "Previous survey": { nl: "Vorig onderzoek", de: "Vorherige Befragung" },
    "Group Level below": { nl: "Onderliggende groepen", de: "Untergeordnete Gruppen" },
    "Group level below": { nl: "Onderliggende groep", de: "Untergeordnete Gruppe" },
    "Current group": { nl: "Huidige groep", de: "Aktuelle Gruppe" },
    "Matrix": { nl: "Matrix", de: "Matrix" },
    "List": { nl: "Lijst", de: "Liste" },
    "selected": { nl: "geselecteerd", de: "ausgewählt" },
    "Suggested focus": { nl: "Voorgestelde focus", de: "Empfohlener Fokus" },
    "Areas to focus on": { nl: "Aandachtsgebieden", de: "Schwerpunktbereiche" },
    "The position on the graph is defined by the scores below and how they relate to the benchmark. Focus on maintaining high scores and improving low scores.": { nl: "De positie in de grafiek wordt bepaald door de onderstaande scores en hoe deze zich verhouden tot de benchmark. Richt u op het behouden van hoge scores en het verbeteren van lage scores.", de: "Die Position im Diagramm ergibt sich aus den unten stehenden Werten und ihrem Verhältnis zur Benchmark. Konzentrieren Sie sich darauf, hohe Werte zu halten und niedrige Werte zu verbessern." },
    "Graph legend": { nl: "Legenda grafiek", de: "Diagramm-Legende" },
    "The colors of the graph give you a visual indication of how effective the group is and what areas to focus on.": { nl: "De kleuren in de grafiek geven een visuele indicatie van hoe effectief de groep is en op welke gebieden je je kunt richten.", de: "Die Farben im Diagramm geben einen visuellen Hinweis darauf, wie effektiv die Gruppe ist und auf welche Bereiche man sich konzentrieren sollte." },
    "Effective": { nl: "Effectief", de: "Effektiv" },
    "Ineffective": { nl: "Ineffectief", de: "Ineffektiv" },
    "Not fully utilized": { nl: "Onbenut potentieel", de: "Nicht voll ausgeschöpft" },
    "Detached": { nl: "Afstandelijk", de: "Distanziert" },
    "effective": { nl: "effectief", de: "effektiv" },
    "ineffective": { nl: "ineffectief", de: "ineffektiv" },
    "not fully utilized": { nl: "onbenut potentieel", de: "nicht voll ausgeschöpft" },
    "Engagement can unfold its full potential thanks to the excellent performance environment. Focus on maintaining and consolidating your strengths!": { nl: "Betrokkenheid kan haar volledige potentieel benutten dankzij de uitstekende werkomgeving. Richt u op het behouden en versterken van uw sterke punten!", de: "Engagement kann dank des hervorragenden Leistungsumfelds sein volles Potenzial entfalten. Konzentrieren Sie sich darauf, Ihre Stärken zu erhalten und zu festigen!" },
    "Focus on the continuous improvement of the performance environment, especially with issues of particular importance to engagement and performance.": { nl: "Richt u op de continue verbetering van de werkomgeving, vooral bij thema's die van groot belang zijn voor betrokkenheid en prestaties.", de: "Konzentrieren Sie sich auf die kontinuierliche Verbesserung des Leistungsumfelds, insbesondere bei Themen, die für Engagement und Leistung besonders wichtig sind." },
    "People are engaged but struggle to perform at their best. Improve their performance environment to make the group thrive.": { nl: "Mensen zijn betrokken maar kunnen hun beste prestaties moeilijk leveren. Verbeter hun werkomgeving zodat de groep kan floreren.", de: "Die Menschen sind engagiert, können aber ihr volles Leistungspotenzial nur schwer ausschöpfen. Verbessern Sie ihr Leistungsumfeld, damit die Gruppe aufblüht." },
    "Maintain your good performance environment and review your drivers of employee engagement for opportunities to boost it.": { nl: "Behoud uw goede werkomgeving en bekijk de drijfveren van betrokkenheid om kansen te vinden om deze te vergroten.", de: "Erhalten Sie Ihr gutes Leistungsumfeld und überprüfen Sie die Treiber des Mitarbeiterengagements auf Möglichkeiten, es zu steigern." },
    "Providing Direction": { nl: "Richting geven", de: "Richtung vorgeben" },
    "Leading change": { nl: "Verandering leiden", de: "Veränderung führen" },
    "Managing People": { nl: "Mensen managen", de: "Menschen führen" },
    "Managing Systems": { nl: "Systemen managen", de: "Systeme managen" },
    "Important basic conditions which enable employees to work effectively and efficiently": { nl: "Belangrijke basisvoorwaarden waardoor medewerkers effectief en efficiënt kunnen werken", de: "Wichtige Grundvoraussetzungen, die es Mitarbeitenden ermöglichen, effektiv und effizient zu arbeiten" },
    "Team IT is ": { nl: "Team IT is ", de: "Team IT ist " },
    "Novanta is ": { nl: "Novanta is ", de: "Novanta ist " },
    "Novanta is": { nl: "Novanta is", de: "Novanta ist" },

    /* ── Engagement side panel ── */
    "What does “Engagement” mean?": { nl: "Wat betekent “Betrokkenheid”?", de: "Was bedeutet „Engagement“?" },
    "Engagement is the degree to which your employees are inspired and energized by their work. It also refers to their positive connection to your organization. Engaged employees experience their work as meaningful and rewarding, are proud of their jobs, and feel that they fit in at the organization. They can go the extra mile because they love what they do and where they work. Your engagement score will tell you how enthusiastic your employees are about their work and how connected they feel to your organization.": { nl: "Betrokkenheid is de mate waarin uw medewerkers geïnspireerd en energiek zijn door hun werk. Het verwijst ook naar hun positieve verbinding met uw organisatie. Betrokken medewerkers ervaren hun werk als zinvol en waardevol, zijn trots op hun functie en voelen dat ze passen binnen de organisatie. Ze zetten net dat stapje extra omdat ze houden van wat ze doen en waar ze werken. Uw betrokkenheidsscore laat zien hoe enthousiast uw medewerkers zijn over hun werk en hoe verbonden ze zich voelen met uw organisatie.", de: "Engagement ist das Maß, in dem Ihre Mitarbeitenden durch ihre Arbeit inspiriert und voller Energie sind. Es bezieht sich auch auf ihre positive Verbindung zu Ihrer Organisation. Engagierte Mitarbeitende erleben ihre Arbeit als sinnvoll und bereichernd, sind stolz auf ihren Job und haben das Gefühl, in die Organisation zu passen. Sie gehen die Extrameile, weil sie lieben, was sie tun und wo sie arbeiten. Ihr Engagement-Wert zeigt, wie begeistert Ihre Mitarbeitenden von ihrer Arbeit sind und wie verbunden sie sich mit Ihrer Organisation fühlen." },
    "Engaged employees": { nl: "Betrokken medewerkers", de: "Engagierte Mitarbeitende" },
    "The percentage of participants that are Disengaged, Potentials or Engaged. Participants are categorized based on their average scores on Engagement.": { nl: "Het percentage deelnemers dat Niet-betrokken, Potentieel of Betrokken is. Deelnemers worden ingedeeld op basis van hun gemiddelde scores op Betrokkenheid.", de: "Der Anteil der Teilnehmenden, die Nicht engagiert, Potenzial oder Engagiert sind. Die Teilnehmenden werden anhand ihrer durchschnittlichen Engagement-Werte eingeordnet." },
    "Disengaged": { nl: "Niet-betrokken", de: "Nicht engagiert" },
    "Engaged": { nl: "Betrokken", de: "Engagiert" },
    "What are the results?": { nl: "Wat zijn de resultaten?", de: "Wie sind die Ergebnisse?" },
    "See how your group scored on “Engagement” in comparison to other groups.": { nl: "Bekijk hoe uw groep scoorde op “Betrokkenheid” in vergelijking met andere groepen.", de: "Sehen Sie, wie Ihre Gruppe bei „Engagement“ im Vergleich zu anderen Gruppen abgeschnitten hat." },
    "Score over time": { nl: "Score in de tijd", de: "Wert im Zeitverlauf" },
    "Theme questions": { nl: "Themavragen", de: "Themenfragen" },
    "Group score": { nl: "Groepsscore", de: "Gruppenwert" },
    "Strongly correlating questions": { nl: "Sterk correlerende vragen", de: "Stark korrelierende Fragen" },
    "Respondents who score high on Engagement also score high on the following questions:": { nl: "Respondenten die hoog scoren op Betrokkenheid scoren ook hoog op de volgende vragen:", de: "Befragte, die bei Engagement hoch abschneiden, schneiden auch bei den folgenden Fragen hoch ab:" },
    "Doing my work gives me energy": { nl: "Mijn werk geeft me energie", de: "Meine Arbeit gibt mir Energie" },
    "I enjoy doing my work / tasks": { nl: "Ik doe mijn werk / taken met plezier", de: "Ich erledige meine Arbeit / Aufgaben gerne" },
    "I am proud to work at Novanta": { nl: "Ik ben er trots op om bij Novanta te werken", de: "Ich bin stolz, bei Novanta zu arbeiten" },
    "I feel that I fit in at Novanta": { nl: "Ik heb het gevoel dat ik bij Novanta pas", de: "Ich habe das Gefühl, dass ich zu Novanta passe" },
    "My skills and abilities fit in well with my job": { nl: "Mijn kennis en vaardigheden passen goed bij mijn functie", de: "Meine Kenntnisse und Fähigkeiten passen gut zu meiner Stelle" },
    "I identify with the culture of Novanta": { nl: "Ik identificeer me met de cultuur van Novanta", de: "Ich identifiziere mich mit der Kultur von Novanta" },
    "Novanta is a good organisation to work for": { nl: "Novanta is een goede organisatie om voor te werken", de: "Novanta ist eine gute Organisation, um für sie zu arbeiten" },
    "The vision for the future of Novanta inspires me": { nl: "De toekomstvisie van Novanta inspireert me", de: "Die Zukunftsvision von Novanta inspiriert mich" },
    "Novanta uses employees’ ideas and suggestions to do better": { nl: "Novanta gebruikt ideeën en suggesties van medewerkers om beter te worden", de: "Novanta nutzt die Ideen und Vorschläge der Mitarbeitenden, um sich zu verbessern" },

    /* ── Focus view ── */
    "At first glance": { nl: "In één oogopslag", de: "Auf einen Blick" },
    "Your team is": { nl: "Je team is", de: "Ihr Team ist" },
    "is engaged": { nl: "is betrokken", de: "ist engagiert" },
    "can perform effectively": { nl: "kan effectief presteren", de: "kann effektiv arbeiten" },
    "vs previous survey": { nl: "t.o.v. vorig onderzoek", de: "ggü. vorheriger Befragung" },
    "Explore": { nl: "Verkennen", de: "Erkunden" },
    "What does this mean?": { nl: "Wat betekent dit?", de: "Was bedeutet das?" },
    "What needs focus": { nl: "Wat aandacht nodig heeft", de: "Was Aufmerksamkeit braucht" },
    "This is where your attention matters most": { nl: "Hier maakt jouw aandacht het meeste verschil", de: "Hier zählt Ihre Aufmerksamkeit am meisten" },
    "These are questions where improvement will have the most impact on your team results.": { nl: "Dit zijn vragen waar verbetering de meeste impact heeft op de resultaten van je team.", de: "Das sind Fragen, bei denen Verbesserungen die größte Wirkung auf die Ergebnisse Ihres Teams haben." },
    "Why these focus areas?": { nl: "Waarom deze aandachtsgebieden?", de: "Warum diese Schwerpunkte?" },
    "Celebrate your wins": { nl: "Vier je successen", de: "Feiern Sie Ihre Erfolge" },
    "Your team is already getting this right": { nl: "Dit doet je team al goed", de: "Das macht Ihr Team bereits gut" },
    "These are the areas where your team is performing well. Share these wins with your team to keep the momentum going!": { nl: "Dit zijn de gebieden waarop je team goed presteert. Deel deze successen met je team om het momentum vast te houden!", de: "Das sind die Bereiche, in denen Ihr Team gut abschneidet. Teilen Sie diese Erfolge mit Ihrem Team, um das Momentum aufrechtzuerhalten!" },
    "Why these successes?": { nl: "Waarom deze successen?", de: "Warum diese Erfolge?" },
    "This is relevant": { nl: "Dit is relevant", de: "Das ist relevant" },
    "This focus area is not relevant right now": { nl: "Dit aandachtsgebied is nu niet relevant", de: "Dieser Schwerpunkt ist derzeit nicht relevant" },
    "Pick an approach to see the recommended action:": { nl: "Kies een aanpak om de aanbevolen actie te zien:", de: "Wählen Sie einen Ansatz, um die empfohlene Maßnahme zu sehen:" },
    "Team action": { nl: "Teamactie", de: "Teammaßnahme" },
    "1:1 action": { nl: "1-op-1-actie", de: "1:1-Maßnahme" },
    "Process change": { nl: "Procesverandering", de: "Prozessänderung" },
    "Personal action": { nl: "Persoonlijke actie", de: "Persönliche Maßnahme" },
    "Create new action": { nl: "Nieuwe actie maken", de: "Neue Maßnahme erstellen" },
    "Add to action planner": { nl: "Toevoegen aan actieplanner", de: "Zum Maßnahmenplaner hinzufügen" },
    "Team session": { nl: "Teamsessie", de: "Teamsitzung" },
    "1:1 conversation": { nl: "1-op-1-gesprek", de: "1:1-Gespräch" },
    "Low effort": { nl: "Weinig inspanning", de: "Geringer Aufwand" },
    "Medium effort": { nl: "Gemiddelde inspanning", de: "Mittlerer Aufwand" },
    "High effort": { nl: "Veel inspanning", de: "Hoher Aufwand" },
    "Run a short team session on this theme": { nl: "Houd een korte teamsessie over dit thema", de: "Führen Sie eine kurze Teamsitzung zu diesem Thema durch" },
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bring the team together to name what gets in the way, then agree on one concrete change to try over the next few weeks.": { nl: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Breng het team samen om te benoemen wat in de weg zit en spreek vervolgens één concrete verandering af om de komende weken uit te proberen.", de: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bringen Sie das Team zusammen, um zu benennen, was im Weg steht, und vereinbaren Sie dann eine konkrete Änderung, die Sie in den nächsten Wochen ausprobieren." },
    "Ask each person where their strengths are underused": { nl: "Vraag elke medewerker waar hun sterke punten onderbenut blijven", de: "Fragen Sie jede Person, wo ihre Stärken zu wenig genutzt werden" },
    "Your team signalled their skills do not fully fit their roles. In your next 1:1s, ask what each person does best and where they feel stretched too thin — or not enough. Small adjustments to who owns what can close the fit gap surprisingly quickly.": { nl: "Je team gaf aan dat hun vaardigheden niet volledig aansluiten op hun rol. Vraag in je volgende 1-op-1-gesprekken waar iemand het best in is en waar diegene zich te dun uitgesmeerd voelt — of juist te weinig wordt uitgedaagd. Kleine aanpassingen in wie wat doet kunnen het verschil verrassend snel dichten.", de: "Ihr Team hat signalisiert, dass seine Fähigkeiten nicht ganz zu den Rollen passen. Fragen Sie in Ihren nächsten 1:1-Gesprächen, was jede Person am besten kann und wo sie sich zu dünn aufgestellt fühlt — oder zu wenig gefordert. Kleine Anpassungen, wer was übernimmt, können die Lücke überraschend schnell schließen." },
    "Adjust how work flows through the team": { nl: "Pas aan hoe het werk door het team stroomt", de: "Passen Sie an, wie die Arbeit durch das Team fließt" },
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Review the current workflow and remove the step that adds the least value.": { nl: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bekijk de huidige workflow en verwijder de stap die de minste waarde toevoegt.", de: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Überprüfen Sie den aktuellen Workflow und entfernen Sie den Schritt, der den geringsten Mehrwert bietet." },
    "Reflect on your own role in this theme": { nl: "Reflecteer op je eigen rol in dit thema", de: "Reflektieren Sie über Ihre eigene Rolle bei diesem Thema" },
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Take a moment to consider one small thing you can change in how you support the team this week.": { nl: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sta even stil bij één kleine verandering die je deze week kunt doorvoeren in hoe je het team ondersteunt.", de: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Überlegen Sie kurz, welche kleine Sache Sie diese Woche daran ändern können, wie Sie das Team unterstützen." },

    /* ── Themes radar axis labels ── */
    "Diversity": { nl: "Diversiteit", de: "Diversität" },
    "Employer-ship": { nl: "Werkgeverschap", de: "Arbeitgeberattraktivität" },
    "Customer focus": { nl: "Klantgerichtheid", de: "Kundenorientierung" },
    "Alignment": { nl: "Afstemming", de: "Ausrichtung" },
    "Leadership": { nl: "Leiderschap", de: "Führung" },

    /* ── Per-variant narrative copy (team-it-before) ── */
    "The IT team’s results indicate several challenges impacting overall effectiveness and employee experience. Engagement (56%) and retention (57%) are below desired levels, suggesting employees may feel disconnected from the organization and uncertain about their long-term future within the team. Workload scores are particularly low at 38%, highlighting concerns around capacity, prioritization, and sustainable ways of working. While the eNPS score of 12 remains positive, it indicates only moderate advocacy and suggests there is significant room for improvement in employee satisfaction and loyalty.": { nl: "De resultaten van het IT team wijzen op verschillende uitdagingen die de algehele effectiviteit en medewerkerservaring beïnvloeden. Betrokkenheid (56%) en behoud (57%) liggen onder het gewenste niveau, wat erop kan duiden dat medewerkers zich minder verbonden voelen met de organisatie en onzeker zijn over hun toekomst op lange termijn binnen het team. De werkdrukscores zijn met 38% bijzonder laag en leggen zorgen bloot rond capaciteit, prioritering en duurzame manieren van werken. Hoewel de eNPS-score van 12 positief blijft, wijst deze slechts op gematigde aanbeveling en laat zien dat er aanzienlijke ruimte is voor verbetering van de tevredenheid en loyaliteit van medewerkers.", de: "Die Ergebnisse des IT teams weisen auf mehrere Herausforderungen hin, die sich auf die Gesamteffektivität und die Mitarbeitererfahrung auswirken. Engagement (56%) und Mitarbeiterbindung (57%) liegen unter dem gewünschten Niveau, was darauf hindeutet, dass sich Mitarbeitende möglicherweise von der Organisation abgekoppelt fühlen und hinsichtlich ihrer langfristigen Zukunft im Team unsicher sind. Die Werte zur Arbeitsbelastung sind mit 38% besonders niedrig und verdeutlichen Bedenken in Bezug auf Kapazität, Priorisierung und nachhaltige Arbeitsweisen. Der eNPS-Wert von 12 bleibt zwar positiv, deutet jedoch nur auf eine mäßige Weiterempfehlung hin und zeigt, dass erhebliches Verbesserungspotenzial bei Zufriedenheit und Loyalität der Mitarbeitenden besteht." },
    "As the team falls within the ineffective quadrant, focused action is required to address workload pressures, strengthen leadership support, and improve employee engagement. Creating greater clarity around priorities, improving resource allocation, and increasing opportunities for employee feedback may help rebuild trust and team effectiveness.": { nl: "Omdat het team in het ineffectieve kwadrant valt, is gerichte actie nodig om de werkdruk aan te pakken, de ondersteuning vanuit het leiderschap te versterken en de betrokkenheid van medewerkers te vergroten. Meer duidelijkheid scheppen rond prioriteiten, de inzet van middelen verbeteren en meer ruimte bieden voor feedback van medewerkers kan helpen om het vertrouwen en de effectiviteit van het team te herstellen.", de: "Da das Team in den ineffektiven Quadranten fällt, sind gezielte Maßnahmen erforderlich, um die Arbeitsbelastung zu verringern, die Unterstützung durch die Führung zu stärken und das Engagement der Mitarbeitenden zu verbessern. Mehr Klarheit bei den Prioritäten zu schaffen, die Ressourcenverteilung zu verbessern und mehr Möglichkeiten für Mitarbeiterfeedback zu schaffen, kann dazu beitragen, Vertrauen und Teameffektivität wiederherzustellen." },
    "eNPS remains positive at 12, indicating that a portion of employees are still willing to recommend the organization as a place to work.": { nl: "De eNPS blijft met 12 positief, wat aangeeft dat een deel van de medewerkers de organisatie nog steeds als werkgever zou aanbevelen.", de: "Der eNPS bleibt mit 12 positiv, was darauf hindeutet, dass ein Teil der Mitarbeitenden die Organisation nach wie vor als Arbeitgeber weiterempfehlen würde." },
    "Retention sentiment (57%) suggests that more than half of employees currently see themselves remaining with the organization.": { nl: "Het sentiment rond behoud (57%) suggereert dat meer dan de helft van de medewerkers zichzelf op dit moment bij de organisatie ziet blijven.", de: "Die Stimmung zur Mitarbeiterbindung (57%) deutet darauf hin, dass sich derzeit mehr als die Hälfte der Mitarbeitenden einen Verbleib in der Organisation vorstellen kann." },
    "Workload (38%) is significantly below desired levels and appears to be a key driver of employee dissatisfaction.": { nl: "Werkdruk (38%) ligt aanzienlijk onder het gewenste niveau en lijkt een belangrijke oorzaak te zijn van ontevredenheid onder medewerkers.", de: "Die Arbeitsbelastung (38%) liegt deutlich unter dem gewünschten Niveau und scheint ein wesentlicher Treiber für die Unzufriedenheit der Mitarbeitenden zu sein." },
    "Engagement (56%) indicates employees may not feel fully connected to team goals or motivated by their current work environment.": { nl: "Betrokkenheid (56%) geeft aan dat medewerkers zich mogelijk niet volledig verbonden voelen met de teamdoelen of niet gemotiveerd worden door hun huidige werkomgeving.", de: "Engagement (56%) deutet darauf hin, dass sich Mitarbeitende möglicherweise nicht vollständig mit den Teamzielen verbunden fühlen oder von ihrem aktuellen Arbeitsumfeld nicht motiviert werden." },
    "Retention (57%) presents a potential risk for future turnover if underlying concerns are not addressed.": { nl: "Behoud (57%) vormt een mogelijk risico op toekomstig verloop als de onderliggende zorgen niet worden aangepakt.", de: "Mitarbeiterbindung (57%) stellt ein potenzielles Risiko für künftige Fluktuation dar, wenn die zugrunde liegenden Bedenken nicht angegangen werden." },
    "Review team capacity, workload distribution, and project prioritization to reduce pressure on employees.": { nl: "Beoordeel de teamcapaciteit, de verdeling van de werkdruk en de prioritering van projecten om de druk op medewerkers te verlagen.", de: "Überprüfen Sie die Teamkapazität, die Verteilung der Arbeitsbelastung und die Priorisierung von Projekten, um den Druck auf die Mitarbeitenden zu verringern." },
    "Conduct listening sessions to better understand the factors contributing to lower engagement and retention.": { nl: "Organiseer luistersessies om de factoren die bijdragen aan lagere betrokkenheid en behoud beter te begrijpen.", de: "Führen Sie Zuhör-Sessions durch, um die Faktoren besser zu verstehen, die zu geringerem Engagement und geringerer Mitarbeiterbindung beitragen." },
    "Increase transparency around team objectives, decision-making, and career development opportunities.": { nl: "Vergroot de transparantie rond teamdoelstellingen, besluitvorming en mogelijkheden voor loopbaanontwikkeling.", de: "Erhöhen Sie die Transparenz in Bezug auf Teamziele, Entscheidungsfindung und Möglichkeiten zur Karriereentwicklung." },
    "Equip managers with tools and training to support employee wellbeing, recognition, and performance conversations.": { nl: "Voorzie managers van tools en training om het welzijn van medewerkers, waardering en gesprekken over prestaties te ondersteunen.", de: "Statten Sie Führungskräfte mit Werkzeugen und Schulungen aus, um das Wohlbefinden der Mitarbeitenden, Anerkennung und Leistungsgespräche zu unterstützen." },
    "Develop a targeted action plan with measurable milestones to improve team effectiveness over the next survey cycle.": { nl: "Ontwikkel een gericht actieplan met meetbare mijlpalen om de effectiviteit van het team in de volgende onderzoekscyclus te verbeteren.", de: "Entwickeln Sie einen gezielten Aktionsplan mit messbaren Meilensteinen, um die Teameffektivität im nächsten Befragungszyklus zu verbessern." },
    "Both engagement and the performance environment are under pressure. Without attention, this can affect results and team wellbeing over time.": { nl: "Zowel de betrokkenheid als de werkomgeving staan onder druk. Zonder aandacht kan dit op termijn de resultaten en het welzijn van het team beïnvloeden.", de: "Sowohl das Engagement als auch das Leistungsumfeld stehen unter Druck. Ohne entsprechende Aufmerksamkeit kann sich dies mit der Zeit auf die Ergebnisse und das Wohlbefinden des Teams auswirken." },
    "In this situation, it is important to slow down and create focus. A structured and supported follow-up helps bring stability and direction. Rather than trying to fix everything, concentrate on the few areas that are most urgent and within your influence.": { nl: "In deze situatie is het belangrijk om gas terug te nemen en focus aan te brengen. Een gestructureerde en goed ondersteunde opvolging helpt om stabiliteit en richting te brengen. In plaats van alles tegelijk te willen oplossen, richt u zich op de paar gebieden die het meest urgent zijn en binnen uw invloed liggen.", de: "In dieser Situation ist es wichtig, das Tempo zu drosseln und Fokus zu schaffen. Eine strukturierte und begleitete Nachverfolgung hilft, Stabilität und Orientierung zu geben. Anstatt zu versuchen, alles auf einmal zu lösen, konzentrieren Sie sich auf die wenigen Bereiche, die am dringendsten sind und in Ihrem Einflussbereich liegen." },
    "Prepare &amp; reflect:": { nl: "Voorbereiden &amp; reflecteren:", de: "Vorbereiten &amp; reflektieren:" },
    "Take time to understand the results and, if helpful, seek support before moving into team discussions.": { nl: "Neem de tijd om de resultaten te begrijpen en zoek, indien dat helpt, ondersteuning voordat u het gesprek met het team aangaat.", de: "Nehmen Sie sich Zeit, um die Ergebnisse zu verstehen, und holen Sie sich bei Bedarf Unterstützung, bevor Sie in die Teamgespräche einsteigen." },
    "Review &amp; prioritize:": { nl: "Beoordelen &amp; prioriteren:", de: "Überprüfen &amp; priorisieren:" },
    "Group feedback by urgency (critical, high risk, improvement) and select the few priorities that matter most.": { nl: "Groepeer feedback op urgentie (kritiek, hoog risico, verbetering) en selecteer de paar prioriteiten die er het meest toe doen.", de: "Gruppieren Sie das Feedback nach Dringlichkeit (kritisch, hohes Risiko, Verbesserung) und wählen Sie die wenigen Prioritäten aus, die am wichtigsten sind." },
    "Discuss &amp; align:": { nl: "Bespreken &amp; afstemmen:", de: "Besprechen &amp; abstimmen:" },
    "Share findings transparently with the team and agree on clear priorities together.": { nl: "Deel de bevindingen transparant met het team en spreek samen duidelijke prioriteiten af.", de: "Teilen Sie die Erkenntnisse transparent mit dem Team und legen Sie gemeinsam klare Prioritäten fest." },
    "Implement &amp; monitor:": { nl: "Uitvoeren &amp; monitoren:", de: "Umsetzen &amp; überwachen:" },
    "Assign clear ownership, ensure appropriate support is in place, and establish a tight cadence to track progress and adjust where needed.": { nl: "Wijs duidelijke verantwoordelijkheid toe, zorg dat passende ondersteuning aanwezig is en hanteer een strak ritme om de voortgang te volgen en waar nodig bij te sturen.", de: "Legen Sie klare Verantwortlichkeiten fest, sorgen Sie für angemessene Unterstützung und etablieren Sie einen engen Rhythmus, um den Fortschritt zu verfolgen und bei Bedarf anzupassen." },
    "Clear priorities, visible action and consistent follow-up help rebuild trust and restore momentum step by step.": { nl: "Duidelijke prioriteiten, zichtbare actie en consistente opvolging helpen om het vertrouwen te herstellen en stap voor stap weer momentum op te bouwen.", de: "Klare Prioritäten, sichtbares Handeln und eine konsequente Nachverfolgung helfen, Vertrauen wiederaufzubauen und Schritt für Schritt neue Dynamik zu gewinnen." },

    /* ── Per-variant narrative copy (team-it-after) ── */
    "The IT team's latest survey results show a significant improvement across key engagement and employee experience indicators. Engagement has increased to 67%, while retention has risen to 73%, indicating that employees are more committed to both their current role and the organization. The team also achieved an eNPS of 31, reflecting a strong increase in employee advocacy and a greater willingness to recommend the organization as a place to work.": { nl: "De recentste onderzoeksresultaten van het IT team laten een aanzienlijke verbetering zien op belangrijke indicatoren voor betrokkenheid en medewerkerservaring. De betrokkenheid is gestegen naar 67%, terwijl het behoud is toegenomen tot 73%. Dit laat zien dat medewerkers meer toegewijd zijn aan zowel hun huidige functie als de organisatie. Het team behaalde daarnaast een eNPS van 31, wat duidt op een sterke toename in ambassadeurschap en een grotere bereidheid om de organisatie aan te bevelen als werkgever.", de: "Die aktuellsten Umfrageergebnisse des IT teams zeigen eine deutliche Verbesserung bei wichtigen Kennzahlen für Engagement und Mitarbeitererfahrung. Das Engagement ist auf 67% gestiegen, während die Mitarbeiterbindung auf 73% zugenommen hat. Das deutet darauf hin, dass die Mitarbeitenden sich sowohl ihrer aktuellen Rolle als auch der Organisation stärker verbunden fühlen. Das Team erreichte zudem einen eNPS von 31, was einen starken Anstieg des Mitarbeiter-Engagements und eine größere Bereitschaft widerspiegelt, die Organisation als Arbeitgeber weiterzuempfehlen." },
    "Workload perceptions have improved considerably, with 56% of employees reporting that their workload feels “just right.” Combined with a strong response rate of 79%, these results provide a reliable view of employee sentiment and suggest that recent actions have positively impacted the employee experience.": { nl: "De beleving van de werkdruk is aanzienlijk verbeterd: 56% van de medewerkers geeft aan dat hun werkdruk “precies goed” aanvoelt. In combinatie met een sterk responspercentage van 79% bieden deze resultaten een betrouwbaar beeld van hoe medewerkers zich voelen, en suggereren ze dat recente acties een positief effect hebben gehad op de medewerkerservaring.", de: "Die Wahrnehmung der Arbeitsbelastung hat sich erheblich verbessert: 56% der Mitarbeitenden geben an, dass sich ihre Arbeitsbelastung „genau richtig“ anfühlt. In Kombination mit einer starken Rücklaufquote von 79% bieten diese Ergebnisse ein verlässliches Bild der Mitarbeiterstimmung und legen nahe, dass die jüngsten Maßnahmen sich positiv auf die Mitarbeitererfahrung ausgewirkt haben." },
    "As a result of these improvements, the IT team has moved into the effective quadrant, demonstrating stronger organizational health, improved employee engagement, and a more sustainable work environment. Continued focus on employee development, recognition, and workload management will help maintain this positive momentum.": { nl: "Dankzij deze verbeteringen is het IT team in het effectieve kwadrant terechtgekomen, wat wijst op een sterkere organisatiegezondheid, een hogere betrokkenheid en een duurzamere werkomgeving. Door te blijven inzetten op ontwikkeling, erkenning en het beheersen van de werkdruk blijft dit positieve momentum behouden.", de: "Dank dieser Verbesserungen ist das IT team in den effektiven Quadranten aufgestiegen, was eine stärkere organisatorische Gesundheit, ein höheres Engagement und ein nachhaltigeres Arbeitsumfeld belegt. Ein anhaltender Fokus auf Mitarbeiterentwicklung, Anerkennung und Steuerung der Arbeitsbelastung hilft, dieses positive Momentum aufrechtzuerhalten." },
    "Engagement (67%) has increased, indicating stronger commitment, motivation, and connection to team objectives.": { nl: "De betrokkenheid (67%) is gestegen, wat duidt op een sterkere toewijding, motivatie en verbondenheid met de teamdoelen.", de: "Das Engagement (67%) ist gestiegen, was auf eine stärkere Verbundenheit, Motivation und Verbindung zu den Teamzielen hindeutet." },
    "Retention (73%) shows that a large majority of employees intend to remain in their current role.": { nl: "Het behoud (73%) laat zien dat een grote meerderheid van de medewerkers van plan is in hun huidige functie te blijven.", de: "Die Mitarbeiterbindung (73%) zeigt, dass eine große Mehrheit der Mitarbeitenden in ihrer aktuellen Rolle bleiben möchte." },
    "eNPS (31) reflects a healthy level of employee advocacy and confidence in the organization.": { nl: "De eNPS (31) weerspiegelt een gezond niveau van ambassadeurschap en vertrouwen in de organisatie.", de: "Der eNPS (31) spiegelt ein gesundes Maß an Mitarbeiter-Engagement und Vertrauen in die Organisation wider." },
    "Workload perceptions have improved, with 56% of employees reporting that their workload is appropriately balanced.": { nl: "De beleving van de werkdruk is verbeterd: 56% van de medewerkers geeft aan dat hun werkdruk goed in balans is.", de: "Die Wahrnehmung der Arbeitsbelastung hat sich verbessert: 56% der Mitarbeitenden geben an, dass ihre Arbeitsbelastung gut ausgewogen ist." },
    "A response rate of 79% provides strong confidence in the reliability and representativeness of the survey results.": { nl: "Een responspercentage van 79% geeft veel vertrouwen in de betrouwbaarheid en representativiteit van de onderzoeksresultaten.", de: "Eine Rücklaufquote von 79% schafft großes Vertrauen in die Zuverlässigkeit und Repräsentativität der Umfrageergebnisse." },
    "While workload perceptions have improved, nearly half of employees still do not view their workload as optimal, presenting an opportunity for further refinement of prioritization and resource planning.": { nl: "Hoewel de beleving van de werkdruk is verbeterd, ervaart bijna de helft van de medewerkers hun werkdruk nog steeds niet als optimaal. Dit biedt een kans om de prioritering en personeelsplanning verder aan te scherpen.", de: "Obwohl sich die Wahrnehmung der Arbeitsbelastung verbessert hat, empfindet fast die Hälfte der Mitarbeitenden ihre Arbeitsbelastung noch nicht als optimal. Das bietet die Gelegenheit, Priorisierung und Ressourcenplanung weiter zu verfeinern." },
    "Engagement is trending positively but remains below top-performing team benchmarks, suggesting opportunities to further strengthen employee involvement and recognition.": { nl: "De betrokkenheid laat een positieve trend zien, maar blijft onder de benchmark van best presterende teams. Dit wijst op kansen om de betrokkenheid en erkenning van medewerkers verder te versterken.", de: "Das Engagement zeigt einen positiven Trend, liegt aber weiterhin unter der Benchmark der leistungsstärksten Teams. Das deutet auf Möglichkeiten hin, die Einbindung und Anerkennung der Mitarbeitenden weiter zu stärken." },
    "Continue monitoring workload distribution and team capacity to sustain improvements in employee wellbeing.": { nl: "Blijf de verdeling van de werkdruk en de teamcapaciteit monitoren om de verbeteringen in het welzijn van medewerkers vast te houden.", de: "Beobachten Sie weiterhin die Verteilung der Arbeitsbelastung und die Teamkapazität, um die Verbesserungen beim Wohlbefinden der Mitarbeitenden aufrechtzuerhalten." },
    "Build on the positive momentum by increasing opportunities for employee development, learning, and career growth.": { nl: "Bouw voort op het positieve momentum door meer mogelijkheden te bieden voor ontwikkeling, leren en loopbaangroei.", de: "Bauen Sie auf dem positiven Momentum auf, indem Sie mehr Möglichkeiten für Mitarbeiterentwicklung, Lernen und berufliches Wachstum schaffen." },
    "Recognize and celebrate team achievements to reinforce engagement and advocacy.": { nl: "Erken en vier de successen van het team om de betrokkenheid en het ambassadeurschap te versterken.", de: "Erkennen und feiern Sie die Erfolge des Teams, um Engagement und Mitarbeiter-Engagement zu stärken." },
    "Maintain regular employee feedback discussions to identify emerging concerns early and support continuous improvement.": { nl: "Voer regelmatig feedbackgesprekken met medewerkers om opkomende zorgen vroegtijdig te signaleren en continue verbetering te ondersteunen.", de: "Führen Sie regelmäßig Feedbackgespräche mit den Mitarbeitenden, um aufkommende Anliegen frühzeitig zu erkennen und kontinuierliche Verbesserung zu unterstützen." },
    "Share progress updates on actions taken in response to employee feedback to strengthen trust and accountability.": { nl: "Deel updates over de voortgang van acties die zijn ondernomen naar aanleiding van feedback van medewerkers, om vertrouwen en verantwoordelijkheid te versterken.", de: "Teilen Sie Fortschrittsupdates zu Maßnahmen, die als Reaktion auf das Mitarbeiterfeedback ergriffen wurden, um Vertrauen und Verbindlichkeit zu stärken." },
    "The team has both the energy and the foundations in place to perform well. Engagement and the performance environment reinforce each other, creating the conditions for strong and sustainable results.": { nl: "Het team beschikt zowel over de energie als over de juiste fundamenten om goed te presteren. Betrokkenheid en de werkomgeving versterken elkaar en creëren zo de voorwaarden voor sterke en duurzame resultaten.", de: "Das Team verfügt sowohl über die Energie als auch über die Grundlagen, um gute Leistungen zu erbringen. Engagement und Leistungsumfeld verstärken sich gegenseitig und schaffen so die Voraussetzungen für starke und nachhaltige Ergebnisse." },
    "Here, a light-touch follow-up is enough. Take time to reflect on the results together and acknowledge what is going well. The goal is to keep momentum and avoid overcomplicating something that already works.": { nl: "Hier volstaat een lichte opvolging. Neem samen de tijd om op de resultaten te reflecteren en erken wat goed gaat. Het doel is om het momentum vast te houden en iets wat al werkt niet onnodig ingewikkeld te maken.", de: "Hier genügt eine leichte Nachverfolgung. Nehmen Sie sich gemeinsam Zeit, um über die Ergebnisse nachzudenken, und würdigen Sie, was gut läuft. Das Ziel ist, das Momentum zu halten und etwas, das bereits funktioniert, nicht unnötig zu verkomplizieren." },
    "Reflect on the strengths that stand out in the results.": { nl: "Reflecteer op de sterke punten die opvallen in de resultaten.", de: "Reflektieren Sie über die Stärken, die in den Ergebnissen hervorstechen." },
    "Discuss what helps the team perform at its best.": { nl: "Bespreek wat het team helpt om optimaal te presteren.", de: "Besprechen Sie, was dem Team hilft, seine beste Leistung zu erbringen." },
    "Consider where successful practices could inspire others.": { nl: "Bekijk waar succesvolle werkwijzen anderen kunnen inspireren.", de: "Überlegen Sie, wo erfolgreiche Vorgehensweisen andere inspirieren könnten." },
    "Keep attention on what works well and continue building on it. Use the survey results as an opportunity to reinforce the practices that help the team perform at its best.": { nl: "Houd de aandacht bij wat goed werkt en blijf daarop voortbouwen. Gebruik de onderzoeksresultaten als kans om de werkwijzen te versterken die het team helpen optimaal te presteren.", de: "Behalten Sie im Blick, was gut funktioniert, und bauen Sie weiter darauf auf. Nutzen Sie die Umfrageergebnisse als Gelegenheit, die Vorgehensweisen zu stärken, die dem Team helfen, seine beste Leistung zu erbringen." },

    /* ── Per-variant narrative copy (novanta-after) ── */
    "Across Novanta, this survey shows a healthy and stable picture. Organization-wide engagement stands at 72% and retention at 76%, indicating that most employees feel committed to their work and intend to stay. An eNPS of 30 reflects solid advocacy, and a strong response rate of 81% gives a reliable view of how the organization is doing.": { nl: "Bij Novanta laat dit onderzoek een gezond en stabiel beeld zien. Over de hele organisatie staat de betrokkenheid op 72% en het behoud op 76%, wat erop wijst dat de meeste medewerkers zich verbonden voelen met hun werk en van plan zijn te blijven. Een eNPS van 30 weerspiegelt solide ambassadeurschap, en een sterk responspercentage van 81% geeft een betrouwbaar beeld van hoe het de organisatie vergaat.", de: "Bei Novanta zeigt diese Befragung ein gesundes und stabiles Bild. Organisationsweit liegt das Engagement bei 72% und die Mitarbeiterbindung bei 76%, was darauf hindeutet, dass sich die meisten Mitarbeitenden ihrer Arbeit verbunden fühlen und bleiben möchten. Ein eNPS von 30 spiegelt eine solide Fürsprache wider, und eine starke Rücklaufquote von 81% bietet einen verlässlichen Einblick in die Lage der Organisation." },
    "Most departments sit in the effective quadrant, where engagement and the performance environment reinforce each other. A few teams still have room to grow — particularly around workload and development opportunities — but the overall foundation is strong.": { nl: "De meeste afdelingen bevinden zich in het effectieve kwadrant, waar betrokkenheid en de werkomgeving elkaar versterken. Enkele teams hebben nog ruimte om te groeien — met name op het gebied van werkdruk en ontwikkelingsmogelijkheden — maar het algehele fundament is sterk.", de: "Die meisten Abteilungen befinden sich im effektiven Quadranten, in dem sich Engagement und das Leistungsumfeld gegenseitig verstärken. Einige Teams haben noch Wachstumspotenzial — insbesondere im Bereich Arbeitsbelastung und Entwicklungsmöglichkeiten — doch das Gesamtfundament ist stark." },
    "Continued investment in leadership, recognition and balanced workloads will help Novanta sustain this momentum and lift the teams that are not yet performing at their best.": { nl: "Voortdurende investeringen in leiderschap, erkenning en evenwichtige werkdruk helpen Novanta om dit momentum vast te houden en de teams te tillen die nog niet op hun best presteren.", de: "Kontinuierliche Investitionen in Führung, Anerkennung und ausgewogene Arbeitsbelastung helfen Novanta, diesen Schwung zu erhalten und die Teams zu fördern, die noch nicht ihr volles Potenzial ausschöpfen." },
    "Engagement (72%) is healthy organization-wide and close to the external benchmark.": { nl: "De betrokkenheid (72%) is over de hele organisatie gezond en ligt dicht bij de externe benchmark.", de: "Das Engagement (72%) ist organisationsweit gesund und liegt nahe an der externen Benchmark." },
    "Retention (76%) shows that the large majority of employees intend to stay with Novanta.": { nl: "Het behoud (76%) laat zien dat de grote meerderheid van de medewerkers van plan is bij Novanta te blijven.", de: "Die Mitarbeiterbindung (76%) zeigt, dass die große Mehrheit der Mitarbeitenden bei Novanta bleiben möchte." },
    "eNPS (30) reflects solid advocacy across the organization.": { nl: "De eNPS (30) weerspiegelt solide ambassadeurschap door de hele organisatie heen.", de: "Der eNPS (30) spiegelt eine solide Fürsprache in der gesamten Organisation wider." },
    "A response rate of 81% gives strong confidence in the representativeness of the results.": { nl: "Een responspercentage van 81% geeft veel vertrouwen in de representativiteit van de resultaten.", de: "Eine Rücklaufquote von 81% gibt großes Vertrauen in die Repräsentativität der Ergebnisse." },
    "Workload (62%) varies between departments and remains an opportunity in several teams.": { nl: "De werkdruk (62%) verschilt per afdeling en blijft in meerdere teams een kans.", de: "Die Arbeitsbelastung (62%) variiert zwischen den Abteilungen und bleibt in mehreren Teams ein Ansatzpunkt." },
    "Development opportunities score lower than engagement, suggesting room to strengthen growth and career paths.": { nl: "Ontwikkelingsmogelijkheden scoren lager dan betrokkenheid, wat wijst op ruimte om groei en loopbaanpaden te versterken.", de: "Entwicklungsmöglichkeiten schneiden schlechter ab als das Engagement, was auf Spielraum zur Stärkung von Wachstum und Karrierewegen hindeutet." },
    "Share organization-wide results transparently and let departments set their own focus areas.": { nl: "Deel de organisatiebrede resultaten transparant en laat afdelingen hun eigen focusgebieden bepalen.", de: "Teilen Sie die organisationsweiten Ergebnisse transparent und lassen Sie die Abteilungen ihre eigenen Schwerpunkte setzen." },
    "Support managers of lower-scoring teams with targeted coaching and resources.": { nl: "Ondersteun managers van lager scorende teams met gerichte coaching en middelen.", de: "Unterstützen Sie Führungskräfte von schwächer abschneidenden Teams mit gezieltem Coaching und Ressourcen." },
    "Continue investing in development, recognition and balanced workloads.": { nl: "Blijf investeren in ontwikkeling, erkenning en evenwichtige werkdruk.", de: "Investieren Sie weiterhin in Entwicklung, Anerkennung und ausgewogene Arbeitsbelastung." },
    "Monitor workload distribution across departments to protect wellbeing.": { nl: "Bewaak de verdeling van de werkdruk over afdelingen om het welzijn te beschermen.", de: "Behalten Sie die Verteilung der Arbeitsbelastung über die Abteilungen im Blick, um das Wohlbefinden zu schützen." },
    "Reinforce what works in high-performing teams and spread those practices.": { nl: "Versterk wat werkt in goed presterende teams en verspreid die werkwijzen.", de: "Verstärken Sie, was in leistungsstarken Teams funktioniert, und verbreiten Sie diese Praktiken." },
    "Across the organization, engagement and the performance environment reinforce each other. Most teams have the energy and the foundations in place to perform well and deliver sustainable results.": { nl: "In de hele organisatie versterken betrokkenheid en de werkomgeving elkaar. De meeste teams hebben de energie en de basis op orde om goed te presteren en duurzame resultaten te leveren.", de: "In der gesamten Organisation verstärken sich Engagement und das Leistungsumfeld gegenseitig. Die meisten Teams verfügen über die Energie und die Grundlagen, um gute Leistungen zu erbringen und nachhaltige Ergebnisse zu erzielen." },
    "Here, a light-touch organization-wide follow-up is enough. Acknowledge what is going well and give departments the space to act on their own results. The goal is to keep momentum across the organization.": { nl: "Hier volstaat een lichte, organisatiebrede opvolging. Erken wat goed gaat en geef afdelingen de ruimte om met hun eigen resultaten aan de slag te gaan. Het doel is om het momentum in de hele organisatie vast te houden.", de: "Hier genügt ein behutsames, organisationsweites Follow-up. Würdigen Sie, was gut läuft, und geben Sie den Abteilungen den Raum, mit ihren eigenen Ergebnissen zu arbeiten. Ziel ist es, den Schwung in der gesamten Organisation zu erhalten." },
    "Reflect on the strengths that stand out across the organization.": { nl: "Sta stil bij de sterke punten die in de hele organisatie opvallen.", de: "Reflektieren Sie über die Stärken, die in der gesamten Organisation hervorstechen." },
    "Let each department translate the results into their own focus.": { nl: "Laat elke afdeling de resultaten vertalen naar een eigen focus.", de: "Lassen Sie jede Abteilung die Ergebnisse in ihren eigenen Schwerpunkt übersetzen." },
    "Support the few teams that are not yet performing at their best.": { nl: "Ondersteun de enkele teams die nog niet op hun best presteren.", de: "Unterstützen Sie die wenigen Teams, die noch nicht ihr volles Potenzial ausschöpfen." },
    "Keep attention on what works well and continue building on it across teams.": { nl: "Blijf aandacht houden voor wat goed werkt en bouw daarop voort in alle teams.", de: "Behalten Sie im Blick, was gut funktioniert, und bauen Sie teamübergreifend darauf auf." },

    /* ── Per-variant narrative copy (novanta-before) ── */
    "Across Novanta, this survey points to a mixed picture. Organization-wide engagement stands at 66% with retention at 70% — most employees are reasonably committed, but energy is not yet translating into a supportive performance environment everywhere. An eNPS of 20 and a response rate of 77% give a workable read on where the organization stands.": { nl: "Bij Novanta laat dit onderzoek een gemengd beeld zien. De organisatiebrede betrokkenheid staat op 66% en het behoud op 70% — de meeste medewerkers zijn redelijk betrokken, maar die energie vertaalt zich nog niet overal in een ondersteunende werkomgeving. Een eNPS van 20 en een responspercentage van 77% geven een bruikbaar beeld van waar de organisatie staat.", de: "Bei Novanta zeigt diese Befragung ein gemischtes Bild. Das organisationsweite Engagement liegt bei 66% und die Mitarbeiterbindung bei 70% — die meisten Mitarbeitenden sind einigermaßen engagiert, doch diese Energie überträgt sich noch nicht überall in ein unterstützendes Leistungsumfeld. Ein eNPS von 20 und eine Rücklaufquote von 77% geben einen brauchbaren Überblick darüber, wo die Organisation steht." },
    "Several departments sit in the not-fully-utilized quadrant: people are motivated, but workload pressure and unclear ways of working hold them back. A focused effort on the performance environment is likely to unlock the engagement that is already there.": { nl: "Verschillende afdelingen bevinden zich in het kwadrant 'onbenut potentieel': mensen zijn gemotiveerd, maar werkdruk en onduidelijke werkwijzen houden hen tegen. Een gerichte inspanning op de werkomgeving zal de betrokkenheid die er al is waarschijnlijk losmaken.", de: "Mehrere Abteilungen befinden sich im Quadranten des nicht voll ausgeschöpften Potenzials: Die Menschen sind motiviert, aber Arbeitsbelastung und unklare Arbeitsweisen halten sie zurück. Eine gezielte Verbesserung des Leistungsumfelds wird das bereits vorhandene Engagement voraussichtlich freisetzen." },
    "Prioritizing workload, clarity and manager support across the lower-scoring teams will help Novanta convert this potential into stronger, more sustainable results.": { nl: "Door werkdruk, duidelijkheid en steun van leidinggevenden prioriteit te geven in de lager scorende teams, kan Novanta dit potentieel omzetten in sterkere, duurzamere resultaten.", de: "Indem Novanta in den schwächer abschneidenden Teams Arbeitsbelastung, Klarheit und Unterstützung durch Führungskräfte priorisiert, lässt sich dieses Potenzial in stärkere, nachhaltigere Ergebnisse umsetzen." },
    "Engagement (66%) is reasonable organization-wide and provides a base to build on.": { nl: "De betrokkenheid (66%) is organisatiebreed redelijk en biedt een basis om op voort te bouwen.", de: "Das Engagement (66%) ist organisationsweit angemessen und bietet eine Grundlage, auf der man aufbauen kann." },
    "Retention (70%) shows most employees still intend to stay with Novanta.": { nl: "Het behoud (70%) laat zien dat de meeste medewerkers van plan zijn bij Novanta te blijven.", de: "Die Mitarbeiterbindung (70%) zeigt, dass die meisten Mitarbeitenden weiterhin beabsichtigen, bei Novanta zu bleiben." },
    "A response rate of 77% gives a workable view of the organization.": { nl: "Een responspercentage van 77% geeft een bruikbaar beeld van de organisatie.", de: "Eine Rücklaufquote von 77% gibt ein brauchbares Bild der Organisation." },
    "Workload (54%) is under pressure in many departments and is a key barrier.": { nl: "De werkdruk (54%) staat in veel afdelingen onder druk en vormt een belangrijke belemmering.", de: "Die Arbeitsbelastung (54%) steht in vielen Abteilungen unter Druck und stellt ein zentrales Hindernis dar." },
    "The performance environment lags engagement, suggesting unclear ways of working.": { nl: "De werkomgeving blijft achter bij de betrokkenheid, wat wijst op onduidelijke werkwijzen.", de: "Das Leistungsumfeld bleibt hinter dem Engagement zurück, was auf unklare Arbeitsweisen hindeutet." },
    "Development opportunities score low and need attention.": { nl: "Ontwikkelmogelijkheden scoren laag en verdienen aandacht.", de: "Entwicklungsmöglichkeiten schneiden niedrig ab und brauchen Aufmerksamkeit." },
    "Tackle workload and prioritization in the most pressured departments first.": { nl: "Pak eerst de werkdruk en prioritering aan in de afdelingen die het meest onder druk staan.", de: "Gehen Sie zuerst Arbeitsbelastung und Priorisierung in den am stärksten belasteten Abteilungen an." },
    "Give managers clearer guidance and support to improve the performance environment.": { nl: "Geef leidinggevenden duidelijkere richtlijnen en ondersteuning om de werkomgeving te verbeteren.", de: "Geben Sie Führungskräften klarere Anleitung und Unterstützung, um das Leistungsumfeld zu verbessern." },
    "Increase transparency around priorities and decision-making.": { nl: "Vergroot de transparantie rond prioriteiten en besluitvorming.", de: "Erhöhen Sie die Transparenz bei Prioritäten und Entscheidungsfindung." },
    "Create more room for development and recognition.": { nl: "Creëer meer ruimte voor ontwikkeling en erkenning.", de: "Schaffen Sie mehr Raum für Entwicklung und Anerkennung." },
    "Set measurable goals per department and revisit them next cycle.": { nl: "Stel meetbare doelen per afdeling op en evalueer deze in de volgende cyclus.", de: "Legen Sie messbare Ziele pro Abteilung fest und überprüfen Sie diese im nächsten Zyklus." },
    "Employees across the organization are motivated, but the performance environment is not yet keeping up. Improving workload, clarity and support will help this engagement translate into stronger results.": { nl: "Medewerkers in de hele organisatie zijn gemotiveerd, maar de werkomgeving houdt nog geen gelijke tred. Het verbeteren van werkdruk, duidelijkheid en ondersteuning helpt om deze betrokkenheid te vertalen naar sterkere resultaten.", de: "Mitarbeitende in der gesamten Organisation sind motiviert, aber das Leistungsumfeld hält noch nicht Schritt. Eine Verbesserung von Arbeitsbelastung, Klarheit und Unterstützung hilft, dieses Engagement in stärkere Ergebnisse zu übersetzen." },
    "Focus organization-wide on the performance environment. Help departments reduce workload pressure and create clarity, so the energy that is already there can be put to use.": { nl: "Richt de aandacht organisatiebreed op de werkomgeving. Help afdelingen de werkdruk te verlagen en duidelijkheid te scheppen, zodat de energie die er al is benut kan worden.", de: "Richten Sie den Fokus organisationsweit auf das Leistungsumfeld. Helfen Sie Abteilungen, die Arbeitsbelastung zu reduzieren und Klarheit zu schaffen, damit die bereits vorhandene Energie genutzt werden kann." },
    "Identify the departments under the most workload pressure.": { nl: "Breng in kaart welke afdelingen onder de hoogste werkdruk staan.", de: "Ermitteln Sie die Abteilungen mit der höchsten Arbeitsbelastung." },
    "Give managers clearer priorities and support.": { nl: "Geef leidinggevenden duidelijkere prioriteiten en ondersteuning.", de: "Geben Sie Führungskräften klarere Prioritäten und Unterstützung." },
    "Track a few shared improvements across teams.": { nl: "Volg een paar gedeelde verbeteringen over de teams heen.", de: "Verfolgen Sie einige gemeinsame Verbesserungen über die Teams hinweg." },
    "Small, consistent improvements to how work is organized will lift the whole organization over time.": { nl: "Kleine, consistente verbeteringen in de manier waarop het werk is georganiseerd tillen de hele organisatie na verloop van tijd omhoog.", de: "Kleine, konsequente Verbesserungen bei der Arbeitsorganisation heben mit der Zeit die gesamte Organisation an." }
  };

  window.tr = function (s) {
    if (window.LANG === 'en' || s == null) return s;
    const e = T[s];
    return (e && e[window.LANG]) || s;
  };

  const SKIP_KEYS = new Set(['efpLeadEm']); // used to derive a CSS class, keep English
  window.translateData = function (d) {
    if (window.LANG === 'en') return d;
    const clone = JSON.parse(JSON.stringify(d));
    (function walk(o) {
      for (const k in o) {
        const v = o[k];
        if (typeof v === 'string') { if (!SKIP_KEYS.has(k)) o[k] = window.tr(v); }
        else if (v && typeof v === 'object') walk(v);
      }
    })(clone);
    return clone;
  };

  window.translateDOM = function (root) {
    if (window.LANG === 'en' || !root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(n => {
      const raw = n.nodeValue;
      const key = raw.trim();
      if (!key) return;
      const e = T[key];
      if (e && e[window.LANG]) n.nodeValue = raw.replace(key, e[window.LANG]);
    });
    root.querySelectorAll('[aria-label]').forEach(el => {
      const e = T[el.getAttribute('aria-label')];
      if (e && e[window.LANG]) el.setAttribute('aria-label', e[window.LANG]);
    });
  };
})();
