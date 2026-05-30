# Portfolio Design System & Aesthetics
## Theme: "Midnight Champagne"

This document outlines the visual system, color palette, typography, UI components, animations, and responsive spacing logic that establish the premium **"Midnight Champagne"** aesthetic for the portfolio.

---

## 1. Color Palette

The color system is optimized for high-contrast dark environments, blending rich obsidian tones with premium amber, champagne golds, and warm slate grays.

### Core Surface & Backgrounds
| Token | Color Code | Description | Visual Role |
| :--- | :--- | :--- | :--- |
| `bg-primary` | `#050505` | Midnight Obsidian | Main page background (deep velvet black) |
| `bg-secondary` | `#0f0f11` | Deep Charcoal | Sidebar cards, secondary columns |
| `bg-card` | `rgba(15, 15, 17, 0.6)` | Glass Card Surface | Cards baseline background (semi-transparent) |
| `bg-glass` | `rgba(15, 15, 17, 0.5)` | Glassmorphism Surface | Navbar and interactive overlay backdrops |

### Premium Accents & Glows
| Token | Color Code | Description | Visual Role |
| :--- | :--- | :--- | :--- |
| `accent` | `#fbbf24` | Warm Champagne | Core branding accent, active markers |
| `accent-light` | `#fde68a` | Cream Champagne | Highlighting text, gradient highlights |
| `accent-dark` | `#b45309` | Deep Bronze | Hover states, button shadow undertones |
| `accent-glow` | `rgba(251, 191, 36, 0.35)` | Spotlight Gold | Cursor radial lighting, orb highlights |
| `teal` | `#a8a29e` | Warm Stone Slate | Secondary tags, metadata labels |
| `rose` | `#d97706` | Rich Gold Bronze | Timeline highlights, secondary elements |
| `amber` | `#fcd34d` | Sunny Amber | Interactive indicators, warning tags |

### Text & Borders
| Token | Color Code | Description | Visual Role |
| :--- | :--- | :--- | :--- |
| `text-primary` | `#fafaf9` | Warm Alabaster | High-readability body text, headings |
| `text-secondary`| `#a8a29e` | Soft Slate Gray | Paragraphs, support labels |
| `text-muted` | `#78716c` | Muted Gray | Metadata, footer, copyright labels |
| `border` | `rgba(251, 191, 36, 0.1)` | Golden Glass Border | Default glass border (10% Gold opacity) |
| `border-hover` | `rgba(251, 191, 36, 0.4)` | Active Gold Border | Hover highlight border (40% Gold opacity) |

---

## 2. Typography

We leverage three distinct font families from Google Fonts to establish hierarchy, modern geometry, and clear readability.

### Space Grotesk (`font-heading`)
* **Role**: Headings, Titles, Hero Display Text.
* **Characteristics**: Geometric, sans-serif, technical yet highly expressive, bold architectural curves.
* **Usage**: `h1`, `h2`, `h3`, navbar brand logo.

### Inter (`font-body`)
* **Role**: Primary Body Copy, Paragraphs, Lists, and CTAs.
* **Characteristics**: Clean, neutral, high-contrast, designed for user interface legibility.
* **Usage**: Paragraphs, button labels, list items, description tags.

### Geist Mono (`font-mono`)
* **Role**: Metadata, Tags, Labels, Success banners, Code components.
* **Characteristics**: High-tech, spaced, clean, monospaced aesthetics.
* **Usage**: `.font-mono` labels, project tags, timeline periods.

---

## 3. Glassmorphism & UI Accents

The portfolio achieves an elite-tier depth layer using Backdrop-Blur glass formulas.

### Main Glass Card (`.glass`)
```css
background: rgba(15, 15, 17, 0.5);
backdrop-filter: blur(16px);
-webkit-backdrop-filter: blur(16px);
border: 1px solid rgba(251, 191, 36, 0.1);
```

### Strong Glass Card (`.glass-strong`)
```css
background: rgba(17, 17, 19, 0.8);
backdrop-filter: blur(24px);
-webkit-backdrop-filter: blur(24px);
border: 1px solid rgba(251, 191, 36, 0.1);
```

### Gradients
* **Core Brand Text Gradient (`.gradient-text`)**:
  `linear-gradient(135deg, #fde68a 0%, #a8a29e 50%, #fbbf24 100%)`
  *(Flows seamlessly from Cream Champagne into Slate Gray and Golden Amber)*
* **Warm Contrast Text Gradient (`.gradient-text-warm`)**:
  `linear-gradient(135deg, #fde68a 0%, #d97706 100%)`
  *(Flows from Cream Champagne into Rich Bronze Orange)*

---

## 4. Interaction Physics & Animations

To bring the interface to life, micro-animations react dynamically to scroll states and user movement.

### Physics-Based Cursor Spotlight
- A dynamic radial gradient spotlight tracks mouse movement on the `#hero` container to illuminate background element shapes.
- **Formula**: `radial-gradient(800px circle at Xpx Ypx, rgba(251, 191, 36, 0.35), transparent 80%)`

### Dynamic Keyframes
1. **Pulse Glow (`animate-pulse-glow`)**:
   Smoothly breathes shadow offsets for highlighting elements.
   * `0%, 100%`: `box-shadow: 0 0 8px rgba(251, 191, 36, 0.35);`
   * `50%`: `box-shadow: 0 0 24px rgba(251, 191, 36, 0.35), 0 0 48px rgba(251, 191, 36, 0.15);`
2. **Floating Orbs (`animate-float`)**:
   Translates backdrop nodes vertically on a standard sine-wave curve.
   * `0%, 100%`: `transform: translateY(0);`
   * `50%`: `transform: translateY(-12px);`
3. **Orbit Rings (`animate-spin-slow`)**:
   Slowly rotates orbital vector lines clockwise/counter-clockwise behind profile photos at standard `20s`/`30s` durations.

---

## 5. Responsive Design Architecture
The layout uses a custom fluid scale to transition gracefully from desktop viewports to ultra-narrow screens (down to 300px):

* **Safe Spacing Grid**: Cards scale padding down from `p-8` / `p-6` to `p-5` / `p-4` on screens under `640px` to maximize reading space.
* **Layout Shield**: Wrapping container uses `overflow-x-hidden` to guarantee zero horizontal scroll/wiggle when ScrollReveal entry slides trigger.
* **CTA Buttons**: Stretch to `w-full` stacked columns on mobile viewports for effortless thumbs-only tapping.
