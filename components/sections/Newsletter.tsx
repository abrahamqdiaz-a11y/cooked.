import SectionLabel from '../SectionLabel';
import { newsletter, NEWSLETTER_URL } from '@/content/site';

const input =
  'mt-2 w-full rounded-sm border border-harbor/25 bg-paper px-4 py-3 text-[0.9375rem] text-harbor ' +
  'placeholder:text-smoke-deep focus:border-sea focus:outline-none';
const label = 'block text-[0.6875rem] uppercase tracking-label text-smoke-deep';

export default function Newsletter() {
  const { fields } = newsletter;

  return (
    <section id="newsletter" className="bg-oatmeal py-20 sm:py-28">
      <div className="mx-auto grid max-w-page gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionLabel>{newsletter.label}</SectionLabel>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
            {newsletter.headline}
          </h2>
          <p className="mt-5 max-w-prose text-[0.9375rem] leading-relaxed text-harbor/70 sm:text-base">
            {newsletter.body}
          </p>
        </div>

        <form
          action={NEWSLETTER_URL}
          method="post"
          target="_blank"
          className="grid gap-5 sm:grid-cols-2 lg:col-span-7"
        >
          <div className="sm:col-span-2">
            <label htmlFor="mce-EMAIL" className={label}>
              {fields.email} <span className="text-lingonberry">*</span>
              <span className="sr-only"> ({newsletter.required})</span>
            </label>
            <input type="email" name="EMAIL" id="mce-EMAIL" required autoComplete="email" className={input} />
          </div>
          <div>
            <label htmlFor="mce-FNAME" className={label}>
              {fields.firstName}
            </label>
            <input type="text" name="FNAME" id="mce-FNAME" autoComplete="given-name" className={input} />
          </div>
          <div>
            <label htmlFor="mce-LNAME" className={label}>
              {fields.lastName}
            </label>
            <input type="text" name="LNAME" id="mce-LNAME" autoComplete="family-name" className={input} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="mce-PHONE" className={label}>
              {fields.phone}
            </label>
            <input type="tel" name="PHONE" id="mce-PHONE" autoComplete="tel" className={input} />
          </div>

          {/* Mailchimp honeypot: real people never see or fill this. */}
          <div aria-hidden="true" className="absolute -left-[5000px]">
            <input type="text" name={newsletter.honeypot} tabIndex={-1} defaultValue="" />
          </div>

          <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-sm border border-current px-6 py-3.5 text-sm font-medium tracking-wide text-sea transition-colors duration-200 hover:bg-sea hover:text-paper"
            >
              {newsletter.cta}
            </button>
            <p className="text-[0.8125rem] text-smoke-deep">{newsletter.note}</p>
          </div>
        </form>
      </div>
    </section>
  );
}
