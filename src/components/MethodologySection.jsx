'use client';

import { useState } from 'react';
import { Target, Layers, Scale, LineChart, Shield, CheckCircle, ChevronRight, HelpCircle } from 'lucide-react';

export default function MethodologySection() {
  const [activeMethod, setActiveMethod] = useState(0);

  const methods = [
    {
      id: 'scorecard',
      title: 'Scorecard Valuation Method',
      bestFor: 'Pre-revenue to Seed Startups with Market Comps',
      formula: 'Base Median Regional Value × ∑(Factor Weight × Factor Score)',
      icon: <Target size={24} color="#93b3ff" />,
      description:
        'Also known as the Payne Scorecard Method, this model compares your startup against recent completed funding rounds in your geographical region and industry vertical. It adjusts baseline valuation using six qualitative criteria.',
      vectors: [
        'Strength of the Entrepreneur & Team (30% weight)',
        'Size of the Addressable Market Opportunity (25% weight)',
        'Product & Proprietary Intellectual Property (15% weight)',
        'Competitive Environment & Defensive Moat (10% weight)',
        'Marketing & Strategic Partnership Channels (10% weight)',
        'Need for Additional Subsequent Financings (10% weight)',
      ],
      aiEnhancement:
        'EvaluerAI references 120,000 venture funding transactions from public filings and market data to calibrate baseline regional valuations.',
    },
    {
      id: 'berkus',
      title: 'Dave Berkus Milestone Method',
      bestFor: 'Idea Stage, Pre-Seed & Prototype Startups',
      formula: 'Valuation = ∑(5 Critical De-Risking Milestones, up to $1M each)',
      icon: <Scale size={24} color="#93b3ff" />,
      description:
        'Developed by angel investor Dave Berkus, this framework assigns incremental value as early startups de-risk key operational hurdles, providing a quantifiable valuation before any commercial revenue exists.',
      vectors: [
        'Sound Business Concept & Basic Value Proposition (up to $800k)',
        'Functional Working Prototype / Reduced Product Risk (up to $1.2M)',
        'High-Caliber Execution Team & Board (up to $1.5M)',
        'Strategic Alliances, Pilots & LOIs (up to $1.0M)',
        'Commercial Sales Pathway & Margin Viability (up to $1.0M)',
      ],
      aiEnhancement:
        'Our assessment reviews product milestones, customer LOIs, and team operational experience to score milestones objectively.',
    },
    {
      id: 'rfs',
      title: 'Risk Factor Summation (RFS)',
      bestFor: 'Seed Startups Facing Regulatory or Tech Hurdle Risks',
      formula: 'Regional Baseline + (∑ 12 Risk Ratings × $250k Increment)',
      icon: <Shield size={24} color="#93b3ff" />,
      description:
        'The Risk Factor Summation approach assesses 12 specific operational and market risks on a five-point scale (-2 to +2). Each point adjusts the baseline average startup valuation by an objective increment.',
      vectors: [
        'Management & Key Person Risk',
        'Stage of Business & Execution Maturity',
        'Legislation & Regulatory / Political Risk',
        'Sales, Distribution & Go-to-Market Risk',
        'Capital Raising & Runway Sufficiency Risk',
        'Litigation & Intellectual Property Infringement Risk',
      ],
      aiEnhancement:
        'Scans jurisdiction regulations, patent filings, and industry risk benchmarks to calculate objective adjustments.',
    },
    {
      id: 'dcf_multiple',
      title: 'DCF with Terminal Multiple',
      bestFor: 'Revenue-Generating Startups & Series A/B',
      formula: 'NPV = ∑ [CF_t / (1 + WACC)^t] + [Exit EBITDA × Multiple / (1 + WACC)^n]',
      icon: <LineChart size={24} color="#93b3ff" />,
      description:
        'Projects 5-year Free Cash Flows discounted to present value using startup-adjusted WACC (25% to 40%), coupled with an enterprise exit multiple benchmarked against peer public and M&A transactions.',
      vectors: [
        '5-Year Pro-Forma Income Statement Projection',
        'Working Capital & CapEx Requirement Forecasting',
        'Sector-Calibrated Discount Rate (WACC adjusted for illiquidity)',
        'Terminal Multiple derived from EV/ARR and EV/EBITDA comps',
      ],
      aiEnhancement:
        'Integrates accounting data to generate five-year cash flow projections.',
    },
    {
      id: 'gordon',
      title: 'Gordon Growth Model DCF',
      bestFor: 'Cash-Flow Positive or Mature SaaS Businesses',
      formula: 'Terminal Value = [CF_(n+1) / (WACC - g)]',
      icon: <Layers size={24} color="#93b3ff" />,
      description:
        'Assumes that after high-growth startup phases, the business will transition into perpetual steady-state growth (g) in line with long-term macroeconomic GDP expansion.',
      vectors: [
        'Perpetual Steady-State Free Cash Flow',
        'Long-term Sustainable Growth Rate (typically 2.5% to 4.0%)',
        'Normalized Terminal Operating Margins',
        'Conservative Upper-Bound Floor for Institutional Audits',
      ],
      aiEnhancement:
        'Applies established terminal value boundaries for 409A and financial audits.',
    },
  ];

  const current = methods[activeMethod];

  return (
    <section id="methodologies" className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <Layers size={14} color="#93b3ff" />
            <span>Valuation methodology</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Five valuation <span className="gradient-text">methods</span>
          </h2>
          <p style={{ color: 'var(--color-white-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            We combine five standard valuation methods into a weighted consensus: Scorecard, Berkus, Risk Factor Summation, DCF with Terminal Multiple, and the Gordon Growth Model.
          </p>
        </div>

        {/* Methodology selector tabs */}
        <div
          style={{
            display: 'flex',
            gap: '10px',
            overflowX: 'auto',
            paddingBottom: '16px',
            marginBottom: '32px',
            justifyContent: 'flex-start',
          }}
        >
          {methods.map((m, idx) => (
            <button
              key={m.id}
              onClick={() => setActiveMethod(idx)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 20px',
                borderRadius: '12px',
                border: activeMethod === idx ? '1px solid #93b3ff' : '1px solid rgba(147, 179, 255, 0.18)',
                background: activeMethod === idx ? 'rgba(147, 179, 255, 0.12)' : 'rgba(8, 10, 16, 0.6)',
                color: activeMethod === idx ? '#fcfbff' : 'var(--color-white-muted)',
                fontWeight: activeMethod === idx ? 700 : 500,
                fontSize: '0.88rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s',
                boxShadow: activeMethod === idx ? '0 0 20px rgba(147, 179, 255, 0.25)' : 'none',
              }}
            >
              <span>{m.title}</span>
            </button>
          ))}
        </div>

        {/* Method Detail Card */}
        <div
          className="glass-panel"
          style={{
            padding: '40px',
            border: '1px solid rgba(147, 179, 255, 0.25)',
            background: 'radial-gradient(110% 110% at 50% 0%, rgba(147, 179, 255, 0.1) 0%, #05070c 60%, #000000 100%)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
            }}
          >
            {/* Left description */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(147, 179, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(147, 179, 255, 0.3)',
                  }}
                >
                  {current.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#fcfbff' }}>{current.title}</h3>
                  <span style={{ fontSize: '0.82rem', color: '#93b3ff', fontWeight: 600 }}>{current.bestFor}</span>
                </div>
              </div>

              <p style={{ color: 'var(--color-white-muted)', lineHeight: 1.65, fontSize: '0.98rem', marginBottom: '24px' }}>
                {current.description}
              </p>

              {/* Mathematical formula badge */}
              <div
                style={{
                  background: 'rgba(0, 0, 0, 0.6)',
                  padding: '16px 20px',
                  borderRadius: '12px',
                  border: '1px solid rgba(147, 179, 255, 0.18)',
                  marginBottom: '24px',
                }}
              >
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: '#64748b', fontWeight: 700, marginBottom: '6px' }}>
                  Mathematical specification
                </div>
                <code
                  style={{
                    color: '#93b3ff',
                    fontSize: '0.88rem',
                    fontFamily: 'monospace',
                    wordBreak: 'break-all',
                  }}
                >
                  {current.formula}
                </code>
              </div>

              {/* AI Enhancement highlight */}
              <div
                style={{
                  padding: '16px 20px',
                  borderRadius: '12px',
                  background: 'rgba(147, 179, 255, 0.08)',
                  border: '1px solid rgba(147, 179, 255, 0.2)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fcfbff', fontWeight: 700, fontSize: '0.85rem', marginBottom: '6px' }}>
                  Automation and data verification
                </div>
                <p style={{ fontSize: '0.84rem', color: 'var(--color-white-muted)', lineHeight: 1.5, margin: 0 }}>
                  {current.aiEnhancement}
                </p>
              </div>
            </div>

            {/* Right: Key vectors & factors */}
            <div
              style={{
                background: 'rgba(0, 0, 0, 0.5)',
                padding: '30px',
                borderRadius: '18px',
                border: '1px solid rgba(147, 179, 255, 0.15)',
              }}
            >
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fcfbff', marginBottom: '18px' }}>
                Evaluation factors scored
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {current.vectors.map((v, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(147, 179, 255, 0.12)',
                    }}
                  >
                    <CheckCircle size={16} color="#93b3ff" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.88rem', color: 'var(--color-white-muted)' }}>{v}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '24px', paddingTop: '18px', borderTop: '1px solid rgba(147, 179, 255, 0.15)' }}>
                <a
                  href="#valuation-tool"
                  className="btn-primary"
                  style={{ width: '100%', fontSize: '0.88rem', padding: '12px' }}
                >
                  Simulate with {current.title}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
