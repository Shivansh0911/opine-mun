import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Conference', href: '/conference' },
  { label: 'Team', href: '/team' },
  { label: 'Initiatives', href: '/initiatives' },
  { label: 'Research Blogs', href: '/blog' },
  { label: 'Previous Editions', href: '/editions' },
  { label: 'Contact', href: '/contact' },
]

// Below this width the inline links collapse into a hamburger menu.
const BREAKPOINT = 1100

const NAV_CSS = `
.opine-nav {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 32px;
  background: color-mix(in srgb, var(--surface-page) 92%, transparent);
  backdrop-filter: saturate(140%) blur(10px);
  -webkit-backdrop-filter: saturate(140%) blur(10px);
  border-bottom: var(--border-brutal-thick);
  font-family: var(--font-body);
  flex-wrap: nowrap;
}
.opine-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  text-decoration: none;
}
.opine-brand-logo {
  height: 58px;
  width: 58px;
  object-fit: contain;
  transition: transform var(--dur-base) var(--ease-out);
}
.opine-brand:hover .opine-brand-logo {
  transform: rotate(-8deg) scale(1.08);
}
.opine-brand-word {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 22px;
  letter-spacing: .01em;
  color: var(--ink-950);
  text-transform: uppercase;
}
.opine-links {
  display: flex;
  gap: 26px;
  align-items: center;
}
.opine-link {
  position: relative;
  text-decoration: none;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: var(--ls-label);
  text-transform: uppercase;
  white-space: nowrap;
  color: var(--text-primary);
  padding: 4px 0;
  transition: color var(--dur-fast) var(--ease-out);
}
.opine-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  height: 3px;
  width: 100%;
  background: var(--accent-mun);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--dur-base) var(--ease-out);
}
.opine-link:hover { color: var(--accent-mun-hover); }
.opine-link:hover::after,
.opine-link:focus-visible::after { transform: scaleX(1); }
.opine-link.is-active { color: var(--accent-mun-hover); }
.opine-link.is-active::after {
  transform: scaleX(1);
  transform-origin: left;
  background: var(--accent-mun-hover);
}
.opine-register {
  background: var(--accent-mun);
  color: var(--ink-950);
  padding: 11px 22px;
  border-radius: var(--radius-md);
  border: 3px solid var(--ink-950);
  box-shadow: var(--shadow-brutal-sm);
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: var(--ls-label);
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
  transition: transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out);
}
.opine-register:hover {
  transform: translate(-2px, -2px);
  box-shadow: var(--shadow-brutal);
  background: var(--gold-300);
  color: var(--ink-950);
}
.opine-register:active {
  transform: translate(2px, 2px);
  box-shadow: var(--shadow-brutal-press);
}
.opine-link:focus-visible,
.opine-register:focus-visible,
.opine-brand:focus-visible,
.opine-burger:focus-visible,
.opine-mlink:focus-visible {
  outline: 3px solid var(--focus-ring);
  outline-offset: 3px;
}

/* Hamburger */
.opine-burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 48px;
  height: 44px;
  flex-shrink: 0;
  padding: 0 11px;
  background: var(--surface-card);
  border: var(--border-brutal);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-brutal-sm);
  cursor: pointer;
  transition: transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out);
}
.opine-burger:hover { transform: translate(-1px,-1px); box-shadow: var(--shadow-brutal); }
.opine-burger:active { transform: translate(2px,2px); box-shadow: var(--shadow-brutal-press); }
.opine-burger span {
  display: block;
  height: 3px;
  width: 100%;
  background: var(--ink-950);
  border-radius: 2px;
  transition: transform var(--dur-base) var(--ease-out), opacity var(--dur-fast) var(--ease-out);
}
.opine-burger.is-open span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
.opine-burger.is-open span:nth-child(2) { opacity: 0; }
.opine-burger.is-open span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

/* Mobile dropdown panel */
.opine-mobile {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  flex-direction: column;
  padding: 12px 32px 24px;
  background: var(--surface-page);
  border-bottom: var(--border-brutal-thick);
  box-shadow: var(--shadow-brutal);
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  transition: max-height var(--dur-base) var(--ease-out), opacity var(--dur-base) var(--ease-out);
}
.opine-mobile.is-open {
  max-height: 80vh;
  opacity: 1;
  pointer-events: auto;
}
.opine-mlink {
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: var(--ls-label);
  text-transform: uppercase;
  color: var(--text-primary);
  padding: 14px 4px;
  border-bottom: 1px solid var(--border-subtle);
  transition: color var(--dur-fast) var(--ease-out), padding-left var(--dur-fast) var(--ease-out);
}
.opine-mlink:hover { color: var(--accent-mun-hover); padding-left: 12px; }
.opine-mlink.is-active { color: var(--accent-mun-hover); }
.opine-mobile .opine-register {
  display: block;
  margin-top: 18px;
  text-align: center;
  padding: 15px 22px;
  font-size: 15px;
}

@media (max-width: ${BREAKPOINT}px) {
  .opine-links { display: none; }
  .opine-burger { display: flex; }
  .opine-mobile { display: flex; }
}
@media (prefers-reduced-motion: reduce) {
  .opine-link, .opine-link::after, .opine-register,
  .opine-brand-logo, .opine-burger, .opine-burger span, .opine-mobile, .opine-mlink {
    transition: none;
  }
}
`

export function NavBar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  // Close the menu on navigation.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <style>{NAV_CSS}</style>
      <nav className="opine-nav">
        <Link to="/" className="opine-brand">
          <img src="/transparent_logo.png" className="opine-brand-logo" alt="The Opine Organisation" />
          <span className="opine-brand-word">Opine</span>
        </Link>

        {/* Desktop links */}
        <div className="opine-links">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={pathname === l.href ? 'opine-link is-active' : 'opine-link'}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/register" className="opine-register">
            Register
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className={open ? 'opine-burger is-open' : 'opine-burger'}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="opine-mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Mobile dropdown */}
        <div id="opine-mobile-menu" className={open ? 'opine-mobile is-open' : 'opine-mobile'}>
          {LINKS.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={pathname === l.href ? 'opine-mlink is-active' : 'opine-mlink'}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/register" className="opine-register">
            Register
          </Link>
        </div>
      </nav>
    </>
  )
}
