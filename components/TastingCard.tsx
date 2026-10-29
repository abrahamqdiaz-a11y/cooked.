import { takeHome, site } from '@/content/site';

/**
 * Mockup of the printed card every guest takes home. Set like a restaurant
 * menu, with a placeholder QR block standing in for the real vendor-list code.
 */
export default function TastingCard() {
  const { card } = takeHome;

  return (
    <div className="mx-auto w-full max-w-sm rotate-[-1.25deg] border border-harbor/15 bg-white p-7 shadow-[0_18px_50px_-24px_rgba(30,42,48,0.45)] sm:p-8">
      <div className="text-center">
        <span className="block font-display text-2xl font-black uppercase leading-none tracking-tight">
          {site.wordmark.primary}
        </span>
        <span className="mt-1 block text-[0.5rem] uppercase tracking-wordmark text-smoke-deep">
          {site.wordmark.secondary}
        </span>
      </div>

      <hr className="rule my-5" />

      <p className="text-center text-[0.625rem] uppercase tracking-label text-smoke-deep">{card.date}</p>
      <h3 className="mt-2 text-center font-display text-sm italic text-harbor/80">{card.heading}</h3>

      <ul className="mt-5 space-y-3">
        {card.lines.map((line) => (
          <li key={line.item}>
            <p className="font-display text-[0.9375rem] font-semibold tracking-tight">{line.item}</p>
            <p className="text-[0.6875rem] uppercase tracking-label text-smoke-deep">{line.vendor}</p>
          </li>
        ))}
      </ul>

      <hr className="rule my-5" />

      <div className="flex items-center gap-4">
        {/* QR placeholder — replaced at print time with the real vendor-list code. */}
        <div
          aria-hidden
          className="grid h-14 w-14 shrink-0 grid-cols-4 grid-rows-4 gap-0.5 border border-harbor/20 p-1"
        >
          {[1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1].map((on, i) => (
            <span key={i} className={on ? 'bg-harbor' : 'bg-transparent'} />
          ))}
        </div>
        <p className="text-[0.6875rem] uppercase leading-relaxed tracking-label text-smoke-deep">
          {card.qrCaption}
        </p>
      </div>
    </div>
  );
}
