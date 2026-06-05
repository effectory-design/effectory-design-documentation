# Engage Design System — Reference

Auto-generated source: `tokens.css`, `foundation.css`, `components.css`, `assets/icons/`
Do NOT invent names. If something isn't listed here, it does not exist.

---

## 1. HTML boilerplate voor een prototype

```html
<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Prototype</title>
  <base href="/" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/tokens.css" />
  <link rel="stylesheet" href="/foundation.css" />
  <link rel="stylesheet" href="/components.css" />
  <style>
    body { background: var(--bg-interface-body); color: var(--content-base); font-family: 'Poppins', sans-serif; }
  </style>
</head>
<body>
  <!-- prototype content here -->
  <script src="/icons.js"></script>
</body>
</html>
```

**Waarom `<base href="/">` en root-relatieve paden:**
`icons.js` fetcht SVGs via `fetch('assets/icons/...')`. Browsers resolven `fetch`-paden relatief aan het HTML-document, niet het script. Vanuit `prototypes/` zou dat naar `prototypes/assets/icons/` wijzen — die map bestaat niet. `<base href="/">` forceert resolutie vanaf de server-root, zodat iconen, CSS én de toggle-mask altijd correct laden. Altijd `<base href="/">` gebruiken voor prototypes in een submap.

**Nooit meenemen:** `nav.html`, `nav.js`, `.shell`, `.topnav`, `.sidebar`, `.content-wrap`, `.page-header`, `.page-tabs`, `.tab-panel`, `.states-row`, `.state-col`, `.dd-grid`, `.token-table`, `.pg-card`, `.dev-preview`, `.dev-code-wrap`, `.toc-col`, `.section`, `.pagination`

---

## 2. Foundation-variabelen (`foundation.css`)

### Spacing
| Token | Waarde |
|---|---|
| `--spacing-extra-tight` | `4px` |
| `--spacing-tight` | `8px` |
| `--spacing-base-tight` | `12px` |
| `--spacing-base` | `16px` |
| `--spacing-loose` | `24px` |
| `--spacing-extra-loose` | `32px` |
| `--spacing-super-loose` | `40px` |
| `--spacing-super-extra-loose` | `56px` |

### Border radius
| Token | Waarde |
|---|---|
| `--radius-none` | `0` |
| `--radius-sm` | `4px` |
| `--radius-base` | `6px` |
| `--radius-md` | `8px` |
| `--radius-lg` | `12px` |
| `--radius-xl` | `16px` |
| `--radius-full` | `999px` |
| `--radius` | alias → `--radius-md` |

### Shadows
| Token | Gebruik |
|---|---|
| `--sh-action` | Buttons, inputs (rest) |
| `--sh-action-hover` | Buttons, inputs (hover) |
| `--sh-card` | Cards (rest) |
| `--sh-card-hover` | Cards (hover) |
| `--sh-popovers` | Dropdowns, menus |
| `--sh-dialogs` | Dialogs |
| `--sh-footer` | Footer bars |
| `--sh-slide-panel` | Slide-in panels |

### Typografie-utility-classes
```
.text-l1   42px / 600 / -.03em    heading niveau 1
.text-l2   32px / 600 / -.02em    heading niveau 2
.text-l3   26px / 600 / -.02em    heading niveau 3
.text-l4   20px / 600 / -.01em    heading niveau 4
.text-l5   16px / 600 / 0         heading niveau 5
.text-l6   12px / 600 / .08em     label uppercase (content-subtle)
.text-small   12px / lh 1.5
.text-medium  14px / lh 1.6
.text-large   16px / lh 1.6
.text-w600 / .text-w500 / .text-w400   font-weight helpers
.text-subdued  color: var(--content-subtle)
```

**Toegestane font-size waarden: 12, 14, 16, 20, 26, 32, 42px — niets anders.**
Gebruik altijd een van de klassen hierboven of een inline `font-size` die exact overeenkomt met een van deze waarden. Waarden zoals `13px`, `15px` of `11px` bestaan niet in het systeem en mogen nooit worden gebruikt.

---

## 3. Design tokens (`tokens.css`)

Tokens zijn auto-generated vanuit Figma via `build-tokens.py`. Nooit handmatig bewerken.

### Dark mode
`tokens.css` bevat drie dark-mode lagen:
1. `@media (prefers-color-scheme: dark)` — automatisch op systeemvoorkeur
2. `html[data-theme="dark"]` — expliciet dark
3. `html[data-theme="light"]` — expliciet light (forceert light ook in dark-OS)

### Portals
- Default (Coordinator): teal brand (`--bg-brand-base: #0a9d99`)
- Personal portal: `html[data-portal="personal"]` → geel brand (`--bg-brand-base: #fecd29`)

### Semantische tokens — selectie voor prototype-gebruik

**Achtergronden**
| Token | Light waarde |
|---|---|
| `--bg-base` | `#ffffff` |
| `--bg-base-hover` | `#f8f8f9` |
| `--bg-base-pressed` | `#f1f2f4` |
| `--bg-secondary` | `#f8f8f9` |
| `--bg-tertiary` | `#e1e4e8` |
| `--bg-brand-base` | `#0a9d99` |
| `--bg-brand-subtle` | `#d2f8f6` |
| `--bg-input` | `#ffffff` |
| `--bg-disabled` | `rgba(25,39,67,.10)` |
| `--bg-negative-base` | `#d3353b` |
| `--bg-negative-subtle` | `#ffebeb` |
| `--bg-positive-base` | `#278747` |
| `--bg-positive-subtle` | `#d7f9e0` |
| `--bg-info-base` | `#3174db` |
| `--bg-info-subtle` | `#e6f0fe` |
| `--bg-warning-bold` | `#fa8324` |
| `--bg-warning-subtle` | `#feede1` |
| `--bg-highlight-base` | `#fdbd12` |
| `--bg-highlight-subtle` | `#ffefc2` |
| `--bg-inverse-base` | `#192743` |
| `--bg-interface-body` | `#ffffff` |

