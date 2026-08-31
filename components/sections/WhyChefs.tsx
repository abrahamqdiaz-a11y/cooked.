import Image from 'next/image';
import { whyChefs } from '@/content/site';
import chefsHands from '@/assets/images/chefs-hands.png';

export default function WhyChefs() {
  return (
    <section id="why" className="bg-butter py-20 sm:py-32">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <p className="eyebrow">Your guide has the good knives</p>
            <h2 className="mt-6 max-w-2xl font-display text-4xl font-black uppercase leading-[0.92] tracking-[-0.035em] sm:text-6xl">
              {whyChefs.headline}
            </h2>
            <p className="mt-7 max-w-prose text-lg leading-relaxed text-harbor/75">
              {whyChefs.standfirst}
            </p>
          </div>

          <div className="relative lg:col-span-6">
            <Image
              src={chefsHands}
              alt="A chef's hands portioning smoked fish on a market hall counter"
              sizes="(min-width: 1024px) 40vw, 100vw"
              placeholder="blur"
              className="h-[28rem] w-full -rotate-1 object-cover shadow-xl sm:h-[36rem]"
            />
            <p className="absolute -bottom-5 -left-3 rotate-2 bg-lingonberry px-5 py-4 font-display text-lg font-bold italic text-paper sm:left-8">No scripts. No umbrella in the air.</p>
          </div>
        </div>

        <ul className="mt-20 grid gap-8 border-t-2 border-harbor pt-8 md:grid-cols-3">
          {whyChefs.columns.map((col, i) => (
            <li key={col.title} className="md:px-7 md:first:pl-0 md:last:pr-0">
              <span className="font-sans text-[0.6875rem] tabular-nums tracking-label text-candle-deep">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">{col.title}</h3>
              <p className="mt-3 max-w-prose text-[0.9375rem] leading-relaxed text-harbor/70">
                {col.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
