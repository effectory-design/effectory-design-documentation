# Reference prototype — Projects page

Canonical implementation: [`projects.html`](projects.html) (in this folder).
When the user asks for "the projects page" / "project overview" / "het projecten-scherm", **copy that file** into `prototypes/` and adapt — it is the source of truth for layout, states and behaviour. Don't reinvent it.

## What the screen is

The My Effectory **Projects** landing page (Coordinator portal). Inside the app shell (`.mainnav` with Surveys expanded → sub-items All surveys + **Projects** (active)), the content column (max 1200px) has:

- **Page header** (`.ph`) — title "Projects" (`ph-title`) + subtitle "See your projects in one overview" (`ph-meta`). No button. The header's own trailing space is cancelled with `.ph { margin-bottom: calc(-1 * var(--spacing-loose)) }` so the gap to the toolbar is a single 24px flex-gap, not doubled.
- **Toolbar** (`.proj-toolbar`) — a wide search field (`.search-wrap`/`.srch`, "Search for a project") + a right-aligned **Sort by** selection button (`.sel-btn`) opening a single-select `.menu` (Recently viewed · A–Z · Z–A · Most surveys; selected row gets `.menu-item-check`). Menu is `position:fixed`, anchored + repositioned on scroll/resize.
- **Project grid** (`.proj-grid`) — a **3-column** grid of project cards (`.card card-elevated is-interactive proj-card`); each card = a title (`.proj-title`) that flexes to the top + a `.proj-meta` row (`clipboard` icon + "N surveys") pinned to the bottom. Responsive: 3 → 2 (≤900px) → 1 (≤600px).
- **View all projects** (`.proj-viewall`) — a centred `.btn btn-secondary` with a chevron. The grid is capped at **6** cards (`LIMIT`); clicking expands to the full list and the button becomes **"Show fewer projects"** with the chevron rotated (`.is-expanded .va-chev`). Hidden while searching (search reveals every match regardless of the cap).
- **Divider** (`.proj-divider`, `--border-base`, extra top margin for separation).
- **Promo carousel** (`.promo`) — heading "Get more out of your employee listening efforts", then a `.promo-carousel` (relative) with the viewport and **side arrows** (`.promo-arrow.promo-prev`/`.promo-next`, absolute, vertically centred on the 152px media). Shows **4 cards per view**; width-aware paging (4/3/2/1) so no card is skipped. An arrow is hidden entirely when it can't do anything (`.is-disabled`/`:disabled { display:none }`).

### Promo cards (7)
Each `.promo-card`: a `.promo-media` panel (grey `--bg-secondary` + `--border-base`, `--radius-xl`) with a white "Solution"/"Free resource" label chip (`.promo-tag`, top-left) over the illustration; below it a `.promo-title` (14px SemiBold) + `.promo-sub` (14px secondary). **On hover the panel reveals its own accent colour** (`.promo-card:hover .pm-{green|orange|yellow|blue|purple|turquoise|red}`). The illustrations are the real app SVGs in `assets/illustrations/projects/`: `esg.svg`, `exit.svg`, `world-class-workplace.svg`, `onboarding.svg`, `diversity.svg`, `team-development-scan.svg`, `effectory-inspiration-bundle.svg`.

## Behaviour (the rules)

1. **Sort + search combine** in one `apply()` pass: filter by search substring on the title, order by the sort choice, then (when not searching and not expanded) cap the visible cards at `LIMIT` (6).
2. Sort is single-select (updates the label, closes on pick, re-sorts). "Most surveys" reads the count from `.proj-meta`.
3. **View all projects** toggles `expanded`; label + chevron flip; re-runs `apply()`.
4. Promo carousel pages by however many cards currently fit (`per()` from viewport width ÷ card width); prev/next disable + hide at the ends.

## Components used

Main nav (Surveys expanded) · Page header (`.ph`) · Card (`.card card-elevated is-interactive`) · Button · Selection button + Dropdown menu (`.menu`, single-select) · Search · a product-local promo carousel with the real project illustrations.

## Prototype-only (simulation, not production)

- 11 hard-coded project cards; the extra ones beyond the first 6 surface via **View all projects**.
- The promo backgrounds are grey by default and colour on hover; the live app currently renders them grey (the hover-colour is a design addition).
- Search/sort/expand/carousel are vanilla JS in a trailing `<script>`; no framework or backend.
