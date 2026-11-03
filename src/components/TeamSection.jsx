'use client';

export default function TeamSection() {
  const team = [
    {
      name: 'CA Anna Jain Jose',
      role: 'Founder & CEO',
      image: '/assets/members/Anna.jpeg',
      objectPosition: '50% 30%',
    },
    {
      name: 'CS Manu Francis',
      role: 'Co-Founder & COO',
      image: '/assets/members/Manu.jpeg',
      objectPosition: '50% 30%',
    },
    {
      name: 'Vivek Chandran',
      role: 'Co-Founder & CTO',
      image: '/assets/members/Vivek.jpeg',
      objectPosition: '50% 30%',
    },
  ];

  return (
    <section id="team" className="section-spacing" style={{ position: 'relative', overflow: 'hidden', padding: '120px 0' }}>
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '850px',
          height: '500px',
          background: 'radial-gradient(ellipse at center, rgba(147, 179, 255, 0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 64px auto' }}>
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
            <span>Leadership</span>
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
            The <span style={{ color: '#93b3ff' }}>team</span>
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
            A chartered accountant, a company secretary, and an engineer. They built the scoring model.
          </p>
        </div>

        {/* Team Cards */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '32px',
            justifyContent: 'center',
          }}
        >
          {team.map((member, idx) => (
            <div
              key={idx}
              className="team-card"
              style={{
                padding: '42px 32px 38px',
                textAlign: 'center',
                width: '320px',
                borderRadius: '22px',
                border: '1px solid rgba(143, 181, 247, 0.22)',
                background:
                  'radial-gradient(110% 110% at 50% 110%, rgba(143, 181, 247, 0.15) 0%, rgba(10, 12, 18, 0.95) 55%, #050609 100%)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.45)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Member Photo */}
              <div
                style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  background: 'rgba(143, 181, 247, 0.1)',
                  margin: '0 auto 22px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid rgba(143, 181, 247, 0.4)',
                  overflow: 'hidden',
                  boxShadow: '0 8px 26px rgba(143, 181, 247, 0.22)',
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: member.objectPosition,
                    display: 'block',
                  }}
                />
              </div>

              <h3
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '8px',
                  fontFamily: 'var(--font-display, "Plus Jakarta Sans"), sans-serif',
                  letterSpacing: '-0.015em',
                  lineHeight: 1.25,
                }}
              >
                {member.name}
              </h3>

              <p
                style={{
                  fontSize: '0.96rem',
                  color: '#8fb5f7',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  margin: 0,
                }}
              >
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .team-card:hover {
          transform: translateY(-4px);
          border-color: rgba(143, 181, 247, 0.5);
          box-shadow: 0 16px 40px rgba(143, 181, 247, 0.2);
        }
      `}</style>
    </section>
  );
}
