# Reference prototype — Themes page

Canonical implementation: [`themes.html`](themes.html) (in this folder).
When the user asks for "the themes page" / "themes prototype" / "thema's pagina", **copy that file** into `prototypes/` and adapt — it is the source of truth for layout, states and behaviour. Don't reinvent it.

## What the screen is

The **Themes** tab inside the survey results dashboard. Inside the app shell (`.mainnav` + breadcrumb + page header with title, filter, date range, `.tabs`), the Themes view shows two stacked sections in a centred container (max content width 1200px, page padding 64px / 48px desktop):

- **Theme comparison** card — a grouped bar chart (Current / Previous / Benchmark per theme, 0–100%) with a legend top-right and a **Select filter** icon button (gear icon, tooltip "Select filter").
- **All themes** grid — one elevated card per theme: title, "Pin theme" icon button, description, single org-score bar (Current only, no benchmark), and a "View insights →" link button.

Header tabs: Overview · Focus View · **Themes** (active) · Scores · Open answers · Topics & Ideas · Reports · Actions.

## Behaviour (the rules)

1. Tabs are visual only in this prototype (clicks are prevented).
2. The "Select filter" icon button on the comparison card is the entry point to filter the chart (gear icon + tooltip "Select filter"). **Never label it "Chart settings".**
3. Each theme card has a Pin icon button (tooltip "Pin theme") and a "View insights" link to drill into the theme.
4. The theme cards show **org score only** — the comparison card is the only place where Previous + Benchmark appear.
5. Tooltips use the global auto-position script (rendered in a fixed layer to escape `overflow:hidden` ancestors). See design-system-reference → Tooltip.

## Components used

Main nav · Breadcrumb (with Back) · Tabs · Selection button (filter + date range) · Card (elevated) · Icon button (`.ib ib-36 ib-tertiary icon-ghost`) · Tooltip · Score bar · Button (link). All colours/spacing/radii via tokens.

## Prototype-only (simulation, not production)

- Theme data is a static in-file array (`THEMES`), six themes hardcoded.
- The comparison chart is pure CSS bars driven from that array; no real chart library.
- Tabs don't navigate.
