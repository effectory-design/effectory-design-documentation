# Reference prototype — Reports page

Canonical implementation: [`reports.html`](reports.html) (in this folder).
When the user asks for "the reports page" / "reports prototype", **copy that file** into `prototypes/` and adapt — it is the source of truth for layout, states and behaviour. Don't reinvent it.

## What the screen is

A survey results **Reports** page. Inside the app shell (`.mainnav` + breadcrumb + page header + `.tabs`), the Reports tab lists downloadable reports in two groups:

- **Essential reports** — Standard Group Results (PPT), Management Summary (PDF), Answer Distribution (PPT). Fast to generate.
- **Deep-dive reports** — Raw Data: Anonymized / Pseudonymous / Non-anonymized (XLS). Slow (~10 min).

Each row: full-colour file-type icon (`ppt-file` / `pdf-file` / `xls-file`, 32×40, via `<img>`) + title + description + a trailing download **icon button** (`.ib`).

Header: page title `text-l3` (the survey name), a filter **selection button**, a date range with the `from-to` icon, and the `.tabs` row. Container padding 80px sides / 48px top (`results/padding`, built from spacing tokens).

## Behaviour (the rules)

1. Click a row → **language picker** dialog (`.dialog`, radio list with flags).
2. The picker's primary button reads **"Generate"** if the selected language isn't generated yet, **"Download"** if it already is.
3. **Generate** → start generating that **(report, language)** and open the **Generating report** dialog. **Download** (already done) → opens straight in the done state.
4. The list row immediately shows a loader + **"Generating in {language}"** (or **"Generating in {n} languages"** for several at once); the row keeps its normal hover and stays clickable to queue another language.
5. Generating dialog (same for all reports): grey `file-loading` icon + spinner + the chosen language. Title **"Generating report"**.
6. **Raw data only:** after ~10s still generating, a light info callout expands (animated) — info icon + *"this can take a while, feel free to close and keep working in My Effectory"* (no notify promise) + a **"Got it"** button.
7. Finished while the dialog is open → switch to **done**: green `file-ready` icon, title **"Your report is ready"**, body "Your download will start automatically", plus a "Download does not start? Click here" link.
8. Finished after the user closed the dialog → **System Notification** (`.sysnotif`, top-right) titled *"{report} is ready to download in {language}"* + a Download action.
9. **Caching:** an already-generated (report, language) downloads directly — no regeneration.
10. In the picker, a language currently generating shows a **"Generating…"** badge (disabled); an already-generated one a green **"Generated"** badge.

## Components used

Main nav · Breadcrumb (with Back) · Tabs · Selection button · Dialog (small + large header) · Radio · Button · System Notification (`.sysnotif`) · file-type icons. Layout/scrim/animation are custom CSS but always use tokens.

## Prototype-only (simulation, not production)

- Timings: `RAW_GEN_MS = 30000`, `QUICK_GEN_MS = 800`, `LONGER_HINT_MS = 10000`.
- State is in-memory per row (`row._gen = { generating: [], ready: [] }`).
- File-type icons via `<img>` (multi-colour), not `data-icon`.
