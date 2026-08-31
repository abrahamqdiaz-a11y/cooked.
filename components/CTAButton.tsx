import Link from 'next/link';
import { BOOKING_URL } from '@/content/site';

type Variant = 'book' | 'inverse' | 'ghost';

const base =
  'inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-sm font-medium ' +
  'tracking-wide transition-colors duration-200 disabled:opacity-50';

const variants: Record<Variant, string> = {
  // Lingonberry: the conversion action. Reads on every ground the site uses,
  // light or dark, so booking always looks the same wherever it appears.
  book: 'bg-lingonberry text-paper hover:bg-lingonberry-deep',
  // Light-on-dark, for a booking CTA sitting on a photograph.
  inverse: 'bg-paper text-harbor hover:bg-candle-wash',
  // Secondary actions stay sea blue.
  ghost: 'border border-current text-sea hover:bg-sea hover:text-paper',
};

export default function CTAButton({
  children,
  href = BOOKING_URL,
  variant = 'book',
  className = '',
  external,
}: {
  children: React.ReactNode;
  /** Defaults to the single BOOKING_URL. Pass a href only for non-booking CTAs. */
  href?: string;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  const isExternal = external ?? /^https?:|^mailto:/.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        className={`${base} ${variants[variant]} ${className}`}
        {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
