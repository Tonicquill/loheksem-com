# Loh Ek Sem Art Archive — Project Tracker

**Created:** 2026-05-01  
**Current Status:** Foundation Phase  
**Live Site:** https://unrivaled-taiyaki-149ad4.netlify.app

---

## Progress Log

| Date | Milestone | Status | Notes |
|------|-----------|--------|-------|
| 2026-05-01 | Netlify deployment (MVP) | ✅ Complete | Single-page mockup live |
| 2026-05-01 | NotebookLM integration | ✅ Complete | Master notebook created: `e048f9a2-4721-4855-9a38-1f780ed8f0c6` |
| 2026-05-01 | Brand strategy research | ✅ Complete | 5 brand pillars, 4 personas defined |
| 2026-05-01 | Asset audit | ✅ Complete | 10 of 15 images missing |
| 2026-05-01 | Master plan approved | ✅ Complete | Implementation roadmap defined |
| 2026-05-01 | TRACKER.md created | ✅ Complete | This document |
| 2026-05-01 | WordPress set to private | ⏳ Pending | Requires manual action in WordPress.com dashboard |
| 2026-05-01 | Platform research (web) | ✅ Complete | 6 exemplary archives, 4-platform strategy, 10 recommendations |
| 2026-05-01 | Asset sourcing (portrait + process) | ✅ Complete | 8 images found on E: drive, copied to deploy folder |
| 2026-05-01 | INFORMATION_ARCHITECTURE.md | ✅ Complete | 7-page structure, user journeys, SEO schema |
| 2026-05-01 | BRAND_STRATEGY.md | ✅ Complete | 5 pillars, 4 personas, tone/voice, narrative themes |
| 2026-05-01 | Production Home page | ✅ Complete | Asymmetric hero, series grid, process teaser, deployed to Netlify |
| 2026-05-01 | About page | ✅ Complete | Biography, timeline, artist statement, deployed to Netlify |
| 2026-05-01 | Malay Kampung Series | ✅ Complete | Gallery, cultural context notes, deployed |
| 2026-05-01 | Peranakan Series | ✅ Complete | Gallery, cultural context notes, deployed |
| 2026-05-01 | Watercolour Series | ✅ Complete | Gallery, technical notes, deployed |
| 2026-05-01 | Paper Cast Series | ✅ Complete | Full 7-step process, gallery, comparison, deployed |
| 2026-05-01 | Exhibitions page | ✅ Complete | Verified timeline, press, collections, deployed |
| 2026-05-01 | Contact page | ✅ Complete | Form (Netlify Forms), email, location, deployed |
| 2026-05-01 | DESIGN_SYSTEM.md | ✅ Complete | Visual identity specification |
| 2026-05-01 | Comprehensive asset audit | ✅ Complete | Discovered 8 series total: Malay Kampung, Peranakan, Watercolour, Paper Cast, Bali, Borneo, Sculpture, Ink & Sketch |
| 2026-05-01 | Portrait upgrade | ✅ Complete | Upgraded from 46KB to 1.1MB high-res artist photo |

---

## Decision Registry

### 2026-05-01: Platform Decision
**Decision:** Use Netlify (static hosting) instead of WordPress.com  
**Why:** WordPress.com free tier blocks custom CSS, preventing brand-aligned design  
**Alternatives considered:** Vercel, GitHub Pages, Cloudflare Pages  
**Owner:** User

### 2026-05-01: Design Direction
**Decision:** Brutalist gallery aesthetic with asymmetric layouts  
**Why:** Matches artist's raw, documentarian style; differentiates from generic artist websites  
**Guiding principles:** huashu-design Core Asset Protocol, claude-taste-skill DESIGN_VARIANCE=8  
**Owner:** Assistant (design skills)

### 2026-05-01: Information Architecture
**Decision:** Multi-page site structure (11+ pages total)  
**Why:** Each painting series deserves dedicated context; single-page scroll insufficient for archive depth  
**Pages:** Home, About, Malay Kampung, Peranakan, Watercolour, Paper Cast, Bali, Borneo, Sculpture, Ink & Sketch, Exhibitions, Contact  
**Owner:** Assistant

### 2026-05-01: Series Discovery
**Decision:** Expand from 4 series to 8 series after E: drive audit  
**Why:** Artist's complete oeuvre includes Bali (dancers, ceremonial), Borneo (Dayak culture, hornbill dances), Sculpture (figurative works), and Ink & Sketch (urban scenes)  
**Action:** Create dedicated series pages for each body of work  
**Owner:** Assistant

