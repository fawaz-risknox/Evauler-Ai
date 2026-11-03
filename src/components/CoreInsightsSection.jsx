import {
  ArrowRight,
  BarChart3,
  Leaf,
  Lightbulb,
  PieChart,
  ShieldAlert,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import WhyItMatters from './WhyItMatters';
import InsightStage from './InsightStage';
import './CoreInsightsSection.css';

const insightCards = [
  {
    number: '01',
    railTag: 'Venture readiness',
    railLabel: ['Investability', 'assessment'],
    audience: '88-criteria score · Founders and investors',
    headline: [
      [{ text: 'See your' }],
      [{ text: "venture's" }],
      [{ text: 'investability', emphasis: true }, { text: ' before' }],
      [{ text: 'you pitch.' }],
    ],
    description:
      'Investors check more than a pitch deck. EvaluerAI returns an investability score out of 100. Each of the five sections is scored on its own from 88 criteria. The report also includes market and risk notes, a ranked gap list, and a cohort view for funds.',
    cta: 'Run the investability assessment',
    href: '#assessment',
    factors: [
      {
        icon: Lightbulb,
        title: 'Idea validation',
        description: 'Market size, how painful the problem is, and how hard it is to copy.',
      },
      {
        icon: Users,
        title: 'Qualitative factors',
        description: 'Team, strategy, execution quality, domain background, and track record.',
      },
      {
        icon: Leaf,
        title: 'ESG perspective',
        description: 'Regulation, ethics, and sustainability scores.',
      },
      {
        icon: BarChart3,
        title: 'Financial position',
        description: 'LTV/CAC, burn multiple, runway, and margins.',
      },
      {
        icon: Target,
        title: 'Fundability',
        description: 'Whether the company can take an institutional check, and which funds fit.',
      },
    ],
  },
  {
    number: '02',
    railTag: 'Valuation',
    railLabel: ['Company', 'valuation'],
    audience: 'Multi-factor valuation · Founders and investors',
    headline: [
      [{ text: 'Get a' }],
      [{ text: 'valuation', emphasis: true }],
      [{ text: 'you can show' }],
      [{ text: 'in a raise.' }],
    ],
    description:
      'You need a number before you negotiate. EvaluerAI estimates value from financials, market size, and operating data. The report lists the assumptions and the range.',
    cta: 'Calculate the valuation',
    href: '#valuation',
    factors: [
      {
        icon: ShieldCheck,
        title: 'ESG and financial health',
        description: 'ESG scores and financial health indicators.',
      },
      {
        icon: PieChart,
        title: 'Capital structure and revenue',
        description: 'Capital structure, funding history, and revenue projections.',
      },
      {
        icon: BarChart3,
        title: 'Market size and comps',
        description: 'Market size, industry comps, and valuation multiples.',
      },
      {
        icon: TrendingUp,
        title: 'Growth and business model',
        description: 'Growth rate, ability to scale, and how the model makes money.',
      },
      {
        icon: ShieldAlert,
        title: 'Risk factors',
        description: 'Downside cases and what would break the number.',
      },
    ],
  },
];

const sparkline = (
  <svg width="44" height="22" viewBox="0 0 44 22" fill="none" aria-hidden="true">
    <path d="M2 18 L14 6 L36 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="36" cy="6" r="2.2" fill="currentColor" />
  </svg>
);

function FactorRows({ factors }) {
  const rows = [];
  for (let index = 0; index < factors.length; index += 2) {
    rows.push(factors.slice(index, index + 2));
  }

  return (
    <div className="insight-card-grid">
      {rows.map((row, rowIndex) => (
        <div className="insight-factor-row" key={rowIndex}>
          {row.map(({ icon: Icon, title, description }) => (
            <div className="insight-feature-item" key={title}>
              <div className="insight-icon-box">
                <Icon size={20} strokeWidth={1.7} />
              </div>
              <div className="insight-feature-copy">
                <div className="insight-feature-title">{title}</div>
                <div className="insight-feature-sub">{description}</div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function InsightCard({ card }) {
  return (
    <article className="insight-chamfer-card theme-blue">
      <div className="insight-chamfer-inner">
        <div className="insight-card-left">
          <span className="insight-card-tag">{card.railTag}</span>
          <div className="insight-card-number">{card.number}</div>
          <div className="insight-card-sublabel">
            {card.railLabel.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
          <div className="insight-card-indicator">{sparkline}</div>
        </div>

        <div className="insight-card-middle">
          <span className="insight-audience-tag">{card.audience}</span>
          <h4 className="insight-card-headline">
            {card.headline.map((line, lineIndex) => (
              <span className="insight-headline-line" key={lineIndex}>
                {line.map((part, partIndex) =>
                  part.emphasis ? (
                    <em key={partIndex}>{part.text}</em>
                  ) : (
                    <span key={partIndex}>{part.text}</span>
                  )
                )}
              </span>
            ))}
          </h4>
          <p className="insight-card-desc">{card.description}</p>
          <a href={card.href} className="insight-pill-btn">
            <span>{card.cta}</span>
            <ArrowRight size={16} strokeWidth={2} />
          </a>
        </div>

        <FactorRows factors={card.factors} />
      </div>
    </article>
  );
}

export default function CoreInsightsSection() {
  return (
    <section id="why-evaluation-matters" className="section-spacing core-insights-section">
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1320px' }}>
        <WhyItMatters />

        <div style={{ marginTop: '80px' }}>
          <InsightStage>
            <div className="insight-stage-pin">
              <div style={{ textAlign: 'center', marginBottom: '44px' }}>
                <h3
                  style={{
                    fontSize: 'clamp(1.9rem, 3.5vw, 2.7rem)',
                    fontWeight: 800,
                    fontFamily: 'var(--font-display, "Plus Jakarta Sans"), sans-serif',
                    letterSpacing: '-0.025em',
                    color: '#ffffff',
                    marginBottom: '12px',
                  }}
                >
                  Two numbers from <span style={{ color: '#93b3ff' }}>EvaluerAI</span>
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '1.05rem', maxWidth: '680px', margin: '0 auto' }}>
                  An investability score out of 100 and a valuation range built from the same 88 criteria.
                </p>
              </div>

              <InsightCard card={insightCards[0]} />
            </div>

            <InsightCard card={insightCards[1]} />
          </InsightStage>
        </div>
      </div>
    </section>
  );
}
