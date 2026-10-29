import Image from 'next/image';
import CTAButton from '../CTAButton';
import SectionLabel from '../SectionLabel';
import { privateTours, site } from '@/content/site';
import counter from '@/assets/images/market-counter.png';

export default function PrivateTours() {
  const mailto = `mailto:${site.corporateEmail}?subject=${encodeURIComponent(privateTours.subject)}`;

  return (
    <section id="private" className="bg-mist py-20 sm:py-28">
      <div className="mx-auto grid max-w-page gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Image
            src={counter}
            alt="A market hall counter laid out for a private tasting"
            sizes="(min-width: 1024px) 40vw, 100vw"
            placeholder="blur"
            className="h-64 w-full object-cover sm:h-80 lg:h-full"
          />
        </div>

        <div className="lg:col-span-7 lg:pl-4">
          <SectionLabel>{privateTours.label}</SectionLabel>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
            {privateTours.headline}
          </h2>
          <p className="mt-5 max-w-prose text-[0.9375rem] leading-relaxed text-harbor/70 sm:text-base">
            {privateTours.body}
          </p>

          <hr className="rule my-8" />

          <p className="max-w-prose font-display text-lg leading-relaxed tracking-tight sm:text-xl">
            {privateTours.corporate}
          </p>

          <div className="mt-7 flex flex-col gap-4 xs:flex-row xs:items-center">
            <CTAButton href={mailto} variant="ghost" className="px-6 py-3.5">
              {privateTours.cta}
            </CTAButton>
            <span className="text-[0.8125rem] text-smoke-deep">{site.corporateEmail}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
