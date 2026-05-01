# Information Architecture — Loh Ek Sem Art Archive

**Created:** 2026-05-01  
**Model:** NYU Knowledge Base (wiki-like cultural context) + Laura Lit (multi-category portfolio)

---

## 1. Site Structure (7 Pages)

### Primary Navigation
```
Home | About | Series ▼ | Exhibitions | Contact
```

**Series Dropdown:**
- Malay Kampung
- Peranakan
- Watercolour
- Paper Cast
- Bali
- Borneo
- Sculpture
- Ink & Sketch

### Page Hierarchy

```
/ (Home)
├── /about.html
├── /series-malay-kampung.html
├── /series-peranakan.html
├── /series-watercolour.html
├── /series-paper-cast.html
├── /series-bali.html
├── /series-borneo.html
├── /series-sculpture.html
├── /series-ink-sketch.html
├── /exhibitions.html
└── /contact.html
```

---

## 2. Page Specifications

### Page 1: Home (`index.html`)
**Purpose:** Orientation, highlights, navigation entry point  
**User Goal:** "What is this site? What will I find here?"  
**Success Metric:** Click-through to series pages

**Sections (top to bottom):**
1. **Hero A** — Artist portrait + signature artwork (asymmetric 3-column: Text | Portrait | Artwork)
2. **Featured Series** — 4 cards (Malay Kampung, Peranakan, Watercolour, Paper Cast)
3. **Process Highlight** — Paper Cast making-of teaser (6 process thumbnails in horizontal scroll)
4. **Exhibition Spotlight** — 3 recent exhibitions with dates
5. **Footer** — Signature, contact, social links

**Content Requirements:**
- Artist portrait: `loheksem_staging/crops/p01_portrait_loh_ek_sem.jpg`
- Hero artwork: `Fishing village [122x186cm] acrylic.JPG`
- 4 series preview images (one per series)
- 6 process photos (for horizontal scroll teaser)

---

### Page 2: About (`about.html`)
**Purpose:** Artist biography, statement, portrait  
**User Goal:** "Who is Loh Ek Sem? What drives his work?"  
**Success Metric:** Time on page, scroll depth to biography

**Sections:**
1. **Hero** — Full-width artist portrait with name overlay
2. **Biography** — Chronological narrative (b.1956, advertising career, 1994 pivot to fine art, exhibitions)
3. **Artist Statement** — Pull quotes from interviews
4. **Timeline** — Key dates with visual markers
5. **Signature** — Scanned signature image

**Content Requirements:**
- High-res portrait (same as Hero A)
- Biography text (~500 words)
- 3-4 artist statement quotes
- Timeline data (5-7 key dates)

---

### Page 3: Malay Kampung Series (`series-malay-kampung.html`)
**Purpose:** Deep dive into flagship series  
**User Goal:** "What is this series about? What artworks exist?"  
**Success Metric:** Gallery engagement, individual artwork views

**Sections:**
1. **Hero** — Large-scale kampung scene (full-width)
2. **Series Introduction** — Cultural context (kampung life, vanishing culture, documentation mission)
3. **Gallery** — Masonry grid (10-15 selected works)
4. **Cultural Notes** — Explainer section (kampung architecture terms, community life)
5. **Navigation** — Links to other series

**Gallery Item Template:**
```
- Image (WebP, max 2000px)
- Title (e.g., "By the Well")
- Dimensions (e.g., "82 x 110 cm")
- Medium (e.g., "Acrylic on canvas")
- Year (e.g., "1995")
- Story (1-2 sentences about the scene)
```

**Content Requirements:**
- 10-15 artwork images from E: drive
- Series intro text (~200 words)
- Cultural context notes (5-7 terms: attap roof, kampung house, etc.)

---

### Page 4: Peranakan Series (`series-peranakan.html`)
**Purpose:** Nyonya heritage documentation  
**User Goal:** "What is Peranakan culture? How does Sem depict it?"  
**Success Metric:** Gallery engagement, cultural note reads

