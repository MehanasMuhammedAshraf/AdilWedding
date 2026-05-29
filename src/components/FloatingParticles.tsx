import { motion } from 'framer-motion'

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${(i * 17 + 7) % 100}%`,
  top: `${(i * 23 + 11) % 100}%`,
  size: 2 + (i % 3),
  duration: 4 + (i % 5),
  delay: i * 0.3,
}))

export function FloatingParticles({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute h-1.5 w-1.5 rounded-full bg-caramel/40"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
