'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubpageHero from '@/components/SubpageHero';
import PricingSection from '@/components/PricingSection';
import ComparisonTable from '@/components/ComparisonTable';
import CTASection from '@/components/CTASection';
import {
  Sparkles,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  CreditCard,
  Lock,
  ArrowRight
} from 'lucide-react';

export default function PricingPage() {
  const faqs = [
    {
      q: 'When does a startup legally require a 409A valuation?',
      a: 'The IRS requires an independent 409A valuation before you grant stock options to employees or advisors. This sets the fair market value strike price. Valuations must be renewed every 12 months, or after any priced funding round.',
    },
    {
      q: 'How does EvaluerAI compare to Eqvista and Equidam pricing?',
      a: 'Eqvista charges separately for cap table software ($990 to $1,800 a year) and 409A reports. Equidam offers valuation modeling for 490 euros a year without certified IRS 409A sign-off. EvaluerAI includes both continuous valuation modeling and certified 409A audit reports in a $990 a year plan.',
    },
    {
      q: 'Can we update our valuation if we close a SAFE or price increase?',
      a: 'Yes. Growth Pro and 409A plan subscribers can run updated valuations when revenue changes or after closing a SAFE.',
    },
    {
      q: 'What is included in the Accelerator and VC Cohort plan?',
      a: 'Accelerator and fund plans include batch company onboarding, cohort comparisons, automated PDF export, and REST API access.',
    },
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#000000' }}>
      <Navbar />

      {/* Hero Section */}
      <SubpageHero
        badgeIcon={<Sparkles size={14} color="#93b3ff" />}
        badgeText="Predictable pricing"
        title={
          <>
            Transparent valuation pricing <br />
            <span style={{ color: '#93b3ff' }}>for founders and funds</span>
          </>
        }
        description="From early-stage incorporation cap tables to certified IRS 409A reports and VC cohort tools. Transparent annual pricing with zero appraisal markups."
        primaryCta={{
          label: 'View all pricing plans',
          href: '#pricing',
        }}
        secondaryCta={{
          label: 'Compare alternatives',
          href: '#comparison',
        }}
        trustPoints={[
          '14-day free trial',
          'Cancel or pause anytime',
          'IRS audit safe harbor',
        ]}
      />

      {/* Pricing Cards Section */}
      <section style={{ padding: '20px 0 60px' }}>
        <PricingSection />
      </section>

      {/* Comparison Table Section */}
      <section style={{ padding: '60px 24px 100px', background: '#050608', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 56px auto' }}>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                fontWeight: 800,
                fontFamily: 'var(--font-display, "Plus Jakarta Sans"), sans-serif',
                letterSpacing: '-0.025em',
                color: '#ffffff',
                lineHeight: 1.15,
                marginBottom: '16px',
              }}
            >
              How EvaluerAI compares to <span style={{ color: '#93b3ff' }}>alternatives</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6 }}>
              A feature and pricing breakdown against Equidam, Eqvista, and traditional accounting firms.
            </p>
          </div>

          <ComparisonTable />
        </div>
      </section>

      {/* Pricing FAQs */}
      <section style={{ padding: '100px 24px', background: '#000000', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                fontWeight: 800,
                fontFamily: 'var(--font-display, "Plus Jakarta Sans"), sans-serif',
                letterSpacing: '-0.025em',
                color: '#ffffff',
                lineHeight: 1.15,
                marginBottom: '16px',
              }}
            >
              Pricing and audit <span style={{ color: '#93b3ff' }}>questions</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6 }}>
              Everything you need to know about billing, IRS compliance, and cohort accounts.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {faqs.map((f, i) => (
              <div
                key={i}
                style={{
                  padding: '30px',
                  borderRadius: '18px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  background: '#05070c',
                }}
              >
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>
                  {f.q}
                </h3>
                <p style={{ fontSize: '0.96rem', color: 'rgba(255, 255, 255, 0.68)', lineHeight: 1.65, margin: 0 }}>
                  {f.a}
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