**Borders**
| Token | Light waarde |
|---|---|
| `--border-base` | `#e1e4e8` |
| `--border-action` | `#bcc1cd` |
| `--border-action-hover` | `#a5adbc` |
| `--border-brand-base` | `#0c827f` |
| `--border-brand-subtle` | `#7adddb` |
| `--border-negative-base` | `#b9252a` |
| `--border-positive-base` | `#39a35c` |
| `--border-info-base` | `#3174db` |
| `--border-warning-base` | `#ec6e0a` |
| `--border-highlight-base` | `#d68100` |
| `--border-disabled` | `rgba(25,39,67,.30)` |

**Tekst / iconen**
| Token | Light waarde |
|---|---|
| `--content-base` | `#192743` |
| `--content-secondary` | `rgba(25,39,67,.80)` |
| `--content-subtle` | `rgba(25,39,67,.50)` |
| `--content-placeholder` | `rgba(25,39,67,.67)` |
| `--content-disabled` | `rgba(25,39,67,.30)` |
| `--content-brand-base` | `#166764` |
| `--content-on-brand-base` | `#ffffff` |
| `--content-negative-base` | `#b9252a` |
| `--content-negative-secondary` | `#d3353b` |
| `--content-positive-base` | `#236e41` |
| `--content-info-base` | `#205bb9` |
| `--content-warning-base` | `#a83e00` |
| `--content-highlight-base` | `#8a4b15` |
| `--content-inverse-base` | `#ffffff` |

**Accent-kleuren** (voor badges, tags, highlights)
Patroon: `--bg-accent-{kleur}-base` / `--bg-accent-{kleur}-subtle`
Kleuren: `blue`, `green`, `orange`, `purple`, `red`, `turquoise`, `yellow`
Overeenkomstige border: `--border-accent-{kleur}-base`
Overeenkomstige tekst: `--content-accent-{kleur}-base`

---

## 4. Componenten (`components.css`)

### Button
```html
<!-- Primary -->
<button class="btn btn-primary">Label</button>
<button class="btn btn-primary"><i data-icon="plus"></i> Label</button>

<!-- Secondary -->
<button class="btn btn-secondary">Label</button>

<!-- Tertiary -->
<button class="btn btn-tertiary">Label</button>

<!-- Danger (filled) -->
<button class="btn btn-danger">Verwijderen</button>

<!-- Danger secondary -->
<button class="btn btn-danger-secondary">Verwijderen</button>

<!-- Danger tertiary -->
<button class="btn btn-danger-tertiary">Verwijderen</button>

<!-- Link -->
<button class="btn btn-link">Meer info</button>

<!-- Link delete -->
<button class="btn btn-link-delete">Verwijderen</button>

<!-- Disabled (elke variant) -->
<button class="btn btn-primary is-disabled" disabled>Label</button>
```
States: `.is-hover` `.is-pressed` `.is-disabled`

### Button Big
```html
<button class="btn-big btn-big-primary">Aan de slag</button>
<button class="btn-big btn-big-secondary">Meer weten</button>
<button class="btn-big btn-big-primary is-disabled" disabled>Disabled</button>
```
States: `.is-hover` `.is-pressed` `.is-disabled`

### Upgrade Button
```html
<button class="btn-upgrade">
  <span class="btn-upgrade-badge"><i data-icon="arrow-up"></i></span>
  Upgrade
</button>
```
States: `.is-hover` `.is-pressed` `.is-disabled`

### Icon Button
Vierkante knop met alleen een icoon. Maat via `.ib-36` (16px icoon) of `.ib-24` (12px icoon); variant via `.ib-primary` / `.ib-secondary` / `.ib-tertiary`. Altijd een `aria-label` meegeven.
```html
<button class="ib ib-36 ib-secondary" aria-label="Sluiten"><i data-icon="cross"></i></button>
<button class="ib ib-36 ib-primary" aria-label="Toevoegen"><i data-icon="plus"></i></button>
<button class="ib ib-24 ib-tertiary" aria-label="Meer"><i data-icon="more-horizontal"></i></button>
```
Secondary = witte vulling + 1px `--border-action` + subtiele `--sh-action` (bijv. de close-knop op een dialog). States: `.is-hover` `.is-pressed` `.is-disabled`.

### Text Field
```html
<!-- Standaard -->
<div class="tf-wrap">
  <label class="tf-lbl">Label <span class="tf-required">*</span></label>
  <div class="tf-field">
    <input class="tf" type="text" placeholder="Placeholder" />
  </div>
  <span class="tf-help">Helper tekst</span>
</div>

<!-- Met leading icon -->
<div class="tf-wrap">
  <label class="tf-lbl">Zoeken</label>
  <div class="tf-field">
    <span class="tf-field-icon tf-icon-left"><i data-icon="search"></i></span>
    <input class="tf" type="text" placeholder="Zoek..." />
  </div>
</div>

<!-- Error state -->
<div class="tf-wrap">
  <label class="tf-lbl">E-mail</label>
  <div class="tf-field">
    <input class="tf is-error" type="email" value="fout@" />
  </div>
  <span class="tf-err"><i data-icon="alert-circle"></i> Ongeldig e-mailadres</span>
</div>

<!-- Inline variant -->
<input class="tf-inline" type="text" value="Inline tekst" />

<!-- Inline number variant -->
<div class="tf-num-wrap">
  <input class="tf-num" type="number" value="42" />
  <span class="tf-num-lbl">%</span>
  <div class="tf-num-stepper">
    <button class="tf-num-btn"><i data-icon="chevron-up"></i></button>
    <button class="tf-num-btn"><i data-icon="chevron-down"></i></button>
  </div>
</div>
```
States op `input.tf`: `.is-hover` `.is-focus` `.is-error` `.is-disabled` `.is-readonly`
States op `.tf-num-wrap`: `.is-hover` `.is-focus` `.is-error` `.is-disabled`