**Sections:**
1. **Hero** — Cheng Ho or Mooncake Festival (large-scale)
2. **Series Introduction** — Peranakan history, Sem's connection
3. **Gallery** — Masonry grid (10-15 works)
4. **Cultural Notes** — Peranakan traditions depicted (clothing, festivals, food)
5. **Navigation** — Links to other series

**Content Requirements:**
- 10-15 artwork images
- Series intro (~200 words)
- Cultural notes (5-7 terms: Nyonya, Baba, Peranakan wedding, etc.)

---

### Page 5: Watercolour Studies (`series-watercolour.html`)
**Purpose:** Intimate works, technical showcase  
**User Goal:** "Why watercolour? What makes these works special?"  
**Success Metric:** Gallery engagement, technique note reads

**Sections:**
1. **Hero** — Chesstime or Laundry by River (intimate scale)
2. **Series Introduction** — Why watercolour matters (portability, spontaneity)
3. **Gallery** — Masonry grid (8-12 works)
4. **Technique Notes** — Watercolour vs. acrylic/oil (transparency, layering)
5. **Navigation** — Links to other series

**Content Requirements:**
- 8-12 artwork images (including Chesstime)
- Series intro (~150 words)
- Technique notes (~100 words)

---

### Page 6: Paper Cast Sculptures (`series-paper-cast.html`)
**Purpose:** Technical innovation showcase  
**User Goal:** "How does paper casting work? What does it achieve?"  
**Success Metric:** Process step engagement, gallery views

**Sections:**
1. **Hero** — Finished paper cast work (e.g., "By the Well [25x30cm]")
2. **Introduction** — Why paper casting is unique (invented technique, sustainability)
3. **Full 7-Step Process** — Horizontal scroll with captions:
   - Step 1: Pencil drawing (reference sketch)
   - Step 2: Carving wood block (creating mould base)
   - Step 3: Mould making (silicone/rubber layer)
   - Step 4: Mashed paper laying (recycled paper pulp)
   - Step 5: Drying (air-dry or kiln)
   - Step 6: Detach mould (revealing cast)
   - Step 7: Colouring (hand-painting details)
4. **Gallery** — Finished paper cast works (5-8 pieces)
5. **Comparison** — Paper cast vs. painting of same subject (side-by-side)
6. **Navigation** — Links to other series

**Content Requirements:**
- All 7 process photos (now sourced)
- 5-8 finished paper cast images
- Process intro (~200 words)
- Comparison images (painting + paper cast pair)

---

### Page 7: Exhibitions (`exhibitions.html`)
**Purpose:** Verified exhibition history  
**User Goal:** "Where has Sem exhibited? What's his career trajectory?"  
**Success Metric:** Timeline engagement, press link clicks

**Sections:**
1. **Introduction** — Scope of career (1995-present, 5+ verified exhibitions)
2. **Timeline** — Chronological list with venue, location, type, notes
3. **Press Coverage** — Publications, authors, dates, excerpts
4. **Collections** — Institutions holding work (Penang State Museum, etc.)
5. **Navigation** — Links to other pages

**Timeline Template:**
```
- Year (e.g., "1995")
- Exhibition Name (e.g., "Rural Harmony")
- Venue (e.g., "National Art Gallery")
- Location (e.g., "Kuala Lumpur")
- Type (e.g., "Group exhibition")
- Notes (e.g., "First major exhibition")
```

**Content Requirements:**
- 5 verified exhibitions (from exhibition_history_verified.md)
- Press coverage details (3-5 publications)
- Collections info (1-2 institutions)

---

### Page 8: Contact (`contact.html`)
**Purpose:** Inquiry mechanism  
**User Goal:** "How do I contact Sem? Where is he based?"  
**Success Metric:** Form submissions, email clicks

**Sections:**
1. **Contact Information** — Email (loheksem@gmail.com), location (Johor Bahru, Malaysia)
2. **Simple Form** — Name, email, message (Netlify Forms backend)
3. **Social Links** — Instagram, Pinterest (if applicable)
4. **Navigation** — Links to other pages

