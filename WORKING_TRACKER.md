# Loh Ek Sem Art Archive — Working Tracker

**Created:** 2026-05-02  
**Last Updated:** 2026-05-02  
**Session:** Continuation from context-limited session  
**Deploy Target:** Git → GitHub (loheksem-com)  
**Live URL:** Check GitHub Pages or hosting config

---

## Current Session Summary

### Completed Today (2026-05-02)

| Task | Status | Files Modified | Notes |
|------|--------|----------------|-------|
| Fix Bible Series "SOLD" labels | ✅ Complete | series-bible.html | Changed to "Retained by Artist", updated medium to "Watercolor on archival paper" |
| Fix Ink & Sketch hero whitebalance | ✅ Complete | series-ink-sketch.html | Added CSS filter: sepia(0.15) saturate(1.15) brightness(1.05) contrast(1.05) |
| Fix Easel image orientation | ✅ Complete | series-furniture.html | Added `.rotated` CSS class for 90deg rotation |
| Create "Personal Collection" section | ✅ Complete | series-furniture.html | Chippendale Writing Table + Cart Wheel Shelf clearly marked as "not made by Sem" |
| Update home page with all 10 series | ✅ Complete | index.html | Added Bible + Furniture cards, updated intro text |
| Fix Ink & Sketch hero image path | ✅ Complete | index.html | Corrected case-sensitive filename (Malacca river1.JPG) |
| Archive .netlify folder | ✅ Complete | .netlify.archived/ | Avoid future deployment confusion |
| Git commit + push | ✅ Complete | All modified files | Commit: 0f41c09 "Archive .netlify folder..." |

### Git History (Today)

```
0f41c09 - Archive .netlify folder to avoid deployment confusion (latest)
9db6bac - Update home page with all 10 series, fix Ink & Sketch whitebalance, fix Furniture gallery
```

---

## Complete Series Inventory (10 Total)

| # | Series | Page | Hero Image | Status | Notes |
|---|--------|------|------------|--------|-------|
| 1 | Malay Kampung | series-malay-kampung.html | by the well.jpg | ✅ Live | 12+ works, acrylic on canvas |
| 2 | Peranakan | series-peranakan.html | 09ChengHo comes to Nanyang.jpg | ✅ Live | 10+ works, acrylic on canvas |
| 3 | Watercolour | series-watercolour.html | Chesstime(38cmx50cm) watercolour.JPG | ✅ Live | 8+ works, watercolour on paper |
| 4 | Paper Cast | series-paper-cast.html | by the well [25x30cm].JPG | ✅ Live | 7-step process documented |
| 5 | Bali | series-bali.html | Little Balinese Dancer 98x98cm oil.JPG | ✅ Live | 7 works, oil/acrylic on canvas |
| 6 | Borneo | series-borneo.html | Hornbil Dancers [83x110cm] acrylic.JPG | ✅ Live | 40+ works, oil/acrylic on canvas |
| 7 | Sculpture | series-sculpture.html | Woman Standing 1.JPG | ✅ Live | 50+ works, paper cast/mixed media |
| 8 | Ink & Sketch | series-ink-sketch.html | Malacca river1.JPG | ✅ Live | 50+ works, ink/pencil on paper |
| 9 | Bible | series-bible.html | 001EA76D-FFD1-4ED3-8511-59675D999647.jpeg | ✅ Live | 6 works, watercolor on archival paper |
| 10 | Furniture | series-furniture.html | eight foot bench.JPG | ✅ Live | 8+ pieces + 2 personal collection |

---

## Asset Audit Status

### Folders Scanned
- ✅ `loheksem_deploy/assets/` - All series subfolders
- ✅ `E:/Local Disk/Mapa PC/Back Up/` - Legacy archive
- ✅ `loheksem_staging/` - Working files

### Key Asset Locations

| Asset Type | Location | Status |
|------------|----------|--------|
| Painting images | `loheksem_deploy/assets/[Series]/` | ✅ Organized |
| Process photos | `loheksem_deploy/PAPERcast-making/` | ✅ Complete (8 steps) |
| Artist portrait | `loheksem_deploy/loheksem_staging/crops/` | ✅ High-res |
| Signature | `loheksem_deploy/browser_sessions/` | ✅ Transparent PNG |
| Legacy docs | `E:/Local Disk/Mapa PC/Back Up/Peranakan the Heritage compilation/` | 📚 26 Word docs (cultural context) |

---

## Pending Actions

