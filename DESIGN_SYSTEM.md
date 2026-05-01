# Design System — Loh Ek Sem Art Archive

**Version:** 1.0  
**Created:** 2026-05-01  
**Based on:** BRAND_STRATEGY.md, INFORMATION_ARCHITECTURE.md, PLATFORM_RESEARCH.md

---

## 1. Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Ink Black | `#000000` | Text, borders, footers, primary UI |
| Paper White | `#ffffff` | Backgrounds, negative space |
| Charcoal | `#1a1a1a` | Secondary text, dark backgrounds |
| Warm Gray | `#f5f3f0` | Section backgrounds, cards |

### Accent Colors
| Name | Hex | Usage |
|------|-----|-------|
| Terracotta | `#b85c38` | Primary accent, labels, highlights |
| Clay | `#c9a97e` | Secondary accent, process section, warm highlights |

### Series-Specific Colors
| Name | Hex | Usage |
|------|-----|-------|
| Kampung Green | `#5a7a4a` | Malay Kampung Series pages |
| River Blue | `#4a6b7a` | Watercolour Series pages |
| Attap Brown | `#5c4a3a` | Paper Cast Series pages |
| Nyonya Pink | `#d4a5b5` | Peranakan Series pages |

### Usage Ratio
- **60%** Paper White (backgrounds, negative space)
- **30%** Ink Black/Charcoal (text, structure)
- **5%** Terracotta/Clay (accents, highlights)
- **5%** Series-specific (contextual emphasis)

---

## 2. Typography

### Font Stack
```css
/* Display (H1, H2, H3) */
--font-display: 'Georgia', serif;

/* Body Text */
--font-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Technical Details (dimensions, dates) */
--font-mono: 'JetBrains Mono', 'Courier New', monospace;
```

### Type Scale
| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| H1 | clamp(2.5rem, 5vw, 4rem) | 500 | 1.1 | -0.02em |
| H2 | clamp(1.8rem, 4vw, 2.5rem) | 500 | 1.2 | -0.01em |
| H3 | clamp(1.2rem, 2vw, 1.5rem) | 600 | 1.3 | 0.08em |
| H4 | 1.1rem | 600 | 1.4 | 0 |
| Body | 1.05rem | 400 | 1.8 | 0 |
| Small | 0.85rem | 400 | 1.6 | 0 |
| Caption | 0.7rem | 400 | 1.5 | 0.1em |
| Label | 0.7rem | 400 | 1.4 | 0.25em |
| Mono (dimensions) | 0.8rem | 400 | 1.4 | 0 |

### Typography Principles
- **Georgia** for display: evokes print tradition, archival quality
- **System fonts** for body: instant load, performance priority
- **Mono** for technical details: signals precision (dimensions, years)
- **Generous line-height** (1.8) for readability
- **Tight letter-spacing** on headings (-0.02em) for cohesion

---

## 3. Spacing & Layout

### Container Max Widths
```css
--container-max: 1400px;    /* Full-width sections */
--container-narrow: 800px;  /* Text content */
--container-med: 1200px;    /* Standard sections */
```

### Spacing Scale (8px Grid)
| Token | Value | Usage |
|-------|-------|-------|
| --space-1 | 0.5rem (8px) | Tight gaps |
| --space-2 | 1rem (16px) | Standard gaps |
| --space-3 | 1.5rem (24px) | Card padding |
| --space-4 | 2rem (32px) | Section padding |
| --space-5 | 3rem (48px) | Large gaps |
| --space-6 | 4rem (64px) | Section vertical |
| --space-8 | 6rem (96px) | Major divisions |

### Layout Principles
- **Asymmetric grids**: Non-center bias, 3-column layouts (DESIGN_VARIANCE=8)
- **Generous whitespace**: Art gallery mode (VISUAL_DENSITY=4)
- **Mobile-first**: Single column <768px, 2-column 768-1024px, 3-column >1024px
- **Consistent rhythm**: 6rem (96px) vertical section spacing

---

## 4. Component Library

### Navigation
```css
nav {
  position: fixed;
  height: 80px;
  background: var(--paper);
  border-bottom: 1px solid rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}
```

**Elements:**
- Logo: Signature image (35px height) + wordmark
- Links: 0.75rem uppercase, letter-spacing 0.1em
- Active state: Terracotta color + underline
- Mobile: Hamburger menu with full-screen overlay

