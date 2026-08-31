/**
 * Single source of truth for every piece of copy and every outbound link.
 *
 * Layout code never hardcodes a string or a URL: swap the booking widget,
 * reprice the tour or rewrite the FAQ here and the page follows. Strings are
 * kept flat and self-contained so this file can be lifted into a locale
 * bundle (`content/site.fi.ts`) without touching a component.
 */

/** Every CTA on the site resolves to this one link. */
export const BOOKING_URL = 'https://booking.cookedhelsinki.com/checkout';
/** Gift-card checkout. Swapped for the real product URL at launch. */
export const GIFT_URL = 'https://booking.cookedhelsinki.com/gift-cards';

export const site = {
  name: 'Cooked Helsinki',
  wordmark: { primary: 'Cooked', secondary: 'Helsinki' },
  tagline: 'Helsinki, eaten properly.',
  secondaryLine: 'The food tour run by chefs.',
  url: 'https://cookedhelsinki.com',
  email: 'hello@cookedhelsinki.com',
  corporateEmail: 'groups@cookedhelsinki.com',
  businessLine: 'Cooked Helsinki · Helsinki, Finland',
  social: {
    instagram: 'https://instagram.com/cookedhelsinki',
    tiktok: 'https://tiktok.com/@cookedhelsinki',
  },
  sister: { label: 'Heading north? Read our guide to Lapland', href: 'https://laplandguide.com' },
} as const;

