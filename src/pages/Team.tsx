import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '../components/core/Badge'
import { Card } from '../components/layout/Card'
import { SectionHeading } from '../components/layout/SectionHeading'
import { Avatar } from '../components/layout/Avatar'

type Member = {
  name: string
  role: string
  bio: string
  photo: string
  instagram?: { handle: string; url: string }
  linkedin?: string
}

const SECRETARIAT: Member[] = [
  {
    name: 'Nayasha Vats',
    role: 'Founder & Secretary General',
    bio: 'I believe impactful leadership starts with a clear, well reasoned perspective. As an aspiring doctor, I apply analytical rigor to Opine: streamlining our vision to ensure our strategy remains sharp, purpose driven, and impossible to overlook.',
    photo: '/nayasha.jpeg',
    instagram: { handle: '@nayashaa._', url: 'https://instagram.com/nayashaa._' },
  },
  {
    name: 'Shivansh Ojha',
    role: 'Director General',
    bio: "I'm a final-year Electrical Engineering student at BITS Pilani, Hyderabad Campus, passionate about technology and innovation. I believe Opine is a space where diverse perspectives spark meaningful dialogue and inspire real change.",
    photo: '/shivansh.jpeg',
    instagram: { handle: '@shivanshshekher', url: 'https://instagram.com/shivanshshekher' },
    linkedin: 'https://www.linkedin.com/in/shivansh-shekher-ojha/',
  },
  {
    name: 'Aryan Agrawal',
    role: 'Executive Director',
    bio: 'I am a final-year Computer Science student with a passion for AI, technology, and building impactful products. I believe Opine empowers people to share diverse perspectives, fostering meaningful discussions that can inspire ideas and drive positive change.',
    photo: '/aryan.jpeg',
    instagram: { handle: '@aryannagrawall', url: 'https://instagram.com/aryannagrawall' },
    linkedin: 'https://www.linkedin.com/in/aryan-kamlesh-agrawal',
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
} as const

function Socials({ m, size = 15 }: { m: Member; size?: number }) {
  if (!m.instagram && !m.linkedin) return null
  return (
    <div style={{ display: 'flex', gap: '12px', fontSize: size, fontWeight: 700, color: 'var(--brand-primary)' }}>
      {m.instagram && (
        <a href={m.instagram.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
          Instagram
        </a>
      )}
      {m.linkedin && (
        <a href={m.linkedin} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
          LinkedIn
        </a>
      )}
    </div>
  )
}

export default function Team() {
  const [selected, setSelected] = useState<Member | null>(null)

  return (
    <>
      <section style={{ padding: '80px 40px 20px', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <SectionHeading eyebrow="Who Runs Opine" title="Core Secretariat" />
        <p style={{ marginTop: '16px', maxWidth: '640px', fontSize: 'var(--text-body-l)', color: 'var(--text-secondary)' }}>
          The Opine Organisation is a collective of young minds who traded polite silence for actual impact. We skip the
          administrative fluff and turn bold perspectives into real influence.
        </p>
      </section>

      <section style={{ padding: '32px 40px 100px', maxWidth: 'var(--container-max)', margin: '0 auto', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        {SECRETARIAT.map((p) => (
          <motion.div key={p.name} {...fadeUp}>
            <div
              role="button"
              tabIndex={0}
              onClick={() => setSelected(p)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelected(p)}
              style={{ cursor: 'pointer', outline: 'none' }}
            >
              <Card padding="28px">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px', width: '280px' }}>
                  <Avatar
                    initials={p.name
                      .split(' ')
                      .map((w) => w[0])
                      .join('')}
                    src={p.photo}
                    alt={p.name}
                    size={72}
                  />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '17px' }}>{p.name}</div>
                    <Badge tone="mun">{p.role}</Badge>
                  </div>
                  <p
                    style={{
                      fontSize: '15px',
                      color: 'var(--text-secondary)',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {p.bio}
                  </p>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--brand-primary)' }}>Read more →</span>
                </div>
              </Card>
            </div>
          </motion.div>
        ))}
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelected(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              background: 'rgba(0,0,0,0.55)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'var(--surface-card, #fff)',
                borderRadius: '20px',
                width: 'min(560px, 100%)',
                maxHeight: '90vh',
                overflow: 'auto',
                position: 'relative',
              }}
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  width: '36px',
                  height: '36px',
                  borderRadius: '999px',
                  border: 'none',
                  cursor: 'pointer',
                  background: 'rgba(0,0,0,0.06)',
                  color: 'var(--ink-950)',
                  fontSize: '20px',
                  lineHeight: 1,
                  zIndex: 2,
                }}
              >
                ×
              </button>
              <img
                src={selected.photo}
                alt={selected.name}
                style={{
                  width: '100%',
                  height: '340px',
                  objectFit: 'cover',
                  borderTopLeftRadius: '20px',
                  borderTopRightRadius: '20px',
                  display: 'block',
                }}
              />
              <div style={{ padding: '28px 32px 36px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '26px', color: 'var(--ink-950)' }}>{selected.name}</div>
                  <div style={{ marginTop: '8px' }}>
                    <Badge tone="mun">{selected.role}</Badge>
                  </div>
                </div>
                <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>{selected.bio}</p>
                <Socials m={selected} size={16} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
