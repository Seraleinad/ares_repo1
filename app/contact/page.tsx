"use client";

import { useState } from 'react';
import { CtaButton, Reveal } from '../components/ui';

export default function ContactPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 1800);
  };

  return (
    <div style={{ background: 'transparent', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Glow 1 — top-left */}
      <div className="teal-glow" style={{ width: 500, height: 500, top: '-100px', left: '-80px', animationDelay: '0.5s' }} />
      {/* Glow 2 — bottom-right */}
      <div className="teal-glow" style={{ width: 400, height: 400, bottom: '-80px', right: '-60px', animationDelay: '3s' }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Page header */}
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,5vw,4rem) 0' }}>
          <Reveal>
            <h1 style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 'clamp(3rem,7vw,6rem)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 0.95, color: '#fff' }}>
              Contact<br /><em style={{ color: '#6BC8C0', fontStyle: 'italic', fontWeight: 300 }}>us.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '0.875rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.35)', maxWidth: '48ch', marginTop: '1.75rem' }}>
              Reach out directly — we respond within one business day.
            </p>
          </Reveal>
        </div>

        <div style={{ maxWidth: 1100, margin: '3rem auto 0', padding: '0 clamp(1.5rem,5vw,4rem)' }}>
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)' }} />
        </div>

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0' }}>
          <Reveal delay={0}><ContactBlock label="Phone" lines={['(034) 432-0585', '+63 945 007 4610']} copyKey="phone" copyValue="(034) 432-0585" copied={copied} onCopy={copy} /></Reveal>
          <Reveal delay={0.08}><ContactBlock label="Email" lines={['nqalawfirm@gmail.com']} copyKey="email" copyValue="nqalawfirm@gmail.com" copied={copied} onCopy={copy} href="mailto:nqalawfirm@gmail.com" /></Reveal>
          <Reveal delay={0.16}><ContactBlock label="Address" lines={['Doors No. 31 & 34, BL', '3rd Flr, Land Tower of Sanders Lauren', '1st Lacson St., Bacolod City', 'Negros Occidental, Philippines 6100']} copyKey="address" copyValue="Doors No. 31 and 34, BL (3rd Flr, Land Tower of Sanders Lauren), 1st Lacson St., Bacolod City, Negros Occidental, Philippines 6100" copied={copied} onCopy={copy} /></Reveal>
          <Reveal delay={0.24}><ContactBlock label="Office Hours" lines={['Mon – Fri  8:00 AM – 5:00 PM', 'Sat  8:00 AM – 12:00 PM', 'Sun  Closed']} copyKey={null} copyValue="" copied={copied} onCopy={copy} /></Reveal>
        </div>

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(1.5rem,5vw,4rem)' }}>
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)' }} />
        </div>

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(3rem,5vw,4rem) clamp(1.5rem,5vw,4rem)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <Reveal>
            <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>
              Preventing Disputes. Protecting Interests.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <CtaButton href="mailto:nqalawfirm@gmail.com" mailTo>Send us an Email</CtaButton>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

function ContactBlock({ label, lines, copyKey, copyValue, copied, onCopy, href }: {
  label: string; lines: string[]; copyKey: string | null; copyValue: string;
  copied: string | null; onCopy: (text: string, key: string) => void; href?: string;
}) {
  const isCopied = copied === copyKey;
  return (
    <div style={{ padding: 'clamp(1.75rem,3vw,2.5rem)', borderRight: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)', position: 'relative' }}>
      <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#6BC8C0', marginBottom: '1.25rem' }}>{label}</p>
      <div style={{ marginBottom: '1.5rem' }}>
        {lines.map((line, i) =>
          href && i === 0 ? (
            <a key={i} href={href} style={{ display: 'block', fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 'clamp(0.9rem,1.3vw,1rem)', lineHeight: 1.85, color: '#6BC8C0', textDecoration: 'none', transition: 'opacity 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >{line}</a>
          ) : (
            <p key={i} style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 'clamp(0.9rem,1.3vw,1rem)', lineHeight: 1.85, color: 'rgba(255,255,255,0.6)' }}>{line}</p>
          )
        )}
      </div>
      {copyKey && (
        <button onClick={() => onCopy(copyValue, copyKey)} style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: isCopied ? '#6BC8C0' : 'rgba(255,255,255,0.2)', background: 'none', border: 'none', cursor: 'pointer', padding: 0, transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
          onMouseEnter={e => { if (!isCopied) e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; }}
          onMouseLeave={e => { if (!isCopied) e.currentTarget.style.color = 'rgba(255,255,255,0.2)'; }}
        >
          {isCopied ? (<><svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#6BC8C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>Copied</>) : (<><svg width="11" height="11" viewBox="0 0 12 12" fill="none"><rect x="4" y="1" width="7" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/><path d="M1 4.5V10a1 1 0 001 1h5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>Copy</>)}
        </button>
      )}
    </div>
  );
}
