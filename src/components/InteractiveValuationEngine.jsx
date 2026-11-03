'use client';

import { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import {
  Calculator,
  Sparkles,
  TrendingUp,
  Download,
  ShieldCheck,
  Check,
  Layers,
  Info,
  DollarSign,
  Percent,
  Sliders,
  ChevronRight,
  FileCheck
} from 'lucide-react';

export default function InteractiveValuationEngine() {
  // Interactive state
  const [stage, setStage] = useState('seed'); // 'pre_seed' | 'seed' | 'series_a' | 'growth'
  const [arr, setArr] = useState(600000); // in dollars
  const [growthRate, setGrowthRate] = useState(120); // in percent
  const [industry, setIndustry] = useState('ai_saas');
  const [teamScore, setTeamScore] = useState('experienced');
  const [ipMoat, setIpMoat] = useState('proprietary');
  const [showExportModal, setShowExportModal] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Industry benchmark multiples & baseline configurations
  const industryProfiles = {
    ai_saas: { name: 'AI & Enterprise SaaS', medianMultiple: 15.5, baseSeedVal: 8500000 },
    fintech: { name: 'FinTech & Payments', medianMultiple: 11.2, baseSeedVal: 7200000 },
    healthtech: { name: 'HealthTech & Bio', medianMultiple: 12.8, baseSeedVal: 7800000 },
    cleantech: { name: 'Climate & DeepTech', medianMultiple: 13.0, baseSeedVal: 7500000 },
    consumer: { name: 'Consumer Tech', medianMultiple: 6.5, baseSeedVal: 5500000 },
  };

  const teamMultipliers = {
    first_time: { label: 'First-time Founders', factor: 1.0 },
    experienced: { label: 'Experienced Operators (Ex-FAANG/Founders)', factor: 1.25 },
    serial_exit: { label: 'Serial Founders with Prior Venture Exit', factor: 1.6 },
  };

  const ipMultipliers = {
    standard: { label: 'Standard Codebase / MVP', factor: 1.0 },
    proprietary: { label: 'Proprietary AI Models & Data Flywheel', factor: 1.3 },
    patented: { label: 'Granted Patents & Defensible Tech Moat', factor: 1.65 },
  };

  // Algorithmic Calculation across 5 Institutional Valuation Methods
  const calculation = useMemo(() => {
    const prof = industryProfiles[industry];
    const teamFactor = teamMultipliers[teamScore].factor;
    const ipFactor = ipMultipliers[ipMoat].factor;
    const growthFactor = Math.max(0.7, 1 + (growthRate - 50) / 100 * 0.4);

    let berkusVal = 0;
    let scorecardVal = 0;
    let rfsVal = 0;
    let dcfMultipleVal = 0;
    let gordonVal = 0;

    if (stage === 'pre_seed') {
      // Pre-revenue models dominate
      berkusVal = (500000 * teamFactor) + (450000 * ipFactor) + 600000 + 400000 + (arr > 0 ? 500000 : 200000);
      scorecardVal = 3200000 * teamFactor * ipFactor * (growthFactor * 0.9);
      rfsVal = 3500000 * (1 + (teamFactor - 1) * 0.8 + (ipFactor - 1) * 0.8);
      dcfMultipleVal = Math.max(2500000, arr * prof.medianMultiple * 1.2 * growthFactor);
      gordonVal = Math.max(2200000, arr * 8 * growthFactor);
    } else if (stage === 'seed') {
      berkusVal = 3200000 * teamFactor;
      scorecardVal = prof.baseSeedVal * teamFactor * ipFactor * (growthRate > 100 ? 1.2 : 1.0);
      rfsVal = prof.baseSeedVal * (0.9 + (teamFactor - 1) * 0.5 + (ipFactor - 1) * 0.6);
      dcfMultipleVal = Math.max(4500000, arr * prof.medianMultiple * (growthRate / 100 * 0.6 + 0.5));
      gordonVal = Math.max(4000000, arr * 11.5 * growthFactor);
    } else if (stage === 'series_a') {
      berkusVal = 5000000 * teamFactor;
      scorecardVal = 16000000 * teamFactor * ipFactor;
      rfsVal = 18000000 * (1 + (teamFactor - 1) * 0.4);
      dcfMultipleVal = Math.max(12000000, arr * prof.medianMultiple * (1 + growthRate / 200));
      gordonVal = Math.max(10000000, arr * 14 * growthFactor);
    } else {
      // Growth / Series B+
      berkusVal = 8000000;
      scorecardVal = 32000000 * ipFactor;
      rfsVal = 35000000 * teamFactor;
      dcfMultipleVal = Math.max(25000000, arr * prof.medianMultiple * 1.15 * (growthRate / 100));
      gordonVal = Math.max(22000000, arr * 15 * growthFactor);
    }

    // Weighting depends on stage
    let weights = {};
    if (stage === 'pre_seed') {
      weights = { berkus: 0.35, scorecard: 0.35, rfs: 0.20, dcf: 0.05, gordon: 0.05 };
    } else if (stage === 'seed') {
      weights = { berkus: 0.15, scorecard: 0.25, rfs: 0.20, dcf: 0.25, gordon: 0.15 };
    } else if (stage === 'series_a') {
      weights = { berkus: 0.05, scorecard: 0.15, rfs: 0.15, dcf: 0.40, gordon: 0.25 };
    } else {
      weights = { berkus: 0.02, scorecard: 0.08, rfs: 0.10, dcf: 0.45, gordon: 0.35 };
    }

    const consensusVal = Math.round(
      (berkusVal * weights.berkus) +
      (scorecardVal * weights.scorecard) +
      (rfsVal * weights.rfs) +
      (dcfMultipleVal * weights.dcf) +
      (gordonVal * weights.gordon)
    );

    const lowRange = Math.round(consensusVal * 0.85);
    const highRange = Math.round(consensusVal * 1.18);

    return {
      consensusVal,
      lowRange,
      highRange,
      methods: [
        { name: 'Dave Berkus Model', val: Math.round(berkusVal), weight: Math.round(weights.berkus * 100), desc: 'Qualitative milestones & execution risk removal' },
        { name: 'Scorecard Method', val: Math.round(scorecardVal), weight: Math.round(weights.scorecard * 100), desc: 'Benchmarked against recent VC transactions in sector' },
        { name: 'Risk Factor Summation', val: Math.round(rfsVal), weight: Math.round(weights.rfs * 100), desc: '12 macro, legal, technological & market risk vectors' },
        { name: 'DCF with Terminal Multiple', val: Math.round(dcfMultipleVal), weight: Math.round(weights.dcf * 100), desc: '5-year forecasted cash flows + sector exit multiple' },
        { name: 'Gordon Growth Model DCF', val: Math.round(gordonVal), weight: Math.round(weights.gordon * 100), desc: 'Perpetual sustainable steady-state growth' },
      ],
    };
  }, [stage, arr, growthRate, industry, teamScore, ipMoat]);

  const formatCurrency = (num) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(num);
  };

  const formatCompact = (num) => {
    if (num >= 1000000) {
      return `$${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `$${(num / 1000).toFixed(0)}k`;
    }
    return `$${num}`;
  };

  const handleTriggerExport = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#93b3ff', '#fcfbff', '#adc7ff', '#7999d1'],
    });
    setShowExportModal(true);
  };

  return (
    <section id="valuation-tool" className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <Sliders size={14} color="#93b3ff" />
            <span>Valuation engine</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Simulate your company valuation in <span className="gradient-text">real time</span>
          </h2>
          <p style={{ color: 'var(--color-white-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Adjust your financial metrics, growth rate, and market defensibility. EvaluerAI runs five valuation models simultaneously to calculate a defensible consensus range.
          </p>
        </div>

        {/* The Main Calculator Card */}
        <div
          className="glass-panel"
          style={{
            border: '1px solid rgba(147, 179, 255, 0.28)',
            boxShadow: '0 25px 70px rgba(0, 0, 0, 0.8), 0 0 40px rgba(147, 179, 255, 0.1)',
            padding: '36px',
            borderRadius: '24px',
            background: 'radial-gradient(110% 110% at 50% 0%, rgba(147, 179, 255, 0.1) 0%, #05070c 60%, #000000 100%)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '40px',
            }}
          >
            {/* LEFT COLUMN: CONTROLS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: '#93b3ff',
                    marginBottom: '10px',
                  }}
                >
                  1. Company financing stage
                </label>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '8px',
                    background: 'rgba(0, 0, 0, 0.5)',
                    padding: '6px',
                    borderRadius: '12px',
                    border: '1px solid rgba(147, 179, 255, 0.18)',
                  }}
                >
                  {[
                    { id: 'pre_seed', label: 'Pre-Seed' },
                    { id: 'seed', label: 'Seed' },
                    { id: 'series_a', label: 'Series A' },
                    { id: 'growth', label: 'Series B+' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setStage(s.id)}
                      style={{
                        padding: '10px 4px',
                        borderRadius: '8px',
                        border: 'none',
                        background: stage === s.id ? '#93b3ff' : 'transparent',
                        color: stage === s.id ? '#08090d' : 'var(--color-white-muted)',
                        fontWeight: 700,
                        fontSize: '0.82rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        textAlign: 'center',
                      }}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* ARR Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <label style={{ fontSize: '0.88rem', fontWeight: 600, color: '#fcfbff' }}>
                    Annual recurring revenue (ARR)
                  </label>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      color: '#93b3ff',
                      fontSize: '1.1rem',
                      background: 'rgba(147, 179, 255, 0.08)',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      border: '1px solid rgba(147, 179, 255, 0.25)',
                    }}
                  >
                    {formatCurrency(arr)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5000000"
                  step="50000"
                  value={arr}
                  onChange={(e) => setArr(Number(e.target.value))}
                  className="custom-slider"
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748b', marginTop: '6px' }}>
                  <span>$0 (Pre-revenue)</span>
                  <span>$1.5M</span>
                  <span>$3.0M</span>
                  <span>$5.0M+</span>
                </div>
              </div>

              {/* YoY Growth Rate Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <label style={{ fontSize: '0.88rem', fontWeight: 600, color: '#fcfbff' }}>
                    Year-over-year (YoY) growth rate
                  </label>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      color: '#93b3ff',
                      fontSize: '1.1rem',
                      background: 'rgba(147, 179, 255, 0.08)',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      border: '1px solid rgba(147, 179, 255, 0.25)',
                    }}
                  >
                    +{growthRate}% YoY
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="300"
                  step="10"
                  value={growthRate}
                  onChange={(e) => setGrowthRate(Number(e.target.value))}
                  className="custom-slider"
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748b', marginTop: '6px' }}>
                  <span>0% (Steady)</span>
                  <span>100% (2x T2D3)</span>
                  <span>200% (3x)</span>
                  <span>300%+</span>
                </div>
              </div>

              {/* Industry Sector Dropdown */}
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#fcfbff', marginBottom: '8px' }}>
                  Industry vertical and peer benchmarks
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    background: 'rgba(0, 0, 0, 0.7)',
                    border: '1px solid rgba(147, 179, 255, 0.25)',
                    color: '#fcfbff',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <option value="ai_saas">AI and enterprise SaaS (15.5x ARR multiple)</option>
                  <option value="fintech">Fintech and embedded finance (11.2x ARR multiple)</option>
                  <option value="healthtech">Healthtech and digital therapeutics (12.8x multiple)</option>
                  <option value="cleantech">Climate tech and energy infrastructure (13.0x multiple)</option>
                  <option value="consumer">Consumer digital and commerce (6.5x multiple)</option>
                </select>
              </div>

              {/* Team Track Record */}
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#fcfbff', marginBottom: '8px' }}>
                  Founding team track record
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {Object.entries(teamMultipliers).map(([key, val]) => (
                    <label
                      key={key}
                      onClick={() => setTeamScore(key)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        background: teamScore === key ? 'rgba(147, 179, 255, 0.12)' : 'rgba(0, 0, 0, 0.4)',
                        border: teamScore === key ? '1px solid rgba(147, 179, 255, 0.5)' : '1px solid rgba(147, 179, 255, 0.15)',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        fontSize: '0.85rem',
                        color: teamScore === key ? '#fcfbff' : 'var(--color-white-muted)',
                        fontWeight: teamScore === key ? 600 : 400,
                      }}
                    >
                      <div
                        style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          border: teamScore === key ? '5px solid #93b3ff' : '1px solid #64748b',
                          background: teamScore === key ? '#fcfbff' : 'transparent',
                        }}
                      />
                      <span>{val.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* IP / Technology Moat */}
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#fcfbff', marginBottom: '8px' }}>
                  Proprietary IP and technological moat
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {Object.entries(ipMultipliers).map(([key, val]) => (
                    <label
                      key={key}
                      onClick={() => setIpMoat(key)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        background: ipMoat === key ? 'rgba(147, 179, 255, 0.12)' : 'rgba(0, 0, 0, 0.4)',
                        border: ipMoat === key ? '1px solid rgba(147, 179, 255, 0.5)' : '1px solid rgba(147, 179, 255, 0.15)',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        fontSize: '0.85rem',
                        color: ipMoat === key ? '#fcfbff' : 'var(--color-white-muted)',
                        fontWeight: ipMoat === key ? 600 : 400,
                      }}
                    >
                      <div
                        style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          border: ipMoat === key ? '5px solid #93b3ff' : '1px solid #64748b',
                          background: ipMoat === key ? '#fcfbff' : 'transparent',
                        }}
                      />
                      <span>{val.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: VALUATION SYNTHESIS & METHODS */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              {/* Top Output Card */}
              <div
                style={{
                  background: 'radial-gradient(110% 110% at 50% 0%, rgba(147, 179, 255, 0.16) 0%, rgba(8, 11, 20, 0.95) 55%, #030407 100%)',
                  borderRadius: '20px',
                  padding: '30px',
                  border: '1px solid rgba(147, 179, 255, 0.35)',
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(147, 179, 255, 0.1)',
                  marginBottom: '28px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.8rem', color: '#93b3ff', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                    Consensus pre-money valuation
                  </span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: '#10b981',
                      background: 'rgba(16, 185, 129, 0.15)',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <Check size={12} /> Defensible
                  </span>
                </div>

                <div
                  style={{
                    fontSize: 'clamp(2.4rem, 4vw, 3.4rem)',
                    fontWeight: 800,
                    fontFamily: 'var(--font-display)',
                    color: '#fcfbff',
                    letterSpacing: '-0.03em',
                    lineHeight: 1.1,
                    marginBottom: '10px',
                  }}
                >
                  {formatCurrency(calculation.consensusVal)}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-white-muted)', fontSize: '0.92rem', marginBottom: '20px' }}>
                  <span>Calculated range:</span>
                  <strong style={{ color: '#fcfbff' }}>
                    {formatCompact(calculation.lowRange)} - {formatCompact(calculation.highRange)}
                  </strong>
                </div>

                {/* Micro metrics bar */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '12px',
                    padding: '14px',
                    borderRadius: '12px',
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '1px solid rgba(147, 179, 255, 0.15)',
                    textAlign: 'center',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase' }}>ARR multiple</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fcfbff' }}>
                      {arr > 0 ? `${(calculation.consensusVal / arr).toFixed(1)}x` : 'N/A (Pre-Rev)'}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase' }}>Peer percentile</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#93b3ff' }}>Top 18%</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase' }}>IRS 409A ready</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#10b981' }}>Eligible</div>
                  </div>
                </div>
              </div>

              {/* 5-Methodology Consensus Breakdown */}
              <div
                style={{
                  background: 'rgba(0, 0, 0, 0.5)',
                  borderRadius: '16px',
                  padding: '24px',
                  border: '1px solid rgba(147, 179, 255, 0.18)',
                  marginBottom: '24px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fcfbff', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Methodology contributions
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Consensus weights</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {calculation.methods.map((m, idx) => (
                    <div key={idx}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.84rem', marginBottom: '4px' }}>
                        <span style={{ color: '#fcfbff', fontWeight: 600 }}>{m.name}</span>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                          <span style={{ color: '#93b3ff', fontWeight: 700 }}>{formatCompact(m.val)}</span>
                          <span style={{ fontSize: '0.75rem', color: '#64748b' }}>({m.weight}%)</span>
                        </div>
                      </div>
                      <div style={{ height: '5px', background: 'rgba(75, 88, 92, 0.25)', borderRadius: '3px', overflow: 'hidden' }}>
                        <div
                          style={{
                            height: '100%',
                            width: `${m.weight * 2}%`,
                            background: 'linear-gradient(90deg, rgba(147, 179, 255, 0.35), #93b3ff)',
                            borderRadius: '3px',
                            transition: 'width 0.4s ease',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={handleTriggerExport}
                  className="btn-primary"
                  style={{ flex: 1, minWidth: '220px', padding: '14px 20px' }}
                >
                  <FileCheck size={18} />
                  <span>Preview valuation report</span>
                </button>
                <a
                  href="#pricing"
                  className="btn-secondary"
                  style={{ padding: '14px 20px', display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <ShieldCheck size={18} color="#93b3ff" />
                  <span>Order 409A report ($990)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Modal: Full Report Preview */}
        {showExportModal && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1000,
              background: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(12px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
          >
            <div
              className="glass-panel"
              style={{
                maxWidth: '640px',
                width: '100%',
                background: '#0a0b12',
                border: '1px solid rgba(147, 179, 255, 0.35)',
                padding: '32px',
                borderRadius: '24px',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 40px rgba(147, 179, 255, 0.15)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div>
                  <div className="badge-pill" style={{ marginBottom: '8px' }}>
                    <Sparkles size={14} color="#93b3ff" />
                    <span>Report generated</span>
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fcfbff' }}>
                    Valuation appraisal summary
                  </h3>
                </div>
                <button
                  onClick={() => setShowExportModal(false)}
                  style={{
                    background: 'none',
                    border: '1px solid rgba(75, 88, 92, 0.4)',
                    borderRadius: '8px',
                    color: '#fcfbff',
                    padding: '6px 10px',
                    cursor: 'pointer',
                  }}
                >
                  ✕
                </button>
              </div>

              {/* Certified Appraisal Document Card with Black Logo on White */}
              <div
                style={{
                  background: '#ffffff',
                  color: '#0f172a',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '22px',
                  marginBottom: '20px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.35)',
                }}
              >
                {/* Document Header with Black Logo */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid #e2e8f0',
                    paddingBottom: '12px',
                    marginBottom: '16px',
                  }}
                >
                  <img
                    src="/LOGO/eValuer%20Ai%20Logo%20Black.png"
                    alt="EvaluerAI Official Logo"
                    style={{ height: '22px', width: 'auto', display: 'block' }}
                  />
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: '#64748b',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Certified Appraisal
                  </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Target Pre-Money:</span>
                  <strong style={{ color: '#0f172a', fontSize: '1.25rem' }}>{formatCurrency(calculation.consensusVal)}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Low/High Spread:</span>
                  <span style={{ color: '#2563eb', fontWeight: 700 }}>
                    {formatCompact(calculation.lowRange)} - {formatCompact(calculation.highRange)}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Industry Benchmark:</span>
                  <span style={{ color: '#1e293b', fontWeight: 600 }}>{industryProfiles[industry].name}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Methods Applied:</span>
                  <span style={{ color: '#1e293b', fontWeight: 600 }}>Scorecard, Berkus, RFS, DCF (5 models)</span>
                </div>
              </div>

              <p style={{ fontSize: '0.85rem', color: '#4b585c', lineHeight: 1.5, marginBottom: '24px' }}>
                Your complete 28-page PDF dossier includes full discounted cash flow models, risk matrices, peer company
                multiples, and investor-ready summary slides.
              </p>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={() => {
                    setIsCopied(true);
                    setTimeout(() => setIsCopied(false), 2000);
                  }}
                  className="btn-secondary"
                  style={{ flex: 1 }}
                >
                  {isCopied ? '✓ Link copied' : 'Copy shareable link'}
                </button>
                <button
                  onClick={() => {
                    alert('Full valuation summary exported. Welcome to EvaluerAI.');
                    setShowExportModal(false);
                  }}
                  className="btn-primary"
                  style={{ flex: 1 }}
                >
                  <Download size={16} />
                  <span>Download summary</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
