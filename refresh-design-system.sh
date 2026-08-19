#!/usr/bin/env bash
# Pull the design-system files from effectory-ux/Engage-Design-system- into this repo.
#
# Why this exists: the prototypes here load tokens.css / foundation.css /
# components.css / icons.js from the repo root with a relative path, so this repo
# keeps a copy of them. A copy drifts. On 2026-08-19 components.css was thirteen
# lines behind (no .chip-sm) and icons.js was missing the currentScript asset fix,
# and nobody had noticed — the prototypes here were running on an older design
# system than the one the skill ships.
#
# The design system is the source of truth; this direction only. Never edit these
# four files here.
#
# Usage:
#   ./refresh-design-system.sh          pull the published files in
#   ./refresh-design-system.sh --check  compare only, exit 1 on any difference (CI)

set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
BASE="https://effectory-ux.github.io/Engage-Design-system-"
FILES=(tokens.css foundation.css components.css icons.js)

CHECK=""
[ "${1:-}" = "--check" ] && CHECK="1"

WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

drifted=()
missing=()

for f in "${FILES[@]}"; do
  if ! curl -fsSL -o "$WORK/$f" "$BASE/$f"; then
    echo "✗ could not fetch $BASE/$f"
    exit 1
  fi
  if [ ! -f "$ROOT/$f" ]; then
    missing+=("$f")
  elif ! cmp -s "$ROOT/$f" "$WORK/$f"; then
    drifted+=("$f")
  fi
done

if [ ${#drifted[@]} -eq 0 ] && [ ${#missing[@]} -eq 0 ]; then
  echo "✓ the design-system files here match the published design system."
  exit 0
fi

for f in ${missing[@]+"${missing[@]}"}; do
  echo "  · $f is missing here"
done
for f in ${drifted[@]+"${drifted[@]}"}; do
  lines=$(diff "$ROOT/$f" "$WORK/$f" | grep -c '^[<>]' || true)
  echo "  · $f differs ($lines lines)"
done

if [ -n "$CHECK" ]; then
  echo ""
  echo "✗ This repo is running an older design system than the published one."
  echo "  Fix it with ./refresh-design-system.sh and commit the result."
  exit 1
fi

for f in ${missing[@]+"${missing[@]}"} ${drifted[@]+"${drifted[@]}"}; do
  cp "$WORK/$f" "$ROOT/$f"
done

echo ""
echo "✓ Updated $(( ${#missing[@]} + ${#drifted[@]} )) file(s). Commit them."
echo ""
echo "Note: assets/icons/ and assets/illustrations/ are not covered here — there is"
echo "no directory listing to fetch. Copy those from a checkout of the design-system"
echo "repo if an icon or illustration is missing."
