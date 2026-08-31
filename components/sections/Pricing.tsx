import CTAButton from '../CTAButton';
import MenuItem from '../MenuItem';
import SectionLabel from '../SectionLabel';
import { pricing } from '@/content/site';

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-harbor/10 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionLabel>{pricing.label}</SectionLabel>
        <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
          {pricing.headline}
        </h2>
        <p className="mt-4 text-[0.6875rem] uppercase tracking-label text-smoke sm:text-xs">
          {pricing.spec}
        </p>

        <ul className="mt-10 border-t border-harbor/15">
          {pricing.rows.map((row) => (
            <MenuItem key={row.name} name={row.name} note={row.detail} price={row.price} />
          ))}
        </ul>

        <hr className="rule" />
        <p className="mt-5 text-[0.875rem] leading-relaxed text-harbor/65">{pricing.note}</p>

        <CTAButton className="mt-8 w-full px-7 py-4 text-base sm:w-auto">
          Book your tour — €85
        </CTAButton>
      </div>
    </section>
  );
}
