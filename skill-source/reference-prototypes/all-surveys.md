# Reference prototype — All surveys page

Canonical implementation: [`all-surveys.html`](all-surveys.html) (in this folder).
When the user asks for "the surveys page" / "all surveys" / "the survey overview", **copy that file** into `prototypes/` and adapt — it is the source of truth for layout, states and behaviour. Don't reinvent it.

## What the screen is

The My Effectory **Surveys** landing page (Coordinator portal). Inside the app shell (`.mainnav` with Surveys expanded → sub-items **All surveys** (active) + **Projects**), the content column (wide, 1200px) has:

- **Page header** (`.ph`) — title "Surveys" (`text-l3`), subtitle in `.ph-meta`, and a **Create survey** primary button (plus icon on the left) in `.ph-controls`.
- **Latest projects** — a section header (`.text-l4`) with a "Go to projects" tertiary button + two arrow icon-buttons, over a **carousel** of project cards. Exactly **3 cards fill the 1200px row** (each `calc((100% - 2·gap)/3)`); the rest page in via the arrows. Each card: title (`text-l5`) + a count row (`clipboard` icon + "N surveys").
- **All surveys** — an elevated card (`.card card-elevated`) containing a filter bar + the survey rows.

### Filter bar (inside the list card)
- **Inline search** (`.srch`, borderless at rest, box appears on hover/focus) on the left.
- **Show only my surveys** — checkbox + label.
- **Sort by** — inline selection button opening a single-select `.menu` (Created last · Created first · A–Z · Z–A; selected item gets `.menu-item-check`).
- **Status** — inline selection button opening a multi-select `.menu` (`aria-multiselectable`); each item is the coloured **status pill** with a `.menu-cb` checkbox. Label shows `All (5)` → `N selected` → `None`.

### Survey rows
Each `.srow`: name (`text-l5`) + project subtitle (`folder` icon + project name, 12px) · a fixed-width **status pill** (212px) · a response-rate block (`user` icon + "N%" over a 56px progress bar) · a kebab icon-button. Rows hover to `--bg-secondary`.

### Status pills (`.spill`, radius `--radius-base` = 6px, 1px white border)
Canonical statuses → pill variant + colour, and the contextual row text:
- **Merged** → `spill-merged` (blue `--bg-info-base`), row text e.g. "5 surveys **merged**".
- **Completed** → `spill-completed` (green `--bg-positive-base`), "**Completed** on {date}".
- **In Progress** → `spill-running` (amber `--bg-highlight-base`, dark text), "**Running** until {date}".
- **Planned** → `spill-starts` (navy `--bg-inverse-base`), "**Starts** on {date}".
- **Draft** → `spill-draft` (grey `--bg-tertiary`, dark text), "**Draft**".

The rows show **contextual** pill text ("Running until…", "Starts on…"); the **canonical** names (In Progress, Planned…) live in the Status filter — this matches the live app.

## Behaviour (the rules)

1. **Sort, Status, Show-only-mine, and Search all filter/sort the list live and combine** in one pass (`apply()`): filter by selected statuses ∩ mine-toggle ∩ search-substring, then order by the sort choice.
2. Sort is single-select (updates label, closes on pick). Status is multi-select (stays open, toggles, updates the count label). "Show only my surveys" filters to rows flagged `data-mine="true"`.
3. When nothing matches, an **empty state** ("No surveys match your filters.") shows; the divider under the last visible row is removed.
4. The project carousel pages by exactly one screen of 3 cards; prev/next disable at the ends and the step is measured live (survives resize).

## Components used

Main nav (with expanded `.mn-sub`) · Page header (`.ph`) · Section header · Card · Button / Icon button · Inline search · Checkbox · Selection button · Dropdown menu (`.menu`, single- **and** multi-select) · custom status pills + progress bars. Everything uses DS classes/tokens.

## Critical: dropdowns must escape the card

The filter dropdowns live inside `.card`, which has `overflow:hidden` (rounded corners) — so an `position:absolute` menu would be **clipped** at the card edge. The `.menu` popovers therefore use **`position:fixed`** + high `z-index`, positioned under the trigger by JS, right-aligned, flipping up / clamping in the viewport and repositioning on scroll (capture) + resize. See the *Dropdown menu → Clipping vermijden* note in `design-system-reference.md`. Never rely on `overflow:visible` here.

## Prototype-only (simulation, not production)

- Data is 12 hard-coded rows; 6 flagged `data-mine="true"`.
- Response rates + progress-bar widths are static illustrative values.
- Carousel/menus/filters are vanilla JS in a trailing `<script>`; no framework or backend.
