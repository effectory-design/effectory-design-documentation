# Reports page — build spec

Prototype: [`reports.html`](reports.html) · [live](https://jenteinsing123.github.io/effectory-design-documentation/prototypes/reports.html)

Report list with two groups: **Essential** (PPT/PDF, fast) and **Raw Data** (XLS, slow — can take ~10 min).

## What to build

1. **Row → language dialog → Download.** Generation is keyed per **(report, language)**.
2. **Generation starts on Download** and the row immediately shows a loader + **"Generating in {language}"** (or **"…in {n} languages"** when more than one runs at once).
3. **Download dialog** (same for every report): generating card showing the selected language → **Done** state ("downloads automatically") when finished.
4. **Raw data, after a few seconds of generating:** the dialog expands an info callout — *"you can keep working in My Effectory, we'll notify you"* — with a **Notify me** button.
5. **Background finish:** if the user left the dialog, show a **system notification** (`.sysnotif`, top-right) titled *"{report} is ready to download in {language}"* with a Download action.
6. **Cache:** an already-generated (report, language) downloads **directly** — no regeneration.

## State rules

- Track per report: languages **generating** and languages **ready**.
- Language picker reflects this: a generating language is disabled with a **"Generating…"** badge; a ready one shows a green **"Ready"** badge.
- Confirm with engineering: where this state lives (per user / project) and how long a generated file stays downloadable.

## Components

Design-system only: Main nav, Breadcrumb, Tabs, Selection button, Dialog, Radio, Button, System Notification (`.sysnotif`), file-type icons.

> Note: the bundled `components.css` ships a stripped `.sysnotif-action` (missing the button reset) — align it so the notification action renders as a text link.
