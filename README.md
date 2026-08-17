# effectory-design-documentation

De naam dekt de lading niet meer. Het design system en alle documentatie zijn
verhuisd naar **[effectory-ux/Engage-Design-system-](https://github.com/effectory-ux/Engage-Design-system-)**;
wat hier nog staat zijn een handvol prototypes en de doorverwijzingen naar hun
nieuwe plek.

## Wat hier nog leeft

| | |
|---|---|
| `prototypes/` | results dashboard (2), my-effectory-home, BambooHR-integratie, approach picker, announcement playground |
| root | `action-center-manager*.html` (4), `conversation-guide.html`, `ac-overview-embed.html` |
| bouwstenen | `tokens.css`, `foundation.css`, `components.css`, `icons.js`, `assets/`, en `effectiveness.js` + `.css` + `i18n.js` voor het embed-fragment |

Die bouwstenen zijn kopieën uit het design system. Ze staan hier omdat de
prototypes hierboven ze uit de repo-root laden. Weghalen breekt ze.

## Waar de rest heen is

| Was hier | Staat nu |
|---|---|
| design system, docs, skill | [effectory-ux/Engage-Design-system-](https://effectory-ux.github.io/Engage-Design-system-/) |
| group linking (5 varianten) | [effectory-ux/group-linking](https://effectory-ux.github.io/group-linking/) |
| GTMA before/after (24 schermen) | [effectory-ux/gtma](https://effectory-ux.github.io/gtma/) |

Alle oude URL's blijven werken: op elk oud pad staat een pagina die doorstuurt,
inclusief de hash, dus ook een diepe link naar een specifiek scherm komt goed
terecht.

Een overzicht van alle prototypes van het team staat in de
**[galerij](https://effectory-ux.github.io/prototypes/)**.

## Werken aan het design system

Niet hier, maar in een kloon van de nieuwe repo:

```bash
git clone https://github.com/effectory-ux/Engage-Design-system-.git
```

Daar staan `skill-source/`, `build-tokens.py` en `release-skill.sh`, en daar horen
de conventies uit `CLAUDE.md` bij.

## Contributor setup

Na het klonen eenmalig de hooks aanzetten:

```bash
git config core.hooksPath .githooks
```

Die bewaken inline SVG-iconen, de type-schaal en radius-tokens. Zie de hook zelf
voor de uitzonderingen (`<!-- icon-exempt: … -->`, `/* font-scale-exempt: … */`,
`/* radius-exempt: … */`).