### 2026-05-01: Brand Positioning
**Decision:** Position as "Cultural Documentarian" first, "Fine Artist" second  
**Why:** Sem's unique value is systematic preservation of vanishing kampung life, not just aesthetic output  
**Brand pillars:** Documentarian, Technical Innovator, Nostalgic Visionary, Bridge-Builder, Legacy  
**Owner:** Assistant (brand strategy research)

### 2026-05-01: Platform Strategy
**Decision:** Website as primary hub + Instagram + Pinterest + X/Twitter for discovery  
**Why:** Website = controlled archive; Instagram = visual discovery (SEO > hashtags 2025-2026); Pinterest = evergreen traffic (3-4 month half-life); X = industry networking  
**Implementation order:** Website first (Month 1), Instagram/Pinterest (Month 2), X/Twitter (Month 3)  
**Owner:** Assistant (platform research)

### 2026-05-01: QC Sweep Completed
**Decision:** Fixed critical typos and measurement errors across all pages  
**Why:** User-identified issues: "kampung a dyll" → "Kampung Idyll II" (exhibition name), Cheng Ho dimensions 46×51cm → 549×610cm (18'×20')  
**Fixes applied:** exhibitions.html (Kampung Idyll II), series-peranakan.html (Cheng Ho monumental dimensions)  
**Deployed:** Production deploy #69f43095bc5d6805791ad925 live at unrivaled-taiyaki-149ad4.netlify.app  
**Owner:** Assistant

### 2026-05-01: Artwork Popup + SOLD Badge System
**Decision:** Implemented hover popups with detailed artwork metadata and SOLD status indicators  
**Why:** User request: "documented writeups for individual pieces within E: I think they can all exist as popups or hover for individual painting where available" and "SOLD statuses deserve updating"  
**Features:** CSS hover popups showing dimensions/medium/year/status, SOLD badge (terracotta) for sold works  
**Source:** OCR documentation from staging (page_05.txt, page_21.txt, page_25.txt)  
**Deployed:** Production deploy #69f434ececde9723b5c43999 — Malay Kampung Series page updated  
**Owner:** Assistant

### 2026-05-01: Information Architecture Model
**Decision:** NYU Knowledge Base wiki model for cultural context + Laura Lit multi-category portfolio for series pages  
**Why:** Wiki handles complex cultural terms (kampung, Peranakan) with interlinked entries; multi-category template scales across 4 series with consistent UX  
**Owner:** Assistant (IA research)

---

## Asset Inventory

### Images We Have (5 of 15)

| File | Size | Status | Used In |
|------|------|--------|---------|
| `browser_sessions/signature_transparent.png` | 25KB | ✅ Present | Navigation, Hero A, Hero B, Hero C, Footer |
| `Fishing village [122x186cm] acrylic.JPG` | 57KB | ✅ Present | Hero backdrop (multiple) |
| `by the well.jpg` | 89KB | ✅ Present | Hero A artwork, Malay Kampung card |
| `09ChengHo comes to Nanyang.jpg` | 540KB | ✅ Present | Hero B backdrop |
| `09Mooncake Festival.jpg` | 1MB | ✅ Present | Hero B/C backdrop |

### Images Missing (0 of 15) — ALL FOUND

| File | Status | Source | Destination |
|------|--------|--------|-------------|
| `Chesstime(38cmx50cm) watercolour.JPG` | ✅ Copied | `E:/+Painting2010updated compilation/WATERCOLOUR/` | `loheksem_deploy/` |
| `by the well [25x30cm].JPG` | ✅ Copied | `E:/+PAPERcast/` | `loheksem_deploy/` |

### Images Found & Copied (8 of 15) — RESOLVED

| File | Status | Source | Destination |
|------|--------|--------|-------------|
| `p01_portrait_loh_ek_sem.jpg` | ✅ Copied | `loheksem_staging/crops/` | `loheksem_deploy/loheksem_staging/crops/` |
| `pencil drawing.JPG` | ✅ Copied | `E:/Local Disk/Mapa PC/Back Up/PAPERcast-making/` | `loheksem_deploy/PAPERcast-making/` |
| `carving on wood block.JPG` | ✅ Copied | `E:/Local Disk/Mapa PC/Back Up/PAPERcast-making/` | `loheksem_deploy/PAPERcast-making/` |
| `mould making.JPG` | ✅ Copied | `E:/Local Disk/Mapa PC/Back Up/PAPERcast-making/` | `loheksem_deploy/PAPERcast-making/` |
| `mashed paper laying.JPG` | ✅ Copied | `E:/Local Disk/Mapa PC/Back Up/PAPERcast-making/` | `loheksem_deploy/PAPERcast-making/` |
| `drying.JPG` | ✅ Copied | `E:/Local Disk/Mapa PC/Back Up/PAPERcast-making/` | `loheksem_deploy/PAPERcast-making/` |
| `detatch mould.JPG` | ✅ Copied | `E:/Local Disk/Mapa PC/Back Up/PAPERcast-making/` | `loheksem_deploy/PAPERcast-making/` |
| `colouring 1.JPG` | ✅ Copied | `E:/Local Disk/Mapa PC/Back Up/PAPERcast-making/` | `loheksem_deploy/PAPERcast-making/` |