export const nav = [
  { label: 'The route', href: '#route' },
  { label: 'Tastings', href: '#tastings' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Private tours', href: '#private' },
  { label: 'FAQ', href: '#faq' },
] as const;

export const hero = {
  intro: 'A 3-hour walking tour through Helsinki’s three great market halls, led by a professional chef.',
  primaryCta: 'Book your tour — €85',
  secondaryCta: 'See the route',
  trustStrip: ['3 hours', '4 stops', 'Small groups', 'English'],
} as const;

export const whyChefs = {
  label: 'Why chefs',
  headline:
    'Most food tours are led by guides who like food. Ours are led by chefs who cook it.',
  standfirst:
    'Same halls, different tour. A cook walks you past what is merely famous and stops at what is good this week.',
  columns: [
    {
      title: 'Chef-led',
      body: 'Every guide has spent 8+ years in Finnish professional kitchens. We know the vendors by name, we know which counter smoked its own fish this morning, and we will tell you when something is not worth your appetite today.',
    },
    {
      title: 'Three market halls, not one neighbourhood',
      body: 'Hakaniemi, the Old Market Hall and Hietalahti — the working hall, the historic one and the modern one — connected by tram, the way a local crosses the city rather than the way a map suggests.',
    },
    {
      title: 'Small groups',
      body: 'Capped at eight guests. You can hear your guide over a busy counter, ask the vendor a question, and get a real answer instead of a rehearsed line delivered to a crowd of thirty.',
    },
  ],
} as const;

export const route = {
  label: 'The route',
  headline: 'Four stops, three halls, one tram line.',
  stops: [
    {
      n: '01',
      title: 'Hakaniemi Market Hall',
      subtitle: 'Where Helsinki actually shops',
      body: 'We start in the working hall, at the counters that supply the city’s kitchens. Rye, smoked fish, egg butter, and a first read on what the morning brought in.',
      meta: 'Meeting point · 45 min',
    },
    {
      n: '02',
      title: 'Vanha Kauppahalli',
      subtitle: 'The Old Market Hall, 1889 — the classics done right',
      body: 'Helsinki’s oldest indoor market, still in its original hall on the harbour. Salmon soup made the way it is supposed to be made, and the cheese course that surprises everyone.',
      meta: 'Tram 6 · 50 min',
    },
    {
      n: '03',
      title: 'Allas Sea Pool café',
      subtitle: 'Coffee and korvapuusti by the harbour',
      body: 'A sit-down break with the water in front of you. Finnish coffee — the most-drunk in the world per head — and a cardamom bun still warm enough to pull apart.',
      meta: 'On foot · 25 min',
    },
    {
      n: '04',
      title: 'Hietalahti Market Hall',
      subtitle: 'The modern Finnish kitchen',
      body: 'We finish where the young cooks went. Fermenting, curing and open fire in a nineteenth-century hall, plus whatever your guide has decided you have to try.',
      meta: 'Tram 6 · 40 min',
    },
  ],
  note: 'We ride the tram between stops (~€6, contactless card) — part of eating like a local. The tour ends with optional drinks nearby; your guide will join you for one.',
} as const;

export const tastings = {
  label: 'What you’ll taste',
  headline: 'Ten tastings. Come hungry.',
  standfirst:
    'A working list, not a fixed menu. Your guide buys what is good on the morning of your tour.',
  items: [
    {
      name: 'Rye bread and cultured butter',
      note: 'Sour, dense, 100% rye. The bread every other thing on this list is built to sit on.',
    },
    {
      name: 'Smoked vendace',
      note: 'Muikku, small and whole, fried in rye flour or hot-smoked over alder. Eaten bones and all — we will show you how.',
    },
    {
      name: 'Karelian pies with egg butter',
      note: 'Rye crust, rice porridge, warm from the counter. The egg butter is the point; we will not let you skip it.',
    },
    {
      name: 'Cold-smoked reindeer',
      note: 'From Lapland, sliced thin. Lean, clean and far less gamey than people expect.',
    },
    {
      name: 'Lohikeitto',
      note: 'Salmon soup with cream, dill, allspice and potato. Judged on whether the fish is still in pieces, not shreds.',
    },
    {
      name: 'Leipäjuusto with cloudberry jam',
      note: 'Squeaky bread cheese, warmed until it blisters, under cloudberries picked in the north. The dish that converts sceptics.',
    },
    {
      name: 'Korvapuusti and coffee',
      note: 'Cardamom bun, pearl sugar on top, with coffee by the harbour. Finland drinks more of it than anyone; you will understand why.',
    },
    {
      name: 'Seasonal berries',
      note: 'Bilberry, lingonberry, sea buckthorn, cloudberry — whatever the forest is doing that month. Acid, not sugar.',
    },
    {
      name: 'Something fermented, cured or over fire',
      note: 'The Hietalahti course, from the cooks doing the most interesting work in the city right now.',
    },
    {
      name: 'The market surprise',
      note: 'One thing your guide buys on the day because it is too good to walk past. We do not print it in advance.',
    },
  ],
  footnote:
    'Menus shift with the season and the morning’s market — that’s the point. Dietary needs? Tell us at booking; a chef plans your route.',
} as const;

export const smallGroups = {
  label: 'Small groups',
  quote:
    'We cap every tour at 8 guests. We won’t expand it — small groups are a commitment to you and to the vendors we visit.',
} as const;

export const directBooking = {
  label: 'Book direct',
  // Split so the Fazer perk can carry the warm candle accent on its own.
  headlineLead: 'Book direct: every guest is welcomed with',
  headlineHighlight: 'a Fazer chocolate gift.',
  body:
    'Booking on this page means no reseller commission — the money stays with a small Helsinki company and the stalls we buy from.',
  cta: 'Book your tour — €85',
} as const;

export const pricing = {
  label: 'Pricing',
  headline: 'One tour. Three ways to book it.',
  spec: 'Duration 3 hrs · Replaces lunch · Runs year-round, rain or shine',
  // Placeholder until the booking system feeds real availability in.
  availability: 'Departures Tuesday, Thursday and Saturday at 10:00',
  rows: [
    {
      name: 'Adults',
      detail: 'All ten tastings, three market halls, one chef.',
      price: '€85',
      badge: 'Most popular',
      highlight: true,
    },
    { name: 'Children', detail: 'Ages 6–12. Smaller portions, same route.', price: '€55' },
    {
      name: 'Private tour',
      detail: 'Up to 6 guests, your own chef, your own date.',
      price: '€429',
    },
  ],
  note: 'Prices include all tastings and VAT. Tram fare (~€6) is paid on board.',
} as const;

export const vendors = {
  label: 'We pay our vendors',
  statement:
    'We pay our market hall vendors full price, in advance. Your ticket directly supports the stalls and family businesses we visit.',
} as const;

export const takeHome = {
  label: 'Take it home',
  headline: 'You leave with the menu, and the addresses.',
  body:
    'Every guest gets a printed Cooked Helsinki tasting card: the day’s menu set like a restaurant menu, with each vendor listed by name and hall so you can walk back tomorrow and buy the thing you liked. Scan the card to save the list to your phone.',
  card: {
    date: 'Tuesday, 14 January',
    heading: 'Today’s tasting card',
    lines: [
      { item: 'Rye bread, cultured butter', vendor: 'Hakaniemi Hall · stall 12' },
      { item: 'Smoked vendace', vendor: 'Hakaniemi Hall · fishmonger' },
      { item: 'Lohikeitto', vendor: 'Vanha Kauppahalli · soup counter' },
      { item: 'Leipäjuusto, cloudberry', vendor: 'Vanha Kauppahalli · dairy' },
      { item: 'Korvapuusti, coffee', vendor: 'Allas Sea Pool' },
      { item: 'The market surprise', vendor: 'Hietalahti Hall' },
    ],
    qrCaption: 'Scan for the vendor list',
  },
} as const;

export const privateTours = {
  label: 'Private & corporate',
  headline: 'Your own chef, your own route.',
  body:
    'A private tour runs for up to 6 guests at €429 — same three halls, planned around what you want to eat and what time you can go. Good for families, birthdays and anyone who would rather not share a guide.',
  corporate:
    'Visiting Helsinki with your team? We build custom market routes for groups and company events. Email us.',
  cta: 'Email us about groups',
  subject: 'Private or corporate tour enquiry',
} as const;

export const giftCards = {
  headline: 'Give someone Helsinki, eaten properly.',
  body: 'Gift cards are valid for 12 months and work on any tour, any date.',
  cta: 'Buy a gift card',
} as const;

export const faq = {
  label: 'Practical details',
  headline: 'Everything you need before you book.',
  items: [
    {
      q: 'Where does the Helsinki food tour meet?',
      a: 'The tour meets at the main entrance of Hakaniemi Market Hall (Hakaniemenranta 1, 00530 Helsinki), directly above the Hakaniemi metro station and on tram lines 3, 6, 7 and 9. Your guide will be holding a Cooked Helsinki tasting card and will be there ten minutes before the start time. We send exact meeting-point directions with a map link in your booking confirmation email.',
    },
    {
      q: 'How long is the tour and how far do we walk?',
      a: 'The tour runs three hours from the meeting point at Hakaniemi Market Hall to the final stop at Hietalahti Market Hall. Total walking is roughly two kilometres, split into short stretches between stops, and we ride the tram for the two longer connections. The pace is relaxed, there is seating at two of the four stops, and the route is step-free and suitable for most mobility levels — tell us at booking if you need us to adapt it.',
    },
    {
      q: 'Does the food tour run in winter or bad weather?',
      a: 'Yes. Cooked Helsinki runs year-round, rain, snow or shine, because almost the entire route is indoors: three heated market halls and a harbourside café, with only short walks and tram rides between them. Winter is one of the best times to take the tour — the halls are at their most atmospheric, the salmon soup is exactly what the weather calls for, and the groups are smaller. Dress for a few minutes outside and you will be comfortable.',
    },
    {
      q: 'Can you accommodate vegetarian, vegan, gluten-free or allergy needs?',
      a: 'Yes. Tell us at booking and a chef plans your route: we swap in vendors and dishes rather than leaving you standing while everyone else eats. Vegetarian, pescatarian, gluten-free, lactose-free, nut and shellfish allergies are all straightforward with notice. Strict vegan works well too, though the tasting list changes substantially, so please give us at least 48 hours. If your allergy is severe, email us before booking and we will talk through the route honestly.',
    },
    {
      q: 'How big are the groups?',
      a: 'We cap every scheduled tour at 8 guests and we do not make exceptions for larger walk-up parties. Small groups are the reason the tour works: you can hear your guide across a busy market hall, the vendors have time to talk to you, and nobody is queuing behind a crowd of thirty. If your party is larger than eight, book a private tour for up to 6 guests or email us about a group route.',
    },
    {
      q: 'Are children welcome on the tour?',
      a: 'Children aged 6 and over are very welcome at the reduced rate of €55, and the three-hour format suits families well because there is somewhere to sit at two stops and plenty to look at in between. Under-6s come free but do not get their own tastings. Finnish market food is unusually child-friendly — cinnamon buns, rye bread, cheese and berries all land well — and your guide will steer picky eaters toward the things that work.',
    },
    {
      q: 'How much food is included — do I need lunch as well?',
      a: 'Come hungry: this replaces lunch. Ten tastings across three market halls add up to a full meal, and most guests finish the tour comfortably full and skip dinner until late. Everything on the tasting list is included in the ticket price, along with coffee at the harbour. The only thing you pay for on the day is the tram fare, roughly €6, tapped with a contactless card on board.',
    },
    {
      q: 'What is your cancellation policy?',
      a: 'Cancel more than 48 hours before your tour starts and you get a full refund, no questions asked. Within 48 hours we cannot refund the ticket, because we have already bought and paid for your tastings from our vendors. If you are running late, message the number in your confirmation and we will wait where we can; guests more than 10 minutes late without contact are treated as no-shows, as the group has to move on to keep the route on time. If we ever cancel a tour, you are refunded in full.',
    },
    {
      q: 'Can I buy a gift card or book a private tour?',
      a: 'Both. Gift cards are valid for 12 months on any tour and any date, and are delivered by email immediately. Private tours run for up to 6 guests at €429 with your own chef and a route planned around your group. For corporate and team events larger than six, email us and we will build a custom market route.',
    },
  ],
} as const;

export const reviews = {
  label: 'Reviews',
  headline: 'What guests say.',
  rating: { value: 4.9, count: 214 },
  sources: 'Aggregated from Google and GetYourGuide',
  cards: [
    {
      quote:
        'Our guide had cooked in Helsinki kitchens for a decade and it showed — she walked us past two counters and said flat out that they were not good today. Three hours later we skipped dinner.',
      author: 'Marta K.',
      origin: 'Berlin',
      source: 'Google',
      date: 'January 2026',
    },
    {
      quote:
        'The leipäjuusto with cloudberry jam is the thing I keep telling people about. We went back to two of the stalls the next morning with the printed card.',
      author: 'James R.',
      origin: 'Edinburgh',
      source: 'GetYourGuide',
      date: 'December 2025',
    },
    {
      quote:
        'Eight of us, no microphone, no umbrella held in the air. It felt like a friend who happens to be a chef taking us shopping.',
      author: 'Sofia L.',
      origin: 'Milan',
      source: 'Google',
      date: 'November 2025',
    },
  ],
} as const;

export const footer = {
  legal: [
    { label: 'Terms', href: '/terms/' },
    { label: 'Privacy', href: '/privacy/' },
  ],
} as const;
