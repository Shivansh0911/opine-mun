export function SectionHeading({
  eyebrow,
  title,
  align = 'left',
}: {
  eyebrow?: string
  title: string
  align?: 'left' | 'center'
}) {
  return (
    <div
      style={{
        textAlign: align,
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        alignItems: align === 'center' ? 'center' : 'flex-start',
      }}
    >
      {eyebrow && (
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-label)',
            fontWeight: 700,
            letterSpacing: 'var(--ls-eyebrow)',
            textTransform: 'uppercase',
            color: 'var(--ink-950)',
            background: 'var(--accent-mun)',
            border: '2px solid var(--ink-950)',
            padding: '6px 12px',
            borderRadius: 'var(--radius-sm)',
          }}
        >
          {eyebrow}
        </span>
      )}
      <h2 style={{ fontSize: 'var(--text-display-m)', color: 'var(--text-primary)' }}>{title}</h2>
    </div>
  )
}
