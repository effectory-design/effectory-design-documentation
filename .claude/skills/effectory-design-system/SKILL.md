# Skill: Effectory Design System

Activeer deze skill wanneer iemand vraagt een **prototype**, **mockup**, **design**, **scherm**, **pagina** of **losse component-demo** te bouwen met onze design-system-componenten.

Laad voor elke bouwsessie eerst:
```
Read(".claude/skills/effectory-design-system/design-system-reference.md")
```

---

## Referentie-prototypes (bekende schermen)

In `reference-prototypes/` staan volledig uitgewerkte schermen met een vaste, goedgekeurde vorm. Herken ze op **intentie, niet op exacte woorden** — in welke taal of bewoording dan ook. Gaat een verzoek (ook impliciet) over zo'n scherm, dan is het **niet vrij in te vullen**: lees de referentie en neem die exact over.

1. Lees `reference-prototypes/<naam>.md` (layout, states, gedrag, regels).
2. Kopieer `reference-prototypes/<naam>.html` naar `prototypes/` en pas alleen aan wat de gebruiker vraagt. Verzin geen afwijkende layout of states.

**Beschikbare schermen**

- **Reports pagina** → `reference-prototypes/reports.md` + `reports.html`
  Het scherm waar je survey-rapporten downloadt (essential + raw-data reports, taalkeuze, generate/download), onderdeel van het results-/result-dashboard. Bedoelt iemand de reports- of rapporten-pagina, "download reports", of het rapporten-overzicht in het results-dashboard — in NL of EN, hoe dan ook geformuleerd — dan is dit het scherm.

- **Resultaten-dashboard — Overview** → `reference-prototypes/effectiveness-overview.md` + `effectiveness-overview.html`
  De overzichtspagina van het resultaten-dashboard: app-shell met een kaarten-grid (Effectiveness-matrix, Engagement, eNPS, Themes, Response rate, Workload/Retention/Well-being, Feel-good topics, Highest/Lowest scores) en een AI-samenvatting. Groep-switch (Team IT ↔ Novanta), periode-switch (Q2 ↔ Q3), EN/NL/DE-taalwissel, blur-overgang. Voor "resultaten-/results-dashboard", "overzichtspagina van de resultaten" of "engagement-dashboard".

- **Resultaten-dashboard — Focus View** → `reference-prototypes/effectiveness-focus.md` + `effectiveness-focus.html`
  Dezelfde app op het Focus View-tabblad: verdict + matrix ("At first glance"), "What needs focus" (laagste scores met aanbevolen acties) en "Celebrate your wins" (hoogste scores). Voor "focus view", "focus areas" of "aandachtsgebieden".

- **Effectiveness matrix side panel** → `reference-prototypes/effectiveness-panel.md` + `effectiveness-panel.html`
  Het rechter side panel van de Effectiveness-kaart: verdict, vergelijkings-matrix met markers, suggested focus, areas to focus, legenda.

- **Engagement side panel** → `reference-prototypes/engagement-panel.md` + `engagement-panel.html`
  Het rechter side panel van de Engagement-kaart: uitleg, verdeling betrokken medewerkers, vergelijkingskaarten + score-over-time, thema- en correlerende vragen.

- **eNPS side panel** → `reference-prototypes/enps-panel.md` + `enps-panel.html`
  Het rechter side panel van de eNPS-kaart: de score-berekening (Passive | Promoter − Detractor = eNPS), een diverging vergelijkings-bargrafiek (groep/previous/benchmark/top 3), de 1–10 aanbevelingsschaal met legenda, en de score-breakdown (promoters/passives/detractors). Voor "eNPS side panel", "eNPS-paneel" of "employee net promoter score panel".

- **Resultaten-dashboard — kaart-bibliotheek** → `reference-prototypes/dashboard-cards.md` + `dashboard-cards.html`
  Alle losse dashboard-kaarten in een grid (zonder chrome), om één kaart te hergebruiken of te kiezen welke kaarten een dashboard moet tonen.

- **Resultaten-dashboard — Themes** → `reference-prototypes/themes.md` + `themes.html`
  Het Themes-tabblad in het resultaten-dashboard: een theme-comparison kaart (Current/Previous/Benchmark bargroepen met **"Select filter"** icon button) en een grid met thema-kaarten (titel, pin, beschrijving, org-score, "View insights"). Voor "themes pagina", "thema's pagina", "themes view" of "thema-vergelijking" — in welke taal of bewoording dan ook.
