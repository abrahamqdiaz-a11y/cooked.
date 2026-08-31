import SectionLabel from '../SectionLabel';
import TastingCard from '../TastingCard';
import { takeHome } from '@/content/site';

export default function TakeHome() {
  return (
    <section className="border-t border-harbor/10 bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-page items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionLabel>{takeHome.label}</SectionLabel>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
            {takeHome.headline}
          </h2>
          <p className="mt-5 max-w-prose text-[0.9375rem] leading-relaxed text-harbor/70 sm:text-base">
            {takeHome.body}
          </p>
        </div>
        <div className="bg-paper px-6 py-12 sm:px-10 sm:py-16">
          <TastingCard />
        </div>
      </div>
    </section>
  );
}
