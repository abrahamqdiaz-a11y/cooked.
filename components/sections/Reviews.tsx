import ReviewCard from '../ReviewCard';
import SectionLabel from '../SectionLabel';
import Stars from '../Stars';
import { reviews } from '@/content/site';

export default function Reviews() {
  return (
    <section id="reviews" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel>{reviews.label}</SectionLabel>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
              {reviews.headline}
            </h2>
          </div>
          <div className="sm:text-right">
            <div className="flex items-center gap-3 sm:justify-end">
              <Stars value={reviews.rating.value} className="text-candle-deep" />
              <span className="font-display text-xl font-semibold">{reviews.rating.value}</span>
            </div>
            <p className="mt-2 text-[0.6875rem] uppercase tracking-label text-smoke-deep">
              {reviews.rating.count} reviews &middot; {reviews.sources}
            </p>
          </div>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.cards.map((review) => (
            <li key={review.author}>
              <ReviewCard review={review} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
