import FAQAccordion from '../FAQAccordion';
import SectionLabel from '../SectionLabel';
import { faq, site } from '@/content/site';

export default function FAQ() {
  return (
    <section id="faq" className="bg-mist py-20 sm:py-28">
      <div className="mx-auto grid max-w-page gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <SectionLabel>{faq.label}</SectionLabel>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
              {faq.headline}
            </h2>
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-harbor/70">
              Still unsure about something? Email{' '}
              <a href={`mailto:${site.email}`} className="text-sea underline underline-offset-4">
                {site.email}
              </a>{' '}
              and a chef will answer, usually the same day.
            </p>
          </div>
        </div>
        <div className="lg:col-span-8">
          <FAQAccordion items={faq.items} />
        </div>
      </div>
    </section>
  );
}
