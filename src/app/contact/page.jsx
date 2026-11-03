'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import confetti from 'canvas-confetti';
import { Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#93b3ff', '#adc7ff', '#ffffff', '#60a5fa'],
        });
      } catch (err) {
        // no-op
      }
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: '#000000',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Navbar />

      {/* Constellation / Tech Grid Ambient Background (Strictly #93b3ff accents, no purple) */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
          zIndex: 0,
        }}
      >
        {/* Subtle top ambient glow */}
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '900px',
            height: '420px',
            background: 'radial-gradient(ellipse at center, rgba(147, 179, 255, 0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Geometric constellation dots & lines */}
        <svg
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: 0.28,
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#93b3ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#93b3ff" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Connected lines */}
          <line x1="8%" y1="18%" x2="18%" y2="28%" stroke="rgba(147, 179, 255, 0.25)" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="18%" y1="28%" x2="12%" y2="44%" stroke="rgba(147, 179, 255, 0.2)" strokeWidth="1" />
          <line x1="12%" y1="44%" x2="5%" y2="58%" stroke="rgba(147, 179, 255, 0.15)" strokeWidth="1" />
          <line x1="18%" y1="28%" x2="26%" y2="20%" stroke="rgba(147, 179, 255, 0.2)" strokeWidth="1" strokeDasharray="4 4" />

          <line x1="88%" y1="14%" x2="80%" y2="24%" stroke="rgba(147, 179, 255, 0.25)" strokeWidth="1" />
          <line x1="80%" y1="24%" x2="92%" y2="38%" stroke="rgba(147, 179, 255, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="92%" y1="38%" x2="84%" y2="52%" stroke="rgba(147, 179, 255, 0.18)" strokeWidth="1" />
          <line x1="80%" y1="24%" x2="72%" y2="18%" stroke="rgba(147, 179, 255, 0.2)" strokeWidth="1" />

          <line x1="6%" y1="78%" x2="14%" y2="88%" stroke="rgba(147, 179, 255, 0.2)" strokeWidth="1" />
          <line x1="90%" y1="80%" x2="82%" y2="90%" stroke="rgba(147, 179, 255, 0.2)" strokeWidth="1" />

          {/* Constellation nodes */}
          <circle cx="8%" cy="18%" r="2.5" fill="#93b3ff" />
          <circle cx="18%" cy="28%" r="3" fill="#adc7ff" />
          <circle cx="12%" cy="44%" r="2" fill="#93b3ff" />
          <circle cx="5%" cy="58%" r="2.5" fill="#93b3ff" />
          <circle cx="26%" cy="20%" r="2" fill="#adc7ff" />

          <circle cx="88%" cy="14%" r="3" fill="#93b3ff" />
          <circle cx="80%" cy="24%" r="2.5" fill="#adc7ff" />
          <circle cx="92%" cy="38%" r="3" fill="#93b3ff" />
          <circle cx="84%" cy="52%" r="2" fill="#adc7ff" />
          <circle cx="72%" cy="18%" r="2.5" fill="#93b3ff" />

          <circle cx="6%" cy="78%" r="2.5" fill="#93b3ff" />
          <circle cx="14%" cy="88%" r="2" fill="#adc7ff" />
          <circle cx="90%" cy="80%" r="2.5" fill="#93b3ff" />
          <circle cx="82%" cy="90%" r="2" fill="#adc7ff" />
        </svg>
      </div>

      {/* Main Section */}
      <section
        style={{
          flex: '1 0 auto',
          position: 'relative',
          zIndex: 1,
          paddingTop: 'clamp(100px, 14vh, 130px)',
          paddingBottom: 'clamp(60px, 10vh, 100px)',
          paddingLeft: '20px',
          paddingRight: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ width: '100%', maxWidth: '1080px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 48px)' }}>
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '-0.025em',
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Contact Us
            </h1>
            <p
              style={{
                marginTop: '14px',
                fontSize: 'clamp(0.95rem, 1.8vw, 1.08rem)',
                color: 'rgba(255, 255, 255, 0.65)',
                lineHeight: 1.5,
                maxWidth: '560px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              Have a project in mind? Let&apos;s build something intelligent together.
            </p>
          </div>

          {/* Central Contact Card */}
          <div
            style={{
              background: 'radial-gradient(120% 120% at 50% 0%, rgba(20, 24, 38, 0.7) 0%, rgba(10, 11, 17, 0.95) 70%, #06070a 100%)',
              border: '1px solid rgba(147, 179, 255, 0.16)',
              borderRadius: '24px',
              padding: 'clamp(24px, 4.5vw, 48px)',
              boxShadow: '0 25px 70px rgba(0, 0, 0, 0.75), 0 0 40px rgba(147, 179, 255, 0.05)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 'clamp(32px, 5vw, 56px)',
                alignItems: 'start',
              }}
            >
              {/* Left Column: Get In Touch */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h2
                  style={{
                    fontSize: '1.45rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    margin: '0 0 24px 0',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Get In Touch
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {/* Card 1: Email */}
                  <a
                    href="mailto:info@evaluer.ai"
                    style={{
                      display: 'block',
                      textDecoration: 'none',
                      padding: '18px 20px',
                      borderRadius: '16px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.07)',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(147, 179, 255, 0.4)';
                      e.currentTarget.style.background = 'rgba(147, 179, 255, 0.04)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '8px',
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: '#93b3ff',
                          boxShadow: '0 0 8px rgba(147, 179, 255, 0.8)',
                          display: 'inline-block',
                        }}
                      />
                      <Mail size={15} color="#93b3ff" />
                      <span
                        style={{
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          color: 'rgba(255, 255, 255, 0.55)',
                          textTransform: 'uppercase',
                        }}
                      >
                        EMAIL
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: '0.98rem',
                        fontWeight: 500,
                        color: '#ffffff',
                        paddingLeft: '14px',
                      }}
                    >
                      info@evaluer.ai
                    </div>
                  </a>

                  {/* Card 2: Location */}
                  <div
                    style={{
                      padding: '18px 20px',
                      borderRadius: '16px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.07)',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(147, 179, 255, 0.4)';
                      e.currentTarget.style.background = 'rgba(147, 179, 255, 0.04)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '8px',
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: '#93b3ff',
                          boxShadow: '0 0 8px rgba(147, 179, 255, 0.8)',
                          display: 'inline-block',
                        }}
                      />
                      <MapPin size={15} color="#93b3ff" />
                      <span
                        style={{
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          color: 'rgba(255, 255, 255, 0.55)',
                          textTransform: 'uppercase',
                        }}
                      >
                        LOCATION
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: '0.98rem',
                        fontWeight: 500,
                        color: '#ffffff',
                        paddingLeft: '14px',
                      }}
                    >
                      Bengaluru | Kochi
                    </div>
                  </div>

                  {/* Card 3: Phone */}
                  <a
                    href="tel:+918848827932"
                    style={{
                      display: 'block',
                      textDecoration: 'none',
                      padding: '18px 20px',
                      borderRadius: '16px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.07)',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(147, 179, 255, 0.4)';
                      e.currentTarget.style.background = 'rgba(147, 179, 255, 0.04)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '8px',
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: '#93b3ff',
                          boxShadow: '0 0 8px rgba(147, 179, 255, 0.8)',
                          display: 'inline-block',
                        }}
                      />
                      <Phone size={15} color="#93b3ff" />
                      <span
                        style={{
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          color: 'rgba(255, 255, 255, 0.55)',
                          textTransform: 'uppercase',
                        }}
                      >
                        PHONE
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: '0.98rem',
                        fontWeight: 500,
                        color: '#ffffff',
                        paddingLeft: '14px',
                      }}
                    >
                      +91 88488 27932
                    </div>
                  </a>
                </div>

                {/* Social links row: Twitter / X, LinkedIn, GitHub */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginTop: '28px',
                  }}
                >
                  {/* Twitter / X */}
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (formerly Twitter)"
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = '#93b3ff';
                      e.currentTarget.style.background = 'rgba(147, 179, 255, 0.12)';
                      e.currentTarget.style.color = '#93b3ff';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = '#93b3ff';
                      e.currentTarget.style.background = 'rgba(147, 179, 255, 0.12)';
                      e.currentTarget.style.color = '#93b3ff';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                    </svg>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = '#93b3ff';
                      e.currentTarget.style.background = 'rgba(147, 179, 255, 0.12)';
                      e.currentTarget.style.color = '#93b3ff';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Column: Form */}
              <div>
                {submitted ? (
                  <div
                    style={{
                      textAlign: 'center',
                      padding: '40px 20px',
                      background: 'rgba(147, 179, 255, 0.04)',
                      borderRadius: '18px',
                      border: '1px solid rgba(147, 179, 255, 0.25)',
                    }}
                  >
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        background: 'rgba(147, 179, 255, 0.15)',
                        border: '2px solid #93b3ff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px',
                      }}
                    >
                      <CheckCircle2 size={28} color="#93b3ff" />
                    </div>
                    <h3
                      style={{
                        fontSize: '1.45rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        marginBottom: '10px',
                      }}
                    >
                      Message Sent
                    </h3>
                    <p
                      style={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        lineHeight: 1.6,
                        fontSize: '0.94rem',
                        maxWidth: '380px',
                        margin: '0 auto 24px',
                      }}
                    >
                      Thank you, {formData.name || 'there'}! Your inquiry has been delivered directly to our team. We will respond to <strong style={{ color: '#ffffff' }}>{formData.email}</strong> shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      style={{
                        padding: '11px 26px',
                        borderRadius: '10px',
                        background: '#93b3ff',
                        border: 'none',
                        color: '#08090d',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.background = '#adc7ff')}
                      onMouseOut={(e) => (e.currentTarget.style.background = '#93b3ff')}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    {/* Full Name * */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        style={{
                          display: 'block',
                          fontSize: '0.85rem',
                          fontWeight: 500,
                          color: 'rgba(255, 255, 255, 0.85)',
                          marginBottom: '7px',
                        }}
                      >
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        style={{
                          width: '100%',
                          padding: '13px 16px',
                          borderRadius: '10px',
                          background: 'rgba(12, 14, 20, 0.8)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: '#ffffff',
                          fontSize: '0.92rem',
                          outline: 'none',
                          transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#93b3ff';
                          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(147, 179, 255, 0.18)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    {/* Email Address * */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        style={{
                          display: 'block',
                          fontSize: '0.85rem',
                          fontWeight: 500,
                          color: 'rgba(255, 255, 255, 0.85)',
                          marginBottom: '7px',
                        }}
                      >
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        style={{
                          width: '100%',
                          padding: '13px 16px',
                          borderRadius: '10px',
                          background: 'rgba(12, 14, 20, 0.8)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: '#ffffff',
                          fontSize: '0.92rem',
                          outline: 'none',
                          transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#93b3ff';
                          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(147, 179, 255, 0.18)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    {/* Subject * */}
                    <div>
                      <label
                        htmlFor="contact-subject"
                        style={{
                          display: 'block',
                          fontSize: '0.85rem',
                          fontWeight: 500,
                          color: 'rgba(255, 255, 255, 0.85)',
                          marginBottom: '7px',
                        }}
                      >
                        Subject *
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Project Inquiry"
                        style={{
                          width: '100%',
                          padding: '13px 16px',
                          borderRadius: '10px',
                          background: 'rgba(12, 14, 20, 0.8)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: '#ffffff',
                          fontSize: '0.92rem',
                          outline: 'none',
                          transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#93b3ff';
                          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(147, 179, 255, 0.18)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    {/* Message * with Character Counter */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        style={{
                          display: 'block',
                          fontSize: '0.85rem',
                          fontWeight: 500,
                          color: 'rgba(255, 255, 255, 0.85)',
                          marginBottom: '7px',
                        }}
                      >
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        required
                        maxLength={500}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project..."
                        style={{
                          width: '100%',
                          padding: '13px 16px',
                          borderRadius: '10px',
                          background: 'rgba(12, 14, 20, 0.8)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: '#ffffff',
                          fontSize: '0.92rem',
                          outline: 'none',
                          resize: 'vertical',
                          minHeight: '110px',
                          transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#93b3ff';
                          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(147, 179, 255, 0.18)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      />
                      <div
                        style={{
                          textAlign: 'right',
                          fontSize: '0.78rem',
                          color: 'rgba(255, 255, 255, 0.45)',
                          marginTop: '4px',
                        }}
                      >
                        {formData.message.length}/500
                      </div>
                    </div>

                    {/* Send Message Button (Strictly #93b3ff palette, NO PURPLE) */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        width: '100%',
                        padding: '14px 24px',
                        borderRadius: '12px',
                        background: '#93b3ff',
                        color: '#08090d',
                        fontSize: '0.98rem',
                        fontWeight: 700,
                        border: 'none',
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                        opacity: isSubmitting ? 0.8 : 1,
                        boxShadow: '0 0 24px rgba(147, 179, 255, 0.4)',
                        transition: 'all 0.25s ease',
                        marginTop: '6px',
                      }}
                      onMouseOver={(e) => {
                        if (!isSubmitting) {
                          e.currentTarget.style.background = '#adc7ff';
                          e.currentTarget.style.boxShadow = '0 0 30px rgba(147, 179, 255, 0.65)';
                          e.currentTarget.style.transform = 'translateY(-1px)';
                        }
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = '#93b3ff';
                        e.currentTarget.style.boxShadow = '0 0 24px rgba(147, 179, 255, 0.4)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
