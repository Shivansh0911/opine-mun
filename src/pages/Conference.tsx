import { motion } from 'framer-motion'
import { Badge } from '../components/core/Badge'
import { Button } from '../components/core/Button'
import { Card } from '../components/layout/Card'
import { SectionHeading } from '../components/layout/SectionHeading'

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
}

const skills = [
  ['Critical Thinking', 'Interrogate evidence, weigh trade-offs, and defend a position under pressure.'],
  ['Diplomacy', 'Find common ground between rival interests without surrendering your own.'],
  ['Public Speaking', 'Command the floor — open, rebut, and close with conviction.'],
  ['Policy-Making', 'Draft resolutions that turn debate into workable, funded action.'],
  ['Leadership', 'Build blocs, steer negotiations, and carry a room toward consensus.'],
]

const agendas = [
  {
    pillar: 'Health',
    body: 'Public health crises, healthcare access, and the systems that keep communities well.',
  },
  {
    pillar: 'Environment',
    body: 'Climate change, sustainable development, and the shared duty to protect our planet.',
  },
  {
    pillar: 'Humanity',
    body: 'Human rights, technological ethics, equality, and the values that connect us across borders.',
  },
]

export default function Conference() {
  return (
    <>
      {/* Hero — poster */}
      <section
        style={{
          position: 'relative',
          minHeight: '620px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
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
            width: '100%',
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '28px',
          }}
        >
          <Badge tone="mun">Opine Model United Nations · 2026</Badge>
          <h1 style={{ color: 'var(--cream-50)', fontSize: 'var(--text-display-xl)', fontWeight: 900, letterSpacing: '0.005em' }}>
            WHERE DIPLOMACY
            <br />
            MEETS{' '}
            <span
              style={{
                display: 'inline-block',
                padding: '0 18px',
                background: 'var(--gold-500)',
                color: 'var(--ink-950)',
                border: '4px solid var(--ink-950)',
                boxShadow: '8px 8px 0 var(--ink-950)',
              }}
            >
              DIALOGUE
            </span>
          </h1>
          <p style={{ color: 'var(--cream-50)', opacity: 0.9, fontSize: 'var(--text-body-l)', maxWidth: '620px' }}>
            A conference where every voice has the power to make an impact. Step into the roles of global leaders,
            debate the world's most pressing challenges, and lead with purpose.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <div
              style={{
                display: 'inline-flex',
                flexDirection: 'column',
                padding: '12px 22px',
                background: 'var(--cream-50)',
                border: '4px solid var(--ink-950)',
                boxShadow: '6px 6px 0 var(--ink-950)',
              }}
            >
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-label)', fontWeight: 700, letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'var(--brown-700)' }}>
                Save the date
              </span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-m)', fontWeight: 900, color: 'var(--ink-950)', lineHeight: 1 }}>
                05–06 SEPT 2026
              </span>
            </div>
            <Button variant="mun" size="lg" to="/register">
              Register Now
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Lead intro */}
      <motion.section
        {...fadeUp}
        style={{ padding: '96px 40px 40px', maxWidth: 'var(--container-max)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '28px' }}
      >
        <SectionHeading eyebrow="About the Conference" title="An Opinion Needs No Permission" />
        <p style={{ fontSize: 'var(--text-subheading)', lineHeight: 1.5, color: 'var(--text-primary)', maxWidth: '820px' }}>
          Welcome to <b>Opine Model United Nations</b> — organized by Opine, a youth-led organization bringing together
          young minds from diverse backgrounds to <b>debate, negotiate, and collaborate</b> on the challenges that
          define our time.
        </p>
        <p style={{ fontSize: 'var(--text-body-l)', color: 'var(--text-secondary)', maxWidth: '820px' }}>
          At Opine MUN, delegates represent nations and stakeholders while engaging in thought-provoking discussion.
          More than a conference, it is a platform for passionate young leaders to exchange ideas, challenge
          perspectives, and build connections that transcend borders.
        </p>
      </motion.section>

      {/* Skills */}
      <motion.section
        {...fadeUp}
        style={{ padding: '56px 40px', maxWidth: 'var(--container-max)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}
      >
        <SectionHeading eyebrow="What You'll Build" title="Skills That Outlast The Weekend" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {skills.map(([name, body]) => (
            <Card key={name} padding="26px">
              <h3 style={{ fontSize: 'var(--text-subheading)', color: 'var(--ink-950)', marginBottom: '10px' }}>{name}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-body)' }}>{body}</p>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Agendas by pillar */}
      <motion.section
        {...fadeUp}
        style={{ padding: '56px 40px', maxWidth: 'var(--container-max)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}
      >
        <SectionHeading eyebrow="The Agendas" title="Three Pillars, One Weekend Of Debate" />
        <p style={{ fontSize: 'var(--text-body-l)', color: 'var(--text-secondary)', maxWidth: '820px' }}>
          Every agenda is inspired by Opine's three core pillars — contemporary issues that demand innovative solutions
          and collective action.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {agendas.map((a) => (
            <Card key={a.pillar} variant="mun" padding="28px">
              <Badge tone="light">{a.pillar}</Badge>
              <p style={{ marginTop: '16px', color: 'var(--text-secondary)', fontSize: 'var(--text-body-l)' }}>{a.body}</p>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Pull quote */}
      <motion.section {...fadeUp} style={{ padding: '56px 40px', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <Card variant="dark" padding="48px">
          <p style={{ color: 'var(--cream-50)', fontSize: 'var(--text-display-m)', fontFamily: 'var(--font-display)', textTransform: 'uppercase', lineHeight: 1.05, fontWeight: 900 }}>
            Speak with confidence.
            <br />
            Negotiate with integrity.
            <br />
            <span style={{ color: 'var(--gold-300)' }}>Lead with purpose.</span>
          </p>
          <p style={{ marginTop: '24px', color: 'var(--cream-50)', opacity: 0.85, fontSize: 'var(--text-body-l)', maxWidth: '640px' }}>
            Whether you're a first-time delegate or an experienced MUNer, there's a seat at the table — and an opinion
            that needs no permission.
          </p>
        </Card>
      </motion.section>

      {/* Final CTA */}
      <motion.section {...fadeUp} style={{ padding: '40px 40px 100px', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <Card variant="mun" padding="44px">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '28px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '520px' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-label)', fontWeight: 700, letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'var(--brown-700)' }}>
                05 &amp; 06 September 2026
              </span>
              <h2 style={{ fontSize: 'var(--text-display-m)', color: 'var(--ink-950)', lineHeight: 1 }}>
                Your Seat At The Table Awaits
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-body-l)' }}>
                Registration is open. Claim your council, prepare your position, and come ready to shape the future.
              </p>
            </div>
            <Button variant="primary" size="lg" to="/register">
              Register Now
            </Button>
          </div>
        </Card>
      </motion.section>
    </>
  )
}
