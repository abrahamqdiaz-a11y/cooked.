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
          DEFAULT: '#3E6B7A', // primary accent — CTAs, prices, links
          deep: '#345A67', // hover/pressed state for sea-filled controls
        },
        candle: '#C49A5C', // warm accent — sparing
        smoke: '#8A9199', // muted — labels, rules, quiet UI
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
