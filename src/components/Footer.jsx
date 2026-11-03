'use client';

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: 'radial-gradient(50% 50% at 50% 3.4%, rgba(147, 179, 255, 0.16) 0%, rgba(4, 4, 8, 1) 100%)',
        padding: '72px 0 32px 0',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container">
        {/* Footer 4-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            marginBottom: '48px',
          }}
        >
          {/* Brand Column */}
          <div style={{ maxWidth: '320px' }}>
            <div style={{ marginBottom: '18px' }}>
              <img
                src="/LOGO/eValuer%20Ai%20Logo%20White.png"
                alt="EvaluerAI"
                style={{
                  height: '28px',
                  width: 'auto',
                  display: 'block',
                  objectFit: 'contain',
                }}
              />
            </div>
            <p
              style={{
                fontSize: '0.9rem',
                color: 'var(--color-slate-light)',
                lineHeight: 1.65,
                marginBottom: '16px',
              }}
            >
              EvaluerAI scores companies on 88 criteria and returns a valuation and an investability score.
            </p>
            <div style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.6 }}>
              <div>Bengaluru &bull; Kochi</div>
              <div>info@evaluer.ai</div>
              <div>+91 88488 27932</div>
            </div>
            <div style={{ marginTop: '22px' }}>
              <a
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '9px 22px',
                  borderRadius: '9999px',
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  color: '#000000',
                  background: '#93b3ff',
                  textDecoration: 'none',
                  boxShadow: '0 0 20px rgba(147, 179, 255, 0.4)',
                  transition: 'all 0.25s ease',
                }}
                className="footer-cta-btn"
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.background = '#a8c5ff';
                  e.currentTarget.style.boxShadow = '0 0 26px rgba(147, 179, 255, 0.65)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = '#93b3ff';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(147, 179, 255, 0.4)';
                }}
              >
                Partner with EvaluerAI
              </a>
            </div>
          </div>

          {/* Column 1: Solutions */}
          <div>
            <h4
              style={{
                fontSize: '0.9rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '18px',
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.04em',
              }}
            >
              Solutions
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem' }}>
              <li>
                <a href="/valuation" style={{ color: 'var(--color-slate-light)', textDecoration: 'none' }} className="footer-link">
                  Valuation report
                </a>
              </li>
              <li>
                <a href="/investability-score" style={{ color: 'var(--color-slate-light)', textDecoration: 'none' }} className="footer-link">
                  Investability score
                </a>
              </li>
              <li>
                <a href="/cap-table" style={{ color: 'var(--color-slate-light)', textDecoration: 'none' }} className="footer-link">
                  Cap table &amp; dilution
                </a>
              </li>
              <li>
                <a href="/pricing" style={{ color: 'var(--color-slate-light)', textDecoration: 'none' }} className="footer-link">
                  409A bundle &amp; pricing
                </a>
              </li>
              <li>
                <a href="/valuation#valuation-tool" style={{ color: 'var(--color-slate-light)', textDecoration: 'none' }} className="footer-link">
                  Valuation simulator
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4
              style={{
                fontSize: '0.9rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '18px',
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.04em',
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem' }}>
              <li>
                <a href="/" style={{ color: 'var(--color-slate-light)', textDecoration: 'none' }} className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" style={{ color: 'var(--color-slate-light)', textDecoration: 'none' }} className="footer-link">
                  About us
                </a>
              </li>
              <li>
                <a href="/pricing" style={{ color: 'var(--color-slate-light)', textDecoration: 'none' }} className="footer-link">
                  Plans &amp; pricing
                </a>
              </li>
              <li>
                <a href="/blog" style={{ color: 'var(--color-slate-light)', textDecoration: 'none' }} className="footer-link">
                  Blog &amp; insights
                </a>
              </li>
              <li>
                <a href="/contact" style={{ color: 'var(--color-slate-light)', textDecoration: 'none' }} className="footer-link">
                  Contact &amp; support
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div>
            <h4
              style={{
                fontSize: '0.9rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '18px',
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.04em',
              }}
            >
              Socials
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem' }}>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-slate-light)', textDecoration: 'none' }} className="footer-link">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-slate-light)', textDecoration: 'none' }} className="footer-link">
                  Twitter / X
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-slate-light)', textDecoration: 'none' }} className="footer-link">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-slate-light)', textDecoration: 'none' }} className="footer-link">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '28px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.8rem',
            color: '#64748b',
          }}
        >
          <p style={{ margin: 0 }}>&copy; 2026 EvaluerAI. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ color: '#64748b', textDecoration: 'none' }} className="footer-link">
              Privacy policy
            </a>
            <a href="#" style={{ color: '#64748b', textDecoration: 'none' }} className="footer-link">
              Terms of service
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-link:hover {
          color: #ffffff !important;
        }
      `}</style>
    </footer>
  );
}
