import Image from 'next/image';
import SectionLabel from '../SectionLabel';
import { smallGroups } from '@/content/site';
import steam from '@/assets/images/steam-winter-light.png';

export default function SmallGroups() {
  return (
    <section className="relative isolate overflow-hidden surface-harbor">
      <Image
        src={steam}
        alt=""
        aria-hidden
        sizes="100vw"
        placeholder="blur"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-harbor/70" />

      <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <SectionLabel tone="light" className="justify-center">
          {smallGroups.label}
        </SectionLabel>
        <blockquote className="mt-7">
          <p className="font-display text-2xl font-medium leading-[1.25] tracking-tight text-paper sm:text-3xl lg:text-[2.25rem]">
            {smallGroups.quote}
          </p>
        </blockquote>
        <p className="mt-7 text-[0.6875rem] uppercase tracking-label text-candle">
          Maximum 8 guests &middot; Always
        </p>
      </div>
    </section>
  );
}