- **Resultaten-dashboard — Scores** → `reference-prototypes/scores.md` + `scores.html`
  Het Scores-tabblad: een full-width tabel met alle vragen gegroepeerd per thema, met een bevroren vraagkolom (Asana-stijl scheidingslijn) + horizontaal scrollende, heatmap-gekleurde vergelijkingskolommen, een Comparisons-popover (Quick comparisons chips + Segments/Age-crossing met kolommen), een zwevende legenda, en een vraag-side-panel (5-punts antwoorddistributie met "X% agree"-bracket, score-vergelijkingskaarten, score-over-time grafiek, thema-vragen). Voor "scores pagina", "scores view", "scores prototype" of "vragen & scores tabel" — in welke taal of bewoording dan ook.

**Bij een resultaten-dashboard (Overview of Focus View): vraag eerst**
1. **welke kaarten** op het overzicht moeten staan (standaard: alle bovengenoemde kaarten), en
2. of de bijbehorende **side panels** ook gemaakt moeten worden. Elk side panel opent vanuit zijn kaart, dus bied een panel alléén aan als die kaart op het dashboard staat: **Effectiveness-kaart → Effectiveness panel**, **Engagement-kaart → Engagement panel**, **eNPS-kaart → eNPS panel**. (Staat de eNPS-kaart op het overzicht, vraag dan dus expliciet of het eNPS side panel ook gebouwd moet worden.)
Bouw daarna met de bijbehorende referenties hierboven.

Twijfel je of een verzoek dit scherm bedoelt? Ga uit van ja en gebruik de referentie. Staat het gevraagde scherm er niet bij, bouw dan normaal volgens de reference.

---

## Scope

| Bouwen | Niet bouwen |
|---|---|
| Schone productschermen | Documentatie-pagina's |
| Losse component-demo's | Navigatie- of docs-layout |
| Realistische workflows | Iets dat niet in de reference staat |

---

## Component-keuze (let op gelijkende namen)

- **Page Header** (`.ph`) = titelblok bovenaan een hele view (de page-`h1`). **Section Header** (`.sh`) = kop van een blok *binnen* een pagina.
- **Announcement** (`.announcement`) = compacte, non-blocking card. **Announcement Dialog** (`.dlg`) = modale, meerstaps release-tour. **Dialog** (`.dialog`) = generieke modale kaart.

Kies bewust de juiste; verzin geen mengvorm. Markup staat in `design-system-reference.md` sectie 4.

---

## Regels — altijd van toepassing

### 1. Alleen bestaande namen
Gebruik **uitsluitend** classes, tokens, varianten en iconnamen uit `design-system-reference.md`.
Verzin geen nieuwe class, token, icoon of variant — ook niet als workaround.

Als iets ontbreekt: **stop en meld het expliciet** vóór je verder bouwt.
> Voorbeeld: "De component `Badge` bestaat niet in `components.css`. Wil je dat ik een ticket aanmaak, of bouw je de Badge-stijl zelf?"

**Het design system is de source of truth.** `components.css`, `tokens.css` en `design-system-reference.md` zijn leidend voor styling — radius, font-size, spacing, states en structuur. Figma en screenshots zijn **referenties, geen autoriteit**. Pak altijd eerst het bestaande component/patroon uit het design system en neem de exacte styling daarvan over (gebruik de echte DS-classes, bijv. `.menu` / `.menu-item` voor een single-select, `.dialog` / `.dialog-subtitle` voor een confirm-dialog). Wijkt Figma af van het design system, volg dan het design system en **meld** dat Figma niet helemaal consistent is.

### 2. HTML-boilerplate
Gebruik de boilerplate uit `design-system-reference.md` sectie 1, met deze links in volgorde:
1. `tokens.css`
2. `foundation.css`
3. `components.css`
4. `icons.js` (onderaan `<body>`)

