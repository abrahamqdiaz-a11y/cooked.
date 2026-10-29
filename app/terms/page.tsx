import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Terms & Booking Conditions — Cooked Helsinki',
  description:
    'Booking conditions for Cooked Helsinki market hall food tours, including our cancellation and late-arrival policy.',
  robots: { index: false, follow: true },
};

export default function Terms() {
  return (
    <LegalPage title="Terms & booking conditions" updated="January 2026">
      <section>
        <h2>Bookings</h2>
        <p>
          A booking is confirmed when payment is completed and you receive a confirmation email.
          Scheduled tours are capped at 8 guests; private tours run for up to 6 guests.
        </p>
      </section>
      <section>
        <h2>Cancellations and refunds</h2>
        <p>
          Cancel more than 48 hours before your tour starts for a full refund. Within 48 hours we
          cannot refund the ticket, because your tastings have already been bought and paid for in
          advance from our vendors. If we cancel a tour for any reason, you are refunded in full.
        </p>
      </section>
      <section>
        <h2>Late arrivals</h2>
        <p>
          The route runs to a timetable set by the tram and by the halls&rsquo; opening hours. If you
          are running late, message the number in your confirmation and we will wait where we can.
          Guests more than 10 minutes late without contact are treated as no-shows and are not
          eligible for a refund.
        </p>
      </section>
      <section>
        <h2>Dietary requirements and allergies</h2>
        <p>
          Tell us your dietary needs at booking and a chef plans your route. We cannot guarantee an
          allergen-free environment in a working market hall; if your allergy is severe, email{' '}
          <a href={`mailto:${site.email}`} className="text-sea underline underline-offset-4">
            {site.email}
          </a>{' '}
          before booking.
        </p>
      </section>
      <section>
        <h2>Weather and changes to the route</h2>
        <p>
          Tours run year-round, rain or shine. We may substitute a vendor, a dish or a stop when a
          hall is closed or produce is unavailable; the tour&rsquo;s length and value are unaffected.
        </p>
      </section>
      <section>
        <h2>Tram fare</h2>
        <p>
          The ticket price includes all tastings and VAT. Tram fare between stops (approximately €6)
          is paid on board with a contactless card.
        </p>
      </section>
    </LegalPage>
  );
}
