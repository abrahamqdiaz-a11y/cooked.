/**
 * A restaurant-menu row: name, optional note, dotted leader, price on the right.
 * Used for both the tasting list (numbered, no price) and the pricing table
 * (priced, one row highlighted).
 */
export default function MenuItem({
  name,
  note,
  price,
  index,
  badge,
  highlight = false,
}: {
  name: string;
  note?: string;
  price?: string;
  /** Optional two-digit ordinal, set small in lingonberry. */
  index?: number;
  /** Short lingonberry tag, e.g. "Most popular". At most one per list. */
  badge?: string;
  /** Lifts the row onto the candle wash — the recommended option. */
  highlight?: boolean;
}) {
  return (
    <li
      className={
        highlight
          ? 'border-t border-harbor/10 first:border-t-0 -mx-4 bg-candle-wash px-4 py-5 sm:-mx-6 sm:px-6 sm:py-6'
          : 'border-t border-harbor/10 py-5 first:border-t-0 sm:py-6'
      }
    >
      <div className="flex flex-wrap items-baseline">
        {index !== undefined && (
          <span className="mr-3 font-sans text-[0.6875rem] tabular-nums tracking-label text-lingonberry">
            {String(index).padStart(2, '0')}
          </span>
        )}
        <h3 className="font-display text-lg font-semibold tracking-tight sm:text-xl">{name}</h3>
        {badge && (
          <span className="ml-3 rounded-sm bg-lingonberry px-2 py-1 text-[0.625rem] uppercase leading-none tracking-label text-paper">
            {badge}
          </span>
        )}
        {price && (
          <>
            <span aria-hidden className="leader hidden sm:block" />
            <span className="ml-auto pl-4 font-display text-lg font-semibold text-lingonberry sm:ml-0 sm:pl-0 sm:text-xl">
              {price}
            </span>
          </>
        )}
      </div>
      {note && (
        <p
          className={`mt-1.5 max-w-prose text-[0.9375rem] leading-relaxed text-harbor/70 ${
            index !== undefined ? 'sm:pl-8' : ''
          }`}
        >
          {note}
        </p>
      )}
    </li>
  );
}
