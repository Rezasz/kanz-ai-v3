import React, { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

type Style = CSSProperties;

export function Container({
  children,
  style,
  className,
}: {
  children: ReactNode;
  style?: Style;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{ maxWidth: 1320, margin: '0 auto', padding: '0 32px', ...style }}
    >
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  style,
  plain,
}: {
  children: ReactNode;
  style?: Style;
  /** Suppress the gold leading dash + dot (rare — use when accent would compete) */
  plain?: boolean;
}) {
  return (
    <div
      style={{
        fontFamily: 'var(--mono)',
        fontSize: 11,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--muted)',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        ...style,
      }}
    >
      {!plain && (
        <>
          <span style={{ width: 22, height: 1, background: 'var(--accent)' }} />
          <span
            style={{
              width: 5,
              height: 5,
              borderRadius: '50%',
              background: 'var(--accent)',
              flexShrink: 0,
              marginRight: 2,
            }}
          />
        </>
      )}
      {children}
    </div>
  );
}

export function DisplayHead({
  children,
  size = 96,
  style,
}: {
  children: ReactNode;
  size?: number | string;
  style?: Style;
}) {
  return (
    <h2
      style={{
        fontFamily: 'var(--display)',
        fontWeight: 'var(--display-weight)' as unknown as number,
        fontStyle: 'var(--head-style)' as unknown as string,
        fontSize: typeof size === 'number' ? size : size,
        lineHeight: 1.04,
        letterSpacing: '-0.02em',
        margin: 0,
        color: 'var(--ink)',
        ...style,
      }}
    >
      {children}
    </h2>
  );
}

export function GoldItalic({ children }: { children: ReactNode }) {
  return (
    <em
      style={{
        fontStyle: 'italic',
        color: 'var(--accent)',
        // Use the display font (Space Grotesk) faux-italic so the gold word
        // sits inside the same headline family — matches the brand PDF.
        fontFamily: 'var(--display)',
        fontWeight: 'var(--display-weight)' as unknown as number,
      }}
    >
      {children}
    </em>
  );
}

type ArrowBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  primary?: boolean;
  dark?: boolean;
  ghost?: boolean;
  children: ReactNode;
};

export function ArrowBtn({
  children,
  primary,
  dark,
  ghost,
  style,
  onMouseDown,
  onMouseUp,
  onMouseLeave,
  ...rest
}: ArrowBtnProps) {
  const stylePrimary: Style = { background: 'var(--ink)', color: 'var(--paper)' };
  const styleDark: Style = { background: 'var(--accent)', color: 'var(--paper)' };
  const styleGhost: Style = {
    background: 'transparent',
    color: 'var(--ink)',
    border: '1px solid var(--line-strong)',
  };
  const styleDefault: Style = {
    background: 'transparent',
    color: 'var(--ink)',
    border: '1px solid var(--line-strong)',
  };
  const base = primary ? stylePrimary : dark ? styleDark : ghost ? styleGhost : styleDefault;

  return (
    <button
      {...rest}
      style={{
        ...base,
        fontFamily: 'var(--sans)',
        fontSize: 13,
        fontWeight: 500,
        padding: '14px 22px',
        borderRadius: 999,
        border: primary || dark ? 'none' : '1px solid var(--line-strong)',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        letterSpacing: '0.01em',
        transition: 'transform .15s ease, background .2s ease, color .2s ease',
        ...style,
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'scale(0.98)';
        onMouseDown?.(e);
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        onMouseUp?.(e);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        onMouseLeave?.(e);
      }}
    >
      {children}
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M3 7H11M11 7L7 3M11 7L7 11"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export function ArrowLink({
  to,
  children,
  primary,
  dark,
  ghost,
  style,
}: {
  to: string;
  children: ReactNode;
  primary?: boolean;
  dark?: boolean;
  ghost?: boolean;
  style?: Style;
}) {
  const external = /^https?:|^mailto:|^tel:|^#|\.html?$/.test(to);
  const inner = (
    <ArrowBtn primary={primary} dark={dark} ghost={ghost} style={style}>
      {children}
    </ArrowBtn>
  );
  if (external) {
    return (
      <a href={to} style={{ textDecoration: 'none' }}>
        {inner}
      </a>
    );
  }
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      {inner}
    </Link>
  );
}

