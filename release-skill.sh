#!/usr/bin/env bash
# Build the skill bundle and publish it to the rolling "skill-latest" GitHub
# release, so the shareable download URL always serves the newest build:
#
#   https://github.com/jenteinsing123/effectory-design-documentation/releases/download/skill-latest/effectory-design-system.zip
#
# Usage:  ./release-skill.sh
# Token:  uses $GITHUB_TOKEN if set, otherwise the stored github.com git credential.

set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
OWNER="jenteinsing123"
REPO="effectory-design-documentation"
TAG="skill-latest"
ASSET="effectory-design-system.zip"
ZIP="$ROOT/dist/$ASSET"

# 1. Rebuild the bundle from source
"$ROOT/sync-skill.sh"
"$ROOT/build-skill.sh"

# 2. Resolve a token
TOKEN="${GITHUB_TOKEN:-$(printf 'protocol=https\nhost=github.com\n\n' | git credential fill 2>/dev/null | sed -n 's/^username=//p')}"
if [ -z "$TOKEN" ]; then
  echo "✗ No GitHub token. Set GITHUB_TOKEN or store a github.com credential (git push once)."
  exit 1
fi

API="https://api.github.com/repos/$OWNER/$REPO"
hdr=(-H "Authorization: Bearer $TOKEN" -H "Accept: application/vnd.github+json")

echo "→ Publishing to release '$TAG'"

# 3. Get the release id, creating the rolling release if it doesn't exist yet
ID=$(curl -s "${hdr[@]}" "$API/releases/tags/$TAG" | python3 -c 'import sys,json;print(json.load(sys.stdin).get("id",""))')
if [ -z "$ID" ]; then
  ID=$(curl -s -X POST "${hdr[@]}" "$API/releases" \
        -d "{\"tag_name\":\"$TAG\",\"target_commitish\":\"main\",\"name\":\"Effectory Design System — skill (latest)\",\"body\":\"Always the latest build. Download $ASSET and upload it in Claude.ai → Organization settings → Skills.\"}" \
        | python3 -c 'import sys,json;print(json.load(sys.stdin).get("id",""))')
fi
if [ -z "$ID" ]; then echo "✗ Could not find or create the release."; exit 1; fi

# 4. Remove any previous asset of the same name, then upload the fresh one
for aid in $(curl -s "${hdr[@]}" "$API/releases/$ID/assets" \
              | python3 -c "import sys,json;[print(a['id']) for a in json.load(sys.stdin) if a['name']=='$ASSET']"); do
  curl -s -X DELETE "${hdr[@]}" "$API/releases/assets/$aid" >/dev/null
done

URL=$(curl -s -X POST "${hdr[@]}" -H "Content-Type: application/zip" \
        --data-binary @"$ZIP" \
        "https://uploads.github.com/repos/$OWNER/$REPO/releases/$ID/assets?name=$ASSET" \
        | python3 -c 'import sys,json;print(json.load(sys.stdin).get("browser_download_url",""))')

echo ""
echo "✓ Published. Shareable download URL:"
echo "  $URL"
