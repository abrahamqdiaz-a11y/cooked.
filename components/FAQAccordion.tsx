'use client';

import { useState } from 'react';

export type FAQItem = { q: string; a: string };

/**
 * Native <details> would be simpler, but we want a controlled single-open
 * accordion with an animated marker, so this is a small client component.
 * Answers stay in the DOM either way, so they remain crawlable.
 */
export default function FAQAccordion({ items }: { items: readonly FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-harbor/15">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;

        return (
          <div key={item.q} className="border-b border-harbor/15">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-start justify-between gap-6 py-5 text-left transition-colors hover:text-sea"
              >
                <span className="font-display text-base font-semibold tracking-tight sm:text-lg">
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className={`mt-1 shrink-0 text-sea transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-6 pr-8"
            >
              <p className="max-w-prose text-[0.9375rem] leading-relaxed text-harbor/75">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
