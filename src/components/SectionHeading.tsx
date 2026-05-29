import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../lib/motion'

export function SectionHeading({
  label,
  title,
  subtitle,
  light = false,
  scriptTitle = false,
}: {
  label: string
  title: ReactNode
  subtitle?: string
  light?: boolean
  scriptTitle?: boolean
}) {
  return (
    <motion.div
      className="mb-14 text-center md:mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
    >
      <motion.p
        variants={fadeUp}
        custom={0}
        className={`mb-3 text-xs uppercase tracking-[0.35em] ${light ? 'text-gold/80' : 'text-gold'}`}
      >
        {label}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        custom={0.1}
        className={`${
          scriptTitle
            ? 'font-script text-5xl md:text-6xl lg:text-7xl'
            : 'font-display text-4xl font-light md:text-5xl lg:text-6xl'
        } text-chocolate`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          custom={0.2}
          className={`mx-auto mt-5 max-w-xl font-display text-lg italic ${
            light ? 'text-brown/55' : 'text-brown/55'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div variants={fadeUp} custom={0.3} className="divider-ornament mt-8">
        <motion.span
          className="text-gold"
          animate={{ rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        >
          ✦
        </motion.span>
      </motion.div>
    </motion.div>
  )
}
