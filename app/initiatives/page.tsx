"use client";

import Image from 'next/image';
import { INITIATIVES } from '../components/constants';
import { Reveal } from '../components/ui';

export default function InitiativesPage() {
  return (
    <section style={{ background: 'transparent', minHeight: '80vh', padding: 'clamp(3rem,6vw,5rem) 0 clamp(5rem,10vw,8rem)', position: 'relative', overflow: 'hidden' }}>
      {/* Glow 1 — top-right */}
      <div className="teal-glow" style={{ width: 440, height: 440, top: '-80px', right: '-60px', animationDelay: '2s' }} />
      {/* Glow 2 — moved to mid-left, away from footer */}
      <div className="teal-glow" style={{ width: 360, height: 360, top: '45%', left: '-80px', animationDelay: '5s' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.5rem,5vw,4rem)' }}>
        <Reveal>
          <h1 style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.08, color: '#fff', marginBottom: 'clamp(0.75rem,2vw,1.25rem)' }}>
            Beyond law —<br />a commitment to <span style={{ color: '#6BC8C0' }}>impact.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.05}>
          <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '0.875rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.38)', maxWidth: '55ch', marginBottom: 'clamp(2.5rem,5vw,4rem)' }}>
            Three key initiatives extend NQa&apos;s impact beyond traditional legal services — reflecting the firm&apos;s commitment to professional excellence, education, and environmental stewardship.
          </p>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {INITIATIVES.map((item, i) => (
            <Reveal key={item.year} delay={i * 0.1}>
              <div className="init-card" style={{ '--hover-accent': item.accent } as React.CSSProperties}>
                <div className="init-default" style={{ justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.35)' }}>{item.year}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <div style={{ width: 110, height: 110, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Image src={item.logoSrc} alt={item.logoAlt} width={100} height={100} style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
                    </div>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.2rem', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, color: '#fff', marginBottom: '0.4rem' }}>{item.full}</h3>
                    <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.4 }}>{item.name} Initiative</p>
                  </div>
                </div>
                <div className="init-hover">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.5rem' }}>
                    <div style={{ width: 48, height: 48, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Image src={item.logoSrc} alt={item.logoAlt} width={44} height={44} style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
                    </div>
                    <h3 style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '1.05rem', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, color: '#fff' }}>{item.full}</h3>
                  </div>
                  <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '0.875rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.5)' }}>{item.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
