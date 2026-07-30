import { motion } from 'framer-motion'
import { Badge } from '../components/core/Badge'
import { Card } from '../components/layout/Card'
import { SectionHeading } from '../components/layout/SectionHeading'

// Placeholder blocks while the blog is being prepared. Content coming soon.
const PLACEHOLDERS = [0, 1, 2, 3]

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
@media (max-width: 720px) {
  .blog-grid { grid-template-columns: 1fr; }
}
.blog-skel {
  border-radius: 6px;
  background: linear-gradient(90deg, var(--surface-muted, rgba(0,0,0,0.06)) 25%, rgba(0,0,0,0.03) 37%, var(--surface-muted, rgba(0,0,0,0.06)) 63%);
  background-size: 400% 100%;
  animation: blog-shimmer 1.6s ease infinite;
}
@keyframes blog-shimmer {
  0% { background-position: 100% 0; }
  100% { background-position: 0 0; }
}
`

export default function Blog() {
  return (
    <>
      <style>{CSS}</style>
      <section style={{ padding: '80px 40px 20px', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <SectionHeading eyebrow="Writing" title="Research Blogs" />
      </section>

      <section style={{ padding: '32px 40px 100px', maxWidth: 'var(--container-max)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div className="blog-grid">
          {PLACEHOLDERS.map((i) => (
            <motion.div key={i} {...fadeUp}>
              <Card padding="24px">
                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '14px', minHeight: '96px' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <Badge tone="outline">Coming Soon</Badge>
                  </div>
                  <div className="blog-skel" style={{ height: '18px', width: '85%' }} />
                  <div className="blog-skel" style={{ height: '18px', width: '60%' }} />
                  <div className="blog-skel" style={{ height: '13px', width: '30%', marginTop: '4px' }} />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        <div style={{ textAlign: 'center', fontSize: '15px', color: 'var(--text-muted)' }}>
          Research blogs are on the way — check back soon.
        </div>
      </section>
    </>
  )
}
