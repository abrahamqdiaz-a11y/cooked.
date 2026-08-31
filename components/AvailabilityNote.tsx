import { pricing } from '@/content/site';

/**
 * Availability indicator. The lingonberry dot is the same conversion colour as
 * the booking button, so "you can book this" reads at a glance.
 */
export default function AvailabilityNote({ className = '' }: { className?: string }) {
  return (
    <p className={`flex items-start gap-2.5 text-[0.8125rem] text-harbor/75 ${className}`}>
      <span aria-hidden className="relative mt-[0.4rem] flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full rounded-full bg-lingonberry opacity-70" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-lingonberry" />
      </span>
      {pricing.availability}
    </p>
  );
}
