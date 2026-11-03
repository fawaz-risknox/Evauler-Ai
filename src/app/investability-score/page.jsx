'use client';

import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubpageHero from '@/components/SubpageHero';
import CTASection from '@/components/CTASection';
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Users,
  Leaf,
  BarChart3,
  Target,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Sliders,
  Check,
  Compass,
  FileCheck
} from 'lucide-react';

export default function InvestabilityScorePage() {
  // Interactive Dimension Sliders
  const [ideaScore, setIdeaScore] = useState(82);
  const [teamScore, setTeamScore] = useState(78);
  const [esgScore, setEsgScore] = useState(70);
  const [financialScore, setFinancialScore] = useState(75);
  const [fundabilityScore, setFundabilityScore] = useState(80);

  // Weighted calculation (100 pts)
  const overallScore = useMemo(() => {
    const raw =
      ideaScore * 0.25 +
      teamScore * 0.25 +
      esgScore * 0.15 +
      financialScore * 0.20 +
      fundabilityScore * 0.15;
    return Math.round(raw);
  }, [ideaScore, teamScore, esgScore, financialScore, fundabilityScore]);

  const classification = useMemo(() => {
    if (overallScore >= 80) {
      return {
        label: 'Fully Investable',
        badgeColor: '#10b981',
        desc: 'The company meets investor standards across market size, team execution, and unit economics.',
        badgeBg: 'rgba(16, 185, 129, 0.15)',
        badgeBorder: 'rgba(16, 185, 129, 0.4)',
      };
    }
    if (overallScore >= 65) {
      return {
        label: 'Conditionally Investable',
        badgeColor: '#93b3ff',
        desc: 'The business has commercial potential, but specific structural gaps require fixes before pitching lead VCs.',
        badgeBg: 'rgba(147, 179, 255, 0.15)',
        badgeBorder: 'rgba(147, 179, 255, 0.4)',
      };
    }
    return {
      label: 'Needs Development',
      badgeColor: '#f59e0b',
      desc: 'Identified execution or financial risk flags. Prioritize governance and unit economic milestones.',
      badgeBg: 'rgba(245, 158, 11, 0.15)',
      badgeBorder: 'rgba(245, 158, 11, 0.4)',
    };
  }, [overallScore]);

  const dimensions = [
    {
      id: 'idea',
      title: 'Idea and market validation',
      weight: '25% weight',
      criteriaCount: '20 criteria',
      icon: <Lightbulb size={24} color="#93b3ff" />,
      items: [
        'Total Addressable Market verification and growth headroom',
        'Problem severity and customer willingness-to-pay',
        'Defensive technological moat and intellectual property',
        'Competitive density and customer switching friction',
      ],
    },
    {
      id: 'team',
      title: 'Team and execution',
      weight: '25% weight',
      criteriaCount: '22 criteria',
      icon: <Users size={24} color="#93b3ff" />,
      items: [
        'Founder domain expertise and prior operational track record',
        'Engineering cadence and technical architecture resilience',
        'Key executive hire gaps and advisor engagement',
        'Cap table vesting schedules and founder alignment terms',
      ],
    },
    {
      id: 'financial',
      title: 'Financial position',
      weight: '20% weight',
      criteriaCount: '18 criteria',
      icon: <BarChart3 size={24} color="#93b3ff" />,
      items: [
        'Net dollar retention and customer churn rates',
        'LTV/CAC ratio and payback velocity under 12 months',
        'Burn multiple efficiency (Net Burn / Net New ARR)',
        'Zero-cash date runway projection under downside scenarios',
      ],
    },
    {
      id: 'esg',
      title: 'ESG and governance',
      weight: '15% weight',
      criteriaCount: '14 criteria',
      icon: <Leaf size={24} color="#93b3ff" />,
      items: [
        'Regulatory compliance audit across GDPR, SOC 2, and sector laws',
        'Board composition, independent governance, and oversight',
        'Data security and intellectual property assignment',
        'Environmental footprint and supply chain governance',
      ],
    },
    {
      id: 'fundability',
      title: 'Fundability check',
      weight: '15% weight',
      criteriaCount: '14 criteria',
      icon: <Target size={24} color="#93b3ff" />,
      items: [
        'Target check size compared to realistic pre-money valuation range',
        'Investor archetype fit (angels, seed funds, or growth VCs)',
        'SAFE and convertible note dilution sensitivity',
        'Data room completeness and document readiness',
      ],
    },
  ];

  const roadmap = [
    {
      timeline: 'Days 1 to 30',
      phase: 'Immediate remediation',
      badge: 'Sprint 1',
      actions: [
        'Resolve IP assignment gaps and complete founder 83(b) elections',
        'Standardize unit economic accounting and payback calculations',
        'Clean cap table SAFE conversion terms and debt waterfall',
      ],
    },
    {
      timeline: 'Days 31 to 90',
      phase: 'Traction and risk reduction',
      badge: 'Sprint 2',
      actions: [
        'Close signed customer contracts to validate pricing elasticity',
        'Set up quarterly board governance and investor reporting',
        'Stress-test gross margin targets against enterprise scale',
      ],
    },
    {
      timeline: 'Days 91 to 180',
      phase: 'Data room preparation',
      badge: 'Sprint 3',
      actions: [
        'Assemble certified five-method valuation report in data room',
        'Benchmark cohort scores against venture accelerator peers',
        'Initiate investor outreach with documented score rubric',
      ],
    },
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#000000' }}>
      <Navbar />

      {/* Hero Section */}
      <SubpageHero
        badgeIcon={<Target size={14} color="#93b3ff" />}
        badgeText="Venture readiness"
        title={
          <>
            88-point investability score <br />
            <span style={{ color: '#93b3ff' }}>to close diligence gaps</span>
          </>
        }
        description="Evaluate 88 criteria across idea validation, team quality, financials, ESG, and fundability. Receive an objective 0-100 score and a prioritized remediation roadmap."
        primaryCta={{
          label: 'Simulate your score',
          href: '#score-simulator',
        }}
        secondaryCta={{
          label: 'View 88 criteria rubric',
          href: '#dimensions',
        }}
        trustPoints={[
          '88 criteria evaluated',
          '5 scoring dimensions',
          'Prioritized action plan',
        ]}
      />

      {/* Interactive Score Simulator */}
      <section id="score-simulator" style={{ padding: '40px 24px 100px', background: '#000000' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div
            style={{
              borderRadius: '28px',
              border: '1px solid rgba(147, 179, 255, 0.28)',
              background: 'radial-gradient(110% 110% at 50% 0%, rgba(147, 179, 255, 0.12) 0%, #030407 65%, #000000 100%)',
              padding: 'clamp(32px, 5vw, 64px)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 50px rgba(147, 179, 255, 0.1)',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
              {/* Left: Interactive Sliders */}
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#93b3ff', fontWeight: 600, fontSize: '0.9rem', marginBottom: '16px' }}>
                  <Sliders size={18} />
                  <span>Interactive Dimension Sliders</span>
                </div>
                <h3 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 700, color: '#ffffff', marginBottom: '28px' }}>
                  Adjust venture metrics
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {/* Slider 1 */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.92rem' }}>
                      <span style={{ color: '#ffffff', fontWeight: 600 }}>1. Idea & TAM Validation (25%)</span>
                      <span style={{ color: '#93b3ff', fontWeight: 700 }}>{ideaScore} / 100</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="100"
                      value={ideaScore}
                      onChange={(e) => setIdeaScore(Number(e.target.value))}
                      style={{ width: '100%', accentColor: '#93b3ff', cursor: 'pointer' }}
                    />
                  </div>

                  {/* Slider 2 */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.92rem' }}>
                      <span style={{ color: '#ffffff', fontWeight: 600 }}>2. Team & Execution Pedigree (25%)</span>
                      <span style={{ color: '#93b3ff', fontWeight: 700 }}>{teamScore} / 100</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="100"
                      value={teamScore}
                      onChange={(e) => setTeamScore(Number(e.target.value))}
                      style={{ width: '100%', accentColor: '#93b3ff', cursor: 'pointer' }}
                    />
                  </div>

                  {/* Slider 3 */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.92rem' }}>
                      <span style={{ color: '#ffffff', fontWeight: 600 }}>3. Financial Position & Runway (20%)</span>
                      <span style={{ color: '#93b3ff', fontWeight: 700 }}>{financialScore} / 100</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="100"
                      value={financialScore}
                      onChange={(e) => setFinancialScore(Number(e.target.value))}
                      style={{ width: '100%', accentColor: '#93b3ff', cursor: 'pointer' }}
                    />
                  </div>

                  {/* Slider 4 */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.92rem' }}>
                      <span style={{ color: '#ffffff', fontWeight: 600 }}>4. ESG & Governance Resilience (15%)</span>
                      <span style={{ color: '#93b3ff', fontWeight: 700 }}>{esgScore} / 100</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="100"
                      value={esgScore}
                      onChange={(e) => setEsgScore(Number(e.target.value))}
                      style={{ width: '100%', accentColor: '#93b3ff', cursor: 'pointer' }}
                    />
                  </div>

                  {/* Slider 5 */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.92rem' }}>
                      <span style={{ color: '#ffffff', fontWeight: 600 }}>5. Venture Fundability Fit (15%)</span>
                      <span style={{ color: '#93b3ff', fontWeight: 700 }}>{fundabilityScore} / 100</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="100"
                      value={fundabilityScore}
                      onChange={(e) => setFundabilityScore(Number(e.target.value))}
                      style={{ width: '100%', accentColor: '#93b3ff', cursor: 'pointer' }}
                    />
                  </div>
                </div>
              </div>

              {/* Right: Calculated Output Card */}
              <div
                style={{
                  padding: '40px 32px',
                  borderRadius: '24px',
                  border: '1px solid rgba(147, 179, 255, 0.3)',
                  background: 'radial-gradient(100% 100% at 50% 0%, rgba(147, 179, 255, 0.15) 0%, #05070c 80%, #000000 100%)',
                  textAlign: 'center',
                }}
              >
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'rgba(255, 255, 255, 0.6)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Projected Investability Score
                </span>

                <div
                  style={{
                    fontSize: 'clamp(4rem, 8vw, 6.2rem)',
                    fontWeight: 800,
                    lineHeight: 1,
                    color: '#ffffff',
                    fontFamily: 'var(--font-display, "Plus Jakarta Sans"), sans-serif',
                    margin: '18px 0',
                  }}
                >
                  {overallScore}
                  <span style={{ fontSize: '2rem', color: '#93b3ff', fontWeight: 500 }}>/100</span>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '8px 24px',
                      borderRadius: '999px',
                      background: classification.badgeBg,
                      border: `1px solid ${classification.badgeBorder}`,
                      color: classification.badgeColor,
                      fontSize: '1.05rem',
                      fontWeight: 700,
                    }}
                  >
                    {classification.label}
                  </span>
                </div>

                <p style={{ fontSize: '0.94rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6, marginBottom: '32px' }}>
                  {classification.desc}
                </p>

                <a
                  href="https://evaluer-valuation.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    width: '100%',
                    padding: '16px 24px',
                    borderRadius: '999px',
                    background: '#93b3ff',
                    color: '#000000',
                    fontSize: '1rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    boxShadow: '0 0 28px rgba(147, 179, 255, 0.4)',
                  }}
                >
                  <span>Start Complete 88-Point Assessment</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 5 Core Dimensions Deep Dive */}
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
              <span>Methodology Framework</span>
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
              Five dimensions of <span style={{ color: '#93b3ff' }}>investability</span>
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6 }}>
              A balanced rubric that mirrors how top VC investment committees and angel syndicates vet opportunities.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {dimensions.map((dim, idx) => (
              <div
                key={dim.id}
                style={{
                  padding: '38px 32px',
                  borderRadius: '22px',
                  border: '1px solid rgba(147, 179, 255, 0.2)',
                  background: 'radial-gradient(110% 110% at 50% 110%, rgba(147, 179, 255, 0.12) 0%, rgba(8, 10, 15, 0.95) 55%, #050608 100%)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '22px' }}>
                  {dim.icon}
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#93b3ff', padding: '4px 12px', borderRadius: '999px', background: 'rgba(147, 179, 255, 0.1)', border: '1px solid rgba(147, 179, 255, 0.3)' }}>
                    {dim.weight}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                  {dim.title}
                </h3>
                <span style={{ fontSize: '0.84rem', color: 'rgba(255, 255, 255, 0.5)', display: 'block', marginBottom: '20px' }}>
                  {dim.criteriaCount}
                </span>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {dim.items.map((it, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.72)', lineHeight: 1.5 }}>
                      <Check size={16} color="#93b3ff" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prioritized Action Plan / Roadmap */}
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
              <span>Actionable Remediation</span>
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
              From assessment to <span style={{ color: '#93b3ff' }}>action plan</span>
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6 }}>
              A score is only as valuable as the roadmap it produces. Every EvaluerAI audit outputs a prioritized sequence of de-risking actions.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {roadmap.map((rm, idx) => (
              <div
                key={idx}
                style={{
                  padding: '38px 30px',
                  borderRadius: '22px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  background: '#040508',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#93b3ff' }}>{rm.timeline}</span>
                  <span style={{ fontSize: '0.78rem', padding: '3px 10px', borderRadius: '999px', background: 'rgba(255, 255, 255, 0.06)', color: 'rgba(255, 255, 255, 0.7)' }}>
                    {rm.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', marginBottom: '20px' }}>
                  {rm.phase}
                </h3>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {rm.actions.map((act, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.5 }}>
                      <CheckCircle2 size={16} color="#93b3ff" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
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