export function KanzMark({ size = 32, accent = 'var(--accent)' }: { size?: number; accent?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1" />
      <circle cx="16" cy="16" r="9" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <circle cx="16" cy="16" r="3" fill={accent} />
      <line x1="16" y1="1" x2="16" y2="7" stroke="currentColor" strokeWidth="1" />
      <line x1="16" y1="25" x2="16" y2="31" stroke="currentColor" strokeWidth="1" />
      <line x1="1" y1="16" x2="7" y2="16" stroke="currentColor" strokeWidth="1" />
      <line x1="25" y1="16" x2="31" y2="16" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

/** Render a kicker like "01 / About" with the leading number in accent gold. */
function KickerLabel({ kicker }: { kicker: string }) {
  // Split on the first slash so "01 / About" → ["01", "/ About"]
  const m = kicker.match(/^(\S+)(\s*\/\s*.+)$/);
  if (!m) return <>{kicker}</>;
  return (
    <>
      <span style={{ color: 'var(--accent)', fontWeight: 500 }}>{m[1]}</span>
      <span>{m[2]}</span>
    </>
  );
}

export function PageHero({
  kicker,
  title,
  italic,
  lede,
  meta,
}: {
  kicker: string;
  title: ReactNode;
  italic?: ReactNode;
  lede?: ReactNode;
  meta?: string[];
}) {
  return (
    <section
      style={{
        padding: '180px 0 140px',
        background: 'var(--paper)',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.5, pointerEvents: 'none' }}
        aria-hidden
      >
        <defs>
          <pattern id="ph-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="var(--ink)" strokeWidth="0.4" opacity="0.06" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ph-grid)" />
      </svg>

      <Container>
        <Eyebrow style={{ marginBottom: 32 }}>
          <KickerLabel kicker={kicker} />
        </Eyebrow>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 60, alignItems: 'end' }}>
          <DisplayHead size="clamp(48px, 7vw, 120px)" style={{ lineHeight: 1.06, maxWidth: 1000, paddingBottom: 12 }}>
            {title}
            {italic && (
              <>
                <br />
                <GoldItalic>{italic}</GoldItalic>
              </>
            )}
          </DisplayHead>
          <div>
            {lede && (
              <p
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontStyle: 'italic',
                  fontSize: 22,
                  lineHeight: 1.35,
                  color: 'var(--ink)',
                  margin: 0,
                  maxWidth: 460,
                }}
              >
                {lede}
              </p>
            )}
            {meta && meta.length > 0 && (
              <div
                style={{
                  marginTop: 28,
                  fontFamily: 'var(--mono)',
                  fontSize: 11,
                  letterSpacing: '0.16em',
                  color: 'var(--muted)',
                  textTransform: 'uppercase',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px 22px',
                }}
              >
                {meta.map((m, i) => (
                  <span key={i}>{m}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function PageCTA({
  kicker,
  title,
  italic,
  body,
  primary,
  secondary,
}: {
  kicker: string;
  title: ReactNode;
  italic?: ReactNode;
  body?: ReactNode;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
}) {
  return (
    <section style={{ padding: '120px 0 40px' }}>
      <Container>
        <div
          style={{
            background: 'var(--paper-2)',
            color: 'var(--ink)',
            border: '1px solid var(--line-strong)',
            borderRadius: 8,
            padding: '80px 64px',
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gap: 60,
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 24,
              right: 28,
              fontFamily: 'var(--mono)',
              fontSize: 10,
              letterSpacing: '0.2em',
              opacity: 0.5,
            }}
          >
            KANZ.AI / NEXT
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: 20,
              }}
            >
              {kicker}
            </div>
            <h2
              style={{
                fontFamily: 'var(--display)',
                fontWeight: 'var(--display-weight)' as unknown as number,
                fontStyle: 'var(--head-style)' as unknown as string,
                fontSize: 'clamp(40px, 5vw, 64px)',
                lineHeight: 1.06,
                letterSpacing: '-0.02em',
                margin: 0,
              }}
            >
              {title} {italic && <GoldItalic>{italic}</GoldItalic>}
            </h2>
            {body && (
              <p style={{ fontSize: 16.5, lineHeight: 1.6, color: 'var(--muted)', marginTop: 24, maxWidth: 560 }}>
                {body}
              </p>
            )}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
            {primary && (
              <ArrowLink to={primary.to} dark style={{ padding: '18px 28px', fontSize: 14 }}>
                {primary.label}
              </ArrowLink>
            )}
            {secondary && (
              <ArrowLink to={secondary.to} ghost style={{ padding: '18px 28px', fontSize: 14 }}>
                {secondary.label}
              </ArrowLink>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function MarqueeStrip({ items }: { items: string[] }) {
  const all = [...items, ...items, ...items];
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--line-strong)',
        borderBottom: '1px solid var(--line-strong)',
        padding: '14px 0',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: 56,
          animation: 'kanz-marquee 60s linear infinite',
          whiteSpace: 'nowrap',
          fontFamily: 'var(--mono)',
          fontSize: 12,
          letterSpacing: '0.18em',
          color: 'var(--muted)',
        }}
      >
        {all.map((x, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 56 }}>
            <span
              style={{
                display: 'inline-block',
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'var(--accent)',
              }}
            />
            {x}
          </span>
        ))}
      </div>
    </div>
  );
}

export function HeroBackdrop() {
  // Square viewBox; rotation is around its center (600,600). The SVG itself
  // is sized as a square via aspect-ratio + width:min(...) and positioned
  // absolutely so it stays a true circle regardless of section height. This
  // avoids the "wedge orbits off-screen" effect that xMidYMid slice produces
  // when the hero section is taller than wide.
  const ref = useRef<SVGGElement | null>(null);
  useEffect(() => {
    let raf = 0;
    let angle = 0;
    let last = performance.now();
    const DEG_PER_SEC = 50;
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      angle = (angle + DEG_PER_SEC * dt) % 360;
      if (ref.current) ref.current.setAttribute('transform', `rotate(${angle} 600 600)`);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const dots: React.ReactElement[] = [];
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 24; j++) {
      const x = i * 50 + 25;
      const y = j * 50 + 25;
      const dx = x - 600;
      const dy = y - 600;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const op = Math.max(0, 1 - dist / 700) * 0.4;
      if (op > 0.01) {
        dots.push(<circle key={`${i}-${j}`} cx={x} cy={y} r={1} fill="currentColor" opacity={op} />);
      }
    }
  }

  // 90° trailing wedge: leading edge at 0° (east), trail at -90° (north).
  const R = 560;
  const lead = { x: 600 + R, y: 600 };
  const trail = { x: 600, y: 600 - R };
  const wedgePath = `M 600 600 L ${lead.x} ${lead.y} A ${R} ${R} 0 0 0 ${trail.x} ${trail.y} Z`;

  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        // Anchor the radar to the visible hero area, not the whole section.
        // Top-50% / left-50% with translate centers a square that's the
        // smaller of viewport-min(80vmin) and 1100px — the rotation point
        // then matches the visible center exactly.
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'min(110vmin, 1100px)',
        height: 'min(110vmin, 1100px)',
        color: 'var(--ink)',
        opacity: 0.65,
        pointerEvents: 'none',
      }}
    >
      <svg viewBox="0 0 1200 1200" width="100%" height="100%">
        <defs>
          <radialGradient id="vfade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.10" />
            <stop offset="60%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id="sweepGrad"
            gradientUnits="userSpaceOnUse"
            x1={600 + R * 0.7}
            y1="600"
            x2="600"
            y2={600 - R * 0.7}
          >
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.55" />
            <stop offset="55%" stopColor="var(--accent)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle cx="600" cy="600" r="560" fill="url(#vfade)" />
        {dots}
        <g fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3">
          <circle cx="600" cy="600" r="180" />
          <circle cx="600" cy="600" r="280" />
          <circle cx="600" cy="600" r="380" />
          <circle cx="600" cy="600" r="480" />
          <circle cx="600" cy="600" r="560" />
        </g>
        <g stroke="currentColor" strokeWidth="0.4" opacity="0.18">
          <line x1="40" y1="600" x2="1160" y2="600" />
          <line x1="600" y1="40" x2="600" y2="1160" />
        </g>
        <g ref={ref}>
          <path d={wedgePath} fill="url(#sweepGrad)" />
          <line
            x1="600"
            y1="600"
            x2={lead.x}
            y2={lead.y}
            stroke="var(--accent)"
            strokeWidth="1.4"
            opacity="0.95"
          />
        </g>
        <circle cx="600" cy="600" r="3" fill="var(--accent)" />
      </svg>
    </div>
  );
}

