"use client";

import Image from 'next/image';
import { Reveal } from '../components/ui';

function SvcCard({ src, alt, title, body, size = 180 }: {
  src: string; alt: string; title: string; body: string; size?: number;
}) {
  return (
    <div style={{
      background: 'rgba(10, 26, 24, 0.55)',
      backdropFilter: 'blur(18px)',
      WebkitBackdropFilter: 'blur(18px)',
      border: '1px solid rgba(107,200,192,0.13)',
      borderRadius: 16,
      padding: 'clamp(1.5rem,3vw,2rem)',
      boxShadow: '0 4px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(107,200,192,0.07)',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
    }}>
      {/* Container wrapper ensuring images stay centered and scale correctly */}
      <div style={{ 
        width: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        maxHeight: `${size}px`,
        overflow: 'hidden'
      }}>
        <div style={{ width: size, height: size, position: 'relative', flexShrink: 0 }}>
          <Image 
            src={src} 
            alt={alt} 
            fill 
            sizes={`${size}px`}
            style={{ objectFit: 'contain' }} 
            priority
          />
        </div>
      </div>
      <div>
        <h2 style={{
          fontFamily: 'Montserrat, Arial, sans-serif',
          fontSize: 'clamp(1.2rem,2.4vw,1.8rem)',
          fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1,
          color: '#fff', marginBottom: '0.65rem',
        }}>{title}</h2>
        <p style={{
          fontFamily: 'Montserrat, Arial, sans-serif',
          fontSize: '0.85rem', lineHeight: 1.85,
          color: 'rgba(255,255,255,0.45)',
        }}>{body}</p>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <section style={{ background: 'transparent', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <div className="teal-glow" style={{ width: 600, height: 600, top: '-180px', left: '50%', transform: 'translateX(-50%)' }} />
      <div className="teal-glow" style={{ width: 320, height: 320, top: '55%', right: '-80px' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', padding: '0 clamp(1.5rem,5vw,4rem)' }}>

        {/* Header */}
        <div style={{ padding: 'clamp(3rem,6vw,5rem) 0 clamp(3.5rem,7vw,6rem)', textAlign: 'center' }}>
          <Reveal>
            <h1 style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 'clamp(2.4rem,5.5vw,4.5rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.0, color: '#fff' }}>
              How we<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#6BC8C0' }}>serve you.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '0.875rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.35)', maxWidth: '44ch', margin: '1.25rem auto 0' }}>
              Precise, principled legal work across every area of practice — handled with integrity from the first consultation.
            </p>
          </Reveal>
        </div>

        {/* 2 independent columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(2rem,4vw,4rem)',
          alignItems: 'start',
          paddingBottom: 'clamp(4rem,8vw,6rem)',
        }}>

          {/* LEFT COLUMN */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2rem,4vw,3rem)' }}>
            <Reveal delay={0.0}>
              <SvcCard
                src="/generals.png" alt="General Law"
                title="General Law"
                body="Comprehensive legal services across a wide range of matters, offering sound advice and practical solutions tailored to each client — individuals, families, or organisations."
                size={180}
              />
            </Reveal>
            <Reveal delay={0.08}>
              <SvcCard
                src="/environmentals.png" alt="Environmental Law"
                title="Environmental Law"
                body="Navigating the complex framework of environmental regulation and compliance requirements, handling disputes and supporting projects that balance development with stewardship."
                size={180}
              />
            </Reveal>
          </div>

          {/* RIGHT COLUMN — offset down on larger viewports */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 'clamp(2rem,4vw,3rem)', 
            paddingTop: 'clamp(0rem,8vw,5rem)' 
          }}>
            <Reveal delay={0.04}>
              <SvcCard
                src="/corporates.png" alt="Corporate Law"
                title="Corporate Law"
                body="Full-service corporate counsel across the entire business lifecycle — from company formation and compliance to contract drafting, mergers, and governance."
                size={180}
              />
            </Reveal>
            <Reveal delay={0.1}>
              <SvcCard
                src="/legals.png" alt="Legal Training"
                title="Legal Training"
                body="Practical, engaging, and relevant legal training programs for individuals, companies, and institutions — building skills to address legal issues confidently."
                size={180}
              />
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}