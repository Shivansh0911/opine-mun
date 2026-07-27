import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '../components/core/Badge'
import { Card } from '../components/layout/Card'
import { Button } from '../components/core/Button'
import { SectionHeading } from '../components/layout/SectionHeading'

const COUNCILS = [
  {
    abbr: 'WHO',
    name: 'World Health Organization',
    agenda: 'Safeguarding Adolescent Mental Health Amidst Evolving Social, Educational and Digital Environments.',
    icon: '/icons/who.svg',
  },
  {
    abbr: 'SOCHUM',
    name: 'Social, Humanitarian & Cultural Committee',
    agenda: 'Addressing Statelessness, Forced Displacement and the Erosion of Identity in the 21st Century.',
    icon: '/icons/sochum.svg',
  },
  {
    abbr: 'UNEP',
    name: 'UN Environment Programme',
    agenda: 'Advancing Climate Justice in Addressing the Disproportionate Impacts of Climate Change.',
    icon: '/icons/unep.svg',
  },
  {
    abbr: 'IP',
    name: 'International Press',
    agenda: 'The Press and the International Order: Reporting on Power, Policy and Diplomacy.',
    icon: '/icons/ip.svg',
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
}

const COUNCIL_CSS = `
.council-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
.council-tile {
  position: relative;
  overflow: hidden;
  min-height: 260px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  padding: 36px 40px;
  background: var(--surface-card);
  border: var(--border-brutal);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-brutal);
  cursor: pointer;
  transition: transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out);
}
.council-tile:hover,
.council-tile:focus-visible {
  transform: translate(-3px, -3px);
  box-shadow: 9px 9px 0 var(--ink-950);
  outline: none;
}
.council-icon {
  flex-shrink: 0;
  width: clamp(120px, 16vw, 180px);
  height: clamp(120px, 16vw, 180px);
  object-fit: contain;
  transition: transform var(--dur-base) var(--ease-out);
}
.council-face {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  gap: 10px;
}
.council-tile:hover .council-icon,
.council-tile:focus-visible .council-icon {
  transform: scale(1.08) rotate(-3deg);
}
.council-abbr {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(2.75rem, 5vw, 4.25rem);
  line-height: 0.9;
  color: var(--ink-950);
  text-transform: uppercase;
  letter-spacing: 0.01em;
}
.council-name {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: 600;
  letter-spacing: var(--ls-label);
  text-transform: uppercase;
  color: var(--text-muted);
  max-width: 320px;
}
.council-agenda {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 12px;
  padding: 32px;
  text-align: right;
  background: var(--ink-950);
  color: var(--cream-50);
  opacity: 0;
  transform: translateY(16px);
  transition: opacity var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out);
  pointer-events: none;
}
.council-tile:hover .council-agenda,
.council-tile:focus-visible .council-agenda,
.council-tile.is-open .council-agenda {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
.council-agenda-label {
  font-family: var(--font-body);
  font-size: var(--text-label);
  font-weight: 700;
  letter-spacing: var(--ls-eyebrow);
  text-transform: uppercase;
  color: var(--gold-300);
}
.council-agenda-abbr {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: var(--text-display-m);
  line-height: 0.95;
  text-transform: uppercase;
  color: var(--cream-50);
}
.council-agenda-text {
  font-size: var(--text-body-l);
  line-height: 1.4;
  color: var(--cream-50);
}
@media (max-width: 720px) {
  .council-grid { grid-template-columns: 1fr; gap: 18px; }
  .council-tile {
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    min-height: auto;
    gap: 18px;
    padding: 28px 24px;
  }
  .council-icon {
    width: clamp(88px, 26vw, 120px);
    height: clamp(88px, 26vw, 120px);
  }
  .council-face {
    align-items: center;
    text-align: center;
  }
  .council-abbr { font-size: clamp(2.25rem, 11vw, 3rem); }
  .council-name { max-width: none; }
  .council-agenda {
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 24px;
  }
  .council-agenda-text { font-size: var(--text-body); }
}
@media (prefers-reduced-motion: reduce) {
  .council-tile, .council-icon, .council-agenda { transition: none; }
}
`

export default function Initiatives() {
  const [openAbbr, setOpenAbbr] = useState<string | null>(null)
  const toggle = (abbr: string) => setOpenAbbr((cur) => (cur === abbr ? null : abbr))

  return (
    <>
      <style>{COUNCIL_CSS}</style>

      {/* Hero */}
      <section style={{ padding: '80px 40px', background: 'var(--surface-mun)', borderBottom: '6px solid var(--gold-500)' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          <Badge tone="dark">Opine MUN · 2026</Badge>
          <h1 style={{ fontSize: 'var(--text-display-l)', color: 'var(--ink-950)' }}>OPINE MUN</h1>
          <p style={{ fontSize: 'var(--text-body-l)', color: 'var(--text-secondary)', maxWidth: '640px' }}>
            Four councils. Four urgent agendas. One weekend of diplomacy, dialogue, and leadership.
          </p>
          <Button variant="primary" size="lg" to="/register">
            Register Now
          </Button>
        </motion.div>
      </section>

      {/* Main theme */}
      <motion.section {...fadeUp} style={{ padding: '80px 40px 40px', maxWidth: 'var(--container-max)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-label)', fontWeight: 700, letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'var(--brown-700)' }}>
          Main Theme
        </span>
        <h2 style={{ fontSize: 'var(--text-display-m)', color: 'var(--text-primary)', lineHeight: 1.08, maxWidth: '960px' }}>
          The Right to Thrive: Safeguarding Identity, Well-being and Equity in an Evolving World.
        </h2>
      </motion.section>

      {/* Councils — 2x2, agenda on hover */}
      <section style={{ padding: '40px 40px 60px', maxWidth: 'var(--container-max)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <SectionHeading eyebrow="Councils & Agendas" title="Tap A Council To Reveal Its Agenda" />
        <div className="council-grid">
          {COUNCILS.map((c) => (
            <motion.div key={c.abbr} {...fadeUp}>
              <div
                className={openAbbr === c.abbr ? 'council-tile is-open' : 'council-tile'}
                tabIndex={0}
                role="button"
                aria-expanded={openAbbr === c.abbr}
                aria-label={`${c.abbr} — ${c.agenda}`}
                onClick={() => toggle(c.abbr)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    toggle(c.abbr)
                  }
                }}
              >
                <img className="council-icon" src={c.icon} alt="" aria-hidden="true" />
                <div className="council-face">
                  <span className="council-abbr">{c.abbr}</span>
                  <span className="council-name">{c.name}</span>
                </div>
                <div className="council-agenda">
                  <span className="council-agenda-label">Agenda</span>
                  <span className="council-agenda-abbr">{c.abbr}</span>
                  <p className="council-agenda-text">{c.agenda}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 40px 100px', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <Card variant="mun" padding="36px">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
            <div style={{ maxWidth: '560px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <h2 style={{ fontSize: 'var(--text-display-m)', color: 'var(--ink-950)', lineHeight: 1 }}>Pick Your Council</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-body-l)' }}>
                Choose your committee, prepare your position, and come ready to shape the debate.
              </p>
            </div>
            <Button variant="primary" size="lg" to="/register">
              Register Now
            </Button>
          </div>
        </Card>
      </section>
    </>
  )
}
