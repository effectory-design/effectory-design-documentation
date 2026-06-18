# Reports page — build spec

Prototype: [`reports.html`](reports.html) · [live](https://effectory-design.github.io/effectory-design-documentation/prototypes/reports.html)

Report list with two groups: **Essential** (PPT/PDF, fast) and **Raw Data** (XLS, slow — can take ~10 min).

## Rules

1. **Click a report row** (download icon) → open the **language picker** dialog.
2. **Picker's primary button reflects the selected language:** **"Generate"** if that language isn't generated yet, **"Download"** if it already is.
3. **Click Generate** → start generating that **(report, language)** and open the download dialog (same dialog/copy for every report; the card shows the chosen language). **Click Download** (already generated) → download directly.
4. **The list row updates immediately** → its download icon becomes a loader + **"Generating in {language}"** (or **"Generating in {n} languages"** if more than one runs at once).
5. **If the report generates quickly** (essential) → the dialog switches to **Done** and the file downloads automatically.
6. **If it's a raw data report**, after **~10 seconds** of generating → show a message in the dialog: *"this can take a while, feel free to close and keep working in My Effectory — your report will be ready to download here"* + a **Got it** button. (Don't promise a notification.)
7. **If the user closes the dialog** → generation continues in the background (row keeps its loader).
8. **When a background generation finishes** → show a **system notification** (top-right) titled *"{report} is ready to download in {language}"* with a **Download** action.
9. **In the language picker**, show per language for that report:
   - currently generating → **"Generating…"** badge, option disabled
   - already done → green **"Generated"** badge, selectable (downloads directly)

## To confirm with engineering

- Where the generating/ready state lives (per user / per project) and how long a generated file stays downloadable.
- The bundled `components.css` ships a stripped `.sysnotif-action` (missing the button reset) — align it so the notification action renders as a text link.

## Components

Design-system only: Main nav, Breadcrumb, Tabs, Selection button, Dialog, Radio, Button, System Notification (`.sysnotif`), file-type icons.