export function StatBlock({
  num,
  suffix,
  text,
  sub,
}: {
  num?: string;
  suffix?: string;
  text?: string;
  sub: string;
}) {
  const [shown, setShown] = useState<number | null>(num ? 0 : null);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (num == null) return;
    const node = ref.current;
    if (!node) return;
    const target = parseInt(num, 10);
    if (Number.isNaN(target)) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          const dur = 1100;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setShown(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [num]);

  return (
    <div ref={ref}>
      <div
        style={{
          fontFamily: 'var(--display)',
          fontWeight: 'var(--display-weight)' as unknown as number,
          fontStyle: 'var(--head-style)' as unknown as string,
          fontSize: text ? 48 : 64,
          lineHeight: 1,
          letterSpacing: '-0.03em',
          color: 'var(--ink)',
        }}
      >
        {text ? text : shown}
        {suffix && <span style={{ color: 'var(--accent)' }}>{suffix}</span>}
      </div>
      <div style={{ fontSize: 13.5, lineHeight: 1.4, color: 'var(--muted)', marginTop: 12, maxWidth: 220 }}>
        {sub}
      </div>
    </div>
  );
}

/** 4-dimension radar — Technology / People / Process / Data.
 *  Polygon morphs smoothly as `weights` changes. */
export function MaturityRadar({
  weights,
  code,
  total = 4,
}: {
  weights: [number, number, number, number];
  code: string;
  total?: number;
}) {
  const cx = 300;
  const cy = 300;
  const R = 200;
  const DIM = ['Technology', 'People', 'Process', 'Data'];
  const N = DIM.length;
  const angle = (i: number) => -Math.PI / 2 + (i / N) * Math.PI * 2;
  const point = (i: number, r: number): [number, number] => [
    cx + Math.cos(angle(i)) * r,
    cy + Math.sin(angle(i)) * r,
  ];
  const polyPts = DIM.map((_, i) => point(i, R * weights[i]));
  const polyPath = polyPts.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ') + ' Z';
  const rings = [0.25, 0.5, 0.75, 1].map((f) => {
    const pts = DIM.map((_, i) => point(i, R * f));
    return pts.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ') + ' Z';
  });

  return (
    <div
      style={{
        background: 'var(--paper-2)',
        border: '1px solid var(--line-strong)',
        borderRadius: 24,
        padding: 32,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24 }}>
        <div
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '0.14em',
            color: 'var(--muted)',
            textTransform: 'uppercase',
          }}
        >
          Four Dimensions
        </div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', color: 'var(--accent)' }}>
          {code} / 0{total}
        </div>
      </div>
      <svg viewBox="0 0 600 600" style={{ width: '100%', height: 'auto' }}>
        {rings.map((d, i) => (
          <path key={i} d={d} fill="none" stroke="var(--ink)" strokeOpacity={0.08} strokeWidth="0.7" />
        ))}
        {DIM.map((d, i) => {
          const p = point(i, R);
          return (
            <line
              key={d}
              x1={cx}
              y1={cy}
              x2={p[0]}
              y2={p[1]}
              stroke="var(--ink)"
              strokeOpacity={0.08}
              strokeWidth="0.7"
            />
          );
        })}
        <path
          d={polyPath}
          fill="var(--accent)"
          fillOpacity={0.18}
          stroke="var(--accent)"
          strokeWidth="1.5"
          style={{ transition: 'all 0.6s cubic-bezier(.4,.0,.2,1)' }}
        />
        {polyPts.map((p, i) => (
          <circle
            key={i}
            cx={p[0]}
            cy={p[1]}
            r="4"
            fill="var(--accent)"
            style={{ transition: 'cx 0.6s, cy 0.6s' }}
          />
        ))}
        {DIM.map((d, i) => {
          const p = point(i, R + 40);
          return (
            <text
              key={d}
              x={p[0]}
              y={p[1]}
              fontFamily="var(--mono)"
              fontSize="12"
              fill="var(--ink)"
              opacity="0.75"
              textAnchor="middle"
              dominantBaseline="middle"
              style={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              {d.toUpperCase()}
            </text>
          );
        })}
        <circle cx={cx} cy={cy} r="3" fill="var(--ink)" />
      </svg>
    </div>
  );
}