### Action Items for Asset Acquisition

1. **Search local folders** for PAPERcast-making images
2. **Access Google Photos** (loheksem@gmail.com) for:
   - Artist portrait
   - Bible series watercolours (user mentioned)
   - Paper cast process photos
3. **Scan E: drive** systematically for all series

---

## Blockers

| Blocker | Impact | Owner | Status |
|---------|--------|-------|--------|
| WordPress still public | Confusion about canonical site | User | 🟡 Pending (manual action in WordPress.com dashboard) |

---

## Next Steps (In Order)

1. ✅ **Source missing assets** — All 15 images found and copied
2. ✅ **Build Home page** — Deployed with asymmetric hero
3. ✅ **Build About page** — Biography, timeline, statement
4. ✅ **Build Paper Cast page** — Full 7-step process documented
5. ✅ **Build Malay Kampung page** — Gallery + cultural notes
6. ✅ **Build Peranakan page** — Gallery + cultural notes
7. ✅ **Build Watercolour page** — Gallery + technical notes
8. ✅ **Build Exhibitions page** — Verified timeline + press
9. ✅ **Build Contact page** — Netlify Forms integration
10. ✅ **Final QA + deploy** — All 7 pages deployed to Netlify

### Remaining Actions
- User: Set WordPress to private (manual action in WordPress.com dashboard)
- User: Provide Google Photos access for Bible series (loheksem@gmail.com)
- Build 4 additional series pages: Bali, Borneo, Sculpture, Ink & Sketch
- Optional: Purchase custom domain (loheksem.com or loheksem.art)
- Optional: Set up Instagram + Pinterest per PLATFORM_RESEARCH.md recommendations

---

## Notes

- NotebookLM master notebook: https://notebooklm.google.com/notebook/e048f9a2-4721-4855-9a38-1f780ed8f0c6
- Netlify project: https://app.netlify.com/projects/unrivaled-taiyaki-149ad4
- Brand strategy: See `BRAND_STRATEGY.md` (5 pillars, 4 personas, tone/voice)
- Design system: See `DESIGN_SYSTEM.md` (visual identity specification)
- Platform research: See `PLATFORM_RESEARCH.md` (6 exemplary archives, multi-platform strategy)
- Information architecture: See `INFORMATION_ARCHITECTURE.md` (11-page structure, user journeys)

## Complete Series Inventory

| Series | Count | Status | Key Works |
|--------|-------|--------|-----------|
| Malay Kampung | 20+ | ✅ Page built | By the Well, Fishing Village, Daily Chores |
| Peranakan | 10+ | ✅ Page built | Cheng Ho Comes to Nanyang, Mooncake Festival |
| Watercolour | 28+ | ✅ Assets copied | Chesstime, Laundry by River, Kampung Series (1-15) |
| Paper Cast | 10+ | ✅ Page built | By the Well (relief), Balinese Dancers |
| Bali | 10+ | 🟡 Assets copied | Little Balinese Dancer, Rama-Rama, Puteri Kipas, Suci |
| Borneo | 30+ | 🟡 Assets copied | Hornbil Dancers, Sape Melody, Evening Melodies, Fruit series |
| Sculpture | 15+ | 🟡 Assets copied | Woman Standing, Reclining Woman, Big Rooster |
| Ink & Sketch | 18+ | 🟡 Assets copied | Petaling Street, Penang Street, Malacca River |
| Bible Series | TBD | 🔴 Google Photos only | Requires Google Photos access (loheksem@gmail.com) |

## Asset Quality Upgrades

| Asset | Old | New | Improvement |
|-------|-----|-----|-------------|
| Artist Portrait | p01 (46KB) | artist,LohEkSem.JPG (1.1MB) | 24× file size, highest quality |
| Process Photos | N/A | All 8 steps (500KB-1.6MB each) | Complete documentation |
