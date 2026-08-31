import { site } from '@/content/site';

/**
 * "COOKED" in the display serif with "HELSINKI" letterspaced beneath it.
 * `size` controls the whole lockup so header and hero stay in proportion.
 */
export default function Wordmark({
  size = 'md',
  tone = 'dark',
  as: Tag = 'div',
}: {
  size?: 'sm' | 'md' | 'lg';
  tone?: 'dark' | 'light';
  as?: 'div' | 'h1' | 'span';
}) {
  const scale = {
    sm: { primary: 'text-xl sm:text-2xl', secondary: 'text-[0.5rem] sm:text-[0.5625rem]' },
    md: { primary: 'text-3xl sm:text-4xl', secondary: 'text-[0.625rem] sm:text-xs' },
    lg: { primary: 'text-5xl xs:text-6xl sm:text-7xl lg:text-8xl', secondary: 'text-xs sm:text-sm' },
  }[size];

  const color = tone === 'light' ? 'text-paper' : 'text-harbor';
  const sub = tone === 'light' ? 'text-paper/70' : 'text-smoke';

  return (
    <Tag className={`inline-block leading-none ${color}`}>
      <span className={`block font-display font-black uppercase leading-[0.85] tracking-tight ${scale.primary}`}>
        {site.wordmark.primary}
      </span>
      <span
        className={`mt-1.5 block font-sans font-medium uppercase tracking-wordmark ${scale.secondary} ${sub}`}
      >
        {site.wordmark.secondary}
      </span>
    </Tag>
  );
}
