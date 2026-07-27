export function Avatar({ initials, size = 88 }: { initials: string; size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '999px',
        background: 'var(--taupe-400)',
        color: 'var(--ink-950)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-display)',
        fontSize: size * 0.34,
        flexShrink: 0,
      }}
    >
      {initials}
    </div>
  )
}
