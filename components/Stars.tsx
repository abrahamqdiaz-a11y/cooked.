/** Five-star rating mark. Decorative: the numeric rating is always in text nearby. */
export default function Stars({ value = 5, className = '' }: { value?: number; className?: string }) {
  return (
    <span aria-hidden className={`inline-flex gap-0.5 ${className}`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill={i < Math.round(value) ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.2">
          <path d="M10 1.6l2.47 5.16 5.63.77-4.08 3.9 1 5.58L10 14.36l-5.02 2.65 1-5.58L1.9 7.53l5.63-.77L10 1.6z" />
        </svg>
      ))}
    </span>
  );
}
