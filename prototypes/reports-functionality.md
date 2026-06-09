# Reports page — build spec

Prototype: [`reports.html`](reports.html) · [live](https://jenteinsing123.github.io/effectory-design-documentation/prototypes/reports.html)

Report list with two groups: **Essential** (PPT/PDF, fast) and **Raw Data** (XLS, slow — can take ~10 min).

## Rules

1. **Click a report** → open the **language picker** dialog.
2. **Click Download** → start generating that **(report, language)** and open the download dialog. The same dialog/copy is used for every report; the generating card shows the chosen language.
3. **The list row updates immediately** → the download button becomes a loader + **"Generating in {language}"** (or **"Generating in {n} languages"** if more than one runs at once).
4. **If the report is generated quickly** (essential) → the dialog switches to **Done** and the file downloads automatically.
5. **If it's a raw data report**, after **2 seconds** of generating → show a message in the dialog: *"you can keep working in My Effectory, we'll notify you when it's ready"* + a **Notify me** button.
6. **If the user closes / clicks Notify me** → generation continues in the background (row keeps its loader).
7. **When a background generation finishes** → show a **system notification** (top-right) titled *"{report} is ready to download in {language}"* with a **Download** action.
8. **If a (report, language) was already generated** → don't regenerate; download it **directly**.
9. **In the language picker**, show per language for that report:
   - currently generating → **"Generating…"** badge, option disabled
   - already done → green **"Ready"** badge, selectable (downloads directly)

## To confirm with engineering

- Where the generating/ready state lives (per user / per project) and how long a generated file stays downloadable.
- The bundled `components.css` ships a stripped `.sysnotif-action` (missing the button reset) — align it so the notification action renders as a text link.

## Components

Design-system only: Main nav, Breadcrumb, Tabs, Selection button, Dialog, Radio, Button, System Notification (`.sysnotif`), file-type icons.
