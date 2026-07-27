import { motion } from 'framer-motion'
import { Badge } from '../components/core/Badge'
import { Card } from '../components/layout/Card'
import { SectionHeading } from '../components/layout/SectionHeading'
import { Avatar } from '../components/layout/Avatar'

const SECRETARIAT = [
  ['A. Khan', 'Secretary General', 'Oversees the whole Opine MUN delegation and academic direction.'],
  ['R. Silva', 'Deputy Secretary General', 'Runs council operations and delegate experience.'],
  ['M. Patel', 'Director-General', 'Leads logistics, venue, and conference-day execution.'],
]

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
}

export default function Team() {
  return (
    <>
      <section style={{ padding: '80px 40px 20px', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <SectionHeading eyebrow="Who Runs Opine" title="Core Secretariat" />
      </section>

      <section style={{ padding: '32px 40px 40px', maxWidth: 'var(--container-max)', margin: '0 auto', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        {SECRETARIAT.map((p) => (
          <motion.div key={p[0]} {...fadeUp}>
            <Card padding="28px">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px', width: '260px' }}>
                <Avatar
                  initials={p[0]
                    .split(' ')
                    .map((w) => w[0])
                    .join('')}
                  size={72}
                />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '17px' }}>{p[0]}</div>
                  <Badge tone="mun">{p[1]}</Badge>
                </div>
                <p style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>{p[2]}</p>
                <div style={{ display: 'flex', gap: '12px', fontSize: '15px', fontWeight: 700, color: 'var(--brand-primary)' }}>
                  <a href="#">Instagram</a>
                  <a href="#">LinkedIn</a>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </section>

      <motion.section {...fadeUp} style={{ padding: '0 40px 100px', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <Card variant="default" padding="32px">
          <p style={{ fontSize: 'var(--text-body-l)', color: 'var(--text-secondary)' }}>
            Alongside the Core Secretariat, Opine is run by a <b>28-person</b> extended secretariat spanning outreach,
            design, delegate affairs, and research — the people who make every session run.
          </p>
        </Card>
      </motion.section>
    </>
  )
}
