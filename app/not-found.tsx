import Link from 'next/link';
import Wordmark from '@/components/Wordmark';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 text-center surface-harbor">
      <Wordmark size="md" tone="light" />
      <p className="mt-10 font-display text-3xl tracking-tight sm:text-4xl">
        Nothing on this counter.
      </p>
      <p className="mt-4 max-w-md text-[0.9375rem] text-paper/70">
        That page has been cleared away. The tour, however, still runs three times a week.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-sm bg-paper px-6 py-3.5 text-sm text-harbor transition-colors hover:bg-candle"
      >
        Back to Cooked Helsinki
      </Link>
    </main>
  );
}
