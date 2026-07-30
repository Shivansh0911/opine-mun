export function Avatar({
  initials,
  size = 88,
  src,
  alt,
}: {
  initials: string
  size?: number
  src?: string
  alt?: string
}) {
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
        overflow: 'hidden',
      }}
    >
      {src ? (
        <img
          src={src}
          alt={alt ?? initials}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        initials
      )}
    </div>
  )
}
