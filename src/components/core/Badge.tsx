import type { ReactNode } from 'react'

type Tone = 'light' | 'dark' | 'mun' | 'outline'

const tones: Record<Tone, React.CSSProperties> = {
  light: { background: 'var(--cream-50)', color: 'var(--ink-950)', borderColor: 'var(--ink-950)' },
  dark: { background: 'var(--brown-700)', color: 'var(--cream-50)', borderColor: 'var(--cream-50)' },
  mun: { background: 'var(--accent-mun)', color: 'var(--ink-950)', borderColor: 'var(--ink-950)' },
  outline: { background: 'transparent', color: 'var(--text-primary)', borderColor: 'var(--border-strong)' },
}

export function Badge({ children, tone = 'light' }: { children: ReactNode; tone?: Tone }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignSelf: 'flex-start',
        width: 'fit-content',
        alignItems: 'center',
        padding: '9px 18px',
        borderRadius: 'var(--radius-pill)',
        border: '2px solid',
        fontFamily: 'var(--font-body)',
        fontSize: '15px',
        fontWeight: 600,
        ...tones[tone],
      }}
    >
      {children}
    </span>
  )
}
