# Reference prototypes — how to add a new screen

A reference prototype is a screen with an **approved, fixed design** that should
be reused verbatim when someone asks for it (e.g. "the reports page"), instead of
rebuilt from scratch. Steps to add one:

1. **Finalize** the screen as `prototypes/<name>.html` (built with the design system).
2. **Copy it into the skill — in BOTH locations** (`sync-skill.sh` does NOT copy this folder or `SKILL.md`):
   - `.claude/skills/effectory-design-system/reference-prototypes/<name>.html`
   - `skill-source/reference-prototypes/<name>.html`
   Add a short `<name>.md` next to each: what the screen is, its states, the behaviour rules.
3. **Register it** in the "Referentie-prototypes" section of **both** `SKILL.md` files
   (project + skill-source). Describe it by **intent**, not exact trigger phrases.
4. **Release:** bump `VERSION`, then `./sync-skill.sh` → `python3 build-changelog.py` → `./build-skill.sh` → `./release-skill.sh`.

## The download is automatic

The get-started page (`prototypes-docs.html`) links to the stable rolling release:
`…/releases/download/skill-latest/effectory-design-system.zip`. `release-skill.sh`
replaces the asset there every time, so the newest build is always the one people
download — **no per-release page edit needed**, for this screen or any future one.
