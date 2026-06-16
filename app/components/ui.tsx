"use client";

import { useCallback, useRef } from 'react';
import { useFadeIn } from './hooks';

/* ── Reveal ── */
export function Reveal({
  children,
  delay = 0,
  style = {},
}: {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const { ref, vis } = useFadeIn();
  return (
    <div
      ref={ref}
      style={{
        opacity:    vis ? 1 : 0,
        transform:  vis ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}s,
                     transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ── TiltCard ── */
export function TiltCard({
  children,
  darkHover = false,
  style = {},
}: {
  children: React.ReactNode;
  darkHover?: boolean;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current; if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    el.style.transform = `perspective(600px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) scale(1.025)`;
    el.style.boxShadow = darkHover
      ? `0 12px 40px rgba(0,0,0,0.35)`
      : `0 8px 30px rgba(38,36,42,0.12)`;
  }, [darkHover]);

  const onLeave = useCallback(() => {
    const el = ref.current; if (!el) return;
    el.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)';
    el.style.boxShadow = 'none';
  }, []);

  return (
    <div
      ref={ref}
      className="tilt-card"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={style}
    >
      {children}
    </div>
  );
}

/* ── CTA Button ── */
import Link from 'next/link';

export function CtaButton({
  href,
  children,
  mailTo = false,
}: {
  href: string;
  children: React.ReactNode;
  mailTo?: boolean;
}) {
  const inner = (
    <>
      {children}
      <span className="cta-arrow" aria-hidden>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </>
  );

  if (mailTo) {
    return <a href={href} className="cta-btn">{inner}</a>;
  }
  return <Link href={href} className="cta-btn">{inner}</Link>;
}
