import Link from 'next/link';
import { BOOKING_URL } from '@/content/site';

type Variant = 'primary' | 'inverse' | 'ghost';

const base =
  'inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-sm font-medium ' +
  'tracking-wide transition-colors duration-200 disabled:opacity-50';

const variants: Record<Variant, string> = {
  // Sea blue: the default booking action everywhere on light surfaces.
  primary: 'bg-sea text-paper hover:bg-sea-deep',
  // On the harbour-dark hero and footer.
  inverse: 'bg-paper text-harbor hover:bg-candle hover:text-harbor',
  ghost: 'border border-current text-sea hover:bg-sea hover:text-paper',
};

export default function CTAButton({
  children,
  href = BOOKING_URL,
  variant = 'primary',
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
