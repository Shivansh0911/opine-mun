import { motion } from 'framer-motion'
import { Card } from '../components/layout/Card'
import { Button } from '../components/core/Button'
import { Badge } from '../components/core/Badge'
import { SectionHeading } from '../components/layout/SectionHeading'

//Paste Opine MUN registration Google Form link here.
const FORM_URL = 'https://forms.gle/jwWwzvFZ3aPZRqcaA'

const details = [
  ['Dates', '05 & 06 September 2026'],
  ['Delegate Fee', '₹500 / $5.24'],
]

const awards = [
  ['Best Delegate', '₹3,000'],
  ['High Commendation', '₹2,000'],
  ['Special Mention', '₹1,000'],
]

export default function Register() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ padding: '80px 40px 100px', maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '36px' }}
    >
      <SectionHeading eyebrow="Join Opine MUN" title="Register" />
      <p style={{ fontSize: 'var(--text-body-l)', color: 'var(--text-secondary)', maxWidth: '620px' }}>
        Secure your seat at Opine MUN. Registration is handled through our official Google Form — click below and it will
        open in a new tab.
      </p>

      {/* Key details */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
        {details.map(([label, value]) => (
          <Card key={label} padding="26px">
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-label)', fontWeight: 700, letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'var(--brown-700)' }}>
              {label}
            </span>
            <div style={{ marginTop: '8px', fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-m)', fontWeight: 900, color: 'var(--ink-950)', lineHeight: 1, textTransform: 'uppercase' }}>
              {value}
            </div>
          </Card>
        ))}
      </div>

      {/* Cash prizes */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', flexWrap: 'wrap' }}>
          <h2 style={{ fontSize: 'var(--text-display-m)', color: 'var(--text-primary)' }}>Cash Prizes</h2>
          <Badge tone="mun">Total ₹6,000 pool</Badge>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {awards.map(([title, amount]) => (
            <Card key={title} variant="dark" padding="24px">
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-heading)', fontWeight: 900, color: 'var(--cream-50)', lineHeight: 1 }}>
                {amount}
              </div>
              <span style={{ display: 'block', marginTop: '10px', fontFamily: 'var(--font-body)', fontSize: 'var(--text-small)', fontWeight: 700, letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--gold-300)' }}>
                {title}
              </span>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Card variant="mun" padding="40px">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
          <div style={{ fontWeight: 800, fontSize: 'var(--text-display-m)', color: 'var(--ink-950)', fontFamily: 'var(--font-display)', textTransform: 'uppercase', lineHeight: 1.1 }}>
            Delegate Registration
          </div>
          <p style={{ fontSize: 'var(--text-body)', color: 'var(--text-secondary)' }}>
            4 councils, real agendas, one weekend — <b>₹500</b> per delegate. Fill out the form to apply for a council
            & committee.
          </p>
          <Button variant="primary" size="lg" href={FORM_URL} external>
            Open Registration Form
          </Button>
        </div>
      </Card>
    </motion.section>
  )
}
