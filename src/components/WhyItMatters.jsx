'use client';

import { BarChart3, Database } from 'lucide-react';

export default function WhyItMatters() {
  return (
    <div className="why-section">
      <div className="why-grid">
        <div className="why-copy">
          <div className="why-kicker">
            <span className="why-kicker-line" aria-hidden="true" />
            <span>Before a raise</span>
          </div>

          <h2 className="why-heading">
            Two questions
            <br />
            before you raise
          </h2>

          <p className="why-lead">
            Before you raise, you need answers to two questions.
          </p>
        </div>

        <div className="why-cards">
          <article className="why-card">
            <div className="why-icon">
              <BarChart3 size={21} strokeWidth={1.7} aria-hidden="true" />
            </div>
            <div className="why-card-body">
              <div className="why-card-index">
                <span>01</span>
                <span className="why-card-rule" aria-hidden="true" />
              </div>
              <h3 className="why-card-question">
                What is the fair value of my business?
              </h3>
            </div>
          </article>

          <article className="why-card">
            <div className="why-icon">
              <Database size={21} strokeWidth={1.7} aria-hidden="true" />
            </div>
            <div className="why-card-body">
              <div className="why-card-index">
                <span>02</span>
                <span className="why-card-rule" aria-hidden="true" />
              </div>
              <h3 className="why-card-question">
                Is my entity ready for investment?
              </h3>
            </div>
          </article>
        </div>
      </div>

      <div className="why-divider" aria-hidden="true" />

      <p className="why-footnote">
        Bankers and consultants take weeks and charge for a memo. EvaluerAI scores the company from the data you enter and returns a valuation and an investability score before you talk to investors.
      </p>

      <style jsx>{`
        .why-section {
          width: 100%;
        }

        .why-grid {
          display: grid;
          grid-template-columns: minmax(300px, 0.9fr) minmax(0, 1.65fr);
          gap: clamp(44px, 5.5vw, 72px);
          align-items: center;
        }

        .why-copy {
          max-width: 400px;
        }

        .why-kicker {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
          color: #93b3ff;
          font-family: var(--font-sans);
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .why-kicker-line {
          display: block;
          width: 38px;
          height: 2px;
          flex-shrink: 0;
          background: #93b3ff;
        }

        .why-heading {
          margin: 0 0 22px;
          font-family: var(--font-display);
          font-size: clamp(2.3rem, 3.4vw, 2.85rem);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -0.035em;
          color: #ffffff;
        }

        .why-lead {
          max-width: 380px;
          margin: 0;
          font-size: clamp(0.98rem, 1.2vw, 1.05rem);
          font-weight: 400;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.65);
        }

        .why-cards {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(18px, 2.2vw, 26px);
        }

        .why-card {
          display: flex;
          flex-direction: column;
          min-height: 260px;
          padding: 32px 30px;
          border: 1px solid rgba(147, 179, 255, 0.2);
          border-radius: 20px;
          background-color: #05060a;
          background: radial-gradient(110% 110% at 50% 0%, #151a2a 0%, #090b14 65%, #05060a 100%);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .why-card:hover {
          border-color: rgba(147, 179, 255, 0.45);
          background: radial-gradient(110% 110% at 50% 0%, #1c2338 0%, #0d101c 65%, #05060a 100%);
          transform: translateY(-3px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7), 0 0 30px rgba(147, 179, 255, 0.12);
        }

        .why-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border: 1px solid rgba(147, 179, 255, 0.35);
          border-radius: 12px;
          background: rgba(147, 179, 255, 0.08);
          color: #93b3ff;
          transition: all 0.2s ease;
        }

        .why-card:hover .why-icon {
          border-color: #93b3ff;
          background: rgba(147, 179, 255, 0.18);
          color: #ffffff;
        }

        .why-card-body {
          margin-top: auto;
          padding-top: 34px;
        }

        .why-card-index {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
          color: #93b3ff;
          font-family: var(--font-display);
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .why-card-rule {
          display: block;
          width: 48px;
          height: 1px;
          background: rgba(147, 179, 255, 0.4);
        }

        .why-card-question {
          max-width: 320px;
          margin: 0;
          font-family: var(--font-display);
          font-size: clamp(1.25rem, 1.8vw, 1.5rem);
          font-weight: 600;
          line-height: 1.25;
          letter-spacing: -0.02em;
          color: #ffffff;
        }

        .why-divider {
          height: 1px;
          margin: clamp(48px, 6vw, 72px) 0 28px;
          background: rgba(255, 255, 255, 0.09);
        }

        .why-footnote {
          max-width: 1180px;
          margin: 0;
          font-size: clamp(0.96rem, 1.15vw, 1.05rem);
          line-height: 1.65;
          color: #8d94a2;
        }

        @media (max-width: 1024px) {
          .why-grid {
            grid-template-columns: 1fr;
            gap: 44px;
            align-items: start;
          }

          .why-copy {
            max-width: 640px;
          }

          .why-lead {
            max-width: 520px;
          }
        }

        @media (max-width: 680px) {
          .why-heading {
            font-size: clamp(2.2rem, 8vw, 2.8rem);
          }

          .why-cards {
            grid-template-columns: 1fr;
          }

          .why-card {
            min-height: auto;
          }

          .why-card-body {
            margin-top: 40px;
            padding-top: 0;
          }
        }
      `}</style>
    </div>
  );
}
