'use client';

import { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import AeroShards from './AeroShards';

export default function CTASection() {
  const [gpuFailed, setGpuFailed] = useState(false);

  const handleTriggerConfetti = () => {
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#93b3ff', '#adc7ff', '#ffffff'],
      });
    } catch (e) {
      // ignore
    }
  };

  return (
    <section
      id="cta"
      className="section-spacing"
      style={{
        position: 'relative',
        background: '#000000',
        padding: '100px 0',
        overflow: 'hidden',
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0 24px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          className="cta-card"
          style={{
            position: 'relative',
            borderRadius: '32px',
            overflow: 'hidden',
            padding: 'clamp(56px, 7vw, 92px) clamp(24px, 5vw, 64px)',
            textAlign: 'center',
            border: '1px solid rgba(147, 179, 255, 0.28)',
            background: 'radial-gradient(100% 100% at 50% 0%, rgba(147, 179, 255, 0.12) 0%, #030407 65%, #000000 100%)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 50px rgba(147, 179, 255, 0.12)',
          }}
        >
          {/* Subtle Crystal Shard Element (derived from Hero but subtle & centered) */}
          <div
            className="cta-crystal-layer"
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 1,
              opacity: 0.6,
              pointerEvents: 'none',
              maskImage: 'radial-gradient(ellipse at 50% 45%, black 25%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(ellipse at 50% 45%, black 25%, transparent 75%)',
            }}
          >
            {!gpuFailed && (
              <AeroShards
                shardColor="#93b3ff"
                accentColor="#adc7ff"
                placement="center"
                material="glass"
                markers="plus"
                count={700}
                shardSize={0.75}
                spread={1.1}
                twist={0.9}
                billow={0.8}
                speed={0.65}
                scale={0.85}
                glow={0.25}
                grain={0.04}
                depthOfField={0.7}
                vignette={0.4}
                intro={false}
                mouseInteraction={false}
                onError={() => setGpuFailed(true)}
              />
            )}
          </div>

          {/* Ambient Lighting Gradients */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '-30%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '600px',
              height: '350px',
              background: 'radial-gradient(ellipse at center, rgba(147, 179, 255, 0.2) 0%, transparent 70%)',
              filter: 'blur(70px)',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />

          {/* Content */}
          <div style={{ position: 'relative', zIndex: 2, maxWidth: '780px', margin: '0 auto' }}>
            {/* Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 18px',
                borderRadius: '999px',
                background: 'rgba(147, 179, 255, 0.08)',
                border: '1px solid rgba(147, 179, 255, 0.3)',
                color: '#93b3ff',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                marginBottom: '24px',
              }}
            >
              <Sparkles size={14} color="#93b3ff" />
              <span>88-criteria venture score</span>
            </div>

            {/* Title */}
            <h2
              style={{
                fontFamily: 'var(--font-display, "Plus Jakarta Sans"), sans-serif',
                fontSize: 'clamp(2.3rem, 4.8vw, 3.8rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.12,
                letterSpacing: '-0.03em',
                marginBottom: '20px',
              }}
            >
              See your valuation <span style={{ color: '#93b3ff' }}>before you pitch</span>
            </h2>

            {/* Description */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                color: 'rgba(255, 255, 255, 0.68)',
                lineHeight: 1.65,
                fontWeight: 400,
                maxWidth: '620px',
                margin: '0 auto 38px auto',
              }}
            >
              Score 88 criteria across idea validation, qualitative factors, ESG, financials, and fundability.
              You get a written report and a ranked list of gaps before you pitch.
            </p>

            {/* Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '32px',
              }}
            >
              <a
                href="https://evaluer-valuation.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleTriggerConfetti}
                className="cta-btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '16px 36px',
                  borderRadius: '9999px',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#000000',
                  background: '#93b3ff',
                  textDecoration: 'none',
                  boxShadow: '0 0 35px rgba(147, 179, 255, 0.45)',
                  transition: 'all 0.25s ease',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <span>Run diagnostic</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="#process"
                className="cta-btn-secondary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '16px 32px',
                  borderRadius: '9999px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(147, 179, 255, 0.35)',
                  textDecoration: 'none',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.25s ease',
                  cursor: 'pointer',
                }}
              >
                See how it works
              </a>
            </div>

            {/* Trust Points */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '24px',
                color: 'rgba(255, 255, 255, 0.55)',
                fontSize: '0.88rem',
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={15} color="#93b3ff" /> 88-criteria score
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={15} color="#93b3ff" /> Score out of 100
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={15} color="#93b3ff" /> Encrypted in transit and at rest
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-btn-primary:hover {
          transform: translateY(-2px);
          background: #adc7ff;
          box-shadow: 0 0 45px rgba(147, 179, 255, 0.65);
        }
        .cta-btn-secondary:hover {
          background: rgba(147, 179, 255, 0.12);
          border-color: rgba(147, 179, 255, 0.6);
          color: #93b3ff;
        }
        .cta-card {
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .cta-card:hover {
          border-color: rgba(147, 179, 255, 0.45);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.85), 0 0 60px rgba(147, 179, 255, 0.2);
        }
      `}</style>
    </section>
  );
}
