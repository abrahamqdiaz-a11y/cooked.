import SectionLabel from '../SectionLabel';
import { vendors } from '@/content/site';

export default function Vendors() {
  return (
    <section className="bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <hr className="rule" />
        <div className="pt-8">
          <SectionLabel>{vendors.label}</SectionLabel>
          <p className="mt-6 font-display text-xl leading-relaxed tracking-tight sm:text-2xl">
            {vendors.statement}
          </p>
        </div>
      </div>
    </section>
  );
}
