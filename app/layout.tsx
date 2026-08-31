import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import { site } from '@/content/site';
import { allJsonLd } from '@/lib/jsonld';

// Loaded through next/font so the faces are self-hosted and swap without layout shift.
const display = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  axes: ['SOFT', 'WONK', 'opsz'],
});

const body = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const description =
  'A 3-hour chef-led food tour through Helsinki’s three great market halls. Ten tastings, groups capped at 8, year-round. Book direct from €85.';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Cooked Helsinki — Chef-Led Food Tours in Helsinki's Market Halls",
  description,
  applicationName: site.name,
  keywords: [
    'Helsinki food tour',
    'market hall tour Helsinki',
    'chef-led food tour Finland',
    'Hakaniemi Market Hall',
    'Vanha Kauppahalli',
    'Hietalahti Market Hall',
    'things to do in Helsinki',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: site.url,
    siteName: site.name,
    title: "Cooked Helsinki — Chef-Led Food Tours in Helsinki's Market Halls",
    description,
    images: [
      {
        url: '/images/og-cover.png',
        width: 1200,
        height: 630,
        alt: 'Cooked Helsinki — chef-led market hall food tours',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cooked Helsinki — Chef-Led Food Tours in Helsinki's Market Halls",
    description,
    images: ['/images/og-cover.png'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#1E2A30',
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        {allJsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            // Content is authored by us in content/site.ts, not user input.
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
