import { motion } from 'framer-motion'

export function TextReveal({
  text,
  className = '',
  delay = 0,
}: {
  text: string
  className?: string
  delay?: number
}) {
  return (
    <span className={`inline-flex flex-wrap justify-center ${className}`} aria-label={text}>
      {text.split('').map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          className="inline-block"
          initial={{ opacity: 0, y: 40, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.7,
            delay: delay + i * 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ transformPerspective: 600 }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}
