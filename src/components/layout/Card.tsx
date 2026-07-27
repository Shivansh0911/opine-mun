import type { ReactNode } from 'react'

type Variant = 'default' | 'mun' | 'dark'

const variants: Record<Variant, React.CSSProperties & { borderColor: string }> = {
  default: { background: 'var(--surface-card)', borderColor: 'var(--ink-950)', boxShadow: 'var(--shadow-brutal)' },
  mun: { background: 'var(--surface-mun)', borderColor: 'var(--ink-950)', boxShadow: 'var(--shadow-brutal-mun)' },
  dark: { background: 'var(--surface-inverse)', borderColor: 'var(--gold-500)', color: 'var(--text-on-dark)', boxShadow: '6px 6px 0 var(--gold-500)' },
}

export function Card({ children, variant = 'default', padding = '32px' }: { children: ReactNode; variant?: Variant; padding?: string }) {
  const { borderColor, boxShadow, ...rest } = variants[variant]
  return (
    <div
      style={{
        borderRadius: 'var(--radius-lg)',
        border: `3px solid ${borderColor}`,
        boxShadow,
        padding,
        transition: 'box-shadow var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
        ...rest,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translate(-3px,-3px)'
        e.currentTarget.style.boxShadow = (boxShadow as string).replace(/^\d+px \d+px/, '9px 9px')
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translate(0,0)'
        e.currentTarget.style.boxShadow = boxShadow as string
      }}
    >
      {children}
    </div>
  )
}
