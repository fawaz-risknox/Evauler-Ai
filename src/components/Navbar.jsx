'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Valuation', href: '/valuation' },
  { label: 'Investability', href: '/investability-score' },
  { label: 'Cap Table', href: '/cap-table' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [indicator, setIndicator] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    opacity: 0,
    animate: false,
  });

  const pathname = usePathname();
  const linkRefs = useRef([]);
  const lastApplied = useRef(null);
  const shown = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const next = window.scrollY > 20;
      setScrolled((prev) => (prev === next ? prev : next));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeIndex = NAV_LINKS.findIndex((item) => pathname === item.href);
  const targetIndex = hoveredIndex ?? activeIndex;

  useEffect(() => {
    let cancelled = false;
    let frame = 0;

    const updateIndicator = (instant = false) => {
      if (cancelled) return;

      if (targetIndex < 0) {
        if (shown.current) {
          shown.current = false;
          setIndicator((prev) => ({ ...prev, opacity: 0 }));
        }
        return;
      }

      const link = linkRefs.current[targetIndex];
      if (!link) return;

      const next = {
        left: link.offsetLeft,
        top: link.offsetTop,
        width: link.offsetWidth,
        height: link.offsetHeight,
      };

      const prev = lastApplied.current;
      const moved =
        !prev ||
        prev.left !== next.left ||
        prev.top !== next.top ||
        prev.width !== next.width ||
        prev.height !== next.height;

      // Already showing this exact geometry (e.g. StrictMode remount).
      if (!moved && shown.current) return;

      lastApplied.current = next;
      shown.current = true;

      setIndicator({
        ...next,
        opacity: 1,
        animate: !instant && Boolean(prev) && moved,
      });
    };

    updateIndicator();

    const onResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => updateIndicator(true));
    };

    window.addEventListener('resize', onResize);
    document.fonts?.ready.then(onResize).catch(() => {});

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', onResize);
    };
  }, [targetIndex, pathname]);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background-color 0.3s ease, border-color 0.3s ease',
        backgroundColor: scrolled
          ? 'rgba(0, 0, 0, 0.88)'
          : 'transparent',
        borderBottom: '1px solid',
        borderBottomColor: scrolled
          ? 'rgba(255, 255, 255, 0.08)'
          : 'transparent',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '70px',
          maxWidth: '1280px',
        }}
      >
        {/* Official Brand Logo */}
        <a
          href="/"
          onClick={(e) => {
            if (typeof window !== 'undefined' && window.location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
          aria-label="EvaluerAI Home"
        >
          <img
            src="/LOGO/eValuer%20Ai%20Logo%20White.png"
            alt="EvaluerAI"
            style={{
              height: '24px',
              width: 'auto',
              display: 'block',
              objectFit: 'contain',
            }}
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="desktop-nav"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <span
            aria-hidden="true"
            className="nav-pill"
            style={{
              transform: `translate3d(${indicator.left}px, ${indicator.top}px, 0)`,
              width: `${indicator.width}px`,
              height: `${indicator.height}px`,
              opacity: indicator.opacity,
              transition: indicator.animate
                ? 'transform 380ms cubic-bezier(0.22, 1, 0.36, 1), width 380ms cubic-bezier(0.22, 1, 0.36, 1), opacity 180ms ease'
                : 'opacity 180ms ease',
            }}
          />

          {NAV_LINKS.map((item, idx) => {
            const isActive = activeIndex === idx;

            return (
              <a
                key={item.href}
                ref={(el) => {
                  linkRefs.current[idx] = el;
                }}
                href={item.href}
                className={`nav-link-item ${isActive ? 'active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
                onMouseEnter={() => setHoveredIndex(idx)}
                onFocus={() => setHoveredIndex(idx)}
                onBlur={() => setHoveredIndex(null)}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button: Partner With EvaluerAI */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <a href="/contact" className="header-cta">
            Partner with EvaluerAI
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: '#ffffff',
              cursor: 'pointer',
              padding: '6px',
            }}
            className="mobile-menu-btn"
            aria-label="Open or close the menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(5, 5, 8, 0.98)',
            borderBottom: '1px solid rgba(147, 179, 255, 0.25)',
            padding: '20px 24px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          {NAV_LINKS.map((item, idx) => {
            const isActive = activeIndex === idx;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`mobile-nav-item ${isActive ? 'active' : ''}`}
              >
                <span>{item.label}</span>
                <span className="mobile-chevron">→</span>
              </a>
            );
          })}
          <a
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              textAlign: 'center',
              padding: '12px 22px',
              borderRadius: '9999px',
              fontSize: '0.88rem',
              fontWeight: 700,
              color: '#000000',
              background: '#93b3ff',
              textDecoration: 'none',
              marginTop: '12px',
              boxShadow: '0 0 20px rgba(147, 179, 255, 0.45)',
              transition: 'all 0.2s ease',
            }}
          >
            Partner with EvaluerAI
          </a>
        </div>
      )}

      <style jsx>{`
        :global(.desktop-nav) {
          position: relative;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        :global(.nav-pill) {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 0;
          pointer-events: none;
          border-radius: 9999px;
          background: linear-gradient(
            180deg,
            rgba(147, 179, 255, 0.16) 0%,
            rgba(147, 179, 255, 0.08) 100%
          );
          border: 1px solid rgba(147, 179, 255, 0.28);
          will-change: transform;
        }

        :global(.nav-link-item) {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 7px 12px;
          border-radius: 9999px;
          color: #9ca3af;
          font-size: 0.88rem;
          font-weight: 500;
          text-decoration: none;
          transition: color 180ms ease;
        }

        :global(.nav-link-item:hover),
        :global(.nav-link-item.active) {
          color: #ffffff;
        }

        /* When another item is hovered, only that item reads as selected. */
        :global(.desktop-nav:hover .nav-link-item.active:not(:hover)) {
          color: #9ca3af;
        }

        :global(.nav-link-item:focus-visible) {
          outline: 2px solid rgba(147, 179, 255, 0.8);
          outline-offset: 2px;
        }

        :global(.header-cta) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 9px 22px;
          border-radius: 9999px;
          font-size: 0.84rem;
          font-weight: 700;
          color: #000000;
          background: #93b3ff;
          border: none;
          text-decoration: none;
          box-shadow: 0 0 20px rgba(147, 179, 255, 0.45);
          transition: transform 180ms ease, background-color 180ms ease,
            box-shadow 180ms ease;
        }

        :global(.header-cta:hover) {
          transform: translateY(-1px);
          background-color: #a8c5ff;
          box-shadow: 0 0 28px rgba(147, 179, 255, 0.7);
        }

        /* Mobile nav item styles & hover */
        :global(.mobile-nav-item) {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          border-radius: 10px;
          color: #cbd5e1;
          font-size: 0.95rem;
          font-weight: 500;
          text-decoration: none;
          background: transparent;
          border: 1px solid transparent;
          transition: color 180ms ease, background-color 180ms ease,
            border-color 180ms ease, transform 180ms ease;
        }

        :global(.mobile-nav-item:hover),
        :global(.mobile-nav-item.active) {
          color: #ffffff;
          background: rgba(147, 179, 255, 0.1);
          border-color: rgba(147, 179, 255, 0.25);
          transform: translateX(4px);
        }

        :global(.mobile-chevron) {
          opacity: 0;
          color: #93b3ff;
          transform: translateX(-6px);
          transition: opacity 180ms ease, transform 180ms ease;
        }

        :global(.mobile-nav-item:hover .mobile-chevron),
        :global(.mobile-nav-item.active .mobile-chevron) {
          opacity: 1;
          transform: translateX(0);
        }

        @media (max-width: 980px) {
          :global(.desktop-nav) {
            display: none !important;
          }
          :global(.mobile-menu-btn) {
            display: block !important;
          }
          :global(.header-cta) {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
