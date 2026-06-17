import { motion } from 'framer-motion'
import { wedding } from '../data/wedding'
import { FloatingParticles } from './FloatingParticles'
import { fadeUp, viewportOnce } from '../lib/motion'

export function QuranVerse() {
  const { quranVerse } = wedding
  const words = quranVerse.arabic.split(' ')

  return (
    <section id="quran" className="quran-section section-shell relative overflow-hidden">
      <div className="quran-section-bg pointer-events-none absolute inset-0">
        <img src={wedding.images.quran} alt="" loading="lazy" />
      </div>
      <div className="quran-section-overlay pointer-events-none absolute inset-0" />
      <div className="pattern-bg pointer-events-none absolute inset-0 opacity-30" />
      <FloatingParticles className="opacity-20" />

      <div className="content-wrap relative max-w-4xl">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} custom={0} className="type-eyebrow mb-3 text-brown-light">
            {wedding.sections.quran.eyebrow}
          </motion.p>
          <motion.p variants={fadeUp} custom={0.1} className="type-body-serif mb-10 italic text-brown/85">
            {quranVerse.reference}
          </motion.p>

          <motion.div variants={fadeUp} custom={0.2} className="mx-auto mb-10 flex w-fit items-center gap-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-caramel/60 md:w-20" />
            <motion.svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="text-caramel"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            >
              <path d="M12 2L13.5 7.5L19 7.5L14.5 11L16 16.5L12 13L8 16.5L9.5 11L5 7.5L10.5 7.5L12 2Z" fill="currentColor" />
            </motion.svg>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-caramel/60 md:w-20" />
          </motion.div>

          <blockquote className="quran-verse-arabic quran-arabic-size font-arabic mx-auto mb-10 max-w-3xl">
            {words.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                className="mx-1 inline-block"
                initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={viewportOnce}
                transition={{ delay: i * 0.04, duration: 0.5 }}
              >
                {word}
              </motion.span>
            ))}
          </blockquote>

          <motion.div variants={fadeUp} custom={0.4} className="divider-ornament mb-10">
            <span className="text-caramel/70">﷽</span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            custom={0.5}
            className="type-body-serif mx-auto max-w-2xl italic text-brown/90"
          >
            &ldquo;{quranVerse.translation}&rdquo;
          </motion.p>

          <motion.p variants={fadeUp} custom={0.6} className="type-caption mt-8 text-brown/85">
            — {quranVerse.surah} {quranVerse.ayah}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
