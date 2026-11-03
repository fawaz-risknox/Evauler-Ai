'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubpageHero from '@/components/SubpageHero';
import CTASection from '@/components/CTASection';
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Tag,
  Search
} from 'lucide-react';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All articles' },
    { id: 'valuation', label: 'Valuation methods' },
    { id: 'compliance', label: '409A and compliance' },
    { id: 'investability', label: 'Investability and VC' },
    { id: 'equity', label: 'Cap tables and equity' },
  ];

  const articles = [
    {
      id: 1,
      category: 'valuation',
      categoryLabel: 'Valuation methods',
      title: 'The shift from annual appraisals to continuous startup valuation',
      desc: 'How continuous financial data and live cap tables replace annual accounting estimates.',
      readTime: '6 min read',
      date: 'Oct 28, 2026',
      featured: true,
    },
    {
      id: 2,
      category: 'valuation',
      categoryLabel: 'Valuation methods',
      title: 'Comparing five startup valuation methods: Scorecard, Berkus, and DCF',
      desc: 'How qualitative scoring differs from discounted cash flow multiples, and how stage weights adjust over time.',
      readTime: '8 min read',
      date: 'Oct 24, 2026',
    },
    {
      id: 3,
      category: 'compliance',
      categoryLabel: '409A and compliance',
      title: '409A valuation guide: When a startup needs one',
      desc: 'IRS Safe Harbor rules, employee option strike prices, and avoiding tax penalties.',
      readTime: '5 min read',
      date: 'Oct 19, 2026',
    },
    {
      id: 4,
      category: 'investability',
      categoryLabel: 'Investability and VC',
      title: 'What venture capital firms look for in early-stage audits',
      desc: 'An overview of 88 criteria across idea validation, team quality, ESG, and financials.',
      readTime: '7 min read',
      date: 'Oct 15, 2026',
    },
    {
      id: 5,
      category: 'equity',
      categoryLabel: 'Cap tables and equity',
      title: 'How to model post-money SAFEs and protect founder equity',
      desc: 'Calculating the effect of convertible notes, option pool expansions, and valuation caps on founder equity.',
      readTime: '6 min read',
      date: 'Oct 10, 2026',
    },
    {
      id: 6,
      category: 'valuation',
      categoryLabel: 'Valuation methods',
      title: 'Pre-revenue startup valuation methods',
      desc: 'How angel syndicates and accelerators evaluate prototypes, customer contracts, and team background before commercial revenue.',
      readTime: '5 min read',
      date: 'Oct 04, 2026',
    },
  ];

  const filteredArticles = articles.filter((art) => {
    const matchesCategory = activeCategory === 'all' || art.category === activeCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#000000' }}>
      <Navbar />

      {/* Hero Section */}
      <SubpageHero
        badgeIcon={<BookOpen size={14} color="#93b3ff" />}
        badgeText="Venture intelligence"
        title={
          <>
            Practical valuation guides <br />
            <span style={{ color: '#93b3ff' }}>and equity frameworks</span>
          </>
        }
        description="Data-backed perspectives on venture capital due diligence, IRS Section 409A audits, valuation methodology bridges, and cap table governance."
        trustPoints={[
          'Written by CAs & CSs',
          'Updated regularly',
          'Verified frameworks',
        ]}
      >
        {/* Search Bar inside Hero */}
        <div style={{ maxWidth: '480px', margin: '12px auto 0', position: 'relative', width: '100%' }}>
          <Search size={18} color="#93b3ff" style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search guides, 409A, scorecard, DCF..."
            style={{
              width: '100%',
              padding: '14px 20px 14px 48px',
              borderRadius: '999px',
              background: 'rgba(5, 7, 12, 0.85)',
              border: '1px solid rgba(147, 179, 255, 0.35)',
              color: '#ffffff',
              fontSize: '0.95rem',
              outline: 'none',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
            }}
          />
        </div>
      </SubpageHero>

      {/* Filter Tabs */}
      <section style={{ padding: '0 24px 40px', background: '#000000' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '10px 22px',
                  borderRadius: '999px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: activeCategory === cat.id ? '1px solid #93b3ff' : '1px solid rgba(255, 255, 255, 0.12)',
                  background: activeCategory === cat.id ? '#93b3ff' : 'rgba(255, 255, 255, 0.03)',
                  color: activeCategory === cat.id ? '#000000' : 'rgba(255, 255, 255, 0.75)',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section style={{ padding: '40px 24px 100px', background: '#000000' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
            {filteredArticles.map((art) => (
              <article
                key={art.id}
                style={{
                  borderRadius: '24px',
                  border: '1px solid rgba(147, 179, 255, 0.22)',
                  background: 'radial-gradient(110% 110% at 50% 110%, rgba(147, 179, 255, 0.12) 0%, rgba(8, 10, 15, 0.95) 55%, #050608 100%)',
                  padding: '36px 30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                    <span
                      style={{
                        padding: '4px 12px',
                        borderRadius: '999px',
                        background: 'rgba(147, 179, 255, 0.1)',
                        border: '1px solid rgba(147, 179, 255, 0.3)',
                        color: '#93b3ff',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        letterSpacing: '0.02em',
                      }}
                    >
                      {art.categoryLabel}
                    </span>

                    <span style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.45)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <Clock size={13} /> {art.readTime}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.3rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      lineHeight: 1.35,
                      marginBottom: '14px',
                      fontFamily: 'var(--font-display, "Plus Jakarta Sans"), sans-serif',
                    }}
                  >
                    {art.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.94rem',
                      color: 'rgba(255, 255, 255, 0.65)',
                      lineHeight: 1.6,
                      margin: '0 0 24px 0',
                    }}
                  >
                    {art.desc}
                  </p>
                </div>

                <div
                  style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    paddingTop: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ fontSize: '0.84rem', color: 'rgba(255, 255, 255, 0.45)' }}>
                    {art.date}
                  </span>

                  <a
                    href={`/valuation`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: '#93b3ff',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                    }}
                  >
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </main>
  );
}