**Form Fields:**
- Name (required)
- Email (required)
- Message (required, textarea)
- Subject (dropdown: Inquiry, Commission, Press, Other)

**Content Requirements:**
- Email address
- Location (city, country)
- Social handles (if available)

---

## 3. Navigation Hierarchy

### Global Navigation (All Pages)
```
[Logo: Signature]  Home  About  Malay Kampung  Peranakan  Watercolour  Paper Cast  Exhibitions  Contact
```

**Behavior:**
- Fixed position (sticky header)
- Logo links to Home
- Active page highlighted
- Mobile: Hamburger menu

---

### Footer Navigation (All Pages)
```
[Signature]  © 2026 Loh Ek Sem. All rights reserved.
Email: loheksem@gmail.com | Johor Bahru, Malaysia
[Instagram icon] [Pinterest icon] [X icon]
```

---

## 4. URL Structure

| Page | URL | Canonical |
|------|-----|-----------|
| Home | `/` | `https://loheksem.com/` |
| About | `/about.html` | `https://loheksem.com/about.html` |
| Malay Kampung | `/series-malay-kampung.html` | `https://loheksem.com/series-malay-kampung.html` |
| Peranakan | `/series-peranakan.html` | `https://loheksem.com/series-peranakan.html` |
| Watercolour | `/series-watercolour.html` | `https://loheksem.com/series-watercolour.html` |
| Paper Cast | `/series-paper-cast.html` | `https://loheksem.com/series-paper-cast.html` |
| Exhibitions | `/exhibitions.html` | `https://loheksem.com/exhibitions.html` |
| Contact | `/contact.html` | `https://loheksem.com/contact.html` |

**Note:** `.html` extension for Netlify static hosting compatibility (no server-side routing needed)

---

## 5. User Journey Maps

### Persona 1: The Collector
**Goal:** Evaluate artwork for acquisition  
**Path:** Home → Series page → Individual artwork → Contact (inquiry)  
**Needs:** High-quality images, dimensions, pricing (if available), provenance

**Touchpoints:**
1. Lands on Home (evaluates aesthetic fit)
2. Clicks series of interest (evaluates body of work)
3. Scrolls gallery (looks for specific pieces)
4. Reads artwork details (dimensions, medium, year)
5. Clicks Contact (sends inquiry)

**Success Signals:**
- Time on gallery page > 60s
- Clicks to 3+ artwork details
- Form submission or email click

---

### Persona 2: The Researcher
**Goal:** Gather information for academic/cultural research  
**Path:** Home → About → Exhibitions → Series pages → Cultural notes  
**Needs:** Verified biography, exhibition history, cultural context, press coverage

**Touchpoints:**
1. Lands on Home (initial orientation)
2. Clicks About (reads biography)
3. Clicks Exhibitions (verifies career timeline)
4. Browses series pages (studies cultural documentation)
5. Reads cultural notes (understands context)

**Success Signals:**
- Time on site > 3 min
- Visits 4+ pages
- Scrolls to bottom of About/Exhibitions

---

### Persona 3: The General Public
**Goal:** Casual exploration, aesthetic appreciation  
**Path:** Home → Series pages (browse) → Process highlight → Exit  
**Needs:** Visual engagement, easy navigation, cultural education

**Touchpoints:**
1. Lands on Home (visual first impression)
2. Scrolls Featured Series (browses thumbnails)
3. Clicks series that catches eye (explores gallery)
4. Notices process section (learns technique)
5. Exits or shares (social media, word of mouth)

**Success Signals:**
- Time on site > 90s
- Visits 2+ series pages
- Social share or return visit

---

## 6. Content Relationships

### Cross-Linking Strategy

```
Home
├── Links to all 4 series pages
├── Links to Exhibitions
└── Links to About

About
├── Links to all series pages (artist's body of work)
└── Links to Exhibitions (career timeline)

Series Pages (each)
├── Links to other 3 series pages
├── Links to About (artist context)
└── Links to Home (return path)

Exhibitions
├── Links to relevant series pages (exhibited works)
├── Links to About (artist context)
└── Links to Contact (inquiry)

Contact
├── Links to About (artist context)
└── Links to Home (return path)
```

