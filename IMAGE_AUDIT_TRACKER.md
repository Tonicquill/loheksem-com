# Comprehensive Image Audit Tracker

**Created:** 2026-05-02  
**Scope:** E:/Local Disk/Mapa PC (all subdirectories)  
**Total Images Found:** 5000+ JPG files  
**Goal:** Vision-based sweep to categorize, deduplicate, and organize by series

---

## Directory Structure Overview

### Primary Folders (Relevant to Art Archive)

| Folder | Priority | Contents | Status |
|--------|----------|----------|--------|
| `Back Up/` | 🔴 HIGH | Main archive - all series | In Progress |
| `Candid/` | 🔴 HIGH | Event photos, Pinology, JCI | In Progress |
| `NEW/` | 🟡 MEDIUM | Newer works | Pending |
| `My Documents/` | 🟡 MEDIUM | Mixed storage | Pending |
| `Bryan's- phn pix&videosguitar/` | 🟢 LOW | Personal/family | Skip |
| `Phn picsBRY&videos/` | 🟢 LOW | Phone pics | Skip |
| `Videos/` | 🟢 LOW | Video files | Skip |
| `*_files/` folders | 🟢 LOW | Web cache files | Skip |

---

## Back Up/ Subfolder Inventory

| Subfolder | Type | Image Count | Status |
|-----------|------|-------------|--------|
| `+NewPAPERCAST/` | Paper Cast | TBD | ⏳ Pending |
| `+PAPERcast/` | Paper Cast | TBD | ⏳ Pending |
| `+Painting2010updated compilation/` | Paintings | TBD | ⏳ Pending |
| `+Sculptures/` | Sculpture | TBD | ⏳ Pending |
| `=CHINpainting/` | Paintings | TBD | ⏳ Pending |
| `=Candid/` | Events | TBD | ⏳ Pending |
| `=Furniture/` | Furniture | TBD | ⏳ Pending |
| `=GARDEN/` | Garden/Garden features | TBD | ⏳ Pending |
| `=REFERENCE/` | Reference photos | TBD | ⏳ Pending |
| `=SEM folio pix comp regent S'pore/` | Exhibition | TBD | ⏳ Pending |
| `ART VIL ACTIVITIES/` | Events | TBD | ⏳ Pending |
| `Channel NewsAsia CD 2005/` | Press | TBD | ⏳ Pending |
| `Compilation of Yayasan Khidmat Bakti May 2010/` | **KEY** - All series | ~500 | ✅ Audited |
| `Illustration/` | Illustrations | TBD | ⏳ Pending |
| `Loh Ek Sem data/` | Mixed | TBD | ⏳ Pending |
| `Newly trasfered pics/` | Mixed | TBD | ⏳ Pending |
| `PAPERcast-making/` | Process | 8 | ✅ Copied |
| `Peranakan Paintings HI RESOLU/` | Peranakan | TBD | ⏳ Pending |
| `Peranakan the Heritage compilation/` | Conceptual docs | 26 Word | 📚 Docs |
| `Peranakan the heritage WaterColour compilation/` | Conceptual | 46 Word | 📚 Docs |
| `Web Painting/` | Paintings | TBD | ⏳ Pending |
| `Web Sculptures/` | Sculptures | TBD | ⏳ Pending |

---

## Candid/ Subfolder Inventory

| Subfolder | Type | Image Count | Status |
|-----------|------|-------------|--------|
| `Camerapix 2010/` | Events (JCI, Pinology) | ~50 | ⏳ In Progress |

---

## Known Duplicate Sets (To Deduplicate by File Size)

### Peranakan Series
| Filename Pattern | Locations Found | Best Version |
|------------------|-----------------|--------------|
| `09ChengHo comes to Nanyang*` | Back Up/, Back Up/Compilation of Yayasan... | Yayasan (highest res) |
| `09Mooncake Festival*` | Back Up/, Back Up/Compilation of Yayasan... | Yayasan |
| `The Heritage*` | Back Up/, Back Up/Compilation of Yayasan... | Yayasan (18'x20') |

### Furniture Series
| Filename Pattern | Locations Found | Best Version |
|------------------|-----------------|--------------|
| `furniture*.JPG` | Back Up/=Furniture/, Back Up/Compilation of Yayasan... | Yayasan |
| `easle.JPG` | Back Up/=Furniture/, Back Up/Compilation of Yayasan... | Yayasan |

### Ink & Sketch
| Filename Pattern | Locations Found | Best Version |
|------------------|-----------------|--------------|
| `Malacca river*.JPG` | Back Up/=Candid/, Candid/, Candid/Camerapix 2010/ | TBD (check sizes) |
| `jci*.JPG` | Candid/Camerapix 2010/ | Camerapix 2010 |

---

## Pinology/JCI Event Images (Malaysian Book of Records)

**Location:** `E:/Local Disk/Mapa PC/Candid/Camerapix 2010/`

| File | Size | Description | Keep |
|------|------|-------------|------|
| `jci foon yew.JPG` | 1.5MB | JCI Foon Yew event | ✅ |
| `jci foon yew1.JPG` | 1.5MB | JCI Foon Yew event | ✅ |
| `jci foon yew2.JPG` | 1.5MB | JCI Foon Yew event | ✅ |
| `jci*.JPG` (27 files) | Various | JCI event photos | ⏳ Review |

**Action:** Create `assets/Pinology/` folder with curated selection

---

## Deduplication Rules

1. **Always keep highest file size** (best quality)
2. **Prefer organized folders** (Compilation of Yayasan Khidmat Bakti has metadata)
3. **Skip `_files/` folders** (web cache thumbnails)
4. **Skip phone pics** unless historically significant

---

## Action Items

### Completed
- [x] Copy PAPERcast-making process photos (8 steps)
- [x] Copy Furniture images from Yayasan compilation
- [x] Copy Ink & Sketch images from Yayasan compilation
- [x] Create Pinology folder with JCI images
- [x] Archive .netlify folder

### In Progress
- [ ] Visual audit of Back Up/ subfolders
- [ ] Identify all Pinology/Book of Records images
- [ ] Sort duplicates by file size

### Pending
- [ ] Audit `NEW/` folder
- [ ] Audit `My Documents/` folder
- [ ] Create organized folder structure:
  - `assets/Peranakan/` (add missing paintings)
  - `assets/Pinology/` (curate best shots)
  - `assets/Garden/` (pond, garden features)
  - `assets/Events/` (exhibitions, openings)

---

## Notes

- **Yayasan Khidmat Bakti May 2010** compilation is the GOLD STANDARD - has embedded metadata (dimensions, medium, SOLD status)
- **Peranakan watercolour compilation** docs are conceptual/educational - NOT for sale items
- **Pinology pin art** installation got Malaysian Book of Records - needs prominent placement

---

**Last Updated:** 2026-05-02  
**Next Audit Session:** Continue with Back Up/ subfolders
