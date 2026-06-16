"use client";

import { useEffect, useRef, useState } from 'react';
import { Reveal } from '../components/ui';

// ── SVG icons ──
const TrustIcon = () => (
  <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width:'100%', height:'100%' }}>
    <path d="M80 20 L130 42 L130 90 C130 118 80 140 80 140 C80 140 30 118 30 90 L30 42 Z" stroke="#6BC8C0" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
    <path d="M80 35 L115 52 L115 88 C115 108 80 124 80 124 C80 124 45 108 45 88 L45 52 Z" stroke="rgba(107,200,192,0.25)" strokeWidth="1" fill="none" strokeLinejoin="round"/>
    <path d="M60 82 L73 95 L100 65" stroke="#6BC8C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MissionIcon = () => (
  <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width:'100%', height:'100%' }}>
    <circle cx="80" cy="80" r="52" stroke="#6BC8C0" strokeWidth="1.5"/>
    <circle cx="80" cy="80" r="38" stroke="rgba(107,200,192,0.2)" strokeWidth="1" strokeDasharray="3 5"/>
    <circle cx="80" cy="80" r="4" fill="#6BC8C0" opacity="0.8"/>
    <path d="M80 76 L86 56 L80 62 L74 56 Z" stroke="#6BC8C0" strokeWidth="1.2" fill="rgba(107,200,192,0.3)" strokeLinejoin="round"/>
    <path d="M80 84 L86 104 L80 98 L74 104 Z" stroke="rgba(107,200,192,0.4)" strokeWidth="1.2" fill="none" strokeLinejoin="round"/>
    <line x1="80" y1="22" x2="80" y2="30" stroke="rgba(107,200,192,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="80" y1="130" x2="80" y2="138" stroke="rgba(107,200,192,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="22" y1="80" x2="30" y2="80" stroke="rgba(107,200,192,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="130" y1="80" x2="138" y2="80" stroke="rgba(107,200,192,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const VisionIcon = () => (
  <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width:'100%', height:'100%' }}>
    <path d="M20 80 C20 80 45 38 80 38 C115 38 140 80 140 80 C140 80 115 122 80 122 C45 122 20 80 20 80Z" stroke="#6BC8C0" strokeWidth="1.5" fill="none"/>
    <circle cx="80" cy="80" r="22" stroke="#6BC8C0" strokeWidth="1.5"/>
    <circle cx="80" cy="80" r="10" stroke="rgba(107,200,192,0.5)" strokeWidth="1"/>
    <circle cx="80" cy="80" r="3" fill="#6BC8C0" opacity="0.7"/>
    <circle cx="87" cy="74" r="3" fill="rgba(107,200,192,0.35)"/>
  </svg>
);

const TeamIcon = () => (
  <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width:'100%', height:'100%' }}>
    <circle cx="80" cy="52" r="16" stroke="#6BC8C0" strokeWidth="1.5"/>
    <path d="M50 130 C50 108 62 98 80 98 C98 98 110 108 110 130" stroke="#6BC8C0" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <circle cx="38" cy="62" r="12" stroke="rgba(107,200,192,0.55)" strokeWidth="1.2"/>
    <path d="M14 128 C14 110 24 102 38 102 C52 102 62 110 62 128" stroke="rgba(107,200,192,0.55)" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
    <circle cx="122" cy="62" r="12" stroke="rgba(107,200,192,0.55)" strokeWidth="1.2"/>
    <path d="M98 128 C98 110 108 102 122 102 C136 102 146 110 146 128" stroke="rgba(107,200,192,0.55)" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
  </svg>
);

// ── Karaoke ──
const LINE1 = 'Serving Negros Island with integrity,';
const LINE2 = 'credibility, and excellence since 2015.';
const ALL_WORDS = [...LINE1.split(' '), ...LINE2.split(' ')];
const L1_COUNT  = LINE1.split(' ').length;

function KaraokeSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [prog, setProg] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = trackRef.current;
      if (!el) return;
      const rect     = el.getBoundingClientRect();
      const total    = el.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      setProg(Math.min(1, Math.max(0, scrolled / total)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const textStart = 0.15;
  const textRange = 0.85;
  const n = ALL_WORDS.length;

  const wordProg = (i: number) => {
    const s = textStart + (i / n) * textRange;
    const e = textStart + ((i + 1.6) / n) * textRange;
    return Math.max(0, Math.min(1, (prog - s) / (e - s)));
  };

  const textStyle: React.CSSProperties = {
    fontFamily: 'Montserrat, Arial, sans-serif',
    fontSize: 'clamp(1.5rem, 2.8vw, 2.8rem)',
    fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.35,
    margin: 0, userSelect: 'none',
  };

  const renderLine = (words: string[], offset: number) =>
    words.map((word, j) => {
      const p = wordProg(offset + j);
      return (
        <span key={j} style={{ display: 'inline-block', marginRight: '0.3em', color: `rgba(255,255,255,${(0.13 + 0.87 * p).toFixed(3)})`, transition: 'color 0.1s ease' }}>
          {word}
        </span>
      );
    });

  return (
    <div ref={trackRef} style={{ height: '280vh', position: 'relative' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="teal-glow" style={{ width: 600, height: 600, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
        <div style={{ maxWidth: 1100, width: '100%', padding: '0 clamp(1.5rem,5vw,4rem)', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <p style={{ ...textStyle, marginBottom: '0.12em' }}>{renderLine(ALL_WORDS.slice(0, L1_COUNT), 0)}</p>
          <p style={textStyle}>{renderLine(ALL_WORDS.slice(L1_COUNT), L1_COUNT)}</p>
        </div>
      </div>
    </div>
  );
}

// ── Floating card component ──
function Card({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{
      background: '#2E2C32',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: 16,
      padding: 'clamp(1.5rem,3vw,2.25rem)',
      ...style,
    }}>
      {children}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <section style={{ background: 'transparent', position: 'relative', overflow: 'hidden' }}>
        {/* Teal glows */}
        <div className="teal-glow" style={{ width: 480, height: 480, top: '-80px', right: '-60px' }} />
        <div className="teal-glow" style={{ width: 360, height: 360, top: '38%', left: '-100px' }} />
        <div className="teal-glow" style={{ width: 300, height: 300, top: '70%', right: '-40px' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', padding: '0 clamp(1.5rem,5vw,4rem)' }}>

          {/* ── COLLAGE GRID ── */}
          {/* Inspired by Nopan: items placed freely in a CSS grid, 
              icons float at mid-height overlapping text zones,
              cards stagger vertically — not row-by-row */}

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: 'auto',
            gap: '1.5rem',
            paddingTop: 'clamp(3rem,6vw,5rem)',
          }}>

            {/* ── Block 1: Big headline — spans left col, top ── */}
            <Reveal>
              <div style={{ gridColumn: '1', gridRow: '1', paddingTop: '1rem', paddingBottom: '1rem' }}>
                <h1 style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.0, color: '#fff', marginBottom: '1.25rem' }}>
                  A firm built on<br />
                  <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#6BC8C0' }}>trust.</em>
                </h1>
                <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '0.9rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.38)', maxWidth: '40ch' }}>
                  A general practice rooted in Negros Island, dedicated to preventing disputes and protecting what matters most since 2015.
                </p>
              </div>
            </Reveal>

            {/* ── Block 2: Trust icon card — right col, top, pushed down ── */}
            <Reveal delay={0.1}>
              <Card style={{ gridColumn: '2', gridRow: '1', marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ width: 100, height: 100 }}>
                  <TrustIcon />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '-0.02em', color: '#fff', marginBottom: '0.5rem' }}>Built on trust</h3>
                  <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '0.82rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.4)' }}>
                    Founded in 2015 by Atty. Nea Cecille Quiachon, the firm has earned the trust of individuals and organisations through strategic counsel and steadfast advocacy.
                  </p>
                </div>
              </Card>
            </Reveal>

            {/* ── Block 3: Mission card — left col, lower, pushed down ── */}
            <Reveal delay={0.08}>
              <Card style={{ gridColumn: '1', gridRow: '2', marginTop: '-1rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ width: 90, height: 90 }}>
                  <MissionIcon />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '-0.02em', color: '#fff', marginBottom: '0.5rem' }}>Our mission</h3>
                  <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '0.82rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.4)' }}>
                    To uplift all our clients through noble law and accounting — providing quality service delivery and capacity building that makes a lasting difference.
                  </p>
                </div>
              </Card>
            </Reveal>

            {/* ── Block 4: Vision — right col, row 2, tall text block ── */}
            <Reveal delay={0.12}>
              <div style={{ gridColumn: '2', gridRow: '2', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '1rem', marginTop: '-1rem' }}>
                <div style={{ width: 80, height: 80, marginBottom: '1.25rem' }}>
                  <VisionIcon />
                </div>
                <h3 style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 'clamp(1.3rem,2.5vw,2rem)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1, color: '#fff', marginBottom: '0.9rem' }}>
                  Leading preventive<br />litigation.
                </h3>
                <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '0.85rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.38)', maxWidth: '36ch' }}>
                  To be the leading firm in preventive litigation and integrity accounting in the Negros Island Region — anticipating conflict before it arises.
                </p>
              </div>
            </Reveal>

            {/* ── Block 5: Team — full width row, side by side text + icon ── */}
            <Reveal delay={0.06}>
              <div style={{
                gridColumn: '1 / -1',
                gridRow: '3',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.5rem',
                alignItems: 'center',
                background: '#2E2C32',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 16,
                padding: 'clamp(2rem,4vw,3rem)',
                marginTop: '0.5rem',
              }}>
                <div>
                  <h3 style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 'clamp(1.3rem,2.5vw,2rem)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1, color: '#fff', marginBottom: '0.9rem' }}>
                    A team you<br />can count on.
                  </h3>
                  <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '0.85rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.38)', maxWidth: '40ch', marginBottom: '1.5rem' }}>
                    Over 15 corporate clients trust our team — led by Atty. Nea Cecille Quiachon, Atty. Jay-an Ditchella, and Operations Manager Grethel Inayan — for seamless, quality legal support.
                  </p>
                  {/* Testimonial inline */}
                  <blockquote style={{ borderLeft: '2px solid rgba(107,200,192,0.4)', paddingLeft: '1rem' }}>
                    <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '0.8rem', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.7, color: 'rgba(255,255,255,0.5)', marginBottom: '0.6rem' }}>
                      &ldquo;Professional, responsive, and truly took the time to understand my case.&rdquo;
                    </p>
                    <cite style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '0.58rem', fontWeight: 700, fontStyle: 'normal', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6BC8C0' }}>
                      Mr. Alex Cayoca
                    </cite>
                  </blockquote>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ width: 'clamp(120px,15vw,180px)', height: 'clamp(120px,15vw,180px)', position: 'relative' }}>
                    <div style={{ position: 'absolute', inset: '-30%', background: 'radial-gradient(circle, rgba(107,200,192,0.08) 0%, transparent 70%)', borderRadius: '50%' }} />
                    <TeamIcon />
                  </div>
                </div>
              </div>
            </Reveal>

          </div>

          <div style={{ height: 'clamp(4rem,7vw,5rem)' }} />
        </div>
      </section>

      <KaraokeSection />
    </>
  );
}
