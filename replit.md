# Vaani — Project Documentation

## Overview
**Vaani** is a Next.js web application (port 5000) serving as the homepage and data visualization hub for India's largest open-source speech dataset initiative by IISc & ARTPARK. It showcases linguistic diversity stats, interactive maps, case studies, and partner information.

## Stack
- **Framework**: Next.js (Pages Router) with ISR (`revalidate: 600`)
- **Styling**: Tailwind CSS + custom CSS (`styles/globals.css`)
- **Data**: Fetched from `https://hub.vaani.artpark.ai/api/stats` via `getStaticProps`
- **Auth**: `@auth0/nextjs-auth0`

## Key Files
| File | Purpose |
|---|---|
| `pages/index.js` | Home page; uses `getStaticProps` |
| `components/Header.jsx` | Navbar with Vaani logo; no announcement bar |
| `components/Hero.jsx` | Full-screen hero with animated blobs + gradient headline |
| `components/Stats.jsx` | About section with 10 stat cards (2-col grid) |
| `components/Bio.js` | Team section — 3-column card grid layout |
| `components/DownloadSection.jsx` | Dark blue card with split layout + stat pills |
| `components/ArticlesSection.jsx` | 3-column media/news card grid |
| `components/Faqs.jsx` | Accordion FAQ in 2-column layout |
| `components/CaseStudiesFooter.jsx` | Dark slate-900 footer (3-col layout) |
| `components/ScrollReveal.jsx` | Scroll-triggered animation wrapper (IntersectionObserver) |
| `hooks/useInView.js` | Custom hook for scroll-triggered animations |
| `styles/globals.css` | Global styles, animation keyframes (fade-up, blob floats, marquee) |
| `next.config.js` | `allowedDevOrigins` for Replit preview |

## Homepage Sections (in order)
1. **Hero** — Animated blobs, dot grid overlay, gradient "language landscape" headline, dual CTAs, mini stat row, partner logos with divider
2. **Stats** — About VAANI text + 10 stat cards (large numbers, gradient top border on hover)
3. **ExploreData** — Interactive map visualization
4. **DownloadSection** — Dark blue split-layout card with stat pills + dual download/license CTAs
5. **Team** — 3-column Bio card grid with image-overlay name/role
6. **Partners** — Horizontal marquee of partner logos
7. **ArticlesSection** — 6 article cards in 3-column grid with image, date, title, author
8. **Faqs** — 6 questions in 2-column accordion layout
9. **Footer** — Dark slate footer (brand, nav, contact in 3 columns)

## Animations
- **Load-time (Hero)**: `anim-slide-up` / `anim-fade-in` keyframes triggered via `mounted` state + staggered delays
- **Scroll-triggered**: `useInView` hook (IntersectionObserver) with `opacity`/`transform` inline styles
- **Blob float**: `blobFloat1/2/3` keyframes in `globals.css` — 13-20s ease-in-out infinite cycles
- **Case studies**: `ScrollReveal.jsx` wraps sections for staggered reveal

## Known Pre-existing Warnings (do not fix)
- Duplicate Link nesting in `CaseStudiesHeader.jsx`
- Duplicate key warning in `HomepageDataAndMaps.js`
