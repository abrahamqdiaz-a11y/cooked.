import Image from 'next/image';
import CTAButton from '../CTAButton';
import Wordmark from '../Wordmark';
import { hero } from '@/content/site';
import heroImage from '@/assets/images/hero-market-hall.png';
import tastingImage from '@/assets/images/tasting-overhead.png';

export default function Hero() {
  return (
    <section id="top" className="overflow-hidden bg-paper pt-20 sm:pt-24">
      <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-[90rem] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative z-10 flex flex-col justify-between px-5 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <Wordmark size="md" as="h1" />
          <div className="py-16 lg:py-20">
            <p className="eyebrow">A chef-led food walk through Helsinki</p>
            <h2 className="mt-6 max-w-2xl font-display text-[clamp(3.8rem,8vw,7.8rem)] font-black uppercase leading-[0.78] tracking-[-0.055em]">
              Eat Helsinki<br /><span className="text-lingonberry">like a chef.</span>
            </h2>
            <p className="mt-8 max-w-lg font-display text-xl leading-snug sm:text-2xl">
              Ten tastings, three market halls and the cooks who know what is good today.
            </p>
            <div className="mt-9 flex flex-col gap-4 xs:flex-row xs:items-center">
              <CTAButton className="px-7 py-4 text-base">{hero.primaryCta}</CTAButton>
              <a href="#tastings" className="text-sm font-semibold underline decoration-lingonberry decoration-2 underline-offset-8">
                Start with the food &darr;
              </a>
            </div>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-[0.12em]">
            {hero.trustStrip.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>

        <div className="relative min-h-[62svh] bg-harbor lg:min-h-0">
          <Image src={heroImage} alt="Steam rising over a Helsinki market hall counter" placeholder="blur" priority sizes="(min-width: 1024px) 55vw, 100vw" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-harbor/60 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 bg-candle px-4 py-3 font-display text-sm font-bold uppercase tracking-wide text-harbor sm:bottom-8 sm:left-8">
            Come hungry. This is lunch.
          </div>
          <div className="absolute -bottom-8 right-5 hidden w-44 rotate-3 border-[10px] border-paper bg-paper shadow-2xl sm:block lg:bottom-10 lg:right-10">
            <Image src={tastingImage} alt="Finnish tastings laid out on a table" placeholder="blur" sizes="176px" className="aspect-[4/5] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
