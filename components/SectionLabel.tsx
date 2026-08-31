/** Small-caps, letterspaced section label with a hairline rule — menu-card grammar. */
export default function SectionLabel({
  children,
  tone = 'dark',
  className = '',
}: {
  children: React.ReactNode;
  tone?: 'dark' | 'light';
  className?: string;
}) {
  const color = tone === 'light' ? 'text-paper/60' : 'text-smoke-deep';
  const rule = tone === 'light' ? 'bg-paper/30' : 'bg-smoke/40';

  return (
    <p className={`flex items-center gap-3 text-[0.6875rem] uppercase tracking-label ${color} ${className}`}>
      <span aria-hidden className={`h-px w-6 ${rule}`} />
      {children}
    </p>
  );
}
