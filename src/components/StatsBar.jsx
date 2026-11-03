'use client';

export default function StatsBar() {
  const stats = [
    { value: '3+', label: 'Countries served' },
    { value: '150+', label: 'Entity evaluations' },
    { value: '99%', label: 'Evaluation accuracy' },
    { value: '88', label: 'Evaluation criteria' },
  ];

  return (
    <section className="stats-strip" aria-label="EvaluerAI at a glance">
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        <div className="stats-grid">
          {stats.map((s, idx) => (
            <div key={idx} className="stat-item">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .stats-strip {
          position: relative;
          z-index: 10;
          margin-top: -36px;
          padding: 0 0 64px 0;
          background: transparent;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: radial-gradient(120% 120% at 50% 0%, rgba(20, 25, 40, 0.75) 0%, rgba(8, 10, 17, 0.95) 70%, #040508 100%);
          border: 1px solid rgba(147, 179, 255, 0.2);
          border-radius: 20px;
          padding: clamp(24px, 3.5vw, 36px) clamp(20px, 3vw, 40px);
          box-shadow: 0 16px 50px rgba(0, 0, 0, 0.7), 0 0 35px rgba(147, 179, 255, 0.08);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .stats-grid:hover {
          border-color: rgba(147, 179, 255, 0.4);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8), 0 0 45px rgba(147, 179, 255, 0.15);
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 0 clamp(20px, 2.5vw, 32px);
          border-left: 1px solid rgba(147, 179, 255, 0.14);
        }

        .stat-item:first-child {
          padding-left: 0;
          border-left: none;
        }

        .stat-value {
          font-family: var(--font-display, "Plus Jakarta Sans"), sans-serif;
          font-size: clamp(1.75rem, 2.5vw, 2.25rem);
          font-weight: 800;
          letter-spacing: -0.025em;
          line-height: 1.1;
          color: #ffffff;
        }

        .stat-label {
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #93b3ff;
        }

        @media (max-width: 860px) {
          .stats-strip {
            margin-top: 0;
            padding: 24px 0 48px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px 24px;
            padding: 24px 20px;
          }

          .stat-item {
            padding: 0;
            border-left: none;
          }
        }

        @media (max-width: 520px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
}