### Search
```html
<div class="search-wrap">
  <span class="search-icon"><i data-icon="search"></i></span>
  <input type="search" class="srch" placeholder="Zoeken..." />
</div>
```
States op `input.srch`: `.is-hover` `.is-focus` `.is-disabled`

### Textarea
```html
<div class="ta-wrap">
  <label class="ta-lbl">Omschrijving <span class="ta-required">*</span></label>
  <textarea class="ta" rows="4" placeholder="Typ hier..."></textarea>
  <span class="ta-help">Max. 500 tekens</span>
</div>

<!-- Error state -->
<div class="ta-wrap">
  <label class="ta-lbl">Omschrijving</label>
  <textarea class="ta is-error"></textarea>
  <span class="ta-err"><i data-icon="alert-circle"></i> Verplicht veld</span>
</div>
```
States op `textarea.ta`: `.is-hover` `.is-focus` `.is-error` `.is-disabled`

### Select (Single)
```html
<div class="slt-wrap">
  <label class="slt-lbl">Keuze</label>
  <div class="slt" tabindex="0">
    <span class="slt-left">
      <span class="slt-ph">Selecteer...</span>
    </span>
    <i data-icon="chevron-down"></i>
  </div>
</div>

<!-- Met geselecteerde waarde -->
<div class="slt" tabindex="0">
  <span class="slt-left"><span class="slt-val">Optie A</span></span>
  <i data-icon="chevron-down"></i>
</div>
```
States: `.is-hover` `.is-focus` `.is-typing` `.is-error` `.is-warning` `.is-disabled`

### Select (Multi)
```html
<div class="ms" tabindex="0">
  <span class="ms-ph">Selecteer opties...</span>
  <span class="ms-ch"><i data-icon="chevron-down"></i></span>
</div>

<!-- Met chips -->
<div class="ms">
  <span class="chip">Optie A <i data-icon="cross"></i></span>
  <span class="chip">Optie B <i data-icon="cross"></i></span>
  <span class="ms-ch"><i data-icon="chevron-down"></i></span>
</div>
```
Chip-varianten: `.chip` `.chip-info` `.chip-error` `.chip-warning`

### Selection Button
```html
<button class="sel-btn">
  <span class="sel-btn-name">Filter</span>
  <span class="sel-btn-value">Actief</span>
  <i data-icon="chevron-down"></i>
</button>

<!-- Inline variant -->
<button class="sel-btn sel-btn-inline">
  <span class="sel-btn-name">Sorteren</span>
  <i data-icon="chevron-down"></i>
</button>
```
States: `.is-hover` `.is-pressed` `.is-focus`

### Dropdown menu
```html
<div class="menu">
  <div class="menu-item">Optie 1</div>
  <div class="menu-item is-selected">Optie 2</div>
  <div class="menu-divider"></div>
  <div class="menu-item">Optie 3</div>
</div>

<!-- Met zoekbalk -->
<div class="menu">
  <div class="menu-search">
    <i data-icon="search"></i>
    <input placeholder="Zoeken..." />
  </div>
  <div class="menu-item">Resultaat</div>
  <div class="menu-empty">Geen resultaten</div>
</div>

<!-- Met groepslabel -->
<div class="menu">
  <div class="menu-group-lbl">Groep A</div>
  <div class="menu-item">
    <span class="menu-item-body">
      <span class="menu-item-title">Titel</span>
      <span class="menu-item-sub">Subtitel</span>
    </span>
  </div>
</div>
```
States op `.menu-item`: `.is-selected` `.is-focus`

### Checkbox
```html
<!-- Bare -->
<span class="cb-wrap">
  <input type="checkbox" class="cb" />
</span>

<!-- Labeled -->
<label class="cb-label-wrap">
  <span class="cb-wrap"><input type="checkbox" class="cb" /></span>
  Optie label
</label>

<!-- Met beschrijving -->
<div class="cb-info-wrap">
  <span class="cb-wrap"><input type="checkbox" class="cb" /></span>
  <div class="cb-info-body">
    <span class="cb-info-label">Titel</span>
    <span class="cb-info-desc">Korte beschrijving</span>
  </div>
</div>

<!-- Checkbox button (ghost) -->
<button class="cb-btn">
  <span class="cb-wrap"><input type="checkbox" class="cb" /></span>
  Label
</button>

<!-- Checkbox button (bordered) -->
<button class="cb-btn-bordered">
  <span class="cb-wrap"><input type="checkbox" class="cb" /></span>
  Label
</button>

<!-- Tile -->
<div class="cb-tile">
  <div class="cb-tile-cb"><span class="cb-wrap"><input type="checkbox" class="cb" /></span></div>
  <div class="cb-tile-body">
    <div class="cb-tile-title">Titel</div>
    <div class="cb-tile-desc">Beschrijving</div>
  </div>
</div>
```
Groottes: `.cb-large` / `.cb-lg` op de `input` (20×20 px)
States op `input.cb`: `.is-hover` `.is-checked` `.is-indeterminate` `.is-disabled`
State op `.cb-label-wrap` / `.cb-info-wrap` / `.cb-btn` / `.cb-btn-bordered`: `.is-disabled`

