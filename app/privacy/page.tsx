import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Privacy Policy — Cooked Helsinki',
  description: 'How Cooked Helsinki collects, uses and stores the personal data of tour guests.',
  robots: { index: false, follow: true },
};

export default function Privacy() {
  return (
    <LegalPage title="Privacy policy" updated="January 2026">
      <section>
        <h2>What we collect</h2>
        <p>
          When you book a tour we collect your name, email address, phone number, party size and any
          dietary requirements you tell us. Payment is handled by our booking provider; we never see
          or store your card details.
        </p>
      </section>
      <section>
        <h2>Why we collect it</h2>
        <p>
          To run your tour: to confirm your booking, to contact you if plans change on the day, and
          to plan a route around your dietary needs. We do not sell your data or share it with
          anyone beyond the providers that process bookings and payments on our behalf.
        </p>
      </section>
      <section>
        <h2>How long we keep it</h2>
        <p>
          Booking records are kept for as long as Finnish accounting law requires, then deleted.
          Dietary notes are deleted after your tour.
        </p>
      </section>
      <section>
        <h2>Your rights</h2>
        <p>
          Under the GDPR you can ask us for a copy of your data, ask us to correct it, or ask us to
          delete it. Email{' '}
          <a href={`mailto:${site.email}`} className="text-sea underline underline-offset-4">
            {site.email}
          </a>{' '}
          and we will respond within 30 days.
        </p>
      </section>
    </LegalPage>
  );
}
