'use client';

import { Check, X, Sparkles, HelpCircle } from 'lucide-react';

export default function ComparisonTable() {
  const criteria = [
    {
      feature: '5 Validated Algorithmic Models (DCF, Berkus, Scorecard, RFS, Gordon)',
      evaluer: true,
      equidam: true,
      eqvista: false,
      traditional: 'Partial (Manual)',
    },
    {
      feature: 'Real-Time Cap Table & Share Issuance Engine',
      evaluer: true,
      equidam: false,
      eqvista: true,
      traditional: false,
    },
    {
      feature: 'IRS Audit-Defensible 409A Certified Sign-Off',
      evaluer: true,
      equidam: false,
      eqvista: true,
      traditional: true,
    },
    {
      feature: 'Report Turnaround Time',
      evaluer: '< 24 Hours (Instant Draft)',
      equidam: 'Instant (No 409A sign-off)',
      eqvista: '2 to 5 Business Days',
      traditional: '3 to 5 Weeks',
    },
    {
      feature: 'Interactive Financing Round Dilution Modeler',
      evaluer: true,
      equidam: false,
      eqvista: true,
      traditional: false,
    },
    {
      feature: 'Real-time Accounting Sync (QuickBooks, Xero, Stripe)',
      evaluer: true,
      equidam: false,
      eqvista: 'Limited',
      traditional: false,
    },
    {
      feature: '120k+ Benchmark Dataset from Private Deals',
      evaluer: true,
      equidam: true,
      eqvista: false,
      traditional: 'Static samples',
    },
    {
      feature: 'Typical Annual Cost for 409A + Valuation Platform',
      evaluer: '$990 / year (all included)',
      equidam: '€490/yr (no 409A certification)',
      eqvista: '$990 - $1,800 / year',
      traditional: '$8,000 - $15,000+',
    },
  ];

  const renderCell = (val) => {
    if (val === true) {
      return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid #10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Check size={14} color="#10b981" />
          </div>
        </div>
      );
    }
    if (val === false) {
      return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: 'rgba(239, 68, 68, 0.12)',
              border: '1px solid rgba(239, 68, 68, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <X size={14} color="#ef4444" />
          </div>
        </div>
      );
    }
    return (
      <span style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--color-white-muted)' }}>
        {val}
      </span>
    );
  };

  return (
    <section id="comparison" className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <Sparkles size={14} color="#93b3ff" />
            <span>Competitive comparison</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Why founders choose <span className="gradient-text">EvaluerAI</span>
          </h2>
          <p style={{ color: 'var(--color-white-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Equidam models pre-money valuations. Eqvista tracks equity and cap tables. EvaluerAI combines continuous valuation modeling and cap table management with certified 409A reports.
          </p>
        </div>

        {/* Table Container */}
        <div
          className="glass-panel"
          style={{
            overflowX: 'auto',
            border: '1px solid rgba(147, 179, 255, 0.2)',
            background: 'rgba(8, 10, 16, 0.9)',
            borderRadius: '20px',
            padding: '4px',
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', minWidth: '760px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(147, 179, 255, 0.18)' }}>
                <th
                  style={{
                    padding: '24px 20px',
                    textAlign: 'left',
                    color: '#64748b',
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    width: '34%',
                  }}
                >
                  Feature and capability
                </th>
                <th
                  style={{
                    padding: '24px 16px',
                    background: 'rgba(147, 179, 255, 0.08)',
                    borderLeft: '1px solid rgba(147, 179, 255, 0.25)',
                    borderRight: '1px solid rgba(147, 179, 255, 0.25)',
                    width: '22%',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                    <span
                      style={{
                        background: '#93b3ff',
                        color: '#08090d',
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        padding: '2px 8px',
                        borderRadius: '4px',
                        textTransform: 'uppercase',
                      }}
                    >
                      All in one platform
                    </span>
                    <img
                      src="/LOGO/eValuer%20Ai%20Logo%20White.png"
                      alt="EvaluerAI"
                      style={{ height: '18px', width: 'auto', display: 'block', marginTop: '4px' }}
                    />
                  </div>
                </th>
                <th style={{ padding: '24px 16px', color: '#fcfbff', fontSize: '0.95rem', fontWeight: 700, width: '15%' }}>
                  Eqvista
                </th>
                <th style={{ padding: '24px 16px', color: '#fcfbff', fontSize: '0.95rem', fontWeight: 700, width: '15%' }}>
                  Equidam
                </th>
                <th style={{ padding: '24px 16px', color: '#64748b', fontSize: '0.88rem', fontWeight: 600, width: '14%' }}>
                  Big 4 Appraisers
                </th>
              </tr>
            </thead>
            <tbody>
              {criteria.map((c, idx) => (
                <tr
                  key={idx}
                  style={{
                    borderBottom: idx !== criteria.length - 1 ? '1px solid rgba(147, 179, 255, 0.12)' : 'none',
                    background: idx % 2 === 0 ? 'rgba(255, 255, 255, 0.015)' : 'transparent',
                  }}
                >
                  <td style={{ padding: '18px 20px', textAlign: 'left', fontWeight: 600, color: '#fcfbff', fontSize: '0.9rem' }}>
                    {c.feature}
                  </td>
                  <td
                    style={{
                      padding: '18px 16px',
                      background: 'rgba(147, 179, 255, 0.05)',
                      borderLeft: '1px solid rgba(147, 179, 255, 0.2)',
                      borderRight: '1px solid rgba(147, 179, 255, 0.2)',
                      fontWeight: 700,
                      color: '#93b3ff',
                    }}
                  >
                    {renderCell(c.evaluer)}
                  </td>
                  <td style={{ padding: '18px 16px' }}>{renderCell(c.eqvista)}</td>
                  <td style={{ padding: '18px 16px' }}>{renderCell(c.equidam)}</td>
                  <td style={{ padding: '18px 16px' }}>{renderCell(c.traditional)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
