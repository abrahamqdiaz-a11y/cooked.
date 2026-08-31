import type { Config } from 'tailwindcss';

/**
 * Brand tokens live here and in app/globals.css (as CSS custom properties).
 * Change a colour once, it changes everywhere.
 */
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // "Smoke & Fire", Nordic edition
        harbor: '#1E2A30', // dark surface — Helsinki waterfront at dusk
        paper: '#FAF9F6', // warm white background
        sea: {
          DEFAULT: '#3E6B7A', // links, informational UI, secondary actions
          deep: '#345A67', // hover/pressed state for sea-filled controls
        },
        // The conversion colour. Booking buttons, prices, availability, badges
        // and the tasting numerals — and deliberately nothing else.
        lingonberry: {
          DEFAULT: '#9E463A',
          deep: '#83382E', // hover/pressed
        },
        candle: {
          DEFAULT: '#C49A5C', // warm accent on dark surfaces
          wash: '#F1E5D2', // tinted ground for the gift, vendor and pricing bands
          // The same warmth as text. Two steps darker than a straight #8A6633
          // so small text clears WCAG AA on the tinted grounds too, not just paper.
          deep: '#7A5A2D',
        },
        // Section grounds that break up a long run of near-white.
        oatmeal: '#EFE7DA', // food-led sections: tastings, tasting card, reviews
        mist: '#DDE8EA', // informational sections: route, practical details
        smoke: {
          DEFAULT: '#8A9199', // hairline rules and dividers
          // Label and meta *text*. The base smoke only reaches 3.0:1 on paper
          // and 2.6:1 on the tints, which fails AA at label sizes.
          deep: '#60656B',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.18em',
        wordmark: '0.42em',
      },
      maxWidth: {
        prose: '62ch',
        page: '76rem',
      },
      screens: {
        xs: '400px',
      },
      keyframes: {
        'fade-down': {
          '0%': { opacity: '0', transform: 'translateY(-0.5rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(0.75rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-down': 'fade-down 240ms ease-out both',
        'fade-up': 'fade-up 600ms ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
