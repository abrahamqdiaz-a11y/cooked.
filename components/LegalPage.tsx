import Link from 'next/link';
import Wordmark from './Wordmark';
import Footer from './sections/Footer';

/** Shared shell for the Terms and Privacy pages. */
export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="border-b border-harbor/10 bg-paper">
        <div className="mx-auto flex h-20 max-w-page items-center px-5 sm:px-8">
          <Link href="/" aria-label="Cooked Helsinki — home">
            <Wordmark size="sm" />
          </Link>
        </div>
      </header>

      <main className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-4 text-[0.6875rem] uppercase tracking-label text-smoke-deep">
            Last updated {updated}
          </p>
          <hr className="rule my-10" />
          <div className="space-y-8 text-[0.9375rem] leading-relaxed text-harbor/80 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-harbor [&_p]:mt-3">
            {children}
          </div>
          <p className="mt-12">
            <Link href="/" className="text-sea underline underline-offset-4">
              &larr; Back to the tour
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
