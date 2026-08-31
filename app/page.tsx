import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import WhyChefs from '@/components/sections/WhyChefs';
import Route from '@/components/sections/Route';
import Tastings from '@/components/sections/Tastings';
import SmallGroups from '@/components/sections/SmallGroups';
import DirectBooking from '@/components/sections/DirectBooking';
import Pricing from '@/components/sections/Pricing';
import Vendors from '@/components/sections/Vendors';
import TakeHome from '@/components/sections/TakeHome';
import PrivateTours from '@/components/sections/PrivateTours';
import GiftCards from '@/components/sections/GiftCards';
import FAQ from '@/components/sections/FAQ';
import Reviews from '@/components/sections/Reviews';
import Footer from '@/components/sections/Footer';

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-harbor focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <WhyChefs />
        <Route />
        <Tastings />
        <SmallGroups />
        <DirectBooking />
        <Pricing />
        <Vendors />
        <TakeHome />
        <PrivateTours />
        <GiftCards />
        <FAQ />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
