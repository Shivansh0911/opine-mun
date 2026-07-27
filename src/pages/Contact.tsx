import { motion } from 'framer-motion'
import { Card } from '../components/layout/Card'
import { SectionHeading } from '../components/layout/SectionHeading'

const ROWS = [
  { label: 'Email', text: 'theopineorganisation@gmail.com', href: 'mailto:theopineorganisation@gmail.com', external: false },
  { label: 'Instagram', text: '@opinehouse', href: 'https://www.instagram.com/opinehouse', external: true },
  { label: 'LinkedIn', text: 'The Opine Organisation', href: 'https://www.linkedin.com/company/the-opine-organisation', external: true },
]

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ padding: '80px 40px 100px', maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}
    >
      <SectionHeading eyebrow="Get In Touch" title="Contact" />
      <Card padding="32px">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {ROWS.map((row, i) => (
            <div
              key={row.label}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '16px',
                borderBottom: i < ROWS.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                paddingBottom: '14px',
              }}
            >
              <span style={{ fontSize: '14px', fontWeight: 700, letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                {row.label}
              </span>
              <a
                href={row.href}
                {...(row.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                style={{ fontWeight: 600, color: 'var(--brand-primary)', textDecoration: 'none', textAlign: 'right', wordBreak: 'break-word' }}
                onMouseEnter={(e) => { e.currentTarget.style.textDecoration = 'underline' }}
                onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none' }}
              >
                {row.text}
              </a>
            </div>
          ))}
        </div>
      </Card>
    </motion.section>
  )
}
