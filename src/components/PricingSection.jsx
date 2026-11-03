'use client';

import { useState } from 'react';
import { Check, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  const tiers = [
    {
      name: 'Bootstrap',
      tagline: 'For pre-seed and early incorporation',
      price: '$0',
      period: 'forever free',
      highlight: false,
      badge: 'Free tier',
      features: [
        'Up to 25 cap table stakeholders',
        'Five-method valuation preview',
        'Basic round dilution simulator',
        'Standard stock certificate issuance',
        'Email support',
      ],
      cta: 'Get started free',
      ctaClass: 'btn-secondary',
    },
    {
      name: 'Growth Pro',
      tagline: 'For seed to Series A tech startups',
      price: isAnnual ? '$63' : '$79',
      period: 'per month, billed annually',
      highlight: false,
      badge: 'Equity operations',
      features: [
        'Unlimited stakeholders and option grants',
        'Continuous valuation updates',
        'SAFE and convertible note waterfall',
        'Investor data room',
        'Accounting integration (QuickBooks, Xero, Stripe)',
        'Electronic signatures and SEC Rule 701 compliance',
      ],
      cta: 'Start 14-day trial',
      ctaClass: 'btn-secondary',
    },
    {
      name: '409A Certified Bundle',
      tagline: 'IRS-compliant valuation and equity software',
      price: '$990',
      period: 'per year (all included)',
      highlight: true,
      badge: 'Most popular',
      features: [
        'One IRS-defensible 409A report',
        'Signed by certified valuation analysts',
        'One year of Growth Pro cap table included',
        'Initial draft within 24 hours',
        'IRS Safe Harbor defense support',
        'Unlimited ISO, NSO, and RSU option awards',
        'Analyst review call',
      ],
      cta: 'Order 409A bundle',
      ctaClass: 'btn-primary',
    },
    {
      name: 'Venture & Scale',
      tagline: 'For Series B and multi-entity groups',
      price: isAnnual ? '$199' : '$249',
      period: 'per month, billed annually',
      highlight: false,
      badge: 'Enterprise',
      features: [
        'Multi-entity and SPV cap tables',
        'Secondary liquidity tracking',
        'Custom WACC and beta financial modeling',
        'REST API access',
        'Dedicated valuation director',
        'Custom SSO (Okta, Google Workspace)',
      ],
      cta: 'Contact sales',
      ctaClass: 'btn-secondary',
    },
  ];

  return (
    <section id="pricing" className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <Sparkles size={14} color="#93b3ff" />
            <span>Pricing plans</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Predictable pricing without <span className="gradient-text">appraisal markups</span>
          </h2>
          <p style={{ color: 'var(--color-white-muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '28px' }}>
            Choose between automated early-stage valuation models and certified 409A audit reports. No hidden advisory fees.
          </p>

          {/* Billing Toggle */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              background: 'rgba(147, 179, 255, 0.08)',
              padding: '6px 14px',
              borderRadius: '9999px',
              border: '1px solid rgba(147, 179, 255, 0.25)',
            }}
          >
            <span
              onClick={() => setIsAnnual(false)}
              style={{
                fontSize: '0.88rem',
                fontWeight: !isAnnual ? 700 : 500,
                color: !isAnnual ? '#fcfbff' : 'var(--color-white-muted)',
                cursor: 'pointer',
              }}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsAnnual(!isAnnual)}
              style={{
                width: '46px',
                height: '24px',
                background: isAnnual ? '#93b3ff' : 'rgba(147, 179, 255, 0.2)',
                borderRadius: '12px',
                position: 'relative',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
            >
              <div
                style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  background: '#000000',
                  position: 'absolute',
                  top: '3px',
                  left: isAnnual ? '25px' : '3px',
                  transition: 'left 0.2s ease',
                }}
              />
            </div>
            <span
              onClick={() => setIsAnnual(true)}
              style={{
                fontSize: '0.88rem',
                fontWeight: isAnnual ? 700 : 500,
                color: isAnnual ? '#93b3ff' : 'var(--color-white-muted)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              Annual <span style={{ fontSize: '0.72rem', background: 'rgba(16, 185, 129, 0.2)', color: '#10b981', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>SAVE 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '24px',
            alignItems: 'stretch',
          }}
        >
          {tiers.map((t, idx) => (
            <div
              key={idx}
              className={t.highlight ? 'glass-panel-glow' : 'glass-panel'}
              style={{
                padding: '36px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                border: t.highlight
                  ? '2px solid rgba(147, 179, 255, 0.75)'
                  : '1px solid rgba(147, 179, 255, 0.18)',
                background: t.highlight
                  ? 'radial-gradient(110% 110% at 50% 0%, rgba(147, 179, 255, 0.16) 0%, rgba(10, 14, 24, 0.95) 55%, #030407 100%)'
                  : 'rgba(8, 10, 16, 0.8)',
                transform: t.highlight ? 'scale(1.03)' : 'none',
                zIndex: t.highlight ? 2 : 1,
              }}
            >
              {t.highlight && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#93b3ff',
                    color: '#08090d',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '4px 14px',
                    borderRadius: '9999px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    boxShadow: '0 4px 15px rgba(147, 179, 255, 0.35)',
                  }}
                >
                  Most Popular
                </div>
              )}

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fcfbff' }}>{t.name}</h3>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: t.highlight ? '#93b3ff' : '#64748b',
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: '3px 8px',
                      borderRadius: '6px',
                    }}
                  >
                    {t.badge}
                  </span>
                </div>

                <p style={{ color: 'var(--color-white-muted)', fontSize: '0.84rem', minHeight: '38px', marginBottom: '20px' }}>
                  {t.tagline}
                </p>

                <div style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid rgba(147, 179, 255, 0.18)' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                    <span
                      style={{
                        fontSize: '2.5rem',
                        fontWeight: 800,
                        fontFamily: 'var(--font-display)',
                        color: '#fcfbff',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {t.price}
                    </span>
                    <span style={{ fontSize: '0.82rem', color: '#64748b' }}>{t.period}</span>
                  </div>
                </div>

                {/* Features List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                  {t.features.map((f, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <Check
                        size={16}
                        color={t.highlight ? '#93b3ff' : '#10b981'}
                        style={{ marginTop: '3px', flexShrink: 0 }}
                      />
                      <span style={{ fontSize: '0.86rem', color: 'var(--color-white-muted)', lineHeight: 1.45 }}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href="#valuation-tool"
                  className={t.ctaClass}
                  style={{
                    width: '100%',
                    textAlign: 'center',
                    padding: '13px',
                    fontSize: '0.9rem',
                  }}
                >
                  {t.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
