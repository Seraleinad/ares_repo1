"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NAV_LINKS } from './constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 clamp(1.5rem, 5vw, 4rem)',
        height: scrolled ? '60px' : '76px',
        background: scrolled ? 'rgba(38,36,42,0.92)' : 'rgba(38,36,42,0.6)',
        backdropFilter: 'blur(20px) saturate(1.4)',
        WebkitBackdropFilter: 'blur(20px) saturate(1.4)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
        transition: 'height 0.4s ease, background 0.4s ease',
      }}>

        {/* Logo + firm name */}
        <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
          <Image src="/NQa New Logo.png" alt="NQa Law Firm" width={42} height={42} style={{ display: 'block', objectFit: 'contain', flexShrink: 0 }} priority />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
            <span style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.01em', color: '#fff' }}>Nea Quiachon &amp; Associates</span>
            <span style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '0.58rem', fontWeight: 400, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Law Firm</span>
          </div>
        </Link>

        {/* Desktop nav — links only, no button */}
        <ul className="nav-links-desktop" style={{ display: 'flex', gap: '2.25rem', listStyle: 'none', alignItems: 'center' }}>
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link href={href} style={{
                  fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '0.68rem', fontWeight: 600,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: isActive ? '#6BC8C0' : 'rgba(255,255,255,0.65)',
                  textDecoration: 'none', transition: 'color 0.2s',
                  borderBottom: isActive ? '1px solid #6BC8C0' : '1px solid transparent',
                  paddingBottom: '2px',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#6BC8C0')}
                  onMouseLeave={e => (e.currentTarget.style.color = isActive ? '#6BC8C0' : 'rgba(255,255,255,0.65)')}
                >{label}</Link>
              </li>
            );
          })}
        </ul>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu"
          style={{ display: 'none', flexDirection: 'column', gap: '5px', background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: 22, height: 1.5, background: '#fff', transition: 'all 0.3s',
              transform: menuOpen
                ? i === 0 ? 'translateY(6.5px) rotate(45deg)' : i === 2 ? 'translateY(-6.5px) rotate(-45deg)' : 'scaleX(0)'
                : 'none',
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile overlay — links only */}
      <div style={{
        position: 'fixed', inset: 0, background: 'rgba(38,36,42,0.97)', backdropFilter: 'blur(20px)',
        zIndex: 99, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem',
        opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'all' : 'none', transition: 'opacity 0.35s ease',
      }}>
        {NAV_LINKS.map(({ label, href }) => (
          <Link key={href} href={href} onClick={() => setMenuOpen(false)} style={{
            fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '2rem', fontWeight: 700,
            letterSpacing: '-0.02em', color: pathname === href ? '#6BC8C0' : '#fff',
            textDecoration: 'none', transition: 'color 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = '#6BC8C0')}
            onMouseLeave={e => (e.currentTarget.style.color = pathname === href ? '#6BC8C0' : '#fff')}
          >{label}</Link>
        ))}
      </div>
    </>
  );
}
