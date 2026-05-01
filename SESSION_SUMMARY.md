# Session Summary - loheksem.com Image Sourcing & Site Review

**Date:** 2026-05-01
**Session Goal:** Source images from Google Photos/E: Drive, apply common sense review

---

## Completed Work

### 1. Sculpture Series - Curated ✅
**File:** `series-sculpture.html`

**Changes:**
- Curated gallery from 60+ images to 9 high-quality pieces
- Replaced low-quality images (<100KB) with better alternatives
- Added sculptures with cultural significance (Man with Sape, Mother and Child)
- Updated navigation to include all 8 series links
- Deployed to Netlify

**Final gallery:**
1. Woman Standing I (87cm)
2. Reclining Woman I (95cm)
3. Big Rooster (75 × 45 × 50cm)
4. Child Care - Mother and Child (78cm)
5. Just Thinking (52cm)
6. Reclining Woman Touching Hair (92cm)
7. Woman Holding Tray (82cm)
8. Man with Sape (75cm)
9. Reclining Woman with Book (95cm)
10. Mother and Child (68cm)

---

### 2. About Page - Enhanced ✅
**File:** `about.html`

**Changes:**
- Added "The Paper Cast Process" section with 8-step visual guide
- Images sourced from `PAPERcast-making/` folder
- Shows complete workflow: Drawing → Mould Making → Paper Prep → Carving → Drying → Demoulding → Coloring → Finishing
- Added CSS styling for process grid layout
- Deployed to Netlify

**Why this matters:**
- Breaks up the "long wall of text" the user mentioned
- Shows the artist's unique technique and craftsmanship
- Adds visual interest and educational value
- Uses existing assets (no external sourcing needed)

---

### 3. Documentation Created ✅

**Files:**
- `IMAGE_AUDIT.md` - Comprehensive status of all series pages
- `MISSING_IMAGES_ACTION.md` - Step-by-step instructions for sourcing missing images

---

## Items Requiring Manual Action

### CRITICAL: Ink & Sketch Series
**Problem:** `assets/Ink-Sketch/` folder is completely empty
**Current state:** All 6 gallery items use `by the well.jpg` as fallback placeholder

**Required action:**
1. Open Google Photos: https://photos.google.com/
2. Log in as loheksem@gmail.com
3. Search for: "ink", "sketch", "drawing", "Petaling Street", "Penang", "Malacca"
4. Download 6 images
5. Save to: `assets/Ink-Sketch/[filename].jpg`
6. Redeploy: `netlify deploy --prod`

**Images needed:**
- Petaling Street (50 × 70cm, Ink on paper, 2005)
- Penang Street (45 × 65cm, Ink and wash, 2006)
- Malacca River (40 × 60cm, Ink on paper, 2007)
- Kampung Baru (35 × 50cm, Pencil and ink, 2008)
- Hawker Centre (55 × 75cm, Ink on paper, 2009)
- Old Shop House (50 × 65cm, Ink on paper, 2010)

---

### CRITICAL: Bible Series
**Problem:** No Bible series images found locally
**Required action:**
1. Search Google Photos for: "bible", "scripture", "religious", "biblical"
2. Download images
3. Create `assets/Bible/` folder
4. Create `series-bible.html` (copy structure from other series pages)

---

### MEDIUM: Exhibitions Page
**Problem:** Exhibitions page lacks visual content
**Required action:**
1. Search Google Photos for: "exhibition", "opening", "gallery", "newspaper"
2. Download photos and clippings
3. Add to exhibitions page gallery section

---

## Parallax Effect - Status: INCONCLUSIVE

Per user request, parallax is marked as inconclusive. Current implementation:
- 3-layer parallax (foreground 0.3x, content 1x, backdrop 1.5x)
- Opacity set to 0.08-0.1 for subtle effect
- Full-width images (100%) with centered positioning
- Filter: grayscale(0.3) sepia(0.15)

**User feedback:** "The feature works, the aesthetics don't"
**Resolution:** Focus shifted to image sourcing first; parallax to be revisited later

---

## Site Inventory Summary

| Series | Status | Images | Notes |
|--------|--------|--------|-------|
| Malay Kampung | ✅ Complete | 2 | By the Well, Fishing Village |
| Peranakan | ✅ Complete | 2 | Cheng Ho, Mooncake Festival |
| Bali | ✅ Complete | 7 | Little Balinese Dancer, Rama-Rama, etc. |
| Borneo | ✅ Complete | 50+ | Hornbill Dancers, Sape Melody, etc. |
| Watercolour | ✅ Complete | 20+ | Full collection |
| Paper Cast | ✅ Complete | 10+ | Full collection |
| Sculpture | ✅ Curated | 9 (from 60+) | High-quality selection |
| Ink & Sketch | ❌ Missing | 0 | **Needs Google Photos download** |
| Bible Series | ❌ Missing | 0 | **Needs Google Photos download** |
| About Page | ✅ Enhanced | 9 (1 portrait + 8 process) | Process section added |
| Exhibitions | ⚠️ Incomplete | TBD | Needs photos/clippings |

---

## Deploy Status

**Latest deploy:** https://unrivaled-taiyaki-149ad4.netlify.app
- Sculpture page: Updated with curated gallery
- About page: Updated with process section
- All navigation: Consistent across all pages

---

## Recommendations for Next Session

1. **Download Ink & Sketch images from Google Photos** - This is the highest priority since the page currently shows placeholder images
2. **Download Bible series images** - Create the series page
3. **Add exhibition photos** - Complete the exhibitions page
4. **Revisit parallax** - Once images are sourced, review parallax aesthetics with fresh eyes

---

## Files Modified

1. `series-sculpture.html` - Curated gallery, updated navigation
2. `about.html` - Added process section with 8 images
3. `IMAGE_AUDIT.md` - Comprehensive status tracking
4. `MISSING_IMAGES_ACTION.md` - Instructions for manual sourcing
