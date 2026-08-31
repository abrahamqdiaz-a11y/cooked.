import CTAButton from '../CTAButton';
import { pricing } from '@/content/site';

export default function Pricing() {
  return (
    <section id="pricing" className="bg-harbor py-20 text-paper sm:py-28">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <p className="eyebrow text-candle">The whole afternoon</p>
        <h2 className="mt-5 font-display text-6xl font-black leading-none tracking-tight sm:text-8xl">
          €85
        </h2>
        <p className="mx-auto mt-5 max-w-2xl font-display text-2xl italic text-paper/90">
          Ten tastings, three hours, one chef and a very full stomach.
        </p>
        <p className="mt-5 text-sm uppercase tracking-[0.12em] text-paper/60">{pricing.spec}</p>
        <div className="mx-auto mt-10 max-w-xl border-y border-paper/20 py-6">
          <p className="text-sm text-paper/75">Children 6–12 €55 · Under 6 free · All tastings and VAT included</p>
          <p className="mt-2 text-sm text-candle">{pricing.availability}</p>
        </div>
        <CTAButton className="mt-10 w-full bg-candle px-9 py-5 text-base text-harbor hover:bg-paper sm:w-auto">Choose a date</CTAButton>
        <p className="mt-5 text-xs text-paper/50">Tram fare (~€6) is paid on board.</p>
      </div>
    </section>
  );
}
