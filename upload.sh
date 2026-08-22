#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

MSG="${1:-Update site}"

if git diff --quiet && git diff --cached --quiet && [ -z "$(git ls-files --others --exclude-standard)" ]; then
  echo "Nothing to upload — working tree clean."
  exit 0
fi

git add -A
git commit -m "$MSG"
git push origin main

echo ""
echo "Uploaded → https://caliticket.shop"
echo "GitHub may take 1–2 minutes to publish."