---

### Hero Section (Variation A: Asymmetric)
```css
.hero {
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
  gap: 2rem;
  min-height: 100dvh;
  padding: calc(80px + 4rem) 3rem 4rem;
}
```

**Three Columns:**
1. **Text**: Label + H1 + tagline + signature
2. **Portrait**: 3:4 aspect, bordered, shadow offset
3. **Artwork**: 3:4 aspect, bordered, caption overlay

**Backdrop:** Absolute positioned, opacity 0.08, grayscale+sepia filter

---

### Series Cards
```css
.series-card {
  cursor: pointer;
}

.series-card-image {
  aspect-ratio: 4/3;
  border: 1px solid rgba(0,0,0,0.12);
  overflow: hidden;
  transition: border-color 0.3s;
}

.series-card:hover .series-card-image {
  border-color: var(--ink);
}

.series-card:hover .series-card-image img {
  transform: scale(1.04);
}
```

**Structure:**
- Image (4:3 aspect)
- Title (uppercase, 1rem)
- Medium (small text)
- Meta row: count + "Explore →" link

---

### Process Step Cards
```css
.process-step {
  flex: 0 0 280px;
  background: var(--paper);
  padding: 1.25rem;
}

.process-step img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
}

.process-step-number {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--terracotta);
  font-family: var(--font-mono);
}
```

**Layout:** Horizontal scroll with snap points

---

### Timeline Items
```css
.timeline {
  border-left: 2px solid var(--ink);
  padding-left: 2rem;
}

.timeline-item::before {
  content: '';
  width: 12px;
  height: 12px;
  background: var(--paper);
  border: 2px solid var(--terracotta);
  border-radius: 50%;
  left: -2.35rem;
}
```

**Structure:**
- Year (mono font, terracotta)
- Title (display font)
- Description (body text)

---

### Buttons & Links
```css
/* Primary Link */
a.cta {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  border: 1px solid var(--clay);
  padding: 0.75rem 1.5rem;
  color: var(--clay);
  transition: all 0.3s var(--ease-fluid);
}

a.cta:hover {
  background: var(--clay);
  color: var(--charcoal);
}

/* Text Link */
a.text {
  border-bottom: 1px solid var(--ink);
  padding-bottom: 0.25rem;
  transition: all 0.3s;
}

a.text:hover {
  color: var(--terracotta);
  border-color: var(--terracotta);
}
```

---

## 5. Motion & Animation

### Easing Functions
```css
--ease-fluid: cubic-bezier(0.16, 1, 0.3, 1);
--ease-out: cubic-bezier(0.25, 1, 0.5, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

### Transition Durations
| Token | Value | Usage |
|-------|-------|-------|
| --transition-fast | 0.3s | Hover states, color changes |
| --transition-med | 0.5s | Transform, layout shifts |
| --transition-slow | 0.8s | Fade-in animations |

### Hover States
```css
/* Cards */
.card:hover {
  transform: translateY(-4px);
  border-color: var(--ink);
}

/* Images */
.card:hover img {
  transform: scale(1.04);
}

/* Buttons */
.btn:hover {
  transform: scale(0.98); /* Tactile feedback */
}
```

### Staggered Children Animation
```css
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s var(--ease-fluid),
              transform 0.6s var(--ease-fluid);
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.stagger-1 { transition-delay: 0.1s; }
.stagger-2 { transition-delay: 0.2s; }
.stagger-3 { transition-delay: 0.3s; }
.stagger-4 { transition-delay: 0.4s; }
```

**Principles:**
- No linear easing (always cubic-bezier)
- 100ms delay cascade for children
- Fade-in on scroll (IntersectionObserver)
- Respect `prefers-reduced-motion`

---

## 6. Imagery Guidelines

### Formats
- **WebP/AVIF**: Primary format (80% smaller than JPEG)
- **JPEG**: Fallback for older browsers
- **PNG**: Only for transparency (signature, logos)

### Quality Settings
| Type | Max Width | Compression | Target Size |
|------|-----------|-------------|-------------|
| Hero | 2000px | 80% | <500KB |
| Gallery | 1600px | 80% | <300KB |
| Thumbnails | 400px | 75% | <50KB |
| Process | 800px | 80% | <150KB |

### Aspect Ratios
| Use Case | Ratio | Notes |
|----------|-------|-------|
| Hero portrait | 3:4 | Artist photo |
| Hero artwork | 3:4 | Featured piece |
| Series card | 4:3 | Preview images |
| Process step | 1:1 | Square documentation |
| Pinterest pin | 2:3 | Vertical format |

### Filters
```css
/* Backdrop images */
.hero-backdrop img {
  filter: grayscale(0.2) sepia(0.1);
  opacity: 0.08;
}

