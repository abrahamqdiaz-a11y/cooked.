import Image from 'next/image';
import SectionLabel from '../SectionLabel';
import MenuItem from '../MenuItem';
import { tastings } from '@/content/site';
import overhead from '@/assets/images/tasting-overhead.png';

export default function Tastings() {
  return (
    <section id="tastings" className="bg-oatmeal py-20 sm:py-28">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <SectionLabel>{tastings.label}</SectionLabel>
              <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
                {tastings.headline}
              </h2>
              <p className="mt-5 max-w-prose text-[0.9375rem] leading-relaxed text-harbor/70">
                {tastings.standfirst}
              </p>
              <Image
                src={overhead}
                alt="Overhead view of rye bread, smoked fish and berries on a zinc counter"
                sizes="(min-width: 1024px) 30vw, 100vw"
                placeholder="blur"
                className="mt-8 hidden aspect-square w-full object-cover lg:block"
              />
            </div>
          </div>

          {/* The menu card itself. */}
          <div className="lg:col-span-8">
            <div className="border border-harbor/12 bg-white px-5 py-2 sm:px-9 sm:py-4">
              <ol>
                {tastings.items.map((item, i) => (
                  <MenuItem key={item.name} index={i + 1} name={item.name} note={item.note} />
                ))}
              </ol>
            </div>
            <p className="mt-6 max-w-prose text-[0.9375rem] leading-relaxed text-harbor/70">
              {tastings.footnote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
