# Skill: Effectory Design System

Activeer deze skill wanneer iemand vraagt een **prototype**, **mockup**, **design**, **scherm**, **pagina** of **losse component-demo** te bouwen met onze design-system-componenten.

Laad voor elke bouwsessie eerst:
```
Read(".claude/skills/effectory-design-system/design-system-reference.md")
```

---

## Scope

| Bouwen | Niet bouwen |
|---|---|
| Schone productschermen | Documentatie-pagina's |
| Losse component-demo's | Navigatie- of docs-layout |
| Realistische workflows | Iets dat niet in de reference staat |

---

## Regels — altijd van toepassing

### 1. Alleen bestaande namen
Gebruik **uitsluitend** classes, tokens, varianten en iconnamen uit `design-system-reference.md`.
Verzin geen nieuwe class, token, icoon of variant — ook niet als workaround.

Als iets ontbreekt: **stop en meld het expliciet** vóór je verder bouwt.
> Voorbeeld: "De component `Badge` bestaat niet in `components.css`. Wil je dat ik een ticket aanmaak, of bouw je de Badge-stijl zelf?"

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

### 4. Iconen via `data-icon`
```html
<!-- ✅ -->
<i data-icon="search" style="display:flex;width:16px;height:16px;"></i>

<!-- ❌ -->
<svg ...>...</svg>  <!-- alleen voor puur decoratieve geometrie, nooit voor iconen -->
```
Gebruik alleen iconnamen uit de lijst in `design-system-reference.md` sectie 5.

### 5. tokens.css is auto-generated
Nooit `tokens.css` handmatig bewerken. Alleen lezen en gebruiken.
Regenereren: `python3 build-tokens.py`

### 6. Prototype is een productscherm
Een prototype ziet eruit als een echte pagina in de app — niet als een docs-pagina.
- Gebruik `--bg-interface-body` als paginaachtergrond
- Gebruik `--content-base` als standaard tekstkleur
- Geen docs-chrome (sidebar, tabs, TOC, etc.)

### 7. Altijd via lokale server openen — en `<base href="/">` verplicht
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