### High Priority
- [ ] **Verify live site** — Confirm Git push deployed successfully
- [ ] **WordPress sunset** — Set WordPress.com site to private (manual action)

### Medium Priority
- [ ] **Google Photos access** — User mentioned Bible series from loheksem@gmail.com
- [ ] **Image optimization** — Convert large JPGs to WebP for performance
- [ ] **Mobile QA** — Test all 10 series pages on mobile viewports

### Low Priority / Future
- [ ] **Custom domain** — loheksem.com or loheksem.art
- [ ] **Instagram setup** — Per PLATFORM_RESEARCH.md
- [ ] **Pinterest setup** — Per PLATFORM_RESEARCH.md
- [ ] **NotebookLM expansion** — Add more theological/cultural sources

---

## File Structure Reference

```
loheksem_wordpress/
├── loheksem_deploy/          # Production folder (Git-tracked)
│   ├── index.html            # Home page (10 series grid)
│   ├── about.html
│   ├── contact.html
│   ├── exhibitions.html
│   ├── series-*.html         # 10 series pages
│   ├── assets/
│   │   ├── Bible/
│   │   ├── Furniture/
│   │   ├── Ink-Sketch/
│   │   ├── Paper-Cast/       # Recently added
│   │   └── [other series]/
│   ├── PAPERcast-making/     # 8 process photos
│   ├── .netlify.archived/    # Archived (not deployed)
│   └── *.md                  # Documentation
├── Launch_Hermes.bat         # WSL2 Hermes launcher
└── loheksem_logs/
    └── upload_images.bat     # WordPress uploader (legacy)
```

---

## External Resources

### Documentation
- [BRAND_STRATEGY.md](loheksem_deploy/BRAND_STRATEGY.md) — 5 brand pillars, 4 personas
- [DESIGN_SYSTEM.md](loheksem_deploy/DESIGN_SYSTEM.md) — Visual identity spec
- [INFORMATION_ARCHITECTURE.md](loheksem_deploy/INFORMATION_ARCHITECTURE.md) — Site structure
- [PLATFORM_RESEARCH.md](loheksem_deploy/PLATFORM_RESEARCH.md) — Multi-platform strategy
- [TRACKER.md](loheksem_deploy/TRACKER.md) — Original project tracker

### Legacy Archive (E: Drive)
- `E:/Local Disk/Mapa PC/Back Up/Peranakan the Heritage compilation/` — 26 Word docs with cultural context
- `E:/Local Disk/Mapa PC/Back Up/+Painting2010updated compilation/` — Watercolour series
- `E:/Local Disk/Mapa PC/Back Up/PAPERcast-making/` — Process photos (already copied)

### NotebookLM
- Master notebook: `e048f9a2-4721-4855-9a38-1f780ed8f0c6`
- Query style: Bible-first, breadth-first (not "Reformed tradition" framed)

---

## Deployment Checklist

### Pre-Deploy
- [ ] All modified files staged
- [ ] Commit message describes changes
- [ ] No console errors in dev tools

### Deploy (Git)
```bash
git add [files]
git commit -m "Descriptive message"
git push
```

### Post-Deploy
- [ ] Verify live site loads
- [ ] Check images render correctly
- [ ] Test navigation links
- [ ] Mobile viewport check

---

## Notes for Next Session

1. **Deployment confirmation** — Site deploys via Git to GitHub, NOT Netlify (Netlify folder archived)
2. **Peranakan context** — 26 Word docs on E: drive contain rich cultural context for series pages
3. **Bible series** — User has Google Photos access (loheksem@gmail.com) for additional images
4. **Personal collection** — Furniture page has clear distinction: Sem-made vs. personal collection pieces

---

## Quick Commands Reference

### Git Operations
```bash
# Check status
git status

# Stage all changes
git add .

# Commit with message
git commit -m "Description"

# Push to remote
git push

# View recent commits
git log --oneline -5
```

### PowerShell File Operations
```powershell
# Copy files
Copy-Item -Path "source" -Destination "dest"

# Move files
Move-Item -Path "source" -Destination "dest"

# List directory
Get-ChildItem -Path "."
```

### Bash File Operations (WSL/Git Bash)
```bash
# Copy files
cp source dest

# Move files
mv source dest

# List directory
ls -la
```

---

**Last Git Push:** 2026-05-02 10:31+  
**Commit Hash:** 0f41c09  
**Branch:** master  
**Remote:** https://github.com/Tonicquill/loheksem-com.git
