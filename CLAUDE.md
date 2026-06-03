# CLAUDE.md — ClipRoomStudio Maintenance Guide

This file instructs future AI agents how to maintain, extend, and deploy ClipRoomStudio without breaking things.

---

## Stack & Architecture

- **Framework:** Next.js 16 (App Router) with TypeScript
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss"` in globals.css — no tailwind.config.ts)
- **Icons:** lucide-react only (check installed version for available icons before using new ones)
- **Animations:** CSS + IntersectionObserver only — no Framer Motion, no GSAP
- **Data:** Flat TypeScript files in `/data/` — no database, no CMS, no API
- **Deployment:** Static + Node.js — works with PM2 + Nginx on a VPS

---

## Data-Driven Architecture

**Always** edit data files rather than page files for content changes.

| File | Purpose |
|------|---------|
| `data/site.ts` | Site name, domain, navigation, social links, contact info |
| `data/products.ts` | All 25 product records across 5 categories |
| `data/articles.ts` | Article metadata, stats, FAQs, buying advice, related links |

Page files (`app/best/[slug]/page.tsx`, `app/page.tsx`) render data from these files through reusable components. **Do not hardcode content into page files.**

---

## Adding New Products

1. Open `data/products.ts`
2. Find the correct category array (e.g., `lavalierMics`, `ringLights`)
3. Add a new `Product` object following the existing pattern
4. Use `makeAffiliateUrl("ASIN_HERE")` for the affiliate URL
5. Use placeholder ASINs until real ones are confirmed
6. Run `npm run build` to verify no TypeScript errors

Never invent ratings. Never claim testing that hasn't happened. Write original editorial content only.

---

## Adding New Articles

1. Add a new `ArticleConfig` to `data/articles.ts` following the existing interface
2. Add corresponding products to `data/products.ts` in a new named array
3. In `app/best/[slug]/page.tsx`, add the new category to `productsByCategory`:
   ```ts
   const productsByCategory: Record<string, Product[]> = {
     "your-new-category": yourNewArray,
     // ...existing
   };
   ```
4. Run `npm run build` — the new page builds via `generateStaticParams()`
5. Add the new URL to `app/sitemap.ts`

---

## Adding New Guide Pages

1. Create directory: `app/guides/your-guide-slug/`
2. Create `page.tsx` following `how-to-set-up-creator-room/page.tsx` as the template
3. Add to `app/sitemap.ts` static pages array manually
4. Add an internal link from the homepage or existing articles

Guide pages must contain:
- Unique `<Metadata>` export (title + description + canonical)
- One `<h1>` tag
- FAQ section using the `<FAQ>` component
- `<AnimatedSection>` wrappers on major sections
- JSON-LD FAQ schema script tag
- No affiliate links (guides are pure value content)

---

## Design System Rules

**Colors — always use these exact values:**
- Deep purple: `#1e0a3c`
- Neon yellow: `#facc15`
- Mid purple: `#7c3aed`
- Soft white: `#fafafa`

**Never introduce:**
- External UI component libraries (shadcn, MUI, Chakra, etc.)
- New color values outside the palette
- Emoji in UI (use lucide-react icons only)
- `framer-motion`, `gsap`, or any animation library
- Dark mode variants (the site uses a fixed color scheme)

**Typography:**
- Font: Inter (loaded via `next/font/google` in `app/layout.tsx`)
- Headings: `fontWeight: 900` for h1, `fontWeight: 800` for h2, `fontWeight: 700` for h3
- Body: `fontSize: "0.9rem"`, `lineHeight: 1.7`, `color: "#374151"`

---

## Animations: Rules

All animations use only:
- CSS `@keyframes` in `app/globals.css`
- The `AnimatedSection` component (IntersectionObserver, `useRef`, `useState`)
- The `StatCard` component (count-up via `requestAnimationFrame`)
- Tailwind `hover:` classes for interaction states

The `animated-section` CSS class handles fade-in/slide-up. The `visible` class is toggled by JavaScript. Both are defined in `globals.css`. **Do not change these class names** — `AnimatedSection.tsx` depends on them.

Always add `@media (prefers-reduced-motion: reduce)` handling when adding new animations.

---

## Lucide React Icon Safety

The installed version of lucide-react does not include all icons from the icon list. Before using any new icon:

```bash
node -e "const l = require('lucide-react'); console.log('IconName' in l)"
```

If it returns `false`, pick a different icon or use a similar available one. Common safe icons: `Video`, `Mic`, `Sun`, `Smartphone`, `Grid3X3`, `MonitorPlay`, `ArrowRight`, `Check`, `CheckCircle`, `XCircle`, `ChevronDown`, `ChevronUp`, `Menu`, `X`, `Calculator`, `Quote`, `Tag`, `ShoppingCart`, `ExternalLink`, `User`, `Send`, `MapPin`, `Mail`, `Clock`, `Play`, `Film`, `TrendingUp`, `Users`, `BarChart`, `Shield`, `Star`, `Zap`, `BookOpen`.

---

## SEO Requirements

Every page must have:
- `export const metadata: Metadata` with unique `title` and `description`
- `alternates: { canonical: "..." }` pointing to the canonical URL
- One `<h1>` tag per page
- JSON-LD schema (Article schema on articles, FAQ schema where applicable)

The `app/sitemap.ts` file generates `/sitemap.xml` automatically. After adding new pages, verify they appear in the sitemap by running `npm run build` and checking the output.

---

## Affiliate Link Format

All affiliate links use this format:
```
https://www.amazon.com/dp/ASIN?tag=YOURTAG-20
```

The `makeAffiliateUrl()` function in `data/products.ts` generates these automatically. The tag `YOURTAG-20` is the placeholder — replace with the actual Amazon Associates tag when deploying.

All affiliate links must include `rel="noopener noreferrer sponsored"` — this is already implemented in `ProductCard.tsx`, `ComparisonTable.tsx`, and `CTAButton.tsx`.

---

## Content Rules (Critical — Do Not Violate)

1. **No fake ratings** — never invent star ratings, user scores, or review counts
2. **No false testing claims** — do not say "we tested" unless testing actually occurred
3. **No copied descriptions** — never copy Amazon product descriptions or manufacturer copy
4. **Original editorial content only** — all pros, cons, summaries, and advice must be original
5. **No placeholder text visible to users** — no lorem ipsum, no "coming soon" content
6. **Accurate stats** — cite real sources (CreatorIQ, Statista, Linktree, YouTube)

---

## Build Safety Checklist

Before deploying any changes:

```bash
npm run build
```

Must complete with:
- Zero TypeScript errors
- Zero "Export X doesn't exist" errors (check lucide-react icon names)
- All pages listed in the Route output
- No "missing generateStaticParams" warnings for dynamic routes

If the build fails, fix all errors before deploying. Never use `// @ts-ignore` or type assertions to bypass TypeScript errors — fix the root cause.

---

## Deployment Commands

```bash
# Standard deploy
git pull
npm install
npm run build
pm2 restart cliproomstudio

# First deploy (create PM2 process)
pm2 start npm --name cliproomstudio -- start
pm2 save
```

PM2 must be configured with `PORT=3000` (Next.js default). Nginx proxies port 80/443 → 3000.

Do not require serverless features, edge runtime, or Vercel-specific APIs. This site must run on a standard Node.js VPS.
