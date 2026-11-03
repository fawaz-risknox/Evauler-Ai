'use client';

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        'We used EvaluerAI to list the readiness gaps that would come up in diligence. The score showed what to fix before we took the company to investors.',
      name: 'Michael Smith',
      role: 'Security Consultant',
    },
    {
      quote:
        'The scored report told us which founders to spend time with. We now rank portfolio companies by the same 88 criteria instead of a slide deck.',
      name: 'Abid Sherrif',
      role: 'CIO, SP Medifort Hospital',
    },
    {
      quote:
        'Follow-ups used to sit in inboxes. EvaluerAI keeps the open items on one list, so we close them.',
      name: 'Aman S',
      role: 'Operations Head',
    },
    {
      quote:
        'EvaluerAI scored our readiness and listed the work in order. In a few months we moved from Conditionally Investable to a higher score, then closed the round.',
      name: 'Vivek Chandran',
      role: 'Founder & CTO, RISKNOX AI',
    },
    {
      quote:
        'The ESG and fundability sections gave us a list of compliance and capital-planning tasks. We use the same score to compare companies in the program.',
      name: 'Priya Menon',
      role: 'Director of Programs, TechStars Accelerator',
    },
    {
      quote:
        'We scored 40 early-stage startups on the same criteria. The cohort view made the ranking obvious instead of a room full of opinions.',
      name: 'Gokul R.',
      role: 'Managing Partner, SWIFT Capital',
    },
  ];

  // Duplicate list to achieve seamless infinite marquee loop
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="section-spacing"
      style={{
        position: 'relative',
        background: '#000000',
        padding: '120px 0',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px 56px', textAlign: 'center' }}>
        {/* Section Header */}
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
          <span>Client stories</span>
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
          What operators say about <span style={{ color: '#93b3ff' }}>EvaluerAI</span>
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
          Quotes from founders, operators, and investors who used the report.
        </p>
      </div>

      {/* Marquee Scroller */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {marqueeItems.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <p className="testimonial-quote">
                "{t.quote}"
              </p>

              <div className="testimonial-author">
                <div className="author-name">{t.name}</div>
                <div className="author-role">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 12px 0 24px;
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .marquee-track {
          display: flex;
          gap: 28px;
          width: max-content;
          animation: marqueeScroll 45s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .testimonial-card {
          width: 400px;
          min-width: 400px;
          background: #000000;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 34px 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-sizing: border-box;
          transition: border-color 0.25s ease, transform 0.25s ease;
          user-select: none;
        }

        .testimonial-card:hover {
          border-color: rgba(147, 179, 255, 0.45);
          transform: translateY(-3px);
        }

        .testimonial-quote {
          font-size: 0.98rem;
          line-height: 1.68;
          color: #e2e8f0;
          font-style: italic;
          margin: 0 0 28px 0;
          font-weight: 400;
        }

        .testimonial-author {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 20px;
        }

        .author-name {
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 4px;
          font-family: var(--font-display, "Plus Jakarta Sans"), sans-serif;
        }

        .author-role {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.55);
          font-weight: 400;
        }

        @media (max-width: 640px) {
          .testimonial-card {
            width: 320px;
            min-width: 320px;
            padding: 26px 22px;
          }
          .testimonial-quote {
            font-size: 0.92rem;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </section>
  );
}
