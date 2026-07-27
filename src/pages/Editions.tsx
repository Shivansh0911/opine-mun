import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../components/core/Button'
import { SectionHeading } from '../components/layout/SectionHeading'

// On mobile, only the first N blocks show until "Load More". Desktop always shows all.
const INITIAL_VISIBLE = 3

const ALBUMS = [
  { n: 1 },
  { n: 2 },
  { n: 3 },
  { n: 4 },
  { n: 5 },
  { n: 6 },
]

const SKINS = [
  { background: 'var(--accent-mun)', color: 'var(--ink-950)' },
  { background: 'var(--cream-50)', color: 'var(--ink-950)' },
  { background: 'var(--brown-700)', color: 'var(--cream-50)' },
]

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
}

const CSS = `
.ed-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.ed-cell { display: flex; }
.ed-more { display: none; }
@media (max-width: 720px) {
  .ed-grid { grid-template-columns: 1fr; }
  .ed-grid:not(.is-expanded) .ed-extra { display: none; }
  .ed-more { display: flex; justify-content: center; }
}
`

export default function Editions() {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <style>{CSS}</style>
      <section style={{ padding: '80px 40px 20px', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <SectionHeading eyebrow="Recap" title="Previous Editions" />
        <p style={{ marginTop: '12px', color: 'var(--text-muted)', fontSize: '15px' }}>
          Photo albums from past Opine MUN editions — galleries coming soon.
        </p>
      </section>

      <section style={{ padding: '32px 40px 100px', maxWidth: 'var(--container-max)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div className={expanded ? 'ed-grid is-expanded' : 'ed-grid'}>
          {ALBUMS.map((a, i) => {
            const skin = SKINS[i % SKINS.length]
            return (
              <div key={a.n} className={i >= INITIAL_VISIBLE ? 'ed-cell ed-extra' : 'ed-cell'}>
                <motion.a
                  href="#"
                  {...fadeUp}
                  style={{
                    width: '100%',
                    aspectRatio: '4/3',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '24px',
                    textDecoration: 'none',
                    borderRadius: 'var(--radius-lg)',
                    border: '3px solid var(--ink-950)',
                    boxShadow: 'var(--shadow-brutal)',
                    transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
                    ...skin,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translate(-3px,-3px)'
                    e.currentTarget.style.boxShadow = '9px 9px 0 var(--ink-950)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translate(0,0)'
                    e.currentTarget.style.boxShadow = 'var(--shadow-brutal)'
                  }}
                >
                  <span
                    style={{
                      fontSize: 'var(--text-label)',
                      fontWeight: 700,
                      letterSpacing: 'var(--ls-eyebrow)',
                      textTransform: 'uppercase',
                      opacity: 0.7,
                    }}
                  >
                    Opine MUN
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      fontSize: 'var(--text-display-m)',
                      textTransform: 'uppercase',
                      lineHeight: 0.95,
                    }}
                  >
                    Album {a.n}
                  </span>
                </motion.a>
              </div>
            )
          })}
        </div>
        {!expanded && (
          <div className="ed-more">
            <Button variant="outline" size="lg" onClick={() => setExpanded(true)}>
              Load More
            </Button>
          </div>
        )}
      </section>
    </>
  )
}