### Radio Group
```html
<!-- Bare -->
<span class="rb-wrap">
  <input type="radio" class="rb" name="g1" />
</span>

<!-- Labeled -->
<label class="rb-label-wrap">
  <span class="rb-wrap"><input type="radio" class="rb" name="g1" /></span>
  Optie A
</label>

<!-- Met beschrijving -->
<div class="rb-info-wrap">
  <span class="rb-wrap"><input type="radio" class="rb" name="g1" /></span>
  <div class="rb-info-body">
    <span class="rb-info-label">Titel</span>
    <span class="rb-info-desc">Beschrijving</span>
  </div>
</div>

<!-- Groep -->
<div class="rb-group">
  <label class="rb-label-wrap">
    <span class="rb-wrap"><input type="radio" class="rb" name="g1" /></span>Optie A
  </label>
  <label class="rb-label-wrap">
    <span class="rb-wrap"><input type="radio" class="rb" name="g1" /></span>Optie B
  </label>
</div>

<!-- Tile -->
<div class="rb-tile">
  <div class="rb-tile-radio"><span class="rb-wrap"><input type="radio" class="rb" name="g1" /></span></div>
  <div class="rb-tile-body">
    <div class="rb-tile-title">Titel</div>
    <div class="rb-tile-desc">Beschrijving</div>
  </div>
</div>

<!-- Button ghost -->
<button class="rb-btn-ghost">
  <span class="rb-wrap"><input type="radio" class="rb" /></span>
  Label
</button>

<!-- Button bordered -->
<button class="rb-btn-bordered">
  <span class="rb-wrap"><input type="radio" class="rb" /></span>
  Label
</button>
```
Grootte: `.rb-lg` op `input` (20×20 px)
States op `input.rb`: `.is-hover` `.is-checked` `.is-disabled`
State op wrappers: `.is-disabled`

### Toggle
```html
<!-- Bare -->
<label class="tgl-wrap">
  <input type="checkbox" class="tgl" />
  <span class="tgl-track"><span class="tgl-thumb"></span></span>
</label>

<!-- Labeled -->
<label class="tgl-label-wrap">
  <span class="tgl-wrap">
    <input type="checkbox" class="tgl" />
    <span class="tgl-track"><span class="tgl-thumb"></span></span>
  </span>
  Meldingen aan
</label>

<!-- Met beschrijving -->
<div class="tgl-info-wrap">
  <span class="tgl-wrap">
    <input type="checkbox" class="tgl" />
    <span class="tgl-track"><span class="tgl-thumb"></span></span>
  </span>
  <div class="tgl-info-body">
    <span class="tgl-info-label">Titel</span>
    <span class="tgl-info-desc">Beschrijving van de instelling</span>
  </div>
</div>
```
On-state: `input.tgl:checked` (native) of `.tgl-track.is-on` (statisch)
States op `.tgl-track`: `.is-on` `.is-hover` `.is-disabled`
States op wrappers: `.is-disabled`

### Date Picker
```html
<!-- Trigger knop -->
<button class="dp-trigger">
  <i data-icon="calendar"></i>
  12 jan 2025
  <i data-icon="chevron-down"></i>
</button>

<!-- Kalender popup -->
<div class="dp">
  <div class="dp-body">
    <div class="dp-header">
      <div class="dp-month-group">
        <span class="dp-month-label">Januari 2025</span>
        <i data-icon="chevron-down"></i>
      </div>
      <div class="dp-nav">
        <button class="dp-nav-btn"><i data-icon="chevron-left"></i></button>
        <button class="dp-nav-btn"><i data-icon="chevron-right"></i></button>
      </div>
    </div>
    <div class="dp-weekdays">
      <div class="dp-wday">Ma</div><!-- ... -->
    </div>
    <div class="dp-grid">
      <div class="dp-day">1</div>
      <div class="dp-day is-today">2</div>
      <div class="dp-day is-selected">3</div>
      <div class="dp-day is-disabled">4</div>
      <div class="dp-day is-other-month">31</div>
    </div>
  </div>
  <div class="dp-footer">
    <button class="btn-dp-cancel">Annuleren</button>
    <button class="btn-dp-apply">Toepassen</button>
  </div>
</div>

<!-- Inline kalender (geen border/shadow) -->
<div class="dp dp-inline">...</div>
```
States op `.dp-day`: `.is-today` `.is-selected` `.is-hover` `.is-disabled` `.is-other-month` `.is-empty`
Range states: `.is-range-start` `.is-range-end` `.is-in-range`
Trigger states: `.is-hover` `.is-focus` `.is-open`

### Inline notification
Moods heten in code (Angular `messageType`): **`subtle` · `info` · `warn` · `success` · `error`**. De prototype-classes volgen deze namen: `is-subtle` `is-info` `is-warn` `is-success` `is-error`. Layout: standaard gestapeld; voeg `.is-one-liner` toe voor één regel.

```html
<!-- Stacked (default — title boven message) -->
<div class="inline-notif is-info">
  <img class="inline-notif-icon" src="/assets/icons/notification-information.svg" alt="" />
  <div class="inline-notif-content">
    <span class="inline-notif-text">
      <span class="inline-notif-title">Heads up!</span>
      <span class="inline-notif-msg">This alert needs your attention</span>
    </span>
  </div>
  <button class="inline-notif-close" aria-label="Dismiss"><i data-icon="cross"></i></button>
</div>

<!-- One-liner (titel + message lopen door als één tekst, knop blijft rechts) -->
<div class="inline-notif is-warn is-one-liner">
  <img class="inline-notif-icon" src="/assets/icons/notification-warning.svg" alt="" />
  <div class="inline-notif-content">
    <span class="inline-notif-text">
      <span class="inline-notif-title">Warning!</span>
      <span class="inline-notif-msg">Better check yourself, you're not looking too good</span>
    </span>
    <div class="inline-notif-actions">
      <button class="btn btn-secondary">Renew now</button>
    </div>
  </div>
  <button class="inline-notif-close" aria-label="Dismiss"><i data-icon="cross"></i></button>
</div>

<!-- Subtle met actieknop -->
<div class="inline-notif is-subtle">
  <span class="inline-notif-icon is-subtle"><i data-icon="featured"></i></span>
  <div class="inline-notif-content">
    <span class="inline-notif-text">
      <span class="inline-notif-title">New feature!</span>
      <span class="inline-notif-msg">We released a new feature you might want to use</span>
    </span>
    <div class="inline-notif-actions">
      <button class="btn btn-secondary">Try it</button>
    </div>
  </div>
  <button class="inline-notif-close" aria-label="Dismiss"><i data-icon="cross"></i></button>
</div>
```

