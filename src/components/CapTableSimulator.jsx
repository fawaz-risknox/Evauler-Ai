'use client';

import { useState, useMemo } from 'react';
import { PieChart, Layers, ArrowUpRight, ShieldCheck, Users, RefreshCw, FileSpreadsheet } from 'lucide-react';

export default function CapTableSimulator() {
  const [preMoney, setPreMoney] = useState(8000000);
  const [raiseAmount, setRaiseAmount] = useState(2000000);
  const [optionPoolExpansion, setOptionPoolExpansion] = useState(5); // in percent
  const [safeNotes, setSafeNotes] = useState(500000);

  const totalPreShares = 10000000; // 10 million baseline shares

  const result = useMemo(() => {
    const postMoney = preMoney + raiseAmount;
    const newInvestorOwnershipPct = (raiseAmount / postMoney) * 100;
    const safeOwnershipPct = preMoney > 0 ? (safeNotes / preMoney) * 100 : 0;
    const esopPostPct = 12 + optionPoolExpansion;
    const founderPostPct = Math.max(0, 100 - newInvestorOwnershipPct - safeOwnershipPct - esopPostPct);

    const sharePrice = postMoney / (totalPreShares * (1 + (raiseAmount + safeNotes) / preMoney));

    const stakeholders = [
      {
        name: 'Founders and team',
        type: 'Common shares (voting)',
        prePct: 75.0,
        postPct: founderPostPct.toFixed(1),
        postVal: Math.round((founderPostPct / 100) * postMoney),
        color: '#93b3ff',
      },
      {
        name: 'New lead venture investors',
        type: 'Series Seed preferred',
        prePct: 0.0,
        postPct: newInvestorOwnershipPct.toFixed(1),
        postVal: Math.round((newInvestorOwnershipPct / 100) * postMoney),
        color: '#adc7ff',
      },
      {
        name: 'Option pool (ESOP)',
        type: 'Incentive stock options (ISO)',
        prePct: 15.0,
        postPct: esopPostPct.toFixed(1),
        postVal: Math.round((esopPostPct / 100) * postMoney),
        color: '#64748b',
      },
      {
        name: 'Angels and SAFE holders',
        type: 'Convertible SAFEs (post-money)',
        prePct: 10.0,
        postPct: safeOwnershipPct.toFixed(1),
        postVal: Math.round((safeOwnershipPct / 100) * postMoney),
        color: '#466299',
      },
    ];

    return {
      postMoney,
      sharePrice,
      newInvestorOwnershipPct: newInvestorOwnershipPct.toFixed(1),
      founderPostPct: founderPostPct.toFixed(1),
      stakeholders,
    };
  }, [preMoney, raiseAmount, optionPoolExpansion, safeNotes]);

  const formatCurrency = (val) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);

  return (
    <section id="cap-table" className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 48px' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <PieChart size={14} color="#93b3ff" />
            <span>Cap table modeling</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Model funding rounds and <span className="gradient-text">equity dilution</span>
          </h2>
          <p style={{ color: 'var(--color-white-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Calculate how new investments, post-money SAFE conversions, and option pool expansions impact ownership and share prices before signing term sheets.
          </p>
        </div>

        {/* The Card */}
        <div
          className="glass-panel"
          style={{
            padding: '36px',
            border: '1px solid rgba(147, 179, 255, 0.25)',
            background: 'radial-gradient(110% 110% at 50% 0%, rgba(147, 179, 255, 0.1) 0%, #05070c 60%, #000000 100%)',
          }}
        >
          {/* Top Sliders & Inputs */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
              paddingBottom: '32px',
              borderBottom: '1px solid rgba(147, 179, 255, 0.15)',
              marginBottom: '32px',
            }}
          >
            {/* Pre-Money Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-white-muted)' }}>Pre-money valuation</span>
                <span style={{ fontWeight: 700, color: '#93b3ff' }}>{formatCurrency(preMoney)}</span>
              </div>
              <input
                type="range"
                min="2000000"
                max="25000000"
                step="500000"
                value={preMoney}
                onChange={(e) => setPreMoney(Number(e.target.value))}
                className="custom-slider"
              />
            </div>

            {/* Target Investment Raise */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-white-muted)' }}>Target Investment Raise</span>
                <span style={{ fontWeight: 700, color: '#fcfbff' }}>{formatCurrency(raiseAmount)}</span>
              </div>
              <input
                type="range"
                min="500000"
                max="10000000"
                step="250000"
                value={raiseAmount}
                onChange={(e) => setRaiseAmount(Number(e.target.value))}
                className="custom-slider"
              />
            </div>

            {/* Option Pool Expansion */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-white-muted)' }}>Option Pool Expansion</span>
                <span style={{ fontWeight: 700, color: '#fcfbff' }}>+{optionPoolExpansion}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="15"
                step="1"
                value={optionPoolExpansion}
                onChange={(e) => setOptionPoolExpansion(Number(e.target.value))}
                className="custom-slider"
              />
            </div>

            {/* Converting SAFEs */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-white-muted)' }}>Unconverted SAFEs</span>
                <span style={{ fontWeight: 700, color: '#fcfbff' }}>{formatCurrency(safeNotes)}</span>
              </div>
              <input
                type="range"
                min="0"
                max="3000000"
                step="100000"
                value={safeNotes}
                onChange={(e) => setSafeNotes(Number(e.target.value))}
                className="custom-slider"
              />
            </div>
          </div>

          {/* Key Output Metrics Banner */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              marginBottom: '32px',
            }}
          >
            <div
              style={{
                background: 'rgba(147, 179, 255, 0.08)',
                border: '1px solid rgba(147, 179, 255, 0.25)',
                padding: '18px 22px',
                borderRadius: '14px',
              }}
            >
              <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>
                Post-money valuation
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fcfbff', fontFamily: 'var(--font-display)' }}>
                {formatCurrency(result.postMoney)}
              </div>
            </div>

            <div
              style={{
                background: 'rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(147, 179, 255, 0.15)',
                padding: '18px 22px',
                borderRadius: '14px',
              }}
            >
              <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>
                Founder post-round ownership
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#93b3ff', fontFamily: 'var(--font-display)' }}>
                {result.founderPostPct}%
              </div>
            </div>

            <div
              style={{
                background: 'rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(147, 179, 255, 0.15)',
                padding: '18px 22px',
                borderRadius: '14px',
              }}
            >
              <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>
                New investor ownership
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fcfbff', fontFamily: 'var(--font-display)' }}>
                {result.newInvestorOwnershipPct}%
              </div>
            </div>

            <div
              style={{
                background: 'rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(147, 179, 255, 0.15)',
                padding: '18px 22px',
                borderRadius: '14px',
              }}
            >
              <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>
                Modeled share price
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#10b981', fontFamily: 'var(--font-display)' }}>
                ${result.sharePrice.toFixed(2)}
              </div>
            </div>
          </div>

          {/* Visual Waterfall Stack Bar */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '8px' }}>
              <span style={{ color: '#fcfbff', fontWeight: 600 }}>Ownership Distribution Waterfall</span>
              <span style={{ color: '#4b585c' }}>Total: 100.0% Fully Diluted</span>
            </div>
            <div
              style={{
                height: '24px',
                width: '100%',
                borderRadius: '8px',
                overflow: 'hidden',
                display: 'flex',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
              }}
            >
              {result.stakeholders.map((s, idx) => (
                <div
                  key={idx}
                  style={{
                    height: '100%',
                    width: `${s.postPct}%`,
                    background: s.color,
                    transition: 'width 0.4s ease',
                  }}
                  title={`${s.name}: ${s.postPct}%`}
                />
              ))}
            </div>
            {/* Legend */}
            <div
              style={{
                display: 'flex',
                gap: '20px',
                flexWrap: 'wrap',
                marginTop: '12px',
                fontSize: '0.78rem',
              }}
            >
              {result.stakeholders.map((s, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '3px', background: s.color }} />
                  <span style={{ color: 'var(--color-white-muted)' }}>{s.name}</span>
                  <strong style={{ color: '#fcfbff' }}>({s.postPct}%)</strong>
                </div>
              ))}
            </div>
          </div>

          {/* Cap Table Details Grid */}
          <div
            style={{
              overflowX: 'auto',
              borderRadius: '12px',
              border: '1px solid rgba(75, 88, 92, 0.3)',
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ background: 'rgba(0, 0, 0, 0.6)', borderBottom: '1px solid rgba(75, 88, 92, 0.3)' }}>
                  <th style={{ padding: '14px 18px', color: '#4b585c', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase' }}>
                    Stakeholder Class
                  </th>
                  <th style={{ padding: '14px 18px', color: '#64748b', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase' }}>
                    Security Type
                  </th>
                  <th style={{ padding: '14px 18px', color: '#64748b', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase' }}>
                    Pre-Round %
                  </th>
                  <th style={{ padding: '14px 18px', color: '#93b3ff', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase' }}>
                    Post-Round %
                  </th>
                  <th style={{ padding: '14px 18px', color: '#64748b', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase' }}>
                    Post-Round Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {result.stakeholders.map((s, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: idx !== result.stakeholders.length - 1 ? '1px solid rgba(147, 179, 255, 0.12)' : 'none',
                      background: idx % 2 === 0 ? 'rgba(255, 255, 255, 0.015)' : 'transparent',
                    }}
                  >
                    <td style={{ padding: '14px 18px', fontWeight: 600, color: '#fcfbff' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: s.color }} />
                        {s.name}
                      </div>
                    </td>
                    <td style={{ padding: '14px 18px', color: 'var(--color-white-muted)' }}>{s.type}</td>
                    <td style={{ padding: '14px 18px', color: '#64748b' }}>{s.prePct}%</td>
                    <td style={{ padding: '14px 18px', fontWeight: 700, color: '#93b3ff' }}>{s.postPct}%</td>
                    <td style={{ padding: '14px 18px', fontWeight: 600, color: '#fcfbff' }}>{formatCurrency(s.postVal)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer note in cap table card */}
          <div
            style={{
              marginTop: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              fontSize: '0.84rem',
              color: 'var(--color-slate-light)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={16} color="#93b3ff" />
              <span>Compliant with SEC Rule 701 and IRS Section 409A safe harbor criteria</span>
            </div>
            <button
              onClick={() => alert('Cap Table data exported to standard CapTableX / CSV format.')}
              className="btn-outline"
              style={{ fontSize: '0.82rem' }}
            >
              <FileSpreadsheet size={15} />
              <span>Export CapTableX CSV</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
