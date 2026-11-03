'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubpageHero from '@/components/SubpageHero';
import InteractiveValuationEngine from '@/components/InteractiveValuationEngine';
import MethodologySection from '@/components/MethodologySection';
import CTASection from '@/components/CTASection';
import {
  Calculator,
  ShieldCheck,
  FileText,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Layers,
  Sparkles,
  Download,
  Clock,
  Scale,
  Award
} from 'lucide-react';

export default function ValuationPage() {
  const compliancePoints = [
    {
      title: 'IPEV guideline compliance',
      desc: 'Formulas follow International Private Equity Valuation guidelines.',
      icon: <Award size={22} color="#93b3ff" />,
    },
    {
      title: 'IRS 409A audit readiness',
      desc: 'Produces fair market value documentation for IRS Safe Harbor employee option strike prices.',
      icon: <ShieldCheck size={22} color="#93b3ff" />,
    },
    {
      title: 'Stage-adjusted weighting',
      desc: 'Weights qualitative methods (Scorecard and Berkus) for early stages, then shifts weight to DCF and market multiples as revenue matures.',
      icon: <Scale size={22} color="#93b3ff" />,
    },
    {
      title: 'Updated market benchmarks',
      desc: 'Multiples compare against 120,000 private venture funding transactions.',
      icon: <Clock size={22} color="#93b3ff" />,
    },
  ];

  const reportSections = [
    {
      step: '01',
      title: 'Executive valuation summary',
      desc: 'Pre-money and post-money valuation ranges with median consensus.',
    },
    {
      step: '02',
      title: 'Five-method valuation bridge',
      desc: 'Individual outputs and weights for Scorecard, Berkus, RFS, DCF, and VC methods.',
    },
    {
      step: '03',
      title: 'Market multiples and comps',
      desc: 'Sector EV/ARR, EBITDA, and peer benchmarks from market transactions.',
    },
    {
      step: '04',
      title: 'Sensitivity analysis',
      desc: 'Tests valuation against churn, margin shifts, discount rates, and exit timelines.',
    },
    {
      step: '05',
      title: 'Due diligence appendix',
      desc: 'Documented assumptions, cap table waterfall, and governance records for the data room.',
    },
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#000000' }}>
      <Navbar />

      {/* Hero Section */}
      <SubpageHero
        badgeIcon={<Sparkles size={14} color="#93b3ff" />}
        badgeText="Startup valuation"
        title={
          <>
            Algorithmic startup valuation <br />
            <span style={{ color: '#93b3ff' }}>and audit-ready reports</span>
          </>
        }
        description="Combine Scorecard, Berkus, Risk Factor Summation, DCF, and VC Exit models to build a defensible valuation range. Every report includes mathematical assumptions and verified market comps."
        primaryCta={{
          label: 'Launch valuation simulator',
          href: '#valuation-tool',
        }}
        secondaryCta={{
          label: 'Explore five valuation methods',
          href: '#methodology',
        }}
        trustPoints={[
          'IPEV guidelines compliant',
          'IRS 409A audit-ready',
          '120,000 market comps',
        ]}
      />

      {/* Interactive Valuation Engine Module */}
      <section id="valuation-tool" style={{ padding: '40px 0 100px' }}>
        <InteractiveValuationEngine />
      </section>

      {/* 5-Method Deep Dive Section */}
      <MethodologySection />

      {/* 409A & Audit Compliance Highlights */}
      <section style={{ padding: '100px 24px', background: '#000000', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 64px auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '6px 18px',
                borderRadius: '999px',
                background: 'rgba(147, 179, 255, 0.08)',
                border: '1px solid rgba(147, 179, 255, 0.28)',
                color: '#93b3ff',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                marginBottom: '20px',
              }}
            >
              <span>Compliance standards</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.2rem, 4.4vw, 3.2rem)',
                fontWeight: 800,
                fontFamily: 'var(--font-display, "Plus Jakarta Sans"), sans-serif',
                letterSpacing: '-0.025em',
                color: '#ffffff',
                lineHeight: 1.15,
                marginBottom: '16px',
              }}
            >
              Auditable and compliant <span style={{ color: '#93b3ff' }}>documentation</span>
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6 }}>
              Our reports meet standards for angel rounds, employee stock option pools, and venture capital due diligence.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {compliancePoints.map((cp, idx) => (
              <div
                key={idx}
                style={{
                  padding: '36px 30px',
                  borderRadius: '22px',
                  border: '1px solid rgba(147, 179, 255, 0.2)',
                  background: 'radial-gradient(110% 110% at 50% 110%, rgba(147, 179, 255, 0.12) 0%, rgba(8, 10, 15, 0.95) 55%, #050608 100%)',
                }}
              >
                <div style={{ marginBottom: '20px' }}>{cp.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>
                  {cp.title}
                </h3>
                <p style={{ fontSize: '0.94rem', color: 'rgba(255, 255, 255, 0.62)', lineHeight: 1.6, margin: 0 }}>
                  {cp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anatomy of the Valuation Report */}
      <section style={{ padding: '100px 24px', background: '#050608', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 64px auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '6px 18px',
                borderRadius: '999px',
                background: 'rgba(147, 179, 255, 0.08)',
                border: '1px solid rgba(147, 179, 255, 0.28)',
                color: '#93b3ff',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                marginBottom: '20px',
              }}
            >
              <span>Deliverables</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.2rem, 4.4vw, 3.2rem)',
                fontWeight: 800,
                fontFamily: 'var(--font-display, "Plus Jakarta Sans"), sans-serif',
                letterSpacing: '-0.025em',
                color: '#ffffff',
                lineHeight: 1.15,
                marginBottom: '16px',
              }}
            >
              What is inside your <span style={{ color: '#93b3ff' }}>valuation report</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6 }}>
              A 28-page structured PDF and interactive dashboard designed for board members and investors.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {reportSections.map((sec, idx) => (
              <div
                key={idx}
                style={{
                  padding: '28px 24px',
                  borderRadius: '18px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  background: '#000000',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      color: '#93b3ff',
                      fontFamily: 'var(--font-display, "Plus Jakarta Sans"), sans-serif',
                      display: 'block',
                      marginBottom: '12px',
                    }}
                  >
                    {sec.step}
                  </span>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                    {sec.title}
                  </h4>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.58)', lineHeight: 1.55, margin: 0 }}>
                  {sec.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </main>
  );
}

