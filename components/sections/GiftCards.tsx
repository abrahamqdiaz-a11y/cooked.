import CTAButton from '../CTAButton';
import { giftCards, GIFT_URL } from '@/content/site';

export default function GiftCards() {
  return (
    <section className="bg-candle-wash">
      <div className="mx-auto flex max-w-page flex-col gap-6 px-5 py-12 sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:px-8">
        <div className="flex items-baseline gap-4">
          <span aria-hidden className="hidden h-px w-10 shrink-0 self-center bg-candle-deep sm:block" />
          <p className="font-display text-xl italic tracking-tight sm:text-2xl">
            {giftCards.headline}
            <span className="mt-1 block font-sans text-[0.8125rem] not-italic text-harbor/70">
              {giftCards.body}
            </span>
          </p>
        </div>
        <CTAButton href={GIFT_URL} variant="ghost" className="shrink-0">
          {giftCards.cta}
        </CTAButton>
      </div>
    </section>
  );
}