/* Process images */
.process-step img {
  filter: contrast(1.05);
}

/* Artwork frames */
.hero-artwork img {
  filter: contrast(1.02) saturate(1.02);
}
```

---

## 7. Responsive Breakpoints

```css
/* Mobile First */
@media (max-width: 640px) {
  /* Single column, hamburger nav */
}

@media (max-width: 768px) {
  /* 2-column grids */
}

@media (max-width: 1024px) {
  /* 3-column grids, full nav */
}

@media (min-width: 1400px) {
  /* Container max width applied */
}
```

### Mobile Patterns
- **Navigation**: Hamburger menu, full-screen overlay
- **Hero**: Stacked columns, centered text
- **Grids**: Single column (1fr)
- **Process**: Horizontal scroll (snap points)
- **Timeline**: Reduced padding, smaller dots

---

## 8. Accessibility

### Color Contrast
- **Text on white**: Minimum WCAG AA (4.5:1 for body, 3:1 for large)
- **Text on black**: White/light gray only
- **Interactive elements**: Visible focus states

### Focus States
```css
a:focus,
button:focus {
  outline: 2px solid var(--terracotta);
  outline-offset: 2px;
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Alt Text Guidelines
- **Artwork**: "Title — Series name" (e.g., "By the Well — Malay Kampung Series")
- **Portrait**: "Loh Ek Sem portrait" or "The Artist"
- **Process**: "Step N: [action]" (e.g., "Step 3: Mould making")
- **Decorative**: Empty alt="" for backdrop images

---

## 9. SEO & Meta

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
Home: Archive of 30+ years documenting vanishing Malay kampung culture and
Peranakan heritage through painting and paper cast sculpture by artist Loh Ek Sem.
```

### Open Graph Tags
```html
<meta property="og:title" content="Loh Ek Sem | Kampung Life Documentarian">
<meta property="og:description" content="Archive of 30+ years documenting vanishing Malay kampung culture.">
<meta property="og:image" content="assets/og-image.jpg">
<meta property="og:type" content="website">
```

### Twitter Card
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Loh Ek Sem | Artist Archive">
<meta name="twitter:description" content="Malaysian fine artist | Kampung life | Peranakan heritage">
```

---

## 10. File Structure

```
loheksem_deploy/
├── index.html              # Home page
├── about.html              # About/Biography
├── series-malay-kampung.html
├── series-peranakan.html
├── series-watercolour.html
├── series-paper-cast.html
├── exhibitions.html
├── contact.html
├── assets/
│   ├── css/
│   │   └── main.css       # Consolidated stylesheet (future)
│   ├── js/
│   │   └── main.js        # Shared JavaScript (future)
│   └── images/
│       ├── og-image.jpg   # Social share image
│       └── [optimized artwork]
├── loheksem_staging/crops/
│   └── p01_portrait_loh_ek_sem.jpg
├── PAPERcast-making/
│   └── [8 process photos]
└── [series artwork images]
```

---

## 11. Implementation Checklist

### Foundation
- [x] CSS variable system defined
- [x] Typography scale established
- [x] Color palette documented
- [x] Component library started

### Pages Built
- [x] Home (index.html)
- [x] About (about.html)
- [ ] Malay Kampung (series-malay-kampung.html)
- [ ] Peranakan (series-peranakan.html)
- [ ] Watercolour (series-watercolour.html)
- [ ] Paper Cast (series-paper-cast.html)
- [ ] Exhibitions (exhibitions.html)
- [ ] Contact (contact.html)

### Optimization
- [ ] Image optimization pipeline (WebP conversion)
- [ ] Lazy loading for below-fold images
- [ ] Lighthouse audit (>90 score target)
- [ ] Mobile testing (iOS Safari, Chrome Mobile)

---

**Next Steps:**
1. Build remaining 6 series pages using this design system
2. Create consolidated main.css for shared styles
3. Optimize all images to WebP format
4. Run Lighthouse audit pre-launch
