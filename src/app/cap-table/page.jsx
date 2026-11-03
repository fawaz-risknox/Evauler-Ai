'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubpageHero from '@/components/SubpageHero';
import CapTableSimulator from '@/components/CapTableSimulator';
import CTASection from '@/components/CTASection';
import {
  PieChart,
  Layers,
  ShieldCheck,
  Users,
  FileSpreadsheet,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  RefreshCw,
  Award,
  Lock
} from 'lucide-react';

export default function CapTablePage() {
  const capFeatures = [
    {
      title: 'SAFE and convertible note modeling',
      desc: 'Simulate pre-money and post-money SAFEs with valuation caps and discount rates.',
      icon: <Layers size={22} color="#93b3ff" />,
    },
    {
      title: 'Option pool expansion',
      desc: 'Size unallocated options before or after the round to see dilution impact on common shares.',
      icon: <Users size={22} color="#93b3ff" />,
    },
    {
      title: 'Cap table sync with 409A valuations',
      desc: 'Cap table changes feed into fair market value calculations to keep employee option pricing current.',
      icon: <ShieldCheck size={22} color="#93b3ff" />,
    },
    {
      title: 'Securities tracking and SEC Rule 701',
      desc: 'Issue digital stock certificates, track equity grants, and monitor Rule 701 disclosure thresholds.',
      icon: <Award size={22} color="#93b3ff" />,
    },
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#000000' }}>
      <Navbar />

      {/* Hero Section */}
      <SubpageHero
        badgeIcon={<Layers size={14} color="#93b3ff" />}
        badgeText="Equity infrastructure"
        title={
          <>
            Real-time cap table modeling <br />
            <span style={{ color: '#93b3ff' }}>and dilution simulation</span>
          </>
        }
        description="Track ownership stakes, model convertible SAFEs, and calculate founder dilution before signing term sheets. Results align with 409A valuations and SEC Rule 701."
        primaryCta={{
          label: 'Launch cap table simulator',
          href: '#simulator',
        }}
        secondaryCta={{
          label: 'View plans and pricing',
          href: '/pricing',
        }}
        trustPoints={[
          'Up to 25 stakeholders included',
          'Waterfall liquidation math',
          'CSV export',
        ]}
      />

      {/* Simulator Section */}
      <section id="simulator" style={{ padding: '20px 0 80px' }}>
        <CapTableSimulator />
      </section>

      {/* Cap Table Features Grid */}
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
              <span>Cap table infrastructure</span>
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
              Beyond spreadsheets. <span style={{ color: '#93b3ff' }}>Cap table modeling.</span>
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6 }}>
              Spreadsheets break down once rounds add liquidation preferences, pro-rata rights, and converting notes.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            {capFeatures.map((feat, idx) => (
              <div
                key={idx}
                style={{
                  padding: '38px 30px',
                  borderRadius: '22px',
                  border: '1px solid rgba(147, 179, 255, 0.2)',
                  background: 'radial-gradient(110% 110% at 50% 110%, rgba(147, 179, 255, 0.12) 0%, rgba(8, 10, 15, 0.95) 55%, #050608 100%)',
                }}
              >
                <div style={{ marginBottom: '20px' }}>{feat.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>
                  {feat.title}
                </h3>
                <p style={{ fontSize: '0.94rem', color: 'rgba(255, 255, 255, 0.62)', lineHeight: 1.6, margin: 0 }}>
                  {feat.desc}
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

