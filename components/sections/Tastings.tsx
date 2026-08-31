import Image from 'next/image';
import MenuItem from '../MenuItem';
import { tastings } from '@/content/site';
import overhead from '@/assets/images/tasting-overhead.png';

export default function Tastings() {
  return (
    <section id="tastings" className="bg-tomato py-20 text-paper sm:py-32">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <p className="eyebrow text-candle">The menu changes. The appetite does not.</p>
              <h2 className="mt-6 font-display text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] sm:text-7xl">
                {tastings.headline}
              </h2>
              <p className="mt-6 max-w-prose text-base leading-relaxed text-paper/75">
                {tastings.standfirst}
              </p>
              <Image
                src={overhead}
                alt="Overhead view of rye bread, smoked fish and berries on a zinc counter"
                sizes="(min-width: 1024px) 30vw, 100vw"
                placeholder="blur"
                className="mt-10 hidden aspect-[4/5] w-full rotate-1 border-8 border-paper object-cover shadow-2xl lg:block"
              />
            </div>
          </div>

          {/* The menu card itself. */}
          <div className="lg:col-span-8">
            <div className="border-y-2 border-paper/70 px-1 py-2 sm:px-5 sm:py-4 [&_li]:border-paper/20 [&_p]:text-paper/70">
              <ol>
                {tastings.items.map((item, i) => (
                  <MenuItem key={item.name} index={i + 1} name={item.name} note={item.note} />
                ))}
              </ol>
            </div>
            <p className="mt-6 max-w-prose text-[0.9375rem] leading-relaxed text-paper/70">
              {tastings.footnote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
