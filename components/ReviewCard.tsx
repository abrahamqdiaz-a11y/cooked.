import Stars from './Stars';

export type Review = {
  quote: string;
  author: string;
  origin: string;
  source: string;
  date: string;
};

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col border border-harbor/12 bg-white p-6 sm:p-7">
      <Stars value={5} className="text-candle" />
      <blockquote className="mt-4 flex-1">
        <p className="font-display text-[1.0625rem] leading-relaxed tracking-tight">
          &ldquo;{review.quote}&rdquo;
        </p>
      </blockquote>
      <figcaption className="mt-6 border-t border-harbor/10 pt-4 text-[0.8125rem] text-smoke">
        <span className="font-medium text-harbor">{review.author}</span>, {review.origin}
        <span className="mt-0.5 block text-xs uppercase tracking-label">
          {review.source} · {review.date}
        </span>
      </figcaption>
    </figure>
  );
}
