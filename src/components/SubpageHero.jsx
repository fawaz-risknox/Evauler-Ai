'use client';

import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function SubpageHero({
  badgeIcon,
  badgeText,
  title,
  description,
  primaryCta,
  secondaryCta,
  trustPoints = [],
  children,
  minHeight = '100vh',
}) {
  return (
    <section
      className="subpage-hero-fullscreen"
      style={{
        position: 'relative',
        minHeight: minHeight || '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000000',
        padding: 'clamp(90px, 12vh, 120px) 24px clamp(40px, 6vh, 60px)',
        overflow: 'hidden',
        textAlign: 'center',
        boxSizing: 'border-box',
      }}
    >
      {/* Corner Glowing Arc: Top-Left */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '460px',
          pointerEvents: 'none',
          overflow: 'hidden',
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-92px',
            left: '-116px',
            width: '480px',
            height: '400px',
            background:
              'radial-gradient(circle at 35% 35%, rgba(147, 179, 255, 0.22) 0%, rgba(60, 100, 200, 0.08) 50%, transparent 75%)',
            filter: 'blur(50px)',
          }}
        />
        <svg
          className="tl-arc-svg"
          style={{
            position: 'absolute',
            top: 0,
            left: 'max(-900px, calc(50% - 1520px))',
            width: '1200px',
            height: '620px',
          }}
          viewBox="-900 0 1200 620"
          fill="none"
        >
          <defs>
            <linearGradient id="tl-arc-grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#93b3ff" stopOpacity="0" />
              <stop offset="35%" stopColor="#6b93e6" stopOpacity="0.75" />
              <stop offset="65%" stopColor="#adc7ff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#93b3ff" stopOpacity="0" />
            </linearGradient>
            <filter id="tl-arc-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M -900 620 C -500 480 0 260 300 -20"
            stroke="#93b3ff"
            strokeWidth="3.5"
            strokeOpacity="0.28"
            filter="url(#tl-arc-glow)"
          />
          <path
            d="M -900 620 C -500 480 0 260 300 -20"
            stroke="url(#tl-arc-grad)"
            strokeWidth="1.3"
          />
        </svg>
      </div>

      {/* Corner Glowing Arc: Bottom-Right */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '580px',
          height: '460px',
          pointerEvents: 'none',
          overflow: 'hidden',
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: '-20%',
            right: '-20%',
            width: '480px',
            height: '400px',
            background:
              'radial-gradient(circle at 65% 65%, rgba(147, 179, 255, 0.22) 0%, rgba(60, 100, 200, 0.08) 50%, transparent 75%)',
            filter: 'blur(50px)',
          }}
        />
        <svg
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          viewBox="0 0 580 460"
          fill="none"
        >
          <defs>
            <linearGradient id="br-arc-grad" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#93b3ff" stopOpacity="0" />
              <stop offset="35%" stopColor="#6b93e6" stopOpacity="0.75" />
              <stop offset="65%" stopColor="#adc7ff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#93b3ff" stopOpacity="0" />
            </linearGradient>
            <filter id="br-arc-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M 610 200 C 515 280 395 390 250 490"
            stroke="#93b3ff"
            strokeWidth="3.5"
            strokeOpacity="0.28"
            filter="url(#br-arc-glow)"
          />
          <path
            d="M 610 200 C 515 280 395 390 250 490"
            stroke="url(#br-arc-grad)"
            strokeWidth="1.3"
          />
        </svg>
      </div>

      {/* Bottom Center Ambient Glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-100px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '950px',
          height: '280px',
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(147, 179, 255, 0.16) 0%, rgba(40, 70, 160, 0.05) 50%, transparent 75%)',
          pointerEvents: 'none',
          zIndex: 1,
          filter: 'blur(35px)',
        }}
      />

      {/* Hero Content Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '960px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Eyebrow Pill */}
        {badgeText && (
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '7px 20px',
              borderRadius: '9999px',
              background: 'rgba(147, 179, 255, 0.05)',
              border: '1px solid rgba(147, 179, 255, 0.35)',
              boxShadow: '0 0 20px rgba(147, 179, 255, 0.12)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              color: '#93b3ff',
              fontSize: '0.76rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '32px',
            }}
          >
            {badgeIcon && <span style={{ display: 'flex', alignItems: 'center' }}>{badgeIcon}</span>}
            <span>{badgeText}</span>
          </div>
        )}

        {/* Hero Title */}
        <h1
          style={{
            fontFamily: 'var(--font-display, "Plus Jakarta Sans"), sans-serif',
            fontSize: 'clamp(1.9rem, 3.2vw, 2.75rem)',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.25,
            letterSpacing: '-0.025em',
            textAlign: 'center',
            marginBottom: '24px',
            maxWidth: '820px',
            width: '100%',
          }}
        >
          {title}
        </h1>

        {/* Lead Description */}
        {description && (
          <p
            style={{
              fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
              color: 'rgba(255, 255, 255, 0.65)',
              lineHeight: 1.7,
              maxWidth: '640px',
              textAlign: 'center',
              margin: '0 auto 40px auto',
            }}
          >
            {description}
          </p>
        )}

        {/* CTA Buttons */}
        {(primaryCta || secondaryCta) && (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: trustPoints.length > 0 || children ? '40px' : '0',
            }}
          >
            {primaryCta && (
              <a
                href={primaryCta.href || '#'}
                onClick={primaryCta.onClick}
                target={primaryCta.target}
                rel={primaryCta.rel}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  borderRadius: '9999px',
                  background: '#93b3ff',
                  color: '#08090d',
                  fontSize: '0.96rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 4px 24px rgba(147, 179, 255, 0.3)',
                  transition: 'all 0.25s ease',
                }}
                className="subpage-hero-primary-btn"
              >
                <span>{primaryCta.label}</span>
                {primaryCta.icon || <ArrowRight size={17} strokeWidth={2.2} />}
              </a>
            )}

            {secondaryCta && (
              <a
                href={secondaryCta.href || '#'}
                onClick={secondaryCta.onClick}
                target={secondaryCta.target}
                rel={secondaryCta.rel}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  borderRadius: '9999px',
                  background: 'rgba(0, 0, 0, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  color: '#ffffff',
                  fontSize: '0.96rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  backdropFilter: 'blur(6px)',
                  WebkitBackdropFilter: 'blur(6px)',
                  transition: 'all 0.25s ease',
                }}
                className="subpage-hero-secondary-btn"
              >
                <span>{secondaryCta.label}</span>
                {secondaryCta.icon}
              </a>
            )}
          </div>
        )}

        {/* Trust Points / Highlights Strip */}
        {trustPoints.length > 0 && (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '4px',
            }}
          >
            {trustPoints.map((point, index) => (
              <div
                key={index}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  fontSize: '0.85rem',
                  color: 'rgba(255, 255, 255, 0.82)',
                  fontWeight: 500,
                }}
              >
                <CheckCircle2 size={15} color="#93b3ff" strokeWidth={2} />
                <span>{point}</span>
              </div>
            ))}
          </div>
        )}

        {/* Custom children slot (e.g. search bar in blog) */}
        {children && <div style={{ width: '100%', marginTop: '24px' }}>{children}</div>}
      </div>

      <style jsx>{`
        .subpage-hero-fullscreen {
          min-height: 100vh;
          min-height: 100dvh;
        }
        .subpage-hero-primary-btn:hover {
          background: #adc7ff;
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(147, 179, 255, 0.45);
        }
        .subpage-hero-secondary-btn:hover {
          border-color: rgba(147, 179, 255, 0.5);
          background: rgba(147, 179, 255, 0.06);
          transform: translateY(-2px);
        }
        /* At narrow desktop widths the navbar leaves no gap for the arc. */
        @media (min-width: 981px) and (max-width: 1099px) {
          .tl-arc-svg {
            clip-path: inset(70px 0 0 0);
            -webkit-clip-path: inset(70px 0 0 0);
          }
        }
      `}</style>
    </section>
  );
}
