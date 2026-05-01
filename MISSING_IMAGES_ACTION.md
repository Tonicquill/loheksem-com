# Missing Images - Action Required

**Date:** 2026-05-01
**Status:** Requires manual sourcing from Google Photos or physical artwork

---

## Ink & Sketch Series - CRITICAL

**Problem:** The `assets/Ink-Sketch/` folder is completely empty. All 6 gallery items currently use `by the well.jpg` as a fallback placeholder.

**Images needed:**
1. Petaling Street - urban market scene (50 × 70cm, Ink on paper, 2005)
2. Penang Street - George Town heritage (45 × 65cm, Ink and wash, 2006)
3. Malacca River - historic riverfront (40 × 60cm, Ink on paper, 2007)
4. Kampung Baru - Malay settlement (35 × 50cm, Pencil and ink, 2008)
5. Hawker Centre - night market (55 × 75cm, Ink on paper, 2009)
6. Old Shop House - colonial architecture (50 × 65cm, Ink on paper, 2010)

**Solution options:**

### Option A: Download from Google Photos (Recommended)
1. Open Google Photos in browser: https://photos.google.com/
2. Log in as loheksem@gmail.com
3. Search for: "ink", "sketch", "drawing", "Petaling Street", "Penang", "Malacca"
4. Download relevant images
5. Save to: `assets/Ink-Sketch/[filename].jpg`
6. Update series-ink-sketch.html if filenames differ

### Option B: Photograph Physical Artwork
If the artwork exists physically but not digitally:
1. Photograph or scan each piece at high resolution (300 DPI minimum)
2. Ensure even lighting, no shadows
3. Save as JPG at 85%+ quality
4. Name files descriptively (e.g., `Petaling Street.jpg`)
5. Save to: `assets/Ink-Sketch/`

### Option C: Use Existing Artwork as Placeholder
If no Ink & Sketch artwork exists, consider:
- Using the pencil drawing from `PAPERcast-making/pencil drawing.JPG`
- Re-labeling the series as "Urban Sketches" and using appropriate placeholders
- Temporarily hiding the series page until artwork is available

---

## Bible Series - CRITICAL

**Problem:** No Bible series images found anywhere locally.

**Required:**
- Bible-themed paintings (quantity unknown)
- Search Google Photos for: "bible", "scripture", "religious", "biblical", "mary", "jesus"

**Solution:** Same as Ink & Sketch - requires manual download from Google Photos

---

## About Page - MEDIUM PRIORITY

**Current:** Single artist portrait (`portrait_about.png`)

**Recommended additions:**
1. Artist at work in studio
2. Artist with finished artwork
3. Historical/behind-the-scenes photos
4. Exhibition installation shots

**Available assets:**
- `loheksem_staging/crops/p01_portrait_loh_ek_sem.jpg` - additional portrait
- `loheksem_staging/crops/p06_portrait_loh_ek_sem.jpg` - additional portrait
- `loheksem_staging/crops/artist,LohEkSem.JPG` - artist photo

**Process images available (from PAPERcast-making/):**
- `pencil drawing.JPG` - artist's drawing process
- `carving on wood block.JPG` - mould making process
- `mashed paper laying.JPG` - paper preparation
- `mould making.JPG` - mould creation
- `drying.JPG` - drying process
- `detatch mould.JPG` - removing from mould
- `colouring 1.JPG`, `colouring 2.JPG` - finishing/coloring

These process images could be used to show "How It's Made" on the About page.

---

## Exhibitions Page - MEDIUM PRIORITY

**Required:**
- Exhibition opening photos
- Gallery installation shots
- Newspaper clippings/reviews
- Event documentation

**Search terms for Google Photos:**
- "exhibition"
- "opening"
- "gallery"
- "newspaper"
- "article"
- "review"

---

## Sculpture Series - COMPLETED

**Action taken:** Curated from 60+ images to 9 high-quality pieces:
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

**Excluded:** Low-quality images (<100KB files)

---

## Next Steps

1. **Immediate:** Manually download Ink & Sketch images from Google Photos
2. **Immediate:** Manually download Bible series images from Google Photos
3. **High priority:** Add process images to About page
4. **Medium priority:** Source exhibition/newspaper photos
5. **Deploy:** Run `netlify deploy --prod` after adding images

---

## File Locations

- Deploy folder: `C:\Users\User\Downloads\loheksem_wordpress\loheksem_deploy\`
- Ink & Sketch: `assets/Ink-Sketch/` (currently empty)
- Sculpture: `assets/Sculpture/` (60+ files, curated)
- Process images: `PAPERcast-making/` (8 files)
- Portraits: `loheksem_staging/crops/` (3 files)
