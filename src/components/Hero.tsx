import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import { wedding } from '../data/wedding'
import { FloatingParticles } from './FloatingParticles'
import { FloralAccent } from './FloralAccent'

const petals = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  left: `${8 + (i * 11) % 88}%`,
  delay: i * 0.6,
  duration: 12 + (i % 4) * 2,
  size: 5 + (i % 3) * 2,
}))

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const opacityContent = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0.85])

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen overflow-hidden bg-sand"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div className="hero-bg-layer" style={{ y: bgY }}>
          <motion.div
            className="hero-bg-image will-change-transform"
            style={{ backgroundImage: `url(${wedding.images.hero})` }}
            animate={{ scale: [1, 1.03, 1.01, 1.03] }}
            transition={{
              duration: 32,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
          />
          <div className="hero-veil-drift" aria-hidden />
        </motion.div>
        <div className="hero-overlay" />
        <div className="hero-readability-vignette" />

        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-caramel/8 blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gold-light/10 blur-3xl" />
          <div className="absolute left-0 top-1/2 h-64 w-64 rounded-full bg-taupe/8 blur-3xl" />
        </div>

        <div className="pattern-bg absolute inset-0 opacity-15" />
        <FloatingParticles />

        <FloralAccent position="top-left" className="left-2 top-20 md:left-8 md:top-24" />
        <FloralAccent position="top-right" className="right-2 top-20 md:right-8 md:top-24" />
        <FloralAccent position="bottom-left" className="bottom-32 left-2 md:bottom-40 md:left-8" />
        <FloralAccent position="bottom-right" className="bottom-32 right-2 md:bottom-40 md:right-8" />

        {petals.map((petal) => (
          <motion.div
            key={petal.id}
            className="absolute bg-caramel/35"
            style={{
              left: petal.left,
              width: petal.size,
              height: petal.size * 1.4,
              top: '-5%',
              borderRadius: '50% 0 50% 50%',
            }}
            animate={{
              y: ['0vh', '100vh'],
              x: [0, Math.sin(petal.id) * 40],
              rotate: [0, 180],
              opacity: [0, 0.4, 0.4, 0],
            }}
            transition={{
              duration: petal.duration,
              repeat: Infinity,
              delay: petal.delay,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <motion.div
        className="hero-content-text relative z-10 mx-auto w-full max-w-4xl px-6 pb-44 pt-32 text-center md:pb-48 md:pt-40"
        style={{ opacity: opacityContent }}
      >
        <motion.p
          className="font-arabic mb-2 mt-4 text-2xl text-chocolate md:mt-8 md:text-3xl"
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {wedding.bismillah}
        </motion.p>

        <motion.p
          className="mb-12 text-xs uppercase tracking-[0.3em] text-brown-light md:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {wedding.bismillahTranslation}
        </motion.p>

        <motion.div
          className="mx-auto mb-8 flex items-center justify-center gap-4"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-caramel md:w-24" />
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-caramel"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <path
              d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8L12 2Z"
              fill="currentColor"
              opacity="0.8"
            />
          </motion.svg>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-caramel md:w-24" />
        </motion.div>

        <motion.p
          className="mb-3 text-sm uppercase tracking-[0.35em] text-brown-light md:text-base"
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          animate={{ opacity: 1, letterSpacing: '0.35em' }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          {wedding.invitation.headline}
        </motion.p>

        <motion.p
          className="mb-6 font-display text-base italic text-brown/70 md:text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.8 }}
        >
          {wedding.invitation.subline}
        </motion.p>

        <div className="my-4">
          <motion.h1
            className="font-script hero-name text-6xl leading-tight md:text-8xl lg:text-9xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {wedding.bride.shortName}
          </motion.h1>

          <motion.div
            className="my-3 flex items-center justify-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 1.5, type: 'spring', stiffness: 200 }}
          >
            <span className="font-display text-3xl italic text-caramel md:text-4xl">&</span>
          </motion.div>

          <motion.h1
            className="font-script hero-name text-6xl leading-tight md:text-8xl lg:text-9xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {wedding.groom.shortName}
          </motion.h1>
        </div>

        <motion.p
          className="mx-auto mb-10 max-w-md px-2 font-display text-sm italic leading-relaxed text-brown/65 md:mb-12 md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
        >
          {wedding.invitation.hostLine}
        </motion.p>

        <motion.p
          className="mx-auto max-w-lg font-display text-sm italic text-brown/50 md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.85 }}
        >
          {wedding.tagline}
        </motion.p>

        <motion.div
          className="hero-date-block mx-auto mt-10 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.8 }}
        >
          <div className="mb-3 flex items-center justify-center gap-2 text-gold">
            <Calendar className="h-4 w-4" />
            <p className="font-display text-lg tracking-wide text-chocolate md:text-xl">
              Sunday, 26 July 2026
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 text-brown/60">
            <MapPin className="h-3.5 w-3.5 text-caramel" />
            <p className="font-display text-sm md:text-base">{wedding.venue.full}</p>
          </div>
          <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-brown-light">
            Nikah at 12:30 PM · Reception follows
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="pointer-events-none absolute bottom-24 left-1/2 z-20 -translate-x-1/2 md:bottom-28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-brown-light/70">Scroll</span>
          <div className="relative h-12 w-6 rounded-full border border-caramel/40 p-1">
            <motion.div
              className="mx-auto h-2 w-1 rounded-full bg-caramel"
              animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 leading-[0]">
        <svg viewBox="0 0 1440 82" fill="none" preserveAspectRatio="none" className="block w-full" aria-hidden>
          <path d="M0 82V40C240 82 480 0 720 40C960 82 1200 0 1440 40V82H0Z" fill="#faf6f1" />
        </svg>
      </div>
    </section>
  )
}
