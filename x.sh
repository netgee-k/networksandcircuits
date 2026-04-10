#!/usr/bin/env bash
# fix-projects.sh — surgically patches page.tsx to use Supabase instead of hardcoded data
# Run from your project root: bash fix-projects.sh

set -e

PAGE="src/app/page.tsx"
DATA_FILE="src/data/projects.json"
BACKUP="$PAGE.bak.$(date +%Y%m%d_%H%M%S)"

# ── Sanity check ──────────────────────────────────────────────────────────────
if [ ! -f "$PAGE" ]; then
  echo "❌  Could not find $PAGE — are you in the project root?"
  exit 1
fi

echo "📦  Backing up current page.tsx → $(basename $BACKUP)"
cp "$PAGE" "$BACKUP"

# ── 1. Remove the hardcoded PROJECTS array ────────────────────────────────────
# Deletes from "const PROJECTS = [" up to and including its closing "];"
echo "🗑️   Removing hardcoded PROJECTS array..."
perl -i -0pe 's/const PROJECTS\s*=\s*\[.*?\];\n//s' "$PAGE"

# ── 2. Add Project interface if not already present ───────────────────────────
if ! grep -q "interface Project" "$PAGE"; then
  echo "📝  Adding Project interface..."
  perl -i -0pe "s/('use client';)/\$1\n\ninterface Project {\n  id: number;\n  title: string;\n  year: string;\n  size: 'large' | 'small';\n  description: string;\n  tags: string[];\n  github: string;\n  url: string;\n  video: string;\n  cover: string;\n  gallery: string[];\n  position: number;\n}/" "$PAGE"
fi

# ── 3. Replace hardcoded projects state with typed empty array ────────────────
echo "🔧  Fixing projects useState..."
sed -i "s/const \[projects,\s*setProjects\]\s*=\s*useState(\[\])/const [projects, setProjects] = useState<Project[]>([])/g" "$PAGE"

# ── 4. Add fetch useEffect if not already present ─────────────────────────────
if ! grep -q "fetch('/api/projects')" "$PAGE"; then
  echo "📡  Injecting fetch useEffect..."
  perl -i -0pe "s/(export default function Home\(\) \{)/\$1\n\n  useEffect(() => {\n    fetch('\/api\/projects')\n      .then(r => r.json())\n      .then(data => setProjects(Array.isArray(data) ? data : []))\n      .catch(() => setProjects([]));\n  }, []);/" "$PAGE"
fi

# ── 5. Replace PROJECTS.map with projects.map in JSX ─────────────────────────
echo "🔁  Swapping PROJECTS.map → projects.map in JSX..."
sed -i 's/{PROJECTS\.map(/{projects.map(/g' "$PAGE"

# ── 6. Fix field name mismatches (desc → description, img → cover) ────────────
echo "🔀  Fixing field name mismatches..."
sed -i 's/p\.desc\b/p.description/g' "$PAGE"
sed -i 's/p\.img\b/p.cover/g' "$PAGE"
sed -i 's/p\.link\b/p.url/g' "$PAGE"

# ── 7. Remove stale data file ─────────────────────────────────────────────────
if [ -f "$DATA_FILE" ]; then
  echo "🗑️   Removing stale $DATA_FILE..."
  rm "$DATA_FILE"
  rmdir --ignore-fail-on-non-empty src/data 2>/dev/null || true
fi

echo ""
echo "✅  Done! Changes made:"
echo "    • Removed hardcoded PROJECTS array"
echo "    • Added Project interface (if missing)"
echo "    • Wired up fetch('/api/projects')"
echo "    • Fixed field names: desc→description, img→cover, link→url"
echo "    • Deleted src/data/projects.json"
echo "    • Backup saved at $BACKUP"
echo ""
echo "🚀  Restart your dev server:"
echo "    npm run dev"
