import { motion } from 'framer-motion'
import { Badge } from '../components/core/Badge'
import { Card } from '../components/layout/Card'
import { SectionHeading } from '../components/layout/SectionHeading'

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
}

const pillars = [
  {
    title: 'Health',
    body: 'Promoting awareness, well-being, healthcare accessibility, mental health advocacy, and conversations that encourage healthier communities.',
  },
  {
    title: 'Environment',
    body: 'Addressing climate change, sustainability, biodiversity, conservation, and the responsibility we share in protecting our planet.',
  },
  {
    title: 'Humanity',
    body: 'Championing human rights, equality, education, inclusion, social justice, and the values that connect us across cultures and borders.',
  },
]

export default function About() {
  return (
    <>
      <motion.section
        {...fadeUp}
        style={{ padding: '80px 40px 40px', maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}
      >
        <Badge tone="dark">
          What is Opine?
        </Badge>
        <h1 style={{ fontSize: 'var(--text-display-l)', color: 'var(--ink-950)' }}>ABOUT US</h1>
        <p style={{ fontSize: 'var(--text-body-l)', color: 'var(--text-secondary)', maxWidth: '640px' }}>
          Opine is a <b>youth-led global organization</b> founded on the belief that an{' '}
          <b>opinion needs no permission</b>.
        </p>
      </motion.section>

      <section style={{ padding: '40px 40px 100px', maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <motion.div {...fadeUp}>
          <SectionHeading eyebrow="Mission" title="Why We Exist" />
          <p style={{ marginTop: '16px', color: 'var(--text-secondary)', fontSize: 'var(--text-body-l)' }}>
            In a world where the voices of young people are often overlooked, Opine exists to create a space where
            ideas are not only welcomed but valued. We believe that meaningful conversations have the power to
            challenge perspectives, inspire action, and shape a better future. Every opinion matters, every voice
            deserves to be heard, and every discussion has the potential to spark change.
          </p>
        </motion.div>

        <motion.div {...fadeUp}>
          <SectionHeading eyebrow="Our Pillars" title="Three Pillars That Shape Our World" />
          <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {pillars.map((pillar) => (
              <Card key={pillar.title} padding="30px">
                <h3 style={{ fontSize: 'var(--text-heading)', color: 'var(--ink-950)', marginBottom: '10px' }}>
                  {pillar.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-body-l)' }}>
                  {pillar.body}
                </p>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp}>
          <SectionHeading eyebrow="Our Approach" title="Empowering Young Changemakers" />
          <p style={{ marginTop: '16px', color: 'var(--text-secondary)', fontSize: 'var(--text-body-l)' }}>
            Through discussions, campaigns, research, leadership initiatives, and collaborative projects, Opine
            empowers young people to think critically, speak confidently, and contribute meaningfully to the global
            dialogue. We are more than an organization — we are a movement of young changemakers united by curiosity,
            compassion, and the courage to speak up.
          </p>
        </motion.div>

        <motion.div {...fadeUp}>
          <Card variant="dark" padding="30px">
            <p style={{ color: 'var(--cream-50)', fontSize: 'var(--text-heading)', fontFamily: 'var(--font-display)', textTransform: 'uppercase', lineHeight: 1.2 }}>
              "Because the future isn't built by those who stay silent. It's built by those who dare to opine."
            </p>
          </Card>
        </motion.div>
      </section>
    </>
  )
}