**Structuur:** titel + message zitten samen in `<span class="inline-notif-text">`, en `.inline-notif-actions` is een **sibling** daarvan binnen `.inline-notif-content`. Layout volgt vanzelf:
- **Stacked (default):** text-blok boven, actieknop(pen) eronder.
- **One-liner (`.is-one-liner`):** titel + message lopen door als één doorlopende tekst (wrapt samen naar de volgende regel); de actieknoppen blijven **rechts** op de regel.

**Icoon-keuze per mood:**
- `.is-info` → `<img src="/assets/icons/notification-information.svg">` (blauwe cirkel met "i")
- `.is-warn` → `<img src="/assets/icons/notification-warning.svg">` (oranje cirkel met "!")
- `.is-success` → `<img src="/assets/icons/notification-positive.svg">` (groene cirkel met "✓")
- `.is-error` → `<img src="/assets/icons/notification-negative.svg">` (rode cirkel met "!")
- `.is-subtle` → `<span class="inline-notif-icon is-subtle"><i data-icon="featured"></i></span>` (oranje sparkle op witte card)

Belangrijk: voor de vier gekleurde moods **altijd `<img>` gebruiken** — niet `<i data-icon="…">`. De cirkel zit in de SVG zelf en `icons.js` zou de kleuren wegnormaliseren tot één `currentColor`.

**Acties — volg de live styleguide. Per mood zetten we accent-variabelen op `.inline-notif` (`--notif-accent`, `--notif-accent-border`, `--notif-accent-on`); de knoppen lezen die.**
- **Sentiment action button** — `btn btn-secondary` (wit + mood-rand) of `btn btn-primary` (gevuld in mood-kleur), max 3, via Angular `[buttonMessages]`. Staat **onder** de tekst (stacked) of **rechts** (one-liner). Voor `is-subtle` is de secondary-rand neutraal grijs (`--border-action`), de primary blijft brand-teal.
- **Link button** — `[inlineButtonText]` + `(inlineButtonCallback)`. Staat in de **actie-rij** naast de knoppen. Voert een **actie** uit (navigeert niet), gestyled als link maar **zónder underline**. In prototypes: `<button class="link-inline" style="text-decoration:none;">` binnen `.inline-notif-actions`.
- **Link** — `[linkText]` + `[linkHref]`. Staat ook in de **actie-rij**. Een echte `<a>` die **navigeert**, **mét underline**. In prototypes: `<a class="link-inline">` binnen `.inline-notif-actions`.

In de actie-rij mag dus een link óf een link button naast de actieknoppen komen.
Regel (algemeen): inline links en links zien er hetzelfde uit (underline); een link button heeft géén underline omdat het een actie is.
Sluitknop-states: `.is-hover` `.is-focus`.
Toegankelijkheid: `role="alert"` voor Warn/Error; `role="status"` voor de rest. Close-button altijd met `aria-label`.

> ⚠️ **Dev/Figma gaps (nog te harmoniseren):**
> 1. **Mood-namen:** Figma `Feature / Warning / Positive / Negative` vs code `subtle / warn / success / error`.
> 2. **Primary sentiment button:** Figma heeft een gevulde, mood-gekleurde primary actieknop; de Angular styleguide heeft die nog niet (alleen de `secondary` sentiment-knop via `buttonMessages`).
> 3. **Inline-button plaatsing:** Figma groepeert de inline button bij de andere actieknoppen; de styleguide rendert `inlineButtonText` inline in de boodschap-tekst.
> 4. **One-liner tekst-flow:** in dit design lopen titel en message als één doorlopende regel tekst (wrappen samen); de Angular styleguide doet dit nog niet. Nog gelijk te trekken.
>
> **Echte Angular component:** `<eff-inline-notification [messageTitle] [message] [messageType] [isOneLiner] [showCloseButton] [inlineButtonText] [buttonMessages] [linkText] [linkHref] …>`. De prototype-HTML hierboven is de visuele weergave; in productie-Angular gebruik je de component met inputs.

### Tooltip
Kleine, niet-interactieve donkere bubble die op hover/focus verschijnt. Alleen korte tekst. In Angular: de Material `matTooltip` directive + `matTooltipPosition`.

