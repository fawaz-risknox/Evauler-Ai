'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import AeroShards from './AeroShards';
import './Hero.css';

const TRUST = ['150+ entity evaluations', '88 evaluation criteria'];

export default function Hero() {
  const [gpuFailed, setGpuFailed] = useState(false);

  return (
    <section className="hero">
      {/* WebGPU shard ribbons flowing down the right side of the hero */}
      <div className="hero-shader" aria-hidden="true">
        {gpuFailed ? (
          <div className="hero-shader-fallback" />
        ) : (
          <AeroShards
            shardColor="#0462ff"
            accentColor="#094ff5"
            placement="right"
            material="glass"
            markers="plus"
            count={1300}
            depthOfField={0.55}
            vignette={0.3}
            mouseInteraction
            pulseOnClick
            holdToGather
            lightMode={false}
            shardSize={1}
            spread={1}
            twist={1}
            billow={1}
            speed={1}
            scale={1}
            glow={0.35}
            grain={0.06}
            intro
            mouseStrength={0.6}
            parallax={0.5}
            paused={false}
            onError={() => setGpuFailed(true)}
          />
        )}
      </div>

      <div className="hero-fade" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-text">Valuation and investability scoring</span>
            <span className="hero-eyebrow-line" />
          </div>

          <h1 className="hero-title">
            Startup valuation
            <br />
            <span className="hero-title-accent">and investability</span>
            <br />
            score
          </h1>

          <p className="hero-sub">
            EvaluerAI reads your business, financials, market, and risk data and returns an
            entity valuation and an investability score.
          </p>

          <div className="hero-actions">
            <a
              href="https://evaluer-valuation.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-primary"
            >
              Get your valuation report
              <ArrowRight className="hero-cta-arrow" strokeWidth={2} />
            </a>
            <a
              href="https://www.evaluerai.com/auth/sign-in"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-secondary"
            >
              Check your investability score
              <ArrowRight className="hero-cta-arrow" strokeWidth={2} />
            </a>
          </div>

          <ul className="hero-trust">
            {TRUST.map((item, index) => (
              <li key={item}>
                <span className="hero-trust-item">
                  <CheckCircle2 className="hero-trust-icon" strokeWidth={1.5} />
                  {item}
                </span>
                {index < TRUST.length - 1 && <span className="hero-trust-divider" />}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
