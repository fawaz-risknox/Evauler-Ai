'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubpageHero from '@/components/SubpageHero';
import CTASection from '@/components/CTASection';
import {
  Sparkles,
  Award,
  ShieldCheck,
  TrendingUp,
  Users,
  Compass,
  CheckCircle2,
  Lock,
  ArrowRight
} from 'lucide-react';

export default function AboutPage() {
  const leadership = [
    {
      name: 'CA Anna Jain Jose',
      role: 'Founder & CEO',
      image: '/assets/members/Anna.jpeg',
      objectPosition: '50% 30%',
      bio: 'Chartered Accountant with 14 years in corporate finance, audits, and startup valuations.',
    },
    {
      name: 'CS Manu Francis',
      role: 'Co-Founder & COO',
      image: '/assets/members/Manu.jpeg',
      objectPosition: '50% 30%',
      bio: 'Company Secretary specializing in corporate compliance, cap table governance, and regulatory filings.',
    },
    {
      name: 'Vivek Chandran',
      role: 'Co-Founder & CTO',
      image: '/assets/members/Vivek.jpeg',
      objectPosition: '50% 30%',
      bio: 'Software engineer focused on valuation models, financial data ingestion, and due diligence automation.',
    },
  ];

  const values = [
    {
      title: 'Mathematical transparency',
      desc: 'Calculations and formulas are documented, open to audit, and free of subjective appraisal bias.',
      icon: <Award size={24} color="#93b3ff" />,
    },
    {
      title: 'Regulatory alignment',
      desc: 'Models follow International Private Equity Valuation guidelines and IRS Section 409A standards.',
      icon: <ShieldCheck size={24} color="#93b3ff" />,
    },
    {
      title: 'Continuous valuation',
      desc: 'Valuations update as revenue, headcount, or rounds change, rather than waiting for annual reports.',
      icon: <TrendingUp size={24} color="#93b3ff" />,
    },
    {
      title: 'Founder control',
      desc: 'Founders get verified valuation benchmarks before negotiating term sheets.',
      icon: <Compass size={24} color="#93b3ff" />,
    },
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#000000' }}>
      <Navbar />

      {/* Hero Section */}
      <SubpageHero
        badgeIcon={<ShieldCheck size={14} color="#93b3ff" />}
        badgeText="Mission & leadership"
        title={
          <>
            Bridging the information gap <br />
            <span style={{ color: '#93b3ff' }}>in startup valuation</span>
          </>
        }
        description="Founded by a Chartered Accountant, a Company Secretary, and an engineer to replace slow, expensive consulting with continuous mathematical clarity."
        primaryCta={{
          label: 'Meet our leadership',
          href: '#leadership',
        }}
        secondaryCta={{
          label: 'Explore our principles',
          href: '#principles',
        }}
        trustPoints={[
          'Founded by CAs & CSs',
          '150+ audited valuations',
          'Global IPEV standards',
        ]}
      />

      {/* The Story / Problem & Solution */}
      <section style={{ padding: '80px 24px 100px', background: '#050608', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <span style={{ color: '#93b3ff', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Why we built EvaluerAI
              </span>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  lineHeight: 1.2,
                  margin: '16px 0 24px 0',
                  fontFamily: 'var(--font-display, "Plus Jakarta Sans"), sans-serif',
                }}
              >
                Startups should not negotiate blind
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.68)', lineHeight: 1.7, fontSize: '1rem', marginBottom: '18px' }}>
                Every fundraising founder faces two questions: <strong style={{ color: '#fff' }}>"What is my venture worth?"</strong> and <strong style={{ color: '#fff' }}>"Is my company ready for institutional capital?"</strong>
              </p>
              <p style={{ color: 'rgba(255, 255, 255, 0.68)', lineHeight: 1.7, fontSize: '1rem' }}>
                Traditional appraisals are slow and expensive, while informal rules of thumb lack legal backing. EvaluerAI integrates accounting standards with private round multiples to deliver auditable reports.
              </p>
            </div>

            <div
              style={{
                padding: '40px',
                borderRadius: '24px',
                border: '1px solid rgba(147, 179, 255, 0.25)',
                background: 'radial-gradient(100% 100% at 50% 0%, rgba(147, 179, 255, 0.12) 0%, #030407 70%, #000000 100%)',
              }}
            >
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', marginBottom: '20px' }}>
                Two core products
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ padding: '18px', borderRadius: '14px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(147, 179, 255, 0.2)' }}>
                  <div style={{ fontWeight: 700, color: '#93b3ff', marginBottom: '6px' }}>1. Algorithmic valuation report</div>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.6)', margin: 0, lineHeight: 1.5 }}>
                    Combines 5 models (Scorecard, Berkus, Risk Factor, DCF, and VC method) to produce a defensible valuation range.
                  </p>
                </div>
                <div style={{ padding: '18px', borderRadius: '14px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(147, 179, 255, 0.2)' }}>
                  <div style={{ fontWeight: 700, color: '#93b3ff', marginBottom: '6px' }}>2. 88-point investability score</div>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.6)', margin: 0, lineHeight: 1.5 }}>
                    Evaluates readiness across Idea, Team, ESG, Financials, and Fundability with an action roadmap.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="principles" style={{ padding: '100px 24px', background: '#000000', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 64px auto' }}>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                fontWeight: 800,
                fontFamily: 'var(--font-display, "Plus Jakarta Sans"), sans-serif',
                letterSpacing: '-0.025em',
                color: '#ffffff',
                lineHeight: 1.15,
                marginBottom: '16px',
              }}
            >
              Our core <span style={{ color: '#93b3ff' }}>principles</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6 }}>
              Built for accuracy, checked against audit standards, and designed for founders.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            {values.map((v, i) => (
              <div
                key={i}
                style={{
                  padding: '38px 30px',
                  borderRadius: '22px',
                  border: '1px solid rgba(147, 179, 255, 0.2)',
                  background: 'radial-gradient(110% 110% at 50% 110%, rgba(147, 179, 255, 0.12) 0%, rgba(8, 10, 15, 0.95) 55%, #050608 100%)',
                }}
              >
                <div style={{ marginBottom: '20px' }}>{v.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: '0.94rem', color: 'rgba(255, 255, 255, 0.62)', lineHeight: 1.6, margin: 0 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" style={{ padding: '100px 24px', background: '#050608', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
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
              <span>Leadership</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                fontWeight: 800,
                fontFamily: 'var(--font-display, "Plus Jakarta Sans"), sans-serif',
                letterSpacing: '-0.025em',
                color: '#ffffff',
                lineHeight: 1.15,
                marginBottom: '16px',
              }}
            >
              Meet the team behind <span style={{ color: '#93b3ff' }}>EvaluerAI</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6 }}>
              A multidisciplinary leadership team combining chartered accountancy, corporate secretarial law, and deep AI engineering.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {leadership.map((member, idx) => (
              <div
                key={idx}
                style={{
                  padding: '40px 32px',
                  borderRadius: '24px',
                  border: '1px solid rgba(147, 179, 255, 0.22)',
                  background: 'radial-gradient(110% 110% at 50% 110%, rgba(147, 179, 255, 0.15) 0%, rgba(10, 12, 18, 0.95) 55%, #050609 100%)',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    width: '130px',
                    height: '130px',
                    borderRadius: '50%',
                    margin: '0 auto 22px',
                    overflow: 'hidden',
                    border: '2px solid rgba(147, 179, 255, 0.45)',
                    boxShadow: '0 8px 24px rgba(147, 179, 255, 0.2)',
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: member.objectPosition,
                      display: 'block',
                    }}
                  />
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
                  {member.name}
                </h3>
                <span style={{ fontSize: '0.92rem', color: '#93b3ff', fontWeight: 600, display: 'block', marginBottom: '18px' }}>
                  {member.role}
                </span>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6, margin: 0 }}>
                  {member.bio}
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

