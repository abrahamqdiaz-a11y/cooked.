/**
 * A restaurant-menu row: name, optional note, dotted leader, price on the right.
 * Used for both the tasting list (no price) and the pricing table (price).
 */
export default function MenuItem({
  name,
  note,
  price,
  index,
}: {
  name: string;
  note?: string;
  price?: string;
  /** Optional two-digit ordinal, set small in the smoke grey. */
  index?: number;
}) {
  return (
    <li className="border-t border-harbor/10 py-5 first:border-t-0 sm:py-6">
      <div className="flex flex-wrap items-baseline">
        {index !== undefined && (
          <span className="mr-3 font-sans text-[0.6875rem] tabular-nums tracking-label text-smoke">
            {String(index).padStart(2, '0')}
          </span>
        )}
        <h3 className="font-display text-lg font-semibold tracking-tight sm:text-xl">{name}</h3>
        {price && (
          <>
            <span aria-hidden className="leader hidden sm:block" />
            <span className="ml-auto pl-4 font-display text-lg font-semibold text-sea sm:ml-0 sm:pl-0 sm:text-xl">
              {price}
            </span>
          </>
        )}
      </div>
      {note && (
        <p className={`mt-1.5 max-w-prose text-[0.9375rem] leading-relaxed text-harbor/70 ${index !== undefined ? 'sm:pl-8' : ''}`}>
          {note}
        </p>
      )}
    </li>
  );
}