---

## 7. Mobile-First Considerations

### Breakpoints
```
Mobile: 320px - 767px (single column)
Tablet: 768px - 1023px (2-column grid)
Desktop: 1024px+ (3-column asymmetric)
```

### Mobile Navigation
- Hamburger menu (top right)
- Full-screen overlay on open
- Large tap targets (44px minimum)

### Mobile Gallery
- Single-column masonry
- Lazy loading (below fold images)
- Touch-friendly swipe navigation

### Mobile Process Section
- Horizontal scroll (swipe left/right)
- Step indicators (dots or numbers)
- Tap to expand (full-screen modal)

---

## 8. SEO Structure

### Page Titles (60 chars max)
```
Home: Loh Ek Sem | Malaysian Artist | Kampung Life Documentarian
About: About Loh Ek Sem | Artist Biography | Malay Kampung Painter
Malay Kampung: Malay Kampung Series | Vanishing Culture Archive | Loh Ek Sem
Peranakan: Peranakan Series | Nyonya Heritage Art | Loh Ek Sem
Watercolour: Watercolour Studies | Intimate Paintings | Loh Ek Sem
Paper Cast: Paper Cast Sculptures | Innovative Technique | Loh Ek Sem
Exhibitions: Exhibition History | Career Timeline | Loh Ek Sem
Contact: Contact Loh Ek Sem | Art Inquiries | Johor Bahru
```

### Meta Descriptions (155 chars max)
```
Home: Archive of 30+ years documenting vanishing Malay kampung culture and Peranakan heritage through painting and paper cast sculpture by artist Loh Ek Sem.

About: Biography of Loh Ek Sem (b.1956), Malaysian fine artist known for documenting kampung life and inventing paper cast sculpture technique.

[Continue for each page...]
```

### Heading Hierarchy
```
Home:
  H1: Loh Ek Sem Art Archive
  H2: Featured Series
  H2: Process Highlight
  H2: Exhibition Spotlight

Series Pages:
  H1: [Series Name]
  H2: About This Series
  H2: Gallery
  H2: Cultural Notes

[Continue for each page...]
```

---

## 9. Schema Markup

### VisualArtist Schema (All Pages)
```json
{
  "@context": "https://schema.org",
  "@type": "VisualArtist",
  "name": "Loh Ek Sem",
  "description": "Malaysian fine artist documenting vanishing kampung life and Peranakan heritage",
  "birthDate": "1956",
  "birthPlace": "Malaysia",
  "knowsAbout": ["Kampung culture", "Peranakan heritage", "Paper casting", "Watercolour", "Acrylic painting"],
  "email": "loheksem@gmail.com",
  "location": "Johor Bahru, Malaysia"
}
```

### Artwork Schema (Series Pages)
```json
{
  "@context": "https://schema.org",
  "@type": "Painting",
  "name": "By the Well",
  "artist": "Loh Ek Sem",
  "dateCreated": "1995",
  "artMedium": "Acrylic on canvas",
  "artform": "Painting",
  "size": "82 x 110 cm"
}
```

---

## 10. Next Steps

1. **Build Home page** — Implement asymmetric hero, featured series, process teaser
2. **Build About page** — Biography, timeline, signature
3. **Build Series pages** — Template once, replicate 4x with series-specific content
4. **Build Exhibitions page** — Timeline, press, collections
5. **Build Contact page** — Form, email, social links
6. **QA + Deploy** — Test all pages, verify images, check mobile responsiveness

---

**Implementation Notes:**
- Use CSS variables for consistent theming across pages
- Reuse navigation component (copy/paste with active state adjustment)
- Masonry grid: CSS Grid + `grid-template-rows: masonry` (progressive enhancement)
- Lazy loading: `loading="lazy"` for below-fold images
- Schema markup: JSON-LD in `<head>` for SEO
