"use client";

import Image from 'next/image';
import { CtaButton, Reveal } from './ui';

export default function Footer() {
  return (
    <footer>
      {/* ── CTA block ── */}
      <div style={{
        background: 'transparent',
        padding: 'clamp(5rem,10vw,8rem) clamp(1.5rem,5vw,4rem)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="teal-glow" style={{ width: 700, height: 700, bottom: '-280px', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <Reveal>
            <h2 style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 'clamp(2.2rem,5vw,4.5rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05, color: '#fff', marginBottom: '1.5rem' }}>
              We defend what<br />
              <em style={{ color: '#6BC8C0', fontStyle: 'italic', fontWeight: 300 }}>matters.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 'clamp(0.85rem,1.2vw,1rem)', lineHeight: 1.8, color: 'rgba(255,255,255,0.38)', maxWidth: '48ch', margin: '0 auto 2.5rem' }}>
              Your interests, your business, your future — protected by counsel that never cuts corners.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <CtaButton href="/contact">Book a Consultation</CtaButton>
          </Reveal>
        </div>
      </div>

      {/* ── Single line bar ── */}
      <div style={{
        background: 'transparent',
        
        padding: '1.1rem clamp(1.5rem,5vw,4rem)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1.5rem',
        flexWrap: 'wrap',
      }}>

        {/* Left — phones + email */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {['(034) 432-0585', '+63 945 007 4610', 'nqalawfirm@gmail.com'].map((v, i) => (
            <a key={v} href={i === 2 ? `mailto:${v}` : `tel:${v.replace(/\s/g,'')}`}
              style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '0.68rem', color: 'rgba(255,255,255,0.38)', textDecoration: 'none', letterSpacing: '0.03em', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#6BC8C0')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.38)')}
            >{v}</a>
          ))}
        </div>
        {/* Right — socials */}
        <div style={{ display: 'flex', gap: '1.1rem', alignItems: 'center' }}>
          {[
            { label: 'Facebook', icon: 'f' }, { label: 'Instagram', icon: '◉' },
            { label: 'X/Twitter', icon: '𝕏' }, { label: 'YouTube', icon: '▶' },
            { label: 'TikTok', icon: '♪' }, { label: 'LinkedIn', icon: 'in' },
          ].map(s => (
            <a key={s.label} href="#" aria-label={s.label}
              style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.25)', textDecoration: 'none', transition: 'color 0.2s, transform 0.2s', display: 'inline-block' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#6BC8C0'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.25)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >{s.icon}</a>
          ))}
        </div>

      </div>

      {/* ── Copyright ── */}
      <div style={{ background: '#1E1C22', padding: '0.85rem clamp(1.5rem,5vw,4rem)', textAlign: 'center' }}>
        <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '0.62rem', color: 'rgba(168,156,148,0.35)', letterSpacing: '0.04em' }}>
          © {new Date().getFullYear()} Nea Quiachon &amp; Associates Law Firm. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
