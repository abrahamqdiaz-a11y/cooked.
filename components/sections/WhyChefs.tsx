import Image from 'next/image';
import SectionLabel from '../SectionLabel';
import { whyChefs } from '@/content/site';
import chefsHands from '@/assets/images/chefs-hands.png';

export default function WhyChefs() {
  return (
    <section id="why" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <SectionLabel>{whyChefs.label}</SectionLabel>
            <h2 className="mt-6 max-w-2xl font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {whyChefs.headline}
            </h2>
            <p className="mt-5 max-w-prose text-[0.9375rem] leading-relaxed text-harbor/70 sm:text-base">
              {whyChefs.standfirst}
            </p>
          </div>

          <div className="lg:col-span-5">
            <Image
              src={chefsHands}
              alt="A chef's hands portioning smoked fish on a market hall counter"
              sizes="(min-width: 1024px) 40vw, 100vw"
              placeholder="blur"
              className="h-56 w-full object-cover sm:h-72 lg:h-full"
            />
          </div>
        </div>

        <ul className="mt-14 grid gap-px border-t border-harbor/15 sm:mt-16 md:grid-cols-3">
          {whyChefs.columns.map((col, i) => (
            <li key={col.title} className="pt-7 md:px-7 md:first:pl-0 md:last:pr-0">
              <span className="font-sans text-[0.6875rem] tabular-nums tracking-label text-candle">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">{col.title}</h3>
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
