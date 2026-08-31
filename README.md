# Cooked Helsinki

Marketing site for Cooked Helsinki — chef-led food walking tours through
Helsinki's three great market halls. Single page with anchor navigation, plus
Terms and Privacy.

Next.js App Router, statically exported to `out/`, deployed on Netlify. No
database, no CMS, no server-side features.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export into out/
```

`npm run build` runs `next build`, which with `output: 'export'` writes the
whole site to `out/`. Netlify runs the same command and publishes that folder
(see `netlify.toml`).

## Where things live

| Path | What it is |
| --- | --- |
| `content/site.ts` | **All copy and every outbound link.** Change text, prices, FAQ answers or the booking URL here — layout code never hardcodes a string. |
| `app/layout.tsx` | Fonts, metadata/OG tags, JSON-LD injection. |
| `app/page.tsx` | Section order for the single page. |
| `components/` | Reusable pieces: `CTAButton`, `SectionLabel`, `MenuItem`, `FAQAccordion`, `ReviewCard`, `Wordmark`, `RouteMap`, `TastingCard`. |
| `components/sections/` | One file per page section, in page order. |
| `lib/jsonld.ts` | LocalBusiness, Product/Review and FAQPage structured data, built from `content/site.ts`. |
| `assets/images/` | Photography, imported by `next/image`. Not in `public/`, so Next emits exactly one hashed copy per image. |
| `public/images/og-cover.png` | The OG card — referenced by absolute URL, so it has to be public. |

## Changing the booking link

`BOOKING_URL` in `content/site.ts` is the single source of truth. `CTAButton`
defaults to it, so swapping in a GetYourGuide widget URL or a direct checkout is
a one-line change. `GIFT_URL` works the same way for gift cards.

## Brand tokens

The "Smoke & Fire" (Nordic edition) palette is defined twice, deliberately in
sync: as Tailwind theme colours in `tailwind.config.ts` and as CSS custom
properties in `app/globals.css` for the handful of non-Tailwind rules.

| Token | Hex | Used for |
| --- | --- | --- |
| `harbor` | `#1E2A30` | Dark surfaces — hero, small-groups band, footer |
| `paper` | `#FAF9F6` | Default page ground |
| `lingonberry` | `#9E463A` | **Conversion only** — booking buttons, prices, the "Most popular" badge, availability dot, tasting numerals |
| `sea` | `#3E6B7A` | Links, informational UI, secondary actions |
| `candle` | `#C49A5C` | Warm accent on dark grounds |
| `candle-wash` | `#F1E5D2` | The gift/perk family only — Fazer band, gift band, recommended price row |
| `candle-deep` | `#7A5A2D` | The same warmth as text on light grounds |
| `oatmeal` | `#EFE7DA` | Food-led sections — tastings, vendor statement, tasting-card inset |
| `mist` | `#DDE8EA` | Informational sections — route, private tours, practical details |
| `smoke` | `#8A9199` | Hairline rules and dividers |
| `smoke-deep` | `#63686E` | Label and meta text |

Two rules keep the palette working:

1. **Lingonberry means "book".** It is the only colour used for the conversion
   path, so nothing else competes with it. Sea blue keeps links and secondary
   actions.
2. **`-deep` variants exist for contrast, not decoration.** Base `candle` and
   `smoke` are below WCAG AA as small text on light grounds; `candle-deep` and
   `smoke-deep` clear AA on paper and on all three tints. Use the base tokens on
   dark grounds and for rules, the deep ones for text.

Section grounds alternate so no two adjacent sections share one:
harbor → paper → mist → oatmeal → harbor → candle-wash → paper → oatmeal →
paper → mist → candle-wash → mist → paper → harbor.

Type is Fraunces (display) and Inter (body), loaded through `next/font/google`
so the faces are self-hosted at build time and swap without layout shift.

## Placeholder photography

`assets/images/*.png` are generated placeholders standing in for the real shoot
(overhead food, chef's hands, market hall counters, steam, Nordic winter light).
Regenerate them with:

```bash
node scripts/generate-placeholders.mjs
```

To use real photography, drop JPEGs into `assets/images/` under the same
filenames and delete the script. Alt text lives in the section components.

## Localisation

Copy is already isolated in `content/site.ts` with no strings in layout code, so
adding Finnish means adding `content/site.fi.ts` and a locale segment — no
component changes.