```html
<!-- Prototype-weergave: bubble + pijl, positie boven/onder/links/rechts -->
<div class="tt-demo">
  <span class="ib"><i data-icon="trash"></i></span>
  <div class="tooltip is-above">Delete survey</div>
</div>
```
Positie-classes: `.is-above` `.is-below` `.is-left` `.is-right`. Bubble = `--bg-inverse-base` (#192743), witte tekst, Poppins Medium 14, `--radius-md`. Tekst wrapt op max-width ~240px. Gebruik nooit voor essentiële info of interactieve content → dan een Spotlight of dialog.

> ⚠️ **Dev/Figma gap:** Figma gebruikt **Medium (500)** voor de tooltip-tekst; de Material `matTooltip` rendert **Normal (400)**. Nog gelijk te trekken.

### Spotlight
Interactieve coach-mark/onboarding-overlay (Angular: `<eff-tooltip-dialog>`). Donkere card met optionele NEW-badge, titel, body, en footer met óf één primary knop (single-step) óf paginatie-dots + "Next" (multi-step).

```html
<!-- Single-step -->
<div class="spotlight is-above">
  <div class="sl-badge"><i data-icon="featured"></i> New</div>
  <p class="sl-title">Choose your settings later</p>
  <p class="sl-body">Confirm your project settings before you create a survey.</p>
  <div class="sl-footer is-single"><button class="btn btn-primary">Got it!</button></div>
</div>

<!-- Multi-step -->
<div class="spotlight is-above">
  <p class="sl-title">Pick a template</p>
  <p class="sl-body">Start from a ready-made survey, then tweak the questions.</p>
  <div class="sl-footer is-multi">
    <div class="sl-dots"><span class="sl-dot is-active"></span><span class="sl-dot"></span><span class="sl-dot"></span></div>
    <button class="btn btn-primary">Next</button>
  </div>
</div>
```
Classes: `.spotlight` (+ `.is-above/.is-below/.is-left/.is-right`), `.sl-badge` (optioneel, oranje), `.sl-title` (16/SemiBold), `.sl-body` (14), `.sl-footer` (`.is-single` = volle-breedte knop · `.is-multi` = dots links + knop rechts), `.sl-dot.is-active`. Card = `--bg-inverse-base`, knop = `--bg-brand-base` (teal). Behandel als een dialog: focus erin, Escape sluit, focus terug.

> 🧩 **Eén component, twee patronen:** `eff-tooltip-dialog` dekt twee design-system-componenten af. **Spotlight** = de verankerde coach-mark/**tour**-modus (target + 1-of-meer stappen, `.tour-progression`). **Announcement** = dezelfde component in `with-svg`-modus (zwevende feature-card met illustratie). Zelfde inputs (`[targetElement]`, `[dialogTitle]`, `[dialogSubtitle]`, `[dialogButtonText]`, `[dialogLinkButtonText]`, `[dialogPositionToTarget]`, `[addHighlightToTargetElement]`, `[isNewFeature]`, `[svgUrl]`, `(dialogClosedOutput)`), andere configuratie.

### Announcement
Compacte, zwevende, non-blocking feature-aankondiging. De pagina eronder blijft bruikbaar; de gebruiker dismisst hem zelf (geen auto-dismiss). Lichte 300px-card met een **full-bleed** illustratie bovenaan (raakt boven + zijkanten, geclipt op de ronde hoeken), titel, body, en twee **verticaal gestapelde full-width acties**: primary CTA "Learn more" boven, "Close" (tertiary/ghost) eronder. Onderscheid: Toast = vluchtig/statusfeedback, Spotlight = verankerde coach-mark/tour, Announcement = aankondiging met illustratie.

**In code is dit dezelfde Angular-component als Spotlight:** `<eff-tooltip-dialog>` in de `with-svg`-configuratie (styleguide → Tooltips → "display tooltip with-svg").

Prototype-markup (`components.css`):
```html
<div class="announcement">
  <div class="ann-media"><!-- full-bleed illustratie ([svgUrl]); placeholder als leeg --></div>
  <div class="ann-body">
    <p class="ann-title">Dynamic reporting is here!</p>
    <p class="ann-text">A new look, new features, and even more to explore.</p>
    <div class="ann-actions">
      <button class="btn btn-primary">Learn more</button>
      <button class="btn btn-tertiary">Close</button>
    </div>
  </div>
</div>
```
Classes: `.announcement` (300px, `--bg-base`, `--border-base`, `--sh-dialogs`, `--radius-lg`, `overflow:hidden`), `.ann-media` (optioneel, **full-bleed** 168px; `<img>` vult 'm anders een gekleurde placeholder (#6c5ce7, wit icoon)), `.ann-body` (20px padding), `.ann-title` (16/SemiBold), `.ann-text` (14), `.ann-actions` (verticale stack full-width: `.btn-primary` CTA bovenaan + `.btn-tertiary` "Close" eronder — primary eerst in DOM).

**Gestapeld = card deck:** meerdere teams kunnen op dezelfde pagina iets promoten; je queuet ze als een **stapel** met echte kaarten erachter die net uitsteken. Markup: `.ann-deck` met de achterste kaarten (`.ann-b2`, `.ann-b1`) en de voorste (`.ann-front`). "Close" onthult de volgende: de voorste valt naar beneden (`.ann-front.is-leaving`) en de kaarten erachter promoten één stap (`.ann-b1.is-promoting`, `.ann-b2.is-promoting`). Het queuen/volgorde-bepalen is app-orkestratie (render één kaart tegelijk, index ophogen). De deck-visual + animatie zit niet in het styleguide-voorbeeld — met engineering te bevestigen.

Echte Angular-API (`eff-tooltip-dialog`, `class="with-svg"`): `[svgUrl]` (illustratie), `[dialogTitle]`, `[dialogSubtitle]`, `[dialogButtonText]` (primary CTA, optioneel), `[dialogLinkButtonText]` (link/dismiss), `[targetElement]`, `[dialogPositionToTarget]` ('after'/'before'/'above'/'below'), `[dialogWidth]`, `[addOutlineToTargetElement]`, `[addHighlightToTargetElement]`, `(dialogClosedOutput)`. Gerenderd: `.tour-container` > `img.illustration` + `p.text-l5.text-w600` + `p.text-w400.text-subdued` + `.tour-footer` (`button.link` + `button.primary`). A11y: non-modal — geen focus stelen, `aria-live="polite"`, altijd dismissible.

### Main Navigation
De primaire app-sidebar (240px, links). Bevat een portal-switcher bovenaan, navigatie-items in het midden, en het account-menu onderaan. Eén per scherm.

```html
<div class="mainnav">                          <!-- + .is-personal voor het Personal-portal (geel accent) -->
  <div class="mn-portal"><span class="mn-logo"></span><button class="mn-portal-btn"><b>Coordinator</b> <i data-icon="chevron-down" class="mn-chev"></i></button></div>
  <nav class="mn-nav" aria-label="Main">
    <a class="mn-item is-active"><i data-icon="home"></i> Home</a>
    <a class="mn-item"><i data-icon="clipboard"></i> Surveys <i data-icon="chevron-down" class="mn-chev"></i></a>
    <div class="mn-sub"><a class="mn-subitem is-active">All surveys</a><a class="mn-subitem">Projects</a></div>
    <a class="mn-item"><i data-icon="globe"></i> Organization <i data-icon="chevron-down" class="mn-chev"></i></a>
  </nav>
  <div class="mn-foot">
    <a class="mn-item"><i data-icon="help"></i> Help &amp; learn</a>
    <div class="mn-foot-divider"></div>
    <div class="mn-user"><div class="av av-36 av-blue">JR</div><div class="mn-meta"><div class="mn-name">Jamal…</div><div class="mn-org">Effectory B.V.</div></div><i data-icon="chevron-down"></i></div>
  </div>
</div>
```
Classes: `.mainnav` (+ `.is-personal`), `.mn-portal` (container) met statisch `.mn-logo` + klikbare `.mn-portal-btn` (alleen het label/chevron heeft een hover-achtergrond, het logo niet), `.mn-nav`/`.mn-item` (states `.is-hover`/`.is-active`, optionele `.mn-chev`), uitklapbare groep `.mn-sub`/`.mn-subitem` (+ `.mn-sub-divider`), footer `.mn-foot`/`.mn-user` (states `.is-hover`/`.is-pressed`). De portal-switcher én de account-knop openen elk een **Dropdown Menu** (de gedeelde `.menu`-component — zie sectie *Dropdown menu*); de portal-dropdown heeft een `.menu-header` ("Switch my role") en mini-logo's, de account-dropdown groepeert account-acties met een `.menu-divider` boven Log out. De actieve item gebruikt `--bg-brand-subtle-selected` (highlight) + `--content-brand-base` (icoon). Het portal-logo (`.mn-logo`) is het Effectory-merklogo als `background-image` (teal voor Coordinator), dat naar het gele logo wisselt bij `.mainnav.is-personal`. Het Personal-portal (`html[data-portal="personal"]`, of `.mainnav.is-personal` in een prototype) remapt die brand-tokens naar geel. Het account-menu gebruikt de gedocumenteerde **Avatar** (`.av av-36`), niet een eigen avatar-class. Menu-item-iconen zijn 16px met `--content-action`; alle radii komen uit `--radius-*` tokens. A11y: `<nav aria-label="Main">`, `aria-current="page"` op de actieve item, `aria-expanded` op groep-headers.

> ⚠️ **Dev gap:** de Angular-selector/inputs van de app-sidebar zijn nog niet bevestigd in de styleguide. Deze `.mainnav`-classes zijn de prototype-structuur; verifieer de productie-API met engineering.

### Avatar
Ronde avatar met initialen of een icoon. Gebruik altijd deze gedocumenteerde component — bouw nooit een eigen avatar-class.

```html
<div class="av av-32 av-blue">JR</div>                 <!-- initialen -->
<div class="av av-40 av-turquoise"><i data-icon="user"></i></div>  <!-- icoon -->
```
Maten: `.av-40` / `.av-36` / `.av-32` / `.av-24` / `.av-20` (font schaalt mee; av-24=11px, av-20=10px zijn bewust off-scale voor initialen). Kleuren: `.av-blue`, `.av-turquoise`, `.av-green`, `.av-orange`, `.av-red`, `.av-yellow`, `.av-grey` — elk een `--bg-accent-*-subtle` vlak met `--content-accent-*-base` tekst. Radius is altijd `--radius-full`. Gebruikt o.a. in de Main Navigation (`.av av-36` in `.mn-user`).

### Dialog
Een modale kaart die over een scrim verschijnt: titel, optionele subtitle, content-slot en een footer met acties. Eén primaire actie + een uitweg (Cancel/close).

```html
<div class="dialog dialog-s" role="dialog" aria-modal="true" aria-labelledby="dlg-title">
  <button class="dialog-close" aria-label="Close"><i data-icon="cross"></i></button>
  <div class="dialog-media"><i data-icon="image"></i></div>   <!-- optioneel: visual header -->
  <div class="dialog-header">
    <div class="dialog-header-top"><i class="dialog-header-icon" data-icon="info"></i><h3 class="dialog-title" id="dlg-title">Discard changes?</h3></div> <!-- optioneel icoon; anders alleen de <h3> -->
    <p class="dialog-subtitle">You have unsaved edits to this report.</p>
  </div>
  <div class="dialog-body">…custom content…</div>             <!-- optioneel content-slot -->
  <div class="dialog-footer">
    <a class="dialog-footer-link" href="#">Outgoing link <i data-icon="external-link"></i></a> <!-- optioneel -->
    <button class="btn btn-secondary">Keep editing</button>
    <button class="btn btn-primary">Discard</button>
  </div>
</div>
```
Maten (breedte): default `.dialog` = 440 (XS), `.dialog-s` = 600, `.dialog-m` = 800, `.dialog-l` = 1080. **Header-formaat:** twee maten — Large (titel 26px, `text-l3`, default) en Small (titel 18px, `body-18-SB`) via `.dialog-header.is-sm`. Onafhankelijk van de breedte; combineer met elke maat. **Optioneel icoon:** wikkel de titel in `.dialog-header-top` met een `.dialog-header-icon` ervoor — 24px bij een Large header, 20px bij Small. Icoon en kleur zijn vrij; gangbaar: info (default, `--content-info-secondary`), warning (`.is-warning`) en error (`.is-error`). `.dialog-media` is een full-bleed band bovenaan (illustratie/afbeelding) voor de *visual header*-variant. Footer-knoppen zijn de Button-component (`.btn` + `.btn-primary`/`.btn-secondary`); de optionele `.dialog-footer-link` staat links. Tokens: `--bg-base`/`--border-base`, `--sh-dialogs`, `--radius-xl` (16), `--content-base`/`--content-secondary`, `--content-action` (close), `--bg-brand-subtle` (media). A11y: `role="dialog"` + `aria-modal="true"`, `aria-labelledby` naar de titel, focus-trap + focus terug op de trigger bij sluiten, Escape sluit.

> ⚠️ **Dev gap:** de Angular-selector/inputs van de dialog (en de overlay/scrim-wiring) zijn nog niet bevestigd in de styleguide. Deze `.dialog`-classes zijn de prototype-structuur; verifieer de productie-API met engineering.

### Side panel
Een paneel dat rechts invliegt over een scrim: details, een formulier of een gerichte taak naast de huidige pagina. Maten: Default (800px) en Small (400px, `.sidepanel-sm`). Raakt de rechter-/boven-/onderrand van het scherm; `--radius-xl` (16px) alleen linksboven en linksonder, 0 rechts.

```html
<div class="sidepanel" role="dialog" aria-modal="true">       <!-- + .sidepanel-sm voor smal -->
  <div class="sp-header">
    <div class="sp-toolbar">
      <div class="sp-nav"><i data-icon="arrow-up"></i><i data-icon="arrow-down"></i></div>  <!-- optioneel: advanced menu -->
      <div class="sp-actions"><i data-icon="bookmark"></i><i data-icon="message"></i><i data-icon="clock"></i><i data-icon="more-vertical"></i><span class="sp-sep"></span><i data-icon="cross"></i></div>
    </div>
    <div class="sp-heading"><h3 class="sp-title">Title</h3><p class="sp-subtitle">Subtitle</p></div>  <!-- + .is-sm voor 18px titel -->
    <div class="sp-tabs"><a class="sp-tab is-active"><i data-icon="box"></i> Item</a><a class="sp-tab"><i data-icon="box"></i> Item</a></div>  <!-- optioneel -->
  </div>
  <div class="sp-body">…content…</div>
  <div class="sp-footer"><button class="btn btn-secondary">Cancel</button><button class="btn btn-primary">Confirm</button></div>  <!-- optioneel -->
</div>
```
Classes: `.sidepanel` (+ `.sidepanel-sm`), `.sp-header` met `.sp-toolbar` (`.sp-nav` links = advanced-menu pijlen, `.sp-actions` rechts met `.sp-sep` + close), `.sp-heading` (+ `.is-sm`) → `.sp-title`/`.sp-subtitle`, optionele `.sp-tabs`/`.sp-tab` (`.is-active` = teal underline), `.sp-body` (scrollt), optionele `.sp-footer` (Button-component). Tokens: `--bg-base`, `--sh-dialogs`, `--border-base` (tabs/footer), `--content-base`/`--content-secondary`/`--content-action`, `--content-brand-base` (actieve tab). A11y: modal, `aria-labelledby` op de titel, focus-trap, Escape sluit, icon-only knoppen krijgen `aria-label`.

> **Productie-API:** in code is dit de **`SidepanelService`** (`@effectory/branding-angular`): `sidepanelService.open(Component, data)`, `.close(data)`, `.afterClosed`. De paneel-component gebruikt `.title.text-l3`, `.subtitle`, `.icon-button.close-button` en `.actions-container` (met `.primary`/`.secondary`). De `.sidepanel`/`.sp-*`-classes hier zijn de prototype-structuur voor de visuele opbouw.

---

## 5. Iconen

Patroon: `<i data-icon="naam" style="display:flex;width:16px;height:16px;"></i>`
Kleur via `color: currentColor` op de `<i>` of een ancestor.
Iconen worden geïnjecteerd door `icons.js` (moet onderaan `<body>` staan).

**Beschikbare iconen** (uit `assets/icons/`):

`accessibility` `activity` `add-on` `aggregations` `alert-circle` `alert-triangle` `alert-triangle-1` `all changes` `approximately` `archive` `archive-1` `arrow-down` `arrow-left` `arrow-right` `arrow-sub` `arrow-up` `asterisk` `at-mail` `barchart-2` `bell` `benchmark-down` `benchmark-up` `bold` `book-open` `bookmark` `bookmark-filled` `box` `briefcase` `building` `bullet-point` `calendar` `calendar-add` `calendar-recurring` `calendar-remove` `category` `check` `check-square` `chevron-down` `chevron-down-small` `chevron-end` `chevron-left` `chevron-right` `chevron-start` `chevron-up` `clipboard` `clipboard-a` `clipboard-note` `clipboard-settings` `code` `collapse-left` `collapse-right` `compass` `cookie` `copy` `correlation-positive` `cpu` `cross` `desktop` `double-chevron-down` `double-chevron-up` `down-vote` `download` `download-2` `drag-drop` `edit` `edit-inline` `equal` `excel` `expand-left` `expand-right` `export` `external-link` `eye` `eye-off` `featured` `file` `file-error` `file-plus` `filter` `find-replace` `flag` `folder` `gear` `gender-male` `gender-male-1` `gender-non-binary` `gift` `globe` `goals` `group` `help` `hierarchy` `home` `import-export` `info` `italic` `key` `language` `layer-up-alt` `layout` `lightbulb` `link` `list-unordered` `lock` `log-out` `love` `mail` `maximize` `menu` `message` `message-filled` `minimize` `minus` `mobile` `moon` `more-horizontal` `more-vertical` `net-promoter-score` `net-promoter-score-detractor` `net-promoter-score-passive` `palette` `passkey` `pause` `pen-tool` `percent` `pie-chart` `pin` `pin-filled` `pipet` `play` `plus` `plus-minus` `point-scale` `privacy` `randomize` `refresh` `response` `rotate-backward` `rotate-forward` `search` `segments` `select` `selected` `send` `shapes` `share` `share-1` `shield` `single-answer` `single-answer-1` `sliders` `sort-ascending` `sort-descending` `star` `star-filled` `stop` `structure` `sun` `table` `tag` `target` `text-entry` `themes` `toggle-left` `toggle-right` `tool` `top-3-filled` `trash` `trend-stable` `underline` `undo` `unlock` `up-vote` `upload` `upload-file` `user` `user-badge` `user-check` `user-min` `user-plus` `users` `version-history` `waypoint` `win` `words` `youtube` `zap` `zap-filled`

**Niet als `data-icon` te gebruiken** (bestandsnamen met spaties of hoofdletters zijn illustraties, geen UI-iconen):
`Barchart-1` `Clock` `ESG scan` `ESG scan-1` `ESG scan-2` `Strategic fitness scan` `Tree` `Trend-down` `Trend-up` `Type` `magic wand`
