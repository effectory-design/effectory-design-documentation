# Reference prototype — My Effectory homepage (Coordinator)

Canonical implementation: [`homepage.html`](homepage.html) (in this folder).
When the user asks for "the My Effectory homepage" / "the coordinator home screen" / "the home page", **copy that file** into `prototypes/` and adapt — it is the source of truth for layout, states and behaviour. Don't reinvent it.

## What the screen is

The **Coordinator homepage** of My Effectory — the landing/activity feed a coordinator sees on login. Inside the app shell (`.mainnav` sidebar, full height, + a scrolling content column), the content is a centred **wide (1200px)** column with:

- **Welcome header** — a 32px avatar (`.av av-32`) + "Welcome {firstname}!" (16px, `--content-secondary`) above the page title `Let's understand your people` (`text-l3`, 26px).
- **Tabs** (`.tabs`) — Activity (active) · Resources · Getting ready · Webinars, each with a leading icon. Tabs switch panels via a small inline script (`data-tab` ↔ `data-tab-panel`); Getting ready is an empty placeholder panel.

**Activity tab:**
- **Latest activities** card — a section title with a **full-bleed divider** under it, then activity rows.
- **Updates** card — same title + full-bleed divider, then update rows with illustration thumbnails.
- **Helpful articles to get you started** — a 2-column grid of interactive cards (illustration left, text right).

**Resources tab** (`.res-*`): a `.sh` Section Header ("Become an employee survey expert" + subtitle), a card with 4 download rows (illustration thumbnail + title + description + a `btn btn-link` "Download" with a `download` icon), and a centred "Want to learn more?" footer with a "Visit support page" link. Row dividers are full-bleed.

**Webinars tab** (`.web-*`): a vertical list of webinar cards, each **min-height 187px**. Left = a **16:9 illustration thumbnail** (`aspect-ratio: 16/9`, width 280px, `object-fit: cover`, inset with `--spacing-base` margin + `--radius-md`), middle = title + subtitle + 2-line clamped description + a meta row (calendar icon + date · time), right = a grey (`--bg-secondary`) action column with a `btn btn-primary` (`min-width: 180px`) reading "Sign up" (upcoming) or "Watch now" (past).

## Layout rules

- **App shell:** `body`-level `.app { display:flex; height:100vh }`; `.mainnav` full height; `.app-main` is the scroll container (`flex:1; height:100vh; overflow-y:auto`).
- **Wide container:** `.app-main-inner { max-width: calc(1200px + 2*var(--page-x)); margin-inline:auto }` with responsive page padding (`--page-x/--page-y`: desktop 64/48, tablet 24/32, mobile 16/24, all from spacing tokens). Content is exactly **1200px** on wide screens.
- **Section spacing:** 40px (`--spacing-super-loose`) between the Latest activities / Updates / Helpful articles blocks (`.feed-card` margin-bottom + `.articles-title` top margin).
- **Cards:** `.card.card-elevated` (border + `--sh-card`) — cards have a default shadow, matching Figma `shadow/card`.
- **Section-title divider:** `.feed-card-title` breaks out of the 24px card-body padding (negative inline margin + matching padding) so the 1px `--border-base` line runs edge-to-edge; **24px above and below** the title (symmetric).

## Rows

**Activity row** (`.act-row`, divider between rows, none under the last):
- Coloured icon tile (`.act-icon`, 40px, `--radius-md`): **green** (`--bg-positive-subtle` / `--content-positive-base`) with `response` for "fill in questionnaire" activities; **blue** (`--bg-info-subtle` / `--content-info-base`) with `barchart-2` for "results are in".
- Body: `.act-project` (12px `--content-secondary`, optional leading `.act-dot` status dot in `--bg-positive-base`), `.act-title` (14px SemiBold `--content-base`), `.act-time` (12px `--content-secondary`).
- Trailing `.btn.btn-secondary` — "Fill in questionnaire" gets a trailing `external-link` icon; "View results" / "View response" don't.

**Update row** (`.upd-row`, divider between rows):
- 56px illustration thumbnail (`<img class="upd-thumb">`, `--radius-base`) — real brand illustrations exported from Figma (newsletter / announcement / product-updates). Falls back to a coloured placeholder tile via `onerror` if the asset is missing.
- Body: `.upd-head` (12px uppercase SemiBold, coloured per type — info blue / accent-yellow / highlight) with a leading `bookmark` or `featured` icon, then `.upd-desc` (14px `--content-secondary`).

**Article card** (`.article-card`, `.card.is-interactive`): **`flex-direction: row` is required** (the base `.card` is `column`, which would stack image over text) — 160px full-height illustration (`object-fit:cover`) on the left, text (14px Medium) vertically centred on the right. Fixed `height: 128px`.

**Webinar card** (`.web-card`): also needs explicit **`flex-direction: row`** for the same reason. `min-height: 187px`. The 16:9 thumbnail uses `align-self: center` (so it keeps its ratio instead of stretching to card height).

## Contrast

Readable secondary text (project lines, timestamps, descriptions) uses **`--content-secondary`** (80%), never `--content-subtle` (50%) — see SKILL rule 3b.

## Components used

Main navigation (`.mainnav`) · Tabs · Section Header (`.sh`) · Card (`card-elevated` / `is-interactive`) · Avatar (`.av`) · Button (`btn-primary` / `btn-link`) · icons. App-shell layout, the icon/illustration/webinar tiles, the full-bleed dividers and the grey webinar action column are custom CSS but always use tokens.

## Assets

Local illustrations live in `assets/illustrations/`: Updates → `update-newsletter.png`, `update-announcement.png`, `update-dei.png`; articles → `article-1.png` (feedback), `article-2.png` (toolkit); Resources → `questionnaire-toolkit.svg`, `communication-toolkit.svg`, `follow-up-guide.svg`, `example-report.svg`. Referenced with root-relative paths via the `<base>` trick. The **webinar thumbnails are hotlinked** from `effectory.twentythree.com` (1280×720, 16:9) — they need a network connection; swap for local assets if fully offline.

## Prototype-only

Content (activities, updates, articles, resources, webinars) is sample data captured from a live My Effectory account; swap it for the relevant content when reusing. Tab switching works (Activity/Resources/Webinars); Getting ready is empty; buttons/links are static.
