# Reference prototype — Scores page

Canonical implementation: [`scores.html`](scores.html) (in this folder).
When the user asks for "the scores page" / "scores prototype" / "scores pagina", **copy that file** into `prototypes/` and adapt — it is the source of truth for layout, states and behaviour. Don't reinvent it.

## What the screen is

The **Scores** tab inside the survey results dashboard. Inside the app shell (`.mainnav` + breadcrumb + page header with title, filter, date range, `.tabs`), the Scores view is a **full-width** table of every survey question grouped by theme, plus a per-question side panel.

- **Toolbar** — search field, "Sort by: Default" button, a divider, and a **Comparisons** popover button.
- **Table** — collapsible theme groups; each row is a question with the group score (`is-current`) plus comparison columns (Effectory Index, Previous survey) coloured as a heatmap by the difference vs the group. The **question column is frozen** (sticky-left, 380px min, fills remaining width) with one continuous Asana-style divider line + scroll shadow; score columns scroll horizontally and are right-aligned. Hidden tooltips are taken out of layout so they don't inflate scroll width.
- **Floating legend** — pinned bottom-centre; the +20/+10/-10/-20 thresholds swap to ±1.5/±0.7 (with a slide animation + hover-intent delay) while hovering a 0–10 question.
- **Comparisons popover** — two layers: (1) Quick comparisons chips (toggle a column on/off) + "All comparisons" rows (Groups / Segments / Benchmarks); (2) Segments view — crossings (Age interactive) with design-system checkboxes; selecting **Age** adds a column per age category (animated accordion), and individual sub-categories toggle their own column.
- **Question side panel** (click a row / "Insights") — Insights / Tips & Best practices / Actions tabs. Insights shows: a **5-point answer distribution** (Strongly disagree → Strongly agree) with a 2px green "X% agree" bracket aligned to the two agree segments; score-comparison cards; a "Score over time" line chart; and the theme questions.

Header tabs: Overview · Focus View · Themes · **Scores** (active) · Open answers · Topics & Ideas · Reports · Actions.

## Behaviour (the rules)

1. Tabs are visual only in this prototype (clicks prevented).
2. The question column is always frozen; the divider line only appears (+ subtle shadow) once the table is scrolled horizontally.
3. Heatmap thresholds: % questions ±10/±20, 0–10 questions ±0.7/±1.5. The legend reflects the scale of the row you hover and only swaps for a different scale.
4. Distribution is **always a 5-point scale**; the two agree buckets sum to the question score (the "X% agree" bracket).
5. Quick-comparison chips and the Age crossing drive table columns directly. Opening the Age crossing auto-selects it and all categories.
6. Tooltips use the global auto-position script (fixed layer, escapes `overflow:hidden`).

## Components used

Main nav · Breadcrumb (with Back) · Tabs · Selection button · Search field · Popover · Checkbox (`.cb` in `.cb-wrap`) · Side panel (`.overlay.is-right` + `.sidepanel`) · Card · Icon button · Button (secondary/link) · Tooltip · Chart.js line chart. All colours/spacing/radii via tokens.

## Prototype-only (simulation, not production)

- Question/score data is a static in-file array (`SCORES_GROUPS`), single variant (Novanta B.V., Q3).
- The answer distribution is derived from the score (not real response data).
- Only the Age crossing is interactive; the other segments are placeholders.
- Tabs don't navigate; "Groups" / "Benchmarks" popover rows are visual.
