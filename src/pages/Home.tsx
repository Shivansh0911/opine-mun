import { motion } from 'framer-motion'
import { Button } from '../components/core/Button'
import { Badge } from '../components/core/Badge'
import { Card } from '../components/layout/Card'
import { SectionHeading } from '../components/layout/SectionHeading'

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
} as const

export default function Home() {
  return (
    <>
      <section
        style={{
          position: 'relative',
          minHeight: '640px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '96px 40px',
          background: 'var(--brown-700)',
          borderBottom: '6px solid var(--gold-500)',
          overflow: 'hidden',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'relative',
            maxWidth: '900px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '28px',
          }}
        >
          <Badge tone="mun">The Opine Organisation</Badge>
          <h1 style={{ color: 'var(--cream-50)', fontSize: 'var(--text-display-xl)', fontWeight: 900 }}>
            AN OPINION NEEDS
            <br />
            <span
              style={{
                display: 'inline-block',
                marginTop: '8px',
                padding: '0 20px',
                background: 'var(--gold-500)',
                color: 'var(--ink-950)',
                border: '4px solid var(--ink-950)',
                boxShadow: '8px 8px 0 var(--ink-950)',
              }}
            >
              NO PERMISSION.
            </span>
          </h1>
          <p
            style={{
              color: 'var(--cream-50)',
              opacity: 0.9,
              fontSize: 'var(--text-body-l)',
              maxWidth: '560px',
            }}
          >
            A student organisation building platforms for diplomacy, dialogue and leadership — anchored by our flagship
            conference, Opine MUN.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button variant="mun" size="lg" to="/initiatives">
              Explore Opine MUN
            </Button>
            <Button variant="outline" size="lg" to="/register">
              Register Now
            </Button>
          </div>
        </motion.div>
      </section>

      <motion.section
        {...fadeUp}
        style={{ padding: '96px 40px', maxWidth: 'var(--container-max)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '28px' }}
      >
        <SectionHeading eyebrow="What is Opine?" title="A Youth-Led Home for Big Ideas" />
        <p style={{ fontSize: 'var(--text-body-l)', maxWidth: '760px', color: 'var(--text-secondary)' }}>
          Opine is a <b>youth-led</b> initiative committed to fostering thoughtful dialogue and inspiring informed{' '}
          <b>perspectives on the issues</b> that shape our world. We run programs, publish research, and convene students
          who believe an opinion needs no permission.
        </p>
      </motion.section>

      <motion.section {...fadeUp} style={{ padding: '0 40px 96px', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <Card variant="mun" padding="40px">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '560px' }}>
              <Badge tone="mun">Flagship Initiative</Badge>
              <h2 style={{ fontSize: 'var(--text-display-m)', color: 'var(--ink-950)' }}>Opine MUN</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-body-l)' }}>
                Opine Model United Nations is a platform where <b>diplomacy, dialogue, and leadership</b> converge — six
                councils, real agendas, one weekend.
              </p>
            </div>
            <Button variant="primary" size="lg" to="/initiatives">
              View Councils &amp; Agendas
            </Button>
          </div>
        </Card>
      </motion.section>
    </>
  )
}
