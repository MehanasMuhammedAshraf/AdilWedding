type FloralAccentProps = {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  className?: string
  variant?: 'light' | 'dark'
}

export function FloralAccent({ position, className = '', variant = 'light' }: FloralAccentProps) {
  const flipX = position.includes('right')
  const flipY = position.includes('bottom')
  const stroke = variant === 'dark' ? '#e8d5c4' : '#b8956f'
  const fill = variant === 'dark' ? 'rgba(232, 213, 196, 0.15)' : 'rgba(184, 149, 111, 0.12)'

  return (
    <svg
      className={`pointer-events-none absolute h-28 w-28 opacity-50 md:h-36 md:w-36 ${className}`}
      style={{
        transform: `scale(${flipX ? -1 : 1}, ${flipY ? -1 : 1})`,
        ...(position === 'top-left' && { top: 0, left: 0 }),
        ...(position === 'top-right' && { top: 0, right: 0 }),
        ...(position === 'bottom-left' && { bottom: 0, left: 0 }),
        ...(position === 'bottom-right' && { bottom: 0, right: 0 }),
      }}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden
    >
      <path
        d="M8 95 C25 70 15 40 35 25 C20 45 25 65 8 95Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="0.8"
      />
      <path
        d="M20 100 C40 75 55 55 75 35 C55 60 40 80 20 100Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="0.8"
      />
      <circle cx="42" cy="38" r="4" fill={stroke} opacity="0.35" />
      <circle cx="58" cy="52" r="3" fill={stroke} opacity="0.25" />
      <path
        d="M30 88 Q50 72 68 58"
        stroke={stroke}
        strokeWidth="0.6"
        opacity="0.5"
      />
      <path
        d="M12 78 Q28 62 48 48"
        stroke={stroke}
        strokeWidth="0.5"
        opacity="0.35"
      />
    </svg>
  )
}

export function FloralDivider({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 80" fill="none" width="24" height="80" aria-hidden>
      <path
        d="M12 4 C8 20 16 36 12 52 C8 68 16 76 12 76"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
      <circle cx="12" cy="20" r="2.5" fill="currentColor" opacity="0.5" />
      <circle cx="12" cy="40" r="3" fill="currentColor" opacity="0.7" />
      <circle cx="12" cy="60" r="2.5" fill="currentColor" opacity="0.5" />
      <path d="M6 28 Q12 24 18 28" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <path d="M6 52 Q12 48 18 52" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
    </svg>
  )
}
