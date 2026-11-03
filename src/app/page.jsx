import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import CoreInsightsSection from '@/components/CoreInsightsSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import HowItWorks from '@/components/HowItWorks';
import BenefitsSection from '@/components/BenefitsSection';
import Testimonials from '@/components/Testimonials';
import TeamSection from '@/components/TeamSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#000000' }}>
      <Navbar />
      <Hero />
      <StatsBar />
      <CoreInsightsSection />
      <FeaturesGrid />
      <HowItWorks />
      <BenefitsSection />
      <Testimonials />
      <CTASection />
      <TeamSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
