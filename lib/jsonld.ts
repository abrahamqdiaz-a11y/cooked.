import { site, faq, pricing, BOOKING_URL } from '@/content/site';

/**
 * Structured data emitted in the document head.
 * Kept in one place so a copy change in content/site.ts flows through
 * to the markup search engines read.
 */

export const localBusinessLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'TouristInformationCenter'],
  '@id': `${site.url}/#business`,
  name: site.name,
  description:
    'Chef-led food walking tours through Helsinki’s three great market halls: Hakaniemi, Vanha Kauppahalli and Hietalahti.',
  slogan: site.tagline,
  url: site.url,
  email: site.email,
  image: `${site.url}/images/og-cover.png`,
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hakaniemenranta 1',
    postalCode: '00530',
    addressLocality: 'Helsinki',
    addressCountry: 'FI',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 60.1786, longitude: 24.9506 },
  areaServed: { '@type': 'City', name: 'Helsinki' },
  sameAs: [site.social.instagram, site.social.tiktok],
};

export const productLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  '@id': `${site.url}/#tour`,
  name: 'Cooked Helsinki Market Hall Food Tour',
  description:
    'A 3-hour chef-led walking tour of Helsinki’s three great market halls with ten tastings, capped at 8 guests.',
  image: `${site.url}/images/og-cover.png`,
  brand: { '@type': 'Brand', name: site.name },
  offers: {
    '@type': 'Offer',
    price: pricing.rows[0].price.replace('€', ''),
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    url: BOOKING_URL,
  },
};

export const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.items.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export const allJsonLd = [localBusinessLd, productLd, faqLd];
