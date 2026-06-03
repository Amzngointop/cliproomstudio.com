# ClipRoomStudio

Creator gear review site for TikTok, YouTube, and UGC creators filming in small rooms.

**Domain:** cliproomstudio.com  
**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS  
**Deployment:** VPS with Node.js + PM2 + Nginx

---

## Setup

```bash
npm install
npm run build
npm run start
```

The dev server runs on `http://localhost:3000`. The production server runs on `:3000` behind Nginx.

---

## Project Structure

```
app/
  page.tsx                          ← Homepage
  best/[slug]/page.tsx              ← Best-product article template (dynamic)
  guides/how-to-set-up-creator-room/page.tsx  ← Informational guide
  privacy-policy/page.tsx
  terms/page.tsx
  affiliate-disclosure/page.tsx
  contact/page.tsx
  sitemap.ts                        ← Auto-generated sitemap.xml
  robots.ts                         ← robots.txt
  layout.tsx                        ← Root layout with Header + Footer
  globals.css                       ← Design tokens, animations
  icon.svg                          ← Custom favicon (neon yellow on purple)

components/
  Header.tsx          ← Sticky header with scroll blur
  Footer.tsx          ← Full footer with links
  ProductCard.tsx     ← Individual product review card
  ComparisonTable.tsx ← Side-by-side product comparison table
  FAQ.tsx             ← Accordion FAQ (client component)
  CTAButton.tsx       ← Reusable CTA button (primary/secondary/outline)
  AuthorBio.tsx       ← Author block with avatar and bio
  ExpertQuote.tsx     ← Styled blockquote for expert quotes
  BudgetCalculator.tsx ← Interactive gear calculator (client component)
  GearChecklist.tsx   ← Interactive studio essentials checklist
  StatCard.tsx        ← Animated count-up stat display
  AnimatedSection.tsx ← IntersectionObserver fade-in wrapper
  ContactForm.tsx     ← Static contact form (no backend)

data/
  site.ts      ← Site name, domain, nav, social links, address
  products.ts  ← All 25 product records (5 per category)
  articles.ts  ← Article configurations (5 articles)
```

---

## Where to Edit Content

### Changing affiliate links or ASINs
Edit `data/products.ts`. Each product has:
- `asin` — the Amazon ASIN (placeholder: `PLACEHOLDER-*`)
- `affiliateUrl` — auto-generated from ASIN using the tag in `makeAffiliateUrl()`
- Change the affiliate tag globally by finding `YOURTAG-20` in `data/products.ts`

### Adding or updating a product
In `data/products.ts`, find the relevant array (`lavalierMics`, `ringLights`, etc.) and add or edit a product object following the `Product` interface. No page changes needed.

### Updating article text (intro, FAQ, quotes)
Edit `data/articles.ts`. Each `ArticleConfig` object contains all text for the article except the product cards (which come from `data/products.ts`).

### Changing site name, email, or address
Edit `data/site.ts`.

### Updating navigation
Edit the `nav` array in `data/site.ts`.

---

## Adding New Content

### New best-product article
1. Add a new `ArticleConfig` entry to `data/articles.ts`
2. Add the corresponding products to `data/products.ts` in a new named array
3. Add the category key mapping in `app/best/[slug]/page.tsx` → `productsByCategory`
4. The page builds automatically via `generateStaticParams()`

### New informational guide
Create a new directory under `app/guides/your-guide-slug/page.tsx`. Follow the pattern in `how-to-set-up-creator-room/page.tsx`. Add to `app/sitemap.ts` manually.

---

## Deployment (VPS / PM2)

```bash
# On the server:
git pull
npm install
npm run build
pm2 restart cliproomstudio   # or: pm2 start npm --name cliproomstudio -- start
```

**Nginx config:**
```nginx
server {
  listen 80;
  server_name cliproomstudio.com www.cliproomstudio.com;

  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

Add SSL with Certbot: `sudo certbot --nginx -d cliproomstudio.com -d www.cliproomstudio.com`

---

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| Deep purple | `#1e0a3c` | Primary dark, header, section backgrounds |
| Neon yellow | `#facc15` | CTAs, accents, highlights |
| Mid purple | `#7c3aed` | Secondary accent, hover states, links |
| Soft white | `#fafafa` | Card backgrounds, body areas |
| Font | Inter (Google Fonts) | All text |

---

## Animations

All animations use CSS + IntersectionObserver only (no Framer Motion):
- `AnimatedSection` — fade-in + slide-up when scrolling into view
- `StatCard` — count-up number animation on first view
- Header — backdrop-blur increases on scroll
- Hero — gradient `background-position` shift via CSS `@keyframes`
- Cards — `hover:-translate-y-1` hover lift via Tailwind
- All respect `prefers-reduced-motion`
