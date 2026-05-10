import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ArrowBtn, Container, KanzMark } from '@/components/design';

const NAV_ITEMS = [
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Framework', path: '/framework' },
  { label: 'Industries', path: '/industries' },
  { label: 'Insights', path: '/insights' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) =>
    path === '/'
      ? location.pathname === '/'
      : location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '12px 0' : '20px 0',
        background: scrolled ? 'color-mix(in oklab, var(--paper) 86%, transparent)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(140%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(140%)' : 'none',
        borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
        transition: 'all .3s ease',
      }}
    >
      <Container
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}
      >
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            color: 'var(--ink)',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          <KanzMark size={28} />
          <span
            style={{
              fontFamily: 'var(--display)',
              fontWeight: 'var(--display-weight)' as unknown as number,
              fontStyle: 'var(--head-style)' as unknown as string,
              fontSize: 22,
              letterSpacing: '-0.02em',
            }}
          >
            Kanz<span style={{ color: 'var(--accent)' }}>.</span>ai
          </span>
        </Link>

        <div className="kanz-nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {NAV_ITEMS.map((it) => {
            const active = isActive(it.path);
            return (
              <Link
                key={it.path}
                to={it.path}
                style={{
                  fontSize: 13,
                  color: 'var(--ink)',
                  textDecoration: 'none',
                  padding: '8px 14px',
                  borderRadius: 8,
                  fontWeight: 450 as unknown as number,
                  letterSpacing: '0.005em',
                  background: active ? 'var(--line)' : 'transparent',
                  position: 'relative',
                  transition: 'background .2s ease',
                }}
                onMouseOver={(e) => {
                  if (!active) e.currentTarget.style.background = 'var(--line)';
                }}
                onMouseOut={(e) => {
                  if (!active) e.currentTarget.style.background = 'transparent';
                }}
              >
                {it.label}
                {active && (
                  <span
                    style={{
                      position: 'absolute',
                      left: '50%',
                      bottom: -4,
                      transform: 'translateX(-50%)',
                      width: 4,
                      height: 4,
                      borderRadius: 999,
                      background: 'var(--accent)',
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="kanz-nav-cta" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span
            style={{
              fontSize: 11,
              color: 'var(--muted)',
              fontFamily: 'var(--mono)',
              letterSpacing: '0.06em',
            }}
          >
            EN
          </span>
          <Link to="/assess" style={{ textDecoration: 'none' }}>
            <ArrowBtn primary style={{ padding: '10px 18px', fontSize: 12, whiteSpace: 'nowrap' }}>
              Assess Your Organization
            </ArrowBtn>
          </Link>
        </div>

        <button
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMenuOpen((v) => !v)}
          className="kanz-nav-mobile-btn"
          style={{
            background: 'transparent',
            border: '1px solid var(--line-strong)',
            color: 'var(--ink)',
            borderRadius: 999,
            width: 40,
            height: 40,
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      {isMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 16,
            right: 16,
            marginTop: 8,
            background: 'var(--paper-2)',
            border: '1px solid var(--line-strong)',
            borderRadius: 12,
            padding: '16px 12px',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          {NAV_ITEMS.map((it) => (
            <Link
              key={it.path}
              to={it.path}
              onClick={() => setIsMenuOpen(false)}
              style={{
                color: 'var(--ink)',
                textDecoration: 'none',
                padding: '12px 16px',
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 450 as unknown as number,
                background: isActive(it.path) ? 'var(--line)' : 'transparent',
              }}
            >
              {it.label}
            </Link>
          ))}
          <Link to="/assess" onClick={() => setIsMenuOpen(false)} style={{ textDecoration: 'none', marginTop: 12 }}>
            <ArrowBtn primary style={{ width: '100%', justifyContent: 'center' }}>
              Assess Your Organization
            </ArrowBtn>
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 980px) {
          .kanz-nav-desktop { display: none !important; }
          .kanz-nav-cta { display: none !important; }
          .kanz-nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
