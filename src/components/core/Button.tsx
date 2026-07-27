import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'mun' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const sizes: Record<Size, { padding: string; fontSize: string }> = {
  sm: { padding: '10px 20px', fontSize: '14px' },
  md: { padding: '14px 28px', fontSize: '15px' },
  lg: { padding: '18px 36px', fontSize: '16px' },
}

const variants: Record<Variant, React.CSSProperties> = {
  primary: { background: 'var(--brand-primary)', color: 'var(--text-on-brand)', borderColor: 'var(--ink-950)' },
  mun: { background: 'var(--accent-mun)', color: 'var(--ink-950)', borderColor: 'var(--ink-950)' },
  outline: { background: 'var(--surface-page)', color: 'var(--text-primary)', borderColor: 'var(--ink-950)' },
  ghost: { background: 'transparent', color: 'var(--text-primary)', border: '3px solid transparent', boxShadow: 'none' },
}

interface ButtonProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  to?: string
  href?: string
  external?: boolean
  onClick?: () => void
  type?: 'button' | 'submit'
}

export function Button({ children, variant = 'primary', size = 'md', to, href, external, onClick, type = 'button' }: ButtonProps) {
  const style: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    letterSpacing: 'var(--ls-label)',
    textTransform: 'uppercase' as const,
    borderRadius: 'var(--radius-md)',
    border: 'var(--border-brutal)',
    boxShadow: 'var(--shadow-brutal-sm)',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition:
      'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
    textDecoration: 'none',
    ...sizes[size],
    ...variants[variant],
  }

  const restShadow = variant === 'ghost' ? 'none' : 'var(--shadow-brutal-sm)'
  const hoverProps = {
    onMouseDown: (e: React.MouseEvent<HTMLElement>) => {
      e.currentTarget.style.transform = 'translate(3px,3px)'
      e.currentTarget.style.boxShadow = 'none'
    },
    onMouseUp: (e: React.MouseEvent<HTMLElement>) => {
      e.currentTarget.style.transform = 'translate(0,0)'
      e.currentTarget.style.boxShadow = restShadow
    },
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
      e.currentTarget.style.transform = 'translate(0,0)'
      e.currentTarget.style.boxShadow = restShadow
    },
  }

  if (to) {
    return (
      <Link to={to} style={style} {...hoverProps}>
        {children}
      </Link>
    )
  }
  if (href) {
    const ext = external ? { target: '_blank', rel: 'noreferrer' } : {}
    return (
      <a href={href} style={style} {...ext} {...hoverProps}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} style={style} {...hoverProps}>
      {children}
    </button>
  )
}
