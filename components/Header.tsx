'use client';

import { useEffect, useState } from 'react';
import CTAButton from './CTAButton';
import Wordmark from './Wordmark';
import { nav } from '@/content/site';

/**
 * Sticky header. Hidden over the hero so the wordmark there carries the brand,
 * then slides in once the visitor scrolls past it, always with a Book Now CTA.
 */
export default function Header() {
  const [shown, setShown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 320);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock the page while the mobile panel is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-harbor/10 bg-paper/95 backdrop-blur transition-[transform,opacity] duration-300 ${
        shown || menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
      aria-hidden={!shown && !menuOpen}
    >
      <div className="mx-auto flex h-16 max-w-page items-center gap-6 px-5 sm:px-8">
        <a href="#top" className="shrink-0" aria-label="Cooked Helsinki — back to top">
          <Wordmark size="sm" />
        </a>

        <nav aria-label="Sections" className="ml-auto hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.8125rem] text-harbor/75 transition-colors hover:text-sea"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <CTAButton className="px-4 py-2.5 text-[0.8125rem] sm:px-5">Book now</CTAButton>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="-mr-1 p-2 lg:hidden"
          >
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              {menuOpen ? (
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" />
              ) : (
                <path d="M2 6h16M2 13h16" stroke="currentColor" strokeWidth="1.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!menuOpen}
        className="border-t border-harbor/10 bg-paper lg:hidden"
      >
        <nav aria-label="Sections" className="mx-auto max-w-page px-5 py-2 sm:px-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-harbor/10 py-4 font-display text-lg tracking-tight last:border-b-0"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
