#!/usr/bin/env bash
# Publish the design system to effectory-ux/Engage-Design-system-, without the
# prototypes. This repo keeps everything; the design-system repo gets only the
# files that survive .ds-sync-exclude.
#
# Usage:
#   ./sync-design-system.sh            push the result
#   ./sync-design-system.sh --dry-run  show what would change, push nothing

set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
TARGET="https://github.com/effectory-ux/Engage-Design-system-.git"
EXCLUDES="$ROOT/.ds-sync-exclude"
DRY=""
[ "${1:-}" = "--dry-run" ] && DRY="1"

command -v rsync >/dev/null || { echo "✗ rsync ontbreekt"; exit 1; }
[ -f "$EXCLUDES" ] || { echo "✗ $EXCLUDES ontbreekt"; exit 1; }

WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

echo "→ design-system repo klonen"
git clone --quiet --depth 1 "$TARGET" "$WORK/repo"

# Start from an empty tree so removals here also land there; the .git dir stays.
git -C "$WORK/repo" rm -r --quiet --cached . >/dev/null
find "$WORK/repo" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +

echo "→ bestanden kopiëren (prototypes uitgesloten)"
rsync -a --exclude-from="$EXCLUDES" "$ROOT"/ "$WORK/repo"/

cd "$WORK/repo"
git add -A

if git diff --cached --quiet; then
  echo "✓ niets te doen, de design-system repo is al bij"
  exit 0
fi

echo ""
echo "Wijzigingen:"
git diff --cached --stat | tail -12
echo ""

if [ -n "$DRY" ]; then
  echo "· dry run, niets gepusht"
  exit 0
fi

VER="$(tr -d '[:space:]' < "$ROOT/VERSION" 2>/dev/null || echo "?")"
SRC="$(git -C "$ROOT" rev-parse --short HEAD)"
git -c user.name="$(git -C "$ROOT" config user.name)" \
    -c user.email="$(git -C "$ROOT" config user.email)" \
    commit --quiet -m "Sync design system v$VER from effectory-design-documentation@$SRC

Prototypes are intentionally left out; they live in the documentation repo."
git push --quiet origin HEAD:main

echo "✓ gepusht naar effectory-ux/Engage-Design-system-"
echo "  https://effectory-ux.github.io/Engage-Design-system-/"
