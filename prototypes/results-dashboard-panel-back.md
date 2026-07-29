# Results dashboard — side panel drill-down

Canonical implementation: [`results-dashboard-panel-back.html`](results-dashboard-panel-back.html).
Alternative return pattern (drawer stack instead of a Back button): [`results-dashboard-panel-stack.html`](results-dashboard-panel-stack.html).
Both are the results **Overview** ([`results-dashboard-overview.html`](results-dashboard-overview.html)) plus a way to walk into and back out of nested side panels.

## What it is

Inside the Effectiveness side panel, the **Areas to focus on** rows are entry points. Clicking one replaces the panel's content with the panel for that subject, and a **Back** button appears that names where it returns to. The chain runs four levels deep:

```
Effectiveness → Engagement            → a question → (another question)
              → Performance environment → a theme  → a question → …
```

---

## Business rules

### Back button

| # | Rule |
|---|---|
| B1 | The Back button appears **only after a drill-down**. A panel opened from its own card, from the Scores table or from the Themes tab has nothing to return to and shows no Back button. |
| B2 | The label is **"Back to {name of the previous page}"**, not a bare "Back" — you should know where you land before you click. |
| B3 | **Max width 300px.** Longer names clip with an ellipsis (`Back to Doing my work gives me e…`); the full text sits in the `title` attribute. Panel names (≤ ~220px) always fit in full; only question texts clip. |
| B4 | On a narrow panel the button **shrinks further** rather than pushing the close icon out of the panel. Requires `min-width: 0` on both the button and its label — a flex item does not shrink below its own text width without it. |
| B5 | At least **12px** stays between the label and the close icon, at any width. |
| B6 | Styling: tertiary button, `arrow-left` icon, top-left of `.sp-toolbar`, opposite the close icon — the same construction as the `← Back` in the dashboard breadcrumb. |
| B7 | Dismissing a panel (close icon, backdrop, Esc) **ends the trail**. You return to the dashboard, never to the panel you came from. |

### Navigation

| # | Rule |
|---|---|
| N1 | Panels **swap in place**: no slide-out/slide-in of the panel itself and no backdrop fade, so it reads as one panel changing content. That is how the platform behaves. |
| N2 | Going from one question to another is a **real step in the history**: Back names the previous question and retraces the route one hop at a time. |
| N3 | Esc and a backdrop click only ever dismiss the **topmost** visible panel. Both panels listen on `document`, so every panel checks whether it is topmost before closing. |
| N4 | Never stack two overlays without dropping one backdrop — two layers of `rgba(25,39,67,.6)` make the screen twice as dark. (See the stack variant, where the panel underneath hands its backdrop to the drawer on top.) |
| N5 | A panel's scroll position is kept when you come back to it; a newly opened question always starts at the top. |

### Question and theme lists

| # | Rule |
|---|---|
| L1 | The question list **travels with the drill-down**: the question panel offers the set you were just looking at, not a separately maintained theme list. |
| L2 | The question you are reading is **marked as current** in that list (`is-current`: `--bg-secondary` fill, `--content-base` text, `aria-current="true"`) and is **not clickable**. |
| L3 | The heading names the set that is actually listed: **"This question is part of a theme"** for theme questions, **"This question correlates strongly with a theme"** for correlating questions, **"Themes in this area"** for a composite area. Do not label a correlating question as part of the theme. |
| L4 | Row content is inset **8px** left and right — on **every** row, not just the clickable ones, so labels and scores stay aligned. The dividers keep their full width, sub-rows keep their 24px indent, and the "Group score" label follows the same inset so it stays above the score badges. |
| L5 | The hover fill is **flat and square**, flush against the dividers: no radius, no vertical gap. Painted as the row's own background so the divider lines stay drawn on top of it. |

### Motion and loading

| # | Rule |
|---|---|
| M1 | Changing panels animates as a **push/pop of the content only**: in from the right (deeper), in from the left (back), 40px, `--ease-out`. The panel and its toolbar stay put so Back and close never jump. |
| M2 | Duration **450ms**. ⚠️ Off-token: the motion tokens stop at `--motion-slow` (300ms). Defined in the prototype as a candidate `--motion-slower`; add it to `foundation.css` (and Figma) if we keep it. |
| M3 | `prefers-reduced-motion` disables the push/pop. |
| M4 | Every panel open **and** every content change shows the design-system spinner (`.spinner spinner-lg`, `role="status"`, `aria-label="Loading"`), centred in the visible body height for 450ms (`LOAD_MS`). |
| M5 | While loading, the real content is hidden with **`visibility`, not `display`**. With `display: none` a Chart.js canvas measures 0px and renders empty. |
| M6 | Closing a panel plays its exit animation: `.is-closing` on the overlay, remove on `animationend`, plus a 500ms fallback so a throttled or background tab can never leave a half-closed overlay swallowing clicks. |

### Data

| # | Rule |
|---|---|
| D1 | The row → panel pairing is **explicit in the data** (`panel` key per row), never inferred from the label, because the row labels and the theme names differ. |
| D2 | Comparison cards only show values that exist. No invented benchmark or organization score — a missing comparison means one card fewer. |
| D3 | **Performance environment is not a theme** but the composite of the four themes under it: its panel lists those themes, and it has no "Previous survey" card because the rows carry no previous value. |

---

## Row → panel mapping

| Row in "Areas to focus on" | Opens | Confidence |
|---|---|---|
| Engagement | Engagement panel | exact |
| Performance environment | area panel listing the four themes below | by definition |
| Providing Direction | theme **Giving direction** | high |
| Leading change | theme **Leadership in change** | high |
| Managing Systems | theme **Managing systems** | exact (case only) |
| Managing People | theme **Facilitating employees** | **assumption — needs confirming** |

`Managing People` is the one pairing that is not supported by the names; it is the only remaining people-oriented theme. Confirm or correct it before this goes anywhere near production.

---

## Known data gaps in the prototype

- Only 3 of the 9 Engagement questions exist in the Scores table, which is the only source of a per-question benchmark and organization score. The other 6 open with the group score alone (see D2).
- Question texts differ between the four lists in the data (`d.engpTheme`, `PANEL_THEMES`, `THEMES[].questions`, the Scores rows) — e.g. "I am proud to work at Novanta" vs "…at Novanta B.V.". Rule L1 works around it; aligning the data would be the real fix.

## Components used

Side panel (`.overlay.is-right` + `.sidepanel`) · sub-tabs · Button (tertiary) · Icon button · Spinner (`.spinner spinner-lg`) · Card · Chart.js line chart · score rows and question rows (custom, all values from tokens).
