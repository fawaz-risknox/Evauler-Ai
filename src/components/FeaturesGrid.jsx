'use client';

import Tabs from './evaluer-section/Tabs';
import EvaluationPanel from './evaluer-section/EvaluationPanel';
import ClassificationPanel from './evaluer-section/ClassificationPanel';
import RiskPanel from './evaluer-section/RiskPanel';
import ActionPanel from './evaluer-section/ActionPanel';
import InsightsPanel from './evaluer-section/InsightsPanel';
import CohortPanel from './evaluer-section/CohortPanel';
import './evaluer-section/evaluer-section.css';

export default function FeaturesGrid() {
  return (
    <section id="capabilities" className="evaluer-section">
      <div className="evaluer-page">
        <Tabs
          header={
            <header className="header">
              <div className="badge-pill" style={{ marginBottom: '14px', display: 'inline-flex' }}>
                <span>What the product does</span>
              </div>
              <h1>Score, classify, and list the work</h1>
              <p>
                One model scores readiness, adds market and peer context, and ranks
                the gaps. Founders see what to fix. Investors see the same numbers.
              </p>
            </header>
          }
          panels={{
            evaluation: <EvaluationPanel />,
            classification: <ClassificationPanel />,
            risk: <RiskPanel />,
            action: <ActionPanel />,
            insights: <InsightsPanel />,
            cohort: <CohortPanel />,
          }}
        />
      </div>
    </section>
  );
}
