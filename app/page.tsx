import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import WhyChefs from '@/components/sections/WhyChefs';
import Route from '@/components/sections/Route';
import Tastings from '@/components/sections/Tastings';
import Pricing from '@/components/sections/Pricing';
import PrivateTours from '@/components/sections/PrivateTours';
import GiftCards from '@/components/sections/GiftCards';
import FAQ from '@/components/sections/FAQ';
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
        <Tastings />
        <Route />
        <Pricing />
        <PrivateTours />
        <GiftCards />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