**Nooit meenemen:**
- `nav.html`, `nav.js`
- `styles.css`
- Classes: `.shell` `.topnav` `.sidebar` `.content-wrap` `.page-header` `.page-tabs` `.tab-panel` `.states-row` `.state-col` `.dd-grid` `.dd-card` `.dd-prev` `.variant-rows` `.variant-row` `.token-table` `.pg-card` `.pg-preview` `.dev-preview` `.dev-code-wrap` `.toc-col` `.section` `.pagination` `.anatomy-fig` `.anatomy-items`

### 3. Tokens, geen hardcoded waarden
Gebruik altijd design tokens of foundation-variabelen voor kleuren, spacing en shadows.
Nooit: `color: #0a9d99`, `padding: 16px`, `box-shadow: 0 2px 4px ...`
Altijd: `color: var(--content-brand-base)`, `padding: var(--spacing-base)`, `box-shadow: var(--sh-card)`

### 4. UX-copy via de `ux-copy` skill
Alle zichtbare tekst in een prototype (knoppen, labels, helper text, placeholders, errors, empty states, tooltips, dialog-titels, notificaties, microcopy in component-demo's) **moet** via de **`ux-copy`** skill geschreven of gereviewd worden, zodat de tekst in de Effectory tone of voice staat.

Roep `ux-copy` aan zodra je tekst gaat schrijven of wijzigen — niet alleen op expliciet verzoek. Bouw je een prototype, mockup, scherm of component-demo met copy erin, dan hoort `ux-copy` standaard in de flow: schrijf nooit zelf "vrije" UI-tekst.

### 5. Iconen via `data-icon`
```html
<!-- ✅ -->
<i data-icon="search" style="display:flex;width:16px;height:16px;"></i>

<!-- ❌ -->
<svg ...>...</svg>  <!-- alleen voor puur decoratieve geometrie, nooit voor iconen -->
```
Gebruik alleen iconnamen uit de lijst in `design-system-reference.md` sectie 5.

### 6. tokens.css is auto-generated
Nooit `tokens.css` handmatig bewerken. Alleen lezen en gebruiken.
Regenereren: `python3 build-tokens.py`

### 7. Prototype is een productscherm
Een prototype ziet eruit als een echte pagina in de app — niet als een docs-pagina.
- Gebruik `--bg-interface-body` als paginaachtergrond
- Gebruik `--content-base` als standaard tekstkleur
- Geen docs-chrome (sidebar, tabs, TOC, etc.)

### 8. Altijd via lokale server openen — en `<base href="/">` verplicht
Prototypes in `prototypes/` staan in een submap. `icons.js` fetcht SVGs relatief aan het HTML-document, niet het script. Zonder `<base href="/">` wordt `assets/icons/` omgezet naar `prototypes/assets/icons/` — die map bestaat niet. Iconen laden dan niet, ook niet via http.

Altijd in de `<head>` van elk prototype:
```html
<base href="/" />
```
En gebruik root-relatieve paden voor alle assets:
```html
<link rel="stylesheet" href="/tokens.css" />
<link rel="stylesheet" href="/foundation.css" />
<link rel="stylesheet" href="/components.css" />
...
<script src="/icons.js"></script>
```

Bovendien: open prototypes altijd via `python3 serve.py` → `http://localhost:<poort>/...`.
Nooit via dubbelklik (`file://`) — CSS-masks voor het Toggle-vinkje werken dan ook niet.

### 9. Animaties via motion-tokens en `.overlay`
Verzin geen eigen duraties of easings — gebruik de motion-tokens (`--motion-fast/base/slow`, `--ease-out/in/standard`; zie reference sectie 2 → Motion).
Toon een dialog of side panel altijd in een `.overlay`, dan komt de juiste enter-animatie automatisch mee:
```html
<div class="overlay"><div class="dialog dialog-s"> … </div></div>        <!-- scale 0.8→1, backdrop fade -->
<div class="overlay is-right"><div class="sidepanel"> … </div></div>     <!-- slide van rechts -->
```
De backdrop gebruikt `--bg-interface-overlay`. `prefers-reduced-motion` is al afgevangen.

### 10. Icon buttons hebben ALTIJD een tooltip
Een icoon-only knop (`.ib` / icon button) is zonder label niet te begrijpen. Geef elke icon button **altijd** een tooltip die het doel benoemt, plus een `aria-label` met dezelfde tekst.
```html
<!-- ✅ tooltip via de .tt-demo wrapper + .tooltip bubble; aria-label = dezelfde tekst -->
<div class="tt-demo">
  <button class="ib ib-secondary" aria-label="Edit"><i data-icon="edit"></i></button>
  <div class="tooltip is-above">Edit</div>
</div>

<!-- ❌ nooit een naakte icon button zonder label/tooltip -->
<button class="ib"><i data-icon="edit"></i></button>
```
Geldt voor elke icon-only knop (toolbar-acties, close-knoppen die alleen een icoon tonen, kebab-menu's, enz.). Knoppen mét zichtbare tekst hebben geen tooltip nodig. In Angular: de `matTooltip`-directive op de knop.

### 11. Paginabreedte & padding — uit de grid-regel, nooit uit de Figma-artboard
Layout-maten komen **altijd** uit de grid/layout-regel in `design-system-reference.md` §2 — **nooit** uit de Figma-frame/artboard (1440/1920px is canvas; reken nooit `artboard − sidebar`).

**Page padding is responsive en geldt voor de héle pagina** (breadcrumb, header, tabs én content gebruiken dezelfde horizontale padding, zodat alles op één lijn begint):

| Breakpoint | Horizontaal | Verticaal | Navigatie |
|---|---|---|---|
| Desktop ≥1200px | **64px** | 48px | sidebar 240px, altijd zichtbaar |
| Tablet 576–1199px | 24px | 32px | hamburger |
| Mobile <576px | 16px | 24px | hamburger |

Token-gebaseerd: 64 = `--spacing-extra-loose × 2`, 48 = `--spacing-loose × 2`, 24 = `--spacing-loose`, 32 = `--spacing-extra-loose`, 16 = `--spacing-base`. Zet ze in responsive CSS-vars en gebruik die overal (`padding: var(--pad-y) var(--pad-x)`).

**Content-breedte (los van de page-padding):**
- **wide 1200px — de default voor app-pagina's, card-grids én dashboards** → een gecentreerde kolom van max. 1200px content, met de page-padding als gutter. Een resultaten-dashboard(-tab) is **wide**, géén full-width.
- **narrow 960px** → lezen, formulieren, focus-flows.
- **full-width (geen cap)** → alléén data-zware tabellen / complexe UI's die de volle breedte echt nodig hebben.

> ⚠️ Onder de globale `* { box-sizing: border-box }`-reset (boilerplate §1) telt een max-width-cap de padding mee. Voor 1200px content **mét** page-padding: `max-width: calc(1200px + 2 * var(--page-x)); margin-inline: auto;`. Zet **nooit** `max-width: 1200px` op een wrapper die zelf horizontale padding heeft — dan wordt de content `1200 − 2×padding` (bijv. 1152 of 1072) en oogt er te veel ruimte aan de zijkanten. (Dit ging eerder mis.)

---

## Workflow

1. **Lees de reference** — laad `design-system-reference.md` volledig
2. **Begrijp de vraag** — welk scherm, welke componenten, welke flow?
3. **Controleer beschikbaarheid** — staan alle benodigde componenten en tokens in de reference?
   - Niet beschikbaar → stop en meld het aan de gebruiker
4. **Bouw incrementeel** — begin met de HTML-structuur, voeg components toe, stel layout in met tokens
5. **Geen eigen stijlen** — custom CSS alleen voor layout-specifieke zaken (positionering, grid, flex), altijd met tokens voor waarden
6. **Review** — check de output op doc-classes en hardcoded waarden vóór oplevering
7. **Lokale server vereist** — meld na het bouwen altijd:
   > ⚠️ Open dit prototype via de lokale server, **niet** via dubbelklik (file://).
   > SVG-maskers (o.a. Toggle-vinkje) en icoonfuncties werken niet zonder HTTP.
   > Start de server met `python3 serve.py` en open daarna:
   > `http://localhost:<poort>/prototypes/<bestandsnaam>.html`

---

## Voorbeeld custom CSS in een prototype (toegestaan)

```css
.dashboard-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--spacing-loose);
  padding: var(--spacing-extra-loose);
}
.card {
  background: var(--bg-base);
  border: 1px solid var(--border-base);
  border-radius: var(--radius-lg);
  box-shadow: var(--sh-card);
  padding: var(--spacing-loose);
}
```
