"use client";

import { FEATURES_LIST } from '../components/constants';
import { Reveal } from '../components/ui';

export default function FeaturedPage() {
  return (
    <section style={{ background: 'transparent', padding: 'clamp(5rem,10vw,9rem) 0', overflow: 'hidden', minHeight: '80vh', position: 'relative' }}>
      {/* Glow 1 — mid-left */}
      <div className="teal-glow" style={{ width: 480, height: 480, top: '30%', left: '-120px', animationDelay: '1s' }} />
      {/* Glow 2 — top-right */}
      <div className="teal-glow" style={{ width: 300, height: 300, top: '-40px', right: '-40px', animationDelay: '4.5s' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: 'clamp(4rem,8vw,6rem) clamp(1.5rem,5vw,4rem) 0' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', marginBottom: 'clamp(3rem,6vw,4rem)' }}>
          <Reveal>
            <h1 style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.08, color: '#fff' }}>
              Know your<br /><span style={{ color: '#6BC8C0' }}>rights.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <a href="#" style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6BC8C0', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'gap 0.3s cubic-bezier(0.16,1,0.3,1)' }}
              onMouseEnter={e => (e.currentTarget.style.gap = '0.9rem')}
              onMouseLeave={e => (e.currentTarget.style.gap = '0.5rem')}
            >
              View all topics
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5h9M8 3l3.5 3.5L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </Reveal>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          {FEATURES_LIST.map((t, i) => (
            <Reveal key={t} delay={i * 0.04}>
              <a href="#" className="feature-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.2rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)', textDecoration: 'none', color: 'rgba(255,255,255,0.55)', fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 'clamp(0.85rem,1.4vw,1rem)', fontWeight: 400 }}>
                <span>{t}</span>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ flexShrink: 0, opacity: 0.3 }}><path d="M2 6.5h9M8 3l3.5 3.5L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
