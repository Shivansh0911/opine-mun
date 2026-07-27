import { Link } from 'react-router-dom'

const EXPLORE_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Team', href: '/team' },
  { label: 'Initiatives', href: '/initiatives' },
  { label: 'Research Blogs', href: '/blog' },
  { label: 'Previous Editions', href: '/editions' },
]

const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/opinehouse' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/the-opine-organisation' },
  { label: 'Email', href: 'mailto:theopineorganisation@gmail.com' },
]

const eyebrow: React.CSSProperties = {
  fontSize: 'var(--text-label)',
  fontWeight: 700,
  letterSpacing: 'var(--ls-eyebrow)',
  textTransform: 'uppercase',
  color: 'var(--gold-300)',
}

const dim = (o: number) => ({
  fontSize: '15px',
  color: 'var(--cream-50)',
  opacity: o,
  textDecoration: 'none',
  transition: 'opacity var(--dur-fast) var(--ease-out)',
  width: 'fit-content',
})

export function Footer() {
  return (
    <footer style={{ background: 'var(--ink-950)', color: 'var(--cream-50)', fontFamily: 'var(--font-body)', borderTop: '6px solid var(--gold-500)', overflow: 'hidden' }}>
      {/* CTA band */}
      <div
        style={{
          position: 'relative',
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: '72px 48px 52px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '32px',
        }}
      >
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: '-40px',
            left: '10%',
            width: '520px',
            height: '520px',
            background: 'radial-gradient(circle, rgba(198,134,45,0.28) 0%, rgba(198,134,45,0) 68%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '640px' }}>
          <span style={eyebrow}>05 &amp; 06 September 2026 · Opine MUN</span>
          <h2 style={{ fontSize: 'var(--text-display-l)', color: 'var(--cream-50)', lineHeight: 0.95 }}>
            An opinion needs<br />
            <span style={{ color: 'var(--gold-500)' }}>no permission.</span>
          </h2>
          <p style={{ fontSize: 'var(--text-body-l)', opacity: 0.82, maxWidth: '440px' }}>
            Claim your seat at the table. Debate, negotiate, and lead where it counts.
          </p>
        </div>
        <Link
          to="/register"
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'var(--accent-mun)',
            color: 'var(--ink-950)',
            padding: '16px 30px',
            borderRadius: 'var(--radius-md)',
            border: '3px solid var(--cream-50)',
            boxShadow: '6px 6px 0 var(--gold-500)',
            fontSize: '15px',
            fontWeight: 700,
            letterSpacing: 'var(--ls-label)',
            textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translate(-2px,-2px)'
            e.currentTarget.style.boxShadow = '8px 8px 0 var(--gold-500)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translate(0,0)'
            e.currentTarget.style.boxShadow = '6px 6px 0 var(--gold-500)'
          }}
        >
          Register Now →
        </Link>
      </div>

      <div style={{ height: '1px', background: 'rgba(246,240,230,0.15)', maxWidth: 'var(--container-max)', margin: '0 auto' }} />

      {/* Columns */}
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: '48px',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '48px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', maxWidth: '340px' }}>
          <img
            src="/transparent_logo.png"
            alt="The Opine Organisation"
            style={{
              width: 'clamp(120px, 16vw, 198px)',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '34px', letterSpacing: '.02em', textTransform: 'uppercase', color: 'var(--cream-50)', lineHeight: 1 }}>
            Opine
          </span>
          <p style={{ fontSize: '15px', opacity: 0.75, lineHeight: 1.6 }}>
            A youth-led home for diplomacy, dialogue and leadership — anchored by Opine MUN.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <span style={eyebrow}>Explore</span>
          {EXPLORE_LINKS.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              style={dim(0.8)}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <span style={eyebrow}>Connect</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('#') ? undefined : '_blank'}
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '20px',
                  minWidth: '180px',
                  padding: '11px 16px',
                  borderRadius: 'var(--radius-md)',
                  border: '2px solid rgba(246,240,230,0.35)',
                  color: 'var(--cream-50)',
                  fontSize: '14px',
                  fontWeight: 700,
                  letterSpacing: 'var(--ls-label)',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--accent-mun)'
                  e.currentTarget.style.color = 'var(--ink-950)'
                  e.currentTarget.style.borderColor = 'var(--accent-mun)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = 'var(--cream-50)'
                  e.currentTarget.style.borderColor = 'rgba(246,240,230,0.35)'
                }}
              >
                {s.label}
                <span aria-hidden style={{ opacity: 0.6 }}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Oversized wordmark flourish */}
      <div
        aria-hidden
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          textTransform: 'uppercase',
          fontSize: 'clamp(4rem, 20vw, 18rem)',
          lineHeight: 0.8,
          letterSpacing: '-0.02em',
          color: 'transparent',
          WebkitTextStroke: '2px rgba(246,240,230,0.14)',
          textAlign: 'center',
          padding: '0 20px',
          userSelect: 'none',
          marginBottom: '-0.12em',
        }}
      >
        Opine
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(246,240,230,0.15)' }}>
        <div
          style={{
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '20px 48px',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '13px',
            opacity: 0.6,
          }}
        >
          <span>© {new Date().getFullYear()} The Opine Organisation</span>
          <span>Built by the Opine Web Team</span>
        </div>
      </div>
    </footer>
  )
}
