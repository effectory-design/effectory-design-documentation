# Reports page — functionality & rules

Prototype: [`prototypes/reports.html`](reports.html)
Live: https://jenteinsing123.github.io/effectory-design-documentation/prototypes/reports.html

A survey results **Reports** page where a user downloads reports. Two groups:

- **Essential reports** — Standard Group Results (PPT), Management Summary (PDF), Answer Distribution (PPT)
- **Deep-dive reports** — Raw Data: Anonymized / Pseudonymous / Non-anonymized (XLS)

---

## Download flow

1. Click a report row → **Choose a language** dialog.
2. Select a language → **Download…**.
3. What happens next depends on the report type and on whether that language was generated before.

---

## Generation rules

- **Generation starts immediately** when the user clicks *Download…* — keyed per **(report, language)**.
- **The list row reflects it right away** (not only after the dialog closes): the download button is replaced by a loader + label
  - one language → **"Generating in {language}"**
  - multiple at once → **"Generating in {n} languages"**
- **Download dialog** is informational and has **no footer buttons** — it closes via the **✕**, backdrop click, or `Esc`.
  - *Generating* state: grey file icon + spinner, copy explains it may take a while.
  - *Done* state: green file icon + **"Done! The report will download automatically"** with a **"Download does not start? Click here"** fallback link.
- **Stay in the dialog until ready** → it switches to the *Done* state (file downloads automatically).
- **Close the dialog before ready** (raw data) → generation continues **in the background**; when finished a **system notification** appears **top-right** with a **Download** action.
- **No regeneration / caching** — once a (report, language) is generated it is remembered. Requesting that same language again → **downloads directly** (the dialog opens straight in the *Done* state, no generating step).

### Language picker reflects per-report state

- A language that is **currently generating** for this report shows a **"Generating…"** badge and its radio is **disabled** (can't be triggered again). Selection auto-moves to the first free language.
- A language that is **already generated** shows a green **"Ready"** badge and stays selectable → downloads directly.

---

## Report-type differences

| | Essential (PPT/PDF) | Raw Data (XLS) |
|---|---|---|
| Generation time | Quick (near-instant) | Long — "up to 10 minutes" |
| Dialog copy | "We are working hard to generate your file…" | "…can take up to 10 minutes. You can close this window and keep working — we'll notify you." |
| Typical pattern | Wait in dialog → Done → auto-download | Close → background → system notification |

---

## Design-system components used

Main navigation · Breadcrumb (with **Back**) · Tabs · Selection button (filter) · Date range (uses the `from-to` icon) · Dialog (small header) · Radio · Button · **System Notification** (`.sysnotif`) · file-type icons (`ppt-file` / `pdf-file` / `xls-file`, full-colour `<img>`, plus `file-loading` / `file-ready` in the dialog).

---

## Prototype-only simulation notes (not production behaviour)

- Timings are simulated: `RAW_GEN_MS = 30000` (real-world ~10 min), `QUICK_GEN_MS = 800`.
- Generation/ready state lives in-memory per row (`row._gen = { generating: [], ready: [] }`); nothing is persisted.
- File-type icons are multi-colour, so they're loaded via `<img>`, **not** `data-icon` (which would normalise the colours).
- The served `components.css` ships a stripped `.sysnotif-action`; the prototype restores the text-link styling inline. **Worth aligning the bundled `components.css`.**
- `<base href="../">` (relative) is used so the page works both via the local server and from the GitHub Pages subpath.

## Open questions for engineering

- Angular API/selectors for the Dialog, Side panel and System Notification are not yet confirmed in the styleguide.
- Concurrent multi-language generation + the "remember generated languages" cache is **app orchestration** — confirm where that state should live (per user / per project) and how long a generated file stays downloadable.
