import Image from 'next/image';
import CTAButton from '../CTAButton';
import Wordmark from '../Wordmark';
import { hero, site } from '@/content/site';
import heroImage from '@/assets/images/hero-market-hall.png';

export default function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[92svh] flex-col justify-end overflow-hidden surface-harbor">
      <Image
        src={heroImage}
        alt="Steam rising over a market hall counter in Helsinki at dusk"
        placeholder="blur"
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      {/* Dark gradient overlay: keeps the wordmark legible over any photograph. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-harbor via-harbor/70 to-harbor/25"
      />

      <div className="mx-auto w-full max-w-page px-5 pb-14 pt-28 sm:px-8 sm:pb-20 sm:pt-32">
        <Wordmark size="lg" tone="light" as="h1" />

        <p className="mt-7 font-display text-2xl italic tracking-tight text-paper sm:mt-9 sm:text-4xl">
          {site.tagline}
        </p>
        <p className="mt-2 text-sm uppercase tracking-label text-candle sm:text-[0.8125rem]">
          {site.secondaryLine}
        </p>

        <p className="mt-6 max-w-xl text-[0.9375rem] leading-relaxed text-paper/80 sm:text-base">
          {hero.intro}
        </p>

        <div className="mt-8 flex flex-col items-stretch gap-3 xs:flex-row xs:items-center sm:mt-10 sm:gap-5">
          <CTAButton variant="inverse" className="px-7 py-4 text-base">
            {hero.primaryCta}
          </CTAButton>
          <a
            href="#route"
            className="group inline-flex items-center justify-center gap-2 py-2 text-sm text-paper/85 underline-offset-8 transition-colors hover:text-candle xs:justify-start"
          >
            {hero.secondaryCta}
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
              &rarr;
            </span>
          </a>
        </div>

        <ul className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-paper/20 pt-5 text-[0.6875rem] uppercase tracking-label text-paper/65 sm:mt-10 sm:text-xs">
          {hero.trustStrip.map((item, i) => (
            <li key={item} className="flex items-center gap-3">
              {i > 0 && <span aria-hidden className="text-paper/30">&middot;</span>}
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
