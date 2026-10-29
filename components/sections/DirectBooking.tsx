import CTAButton from '../CTAButton';
import SectionLabel from '../SectionLabel';
import { directBooking } from '@/content/site';

export default function DirectBooking() {
  return (
    <section className="bg-candle-wash text-harbor">
      <div className="mx-auto flex max-w-page flex-col gap-8 px-5 py-14 sm:px-8 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="max-w-2xl">
          <SectionLabel>{directBooking.label}</SectionLabel>
          <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
            {directBooking.headlineLead}{' '}
            <span className="text-candle-deep">{directBooking.headlineHighlight}</span>
          </h2>
          <p className="mt-4 max-w-prose text-[0.9375rem] leading-relaxed text-harbor/70">
            {directBooking.body}
          </p>
        </div>
        <CTAButton className="shrink-0 px-7 py-4">
          {directBooking.cta}
        </CTAButton>
      </div>
    </section>
  );
}