/** Generic detail-page hero: small kicker + display headline + lede + meta.
 *  Used by service/industry/insight/framework detail pages so they share chrome. */
export function DetailHeader({
  category,
  title,
  italic,
  lede,
  meta,
  code,
}: {
  category: string;
  title: ReactNode;
  italic?: ReactNode;
  lede?: ReactNode;
  meta?: string[];
  code?: string;
}) {
  return (
    <section
      style={{
        padding: '160px 0 100px',
        background: 'var(--paper)',
        position: 'relative',
        borderBottom: '1px solid var(--line)',
        overflow: 'hidden',
      }}
    >
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.5, pointerEvents: 'none' }}
        aria-hidden
      >
        <defs>
          <pattern id="dh-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="var(--ink)" strokeWidth="0.4" opacity="0.06" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dh-grid)" />
      </svg>
      <Container>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: 32,
          }}
        >
          <Eyebrow>
            <KickerLabel kicker={category} />
          </Eyebrow>
          {code && (
            <span
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                letterSpacing: '0.18em',
                color: 'var(--muted)',
              }}
            >
              {code}
            </span>
          )}
        </div>
        <DisplayHead size="clamp(44px, 6vw, 96px)" style={{ lineHeight: 1.06, maxWidth: 1100 }}>
          {title}
          {italic && (
            <>
              {' '}
              <GoldItalic>{italic}</GoldItalic>
            </>
          )}
        </DisplayHead>
        {lede && (
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.55,
              color: 'var(--ink-2)',
              maxWidth: 760,
              marginTop: 36,
            }}
          >
            {lede}
          </p>
        )}
        {meta && meta.length > 0 && (
          <div
            style={{
              marginTop: 28,
              fontFamily: 'var(--mono)',
              fontSize: 11,
              letterSpacing: '0.16em',
              color: 'var(--muted)',
              textTransform: 'uppercase',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px 22px',
            }}
          >
            {meta.map((m, i) => (
              <span key={i}>{m}</span>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

/** Section header used by Section() */
function SectionHeader({ eyebrow, title, italic }: { eyebrow?: string; title: ReactNode; italic?: ReactNode }) {
  return (
    <div style={{ marginBottom: 64 }}>
      {eyebrow && <Eyebrow style={{ marginBottom: 24 }}>{eyebrow}</Eyebrow>}
      <DisplayHead size="clamp(36px, 4.6vw, 72px)" style={{ maxWidth: 1100 }}>
        {title} {italic && <GoldItalic>{italic}</GoldItalic>}
      </DisplayHead>
    </div>
  );
}

export function Section({
  eyebrow,
  title,
  italic,
  children,
  dark,
  paper2,
  style,
}: {
  eyebrow?: string;
  title?: ReactNode;
  italic?: ReactNode;
  children: ReactNode;
  dark?: boolean;
  paper2?: boolean;
  style?: Style;
}) {
  return (
    <section
      style={{
        padding: '120px 0',
        background: dark ? 'var(--ink)' : paper2 ? 'var(--paper-2)' : 'var(--paper)',
        color: dark ? 'var(--paper)' : 'var(--ink)',
        borderTop: '1px solid var(--line)',
        ...style,
      }}
    >
      <Container>
        {(eyebrow || title) && <SectionHeader eyebrow={eyebrow} title={title} italic={italic} />}
        {children}
      </Container>
    </section>
  );
}

export function FeatureGrid({
  items,
  columns = 3,
}: {
  items: { num?: string; title: string; description?: string }[];
  columns?: number;
}) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: 1,
        background: 'var(--line-strong)',
        border: '1px solid var(--line-strong)',
      }}
    >
      {items.map((it, i) => (
        <div
          key={it.title}
          style={{
            background: 'var(--paper)',
            padding: 36,
            minHeight: 220,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              letterSpacing: '0.18em',
              color: 'var(--accent)',
            }}
          >
            {it.num ?? `/ ${String(i + 1).padStart(2, '0')}`}
          </div>
          <h3
            style={{
              fontFamily: 'var(--display)',
              fontWeight: 'var(--display-weight)' as unknown as number,
              fontStyle: 'var(--head-style)' as unknown as string,
              fontSize: 26,
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
              margin: 0,
            }}
          >
            {it.title}
          </h3>
          {it.description && (
            <p style={{ fontSize: 14.5, lineHeight: 1.55, color: 'var(--muted)', margin: 0 }}>{it.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export function BulletList({ items, accent = false }: { items: string[]; accent?: boolean }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
      {items.map((f) => (
        <li
          key={f}
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 14,
            fontSize: 15.5,
            color: 'var(--ink)',
          }}
        >
          <span
            style={{
              width: 20,
              height: 1,
              background: accent ? 'var(--accent)' : 'var(--ink)',
              opacity: accent ? 1 : 0.5,
              flexShrink: 0,
              marginTop: 8,
            }}
          />
          <span>{f}</span>
        </li>
      ))}
    </ul>
  );
}

export function MonoList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
      {items.map((f) => (
        <li
          key={f}
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 11.5,
            color: 'var(--muted)',
            letterSpacing: '0.04em',
            lineHeight: 1.55,
          }}
        >
          <span style={{ color: 'var(--accent)', marginRight: 8 }}>—</span>
          {f}
        </li>
      ))}
    </ul>
  );
}
