import SectionLabel from '../SectionLabel';
import RouteMap from '../RouteMap';
import { route } from '@/content/site';

export default function Route() {
  return (
    <section id="route" className="border-t border-harbor/10 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <SectionLabel>{route.label}</SectionLabel>
        <h2 className="mt-6 max-w-2xl font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
          {route.headline}
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Numbered vertical steps — reads as a timeline at every width. */}
          <ol className="lg:col-span-7">
            {route.stops.map((stop, i) => (
              <li key={stop.n} className="relative flex gap-5 pb-10 last:pb-0 sm:gap-7">
                {/* Connector between markers */}
                {i < route.stops.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-[1.375rem] top-12 h-[calc(100%-2.5rem)] w-px bg-harbor/15 sm:left-[1.5rem]"
                  />
                )}
                <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-harbor/15 bg-paper font-sans text-xs tabular-nums tracking-wide text-sea sm:h-12 sm:w-12">
                  {stop.n}
                </span>
                <div className="min-w-0 flex-1 pt-1.5">
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                      {stop.title}
                    </h3>
                    <span className="text-[0.6875rem] uppercase tracking-label text-smoke">
                      {stop.meta}
                    </span>
                  </div>
                  <p className="mt-1 font-display text-[0.9375rem] italic text-candle">
                    {stop.subtitle}
                  </p>
                  <p className="mt-3 max-w-prose text-[0.9375rem] leading-relaxed text-harbor/70">
                    {stop.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="lg:col-span-5">
            <div className="border border-harbor/12 bg-paper p-5 sm:p-7 lg:sticky lg:top-24">
              <RouteMap className="mx-auto h-auto w-full max-w-xs lg:max-w-none" />
              <hr className="rule my-5" />
              <p className="text-[0.875rem] leading-relaxed text-harbor/70">{route.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
