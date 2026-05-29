import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wedding } from '../data/wedding'
import { SectionHeading } from './SectionHeading'
import { FloatingParticles } from './FloatingParticles'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calculateTimeLeft(): TimeLeft {
  const difference = new Date(wedding.weddingDate).getTime() - Date.now()

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

const units = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' },
] as const

function CountdownDigit({ value, label, index }: { value: number; label: string; index: number }) {
  return (
    <motion.div
      className="countdown-card group relative"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.12, type: 'spring', stiffness: 400, damping: 25 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Corner ornaments */}
      <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-gold/40" />
      <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-gold/40" />
      <span className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-gold/40" />
      <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-gold/40" />

      <div className="relative px-4 py-8 md:px-6 md:py-10">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            className="font-display block text-5xl font-light tabular-nums text-chocolate md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
            transition={{ duration: 0.35 }}
          >
            {String(value).padStart(2, '0')}
          </motion.span>
        </AnimatePresence>
        <span className="mt-3 block text-[10px] uppercase tracking-[0.25em] text-gold md:text-xs">
          {label}
        </span>
      </div>

      {/* Shimmer on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      </div>
    </motion.div>
  )
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="countdown-section relative z-20 bg-cream pattern-bg">
      <div className="absolute -top-px left-0 right-0 h-px bg-cream" aria-hidden />
      <FloatingParticles className="opacity-50" />

      {/* Soft ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-rose/10 blur-3xl" />
      </div>

      {/* Decorative side flourishes */}
      <div className="pointer-events-none absolute left-4 top-1/2 hidden -translate-y-1/2 opacity-20 md:block lg:left-12">
        <svg width="40" height="200" viewBox="0 0 40 200" fill="none">
          <path
            d="M20 0 Q40 50 20 100 Q0 150 20 200"
            stroke="#c9a962"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="20" cy="50" r="3" fill="#c9a962" />
          <circle cx="20" cy="100" r="4" fill="#c9a962" />
          <circle cx="20" cy="150" r="3" fill="#c9a962" />
        </svg>
      </div>
      <div className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 scale-x-[-1] opacity-20 md:block lg:right-12">
        <svg width="40" height="200" viewBox="0 0 40 200" fill="none">
          <path
            d="M20 0 Q40 50 20 100 Q0 150 20 200"
            stroke="#c9a962"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="20" cy="50" r="3" fill="#c9a962" />
          <circle cx="20" cy="100" r="4" fill="#c9a962" />
          <circle cx="20" cy="150" r="3" fill="#c9a962" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-20 md:py-28">
        <SectionHeading
          label="Save the Date"
          title={
            <>
              Counting Down to{' '}
              <span className="font-script text-5xl text-chocolate md:text-6xl lg:text-7xl">Forever</span>
            </>
          }
          subtitle="The countdown has begun"
        />

        {/* Timer grid */}
        <div className="relative mx-auto max-w-3xl">
          <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4 md:gap-4">
            {units.map(({ key, label }, index) => (
              <div key={key} className="relative">
                <CountdownDigit value={timeLeft[key]} label={label} index={index} />
                {/* Colon separators on desktop */}
                {index < units.length - 1 && (
                  <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 font-display text-3xl text-gold/30 md:block">
                    :
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Connecting line beneath cards */}
          <motion.div
            className="mx-auto mt-10 h-px max-w-md bg-gradient-to-r from-transparent via-gold/40 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <motion.p
            className="mt-8 text-center font-display text-base italic text-charcoal/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            We can&apos;t wait to celebrate with you
          </motion.p>
        </div>
      </div>
    </section>
  )
}
