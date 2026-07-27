import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '../components/core/Badge'
import { Button } from '../components/core/Button'
import { Card } from '../components/layout/Card'
import { SectionHeading } from '../components/layout/SectionHeading'

// On mobile, only the first N blocks show until "Load More". Desktop always shows all.
const INITIAL_VISIBLE = 3

const POSTS: [string, string, string | null][] = [
  ['Why Small Delegations Punch Harder', 'Research', 'MUN'],
  ['Guest Speaker: Reframing Climate Diplomacy for Gen Z', 'Guest Speaker', 'MUN'],
  ['The Case For Youth Voices in Local Policy', 'Research', null],
  ['Inside DISEC: Drafting a Resolution in 48 Hours', 'Recap', 'MUN'],
]

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
}

const CSS = `
.blog-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.blog-more { display: none; }
@media (max-width: 720px) {
  .blog-grid { grid-template-columns: 1fr; }
  .blog-grid:not(.is-expanded) .blog-extra { display: none; }
  .blog-more { display: flex; justify-content: center; }
}
`

export default function Blog() {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <style>{CSS}</style>
      <section style={{ padding: '80px 40px 20px', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <SectionHeading eyebrow="Writing" title="Research Blogs" />
      </section>

      <section style={{ padding: '32px 40px 100px', maxWidth: 'var(--container-max)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div className={expanded ? 'blog-grid is-expanded' : 'blog-grid'}>
          {POSTS.map((p, i) => (
            <motion.div key={p[0]} {...fadeUp} className={i >= INITIAL_VISIBLE ? 'blog-extra' : undefined}>
              <Card padding="24px">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <Badge tone="outline">{p[1]}</Badge>
                    {p[2] && <Badge tone="mun">{p[2]}</Badge>}
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--ink-950)', textTransform: 'uppercase' }}>{p[0]}</div>
                  <div style={{ fontSize: '15px', color: 'var(--text-muted)' }}>5 min read</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        {!expanded && (
          <div className="blog-more">
            <Button variant="outline" size="lg" onClick={() => setExpanded(true)}>
              Load More
            </Button>
          </div>
        )}
      </section>
    </>
  )
}
