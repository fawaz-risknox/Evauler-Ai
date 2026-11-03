'use client';

import { Sparkles, Zap, ShieldCheck, TrendingUp, Compass } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      title: 'Scored from structured data',
      description: 'The model scores your financials and operating data against 88 criteria.',
      icon: <Sparkles size={30} color="#93b3ff" strokeWidth={1.8} />,
    },
    {
      title: 'A report without a consulting cycle',
      description: 'You submit the form. The report comes back without a weeks-long process.',
      icon: <Zap size={30} color="#93b3ff" strokeWidth={1.8} />,
    },
    {
      title: 'Same criteria every time',
      description: 'Every company is scored on the same 88 items.',
      icon: <ShieldCheck size={30} color="#93b3ff" strokeWidth={1.8} />,
    },
    {
      title: 'See the diligence questions early',
      description: 'The score shows which items a diligence checklist would flag.',
      icon: <TrendingUp size={30} color="#93b3ff" strokeWidth={1.8} />,
    },
    {
      title: 'A ranked list of gaps',
      description: 'Each low score comes with a next action and a time window.',
      icon: <Compass size={30} color="#93b3ff" strokeWidth={1.8} />,
    },
  ];

  return (
    <section id="benefits" className="section-spacing" style={{ position: 'relative', overflow: 'hidden', padding: '120px 0' }}>
      {/* Background Radial Glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '900px',
          height: '650px',
          background: 'radial-gradient(ellipse at center, rgba(147, 179, 255, 0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
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
            <span>Benefits</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.4rem, 4.4vw, 3.4rem)',
              fontWeight: 800,
              fontFamily: 'var(--font-display, "Plus Jakarta Sans"), sans-serif',
              letterSpacing: '-0.025em',
              color: '#ffffff',
              lineHeight: 1.15,
              marginBottom: '16px',
            }}
          >
            What you get from <span style={{ color: '#93b3ff' }}>EvaluerAI</span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
              color: 'rgba(255, 255, 255, 0.65)',
              lineHeight: 1.6,
              maxWidth: '620px',
              margin: '0 auto',
            }}
          >
            Use the report to see your score and the gaps before you raise.
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div
          className="benefits-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
          }}
        >
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="benefit-card"
              style={{
                padding: '38px 32px',
                borderRadius: '22px',
                border: '1px solid rgba(147, 179, 255, 0.22)',
                background:
                  'radial-gradient(110% 110% at 50% 110%, rgba(147, 179, 255, 0.15) 0%, rgba(10, 12, 18, 0.95) 55%, #050609 100%)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.45)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '28px' }}>
                {b.icon}
              </div>

              <h3
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  marginBottom: '14px',
                  fontFamily: 'var(--font-display, "Plus Jakarta Sans"), sans-serif',
                  letterSpacing: '-0.015em',
                  lineHeight: 1.25,
                }}
              >
                {b.title}
              </h3>

              <p
                style={{
                  fontSize: '1.02rem',
                  color: 'rgba(255, 255, 255, 0.62)',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .benefit-card:hover {
          transform: translateY(-4px);
          border-color: rgba(147, 179, 255, 0.48);
          box-shadow: 0 16px 40px rgba(147, 179, 255, 0.18);
        }
      `}</style>
    </section>
  );
}
