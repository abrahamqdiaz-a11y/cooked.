import Wordmark from '../Wordmark';
import { site, nav, footer } from '@/content/site';

export default function Footer() {
  return (
    <footer className="surface-harbor">
      <div className="mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Wordmark size="md" tone="light" />
            <p className="mt-6 font-display text-lg italic text-paper/80">{site.tagline}</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block text-sm text-paper/75 underline underline-offset-4 transition-colors hover:text-candle"
            >
              {site.email}
            </a>
          </div>

          <nav aria-label="Footer">
            <p className="text-[0.6875rem] uppercase tracking-label text-paper/50">Tour</p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-paper/75 transition-colors hover:text-candle">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[0.6875rem] uppercase tracking-label text-paper/50">Elsewhere</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-paper/75 transition-colors hover:text-candle"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={site.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-paper/75 transition-colors hover:text-candle"
                >
                  TikTok
                </a>
              </li>
              {footer.legal.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-paper/75 transition-colors hover:text-candle">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="rule-inverse my-12" />

        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={site.sister.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-sm text-paper/75 transition-colors hover:text-candle"
          >
            {site.sister.label}{' '}
            <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5">
              &rarr;
            </span>
          </a>
          <p className="text-[0.6875rem] uppercase tracking-label text-paper/50">
            {site.businessLine}
          </p>
        </div>
      </div>
    </footer>
  );
}
