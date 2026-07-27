import type { ReactNode } from 'react'
import { NavBar } from '../components/navigation/NavBar'
import { Footer } from '../components/navigation/Footer'
import { ScrollToTop } from '../components/navigation/ScrollToTop'

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div style={{ background: 'var(--surface-page)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ScrollToTop />
      <NavBar />
      <div style={{ flex: 1 }}>{children}</div>
      <Footer />
    </div>
  )
}
